(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [7392],
  {
    89930: function (e, t, n) {
      "use strict";
      n.d(t, {
        YF: function () {
          return p;
        },
        x7: function () {
          return u;
        },
      });
      var r = n(84858),
        o = n(2163),
        l = n(96682),
        i = n(94495);
      let u = (e) => ({
        name: "arrow",
        options: e,
        fn(t) {
          let { element: n, padding: o } = "function" == typeof e ? e(t) : e;
          if (n && {}.hasOwnProperty.call(n, "current")) {
            if (null != n.current)
              return (0, r.x7)({ element: n.current, padding: o }).fn(t);
          } else if (n) return (0, r.x7)({ element: n, padding: o }).fn(t);
          return {};
        },
      });
      var a = "undefined" != typeof document ? l.useLayoutEffect : l.useEffect;
      function c(e, t) {
        let n, r, o;
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if ((n = e.length) != t.length) return !1;
            for (r = n; 0 != r--; ) if (!c(e[r], t[r])) return !1;
            return !0;
          }
          if ((n = (o = Object.keys(e)).length) !== Object.keys(t).length)
            return !1;
          for (r = n; 0 != r--; )
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 != r--; ) {
            let n = o[r];
            if (("_owner" !== n || !e.$$typeof) && !c(e[n], t[n])) return !1;
          }
          return !0;
        }
        return e != e && t != t;
      }
      function s(e) {
        return "undefined" == typeof window
          ? 1
          : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
      }
      function f(e, t) {
        let n = s(e);
        return Math.round(t * n) / n;
      }
      function d(e) {
        let t = l.useRef(e);
        return (
          a(() => {
            t.current = e;
          }),
          t
        );
      }
      function p(e) {
        void 0 === e && (e = {});
        let {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: u,
            elements: { reference: p, floating: v } = {},
            transform: m = !0,
            whileElementsMounted: h,
            open: y,
          } = e,
          [g, b] = l.useState({
            x: 0,
            y: 0,
            strategy: n,
            placement: t,
            middlewareData: {},
            isPositioned: !1,
          }),
          [w, x] = l.useState(r);
        c(w, r) || x(r);
        let [E, R] = l.useState(null),
          [k, T] = l.useState(null),
          S = l.useCallback(
            (e) => {
              e != L.current && ((L.current = e), R(e));
            },
            [R]
          ),
          O = l.useCallback(
            (e) => {
              e !== M.current && ((M.current = e), T(e));
            },
            [T]
          ),
          A = p || E,
          P = v || k,
          L = l.useRef(null),
          M = l.useRef(null),
          C = l.useRef(g),
          I = d(h),
          D = d(u),
          N = l.useCallback(() => {
            if (!L.current || !M.current) return;
            let e = { placement: t, strategy: n, middleware: w };
            D.current && (e.platform = D.current),
              (0, o.oo)(L.current, M.current, e).then((e) => {
                let t = { ...e, isPositioned: !0 };
                F.current &&
                  !c(C.current, t) &&
                  ((C.current = t),
                  i.flushSync(() => {
                    b(t);
                  }));
              });
          }, [w, t, n, D]);
        a(() => {
          !1 === y &&
            C.current.isPositioned &&
            ((C.current.isPositioned = !1),
            b((e) => ({ ...e, isPositioned: !1 })));
        }, [y]);
        let F = l.useRef(!1);
        a(
          () => (
            (F.current = !0),
            () => {
              F.current = !1;
            }
          ),
          []
        ),
          a(() => {
            if ((A && (L.current = A), P && (M.current = P), A && P)) {
              if (I.current) return I.current(A, P, N);
              N();
            }
          }, [A, P, N, I]);
        let j = l.useMemo(
            () => ({
              reference: L,
              floating: M,
              setReference: S,
              setFloating: O,
            }),
            [S, O]
          ),
          $ = l.useMemo(() => ({ reference: A, floating: P }), [A, P]),
          _ = l.useMemo(() => {
            let e = { position: n, left: 0, top: 0 };
            if (!$.floating) return e;
            let t = f($.floating, g.x),
              r = f($.floating, g.y);
            return m
              ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...(s($.floating) >= 1.5 && { willChange: "transform" }),
                }
              : { position: n, left: t, top: r };
          }, [n, m, $.floating, g.x, g.y]);
        return l.useMemo(
          () => ({ ...g, update: N, refs: j, elements: $, floatingStyles: _ }),
          [g, N, j, $, _]
        );
      }
    },
    67387: function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(86606),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    74835: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return g;
          },
        });
      let r = n(97295)._(n(96682)),
        o = n(17462),
        l = n(53347),
        i = n(32087),
        u = n(6326),
        a = n(30851),
        c = n(24614),
        s = n(2198),
        f = n(57997),
        d = n(67387),
        p = n(50738),
        v = n(33351),
        m = new Set();
      function h(e, t, n, r, o, i) {
        if (i || (0, l.isLocalURL)(t)) {
          if (!r.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (m.has(o)) return;
            m.add(o);
          }
          Promise.resolve(i ? e.prefetch(t, o) : e.prefetch(t, n, r)).catch(
            (e) => {}
          );
        }
      }
      function y(e) {
        return "string" == typeof e ? e : (0, i.formatUrl)(e);
      }
      let g = r.default.forwardRef(function (e, t) {
        let n, i;
        let {
          href: m,
          as: g,
          children: b,
          prefetch: w = null,
          passHref: x,
          replace: E,
          shallow: R,
          scroll: k,
          locale: T,
          onClick: S,
          onMouseEnter: O,
          onTouchStart: A,
          legacyBehavior: P = !1,
          ...L
        } = e;
        (n = b),
          P &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = r.default.createElement("a", null, n));
        let M = r.default.useContext(c.RouterContext),
          C = r.default.useContext(s.AppRouterContext),
          I = null != M ? M : C,
          D = !M,
          N = !1 !== w,
          F = null === w ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
          { href: j, as: $ } = r.default.useMemo(() => {
            if (!M) {
              let e = y(m);
              return { href: e, as: g ? y(g) : e };
            }
            let [e, t] = (0, o.resolveHref)(M, m, !0);
            return { href: e, as: g ? (0, o.resolveHref)(M, g) : t || e };
          }, [M, m, g]),
          _ = r.default.useRef(j),
          H = r.default.useRef($);
        P && (i = r.default.Children.only(n));
        let K = P ? i && "object" == typeof i && i.ref : t,
          [z, V, W] = (0, f.useIntersection)({ rootMargin: "200px" }),
          q = r.default.useCallback(
            (e) => {
              (H.current !== $ || _.current !== j) &&
                (W(), (H.current = $), (_.current = j)),
                z(e),
                K &&
                  ("function" == typeof K
                    ? K(e)
                    : "object" == typeof K && (K.current = e));
            },
            [$, K, j, W, z]
          );
        r.default.useEffect(() => {
          I && V && N && h(I, j, $, { locale: T }, { kind: F }, D);
        }, [$, j, V, T, N, null == M ? void 0 : M.locale, I, D, F]);
        let B = {
          ref: q,
          onClick(e) {
            P || "function" != typeof S || S(e),
              P &&
                i.props &&
                "function" == typeof i.props.onClick &&
                i.props.onClick(e),
              I &&
                !e.defaultPrevented &&
                (function (e, t, n, o, i, u, a, c, s) {
                  let { nodeName: f } = e.currentTarget;
                  if (
                    "A" === f.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!s && !(0, l.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let d = () => {
                    let e = null == a || a;
                    "beforePopState" in t
                      ? t[i ? "replace" : "push"](n, o, {
                          shallow: u,
                          locale: c,
                          scroll: e,
                        })
                      : t[i ? "replace" : "push"](o || n, { scroll: e });
                  };
                  s ? r.default.startTransition(d) : d();
                })(e, I, j, $, E, R, k, T, D);
          },
          onMouseEnter(e) {
            P || "function" != typeof O || O(e),
              P &&
                i.props &&
                "function" == typeof i.props.onMouseEnter &&
                i.props.onMouseEnter(e),
              I &&
                (N || !D) &&
                h(
                  I,
                  j,
                  $,
                  { locale: T, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  D
                );
          },
          onTouchStart(e) {
            P || "function" != typeof A || A(e),
              P &&
                i.props &&
                "function" == typeof i.props.onTouchStart &&
                i.props.onTouchStart(e),
              I &&
                (N || !D) &&
                h(
                  I,
                  j,
                  $,
                  { locale: T, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: F },
                  D
                );
          },
        };
        if ((0, u.isAbsoluteUrl)($)) B.href = $;
        else if (!P || x || ("a" === i.type && !("href" in i.props))) {
          let e = void 0 !== T ? T : null == M ? void 0 : M.locale,
            t =
              (null == M ? void 0 : M.isLocaleDomain) &&
              (0, d.getDomainLocale)(
                $,
                e,
                null == M ? void 0 : M.locales,
                null == M ? void 0 : M.domainLocales
              );
          B.href =
            t ||
            (0, p.addBasePath)(
              (0, a.addLocale)($, e, null == M ? void 0 : M.defaultLocale)
            );
        }
        return P
          ? r.default.cloneElement(i, B)
          : r.default.createElement("a", { ...L, ...B }, n);
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    57997: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(96682),
        o = n(82336),
        l = "function" == typeof IntersectionObserver,
        i = new Map(),
        u = [];
      function a(e) {
        let { rootRef: t, rootMargin: n, disabled: a } = e,
          c = a || !l,
          [s, f] = (0, r.useState)(!1),
          d = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            d.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (l) {
              if (c || s) return;
              let e = d.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: o,
                    elements: l,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = u.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (r && (t = i.get(r))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: o,
                      }),
                      u.push(n),
                      i.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    l.set(e, t),
                    o.observe(e),
                    function () {
                      if ((l.delete(e), o.unobserve(e), 0 === l.size)) {
                        o.disconnect(), i.delete(r);
                        let e = u.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        e > -1 && u.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && f(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!s) {
              let e = (0, o.requestIdleCallback)(() => f(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [c, n, t, s, d.current]),
          [
            p,
            s,
            (0, r.useCallback)(() => {
              f(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    91694: function (e, t, n) {
      e.exports = n(74835);
    },
    73331: function (e, t, n) {
      "use strict";
      let r, o;
      n.d(t, {
        E: function () {
          return n_;
        },
      });
      var l = n(96682);
      /*!
       * OverlayScrollbars
       * Version: 2.4.5
       *
       * Copyright (c) Rene Haas | KingSora.
       * https://github.com/KingSora
       *
       * Released under the MIT license.
       */ let i = (e, t) => {
          let n;
          let { o: r, u: o, _: l } = e,
            i = r,
            u = (e, t) => {
              let r = i,
                u = t || (o ? !o(r, e) : r !== e);
              return (u || l) && ((i = e), (n = r)), [i, u, n];
            };
          return [t ? (e) => u(t(i, n), e) : u, (e) => [i, !!e, n]];
        },
        u = "undefined" != typeof window,
        a = u && Node.ELEMENT_NODE,
        { toString: c, hasOwnProperty: s } = Object.prototype,
        f = /^\[object (.+)\]$/,
        d = (e) => void 0 === e,
        p = (e) => null === e,
        v = (e) =>
          d(e) || p(e) ? `${e}` : c.call(e).replace(f, "$1").toLowerCase(),
        m = (e) => "number" == typeof e,
        h = (e) => "string" == typeof e,
        y = (e) => "boolean" == typeof e,
        g = (e) => "function" == typeof e,
        b = (e) => Array.isArray(e),
        w = (e) => "object" == typeof e && !b(e) && !p(e),
        x = (e) => {
          let t = !!e && e.length,
            n = m(t) && t > -1 && t % 1 == 0;
          return (!!b(e) || (!g(e) && !!n)) && (!(t > 0 && w(e)) || t - 1 in e);
        },
        E = (e) => {
          let t;
          if (!e || !w(e) || "object" !== v(e)) return !1;
          let n = "constructor",
            r = e[n],
            o = r && r.prototype,
            l = s.call(e, n),
            i = o && s.call(o, "isPrototypeOf");
          if (r && !l && !i) return !1;
          for (t in e);
          return d(t) || s.call(e, t);
        },
        R = (e) => {
          let t = HTMLElement;
          return !!e && (t ? e instanceof t : e.nodeType === a);
        },
        k = (e) => {
          let t = Element;
          return !!e && (t ? e instanceof t : e.nodeType === a);
        };
      function T(e, t) {
        if (x(e)) for (let n = 0; n < e.length && !1 !== t(e[n], n, e); n++);
        else e && T(Object.keys(e), (n) => t(e[n], n, e));
        return e;
      }
      let S = (e, t) => e.indexOf(t) >= 0,
        O = (e, t) => e.concat(t),
        A = (e, t, n) => (
          !n && !h(t) && x(t) ? Array.prototype.push.apply(e, t) : e.push(t), e
        ),
        P = (e) => {
          let t = Array.from,
            n = [];
          return t && e
            ? t(e)
            : (e instanceof Set
                ? e.forEach((e) => {
                    A(n, e);
                  })
                : T(e, (e) => {
                    A(n, e);
                  }),
              n);
        },
        L = (e) => !!e && !e.length,
        M = (e) => P(new Set(e)),
        C = (e, t, n) => {
          T(e, (e) => e && e.apply(void 0, t || [])), n || (e.length = 0);
        },
        I = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        D = (e) => (e ? Object.keys(e) : []),
        N = (e, t, n, r, o, l, i) => (
          ("object" != typeof e || p(e)) && !g(e) && (e = {}),
          T([t, n, r, o, l, i], (t) => {
            T(t, (n, r) => {
              let o = t[r];
              if (e === o) return !0;
              let l = b(o);
              if (o && E(o)) {
                let t = e[r],
                  n = t;
                l && !b(t) ? (n = []) : l || E(t) || (n = {}), (e[r] = N(n, o));
              } else e[r] = l ? o.slice() : o;
            });
          }),
          e
        ),
        F = (e, t) =>
          T(N({}, e), (e, n, r) => {
            void 0 === e ? delete r[n] : t && e && E(e) && (r[n] = F(e, t));
          }),
        j = (e) => {
          for (let t in e) return !1;
          return !0;
        },
        $ = (e, t, n) => {
          if (d(n)) return e ? e.getAttribute(t) : null;
          e && e.setAttribute(t, n);
        },
        _ = (e, t) => new Set(($(e, t) || "").split(" ")),
        H = (e, t) => {
          e && e.removeAttribute(t);
        },
        K = (e, t, n, r) => {
          if (n) {
            let o = _(e, t);
            o[r ? "add" : "delete"](n), $(e, t, P(o).join(" ").trim());
          }
        },
        z = (e, t, n) => _(e, t).has(n),
        V = u && Element.prototype,
        W = (e, t) => {
          let n = [],
            r = t ? k(t) && t : document;
          return r ? A(n, r.querySelectorAll(e)) : n;
        },
        q = (e, t) => {
          let n = t ? k(t) && t : document;
          return n ? n.querySelector(e) : null;
        },
        B = (e, t) => !!k(e) && (V.matches || V.msMatchesSelector).call(e, t),
        U = (e) => (e ? P(e.childNodes) : []),
        Y = (e) => e && e.parentElement,
        J = (e, t) => {
          if (k(e)) {
            let n = V.closest;
            if (n) return n.call(e, t);
            do {
              if (B(e, t)) return e;
              e = Y(e);
            } while (e);
          }
        },
        X = (e, t, n) => {
          let r = J(e, t),
            o = e && q(n, r),
            l = J(o, t) === r;
          return (
            !!r && !!o && (r === e || o === e || (l && J(J(e, n), t) !== r))
          );
        },
        G = () => {},
        Z = (e) => {
          if (x(e)) T(P(e), (e) => Z(e));
          else if (e) {
            let t = Y(e);
            t && t.removeChild(e);
          }
        },
        Q = (e, t, n) => {
          if (n && e) {
            let r,
              o = t;
            return (
              x(n)
                ? ((r = document.createDocumentFragment()),
                  T(n, (e) => {
                    e === o && (o = e.previousSibling), r.appendChild(e);
                  }))
                : (r = n),
              t && (o ? o !== t && (o = o.nextSibling) : (o = e.firstChild)),
              e.insertBefore(r, o || null),
              () => Z(n)
            );
          }
          return G;
        },
        ee = (e, t) => Q(e, null, t),
        et = (e, t) => Q(Y(e), e, t),
        en = (e, t) => Q(Y(e), e && e.nextSibling, t),
        er = (e) => {
          let t = document.createElement("div");
          return $(t, "class", e), t;
        },
        eo = (e) => {
          let t = er();
          return (t.innerHTML = e.trim()), T(U(t), (e) => Z(e));
        },
        el = u ? window : {},
        ei = Math.max,
        eu = Math.min,
        ea = Math.round,
        ec = el.cancelAnimationFrame,
        es = el.requestAnimationFrame,
        ef = el.setTimeout,
        ed = el.clearTimeout,
        ep = (e) => e.charAt(0).toUpperCase() + e.slice(1),
        ev = () => er().style,
        em = ["-webkit-", "-moz-", "-o-", "-ms-"],
        eh = ["WebKit", "Moz", "O", "MS", "webkit", "moz", "o", "ms"],
        ey = {},
        eg = {},
        eb = (e) => {
          let t = eg[e];
          if (I(eg, e)) return t;
          let n = ep(e),
            r = ev();
          return (
            T(em, (o) => {
              let l = o.replace(/-/g, "");
              return !(t = [e, o + e, l + n, ep(l) + n].find(
                (e) => void 0 !== r[e]
              ));
            }),
            (eg[e] = t || "")
          );
        },
        ew = (e) => {
          let t = ey[e] || el[e];
          return (
            I(ey, e) || (T(eh, (n) => !(t = t || el[n + ep(e)])), (ey[e] = t)),
            t
          );
        },
        ex = ew("MutationObserver"),
        eE = ew("IntersectionObserver"),
        eR = ew("ResizeObserver"),
        ek = ew("ScrollTimeline"),
        eT = (e, ...t) => e.bind(0, ...t),
        eS = (e) => {
          let t;
          let n = e ? ef : es,
            r = e ? ed : ec;
          return [
            (o) => {
              r(t), (t = n(o, g(e) ? e() : e));
            },
            () => r(t),
          ];
        },
        eO = (e, t) => {
          let n, r, o;
          let l = G,
            { v: i, p: u, g: a } = t || {},
            c = function (t) {
              l(), ed(n), (n = r = void 0), (l = G), e.apply(this, t);
            },
            s = (e) => (a && r ? a(r, e) : e),
            f = () => {
              l !== G && c(s(o) || o);
            },
            d = function () {
              let e = P(arguments),
                t = g(i) ? i() : i;
              if (m(t) && t >= 0) {
                let i = g(u) ? u() : u,
                  a = m(i) && i >= 0,
                  d = t > 0 ? ef : es,
                  p = t > 0 ? ed : ec,
                  v = s(e) || e,
                  h = c.bind(0, v);
                l();
                let y = d(h, t);
                (l = () => p(y)), a && !n && (n = ef(f, i)), (r = o = v);
              } else c(e);
            };
          return (d.m = f), d;
        },
        eA = /[^\x20\t\r\n\f]+/g,
        eP = (e, t, n) => {
          let r;
          let o = e && e.classList,
            l = 0,
            i = !1;
          if (o && t && h(t)) {
            let e = t.match(eA) || [];
            for (i = e.length > 0; (r = e[l++]); ) i = !!n(o, r) && i;
          }
          return i;
        },
        eL = (e, t) => {
          eP(e, t, (e, t) => e.remove(t));
        },
        eM = (e, t) => (eP(e, t, (e, t) => e.add(t)), eT(eL, e, t)),
        eC = { opacity: 1, zIndex: 1 },
        eI = (e, t) => {
          let n = e || "",
            r = t ? parseFloat(n) : parseInt(n, 10);
          return r == r ? r : 0;
        },
        eD = (e, t) => (!eC[e] && m(t) ? `${t}px` : t),
        eN = (e, t, n) =>
          String(
            (null != t ? t[n] || t.getPropertyValue(n) : e.style[n]) || ""
          ),
        eF = (e, t, n) => {
          try {
            let { style: r } = e;
            d(r[t]) ? r.setProperty(t, n) : (r[t] = eD(t, n));
          } catch (e) {}
        },
        ej = (e) => {
          let t = e || 0;
          return isFinite(t) ? t : 0;
        };
      function e$(e, t) {
        let n = h(t);
        if (b(t) || n) {
          let r = n ? "" : {};
          if (e) {
            let o = el.getComputedStyle(e, null);
            r = n
              ? eN(e, o, t)
              : t.reduce((t, n) => ((t[n] = eN(e, o, n)), t), r);
          }
          return r;
        }
        e && T(t, (n, r) => eF(e, r, t[r]));
      }
      let e_ = (e) => "rtl" === e$(e, "direction"),
        eH = (e, t, n) => {
          let r = t ? `${t}-` : "",
            o = n ? `-${n}` : "",
            l = `${r}top${o}`,
            i = `${r}right${o}`,
            u = `${r}bottom${o}`,
            a = `${r}left${o}`,
            c = e$(e, [l, i, u, a]);
          return {
            t: eI(c[l], !0),
            r: eI(c[i], !0),
            b: eI(c[u], !0),
            l: eI(c[a], !0),
          };
        },
        eK = (e, t) =>
          `translate${w(e) ? `(${e.x},${e.y})` : `${t ? "X" : "Y"}(${e})`}`,
        ez = (e) => `${(100 * ej(e)).toFixed(3)}%`,
        eV = (e) => `${ej(e)}px`,
        eW = "paddingTop",
        eq = "paddingRight",
        eB = "paddingLeft",
        eU = "paddingBottom",
        eY = "marginLeft",
        eJ = "marginRight",
        eX = "marginBottom",
        eG = "overflowX",
        eZ = "overflowY",
        eQ = "width",
        e0 = "height",
        e1 = "hidden",
        e2 = { w: 0, h: 0 },
        e3 = (e, t) => (t ? { w: t[`${e}Width`], h: t[`${e}Height`] } : e2),
        e6 = (e) => e3("inner", e || el),
        e4 = eT(e3, "offset"),
        e9 = eT(e3, "client"),
        e8 = eT(e3, "scroll"),
        e5 = (e) => {
          let t = parseFloat(e$(e, eQ)) || 0,
            n = parseFloat(e$(e, e0)) || 0;
          return { w: t - ea(t), h: n - ea(n) };
        },
        e7 = (e) => e.getBoundingClientRect(),
        te = (e) => !!(e && (e[e0] || e[eQ])),
        tt = (e, t) => {
          let n = te(e);
          return !te(t) && n;
        },
        tn = (e, t, n, r) => {
          if (e && t) {
            let o = !0;
            return (
              T(n, (n) => {
                (r ? r(e[n]) : e[n]) !== (r ? r(t[n]) : t[n]) && (o = !1);
              }),
              o
            );
          }
          return !1;
        },
        tr = (e, t) => tn(e, t, ["w", "h"]),
        to = (e, t) => tn(e, t, ["x", "y"]),
        tl = (e, t) => tn(e, t, ["t", "r", "b", "l"]),
        ti = (e, t, n) => tn(e, t, [eQ, e0], n && ((e) => ea(e))),
        tu = "passive",
        ta = () => {
          if (d(r)) {
            r = !1;
            try {
              el.addEventListener(
                tu,
                G,
                Object.defineProperty({}, tu, {
                  get() {
                    r = !0;
                  },
                })
              );
            } catch (e) {}
          }
          return r;
        },
        tc = (e) => e.split(" "),
        ts = (e, t, n, r) => {
          T(tc(t), (t) => {
            e.removeEventListener(t, n, r);
          });
        },
        tf = (e, t, n, r) => {
          var o;
          let l = ta(),
            i = null != (o = l && r && r.S) ? o : l,
            u = (r && r.$) || !1,
            a = (r && r.O) || !1,
            c = l ? { passive: i, capture: u } : u;
          return eT(
            C,
            tc(t).map((t) => {
              let r = a
                ? (o) => {
                    ts(e, t, r, u), n(o);
                  }
                : n;
              return e.addEventListener(t, r, c), eT(ts, e, t, r, u);
            })
          );
        },
        td = (e) => e.stopPropagation(),
        tp = (e) => e.preventDefault(),
        tv = { x: 0, y: 0 },
        tm = (e) => {
          let t = e && e7(e);
          return t
            ? { x: t.left + el.pageYOffset, y: t.top + el.pageXOffset }
            : tv;
        },
        th = (e, t, n) => (n ? (n.n ? -e : n.i ? t - e : e) : e),
        ty = (e, t) => [t && t.i ? e : 0, th(e, e, t)],
        tg = (e, t) => {
          let { x: n, y: r } = m(t) ? { x: t, y: t } : t || {};
          m(n) && (e.scrollLeft = n), m(r) && (e.scrollTop = r);
        },
        tb = (e) => ({ x: e.scrollLeft, y: e.scrollTop }),
        tw = (e, t) => {
          T(b(t) ? t : [t], e);
        },
        tx = (e) => {
          let t = new Map(),
            n = (e, n) => {
              if (e) {
                let r = t.get(e);
                tw((e) => {
                  r && r[e ? "delete" : "clear"](e);
                }, n);
              } else
                t.forEach((e) => {
                  e.clear();
                }),
                  t.clear();
            },
            r = (e, o) => {
              if (h(e)) {
                let r = t.get(e) || new Set();
                return (
                  t.set(e, r),
                  tw((e) => {
                    g(e) && r.add(e);
                  }, o),
                  eT(n, e, o)
                );
              }
              y(o) && o && n();
              let l = D(e),
                i = [];
              return (
                T(l, (t) => {
                  let n = e[t];
                  n && A(i, r(t, n));
                }),
                eT(C, i)
              );
            };
          return (
            r(e || {}),
            [
              r,
              n,
              (e, n) => {
                T(P(t.get(e)), (e) => {
                  n && !L(n) ? e.apply(0, n) : e();
                });
              },
            ]
          );
        },
        tE = (e) =>
          JSON.stringify(e, (e, t) => {
            if (g(t)) throw 0;
            return t;
          }),
        tR = (e, t) =>
          e
            ? `${t}`
                .split(".")
                .reduce((e, t) => (e && I(e, t) ? e[t] : void 0), e)
            : void 0,
        tk = {
          paddingAbsolute: !1,
          showNativeOverlaidScrollbars: !1,
          update: {
            elementEvents: [["img", "load"]],
            debounce: [0, 33],
            attributes: null,
            ignoreMutation: null,
          },
          overflow: { x: "scroll", y: "scroll" },
          scrollbars: {
            theme: "os-theme-dark",
            visibility: "auto",
            autoHide: "never",
            autoHideDelay: 1300,
            autoHideSuspend: !1,
            dragScroll: !0,
            clickScroll: !1,
            pointers: ["mouse", "touch", "pen"],
          },
        },
        tT = (e, t) => {
          let n = {};
          return (
            T(O(D(t), D(e)), (r) => {
              let o = e[r],
                l = t[r];
              if (w(o) && w(l))
                N((n[r] = {}), tT(o, l)), j(n[r]) && delete n[r];
              else if (I(t, r) && l !== o) {
                let e = !0;
                if (b(o) || b(l))
                  try {
                    tE(o) === tE(l) && (e = !1);
                  } catch (e) {}
                e && (n[r] = l);
              }
            }),
            n
          );
        },
        tS = (e, t, n) => (r) => [tR(e, r), n || void 0 !== tR(t, r)],
        tO = "data-overlayscrollbars",
        tA = "os-environment",
        tP = `${tA}-flexbox-glue`,
        tL = `${tP}-max`,
        tM = "os-scrollbar-hidden",
        tC = `${tO}-initialize`,
        tI = `${tO}-overflow-x`,
        tD = `${tO}-overflow-y`,
        tN = "overflowVisible",
        tF = "scrollbarPressed",
        tj = "updating",
        t$ = `${tO}-viewport`,
        t_ = "arrange",
        tH = "scrollbarHidden",
        tK = `${tO}-padding`,
        tz = `${tO}-content`,
        tV = "os-size-observer",
        tW = `${tV}-appear`,
        tq = `${tV}-listener`,
        tB = "os-scrollbar",
        tU = `${tB}-rtl`,
        tY = `${tB}-horizontal`,
        tJ = `${tB}-vertical`,
        tX = `${tB}-track`,
        tG = `${tB}-handle`,
        tZ = `${tB}-visible`,
        tQ = `${tB}-cornerless`,
        t0 = `${tB}-transitionless`,
        t1 = `${tB}-interaction`,
        t2 = `${tB}-unusable`,
        t3 = `${tB}-auto-hide`,
        t6 = `${t3}-hidden`,
        t4 = `${tB}-wheel`,
        t9 = `${tX}-interactive`,
        t8 = `${tG}-interactive`,
        t5 = {},
        t7 = {},
        ne = (e) => {
          T(e, (e) =>
            T(e, (t, n) => {
              t5[n] = e[n];
            })
          );
        },
        nt = (e, t, n) =>
          D(e).map((r) => {
            let { static: o, instance: l } = e[r],
              [i, u, a] = n || [],
              c = n ? l : o;
            if (c) {
              let e = n ? c(i, u, t) : c(t);
              return ((a || t7)[r] = e);
            }
          }),
        nn = (e) => t7[e],
        nr = "__osScrollbarsHidingPlugin",
        no = (e, t, n, r) => {
          ee(e, t);
          let o = e9(t),
            l = e4(t),
            i = e5(n);
          return r && Z(t), { x: l.h - o.h + i.h, y: l.w - o.w + i.w };
        },
        nl = (e) => {
          let t = !1,
            n = eM(e, tM);
          try {
            t =
              "none" === e$(e, eb("scrollbar-width")) ||
              "none" ===
                el
                  .getComputedStyle(e, "::-webkit-scrollbar")
                  .getPropertyValue("display");
          } catch (e) {}
          return n(), t;
        },
        ni = (e, t) => {
          e$(e, { [eG]: e1, [eZ]: e1, direction: "rtl" }), tg(e, { x: 0 });
          let n = tm(e),
            r = tm(t);
          tg(e, { x: -999 });
          let o = tm(t);
          return { i: n.x === r.x, n: r.x !== o.x };
        },
        nu = (e, t) => {
          let n = eM(e, tP),
            r = e7(e),
            o = ti(e7(t), r, !0),
            l = eM(e, tL),
            i = e7(e),
            u = ti(e7(t), i, !0);
          return n(), l(), o && u;
        },
        na = () => {
          let { body: e } = document,
            t = eo(`<div class="${tA}"><div></div></div>`)[0],
            n = t.firstChild,
            [r, , o] = tx(),
            [l, u] = i({ o: no(e, t, n), u: to }, eT(no, e, t, n, !0)),
            [a] = u(),
            c = nl(t),
            s = { x: 0 === a.x, y: 0 === a.y },
            f = {
              elements: {
                host: null,
                padding: !c,
                viewport: (e) => c && e === e.ownerDocument.body && e,
                content: !1,
              },
              scrollbars: { slot: !0 },
              cancel: { nativeScrollbarsOverlaid: !1, body: null },
            },
            d = N({}, tk),
            p = eT(N, {}, d),
            v = eT(N, {}, f),
            m = {
              P: a,
              I: s,
              H: c,
              A: "-1" === e$(t, "zIndex"),
              L: !!ek,
              V: ni(t, n),
              U: nu(t, n),
              B: eT(r, "r"),
              j: v,
              N: (e) => N(f, e) && v(),
              G: p,
              q: (e) => N(d, e) && p(),
              F: N({}, f),
              W: N({}, d),
            };
          return (
            H(t, "style"),
            Z(t),
            el.addEventListener("resize", () => {
              let e;
              if (!c && (!s.x || !s.y)) {
                let t = nn(nr);
                e = !!(t ? t.R() : G)(m, l);
              }
              o("r", [e]);
            }),
            m
          );
        },
        nc = () => (o || (o = na()), o),
        ns = (e, t) => (g(t) ? t.apply(0, e) : t),
        nf = (e, t, n, r) => ns(e, d(r) ? n : r) || t.apply(0, e),
        nd = (e, t, n, r) => {
          let o = ns(e, d(r) ? n : r);
          return !!o && (R(o) ? o : t.apply(0, e));
        },
        np = (e, t) => {
          let { nativeScrollbarsOverlaid: n, body: r } = t || {},
            { I: o, H: l, j: i } = nc(),
            { nativeScrollbarsOverlaid: u, body: a } = i().cancel,
            c = d(r) ? a : r,
            s = (o.x || o.y) && (null != n ? n : u),
            f = e && (p(c) ? !l : c);
          return !!s || !!f;
        },
        nv = new WeakMap(),
        nm = (e, t) => {
          nv.set(e, t);
        },
        nh = (e) => {
          nv.delete(e);
        },
        ny = (e) => nv.get(e),
        ng = (e, t, n) => {
          let r = !1,
            o = !!n && new WeakMap(),
            l = (l) => {
              o &&
                n &&
                T(
                  n.map((t) => {
                    let [n, r] = t || [];
                    return [r && n ? (l || W)(n, e) : [], r];
                  }),
                  (n) =>
                    T(n[0], (l) => {
                      let i = n[1],
                        u = o.get(l) || [];
                      if (e.contains(l) && i) {
                        let e = tf(l, i.trim(), (n) => {
                          r ? (e(), o.delete(l)) : t(n);
                        });
                        o.set(l, A(u, e));
                      } else C(u), o.delete(l);
                    })
                );
            };
          return (
            l(),
            [
              () => {
                r = !0;
              },
              l,
            ]
          );
        },
        nb = (e, t, n, r) => {
          let o = !1,
            { X: l, Y: i, J: u, K: a, Z: c, tt: s } = r || {},
            f = eO(() => o && n(!0), { v: 33, p: 99 }),
            [d, p] = ng(e, f, u),
            v = i || [],
            m = O(l || [], v),
            h = (o, l) => {
              if (!L(l)) {
                let i = c || G,
                  u = s || G,
                  f = [],
                  d = [],
                  m = !1,
                  h = !1;
                if (
                  (T(l, (n) => {
                    let {
                        attributeName: o,
                        target: l,
                        type: c,
                        oldValue: s,
                        addedNodes: p,
                        removedNodes: y,
                      } = n,
                      g = "attributes" === c,
                      b = e === l,
                      w = g && o,
                      x = w ? $(l, o || "") : null,
                      E = w && s !== x,
                      R = S(v, o) && E;
                    if (t && ("childList" === c || !b)) {
                      let t = g && E,
                        c = t && a && B(l, a),
                        d = (c ? !i(l, o, s, x) : !g || t) && !u(n, !!c, e, r);
                      T(p, (e) => A(f, e)), T(y, (e) => A(f, e)), (h = h || d);
                    }
                    !t && b && E && !i(l, o, s, x) && (A(d, o), (m = m || R));
                  }),
                  p((e) =>
                    M(f).reduce(
                      (t, n) => (A(t, W(e, n)), B(n, e) ? A(t, n) : t),
                      []
                    )
                  ),
                  t)
                )
                  return !o && h && n(!1), [!1];
                if (!L(d) || m) {
                  let e = [M(d), m];
                  return o || n.apply(0, e), e;
                }
              }
            },
            y = new ex(eT(h, !1));
          return [
            () => (
              y.observe(e, {
                attributes: !0,
                attributeOldValue: !0,
                attributeFilter: m,
                subtree: t,
                childList: t,
                characterData: t,
              }),
              (o = !0),
              () => {
                o && (d(), y.disconnect(), (o = !1));
              }
            ),
            () => {
              if (o) return f.m(), h(!0, y.takeRecords());
            },
          ];
        },
        nw = (e, t, n) => {
          let { nt: r, ot: o } = n || {},
            l = nn("__osSizeObserverPlugin"),
            { V: u } = nc(),
            a = eT(e_, e),
            [c] = i({ o: !1, _: !0 });
          return () => {
            let n = [],
              s = eo(`<div class="${tV}"><div class="${tq}"></div></div>`)[0],
              f = s.firstChild,
              d = (e) => {
                let n = e instanceof ResizeObserverEntry,
                  o = !n && b(e),
                  l = !1,
                  i = !1,
                  a = !0;
                if (n) {
                  let [t, , n] = c(e.contentRect),
                    r = te(t),
                    o = tt(t, n);
                  a = !(l = !(i = !n || o) && !r);
                } else o ? ([, a] = e) : (i = !0 === e);
                if (r && a) {
                  let t = o ? e[0] : e_(s);
                  tg(s, { x: th(3333333, 3333333, t && u), y: 3333333 });
                }
                l || t({ st: o ? e : void 0, et: !o, ot: i });
              };
            if (eR) {
              let e = new eR((e) => d(e.pop()));
              e.observe(f),
                A(n, () => {
                  e.disconnect();
                });
            } else {
              if (!l) return G;
              let [e, t] = l(f, d, o);
              A(n, O([eM(s, tW), tf(s, "animationstart", e)], t));
            }
            if (r) {
              let [e] = i({ o: void 0 }, a);
              A(
                n,
                tf(s, "scroll", (t) => {
                  let [n, r, o] = e();
                  r &&
                    (eL(f, "ltr rtl"),
                    eM(f, n ? "rtl" : "ltr"),
                    d([!!n, r, o])),
                    td(t);
                })
              );
            }
            return eT(C, A(n, ee(e, s)));
          };
        },
        nx = (e, t) => {
          let n;
          let r = (e) =>
              0 === e.h || e.isIntersecting || e.intersectionRatio > 0,
            o = er("os-trinsic-observer"),
            [l] = i({ o: !1 }),
            u = (e, n) => {
              if (e) {
                let o = l(r(e)),
                  [, i] = o;
                return i && !n && t(o) && [o];
              }
            },
            a = (e, t) => u(t.pop(), e);
          return [
            () => {
              let t = [];
              if (eE)
                (n = new eE(eT(a, !1), { root: e })).observe(o),
                  A(t, () => {
                    n.disconnect();
                  });
              else {
                let e = () => {
                  u(e4(o));
                };
                A(t, nw(o, e)()), e();
              }
              return eT(C, A(t, ee(e, o)));
            },
            () => n && a(!0, n.takeRecords()),
          ];
        },
        nE = (e, t) => {
          let n, r, o, l, u;
          let { H: a } = nc(),
            c = `[${tO}]`,
            s = `[${t$}]`,
            f = ["tabindex"],
            d = ["wrap", "cols", "rows"],
            p = ["id", "class", "style", "open"],
            v = { ct: !1, rt: e_(e.lt) },
            { lt: y, it: w, ut: x, ft: E, _t: R, dt: k, vt: A } = e,
            { U: P, B: L } = nc(),
            [M] = i({ u: tr, o: { w: 0, h: 0 } }, () => {
              let e = k(tN, tN),
                t = k(t_, ""),
                n = t && tb(w);
              A(tN, tN), A(t_, ""), A("", tj, !0);
              let r = e8(x),
                o = e8(w),
                l = e5(w);
              return (
                A(tN, tN, e),
                A(t_, "", t),
                A("", tj),
                tg(w, n),
                { w: o.w + r.w + l.w, h: o.h + r.h + l.h }
              );
            }),
            C = E ? d : O(p, d),
            I = eO(t, {
              v: () => n,
              p: () => r,
              g(e, t) {
                let [n] = e,
                  [r] = t;
                return [
                  O(D(n), D(r)).reduce(
                    (e, t) => ((e[t] = n[t] || r[t]), e),
                    {}
                  ),
                ];
              },
            }),
            F = (e) => {
              T(e || f, (e) => {
                if (S(f, e)) {
                  let t = $(y, e);
                  h(t) ? $(w, e, t) : H(w, e);
                }
              });
            },
            j = (e, n) => {
              let [r, o] = e,
                l = { ht: o };
              return N(v, { ct: r }), n || t(l), l;
            },
            _ = ({ et: e, st: n, ot: r }) => {
              let o = !(e && !r && !n) && a ? I : t,
                [l, i] = n || [];
              n && N(v, { rt: l }), o({ et: e || r, ot: r, gt: i });
            },
            K = (e, n) => {
              let [, r] = M(),
                o = { bt: r },
                l = e ? t : I;
              return r && !n && l(o), o;
            },
            z = (e, t, n) => {
              let r = { wt: t };
              return t && !n ? I(r) : R || F(e), r;
            },
            [V, W] = x || !P ? nx(y, j) : [],
            q = !R && nw(y, _, { ot: !0, nt: !0 }),
            [B, U] = nb(y, !1, z, { Y: p, X: O(p, f) }),
            Y =
              R &&
              eR &&
              new eR((e) => {
                let t = e[e.length - 1].contentRect;
                _({ et: !0, ot: tt(t, u) }), (u = t);
              });
          return [
            () => {
              F(), Y && Y.observe(y);
              let e = q && q(),
                t = V && V(),
                n = B(),
                r = L((e) => {
                  let [, t] = M();
                  I({ yt: e, bt: t });
                });
              return () => {
                Y && Y.disconnect(), e && e(), t && t(), l && l(), n(), r();
              };
            },
            ({ St: e, $t: t, xt: i }) => {
              let u = {},
                [a] = e("update.ignoreMutation"),
                [f, d] = e("update.attributes"),
                [p, v] = e("update.elementEvents"),
                [h, y] = e("update.debounce"),
                E = t || i,
                k = (e) => g(a) && a(e);
              if (v || d) {
                o && o(), l && l();
                let [e, t] = nb(x || w, !0, K, {
                  X: O(C, f || []),
                  J: p,
                  K: c,
                  tt: (e, t) => {
                    let { target: n, attributeName: r } = e;
                    return (
                      (!t && !!r && !R && X(n, c, s)) ||
                      !!J(n, `.${tB}`) ||
                      !!k(e)
                    );
                  },
                });
                (l = e()), (o = t);
              }
              if (y) {
                if ((I.m(), b(h))) {
                  let e = h[0],
                    t = h[1];
                  (n = m(e) && e), (r = m(t) && t);
                } else (n = !!m(h) && h), (r = !1);
              }
              if (E) {
                let e = U(),
                  t = W && W(),
                  n = o && o();
                e && N(u, z(e[0], e[1], E)),
                  t && N(u, j(t[0], E)),
                  n && N(u, K(n[0], E));
              }
              return u;
            },
            v,
          ];
        },
        nR = (e, t, n) => ei(e, eu(t, n)),
        nk = (e, t, n) => {
          let [r, o] = ty(ea(t), n),
            l = e / o;
          return nR(0, 1, n ? (n.n ? (o - e) / o : n.i ? e / r : l) : l);
        },
        nT = (e, t, n) => {
          if (n) {
            let e = t ? eQ : e0,
              { Ot: r, Ct: o } = n;
            return nR(0, 1, e7(o)[e] / e7(r)[e]);
          }
          let r = t ? "x" : "y",
            { Ht: o, zt: l } = e,
            i = l[r];
          return nR(0, 1, i / (i + o[r]));
        },
        nS = (e, t, n, r) => {
          let o = nT(e, r, t);
          return (1 / o) * (1 - o) * n;
        },
        nO = (e, t, n, r) => {
          let { j: o, A: l } = nc(),
            { scrollbars: i } = o(),
            { slot: u } = i,
            { It: a, lt: c, it: s, At: f, Et: d, Tt: p, _t: v } = t,
            { scrollbars: m } = f ? {} : e,
            { slot: h } = m || {},
            g = new Map(),
            w = (e) => ek && new ek({ source: d, axis: e }),
            x = w("x"),
            E = w("y"),
            R = nd([a, c, s], () => (v && p ? a : c), u, h),
            k = (e) => v && !p && Y(e) === s,
            P = (e) => {
              g.forEach((t, n) => {
                (!e || S(b(e) ? e : [e], n)) &&
                  ((t || []).forEach((e) => {
                    e && e.cancel();
                  }),
                  g.delete(n));
              });
            },
            M = (e, t, n) => {
              let r = n ? eM : eL;
              T(e, (e) => {
                r(e.Dt, t);
              });
            },
            I = (e, t) => {
              T(e, (e) => {
                let [n, r] = t(e);
                e$(n, r);
              });
            },
            D = (e, t, n, r) =>
              t && e.animate(n, { timeline: t, composite: r }),
            F = (e, t) => {
              I(e, (e) => {
                let { Ct: r } = e;
                return [r, { [t ? eQ : e0]: ez(nT(n, t)) }];
              });
            },
            j = (e, t) => {
              x && E
                ? e.forEach((e) => {
                    let { Dt: r, Ct: o } = e,
                      l = eT(nS, n, e),
                      i = t && e_(r),
                      u = l(i ? 1 : 0, t),
                      a = l(i ? 0 : 1, t);
                    P(o),
                      g.set(o, [
                        D(
                          o,
                          t ? x : E,
                          N(
                            { transform: [eK(ez(u), t), eK(ez(a), t)] },
                            i ? { clear: ["left"] } : {}
                          )
                        ),
                      ]);
                  })
                : I(e, (e) => {
                    let { Ct: r, Dt: o } = e,
                      { V: l } = nc(),
                      i = t ? "x" : "y",
                      { Ht: u } = n,
                      a = e_(o);
                    return [
                      r,
                      {
                        transform: eK(
                          ez(nS(n, e, nk(tb(d)[i], u[i], t && a && l), t)),
                          t
                        ),
                      },
                    ];
                  });
            },
            $ = (e) => {
              let { Dt: t } = e,
                n = k(t) && t,
                { x: r, y: o } = tb(d);
              return [n, { transform: n ? eK({ x: eV(r), y: eV(o) }) : "" }];
            },
            _ = (e, t, n, r) =>
              D(
                e,
                t,
                { transform: [eK(eV(0), r), eK(eV(ei(0, n - 0.5)), r)] },
                "add"
              ),
            H = [],
            K = [],
            z = [],
            V = (e, t, n) => {
              let r = y(n),
                o = !r || n,
                l = !r || !n;
              o && M(K, e, t), l && M(z, e, t);
            },
            W = (e) => {
              let t = e ? K : z,
                n = L(t) ? t0 : "",
                o = er(`${tB} ${e ? tY : tJ} ${n}`),
                i = er(tX),
                u = er(tG),
                a = { Dt: o, Ot: i, Ct: u };
              return (
                l || eM(o, "os-no-css-vars"),
                A(t, a),
                A(H, [ee(o, i), ee(i, u), eT(Z, o), P, r(a, V, j, e)]),
                a
              );
            },
            q = eT(W, !0),
            B = eT(W, !1);
          return (
            q(),
            B(),
            [
              {
                kt: () => {
                  F(K, !0), F(z);
                },
                Mt: () => {
                  j(K, !0), j(z);
                },
                Rt: () => {
                  if (v) {
                    if (E && E) {
                      let { Ht: e } = n;
                      O(z, K).forEach(({ Dt: t }) => {
                        P(t),
                          k(t) && g.set(t, [_(t, x, e.x, !0), _(t, E, e.y)]);
                      });
                    } else I(K, $), I(z, $);
                  }
                },
                Pt: V,
                Lt: { L: x, Vt: K, Ut: q, Bt: eT(I, K) },
                jt: { L: E, Vt: z, Ut: B, Bt: eT(I, z) },
              },
              () => (
                ee(R, K[0].Dt),
                ee(R, z[0].Dt),
                ef(() => {
                  V(t0);
                }, 300),
                eT(C, H)
              ),
            ]
          );
        },
        nA = (e, t, n) => {
          let { lt: r, Et: o, Nt: l } = t;
          return (t, i, u, a) => {
            let { Dt: c, Ot: s, Ct: f } = t,
              [d, p] = eS(333),
              [v, m] = eS(),
              h = eT(u, [t], a),
              y = !!o.scrollBy,
              g = `client${a ? "X" : "Y"}`,
              b = a ? eQ : e0,
              w = a ? "left" : "top",
              x = a ? "w" : "h",
              E = a ? "x" : "y",
              R = (e) => e.propertyName.indexOf(b) > -1,
              k = !0;
            return eT(C, [
              tf(c, "pointerenter", () => {
                i(t1, !0);
              }),
              tf(c, "pointerleave pointercancel", () => {
                i(t1, !1);
              }),
              tf(
                c,
                "wheel",
                (e) => {
                  let { deltaX: t, deltaY: n, deltaMode: l } = e;
                  y &&
                    k &&
                    0 === l &&
                    Y(c) === r &&
                    o.scrollBy({ left: t, top: n, behavior: "smooth" }),
                    (k = !1),
                    i(t4, !0),
                    d(() => {
                      (k = !0), i(t4);
                    }),
                    tp(e);
                },
                { S: !1, $: !0 }
              ),
              tf(f, "transitionstart", (e) => {
                if (R(e)) {
                  let e = () => {
                    h(), v(e);
                  };
                  e();
                }
              }),
              tf(f, "transitionend transitioncancel", (e) => {
                R(e) && (m(), h());
              }),
              tf(c, "mousedown", eT(tf, l, "click", td, { O: !0, $: !0 }), {
                $: !0,
              }),
              (() => {
                let t =
                    "pointerup pointerleave pointercancel lostpointercapture",
                  i = (e, t) => (r) => {
                    let { Ht: l } = n,
                      i = ((t * r) / (e4(s)[x] - e4(f)[x])) * l[E];
                    tg(o, { [E]: e + i });
                  };
                return tf(s, "pointerdown", (n) => {
                  let u = J(n.target, `.${tG}`) === f,
                    a = u ? f : s,
                    c = e.scrollbars,
                    { button: d, isPrimary: p, pointerType: v } = n,
                    { pointers: m } = c,
                    h =
                      0 === d &&
                      p &&
                      c[u ? "dragScroll" : "clickScroll"] &&
                      (m || []).includes(v);
                  if ((K(r, tO, tF, !0), h)) {
                    let e = !u && n.shiftKey,
                      c = eT(e7, f),
                      d = eT(e7, s),
                      p = (e, t) => (e || c())[w] - (t || d())[w],
                      v = ea(e7(o)[b]) / e4(o)[x] || 1,
                      m = i(tb(o)[E] || 0, 1 / v),
                      h = n[g],
                      y = c(),
                      R = d(),
                      k = y[b],
                      T = p(y, R) + k / 2,
                      S = h - R[w],
                      O = u ? 0 : S - T,
                      P = (e) => {
                        C(L), a.releasePointerCapture(e.pointerId);
                      },
                      L = [
                        eT(K, r, tO, tF),
                        tf(l, t, P),
                        tf(l, "selectstart", (e) => tp(e), { S: !1 }),
                        tf(s, t, P),
                        tf(s, "pointermove", (t) => {
                          let n = t[g] - h;
                          (u || e) && m(O + n);
                        }),
                      ];
                    if (e) m(O);
                    else if (!u) {
                      let e = nn("__osClickScrollPlugin");
                      e && A(L, e(m, p, O, k, S));
                    }
                    a.setPointerCapture(n.pointerId);
                  }
                });
              })(),
              p,
              m,
            ]);
          };
        },
        nP = (e, t, n, r, o, l) => {
          let i, u, a, c, s;
          let f = G,
            d = 0,
            [p, v] = eS(),
            [m, h] = eS(),
            [y, g] = eS(100),
            [b, w] = eS(100),
            [x, E] = eS(100),
            [R, k] = eS(() => d),
            [T, S] = nO(e, o, r, nA(t, o, r)),
            { lt: O, Gt: P, Tt: L } = o,
            { Pt: M, kt: I, Mt: D, Rt: N } = T,
            F = (e) => {
              M(t3, e, !0), M(t3, e, !1);
            },
            j = (e, t) => {
              if ((k(), e)) M(t6);
              else {
                let e = eT(M, t6, !0);
                d > 0 && !t ? R(e) : e();
              }
            },
            $ = (e) => "mouse" === e.pointerType,
            _ = (e) => {
              $(e) && (c = u) && j(!0);
            },
            H = [
              g,
              k,
              w,
              E,
              h,
              v,
              () => f(),
              tf(O, "pointerover", _, { O: !0 }),
              tf(O, "pointerenter", _),
              tf(O, "pointerleave", (e) => {
                $(e) && ((c = !1), u && j(!1));
              }),
              tf(O, "pointermove", (e) => {
                $(e) &&
                  i &&
                  p(() => {
                    g(),
                      j(!0),
                      b(() => {
                        i && j(!1);
                      });
                  });
              }),
              tf(P, "scroll", (e) => {
                m(() => {
                  D(),
                    a && j(!0),
                    y(() => {
                      a && !c && j(!1);
                    });
                }),
                  l(e),
                  N();
              }),
            ];
          return [
            () => eT(C, A(H, S())),
            ({ St: e, xt: t, qt: o, Ft: l }) => {
              let { Wt: c, Xt: p, Yt: v } = l || {},
                { gt: m, ot: h } = o || {},
                { rt: y } = n,
                { I: g } = nc(),
                { Ht: b, Jt: w, Kt: E } = r,
                [R, k] = e("showNativeOverlaidScrollbars"),
                [T, S] = e("scrollbars.theme"),
                [O, A] = e("scrollbars.visibility"),
                [C, $] = e("scrollbars.autoHide"),
                [_, H] = e("scrollbars.autoHideSuspend"),
                [K] = e("scrollbars.autoHideDelay"),
                [z, V] = e("scrollbars.dragScroll"),
                [W, q] = e("scrollbars.clickScroll"),
                B = E.x || E.y,
                U = R && g.x && g.y,
                Y = (e, t) => {
                  let n = "visible" === O || ("auto" === O && "scroll" === e);
                  return M(tZ, n, t), n;
                };
              if (
                ((d = K),
                h &&
                  !t &&
                  (_ && B
                    ? (F(!1),
                      f(),
                      x(() => {
                        f = tf(P, "scroll", eT(F, !0), { O: !0 });
                      }))
                    : F(!0)),
                k && M("os-theme-none", U),
                S && (M(s), M(T, !0), (s = T)),
                H && !_ && F(!0),
                $ &&
                  ((i = "move" === C),
                  (u = "leave" === C),
                  j(!(a = "never" !== C), !0)),
                V && M(t8, z),
                q && M(t9, W),
                v || A)
              ) {
                let e = Y(w.x, !0),
                  t = Y(w.y, !1);
                M(tQ, !(e && t));
              }
              (c || p || m || t) &&
                (I(),
                D(),
                N(),
                M(t2, !b.x, !0),
                M(t2, !b.y, !1),
                M(tU, y && !L));
            },
            {},
            T,
          ];
        },
        nL = (e) => {
          let t = nc(),
            { j: n, H: r } = t,
            o = nn(nr),
            l = o && o.C,
            { elements: i } = n(),
            { host: u, padding: a, viewport: c, content: s } = i,
            f = R(e),
            d = f ? {} : e,
            { elements: p } = d,
            { host: v, padding: m, viewport: h, content: y } = p || {},
            g = f ? e : d.target,
            b = B(g, "textarea"),
            w = g.ownerDocument,
            x = w.documentElement,
            E = g === w.body,
            k = w.defaultView,
            T = eT(nf, [g]),
            O = eT(nd, [g]),
            P = eT(ns, [g]),
            L = eT(er, ""),
            M = eT(T, L, c),
            I = eT(O, L, s),
            N = M(h),
            F = N === g,
            j = F && E,
            _ = !F && I(y),
            V = !F && R(N) && N === _,
            W = V && !!P(s),
            q = W ? M() : N,
            J = W ? _ : I(),
            X = V ? q : N,
            Q = j ? x : X,
            eo = b ? T(L, u, v) : g,
            el = j ? Q : eo,
            ei = w.activeElement,
            eu = !F && k.top === k && ei === g,
            ea = {
              It: g,
              lt: el,
              it: Q,
              Zt: !F && O(L, a, m),
              ut: V ? J : _,
              Qt: !F && !r && l && l(t),
              Et: j ? x : Q,
              Gt: j ? w : Q,
              tn: k,
              Nt: w,
              ft: b,
              Tt: E,
              At: f,
              _t: F,
              nn: V,
              dt: (e, t) => z(Q, F ? tO : t$, F ? t : e),
              vt: (e, t, n) => K(Q, F ? tO : t$, F ? t : e, n),
            },
            ec = D(ea).reduce((e, t) => {
              let n = ea[t];
              return A(e, !!(n && R(n)) && !Y(n) && n);
            }, []),
            es = (e) => (e ? S(ec, e) : null),
            { It: ef, lt: ed, Zt: ep, it: ev, ut: em, Qt: eh } = ea,
            ey = [
              () => {
                H(ed, tO), H(ed, tC), H(ef, tC), E && (H(x, tO), H(x, tC));
              },
            ],
            eg = b && es(ed),
            eb = b ? ef : U([em, ev, ep, ed, ef].find((e) => !1 === es(e))),
            ew = j ? ef : em || ev,
            ex = eT(C, ey);
          return [
            ea,
            () => {
              $(ed, tO, F ? "viewport" : "host"),
                $(ep, tK, ""),
                $(em, tz, ""),
                F || $(ev, t$, "");
              let e = E && !F ? eM(Y(g), tM) : G,
                t = (e) => {
                  ee(Y(e), U(e)), Z(e);
                };
              if (
                (eg &&
                  (en(ef, ed),
                  A(ey, () => {
                    en(ed, ef), Z(ed);
                  })),
                ee(ew, eb),
                ee(ed, ep),
                ee(ep || ed, !F && ev),
                ee(ev, em),
                A(ey, () => {
                  e(),
                    H(ep, tK),
                    H(em, tz),
                    H(ev, tI),
                    H(ev, tD),
                    H(ev, t$),
                    es(em) && t(em),
                    es(ev) && t(ev),
                    es(ep) && t(ep);
                }),
                r && !F && (K(ev, t$, tH, !0), A(ey, eT(H, ev, t$))),
                eh && (et(ev, eh), A(ey, eT(Z, eh))),
                eu)
              ) {
                let e = "tabindex",
                  t = $(ev, e);
                $(ev, e, "-1"), ev.focus();
                let n = () => (t ? $(ev, e, t) : H(ev, e)),
                  r = tf(w, "pointerdown keydown", () => {
                    n(), r();
                  });
                A(ey, [n, r]);
              } else ei && ei.focus && ei.focus();
              return (eb = 0), ex;
            },
            ex,
          ];
        },
        nM =
          ({ ut: e }) =>
          ({ qt: t, sn: n, xt: r }) => {
            let { U: o } = nc(),
              { ht: l } = t || {},
              { ct: i } = n;
            (e || !o) && (l || r) && e$(e, { [e0]: i ? "" : "100%" });
          },
        nC = ({ lt: e, Zt: t, it: n, _t: r }, o) => {
          let [l, u] = i({ u: tl, o: eH() }, eT(eH, e, "padding", ""));
          return ({ St: e, qt: i, sn: a, xt: c }) => {
            let [s, f] = u(c),
              { H: d, U: p } = nc(),
              { et: v, bt: m, gt: h } = i || {},
              { rt: y } = a,
              [g, b] = e("paddingAbsolute"),
              w = c || (!p && m);
            (v || f || w) && ([s, f] = l(c));
            let x = !r && (b || h || f);
            if (x) {
              let e = !g || (!t && !d),
                r = s.r + s.l,
                l = s.t + s.b,
                i = {
                  [eJ]: e && !y ? -r : 0,
                  [eX]: e ? -l : 0,
                  [eY]: e && y ? -r : 0,
                  top: e ? -s.t : 0,
                  right: e ? (y ? -s.r : "auto") : 0,
                  left: e ? (y ? "auto" : -s.l) : 0,
                  [eQ]: e ? `calc(100% + ${r}px)` : "",
                },
                u = {
                  [eW]: e ? s.t : 0,
                  [eq]: e ? s.r : 0,
                  [eU]: e ? s.b : 0,
                  [eB]: e ? s.l : 0,
                };
              e$(t || n, i),
                e$(n, u),
                N(o, { Zt: s, en: !e, D: t ? u : N({}, i, u) });
            }
            return { cn: x };
          };
        },
        nI = (
          { lt: e, Zt: t, it: n, Qt: r, _t: o, vt: l, Tt: u, tn: a },
          c
        ) => {
          let s = eT(ei, 0),
            f = "visible",
            d = { u: tr, o: { w: 0, h: 0 } },
            p = (e, t) => {
              let n = el.devicePixelRatio % 1 != 0 ? 1 : 0,
                r = { w: s(e.w - t.w), h: s(e.h - t.h) };
              return { w: r.w > n ? r.w : 0, h: r.h > n ? r.h : 0 };
            },
            v = (e) => 0 === e.indexOf(f),
            { P: m, U: h, H: y, I: g } = nc(),
            b = nn(nr),
            w = !o && !y && (g.x || g.y),
            x = u && o,
            [E, R] = i(d, eT(e5, n)),
            [k, T] = i(d, eT(e8, n)),
            [S, O] = i(d),
            [A, P] = i(d),
            [L] = i({ u: to, o: { x: e1, y: e1 } }),
            M = (t, r) => {
              if ((e$(n, { [e0]: "" }), r)) {
                let { en: r, Zt: o } = c,
                  { rn: l, k: i } = t,
                  u = e5(e),
                  a = e9(e),
                  s = "content-box" === e$(n, "boxSizing"),
                  f = r || s ? o.b + o.t : 0,
                  d = !(g.x && s);
                e$(n, { [e0]: a.h + u.h + (l.x && d ? i.x : 0) - f });
              }
            },
            C = (e, t) => {
              let r = y || e ? 0 : 42,
                o = (e, o, l) => {
                  let i = e$(n, e),
                    u = "scroll" === (t ? t[e] : i);
                  return [i, u, u && !y ? (o ? r : l) : 0, o && !!r];
                },
                [l, i, u, a] = o(eG, g.x, m.x),
                [c, s, f, d] = o(eZ, g.y, m.y);
              return {
                Jt: { x: l, y: c },
                rn: { x: i, y: s },
                k: { x: u, y: f },
                M: { x: a, y: d },
              };
            },
            I = (e, t, n, r) => {
              let o = (e, t) => {
                  let n = v(e),
                    r = (t && n && e.replace(`${f}-`, "")) || "";
                  return [t && !n ? e : "", v(r) ? "hidden" : r];
                },
                [l, i] = o(n.x, t.x),
                [u, a] = o(n.y, t.y);
              return (
                (r[eG] = i && u ? i : l), (r[eZ] = a && l ? a : u), C(e, r)
              );
            },
            D = (e, t, n, r) => {
              let { k: o, M: l } = e,
                { x: i, y: u } = l,
                { x: a, y: s } = o,
                { D: f } = c,
                d = t ? eY : eJ,
                p = t ? eB : eq,
                v = f[d],
                m = f[eX],
                h = f[p],
                y = f[eU];
              (r[eQ] = `calc(100% + ${s + -1 * v}px)`),
                (r[d] = -s + v),
                (r[eX] = -a + m),
                n && ((r[p] = h + (u ? s : 0)), (r[eU] = y + (i ? a : 0)));
            },
            [F, j] = b ? b.T(w, h, n, r, c, C, D) : [() => w, () => [G]];
          return ({ St: r, qt: i, sn: u, xt: f }, { cn: d }) => {
            let m;
            let { et: b, wt: w, bt: _, ht: H, gt: z, yt: V } = i || {},
              { ct: W, rt: q } = u,
              [B, U] = r("showNativeOverlaidScrollbars"),
              [Y, J] = r("overflow"),
              X = B && g.x && g.y,
              G = !o && !h && (b || _ || w || U || H),
              Z = b || d || _ || z || V || U,
              Q = v(Y.x),
              ee = v(Y.y),
              et = Q || ee,
              en = R(f),
              er = T(f),
              eo = O(f),
              el = P(f);
            if (
              (U && y && l(tH, "scrollbarHidden", !X), G && M((m = C(X)), W), Z)
            ) {
              et && l(tN, tN, !1);
              let [e, t] = j(X, q, m),
                [r, o] = (en = E(f)),
                [i, u] = (er = k(f)),
                c = e9(n),
                d = i,
                v = c;
              e(),
                (u || o || U) &&
                  t &&
                  !X &&
                  F(t, i, r, q) &&
                  ((v = e9(n)), (d = e8(n)));
              let h = e6(a),
                y = { w: s(ei(i.w, d.w) + r.w), h: s(ei(i.h, d.h) + r.h) },
                g = {
                  w: s((x ? h.w : v.w + s(c.w - i.w)) + r.w),
                  h: s((x ? h.h : v.h + s(c.h - i.h)) + r.h),
                };
              (el = A(g)), (eo = S(p(y, g), f));
            }
            let [eu, ea] = el,
              [ec, es] = eo,
              [ef, ed] = er,
              [ep, ev] = en,
              em = { x: ec.w > 0, y: ec.h > 0 },
              eh =
                (Q && ee && (em.x || em.y)) ||
                (Q && em.x && !em.y) ||
                (ee && em.y && !em.x);
            if (d || z || V || ev || ed || ea || es || J || U || G || Z) {
              let t = {
                  [eJ]: 0,
                  [eX]: 0,
                  [eY]: 0,
                  [eQ]: "",
                  [eG]: "",
                  [eZ]: "",
                },
                r = I(X, em, Y, t),
                l = F(r, ef, ep, q);
              o || D(r, q, l, t),
                G && M(r, W),
                o ? ($(e, tI, t[eG]), $(e, tD, t[eZ])) : e$(n, t);
            }
            K(e, tO, tN, eh), K(t, tK, tN, eh), o || K(n, t$, tN, et);
            let [ey, eg] = L(C(X).Jt);
            return (
              N(c, {
                Jt: ey,
                zt: { x: eu.w, y: eu.h },
                Ht: { x: ec.w, y: ec.h },
                Kt: em,
              }),
              { Yt: eg, Wt: ea, Xt: es }
            );
          };
        },
        nD = (e) => {
          let [t, n, r] = nL(e),
            o = {
              Zt: { t: 0, r: 0, b: 0, l: 0 },
              en: !1,
              D: {
                [eJ]: 0,
                [eX]: 0,
                [eY]: 0,
                [eW]: 0,
                [eq]: 0,
                [eU]: 0,
                [eB]: 0,
              },
              zt: { x: 0, y: 0 },
              Ht: { x: 0, y: 0 },
              Jt: { x: e1, y: e1 },
              Kt: { x: !1, y: !1 },
            },
            { It: l, it: i, vt: u, _t: a } = t,
            { H: c, I: s, U: f } = nc(),
            d = !c && (s.x || s.y),
            p = [nM(t), nC(t, o), nI(t, o)];
          return [
            n,
            (e) => {
              let t = {},
                n = (d || !f) && tb(i);
              return (
                u("", tj, !0),
                T(p, (n) => {
                  N(t, n(e, t) || {});
                }),
                u("", tj),
                tg(i, n),
                a || tg(l, 0),
                t
              );
            },
            o,
            t,
            r,
          ];
        },
        nN = (e, t, n, r) => {
          let [o, l, i, u, a] = nD(e),
            [c, s, f] = nE(u, (e) => {
              h({}, e);
            }),
            [d, p, , v] = nP(e, t, f, i, u, r),
            m = (e) => D(e).some((t) => !!e[t]),
            h = (e, r) => {
              let { ln: o, xt: i, $t: u, an: a } = e,
                c = o || {},
                d = !!i,
                v = { St: tS(t, c, d), ln: c, xt: d };
              if (a) return p(v), !1;
              let h = r || s(N({}, v, { $t: u })),
                y = l(N({}, v, { sn: f, qt: h }));
              p(N({}, v, { qt: h, Ft: y }));
              let g = m(h),
                b = m(y),
                w = g || b || !j(c) || d;
              return w && n(e, { qt: h, Ft: y }), w;
            };
          return [
            () => {
              let { It: e, it: t, Nt: n, Tt: r } = u,
                l = tb(r ? n.documentElement : e),
                i = [c(), o(), d()];
              return tg(t, l), eT(C, i);
            },
            h,
            () => ({ un: f, fn: i }),
            { _n: u, dn: v },
            a,
          ];
        },
        nF = (e, t, n) => {
          let { G: r } = nc(),
            o = R(e),
            l = o ? e : e.target,
            i = ny(l);
          if (t && !i) {
            let i = !1,
              u = [],
              a = {},
              c = (e) => {
                let t = F(e, !0),
                  n = nn("__osOptionsValidationPlugin");
                return n ? n(t, !0) : t;
              },
              s = N({}, r(), c(t)),
              [f, d, p] = tx(),
              [v, m, h] = tx(n),
              y = (e, t) => {
                h(e, t), p(e, t);
              },
              [g, b, w, x, E] = nN(
                e,
                s,
                ({ ln: e, xt: t }, { qt: n, Ft: r }) => {
                  let { et: o, gt: l, ht: i, bt: u, wt: a, ot: c } = n,
                    { Wt: s, Xt: f, Yt: d } = r;
                  y("updated", [
                    k,
                    {
                      updateHints: {
                        sizeChanged: !!o,
                        directionChanged: !!l,
                        heightIntrinsicChanged: !!i,
                        overflowEdgeChanged: !!s,
                        overflowAmountChanged: !!f,
                        overflowStyleChanged: !!d,
                        contentMutation: !!u,
                        hostMutation: !!a,
                        appear: !!c,
                      },
                      changedOptions: e || {},
                      force: !!t,
                    },
                  ]);
                },
                (e) => y("scroll", [k, e])
              ),
              R = (e) => {
                nh(l), C(u), (i = !0), y("destroyed", [k, e]), d(), m();
              },
              k = {
                options(e, t) {
                  if (e) {
                    let n = tT(s, N(t ? r() : {}, c(e)));
                    j(n) || (N(s, n), b({ ln: n }));
                  }
                  return N({}, s);
                },
                on: v,
                off: (e, t) => {
                  e && t && m(e, t);
                },
                state() {
                  let { un: e, fn: t } = w(),
                    { rt: n } = e,
                    { zt: r, Ht: o, Jt: l, Kt: u, Zt: a, en: c } = t;
                  return N(
                    {},
                    {
                      overflowEdge: r,
                      overflowAmount: o,
                      overflowStyle: l,
                      hasOverflow: u,
                      padding: a,
                      paddingAbsolute: c,
                      directionRTL: n,
                      destroyed: i,
                    }
                  );
                },
                elements() {
                  let {
                      It: e,
                      lt: t,
                      Zt: n,
                      it: r,
                      ut: o,
                      Et: l,
                      Gt: i,
                    } = x._n,
                    { Lt: u, jt: a } = x.dn,
                    c = (e) => {
                      let { Ct: t, Ot: n, Dt: r } = e;
                      return { scrollbar: r, track: n, handle: t };
                    },
                    s = (e) => {
                      let { Vt: t, Ut: n } = e;
                      return N({}, c(t[0]), {
                        clone: () => {
                          let e = c(n());
                          return b({ an: !0 }), e;
                        },
                      });
                    };
                  return N(
                    {},
                    {
                      target: e,
                      host: t,
                      padding: n || r,
                      viewport: r,
                      content: o || r,
                      scrollOffsetElement: l,
                      scrollEventElement: i,
                      scrollbarHorizontal: s(u),
                      scrollbarVertical: s(a),
                    }
                  );
                },
                update: (e) => b({ xt: e, $t: !0 }),
                destroy: eT(R, !1),
                plugin: (e) => a[D(e)[0]],
              };
            return (
              (A(u, [E]),
              nm(l, k),
              nt(t5, nF, [k, f, a]),
              np(x._n.Tt, !o && e.cancel))
                ? R(!0)
                : (A(u, g()), y("initialized", [k]), k.update(!0)),
              k
            );
          }
          return i;
        };
      (nF.plugin = (e) => {
        let t = b(e),
          n = t ? e : [e],
          r = n.map((e) => nt(e, nF)[0]);
        return ne(n), t ? r : r[0];
      }),
        (nF.valid = (e) => {
          let t = e && e.elements,
            n = g(t) && t();
          return E(n) && !!ny(n.target);
        }),
        (nF.env = () => {
          let {
            P: e,
            I: t,
            H: n,
            V: r,
            U: o,
            A: l,
            L: i,
            F: u,
            W: a,
            j: c,
            N: s,
            G: f,
            q: d,
          } = nc();
          return N(
            {},
            {
              scrollbarsSize: e,
              scrollbarsOverlaid: t,
              scrollbarsHiding: n,
              rtlScrollBehavior: r,
              flexboxGlue: o,
              cssCustomProperties: l,
              scrollTimeline: i,
              staticDefaultInitialization: u,
              staticDefaultOptions: a,
              getDefaultInitialization: c,
              setDefaultInitialization: s,
              getDefaultOptions: f,
              setDefaultOptions: d,
            }
          );
        });
      let nj = () => {
          let e, t;
          if (typeof window > "u") {
            let e = () => {};
            return [e, e];
          }
          let n = window,
            r = "function" == typeof n.requestIdleCallback,
            o = n.requestAnimationFrame,
            l = n.cancelAnimationFrame,
            i = r ? n.requestIdleCallback : o,
            u = r ? n.cancelIdleCallback : l,
            a = () => {
              u(e), l(t);
            };
          return [
            (n, l) => {
              a(),
                (e = i(
                  r
                    ? () => {
                        a(), (t = o(n));
                      }
                    : n,
                  "object" == typeof l ? l : { timeout: 2233 }
                ));
            },
            a,
          ];
        },
        n$ = (e) => {
          let { options: t, events: n, defer: r } = e || {},
            [o, i] = (0, l.useMemo)(nj, []),
            u = (0, l.useRef)(null),
            a = (0, l.useRef)(r),
            c = (0, l.useRef)(t),
            s = (0, l.useRef)(n);
          return (
            (0, l.useEffect)(() => {
              a.current = r;
            }, [r]),
            (0, l.useEffect)(() => {
              let { current: e } = u;
              (c.current = t), nF.valid(e) && e.options(t || {}, !0);
            }, [t]),
            (0, l.useEffect)(() => {
              let { current: e } = u;
              (s.current = n), nF.valid(e) && e.on(n || {}, !0);
            }, [n]),
            (0, l.useEffect)(
              () => () => {
                var e;
                i(), null == (e = u.current) || e.destroy();
              },
              []
            ),
            (0, l.useMemo)(
              () => [
                (e) => {
                  let t = u.current;
                  if (nF.valid(t)) return;
                  let n = a.current,
                    r = c.current || {},
                    l = s.current || {},
                    i = () => (u.current = nF(e, r, l));
                  n ? o(i, n) : i();
                },
                () => u.current,
              ],
              []
            )
          );
        },
        n_ = (0, l.forwardRef)((e, t) => {
          let {
              element: n = "div",
              options: r,
              events: o,
              defer: i,
              children: u,
              ...a
            } = e,
            c = (0, l.useRef)(null),
            s = (0, l.useRef)(null),
            [f, d] = n$({ options: r, events: o, defer: i });
          return (
            (0, l.useEffect)(() => {
              let { current: e } = c,
                { current: t } = s;
              return (
                e &&
                  t &&
                  f({ target: e, elements: { viewport: t, content: t } }),
                () => {
                  var e;
                  return null == (e = d()) ? void 0 : e.destroy();
                }
              );
            }, [f, n]),
            (0, l.useImperativeHandle)(
              t,
              () => ({ osInstance: d, getElement: () => c.current }),
              []
            ),
            l.createElement(
              n,
              { "data-overlayscrollbars-initialize": "", ref: c, ...a },
              l.createElement(
                "div",
                { "data-overlayscrollbars-contents": "", ref: s },
                u
              )
            )
          );
        });
    },
    84858: function (e, t, n) {
      "use strict";
      n.d(t, {
        RR: function () {
          return a;
        },
        cv: function () {
          return s;
        },
        dp: function () {
          return d;
        },
        oo: function () {
          return l;
        },
        uY: function () {
          return f;
        },
        x7: function () {
          return u;
        },
      });
      var r = n(66492);
      function o(e, t, n) {
        let o,
          { reference: l, floating: i } = e,
          u = (0, r.Qq)(t),
          a = (0, r.Wh)(t),
          c = (0, r.I4)(a),
          s = (0, r.k3)(t),
          f = "y" === u,
          d = l.x + l.width / 2 - i.width / 2,
          p = l.y + l.height / 2 - i.height / 2,
          v = l[c] / 2 - i[c] / 2;
        switch (s) {
          case "top":
            o = { x: d, y: l.y - i.height };
            break;
          case "bottom":
            o = { x: d, y: l.y + l.height };
            break;
          case "right":
            o = { x: l.x + l.width, y: p };
            break;
          case "left":
            o = { x: l.x - i.width, y: p };
            break;
          default:
            o = { x: l.x, y: l.y };
        }
        switch ((0, r.hp)(t)) {
          case "start":
            o[a] -= v * (n && f ? -1 : 1);
            break;
          case "end":
            o[a] += v * (n && f ? -1 : 1);
        }
        return o;
      }
      let l = async (e, t, n) => {
        let {
            placement: r = "bottom",
            strategy: l = "absolute",
            middleware: i = [],
            platform: u,
          } = n,
          a = i.filter(Boolean),
          c = await (null == u.isRTL ? void 0 : u.isRTL(t)),
          s = await u.getElementRects({
            reference: e,
            floating: t,
            strategy: l,
          }),
          { x: f, y: d } = o(s, r, c),
          p = r,
          v = {},
          m = 0;
        for (let n = 0; n < a.length; n++) {
          let { name: i, fn: h } = a[n],
            {
              x: y,
              y: g,
              data: b,
              reset: w,
            } = await h({
              x: f,
              y: d,
              initialPlacement: r,
              placement: p,
              strategy: l,
              middlewareData: v,
              rects: s,
              platform: u,
              elements: { reference: e, floating: t },
            });
          if (
            ((f = null != y ? y : f),
            (d = null != g ? g : d),
            (v = { ...v, [i]: { ...v[i], ...b } }),
            w && m <= 50)
          ) {
            m++,
              "object" == typeof w &&
                (w.placement && (p = w.placement),
                w.rects &&
                  (s =
                    !0 === w.rects
                      ? await u.getElementRects({
                          reference: e,
                          floating: t,
                          strategy: l,
                        })
                      : w.rects),
                ({ x: f, y: d } = o(s, p, c))),
              (n = -1);
            continue;
          }
        }
        return { x: f, y: d, placement: p, strategy: l, middlewareData: v };
      };
      async function i(e, t) {
        var n;
        void 0 === t && (t = {});
        let { x: o, y: l, platform: i, rects: u, elements: a, strategy: c } = e,
          {
            boundary: s = "clippingAncestors",
            rootBoundary: f = "viewport",
            elementContext: d = "floating",
            altBoundary: p = !1,
            padding: v = 0,
          } = (0, r.ku)(t, e),
          m = (0, r.yd)(v),
          h = a[p ? ("floating" === d ? "reference" : "floating") : d],
          y = (0, r.JB)(
            await i.getClippingRect({
              element:
                null ==
                  (n = await (null == i.isElement ? void 0 : i.isElement(h))) ||
                n
                  ? h
                  : h.contextElement ||
                    (await (null == i.getDocumentElement
                      ? void 0
                      : i.getDocumentElement(a.floating))),
              boundary: s,
              rootBoundary: f,
              strategy: c,
            })
          ),
          g = "floating" === d ? { ...u.floating, x: o, y: l } : u.reference,
          b = await (null == i.getOffsetParent
            ? void 0
            : i.getOffsetParent(a.floating)),
          w = ((await (null == i.isElement ? void 0 : i.isElement(b))) &&
            (await (null == i.getScale ? void 0 : i.getScale(b)))) || {
            x: 1,
            y: 1,
          },
          x = (0, r.JB)(
            i.convertOffsetParentRelativeRectToViewportRelativeRect
              ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
                  rect: g,
                  offsetParent: b,
                  strategy: c,
                })
              : g
          );
        return {
          top: (y.top - x.top + m.top) / w.y,
          bottom: (x.bottom - y.bottom + m.bottom) / w.y,
          left: (y.left - x.left + m.left) / w.x,
          right: (x.right - y.right + m.right) / w.x,
        };
      }
      let u = (e) => ({
          name: "arrow",
          options: e,
          async fn(t) {
            let {
                x: n,
                y: o,
                placement: l,
                rects: i,
                platform: u,
                elements: a,
              } = t,
              { element: c, padding: s = 0 } = (0, r.ku)(e, t) || {};
            if (null == c) return {};
            let f = (0, r.yd)(s),
              d = { x: n, y: o },
              p = (0, r.Wh)(l),
              v = (0, r.I4)(p),
              m = await u.getDimensions(c),
              h = "y" === p,
              y = h ? "clientHeight" : "clientWidth",
              g = i.reference[v] + i.reference[p] - d[p] - i.floating[v],
              b = d[p] - i.reference[p],
              w = await (null == u.getOffsetParent
                ? void 0
                : u.getOffsetParent(c)),
              x = w ? w[y] : 0;
            (x && (await (null == u.isElement ? void 0 : u.isElement(w)))) ||
              (x = a.floating[y] || i.floating[v]);
            let E = x / 2 - m[v] / 2 - 1,
              R = (0, r.VV)(f[h ? "top" : "left"], E),
              k = (0, r.VV)(f[h ? "bottom" : "right"], E),
              T = x - m[v] - k,
              S = x / 2 - m[v] / 2 + (g / 2 - b / 2),
              O = (0, r.uZ)(R, S, T),
              A =
                null != (0, r.hp)(l) &&
                S != O &&
                i.reference[v] / 2 - (S < R ? R : k) - m[v] / 2 < 0
                  ? S < R
                    ? R - S
                    : T - S
                  : 0;
            return { [p]: d[p] - A, data: { [p]: O, centerOffset: S - O + A } };
          },
        }),
        a = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "flip",
              options: e,
              async fn(t) {
                var n, o, l, u;
                let {
                    placement: a,
                    middlewareData: c,
                    rects: s,
                    initialPlacement: f,
                    platform: d,
                    elements: p,
                  } = t,
                  {
                    mainAxis: v = !0,
                    crossAxis: m = !0,
                    fallbackPlacements: h,
                    fallbackStrategy: y = "bestFit",
                    fallbackAxisSideDirection: g = "none",
                    flipAlignment: b = !0,
                    ...w
                  } = (0, r.ku)(e, t),
                  x = (0, r.k3)(a),
                  E = (0, r.k3)(f) === f,
                  R = await (null == d.isRTL ? void 0 : d.isRTL(p.floating)),
                  k = h || (E || !b ? [(0, r.pw)(f)] : (0, r.gy)(f));
                h || "none" === g || k.push(...(0, r.KX)(f, b, g, R));
                let T = [f, ...k],
                  S = await i(t, w),
                  O = [],
                  A = (null == (n = c.flip) ? void 0 : n.overflows) || [];
                if ((v && O.push(S[x]), m)) {
                  let e = (0, r.i8)(a, s, R);
                  O.push(S[e[0]], S[e[1]]);
                }
                if (
                  ((A = [...A, { placement: a, overflows: O }]),
                  !O.every((e) => e <= 0))
                ) {
                  let e = ((null == (o = c.flip) ? void 0 : o.index) || 0) + 1,
                    t = T[e];
                  if (t)
                    return {
                      data: { index: e, overflows: A },
                      reset: { placement: t },
                    };
                  let n =
                    null ==
                    (l = A.filter((e) => e.overflows[0] <= 0).sort(
                      (e, t) => e.overflows[1] - t.overflows[1]
                    )[0])
                      ? void 0
                      : l.placement;
                  if (!n)
                    switch (y) {
                      case "bestFit": {
                        let e =
                          null ==
                          (u = A.map((e) => [
                            e.placement,
                            e.overflows
                              .filter((e) => e > 0)
                              .reduce((e, t) => e + t, 0),
                          ]).sort((e, t) => e[1] - t[1])[0])
                            ? void 0
                            : u[0];
                        e && (n = e);
                        break;
                      }
                      case "initialPlacement":
                        n = f;
                    }
                  if (a !== n) return { reset: { placement: n } };
                }
                return {};
              },
            }
          );
        };
      async function c(e, t) {
        let { placement: n, platform: o, elements: l } = e,
          i = await (null == o.isRTL ? void 0 : o.isRTL(l.floating)),
          u = (0, r.k3)(n),
          a = (0, r.hp)(n),
          c = "y" === (0, r.Qq)(n),
          s = ["left", "top"].includes(u) ? -1 : 1,
          f = i && c ? -1 : 1,
          d = (0, r.ku)(t, e),
          {
            mainAxis: p,
            crossAxis: v,
            alignmentAxis: m,
          } = "number" == typeof d
            ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
            : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...d };
        return (
          a && "number" == typeof m && (v = "end" === a ? -1 * m : m),
          c ? { x: v * f, y: p * s } : { x: p * s, y: v * f }
        );
      }
      let s = function (e) {
          return (
            void 0 === e && (e = 0),
            {
              name: "offset",
              options: e,
              async fn(t) {
                let { x: n, y: r } = t,
                  o = await c(t, e);
                return { x: n + o.x, y: r + o.y, data: o };
              },
            }
          );
        },
        f = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "shift",
              options: e,
              async fn(t) {
                let { x: n, y: o, placement: l } = t,
                  {
                    mainAxis: u = !0,
                    crossAxis: a = !1,
                    limiter: c = {
                      fn: (e) => {
                        let { x: t, y: n } = e;
                        return { x: t, y: n };
                      },
                    },
                    ...s
                  } = (0, r.ku)(e, t),
                  f = { x: n, y: o },
                  d = await i(t, s),
                  p = (0, r.Qq)((0, r.k3)(l)),
                  v = (0, r.Rn)(p),
                  m = f[v],
                  h = f[p];
                if (u) {
                  let e = "y" === v ? "top" : "left",
                    t = "y" === v ? "bottom" : "right",
                    n = m + d[e],
                    o = m - d[t];
                  m = (0, r.uZ)(n, m, o);
                }
                if (a) {
                  let e = "y" === p ? "top" : "left",
                    t = "y" === p ? "bottom" : "right",
                    n = h + d[e],
                    o = h - d[t];
                  h = (0, r.uZ)(n, h, o);
                }
                let y = c.fn({ ...t, [v]: m, [p]: h });
                return { ...y, data: { x: y.x - n, y: y.y - o } };
              },
            }
          );
        },
        d = function (e) {
          return (
            void 0 === e && (e = {}),
            {
              name: "size",
              options: e,
              async fn(t) {
                let n, o;
                let { placement: l, rects: u, platform: a, elements: c } = t,
                  { apply: s = () => {}, ...f } = (0, r.ku)(e, t),
                  d = await i(t, f),
                  p = (0, r.k3)(l),
                  v = (0, r.hp)(l),
                  m = "y" === (0, r.Qq)(l),
                  { width: h, height: y } = u.floating;
                "top" === p || "bottom" === p
                  ? ((n = p),
                    (o =
                      v ===
                      ((await (null == a.isRTL ? void 0 : a.isRTL(c.floating)))
                        ? "start"
                        : "end")
                        ? "left"
                        : "right"))
                  : ((o = p), (n = "end" === v ? "top" : "bottom"));
                let g = y - d[n],
                  b = h - d[o],
                  w = !t.middlewareData.shift,
                  x = g,
                  E = b;
                if (m) {
                  let e = h - d.left - d.right;
                  E = v || w ? (0, r.VV)(b, e) : e;
                } else {
                  let e = y - d.top - d.bottom;
                  x = v || w ? (0, r.VV)(g, e) : e;
                }
                if (w && !v) {
                  let e = (0, r.Fp)(d.left, 0),
                    t = (0, r.Fp)(d.right, 0),
                    n = (0, r.Fp)(d.top, 0),
                    o = (0, r.Fp)(d.bottom, 0);
                  m
                    ? (E =
                        h -
                        2 *
                          (0 !== e || 0 !== t
                            ? e + t
                            : (0, r.Fp)(d.left, d.right)))
                    : (x =
                        y -
                        2 *
                          (0 !== n || 0 !== o
                            ? n + o
                            : (0, r.Fp)(d.top, d.bottom)));
                }
                await s({ ...t, availableWidth: E, availableHeight: x });
                let R = await a.getDimensions(c.floating);
                return h !== R.width || y !== R.height
                  ? { reset: { rects: !0 } }
                  : {};
              },
            }
          );
        };
    },
    2163: function (e, t, n) {
      "use strict";
      n.d(t, {
        Jv: function () {
          return y;
        },
        Me: function () {
          return g;
        },
        oo: function () {
          return b;
        },
      });
      var r = n(66492),
        o = n(84858),
        l = n(30182);
      function i(e) {
        let t = (0, l.Dx)(e),
          n = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0,
          i = (0, l.Re)(e),
          u = i ? e.offsetWidth : n,
          a = i ? e.offsetHeight : o,
          c = (0, r.NM)(n) !== u || (0, r.NM)(o) !== a;
        return c && ((n = u), (o = a)), { width: n, height: o, $: c };
      }
      function u(e) {
        return (0, l.kK)(e) ? e : e.contextElement;
      }
      function a(e) {
        let t = u(e);
        if (!(0, l.Re)(t)) return (0, r.ze)(1);
        let n = t.getBoundingClientRect(),
          { width: o, height: a, $: c } = i(t),
          s = (c ? (0, r.NM)(n.width) : n.width) / o,
          f = (c ? (0, r.NM)(n.height) : n.height) / a;
        return (
          (s && Number.isFinite(s)) || (s = 1),
          (f && Number.isFinite(f)) || (f = 1),
          { x: s, y: f }
        );
      }
      let c = (0, r.ze)(0);
      function s(e) {
        let t = (0, l.Jj)(e);
        return (0, l.Pf)() && t.visualViewport
          ? { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
          : c;
      }
      function f(e, t, n, o) {
        var i;
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        let c = e.getBoundingClientRect(),
          f = u(e),
          d = (0, r.ze)(1);
        t && (o ? (0, l.kK)(o) && (d = a(o)) : (d = a(e)));
        let p = (void 0 === (i = n) && (i = !1),
          o && (!i || o === (0, l.Jj)(f)) && i)
            ? s(f)
            : (0, r.ze)(0),
          v = (c.left + p.x) / d.x,
          m = (c.top + p.y) / d.y,
          h = c.width / d.x,
          y = c.height / d.y;
        if (f) {
          let e = (0, l.Jj)(f),
            t = o && (0, l.kK)(o) ? (0, l.Jj)(o) : o,
            n = e.frameElement;
          for (; n && o && t !== e; ) {
            let e = a(n),
              t = n.getBoundingClientRect(),
              r = (0, l.Dx)(n),
              o = t.left + (n.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              i = t.top + (n.clientTop + parseFloat(r.paddingTop)) * e.y;
            (v *= e.x),
              (m *= e.y),
              (h *= e.x),
              (y *= e.y),
              (v += o),
              (m += i),
              (n = (0, l.Jj)(n).frameElement);
          }
        }
        return (0, r.JB)({ width: h, height: y, x: v, y: m });
      }
      function d(e) {
        return f((0, l.tF)(e)).left + (0, l.Lw)(e).scrollLeft;
      }
      function p(e, t, n) {
        let o;
        if ("viewport" === t)
          o = (function (e, t) {
            let n = (0, l.Jj)(e),
              r = (0, l.tF)(e),
              o = n.visualViewport,
              i = r.clientWidth,
              u = r.clientHeight,
              a = 0,
              c = 0;
            if (o) {
              (i = o.width), (u = o.height);
              let e = (0, l.Pf)();
              (!e || (e && "fixed" === t)) &&
                ((a = o.offsetLeft), (c = o.offsetTop));
            }
            return { width: i, height: u, x: a, y: c };
          })(e, n);
        else if ("document" === t)
          o = (function (e) {
            let t = (0, l.tF)(e),
              n = (0, l.Lw)(e),
              o = e.ownerDocument.body,
              i = (0, r.Fp)(
                t.scrollWidth,
                t.clientWidth,
                o.scrollWidth,
                o.clientWidth
              ),
              u = (0, r.Fp)(
                t.scrollHeight,
                t.clientHeight,
                o.scrollHeight,
                o.clientHeight
              ),
              a = -n.scrollLeft + d(e),
              c = -n.scrollTop;
            return (
              "rtl" === (0, l.Dx)(o).direction &&
                (a += (0, r.Fp)(t.clientWidth, o.clientWidth) - i),
              { width: i, height: u, x: a, y: c }
            );
          })((0, l.tF)(e));
        else if ((0, l.kK)(t))
          o = (function (e, t) {
            let n = f(e, !0, "fixed" === t),
              o = n.top + e.clientTop,
              i = n.left + e.clientLeft,
              u = (0, l.Re)(e) ? a(e) : (0, r.ze)(1),
              c = e.clientWidth * u.x;
            return {
              width: c,
              height: e.clientHeight * u.y,
              x: i * u.x,
              y: o * u.y,
            };
          })(t, n);
        else {
          let n = s(e);
          o = { ...t, x: t.x - n.x, y: t.y - n.y };
        }
        return (0, r.JB)(o);
      }
      function v(e, t) {
        return (0, l.Re)(e) && "fixed" !== (0, l.Dx)(e).position
          ? t
            ? t(e)
            : e.offsetParent
          : null;
      }
      function m(e, t) {
        let n = (0, l.Jj)(e);
        if (!(0, l.Re)(e)) return n;
        let r = v(e, t);
        for (; r && (0, l.Ze)(r) && "static" === (0, l.Dx)(r).position; )
          r = v(r, t);
        return r &&
          ("html" === (0, l.wk)(r) ||
            ("body" === (0, l.wk)(r) &&
              "static" === (0, l.Dx)(r).position &&
              !(0, l.hT)(r)))
          ? n
          : r || (0, l.gQ)(e) || n;
      }
      let h = async function (e) {
          let { reference: t, floating: n, strategy: o } = e,
            i = this.getOffsetParent || m,
            u = this.getDimensions;
          return {
            reference: (function (e, t, n) {
              let o = (0, l.Re)(t),
                i = (0, l.tF)(t),
                u = "fixed" === n,
                a = f(e, !0, u, t),
                c = { scrollLeft: 0, scrollTop: 0 },
                s = (0, r.ze)(0);
              if (o || (!o && !u)) {
                if (
                  (("body" !== (0, l.wk)(t) || (0, l.ao)(i)) &&
                    (c = (0, l.Lw)(t)),
                  o)
                ) {
                  let e = f(t, !0, u, t);
                  (s.x = e.x + t.clientLeft), (s.y = e.y + t.clientTop);
                } else i && (s.x = d(i));
              }
              return {
                x: a.left + c.scrollLeft - s.x,
                y: a.top + c.scrollTop - s.y,
                width: a.width,
                height: a.height,
              };
            })(t, await i(n), o),
            floating: { x: 0, y: 0, ...(await u(n)) },
          };
        },
        y = {
          convertOffsetParentRelativeRectToViewportRelativeRect: function (e) {
            let { rect: t, offsetParent: n, strategy: o } = e,
              i = (0, l.Re)(n),
              u = (0, l.tF)(n);
            if (n === u) return t;
            let c = { scrollLeft: 0, scrollTop: 0 },
              s = (0, r.ze)(1),
              d = (0, r.ze)(0);
            if (
              (i || (!i && "fixed" !== o)) &&
              (("body" !== (0, l.wk)(n) || (0, l.ao)(u)) && (c = (0, l.Lw)(n)),
              (0, l.Re)(n))
            ) {
              let e = f(n);
              (s = a(n)), (d.x = e.x + n.clientLeft), (d.y = e.y + n.clientTop);
            }
            return {
              width: t.width * s.x,
              height: t.height * s.y,
              x: t.x * s.x - c.scrollLeft * s.x + d.x,
              y: t.y * s.y - c.scrollTop * s.y + d.y,
            };
          },
          getDocumentElement: l.tF,
          getClippingRect: function (e) {
            let { element: t, boundary: n, rootBoundary: o, strategy: i } = e,
              u = [
                ...("clippingAncestors" === n
                  ? (function (e, t) {
                      let n = t.get(e);
                      if (n) return n;
                      let r = (0, l.Kx)(e).filter(
                          (e) => (0, l.kK)(e) && "body" !== (0, l.wk)(e)
                        ),
                        o = null,
                        i = "fixed" === (0, l.Dx)(e).position,
                        u = i ? (0, l.Ow)(e) : e;
                      for (; (0, l.kK)(u) && !(0, l.Py)(u); ) {
                        let t = (0, l.Dx)(u),
                          n = (0, l.hT)(u);
                        n || "fixed" !== t.position || (o = null),
                          (
                            i
                              ? !n && !o
                              : (!n &&
                                  "static" === t.position &&
                                  !!o &&
                                  ["absolute", "fixed"].includes(o.position)) ||
                                ((0, l.ao)(u) &&
                                  !n &&
                                  (function e(t, n) {
                                    let r = (0, l.Ow)(t);
                                    return (
                                      !(
                                        r === n ||
                                        !(0, l.kK)(r) ||
                                        (0, l.Py)(r)
                                      ) &&
                                      ("fixed" === (0, l.Dx)(r).position ||
                                        e(r, n))
                                    );
                                  })(e, u))
                          )
                            ? (r = r.filter((e) => e !== u))
                            : (o = t),
                          (u = (0, l.Ow)(u));
                      }
                      return t.set(e, r), r;
                    })(t, this._c)
                  : [].concat(n)),
                o,
              ],
              a = u[0],
              c = u.reduce((e, n) => {
                let o = p(t, n, i);
                return (
                  (e.top = (0, r.Fp)(o.top, e.top)),
                  (e.right = (0, r.VV)(o.right, e.right)),
                  (e.bottom = (0, r.VV)(o.bottom, e.bottom)),
                  (e.left = (0, r.Fp)(o.left, e.left)),
                  e
                );
              }, p(t, a, i));
            return {
              width: c.right - c.left,
              height: c.bottom - c.top,
              x: c.left,
              y: c.top,
            };
          },
          getOffsetParent: m,
          getElementRects: h,
          getClientRects: function (e) {
            return Array.from(e.getClientRects());
          },
          getDimensions: function (e) {
            return i(e);
          },
          getScale: a,
          isElement: l.kK,
          isRTL: function (e) {
            return "rtl" === (0, l.Dx)(e).direction;
          },
        };
      function g(e, t, n, o) {
        let i;
        void 0 === o && (o = {});
        let {
            ancestorScroll: a = !0,
            ancestorResize: c = !0,
            elementResize: s = "function" == typeof ResizeObserver,
            layoutShift: d = "function" == typeof IntersectionObserver,
            animationFrame: p = !1,
          } = o,
          v = u(e),
          m = a || c ? [...(v ? (0, l.Kx)(v) : []), ...(0, l.Kx)(t)] : [];
        m.forEach((e) => {
          a && e.addEventListener("scroll", n, { passive: !0 }),
            c && e.addEventListener("resize", n);
        });
        let h =
            v && d
              ? (function (e, t) {
                  let n,
                    o = null,
                    i = (0, l.tF)(e);
                  function u() {
                    clearTimeout(n), o && o.disconnect(), (o = null);
                  }
                  return (
                    !(function l(a, c) {
                      void 0 === a && (a = !1), void 0 === c && (c = 1), u();
                      let {
                        left: s,
                        top: f,
                        width: d,
                        height: p,
                      } = e.getBoundingClientRect();
                      if ((a || t(), !d || !p)) return;
                      let v = (0, r.GW)(f),
                        m = (0, r.GW)(i.clientWidth - (s + d)),
                        h = {
                          rootMargin:
                            -v +
                            "px " +
                            -m +
                            "px " +
                            -(0, r.GW)(i.clientHeight - (f + p)) +
                            "px " +
                            -(0, r.GW)(s) +
                            "px",
                          threshold: (0, r.Fp)(0, (0, r.VV)(1, c)) || 1,
                        },
                        y = !0;
                      function g(e) {
                        let t = e[0].intersectionRatio;
                        if (t !== c) {
                          if (!y) return l();
                          t
                            ? l(!1, t)
                            : (n = setTimeout(() => {
                                l(!1, 1e-7);
                              }, 100));
                        }
                        y = !1;
                      }
                      try {
                        o = new IntersectionObserver(g, {
                          ...h,
                          root: i.ownerDocument,
                        });
                      } catch (e) {
                        o = new IntersectionObserver(g, h);
                      }
                      o.observe(e);
                    })(!0),
                    u
                  );
                })(v, n)
              : null,
          y = -1,
          g = null;
        s &&
          ((g = new ResizeObserver((e) => {
            let [r] = e;
            r &&
              r.target === v &&
              g &&
              (g.unobserve(t),
              cancelAnimationFrame(y),
              (y = requestAnimationFrame(() => {
                g && g.observe(t);
              }))),
              n();
          })),
          v && !p && g.observe(v),
          g.observe(t));
        let b = p ? f(e) : null;
        return (
          p &&
            (function t() {
              let r = f(e);
              b &&
                (r.x !== b.x ||
                  r.y !== b.y ||
                  r.width !== b.width ||
                  r.height !== b.height) &&
                n(),
                (b = r),
                (i = requestAnimationFrame(t));
            })(),
          n(),
          () => {
            m.forEach((e) => {
              a && e.removeEventListener("scroll", n),
                c && e.removeEventListener("resize", n);
            }),
              h && h(),
              g && g.disconnect(),
              (g = null),
              p && cancelAnimationFrame(i);
          }
        );
      }
      let b = (e, t, n) => {
        let r = new Map(),
          l = { platform: y, ...n },
          i = { ...l.platform, _c: r };
        return (0, o.oo)(e, t, { ...l, platform: i });
      };
    },
    32202: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        Y$: function () {
          return eu;
        },
        wD: function () {
          return eC;
        },
        ll: function () {
          return eP;
        },
        xp: function () {
          return e5;
        },
        eS: function () {
          return eD;
        },
        bQ: function () {
          return eH;
        },
        YF: function () {
          return eK;
        },
        KK: function () {
          return ez;
        },
        XI: function () {
          return eh;
        },
        PC: function () {
          return ei;
        },
        NI: function () {
          return eW;
        },
        c0: function () {
          return e6;
        },
        qq: function () {
          return e4;
        },
        qs: function () {
          return e9;
        },
      });
      var o = n(2163),
        l = n(30182),
        i = n(89930),
        u = n(96682),
        a = n.t(u, 2);
      function c(e) {
        let t = e.activeElement;
        for (
          ;
          (null == (n = t)
            ? void 0
            : null == (r = n.shadowRoot)
            ? void 0
            : r.activeElement) != null;

        ) {
          var n, r;
          t = t.shadowRoot.activeElement;
        }
        return t;
      }
      function s(e, t) {
        if (!e || !t) return !1;
        let n = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && (0, l.Zq)(n)) {
          let n = t;
          for (; n; ) {
            if (e === n) return !0;
            n = n.parentNode || n.host;
          }
        }
        return !1;
      }
      function f() {
        let e = navigator.userAgentData;
        return null != e && e.platform ? e.platform : navigator.platform;
      }
      function d(e) {
        if (0 === e.mozInputSource && e.isTrusted) return !0;
        let t = /Android/i;
        return (t.test(f()) ||
          t.test(
            (function () {
              let e = navigator.userAgentData;
              return e && Array.isArray(e.brands)
                ? e.brands
                    .map((e) => {
                      let { brand: t, version: n } = e;
                      return t + "/" + n;
                    })
                    .join(" ")
                : navigator.userAgent;
            })()
          )) &&
          e.pointerType
          ? "click" === e.type && 1 === e.buttons
          : 0 === e.detail && !e.pointerType;
      }
      function p(e) {
        return (
          (0 === e.width && 0 === e.height) ||
          (1 === e.width &&
            1 === e.height &&
            0 === e.pressure &&
            0 === e.detail &&
            "mouse" !== e.pointerType) ||
          (e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail)
        );
      }
      function v() {
        return /apple/i.test(navigator.vendor);
      }
      function m(e, t) {
        let n = ["mouse", "pen"];
        return t || n.push("", void 0), n.includes(e);
      }
      function h(e) {
        return (null == e ? void 0 : e.ownerDocument) || document;
      }
      function y(e, t) {
        return (
          null != t &&
          ("composedPath" in e
            ? e.composedPath().includes(t)
            : null != e.target && t.contains(e.target))
        );
      }
      function g(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target;
      }
      function b(e) {
        return (
          (0, l.Re)(e) &&
          e.matches(
            "input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])"
          )
        );
      }
      function w(e) {
        e.preventDefault(), e.stopPropagation();
      }
      var x = function (e) {
          return "undefined" == typeof document
            ? null
            : (Array.isArray(e) ? e[0] : e).ownerDocument.body;
        },
        E = new WeakMap(),
        R = new WeakMap(),
        k = {},
        T = 0,
        S = function (e) {
          return e && (e.host || S(e.parentNode));
        },
        O = function (e, t, n, r) {
          var o = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = S(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          k[n] || (k[n] = new WeakMap());
          var l = k[n],
            i = [],
            u = new Set(),
            a = new Set(o),
            c = function (e) {
              !e || u.has(e) || (u.add(e), c(e.parentNode));
            };
          o.forEach(c);
          var s = function (e) {
            !e ||
              a.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (u.has(e)) s(e);
                else {
                  var t = e.getAttribute(r),
                    o = null !== t && "false" !== t,
                    a = (E.get(e) || 0) + 1,
                    c = (l.get(e) || 0) + 1;
                  E.set(e, a),
                    l.set(e, c),
                    i.push(e),
                    1 === a && o && R.set(e, !0),
                    1 === c && e.setAttribute(n, "true"),
                    o || e.setAttribute(r, "true");
                }
              });
          };
          return (
            s(t),
            u.clear(),
            T++,
            function () {
              i.forEach(function (e) {
                var t = E.get(e) - 1,
                  o = l.get(e) - 1;
                E.set(e, t),
                  l.set(e, o),
                  t || (R.has(e) || e.removeAttribute(r), R.delete(e)),
                  o || e.removeAttribute(n);
              }),
                --T ||
                  ((E = new WeakMap()),
                  (E = new WeakMap()),
                  (R = new WeakMap()),
                  (k = {}));
            }
          );
        },
        A = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o = t || x(e);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              O(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        },
        P = function (e, t, n) {
          void 0 === n && (n = "data-inert-ed");
          var r = t || x(e);
          return r
            ? O(e, r, n, "inert")
            : function () {
                return null;
              };
        },
        L = function () {
          return (
            "undefined" != typeof HTMLElement &&
            HTMLElement.prototype.hasOwnProperty("inert")
          );
        },
        M =
          'input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable="false"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])',
        C = "undefined" == typeof Element,
        I = C
          ? function () {}
          : Element.prototype.matches ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.webkitMatchesSelector,
        D =
          !C && Element.prototype.getRootNode
            ? function (e) {
                var t;
                return null == e
                  ? void 0
                  : null === (t = e.getRootNode) || void 0 === t
                  ? void 0
                  : t.call(e);
              }
            : function (e) {
                return null == e ? void 0 : e.ownerDocument;
              },
        N = function e(t, n) {
          void 0 === n && (n = !0);
          var r,
            o =
              null == t
                ? void 0
                : null === (r = t.getAttribute) || void 0 === r
                ? void 0
                : r.call(t, "inert");
          return "" === o || "true" === o || (n && t && e(t.parentNode));
        },
        F = function (e) {
          var t,
            n =
              null == e
                ? void 0
                : null === (t = e.getAttribute) || void 0 === t
                ? void 0
                : t.call(e, "contenteditable");
          return "" === n || "true" === n;
        },
        j = function (e, t, n) {
          if (N(e)) return [];
          var r = Array.prototype.slice.apply(e.querySelectorAll(M));
          return t && I.call(e, M) && r.unshift(e), (r = r.filter(n));
        },
        $ = function e(t, n, r) {
          for (var o = [], l = Array.from(t); l.length; ) {
            var i = l.shift();
            if (!N(i, !1)) {
              if ("SLOT" === i.tagName) {
                var u = i.assignedElements(),
                  a = e(u.length ? u : i.children, !0, r);
                r.flatten
                  ? o.push.apply(o, a)
                  : o.push({ scopeParent: i, candidates: a });
              } else {
                I.call(i, M) &&
                  r.filter(i) &&
                  (n || !t.includes(i)) &&
                  o.push(i);
                var c =
                    i.shadowRoot ||
                    ("function" == typeof r.getShadowRoot &&
                      r.getShadowRoot(i)),
                  s =
                    !N(c, !1) && (!r.shadowRootFilter || r.shadowRootFilter(i));
                if (c && s) {
                  var f = e(!0 === c ? i.children : c.children, !0, r);
                  r.flatten
                    ? o.push.apply(o, f)
                    : o.push({ scopeParent: i, candidates: f });
                } else l.unshift.apply(l, i.children);
              }
            }
          }
          return o;
        },
        _ = function (e) {
          return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
        },
        H = function (e) {
          if (!e) throw Error("No node provided");
          return e.tabIndex < 0 &&
            (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || F(e)) &&
            !_(e)
            ? 0
            : e.tabIndex;
        },
        K = function (e, t) {
          var n = H(e);
          return n < 0 && t && !_(e) ? 0 : n;
        },
        z = function (e, t) {
          return e.tabIndex === t.tabIndex
            ? e.documentOrder - t.documentOrder
            : e.tabIndex - t.tabIndex;
        },
        V = function (e) {
          return "INPUT" === e.tagName;
        },
        W = function (e, t) {
          for (var n = 0; n < e.length; n++)
            if (e[n].checked && e[n].form === t) return e[n];
        },
        q = function (e) {
          if (!e.name) return !0;
          var t,
            n = e.form || D(e),
            r = function (e) {
              return n.querySelectorAll(
                'input[type="radio"][name="' + e + '"]'
              );
            };
          if (
            "undefined" != typeof window &&
            void 0 !== window.CSS &&
            "function" == typeof window.CSS.escape
          )
            t = r(window.CSS.escape(e.name));
          else
            try {
              t = r(e.name);
            } catch (e) {
              return (
                console.error(
                  "Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",
                  e.message
                ),
                !1
              );
            }
          var o = W(t, e.form);
          return !o || o === e;
        },
        B = function (e) {
          var t,
            n,
            r,
            o,
            l,
            i,
            u,
            a = e && D(e),
            c = null === (t = a) || void 0 === t ? void 0 : t.host,
            s = !1;
          if (a && a !== e)
            for (
              s = !!(
                (null !== (n = c) &&
                  void 0 !== n &&
                  null !== (r = n.ownerDocument) &&
                  void 0 !== r &&
                  r.contains(c)) ||
                (null != e &&
                  null !== (o = e.ownerDocument) &&
                  void 0 !== o &&
                  o.contains(e))
              );
              !s && c;

            )
              s = !!(
                null !==
                  (i = c =
                    null === (l = a = D(c)) || void 0 === l
                      ? void 0
                      : l.host) &&
                void 0 !== i &&
                null !== (u = i.ownerDocument) &&
                void 0 !== u &&
                u.contains(c)
              );
          return s;
        },
        U = function (e) {
          var t = e.getBoundingClientRect(),
            n = t.width,
            r = t.height;
          return 0 === n && 0 === r;
        },
        Y = function (e, t) {
          var n = t.displayCheck,
            r = t.getShadowRoot;
          if ("hidden" === getComputedStyle(e).visibility) return !0;
          var o = I.call(e, "details>summary:first-of-type")
            ? e.parentElement
            : e;
          if (I.call(o, "details:not([open]) *")) return !0;
          if (n && "full" !== n && "legacy-full" !== n) {
            if ("non-zero-area" === n) return U(e);
          } else {
            if ("function" == typeof r) {
              for (var l = e; e; ) {
                var i = e.parentElement,
                  u = D(e);
                if (i && !i.shadowRoot && !0 === r(i)) return U(e);
                e = e.assignedSlot
                  ? e.assignedSlot
                  : i || u === e.ownerDocument
                  ? i
                  : u.host;
              }
              e = l;
            }
            if (B(e)) return !e.getClientRects().length;
            if ("legacy-full" !== n) return !0;
          }
          return !1;
        },
        J = function (e) {
          if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName))
            for (var t = e.parentElement; t; ) {
              if ("FIELDSET" === t.tagName && t.disabled) {
                for (var n = 0; n < t.children.length; n++) {
                  var r = t.children.item(n);
                  if ("LEGEND" === r.tagName)
                    return (
                      !!I.call(t, "fieldset[disabled] *") || !r.contains(e)
                    );
                }
                return !0;
              }
              t = t.parentElement;
            }
          return !1;
        },
        X = function (e, t) {
          var n, r, o;
          return (
            !((V((n = t)) && "radio" === n.type && !q(n)) || 0 > H(t)) &&
            ((r = e),
            !(
              (o = t).disabled ||
              N(o) ||
              (V(o) && "hidden" === o.type) ||
              Y(o, r) ||
              ("DETAILS" === o.tagName &&
                Array.prototype.slice.apply(o.children).some(function (e) {
                  return "SUMMARY" === e.tagName;
                })) ||
              J(o)
            ))
          );
        },
        G = function (e) {
          var t = parseInt(e.getAttribute("tabindex"), 10);
          return !!isNaN(t) || t >= 0;
        },
        Z = function e(t) {
          var n = [],
            r = [];
          return (
            t.forEach(function (t, o) {
              var l = !!t.scopeParent,
                i = l ? t.scopeParent : t,
                u = K(i, l),
                a = l ? e(t.candidates) : i;
              0 === u
                ? l
                  ? n.push.apply(n, a)
                  : n.push(i)
                : r.push({
                    documentOrder: o,
                    tabIndex: u,
                    item: t,
                    isScope: l,
                    content: a,
                  });
            }),
            r
              .sort(z)
              .reduce(function (e, t) {
                return (
                  t.isScope ? e.push.apply(e, t.content) : e.push(t.content), e
                );
              }, [])
              .concat(n)
          );
        },
        Q = function (e, t) {
          return Z(
            (t = t || {}).getShadowRoot
              ? $([e], t.includeContainer, {
                  filter: X.bind(null, t),
                  flatten: !1,
                  getShadowRoot: t.getShadowRoot,
                  shadowRootFilter: G,
                })
              : j(e, t.includeContainer, X.bind(null, t))
          );
        },
        ee = n(94495);
      function et() {
        return (et = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }).apply(this, arguments);
      }
      var en = "undefined" != typeof document ? u.useLayoutEffect : u.useEffect;
      let er = !1,
        eo = 0,
        el = () => "floating-ui-" + eo++,
        ei =
          a["useId".toString()] ||
          function () {
            let [e, t] = u.useState(() => (er ? el() : void 0));
            return (
              en(() => {
                null == e && t(el());
              }, []),
              u.useEffect(() => {
                er || (er = !0);
              }, []),
              e
            );
          },
        eu = u.forwardRef(function (e, t) {
          let {
              context: {
                placement: n,
                elements: { floating: r },
                middlewareData: { arrow: l },
              },
              width: i = 14,
              height: a = 7,
              tipRadius: c = 0,
              strokeWidth: s = 0,
              staticOffset: f,
              stroke: d,
              d: p,
              style: { transform: v, ...m } = {},
              ...h
            } = e,
            y = ei();
          if (!r) return null;
          let g = (s *= 2) / 2,
            b = (i / 2) * (-(c / 8) + 1),
            w = ((a / 2) * c) / 4,
            [x, E] = n.split("-"),
            R = o.Jv.isRTL(r),
            k = !!p,
            T = "top" === x || "bottom" === x,
            S = f && "end" === E ? "bottom" : "top",
            O = f && "end" === E ? "right" : "left";
          f && R && (O = "end" === E ? "left" : "right");
          let A = (null == l ? void 0 : l.x) != null ? f || l.x : "",
            P = (null == l ? void 0 : l.y) != null ? f || l.y : "",
            L =
              p ||
              "M0,0 H" +
                i +
                " L" +
                (i - b) +
                "," +
                (a - w) +
                (" Q" + i / 2 + "," + a + " ") +
                b +
                "," +
                (a - w) +
                " Z",
            M = {
              top: k ? "rotate(180deg)" : "",
              left: k ? "rotate(90deg)" : "rotate(-90deg)",
              bottom: k ? "" : "rotate(180deg)",
              right: k ? "rotate(-90deg)" : "rotate(90deg)",
            }[x];
          return u.createElement(
            "svg",
            et({}, h, {
              "aria-hidden": !0,
              ref: t,
              width: k ? i : i + s,
              height: i,
              viewBox: "0 0 " + i + " " + (a > i ? a : i),
              style: {
                position: "absolute",
                pointerEvents: "none",
                [O]: A,
                [S]: P,
                [x]: T || k ? "100%" : "calc(100% - " + s / 2 + "px)",
                transform: "" + M + (null != v ? v : ""),
                ...m,
              },
            }),
            s > 0 &&
              u.createElement("path", {
                clipPath: "url(#" + y + ")",
                fill: "none",
                stroke: d,
                strokeWidth: s + (p ? 0 : 1),
                d: L,
              }),
            u.createElement("path", {
              stroke: s && !p ? h.fill : "none",
              d: L,
            }),
            u.createElement(
              "clipPath",
              { id: y },
              u.createElement("rect", {
                x: -g,
                y: g * (k ? -1 : 1),
                width: i + s,
                height: i,
              })
            )
          );
        }),
        ea = u.createContext(null),
        ec = u.createContext(null),
        es = () => {
          var e;
          return (null == (e = u.useContext(ea)) ? void 0 : e.id) || null;
        },
        ef = () => u.useContext(ec);
      function ed(e) {
        return "data-floating-ui-" + e;
      }
      function ep(e) {
        let t = (0, u.useRef)(e);
        return (
          en(() => {
            t.current = e;
          }),
          t
        );
      }
      let ev = ed("safe-polygon");
      function em(e, t, n) {
        return n && !m(n)
          ? 0
          : "number" == typeof e
          ? e
          : null == e
          ? void 0
          : e[t];
      }
      function eh(e, t) {
        void 0 === t && (t = {});
        let {
            open: n,
            onOpenChange: r,
            dataRef: o,
            events: i,
            elements: { domReference: a, floating: c },
            refs: f,
          } = e,
          {
            enabled: d = !0,
            delay: p = 0,
            handleClose: v = null,
            mouseOnly: y = !1,
            restMs: g = 0,
            move: b = !0,
          } = t,
          w = ef(),
          x = es(),
          E = ep(v),
          R = ep(p),
          k = u.useRef(),
          T = u.useRef(),
          S = u.useRef(),
          O = u.useRef(),
          A = u.useRef(!0),
          P = u.useRef(!1),
          L = u.useRef(() => {}),
          M = u.useCallback(() => {
            var e;
            let t = null == (e = o.current.openEvent) ? void 0 : e.type;
            return (
              (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
            );
          }, [o]);
        u.useEffect(() => {
          if (d)
            return (
              i.on("dismiss", e),
              () => {
                i.off("dismiss", e);
              }
            );
          function e() {
            clearTimeout(T.current), clearTimeout(O.current), (A.current = !0);
          }
        }, [d, i]),
          u.useEffect(() => {
            if (!d || !E.current || !n) return;
            function e(e) {
              M() && r(!1, e);
            }
            let t = h(c).documentElement;
            return (
              t.addEventListener("mouseleave", e),
              () => {
                t.removeEventListener("mouseleave", e);
              }
            );
          }, [c, n, r, d, E, o, M]);
        let C = u.useCallback(
            function (e, t) {
              void 0 === t && (t = !0);
              let n = em(R.current, "close", k.current);
              n && !S.current
                ? (clearTimeout(T.current),
                  (T.current = setTimeout(() => r(!1, e), n)))
                : t && (clearTimeout(T.current), r(!1, e));
            },
            [R, r]
          ),
          I = u.useCallback(() => {
            L.current(), (S.current = void 0);
          }, []),
          D = u.useCallback(() => {
            if (P.current) {
              let e = h(f.floating.current).body;
              (e.style.pointerEvents = ""),
                e.removeAttribute(ev),
                (P.current = !1);
            }
          }, [f]);
        return (
          u.useEffect(() => {
            if (d && (0, l.kK)(a))
              return (
                n && a.addEventListener("mouseleave", f),
                null == c || c.addEventListener("mouseleave", f),
                b && a.addEventListener("mousemove", i, { once: !0 }),
                a.addEventListener("mouseenter", i),
                a.addEventListener("mouseleave", u),
                () => {
                  n && a.removeEventListener("mouseleave", f),
                    null == c || c.removeEventListener("mouseleave", f),
                    b && a.removeEventListener("mousemove", i),
                    a.removeEventListener("mouseenter", i),
                    a.removeEventListener("mouseleave", u);
                }
              );
            function t() {
              return (
                !!o.current.openEvent &&
                ["click", "mousedown"].includes(o.current.openEvent.type)
              );
            }
            function i(e) {
              if (
                (clearTimeout(T.current),
                (A.current = !1),
                (y && !m(k.current)) || (g > 0 && 0 === em(R.current, "open")))
              )
                return;
              let t = em(R.current, "open", k.current);
              t
                ? (T.current = setTimeout(() => {
                    r(!0, e);
                  }, t))
                : r(!0, e);
            }
            function u(r) {
              if (t()) return;
              L.current();
              let o = h(c);
              if ((clearTimeout(O.current), E.current)) {
                n || clearTimeout(T.current),
                  (S.current = E.current({
                    ...e,
                    tree: w,
                    x: r.clientX,
                    y: r.clientY,
                    onClose() {
                      D(), I(), C(r);
                    },
                  }));
                let t = S.current;
                o.addEventListener("mousemove", t),
                  (L.current = () => {
                    o.removeEventListener("mousemove", t);
                  });
                return;
              }
              ("touch" === k.current && s(c, r.relatedTarget)) || C(r);
            }
            function f(n) {
              t() ||
                null == E.current ||
                E.current({
                  ...e,
                  tree: w,
                  x: n.clientX,
                  y: n.clientY,
                  onClose() {
                    D(), I(), C(n);
                  },
                })(n);
            }
          }, [a, c, d, e, y, g, b, C, I, D, r, n, w, R, E, o]),
          en(() => {
            var e, t, r;
            if (
              d &&
              n &&
              null != (e = E.current) &&
              e.__options.blockPointerEvents &&
              M()
            ) {
              let e = h(c).body;
              if (
                (e.setAttribute(ev, ""),
                (e.style.pointerEvents = "none"),
                (P.current = !0),
                (0, l.kK)(a) && c)
              ) {
                let e =
                  null == w
                    ? void 0
                    : null == (t = w.nodesRef.current.find((e) => e.id === x))
                    ? void 0
                    : null == (r = t.context)
                    ? void 0
                    : r.elements.floating;
                return (
                  e && (e.style.pointerEvents = ""),
                  (a.style.pointerEvents = "auto"),
                  (c.style.pointerEvents = "auto"),
                  () => {
                    (a.style.pointerEvents = ""), (c.style.pointerEvents = "");
                  }
                );
              }
            }
          }, [d, n, x, c, a, w, E, o, M]),
          en(() => {
            n || ((k.current = void 0), I(), D());
          }, [n, I, D]),
          u.useEffect(
            () => () => {
              I(), clearTimeout(T.current), clearTimeout(O.current), D();
            },
            [d, a, I, D]
          ),
          u.useMemo(() => {
            if (!d) return {};
            function e(e) {
              k.current = e.pointerType;
            }
            return {
              reference: {
                onPointerDown: e,
                onPointerEnter: e,
                onMouseMove(e) {
                  n ||
                    0 === g ||
                    (clearTimeout(O.current),
                    (O.current = setTimeout(() => {
                      A.current || r(!0, e.nativeEvent);
                    }, g)));
                },
              },
              floating: {
                onMouseEnter() {
                  clearTimeout(T.current);
                },
                onMouseLeave(e) {
                  i.emit("dismiss", {
                    type: "mouseLeave",
                    data: { returnFocus: !1 },
                  }),
                    C(e.nativeEvent, !1);
                },
              },
            };
          }, [i, d, g, n, r, C])
        );
      }
      let ey = 0;
      function eg(e, t) {
        void 0 === t && (t = {});
        let { preventScroll: n = !1, cancelPrevious: r = !0, sync: o = !1 } = t;
        r && cancelAnimationFrame(ey);
        let l = () => (null == e ? void 0 : e.focus({ preventScroll: n }));
        o ? l() : (ey = requestAnimationFrame(l));
      }
      function eb(e, t) {
        let n = e.filter((e) => {
            var n;
            return (
              e.parentId === t && (null == (n = e.context) ? void 0 : n.open)
            );
          }),
          r = n;
        for (; r.length; )
          (r = e.filter((e) => {
            var t;
            return null == (t = r)
              ? void 0
              : t.some((t) => {
                  var n;
                  return (
                    e.parentId === t.id &&
                    (null == (n = e.context) ? void 0 : n.open)
                  );
                });
          })),
            (n = n.concat(r));
        return n;
      }
      let ew = () => ({
        getShadowRoot: !0,
        displayCheck:
          "function" == typeof ResizeObserver &&
          ResizeObserver.toString().includes("[native code]")
            ? "full"
            : "none",
      });
      function ex(e, t) {
        let n = Q(e, ew());
        "prev" === t && n.reverse();
        let r = n.indexOf(c(h(e)));
        return n.slice(r + 1)[0];
      }
      function eE() {
        return ex(document.body, "next");
      }
      function eR() {
        return ex(document.body, "prev");
      }
      function ek(e, t) {
        let n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !s(n, r);
      }
      let eT = {
        border: 0,
        clip: "rect(0 0 0 0)",
        height: "1px",
        margin: "-1px",
        overflow: "hidden",
        padding: 0,
        position: "fixed",
        whiteSpace: "nowrap",
        width: "1px",
        top: 0,
        left: 0,
      };
      function eS(e) {
        "Tab" === e.key && (e.target, clearTimeout(r));
      }
      let eO = u.forwardRef(function (e, t) {
          let [n, r] = u.useState();
          en(
            () => (
              v() && r("button"),
              document.addEventListener("keydown", eS),
              () => {
                document.removeEventListener("keydown", eS);
              }
            ),
            []
          );
          let o = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [ed("focus-guard")]: "",
            style: eT,
          };
          return u.createElement("span", et({}, e, o));
        }),
        eA = u.createContext(null);
      function eP(e) {
        let {
            children: t,
            id: n,
            root: r = null,
            preserveTabOrder: o = !0,
          } = e,
          i = (function (e) {
            let { id: t, root: n } = void 0 === e ? {} : e,
              [r, o] = u.useState(null),
              i = ei(),
              a = eL(),
              c = u.useMemo(
                () => ({ id: t, root: n, portalContext: a, uniqueId: i }),
                [t, n, a, i]
              ),
              s = u.useRef();
            return (
              en(
                () => () => {
                  null == r || r.remove();
                },
                [r, c]
              ),
              en(() => {
                if (s.current === c) return;
                s.current = c;
                let { id: e, root: t, portalContext: n, uniqueId: r } = c,
                  i = e ? document.getElementById(e) : null,
                  u = ed("portal");
                if (i) {
                  let e = document.createElement("div");
                  (e.id = r), e.setAttribute(u, ""), i.appendChild(e), o(e);
                } else {
                  let i = t || (null == n ? void 0 : n.portalNode);
                  i && !(0, l.kK)(i) && (i = i.current),
                    (i = i || document.body);
                  let a = null;
                  e &&
                    (((a = document.createElement("div")).id = e),
                    i.appendChild(a));
                  let c = document.createElement("div");
                  (c.id = r),
                    c.setAttribute(u, ""),
                    (i = a || i).appendChild(c),
                    o(c);
                }
              }, [c]),
              r
            );
          })({ id: n, root: r }),
          [a, c] = u.useState(null),
          s = u.useRef(null),
          f = u.useRef(null),
          d = u.useRef(null),
          p = u.useRef(null),
          v = !!a && !a.modal && a.open && o && !!(r || i);
        return (
          u.useEffect(() => {
            if (i && o && (null == a || !a.modal))
              return (
                i.addEventListener("focusin", e, !0),
                i.addEventListener("focusout", e, !0),
                () => {
                  i.removeEventListener("focusin", e, !0),
                    i.removeEventListener("focusout", e, !0);
                }
              );
            function e(e) {
              i &&
                ek(e) &&
                ("focusin" === e.type
                  ? function (e) {
                      e.querySelectorAll("[data-tabindex]").forEach((e) => {
                        let t = e.dataset.tabindex;
                        delete e.dataset.tabindex,
                          t
                            ? e.setAttribute("tabindex", t)
                            : e.removeAttribute("tabindex");
                      });
                    }
                  : function (e) {
                      Q(e, ew()).forEach((e) => {
                        (e.dataset.tabindex = e.getAttribute("tabindex") || ""),
                          e.setAttribute("tabindex", "-1");
                      });
                    })(i);
            }
          }, [i, o, null == a ? void 0 : a.modal]),
          u.createElement(
            eA.Provider,
            {
              value: u.useMemo(
                () => ({
                  preserveTabOrder: o,
                  beforeOutsideRef: s,
                  afterOutsideRef: f,
                  beforeInsideRef: d,
                  afterInsideRef: p,
                  portalNode: i,
                  setFocusManagerState: c,
                }),
                [o, i]
              ),
            },
            v &&
              i &&
              u.createElement(eO, {
                "data-type": "outside",
                ref: s,
                onFocus: (e) => {
                  if (ek(e, i)) {
                    var t;
                    null == (t = d.current) || t.focus();
                  } else {
                    let e =
                      eR() ||
                      (null == a ? void 0 : a.refs.domReference.current);
                    null == e || e.focus();
                  }
                },
              }),
            v && i && u.createElement("span", { "aria-owns": i.id, style: eT }),
            i && (0, ee.createPortal)(t, i),
            v &&
              i &&
              u.createElement(eO, {
                "data-type": "outside",
                ref: f,
                onFocus: (e) => {
                  if (ek(e, i)) {
                    var t;
                    null == (t = p.current) || t.focus();
                  } else {
                    let t =
                      eE() ||
                      (null == a ? void 0 : a.refs.domReference.current);
                    null == t || t.focus(),
                      (null == a ? void 0 : a.closeOnFocusOut) &&
                        (null == a || a.onOpenChange(!1, e.nativeEvent));
                  }
                },
              })
          )
        );
      }
      let eL = () => u.useContext(eA),
        eM = u.forwardRef(function (e, t) {
          return u.createElement(
            "button",
            et({}, e, { type: "button", ref: t, tabIndex: -1, style: eT })
          );
        });
      function eC(e) {
        let {
            context: t,
            children: n,
            disabled: r = !1,
            order: o = ["content"],
            guards: i = !0,
            initialFocus: a = 0,
            returnFocus: f = !0,
            modal: d = !0,
            visuallyHiddenDismiss: p = !1,
            closeOnFocusOut: v = !0,
          } = e,
          {
            open: m,
            refs: y,
            nodeId: x,
            onOpenChange: E,
            events: R,
            dataRef: k,
            elements: { domReference: T, floating: S },
          } = t,
          O = !L() || i,
          M = ep(o),
          C = ep(a),
          I = ep(f),
          D = ef(),
          N = eL(),
          F = "number" == typeof a && a < 0,
          j = u.useRef(null),
          $ = u.useRef(null),
          _ = u.useRef(!1),
          H = u.useRef(null),
          K = u.useRef(!1),
          z = null != N,
          V = T && "combobox" === T.getAttribute("role") && b(T),
          W = u.useCallback(
            function (e) {
              return void 0 === e && (e = S), e ? Q(e, ew()) : [];
            },
            [S]
          ),
          q = u.useCallback(
            (e) => {
              let t = W(e);
              return M.current
                .map((e) =>
                  T && "reference" === e ? T : S && "floating" === e ? S : t
                )
                .filter(Boolean)
                .flat();
            },
            [T, S, M, W]
          );
        function B(e) {
          return !r && p && d
            ? u.createElement(
                eM,
                {
                  ref: "start" === e ? j : $,
                  onClick: (e) => E(!1, e.nativeEvent),
                },
                "string" == typeof p ? p : "Dismiss"
              )
            : null;
        }
        u.useEffect(() => {
          if (r || !d) return;
          function e(e) {
            if ("Tab" === e.key) {
              s(S, c(h(S))) && 0 === W().length && !V && w(e);
              let t = q(),
                n = g(e);
              "reference" === M.current[0] &&
                n === T &&
                (w(e), e.shiftKey ? eg(t[t.length - 1]) : eg(t[1])),
                "floating" === M.current[1] &&
                  n === S &&
                  e.shiftKey &&
                  (w(e), eg(t[0]));
            }
          }
          let t = h(S);
          return (
            t.addEventListener("keydown", e),
            () => {
              t.removeEventListener("keydown", e);
            }
          );
        }, [r, T, S, d, M, y, V, W, q]),
          u.useEffect(() => {
            if (!r && v && S && (0, l.Re)(T))
              return (
                T.addEventListener("focusout", t),
                T.addEventListener("pointerdown", e),
                d || S.addEventListener("focusout", t),
                () => {
                  T.removeEventListener("focusout", t),
                    T.removeEventListener("pointerdown", e),
                    d || S.removeEventListener("focusout", t);
                }
              );
            function e() {
              (K.current = !0),
                setTimeout(() => {
                  K.current = !1;
                });
            }
            function t(e) {
              let t = e.relatedTarget;
              queueMicrotask(() => {
                let n = !(
                  s(T, t) ||
                  s(S, t) ||
                  s(t, S) ||
                  s(null == N ? void 0 : N.portalNode, t) ||
                  (null != t && t.hasAttribute(ed("focus-guard"))) ||
                  (D &&
                    (eb(D.nodesRef.current, x).find((e) => {
                      var n, r;
                      return (
                        s(
                          null == (n = e.context)
                            ? void 0
                            : n.elements.floating,
                          t
                        ) ||
                        s(
                          null == (r = e.context)
                            ? void 0
                            : r.elements.domReference,
                          t
                        )
                      );
                    }) ||
                      (function (e, t) {
                        var n;
                        let r = [],
                          o =
                            null == (n = e.find((e) => e.id === t))
                              ? void 0
                              : n.parentId;
                        for (; o; ) {
                          let t = e.find((e) => e.id === o);
                          (o = null == t ? void 0 : t.parentId),
                            t && (r = r.concat(t));
                        }
                        return r;
                      })(D.nodesRef.current, x).find((e) => {
                        var n, r;
                        return (
                          (null == (n = e.context)
                            ? void 0
                            : n.elements.floating) === t ||
                          (null == (r = e.context)
                            ? void 0
                            : r.elements.domReference) === t
                        );
                      })))
                );
                t &&
                  n &&
                  !K.current &&
                  t !== H.current &&
                  ((_.current = !0), E(!1, e));
              });
            }
          }, [r, T, S, d, x, D, N, E, v]),
          u.useEffect(() => {
            var e;
            if (r) return;
            let t = Array.from(
              (null == N
                ? void 0
                : null == (e = N.portalNode)
                ? void 0
                : e.querySelectorAll("[" + ed("portal") + "]")) || []
            );
            if (S && d) {
              let e = [S, ...t, j.current, $.current].filter((e) => null != e),
                n = (
                  O
                    ? A
                    : function (e, t, n) {
                        return (
                          void 0 === n && (n = "data-suppressed"),
                          (L() ? P : A)(e, t, n)
                        );
                      }
                )(
                  M.current.includes("reference") || V ? e.concat(T || []) : e,
                  void 0,
                  ed("inert")
                );
              return () => {
                n();
              };
            }
          }, [r, T, S, d, M, N, V, O]),
          en(() => {
            if (r || !S) return;
            let e = c(h(S));
            queueMicrotask(() => {
              let t = q(S),
                n = C.current,
                r = ("number" == typeof n ? t[n] : n.current) || S,
                o = s(S, e);
              F || o || !m || eg(r, { preventScroll: r === S });
            });
          }, [r, m, S, F, q, C]),
          en(() => {
            if (r || !S) return;
            let e = !1,
              t = h(S),
              n = c(t),
              o = k.current;
            function i(t) {
              if (
                ("escapeKey" === t.type &&
                  y.domReference.current &&
                  (H.current = y.domReference.current),
                ["referencePress", "escapeKey"].includes(t.type))
              )
                return;
              let n = t.data.returnFocus;
              "object" == typeof n
                ? ((_.current = !1), (e = n.preventScroll))
                : (_.current = !n);
            }
            return (
              (H.current = n),
              R.on("dismiss", i),
              () => {
                R.off("dismiss", i);
                let n = c(t);
                (s(S, n) ||
                  (D &&
                    eb(D.nodesRef.current, x).some((e) => {
                      var t;
                      return s(
                        null == (t = e.context) ? void 0 : t.elements.floating,
                        n
                      );
                    })) ||
                  (o.openEvent &&
                    ["click", "mousedown"].includes(o.openEvent.type))) &&
                  y.domReference.current &&
                  (H.current = y.domReference.current),
                  I.current &&
                    (0, l.Re)(H.current) &&
                    !_.current &&
                    eg(H.current, { cancelPrevious: !1, preventScroll: e });
              }
            );
          }, [r, S, I, k, y, R, D, x]),
          en(() => {
            if (!r && N)
              return (
                N.setFocusManagerState({
                  ...t,
                  modal: d,
                  closeOnFocusOut: v,
                  open: m,
                }),
                () => {
                  N.setFocusManagerState(null);
                }
              );
          }, [r, N, d, m, v, t]),
          en(() => {
            if (!r && S && "function" == typeof MutationObserver) {
              let e = () => {
                let e = S.getAttribute("tabindex");
                M.current.includes("floating") ||
                (c(h(S)) !== y.domReference.current && 0 === W().length)
                  ? "0" !== e && S.setAttribute("tabindex", "0")
                  : "-1" !== e && S.setAttribute("tabindex", "-1");
              };
              e();
              let t = new MutationObserver(e);
              return (
                t.observe(S, { childList: !0, subtree: !0, attributes: !0 }),
                () => {
                  t.disconnect();
                }
              );
            }
          }, [r, S, y, M, W]);
        let U = !r && O && !V && (z || d);
        return u.createElement(
          u.Fragment,
          null,
          U &&
            u.createElement(eO, {
              "data-type": "inside",
              ref: null == N ? void 0 : N.beforeInsideRef,
              onFocus: (e) => {
                if (d) {
                  let e = q();
                  eg("reference" === o[0] ? e[0] : e[e.length - 1]);
                } else if (null != N && N.preserveTabOrder && N.portalNode) {
                  if (((_.current = !1), ek(e, N.portalNode))) {
                    let e = eE() || T;
                    null == e || e.focus();
                  } else {
                    var t;
                    null == (t = N.beforeOutsideRef.current) || t.focus();
                  }
                }
              },
            }),
          !V && B("start"),
          n,
          B("end"),
          U &&
            u.createElement(eO, {
              "data-type": "inside",
              ref: null == N ? void 0 : N.afterInsideRef,
              onFocus: (e) => {
                if (d) eg(q()[0]);
                else if (null != N && N.preserveTabOrder && N.portalNode) {
                  if ((v && (_.current = !0), ek(e, N.portalNode))) {
                    let e = eR() || T;
                    null == e || e.focus();
                  } else {
                    var t;
                    null == (t = N.afterOutsideRef.current) || t.focus();
                  }
                }
              },
            })
        );
      }
      function eI(e) {
        return (0, l.Re)(e.target) && "BUTTON" === e.target.tagName;
      }
      function eD(e, t) {
        void 0 === t && (t = {});
        let {
            open: n,
            onOpenChange: r,
            dataRef: o,
            elements: { domReference: l },
          } = e,
          {
            enabled: i = !0,
            event: a = "click",
            toggle: c = !0,
            ignoreMouse: s = !1,
            keyboardHandlers: f = !0,
          } = t,
          d = u.useRef(),
          p = u.useRef(!1);
        return u.useMemo(
          () =>
            i
              ? {
                  reference: {
                    onPointerDown(e) {
                      d.current = e.pointerType;
                    },
                    onMouseDown(e) {
                      0 !== e.button ||
                        (m(d.current, !0) && s) ||
                        "click" === a ||
                        (n &&
                        c &&
                        (!o.current.openEvent ||
                          "mousedown" === o.current.openEvent.type)
                          ? r(!1, e.nativeEvent)
                          : (e.preventDefault(), r(!0, e.nativeEvent)));
                    },
                    onClick(e) {
                      if ("mousedown" === a && d.current) {
                        d.current = void 0;
                        return;
                      }
                      (m(d.current, !0) && s) ||
                        (n &&
                        c &&
                        (!o.current.openEvent ||
                          "click" === o.current.openEvent.type)
                          ? r(!1, e.nativeEvent)
                          : r(!0, e.nativeEvent));
                    },
                    onKeyDown(e) {
                      (d.current = void 0),
                        e.defaultPrevented ||
                          !f ||
                          eI(e) ||
                          (" " !== e.key ||
                            b(l) ||
                            (e.preventDefault(), (p.current = !0)),
                          "Enter" === e.key &&
                            (n && c
                              ? r(!1, e.nativeEvent)
                              : r(!0, e.nativeEvent)));
                    },
                    onKeyUp(e) {
                      !(e.defaultPrevented || !f || eI(e) || b(l)) &&
                        " " === e.key &&
                        p.current &&
                        ((p.current = !1),
                        n && c ? r(!1, e.nativeEvent) : r(!0, e.nativeEvent));
                    },
                  },
                }
              : {},
          [i, o, a, s, f, l, c, n, r]
        );
      }
      let eN = a["useInsertionEffect".toString()] || ((e) => e());
      function eF(e) {
        let t = u.useRef(() => {});
        return (
          eN(() => {
            t.current = e;
          }),
          u.useCallback(function () {
            for (var e = arguments.length, n = Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            return null == t.current ? void 0 : t.current(...n);
          }, [])
        );
      }
      let ej = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick",
        },
        e$ = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture",
        },
        e_ = (e) => {
          var t, n;
          return {
            escapeKeyBubbles:
              "boolean" == typeof e
                ? e
                : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePressBubbles:
              "boolean" == typeof e
                ? e
                : null == (n = null == e ? void 0 : e.outsidePress) || n,
          };
        };
      function eH(e, t) {
        void 0 === t && (t = {});
        let {
            open: n,
            onOpenChange: r,
            events: o,
            nodeId: i,
            elements: { reference: a, domReference: c, floating: s },
            dataRef: f,
          } = e,
          {
            enabled: v = !0,
            escapeKey: m = !0,
            outsidePress: b = !0,
            outsidePressEvent: w = "pointerdown",
            referencePress: x = !1,
            referencePressEvent: E = "pointerdown",
            ancestorScroll: R = !1,
            bubbles: k,
          } = t,
          T = ef(),
          S = null != es(),
          O = eF("function" == typeof b ? b : () => !1),
          A = "function" == typeof b ? O : b,
          P = u.useRef(!1),
          { escapeKeyBubbles: L, outsidePressBubbles: M } = e_(k),
          C = eF((e) => {
            if (!n || !v || !m || "Escape" !== e.key) return;
            let t = T ? eb(T.nodesRef.current, i) : [];
            if (!L && (e.stopPropagation(), t.length > 0)) {
              let e = !0;
              if (
                (t.forEach((t) => {
                  var n;
                  if (
                    null != (n = t.context) &&
                    n.open &&
                    !t.context.dataRef.current.__escapeKeyBubbles
                  ) {
                    e = !1;
                    return;
                  }
                }),
                !e)
              )
                return;
            }
            o.emit("dismiss", {
              type: "escapeKey",
              data: { returnFocus: { preventScroll: !1 } },
            }),
              r(!1, "nativeEvent" in e ? e.nativeEvent : e);
          }),
          I = eF((e) => {
            let t = P.current;
            if (((P.current = !1), t || ("function" == typeof A && !A(e))))
              return;
            let n = g(e);
            if ((0, l.Re)(n) && s) {
              let t = n.clientWidth > 0 && n.scrollWidth > n.clientWidth,
                r = n.clientHeight > 0 && n.scrollHeight > n.clientHeight,
                o = r && e.offsetX > n.clientWidth;
              if (
                (r &&
                  "rtl" === (0, l.Dx)(n).direction &&
                  (o = e.offsetX <= n.offsetWidth - n.clientWidth),
                o || (t && e.offsetY > n.clientHeight))
              )
                return;
            }
            let u =
              T &&
              eb(T.nodesRef.current, i).some((t) => {
                var n;
                return y(
                  e,
                  null == (n = t.context) ? void 0 : n.elements.floating
                );
              });
            if (y(e, s) || y(e, c) || u) return;
            let a = T ? eb(T.nodesRef.current, i) : [];
            if (a.length > 0) {
              let e = !0;
              if (
                (a.forEach((t) => {
                  var n;
                  if (
                    null != (n = t.context) &&
                    n.open &&
                    !t.context.dataRef.current.__outsidePressBubbles
                  ) {
                    e = !1;
                    return;
                  }
                }),
                !e)
              )
                return;
            }
            o.emit("dismiss", {
              type: "outsidePress",
              data: { returnFocus: S ? { preventScroll: !0 } : d(e) || p(e) },
            }),
              r(!1, e);
          });
        return (
          u.useEffect(() => {
            if (!n || !v) return;
            function e(e) {
              r(!1, e);
            }
            (f.current.__escapeKeyBubbles = L),
              (f.current.__outsidePressBubbles = M);
            let t = h(s);
            m && t.addEventListener("keydown", C),
              A && t.addEventListener(w, I);
            let o = [];
            return (
              R &&
                ((0, l.kK)(c) && (o = (0, l.Kx)(c)),
                (0, l.kK)(s) && (o = o.concat((0, l.Kx)(s))),
                !(0, l.kK)(a) &&
                  a &&
                  a.contextElement &&
                  (o = o.concat((0, l.Kx)(a.contextElement)))),
              (o = o.filter((e) => {
                var n;
                return (
                  e !==
                  (null == (n = t.defaultView) ? void 0 : n.visualViewport)
                );
              })).forEach((t) => {
                t.addEventListener("scroll", e, { passive: !0 });
              }),
              () => {
                m && t.removeEventListener("keydown", C),
                  A && t.removeEventListener(w, I),
                  o.forEach((t) => {
                    t.removeEventListener("scroll", e);
                  });
              }
            );
          }, [f, s, c, a, m, A, w, n, r, R, v, L, M, C, I]),
          u.useEffect(() => {
            P.current = !1;
          }, [A, w]),
          u.useMemo(
            () =>
              v
                ? {
                    reference: {
                      onKeyDown: C,
                      [ej[E]]: (e) => {
                        x &&
                          (o.emit("dismiss", {
                            type: "referencePress",
                            data: { returnFocus: !1 },
                          }),
                          r(!1, e.nativeEvent));
                      },
                    },
                    floating: {
                      onKeyDown: C,
                      [e$[w]]: () => {
                        P.current = !0;
                      },
                    },
                  }
                : {},
            [v, o, x, w, E, r, C]
          )
        );
      }
      function eK(e) {
        var t;
        void 0 === e && (e = {});
        let { open: n = !1, onOpenChange: r, nodeId: o } = e,
          [a, c] = u.useState(null),
          s = (null == (t = e.elements) ? void 0 : t.reference) || a,
          f = (0, i.YF)(e),
          d = ef(),
          p = eF((e, t) => {
            e && (m.current.openEvent = t), null == r || r(e, t);
          }),
          v = u.useRef(null),
          m = u.useRef({}),
          h = u.useState(() =>
            (function () {
              let e = new Map();
              return {
                emit(t, n) {
                  var r;
                  null == (r = e.get(t)) || r.forEach((e) => e(n));
                },
                on(t, n) {
                  e.set(t, [...(e.get(t) || []), n]);
                },
                off(t, n) {
                  var r;
                  e.set(
                    t,
                    (null == (r = e.get(t))
                      ? void 0
                      : r.filter((e) => e !== n)) || []
                  );
                },
              };
            })()
          )[0],
          y = ei(),
          g = u.useCallback(
            (e) => {
              let t = (0, l.kK)(e)
                ? {
                    getBoundingClientRect: () => e.getBoundingClientRect(),
                    contextElement: e,
                  }
                : e;
              f.refs.setReference(t);
            },
            [f.refs]
          ),
          b = u.useCallback(
            (e) => {
              ((0, l.kK)(e) || null === e) && ((v.current = e), c(e)),
                ((0, l.kK)(f.refs.reference.current) ||
                  null === f.refs.reference.current ||
                  (null !== e && !(0, l.kK)(e))) &&
                  f.refs.setReference(e);
            },
            [f.refs]
          ),
          w = u.useMemo(
            () => ({
              ...f.refs,
              setReference: b,
              setPositionReference: g,
              domReference: v,
            }),
            [f.refs, b, g]
          ),
          x = u.useMemo(
            () => ({ ...f.elements, domReference: s }),
            [f.elements, s]
          ),
          E = u.useMemo(
            () => ({
              ...f,
              refs: w,
              elements: x,
              dataRef: m,
              nodeId: o,
              floatingId: y,
              events: h,
              open: n,
              onOpenChange: p,
            }),
            [f, o, y, h, n, p, w, x]
          );
        return (
          en(() => {
            let e =
              null == d ? void 0 : d.nodesRef.current.find((e) => e.id === o);
            e && (e.context = E);
          }),
          u.useMemo(
            () => ({ ...f, context: E, refs: w, elements: x }),
            [f, w, x, E]
          )
        );
      }
      function ez(e, t) {
        void 0 === t && (t = {});
        let {
            open: n,
            onOpenChange: r,
            dataRef: o,
            events: i,
            refs: a,
            elements: { floating: f, domReference: d },
          } = e,
          { enabled: p = !0, keyboardOnly: v = !0 } = t,
          m = u.useRef(""),
          g = u.useRef(!1),
          b = u.useRef();
        return (
          u.useEffect(() => {
            if (!p) return;
            let e = h(f).defaultView || window;
            function t() {
              !n && (0, l.Re)(d) && d === c(h(d)) && (g.current = !0);
            }
            return (
              e.addEventListener("blur", t),
              () => {
                e.removeEventListener("blur", t);
              }
            );
          }, [f, d, n, p]),
          u.useEffect(() => {
            if (p)
              return (
                i.on("dismiss", e),
                () => {
                  i.off("dismiss", e);
                }
              );
            function e(e) {
              ("referencePress" === e.type || "escapeKey" === e.type) &&
                (g.current = !0);
            }
          }, [i, p]),
          u.useEffect(
            () => () => {
              clearTimeout(b.current);
            },
            []
          ),
          u.useMemo(
            () =>
              p
                ? {
                    reference: {
                      onPointerDown(e) {
                        let { pointerType: t } = e;
                        (m.current = t), (g.current = !!(t && v));
                      },
                      onMouseLeave() {
                        g.current = !1;
                      },
                      onFocus(e) {
                        var t;
                        g.current ||
                          ("focus" === e.type &&
                            (null == (t = o.current.openEvent)
                              ? void 0
                              : t.type) === "mousedown" &&
                            y(o.current.openEvent, d)) ||
                          r(!0, e.nativeEvent);
                      },
                      onBlur(e) {
                        g.current = !1;
                        let t = e.relatedTarget,
                          n =
                            (0, l.kK)(t) &&
                            t.hasAttribute(ed("focus-guard")) &&
                            "outside" === t.getAttribute("data-type");
                        b.current = setTimeout(() => {
                          s(a.floating.current, t) ||
                            s(d, t) ||
                            n ||
                            r(!1, e.nativeEvent);
                        });
                      },
                    },
                  }
                : {},
            [p, v, d, a, o, r]
          )
        );
      }
      function eV(e, t, n) {
        let r = new Map();
        return {
          ...("floating" === n && { tabIndex: -1 }),
          ...e,
          ...t
            .map((e) => (e ? e[n] : null))
            .concat(e)
            .reduce(
              (e, t) => (
                t &&
                  Object.entries(t).forEach((t) => {
                    let [n, o] = t;
                    if (0 === n.indexOf("on")) {
                      if ((r.has(n) || r.set(n, []), "function" == typeof o)) {
                        var l;
                        null == (l = r.get(n)) || l.push(o),
                          (e[n] = function () {
                            for (
                              var e, t = arguments.length, o = Array(t), l = 0;
                              l < t;
                              l++
                            )
                              o[l] = arguments[l];
                            return null == (e = r.get(n))
                              ? void 0
                              : e.map((e) => e(...o)).find((e) => void 0 !== e);
                          });
                      }
                    } else e[n] = o;
                  }),
                e
              ),
              {}
            ),
        };
      }
      function eW(e) {
        void 0 === e && (e = []);
        let t = e,
          n = u.useCallback((t) => eV(t, e, "reference"), t),
          r = u.useCallback((t) => eV(t, e, "floating"), t),
          o = u.useCallback(
            (t) => eV(t, e, "item"),
            e.map((e) => (null == e ? void 0 : e.item))
          );
        return u.useMemo(
          () => ({
            getReferenceProps: n,
            getFloatingProps: r,
            getItemProps: o,
          }),
          [n, r, o]
        );
      }
      let eq = !1,
        eB = "ArrowUp",
        eU = "ArrowDown",
        eY = "ArrowLeft",
        eJ = "ArrowRight";
      function eX(e, t, n) {
        return Math.floor(e / t) !== n;
      }
      function eG(e, t) {
        return t < 0 || t >= e.current.length;
      }
      function eZ(e, t) {
        let {
            startingIndex: n = -1,
            decrement: r = !1,
            disabledIndices: o,
            amount: l = 1,
          } = void 0 === t ? {} : t,
          i = e.current,
          u = n;
        do {
          var a, c;
          u += r ? -l : l;
        } while (
          u >= 0 &&
          u <= i.length - 1 &&
          (o
            ? o.includes(u)
            : null == i[u] ||
              (null == (a = i[u]) ? void 0 : a.hasAttribute("disabled")) ||
              (null == (c = i[u])
                ? void 0
                : c.getAttribute("aria-disabled")) === "true")
        );
        return u;
      }
      function eQ(e, t, n) {
        switch (e) {
          case "vertical":
            return t;
          case "horizontal":
            return n;
          default:
            return t || n;
        }
      }
      function e0(e, t) {
        return eQ(t, e === eB || e === eU, e === eY || e === eJ);
      }
      function e1(e, t, n) {
        return (
          eQ(t, e === eU, n ? e === eY : e === eJ) ||
          "Enter" === e ||
          " " == e ||
          "" === e
        );
      }
      function e2(e, t) {
        return eZ(e, { disabledIndices: t });
      }
      function e3(e, t) {
        return eZ(e, {
          decrement: !0,
          startingIndex: e.current.length,
          disabledIndices: t,
        });
      }
      function e6(e, t) {
        let {
            open: n,
            onOpenChange: r,
            refs: o,
            elements: { domReference: i, floating: a },
          } = e,
          {
            listRef: m,
            activeIndex: y,
            onNavigate: g = () => {},
            enabled: b = !0,
            selectedIndex: x = null,
            allowEscape: E = !1,
            loop: R = !1,
            nested: k = !1,
            rtl: T = !1,
            virtual: S = !1,
            focusItemOnOpen: O = "auto",
            focusItemOnHover: A = !0,
            openOnArrowKeyDown: P = !0,
            disabledIndices: L,
            orientation: M = "vertical",
            cols: C = 1,
            scrollItemIntoView: I = !0,
          } = t,
          D = es(),
          N = ef(),
          F = eF(g),
          j = u.useRef(O),
          $ = u.useRef(null != x ? x : -1),
          _ = u.useRef(null),
          H = u.useRef(!0),
          K = u.useRef(F),
          z = u.useRef(!!a),
          V = u.useRef(!1),
          W = u.useRef(!1),
          q = ep(L),
          B = ep(n),
          U = ep(I),
          [Y, J] = u.useState(),
          X = eF(function (e, t, n) {
            void 0 === n && (n = !1);
            let r = e.current[t.current];
            r &&
              (S
                ? J(r.id)
                : eg(r, {
                    preventScroll: !0,
                    sync:
                      !!(
                        f().toLowerCase().startsWith("mac") &&
                        !navigator.maxTouchPoints &&
                        v()
                      ) &&
                      (eq || V.current),
                  }),
              requestAnimationFrame(() => {
                let e = U.current;
                e &&
                  r &&
                  (n || !H.current) &&
                  (null == r.scrollIntoView ||
                    r.scrollIntoView(
                      "boolean" == typeof e
                        ? { block: "nearest", inline: "nearest" }
                        : e
                    ));
              }));
          });
        en(() => {
          document.createElement("div").focus({
            get preventScroll() {
              return (eq = !0), !1;
            },
          });
        }, []),
          en(() => {
            b &&
              (n && a
                ? j.current && null != x && ((W.current = !0), F(x))
                : z.current && (($.current = -1), K.current(null)));
          }, [b, n, a, x, F]),
          en(() => {
            if (b && n && a) {
              if (null == y) {
                if (
                  ((V.current = !1),
                  null == x &&
                    (z.current && (($.current = -1), X(m, $)),
                    !z.current &&
                      j.current &&
                      (null != _.current ||
                        (!0 === j.current && null == _.current))))
                ) {
                  let e = 0,
                    t = () => {
                      null == m.current[0]
                        ? (e < 2 &&
                            (e ? requestAnimationFrame : queueMicrotask)(t),
                          e++)
                        : (($.current =
                            null == _.current || e1(_.current, M, T) || k
                              ? e2(m, q.current)
                              : e3(m, q.current)),
                          (_.current = null),
                          F($.current));
                    };
                  t();
                }
              } else
                eG(m, y) ||
                  (($.current = y), X(m, $, W.current), (W.current = !1));
            }
          }, [b, n, a, y, x, k, m, M, T, F, X, q]),
          en(() => {
            if (b && z.current && !a && N) {
              var e, t;
              let n = N.nodesRef.current,
                r =
                  null == (e = n.find((e) => e.id === D))
                    ? void 0
                    : null == (t = e.context)
                    ? void 0
                    : t.elements.floating,
                o = c(h(a)),
                l = n.some(
                  (e) => e.context && s(e.context.elements.floating, o)
                );
              r && !l && r.focus({ preventScroll: !0 });
            }
          }, [b, a, N, D]),
          en(() => {
            (K.current = F), (z.current = !!a);
          }),
          en(() => {
            n || (_.current = null);
          }, [n]);
        let G = null != y,
          Z = u.useMemo(() => {
            function e(e) {
              if (!n) return;
              let t = m.current.indexOf(e);
              -1 !== t && F(t);
            }
            return {
              onFocus(t) {
                let { currentTarget: n } = t;
                e(n);
              },
              onClick: (e) => {
                let { currentTarget: t } = e;
                return t.focus({ preventScroll: !0 });
              },
              ...(A && {
                onMouseMove(t) {
                  let { currentTarget: n } = t;
                  e(n);
                },
                onPointerLeave(e) {
                  let { pointerType: t } = e;
                  H.current &&
                    "touch" !== t &&
                    (($.current = -1),
                    X(m, $),
                    F(null),
                    S || eg(o.floating.current, { preventScroll: !0 }));
                },
              }),
            };
          }, [n, o, X, A, m, F, S]);
        return u.useMemo(() => {
          if (!b) return {};
          let e = q.current;
          function t(t) {
            var u;
            if (
              ((H.current = !1),
              (V.current = !0),
              !B.current && t.currentTarget === o.floating.current)
            )
              return;
            if (k && ((u = t.key), eQ(M, T ? u === eJ : u === eY, u === eB))) {
              w(t), r(!1, t.nativeEvent), (0, l.Re)(i) && i.focus();
              return;
            }
            let a = $.current,
              s = e2(m, e),
              f = e3(m, e);
            if (
              ("Home" === t.key && (w(t), ($.current = s), F($.current)),
              "End" === t.key && (w(t), ($.current = f), F($.current)),
              C > 1)
            ) {
              let n = $.current;
              if (t.key === eB) {
                if ((w(t), -1 === n)) $.current = f;
                else if (
                  (($.current = eZ(m, {
                    startingIndex: n,
                    amount: C,
                    decrement: !0,
                    disabledIndices: e,
                  })),
                  R && (n - C < s || $.current < 0))
                ) {
                  let e = n % C,
                    t = f % C,
                    r = f - (t - e);
                  t === e ? ($.current = f) : ($.current = t > e ? r : r - C);
                }
                eG(m, $.current) && ($.current = n), F($.current);
              }
              if (
                (t.key === eU &&
                  (w(t),
                  -1 === n
                    ? ($.current = s)
                    : (($.current = eZ(m, {
                        startingIndex: n,
                        amount: C,
                        disabledIndices: e,
                      })),
                      R &&
                        n + C > f &&
                        ($.current = eZ(m, {
                          startingIndex: (n % C) - C,
                          amount: C,
                          disabledIndices: e,
                        }))),
                  eG(m, $.current) && ($.current = n),
                  F($.current)),
                "both" === M)
              ) {
                let r = Math.floor(n / C);
                t.key === eJ &&
                  (w(t),
                  n % C != C - 1
                    ? (($.current = eZ(m, {
                        startingIndex: n,
                        disabledIndices: e,
                      })),
                      R &&
                        eX($.current, C, r) &&
                        ($.current = eZ(m, {
                          startingIndex: n - (n % C) - 1,
                          disabledIndices: e,
                        })))
                    : R &&
                      ($.current = eZ(m, {
                        startingIndex: n - (n % C) - 1,
                        disabledIndices: e,
                      })),
                  eX($.current, C, r) && ($.current = n)),
                  t.key === eY &&
                    (w(t),
                    n % C != 0
                      ? (($.current = eZ(m, {
                          startingIndex: n,
                          disabledIndices: e,
                          decrement: !0,
                        })),
                        R &&
                          eX($.current, C, r) &&
                          ($.current = eZ(m, {
                            startingIndex: n + (C - (n % C)),
                            decrement: !0,
                            disabledIndices: e,
                          })))
                      : R &&
                        ($.current = eZ(m, {
                          startingIndex: n + (C - (n % C)),
                          decrement: !0,
                          disabledIndices: e,
                        })),
                    eX($.current, C, r) && ($.current = n));
                let o = Math.floor(f / C) === r;
                eG(m, $.current) &&
                  (R && o
                    ? ($.current =
                        t.key === eY
                          ? f
                          : eZ(m, {
                              startingIndex: n - (n % C) - 1,
                              disabledIndices: e,
                            }))
                    : ($.current = n)),
                  F($.current);
                return;
              }
            }
            if (e0(t.key, M)) {
              if (
                (w(t),
                n && !S && c(t.currentTarget.ownerDocument) === t.currentTarget)
              ) {
                ($.current = e1(t.key, M, T) ? s : f), F($.current);
                return;
              }
              e1(t.key, M, T)
                ? R
                  ? ($.current =
                      a >= f
                        ? E && a !== m.current.length
                          ? -1
                          : s
                        : eZ(m, { startingIndex: a, disabledIndices: e }))
                  : ($.current = Math.min(
                      f,
                      eZ(m, { startingIndex: a, disabledIndices: e })
                    ))
                : R
                ? ($.current =
                    a <= s
                      ? E && -1 !== a
                        ? m.current.length
                        : f
                      : eZ(m, {
                          startingIndex: a,
                          decrement: !0,
                          disabledIndices: e,
                        }))
                : ($.current = Math.max(
                    s,
                    eZ(m, {
                      startingIndex: a,
                      decrement: !0,
                      disabledIndices: e,
                    })
                  )),
                eG(m, $.current) ? F(null) : F($.current);
            }
          }
          function u(e) {
            "auto" === O && d(e.nativeEvent) && (j.current = !0);
          }
          let a = S && n && G && { "aria-activedescendant": Y };
          return {
            reference: {
              ...a,
              onKeyDown(o) {
                var l;
                H.current = !1;
                let i = 0 === o.key.indexOf("Arrow");
                if (S && n) return t(o);
                if (!n && !P && i) return;
                let u = i || "Enter" === o.key || "" === o.key.trim(),
                  a = e0(o.key, M),
                  c = ((l = o.key), eQ(M, T ? l === eY : l === eJ, l === eU));
                if ((u && (_.current = k && a ? null : o.key), k)) {
                  c &&
                    (w(o),
                    n
                      ? (($.current = e2(m, e)), F($.current))
                      : r(!0, o.nativeEvent));
                  return;
                }
                a &&
                  (null != x && ($.current = x),
                  w(o),
                  !n && P ? r(!0, o.nativeEvent) : t(o),
                  n && F($.current));
              },
              onFocus() {
                n && F(null);
              },
              onPointerDown: function (e) {
                (j.current = O),
                  "auto" === O && p(e.nativeEvent) && (j.current = !0);
              },
              onMouseDown: u,
              onClick: u,
            },
            floating: {
              "aria-orientation": "both" === M ? void 0 : M,
              ...a,
              onKeyDown: t,
              onPointerMove() {
                H.current = !0;
              },
            },
            item: Z,
          };
        }, [i, o, Y, q, B, m, b, M, T, S, n, G, k, x, P, E, C, R, O, F, r, Z]);
      }
      function e4(e) {
        return u.useMemo(
          () =>
            e.every((e) => null == e)
              ? null
              : (t) => {
                  e.forEach((e) => {
                    "function" == typeof e
                      ? e(t)
                      : null != e && (e.current = t);
                  });
                },
          e
        );
      }
      function e9(e, t) {
        void 0 === t && (t = {});
        let { open: n, floatingId: r } = e,
          { enabled: o = !0, role: l = "dialog" } = t,
          i = ei();
        return u.useMemo(() => {
          let e = { id: r, role: l };
          return o
            ? "tooltip" === l
              ? {
                  reference: { "aria-describedby": n ? r : void 0 },
                  floating: e,
                }
              : {
                  reference: {
                    "aria-expanded": n ? "true" : "false",
                    "aria-haspopup": "alertdialog" === l ? "dialog" : l,
                    "aria-controls": n ? r : void 0,
                    ...("listbox" === l && { role: "combobox" }),
                    ...("menu" === l && { id: i }),
                  },
                  floating: {
                    ...e,
                    ...("menu" === l && { "aria-labelledby": i }),
                  },
                }
            : {};
        }, [o, l, n, r, i]);
      }
      function e8(e, t) {
        let [n, r] = e,
          o = !1,
          l = t.length;
        for (let e = 0, i = l - 1; e < l; i = e++) {
          let [l, u] = t[e] || [0, 0],
            [a, c] = t[i] || [0, 0];
          u >= r != c >= r &&
            n <= ((a - l) * (r - u)) / (c - u) + l &&
            (o = !o);
        }
        return o;
      }
      function e5(e) {
        let t;
        void 0 === e && (e = {});
        let {
            buffer: n = 0.5,
            blockPointerEvents: r = !1,
            requireIntent: o = !0,
          } = e,
          i = !1,
          u = null,
          a = null,
          c = performance.now(),
          f = (e) => {
            let {
              x: r,
              y: f,
              placement: d,
              elements: p,
              onClose: v,
              nodeId: m,
              tree: h,
            } = e;
            return function (e) {
              function y() {
                clearTimeout(t), v();
              }
              if (
                (clearTimeout(t),
                !p.domReference ||
                  !p.floating ||
                  null == d ||
                  null == r ||
                  null == f)
              )
                return;
              let { clientX: b, clientY: w } = e,
                x = [b, w],
                E = g(e),
                R = "mouseleave" === e.type,
                k = s(p.floating, E),
                T = s(p.domReference, E),
                S = p.domReference.getBoundingClientRect(),
                O = p.floating.getBoundingClientRect(),
                A = d.split("-")[0],
                P = r > O.right - O.width / 2,
                L = f > O.bottom - O.height / 2,
                M =
                  x[0] >= S.x &&
                  x[0] <= S.x + S.width &&
                  x[1] >= S.y &&
                  x[1] <= S.y + S.height,
                C = O.width > S.width,
                I = O.height > S.height,
                D = (C ? S : O).left,
                N = (C ? S : O).right,
                F = (I ? S : O).top,
                j = (I ? S : O).bottom;
              if (k && ((i = !0), !R)) return;
              if ((T && (i = !1), T && !R)) {
                i = !0;
                return;
              }
              if (
                (R &&
                  (0, l.kK)(e.relatedTarget) &&
                  s(p.floating, e.relatedTarget)) ||
                (h &&
                  eb(h.nodesRef.current, m).some((e) => {
                    let { context: t } = e;
                    return null == t ? void 0 : t.open;
                  }))
              )
                return;
              if (
                ("top" === A && f >= S.bottom - 1) ||
                ("bottom" === A && f <= S.top + 1) ||
                ("left" === A && r >= S.right - 1) ||
                ("right" === A && r <= S.left + 1)
              )
                return y();
              let $ = [];
              switch (A) {
                case "top":
                  $ = [
                    [D, S.top + 1],
                    [D, O.bottom - 1],
                    [N, O.bottom - 1],
                    [N, S.top + 1],
                  ];
                  break;
                case "bottom":
                  $ = [
                    [D, O.top + 1],
                    [D, S.bottom - 1],
                    [N, S.bottom - 1],
                    [N, O.top + 1],
                  ];
                  break;
                case "left":
                  $ = [
                    [O.right - 1, j],
                    [O.right - 1, F],
                    [S.left + 1, F],
                    [S.left + 1, j],
                  ];
                  break;
                case "right":
                  $ = [
                    [S.right - 1, j],
                    [S.right - 1, F],
                    [O.left + 1, F],
                    [O.left + 1, j],
                  ];
              }
              if (!e8([b, w], $)) {
                if (i && !M) return y();
                if (!R && o) {
                  let t = (function (e, t) {
                    let n = performance.now(),
                      r = n - c;
                    if (null === u || null === a || 0 === r)
                      return (u = e), (a = t), (c = n), null;
                    let o = e - u,
                      l = t - a;
                    return (
                      (u = e), (a = t), (c = n), Math.sqrt(o * o + l * l) / r
                    );
                  })(e.clientX, e.clientY);
                  if (null !== t && t < 0.1) return y();
                }
                e8(
                  [b, w],
                  (function (e) {
                    let [t, r] = e;
                    switch (A) {
                      case "top": {
                        let e = [
                          [O.left, P ? O.bottom - n : C ? O.bottom - n : O.top],
                          [
                            O.right,
                            P ? (C ? O.bottom - n : O.top) : O.bottom - n,
                          ],
                        ];
                        return [
                          [
                            C ? t + n / 2 : P ? t + 4 * n : t - 4 * n,
                            r + n + 1,
                          ],
                          [
                            C ? t - n / 2 : P ? t + 4 * n : t - 4 * n,
                            r + n + 1,
                          ],
                          ...e,
                        ];
                      }
                      case "bottom": {
                        let e = [
                          [O.left, P ? O.top + n : C ? O.top + n : O.bottom],
                          [O.right, P ? (C ? O.top + n : O.bottom) : O.top + n],
                        ];
                        return [
                          [C ? t + n / 2 : P ? t + 4 * n : t - 4 * n, r - n],
                          [C ? t - n / 2 : P ? t + 4 * n : t - 4 * n, r - n],
                          ...e,
                        ];
                      }
                      case "left":
                        return [
                          [L ? O.right - n : I ? O.right - n : O.left, O.top],
                          [
                            L ? (I ? O.right - n : O.left) : O.right - n,
                            O.bottom,
                          ],
                          [
                            t + n + 1,
                            I ? r + n / 2 : L ? r + 4 * n : r - 4 * n,
                          ],
                          [
                            t + n + 1,
                            I ? r - n / 2 : L ? r + 4 * n : r - 4 * n,
                          ],
                        ];
                      case "right": {
                        let e = [
                          [L ? O.left + n : I ? O.left + n : O.right, O.top],
                          [
                            L ? (I ? O.left + n : O.right) : O.left + n,
                            O.bottom,
                          ],
                        ];
                        return [
                          [t - n, I ? r + n / 2 : L ? r + 4 * n : r - 4 * n],
                          [t - n, I ? r - n / 2 : L ? r + 4 * n : r - 4 * n],
                          ...e,
                        ];
                      }
                    }
                  })([r, f])
                )
                  ? !i && o && (t = window.setTimeout(y, 40))
                  : y();
              }
            };
          };
        return (f.__options = { blockPointerEvents: r }), f;
      }
    },
    66492: function (e, t, n) {
      "use strict";
      n.d(t, {
        Fp: function () {
          return o;
        },
        GW: function () {
          return i;
        },
        I4: function () {
          return m;
        },
        JB: function () {
          return k;
        },
        KX: function () {
          return x;
        },
        NM: function () {
          return l;
        },
        Qq: function () {
          return h;
        },
        Rn: function () {
          return v;
        },
        VV: function () {
          return r;
        },
        Wh: function () {
          return y;
        },
        gy: function () {
          return b;
        },
        hp: function () {
          return p;
        },
        i8: function () {
          return g;
        },
        k3: function () {
          return d;
        },
        ku: function () {
          return f;
        },
        pw: function () {
          return E;
        },
        uZ: function () {
          return s;
        },
        yd: function () {
          return R;
        },
        ze: function () {
          return u;
        },
      });
      let r = Math.min,
        o = Math.max,
        l = Math.round,
        i = Math.floor,
        u = (e) => ({ x: e, y: e }),
        a = { left: "right", right: "left", bottom: "top", top: "bottom" },
        c = { start: "end", end: "start" };
      function s(e, t, n) {
        return o(e, r(t, n));
      }
      function f(e, t) {
        return "function" == typeof e ? e(t) : e;
      }
      function d(e) {
        return e.split("-")[0];
      }
      function p(e) {
        return e.split("-")[1];
      }
      function v(e) {
        return "x" === e ? "y" : "x";
      }
      function m(e) {
        return "y" === e ? "height" : "width";
      }
      function h(e) {
        return ["top", "bottom"].includes(d(e)) ? "y" : "x";
      }
      function y(e) {
        return v(h(e));
      }
      function g(e, t, n) {
        void 0 === n && (n = !1);
        let r = p(e),
          o = y(e),
          l = m(o),
          i =
            "x" === o
              ? r === (n ? "end" : "start")
                ? "right"
                : "left"
              : "start" === r
              ? "bottom"
              : "top";
        return t.reference[l] > t.floating[l] && (i = E(i)), [i, E(i)];
      }
      function b(e) {
        let t = E(e);
        return [w(e), t, w(t)];
      }
      function w(e) {
        return e.replace(/start|end/g, (e) => c[e]);
      }
      function x(e, t, n, r) {
        let o = p(e),
          l = (function (e, t, n) {
            let r = ["left", "right"],
              o = ["right", "left"];
            switch (e) {
              case "top":
              case "bottom":
                if (n) return t ? o : r;
                return t ? r : o;
              case "left":
              case "right":
                return t ? ["top", "bottom"] : ["bottom", "top"];
              default:
                return [];
            }
          })(d(e), "start" === n, r);
        return (
          o && ((l = l.map((e) => e + "-" + o)), t && (l = l.concat(l.map(w)))),
          l
        );
      }
      function E(e) {
        return e.replace(/left|right|bottom|top/g, (e) => a[e]);
      }
      function R(e) {
        return "number" != typeof e
          ? { top: 0, right: 0, bottom: 0, left: 0, ...e }
          : { top: e, right: e, bottom: e, left: e };
      }
      function k(e) {
        return {
          ...e,
          top: e.y,
          left: e.x,
          right: e.x + e.width,
          bottom: e.y + e.height,
        };
      }
    },
    30182: function (e, t, n) {
      "use strict";
      function r(e) {
        return i(e) ? (e.nodeName || "").toLowerCase() : "#document";
      }
      function o(e) {
        var t;
        return (
          (null == e
            ? void 0
            : null == (t = e.ownerDocument)
            ? void 0
            : t.defaultView) || window
        );
      }
      function l(e) {
        var t;
        return null ==
          (t = (i(e) ? e.ownerDocument : e.document) || window.document)
          ? void 0
          : t.documentElement;
      }
      function i(e) {
        return e instanceof Node || e instanceof o(e).Node;
      }
      function u(e) {
        return e instanceof Element || e instanceof o(e).Element;
      }
      function a(e) {
        return e instanceof HTMLElement || e instanceof o(e).HTMLElement;
      }
      function c(e) {
        return (
          "undefined" != typeof ShadowRoot &&
          (e instanceof ShadowRoot || e instanceof o(e).ShadowRoot)
        );
      }
      function s(e) {
        let { overflow: t, overflowX: n, overflowY: r, display: o } = h(e);
        return (
          /auto|scroll|overlay|hidden|clip/.test(t + r + n) &&
          !["inline", "contents"].includes(o)
        );
      }
      function f(e) {
        return ["table", "td", "th"].includes(r(e));
      }
      function d(e) {
        let t = v(),
          n = h(e);
        return (
          "none" !== n.transform ||
          "none" !== n.perspective ||
          (!!n.containerType && "normal" !== n.containerType) ||
          (!t && !!n.backdropFilter && "none" !== n.backdropFilter) ||
          (!t && !!n.filter && "none" !== n.filter) ||
          ["transform", "perspective", "filter"].some((e) =>
            (n.willChange || "").includes(e)
          ) ||
          ["paint", "layout", "strict", "content"].some((e) =>
            (n.contain || "").includes(e)
          )
        );
      }
      function p(e) {
        let t = g(e);
        for (; a(t) && !m(t); ) {
          if (d(t)) return t;
          t = g(t);
        }
        return null;
      }
      function v() {
        return (
          "undefined" != typeof CSS &&
          !!CSS.supports &&
          CSS.supports("-webkit-backdrop-filter", "none")
        );
      }
      function m(e) {
        return ["html", "body", "#document"].includes(r(e));
      }
      function h(e) {
        return o(e).getComputedStyle(e);
      }
      function y(e) {
        return u(e)
          ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
          : { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
      }
      function g(e) {
        if ("html" === r(e)) return e;
        let t = e.assignedSlot || e.parentNode || (c(e) && e.host) || l(e);
        return c(t) ? t.host : t;
      }
      n.d(t, {
        Dx: function () {
          return h;
        },
        Jj: function () {
          return o;
        },
        Kx: function () {
          return function e(t, n) {
            var r;
            void 0 === n && (n = []);
            let l = (function e(t) {
                let n = g(t);
                return m(n)
                  ? t.ownerDocument
                    ? t.ownerDocument.body
                    : t.body
                  : a(n) && s(n)
                  ? n
                  : e(n);
              })(t),
              i = l === (null == (r = t.ownerDocument) ? void 0 : r.body),
              u = o(l);
            return i
              ? n.concat(u, u.visualViewport || [], s(l) ? l : [])
              : n.concat(l, e(l));
          };
        },
        Lw: function () {
          return y;
        },
        Ow: function () {
          return g;
        },
        Pf: function () {
          return v;
        },
        Py: function () {
          return m;
        },
        Re: function () {
          return a;
        },
        Ze: function () {
          return f;
        },
        Zq: function () {
          return c;
        },
        ao: function () {
          return s;
        },
        gQ: function () {
          return p;
        },
        hT: function () {
          return d;
        },
        kK: function () {
          return u;
        },
        tF: function () {
          return l;
        },
        wk: function () {
          return r;
        },
      });
    },
    85758: function (e, t, n) {
      "use strict";
      n.d(t, {
        R: function () {
          return o;
        },
      });
      var r,
        o =
          (((r = o || {}).Space = " "),
          (r.Enter = "Enter"),
          (r.Escape = "Escape"),
          (r.Backspace = "Backspace"),
          (r.Delete = "Delete"),
          (r.ArrowLeft = "ArrowLeft"),
          (r.ArrowUp = "ArrowUp"),
          (r.ArrowRight = "ArrowRight"),
          (r.ArrowDown = "ArrowDown"),
          (r.Home = "Home"),
          (r.End = "End"),
          (r.PageUp = "PageUp"),
          (r.PageDown = "PageDown"),
          (r.Tab = "Tab"),
          r);
    },
    59541: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return F;
        },
      });
      var r,
        o,
        l,
        i = n(96682),
        u = n(47702),
        a = n(65961),
        c = n(45120),
        s = n(85758),
        f = n(42239),
        d = n(64092),
        p = n(39809);
      function v(e) {
        var t;
        if (e.type) return e.type;
        let n = null != (t = e.as) ? t : "button";
        if ("string" == typeof n && "button" === n.toLowerCase())
          return "button";
      }
      var m = n(59410),
        h = n(39629),
        y = n(57225);
      function g({ onFocus: e }) {
        let [t, n] = (0, i.useState)(!0),
          r = (0, h.t)();
        return t
          ? i.createElement(y._, {
              as: "button",
              type: "button",
              features: y.A.Focusable,
              onFocus: (t) => {
                t.preventDefault();
                let o,
                  l = 50;
                o = requestAnimationFrame(function t() {
                  if (l-- <= 0) {
                    o && cancelAnimationFrame(o);
                    return;
                  }
                  if (e()) {
                    if ((cancelAnimationFrame(o), !r.current)) return;
                    n(!1);
                    return;
                  }
                  o = requestAnimationFrame(t);
                });
              },
            })
          : null;
      }
      var b = n(68344),
        w = n(76913),
        x = n(69099);
      let E = i.createContext(null);
      function R({ children: e }) {
        let t = i.useRef({
          groups: new Map(),
          get(e, t) {
            var n;
            let r = this.groups.get(e);
            r || ((r = new Map()), this.groups.set(e, r));
            let o = null != (n = r.get(t)) ? n : 0;
            return (
              r.set(t, o + 1),
              [
                Array.from(r.keys()).indexOf(t),
                function () {
                  let e = r.get(t);
                  e > 1 ? r.set(t, e - 1) : r.delete(t);
                },
              ]
            );
          },
        });
        return i.createElement(E.Provider, { value: t }, e);
      }
      function k(e) {
        let t = i.useContext(E);
        if (!t)
          throw Error("You must wrap your component in a <StableCollection>");
        let n = (function () {
            var e, t, n;
            let r =
              null !=
              (n =
                null ==
                (t =
                  null ==
                  (e = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)
                    ? void 0
                    : e.ReactCurrentOwner)
                  ? void 0
                  : t.current)
                ? n
                : null;
            if (!r) return Symbol();
            let o = [],
              l = r;
            for (; l; ) o.push(l.index), (l = l.return);
            return "$." + o.join(".");
          })(),
          [r, o] = t.current.get(e, n);
        return i.useEffect(() => o, []), r;
      }
      var T =
          (((r = T || {})[(r.Forwards = 0)] = "Forwards"),
          (r[(r.Backwards = 1)] = "Backwards"),
          r),
        S =
          (((o = S || {})[(o.Less = -1)] = "Less"),
          (o[(o.Equal = 0)] = "Equal"),
          (o[(o.Greater = 1)] = "Greater"),
          o),
        O =
          (((l = O || {})[(l.SetSelectedIndex = 0)] = "SetSelectedIndex"),
          (l[(l.RegisterTab = 1)] = "RegisterTab"),
          (l[(l.UnregisterTab = 2)] = "UnregisterTab"),
          (l[(l.RegisterPanel = 3)] = "RegisterPanel"),
          (l[(l.UnregisterPanel = 4)] = "UnregisterPanel"),
          l);
      let A = {
          0(e, t) {
            var n;
            let r = (0, f.z2)(e.tabs, (e) => e.current),
              o = (0, f.z2)(e.panels, (e) => e.current),
              l = r.filter((e) => {
                var t;
                return !(null != (t = e.current) && t.hasAttribute("disabled"));
              }),
              i = { ...e, tabs: r, panels: o };
            if (t.index < 0 || t.index > r.length - 1) {
              let n = (0, c.E)(Math.sign(t.index - e.selectedIndex), {
                [-1]: () => 1,
                0: () =>
                  (0, c.E)(Math.sign(t.index), {
                    [-1]: () => 0,
                    0: () => 0,
                    1: () => 1,
                  }),
                1: () => 0,
              });
              if (0 === l.length) return i;
              let o = (0, c.E)(n, {
                0: () => r.indexOf(l[0]),
                1: () => r.indexOf(l[l.length - 1]),
              });
              return { ...i, selectedIndex: -1 === o ? e.selectedIndex : o };
            }
            let u = r.slice(0, t.index),
              a = [...r.slice(t.index), ...u].find((e) => l.includes(e));
            if (!a) return i;
            let s = null != (n = r.indexOf(a)) ? n : e.selectedIndex;
            return (
              -1 === s && (s = e.selectedIndex), { ...i, selectedIndex: s }
            );
          },
          1(e, t) {
            var n;
            if (e.tabs.includes(t.tab)) return e;
            let r = e.tabs[e.selectedIndex],
              o = (0, f.z2)([...e.tabs, t.tab], (e) => e.current),
              l = null != (n = o.indexOf(r)) ? n : e.selectedIndex;
            return (
              -1 === l && (l = e.selectedIndex),
              { ...e, tabs: o, selectedIndex: l }
            );
          },
          2: (e, t) => ({ ...e, tabs: e.tabs.filter((e) => e !== t.tab) }),
          3: (e, t) =>
            e.panels.includes(t.panel)
              ? e
              : {
                  ...e,
                  panels: (0, f.z2)([...e.panels, t.panel], (e) => e.current),
                },
          4: (e, t) => ({
            ...e,
            panels: e.panels.filter((e) => e !== t.panel),
          }),
        },
        P = (0, i.createContext)(null);
      function L(e) {
        let t = (0, i.useContext)(P);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, L), t);
        }
        return t;
      }
      P.displayName = "TabsDataContext";
      let M = (0, i.createContext)(null);
      function C(e) {
        let t = (0, i.useContext)(M);
        if (null === t) {
          let t = Error(
            `<${e} /> is missing a parent <Tab.Group /> component.`
          );
          throw (Error.captureStackTrace && Error.captureStackTrace(t, C), t);
        }
        return t;
      }
      function I(e, t) {
        return (0, c.E)(t.type, A, e, t);
      }
      M.displayName = "TabsActionsContext";
      let D = i.Fragment,
        N = u.AN.RenderStrategy | u.AN.Static,
        F = Object.assign(
          (0, u.yV)(function (e, t) {
            var n, r;
            let o = (0, a.M)(),
              { id: l = `headlessui-tabs-tab-${o}`, ...m } = e,
              {
                orientation: h,
                activation: y,
                selectedIndex: g,
                tabs: E,
                panels: R,
              } = L("Tab"),
              T = C("Tab"),
              S = L("Tab"),
              O = (0, i.useRef)(null),
              A = (0, p.T)(O, t);
            (0, d.e)(() => T.registerTab(O), [T, O]);
            let P = k("tabs"),
              M = E.indexOf(O);
            -1 === M && (M = P);
            let I = M === g,
              D = (0, b.z)((e) => {
                var t;
                let n = e();
                if (n === f.fE.Success && "auto" === y) {
                  let e = null == (t = (0, x.r)(O)) ? void 0 : t.activeElement,
                    n = S.tabs.findIndex((t) => t.current === e);
                  -1 !== n && T.change(n);
                }
                return n;
              }),
              N = (0, b.z)((e) => {
                let t = E.map((e) => e.current).filter(Boolean);
                if (e.key === s.R.Space || e.key === s.R.Enter) {
                  e.preventDefault(), e.stopPropagation(), T.change(M);
                  return;
                }
                switch (e.key) {
                  case s.R.Home:
                  case s.R.PageUp:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      D(() => (0, f.jA)(t, f.TO.First))
                    );
                  case s.R.End:
                  case s.R.PageDown:
                    return (
                      e.preventDefault(),
                      e.stopPropagation(),
                      D(() => (0, f.jA)(t, f.TO.Last))
                    );
                }
                if (
                  D(() =>
                    (0, c.E)(h, {
                      vertical: () =>
                        e.key === s.R.ArrowUp
                          ? (0, f.jA)(t, f.TO.Previous | f.TO.WrapAround)
                          : e.key === s.R.ArrowDown
                          ? (0, f.jA)(t, f.TO.Next | f.TO.WrapAround)
                          : f.fE.Error,
                      horizontal: () =>
                        e.key === s.R.ArrowLeft
                          ? (0, f.jA)(t, f.TO.Previous | f.TO.WrapAround)
                          : e.key === s.R.ArrowRight
                          ? (0, f.jA)(t, f.TO.Next | f.TO.WrapAround)
                          : f.fE.Error,
                    })
                  ) === f.fE.Success
                )
                  return e.preventDefault();
              }),
              F = (0, i.useRef)(!1),
              j = (0, b.z)(() => {
                var e;
                F.current ||
                  ((F.current = !0),
                  null == (e = O.current) || e.focus({ preventScroll: !0 }),
                  T.change(M),
                  (0, w.Y)(() => {
                    F.current = !1;
                  }));
              }),
              $ = (0, b.z)((e) => {
                e.preventDefault();
              }),
              _ = (0, i.useMemo)(() => ({ selected: I }), [I]),
              H = {
                ref: A,
                onKeyDown: N,
                onMouseDown: $,
                onClick: j,
                id: l,
                role: "tab",
                type: (function (e, t) {
                  let [n, r] = (0, i.useState)(() => v(e));
                  return (
                    (0, d.e)(() => {
                      r(v(e));
                    }, [e.type, e.as]),
                    (0, d.e)(() => {
                      n ||
                        (t.current &&
                          t.current instanceof HTMLButtonElement &&
                          !t.current.hasAttribute("type") &&
                          r("button"));
                    }, [n, t]),
                    n
                  );
                })(e, O),
                "aria-controls":
                  null == (r = null == (n = R[M]) ? void 0 : n.current)
                    ? void 0
                    : r.id,
                "aria-selected": I,
                tabIndex: I ? 0 : -1,
              };
            return (0,
            u.sY)({ ourProps: H, theirProps: m, slot: _, defaultTag: "button", name: "Tabs.Tab" });
          }),
          {
            Group: (0, u.yV)(function (e, t) {
              let {
                  defaultIndex: n = 0,
                  vertical: r = !1,
                  manual: o = !1,
                  onChange: l,
                  selectedIndex: a = null,
                  ...c
                } = e,
                s = r ? "vertical" : "horizontal",
                v = o ? "manual" : "auto",
                h = null !== a,
                y = (0, p.T)(t),
                [w, x] = (0, i.useReducer)(I, {
                  selectedIndex: null != a ? a : n,
                  tabs: [],
                  panels: [],
                }),
                E = (0, i.useMemo)(
                  () => ({ selectedIndex: w.selectedIndex }),
                  [w.selectedIndex]
                ),
                k = (0, m.E)(l || (() => {})),
                T = (0, m.E)(w.tabs),
                S = (0, i.useMemo)(
                  () => ({ orientation: s, activation: v, ...w }),
                  [s, v, w]
                ),
                O = (0, b.z)(
                  (e) => (x({ type: 1, tab: e }), () => x({ type: 2, tab: e }))
                ),
                A = (0, b.z)(
                  (e) => (
                    x({ type: 3, panel: e }), () => x({ type: 4, panel: e })
                  )
                ),
                L = (0, b.z)((e) => {
                  C.current !== e && k.current(e),
                    h || x({ type: 0, index: e });
                }),
                C = (0, m.E)(h ? e.selectedIndex : w.selectedIndex),
                N = (0, i.useMemo)(
                  () => ({ registerTab: O, registerPanel: A, change: L }),
                  []
                );
              return (
                (0, d.e)(() => {
                  x({ type: 0, index: null != a ? a : n });
                }, [a]),
                (0, d.e)(() => {
                  if (void 0 === C.current || w.tabs.length <= 0) return;
                  let e = (0, f.z2)(w.tabs, (e) => e.current);
                  e.some((e, t) => w.tabs[t] !== e) &&
                    L(e.indexOf(w.tabs[C.current]));
                }),
                i.createElement(
                  R,
                  null,
                  i.createElement(
                    M.Provider,
                    { value: N },
                    i.createElement(
                      P.Provider,
                      { value: S },
                      S.tabs.length <= 0 &&
                        i.createElement(g, {
                          onFocus: () => {
                            var e, t;
                            for (let n of T.current)
                              if (
                                (null == (e = n.current)
                                  ? void 0
                                  : e.tabIndex) === 0
                              )
                                return null == (t = n.current) || t.focus(), !0;
                            return !1;
                          },
                        }),
                      (0, u.sY)({
                        ourProps: { ref: y },
                        theirProps: c,
                        slot: E,
                        defaultTag: D,
                        name: "Tabs",
                      })
                    )
                  )
                )
              );
            }),
            List: (0, u.yV)(function (e, t) {
              let { orientation: n, selectedIndex: r } = L("Tab.List"),
                o = (0, p.T)(t);
              return (0,
              u.sY)({ ourProps: { ref: o, role: "tablist", "aria-orientation": n }, theirProps: e, slot: { selectedIndex: r }, defaultTag: "div", name: "Tabs.List" });
            }),
            Panels: (0, u.yV)(function (e, t) {
              let { selectedIndex: n } = L("Tab.Panels"),
                r = (0, p.T)(t),
                o = (0, i.useMemo)(() => ({ selectedIndex: n }), [n]);
              return (0,
              u.sY)({ ourProps: { ref: r }, theirProps: e, slot: o, defaultTag: "div", name: "Tabs.Panels" });
            }),
            Panel: (0, u.yV)(function (e, t) {
              var n, r, o, l;
              let c = (0, a.M)(),
                {
                  id: s = `headlessui-tabs-panel-${c}`,
                  tabIndex: f = 0,
                  ...v
                } = e,
                { selectedIndex: m, tabs: h, panels: g } = L("Tab.Panel"),
                b = C("Tab.Panel"),
                w = (0, i.useRef)(null),
                x = (0, p.T)(w, t);
              (0, d.e)(() => b.registerPanel(w), [b, w]);
              let E = k("panels"),
                R = g.indexOf(w);
              -1 === R && (R = E);
              let T = R === m,
                S = (0, i.useMemo)(() => ({ selected: T }), [T]),
                O = {
                  ref: x,
                  id: s,
                  role: "tabpanel",
                  "aria-labelledby":
                    null == (r = null == (n = h[R]) ? void 0 : n.current)
                      ? void 0
                      : r.id,
                  tabIndex: T ? f : -1,
                };
              return T ||
                (null != (o = v.unmount) && !o) ||
                (null != (l = v.static) && l)
                ? (0, u.sY)({
                    ourProps: O,
                    theirProps: v,
                    slot: S,
                    defaultTag: "div",
                    features: N,
                    visible: T,
                    name: "Tabs.Panel",
                  })
                : i.createElement(y._, { as: "span", ...O });
            }),
          }
        );
    },
    68344: function (e, t, n) {
      "use strict";
      n.d(t, {
        z: function () {
          return l;
        },
      });
      var r = n(96682),
        o = n(59410);
      let l = function (e) {
        let t = (0, o.E)(e);
        return r.useCallback((...e) => t.current(...e), [t]);
      };
    },
    65961: function (e, t, n) {
      "use strict";
      n.d(t, {
        M: function () {
          return a;
        },
      });
      var r,
        o = n(96682),
        l = n(64092),
        i = n(25853),
        u = n(2602);
      let a =
        null != (r = o.useId)
          ? r
          : function () {
              let e = (0, i.H)(),
                [t, n] = o.useState(e ? () => u.O.nextId() : null);
              return (
                (0, l.e)(() => {
                  null === t && n(u.O.nextId());
                }, [t]),
                null != t ? "" + t : void 0
              );
            };
    },
    39629: function (e, t, n) {
      "use strict";
      n.d(t, {
        t: function () {
          return l;
        },
      });
      var r = n(96682),
        o = n(64092);
      function l() {
        let e = (0, r.useRef)(!1);
        return (
          (0, o.e)(
            () => (
              (e.current = !0),
              () => {
                e.current = !1;
              }
            ),
            []
          ),
          e
        );
      }
    },
    64092: function (e, t, n) {
      "use strict";
      n.d(t, {
        e: function () {
          return l;
        },
      });
      var r = n(96682),
        o = n(2602);
      let l = (e, t) => {
        o.O.isServer ? (0, r.useEffect)(e, t) : (0, r.useLayoutEffect)(e, t);
      };
    },
    59410: function (e, t, n) {
      "use strict";
      n.d(t, {
        E: function () {
          return l;
        },
      });
      var r = n(96682),
        o = n(64092);
      function l(e) {
        let t = (0, r.useRef)(e);
        return (
          (0, o.e)(() => {
            t.current = e;
          }, [e]),
          t
        );
      }
    },
    25853: function (e, t, n) {
      "use strict";
      n.d(t, {
        H: function () {
          return i;
        },
      });
      var r,
        o = n(96682),
        l = n(2602);
      function i() {
        let e;
        let t =
            ((e = "undefined" == typeof document),
            (0, (r || (r = n.t(o, 2))).useSyncExternalStore)(
              () => () => {},
              () => !1,
              () => !e
            )),
          [i, u] = o.useState(l.O.isHandoffComplete);
        return (
          i && !1 === l.O.isHandoffComplete && u(!1),
          o.useEffect(() => {
            !0 !== i && u(!0);
          }, [i]),
          o.useEffect(() => l.O.handoff(), []),
          !t && i
        );
      }
    },
    39809: function (e, t, n) {
      "use strict";
      n.d(t, {
        T: function () {
          return u;
        },
        h: function () {
          return i;
        },
      });
      var r = n(96682),
        o = n(68344);
      let l = Symbol();
      function i(e, t = !0) {
        return Object.assign(e, { [l]: t });
      }
      function u(...e) {
        let t = (0, r.useRef)(e);
        (0, r.useEffect)(() => {
          t.current = e;
        }, [e]);
        let n = (0, o.z)((e) => {
          for (let n of t.current)
            null != n && ("function" == typeof n ? n(e) : (n.current = e));
        });
        return e.every((e) => null == e || (null == e ? void 0 : e[l]))
          ? void 0
          : n;
      }
    },
    57225: function (e, t, n) {
      "use strict";
      n.d(t, {
        A: function () {
          return l;
        },
        _: function () {
          return i;
        },
      });
      var r,
        o = n(47702),
        l =
          (((r = l || {})[(r.None = 1)] = "None"),
          (r[(r.Focusable = 2)] = "Focusable"),
          (r[(r.Hidden = 4)] = "Hidden"),
          r);
      let i = (0, o.yV)(function (e, t) {
        let { features: n = 1, ...r } = e,
          l = {
            ref: t,
            "aria-hidden": (2 & n) == 2 || void 0,
            style: {
              position: "fixed",
              top: 1,
              left: 1,
              width: 1,
              height: 0,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              borderWidth: "0",
              ...((4 & n) == 4 && (2 & n) != 2 && { display: "none" }),
            },
          };
        return (0,
        o.sY)({ ourProps: l, theirProps: r, slot: {}, defaultTag: "div", name: "Hidden" });
      });
    },
    64746: function (e, t, n) {
      "use strict";
      function r(...e) {
        return Array.from(
          new Set(e.flatMap((e) => ("string" == typeof e ? e.split(" ") : [])))
        )
          .filter(Boolean)
          .join(" ");
      }
      n.d(t, {
        A: function () {
          return r;
        },
      });
    },
    2602: function (e, t, n) {
      "use strict";
      n.d(t, {
        O: function () {
          return u;
        },
      });
      var r = Object.defineProperty,
        o = (e, t, n) =>
          t in e
            ? r(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        l = (e, t, n) => (o(e, "symbol" != typeof t ? t + "" : t, n), n);
      class i {
        constructor() {
          l(this, "current", this.detect()),
            l(this, "handoffState", "pending"),
            l(this, "currentId", 0);
        }
        set(e) {
          this.current !== e &&
            ((this.handoffState = "pending"),
            (this.currentId = 0),
            (this.current = e));
        }
        reset() {
          this.set(this.detect());
        }
        nextId() {
          return ++this.currentId;
        }
        get isServer() {
          return "server" === this.current;
        }
        get isClient() {
          return "client" === this.current;
        }
        detect() {
          return "undefined" == typeof window || "undefined" == typeof document
            ? "server"
            : "client";
        }
        handoff() {
          "pending" === this.handoffState && (this.handoffState = "complete");
        }
        get isHandoffComplete() {
          return "complete" === this.handoffState;
        }
      }
      let u = new i();
    },
    42239: function (e, t, n) {
      "use strict";
      n.d(t, {
        C5: function () {
          return y;
        },
        TO: function () {
          return f;
        },
        fE: function () {
          return d;
        },
        jA: function () {
          return b;
        },
        sP: function () {
          return m;
        },
        tJ: function () {
          return v;
        },
        z2: function () {
          return g;
        },
      });
      var r,
        o,
        l,
        i,
        u,
        a = n(45120),
        c = n(69099);
      let s = [
        "[contentEditable=true]",
        "[tabindex]",
        "a[href]",
        "area[href]",
        "button:not([disabled])",
        "iframe",
        "input:not([disabled])",
        "select:not([disabled])",
        "textarea:not([disabled])",
      ]
        .map((e) => `${e}:not([tabindex='-1'])`)
        .join(",");
      var f =
          (((r = f || {})[(r.First = 1)] = "First"),
          (r[(r.Previous = 2)] = "Previous"),
          (r[(r.Next = 4)] = "Next"),
          (r[(r.Last = 8)] = "Last"),
          (r[(r.WrapAround = 16)] = "WrapAround"),
          (r[(r.NoScroll = 32)] = "NoScroll"),
          r),
        d =
          (((o = d || {})[(o.Error = 0)] = "Error"),
          (o[(o.Overflow = 1)] = "Overflow"),
          (o[(o.Success = 2)] = "Success"),
          (o[(o.Underflow = 3)] = "Underflow"),
          o),
        p =
          (((l = p || {})[(l.Previous = -1)] = "Previous"),
          (l[(l.Next = 1)] = "Next"),
          l),
        v =
          (((i = v || {})[(i.Strict = 0)] = "Strict"),
          (i[(i.Loose = 1)] = "Loose"),
          i);
      function m(e, t = 0) {
        var n;
        return (
          e !== (null == (n = (0, c.r)(e)) ? void 0 : n.body) &&
          (0, a.E)(t, {
            0: () => e.matches(s),
            1() {
              let t = e;
              for (; null !== t; ) {
                if (t.matches(s)) return !0;
                t = t.parentElement;
              }
              return !1;
            },
          })
        );
      }
      var h =
        (((u = h || {})[(u.Keyboard = 0)] = "Keyboard"),
        (u[(u.Mouse = 1)] = "Mouse"),
        u);
      function y(e) {
        null == e || e.focus({ preventScroll: !0 });
      }
      function g(e, t = (e) => e) {
        return e.slice().sort((e, n) => {
          let r = t(e),
            o = t(n);
          if (null === r || null === o) return 0;
          let l = r.compareDocumentPosition(o);
          return l & Node.DOCUMENT_POSITION_FOLLOWING
            ? -1
            : l & Node.DOCUMENT_POSITION_PRECEDING
            ? 1
            : 0;
        });
      }
      function b(
        e,
        t,
        { sorted: n = !0, relativeTo: r = null, skipElements: o = [] } = {}
      ) {
        var l, i, u;
        let a = Array.isArray(e)
            ? e.length > 0
              ? e[0].ownerDocument
              : document
            : e.ownerDocument,
          c = Array.isArray(e)
            ? n
              ? g(e)
              : e
            : (function (e = document.body) {
                return null == e
                  ? []
                  : Array.from(e.querySelectorAll(s)).sort((e, t) =>
                      Math.sign(
                        (e.tabIndex || Number.MAX_SAFE_INTEGER) -
                          (t.tabIndex || Number.MAX_SAFE_INTEGER)
                      )
                    );
              })(e);
        o.length > 0 && c.length > 1 && (c = c.filter((e) => !o.includes(e))),
          (r = null != r ? r : a.activeElement);
        let f = (() => {
            if (5 & t) return 1;
            if (10 & t) return -1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          d = (() => {
            if (1 & t) return 0;
            if (2 & t) return Math.max(0, c.indexOf(r)) - 1;
            if (4 & t) return Math.max(0, c.indexOf(r)) + 1;
            if (8 & t) return c.length - 1;
            throw Error(
              "Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last"
            );
          })(),
          p = 32 & t ? { preventScroll: !0 } : {},
          v = 0,
          m = c.length,
          h;
        do {
          if (v >= m || v + m <= 0) return 0;
          let e = d + v;
          if (16 & t) e = (e + m) % m;
          else {
            if (e < 0) return 3;
            if (e >= m) return 1;
          }
          null == (h = c[e]) || h.focus(p), (v += f);
        } while (h !== a.activeElement);
        return (
          6 & t &&
            null !=
              (u =
                null == (i = null == (l = h) ? void 0 : l.matches)
                  ? void 0
                  : i.call(l, "textarea,input")) &&
            u &&
            h.select(),
          2
        );
      }
      "undefined" != typeof window &&
        "undefined" != typeof document &&
        (document.addEventListener(
          "keydown",
          (e) => {
            e.metaKey ||
              e.altKey ||
              e.ctrlKey ||
              (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ),
        document.addEventListener(
          "click",
          (e) => {
            1 === e.detail
              ? delete document.documentElement.dataset.headlessuiFocusVisible
              : 0 === e.detail &&
                (document.documentElement.dataset.headlessuiFocusVisible = "");
          },
          !0
        ));
    },
    45120: function (e, t, n) {
      "use strict";
      function r(e, t, ...n) {
        if (e in t) {
          let r = t[e];
          return "function" == typeof r ? r(...n) : r;
        }
        let o = Error(
          `Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(
            t
          )
            .map((e) => `"${e}"`)
            .join(", ")}.`
        );
        throw (Error.captureStackTrace && Error.captureStackTrace(o, r), o);
      }
      n.d(t, {
        E: function () {
          return r;
        },
      });
    },
    76913: function (e, t, n) {
      "use strict";
      function r(e) {
        "function" == typeof queueMicrotask
          ? queueMicrotask(e)
          : Promise.resolve()
              .then(e)
              .catch((e) =>
                setTimeout(() => {
                  throw e;
                })
              );
      }
      n.d(t, {
        Y: function () {
          return r;
        },
      });
    },
    69099: function (e, t, n) {
      "use strict";
      n.d(t, {
        r: function () {
          return o;
        },
      });
      var r = n(2602);
      function o(e) {
        return r.O.isServer
          ? null
          : e instanceof Node
          ? e.ownerDocument
          : null != e &&
            e.hasOwnProperty("current") &&
            e.current instanceof Node
          ? e.current.ownerDocument
          : document;
      }
    },
    47702: function (e, t, n) {
      "use strict";
      n.d(t, {
        AN: function () {
          return a;
        },
        l4: function () {
          return c;
        },
        sY: function () {
          return s;
        },
        yV: function () {
          return p;
        },
      });
      var r,
        o,
        l = n(96682),
        i = n(64746),
        u = n(45120),
        a =
          (((r = a || {})[(r.None = 0)] = "None"),
          (r[(r.RenderStrategy = 1)] = "RenderStrategy"),
          (r[(r.Static = 2)] = "Static"),
          r),
        c =
          (((o = c || {})[(o.Unmount = 0)] = "Unmount"),
          (o[(o.Hidden = 1)] = "Hidden"),
          o);
      function s({
        ourProps: e,
        theirProps: t,
        slot: n,
        defaultTag: r,
        features: o,
        visible: l = !0,
        name: i,
      }) {
        let a = d(t, e);
        if (l) return f(a, n, r, i);
        let c = null != o ? o : 0;
        if (2 & c) {
          let { static: e = !1, ...t } = a;
          if (e) return f(t, n, r, i);
        }
        if (1 & c) {
          let { unmount: e = !0, ...t } = a;
          return (0, u.E)(e ? 0 : 1, {
            0: () => null,
            1: () =>
              f({ ...t, hidden: !0, style: { display: "none" } }, n, r, i),
          });
        }
        return f(a, n, r, i);
      }
      function f(e, t = {}, n, r) {
        let {
            as: o = n,
            children: u,
            refName: a = "ref",
            ...c
          } = m(e, ["unmount", "static"]),
          s = void 0 !== e.ref ? { [a]: e.ref } : {},
          f = "function" == typeof u ? u(t) : u;
        "className" in c &&
          c.className &&
          "function" == typeof c.className &&
          (c.className = c.className(t));
        let p = {};
        if (t) {
          let e = !1,
            n = [];
          for (let [r, o] of Object.entries(t))
            "boolean" == typeof o && (e = !0), !0 === o && n.push(r);
          e && (p["data-headlessui-state"] = n.join(" "));
        }
        if (o === l.Fragment && Object.keys(v(c)).length > 0) {
          if (!(0, l.isValidElement)(f) || (Array.isArray(f) && f.length > 1))
            throw Error(
              [
                'Passing props on "Fragment"!',
                "",
                `The current component <${r} /> is rendering a "Fragment".`,
                "However we need to passthrough the following props:",
                Object.keys(c).map((e) => `  - ${e}`).join(`
`),
                "",
                "You can apply a few solutions:",
                [
                  'Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',
                  "Render a single element as the child so that we can forward the props onto that element.",
                ].map((e) => `  - ${e}`).join(`
`),
              ].join(`
`)
            );
          let e = f.props,
            t =
              "function" == typeof (null == e ? void 0 : e.className)
                ? (...t) =>
                    (0, i.A)(
                      null == e ? void 0 : e.className(...t),
                      c.className
                    )
                : (0, i.A)(null == e ? void 0 : e.className, c.className);
          return (0, l.cloneElement)(
            f,
            Object.assign(
              {},
              d(f.props, v(m(c, ["ref"]))),
              p,
              s,
              (function (...e) {
                return {
                  ref: e.every((e) => null == e)
                    ? void 0
                    : (t) => {
                        for (let n of e)
                          null != n &&
                            ("function" == typeof n ? n(t) : (n.current = t));
                      },
                };
              })(f.ref, s.ref),
              t ? { className: t } : {}
            )
          );
        }
        return (0, l.createElement)(
          o,
          Object.assign(
            {},
            m(c, ["ref"]),
            o !== l.Fragment && s,
            o !== l.Fragment && p
          ),
          f
        );
      }
      function d(...e) {
        if (0 === e.length) return {};
        if (1 === e.length) return e[0];
        let t = {},
          n = {};
        for (let r of e)
          for (let e in r)
            e.startsWith("on") && "function" == typeof r[e]
              ? (null != n[e] || (n[e] = []), n[e].push(r[e]))
              : (t[e] = r[e]);
        if (t.disabled || t["aria-disabled"])
          return Object.assign(
            t,
            Object.fromEntries(Object.keys(n).map((e) => [e, void 0]))
          );
        for (let e in n)
          Object.assign(t, {
            [e](t, ...r) {
              for (let o of n[e]) {
                if (
                  (t instanceof Event ||
                    (null == t ? void 0 : t.nativeEvent) instanceof Event) &&
                  t.defaultPrevented
                )
                  return;
                o(t, ...r);
              }
            },
          });
        return t;
      }
      function p(e) {
        var t;
        return Object.assign((0, l.forwardRef)(e), {
          displayName: null != (t = e.displayName) ? t : e.name,
        });
      }
      function v(e) {
        let t = Object.assign({}, e);
        for (let e in t) void 0 === t[e] && delete t[e];
        return t;
      }
      function m(e, t = []) {
        let n = Object.assign({}, e);
        for (let e of t) e in n && delete n[e];
        return n;
      }
    },
    73918: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return l;
        },
        cx: function () {
          return o;
        },
      });
      let r = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = function () {
          for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) &&
              (t = (function e(t) {
                var n,
                  r,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (n = 0; n < t.length; n++)
                      t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                  else for (n in t) t[n] && (o && (o += " "), (o += n));
                }
                return o;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        },
        l = (e, t) => (n) => {
          var l;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className
            );
          let { variants: i, defaultVariants: u } = t,
            a = Object.keys(i).map((e) => {
              let t = null == n ? void 0 : n[e],
                o = null == u ? void 0 : u[e];
              if (null === t) return null;
              let l = r(t) || r(o);
              return i[e][l];
            }),
            c =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, r] = t;
                return void 0 === r || (e[n] = r), e;
              }, {});
          return o(
            e,
            a,
            null == t
              ? void 0
              : null === (l = t.compoundVariants) || void 0 === l
              ? void 0
              : l.reduce((e, t) => {
                  let { class: n, className: r, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                      ? n.includes({ ...u, ...c }[t])
                      : { ...u, ...c }[t] === n;
                  })
                    ? [...e, n, r]
                    : e;
                }, []),
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className
          );
        };
    },
  },
]);
