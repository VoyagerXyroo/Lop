"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4874],
  {
    63925: function (e, t, r) {
      let n, o;
      r.d(t, {
        V: function () {
          return eb;
        },
      });
      var a,
        i,
        l,
        s,
        u,
        c,
        d = r(96682),
        f = r.t(d, 2),
        p = r(45120),
        m = r(47702),
        v = r(39809),
        g = r(85758),
        h = r(65961),
        b = r(25853),
        E = r(57225),
        y = r(42239),
        w = r(68344),
        T = r(59410);
      function C(e, t, r) {
        let n = (0, T.E)(t);
        (0, d.useEffect)(() => {
          function t(e) {
            n.current(e);
          }
          return (
            window.addEventListener(e, t, r),
            () => window.removeEventListener(e, t, r)
          );
        }, [e, r]);
      }
      var x =
          (((a = x || {})[(a.Forwards = 0)] = "Forwards"),
          (a[(a.Backwards = 1)] = "Backwards"),
          a),
        L = r(39629),
        P = r(69099);
      function k(...e) {
        return (0, d.useMemo)(() => (0, P.r)(...e), [...e]);
      }
      function M(e, t, r, n) {
        let o = (0, T.E)(r);
        (0, d.useEffect)(() => {
          function r(e) {
            o.current(e);
          }
          return (
            (e = null != e ? e : window).addEventListener(t, r, n),
            () => e.removeEventListener(t, r, n)
          );
        }, [e, t, n]);
      }
      var S = r(76913);
      function F(e, t) {
        let r = (0, d.useRef)([]),
          n = (0, w.z)(e);
        (0, d.useEffect)(() => {
          let e = [...r.current];
          for (let [o, a] of t.entries())
            if (r.current[o] !== a) {
              let o = n(t, e);
              return (r.current = t), o;
            }
        }, [n, ...t]);
      }
      var O = r(50814);
      function A(e) {
        let t = (0, w.z)(e),
          r = (0, d.useRef)(!1);
        (0, d.useEffect)(
          () => (
            (r.current = !1),
            () => {
              (r.current = !0),
                (0, S.Y)(() => {
                  r.current && t();
                });
            }
          ),
          [t]
        );
      }
      function R(e) {
        if (!e) return new Set();
        if ("function" == typeof e) return new Set(e());
        let t = new Set();
        for (let r of e.current)
          r.current instanceof HTMLElement && t.add(r.current);
        return t;
      }
      var D =
        (((i = D || {})[(i.None = 1)] = "None"),
        (i[(i.InitialFocus = 2)] = "InitialFocus"),
        (i[(i.TabLock = 4)] = "TabLock"),
        (i[(i.FocusLock = 8)] = "FocusLock"),
        (i[(i.RestoreFocus = 16)] = "RestoreFocus"),
        (i[(i.All = 30)] = "All"),
        i);
      let N = Object.assign(
          (0, m.yV)(function (e, t) {
            let r,
              n = (0, d.useRef)(null),
              o = (0, v.T)(n, t),
              { initialFocus: a, containers: i, features: l = 30, ...s } = e;
            (0, b.H)() || (l = 1);
            let u = k(n);
            !(function ({ ownerDocument: e }, t) {
              let r = (function (e = !0) {
                let t = (0, d.useRef)(H.slice());
                return (
                  F(
                    ([e], [r]) => {
                      !0 === r &&
                        !1 === e &&
                        (0, S.Y)(() => {
                          t.current.splice(0);
                        }),
                        !1 === r && !0 === e && (t.current = H.slice());
                    },
                    [e, H, t]
                  ),
                  (0, w.z)(() => {
                    var e;
                    return null !=
                      (e = t.current.find((e) => null != e && e.isConnected))
                      ? e
                      : null;
                  })
                );
              })(t);
              F(() => {
                t ||
                  ((null == e ? void 0 : e.activeElement) ===
                    (null == e ? void 0 : e.body) &&
                    (0, y.C5)(r()));
              }, [t]),
                A(() => {
                  t && (0, y.C5)(r());
                });
            })({ ownerDocument: u }, !!(16 & l));
            let c = (function (
              { ownerDocument: e, container: t, initialFocus: r },
              n
            ) {
              let o = (0, d.useRef)(null),
                a = (0, L.t)();
              return (
                F(() => {
                  if (!n) return;
                  let i = t.current;
                  i &&
                    (0, S.Y)(() => {
                      if (!a.current) return;
                      let t = null == e ? void 0 : e.activeElement;
                      if (null != r && r.current) {
                        if ((null == r ? void 0 : r.current) === t) {
                          o.current = t;
                          return;
                        }
                      } else if (i.contains(t)) {
                        o.current = t;
                        return;
                      }
                      null != r && r.current
                        ? (0, y.C5)(r.current)
                        : (0, y.jA)(i, y.TO.First) === y.fE.Error &&
                          console.warn(
                            "There are no focusable elements inside the <FocusTrap />"
                          ),
                        (o.current = null == e ? void 0 : e.activeElement);
                    });
                }, [n]),
                o
              );
            })({ ownerDocument: u, container: n, initialFocus: a }, !!(2 & l));
            !(function (
              {
                ownerDocument: e,
                container: t,
                containers: r,
                previousActiveElement: n,
              },
              o
            ) {
              let a = (0, L.t)();
              M(
                null == e ? void 0 : e.defaultView,
                "focus",
                (e) => {
                  if (!o || !a.current) return;
                  let i = R(r);
                  t.current instanceof HTMLElement && i.add(t.current);
                  let l = n.current;
                  if (!l) return;
                  let s = e.target;
                  s && s instanceof HTMLElement
                    ? z(i, s)
                      ? ((n.current = s), (0, y.C5)(s))
                      : (e.preventDefault(), e.stopPropagation(), (0, y.C5)(l))
                    : (0, y.C5)(n.current);
                },
                !0
              );
            })(
              {
                ownerDocument: u,
                container: n,
                containers: i,
                previousActiveElement: c,
              },
              !!(8 & l)
            );
            let f =
                ((r = (0, d.useRef)(0)),
                C(
                  "keydown",
                  (e) => {
                    "Tab" === e.key && (r.current = e.shiftKey ? 1 : 0);
                  },
                  !0
                ),
                r),
              g = (0, w.z)((e) => {
                let t = n.current;
                t &&
                  (0, p.E)(f.current, {
                    [x.Forwards]: () => {
                      (0, y.jA)(t, y.TO.First, {
                        skipElements: [e.relatedTarget],
                      });
                    },
                    [x.Backwards]: () => {
                      (0, y.jA)(t, y.TO.Last, {
                        skipElements: [e.relatedTarget],
                      });
                    },
                  });
              }),
              h = (0, O.G)(),
              T = (0, d.useRef)(!1);
            return d.createElement(
              d.Fragment,
              null,
              !!(4 & l) &&
                d.createElement(E._, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: g,
                  features: E.A.Focusable,
                }),
              (0, m.sY)({
                ourProps: {
                  ref: o,
                  onKeyDown(e) {
                    "Tab" == e.key &&
                      ((T.current = !0),
                      h.requestAnimationFrame(() => {
                        T.current = !1;
                      }));
                  },
                  onBlur(e) {
                    let t = R(i);
                    n.current instanceof HTMLElement && t.add(n.current);
                    let r = e.relatedTarget;
                    r instanceof HTMLElement &&
                      "true" !== r.dataset.headlessuiFocusGuard &&
                      (z(t, r) ||
                        (T.current
                          ? (0, y.jA)(
                              n.current,
                              (0, p.E)(f.current, {
                                [x.Forwards]: () => y.TO.Next,
                                [x.Backwards]: () => y.TO.Previous,
                              }) | y.TO.WrapAround,
                              { relativeTo: e.target }
                            )
                          : e.target instanceof HTMLElement &&
                            (0, y.C5)(e.target)));
                  },
                },
                theirProps: s,
                defaultTag: "div",
                name: "FocusTrap",
              }),
              !!(4 & l) &&
                d.createElement(E._, {
                  as: "button",
                  type: "button",
                  "data-headlessui-focus-guard": !0,
                  onFocus: g,
                  features: E.A.Focusable,
                })
            );
          }),
          { features: D }
        ),
        H = [];
      function z(e, t) {
        for (let r of e) if (r.contains(t)) return !0;
        return !1;
      }
      !(function (e) {
        function t() {
          "loading" !== document.readyState &&
            (e(), document.removeEventListener("DOMContentLoaded", t));
        }
        "undefined" != typeof window &&
          "undefined" != typeof document &&
          (document.addEventListener("DOMContentLoaded", t), t());
      })(() => {
        function e(e) {
          e.target instanceof HTMLElement &&
            e.target !== document.body &&
            H[0] !== e.target &&
            (H.unshift(e.target),
            (H = H.filter((e) => null != e && e.isConnected)).splice(10));
        }
        window.addEventListener("click", e, { capture: !0 }),
          window.addEventListener("mousedown", e, { capture: !0 }),
          window.addEventListener("focus", e, { capture: !0 }),
          document.body.addEventListener("click", e, { capture: !0 }),
          document.body.addEventListener("mousedown", e, { capture: !0 }),
          document.body.addEventListener("focus", e, { capture: !0 });
      });
      var $ = r(94495),
        I = r(64092);
      let j = (0, d.createContext)(!1);
      function Y(e) {
        return d.createElement(j.Provider, { value: e.force }, e.children);
      }
      var V = r(2602);
      let B = d.Fragment,
        _ = d.Fragment,
        Z = (0, d.createContext)(null),
        q = (0, d.createContext)(null),
        U = Object.assign(
          (0, m.yV)(function (e, t) {
            let r = (0, d.useRef)(null),
              n = (0, v.T)(
                (0, v.h)((e) => {
                  r.current = e;
                }),
                t
              ),
              o = k(r),
              a = (function (e) {
                let t = (0, d.useContext)(j),
                  r = (0, d.useContext)(Z),
                  n = k(e),
                  [o, a] = (0, d.useState)(() => {
                    if ((!t && null !== r) || V.O.isServer) return null;
                    let e =
                      null == n
                        ? void 0
                        : n.getElementById("headlessui-portal-root");
                    if (e) return e;
                    if (null === n) return null;
                    let o = n.createElement("div");
                    return (
                      o.setAttribute("id", "headlessui-portal-root"),
                      n.body.appendChild(o)
                    );
                  });
                return (
                  (0, d.useEffect)(() => {
                    null !== o &&
                      ((null != n && n.body.contains(o)) ||
                        null == n ||
                        n.body.appendChild(o));
                  }, [o, n]),
                  (0, d.useEffect)(() => {
                    t || (null !== r && a(r.current));
                  }, [r, a, t]),
                  o
                );
              })(r),
              [i] = (0, d.useState)(() => {
                var e;
                return V.O.isServer
                  ? null
                  : null != (e = null == o ? void 0 : o.createElement("div"))
                  ? e
                  : null;
              }),
              l = (0, d.useContext)(q),
              s = (0, b.H)();
            return (
              (0, I.e)(() => {
                !a ||
                  !i ||
                  a.contains(i) ||
                  (i.setAttribute("data-headlessui-portal", ""),
                  a.appendChild(i));
              }, [a, i]),
              (0, I.e)(() => {
                if (i && l) return l.register(i);
              }, [l, i]),
              A(() => {
                var e;
                a &&
                  i &&
                  (i instanceof Node && a.contains(i) && a.removeChild(i),
                  a.childNodes.length <= 0 &&
                    (null == (e = a.parentElement) || e.removeChild(a)));
              }),
              s && a && i
                ? (0, $.createPortal)(
                    (0, m.sY)({
                      ourProps: { ref: n },
                      theirProps: e,
                      defaultTag: B,
                      name: "Portal",
                    }),
                    i
                  )
                : null
            );
          }),
          {
            Group: (0, m.yV)(function (e, t) {
              let { target: r, ...n } = e,
                o = { ref: (0, v.T)(t) };
              return d.createElement(
                Z.Provider,
                { value: r },
                (0, m.sY)({
                  ourProps: o,
                  theirProps: n,
                  defaultTag: _,
                  name: "Popover.Group",
                })
              );
            }),
          }
        ),
        W = (0, d.createContext)(null),
        G = Object.assign(
          (0, m.yV)(function (e, t) {
            let r = (0, h.M)(),
              { id: n = `headlessui-description-${r}`, ...o } = e,
              a = (function e() {
                let t = (0, d.useContext)(W);
                if (null === t) {
                  let t = Error(
                    "You used a <Description /> component, but it is not inside a relevant parent."
                  );
                  throw (
                    (Error.captureStackTrace && Error.captureStackTrace(t, e),
                    t)
                  );
                }
                return t;
              })(),
              i = (0, v.T)(t);
            (0, I.e)(() => a.register(n), [n, a.register]);
            let l = { ref: i, ...a.props, id: n };
            return (0,
            m.sY)({ ourProps: l, theirProps: o, slot: a.slot || {}, defaultTag: "p", name: a.name || "Description" });
          }),
          {}
        );
      var J = r(97558);
      let K = (0, d.createContext)(() => {});
      K.displayName = "StackContext";
      var Q =
        (((l = Q || {})[(l.Add = 0)] = "Add"),
        (l[(l.Remove = 1)] = "Remove"),
        l);
      function X({
        children: e,
        onUpdate: t,
        type: r,
        element: n,
        enabled: o,
      }) {
        let a = (0, d.useContext)(K),
          i = (0, w.z)((...e) => {
            null == t || t(...e), a(...e);
          });
        return (
          (0, I.e)(() => {
            let e = void 0 === o || !0 === o;
            return (
              e && i(0, r, n),
              () => {
                e && i(1, r, n);
              }
            );
          }, [i, r, n, o]),
          d.createElement(K.Provider, { value: i }, e)
        );
      }
      function ee(e, t, r) {
        let n = (0, T.E)(t);
        (0, d.useEffect)(() => {
          function t(e) {
            n.current(e);
          }
          return (
            document.addEventListener(e, t, r),
            () => document.removeEventListener(e, t, r)
          );
        }, [e, r]);
      }
      let {
        useState: et,
        useEffect: er,
        useLayoutEffect: en,
        useDebugValue: eo,
      } = f;
      "undefined" != typeof window &&
        void 0 !== window.document &&
        window.document.createElement;
      let ea = f.useSyncExternalStore;
      var ei = r(2700);
      let el =
        ((s = {
          PUSH(e, t) {
            var r;
            let n =
              null != (r = this.get(e))
                ? r
                : { doc: e, count: 0, d: (0, ei.k)(), meta: new Set() };
            return n.count++, n.meta.add(t), this.set(e, n), this;
          },
          POP(e, t) {
            let r = this.get(e);
            return r && (r.count--, r.meta.delete(t)), this;
          },
          SCROLL_PREVENT({ doc: e, d: t, meta: r }) {
            let n, o;
            let a = {
                doc: e,
                d: t,
                meta: (function (e) {
                  let t = {};
                  for (let r of e) Object.assign(t, r(t));
                  return t;
                })(r),
              },
              i = [
                /iPhone/gi.test(window.navigator.platform) ||
                (/Mac/gi.test(window.navigator.platform) &&
                  window.navigator.maxTouchPoints > 0)
                  ? {
                      before() {
                        n = window.pageYOffset;
                      },
                      after({ doc: e, d: t, meta: r }) {
                        function o(e) {
                          return r.containers
                            .flatMap((e) => e())
                            .some((t) => t.contains(e));
                        }
                        t.microTask(() => {
                          if (
                            "auto" !==
                            window.getComputedStyle(e.documentElement)
                              .scrollBehavior
                          ) {
                            let r = (0, ei.k)();
                            r.style(
                              e.documentElement,
                              "scroll-behavior",
                              "auto"
                            ),
                              t.add(() => t.microTask(() => r.dispose()));
                          }
                          t.style(e.body, "marginTop", `-${n}px`),
                            window.scrollTo(0, 0);
                          let r = null;
                          t.addEventListener(
                            e,
                            "click",
                            (t) => {
                              if (t.target instanceof HTMLElement)
                                try {
                                  let n = t.target.closest("a");
                                  if (!n) return;
                                  let { hash: a } = new URL(n.href),
                                    i = e.querySelector(a);
                                  i && !o(i) && (r = i);
                                } catch {}
                            },
                            !0
                          ),
                            t.addEventListener(
                              e,
                              "touchmove",
                              (e) => {
                                e.target instanceof HTMLElement &&
                                  !o(e.target) &&
                                  e.preventDefault();
                              },
                              { passive: !1 }
                            ),
                            t.add(() => {
                              window.scrollTo(0, window.pageYOffset + n),
                                r &&
                                  r.isConnected &&
                                  (r.scrollIntoView({ block: "nearest" }),
                                  (r = null));
                            });
                        });
                      },
                    }
                  : {},
                {
                  before({ doc: e }) {
                    var t;
                    let r = e.documentElement;
                    o =
                      (null != (t = e.defaultView) ? t : window).innerWidth -
                      r.clientWidth;
                  },
                  after({ doc: e, d: t }) {
                    let r = e.documentElement,
                      n = r.clientWidth - r.offsetWidth,
                      a = o - n;
                    t.style(r, "paddingRight", `${a}px`);
                  },
                },
                {
                  before({ doc: e, d: t }) {
                    t.style(e.documentElement, "overflow", "hidden");
                  },
                },
              ];
            i.forEach(({ before: e }) => (null == e ? void 0 : e(a))),
              i.forEach(({ after: e }) => (null == e ? void 0 : e(a)));
          },
          SCROLL_ALLOW({ d: e }) {
            e.dispose();
          },
          TEARDOWN({ doc: e }) {
            this.delete(e);
          },
        }),
        (n = new Map()),
        (o = new Set()),
        {
          getSnapshot: () => n,
          subscribe: (e) => (o.add(e), () => o.delete(e)),
          dispatch(e, ...t) {
            let r = s[e].call(n, ...t);
            r && ((n = r), o.forEach((e) => e()));
          },
        });
      el.subscribe(() => {
        let e = el.getSnapshot(),
          t = new Map();
        for (let [r] of e) t.set(r, r.documentElement.style.overflow);
        for (let r of e.values()) {
          let e = "hidden" === t.get(r.doc),
            n = 0 !== r.count;
          ((n && !e) || (!n && e)) &&
            el.dispatch(r.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", r),
            0 === r.count && el.dispatch("TEARDOWN", r);
        }
      });
      let es = new Map(),
        eu = new Map();
      function ec(e, t = !0) {
        (0, I.e)(() => {
          var r;
          if (!t) return;
          let n = "function" == typeof e ? e() : e.current;
          if (!n) return;
          let o = null != (r = eu.get(n)) ? r : 0;
          return (
            eu.set(n, o + 1),
            0 !== o ||
              (es.set(n, {
                "aria-hidden": n.getAttribute("aria-hidden"),
                inert: n.inert,
              }),
              n.setAttribute("aria-hidden", "true"),
              (n.inert = !0)),
            function () {
              var e;
              if (!n) return;
              let t = null != (e = eu.get(n)) ? e : 1;
              if ((1 === t ? eu.delete(n) : eu.set(n, t - 1), 1 !== t)) return;
              let r = es.get(n);
              r &&
                (null === r["aria-hidden"]
                  ? n.removeAttribute("aria-hidden")
                  : n.setAttribute("aria-hidden", r["aria-hidden"]),
                (n.inert = r.inert),
                es.delete(n));
            }
          );
        }, [e, t]);
      }
      var ed =
          (((u = ed || {})[(u.Open = 0)] = "Open"),
          (u[(u.Closed = 1)] = "Closed"),
          u),
        ef = (((c = ef || {})[(c.SetTitleId = 0)] = "SetTitleId"), c);
      let ep = {
          0: (e, t) => (e.titleId === t.id ? e : { ...e, titleId: t.id }),
        },
        em = (0, d.createContext)(null);
      function ev(e) {
        let t = (0, d.useContext)(em);
        if (null === t) {
          let t = Error(`<${e} /> is missing a parent <Dialog /> component.`);
          throw (Error.captureStackTrace && Error.captureStackTrace(t, ev), t);
        }
        return t;
      }
      function eg(e, t) {
        return (0, p.E)(t.type, ep, e, t);
      }
      em.displayName = "DialogContext";
      let eh = m.AN.RenderStrategy | m.AN.Static,
        eb = Object.assign(
          (0, m.yV)(function (e, t) {
            var r;
            let n, o, a, i, l;
            let s = (0, h.M)(),
              {
                id: u = `headlessui-dialog-${s}`,
                open: c,
                onClose: f,
                initialFocus: T,
                __demoMode: x = !1,
                ...L
              } = e,
              [P, S] = (0, d.useState)(0),
              F = (0, J.oJ)();
            void 0 === c && null !== F && (c = (F & J.ZM.Open) === J.ZM.Open);
            let O = (0, d.useRef)(null),
              A = (0, v.T)(O, t),
              R = k(O),
              D = e.hasOwnProperty("open") || null !== F,
              H = e.hasOwnProperty("onClose");
            if (!D && !H)
              throw Error(
                "You have to provide an `open` and an `onClose` prop to the `Dialog` component."
              );
            if (!D)
              throw Error(
                "You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop."
              );
            if (!H)
              throw Error(
                "You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop."
              );
            if ("boolean" != typeof c)
              throw Error(
                `You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${c}`
              );
            if ("function" != typeof f)
              throw Error(
                `You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${f}`
              );
            let z = c ? 0 : 1,
              [$, j] = (0, d.useReducer)(eg, {
                titleId: null,
                descriptionId: null,
                panelRef: (0, d.createRef)(),
              }),
              V = (0, w.z)(() => f(!1)),
              B = (0, w.z)((e) => j({ type: 0, id: e })),
              _ = !!(0, b.H)() && !x && 0 === z,
              Z = P > 1,
              G = null !== (0, d.useContext)(em),
              [K, et] =
                ((n = (0, d.useContext)(q)),
                (o = (0, d.useRef)([])),
                (a = (0, w.z)(
                  (e) => (o.current.push(e), n && n.register(e), () => i(e))
                )),
                (i = (0, w.z)((e) => {
                  let t = o.current.indexOf(e);
                  -1 !== t && o.current.splice(t, 1), n && n.unregister(e);
                })),
                (l = (0, d.useMemo)(
                  () => ({ register: a, unregister: i, portals: o }),
                  [a, i, o]
                )),
                [
                  o,
                  (0, d.useMemo)(
                    () =>
                      function ({ children: e }) {
                        return d.createElement(q.Provider, { value: l }, e);
                      },
                    [l]
                  ),
                ]),
              {
                resolveContainers: er,
                mainTreeNodeRef: en,
                MainTreeNode: eo,
              } = (function ({
                defaultContainers: e = [],
                portals: t,
                mainTreeNodeRef: r,
              } = {}) {
                var n;
                let o = (0, d.useRef)(
                    null != (n = null == r ? void 0 : r.current) ? n : null
                  ),
                  a = k(o),
                  i = (0, w.z)(() => {
                    var r;
                    let n = [];
                    for (let t of e)
                      null !== t &&
                        (t instanceof HTMLElement
                          ? n.push(t)
                          : "current" in t &&
                            t.current instanceof HTMLElement &&
                            n.push(t.current));
                    if (null != t && t.current)
                      for (let e of t.current) n.push(e);
                    for (let e of null !=
                    (r =
                      null == a
                        ? void 0
                        : a.querySelectorAll("html > *, body > *"))
                      ? r
                      : [])
                      e !== document.body &&
                        e !== document.head &&
                        e instanceof HTMLElement &&
                        "headlessui-portal-root" !== e.id &&
                        (e.contains(o.current) ||
                          n.some((t) => e.contains(t)) ||
                          n.push(e));
                    return n;
                  });
                return {
                  resolveContainers: i,
                  contains: (0, w.z)((e) => i().some((t) => t.contains(e))),
                  mainTreeNodeRef: o,
                  MainTreeNode: (0, d.useMemo)(
                    () =>
                      function () {
                        return null != r
                          ? null
                          : d.createElement(E._, {
                              features: E.A.Hidden,
                              ref: o,
                            });
                      },
                    [o, r]
                  ),
                };
              })({
                portals: K,
                defaultContainers: [
                  null != (r = $.panelRef.current) ? r : O.current,
                ],
              }),
              ei = null !== F && (F & J.ZM.Closing) === J.ZM.Closing,
              es = !G && !ei && _;
            ec(
              (0, d.useCallback)(() => {
                var e, t;
                return null !=
                  (t = Array.from(
                    null !=
                      (e = null == R ? void 0 : R.querySelectorAll("body > *"))
                      ? e
                      : []
                  ).find(
                    (e) =>
                      "headlessui-portal-root" !== e.id &&
                      e.contains(en.current) &&
                      e instanceof HTMLElement
                  ))
                  ? t
                  : null;
              }, [en]),
              es
            );
            let eu = !!Z || _;
            ec(
              (0, d.useCallback)(() => {
                var e, t;
                return null !=
                  (t = Array.from(
                    null !=
                      (e =
                        null == R
                          ? void 0
                          : R.querySelectorAll("[data-headlessui-portal]"))
                      ? e
                      : []
                  ).find(
                    (e) => e.contains(en.current) && e instanceof HTMLElement
                  ))
                  ? t
                  : null;
              }, [en]),
              eu
            ),
              (function (e, t, r = !0) {
                let n = (0, d.useRef)(!1);
                function o(r, o) {
                  if (!n.current || r.defaultPrevented) return;
                  let a = o(r);
                  if (
                    null !== a &&
                    a.getRootNode().contains(a) &&
                    a.isConnected
                  ) {
                    for (let t of (function e(t) {
                      return "function" == typeof t
                        ? e(t())
                        : Array.isArray(t) || t instanceof Set
                        ? t
                        : [t];
                    })(e)) {
                      if (null === t) continue;
                      let e = t instanceof HTMLElement ? t : t.current;
                      if (
                        (null != e && e.contains(a)) ||
                        (r.composed && r.composedPath().includes(e))
                      )
                        return;
                    }
                    return (
                      (0, y.sP)(a, y.tJ.Loose) ||
                        -1 === a.tabIndex ||
                        r.preventDefault(),
                      t(r, a)
                    );
                  }
                }
                (0, d.useEffect)(() => {
                  requestAnimationFrame(() => {
                    n.current = r;
                  });
                }, [r]);
                let a = (0, d.useRef)(null);
                ee(
                  "pointerdown",
                  (e) => {
                    var t, r;
                    n.current &&
                      (a.current =
                        (null ==
                        (r = null == (t = e.composedPath) ? void 0 : t.call(e))
                          ? void 0
                          : r[0]) || e.target);
                  },
                  !0
                ),
                  ee(
                    "mousedown",
                    (e) => {
                      var t, r;
                      n.current &&
                        (a.current =
                          (null ==
                          (r =
                            null == (t = e.composedPath) ? void 0 : t.call(e))
                            ? void 0
                            : r[0]) || e.target);
                    },
                    !0
                  ),
                  ee(
                    "click",
                    (e) => {
                      a.current && (o(e, () => a.current), (a.current = null));
                    },
                    !0
                  ),
                  ee(
                    "touchend",
                    (e) =>
                      o(e, () =>
                        e.target instanceof HTMLElement ? e.target : null
                      ),
                    !0
                  ),
                  C(
                    "blur",
                    (e) =>
                      o(e, () =>
                        window.document.activeElement instanceof
                        HTMLIFrameElement
                          ? window.document.activeElement
                          : null
                      ),
                    !0
                  );
              })(er, V, !(!_ || Z));
            let ed = !(Z || 0 !== z);
            M(null == R ? void 0 : R.defaultView, "keydown", (e) => {
              ed &&
                (e.defaultPrevented ||
                  (e.key === g.R.Escape &&
                    (e.preventDefault(), e.stopPropagation(), V())));
            }),
              (function (e, t, r = () => [document.body]) {
                var n;
                let o, a;
                (n = (e) => {
                  var t;
                  return {
                    containers: [...(null != (t = e.containers) ? t : []), r],
                  };
                }),
                  (o = ea(el.subscribe, el.getSnapshot, el.getSnapshot)),
                  (a = e ? o.get(e) : void 0) && a.count,
                  (0, I.e)(() => {
                    if (!(!e || !t))
                      return (
                        el.dispatch("PUSH", e, n),
                        () => el.dispatch("POP", e, n)
                      );
                  }, [t, e]);
              })(R, !(ei || 0 !== z || G), er),
              (0, d.useEffect)(() => {
                if (0 !== z || !O.current) return;
                let e = new ResizeObserver((e) => {
                  for (let t of e) {
                    let e = t.target.getBoundingClientRect();
                    0 === e.x &&
                      0 === e.y &&
                      0 === e.width &&
                      0 === e.height &&
                      V();
                  }
                });
                return e.observe(O.current), () => e.disconnect();
              }, [z, O, V]);
            let [ef, ep] = (function () {
                let [e, t] = (0, d.useState)([]);
                return [
                  e.length > 0 ? e.join(" ") : void 0,
                  (0, d.useMemo)(
                    () =>
                      function (e) {
                        let r = (0, w.z)(
                            (e) => (
                              t((t) => [...t, e]),
                              () =>
                                t((t) => {
                                  let r = t.slice(),
                                    n = r.indexOf(e);
                                  return -1 !== n && r.splice(n, 1), r;
                                })
                            )
                          ),
                          n = (0, d.useMemo)(
                            () => ({
                              register: r,
                              slot: e.slot,
                              name: e.name,
                              props: e.props,
                            }),
                            [r, e.slot, e.name, e.props]
                          );
                        return d.createElement(
                          W.Provider,
                          { value: n },
                          e.children
                        );
                      },
                    [t]
                  ),
                ];
              })(),
              ev = (0, d.useMemo)(
                () => [{ dialogState: z, close: V, setTitleId: B }, $],
                [z, $, V, B]
              ),
              eb = (0, d.useMemo)(() => ({ open: 0 === z }), [z]),
              eE = {
                ref: A,
                id: u,
                role: "dialog",
                "aria-modal": 0 === z || void 0,
                "aria-labelledby": $.titleId,
                "aria-describedby": ef,
              };
            return d.createElement(
              X,
              {
                type: "Dialog",
                enabled: 0 === z,
                element: O,
                onUpdate: (0, w.z)((e, t) => {
                  "Dialog" === t &&
                    (0, p.E)(e, {
                      [Q.Add]: () => S((e) => e + 1),
                      [Q.Remove]: () => S((e) => e - 1),
                    });
                }),
              },
              d.createElement(
                Y,
                { force: !0 },
                d.createElement(
                  U,
                  null,
                  d.createElement(
                    em.Provider,
                    { value: ev },
                    d.createElement(
                      U.Group,
                      { target: O },
                      d.createElement(
                        Y,
                        { force: !1 },
                        d.createElement(
                          ep,
                          { slot: eb, name: "Dialog.Description" },
                          d.createElement(
                            N,
                            {
                              initialFocus: T,
                              containers: er,
                              features: _
                                ? (0, p.E)(Z ? "parent" : "leaf", {
                                    parent: N.features.RestoreFocus,
                                    leaf:
                                      N.features.All & ~N.features.FocusLock,
                                  })
                                : N.features.None,
                            },
                            d.createElement(
                              et,
                              null,
                              (0, m.sY)({
                                ourProps: eE,
                                theirProps: L,
                                slot: eb,
                                defaultTag: "div",
                                features: eh,
                                visible: 0 === z,
                                name: "Dialog",
                              })
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              d.createElement(eo, null)
            );
          }),
          {
            Backdrop: (0, m.yV)(function (e, t) {
              let r = (0, h.M)(),
                { id: n = `headlessui-dialog-backdrop-${r}`, ...o } = e,
                [{ dialogState: a }, i] = ev("Dialog.Backdrop"),
                l = (0, v.T)(t);
              (0, d.useEffect)(() => {
                if (null === i.panelRef.current)
                  throw Error(
                    "A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing."
                  );
              }, [i.panelRef]);
              let s = (0, d.useMemo)(() => ({ open: 0 === a }), [a]);
              return d.createElement(
                Y,
                { force: !0 },
                d.createElement(
                  U,
                  null,
                  (0, m.sY)({
                    ourProps: { ref: l, id: n, "aria-hidden": !0 },
                    theirProps: o,
                    slot: s,
                    defaultTag: "div",
                    name: "Dialog.Backdrop",
                  })
                )
              );
            }),
            Panel: (0, m.yV)(function (e, t) {
              let r = (0, h.M)(),
                { id: n = `headlessui-dialog-panel-${r}`, ...o } = e,
                [{ dialogState: a }, i] = ev("Dialog.Panel"),
                l = (0, v.T)(t, i.panelRef),
                s = (0, d.useMemo)(() => ({ open: 0 === a }), [a]),
                u = (0, w.z)((e) => {
                  e.stopPropagation();
                });
              return (0,
              m.sY)({ ourProps: { ref: l, id: n, onClick: u }, theirProps: o, slot: s, defaultTag: "div", name: "Dialog.Panel" });
            }),
            Overlay: (0, m.yV)(function (e, t) {
              let r = (0, h.M)(),
                { id: n = `headlessui-dialog-overlay-${r}`, ...o } = e,
                [{ dialogState: a, close: i }] = ev("Dialog.Overlay"),
                l = (0, v.T)(t),
                s = (0, w.z)((e) => {
                  if (e.target === e.currentTarget) {
                    if (
                      (function (e) {
                        let t = e.parentElement,
                          r = null;
                        for (; t && !(t instanceof HTMLFieldSetElement); )
                          t instanceof HTMLLegendElement && (r = t),
                            (t = t.parentElement);
                        let n =
                          (null == t ? void 0 : t.getAttribute("disabled")) ===
                          "";
                        return (
                          !(
                            n &&
                            (function (e) {
                              if (!e) return !1;
                              let t = e.previousElementSibling;
                              for (; null !== t; ) {
                                if (t instanceof HTMLLegendElement) return !1;
                                t = t.previousElementSibling;
                              }
                              return !0;
                            })(r)
                          ) && n
                        );
                      })(e.currentTarget)
                    )
                      return e.preventDefault();
                    e.preventDefault(), e.stopPropagation(), i();
                  }
                }),
                u = (0, d.useMemo)(() => ({ open: 0 === a }), [a]);
              return (0,
              m.sY)({ ourProps: { ref: l, id: n, "aria-hidden": !0, onClick: s }, theirProps: o, slot: u, defaultTag: "div", name: "Dialog.Overlay" });
            }),
            Title: (0, m.yV)(function (e, t) {
              let r = (0, h.M)(),
                { id: n = `headlessui-dialog-title-${r}`, ...o } = e,
                [{ dialogState: a, setTitleId: i }] = ev("Dialog.Title"),
                l = (0, v.T)(t);
              (0, d.useEffect)(() => (i(n), () => i(null)), [n, i]);
              let s = (0, d.useMemo)(() => ({ open: 0 === a }), [a]);
              return (0,
              m.sY)({ ourProps: { ref: l, id: n }, theirProps: o, slot: s, defaultTag: "h2", name: "Dialog.Title" });
            }),
            Description: G,
          }
        );
    },
    22217: function (e, t, r) {
      r.d(t, {
        u: function () {
          return A;
        },
      });
      var n,
        o = r(96682),
        a = r(47702),
        i = r(97558),
        l = r(45120),
        s = r(39629),
        u = r(64092),
        c = r(59410),
        d = r(25853),
        f = r(39809),
        p = r(2700);
      function m(e, ...t) {
        e && t.length > 0 && e.classList.add(...t);
      }
      function v(e, ...t) {
        e && t.length > 0 && e.classList.remove(...t);
      }
      var g = r(50814),
        h = r(68344),
        b = r(64746);
      function E(e = "") {
        return e.split(" ").filter((e) => e.trim().length > 1);
      }
      let y = (0, o.createContext)(null);
      y.displayName = "TransitionContext";
      var w = (((n = w || {}).Visible = "visible"), (n.Hidden = "hidden"), n);
      let T = (0, o.createContext)(null);
      function C(e) {
        return "children" in e
          ? C(e.children)
          : e.current
              .filter(({ el: e }) => null !== e.current)
              .filter(({ state: e }) => "visible" === e).length > 0;
      }
      function x(e, t) {
        let r = (0, c.E)(e),
          n = (0, o.useRef)([]),
          i = (0, s.t)(),
          u = (0, g.G)(),
          d = (0, h.z)((e, t = a.l4.Hidden) => {
            let o = n.current.findIndex(({ el: t }) => t === e);
            -1 !== o &&
              ((0, l.E)(t, {
                [a.l4.Unmount]() {
                  n.current.splice(o, 1);
                },
                [a.l4.Hidden]() {
                  n.current[o].state = "hidden";
                },
              }),
              u.microTask(() => {
                var e;
                !C(n) && i.current && (null == (e = r.current) || e.call(r));
              }));
          }),
          f = (0, h.z)((e) => {
            let t = n.current.find(({ el: t }) => t === e);
            return (
              t
                ? "visible" !== t.state && (t.state = "visible")
                : n.current.push({ el: e, state: "visible" }),
              () => d(e, a.l4.Unmount)
            );
          }),
          p = (0, o.useRef)([]),
          m = (0, o.useRef)(Promise.resolve()),
          v = (0, o.useRef)({ enter: [], leave: [], idle: [] }),
          b = (0, h.z)((e, r, n) => {
            p.current.splice(0),
              t &&
                (t.chains.current[r] = t.chains.current[r].filter(
                  ([t]) => t !== e
                )),
              null == t ||
                t.chains.current[r].push([
                  e,
                  new Promise((e) => {
                    p.current.push(e);
                  }),
                ]),
              null == t ||
                t.chains.current[r].push([
                  e,
                  new Promise((e) => {
                    Promise.all(v.current[r].map(([e, t]) => t)).then(() =>
                      e()
                    );
                  }),
                ]),
              "enter" === r
                ? (m.current = m.current
                    .then(() => (null == t ? void 0 : t.wait.current))
                    .then(() => n(r)))
                : n(r);
          }),
          E = (0, h.z)((e, t, r) => {
            Promise.all(v.current[t].splice(0).map(([e, t]) => t))
              .then(() => {
                var e;
                null == (e = p.current.shift()) || e();
              })
              .then(() => r(t));
          });
        return (0, o.useMemo)(
          () => ({
            children: n,
            register: f,
            unregister: d,
            onStart: b,
            onStop: E,
            wait: m,
            chains: v,
          }),
          [f, d, n, b, E, v, m]
        );
      }
      function L() {}
      T.displayName = "NestingContext";
      let P = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
      function k(e) {
        var t;
        let r = {};
        for (let n of P) r[n] = null != (t = e[n]) ? t : L;
        return r;
      }
      let M = a.AN.RenderStrategy,
        S = (0, a.yV)(function (e, t) {
          let { show: r, appear: n = !1, unmount: l = !0, ...s } = e,
            c = (0, o.useRef)(null),
            p = (0, f.T)(c, t);
          (0, d.H)();
          let m = (0, i.oJ)();
          if (
            (void 0 === r && null !== m && (r = (m & i.ZM.Open) === i.ZM.Open),
            ![!0, !1].includes(r))
          )
            throw Error(
              "A <Transition /> is used but it is missing a `show={true | false}` prop."
            );
          let [v, g] = (0, o.useState)(r ? "visible" : "hidden"),
            b = x(() => {
              g("hidden");
            }),
            [E, w] = (0, o.useState)(!0),
            L = (0, o.useRef)([r]);
          (0, u.e)(() => {
            !1 !== E &&
              L.current[L.current.length - 1] !== r &&
              (L.current.push(r), w(!1));
          }, [L, r]);
          let P = (0, o.useMemo)(
            () => ({ show: r, appear: n, initial: E }),
            [r, n, E]
          );
          (0, o.useEffect)(() => {
            if (r) g("visible");
            else if (C(b)) {
              let e = c.current;
              if (!e) return;
              let t = e.getBoundingClientRect();
              0 === t.x &&
                0 === t.y &&
                0 === t.width &&
                0 === t.height &&
                g("hidden");
            } else g("hidden");
          }, [r, b]);
          let k = { unmount: l },
            S = (0, h.z)(() => {
              var t;
              E && w(!1), null == (t = e.beforeEnter) || t.call(e);
            }),
            O = (0, h.z)(() => {
              var t;
              E && w(!1), null == (t = e.beforeLeave) || t.call(e);
            });
          return o.createElement(
            T.Provider,
            { value: b },
            o.createElement(
              y.Provider,
              { value: P },
              (0, a.sY)({
                ourProps: {
                  ...k,
                  as: o.Fragment,
                  children: o.createElement(F, {
                    ref: p,
                    ...k,
                    ...s,
                    beforeEnter: S,
                    beforeLeave: O,
                  }),
                },
                theirProps: {},
                defaultTag: o.Fragment,
                features: M,
                visible: "visible" === v,
                name: "Transition",
              })
            )
          );
        }),
        F = (0, a.yV)(function (e, t) {
          var r, n, w;
          let L;
          let {
              beforeEnter: P,
              afterEnter: S,
              beforeLeave: F,
              afterLeave: O,
              enter: A,
              enterFrom: R,
              enterTo: D,
              entered: N,
              leave: H,
              leaveFrom: z,
              leaveTo: $,
              ...I
            } = e,
            j = (0, o.useRef)(null),
            Y = (0, f.T)(j, t),
            V = null == (r = I.unmount) || r ? a.l4.Unmount : a.l4.Hidden,
            {
              show: B,
              appear: _,
              initial: Z,
            } = (function () {
              let e = (0, o.useContext)(y);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            [q, U] = (0, o.useState)(B ? "visible" : "hidden"),
            W = (function () {
              let e = (0, o.useContext)(T);
              if (null === e)
                throw Error(
                  "A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />."
                );
              return e;
            })(),
            { register: G, unregister: J } = W;
          (0, o.useEffect)(() => G(j), [G, j]),
            (0, o.useEffect)(() => {
              if (V === a.l4.Hidden && j.current) {
                if (B && "visible" !== q) {
                  U("visible");
                  return;
                }
                return (0, l.E)(q, { hidden: () => J(j), visible: () => G(j) });
              }
            }, [q, j, G, J, B, V]);
          let K = (0, c.E)({
              base: E(I.className),
              enter: E(A),
              enterFrom: E(R),
              enterTo: E(D),
              entered: E(N),
              leave: E(H),
              leaveFrom: E(z),
              leaveTo: E($),
            }),
            Q =
              ((w = {
                beforeEnter: P,
                afterEnter: S,
                beforeLeave: F,
                afterLeave: O,
              }),
              (L = (0, o.useRef)(k(w))),
              (0, o.useEffect)(() => {
                L.current = k(w);
              }, [w]),
              L),
            X = (0, d.H)();
          (0, o.useEffect)(() => {
            if (X && "visible" === q && null === j.current)
              throw Error(
                "Did you forget to passthrough the `ref` to the actual DOM node?"
              );
          }, [j, q, X]);
          let ee = _ && B && Z,
            et = X && (!Z || _) ? (B ? "enter" : "leave") : "idle",
            er = (function (e = 0) {
              let [t, r] = (0, o.useState)(e),
                n = (0, s.t)(),
                a = (0, o.useCallback)(
                  (e) => {
                    n.current && r((t) => t | e);
                  },
                  [t, n]
                ),
                i = (0, o.useCallback)((e) => !!(t & e), [t]);
              return {
                flags: t,
                addFlag: a,
                hasFlag: i,
                removeFlag: (0, o.useCallback)(
                  (e) => {
                    n.current && r((t) => t & ~e);
                  },
                  [r, n]
                ),
                toggleFlag: (0, o.useCallback)(
                  (e) => {
                    n.current && r((t) => t ^ e);
                  },
                  [r]
                ),
              };
            })(0),
            en = (0, h.z)((e) =>
              (0, l.E)(e, {
                enter: () => {
                  er.addFlag(i.ZM.Opening), Q.current.beforeEnter();
                },
                leave: () => {
                  er.addFlag(i.ZM.Closing), Q.current.beforeLeave();
                },
                idle: () => {},
              })
            ),
            eo = (0, h.z)((e) =>
              (0, l.E)(e, {
                enter: () => {
                  er.removeFlag(i.ZM.Opening), Q.current.afterEnter();
                },
                leave: () => {
                  er.removeFlag(i.ZM.Closing), Q.current.afterLeave();
                },
                idle: () => {},
              })
            ),
            ea = x(() => {
              U("hidden"), J(j);
            }, W);
          !(function ({
            immediate: e,
            container: t,
            direction: r,
            classes: n,
            onStart: o,
            onStop: a,
          }) {
            let i = (0, s.t)(),
              d = (0, g.G)(),
              f = (0, c.E)(r);
            (0, u.e)(() => {
              e && (f.current = "enter");
            }, [e]),
              (0, u.e)(() => {
                let e = (0, p.k)();
                d.add(e.dispose);
                let r = t.current;
                if (r && "idle" !== f.current && i.current) {
                  var s, u, c;
                  let t, i, d, g, h, b, E;
                  return (
                    e.dispose(),
                    o.current(f.current),
                    e.add(
                      ((s = n.current),
                      (u = "enter" === f.current),
                      (c = () => {
                        e.dispose(), a.current(f.current);
                      }),
                      (i = u ? "enter" : "leave"),
                      (d = (0, p.k)()),
                      (g =
                        void 0 !== c
                          ? ((t = { called: !1 }),
                            (...e) => {
                              if (!t.called) return (t.called = !0), c(...e);
                            })
                          : () => {}),
                      "enter" === i &&
                        (r.removeAttribute("hidden"), (r.style.display = "")),
                      (h = (0, l.E)(i, {
                        enter: () => s.enter,
                        leave: () => s.leave,
                      })),
                      (b = (0, l.E)(i, {
                        enter: () => s.enterTo,
                        leave: () => s.leaveTo,
                      })),
                      (E = (0, l.E)(i, {
                        enter: () => s.enterFrom,
                        leave: () => s.leaveFrom,
                      })),
                      v(
                        r,
                        ...s.base,
                        ...s.enter,
                        ...s.enterTo,
                        ...s.enterFrom,
                        ...s.leave,
                        ...s.leaveFrom,
                        ...s.leaveTo,
                        ...s.entered
                      ),
                      m(r, ...s.base, ...h, ...E),
                      d.nextFrame(() => {
                        v(r, ...s.base, ...h, ...E),
                          m(r, ...s.base, ...h, ...b),
                          (function (e, t) {
                            let r = (0, p.k)();
                            if (!e) return r.dispose;
                            let { transitionDuration: n, transitionDelay: o } =
                                getComputedStyle(e),
                              [a, i] = [n, o].map((e) => {
                                let [t = 0] = e
                                  .split(",")
                                  .filter(Boolean)
                                  .map((e) =>
                                    e.includes("ms")
                                      ? parseFloat(e)
                                      : 1e3 * parseFloat(e)
                                  )
                                  .sort((e, t) => t - e);
                                return t;
                              }),
                              l = a + i;
                            if (0 !== l) {
                              r.group((r) => {
                                r.setTimeout(() => {
                                  t(), r.dispose();
                                }, l),
                                  r.addEventListener(
                                    e,
                                    "transitionrun",
                                    (e) => {
                                      e.target === e.currentTarget &&
                                        r.dispose();
                                    }
                                  );
                              });
                              let n = r.addEventListener(
                                e,
                                "transitionend",
                                (e) => {
                                  e.target === e.currentTarget && (t(), n());
                                }
                              );
                            } else t();
                            r.add(() => t()), r.dispose;
                          })(
                            r,
                            () => (
                              v(r, ...s.base, ...h),
                              m(r, ...s.base, ...s.entered),
                              g()
                            )
                          );
                      }),
                      d.dispose)
                    ),
                    e.dispose
                  );
                }
              }, [r]);
          })({
            immediate: ee,
            container: j,
            classes: K,
            direction: et,
            onStart: (0, c.E)((e) => {
              ea.onStart(j, e, en);
            }),
            onStop: (0, c.E)((e) => {
              ea.onStop(j, e, eo),
                "leave" !== e || C(ea) || (U("hidden"), J(j));
            }),
          });
          let ei = I;
          return (
            ee
              ? (ei = {
                  ...ei,
                  className: (0, b.A)(
                    I.className,
                    ...K.current.enter,
                    ...K.current.enterFrom
                  ),
                })
              : ((ei.className = (0, b.A)(
                  I.className,
                  null == (n = j.current) ? void 0 : n.className
                )),
                "" === ei.className && delete ei.className),
            o.createElement(
              T.Provider,
              { value: ea },
              o.createElement(
                i.up,
                {
                  value:
                    (0, l.E)(q, { visible: i.ZM.Open, hidden: i.ZM.Closed }) |
                    er.flags,
                },
                (0, a.sY)({
                  ourProps: { ref: Y },
                  theirProps: ei,
                  defaultTag: "div",
                  features: M,
                  visible: "visible" === q,
                  name: "Transition.Child",
                })
              )
            )
          );
        }),
        O = (0, a.yV)(function (e, t) {
          let r = null !== (0, o.useContext)(y),
            n = null !== (0, i.oJ)();
          return o.createElement(
            o.Fragment,
            null,
            !r && n
              ? o.createElement(S, { ref: t, ...e })
              : o.createElement(F, { ref: t, ...e })
          );
        }),
        A = Object.assign(S, { Child: O, Root: S });
    },
    50814: function (e, t, r) {
      r.d(t, {
        G: function () {
          return a;
        },
      });
      var n = r(96682),
        o = r(2700);
      function a() {
        let [e] = (0, n.useState)(o.k);
        return (0, n.useEffect)(() => () => e.dispose(), [e]), e;
      }
    },
    97558: function (e, t, r) {
      r.d(t, {
        ZM: function () {
          return i;
        },
        oJ: function () {
          return l;
        },
        up: function () {
          return s;
        },
      });
      var n,
        o = r(96682);
      let a = (0, o.createContext)(null);
      a.displayName = "OpenClosedContext";
      var i =
        (((n = i || {})[(n.Open = 1)] = "Open"),
        (n[(n.Closed = 2)] = "Closed"),
        (n[(n.Closing = 4)] = "Closing"),
        (n[(n.Opening = 8)] = "Opening"),
        n);
      function l() {
        return (0, o.useContext)(a);
      }
      function s({ value: e, children: t }) {
        return o.createElement(a.Provider, { value: e }, t);
      }
    },
    2700: function (e, t, r) {
      r.d(t, {
        k: function () {
          return function e() {
            let t = [],
              r = {
                addEventListener: (e, t, n, o) => (
                  e.addEventListener(t, n, o),
                  r.add(() => e.removeEventListener(t, n, o))
                ),
                requestAnimationFrame(...e) {
                  let t = requestAnimationFrame(...e);
                  return r.add(() => cancelAnimationFrame(t));
                },
                nextFrame: (...e) =>
                  r.requestAnimationFrame(() => r.requestAnimationFrame(...e)),
                setTimeout(...e) {
                  let t = setTimeout(...e);
                  return r.add(() => clearTimeout(t));
                },
                microTask(...e) {
                  let t = { current: !0 };
                  return (
                    (0, n.Y)(() => {
                      t.current && e[0]();
                    }),
                    r.add(() => {
                      t.current = !1;
                    })
                  );
                },
                style(e, t, r) {
                  let n = e.style.getPropertyValue(t);
                  return (
                    Object.assign(e.style, { [t]: r }),
                    this.add(() => {
                      Object.assign(e.style, { [t]: n });
                    })
                  );
                },
                group(t) {
                  let r = e();
                  return t(r), this.add(() => r.dispose());
                },
                add: (e) => (
                  t.push(e),
                  () => {
                    let r = t.indexOf(e);
                    if (r >= 0) for (let e of t.splice(r, 1)) e();
                  }
                ),
                dispose() {
                  for (let e of t.splice(0)) e();
                },
              };
            return r;
          };
        },
      });
      var n = r(76913);
    },
    89462: function (e, t, r) {
      let n, o;
      r.r(t),
        r.d(t, {
          CheckmarkIcon: function () {
            return J;
          },
          ErrorIcon: function () {
            return Z;
          },
          LoaderIcon: function () {
            return U;
          },
          ToastBar: function () {
            return el;
          },
          ToastIcon: function () {
            return et;
          },
          Toaster: function () {
            return ed;
          },
          default: function () {
            return ef;
          },
          resolveValue: function () {
            return x;
          },
          toast: function () {
            return $;
          },
          useToaster: function () {
            return Y;
          },
          useToasterStore: function () {
            return N;
          },
        });
      var a,
        i = r(96682);
      let l = { data: "" },
        s = (e) =>
          "object" == typeof window
            ? (
                (e ? e.querySelector("#_goober") : window._goober) ||
                Object.assign(
                  (e || document.head).appendChild(
                    document.createElement("style")
                  ),
                  { innerHTML: " ", id: "_goober" }
                )
              ).firstChild
            : e || l,
        u = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,
        c = /\/\*[^]*?\*\/|  +/g,
        d = /\n+/g,
        f = (e, t) => {
          let r = "",
            n = "",
            o = "";
          for (let a in e) {
            let i = e[a];
            "@" == a[0]
              ? "i" == a[1]
                ? (r = a + " " + i + ";")
                : (n +=
                    "f" == a[1]
                      ? f(i, a)
                      : a + "{" + f(i, "k" == a[1] ? "" : t) + "}")
              : "object" == typeof i
              ? (n += f(
                  i,
                  t
                    ? t.replace(/([^,])+/g, (e) =>
                        a.replace(/(^:.*)|([^,])+/g, (t) =>
                          /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t
                        )
                      )
                    : a
                ))
              : null != i &&
                ((a = /^--/.test(a)
                  ? a
                  : a.replace(/[A-Z]/g, "-$&").toLowerCase()),
                (o += f.p ? f.p(a, i) : a + ":" + i + ";"));
          }
          return r + (t && o ? t + "{" + o + "}" : o) + n;
        },
        p = {},
        m = (e) => {
          if ("object" == typeof e) {
            let t = "";
            for (let r in e) t += r + m(e[r]);
            return t;
          }
          return e;
        },
        v = (e, t, r, n, o) => {
          var a;
          let i = m(e),
            l =
              p[i] ||
              (p[i] = ((e) => {
                let t = 0,
                  r = 11;
                for (; t < e.length; ) r = (101 * r + e.charCodeAt(t++)) >>> 0;
                return "go" + r;
              })(i));
          if (!p[l]) {
            let t =
              i !== e
                ? e
                : ((e) => {
                    let t,
                      r,
                      n = [{}];
                    for (; (t = u.exec(e.replace(c, ""))); )
                      t[4]
                        ? n.shift()
                        : t[3]
                        ? ((r = t[3].replace(d, " ").trim()),
                          n.unshift((n[0][r] = n[0][r] || {})))
                        : (n[0][t[1]] = t[2].replace(d, " ").trim());
                    return n[0];
                  })(e);
            p[l] = f(o ? { ["@keyframes " + l]: t } : t, r ? "" : "." + l);
          }
          let s = r && p.g ? p.g : null;
          return (
            r && (p.g = p[l]),
            (a = p[l]),
            s
              ? (t.data = t.data.replace(s, a))
              : -1 === t.data.indexOf(a) &&
                (t.data = n ? a + t.data : t.data + a),
            l
          );
        },
        g = (e, t, r) =>
          e.reduce((e, n, o) => {
            let a = t[o];
            if (a && a.call) {
              let e = a(r),
                t = (e && e.props && e.props.className) || (/^go/.test(e) && e);
              a = t
                ? "." + t
                : e && "object" == typeof e
                ? e.props
                  ? ""
                  : f(e, "")
                : !1 === e
                ? ""
                : e;
            }
            return e + n + (null == a ? "" : a);
          }, "");
      function h(e) {
        let t = this || {},
          r = e.call ? e(t.p) : e;
        return v(
          r.unshift
            ? r.raw
              ? g(r, [].slice.call(arguments, 1), t.p)
              : r.reduce(
                  (e, r) => Object.assign(e, r && r.call ? r(t.p) : r),
                  {}
                )
            : r,
          s(t.target),
          t.g,
          t.o,
          t.k
        );
      }
      h.bind({ g: 1 });
      let b,
        E,
        y,
        w = h.bind({ k: 1 });
      function T(e, t) {
        let r = this || {};
        return function () {
          let n = arguments;
          function o(a, i) {
            let l = Object.assign({}, a),
              s = l.className || o.className;
            (r.p = Object.assign({ theme: E && E() }, l)),
              (r.o = / *go\d+/.test(s)),
              (l.className = h.apply(r, n) + (s ? " " + s : "")),
              t && (l.ref = i);
            let u = e;
            return (
              e[0] && ((u = l.as || e), delete l.as), y && u[0] && y(l), b(u, l)
            );
          }
          return t ? t(o) : o;
        };
      }
      var C = (e) => "function" == typeof e,
        x = (e, t) => (C(e) ? e(t) : e),
        L = ((n = 0), () => (++n).toString()),
        P = () => {
          if (void 0 === o && "u" > typeof window) {
            let e = matchMedia("(prefers-reduced-motion: reduce)");
            o = !e || e.matches;
          }
          return o;
        },
        k = new Map(),
        M = (e) => {
          if (k.has(e)) return;
          let t = setTimeout(() => {
            k.delete(e), R({ type: 4, toastId: e });
          }, 1e3);
          k.set(e, t);
        },
        S = (e) => {
          let t = k.get(e);
          t && clearTimeout(t);
        },
        F = (e, t) => {
          switch (t.type) {
            case 0:
              return { ...e, toasts: [t.toast, ...e.toasts].slice(0, 20) };
            case 1:
              return (
                t.toast.id && S(t.toast.id),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === t.toast.id ? { ...e, ...t.toast } : e
                  ),
                }
              );
            case 2:
              let { toast: r } = t;
              return e.toasts.find((e) => e.id === r.id)
                ? F(e, { type: 1, toast: r })
                : F(e, { type: 0, toast: r });
            case 3:
              let { toastId: n } = t;
              return (
                n
                  ? M(n)
                  : e.toasts.forEach((e) => {
                      M(e.id);
                    }),
                {
                  ...e,
                  toasts: e.toasts.map((e) =>
                    e.id === n || void 0 === n ? { ...e, visible: !1 } : e
                  ),
                }
              );
            case 4:
              return void 0 === t.toastId
                ? { ...e, toasts: [] }
                : { ...e, toasts: e.toasts.filter((e) => e.id !== t.toastId) };
            case 5:
              return { ...e, pausedAt: t.time };
            case 6:
              let o = t.time - (e.pausedAt || 0);
              return {
                ...e,
                pausedAt: void 0,
                toasts: e.toasts.map((e) => ({
                  ...e,
                  pauseDuration: e.pauseDuration + o,
                })),
              };
          }
        },
        O = [],
        A = { toasts: [], pausedAt: void 0 },
        R = (e) => {
          (A = F(A, e)),
            O.forEach((e) => {
              e(A);
            });
        },
        D = {
          blank: 4e3,
          error: 4e3,
          success: 2e3,
          loading: 1 / 0,
          custom: 4e3,
        },
        N = (e = {}) => {
          let [t, r] = (0, i.useState)(A);
          (0, i.useEffect)(
            () => (
              O.push(r),
              () => {
                let e = O.indexOf(r);
                e > -1 && O.splice(e, 1);
              }
            ),
            [t]
          );
          let n = t.toasts.map((t) => {
            var r, n;
            return {
              ...e,
              ...e[t.type],
              ...t,
              duration:
                t.duration ||
                (null == (r = e[t.type]) ? void 0 : r.duration) ||
                (null == e ? void 0 : e.duration) ||
                D[t.type],
              style: {
                ...e.style,
                ...(null == (n = e[t.type]) ? void 0 : n.style),
                ...t.style,
              },
            };
          });
          return { ...t, toasts: n };
        },
        H = (e, t = "blank", r) => ({
          createdAt: Date.now(),
          visible: !0,
          type: t,
          ariaProps: { role: "status", "aria-live": "polite" },
          message: e,
          pauseDuration: 0,
          ...r,
          id: (null == r ? void 0 : r.id) || L(),
        }),
        z = (e) => (t, r) => {
          let n = H(t, e, r);
          return R({ type: 2, toast: n }), n.id;
        },
        $ = (e, t) => z("blank")(e, t);
      ($.error = z("error")),
        ($.success = z("success")),
        ($.loading = z("loading")),
        ($.custom = z("custom")),
        ($.dismiss = (e) => {
          R({ type: 3, toastId: e });
        }),
        ($.remove = (e) => R({ type: 4, toastId: e })),
        ($.promise = (e, t, r) => {
          let n = $.loading(t.loading, {
            ...r,
            ...(null == r ? void 0 : r.loading),
          });
          return (
            e
              .then(
                (e) => (
                  $.success(x(t.success, e), {
                    id: n,
                    ...r,
                    ...(null == r ? void 0 : r.success),
                  }),
                  e
                )
              )
              .catch((e) => {
                $.error(x(t.error, e), {
                  id: n,
                  ...r,
                  ...(null == r ? void 0 : r.error),
                });
              }),
            e
          );
        });
      var I = (e, t) => {
          R({ type: 1, toast: { id: e, height: t } });
        },
        j = () => {
          R({ type: 5, time: Date.now() });
        },
        Y = (e) => {
          let { toasts: t, pausedAt: r } = N(e);
          (0, i.useEffect)(() => {
            if (r) return;
            let e = Date.now(),
              n = t.map((t) => {
                if (t.duration === 1 / 0) return;
                let r = (t.duration || 0) + t.pauseDuration - (e - t.createdAt);
                if (r < 0) {
                  t.visible && $.dismiss(t.id);
                  return;
                }
                return setTimeout(() => $.dismiss(t.id), r);
              });
            return () => {
              n.forEach((e) => e && clearTimeout(e));
            };
          }, [t, r]);
          let n = (0, i.useCallback)(() => {
              r && R({ type: 6, time: Date.now() });
            }, [r]),
            o = (0, i.useCallback)(
              (e, r) => {
                let {
                    reverseOrder: n = !1,
                    gutter: o = 8,
                    defaultPosition: a,
                  } = r || {},
                  i = t.filter(
                    (t) => (t.position || a) === (e.position || a) && t.height
                  ),
                  l = i.findIndex((t) => t.id === e.id),
                  s = i.filter((e, t) => t < l && e.visible).length;
                return i
                  .filter((e) => e.visible)
                  .slice(...(n ? [s + 1] : [0, s]))
                  .reduce((e, t) => e + (t.height || 0) + o, 0);
              },
              [t]
            );
          return {
            toasts: t,
            handlers: {
              updateHeight: I,
              startPause: j,
              endPause: n,
              calculateOffset: o,
            },
          };
        },
        V = w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,
        B = w`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
        _ = w`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,
        Z = T("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${V} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${B} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e) => e.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${_} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,
        q = w`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,
        U = T("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e) => e.secondary || "#e0e0e0"};
  border-right-color: ${(e) => e.primary || "#616161"};
  animation: ${q} 1s linear infinite;
`,
        W = w`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,
        G = w`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,
        J = T("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e) => e.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${W} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${G} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e) => e.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,
        K = T("div")`
  position: absolute;
`,
        Q = T("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,
        X = w`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,
        ee = T("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${X} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,
        et = ({ toast: e }) => {
          let { icon: t, type: r, iconTheme: n } = e;
          return void 0 !== t
            ? "string" == typeof t
              ? i.createElement(ee, null, t)
              : t
            : "blank" === r
            ? null
            : i.createElement(
                Q,
                null,
                i.createElement(U, { ...n }),
                "loading" !== r &&
                  i.createElement(
                    K,
                    null,
                    "error" === r
                      ? i.createElement(Z, { ...n })
                      : i.createElement(J, { ...n })
                  )
              );
        },
        er = (e) => `
0% {transform: translate3d(0,${-200 * e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,
        en = (e) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150 * e}%,-1px) scale(.6); opacity:0;}
`,
        eo = T("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,
        ea = T("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,
        ei = (e, t) => {
          let r = e.includes("top") ? 1 : -1,
            [n, o] = P()
              ? [
                  "0%{opacity:0;} 100%{opacity:1;}",
                  "0%{opacity:1;} 100%{opacity:0;}",
                ]
              : [er(r), en(r)];
          return {
            animation: t
              ? `${w(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`
              : `${w(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`,
          };
        },
        el = i.memo(({ toast: e, position: t, style: r, children: n }) => {
          let o = e.height
              ? ei(e.position || t || "top-center", e.visible)
              : { opacity: 0 },
            a = i.createElement(et, { toast: e }),
            l = i.createElement(ea, { ...e.ariaProps }, x(e.message, e));
          return i.createElement(
            eo,
            { className: e.className, style: { ...o, ...r, ...e.style } },
            "function" == typeof n
              ? n({ icon: a, message: l })
              : i.createElement(i.Fragment, null, a, l)
          );
        });
      (a = i.createElement),
        (f.p = void 0),
        (b = a),
        (E = void 0),
        (y = void 0);
      var es = ({
          id: e,
          className: t,
          style: r,
          onHeightUpdate: n,
          children: o,
        }) => {
          let a = i.useCallback(
            (t) => {
              if (t) {
                let r = () => {
                  n(e, t.getBoundingClientRect().height);
                };
                r(),
                  new MutationObserver(r).observe(t, {
                    subtree: !0,
                    childList: !0,
                    characterData: !0,
                  });
              }
            },
            [e, n]
          );
          return i.createElement("div", { ref: a, className: t, style: r }, o);
        },
        eu = (e, t) => {
          let r = e.includes("top"),
            n = e.includes("center")
              ? { justifyContent: "center" }
              : e.includes("right")
              ? { justifyContent: "flex-end" }
              : {};
          return {
            left: 0,
            right: 0,
            display: "flex",
            position: "absolute",
            transition: P() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)",
            transform: `translateY(${t * (r ? 1 : -1)}px)`,
            ...(r ? { top: 0 } : { bottom: 0 }),
            ...n,
          };
        },
        ec = h`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,
        ed = ({
          reverseOrder: e,
          position: t = "top-center",
          toastOptions: r,
          gutter: n,
          children: o,
          containerStyle: a,
          containerClassName: l,
        }) => {
          let { toasts: s, handlers: u } = Y(r);
          return i.createElement(
            "div",
            {
              style: {
                position: "fixed",
                zIndex: 9999,
                top: 16,
                left: 16,
                right: 16,
                bottom: 16,
                pointerEvents: "none",
                ...a,
              },
              className: l,
              onMouseEnter: u.startPause,
              onMouseLeave: u.endPause,
            },
            s.map((r) => {
              let a = r.position || t,
                l = eu(
                  a,
                  u.calculateOffset(r, {
                    reverseOrder: e,
                    gutter: n,
                    defaultPosition: t,
                  })
                );
              return i.createElement(
                es,
                {
                  id: r.id,
                  key: r.id,
                  onHeightUpdate: u.updateHeight,
                  className: r.visible ? ec : "",
                  style: l,
                },
                "custom" === r.type
                  ? x(r.message, r)
                  : o
                  ? o(r)
                  : i.createElement(el, { toast: r, position: a })
              );
            })
          );
        },
        ef = $;
    },
  },
]);
