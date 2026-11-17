/* Weekend Ticket – gửi dữ liệu test về Supabase (ẩn danh, chỉ ghi, không đọc).
   Cần: URL + publishable key bên dưới. Không dùng secret / service_role key ở đây. */
(function () {
  "use strict";
  var CFG = {
    url: "https://odvgtjyxsjbqbydjryyd.supabase.co",
    key: "sb_publishable_wffx-H3nNlvWBsM5r_V3Ug_ZMUG09bu",
    appVersion: "v6",
    stateKey: "weekend-ticket:v1"
  };
  var K = { tester: "wt:tester", sessions: "wt:sessions", sent: "wt:sent", outbox: "wt:outbox" };
  var SCEN = [
    ["S1", "S1 – Cà phê & ăn uống Bình Thạnh"],
    ["S2", "S2 – Vui chơi Quận 10"],
    ["S3", "S3 – Sinh viên ngân sách thấp"],
    ["S4", "S4 – Xuất phát xa nhau"],
    ["S5", "S5 – Tự do"]
  ];

  function jget(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function jset(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  function uuid() {
    if (window.crypto && crypto.randomUUID) return crypto.randomUUID();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      var r = (Math.random() * 16) | 0; return (c === "x" ? r : (r & 3) | 8).toString(16);
    });
  }
  function tester() { return jget(K.tester, null); }
  function canSend() { var t = tester(); return !!(t && t.consent && t.code); }

  /* ---------- gửi dữ liệu (insert-only, có hàng đợi khi mất mạng) ---------- */
  function post(table, row) {
    return fetch(CFG.url + "/rest/v1/" + table, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: CFG.key,
        Authorization: "Bearer " + CFG.key,
        Prefer: "return=minimal"
      },
      body: JSON.stringify(row),
      keepalive: true
    }).then(function (r) {
      if (!r.ok) return r.text().then(function (t) { throw new Error(r.status + " " + t); });
    });
  }
  function enqueue(table, row) {
    var q = jget(K.outbox, []); q.push({ qid: uuid(), table: table, row: row }); jset(K.outbox, q);
  }
  var flushing = false;
  function dropSent(ids) {
    var q = jget(K.outbox, []).filter(function (x) { return ids.indexOf(x.qid) < 0; }); jset(K.outbox, q);
  }
  function flush() {
    if (flushing || !canSend()) return;
    var q = jget(K.outbox, []); if (!q.length) return;
    flushing = true;
    // sessions phải đi trước feedback (khoá ngoại)
    q.sort(function (a, b) { return (a.table === "test_sessions" ? 0 : 1) - (b.table === "test_sessions" ? 0 : 1); });
    var done = [], failed = false;
    (function next(i) {
      if (i >= q.length || failed) {
        dropSent(done); flushing = false;
        if (!failed && jget(K.outbox, []).length) flush();
        return;
      }
      post(q[i].table, q[i].row).then(function () { done.push(q[i].qid); next(i + 1); }, function (e) {
        if (/^4\d\d/.test(String(e.message)) && !/^(401|408|429)/.test(String(e.message))) {
          console.warn("[WT] bỏ bản ghi lỗi", e.message); done.push(q[i].qid); next(i + 1); // lỗi dữ liệu, không thử lại mãi
        } else { failed = true; next(i); }
      });
    })(0);
  }
  function send(table, row) { enqueue(table, row); flush(); }
  window.addEventListener("online", flush);

  /* ---------- đọc trạng thái app ---------- */
  function groups() { var s = jget(CFG.stateKey, null); return (s && s.groups) || {}; }
  function currentGroup() {
    var g = groups(), m = /#\/(?:g|join)\/([A-Za-z0-9-]+)/.exec(location.hash || "");
    if (m) { var c = m[1].toUpperCase().replace(/^WT-?/, ""); if (g[c]) return g[c]; }
    var arr = Object.keys(g).map(function (k) { return g[k]; }).sort(function (a, b) { return b.createdAt - a.createdAt; });
    return arr[0] || null;
  }
  function mostCommon(a) {
    var c = {}, best = null; a.forEach(function (x) { c[x] = (c[x] || 0) + 1; if (best === null || c[x] > c[best]) best = x; }); return best;
  }
  function snapshot(g) {
    var mem = g.members || [], real = mem.filter(function (m) { return !m.isDemo; });
    var moods = {}, areas = [];
    mem.forEach(function (m) {
      var p = m.prefs || {};
      (p.moods || []).forEach(function (x) { moods[x] = 1; });
      if (p.homeArea) areas.push(p.homeArea);
    });
    var conf = (g.itineraries || []).filter(function (i) { return i.id === g.confirmedId; })[0] || null;
    var votes = {}; Object.keys(g.votes || {}).forEach(function (k) { var o = g.votes[k]; votes[o] = (votes[o] || 0) + 1; });
    var ev = g.events || [], cEv = null;
    for (var i = ev.length - 1; i >= 0; i--) if (ev[i].type === "plan_confirmed") { cEv = ev[i]; break; }
    var events = ev.slice(-80).map(function (e) {
      var o = { t: e.t, type: e.type }; ["optionId", "options", "remaining", "reason", "changed", "secFromJoin"].forEach(function (k) { if (e[k] !== undefined) o[k] = e[k]; }); return o;
    });
    var replan = ev.some(function (e) { return e.type === "option_unavailable" || e.type === "vote_reopened" || (e.type === "vote" && e.changed); });
    return {
      scenario: (tester() || {}).scenario || null,
      group_size: mem.length,
      budget: (g.generation && g.generation.budgetCap) || g.sharedBudget || null,
      start_district: areas.length ? mostCommon(areas) : null,
      moods: Object.keys(moods),
      app_version: CFG.appVersion,
      replan: replan,
      minutes: cEv ? Math.round((cEv.t - g.createdAt) / 60000) : null,
      plan: {
        confirmed: !!conf,
        real_members: real.length,
        demo_members: mem.length - real.length,
        options_generated: (g.itineraries || []).length + ((g.unavailable || []).length),
        unavailable: (g.unavailable || []).map(function (u) { return { id: u.id, reason: u.reason }; }),
        votes: votes,
        option: conf && {
          id: conf.id, strategy: conf.strategy, name: conf.name,
          stops: (conf.stops || []).map(function (s) { return { id: s.destId, arrive: s.arriveMin, stay: s.stayMin, costMid: s.costMid }; }),
          totals: conf.totals, compat: conf.compat && conf.compat.score
        },
        venue_count_in_app: (window.WT_VENUES || []).length,
        events: events
      }
    };
  }
  function sessionRow(g, id) {
    var s = snapshot(g);
    return { id: id, scenario: s.scenario, group_size: s.group_size, budget: s.budget, start_district: s.start_district,
      moods: s.moods, plan: s.plan, app_version: s.app_version };
  }

  /* ---------- tự gửi phiên khi nhóm chốt lịch trình ---------- */
  var timer = null;
  function scan() {
    if (!canSend()) return;
    var sent = jget(K.sent, {}), sess = jget(K.sessions, {}), g = groups(), changed = false;
    Object.keys(g).forEach(function (code) {
      var ev = g[code].events || [], last = null;
      for (var i = ev.length - 1; i >= 0; i--) if (ev[i].type === "plan_confirmed") { last = ev[i]; break; }
      if (!last || !g[code].confirmedId) return;
      var key = code + ":" + last.t; if (sent[key]) return;
      var id = uuid(); sent[key] = id; sess[code] = id; changed = true;
      send("test_sessions", sessionRow(g[code], id));
    });
    if (changed) { jset(K.sent, sent); jset(K.sessions, sess); }
  }
  try {
    var _set = Storage.prototype.setItem;
    Storage.prototype.setItem = function (k, v) {
      var r = _set.apply(this, arguments);
      if (k === CFG.stateKey) { clearTimeout(timer); timer = setTimeout(scan, 1500); }
      return r;
    };
  } catch (e) {}

  /* ---------- giao diện (modal) ---------- */
  var CSS = [
    ".wtx-fab{position:fixed;right:16px;bottom:16px;z-index:99998;background:#FF5A4D;color:#fff;border:0;border-radius:999px;padding:12px 18px;font:600 14px/1 system-ui,sans-serif;box-shadow:0 4px 14px rgba(0,0,0,.25);cursor:pointer}",
    ".wtx-ov{position:fixed;inset:0;z-index:99999;background:rgba(20,20,30,.55);display:flex;align-items:flex-start;justify-content:center;overflow:auto;padding:16px;font-family:system-ui,sans-serif}",
    ".wtx-box{background:#fff;color:#1d1d27;border-radius:16px;max-width:560px;width:100%;padding:20px;margin:auto;box-shadow:0 10px 40px rgba(0,0,0,.3)}",
    ".wtx-box h2{margin:0 0 6px;font-size:20px}.wtx-box p{margin:6px 0;font-size:14px;line-height:1.5;color:#555}",
    ".wtx-box label{display:block;font-size:13px;font-weight:600;margin:14px 0 4px}",
    ".wtx-box input[type=text],.wtx-box select,.wtx-box textarea{width:100%;box-sizing:border-box;border:1px solid #ccc;border-radius:10px;padding:10px;font-size:14px;font-family:inherit}",
    ".wtx-box textarea{min-height:60px}",
    ".wtx-row{display:flex;gap:6px;flex-wrap:wrap}",
    ".wtx-pill{flex:1;min-width:44px;text-align:center;border:1px solid #ccc;border-radius:10px;padding:9px 4px;font-size:14px;cursor:pointer;user-select:none;background:#fff}",
    ".wtx-pill.on{background:#FF5A4D;border-color:#FF5A4D;color:#fff;font-weight:700}",
    ".wtx-btn{border:0;border-radius:10px;padding:12px 16px;font-size:14px;font-weight:700;cursor:pointer;background:#FF5A4D;color:#fff}",
    ".wtx-btn.g{background:#eee;color:#333}",
    ".wtx-act{display:flex;gap:8px;justify-content:flex-end;margin-top:18px;flex-wrap:wrap}",
    ".wtx-err{color:#c0271b;font-size:13px;margin-top:8px}",
    ".wtx-small{font-size:12px;color:#777}",
    ".wtx-link{background:none;border:0;color:#777;text-decoration:underline;font-size:12px;cursor:pointer;padding:0}"
  ].join("");
  function el(tag, attrs, kids) {
    var n = document.createElement(tag);
    Object.keys(attrs || {}).forEach(function (k) {
      if (k === "text") n.textContent = attrs[k]; else if (k === "class") n.className = attrs[k];
      else if (k.indexOf("on") === 0) n.addEventListener(k.slice(2), attrs[k]); else n.setAttribute(k, attrs[k]);
    });
    (kids || []).forEach(function (c) { if (c) n.appendChild(typeof c === "string" ? document.createTextNode(c) : c); });
    return n;
  }
  function overlay(box) { var o = el("div", { class: "wtx-ov" }, [box]); document.body.appendChild(o); return o; }
  function scenarioSelect(val) {
    var s = el("select", { id: "wtx-scn" }, [el("option", { value: "", text: "— chọn kịch bản được giao —" })]);
    SCEN.forEach(function (x) { var o = el("option", { value: x[0], text: x[1] }); if (x[0] === val) o.selected = true; s.appendChild(o); });
    return s;
  }

  function consentModal() {
    var t = tester() || {}, err = el("div", { class: "wtx-err" });
    var code = el("input", { type: "text", id: "wtx-code", maxlength: "12", placeholder: "Ví dụ: T01", value: t.code || "" });
    var scn = scenarioSelect(t.scenario);
    var chk = el("input", { type: "checkbox", id: "wtx-ok" });
    var box = el("div", { class: "wtx-box" }, [
      el("h2", { text: "Trước khi bắt đầu" }),
      el("p", { text: "Đây là bản thử nghiệm của dự án Weekend Ticket (môn học). Khi bạn dùng thử và gửi phản hồi, chúng mình lưu lại ẩn danh: lựa chọn trong app (số người, ngân sách, sở thích, lịch trình được chọn) và câu trả lời khảo sát." }),
      el("p", { text: "Không thu tên thật, số điện thoại, email hay vị trí chính xác. Bạn có thể ngừng gửi dữ liệu bất cứ lúc nào." }),
      el("label", { for: "wtx-code", text: "Mã người test (do team đưa, không ghi tên thật)" }), code,
      el("label", { for: "wtx-scn", text: "Kịch bản" }), scn,
      el("label", { style: "display:flex;gap:8px;align-items:flex-start;font-weight:500" }, [chk, "Mình đồng ý để team lưu dữ liệu ẩn danh trên cho mục đích học tập."]),
      err,
      el("div", { class: "wtx-act" }, [
        el("button", { class: "wtx-btn g", text: "Không đồng ý, chỉ xem app", onclick: function () {
          jset(K.tester, { consent: false, code: "", scenario: "" }); o.remove(); }}),
        el("button", { class: "wtx-btn", text: "Đồng ý và bắt đầu", onclick: function () {
          var c = code.value.trim().toUpperCase();
          if (!/^[A-Z0-9-]{2,12}$/.test(c)) { err.textContent = "Mã gồm 2–12 chữ/số, ví dụ T01."; return; }
          if (!chk.checked) { err.textContent = "Cần tick đồng ý để tiếp tục, hoặc chọn \"Không đồng ý\"."; return; }
          jset(K.tester, { consent: true, code: c, scenario: scn.value || "", at: Date.now() });
          o.remove(); flush(); }})
      ])
    ]);
    var o = overlay(box);
  }

  var LIK = [
    ["easy_use", "Dễ dùng"],
    ["fit", "Gợi ý hợp với nhóm"],
    ["a1_distance", "Thông tin khoảng cách giúp mình chọn"],
    ["a2_source", "Có nguồn và ngày kiểm tra khiến mình tin hơn"],
    ["a3_revote", "Bình chọn lại / đổi kế hoạch dễ"],
    ["a4_privacy", "Thoải mái khi ràng buộc riêng (ngân sách…) không hiện tên"],
    ["reminder", "Mình muốn được nhắc lịch"]
  ];
  function pills(name, opts, state, multi) {
    var row = el("div", { class: "wtx-row" });
    opts.forEach(function (o) {
      var v = o[0], p = el("div", { class: "wtx-pill", role: "button", tabindex: "0", text: o[1] });
      p.addEventListener("click", function () {
        state[name] = state[name] === v ? null : v;
        Array.prototype.forEach.call(row.children, function (c, i) { c.className = "wtx-pill" + (state[name] === opts[i][0] ? " on" : ""); });
      });
      row.appendChild(p);
    });
    return row;
  }
  function feedbackModal() {
    var t = tester();
    if (!t || !t.consent) { consentModal(); return; }
    var g = currentGroup(), a = {}, err = el("div", { class: "wtx-err" }), venues = [];
    if (g) (g.itineraries || []).forEach(function (it) { (it.stops || []).forEach(function (s) { if (venues.indexOf(s.destId) < 0) venues.push(s.destId); }); });
    var byId = {}; (window.WT_VENUES || []).forEach(function (v) { byId[v.id] = v.name; });
    var issues = {}, kids = [
      el("h2", { text: "Phản hồi của bạn" }),
      el("p", { text: "Mã người test: " + t.code + ". Chấm 1 = rất không đồng ý, 5 = rất đồng ý. Bỏ qua câu nào không liên quan." })
    ];
    var scn = scenarioSelect(t.scenario); kids.push(el("label", { for: "wtx-scn", text: "Kịch bản vừa test" }), scn);
    LIK.forEach(function (q) {
      kids.push(el("label", { text: q[1] }), pills(q[0], [[1, "1"], [2, "2"], [3, "3"], [4, "4"], [5, "5"]], a));
    });
    kids.push(el("label", { text: "Bạn có hiểu rằng dữ liệu địa điểm chưa được xác minh chính thức?" }),
      pills("a5_unverified", [["Có", "Có"], ["Một phần", "Một phần"], ["Không", "Không"]], a));
    kids.push(el("label", { text: "Bạn có dùng app này thật không?" }),
      pills("would_use", [["Có", "Có"], ["Có thể", "Có thể"], ["Không", "Không"]], a));
    kids.push(el("label", { text: "Bạn có cần ai hỗ trợ khi dùng không?" }),
      pills("help_needed", [["0", "Không"], ["1", "1 lần"], ["2+", "2 lần trở lên"]], a));
    var tx = {};
    [["liked", "Điều bạn thích nhất"], ["annoyed", "Điều khó chịu nhất / bị kẹt ở đâu"], ["suggest", "Gợi ý cải thiện"]].forEach(function (f) {
      tx[f[0]] = el("textarea", { maxlength: "500" }); kids.push(el("label", { text: f[1] }), tx[f[0]]);
    });
    if (venues.length) {
      kids.push(el("label", { text: "Có địa điểm nào trong gợi ý bị sai (giờ, giá, đã đóng cửa…)? Chọn nếu có" }));
      var box = el("div", {});
      venues.forEach(function (id) {
        var cb = el("input", { type: "checkbox" });
        cb.addEventListener("change", function () { issues[id] = cb.checked; });
        box.appendChild(el("label", { style: "font-weight:500;display:flex;gap:8px;margin:4px 0" }, [cb, (byId[id] || id) + " (" + id + ")"]));
      });
      kids.push(box);
    }
    kids.push(err, el("div", { class: "wtx-act" }, [
      el("button", { class: "wtx-btn g", text: "Đóng", onclick: function () { o.remove(); } }),
      el("button", { class: "wtx-btn", text: "Gửi phản hồi", onclick: function () {
        if (!Object.keys(a).some(function (k) { return a[k] !== null && a[k] !== undefined; }) && !tx.liked.value.trim() && !tx.annoyed.value.trim()) {
          err.textContent = "Bạn chọn ít nhất một câu hoặc viết vài chữ nhé."; return; }
        if (scn.value && scn.value !== t.scenario) { t.scenario = scn.value; jset(K.tester, t); }
        var sess = jget(K.sessions, {}), sid = null;
        if (g) {
          sid = sess[g.code];
          if (!sid) { sid = uuid(); sess[g.code] = sid; jset(K.sessions, sess); send("test_sessions", sessionRow(g, sid)); }
        }
        var snap = g ? snapshot(g) : { replan: null, minutes: null, plan: {} };
        var answers = { scenario: scn.value || null, completed: !!(snap.plan && snap.plan.confirmed), minutes: snap.minutes,
          device: /Mobi|Android|iPhone/i.test(navigator.userAgent) ? "Điện thoại" : "Máy tính" };
        Object.keys(a).forEach(function (k) { if (a[k] !== null && a[k] !== undefined) answers[k] = a[k]; });
        Object.keys(tx).forEach(function (k) { var v = tx[k].value.trim(); if (v) answers[k] = v; });
        send("feedback", { session_id: sid, tester_code: t.code, answers: answers, replan_used: snap.replan,
          venue_issue_ids: Object.keys(issues).filter(function (k) { return issues[k]; }), comment: null });
        o.remove(); toast("Cảm ơn bạn! Phản hồi đã được gửi.");
      }})
    ]), el("p", { class: "wtx-small" }, [
      el("button", { class: "wtx-link", text: "Ngừng gửi dữ liệu của mình", onclick: function () {
        if (confirm("Ngừng gửi dữ liệu từ thiết bị này?")) { jset(K.tester, { consent: false, code: "", scenario: "" }); jset(K.outbox, []); o.remove(); } }})
    ]));
    var o = overlay(el("div", { class: "wtx-box" }, kids));
  }
  function toast(msg) {
    var n = el("div", { class: "wtx-box", style: "position:fixed;left:16px;right:16px;bottom:70px;max-width:360px;margin:0 auto;z-index:100000;padding:12px 16px;font:600 14px system-ui" , text: msg });
    document.body.appendChild(n); setTimeout(function () { n.remove(); }, 3500);
  }

  function init() {
    var st = el("style", { text: CSS }); document.head.appendChild(st);
    document.body.appendChild(el("button", { class: "wtx-fab", id: "wtx-fab", text: "Gửi phản hồi", onclick: feedbackModal }));
    if (!tester()) consentModal();
    flush(); scan();
  }
  window.WTSupabase = { feedback: feedbackModal, flush: flush, scan: scan };
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init); else init();
})();
