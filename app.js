(function () {
  var e = Object.create,
    t = Object.defineProperty,
    n = Object.getOwnPropertyDescriptor,
    r = Object.getOwnPropertyNames,
    i = Object.getPrototypeOf,
    a = Object.prototype.hasOwnProperty,
    o = (e, t) => () => (
      t || (e((t = { exports: {} }).exports, t, t.exports), (e = null)),
      t.exports
    ),
    s = (e, i, o, s) => {
      if ((i && typeof i == `object`) || typeof i == `function`)
        for (var c = r(i), l = 0, u = c.length, d; l < u; l++)
          ((d = c[l]),
            !a.call(e, d) &&
              d !== o &&
              t(e, d, {
                get: ((e) => i[e]).bind(null, d),
                enumerable: !(s = n(i, d)) || s.enumerable,
              }));
      return e;
    },
    c = (n, r, o) => (
      (o = n == null ? {} : e(i(n))),
      s(
        r || !n || !n.__esModule || !a.call(n, `default`)
          ? t(o, `default`, { value: n, enumerable: !0 })
          : o,
        n,
      )
    ),
    l = o((e) => {
      var t = Symbol.for(`react.transitional.element`),
        n = Symbol.for(`react.portal`),
        r = Symbol.for(`react.fragment`),
        i = Symbol.for(`react.strict_mode`),
        a = Symbol.for(`react.profiler`),
        o = Symbol.for(`react.consumer`),
        s = Symbol.for(`react.context`),
        c = Symbol.for(`react.forward_ref`),
        l = Symbol.for(`react.suspense`),
        u = Symbol.for(`react.memo`),
        d = Symbol.for(`react.lazy`),
        f = Symbol.for(`react.activity`),
        p = Symbol.for(`react.view_transition`),
        m = Symbol.iterator;
      function h(e) {
        return typeof e != `object` || !e
          ? null
          : ((e = (m && e[m]) || e[`@@iterator`]),
            typeof e == `function` ? e : null);
      }
      var g = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        _ = Object.assign,
        v = {};
      function y(e, t, n) {
        ((this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || g));
      }
      ((y.prototype.isReactComponent = {}),
        (y.prototype.setState = function (e, t) {
          if (typeof e != `object` && typeof e != `function` && e != null)
            throw Error(
              `takes an object of state variables to update or a function which returns an object of state variables.`,
            );
          this.updater.enqueueSetState(this, e, t, `setState`);
        }),
        (y.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, `forceUpdate`);
        }));
      function b() {}
      b.prototype = y.prototype;
      function x(e, t, n) {
        ((this.props = e),
          (this.context = t),
          (this.refs = v),
          (this.updater = n || g));
      }
      var S = (x.prototype = new b());
      ((S.constructor = x), _(S, y.prototype), (S.isPureReactComponent = !0));
      var C = Array.isArray;
      function w() {}
      var T = { H: null, A: null, T: null, S: null },
        E = Object.prototype.hasOwnProperty;
      function D(e, n, r) {
        var i = r.ref;
        return {
          $$typeof: t,
          type: e,
          key: n,
          ref: i === void 0 ? null : i,
          props: r,
        };
      }
      function ee(e, t) {
        return D(e.type, t, e.props);
      }
      function te(e) {
        return typeof e == `object` && !!e && e.$$typeof === t;
      }
      function ne(e) {
        var t = { "=": `=0`, ":": `=2` };
        return (
          `$` +
          e.replace(/[=:]/g, function (e) {
            return t[e];
          })
        );
      }
      var re = /\/+/g;
      function ie(e, t) {
        return typeof e == `object` && e && e.key != null
          ? ne(`` + e.key)
          : t.toString(36);
      }
      function ae(e) {
        switch (e.status) {
          case `fulfilled`:
            return e.value;
          case `rejected`:
            throw e.reason;
          default:
            switch (
              (typeof e.status == `string`
                ? e.then(w, w)
                : ((e.status = `pending`),
                  e.then(
                    function (t) {
                      e.status === `pending` &&
                        ((e.status = `fulfilled`), (e.value = t));
                    },
                    function (t) {
                      e.status === `pending` &&
                        ((e.status = `rejected`), (e.reason = t));
                    },
                  )),
              e.status)
            ) {
              case `fulfilled`:
                return e.value;
              case `rejected`:
                throw e.reason;
            }
        }
        throw e;
      }
      function oe(e, r, i, a, o) {
        var s = typeof e;
        (s === `undefined` || s === `boolean`) && (e = null);
        var c = !1;
        if (e === null) c = !0;
        else
          switch (s) {
            case `bigint`:
            case `string`:
            case `number`:
              c = !0;
              break;
            case `object`:
              switch (e.$$typeof) {
                case t:
                case n:
                  c = !0;
                  break;
                case d:
                  return ((c = e._init), oe(c(e._payload), r, i, a, o));
              }
          }
        if (c)
          return (
            (o = o(e)),
            (c = a === `` ? `.` + ie(e, 0) : a),
            C(o)
              ? ((i = ``),
                c != null && (i = c.replace(re, `$&/`) + `/`),
                oe(o, r, i, ``, function (e) {
                  return e;
                }))
              : o != null &&
                (te(o) &&
                  (o = ee(
                    o,
                    i +
                      (o.key == null || (e && e.key === o.key)
                        ? ``
                        : (`` + o.key).replace(re, `$&/`) + `/`) +
                      c,
                  )),
                r.push(o)),
            1
          );
        c = 0;
        var l = a === `` ? `.` : a + `:`;
        if (C(e))
          for (var u = 0; u < e.length; u++)
            ((a = e[u]), (s = l + ie(a, u)), (c += oe(a, r, i, s, o)));
        else if (((u = h(e)), typeof u == `function`))
          for (e = u.call(e), u = 0; !(a = e.next()).done;)
            ((a = a.value), (s = l + ie(a, u++)), (c += oe(a, r, i, s, o)));
        else if (s === `object`) {
          if (typeof e.then == `function`) return oe(ae(e), r, i, a, o);
          throw (
            (r = String(e)),
            Error(
              `Objects are not valid as a React child (found: ` +
                (r === `[object Object]`
                  ? `object with keys {` + Object.keys(e).join(`, `) + `}`
                  : r) +
                `). If you meant to render a collection of children, use an array instead.`,
            )
          );
        }
        return c;
      }
      function se(e, t, n) {
        if (e == null) return e;
        var r = [],
          i = 0;
        return (
          oe(e, r, ``, ``, function (e) {
            return t.call(n, e, i++);
          }),
          r
        );
      }
      function ce(e) {
        if (e._status === -1) {
          var t = e._result,
            n = t();
          (n.then(
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 1),
                (e._result = t),
                n.status === void 0 &&
                  ((n.status = `fulfilled`), (n.value = t)));
            },
            function (t) {
              (e._status === 0 || e._status === -1) &&
                ((e._status = 2),
                (e._result = t),
                n.status === void 0 &&
                  ((n.status = `rejected`), (n.reason = t)));
            },
          ),
            e._status === -1 && ((e._status = 0), (e._result = n)));
        }
        if (e._status === 1) return e._result.default;
        throw e._result;
      }
      var le =
        typeof reportError == `function`
          ? reportError
          : function (e) {
              if (
                typeof window == `object` &&
                typeof window.ErrorEvent == `function`
              ) {
                var t = new window.ErrorEvent(`error`, {
                  bubbles: !0,
                  cancelable: !0,
                  message:
                    typeof e == `object` && e && typeof e.message == `string`
                      ? String(e.message)
                      : String(e),
                  error: e,
                });
                if (!window.dispatchEvent(t)) return;
              } else if (
                typeof process == `object` &&
                typeof process.emit == `function`
              ) {
                process.emit(`uncaughtException`, e);
                return;
              }
              console.error(e);
            };
      function ue(e) {
        var t = T.T,
          n = {};
        ((n.types = t === null ? null : t.types), (T.T = n));
        try {
          var r = e(),
            i = T.S;
          (i !== null && i(n, r),
            typeof r == `object` &&
              r &&
              typeof r.then == `function` &&
              r.then(w, le));
        } catch (e) {
          le(e);
        } finally {
          (t !== null && n.types !== null && (t.types = n.types), (T.T = t));
        }
      }
      function de(e) {
        var t = T.T;
        if (t !== null) {
          var n = t.types;
          n === null ? (t.types = [e]) : n.indexOf(e) === -1 && n.push(e);
        } else ue(de.bind(null, e));
      }
      var fe = {
        map: se,
        forEach: function (e, t, n) {
          se(
            e,
            function () {
              t.apply(this, arguments);
            },
            n,
          );
        },
        count: function (e) {
          var t = 0;
          return (
            se(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            se(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!te(e))
            throw Error(
              `React.Children.only expected to receive a single React element child.`,
            );
          return e;
        },
      };
      ((e.Activity = f),
        (e.Children = fe),
        (e.Component = y),
        (e.Fragment = r),
        (e.Profiler = a),
        (e.PureComponent = x),
        (e.StrictMode = i),
        (e.Suspense = l),
        (e.ViewTransition = p),
        (e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T),
        (e.__COMPILER_RUNTIME = {
          __proto__: null,
          c: function (e) {
            return T.H.useMemoCache(e);
          },
        }),
        (e.addTransitionType = de),
        (e.cache = function (e) {
          return function () {
            return e.apply(null, arguments);
          };
        }),
        (e.cacheSignal = function () {
          return null;
        }),
        (e.cloneElement = function (e, t, n) {
          if (e == null)
            throw Error(
              `The argument must be a React element, but you passed ` + e + `.`,
            );
          var r = _({}, e.props),
            i = e.key;
          if (t != null)
            for (a in (t.key !== void 0 && (i = `` + t.key), t))
              !E.call(t, a) ||
                a === `key` ||
                a === `__self` ||
                a === `__source` ||
                (a === `ref` && t.ref === void 0) ||
                (r[a] = t[a]);
          var a = arguments.length - 2;
          if (a === 1) r.children = n;
          else if (1 < a) {
            for (var o = Array(a), s = 0; s < a; s++) o[s] = arguments[s + 2];
            r.children = o;
          }
          return D(e.type, i, r);
        }),
        (e.createContext = function (e) {
          return (
            (e = {
              $$typeof: s,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }),
            (e.Provider = e),
            (e.Consumer = { $$typeof: o, _context: e }),
            e
          );
        }),
        (e.createElement = function (e, t, n) {
          var r,
            i = {},
            a = null;
          if (t != null)
            for (r in (t.key !== void 0 && (a = `` + t.key), t))
              E.call(t, r) &&
                r !== `key` &&
                r !== `__self` &&
                r !== `__source` &&
                (i[r] = t[r]);
          var o = arguments.length - 2;
          if (o === 1) i.children = n;
          else if (1 < o) {
            for (var s = Array(o), c = 0; c < o; c++) s[c] = arguments[c + 2];
            i.children = s;
          }
          if (e && e.defaultProps)
            for (r in ((o = e.defaultProps), o))
              i[r] === void 0 && (i[r] = o[r]);
          return D(e, a, i);
        }),
        (e.createRef = function () {
          return { current: null };
        }),
        (e.forwardRef = function (e) {
          return { $$typeof: c, render: e };
        }),
        (e.isValidElement = te),
        (e.lazy = function (e) {
          return {
            $$typeof: d,
            _payload: { _status: -1, _result: e },
            _init: ce,
          };
        }),
        (e.memo = function (e, t) {
          return { $$typeof: u, type: e, compare: t === void 0 ? null : t };
        }),
        (e.startTransition = ue),
        (e.unstable_useCacheRefresh = function () {
          return T.H.useCacheRefresh();
        }),
        (e.use = function (e) {
          return T.H.use(e);
        }),
        (e.useActionState = function (e, t, n) {
          return T.H.useActionState(e, t, n);
        }),
        (e.useCallback = function (e, t) {
          return T.H.useCallback(e, t);
        }),
        (e.useContext = function (e) {
          return T.H.useContext(e);
        }),
        (e.useDebugValue = function () {}),
        (e.useDeferredValue = function (e, t) {
          return T.H.useDeferredValue(e, t);
        }),
        (e.useEffect = function (e, t) {
          return T.H.useEffect(e, t);
        }),
        (e.useEffectEvent = function (e) {
          return T.H.useEffectEvent(e);
        }),
        (e.useId = function () {
          return T.H.useId();
        }),
        (e.useImperativeHandle = function (e, t, n) {
          return T.H.useImperativeHandle(e, t, n);
        }),
        (e.useInsertionEffect = function (e, t) {
          return T.H.useInsertionEffect(e, t);
        }),
        (e.useLayoutEffect = function (e, t) {
          return T.H.useLayoutEffect(e, t);
        }),
        (e.useMemo = function (e, t) {
          return T.H.useMemo(e, t);
        }),
        (e.useOptimistic = function (e, t) {
          return T.H.useOptimistic(e, t);
        }),
        (e.useReducer = function (e, t, n) {
          return T.H.useReducer(e, t, n);
        }),
        (e.useRef = function (e) {
          return T.H.useRef(e);
        }),
        (e.useState = function (e) {
          return T.H.useState(e);
        }),
        (e.useSyncExternalStore = function (e, t, n) {
          return T.H.useSyncExternalStore(e, t, n);
        }),
        (e.useTransition = function () {
          return T.H.useTransition();
        }),
        (e.version = `19.3.1`));
    }),
    u = o((e, t) => {
      t.exports = l();
    }),
    d = o((e) => {
      function t(e, t) {
        var n = e.length;
        e.push(t);
        a: for (; 0 < n;) {
          var r = (n - 1) >>> 1,
            a = e[r];
          if (0 < i(a, t)) ((e[r] = t), (e[n] = a), (n = r));
          else break a;
        }
      }
      function n(e) {
        return e.length === 0 ? null : e[0];
      }
      function r(e) {
        if (e.length === 0) return null;
        var t = e[0],
          n = e.pop();
        if (n !== t) {
          e[0] = n;
          a: for (var r = 0, a = e.length, o = a >>> 1; r < o;) {
            var s = 2 * (r + 1) - 1,
              c = e[s],
              l = s + 1,
              u = e[l];
            if (0 > i(c, n))
              l < a && 0 > i(u, c)
                ? ((e[r] = u), (e[l] = n), (r = l))
                : ((e[r] = c), (e[s] = n), (r = s));
            else if (l < a && 0 > i(u, n)) ((e[r] = u), (e[l] = n), (r = l));
            else break a;
          }
        }
        return t;
      }
      function i(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return n === 0 ? e.id - t.id : n;
      }
      if (
        ((e.unstable_now = void 0),
        typeof performance == `object` && typeof performance.now == `function`)
      ) {
        var a = performance;
        e.unstable_now = function () {
          return a.now();
        };
      } else {
        var o = Date,
          s = o.now();
        e.unstable_now = function () {
          return o.now() - s;
        };
      }
      var c = [],
        l = [],
        u = 1,
        d = null,
        f = 3,
        p = !1,
        m = !1,
        h = !1,
        g = !1,
        _ = typeof setTimeout == `function` ? setTimeout : null,
        v = typeof clearTimeout == `function` ? clearTimeout : null,
        y = typeof setImmediate < `u` ? setImmediate : null;
      function b(e) {
        for (var i = n(l); i !== null;) {
          if (i.callback === null) r(l);
          else if (i.startTime <= e)
            (r(l), (i.sortIndex = i.expirationTime), t(c, i));
          else break;
          i = n(l);
        }
      }
      function x(e) {
        if (((h = !1), b(e), !m)) {
          if (n(c) !== null) ((m = !0), S || ((S = !0), ee()));
          else {
            var t = n(l);
            t !== null && re(x, t.startTime - e);
          }
        }
      }
      var S = !1,
        C = -1,
        w = 5,
        T = -1;
      function E() {
        return g ? !0 : !(e.unstable_now() - T < w);
      }
      function D() {
        if (((g = !1), S)) {
          var t = e.unstable_now();
          T = t;
          var i = !0;
          try {
            a: {
              ((m = !1), h && ((h = !1), v(C), (C = -1)), (p = !0));
              var a = f;
              try {
                b: {
                  for (
                    b(t), d = n(c);
                    d !== null && !(d.expirationTime > t && E());
                  ) {
                    var o = d.callback;
                    if (typeof o == `function`) {
                      ((d.callback = null), (f = d.priorityLevel));
                      var s = o(d.expirationTime <= t);
                      if (((t = e.unstable_now()), typeof s == `function`)) {
                        ((d.callback = s), b(t), (i = !0));
                        break b;
                      }
                      (d === n(c) && r(c), b(t));
                    } else r(c);
                    d = n(c);
                  }
                  if (d !== null) i = !0;
                  else {
                    var u = n(l);
                    (u !== null && re(x, u.startTime - t), (i = !1));
                  }
                }
                break a;
              } finally {
                ((d = null), (f = a), (p = !1));
              }
              i = void 0;
            }
          } finally {
            i ? ee() : (S = !1);
          }
        }
      }
      var ee;
      if (typeof y == `function`)
        ee = function () {
          y(D);
        };
      else if (typeof MessageChannel < `u`) {
        var te = new MessageChannel(),
          ne = te.port2;
        ((te.port1.onmessage = D),
          (ee = function () {
            ne.postMessage(null);
          }));
      } else
        ee = function () {
          _(D, 0);
        };
      function re(t, n) {
        C = _(function () {
          t(e.unstable_now());
        }, n);
      }
      ((e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (e.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                `forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`,
              )
            : (w = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
          return f;
        }),
        (e.unstable_next = function (e) {
          switch (f) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = f;
          }
          var n = f;
          f = t;
          try {
            return e();
          } finally {
            f = n;
          }
        }),
        (e.unstable_requestPaint = function () {
          g = !0;
        }),
        (e.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = f;
          f = e;
          try {
            return t();
          } finally {
            f = n;
          }
        }),
        (e.unstable_scheduleCallback = function (r, i, a) {
          var o = e.unstable_now();
          switch (
            (typeof a == `object` && a
              ? ((a = a.delay), (a = typeof a == `number` && 0 < a ? o + a : o))
              : (a = o),
            r)
          ) {
            case 1:
              var s = -1;
              break;
            case 2:
              s = 250;
              break;
            case 5:
              s = 1073741823;
              break;
            case 4:
              s = 1e4;
              break;
            default:
              s = 5e3;
          }
          return (
            (s = a + s),
            (r = {
              id: u++,
              callback: i,
              priorityLevel: r,
              startTime: a,
              expirationTime: s,
              sortIndex: -1,
            }),
            a > o
              ? ((r.sortIndex = a),
                t(l, r),
                n(c) === null &&
                  r === n(l) &&
                  (h ? (v(C), (C = -1)) : (h = !0), re(x, a - o)))
              : ((r.sortIndex = s),
                t(c, r),
                m || p || ((m = !0), S || ((S = !0), ee()))),
            r
          );
        }),
        (e.unstable_shouldYield = E),
        (e.unstable_wrapCallback = function (e) {
          var t = f;
          return function () {
            var n = f;
            f = t;
            try {
              return e.apply(this, arguments);
            } finally {
              f = n;
            }
          };
        }));
    }),
    f = o((e, t) => {
      t.exports = d();
    }),
    p = o((e) => {
      var t = u();
      function n(e) {
        var t = `https://react.dev/errors/` + e;
        if (1 < arguments.length) {
          t += `?args[]=` + encodeURIComponent(arguments[1]);
          for (var n = 2; n < arguments.length; n++)
            t += `&args[]=` + encodeURIComponent(arguments[n]);
        }
        return (
          `Minified React error #` +
          e +
          `; visit ` +
          t +
          ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
        );
      }
      function r() {}
      var i = {
          d: {
            f: r,
            r: function () {
              throw Error(n(522));
            },
            D: r,
            C: r,
            L: r,
            m: r,
            X: r,
            S: r,
            M: r,
          },
          p: 0,
          findDOMNode: null,
        },
        a = Symbol.for(`react.portal`),
        o = Symbol.for(`react.recoverable`),
        s = Symbol.for(`react.optimistic_key`);
      function c(e, t, n) {
        var r =
          3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
        return {
          $$typeof: a,
          key: r == null ? null : r === s ? s : `` + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      }
      var l = t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
      function d(e, t) {
        if (e === `font`) return ``;
        if (typeof t == `string`) return t === `use-credentials` ? t : ``;
      }
      ((e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
        (e.browser = function (e) {
          return { $$typeof: o, _reason: e };
        }),
        (e.createPortal = function (e, t) {
          var r =
            2 < arguments.length && arguments[2] !== void 0
              ? arguments[2]
              : null;
          if (!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
            throw Error(n(299));
          return c(e, t, null, r);
        }),
        (e.flushSync = function (e) {
          var t = l.T,
            n = i.p;
          try {
            if (((l.T = null), (i.p = 2), e)) return e();
          } finally {
            ((l.T = t), (i.p = n), i.d.f());
          }
        }),
        (e.preconnect = function (e, t) {
          typeof e == `string` &&
            (t
              ? ((t = t.crossOrigin),
                (t =
                  typeof t == `string`
                    ? t === `use-credentials`
                      ? t
                      : ``
                    : void 0))
              : (t = null),
            i.d.C(e, t));
        }),
        (e.prefetchDNS = function (e) {
          typeof e == `string` && i.d.D(e);
        }),
        (e.preinit = function (e, t) {
          if (typeof e == `string` && t && typeof t.as == `string`) {
            var n = t.as,
              r = d(n, t.crossOrigin),
              a = typeof t.integrity == `string` ? t.integrity : void 0,
              o = typeof t.fetchPriority == `string` ? t.fetchPriority : void 0;
            n === `style`
              ? i.d.S(
                  e,
                  typeof t.precedence == `string` ? t.precedence : void 0,
                  { crossOrigin: r, integrity: a, fetchPriority: o },
                )
              : n === `script` &&
                i.d.X(e, {
                  crossOrigin: r,
                  integrity: a,
                  fetchPriority: o,
                  nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                });
          }
        }),
        (e.preinitModule = function (e, t) {
          if (typeof e == `string`) {
            if (typeof t == `object` && t) {
              if (t.as == null || t.as === `script`) {
                var n = d(t.as, t.crossOrigin);
                i.d.M(e, {
                  crossOrigin: n,
                  integrity:
                    typeof t.integrity == `string` ? t.integrity : void 0,
                  nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                  fetchPriority:
                    typeof t.fetchPriority == `string`
                      ? t.fetchPriority
                      : void 0,
                });
              }
            } else t ?? i.d.M(e);
          }
        }),
        (e.preload = function (e, t) {
          if (
            typeof e == `string` &&
            typeof t == `object` &&
            t &&
            typeof t.as == `string`
          ) {
            var n = t.as,
              r = d(n, t.crossOrigin);
            i.d.L(e, n, {
              crossOrigin: r,
              integrity: typeof t.integrity == `string` ? t.integrity : void 0,
              nonce: typeof t.nonce == `string` ? t.nonce : void 0,
              type: typeof t.type == `string` ? t.type : void 0,
              fetchPriority:
                typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
              referrerPolicy:
                typeof t.referrerPolicy == `string` ? t.referrerPolicy : void 0,
              imageSrcSet:
                typeof t.imageSrcSet == `string` ? t.imageSrcSet : void 0,
              imageSizes:
                typeof t.imageSizes == `string` ? t.imageSizes : void 0,
              media: typeof t.media == `string` ? t.media : void 0,
            });
          }
        }),
        (e.preloadModule = function (e, t) {
          if (typeof e == `string`) {
            if (t) {
              var n = d(t.as, t.crossOrigin);
              i.d.m(e, {
                as:
                  typeof t.as == `string` && t.as !== `script` ? t.as : void 0,
                crossOrigin: n,
                integrity:
                  typeof t.integrity == `string` ? t.integrity : void 0,
                nonce: typeof t.nonce == `string` ? t.nonce : void 0,
                fetchPriority:
                  typeof t.fetchPriority == `string` ? t.fetchPriority : void 0,
              });
            } else i.d.m(e);
          }
        }),
        (e.requestFormReset = function (e) {
          i.d.r(e);
        }),
        (e.unstable_batchedUpdates = function (e, t) {
          return e(t);
        }),
        (e.useFormState = function (e, t, n) {
          return l.H.useFormState(e, t, n);
        }),
        (e.useFormStatus = function () {
          return l.H.useHostTransitionStatus();
        }),
        (e.version = `19.3.1`));
    }),
    m = o((e, t) => {
      function n() {
        if (
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
          } catch (e) {
            console.error(e);
          }
      }
      (n(), (t.exports = p()));
    }),
    h = o((e) => {
      var t = f(),
        n = u(),
        r = m();
      function i(e) {
        var t = `https://react.dev/errors/` + e;
        if (1 < arguments.length) {
          t += `?args[]=` + encodeURIComponent(arguments[1]);
          for (var n = 2; n < arguments.length; n++)
            t += `&args[]=` + encodeURIComponent(arguments[n]);
        }
        return (
          `Minified React error #` +
          e +
          `; visit ` +
          t +
          ` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`
        );
      }
      function a(e) {
        return !(
          !e ||
          (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
        );
      }
      function o(e) {
        for (var t = e, n = t; n && !n.alternate;)
          ((t = n), t.flags & 4098 && (e = t.return), (n = t.return));
        for (; t.return;) t = t.return;
        return t.tag === 3 ? e : null;
      }
      function s(e) {
        if (e.tag === 13) {
          var t = e.memoizedState;
          if (
            (t === null &&
              ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
          )
            return t.dehydrated;
        }
        return null;
      }
      function c(e) {
        if (e.tag === 31) {
          var t = e.memoizedState;
          if (
            (t === null &&
              ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
          )
            return t.dehydrated;
        }
        return null;
      }
      function l(e) {
        if (o(e) !== e) throw Error(i(188));
      }
      function d(e) {
        var t = e.alternate;
        if (!t) {
          if (((t = o(e)), t === null)) throw Error(i(188));
          return t === e ? e : null;
        }
        for (var n = e, r = t; ;) {
          var a = n.return;
          if (a === null) break;
          var s = a.alternate;
          if (s === null) {
            if (((r = a.return), r !== null)) {
              n = r;
              continue;
            }
            break;
          }
          if (a.child === s.child) {
            for (s = a.child; s;) {
              if (s === n) return (l(a), e);
              if (s === r) return (l(a), t);
              s = s.sibling;
            }
            throw Error(i(188));
          }
          if (n.return !== r.return) ((n = a), (r = s));
          else {
            for (var c = !1, u = a.child; u;) {
              if (u === n) {
                ((c = !0), (n = a), (r = s));
                break;
              }
              if (u === r) {
                ((c = !0), (r = a), (n = s));
                break;
              }
              u = u.sibling;
            }
            if (!c) {
              for (u = s.child; u;) {
                if (u === n) {
                  ((c = !0), (n = s), (r = a));
                  break;
                }
                if (u === r) {
                  ((c = !0), (r = s), (n = a));
                  break;
                }
                u = u.sibling;
              }
              if (!c) throw Error(i(189));
            }
          }
          if (n.alternate !== r) throw Error(i(190));
        }
        if (n.tag !== 3) throw Error(i(188));
        return n.stateNode.current === n ? e : t;
      }
      function p(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e;
        for (e = e.child; e !== null;) {
          if (((t = p(e)), t !== null)) return t;
          e = e.sibling;
        }
        return null;
      }
      function h(e, t, n, r, i, a) {
        for (; e !== null;) {
          if (
            ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, r, i, a)) ||
            ((e.tag !== 22 || e.memoizedState === null) &&
              (t || (e.tag !== 5 && e.tag !== 27)) &&
              h(e.child, t, n, r, i, a))
          )
            return !0;
          e = e.sibling;
        }
        return !1;
      }
      function g(e) {
        for (e = e.return; e !== null;) {
          if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
          e = e.return;
        }
        return null;
      }
      function _(e) {
        var t = !1;
        for (
          e = e.return;
          e !== null &&
          (e.tag === 4 && (t = !0), e.tag !== 3 && e.tag !== 5 && e.tag !== 27);
        )
          e = e.return;
        return t;
      }
      function v(e) {
        var t = [null, null],
          n = g(e);
        return (n === null || y(t, e, n.child, { foundSelf: !1 }), t);
      }
      function y(e, t, n, r) {
        for (; n !== null;) {
          if (n === t) r.foundSelf = !0;
          else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
            if (r.foundSelf) return ((e[1] = n), !0);
            e[0] = n;
          } else if (
            (n.tag !== 22 || n.memoizedState === null) &&
            y(e, t, n.child, r)
          )
            return !0;
          n = n.sibling;
        }
        return !1;
      }
      function b(e) {
        switch (e.tag) {
          case 5:
          case 27:
          case 6:
            return e.stateNode;
          case 3:
            return e.stateNode.containerInfo;
          default:
            throw Error(i(559));
        }
      }
      var x = null,
        S = null;
      function C(e, t, n) {
        return e === n || (e === t && ((x = e), !0));
      }
      function w(e, t, n) {
        return e === n ? ((S = e), !1) : e === t && (S !== null && (x = e), !0);
      }
      function T(e) {
        if (e === null) return null;
        do e = e === null ? null : e.return;
        while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
        return e || null;
      }
      function E(e, t, n) {
        for (var r = 0, i = e; i; i = n(i)) r++;
        i = 0;
        for (var a = t; a; a = n(a)) i++;
        for (; 0 < r - i;) ((e = n(e)), r--);
        for (; 0 < i - r;) ((t = n(t)), i--);
        for (; r--;) {
          if (e === t || (t !== null && e === t.alternate)) return e;
          ((e = n(e)), (t = n(t)));
        }
        return null;
      }
      var D = Object.assign,
        ee = Symbol.for(`react.element`),
        te = Symbol.for(`react.transitional.element`),
        ne = Symbol.for(`react.portal`),
        re = Symbol.for(`react.fragment`),
        ie = Symbol.for(`react.strict_mode`),
        ae = Symbol.for(`react.profiler`),
        oe = Symbol.for(`react.consumer`),
        se = Symbol.for(`react.context`),
        ce = Symbol.for(`react.forward_ref`),
        le = Symbol.for(`react.suspense`),
        ue = Symbol.for(`react.suspense_list`),
        de = Symbol.for(`react.memo`),
        fe = Symbol.for(`react.lazy`),
        pe = Symbol.for(`react.activity`),
        me = Symbol.for(`react.legacy_hidden`),
        he = Symbol.for(`react.memo_cache_sentinel`),
        ge = Symbol.for(`react.view_transition`),
        _e = Symbol.for(`react.recoverable`),
        ve = Symbol.iterator;
      function ye(e) {
        return typeof e != `object` || !e
          ? null
          : ((e = (ve && e[ve]) || e[`@@iterator`]),
            typeof e == `function` ? e : null);
      }
      var be = Symbol.for(`react.client.reference`);
      function xe(e) {
        if (e == null) return null;
        if (typeof e == `function`)
          return e.$$typeof === be ? null : e.displayName || e.name || null;
        if (typeof e == `string`) return e;
        switch (e) {
          case re:
            return `Fragment`;
          case ae:
            return `Profiler`;
          case ie:
            return `StrictMode`;
          case le:
            return `Suspense`;
          case ue:
            return `SuspenseList`;
          case pe:
            return `Activity`;
          case ge:
            return `ViewTransition`;
        }
        if (typeof e == `object`)
          switch (e.$$typeof) {
            case ne:
              return `Portal`;
            case se:
              return e.displayName || `Context`;
            case oe:
              return (e._context.displayName || `Context`) + `.Consumer`;
            case ce:
              var t = e.render;
              return (
                (e = e.displayName),
                (e ||=
                  ((e = t.displayName || t.name || ``),
                  e === `` ? `ForwardRef` : `ForwardRef(` + e + `)`)),
                e
              );
            case de:
              return (
                (t = e.displayName || null),
                t === null ? xe(e.type) || `Memo` : t
              );
            case fe:
              ((t = e._payload), (e = e._init));
              try {
                return xe(e(t));
              } catch {}
          }
        return null;
      }
      var Se = Array.isArray,
        O = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        k = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
        Ce = { pending: !1, data: null, method: null, action: null },
        we = [],
        Te = -1;
      function Ee(e) {
        return { current: e };
      }
      function De(e) {
        0 > Te || ((e.current = we[Te]), (we[Te] = null), Te--);
      }
      function A(e, t) {
        (Te++, (we[Te] = e.current), (e.current = t));
      }
      var Oe = Ee(null),
        ke = Ee(null),
        Ae = Ee(null),
        je = Ee(null);
      function Me(e, t) {
        switch ((A(Ae, t), A(ke, e), A(Oe, null), t.nodeType)) {
          case 9:
          case 11:
            e = (e = t.documentElement) && (e = e.namespaceURI) ? up(e) : 0;
            break;
          default:
            if (((e = t.tagName), (t = t.namespaceURI)))
              ((t = up(t)), (e = dp(t, e)));
            else
              switch (e) {
                case `svg`:
                  e = 1;
                  break;
                case `math`:
                  e = 2;
                  break;
                default:
                  e = 0;
              }
        }
        (De(Oe), A(Oe, e));
      }
      function Ne() {
        (De(Oe), De(ke), De(Ae));
      }
      function Pe(e) {
        var t = e.memoizedState;
        (t !== null && ((sh._currentValue = t.memoizedState), A(je, e)),
          (t = Oe.current));
        var n = dp(t, e.type);
        t !== n && (A(ke, e), A(Oe, n));
      }
      function Fe(e) {
        (ke.current === e && (De(Oe), De(ke)),
          je.current === e && (De(je), (sh._currentValue = Ce)));
      }
      var Ie, Le;
      function Re(e) {
        if (Ie === void 0)
          try {
            throw Error();
          } catch (e) {
            var t = e.stack.trim().match(/\n( *(at )?)/);
            ((Ie = (t && t[1]) || ``),
              (Le =
                -1 <
                e.stack.indexOf(`
    at`)
                  ? ` (<anonymous>)`
                  : -1 < e.stack.indexOf(`@`)
                    ? `@unknown:0:0`
                    : ``));
          }
        return (
          `
` +
          Ie +
          e +
          Le
        );
      }
      var ze = !1;
      function Be(e, t) {
        if (!e || ze) return ``;
        ze = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          var r = {
            DetermineComponentFrameRoot: function () {
              try {
                if (t) {
                  var n = function () {
                    throw Error();
                  };
                  if (
                    (Object.defineProperty(n.prototype, "props", {
                      set: function () {
                        throw Error();
                      },
                    }),
                    typeof Reflect == `object` && Reflect.construct)
                  ) {
                    try {
                      Reflect.construct(n, []);
                    } catch (e) {
                      var r = e;
                    }
                    Reflect.construct(e, [], n);
                  } else {
                    try {
                      n.call();
                    } catch (e) {
                      r = e;
                    }
                    n = !1;
                    try {
                      var i = Object.getOwnPropertyDescriptor(
                        e.prototype,
                        `props`,
                      );
                      (Object.defineProperty(e.prototype, "props", {
                        configurable: !0,
                        set: function () {
                          throw Error();
                        },
                      }),
                        (n = !0),
                        new e());
                    } finally {
                      n &&
                        (i === void 0
                          ? delete e.prototype.props
                          : Object.defineProperty(e.prototype, "props", i));
                    }
                  }
                } else {
                  try {
                    throw Error();
                  } catch (e) {
                    r = e;
                  }
                  (n = e()) &&
                    typeof n.catch == `function` &&
                    n.catch(function () {});
                }
              } catch (e) {
                if (e && r && typeof e.stack == `string`)
                  return [e.stack, r.stack];
              }
              return [null, null];
            },
          };
          r.DetermineComponentFrameRoot.displayName = `DetermineComponentFrameRoot`;
          var i = Object.getOwnPropertyDescriptor(
            r.DetermineComponentFrameRoot,
            `name`,
          );
          i &&
            i.configurable &&
            Object.defineProperty(r.DetermineComponentFrameRoot, "name", {
              value: `DetermineComponentFrameRoot`,
            });
          var a = r.DetermineComponentFrameRoot(),
            o = a[0],
            s = a[1];
          if (o && s) {
            var c = o.split(`
`),
              l = s.split(`
`);
            for (
              i = r = 0;
              r < c.length && !c[r].includes(`DetermineComponentFrameRoot`);
            )
              r++;
            for (
              ;
              i < l.length && !l[i].includes(`DetermineComponentFrameRoot`);
            )
              i++;
            if (r === c.length || i === l.length)
              for (
                r = c.length - 1, i = l.length - 1;
                1 <= r && 0 <= i && c[r] !== l[i];
              )
                i--;
            for (; 1 <= r && 0 <= i; r--, i--)
              if (c[r] !== l[i]) {
                if (r !== 1 || i !== 1)
                  do
                    if ((r--, i--, 0 > i || c[r] !== l[i])) {
                      var u =
                        `
` + c[r].replace(` at new `, ` at `);
                      return (
                        e.displayName &&
                          u.includes(`<anonymous>`) &&
                          (u = u.replace(`<anonymous>`, e.displayName)),
                        u
                      );
                    }
                  while (1 <= r && 0 <= i);
                break;
              }
          }
        } finally {
          ((ze = !1), (Error.prepareStackTrace = n));
        }
        return (n = e ? e.displayName || e.name : ``) ? Re(n) : ``;
      }
      function Ve(e, t) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            return Re(e.type);
          case 16:
            return Re(`Lazy`);
          case 13:
            return e.child !== t && t !== null
              ? Re(`Suspense Fallback`)
              : Re(`Suspense`);
          case 19:
            return Re(`SuspenseList`);
          case 0:
          case 15:
            return Be(e.type, !1);
          case 11:
            return Be(e.type.render, !1);
          case 1:
            return Be(e.type, !0);
          case 31:
            return Re(`Activity`);
          case 30:
            return Re(`ViewTransition`);
          default:
            return ``;
        }
      }
      function He(e) {
        try {
          var t = ``,
            n = null;
          do ((t += Ve(e, n)), (n = e), (e = e.return));
          while (e);
          return t;
        } catch (e) {
          return (
            `
Error generating stack: ` +
            e.message +
            `
` +
            e.stack
          );
        }
      }
      var Ue = Object.prototype.hasOwnProperty,
        We = t.unstable_scheduleCallback,
        Ge = t.unstable_cancelCallback,
        Ke = t.unstable_shouldYield,
        qe = t.unstable_requestPaint,
        Je = t.unstable_now,
        Ye = t.unstable_getCurrentPriorityLevel,
        Xe = t.unstable_ImmediatePriority,
        Ze = t.unstable_UserBlockingPriority,
        Qe = t.unstable_NormalPriority,
        $e = t.unstable_LowPriority,
        et = t.unstable_IdlePriority,
        tt = t.log,
        nt = t.unstable_setDisableYieldValue,
        rt = null,
        it = null;
      function at(e) {
        if (
          (typeof tt == `function` && nt(e),
          it && typeof it.setStrictMode == `function`)
        )
          try {
            it.setStrictMode(rt, e);
          } catch {}
      }
      var ot = Math.clz32 ? Math.clz32 : lt,
        st = Math.log,
        ct = Math.LN2;
      function lt(e) {
        return ((e >>>= 0), e === 0 ? 32 : (31 - ((st(e) / ct) | 0)) | 0);
      }
      var ut = 256,
        dt = 262144,
        ft = 4194304;
      function pt(e) {
        var t = e & 42;
        if (t !== 0) return t;
        switch (e & -e) {
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 8:
            return 8;
          case 16:
            return 16;
          case 32:
            return 32;
          case 64:
            return 64;
          case 128:
            return 128;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
            return e & -e;
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return e & 3932160;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return e & 62914560;
          case 67108864:
            return 67108864;
          case 134217728:
            return 134217728;
          case 268435456:
            return 268435456;
          case 536870912:
            return 536870912;
          case 1073741824:
            return 0;
          default:
            return e;
        }
      }
      function mt(e, t, n) {
        var r = e.pendingLanes;
        if (r === 0) return 0;
        var i = 0,
          a = e.suspendedLanes,
          o = e.pingedLanes;
        e = e.warmLanes;
        var s = r & 134217727;
        return (
          s === 0
            ? ((s = r & ~a),
              s === 0
                ? o === 0
                  ? n || ((n = r & ~e), n !== 0 && (i = pt(n)))
                  : (i = pt(o))
                : (i = pt(s)))
            : ((r = s & ~a),
              r === 0
                ? ((o &= s),
                  o === 0
                    ? n || ((n = s & ~e), n !== 0 && (i = pt(n)))
                    : (i = pt(o)))
                : (i = pt(r))),
          i === 0
            ? 0
            : t !== 0 &&
                t !== i &&
                (t & a) === 0 &&
                ((a = i & -i),
                (n = t & -t),
                a >= n || (a === 32 && n & 4194048))
              ? t
              : i
        );
      }
      function ht(e, t) {
        return (
          (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
        );
      }
      function gt(e, t) {
        t & 8 && (t |= t & 32);
        var n = e.entangledLanes;
        if (n !== 0)
          for (e = e.entanglements, n &= t; 0 < n;) {
            var r = 31 - ot(n),
              i = 1 << r;
            ((t |= e[r]), (n &= ~i));
          }
        return t;
      }
      function _t(e, t) {
        switch (e) {
          case 1:
          case 2:
          case 4:
          case 8:
          case 64:
            return t + 250;
          case 16:
          case 32:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
            return t + 5e3;
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            return -1;
          case 67108864:
          case 134217728:
          case 268435456:
          case 536870912:
          case 1073741824:
            return -1;
          default:
            return -1;
        }
      }
      function vt() {
        var e = ft;
        return ((ft <<= 1), !(ft & 62914560) && (ft = 4194304), e);
      }
      function yt(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function bt(e, t) {
        ((e.pendingLanes |= t),
          t !== 268435456 &&
            ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)));
      }
      function xt(e, t, n, r, i, a) {
        var o = e.pendingLanes;
        ((e.pendingLanes = n),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.warmLanes = 0),
          (e.expiredLanes &= n),
          (e.entangledLanes &= n),
          (e.errorRecoveryDisabledLanes &= n),
          (e.shellSuspendCounter = 0));
        var s = e.entanglements,
          c = e.expirationTimes,
          l = e.hiddenUpdates;
        for (n = o & ~n; 0 < n;) {
          var u = 31 - ot(n),
            d = 1 << u;
          ((s[u] = 0), (c[u] = -1));
          var f = l[u];
          if (f !== null)
            for (l[u] = null, u = 0; u < f.length; u++) {
              var p = f[u];
              p !== null && (p.lane &= -536870913);
            }
          n &= ~d;
        }
        (r !== 0 && St(e, r, 0),
          a !== 0 &&
            i === 0 &&
            e.tag !== 0 &&
            (e.suspendedLanes |= a & ~(o & ~t)));
      }
      function St(e, t, n) {
        ((e.pendingLanes |= t), (e.suspendedLanes &= ~t));
        var r = 31 - ot(t);
        ((e.entangledLanes |= t),
          (e.entanglements[r] =
            e.entanglements[r] | 1073741824 | (n & 261930)));
      }
      function Ct(e, t) {
        var n = (e.entangledLanes |= t);
        for (e = e.entanglements; n;) {
          var r = 31 - ot(n),
            i = 1 << r;
          ((i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i));
        }
      }
      function wt(e, t) {
        var n = t & -t;
        return (
          (n = n & 42 ? 1 : Tt(n)),
          (n & (e.suspendedLanes | t)) === 0 ? n : 0
        );
      }
      function Tt(e) {
        switch (e) {
          case 2:
            e = 1;
            break;
          case 8:
            e = 4;
            break;
          case 32:
            e = 16;
            break;
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
            e = 128;
            break;
          case 268435456:
            e = 134217728;
            break;
          default:
            e = 0;
        }
        return e;
      }
      function Et(e) {
        return (
          (e &= -e),
          2 < e ? (8 < e ? (e & 134217727 ? 32 : 268435456) : 8) : 2
        );
      }
      function Dt() {
        var e = k.p;
        return e === 0
          ? ((e = window.event), e === void 0 ? 32 : Ch(e.type))
          : e;
      }
      function Ot(e, t) {
        var n = k.p;
        try {
          return ((k.p = e), t());
        } finally {
          k.p = n;
        }
      }
      var kt = Math.random().toString(36).slice(2),
        At = `__reactFiber$` + kt,
        jt = `__reactProps$` + kt,
        Mt = `__reactContainer$` + kt,
        Nt = `__reactEvents$` + kt,
        Pt = `__reactListeners$` + kt,
        Ft = `__reactHandles$` + kt,
        It = `__reactResources$` + kt,
        Lt = `__reactMarker$` + kt,
        Rt = `__reactLoad$` + kt;
      function zt(e) {
        (delete e[At], delete e[jt], delete e[Pt], delete e[Ft]);
      }
      function Bt(e) {
        var t;
        if ((t = e[At])) return t;
        for (var n = e.parentNode; n;) {
          if ((t = n[Mt] || n[At])) {
            if (
              ((n = t.alternate),
              t.child !== null || (n !== null && n.child !== null))
            )
              for (e = fm(e); e !== null;) {
                if ((n = e[At])) return n;
                e = fm(e);
              }
            return t;
          }
          ((e = n), (n = e.parentNode));
        }
        return null;
      }
      function Vt(e) {
        if ((e = e[At] || e[Mt])) {
          var t = e.tag;
          if (
            t === 5 ||
            t === 6 ||
            t === 13 ||
            t === 31 ||
            t === 26 ||
            t === 27 ||
            t === 3
          )
            return e;
        }
        return null;
      }
      function Ht(e) {
        var t = e.tag;
        if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
        throw Error(i(33));
      }
      function Ut(e) {
        var t = e[It];
        return (
          (t ||= e[It] =
            { hoistableStyles: new Map(), hoistableScripts: new Map() }),
          t
        );
      }
      function Wt(e) {
        e[Lt] = !0;
      }
      function Gt(e) {
        e[Rt] = void 0;
      }
      var Kt = new Set(),
        qt = {};
      function Jt(e, t) {
        (Yt(e, t), Yt(e + `Capture`, t));
      }
      function Yt(e, t) {
        for (qt[e] = t, e = 0; e < t.length; e++) Kt.add(t[e]);
      }
      var Xt = RegExp(
          `^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`,
        ),
        Zt = {},
        Qt = {};
      function $t(e) {
        return Ue.call(Qt, e)
          ? !0
          : Ue.call(Zt, e)
            ? !1
            : Xt.test(e)
              ? (Qt[e] = !0)
              : ((Zt[e] = !0), !1);
      }
      var j = !1;
      function en() {
        var e = j;
        return ((j = !1), e);
      }
      function tn(e, t, n) {
        if ($t(t)) {
          if (n === null) e.removeAttribute(t);
          else {
            switch (typeof n) {
              case `undefined`:
              case `function`:
              case `symbol`:
                e.removeAttribute(t);
                return;
              case `boolean`:
                var r = t.toLowerCase().slice(0, 5);
                if (r !== `data-` && r !== `aria-`) {
                  e.removeAttribute(t);
                  return;
                }
            }
            e.setAttribute(t, n);
          }
        }
      }
      function nn(e, t, n) {
        if (n === null) e.removeAttribute(t);
        else {
          switch (typeof n) {
            case `undefined`:
            case `function`:
            case `symbol`:
            case `boolean`:
              e.removeAttribute(t);
              return;
          }
          e.setAttribute(t, n);
        }
      }
      function rn(e, t, n, r) {
        if (r === null) e.removeAttribute(n);
        else {
          switch (typeof r) {
            case `undefined`:
            case `function`:
            case `symbol`:
            case `boolean`:
              e.removeAttribute(n);
              return;
          }
          e.setAttributeNS(t, n, r);
        }
      }
      function an(e) {
        switch (typeof e) {
          case `bigint`:
          case `boolean`:
          case `number`:
          case `string`:
          case `undefined`:
            return e;
          case `object`:
            return e;
          default:
            return ``;
        }
      }
      function on(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          e.toLowerCase() === `input` &&
          (t === `checkbox` || t === `radio`)
        );
      }
      function sn(e, t, n) {
        var r = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
        if (
          !e.hasOwnProperty(t) &&
          r !== void 0 &&
          typeof r.get == `function` &&
          typeof r.set == `function`
        ) {
          var i = r.get,
            a = r.set;
          return (
            Object.defineProperty(e, t, {
              configurable: !0,
              get: function () {
                return i.call(this);
              },
              set: function (e) {
                ((n = `` + e), a.call(this, e));
              },
            }),
            Object.defineProperty(e, t, { enumerable: r.enumerable }),
            {
              getValue: function () {
                return n;
              },
              setValue: function (e) {
                n = `` + e;
              },
              stopTracking: function () {
                ((e._valueTracker = null), delete e[t]);
              },
            }
          );
        }
      }
      function cn(e) {
        if (!e._valueTracker) {
          var t = on(e) ? `checked` : `value`;
          e._valueTracker = sn(e, t, `` + e[t]);
        }
      }
      function ln(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = ``;
        return (
          e && (r = on(e) ? (e.checked ? `true` : `false`) : e.value),
          (e = r),
          e !== n && (t.setValue(e), !0)
        );
      }
      var un = /[\n"\\]/g;
      function dn(e) {
        return e.replace(un, function (e) {
          return `\\` + e.charCodeAt(0).toString(16) + ` `;
        });
      }
      function fn(e, t, n, r, i, a, o, s) {
        ((e.name = ``),
          o != null &&
          typeof o != `function` &&
          typeof o != `symbol` &&
          typeof o != `boolean`
            ? (e.type = o)
            : e.removeAttribute(`type`),
          t == null
            ? (o !== `submit` && o !== `reset`) || e.removeAttribute(`value`)
            : o === `number`
              ? ((t === 0 && e.value === ``) || e.value != t) &&
                (e.value = `` + an(t))
              : e.value !== `` + an(t) && (e.value = `` + an(t)),
          t == null
            ? n == null
              ? r != null && e.removeAttribute(`value`)
              : mn(e, an(n))
            : o === `number` && e.value == t
              ? mn(e, an(e.value))
              : mn(e, an(t)),
          i == null && a != null && (e.defaultChecked = !!a),
          i != null &&
            (e.checked = i && typeof i != `function` && typeof i != `symbol`),
          s != null &&
          typeof s != `function` &&
          typeof s != `symbol` &&
          typeof s != `boolean`
            ? (e.name = `` + an(s))
            : e.removeAttribute(`name`));
      }
      function pn(e, t, n, r, i, a, o, s) {
        if (
          (a != null &&
            typeof a != `function` &&
            typeof a != `symbol` &&
            typeof a != `boolean` &&
            (e.type = a),
          t != null || n != null)
        ) {
          if (!((a !== `submit` && a !== `reset`) || t != null)) {
            cn(e);
            return;
          }
          ((n = n == null ? `` : `` + an(n)),
            (t = t == null ? n : `` + an(t)),
            s || t === e.value || (e.value = t),
            (e.defaultValue = t));
        }
        ((r ??= i),
          (r = typeof r != `function` && typeof r != `symbol` && !!r),
          (e.checked = s ? e.checked : !!r),
          (e.defaultChecked = !!r),
          o != null &&
            typeof o != `function` &&
            typeof o != `symbol` &&
            typeof o != `boolean` &&
            (e.name = o),
          cn(e));
      }
      function mn(e, t) {
        e.defaultValue !== `` + t && (e.defaultValue = `` + t);
      }
      function hn(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var i = 0; i < n.length; i++) t[`$` + n[i]] = !0;
          for (n = 0; n < e.length; n++)
            ((i = t.hasOwnProperty(`$` + e[n].value)),
              e[n].selected !== i && (e[n].selected = i),
              i && r && (e[n].defaultSelected = !0));
        } else {
          for (n = `` + an(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
              ((e[i].selected = !0), r && (e[i].defaultSelected = !0));
              return;
            }
            t !== null || e[i].disabled || (t = e[i]);
          }
          t !== null && (t.selected = !0);
        }
      }
      function gn(e, t, n) {
        t != null &&
        ((t = `` + an(t)), t !== e.value && (e.value = t), n == null)
          ? e.defaultValue !== t && (e.defaultValue = t)
          : (e.defaultValue = n == null ? `` : `` + an(n));
      }
      function _n(e, t, n, r) {
        if (t == null) {
          if (r != null) {
            if (n != null) throw Error(i(92));
            if (Se(r)) {
              if (1 < r.length) throw Error(i(93));
              r = r[0];
            }
            n = r;
          }
          ((n ??= ``), (t = n));
        }
        ((n = an(t)),
          (e.defaultValue = n),
          (r = e.textContent),
          r === n && r !== `` && r !== null && (e.value = r),
          cn(e));
      }
      function vn(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
          }
        }
        e.textContent = t;
      }
      var yn = new Set(
        `animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(
          ` `,
        ),
      );
      function bn(e, t, n) {
        var r = t.indexOf(`--`) === 0;
        n == null || typeof n == `boolean` || n === ``
          ? r
            ? e.setProperty(t, ``)
            : t === `float`
              ? (e.cssFloat = ``)
              : (e[t] = ``)
          : r
            ? e.setProperty(t, n)
            : typeof n != `number` || n === 0 || yn.has(t)
              ? t === `float`
                ? (e.cssFloat = n)
                : (e[t] = (`` + n).trim())
              : (e[t] = n + `px`);
      }
      function xn(e, t, n) {
        if (t != null && typeof t != `object`) throw Error(i(62));
        if (((e = e.style), n != null)) {
          for (var r in n)
            !n.hasOwnProperty(r) ||
              (t != null && t.hasOwnProperty(r)) ||
              (r.indexOf(`--`) === 0
                ? e.setProperty(r, ``)
                : r === `float`
                  ? (e.cssFloat = ``)
                  : (e[r] = ``),
              (j = !0));
          for (var a in t)
            ((r = t[a]),
              t.hasOwnProperty(a) && n[a] !== r && (bn(e, a, r), (j = !0)));
        } else for (var o in t) t.hasOwnProperty(o) && bn(e, o, t[o]);
      }
      function Sn(e) {
        if (e.indexOf(`-`) === -1) return !1;
        switch (e) {
          case `annotation-xml`:
          case `color-profile`:
          case `font-face`:
          case `font-face-src`:
          case `font-face-uri`:
          case `font-face-format`:
          case `font-face-name`:
          case `missing-glyph`:
            return !1;
          default:
            return !0;
        }
      }
      var Cn = new Map([
          [`acceptCharset`, `accept-charset`],
          [`htmlFor`, `for`],
          [`httpEquiv`, `http-equiv`],
          [`crossOrigin`, `crossorigin`],
          [`accentHeight`, `accent-height`],
          [`alignmentBaseline`, `alignment-baseline`],
          [`arabicForm`, `arabic-form`],
          [`baselineShift`, `baseline-shift`],
          [`capHeight`, `cap-height`],
          [`clipPath`, `clip-path`],
          [`clipRule`, `clip-rule`],
          [`colorInterpolation`, `color-interpolation`],
          [`colorInterpolationFilters`, `color-interpolation-filters`],
          [`colorProfile`, `color-profile`],
          [`colorRendering`, `color-rendering`],
          [`dominantBaseline`, `dominant-baseline`],
          [`enableBackground`, `enable-background`],
          [`fillOpacity`, `fill-opacity`],
          [`fillRule`, `fill-rule`],
          [`floodColor`, `flood-color`],
          [`floodOpacity`, `flood-opacity`],
          [`fontFamily`, `font-family`],
          [`fontSize`, `font-size`],
          [`fontSizeAdjust`, `font-size-adjust`],
          [`fontStretch`, `font-stretch`],
          [`fontStyle`, `font-style`],
          [`fontVariant`, `font-variant`],
          [`fontWeight`, `font-weight`],
          [`glyphName`, `glyph-name`],
          [`glyphOrientationHorizontal`, `glyph-orientation-horizontal`],
          [`glyphOrientationVertical`, `glyph-orientation-vertical`],
          [`horizAdvX`, `horiz-adv-x`],
          [`horizOriginX`, `horiz-origin-x`],
          [`imageRendering`, `image-rendering`],
          [`letterSpacing`, `letter-spacing`],
          [`lightingColor`, `lighting-color`],
          [`markerEnd`, `marker-end`],
          [`markerMid`, `marker-mid`],
          [`markerStart`, `marker-start`],
          [`maskType`, `mask-type`],
          [`overlinePosition`, `overline-position`],
          [`overlineThickness`, `overline-thickness`],
          [`paintOrder`, `paint-order`],
          [`panose-1`, `panose-1`],
          [`pointerEvents`, `pointer-events`],
          [`renderingIntent`, `rendering-intent`],
          [`shapeRendering`, `shape-rendering`],
          [`stopColor`, `stop-color`],
          [`stopOpacity`, `stop-opacity`],
          [`strikethroughPosition`, `strikethrough-position`],
          [`strikethroughThickness`, `strikethrough-thickness`],
          [`strokeDasharray`, `stroke-dasharray`],
          [`strokeDashoffset`, `stroke-dashoffset`],
          [`strokeLinecap`, `stroke-linecap`],
          [`strokeLinejoin`, `stroke-linejoin`],
          [`strokeMiterlimit`, `stroke-miterlimit`],
          [`strokeOpacity`, `stroke-opacity`],
          [`strokeWidth`, `stroke-width`],
          [`textAnchor`, `text-anchor`],
          [`textDecoration`, `text-decoration`],
          [`textRendering`, `text-rendering`],
          [`transformOrigin`, `transform-origin`],
          [`underlinePosition`, `underline-position`],
          [`underlineThickness`, `underline-thickness`],
          [`unicodeBidi`, `unicode-bidi`],
          [`unicodeRange`, `unicode-range`],
          [`unitsPerEm`, `units-per-em`],
          [`vAlphabetic`, `v-alphabetic`],
          [`vHanging`, `v-hanging`],
          [`vIdeographic`, `v-ideographic`],
          [`vMathematical`, `v-mathematical`],
          [`vectorEffect`, `vector-effect`],
          [`vertAdvY`, `vert-adv-y`],
          [`vertOriginX`, `vert-origin-x`],
          [`vertOriginY`, `vert-origin-y`],
          [`wordSpacing`, `word-spacing`],
          [`writingMode`, `writing-mode`],
          [`xmlnsXlink`, `xmlns:xlink`],
          [`xHeight`, `x-height`],
        ]),
        wn =
          /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
      function Tn(e) {
        return wn.test(`` + e)
          ? `javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`
          : e;
      }
      function En() {}
      var Dn = null;
      function On(e) {
        return (
          (e = e.target || e.srcElement || window),
          e.correspondingUseElement && (e = e.correspondingUseElement),
          e.nodeType === 3 ? e.parentNode : e
        );
      }
      var kn = null,
        An = null;
      function M(e) {
        var t = Vt(e);
        if (t && (e = t.stateNode)) {
          var n = e[jt] || null;
          a: switch (((e = t.stateNode), t.type)) {
            case `input`:
              if (
                (fn(
                  e,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name,
                ),
                (t = n.name),
                n.type === `radio` && t != null)
              ) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    `input[name="` + dn(`` + t) + `"][type="radio"]`,
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = r[jt] || null;
                    if (!a) throw Error(i(90));
                    fn(
                      r,
                      a.value,
                      a.defaultValue,
                      a.defaultValue,
                      a.checked,
                      a.defaultChecked,
                      a.type,
                      a.name,
                    );
                  }
                }
                for (t = 0; t < n.length; t++)
                  ((r = n[t]), r.form === e.form && ln(r));
              }
              break a;
            case `textarea`:
              gn(e, n.value, n.defaultValue);
              break a;
            case `select`:
              ((t = n.value), t != null && hn(e, !!n.multiple, t, !1));
          }
        }
      }
      var jn = !1;
      function Mn(e, t, n) {
        if (jn) return e(t, n);
        jn = !0;
        try {
          return e(t);
        } finally {
          if (
            ((jn = !1),
            (kn !== null || An !== null) &&
              (zd(), kn && ((t = kn), (e = An), (An = kn = null), M(t), e)))
          )
            for (t = 0; t < e.length; t++) M(e[t]);
        }
      }
      function Nn(e, t) {
        var n = e.stateNode;
        if (n === null) return null;
        var r = n[jt] || null;
        if (r === null) return null;
        n = r[t];
        a: switch (t) {
          case `onClick`:
          case `onClickCapture`:
          case `onDoubleClick`:
          case `onDoubleClickCapture`:
          case `onMouseDown`:
          case `onMouseDownCapture`:
          case `onMouseMove`:
          case `onMouseMoveCapture`:
          case `onMouseUp`:
          case `onMouseUpCapture`:
          case `onMouseEnter`:
            ((r = !r.disabled) ||
              ((e = e.type),
              (r =
                e !== `button` &&
                e !== `input` &&
                e !== `select` &&
                e !== `textarea`)),
              (e = !r));
            break a;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && typeof n != `function`) throw Error(i(231, t, typeof n));
        return n;
      }
      var Pn =
          typeof window < `u` &&
          window.document !== void 0 &&
          window.document.createElement !== void 0,
        Fn = !1;
      if (Pn)
        try {
          var In = {};
          (Object.defineProperty(In, "passive", {
            get: function () {
              Fn = !0;
            },
          }),
            window.addEventListener(`test`, In, In),
            window.removeEventListener(`test`, In, In));
        } catch {
          Fn = !1;
        }
      var Ln = null,
        Rn = null,
        zn = null;
      function Bn() {
        if (zn) return zn;
        var e,
          t = Rn,
          n = t.length,
          r,
          i = `value` in Ln ? Ln.value : Ln.textContent,
          a = i.length;
        for (e = 0; e < n && t[e] === i[e]; e++);
        var o = n - e;
        for (r = 1; r <= o && t[n - r] === i[a - r]; r++);
        return (zn = i.slice(e, 1 < r ? 1 - r : void 0));
      }
      function Vn(e) {
        var t = e.keyCode;
        return (
          `charCode` in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
          e === 10 && (e = 13),
          32 <= e || e === 13 ? e : 0
        );
      }
      function Hn() {
        return !0;
      }
      function Un() {
        return !1;
      }
      function Wn(e) {
        function t(t, n, r, i, a) {
          for (var o in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = i),
          (this.target = a),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(i) : i[o]));
          return (
            (this.isDefaultPrevented = (
              i.defaultPrevented == null
                ? !1 === i.returnValue
                : i.defaultPrevented
            )
              ? Hn
              : Un),
            (this.isPropagationStopped = Un),
            this
          );
        }
        return (
          D(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : typeof e.returnValue != `unknown` && (e.returnValue = !1),
                (this.isDefaultPrevented = Hn));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : typeof e.cancelBubble != `unknown` && (e.cancelBubble = !0),
                (this.isPropagationStopped = Hn));
            },
            persist: function () {},
            isPersistent: Hn,
          }),
          t
        );
      }
      var Gn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        Kn = Wn(Gn),
        qn = D({}, Gn, { view: 0, detail: 0 }),
        Jn = Wn(qn),
        Yn,
        Xn,
        Zn,
        Qn = D({}, qn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: cr,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return e.relatedTarget === void 0
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return `movementX` in e
              ? e.movementX
              : (e !== Zn &&
                  (Zn && e.type === `mousemove`
                    ? ((Yn = e.screenX - Zn.screenX),
                      (Xn = e.screenY - Zn.screenY))
                    : (Xn = Yn = 0),
                  (Zn = e)),
                Yn);
          },
          movementY: function (e) {
            return `movementY` in e ? e.movementY : Xn;
          },
        }),
        $n = Wn(Qn),
        er = Wn(D({}, Qn, { dataTransfer: 0 })),
        N = Wn(D({}, qn, { relatedTarget: 0 })),
        tr = Wn(
          D({}, Gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
        ),
        nr = Wn(
          D({}, Gn, {
            clipboardData: function (e) {
              return `clipboardData` in e
                ? e.clipboardData
                : window.clipboardData;
            },
          }),
        ),
        rr = Wn(D({}, Gn, { data: 0 })),
        ir = {
          Esc: `Escape`,
          Spacebar: ` `,
          Left: `ArrowLeft`,
          Up: `ArrowUp`,
          Right: `ArrowRight`,
          Down: `ArrowDown`,
          Del: `Delete`,
          Win: `OS`,
          Menu: `ContextMenu`,
          Apps: `ContextMenu`,
          Scroll: `ScrollLock`,
          MozPrintableKey: `Unidentified`,
        },
        ar = {
          8: `Backspace`,
          9: `Tab`,
          12: `Clear`,
          13: `Enter`,
          16: `Shift`,
          17: `Control`,
          18: `Alt`,
          19: `Pause`,
          20: `CapsLock`,
          27: `Escape`,
          32: ` `,
          33: `PageUp`,
          34: `PageDown`,
          35: `End`,
          36: `Home`,
          37: `ArrowLeft`,
          38: `ArrowUp`,
          39: `ArrowRight`,
          40: `ArrowDown`,
          45: `Insert`,
          46: `Delete`,
          112: `F1`,
          113: `F2`,
          114: `F3`,
          115: `F4`,
          116: `F5`,
          117: `F6`,
          118: `F7`,
          119: `F8`,
          120: `F9`,
          121: `F10`,
          122: `F11`,
          123: `F12`,
          144: `NumLock`,
          145: `ScrollLock`,
          224: `Meta`,
        },
        or = {
          Alt: `altKey`,
          Control: `ctrlKey`,
          Meta: `metaKey`,
          Shift: `shiftKey`,
        };
      function sr(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : (e = or[e])
            ? !!t[e]
            : !1;
      }
      function cr() {
        return sr;
      }
      var lr = Wn(
          D({}, qn, {
            key: function (e) {
              if (e.key) {
                var t = ir[e.key] || e.key;
                if (t !== `Unidentified`) return t;
              }
              return e.type === `keypress`
                ? ((e = Vn(e)), e === 13 ? `Enter` : String.fromCharCode(e))
                : e.type === `keydown` || e.type === `keyup`
                  ? ar[e.keyCode] || `Unidentified`
                  : ``;
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: cr,
            charCode: function (e) {
              return e.type === `keypress` ? Vn(e) : 0;
            },
            keyCode: function (e) {
              return e.type === `keydown` || e.type === `keyup` ? e.keyCode : 0;
            },
            which: function (e) {
              return e.type === `keypress`
                ? Vn(e)
                : e.type === `keydown` || e.type === `keyup`
                  ? e.keyCode
                  : 0;
            },
          }),
        ),
        ur = Wn(
          D({}, Qn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          }),
        ),
        dr = Wn(D({}, Gn, { submitter: 0 })),
        fr = Wn(
          D({}, qn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: cr,
          }),
        ),
        pr = Wn(
          D({}, Gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
        ),
        mr = Wn(
          D({}, Qn, {
            deltaX: function (e) {
              return `deltaX` in e
                ? e.deltaX
                : `wheelDeltaX` in e
                  ? -e.wheelDeltaX
                  : 0;
            },
            deltaY: function (e) {
              return `deltaY` in e
                ? e.deltaY
                : `wheelDeltaY` in e
                  ? -e.wheelDeltaY
                  : `wheelDelta` in e
                    ? -e.wheelDelta
                    : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          }),
        ),
        hr = Wn(D({}, Gn, { newState: 0, oldState: 0, source: 0 })),
        gr = [9, 13, 27, 32],
        _r = Pn && `CompositionEvent` in window,
        vr = null;
      Pn && `documentMode` in document && (vr = document.documentMode);
      var yr = Pn && `TextEvent` in window && !vr,
        br = Pn && (!_r || (vr && 8 < vr && 11 >= vr)),
        xr = ` `,
        Sr = !1;
      function Cr(e, t) {
        switch (e) {
          case `keyup`:
            return gr.indexOf(t.keyCode) !== -1;
          case `keydown`:
            return t.keyCode !== 229;
          case `keypress`:
          case `mousedown`:
          case `focusout`:
            return !0;
          default:
            return !1;
        }
      }
      function wr(e) {
        return (
          (e = e.detail),
          typeof e == `object` && `data` in e ? e.data : null
        );
      }
      var Tr = !1;
      function Er(e, t) {
        switch (e) {
          case `compositionend`:
            return wr(t);
          case `keypress`:
            return t.which === 32 ? ((Sr = !0), xr) : null;
          case `textInput`:
            return ((e = t.data), e === xr && Sr ? null : e);
          default:
            return null;
        }
      }
      function Dr(e, t) {
        if (Tr)
          return e === `compositionend` || (!_r && Cr(e, t))
            ? ((e = Bn()), (zn = Rn = Ln = null), (Tr = !1), e)
            : null;
        switch (e) {
          case `paste`:
            return null;
          case `keypress`:
            if (
              !(t.ctrlKey || t.altKey || t.metaKey) ||
              (t.ctrlKey && t.altKey)
            ) {
              if (t.char && 1 < t.char.length) return t.char;
              if (t.which) return String.fromCharCode(t.which);
            }
            return null;
          case `compositionend`:
            return br && t.locale !== `ko` ? null : t.data;
          default:
            return null;
        }
      }
      var Or = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function kr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return t === `input` ? !!Or[e.type] : t === `textarea`;
      }
      function Ar(e, t, n, r) {
        (kn ? (An ? An.push(r) : (An = [r])) : (kn = r),
          (t = Jf(t, `onChange`)),
          0 < t.length &&
            ((n = new Kn(`onChange`, `change`, null, n, r)),
            e.push({ event: n, listeners: t })));
      }
      var jr = null,
        Mr = null;
      function Nr(e) {
        Vf(e, 0);
      }
      function Pr(e) {
        if (ln(Ht(e))) return e;
      }
      function Fr(e, t) {
        if (e === `change`) return t;
      }
      var Ir = !1;
      if (Pn) {
        var Lr;
        if (Pn) {
          var Rr = `oninput` in document;
          if (!Rr) {
            var zr = document.createElement(`div`);
            (zr.setAttribute(`oninput`, `return;`),
              (Rr = typeof zr.oninput == `function`));
          }
          Lr = Rr;
        } else Lr = !1;
        Ir = Lr && (!document.documentMode || 9 < document.documentMode);
      }
      function Br() {
        jr && (jr.detachEvent(`onpropertychange`, Vr), (Mr = jr = null));
      }
      function Vr(e) {
        if (e.propertyName === `value` && Pr(Mr)) {
          var t = [];
          (Ar(t, Mr, e, On(e)), Mn(Nr, t));
        }
      }
      function Hr(e, t, n) {
        e === `focusin`
          ? (Br(), (jr = t), (Mr = n), jr.attachEvent(`onpropertychange`, Vr))
          : e === `focusout` && Br();
      }
      function Ur(e) {
        if (e === `selectionchange` || e === `keyup` || e === `keydown`)
          return Pr(Mr);
      }
      function Wr(e, t) {
        if (e === `click`) return Pr(t);
      }
      function Gr(e, t) {
        if (e === `input` || e === `change`) return Pr(t);
      }
      function Kr(e, t) {
        return (e === t && (e !== 0 || 1 / e == 1 / t)) || (e !== e && t !== t);
      }
      var qr = typeof Object.is == `function` ? Object.is : Kr;
      function Jr(e, t) {
        if (qr(e, t)) return !0;
        if (typeof e != `object` || !e || typeof t != `object` || !t) return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++) {
          var i = n[r];
          if (!Ue.call(t, i) || !qr(e[i], t[i])) return !1;
        }
        return !0;
      }
      function Yr(e) {
        if (((e ||= typeof document < `u` ? document : void 0), e === void 0))
          return null;
        try {
          return e.activeElement || e.body;
        } catch {
          return e.body;
        }
      }
      function Xr(e) {
        for (; e && e.firstChild;) e = e.firstChild;
        return e;
      }
      function Zr(e, t) {
        var n = Xr(e);
        e = 0;
        for (var r; n;) {
          if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
              return { node: n, offset: t - e };
            e = r;
          }
          a: {
            for (; n;) {
              if (n.nextSibling) {
                n = n.nextSibling;
                break a;
              }
              n = n.parentNode;
            }
            n = void 0;
          }
          n = Xr(n);
        }
      }
      function Qr(e, t) {
        return e && t
          ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? Qr(e, t.parentNode)
                : `contains` in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
          : !1;
      }
      function $r(e) {
        e =
          e != null &&
          e.ownerDocument != null &&
          e.ownerDocument.defaultView != null
            ? e.ownerDocument.defaultView
            : window;
        for (var t = Yr(e.document); t instanceof e.HTMLIFrameElement;) {
          try {
            var n = typeof t.contentWindow.location.href == `string`;
          } catch {
            n = !1;
          }
          if (n) e = t.contentWindow;
          else break;
          t = Yr(e.document);
        }
        return t;
      }
      function ei(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          ((t === `input` &&
            (e.type === `text` ||
              e.type === `search` ||
              e.type === `tel` ||
              e.type === `url` ||
              e.type === `password`)) ||
            t === `textarea` ||
            e.contentEditable === `true`)
        );
      }
      var ti = Pn && `documentMode` in document && 11 >= document.documentMode,
        ni = null,
        ri = null,
        ii = null,
        ai = !1;
      function oi(e, t, n) {
        var r =
          n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
        ai ||
          ni == null ||
          ni !== Yr(r) ||
          ((r = ni),
          `selectionStart` in r && ei(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                (r.ownerDocument && r.ownerDocument.defaultView) ||
                window
              ).getSelection()),
              (r = {
                anchorNode: r.anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              })),
          (ii && Jr(ii, r)) ||
            ((ii = r),
            (r = Jf(ri, `onSelect`)),
            0 < r.length &&
              ((t = new Kn(`onSelect`, `select`, null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = ni))));
      }
      function si(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n[`Webkit` + e] = `webkit` + t),
          (n[`Moz` + e] = `moz` + t),
          n
        );
      }
      var ci = {
          animationend: si(`Animation`, `AnimationEnd`),
          animationiteration: si(`Animation`, `AnimationIteration`),
          animationstart: si(`Animation`, `AnimationStart`),
          transitionrun: si(`Transition`, `TransitionRun`),
          transitionstart: si(`Transition`, `TransitionStart`),
          transitioncancel: si(`Transition`, `TransitionCancel`),
          transitionend: si(`Transition`, `TransitionEnd`),
        },
        li = {},
        ui = {};
      Pn &&
        ((ui = document.createElement(`div`).style),
        `AnimationEvent` in window ||
          (delete ci.animationend.animation,
          delete ci.animationiteration.animation,
          delete ci.animationstart.animation),
        `TransitionEvent` in window || delete ci.transitionend.transition);
      function di(e) {
        if (li[e]) return li[e];
        if (!ci[e]) return e;
        var t = ci[e],
          n;
        for (n in t) if (t.hasOwnProperty(n) && n in ui) return (li[e] = t[n]);
        return e;
      }
      var fi = di(`animationend`),
        pi = di(`animationiteration`),
        mi = di(`animationstart`),
        hi = di(`transitionrun`),
        gi = di(`transitionstart`),
        _i = di(`transitioncancel`),
        vi = di(`transitionend`),
        yi = new Map(),
        bi =
          `abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(
            ` `,
          );
      bi.push(`scrollEnd`);
      function xi(e, t) {
        (yi.set(e, t), Jt(t, [e]));
      }
      var Si = 0;
      function Ci(e, t) {
        if (e.name != null && e.name !== `auto`) return e.name;
        if (t.autoName !== null) return t.autoName;
        e = bd.identifierPrefix;
        var n = Si++;
        return ((e = `_` + e + `t_` + n.toString(32) + `_`), (t.autoName = e));
      }
      function wi(e) {
        if (e == null || typeof e == `string`) return e;
        var t = null,
          n = Od;
        if (n !== null)
          for (var r = 0; r < n.length; r++) {
            var i = e[n[r]];
            if (i != null) {
              if (i === `none`) return `none`;
              t = t == null ? i : t + (` ` + i);
            }
          }
        return t ?? e.default;
      }
      function Ti(e, t) {
        return (
          (e = wi(e)),
          (t = wi(t)),
          t == null ? (e === `auto` ? null : e) : t === `auto` ? null : t
        );
      }
      var Ei =
          typeof reportError == `function`
            ? reportError
            : function (e) {
                if (
                  typeof window == `object` &&
                  typeof window.ErrorEvent == `function`
                ) {
                  var t = new window.ErrorEvent(`error`, {
                    bubbles: !0,
                    cancelable: !0,
                    message:
                      typeof e == `object` && e && typeof e.message == `string`
                        ? String(e.message)
                        : String(e),
                    error: e,
                  });
                  if (!window.dispatchEvent(t)) return;
                } else if (
                  typeof process == `object` &&
                  typeof process.emit == `function`
                ) {
                  process.emit(`uncaughtException`, e);
                  return;
                }
                console.error(e);
              },
        Di = [],
        Oi = 0,
        ki = 0;
      function Ai() {
        for (var e = Oi, t = (ki = Oi = 0); t < e;) {
          var n = Di[t];
          Di[t++] = null;
          var r = Di[t];
          Di[t++] = null;
          var i = Di[t];
          Di[t++] = null;
          var a = Di[t];
          if (((Di[t++] = null), r !== null && i !== null)) {
            var o = r.pending;
            (o === null ? (i.next = i) : ((i.next = o.next), (o.next = i)),
              (r.pending = i));
          }
          a !== 0 && Pi(n, i, a);
        }
      }
      function ji(e, t, n, r) {
        ((Di[Oi++] = e),
          (Di[Oi++] = t),
          (Di[Oi++] = n),
          (Di[Oi++] = r),
          (ki |= r),
          (e.lanes |= r),
          (e = e.alternate),
          e !== null && (e.lanes |= r));
      }
      function Mi(e, t, n, r) {
        return (ji(e, t, n, r), Fi(e));
      }
      function Ni(e, t) {
        return (ji(e, null, null, t), Fi(e));
      }
      function Pi(e, t, n) {
        e.lanes |= n;
        var r = e.alternate;
        r !== null && (r.lanes |= n);
        for (var i = !1, a = e.return; a !== null;)
          ((a.childLanes |= n),
            (r = a.alternate),
            r !== null && (r.childLanes |= n),
            a.tag === 22 &&
              ((e = a.stateNode), e === null || e._visibility & 1 || (i = !0)),
            (e = a),
            (a = a.return));
        return e.tag === 3
          ? ((a = e.stateNode),
            i &&
              t !== null &&
              ((i = 31 - ot(n)),
              (e = a.hiddenUpdates),
              (r = e[i]),
              r === null ? (e[i] = [t]) : r.push(t),
              (t.lane = n | 536870912)),
            a)
          : null;
      }
      function Fi(e) {
        if (50 < kd) throw ((kd = 0), (Ad = null), Error(i(185)));
        for (var t = e.return; t !== null;) ((e = t), (t = e.return));
        return e.tag === 3 ? e.stateNode : null;
      }
      var Ii = {};
      function Li(e, t, n, r) {
        ((this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.refCleanup = this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.subtreeFlags = this.flags = 0),
          (this.deletions = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null));
      }
      function Ri(e, t, n, r) {
        return new Li(e, t, n, r);
      }
      function zi(e) {
        return ((e = e.prototype), !(!e || !e.isReactComponent));
      }
      function Bi(e, t) {
        var n = e.alternate;
        return (
          n === null
            ? ((n = Ri(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
          (n.flags = e.flags & 1206910976),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          (n.refCleanup = e.refCleanup),
          n
        );
      }
      function Vi(e, t) {
        e.flags &= 1206910978;
        var n = e.alternate;
        return (
          n === null
            ? ((e.childLanes = 0),
              (e.lanes = t),
              (e.child = null),
              (e.subtreeFlags = 0),
              (e.memoizedProps = null),
              (e.memoizedState = null),
              (e.updateQueue = null),
              (e.dependencies = null),
              (e.stateNode = null))
            : ((e.childLanes = n.childLanes),
              (e.lanes = n.lanes),
              (e.child = n.child),
              (e.subtreeFlags = 0),
              (e.deletions = null),
              (e.memoizedProps = n.memoizedProps),
              (e.memoizedState = n.memoizedState),
              (e.updateQueue = n.updateQueue),
              (e.type = n.type),
              (t = n.dependencies),
              (e.dependencies =
                t === null
                  ? null
                  : { lanes: t.lanes, firstContext: t.firstContext })),
          e
        );
      }
      function Hi(e, t, n, r, a, o) {
        var s = 0;
        if (((r = e), typeof r == `function`)) zi(r) && (s = 1);
        else if (typeof r == `string`)
          s = qm(e, n, Oe.current)
            ? 26
            : e === `html` || e === `head` || e === `body`
              ? 27
              : 5;
        else
          a: switch (r) {
            case pe:
              return (
                (e = Ri(31, n, t, a)),
                (e.elementType = pe),
                (e.lanes = o),
                e
              );
            case re:
              return Ui(n.children, a, o, t);
            case ie:
              ((s = 8), (a |= 24));
              break;
            case ae:
              return (
                (e = Ri(12, n, t, a | 2)),
                (e.elementType = ae),
                (e.lanes = o),
                e
              );
            case le:
              return (
                (e = Ri(13, n, t, a)),
                (e.elementType = le),
                (e.lanes = o),
                e
              );
            case ue:
              return (
                (e = Ri(19, n, t, a)),
                (e.elementType = ue),
                (e.lanes = o),
                e
              );
            case me:
            case ge:
              return (
                (e = a | 32),
                (e = Ri(30, n, t, e)),
                (e.elementType = ge),
                (e.lanes = o),
                (e.stateNode = {
                  autoName: null,
                  paired: null,
                  clones: null,
                  ref: null,
                }),
                e
              );
            default:
              if (typeof r == `object` && r)
                switch (r.$$typeof) {
                  case se:
                    s = 10;
                    break a;
                  case oe:
                    s = 9;
                    break a;
                  case ce:
                    s = 11;
                    break a;
                  case de:
                    s = 14;
                    break a;
                  case fe:
                    ((s = 16), (r = null));
                    break a;
                }
              ((s = 29),
                (n = Error(i(130, e === null ? `null` : typeof e, ``))),
                (r = null));
          }
        return (
          (t = Ri(s, n, t, a)),
          (t.elementType = e),
          (t.type = r),
          (t.lanes = o),
          t
        );
      }
      function Ui(e, t, n, r) {
        return ((e = Ri(7, e, r, t)), (e.lanes = n), e);
      }
      function Wi(e, t, n) {
        return ((e = Ri(6, e, null, t)), (e.lanes = n), e);
      }
      function Gi(e) {
        var t = Ri(18, null, null, 0);
        return ((t.stateNode = e), t);
      }
      function Ki(e, t, n) {
        return (
          (t = Ri(4, e.children === null ? [] : e.children, e.key, t)),
          (t.lanes = n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      var qi = new WeakMap();
      function Ji(e, t) {
        if (typeof e == `object` && e) {
          var n = qi.get(e);
          return n === void 0
            ? ((t = { value: e, source: t, stack: He(t) }), qi.set(e, t), t)
            : n;
        }
        return { value: e, source: t, stack: He(t) };
      }
      var Yi = [],
        Xi = 0,
        Zi = null,
        Qi = 0,
        $i = [],
        ea = 0,
        ta = null,
        na = 1,
        ra = ``;
      function ia(e, t) {
        ((Yi[Xi++] = Qi), (Yi[Xi++] = Zi), (Zi = e), (Qi = t));
      }
      function aa(e, t, n) {
        (($i[ea++] = na), ($i[ea++] = ra), ($i[ea++] = ta), (ta = e));
        var r = na;
        e = ra;
        var i = 32 - ot(r) - 1;
        ((r &= ~(1 << i)), (n += 1));
        var a = 32 - ot(t) + i;
        if (30 < a) {
          var o = i - (i % 5);
          ((a = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (i -= o),
            (na = (1 << (32 - ot(t) + i)) | (n << i) | r),
            (ra = a + e));
        } else ((na = (1 << a) | (n << i) | r), (ra = e));
      }
      function oa(e) {
        e.return !== null && (ia(e, 1), aa(e, 1, 0));
      }
      function sa(e) {
        for (; e === Zi;)
          ((Zi = Yi[--Xi]), (Yi[Xi] = null), (Qi = Yi[--Xi]), (Yi[Xi] = null));
        for (; e === ta;)
          ((ta = $i[--ea]),
            ($i[ea] = null),
            (ra = $i[--ea]),
            ($i[ea] = null),
            (na = $i[--ea]),
            ($i[ea] = null));
      }
      function ca(e, t) {
        (($i[ea++] = na),
          ($i[ea++] = ra),
          ($i[ea++] = ta),
          (na = t.id),
          (ra = t.overflow),
          (ta = e));
      }
      var la = null,
        P = null,
        F = !1,
        ua = null,
        da = !1,
        I = Error(i(519));
      function L(e) {
        throw (
          ga(
            Ji(
              Error(
                i(
                  418,
                  1 < arguments.length &&
                    arguments[1] !== void 0 &&
                    arguments[1]
                    ? `text`
                    : `HTML`,
                  ``,
                ),
              ),
              e,
            ),
          ),
          I
        );
      }
      function fa(e) {
        var t = e.stateNode,
          n = e.type,
          r = e.memoizedProps;
        switch (((t[At] = e), (t[jt] = r), n)) {
          case `dialog`:
            (Q(`cancel`, t), Q(`close`, t));
            break;
          case `iframe`:
          case `object`:
          case `embed`:
            Q(`load`, t);
            break;
          case `video`:
          case `audio`:
            for (n = 0; n < zf.length; n++) Q(zf[n], t);
            break;
          case `source`:
            Q(`error`, t);
            break;
          case `img`:
          case `image`:
          case `link`:
            (Q(`error`, t), Q(`load`, t));
            break;
          case `details`:
            Q(`toggle`, t);
            break;
          case `input`:
            (Q(`invalid`, t),
              pn(
                t,
                r.value,
                r.defaultValue,
                r.checked,
                r.defaultChecked,
                r.type,
                r.name,
                !0,
              ));
            break;
          case `select`:
            Q(`invalid`, t);
            break;
          case `textarea`:
            (Q(`invalid`, t), _n(t, r.value, r.defaultValue, r.children));
        }
        ((n = r.children),
          (typeof n != `string` &&
            typeof n != `number` &&
            typeof n != `bigint`) ||
          t.textContent === `` + n ||
          !0 === r.suppressHydrationWarning ||
          ep(t.textContent, n)
            ? (r.popover != null && (Q(`beforetoggle`, t), Q(`toggle`, t)),
              r.onScroll != null && Q(`scroll`, t),
              r.onScrollEnd != null && Q(`scrollend`, t),
              r.onClick != null && (t.onclick = En),
              (t = !0))
            : (t = !1),
          t || L(e, !0));
      }
      function pa(e) {
        for (la = e.return; la;)
          switch (la.tag) {
            case 5:
            case 31:
            case 13:
              da = !1;
              return;
            case 27:
            case 3:
              da = !0;
              return;
            default:
              la = la.return;
          }
      }
      function ma(e) {
        if (e !== la) return !1;
        if (!F) return (pa(e), (F = !0), !1);
        var t = e.tag,
          n;
        if (
          ((n = t !== 3 && t !== 27) &&
            ((n = t === 5) &&
              ((n = e.type),
              (n =
                n === `form` || n === `button` || pp(e.type, e.memoizedProps))),
            (n = !n)),
          n && P && L(e),
          pa(e),
          t === 13)
        ) {
          if (
            ((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)
          )
            throw Error(i(317));
          P = dm(e);
        } else if (t === 31) {
          if (
            ((e = e.memoizedState), (e = e === null ? null : e.dehydrated), !e)
          )
            throw Error(i(317));
          P = dm(e);
        } else
          t === 27
            ? ((t = P), Sp(e.type) ? ((e = um), (um = null), (P = e)) : (P = t))
            : (P = la ? lm(e.stateNode.nextSibling) : null);
        return !0;
      }
      function R() {
        ((P = la = null), (F = !1));
      }
      function ha() {
        var e = ua;
        return (
          e !== null &&
            (fd === null ? (fd = e) : fd.push.apply(fd, e), (ua = null)),
          e
        );
      }
      function ga(e) {
        ua === null ? (ua = [e]) : ua.push(e);
      }
      var _a = Ee(null),
        va = null,
        ya = null;
      function z(e, t, n) {
        (A(_a, t._currentValue), (t._currentValue = n));
      }
      function ba(e) {
        ((e._currentValue = _a.current), De(_a));
      }
      function xa(e, t, n) {
        for (; e !== null;) {
          var r = e.alternate;
          if (
            ((e.childLanes & t) === t
              ? r !== null && (r.childLanes & t) !== t && (r.childLanes |= t)
              : ((e.childLanes |= t), r !== null && (r.childLanes |= t)),
            e === n)
          )
            break;
          e = e.return;
        }
      }
      function Sa(e, t, n, r) {
        var a = e.child;
        for (a !== null && (a.return = e); a !== null;) {
          var o = a.dependencies;
          if (o !== null) {
            var s = a.child;
            o = o.firstContext;
            a: for (; o !== null;) {
              var c = o;
              o = a;
              for (var l = 0; l < t.length; l++)
                if (c.context === t[l]) {
                  ((o.lanes |= n),
                    (c = o.alternate),
                    c !== null && (c.lanes |= n),
                    xa(o.return, n, e),
                    r || (s = null));
                  break a;
                }
              o = c.next;
            }
          } else if (a.tag === 18) {
            if (((s = a.return), s === null)) throw Error(i(341));
            ((s.lanes |= n),
              (o = s.alternate),
              o !== null && (o.lanes |= n),
              xa(s, n, e),
              (s = null));
          } else
            a.tag === 13 &&
            a.memoizedState !== null &&
            a.memoizedState.dehydrated === null
              ? ((a.lanes |= n),
                (s = a.alternate),
                s !== null && (s.lanes |= n),
                xa(a.return, n, e),
                (s = a.child),
                (s = s === null ? null : s.sibling))
              : (s = a.child);
          if (s !== null) s.return = a;
          else
            for (s = a; s !== null;) {
              if (s === e) {
                s = null;
                break;
              }
              if (((a = s.sibling), a !== null)) {
                ((a.return = s.return), (s = a));
                break;
              }
              s = s.return;
            }
          a = s;
        }
      }
      function Ca(e, t, n, r) {
        e = null;
        for (var a = t, o = !1; a !== null;) {
          if (!o) {
            if (a.flags & 524288) o = !0;
            else if (a.flags & 262144) break;
          }
          if (a.tag === 10) {
            var s = a.alternate;
            if (s === null) throw Error(i(387));
            if (((s = s.memoizedProps), s !== null)) {
              var c = a.type;
              qr(a.pendingProps.value, s.value) ||
                (e === null ? (e = [c]) : e.push(c));
            }
          } else if (a === je.current) {
            if (((s = a.alternate), s === null)) throw Error(i(387));
            s.memoizedState.memoizedState !== a.memoizedState.memoizedState &&
              (e === null ? (e = [sh]) : e.push(sh));
          }
          a = a.return;
        }
        return (e !== null && Sa(t, e, n, r), (t.flags |= 262144), e !== null);
      }
      function wa(e) {
        for (e = e.firstContext; e !== null;) {
          if (!qr(e.context._currentValue, e.memoizedValue)) return !0;
          e = e.next;
        }
        return !1;
      }
      function Ta(e) {
        ((va = e),
          (ya = null),
          (e = e.dependencies),
          e !== null && (e.firstContext = null));
      }
      function Ea(e) {
        return Oa(va, e);
      }
      function Da(e, t) {
        return (va === null && Ta(e), Oa(e, t));
      }
      function Oa(e, t) {
        var n = t._currentValue;
        if (((t = { context: t, memoizedValue: n, next: null }), ya === null)) {
          if (e === null) throw Error(i(308));
          ((ya = t),
            (e.dependencies = { lanes: 0, firstContext: t }),
            (e.flags |= 524288));
        } else ya = ya.next = t;
        return n;
      }
      var ka =
          typeof AbortController < `u`
            ? AbortController
            : function () {
                var e = [],
                  t = (this.signal = {
                    aborted: !1,
                    addEventListener: function (t, n) {
                      e.push(n);
                    },
                  });
                this.abort = function () {
                  ((t.aborted = !0),
                    e.forEach(function (e) {
                      return e();
                    }));
                };
              },
        B = t.unstable_scheduleCallback,
        Aa = t.unstable_NormalPriority,
        ja = {
          $$typeof: se,
          Consumer: null,
          Provider: null,
          _currentValue: null,
          _currentValue2: null,
          _threadCount: 0,
        };
      function Ma() {
        return { controller: new ka(), data: new Map(), refCount: 0 };
      }
      function Na(e) {
        (e.refCount--,
          e.refCount === 0 &&
            B(Aa, function () {
              e.controller.abort();
            }));
      }
      function Pa(e, t) {
        if (e.pendingLanes & 4194048) {
          var n = e.transitionTypes;
          for (
            n === null && (n = e.transitionTypes = []), e = 0;
            e < t.length;
            e++
          ) {
            var r = t[e];
            n.indexOf(r) === -1 && n.push(r);
          }
        }
      }
      var Fa = null;
      function Ia(e) {
        var t = e.transitionTypes;
        return ((e.transitionTypes = null), t);
      }
      var La = null,
        Ra = 0,
        za = 0,
        Ba = null;
      function Va(e, t) {
        if (La === null) {
          var n = (La = []);
          ((Ra = 0),
            (za = Pf()),
            (Ba = {
              status: `pending`,
              value: void 0,
              then: function (e) {
                n.push(e);
              },
            }));
        }
        return (Ra++, t.then(Ha, Ha), t);
      }
      function Ha() {
        if (--Ra === 0 && ((Fa = null), La !== null)) {
          Ba !== null && (Ba.status = `fulfilled`);
          var e = La;
          ((La = null), (za = 0), (Ba = null));
          for (var t = 0; t < e.length; t++) (0, e[t])();
        }
      }
      function Ua(e, t) {
        var n = [],
          r = {
            status: `pending`,
            value: null,
            reason: null,
            then: function (e) {
              n.push(e);
            },
          };
        return (
          e.then(
            function () {
              ((r.status = `fulfilled`), (r.value = t));
              for (var e = 0; e < n.length; e++) (0, n[e])(t);
            },
            function (e) {
              for (
                r.status = `rejected`, r.reason = e, e = 0;
                e < n.length;
                e++
              )
                (0, n[e])(void 0);
            },
          ),
          r
        );
      }
      var Wa = O.S;
      O.S = function (e, t) {
        if (
          ((hd = Je()),
          typeof t == `object` && t && typeof t.then == `function` && Va(e, t),
          Fa !== null)
        )
          for (var n = bf; n !== null;) (Pa(n, Fa), (n = n.next));
        if (((n = e.types), n !== null)) {
          for (var r = bf; r !== null;) (Pa(r, n), (r = r.next));
          if (za !== 0) {
            ((r = Fa), r === null && (r = Fa = []));
            for (var i = 0; i < n.length; i++) {
              var a = n[i];
              r.indexOf(a) === -1 && r.push(a);
            }
          }
        }
        Wa !== null && Wa(e, t);
      };
      var Ga = Ee(null);
      function Ka() {
        var e = Ga.current;
        return e === null ? q.pooledCache : e;
      }
      function qa(e, t) {
        t === null ? A(Ga, Ga.current) : A(Ga, t.pool);
      }
      function V() {
        var e = Ka();
        return e === null ? null : { parent: ja._currentValue, pool: e };
      }
      var Ja = Error(i(460)),
        Ya = Error(i(474)),
        Xa = Error(i(542)),
        Za = { then: function () {} };
      function Qa(e) {
        return ((e = e.status), e === `fulfilled` || e === `rejected`);
      }
      function $a(e, t, n) {
        switch (
          ((n = e[n]),
          n === void 0 ? e.push(t) : n !== t && (t.then(En, En), (t = n)),
          t.status)
        ) {
          case `fulfilled`:
            return t.value;
          case `rejected`:
            throw (
              (e = t.reason),
              ro(e),
              e === void 0 && !(`reason` in t) ? Error(i(600)) : e
            );
          default:
            if (typeof t.status == `string`) t.then(En, En);
            else {
              if (((e = q), e !== null && 100 < e.shellSuspendCounter))
                throw Error(i(482));
              ((e = t),
                (e.status = `pending`),
                e.then(
                  function (e) {
                    if (t.status === `pending`) {
                      var n = t;
                      ((n.status = `fulfilled`), (n.value = e));
                    }
                  },
                  function (e) {
                    if (t.status === `pending`) {
                      var n = t;
                      ((n.status = `rejected`), (n.reason = e));
                    }
                  },
                ));
            }
            switch (t.status) {
              case `fulfilled`:
                return t.value;
              case `rejected`:
                throw ((e = t.reason), ro(e), e);
            }
            throw ((to = t), Ja);
        }
      }
      function eo(e) {
        try {
          var t = e._init;
          return t(e._payload);
        } catch (e) {
          throw typeof e == `object` && e && typeof e.then == `function`
            ? ((to = e), Ja)
            : e;
        }
      }
      var to = null;
      function no() {
        if (to === null) throw Error(i(459));
        var e = to;
        return ((to = null), e);
      }
      function ro(e) {
        if (e === Ja || e === Xa) throw Error(i(483));
      }
      var io = null,
        ao = 0;
      function oo(e) {
        var t = ao;
        return ((ao += 1), io === null && (io = []), $a(io, e, t));
      }
      function so(e, t) {
        ((t = t.props.ref), (e.ref = t === void 0 ? null : t));
      }
      function co(e, t) {
        throw t.$$typeof === ee
          ? Error(i(525))
          : ((e = Object.prototype.toString.call(t)),
            Error(
              i(
                31,
                e === `[object Object]`
                  ? `object with keys {` + Object.keys(t).join(`, `) + `}`
                  : e,
              ),
            ));
      }
      function lo(e) {
        function t(t, n) {
          if (e) {
            var r = t.deletions;
            r === null ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; r !== null;) (t(n, r), (r = r.sibling));
          return null;
        }
        function r(e) {
          for (var t = new Map(); e !== null;)
            (e.key === null ? t.set(e.index, e) : t.set(e.key, e),
              (e = e.sibling));
          return t;
        }
        function a(e, t) {
          return ((e = Bi(e, t)), (e.index = 0), (e.sibling = null), e);
        }
        function o(t, n, r) {
          return (
            (t.index = r),
            e
              ? ((r = t.alternate),
                r === null
                  ? ((t.flags |= 134217730), n)
                  : ((r = r.index), r < n ? ((t.flags |= 2), n) : r))
              : ((t.flags |= 1048576), n)
          );
        }
        function s(t) {
          return (e && t.alternate === null && (t.flags |= 134217730), t);
        }
        function c(e, t, n, r) {
          return t === null || t.tag !== 6
            ? ((t = Wi(n, e.mode, r)), (t.return = e), t)
            : ((t = a(t, n)), (t.return = e), t);
        }
        function l(e, t, n, r) {
          var i = n.type;
          return i === re
            ? ((e = d(e, t, n.props.children, r, n.key)), so(e, n), e)
            : t !== null &&
                (t.elementType === i ||
                  (typeof i == `object` &&
                    i &&
                    i.$$typeof === fe &&
                    eo(i) === t.type))
              ? ((t = a(t, n.props)), so(t, n), (t.return = e), t)
              : ((t = Hi(n.type, n.key, n.props, null, e.mode, r)),
                so(t, n),
                (t.return = e),
                t);
        }
        function u(e, t, n, r) {
          return t === null ||
            t.tag !== 4 ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? ((t = Ki(n, e.mode, r)), (t.return = e), t)
            : ((t = a(t, n.children || [])), (t.return = e), t);
        }
        function d(e, t, n, r, i) {
          return t === null || t.tag !== 7
            ? ((t = Ui(n, e.mode, r, i)), (t.return = e), t)
            : ((t = a(t, n)), (t.return = e), t);
        }
        function f(e, t, n) {
          if (
            (typeof t == `string` && t !== ``) ||
            typeof t == `number` ||
            typeof t == `bigint`
          )
            return ((t = Wi(`` + t, e.mode, n)), (t.return = e), t);
          if (typeof t == `object` && t) {
            switch (t.$$typeof) {
              case te:
                return (
                  (n = Hi(t.type, t.key, t.props, null, e.mode, n)),
                  so(n, t),
                  (n.return = e),
                  n
                );
              case ne:
                return ((t = Ki(t, e.mode, n)), (t.return = e), t);
              case fe:
                return ((t = eo(t)), f(e, t, n));
            }
            if (Se(t) || ye(t))
              return ((t = Ui(t, e.mode, n, null)), (t.return = e), t);
            if (typeof t.then == `function`) return f(e, oo(t), n);
            if (t.$$typeof === se) return f(e, Da(e, t), n);
            co(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var i = t === null ? null : t.key;
          if (
            (typeof n == `string` && n !== ``) ||
            typeof n == `number` ||
            typeof n == `bigint`
          )
            return i === null ? c(e, t, `` + n, r) : null;
          if (typeof n == `object` && n) {
            switch (n.$$typeof) {
              case te:
                return n.key === i ? l(e, t, n, r) : null;
              case ne:
                return n.key === i ? u(e, t, n, r) : null;
              case fe:
                return ((n = eo(n)), p(e, t, n, r));
            }
            if (Se(n) || ye(n)) return i === null ? d(e, t, n, r, null) : null;
            if (typeof n.then == `function`) return p(e, t, oo(n), r);
            if (n.$$typeof === se) return p(e, t, Da(e, n), r);
            co(e, n);
          }
          return null;
        }
        function m(e, t, n, r, i) {
          if (
            (typeof r == `string` && r !== ``) ||
            typeof r == `number` ||
            typeof r == `bigint`
          )
            return ((e = e.get(n) || null), c(t, e, `` + r, i));
          if (typeof r == `object` && r) {
            switch (r.$$typeof) {
              case te:
                return (
                  (e = e.get(r.key === null ? n : r.key) || null),
                  l(t, e, r, i)
                );
              case ne:
                return (
                  (e = e.get(r.key === null ? n : r.key) || null),
                  u(t, e, r, i)
                );
              case fe:
                return ((r = eo(r)), m(e, t, n, r, i));
            }
            if (Se(r) || ye(r))
              return ((e = e.get(n) || null), d(t, e, r, i, null));
            if (typeof r.then == `function`) return m(e, t, n, oo(r), i);
            if (r.$$typeof === se) return m(e, t, n, Da(t, r), i);
            co(t, r);
          }
          return null;
        }
        function h(i, a, s, c) {
          for (
            var l = null, u = null, d = a, h = (a = 0), g = null;
            d !== null && h < s.length;
            h++
          ) {
            d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
            var _ = p(i, d, s[h], c);
            if (_ === null) {
              d === null && (d = g);
              break;
            }
            (e && d && _.alternate === null && t(i, d),
              (a = o(_, a, h)),
              u === null ? (l = _) : (u.sibling = _),
              (u = _),
              (d = g));
          }
          if (h === s.length) return (n(i, d), F && ia(i, h), l);
          if (d === null) {
            for (; h < s.length; h++)
              ((d = f(i, s[h], c)),
                d !== null &&
                  ((a = o(d, a, h)),
                  u === null ? (l = d) : (u.sibling = d),
                  (u = d)));
            return (F && ia(i, h), l);
          }
          for (d = r(d); h < s.length; h++)
            ((g = m(d, i, h, s[h], c)),
              g !== null &&
                (e &&
                  ((_ = g.alternate),
                  _ !== null && d.delete(_.key === null ? h : _.key)),
                (a = o(g, a, h)),
                u === null ? (l = g) : (u.sibling = g),
                (u = g)));
          return (
            e &&
              d.forEach(function (e) {
                return t(i, e);
              }),
            F && ia(i, h),
            l
          );
        }
        function g(a, s, c, l) {
          if (c == null) throw Error(i(151));
          for (
            var u = null, d = null, h = s, g = (s = 0), _ = null, v = c.next();
            h !== null && !v.done;
            g++, v = c.next()
          ) {
            h.index > g ? ((_ = h), (h = null)) : (_ = h.sibling);
            var y = p(a, h, v.value, l);
            if (y === null) {
              h === null && (h = _);
              break;
            }
            (e && h && y.alternate === null && t(a, h),
              (s = o(y, s, g)),
              d === null ? (u = y) : (d.sibling = y),
              (d = y),
              (h = _));
          }
          if (v.done) return (n(a, h), F && ia(a, g), u);
          if (h === null) {
            for (; !v.done; g++, v = c.next())
              ((v = f(a, v.value, l)),
                v !== null &&
                  ((s = o(v, s, g)),
                  d === null ? (u = v) : (d.sibling = v),
                  (d = v)));
            return (F && ia(a, g), u);
          }
          for (h = r(h); !v.done; g++, v = c.next())
            ((v = m(h, a, g, v.value, l)),
              v !== null &&
                (e &&
                  ((_ = v.alternate),
                  _ !== null && h.delete(_.key === null ? g : _.key)),
                (s = o(v, s, g)),
                d === null ? (u = v) : (d.sibling = v),
                (d = v)));
          return (
            e &&
              h.forEach(function (e) {
                return t(a, e);
              }),
            F && ia(a, g),
            u
          );
        }
        function _(e, r, o, c) {
          if (
            (typeof o == `object` &&
              o &&
              o.type === re &&
              o.key === null &&
              o.props.ref === void 0 &&
              (o = o.props.children),
            typeof o == `object` && o)
          ) {
            switch (o.$$typeof) {
              case te:
                a: {
                  for (var l = o.key; r !== null;) {
                    if (r.key === l) {
                      if (((l = o.type), l === re)) {
                        if (r.tag === 7) {
                          (n(e, r.sibling),
                            (c = a(r, o.props.children)),
                            so(c, o),
                            (c.return = e),
                            (e = c));
                          break a;
                        }
                      } else if (
                        r.elementType === l ||
                        (typeof l == `object` &&
                          l &&
                          l.$$typeof === fe &&
                          eo(l) === r.type)
                      ) {
                        (n(e, r.sibling),
                          (c = a(r, o.props)),
                          so(c, o),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                      n(e, r);
                      break;
                    }
                    (t(e, r), (r = r.sibling));
                  }
                  o.type === re
                    ? ((c = Ui(o.props.children, e.mode, c, o.key)),
                      so(c, o),
                      (c.return = e),
                      (e = c))
                    : ((c = Hi(o.type, o.key, o.props, null, e.mode, c)),
                      so(c, o),
                      (c.return = e),
                      (e = c));
                }
                return s(e);
              case ne:
                a: {
                  for (l = o.key; r !== null;) {
                    if (r.key === l) {
                      if (
                        r.tag === 4 &&
                        r.stateNode.containerInfo === o.containerInfo &&
                        r.stateNode.implementation === o.implementation
                      ) {
                        (n(e, r.sibling),
                          (c = a(r, o.children || [])),
                          (c.return = e),
                          (e = c));
                        break a;
                      }
                      n(e, r);
                      break;
                    }
                    (t(e, r), (r = r.sibling));
                  }
                  ((c = Ki(o, e.mode, c)), (c.return = e), (e = c));
                }
                return s(e);
              case fe:
                return ((o = eo(o)), _(e, r, o, c));
            }
            if (Se(o)) return h(e, r, o, c);
            if (ye(o)) {
              if (((l = ye(o)), typeof l != `function`)) throw Error(i(150));
              return ((o = l.call(o)), g(e, r, o, c));
            }
            if (typeof o.then == `function`) return _(e, r, oo(o), c);
            if (o.$$typeof === se) return _(e, r, Da(e, o), c);
            co(e, o);
          }
          return (typeof o == `string` && o !== ``) ||
            typeof o == `number` ||
            typeof o == `bigint`
            ? ((o = `` + o),
              r !== null && r.tag === 6
                ? (n(e, r.sibling), (c = a(r, o)), (c.return = e), (e = c))
                : (n(e, r), (c = Wi(o, e.mode, c)), (c.return = e), (e = c)),
              s(e))
            : n(e, r);
        }
        return function (e, t, n, r) {
          try {
            ao = 0;
            var i = _(e, t, n, r);
            return ((io = null), i);
          } catch (t) {
            if (t === Ja || t === Xa) throw t;
            var a = Ri(29, t, null, e.mode);
            return ((a.lanes = r), (a.return = e), a);
          }
        };
      }
      var uo = lo(!0),
        fo = lo(!1),
        po = !1;
      function mo(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null, lanes: 0, hiddenCallbacks: null },
          callbacks: null,
        };
      }
      function ho(e, t) {
        ((e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              callbacks: null,
            }));
      }
      function go(e) {
        return { lane: e, tag: 0, payload: null, callback: null, next: null };
      }
      function _o(e, t, n) {
        var r = e.updateQueue;
        if (r === null) return null;
        if (((r = r.shared), K & 2)) {
          var i = r.pending;
          return (
            i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (r.pending = t),
            (t = Fi(e)),
            Pi(e, null, n),
            t
          );
        }
        return (ji(e, r, t, n), Fi(e));
      }
      function vo(e, t, n) {
        if (
          ((t = t.updateQueue), t !== null && ((t = t.shared), n & 4194048))
        ) {
          var r = t.lanes;
          ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ct(e, n));
        }
      }
      function yo(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (r !== null && ((r = r.updateQueue), n === r)) {
          var i = null,
            a = null;
          if (((n = n.firstBaseUpdate), n !== null)) {
            do {
              var o = {
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: null,
                next: null,
              };
              (a === null ? (i = a = o) : (a = a.next = o), (n = n.next));
            } while (n !== null);
            a === null ? (i = a = t) : (a = a.next = t);
          } else i = a = t;
          ((n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: a,
            shared: r.shared,
            callbacks: r.callbacks,
          }),
            (e.updateQueue = n));
        } else
          ((e = n.lastBaseUpdate),
            e === null ? (n.firstBaseUpdate = t) : (e.next = t),
            (n.lastBaseUpdate = t));
      }
      var bo = !1;
      function xo() {
        if (bo) {
          var e = Ba;
          if (e !== null) throw e;
        }
      }
      function So(e, t, n, r) {
        bo = !1;
        var i = e.updateQueue;
        po = !1;
        var a = i.firstBaseUpdate,
          o = i.lastBaseUpdate,
          s = i.shared.pending;
        if (s !== null) {
          i.shared.pending = null;
          var c = s,
            l = c.next;
          ((c.next = null), o === null ? (a = l) : (o.next = l), (o = c));
          var u = e.alternate;
          u !== null &&
            ((u = u.updateQueue),
            (s = u.lastBaseUpdate),
            s !== o &&
              (s === null ? (u.firstBaseUpdate = l) : (s.next = l),
              (u.lastBaseUpdate = c)));
        }
        if (a !== null) {
          var d = i.baseState;
          ((o = 0), (u = l = c = null), (s = a));
          do {
            var f = s.lane & -536870913,
              p = f !== s.lane;
            if (p ? (Y & f) === f : (r & f) === f) {
              (f !== 0 && f === za && (bo = !0),
                u !== null &&
                  (u = u.next =
                    {
                      lane: 0,
                      tag: s.tag,
                      payload: s.payload,
                      callback: null,
                      next: null,
                    }));
              a: {
                var m = e,
                  h = s;
                f = t;
                var g = n;
                switch (h.tag) {
                  case 1:
                    if (((m = h.payload), typeof m == `function`)) {
                      d = m.call(g, d, f);
                      break a;
                    }
                    d = m;
                    break a;
                  case 3:
                    m.flags = (m.flags & -65537) | 128;
                  case 0:
                    if (
                      ((m = h.payload),
                      (f = typeof m == `function` ? m.call(g, d, f) : m),
                      f == null)
                    )
                      break a;
                    d = D({}, d, f);
                    break a;
                  case 2:
                    po = !0;
                }
              }
              ((f = s.callback),
                f !== null &&
                  ((e.flags |= 64),
                  p && (e.flags |= 8192),
                  (p = i.callbacks),
                  p === null ? (i.callbacks = [f]) : p.push(f)));
            } else
              ((p = {
                lane: f,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              }),
                u === null ? ((l = u = p), (c = d)) : (u = u.next = p),
                (o |= f));
            if (((s = s.next), s === null)) {
              if (((s = i.shared.pending), s === null)) break;
              ((p = s),
                (s = p.next),
                (p.next = null),
                (i.lastBaseUpdate = p),
                (i.shared.pending = null));
            }
          } while (1);
          (u === null && (c = d),
            (i.baseState = c),
            (i.firstBaseUpdate = l),
            (i.lastBaseUpdate = u),
            a === null && (i.shared.lanes = 0),
            (od |= o),
            (e.lanes = o),
            (e.memoizedState = d));
        }
      }
      function Co(e, t) {
        if (typeof e != `function`) throw Error(i(191, e));
        e.call(t);
      }
      function wo(e, t) {
        var n = e.callbacks;
        if (n !== null)
          for (e.callbacks = null, e = 0; e < n.length; e++) Co(n[e], t);
      }
      var To = Ee(null),
        Eo = Ee(0);
      function Do(e, t) {
        ((e = id), A(Eo, e), A(To, t), (id = e | t.baseLanes));
      }
      function Oo() {
        (A(Eo, id), A(To, To.current));
      }
      function ko() {
        ((id = Eo.current), De(To), De(Eo));
      }
      var Ao = Ee(null),
        jo = null;
      function Mo(e) {
        var t = e.alternate;
        (A(Lo, Lo.current & 1),
          A(Ao, e),
          jo === null &&
            (t === null || To.current !== null || t.memoizedState !== null) &&
            (jo = e));
      }
      function No(e) {
        (A(Lo, Lo.current), A(Ao, e), jo === null && (jo = e));
      }
      function Po(e) {
        e.tag === 22
          ? (A(Lo, Lo.current), A(Ao, e), jo === null && (jo = e))
          : Fo();
      }
      function Fo() {
        (A(Lo, Lo.current), A(Ao, Ao.current));
      }
      function Io(e) {
        (De(Ao), jo === e && (jo = null), De(Lo));
      }
      var Lo = Ee(0);
      function Ro(e, t) {
        (A(Ao, Ao.current), A(Lo, t));
      }
      function zo(e) {
        (De(Lo), De(Ao), jo === e && (jo = null));
      }
      function Bo(e) {
        for (var t = e; t !== null;) {
          if (t.tag === 13) {
            var n = t.memoizedState;
            if (
              n !== null &&
              ((n = n.dehydrated), n === null || om(n) || sm(n))
            )
              return t;
          } else if (
            t.tag === 19 &&
            t.memoizedProps.revealOrder !== `independent`
          ) {
            if (t.flags & 128) return t;
          } else if (t.child !== null) {
            ((t.child.return = t), (t = t.child));
            continue;
          }
          if (t === e) break;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
          }
          ((t.sibling.return = t.return), (t = t.sibling));
        }
        return null;
      }
      var Vo = 0,
        H = null,
        U = null,
        Ho = null,
        Uo = !1,
        Wo = !1,
        Go = !1,
        Ko = 0,
        qo = 0,
        Jo = null,
        Yo = 0;
      function Xo() {
        throw Error(i(321));
      }
      function Zo(e, t) {
        if (t === null) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!qr(e[n], t[n])) return !1;
        return !0;
      }
      function Qo(e, t, n, r, i, a) {
        return (
          (Vo = a),
          (H = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (O.H = e === null || e.memoizedState === null ? hc : gc),
          (Go = !1),
          (a = n(r, i)),
          (Go = !1),
          Wo && (a = es(t, n, r, i)),
          $o(e),
          a
        );
      }
      function $o(e) {
        O.H = mc;
        var t = U !== null && U.next !== null;
        if (
          ((Vo = 0), (Ho = U = H = null), (Uo = !1), (qo = 0), (Jo = null), t)
        )
          throw Error(i(300));
        e === null ||
          Nc ||
          ((e = e.dependencies), e !== null && wa(e) && (Nc = !0));
      }
      function es(e, t, n, r) {
        H = e;
        var a = 0;
        do {
          if ((Wo && (Jo = null), (qo = 0), (Wo = !1), 25 <= a))
            throw Error(i(301));
          if (((a += 1), (Ho = U = null), e.updateQueue != null)) {
            var o = e.updateQueue;
            ((o.lastEffect = null),
              (o.events = null),
              (o.stores = null),
              o.memoCache != null && (o.memoCache.index = 0));
          }
          ((O.H = _c), (o = t(n, r)));
        } while (Wo);
        return o;
      }
      function ts() {
        var e = O.H,
          t = e.useState()[0];
        return (
          (t = typeof t.then == `function` ? cs(t) : t),
          (e = e.useState()[0]),
          (U === null ? null : U.memoizedState) !== e && (H.flags |= 1024),
          t
        );
      }
      function ns() {
        var e = Ko !== 0;
        return ((Ko = 0), e);
      }
      function rs(e, t, n) {
        ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~n));
      }
      function is(e) {
        if (Uo) {
          for (e = e.memoizedState; e !== null;) {
            var t = e.queue;
            (t !== null && (t.pending = null), (e = e.next));
          }
          Uo = !1;
        }
        ((Vo = 0), (Ho = U = H = null), (Wo = !1), (qo = Ko = 0), (Jo = null));
      }
      function as() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          Ho === null ? (H.memoizedState = Ho = e) : (Ho = Ho.next = e),
          Ho
        );
      }
      function os() {
        if (U === null) {
          var e = H.alternate;
          e = e === null ? null : e.memoizedState;
        } else e = U.next;
        var t = Ho === null ? H.memoizedState : Ho.next;
        if (t !== null) ((Ho = t), (U = e));
        else {
          if (e === null)
            throw H.alternate === null ? Error(i(467)) : Error(i(310));
          ((U = e),
            (e = {
              memoizedState: U.memoizedState,
              baseState: U.baseState,
              baseQueue: U.baseQueue,
              queue: U.queue,
              next: null,
            }),
            Ho === null ? (H.memoizedState = Ho = e) : (Ho = Ho.next = e));
        }
        return Ho;
      }
      function ss() {
        return {
          lastEffect: null,
          events: null,
          stores: null,
          memoCache: null,
        };
      }
      function cs(e) {
        var t = qo;
        return (
          (qo += 1),
          Jo === null && (Jo = []),
          (e = $a(Jo, e, t)),
          (t = H),
          (Ho === null ? t.memoizedState : Ho.next) === null &&
            ((t = t.alternate),
            (O.H = t === null || t.memoizedState === null ? hc : gc)),
          e
        );
      }
      function ls(e) {
        if (typeof e == `object` && e) {
          if (typeof e.then == `function`) return cs(e);
          if (e.$$typeof === _e) return;
          if (e.$$typeof === se) return Ea(e);
        }
        throw Error(i(438, String(e)));
      }
      function us(e) {
        var t = null,
          n = H.updateQueue;
        if ((n !== null && (t = n.memoCache), t == null)) {
          var r = H.alternate;
          r !== null &&
            ((r = r.updateQueue),
            r !== null &&
              ((r = r.memoCache),
              r != null &&
                (t = {
                  data: r.data.map(function (e) {
                    return e.slice();
                  }),
                  index: 0,
                })));
        }
        if (
          ((t ??= { data: [], index: 0 }),
          n === null && ((n = ss()), (H.updateQueue = n)),
          (n.memoCache = t),
          (n = t.data[t.index]),
          n === void 0)
        )
          for (n = t.data[t.index] = Array(e), r = 0; r < e; r++) n[r] = he;
        return (t.index++, n);
      }
      function ds(e, t) {
        return typeof t == `function` ? t(e) : t;
      }
      function fs(e) {
        return ps(os(), U, e);
      }
      function ps(e, t, n) {
        var r = e.queue;
        if (r === null) throw Error(i(311));
        r.lastRenderedReducer = n;
        var a = e.baseQueue,
          o = r.pending;
        if (o !== null) {
          if (a !== null) {
            var s = a.next;
            ((a.next = o.next), (o.next = s));
          }
          ((t.baseQueue = a = o), (r.pending = null));
        }
        if (((o = e.baseState), a === null)) e.memoizedState = o;
        else {
          t = a.next;
          var c = (s = null),
            l = null,
            u = t,
            d = !1;
          do {
            var f = u.lane & -536870913;
            if (f === u.lane ? (Vo & f) === f : (Y & f) === f) {
              var p = u.revertLane;
              if (p === 0)
                (l !== null &&
                  (l = l.next =
                    {
                      lane: 0,
                      revertLane: 0,
                      gesture: null,
                      action: u.action,
                      hasEagerState: u.hasEagerState,
                      eagerState: u.eagerState,
                      next: null,
                    }),
                  f === za && (d = !0));
              else if ((Vo & p) === p) {
                ((u = u.next), p === za && (d = !0));
                continue;
              } else
                ((f = {
                  lane: 0,
                  revertLane: u.revertLane,
                  gesture: null,
                  action: u.action,
                  hasEagerState: u.hasEagerState,
                  eagerState: u.eagerState,
                  next: null,
                }),
                  l === null ? ((c = l = f), (s = o)) : (l = l.next = f),
                  (H.lanes |= p),
                  (od |= p));
              ((f = u.action),
                Go && n(o, f),
                (o = u.hasEagerState ? u.eagerState : n(o, f)));
            } else
              ((p = {
                lane: f,
                revertLane: u.revertLane,
                gesture: u.gesture,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
                l === null ? ((c = l = p), (s = o)) : (l = l.next = p),
                (H.lanes |= f),
                (od |= f));
            u = u.next;
          } while (u !== null && u !== t);
          if (
            (l === null ? (s = o) : (l.next = c),
            !qr(o, e.memoizedState) && ((Nc = !0), d && ((n = Ba), n !== null)))
          )
            throw n;
          ((e.memoizedState = o),
            (e.baseState = s),
            (e.baseQueue = l),
            (r.lastRenderedState = o));
        }
        return (a === null && (r.lanes = 0), [e.memoizedState, r.dispatch]);
      }
      function ms(e) {
        var t = os(),
          n = t.queue;
        if (n === null) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          a = n.pending,
          o = t.memoizedState;
        if (a !== null) {
          n.pending = null;
          var s = (a = a.next);
          do ((o = e(o, s.action)), (s = s.next));
          while (s !== a);
          (qr(o, t.memoizedState) || (Nc = !0),
            (t.memoizedState = o),
            t.baseQueue === null && (t.baseState = o),
            (n.lastRenderedState = o));
        }
        return [o, r];
      }
      function hs(e, t, n) {
        var r = H,
          a = os(),
          o = F;
        if (o) {
          if (n === void 0) throw Error(i(407));
          n = n();
        } else n = t();
        var s = !qr((U || a).memoizedState, n);
        if (
          (s && ((a.memoizedState = n), (Nc = !0)),
          (a = a.queue),
          Bs(vs.bind(null, r, a, e), [e]),
          (e =
            a.getSnapshot !== t ||
            s ||
            (Ho !== null && !!(Ho.memoizedState.tag & 1))),
          Fs(e ? 9 : 8, { destroy: void 0 }, _s.bind(null, r, a, n, t), null),
          e)
        ) {
          if (((r.flags |= 2048), q === null)) throw Error(i(349));
          o || Vo & 127 || gs(r, t, n);
        }
        return n;
      }
      function gs(e, t, n) {
        ((e.flags |= 16384),
          (e = { getSnapshot: t, value: n }),
          (t = H.updateQueue),
          t === null
            ? ((t = ss()), (H.updateQueue = t), (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e)));
      }
      function _s(e, t, n, r) {
        ((t.value = n), (t.getSnapshot = r), ys(t) && bs(e));
      }
      function vs(e, t, n) {
        return n(function () {
          ys(t) && bs(e);
        });
      }
      function ys(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !qr(e, n);
        } catch {
          return !0;
        }
      }
      function bs(e) {
        var t = Ni(e, 2);
        t !== null && Pd(t, e, 2);
      }
      function xs(e) {
        var t = as();
        if (typeof e == `function`) {
          var n = e;
          if (((e = n()), Go)) {
            at(!0);
            try {
              n();
            } finally {
              at(!1);
            }
          }
        }
        return (
          (t.memoizedState = t.baseState = e),
          (t.queue = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ds,
            lastRenderedState: e,
          }),
          t
        );
      }
      function Ss(e, t, n, r) {
        return ((e.baseState = n), ps(e, U, typeof r == `function` ? r : ds));
      }
      function Cs(e, t, n, r, a) {
        if (dc(e)) throw Error(i(485));
        if (((e = t.action), e !== null)) {
          var o = {
            payload: a,
            action: e,
            next: null,
            isTransition: !0,
            status: `pending`,
            value: null,
            reason: null,
            listeners: [],
            then: function (e) {
              o.listeners.push(e);
            },
          };
          (O.T === null ? (o.isTransition = !1) : n(!0),
            r(o),
            (n = t.pending),
            n === null
              ? ((o.next = t.pending = o), ws(t, o))
              : ((o.next = n.next), (t.pending = n.next = o)));
        }
      }
      function ws(e, t) {
        var n = t.action,
          r = t.payload,
          i = e.state;
        if (t.isTransition) {
          var a = O.T,
            o = {};
          ((o.types = a === null ? null : a.types), (O.T = o));
          try {
            var s = n(i, r),
              c = O.S;
            (c !== null && c(o, s), Ts(e, t, s));
          } catch (n) {
            Ds(e, t, n);
          } finally {
            (a !== null && o.types !== null && (a.types = o.types), (O.T = a));
          }
        } else
          try {
            ((a = n(i, r)), Ts(e, t, a));
          } catch (n) {
            Ds(e, t, n);
          }
      }
      function Ts(e, t, n) {
        typeof n == `object` && n && typeof n.then == `function`
          ? n.then(
              function (n) {
                Es(e, t, n);
              },
              function (n) {
                return Ds(e, t, n);
              },
            )
          : Es(e, t, n);
      }
      function Es(e, t, n) {
        ((t.status = `fulfilled`),
          (t.value = n),
          Os(t),
          (e.state = n),
          (t = e.pending),
          t !== null &&
            ((n = t.next),
            n === t
              ? (e.pending = null)
              : ((n = n.next), (t.next = n), ws(e, n))));
      }
      function Ds(e, t, n) {
        var r = e.pending;
        if (((e.pending = null), r !== null)) {
          r = r.next;
          do ((t.status = `rejected`), (t.reason = n), Os(t), (t = t.next));
          while (t !== r);
        }
        e.action = null;
      }
      function Os(e) {
        e = e.listeners;
        for (var t = 0; t < e.length; t++) (0, e[t])();
      }
      function ks(e, t) {
        return t;
      }
      function As(e, t) {
        if (F) {
          var n = q.formState;
          if (n !== null) {
            a: {
              var r = H;
              if (F) {
                if (P) {
                  b: {
                    for (var i = P, a = da; i.nodeType !== 8;)
                      if (!a || ((i = lm(i.nextSibling)), i === null)) {
                        i = null;
                        break b;
                      }
                    ((a = i.data), (i = a === `F!` || a === `F` ? i : null));
                  }
                  if (i) {
                    ((P = lm(i.nextSibling)), (r = i.data === `F!`));
                    break a;
                  }
                }
                L(r);
              }
              r = !1;
            }
            r && (t = n[0]);
          }
        }
        return (
          (n = as()),
          (n.memoizedState = n.baseState = t),
          (r = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ks,
            lastRenderedState: t,
          }),
          (n.queue = r),
          (n = cc.bind(null, H, r)),
          (r.dispatch = n),
          (r = xs(!1)),
          (a = uc.bind(null, H, !1, r.queue)),
          (r = as()),
          (i = { state: t, dispatch: null, action: e, pending: null }),
          (r.queue = i),
          (n = Cs.bind(null, H, i, a, n)),
          (i.dispatch = n),
          (r.memoizedState = e),
          [t, n, !1]
        );
      }
      function js(e) {
        return Ms(os(), U, e);
      }
      function Ms(e, t, n) {
        if (
          ((t = ps(e, t, ks)[0]),
          (e = fs(ds)[0]),
          typeof t == `object` && t && typeof t.then == `function`)
        )
          try {
            var r = cs(t);
          } catch (e) {
            throw e === Ja ? Xa : e;
          }
        else r = t;
        t = os();
        var i = t.queue,
          a = i.dispatch;
        return (
          n !== t.memoizedState &&
            ((H.flags |= 2048),
            Fs(9, { destroy: void 0 }, Ns.bind(null, i, n), null)),
          [r, a, e]
        );
      }
      function Ns(e, t) {
        e.action = t;
      }
      function Ps(e) {
        var t = os(),
          n = U;
        if (n !== null) return Ms(t, n, e);
        (os(), (t = t.memoizedState), (n = os()));
        var r = n.queue.dispatch;
        return ((n.memoizedState = e), [t, r, !1]);
      }
      function Fs(e, t, n, r) {
        return (
          (e = { tag: e, create: n, deps: r, inst: t, next: null }),
          (t = H.updateQueue),
          t === null && ((t = ss()), (H.updateQueue = t)),
          (n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function Is() {
        return os().memoizedState;
      }
      function Ls(e, t, n, r) {
        var i = as();
        ((H.flags |= e),
          (i.memoizedState = Fs(
            1 | t,
            { destroy: void 0 },
            n,
            r === void 0 ? null : r,
          )));
      }
      function Rs(e, t, n, r) {
        var i = os();
        r = r === void 0 ? null : r;
        var a = i.memoizedState.inst;
        U !== null && r !== null && Zo(r, U.memoizedState.deps)
          ? (i.memoizedState = Fs(t, a, n, r))
          : ((H.flags |= e), (i.memoizedState = Fs(1 | t, a, n, r)));
      }
      function zs(e, t) {
        Ls(8390656, 8, e, t);
      }
      function Bs(e, t) {
        Rs(2048, 8, e, t);
      }
      function Vs(e) {
        H.flags |= 4;
        var t = H.updateQueue;
        if (t === null) ((t = ss()), (H.updateQueue = t), (t.events = [e]));
        else {
          var n = t.events;
          n === null ? (t.events = [e]) : n.push(e);
        }
      }
      function Hs(e) {
        var t = os().memoizedState;
        return (
          Vs({ ref: t, nextImpl: e }),
          function () {
            if (K & 2) throw Error(i(440));
            return t.impl.apply(void 0, arguments);
          }
        );
      }
      function Us(e, t) {
        return Rs(4, 2, e, t);
      }
      function Ws(e, t) {
        return Rs(4, 4, e, t);
      }
      function Gs(e, t) {
        if (typeof t == `function`) {
          e = e();
          var n = t(e);
          return function () {
            typeof n == `function` ? n() : t(null);
          };
        }
        if (t != null)
          return (
            (e = e()),
            (t.current = e),
            function () {
              t.current = null;
            }
          );
      }
      function Ks(e, t, n) {
        ((n = n == null ? null : n.concat([e])),
          Rs(4, 4, Gs.bind(null, t, e), n));
      }
      function qs() {}
      function Js(e, t) {
        var n = os();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        return t !== null && Zo(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Ys(e, t) {
        var n = os();
        t = t === void 0 ? null : t;
        var r = n.memoizedState;
        if (t !== null && Zo(t, r[1])) return r[0];
        if (((r = e()), Go)) {
          at(!0);
          try {
            e();
          } finally {
            at(!1);
          }
        }
        return ((n.memoizedState = [r, t]), r);
      }
      function Xs(e, t, n) {
        return n === void 0 || (Vo & 1073741824 && !(Y & 261930))
          ? (e.memoizedState = t)
          : ((e.memoizedState = n), (e = Md()), (H.lanes |= e), (od |= e), n);
      }
      function Zs(e, t, n, r) {
        return qr(n, t)
          ? n
          : To.current === null
            ? !(Vo & 106) || (Vo & 1073741824 && !(Y & 261930))
              ? ((Nc = !0), (e.memoizedState = n))
              : ((e = Md()), (H.lanes |= e), (od |= e), t)
            : ((e = Xs(e, n, r)), qr(e, t) || (Nc = !0), e);
      }
      function Qs(e, t, n, r, i) {
        var a = k.p;
        k.p = a !== 0 && 8 > a ? a : 8;
        var o = O.T,
          s = {};
        ((s.types = o === null ? null : o.types), (O.T = s), uc(e, !1, t, n));
        try {
          var c = i(),
            l = O.S;
          (l !== null && l(s, c),
            typeof c == `object` && c && typeof c.then == `function`
              ? lc(e, t, Ua(c, r), jd(e))
              : lc(e, t, r, jd(e)));
        } catch (n) {
          lc(
            e,
            t,
            { then: function () {}, status: `rejected`, reason: n },
            jd(),
          );
        } finally {
          ((k.p = a),
            o !== null && s.types !== null && (o.types = s.types),
            (O.T = o));
        }
      }
      function $s() {}
      function ec(e, t, n, r) {
        if (e.tag !== 5) throw Error(i(476));
        var a = tc(e).queue;
        Qs(
          e,
          a,
          t,
          Ce,
          n === null
            ? $s
            : function () {
                return (nc(e), n(r));
              },
        );
      }
      function tc(e) {
        var t = e.memoizedState;
        if (t !== null) return t;
        t = {
          memoizedState: Ce,
          baseState: Ce,
          baseQueue: null,
          queue: {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: ds,
            lastRenderedState: Ce,
          },
          next: null,
        };
        var n = {};
        return (
          (t.next = {
            memoizedState: n,
            baseState: n,
            baseQueue: null,
            queue: {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: ds,
              lastRenderedState: n,
            },
            next: null,
          }),
          (e.memoizedState = t),
          (e = e.alternate),
          e !== null && (e.memoizedState = t),
          t
        );
      }
      function nc(e) {
        var t = tc(e);
        (t.next === null && (t = e.alternate.memoizedState),
          lc(e, t.next.queue, {}, jd()));
      }
      function rc() {
        return Ea(sh);
      }
      function ic() {
        return os().memoizedState;
      }
      function ac() {
        return os().memoizedState;
      }
      function oc(e) {
        for (var t = e.return; t !== null;) {
          switch (t.tag) {
            case 24:
            case 3:
              var n = jd();
              e = go(n);
              var r = _o(t, e, n);
              (r !== null && (Pd(r, t, n), vo(r, t, n)),
                (t = { cache: Ma() }),
                (e.payload = t));
              return;
          }
          t = t.return;
        }
      }
      function sc(e, t, n) {
        var r = jd();
        ((n = {
          lane: r,
          revertLane: 0,
          gesture: null,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
          dc(e)
            ? fc(t, n)
            : ((n = Mi(e, t, n, r)), n !== null && (Pd(n, e, r), pc(n, t, r))));
      }
      function cc(e, t, n) {
        lc(e, t, n, jd());
      }
      function lc(e, t, n, r) {
        var i = {
          lane: r,
          revertLane: 0,
          gesture: null,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        };
        if (dc(e)) fc(t, i);
        else {
          var a = e.alternate;
          if (
            e.lanes === 0 &&
            (a === null || a.lanes === 0) &&
            ((a = t.lastRenderedReducer), a !== null)
          )
            try {
              var o = t.lastRenderedState,
                s = a(o, n);
              if (((i.hasEagerState = !0), (i.eagerState = s), qr(s, o)))
                return (ji(e, t, i, 0), q === null && Ai(), !1);
            } catch {}
          if (((n = Mi(e, t, i, r)), n !== null))
            return (Pd(n, e, r), pc(n, t, r), !0);
        }
        return !1;
      }
      function uc(e, t, n, r) {
        if (
          ((r = {
            lane: 2,
            revertLane: Pf(),
            gesture: null,
            action: r,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
          dc(e))
        ) {
          if (t) throw Error(i(479));
        } else ((t = Mi(e, n, r, 2)), t !== null && Pd(t, e, 2));
      }
      function dc(e) {
        var t = e.alternate;
        return e === H || (t !== null && t === H);
      }
      function fc(e, t) {
        Wo = Uo = !0;
        var n = e.pending;
        (n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
          (e.pending = t));
      }
      function pc(e, t, n) {
        if (n & 4194048) {
          var r = t.lanes;
          ((r &= e.pendingLanes), (n |= r), (t.lanes = n), Ct(e, n));
        }
      }
      var mc = {
          readContext: Ea,
          use: ls,
          useCallback: Xo,
          useContext: Xo,
          useEffect: Xo,
          useImperativeHandle: Xo,
          useLayoutEffect: Xo,
          useInsertionEffect: Xo,
          useMemo: Xo,
          useReducer: Xo,
          useRef: Xo,
          useState: Xo,
          useDebugValue: Xo,
          useDeferredValue: Xo,
          useTransition: Xo,
          useSyncExternalStore: Xo,
          useId: Xo,
          useHostTransitionStatus: Xo,
          useFormState: Xo,
          useActionState: Xo,
          useOptimistic: Xo,
          useMemoCache: Xo,
          useCacheRefresh: Xo,
          useEffectEvent: Xo,
        },
        hc = {
          readContext: Ea,
          use: ls,
          useCallback: function (e, t) {
            return ((as().memoizedState = [e, t === void 0 ? null : t]), e);
          },
          useContext: Ea,
          useEffect: zs,
          useImperativeHandle: function (e, t, n) {
            ((n = n == null ? null : n.concat([e])),
              Ls(4194308, 4, Gs.bind(null, t, e), n));
          },
          useLayoutEffect: function (e, t) {
            return Ls(4194308, 4, e, t);
          },
          useInsertionEffect: function (e, t) {
            Ls(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = as();
            t = t === void 0 ? null : t;
            var r = e();
            if (Go) {
              at(!0);
              try {
                e();
              } finally {
                at(!1);
              }
            }
            return ((n.memoizedState = [r, t]), r);
          },
          useReducer: function (e, t, n) {
            var r = as();
            if (n !== void 0) {
              var i = n(t);
              if (Go) {
                at(!0);
                try {
                  n(t);
                } finally {
                  at(!1);
                }
              }
            } else i = t;
            return (
              (r.memoizedState = r.baseState = i),
              (e = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: i,
              }),
              (r.queue = e),
              (e = e.dispatch = sc.bind(null, H, e)),
              [r.memoizedState, e]
            );
          },
          useRef: function (e) {
            var t = as();
            return ((e = { current: e }), (t.memoizedState = e));
          },
          useState: function (e) {
            e = xs(e);
            var t = e.queue,
              n = cc.bind(null, H, t);
            return ((t.dispatch = n), [e.memoizedState, n]);
          },
          useDebugValue: qs,
          useDeferredValue: function (e, t) {
            return Xs(as(), e, t);
          },
          useTransition: function () {
            var e = xs(!1);
            return (
              (e = Qs.bind(null, H, e.queue, !0, !1)),
              (as().memoizedState = e),
              [!1, e]
            );
          },
          useSyncExternalStore: function (e, t, n) {
            var r = H,
              a = as();
            if (F) {
              if (n === void 0) throw Error(i(407));
              n = n();
            } else {
              if (((n = t()), q === null)) throw Error(i(349));
              Y & 127 || gs(r, t, n);
            }
            a.memoizedState = n;
            var o = { value: n, getSnapshot: t };
            return (
              (a.queue = o),
              zs(vs.bind(null, r, o, e), [e]),
              (r.flags |= 2048),
              Fs(9, { destroy: void 0 }, _s.bind(null, r, o, n, t), null),
              n
            );
          },
          useId: function () {
            var e = as(),
              t = q.identifierPrefix;
            if (F) {
              var n = ra,
                r = na;
              ((n = (r & ~(1 << (32 - ot(r) - 1))).toString(32) + n),
                (t = `_` + t + `R_` + n),
                (n = Ko++),
                0 < n && (t += `H` + n.toString(32)),
                (t += `_`));
            } else ((n = Yo++), (t = `_` + t + `r_` + n.toString(32) + `_`));
            return (e.memoizedState = t);
          },
          useHostTransitionStatus: rc,
          useFormState: As,
          useActionState: As,
          useOptimistic: function (e) {
            var t = as();
            t.memoizedState = t.baseState = e;
            var n = {
              pending: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: null,
              lastRenderedState: null,
            };
            return (
              (t.queue = n),
              (t = uc.bind(null, H, !0, n)),
              (n.dispatch = t),
              [e, t]
            );
          },
          useMemoCache: us,
          useCacheRefresh: function () {
            return (as().memoizedState = oc.bind(null, H));
          },
          useEffectEvent: function (e) {
            var t = as(),
              n = { impl: e };
            return (
              (t.memoizedState = n),
              function () {
                if (K & 2) throw Error(i(440));
                return n.impl.apply(void 0, arguments);
              }
            );
          },
        },
        gc = {
          readContext: Ea,
          use: ls,
          useCallback: Js,
          useContext: Ea,
          useEffect: Bs,
          useImperativeHandle: Ks,
          useInsertionEffect: Us,
          useLayoutEffect: Ws,
          useMemo: Ys,
          useReducer: fs,
          useRef: Is,
          useState: function () {
            return fs(ds);
          },
          useDebugValue: qs,
          useDeferredValue: function (e, t) {
            return Zs(os(), U.memoizedState, e, t);
          },
          useTransition: function () {
            var e = fs(ds)[0],
              t = os().memoizedState;
            return [typeof e == `boolean` ? e : cs(e), t];
          },
          useSyncExternalStore: hs,
          useId: ic,
          useHostTransitionStatus: rc,
          useFormState: js,
          useActionState: js,
          useOptimistic: function (e, t) {
            return Ss(os(), U, e, t);
          },
          useMemoCache: us,
          useCacheRefresh: ac,
          useEffectEvent: Hs,
        },
        _c = {
          readContext: Ea,
          use: ls,
          useCallback: Js,
          useContext: Ea,
          useEffect: Bs,
          useImperativeHandle: Ks,
          useInsertionEffect: Us,
          useLayoutEffect: Ws,
          useMemo: Ys,
          useReducer: ms,
          useRef: Is,
          useState: function () {
            return ms(ds);
          },
          useDebugValue: qs,
          useDeferredValue: function (e, t) {
            var n = os();
            return U === null ? Xs(n, e, t) : Zs(n, U.memoizedState, e, t);
          },
          useTransition: function () {
            var e = ms(ds)[0],
              t = os().memoizedState;
            return [typeof e == `boolean` ? e : cs(e), t];
          },
          useSyncExternalStore: hs,
          useId: ic,
          useHostTransitionStatus: rc,
          useFormState: Ps,
          useActionState: Ps,
          useOptimistic: function (e, t) {
            var n = os();
            return U === null
              ? ((n.baseState = e), [e, n.queue.dispatch])
              : Ss(n, U, e, t);
          },
          useMemoCache: us,
          useCacheRefresh: ac,
          useEffectEvent: Hs,
        };
      function vc(e, t, n, r) {
        ((t = e.memoizedState),
          (n = n(r, t)),
          (n = n == null ? t : D({}, t, n)),
          (e.memoizedState = n),
          e.lanes === 0 && (e.updateQueue.baseState = n));
      }
      var yc = {
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = jd(),
            i = go(r);
          ((i.payload = t),
            n != null && (i.callback = n),
            (t = _o(e, i, r)),
            t !== null && (Pd(t, e, r), vo(t, e, r)));
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = jd(),
            i = go(r);
          ((i.tag = 1),
            (i.payload = t),
            n != null && (i.callback = n),
            (t = _o(e, i, r)),
            t !== null && (Pd(t, e, r), vo(t, e, r)));
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = jd(),
            r = go(n);
          ((r.tag = 2),
            t != null && (r.callback = t),
            (t = _o(e, r, n)),
            t !== null && (Pd(t, e, n), vo(t, e, n)));
        },
      };
      function bc(e, t, n, r, i, a, o) {
        return (
          (e = e.stateNode),
          typeof e.shouldComponentUpdate == `function`
            ? e.shouldComponentUpdate(r, a, o)
            : t.prototype && t.prototype.isPureReactComponent
              ? !Jr(n, r) || !Jr(i, a)
              : !0
        );
      }
      function xc(e, t, n, r) {
        ((e = t.state),
          typeof t.componentWillReceiveProps == `function` &&
            t.componentWillReceiveProps(n, r),
          typeof t.UNSAFE_componentWillReceiveProps == `function` &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && yc.enqueueReplaceState(t, t.state, null));
      }
      function Sc(e, t) {
        var n = t;
        if (`ref` in t)
          for (var r in ((n = {}), t)) r !== `ref` && (n[r] = t[r]);
        if ((e = e.defaultProps))
          for (var i in (n === t && (n = D({}, n)), e))
            n[i] === void 0 && (n[i] = e[i]);
        return n;
      }
      function Cc(e) {
        Ei(e);
      }
      function wc(e) {
        console.error(e);
      }
      function Tc(e) {
        Ei(e);
      }
      function Ec(e, t) {
        try {
          var n = e.onUncaughtError;
          n(t.value, { componentStack: t.stack });
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
      function Dc(e, t, n) {
        try {
          var r = e.onCaughtError;
          r(n.value, {
            componentStack: n.stack,
            errorBoundary: t.tag === 1 ? t.stateNode : null,
          });
        } catch (e) {
          setTimeout(function () {
            throw e;
          });
        }
      }
      function Oc(e, t, n) {
        return (
          (n = go(n)),
          (n.tag = 3),
          (n.payload = { element: null }),
          (n.callback = function () {
            Ec(e, t);
          }),
          n
        );
      }
      function kc(e) {
        return ((e = go(e)), (e.tag = 3), e);
      }
      function Ac(e, t, n, r) {
        var i = n.type.getDerivedStateFromError;
        if (typeof i == `function`) {
          var a = r.value;
          ((e.payload = function () {
            return i(a);
          }),
            (e.callback = function () {
              Dc(t, n, r);
            }));
        }
        var o = n.stateNode;
        o !== null &&
          typeof o.componentDidCatch == `function` &&
          (e.callback = function () {
            (Dc(t, n, r),
              typeof i != `function` &&
                (vd === null ? (vd = new Set([this])) : vd.add(this)));
            var e = r.stack;
            this.componentDidCatch(r.value, {
              componentStack: e === null ? `` : e,
            });
          });
      }
      function jc(e, t, n, r, a) {
        if (
          ((n.flags |= 32768),
          typeof r == `object` && r && typeof r.then == `function`)
        ) {
          if (
            ((t = n.alternate),
            t !== null && Ca(t, n, a, !0),
            (n = Ao.current),
            n !== null)
          ) {
            switch (n.tag) {
              case 31:
              case 13:
              case 19:
                return (
                  jo === null
                    ? Kd()
                    : n.alternate === null && ad === 0 && (ad = 3),
                  (n.flags &= -257),
                  (n.flags |= 65536),
                  (n.lanes = a),
                  r === Za
                    ? (n.flags |= 16384)
                    : ((t = n.updateQueue),
                      t === null ? (n.updateQueue = new Set([r])) : t.add(r),
                      mf(e, r, a)),
                  !1
                );
              case 22:
                return (
                  (n.flags |= 65536),
                  r === Za
                    ? (n.flags |= 16384)
                    : ((t = n.updateQueue),
                      t === null
                        ? ((t = {
                            transitions: null,
                            markerInstances: null,
                            retryQueue: new Set([r]),
                          }),
                          (n.updateQueue = t))
                        : ((n = t.retryQueue),
                          n === null
                            ? (t.retryQueue = new Set([r]))
                            : n.add(r)),
                      mf(e, r, a)),
                  !1
                );
            }
            throw Error(i(435, n.tag));
          }
          return (mf(e, r, a), Kd(), !1);
        }
        if (F)
          return (
            (t = Ao.current),
            t === null
              ? (r !== I && ((t = Error(i(423), { cause: r })), ga(Ji(t, n))),
                (e = e.current.alternate),
                (e.flags |= 65536),
                (a &= -a),
                (e.lanes |= a),
                (r = Ji(r, n)),
                (a = Oc(e.stateNode, r, a)),
                yo(e, a),
                ad !== 4 && (ad = 2))
              : (!(t.flags & 65536) && (t.flags |= 256),
                (t.flags |= 65536),
                (t.lanes = a),
                r !== I && ((e = Error(i(422), { cause: r })), ga(Ji(e, n)))),
            !1
          );
        var o = Error(i(520), { cause: r });
        if (
          ((o = Ji(o, n)),
          dd === null ? (dd = [o]) : dd.push(o),
          ad !== 4 && (ad = 2),
          t === null)
        )
          return !0;
        ((r = Ji(r, n)), (n = t));
        do {
          switch (n.tag) {
            case 3:
              return (
                (n.flags |= 65536),
                (e = a & -a),
                (n.lanes |= e),
                (e = Oc(n.stateNode, r, e)),
                yo(n, e),
                !1
              );
            case 1:
              if (
                ((t = n.type),
                (o = n.stateNode),
                !(n.flags & 128) &&
                  (typeof t.getDerivedStateFromError == `function` ||
                    (o !== null &&
                      typeof o.componentDidCatch == `function` &&
                      (vd === null || !vd.has(o)))))
              )
                return (
                  (n.flags |= 65536),
                  (a &= -a),
                  (n.lanes |= a),
                  (a = kc(a)),
                  Ac(a, e, n, r),
                  yo(n, a),
                  !1
                );
              break;
            case 22:
              if (n.memoizedState !== null) return ((n.flags |= 65536), !1);
          }
          n = n.return;
        } while (n !== null);
        return !1;
      }
      var Mc = Error(i(461)),
        Nc = !1;
      function Pc(e, t, n, r) {
        t.child = e === null ? fo(t, null, n, r) : uo(t, e.child, n, r);
      }
      function Fc(e, t, n, r, i) {
        n = n.render;
        var a = t.ref;
        if (`ref` in r) {
          var o = {};
          for (var s in r) s !== `ref` && (o[s] = r[s]);
        } else o = r;
        return (
          Ta(t),
          (r = Qo(e, t, n, o, a, i)),
          (s = ns()),
          e !== null && !Nc
            ? (rs(e, t, i), ll(e, t, i))
            : (F && s && oa(t), (t.flags |= 1), Pc(e, t, r, i), t.child)
        );
      }
      function Ic(e, t, n, r, i) {
        if (e === null) {
          var a = n.type;
          return typeof a == `function` &&
            !zi(a) &&
            a.defaultProps === void 0 &&
            n.compare === null
            ? ((t.tag = 15), (t.type = a), Lc(e, t, a, r, i))
            : ((e = Hi(n.type, null, r, t, t.mode, i)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e));
        }
        if (((a = e.child), !ul(e, i))) {
          var o = a.memoizedProps;
          if (
            ((n = n.compare),
            (n = n === null ? Jr : n),
            n(o, r) && e.ref === t.ref)
          )
            return ll(e, t, i);
        }
        return (
          (t.flags |= 1),
          (e = Bi(a, r)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e)
        );
      }
      function Lc(e, t, n, r, i) {
        if (e !== null) {
          var a = e.memoizedProps;
          if (Jr(a, r) && e.ref === t.ref) {
            if (((Nc = !1), (t.pendingProps = r = a), ul(e, i)))
              e.flags & 131072 && (Nc = !0);
            else return ((t.lanes = e.lanes), ll(e, t, i));
          }
        }
        return Gc(e, t, n, r, i);
      }
      function Rc(e, t, n, r) {
        var i = r.children,
          a = e === null ? null : e.memoizedState;
        if (
          (e === null &&
            t.stateNode === null &&
            (t.stateNode = {
              _visibility: 1,
              _pendingMarkers: null,
              _retryCache: null,
              _transitions: null,
            }),
          r.mode === `hidden`)
        ) {
          if (t.flags & 128) {
            if (((a = a === null ? n : a.baseLanes | n), e !== null)) {
              for (r = t.child = e.child, i = 0; r !== null;)
                ((i = i | r.lanes | r.childLanes), (r = r.sibling));
              r = i & ~a;
            } else ((r = 0), (t.child = null));
            return Bc(e, t, a, n, r);
          }
          if (n & 536870912)
            ((t.memoizedState = { baseLanes: 0, cachePool: null }),
              e !== null && qa(t, a === null ? null : a.cachePool),
              a === null ? Oo() : Do(t, a),
              Po(t));
          else
            return (
              (r = t.lanes = 536870912),
              Bc(e, t, a === null ? n : a.baseLanes | n, n, r)
            );
        } else
          a === null
            ? (e !== null && qa(t, null), Oo(), Fo())
            : (qa(t, a.cachePool), Do(t, a), Fo(), (t.memoizedState = null));
        return (Pc(e, t, i, n), t.child);
      }
      function zc(e, t) {
        return (
          (e !== null && e.tag === 22) ||
            t.stateNode !== null ||
            (t.stateNode = {
              _visibility: 1,
              _pendingMarkers: null,
              _retryCache: null,
              _transitions: null,
            }),
          t.sibling
        );
      }
      function Bc(e, t, n, r, i) {
        var a = Ka();
        return (
          (a = a === null ? null : { parent: ja._currentValue, pool: a }),
          (t.memoizedState = { baseLanes: n, cachePool: a }),
          e !== null && qa(t, null),
          Oo(),
          Po(t),
          e !== null && Ca(e, t, r, !0),
          (t.childLanes = i),
          null
        );
      }
      function Vc(e, t) {
        return (
          (t = el({ mode: t.mode, children: t.children }, e.mode)),
          (t.ref = e.ref),
          (e.child = t),
          (t.return = e),
          t
        );
      }
      function Hc(e, t, n) {
        return (
          uo(t, e.child, null, n),
          (e = Vc(t, t.pendingProps)),
          (e.flags |= 2),
          Io(t),
          (t.memoizedState = null),
          e
        );
      }
      function Uc(e, t, n) {
        var r = t.pendingProps,
          a = !!(t.flags & 128);
        if (((t.flags &= -129), e === null)) {
          if (F) {
            if (r.mode === `hidden`)
              return (
                (e = Vc(t, r)),
                (t.lanes = 536870912),
                (e.memoizedState = { baseLanes: 0, cachePool: null }),
                zc(null, e)
              );
            if (
              (No(t),
              (e = P)
                ? ((e = am(e, da)),
                  (e = e !== null && e.data === `&` ? e : null),
                  e !== null &&
                    ((t.memoizedState = {
                      dehydrated: e,
                      treeContext:
                        ta === null ? null : { id: na, overflow: ra },
                      retryLane: 536870912,
                      hydrationErrors: null,
                    }),
                    (n = Gi(e)),
                    (n.return = t),
                    (t.child = n),
                    (la = t),
                    (P = null)))
                : (e = null),
              e === null)
            )
              throw L(t);
            return ((t.lanes = 536870912), null);
          }
          return Vc(t, r);
        }
        var o = e.memoizedState;
        if (o !== null) {
          var s = o.dehydrated;
          if ((No(t), a)) {
            if (t.flags & 256) ((t.flags &= -257), (t = Hc(e, t, n)));
            else if (t.memoizedState !== null)
              ((t.child = e.child), (t.flags |= 128), (t = null));
            else throw Error(i(558));
          } else if (
            (Nc || Ca(e, t, n, !1), (a = (n & e.childLanes) !== 0), Nc || a)
          ) {
            if (To.current === null) {
              if (
                ((r = q),
                r !== null && ((s = wt(r, n)), s !== 0 && s !== o.retryLane))
              )
                throw ((o.retryLane = s), Ni(e, s), Pd(r, e, s), Mc);
              Kd();
            }
            t = Hc(e, t, n);
          } else
            ((e = o.treeContext),
              (P = lm(s.nextSibling)),
              (la = t),
              (F = !0),
              (ua = null),
              (da = !1),
              e !== null && ca(t, e),
              (t = Vc(t, r)),
              (t.flags |= 134221824));
          return t;
        }
        return (
          (e = Bi(e.child, { mode: r.mode, children: r.children })),
          (e.ref = t.ref),
          (t.child = e),
          (e.return = t),
          e
        );
      }
      function Wc(e, t) {
        var n = t.ref;
        if (n === null) e !== null && e.ref !== null && (t.flags |= 4194816);
        else {
          if (typeof n != `function` && typeof n != `object`)
            throw Error(i(284));
          (e === null || e.ref !== n) && (t.flags |= 4194816);
        }
      }
      function Gc(e, t, n, r, i) {
        return (
          Ta(t),
          (n = Qo(e, t, n, r, void 0, i)),
          (r = ns()),
          e !== null && !Nc
            ? (rs(e, t, i), ll(e, t, i))
            : (F && r && oa(t), (t.flags |= 1), Pc(e, t, n, i), t.child)
        );
      }
      function Kc(e, t, n, r, i, a) {
        return (
          Ta(t),
          (t.updateQueue = null),
          (n = es(t, r, n, i)),
          $o(e),
          (r = ns()),
          e !== null && !Nc
            ? (rs(e, t, a), ll(e, t, a))
            : (F && r && oa(t), (t.flags |= 1), Pc(e, t, n, a), t.child)
        );
      }
      function qc(e, t, n, r, i) {
        if ((Ta(t), t.stateNode === null)) {
          var a = Ii,
            o = n.contextType;
          (typeof o == `object` && o && (a = Ea(o)),
            (a = new n(r, a)),
            (t.memoizedState =
              a.state !== null && a.state !== void 0 ? a.state : null),
            (a.updater = yc),
            (t.stateNode = a),
            (a._reactInternals = t),
            (a = t.stateNode),
            (a.props = r),
            (a.state = t.memoizedState),
            (a.refs = {}),
            mo(t),
            (o = n.contextType),
            (a.context = typeof o == `object` && o ? Ea(o) : Ii),
            (a.state = t.memoizedState),
            (o = n.getDerivedStateFromProps),
            typeof o == `function` &&
              (vc(t, n, o, r), (a.state = t.memoizedState)),
            typeof n.getDerivedStateFromProps == `function` ||
              typeof a.getSnapshotBeforeUpdate == `function` ||
              (typeof a.UNSAFE_componentWillMount != `function` &&
                typeof a.componentWillMount != `function`) ||
              ((o = a.state),
              typeof a.componentWillMount == `function` &&
                a.componentWillMount(),
              typeof a.UNSAFE_componentWillMount == `function` &&
                a.UNSAFE_componentWillMount(),
              o !== a.state && yc.enqueueReplaceState(a, a.state, null),
              So(t, r, a, i),
              xo(),
              (a.state = t.memoizedState)),
            typeof a.componentDidMount == `function` && (t.flags |= 4194308),
            (r = !0));
        } else if (e === null) {
          a = t.stateNode;
          var s = t.memoizedProps,
            c = Sc(n, s);
          a.props = c;
          var l = a.context,
            u = n.contextType;
          ((o = Ii), typeof u == `object` && u && (o = Ea(u)));
          var d = n.getDerivedStateFromProps;
          ((u =
            typeof d == `function` ||
            typeof a.getSnapshotBeforeUpdate == `function`),
            (s = t.pendingProps !== s),
            u ||
              (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
                typeof a.componentWillReceiveProps != `function`) ||
              ((s || l !== o) && xc(t, a, r, o)),
            (po = !1));
          var f = t.memoizedState;
          ((a.state = f),
            So(t, r, a, i),
            xo(),
            (l = t.memoizedState),
            s || f !== l || po
              ? (typeof d == `function` &&
                  (vc(t, n, d, r), (l = t.memoizedState)),
                (c = po || bc(t, n, c, r, f, l, o))
                  ? (u ||
                      (typeof a.UNSAFE_componentWillMount != `function` &&
                        typeof a.componentWillMount != `function`) ||
                      (typeof a.componentWillMount == `function` &&
                        a.componentWillMount(),
                      typeof a.UNSAFE_componentWillMount == `function` &&
                        a.UNSAFE_componentWillMount()),
                    typeof a.componentDidMount == `function` &&
                      (t.flags |= 4194308))
                  : (typeof a.componentDidMount == `function` &&
                      (t.flags |= 4194308),
                    (t.memoizedProps = r),
                    (t.memoizedState = l)),
                (a.props = r),
                (a.state = l),
                (a.context = o),
                (r = c))
              : (typeof a.componentDidMount == `function` &&
                  (t.flags |= 4194308),
                (r = !1)));
        } else {
          ((a = t.stateNode),
            ho(e, t),
            (o = t.memoizedProps),
            (u = Sc(n, o)),
            (a.props = u),
            (d = t.pendingProps),
            (f = a.context),
            (l = n.contextType),
            (c = Ii),
            typeof l == `object` && l && (c = Ea(l)),
            (s = n.getDerivedStateFromProps),
            (l =
              typeof s == `function` ||
              typeof a.getSnapshotBeforeUpdate == `function`) ||
              (typeof a.UNSAFE_componentWillReceiveProps != `function` &&
                typeof a.componentWillReceiveProps != `function`) ||
              ((o !== d || f !== c) && xc(t, a, r, c)),
            (po = !1),
            (f = t.memoizedState),
            (a.state = f),
            So(t, r, a, i),
            xo());
          var p = t.memoizedState;
          o !== d ||
          f !== p ||
          po ||
          (e !== null && e.dependencies !== null && wa(e.dependencies))
            ? (typeof s == `function` &&
                (vc(t, n, s, r), (p = t.memoizedState)),
              (u =
                po ||
                bc(t, n, u, r, f, p, c) ||
                (e !== null && e.dependencies !== null && wa(e.dependencies)))
                ? (l ||
                    (typeof a.UNSAFE_componentWillUpdate != `function` &&
                      typeof a.componentWillUpdate != `function`) ||
                    (typeof a.componentWillUpdate == `function` &&
                      a.componentWillUpdate(r, p, c),
                    typeof a.UNSAFE_componentWillUpdate == `function` &&
                      a.UNSAFE_componentWillUpdate(r, p, c)),
                  typeof a.componentDidUpdate == `function` && (t.flags |= 4),
                  typeof a.getSnapshotBeforeUpdate == `function` &&
                    (t.flags |= 1024))
                : (typeof a.componentDidUpdate != `function` ||
                    (o === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 4),
                  typeof a.getSnapshotBeforeUpdate != `function` ||
                    (o === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 1024),
                  (t.memoizedProps = r),
                  (t.memoizedState = p)),
              (a.props = r),
              (a.state = p),
              (a.context = c),
              (r = u))
            : (typeof a.componentDidUpdate != `function` ||
                (o === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              typeof a.getSnapshotBeforeUpdate != `function` ||
                (o === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 1024),
              (r = !1));
        }
        return (
          (a = r),
          Wc(e, t),
          (r = !!(t.flags & 128)),
          a || r
            ? ((a = t.stateNode),
              (n =
                r && typeof n.getDerivedStateFromError != `function`
                  ? null
                  : a.render()),
              (t.flags |= 1),
              e !== null && r
                ? ((t.child = uo(t, e.child, null, i)),
                  (t.child = uo(t, null, n, i)))
                : Pc(e, t, n, i),
              (t.memoizedState = a.state),
              (e = t.child))
            : (e = ll(e, t, i)),
          e
        );
      }
      function Jc(e, t, n, r) {
        return (R(), (t.flags |= 256), Pc(e, t, n, r), t.child);
      }
      var Yc = {
        dehydrated: null,
        treeContext: null,
        retryLane: 0,
        hydrationErrors: null,
      };
      function Xc(e) {
        return { baseLanes: e, cachePool: V() };
      }
      function Zc(e, t, n) {
        return ((e = e === null ? 0 : e.childLanes & ~n), t && (e |= ld), e);
      }
      function Qc(e, t, n) {
        var r = t.pendingProps,
          i = !1,
          a = !!(t.flags & 128),
          o;
        if (
          ((o = a) ||
            (o =
              e !== null && e.memoizedState === null ? !1 : !!(Lo.current & 2)),
          o && ((i = !0), (t.flags &= -129)),
          (o = !!(t.flags & 32)),
          (t.flags &= -33),
          e === null)
        ) {
          if (F) {
            if (
              (i ? Mo(t) : Fo(),
              (e = P)
                ? ((e = am(e, da)),
                  (e = e !== null && e.data !== `&` ? e : null),
                  e !== null &&
                    ((t.memoizedState = {
                      dehydrated: e,
                      treeContext:
                        ta === null ? null : { id: na, overflow: ra },
                      retryLane: 536870912,
                      hydrationErrors: null,
                    }),
                    (n = Gi(e)),
                    (n.return = t),
                    (t.child = n),
                    (la = t),
                    (P = null)))
                : (e = null),
              e === null)
            )
              throw L(t);
            return ((t.lanes = sm(e) ? 32 : 536870912), null);
          }
          return (
            (a = r.children),
            (r = r.fallback),
            i
              ? (Fo(),
                (i = t.mode),
                (a = el({ mode: `hidden`, children: a }, i)),
                (r = Ui(r, i, n, null)),
                (a.return = t),
                (r.return = t),
                (a.sibling = r),
                (t.child = a),
                (r = t.child),
                (r.memoizedState = Xc(n)),
                (r.childLanes = Zc(e, o, n)),
                (t.memoizedState = Yc),
                zc(null, r))
              : (Mo(t), $c(t, a))
          );
        }
        var s = e.memoizedState;
        if (s !== null) {
          var c = s.dehydrated;
          if (c !== null) return nl(e, t, a, o, r, c, s, n);
        }
        return i
          ? (Fo(),
            (i = r.fallback),
            (a = t.mode),
            (s = e.child),
            (c = s.sibling),
            (r = Bi(s, { mode: `hidden`, children: r.children })),
            (r.subtreeFlags = s.subtreeFlags & 1206910976),
            c === null
              ? ((i = Ui(i, a, n, null)), (i.flags |= 2))
              : (i = Bi(c, i)),
            (i.return = t),
            (r.return = t),
            (r.sibling = i),
            (t.child = r),
            zc(null, r),
            (r = t.child),
            (i = e.child.memoizedState),
            i === null
              ? (i = Xc(n))
              : ((a = i.cachePool),
                a === null
                  ? (a = V())
                  : ((s = ja._currentValue),
                    (a = a.parent === s ? a : { parent: s, pool: s })),
                (i = { baseLanes: i.baseLanes | n, cachePool: a })),
            (r.memoizedState = i),
            (r.childLanes = Zc(e, o, n)),
            (t.memoizedState = Yc),
            zc(e.child, r))
          : (Mo(t),
            (n = e.child),
            (e = n.sibling),
            (n = Bi(n, { mode: `visible`, children: r.children })),
            (n.return = t),
            (n.sibling = null),
            e !== null &&
              ((o = t.deletions),
              o === null ? ((t.deletions = [e]), (t.flags |= 16)) : o.push(e)),
            (t.child = n),
            (t.memoizedState = null),
            n);
      }
      function $c(e, t) {
        return (
          (t = el({ mode: `visible`, children: t }, e.mode)),
          (t.return = e),
          (e.child = t)
        );
      }
      function el(e, t) {
        return ((e = Ri(22, e, null, t)), (e.lanes = 0), e);
      }
      function tl(e, t, n) {
        return (
          uo(t, e.child, null, n),
          (e = $c(t, t.pendingProps.children)),
          (e.flags |= 2),
          (t.memoizedState = null),
          e
        );
      }
      function nl(e, t, n, r, a, o, s, c) {
        if (n)
          return t.flags & 256
            ? (Mo(t), (t.flags &= -257), tl(e, t, c))
            : t.memoizedState === null
              ? (Fo(),
                (o = a.fallback),
                (s = t.mode),
                (a = el({ mode: `visible`, children: a.children }, s)),
                (o = Ui(o, s, c, null)),
                (o.flags |= 2),
                (a.return = t),
                (o.return = t),
                (a.sibling = o),
                (t.child = a),
                uo(t, e.child, null, c),
                (a = t.child),
                (a.memoizedState = Xc(c)),
                (a.childLanes = Zc(e, r, c)),
                (t.memoizedState = Yc),
                zc(null, a))
              : (Fo(), (t.child = e.child), (t.flags |= 128), null);
        if ((Mo(t), sm(o))) {
          if (((r = o.nextSibling && o.nextSibling.dataset), r)) var l = r.dgst;
          return (
            (r = l),
            r !== `` &&
              ((a = Error(i(419))),
              (a.stack = ``),
              (a.digest = r),
              ga({ value: a, source: null, stack: null })),
            tl(e, t, c)
          );
        }
        if ((Nc || Ca(e, t, c, !1), (r = (c & e.childLanes) !== 0), Nc || r)) {
          if (To.current !== null) return tl(e, t, c);
          if (
            ((r = q),
            r !== null && ((a = wt(r, c)), a !== 0 && a !== s.retryLane))
          )
            throw ((s.retryLane = a), Ni(e, a), Pd(r, e, a), Mc);
          return (om(o) || Kd(), tl(e, t, c));
        }
        return om(o)
          ? ((t.flags |= 192), (t.child = e.child), null)
          : ((e = s.treeContext),
            (P = lm(o.nextSibling)),
            (la = t),
            (F = !0),
            (ua = null),
            (da = !1),
            e !== null && ca(t, e),
            (t = $c(t, a.children)),
            (t.flags |= 134221824),
            t);
      }
      function rl(e, t, n) {
        e.lanes |= t;
        var r = e.alternate;
        (r !== null && (r.lanes |= t), xa(e.return, t, n));
      }
      function il(e) {
        for (var t = null; e !== null;) {
          var n = e.alternate;
          (n !== null && Bo(n) === null && (t = e), (e = e.sibling));
        }
        return t;
      }
      function al(e, t, n, r, i, a) {
        var o = e.memoizedState;
        o === null
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
              treeForkCount: a,
            })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = i),
            (o.treeForkCount = a));
      }
      function ol(e) {
        var t = e.child;
        for (e.child = null; t !== null;) {
          var n = t.sibling;
          ((t.sibling = e.child), (e.child = t), (t = n));
        }
      }
      function sl(e, t, n) {
        var r = t.pendingProps,
          i = r.revealOrder,
          a = r.tail;
        r = r.children;
        var o = Lo.current;
        if (t.flags & 128) return (Ro(t, o), null);
        var s = !!(o & 2);
        if (
          (s ? ((o = (o & 1) | 2), (t.flags |= 128)) : (o &= 1),
          Ro(t, o),
          i === `backwards` && e !== null
            ? (ol(e), Pc(e, t, r, n), ol(e))
            : Pc(e, t, r, n),
          (r = F ? Qi : 0),
          !s && e !== null && e.flags & 128)
        )
          a: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && rl(e, n, t);
            else if (e.tag === 19) rl(e, n, t);
            else if (e.child !== null) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break a;
            for (; e.sibling === null;) {
              if (e.return === null || e.return === t) break a;
              e = e.return;
            }
            ((e.sibling.return = e.return), (e = e.sibling));
          }
        switch (i) {
          case `backwards`:
            ((n = il(t.child)),
              n === null
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null), ol(t)),
              al(t, !0, i, null, a, r));
            break;
          case `unstable_legacy-backwards`:
            for (n = null, i = t.child, t.child = null; i !== null;) {
              if (((e = i.alternate), e !== null && Bo(e) === null)) {
                t.child = i;
                break;
              }
              ((e = i.sibling), (i.sibling = n), (n = i), (i = e));
            }
            al(t, !0, n, null, a, r);
            break;
          case `together`:
            al(t, !1, null, null, void 0, r);
            break;
          case `independent`:
            t.memoizedState = null;
            break;
          default:
            ((n = il(t.child)),
              n === null
                ? ((i = t.child), (t.child = null))
                : ((i = n.sibling), (n.sibling = null)),
              al(t, !1, i, n, a, r));
        }
        return t.child;
      }
      function cl(e, t, n) {
        var r = t.pendingProps;
        return (z(t, t.type, r.value), Pc(e, t, r.children, n), t.child);
      }
      function ll(e, t, n) {
        if (
          (e !== null && (t.dependencies = e.dependencies),
          (od |= t.lanes),
          (n & t.childLanes) === 0)
        ) {
          if (e !== null) {
            if ((Ca(e, t, n, !1), (n & t.childLanes) === 0)) return null;
          } else return null;
        }
        if (e !== null && t.child !== e.child) throw Error(i(153));
        if (t.child !== null) {
          for (
            e = t.child, n = Bi(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;
          )
            ((e = e.sibling),
              (n = n.sibling = Bi(e, e.pendingProps)),
              (n.return = t));
          n.sibling = null;
        }
        return t.child;
      }
      function ul(e, t) {
        return (
          (e.lanes & t) !== 0 || ((e = e.dependencies), !!(e !== null && wa(e)))
        );
      }
      function dl(e, t, n) {
        switch (t.tag) {
          case 3:
            (Me(t, t.stateNode.containerInfo),
              z(t, ja, e.memoizedState.cache),
              R());
            break;
          case 27:
          case 5:
            Pe(t);
            break;
          case 4:
            Me(t, t.stateNode.containerInfo);
            break;
          case 10:
            z(t, t.type, t.memoizedProps.value);
            break;
          case 31:
            if (t.memoizedState !== null)
              return ((t.flags |= 128), No(t), null);
            break;
          case 13:
            var r = t.memoizedState;
            if (r !== null) {
              if (r.dehydrated !== null) return (Mo(t), (t.flags |= 128), null);
              r = Ca(e, t, n, !1);
              var i = t.child.childLanes;
              return r || (n & i) !== 0
                ? Qc(e, t, n)
                : (Mo(t), (e = ll(e, t, n)), e === null ? null : e.sibling);
            }
            Mo(t);
            break;
          case 19:
            if (t.flags & 128) return sl(e, t, n);
            if (
              ((i = !!(e.flags & 128)),
              (r = (n & t.childLanes) !== 0),
              (r ||= (Ca(e, t, n, !1), (n & t.childLanes) !== 0)),
              i)
            ) {
              if (r) return sl(e, t, n);
              t.flags |= 128;
            }
            if (
              ((i = t.memoizedState),
              i !== null &&
                ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
              Ro(t, Lo.current),
              r)
            )
              break;
            return null;
          case 22:
            return ((t.lanes = 0), Rc(e, t, n, t.pendingProps));
          case 24:
            z(t, ja, e.memoizedState.cache);
        }
        return ll(e, t, n);
      }
      function fl(e, t, n) {
        if (e !== null) {
          if (e.memoizedProps !== t.pendingProps) Nc = !0;
          else {
            if (!ul(e, n) && !(t.flags & 128)) return ((Nc = !1), dl(e, t, n));
            Nc = !!(e.flags & 131072);
          }
        } else ((Nc = !1), F && t.flags & 1048576 && aa(t, Qi, t.index));
        switch (((t.lanes = 0), t.tag)) {
          case 16:
            a: {
              var r = t.pendingProps;
              if (
                ((e = eo(t.elementType)), (t.type = e), typeof e == `function`)
              )
                zi(e)
                  ? ((r = Sc(e, r)), (t.tag = 1), (t = qc(null, t, e, r, n)))
                  : ((t.tag = 0), (t = Gc(null, t, e, r, n)));
              else {
                if (e != null) {
                  var a = e.$$typeof;
                  if (a === ce) {
                    ((t.tag = 11), (t = Fc(null, t, e, r, n)));
                    break a;
                  }
                  if (a === de) {
                    ((t.tag = 14), (t = Ic(null, t, e, r, n)));
                    break a;
                  }
                  if (a === se) {
                    ((t.tag = 10), (t.type = e), (t = cl(null, t, n)));
                    break a;
                  }
                }
                throw ((t = xe(e) || e), Error(i(306, t, ``)));
              }
            }
            return t;
          case 0:
            return Gc(e, t, t.type, t.pendingProps, n);
          case 1:
            return (
              (r = t.type),
              (a = Sc(r, t.pendingProps)),
              qc(e, t, r, a, n)
            );
          case 3:
            a: {
              if ((Me(t, t.stateNode.containerInfo), e === null))
                throw Error(i(387));
              r = t.pendingProps;
              var o = t.memoizedState;
              ((a = o.element), ho(e, t), So(t, r, null, n));
              var s = t.memoizedState;
              if (
                ((r = s.cache),
                z(t, ja, r),
                r !== o.cache && Sa(t, [ja], n, !0),
                xo(),
                (r = s.element),
                o.isDehydrated)
              ) {
                if (
                  ((o = { element: r, isDehydrated: !1, cache: s.cache }),
                  (t.updateQueue.baseState = o),
                  (t.memoizedState = o),
                  t.flags & 256)
                ) {
                  t = Jc(e, t, r, n);
                  break a;
                }
                if (r !== a) {
                  ((a = Ji(Error(i(424)), t)), ga(a), (t = Jc(e, t, r, n)));
                  break a;
                }
                switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                  case 9:
                    e = e.body;
                    break;
                  default:
                    e = e.nodeName === `HTML` ? e.ownerDocument.body : e;
                }
                for (
                  P = lm(e.firstChild),
                    la = t,
                    F = !0,
                    ua = null,
                    da = !0,
                    n = fo(t, null, r, n),
                    t.child = n;
                  n;
                )
                  ((n.flags = (n.flags & -3) | 134221824), (n = n.sibling));
              } else {
                if ((R(), r === a)) {
                  t = ll(e, t, n);
                  break a;
                }
                Pc(e, t, r, n);
              }
              t = t.child;
            }
            return t;
          case 26:
            return (
              Wc(e, t),
              e === null
                ? (n = Nm(t.type, null, t.pendingProps, null))
                  ? (t.memoizedState = n)
                  : F ||
                    (t.stateNode = fp(t.type, t.pendingProps, Ae.current, t))
                : (t.memoizedState = Nm(
                    t.type,
                    e.memoizedProps,
                    t.pendingProps,
                    e.memoizedState,
                  )),
              null
            );
          case 27:
            return (
              Pe(t),
              e === null &&
                F &&
                ((r = t.stateNode = hm(t.type, t.pendingProps, Ae.current)),
                (la = t),
                (da = !0),
                (a = P),
                Sp(t.type) ? ((um = a), (P = lm(r.firstChild))) : (P = a)),
              Pc(e, t, t.pendingProps.children, n),
              Wc(e, t),
              e === null && (t.flags |= 4194304),
              t.child
            );
          case 5:
            return (
              e === null &&
                F &&
                ((a = r = P) &&
                  ((r = rm(r, t.type, t.pendingProps, da)),
                  r === null
                    ? (a = !1)
                    : ((t.stateNode = r),
                      (la = t),
                      (P = lm(r.firstChild)),
                      (da = !1),
                      (a = !0))),
                a || L(t)),
              Pe(t),
              (a = t.type),
              (o = t.pendingProps),
              (s = e === null ? null : e.memoizedProps),
              (r = o.children),
              pp(a, o) ? (r = null) : s !== null && pp(a, s) && (t.flags |= 32),
              t.memoizedState !== null &&
                ((a = Qo(e, t, ts, null, null, n)), (sh._currentValue = a)),
              Wc(e, t),
              Pc(e, t, r, n),
              t.child
            );
          case 6:
            return (
              e === null &&
                F &&
                ((e = n = P) &&
                  ((n = im(n, t.pendingProps, da)),
                  n === null
                    ? (e = !1)
                    : ((t.stateNode = n), (la = t), (P = null), (e = !0))),
                e || L(t)),
              null
            );
          case 13:
            return Qc(e, t, n);
          case 4:
            return (
              Me(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              e === null ? (t.child = uo(t, null, r, n)) : Pc(e, t, r, n),
              t.child
            );
          case 11:
            return Fc(e, t, t.type, t.pendingProps, n);
          case 7:
            return ((r = t.pendingProps), Wc(e, t), Pc(e, t, r, n), t.child);
          case 8:
            return (Pc(e, t, t.pendingProps.children, n), t.child);
          case 12:
            return (Pc(e, t, t.pendingProps.children, n), t.child);
          case 10:
            return cl(e, t, n);
          case 9:
            return (
              (a = t.type._context),
              (r = t.pendingProps.children),
              Ta(t),
              (a = Ea(a)),
              (r = r(a)),
              (t.flags |= 1),
              Pc(e, t, r, n),
              t.child
            );
          case 14:
            return Ic(e, t, t.type, t.pendingProps, n);
          case 15:
            return Lc(e, t, t.type, t.pendingProps, n);
          case 19:
            return sl(e, t, n);
          case 31:
            return Uc(e, t, n);
          case 22:
            return Rc(e, t, n, t.pendingProps);
          case 24:
            return (
              Ta(t),
              (r = Ea(ja)),
              e === null
                ? ((a = Ka()),
                  a === null &&
                    ((a = q),
                    (o = Ma()),
                    (a.pooledCache = o),
                    o.refCount++,
                    o !== null && (a.pooledCacheLanes |= n),
                    (a = o)),
                  (t.memoizedState = { parent: r, cache: a }),
                  mo(t),
                  z(t, ja, a))
                : ((e.lanes & n) !== 0 &&
                    (ho(e, t), So(t, null, null, n), xo()),
                  (a = e.memoizedState),
                  (o = t.memoizedState),
                  a.parent === r
                    ? ((r = o.cache),
                      z(t, ja, r),
                      r !== a.cache && Sa(t, [ja], n, !0))
                    : ((a = { parent: r, cache: r }),
                      (t.memoizedState = a),
                      t.lanes === 0 &&
                        (t.memoizedState = t.updateQueue.baseState = a),
                      z(t, ja, r))),
              Pc(e, t, t.pendingProps.children, n),
              t.child
            );
          case 30:
            return (
              t.stateNode === null &&
                (t.stateNode = {
                  autoName: null,
                  paired: null,
                  clones: null,
                  ref: null,
                }),
              (r = t.pendingProps),
              r.name != null && r.name !== `auto`
                ? (t.flags |= e === null ? 18882560 : 18874368)
                : F && oa(t),
              e !== null && e.memoizedProps.name !== r.name
                ? (t.flags |= 4194816)
                : Wc(e, t),
              Pc(e, t, r.children, n),
              t.child
            );
          case 29:
            throw t.pendingProps;
        }
        throw Error(i(156, t.tag));
      }
      function pl(e) {
        e.flags |= 4;
      }
      function ml(e, t, n, r, i) {
        var a;
        if (
          ((a = !!(e.mode & 32)) &&
            (a =
              n === null
                ? Jm(t, r)
                : Jm(t, r) && (r.src !== n.src || r.srcSet !== n.srcSet)),
          a)
        ) {
          if (((e.flags |= 16777216), (i & 335544128) === i)) {
            if (e.stateNode.complete) e.flags |= 8192;
            else if (Ud()) e.flags |= 8192;
            else throw ((to = Za), Ya);
          }
        } else e.flags &= -16777217;
      }
      function hl(e, t) {
        if (t.type !== `stylesheet` || t.state.loading & 4)
          e.flags &= -16777217;
        else if (((e.flags |= 16777216), !Ym(t))) {
          if (Ud()) e.flags |= 8192;
          else throw ((to = Za), Ya);
        }
      }
      function gl(e, t) {
        (t !== null && (e.flags |= 4),
          e.flags & 16384 &&
            ((t = e.tag === 22 ? 536870912 : vt()), (e.lanes |= t), (ud |= t)));
      }
      function _l(e, t) {
        if (!F)
          switch (e.tailMode) {
            case `visible`:
              break;
            case `collapsed`:
              for (var n = e.tail, r = null; n !== null;)
                (n.alternate !== null && (r = n), (n = n.sibling));
              r === null
                ? t || e.tail === null
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
              break;
            default:
              for (t = e.tail, n = null; t !== null;)
                (t.alternate !== null && (n = t), (t = t.sibling));
              n === null ? (e.tail = null) : (n.sibling = null);
          }
      }
      function W(e) {
        var t = e.alternate !== null && e.alternate.child === e.child,
          n = 0,
          r = 0;
        if (t)
          for (var i = e.child; i !== null;)
            ((n |= i.lanes | i.childLanes),
              (r |= i.subtreeFlags & 1206910976),
              (r |= i.flags & 1206910976),
              (i.return = e),
              (i = i.sibling));
        else
          for (i = e.child; i !== null;)
            ((n |= i.lanes | i.childLanes),
              (r |= i.subtreeFlags),
              (r |= i.flags),
              (i.return = e),
              (i = i.sibling));
        return ((e.subtreeFlags |= r), (e.childLanes = n), t);
      }
      function vl(e, t, n) {
        var r = t.pendingProps;
        switch ((sa(t), t.tag)) {
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return (W(t), null);
          case 1:
            return (W(t), null);
          case 3:
            return (
              (n = t.stateNode),
              (r = null),
              e !== null && (r = e.memoizedState.cache),
              t.memoizedState.cache !== r && (t.flags |= 2048),
              ba(ja),
              Ne(),
              n.pendingContext &&
                ((n.context = n.pendingContext), (n.pendingContext = null)),
              (e === null || e.child === null) &&
                (ma(t)
                  ? pl(t)
                  : e === null ||
                    (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                    ((t.flags |= 1024), ha())),
              W(t),
              null
            );
          case 26:
            var a = t.type,
              o = t.memoizedState;
            return (
              e === null
                ? (pl(t),
                  o === null ? (W(t), ml(t, a, null, r, n)) : (W(t), hl(t, o)))
                : o
                  ? o === e.memoizedState
                    ? (W(t), (t.flags &= -16777217))
                    : (pl(t), W(t), hl(t, o))
                  : ((e = e.memoizedProps),
                    e !== r && pl(t),
                    W(t),
                    ml(t, a, e, r, n)),
              null
            );
          case 27:
            if (
              (Fe(t),
              (n = Ae.current),
              (a = t.type),
              e !== null && t.stateNode != null)
            )
              e.memoizedProps !== r && pl(t);
            else {
              if (!r) {
                if (t.stateNode === null) throw Error(i(166));
                return (W(t), (t.subtreeFlags &= -33554433), null);
              }
              ((e = Oe.current),
                ma(t)
                  ? fa(t, e)
                  : ((e = hm(a, r, n)), (t.stateNode = e), pl(t)));
            }
            return (W(t), (t.subtreeFlags &= -33554433), null);
          case 5:
            if ((Fe(t), (a = t.type), e !== null && t.stateNode != null))
              e.memoizedProps !== r && pl(t);
            else {
              if (!r) {
                if (t.stateNode === null) throw Error(i(166));
                return (W(t), (t.subtreeFlags &= -33554433), null);
              }
              if (((o = Oe.current), ma(t))) fa(t, o);
              else {
                var s = lp(Ae.current);
                switch (o) {
                  case 1:
                    o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                    break;
                  case 2:
                    o = s.createElementNS(
                      `http://www.w3.org/1998/Math/MathML`,
                      a,
                    );
                    break;
                  default:
                    switch (a) {
                      case `svg`:
                        o = s.createElementNS(`http://www.w3.org/2000/svg`, a);
                        break;
                      case `math`:
                        o = s.createElementNS(
                          `http://www.w3.org/1998/Math/MathML`,
                          a,
                        );
                        break;
                      case `script`:
                        ((o = s.createElement(`div`)),
                          (o.innerHTML = `<script><\/script>`),
                          (o = o.removeChild(o.firstChild)));
                        break;
                      case `select`:
                        ((o =
                          typeof r.is == `string`
                            ? s.createElement(`select`, { is: r.is })
                            : s.createElement(`select`)),
                          r.multiple
                            ? (o.multiple = !0)
                            : r.size && (o.size = r.size));
                        break;
                      default:
                        o =
                          typeof r.is == `string`
                            ? s.createElement(a, { is: r.is })
                            : s.createElement(a);
                    }
                }
                ((o[At] = t), (o[jt] = r));
                a: for (s = t.child; s !== null;) {
                  if (s.tag === 5 || s.tag === 6) o.appendChild(s.stateNode);
                  else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                    ((s.child.return = s), (s = s.child));
                    continue;
                  }
                  if (s === t) break a;
                  for (; s.sibling === null;) {
                    if (s.return === null || s.return === t) break a;
                    s = s.return;
                  }
                  ((s.sibling.return = s.return), (s = s.sibling));
                }
                t.stateNode = o;
                a: switch ((np(o, a, r), a)) {
                  case `button`:
                  case `input`:
                  case `select`:
                  case `textarea`:
                    r = !!r.autoFocus;
                    break a;
                  case `img`:
                    r = !0;
                    break a;
                  default:
                    r = !1;
                }
                r && pl(t);
              }
            }
            return (
              W(t),
              (t.subtreeFlags &= -33554433),
              ml(
                t,
                t.type,
                e === null ? null : e.memoizedProps,
                t.pendingProps,
                n,
              ),
              null
            );
          case 6:
            if (e && t.stateNode != null) e.memoizedProps !== r && pl(t);
            else {
              if (typeof r != `string` && t.stateNode === null)
                throw Error(i(166));
              if (((e = Ae.current), ma(t))) {
                if (
                  ((e = t.stateNode),
                  (n = t.memoizedProps),
                  (r = null),
                  (a = la),
                  a !== null)
                )
                  switch (a.tag) {
                    case 27:
                    case 5:
                      r = a.memoizedProps;
                  }
                ((e[At] = t),
                  (e = !!(
                    e.nodeValue === n ||
                    (r !== null && !0 === r.suppressHydrationWarning) ||
                    ep(e.nodeValue, n)
                  )),
                  e || L(t, !0));
              } else
                ((e = lp(e).createTextNode(r)), (e[At] = t), (t.stateNode = e));
            }
            return (W(t), null);
          case 31:
            if (
              ((n = t.memoizedState), e === null || e.memoizedState !== null)
            ) {
              if (((r = ma(t)), n !== null)) {
                if (e === null) {
                  if (!r) throw Error(i(318));
                  if (
                    ((e = t.memoizedState),
                    (e = e === null ? null : e.dehydrated),
                    !e)
                  )
                    throw Error(i(557));
                  e[At] = t;
                } else
                  (R(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    (t.flags |= 4));
                (W(t), (e = !1));
              } else
                ((n = ha()),
                  e !== null &&
                    e.memoizedState !== null &&
                    (e.memoizedState.hydrationErrors = n),
                  (e = !0));
              if (!e) return t.flags & 256 ? (Io(t), t) : (Io(t), null);
              if (t.flags & 128) throw Error(i(558));
            }
            return (W(t), null);
          case 13:
            if (
              ((r = t.memoizedState),
              e === null ||
                (e.memoizedState !== null &&
                  e.memoizedState.dehydrated !== null))
            ) {
              if (((a = ma(t)), r !== null && r.dehydrated !== null)) {
                if (e === null) {
                  if (!a) throw Error(i(318));
                  if (
                    ((a = t.memoizedState),
                    (a = a === null ? null : a.dehydrated),
                    !a)
                  )
                    throw Error(i(317));
                  a[At] = t;
                } else
                  (R(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    (t.flags |= 4));
                (W(t), (a = !1));
              } else
                ((a = ha()),
                  e !== null &&
                    e.memoizedState !== null &&
                    (e.memoizedState.hydrationErrors = a),
                  (a = !0));
              if (!a) return t.flags & 256 ? (Io(t), t) : (Io(t), null);
            }
            return (
              Io(t),
              t.flags & 128
                ? ((t.lanes = n), t)
                : ((n = r !== null),
                  (e = e !== null && e.memoizedState !== null),
                  n &&
                    ((r = t.child),
                    (a = null),
                    r.alternate !== null &&
                      r.alternate.memoizedState !== null &&
                      r.alternate.memoizedState.cachePool !== null &&
                      (a = r.alternate.memoizedState.cachePool.pool),
                    (o = null),
                    r.memoizedState !== null &&
                      r.memoizedState.cachePool !== null &&
                      (o = r.memoizedState.cachePool.pool),
                    o !== a && (r.flags |= 2048)),
                  n !== e && n && (t.child.flags |= 8192),
                  gl(t, t.updateQueue),
                  W(t),
                  null)
            );
          case 4:
            return (
              Ne(),
              e === null && Wf(t.stateNode.containerInfo),
              (t.flags |= 67108864),
              W(t),
              null
            );
          case 10:
            return (ba(t.type), W(t), null);
          case 19:
            if ((zo(t), (r = t.memoizedState), r === null)) return (W(t), null);
            if (((a = !!(t.flags & 128)), (o = r.rendering), o === null)) {
              if (a) _l(r, !1);
              else {
                if (ad !== 0 || (e !== null && e.flags & 128))
                  for (e = t.child; e !== null;) {
                    if (((o = Bo(e)), o !== null)) {
                      for (
                        t.flags |= 128,
                          _l(r, !1),
                          e = o.updateQueue,
                          t.updateQueue = e,
                          gl(t, e),
                          t.subtreeFlags = 0,
                          e = n,
                          n = t.child;
                        n !== null;
                      )
                        (Vi(n, e), (n = n.sibling));
                      return (
                        Ro(t, (Lo.current & 1) | 2),
                        F && ia(t, r.treeForkCount),
                        t.child
                      );
                    }
                    e = e.sibling;
                  }
                r.tail !== null &&
                  Je() > gd &&
                  ((t.flags |= 128), (a = !0), _l(r, !1), (t.lanes = 4194304));
              }
            } else {
              if (!a) {
                if (((e = Bo(o)), e !== null)) {
                  if (
                    ((t.flags |= 128),
                    (a = !0),
                    (e = e.updateQueue),
                    (t.updateQueue = e),
                    gl(t, e),
                    _l(r, !0),
                    r.tail === null &&
                      r.tailMode !== `collapsed` &&
                      r.tailMode !== `visible` &&
                      !o.alternate &&
                      !F)
                  )
                    return (W(t), null);
                } else
                  2 * Je() - r.renderingStartTime > gd &&
                    n !== 536870912 &&
                    ((t.flags |= 128),
                    (a = !0),
                    _l(r, !1),
                    (t.lanes = 4194304));
              }
              r.isBackwards
                ? ((o.sibling = t.child), (t.child = o))
                : ((e = r.last),
                  e === null ? (t.child = o) : (e.sibling = o),
                  (r.last = o));
            }
            if (r.tail !== null) {
              e = r.tail;
              a: {
                for (n = e; n !== null;) {
                  if (n.alternate !== null) {
                    n = !1;
                    break a;
                  }
                  n = n.sibling;
                }
                n = !0;
              }
              return (
                (r.rendering = e),
                (r.tail = e.sibling),
                (r.renderingStartTime = Je()),
                (e.sibling = null),
                (o = Lo.current),
                (o = a ? (o & 1) | 2 : o & 1),
                r.tailMode === `visible` ||
                r.tailMode === `collapsed` ||
                !n ||
                F
                  ? Ro(t, o)
                  : ((n = o), A(Ao, t), A(Lo, n), jo === null && (jo = t)),
                F && ia(t, r.treeForkCount),
                e
              );
            }
            return (W(t), null);
          case 22:
          case 23:
            return (
              Io(t),
              ko(),
              (r = t.memoizedState !== null),
              e === null
                ? r && (t.flags |= 8192)
                : (e.memoizedState !== null) !== r && (t.flags |= 8192),
              r
                ? n & 536870912 &&
                  !(t.flags & 128) &&
                  (W(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                : W(t),
              (n = t.updateQueue),
              n !== null && gl(t, n.retryQueue),
              (n = null),
              e !== null &&
                e.memoizedState !== null &&
                e.memoizedState.cachePool !== null &&
                (n = e.memoizedState.cachePool.pool),
              (r = null),
              t.memoizedState !== null &&
                t.memoizedState.cachePool !== null &&
                (r = t.memoizedState.cachePool.pool),
              r !== n && (t.flags |= 2048),
              e !== null && De(Ga),
              null
            );
          case 24:
            return (
              (n = null),
              e !== null && (n = e.memoizedState.cache),
              t.memoizedState.cache !== n && (t.flags |= 2048),
              ba(ja),
              W(t),
              null
            );
          case 25:
            return null;
          case 30:
            return ((t.flags |= 33554432), W(t), null);
        }
        throw Error(i(156, t.tag));
      }
      function yl(e, t) {
        switch ((sa(t), t.tag)) {
          case 1:
            return (
              (e = t.flags),
              e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
          case 3:
            return (
              ba(ja),
              Ne(),
              (e = t.flags),
              e & 65536 && !(e & 128)
                ? ((t.flags = (e & -65537) | 128), t)
                : null
            );
          case 26:
          case 27:
          case 5:
            return (Fe(t), null);
          case 31:
            if (t.memoizedState !== null) {
              if ((Io(t), t.alternate === null)) throw Error(i(340));
              R();
            }
            return (
              (e = t.flags),
              e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
          case 13:
            if (
              (Io(t),
              (e = t.memoizedState),
              e !== null && e.dehydrated !== null)
            ) {
              if (t.alternate === null) throw Error(i(340));
              R();
            }
            return (
              (e = t.flags),
              e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
          case 19:
            return (
              zo(t),
              (e = t.flags),
              e & 65536
                ? ((t.flags = (e & -65537) | 128),
                  (e = t.memoizedState),
                  e !== null && ((e.rendering = null), (e.tail = null)),
                  (t.flags |= 4),
                  t)
                : null
            );
          case 4:
            return (Ne(), null);
          case 10:
            return (ba(t.type), null);
          case 22:
          case 23:
            return (
              Io(t),
              ko(),
              e !== null && De(Ga),
              (e = t.flags),
              e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            );
          case 24:
            return (ba(ja), null);
          case 25:
            return null;
          default:
            return null;
        }
      }
      function bl(e, t) {
        switch ((sa(t), t.tag)) {
          case 3:
            (ba(ja), Ne());
            break;
          case 26:
          case 27:
          case 5:
            Fe(t);
            break;
          case 4:
            Ne();
            break;
          case 31:
            t.memoizedState !== null && Io(t);
            break;
          case 13:
            Io(t);
            break;
          case 19:
            zo(t);
            break;
          case 10:
            ba(t.type);
            break;
          case 22:
          case 23:
            (Io(t), ko(), e !== null && De(Ga));
            break;
          case 24:
            ba(ja);
        }
      }
      function xl(e, t) {
        try {
          var n = t.updateQueue,
            r = n === null ? null : n.lastEffect;
          if (r !== null) {
            var i = r.next;
            n = i;
            do {
              if ((n.tag & e) === e) {
                r = void 0;
                var a = n.create,
                  o = n.inst;
                ((r = a()), (o.destroy = r));
              }
              n = n.next;
            } while (n !== i);
          }
        } catch (e) {
          Z(t, t.return, e);
        }
      }
      function Sl(e, t, n) {
        try {
          var r = t.updateQueue,
            i = r === null ? null : r.lastEffect;
          if (i !== null) {
            var a = i.next;
            r = a;
            do {
              if ((r.tag & e) === e) {
                var o = r.inst,
                  s = o.destroy;
                if (s !== void 0) {
                  ((o.destroy = void 0), (i = t));
                  var c = n,
                    l = s;
                  try {
                    l();
                  } catch (e) {
                    Z(i, c, e);
                  }
                }
              }
              r = r.next;
            } while (r !== a);
          }
        } catch (e) {
          Z(t, t.return, e);
        }
      }
      function Cl(e) {
        var t = e.updateQueue;
        if (t !== null) {
          var n = e.stateNode;
          try {
            wo(t, n);
          } catch (t) {
            Z(e, e.return, t);
          }
        }
      }
      function wl(e, t, n) {
        ((n.props = Sc(e.type, e.memoizedProps)), (n.state = e.memoizedState));
        try {
          n.componentWillUnmount();
        } catch (n) {
          Z(e, t, n);
        }
      }
      function Tl(e, t) {
        try {
          var n = e.ref;
          if (n !== null) {
            switch (e.tag) {
              case 26:
              case 27:
              case 5:
                var r = e.stateNode;
                break;
              case 30:
                var i = e.stateNode,
                  a = Ci(e.memoizedProps, i);
                ((i.ref === null || i.ref.name !== a) && (i.ref = Pp(a)),
                  (r = i.ref));
                break;
              case 7:
                if (e.stateNode === null) {
                  var o = new Fp(e);
                  (h(e.child, !1, Qp, o, void 0, void 0), (e.stateNode = o));
                }
                r = e.stateNode;
                break;
              default:
                r = e.stateNode;
            }
            typeof n == `function` ? (e.refCleanup = n(r)) : (n.current = r);
          }
        } catch (n) {
          Z(e, t, n);
        }
      }
      function El(e, t) {
        var n = e.ref,
          r = e.refCleanup;
        if (n !== null) {
          if (typeof r == `function`)
            try {
              r();
            } catch (n) {
              Z(e, t, n);
            } finally {
              ((e.refCleanup = null),
                (e = e.alternate),
                e != null && (e.refCleanup = null));
            }
          else if (typeof n == `function`)
            try {
              n(null);
            } catch (n) {
              Z(e, t, n);
            }
          else n.current = null;
        }
      }
      function Dl(e, t) {
        if (
          (e.tag === 5 || e.tag === 27 || e.tag === 6) &&
          e.alternate === null &&
          t !== null
        )
          for (var n = 0; n < t.length; n++) em(e.stateNode, t[n]);
      }
      function Ol(e) {
        for (
          var t = e.return;
          t !== null && (jl(t) && em(e.stateNode, t.stateNode), !Al(t));
        )
          t = t.return;
      }
      function kl(e) {
        for (
          var t = e.return;
          t !== null && (jl(t) && tm(e.stateNode, t.stateNode), !Al(t));
        )
          t = t.return;
      }
      function Al(e) {
        return e.tag === 5 || e.tag === 3 || e.tag === 27;
      }
      function jl(e) {
        return e && e.tag === 7 && e.stateNode !== null;
      }
      function Ml(e) {
        var t = e.type,
          n = e.memoizedProps,
          r = e.stateNode;
        try {
          a: switch (t) {
            case `button`:
            case `input`:
            case `select`:
            case `textarea`:
              n.autoFocus && r.focus();
              break a;
            case `img`:
              n.src ? (r.src = n.src) : n.srcSet && (r.srcset = n.srcSet);
          }
        } catch (t) {
          Z(e, e.return, t);
        }
      }
      function Nl(e, t, n) {
        try {
          var r = e.stateNode;
          (ip(r, e.type, n, t), (r[jt] = t));
        } catch (t) {
          Z(e, e.return, t);
        }
      }
      function Pl(e) {
        return (
          e.tag === 5 ||
          e.tag === 3 ||
          e.tag === 26 ||
          (e.tag === 27 && Sp(e.type)) ||
          e.tag === 4
        );
      }
      function Fl(e) {
        a: for (;;) {
          for (; e.sibling === null;) {
            if (e.return === null || Pl(e.return)) return null;
            e = e.return;
          }
          for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
          ) {
            if (
              (e.tag === 27 && Sp(e.type)) ||
              e.flags & 2 ||
              e.child === null ||
              e.tag === 4
            )
              continue a;
            ((e.child.return = e), (e = e.child));
          }
          if (!(e.flags & 2)) return e.stateNode;
        }
      }
      function Il(e, t, n, r) {
        var i = e.tag;
        if (i === 5 || i === 6)
          ((i = e.stateNode),
            t
              ? (n.nodeType === 9
                  ? n.body
                  : n.nodeName === `HTML`
                    ? n.ownerDocument.body
                    : n
                ).insertBefore(i, t)
              : ((t =
                  n.nodeType === 9
                    ? n.body
                    : n.nodeName === `HTML`
                      ? n.ownerDocument.body
                      : n),
                t.appendChild(i),
                (n = n._reactRootContainer),
                n != null || t.onclick !== null || (t.onclick = En)),
            Dl(e, r),
            (j = !0));
        else if (
          i !== 4 &&
          (i === 27 &&
            (Dl(e, r),
            (r = null),
            Sp(e.type) && ((n = e.stateNode), (t = null))),
          (e = e.child),
          e !== null)
        )
          for (Il(e, t, n, r), e = e.sibling; e !== null;)
            (Il(e, t, n, r), (e = e.sibling));
      }
      function Ll(e, t, n, r) {
        var i = e.tag;
        if (i === 5 || i === 6)
          ((i = e.stateNode),
            t ? n.insertBefore(i, t) : n.appendChild(i),
            Dl(e, r),
            (j = !0));
        else if (
          i !== 4 &&
          (i === 27 && (Dl(e, r), (r = null), Sp(e.type) && (n = e.stateNode)),
          (e = e.child),
          e !== null)
        )
          for (Ll(e, t, n, r), e = e.sibling; e !== null;)
            (Ll(e, t, n, r), (e = e.sibling));
      }
      function Rl(e) {
        var t = e.stateNode,
          n = e.memoizedProps;
        try {
          for (var r = e.type, i = t.attributes; i.length;)
            t.removeAttributeNode(i[0]);
          (np(t, r, n), (t[At] = e), (t[jt] = n));
        } catch (t) {
          Z(e, e.return, t);
        }
      }
      var zl = !1,
        Bl = null;
      function Vl(e) {
        (e.tag === 30 || e.subtreeFlags & 33554432) && (zl = !0);
      }
      var Hl = null;
      function Ul() {
        var e = Hl;
        return ((Hl = null), e);
      }
      var Wl = 0;
      function Gl(e, t, n, r, i) {
        return ((Wl = 0), Kl(e.child, t, n, r, i));
      }
      function Kl(e, t, n, r, i) {
        for (var a = !1; e !== null;) {
          if (e.tag === 5) {
            var o = e.stateNode;
            if (r !== null) {
              var s = Op(o);
              (r.push(s), s.view && (a = !0));
            } else a || (Op(o).view && (a = !0));
            ((zl = !0), Tp(o, Wl === 0 ? t : t + `_` + Wl, n), Wl++);
          } else
            (e.tag === 22 && e.memoizedState !== null) ||
              (e.tag === 30 && i) ||
              (Kl(e.child, t, n, r, i) && (a = !0));
          e = e.sibling;
        }
        return a;
      }
      function ql(e, t) {
        for (; e !== null;)
          (e.tag === 5
            ? Ep(e.stateNode, e.memoizedProps)
            : (e.tag === 22 && e.memoizedState !== null) ||
              (e.tag === 30 && t) ||
              ql(e.child, t),
            (e = e.sibling));
      }
      function Jl(e) {
        if (e.subtreeFlags & 18874368)
          for (e = e.child; e !== null;) {
            if (
              (e.tag !== 22 || e.memoizedState === null) &&
              (Jl(e), e.tag === 30 && e.flags & 18874368 && e.stateNode.paired)
            ) {
              var t = e.memoizedProps;
              if (t.name == null || t.name === `auto`) throw Error(i(544));
              var n = t.name;
              ((t = Ti(t.default, t.share)),
                t !== `none` && (Gl(e, n, t, null, !1) || ql(e.child, !1)));
            }
            e = e.sibling;
          }
      }
      function Yl(e, t) {
        if (e.tag === 30) {
          var n = e.stateNode,
            r = e.memoizedProps,
            i = Ci(r, n),
            a = Ti(r.default, n.paired ? r.share : r.enter);
          a === `none`
            ? Jl(e)
            : Gl(e, i, a, null, !1)
              ? (Jl(e), n.paired || t || Nd(e, r.onEnter))
              : ql(e.child, !1);
        } else if (e.subtreeFlags & 33554432)
          for (e = e.child; e !== null;) (Yl(e, t), (e = e.sibling));
        else Jl(e);
      }
      function Xl(e) {
        if (Bl !== null && Bl.size !== 0) {
          var t = Bl;
          if (e.subtreeFlags & 18874368)
            for (e = e.child; e !== null;) {
              if (e.tag !== 22 || e.memoizedState === null) {
                if (e.tag === 30 && e.flags & 18874368) {
                  var n = e.memoizedProps,
                    r = n.name;
                  if (r != null && r !== `auto`) {
                    var i = t.get(r);
                    if (i !== void 0) {
                      var a = Ti(n.default, n.share);
                      if (
                        (a !== `none` &&
                          (Gl(e, r, a, null, !1)
                            ? ((a = e.stateNode),
                              (i.paired = a),
                              (a.paired = i),
                              Nd(e, n.onShare))
                            : ql(e.child, !1)),
                        t.delete(r),
                        t.size === 0)
                      )
                        break;
                    }
                  }
                }
                Xl(e);
              }
              e = e.sibling;
            }
        }
      }
      function Zl(e) {
        if (e.tag === 30) {
          var t = e.memoizedProps,
            n = Ci(t, e.stateNode),
            r = Bl === null ? void 0 : Bl.get(n),
            i = Ti(t.default, r === void 0 ? t.exit : t.share);
          (i !== `none` &&
            (Gl(e, n, i, null, !1)
              ? r === void 0
                ? Nd(e, t.onExit)
                : ((i = e.stateNode),
                  (r.paired = i),
                  (i.paired = r),
                  Bl.delete(n),
                  Nd(e, t.onShare))
              : ql(e.child, !1)),
            Bl !== null && Xl(e));
        } else if (e.subtreeFlags & 33554432)
          for (e = e.child; e !== null;) (Zl(e), (e = e.sibling));
        else Bl !== null && Xl(e);
      }
      function Ql(e) {
        for (e = e.child; e !== null;) {
          if (e.tag === 30) {
            var t = e.memoizedProps,
              n = Ci(t, e.stateNode);
            ((t = Ti(t.default, t.update)),
              (e.flags &= -5),
              t !== `none` && Gl(e, n, t, (e.memoizedState = []), !1));
          } else e.subtreeFlags & 33554432 && Ql(e);
          e = e.sibling;
        }
      }
      function $l(e) {
        if (e.subtreeFlags & 18874368)
          for (e = e.child; e !== null;) {
            if (e.tag !== 22 || e.memoizedState === null) {
              if (e.tag === 30 && e.flags & 18874368) {
                var t = e.stateNode;
                t.paired !== null && ((t.paired = null), ql(e.child, !1));
              }
              $l(e);
            }
            e = e.sibling;
          }
      }
      function eu(e) {
        if (e.tag === 30) ((e.stateNode.paired = null), ql(e.child, !1), $l(e));
        else if (e.subtreeFlags & 33554432)
          for (e = e.child; e !== null;) (eu(e), (e = e.sibling));
        else $l(e);
      }
      function tu(e) {
        for (e = e.child; e !== null;)
          (e.tag === 30 ? ql(e.child, !1) : e.subtreeFlags & 33554432 && tu(e),
            (e = e.sibling));
      }
      function nu(e, t, n, r, i, a, o) {
        for (var s = !1; t !== null;) {
          if (t.tag === 5) {
            var c = t.stateNode;
            if (a !== null && Wl < a.length) {
              var l = a[Wl],
                u = Op(c);
              (l.view || u.view) && (s = !0);
              var d;
              if ((d = !(e.flags & 4))) {
                if (u.clip) d = !0;
                else {
                  d = l.rect;
                  var f = u.rect;
                  d =
                    d.y !== f.y ||
                    d.x !== f.x ||
                    d.height !== f.height ||
                    d.width !== f.width;
                }
              }
              (d && (e.flags |= 4),
                u.abs
                  ? (u = !l.abs)
                  : ((l = l.rect),
                    (u = u.rect),
                    (u = l.height !== u.height || l.width !== u.width)),
                u && (e.flags |= 32));
            } else e.flags |= 32;
            (e.flags & 4 && Tp(c, Wl === 0 ? n : n + `_` + Wl, i),
              (s && e.flags & 4) ||
                (Hl === null && (Hl = []),
                Hl.push(c, Wl === 0 ? r : r + `_` + Wl, t.memoizedProps)),
              Wl++);
          } else
            (t.tag !== 22 || t.memoizedState === null) &&
              (t.tag === 30 && o
                ? (e.flags |= t.flags & 32)
                : nu(e, t.child, n, r, i, a, o) && (s = !0));
          t = t.sibling;
        }
        return s;
      }
      function ru(e, t) {
        for (e = e.child; e !== null;) {
          if (e.tag === 30) {
            var n = e.memoizedProps,
              r = e.stateNode,
              i = Ci(n, r),
              a = Ti(n.default, n.update);
            if (t) {
              r = r.clones;
              var o = r === null ? null : r.map(kp);
            } else ((o = e.memoizedState), (e.memoizedState = null));
            r = e;
            var s = e.child;
            ((Wl = 0),
              (i = nu(r, s, i, i, a, o, !1)),
              e.flags & 4 && i && (t || Nd(e, n.onUpdate)));
          } else e.subtreeFlags & 33554432 && ru(e, t);
          e = e.sibling;
        }
      }
      var iu = !1,
        G = !1,
        au = !1,
        ou = !1,
        su = typeof WeakSet == `function` ? WeakSet : Set,
        cu = null,
        lu = !1,
        uu = !1,
        du = !1,
        fu = !1;
      function pu(e, t, n) {
        if (((e = e.containerInfo), (sp = gh), (e = $r(e)), ei(e))) {
          if (`selectionStart` in e)
            var r = { start: e.selectionStart, end: e.selectionEnd };
          else
            a: {
              r = ((r = e.ownerDocument) && r.defaultView) || window;
              var i = r.getSelection && r.getSelection();
              if (i && i.rangeCount !== 0) {
                r = i.anchorNode;
                var a = i.anchorOffset,
                  o = i.focusNode;
                i = i.focusOffset;
                try {
                  (r.nodeType, o.nodeType);
                } catch {
                  r = null;
                  break a;
                }
                var s = 0,
                  c = -1,
                  l = -1,
                  u = 0,
                  d = 0,
                  f = e,
                  p = null;
                b: for (;;) {
                  for (
                    var m;
                    f !== r || (a !== 0 && f.nodeType !== 3) || (c = s + a),
                      f !== o || (i !== 0 && f.nodeType !== 3) || (l = s + i),
                      f.nodeType === 3 && (s += f.nodeValue.length),
                      (m = f.firstChild) !== null;
                  )
                    ((p = f), (f = m));
                  for (;;) {
                    if (f === e) break b;
                    if (
                      (p === r && ++u === a && (c = s),
                      p === o && ++d === i && (l = s),
                      (m = f.nextSibling) !== null)
                    )
                      break;
                    ((f = p), (p = f.parentNode));
                  }
                  f = m;
                }
                r = c === -1 || l === -1 ? null : { start: c, end: l };
              } else r = null;
            }
          r ||= { start: 0, end: 0 };
        } else r = null;
        for (
          cp = { focusedElem: e, selectionRange: r },
            gh = !1,
            n = (n & 335544064) === n,
            cu = t,
            t = n ? 9270 : 1024;
          cu !== null;
        ) {
          if (((e = cu), n && ((r = e.deletions), r !== null)))
            for (a = 0; a < r.length; a++) n && Zl(r[a]);
          if (e.alternate === null && e.flags & 2) (n && Vl(e), mu(n));
          else {
            if (e.tag === 22) {
              if (((r = e.alternate), e.memoizedState !== null)) {
                (r !== null && r.memoizedState === null && n && Zl(r), mu(n));
                continue;
              }
              if (r !== null && r.memoizedState !== null) {
                (n && Vl(e), mu(n));
                continue;
              }
            }
            ((r = e.child),
              (e.subtreeFlags & t) !== 0 && r !== null
                ? ((r.return = e), (cu = r))
                : (n && Ql(e), mu(n)));
          }
        }
        Bl = null;
      }
      function mu(e) {
        for (; cu !== null;) {
          var t = cu,
            n = e,
            r = t.alternate,
            a = t.flags;
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              break;
            case 1:
              if (a & 1024 && r !== null) {
                ((n = void 0), (a = r.memoizedProps), (r = r.memoizedState));
                var o = t.stateNode;
                try {
                  var s = Sc(t.type, a);
                  ((n = o.getSnapshotBeforeUpdate(s, r)),
                    (o.__reactInternalSnapshotBeforeUpdate = n));
                } catch (e) {
                  Z(t, t.return, e);
                }
              }
              break;
            case 3:
              if (a & 1024) {
                if (
                  ((r = t.stateNode.containerInfo), (n = r.nodeType), n === 9)
                )
                  nm(r);
                else if (n === 1)
                  switch (r.nodeName) {
                    case `HEAD`:
                    case `HTML`:
                    case `BODY`:
                      nm(r);
                      break;
                    default:
                      r.textContent = ``;
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            case 30:
              n &&
                r !== null &&
                ((n = Ci(r.memoizedProps, r.stateNode)),
                (a = t.memoizedProps),
                (a = Ti(a.default, a.update)),
                a !== `none` && Gl(r, n, a, (r.memoizedState = []), !0));
              break;
            default:
              if (a & 1024) throw Error(i(163));
          }
          if (((r = t.sibling), r !== null)) {
            ((r.return = t.return), (cu = r));
            break;
          }
          cu = t.return;
        }
      }
      function hu(e, t, n) {
        var r = n.flags;
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            (Fu(e, n), r & 4 && xl(5, n));
            break;
          case 1:
            if ((Fu(e, n), r & 4)) {
              if (((e = n.stateNode), t === null))
                try {
                  e.componentDidMount();
                } catch (e) {
                  Z(n, n.return, e);
                }
              else {
                var i = Sc(n.type, t.memoizedProps);
                t = t.memoizedState;
                try {
                  e.componentDidUpdate(
                    i,
                    t,
                    e.__reactInternalSnapshotBeforeUpdate,
                  );
                } catch (e) {
                  Z(n, n.return, e);
                }
              }
            }
            (r & 64 && Cl(n), r & 512 && Tl(n, n.return));
            break;
          case 3:
            if ((Fu(e, n), r & 64 && ((e = n.updateQueue), e !== null))) {
              if (((t = null), n.child !== null))
                switch (n.child.tag) {
                  case 27:
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
              try {
                wo(e, t);
              } catch (e) {
                Z(n, n.return, e);
              }
            }
            break;
          case 27:
            t === null && r & 4 && Rl(n);
          case 26:
          case 5:
            (Fu(e, n),
              t === null && r & 4 && Ml(n),
              r & 512 && Tl(n, n.return));
            break;
          case 12:
            Fu(e, n);
            break;
          case 31:
            (Fu(e, n), r & 4 && wu(e, n));
            break;
          case 13:
            (Fu(e, n),
              r & 4 && Tu(e, n),
              r & 64 &&
                ((e = n.memoizedState),
                e !== null &&
                  ((e = e.dehydrated),
                  e !== null && ((n = _f.bind(null, n)), cm(e, n)))));
            break;
          case 22:
            if (((r = n.memoizedState !== null || iu), !r)) {
              var a = (t !== null && t.memoizedState !== null) || G;
              ((t = iu),
                (i = G),
                (iu = r),
                (G = a) && !i
                  ? ((r = 2), n.subtreeFlags & 8772 && (r |= 1), Lu(e, n, r))
                  : Fu(e, n),
                (iu = t),
                (G = i));
            }
            break;
          case 30:
            (Fu(e, n), r & 512 && Tl(n, n.return));
            break;
          case 7:
            r & 512 && Tl(n, n.return);
          default:
            Fu(e, n);
        }
      }
      function gu(e, t) {
        for (e = e.child; e !== null;) (_u(e, t), (e = e.sibling));
      }
      function _u(e, t) {
        switch (e.tag) {
          case 5:
          case 26:
            try {
              var n = e.stateNode;
              if (t) {
                var r = n.style;
                typeof r.setProperty == `function`
                  ? r.setProperty(`display`, `none`, `important`)
                  : (r.display = `none`);
              } else {
                var i = e.stateNode,
                  a = e.memoizedProps.style,
                  o =
                    a != null && a.hasOwnProperty(`display`) ? a.display : null;
                i.style.display =
                  o == null || typeof o == `boolean` ? `` : (`` + o).trim();
              }
            } catch (t) {
              Z(e, e.return, t);
            }
            vu(e, t);
            break;
          case 6:
            try {
              ((e.stateNode.nodeValue = t ? `` : e.memoizedProps), (j = !0));
            } catch (t) {
              Z(e, e.return, t);
            }
            break;
          case 18:
            try {
              var s = e.stateNode;
              t ? wp(s, !0) : wp(e.stateNode, !1);
            } catch (t) {
              Z(e, e.return, t);
            }
            break;
          case 22:
          case 23:
            e.memoizedState === null && gu(e, t);
            break;
          default:
            gu(e, t);
        }
      }
      function vu(e, t) {
        if (e.subtreeFlags & 67108864)
          for (e = e.child; e !== null;) {
            a: {
              var n = e,
                r = t;
              switch (n.tag) {
                case 4:
                  _u(n, r);
                  break a;
                case 22:
                  n.memoizedState === null && vu(n, r);
                  break a;
                default:
                  vu(n, r);
              }
            }
            e = e.sibling;
          }
      }
      function yu(e) {
        var t = e.alternate;
        (t !== null && ((e.alternate = null), yu(t)),
          (e.child = null),
          (e.deletions = null),
          (e.sibling = null),
          e.tag === 5 && ((t = e.stateNode), t !== null && zt(t)),
          (e.stateNode = null),
          (e.return = null),
          (e.dependencies = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.stateNode = null),
          (e.updateQueue = null));
      }
      var bu = null,
        xu = !1;
      function Su(e, t, n) {
        for (n = n.child; n !== null;) (Cu(e, t, n), (n = n.sibling));
      }
      function Cu(e, t, n) {
        if (it && typeof it.onCommitFiberUnmount == `function`)
          try {
            it.onCommitFiberUnmount(rt, n);
          } catch {}
        switch (n.tag) {
          case 26:
            (G || El(n, t),
              Su(e, t, n),
              n.memoizedState
                ? n.memoizedState.count--
                : n.stateNode &&
                  !G &&
                  ((n = n.stateNode), n.parentNode.removeChild(n)));
            break;
          case 27:
            (G || El(n, t), kl(n));
            var r = bu,
              i = xu;
            (Sp(n.type) && ((bu = n.stateNode), (xu = !1)),
              Su(e, t, n),
              gm(n.stateNode, n.type, n.memoizedProps),
              (bu = r),
              (xu = i));
            break;
          case 5:
            (G || El(n, t), kl(n));
          case 6:
            if (
              (n.tag === 6 && kl(n),
              (r = bu),
              (i = xu),
              (bu = null),
              Su(e, t, n),
              (bu = r),
              (xu = i),
              bu !== null)
            ) {
              if (xu)
                try {
                  ((bu.nodeType === 9
                    ? bu.body
                    : bu.nodeName === `HTML`
                      ? bu.ownerDocument.body
                      : bu
                  ).removeChild(n.stateNode),
                    (j = !0));
                } catch (e) {
                  Z(n, t, e);
                }
              else
                try {
                  (bu.removeChild(n.stateNode), (j = !0));
                } catch (e) {
                  Z(n, t, e);
                }
            }
            break;
          case 18:
            bu !== null &&
              (xu
                ? ((e = bu),
                  Cp(
                    e.nodeType === 9
                      ? e.body
                      : e.nodeName === `HTML`
                        ? e.ownerDocument.body
                        : e,
                    n.stateNode,
                  ),
                  Hh(e))
                : Cp(bu, n.stateNode));
            break;
          case 4:
            ((r = bu),
              (i = xu),
              (bu = n.stateNode.containerInfo),
              (xu = !0),
              Su(e, t, n),
              (bu = r),
              (xu = i));
            break;
          case 0:
          case 11:
          case 14:
          case 15:
            (Sl(2, n, t), G || Sl(4, n, t), Su(e, t, n));
            break;
          case 1:
            (G ||
              (El(n, t),
              (r = n.stateNode),
              typeof r.componentWillUnmount == `function` && wl(n, t, r)),
              Su(e, t, n));
            break;
          case 21:
            Su(e, t, n);
            break;
          case 22:
            ((G = (r = G) || n.memoizedState !== null), Su(e, t, n), (G = r));
            break;
          case 30:
            (El(n, t), Su(e, t, n));
            break;
          case 7:
            (G || El(n, t), Su(e, t, n));
            break;
          default:
            Su(e, t, n);
        }
      }
      function wu(e, t) {
        if (
          t.memoizedState === null &&
          ((e = t.alternate), e !== null && ((e = e.memoizedState), e !== null))
        ) {
          e = e.dehydrated;
          try {
            Hh(e);
          } catch (e) {
            Z(t, t.return, e);
          }
        }
      }
      function Tu(e, t) {
        if (
          t.memoizedState === null &&
          ((e = t.alternate),
          e !== null &&
            ((e = e.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)))
        )
          try {
            Hh(e);
          } catch (e) {
            Z(t, t.return, e);
          }
      }
      function Eu(e) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            var t = e.stateNode;
            return (t === null && (t = e.stateNode = new su()), t);
          case 22:
            return (
              (e = e.stateNode),
              (t = e._retryCache),
              t === null && (t = e._retryCache = new su()),
              t
            );
          default:
            throw Error(i(435, e.tag));
        }
      }
      function Du(e, t) {
        var n = Eu(e);
        t.forEach(function (t) {
          if (!n.has(t)) {
            n.add(t);
            var r = vf.bind(null, e, t);
            t.then(r, r);
          }
        });
      }
      function Ou(e, t, n) {
        var r = t.deletions;
        if (r !== null)
          for (var a = 0; a < r.length; a++) {
            var o = r[a],
              s = e,
              c = t,
              l = c;
            a: for (; l !== null;) {
              switch (l.tag) {
                case 27:
                  if (Sp(l.type)) {
                    ((bu = l.stateNode), (xu = !1));
                    break a;
                  }
                  break;
                case 5:
                  ((bu = l.stateNode), (xu = !1));
                  break a;
                case 3:
                case 4:
                  ((bu = l.stateNode.containerInfo), (xu = !0));
                  break a;
              }
              l = l.return;
            }
            if (bu === null) throw Error(i(160));
            (Cu(s, c, o),
              (bu = null),
              (xu = !1),
              (s = o.alternate),
              s !== null && (s.return = null),
              (o.return = null));
          }
        if (t.subtreeFlags & 13886)
          for (t = t.child; t !== null;) (Au(t, e, n), (t = t.sibling));
      }
      var ku = null;
      function Au(e, t, n) {
        var r = e.alternate,
          a = e.flags;
        switch (e.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
            if (
              a & 4 &&
              ((r = e.updateQueue),
              (r = r === null ? null : r.events),
              r !== null)
            )
              for (var o = 0; o < r.length; o++) {
                var s = r[o];
                s.ref.impl = s.nextImpl;
              }
            (Ou(t, e, n),
              ju(e),
              a & 4 && (Sl(3, e, e.return), xl(3, e), Sl(5, e, e.return)));
            break;
          case 1:
            (Ou(t, e, n),
              ju(e),
              a & 512 && (G || r === null || El(r, r.return)),
              a & 64 &&
                iu &&
                ((e = e.updateQueue),
                e !== null &&
                  ((t = e.callbacks),
                  t !== null &&
                    ((n = e.shared.hiddenCallbacks),
                    (e.shared.hiddenCallbacks =
                      n === null ? t : n.concat(t))))));
            break;
          case 26:
            if (
              ((o = ku),
              Ou(t, e, n),
              ju(e),
              a & 512 && (G || r === null || El(r, r.return)),
              a & 4)
            ) {
              if (
                ((a = r === null ? null : r.memoizedState),
                (n = e.memoizedState),
                r === null)
              ) {
                if (n === null) {
                  if (e.stateNode === null) {
                    if (iu)
                      e.stateNode = fp(
                        e.type,
                        e.memoizedProps,
                        t.containerInfo,
                        e,
                      );
                    else {
                      a: {
                        ((t = e.type),
                          (n = e.memoizedProps),
                          (a = o.ownerDocument || o));
                        b: switch (t) {
                          case `title`:
                            ((r = a.getElementsByTagName(`title`)[0]),
                              (!r ||
                                r[Lt] ||
                                r[At] ||
                                r.namespaceURI ===
                                  `http://www.w3.org/2000/svg` ||
                                r.hasAttribute(`itemprop`)) &&
                                ((r = a.createElement(t)),
                                a.head.insertBefore(
                                  r,
                                  a.querySelector(`head > title`),
                                )),
                              np(r, t, n),
                              (r[At] = e),
                              Wt(r),
                              (t = r));
                            break a;
                          case `link`:
                            if (
                              (o = Gm(`link`, `href`, a).get(
                                t + (n.href || ``),
                              ))
                            ) {
                              for (s = 0; s < o.length; s++)
                                if (
                                  ((r = o[s]),
                                  r.getAttribute(`href`) ===
                                    (n.href == null || n.href === ``
                                      ? null
                                      : n.href) &&
                                    r.getAttribute(`rel`) ===
                                      (n.rel == null ? null : n.rel) &&
                                    r.getAttribute(`title`) ===
                                      (n.title == null ? null : n.title) &&
                                    r.getAttribute(`crossorigin`) ===
                                      (n.crossOrigin == null
                                        ? null
                                        : n.crossOrigin))
                                ) {
                                  o.splice(s, 1);
                                  break b;
                                }
                            }
                            ((r = a.createElement(t)),
                              np(r, t, n),
                              a.head.appendChild(r));
                            break;
                          case `meta`:
                            if (
                              (o = Gm(`meta`, `content`, a).get(
                                t + (n.content || ``),
                              ))
                            ) {
                              for (s = 0; s < o.length; s++)
                                if (
                                  ((r = o[s]),
                                  r.getAttribute(`content`) ===
                                    (n.content == null
                                      ? null
                                      : `` + n.content) &&
                                    r.getAttribute(`name`) ===
                                      (n.name == null ? null : n.name) &&
                                    r.getAttribute(`property`) ===
                                      (n.property == null
                                        ? null
                                        : n.property) &&
                                    r.getAttribute(`http-equiv`) ===
                                      (n.httpEquiv == null
                                        ? null
                                        : n.httpEquiv) &&
                                    r.getAttribute(`charset`) ===
                                      (n.charSet == null ? null : n.charSet))
                                ) {
                                  o.splice(s, 1);
                                  break b;
                                }
                            }
                            ((r = a.createElement(t)),
                              np(r, t, n),
                              a.head.appendChild(r));
                            break;
                          default:
                            throw Error(i(468, t));
                        }
                        ((r[At] = e), Wt(r), (t = r));
                      }
                      e.stateNode = t;
                    }
                  } else iu || Km(o, e.type, e.stateNode);
                } else e.stateNode = Bm(o, n, e.memoizedProps);
              } else
                a === n
                  ? n === null &&
                    e.stateNode !== null &&
                    Nl(e, e.memoizedProps, r.memoizedProps)
                  : (a === null
                      ? ((t = r.stateNode),
                        t === null || G || t.parentNode.removeChild(t))
                      : a.count--,
                    n === null
                      ? iu || Km(o, e.type, e.stateNode)
                      : Bm(o, n, e.memoizedProps));
            }
            break;
          case 27:
            (Ou(t, e, n),
              ju(e),
              a & 512 && (G || r === null || El(r, r.return)),
              r !== null && a & 4 && Nl(e, e.memoizedProps, r.memoizedProps));
            break;
          case 5:
            if (
              ((o = au),
              (au = !1),
              Ou(t, e, n),
              (au = o),
              ju(e),
              a & 512 && (G || r === null || El(r, r.return)),
              e.flags & 32)
            ) {
              t = e.stateNode;
              try {
                (vn(t, ``), (j = !0));
              } catch (t) {
                Z(e, e.return, t);
              }
            }
            (a & 4 &&
              e.stateNode != null &&
              ((t = e.memoizedProps),
              Nl(e, t, r === null ? t : r.memoizedProps)),
              a & 1024 && (ou = !0));
            break;
          case 6:
            if ((Ou(t, e, n), ju(e), a & 4)) {
              if (e.stateNode === null) throw Error(i(162));
              ((t = e.memoizedProps), (n = e.stateNode));
              try {
                ((n.nodeValue = t), (j = !0));
              } catch (t) {
                Z(e, e.return, t);
              }
            }
            break;
          case 3:
            if (
              ((j = !1),
              (Wm = null),
              (o = ku),
              (ku = bm(t.containerInfo)),
              Ou(t, e, n),
              (ku = o),
              ju(e),
              a & 4 && r !== null && r.memoizedState.isDehydrated)
            )
              try {
                Hh(t.containerInfo);
              } catch (t) {
                Z(e, e.return, t);
              }
            (ou && ((ou = !1), Mu(e)), (j = !1));
            break;
          case 4:
            ((a = au),
              (au = iu),
              (r = en()),
              (o = ku),
              (ku = bm(e.stateNode.containerInfo)),
              Ou(t, e, n),
              ju(e),
              (ku = o),
              j && uu && (du = !0),
              (j = r),
              (au = a));
            break;
          case 12:
            (Ou(t, e, n), ju(e));
            break;
          case 31:
            (Ou(t, e, n),
              ju(e),
              a & 4 &&
                ((t = e.updateQueue),
                t !== null && ((e.updateQueue = null), Du(e, t))));
            break;
          case 13:
            (Ou(t, e, n),
              ju(e),
              e.child.flags & 8192 &&
                (e.memoizedState !== null) !=
                  (r !== null && r.memoizedState !== null) &&
                (md = Je()),
              a & 4 &&
                ((t = e.updateQueue),
                t !== null && ((e.updateQueue = null), Du(e, t))));
            break;
          case 22:
            ((o = e.memoizedState !== null),
              (s = r !== null && r.memoizedState !== null));
            var c = iu,
              l = G,
              u = au;
            ((iu = c || o),
              (au = u || o),
              (G = l || s),
              Ou(t, e, n),
              (G = l),
              (au = u),
              (iu = c),
              ju(e),
              a & 8192 &&
                ((t = e.stateNode),
                (t._visibility = o ? t._visibility & -2 : t._visibility | 1),
                !o ||
                  r === null ||
                  s ||
                  iu ||
                  G ||
                  ((t = s || G),
                  (n = iu),
                  (r = G),
                  (iu = o || iu),
                  (G = t),
                  Iu(e, 2),
                  (iu = n),
                  (G = r)),
                (!o && au) || gu(e, o)),
              a & 4 &&
                ((t = e.updateQueue),
                t !== null &&
                  ((n = t.retryQueue),
                  n !== null && ((t.retryQueue = null), Du(e, n)))));
            break;
          case 19:
            (Ou(t, e, n),
              ju(e),
              a & 4 &&
                ((t = e.updateQueue),
                t !== null && ((e.updateQueue = null), Du(e, t))));
            break;
          case 30:
            (a & 512 && (G || r === null || El(r, r.return)),
              (a = en()),
              (o = uu),
              (s = (n & 335544064) === n),
              (c = e.memoizedProps),
              (uu = s && Ti(c.default, c.update) !== `none`),
              Ou(t, e, n),
              ju(e),
              s && r !== null && j && (e.flags |= 4),
              (uu = o),
              (j = a));
            break;
          case 21:
            break;
          case 7:
            (a & 512 && (G || r === null || El(r, r.return)),
              r && r.stateNode !== null && (r.stateNode._fragmentFiber = e));
          default:
            (Ou(t, e, n), ju(e));
        }
      }
      function ju(e) {
        var t = e.flags;
        if (t & 2) {
          try {
            for (var n, r = e.return; r !== null;) {
              if (Pl(r)) {
                n = r;
                break;
              }
              r = r.return;
            }
            r = null;
            for (var a = e.return; a !== null;) {
              if (jl(a)) {
                var o = a.stateNode;
                r === null ? (r = [o]) : r.push(o);
              }
              if (Al(a)) break;
              a = a.return;
            }
            var s = r;
            if (n == null) throw Error(i(160));
            switch (n.tag) {
              case 27:
                var c = n.stateNode;
                Ll(e, Fl(e), c, s);
                break;
              case 5:
                var l = n.stateNode;
                (n.flags & 32 && (vn(l, ``), (n.flags &= -33)),
                  Ll(e, Fl(e), l, s));
                break;
              case 3:
              case 4:
                var u = n.stateNode.containerInfo;
                Il(e, Fl(e), u, s);
                break;
              default:
                throw Error(i(161));
            }
          } catch (t) {
            Z(e, e.return, t);
          }
          e.flags &= -3;
        }
        t & 4096 && (e.flags &= -4097);
      }
      function Mu(e) {
        if (e.subtreeFlags & 1024)
          for (e = e.child; e !== null;) {
            var t = e;
            (Mu(t),
              t.tag === 5 &&
                t.flags & 1024 &&
                ((t = t.stateNode), (gh = !0), t.reset(), (gh = !1)),
              (e = e.sibling));
          }
      }
      function Nu(e, t) {
        if (t.subtreeFlags & 9270)
          for (t = t.child; t !== null;) (Pu(t, e), (t = t.sibling));
        else ru(t, !1);
      }
      function Pu(e, t) {
        var n = e.alternate;
        if (n === null) Yl(e, !1);
        else
          switch (e.tag) {
            case 3:
              if (((fu = lu = !1), Ul(), Nu(t, e), !lu && !du)) {
                if (((e = Hl), e !== null))
                  for (var r = 0; r < e.length; r += 3) {
                    n = e[r];
                    var i = e[r + 1];
                    (Ep(n, e[r + 2]),
                      (n = n.ownerDocument.documentElement),
                      n !== null &&
                        n.animate(
                          { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                          {
                            duration: 0,
                            fill: `forwards`,
                            pseudoElement: `::view-transition-group(` + i + `)`,
                          },
                        ));
                  }
                ((e = t.containerInfo),
                  (e =
                    e.nodeType === 9
                      ? e.documentElement
                      : e.ownerDocument.documentElement),
                  e !== null &&
                    e.style.viewTransitionName === `` &&
                    ((e.style.viewTransitionName = `none`),
                    e.animate(
                      { opacity: [0, 0], pointerEvents: [`none`, `none`] },
                      {
                        duration: 0,
                        fill: `forwards`,
                        pseudoElement: `::view-transition-group(root)`,
                      },
                    ),
                    e.animate(
                      { width: [0, 0], height: [0, 0] },
                      {
                        duration: 0,
                        fill: `forwards`,
                        pseudoElement: `::view-transition`,
                      },
                    )),
                  (fu = !0));
              }
              Hl = null;
              break;
            case 5:
              Nu(t, e);
              break;
            case 4:
              ((r = lu), (lu = !1), Nu(t, e), lu && (du = !0), (lu = r));
              break;
            case 22:
              e.memoizedState === null &&
                (n.memoizedState === null ? Nu(t, e) : Yl(e, !1));
              break;
            case 30:
              ((r = lu), (i = Ul()), (lu = !1), Nu(t, e), lu && (e.flags |= 4));
              var a = e.memoizedProps,
                o = e.stateNode;
              ((t = Ci(a, o)), (o = Ci(n.memoizedProps, o)));
              var s = Ti(a.default, a.update);
              (s === `none`
                ? (t = !1)
                : ((a = n.memoizedState),
                  (n.memoizedState = null),
                  (n = e.child),
                  (Wl = 0),
                  (t = nu(e, n, t, o, s, a, !0)),
                  Wl !== (a === null ? 0 : a.length) && (e.flags |= 32)),
                e.flags & 4 && t
                  ? (Nd(e, e.memoizedProps.onUpdate), (Hl = i))
                  : i !== null && (i.push.apply(i, Hl), (Hl = i)),
                (lu = e.flags & 32 ? !0 : r));
              break;
            default:
              Nu(t, e);
          }
      }
      function Fu(e, t) {
        if (t.subtreeFlags & 8772)
          for (t = t.child; t !== null;)
            (hu(e, t.alternate, t), (t = t.sibling));
      }
      function Iu(e, t) {
        for (e = e.child; e !== null;) {
          var n = e,
            r = t;
          switch (n.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              (Sl(4, n, n.return), Iu(n, r));
              break;
            case 1:
              El(n, n.return);
              var i = n.stateNode;
              (typeof i.componentWillUnmount == `function` &&
                wl(n, n.return, i),
                Iu(n, r));
              break;
            case 27:
              r & 2 && gm(n.stateNode, n.type, n.memoizedProps);
            case 5:
              (El(n, n.return),
                (n.tag !== 5 && n.tag !== 27) || kl(n),
                Iu(n, r));
              break;
            case 6:
              kl(n);
              break;
            case 26:
              (El(n, n.return),
                (i = n.stateNode),
                n.memoizedState !== null ||
                  i === null ||
                  G ||
                  i.parentNode.removeChild(i),
                Iu(n, r));
              break;
            case 22:
              n.memoizedState === null && Iu(n, r);
              break;
            case 30:
              (El(n, n.return), Iu(n, r));
              break;
            case 7:
              El(n, n.return);
            default:
              Iu(n, r);
          }
          e = e.sibling;
        }
      }
      function Lu(e, t, n) {
        for (n = t.subtreeFlags & 8772 ? n : n & -2, t = t.child; t !== null;) {
          var r = t.alternate,
            i = e,
            a = t,
            o = a.flags,
            s = !!(n & 1);
          switch (a.tag) {
            case 0:
            case 11:
            case 15:
              (Lu(i, a, n), xl(4, a));
              break;
            case 1:
              if (
                (Lu(i, a, n),
                (r = a),
                (i = r.stateNode),
                typeof i.componentDidMount == `function`)
              )
                try {
                  i.componentDidMount();
                } catch (e) {
                  Z(r, r.return, e);
                }
              if (((r = a), (i = r.updateQueue), i !== null)) {
                var c = r.stateNode;
                try {
                  var l = i.shared.hiddenCallbacks;
                  if (l !== null)
                    for (
                      i.shared.hiddenCallbacks = null, i = 0;
                      i < l.length;
                      i++
                    )
                      Co(l[i], c);
                } catch (e) {
                  Z(r, r.return, e);
                }
              }
              (s && o & 64 && Cl(a), Tl(a, a.return));
              break;
            case 27:
              n & 2 && Rl(a);
            case 5:
              ((a.tag !== 5 && a.tag !== 27) || Ol(a),
                Lu(i, a, n),
                s && r === null && o & 4 && Ml(a),
                Tl(a, a.return));
              break;
            case 6:
              Ol(a);
              break;
            case 26:
              ((c = a.stateNode),
                a.memoizedState !== null ||
                  c === null ||
                  iu ||
                  Km(bm(c.ownerDocument), a.type, c),
                Lu(i, a, n),
                s && r === null && o & 4 && Ml(a),
                Tl(a, a.return));
              break;
            case 12:
              Lu(i, a, n);
              break;
            case 31:
              (Lu(i, a, n), s && o & 4 && wu(i, a));
              break;
            case 13:
              (Lu(i, a, n), s && o & 4 && Tu(i, a));
              break;
            case 22:
              (a.memoizedState === null && Lu(i, a, n), Tl(a, a.return));
              break;
            case 30:
              (Lu(i, a, n), Tl(a, a.return));
              break;
            case 7:
              Tl(a, a.return);
            default:
              Lu(i, a, n);
          }
          t = t.sibling;
        }
      }
      function Ru(e, t) {
        var n = null;
        (e !== null &&
          e.memoizedState !== null &&
          e.memoizedState.cachePool !== null &&
          (n = e.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== n && (e != null && e.refCount++, n != null && Na(n)));
      }
      function zu(e, t) {
        ((e = null),
          t.alternate !== null && (e = t.alternate.memoizedState.cache),
          (t = t.memoizedState.cache),
          t !== e && (t.refCount++, e != null && Na(e)));
      }
      function Bu(e, t, n, r) {
        var i = (n & 335544064) === n;
        if (t.subtreeFlags & (i ? 10262 : 10256))
          for (t = t.child; t !== null;) (Vu(e, t, n, r), (t = t.sibling));
        else i && tu(t);
      }
      function Vu(e, t, n, r) {
        var i = (n & 335544064) === n;
        i &&
          t.alternate === null &&
          t.return !== null &&
          t.return.alternate !== null &&
          eu(t);
        var a = t.flags;
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            (Bu(e, t, n, r), a & 2048 && xl(9, t));
            break;
          case 1:
            Bu(e, t, n, r);
            break;
          case 3:
            (Bu(e, t, n, r),
              i &&
                fu &&
                ((e = e.containerInfo),
                (e =
                  e.nodeType === 9
                    ? e.body
                    : e.nodeName === `HTML`
                      ? e.ownerDocument.body
                      : e),
                e.style.viewTransitionName === `root` &&
                  (e.style.viewTransitionName = ``),
                (e = e.ownerDocument.documentElement),
                e !== null &&
                  e.style.viewTransitionName === `none` &&
                  (e.style.viewTransitionName = ``)),
              a & 2048 &&
                ((a = null),
                t.alternate !== null && (a = t.alternate.memoizedState.cache),
                (t = t.memoizedState.cache),
                t !== a && (t.refCount++, a != null && Na(a))));
            break;
          case 12:
            if (a & 2048) {
              (Bu(e, t, n, r), (a = t.stateNode));
              try {
                var o = t.memoizedProps,
                  s = o.id,
                  c = o.onPostCommit;
                typeof c == `function` &&
                  c(
                    s,
                    t.alternate === null ? `mount` : `update`,
                    a.passiveEffectDuration,
                    -0,
                  );
              } catch (e) {
                Z(t, t.return, e);
              }
            } else Bu(e, t, n, r);
            break;
          case 31:
            Bu(e, t, n, r);
            break;
          case 13:
            Bu(e, t, n, r);
            break;
          case 23:
            break;
          case 22:
            ((o = t.stateNode),
              (s = t.alternate),
              t.memoizedState === null
                ? (i && s !== null && s.memoizedState !== null && eu(t),
                  o._visibility & 2
                    ? Bu(e, t, n, r)
                    : ((o._visibility |= 2),
                      Hu(e, t, n, r, !!(t.subtreeFlags & 10256) || !1)))
                : (i && s !== null && s.memoizedState === null && eu(s),
                  o._visibility & 2 ? Bu(e, t, n, r) : Uu(e, t)),
              a & 2048 && Ru(s, t));
            break;
          case 24:
            (Bu(e, t, n, r), a & 2048 && zu(t.alternate, t));
            break;
          case 30:
            (i &&
              ((a = t.alternate),
              a !== null && (ql(a.child, !0), ql(t.child, !0))),
              Bu(e, t, n, r));
            break;
          default:
            Bu(e, t, n, r);
        }
      }
      function Hu(e, t, n, r, i) {
        for (i &&= !!(t.subtreeFlags & 10256) || !1, t = t.child; t !== null;) {
          var a = e,
            o = t,
            s = n,
            c = r,
            l = o.flags;
          switch (o.tag) {
            case 0:
            case 11:
            case 15:
              (Hu(a, o, s, c, i), xl(8, o));
              break;
            case 23:
              break;
            case 22:
              var u = o.stateNode;
              (o.memoizedState === null
                ? ((u._visibility |= 2), Hu(a, o, s, c, i))
                : u._visibility & 2
                  ? Hu(a, o, s, c, i)
                  : Uu(a, o),
                i && l & 2048 && Ru(o.alternate, o));
              break;
            case 24:
              (Hu(a, o, s, c, i), i && l & 2048 && zu(o.alternate, o));
              break;
            default:
              Hu(a, o, s, c, i);
          }
          t = t.sibling;
        }
      }
      function Uu(e, t) {
        if (t.subtreeFlags & 10256)
          for (t = t.child; t !== null;) {
            var n = e,
              r = t,
              i = r.flags;
            switch (r.tag) {
              case 22:
                (Uu(n, r), i & 2048 && Ru(r.alternate, r));
                break;
              case 24:
                (Uu(n, r), i & 2048 && zu(r.alternate, r));
                break;
              default:
                Uu(n, r);
            }
            t = t.sibling;
          }
      }
      var Wu = 8192;
      function Gu(e, t, n) {
        if (e.subtreeFlags & Wu)
          for (e = e.child; e !== null;) (Ku(e, t, n), (e = e.sibling));
      }
      function Ku(e, t, n) {
        switch (e.tag) {
          case 26:
            (Gu(e, t, n),
              e.flags & Wu &&
                (e.memoizedState === null
                  ? ((e = e.stateNode), (t & 335544128) === t && Zm(n, e))
                  : Qm(n, ku, e.memoizedState, e.memoizedProps)));
            break;
          case 5:
            (Gu(e, t, n),
              e.flags & Wu &&
                ((e = e.stateNode), (t & 335544128) === t && Zm(n, e)));
            break;
          case 3:
          case 4:
            var r = ku;
            ((ku = bm(e.stateNode.containerInfo)), Gu(e, t, n), (ku = r));
            break;
          case 22:
            e.memoizedState === null &&
              ((r = e.alternate),
              r !== null && r.memoizedState !== null
                ? ((r = Wu), (Wu = 16777216), Gu(e, t, n), (Wu = r))
                : Gu(e, t, n));
            break;
          case 30:
            if (
              (e.flags & Wu) !== 0 &&
              ((r = e.memoizedProps.name), r != null && r !== `auto`)
            ) {
              var i = e.stateNode;
              ((i.paired = null),
                Bl === null && (Bl = new Map()),
                Bl.set(r, i));
            }
            Gu(e, t, n);
            break;
          default:
            Gu(e, t, n);
        }
      }
      function qu(e) {
        var t = e.alternate;
        if (t !== null && ((e = t.child), e !== null)) {
          t.child = null;
          do ((t = e.sibling), (e.sibling = null), (e = t));
          while (e !== null);
        }
      }
      function Ju(e) {
        var t = e.deletions;
        if (e.flags & 16) {
          if (t !== null)
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              ((cu = r), Zu(r, e));
            }
          qu(e);
        }
        if (e.subtreeFlags & 10256)
          for (e = e.child; e !== null;) (Yu(e), (e = e.sibling));
      }
      function Yu(e) {
        switch (e.tag) {
          case 0:
          case 11:
          case 15:
            (Ju(e), e.flags & 2048 && Sl(9, e, e.return));
            break;
          case 3:
            Ju(e);
            break;
          case 12:
            Ju(e);
            break;
          case 22:
            var t = e.stateNode;
            e.memoizedState !== null &&
            t._visibility & 2 &&
            (e.return === null || e.return.tag !== 13)
              ? ((t._visibility &= -3), Xu(e))
              : Ju(e);
            break;
          default:
            Ju(e);
        }
      }
      function Xu(e) {
        var t = e.deletions;
        if (e.flags & 16) {
          if (t !== null)
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              ((cu = r), Zu(r, e));
            }
          qu(e);
        }
        for (e = e.child; e !== null;) {
          switch (((t = e), t.tag)) {
            case 0:
            case 11:
            case 15:
              (Sl(8, t, t.return), Xu(t));
              break;
            case 22:
              ((n = t.stateNode),
                n._visibility & 2 && ((n._visibility &= -3), Xu(t)));
              break;
            default:
              Xu(t);
          }
          e = e.sibling;
        }
      }
      function Zu(e, t) {
        for (; cu !== null;) {
          var n = cu;
          switch (n.tag) {
            case 0:
            case 11:
            case 15:
              Sl(8, n, t);
              break;
            case 23:
            case 22:
              if (
                n.memoizedState !== null &&
                n.memoizedState.cachePool !== null
              ) {
                var r = n.memoizedState.cachePool.pool;
                r != null && r.refCount++;
              }
              break;
            case 24:
              Na(n.memoizedState.cache);
          }
          if (((r = n.child), r !== null)) ((r.return = n), (cu = r));
          else
            a: for (n = e; cu !== null;) {
              r = cu;
              var i = r.sibling,
                a = r.return;
              if ((yu(r), r === n)) {
                cu = null;
                break a;
              }
              if (i !== null) {
                ((i.return = a), (cu = i));
                break a;
              }
              cu = a;
            }
        }
      }
      var Qu = {
          getCacheForType: function (e) {
            var t = Ea(ja),
              n = t.data.get(e);
            return (n === void 0 && ((n = e()), t.data.set(e, n)), n);
          },
          cacheSignal: function () {
            return Ea(ja).controller.signal;
          },
        },
        $u = typeof WeakMap == `function` ? WeakMap : Map,
        K = 0,
        q = null,
        J = null,
        Y = 0,
        X = 0,
        ed = null,
        td = !1,
        nd = !1,
        rd = !1,
        id = 0,
        ad = 0,
        od = 0,
        sd = 0,
        cd = 0,
        ld = 0,
        ud = 0,
        dd = null,
        fd = null,
        pd = !1,
        md = 0,
        hd = 0,
        gd = 1 / 0,
        _d = null,
        vd = null,
        yd = 0,
        bd = null,
        xd = null,
        Sd = 0,
        Cd = 0,
        wd = null,
        Td = null,
        Ed = null,
        Dd = null,
        Od = null,
        kd = 0,
        Ad = null;
      function jd() {
        return K & 2 && Y !== 0 ? Y & -Y : O.T === null ? Dt() : Pf();
      }
      function Md() {
        if (ld === 0) {
          if (!(Y & 536870912) || F) {
            var e = dt;
            ((dt <<= 1), !(dt & 3932160) && (dt = 262144), (ld = e));
          } else ld = 536870912;
        }
        return ((e = Ao.current), e !== null && (e.flags |= 32), ld);
      }
      function Nd(e, t) {
        if (t != null) {
          var n = e.stateNode,
            r = n.ref;
          (r === null && (r = n.ref = Pp(Ci(e.memoizedProps, n))),
            Dd === null && (Dd = []),
            Dd.push(t.bind(null, r)));
        }
      }
      function Pd(e, t, n) {
        (((e === q && (X === 2 || X === 9)) ||
          e.cancelPendingCommit !== null) &&
          (Vd(e, 0), Rd(e, Y, ld, !1)),
          bt(e, n),
          (K & 2 && e === q) ||
            (e === q && (!(K & 2) && (sd |= n), ad === 4 && Rd(e, Y, ld, !1)),
            Ef(e)));
      }
      function Fd(e, t, n) {
        if (K & 6) throw Error(i(327));
        var r = (!n && !(t & 127) && (t & e.expiredLanes) === 0) || ht(e, t),
          a = r ? Yd(e, t) : qd(e, t, !0),
          o = r;
        do {
          if (a === 0) {
            nd && !r && Rd(e, t, 0, !1);
            break;
          }
          if (((n = e.current.alternate), o && !Ld(n)))
            ((a = qd(e, t, !1)), (o = !1));
          else {
            if (a === 2) {
              if (((o = t), e.errorRecoveryDisabledLanes & o)) var s = 0;
              else
                ((s = e.pendingLanes & -536870913),
                  (s = s === 0 ? (s & 536870912 ? 536870912 : 0) : s));
              if (s !== 0) {
                t = s;
                a: {
                  var c = e;
                  a = dd;
                  var l = c.current.memoizedState.isDehydrated;
                  if (
                    (l && (Vd(c, s).flags |= 256),
                    (s = qd(c, s, !1)),
                    s !== 2 && s !== 6)
                  ) {
                    if (rd && !l) {
                      ((c.errorRecoveryDisabledLanes |= o), (sd |= o), (a = 4));
                      break a;
                    }
                    ((o = fd),
                      (fd = a),
                      o !== null &&
                        (fd === null ? (fd = o) : fd.push.apply(fd, o)));
                  }
                  a = s;
                }
                if (((o = !1), a !== 2)) continue;
              }
            }
            if (a === 1) {
              (Vd(e, 0), Rd(e, t, 0, !0));
              break;
            }
            a: {
              switch (((r = e), (o = a), o)) {
                case 0:
                case 1:
                  throw Error(i(345));
                case 4:
                  if ((t & 4194048) !== t && (t & 62914560) !== t) break;
                case 6:
                  Rd(r, t, ld, !td);
                  break a;
                case 2:
                  fd = null;
                  break;
                case 3:
                case 5:
                  break;
                default:
                  throw Error(i(329));
              }
              if ((t & 62914560) === t && ((a = md + 300 - Je()), 10 < a)) {
                if ((Rd(r, t, ld, !td), mt(r, 0, !0) !== 0)) break a;
                ((Sd = t),
                  (r.timeoutHandle = gp(
                    Id.bind(
                      null,
                      r,
                      n,
                      fd,
                      _d,
                      pd,
                      t,
                      ld,
                      sd,
                      ud,
                      td,
                      o,
                      `Throttled`,
                      -0,
                      0,
                    ),
                    a,
                  )));
                break a;
              }
              Id(r, n, fd, _d, pd, t, ld, sd, ud, td, o, null, -0, 0);
            }
            break;
          }
        } while (1);
        Ef(e);
      }
      function Id(e, t, n, r, i, a, o, s, c, l, u, d, f, p) {
        e.timeoutHandle = -1;
        var m = t.subtreeFlags,
          h = (a & 335544064) === a;
        ((d = null),
          (h || m & 8192 || (m & 16785408) == 16785408) &&
          ((d = {
            stylesheets: null,
            count: 0,
            imgCount: 0,
            imgBytes: 0,
            suspenseyImages: [],
            waitingForImages: !0,
            waitingForViewTransition: !1,
            unsuspend: En,
          }),
          (Bl = null),
          Ku(t, a, d),
          h &&
            ((m = d),
            (h = e.containerInfo),
            (h = (h.nodeType === 9 ? h : h.ownerDocument)
              .__reactViewTransition),
            h != null &&
              (m.count++,
              (m.waitingForViewTransition = !0),
              (m = nh.bind(m)),
              h.finished.then(m, m))),
          (m =
            (a & 62914560) === a
              ? md - Je()
              : (a & 4194048) === a
                ? hd - Je()
                : 0),
          (m = eh(d, m)),
          m !== null)
            ? ((Sd = a),
              (e.cancelPendingCommit = m(
                nf.bind(null, e, t, a, n, r, i, o, s, c, l, u, d, null, f, p),
              )),
              Rd(e, a, o, !l))
            : nf(e, t, a, n, r, i, o, s, c, l, u, d));
      }
      function Ld(e) {
        for (var t = e; ;) {
          var n = t.tag;
          if (
            (n === 0 || n === 11 || n === 15) &&
            t.flags & 16384 &&
            ((n = t.updateQueue), n !== null && ((n = n.stores), n !== null))
          )
            for (var r = 0; r < n.length; r++) {
              var i = n[r],
                a = i.getSnapshot;
              i = i.value;
              try {
                if (!qr(a(), i)) return !1;
              } catch {
                return !1;
              }
            }
          if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            ((n.return = t), (t = n));
          else {
            if (t === e) break;
            for (; t.sibling === null;) {
              if (t.return === null || t.return === e) return !0;
              t = t.return;
            }
            ((t.sibling.return = t.return), (t = t.sibling));
          }
        }
        return !0;
      }
      function Rd(e, t, n, r) {
        ((t = gt(e, t)),
          (t &= ~cd),
          (t &= ~sd),
          (e.suspendedLanes |= t),
          (e.pingedLanes &= ~t),
          r && (e.warmLanes |= t),
          (r = e.expirationTimes));
        for (var i = t; 0 < i;) {
          var a = 31 - ot(i),
            o = 1 << a;
          ((r[a] = -1), (i &= ~o));
        }
        n !== 0 && St(e, n, t);
      }
      function zd() {
        return K & 6 ? !0 : (Df(0, !1), !1);
      }
      function Bd() {
        if (J !== null) {
          if (X === 0) var e = J.return;
          else
            ((e = J), (ya = va = null), is(e), (io = null), (ao = 0), (e = J));
          for (; e !== null;) (bl(e.alternate, e), (e = e.return));
          J = null;
        }
      }
      function Vd(e, t) {
        var n = e.timeoutHandle;
        return (
          n !== -1 && ((e.timeoutHandle = -1), _p(n)),
          (n = e.cancelPendingCommit),
          n !== null && ((e.cancelPendingCommit = null), n()),
          (Sd = 0),
          Bd(),
          (q = e),
          (J = n = Bi(e.current, null)),
          (Y = t),
          (X = 0),
          (ed = null),
          (td = !1),
          (nd = ht(e, t)),
          (rd = !1),
          (ud = ld = cd = sd = od = ad = 0),
          (fd = dd = null),
          (pd = !1),
          (id = gt(e, t)),
          Ai(),
          n
        );
      }
      function Hd(e, t) {
        ((H = null),
          (O.H = mc),
          t === Ja || t === Xa
            ? ((t = no()), (X = 3))
            : t === Ya
              ? ((t = no()), (X = 4))
              : (X =
                  t === Mc
                    ? 8
                    : typeof t == `object` && t && typeof t.then == `function`
                      ? 6
                      : 1),
          (ed = t),
          J === null && ((ad = 1), Ec(e, Ji(t, e.current))));
      }
      function Ud() {
        var e = Ao.current;
        return e === null
          ? !0
          : (Y & 4194048) === Y
            ? jo === null
            : (Y & 62914560) === Y || Y & 536870912
              ? e === jo
              : !1;
      }
      function Wd() {
        var e = O.H;
        return ((O.H = mc), e === null ? mc : e);
      }
      function Gd() {
        var e = O.A;
        return ((O.A = Qu), e);
      }
      function Kd() {
        ((ad = 4),
          td || ((Y & 4194048) !== Y && Ao.current !== null) || (nd = !0),
          (!(od & 134217727) && !(sd & 134217727)) ||
            q === null ||
            Rd(q, Y, ld, !1));
      }
      function qd(e, t, n) {
        var r = K;
        K |= 2;
        var i = Wd(),
          a = Gd();
        ((q !== e || Y !== t) && ((_d = null), Vd(e, t)), (t = !1));
        var o = ad;
        a: do
          try {
            if (X !== 0 && J !== null) {
              var s = J,
                c = ed;
              switch (X) {
                case 8:
                  (Bd(), (o = 6));
                  break a;
                case 3:
                case 2:
                case 9:
                case 6:
                  Ao.current === null && (t = !0);
                  var l = X;
                  if (((X = 0), (ed = null), $d(e, s, c, l), n && nd)) {
                    o = 0;
                    break a;
                  }
                  break;
                default:
                  ((l = X), (X = 0), (ed = null), $d(e, s, c, l));
              }
            }
            (Jd(), (o = ad));
            break;
          } catch (t) {
            Hd(e, t);
          }
        while (1);
        return (
          t && e.shellSuspendCounter++,
          (ya = va = null),
          (K = r),
          (O.H = i),
          (O.A = a),
          J === null && ((q = null), (Y = 0), Ai()),
          o
        );
      }
      function Jd() {
        for (; J !== null;) Zd(J);
      }
      function Yd(e, t) {
        var n = K;
        K |= 2;
        var r = Wd(),
          a = Gd();
        q !== e || Y !== t
          ? ((_d = null), (gd = Je() + 500), Vd(e, t))
          : (nd = ht(e, t));
        a: do
          try {
            if (X !== 0 && J !== null) {
              t = J;
              var o = ed;
              b: switch (X) {
                case 1:
                  ((X = 0), (ed = null), $d(e, t, o, 1));
                  break;
                case 2:
                case 9:
                  if (Qa(o)) {
                    ((X = 0), (ed = null), Qd(t));
                    break;
                  }
                  ((t = function () {
                    ((X !== 2 && X !== 9) || q !== e || (X = 7), Ef(e));
                  }),
                    o.then(t, t));
                  break a;
                case 3:
                  X = 7;
                  break a;
                case 4:
                  X = 5;
                  break a;
                case 7:
                  Qa(o)
                    ? ((X = 0), (ed = null), Qd(t))
                    : ((X = 0), (ed = null), $d(e, t, o, 7));
                  break;
                case 5:
                  var s = null;
                  switch (J.tag) {
                    case 26:
                      s = J.memoizedState;
                    case 5:
                    case 27:
                      var c = J;
                      if (s ? Ym(s) : c.stateNode.complete) {
                        ((X = 0), (ed = null));
                        var l = c.sibling;
                        if (l !== null) J = l;
                        else {
                          var u = c.return;
                          u === null ? (J = null) : ((J = u), ef(u));
                        }
                        break b;
                      }
                  }
                  ((X = 0), (ed = null), $d(e, t, o, 5));
                  break;
                case 6:
                  ((X = 0), (ed = null), $d(e, t, o, 6));
                  break;
                case 8:
                  (Bd(), (ad = 6));
                  break a;
                default:
                  throw Error(i(462));
              }
            }
            Xd();
            break;
          } catch (t) {
            Hd(e, t);
          }
        while (1);
        return (
          (ya = va = null),
          (O.H = r),
          (O.A = a),
          (K = n),
          J === null ? ((q = null), (Y = 0), Ai(), ad) : 0
        );
      }
      function Xd() {
        for (; J !== null && !Ke();) Zd(J);
      }
      function Zd(e) {
        var t = fl(e.alternate, e, id);
        ((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (J = t));
      }
      function Qd(e) {
        var t = e,
          n = t.alternate;
        switch (t.tag) {
          case 15:
          case 0:
            t = Kc(n, t, t.pendingProps, t.type, void 0, Y);
            break;
          case 11:
            t = Kc(n, t, t.pendingProps, t.type.render, t.ref, Y);
            break;
          case 5:
            is(t);
            var r = t;
            r === la &&
              (F
                ? (pa(r),
                  r.tag === 5 && r.stateNode != null && (P = r.stateNode))
                : (pa(r), (F = !0)));
          default:
            (bl(n, t), (t = J = Vi(t, id)), (t = fl(n, t, id)));
        }
        ((e.memoizedProps = e.pendingProps), t === null ? ef(e) : (J = t));
      }
      function $d(e, t, n, r) {
        ((ya = va = null), is(t), (io = null), (ao = 0));
        var i = t.return;
        try {
          if (jc(e, i, t, n, Y)) {
            ((ad = 1), Ec(e, Ji(n, e.current)), (J = null));
            return;
          }
        } catch (t) {
          if (i !== null) throw ((J = i), t);
          ((ad = 1), Ec(e, Ji(n, e.current)), (J = null));
          return;
        }
        t.flags & 32768
          ? (F || r === 1
              ? (e = !0)
              : nd || Y & 536870912
                ? (e = !1)
                : ((td = e = !0),
                  (r === 2 || r === 9 || r === 3 || r === 6) &&
                    ((r = Ao.current),
                    r !== null && r.tag === 13 && (r.flags |= 16384))),
            tf(t, e))
          : ef(t);
      }
      function ef(e) {
        var t = e;
        do {
          if (t.flags & 32768) {
            tf(t, td);
            return;
          }
          e = t.return;
          var n = vl(t.alternate, t, id);
          if (n !== null) {
            J = n;
            return;
          }
          if (((t = t.sibling), t !== null)) {
            J = t;
            return;
          }
          J = t = e;
        } while (t !== null);
        ad === 0 && (ad = 5);
      }
      function tf(e, t) {
        do {
          var n = yl(e.alternate, e);
          if (n !== null) {
            ((n.flags &= 32767), (J = n));
            return;
          }
          if (
            ((n = e.return),
            n !== null &&
              ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
            !t && ((e = e.sibling), e !== null))
          ) {
            J = e;
            return;
          }
          J = e = n;
        } while (e !== null);
        ((ad = 6), (J = null));
      }
      function nf(e, t, n, r, a, o, s, c, l, u, d, f) {
        e.cancelPendingCommit = null;
        do df();
        while (yd !== 0);
        if (K & 6) throw Error(i(327));
        if (t !== null) {
          if (t === e.current) throw Error(i(177));
          (e === q && ((J = q = null), (Y = 0)),
            (xd = t),
            (bd = e),
            (Sd = n),
            (wd = a),
            (Td = r),
            rf(e, t, n, s, c, l, f));
        }
      }
      function rf(e, t, n, r, i, a, o) {
        var s = t.lanes | t.childLanes;
        if (
          ((Cd = s),
          (s |= ki),
          xt(e, n, s, r, i, a),
          (Dd = null),
          (n & 335544064) === n
            ? ((Od = Ia(e)), (r = 10262))
            : ((Od = null), (r = 10256)),
          (t.subtreeFlags & r) !== 0 || (t.flags & r) !== 0
            ? ((e.callbackNode = null),
              (e.callbackPriority = 0),
              yf(Qe, function () {
                return (ff(), null);
              }))
            : ((e.callbackNode = null), (e.callbackPriority = 0)),
          (zl = !1),
          (r = !!(t.flags & 13878)),
          t.subtreeFlags & 13878 || r)
        ) {
          ((r = O.T), (O.T = null), (i = k.p), (k.p = 2), (a = K), (K |= 4));
          try {
            pu(e, t, n);
          } finally {
            ((K = a), (k.p = i), (O.T = r));
          }
        }
        ((yd = 1),
          zl
            ? (Ed = Mp(
                o,
                e.containerInfo,
                Od,
                sf,
                cf,
                of,
                lf,
                ff,
                af,
                null,
                null,
              ))
            : (sf(), cf(), lf()));
      }
      function af(e) {
        if (yd !== 0) {
          var t = bd.onRecoverableError;
          t(e, { componentStack: null });
        }
      }
      function of() {
        yd === 3 && ((yd = 0), Pu(xd, bd), (yd = 4));
      }
      function sf() {
        if (yd === 1) {
          yd = 0;
          var e = bd,
            t = xd,
            n = Sd,
            r = !!(t.flags & 13878);
          if (t.subtreeFlags & 13878 || r) {
            ((r = O.T), (O.T = null));
            var i = k.p;
            k.p = 2;
            var a = K;
            K |= 4;
            try {
              ((uu = du = !1), Au(t, e, n), (n = cp));
              var o = $r(e.containerInfo),
                s = n.focusedElem,
                c = n.selectionRange;
              if (
                o !== s &&
                s &&
                s.ownerDocument &&
                Qr(s.ownerDocument.documentElement, s)
              ) {
                if (c !== null && ei(s)) {
                  var l = c.start,
                    u = c.end;
                  if ((u === void 0 && (u = l), `selectionStart` in s))
                    ((s.selectionStart = l),
                      (s.selectionEnd = Math.min(u, s.value.length)));
                  else {
                    var d = s.ownerDocument || document,
                      f = (d && d.defaultView) || window;
                    if (f.getSelection) {
                      var p = f.getSelection(),
                        m = s.textContent.length,
                        h = Math.min(c.start, m),
                        g = c.end === void 0 ? h : Math.min(c.end, m);
                      !p.extend && h > g && ((o = g), (g = h), (h = o));
                      var _ = Zr(s, h),
                        v = Zr(s, g);
                      if (
                        _ &&
                        v &&
                        (p.rangeCount !== 1 ||
                          p.anchorNode !== _.node ||
                          p.anchorOffset !== _.offset ||
                          p.focusNode !== v.node ||
                          p.focusOffset !== v.offset)
                      ) {
                        var y = d.createRange();
                        (y.setStart(_.node, _.offset),
                          p.removeAllRanges(),
                          h > g
                            ? (p.addRange(y), p.extend(v.node, v.offset))
                            : (y.setEnd(v.node, v.offset), p.addRange(y)));
                      }
                    }
                  }
                }
                for (d = [], p = s; (p = p.parentNode);)
                  p.nodeType === 1 &&
                    d.push({
                      element: p,
                      left: p.scrollLeft,
                      top: p.scrollTop,
                    });
                for (
                  typeof s.focus == `function` && s.focus(), s = 0;
                  s < d.length;
                  s++
                ) {
                  var b = d[s];
                  ((b.element.scrollLeft = b.left),
                    (b.element.scrollTop = b.top));
                }
              }
              ((gh = !!sp), (cp = sp = null));
            } finally {
              ((K = a), (k.p = i), (O.T = r));
            }
          }
          ((e.current = t), (yd = 2));
        }
      }
      function cf() {
        if (yd === 2) {
          yd = 0;
          var e = bd,
            t = xd,
            n = !!(t.flags & 8772);
          if (t.subtreeFlags & 8772 || n) {
            ((n = O.T), (O.T = null));
            var r = k.p;
            k.p = 2;
            var i = K;
            K |= 4;
            try {
              hu(e, t.alternate, t);
            } finally {
              ((K = i), (k.p = r), (O.T = n));
            }
          }
          yd = 3;
        }
      }
      function lf() {
        if (yd === 4 || yd === 3) {
          yd = 0;
          var e = Ed;
          ((Ed = null), qe());
          var t = bd,
            n = xd,
            r = Sd,
            i = Td,
            a = (r & 335544064) === r ? 10262 : 10256;
          if (
            ((n.subtreeFlags & a) !== 0 || (n.flags & a) !== 0
              ? (yd = 5)
              : ((yd = 0), (xd = bd = null), uf(t, t.pendingLanes)),
            (a = t.pendingLanes),
            a === 0 && (vd = null),
            Et(r),
            (n = n.stateNode),
            it && typeof it.onCommitFiberRoot == `function`)
          )
            try {
              it.onCommitFiberRoot(
                rt,
                n,
                void 0,
                (n.current.flags & 128) == 128,
              );
            } catch {}
          if (i !== null) {
            ((n = O.T), (a = k.p), (k.p = 2), (O.T = null));
            try {
              for (var o = t.onRecoverableError, s = 0; s < i.length; s++) {
                var c = i[s];
                o(c.value, { componentStack: c.stack });
              }
            } finally {
              ((O.T = n), (k.p = a));
            }
          }
          if (
            ((i = Dd),
            (o = Od),
            (Od = null),
            i !== null && ((Dd = null), o === null && (o = []), e !== null))
          )
            for (c = 0; c < i.length; c++)
              ((n = (0, i[c])(o)), n !== void 0 && e.finished.finally(n));
          (Sd & 3 && df(),
            Ef(t),
            (a = t.pendingLanes),
            r & 261930 && a & 42
              ? t === Ad
                ? kd++
                : ((kd = 0), (Ad = t))
              : ((kd = 0), (Ad = null)),
            Df(0, !1));
        }
      }
      function uf(e, t) {
        (e.pooledCacheLanes &= t) === 0 &&
          ((t = e.pooledCache), t != null && ((e.pooledCache = null), Na(t)));
      }
      function df() {
        return (
          Ed !== null && (Ed.skipTransition(), (Ed = null)),
          sf(),
          cf(),
          lf(),
          ff()
        );
      }
      function ff() {
        if (yd !== 5) return !1;
        var e = bd,
          t = Cd;
        Cd = 0;
        var n = Et(Sd),
          r = O.T,
          a = k.p;
        try {
          ((k.p = 32 > n ? 32 : n), (O.T = null), (n = wd), (wd = null));
          var o = bd,
            s = Sd;
          if (((yd = 0), (xd = bd = null), (Sd = 0), K & 6))
            throw Error(i(331));
          var c = K;
          if (
            ((K |= 4),
            Yu(o.current),
            Vu(o, o.current, s, n),
            (K = c),
            Df(0, !1),
            it && typeof it.onPostCommitFiberRoot == `function`)
          )
            try {
              it.onPostCommitFiberRoot(rt, o);
            } catch {}
          return !0;
        } finally {
          ((k.p = a), (O.T = r), uf(e, t));
        }
      }
      function pf(e, t, n) {
        ((t = Ji(n, t)),
          (t = Oc(e.stateNode, t, 2)),
          (e = _o(e, t, 2)),
          e !== null && (bt(e, 2), Ef(e)));
      }
      function Z(e, t, n) {
        if (e.tag === 3) pf(e, e, n);
        else
          for (; t !== null;) {
            if (t.tag === 3) {
              pf(t, e, n);
              break;
            }
            if (t.tag === 1) {
              var r = t.stateNode;
              if (
                typeof t.type.getDerivedStateFromError == `function` ||
                (typeof r.componentDidCatch == `function` &&
                  (vd === null || !vd.has(r)))
              ) {
                ((e = Ji(n, e)),
                  (n = kc(2)),
                  (r = _o(t, n, 2)),
                  r !== null && (Ac(n, r, t, e), bt(r, 2), Ef(r)));
                break;
              }
            }
            t = t.return;
          }
      }
      function mf(e, t, n) {
        var r = e.pingCache;
        if (r === null) {
          r = e.pingCache = new $u();
          var i = new Set();
          r.set(t, i);
        } else ((i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i)));
        i.has(n) ||
          ((rd = !0), i.add(n), (e = hf.bind(null, e, t, n)), t.then(e, e));
      }
      function hf(e, t, n) {
        var r = e.pingCache;
        (r !== null && r.delete(t),
          (e.pingedLanes |= e.suspendedLanes & n),
          (e.warmLanes &= ~n),
          q === e &&
            (Y & n) === n &&
            (ad === 4 || (ad === 3 && (Y & 62914560) === Y && 300 > Je() - md)
              ? K & 2
                ? (cd |= n)
                : Vd(e, 0)
              : (cd |= n),
            ud === Y && (ud = 0)),
          Ef(e));
      }
      function gf(e, t) {
        (t === 0 && (t = vt()),
          (e = Ni(e, t)),
          e !== null && (bt(e, t), Ef(e)));
      }
      function _f(e) {
        var t = e.memoizedState,
          n = 0;
        (t !== null && (n = t.retryLane), gf(e, n));
      }
      function vf(e, t) {
        var n = 0;
        switch (e.tag) {
          case 31:
          case 13:
            var r = e.stateNode,
              a = e.memoizedState;
            a !== null && (n = a.retryLane);
            break;
          case 19:
            r = e.stateNode;
            break;
          case 22:
            r = e.stateNode._retryCache;
            break;
          default:
            throw Error(i(314));
        }
        (r !== null && r.delete(t), gf(e, n));
      }
      function yf(e, t) {
        return We(e, t);
      }
      var bf = null,
        xf = null,
        Sf = !1,
        Cf = !1,
        wf = !1,
        Tf = 0;
      function Ef(e) {
        (e !== xf &&
          e.next === null &&
          (xf === null ? (bf = xf = e) : (xf = xf.next = e)),
          (Cf = !0),
          Sf || ((Sf = !0), Nf()));
      }
      function Df(e, t) {
        if (!wf && Cf) {
          wf = !0;
          do
            for (var n = !1, r = bf; r !== null;) {
              if (!t) {
                if (e !== 0) {
                  var i = r.pendingLanes;
                  if (i === 0) var a = 0;
                  else {
                    var o = r.suspendedLanes,
                      s = r.pingedLanes;
                    ((a = (1 << (31 - ot(42 | e) + 1)) - 1),
                      (a &= i & ~(o & ~s)),
                      (a =
                        a & 201326741 ? (a & 201326741) | 1 : a ? a | 2 : 0));
                  }
                  a !== 0 && ((n = !0), Mf(r, a));
                } else
                  ((a = Y),
                    (a = mt(
                      r,
                      r === q ? a : 0,
                      r.cancelPendingCommit !== null || r.timeoutHandle !== -1,
                    )),
                    !(a & 3) || ht(r, a) || ((n = !0), Mf(r, a)));
              }
              r = r.next;
            }
          while (n);
          wf = !1;
        }
      }
      function Of() {
        kf();
      }
      function kf() {
        Cf = Sf = !1;
        var e = 0;
        Tf !== 0 && hp() && (e = Tf);
        for (var t = Je(), n = null, r = bf; r !== null;) {
          var i = r.next,
            a = Af(r, t);
          (a === 0
            ? ((r.next = null),
              n === null ? (bf = i) : (n.next = i),
              i === null && (xf = n))
            : ((n = r), (e !== 0 || a & 3) && (Cf = !0)),
            (r = i));
        }
        ((yd !== 0 && yd !== 5) || Df(e, !1), Tf !== 0 && (Tf = 0));
      }
      function Af(e, t) {
        for (
          var n = e.suspendedLanes,
            r = e.pingedLanes,
            i = e.expirationTimes,
            a = e.pendingLanes & -62914561;
          0 < a;
        ) {
          var o = 31 - ot(a),
            s = 1 << o,
            c = i[o];
          (c === -1
            ? ((s & n) === 0 || (s & r) !== 0) && (i[o] = _t(s, t))
            : c <= t && (e.expiredLanes |= s),
            (a &= ~s));
        }
        if (
          ((t = q),
          (n = Y),
          (n = mt(
            e,
            e === t ? n : 0,
            e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
          )),
          (r = e.callbackNode),
          n === 0 ||
            (e === t && (X === 2 || X === 9)) ||
            e.cancelPendingCommit !== null)
        )
          return (
            r !== null && r !== null && Ge(r),
            (e.callbackNode = null),
            (e.callbackPriority = 0)
          );
        if (!(n & 3) || ht(e, n)) {
          if (((t = n & -n), t === e.callbackPriority)) return t;
          switch ((r !== null && Ge(r), Et(n))) {
            case 2:
            case 8:
              n = Ze;
              break;
            case 32:
              n = Qe;
              break;
            case 268435456:
              n = et;
              break;
            default:
              n = Qe;
          }
          return (
            (r = jf.bind(null, e)),
            (n = We(n, r)),
            (e.callbackPriority = t),
            (e.callbackNode = n),
            t
          );
        }
        return (
          r !== null && r !== null && Ge(r),
          (e.callbackPriority = 2),
          (e.callbackNode = null),
          2
        );
      }
      function jf(e, t) {
        if (yd !== 0 && yd !== 5)
          return ((e.callbackNode = null), (e.callbackPriority = 0), null);
        var n = e.callbackNode;
        if (df() && e.callbackNode !== n) return null;
        var r = Y;
        return (
          (r = mt(
            e,
            e === q ? r : 0,
            e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
          )),
          r === 0
            ? null
            : (Fd(e, r, t),
              Af(e, Je()),
              e.callbackNode != null && e.callbackNode === n
                ? jf.bind(null, e)
                : null)
        );
      }
      function Mf(e, t) {
        if (df()) return null;
        Fd(e, t, !0);
      }
      function Nf() {
        bp(function () {
          K & 6 ? We(Xe, Of) : kf();
        });
      }
      function Pf() {
        if (Tf === 0) {
          var e = za;
          (e === 0 && ((e = ut), (ut <<= 1), !(ut & 261888) && (ut = 256)),
            (Tf = e));
        }
        return Tf;
      }
      function Ff(e) {
        return e == null || typeof e == `symbol` || typeof e == `boolean`
          ? null
          : typeof e == `function`
            ? e
            : Tn(e);
      }
      function If(e, t, n, r, i) {
        if (t === `submit` && n && n.stateNode === i) {
          var a = Ff((i[jt] || null).action),
            o = r.submitter;
          o &&
            ((t = (t = o[jt] || null)
              ? Ff(t.formAction)
              : o.getAttribute(`formAction`)),
            t !== null && ((a = t), (o = null)));
          var s = new Kn(`action`, `action`, null, r, i);
          e.push({
            event: s,
            listeners: [
              {
                instance: null,
                listener: function () {
                  if (r.defaultPrevented) {
                    if (Tf !== 0) {
                      var e = new FormData(i, o);
                      ec(
                        n,
                        { pending: !0, data: e, method: i.method, action: a },
                        null,
                        e,
                      );
                    }
                  } else
                    typeof a == `function` &&
                      (s.preventDefault(),
                      (e = new FormData(i, o)),
                      ec(
                        n,
                        { pending: !0, data: e, method: i.method, action: a },
                        a,
                        e,
                      ));
                },
                currentTarget: i,
              },
            ],
          });
        }
      }
      for (var Lf = 0; Lf < bi.length; Lf++) {
        var Rf = bi[Lf];
        xi(Rf.toLowerCase(), `on` + (Rf[0].toUpperCase() + Rf.slice(1)));
      }
      (xi(fi, `onAnimationEnd`),
        xi(pi, `onAnimationIteration`),
        xi(mi, `onAnimationStart`),
        xi(`dblclick`, `onDoubleClick`),
        xi(`focusin`, `onFocus`),
        xi(`focusout`, `onBlur`),
        xi(hi, `onTransitionRun`),
        xi(gi, `onTransitionStart`),
        xi(_i, `onTransitionCancel`),
        xi(vi, `onTransitionEnd`),
        Yt(`onMouseEnter`, [`mouseout`, `mouseover`]),
        Yt(`onMouseLeave`, [`mouseout`, `mouseover`]),
        Yt(`onPointerEnter`, [`pointerout`, `pointerover`]),
        Yt(`onPointerLeave`, [`pointerout`, `pointerover`]),
        Jt(
          `onChange`,
          `change click focusin focusout input keydown keyup selectionchange`.split(
            ` `,
          ),
        ),
        Jt(
          `onSelect`,
          `focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(
            ` `,
          ),
        ),
        Jt(`onBeforeInput`, [
          `compositionend`,
          `keypress`,
          `textInput`,
          `paste`,
        ]),
        Jt(
          `onCompositionEnd`,
          `compositionend focusout keydown keypress keyup mousedown`.split(` `),
        ),
        Jt(
          `onCompositionStart`,
          `compositionstart focusout keydown keypress keyup mousedown`.split(
            ` `,
          ),
        ),
        Jt(
          `onCompositionUpdate`,
          `compositionupdate focusout keydown keypress keyup mousedown`.split(
            ` `,
          ),
        ));
      var zf =
          `abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(
            ` `,
          ),
        Bf = new Set(
          `beforetoggle cancel close invalid load scroll scrollend toggle`
            .split(` `)
            .concat(zf),
        );
      function Vf(e, t) {
        t = !!(t & 4);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            i = r.event;
          r = r.listeners;
          a: {
            var a = void 0;
            if (t)
              for (var o = r.length - 1; 0 <= o; o--) {
                var s = r[o],
                  c = s.instance,
                  l = s.currentTarget;
                if (((s = s.listener), c !== a && i.isPropagationStopped()))
                  break a;
                ((a = s), (i.currentTarget = l));
                try {
                  a(i);
                } catch (e) {
                  Ei(e);
                }
                ((i.currentTarget = null), (a = c));
              }
            else
              for (o = 0; o < r.length; o++) {
                if (
                  ((s = r[o]),
                  (c = s.instance),
                  (l = s.currentTarget),
                  (s = s.listener),
                  c !== a && i.isPropagationStopped())
                )
                  break a;
                ((a = s), (i.currentTarget = l));
                try {
                  a(i);
                } catch (e) {
                  Ei(e);
                }
                ((i.currentTarget = null), (a = c));
              }
          }
        }
      }
      function Q(e, t) {
        var n = t[Nt];
        n === void 0 && (n = t[Nt] = new Set());
        var r = e + `__bubble`;
        n.has(r) || (Gf(t, e, 2, !1), n.add(r));
      }
      function Hf(e, t, n) {
        var r = 0;
        (t && (r |= 4), Gf(n, e, r, t));
      }
      var Uf = `_reactListening` + Math.random().toString(36).slice(2);
      function Wf(e) {
        if (!e[Uf]) {
          ((e[Uf] = !0),
            Kt.forEach(function (t) {
              t !== `selectionchange` &&
                (Bf.has(t) || Hf(t, !1, e), Hf(t, !0, e));
            }));
          var t = e.nodeType === 9 ? e : e.ownerDocument;
          t === null || t[Uf] || ((t[Uf] = !0), Hf(`selectionchange`, !1, t));
        }
      }
      function Gf(e, t, n, r) {
        switch (Ch(t)) {
          case 2:
            var i = _h;
            break;
          case 8:
            i = vh;
            break;
          default:
            i = yh;
        }
        ((n = i.bind(null, t, n, e)),
          (i = void 0),
          !Fn ||
            (t !== `touchstart` && t !== `touchmove` && t !== `wheel`) ||
            (i = !0),
          r
            ? i === void 0
              ? e.addEventListener(t, n, !0)
              : e.addEventListener(t, n, { capture: !0, passive: i })
            : i === void 0
              ? e.addEventListener(t, n, !1)
              : e.addEventListener(t, n, { passive: i }));
      }
      function Kf(e, t, n, r, i) {
        var a = r;
        if (!(t & 1) && !(t & 2) && r !== null)
          a: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
              var c = r.stateNode.containerInfo;
              if (c === i) break;
              if (s === 4)
                for (s = r.return; s !== null;) {
                  var l = s.tag;
                  if ((l === 3 || l === 4) && s.stateNode.containerInfo === i)
                    return;
                  s = s.return;
                }
              for (; c !== null;) {
                if (((s = Bt(c)), s === null)) return;
                if (((l = s.tag), l === 5 || l === 6 || l === 26 || l === 27)) {
                  r = a = s;
                  continue a;
                }
                c = c.parentNode;
              }
            }
            r = r.return;
          }
        Mn(function () {
          var r = a,
            i = On(n),
            s = [];
          a: {
            var c = yi.get(e);
            if (c !== void 0) {
              var l = Kn,
                u = e;
              switch (e) {
                case `keypress`:
                  if (Vn(n) === 0) break a;
                case `keydown`:
                case `keyup`:
                  l = lr;
                  break;
                case `focusin`:
                  ((u = `focus`), (l = N));
                  break;
                case `focusout`:
                  ((u = `blur`), (l = N));
                  break;
                case `beforeblur`:
                case `afterblur`:
                  l = N;
                  break;
                case `click`:
                  if (n.button === 2) break a;
                case `auxclick`:
                case `dblclick`:
                case `mousedown`:
                case `mousemove`:
                case `mouseup`:
                case `mouseout`:
                case `mouseover`:
                case `contextmenu`:
                  l = $n;
                  break;
                case `drag`:
                case `dragend`:
                case `dragenter`:
                case `dragexit`:
                case `dragleave`:
                case `dragover`:
                case `dragstart`:
                case `drop`:
                  l = er;
                  break;
                case `touchcancel`:
                case `touchend`:
                case `touchmove`:
                case `touchstart`:
                  l = fr;
                  break;
                case fi:
                case pi:
                case mi:
                  l = tr;
                  break;
                case vi:
                  l = pr;
                  break;
                case `scroll`:
                case `scrollend`:
                  l = Jn;
                  break;
                case `wheel`:
                  l = mr;
                  break;
                case `copy`:
                case `cut`:
                case `paste`:
                  l = nr;
                  break;
                case `gotpointercapture`:
                case `lostpointercapture`:
                case `pointercancel`:
                case `pointerdown`:
                case `pointermove`:
                case `pointerout`:
                case `pointerover`:
                case `pointerup`:
                  l = ur;
                  break;
                case `submit`:
                  l = dr;
                  break;
                case `toggle`:
                case `beforetoggle`:
                  l = hr;
              }
              var d = !!(t & 4),
                f = !d && (e === `scroll` || e === `scrollend`),
                p = d ? (c === null ? null : c + `Capture`) : c;
              d = [];
              for (var m = r, h; m !== null;) {
                var g = m;
                if (
                  ((h = g.stateNode),
                  (g = g.tag),
                  (g !== 5 && g !== 26 && g !== 27) ||
                    h === null ||
                    p === null ||
                    ((g = Nn(m, p)), g != null && d.push(qf(m, g, h))),
                  f)
                )
                  break;
                m = m.return;
              }
              0 < d.length &&
                ((c = new l(c, u, null, n, i)),
                s.push({ event: c, listeners: d }));
            }
          }
          if (!(t & 7)) {
            a: {
              if (
                ((l = e === `mouseover` || e === `pointerover`),
                (c = e === `mouseout` || e === `pointerout`),
                l &&
                  n !== Dn &&
                  (u = n.relatedTarget || n.fromElement) &&
                  (Bt(u) || u[Mt]))
              )
                break a;
              (c || l) &&
                ((u =
                  i.window === i
                    ? i
                    : (l = i.ownerDocument)
                      ? l.defaultView || l.parentWindow
                      : window),
                c
                  ? ((l = n.relatedTarget || n.toElement),
                    (c = r),
                    (l = l ? Bt(l) : null),
                    l !== null &&
                      ((f = o(l)),
                      (d = l.tag),
                      l !== f || (d !== 5 && d !== 27 && d !== 6)) &&
                      (l = null))
                  : ((c = null), (l = r)),
                c !== l &&
                  ((d = $n),
                  (g = `onMouseLeave`),
                  (p = `onMouseEnter`),
                  (m = `mouse`),
                  (e === `pointerout` || e === `pointerover`) &&
                    ((d = ur),
                    (g = `onPointerLeave`),
                    (p = `onPointerEnter`),
                    (m = `pointer`)),
                  (f = c == null ? u : Ht(c)),
                  (h = l == null ? u : Ht(l)),
                  (u = new d(g, m + `leave`, c, n, i)),
                  (u.target = f),
                  (u.relatedTarget = h),
                  (g = null),
                  Bt(i) === r &&
                    ((d = new d(p, m + `enter`, l, n, i)),
                    (d.target = h),
                    (d.relatedTarget = f),
                    (g = d)),
                  (f = g),
                  (d = c && l ? E(c, l, Yf) : null),
                  c !== null && Xf(s, u, c, d, !1),
                  l !== null && f !== null && Xf(s, f, l, d, !0)));
            }
            a: {
              if (
                ((c = r ? Ht(r) : window),
                (l = c.nodeName && c.nodeName.toLowerCase()),
                l === `select` || (l === `input` && c.type === `file`))
              )
                var _ = Fr;
              else if (kr(c)) {
                if (Ir) _ = Gr;
                else {
                  _ = Ur;
                  var v = Hr;
                }
              } else
                ((l = c.nodeName),
                  !l ||
                  l.toLowerCase() !== `input` ||
                  (c.type !== `checkbox` && c.type !== `radio`)
                    ? r && Sn(r.elementType) && (_ = Fr)
                    : (_ = Wr));
              if ((_ &&= _(e, r))) {
                Ar(s, _, n, i);
                break a;
              }
              v && v(e, c, r);
            }
            switch (((v = r ? Ht(r) : window), e)) {
              case `focusin`:
                (kr(v) || v.contentEditable === `true`) &&
                  ((ni = v), (ri = r), (ii = null));
                break;
              case `focusout`:
                ii = ri = ni = null;
                break;
              case `mousedown`:
                ai = !0;
                break;
              case `contextmenu`:
              case `mouseup`:
              case `dragend`:
                ((ai = !1), oi(s, n, i));
                break;
              case `selectionchange`:
                if (ti) break;
              case `keydown`:
              case `keyup`:
                oi(s, n, i);
            }
            var y;
            if (_r)
              b: {
                switch (e) {
                  case `compositionstart`:
                    var b = `onCompositionStart`;
                    break b;
                  case `compositionend`:
                    b = `onCompositionEnd`;
                    break b;
                  case `compositionupdate`:
                    b = `onCompositionUpdate`;
                    break b;
                }
                b = void 0;
              }
            else
              Tr
                ? Cr(e, n) && (b = `onCompositionEnd`)
                : e === `keydown` &&
                  n.keyCode === 229 &&
                  (b = `onCompositionStart`);
            (b &&
              (br &&
                n.locale !== `ko` &&
                (Tr || b !== `onCompositionStart`
                  ? b === `onCompositionEnd` && Tr && (y = Bn())
                  : ((Ln = i),
                    (Rn = `value` in Ln ? Ln.value : Ln.textContent),
                    (Tr = !0))),
              (v = Jf(r, b)),
              0 < v.length &&
                ((b = new rr(b, e, null, n, i)),
                s.push({ event: b, listeners: v }),
                y ? (b.data = y) : ((y = wr(n)), y !== null && (b.data = y)))),
              (y = yr ? Er(e, n) : Dr(e, n)) &&
                ((b = Jf(r, `onBeforeInput`)),
                0 < b.length &&
                  ((v = new rr(`onBeforeInput`, `beforeinput`, null, n, i)),
                  s.push({ event: v, listeners: b }),
                  (v.data = y))),
              If(s, e, r, n, i));
          }
          Vf(s, t);
        });
      }
      function qf(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Jf(e, t) {
        for (var n = t + `Capture`, r = []; e !== null;) {
          var i = e,
            a = i.stateNode;
          if (
            ((i = i.tag),
            (i !== 5 && i !== 26 && i !== 27) ||
              a === null ||
              ((i = Nn(e, n)),
              i != null && r.unshift(qf(e, i, a)),
              (i = Nn(e, t)),
              i != null && r.push(qf(e, i, a))),
            e.tag === 3)
          )
            return r;
          e = e.return;
        }
        return [];
      }
      function Yf(e) {
        if (e === null) return null;
        do e = e.return;
        while (e && e.tag !== 5 && e.tag !== 27);
        return e || null;
      }
      function Xf(e, t, n, r, i) {
        for (var a = t._reactName, o = []; n !== null && n !== r;) {
          var s = n,
            c = s.alternate,
            l = s.stateNode;
          if (((s = s.tag), c !== null && c === r)) break;
          ((s !== 5 && s !== 26 && s !== 27) ||
            l === null ||
            ((c = l),
            i
              ? ((l = Nn(n, a)), l != null && o.unshift(qf(n, l, c)))
              : i || ((l = Nn(n, a)), l != null && o.push(qf(n, l, c)))),
            (n = n.return));
        }
        o.length !== 0 && e.push({ event: t, listeners: o });
      }
      var Zf = /\r\n?/g,
        Qf = /\u0000|\uFFFD/g;
      function $f(e) {
        return (typeof e == `string` ? e : `` + e)
          .replace(
            Zf,
            `
`,
          )
          .replace(Qf, ``);
      }
      function ep(e, t) {
        return ((t = $f(t)), $f(e) === t);
      }
      function $(e, t, n, r, a, o) {
        switch (n) {
          case `children`:
            if (typeof r == `string`)
              t === `body` || (t === `textarea` && r === ``) || vn(e, r);
            else if (typeof r == `number` || typeof r == `bigint`)
              t !== `body` && vn(e, `` + r);
            else return;
            break;
          case `className`:
            nn(e, `class`, r);
            break;
          case `tabIndex`:
            nn(e, `tabindex`, r);
            break;
          case `dir`:
          case `role`:
          case `viewBox`:
          case `width`:
          case `height`:
            nn(e, n, r);
            break;
          case `style`:
            xn(e, r, o);
            return;
          case `data`:
            if (t !== `object`) {
              nn(e, `data`, r);
              break;
            }
          case `src`:
          case `href`:
            if (
              (r === `` && (t !== `a` || n !== `href`)) ||
              r == null ||
              typeof r == `function` ||
              typeof r == `symbol` ||
              typeof r == `boolean`
            ) {
              e.removeAttribute(n);
              break;
            }
            ((r = Tn(r)), e.setAttribute(n, r));
            break;
          case `action`:
          case `formAction`:
            if (typeof r == `function`) {
              e.setAttribute(
                n,
                `javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`,
              );
              break;
            }
            if (
              (typeof o == `function` &&
                (n === `formAction`
                  ? (t !== `input` && $(e, t, `name`, a.name, a, null),
                    $(e, t, `formEncType`, a.formEncType, a, null),
                    $(e, t, `formMethod`, a.formMethod, a, null),
                    $(e, t, `formTarget`, a.formTarget, a, null))
                  : ($(e, t, `encType`, a.encType, a, null),
                    $(e, t, `method`, a.method, a, null),
                    $(e, t, `target`, a.target, a, null))),
              r == null || typeof r == `symbol` || typeof r == `boolean`)
            ) {
              e.removeAttribute(n);
              break;
            }
            ((r = Tn(r)), e.setAttribute(n, r));
            break;
          case `onClick`:
            r != null && (e.onclick = En);
            return;
          case `onScroll`:
            r != null && Q(`scroll`, e);
            return;
          case `onScrollEnd`:
            r != null && Q(`scrollend`, e);
            return;
          case `dangerouslySetInnerHTML`:
            if (r != null) {
              if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
              if (((n = r.__html), n != null)) {
                if (a.children != null) throw Error(i(60));
                o?.__html !== n && (e.innerHTML = n);
              }
            }
            break;
          case `multiple`:
            e.multiple = r && typeof r != `function` && typeof r != `symbol`;
            break;
          case `muted`:
            e.muted = r && typeof r != `function` && typeof r != `symbol`;
            break;
          case `suppressContentEditableWarning`:
          case `suppressHydrationWarning`:
          case `defaultValue`:
          case `defaultChecked`:
          case `innerHTML`:
          case `ref`:
            break;
          case `autoFocus`:
            break;
          case `xlinkHref`:
            if (
              r == null ||
              typeof r == `function` ||
              typeof r == `boolean` ||
              typeof r == `symbol`
            ) {
              e.removeAttribute(`xlink:href`);
              break;
            }
            ((n = Tn(r)),
              e.setAttributeNS(
                `http://www.w3.org/1999/xlink`,
                `xlink:href`,
                n,
              ));
            break;
          case `contentEditable`:
          case `spellCheck`:
          case `draggable`:
          case `value`:
          case `autoReverse`:
          case `externalResourcesRequired`:
          case `focusable`:
          case `preserveAlpha`:
            r != null && typeof r != `function` && typeof r != `symbol`
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
            break;
          case `inert`:
          case `allowFullScreen`:
          case `async`:
          case `autoPlay`:
          case `controls`:
          case `credentialless`:
          case `default`:
          case `defer`:
          case `disabled`:
          case `disablePictureInPicture`:
          case `disableRemotePlayback`:
          case `formNoValidate`:
          case `hidden`:
          case `loop`:
          case `noModule`:
          case `noValidate`:
          case `open`:
          case `playsInline`:
          case `readOnly`:
          case `required`:
          case `reversed`:
          case `scoped`:
          case `seamless`:
          case `itemScope`:
            r && typeof r != `function` && typeof r != `symbol`
              ? e.setAttribute(n, ``)
              : e.removeAttribute(n);
            break;
          case `capture`:
          case `download`:
            !0 === r
              ? e.setAttribute(n, ``)
              : !1 !== r &&
                  r != null &&
                  typeof r != `function` &&
                  typeof r != `symbol`
                ? e.setAttribute(n, r)
                : e.removeAttribute(n);
            break;
          case `cols`:
          case `rows`:
          case `size`:
          case `span`:
            r != null &&
            typeof r != `function` &&
            typeof r != `symbol` &&
            !isNaN(r) &&
            1 <= r
              ? e.setAttribute(n, r)
              : e.removeAttribute(n);
            break;
          case `rowSpan`:
          case `start`:
            r == null ||
            typeof r == `function` ||
            typeof r == `symbol` ||
            isNaN(r)
              ? e.removeAttribute(n)
              : e.setAttribute(n, r);
            break;
          case `popover`:
            (Q(`beforetoggle`, e), Q(`toggle`, e), tn(e, `popover`, r));
            break;
          case `xlinkActuate`:
            rn(e, `http://www.w3.org/1999/xlink`, `xlink:actuate`, r);
            break;
          case `xlinkArcrole`:
            rn(e, `http://www.w3.org/1999/xlink`, `xlink:arcrole`, r);
            break;
          case `xlinkRole`:
            rn(e, `http://www.w3.org/1999/xlink`, `xlink:role`, r);
            break;
          case `xlinkShow`:
            rn(e, `http://www.w3.org/1999/xlink`, `xlink:show`, r);
            break;
          case `xlinkTitle`:
            rn(e, `http://www.w3.org/1999/xlink`, `xlink:title`, r);
            break;
          case `xlinkType`:
            rn(e, `http://www.w3.org/1999/xlink`, `xlink:type`, r);
            break;
          case `xmlBase`:
            rn(e, `http://www.w3.org/XML/1998/namespace`, `xml:base`, r);
            break;
          case `xmlLang`:
            rn(e, `http://www.w3.org/XML/1998/namespace`, `xml:lang`, r);
            break;
          case `xmlSpace`:
            rn(e, `http://www.w3.org/XML/1998/namespace`, `xml:space`, r);
            break;
          case `is`:
            tn(e, `is`, r);
            break;
          case `innerText`:
          case `textContent`:
            return;
          default:
            if (
              !(2 < n.length) ||
              (n[0] !== `o` && n[0] !== `O`) ||
              (n[1] !== `n` && n[1] !== `N`)
            )
              ((n = Cn.get(n) || n), tn(e, n, r));
            else return;
        }
        j = !0;
      }
      function tp(e, t, n, r, a, o) {
        switch (n) {
          case `style`:
            xn(e, r, o);
            return;
          case `dangerouslySetInnerHTML`:
            if (r != null) {
              if (typeof r != `object` || !(`__html` in r)) throw Error(i(61));
              if (((n = r.__html), n != null)) {
                if (a.children != null) throw Error(i(60));
                o?.__html !== n && (e.innerHTML = n);
              }
            }
            break;
          case `children`:
            if (typeof r == `string`) vn(e, r);
            else if (typeof r == `number` || typeof r == `bigint`)
              vn(e, `` + r);
            else return;
            break;
          case `onScroll`:
            r != null && Q(`scroll`, e);
            return;
          case `onScrollEnd`:
            r != null && Q(`scrollend`, e);
            return;
          case `onClick`:
            r != null && (e.onclick = En);
            return;
          case `suppressContentEditableWarning`:
          case `suppressHydrationWarning`:
          case `innerHTML`:
          case `ref`:
            return;
          case `innerText`:
          case `textContent`:
            return;
          default:
            if (!qt.hasOwnProperty(n))
              a: {
                if (
                  n[0] === `o` &&
                  n[1] === `n` &&
                  ((a = n.endsWith(`Capture`)),
                  (o = n.slice(2, a ? n.length - 7 : void 0)),
                  (t = e[jt] || null),
                  (t = t == null ? null : t[n]),
                  typeof t == `function` && e.removeEventListener(o, t, a),
                  typeof r == `function`)
                ) {
                  (typeof t != `function` &&
                    t !== null &&
                    (n in e
                      ? (e[n] = null)
                      : e.hasAttribute(n) && e.removeAttribute(n)),
                    e.addEventListener(o, r, a));
                  break a;
                }
                ((j = !0),
                  n in e
                    ? (e[n] = r)
                    : !0 === r
                      ? e.setAttribute(n, ``)
                      : tn(e, n, r));
              }
            return;
        }
        j = !0;
      }
      function np(e, t, n) {
        switch (t) {
          case `div`:
          case `span`:
          case `svg`:
          case `path`:
          case `a`:
          case `g`:
          case `p`:
          case `li`:
            break;
          case `img`:
            (Q(`error`, e), Q(`load`, e));
            var r = !1,
              a = !1,
              o;
            for (o in n)
              if (n.hasOwnProperty(o)) {
                var s = n[o];
                if (s != null)
                  switch (o) {
                    case `src`:
                      r = !0;
                      break;
                    case `srcSet`:
                      a = !0;
                      break;
                    case `children`:
                    case `dangerouslySetInnerHTML`:
                      throw Error(i(137, t));
                    default:
                      $(e, t, o, s, n, null);
                  }
              }
            (a && $(e, t, `srcSet`, n.srcSet, n, null),
              r && $(e, t, `src`, n.src, n, null));
            return;
          case `input`:
            Q(`invalid`, e);
            var c = (o = s = a = null),
              l = null,
              u = null;
            for (r in n)
              if (n.hasOwnProperty(r)) {
                var d = n[r];
                if (d != null)
                  switch (r) {
                    case `name`:
                      a = d;
                      break;
                    case `type`:
                      s = d;
                      break;
                    case `checked`:
                      l = d;
                      break;
                    case `defaultChecked`:
                      u = d;
                      break;
                    case `value`:
                      o = d;
                      break;
                    case `defaultValue`:
                      c = d;
                      break;
                    case `children`:
                    case `dangerouslySetInnerHTML`:
                      if (d != null) throw Error(i(137, t));
                      break;
                    default:
                      $(e, t, r, d, n, null);
                  }
              }
            pn(e, o, c, l, u, s, a, !1);
            return;
          case `select`:
            for (a in (Q(`invalid`, e), (r = s = o = null), n))
              if (n.hasOwnProperty(a) && ((c = n[a]), c != null))
                switch (a) {
                  case `value`:
                    o = c;
                    break;
                  case `defaultValue`:
                    s = c;
                    break;
                  case `multiple`:
                    r = c;
                  default:
                    $(e, t, a, c, n, null);
                }
            ((t = o),
              (n = s),
              (e.multiple = !!r),
              t == null ? n != null && hn(e, !!r, n, !0) : hn(e, !!r, t, !1));
            return;
          case `textarea`:
            for (s in (Q(`invalid`, e), (o = a = r = null), n))
              if (n.hasOwnProperty(s) && ((c = n[s]), c != null))
                switch (s) {
                  case `value`:
                    r = c;
                    break;
                  case `defaultValue`:
                    a = c;
                    break;
                  case `children`:
                    o = c;
                    break;
                  case `dangerouslySetInnerHTML`:
                    if (c != null) throw Error(i(91));
                    break;
                  default:
                    $(e, t, s, c, n, null);
                }
            _n(e, r, a, o);
            return;
          case `option`:
            for (l in n)
              if (n.hasOwnProperty(l) && ((r = n[l]), r != null))
                switch (l) {
                  case `selected`:
                    e.selected =
                      r && typeof r != `function` && typeof r != `symbol`;
                    break;
                  default:
                    $(e, t, l, r, n, null);
                }
            return;
          case `dialog`:
            (Q(`beforetoggle`, e),
              Q(`toggle`, e),
              Q(`cancel`, e),
              Q(`close`, e));
            break;
          case `iframe`:
          case `object`:
            Q(`load`, e);
            break;
          case `video`:
          case `audio`:
            for (r = 0; r < zf.length; r++) Q(zf[r], e);
            break;
          case `image`:
            (Q(`error`, e), Q(`load`, e));
            break;
          case `details`:
            Q(`toggle`, e);
            break;
          case `embed`:
          case `source`:
          case `link`:
            (Q(`error`, e), Q(`load`, e));
          case `area`:
          case `base`:
          case `br`:
          case `col`:
          case `hr`:
          case `keygen`:
          case `meta`:
          case `param`:
          case `track`:
          case `wbr`:
          case `menuitem`:
            for (u in n)
              if (n.hasOwnProperty(u) && ((r = n[u]), r != null))
                switch (u) {
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    throw Error(i(137, t));
                  default:
                    $(e, t, u, r, n, null);
                }
            return;
          default:
            if (Sn(t)) {
              for (d in n)
                n.hasOwnProperty(d) &&
                  ((r = n[d]), r !== void 0 && tp(e, t, d, r, n, void 0));
              return;
            }
        }
        for (c in n)
          n.hasOwnProperty(c) &&
            ((r = n[c]), r != null && $(e, t, c, r, n, null));
      }
      var rp = {};
      function ip(e, t, n, r) {
        switch (t) {
          case `div`:
          case `span`:
          case `svg`:
          case `path`:
          case `a`:
          case `g`:
          case `p`:
          case `li`:
            break;
          case `input`:
            var a = null,
              o = null,
              s = null,
              c = null,
              l = null,
              u = null,
              d = null;
            for (m in n) {
              var f = n[m];
              if (n.hasOwnProperty(m) && f != null)
                switch (m) {
                  case `checked`:
                    break;
                  case `value`:
                    break;
                  case `defaultValue`:
                    l = f;
                  default:
                    r.hasOwnProperty(m) || $(e, t, m, null, r, f);
                }
            }
            for (var p in r) {
              var m = r[p];
              if (((f = n[p]), r.hasOwnProperty(p) && (m != null || f != null)))
                switch (p) {
                  case `type`:
                    (m !== f && (j = !0), (o = m));
                    break;
                  case `name`:
                    (m !== f && (j = !0), (a = m));
                    break;
                  case `checked`:
                    (m !== f && (j = !0), (u = m));
                    break;
                  case `defaultChecked`:
                    (m !== f && (j = !0), (d = m));
                    break;
                  case `value`:
                    (m !== f && (j = !0), (s = m));
                    break;
                  case `defaultValue`:
                    (m !== f && (j = !0), (c = m));
                    break;
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (m != null) throw Error(i(137, t));
                    break;
                  default:
                    m !== f && $(e, t, p, m, r, f);
                }
            }
            fn(e, s, c, l, u, d, o, a);
            return;
          case `select`:
            for (o in ((m = s = c = p = null), n))
              if (((l = n[o]), n.hasOwnProperty(o) && l != null))
                switch (o) {
                  case `value`:
                    break;
                  case `multiple`:
                    m = l;
                  default:
                    r.hasOwnProperty(o) || $(e, t, o, null, r, l);
                }
            for (a in r)
              if (
                ((o = r[a]),
                (l = n[a]),
                r.hasOwnProperty(a) && (o != null || l != null))
              )
                switch (a) {
                  case `value`:
                    (o !== l && (j = !0), (p = o));
                    break;
                  case `defaultValue`:
                    (o !== l && (j = !0), (c = o));
                    break;
                  case `multiple`:
                    (o !== l && (j = !0), (s = o));
                  default:
                    o !== l && $(e, t, a, o, r, l);
                }
            ((t = c),
              (n = s),
              (r = m),
              p == null
                ? !!r != !!n &&
                  (t == null ? hn(e, !!n, n ? [] : ``, !1) : hn(e, !!n, t, !0))
                : hn(e, !!n, p, !1));
            return;
          case `textarea`:
            for (c in ((m = p = null), n))
              if (
                ((a = n[c]),
                n.hasOwnProperty(c) && a != null && !r.hasOwnProperty(c))
              )
                switch (c) {
                  case `value`:
                    break;
                  case `children`:
                    break;
                  default:
                    $(e, t, c, null, r, a);
                }
            for (s in r)
              if (
                ((a = r[s]),
                (o = n[s]),
                r.hasOwnProperty(s) && (a != null || o != null))
              )
                switch (s) {
                  case `value`:
                    (a !== o && (j = !0), (p = a));
                    break;
                  case `defaultValue`:
                    (a !== o && (j = !0), (m = a));
                    break;
                  case `children`:
                    break;
                  case `dangerouslySetInnerHTML`:
                    if (a != null) throw Error(i(91));
                    break;
                  default:
                    a !== o && $(e, t, s, a, r, o);
                }
            gn(e, p, m);
            return;
          case `option`:
            for (var h in n)
              if (
                ((p = n[h]),
                n.hasOwnProperty(h) && p != null && !r.hasOwnProperty(h))
              )
                switch (h) {
                  case `selected`:
                    e.selected = !1;
                    break;
                  default:
                    $(e, t, h, null, r, p);
                }
            for (l in r)
              if (
                ((p = r[l]),
                (m = n[l]),
                r.hasOwnProperty(l) && p !== m && (p != null || m != null))
              )
                switch (l) {
                  case `selected`:
                    (p !== m && (j = !0),
                      (e.selected =
                        p && typeof p != `function` && typeof p != `symbol`));
                    break;
                  default:
                    $(e, t, l, p, r, m);
                }
            return;
          case `img`:
          case `link`:
          case `area`:
          case `base`:
          case `br`:
          case `col`:
          case `embed`:
          case `hr`:
          case `keygen`:
          case `meta`:
          case `param`:
          case `source`:
          case `track`:
          case `wbr`:
          case `menuitem`:
            for (var g in n)
              ((p = n[g]),
                n.hasOwnProperty(g) &&
                  p != null &&
                  !r.hasOwnProperty(g) &&
                  $(e, t, g, null, r, p));
            for (u in r)
              if (
                ((p = r[u]),
                (m = n[u]),
                r.hasOwnProperty(u) && p !== m && (p != null || m != null))
              )
                switch (u) {
                  case `children`:
                  case `dangerouslySetInnerHTML`:
                    if (p != null) throw Error(i(137, t));
                    break;
                  default:
                    $(e, t, u, p, r, m);
                }
            return;
          default:
            if (Sn(t)) {
              for (var _ in n)
                ((p = n[_]),
                  n.hasOwnProperty(_) &&
                    p !== void 0 &&
                    !r.hasOwnProperty(_) &&
                    tp(e, t, _, void 0, r, p));
              for (d in r)
                ((p = r[d]),
                  (m = n[d]),
                  !r.hasOwnProperty(d) ||
                    p === m ||
                    (p === void 0 && m === void 0) ||
                    tp(e, t, d, p, r, m));
              return;
            }
        }
        for (var v in n)
          ((p = n[v]),
            n.hasOwnProperty(v) &&
              p != null &&
              !r.hasOwnProperty(v) &&
              $(e, t, v, null, r, p));
        for (f in r)
          ((p = r[f]),
            (m = n[f]),
            !r.hasOwnProperty(f) ||
              p === m ||
              (p == null && m == null) ||
              $(e, t, f, p, r, m));
      }
      function ap(e) {
        switch (e) {
          case `css`:
          case `script`:
          case `font`:
          case `img`:
          case `image`:
          case `input`:
          case `link`:
            return !0;
          default:
            return !1;
        }
      }
      function op() {
        if (typeof performance.getEntriesByType == `function`) {
          for (
            var e = 0,
              t = 0,
              n = performance.getEntriesByType(`resource`),
              r = 0;
            r < n.length;
            r++
          ) {
            var i = n[r],
              a = i.transferSize,
              o = i.initiatorType,
              s = i.duration;
            if (a && s && ap(o)) {
              for (o = 0, s = i.responseEnd, r += 1; r < n.length; r++) {
                var c = n[r],
                  l = c.startTime;
                if (l > s) break;
                var u = c.transferSize,
                  d = c.initiatorType;
                u &&
                  ap(d) &&
                  ((c = c.responseEnd),
                  (o += u * (c < s ? 1 : (s - l) / (c - l))));
              }
              if ((--r, (t += (8 * (a + o)) / (i.duration / 1e3)), e++, 10 < e))
                break;
            }
          }
          if (0 < e) return t / e / 1e6;
        }
        return navigator.connection &&
          ((e = navigator.connection.downlink), typeof e == `number`)
          ? e
          : 5;
      }
      var sp = null,
        cp = null;
      function lp(e) {
        return e.nodeType === 9 ? e : e.ownerDocument;
      }
      function up(e) {
        switch (e) {
          case `http://www.w3.org/2000/svg`:
            return 1;
          case `http://www.w3.org/1998/Math/MathML`:
            return 2;
          default:
            return 0;
        }
      }
      function dp(e, t) {
        if (e === 0)
          switch (t) {
            case `svg`:
              return 1;
            case `math`:
              return 2;
            default:
              return 0;
          }
        return e === 1 && t === `foreignObject` ? 0 : e;
      }
      function fp(e, t, n, r) {
        return (
          (n = lp(n).createElement(e)),
          (n[At] = r),
          (n[jt] = t),
          np(n, e, t),
          Wt(n),
          n
        );
      }
      function pp(e, t) {
        return (
          e === `textarea` ||
          e === `noscript` ||
          typeof t.children == `string` ||
          typeof t.children == `number` ||
          typeof t.children == `bigint` ||
          (typeof t.dangerouslySetInnerHTML == `object` &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
        );
      }
      var mp = null;
      function hp() {
        var e = window.event;
        return e && e.type === `popstate`
          ? e !== mp && ((mp = e), !0)
          : ((mp = null), !1);
      }
      var gp = typeof setTimeout == `function` ? setTimeout : void 0,
        _p = typeof clearTimeout == `function` ? clearTimeout : void 0,
        vp = typeof Promise == `function` ? Promise : void 0,
        yp =
          typeof requestAnimationFrame == `function`
            ? requestAnimationFrame
            : gp,
        bp =
          typeof queueMicrotask == `function`
            ? queueMicrotask
            : vp === void 0
              ? gp
              : function (e) {
                  return vp.resolve(null).then(e).catch(xp);
                };
      function xp(e) {
        setTimeout(function () {
          throw e;
        });
      }
      function Sp(e) {
        return e === `head`;
      }
      function Cp(e, t) {
        var n = t,
          r = 0;
        do {
          var i = n.nextSibling;
          if ((e.removeChild(n), i && i.nodeType === 8)) {
            if (((n = i.data), n === `/$` || n === `/&`)) {
              if (r === 0) {
                (e.removeChild(i), Hh(t));
                return;
              }
              r--;
            } else if (
              n === `$` ||
              n === `$?` ||
              n === `$~` ||
              n === `$!` ||
              n === `&`
            )
              r++;
            else if (n === `html`) _m(e.ownerDocument.documentElement);
            else if (n === `head`) {
              ((n = e.ownerDocument.head), _m(n));
              for (var a = n.firstChild; a;) {
                var o = a.nextSibling,
                  s = a.nodeName;
                (a[Lt] ||
                  s === `SCRIPT` ||
                  s === `STYLE` ||
                  (s === `LINK` && a.rel.toLowerCase() === `stylesheet`) ||
                  n.removeChild(a),
                  (a = o));
              }
            } else n === `body` && _m(e.ownerDocument.body);
          }
          n = i;
        } while (n);
        Hh(t);
      }
      function wp(e, t) {
        var n = e;
        e = 0;
        do {
          var r = n.nextSibling;
          if (
            (n.nodeType === 1
              ? t
                ? ((n._stashedDisplay = n.style.display),
                  (n.style.display = `none`))
                : ((n.style.display = n._stashedDisplay || ``),
                  n.getAttribute(`style`) === `` && n.removeAttribute(`style`))
              : n.nodeType === 3 &&
                (t
                  ? ((n._stashedText = n.nodeValue), (n.nodeValue = ``))
                  : (n.nodeValue = n._stashedText || ``)),
            r && r.nodeType === 8)
          ) {
            if (((n = r.data), n === `/$`)) {
              if (e === 0) break;
              e--;
            } else (n !== `$` && n !== `$?` && n !== `$~` && n !== `$!`) || e++;
          }
          n = r;
        } while (n);
      }
      function Tp(e, t, n) {
        if (
          ((t = CSS.escape(t) === t ? t : `r-` + btoa(t).replace(/=/g, ``)),
          (e.style.viewTransitionName = t),
          n != null && (e.style.viewTransitionClass = n),
          (n = getComputedStyle(e)),
          n.display === `inline`)
        ) {
          if (((t = e.getClientRects()), t.length === 1)) var r = 1;
          else
            for (var i = (r = 0); i < t.length; i++) {
              var a = t[i];
              0 < a.width && 0 < a.height && r++;
            }
          r === 1 &&
            ((e = e.style),
            (e.display = t.length === 1 ? `inline-block` : `block`),
            (e.marginTop = `-` + n.paddingTop),
            (e.marginBottom = `-` + n.paddingBottom));
        }
      }
      function Ep(e, t) {
        ((e = e.style), (t = t.style));
        var n =
          t == null
            ? null
            : t.hasOwnProperty(`viewTransitionName`)
              ? t.viewTransitionName
              : t.hasOwnProperty(`view-transition-name`)
                ? t[`view-transition-name`]
                : null;
        ((e.viewTransitionName =
          n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
          (n =
            t == null
              ? null
              : t.hasOwnProperty(`viewTransitionClass`)
                ? t.viewTransitionClass
                : t.hasOwnProperty(`view-transition-class`)
                  ? t[`view-transition-class`]
                  : null),
          (e.viewTransitionClass =
            n == null || typeof n == `boolean` ? `` : (`` + n).trim()),
          e.display === `inline-block` &&
            (t == null
              ? (e.display = e.margin = ``)
              : ((n = t.display),
                (e.display = n == null || typeof n == `boolean` ? `` : n),
                (n = t.margin),
                n == null
                  ? ((n = t.hasOwnProperty(`marginTop`)
                      ? t.marginTop
                      : t[`margin-top`]),
                    (e.marginTop = n == null || typeof n == `boolean` ? `` : n),
                    (t = t.hasOwnProperty(`marginBottom`)
                      ? t.marginBottom
                      : t[`margin-bottom`]),
                    (e.marginBottom =
                      t == null || typeof t == `boolean` ? `` : t))
                  : (e.margin = n))));
      }
      function Dp(e, t, n) {
        return (
          (n = n.ownerDocument.defaultView),
          {
            rect: e,
            abs: t.position === `absolute` || t.position === `fixed`,
            clip:
              t.clipPath !== `none` ||
              t.overflow !== `visible` ||
              t.filter !== `none` ||
              t.mask !== `none` ||
              t.mask !== `none` ||
              t.borderRadius !== `0px`,
            view:
              0 <= e.bottom &&
              0 <= e.right &&
              e.top <= n.innerHeight &&
              e.left <= n.innerWidth,
          }
        );
      }
      function Op(e) {
        return Dp(e.getBoundingClientRect(), getComputedStyle(e), e);
      }
      function kp(e) {
        var t = e.getBoundingClientRect();
        t = new DOMRect(t.x + 2e4, t.y + 2e4, t.width, t.height);
        var n = getComputedStyle(e);
        return Dp(t, n, e);
      }
      function Ap(e) {
        return e.documentElement.clientHeight;
      }
      function jp(e) {
        (this.addEventListener(`load`, e), this.addEventListener(`error`, e));
      }
      function Mp(e, t, n, r, i, a, o, s, c) {
        var l = t.nodeType === 9 ? t : t.ownerDocument;
        try {
          var u = l.startViewTransition({
            update: function () {
              var t = l.defaultView,
                n = t.navigation && t.navigation.transition,
                o = l.fonts.status;
              r();
              var s = [];
              if (
                (o === `loaded` &&
                  (Ap(l),
                  l.fonts.status === `loading` && s.push(l.fonts.ready)),
                (o = s.length),
                e !== null)
              )
                for (
                  var c = e.suspenseyImages, u = 0, d = 0;
                  d < c.length;
                  d++
                ) {
                  var f = c[d];
                  if (!f.complete) {
                    var p = f.getBoundingClientRect();
                    if (
                      0 < p.bottom &&
                      0 < p.right &&
                      p.top < t.innerHeight &&
                      p.left < t.innerWidth
                    ) {
                      if (((u += Xm(f)), u > $m)) {
                        s.length = o;
                        break;
                      }
                      ((f = new Promise(jp.bind(f))), s.push(f));
                    }
                  }
                }
              if (0 < s.length)
                return (
                  (t = Promise.race([
                    Promise.all(s),
                    new Promise(function (e) {
                      return setTimeout(e, 500);
                    }),
                  ]).then(i, i)),
                  (n ? Promise.allSettled([n.finished, t]) : t).then(a, a)
                );
              if ((i(), n)) return n.finished.then(a, a);
              a();
            },
            types: n,
          });
          l.__reactViewTransition = u;
          var d = [];
          return (
            u.ready.then(
              function () {
                for (
                  var e = l.documentElement.getAnimations({ subtree: !0 }),
                    t = 0;
                  t < e.length;
                  t++
                ) {
                  var n = e[t],
                    r = n.effect,
                    i = r.pseudoElement;
                  if (i != null && i.startsWith(`::view-transition`)) {
                    (d.push(n), (n = r.getKeyframes()));
                    for (
                      var a = (i = void 0), s = !0, c = 0;
                      c < n.length;
                      c++
                    ) {
                      var u = n[c],
                        f = u.width;
                      if (i === void 0) i = f;
                      else if (i !== f) {
                        s = !1;
                        break;
                      }
                      if (((f = u.height), a === void 0)) a = f;
                      else if (a !== f) {
                        s = !1;
                        break;
                      }
                      (delete u.width,
                        delete u.height,
                        u.transform === `none` && delete u.transform);
                    }
                    s &&
                      i !== void 0 &&
                      a !== void 0 &&
                      (r.setKeyframes(n),
                      (s = getComputedStyle(r.target, r.pseudoElement)),
                      s.width !== i || s.height !== a) &&
                      ((s = n[0]),
                      (s.width = i),
                      (s.height = a),
                      (s = n[n.length - 1]),
                      (s.width = i),
                      (s.height = a),
                      r.setKeyframes(n));
                  }
                }
                o();
              },
              function (e) {
                l.__reactViewTransition === u &&
                  (l.__reactViewTransition = null);
                try {
                  if (typeof e == `object` && e)
                    switch (e.name) {
                      case `InvalidStateError`:
                        (e.message ===
                          `View transition was skipped because document visibility state is hidden.` ||
                          e.message ===
                            `Skipping view transition because document visibility state has become hidden.` ||
                          e.message ===
                            `Skipping view transition because viewport size changed.` ||
                          e.message ===
                            `Transition was aborted because of invalid state`) &&
                          (e = null);
                    }
                  e !== null && c(e);
                } finally {
                  (r(), i(), o());
                }
              },
            ),
            u.finished.finally(function () {
              for (var e = 0; e < d.length; e++) d[e].cancel();
              (l.__reactViewTransition === u &&
                (l.__reactViewTransition = null),
                s());
            }),
            u
          );
        } catch {
          return (r(), i(), o(), null);
        }
      }
      function Np(e, t) {
        ((this._scope = document.documentElement),
          (this._selector = `::view-transition-` + e + `(` + t + `)`));
      }
      ((Np.prototype.animate = function (e, t) {
        return (
          (t = typeof t == `number` ? { duration: t } : D({}, t)),
          (t.pseudoElement = this._selector),
          this._scope.animate(e, t)
        );
      }),
        (Np.prototype.getAnimations = function () {
          for (
            var e = this._scope,
              t = this._selector,
              n = e.getAnimations({ subtree: !0 }),
              r = [],
              i = 0;
            i < n.length;
            i++
          ) {
            var a = n[i].effect;
            a !== null &&
              a.target === e &&
              a.pseudoElement === t &&
              r.push(n[i]);
          }
          return r;
        }),
        (Np.prototype.getComputedStyle = function () {
          return getComputedStyle(this._scope, this._selector);
        }));
      function Pp(e) {
        return {
          name: e,
          group: new Np(`group`, e),
          imagePair: new Np(`image-pair`, e),
          old: new Np(`old`, e),
          new: new Np(`new`, e),
        };
      }
      function Fp(e) {
        ((this._fragmentFiber = e),
          (this._observers = this._eventListeners = null));
      }
      Fp.prototype.addEventListener = function (e, t, n) {
        var r = null,
          i = null;
        if (!(
          n != null &&
          typeof n != `boolean` &&
          ((r = n.signal || null), r !== null && r.aborted)
        )) {
          this._eventListeners === null && (this._eventListeners = []);
          var a = this._eventListeners;
          if (Bp(a, e, t, n) === -1) {
            var o = this,
              s = t;
            (n != null &&
              typeof n != `boolean` &&
              !0 === n.once &&
              (s = function (r) {
                (o.removeEventListener(e, t, n),
                  typeof t == `function` ? t.call(this, r) : t.handleEvent(r));
              }),
              r !== null &&
                ((i = o.removeEventListener.bind(o, e, t, n)),
                r.addEventListener(`abort`, i, { once: !0 }),
                (i = r.removeEventListener.bind(r, `abort`, i))),
              (r = Rp(n)),
              a.push({
                type: e,
                listener: t,
                optionsOrUseCapture: n,
                attachedListener: s,
                cleanup: i,
              }),
              h(this._fragmentFiber.child, !1, Ip, e, s, r));
          }
          this._eventListeners = a;
        }
      };
      function Ip(e, t, n, r) {
        return (b(e).addEventListener(t, n, r), !1);
      }
      Fp.prototype.removeEventListener = function (e, t, n) {
        var r = this._eventListeners;
        if (r !== null && ((t = Bp(r, e, t, n)), t !== -1)) {
          var i = r[t];
          n = i.attachedListener;
          var a = i.cleanup;
          ((i = Rp(i.optionsOrUseCapture)),
            h(this._fragmentFiber.child, !1, Lp, e, n, i),
            r.splice(t, 1),
            a !== null && a());
        }
      };
      function Lp(e, t, n, r) {
        return (b(e).removeEventListener(t, n, r), !1);
      }
      function Rp(e) {
        return e != null &&
          typeof e != `boolean` &&
          (!0 === e.once || e.signal instanceof AbortSignal)
          ? { capture: e.capture, passive: e.passive }
          : e;
      }
      function zp(e) {
        return e == null
          ? `c=0`
          : typeof e == `boolean`
            ? `c=` + (e ? `1` : `0`)
            : `c=` + (e.capture ? `1` : `0`);
      }
      function Bp(e, t, n, r) {
        if (e.length === 0) return -1;
        r = zp(r);
        for (var i = 0; i < e.length; i++) {
          var a = e[i];
          if (
            a.type === t &&
            a.listener === n &&
            zp(a.optionsOrUseCapture) === r
          )
            return i;
        }
        return -1;
      }
      ((Fp.prototype.dispatchEvent = function (e) {
        var t = g(this._fragmentFiber);
        if (t === null) return !0;
        t = b(t);
        var n = this._eventListeners;
        if ((n !== null && 0 < n.length) || !e.bubbles) {
          var r =
            t.nodeType === 9
              ? t.createComment(``)
              : document.createTextNode(``);
          if (n)
            for (var i = 0; i < n.length; i++) {
              var a = n[i];
              r.addEventListener(
                a.type,
                a.attachedListener,
                Rp(a.optionsOrUseCapture),
              );
            }
          if ((t.appendChild(r), (e = r.dispatchEvent(e)), n))
            for (i = 0; i < n.length; i++)
              ((a = n[i]),
                r.removeEventListener(
                  a.type,
                  a.attachedListener,
                  Rp(a.optionsOrUseCapture),
                ));
          return (t.removeChild(r), e);
        }
        return t.dispatchEvent(e);
      }),
        (Fp.prototype.focus = function (e) {
          h(this._fragmentFiber.child, !0, Vp, e, void 0, void 0);
        }));
      function Vp(e, t) {
        return e.tag !== 6 && ((e = b(e)), pm(e, t));
      }
      Fp.prototype.focusLast = function (e) {
        var t = [];
        h(this._fragmentFiber.child, !0, Hp, t, void 0, void 0);
        for (var n = t.length - 1; 0 <= n && !Vp(t[n], e); n--);
      };
      function Hp(e, t) {
        return (t.push(e), !1);
      }
      Fp.prototype.blur = function () {
        var e = g(this._fragmentFiber);
        e !== null &&
          ((e = b(e)),
          (e = lp(e).activeElement),
          e !== null &&
            h(this._fragmentFiber.child, !1, Up, e, void 0, void 0));
      };
      function Up(e, t) {
        return (
          e.tag !== 6 &&
          ((e = b(e)), e === t || e.contains(t) ? (t.blur(), !0) : !1)
        );
      }
      Fp.prototype.observeUsing = function (e) {
        (this._observers === null && (this._observers = new Set()),
          this._observers.add(e),
          h(this._fragmentFiber.child, !1, Wp, e, void 0, void 0));
      };
      function Wp(e, t) {
        return (e.tag === 6 || ((e = b(e)), t.observe(e)), !1);
      }
      Fp.prototype.unobserveUsing = function (e) {
        var t = this._observers;
        if (t !== null && t.has(e)) {
          (t.delete(e),
            h(this._fragmentFiber.child, !1, Gp, e, void 0, void 0));
          for (var n = (t = 0); n < Kp.length; n++) {
            var r = Kp[n];
            r.fragmentInstance === this && r.observer === e
              ? e.unobserve(r.instance)
              : (Kp[t++] = r);
          }
          Kp.length = t;
        }
      };
      function Gp(e, t) {
        return (e.tag === 6 || ((e = b(e)), t.unobserve(e)), !1);
      }
      var Kp = [],
        qp = !1;
      function Jp(e, t, n) {
        (Kp.push({ fragmentInstance: e, observer: t, instance: n }),
          qp ||
            ((qp = !0),
            mm(function () {
              qp = !1;
              var e = Kp;
              Kp = [];
              for (var t = 0; t < e.length; t++) {
                var n = e[t];
                n.observer.unobserve(n.instance);
              }
            })));
      }
      Fp.prototype.getClientRects = function () {
        var e = [];
        return (h(this._fragmentFiber.child, !1, Yp, e, void 0, void 0), e);
      };
      function Yp(e, t) {
        if (e.tag === 6) {
          e = e.stateNode;
          var n = e.ownerDocument.createRange();
          (n.selectNodeContents(e), t.push.apply(t, n.getClientRects()));
        } else ((e = b(e)), t.push.apply(t, e.getClientRects()));
        return !1;
      }
      ((Fp.prototype.getRootNode = function (e) {
        var t = g(this._fragmentFiber);
        return t === null ? this : b(t).getRootNode(e);
      }),
        (Fp.prototype.compareDocumentPosition = function (e) {
          var t = g(this._fragmentFiber);
          if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
          var n = [];
          h(this._fragmentFiber.child, !1, Hp, n, void 0, void 0);
          var r = b(t);
          if (n.length === 0) {
            if (((n = r), _(this._fragmentFiber))) {
              a: {
                for (t = this._fragmentFiber.return; t !== null;) {
                  if (t.tag === 4) {
                    t = t.stateNode.containerInfo;
                    break a;
                  }
                  if (t.tag === 3 || t.tag === 5 || t.tag === 27) break;
                  t = t.return;
                }
                t = null;
              }
              t != null && (n = t);
            }
            t = this._fragmentFiber;
            var i = (r = n.compareDocumentPosition(e));
            return (
              n === e
                ? (i = Node.DOCUMENT_POSITION_CONTAINS)
                : r & Node.DOCUMENT_POSITION_CONTAINED_BY &&
                  ((n = v(t)[1]),
                  n === null
                    ? (i = Node.DOCUMENT_POSITION_PRECEDING)
                    : ((e = b(n).compareDocumentPosition(e)),
                      (i =
                        e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING
                          ? Node.DOCUMENT_POSITION_FOLLOWING
                          : Node.DOCUMENT_POSITION_PRECEDING))),
              (i |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
            );
          }
          ((t = b(n[0])), (i = b(n[n.length - 1])));
          var a = _(this._fragmentFiber) ? t.parentElement : r;
          if (a == null) return Node.DOCUMENT_POSITION_DISCONNECTED;
          ((r =
            a.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY),
            (a =
              a.compareDocumentPosition(i) &
              Node.DOCUMENT_POSITION_CONTAINED_BY));
          var o = t.compareDocumentPosition(e),
            s = i.compareDocumentPosition(e),
            c =
              o & Node.DOCUMENT_POSITION_CONTAINED_BY ||
              s & Node.DOCUMENT_POSITION_CONTAINED_BY;
          return (
            (s =
              r &&
              a &&
              o & Node.DOCUMENT_POSITION_FOLLOWING &&
              s & Node.DOCUMENT_POSITION_PRECEDING),
            (t =
              (r && t === e) || (a && i === e) || c || s
                ? Node.DOCUMENT_POSITION_CONTAINED_BY
                : (!r && t === e) || (!a && i === e)
                  ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
                  : o),
            t & Node.DOCUMENT_POSITION_DISCONNECTED ||
            t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC ||
            Xp(t, this._fragmentFiber, n[0], n[n.length - 1], e)
              ? t
              : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC
          );
        }));
      function Xp(e, t, n, r, i) {
        var a = Bt(i);
        if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
          if ((n = !!a))
            a: {
              for (; a !== null;) {
                if (a.tag === 7 && (a === t || a.alternate === t)) {
                  n = !0;
                  break a;
                }
                a = a.return;
              }
              n = !1;
            }
          return n;
        }
        if (e & Node.DOCUMENT_POSITION_CONTAINS) {
          if (a === null)
            return (
              (a = i.ownerDocument),
              i === a || i === a.documentElement || i === a.body
            );
          a: {
            for (a = t, t = g(t); a !== null;) {
              if (!(
                (a.tag !== 5 && a.tag !== 3 && a.tag !== 27) ||
                (a !== t && a.alternate !== t)
              )) {
                a = !0;
                break a;
              }
              a = a.return;
            }
            a = !1;
          }
          return a;
        }
        return e & Node.DOCUMENT_POSITION_PRECEDING
          ? ((t = !!a) &&
              !(t = a === n) &&
              ((t = E(n, a, T)),
              t === null
                ? (t = !1)
                : (h(t, !0, C, a, n), (a = x), (x = null), (t = a !== null))),
            t)
          : e & Node.DOCUMENT_POSITION_FOLLOWING
            ? ((t = !!a) &&
                !(t = a === r) &&
                ((t = E(r, a, T)),
                t === null
                  ? (t = !1)
                  : (h(t, !0, w, a, r),
                    (a = x),
                    (S = x = null),
                    (t = a !== null))),
              t)
            : !1;
      }
      function Zp(e, t) {
        var n = e.ownerDocument.createRange();
        (n.selectNodeContents(e),
          (e = n.getBoundingClientRect()),
          window.scrollTo(
            window.scrollX + e.left,
            t
              ? window.scrollY + e.top
              : window.scrollY + e.bottom - window.innerHeight,
          ));
      }
      Fp.prototype.scrollIntoView = function (e) {
        if (typeof e == `object`) throw Error(i(566));
        var t = [];
        h(this._fragmentFiber.child, !1, Hp, t, void 0, void 0);
        var n = !1 !== e;
        if (t.length === 0) {
          var r = v(this._fragmentFiber);
          if (
            ((r = n ? r[1] || r[0] || g(this._fragmentFiber) : r[0] || r[1]),
            r === null)
          )
            return;
          if (r.tag === 6) {
            ((e = b(r)), Zp(e, n));
            return;
          }
          if (((r = b(r)), r.nodeType !== 9)) {
            if (r.nodeType === 11) {
              ((n = `host` in r ? r.host : null),
                n !== null && n.scrollIntoView(e));
              return;
            }
            r.scrollIntoView(e);
          }
        }
        for (r = n ? t.length - 1 : 0; r !== (n ? -1 : t.length);) {
          var a = t[r];
          (a.tag === 6 ? ((a = b(a)), Zp(a, n)) : b(a).scrollIntoView(e),
            (r += n ? -1 : 1));
        }
      };
      function Qp(e, t) {
        return ((e = b(e)), $p(e, t), !1);
      }
      function $p(e, t) {
        ((e.reactFragments ??= new Set()), e.reactFragments.add(t));
      }
      function em(e, t) {
        var n = t._eventListeners;
        if (n !== null)
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            e.addEventListener(
              i.type,
              i.attachedListener,
              Rp(i.optionsOrUseCapture),
            );
          }
        e.nodeType !== 3 &&
          ((n = t._observers),
          n !== null &&
            n.forEach(function (n) {
              for (var r = 0, i = 0; i < Kp.length; i++) {
                var a = Kp[i];
                (a.fragmentInstance !== t ||
                  a.observer !== n ||
                  a.instance !== e) &&
                  (Kp[r++] = a);
              }
              ((Kp.length = r), n.observe(e));
            }),
          $p(e, t));
      }
      function tm(e, t) {
        var n = t._eventListeners;
        if (n !== null)
          for (var r = 0; r < n.length; r++) {
            var i = n[r];
            e.removeEventListener(
              i.type,
              i.attachedListener,
              Rp(i.optionsOrUseCapture),
            );
          }
        e.nodeType !== 3 &&
          ((n = t._observers),
          n !== null &&
            n.forEach(function (n) {
              typeof n.rootMargin == `string` ? Jp(t, n, e) : n.unobserve(e);
            }),
          e.reactFragments != null && e.reactFragments.delete(t));
      }
      function nm(e) {
        var t = e.firstChild;
        for (t && t.nodeType === 10 && (t = t.nextSibling); t;) {
          var n = t;
          switch (((t = t.nextSibling), n.nodeName)) {
            case `HTML`:
            case `HEAD`:
            case `BODY`:
              (nm(n), zt(n));
              continue;
            case `SCRIPT`:
            case `STYLE`:
              continue;
            case `LINK`:
              if (n.rel.toLowerCase() === `stylesheet`) continue;
          }
          e.removeChild(n);
        }
      }
      function rm(e, t, n, r) {
        for (; e.nodeType === 1;) {
          var i = n;
          if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
            if (!r && (e.nodeName !== `INPUT` || e.type !== `hidden`)) break;
          } else if (!r) {
            if (t === `input` && e.type === `hidden`) {
              var a = i.name == null ? null : `` + i.name;
              if (i.type === `hidden` && e.getAttribute(`name`) === a) return e;
            } else return e;
          } else if (!e[Lt])
            switch (t) {
              case `meta`:
                if (!e.hasAttribute(`itemprop`)) break;
                return e;
              case `link`:
                if (
                  ((a = e.getAttribute(`rel`)),
                  (a === `stylesheet` && e.hasAttribute(`data-precedence`)) ||
                    a !== i.rel ||
                    e.getAttribute(`href`) !==
                      (i.href == null || i.href === `` ? null : i.href) ||
                    e.getAttribute(`crossorigin`) !==
                      (i.crossOrigin == null ? null : i.crossOrigin) ||
                    e.getAttribute(`title`) !==
                      (i.title == null ? null : i.title))
                )
                  break;
                return e;
              case `style`:
                if (e.hasAttribute(`data-precedence`)) break;
                return e;
              case `script`:
                if (
                  ((a = e.getAttribute(`src`)),
                  (a !== (i.src == null ? null : i.src) ||
                    e.getAttribute(`type`) !==
                      (i.type == null ? null : i.type) ||
                    e.getAttribute(`crossorigin`) !==
                      (i.crossOrigin == null ? null : i.crossOrigin)) &&
                    a &&
                    e.hasAttribute(`async`) &&
                    !e.hasAttribute(`itemprop`))
                )
                  break;
                return e;
              default:
                return e;
            }
          if (((e = lm(e.nextSibling)), e === null)) break;
        }
        return null;
      }
      function im(e, t, n) {
        if (t === ``) return null;
        for (; e.nodeType !== 3;)
          if (
            ((e.nodeType !== 1 ||
              e.nodeName !== `INPUT` ||
              e.type !== `hidden`) &&
              !n) ||
            ((e = lm(e.nextSibling)), e === null)
          )
            return null;
        return e;
      }
      function am(e, t) {
        for (; e.nodeType !== 8;)
          if (
            ((e.nodeType !== 1 ||
              e.nodeName !== `INPUT` ||
              e.type !== `hidden`) &&
              !t) ||
            ((e = lm(e.nextSibling)), e === null)
          )
            return null;
        return e;
      }
      function om(e) {
        return e.data === `$?` || e.data === `$~`;
      }
      function sm(e) {
        return (
          e.data === `$!` ||
          (e.data === `$?` && e.ownerDocument.readyState !== `loading`)
        );
      }
      function cm(e, t) {
        var n = e.ownerDocument;
        if (e.data === `$~`) e._reactRetry = t;
        else if (e.data !== `$?` || n.readyState !== `loading`) t();
        else {
          var r = function () {
            (t(), n.removeEventListener(`DOMContentLoaded`, r));
          };
          (n.addEventListener(`DOMContentLoaded`, r), (e._reactRetry = r));
        }
      }
      function lm(e) {
        for (; e != null; e = e.nextSibling) {
          var t = e.nodeType;
          if (t === 1 || t === 3) break;
          if (t === 8) {
            if (
              ((t = e.data),
              t === `$` ||
                t === `$!` ||
                t === `$?` ||
                t === `$~` ||
                t === `&` ||
                t === `F!` ||
                t === `F`)
            )
              break;
            if (t === `/$` || t === `/&`) return null;
          }
        }
        return e;
      }
      var um = null;
      function dm(e) {
        e = e.nextSibling;
        for (var t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === `/$` || n === `/&`) {
              if (t === 0) return lm(e.nextSibling);
              t--;
            } else
              (n !== `$` &&
                n !== `$!` &&
                n !== `$?` &&
                n !== `$~` &&
                n !== `&`) ||
                t++;
          }
          e = e.nextSibling;
        }
        return null;
      }
      function fm(e) {
        e = e.previousSibling;
        for (var t = 0; e;) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (
              n === `$` ||
              n === `$!` ||
              n === `$?` ||
              n === `$~` ||
              n === `&`
            ) {
              if (t === 0) return e;
              t--;
            } else (n !== `/$` && n !== `/&`) || t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      function pm(e, t) {
        function n() {
          r = !0;
        }
        if (e.ownerDocument.activeElement === e) return !0;
        var r = !1;
        try {
          (e.ownerDocument.addEventListener(`focus`, n, !0),
            (e.focus || HTMLElement.prototype.focus).call(e, t));
        } finally {
          e.ownerDocument.removeEventListener(`focus`, n, !0);
        }
        return r;
      }
      function mm(e) {
        yp(function () {
          yp(function (t) {
            return e(t);
          });
        });
      }
      function hm(e, t, n) {
        switch (((t = lp(n)), e)) {
          case `html`:
            if (((e = t.documentElement), !e)) throw Error(i(452));
            return e;
          case `head`:
            if (((e = t.head), !e)) throw Error(i(453));
            return e;
          case `body`:
            if (((e = t.body), !e)) throw Error(i(454));
            return e;
          default:
            throw Error(i(451));
        }
      }
      function gm(e, t, n) {
        for (var r in n) {
          var i = n[r];
          n.hasOwnProperty(r) && i != null && $(e, t, r, null, rp, i);
        }
        (n.dangerouslySetInnerHTML != null && (e.textContent = ``),
          e.onclick === En && (e.onclick = null),
          zt(e));
      }
      function _m(e) {
        for (var t = e.attributes; t.length;) e.removeAttributeNode(t[0]);
        zt(e);
      }
      var vm = new Map(),
        ym = new Set();
      function bm(e) {
        if (typeof e.getRootNode == `function`) {
          var t = e.getRootNode();
          if (t.nodeType === 9 || t.nodeType === 11) return t;
        }
        return e.nodeType === 9 ? e : e.ownerDocument;
      }
      var xm = k.d;
      k.d = { f: Sm, r: Cm, D: Em, C: Dm, L: Om, m: km, X: jm, S: Am, M: Mm };
      function Sm() {
        var e = xm.f(),
          t = zd();
        return e || t;
      }
      function Cm(e) {
        var t = Vt(e);
        t !== null && t.tag === 5 && t.type === `form` ? nc(t) : xm.r(e);
      }
      var wm = typeof document > `u` ? null : document;
      function Tm(e, t, n) {
        var r = wm;
        if (r && typeof t == `string` && t) {
          var i = dn(t);
          ((i = `link[rel="` + e + `"][href="` + i + `"]`),
            typeof n == `string` && (i += `[crossorigin="` + n + `"]`),
            ym.has(i) ||
              (ym.add(i),
              (e = { rel: e, crossOrigin: n, href: t }),
              r.querySelector(i) === null &&
                ((t = r.createElement(`link`)),
                np(t, `link`, e),
                Wt(t),
                r.head.appendChild(t))));
        }
      }
      function Em(e) {
        (xm.D(e), Tm(`dns-prefetch`, e, null));
      }
      function Dm(e, t) {
        (xm.C(e, t), Tm(`preconnect`, e, t));
      }
      function Om(e, t, n) {
        xm.L(e, t, n);
        var r = wm;
        if (r && e && t) {
          var i = `link[rel="preload"][as="` + dn(t) + `"]`;
          t === `image` && n && n.imageSrcSet
            ? ((i += `[imagesrcset="` + dn(n.imageSrcSet) + `"]`),
              typeof n.imageSizes == `string` &&
                (i += `[imagesizes="` + dn(n.imageSizes) + `"]`))
            : (i += `[href="` + dn(e) + `"]`);
          var a = i;
          switch (t) {
            case `style`:
              a = Pm(e);
              break;
            case `script`:
              a = Rm(e);
          }
          if (!(
            vm.has(a) ||
            ((e = D(
              {
                rel: `preload`,
                href: t === `image` && n && n.imageSrcSet ? void 0 : e,
                as: t,
              },
              n,
            )),
            vm.set(a, e),
            r.querySelector(i) !== null ||
              (t === `style` && r.querySelector(Fm(a))) ||
              (t === `script` && r.querySelector(zm(a))))
          )) {
            var o = r.createElement(`link`);
            (np(o, `link`, e),
              t === `style` &&
                ((o[Rt] = !0),
                (o.onload = o.onerror =
                  function () {
                    Gt(o);
                  })),
              Wt(o),
              r.head.appendChild(o));
          }
        }
      }
      function km(e, t) {
        xm.m(e, t);
        var n = wm;
        if (n && e) {
          var r = t && typeof t.as == `string` ? t.as : `script`,
            i =
              `link[rel="modulepreload"][as="` +
              dn(r) +
              `"][href="` +
              dn(e) +
              `"]`,
            a = i;
          switch (r) {
            case `audioworklet`:
            case `paintworklet`:
            case `serviceworker`:
            case `sharedworker`:
            case `worker`:
            case `script`:
              a = Rm(e);
          }
          if (
            !vm.has(a) &&
            ((e = D({ rel: `modulepreload`, href: e }, t)),
            vm.set(a, e),
            n.querySelector(i) === null)
          ) {
            switch (r) {
              case `audioworklet`:
              case `paintworklet`:
              case `serviceworker`:
              case `sharedworker`:
              case `worker`:
              case `script`:
                if (n.querySelector(zm(a))) return;
            }
            ((r = n.createElement(`link`)),
              np(r, `link`, e),
              Wt(r),
              n.head.appendChild(r));
          }
        }
      }
      function Am(e, t, n) {
        xm.S(e, t, n);
        var r = wm;
        if (r && e) {
          var i = Ut(r).hoistableStyles,
            a = Pm(e);
          t ||= `default`;
          var o = i.get(a);
          if (!o) {
            var s = { loading: 0, preload: null };
            if ((o = r.querySelector(Fm(a)))) s.loading = 5;
            else {
              ((e = D({ rel: `stylesheet`, href: e, "data-precedence": t }, n)),
                (n = vm.get(a)) && Hm(e, n));
              var c = (o = r.createElement(`link`));
              (Wt(c),
                np(c, `link`, e),
                (c._p = new Promise(function (e, t) {
                  ((c.onload = e), (c.onerror = t));
                })),
                c.addEventListener(`load`, function () {
                  s.loading |= 1;
                }),
                c.addEventListener(`error`, function () {
                  s.loading |= 2;
                }),
                (s.loading |= 4),
                Vm(o, t, r));
            }
            ((o = { type: `stylesheet`, instance: o, count: 1, state: s }),
              i.set(a, o));
          }
        }
      }
      function jm(e, t) {
        xm.X(e, t);
        var n = wm;
        if (n && e) {
          var r = Ut(n).hoistableScripts,
            i = Rm(e),
            a = r.get(i);
          a ||
            ((a = n.querySelector(zm(i))),
            a ||
              ((e = D({ src: e, async: !0 }, t)),
              (t = vm.get(i)) && Um(e, t),
              (a = n.createElement(`script`)),
              Wt(a),
              np(a, `link`, e),
              n.head.appendChild(a)),
            (a = { type: `script`, instance: a, count: 1, state: null }),
            r.set(i, a));
        }
      }
      function Mm(e, t) {
        xm.M(e, t);
        var n = wm;
        if (n && e) {
          var r = Ut(n).hoistableScripts,
            i = Rm(e),
            a = r.get(i);
          a ||
            ((a = n.querySelector(zm(i))),
            a ||
              ((e = D({ src: e, async: !0, type: `module` }, t)),
              (t = vm.get(i)) && Um(e, t),
              (a = n.createElement(`script`)),
              Wt(a),
              np(a, `link`, e),
              n.head.appendChild(a)),
            (a = { type: `script`, instance: a, count: 1, state: null }),
            r.set(i, a));
        }
      }
      function Nm(e, t, n, r) {
        var a = (a = Ae.current) ? bm(a) : null;
        if (!a) throw Error(i(446));
        switch (e) {
          case `meta`:
          case `title`:
            return null;
          case `style`:
            return typeof n.precedence == `string` && typeof n.href == `string`
              ? ((n = Pm(n.href)),
                (t = Ut(a).hoistableStyles),
                (r = t.get(n)),
                r ||
                  ((r = {
                    type: `style`,
                    instance: null,
                    count: 0,
                    state: null,
                  }),
                  t.set(n, r)),
                r)
              : { type: `void`, instance: null, count: 0, state: null };
          case `link`:
            if (
              n.rel === `stylesheet` &&
              typeof n.href == `string` &&
              typeof n.precedence == `string`
            ) {
              e = Pm(n.href);
              var o = Ut(a).hoistableStyles,
                s = o.get(e);
              if (
                (s ||
                  ((a = a.ownerDocument || a),
                  (s = {
                    type: `stylesheet`,
                    instance: null,
                    count: 0,
                    state: { loading: 0, preload: null },
                  }),
                  o.set(e, s),
                  (o = a.querySelector(Fm(e)))
                    ? o._p || ((s.instance = o), (s.state.loading = 5))
                    : ((o = vm.get(e)),
                      o ||
                        ((o = {
                          rel: `preload`,
                          as: `style`,
                          href: n.href,
                          crossOrigin: n.crossOrigin,
                          integrity: n.integrity,
                          media: n.media,
                          hrefLang: n.hrefLang,
                          referrerPolicy: n.referrerPolicy,
                        }),
                        vm.set(e, o)),
                      Lm(a, e, o, s.state))),
                t && r === null)
              )
                throw Error(i(528, ``));
              return s;
            }
            if (t && r !== null) throw Error(i(529, ``));
            return null;
          case `script`:
            return (
              (t = n.async),
              (n = n.src),
              typeof n == `string` &&
              t &&
              typeof t != `function` &&
              typeof t != `symbol`
                ? ((n = Rm(n)),
                  (t = Ut(a).hoistableScripts),
                  (r = t.get(n)),
                  r ||
                    ((r = {
                      type: `script`,
                      instance: null,
                      count: 0,
                      state: null,
                    }),
                    t.set(n, r)),
                  r)
                : { type: `void`, instance: null, count: 0, state: null }
            );
          default:
            throw Error(i(444, e));
        }
      }
      function Pm(e) {
        return `href="` + dn(e) + `"`;
      }
      function Fm(e) {
        return `link[rel="stylesheet"][` + e + `]`;
      }
      function Im(e) {
        return D({}, e, { "data-precedence": e.precedence, precedence: null });
      }
      function Lm(e, t, n, r) {
        if (
          (t = e.querySelector(`link[rel="preload"][as="style"][` + t + `]`))
        ) {
          if (!0 !== t[Rt]) {
            r.loading = 1;
            return;
          }
        } else
          ((t = e.createElement(`link`)),
            (t[Rt] = !0),
            (t.onload = t.onerror = Gt.bind(null, t)),
            np(t, `link`, n),
            Wt(t),
            e.head.appendChild(t));
        ((r.preload = t),
          t.addEventListener(`load`, function () {
            return (r.loading |= 1);
          }),
          t.addEventListener(`error`, function () {
            return (r.loading |= 2);
          }));
      }
      function Rm(e) {
        return `[src="` + dn(e) + `"]`;
      }
      function zm(e) {
        return `script[async]` + e;
      }
      function Bm(e, t, n) {
        if ((t.count++, t.instance === null))
          switch (t.type) {
            case `style`:
              var r = e.querySelector(`style[data-href~="` + dn(n.href) + `"]`);
              if (r) return ((t.instance = r), Wt(r), r);
              var a = D({}, n, {
                "data-href": n.href,
                "data-precedence": n.precedence,
                href: null,
                precedence: null,
              });
              return (
                (r = (e.ownerDocument || e).createElement(`style`)),
                Wt(r),
                np(r, `style`, a),
                Vm(r, n.precedence, e),
                (t.instance = r)
              );
            case `stylesheet`:
              a = Pm(n.href);
              var o = e.querySelector(Fm(a));
              if (o)
                return ((t.state.loading |= 4), (t.instance = o), Wt(o), o);
              ((r = Im(n)),
                (a = vm.get(a)) && Hm(r, a),
                (o = (e.ownerDocument || e).createElement(`link`)),
                Wt(o));
              var s = o;
              return (
                (s._p = new Promise(function (e, t) {
                  ((s.onload = e), (s.onerror = t));
                })),
                np(o, `link`, r),
                (t.state.loading |= 4),
                Vm(o, n.precedence, e),
                (t.instance = o)
              );
            case `script`:
              return (
                (o = Rm(n.src)),
                (a = e.querySelector(zm(o)))
                  ? ((t.instance = a), Wt(a), a)
                  : ((r = n),
                    (a = vm.get(o)) && ((r = D({}, n)), Um(r, a)),
                    (e = e.ownerDocument || e),
                    (a = e.createElement(`script`)),
                    Wt(a),
                    np(a, `link`, r),
                    e.head.appendChild(a),
                    (t.instance = a))
              );
            case `void`:
              return null;
            default:
              throw Error(i(443, t.type));
          }
        else
          t.type === `stylesheet` &&
            !(t.state.loading & 4) &&
            ((r = t.instance), (t.state.loading |= 4), Vm(r, n.precedence, e));
        return t.instance;
      }
      function Vm(e, t, n) {
        for (
          var r = n.querySelectorAll(
              `link[rel="stylesheet"][data-precedence],style[data-precedence]`,
            ),
            i = r.length ? r[r.length - 1] : null,
            a = i,
            o = 0;
          o < r.length;
          o++
        ) {
          var s = r[o];
          if (s.dataset.precedence === t) a = s;
          else if (a !== i) break;
        }
        a
          ? a.parentNode.insertBefore(e, a.nextSibling)
          : ((t = n.nodeType === 9 ? n.head : n),
            t.insertBefore(e, t.firstChild));
      }
      function Hm(e, t) {
        ((e.crossOrigin ??= t.crossOrigin),
          (e.referrerPolicy ??= t.referrerPolicy),
          (e.title ??= t.title));
      }
      function Um(e, t) {
        ((e.crossOrigin ??= t.crossOrigin),
          (e.referrerPolicy ??= t.referrerPolicy),
          (e.integrity ??= t.integrity));
      }
      var Wm = null;
      function Gm(e, t, n) {
        if (Wm === null) {
          var r = new Map(),
            i = (Wm = new Map());
          i.set(n, r);
        } else ((i = Wm), (r = i.get(n)), r || ((r = new Map()), i.set(n, r)));
        if (r.has(e)) return r;
        for (
          r.set(e, null), n = n.getElementsByTagName(e), i = 0;
          i < n.length;
          i++
        ) {
          var a = n[i];
          if (
            !(
              a[Lt] ||
              a[At] ||
              (e === `link` && a.getAttribute(`rel`) === `stylesheet`)
            ) &&
            a.namespaceURI !== `http://www.w3.org/2000/svg`
          ) {
            var o = a.getAttribute(t) || ``;
            o = e + o;
            var s = r.get(o);
            s ? s.push(a) : r.set(o, [a]);
          }
        }
        return r;
      }
      function Km(e, t, n) {
        ((e = e.ownerDocument || e),
          e.head.insertBefore(
            n,
            t === `title` ? e.querySelector(`head > title`) : null,
          ));
      }
      function qm(e, t, n) {
        if (n === 1 || t.itemProp != null) return !1;
        switch (e) {
          case `meta`:
          case `title`:
            return !0;
          case `style`:
            if (
              typeof t.precedence != `string` ||
              typeof t.href != `string` ||
              t.href === ``
            )
              break;
            return !0;
          case `link`:
            if (
              typeof t.rel != `string` ||
              typeof t.href != `string` ||
              t.href === `` ||
              t.onLoad ||
              t.onError
            )
              break;
            switch (t.rel) {
              case `stylesheet`:
                return (
                  (e = t.disabled),
                  typeof t.precedence == `string` && e == null
                );
              default:
                return !0;
            }
          case `script`:
            if (
              t.async &&
              typeof t.async != `function` &&
              typeof t.async != `symbol` &&
              !t.onLoad &&
              !t.onError &&
              t.src &&
              typeof t.src == `string`
            )
              return !0;
        }
        return !1;
      }
      function Jm(e, t) {
        return (
          e === `img` &&
          t.src != null &&
          t.src !== `` &&
          t.onLoad == null &&
          t.loading !== `lazy`
        );
      }
      function Ym(e) {
        return !(e.type === `stylesheet` && !(e.state.loading & 3));
      }
      function Xm(e) {
        return (
          (e.width || 100) *
          (e.height || 100) *
          (typeof devicePixelRatio == `number` ? devicePixelRatio : 1) *
          0.25
        );
      }
      function Zm(e, t) {
        typeof t.decode == `function` &&
          (e.imgCount++,
          t.complete || ((e.imgBytes += Xm(t)), e.suspenseyImages.push(t)),
          (e = rh.bind(e)),
          t.decode().then(e, e));
      }
      function Qm(e, t, n, r) {
        if (
          n.type === `stylesheet` &&
          (typeof r.media != `string` || !1 !== matchMedia(r.media).matches) &&
          !(n.state.loading & 4)
        ) {
          if (n.instance === null) {
            var i = Pm(r.href),
              a = t.querySelector(Fm(i));
            if (a) {
              ((t = a._p),
                typeof t == `object` &&
                  t &&
                  typeof t.then == `function` &&
                  (e.count++, (e = nh.bind(e)), t.then(e, e)),
                (n.state.loading |= 4),
                (n.instance = a),
                Wt(a));
              return;
            }
            ((a = t.ownerDocument || t),
              (r = Im(r)),
              (i = vm.get(i)) && Hm(r, i),
              (a = a.createElement(`link`)),
              Wt(a));
            var o = a;
            ((o._p = new Promise(function (e, t) {
              ((o.onload = e), (o.onerror = t));
            })),
              np(a, `link`, r),
              (n.instance = a));
          }
          (e.stylesheets === null && (e.stylesheets = new Map()),
            e.stylesheets.set(n, t),
            (t = n.state.preload) &&
              !(n.state.loading & 3) &&
              (e.count++,
              (n = nh.bind(e)),
              t.addEventListener(`load`, n),
              t.addEventListener(`error`, n)));
        }
      }
      var $m = 0;
      function eh(e, t) {
        return (
          e.stylesheets && e.count === 0 && ah(e, e.stylesheets),
          0 < e.count || 0 < e.imgCount
            ? function (n) {
                var r = setTimeout(function () {
                  if ((e.stylesheets && ah(e, e.stylesheets), e.unsuspend)) {
                    var t = e.unsuspend;
                    ((e.unsuspend = null), t());
                  }
                }, 6e4 + t);
                0 < e.imgBytes && $m === 0 && ($m = 62500 * op());
                var i = setTimeout(
                  function () {
                    if (
                      ((e.waitingForImages = !1),
                      e.count === 0 &&
                        (e.stylesheets && ah(e, e.stylesheets), e.unsuspend))
                    ) {
                      var t = e.unsuspend;
                      ((e.unsuspend = null), t());
                    }
                  },
                  (e.imgBytes > $m ? 50 : 800) + t,
                );
                return (
                  (e.unsuspend = n),
                  function () {
                    ((e.unsuspend = null), clearTimeout(r), clearTimeout(i));
                  }
                );
              }
            : null
        );
      }
      function th(e) {
        if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
          if (e.stylesheets) ah(e, e.stylesheets);
          else if (e.unsuspend) {
            var t = e.unsuspend;
            ((e.unsuspend = null), t());
          }
        }
      }
      function nh() {
        (this.count--, th(this));
      }
      function rh() {
        (this.imgCount--, th(this));
      }
      var ih = null;
      function ah(e, t) {
        ((e.stylesheets = null),
          e.unsuspend !== null &&
            (e.count++,
            (ih = new Map()),
            t.forEach(oh, e),
            (ih = null),
            nh.call(e)));
      }
      function oh(e, t) {
        if (!(t.state.loading & 4)) {
          var n = ih.get(e);
          if (n) var r = n.get(null);
          else {
            ((n = new Map()), ih.set(e, n));
            for (
              var i = e.querySelectorAll(
                  `link[data-precedence],style[data-precedence]`,
                ),
                a = 0;
              a < i.length;
              a++
            ) {
              var o = i[a];
              (o.nodeName === `LINK` ||
                o.getAttribute(`media`) !== `not all`) &&
                (n.set(o.dataset.precedence, o), (r = o));
            }
            r && n.set(null, r);
          }
          ((i = t.instance),
            (o = i.getAttribute(`data-precedence`)),
            (a = n.get(o) || r),
            a === r && n.set(null, i),
            n.set(o, i),
            this.count++,
            (r = nh.bind(this)),
            i.addEventListener(`load`, r),
            i.addEventListener(`error`, r),
            a
              ? a.parentNode.insertBefore(i, a.nextSibling)
              : ((e = e.nodeType === 9 ? e.head : e),
                e.insertBefore(i, e.firstChild)),
            (t.state.loading |= 4));
        }
      }
      var sh = {
        $$typeof: se,
        Provider: null,
        Consumer: null,
        _currentValue: Ce,
        _currentValue2: Ce,
        _threadCount: 0,
      };
      function ch(e, t, n, r, i, a, o, s, c) {
        ((this.tag = 1),
          (this.containerInfo = e),
          (this.pingCache = this.current = this.pendingChildren = null),
          (this.timeoutHandle = -1),
          (this.callbackNode =
            this.next =
            this.pendingContext =
            this.context =
            this.cancelPendingCommit =
              null),
          (this.callbackPriority = 0),
          (this.expirationTimes = yt(-1)),
          (this.entangledLanes =
            this.shellSuspendCounter =
            this.errorRecoveryDisabledLanes =
            this.expiredLanes =
            this.warmLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = yt(0)),
          (this.hiddenUpdates = yt(null)),
          (this.identifierPrefix = r),
          (this.onUncaughtError = i),
          (this.onCaughtError = a),
          (this.onRecoverableError = o),
          (this.pooledCache = null),
          (this.pooledCacheLanes = 0),
          (this.formState = c),
          (this.transitionTypes = null),
          (this.incompleteTransitions = new Map()));
      }
      function lh(e, t, n, r, i, a, o, s, c, l, u, d) {
        return (
          (e = new ch(e, t, n, o, c, l, u, d, s)),
          (t = 1),
          !0 === a && (t |= 24),
          (a = Ri(3, null, null, t)),
          (e.current = a),
          (a.stateNode = e),
          (t = Ma()),
          t.refCount++,
          (e.pooledCache = t),
          t.refCount++,
          (a.memoizedState = { element: r, isDehydrated: n, cache: t }),
          mo(a),
          e
        );
      }
      function uh(e) {
        return e ? ((e = Ii), e) : Ii;
      }
      function dh(e, t, n, r, i, a) {
        ((i = uh(i)),
          r.context === null ? (r.context = i) : (r.pendingContext = i),
          (r = go(t)),
          (r.payload = { element: n }),
          (a = a === void 0 ? null : a),
          a !== null && (r.callback = a),
          (n = _o(e, r, t)),
          n !== null && (Pd(n, e, t), vo(n, e, t)));
      }
      function fh(e, t) {
        if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
          var n = e.retryLane;
          e.retryLane = n !== 0 && n < t ? n : t;
        }
      }
      function ph(e, t) {
        (fh(e, t), (e = e.alternate) && fh(e, t));
      }
      function mh(e) {
        if (e.tag === 13 || e.tag === 31) {
          var t = Ni(e, 67108864);
          (t !== null && Pd(t, e, 67108864), ph(e, 67108864));
        }
      }
      function hh(e) {
        if (e.tag === 13 || e.tag === 31) {
          var t = jd();
          t = Tt(t);
          var n = Ni(e, t);
          (n !== null && Pd(n, e, t), ph(e, t));
        }
      }
      var gh = !0;
      function _h(e, t, n, r) {
        var i = O.T;
        O.T = null;
        var a = k.p;
        try {
          ((k.p = 2), yh(e, t, n, r));
        } finally {
          ((k.p = a), (O.T = i));
        }
      }
      function vh(e, t, n, r) {
        var i = O.T;
        O.T = null;
        var a = k.p;
        try {
          ((k.p = 8), yh(e, t, n, r));
        } finally {
          ((k.p = a), (O.T = i));
        }
      }
      function yh(e, t, n, r) {
        if (gh) {
          var i = bh(r);
          if (i === null) (Kf(e, t, r, xh, n), Mh(e, r));
          else if (Ph(i, e, t, n, r)) r.stopPropagation();
          else if ((Mh(e, r), t & 4 && -1 < jh.indexOf(e))) {
            for (; i !== null;) {
              var a = Vt(i);
              if (a !== null)
                switch (a.tag) {
                  case 3:
                    if (
                      ((a = a.stateNode), a.current.memoizedState.isDehydrated)
                    ) {
                      var o = pt(a.pendingLanes);
                      if (o !== 0) {
                        var s = a;
                        for (s.pendingLanes |= 2, s.entangledLanes |= 2; o;) {
                          var c = 1 << (31 - ot(o));
                          ((s.entanglements[1] |= c), (o &= ~c));
                        }
                        (Ef(a), !(K & 6) && ((gd = Je() + 500), Df(0, !1)));
                      }
                    }
                    break;
                  case 31:
                  case 13:
                    ((s = Ni(a, 2)), s !== null && Pd(s, a, 2), zd(), ph(a, 2));
                }
              if (((a = bh(r)), a === null && Kf(e, t, r, xh, n), a === i))
                break;
              i = a;
            }
            i !== null && r.stopPropagation();
          } else Kf(e, t, r, null, n);
        }
      }
      function bh(e) {
        return ((e = On(e)), Sh(e));
      }
      var xh = null;
      function Sh(e) {
        if (((xh = null), (e = Bt(e)), e !== null)) {
          var t = o(e);
          if (t === null) e = null;
          else {
            var n = t.tag;
            if (n === 13) {
              if (((e = s(t)), e !== null)) return e;
              e = null;
            } else if (n === 31) {
              if (((e = c(t)), e !== null)) return e;
              e = null;
            } else if (n === 3) {
              if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
              e = null;
            } else t !== e && (e = null);
          }
        }
        return ((xh = e), null);
      }
      function Ch(e) {
        switch (e) {
          case `beforetoggle`:
          case `cancel`:
          case `click`:
          case `close`:
          case `contextmenu`:
          case `copy`:
          case `cut`:
          case `auxclick`:
          case `dblclick`:
          case `dragend`:
          case `dragstart`:
          case `drop`:
          case `focusin`:
          case `focusout`:
          case `input`:
          case `invalid`:
          case `keydown`:
          case `keypress`:
          case `keyup`:
          case `mousedown`:
          case `mouseup`:
          case `paste`:
          case `pause`:
          case `play`:
          case `pointercancel`:
          case `pointerdown`:
          case `pointerup`:
          case `ratechange`:
          case `reset`:
          case `seeked`:
          case `submit`:
          case `toggle`:
          case `touchcancel`:
          case `touchend`:
          case `touchstart`:
          case `volumechange`:
          case `change`:
          case `selectionchange`:
          case `textInput`:
          case `compositionstart`:
          case `compositionend`:
          case `compositionupdate`:
          case `beforeblur`:
          case `afterblur`:
          case `beforeinput`:
          case `blur`:
          case `fullscreenchange`:
          case `fullscreenerror`:
          case `focus`:
          case `hashchange`:
          case `popstate`:
          case `select`:
          case `selectstart`:
            return 2;
          case `drag`:
          case `dragenter`:
          case `dragexit`:
          case `dragleave`:
          case `dragover`:
          case `mousemove`:
          case `mouseout`:
          case `mouseover`:
          case `pointermove`:
          case `pointerout`:
          case `pointerover`:
          case `resize`:
          case `scroll`:
          case `touchmove`:
          case `wheel`:
          case `mouseenter`:
          case `mouseleave`:
          case `pointerenter`:
          case `pointerleave`:
            return 8;
          case `message`:
            switch (Ye()) {
              case Xe:
                return 2;
              case Ze:
                return 8;
              case Qe:
              case $e:
                return 32;
              case et:
                return 268435456;
              default:
                return 32;
            }
          default:
            return 32;
        }
      }
      var wh = !1,
        Th = null,
        Eh = null,
        Dh = null,
        Oh = new Map(),
        kh = new Map(),
        Ah = [],
        jh =
          `mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(
            ` `,
          );
      function Mh(e, t) {
        switch (e) {
          case `focusin`:
          case `focusout`:
            Th = null;
            break;
          case `dragenter`:
          case `dragleave`:
            Eh = null;
            break;
          case `mouseover`:
          case `mouseout`:
            Dh = null;
            break;
          case `pointerover`:
          case `pointerout`:
            Oh.delete(t.pointerId);
            break;
          case `gotpointercapture`:
          case `lostpointercapture`:
            kh.delete(t.pointerId);
        }
      }
      function Nh(e, t, n, r, i, a) {
        return e === null || e.nativeEvent !== a
          ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: a,
              targetContainers: [i],
            }),
            t !== null && ((t = Vt(t)), t !== null && mh(t)),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            i !== null && t.indexOf(i) === -1 && t.push(i),
            e);
      }
      function Ph(e, t, n, r, i) {
        switch (t) {
          case `focusin`:
            return ((Th = Nh(Th, e, t, n, r, i)), !0);
          case `dragenter`:
            return ((Eh = Nh(Eh, e, t, n, r, i)), !0);
          case `mouseover`:
            return ((Dh = Nh(Dh, e, t, n, r, i)), !0);
          case `pointerover`:
            var a = i.pointerId;
            return (Oh.set(a, Nh(Oh.get(a) || null, e, t, n, r, i)), !0);
          case `gotpointercapture`:
            return (
              (a = i.pointerId),
              kh.set(a, Nh(kh.get(a) || null, e, t, n, r, i)),
              !0
            );
        }
        return !1;
      }
      function Fh(e) {
        var t = Bt(e.target);
        if (t !== null) {
          var n = o(t);
          if (n !== null) {
            if (((t = n.tag), t === 13)) {
              if (((t = s(n)), t !== null)) {
                ((e.blockedOn = t),
                  Ot(e.priority, function () {
                    hh(n);
                  }));
                return;
              }
            } else if (t === 31) {
              if (((t = c(n)), t !== null)) {
                ((e.blockedOn = t),
                  Ot(e.priority, function () {
                    hh(n);
                  }));
                return;
              }
            } else if (
              t === 3 &&
              n.stateNode.current.memoizedState.isDehydrated
            ) {
              e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
              return;
            }
          }
        }
        e.blockedOn = null;
      }
      function Ih(e) {
        if (e.blockedOn !== null) return !1;
        for (var t = e.targetContainers; 0 < t.length;) {
          var n = bh(e.nativeEvent);
          if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            ((Dn = r), n.target.dispatchEvent(r), (Dn = null));
          } else
            return ((t = Vt(n)), t !== null && mh(t), (e.blockedOn = n), !1);
          t.shift();
        }
        return !0;
      }
      function Lh(e, t, n) {
        Ih(e) && n.delete(t);
      }
      function Rh() {
        ((wh = !1),
          Th !== null && Ih(Th) && (Th = null),
          Eh !== null && Ih(Eh) && (Eh = null),
          Dh !== null && Ih(Dh) && (Dh = null),
          Oh.forEach(Lh),
          kh.forEach(Lh));
      }
      function zh(e, n) {
        e.blockedOn === n &&
          ((e.blockedOn = null),
          wh ||
            ((wh = !0),
            t.unstable_scheduleCallback(t.unstable_NormalPriority, Rh)));
      }
      var Bh = null;
      function Vh(e) {
        Bh !== e &&
          ((Bh = e),
          t.unstable_scheduleCallback(t.unstable_NormalPriority, function () {
            Bh === e && (Bh = null);
            for (var t = 0; t < e.length; t += 3) {
              var n = e[t],
                r = e[t + 1],
                i = e[t + 2];
              if (typeof r != `function`) {
                if (Sh(r || n) === null) continue;
                break;
              }
              var a = Vt(n);
              a !== null &&
                (e.splice(t, 3),
                (t -= 3),
                ec(
                  a,
                  { pending: !0, data: i, method: n.method, action: r },
                  r,
                  i,
                ));
            }
          }));
      }
      function Hh(e) {
        function t(t) {
          return zh(t, e);
        }
        (Th !== null && zh(Th, e),
          Eh !== null && zh(Eh, e),
          Dh !== null && zh(Dh, e),
          Oh.forEach(t),
          kh.forEach(t));
        for (var n = 0; n < Ah.length; n++) {
          var r = Ah[n];
          r.blockedOn === e && (r.blockedOn = null);
        }
        for (; 0 < Ah.length && ((n = Ah[0]), n.blockedOn === null);)
          (Fh(n), n.blockedOn === null && Ah.shift());
        if (((n = (e.ownerDocument || e).$$reactFormReplay), n != null))
          for (r = 0; r < n.length; r += 3) {
            var i = n[r],
              a = n[r + 1],
              o = i[jt] || null;
            if (typeof a == `function`) o || Vh(n);
            else if (o) {
              var s = null;
              if (a && a.hasAttribute(`formAction`)) {
                if (((i = a), (o = a[jt] || null))) s = o.formAction;
                else if (Sh(i) !== null) continue;
              } else s = o.action;
              (typeof s == `function`
                ? (n[r + 1] = s)
                : (n.splice(r, 3), (r -= 3)),
                Vh(n));
            }
          }
      }
      function Uh() {
        function e(e) {
          e.canIntercept &&
            e.info === `react-transition` &&
            e.intercept({
              handler: function () {
                return new Promise(function (e) {
                  return (i = e);
                });
              },
              focusReset: `manual`,
              scroll: `manual`,
            });
        }
        function t() {
          (i !== null && (i(), (i = null)), r || setTimeout(n, 20));
        }
        function n() {
          if (!r && !navigation.transition) {
            var e = navigation.currentEntry;
            e &&
              e.url != null &&
              navigation.navigate(e.url, {
                state: e.getState(),
                info: `react-transition`,
                history: `replace`,
              });
          }
        }
        if (typeof navigation == `object`) {
          var r = !1,
            i = null;
          return (
            navigation.addEventListener(`navigate`, e),
            navigation.addEventListener(`navigatesuccess`, t),
            navigation.addEventListener(`navigateerror`, t),
            setTimeout(n, 100),
            function () {
              ((r = !0),
                navigation.removeEventListener(`navigate`, e),
                navigation.removeEventListener(`navigatesuccess`, t),
                navigation.removeEventListener(`navigateerror`, t),
                i !== null && (i(), (i = null)));
            }
          );
        }
      }
      function Wh(e) {
        this._internalRoot = e;
      }
      ((Gh.prototype.render = Wh.prototype.render =
        function (e) {
          var t = this._internalRoot;
          if (t === null) throw Error(i(409));
          var n = t.current;
          dh(n, jd(), e, t, null, null);
        }),
        (Gh.prototype.unmount = Wh.prototype.unmount =
          function () {
            var e = this._internalRoot;
            if (e !== null) {
              this._internalRoot = null;
              var t = e.containerInfo;
              (dh(e.current, 2, null, e, null, null), zd(), (t[Mt] = null));
            }
          }));
      function Gh(e) {
        this._internalRoot = e;
      }
      Gh.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = Dt();
          e = { blockedOn: null, target: e, priority: t };
          for (var n = 0; n < Ah.length && t !== 0 && t < Ah[n].priority; n++);
          (Ah.splice(n, 0, e), n === 0 && Fh(e));
        }
      };
      var Kh = n.version;
      if (Kh !== `19.3.1`) throw Error(i(527, Kh, `19.3.1`));
      k.findDOMNode = function (e) {
        var t = e._reactInternals;
        if (t === void 0)
          throw typeof e.render == `function`
            ? Error(i(188))
            : ((e = Object.keys(e).join(`,`)), Error(i(268, e)));
        return (
          (e = d(t)),
          (e = e === null ? null : p(e)),
          (e = e === null ? null : e.stateNode),
          e
        );
      };
      var qh = {
        bundleType: 0,
        version: `19.3.1`,
        rendererPackageName: `react-dom`,
        currentDispatcherRef: O,
        reconcilerVersion: `19.3.1`,
      };
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u`) {
        var Jh = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!Jh.isDisabled && Jh.supportsFiber)
          try {
            ((rt = Jh.inject(qh)), (it = Jh));
          } catch {}
      }
      e.createRoot = function (e, t) {
        if (!a(e)) throw Error(i(299));
        var n = !1,
          r = ``,
          o = Cc,
          s = wc,
          c = Tc;
        return (
          t != null &&
            (!0 === t.unstable_strictMode && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onUncaughtError !== void 0 && (o = t.onUncaughtError),
            t.onCaughtError !== void 0 && (s = t.onCaughtError),
            t.onRecoverableError !== void 0 && (c = t.onRecoverableError)),
          (t = lh(e, 1, !1, null, null, n, r, null, o, s, c, Uh)),
          (e[Mt] = t.current),
          Wf(e),
          new Wh(t)
        );
      };
    }),
    g = o((e, t) => {
      function n() {
        if (
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < `u` &&
          typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == `function`
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
          } catch (e) {
            console.error(e);
          }
      }
      (n(), (t.exports = h()));
    }),
    _ = c(u(), 1),
    v = g(),
    y = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i,
    b = /^[\\/]{2}/;
  function x(e, t) {
    return t + e.replace(/\\/g, `/`);
  }
  var S = `popstate`;
  function C(e) {
    return (
      typeof e == `object` &&
      !!e &&
      `pathname` in e &&
      `search` in e &&
      `hash` in e &&
      `state` in e &&
      `key` in e
    );
  }
  function w(e = {}) {
    function t(e, t) {
      let {
        pathname: n = `/`,
        search: r = ``,
        hash: i = ``,
      } = re(e.location.hash.substring(1));
      return (
        !n.startsWith(`/`) && !n.startsWith(`.`) && (n = `/` + n),
        te(
          ``,
          { pathname: n, search: r, hash: i },
          (t.state && t.state.usr) || null,
          (t.state && t.state.key) || `default`,
        )
      );
    }
    function n(e, t) {
      let n = e.document.querySelector(`base`),
        r = ``;
      if (n && n.getAttribute(`href`)) {
        let t = e.location.href,
          n = t.indexOf(`#`);
        r = n === -1 ? t : t.slice(0, n);
      }
      return r + `#` + (typeof t == `string` ? t : ne(t));
    }
    function r(e, t) {
      E(
        e.pathname.charAt(0) === `/`,
        `relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`,
      );
    }
    return ie(t, n, r, e);
  }
  function T(e, t) {
    if (e === !1 || e == null) throw Error(t);
  }
  function E(e, t) {
    if (!e) {
      typeof console < `u` && console.warn(t);
      try {
        throw Error(t);
      } catch {}
    }
  }
  function D() {
    return Math.random().toString(36).substring(2, 10);
  }
  function ee(e, t) {
    return {
      usr: e.state,
      key: e.key,
      idx: t,
      masked: e.mask
        ? { pathname: e.pathname, search: e.search, hash: e.hash }
        : void 0,
    };
  }
  function te(e, t, n = null, r, i) {
    return {
      pathname: typeof e == `string` ? e : e.pathname,
      search: ``,
      hash: ``,
      ...(typeof t == `string` ? re(t) : t),
      state: n,
      key: (t && t.key) || r || D(),
      mask: i,
    };
  }
  function ne({ pathname: e = `/`, search: t = ``, hash: n = `` }) {
    return (
      t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
      n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
      e
    );
  }
  function re(e) {
    let t = {};
    if (e) {
      let n = e.indexOf(`#`);
      n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
      let r = e.indexOf(`?`);
      (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
        e && (t.pathname = e));
    }
    return t;
  }
  function ie(e, t, n, r = {}) {
    let { window: i = document.defaultView, v5Compat: a = !1 } = r,
      o = i.history,
      s = `POP`,
      c = null,
      l = u();
    l ?? ((l = 0), o.replaceState({ ...o.state, idx: l }, ``));
    function u() {
      return (o.state || { idx: null }).idx;
    }
    function d() {
      s = `POP`;
      let e = u(),
        t = e == null ? null : e - l;
      ((l = e), c && c({ action: s, location: h.location, delta: t }));
    }
    function f(e, t) {
      s = `PUSH`;
      let r = C(e) ? e : te(h.location, e, t);
      (n && n(r, e), (l = u() + 1));
      let d = ee(r, l),
        f = h.createHref(r.mask || r);
      try {
        o.pushState(d, ``, f);
      } catch (e) {
        if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
        i.location.assign(f);
      }
      a && c && c({ action: s, location: h.location, delta: 1 });
    }
    function p(e, t) {
      s = `REPLACE`;
      let r = C(e) ? e : te(h.location, e, t);
      (n && n(r, e), (l = u()));
      let i = ee(r, l),
        d = h.createHref(r.mask || r);
      (o.replaceState(i, ``, d),
        a && c && c({ action: s, location: h.location, delta: 0 }));
    }
    function m(e) {
      return ae(i, e);
    }
    let h = {
      get action() {
        return s;
      },
      get location() {
        return e(i, o);
      },
      listen(e) {
        if (c) throw Error(`A history only accepts one active listener`);
        return (
          i.addEventListener(S, d),
          (c = e),
          () => {
            (i.removeEventListener(S, d), (c = null));
          }
        );
      },
      createHref(e) {
        return t(i, e);
      },
      createURL: m,
      encodeLocation(e) {
        let t = m(e);
        return { pathname: t.pathname, search: t.search, hash: t.hash };
      },
      push: f,
      replace: p,
      go(e) {
        return o.go(e);
      },
    };
    return h;
  }
  function ae(e, t, n = !1) {
    let r = `http://localhost`;
    (e &&
      (r = e.location.origin === `null` ? e.location.href : e.location.origin),
      T(r, `No window.location.(origin|href) available to create URL`));
    let i = typeof t == `string` ? t : ne(t);
    return (
      (i = i.replace(/ $/, `%20`)),
      !n && b.test(i) && (i = r + i),
      new URL(i, r)
    );
  }
  function oe(e, t, n = `/`) {
    return se(e, t, n, !1);
  }
  function se(e, t, n, r, i) {
    let a = we((typeof t == `string` ? re(t) : t).pathname || `/`, n);
    if (a == null) return null;
    let o = i ?? ce(e),
      s = null,
      c = Ce(a);
    for (let e = 0; s == null && e < o.length; ++e) s = xe(o[e], c, r);
    return s;
  }
  function ce(e) {
    let t = le(e);
    return (de(t), t);
  }
  function le(e, t = [], n = [], r = ``, i = !1) {
    let a = (e, a, o = i, s) => {
      let c = {
        relativePath: s === void 0 ? e.path || `` : s,
        caseSensitive: e.caseSensitive === !0,
        childrenIndex: a,
        route: e,
      };
      if (c.relativePath.startsWith(`/`)) {
        if (!c.relativePath.startsWith(r) && o) return;
        (T(
          c.relativePath.startsWith(r),
          `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
        ),
          (c.relativePath = c.relativePath.slice(r.length)));
      }
      let l = je([r, c.relativePath]),
        u = n.concat(c);
      (e.children &&
        e.children.length > 0 &&
        (T(
          e.index !== !0,
          `Index routes must not have child routes. Please remove all child routes from route path "${l}".`,
        ),
        le(e.children, t, u, l, o)),
        (e.path != null || e.index) &&
          t.push({
            path: l,
            score: ye(l, e.index),
            routesMeta: u.map((e, t) => {
              let [n, r] = k(
                e.relativePath,
                e.caseSensitive,
                t === u.length - 1,
              );
              return { ...e, matcher: n, compiledParams: r };
            }),
          }));
    };
    return (
      e.forEach((e, t) => {
        if (e.path === `` || !e.path?.includes(`?`)) a(e, t);
        else for (let n of ue(e.path)) a(e, t, !0, n);
      }),
      t
    );
  }
  function ue(e) {
    let t = e.split(`/`);
    if (t.length === 0) return [];
    let [n, ...r] = t,
      i = n.endsWith(`?`),
      a = n.replace(/\?$/, ``);
    if (r.length === 0) return i ? [a, ``] : [a];
    let o = ue(r.join(`/`)),
      s = [];
    return (
      s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
      i && s.push(...o),
      s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
    );
  }
  function de(e) {
    e.sort((e, t) =>
      e.score === t.score
        ? be(
            e.routesMeta.map((e) => e.childrenIndex),
            t.routesMeta.map((e) => e.childrenIndex),
          )
        : t.score - e.score,
    );
  }
  var fe = /^:[\w-]+$/,
    pe = 3,
    me = 2,
    he = 1,
    ge = 10,
    _e = -2,
    ve = (e) => e === `*`;
  function ye(e, t) {
    let n = e.split(`/`),
      r = n.length;
    return (
      n.some(ve) && (r += _e),
      t && (r += me),
      n
        .filter((e) => !ve(e))
        .reduce((e, t) => e + (fe.test(t) ? pe : t === `` ? he : ge), r)
    );
  }
  function be(e, t) {
    return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
      ? e[e.length - 1] - t[t.length - 1]
      : 0;
  }
  function xe(e, t, n = !1) {
    let { routesMeta: r } = e,
      i = {},
      a = `/`,
      o = [];
    for (let e = 0; e < r.length; ++e) {
      let s = r[e],
        c = e === r.length - 1,
        l = a === `/` ? t : t.slice(a.length) || `/`,
        u = { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
        d =
          s.matcher && s.compiledParams
            ? O(u, l, s.matcher, s.compiledParams)
            : Se(u, l),
        f = s.route;
      if (
        (!d &&
          c &&
          n &&
          !r[r.length - 1].route.index &&
          (d = Se(
            { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
            l,
          )),
        !d)
      )
        return null;
      (Object.assign(i, d.params),
        o.push({
          params: i,
          pathname: je([a, d.pathname]),
          pathnameBase: Ne(je([a, d.pathnameBase])),
          route: f,
        }),
        d.pathnameBase !== `/` && (a = je([a, d.pathnameBase])));
    }
    return o;
  }
  function Se(e, t) {
    typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = k(e.path, e.caseSensitive, e.end);
    return O(e, t, n, r);
  }
  function O(e, t, n, r) {
    let i = t.match(n);
    if (!i) return null;
    let a = i[0],
      o = Me(a, 1),
      s = i.slice(1);
    return {
      params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
        if (t === `*`) {
          let e = s[r] || ``;
          o = Me(a.slice(0, a.length - e.length), 1);
        }
        let i = s[r];
        return ((e[t] = n && !i ? void 0 : (i || ``).replace(/%2F/g, `/`)), e);
      }, {}),
      pathname: a,
      pathnameBase: o,
      pattern: e,
    };
  }
  function k(e, t = !1, n = !0) {
    E(
      e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
      `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`,
    );
    let r = [],
      i =
        `^` +
        e
          .replace(/\/*\*?$/, ``)
          .replace(/^\/*/, `/`)
          .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
          .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
            if ((r.push({ paramName: t, isOptional: n != null }), n)) {
              let t = a.charAt(i + e.length);
              return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`;
            }
            return `/([^\\/]+)`;
          })
          .replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
    return (
      e.endsWith(`*`)
        ? (r.push({ paramName: `*` }),
          (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
        : n
          ? (i += `\\/*$`)
          : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
      [new RegExp(i, t ? void 0 : `i`), r]
    );
  }
  function Ce(e) {
    try {
      return e
        .split(`/`)
        .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
        .join(`/`);
    } catch (t) {
      return (
        E(
          !1,
          `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
        ),
        e
      );
    }
  }
  function we(e, t) {
    if (t === `/`) return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith(`/`) ? t.length - 1 : t.length,
      r = e.charAt(n);
    return r && r !== `/` ? null : e.slice(n) || `/`;
  }
  function Te(e, t = `/`) {
    let {
        pathname: n,
        search: r = ``,
        hash: i = ``,
      } = typeof e == `string` ? re(e) : e,
      a;
    return (
      n
        ? ((n = Ae(n)),
          (a =
            n.startsWith(`/`) || n.startsWith(`\\`)
              ? Ee(n.substring(1), `/`)
              : Ee(n, t)))
        : (a = t),
      { pathname: a, search: Pe(r), hash: Fe(i) }
    );
  }
  function Ee(e, t) {
    let n = Me(t).split(`/`);
    return (
      e.split(`/`).forEach((e) => {
        e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
      }),
      n.length > 1 ? n.join(`/`) : `/`
    );
  }
  function De(e, t, n, r) {
    return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
  }
  function A(e) {
    return e.filter(
      (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
    );
  }
  function Oe(e) {
    let t = A(e);
    return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
  }
  function ke(e, t, n, r = !1) {
    let i;
    typeof e == `string`
      ? (i = re(e))
      : ((i = { ...e }),
        T(
          !i.pathname || !i.pathname.includes(`?`),
          De(`?`, `pathname`, `search`, i),
        ),
        T(
          !i.pathname || !i.pathname.includes(`#`),
          De(`#`, `pathname`, `hash`, i),
        ),
        T(!i.search || !i.search.includes(`#`), De(`#`, `search`, `hash`, i)));
    let a = e === `` || i.pathname === ``,
      o = a ? `/` : i.pathname,
      s;
    if (o == null) s = n;
    else {
      let e = t.length - 1;
      if (!r && o.startsWith(`..`)) {
        let t = o.split(`/`);
        for (; t[0] === `..`;) (t.shift(), --e);
        i.pathname = t.join(`/`);
      }
      s = e >= 0 ? t[e] : `/`;
    }
    let c = Te(i, s),
      l = o && o !== `/` && o.endsWith(`/`),
      u = (a || o === `.`) && n.endsWith(`/`);
    return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c);
  }
  var Ae = (e) => e.replace(/[\\/]{2,}/g, `/`),
    je = (e) => Ae(e.join(`/`));
  function Me(e, t = 0) {
    let n = e.length;
    for (; n > t && e.charCodeAt(n - 1) === 47;) n--;
    return n === e.length ? e : e.slice(0, n);
  }
  var Ne = (e) => Me(e).replace(/^\/*/, `/`),
    Pe = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e),
    Fe = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e),
    Ie = class {
      constructor(e, t, n, r = !1) {
        ((this.status = e),
          (this.statusText = t || ``),
          (this.internal = r),
          n instanceof Error
            ? ((this.data = n.toString()), (this.error = n))
            : (this.data = n));
      }
    };
  function Le(e) {
    return (
      e != null &&
      typeof e.status == `number` &&
      typeof e.statusText == `string` &&
      typeof e.internal == `boolean` &&
      `data` in e
    );
  }
  function Re(e) {
    return je(e.map((e) => e.route.path).filter(Boolean)) || `/`;
  }
  var ze =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0;
  function Be(e, t) {
    let n = e;
    if (typeof n != `string` || !y.test(n))
      return { absoluteURL: void 0, isExternal: !1, to: n };
    let r = n,
      i = !1;
    if (ze)
      try {
        let e = new URL(window.location.href),
          r = b.test(n) ? new URL(x(n, e.protocol)) : new URL(n),
          a = we(r.pathname, t);
        r.origin === e.origin && a != null
          ? (n = a + r.search + r.hash)
          : (i = !0);
      } catch {
        E(
          !1,
          `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
        );
      }
    return { absoluteURL: r, isExternal: i, to: n };
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
  var Ve = new URL(`http://localhost`);
  function He(e) {
    if (e.createURL) return e.createURL(`/`);
    try {
      return new URL(e.createHref(`/`), Ve);
    } catch {
      return Ve;
    }
  }
  function Ue(e, t) {
    return (
      e.origin === t.origin &&
      (e.origin !== `null` || (e.protocol === t.protocol && e.host === t.host))
    );
  }
  function We(e, t) {
    if (e.startsWith(`//`)) return !0;
    let n = t.protocol.toLowerCase();
    return e.toLowerCase().startsWith(n)
      ? t.host === `` || e.slice(n.length).startsWith(`//`)
      : !1;
  }
  function Ge(e, t, n, r) {
    let i = null;
    try {
      i = e == null ? null : new URL(e, n);
    } catch {}
    let a = new URL(t, n),
      o = i != null && !Ue(i, n),
      s = !Ue(a, n);
    if (r === `reject`) {
      if (o || s) throw Error(`External navigation is not allowed`);
    } else if (s && (i == null || !We(e, i) || !Ue(i, a)))
      throw Error(`External navigation is not allowed`);
  }
  var Ke = [`POST`, `PUT`, `PATCH`, `DELETE`];
  new Set(Ke);
  var qe = [`GET`, ...Ke];
  new Set(qe);
  var Je = [
    `about:`,
    `blob:`,
    `chrome:`,
    `chrome-untrusted:`,
    `content:`,
    `data:`,
    `devtools:`,
    `file:`,
    `filesystem:`,
    `javascript:`,
  ];
  function Ye(e) {
    try {
      return Je.includes(new URL(e).protocol);
    } catch {
      return !1;
    }
  }
  var Xe = _.createContext(null);
  Xe.displayName = `DataRouter`;
  var Ze = _.createContext(null);
  Ze.displayName = `DataRouterState`;
  var Qe = _.createContext(!1);
  function $e() {
    return _.useContext(Qe);
  }
  var et = _.createContext({ isTransitioning: !1 });
  et.displayName = `ViewTransition`;
  var tt = _.createContext(new Map());
  tt.displayName = `Fetchers`;
  var nt = _.createContext(null);
  nt.displayName = `Await`;
  var rt = _.createContext(null);
  rt.displayName = `Navigation`;
  var it = _.createContext(null);
  it.displayName = `Location`;
  var at = _.createContext({ outlet: null, matches: [], isDataRoute: !1 });
  at.displayName = `Route`;
  var ot = _.createContext(null);
  ot.displayName = `RouteError`;
  var st = `REACT_ROUTER_ERROR`,
    ct = `REDIRECT`,
    lt = `ROUTE_ERROR_RESPONSE`;
  function ut(e) {
    if (e.startsWith(`${st}:${ct}:{`))
      try {
        let t = JSON.parse(e.slice(28));
        if (
          typeof t == `object` &&
          t &&
          typeof t.status == `number` &&
          typeof t.statusText == `string` &&
          typeof t.location == `string` &&
          typeof t.reloadDocument == `boolean` &&
          typeof t.replace == `boolean`
        )
          return t;
      } catch {}
  }
  function dt(e) {
    if (e.startsWith(`${st}:${lt}:{`))
      try {
        let t = JSON.parse(e.slice(40));
        if (
          typeof t == `object` &&
          t &&
          typeof t.status == `number` &&
          typeof t.statusText == `string`
        )
          return new Ie(t.status, t.statusText, t.data);
      } catch {}
  }
  function ft(e, { relative: t } = {}) {
    T(
      pt(),
      `useHref() may be used only in the context of a <Router> component.`,
    );
    let { basename: n, navigator: r } = _.useContext(rt),
      { hash: i, pathname: a, search: o } = bt(e, { relative: t }),
      s = a;
    return (
      n !== `/` && (s = a === `/` ? n : je([n, a])),
      r.createHref({ pathname: s, search: o, hash: i })
    );
  }
  function pt() {
    return _.useContext(it) != null;
  }
  function mt() {
    return (
      T(
        pt(),
        `useLocation() may be used only in the context of a <Router> component.`,
      ),
      _.useContext(it).location
    );
  }
  var ht = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`;
  function gt(e) {
    _.useContext(rt).static || _.useLayoutEffect(e);
  }
  function _t() {
    let { isDataRoute: e } = _.useContext(at);
    return e ? Lt() : vt();
  }
  function vt() {
    T(
      pt(),
      `useNavigate() may be used only in the context of a <Router> component.`,
    );
    let e = _.useContext(Xe),
      { basename: t, navigator: n } = _.useContext(rt),
      { matches: r } = _.useContext(at),
      { pathname: i } = mt(),
      a = JSON.stringify(Oe(r)),
      o = _.useRef(!1);
    return (
      gt(() => {
        o.current = !0;
      }),
      _.useCallback(
        (r, s = {}) => {
          if ((E(o.current, ht), !o.current)) return;
          if (typeof r == `number`) {
            n.go(r);
            return;
          }
          let c = ke(r, JSON.parse(a), i, s.relative === `path`);
          (e == null &&
            t !== `/` &&
            (c.pathname = c.pathname === `/` ? t : je([t, c.pathname])),
            Ge(
              typeof r == `string` ? r : ne(r),
              n.createHref(c),
              He(n),
              `reject`,
            ),
            (s.replace ? n.replace : n.push)(c, s.state, s));
        },
        [t, n, a, i, e],
      )
    );
  }
  _.createContext(null);
  function yt() {
    let { matches: e } = _.useContext(at);
    return e[e.length - 1]?.params ?? {};
  }
  function bt(e, { relative: t } = {}) {
    let { matches: n } = _.useContext(at),
      { pathname: r } = mt(),
      i = JSON.stringify(Oe(n));
    return _.useMemo(() => ke(e, JSON.parse(i), r, t === `path`), [e, i, r, t]);
  }
  function xt(e, t) {
    return St(e, t);
  }
  function St(e, t, n) {
    T(
      pt(),
      `useRoutes() may be used only in the context of a <Router> component.`,
    );
    let { navigator: r } = _.useContext(rt),
      { matches: i } = _.useContext(at),
      a = i[i.length - 1],
      o = a ? a.params : {},
      s = a ? a.pathname : `/`,
      c = a ? a.pathnameBase : `/`,
      l = a && a.route;
    {
      let e = (l && l.path) || ``;
      zt(
        s,
        !l || e.endsWith(`*`) || e.endsWith(`*?`),
        `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`,
      );
    }
    let u = mt(),
      d;
    if (t) {
      let e = typeof t == `string` ? re(t) : t;
      (T(
        c === `/` || e.pathname?.startsWith(c),
        `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
      ),
        (d = e));
    } else d = u;
    let f = d.pathname || `/`,
      p = f;
    if (c !== `/`) {
      let e = c.replace(/^\//, ``).split(`/`);
      p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
    }
    let m =
      n && n.state.matches.length
        ? n.state.matches.map((e) =>
            Object.assign(e, { route: n.manifest[e.route.id] || e.route }),
          )
        : oe(e, { pathname: p });
    (E(
      l || m != null,
      `No routes matched location "${d.pathname}${d.search}${d.hash}" `,
    ),
      E(
        m == null ||
          m[m.length - 1].route.element !== void 0 ||
          m[m.length - 1].route.Component !== void 0 ||
          m[m.length - 1].route.lazy !== void 0,
        `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
      ));
    let h = kt(
      m &&
        m.map((e) =>
          Object.assign({}, e, {
            params: Object.assign({}, o, e.params),
            pathname: je([
              c,
              r.encodeLocation
                ? r.encodeLocation(
                    e.pathname
                      .replace(/%/g, `%25`)
                      .replace(/\?/g, `%3F`)
                      .replace(/#/g, `%23`),
                  ).pathname
                : e.pathname,
            ]),
            pathnameBase:
              e.pathnameBase === `/`
                ? c
                : je([
                    c,
                    r.encodeLocation
                      ? r.encodeLocation(
                          e.pathnameBase
                            .replace(/%/g, `%25`)
                            .replace(/\?/g, `%3F`)
                            .replace(/#/g, `%23`),
                        ).pathname
                      : e.pathnameBase,
                  ]),
          }),
        ),
      i,
      n,
    );
    return t && h
      ? _.createElement(
          it.Provider,
          {
            value: {
              location: {
                pathname: `/`,
                search: ``,
                hash: ``,
                state: null,
                key: `default`,
                mask: void 0,
                ...d,
              },
              navigationType: `POP`,
            },
          },
          h,
        )
      : h;
  }
  function Ct() {
    let e = It(),
      t = Le(e)
        ? `${e.status} ${e.statusText}`
        : e instanceof Error
          ? e.message
          : JSON.stringify(e),
      n = e instanceof Error ? e.stack : null,
      r = `rgba(200,200,200, 0.5)`,
      i = { padding: `0.5rem`, backgroundColor: r },
      a = { padding: `2px 4px`, backgroundColor: r },
      o = null;
    return (
      console.error(`Error handled by React Router default ErrorBoundary:`, e),
      (o = _.createElement(
        _.Fragment,
        null,
        _.createElement(`p`, null, `💿 Hey developer 👋`),
        _.createElement(
          `p`,
          null,
          `You can provide a way better UX than this when your app throws errors by providing your own `,
          _.createElement(`code`, { style: a }, `ErrorBoundary`),
          ` or`,
          ` `,
          _.createElement(`code`, { style: a }, `errorElement`),
          ` prop on your route.`,
        ),
      )),
      _.createElement(
        _.Fragment,
        null,
        _.createElement(`h2`, null, `Unexpected Application Error!`),
        _.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
        n ? _.createElement(`pre`, { style: i }, n) : null,
        o,
      )
    );
  }
  var wt = _.createElement(Ct, null),
    Tt = class extends _.Component {
      constructor(e) {
        (super(e),
          (this.state = {
            location: e.location,
            revalidation: e.revalidation,
            error: e.error,
          }));
      }
      static getDerivedStateFromError(e) {
        return { error: e };
      }
      static getDerivedStateFromProps(e, t) {
        return t.location !== e.location ||
          (t.revalidation !== `idle` && e.revalidation === `idle`)
          ? {
              error: e.error,
              location: e.location,
              revalidation: e.revalidation,
            }
          : {
              error: e.error === void 0 ? t.error : e.error,
              location: t.location,
              revalidation: e.revalidation || t.revalidation,
            };
      }
      componentDidCatch(e, t) {
        this.props.onError
          ? this.props.onError(e, t)
          : console.error(
              `React Router caught the following error during render`,
              e,
            );
      }
      render() {
        let e = this.state.error;
        if (
          this.context &&
          typeof e == `object` &&
          e &&
          `digest` in e &&
          typeof e.digest == `string`
        ) {
          let t = dt(e.digest);
          t && (e = t);
        }
        let t =
          e === void 0
            ? this.props.children
            : _.createElement(
                at.Provider,
                { value: this.props.routeContext },
                _.createElement(ot.Provider, {
                  value: e,
                  children: this.props.component,
                }),
              );
        return this.context ? _.createElement(Dt, { error: e }, t) : t;
      }
    };
  Tt.contextType = Qe;
  var Et = new WeakMap();
  function Dt({ children: e, error: t }) {
    let { basename: n, navigator: r } = _.useContext(rt);
    if (
      typeof t == `object` &&
      t &&
      `digest` in t &&
      typeof t.digest == `string`
    ) {
      let e = ut(t.digest);
      if (e) {
        let i = Et.get(t);
        if (i) throw i;
        let a = Be(e.location, n),
          o = a.absoluteURL || a.to;
        if ((Ge(e.location, o, He(r), `allow-explicit`), Ye(o)))
          throw Error(`Invalid redirect location`);
        if (ze && !Et.get(t)) {
          if (a.isExternal || e.reloadDocument) window.location.href = o;
          else {
            let n = Promise.resolve().then(() =>
              window.__reactRouterDataRouter.navigate(a.to, {
                replace: e.replace,
              }),
            );
            throw (Et.set(t, n), n);
          }
        }
        return _.createElement(`meta`, {
          httpEquiv: `refresh`,
          content: `0;url=${o}`,
        });
      }
    }
    return e;
  }
  function Ot({ routeContext: e, match: t, children: n }) {
    let r = _.useContext(Xe);
    return (
      r &&
        r.static &&
        r.staticContext &&
        (t.route.errorElement || t.route.ErrorBoundary) &&
        (r.staticContext._deepestRenderedBoundaryId = t.route.id),
      _.createElement(at.Provider, { value: e }, n)
    );
  }
  function kt(e, t = [], n) {
    let r = n?.state;
    if (e == null) {
      if (!r) return null;
      if (r.errors) e = r.matches;
      else if (t.length === 0 && !r.initialized && r.matches.length > 0)
        e = r.matches;
      else return null;
    }
    let i = e,
      a = r?.errors;
    if (a != null) {
      let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
      (T(
        e >= 0,
        `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`,
      ),
        (i = i.slice(0, Math.min(i.length, e + 1))));
    }
    let o = !1,
      s = -1;
    if (n && r) {
      o = r.renderFallback;
      for (let e = 0; e < i.length; e++) {
        let t = i[e];
        if (
          ((t.route.HydrateFallback || t.route.hydrateFallbackElement) &&
            (s = e),
          t.route.id)
        ) {
          let { loaderData: e, errors: a } = r,
            c =
              t.route.loader &&
              !e.hasOwnProperty(t.route.id) &&
              (!a || a[t.route.id] === void 0);
          if (t.route.lazy || c) {
            (n.isStatic && (o = !0), (i = s >= 0 ? i.slice(0, s + 1) : [i[0]]));
            break;
          }
        }
      }
    }
    let c = n?.onError,
      l =
        r && c
          ? (e, t) => {
              c(e, {
                location: r.location,
                params: r.matches?.[0]?.params ?? {},
                pattern: Re(r.matches),
                errorInfo: t,
              });
            }
          : void 0;
    return i.reduceRight((e, n, c) => {
      let u,
        d = !1,
        f = null,
        p = null;
      r &&
        ((u = a && n.route.id ? a[n.route.id] : void 0),
        (f = n.route.errorElement || wt),
        o &&
          (s < 0 && c === 0
            ? (zt(
                `route-fallback`,
                !1,
                "No `HydrateFallback` element provided to render during initial hydration",
              ),
              (d = !0),
              (p = null))
            : s === c &&
              ((d = !0), (p = n.route.hydrateFallbackElement || null))));
      let m = t.concat(i.slice(0, c + 1)),
        h = () => {
          let t;
          return (
            (t = u
              ? f
              : d
                ? p
                : n.route.Component
                  ? _.createElement(n.route.Component, null)
                  : n.route.element
                    ? n.route.element
                    : e),
            _.createElement(Ot, {
              match: n,
              routeContext: { outlet: e, matches: m, isDataRoute: r != null },
              children: t,
            })
          );
        };
      return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0)
        ? _.createElement(Tt, {
            location: r.location,
            revalidation: r.revalidation,
            component: f,
            error: u,
            children: h(),
            routeContext: { outlet: null, matches: m, isDataRoute: !0 },
            onError: l,
          })
        : h();
    }, null);
  }
  function At(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function jt(e) {
    let t = _.useContext(Xe);
    return (T(t, At(e)), t);
  }
  function Mt(e) {
    let t = _.useContext(Ze);
    return (T(t, At(e)), t);
  }
  function Nt(e) {
    let t = _.useContext(at);
    return (T(t, At(e)), t);
  }
  function Pt(e) {
    let t = Nt(e),
      n = t.matches[t.matches.length - 1];
    return (
      T(
        n.route.id,
        `${e} can only be used on routes that contain a unique "id"`,
      ),
      n.route.id
    );
  }
  function Ft() {
    return Pt(`useRouteId`);
  }
  function It() {
    let e = _.useContext(ot),
      t = Mt(`useRouteError`),
      n = Pt(`useRouteError`);
    return e === void 0 ? t.errors?.[n] : e;
  }
  function Lt() {
    let { router: e } = jt(`useNavigate`),
      t = Pt(`useNavigate`),
      n = _.useRef(!1);
    return (
      gt(() => {
        n.current = !0;
      }),
      _.useCallback(
        async (r, i = {}) => {
          (E(n.current, ht),
            n.current &&
              (typeof r == `number`
                ? await e.navigate(r)
                : await e.navigate(r, { fromRouteId: t, ...i })));
        },
        [e, t],
      )
    );
  }
  var Rt = {};
  function zt(e, t, n) {
    !t && !Rt[e] && ((Rt[e] = !0), E(!1, n));
  }
  _.memo(Bt);
  function Bt({
    routes: e,
    manifest: t,
    future: n,
    state: r,
    isStatic: i,
    onError: a,
  }) {
    return St(e, void 0, {
      manifest: t,
      state: r,
      isStatic: i,
      onError: a,
      future: n,
    });
  }
  function Vt({ to: e, replace: t, state: n, relative: r }) {
    T(
      pt(),
      `<Navigate> may be used only in the context of a <Router> component.`,
    );
    let { static: i, navigator: a } = _.useContext(rt);
    E(
      !i,
      `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`,
    );
    let { matches: o } = _.useContext(at),
      { pathname: s } = mt(),
      c = _t(),
      l = ke(e, Oe(o), s, r === `path`);
    Ge(typeof e == `string` ? e : ne(e), a.createHref(l), He(a), `reject`);
    let u = JSON.stringify(l);
    return (
      _.useEffect(() => {
        c(JSON.parse(u), { replace: t, state: n, relative: r });
      }, [c, u, r, t, n]),
      null
    );
  }
  function Ht(e) {
    T(
      !1,
      `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`,
    );
  }
  function Ut({
    basename: e = `/`,
    children: t = null,
    location: n,
    navigationType: r = `POP`,
    navigator: i,
    static: a = !1,
    useTransitions: o,
  }) {
    T(
      !pt(),
      `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`,
    );
    let s = e.replace(/^\/*/, `/`),
      c = _.useMemo(
        () => ({
          basename: s,
          navigator: i,
          static: a,
          useTransitions: o,
          future: {},
        }),
        [s, i, a, o],
      );
    typeof n == `string` && (n = re(n));
    let {
        pathname: l = `/`,
        search: u = ``,
        hash: d = ``,
        state: f = null,
        key: p = `default`,
        mask: m,
      } = n,
      h = _.useMemo(() => {
        let e = we(l, s);
        return e == null
          ? null
          : {
              location: {
                pathname: e,
                search: u,
                hash: d,
                state: f,
                key: p,
                mask: m,
              },
              navigationType: r,
            };
      }, [s, l, u, d, f, p, r, m]);
    return (
      E(
        h != null,
        `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
      ),
      h == null
        ? null
        : _.createElement(
            rt.Provider,
            { value: c },
            _.createElement(it.Provider, { children: t, value: h }),
          )
    );
  }
  function Wt({ children: e, location: t }) {
    return xt(Gt(e), t);
  }
  _.Component;
  function Gt(e, t = []) {
    let n = [];
    return (
      _.Children.forEach(e, (e, r) => {
        if (!_.isValidElement(e)) return;
        let i = [...t, r];
        if (e.type === _.Fragment) {
          n.push.apply(n, Gt(e.props.children, i));
          return;
        }
        (T(
          e.type === Ht,
          `[${typeof e.type == `string` ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
        ),
          T(
            !e.props.index || !e.props.children,
            `An index route cannot have child routes.`,
          ));
        let a = {
          id: e.props.id || i.join(`-`),
          caseSensitive: e.props.caseSensitive,
          element: e.props.element,
          Component: e.props.Component,
          index: e.props.index,
          path: e.props.path,
          middleware: e.props.middleware,
          loader: e.props.loader,
          action: e.props.action,
          hydrateFallbackElement: e.props.hydrateFallbackElement,
          HydrateFallback: e.props.HydrateFallback,
          errorElement: e.props.errorElement,
          ErrorBoundary: e.props.ErrorBoundary,
          hasErrorBoundary:
            e.props.hasErrorBoundary === !0 ||
            e.props.ErrorBoundary != null ||
            e.props.errorElement != null,
          shouldRevalidate: e.props.shouldRevalidate,
          handle: e.props.handle,
          lazy: e.props.lazy,
        };
        (e.props.children && (a.children = Gt(e.props.children, i)), n.push(a));
      }),
      n
    );
  }
  var Kt = `get`,
    qt = `application/x-www-form-urlencoded`;
  function Jt(e) {
    return typeof HTMLElement < `u` && e instanceof HTMLElement;
  }
  function Yt(e) {
    return Jt(e) && e.tagName.toLowerCase() === `button`;
  }
  function Xt(e) {
    return Jt(e) && e.tagName.toLowerCase() === `form`;
  }
  function Zt(e) {
    return Jt(e) && e.tagName.toLowerCase() === `input`;
  }
  function Qt(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
  }
  function $t(e, t) {
    return e.button === 0 && (!t || t === `_self`) && !Qt(e);
  }
  function j(e = ``) {
    return new URLSearchParams(
      typeof e == `string` || Array.isArray(e) || e instanceof URLSearchParams
        ? e
        : Object.keys(e).reduce((t, n) => {
            let r = e[n];
            return t.concat(Array.isArray(r) ? r.map((e) => [n, e]) : [[n, r]]);
          }, []),
    );
  }
  function en(e, t) {
    let n = j(e);
    return (
      t &&
        t.forEach((e, r) => {
          n.has(r) ||
            t.getAll(r).forEach((e) => {
              n.append(r, e);
            });
        }),
      n
    );
  }
  var tn = null;
  function nn() {
    if (tn === null)
      try {
        (new FormData(document.createElement(`form`), 0), (tn = !1));
      } catch {
        tn = !0;
      }
    return tn;
  }
  var rn = new Set([
    `application/x-www-form-urlencoded`,
    `multipart/form-data`,
    `text/plain`,
  ]);
  function an(e) {
    return e != null && !rn.has(e)
      ? (E(
          !1,
          `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${qt}"`,
        ),
        null)
      : e;
  }
  function on(e, t) {
    let n, r, i, a, o;
    if (Xt(e)) {
      let o = e.getAttribute(`action`);
      ((r = o ? we(o, t) : null),
        (n = e.getAttribute(`method`) || Kt),
        (i = an(e.getAttribute(`enctype`)) || qt),
        (a = new FormData(e)));
    } else if (
      Yt(e) ||
      (Zt(e) && (e.type === `submit` || e.type === `image`))
    ) {
      let o = e.form;
      if (o == null)
        throw Error(
          `Cannot submit a <button> or <input type="submit"> without a <form>`,
        );
      let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
      if (
        ((r = s ? we(s, t) : null),
        (n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || Kt),
        (i =
          an(e.getAttribute(`formenctype`)) ||
          an(o.getAttribute(`enctype`)) ||
          qt),
        (a = new FormData(o, e)),
        !nn())
      ) {
        let { name: t, type: n, value: r } = e;
        if (n === `image`) {
          let e = t ? `${t}.` : ``;
          (a.append(`${e}x`, `0`), a.append(`${e}y`, `0`));
        } else t && a.append(t, r);
      }
    } else if (Jt(e))
      throw Error(
        `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`,
      );
    else ((n = Kt), (r = null), (i = qt), (o = e));
    return (
      a && i === `text/plain` && ((o = a), (a = void 0)),
      { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
    );
  }
  Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);
  function sn(e, t) {
    if (e === !1 || e == null) throw Error(t);
  }
  function cn(e, t, n, r) {
    let i =
      typeof e == `string`
        ? new URL(
            e,
            typeof window > `u`
              ? `server://singlefetch/`
              : window.location.origin,
          )
        : e;
    return (
      (i.pathname = n
        ? i.pathname.endsWith(`/`)
          ? `${i.pathname}_.${r}`
          : `${i.pathname}.${r}`
        : i.pathname === `/`
          ? `_root.${r}`
          : t && we(i.pathname, t) === `/`
            ? `${Me(t)}/_root.${r}`
            : `${Me(i.pathname)}.${r}`),
      i
    );
  }
  async function ln(e, t) {
    if (e.id in t) return t[e.id];
    try {
      let n = await import(e.module);
      return ((t[e.id] = n), n);
    } catch (t) {
      return (
        console.error(
          `Error loading route module \`${e.module}\`, reloading page...`,
        ),
        console.error(t),
        window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
        window.location.reload(),
        new Promise(() => {})
      );
    }
  }
  function un(e) {
    return e != null && typeof e.page == `string`;
  }
  function dn(e) {
    return e == null
      ? !1
      : e.href == null
        ? e.rel === `preload` &&
          typeof e.imageSrcSet == `string` &&
          typeof e.imageSizes == `string`
        : typeof e.rel == `string` && typeof e.href == `string`;
  }
  async function fn(e, t, n) {
    return _n(
      (
        await Promise.all(
          e.map(async (e) => {
            let r = t.routes[e.route.id];
            if (r) {
              let e = await ln(r, n);
              return e.links ? e.links() : [];
            }
            return [];
          }),
        )
      )
        .flat(1)
        .filter(dn)
        .filter((e) => e.rel === `stylesheet` || e.rel === `preload`)
        .map((e) =>
          e.rel === `stylesheet`
            ? { ...e, rel: `prefetch`, as: `style` }
            : { ...e, rel: `prefetch` },
        ),
    );
  }
  function pn(e, t, n, r, i, a) {
    let o = (e, t) => !n[t] || e.route.id !== n[t].route.id,
      s = (e, t) =>
        n[t].pathname !== e.pathname ||
        (n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`]);
    return a === `assets`
      ? t.filter((e, t) => o(e, t) || s(e, t))
      : a === `data`
        ? t.filter((t, a) => {
            let c = r.routes[t.route.id];
            if (!c || !c.hasLoader) return !1;
            if (o(t, a) || s(t, a)) return !0;
            if (t.route.shouldRevalidate) {
              let r = t.route.shouldRevalidate({
                currentUrl: new URL(
                  i.pathname + i.search + i.hash,
                  window.origin,
                ),
                currentParams: n[0]?.params || {},
                nextUrl: new URL(e, window.origin),
                nextParams: t.params,
                defaultShouldRevalidate: !0,
              });
              if (typeof r == `boolean`) return r;
            }
            return !0;
          })
        : [];
  }
  function mn(e, t, { includeHydrateFallback: n } = {}) {
    return hn(
      e
        .map((e) => {
          let r = t.routes[e.route.id];
          if (!r) return [];
          let i = [r.module];
          return (
            r.clientActionModule && (i = i.concat(r.clientActionModule)),
            r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
            n &&
              r.hydrateFallbackModule &&
              (i = i.concat(r.hydrateFallbackModule)),
            r.imports && (i = i.concat(r.imports)),
            i
          );
        })
        .flat(1),
    );
  }
  function hn(e) {
    return [...new Set(e)];
  }
  function gn(e) {
    let t = {},
      n = Object.keys(e).sort();
    for (let r of n) t[r] = e[r];
    return t;
  }
  function _n(e, t) {
    let n = new Set(),
      r = new Set(t);
    return e.reduce((e, i) => {
      if (t && !un(i) && i.as === `script` && i.href && r.has(i.href)) return e;
      let a = JSON.stringify(gn(i));
      return (n.has(a) || (n.add(a), e.push({ key: a, link: i })), e);
    }, []);
  }
  function vn() {
    let e = _.useContext(Xe);
    return (
      sn(
        e,
        `You must render this element inside a <DataRouterContext.Provider> element`,
      ),
      e
    );
  }
  function yn() {
    let e = _.useContext(Ze);
    return (
      sn(
        e,
        `You must render this element inside a <DataRouterStateContext.Provider> element`,
      ),
      e
    );
  }
  var bn = _.createContext(void 0);
  bn.displayName = `FrameworkContext`;
  function xn() {
    let e = _.useContext(bn);
    return (
      sn(e, `You must render this element inside a <HydratedRouter> element`),
      e
    );
  }
  function Sn(e, t) {
    let n = _.useContext(bn),
      [r, i] = _.useState(!1),
      [a, o] = _.useState(!1),
      {
        onFocus: s,
        onBlur: c,
        onMouseEnter: l,
        onMouseLeave: u,
        onTouchStart: d,
      } = t,
      f = _.useRef(null);
    (_.useEffect(() => {
      if ((e === `render` && o(!0), e === `viewport`)) {
        let e = new IntersectionObserver(
          (e) => {
            e.forEach((e) => {
              o(e.isIntersecting);
            });
          },
          { threshold: 0.5 },
        );
        return (
          f.current && e.observe(f.current),
          () => {
            e.disconnect();
          }
        );
      }
    }, [e]),
      _.useEffect(() => {
        if (r) {
          let e = setTimeout(() => {
            o(!0);
          }, 100);
          return () => {
            clearTimeout(e);
          };
        }
      }, [r]));
    let p = () => {
        i(!0);
      },
      m = () => {
        (i(!1), o(!1));
      };
    return n
      ? e === `intent`
        ? [
            a,
            f,
            {
              onFocus: Cn(s, p),
              onBlur: Cn(c, m),
              onMouseEnter: Cn(l, p),
              onMouseLeave: Cn(u, m),
              onTouchStart: Cn(d, p),
            },
          ]
        : [a, f, {}]
      : [!1, f, {}];
  }
  function Cn(e, t) {
    return (n) => {
      (e && e(n), n.defaultPrevented || t(n));
    };
  }
  function wn({ page: e, ...t }) {
    let n = $e(),
      { nonce: r } = xn(),
      { router: i } = vn(),
      a = _.useMemo(
        () => oe(i.routes, e, i.basename),
        [i.routes, e, i.basename],
      );
    return a
      ? (t.nonce == null && r && (t = { ...t, nonce: r }),
        n
          ? _.createElement(En, { page: e, matches: a, ...t })
          : _.createElement(Dn, { page: e, matches: a, ...t }))
      : null;
  }
  function Tn(e) {
    let { manifest: t, routeModules: n } = xn(),
      [r, i] = _.useState([]);
    return (
      _.useEffect(() => {
        let r = !1;
        return (
          fn(e, t, n).then((e) => {
            r || i(e);
          }),
          () => {
            r = !0;
          }
        );
      }, [e, t, n]),
      r
    );
  }
  function En({ page: e, matches: t, ...n }) {
    let r = mt(),
      { future: i } = xn(),
      { basename: a } = vn(),
      o = _.useMemo(() => {
        if (e === r.pathname + r.search + r.hash) return [];
        let n = cn(e, a, i.v8_trailingSlashAwareDataRequests, `rsc`),
          o = !1,
          s = [];
        for (let e of t)
          typeof e.route.shouldRevalidate == `function`
            ? (o = !0)
            : s.push(e.route.id);
        return (
          o && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
          [n.pathname + n.search]
        );
      }, [a, i.v8_trailingSlashAwareDataRequests, e, r, t]);
    return _.createElement(
      _.Fragment,
      null,
      o.map((e) =>
        _.createElement(`link`, {
          key: e,
          rel: `prefetch`,
          as: `fetch`,
          href: e,
          ...n,
        }),
      ),
    );
  }
  function Dn({ page: e, matches: t, ...n }) {
    let r = mt(),
      { future: i, manifest: a, routeModules: o } = xn(),
      { basename: s } = vn(),
      { loaderData: c, matches: l } = yn(),
      u = _.useMemo(() => pn(e, t, l, a, r, `data`), [e, t, l, a, r]),
      d = _.useMemo(() => pn(e, t, l, a, r, `assets`), [e, t, l, a, r]),
      f = _.useMemo(() => {
        if (e === r.pathname + r.search + r.hash) return [];
        let n = new Set(),
          l = !1;
        if (
          (t.forEach((e) => {
            let t = a.routes[e.route.id];
            t &&
              t.hasLoader &&
              ((!u.some((t) => t.route.id === e.route.id) &&
                e.route.id in c &&
                o[e.route.id]?.shouldRevalidate) ||
              t.hasClientLoader
                ? (l = !0)
                : n.add(e.route.id));
          }),
          n.size === 0)
        )
          return [];
        let d = cn(e, s, i.v8_trailingSlashAwareDataRequests, `data`);
        return (
          l &&
            n.size > 0 &&
            d.searchParams.set(
              `_routes`,
              t
                .filter((e) => n.has(e.route.id))
                .map((e) => e.route.id)
                .join(`,`),
            ),
          [d.pathname + d.search]
        );
      }, [s, i.v8_trailingSlashAwareDataRequests, c, r, a, u, t, e, o]),
      p = _.useMemo(() => mn(d, a), [d, a]),
      m = Tn(d);
    return _.createElement(
      _.Fragment,
      null,
      f.map((e) =>
        _.createElement(`link`, {
          key: e,
          rel: `prefetch`,
          as: `fetch`,
          href: e,
          ...n,
        }),
      ),
      p.map((e) =>
        _.createElement(`link`, {
          key: e,
          rel: `modulepreload`,
          href: e,
          ...n,
        }),
      ),
      m.map(({ key: e, link: t }) =>
        _.createElement(`link`, {
          key: e,
          nonce: n.nonce,
          ...t,
          crossOrigin: t.crossOrigin ?? n.crossOrigin,
        }),
      ),
    );
  }
  function On(...e) {
    return (t) => {
      e.forEach((e) => {
        typeof e == `function` ? e(t) : e != null && (e.current = t);
      });
    };
  }
  _.Component;
  var kn =
    typeof window < `u` &&
    window.document !== void 0 &&
    window.document.createElement !== void 0;
  try {
    kn && (window.__reactRouterVersion = `7.18.5`);
  } catch {}
  function An({ basename: e, children: t, useTransitions: n, window: r }) {
    let i = _.useRef();
    i.current ??= w({ window: r, v5Compat: !0 });
    let a = i.current,
      [o, s] = _.useState({ action: a.action, location: a.location }),
      c = _.useCallback(
        (e) => {
          n === !1 ? s(e) : _.startTransition(() => s(e));
        },
        [n],
      );
    return (
      _.useLayoutEffect(() => a.listen(c), [a, c]),
      _.createElement(Ut, {
        basename: e,
        children: t,
        location: o.location,
        navigationType: o.action,
        navigator: a,
        useTransitions: n,
      })
    );
  }
  var M = _.forwardRef(function (
    {
      onClick: e,
      discover: t = `render`,
      prefetch: n = `none`,
      relative: r,
      reloadDocument: i,
      replace: a,
      mask: o,
      state: s,
      target: c,
      to: l,
      preventScrollReset: u,
      viewTransition: d,
      defaultShouldRevalidate: f,
      ...p
    },
    m,
  ) {
    let { basename: h, navigator: g, useTransitions: v } = _.useContext(rt),
      b = typeof l == `string` && y.test(l),
      x = Be(l, h);
    l = x.to;
    let S = ft(l, { relative: r }),
      C = mt(),
      w = null;
    if (o) {
      let e = ke(o, [], C.mask ? C.mask.pathname : `/`, !0);
      (h !== `/` && (e.pathname = e.pathname === `/` ? h : je([h, e.pathname])),
        (w = g.createHref(e)));
    }
    let [T, E, D] = Sn(n, p),
      ee = Fn(l, {
        replace: a,
        mask: o,
        state: s,
        target: c,
        preventScrollReset: u,
        relative: r,
        viewTransition: d,
        defaultShouldRevalidate: f,
        useTransitions: v,
      });
    function te(t) {
      (e && e(t), t.defaultPrevented || ee(t));
    }
    let ne = !(x.isExternal || i),
      re = _.createElement(`a`, {
        ...p,
        ...D,
        href: (ne ? w : void 0) || x.absoluteURL || S,
        onClick: ne ? te : e,
        ref: On(m, E),
        target: c,
        "data-discover": !b && t === `render` ? `true` : void 0,
      });
    return T && !b
      ? _.createElement(_.Fragment, null, re, _.createElement(wn, { page: S }))
      : re;
  });
  M.displayName = `Link`;
  var jn = _.forwardRef(function (
    {
      "aria-current": e = `page`,
      caseSensitive: t = !1,
      className: n = ``,
      end: r = !1,
      style: i,
      to: a,
      viewTransition: o,
      children: s,
      ...c
    },
    l,
  ) {
    let u = bt(a, { relative: c.relative }),
      d = mt(),
      f = _.useContext(Ze),
      { navigator: p, basename: m } = _.useContext(rt),
      h = f != null && Vn(u) && o === !0,
      g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname,
      v = d.pathname,
      y =
        f && f.navigation && f.navigation.location
          ? f.navigation.location.pathname
          : null;
    (t ||
      ((v = v.toLowerCase()),
      (y = y ? y.toLowerCase() : null),
      (g = g.toLowerCase())),
      y && m && (y = we(y, m) || y));
    let b = g !== `/` && g.endsWith(`/`) ? g.length - 1 : g.length,
      x = v === g || (!r && v.startsWith(g) && v.charAt(b) === `/`),
      S =
        y != null &&
        (y === g || (!r && y.startsWith(g) && y.charAt(g.length) === `/`)),
      C = { isActive: x, isPending: S, isTransitioning: h },
      w = x ? e : void 0,
      T;
    T =
      typeof n == `function`
        ? n(C)
        : [
            n,
            x ? `active` : null,
            S ? `pending` : null,
            h ? `transitioning` : null,
          ]
            .filter(Boolean)
            .join(` `);
    let E = typeof i == `function` ? i(C) : i;
    return _.createElement(
      M,
      {
        ...c,
        "aria-current": w,
        className: T,
        ref: l,
        style: E,
        to: a,
        viewTransition: o,
      },
      typeof s == `function` ? s(C) : s,
    );
  });
  jn.displayName = `NavLink`;
  var Mn = _.forwardRef(
    (
      {
        discover: e = `render`,
        fetcherKey: t,
        navigate: n,
        reloadDocument: r,
        replace: i,
        state: a,
        method: o = Kt,
        action: s,
        onSubmit: c,
        relative: l,
        preventScrollReset: u,
        viewTransition: d,
        defaultShouldRevalidate: f,
        ...p
      },
      m,
    ) => {
      let { useTransitions: h } = _.useContext(rt),
        g = zn(),
        v = Bn(s, { relative: l }),
        b = o.toLowerCase() === `get` ? `get` : `post`,
        x = typeof s == `string` && y.test(s);
      return _.createElement(`form`, {
        ref: m,
        method: b,
        action: v,
        onSubmit: r
          ? c
          : (e) => {
              if ((c && c(e), e.defaultPrevented)) return;
              e.preventDefault();
              let r = e.nativeEvent.submitter,
                s = r?.getAttribute(`formmethod`) || o,
                p = () =>
                  g(r || e.currentTarget, {
                    fetcherKey: t,
                    method: s,
                    navigate: n,
                    replace: i,
                    state: a,
                    relative: l,
                    preventScrollReset: u,
                    viewTransition: d,
                    defaultShouldRevalidate: f,
                  });
              h && n !== !1 ? _.startTransition(() => p()) : p();
            },
        ...p,
        "data-discover": !x && e === `render` ? `true` : void 0,
      });
    },
  );
  Mn.displayName = `Form`;
  function Nn(e) {
    return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
  }
  function Pn(e) {
    let t = _.useContext(Xe);
    return (T(t, Nn(e)), t);
  }
  function Fn(
    e,
    {
      target: t,
      replace: n,
      mask: r,
      state: i,
      preventScrollReset: a,
      relative: o,
      viewTransition: s,
      defaultShouldRevalidate: c,
      useTransitions: l,
    } = {},
  ) {
    let u = _t(),
      d = mt(),
      f = bt(e, { relative: o });
    return _.useCallback(
      (p) => {
        if ($t(p, t)) {
          p.preventDefault();
          let t = n === void 0 ? ne(d) === ne(f) : n,
            m = () =>
              u(e, {
                replace: t,
                mask: r,
                state: i,
                preventScrollReset: a,
                relative: o,
                viewTransition: s,
                defaultShouldRevalidate: c,
              });
          l ? _.startTransition(() => m()) : m();
        }
      },
      [d, u, f, n, r, i, t, e, a, o, s, c, l],
    );
  }
  function In(e) {
    E(
      typeof URLSearchParams < `u`,
      "You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.",
    );
    let t = _.useRef(j(e)),
      n = _.useRef(!1),
      r = mt(),
      i = _.useMemo(
        () => en(r.search, n.current ? null : t.current),
        [r.search],
      ),
      a = _t();
    return [
      i,
      _.useCallback(
        (e, t) => {
          let r = j(typeof e == `function` ? e(new URLSearchParams(i)) : e);
          ((n.current = !0), a(`?` + r, t));
        },
        [a, i],
      ),
    ];
  }
  var Ln = 0,
    Rn = () => `__${String(++Ln)}__`;
  function zn() {
    let { router: e } = Pn(`useSubmit`),
      { basename: t } = _.useContext(rt),
      n = Ft(),
      r = e.fetch,
      i = e.navigate;
    return _.useCallback(
      async (e, a = {}) => {
        let {
          action: o,
          method: s,
          encType: c,
          formData: l,
          body: u,
        } = on(e, t);
        if (a.navigate === !1) {
          let e = a.fetcherKey || Rn();
          await r(e, n, a.action || o, {
            defaultShouldRevalidate: a.defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            flushSync: a.flushSync,
          });
        } else
          await i(a.action || o, {
            defaultShouldRevalidate: a.defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
      },
      [r, i, t, n],
    );
  }
  function Bn(e, { relative: t } = {}) {
    let { basename: n } = _.useContext(rt),
      r = _.useContext(at);
    T(r, `useFormAction must be used inside a RouteContext`);
    let [i] = r.matches.slice(-1),
      a = { ...bt(e || `.`, { relative: t }) },
      o = mt();
    if (e == null) {
      a.search = o.search;
      let e = new URLSearchParams(a.search),
        t = e.getAll(`index`);
      if (t.some((e) => e === ``)) {
        (e.delete(`index`),
          t.filter((e) => e).forEach((t) => e.append(`index`, t)));
        let n = e.toString();
        a.search = n ? `?${n}` : ``;
      }
    }
    return (
      (!e || e === `.`) &&
        i.route.index &&
        (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
      n !== `/` && (a.pathname = a.pathname === `/` ? n : je([n, a.pathname])),
      ne(a)
    );
  }
  function Vn(e, { relative: t } = {}) {
    let n = _.useContext(et);
    T(
      n != null,
      "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
    );
    let { basename: r } = Pn(`useViewTransitionState`),
      i = bt(e, { relative: t });
    if (!n.isTransitioning) return !1;
    let a = we(n.currentLocation.pathname, r) || n.currentLocation.pathname,
      o = we(n.nextLocation.pathname, r) || n.nextLocation.pathname;
    return Se(i.pathname, o) != null || Se(i.pathname, a) != null;
  }
  var Hn = (e) => e?.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase();
  function Un(e, t, n = []) {
    if (t == null)
      throw Error(`[lucide]: iconNode is required when icon name is used`);
    return {
      name: Hn(e),
      size: 24,
      node: t,
      ...(n.length > 0 ? { aliases: n } : {}),
    };
  }
  var Wn = (e) => {
      let t = ``,
        n = !1;
      for (let r of e)
        r === `-` || r === `_` || r <= ` `
          ? (n = t.length > 0)
          : (t.length === 0
              ? (t += r.toLowerCase())
              : (t += n ? r.toUpperCase() : r),
            (n = !1));
      return t;
    },
    Gn = (e) => {
      let t = Wn(e);
      return t.charAt(0).toUpperCase() + t.slice(1);
    },
    Kn = (...e) =>
      e
        .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
        .join(` `)
        .trim(),
    qn = {
      xmlns: `http://www.w3.org/2000/svg`,
      width: 24,
      height: 24,
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      "stroke-width": 2,
      "stroke-linecap": `round`,
      "stroke-linejoin": `round`,
    };
  function Jn(e) {
    return e != null;
  }
  function Yn(e, t = {}) {
    let n = t.attributeNames ?? {},
      r = (e) => n[e] ?? e,
      i = e.size ?? e.width ?? qn.width,
      a = e.size ?? e.height ?? qn.height,
      o =
        e.aliases
          ?.filter((e) => typeof e == `string` && e.trim() !== ``)
          .map((e) => `lucide-${e}`) ?? [],
      s = [...(e.name ? [`lucide-${e.name}`] : []), ...o],
      c = t.className?.split(` `).filter(Boolean) ?? [],
      l = t.includeDefaultClasses === !1 ? Kn(...c) : Kn(`lucide`, ...s, ...c),
      u = t.absoluteStrokeWidth
        ? (Number(t.strokeWidth ?? qn[`stroke-width`]) *
            Number(e.size ?? e.width ?? qn.width)) /
          Number(t.size ?? t.width ?? qn.width)
        : (t.strokeWidth ?? qn[`stroke-width`]);
    return [
      `svg`,
      {
        ...Object.entries(qn).reduce((e, [t, n]) => ((e[r(t)] = n), e), {}),
        ...(`color` in t && t.color && { [r(`stroke`)]: t.color }),
        ...(`size` in t &&
          Jn(t.size) && { [r(`width`)]: t.size, [r(`height`)]: t.size }),
        ...(`width` in t && Jn(t.width) && { [r(`width`)]: t.width }),
        ...(`height` in t && Jn(t.height) && { [r(`height`)]: t.height }),
        [r(`stroke-width`)]: u,
        ...(l && { [r(`class`)]: l }),
        [r(`viewBox`)]: `0 0 ${i} ${a}`,
        ...(t.hasA11yProp === !1 ? { [r(`aria-hidden`)]: `true` } : {}),
        ...(`attributes` in t && t.attributes),
      },
      e.node.map((e) => {
        let [n, i, a] = e,
          o = t.nonScalingStroke
            ? { [r(`vector-effect`)]: `non-scaling-stroke`, ...i }
            : i;
        return a ? [n, o, a] : [n, o];
      }),
    ];
  }
  function Xn(e, t = {}) {
    return Yn(e, {
      ...t,
      attributeNames: {
        ...t.attributeNames,
        class: `className`,
        "stroke-width": `strokeWidth`,
        "stroke-linecap": `strokeLinecap`,
        "stroke-linejoin": `strokeLinejoin`,
        "vector-effect": `vectorEffect`,
      },
    });
  }
  var Zn = (e) => {
      for (let t in e)
        if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
      return !1;
    },
    Qn = (0, _.createContext)({}),
    $n = () => (0, _.useContext)(Qn),
    er = (0, _.forwardRef)(
      (
        {
          color: e,
          size: t,
          width: n,
          height: r,
          strokeWidth: i,
          absoluteStrokeWidth: a,
          nonScalingStroke: o,
          className: s = ``,
          children: c,
          iconNode: l = [],
          icon: u = { node: l, aliases: [], size: 24 },
          ...d
        },
        f,
      ) => {
        let {
            size: p = 24,
            strokeWidth: m = 2,
            absoluteStrokeWidth: h = !1,
            nonScalingStroke: g = !1,
            color: v = `currentColor`,
            className: y = ``,
          } = $n() ?? {},
          b = !!c || Zn(d),
          [x, S, C = []] = Xn(u, {
            color: e ?? v,
            width: n ?? t ?? p,
            height: r ?? t ?? p,
            strokeWidth: i ?? m,
            absoluteStrokeWidth: a ?? h,
            nonScalingStroke: o ?? g,
            className: Kn(y, s),
            hasA11yProp: b,
            attributes: d,
          });
        return (0, _.createElement)(x, { ref: f, ...S }, [
          ...C.map(([e, t]) => (0, _.createElement)(e, t)),
          ...(Array.isArray(c) ? c : [c]),
        ]);
      },
    );
  function N(e, t = [], n = []) {
    let r = typeof e == `string` ? Un(e, t, n) : e,
      i = (0, _.forwardRef)(({ className: e, ...t }, n) =>
        (0, _.createElement)(er, { ref: n, icon: r, className: e, ...t }),
      );
    return (r.name && (i.displayName = Gn(r.name)), i);
  }
  var tr = {
    name: `arrow-left`,
    size: 24,
    node: [
      [`path`, { d: `m12 19-7-7 7-7`, key: `1l729n` }],
      [`path`, { d: `M19 12H5`, key: `x3x0zl` }],
    ],
  };
  tr.node;
  var nr = N(tr),
    rr = {
      name: `arrow-right`,
      size: 24,
      node: [
        [`path`, { d: `M5 12h14`, key: `1ays0h` }],
        [`path`, { d: `m12 5 7 7-7 7`, key: `xquz4c` }],
      ],
    };
  rr.node;
  var ir = N(rr),
    ar = {
      name: `ban`,
      size: 24,
      node: [
        [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
        [`path`, { d: `M4.929 4.929 19.07 19.071`, key: `196cmz` }],
      ],
    };
  ar.node;
  var or = N(ar),
    sr = {
      name: `bike`,
      size: 24,
      node: [
        [`circle`, { cx: `18.5`, cy: `17.5`, r: `3.5`, key: `15x4ox` }],
        [`circle`, { cx: `5.5`, cy: `17.5`, r: `3.5`, key: `1noe27` }],
        [`circle`, { cx: `15`, cy: `5`, r: `1`, key: `19l28e` }],
        [`path`, { d: `M12 17.5V14l-3-3 4-3 2 3h2`, key: `1npguv` }],
      ],
    };
  sr.node;
  var cr = N(sr),
    lr = {
      name: `calendar-days`,
      size: 24,
      node: [
        [`path`, { d: `M8 2v3`, key: `1ioesn` }],
        [`path`, { d: `M16 2v3`, key: `otl347` }],
        [
          `rect`,
          { x: `3`, y: `3`, width: `18`, height: `18`, rx: `2`, key: `h1oib` },
        ],
        [`path`, { d: `M3 9h18`, key: `1pudct` }],
        [`path`, { d: `M8 13h.01`, key: `1sbv64` }],
        [`path`, { d: `M12 13h.01`, key: `y0uutt` }],
        [`path`, { d: `M16 13h.01`, key: `wip0gl` }],
        [`path`, { d: `M8 17h.01`, key: `p3bg7i` }],
        [`path`, { d: `M12 17h.01`, key: `p32p05` }],
        [`path`, { d: `M16 17h.01`, key: `ql8jdd` }],
      ],
    };
  lr.node;
  var ur = N(lr),
    dr = {
      name: `camera`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M13.997 4a2 2 0 0 1 1.76 1.05l.486.9A2 2 0 0 0 18.003 7H20a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1.997a2 2 0 0 0 1.759-1.048l.489-.904A2 2 0 0 1 10.004 4z`,
            key: `18u6gg`,
          },
        ],
        [`circle`, { cx: `12`, cy: `13`, r: `3`, key: `1vg3eu` }],
      ],
    };
  dr.node;
  var fr = N(dr),
    pr = {
      name: `check`,
      size: 24,
      node: [[`path`, { d: `M20 6 9 17l-5-5`, key: `1gmf2c` }]],
    };
  pr.node;
  var mr = N(pr),
    hr = {
      name: `chevron-down`,
      size: 24,
      node: [[`path`, { d: `m6 9 6 6 6-6`, key: `qrunsl` }]],
    };
  hr.node;
  var gr = N(hr),
    _r = {
      name: `circle-check`,
      size: 24,
      node: [
        [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
        [`path`, { d: `m16 9-5.5 5.5L8 12`, key: `xofnsj` }],
      ],
      aliases: [`check-circle-2`],
    };
  _r.node;
  var vr = N(_r),
    yr = {
      name: `circle-plus`,
      size: 24,
      node: [
        [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
        [`path`, { d: `M8 12h8`, key: `1wcyev` }],
        [`path`, { d: `M12 8v8`, key: `napkw2` }],
      ],
      aliases: [`plus-circle`],
    };
  yr.node;
  var br = N(yr),
    xr = {
      name: `circle-x`,
      size: 24,
      node: [
        [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
        [`path`, { d: `m15 9-6 6`, key: `1uzhvr` }],
        [`path`, { d: `m9 9 6 6`, key: `z0biqf` }],
      ],
      aliases: [`x-circle`],
    };
  xr.node;
  var Sr = N(xr),
    Cr = {
      name: `circle`,
      size: 24,
      node: [[`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }]],
    };
  Cr.node;
  var wr = N(Cr),
    Tr = {
      name: `clipboard-copy`,
      size: 24,
      node: [
        [
          `rect`,
          {
            width: `8`,
            height: `4`,
            x: `8`,
            y: `2`,
            rx: `1`,
            ry: `1`,
            key: `tgr4d6`,
          },
        ],
        [
          `path`,
          {
            d: `M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2`,
            key: `4jdomd`,
          },
        ],
        [`path`, { d: `M16 4h2a2 2 0 0 1 2 2v4`, key: `3hqy98` }],
        [`path`, { d: `M21 14H11`, key: `1bme5i` }],
        [`path`, { d: `m15 10-4 4 4 4`, key: `5dvupr` }],
      ],
    };
  Tr.node;
  var Er = N(Tr),
    Dr = {
      name: `clipboard-list`,
      size: 24,
      node: [
        [
          `rect`,
          {
            width: `8`,
            height: `4`,
            x: `8`,
            y: `2`,
            rx: `1`,
            ry: `1`,
            key: `tgr4d6`,
          },
        ],
        [
          `path`,
          {
            d: `M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2`,
            key: `116196`,
          },
        ],
        [`path`, { d: `M12 11h4`, key: `1jrz19` }],
        [`path`, { d: `M12 16h4`, key: `n85exb` }],
        [`path`, { d: `M8 11h.01`, key: `1dfujw` }],
        [`path`, { d: `M8 16h.01`, key: `18s6g9` }],
      ],
    };
  Dr.node;
  var Or = N(Dr),
    kr = {
      name: `clock-3`,
      size: 24,
      node: [
        [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
        [`path`, { d: `M12 6v6h4`, key: `135r8i` }],
      ],
    };
  kr.node;
  var Ar = N(kr),
    jr = {
      name: `clock`,
      size: 24,
      node: [
        [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
        [`path`, { d: `M12 6v6l4 2`, key: `mmk7yg` }],
      ],
    };
  jr.node;
  var Mr = N(jr),
    Nr = {
      name: `coffee`,
      size: 24,
      node: [
        [`path`, { d: `M10 2v2`, key: `7u0qdc` }],
        [`path`, { d: `M14 2v2`, key: `6buw04` }],
        [
          `path`,
          {
            d: `M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1`,
            key: `pwadti`,
          },
        ],
        [`path`, { d: `M6 2v2`, key: `colzsn` }],
      ],
    };
  Nr.node;
  var Pr = N(Nr),
    Fr = {
      name: `compass`,
      size: 24,
      node: [
        [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
        [
          `path`,
          {
            d: `m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z`,
            key: `9ktpf1`,
          },
        ],
      ],
    };
  Fr.node;
  var Ir = N(Fr),
    Lr = {
      name: `copy`,
      size: 24,
      node: [
        [
          `rect`,
          {
            width: `14`,
            height: `14`,
            x: `8`,
            y: `8`,
            rx: `2`,
            ry: `2`,
            key: `17jyea`,
          },
        ],
        [
          `path`,
          {
            d: `M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`,
            key: `zix9uf`,
          },
        ],
      ],
    };
  Lr.node;
  var Rr = N(Lr),
    zr = {
      name: `crown`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z`,
            key: `1vdc57`,
          },
        ],
        [`path`, { d: `M5 21h14`, key: `11awu3` }],
      ],
    };
  zr.node;
  var Br = N(zr),
    Vr = {
      name: `external-link`,
      size: 24,
      node: [
        [`path`, { d: `M15 3h6v6`, key: `1q9fwt` }],
        [`path`, { d: `M10 14 21 3`, key: `gplh6r` }],
        [
          `path`,
          {
            d: `M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6`,
            key: `a6xqqp`,
          },
        ],
      ],
    };
  Vr.node;
  var Hr = N(Vr),
    Ur = {
      name: `flask-conical`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2`,
            key: `18mbvz`,
          },
        ],
        [`path`, { d: `M6.453 15h11.094`, key: `3shlmq` }],
        [`path`, { d: `M8.5 2h7`, key: `csnxdl` }],
      ],
    };
  Ur.node;
  var Wr = N(Ur),
    Gr = {
      name: `footprints`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z`,
            key: `1dudjm`,
          },
        ],
        [
          `path`,
          {
            d: `M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z`,
            key: `l2t8xc`,
          },
        ],
        [`path`, { d: `M16 17h4`, key: `1dejxt` }],
        [`path`, { d: `M4 13h4`, key: `1bwh8b` }],
      ],
    };
  Gr.node;
  var Kr = N(Gr),
    qr = {
      name: `gamepad-2`,
      size: 24,
      node: [
        [`line`, { x1: `6`, x2: `10`, y1: `11`, y2: `11`, key: `1gktln` }],
        [`line`, { x1: `8`, x2: `8`, y1: `9`, y2: `13`, key: `qnk9ow` }],
        [`line`, { x1: `15`, x2: `15.01`, y1: `12`, y2: `12`, key: `krot7o` }],
        [`line`, { x1: `18`, x2: `18.01`, y1: `10`, y2: `10`, key: `1lcuu1` }],
        [
          `path`,
          {
            d: `M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z`,
            key: `mfqc10`,
          },
        ],
      ],
    };
  qr.node;
  var Jr = N(qr),
    Yr = {
      name: `info`,
      size: 24,
      node: [
        [`circle`, { cx: `12`, cy: `12`, r: `10`, key: `1mglay` }],
        [`path`, { d: `M12 16v-4`, key: `1dtifu` }],
        [`path`, { d: `M12 8h.01`, key: `e9boi3` }],
      ],
    };
  Yr.node;
  var Xr = N(Yr),
    Zr = {
      name: `key-round`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z`,
            key: `1s6t7t`,
          },
        ],
        [
          `circle`,
          {
            cx: `16.5`,
            cy: `7.5`,
            r: `.5`,
            fill: `currentColor`,
            key: `w0ekpg`,
          },
        ],
      ],
    };
  Zr.node;
  var Qr = N(Zr),
    $r = {
      name: `landmark`,
      size: 24,
      node: [
        [`path`, { d: `M10 18v-7`, key: `wt116b` }],
        [
          `path`,
          {
            d: `M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z`,
            key: `yxxwt6`,
          },
        ],
        [`path`, { d: `M14 18v-7`, key: `vav6t3` }],
        [`path`, { d: `M18 18v-7`, key: `aexdmj` }],
        [`path`, { d: `M3 22h18`, key: `8prr45` }],
        [`path`, { d: `M6 18v-7`, key: `1ivflk` }],
      ],
    };
  $r.node;
  var ei = N($r),
    ti = {
      name: `loader-circle`,
      size: 24,
      node: [[`path`, { d: `M21 12a9 9 0 1 1-6.219-8.56`, key: `13zald` }]],
      aliases: [`loader-2`],
    };
  ti.node;
  var ni = N(ti),
    ri = {
      name: `lock-open`,
      size: 24,
      node: [
        [
          `rect`,
          {
            width: `18`,
            height: `11`,
            x: `3`,
            y: `11`,
            rx: `2`,
            ry: `2`,
            key: `1w4ew1`,
          },
        ],
        [`path`, { d: `M7 11V7a5 5 0 0 1 9.9-1`, key: `1mm8w8` }],
      ],
      aliases: [`unlock`],
    };
  ri.node;
  var ii = N(ri),
    ai = {
      name: `lock`,
      size: 24,
      node: [
        [
          `rect`,
          {
            width: `18`,
            height: `11`,
            x: `3`,
            y: `11`,
            rx: `2`,
            ry: `2`,
            key: `1w4ew1`,
          },
        ],
        [`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4`, key: `fwvmzm` }],
      ],
    };
  ai.node;
  var oi = N(ai),
    si = {
      name: `map-pin`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0`,
            key: `1r0f0z`,
          },
        ],
        [`circle`, { cx: `12`, cy: `10`, r: `3`, key: `ilqhr7` }],
      ],
    };
  si.node;
  var ci = N(si),
    li = {
      name: `map-pinned`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M18 8c0 3.613-3.869 7.429-5.393 8.795a1 1 0 01-1.214 0C9.87 15.429 6 11.613 6 8a6 6 0 0112 0`,
            key: `61byd1`,
          },
        ],
        [
          `path`,
          {
            d: `M4.474 15h-.197a1 1 0 00-.969.753l-1.097 4.35a1.5 1.5 0 001.444 1.898L20.344 22a1.5 1.5 0 001.446-1.897l-1.098-4.35a1 1 0 00-.969-.753h-.197`,
            key: `1m5apm`,
          },
        ],
        [`circle`, { cx: `12`, cy: `8`, r: `2`, key: `1822b1` }],
      ],
    };
  li.node;
  var ui = N(li),
    di = {
      name: `menu`,
      size: 24,
      node: [
        [`path`, { d: `M4 5h16`, key: `1tepv9` }],
        [`path`, { d: `M4 12h16`, key: `1lakjw` }],
        [`path`, { d: `M4 19h16`, key: `1djgab` }],
      ],
    };
  di.node;
  var fi = N(di),
    pi = {
      name: `navigation`,
      size: 24,
      node: [
        [`polygon`, { points: `3 11 22 2 13 21 11 13 3 11`, key: `1ltx0t` }],
      ],
    };
  pi.node;
  var mi = N(pi),
    hi = {
      name: `palette`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z`,
            key: `e79jfc`,
          },
        ],
        [
          `circle`,
          {
            cx: `13.5`,
            cy: `6.5`,
            r: `.5`,
            fill: `currentColor`,
            key: `1okk4w`,
          },
        ],
        [
          `circle`,
          {
            cx: `17.5`,
            cy: `10.5`,
            r: `.5`,
            fill: `currentColor`,
            key: `f64h9f`,
          },
        ],
        [
          `circle`,
          {
            cx: `6.5`,
            cy: `12.5`,
            r: `.5`,
            fill: `currentColor`,
            key: `qy21gx`,
          },
        ],
        [
          `circle`,
          {
            cx: `8.5`,
            cy: `7.5`,
            r: `.5`,
            fill: `currentColor`,
            key: `fotxhn`,
          },
        ],
      ],
    };
  hi.node;
  var gi = N(hi),
    _i = {
      name: `pencil`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z`,
            key: `1a8usu`,
          },
        ],
        [`path`, { d: `m15 5 4 4`, key: `1mk7zo` }],
      ],
    };
  _i.node;
  var vi = N(_i),
    yi = {
      name: `printer`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2`,
            key: `143wyd`,
          },
        ],
        [
          `path`,
          { d: `M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6`, key: `1itne7` },
        ],
        [
          `rect`,
          { x: `6`, y: `14`, width: `12`, height: `8`, rx: `1`, key: `1ue0tg` },
        ],
      ],
    };
  yi.node;
  var bi = N(yi),
    xi = {
      name: `refresh-cw`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8`,
            key: `v9h5vc`,
          },
        ],
        [`path`, { d: `M21 3v5h-5`, key: `1q7to0` }],
        [
          `path`,
          {
            d: `M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16`,
            key: `3uifl3`,
          },
        ],
        [`path`, { d: `M8 16H3v5`, key: `1cv678` }],
      ],
    };
  xi.node;
  var Si = N(xi),
    Ci = {
      name: `rotate-ccw`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`,
            key: `1357e3`,
          },
        ],
        [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
      ],
    };
  Ci.node;
  var wi = N(Ci),
    Ti = {
      name: `route`,
      size: 24,
      node: [
        [
          `path`,
          { d: `M9 5h8.5a1 1 0 010 7h-11a1 1 0 000 7H15`, key: `1r1aam` },
        ],
        [`circle`, { cx: `18`, cy: `19`, r: `3`, key: `1xt0gg` }],
        [`circle`, { cx: `6`, cy: `5`, r: `3`, key: `151irh` }],
      ],
    };
  Ti.node;
  var Ei = N(Ti),
    Di = {
      name: `scale`,
      size: 24,
      node: [
        [`path`, { d: `M12 3v18`, key: `108xh3` }],
        [`path`, { d: `m19 8 3 8a5 5 0 0 1-6 0zV7`, key: `zcdpyk` }],
        [
          `path`,
          { d: `M3 7h1a17 17 0 0 0 8-2 17 17 0 0 0 8 2h1`, key: `1yorad` },
        ],
        [`path`, { d: `m5 8 3 8a5 5 0 0 1-6 0zV7`, key: `eua70x` }],
        [`path`, { d: `M7 21h10`, key: `1b0cd5` }],
      ],
    };
  Di.node;
  var Oi = N(Di),
    ki = {
      name: `search`,
      size: 24,
      node: [
        [`path`, { d: `m21 21-4.34-4.34`, key: `14j7rj` }],
        [`circle`, { cx: `11`, cy: `11`, r: `8`, key: `4ej97u` }],
      ],
    };
  ki.node;
  var Ai = N(ki),
    ji = {
      name: `share-2`,
      size: 24,
      node: [
        [`circle`, { cx: `18`, cy: `5`, r: `3`, key: `gq8acd` }],
        [`circle`, { cx: `6`, cy: `12`, r: `3`, key: `w7nqdw` }],
        [`circle`, { cx: `18`, cy: `19`, r: `3`, key: `1xt0gg` }],
        [
          `line`,
          { x1: `8.59`, x2: `15.42`, y1: `13.51`, y2: `17.49`, key: `47mynk` },
        ],
        [
          `line`,
          { x1: `15.41`, x2: `8.59`, y1: `6.51`, y2: `10.49`, key: `1n3mei` },
        ],
      ],
    };
  ji.node;
  var Mi = N(ji),
    Ni = {
      name: `shield-check`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z`,
            key: `oel41y`,
          },
        ],
        [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
      ],
    };
  Ni.node;
  var Pi = N(Ni),
    Fi = {
      name: `shopping-bag`,
      size: 24,
      node: [
        [`path`, { d: `M16 10a4 4 0 0 1-8 0`, key: `1ltviw` }],
        [`path`, { d: `M3.103 6.034h17.794`, key: `awc11p` }],
        [
          `path`,
          {
            d: `M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z`,
            key: `o988cm`,
          },
        ],
      ],
    };
  Fi.node;
  var Ii = N(Fi),
    Li = {
      name: `sparkles`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z`,
            key: `1s2grr`,
          },
        ],
        [`path`, { d: `M20 2v4`, key: `1rf3ol` }],
        [`path`, { d: `M22 4h-4`, key: `gwowj6` }],
        [`circle`, { cx: `4`, cy: `20`, r: `2`, key: `6kqj1y` }],
      ],
      aliases: [`stars`],
    };
  Li.node;
  var Ri = N(Li),
    zi = {
      name: `thumbs-up`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z`,
            key: `emmmcr`,
          },
        ],
        [`path`, { d: `M7 10v12`, key: `1qc93n` }],
      ],
    };
  zi.node;
  var Bi = N(zi),
    Vi = {
      name: `ticket`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z`,
            key: `qn84l0`,
          },
        ],
        [`path`, { d: `M13 5v2`, key: `dyzc3o` }],
        [`path`, { d: `M13 17v2`, key: `1ont0d` }],
        [`path`, { d: `M13 11v2`, key: `1wjjxi` }],
      ],
    };
  Vi.node;
  var Hi = N(Vi),
    Ui = {
      name: `trees`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z`,
            key: `1l6gj6`,
          },
        ],
        [`path`, { d: `M7 16v6`, key: `1a82de` }],
        [`path`, { d: `M13 19v3`, key: `13sx9i` }],
        [
          `path`,
          {
            d: `M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5`,
            key: `1sj9kv`,
          },
        ],
      ],
    };
  Ui.node;
  var Wi = N(Ui),
    Gi = {
      name: `triangle-exclamation-point`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`,
            key: `wmoenq`,
          },
        ],
        [`path`, { d: `M12 9v4`, key: `juzpu7` }],
        [`path`, { d: `M12 17h.01`, key: `p32p05` }],
      ],
      aliases: [`alert-triangle`, `triangle-alert`],
    };
  Gi.node;
  var Ki = N(Gi),
    qi = {
      name: `user-check`,
      size: 24,
      node: [
        [`path`, { d: `m16 11 2 2 4-4`, key: `9rsbq5` }],
        [
          `path`,
          { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` },
        ],
        [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
      ],
    };
  qi.node;
  var Ji = N(qi),
    Yi = {
      name: `user-plus`,
      size: 24,
      node: [
        [
          `path`,
          { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` },
        ],
        [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
        [`line`, { x1: `19`, x2: `19`, y1: `8`, y2: `14`, key: `1bvyxn` }],
        [`line`, { x1: `22`, x2: `16`, y1: `11`, y2: `11`, key: `1shjgl` }],
      ],
    };
  Yi.node;
  var Xi = N(Yi),
    Zi = {
      name: `user-round`,
      size: 24,
      node: [
        [`circle`, { cx: `12`, cy: `8`, r: `5`, key: `1hypcn` }],
        [`path`, { d: `M20 21a8 8 0 0 0-16 0`, key: `rfgkzh` }],
      ],
      aliases: [`user-2`],
    };
  Zi.node;
  var Qi = N(Zi),
    $i = {
      name: `users-round`,
      size: 24,
      node: [
        [`path`, { d: `M18 21a8 8 0 0 0-16 0`, key: `3ypg7q` }],
        [`circle`, { cx: `10`, cy: `8`, r: `5`, key: `o932ke` }],
        [
          `path`,
          { d: `M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3`, key: `10s06x` },
        ],
      ],
      aliases: [`users-2`],
    };
  $i.node;
  var ea = N($i),
    ta = {
      name: `users`,
      size: 24,
      node: [
        [
          `path`,
          { d: `M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2`, key: `1yyitq` },
        ],
        [`path`, { d: `M16 3.128a4 4 0 0 1 0 7.744`, key: `16gr8j` }],
        [`path`, { d: `M22 21v-2a4 4 0 0 0-3-3.87`, key: `kshegd` }],
        [`circle`, { cx: `9`, cy: `7`, r: `4`, key: `nufk8` }],
      ],
    };
  ta.node;
  var na = N(ta),
    ra = {
      name: `utensils`,
      size: 24,
      node: [
        [
          `path`,
          { d: `M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2`, key: `cjf0a3` },
        ],
        [`path`, { d: `M7 2v20`, key: `1473qp` }],
        [
          `path`,
          {
            d: `M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7`,
            key: `j28e5`,
          },
        ],
      ],
      aliases: [`fork-knife`],
    };
  ra.node;
  var ia = N(ra),
    aa = {
      name: `vote`,
      size: 24,
      node: [
        [`path`, { d: `m9 12 2 2 4-4`, key: `dzmm74` }],
        [
          `path`,
          { d: `M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z`, key: `1ezoue` },
        ],
        [`path`, { d: `M22 19H2`, key: `nuriw5` }],
      ],
    };
  aa.node;
  var oa = N(aa),
    sa = {
      name: `wallet`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1`,
            key: `18etb6`,
          },
        ],
        [
          `path`,
          { d: `M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4`, key: `xoc0q4` },
        ],
      ],
    };
  sa.node;
  var ca = N(sa),
    la = {
      name: `wand-sparkles`,
      size: 24,
      node: [
        [
          `path`,
          {
            d: `m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72`,
            key: `ul74o6`,
          },
        ],
        [`path`, { d: `m14 7 3 3`, key: `1r5n42` }],
        [`path`, { d: `M5 6v4`, key: `ilb8ba` }],
        [`path`, { d: `M19 14v4`, key: `blhpug` }],
        [`path`, { d: `M10 2v2`, key: `7u0qdc` }],
        [`path`, { d: `M7 8H3`, key: `zfb6yr` }],
        [`path`, { d: `M21 16h-4`, key: `1cnmox` }],
        [`path`, { d: `M11 3H9`, key: `1obp7u` }],
      ],
      aliases: [`wand-2`],
    };
  la.node;
  var P = N(la),
    F = {
      name: `x`,
      size: 24,
      node: [
        [`path`, { d: `M18 6 6 18`, key: `1bl5f8` }],
        [`path`, { d: `m6 6 12 12`, key: `d8bk6v` }],
      ],
    };
  F.node;
  var ua = N(F),
    da = o((e) => {
      var t = Symbol.for(`react.transitional.element`),
        n = Symbol.for(`react.fragment`);
      function r(e, n, r) {
        var i = null;
        if (
          (r !== void 0 && (i = `` + r),
          n.key !== void 0 && (i = `` + n.key),
          `key` in n)
        )
          for (var a in ((r = {}), n)) a !== `key` && (r[a] = n[a]);
        else r = n;
        return (
          (n = r.ref),
          {
            $$typeof: t,
            type: e,
            key: i,
            ref: n === void 0 ? null : n,
            props: r,
          }
        );
      }
      ((e.Fragment = n), (e.jsx = r), (e.jsxs = r));
    }),
    I = o((e, t) => {
      t.exports = da();
    })(),
    L = (...e) => e.filter(Boolean).join(` `),
    fa = (0, _.createContext)(() => {}),
    pa = () => (0, _.useContext)(fa);
  function ma({ children: e }) {
    let [t, n] = (0, _.useState)([]),
      r = (0, _.useCallback)((e, t = `success`) => {
        let r = Date.now() + Math.random();
        (n((n) => [...n, { id: r, kind: t, text: e }]),
          setTimeout(() => n((e) => e.filter((e) => e.id !== r)), 3200));
      }, []);
    return (0, I.jsxs)(fa.Provider, {
      value: r,
      children: [
        e,
        (0, I.jsx)(`div`, {
          className: `no-print pointer-events-none fixed inset-x-0 bottom-20 z-[60] flex flex-col items-center gap-2 px-4 md:bottom-6`,
          role: `status`,
          "aria-live": `polite`,
          children: t.map((e) =>
            (0, I.jsxs)(
              `div`,
              {
                className: L(
                  `pop-in pointer-events-auto flex max-w-sm items-center gap-2 rounded-full px-4 py-2.5 text-sm font-medium text-white shadow-lg`,
                  e.kind === `error`
                    ? `bg-brand-600`
                    : e.kind === `info`
                      ? `bg-ink-700`
                      : `bg-ink-900`,
                ),
                children: [
                  e.kind === `success`
                    ? (0, I.jsx)(vr, { size: 16, className: `text-mint` })
                    : e.kind === `error`
                      ? (0, I.jsx)(Sr, { size: 16 })
                      : (0, I.jsx)(Xr, { size: 16 }),
                  e.text,
                ],
              },
              e.id,
            ),
          ),
        }),
      ],
    });
  }
  function R({
    variant: e = `primary`,
    size: t,
    loading: n,
    className: r,
    children: i,
    ...a
  }) {
    return (0, I.jsxs)(`button`, {
      ...a,
      disabled: a.disabled || n,
      className: L(
        `btn-${e}`,
        t === `lg` && `btn-lg`,
        t === `sm` && `btn-sm`,
        r,
      ),
      children: [
        n && (0, I.jsx)(ni, { size: 16, className: `animate-spin` }),
        i,
      ],
    });
  }
  function ha({ pressed: e, onClick: t, children: n, avoid: r, title: i }) {
    return (0, I.jsx)(`button`, {
      type: `button`,
      "aria-pressed": e,
      title: i,
      onClick: t,
      className: L(`chip`, r && `chip-avoid`),
      children: n,
    });
  }
  function ga({ label: e, hint: t, error: n, children: r, htmlFor: i }) {
    return (0, I.jsxs)(`div`, {
      children: [
        e &&
          (0, I.jsx)(`label`, { className: `label`, htmlFor: i, children: e }),
        r,
        n
          ? (0, I.jsx)(`p`, {
              className: `error-text`,
              role: `alert`,
              children: n,
            })
          : t
            ? (0, I.jsx)(`p`, { className: `hint`, children: t })
            : null,
      ],
    });
  }
  function _a({ kind: e = `info`, title: t, children: n, action: r }) {
    let i = {
        info: `bg-sky-soft text-ink-900 border-sky-soft`,
        warn: `bg-sun-soft text-ink-900 border-sun/50`,
        error: `bg-brand-50 text-ink-900 border-brand-200`,
        success: `bg-mint-soft text-ink-900 border-mint/30`,
      }[e],
      a = e === `error` ? Sr : e === `warn` ? Ki : e === `success` ? vr : Xr,
      o = {
        info: `text-ink-700`,
        warn: `text-amber-600`,
        error: `text-brand-600`,
        success: `text-mint`,
      }[e];
    return (0, I.jsxs)(`div`, {
      className: L(`flex gap-3 rounded-2xl border p-4 text-sm`, i),
      role: e === `error` ? `alert` : void 0,
      children: [
        (0, I.jsx)(a, { size: 18, className: L(`mt-0.5 shrink-0`, o) }),
        (0, I.jsxs)(`div`, {
          className: `min-w-0 flex-1`,
          children: [
            t && (0, I.jsx)(`p`, { className: `font-semibold`, children: t }),
            n &&
              (0, I.jsx)(`div`, {
                className: L(!!t && `mt-0.5`, `text-ink-700`),
                children: n,
              }),
            r && (0, I.jsx)(`div`, { className: `mt-3`, children: r }),
          ],
        }),
      ],
    });
  }
  function va({ value: e, max: t, tone: n = `brand` }) {
    let r = t === 0 ? 0 : Math.round((e / t) * 100);
    return (0, I.jsx)(`div`, {
      className: `h-2.5 w-full overflow-hidden rounded-full bg-ink-100`,
      role: `progressbar`,
      "aria-valuenow": e,
      "aria-valuemax": t,
      children: (0, I.jsx)(`div`, {
        className: L(
          `h-full rounded-full transition-all duration-500`,
          n === `mint` ? `bg-mint` : `bg-brand-500`,
        ),
        style: { width: `${r}%` },
      }),
    });
  }
  var ya = [
    `bg-brand-500`,
    `bg-lilac`,
    `bg-mint`,
    `bg-sun text-ink-900`,
    `bg-ink-700`,
    `bg-sky-500`,
  ];
  function z({ name: e, index: t = 0, size: n = 36, ring: r }) {
    let i = e.trim().charAt(0).toUpperCase() || `?`;
    return (0, I.jsx)(`span`, {
      className: L(
        `inline-flex shrink-0 items-center justify-center rounded-full font-bold text-white`,
        ya[t % ya.length],
        r && `ring-2 ring-white`,
      ),
      style: { width: n, height: n, fontSize: n * 0.42 },
      title: e,
      "aria-label": e,
      children: i,
    });
  }
  function ba({ children: e, tone: t = `ink` }) {
    let n = {
      ink: `bg-ink-100 text-ink-700`,
      brand: `bg-brand-100 text-brand-700`,
      mint: `bg-mint-soft text-teal-800`,
      sun: `bg-sun-soft text-amber-800`,
      lilac: `bg-lilac-soft text-indigo-700`,
    }[t];
    return (0, I.jsx)(`span`, {
      className: L(
        `inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-semibold`,
        n,
      ),
      children: e,
    });
  }
  function xa({ icon: e, title: t, children: n, action: r }) {
    return (0, I.jsxs)(`div`, {
      className: `card mx-auto max-w-lg p-8 text-center`,
      children: [
        (0, I.jsx)(`div`, {
          className: `mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-50 text-brand-500`,
          children: e,
        }),
        (0, I.jsx)(`h2`, { className: `text-xl font-bold`, children: t }),
        n &&
          (0, I.jsx)(`div`, {
            className: `mt-2 text-sm text-ink-500`,
            children: n,
          }),
        r &&
          (0, I.jsx)(`div`, {
            className: `mt-5 flex flex-wrap justify-center gap-3`,
            children: r,
          }),
      ],
    });
  }
  function Sa({ eyebrow: e, title: t, sub: n, center: r }) {
    return (0, I.jsxs)(`div`, {
      className: L(`mb-8`, r && `text-center`),
      children: [
        e &&
          (0, I.jsx)(`p`, {
            className: `mb-2 text-xs font-bold uppercase tracking-widest text-brand-600`,
            children: e,
          }),
        (0, I.jsx)(`h2`, {
          className: `text-2xl font-extrabold tracking-tight md:text-4xl`,
          children: t,
        }),
        n &&
          (0, I.jsx)(`p`, {
            className: L(`mt-3 max-w-2xl text-ink-500`, r && `mx-auto`),
            children: n,
          }),
      ],
    });
  }
  function Ca({ label: e }) {
    return (0, I.jsxs)(`div`, {
      className: `flex items-center justify-center gap-3 py-10 text-sm font-medium text-ink-500`,
      children: [
        (0, I.jsx)(ni, { className: `animate-spin text-brand-500`, size: 20 }),
        e,
      ],
    });
  }
  var wa = class extends Error {},
    Ta = `weekend-ticket:v1`,
    Ea = `ABCDEFGHJKLMNPQRSTUVWXYZ23456789`,
    Da = () => Math.random().toString(36).slice(2, 10),
    Oa = (e) =>
      e
        .toUpperCase()
        .replace(/^.*\/join\//, ``)
        .replace(/^WT-?/, ``)
        .replace(/[^A-Z0-9]/g, ``),
    ka = (e) => `WT-${e}`,
    ev = (g, type, data) => [
      ...(g.events ?? []).slice(-499),
      { t: Date.now(), type, ...(data ?? {}) },
    ],
    B = new (class {
      state = { groups: {}, identities: {} };
      listeners = new Set();
      version = 0;
      memoryOnly = !1;
      constructor() {
        (this.load(),
          typeof window < `u` &&
            window.addEventListener(`storage`, (e) => {
              e.key === Ta && (this.load(), this.emit());
            }));
      }
      load() {
        try {
          let e = window.localStorage.getItem(Ta);
          if (e) {
            let t = JSON.parse(e);
            t &&
              t.groups &&
              (this.state = {
                groups: t.groups,
                identities: t.identities ?? {},
              });
          }
        } catch {
          this.memoryOnly = !0;
        }
      }
      persist() {
        if (!this.memoryOnly)
          try {
            window.localStorage.setItem(Ta, JSON.stringify(this.state));
          } catch {
            this.memoryOnly = !0;
          }
      }
      emit() {
        (this.version++, this.listeners.forEach((e) => e()));
      }
      commit() {
        ((this.state = {
          groups: { ...this.state.groups },
          identities: { ...this.state.identities },
        }),
          this.persist(),
          this.emit());
      }
      mutate(e, t) {
        let n = this.state.groups[e];
        if (!n) throw new wa(`Không tìm thấy nhóm.`);
        ((this.state.groups[e] = t({ ...n })), this.commit());
      }
      isMemoryOnly() {
        return this.memoryOnly;
      }
      subscribe(e) {
        return (
          this.listeners.add(e),
          () => {
            this.listeners.delete(e);
          }
        );
      }
      getVersion() {
        return this.version;
      }
      getGroup(e) {
        return this.state.groups[Oa(e)];
      }
      listGroups() {
        return Object.values(this.state.groups).sort(
          (e, t) => t.createdAt - e.createdAt,
        );
      }
      newCode() {
        for (let e = 0; e < 50; e++) {
          let e = ``;
          for (let t = 0; t < 6; t++) e += Ea[Math.floor(Math.random() * 32)];
          if (!this.state.groups[e]) return e;
        }
        return Da().toUpperCase();
      }
      createGroup(e, t) {
        let n = this.newCode(),
          r = { id: Da(), name: t.trim(), joinedAt: Date.now() },
          i = {
            code: n,
            name: e.trim(),
            createdAt: Date.now(),
            creatorId: r.id,
            members: [r],
            sharedBudget: null,
            itineraries: [],
            generation: null,
            votes: {},
            confirmedId: null,
            deadline: null,
            remindersSent: 0,
            unavailable: [],
            events: [{ t: Date.now(), type: `group_created`, memberId: r.id }],
          };
        return (
          (this.state.groups[n] = i),
          (this.state.identities[n] = r.id),
          this.commit(),
          { group: i, memberId: r.id }
        );
      }
      joinGroup(e, t) {
        let n = Oa(e),
          r = this.state.groups[n];
        if (!r)
          throw new wa(`Không tìm thấy nhóm với mã này trên thiết bị này.`);
        let i = t.trim();
        if (r.members.some((e) => e.name.toLowerCase() === i.toLowerCase()))
          throw new wa(
            `Tên này đã có trong nhóm. Nếu là bạn, hãy chọn tên của mình ở danh sách bên dưới.`,
          );
        let a = { id: Da(), name: i, joinedAt: Date.now() };
        return (
          this.mutate(n, (e) => ({
            ...e,
            members: [...e.members, a],
            events: ev(e, `member_joined`, { memberId: a.id }),
          })),
          (this.state.identities[n] = a.id),
          this.commit(),
          { group: this.state.groups[n], memberId: a.id }
        );
      }
      addDemoMembers(e, t) {
        this.mutate(e, (e) => {
          let n = new Set(e.members.map((e) => e.name.toLowerCase())),
            r = t
              .filter((e) => !n.has(e.name.toLowerCase()))
              .map((e) => ({ ...e, id: `${e.id}-${Da()}` }));
          return { ...e, members: [...e.members, ...r] };
        });
      }
      savePrefs(e, t, n) {
        this.mutate(e, (g) => ({
          ...g,
          members: g.members.map((m) => (m.id === t ? { ...m, prefs: n } : m)),
          events: ev(g, `prefs_submitted`, {
            memberId: t,
            secFromJoin: Math.round(
              (Date.now() - (g.members.find((m) => m.id === t)?.joinedAt ?? Date.now())) / 1e3,
            ),
          }),
        }));
      }
      setSharedBudget(e, t) {
        this.mutate(e, (e) => ({ ...e, sharedBudget: t }));
      }
      saveGeneration(e, t, n) {
        this.mutate(e, (e) => ({
          ...e,
          itineraries: t,
          generation: n,
          votes: {},
          confirmedId: null,
          events: ev(e, `generation_saved`, { options: t.length }),
        }));
      }
      vote(e, t, n) {
        this.mutate(e, (e) => {
          let r = { ...e.votes };
          return (
            n ? (r[t] = n) : delete r[t],
            {
              ...e,
              votes: r,
              events: ev(e, n ? `vote` : `vote_cleared`, {
                memberId: t,
                optionId: n,
                changed: !!e.votes[t],
              }),
            }
          );
        });
      }
      confirm(e, t) {
        this.mutate(e, (e) => ({
          ...e,
          confirmedId: t,
          events: ev(e, t ? `plan_confirmed` : `vote_reopened`, { optionId: t }),
        }));
      }
      setDeadline(e, t) {
        this.mutate(e, (g) => ({
          ...g,
          deadline: t,
          events: ev(g, t ? `deadline_set` : `deadline_cleared`, { deadline: t }),
        }));
      }
      logReminder(e, t, n) {
        this.mutate(e, (g) => ({
          ...g,
          remindersSent: (g.remindersSent ?? 0) + 1,
          events: ev(g, `reminder_sent`, { targets: t, via: n }),
        }));
      }
      markUnavailable(e, t, n) {
        this.mutate(e, (g) => {
          let r = g.itineraries.find((x) => x.id === t);
          if (!r) return g;
          let i = g.itineraries.filter((x) => x.id !== t),
            a = {};
          for (let [m, o] of Object.entries(g.votes))
            i.some((x) => x.id === o) && (a[m] = o);
          return {
            ...g,
            itineraries: i,
            votes: a,
            confirmedId: null,
            unavailable: [
              ...(g.unavailable ?? []),
              { id: t, name: r.name, reason: n, at: Date.now() },
            ],
            events: ev(g, `option_unavailable`, { optionId: t, reason: n, remaining: i.length }),
          };
        });
      }
      dropMember(e, t) {
        this.mutate(e, (g) => {
          let r = { ...g.votes };
          return (
            delete r[t],
            {
              ...g,
              members: g.members.filter((x) => x.id !== t),
              votes: r,
              confirmedId: null,
              events: ev(g, `member_dropped`, { memberId: t }),
            }
          );
        });
      }
      getIdentity(e) {
        let t = Oa(e),
          n = this.state.identities[t],
          r = this.state.groups[t];
        return r && n && r.members.some((e) => e.id === n) ? n : void 0;
      }
      setIdentity(e, t) {
        ((this.state.identities[Oa(e)] = t), this.commit());
      }
      renameMember(e, t, n) {
        let r = n.trim(),
          i = this.state.groups[Oa(e)];
        if (!i) throw new wa(`Không tìm thấy nhóm.`);
        if (
          i.members.some(
            (e) => e.id !== t && e.name.toLowerCase() === r.toLowerCase(),
          )
        )
          throw new wa(`Đã có người khác dùng tên này trong nhóm.`);
        this.mutate(i.code, (e) => ({
          ...e,
          members: e.members.map((e) => (e.id === t ? { ...e, name: r } : e)),
        }));
      }
      removeMember(e, t) {
        this.mutate(e, (e) => {
          let n = { ...e.votes };
          return (
            delete n[t],
            { ...e, members: e.members.filter((e) => e.id !== t), votes: n }
          );
        });
      }
    })(),
    Aa = (e) => B.subscribe(e),
    ja = () => B.getVersion();
  function Ma(e) {
    (0, _.useSyncExternalStore)(Aa, ja);
    let t = e ? B.getGroup(e) : void 0,
      n = e ? B.getIdentity(e) : void 0;
    return { group: t, me: t?.members.find((e) => e.id === n) };
  }
  function Na() {
    return ((0, _.useSyncExternalStore)(Aa, ja), B.listGroups());
  }
  function Pa(e) {
    return `${typeof window < `u` ? window.location.href.split(`#`)[0] : ``}#/join/${e}`;
  }
  function Fa(e) {
    return `${typeof window < `u` ? window.location.href.split(`#`)[0] : ``}#/g/${e}/plan`;
  }
  function Ia({ light: e, className: t }) {
    return (0, I.jsxs)(`span`, {
      className: L(`inline-flex items-center gap-2.5`, t),
      children: [
        (0, I.jsxs)(`svg`, {
          width: `34`,
          height: `34`,
          viewBox: `0 0 34 34`,
          "aria-hidden": `true`,
          children: [
            (0, I.jsx)(`rect`, {
              width: `34`,
              height: `34`,
              rx: `10`,
              fill: `#FF5A4D`,
            }),
            (0, I.jsx)(`path`, {
              d: `M7 13a2.2 2.2 0 0 0 0 4.4V22a1.5 1.5 0 0 0 1.5 1.5h17A1.5 1.5 0 0 0 27 22v-4.6A2.2 2.2 0 0 0 27 13v-2.5A1.5 1.5 0 0 0 25.5 9h-17A1.5 1.5 0 0 0 7 10.5z`,
              fill: `#fff`,
            }),
            (0, I.jsx)(`path`, {
              d: `M21 10v13`,
              stroke: `#FF5A4D`,
              strokeWidth: `1.6`,
              strokeDasharray: `1.6 2.2`,
            }),
            (0, I.jsx)(`path`, {
              d: `M11 16.5h6M11 19h4`,
              stroke: `#FF5A4D`,
              strokeWidth: `1.6`,
              strokeLinecap: `round`,
            }),
          ],
        }),
        (0, I.jsxs)(`span`, {
          className: L(
            `text-[15px] font-extrabold leading-none tracking-tight`,
            e ? `text-white` : `text-ink-900`,
          ),
          children: [
            `WEEKEND`,
            (0, I.jsx)(`span`, {
              className: `text-brand-500`,
              children: ` TICKET`,
            }),
          ],
        }),
      ],
    });
  }
  function La() {
    let [e, t] = (0, _.useState)(!1),
      n = _t(),
      r = Na()[0],
      i = (e) => {
        (t(!1),
          n(`/`),
          setTimeout(
            () =>
              document
                .getElementById(e)
                ?.scrollIntoView({ behavior: `smooth` }),
            80,
          ));
      },
      a = `rounded-full px-3.5 py-2 text-sm font-medium text-ink-700 hover:bg-ink-100/70`;
    return (0, I.jsxs)(`header`, {
      className: `no-print sticky top-0 z-40 border-b border-ink-100/70 bg-cream/85 backdrop-blur-md`,
      children: [
        (0, I.jsxs)(`div`, {
          className: `mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:px-6`,
          children: [
            (0, I.jsx)(M, {
              to: `/`,
              "aria-label": `WEEKEND TICKET - Trang chủ`,
              onClick: () => t(!1),
              children: (0, I.jsx)(Ia, {}),
            }),
            (0, I.jsxs)(`nav`, {
              className: `hidden items-center gap-1 md:flex`,
              "aria-label": `Điều hướng chính`,
              children: [
                (0, I.jsx)(`button`, {
                  className: a,
                  onClick: () => i(`how`),
                  children: `Cách hoạt động`,
                }),
                (0, I.jsx)(`button`, {
                  className: a,
                  onClick: () => i(`why`),
                  children: `Vì sao chọn chúng mình`,
                }),
                (0, I.jsx)(`button`, {
                  className: a,
                  onClick: () => i(`sample`),
                  children: `Lịch trình mẫu`,
                }),
                r &&
                  (0, I.jsx)(jn, {
                    to: `/g/${r.code}`,
                    className: a,
                    children: `Nhóm của tôi`,
                  }),
                (0, I.jsx)(M, {
                  to: `/start?tab=join`,
                  className: a,
                  children: `Tham gia nhóm`,
                }),
                (0, I.jsx)(M, {
                  to: `/start`,
                  className: `btn-primary btn-sm ml-2`,
                  children: `Lên kế hoạch ngay`,
                }),
              ],
            }),
            (0, I.jsx)(`button`, {
              className: `btn-ghost !p-2 md:hidden`,
              "aria-label": e ? `Đóng menu` : `Mở menu`,
              "aria-expanded": e,
              onClick: () => t(!e),
              children: e
                ? (0, I.jsx)(ua, { size: 22 })
                : (0, I.jsx)(fi, { size: 22 }),
            }),
          ],
        }),
        e &&
          (0, I.jsx)(`nav`, {
            className: `pop-in border-t border-ink-100 bg-cream px-4 pb-4 pt-2 md:hidden`,
            "aria-label": `Điều hướng di động`,
            children: (0, I.jsxs)(`div`, {
              className: `flex flex-col`,
              children: [
                (0, I.jsx)(`button`, {
                  className: L(a, `text-left`),
                  onClick: () => i(`how`),
                  children: `Cách hoạt động`,
                }),
                (0, I.jsx)(`button`, {
                  className: L(a, `text-left`),
                  onClick: () => i(`why`),
                  children: `Vì sao chọn chúng mình`,
                }),
                (0, I.jsx)(`button`, {
                  className: L(a, `text-left`),
                  onClick: () => i(`sample`),
                  children: `Lịch trình mẫu`,
                }),
                r &&
                  (0, I.jsxs)(M, {
                    to: `/g/${r.code}`,
                    className: a,
                    onClick: () => t(!1),
                    children: [`Nhóm của tôi: `, r.name],
                  }),
                (0, I.jsx)(M, {
                  to: `/start?tab=join`,
                  className: a,
                  onClick: () => t(!1),
                  children: `Tham gia nhóm`,
                }),
                (0, I.jsx)(M, {
                  to: `/start`,
                  className: `btn-primary mt-2`,
                  onClick: () => t(!1),
                  children: `Lên kế hoạch ngay`,
                }),
              ],
            }),
          }),
      ],
    });
  }
  function Ra() {
    return (0, I.jsxs)(`footer`, {
      className: `no-print mt-16 bg-ink-900 text-ink-100`,
      children: [
        (0, I.jsxs)(`div`, {
          className: `mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-3 md:px-6`,
          children: [
            (0, I.jsxs)(`div`, {
              children: [
                (0, I.jsx)(Ia, { light: !0 }),
                (0, I.jsx)(`p`, {
                  className: `mt-4 max-w-xs text-sm text-ink-300`,
                  children: `Giúp hội bạn ở TP.HCM thống nhất sở thích, ngân sách và thời gian để có một buổi đi chơi vừa ý.`,
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `text-sm`,
              children: [
                (0, I.jsx)(`p`, {
                  className: `mb-3 font-bold text-white`,
                  children: `Cam kết của chúng mình`,
                }),
                (0, I.jsx)(`ul`, {
                  className: `space-y-2 text-ink-300`,
                  children: [
                    `Miễn phí tạo và xem lịch trình`,
                    `Không bán tour, không thu tiền`,
                    `Không đặt chỗ thay bạn, chỉ dẫn đến liên kết bên ngoài`,
                    `Không cần tạo tài khoản`,
                  ].map((e) =>
                    (0, I.jsxs)(
                      `li`,
                      {
                        className: `flex items-start gap-2`,
                        children: [
                          (0, I.jsx)(mr, {
                            size: 16,
                            className: `mt-0.5 shrink-0 text-mint`,
                          }),
                          e,
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `text-sm text-ink-300`,
              children: [
                (0, I.jsx)(`p`, {
                  className: `mb-3 font-bold text-white`,
                  children: `Lưu ý về dữ liệu`,
                }),
                (0, I.jsxs)(`p`, {
                  children: [
                    `Bản MVP đang dùng `,
                    (0, I.jsx)(`strong`, {
                      className: `text-white`,
                      children: WT_realData() ? `dữ liệu địa điểm do team nhập` : `dữ liệu địa điểm minh hoạ`,
                    }),
                    WT_realData() ? `: tên, giá, giờ mở cửa và vị trí do team tự đối chiếu (có ghi nguồn và ngày kiểm tra), có thể đã thay đổi. Mọi chi phí, quãng đường và thời gian di chuyển đều là ` : `: tên, giá, thời lượng và vị trí chỉ là giá trị mẫu, chưa được xác minh. Mọi chi phí, quãng đường và thời gian di chuyển đều là `,
                    (0, I.jsx)(`strong`, {
                      className: `text-white`,
                      children: `ước tính`,
                    }),
                    `.`,
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `border-t border-white/10 py-4 text-center text-xs text-ink-300`,
          children: [
            `© `,
            new Date().getFullYear(),
            ` WEEKEND TICKET · Dự án MVP thử nghiệm`,
          ],
        }),
      ],
    });
  }
  var za = [
    { n: 1, label: `Tạo nhóm`, path: `` },
    { n: 2, label: `Sở thích`, path: `/prefs` },
    { n: 3, label: `Gợi ý`, path: `/recommend` },
    { n: 4, label: `So sánh & bình chọn`, path: `/compare` },
    { n: 5, label: `Lịch trình`, path: `/plan` },
  ];
  function Ba({ code: e, current: t, reached: n }) {
    return (0, I.jsx)(`nav`, {
      className: `no-print mb-6 overflow-x-auto`,
      "aria-label": `Các bước`,
      children: (0, I.jsx)(`ol`, {
        className: `mx-auto flex min-w-max items-center justify-center gap-1.5 px-1`,
        children: za.map((r, i) => {
          let a = r.n < t || (r.n < n && r.n !== t),
            o = r.n === t,
            s = r.n <= n,
            c = (0, I.jsxs)(`span`, {
              className: L(
                `flex items-center gap-2 rounded-full py-1.5 pl-1.5 pr-3.5 text-xs font-semibold transition md:text-sm`,
                o
                  ? `bg-ink-900 text-white`
                  : s
                    ? `bg-white text-ink-700 shadow-sm hover:bg-ink-50`
                    : `bg-ink-100/70 text-ink-300`,
              ),
              children: [
                (0, I.jsx)(`span`, {
                  className: L(
                    `flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold`,
                    o
                      ? `bg-brand-500 text-white`
                      : a
                        ? `bg-mint text-white`
                        : `bg-ink-100 text-ink-500`,
                  ),
                  children: a && !o ? (0, I.jsx)(mr, { size: 14 }) : r.n,
                }),
                r.label,
              ],
            });
          return (0, I.jsxs)(
            `li`,
            {
              className: `flex items-center gap-1.5`,
              children: [
                s
                  ? (0, I.jsx)(M, {
                      to: `/g/${e}${r.path}`,
                      "aria-current": o ? `step` : void 0,
                      children: c,
                    })
                  : (0, I.jsx)(`span`, {
                      "aria-disabled": `true`,
                      children: c,
                    }),
                i < za.length - 1 &&
                  (0, I.jsx)(`span`, {
                    className: `h-px w-3 bg-ink-300 md:w-5`,
                  }),
              ],
            },
            r.n,
          );
        }),
      }),
    });
  }
  function Va(e, t = new Date()) {
    let n = new Date(t.getFullYear(), t.getMonth(), t.getDate()),
      r = (e - n.getDay() + 7) % 7;
    return (n.setDate(n.getDate() + r), Ha(n));
  }
  var Ha = (e) =>
      `${e.getFullYear()}-${String(e.getMonth() + 1).padStart(2, `0`)}-${String(e.getDate()).padStart(2, `0`)}`,
    Ua = () => Ha(new Date());
  function Wa(e) {
    let t = 17e11;
    return {
      Vy: {
        moods: [`chill`, `foodie`, `social`],
        budgetMax: 22e4,
        date: e,
        startTime: `14:00`,
        durationHours: 5,
        interests: [`cafe`, `food`, `photo`, `shopping`],
        avoidCategories: [],
        avoidText: ``,
        areas: [],
        submittedAt: t,
      },
      Minh: {
        moods: [`fun`, `social`],
        budgetMax: 25e4,
        date: e,
        startTime: `14:00`,
        durationHours: 5,
        interests: [`entertainment`, `food`, `outdoor`],
        avoidCategories: [`shopping`],
        avoidText: ``,
        areas: [],
        submittedAt: t,
      },
      Lan: {
        moods: [`chill`, `creative`],
        budgetMax: 2e5,
        date: e,
        startTime: `13:30`,
        durationHours: 6,
        interests: [`cafe`, `workshop`, `photo`, `culture`],
        avoidCategories: [],
        avoidText: `karaoke`,
        areas: [],
        submittedAt: t,
      },
      Huy: {
        moods: [`explore`, `foodie`],
        budgetMax: 3e5,
        date: e,
        startTime: `13:30`,
        durationHours: 6,
        interests: [`food`, `cafe`, `outdoor`, `culture`],
        avoidCategories: [],
        avoidText: ``,
        areas: [],
        submittedAt: t,
      },
    };
  }
  function Ga(e) {
    let t = Wa(e);
    return Object.keys(t).map((e, n) => ({
      id: `demo-${e.toLowerCase()}`,
      name: e,
      joinedAt: 17e11 + n,
      isDemo: !0,
      prefs: t[e],
    }));
  }
  var Ka = (e) => {
      let [t, n] = e.split(`:`).map(Number);
      return (t || 0) * 60 + (n || 0);
    },
    qa = (e) => {
      let t = Math.round(e),
        n = Math.floor(t / 60) % 24,
        r = t % 60;
      return `${String(n).padStart(2, `0`)}:${String(r).padStart(2, `0`)}`;
    },
    V = (e) => `${Math.round(e).toLocaleString(`vi-VN`)}đ`,
    Ja = (e) =>
      e === 0
        ? `0đ`
        : e >= 1e6
          ? `${(e / 1e6).toLocaleString(`vi-VN`, { maximumFractionDigits: 2 })}tr`
          : `${Math.round(e / 1e3)}k`,
    Ya = (e) => {
      let t = Math.floor(e / 60),
        n = Math.round(e % 60);
      return t === 0
        ? `${n} phút`
        : n === 0
          ? `${t} giờ`
          : `${t}g${String(n).padStart(2, `0`)}`;
    },
    Xa = (e) =>
      e
        .normalize(`NFD`)
        .replace(/[̀-ͯ]/g, ``)
        .replace(/đ/g, `d`)
        .replace(/Đ/g, `d`)
        .toLowerCase()
        .trim(),
    Za = (e) => {
      if (!e) return ``;
      let t = new Date(`${e}T00:00:00`);
      return Number.isNaN(t.getTime())
        ? e
        : `${[`Chủ nhật`, `Thứ 2`, `Thứ 3`, `Thứ 4`, `Thứ 5`, `Thứ 6`, `Thứ 7`][t.getDay()]}, ${String(t.getDate()).padStart(2, `0`)}/${String(t.getMonth() + 1).padStart(2, `0`)}/${t.getFullYear()}`;
    },
    Qa = (e) => {
      let t = 5381;
      for (let n = 0; n < e.length; n++)
        t = ((t << 5) + t + e.charCodeAt(n)) | 0;
      return (t >>> 0).toString(36);
    },
    $a = (e) =>
      e
        .split(/[,;\n]/)
        .map((e) => Xa(e))
        .filter((e) => e.length >= 2);
  function eo(e, t = null) {
    let n = e.filter((e) => !!e.prefs),
      r = [],
      i = 1 / 0,
      a = ``;
    for (let e of n)
      e.prefs.budgetMax < i && ((i = e.prefs.budgetMax), (a = e.name));
    Number.isFinite(i) || (i = 0);
    let o = t != null && t > 0,
      s = o ? t : i,
      c = {},
      l = {},
      u = new Map(),
      d = new Map(),
      f = {};
    for (let e of n) {
      let t = e.prefs;
      (t.interests.forEach((e) => (c[e] = (c[e] ?? 0) + 1)),
        t.moods.forEach((e) => (l[e] = (l[e] ?? 0) + 1)),
        t.avoidCategories.forEach((t) =>
          u.set(t, [...(u.get(t) ?? []), e.name]),
        ),
        $a(t.avoidText).forEach((t) => d.set(t, [...(d.get(t) ?? []), e.name])),
        t.areas.forEach((e) => (f[e] = (f[e] ?? 0) + 1)));
    }
    let p = new Map();
    n.forEach((e) => p.set(e.prefs.date, (p.get(e.prefs.date) ?? 0) + 1));
    let m = ``,
      h = -1;
    for (let [e, t] of [...p.entries()].sort((e, t) =>
      e[0].localeCompare(t[0]),
    ))
      t > h && ((h = t), (m = e));
    let g = n.filter((e) => e.prefs.date === m),
      _ = n.filter((e) => e.prefs.date !== m).map((e) => e.name),
      v = g.length ? Math.max(...g.map((e) => Ka(e.prefs.startTime))) : 0,
      y = g.length
        ? Math.min(
            ...g.map((e) => Ka(e.prefs.startTime) + e.prefs.durationHours * 60),
          )
        : 0,
      b = Math.max(0, y - v);
    n.length < 2 &&
      r.push({
        level: `error`,
        text: `Cần ít nhất 2 thành viên gửi sở thích để gợi ý lịch trình (hiện có ${n.length}).`,
      });
    let x = e.filter((e) => !e.prefs).map((e) => e.name);
    (x.length &&
      n.length >= 2 &&
      r.push({
        level: `warn`,
        text: `${x.join(`, `)} chưa gửi sở thích nên chưa được tính vào gợi ý.`,
      }),
      _.length &&
        r.push({
          level: `warn`,
          text: `${_.join(`, `)} chọn ngày khác với đa số, nên khung giờ chung chỉ tính cho những bạn cùng ngày.`,
        }),
      n.length >= 2 &&
        b < 90 &&
        r.push({
          level: `error`,
          text: `Khung giờ chung của nhóm chỉ còn ${b} phút (cần ít nhất 90 phút). Hãy điều chỉnh giờ bắt đầu hoặc thời lượng.`,
        }),
      o &&
        s > i &&
        n.length &&
        r.push({
          level: `info`,
          text: `Ngân sách chung do nhóm thống nhất cao hơn mức tối đa của một thành viên. Hãy chắc rằng bạn ấy đồng ý.`,
        }));
    let S = JSON.stringify({
      c: s,
      m: n
        .map((e) => ({ id: e.id, ...e.prefs, submittedAt: void 0 }))
        .sort((e, t) => e.id.localeCompare(t.id)),
    });
    return {
      submitted: n,
      totalMembers: e.length,
      budgetCap: s,
      budgetSource: o ? `shared` : `lowest`,
      lowestBudget: i,
      lowestBudgetMember: a,
      interestCounts: c,
      moodCounts: l,
      avoidCategories: [...u.entries()].map(([e, t]) => ({
        category: e,
        by: t,
      })),
      avoidKeywords: [...d.entries()].map(([e, t]) => ({ keyword: e, by: t })),
      areaCounts: f,
      hasAreaPrefs: Object.keys(f).length > 0,
      window: { date: m, startMin: v, endMin: y, availableMin: b, offDate: _ },
      issues: r,
      inputsHash: Qa(S),
    };
  }
  var to = 0.65,
    no = 0.35,
    ro = 0.55;
  function io(e, t) {
    return t.interests.length === 0
      ? 0.5
      : t.interests.includes(e.category)
        ? 1
        : e.alsoInterests.some((e) => t.interests.includes(e))
          ? 0.6
          : 0;
  }
  function ao(e, t) {
    if (t.moods.length === 0) return 0.5;
    let n = e.moods.filter((e) => t.moods.includes(e)).length;
    return Math.min(1, n / Math.min(2, t.moods.length));
  }
  function oo(e, t) {
    return to * io(e, t) + no * ao(e, t);
  }
  var so = {
      roadFactor: 1.35,
      rideKmh: 20,
      rideOverheadMin: 8,
      costPerKm: 3500,
      minRideCost: 5e3,
      walkMaxKm: 0.6,
      walkMinPerKm: 13,
    },
    co = (e, t) => {
      let n = (e) => (e * Math.PI) / 180,
        r = n(t.lat - e.lat),
        i = n(t.lng - e.lng),
        a =
          Math.sin(r / 2) ** 2 +
          Math.cos(n(e.lat)) * Math.cos(n(t.lat)) * Math.sin(i / 2) ** 2;
      return 12742 * Math.asin(Math.sqrt(a));
    },
    lo = (e, t) => {
      let n = co(e, t),
        r = n * so.roadFactor;
      if (n <= so.walkMaxKm)
        return {
          km: uo(r),
          minutes: Math.max(3, Math.round(r * so.walkMinPerKm)),
          cost: 0,
          mode: `walk`,
        };
      let i = Math.round((r / so.rideKmh) * 60 + so.rideOverheadMin),
        a = Math.max(
          so.minRideCost,
          Math.round((r * so.costPerKm) / 1e3) * 1e3,
        );
      return { km: uo(r), minutes: i, cost: a, mode: `ride` };
    },
    uo = (e) => Math.round(e * 10) / 10,
    fo = [
      {
        id: `chill`,
        label: `Chill, thư giãn`,
        emoji: `🌿`,
        hint: `Nhẹ nhàng, không vội`,
      },
      {
        id: `fun`,
        label: `Vui, năng lượng`,
        emoji: `⚡`,
        hint: `Quẩy hết mình`,
      },
      {
        id: `creative`,
        label: `Sáng tạo, nghệ thuật`,
        emoji: `🎨`,
        hint: `Tự tay làm, cảm hứng`,
      },
      {
        id: `explore`,
        label: `Khám phá`,
        emoji: `🧭`,
        hint: `Chỗ mới, góc lạ`,
      },
      {
        id: `social`,
        label: `Giao lưu, tương tác`,
        emoji: `💬`,
        hint: `Chơi chung, trò chuyện`,
      },
      {
        id: `foodie`,
        label: `Ăn uống là chính`,
        emoji: `🍜`,
        hint: `Ăn ngon, uống đã`,
      },
    ],
    po = [
      { id: `cafe`, label: `Quán cà phê`, emoji: `☕` },
      { id: `food`, label: `Ăn uống, ẩm thực`, emoji: `🍽️` },
      { id: `workshop`, label: `Workshop`, emoji: `🏺` },
      { id: `entertainment`, label: `Giải trí`, emoji: `🎳` },
      { id: `outdoor`, label: `Hoạt động ngoài trời`, emoji: `🌳` },
      { id: `shopping`, label: `Mua sắm`, emoji: `🛍️` },
      { id: `culture`, label: `Văn hoá, nghệ thuật`, emoji: `🏛️` },
      { id: `photo`, label: `Điểm chụp ảnh đẹp`, emoji: `📸` },
      { id: `other`, label: `Hoạt động khác`, emoji: `✨` },
    ],
    mo = (e) => po.find((t) => t.id === e)?.label ?? e,
    ho = {
      chill: `Chill`,
      fun: `Quẩy`,
      creative: `Sáng tạo`,
      explore: `Khám phá`,
      social: `Gặp gỡ`,
      foodie: `Ăn ngon`,
    },
    go = [
      { id: `q1`, name: `Quận 1`, lat: 10.7769, lng: 106.7009 },
      { id: `q3`, name: `Quận 3`, lat: 10.784, lng: 106.6844 },
      { id: `q4`, name: `Quận 4`, lat: 10.7578, lng: 106.7013 },
      { id: `q5`, name: `Quận 5`, lat: 10.754, lng: 106.6634 },
      { id: `q7`, name: `Quận 7`, lat: 10.7324, lng: 106.7217 },
      { id: `q10`, name: `Quận 10`, lat: 10.7679, lng: 106.6669 },
      { id: `bt`, name: `Bình Thạnh`, lat: 10.8106, lng: 106.7091 },
      { id: `pn`, name: `Phú Nhuận`, lat: 10.7991, lng: 106.6802 },
      { id: `tb`, name: `Tân Bình`, lat: 10.8014, lng: 106.6526 },
      { id: `gv`, name: `Gò Vấp`, lat: 10.8386, lng: 106.6652 },
      { id: `td`, name: `TP. Thủ Đức`, lat: 10.8494, lng: 106.7537 },
    ],
    _o = (e) => go.find((t) => t.id === e)?.name ?? e,
    vo = [2, 3, 4, 5, 6, 8],
    yo = [1e5, 15e4, 2e5, 3e5, 5e5],
    bo = [
      { label: `Sáng · 09:00`, time: `09:00` },
      { label: `Trưa · 11:30`, time: `11:30` },
      { label: `Chiều · 14:00`, time: `14:00` },
      { label: `Tối · 18:00`, time: `18:00` },
    ],
    xo = [
      [
        `cafe-sach`,
        `Quán cà phê sách yên tĩnh`,
        `q3`,
        `cafe`,
        0.002,
        -0.003,
        `Không gian nhiều sách, hợp ngồi trò chuyện nhẹ nhàng hoặc làm việc nhóm.`,
        [`chill`, `creative`],
        [`culture`],
        [`nhóm nhỏ`, `yên tĩnh`],
        45e3,
        8e4,
        90,
        `quán cà phê sách`,
      ],
      [
        `cafe-san-vuon`,
        `Cà phê sân vườn xanh`,
        `bt`,
        `cafe`,
        -0.004,
        0.004,
        `Quán nhiều cây xanh, thoáng, dễ ngồi lâu và chụp ảnh.`,
        [`chill`, `social`],
        [`photo`, `outdoor`],
        [`nhóm 3–6 người`, `nhiều cây xanh`],
        4e4,
        7e4,
        90,
        `cà phê sân vườn`,
      ],
      [
        `cafe-rooftop`,
        `Cà phê rooftop ngắm thành phố`,
        `q1`,
        `cafe`,
        0.003,
        0.002,
        `Tầng thượng nhìn ra thành phố, hợp buổi chiều muộn.`,
        [`chill`, `social`, `explore`],
        [`photo`],
        [`view đẹp`, `buổi chiều`],
        7e4,
        12e4,
        75,
        `cà phê rooftop`,
      ],
      [
        `cafe-boardgame`,
        `Quán cà phê board game`,
        `q10`,
        `cafe`,
        0.002,
        0.002,
        `Vừa uống nước vừa chơi board game cùng nhau.`,
        [`fun`, `social`],
        [`entertainment`],
        [`nhóm 3–6 người`, `chơi chung`],
        5e4,
        9e4,
        120,
        `board game cafe`,
      ],
      [
        `cafe-vintage`,
        `Cà phê phong cách vintage`,
        `q5`,
        `cafe`,
        -0.003,
        0.003,
        `Quán decor hoài cổ, nhiều góc chụp ảnh.`,
        [`chill`, `explore`],
        [`photo`],
        [`decor đẹp`],
        35e3,
        6e4,
        75,
        `cà phê vintage`,
      ],
      [
        `cafe-hem`,
        `Cà phê trong hẻm nhỏ`,
        `pn`,
        `cafe`,
        0.002,
        0.001,
        `Quán nhỏ trong hẻm, giá mềm, hợp ngồi tám chuyện.`,
        [`chill`, `explore`],
        [],
        [`giá mềm`, `yên tĩnh`],
        3e4,
        55e3,
        60,
        `cà phê hẻm`,
      ],
      [
        `cafe-gallery`,
        `Cà phê kết hợp phòng tranh`,
        `q4`,
        `cafe`,
        0.002,
        -0.002,
        `Quán có tranh và vật phẩm nghệ thuật trưng bày.`,
        [`chill`, `creative`],
        [`culture`, `photo`],
        [`nghệ thuật`],
        5e4,
        9e4,
        75,
        `cà phê phòng tranh`,
      ],
      [
        `cafe-thucung`,
        `Cà phê thú cưng`,
        `q7`,
        `other`,
        0.003,
        0.001,
        `Quán có thú cưng thân thiện để vuốt ve, trò chuyện.`,
        [`chill`, `fun`],
        [`cafe`],
        [`yêu động vật`],
        7e4,
        11e4,
        90,
        `cà phê thú cưng`,
      ],
      [
        `food-vatpho`,
        `Tour ăn vặt vỉa hè`,
        `q4`,
        `food`,
        -0.004,
        0.003,
        `Đi bộ thử nhiều món ăn vặt nhỏ trên cùng một tuyến phố.`,
        [`foodie`, `explore`, `social`],
        [`outdoor`],
        [`giá mềm`, `nhiều món`],
        6e4,
        11e4,
        90,
        `ăn vặt vỉa hè`,
      ],
      [
        `food-lau-nuong`,
        `Quán lẩu nướng cho nhóm`,
        `gv`,
        `food`,
        0.002,
        -0.004,
        `Ăn chung quanh nồi lẩu hoặc bếp nướng, phù hợp nhóm đông.`,
        [`foodie`, `social`, `fun`],
        [],
        [`nhóm 4–8 người`],
        11e4,
        18e4,
        100,
        `quán lẩu nướng`,
      ],
      [
        `food-comtam`,
        `Quán cơm bình dân`,
        `q10`,
        `food`,
        -0.002,
        -0.002,
        `Bữa ăn no, nhanh, giá sinh viên.`,
        [`foodie`],
        [],
        [`giá sinh viên`, `nhanh`],
        35e3,
        6e4,
        50,
        `quán cơm bình dân`,
      ],
      [
        `food-han`,
        `Quán đồ ăn Hàn Quốc`,
        `tb`,
        `food`,
        0.003,
        0.002,
        `Các món Hàn quen thuộc để chia sẻ cả nhóm.`,
        [`foodie`, `social`],
        [],
        [`chia sẻ món`],
        9e4,
        15e4,
        80,
        `quán đồ ăn Hàn Quốc`,
      ],
      [
        `food-banhngot`,
        `Tiệm bánh ngọt và dessert`,
        `q3`,
        `food`,
        -0.002,
        0.004,
        `Bánh ngọt, kem, đồ uống mát để nghỉ chân.`,
        [`foodie`, `chill`],
        [`cafe`],
        [`ngọt`, `nghỉ chân`],
        55e3,
        1e5,
        60,
        `tiệm bánh dessert`,
      ],
      [
        `food-nhat`,
        `Quán món Nhật bình dân`,
        `q1`,
        `food`,
        -0.002,
        -0.003,
        `Cơm, mì kiểu Nhật với mức giá vừa phải.`,
        [`foodie`, `chill`],
        [],
        [`bữa chính`],
        8e4,
        14e4,
        70,
        `quán món Nhật`,
      ],
      [
        `food-tramsua`,
        `Trà sữa và ăn vặt`,
        `pn`,
        `food`,
        -0.003,
        0.002,
        `Ghé uống trà sữa, ăn nhẹ giữa các điểm.`,
        [`foodie`, `social`],
        [`cafe`],
        [`giá mềm`, `nhanh`],
        3e4,
        6e4,
        45,
        `trà sữa ăn vặt`,
      ],
      [
        `food-buffet`,
        `Buffet nướng giá sinh viên`,
        `td`,
        `food`,
        0.003,
        -0.003,
        `Buffet nướng ăn thoải mái, hợp nhóm bạn đông.`,
        [`foodie`, `fun`, `social`],
        [],
        [`nhóm 4–8 người`, `no nê`],
        15e4,
        22e4,
        100,
        `buffet nướng`,
      ],
      [
        `ws-gom`,
        `Workshop làm gốm`,
        `q3`,
        `workshop`,
        0.004,
        0.001,
        `Tự tay nặn và vẽ sản phẩm gốm mang về.`,
        [`creative`, `chill`],
        [`culture`],
        [`tự tay làm`, `2–4 giờ`],
        25e4,
        4e5,
        120,
        `workshop làm gốm`,
      ],
      [
        `ws-tranh`,
        `Workshop vẽ tranh canvas`,
        `bt`,
        `workshop`,
        0.003,
        -0.003,
        `Cùng vẽ một bức tranh theo hướng dẫn, không cần biết vẽ.`,
        [`creative`, `social`, `chill`],
        [`photo`],
        [`không cần kinh nghiệm`],
        18e4,
        3e5,
        120,
        `workshop vẽ tranh`,
      ],
      [
        `ws-nen`,
        `Workshop làm nến thơm`,
        `q1`,
        `workshop`,
        0.004,
        -0.002,
        `Tự pha mùi hương và đổ nến thơm mang về.`,
        [`creative`, `chill`],
        [],
        [`quà tặng`, `1–2 giờ`],
        2e5,
        32e4,
        90,
        `workshop làm nến thơm`,
      ],
      [
        `ws-banh`,
        `Workshop làm bánh`,
        `pn`,
        `workshop`,
        -0.003,
        -0.003,
        `Làm bánh nhỏ cùng nhau rồi ăn thành quả.`,
        [`creative`, `foodie`, `social`],
        [`food`],
        [`ăn thành quả`],
        2e5,
        35e4,
        120,
        `workshop làm bánh`,
      ],
      [
        `ws-hoa`,
        `Workshop cắm hoa`,
        `q5`,
        `workshop`,
        0.003,
        -0.003,
        `Học cắm một bình hoa nhỏ để mang về.`,
        [`creative`, `chill`],
        [`photo`],
        [`nhẹ nhàng`],
        18e4,
        28e4,
        90,
        `workshop cắm hoa`,
      ],
      [
        `ent-bowling`,
        `Bowling nhóm bạn`,
        `td`,
        `entertainment`,
        -0.003,
        0.004,
        `Chơi bowling theo đường, hợp nhóm 4–6 người.`,
        [`fun`, `social`],
        [],
        [`thi đấu vui`, `nhóm 4–6 người`],
        7e4,
        12e4,
        90,
        `bowling`,
      ],
      [
        `ent-karaoke`,
        `Karaoke phòng nhóm`,
        `q10`,
        `entertainment`,
        0.003,
        -0.002,
        `Thuê phòng hát chung, chia đều chi phí.`,
        [`fun`, `social`],
        [],
        [`nhóm 4–8 người`],
        6e4,
        1e5,
        120,
        `karaoke`,
      ],
      [
        `ent-arcade`,
        `Khu game arcade`,
        `gv`,
        `entertainment`,
        -0.003,
        0.003,
        `Chơi các trò máy game, gắp thú, đua xe.`,
        [`fun`],
        [],
        [`giá linh hoạt`],
        6e4,
        12e4,
        75,
        `khu game arcade`,
      ],
      [
        `ent-escape`,
        `Phòng escape room`,
        `q1`,
        `entertainment`,
        -0.003,
        0.004,
        `Cùng giải đố trong phòng kín, cần phối hợp nhóm.`,
        [`fun`, `social`, `explore`],
        [],
        [`nhóm 3–6 người`, `giải đố`],
        15e4,
        25e4,
        90,
        `escape room`,
      ],
      [
        `ent-rapphim`,
        `Xem phim tại rạp`,
        `tb`,
        `entertainment`,
        -0.003,
        -0.003,
        `Xem một suất phim cùng nhau.`,
        [`chill`, `social`],
        [],
        [`2–3 giờ`],
        8e4,
        13e4,
        130,
        `rạp chiếu phim`,
      ],
      [
        `ent-bida`,
        `Quán bida giải trí`,
        `bt`,
        `entertainment`,
        -0.003,
        -0.001,
        `Chơi bida theo bàn, tính tiền theo giờ chia đều.`,
        [`fun`, `social`],
        [],
        [`theo giờ`],
        4e4,
        8e4,
        90,
        `quán bida`,
      ],
      [
        `out-congvien-song`,
        `Công viên ven sông`,
        `td`,
        `outdoor`,
        0.004,
        -0.003,
        `Đi dạo, ngồi bãi cỏ, hóng gió chiều.`,
        [`chill`, `social`],
        [`photo`],
        [`miễn phí`, `buổi chiều`],
        0,
        3e4,
        75,
        `công viên ven sông`,
      ],
      [
        `out-phidibo`,
        `Dạo phố đi bộ`,
        `q1`,
        `outdoor`,
        0.001,
        0.003,
        `Đi bộ khu trung tâm, xem biểu diễn đường phố.`,
        [`explore`, `social`, `fun`],
        [`photo`],
        [`miễn phí`, `buổi tối`],
        0,
        4e4,
        75,
        `phố đi bộ`,
      ],
      [
        `out-cvcayxanh`,
        `Công viên cây xanh lớn`,
        `tb`,
        `outdoor`,
        0.003,
        -0.002,
        `Công viên rộng, hợp picnic nhẹ và chơi thể thao.`,
        [`chill`, `fun`],
        [`photo`],
        [`miễn phí`, `rộng`],
        0,
        3e4,
        90,
        `công viên`,
      ],
      [
        `out-dapxe`,
        `Đạp xe dạo ven kênh`,
        `bt`,
        `outdoor`,
        0.005,
        0.003,
        `Thuê xe đạp và đi dọc tuyến đường ven kênh.`,
        [`fun`, `explore`],
        [],
        [`vận động nhẹ`],
        3e4,
        7e4,
        90,
        `thuê xe đạp`,
      ],
      [
        `out-caulong`,
        `Sân cầu lông, bóng chuyền`,
        `gv`,
        `outdoor`,
        0.004,
        -0.001,
        `Thuê sân chơi thể thao nhóm.`,
        [`fun`, `social`],
        [`entertainment`],
        [`thể thao`, `theo giờ`],
        3e4,
        6e4,
        90,
        `thuê sân cầu lông`,
      ],
      [
        `shop-dosi`,
        `Khu đồ vintage, đồ si`,
        `q5`,
        `shopping`,
        -0.004,
        -0.001,
        `Lục tìm quần áo, phụ kiện second-hand.`,
        [`explore`, `fun`],
        [`photo`],
        [`săn đồ`, `giá mềm`],
        5e4,
        2e5,
        90,
        `cửa hàng đồ vintage`,
      ],
      [
        `shop-luuniem`,
        `Chợ đêm, quà lưu niệm`,
        `q1`,
        `shopping`,
        -0.004,
        -0.001,
        `Dạo gian hàng quà lưu niệm, đồ ăn nhẹ buổi tối.`,
        [`explore`, `foodie`],
        [`food`],
        [`buổi tối`],
        5e4,
        15e4,
        75,
        `chợ đêm`,
      ],
      [
        `shop-handmade`,
        `Cửa hàng đồ handmade`,
        `q3`,
        `shopping`,
        0.001,
        0.005,
        `Cửa hàng nhỏ bán đồ thủ công, quà tặng.`,
        [`creative`, `chill`],
        [`culture`],
        [`quà tặng`],
        4e4,
        15e4,
        60,
        `cửa hàng handmade`,
      ],
      [
        `shop-tttm`,
        `Trung tâm thương mại`,
        `q7`,
        `shopping`,
        -0.003,
        0.003,
        `Đi dạo, mua sắm, nghỉ chân trong điều hoà.`,
        [`chill`, `social`],
        [`food`],
        [`điều hoà`, `mưa cũng ổn`],
        5e4,
        25e4,
        120,
        `trung tâm thương mại`,
      ],
      [
        `cul-baotang`,
        `Bảo tàng lịch sử`,
        `q1`,
        `culture`,
        0.004,
        -0.004,
        `Tham quan trưng bày về lịch sử và văn hoá.`,
        [`explore`, `chill`],
        [],
        [`giá vé thấp`],
        2e4,
        5e4,
        90,
        `bảo tàng`,
      ],
      [
        `cul-phosach`,
        `Phố sách, nhà sách lớn`,
        `q1`,
        `culture`,
        0.002,
        -0.001,
        `Lang thang giữa các kệ sách, chọn sách và văn phòng phẩm.`,
        [`chill`, `explore`, `creative`],
        [`shopping`, `cafe`],
        [`yên tĩnh`],
        0,
        8e4,
        60,
        `nhà sách`,
      ],
      [
        `cul-trienlam`,
        `Không gian triển lãm nghệ thuật`,
        `q3`,
        `culture`,
        -0.003,
        -0.004,
        `Xem triển lãm tranh, nhiếp ảnh, sắp đặt.`,
        [`creative`, `explore`, `chill`],
        [`photo`],
        [`nghệ thuật`],
        0,
        8e4,
        75,
        `triển lãm nghệ thuật`,
      ],
      [
        `cul-kientruc`,
        `Di tích kiến trúc cổ`,
        `q5`,
        `culture`,
        0.003,
        0.003,
        `Ghé thăm công trình kiến trúc lâu đời trong khu Chợ Lớn.`,
        [`explore`, `chill`],
        [`photo`],
        [`miễn phí hoặc giá thấp`],
        0,
        3e4,
        60,
        `di tích kiến trúc`,
      ],
      [
        `pho-mural`,
        `Hẻm tranh tường (mural)`,
        `q4`,
        `photo`,
        0.004,
        0.002,
        `Con hẻm có nhiều tranh tường đủ màu để chụp ảnh.`,
        [`explore`, `creative`, `fun`],
        [`outdoor`, `culture`],
        [`miễn phí`, `chụp ảnh`],
        0,
        0,
        60,
        `tranh tường mural`,
      ],
      [
        `pho-studio`,
        `Studio ảnh tự chụp`,
        `q10`,
        `photo`,
        -0.003,
        0.002,
        `Tự chụp theo concept với đạo cụ có sẵn.`,
        [`fun`, `creative`, `social`],
        [],
        [`nhóm 3–5 người`],
        6e4,
        12e4,
        60,
        `studio chụp ảnh tự động`,
      ],
      [
        `pho-gocpho`,
        `Góc phố cổ điển`,
        `pn`,
        `photo`,
        0.004,
        0.003,
        `Những góc phố, kiến trúc cũ hợp chụp ảnh.`,
        [`explore`, `chill`],
        [`outdoor`, `culture`],
        [`miễn phí`],
        0,
        0,
        45,
        `góc phố cổ`,
      ],
      [
        `oth-picnic`,
        `Picnic công viên`,
        `q7`,
        `other`,
        0.004,
        -0.002,
        `Trải thảm, mang đồ ăn nhẹ, chơi trò chơi nhóm.`,
        [`chill`, `social`, `fun`],
        [`outdoor`, `food`],
        [`giá mềm`, `ngoài trời`],
        2e4,
        8e4,
        90,
        `công viên picnic`,
      ],
      [
        `oth-patin`,
        `Trượt patin`,
        `td`,
        `other`,
        0.001,
        0.005,
        `Thuê giày patin trượt cùng nhau trong sân.`,
        [`fun`, `social`],
        [`entertainment`, `outdoor`],
        [`vận động`],
        5e4,
        9e4,
        75,
        `sân trượt patin`,
      ],
    ],
    So = (e) => go.find((t) => t.id === e),
    Co = (typeof window !== `undefined` && Array.isArray(window.WT_VENUES) && window.WT_VENUES.length
      ? window.WT_VENUES
      : xo.map(([e, t, n, r, i, a, o, s, c, l, u, d, f, p]) => {
      let m = So(n);
      return {
        id: e,
        name: t,
        district: n,
        category: r,
        description: o,
        moods: s,
        alsoInterests: c,
        suitability: l,
        priceMin: u,
        priceMax: d,
        durationMin: f,
        searchHint: p,
        lat: +(m.lat + i).toFixed(5),
        lng: +(m.lng + a).toFixed(5),
        openingHours: null,
        contact: null,
        website: null,
        bookingUrl: null,
        isSample: !0,
        source: null,
        checkedAt: null,
      };
    })),
    wo = (e) => Co.find((t) => t.id === e),
    To = 28,
    Eo = 0.35,
    Do = 0.4,
    Oo = 0.45,
    ko = 0.55,
    Ao = 0.3,
    jo = 240,
    Mo = (e) => Math.max(0, Math.min(1, e)),
    No = (e) => Math.round((e.priceMin + e.priceMax) / 2),
    Po = (e, t) => {
      if (t.avoidCategories.some((t) => t.category === e.category)) return !0;
      let n = Xa(
        [
          e.name,
          e.description,
          e.searchHint,
          mo(e.category),
          e.suitability.join(` `),
        ].join(` `),
      );
      return t.avoidKeywords.some((e) => n.includes(e.keyword));
    };
  function Fo(e, t = {}) {
    let n = t.destinations ?? Co,
      r = eo(e, t.sharedBudget ?? null),
      i = [...r.issues];
    if (i.some((e) => e.level === `error`))
      return { itineraries: [], profile: r, info: null, issues: i };
    let a = r.submitted,
      o = a.map((e) => e.prefs),
      s = r.budgetCap,
      c = r.window,
      l = n.filter((e) => Po(e, r)),
      u = n.filter((e) => !Po(e, r)),
      d = u.filter((e) => No(e) <= s),
      f = u.length - d.length;
    (l.length &&
      i.push({
        level: `info`,
        text: `Đã loại ${l.length} địa điểm thuộc mục nhóm muốn tránh.`,
      }),
      f > 0 &&
        i.push({
          level: `info`,
          text: `Đã loại ${f} địa điểm có chi phí trung bình vượt ngân sách ${V(s)}/người.`,
        }));
    let p = (e) => (
      i.push({ level: `error`, text: e }),
      { itineraries: [], profile: r, info: null, issues: i }
    );
    if (d.length < 2)
      return p(
        `Sau khi áp dụng ngân sách và các mục cần tránh, không còn đủ địa điểm. Hãy tăng ngân sách chung hoặc bớt mục cần tránh.`,
      );
    let m = new Map(),
      h = new Map();
    for (let e of d) {
      let t = o.map((t) => oo(e, t));
      (m.set(e.id, t), h.set(e.id, t.reduce((e, t) => e + t, 0) / t.length));
    }
    let g = d;
    if (d.length > To) {
      let e = [...d].sort(
          (e, t) => h.get(t.id) - h.get(e.id) || e.id.localeCompare(t.id),
        ),
        t = e.slice(0, 18),
        n = e
          .slice(18)
          .sort((e, t) => No(e) - No(t) || e.id.localeCompare(t.id))
          .slice(0, 10);
      g = [...t, ...n];
    }
    let _ = g.length,
      v = g.map((e) => g.map((t) => lo(e, t))),
      y = g.map((e) =>
        r.hasAreaPrefs
          ? o.filter(
              (t) => t.areas.length === 0 || t.areas.includes(e.district),
            ).length / o.length
          : 1,
      ),
      b = [],
      x = g.map((e) => e.durationMin),
      S = g.map(No),
      C = c.availableMin,
      w = (e) => {
        let t = new Map();
        for (let n of e) t.set(g[n].category, (t.get(g[n].category) ?? 0) + 1);
        if (t.size < 2 || [...t.values()].some((e) => e > 2)) return;
        let n = 0,
          i = 0;
        for (let t of e) ((n += x[t]), (i += S[t]));
        if (n > C || i > s) return;
        let a = null,
          c = 1 / 0;
        if (
          (Io(e, (e) => {
            let t = 0;
            for (let n = 1; n < e.length; n++) t += v[e[n - 1]][e[n]].km;
            t < c && ((c = t), (a = e.slice()));
          }),
          !a)
        )
          return;
        let l = a,
          u = [],
          d = 0,
          f = 0;
        for (let e = 1; e < l.length; e++) {
          let t = v[l[e - 1]][l[e]];
          (u.push(t), (d += t.minutes), (f += t.cost));
        }
        let p = n + d,
          _ = i + f;
        if (p > C || _ > s) return;
        let w = o.length,
          T = Array(w).fill(0),
          E = Array(w).fill(0),
          D = 0;
        for (let e of l) {
          let t = m.get(g[e].id);
          for (let e = 0; e < w; e++)
            ((T[e] += t[e]), (E[e] = Math.max(E[e], t[e])), (D += t[e]));
        }
        let ee = D / (l.length * w),
          te = E.filter((e) => e >= ro).length / w,
          ne = Math.min(...T.map((e) => e / l.length)),
          re = 0.5 * ee + 0.3 * te + 0.2 * ne,
          ie = u.reduce((e, t) => e + t.km, 0),
          ae = Mo(1 - ie / 14),
          oe = l.reduce((e, t) => e + y[t], 0) / l.length,
          se = r.hasAreaPrefs ? 0.65 * ae + 0.35 * oe : ae,
          ce = p / C,
          le =
            0.6 *
              !!l.some(
                (e) =>
                  g[e].category === `cafe` ||
                  g[e].category === `food` ||
                  g[e].alsoInterests.includes(`food`),
              ) +
            0.4 * (t.size / l.length),
          ue = Math.min(...l.map((e) => h.get(g[e].id)));
        b.push({
          minStop: ue,
          structure: le,
          idx: l,
          legs: u,
          cost: _,
          stay: n,
          travelMin: d,
          travelKm: ie,
          total: p,
          compat: re,
          coverage: te,
          avgAff: ee,
          fairness: ne,
          budgetScore: Mo(1 - _ / s),
          loc: se,
          timeFit: Mo(1 - Math.abs(ce - 0.8) / 0.5),
        });
      },
      T = (e, t, n, r, i) => {
        if (t.length === n) w(t.slice());
        else
          for (let a = e; a < _; a++) {
            let e = r + x[a],
              o = i + S[a];
            e > C || o > s || (t.push(a), T(a + 1, t, n, e, o), t.pop());
          }
      };
    for (let e = 2; e <= 4; e++) T(0, [], e, 0, 0);
    if (b.length === 0) {
      let e = [...d]
          .map(No)
          .sort((e, t) => e - t)
          .slice(0, 2)
          .reduce((e, t) => e + t, 0),
        t = [...d]
          .map((e) => e.durationMin)
          .sort((e, t) => e - t)
          .slice(0, 2)
          .reduce((e, t) => e + t, 0);
      return p(
        e > s
          ? `Ngân sách ${V(s)}/người thấp hơn chi phí tối thiểu ước tính của 2 điểm (~${V(e)}).`
          : t > C
            ? `Khung giờ chung ${Math.round(C)} phút ngắn hơn thời gian tối thiểu của 2 điểm (~${t} phút).`
            : `Chưa tìm được tổ hợp địa điểm vừa ngân sách, thời gian và các mục cần tránh. Hãy nới ngân sách hoặc thời lượng.`,
      );
    }
    let E = C >= jo ? 3 : 2,
      D = [
        (e) =>
          e.compat >= Oo &&
          e.total / C >= ko &&
          e.idx.length >= E &&
          e.minStop >= Ao,
        (e) => e.compat >= Eo && e.total / C >= Do,
        (e) => e.compat >= Eo,
        () => !0,
      ],
      ee = b;
    for (let e of D) {
      let t = b.filter(e);
      if (t.length >= 3) {
        ee = t;
        break;
      }
    }
    let te = {
        budget: (e) =>
          0.45 * e.budgetScore +
          0.3 * e.compat +
          0.15 * e.loc +
          0.1 * e.structure,
        preference: (e) =>
          0.6 * e.compat + 0.15 * e.loc + 0.15 * e.timeFit + 0.1 * e.structure,
        balanced: (e) =>
          0.3 * e.compat +
          0.2 * e.budgetScore +
          0.2 * e.loc +
          0.15 * e.timeFit +
          0.15 * e.structure,
      },
      ne = [`preference`, `budget`, `balanced`],
      re = [`budget`, `preference`, `balanced`],
      ie = [],
      ae = (e, t) => {
        let n = new Set(e.idx),
          r = t.idx.filter((e) => n.has(e)).length;
        return r / (n.size + t.idx.length - r);
      };
    for (let e of ne) {
      let t = [...ee].sort(
          (t, n) => te[e](n) - te[e](t) || oe(t).localeCompare(oe(n)),
        ),
        n;
      for (let e of [0.5, 0.67])
        if (((n = t.find((t) => ie.every((n) => ae(n.c, t) <= e))), n)) break;
      n && ie.push({ s: e, c: n });
    }
    function oe(e) {
      return e.idx.join(`-`);
    }
    let se = c.startMin;
    ie.sort((e, t) => re.indexOf(e.s) - re.indexOf(t.s));
    let ce = ie.map(({ s: t, c: n }) => Ro(t, n, g, m, a, r, se, e.length));
    return (
      ce.length < 2 &&
        i.push({
          level: `warn`,
          text: `Với ràng buộc hiện tại chỉ tìm được 1 phương án khác biệt. Thử nới ngân sách hoặc thời gian để có thêm lựa chọn.`,
        }),
      {
        itineraries: ce,
        profile: r,
        info: {
          budgetCap: s,
          budgetSource: r.budgetSource,
          windowStart: c.startMin,
          windowEnd: c.endMin,
          date: c.date,
          memberCount: e.length,
          inputsHash: r.inputsHash,
          generatedAt: t.now ?? Date.now(),
        },
        issues: i,
      }
    );
  }
  function Io(e, t) {
    let n = e.slice(),
      r = (e) => {
        if (e === n.length) t(n);
        else
          for (let t = e; t < n.length; t++)
            (([n[e], n[t]] = [n[t], n[e]]),
              r(e + 1),
              ([n[e], n[t]] = [n[t], n[e]]));
      };
    r(0);
  }
  var Lo = {
    cafe: `ngồi cà phê`,
    food: `ăn uống`,
    workshop: `làm workshop`,
    entertainment: `chơi giải trí`,
    outdoor: `dạo ngoài trời`,
    shopping: `dạo mua sắm`,
    culture: `ghé điểm văn hoá`,
    photo: `chụp ảnh`,
    other: `hoạt động thêm`,
  };
  function Ro(e, t, n, r, i, a, o, s) {
    let c = t.idx.map((e) => n[e]),
      l = [],
      u = o;
    c.forEach((e, n) => {
      let r = n > 0 ? t.legs[n - 1] : void 0;
      r && (u += r.minutes);
      let i = u;
      ((u += e.durationMin),
        l.push({
          destId: e.id,
          arriveMin: i,
          departMin: u,
          stayMin: e.durationMin,
          costMin: e.priceMin,
          costMid: No(e),
          costMax: e.priceMax,
          leg: r
            ? { km: r.km, minutes: r.minutes, cost: r.cost, mode: r.mode }
            : void 0,
        }));
    });
    let d = l.reduce((e, t) => e + t.costMid, 0),
      f = t.legs.reduce((e, t) => e + t.cost, 0),
      p = d + f,
      m = l.reduce((e, t) => e + t.costMax, 0) + f,
      h = i.map((e, t) => {
        let n = c.map((e) => r.get(e.id)[t]);
        return {
          memberId: e.id,
          score: n.reduce((e, t) => e + t, 0) / n.length,
          matchedStops: n.filter((e) => e >= ro).length,
        };
      }),
      g = new Map();
    c.forEach((e) =>
      e.moods.forEach((e) =>
        g.set(e, (g.get(e) ?? 0) + (a.moodCounts[e] ?? 0) + 1),
      ),
    );
    let _ = [...g.entries()]
        .sort((e, t) => t[1] - e[1] || e[0].localeCompare(t[0]))
        .slice(0, 2)
        .map((e) => e[0]),
      v = [...new Set(c.map((e) => e.district))],
      y =
        v.length === 1
          ? _o(v[0])
          : v.length === 2
            ? v.map(_o).join(` – `)
            : `nhiều khu vực`,
      b = _.length === 2 ? `${ho[_[0]]} & ${ho[_[1]].toLowerCase()}` : ho[_[0]],
      x = v.length <= 2 ? `${b} quanh ${y}` : `${b} nhiều khu vực`,
      S = c.map((e) => Lo[e.category]),
      C =
        S.length === 2
          ? `Bắt đầu với ${S[0]}, sau đó ${S[1]}.`
          : `Bắt đầu với ${S[0]}, rồi ${S.slice(1, -1).join(`, `)} và kết thúc bằng ${S[S.length - 1]}.`,
      w = a.budgetCap,
      T = c.filter(
        (e) =>
          r.get(e.id).filter((e) => e >= ro).length >= Math.ceil(i.length / 2),
      ).length,
      E = Math.round(t.coverage * i.length),
      D = Math.round((t.total / a.window.availableMin) * 100),
      ee = [
        {
          budget: `Ưu tiên chi phí thấp: ước tính ${V(p)}/người, thấp hơn ngân sách ${V(w)} khoảng ${Math.round((1 - p / w) * 100)}%.`,
          preference: `Ưu tiên điểm trùng sở thích: ${T}/${c.length} điểm hợp với ít nhất một nửa nhóm.`,
          balanced: `Cân bằng chi phí, sở thích và quãng đường: ${V(p)}/người, ${t.travelKm.toFixed(1).replace(`.`, `,`)} km di chuyển.`,
        }[e],
        `${E}/${i.length} thành viên có ít nhất một điểm đúng sở thích.`,
        t.travelMin > 0
          ? `Các điểm gần nhau: khoảng ${Math.round(t.travelMin)} phút di chuyển (ước tính), dùng ~${D}% thời gian khả dụng.`
          : `Dùng ~${D}% thời gian khả dụng.`,
      ];
    return (
      (a.avoidCategories.length || a.avoidKeywords.length) &&
        ee.push(`Không có điểm nào thuộc mục nhóm muốn tránh.`),
      {
        id: e,
        strategy: e,
        name: x,
        theme: C,
        reasons: ee,
        stops: l,
        areaLabel: y,
        totals: {
          activityPerPerson: d,
          transportPerPerson: f,
          perPerson: p,
          perPersonMax: m,
          group: p * s,
          travelMin: t.travelMin,
          travelKm: Math.round(t.travelKm * 10) / 10,
          durationMin: t.total,
        },
        compat: {
          score: Math.round(t.compat * 100),
          avgAffinity: t.avgAff,
          coverage: t.coverage,
          fairness: t.fairness,
          perMember: h,
        },
      }
    );
  }
  var zo = {
    cafe: { from: `#FFB88C`, to: `#DE6262`, Icon: Pr },
    food: { from: `#FFD86F`, to: `#FC6262`, Icon: ia },
    workshop: { from: `#A18CD1`, to: `#FBC2EB`, Icon: gi },
    entertainment: { from: `#6A11CB`, to: `#2575FC`, Icon: Jr },
    outdoor: { from: `#96E6A1`, to: `#12B3A0`, Icon: Wi },
    shopping: { from: `#F6D365`, to: `#FDA085`, Icon: Ii },
    culture: { from: `#89F7FE`, to: `#66A6FF`, Icon: ei },
    photo: { from: `#FF9A9E`, to: `#FAD0C4`, Icon: fr },
    other: { from: `#C3CFE2`, to: `#7C6CF0`, Icon: Ri },
  };
  function Bo({ category: e, className: t = ``, size: n = `md` }) {
    let { from: r, to: i, Icon: a } = zo[e],
      o = n === `sm` ? 22 : n === `lg` ? 56 : 36;
    return (0, I.jsxs)(`div`, {
      className: `relative overflow-hidden ${t}`,
      style: { background: `linear-gradient(135deg, ${r}, ${i})` },
      "aria-hidden": `true`,
      children: [
        (0, I.jsx)(`span`, {
          className: `absolute -right-4 -top-4 h-20 w-20 rounded-full bg-white/20`,
        }),
        (0, I.jsx)(`span`, {
          className: `absolute -bottom-6 left-3 h-16 w-16 rounded-full bg-white/15`,
        }),
        (0, I.jsx)(`div`, {
          className: `absolute inset-0 flex items-center justify-center text-white drop-shadow-sm`,
          children: (0, I.jsx)(a, { size: o, strokeWidth: 1.8 }),
        }),
      ],
    });
  }
  var Vo = {
    budget: { tone: `mint`, tag: `Tiết kiệm`, letter: `A` },
    preference: { tone: `brand`, tag: `Hợp gu cả nhóm`, letter: `B` },
    balanced: { tone: `lilac`, tag: `Cân bằng`, letter: `C` },
  };
  function H({ score: e, size: t = 64 }) {
    let n = (t - 8) / 2,
      r = 2 * Math.PI * n,
      i = e >= 70 ? `#12b3a0` : e >= 50 ? `#FFC83D` : `#FF5A4D`;
    return (0, I.jsxs)(`div`, {
      className: `relative shrink-0`,
      style: { width: t, height: t },
      role: `img`,
      "aria-label": `Độ hợp sở thích ${e}%`,
      children: [
        (0, I.jsxs)(`svg`, {
          width: t,
          height: t,
          className: `-rotate-90`,
          children: [
            (0, I.jsx)(`circle`, {
              cx: t / 2,
              cy: t / 2,
              r: n,
              stroke: `#ecebf5`,
              strokeWidth: `7`,
              fill: `none`,
            }),
            (0, I.jsx)(`circle`, {
              cx: t / 2,
              cy: t / 2,
              r: n,
              stroke: i,
              strokeWidth: `7`,
              fill: `none`,
              strokeLinecap: `round`,
              strokeDasharray: r,
              strokeDashoffset: r * (1 - e / 100),
              style: { transition: `stroke-dashoffset .6s` },
            }),
          ],
        }),
        (0, I.jsxs)(`span`, {
          className: `absolute inset-0 flex items-center justify-center font-extrabold ${t < 50 ? `text-[11px]` : `text-sm`}`,
          children: [e, `%`],
        }),
      ],
    });
  }
  function U({ it: e }) {
    return (0, I.jsx)(`ol`, {
      className: `relative space-y-0`,
      children: e.stops.map((e, t) => {
        let n = wo(e.destId);
        return n
          ? (0, I.jsxs)(
              `li`,
              {
                children: [
                  e.leg &&
                    (0, I.jsxs)(`div`, {
                      className: `ml-[18px] flex items-center gap-2 border-l-2 border-dashed border-ink-300 py-2.5 pl-6 text-xs text-ink-500`,
                      children: [
                        e.leg.mode === `walk`
                          ? (0, I.jsx)(Kr, { size: 14 })
                          : (0, I.jsx)(cr, { size: 14 }),
                        (0, I.jsxs)(`span`, {
                          children: [
                            e.leg.mode === `walk` ? `Đi bộ` : `Di chuyển`,
                            ` ~`,
                            e.leg.km.toString().replace(`.`, `,`),
                            ` km · ~`,
                            e.leg.minutes,
                            ` phút`,
                            e.leg.cost ? ` · ~${V(e.leg.cost)}/người` : ``,
                            ` `,
                            (0, I.jsx)(`em`, {
                              className: `not-italic text-ink-300`,
                              children: `(ước tính)`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  (0, I.jsxs)(`div`, {
                    className: `flex gap-3`,
                    children: [
                      (0, I.jsx)(`div`, {
                        className: `flex flex-col items-center`,
                        children: (0, I.jsx)(`span`, {
                          className: `flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-500 text-sm font-extrabold text-white`,
                          children: t + 1,
                        }),
                      }),
                      (0, I.jsxs)(`div`, {
                        className: `min-w-0 flex-1 pb-1`,
                        children: [
                          (0, I.jsxs)(`p`, {
                            className: `text-xs font-semibold text-brand-600`,
                            children: [
                              qa(e.arriveMin),
                              ` – `,
                              qa(e.departMin),
                              ` · `,
                              Ya(e.stayMin),
                            ],
                          }),
                          (0, I.jsx)(`p`, {
                            className: `font-bold leading-snug`,
                            children: n.name,
                          }),
                          (0, I.jsxs)(`p`, {
                            className: `text-xs text-ink-500`,
                            children: [mo(n.category), ` · `, _o(n.district)],
                          }),
                        ],
                      }),
                      (0, I.jsx)(`p`, {
                        className: `shrink-0 pt-4 text-right text-xs font-semibold text-ink-700`,
                        children:
                          e.costMax === 0 ? `Miễn phí` : `~${Ja(e.costMid)}`,
                      }),
                    ],
                  }),
                ],
              },
              e.destId,
            )
          : null;
      }),
    });
  }
  function Ho({ it: e, group: t }) {
    let _meets = WT_meets(e, t);
    return (0, I.jsxs)(`div`, {
      className: `flex flex-wrap gap-2`,
      children: [
        (0, I.jsxs)(`span`, {
          className: `inline-flex items-center rounded-full bg-mint-soft px-2.5 py-1 text-xs font-bold text-teal-800`,
          children: [`Đáp ứng `, _meets.ok, `/`, _meets.total, ` người`],
        }),
      ...e.compat.perMember.map((n) => {
        let r = t.members.findIndex((e) => e.id === n.memberId),
          i = t.members[r];
        return i
          ? (0, I.jsxs)(
              `span`,
              {
                className: `inline-flex items-center gap-1.5 rounded-full bg-ink-50 py-1 pl-1 pr-2.5 text-xs font-medium text-ink-700`,
                children: [
                  (0, I.jsx)(z, { name: i.name, index: r, size: 22 }),
                  i.name,
                  `: hợp `,
                  n.matchedStops,
                  `/`,
                  e.stops.length,
                  ` điểm`,
                  (() => {
                    let _t = WT_travel(e, i);
                    return _t ? ` · từ nơi xuất phát ~${_t.km.toString().replace(`.`, `,`)} km` : ``;
                  })(),
                ],
              },
              n.memberId,
            )
          : null;
      }),
      ],
    });
  }
  function WT_meets(e, t) {
    let n = e.compat.perMember.filter((m) => t.members.some((x) => x.id === m.memberId)),
      r = Math.ceil(e.stops.length / 2);
    return { ok: n.filter((m) => m.matchedStops >= r).length, total: n.length };
  }
  function WT_travel(e, t) {
    let n = t?.prefs?.homeArea ? So(t.prefs.homeArea) : null,
      r = e.stops[0] ? wo(e.stops[0].destId) : null;
    return n && r ? lo(n, r) : null;
  }
  function WT_fmtDate(e) {
    return e ? new Date(e).toLocaleString(`vi-VN`, { hour: `2-digit`, minute: `2-digit`, day: `2-digit`, month: `2-digit`, year: `numeric` }) : ``;
  }
  function WT_realData() {
    return typeof window !== `undefined` && Array.isArray(window.WT_VENUES) && window.WT_VENUES.length > 0;
  }
  function WT_inData(d) {
    return !WT_realData() || Co.some((v) => v.district === d.id);
  }
  function WT_staleDays(e) {
    if (!e || !e.checkedAt) return null;
    let t = new Date(e.checkedAt).getTime();
    return isNaN(t) ? null : Math.floor((Date.now() - t) / 864e5);
  }
  function WT_SrcBadge({ n: e }) {
    let d = WT_staleDays(e),
      stale = d === null ? !e.isSample : d > 30;
    return (0, I.jsxs)(I.Fragment, {
      children: [
        (0, I.jsx)(ba, { tone: `sun`, children: e.isSample ? `Dữ liệu minh hoạ` : `Dữ liệu team nhập` }),
        ` `,
        stale &&
          (0, I.jsx)(ba, {
            tone: `brand`,
            children: d === null ? `Chưa có ngày kiểm tra` : `Cần kiểm tra lại · ${d} ngày trước`,
          }),
        stale && ` `,
        (0, I.jsxs)(`span`, {
          className: `text-ink-500`,
          children: [
            `Nguồn: `,
            e.source ?? `chưa có`,
            ` · Kiểm tra lần cuối: `,
            e.checkedAt ? new Date(e.checkedAt).toLocaleDateString(`vi-VN`) : `chưa kiểm tra`,
          ],
        }),
      ],
    });
  }
  function WT_csv(e) {
    let t = (e.events ?? []).map((n) => {
        let r = e.members.find((m) => m.id === n.memberId),
          { t: i, type: a, memberId: o, ...s } = n;
        return [new Date(i).toISOString(), a, r ? r.name : o ?? ``, JSON.stringify(s)];
      }),
      n = [[`time`, `event`, `member`, `details`], ...t];
    return n.map((r) => r.map((c) => `"${String(c).replace(/"/g, `""`)}"`).join(`,`)).join(`\n`);
  }
  function WT_LogExport({ group: e, toast: t }) {
    return (0, I.jsx)(`button`, {
      type: `button`,
      className: `text-xs font-semibold text-brand-600 underline underline-offset-2`,
      onClick: () => {
        let n = new Blob([`\ufeff` + WT_csv(e)], { type: `text/csv;charset=utf-8` }),
          r = document.createElement(`a`);
        ((r.href = URL.createObjectURL(n)),
          (r.download = `weekend-ticket-${e.code}-log.csv`),
          r.click(),
          t && t(`Đã tải log thử nghiệm (CSV)`, `info`));
      },
      children: `Tải log thử nghiệm (CSV)`,
    });
  }
  function WT_VoteTools({ group: e, me: t, toast: n }) {
    let [r, i] = (0, _.useState)(Date.now()),
      [a, o] = (0, _.useState)(``);
    (0, _.useEffect)(() => {
      let m = setInterval(() => i(Date.now()), 3e4);
      return () => clearInterval(m);
    }, []);
    let s = e.members.filter((m) => !e.votes[m.id]),
      c = e.deadline,
      l = c ? c - r : 0,
      u = c && l <= 0,
      d = (m) => B.setDeadline(e.code, Date.now() + m * 36e5),
      f = c
        ? u
          ? `Đã quá hạn bình chọn`
          : `Còn ${Math.floor(l / 36e5)} giờ ${Math.floor((l % 36e5) / 6e4)} phút`
        : `Chưa đặt hạn`,
      p = () => {
        let m = s.map((x) => x.name).join(`, `),
          h = `${typeof window < `u` ? window.location.href.split(`#`)[0] : ``}#/g/${e.code}/compare`,
          g = `Nhắc nhẹ nè: ${m} ơi, vào bình chọn lịch trình nhóm "${e.name}" giúp mình nhé` + (c ? ` (hạn ${WT_fmtDate(c)})` : ``) + `. Chỉ mất ~1 phút: ${h}`;
        return { text: g, names: s.map((x) => x.id) };
      };
    return (0, I.jsxs)(`section`, {
      className: `card mb-6 p-5`,
      "aria-label": `Hạn bình chọn và nhắc nhở`,
      children: [
        (0, I.jsxs)(`div`, {
          className: `flex flex-wrap items-center justify-between gap-2`,
          children: [
            (0, I.jsx)(`h2`, { className: `text-lg font-bold`, children: `Hạn bình chọn & nhắc nhở` }),
            (0, I.jsx)(`span`, {
              className: `text-sm font-semibold ` + (u ? `text-rose-600` : `text-ink-500`),
              children: f,
            }),
          ],
        }),
        c &&
          (0, I.jsxs)(`p`, {
            className: `mt-1 text-xs text-ink-500`,
            children: [`Hạn: `, WT_fmtDate(c), ` `,
              (0, I.jsx)(`button`, {
                type: `button`,
                className: `ml-1 underline`,
                onClick: () => B.setDeadline(e.code, null),
                children: `Xoá hạn`,
              }),
            ],
          }),
        !c &&
          (0, I.jsxs)(`div`, {
            className: `mt-3 flex flex-wrap items-center gap-2`,
            children: [
              (0, I.jsx)(`span`, { className: `text-sm text-ink-500`, children: `Đặt hạn:` }),
              [[`2 giờ`, 2], [`24 giờ`, 24], [`48 giờ`, 48]].map(([m, h]) =>
                (0, I.jsx)(R, { key: m, size: `sm`, variant: `soft`, onClick: () => d(h), children: `+` + m }, m),
              ),
              (0, I.jsx)(`input`, {
                type: `datetime-local`,
                className: `input max-w-[220px]`,
                value: a,
                onChange: (m) => o(m.target.value),
                "aria-label": `Chọn hạn bình chọn`,
              }),
              (0, I.jsx)(R, {
                size: `sm`,
                disabled: !a,
                onClick: () => {
                  let m = new Date(a).getTime();
                  m > Date.now() ? (B.setDeadline(e.code, m), o(``)) : n(`Hạn phải ở tương lai`, `error`);
                },
                children: `Đặt hạn`,
              }),
            ],
          }),
        (0, I.jsx)(`div`, {
          className: `mt-4 rounded-2xl bg-ink-50 p-3 text-sm`,
          children:
            s.length === 0
              ? `Cả nhóm đã bình chọn.`
              : [
                  (0, I.jsxs)(`p`, {
                    key: `a`,
                    children: [`Chưa bình chọn (`, s.length, `): `, s.map((m) => m.name).join(`, `)],
                  }),
                  u &&
                    (0, I.jsx)(`p`, {
                      key: `b`,
                      className: `mt-1 text-xs font-semibold text-rose-600`,
                      children: `Đã quá hạn. Bạn có thể nhắc thêm hoặc chốt với số phiếu hiện có.`,
                    }),
                  (0, I.jsxs)(`div`, {
                    key: `c`,
                    className: `mt-3 flex flex-wrap gap-2`,
                    children: [
                      (0, I.jsx)(R, {
                        size: `sm`,
                        onClick: async () => {
                          let m = p();
                          try {
                            await navigator.clipboard.writeText(m.text);
                            (B.logReminder(e.code, m.names, `copy`), n(`Đã sao chép tin nhắn nhắc, dán vào nhóm chat nhé`));
                          } catch {
                            n(`Không sao chép được, hãy chép thủ công`, `error`);
                          }
                        },
                        children: `Sao chép tin nhắn nhắc`,
                      }),
                      typeof navigator < `u` &&
                        navigator.share &&
                        (0, I.jsx)(R, {
                          size: `sm`,
                          variant: `soft`,
                          onClick: async () => {
                            let m = p();
                            try {
                              (await navigator.share({ text: m.text }), B.logReminder(e.code, m.names, `share`));
                            } catch {}
                          },
                          children: `Chia sẻ lời nhắc`,
                        }),
                    ],
                  }),
                ],
        }),
        (0, I.jsxs)(`p`, {
          className: `mt-3 text-xs text-ink-500`,
          children: [
            `Đã gửi `,
            e.remindersSent ?? 0,
            ` lời nhắc. Bản prototype nhắc bằng tin nhắn dán vào nhóm chat; nhắc tự động qua email/thông báo cần backend. `,
            (0, I.jsx)(WT_LogExport, { group: e, toast: n }),
          ],
        }),
      ],
    });
  }
  function WT_RevoteTools({ group: e, toast: t }) {
    let [n, r] = (0, _.useState)(``),
      [i, a] = (0, _.useState)(``),
      o = e.itineraries,
      s = (m) => {
        let h = Vo[m.strategy];
        return `Phương án ${h.letter} · ${h.tag}`;
      };
    return (0, I.jsxs)(`section`, {
      className: `card mb-6 p-5`,
      "aria-label": `Bình chọn lại nhanh khi có biến`,
      children: [
        (0, I.jsx)(`h2`, { className: `text-lg font-bold`, children: `Có biến? Bình chọn lại nhanh` }),
        (0, I.jsx)(`p`, {
          className: `mt-1 text-sm text-ink-500`,
          children: `Nếu một phương án không còn khả thi (quán đầy, đóng cửa) hoặc có bạn rút, loại nó ra và cả nhóm bình chọn lại trên các phương án còn lại, không cần lập kế hoạch từ đầu.`,
        }),
        (0, I.jsxs)(`div`, {
          className: `mt-3 flex flex-wrap items-center gap-2`,
          children: [
            (0, I.jsxs)(`select`, {
              className: `input max-w-[260px]`,
              value: n,
              onChange: (m) => r(m.target.value),
              "aria-label": `Chọn phương án không còn khả thi`,
              children: [
                (0, I.jsx)(`option`, { value: ``, children: `Chọn phương án không còn khả thi` }),
                o.map((m) => (0, I.jsx)(`option`, { value: m.id, children: s(m) + ` – ` + m.name }, m.id)),
              ],
            }),
            (0, I.jsx)(R, {
              size: `sm`,
              variant: `soft`,
              disabled: !n || o.length < 1,
              onClick: () => {
                (B.markUnavailable(e.code, n, `full_or_closed`),
                  r(``),
                  t(o.length - 1 >= 2 ? `Đã loại phương án, cả nhóm bình chọn lại nhé` : `Chỉ còn ít phương án, hãy tạo lại gợi ý nếu cần`, `info`));
              },
              children: `Loại phương án này & mở bình chọn lại`,
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `mt-3 flex flex-wrap items-center gap-2`,
          children: [
            (0, I.jsxs)(`select`, {
              className: `input max-w-[260px]`,
              value: i,
              onChange: (m) => a(m.target.value),
              "aria-label": `Chọn bạn rút khỏi buổi đi`,
              children: [
                (0, I.jsx)(`option`, { value: ``, children: `Chọn bạn rút khỏi buổi đi` }),
                e.members.map((m) => (0, I.jsx)(`option`, { value: m.id, children: m.name }, m.id)),
              ],
            }),
            (0, I.jsx)(R, {
              size: `sm`,
              variant: `soft`,
              disabled: !i || e.members.length <= 2,
              onClick: () => {
                (B.dropMember(e.code, i), a(``), t(`Đã cập nhật nhóm. Bình chọn lại hoặc tạo lại gợi ý nếu cần`, `info`));
              },
              children: `Bạn này rút & mở bình chọn lại`,
            }),
          ],
        }),
        (e.unavailable ?? []).length > 0 &&
          (0, I.jsxs)(`p`, {
            className: `mt-3 text-xs text-ink-500`,
            children: [`Đã loại: `, e.unavailable.map((m) => m.name).join(`; `)],
          }),
      ],
    });
  }

  function Uo({ icon: e, label: t, value: n, sub: r }) {
    return (0, I.jsxs)(`div`, {
      className: `rounded-2xl bg-ink-50 p-3`,
      children: [
        (0, I.jsxs)(`p`, {
          className: `flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wide text-ink-500`,
          children: [e, t],
        }),
        (0, I.jsx)(`p`, {
          className: `mt-1 text-lg font-extrabold leading-tight`,
          children: n,
        }),
        r &&
          (0, I.jsx)(`p`, {
            className: `text-[11px] text-ink-500`,
            children: r,
          }),
      ],
    });
  }
  function Wo({ it: e, group: t, footer: n, highlight: r, defaultOpen: i }) {
    let [a, o] = (0, _.useState)(!!i),
      s = Vo[e.strategy],
      c = e.totals;
    return (0, I.jsxs)(`article`, {
      className: L(
        `card pop-in flex flex-col overflow-hidden`,
        r && `ring-2 ring-brand-500`,
      ),
      children: [
        (0, I.jsx)(`div`, {
          className: `grid grid-cols-4 gap-0.5`,
          children: e.stops.map((e) => {
            let t = wo(e.destId);
            return (0, I.jsx)(
              Bo,
              { category: t.category, className: `h-14`, size: `sm` },
              e.destId,
            );
          }),
        }),
        (0, I.jsxs)(`div`, {
          className: `flex flex-1 flex-col gap-4 p-5`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `flex items-start justify-between gap-3`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `min-w-0`,
                  children: [
                    (0, I.jsxs)(ba, {
                      tone: s.tone,
                      children: [`Phương án `, s.letter, ` · `, s.tag],
                    }),
                    (0, I.jsx)(`h3`, {
                      className: `mt-2 text-xl font-extrabold leading-tight`,
                      children: e.name,
                    }),
                    (0, I.jsx)(`p`, {
                      className: `mt-1 text-sm text-ink-500`,
                      children: e.theme,
                    }),
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  className: `text-center`,
                  children: [
                    (0, I.jsx)(H, { score: e.compat.score }),
                    (0, I.jsxs)(`p`, {
                      className: `mt-1 text-[10px] font-semibold leading-tight text-ink-500`,
                      children: [`Độ hợp`, (0, I.jsx)(`br`, {}), `sở thích`],
                    }),
                  ],
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `grid grid-cols-2 gap-2`,
              children: [
                (0, I.jsx)(Uo, {
                  icon: (0, I.jsx)(ca, { size: 12 }),
                  label: `Mỗi người`,
                  value: `~${V(c.perPerson)}`,
                  sub: `ước tính`,
                }),
                (0, I.jsx)(Uo, {
                  icon: (0, I.jsx)(na, { size: 12 }),
                  label: `Cả nhóm`,
                  value: `~${V(c.group)}`,
                  sub: `${t.members.length} người`,
                }),
                (0, I.jsx)(Uo, {
                  icon: (0, I.jsx)(Ei, { size: 12 }),
                  label: `Di chuyển`,
                  value: `${c.travelKm.toString().replace(`.`, `,`)} km`,
                  sub: `~${Math.round(c.travelMin)} phút · ~${V(c.transportPerPerson)}`,
                }),
                (0, I.jsx)(Uo, {
                  icon: (0, I.jsx)(Mr, { size: 12 }),
                  label: `Tổng thời lượng`,
                  value: Ya(c.durationMin),
                  sub: `${e.stops.length} điểm · ${qa(e.stops[0].arriveMin)}–${qa(e.stops[e.stops.length - 1].departMin)}`,
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              children: [
                (0, I.jsxs)(`p`, {
                  className: `mb-1.5 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-500`,
                  children: [
                    (0, I.jsx)(Ri, { size: 13 }),
                    ` Vì sao gợi ý phương án này`,
                  ],
                }),
                (0, I.jsx)(`ul`, {
                  className: `space-y-1 text-sm text-ink-700`,
                  children: e.reasons.map((e) =>
                    (0, I.jsxs)(
                      `li`,
                      {
                        className: `flex gap-2`,
                        children: [
                          (0, I.jsx)(`span`, {
                            className: `mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500`,
                          }),
                          e,
                        ],
                      },
                      e,
                    ),
                  ),
                }),
              ],
            }),
            (0, I.jsx)(Ho, { it: e, group: t }),
            (0, I.jsxs)(`button`, {
              type: `button`,
              className: `btn-soft btn-sm self-start`,
              "aria-expanded": a,
              onClick: () => o(!a),
              children: [
                (0, I.jsx)(ci, { size: 14 }),
                ` `,
                a ? `Ẩn chi tiết` : `Xem chi tiết lịch trình`,
                ` `,
                (0, I.jsx)(gr, {
                  size: 14,
                  className: L(`transition`, a && `rotate-180`),
                }),
              ],
            }),
            a &&
              (0, I.jsx)(`div`, {
                className: `pop-in rounded-2xl border border-ink-100 p-4`,
                children: (0, I.jsx)(U, { it: e }),
              }),
          ],
        }),
        n &&
          (0, I.jsx)(`div`, {
            className: `border-t border-ink-100 bg-ink-50/60 p-4`,
            children: n,
          }),
      ],
    });
  }
  var Go = [
    {
      key: `compat`,
      label: `Độ hợp sở thích`,
      value: (e) => `${e.compat.score}%`,
      rank: (e) => e.compat.score,
      better: `high`,
    },
    {
      key: `pp`,
      label: `Chi phí / người (ước tính)`,
      value: (e) => `~${V(e.totals.perPerson)}`,
      rank: (e) => e.totals.perPerson,
      better: `low`,
    },
    {
      key: `group`,
      label: `Chi phí cả nhóm (ước tính)`,
      value: (e) => `~${V(e.totals.group)}`,
      rank: (e) => e.totals.group,
      better: `low`,
    },
    {
      key: `stops`,
      label: `Số điểm đến`,
      value: (e) => `${e.stops.length} điểm`,
    },
    {
      key: `travel`,
      label: `Thời gian di chuyển (ước tính)`,
      value: (e) => `~${Math.round(e.totals.travelMin)} phút`,
      rank: (e) => e.totals.travelMin,
      better: `low`,
    },
    {
      key: `dur`,
      label: `Tổng thời lượng`,
      value: (e) => Ya(e.totals.durationMin),
    },
    {
      key: `dist`,
      label: `Quãng đường (ước tính)`,
      value: (e) => `${e.totals.travelKm.toString().replace(`.`, `,`)} km`,
      rank: (e) => e.totals.travelKm,
      better: `low`,
    },
    { key: `area`, label: `Khu vực`, value: (e) => e.areaLabel },
    {
      key: `acts`,
      label: `Hoạt động chính`,
      value: (e) => e.stops.map((e) => mo(wo(e.destId).category)).join(` → `),
    },
  ];
  function Ko(e, t) {
    if (!t.rank || e.length < 2) return new Set();
    let n = e.map((e) => t.rank(e)),
      r = t.better === `low` ? Math.min(...n) : Math.max(...n);
    return n.every((e) => e === r)
      ? new Set()
      : new Set(e.filter((e) => t.rank(e) === r).map((e) => e.id));
  }
  function qo(e) {
    let t = B.getGroup(e)
      ?.members.map((e) => e.prefs?.date)
      .filter(Boolean);
    return t && t.length
      ? t.sort(
          (e, n) =>
            t.filter((e) => e === n).length - t.filter((t) => t === e).length,
        )[0]
      : Va(6);
  }
  function Jo(e) {
    let t = qo(e);
    B.addDemoMembers(
      e,
      Ga(t).filter((e) => e.name !== `Vy`),
    );
  }
  function Yo() {
    let e = Va(6),
      { group: t, memberId: n } = B.createGroup(
        `Hội bạn cuối tuần (demo)`,
        `Vy`,
      );
    return (B.savePrefs(t.code, n, Wa(e).Vy), Jo(t.code), t.code);
  }
  var Xo = [
      {
        icon: ea,
        title: `Tạo nhóm`,
        text: `Đặt tên nhóm, lấy link mời và gửi vào Messenger hay Zalo của hội.`,
      },
      {
        icon: Or,
        title: `Mỗi người điền sở thích`,
        text: `Ai cũng tự điền mood, ngân sách, thời gian rảnh và điều muốn tránh.`,
      },
      {
        icon: Ri,
        title: `Nhận 2–3 lịch trình`,
        text: `Hệ thống cân đối cả nhóm để đưa ra các phương án khác nhau.`,
      },
      {
        icon: oa,
        title: `So sánh và bình chọn`,
        text: `Xem song song, mỗi bạn một phiếu, phương án nhiều phiếu nhất dẫn đầu.`,
      },
      {
        icon: Hi,
        title: `Lịch trình sẵn sàng`,
        text: `Lịch giờ giấc, chi phí, bản đồ tuyến và link chỉ đường, xem tốt trên điện thoại.`,
      },
    ],
    Zo = [
      {
        icon: Ar,
        tone: `bg-brand-50 text-brand-600`,
        title: `Tiết kiệm thời gian`,
        text: `Thay vì lướt nhiều app và nhắn qua lại hàng chục tin, cả nhóm chỉ cần điền một biểu mẫu ngắn.`,
      },
      {
        icon: na,
        tone: `bg-lilac-soft text-lilac`,
        title: `Hợp gu cả nhóm`,
        text: `Gom sở thích và mood của mọi người, ưu tiên điểm nhiều bạn cùng thích, tránh điều ai đó không muốn.`,
      },
      {
        icon: ca,
        tone: `bg-mint-soft text-mint`,
        title: `Ngân sách theo từng người`,
        text: `Mặc định theo mức tối đa thấp nhất của cả nhóm để không ai phải gồng.`,
      },
      {
        icon: ui,
        tone: `bg-sun-soft text-amber-600`,
        title: `Điểm đến gần nhau`,
        text: `Sắp xếp thứ tự ghé thăm hợp lý, ước tính thời gian và tiền đi lại giữa các điểm.`,
      },
      {
        icon: Oi,
        tone: `bg-sky-soft text-sky-600`,
        title: `Thống nhất công bằng`,
        text: `Mỗi người một phiếu. Không mặc định phương án đầu tiên là câu trả lời cuối cùng.`,
      },
      {
        icon: Pi,
        tone: `bg-ink-100 text-ink-700`,
        title: `Miễn phí và minh bạch`,
        text: `Không thu phí, không bán tour, không đặt chỗ thay bạn. Có lý do cho từng gợi ý.`,
      },
    ];
  function Qo() {
    let e = _t(),
      t = (0, _.useMemo)(() => {
        let e = Fo(Ga(Va(6)));
        return (
          e.itineraries.find((e) => e.strategy === `balanced`) ??
          e.itineraries[0]
        );
      }, []),
      n = () => e(`/g/${Yo()}/recommend`);
    return (0, I.jsxs)(I.Fragment, {
      children: [
        (0, I.jsxs)(`section`, {
          className: `relative overflow-hidden`,
          children: [
            (0, I.jsx)(`div`, {
              className: `pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sun/30 blur-3xl`,
            }),
            (0, I.jsx)(`div`, {
              className: `pointer-events-none absolute -right-24 top-10 h-96 w-96 rounded-full bg-brand-200/50 blur-3xl`,
            }),
            (0, I.jsxs)(`div`, {
              className: `relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-10 md:grid-cols-[1.05fr_0.95fr] md:px-6 md:pb-24 md:pt-16`,
              children: [
                (0, I.jsxs)(`div`, {
                  children: [
                    (0, I.jsx)(ba, {
                      tone: `sun`,
                      children: `🎓 Dành cho hội bạn sinh viên ở TP.HCM`,
                    }),
                    (0, I.jsxs)(`h1`, {
                      className: `mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl`,
                      children: [
                        `Đi chơi cùng hội bạn, `,
                        (0, I.jsxs)(`span`, {
                          className: `relative whitespace-nowrap text-brand-500`,
                          children: [
                            `lên kế hoạch dễ hơn.`,
                            (0, I.jsx)(`svg`, {
                              className: `absolute -bottom-2 left-0 w-full`,
                              viewBox: `0 0 300 12`,
                              fill: `none`,
                              "aria-hidden": `true`,
                              children: (0, I.jsx)(`path`, {
                                d: `M2 8c60-8 120-8 296-2`,
                                stroke: `#FFC83D`,
                                strokeWidth: `5`,
                                strokeLinecap: `round`,
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsx)(`p`, {
                      className: `mt-6 max-w-xl text-base text-ink-700 md:text-lg`,
                      children: `Chỉ cần cả nhóm cùng chia sẻ sở thích, ngân sách và thời gian. WEEKEND TICKET sẽ gợi ý những lịch trình phù hợp để mọi người dễ dàng thống nhất.`,
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `mt-8 flex flex-col gap-3 sm:flex-row`,
                      children: [
                        (0, I.jsxs)(M, {
                          to: `/start`,
                          className: `btn-primary btn-lg`,
                          children: [
                            `Lên kế hoạch ngay `,
                            (0, I.jsx)(ir, { size: 18 }),
                          ],
                        }),
                        (0, I.jsx)(M, {
                          to: `/start?tab=join`,
                          className: `btn-soft btn-lg`,
                          children: `Tham gia nhóm`,
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`button`, {
                      onClick: n,
                      className: `mt-4 inline-flex items-center gap-2 text-sm font-semibold text-ink-700 underline decoration-brand-400 decoration-2 underline-offset-4 hover:text-brand-600`,
                      children: [
                        (0, I.jsx)(Wr, { size: 16 }),
                        ` Xem thử ngay với nhóm 4 bạn mẫu`,
                      ],
                    }),
                    (0, I.jsx)(`ul`, {
                      className: `mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-500`,
                      children: [
                        `Miễn phí`,
                        `Không cần tài khoản`,
                        `Không bán tour`,
                      ].map((e) =>
                        (0, I.jsxs)(
                          `li`,
                          {
                            className: `flex items-center gap-1.5`,
                            children: [
                              (0, I.jsx)(mr, {
                                size: 16,
                                className: `text-mint`,
                              }),
                              e,
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  className: `relative mx-auto w-full max-w-sm`,
                  "aria-hidden": `true`,
                  children: [
                    (0, I.jsxs)(`div`, {
                      className: `floaty absolute -left-4 top-10 z-10 hidden rounded-2xl bg-white p-3 shadow-soft sm:block`,
                      style: { "--r": `-4deg` },
                      children: [
                        (0, I.jsx)(`p`, {
                          className: `text-[11px] font-semibold text-ink-500`,
                          children: `Đã gửi sở thích`,
                        }),
                        (0, I.jsxs)(`div`, {
                          className: `mt-1 flex items-center gap-1`,
                          children: [
                            (0, I.jsx)(z, {
                              name: `Vy`,
                              index: 0,
                              size: 26,
                              ring: !0,
                            }),
                            (0, I.jsx)(z, {
                              name: `Minh`,
                              index: 1,
                              size: 26,
                              ring: !0,
                            }),
                            (0, I.jsx)(z, {
                              name: `Lan`,
                              index: 2,
                              size: 26,
                              ring: !0,
                            }),
                            (0, I.jsx)(z, {
                              name: `Huy`,
                              index: 3,
                              size: 26,
                              ring: !0,
                            }),
                            (0, I.jsx)(`span`, {
                              className: `ml-1 text-sm font-extrabold`,
                              children: `4/4`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `floaty absolute -right-3 bottom-24 z-10 hidden rounded-2xl bg-ink-900 px-4 py-3 text-white shadow-soft sm:block`,
                      style: { "--r": `3deg`, animationDelay: `1.2s` },
                      children: [
                        (0, I.jsx)(`p`, {
                          className: `text-[11px] text-ink-300`,
                          children: `Ngân sách chung`,
                        }),
                        (0, I.jsxs)(`p`, {
                          className: `text-lg font-extrabold`,
                          children: [
                            `≤ 200.000đ`,
                            (0, I.jsx)(`span`, {
                              className: `text-xs font-medium text-ink-300`,
                              children: `/người`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `rounded-[2.5rem] border-[10px] border-ink-900 bg-cream p-3 shadow-pop`,
                      children: [
                        (0, I.jsx)(`div`, {
                          className: `mx-auto mb-3 h-1.5 w-16 rounded-full bg-ink-900/80`,
                        }),
                        (0, I.jsx)(`p`, {
                          className: `px-1 text-xs font-semibold text-ink-500`,
                          children: `Hội bạn cuối tuần`,
                        }),
                        (0, I.jsx)(`p`, {
                          className: `px-1 text-lg font-extrabold`,
                          children: `So sánh & bình chọn`,
                        }),
                        (0, I.jsx)(`div`, {
                          className: `mt-3 space-y-2.5`,
                          children: [
                            {
                              l: `A`,
                              n: `Tiết kiệm`,
                              c: `~88k`,
                              v: 1,
                              s: 72,
                              t: `bg-mint-soft text-teal-800`,
                            },
                            {
                              l: `B`,
                              n: `Hợp gu cả nhóm`,
                              c: `~123k`,
                              v: 3,
                              s: 76,
                              t: `bg-brand-100 text-brand-700`,
                            },
                            {
                              l: `C`,
                              n: `Cân bằng`,
                              c: `~98k`,
                              v: 0,
                              s: 73,
                              t: `bg-lilac-soft text-indigo-700`,
                            },
                          ].map((e) =>
                            (0, I.jsxs)(
                              `div`,
                              {
                                className: `rounded-2xl bg-white p-3 shadow-sm ${e.v === 3 ? `ring-2 ring-brand-500` : ``}`,
                                children: [
                                  (0, I.jsxs)(`div`, {
                                    className: `flex items-center justify-between`,
                                    children: [
                                      (0, I.jsxs)(`span`, {
                                        className: `rounded-full px-2 py-0.5 text-[11px] font-bold ${e.t}`,
                                        children: [
                                          `Phương án `,
                                          e.l,
                                          ` · `,
                                          e.n,
                                        ],
                                      }),
                                      (0, I.jsxs)(`span`, {
                                        className: `text-xs font-bold`,
                                        children: [e.s, `%`],
                                      }),
                                    ],
                                  }),
                                  (0, I.jsxs)(`div`, {
                                    className: `mt-2 flex items-center justify-between text-xs text-ink-500`,
                                    children: [
                                      (0, I.jsxs)(`span`, {
                                        children: [e.c, ` / người`],
                                      }),
                                      (0, I.jsxs)(`span`, {
                                        className: `font-semibold text-ink-900`,
                                        children: [e.v, ` phiếu`],
                                      }),
                                    ],
                                  }),
                                  (0, I.jsx)(`div`, {
                                    className: `mt-1.5 h-1.5 overflow-hidden rounded-full bg-ink-100`,
                                    children: (0, I.jsx)(`div`, {
                                      className: `h-full rounded-full bg-brand-500`,
                                      style: { width: `${e.v * 33}%` },
                                    }),
                                  }),
                                ],
                              },
                              e.l,
                            ),
                          ),
                        }),
                        (0, I.jsx)(`div`, {
                          className: `mt-3 rounded-full bg-brand-500 py-2.5 text-center text-sm font-bold text-white`,
                          children: `Chốt phương án B`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`section`, {
          id: `how`,
          className: `mx-auto max-w-6xl scroll-mt-20 px-4 py-14 md:px-6 md:py-20`,
          children: [
            (0, I.jsx)(Sa, {
              eyebrow: `Cách hoạt động`,
              title: `5 bước từ “đi đâu giờ ta?” đến “chốt kèo!”`,
              center: !0,
            }),
            (0, I.jsx)(`ol`, {
              className: `grid gap-4 md:grid-cols-5`,
              children: Xo.map((e, t) =>
                (0, I.jsxs)(
                  `li`,
                  {
                    className: `card relative p-5`,
                    children: [
                      (0, I.jsx)(`span`, {
                        className: `absolute right-4 top-3 text-5xl font-extrabold text-ink-100`,
                        children: t + 1,
                      }),
                      (0, I.jsx)(`div`, {
                        className: `relative flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-500 text-white`,
                        children: (0, I.jsx)(e.icon, { size: 22 }),
                      }),
                      (0, I.jsx)(`h3`, {
                        className: `relative mt-4 font-bold`,
                        children: e.title,
                      }),
                      (0, I.jsx)(`p`, {
                        className: `relative mt-1 text-sm text-ink-500`,
                        children: e.text,
                      }),
                    ],
                  },
                  e.title,
                ),
              ),
            }),
          ],
        }),
        (0, I.jsx)(`section`, {
          id: `why`,
          className: `scroll-mt-20 bg-white py-14 md:py-20`,
          children: (0, I.jsxs)(`div`, {
            className: `mx-auto max-w-6xl px-4 md:px-6`,
            children: [
              (0, I.jsx)(Sa, {
                eyebrow: `Điểm khác biệt`,
                title: `Không chỉ gợi ý địa điểm. Chúng mình giúp cả nhóm đồng thuận.`,
                sub: `Tối ưu theo nhóm: ngân sách chung, sở thích chung và vị trí địa lý trong cùng một lịch trình.`,
                center: !0,
              }),
              (0, I.jsx)(`div`, {
                className: `grid gap-4 sm:grid-cols-2 lg:grid-cols-3`,
                children: Zo.map((e) =>
                  (0, I.jsxs)(
                    `div`,
                    {
                      className: `rounded-3xl border border-ink-100 bg-cream p-6`,
                      children: [
                        (0, I.jsx)(`div`, {
                          className: `flex h-12 w-12 items-center justify-center rounded-2xl ${e.tone}`,
                          children: (0, I.jsx)(e.icon, { size: 22 }),
                        }),
                        (0, I.jsx)(`h3`, {
                          className: `mt-4 text-lg font-bold`,
                          children: e.title,
                        }),
                        (0, I.jsx)(`p`, {
                          className: `mt-1 text-sm text-ink-500`,
                          children: e.text,
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
            ],
          }),
        }),
        t &&
          (0, I.jsxs)(`section`, {
            id: `sample`,
            className: `mx-auto max-w-6xl scroll-mt-20 px-4 py-14 md:px-6 md:py-20`,
            children: [
              (0, I.jsx)(Sa, {
                eyebrow: `Lịch trình mẫu`,
                title: `Một buổi chiều thứ 7 cho 4 bạn, tối đa 200k/người`,
                sub: `Được tạo trực tiếp bởi bộ gợi ý từ nhóm demo (4 bạn có ngân sách và sở thích khác nhau, có người muốn tránh mua sắm và karaoke).`,
              }),
              (0, I.jsxs)(`div`, {
                className: `grid gap-6 md:grid-cols-[1fr_1.1fr]`,
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `card p-6`,
                    children: [
                      (0, I.jsxs)(`div`, {
                        className: `flex items-start justify-between gap-3`,
                        children: [
                          (0, I.jsxs)(`div`, {
                            children: [
                              (0, I.jsx)(ba, {
                                tone: `lilac`,
                                children: `Phương án C · Cân bằng`,
                              }),
                              (0, I.jsx)(`h3`, {
                                className: `mt-2 text-xl font-extrabold`,
                                children: t.name,
                              }),
                              (0, I.jsx)(`p`, {
                                className: `mt-1 text-sm text-ink-500`,
                                children: t.theme,
                              }),
                            ],
                          }),
                          (0, I.jsx)(H, { score: t.compat.score }),
                        ],
                      }),
                      (0, I.jsxs)(`div`, {
                        className: `mt-5 grid grid-cols-3 gap-2 text-center`,
                        children: [
                          (0, I.jsxs)(`div`, {
                            className: `rounded-2xl bg-ink-50 p-3`,
                            children: [
                              (0, I.jsx)(`p`, {
                                className: `text-xs text-ink-500`,
                                children: `Mỗi người`,
                              }),
                              (0, I.jsxs)(`p`, {
                                className: `font-extrabold`,
                                children: [`~`, V(t.totals.perPerson)],
                              }),
                            ],
                          }),
                          (0, I.jsxs)(`div`, {
                            className: `rounded-2xl bg-ink-50 p-3`,
                            children: [
                              (0, I.jsx)(`p`, {
                                className: `text-xs text-ink-500`,
                                children: `Cả nhóm (4)`,
                              }),
                              (0, I.jsxs)(`p`, {
                                className: `font-extrabold`,
                                children: [`~`, V(t.totals.group)],
                              }),
                            ],
                          }),
                          (0, I.jsxs)(`div`, {
                            className: `rounded-2xl bg-ink-50 p-3`,
                            children: [
                              (0, I.jsx)(`p`, {
                                className: `text-xs text-ink-500`,
                                children: `Di chuyển`,
                              }),
                              (0, I.jsxs)(`p`, {
                                className: `font-extrabold`,
                                children: [
                                  `~`,
                                  Math.round(t.totals.travelMin),
                                  ` phút`,
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, I.jsx)(`div`, {
                        className: `mt-5`,
                        children: (0, I.jsx)(U, { it: t }),
                      }),
                      (0, I.jsx)(`p`, {
                        className: `mt-4 text-xs text-ink-500`,
                        children: WT_realData() ? `Địa điểm và giá do team nhập (xem nguồn và ngày kiểm tra trên từng điểm); khoảng cách là ước tính.` : `Địa điểm, giá và khoảng cách là dữ liệu minh hoạ/ước tính, chưa xác minh.`,
                      }),
                    ],
                  }),
                  (0, I.jsxs)(`div`, {
                    className: `flex flex-col justify-between gap-4`,
                    children: [
                      (0, I.jsx)(`div`, {
                        className: `grid grid-cols-3 gap-3`,
                        children: t.stops.map((e) => {
                          let t = wo(e.destId);
                          return (0, I.jsxs)(
                            `div`,
                            {
                              className: `card overflow-hidden`,
                              children: [
                                (0, I.jsx)(Bo, {
                                  category: t.category,
                                  className: `h-28`,
                                }),
                                (0, I.jsx)(`p`, {
                                  className: `p-3 text-xs font-semibold leading-snug`,
                                  children: t.name,
                                }),
                              ],
                            },
                            e.destId,
                          );
                        }),
                      }),
                      (0, I.jsxs)(`div`, {
                        className: `card flex items-start gap-4 bg-ink-900 p-6 text-white`,
                        children: [
                          (0, I.jsx)(Ei, {
                            className: `mt-1 shrink-0 text-sun`,
                          }),
                          (0, I.jsxs)(`div`, {
                            children: [
                              (0, I.jsx)(`p`, {
                                className: `font-bold`,
                                children: `Thử với nhóm của bạn`,
                              }),
                              (0, I.jsx)(`p`, {
                                className: `mt-1 text-sm text-ink-300`,
                                children: `Mất khoảng 2 phút để mỗi người điền xong. Bạn cũng có thể thử một mình với nhóm bạn mẫu để xem toàn bộ luồng.`,
                              }),
                              (0, I.jsxs)(`div`, {
                                className: `mt-4 flex flex-wrap gap-3`,
                                children: [
                                  (0, I.jsx)(M, {
                                    to: `/start`,
                                    className: `btn-primary btn-sm`,
                                    children: `Tạo nhóm của tôi`,
                                  }),
                                  (0, I.jsx)(`button`, {
                                    onClick: n,
                                    className: `btn-soft btn-sm`,
                                    children: `Dùng nhóm mẫu`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        (0, I.jsx)(`section`, {
          className: `mx-auto max-w-6xl px-4 md:px-6`,
          children: (0, I.jsxs)(`div`, {
            className: `relative overflow-hidden rounded-[2rem] bg-brand-500 px-6 py-12 text-center text-white md:py-16`,
            children: [
              (0, I.jsx)(`div`, {
                className: `pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-white/15`,
              }),
              (0, I.jsx)(`div`, {
                className: `pointer-events-none absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-sun/40`,
              }),
              (0, I.jsx)(`h2`, {
                className: `relative text-3xl font-extrabold md:text-4xl`,
                children: `Cuối tuần này, đừng để nhóm chat im lặng.`,
              }),
              (0, I.jsx)(`p`, {
                className: `relative mx-auto mt-3 max-w-xl text-white/90`,
                children: `Tạo nhóm, gửi link, và để mọi người cùng góp ý trong vài phút.`,
              }),
              (0, I.jsxs)(M, {
                to: `/start`,
                className: `btn relative mt-7 bg-white !text-brand-600 shadow-lg hover:bg-cream btn-lg`,
                children: [`Lên kế hoạch ngay `, (0, I.jsx)(ir, { size: 18 })],
              }),
            ],
          }),
        }),
      ],
    });
  }
  function $o() {
    let [e, t] = In(),
      n = e.get(`tab`) === `join` ? `join` : `create`,
      r = _t(),
      i = Na(),
      [a, o] = (0, _.useState)(``),
      [s, c] = (0, _.useState)(``),
      [l, u] = (0, _.useState)({}),
      [d, f] = (0, _.useState)(!1),
      [p, m] = (0, _.useState)(``),
      [h, g] = (0, _.useState)(null);
    return (0, I.jsxs)(`div`, {
      className: `mx-auto max-w-5xl px-4 py-10 md:px-6 md:py-14`,
      children: [
        (0, I.jsxs)(`div`, {
          className: `mb-8 text-center`,
          children: [
            (0, I.jsx)(`p`, {
              className: `mb-2 text-xs font-bold uppercase tracking-widest text-brand-600`,
              children: `Bước 1 / 5`,
            }),
            (0, I.jsx)(`h1`, {
              className: `text-3xl font-extrabold tracking-tight md:text-4xl`,
              children: `Bắt đầu cùng hội bạn`,
            }),
            (0, I.jsx)(`p`, {
              className: `mt-2 text-ink-500`,
              children: `Không cần đăng ký tài khoản. Chỉ cần một cái tên để mọi người nhận ra bạn.`,
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `grid gap-6 md:grid-cols-[1.2fr_1fr]`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `card p-5 md:p-7`,
              children: [
                (0, I.jsx)(`div`, {
                  role: `tablist`,
                  className: `mb-6 grid grid-cols-2 gap-1 rounded-full bg-ink-100 p-1`,
                  children: [
                    [`create`, `Tạo nhóm mới`, br],
                    [`join`, `Tham gia nhóm`, Qr],
                  ].map(([e, r, i]) =>
                    (0, I.jsxs)(
                      `button`,
                      {
                        role: `tab`,
                        "aria-selected": n === e,
                        onClick: () => t(e === `join` ? { tab: `join` } : {}),
                        className: L(
                          `flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition`,
                          n === e
                            ? `bg-white shadow-sm`
                            : `text-ink-500 hover:text-ink-900`,
                        ),
                        children: [(0, I.jsx)(i, { size: 16 }), r],
                      },
                      e,
                    ),
                  ),
                }),
                n === `create`
                  ? (0, I.jsxs)(`form`, {
                      onSubmit: (e) => {
                        e.preventDefault();
                        let t = {};
                        if (
                          (a.trim().length < 2 &&
                            (t.g = `Đặt tên nhóm ít nhất 2 ký tự nhé.`),
                          a.trim().length > 40 &&
                            (t.g = `Tên nhóm tối đa 40 ký tự.`),
                          s.trim().length < 1 &&
                            (t.c = `Bạn tên gì để mọi người nhận ra nhỉ?`),
                          s.trim().length > 24 &&
                            (t.c = `Tên hiển thị tối đa 24 ký tự.`),
                          u(t),
                          Object.keys(t).length)
                        )
                          return;
                        f(!0);
                        let { group: n } = B.createGroup(a, s);
                        r(`/g/${n.code}`);
                      },
                      className: `space-y-5`,
                      noValidate: !0,
                      children: [
                        (0, I.jsx)(ga, {
                          label: `Tên nhóm`,
                          htmlFor: `gname`,
                          error: l.g,
                          hint: `Ví dụ: Hội thích cà phê, Team cuối tuần`,
                          children: (0, I.jsx)(`input`, {
                            id: `gname`,
                            className: `input`,
                            value: a,
                            onChange: (e) => o(e.target.value),
                            placeholder: `Hội bạn cuối tuần`,
                            maxLength: 50,
                            autoComplete: `off`,
                          }),
                        }),
                        (0, I.jsx)(ga, {
                          label: `Tên hiển thị của bạn`,
                          htmlFor: `cname`,
                          error: l.c,
                          hint: `Bạn sẽ là người tạo nhóm. Các bạn khác sẽ tự điền sở thích của họ.`,
                          children: (0, I.jsx)(`input`, {
                            id: `cname`,
                            className: `input`,
                            value: s,
                            onChange: (e) => c(e.target.value),
                            placeholder: `Ví dụ: Vy`,
                            maxLength: 30,
                            autoComplete: `given-name`,
                          }),
                        }),
                        (0, I.jsxs)(R, {
                          type: `submit`,
                          size: `lg`,
                          className: `w-full`,
                          loading: d,
                          children: [
                            `Tạo nhóm và lấy link mời `,
                            (0, I.jsx)(ir, { size: 18 }),
                          ],
                        }),
                      ],
                    })
                  : (0, I.jsxs)(`form`, {
                      onSubmit: (e) => {
                        e.preventDefault();
                        let t = Oa(p);
                        t.length < 4
                          ? g(`Mã nhóm gồm 6 ký tự, ví dụ WT-AB12CD.`)
                          : B.getGroup(t)
                            ? r(`/join/${t}`)
                            : g(
                                `Không tìm thấy nhóm này trên trình duyệt hiện tại. Bản demo chỉ lưu nhóm trong trình duyệt tạo ra nó.`,
                              );
                      },
                      className: `space-y-5`,
                      noValidate: !0,
                      children: [
                        (0, I.jsx)(ga, {
                          label: `Mã nhóm hoặc link mời`,
                          htmlFor: `gcode`,
                          error: h,
                          hint: `Dán link mời bạn bè gửi, hoặc nhập mã dạng WT-AB12CD.`,
                          children: (0, I.jsx)(`input`, {
                            id: `gcode`,
                            className: `input font-mono uppercase`,
                            value: p,
                            onChange: (e) => {
                              (m(e.target.value), g(null));
                            },
                            placeholder: `WT-AB12CD`,
                            autoComplete: `off`,
                          }),
                        }),
                        (0, I.jsxs)(R, {
                          type: `submit`,
                          size: `lg`,
                          className: `w-full`,
                          children: [`Tiếp tục `, (0, I.jsx)(ir, { size: 18 })],
                        }),
                        (0, I.jsx)(_a, {
                          kind: `info`,
                          title: `Về bản demo`,
                          children: `Dữ liệu nhóm lưu ngay trong trình duyệt này (localStorage). Muốn mời bạn ở thiết bị khác tham gia thật sự cần backend, sẽ được bổ sung ở phiên bản sau.`,
                        }),
                      ],
                    }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `space-y-4`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `card bg-ink-900 p-6 text-white`,
                  children: [
                    (0, I.jsx)(Wr, { className: `text-sun` }),
                    (0, I.jsx)(`h2`, {
                      className: `mt-3 text-lg font-bold`,
                      children: `Chỉ muốn xem thử?`,
                    }),
                    (0, I.jsx)(`p`, {
                      className: `mt-1 text-sm text-ink-300`,
                      children: `Tạo ngay một nhóm 4 bạn mẫu (Vy, Minh, Lan, Huy) đã điền sở thích để xem gợi ý, bình chọn và lịch trình.`,
                    }),
                    (0, I.jsxs)(R, {
                      className: `mt-4`,
                      onClick: () => r(`/g/${Yo()}/recommend`),
                      children: [
                        `Dùng nhóm mẫu `,
                        (0, I.jsx)(ir, { size: 16 }),
                      ],
                    }),
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  className: `card p-6`,
                  children: [
                    (0, I.jsxs)(`h2`, {
                      className: `flex items-center gap-2 text-lg font-bold`,
                      children: [
                        (0, I.jsx)(na, {
                          size: 18,
                          className: `text-brand-500`,
                        }),
                        ` Nhóm gần đây`,
                      ],
                    }),
                    i.length === 0
                      ? (0, I.jsx)(`p`, {
                          className: `mt-2 text-sm text-ink-500`,
                          children: `Chưa có nhóm nào trên trình duyệt này. Các nhóm bạn tạo hoặc tham gia sẽ hiện ở đây.`,
                        })
                      : (0, I.jsx)(`ul`, {
                          className: `mt-3 space-y-2`,
                          children: i
                            .slice(0, 5)
                            .map((e) =>
                              (0, I.jsx)(
                                `li`,
                                {
                                  children: (0, I.jsxs)(M, {
                                    to: `/g/${e.code}`,
                                    className: `flex items-center justify-between gap-3 rounded-2xl border border-ink-100 px-4 py-3 hover:bg-ink-50`,
                                    children: [
                                      (0, I.jsxs)(`span`, {
                                        className: `min-w-0`,
                                        children: [
                                          (0, I.jsx)(`span`, {
                                            className: `block truncate font-semibold`,
                                            children: e.name,
                                          }),
                                          (0, I.jsxs)(`span`, {
                                            className: `text-xs text-ink-500`,
                                            children: [
                                              e.members.length,
                                              ` thành viên · `,
                                              ka(e.code),
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, I.jsx)(ir, {
                                        size: 16,
                                        className: `shrink-0 text-ink-300`,
                                      }),
                                    ],
                                  }),
                                },
                                e.code,
                              ),
                            ),
                        }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function es() {
    let { code: e = `` } = yt(),
      { group: t, me: n } = Ma(e),
      r = _t(),
      [i, a] = (0, _.useState)(``),
      [o, s] = (0, _.useState)(null);
    if (!t)
      return (0, I.jsx)(`div`, {
        className: `px-4 py-20`,
        children: (0, I.jsx)(xa, {
          icon: (0, I.jsx)(Ai, { size: 32 }),
          title: `Chưa tìm thấy nhóm này`,
          action: (0, I.jsxs)(I.Fragment, {
            children: [
              (0, I.jsx)(M, {
                to: `/start?tab=join`,
                className: `btn-primary`,
                children: `Nhập mã khác`,
              }),
              (0, I.jsx)(M, {
                to: `/start`,
                className: `btn-soft`,
                children: `Tạo nhóm mới`,
              }),
            ],
          }),
          children: `Bản demo lưu dữ liệu trong chính trình duyệt đã tạo nhóm, nên link mời này chưa mở được nhóm trên thiết bị hiện tại. Để mời bạn ở thiết bị khác tham gia thật sự cần thêm backend (xem README).`,
        }),
      });
    let c = t.members.find((e) => e.id === t.creatorId),
      l = (e) => {
        e.preventDefault();
        let n = i.trim();
        if (!n) s(`Hãy nhập tên để mọi người nhận ra bạn.`);
        else if (n.length > 24) s(`Tên hiển thị tối đa 24 ký tự.`);
        else
          try {
            (B.joinGroup(t.code, n), r(`/g/${t.code}/prefs`));
          } catch (e) {
            s(e instanceof wa ? e.message : `Chưa tham gia được, thử lại nhé.`);
          }
      },
      u = (e) => {
        (B.setIdentity(t.code, e), r(`/g/${t.code}`));
      };
    return (0, I.jsx)(`div`, {
      className: `mx-auto max-w-xl px-4 py-10 md:py-16`,
      children: (0, I.jsxs)(`div`, {
        className: `card p-6 text-center md:p-8`,
        children: [
          (0, I.jsx)(`p`, {
            className: `text-xs font-bold uppercase tracking-widest text-brand-600`,
            children: `Lời mời tham gia nhóm`,
          }),
          (0, I.jsx)(`h1`, {
            className: `mt-2 text-3xl font-extrabold tracking-tight`,
            children: t.name,
          }),
          (0, I.jsxs)(`p`, {
            className: `mt-1 text-sm text-ink-500`,
            children: [c?.name, ` đã mời bạn · Mã `, ka(t.code)],
          }),
          (0, I.jsx)(`div`, {
            className: `mt-4 flex justify-center -space-x-2`,
            children: t.members.map((e, t) =>
              (0, I.jsx)(
                z,
                { name: e.name, index: t, size: 40, ring: !0 },
                e.id,
              ),
            ),
          }),
          (0, I.jsxs)(`p`, {
            className: `mt-2 text-sm text-ink-500`,
            children: [
              t.members.length,
              ` thành viên: `,
              t.members.map((e) => e.name).join(`, `),
            ],
          }),
          n &&
            (0, I.jsx)(`div`, {
              className: `mt-6`,
              children: (0, I.jsx)(_a, {
                kind: `success`,
                title: `Bạn đang là ${n.name}`,
                action: (0, I.jsx)(R, {
                  size: `sm`,
                  onClick: () => r(`/g/${t.code}`),
                  children: `Vào nhóm`,
                }),
                children: `Bạn đã tham gia nhóm này trên thiết bị này.`,
              }),
            }),
          (0, I.jsxs)(`form`, {
            onSubmit: l,
            className: `mt-6 space-y-4 text-left`,
            noValidate: !0,
            children: [
              (0, I.jsx)(ga, {
                label: `Tên hiển thị của bạn`,
                htmlFor: `jname`,
                error: o,
                hint: `Bạn sẽ tự điền sở thích ở bước tiếp theo.`,
                children: (0, I.jsx)(`input`, {
                  id: `jname`,
                  className: `input`,
                  value: i,
                  onChange: (e) => {
                    (a(e.target.value), s(null));
                  },
                  placeholder: `Ví dụ: Minh`,
                  autoComplete: `given-name`,
                  maxLength: 30,
                }),
              }),
              (0, I.jsxs)(R, {
                type: `submit`,
                size: `lg`,
                className: `w-full`,
                children: [`Tham gia nhóm `, (0, I.jsx)(ir, { size: 18 })],
              }),
            ],
          }),
          (0, I.jsxs)(`div`, {
            className: `mt-8 border-t border-ink-100 pt-5 text-left`,
            children: [
              (0, I.jsxs)(`p`, {
                className: `mb-3 flex items-center gap-2 text-sm font-semibold`,
                children: [
                  (0, I.jsx)(Ji, { size: 16, className: `text-mint` }),
                  ` Đã tham gia trước đó? Chọn tên của bạn`,
                ],
              }),
              (0, I.jsx)(`div`, {
                className: `flex flex-wrap gap-2`,
                children: t.members.map((e, t) =>
                  (0, I.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => u(e.id),
                      className: `chip`,
                      children: [
                        (0, I.jsx)(z, { name: e.name, index: t, size: 22 }),
                        e.name,
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          }),
        ],
      }),
    });
  }
  function ts(e = !0) {
    let { code: t = `` } = yt(),
      { group: n, me: r } = Ma(t);
    return n
      ? !r && e
        ? {
            status: `redirect`,
            node: (0, I.jsx)(Vt, { to: `/join/${n.code}`, replace: !0 }),
          }
        : { status: `ready`, group: n, me: r, code: n.code }
      : {
          status: `missing`,
          node: (0, I.jsx)(`div`, {
            className: `px-4 py-20`,
            children: (0, I.jsx)(xa, {
              icon: (0, I.jsx)(Ai, { size: 32 }),
              title: `Chưa tìm thấy nhóm này`,
              action: (0, I.jsxs)(I.Fragment, {
                children: [
                  (0, I.jsx)(M, {
                    to: `/start?tab=join`,
                    className: `btn-primary`,
                    children: `Nhập mã khác`,
                  }),
                  (0, I.jsx)(M, {
                    to: `/start`,
                    className: `btn-soft`,
                    children: `Tạo nhóm mới`,
                  }),
                ],
              }),
              children: `Bản demo lưu dữ liệu trên chính trình duyệt này, nên liên kết mời chỉ mở được nhóm đã tạo trên thiết bị/trình duyệt này. Đồng bộ giữa nhiều thiết bị cần thêm backend.`,
            }),
          }),
        };
  }
  async function ns(e) {
    try {
      if (navigator.clipboard && window.isSecureContext)
        return (await navigator.clipboard.writeText(e), !0);
    } catch {}
    try {
      let t = document.createElement(`textarea`);
      ((t.value = e),
        t.setAttribute(`readonly`, ``),
        (t.style.position = `fixed`),
        (t.style.opacity = `0`),
        document.body.appendChild(t),
        t.select());
      let n = document.execCommand(`copy`);
      return (document.body.removeChild(t), n);
    } catch {
      return !1;
    }
  }
  async function rs(e) {
    if (typeof navigator < `u` && `share` in navigator)
      try {
        return (await navigator.share(e), `shared`);
      } catch (e) {
        if (e?.name === `AbortError`) return `shared`;
      }
    return (await ns(`${e.text}\n${e.url}`)) ? `copied` : `failed`;
  }
  function is({ value: e, shareTitle: t, shareText: n }) {
    let [r, i] = (0, _.useState)(!1),
      a = pa();
    return (0, I.jsxs)(`div`, {
      className: `flex flex-col gap-2 sm:flex-row`,
      children: [
        (0, I.jsx)(`input`, {
          readOnly: !0,
          value: e,
          "aria-label": `Liên kết mời`,
          onFocus: (e) => e.currentTarget.select(),
          className: `input min-w-0 flex-1 bg-ink-50 font-mono text-xs`,
        }),
        (0, I.jsxs)(`div`, {
          className: `flex gap-2`,
          children: [
            (0, I.jsxs)(`button`, {
              type: `button`,
              onClick: async () => {
                (await ns(e))
                  ? (i(!0),
                    a(`Đã sao chép liên kết`),
                    setTimeout(() => i(!1), 1800))
                  : a(
                      `Không sao chép được, hãy chọn và sao chép thủ công`,
                      `error`,
                    );
              },
              className: `btn-dark flex-1 sm:flex-none`,
              children: [
                r ? (0, I.jsx)(mr, { size: 16 }) : (0, I.jsx)(Rr, { size: 16 }),
                ` `,
                r ? `Đã chép` : `Sao chép`,
              ],
            }),
            (0, I.jsxs)(`button`, {
              type: `button`,
              onClick: async () => {
                let r = await rs({
                  title: t ?? `WEEKEND TICKET`,
                  text: n ?? `Vào nhóm WEEKEND TICKET của tụi mình nhé!`,
                  url: e,
                });
                (r === `copied` && a(`Đã sao chép lời mời để bạn dán vào chat`),
                  r === `failed` &&
                    a(`Không chia sẻ được, hãy sao chép thủ công`, `error`));
              },
              className: `btn-soft flex-1 sm:flex-none`,
              children: [(0, I.jsx)(Mi, { size: 16 }), ` Chia sẻ`],
            }),
          ],
        }),
      ],
    });
  }
  function as({ group: e, me: t }) {
    let n = e.members.findIndex((e) => e.id === t?.id);
    return (0, I.jsxs)(`div`, {
      className: `no-print flex flex-wrap items-center gap-3 rounded-2xl border border-dashed border-ink-300 bg-white/70 px-4 py-3 text-sm`,
      children: [
        t
          ? (0, I.jsx)(z, { name: t.name, index: n, size: 28 })
          : (0, I.jsx)(Qi, { size: 18 }),
        (0, I.jsx)(`label`, {
          htmlFor: `acting`,
          className: `font-semibold`,
          children: `Đang dùng với tư cách`,
        }),
        (0, I.jsxs)(`select`, {
          id: `acting`,
          value: t?.id ?? ``,
          onChange: (t) => B.setIdentity(e.code, t.target.value),
          className: `rounded-full border border-ink-100 bg-white px-3 py-1.5 font-semibold`,
          children: [
            !t &&
              (0, I.jsx)(`option`, { value: ``, children: `Chọn thành viên…` }),
            e.members.map((e) =>
              (0, I.jsxs)(
                `option`,
                {
                  value: e.id,
                  children: [e.name, e.prefs ? `` : ` (chưa gửi sở thích)`],
                },
                e.id,
              ),
            ),
          ],
        }),
        (0, I.jsx)(`span`, {
          className: `text-xs text-ink-500`,
          children: `Chế độ demo: chuyển đổi để mô phỏng từng bạn trong cùng một trình duyệt.`,
        }),
      ],
    });
  }
  var os = (e) => e.members.filter((e) => e.prefs).length;
  function ss(e) {
    return e.confirmedId
      ? 5
      : e.itineraries.length > 0
        ? 4
        : os(e) >= 2
          ? 3
          : 2;
  }
  function cs() {
    let e = ts(!1),
      t = pa(),
      n = _t(),
      [r, i] = (0, _.useState)(``),
      [a, o] = (0, _.useState)(null);
    if (e.status !== `ready`)
      return (0, I.jsx)(I.Fragment, { children: e.node });
    let { group: s, me: c } = e,
      l = os(s),
      u = s.members.length,
      d = l >= 2,
      f = Pa(s.code);
    return (0, I.jsxs)(`div`, {
      className: `mx-auto max-w-5xl px-4 py-8 md:px-6 md:py-12`,
      children: [
        (0, I.jsx)(Ba, { code: s.code, current: 1, reached: ss(s) }),
        (0, I.jsxs)(`div`, {
          className: `mb-6 flex flex-wrap items-end justify-between gap-3`,
          children: [
            (0, I.jsxs)(`div`, {
              children: [
                (0, I.jsx)(`p`, {
                  className: `text-xs font-bold uppercase tracking-widest text-brand-600`,
                  children: `Nhóm của bạn`,
                }),
                (0, I.jsx)(`h1`, {
                  className: `text-3xl font-extrabold tracking-tight md:text-4xl`,
                  children: s.name,
                }),
              ],
            }),
            (0, I.jsxs)(ba, {
              tone: `ink`,
              children: [
                `Mã nhóm: `,
                (0, I.jsx)(`span`, {
                  className: `font-mono`,
                  children: ka(s.code),
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `grid gap-6 md:grid-cols-[1.15fr_1fr]`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `space-y-6`,
              children: [
                (0, I.jsxs)(`section`, {
                  className: `card p-5 md:p-6`,
                  children: [
                    (0, I.jsx)(`h2`, {
                      className: `text-lg font-bold`,
                      children: `Mời bạn bè vào nhóm`,
                    }),
                    (0, I.jsx)(`p`, {
                      className: `mb-4 mt-1 text-sm text-ink-500`,
                      children: `Gửi link này qua Messenger, Zalo hay nhóm chat. Mỗi bạn sẽ tự điền sở thích của mình, bạn không cần điền hộ ai.`,
                    }),
                    (0, I.jsx)(is, {
                      value: f,
                      shareTitle: `Vào nhóm “${s.name}” trên WEEKEND TICKET`,
                      shareText: `Vào nhóm “${s.name}” để cùng chọn lịch trình đi chơi nhé!`,
                    }),
                    (0, I.jsx)(`div`, {
                      className: `mt-4`,
                      children: (0, I.jsx)(_a, {
                        kind: `warn`,
                        title: `Đây là bản demo lưu trong trình duyệt`,
                        children: `Link mời chỉ mở được nhóm này trong trình duyệt đã tạo nhóm. Đồng bộ giữa nhiều thiết bị cần backend (Supabase hoặc tương tự), kiến trúc dữ liệu đã được tách sẵn để gắn thêm.`,
                      }),
                    }),
                  ],
                }),
                (0, I.jsxs)(`section`, {
                  className: `card p-5 md:p-6`,
                  children: [
                    (0, I.jsxs)(`div`, {
                      className: `flex items-center justify-between gap-3`,
                      children: [
                        (0, I.jsxs)(`h2`, {
                          className: `text-lg font-bold`,
                          children: [`Thành viên (`, u, `)`],
                        }),
                        (0, I.jsxs)(`span`, {
                          className: `text-sm font-semibold text-ink-500`,
                          children: [l, `/`, u, ` đã gửi sở thích`],
                        }),
                      ],
                    }),
                    (0, I.jsx)(`div`, {
                      className: `mt-3`,
                      children: (0, I.jsx)(va, {
                        value: l,
                        max: u,
                        tone: `mint`,
                      }),
                    }),
                    (0, I.jsx)(`ul`, {
                      className: `mt-4 divide-y divide-ink-100`,
                      children: s.members.map((e, t) =>
                        (0, I.jsxs)(
                          `li`,
                          {
                            className: `flex items-center gap-3 py-3`,
                            children: [
                              (0, I.jsx)(z, {
                                name: e.name,
                                index: t,
                                size: 40,
                              }),
                              (0, I.jsxs)(`div`, {
                                className: `min-w-0 flex-1`,
                                children: [
                                  (0, I.jsxs)(`p`, {
                                    className: `truncate font-semibold`,
                                    children: [
                                      e.name,
                                      e.id === s.creatorId &&
                                        (0, I.jsx)(`span`, {
                                          className: `ml-2 text-xs font-medium text-ink-500`,
                                          children: `người tạo nhóm`,
                                        }),
                                      e.id === c?.id &&
                                        (0, I.jsx)(`span`, {
                                          className: `ml-2 rounded-full bg-brand-100 px-2 py-0.5 text-[11px] font-bold text-brand-700`,
                                          children: `Bạn`,
                                        }),
                                      e.isDemo &&
                                        (0, I.jsx)(`span`, {
                                          className: `ml-2 rounded-full bg-sun-soft px-2 py-0.5 text-[11px] font-bold text-amber-800`,
                                          children: `mẫu`,
                                        }),
                                    ],
                                  }),
                                  (0, I.jsx)(`p`, {
                                    className: `text-xs text-ink-500`,
                                    children: e.prefs
                                      ? `Đã gửi · ${e.prefs.interests.length} sở thích (ngân sách được giữ riêng tư)`
                                      : `Chưa gửi sở thích`,
                                  }),
                                ],
                              }),
                              e.prefs
                                ? (0, I.jsxs)(`span`, {
                                    className: `flex items-center gap-1 text-xs font-semibold text-mint`,
                                    children: [
                                      (0, I.jsx)(vr, { size: 16 }),
                                      ` Đã gửi`,
                                    ],
                                  })
                                : (0, I.jsxs)(`span`, {
                                    className: `flex items-center gap-1 text-xs font-semibold text-ink-500`,
                                    children: [
                                      (0, I.jsx)(wr, { size: 16 }),
                                      ` Đang chờ`,
                                    ],
                                  }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
            (0, I.jsxs)(`div`, {
              className: `space-y-6`,
              children: [
                (0, I.jsxs)(`section`, {
                  className: `card bg-ink-900 p-5 text-white md:p-6`,
                  children: [
                    (0, I.jsx)(`h2`, {
                      className: `text-lg font-bold`,
                      children: `Bước tiếp theo`,
                    }),
                    c
                      ? (0, I.jsxs)(`div`, {
                          className: `mt-3 space-y-3`,
                          children: [
                            c.prefs
                              ? (0, I.jsxs)(M, {
                                  to: `/g/${s.code}/prefs`,
                                  className: `btn-soft w-full justify-between`,
                                  children: [
                                    (0, I.jsxs)(`span`, {
                                      className: `flex items-center gap-2`,
                                      children: [
                                        (0, I.jsx)(vr, {
                                          size: 16,
                                          className: `text-mint`,
                                        }),
                                        ` Sở thích của bạn đã gửi`,
                                      ],
                                    }),
                                    (0, I.jsx)(`span`, {
                                      className: `text-xs text-ink-500`,
                                      children: `Xem / sửa`,
                                    }),
                                  ],
                                })
                              : (0, I.jsxs)(M, {
                                  to: `/g/${s.code}/prefs`,
                                  className: `btn-primary w-full`,
                                  children: [
                                    `Điền sở thích của `,
                                    c.name,
                                    ` `,
                                    (0, I.jsx)(ir, { size: 16 }),
                                  ],
                                }),
                            (0, I.jsxs)(R, {
                              variant: `soft`,
                              className: `w-full`,
                              disabled: !d,
                              onClick: () => n(`/g/${s.code}/recommend`),
                              children: [
                                (0, I.jsx)(Ri, { size: 16 }),
                                ` Xem gợi ý lịch trình`,
                              ],
                            }),
                            !d &&
                              (0, I.jsxs)(`p`, {
                                className: `text-xs text-ink-300`,
                                children: [
                                  `Cần ít nhất `,
                                  2,
                                  ` bạn gửi sở thích (`,
                                  l,
                                  `/`,
                                  2,
                                  `) để bắt đầu gợi ý.`,
                                ],
                              }),
                            d &&
                              l < u &&
                              (0, I.jsxs)(`p`, {
                                className: `text-xs text-ink-300`,
                                children: [
                                  `Còn `,
                                  u - l,
                                  ` bạn chưa gửi. Bạn vẫn có thể gợi ý trước, nhưng nên chờ đủ để công bằng.`,
                                ],
                              }),
                          ],
                        })
                      : (0, I.jsxs)(I.Fragment, {
                          children: [
                            (0, I.jsx)(`p`, {
                              className: `mt-2 text-sm text-ink-300`,
                              children: `Chọn bạn là ai trong nhóm để tiếp tục.`,
                            }),
                            (0, I.jsx)(`div`, {
                              className: `mt-4`,
                              children: (0, I.jsx)(as, { group: s, me: c }),
                            }),
                          ],
                        }),
                  ],
                }),
                (0, I.jsx)(`div`, {
                  className: `card p-5 md:p-6`,
                  children: (0, I.jsx)(WT_LogExport, { group: s, toast: t }),
                }),
                (0, I.jsxs)(`section`, {
                  className: `card p-5 md:p-6`,
                  children: [
                    (0, I.jsxs)(`h2`, {
                      className: `flex items-center gap-2 text-lg font-bold`,
                      children: [
                        (0, I.jsx)(Wr, {
                          size: 18,
                          className: `text-brand-500`,
                        }),
                        ` Công cụ demo`,
                      ],
                    }),
                    (0, I.jsx)(`p`, {
                      className: `mb-4 mt-1 text-sm text-ink-500`,
                      children: `Dành cho việc thử nghiệm một mình: giả lập thêm bạn trong cùng trình duyệt.`,
                    }),
                    (0, I.jsx)(`div`, {
                      className: `mb-4`,
                      children: (0, I.jsx)(as, { group: s, me: c }),
                    }),
                    (0, I.jsxs)(R, {
                      variant: `soft`,
                      className: `mb-4 w-full`,
                      onClick: () => {
                        (Jo(s.code),
                          t(`Đã thêm Minh, Lan, Huy cùng sở thích mẫu`));
                      },
                      children: [
                        (0, I.jsx)(Xi, { size: 16 }),
                        ` Thêm 3 bạn mẫu (đã có sở thích)`,
                      ],
                    }),
                    (0, I.jsx)(`form`, {
                      onSubmit: (e) => {
                        e.preventDefault();
                        let n = r.trim();
                        if (!n) o(`Nhập tên thành viên giả lập.`);
                        else
                          try {
                            let e = B.getIdentity(s.code);
                            (B.joinGroup(s.code, n),
                              e && B.setIdentity(s.code, e),
                              i(``),
                              o(null),
                              t(
                                `Đã thêm ${n}. Dùng ô "Đang dùng với tư cách" để điền sở thích cho bạn ấy.`,
                                `info`,
                              ));
                          } catch (e) {
                            o(e instanceof wa ? e.message : `Chưa thêm được.`);
                          }
                      },
                      className: `space-y-2`,
                      noValidate: !0,
                      children: (0, I.jsx)(ga, {
                        label: `Hoặc thêm một thành viên trống`,
                        error: a,
                        children: (0, I.jsxs)(`div`, {
                          className: `flex gap-2`,
                          children: [
                            (0, I.jsx)(`input`, {
                              className: `input`,
                              value: r,
                              onChange: (e) => {
                                (i(e.target.value), o(null));
                              },
                              placeholder: `Tên bạn giả lập`,
                              maxLength: 30,
                            }),
                            (0, I.jsx)(R, {
                              type: `submit`,
                              variant: `dark`,
                              children: `Thêm`,
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    });
  }
  function ls({ prefs: e }) {
    let t = `flex items-start gap-3 py-3`;
    return (0, I.jsxs)(`dl`, {
      className: `divide-y divide-ink-100 text-sm`,
      children: [
        (0, I.jsxs)(`div`, {
          className: t,
          children: [
            (0, I.jsx)(`dt`, {
              className: `w-28 shrink-0 font-semibold text-ink-500`,
              children: `Mood`,
            }),
            (0, I.jsx)(`dd`, {
              className: `flex flex-wrap gap-1.5`,
              children: e.moods.map((e) =>
                (0, I.jsxs)(
                  `span`,
                  {
                    className: `rounded-full bg-lilac-soft px-2.5 py-1 text-xs font-semibold text-indigo-700`,
                    children: [
                      fo.find((t) => t.id === e)?.emoji,
                      ` `,
                      fo.find((t) => t.id === e)?.label,
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: t,
          children: [
            (0, I.jsxs)(`dt`, {
              className: `flex w-28 shrink-0 items-center gap-1.5 font-semibold text-ink-500`,
              children: [(0, I.jsx)(ca, { size: 14 }), `Ngân sách`],
            }),
            (0, I.jsxs)(`dd`, {
              className: `font-semibold`,
              children: [
                `Tối đa `,
                V(e.budgetMax),
                (0, I.jsx)(`span`, {
                  className: `font-normal text-ink-500`,
                  children: ` / người`,
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: t,
          children: [
            (0, I.jsxs)(`dt`, {
              className: `flex w-28 shrink-0 items-center gap-1.5 font-semibold text-ink-500`,
              children: [(0, I.jsx)(ur, { size: 14 }), `Ngày`],
            }),
            (0, I.jsx)(`dd`, { children: Za(e.date) }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: t,
          children: [
            (0, I.jsxs)(`dt`, {
              className: `flex w-28 shrink-0 items-center gap-1.5 font-semibold text-ink-500`,
              children: [(0, I.jsx)(Mr, { size: 14 }), `Thời gian`],
            }),
            (0, I.jsxs)(`dd`, {
              children: [
                `Từ `,
                e.startTime,
                `, trong `,
                e.durationHours,
                ` giờ`,
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: t,
          children: [
            (0, I.jsx)(`dt`, {
              className: `w-28 shrink-0 font-semibold text-ink-500`,
              children: `Quan tâm`,
            }),
            (0, I.jsx)(`dd`, {
              className: `flex flex-wrap gap-1.5`,
              children: e.interests.map((e) =>
                (0, I.jsxs)(
                  `span`,
                  {
                    className: `rounded-full bg-brand-50 px-2.5 py-1 text-xs font-semibold text-brand-700`,
                    children: [
                      po.find((t) => t.id === e)?.emoji,
                      ` `,
                      po.find((t) => t.id === e)?.label,
                    ],
                  },
                  e,
                ),
              ),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: t,
          children: [
            (0, I.jsxs)(`dt`, {
              className: `flex w-28 shrink-0 items-center gap-1.5 font-semibold text-ink-500`,
              children: [(0, I.jsx)(or, { size: 14 }), `Muốn tránh`],
            }),
            (0, I.jsx)(`dd`, {
              className: `flex flex-wrap gap-1.5`,
              children:
                e.avoidCategories.length === 0 && !e.avoidText.trim()
                  ? (0, I.jsx)(`span`, {
                      className: `text-ink-500`,
                      children: `Không có`,
                    })
                  : (0, I.jsxs)(I.Fragment, {
                      children: [
                        e.avoidCategories.map((e) =>
                          (0, I.jsx)(
                            `span`,
                            {
                              className: `rounded-full bg-ink-900 px-2.5 py-1 text-xs font-semibold text-white`,
                              children: po.find((t) => t.id === e)?.label,
                            },
                            e,
                          ),
                        ),
                        e.avoidText.trim() &&
                          (0, I.jsxs)(`span`, {
                            className: `rounded-full bg-ink-100 px-2.5 py-1 text-xs font-semibold`,
                            children: [`“`, e.avoidText.trim(), `”`],
                          }),
                      ],
                    }),
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: t,
          children: [
            (0, I.jsxs)(`dt`, {
              className: `flex w-28 shrink-0 items-center gap-1.5 font-semibold text-ink-500`,
              children: [(0, I.jsx)(ci, { size: 14 }), `Khu vực`],
            }),
            (0, I.jsx)(`dd`, {
              children: e.areas.length
                ? e.areas.map(_o).join(`, `)
                : `Không quan trọng`,
            }),
          ],
        }),
      ],
    });
  }
  var us = 3e4,
    ds = 5e6,
    fs = (e, t) => (e.includes(t) ? e.filter((e) => e !== t) : [...e, t]),
    ps = (e) => Number(e.replace(/\D/g, ``)) || 0,
    ms = (e) => {
      let t = e.prefs;
      return {
        name: e.name,
        moods: t?.moods ?? [],
        budget: t?.budgetMax ?? 0,
        budgetCustom: t ? !yo.includes(t.budgetMax) : !1,
        date: t?.date ?? ``,
        startTime: t?.startTime ?? ``,
        duration: t?.durationHours ?? 0,
        interests: t?.interests ?? [],
        avoidCategories: t?.avoidCategories ?? [],
        avoidText: t?.avoidText ?? ``,
        areas: t?.areas ?? [],
        homeArea: t?.homeArea ?? ``,
      };
    };
  function hs(e) {
    let t = {};
    return (
      e.name.trim()
        ? e.name.trim().length > 24 &&
          (t.name = `Tên hiển thị tối đa 24 ký tự.`)
        : (t.name = `Hãy nhập tên hiển thị.`),
      e.moods.length === 0 &&
        (t.moods = `Chọn ít nhất một mood để nhóm hiểu bạn muốn không khí nào.`),
      e.budget
        ? e.budget < us
          ? (t.budget = `Ngân sách tối thiểu là ${V(us)}/người.`)
          : e.budget > ds && (t.budget = `Ngân sách tối đa là ${V(ds)}/người.`)
        : (t.budget = `Chọn hoặc nhập mức tối đa bạn thoải mái chi cho cả buổi.`),
      e.date
        ? e.date < Ua() &&
          (t.date = `Ngày này đã qua rồi, hãy chọn ngày từ hôm nay.`)
        : (t.date = `Chọn ngày bạn rảnh.`),
      /^\d{2}:\d{2}$/.test(e.startTime) || (t.startTime = `Chọn giờ bắt đầu.`),
      e.duration || (t.duration = `Chọn tổng thời gian bạn rảnh.`),
      e.interests.length === 0 &&
        (t.interests = `Chọn ít nhất một nhóm hoạt động bạn quan tâm.`),
      t
    );
  }
  function gs() {
    let e = ts(),
      t = _t(),
      n = pa();
    if (e.status !== `ready`)
      return (0, I.jsx)(I.Fragment, { children: e.node });
    let { group: r, me: i } = e;
    return (0, I.jsx)(_s, { group: r, me: i, nav: t, toast: n }, i.id);
  }
  function _s({ group: e, me: t, nav: n, toast: r }) {
    let [i, a] = (0, _.useState)(!1),
      o = i || !t.prefs,
      [s, c] = (0, _.useState)(() => ms(t)),
      [l, u] = (0, _.useState)({}),
      [d, f] = (0, _.useState)(!1),
      p = (e, t) => {
        (c((n) => ({ ...n, [e]: t })), d && u(hs({ ...s, [e]: t })));
      },
      m = e.members.length,
      h = os(e),
      g = Va(6),
      v = Va(0),
      y = (n) => {
        (n.preventDefault(), f(!0));
        let i = hs(s);
        if ((u(i), Object.keys(i).length)) {
          r(`Còn vài mục cần hoàn thành, mình đã đánh dấu giúp bạn.`, `error`);
          let e = Object.keys(i)[0];
          document
            .getElementById(`sec-${e}`)
            ?.scrollIntoView({ behavior: `smooth`, block: `center` });
        } else
          try {
            s.name.trim() !== t.name && B.renameMember(e.code, t.id, s.name);
            let n = {
              moods: s.moods,
              budgetMax: s.budget,
              date: s.date,
              startTime: s.startTime,
              durationHours: s.duration,
              interests: s.interests,
              avoidCategories: s.avoidCategories,
              avoidText: s.avoidText.trim(),
              areas: s.areas,
              homeArea: s.homeArea || null,
              submittedAt: Date.now(),
            };
            (B.savePrefs(e.code, t.id, n),
              a(!1),
              r(`Đã gửi sở thích của bạn`),
              window.scrollTo({ top: 0, behavior: `smooth` }));
          } catch (e) {
            r(
              e instanceof wa ? e.message : `Chưa lưu được, thử lại nhé.`,
              `error`,
            );
          }
      },
      b = () => {
        let e = Wa(g).Vy;
        (c({
          ...s,
          moods: e.moods,
          budget: e.budgetMax,
          budgetCustom: !1,
          date: e.date,
          startTime: e.startTime,
          duration: e.durationHours,
          interests: e.interests,
          avoidCategories: e.avoidCategories,
          avoidText: e.avoidText,
          areas: e.areas,
          homeArea: e.homeArea ?? ``,
        }),
          u({}),
          r(`Đã điền mẫu, bạn có thể chỉnh lại`, `info`));
      },
      x = e.members,
      S = `card p-5 md:p-6`,
      C = `text-lg font-bold`;
    if (!o && t.prefs) {
      let r = x.filter((e) => !e.prefs);
      return (0, I.jsxs)(`div`, {
        className: `mx-auto max-w-3xl px-4 py-8 md:py-12`,
        children: [
          (0, I.jsx)(Ba, { code: e.code, current: 2, reached: ss(e) }),
          (0, I.jsxs)(`div`, {
            className: `card pop-in p-6 text-center md:p-8`,
            children: [
              (0, I.jsx)(`div`, {
                className: `mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-mint-soft text-mint`,
                children: (0, I.jsx)(vr, { size: 36 }),
              }),
              (0, I.jsxs)(`h1`, {
                className: `mt-4 text-2xl font-extrabold md:text-3xl`,
                children: [`Đã nhận sở thích của `, t.name, `!`],
              }),
              (0, I.jsx)(`p`, {
                className: `mt-1 text-ink-500`,
                children: `Cảm ơn bạn. Bộ gợi ý sẽ cân đối ý kiến của mọi người trong nhóm.`,
              }),
            ],
          }),
          (0, I.jsxs)(`div`, {
            className: `mt-6 grid gap-6 md:grid-cols-2`,
            children: [
              (0, I.jsxs)(`section`, {
                className: S,
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `flex items-center justify-between`,
                    children: [
                      (0, I.jsx)(`h2`, {
                        className: C,
                        children: `Bạn đã chọn`,
                      }),
                      (0, I.jsxs)(R, {
                        variant: `ghost`,
                        size: `sm`,
                        onClick: () => a(!0),
                        children: [(0, I.jsx)(vi, { size: 14 }), ` Chỉnh sửa`],
                      }),
                    ],
                  }),
                  (0, I.jsx)(ls, { prefs: t.prefs }),
                ],
              }),
              (0, I.jsxs)(`section`, {
                className: S,
                children: [
                  (0, I.jsx)(`h2`, {
                    className: C,
                    children: `Tiến độ của nhóm`,
                  }),
                  (0, I.jsxs)(`p`, {
                    className: `mb-2 mt-1 text-sm text-ink-500`,
                    children: [h, `/`, m, ` thành viên đã gửi`],
                  }),
                  (0, I.jsx)(va, { value: h, max: m, tone: `mint` }),
                  (0, I.jsx)(`ul`, {
                    className: `mt-4 space-y-2.5`,
                    children: x.map((e, t) =>
                      (0, I.jsxs)(
                        `li`,
                        {
                          className: `flex items-center gap-3`,
                          children: [
                            (0, I.jsx)(z, { name: e.name, index: t, size: 32 }),
                            (0, I.jsx)(`span`, {
                              className: `flex-1 truncate text-sm font-semibold`,
                              children: e.name,
                            }),
                            e.prefs
                              ? (0, I.jsxs)(`span`, {
                                  className: `flex items-center gap-1 text-xs font-semibold text-mint`,
                                  children: [
                                    (0, I.jsx)(vr, { size: 14 }),
                                    ` Đã gửi`,
                                  ],
                                })
                              : (0, I.jsxs)(`span`, {
                                  className: `flex items-center gap-1 text-xs font-semibold text-ink-500`,
                                  children: [
                                    (0, I.jsx)(wr, { size: 14 }),
                                    ` Chưa gửi`,
                                  ],
                                }),
                          ],
                        },
                        e.id,
                      ),
                    ),
                  }),
                  r.length > 0 &&
                    (0, I.jsxs)(`p`, {
                      className: `mt-4 rounded-2xl bg-sun-soft p-3 text-xs text-ink-700`,
                      children: [
                        `Mời `,
                        r.map((e) => e.name).join(`, `),
                        ` tự điền nhé. Cả nhóm cùng tham gia thì gợi ý mới công bằng.`,
                      ],
                    }),
                ],
              }),
            ],
          }),
          (0, I.jsx)(`div`, {
            className: `mt-6`,
            children: (0, I.jsx)(as, { group: e, me: t }),
          }),
          (0, I.jsxs)(`div`, {
            className: `mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center`,
            children: [
              (0, I.jsxs)(R, {
                size: `lg`,
                disabled: h < 2,
                onClick: () => n(`/g/${e.code}/recommend`),
                children: [
                  `Xem gợi ý lịch trình `,
                  (0, I.jsx)(ir, { size: 18 }),
                ],
              }),
              (0, I.jsx)(M, {
                to: `/g/${e.code}`,
                className: `btn-soft btn-lg`,
                children: `Về trang nhóm & link mời`,
              }),
            ],
          }),
          h < 2 &&
            (0, I.jsxs)(`p`, {
              className: `mt-3 text-center text-sm text-ink-500`,
              children: [
                `Cần thêm `,
                2 - h,
                ` bạn gửi sở thích để bắt đầu gợi ý.`,
              ],
            }),
        ],
      });
    }
    let w = (e) => l[e];
    return (0, I.jsxs)(`div`, {
      className: `mx-auto max-w-3xl px-4 py-8 md:py-12`,
      children: [
        (0, I.jsx)(Ba, { code: e.code, current: 2, reached: ss(e) }),
        (0, I.jsxs)(`div`, {
          className: `mb-6`,
          children: [
            (0, I.jsxs)(`p`, {
              className: `text-xs font-bold uppercase tracking-widest text-brand-600`,
              children: [`Bước 2 / 5 · `, e.name],
            }),
            (0, I.jsxs)(`h1`, {
              className: `text-3xl font-extrabold tracking-tight`,
              children: [`Sở thích của `, t.name],
            }),
            (0, I.jsx)(`p`, {
              className: `mt-1 text-ink-500`,
              children: `Chỉ mất khoảng 2 phút. Hãy chọn thật lòng để cả nhóm có lịch trình hợp với tất cả.`,
            }),
            (0, I.jsxs)(`div`, {
              className: `mt-4 flex items-center gap-3 rounded-2xl bg-white p-3 text-sm shadow-soft`,
              children: [
                (0, I.jsx)(`div`, {
                  className: `flex -space-x-2`,
                  children: x
                    .slice(0, 5)
                    .map((e, t) =>
                      (0, I.jsx)(
                        z,
                        { name: e.name, index: t, size: 28, ring: !0 },
                        e.id,
                      ),
                    ),
                }),
                (0, I.jsxs)(`span`, {
                  className: `flex-1`,
                  children: [
                    (0, I.jsxs)(`strong`, { children: [h, `/`, m] }),
                    ` bạn đã gửi sở thích`,
                  ],
                }),
                (0, I.jsx)(`div`, {
                  className: `w-24`,
                  children: (0, I.jsx)(va, { value: h, max: m, tone: `mint` }),
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`form`, {
          onSubmit: y,
          className: `space-y-5`,
          noValidate: !0,
          children: [
            (0, I.jsxs)(`section`, {
              className: S,
              id: `sec-name`,
              children: [
                (0, I.jsx)(`h2`, {
                  className: C,
                  children: `A. Thông tin của bạn`,
                }),
                (0, I.jsx)(`div`, {
                  className: `mt-3`,
                  children: (0, I.jsx)(ga, {
                    label: `Tên hiển thị`,
                    htmlFor: `pname`,
                    error: w(`name`),
                    children: (0, I.jsx)(`input`, {
                      id: `pname`,
                      className: `input`,
                      value: s.name,
                      onChange: (e) => p(`name`, e.target.value),
                      maxLength: 30,
                    }),
                  }),
                }),
              ],
            }),
            (0, I.jsxs)(`section`, {
              className: S,
              id: `sec-moods`,
              children: [
                (0, I.jsx)(`h2`, {
                  className: C,
                  children: `B. Bạn muốn không khí thế nào?`,
                }),
                (0, I.jsx)(`p`, {
                  className: `hint mb-3`,
                  children: `Chọn nhiều mood nếu muốn.`,
                }),
                (0, I.jsx)(`div`, {
                  className: `flex flex-wrap gap-2`,
                  children: fo.map((e) =>
                    (0, I.jsxs)(
                      ha,
                      {
                        pressed: s.moods.includes(e.id),
                        onClick: () => p(`moods`, fs(s.moods, e.id)),
                        title: e.hint,
                        children: [e.emoji, ` `, e.label],
                      },
                      e.id,
                    ),
                  ),
                }),
                w(`moods`) &&
                  (0, I.jsx)(`p`, {
                    className: `error-text`,
                    role: `alert`,
                    children: w(`moods`),
                  }),
              ],
            }),
            (0, I.jsxs)(`section`, {
              className: S,
              id: `sec-budget`,
              children: [
                (0, I.jsx)(`h2`, {
                  className: C,
                  children: `C. Ngân sách tối đa mỗi người`,
                }),
                (0, I.jsxs)(`p`, {
                  className: `hint mb-3`,
                  children: [
                    `Tính trên `,
                    (0, I.jsx)(`strong`, { children: `mỗi người` }),
                    ` cho cả buổi (gồm ăn uống, vé, di chuyển). Nhóm sẽ dùng mức thấp nhất làm mốc chung.`,
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  className: `flex flex-wrap gap-2`,
                  children: [
                    yo.map((e) =>
                      (0, I.jsxs)(
                        ha,
                        {
                          pressed: !s.budgetCustom && s.budget === e,
                          onClick: () => {
                            (c((t) => ({ ...t, budget: e, budgetCustom: !1 })),
                              d && u(hs({ ...s, budget: e })));
                          },
                          children: [(e / 1e3).toLocaleString(`vi-VN`), `k`],
                        },
                        e,
                      ),
                    ),
                    (0, I.jsx)(ha, {
                      pressed: s.budgetCustom,
                      onClick: () =>
                        c((e) => ({
                          ...e,
                          budgetCustom: !0,
                          budget: yo.includes(e.budget) ? 0 : e.budget,
                        })),
                      children: `Nhập số khác`,
                    }),
                  ],
                }),
                s.budgetCustom &&
                  (0, I.jsxs)(`div`, {
                    className: `mt-3 max-w-xs`,
                    children: [
                      (0, I.jsx)(`label`, {
                        className: `label`,
                        htmlFor: `bcustom`,
                        children: `Số tiền (VND / người)`,
                      }),
                      (0, I.jsxs)(`div`, {
                        className: `relative`,
                        children: [
                          (0, I.jsx)(`input`, {
                            id: `bcustom`,
                            inputMode: `numeric`,
                            className: `input pr-14`,
                            placeholder: `Ví dụ: 250000`,
                            value: s.budget
                              ? s.budget.toLocaleString(`vi-VN`)
                              : ``,
                            onChange: (e) => p(`budget`, ps(e.target.value)),
                          }),
                          (0, I.jsx)(`span`, {
                            className: `absolute right-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-ink-500`,
                            children: `đ`,
                          }),
                        ],
                      }),
                    ],
                  }),
                w(`budget`) &&
                  (0, I.jsx)(`p`, {
                    className: `error-text`,
                    role: `alert`,
                    children: w(`budget`),
                  }),
                s.budget >= us &&
                  (0, I.jsxs)(`p`, {
                    className: `mt-3 rounded-2xl bg-mint-soft px-4 py-2.5 text-sm text-ink-700`,
                    children: [
                      V(s.budget),
                      ` × `,
                      m,
                      ` thành viên hiện có ≈ `,
                      (0, I.jsx)(`strong`, { children: V(s.budget * m) }),
                      ` cho cả nhóm `,
                      (0, I.jsx)(`span`, {
                        className: `text-ink-500`,
                        children: `(ước tính nếu mọi người cùng mức này)`,
                      }),
                    ],
                  }),
              ],
            }),
            (0, I.jsxs)(`section`, {
              className: S,
              id: `sec-date`,
              children: [
                (0, I.jsx)(`h2`, {
                  className: C,
                  children: `D. Bạn rảnh khi nào?`,
                }),
                (0, I.jsxs)(`div`, {
                  className: `mt-3 grid gap-4 sm:grid-cols-2`,
                  children: [
                    (0, I.jsxs)(ga, {
                      label: `Ngày`,
                      htmlFor: `pdate`,
                      error: w(`date`),
                      children: [
                        (0, I.jsx)(`input`, {
                          id: `pdate`,
                          type: `date`,
                          min: Ua(),
                          className: `input`,
                          value: s.date,
                          onChange: (e) => p(`date`, e.target.value),
                        }),
                        (0, I.jsxs)(`div`, {
                          className: `mt-2 flex gap-2`,
                          children: [
                            (0, I.jsx)(ha, {
                              pressed: s.date === g,
                              onClick: () => p(`date`, g),
                              children: `Thứ 7 này`,
                            }),
                            (0, I.jsx)(ha, {
                              pressed: s.date === v,
                              onClick: () => p(`date`, v),
                              children: `Chủ nhật này`,
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(ga, {
                      label: `Giờ bắt đầu`,
                      htmlFor: `ptime`,
                      error: w(`startTime`),
                      children: [
                        (0, I.jsx)(`input`, {
                          id: `ptime`,
                          type: `time`,
                          className: `input`,
                          value: s.startTime,
                          onChange: (e) => p(`startTime`, e.target.value),
                        }),
                        (0, I.jsx)(`div`, {
                          className: `mt-2 flex flex-wrap gap-2`,
                          children: bo.map((e) =>
                            (0, I.jsx)(
                              ha,
                              {
                                pressed: s.startTime === e.time,
                                onClick: () => p(`startTime`, e.time),
                                children: e.label,
                              },
                              e.time,
                            ),
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  id: `sec-duration`,
                  className: `mt-4`,
                  children: [
                    (0, I.jsx)(`p`, {
                      className: `label`,
                      children: `Tổng thời gian rảnh`,
                    }),
                    (0, I.jsx)(`div`, {
                      className: `flex flex-wrap gap-2`,
                      children: vo.map((e) =>
                        (0, I.jsxs)(
                          ha,
                          {
                            pressed: s.duration === e,
                            onClick: () => p(`duration`, e),
                            children: [e, ` giờ`],
                          },
                          e,
                        ),
                      ),
                    }),
                    w(`duration`) &&
                      (0, I.jsx)(`p`, {
                        className: `error-text`,
                        role: `alert`,
                        children: w(`duration`),
                      }),
                    (0, I.jsx)(`p`, {
                      className: `hint`,
                      children: `Nhóm sẽ dùng khung giờ chung: giờ bắt đầu muộn nhất và giờ kết thúc sớm nhất của mọi người.`,
                    }),
                  ],
                }),
              ],
            }),
            (0, I.jsxs)(`section`, {
              className: S,
              id: `sec-interests`,
              children: [
                (0, I.jsx)(`h2`, {
                  className: C,
                  children: `E. Bạn quan tâm hoạt động nào?`,
                }),
                (0, I.jsx)(`p`, {
                  className: `hint mb-3`,
                  children: `Chọn nhiều mục.`,
                }),
                (0, I.jsx)(`div`, {
                  className: `flex flex-wrap gap-2`,
                  children: po.map((e) =>
                    (0, I.jsxs)(
                      ha,
                      {
                        pressed: s.interests.includes(e.id),
                        onClick: () =>
                          c((t) => {
                            let n = fs(t.interests, e.id),
                              r = {
                                ...t,
                                interests: n,
                                avoidCategories: n.includes(e.id)
                                  ? t.avoidCategories.filter((t) => t !== e.id)
                                  : t.avoidCategories,
                              };
                            return (d && u(hs(r)), r);
                          }),
                        children: [e.emoji, ` `, e.label],
                      },
                      e.id,
                    ),
                  ),
                }),
                w(`interests`) &&
                  (0, I.jsx)(`p`, {
                    className: `error-text`,
                    role: `alert`,
                    children: w(`interests`),
                  }),
              ],
            }),
            (0, I.jsxs)(`section`, {
              className: S,
              children: [
                (0, I.jsxs)(`h2`, {
                  className: C,
                  children: [
                    `F. Điều bạn muốn tránh `,
                    (0, I.jsx)(`span`, {
                      className: `text-sm font-medium text-ink-500`,
                      children: `(không bắt buộc)`,
                    }),
                  ],
                }),
                (0, I.jsx)(`p`, {
                  className: `hint mb-3`,
                  children: `Nhóm sẽ loại các mục này khỏi mọi gợi ý.`,
                }),
                (0, I.jsx)(`div`, {
                  className: `flex flex-wrap gap-2`,
                  children: po.map((e) =>
                    (0, I.jsxs)(
                      ha,
                      {
                        avoid: !0,
                        pressed: s.avoidCategories.includes(e.id),
                        onClick: () =>
                          c((t) => {
                            let n = fs(t.avoidCategories, e.id);
                            return {
                              ...t,
                              avoidCategories: n,
                              interests: n.includes(e.id)
                                ? t.interests.filter((t) => t !== e.id)
                                : t.interests,
                            };
                          }),
                        children: [e.emoji, ` `, e.label],
                      },
                      e.id,
                    ),
                  ),
                }),
                (0, I.jsx)(`div`, {
                  className: `mt-4`,
                  children: (0, I.jsx)(ga, {
                    label: `Hoặc nhập địa điểm, hoạt động cụ thể`,
                    htmlFor: `avoid`,
                    hint: `Ngăn cách bằng dấu phẩy. Ví dụ: karaoke, leo núi, đồ cay`,
                    children: (0, I.jsx)(`input`, {
                      id: `avoid`,
                      className: `input`,
                      value: s.avoidText,
                      onChange: (e) => p(`avoidText`, e.target.value),
                      placeholder: `karaoke, bowling…`,
                      maxLength: 120,
                    }),
                  }),
                }),
              ],
            }),
            (0, I.jsxs)(`section`, {
              className: S,
              children: [
                (0, I.jsxs)(`h2`, {
                  className: C,
                  children: [
                    `Bạn xuất phát từ khu vực nào? `,
                    (0, I.jsx)(`span`, {
                      className: `text-sm font-medium text-ink-500`,
                      children: `(không bắt buộc)`,
                    }),
                  ],
                }),
                (0, I.jsx)(`p`, {
                  className: `hint mb-3`,
                  children: `Dùng để ước tính quãng đường từ chỗ bạn đến từng phương án. Chỉ hiển thị khoảng cách, không hiển thị địa chỉ.`,
                }),
                (0, I.jsx)(`div`, {
                  className: `flex flex-wrap gap-2`,
                  children: go.map((e) =>
                    (0, I.jsx)(
                      ha,
                      {
                        pressed: s.homeArea === e.id,
                        onClick: () => p(`homeArea`, s.homeArea === e.id ? `` : e.id),
                        children: e.name,
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
            (0, I.jsxs)(`section`, {
              className: S,
              children: [
                (0, I.jsxs)(`h2`, {
                  className: C,
                  children: [
                    `Khu vực ưa thích `,
                    (0, I.jsx)(`span`, {
                      className: `text-sm font-medium text-ink-500`,
                      children: `(không bắt buộc)`,
                    }),
                  ],
                }),
                (0, I.jsx)(`p`, {
                  className: `hint mb-3`,
                  children: WT_realData() ? `Bỏ trống nếu đâu cũng được. Giai đoạn test này chỉ có dữ liệu ở ${go.filter(WT_inData).map((d) => d.name).join(` và `)}.` : `Bỏ trống nếu đâu cũng được. Chọn thêm để gợi ý ưu tiên điểm trong khu vực này.`,
                }),
                (0, I.jsx)(`div`, {
                  className: `flex flex-wrap gap-2`,
                  children: go.filter(WT_inData).map((e) =>
                    (0, I.jsx)(
                      ha,
                      {
                        pressed: s.areas.includes(e.id),
                        onClick: () => p(`areas`, fs(s.areas, e.id)),
                        children: e.name,
                      },
                      e.id,
                    ),
                  ),
                }),
              ],
            }),
            d &&
              Object.keys(l).length > 0 &&
              (0, I.jsx)(_a, {
                kind: `error`,
                title: `Bạn chưa hoàn thành một số mục`,
                children: `Hãy kiểm tra các phần được đánh dấu màu đỏ phía trên.`,
              }),
            (0, I.jsxs)(`div`, {
              className: `sticky bottom-3 z-30 flex flex-col gap-2 rounded-3xl bg-white/90 p-3 shadow-pop backdrop-blur sm:flex-row sm:items-center`,
              children: [
                (0, I.jsxs)(R, {
                  type: `button`,
                  variant: `ghost`,
                  onClick: b,
                  children: [(0, I.jsx)(P, { size: 16 }), ` Điền mẫu`],
                }),
                (0, I.jsx)(`div`, { className: `flex-1` }),
                t.prefs &&
                  (0, I.jsx)(R, {
                    type: `button`,
                    variant: `soft`,
                    onClick: () => a(!1),
                    children: `Huỷ`,
                  }),
                (0, I.jsxs)(R, {
                  type: `submit`,
                  size: `lg`,
                  children: [`Gửi sở thích `, (0, I.jsx)(ir, { size: 18 })],
                }),
              ],
            }),
          ],
        }),
        (0, I.jsx)(`div`, {
          className: `mt-6`,
          children: (0, I.jsx)(as, { group: e, me: t }),
        }),
      ],
    });
  }
  function vs() {
    let e = ts(),
      t = _t(),
      n = pa(),
      [r, i] = (0, _.useState)(!1),
      [a, o] = (0, _.useState)([]),
      [s, c] = (0, _.useState)(``),
      l = e.status === `ready` ? e.group : null,
      u = (0, _.useMemo)(() => (l ? eo(l.members, l.sharedBudget) : null), [l]);
    if (e.status !== `ready` || !l || !u)
      return (0, I.jsx)(I.Fragment, {
        children: e.status === `ready` ? null : e.node,
      });
    let { me: d } = e,
      f = u.submitted.length,
      p = u.issues.filter((e) => e.level === `error`),
      m = l.generation && l.generation.inputsHash !== u.inputsHash,
      h = l.itineraries.length > 0,
      g = l.members.filter((e) => !e.prefs),
      v = () => {
        (i(!0),
          window.setTimeout(() => {
            let e = Fo(l.members, { sharedBudget: l.sharedBudget });
            (o(e.issues.filter((e) => !u.issues.includes(e))),
              e.info && e.itineraries.length
                ? (B.saveGeneration(l.code, e.itineraries, e.info),
                  n(`Đã tạo ${e.itineraries.length} phương án cho nhóm`))
                : n(`Chưa tạo được gợi ý, xem lý do bên dưới.`, `error`),
              i(!1));
          }, 700));
      },
      y = () => {
        let e = Number(s.replace(/\D/g, ``));
        !e || e < 3e4
          ? n(`Nhập ngân sách chung hợp lệ (từ 30.000đ/người).`, `error`)
          : (B.setSharedBudget(l.code, e),
            c(``),
            n(`Đã đặt ngân sách chung ${V(e)}/người`));
      },
      b = po
        .map((e) => ({ ...e, n: u.interestCounts[e.id] ?? 0 }))
        .filter((e) => e.n > 0)
        .sort((e, t) => t.n - e.n),
      x = fo
        .map((e) => ({ ...e, n: u.moodCounts[e.id] ?? 0 }))
        .filter((e) => e.n > 0)
        .sort((e, t) => t.n - e.n),
      S = u.window;
    return (0, I.jsxs)(`div`, {
      className: `mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12`,
      children: [
        (0, I.jsx)(Ba, { code: l.code, current: 3, reached: ss(l) }),
        (0, I.jsxs)(`div`, {
          className: `mb-6`,
          children: [
            (0, I.jsxs)(`p`, {
              className: `text-xs font-bold uppercase tracking-widest text-brand-600`,
              children: [`Bước 3 / 5 · `, l.name],
            }),
            (0, I.jsx)(`h1`, {
              className: `text-3xl font-extrabold tracking-tight md:text-4xl`,
              children: `Gợi ý lịch trình cho cả nhóm`,
            }),
            (0, I.jsx)(`p`, {
              className: `mt-1 max-w-2xl text-ink-500`,
              children: `Chúng mình gom sở thích của mọi người, giữ trong ngân sách và khung giờ chung, rồi sắp xếp các điểm gần nhau.`,
            }),
          ],
        }),
        (0, I.jsxs)(`section`, {
          className: `card p-5 md:p-6`,
          "aria-labelledby": `sum`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `flex flex-wrap items-center justify-between gap-3`,
              children: [
                (0, I.jsx)(`h2`, {
                  id: `sum`,
                  className: `text-lg font-bold`,
                  children: `Tổng hợp từ nhóm`,
                }),
                (0, I.jsxs)(`div`, {
                  className: `flex items-center gap-2 text-sm text-ink-500`,
                  children: [
                    (0, I.jsx)(`div`, {
                      className: `flex -space-x-2`,
                      children: l.members.map((e, t) =>
                        (0, I.jsx)(
                          `span`,
                          {
                            className: e.prefs ? `` : `opacity-35`,
                            children: (0, I.jsx)(z, {
                              name: e.name,
                              index: t,
                              size: 28,
                              ring: !0,
                            }),
                          },
                          e.id,
                        ),
                      ),
                    }),
                    f,
                    `/`,
                    l.members.length,
                    ` đã gửi`,
                  ],
                }),
              ],
            }),
            f === 0
              ? (0, I.jsx)(`p`, {
                  className: `mt-4 text-sm text-ink-500`,
                  children: `Chưa có ai gửi sở thích.`,
                })
              : (0, I.jsxs)(`div`, {
                  className: `mt-5 grid gap-4 md:grid-cols-2 lg:grid-cols-4`,
                  children: [
                    (0, I.jsxs)(`div`, {
                      className: `rounded-2xl bg-ink-50 p-4`,
                      children: [
                        (0, I.jsxs)(`p`, {
                          className: `flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-500`,
                          children: [
                            (0, I.jsx)(ca, { size: 14 }),
                            ` Ngân sách chung`,
                          ],
                        }),
                        (0, I.jsxs)(`p`, {
                          className: `mt-1 text-2xl font-extrabold`,
                          children: [
                            V(u.budgetCap),
                            (0, I.jsx)(`span`, {
                              className: `text-sm font-medium text-ink-500`,
                              children: ` /người`,
                            }),
                          ],
                        }),
                        (0, I.jsx)(`p`, {
                          className: `mt-1 text-xs text-ink-500`,
                          children:
                            u.budgetSource === `lowest`
                              ? (0, I.jsxs)(I.Fragment, {
                                  children: [
                                    `Mức tối đa thấp nhất trong nhóm (không hiển thị tên). Cả nhóm ≈ `,
                                    V(u.budgetCap * l.members.length),
                                    `.`,
                                  ],
                                })
                              : (0, I.jsxs)(I.Fragment, {
                                  children: [
                                    `Ngân sách chung do nhóm thống nhất (thấp nhất: `,
                                    V(u.lowestBudget),
                                    `).`,
                                  ],
                                }),
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `rounded-2xl bg-ink-50 p-4`,
                      children: [
                        (0, I.jsxs)(`p`, {
                          className: `flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-500`,
                          children: [
                            (0, I.jsx)(ur, { size: 14 }),
                            ` Thời gian chung`,
                          ],
                        }),
                        (0, I.jsx)(`p`, {
                          className: `mt-1 text-lg font-extrabold leading-tight`,
                          children: Za(S.date),
                        }),
                        (0, I.jsxs)(`p`, {
                          className: `mt-1 flex items-center gap-1 text-sm`,
                          children: [
                            (0, I.jsx)(Mr, {
                              size: 14,
                              className: `text-ink-500`,
                            }),
                            qa(S.startMin),
                            ` – `,
                            qa(S.endMin),
                            ` `,
                            (0, I.jsxs)(`span`, {
                              className: `text-ink-500`,
                              children: [
                                `(`,
                                S.availableMin > 0
                                  ? Ya(S.availableMin)
                                  : `không có khung chung`,
                                `)`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `rounded-2xl bg-ink-50 p-4`,
                      children: [
                        (0, I.jsxs)(`p`, {
                          className: `flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-500`,
                          children: [
                            (0, I.jsx)(na, { size: 14 }),
                            ` Sở thích nhiều người chọn`,
                          ],
                        }),
                        (0, I.jsx)(`ul`, {
                          className: `mt-2 space-y-1.5`,
                          children: b
                            .slice(0, 4)
                            .map((e) =>
                              (0, I.jsxs)(
                                `li`,
                                {
                                  className: `text-xs`,
                                  children: [
                                    (0, I.jsxs)(`div`, {
                                      className: `flex justify-between font-semibold`,
                                      children: [
                                        (0, I.jsxs)(`span`, {
                                          children: [e.emoji, ` `, e.label],
                                        }),
                                        (0, I.jsxs)(`span`, {
                                          children: [e.n, `/`, f],
                                        }),
                                      ],
                                    }),
                                    (0, I.jsx)(`div`, {
                                      className: `mt-0.5 h-1.5 overflow-hidden rounded-full bg-ink-100`,
                                      children: (0, I.jsx)(`div`, {
                                        className: `h-full rounded-full bg-brand-500`,
                                        style: { width: `${(e.n / f) * 100}%` },
                                      }),
                                    }),
                                  ],
                                },
                                e.id,
                              ),
                            ),
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `rounded-2xl bg-ink-50 p-4`,
                      children: [
                        (0, I.jsxs)(`p`, {
                          className: `flex items-center gap-1.5 text-xs font-bold uppercase tracking-wide text-ink-500`,
                          children: [
                            (0, I.jsx)(or, { size: 14 }),
                            ` Mood & điều cần tránh`,
                          ],
                        }),
                        (0, I.jsx)(`div`, {
                          className: `mt-2 flex flex-wrap gap-1.5`,
                          children: x
                            .slice(0, 4)
                            .map((e) =>
                              (0, I.jsxs)(
                                `span`,
                                {
                                  className: `rounded-full bg-lilac-soft px-2 py-1 text-[11px] font-semibold text-indigo-700`,
                                  children: [
                                    e.emoji,
                                    ` `,
                                    e.label,
                                    ` (`,
                                    e.n,
                                    `)`,
                                  ],
                                },
                                e.id,
                              ),
                            ),
                        }),
                        (0, I.jsxs)(`div`, {
                          className: `mt-2 space-y-1 text-xs text-ink-700`,
                          children: [
                            u.avoidCategories.map((e) =>
                              (0, I.jsxs)(
                                `p`,
                                {
                                  children: [
                                    `🚫 `,
                                    po.find((t) => t.id === e.category)?.label,
                                    ` `,
                                    (0, I.jsxs)(`span`, {
                                      className: `text-ink-500`,
                                      children: [`(`, e.by.length, ` bạn)`],
                                    }),
                                  ],
                                },
                                e.category,
                              ),
                            ),
                            u.avoidKeywords.map((e) =>
                              (0, I.jsxs)(
                                `p`,
                                {
                                  children: [
                                    `🚫 “`,
                                    e.keyword,
                                    `” `,
                                    (0, I.jsxs)(`span`, {
                                      className: `text-ink-500`,
                                      children: [`(`, e.by.length, ` bạn)`],
                                    }),
                                  ],
                                },
                                e.keyword,
                              ),
                            ),
                            u.avoidCategories.length +
                              u.avoidKeywords.length ===
                              0 &&
                              (0, I.jsx)(`p`, {
                                className: `text-ink-500`,
                                children: `Chưa có mục nào cần tránh.`,
                              }),
                          ],
                        }),
                        u.hasAreaPrefs &&
                          (0, I.jsxs)(`p`, {
                            className: `mt-2 flex items-start gap-1 text-xs`,
                            children: [
                              (0, I.jsx)(ci, {
                                size: 12,
                                className: `mt-0.5 shrink-0`,
                              }),
                              `Khu vực: `,
                              Object.entries(u.areaCounts)
                                .sort((e, t) => t[1] - e[1])
                                .map(([e, t]) => `${_o(e)} (${t})`)
                                .join(`, `),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
            f >= 2 &&
              (0, I.jsx)(`div`, {
                className: `mt-5 flex flex-col gap-3 border-t border-ink-100 pt-5 sm:flex-row sm:items-end`,
                children: (0, I.jsxs)(`div`, {
                  className: `flex-1`,
                  children: [
                    (0, I.jsxs)(`label`, {
                      htmlFor: `shared`,
                      className: `label`,
                      children: [
                        `Nhóm đã thống nhất một ngân sách khác? `,
                        (0, I.jsx)(`span`, {
                          className: `font-normal text-ink-500`,
                          children: `(không bắt buộc)`,
                        }),
                      ],
                    }),
                    (0, I.jsxs)(`div`, {
                      className: `flex gap-2`,
                      children: [
                        (0, I.jsx)(`input`, {
                          id: `shared`,
                          inputMode: `numeric`,
                          className: `input max-w-[220px]`,
                          placeholder: `Ví dụ: 250000`,
                          value: s,
                          onChange: (e) => c(e.target.value),
                        }),
                        (0, I.jsx)(R, {
                          variant: `soft`,
                          onClick: y,
                          children: `Áp dụng`,
                        }),
                        l.sharedBudget != null &&
                          (0, I.jsx)(R, {
                            variant: `ghost`,
                            onClick: () => {
                              (B.setSharedBudget(l.code, null),
                                n(
                                  `Đã quay lại ngân sách thấp nhất của nhóm`,
                                  `info`,
                                ));
                            },
                            children: `Bỏ`,
                          }),
                      ],
                    }),
                    (0, I.jsx)(`p`, {
                      className: `hint`,
                      children: `Mặc định dùng mức thấp nhất để không ai bị quá ngân sách.`,
                    }),
                  ],
                }),
              }),
          ],
        }),
        (u.issues.length > 0 || a.length > 0) &&
          (0, I.jsx)(`div`, {
            className: `mt-4 space-y-2`,
            children: [...u.issues, ...a]
              .filter((e) => e.level !== `info` || h || a.includes(e))
              .map((e, t) =>
                (0, I.jsx)(
                  _a,
                  {
                    kind:
                      e.level === `error`
                        ? `error`
                        : e.level === `warn`
                          ? `warn`
                          : `info`,
                    children: e.text,
                  },
                  t,
                ),
              ),
          }),
        (0, I.jsx)(`div`, {
          className: `mt-8`,
          children:
            p.length > 0 && !h
              ? (0, I.jsx)(xa, {
                  icon: (0, I.jsx)(na, { size: 32 }),
                  title: `Cần thêm thông tin để gợi ý`,
                  action: (0, I.jsxs)(I.Fragment, {
                    children: [
                      (0, I.jsx)(M, {
                        to: `/g/${l.code}/prefs`,
                        className: `btn-primary`,
                        children: `Điền / sửa sở thích của tôi`,
                      }),
                      (0, I.jsx)(M, {
                        to: `/g/${l.code}`,
                        className: `btn-soft`,
                        children: `Mời thêm bạn`,
                      }),
                    ],
                  }),
                  children:
                    f < 2
                      ? (0, I.jsxs)(I.Fragment, {
                          children: [
                            `Mới có `,
                            f,
                            ` bạn gửi sở thích. `,
                            g.length > 0 &&
                              (0, I.jsxs)(I.Fragment, {
                                children: [
                                  `Đang chờ: `,
                                  (0, I.jsx)(`strong`, {
                                    children: g.map((e) => e.name).join(`, `),
                                  }),
                                  `.`,
                                ],
                              }),
                          ],
                        })
                      : `Hãy xem các cảnh báo phía trên và điều chỉnh để có khung giờ chung hợp lý.`,
                })
              : r
                ? (0, I.jsxs)(`div`, {
                    className: `card`,
                    children: [
                      (0, I.jsx)(Ca, {
                        label: `Đang cân đối ngân sách, sở thích và khoảng cách…`,
                      }),
                      (0, I.jsx)(`div`, {
                        className: `grid gap-4 p-5 md:grid-cols-3`,
                        children: [0, 1, 2].map((e) =>
                          (0, I.jsx)(
                            `div`,
                            { className: `skeleton h-72 rounded-3xl` },
                            e,
                          ),
                        ),
                      }),
                    ],
                  })
                : h
                  ? (0, I.jsxs)(I.Fragment, {
                      children: [
                        m &&
                          (0, I.jsx)(`div`, {
                            className: `mb-4`,
                            children: (0, I.jsx)(_a, {
                              kind: `warn`,
                              title: `Sở thích của nhóm đã thay đổi kể từ lần gợi ý trước`,
                              action: (0, I.jsxs)(R, {
                                size: `sm`,
                                onClick: v,
                                children: [
                                  (0, I.jsx)(Si, { size: 14 }),
                                  ` Tạo lại gợi ý`,
                                ],
                              }),
                              children: `Tạo lại sẽ xoá các phiếu bình chọn hiện tại để mọi người bình chọn trên phương án mới.`,
                            }),
                          }),
                        (0, I.jsxs)(`div`, {
                          className: `mb-4 flex flex-wrap items-center justify-between gap-3`,
                          children: [
                            (0, I.jsxs)(`h2`, {
                              className: `text-xl font-extrabold`,
                              children: [
                                l.itineraries.length,
                                ` phương án cho nhóm bạn`,
                              ],
                            }),
                            (0, I.jsxs)(R, {
                              variant: `soft`,
                              size: `sm`,
                              onClick: v,
                              children: [
                                (0, I.jsx)(Si, { size: 14 }),
                                ` Tạo lại`,
                              ],
                            }),
                          ],
                        }),
                        (0, I.jsx)(`p`, {
                          className: `mb-4 text-xs text-ink-500`,
                          children: WT_realData() ? `Mọi chi phí, quãng đường và thời gian di chuyển là ước tính. Địa điểm và giá do team nhập, có thể đã thay đổi so với thực tế.` : `Mọi chi phí, quãng đường và thời gian di chuyển là ước tính. Địa điểm đang là dữ liệu minh hoạ, chưa xác minh.`,
                        }),
                        (0, I.jsx)(`div`, {
                          className: `grid gap-5 lg:grid-cols-3`,
                          children: l.itineraries.map((e) =>
                            (0, I.jsx)(Wo, { it: e, group: l }, e.id),
                          ),
                        }),
                        (0, I.jsxs)(`div`, {
                          className: `mt-8 flex flex-col items-center gap-3`,
                          children: [
                            (0, I.jsxs)(R, {
                              size: `lg`,
                              onClick: () => t(`/g/${l.code}/compare`),
                              children: [
                                `So sánh & bình chọn `,
                                (0, I.jsx)(ir, { size: 18 }),
                              ],
                            }),
                            (0, I.jsx)(`p`, {
                              className: `text-sm text-ink-500`,
                              children: `Chưa chắc phương án nào là tốt nhất? Cả nhóm cùng bình chọn ở bước tiếp theo.`,
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, I.jsxs)(`div`, {
                      className: `card p-8 text-center`,
                      children: [
                        (0, I.jsx)(`div`, {
                          className: `mx-auto flex h-16 w-16 items-center justify-center rounded-3xl bg-brand-50 text-brand-500`,
                          children: (0, I.jsx)(Ri, { size: 30 }),
                        }),
                        (0, I.jsx)(`h2`, {
                          className: `mt-4 text-xl font-bold`,
                          children: `Sẵn sàng tạo 2–3 phương án`,
                        }),
                        (0, I.jsxs)(`p`, {
                          className: `mx-auto mt-1 max-w-md text-sm text-ink-500`,
                          children: [
                            f,
                            `/`,
                            l.members.length,
                            ` bạn đã gửi sở thích.`,
                            g.length > 0 &&
                              ` ${g.map((e) => e.name).join(`, `)} chưa gửi nên chưa được tính.`,
                          ],
                        }),
                        (0, I.jsxs)(R, {
                          size: `lg`,
                          className: `mt-5`,
                          onClick: v,
                          children: [
                            (0, I.jsx)(P, { size: 18 }),
                            ` Tạo gợi ý cho nhóm`,
                          ],
                        }),
                      ],
                    }),
        }),
        (0, I.jsx)(`div`, {
          className: `mt-8`,
          children: (0, I.jsx)(as, { group: l, me: d }),
        }),
      ],
    });
  }
  function ys() {
    let e = ts(),
      t = _t(),
      n = pa(),
      [r, i] = (0, _.useState)(null),
      [a, o] = (0, _.useState)(null),
      [s, c] = (0, _.useState)(!1);
    if (e.status !== `ready`)
      return (0, I.jsx)(I.Fragment, { children: e.node });
    let { group: l, me: u } = e,
      d = l.itineraries;
    if (d.length === 0)
      return (0, I.jsx)(`div`, {
        className: `px-4 py-16`,
        children: (0, I.jsx)(xa, {
          icon: (0, I.jsx)(Ri, { size: 32 }),
          title: `Chưa có phương án để so sánh`,
          action: (0, I.jsx)(M, {
            to: `/g/${l.code}/recommend`,
            className: `btn-primary`,
            children: `Tạo gợi ý trước nhé`,
          }),
          children: `Cả nhóm cần có lịch trình gợi ý trước khi bình chọn.`,
        }),
      });
    let f = Object.fromEntries(d.map((e) => [e.id, []]));
    for (let e of l.members) {
      let t = l.votes[e.id];
      t && f[t] && f[t].push(e);
    }
    let p = d.map((e) => f[e.id].length),
      m = Math.max(...p),
      h = m > 0 ? d.filter((e) => f[e.id].length === m) : [],
      g = l.members.filter((e) => l.votes[e.id] && f[l.votes[e.id]]),
      v = l.members.filter((e) => !g.includes(e)),
      y = l.votes[u.id],
      b = d.find((e) => e.id === l.confirmedId),
      x = a ?? (h.length === 1 ? h[0].id : null),
      S = (e) => {
        l.confirmedId
          ? n(`Nhóm đã chốt. Hãy mở lại bình chọn nếu muốn đổi.`, `info`)
          : (y === e
              ? (B.vote(l.code, u.id, null), n(`Đã bỏ phiếu của bạn`, `info`))
              : (B.vote(l.code, u.id, e),
                n(y ? `Đã đổi phiếu bình chọn` : `Đã ghi nhận phiếu của bạn`)),
            c(!1));
      },
      C = (e = !1) => {
        x &&
          (v.length > 0 && !e
            ? c(!0)
            : (B.confirm(l.code, x),
              n(`Đã chốt lịch trình!`),
              t(`/g/${l.code}/plan`)));
      },
      w = ({ it: e }) => {
        let t = y === e.id;
        return (0, I.jsxs)(R, {
          variant: t ? `primary` : `soft`,
          className: `w-full`,
          disabled: !!l.confirmedId,
          onClick: () => S(e.id),
          "aria-pressed": t,
          children: [
            t ? (0, I.jsx)(mr, { size: 16 }) : (0, I.jsx)(Bi, { size: 16 }),
            ` `,
            t
              ? `Bạn đã chọn (bấm để bỏ)`
              : y
                ? `Đổi sang phương án này`
                : `Bình chọn`,
          ],
        });
      },
      T = ({ it: e }) =>
        (0, I.jsxs)(`div`, {
          className: `flex items-center gap-2`,
          children: [
            (0, I.jsxs)(`span`, {
              className: `text-sm font-extrabold`,
              children: [f[e.id].length, ` phiếu`],
            }),
            (0, I.jsx)(`div`, {
              className: `flex -space-x-1.5`,
              children: f[e.id].map((e) =>
                (0, I.jsx)(
                  z,
                  {
                    name: e.name,
                    index: l.members.findIndex((t) => t.id === e.id),
                    size: 24,
                    ring: !0,
                  },
                  e.id,
                ),
              ),
            }),
            h.includes(e) &&
              h.length === 1 &&
              (0, I.jsxs)(ba, {
                tone: `sun`,
                children: [(0, I.jsx)(Br, { size: 12 }), ` Dẫn đầu`],
              }),
            h.includes(e) &&
              h.length > 1 &&
              (0, I.jsx)(ba, { tone: `ink`, children: `Đồng hạng` }),
          ],
        });
    return (0, I.jsxs)(`div`, {
      className: `mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12`,
      children: [
        (0, I.jsx)(Ba, { code: l.code, current: 4, reached: ss(l) }),
        (0, I.jsxs)(`div`, {
          className: `mb-6`,
          children: [
            (0, I.jsxs)(`p`, {
              className: `text-xs font-bold uppercase tracking-widest text-brand-600`,
              children: [`Bước 4 / 5 · `, l.name],
            }),
            (0, I.jsx)(`h1`, {
              className: `text-3xl font-extrabold tracking-tight md:text-4xl`,
              children: `So sánh & bình chọn`,
            }),
            (0, I.jsx)(`p`, {
              className: `mt-1 max-w-2xl text-ink-500`,
              children: `Mỗi bạn một phiếu và có thể đổi ý bất cứ lúc nào. Phương án đầu tiên không tự động là lựa chọn cuối.`,
            }),
          ],
        }),
        (0, I.jsx)(`div`, {
          className: `mb-5`,
          children: (0, I.jsx)(as, { group: l, me: u }),
        }),
        b &&
          (0, I.jsx)(`div`, {
            className: `mb-5`,
            children: (0, I.jsx)(_a, {
              kind: `success`,
              title: `Nhóm đã chốt: ${b.name}`,
              action: (0, I.jsxs)(`div`, {
                className: `flex flex-wrap gap-2`,
                children: [
                  (0, I.jsxs)(R, {
                    size: `sm`,
                    onClick: () => t(`/g/${l.code}/plan`),
                    children: [`Xem lịch trình `, (0, I.jsx)(ir, { size: 14 })],
                  }),
                  (0, I.jsxs)(R, {
                    size: `sm`,
                    variant: `soft`,
                    onClick: () => {
                      (B.confirm(l.code, null),
                        n(`Đã mở lại bình chọn`, `info`));
                    },
                    children: [
                      (0, I.jsx)(ii, { size: 14 }),
                      ` Mở lại bình chọn`,
                    ],
                  }),
                ],
              }),
              children: `Muốn đổi phương án? Mở lại bình chọn để mọi người chọn lại.`,
            }),
          }),
        (0, I.jsxs)(`section`, {
          className: `card mb-6 p-5`,
          "aria-label": `Kết quả bình chọn`,
          children: [
            (0, I.jsxs)(`div`, {
              className: `flex flex-wrap items-center justify-between gap-2`,
              children: [
                (0, I.jsx)(`h2`, {
                  className: `text-lg font-bold`,
                  children: `Kết quả bình chọn hiện tại`,
                }),
                (0, I.jsxs)(`span`, {
                  className: `text-sm text-ink-500`,
                  children: [
                    g.length,
                    `/`,
                    l.members.length,
                    ` bạn đã bình chọn`,
                  ],
                }),
              ],
            }),
            (0, I.jsx)(`div`, {
              className: `mt-4 space-y-3`,
              children: d.map((e) => {
                let t = Vo[e.strategy],
                  n = f[e.id].length;
                return (0, I.jsxs)(
                  `div`,
                  {
                    className: `grid items-center gap-2 sm:grid-cols-[210px_1fr_auto]`,
                    children: [
                      (0, I.jsxs)(`div`, {
                        className: `min-w-0`,
                        children: [
                          (0, I.jsxs)(ba, {
                            tone: t.tone,
                            children: [`Phương án `, t.letter],
                          }),
                          ` `,
                          (0, I.jsx)(`span`, {
                            className: `ml-1 text-sm font-semibold`,
                            children: t.tag,
                          }),
                        ],
                      }),
                      (0, I.jsx)(`div`, {
                        className: `h-3 overflow-hidden rounded-full bg-ink-100`,
                        children: (0, I.jsx)(`div`, {
                          className: L(
                            `h-full rounded-full transition-all duration-500`,
                            h.includes(e) ? `bg-brand-500` : `bg-ink-300`,
                          ),
                          style: {
                            width: `${l.members.length ? (n / l.members.length) * 100 : 0}%`,
                          },
                        }),
                      }),
                      (0, I.jsx)(T, { it: e }),
                    ],
                  },
                  e.id,
                );
              }),
            }),
            v.length > 0 &&
              (0, I.jsxs)(`p`, {
                className: `mt-4 flex flex-wrap items-center gap-2 text-xs text-ink-500`,
                children: [
                  `Chưa bình chọn: `,
                  v.map((e) =>
                    (0, I.jsxs)(
                      `span`,
                      {
                        className: `inline-flex items-center gap-1 rounded-full bg-ink-50 py-0.5 pl-0.5 pr-2 font-semibold text-ink-700`,
                        children: [
                          (0, I.jsx)(z, {
                            name: e.name,
                            index: l.members.findIndex((t) => t.id === e.id),
                            size: 18,
                          }),
                          e.name,
                        ],
                      },
                      e.id,
                    ),
                  ),
                ],
              }),
            l.members.some((e) => e.isDemo && !l.votes[e.id]) &&
              !l.confirmedId &&
              (0, I.jsx)(`button`, {
                className: `mt-3 text-xs font-semibold text-brand-600 underline underline-offset-2`,
                onClick: () => {
                  (l.members
                    .filter((e) => e.isDemo && !l.votes[e.id])
                    .forEach((e) => {
                      let t = [...d].sort(
                        (t, n) =>
                          (n.compat.perMember.find((t) => t.memberId === e.id)
                            ?.score ?? 0) -
                          (t.compat.perMember.find((t) => t.memberId === e.id)
                            ?.score ?? 0),
                      )[0];
                      B.vote(l.code, e.id, t.id);
                    }),
                    n(
                      `Các bạn mẫu đã bình chọn theo phương án hợp họ nhất`,
                      `info`,
                    ));
                },
                children: `Demo: cho các bạn mẫu tự bình chọn`,
              }),
          ],
        }),
        (0, I.jsx)(WT_VoteTools, { group: l, me: u, toast: n }),
        (0, I.jsx)(WT_RevoteTools, { group: l, toast: n }),
        (0, I.jsx)(`div`, {
          className: `card hidden overflow-hidden md:block`,
          children: (0, I.jsxs)(`table`, {
            className: `w-full table-fixed border-collapse text-sm`,
            children: [
              (0, I.jsx)(`caption`, {
                className: `sr-only`,
                children: `So sánh các phương án lịch trình`,
              }),
              (0, I.jsx)(`thead`, {
                children: (0, I.jsxs)(`tr`, {
                  children: [
                    (0, I.jsx)(`th`, {
                      className: `w-48 bg-ink-50 p-4 text-left align-bottom text-xs font-bold uppercase tracking-wide text-ink-500`,
                      scope: `col`,
                      children: `Tiêu chí`,
                    }),
                    d.map((e) => {
                      let t = Vo[e.strategy];
                      return (0, I.jsxs)(
                        `th`,
                        {
                          scope: `col`,
                          className: L(
                            `p-4 text-left align-top font-normal`,
                            h.includes(e) && h.length === 1 && `bg-brand-50/60`,
                          ),
                          children: [
                            (0, I.jsxs)(ba, {
                              tone: t.tone,
                              children: [`Phương án `, t.letter, ` · `, t.tag],
                            }),
                            (0, I.jsx)(`p`, {
                              className: `mt-2 text-lg font-extrabold leading-tight`,
                              children: e.name,
                            }),
                            (0, I.jsx)(`div`, {
                              className: `mt-3`,
                              children: (0, I.jsx)(w, { it: e }),
                            }),
                          ],
                        },
                        e.id,
                      );
                    }),
                  ],
                }),
              }),
              (0, I.jsxs)(`tbody`, {
                children: [
                  Go.map((e) => {
                    let t = Ko(d, e);
                    return (0, I.jsxs)(
                      `tr`,
                      {
                        className: `border-t border-ink-100`,
                        children: [
                          (0, I.jsx)(`th`, {
                            scope: `row`,
                            className: `bg-ink-50 p-4 text-left text-xs font-semibold text-ink-500`,
                            children: e.label,
                          }),
                          d.map((n) =>
                            (0, I.jsxs)(
                              `td`,
                              {
                                className: L(
                                  `p-4 align-top font-semibold`,
                                  t.has(n.id) && `text-teal-700`,
                                  h.includes(n) &&
                                    h.length === 1 &&
                                    `bg-brand-50/60`,
                                ),
                                children: [
                                  e.key === `compat`
                                    ? (0, I.jsx)(`span`, {
                                        className: `flex items-center gap-2`,
                                        children: (0, I.jsx)(H, {
                                          score: n.compat.score,
                                          size: 44,
                                        }),
                                      })
                                    : e.value(n),
                                  t.has(n.id) &&
                                    (0, I.jsx)(`span`, {
                                      className: `ml-2 rounded-full bg-mint-soft px-2 py-0.5 text-[10px] font-bold text-teal-800`,
                                      children: `Tốt nhất`,
                                    }),
                                ],
                              },
                              n.id,
                            ),
                          ),
                        ],
                      },
                      e.key,
                    );
                  }),
                  (0, I.jsxs)(`tr`, {
                    className: `border-t border-ink-100`,
                    children: [
                      (0, I.jsx)(`th`, {
                        scope: `row`,
                        className: `bg-ink-50 p-4 text-left text-xs font-semibold text-ink-500`,
                        children: `Hợp với từng bạn`,
                      }),
                      d.map((e) =>
                        (0, I.jsx)(
                          `td`,
                          {
                            className: `p-4 align-top`,
                            children: (0, I.jsx)(`div`, {
                              className: `space-y-1.5`,
                              children: e.compat.perMember.map((t) => {
                                let n = l.members.find(
                                  (e) => e.id === t.memberId,
                                );
                                return n
                                  ? (0, I.jsxs)(
                                      `div`,
                                      {
                                        className: `flex items-center gap-2 text-xs`,
                                        children: [
                                          (0, I.jsx)(z, {
                                            name: n.name,
                                            index: l.members.indexOf(n),
                                            size: 20,
                                          }),
                                          (0, I.jsx)(`span`, {
                                            className: `flex-1 truncate font-semibold`,
                                            children: n.name,
                                          }),
                                          (0, I.jsxs)(`span`, {
                                            children: [
                                              t.matchedStops,
                                              `/`,
                                              e.stops.length,
                                              ` điểm`,
                                            ],
                                          }),
                                        ],
                                      },
                                      t.memberId,
                                    )
                                  : null;
                              }),
                            }),
                          },
                          e.id,
                        ),
                      ),
                    ],
                  }),
                  (0, I.jsxs)(`tr`, {
                    className: `border-t border-ink-100`,
                    children: [
                      (0, I.jsx)(`th`, {
                        scope: `row`,
                        className: `bg-ink-50 p-4 text-left align-top text-xs font-semibold text-ink-500`,
                        children: `Đáp ứng cả nhóm`,
                      }),
                      d.map((e) =>
                        (0, I.jsxs)(`td`, {
                          className: `p-4 align-top font-semibold`,
                          children: [WT_meets(e, l).ok, `/`, WT_meets(e, l).total, ` người`],
                        }, e.id),
                      ),
                    ],
                  }),
                  (0, I.jsxs)(`tr`, {
                    className: `border-t border-ink-100`,
                    children: [
                      (0, I.jsx)(`th`, {
                        scope: `row`,
                        className: `bg-ink-50 p-4 text-left align-top text-xs font-semibold text-ink-500`,
                        children: `Di chuyển từ nơi xuất phát (đến điểm đầu)`,
                      }),
                      d.map((e) =>
                        (0, I.jsx)(`td`, {
                          className: `p-4 align-top`,
                          children: (0, I.jsx)(`div`, {
                            className: `space-y-1.5 text-xs`,
                            children: l.members.map((m) => {
                              let t = WT_travel(e, m);
                              return (0, I.jsxs)(`div`, {
                                className: `flex justify-between gap-2`,
                                children: [
                                  (0, I.jsx)(`span`, { className: `truncate font-semibold`, children: m.name }),
                                  (0, I.jsx)(`span`, {
                                    className: `text-ink-500`,
                                    children: t ? `~${t.km.toString().replace(`.`, `,`)} km · ~${t.minutes} phút` : `chưa chọn khu vực`,
                                  }),
                                ],
                              }, m.id);
                            }),
                          }),
                        }, e.id),
                      ),
                    ],
                  }),
                  (0, I.jsxs)(`tr`, {
                    className: `border-t border-ink-100`,
                    children: [
                      (0, I.jsx)(`th`, {
                        scope: `row`,
                        className: `bg-ink-50 p-4 text-left align-top text-xs font-semibold text-ink-500`,
                        children: `Chi tiết lịch trình`,
                      }),
                      d.map((e) =>
                        (0, I.jsxs)(
                          `td`,
                          {
                            className: `p-4 align-top`,
                            children: [
                              (0, I.jsxs)(`button`, {
                                className: `btn-soft btn-sm`,
                                "aria-expanded": r === e.id,
                                onClick: () => i(r === e.id ? null : e.id),
                                children: [
                                  r === e.id ? `Ẩn` : `Xem chi tiết`,
                                  ` `,
                                  (0, I.jsx)(gr, {
                                    size: 14,
                                    className: L(
                                      `transition`,
                                      r === e.id && `rotate-180`,
                                    ),
                                  }),
                                ],
                              }),
                              r === e.id &&
                                (0, I.jsx)(`div`, {
                                  className: `pop-in mt-3 rounded-2xl border border-ink-100 p-3`,
                                  children: (0, I.jsx)(U, { it: e }),
                                }),
                            ],
                          },
                          e.id,
                        ),
                      ),
                    ],
                  }),
                  (0, I.jsxs)(`tr`, {
                    className: `border-t border-ink-100`,
                    children: [
                      (0, I.jsx)(`th`, {
                        scope: `row`,
                        className: `bg-ink-50 p-4 text-left text-xs font-semibold text-ink-500`,
                        children: `Vì sao gợi ý`,
                      }),
                      d.map((e) =>
                        (0, I.jsx)(
                          `td`,
                          {
                            className: `p-4 align-top text-xs text-ink-700`,
                            children: (0, I.jsx)(`ul`, {
                              className: `space-y-1`,
                              children: e.reasons
                                .slice(0, 3)
                                .map((e) =>
                                  (0, I.jsxs)(`li`, { children: [`• `, e] }, e),
                                ),
                            }),
                          },
                          e.id,
                        ),
                      ),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, I.jsx)(`div`, {
          className: `space-y-4 md:hidden`,
          children: d.map((e) => {
            let t = Vo[e.strategy];
            return (0, I.jsxs)(
              `article`,
              {
                className: L(
                  `card p-5`,
                  h.includes(e) && h.length === 1 && `ring-2 ring-brand-500`,
                ),
                children: [
                  (0, I.jsxs)(`div`, {
                    className: `flex items-start justify-between gap-3`,
                    children: [
                      (0, I.jsxs)(`div`, {
                        children: [
                          (0, I.jsxs)(ba, {
                            tone: t.tone,
                            children: [`Phương án `, t.letter, ` · `, t.tag],
                          }),
                          (0, I.jsx)(`h3`, {
                            className: `mt-2 text-lg font-extrabold leading-tight`,
                            children: e.name,
                          }),
                        ],
                      }),
                      (0, I.jsx)(H, { score: e.compat.score, size: 56 }),
                    ],
                  }),
                  (0, I.jsx)(`dl`, {
                    className: `mt-4 divide-y divide-ink-100 text-sm`,
                    children: Go.filter((e) => e.key !== `compat`).map((t) => {
                      let n = Ko(d, t);
                      return (0, I.jsxs)(
                        `div`,
                        {
                          className: `flex justify-between gap-4 py-2`,
                          children: [
                            (0, I.jsx)(`dt`, {
                              className: `text-ink-500`,
                              children: t.label,
                            }),
                            (0, I.jsxs)(`dd`, {
                              className: L(
                                `text-right font-semibold`,
                                n.has(e.id) && `text-teal-700`,
                              ),
                              children: [t.value(e), n.has(e.id) && ` ✓`],
                            }),
                          ],
                        },
                        t.key,
                      );
                    }),
                  }),
                  (0, I.jsx)(`div`, {
                    className: `mt-3`,
                    children: (0, I.jsx)(Ho, { it: e, group: l }),
                  }),
                  (0, I.jsxs)(`button`, {
                    className: `btn-soft btn-sm mt-3`,
                    "aria-expanded": r === e.id,
                    onClick: () => i(r === e.id ? null : e.id),
                    children: [
                      r === e.id ? `Ẩn chi tiết` : `Xem chi tiết`,
                      ` `,
                      (0, I.jsx)(gr, {
                        size: 14,
                        className: L(`transition`, r === e.id && `rotate-180`),
                      }),
                    ],
                  }),
                  r === e.id &&
                    (0, I.jsx)(`div`, {
                      className: `pop-in mt-3 rounded-2xl border border-ink-100 p-3`,
                      children: (0, I.jsx)(U, { it: e }),
                    }),
                  (0, I.jsx)(`div`, {
                    className: `mt-4 flex items-center justify-between gap-3`,
                    children: (0, I.jsx)(T, { it: e }),
                  }),
                  (0, I.jsx)(`div`, {
                    className: `mt-3`,
                    children: (0, I.jsx)(w, { it: e }),
                  }),
                ],
              },
              e.id,
            );
          }),
        }),
        !b &&
          (0, I.jsxs)(`section`, {
            className: `card mt-8 p-5 md:p-6`,
            "aria-labelledby": `cf`,
            children: [
              (0, I.jsxs)(`h2`, {
                id: `cf`,
                className: `flex items-center gap-2 text-lg font-bold`,
                children: [
                  (0, I.jsx)(oi, { size: 18, className: `text-brand-500` }),
                  ` Chốt lịch trình`,
                ],
              }),
              (0, I.jsx)(`p`, {
                className: `mt-1 text-sm text-ink-500`,
                children:
                  h.length === 1
                    ? (0, I.jsxs)(I.Fragment, {
                        children: [
                          `Phương án đang dẫn đầu: `,
                          (0, I.jsx)(`strong`, { children: h[0].name }),
                          `.`,
                        ],
                      })
                    : h.length > 1
                      ? `Đang đồng hạng, hãy cùng chọn một phương án để chốt.`
                      : `Chưa có phiếu nào. Hãy bình chọn trước khi chốt.`,
              }),
              (0, I.jsx)(`div`, {
                className: `mt-4 flex flex-wrap gap-2`,
                children: d.map((e) =>
                  (0, I.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      "aria-pressed": x === e.id,
                      onClick: () => {
                        (o(e.id), c(!1));
                      },
                      className: `chip`,
                      children: [
                        `Phương án `,
                        Vo[e.strategy].letter,
                        ` · `,
                        Vo[e.strategy].tag,
                        ` (`,
                        f[e.id].length,
                        ` phiếu)`,
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
              s &&
                (0, I.jsx)(`div`, {
                  className: `mt-4`,
                  children: (0, I.jsxs)(_a, {
                    kind: `warn`,
                    title: `Còn ${v.length} bạn chưa bình chọn`,
                    action: (0, I.jsxs)(`div`, {
                      className: `flex gap-2`,
                      children: [
                        (0, I.jsx)(R, {
                          size: `sm`,
                          variant: `soft`,
                          onClick: () => c(!1),
                          children: `Chờ thêm`,
                        }),
                        (0, I.jsx)(R, {
                          size: `sm`,
                          onClick: () => C(!0),
                          children: `Vẫn chốt`,
                        }),
                      ],
                    }),
                    children: [
                      v.map((e) => e.name).join(`, `),
                      ` chưa có ý kiến. Chốt bây giờ có thể chưa công bằng.`,
                    ],
                  }),
                }),
              (0, I.jsxs)(`div`, {
                className: `mt-5 flex flex-wrap items-center gap-3`,
                children: [
                  (0, I.jsxs)(R, {
                    size: `lg`,
                    disabled: !x,
                    onClick: () => C(),
                    children: [
                      `Chốt phương án này `,
                      (0, I.jsx)(ir, { size: 18 }),
                    ],
                  }),
                  (0, I.jsxs)(M, {
                    to: `/g/${l.code}/recommend`,
                    className: `btn-ghost`,
                    children: [(0, I.jsx)(wi, { size: 16 }), ` Quay lại gợi ý`],
                  }),
                ],
              }),
              !x &&
                (0, I.jsx)(`p`, {
                  className: `mt-2 text-xs text-ink-500`,
                  children: `Chọn một phương án ở trên để chốt.`,
                }),
            ],
          }),
      ],
    });
  }
  var bs = (e) =>
      `https://www.google.com/maps/search/?api=1&query=${e.lat},${e.lng}`,
    xs = (e, t) =>
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${e.searchHint} ${t} TP.HCM`)}`;
  function Ss(e) {
    if (e.length < 2) return null;
    let t = (e) => `${e.lat},${e.lng}`,
      n = t(e[0]),
      r = t(e[e.length - 1]),
      i = e.slice(1, -1).map(t).join(`|`);
    return `https://www.google.com/maps/dir/?api=1&origin=${n}&destination=${r}${i ? `&waypoints=${encodeURIComponent(i)}` : ``}&travelmode=two-wheeler`;
  }
  var Cs = (e, t) =>
    `https://www.google.com/maps/dir/?api=1&origin=${e.lat},${e.lng}&destination=${t.lat},${t.lng}&travelmode=two-wheeler`;
  function ws({ it: e, dests: t }) {
    let n = t.map((e) => e.lat),
      r = t.map((e) => e.lng),
      i = (Math.min(...n) + Math.max(...n)) / 2,
      a = Math.cos((i * Math.PI) / 180),
      o = (Math.max(...r) - Math.min(...r)) * a,
      s = Math.max(...n) - Math.min(...n),
      c = 0.012;
    ((o = Math.max(o, c)), (s = Math.max(s, c * 0.6)));
    let l = Math.min(500 / o, 240 / s),
      u = ((Math.min(...r) + Math.max(...r)) / 2) * a,
      d = (Math.min(...n) + Math.max(...n)) / 2,
      f = t.map((e) => ({
        x: 320 + (e.lng * a - u) * l,
        y: 190 - (e.lat - d) * l,
      })),
      p = Ss(t),
      m = f
        .map((e, t) => `${t ? `L` : `M`}${e.x.toFixed(1)},${e.y.toFixed(1)}`)
        .join(` `);
    return (0, I.jsxs)(`div`, {
      children: [
        (0, I.jsx)(`div`, {
          className: `overflow-hidden rounded-3xl border border-ink-100 bg-[#f3f1ea]`,
          children: (0, I.jsxs)(`svg`, {
            viewBox: `0 0 640 380`,
            className: `block h-auto w-full`,
            role: `img`,
            "aria-label": `Sơ đồ tuyến đi qua ${t.length} điểm`,
            children: [
              (0, I.jsx)(`defs`, {
                children: (0, I.jsx)(`pattern`, {
                  id: `grid`,
                  width: `40`,
                  height: `40`,
                  patternUnits: `userSpaceOnUse`,
                  children: (0, I.jsx)(`path`, {
                    d: `M40 0H0V40`,
                    fill: `none`,
                    stroke: `#e4e0d3`,
                    strokeWidth: `1`,
                  }),
                }),
              }),
              (0, I.jsx)(`rect`, {
                width: 640,
                height: 380,
                fill: `url(#grid)`,
              }),
              (0, I.jsx)(`path`, {
                d: m,
                fill: `none`,
                stroke: `#fff`,
                strokeWidth: `10`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
              }),
              (0, I.jsx)(`path`, {
                d: m,
                fill: `none`,
                stroke: `#FF5A4D`,
                strokeWidth: `4`,
                strokeLinecap: `round`,
                strokeLinejoin: `round`,
                strokeDasharray: `2 9`,
              }),
              f.slice(1).map((t, n) => {
                let r = f[n],
                  i = e.stops[n + 1].leg;
                if (!i) return null;
                let a = (r.x + t.x) / 2,
                  o = (r.y + t.y) / 2,
                  s = `${i.km.toString().replace(`.`, `,`)} km · ${i.minutes}'`;
                return (0, I.jsxs)(
                  `g`,
                  {
                    children: [
                      (0, I.jsx)(`rect`, {
                        x: a - 40,
                        y: o - 11,
                        width: `80`,
                        height: `22`,
                        rx: `11`,
                        fill: `#1d1b3a`,
                        opacity: `0.88`,
                      }),
                      (0, I.jsx)(`text`, {
                        x: a,
                        y: o + 4,
                        textAnchor: `middle`,
                        fontSize: `11`,
                        fontWeight: `600`,
                        fill: `#fff`,
                        children: s,
                      }),
                    ],
                  },
                  n,
                );
              }),
              f.map((e, n) => {
                let r = n % 2 == 0,
                  i =
                    t[n].name.length > 24
                      ? `${t[n].name.slice(0, 23)}…`
                      : t[n].name,
                  a = Math.min(190, i.length * 7 + 16),
                  o = Math.max(6, Math.min(640 - a - 6, e.x - a / 2)),
                  s = r ? e.y - 54 : e.y + 26;
                return (0, I.jsxs)(
                  `g`,
                  {
                    children: [
                      (0, I.jsx)(`circle`, {
                        cx: e.x,
                        cy: e.y,
                        r: `17`,
                        fill: `#FF5A4D`,
                        stroke: `#fff`,
                        strokeWidth: `4`,
                      }),
                      (0, I.jsx)(`text`, {
                        x: e.x,
                        y: e.y + 5,
                        textAnchor: `middle`,
                        fontSize: `14`,
                        fontWeight: `800`,
                        fill: `#fff`,
                        children: n + 1,
                      }),
                      (0, I.jsx)(`rect`, {
                        x: o,
                        y: s,
                        width: a,
                        height: `26`,
                        rx: `13`,
                        fill: `#fff`,
                        stroke: `#ecebf5`,
                      }),
                      (0, I.jsx)(`text`, {
                        x: o + a / 2,
                        y: s + 17,
                        textAnchor: `middle`,
                        fontSize: `12`,
                        fontWeight: `600`,
                        fill: `#1d1b3a`,
                        children: i,
                      }),
                    ],
                  },
                  t[n].id,
                );
              }),
            ],
          }),
        }),
        (0, I.jsx)(`p`, {
          className: `mt-2 text-xs text-ink-500`,
          children: WT_realData() ? `Sơ đồ minh hoạ theo toạ độ team nhập; khoảng cách và thời gian là ước tính, không phải chỉ đường thực tế.` : `Sơ đồ minh hoạ theo vị trí gần đúng của dữ liệu mẫu; khoảng cách và thời gian là ước tính, không phải chỉ đường thực tế.`,
        }),
        (0, I.jsxs)(`div`, {
          className: `no-print mt-3 flex flex-wrap gap-2`,
          children: [
            p &&
              (0, I.jsxs)(`a`, {
                className: `btn-dark btn-sm`,
                href: p,
                target: `_blank`,
                rel: `noopener noreferrer`,
                children: [
                  (0, I.jsx)(Hr, { size: 14 }),
                  ` Mở chỉ đường trên Google Maps`,
                ],
              }),
            t.map((e, t) =>
              (0, I.jsxs)(
                `a`,
                {
                  className: `btn-soft btn-sm`,
                  href: bs(e),
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  children: [t + 1, `. Xem vị trí`],
                },
                e.id,
              ),
            ),
          ],
        }),
      ],
    });
  }
  function Ts(e, t, n) {
    return [
      `🎟️ ${e.name} — ${t.name}`,
      `📅 ${Za(e.generation?.date ?? ``)} (${qa(t.stops[0].arriveMin)} – ${qa(t.stops[t.stops.length - 1].departMin)})`,
      `👥 ${e.members.map((e) => e.name).join(`, `)}`,
      ``,
      ...t.stops.map(
        (e, t) =>
          `${t + 1}. ${qa(e.arriveMin)}–${qa(e.departMin)} ${n[t].name} (${_o(n[t].district)}) ~${V(e.costMid)}/người${e.leg ? ` · đi từ điểm trước ~${e.leg.minutes} phút` : ``}`,
      ),
      ``,
      `💸 Ước tính ~${V(t.totals.perPerson)}/người · ~${V(t.totals.group)} cả nhóm (ước tính, chưa xác minh)`,
      Ss(n) ? `🗺️ Chỉ đường: ${Ss(n)}` : ``,
    ].filter((e) => e !== void 0).join(`
`);
  }
  function Es() {
    let e = ts(!1),
      t = _t(),
      n = pa(),
      [r, i] = (0, _.useState)(!1);
    if (e.status !== `ready`)
      return (0, I.jsx)(I.Fragment, { children: e.node });
    let { group: a } = e,
      o = a.itineraries.find((e) => e.id === a.confirmedId);
    if (!o)
      return (0, I.jsx)(`div`, {
        className: `px-4 py-16`,
        children: (0, I.jsx)(xa, {
          icon: (0, I.jsx)(Hi, { size: 32 }),
          title: `Nhóm chưa chốt lịch trình`,
          action: (0, I.jsx)(M, {
            to: `/g/${a.code}/compare`,
            className: `btn-primary`,
            children: a.itineraries.length ? `Đi tới bình chọn` : `Tạo gợi ý`,
          }),
          children: `Lịch trình sẵn sàng đi sẽ hiện ở đây sau khi cả nhóm bình chọn và chốt một phương án.`,
        }),
      });
    let s = o.stops.map((e) => wo(e.destId)),
      c = Vo[o.strategy],
      l = Fa(a.code),
      u = o.totals,
      d = Za(a.generation?.date ?? ``),
      f = Ss(s),
      p = async () =>
        (await ns(l))
          ? n(`Đã sao chép liên kết lịch trình`)
          : n(`Không sao chép được, hãy sao chép thủ công`, `error`),
      m = async () =>
        (await ns(Ts(a, o, s)))
          ? n(`Đã sao chép lịch trình dạng văn bản, dán vào chat nhé`)
          : n(`Không sao chép được`, `error`),
      h = async () => {
        i(!0);
        let e = await rs({
          title: `${a.name}: ${o.name}`,
          text: Ts(a, o, s),
          url: l,
        });
        (i(!1),
          e === `copied` && n(`Đã sao chép nội dung để bạn dán vào chat`),
          e === `failed` && n(`Không chia sẻ được`, `error`));
      },
      g = `btn-soft btn-sm`;
    return (0, I.jsxs)(`div`, {
      className: `mx-auto max-w-5xl px-4 py-8 pb-28 md:px-6 md:py-12 md:pb-12`,
      children: [
        (0, I.jsx)(Ba, { code: a.code, current: 5, reached: ss(a) }),
        (0, I.jsxs)(`header`, {
          className: `card relative overflow-hidden bg-ink-900 p-6 text-white md:p-8`,
          children: [
            (0, I.jsx)(`div`, {
              className: `pointer-events-none absolute -right-8 -top-8 h-40 w-40 rounded-full bg-brand-500/30`,
            }),
            (0, I.jsx)(`div`, {
              className: `pointer-events-none absolute -bottom-10 right-24 h-28 w-28 rounded-full bg-sun/25`,
            }),
            (0, I.jsxs)(`div`, {
              className: `relative`,
              children: [
                (0, I.jsxs)(`div`, {
                  className: `flex flex-wrap items-center gap-2`,
                  children: [
                    (0, I.jsxs)(ba, {
                      tone: c.tone,
                      children: [
                        (0, I.jsx)(Hi, { size: 12 }),
                        ` Lịch trình sẵn sàng đi`,
                      ],
                    }),
                    (0, I.jsx)(`span`, {
                      className: `text-xs text-ink-300`,
                      children: a.name,
                    }),
                  ],
                }),
                (0, I.jsx)(`h1`, {
                  className: `mt-3 text-3xl font-extrabold leading-tight md:text-4xl`,
                  children: o.name,
                }),
                (0, I.jsx)(`p`, {
                  className: `mt-1 max-w-xl text-ink-300`,
                  children: o.theme,
                }),
                (0, I.jsxs)(`div`, {
                  className: `mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm`,
                  children: [
                    (0, I.jsxs)(`span`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, I.jsx)(ur, { size: 16, className: `text-sun` }),
                        d,
                      ],
                    }),
                    (0, I.jsxs)(`span`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, I.jsx)(Mr, { size: 16, className: `text-sun` }),
                        qa(o.stops[0].arriveMin),
                        ` – `,
                        qa(o.stops[o.stops.length - 1].departMin),
                        ` (`,
                        Ya(u.durationMin),
                        `)`,
                      ],
                    }),
                    (0, I.jsxs)(`span`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, I.jsx)(ci, { size: 16, className: `text-sun` }),
                        o.stops.length,
                        ` điểm · `,
                        o.areaLabel,
                      ],
                    }),
                  ],
                }),
                (0, I.jsxs)(`div`, {
                  className: `mt-5 flex items-center gap-3`,
                  children: [
                    (0, I.jsx)(`div`, {
                      className: `flex -space-x-2`,
                      children: a.members.map((e, t) =>
                        (0, I.jsx)(
                          z,
                          { name: e.name, index: t, size: 34, ring: !0 },
                          e.id,
                        ),
                      ),
                    }),
                    (0, I.jsx)(`p`, {
                      className: `text-sm text-ink-300`,
                      children: a.members.map((e) => e.name).join(`, `),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `no-print mt-4 flex flex-wrap gap-2`,
          children: [
            (0, I.jsxs)(`button`, {
              className: g,
              onClick: p,
              children: [(0, I.jsx)(Rr, { size: 14 }), ` Sao chép link`],
            }),
            (0, I.jsxs)(`button`, {
              className: g,
              onClick: m,
              children: [
                (0, I.jsx)(Er, { size: 14 }),
                ` Sao chép dạng văn bản`,
              ],
            }),
            (0, I.jsxs)(`button`, {
              className: g,
              onClick: h,
              disabled: r,
              children: [(0, I.jsx)(Mi, { size: 14 }), ` Chia sẻ`],
            }),
            (0, I.jsxs)(`button`, {
              className: g,
              onClick: () => window.print(),
              children: [(0, I.jsx)(bi, { size: 14 }), ` In / Lưu PDF`],
            }),
            (0, I.jsxs)(`button`, {
              className: g,
              onClick: () => t(`/g/${a.code}/compare`),
              children: [(0, I.jsx)(nr, { size: 14 }), ` Quay lại so sánh`],
            }),
          ],
        }),
        (0, I.jsx)(`div`, {
          className: `mt-4`,
          children: (0, I.jsx)(_a, {
            kind: `info`,
            title: `Lưu ý trước khi đi`,
            children: (0, I.jsxs)(`span`, {
              children: [
                `Địa điểm trong bản test là `,
                (0, I.jsx)(`strong`, { children: WT_realData() ? `dữ liệu do team nhập` : `dữ liệu minh hoạ` }),
                WT_realData() ? `, có thể đã thay đổi; chi phí, quãng đường và thời gian di chuyển là ` : `, chưa xác minh; chi phí, quãng đường và thời gian di chuyển là `,
                (0, I.jsx)(`strong`, { children: `ước tính` }),
                WT_realData() ? `. Giá và giờ mở cửa có thể khác thực tế, hãy kiểm tra lại trên Google Maps hoặc fanpage của quán trước khi đi.` : `. Giờ mở cửa chưa được xác minh, hãy kiểm tra trên Google Maps hoặc fanpage của quán trước khi đi.`,
              ],
            }),
          }),
        }),
        (0, I.jsxs)(`section`, {
          className: `mt-6 grid grid-cols-2 gap-3 md:grid-cols-4`,
          "aria-label": `Tổng quan chi phí`,
          children: [
            [
              {
                i: (0, I.jsx)(ca, { size: 16 }),
                l: `Mỗi người (ước tính)`,
                v: `~${V(u.perPerson)}`,
                s: `tối đa ~${V(u.perPersonMax)}`,
              },
              {
                i: (0, I.jsx)(na, { size: 16 }),
                l: `Cả nhóm (${a.members.length} người)`,
                v: `~${V(u.group)}`,
                s: `ước tính`,
              },
              {
                i: (0, I.jsx)(mi, { size: 16 }),
                l: `Di chuyển`,
                v: `~${Math.round(u.travelMin)} phút`,
                s: `${u.travelKm.toString().replace(`.`, `,`)} km · ~${V(u.transportPerPerson)}`,
              },
            ].map((e) =>
              (0, I.jsxs)(
                `div`,
                {
                  className: `card p-4`,
                  children: [
                    (0, I.jsxs)(`p`, {
                      className: `flex items-center gap-1.5 text-xs font-semibold text-ink-500`,
                      children: [e.i, e.l],
                    }),
                    (0, I.jsx)(`p`, {
                      className: `mt-1 text-xl font-extrabold`,
                      children: e.v,
                    }),
                    (0, I.jsx)(`p`, {
                      className: `text-xs text-ink-500`,
                      children: e.s,
                    }),
                  ],
                },
                e.l,
              ),
            ),
            (0, I.jsxs)(`div`, {
              className: `card flex items-center gap-3 p-4`,
              children: [
                (0, I.jsx)(H, { score: o.compat.score, size: 52 }),
                (0, I.jsx)(`p`, {
                  className: `text-xs font-semibold text-ink-500`,
                  children: `Độ hợp sở thích của nhóm`,
                }),
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`section`, {
          className: `mt-8`,
          "aria-labelledby": `map-h`,
          children: [
            (0, I.jsx)(`h2`, {
              id: `map-h`,
              className: `mb-3 text-xl font-extrabold`,
              children: `Bản đồ tuyến đi`,
            }),
            (0, I.jsx)(ws, { it: o, dests: s }),
          ],
        }),
        (0, I.jsxs)(`section`, {
          className: `mt-8`,
          "aria-labelledby": `sched`,
          children: [
            (0, I.jsx)(`h2`, {
              id: `sched`,
              className: `mb-4 text-xl font-extrabold`,
              children: `Lịch trình chi tiết`,
            }),
            (0, I.jsx)(`ol`, {
              className: `space-y-0`,
              children: o.stops.map((e, t) => {
                let n = s[t];
                return (0, I.jsxs)(
                  `li`,
                  {
                    children: [
                      e.leg &&
                        (0, I.jsxs)(`div`, {
                          className: `ml-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-l-2 border-dashed border-ink-300 py-3 pl-6 text-sm text-ink-500`,
                          children: [
                            e.leg.mode === `walk`
                              ? (0, I.jsx)(Kr, { size: 16 })
                              : (0, I.jsx)(cr, { size: 16 }),
                            (0, I.jsxs)(`span`, {
                              children: [
                                e.leg.mode === `walk`
                                  ? `Đi bộ`
                                  : `Xe máy / xe công nghệ`,
                                ` ~`,
                                e.leg.km.toString().replace(`.`, `,`),
                                ` km · ~`,
                                e.leg.minutes,
                                ` phút`,
                                e.leg.cost ? ` · ~${V(e.leg.cost)}/người` : ``,
                                ` (ước tính)`,
                              ],
                            }),
                            (0, I.jsxs)(`a`, {
                              className: `no-print inline-flex items-center gap-1 font-semibold text-brand-600 hover:underline`,
                              href: Cs(s[t - 1], n),
                              target: `_blank`,
                              rel: `noopener noreferrer`,
                              children: [
                                `Chỉ đường `,
                                (0, I.jsx)(Hr, { size: 12 }),
                              ],
                            }),
                          ],
                        }),
                      (0, I.jsxs)(`article`, {
                        className: `card flex flex-col overflow-hidden sm:flex-row`,
                        children: [
                          (0, I.jsx)(Bo, {
                            category: n.category,
                            className: `h-28 sm:h-auto sm:w-40 sm:shrink-0`,
                            size: `lg`,
                          }),
                          (0, I.jsxs)(`div`, {
                            className: `flex-1 p-5`,
                            children: [
                              (0, I.jsxs)(`div`, {
                                className: `flex flex-wrap items-center gap-2`,
                                children: [
                                  (0, I.jsx)(`span`, {
                                    className: `flex h-8 w-8 items-center justify-center rounded-full bg-brand-500 text-sm font-extrabold text-white`,
                                    children: t + 1,
                                  }),
                                  (0, I.jsxs)(`p`, {
                                    className: `text-sm font-bold text-brand-600`,
                                    children: [
                                      `Đến `,
                                      qa(e.arriveMin),
                                      ` · Rời `,
                                      qa(e.departMin),
                                    ],
                                  }),
                                  (0, I.jsxs)(`span`, {
                                    className: `text-xs text-ink-500`,
                                    children: [`(`, Ya(e.stayMin), `)`],
                                  }),
                                ],
                              }),
                              (0, I.jsx)(`h3`, {
                                className: `mt-2 text-lg font-extrabold leading-snug`,
                                children: n.name,
                              }),
                              (0, I.jsxs)(`p`, {
                                className: `text-xs text-ink-500`,
                                children: [
                                  mo(n.category),
                                  ` · `,
                                  _o(n.district),
                                  ` · vị trí gần đúng `,
                                  (0, I.jsx)(WT_SrcBadge, { n }),
                                ],
                              }),
                              (0, I.jsx)(`p`, {
                                className: `mt-2 text-sm text-ink-700`,
                                children: n.description,
                              }),
                              (0, I.jsx)(`div`, {
                                className: `mt-3 flex flex-wrap gap-1.5`,
                                children: n.suitability.map((e) =>
                                  (0, I.jsx)(
                                    `span`,
                                    {
                                      className: `rounded-full bg-ink-50 px-2.5 py-1 text-[11px] font-semibold text-ink-700`,
                                      children: e,
                                    },
                                    e,
                                  ),
                                ),
                              }),
                              (0, I.jsxs)(`dl`, {
                                className: `mt-3 grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2`,
                                children: [
                                  (0, I.jsxs)(`div`, {
                                    className: `flex justify-between gap-3`,
                                    children: [
                                      (0, I.jsx)(`dt`, {
                                        className: `text-ink-500`,
                                        children: `Chi tiêu ước tính`,
                                      }),
                                      (0, I.jsxs)(`dd`, {
                                        className: `font-semibold`,
                                        children: [
                                          n.priceMax === 0
                                            ? `Miễn phí`
                                            : `${V(n.priceMin)} – ${V(n.priceMax)}`,
                                          `/người`,
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, I.jsxs)(`div`, {
                                    className: `flex justify-between gap-3`,
                                    children: [
                                      (0, I.jsx)(`dt`, {
                                        className: `text-ink-500`,
                                        children: `Giờ mở cửa`,
                                      }),
                                      (0, I.jsx)(`dd`, {
                                        className: `font-semibold text-ink-500`,
                                        children:
                                          n.openingHours ?? `Chưa xác minh`,
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, I.jsxs)(`div`, {
                                className: `no-print mt-4 flex flex-wrap gap-2`,
                                children: [
                                  (0, I.jsxs)(`a`, {
                                    className: `btn-dark btn-sm`,
                                    href: bs(n),
                                    target: `_blank`,
                                    rel: `noopener noreferrer`,
                                    children: [
                                      (0, I.jsx)(ci, { size: 14 }),
                                      ` Xem vị trí`,
                                    ],
                                  }),
                                  (0, I.jsxs)(`a`, {
                                    className: `btn-soft btn-sm`,
                                    href: xs(n, _o(n.district)),
                                    target: `_blank`,
                                    rel: `noopener noreferrer`,
                                    children: [
                                      (0, I.jsx)(Hr, { size: 14 }),
                                      ` Tìm địa điểm thật trên Google Maps`,
                                    ],
                                  }),
                                  n.website &&
                                    (0, I.jsxs)(`a`, {
                                      className: `btn-soft btn-sm`,
                                      href: n.website,
                                      target: `_blank`,
                                      rel: `noopener noreferrer`,
                                      children: [
                                        (0, I.jsx)(Hr, { size: 14 }),
                                        ` Website`,
                                      ],
                                    }),
                                  n.bookingUrl &&
                                    (0, I.jsxs)(`a`, {
                                      className: `btn-soft btn-sm`,
                                      href: n.bookingUrl,
                                      target: `_blank`,
                                      rel: `noopener noreferrer`,
                                      children: [
                                        (0, I.jsx)(Hr, { size: 14 }),
                                        ` Đặt chỗ (liên kết ngoài)`,
                                      ],
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  },
                  n.id,
                );
              }),
            }),
          ],
        }),
        (0, I.jsxs)(`section`, {
          className: `mt-8`,
          "aria-labelledby": `bud`,
          children: [
            (0, I.jsx)(`h2`, {
              id: `bud`,
              className: `mb-3 text-xl font-extrabold`,
              children: `Bảng chi phí ước tính`,
            }),
            (0, I.jsx)(`div`, {
              className: `card overflow-x-auto`,
              children: (0, I.jsxs)(`table`, {
                className: `w-full min-w-[480px] text-sm`,
                children: [
                  (0, I.jsx)(`thead`, {
                    children: (0, I.jsxs)(`tr`, {
                      className: `bg-ink-50 text-left text-xs font-bold uppercase tracking-wide text-ink-500`,
                      children: [
                        (0, I.jsx)(`th`, {
                          className: `p-3`,
                          children: `Khoản`,
                        }),
                        (0, I.jsx)(`th`, {
                          className: `p-3 text-right`,
                          children: `Mỗi người`,
                        }),
                        (0, I.jsx)(`th`, {
                          className: `p-3 text-right`,
                          children: `Khoảng dao động`,
                        }),
                        (0, I.jsxs)(`th`, {
                          className: `p-3 text-right`,
                          children: [`Cả nhóm (`, a.members.length, `)`],
                        }),
                      ],
                    }),
                  }),
                  (0, I.jsxs)(`tbody`, {
                    children: [
                      o.stops.map((e, t) =>
                        (0, I.jsxs)(
                          `tr`,
                          {
                            className: `border-t border-ink-100`,
                            children: [
                              (0, I.jsxs)(`td`, {
                                className: `p-3 font-medium`,
                                children: [t + 1, `. `, s[t].name],
                              }),
                              (0, I.jsx)(`td`, {
                                className: `p-3 text-right font-semibold`,
                                children: V(e.costMid),
                              }),
                              (0, I.jsxs)(`td`, {
                                className: `p-3 text-right text-ink-500`,
                                children: [V(e.costMin), ` – `, V(e.costMax)],
                              }),
                              (0, I.jsx)(`td`, {
                                className: `p-3 text-right`,
                                children: V(e.costMid * a.members.length),
                              }),
                            ],
                          },
                          e.destId,
                        ),
                      ),
                      (0, I.jsxs)(`tr`, {
                        className: `border-t border-ink-100`,
                        children: [
                          (0, I.jsx)(`td`, {
                            className: `p-3 font-medium`,
                            children: `Di chuyển giữa các điểm`,
                          }),
                          (0, I.jsx)(`td`, {
                            className: `p-3 text-right font-semibold`,
                            children: V(u.transportPerPerson),
                          }),
                          (0, I.jsx)(`td`, {
                            className: `p-3 text-right text-ink-500`,
                            children: `ước tính`,
                          }),
                          (0, I.jsx)(`td`, {
                            className: `p-3 text-right`,
                            children: V(
                              u.transportPerPerson * a.members.length,
                            ),
                          }),
                        ],
                      }),
                      (0, I.jsxs)(`tr`, {
                        className: `border-t-2 border-ink-900 bg-brand-50 font-extrabold`,
                        children: [
                          (0, I.jsx)(`td`, {
                            className: `p-3`,
                            children: `Tổng ước tính`,
                          }),
                          (0, I.jsx)(`td`, {
                            className: `p-3 text-right`,
                            children: V(u.perPerson),
                          }),
                          (0, I.jsxs)(`td`, {
                            className: `p-3 text-right text-xs font-semibold text-ink-500`,
                            children: [`tối đa ~`, V(u.perPersonMax)],
                          }),
                          (0, I.jsx)(`td`, {
                            className: `p-3 text-right`,
                            children: V(u.group),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
            (0, I.jsxs)(`p`, {
              className: `mt-2 flex items-start gap-1.5 text-xs text-ink-500`,
              children: [
                (0, I.jsx)(Xr, { size: 14, className: `mt-0.5 shrink-0` }),
                WT_realData() ? `Chi phí lấy mức trung bình của khoảng giá team ghi nhận. Tiền di chuyển ước tính ~3.500đ/km/người nếu đi xe máy hoặc xe công nghệ chia sẻ. Đây không phải giá thực tế.` : `Chi phí lấy mức trung bình của khoảng giá minh hoạ. Tiền di chuyển ước tính ~3.500đ/km/người nếu đi xe máy hoặc xe công nghệ chia sẻ. Đây không phải giá thực tế.`,
              ],
            }),
          ],
        }),
        (0, I.jsxs)(`div`, {
          className: `no-print mt-8 flex flex-wrap gap-3`,
          children: [
            (0, I.jsxs)(M, {
              to: `/g/${a.code}/compare`,
              className: `btn-soft`,
              children: [
                (0, I.jsx)(nr, { size: 16 }),
                ` Quay lại so sánh phương án`,
              ],
            }),
            (0, I.jsx)(M, {
              to: `/start`,
              className: `btn-ghost`,
              children: `Tạo nhóm mới`,
            }),
          ],
        }),
        (0, I.jsx)(`div`, {
          className: `no-print fixed inset-x-0 bottom-0 z-40 border-t border-ink-100 bg-white/95 p-3 backdrop-blur md:hidden`,
          children: (0, I.jsxs)(`div`, {
            className: `mx-auto flex max-w-md gap-2`,
            children: [
              f &&
                (0, I.jsxs)(`a`, {
                  className: `btn-primary flex-1`,
                  href: f,
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  children: [
                    (0, I.jsx)(mi, { size: 16 }),
                    ` Chỉ đường cả tuyến`,
                  ],
                }),
              (0, I.jsx)(`button`, {
                className: `btn-dark`,
                onClick: h,
                "aria-label": `Chia sẻ lịch trình`,
                children: (0, I.jsx)(Mi, { size: 16 }),
              }),
            ],
          }),
        }),
      ],
    });
  }
  function Ds() {
    return (0, I.jsx)(`div`, {
      className: `px-4 py-20`,
      children: (0, I.jsx)(xa, {
        icon: (0, I.jsx)(Ir, { size: 32 }),
        title: `Không tìm thấy trang này`,
        action: (0, I.jsx)(M, {
          to: `/`,
          className: `btn-primary`,
          children: `Về trang chủ`,
        }),
        children: `Liên kết có thể đã sai hoặc nhóm chưa được tạo trên thiết bị này.`,
      }),
    });
  }
  function Os() {
    let { pathname: e } = mt();
    return (
      (0, _.useEffect)(() => {
        window.scrollTo(0, 0);
      }, [e]),
      null
    );
  }
  function ks() {
    return (0, I.jsx)(An, {
      children: (0, I.jsxs)(ma, {
        children: [
          (0, I.jsx)(Os, {}),
          (0, I.jsxs)(`div`, {
            className: `flex min-h-screen flex-col`,
            children: [
              (0, I.jsx)(La, {}),
              (0, I.jsx)(`main`, {
                className: `flex-1`,
                children: (0, I.jsxs)(Wt, {
                  children: [
                    (0, I.jsx)(Ht, { path: `/`, element: (0, I.jsx)(Qo, {}) }),
                    (0, I.jsx)(Ht, {
                      path: `/start`,
                      element: (0, I.jsx)($o, {}),
                    }),
                    (0, I.jsx)(Ht, {
                      path: `/join/:code`,
                      element: (0, I.jsx)(es, {}),
                    }),
                    (0, I.jsx)(Ht, {
                      path: `/g/:code`,
                      element: (0, I.jsx)(cs, {}),
                    }),
                    (0, I.jsx)(Ht, {
                      path: `/g/:code/prefs`,
                      element: (0, I.jsx)(gs, {}),
                    }),
                    (0, I.jsx)(Ht, {
                      path: `/g/:code/recommend`,
                      element: (0, I.jsx)(vs, {}),
                    }),
                    (0, I.jsx)(Ht, {
                      path: `/g/:code/compare`,
                      element: (0, I.jsx)(ys, {}),
                    }),
                    (0, I.jsx)(Ht, {
                      path: `/g/:code/plan`,
                      element: (0, I.jsx)(Es, {}),
                    }),
                    (0, I.jsx)(Ht, {
                      path: `/home`,
                      element: (0, I.jsx)(Vt, { to: `/`, replace: !0 }),
                    }),
                    (0, I.jsx)(Ht, { path: `*`, element: (0, I.jsx)(Ds, {}) }),
                  ],
                }),
              }),
              (0, I.jsx)(Ra, {}),
            ],
          }),
        ],
      }),
    });
  }
  (0, v.createRoot)(document.getElementById(`root`)).render(
    (0, I.jsx)(_.StrictMode, { children: (0, I.jsx)(ks, {}) }),
  );
})();
