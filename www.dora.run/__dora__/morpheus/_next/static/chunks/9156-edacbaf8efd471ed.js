(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9156],
  {
    42182: function (e, t, n) {
      "use strict";
      n.d(t, {
        V: function () {
          return s;
        },
      });
      var r = n(96682),
        a = n(55819);
      /*!
       * @gsap/react
       * https://gsap.com
       *
       * Copyright 2008-2023, GreenSock. All rights reserved.
       * Subject to the terms at https://gsap.com/standard-license or for
       * Club GSAP members, the agreement issued with that membership.
       * @author: Jack Doyle, jack@greensock.com
       */ let l =
          "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        i = (e) => e && !Array.isArray(e) && "object" == typeof e,
        o = [],
        u = {},
        s = (e, t = o) => {
          let n = u;
          i(e)
            ? ((n = e),
              (e = null),
              (t = "dependencies" in n ? n.dependencies : o))
            : i(t) && (t = "dependencies" in (n = t) ? n.dependencies : o);
          let { scope: s, revertOnUpdate: c } = n,
            [f, d] = (0, r.useState)(!1);
          e &&
            "function" != typeof e &&
            console.warn("First parameter must be a function or config object");
          let p = a.ZP.context(() => {}, s),
            h = () => p.revert(),
            v = t && t.length && !c;
          return (
            l(() => {
              if ((e && p.add(e, s), !v || !f)) return h;
            }, t),
            v && l(() => (d(!0), h), o),
            { context: p, contextSafe: (e) => p.add(null, e) }
          );
        };
    },
    52109: function (e, t, n) {
      "use strict";
      n.d(t, {
        g: function () {
          return a;
        },
      });
      var r = n(77486);
      function a(e, t, n, a) {
        let l = class extends r.ShaderMaterial {
          constructor(l = {}) {
            let i = Object.entries(e);
            super({
              uniforms: i.reduce((e, [t, n]) => {
                let a = r.UniformsUtils.clone({ [t]: { value: n } });
                return { ...e, ...a };
              }, {}),
              vertexShader: t,
              fragmentShader: n,
            }),
              (this.key = ""),
              i.forEach(([e]) =>
                Object.defineProperty(this, e, {
                  get: () => this.uniforms[e].value,
                  set: (t) => (this.uniforms[e].value = t),
                })
              ),
              Object.assign(this, l),
              a && a(this);
          }
        };
        return (l.key = r.MathUtils.generateUUID()), l;
      }
    },
    45672: function (e, t, n) {
      "use strict";
      let r, a, l;
      n.d(t, {
        A: function () {
          return es;
        },
        B: function () {
          return R;
        },
        C: function () {
          return ec;
        },
        E: function () {
          return O;
        },
        F: function () {
          return ep;
        },
        a: function () {
          return M;
        },
        b: function () {
          return ew;
        },
        c: function () {
          return K;
        },
        d: function () {
          return e_;
        },
        e: function () {
          return k;
        },
        i: function () {
          return T;
        },
        u: function () {
          return z;
        },
      });
      var i,
        o,
        u = n(77486),
        s = n(96682),
        c = n(58573);
      let f =
        "undefined" == typeof window ||
        !window.navigator ||
        /ServerSideRendering|^Deno\//.test(window.navigator.userAgent)
          ? s.useEffect
          : s.useLayoutEffect;
      var d = n(84640),
        p = n.n(d),
        h = n(31321);
      let v = (e) => "object" == typeof e && "function" == typeof e.then,
        g = [];
      function m(e, t, n = (e, t) => e === t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        let r = e.length;
        if (t.length !== r) return !1;
        for (let a = 0; a < r; a++) if (!n(e[a], t[a])) return !1;
        return !0;
      }
      function y(e, t = null, n = !1, r = {}) {
        for (let a of (null === t && (t = [e]), g))
          if (m(t, a.keys, a.equal)) {
            if (n) return;
            if (Object.prototype.hasOwnProperty.call(a, "error")) throw a.error;
            if (Object.prototype.hasOwnProperty.call(a, "response"))
              return (
                r.lifespan &&
                  r.lifespan > 0 &&
                  (a.timeout && clearTimeout(a.timeout),
                  (a.timeout = setTimeout(a.remove, r.lifespan))),
                a.response
              );
            if (!n) throw a.promise;
          }
        let a = {
          keys: t,
          equal: r.equal,
          remove: () => {
            let e = g.indexOf(a);
            -1 !== e && g.splice(e, 1);
          },
          promise: (v(e) ? e : e(...t))
            .then((e) => {
              (a.response = e),
                r.lifespan &&
                  r.lifespan > 0 &&
                  (a.timeout = setTimeout(a.remove, r.lifespan));
            })
            .catch((e) => (a.error = e)),
        };
        if ((g.push(a), !n)) throw a.promise;
      }
      let b = (e, t, n) => y(e, t, !1, n),
        x = (e, t, n) => void y(e, t, !0, n),
        w = (e) => {
          if (void 0 === e || 0 === e.length) g.splice(0, g.length);
          else {
            let t = g.find((t) => m(e, t.keys, t.equal));
            t && t.remove();
          }
        };
      var S = n(28070);
      let _ = {},
        k = (e) => void Object.assign(_, e),
        P = (e) => "colorSpace" in e || "outputColorSpace" in e,
        C = () => {
          var e;
          return null != (e = _.ColorManagement) ? e : null;
        },
        E = (e) => e && e.isOrthographicCamera,
        T = (e) => e && e.hasOwnProperty("current"),
        M =
          "undefined" != typeof window &&
          ((null != (i = window.document) && i.createElement) ||
            (null == (o = window.navigator) ? void 0 : o.product) ===
              "ReactNative")
            ? s.useLayoutEffect
            : s.useEffect;
      function z(e) {
        let t = s.useRef(e);
        return M(() => void (t.current = e), [e]), t;
      }
      function R({ set: e }) {
        return M(() => (e(new Promise(() => null)), () => e(!1)), [e]), null;
      }
      class O extends s.Component {
        constructor(...e) {
          super(...e), (this.state = { error: !1 });
        }
        componentDidCatch(e) {
          this.props.set(e);
        }
        render() {
          return this.state.error ? null : this.props.children;
        }
      }
      O.getDerivedStateFromError = () => ({ error: !0 });
      let N = "__default",
        I = new Map(),
        L = (e) => e && !!e.memoized && !!e.changes;
      function D(e) {
        var t;
        let n =
          "undefined" != typeof window
            ? null != (t = window.devicePixelRatio)
              ? t
              : 2
            : 1;
        return Array.isArray(e) ? Math.min(Math.max(e[0], n), e[1]) : e;
      }
      let F = (e) => {
        var t;
        return null == (t = e.__r3f) ? void 0 : t.root.getState();
      };
      function A(e) {
        let t = e.__r3f.root;
        for (; t.getState().previousRoot; ) t = t.getState().previousRoot;
        return t;
      }
      let U = {
        obj: (e) => e === Object(e) && !U.arr(e) && "function" != typeof e,
        fun: (e) => "function" == typeof e,
        str: (e) => "string" == typeof e,
        num: (e) => "number" == typeof e,
        boo: (e) => "boolean" == typeof e,
        und: (e) => void 0 === e,
        arr: (e) => Array.isArray(e),
        equ(
          e,
          t,
          {
            arrays: n = "shallow",
            objects: r = "reference",
            strict: a = !0,
          } = {}
        ) {
          let l;
          if (typeof e != typeof t || !!e != !!t) return !1;
          if (U.str(e) || U.num(e)) return e === t;
          let i = U.obj(e);
          if (i && "reference" === r) return e === t;
          let o = U.arr(e);
          if (o && "reference" === n) return e === t;
          if ((o || i) && e === t) return !0;
          for (l in e) if (!(l in t)) return !1;
          if (i && "shallow" === n && "shallow" === r) {
            for (l in a ? t : e)
              if (!U.equ(e[l], t[l], { strict: a, objects: "reference" }))
                return !1;
          } else for (l in a ? t : e) if (e[l] !== t[l]) return !1;
          if (U.und(l)) {
            if (
              (o && 0 === e.length && 0 === t.length) ||
              (i && 0 === Object.keys(e).length && 0 === Object.keys(t).length)
            )
              return !0;
            if (e !== t) return !1;
          }
          return !0;
        },
      };
      function B(e, t) {
        return (
          (e.__r3f = {
            type: "",
            root: null,
            previousAttach: null,
            memoizedProps: {},
            eventCount: 0,
            handlers: {},
            objects: [],
            parent: null,
            ...t,
          }),
          e
        );
      }
      function j(e, t) {
        let n = e;
        if (!t.includes("-")) return { target: n, key: t };
        {
          let r = t.split("-"),
            a = r.pop();
          return { target: (n = r.reduce((e, t) => e[t], e)), key: a };
        }
      }
      let V = /-\d+$/;
      function H(e, t, n) {
        if (U.str(n)) {
          if (V.test(n)) {
            let { target: t, key: r } = j(e, n.replace(V, ""));
            Array.isArray(t[r]) || (t[r] = []);
          }
          let { target: r, key: a } = j(e, n);
          (t.__r3f.previousAttach = r[a]), (r[a] = t);
        } else t.__r3f.previousAttach = n(e, t);
      }
      function W(e, t, n) {
        var r, a;
        if (U.str(n)) {
          let { target: r, key: a } = j(e, n),
            l = t.__r3f.previousAttach;
          void 0 === l ? delete r[a] : (r[a] = l);
        } else
          null == (r = t.__r3f) ||
            null == r.previousAttach ||
            r.previousAttach(e, t);
        null == (a = t.__r3f) || delete a.previousAttach;
      }
      function Y(
        e,
        { children: t, key: n, ref: r, ...a },
        { children: l, key: i, ref: o, ...u } = {},
        s = !1
      ) {
        var c;
        let f = null != (c = null == e ? void 0 : e.__r3f) ? c : {},
          d = Object.entries(a),
          p = [];
        if (s) {
          let e = Object.keys(u);
          for (let t = 0; t < e.length; t++)
            a.hasOwnProperty(e[t]) || d.unshift([e[t], N + "remove"]);
        }
        d.forEach(([t, n]) => {
          var r;
          if (
            (null != (r = e.__r3f) && r.primitive && "object" === t) ||
            U.equ(n, u[t])
          )
            return;
          if (/^on(Pointer|Click|DoubleClick|ContextMenu|Wheel)/.test(t))
            return p.push([t, n, !0, []]);
          let l = [];
          for (let e in (t.includes("-") && (l = t.split("-")),
          p.push([t, n, !1, l]),
          a)) {
            let n = a[e];
            e.startsWith(`${t}-`) && p.push([e, n, !1, e.split("-")]);
          }
        });
        let h = { ...a };
        return (
          f.memoizedProps &&
            f.memoizedProps.args &&
            (h.args = f.memoizedProps.args),
          f.memoizedProps &&
            f.memoizedProps.attach &&
            (h.attach = f.memoizedProps.attach),
          { memoized: h, changes: p }
        );
      }
      let Q = void 0 !== S && !1;
      function X(e, t) {
        var n, r, a;
        let l = null != (n = e.__r3f) ? n : {},
          i = l.root,
          o =
            null !=
            (r =
              null == i ? void 0 : null == i.getState ? void 0 : i.getState())
              ? r
              : {},
          { memoized: s, changes: c } = L(t) ? t : Y(e, t),
          f = l.eventCount;
        e.__r3f && (e.__r3f.memoizedProps = s);
        for (let t = 0; t < c.length; t++) {
          let [n, r, a, i] = c[t];
          if (P(e)) {
            let e = "srgb",
              t = "srgb-linear";
            "encoding" === n
              ? ((n = "colorSpace"), (r = 3001 === r ? e : t))
              : "outputEncoding" === n &&
                ((n = "outputColorSpace"), (r = 3001 === r ? e : t));
          }
          let s = e,
            f = s[n];
          if (i.length && !((f = i.reduce((e, t) => e[t], e)) && f.set)) {
            let [t, ...r] = i.reverse();
            (s = r.reverse().reduce((e, t) => e[t], e)), (n = t);
          }
          if (r === N + "remove") {
            if (s.constructor) {
              let e = I.get(s.constructor);
              e || ((e = new s.constructor()), I.set(s.constructor, e)),
                (r = e[n]);
            } else r = 0;
          }
          if (a)
            r ? (l.handlers[n] = r) : delete l.handlers[n],
              (l.eventCount = Object.keys(l.handlers).length);
          else if (f && f.set && (f.copy || f instanceof u.Layers)) {
            if (Array.isArray(r)) f.fromArray ? f.fromArray(r) : f.set(...r);
            else if (
              f.copy &&
              r &&
              r.constructor &&
              (Q
                ? f.constructor.name === r.constructor.name
                : f.constructor === r.constructor)
            )
              f.copy(r);
            else if (void 0 !== r) {
              let e = f instanceof u.Color;
              !e && f.setScalar
                ? f.setScalar(r)
                : f instanceof u.Layers && r instanceof u.Layers
                ? (f.mask = r.mask)
                : f.set(r),
                C() || o.linear || !e || f.convertSRGBToLinear();
            }
          } else if (
            ((s[n] = r),
            s[n] instanceof u.Texture &&
              s[n].format === u.RGBAFormat &&
              s[n].type === u.UnsignedByteType)
          ) {
            let e = s[n];
            P(e) && P(o.gl)
              ? (e.colorSpace = o.gl.outputColorSpace)
              : (e.encoding = o.gl.outputEncoding);
          }
          q(e);
        }
        if (l.parent && e.raycast && f !== l.eventCount) {
          let t = A(e).getState().internal,
            n = t.interaction.indexOf(e);
          n > -1 && t.interaction.splice(n, 1),
            l.eventCount && t.interaction.push(e);
        }
        return (
          !(1 === c.length && "onUpdate" === c[0][0]) &&
            c.length &&
            null != (a = e.__r3f) &&
            a.parent &&
            $(e),
          e
        );
      }
      function q(e) {
        var t, n;
        let r =
          null == (t = e.__r3f)
            ? void 0
            : null == (n = t.root)
            ? void 0
            : null == n.getState
            ? void 0
            : n.getState();
        r && 0 === r.internal.frames && r.invalidate();
      }
      function $(e) {
        null == e.onUpdate || e.onUpdate(e);
      }
      function G(e) {
        return (e.eventObject || e.object).uuid + "/" + e.index + e.instanceId;
      }
      function Z(e, t, n, r) {
        let a = n.get(t);
        a &&
          (n.delete(t),
          0 === n.size && (e.delete(r), a.target.releasePointerCapture(r)));
      }
      function K(e) {
        function t(e) {
          return e.filter((e) =>
            ["Move", "Over", "Enter", "Out", "Leave"].some((t) => {
              var n;
              return null == (n = e.__r3f)
                ? void 0
                : n.handlers["onPointer" + t];
            })
          );
        }
        function n(t) {
          let { internal: n } = e.getState();
          for (let e of n.hovered.values())
            if (
              !t.length ||
              !t.find(
                (t) =>
                  t.object === e.object &&
                  t.index === e.index &&
                  t.instanceId === e.instanceId
              )
            ) {
              let r = e.eventObject.__r3f,
                a = null == r ? void 0 : r.handlers;
              if ((n.hovered.delete(G(e)), null != r && r.eventCount)) {
                let n = { ...e, intersections: t };
                null == a.onPointerOut || a.onPointerOut(n),
                  null == a.onPointerLeave || a.onPointerLeave(n);
              }
            }
        }
        function r(e, t) {
          for (let n = 0; n < t.length; n++) {
            let r = t[n].__r3f;
            null == r ||
              null == r.handlers.onPointerMissed ||
              r.handlers.onPointerMissed(e);
          }
        }
        return {
          handlePointer: function (a) {
            switch (a) {
              case "onPointerLeave":
              case "onPointerCancel":
                return () => n([]);
              case "onLostPointerCapture":
                return (t) => {
                  let { internal: r } = e.getState();
                  "pointerId" in t &&
                    r.capturedMap.has(t.pointerId) &&
                    requestAnimationFrame(() => {
                      r.capturedMap.has(t.pointerId) &&
                        (r.capturedMap.delete(t.pointerId), n([]));
                    });
                };
            }
            return function (l) {
              let { onPointerMissed: i, internal: o } = e.getState();
              o.lastEvent.current = l;
              let s = "onPointerMove" === a,
                c =
                  "onClick" === a ||
                  "onContextMenu" === a ||
                  "onDoubleClick" === a,
                f = (function (t, n) {
                  let r = e.getState(),
                    a = new Set(),
                    l = [],
                    i = n ? n(r.internal.interaction) : r.internal.interaction;
                  for (let e = 0; e < i.length; e++) {
                    let t = F(i[e]);
                    t && (t.raycaster.camera = void 0);
                  }
                  r.previousRoot ||
                    null == r.events.compute ||
                    r.events.compute(t, r);
                  let o = i
                    .flatMap(function (e) {
                      let n = F(e);
                      if (
                        !n ||
                        !n.events.enabled ||
                        null === n.raycaster.camera
                      )
                        return [];
                      if (void 0 === n.raycaster.camera) {
                        var r;
                        null == n.events.compute ||
                          n.events.compute(
                            t,
                            n,
                            null == (r = n.previousRoot) ? void 0 : r.getState()
                          ),
                          void 0 === n.raycaster.camera &&
                            (n.raycaster.camera = null);
                      }
                      return n.raycaster.camera
                        ? n.raycaster.intersectObject(e, !0)
                        : [];
                    })
                    .sort((e, t) => {
                      let n = F(e.object),
                        r = F(t.object);
                      return (
                        (n && r && r.events.priority - n.events.priority) ||
                        e.distance - t.distance
                      );
                    })
                    .filter((e) => {
                      let t = G(e);
                      return !a.has(t) && (a.add(t), !0);
                    });
                  for (let e of (r.events.filter && (o = r.events.filter(o, r)),
                  o)) {
                    let t = e.object;
                    for (; t; ) {
                      var u;
                      null != (u = t.__r3f) &&
                        u.eventCount &&
                        l.push({ ...e, eventObject: t }),
                        (t = t.parent);
                    }
                  }
                  if (
                    "pointerId" in t &&
                    r.internal.capturedMap.has(t.pointerId)
                  )
                    for (let e of r.internal.capturedMap
                      .get(t.pointerId)
                      .values())
                      a.has(G(e.intersection)) || l.push(e.intersection);
                  return l;
                })(l, s ? t : void 0),
                d = c
                  ? (function (t) {
                      let { internal: n } = e.getState(),
                        r = t.offsetX - n.initialClick[0],
                        a = t.offsetY - n.initialClick[1];
                      return Math.round(Math.sqrt(r * r + a * a));
                    })(l)
                  : 0;
              "onPointerDown" === a &&
                ((o.initialClick = [l.offsetX, l.offsetY]),
                (o.initialHits = f.map((e) => e.eventObject))),
                c && !f.length && d <= 2 && (r(l, o.interaction), i && i(l)),
                s && n(f),
                (function (t, r, a, l) {
                  let i = e.getState();
                  if (t.length) {
                    let e = { stopped: !1 };
                    for (let o of t) {
                      let {
                          raycaster: s,
                          pointer: c,
                          camera: f,
                          internal: d,
                        } = F(o.object) || i,
                        p = new u.Vector3(c.x, c.y, 0).unproject(f),
                        h = (e) => {
                          var t, n;
                          return (
                            null !=
                              (t =
                                null == (n = d.capturedMap.get(e))
                                  ? void 0
                                  : n.has(o.eventObject)) && t
                          );
                        },
                        v = (e) => {
                          let t = { intersection: o, target: r.target };
                          d.capturedMap.has(e)
                            ? d.capturedMap.get(e).set(o.eventObject, t)
                            : d.capturedMap.set(
                                e,
                                new Map([[o.eventObject, t]])
                              ),
                            r.target.setPointerCapture(e);
                        },
                        g = (e) => {
                          let t = d.capturedMap.get(e);
                          t && Z(d.capturedMap, o.eventObject, t, e);
                        },
                        m = {};
                      for (let e in r) {
                        let t = r[e];
                        "function" != typeof t && (m[e] = t);
                      }
                      let y = {
                        ...o,
                        ...m,
                        pointer: c,
                        intersections: t,
                        stopped: e.stopped,
                        delta: a,
                        unprojectedPoint: p,
                        ray: s.ray,
                        camera: f,
                        stopPropagation() {
                          let a =
                            "pointerId" in r && d.capturedMap.get(r.pointerId);
                          (!a || a.has(o.eventObject)) &&
                            ((y.stopped = e.stopped = !0),
                            d.hovered.size &&
                              Array.from(d.hovered.values()).find(
                                (e) => e.eventObject === o.eventObject
                              ) &&
                              n([...t.slice(0, t.indexOf(o)), o]));
                        },
                        target: {
                          hasPointerCapture: h,
                          setPointerCapture: v,
                          releasePointerCapture: g,
                        },
                        currentTarget: {
                          hasPointerCapture: h,
                          setPointerCapture: v,
                          releasePointerCapture: g,
                        },
                        nativeEvent: r,
                      };
                      if ((l(y), !0 === e.stopped)) break;
                    }
                  }
                })(f, l, d, function (e) {
                  let t = e.eventObject,
                    n = t.__r3f,
                    i = null == n ? void 0 : n.handlers;
                  if (null != n && n.eventCount) {
                    if (s) {
                      if (
                        i.onPointerOver ||
                        i.onPointerEnter ||
                        i.onPointerOut ||
                        i.onPointerLeave
                      ) {
                        let t = G(e),
                          n = o.hovered.get(t);
                        n
                          ? n.stopped && e.stopPropagation()
                          : (o.hovered.set(t, e),
                            null == i.onPointerOver || i.onPointerOver(e),
                            null == i.onPointerEnter || i.onPointerEnter(e));
                      }
                      null == i.onPointerMove || i.onPointerMove(e);
                    } else {
                      let n = i[a];
                      n
                        ? (!c || o.initialHits.includes(t)) &&
                          (r(
                            l,
                            o.interaction.filter(
                              (e) => !o.initialHits.includes(e)
                            )
                          ),
                          n(e))
                        : c &&
                          o.initialHits.includes(t) &&
                          r(
                            l,
                            o.interaction.filter(
                              (e) => !o.initialHits.includes(e)
                            )
                          );
                    }
                  }
                });
            };
          },
        };
      }
      let J = (e) => !!(null != e && e.render),
        ee = s.createContext(null),
        et = (e, t) => {
          let n = (function (e) {
              let t =
                  "function" == typeof e
                    ? (function (e) {
                        let t;
                        let n = new Set(),
                          r = (e, r) => {
                            let a = "function" == typeof e ? e(t) : e;
                            if (a !== t) {
                              let e = t;
                              (t = r ? a : Object.assign({}, t, a)),
                                n.forEach((n) => n(t, e));
                            }
                          },
                          a = () => t,
                          l = (e, r = a, l = Object.is) => {
                            console.warn(
                              "[DEPRECATED] Please use `subscribeWithSelector` middleware"
                            );
                            let i = r(t);
                            function o() {
                              let n = r(t);
                              if (!l(i, n)) {
                                let t = i;
                                e((i = n), t);
                              }
                            }
                            return n.add(o), () => n.delete(o);
                          },
                          i = {
                            setState: r,
                            getState: a,
                            subscribe: (e, t, r) =>
                              t || r
                                ? l(e, t, r)
                                : (n.add(e), () => n.delete(e)),
                            destroy: () => n.clear(),
                          };
                        return (t = e(r, a, i)), i;
                      })(e)
                    : e,
                n = (e = t.getState, n = Object.is) => {
                  let r;
                  let [, a] = (0, s.useReducer)((e) => e + 1, 0),
                    l = t.getState(),
                    i = (0, s.useRef)(l),
                    o = (0, s.useRef)(e),
                    u = (0, s.useRef)(n),
                    c = (0, s.useRef)(!1),
                    d = (0, s.useRef)();
                  void 0 === d.current && (d.current = e(l));
                  let p = !1;
                  (i.current !== l ||
                    o.current !== e ||
                    u.current !== n ||
                    c.current) &&
                    ((r = e(l)), (p = !n(d.current, r))),
                    f(() => {
                      p && (d.current = r),
                        (i.current = l),
                        (o.current = e),
                        (u.current = n),
                        (c.current = !1);
                    });
                  let h = (0, s.useRef)(l);
                  f(() => {
                    let e = () => {
                        try {
                          let e = t.getState(),
                            n = o.current(e);
                          u.current(d.current, n) ||
                            ((i.current = e), (d.current = n), a());
                        } catch (e) {
                          (c.current = !0), a();
                        }
                      },
                      n = t.subscribe(e);
                    return t.getState() !== h.current && e(), n;
                  }, []);
                  let v = p ? r : d.current;
                  return (0, s.useDebugValue)(v), v;
                };
              return (
                Object.assign(n, t),
                (n[Symbol.iterator] = function () {
                  console.warn(
                    "[useStore, api] = create() is deprecated and will be removed in v4"
                  );
                  let e = [n, t];
                  return {
                    next() {
                      let t = e.length <= 0;
                      return { value: e.shift(), done: t };
                    },
                  };
                }),
                n
              );
            })((n, r) => {
              let a;
              let l = new u.Vector3(),
                i = new u.Vector3(),
                o = new u.Vector3();
              function c(e = r().camera, t = i, n = r().size) {
                let { width: a, height: s, top: c, left: f } = n,
                  d = a / s;
                t instanceof u.Vector3 ? o.copy(t) : o.set(...t);
                let p = e.getWorldPosition(l).distanceTo(o);
                if (E(e))
                  return {
                    width: a / e.zoom,
                    height: s / e.zoom,
                    top: c,
                    left: f,
                    factor: 1,
                    distance: p,
                    aspect: d,
                  };
                {
                  let t = 2 * Math.tan((e.fov * Math.PI) / 180 / 2) * p,
                    n = (a / s) * t;
                  return {
                    width: n,
                    height: t,
                    top: c,
                    left: f,
                    factor: a / n,
                    distance: p,
                    aspect: d,
                  };
                }
              }
              let f = (e) =>
                  n((t) => ({ performance: { ...t.performance, current: e } })),
                d = new u.Vector2();
              return {
                set: n,
                get: r,
                gl: null,
                camera: null,
                raycaster: null,
                events: { priority: 1, enabled: !0, connected: !1 },
                xr: null,
                scene: null,
                invalidate: (t = 1) => e(r(), t),
                advance: (e, n) => t(e, n, r()),
                legacy: !1,
                linear: !1,
                flat: !1,
                controls: null,
                clock: new u.Clock(),
                pointer: d,
                mouse: d,
                frameloop: "always",
                onPointerMissed: void 0,
                performance: {
                  current: 1,
                  min: 0.5,
                  max: 1,
                  debounce: 200,
                  regress: () => {
                    let e = r();
                    a && clearTimeout(a),
                      e.performance.current !== e.performance.min &&
                        f(e.performance.min),
                      (a = setTimeout(
                        () => f(r().performance.max),
                        e.performance.debounce
                      ));
                  },
                },
                size: { width: 0, height: 0, top: 0, left: 0, updateStyle: !1 },
                viewport: {
                  initialDpr: 0,
                  dpr: 0,
                  width: 0,
                  height: 0,
                  top: 0,
                  left: 0,
                  aspect: 0,
                  distance: 0,
                  factor: 0,
                  getCurrentViewport: c,
                },
                setEvents: (e) =>
                  n((t) => ({ ...t, events: { ...t.events, ...e } })),
                setSize: (e, t, a, l, o) => {
                  let u = r().camera,
                    s = {
                      width: e,
                      height: t,
                      top: l || 0,
                      left: o || 0,
                      updateStyle: a,
                    };
                  n((e) => ({
                    size: s,
                    viewport: { ...e.viewport, ...c(u, i, s) },
                  }));
                },
                setDpr: (e) =>
                  n((t) => {
                    let n = D(e);
                    return {
                      viewport: {
                        ...t.viewport,
                        dpr: n,
                        initialDpr: t.viewport.initialDpr || n,
                      },
                    };
                  }),
                setFrameloop: (e = "always") => {
                  let t = r().clock;
                  t.stop(),
                    (t.elapsedTime = 0),
                    "never" !== e && (t.start(), (t.elapsedTime = 0)),
                    n(() => ({ frameloop: e }));
                },
                previousRoot: void 0,
                internal: {
                  active: !1,
                  priority: 0,
                  frames: 0,
                  lastEvent: s.createRef(),
                  interaction: [],
                  hovered: new Map(),
                  subscribers: [],
                  initialClick: [0, 0],
                  initialHits: [],
                  capturedMap: new Map(),
                  subscribe: (e, t, n) => {
                    let a = r().internal;
                    return (
                      (a.priority = a.priority + (t > 0 ? 1 : 0)),
                      a.subscribers.push({ ref: e, priority: t, store: n }),
                      (a.subscribers = a.subscribers.sort(
                        (e, t) => e.priority - t.priority
                      )),
                      () => {
                        let n = r().internal;
                        null != n &&
                          n.subscribers &&
                          ((n.priority = n.priority - (t > 0 ? 1 : 0)),
                          (n.subscribers = n.subscribers.filter(
                            (t) => t.ref !== e
                          )));
                      }
                    );
                  },
                },
              };
            }),
            r = n.getState(),
            a = r.size,
            l = r.viewport.dpr,
            i = r.camera;
          return (
            n.subscribe(() => {
              let {
                camera: e,
                size: t,
                viewport: r,
                gl: o,
                set: u,
              } = n.getState();
              if (t.width !== a.width || t.height !== a.height || r.dpr !== l) {
                var s;
                (a = t),
                  (l = r.dpr),
                  e.manual ||
                    (E(e)
                      ? ((e.left = -(t.width / 2)),
                        (e.right = t.width / 2),
                        (e.top = t.height / 2),
                        (e.bottom = -(t.height / 2)))
                      : (e.aspect = t.width / t.height),
                    e.updateProjectionMatrix(),
                    e.updateMatrixWorld()),
                  o.setPixelRatio(r.dpr);
                let n =
                  null != (s = t.updateStyle)
                    ? s
                    : "undefined" != typeof HTMLCanvasElement &&
                      o.domElement instanceof HTMLCanvasElement;
                o.setSize(t.width, t.height, n);
              }
              e !== i &&
                ((i = e),
                u((t) => ({
                  viewport: {
                    ...t.viewport,
                    ...t.viewport.getCurrentViewport(e),
                  },
                })));
            }),
            n.subscribe((t) => e(t)),
            n
          );
        },
        en = new Set(),
        er = new Set(),
        ea = new Set();
      function el(e, t) {
        if (e.size) for (let { callback: n } of e.values()) n(t);
      }
      function ei(e, t) {
        switch (e) {
          case "before":
            return el(en, t);
          case "after":
            return el(er, t);
          case "tail":
            return el(ea, t);
        }
      }
      function eo(e, t, n) {
        let i = t.clock.getDelta();
        for (
          "never" === t.frameloop &&
            "number" == typeof e &&
            ((i = e - t.clock.elapsedTime),
            (t.clock.oldTime = t.clock.elapsedTime),
            (t.clock.elapsedTime = e)),
            a = t.internal.subscribers,
            r = 0;
          r < a.length;
          r++
        )
          (l = a[r]).ref.current(l.store.getState(), i, n);
        return (
          !t.internal.priority && t.gl.render && t.gl.render(t.scene, t.camera),
          (t.internal.frames = Math.max(0, t.internal.frames - 1)),
          "always" === t.frameloop ? 1 : t.internal.frames
        );
      }
      function eu() {
        let e = s.useContext(ee);
        if (!e)
          throw Error(
            "R3F: Hooks can only be used within the Canvas component!"
          );
        return e;
      }
      function es(e = (e) => e, t) {
        return eu()(e, t);
      }
      function ec(e, t = 0) {
        let n = eu(),
          r = n.getState().internal.subscribe,
          a = z(e);
        return M(() => r(a, t, n), [t, r, n]), null;
      }
      let ef = new WeakMap();
      function ed(e, t) {
        return function (n, ...r) {
          let a = ef.get(n);
          return (
            a || ((a = new n()), ef.set(n, a)),
            e && e(a),
            Promise.all(
              r.map(
                (e) =>
                  new Promise((n, r) =>
                    a.load(
                      e,
                      (e) => {
                        e.scene &&
                          Object.assign(
                            e,
                            (function (e) {
                              let t = { nodes: {}, materials: {} };
                              return (
                                e &&
                                  e.traverse((e) => {
                                    e.name && (t.nodes[e.name] = e),
                                      e.material &&
                                        !t.materials[e.material.name] &&
                                        (t.materials[e.material.name] =
                                          e.material);
                                  }),
                                t
                              );
                            })(e.scene)
                          ),
                          n(e);
                      },
                      t,
                      (t) =>
                        r(
                          Error(
                            `Could not load ${e}: ${
                              null == t ? void 0 : t.message
                            }`
                          )
                        )
                    )
                  )
              )
            ).finally(() => (null == a.dispose ? void 0 : a.dispose()))
          );
        };
      }
      function ep(e, t, n, r) {
        let a = Array.isArray(t) ? t : [t],
          l = b(ed(n, r), [e, ...a], { equal: U.equ });
        return Array.isArray(t) ? l : l[0];
      }
      (ep.preload = function (e, t, n) {
        let r = Array.isArray(t) ? t : [t];
        return x(ed(n), [e, ...r]);
      }),
        (ep.clear = function (e, t) {
          return w([e, ...(Array.isArray(t) ? t : [t])]);
        });
      let eh = new Map(),
        { invalidate: ev, advance: eg } = (function (e) {
          let t,
            n,
            r,
            a = !1;
          function l(i) {
            for (let u of ((n = requestAnimationFrame(l)),
            (a = !0),
            (t = 0),
            ei("before", i),
            e.values())) {
              var o;
              (r = u.store.getState()).internal.active &&
                ("always" === r.frameloop || r.internal.frames > 0) &&
                !(null != (o = r.gl.xr) && o.isPresenting) &&
                (t += eo(i, r));
            }
            if ((ei("after", i), 0 === t))
              return ei("tail", i), (a = !1), cancelAnimationFrame(n);
          }
          return {
            loop: l,
            invalidate: function t(n, r = 1) {
              var i;
              if (!n) return e.forEach((e) => t(e.store.getState()), r);
              (null != (i = n.gl.xr) && i.isPresenting) ||
                !n.internal.active ||
                "never" === n.frameloop ||
                ((n.internal.frames = Math.min(60, n.internal.frames + r)),
                a || ((a = !0), requestAnimationFrame(l)));
            },
            advance: function (t, n = !0, r, a) {
              if ((n && ei("before", t), r)) eo(t, r, a);
              else for (let n of e.values()) eo(t, n.store.getState());
              n && ei("after", t);
            },
          };
        })(eh),
        { reconciler: em, applyProps: ey } = (function (e, t) {
          function n(e, { args: t = [], attach: n, ...r }, a) {
            let l,
              i = `${e[0].toUpperCase()}${e.slice(1)}`;
            if ("primitive" === e) {
              if (void 0 === r.object)
                throw Error("R3F: Primitives without 'object' are invalid!");
              l = B(r.object, { type: e, root: a, attach: n, primitive: !0 });
            } else {
              let r = _[i];
              if (!r)
                throw Error(
                  `R3F: ${i} is not part of the THREE namespace! Did you forget to extend? See: https://docs.pmnd.rs/react-three-fiber/api/objects#using-3rd-party-objects-declaratively`
                );
              if (!Array.isArray(t))
                throw Error("R3F: The args prop must be an array!");
              l = B(new r(...t), {
                type: e,
                root: a,
                attach: n,
                memoizedProps: { args: t },
              });
            }
            return (
              void 0 === l.__r3f.attach &&
                (l instanceof u.BufferGeometry
                  ? (l.__r3f.attach = "geometry")
                  : l instanceof u.Material && (l.__r3f.attach = "material")),
              "inject" !== i && X(l, r),
              l
            );
          }
          function r(e, t) {
            let n = !1;
            if (t) {
              var r, a;
              null != (r = t.__r3f) && r.attach
                ? H(e, t, t.__r3f.attach)
                : t.isObject3D && e.isObject3D && (e.add(t), (n = !0)),
                n || null == (a = e.__r3f) || a.objects.push(t),
                t.__r3f || B(t, {}),
                (t.__r3f.parent = e),
                $(t),
                q(t);
            }
          }
          function a(e, t, n) {
            let r = !1;
            if (t) {
              var a, l;
              if (null != (a = t.__r3f) && a.attach) H(e, t, t.__r3f.attach);
              else if (t.isObject3D && e.isObject3D) {
                (t.parent = e), t.dispatchEvent({ type: "added" });
                let a = e.children.filter((e) => e !== t),
                  l = a.indexOf(n);
                (e.children = [...a.slice(0, l), t, ...a.slice(l)]), (r = !0);
              }
              r || null == (l = e.__r3f) || l.objects.push(t),
                t.__r3f || B(t, {}),
                (t.__r3f.parent = e),
                $(t),
                q(t);
            }
          }
          function l(e, t, n = !1) {
            e && [...e].forEach((e) => i(t, e, n));
          }
          function i(e, t, n) {
            if (t) {
              var r, a, i, o, u;
              t.__r3f && (t.__r3f.parent = null),
                null != (r = e.__r3f) &&
                  r.objects &&
                  (e.__r3f.objects = e.__r3f.objects.filter((e) => e !== t)),
                null != (a = t.__r3f) && a.attach
                  ? W(e, t, t.__r3f.attach)
                  : t.isObject3D &&
                    e.isObject3D &&
                    (e.remove(t),
                    null != (o = t.__r3f) &&
                      o.root &&
                      (function (e, t) {
                        let { internal: n } = e.getState();
                        (n.interaction = n.interaction.filter((e) => e !== t)),
                          (n.initialHits = n.initialHits.filter(
                            (e) => e !== t
                          )),
                          n.hovered.forEach((e, r) => {
                            (e.eventObject === t || e.object === t) &&
                              n.hovered.delete(r);
                          }),
                          n.capturedMap.forEach((e, r) => {
                            Z(n.capturedMap, t, e, r);
                          });
                      })(A(t), t));
              let s = null == (i = t.__r3f) ? void 0 : i.primitive,
                c = !s && (void 0 === n ? null !== t.dispose : n);
              if (
                (s ||
                  (l(null == (u = t.__r3f) ? void 0 : u.objects, t, c),
                  l(t.children, t, c)),
                delete t.__r3f,
                c && t.dispose && "Scene" !== t.type)
              ) {
                let e = () => {
                  try {
                    t.dispose();
                  } catch (e) {}
                };
                "undefined" == typeof IS_REACT_ACT_ENVIRONMENT
                  ? (0, h.unstable_scheduleCallback)(h.unstable_IdlePriority, e)
                  : e();
              }
              q(e);
            }
          }
          let o = () =>
            console.warn(
              "Text is not allowed in the R3F tree! This could be stray whitespace or characters."
            );
          return {
            reconciler: p()({
              createInstance: n,
              removeChild: i,
              appendChild: r,
              appendInitialChild: r,
              insertBefore: a,
              supportsMutation: !0,
              isPrimaryRenderer: !1,
              supportsPersistence: !1,
              supportsHydration: !1,
              noTimeout: -1,
              appendChildToContainer: (e, t) => {
                if (!t) return;
                let n = e.getState().scene;
                n.__r3f && ((n.__r3f.root = e), r(n, t));
              },
              removeChildFromContainer: (e, t) => {
                t && i(e.getState().scene, t);
              },
              insertInContainerBefore: (e, t, n) => {
                if (!t || !n) return;
                let r = e.getState().scene;
                r.__r3f && a(r, t, n);
              },
              getRootHostContext: () => null,
              getChildHostContext: (e) => e,
              finalizeInitialChildren(e) {
                var t;
                return !!(null != (t = null == e ? void 0 : e.__r3f) ? t : {})
                  .handlers;
              },
              prepareUpdate(e, t, n, r) {
                var a;
                if (
                  (null != (a = null == e ? void 0 : e.__r3f) ? a : {})
                    .primitive &&
                  r.object &&
                  r.object !== e
                )
                  return [!0];
                {
                  let { args: t = [], children: a, ...l } = r,
                    { args: i = [], children: o, ...u } = n;
                  if (!Array.isArray(t))
                    throw Error("R3F: the args prop must be an array!");
                  if (t.some((e, t) => e !== i[t])) return [!0];
                  let s = Y(e, l, u, !0);
                  return s.changes.length ? [!1, s] : null;
                }
              },
              commitUpdate(e, [t, a], l, o, u, s) {
                t
                  ? (function (e, t, a, l) {
                      var o;
                      let u = null == (o = e.__r3f) ? void 0 : o.parent;
                      if (!u) return;
                      let s = n(t, a, e.__r3f.root);
                      if (e.children) {
                        for (let t of e.children) t.__r3f && r(s, t);
                        e.children = e.children.filter((e) => !e.__r3f);
                      }
                      e.__r3f.objects.forEach((e) => r(s, e)),
                        (e.__r3f.objects = []),
                        e.__r3f.autoRemovedBeforeAppend || i(u, e),
                        s.parent && (s.__r3f.autoRemovedBeforeAppend = !0),
                        r(u, s),
                        s.raycast &&
                          s.__r3f.eventCount &&
                          A(s).getState().internal.interaction.push(s),
                        [l, l.alternate].forEach((e) => {
                          null !== e &&
                            ((e.stateNode = s),
                            e.ref &&
                              ("function" == typeof e.ref
                                ? e.ref(s)
                                : (e.ref.current = s)));
                        });
                    })(e, l, u, s)
                  : X(e, a);
              },
              commitMount(e, t, n, r) {
                var a;
                let l = null != (a = e.__r3f) ? a : {};
                e.raycast &&
                  l.handlers &&
                  l.eventCount &&
                  A(e).getState().internal.interaction.push(e);
              },
              getPublicInstance: (e) => e,
              prepareForCommit: () => null,
              preparePortalMount: (e) => B(e.getState().scene),
              resetAfterCommit: () => {},
              shouldSetTextContent: () => !1,
              clearContainer: () => !1,
              hideInstance(e) {
                var t;
                let { attach: n, parent: r } = null != (t = e.__r3f) ? t : {};
                n && r && W(r, e, n), e.isObject3D && (e.visible = !1), q(e);
              },
              unhideInstance(e, t) {
                var n;
                let { attach: r, parent: a } = null != (n = e.__r3f) ? n : {};
                r && a && H(a, e, r),
                  ((e.isObject3D && null == t.visible) || t.visible) &&
                    (e.visible = !0),
                  q(e);
              },
              createTextInstance: o,
              hideTextInstance: o,
              unhideTextInstance: o,
              getCurrentEventPriority: () => (t ? t() : c.DefaultEventPriority),
              beforeActiveInstanceBlur: () => {},
              afterActiveInstanceBlur: () => {},
              detachDeletedInstance: () => {},
              now:
                "undefined" != typeof performance && U.fun(performance.now)
                  ? performance.now
                  : U.fun(Date.now)
                  ? Date.now
                  : () => 0,
              scheduleTimeout: U.fun(setTimeout) ? setTimeout : void 0,
              cancelTimeout: U.fun(clearTimeout) ? clearTimeout : void 0,
            }),
            applyProps: X,
          };
        })(0, function () {
          var e;
          let t =
            ("undefined" != typeof self && self) ||
            ("undefined" != typeof window && window);
          if (!t) return c.DefaultEventPriority;
          switch (null == (e = t.event) ? void 0 : e.type) {
            case "click":
            case "contextmenu":
            case "dblclick":
            case "pointercancel":
            case "pointerdown":
            case "pointerup":
              return c.DiscreteEventPriority;
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerenter":
            case "pointerleave":
            case "wheel":
              return c.ContinuousEventPriority;
            default:
              return c.DefaultEventPriority;
          }
        }),
        eb = { objects: "shallow", strict: !1 },
        ex = (e, t) => {
          let n = "function" == typeof e ? e(t) : e;
          return J(n)
            ? n
            : new u.WebGLRenderer({
                powerPreference: "high-performance",
                canvas: t,
                antialias: !0,
                alpha: !0,
                ...e,
              });
        };
      function ew(e) {
        let t, n;
        let r = eh.get(e),
          a = null == r ? void 0 : r.fiber,
          l = null == r ? void 0 : r.store;
        r && console.warn("R3F.createRoot should only be called once!");
        let i = "function" == typeof reportError ? reportError : console.error,
          o = l || et(ev, eg),
          f =
            a ||
            em.createContainer(
              o,
              c.ConcurrentRoot,
              null,
              !1,
              null,
              "",
              i,
              null
            );
        r || eh.set(e, { fiber: f, store: o });
        let d = !1;
        return {
          configure(r = {}) {
            var a, l;
            let {
                gl: i,
                size: s,
                scene: c,
                events: f,
                onCreated: p,
                shadows: h = !1,
                linear: v = !1,
                flat: g = !1,
                legacy: m = !1,
                orthographic: y = !1,
                frameloop: b = "always",
                dpr: x = [1, 2],
                performance: w,
                raycaster: S,
                camera: _,
                onPointerMissed: k,
              } = r,
              P = o.getState(),
              E = P.gl;
            P.gl || P.set({ gl: (E = ex(i, e)) });
            let T = P.raycaster;
            T || P.set({ raycaster: (T = new u.Raycaster()) });
            let { params: M, ...z } = S || {};
            if (
              (U.equ(z, T, eb) || ey(T, { ...z }),
              U.equ(M, T.params, eb) ||
                ey(T, { params: { ...T.params, ...M } }),
              !P.camera || (P.camera === n && !U.equ(n, _, eb)))
            ) {
              n = _;
              let e = _ instanceof u.Camera,
                t = e
                  ? _
                  : y
                  ? new u.OrthographicCamera(0, 0, 0, 0, 0.1, 1e3)
                  : new u.PerspectiveCamera(75, 0, 0.1, 1e3);
              e ||
                ((t.position.z = 5),
                _ && ey(t, _),
                P.camera || (null != _ && _.rotation) || t.lookAt(0, 0, 0)),
                P.set({ camera: t }),
                (T.camera = t);
            }
            if (!P.scene) {
              let e;
              c instanceof u.Scene
                ? (e = c)
                : ((e = new u.Scene()), c && ey(e, c)),
                P.set({ scene: B(e) });
            }
            if (!P.xr) {
              let e = (e, t) => {
                  let n = o.getState();
                  "never" !== n.frameloop && eg(e, !0, n, t);
                },
                t = () => {
                  let t = o.getState();
                  (t.gl.xr.enabled = t.gl.xr.isPresenting),
                    t.gl.xr.setAnimationLoop(t.gl.xr.isPresenting ? e : null),
                    t.gl.xr.isPresenting || ev(t);
                },
                n = {
                  connect() {
                    let e = o.getState().gl;
                    e.xr.addEventListener("sessionstart", t),
                      e.xr.addEventListener("sessionend", t);
                  },
                  disconnect() {
                    let e = o.getState().gl;
                    e.xr.removeEventListener("sessionstart", t),
                      e.xr.removeEventListener("sessionend", t);
                  },
                };
              "function" ==
                typeof (null == (a = E.xr) ? void 0 : a.addEventListener) &&
                n.connect(),
                P.set({ xr: n });
            }
            if (E.shadowMap) {
              let e = E.shadowMap.enabled,
                t = E.shadowMap.type;
              if (((E.shadowMap.enabled = !!h), U.boo(h)))
                E.shadowMap.type = u.PCFSoftShadowMap;
              else if (U.str(h)) {
                let e = {
                  basic: u.BasicShadowMap,
                  percentage: u.PCFShadowMap,
                  soft: u.PCFSoftShadowMap,
                  variance: u.VSMShadowMap,
                };
                E.shadowMap.type = null != (l = e[h]) ? l : u.PCFSoftShadowMap;
              } else U.obj(h) && Object.assign(E.shadowMap, h);
              (e !== E.shadowMap.enabled || t !== E.shadowMap.type) &&
                (E.shadowMap.needsUpdate = !0);
            }
            let R = C();
            R &&
              ("enabled" in R
                ? (R.enabled = !m)
                : "legacyMode" in R && (R.legacyMode = m)),
              ey(E, {
                outputEncoding: v ? 3e3 : 3001,
                toneMapping: g ? u.NoToneMapping : u.ACESFilmicToneMapping,
              }),
              P.legacy !== m && P.set(() => ({ legacy: m })),
              P.linear !== v && P.set(() => ({ linear: v })),
              P.flat !== g && P.set(() => ({ flat: g })),
              !i || U.fun(i) || J(i) || U.equ(i, E, eb) || ey(E, i),
              f && !P.events.handlers && P.set({ events: f(o) });
            let O = (function (e, t) {
              let n =
                "undefined" != typeof HTMLCanvasElement &&
                e instanceof HTMLCanvasElement;
              if (t) {
                let {
                  width: e,
                  height: r,
                  top: a,
                  left: l,
                  updateStyle: i = n,
                } = t;
                return { width: e, height: r, top: a, left: l, updateStyle: i };
              }
              if (
                "undefined" != typeof HTMLCanvasElement &&
                e instanceof HTMLCanvasElement &&
                e.parentElement
              ) {
                let {
                  width: t,
                  height: r,
                  top: a,
                  left: l,
                } = e.parentElement.getBoundingClientRect();
                return { width: t, height: r, top: a, left: l, updateStyle: n };
              }
              return "undefined" != typeof OffscreenCanvas &&
                e instanceof OffscreenCanvas
                ? {
                    width: e.width,
                    height: e.height,
                    top: 0,
                    left: 0,
                    updateStyle: n,
                  }
                : { width: 0, height: 0, top: 0, left: 0 };
            })(e, s);
            return (
              U.equ(O, P.size, eb) ||
                P.setSize(O.width, O.height, O.updateStyle, O.top, O.left),
              x && P.viewport.dpr !== D(x) && P.setDpr(x),
              P.frameloop !== b && P.setFrameloop(b),
              P.onPointerMissed || P.set({ onPointerMissed: k }),
              w &&
                !U.equ(w, P.performance, eb) &&
                P.set((e) => ({ performance: { ...e.performance, ...w } })),
              (t = p),
              (d = !0),
              this
            );
          },
          render(n) {
            return (
              d || this.configure(),
              em.updateContainer(
                s.createElement(eS, {
                  store: o,
                  children: n,
                  onCreated: t,
                  rootElement: e,
                }),
                f,
                null,
                () => void 0
              ),
              o
            );
          },
          unmount() {
            e_(e);
          },
        };
      }
      function eS({ store: e, children: t, onCreated: n, rootElement: r }) {
        return (
          M(() => {
            let t = e.getState();
            t.set((e) => ({ internal: { ...e.internal, active: !0 } })),
              n && n(t),
              e.getState().events.connected ||
                null == t.events.connect ||
                t.events.connect(r);
          }, []),
          s.createElement(ee.Provider, { value: e }, t)
        );
      }
      function e_(e, t) {
        let n = eh.get(e),
          r = null == n ? void 0 : n.fiber;
        if (r) {
          let a = null == n ? void 0 : n.store.getState();
          a && (a.internal.active = !1),
            em.updateContainer(null, r, null, () => {
              a &&
                setTimeout(() => {
                  try {
                    var n, r, l, i;
                    null == a.events.disconnect || a.events.disconnect(),
                      null == (n = a.gl) ||
                        null == (r = n.renderLists) ||
                        null == r.dispose ||
                        r.dispose(),
                      null == (l = a.gl) ||
                        null == l.forceContextLoss ||
                        l.forceContextLoss(),
                      null != (i = a.gl) && i.xr && a.xr.disconnect(),
                      (function (e) {
                        for (let t in (e.dispose &&
                          "Scene" !== e.type &&
                          e.dispose(),
                        e))
                          null == t.dispose || t.dispose(), delete e[t];
                      })(a),
                      eh.delete(e),
                      t && t(e);
                  } catch (e) {}
                }, 500);
            });
        }
      }
      em.injectIntoDevTools({
        bundleType: 0,
        rendererPackageName: "@react-three/fiber",
        version: s.version,
      }),
        s.unstable_act;
    },
    40109: function (e, t, n) {
      "use strict";
      n.d(t, {
        Xz: function () {
          return T;
        },
      });
      var r = n(45672),
        a = n(83082),
        l = n(96682),
        i = n(77486),
        o = n(26770),
        u = n.n(o);
      let s = ["x", "y", "top", "bottom", "left", "right", "width", "height"],
        c = (e, t) => s.every((n) => e[n] === t[n]);
      var f = Object.defineProperty,
        d = Object.defineProperties,
        p = Object.getOwnPropertyDescriptors,
        h = Object.getOwnPropertySymbols,
        v = Object.prototype.hasOwnProperty,
        g = Object.prototype.propertyIsEnumerable,
        m = (e, t, n) =>
          t in e
            ? f(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n,
              })
            : (e[t] = n),
        y = (e, t) => {
          for (var n in t || (t = {})) v.call(t, n) && m(e, n, t[n]);
          if (h) for (var n of h(t)) g.call(t, n) && m(e, n, t[n]);
          return e;
        },
        b = (e, t) => d(e, p(t));
      function x(e) {
        try {
          return Object.defineProperties(e, {
            _currentRenderer: { get: () => null, set() {} },
            _currentRenderer2: { get: () => null, set() {} },
          });
        } catch (t) {
          return e;
        }
      }
      let w = x(l.createContext(null));
      class S extends l.Component {
        render() {
          return l.createElement(
            w.Provider,
            { value: this._reactInternals },
            this.props.children
          );
        }
      }
      let { ReactCurrentOwner: _, ReactCurrentDispatcher: k } =
        l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
      n(58573), n(84640), n(31321);
      let P = {
        onClick: ["click", !1],
        onContextMenu: ["contextmenu", !1],
        onDoubleClick: ["dblclick", !1],
        onWheel: ["wheel", !0],
        onPointerDown: ["pointerdown", !0],
        onPointerUp: ["pointerup", !0],
        onPointerLeave: ["pointerleave", !0],
        onPointerMove: ["pointermove", !0],
        onPointerCancel: ["pointercancel", !0],
        onLostPointerCapture: ["lostpointercapture", !0],
      };
      function C(e) {
        let { handlePointer: t } = (0, r.c)(e);
        return {
          priority: 1,
          enabled: !0,
          compute(e, t, n) {
            t.pointer.set(
              (e.offsetX / t.size.width) * 2 - 1,
              -((e.offsetY / t.size.height) * 2) + 1
            ),
              t.raycaster.setFromCamera(t.pointer, t.camera);
          },
          connected: void 0,
          handlers: Object.keys(P).reduce((e, n) => ({ ...e, [n]: t(n) }), {}),
          update: () => {
            var t;
            let { events: n, internal: r } = e.getState();
            null != (t = r.lastEvent) &&
              t.current &&
              n.handlers &&
              n.handlers.onPointerMove(r.lastEvent.current);
          },
          connect: (t) => {
            var n;
            let { set: r, events: a } = e.getState();
            null == a.disconnect || a.disconnect(),
              r((e) => ({ events: { ...e.events, connected: t } })),
              Object.entries(null != (n = a.handlers) ? n : []).forEach(
                ([e, n]) => {
                  let [r, a] = P[e];
                  t.addEventListener(r, n, { passive: a });
                }
              );
          },
          disconnect: () => {
            let { set: t, events: n } = e.getState();
            if (n.connected) {
              var r;
              Object.entries(null != (r = n.handlers) ? r : []).forEach(
                ([e, t]) => {
                  if (n && n.connected instanceof HTMLElement) {
                    let [r] = P[e];
                    n.connected.removeEventListener(r, t);
                  }
                }
              ),
                t((e) => ({ events: { ...e.events, connected: void 0 } }));
            }
          },
        };
      }
      let E = l.forwardRef(function (
          {
            children: e,
            fallback: t,
            resize: n,
            style: o,
            gl: s,
            events: f = C,
            eventSource: d,
            eventPrefix: p,
            shadows: h,
            linear: v,
            flat: g,
            legacy: m,
            orthographic: P,
            frameloop: E,
            dpr: T,
            performance: M,
            raycaster: z,
            camera: R,
            scene: O,
            onPointerMissed: N,
            onCreated: I,
            ...L
          },
          D
        ) {
          l.useMemo(() => (0, r.e)(i), []);
          let F = (function () {
              let e = (function () {
                var e, t;
                let n = (function () {
                    let e = l.useContext(w);
                    if (null === e)
                      throw Error(
                        "its-fine: useFiber must be called within a <FiberProvider />!"
                      );
                    let t = l.useId();
                    return l.useMemo(() => {
                      for (let n of [
                        null == _ ? void 0 : _.current,
                        e,
                        null == e ? void 0 : e.alternate,
                      ]) {
                        if (!n) continue;
                        let e = (function e(t, n, r) {
                          if (!t) return;
                          if (!0 === r(t)) return t;
                          let a = n ? t.return : t.child;
                          for (; a; ) {
                            let t = e(a, n, r);
                            if (t) return t;
                            a = n ? null : a.sibling;
                          }
                        })(n, !1, (e) => {
                          let n = e.memoizedState;
                          for (; n; ) {
                            if (n.memoizedState === t) return !0;
                            n = n.next;
                          }
                        });
                        if (e) return e;
                      }
                    }, [e, t]);
                  })(),
                  [r] = l.useState(() => new Map());
                r.clear();
                let a = n;
                for (; a; ) {
                  let n = null == (e = a.type) ? void 0 : e._context;
                  n &&
                    n !== w &&
                    !r.has(n) &&
                    r.set(
                      n,
                      null == (t = null == k ? void 0 : k.current)
                        ? void 0
                        : t.readContext(x(n))
                    ),
                    (a = a.return);
                }
                return r;
              })();
              return l.useMemo(
                () =>
                  Array.from(e.keys()).reduce(
                    (t, n) => (r) =>
                      l.createElement(
                        t,
                        null,
                        l.createElement(
                          n.Provider,
                          b(y({}, r), { value: e.get(n) })
                        )
                      ),
                    (e) => l.createElement(S, y({}, e))
                  ),
                [e]
              );
            })(),
            [A, U] = (function (e) {
              var t;
              let {
                  debounce: n,
                  scroll: r,
                  polyfill: a,
                  offsetSize: i,
                } = void 0 === e
                  ? { debounce: 0, scroll: !1, offsetSize: !1 }
                  : e,
                o =
                  a ||
                  ("undefined" == typeof window
                    ? class {}
                    : window.ResizeObserver);
              if (!o)
                throw Error(
                  "This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills"
                );
              let [s, f] = (0, l.useState)({
                  left: 0,
                  top: 0,
                  width: 0,
                  height: 0,
                  bottom: 0,
                  right: 0,
                  x: 0,
                  y: 0,
                }),
                d = (0, l.useRef)({
                  element: null,
                  scrollContainers: null,
                  resizeObserver: null,
                  lastBounds: s,
                }),
                p = n ? ("number" == typeof n ? n : n.scroll) : null,
                h = n ? ("number" == typeof n ? n : n.resize) : null,
                v = (0, l.useRef)(!1);
              (0, l.useEffect)(
                () => ((v.current = !0), () => void (v.current = !1))
              );
              let [g, m, y] = (0, l.useMemo)(() => {
                let e = () => {
                  if (!d.current.element) return;
                  let {
                      left: e,
                      top: t,
                      width: n,
                      height: r,
                      bottom: a,
                      right: l,
                      x: o,
                      y: u,
                    } = d.current.element.getBoundingClientRect(),
                    s = {
                      left: e,
                      top: t,
                      width: n,
                      height: r,
                      bottom: a,
                      right: l,
                      x: o,
                      y: u,
                    };
                  d.current.element instanceof HTMLElement &&
                    i &&
                    ((s.height = d.current.element.offsetHeight),
                    (s.width = d.current.element.offsetWidth)),
                    Object.freeze(s),
                    v.current &&
                      !c(d.current.lastBounds, s) &&
                      f((d.current.lastBounds = s));
                };
                return [e, h ? u()(e, h) : e, p ? u()(e, p) : e];
              }, [f, i, p, h]);
              function b() {
                d.current.scrollContainers &&
                  (d.current.scrollContainers.forEach((e) =>
                    e.removeEventListener("scroll", y, !0)
                  ),
                  (d.current.scrollContainers = null)),
                  d.current.resizeObserver &&
                    (d.current.resizeObserver.disconnect(),
                    (d.current.resizeObserver = null));
              }
              function x() {
                d.current.element &&
                  ((d.current.resizeObserver = new o(y)),
                  d.current.resizeObserver.observe(d.current.element),
                  r &&
                    d.current.scrollContainers &&
                    d.current.scrollContainers.forEach((e) =>
                      e.addEventListener("scroll", y, {
                        capture: !0,
                        passive: !0,
                      })
                    ));
              }
              return (
                (t = !!r),
                (0, l.useEffect)(() => {
                  if (t)
                    return (
                      window.addEventListener("scroll", y, {
                        capture: !0,
                        passive: !0,
                      }),
                      () => void window.removeEventListener("scroll", y, !0)
                    );
                }, [y, t]),
                (0, l.useEffect)(
                  () => (
                    window.addEventListener("resize", m),
                    () => void window.removeEventListener("resize", m)
                  ),
                  [m]
                ),
                (0, l.useEffect)(() => {
                  b(), x();
                }, [r, y, m]),
                (0, l.useEffect)(() => b, []),
                [
                  (e) => {
                    e &&
                      e !== d.current.element &&
                      (b(),
                      (d.current.element = e),
                      (d.current.scrollContainers = (function e(t) {
                        let n = [];
                        if (!t || t === document.body) return n;
                        let {
                          overflow: r,
                          overflowX: a,
                          overflowY: l,
                        } = window.getComputedStyle(t);
                        return (
                          [r, a, l].some(
                            (e) => "auto" === e || "scroll" === e
                          ) && n.push(t),
                          [...n, ...e(t.parentElement)]
                        );
                      })(e)),
                      x());
                  },
                  s,
                  g,
                ]
              );
            })({ scroll: !0, debounce: { scroll: 50, resize: 0 }, ...n }),
            B = l.useRef(null),
            j = l.useRef(null);
          l.useImperativeHandle(D, () => B.current);
          let V = (0, r.u)(N),
            [H, W] = l.useState(!1),
            [Y, Q] = l.useState(!1);
          if (H) throw H;
          if (Y) throw Y;
          let X = l.useRef(null);
          (0, r.a)(() => {
            let t = B.current;
            U.width > 0 &&
              U.height > 0 &&
              t &&
              (X.current || (X.current = (0, r.b)(t)),
              X.current.configure({
                gl: s,
                events: f,
                shadows: h,
                linear: v,
                flat: g,
                legacy: m,
                orthographic: P,
                frameloop: E,
                dpr: T,
                performance: M,
                raycaster: z,
                camera: R,
                scene: O,
                size: U,
                onPointerMissed: (...e) =>
                  null == V.current ? void 0 : V.current(...e),
                onCreated: (e) => {
                  null == e.events.connect ||
                    e.events.connect(
                      d ? ((0, r.i)(d) ? d.current : d) : j.current
                    ),
                    p &&
                      e.setEvents({
                        compute: (e, t) => {
                          let n = e[p + "X"],
                            r = e[p + "Y"];
                          t.pointer.set(
                            (n / t.size.width) * 2 - 1,
                            -((r / t.size.height) * 2) + 1
                          ),
                            t.raycaster.setFromCamera(t.pointer, t.camera);
                        },
                      }),
                    null == I || I(e);
                },
              }),
              X.current.render(
                l.createElement(
                  F,
                  null,
                  l.createElement(
                    r.E,
                    { set: Q },
                    l.createElement(
                      l.Suspense,
                      { fallback: l.createElement(r.B, { set: W }) },
                      e
                    )
                  )
                )
              ));
          }),
            l.useEffect(() => {
              let e = B.current;
              if (e) return () => (0, r.d)(e);
            }, []);
          let q = d ? "none" : "auto";
          return l.createElement(
            "div",
            (0, a.Z)(
              {
                ref: j,
                style: {
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                  pointerEvents: q,
                  ...o,
                },
              },
              L
            ),
            l.createElement(
              "div",
              { ref: A, style: { width: "100%", height: "100%" } },
              l.createElement(
                "canvas",
                { ref: B, style: { display: "block" } },
                t
              )
            )
          );
        }),
        T = l.forwardRef(function (e, t) {
          return l.createElement(
            S,
            null,
            l.createElement(E, (0, a.Z)({}, e, { ref: t }))
          );
        });
    },
    26770: function (e) {
      function t(e, t, n) {
        function r() {
          var s = Date.now() - o;
          s < t && s >= 0
            ? (a = setTimeout(r, t - s))
            : ((a = null), n || ((u = e.apply(i, l)), (i = l = null)));
        }
        null == t && (t = 100);
        var a,
          l,
          i,
          o,
          u,
          s = function () {
            (i = this), (l = arguments), (o = Date.now());
            var s = n && !a;
            return (
              a || (a = setTimeout(r, t)),
              s && ((u = e.apply(i, l)), (i = l = null)),
              u
            );
          };
        return (
          (s.clear = function () {
            a && (clearTimeout(a), (a = null));
          }),
          (s.flush = function () {
            a &&
              ((u = e.apply(i, l)),
              (i = l = null),
              clearTimeout(a),
              (a = null));
          }),
          s
        );
      }
      (t.debounce = t), (e.exports = t);
    },
    30874: function (e, t) {
      !(function (e) {
        "use strict";
        function t(e, t) {
          for (var n = 0; n < t.length; n++) {
            var r = t[n];
            (r.enumerable = r.enumerable || !1),
              (r.configurable = !0),
              "value" in r && (r.writable = !0),
              Object.defineProperty(e, r.key, r);
          }
        }
        /*!
         * Observer 3.12.4
         * https://gsap.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var n,
          r,
          a,
          l,
          i,
          o,
          u,
          s,
          c,
          f,
          d,
          p,
          h,
          v = function () {
            return (
              n ||
              ("undefined" != typeof window &&
                (n = window.gsap) &&
                n.registerPlugin &&
                n)
            );
          },
          g = 1,
          m = [],
          y = [],
          b = [],
          x = Date.now,
          w = function (e, t) {
            return t;
          },
          S = function () {
            var e = c.core,
              t = e.bridge || {},
              n = e._scrollers,
              r = e._proxies;
            n.push.apply(n, y),
              r.push.apply(r, b),
              (y = n),
              (b = r),
              (w = function (e, n) {
                return t[e](n);
              });
          },
          _ = function (e, t) {
            return ~b.indexOf(e) && b[b.indexOf(e) + 1][t];
          },
          k = function (e) {
            return !!~f.indexOf(e);
          },
          P = function (e, t, n, r, a) {
            return e.addEventListener(t, n, { passive: !r, capture: !!a });
          },
          C = function (e, t, n, r) {
            return e.removeEventListener(t, n, !!r);
          },
          E = "scrollLeft",
          T = "scrollTop",
          M = function () {
            return (d && d.isPressed) || y.cache++;
          },
          z = function (e, t) {
            var n = function n(r) {
              if (r || 0 === r) {
                g && (a.history.scrollRestoration = "manual");
                var l = d && d.isPressed;
                e((r = n.v = Math.round(r) || (d && d.iOS ? 1 : 0))),
                  (n.cacheID = y.cache),
                  l && w("ss", r);
              } else
                (t || y.cache !== n.cacheID || w("ref")) &&
                  ((n.cacheID = y.cache), (n.v = e()));
              return n.v + n.offset;
            };
            return (n.offset = 0), e && n;
          },
          R = {
            s: E,
            p: "left",
            p2: "Left",
            os: "right",
            os2: "Right",
            d: "width",
            d2: "Width",
            a: "x",
            sc: z(function (e) {
              return arguments.length
                ? a.scrollTo(e, O.sc())
                : a.pageXOffset || l[E] || i[E] || o[E] || 0;
            }),
          },
          O = {
            s: T,
            p: "top",
            p2: "Top",
            os: "bottom",
            os2: "Bottom",
            d: "height",
            d2: "Height",
            a: "y",
            op: R,
            sc: z(function (e) {
              return arguments.length
                ? a.scrollTo(R.sc(), e)
                : a.pageYOffset || l[T] || i[T] || o[T] || 0;
            }),
          },
          N = function (e, t) {
            return (
              ((t && t._ctx && t._ctx.selector) || n.utils.toArray)(e)[0] ||
              ("string" == typeof e && !1 !== n.config().nullTargetWarn
                ? console.warn("Element not found:", e)
                : null)
            );
          },
          I = function (e, t) {
            var r = t.s,
              a = t.sc;
            k(e) && (e = l.scrollingElement || i);
            var o = y.indexOf(e),
              u = a === O.sc ? 1 : 2;
            ~o || (o = y.push(e) - 1), y[o + u] || P(e, "scroll", M);
            var s = y[o + u],
              c =
                s ||
                (y[o + u] =
                  z(_(e, r), !0) ||
                  (k(e)
                    ? a
                    : z(function (t) {
                        return arguments.length ? (e[r] = t) : e[r];
                      })));
            return (
              (c.target = e),
              s || (c.smooth = "smooth" === n.getProperty(e, "scrollBehavior")),
              c
            );
          },
          L = function (e, t, n) {
            var r = e,
              a = e,
              l = x(),
              i = l,
              o = t || 50,
              u = Math.max(500, 3 * o),
              s = function (e, t) {
                var u = x();
                t || u - l > o
                  ? ((a = r), (r = e), (i = l), (l = u))
                  : n
                  ? (r += e)
                  : (r = a + ((e - a) / (u - i)) * (l - i));
              };
            return {
              update: s,
              reset: function () {
                (a = r = n ? 0 : r), (i = l = 0);
              },
              getVelocity: function (e) {
                var t = i,
                  o = a,
                  c = x();
                return (
                  (e || 0 === e) && e !== r && s(e),
                  l === i || c - i > u
                    ? 0
                    : ((r + (n ? o : -o)) / ((n ? c : l) - t)) * 1e3
                );
              },
            };
          },
          D = function (e, t) {
            return (
              t && !e._gsapAllow && e.preventDefault(),
              e.changedTouches ? e.changedTouches[0] : e
            );
          },
          F = function (e) {
            var t = Math.max.apply(Math, e),
              n = Math.min.apply(Math, e);
            return Math.abs(t) >= Math.abs(n) ? t : n;
          },
          A = function () {
            (c = n.core.globals().ScrollTrigger) && c.core && S();
          },
          U = function (e) {
            return (
              (n = e || v()),
              !r &&
                n &&
                "undefined" != typeof document &&
                document.body &&
                ((a = window),
                (i = (l = document).documentElement),
                (o = l.body),
                (f = [a, l, i, o]),
                n.utils.clamp,
                (h = n.core.context || function () {}),
                (s = "onpointerenter" in o ? "pointer" : "mouse"),
                (u = B.isTouch =
                  a.matchMedia &&
                  a.matchMedia("(hover: none), (pointer: coarse)").matches
                    ? 1
                    : "ontouchstart" in a ||
                      navigator.maxTouchPoints > 0 ||
                      navigator.msMaxTouchPoints > 0
                    ? 2
                    : 0),
                (p = B.eventTypes =
                  (
                    "ontouchstart" in i
                      ? "touchstart,touchmove,touchcancel,touchend"
                      : "onpointerdown" in i
                      ? "pointerdown,pointermove,pointercancel,pointerup"
                      : "mousedown,mousemove,mouseup,mouseup"
                  ).split(",")),
                setTimeout(function () {
                  return (g = 0);
                }, 500),
                A(),
                (r = 1)),
              r
            );
          };
        (R.op = O), (y.cache = 0);
        var B = (function () {
          var e;
          function f(e) {
            this.init(e);
          }
          return (
            (f.prototype.init = function (e) {
              r || U(n) || console.warn("Please gsap.registerPlugin(Observer)"),
                c || A();
              var t = e.tolerance,
                f = e.dragMinimum,
                v = e.type,
                g = e.target,
                y = e.lineHeight,
                b = e.debounce,
                w = e.preventDefault,
                S = e.onStop,
                _ = e.onStopDelay,
                E = e.ignore,
                T = e.wheelSpeed,
                z = e.event,
                B = e.onDragStart,
                j = e.onDragEnd,
                V = e.onDrag,
                H = e.onPress,
                W = e.onRelease,
                Y = e.onRight,
                Q = e.onLeft,
                X = e.onUp,
                q = e.onDown,
                $ = e.onChangeX,
                G = e.onChangeY,
                Z = e.onChange,
                K = e.onToggleX,
                J = e.onToggleY,
                ee = e.onHover,
                et = e.onHoverEnd,
                en = e.onMove,
                er = e.ignoreCheck,
                ea = e.isNormalizer,
                el = e.onGestureStart,
                ei = e.onGestureEnd,
                eo = e.onWheel,
                eu = e.onEnable,
                es = e.onDisable,
                ec = e.onClick,
                ef = e.scrollSpeed,
                ed = e.capture,
                ep = e.allowClicks,
                eh = e.lockAxis,
                ev = e.onLockAxis;
              (this.target = g = N(g) || i),
                (this.vars = e),
                E && (E = n.utils.toArray(E)),
                (t = t || 1e-9),
                (f = f || 0),
                (T = T || 1),
                (ef = ef || 1),
                (v = v || "wheel,touch,pointer"),
                (b = !1 !== b),
                y || (y = parseFloat(a.getComputedStyle(o).lineHeight) || 22);
              var eg,
                em,
                ey,
                eb,
                ex,
                ew,
                eS,
                e_ = this,
                ek = 0,
                eP = 0,
                eC = I(g, R),
                eE = I(g, O),
                eT = eC(),
                eM = eE(),
                ez =
                  ~v.indexOf("touch") &&
                  !~v.indexOf("pointer") &&
                  "pointerdown" === p[0],
                eR = k(g),
                eO = g.ownerDocument || l,
                eN = [0, 0, 0],
                eI = [0, 0, 0],
                eL = 0,
                eD = function () {
                  return (eL = x());
                },
                eF = function (e, t) {
                  return (
                    ((e_.event = e) && E && ~E.indexOf(e.target)) ||
                    (t && ez && "touch" !== e.pointerType) ||
                    (er && er(e, t))
                  );
                },
                eA = function () {
                  var e = (e_.deltaX = F(eN)),
                    n = (e_.deltaY = F(eI)),
                    r = Math.abs(e) >= t,
                    a = Math.abs(n) >= t;
                  Z && (r || a) && Z(e_, e, n, eN, eI),
                    r &&
                      (Y && e_.deltaX > 0 && Y(e_),
                      Q && e_.deltaX < 0 && Q(e_),
                      $ && $(e_),
                      K && e_.deltaX < 0 != ek < 0 && K(e_),
                      (ek = e_.deltaX),
                      (eN[0] = eN[1] = eN[2] = 0)),
                    a &&
                      (q && e_.deltaY > 0 && q(e_),
                      X && e_.deltaY < 0 && X(e_),
                      G && G(e_),
                      J && e_.deltaY < 0 != eP < 0 && J(e_),
                      (eP = e_.deltaY),
                      (eI[0] = eI[1] = eI[2] = 0)),
                    (eb || ey) &&
                      (en && en(e_), ey && (V(e_), (ey = !1)), (eb = !1)),
                    ew && ((ew = !1), 1) && ev && ev(e_),
                    ex && (eo(e_), (ex = !1)),
                    (eg = 0);
                },
                eU = function (e, t, n) {
                  (eN[n] += e),
                    (eI[n] += t),
                    e_._vx.update(e),
                    e_._vy.update(t),
                    b ? eg || (eg = requestAnimationFrame(eA)) : eA();
                },
                eB = function (e, t) {
                  eh &&
                    !eS &&
                    ((e_.axis = eS = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                    (ew = !0)),
                    "y" !== eS && ((eN[2] += e), e_._vx.update(e, !0)),
                    "x" !== eS && ((eI[2] += t), e_._vy.update(t, !0)),
                    b ? eg || (eg = requestAnimationFrame(eA)) : eA();
                },
                ej = function (e) {
                  if (!eF(e, 1)) {
                    var t = (e = D(e, w)).clientX,
                      n = e.clientY,
                      r = t - e_.x,
                      a = n - e_.y,
                      l = e_.isDragging;
                    (e_.x = t),
                      (e_.y = n),
                      (l ||
                        Math.abs(e_.startX - t) >= f ||
                        Math.abs(e_.startY - n) >= f) &&
                        (V && (ey = !0),
                        l || (e_.isDragging = !0),
                        eB(r, a),
                        l || (B && B(e_)));
                  }
                },
                eV = (e_.onPress = function (e) {
                  eF(e, 1) ||
                    (e && e.button) ||
                    ((e_.axis = eS = null),
                    em.pause(),
                    (e_.isPressed = !0),
                    (e = D(e)),
                    (ek = eP = 0),
                    (e_.startX = e_.x = e.clientX),
                    (e_.startY = e_.y = e.clientY),
                    e_._vx.reset(),
                    e_._vy.reset(),
                    P(ea ? g : eO, p[1], ej, w, !0),
                    (e_.deltaX = e_.deltaY = 0),
                    H && H(e_));
                }),
                eH = (e_.onRelease = function (e) {
                  if (!eF(e, 1)) {
                    C(ea ? g : eO, p[1], ej, !0);
                    var t = !isNaN(e_.y - e_.startY),
                      r = e_.isDragging,
                      l =
                        r &&
                        (Math.abs(e_.x - e_.startX) > 3 ||
                          Math.abs(e_.y - e_.startY) > 3),
                      i = D(e);
                    !l &&
                      t &&
                      (e_._vx.reset(),
                      e_._vy.reset(),
                      w &&
                        ep &&
                        n.delayedCall(0.08, function () {
                          if (x() - eL > 300 && !e.defaultPrevented) {
                            if (e.target.click) e.target.click();
                            else if (eO.createEvent) {
                              var t = eO.createEvent("MouseEvents");
                              t.initMouseEvent(
                                "click",
                                !0,
                                !0,
                                a,
                                1,
                                i.screenX,
                                i.screenY,
                                i.clientX,
                                i.clientY,
                                !1,
                                !1,
                                !1,
                                !1,
                                0,
                                null
                              ),
                                e.target.dispatchEvent(t);
                            }
                          }
                        })),
                      (e_.isDragging = e_.isGesturing = e_.isPressed = !1),
                      S && r && !ea && em.restart(!0),
                      j && r && j(e_),
                      W && W(e_, l);
                  }
                }),
                eW = function (e) {
                  return (
                    e.touches &&
                    e.touches.length > 1 &&
                    (e_.isGesturing = !0) &&
                    el(e, e_.isDragging)
                  );
                },
                eY = function () {
                  return (e_.isGesturing = !1), ei(e_);
                },
                eQ = function (e) {
                  if (!eF(e)) {
                    var t = eC(),
                      n = eE();
                    eU((t - eT) * ef, (n - eM) * ef, 1),
                      (eT = t),
                      (eM = n),
                      S && em.restart(!0);
                  }
                },
                eX = function (e) {
                  if (!eF(e)) {
                    (e = D(e, w)), eo && (ex = !0);
                    var t =
                      (1 === e.deltaMode
                        ? y
                        : 2 === e.deltaMode
                        ? a.innerHeight
                        : 1) * T;
                    eU(e.deltaX * t, e.deltaY * t, 0),
                      S && !ea && em.restart(!0);
                  }
                },
                eq = function (e) {
                  if (!eF(e)) {
                    var t = e.clientX,
                      n = e.clientY,
                      r = t - e_.x,
                      a = n - e_.y;
                    (e_.x = t),
                      (e_.y = n),
                      (eb = !0),
                      S && em.restart(!0),
                      (r || a) && eB(r, a);
                  }
                },
                e$ = function (e) {
                  (e_.event = e), ee(e_);
                },
                eG = function (e) {
                  (e_.event = e), et(e_);
                },
                eZ = function (e) {
                  return eF(e) || (D(e, w) && ec(e_));
                };
              (em = e_._dc =
                n
                  .delayedCall(_ || 0.25, function () {
                    e_._vx.reset(), e_._vy.reset(), em.pause(), S && S(e_);
                  })
                  .pause()),
                (e_.deltaX = e_.deltaY = 0),
                (e_._vx = L(0, 50, !0)),
                (e_._vy = L(0, 50, !0)),
                (e_.scrollX = eC),
                (e_.scrollY = eE),
                (e_.isDragging = e_.isGesturing = e_.isPressed = !1),
                h(this),
                (e_.enable = function (e) {
                  return (
                    !e_.isEnabled &&
                      (P(eR ? eO : g, "scroll", M),
                      v.indexOf("scroll") >= 0 &&
                        P(eR ? eO : g, "scroll", eQ, w, ed),
                      v.indexOf("wheel") >= 0 && P(g, "wheel", eX, w, ed),
                      ((v.indexOf("touch") >= 0 && u) ||
                        v.indexOf("pointer") >= 0) &&
                        (P(g, p[0], eV, w, ed),
                        P(eO, p[2], eH),
                        P(eO, p[3], eH),
                        ep && P(g, "click", eD, !1, !0),
                        ec && P(g, "click", eZ),
                        el && P(eO, "gesturestart", eW),
                        ei && P(eO, "gestureend", eY),
                        ee && P(g, s + "enter", e$),
                        et && P(g, s + "leave", eG),
                        en && P(g, s + "move", eq)),
                      (e_.isEnabled = !0),
                      e && e.type && eV(e),
                      eu && eu(e_)),
                    e_
                  );
                }),
                (e_.disable = function () {
                  e_.isEnabled &&
                    (m.filter(function (e) {
                      return e !== e_ && k(e.target);
                    }).length || C(eR ? eO : g, "scroll", M),
                    e_.isPressed &&
                      (e_._vx.reset(),
                      e_._vy.reset(),
                      C(ea ? g : eO, p[1], ej, !0)),
                    C(eR ? eO : g, "scroll", eQ, ed),
                    C(g, "wheel", eX, ed),
                    C(g, p[0], eV, ed),
                    C(eO, p[2], eH),
                    C(eO, p[3], eH),
                    C(g, "click", eD, !0),
                    C(g, "click", eZ),
                    C(eO, "gesturestart", eW),
                    C(eO, "gestureend", eY),
                    C(g, s + "enter", e$),
                    C(g, s + "leave", eG),
                    C(g, s + "move", eq),
                    (e_.isEnabled = e_.isPressed = e_.isDragging = !1),
                    es && es(e_));
                }),
                (e_.kill = e_.revert =
                  function () {
                    e_.disable();
                    var e = m.indexOf(e_);
                    e >= 0 && m.splice(e, 1), d === e_ && (d = 0);
                  }),
                m.push(e_),
                ea && k(g) && (d = e_),
                e_.enable(z);
            }),
            t(f.prototype, [
              {
                key: "velocityX",
                get: function () {
                  return this._vx.getVelocity();
                },
              },
              {
                key: "velocityY",
                get: function () {
                  return this._vy.getVelocity();
                },
              },
            ]),
            e && t(f, e),
            f
          );
        })();
        (B.version = "3.12.4"),
          (B.create = function (e) {
            return new B(e);
          }),
          (B.register = U),
          (B.getAll = function () {
            return m.slice();
          }),
          (B.getById = function (e) {
            return m.filter(function (t) {
              return t.vars.id === e;
            })[0];
          }),
          v() && n.registerPlugin(B);
        /*!
         * ScrollTrigger 3.12.4
         * https://gsap.com
         *
         * @license Copyright 2008-2023, GreenSock. All rights reserved.
         * Subject to the terms at https://gsap.com/standard-license or for
         * Club GSAP members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */ var j,
          V,
          H,
          W,
          Y,
          Q,
          X,
          q,
          $,
          G,
          Z,
          K,
          J,
          ee,
          et,
          en,
          er,
          ea,
          el,
          ei,
          eo,
          eu,
          es,
          ec,
          ef,
          ed,
          ep,
          eh,
          ev,
          eg,
          em,
          ey,
          eb,
          ex,
          ew,
          eS,
          e_,
          ek,
          eP = 1,
          eC = Date.now,
          eE = eC(),
          eT = 0,
          eM = 0,
          ez = function (e, t, n) {
            var r =
              eW(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
            return (
              (n["_" + t + "Clamp"] = r), r ? e.substr(6, e.length - 7) : e
            );
          },
          eR = function (e, t) {
            return t && (!eW(e) || "clamp(" !== e.substr(0, 6))
              ? "clamp(" + e + ")"
              : e;
          },
          eO = function () {
            return (ee = 1);
          },
          eN = function () {
            return (ee = 0);
          },
          eI = function (e) {
            return e;
          },
          eL = function (e) {
            return Math.round(1e5 * e) / 1e5 || 0;
          },
          eD = function () {
            return "undefined" != typeof window;
          },
          eF = function () {
            return j || (eD() && (j = window.gsap) && j.registerPlugin && j);
          },
          eA = function (e) {
            return !!~X.indexOf(e);
          },
          eU = function (e) {
            return (
              ("Height" === e ? em : H["inner" + e]) ||
              Y["client" + e] ||
              Q["client" + e]
            );
          },
          eB = function (e) {
            return (
              _(e, "getBoundingClientRect") ||
              (eA(e)
                ? function () {
                    return (tQ.width = H.innerWidth), (tQ.height = em), tQ;
                  }
                : function () {
                    return tn(e);
                  })
            );
          },
          ej = function (e, t, n) {
            var r = n.d,
              a = n.d2,
              l = n.a;
            return (l = _(e, "getBoundingClientRect"))
              ? function () {
                  return l()[r];
                }
              : function () {
                  return (t ? eU(a) : e["client" + a]) || 0;
                };
          },
          eV = function (e, t) {
            var n = t.s,
              r = t.d2,
              a = t.d,
              l = t.a;
            return Math.max(
              0,
              (l = _(e, (n = "scroll" + r)))
                ? l() - eB(e)()[a]
                : eA(e)
                ? (Y[n] || Q[n]) - eU(r)
                : e[n] - e["offset" + r]
            );
          },
          eH = function (e, t) {
            for (var n = 0; n < el.length; n += 3)
              (!t || ~t.indexOf(el[n + 1])) && e(el[n], el[n + 1], el[n + 2]);
          },
          eW = function (e) {
            return "string" == typeof e;
          },
          eY = function (e) {
            return "function" == typeof e;
          },
          eQ = function (e) {
            return "number" == typeof e;
          },
          eX = function (e) {
            return "object" == typeof e;
          },
          eq = function (e, t, n) {
            return e && e.progress(t ? 0 : 1) && n && e.pause();
          },
          e$ = function (e, t) {
            if (e.enabled) {
              var n = e._ctx
                ? e._ctx.add(function () {
                    return t(e);
                  })
                : t(e);
              n && n.totalTime && (e.callbackAnimation = n);
            }
          },
          eG = Math.abs,
          eZ = "left",
          eK = "right",
          eJ = "bottom",
          e0 = "width",
          e1 = "height",
          e2 = "Right",
          e3 = "Left",
          e4 = "Bottom",
          e5 = "padding",
          e6 = "margin",
          e8 = "Width",
          e7 = "Height",
          e9 = function (e) {
            return H.getComputedStyle(e);
          },
          te = function (e) {
            var t = e9(e).position;
            e.style.position =
              "absolute" === t || "fixed" === t ? t : "relative";
          },
          tt = function (e, t) {
            for (var n in t) n in e || (e[n] = t[n]);
            return e;
          },
          tn = function (e, t) {
            var n =
                t &&
                "matrix(1, 0, 0, 1, 0, 0)" !== e9(e)[et] &&
                j
                  .to(e, {
                    x: 0,
                    y: 0,
                    xPercent: 0,
                    yPercent: 0,
                    rotation: 0,
                    rotationX: 0,
                    rotationY: 0,
                    scale: 1,
                    skewX: 0,
                    skewY: 0,
                  })
                  .progress(1),
              r = e.getBoundingClientRect();
            return n && n.progress(0).kill(), r;
          },
          tr = function (e, t) {
            var n = t.d2;
            return e["offset" + n] || e["client" + n] || 0;
          },
          ta = function (e) {
            var t,
              n = [],
              r = e.labels,
              a = e.duration();
            for (t in r) n.push(r[t] / a);
            return n;
          },
          tl = function (e) {
            var t = j.utils.snap(e),
              n =
                Array.isArray(e) &&
                e.slice(0).sort(function (e, t) {
                  return e - t;
                });
            return n
              ? function (e, r, a) {
                  var l;
                  if ((void 0 === a && (a = 0.001), !r)) return t(e);
                  if (r > 0) {
                    for (e -= a, l = 0; l < n.length; l++)
                      if (n[l] >= e) return n[l];
                    return n[l - 1];
                  }
                  for (l = n.length, e += a; l--; ) if (n[l] <= e) return n[l];
                  return n[0];
                }
              : function (n, r, a) {
                  void 0 === a && (a = 0.001);
                  var l = t(n);
                  return !r || Math.abs(l - n) < a || l - n < 0 == r < 0
                    ? l
                    : t(r < 0 ? n - e : n + e);
                };
          },
          ti = function (e, t, n, r) {
            return n.split(",").forEach(function (n) {
              return e(t, n, r);
            });
          },
          to = function (e, t, n, r, a) {
            return e.addEventListener(t, n, { passive: !r, capture: !!a });
          },
          tu = function (e, t, n, r) {
            return e.removeEventListener(t, n, !!r);
          },
          ts = function (e, t, n) {
            (n = n && n.wheelHandler) &&
              (e(t, "wheel", n), e(t, "touchmove", n));
          },
          tc = {
            startColor: "green",
            endColor: "red",
            indent: 0,
            fontSize: "16px",
            fontWeight: "normal",
          },
          tf = { toggleActions: "play", anticipatePin: 0 },
          td = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
          tp = function (e, t) {
            if (eW(e)) {
              var n = e.indexOf("="),
                r = ~n
                  ? +(e.charAt(n - 1) + 1) * parseFloat(e.substr(n + 1))
                  : 0;
              ~n &&
                (e.indexOf("%") > n && (r *= t / 100),
                (e = e.substr(0, n - 1))),
                (e =
                  r +
                  (e in td
                    ? td[e] * t
                    : ~e.indexOf("%")
                    ? (parseFloat(e) * t) / 100
                    : parseFloat(e) || 0));
            }
            return e;
          },
          th = function (e, t, n, r, a, l, i, o) {
            var u = a.startColor,
              s = a.endColor,
              c = a.fontSize,
              f = a.indent,
              d = a.fontWeight,
              p = W.createElement("div"),
              h = eA(n) || "fixed" === _(n, "pinType"),
              v = -1 !== e.indexOf("scroller"),
              g = h ? Q : n,
              m = -1 !== e.indexOf("start"),
              y = m ? u : s,
              b =
                "border-color:" +
                y +
                ";font-size:" +
                c +
                ";color:" +
                y +
                ";font-weight:" +
                d +
                ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
            return (
              (b += "position:" + ((v || o) && h ? "fixed;" : "absolute;")),
              (v || o || !h) &&
                (b += (r === O ? eK : eJ) + ":" + (l + parseFloat(f)) + "px;"),
              i &&
                (b +=
                  "box-sizing:border-box;text-align:left;width:" +
                  i.offsetWidth +
                  "px;"),
              (p._isStart = m),
              p.setAttribute(
                "class",
                "gsap-marker-" + e + (t ? " marker-" + t : "")
              ),
              (p.style.cssText = b),
              (p.innerText = t || 0 === t ? e + "-" + t : e),
              g.children[0]
                ? g.insertBefore(p, g.children[0])
                : g.appendChild(p),
              (p._offset = p["offset" + r.op.d2]),
              tv(p, 0, r, m),
              p
            );
          },
          tv = function (e, t, n, r) {
            var a = { display: "block" },
              l = n[r ? "os2" : "p2"],
              i = n[r ? "p2" : "os2"];
            (e._isFlipped = r),
              (a[n.a + "Percent"] = r ? -100 : 0),
              (a[n.a] = r ? "1px" : 0),
              (a["border" + l + e8] = 1),
              (a["border" + i + e8] = 0),
              (a[n.p] = t + "px"),
              j.set(e, a);
          },
          tg = [],
          tm = {},
          ty = function () {
            return eC() - eT > 34 && (ew || (ew = requestAnimationFrame(tF)));
          },
          tb = function () {
            (es && es.isPressed && !(es.startX > Q.clientWidth)) ||
              (y.cache++,
              es ? ew || (ew = requestAnimationFrame(tF)) : tF(),
              eT || tP("scrollStart"),
              (eT = eC()));
          },
          tx = function () {
            (ed = H.innerWidth), (ef = H.innerHeight);
          },
          tw = function () {
            y.cache++,
              !(
                !J &&
                !eu &&
                !W.fullscreenElement &&
                !W.webkitFullscreenElement &&
                (!ec ||
                  ed !== H.innerWidth ||
                  Math.abs(H.innerHeight - ef) > 0.25 * H.innerHeight)
              ) || q.restart(!0);
          },
          tS = {},
          t_ = [],
          tk = function e() {
            return tu(tJ, "scrollEnd", e) || tI(!0);
          },
          tP = function (e) {
            return (
              (tS[e] &&
                tS[e].map(function (e) {
                  return e();
                })) ||
              t_
            );
          },
          tC = [],
          tE = function (e) {
            for (var t = 0; t < tC.length; t += 5)
              (!e || (tC[t + 4] && tC[t + 4].query === e)) &&
                ((tC[t].style.cssText = tC[t + 1]),
                tC[t].getBBox &&
                  tC[t].setAttribute("transform", tC[t + 2] || ""),
                (tC[t + 3].uncache = 1));
          },
          tT = function (e, t) {
            var n;
            for (en = 0; en < tg.length; en++)
              (n = tg[en]) &&
                (!t || n._ctx === t) &&
                (e ? n.kill(1) : n.revert(!0, !0));
            (ey = !0), t && tE(t), t || tP("revert");
          },
          tM = function (e, t) {
            y.cache++,
              (t || !eS) &&
                y.forEach(function (e) {
                  return eY(e) && e.cacheID++ && (e.rec = 0);
                }),
              eW(e) && (H.history.scrollRestoration = ev = e);
          },
          tz = 0,
          tR = function () {
            if (e_ !== tz) {
              var e = (e_ = tz);
              requestAnimationFrame(function () {
                return e === tz && tI(!0);
              });
            }
          },
          tO = function () {
            Q.appendChild(eg),
              (em = (!es && eg.offsetHeight) || H.innerHeight),
              Q.removeChild(eg);
          },
          tN = function (e) {
            return $(
              ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
            ).forEach(function (t) {
              return (t.style.display = e ? "none" : "block");
            });
          },
          tI = function (e, t) {
            if (eT && !e && !ey) {
              to(tJ, "scrollEnd", tk);
              return;
            }
            tO(),
              (eS = tJ.isRefreshing = !0),
              y.forEach(function (e) {
                return eY(e) && ++e.cacheID && (e.rec = e());
              });
            var n = tP("refreshInit");
            ei && tJ.sort(),
              t || tT(),
              y.forEach(function (e) {
                eY(e) &&
                  (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
              }),
              tg.slice(0).forEach(function (e) {
                return e.refresh();
              }),
              (ey = !1),
              tg.forEach(function (e) {
                if (e._subPinOffset && e.pin) {
                  var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                    n = e.pin[t];
                  e.revert(!0, 1),
                    e.adjustPinSpacing(e.pin[t] - n),
                    e.refresh();
                }
              }),
              (eb = 1),
              tN(!0),
              tg.forEach(function (e) {
                var t = eV(e.scroller, e._dir),
                  n = "max" === e.vars.end || (e._endClamp && e.end > t),
                  r = e._startClamp && e.start >= t;
                (n || r) &&
                  e.setPositions(
                    r ? t - 1 : e.start,
                    n ? Math.max(r ? t : e.start + 1, t) : e.end,
                    !0
                  );
              }),
              tN(!1),
              (eb = 0),
              n.forEach(function (e) {
                return e && e.render && e.render(-1);
              }),
              y.forEach(function (e) {
                eY(e) &&
                  (e.smooth &&
                    requestAnimationFrame(function () {
                      return (e.target.style.scrollBehavior = "smooth");
                    }),
                  e.rec && e(e.rec));
              }),
              tM(ev, 1),
              q.pause(),
              tz++,
              (eS = 2),
              tF(2),
              tg.forEach(function (e) {
                return eY(e.vars.onRefresh) && e.vars.onRefresh(e);
              }),
              (eS = tJ.isRefreshing = !1),
              tP("refresh");
          },
          tL = 0,
          tD = 1,
          tF = function (e) {
            if (2 === e || (!eS && !ey)) {
              (tJ.isUpdating = !0), ek && ek.update(0);
              var t = tg.length,
                n = eC(),
                r = n - eE >= 50,
                a = t && tg[0].scroll();
              if (
                ((tD = tL > a ? -1 : 1),
                eS || (tL = a),
                r &&
                  (eT && !ee && n - eT > 200 && ((eT = 0), tP("scrollEnd")),
                  (Z = eE),
                  (eE = n)),
                tD < 0)
              ) {
                for (en = t; en-- > 0; ) tg[en] && tg[en].update(0, r);
                tD = 1;
              } else for (en = 0; en < t; en++) tg[en] && tg[en].update(0, r);
              tJ.isUpdating = !1;
            }
            ew = 0;
          },
          tA = [
            eZ,
            "top",
            eJ,
            eK,
            e6 + e4,
            e6 + e2,
            e6 + "Top",
            e6 + e3,
            "display",
            "flexShrink",
            "float",
            "zIndex",
            "gridColumnStart",
            "gridColumnEnd",
            "gridRowStart",
            "gridRowEnd",
            "gridArea",
            "justifySelf",
            "alignSelf",
            "placeSelf",
            "order",
          ],
          tU = tA.concat([
            e0,
            e1,
            "boxSizing",
            "max" + e8,
            "max" + e7,
            "position",
            e6,
            e5,
            e5 + "Top",
            e5 + e2,
            e5 + e4,
            e5 + e3,
          ]),
          tB = function (e, t, n) {
            tH(n);
            var r = e._gsap;
            if (r.spacerIsNative) tH(r.spacerState);
            else if (e._gsap.swappedIn) {
              var a = t.parentNode;
              a && (a.insertBefore(e, t), a.removeChild(t));
            }
            e._gsap.swappedIn = !1;
          },
          tj = function (e, t, n, r) {
            if (!e._gsap.swappedIn) {
              for (var a, l = tA.length, i = t.style, o = e.style; l--; )
                i[(a = tA[l])] = n[a];
              (i.position =
                "absolute" === n.position ? "absolute" : "relative"),
                "inline" === n.display && (i.display = "inline-block"),
                (o[eJ] = o[eK] = "auto"),
                (i.flexBasis = n.flexBasis || "auto"),
                (i.overflow = "visible"),
                (i.boxSizing = "border-box"),
                (i[e0] = tr(e, R) + "px"),
                (i[e1] = tr(e, O) + "px"),
                (i[e5] = o[e6] = o.top = o[eZ] = "0"),
                tH(r),
                (o[e0] = o["max" + e8] = n[e0]),
                (o[e1] = o["max" + e7] = n[e1]),
                (o[e5] = n[e5]),
                e.parentNode !== t &&
                  (e.parentNode.insertBefore(t, e), t.appendChild(e)),
                (e._gsap.swappedIn = !0);
            }
          },
          tV = /([A-Z])/g,
          tH = function (e) {
            if (e) {
              var t,
                n,
                r = e.t.style,
                a = e.length,
                l = 0;
              for (
                (e.t._gsap || j.core.getCache(e.t)).uncache = 1;
                l < a;
                l += 2
              )
                (n = e[l + 1]),
                  (t = e[l]),
                  n
                    ? (r[t] = n)
                    : r[t] &&
                      r.removeProperty(t.replace(tV, "-$1").toLowerCase());
            }
          },
          tW = function (e) {
            for (var t = tU.length, n = e.style, r = [], a = 0; a < t; a++)
              r.push(tU[a], n[tU[a]]);
            return (r.t = e), r;
          },
          tY = function (e, t, n) {
            for (var r, a = [], l = e.length, i = n ? 8 : 0; i < l; i += 2)
              (r = e[i]), a.push(r, r in t ? t[r] : e[i + 1]);
            return (a.t = e.t), a;
          },
          tQ = { left: 0, top: 0 },
          tX = function (e, t, n, r, a, l, i, o, u, s, c, f, d, p) {
            eY(e) && (e = e(o)),
              eW(e) &&
                "max" === e.substr(0, 3) &&
                (e = f + ("=" === e.charAt(4) ? tp("0" + e.substr(3), n) : 0));
            var h,
              v,
              g,
              m = d ? d.time() : 0;
            if ((d && d.seek(0), isNaN(e) || (e = +e), eQ(e)))
              d &&
                (e = j.utils.mapRange(
                  d.scrollTrigger.start,
                  d.scrollTrigger.end,
                  0,
                  f,
                  e
                )),
                i && tv(i, n, r, !0);
            else {
              eY(t) && (t = t(o));
              var y,
                b,
                x,
                w,
                S = (e || "0").split(" ");
              (y = tn((g = N(t, o) || Q)) || {}).left ||
                y.top ||
                "none" !== e9(g).display ||
                ((w = g.style.display),
                (g.style.display = "block"),
                (y = tn(g)),
                w ? (g.style.display = w) : g.style.removeProperty("display")),
                (b = tp(S[0], y[r.d])),
                (x = tp(S[1] || "0", n)),
                (e = y[r.p] - u[r.p] - s + b + a - x),
                i && tv(i, x, r, n - x < 20 || (i._isStart && x > 20)),
                (n -= n - x);
            }
            if ((p && ((o[p] = e || -0.001), e < 0 && (e = 0)), l)) {
              var _ = e + n,
                k = l._isStart;
              (h = "scroll" + r.d2),
                tv(
                  l,
                  _,
                  r,
                  (k && _ > 20) ||
                    (!k &&
                      (c ? Math.max(Q[h], Y[h]) : l.parentNode[h]) <= _ + 1)
                ),
                c &&
                  ((u = tn(i)),
                  c &&
                    (l.style[r.op.p] = u[r.op.p] - r.op.m - l._offset + "px"));
            }
            return (
              d &&
                g &&
                ((h = tn(g)),
                d.seek(f),
                (v = tn(g)),
                (d._caScrollDist = h[r.p] - v[r.p]),
                (e = (e / d._caScrollDist) * f)),
              d && d.seek(m),
              d ? e : Math.round(e)
            );
          },
          tq = /(webkit|moz|length|cssText|inset)/i,
          t$ = function (e, t, n, r) {
            if (e.parentNode !== t) {
              var a,
                l,
                i = e.style;
              if (t === Q) {
                for (a in ((e._stOrig = i.cssText), (l = e9(e))))
                  +a ||
                    tq.test(a) ||
                    !l[a] ||
                    "string" != typeof i[a] ||
                    "0" === a ||
                    (i[a] = l[a]);
                (i.top = n), (i.left = r);
              } else i.cssText = e._stOrig;
              (j.core.getCache(e).uncache = 1), t.appendChild(e);
            }
          },
          tG = function (e, t, n) {
            var r = t,
              a = r;
            return function (t) {
              var l = Math.round(e());
              return (
                l !== r &&
                  l !== a &&
                  Math.abs(l - r) > 3 &&
                  Math.abs(l - a) > 3 &&
                  ((t = l), n && n()),
                (a = r),
                (r = t),
                t
              );
            };
          },
          tZ = function (e, t, n) {
            var r = {};
            (r[t.p] = "+=" + n), j.set(e, r);
          },
          tK = function (e, t) {
            var n = I(e, t),
              r = "_scroll" + t.p2,
              a = function t(a, l, i, o, u) {
                var s = t.tween,
                  c = l.onComplete,
                  f = {};
                i = i || n();
                var d = tG(n, i, function () {
                  s.kill(), (t.tween = 0);
                });
                return (
                  (u = (o && u) || 0),
                  (o = o || a - i),
                  s && s.kill(),
                  (l[r] = a),
                  (l.modifiers = f),
                  (f[r] = function () {
                    return d(i + o * s.ratio + u * s.ratio * s.ratio);
                  }),
                  (l.onUpdate = function () {
                    y.cache++, t.tween && tF();
                  }),
                  (l.onComplete = function () {
                    (t.tween = 0), c && c.call(s);
                  }),
                  (s = t.tween = j.to(e, l))
                );
              };
            return (
              (e[r] = n),
              (n.wheelHandler = function () {
                return a.tween && a.tween.kill() && (a.tween = 0);
              }),
              to(e, "wheel", n.wheelHandler),
              tJ.isTouch && to(e, "touchmove", n.wheelHandler),
              a
            );
          },
          tJ = (function () {
            function e(t, n) {
              V ||
                e.register(j) ||
                console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
                eh(this),
                this.init(t, n);
            }
            return (
              (e.prototype.init = function (t, n) {
                if (
                  ((this.progress = this.start = 0),
                  this.vars && this.kill(!0, !0),
                  !eM)
                ) {
                  this.update = this.refresh = this.kill = eI;
                  return;
                }
                var r,
                  a,
                  l,
                  i,
                  o,
                  u,
                  s,
                  c,
                  f,
                  d,
                  p,
                  h,
                  v,
                  g,
                  m,
                  x,
                  w,
                  S,
                  k,
                  P,
                  C,
                  E,
                  T,
                  M,
                  z,
                  L,
                  D,
                  F,
                  A,
                  U,
                  B,
                  V,
                  X,
                  q,
                  K,
                  et,
                  er,
                  ea,
                  el,
                  eu,
                  es,
                  ec = (t = tt(
                    eW(t) || eQ(t) || t.nodeType ? { trigger: t } : t,
                    tf
                  )),
                  ef = ec.onUpdate,
                  ed = ec.toggleClass,
                  ep = ec.id,
                  eh = ec.onToggle,
                  ev = ec.onRefresh,
                  eg = ec.scrub,
                  em = ec.trigger,
                  ey = ec.pin,
                  ew = ec.pinSpacing,
                  e_ = ec.invalidateOnRefresh,
                  eE = ec.anticipatePin,
                  eO = ec.onScrubComplete,
                  eN = ec.onSnapComplete,
                  eD = ec.once,
                  eF = ec.snap,
                  eU = ec.pinReparent,
                  eH = ec.pinSpacer,
                  eZ = ec.containerAnimation,
                  eK = ec.fastScrollEnd,
                  eJ = ec.preventOverlaps,
                  ti =
                    t.horizontal ||
                    (t.containerAnimation && !1 !== t.horizontal)
                      ? R
                      : O,
                  ts = !eg && 0 !== eg,
                  td = N(t.scroller || H),
                  tv = j.core.getCache(td),
                  ty = eA(td),
                  tx =
                    ("pinType" in t
                      ? t.pinType
                      : _(td, "pinType") || (ty && "fixed")) === "fixed",
                  tS = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                  t_ = ts && t.toggleActions.split(" "),
                  tP = "markers" in t ? t.markers : tf.markers,
                  tC = ty ? 0 : parseFloat(e9(td)["border" + ti.p2 + e8]) || 0,
                  tE = this,
                  tT =
                    t.onRefreshInit &&
                    function () {
                      return t.onRefreshInit(tE);
                    },
                  tM = ej(td, ty, ti),
                  tz =
                    !ty || ~b.indexOf(td)
                      ? eB(td)
                      : function () {
                          return tQ;
                        },
                  tO = 0,
                  tN = 0,
                  tI = 0,
                  tL = I(td, ti);
                if (
                  ((tE._startClamp = tE._endClamp = !1),
                  (tE._dir = ti),
                  (eE *= 45),
                  (tE.scroller = td),
                  (tE.scroll = eZ ? eZ.time.bind(eZ) : tL),
                  (u = tL()),
                  (tE.vars = t),
                  (n = n || t.animation),
                  "refreshPriority" in t &&
                    ((ei = 1), -9999 === t.refreshPriority && (ek = tE)),
                  (tv.tweenScroll = tv.tweenScroll || {
                    top: tK(td, O),
                    left: tK(td, R),
                  }),
                  (tE.tweenTo = l = tv.tweenScroll[ti.p]),
                  (tE.scrubDuration = function (e) {
                    (K = eQ(e) && e)
                      ? q
                        ? q.duration(e)
                        : (q = j.to(n, {
                            ease: "expo",
                            totalProgress: "+=0",
                            duration: K,
                            paused: !0,
                            onComplete: function () {
                              return eO && eO(tE);
                            },
                          }))
                      : (q && q.progress(1).kill(), (q = 0));
                  }),
                  n &&
                    ((n.vars.lazy = !1),
                    (n._initted && !tE.isReverted) ||
                      (!1 !== n.vars.immediateRender &&
                        !1 !== t.immediateRender &&
                        n.duration() &&
                        n.render(0, !0, !0)),
                    (tE.animation = n.pause()),
                    (n.scrollTrigger = tE),
                    tE.scrubDuration(eg),
                    (V = 0),
                    ep || (ep = n.vars.id)),
                  eF &&
                    ((!eX(eF) || eF.push) && (eF = { snapTo: eF }),
                    "scrollBehavior" in Q.style &&
                      j.set(ty ? [Q, Y] : td, { scrollBehavior: "auto" }),
                    y.forEach(function (e) {
                      return (
                        eY(e) &&
                        e.target === (ty ? W.scrollingElement || Y : td) &&
                        (e.smooth = !1)
                      );
                    }),
                    (o = eY(eF.snapTo)
                      ? eF.snapTo
                      : "labels" === eF.snapTo
                      ? ((r = n),
                        function (e) {
                          return j.utils.snap(ta(r), e);
                        })
                      : "labelsDirectional" === eF.snapTo
                      ? ((a = n),
                        function (e, t) {
                          return tl(ta(a))(e, t.direction);
                        })
                      : !1 !== eF.directional
                      ? function (e, t) {
                          return tl(eF.snapTo)(
                            e,
                            eC() - tN < 500 ? 0 : t.direction
                          );
                        }
                      : j.utils.snap(eF.snapTo)),
                    (et = eX((et = eF.duration || { min: 0.1, max: 2 }))
                      ? G(et.min, et.max)
                      : G(et, et)),
                    (er = j
                      .delayedCall(eF.delay || K / 2 || 0.1, function () {
                        var e = tL(),
                          t = eC() - tN < 500,
                          r = l.tween;
                        if (
                          (t || 10 > Math.abs(tE.getVelocity())) &&
                          !r &&
                          !ee &&
                          tO !== e
                        ) {
                          var a = (e - c) / x,
                            i = n && !ts ? n.totalProgress() : a,
                            u = t ? 0 : ((i - X) / (eC() - Z)) * 1e3 || 0,
                            s = j.utils.clamp(
                              -a,
                              1 - a,
                              (eG(u / 2) * u) / 0.185
                            ),
                            d = a + (!1 === eF.inertia ? 0 : s),
                            p = G(0, 1, o(d, tE)),
                            h = Math.round(c + p * x),
                            v = eF,
                            g = v.onStart,
                            m = v.onInterrupt,
                            y = v.onComplete;
                          if (e <= f && e >= c && h !== e) {
                            if (r && !r._initted && r.data <= eG(h - e)) return;
                            !1 === eF.inertia && (s = p - a),
                              l(
                                h,
                                {
                                  duration: et(
                                    eG(
                                      (0.185 * Math.max(eG(d - i), eG(p - i))) /
                                        u /
                                        0.05 || 0
                                    )
                                  ),
                                  ease: eF.ease || "power3",
                                  data: eG(h - e),
                                  onInterrupt: function () {
                                    return er.restart(!0) && m && m(tE);
                                  },
                                  onComplete: function () {
                                    tE.update(),
                                      (tO = tL()),
                                      q && n && n.progress(p),
                                      (V = X =
                                        n && !ts
                                          ? n.totalProgress()
                                          : tE.progress),
                                      eN && eN(tE),
                                      y && y(tE);
                                  },
                                },
                                e,
                                s * x,
                                h - e - s * x
                              ),
                              g && g(tE, l.tween);
                          }
                        } else tE.isActive && tO !== e && er.restart(!0);
                      })
                      .pause())),
                  ep && (tm[ep] = tE),
                  (es =
                    (em = tE.trigger = N(em || (!0 !== ey && ey))) &&
                    em._gsap &&
                    em._gsap.stRevert) && (es = es(tE)),
                  (ey = !0 === ey ? em : N(ey)),
                  eW(ed) && (ed = { targets: em, className: ed }),
                  ey &&
                    (!1 === ew ||
                      ew === e6 ||
                      (ew =
                        (!!ew ||
                          !ey.parentNode ||
                          !ey.parentNode.style ||
                          "flex" !== e9(ey.parentNode).display) &&
                        e5),
                    (tE.pin = ey),
                    (i = j.core.getCache(ey)).spacer
                      ? (w = i.pinState)
                      : (eH &&
                          ((eH = N(eH)) &&
                            !eH.nodeType &&
                            (eH = eH.current || eH.nativeElement),
                          (i.spacerIsNative = !!eH),
                          eH && (i.spacerState = tW(eH))),
                        (i.spacer = P = eH || W.createElement("div")),
                        P.classList.add("pin-spacer"),
                        ep && P.classList.add("pin-spacer-" + ep),
                        (i.pinState = w = tW(ey))),
                    !1 !== t.force3D && j.set(ey, { force3D: !0 }),
                    (tE.spacer = P = i.spacer),
                    (L = (B = e9(ey))[ew + ti.os2]),
                    (E = j.getProperty(ey)),
                    (T = j.quickSetter(ey, ti.a, "px")),
                    tj(ey, P, B),
                    (k = tW(ey))),
                  tP)
                ) {
                  (g = eX(tP) ? tt(tP, tc) : tc),
                    (h = th("scroller-start", ep, td, ti, g, 0)),
                    (v = th("scroller-end", ep, td, ti, g, 0, h)),
                    (C = h["offset" + ti.op.d2]);
                  var tF = N(_(td, "content") || td);
                  (d = this.markerStart = th("start", ep, tF, ti, g, C, 0, eZ)),
                    (p = this.markerEnd = th("end", ep, tF, ti, g, C, 0, eZ)),
                    eZ && (eu = j.quickSetter([d, p], ti.a, "px")),
                    tx ||
                      (b.length && !0 === _(td, "fixedMarkers")) ||
                      (te(ty ? Q : td),
                      j.set([h, v], { force3D: !0 }),
                      (F = j.quickSetter(h, ti.a, "px")),
                      (U = j.quickSetter(v, ti.a, "px")));
                }
                if (eZ) {
                  var tA = eZ.vars.onUpdate,
                    tU = eZ.vars.onUpdateParams;
                  eZ.eventCallback("onUpdate", function () {
                    tE.update(0, 0, 1), tA && tA.apply(eZ, tU || []);
                  });
                }
                if (
                  ((tE.previous = function () {
                    return tg[tg.indexOf(tE) - 1];
                  }),
                  (tE.next = function () {
                    return tg[tg.indexOf(tE) + 1];
                  }),
                  (tE.revert = function (e, t) {
                    if (!t) return tE.kill(!0);
                    var r = !1 !== e || !tE.enabled,
                      a = J;
                    r !== tE.isReverted &&
                      (r &&
                        ((ea = Math.max(tL(), tE.scroll.rec || 0)),
                        (tI = tE.progress),
                        (el = n && n.progress())),
                      d &&
                        [d, p, h, v].forEach(function (e) {
                          return (e.style.display = r ? "none" : "block");
                        }),
                      r && ((J = tE), tE.update(r)),
                      !ey ||
                        (eU && tE.isActive) ||
                        (r ? tB(ey, P, w) : tj(ey, P, e9(ey), D)),
                      r || tE.update(r),
                      (J = a),
                      (tE.isReverted = r));
                  }),
                  (tE.refresh = function (r, a, i, o) {
                    if ((!J && tE.enabled) || a) {
                      if (ey && r && eT) {
                        to(e, "scrollEnd", tk);
                        return;
                      }
                      !eS && tT && tT(tE),
                        (J = tE),
                        l.tween && !i && (l.tween.kill(), (l.tween = 0)),
                        q && q.pause(),
                        e_ && n && n.revert({ kill: !1 }).invalidate(),
                        tE.isReverted || tE.revert(!0, !0),
                        (tE._subPinOffset = !1);
                      var g,
                        y,
                        b,
                        _,
                        C,
                        T,
                        L,
                        F,
                        U,
                        B,
                        V,
                        H,
                        X,
                        $ = tM(),
                        G = tz(),
                        Z = eZ ? eZ.duration() : eV(td, ti),
                        K = x <= 0.01,
                        ee = 0,
                        et = o || 0,
                        en = eX(i) ? i.end : t.end,
                        ei = t.endTrigger || em,
                        eu = eX(i)
                          ? i.start
                          : t.start ||
                            (0 !== t.start && em ? (ey ? "0 0" : "0 100%") : 0),
                        es = (tE.pinnedContainer =
                          t.pinnedContainer && N(t.pinnedContainer, tE)),
                        ec = (em && Math.max(0, tg.indexOf(tE))) || 0,
                        ef = ec;
                      for (
                        tP &&
                        eX(i) &&
                        ((H = j.getProperty(h, ti.p)),
                        (X = j.getProperty(v, ti.p)));
                        ef--;

                      )
                        (T = tg[ef]).end || T.refresh(0, 1) || (J = tE),
                          (L = T.pin) &&
                            (L === em || L === ey || L === es) &&
                            !T.isReverted &&
                            (B || (B = []), B.unshift(T), T.revert(!0, !0)),
                          T !== tg[ef] && (ec--, ef--);
                      for (
                        eY(eu) && (eu = eu(tE)),
                          c =
                            tX(
                              (eu = ez(eu, "start", tE)),
                              em,
                              $,
                              ti,
                              tL(),
                              d,
                              h,
                              tE,
                              G,
                              tC,
                              tx,
                              Z,
                              eZ,
                              tE._startClamp && "_startClamp"
                            ) || (ey ? -0.001 : 0),
                          eY(en) && (en = en(tE)),
                          eW(en) &&
                            !en.indexOf("+=") &&
                            (~en.indexOf(" ")
                              ? (en = (eW(eu) ? eu.split(" ")[0] : "") + en)
                              : ((ee = tp(en.substr(2), $)),
                                (en = eW(eu)
                                  ? eu
                                  : (eZ
                                      ? j.utils.mapRange(
                                          0,
                                          eZ.duration(),
                                          eZ.scrollTrigger.start,
                                          eZ.scrollTrigger.end,
                                          c
                                        )
                                      : c) + ee),
                                (ei = em))),
                          en = ez(en, "end", tE),
                          f =
                            Math.max(
                              c,
                              tX(
                                en || (ei ? "100% 0" : Z),
                                ei,
                                $,
                                ti,
                                tL() + ee,
                                p,
                                v,
                                tE,
                                G,
                                tC,
                                tx,
                                Z,
                                eZ,
                                tE._endClamp && "_endClamp"
                              )
                            ) || -0.001,
                          ee = 0,
                          ef = ec;
                        ef--;

                      )
                        (L = (T = tg[ef]).pin) &&
                          T.start - T._pinPush <= c &&
                          !eZ &&
                          T.end > 0 &&
                          ((g =
                            T.end -
                            (tE._startClamp ? Math.max(0, T.start) : T.start)),
                          ((L === em && T.start - T._pinPush < c) ||
                            L === es) &&
                            isNaN(eu) &&
                            (ee += g * (1 - T.progress)),
                          L === ey && (et += g));
                      if (
                        ((c += ee),
                        (f += ee),
                        tE._startClamp && (tE._startClamp += ee),
                        tE._endClamp &&
                          !eS &&
                          ((tE._endClamp = f || -0.001),
                          (f = Math.min(f, eV(td, ti)))),
                        (x = f - c || ((c -= 0.01) && 0.001)),
                        K &&
                          (tI = j.utils.clamp(
                            0,
                            1,
                            j.utils.normalize(c, f, ea)
                          )),
                        (tE._pinPush = et),
                        d &&
                          ee &&
                          (((g = {})[ti.a] = "+=" + ee),
                          es && (g[ti.p] = "-=" + tL()),
                          j.set([d, p], g)),
                        ey && !(eb && tE.end >= eV(td, ti)))
                      )
                        (g = e9(ey)),
                          (_ = ti === O),
                          (b = tL()),
                          (M = parseFloat(E(ti.a)) + et),
                          !Z &&
                            f > 1 &&
                            ((V = {
                              style: (V = (ty ? W.scrollingElement || Y : td)
                                .style),
                              value: V["overflow" + ti.a.toUpperCase()],
                            }),
                            ty &&
                              "scroll" !==
                                e9(Q)["overflow" + ti.a.toUpperCase()] &&
                              (V.style["overflow" + ti.a.toUpperCase()] =
                                "scroll")),
                          tj(ey, P, g),
                          (k = tW(ey)),
                          (y = tn(ey, !0)),
                          (F = tx && I(td, _ ? R : O)()),
                          ew &&
                            (((D = [ew + ti.os2, x + et + "px"]).t = P),
                            (ef = ew === e5 ? tr(ey, ti) + x + et : 0) &&
                              (D.push(ti.d, ef + "px"),
                              "auto" !== P.style.flexBasis &&
                                (P.style.flexBasis = ef + "px")),
                            tH(D),
                            es &&
                              tg.forEach(function (e) {
                                e.pin === es &&
                                  !1 !== e.vars.pinSpacing &&
                                  (e._subPinOffset = !0);
                              }),
                            tx && tL(ea)),
                          tx &&
                            (((C = {
                              top: y.top + (_ ? b - c : F) + "px",
                              left: y.left + (_ ? F : b - c) + "px",
                              boxSizing: "border-box",
                              position: "fixed",
                            })[e0] = C["max" + e8] =
                              Math.ceil(y.width) + "px"),
                            (C[e1] = C["max" + e7] =
                              Math.ceil(y.height) + "px"),
                            (C[e6] =
                              C[e6 + "Top"] =
                              C[e6 + e2] =
                              C[e6 + e4] =
                              C[e6 + e3] =
                                "0"),
                            (C[e5] = g[e5]),
                            (C[e5 + "Top"] = g[e5 + "Top"]),
                            (C[e5 + e2] = g[e5 + e2]),
                            (C[e5 + e4] = g[e5 + e4]),
                            (C[e5 + e3] = g[e5 + e3]),
                            (S = tY(w, C, eU)),
                            eS && tL(0)),
                          n
                            ? ((U = n._initted),
                              eo(1),
                              n.render(n.duration(), !0, !0),
                              (z = E(ti.a) - M + x + et),
                              (A = Math.abs(x - z) > 1),
                              tx && A && S.splice(S.length - 2, 2),
                              n.render(0, !0, !0),
                              U || n.invalidate(!0),
                              n.parent || n.totalTime(n.totalTime()),
                              eo(0))
                            : (z = x),
                          V &&
                            (V.value
                              ? (V.style["overflow" + ti.a.toUpperCase()] =
                                  V.value)
                              : V.style.removeProperty("overflow-" + ti.a));
                      else if (em && tL() && !eZ)
                        for (y = em.parentNode; y && y !== Q; )
                          y._pinOffset &&
                            ((c -= y._pinOffset), (f -= y._pinOffset)),
                            (y = y.parentNode);
                      B &&
                        B.forEach(function (e) {
                          return e.revert(!1, !0);
                        }),
                        (tE.start = c),
                        (tE.end = f),
                        (u = s = eS ? ea : tL()),
                        eZ || eS || (u < ea && tL(ea), (tE.scroll.rec = 0)),
                        tE.revert(!1, !0),
                        (tN = eC()),
                        er && ((tO = -1), er.restart(!0)),
                        (J = 0),
                        n &&
                          ts &&
                          (n._initted || el) &&
                          n.progress() !== el &&
                          n.progress(el || 0, !0).render(n.time(), !0, !0),
                        (K || tI !== tE.progress || eZ) &&
                          (n &&
                            !ts &&
                            n.totalProgress(
                              eZ && c < -0.001 && !tI
                                ? j.utils.normalize(c, f, 0)
                                : tI,
                              !0
                            ),
                          (tE.progress = K || (u - c) / x === tI ? 0 : tI)),
                        ey &&
                          ew &&
                          (P._pinOffset = Math.round(tE.progress * z)),
                        q && q.invalidate(),
                        isNaN(H) ||
                          ((H -= j.getProperty(h, ti.p)),
                          (X -= j.getProperty(v, ti.p)),
                          tZ(h, ti, H),
                          tZ(d, ti, H - (o || 0)),
                          tZ(v, ti, X),
                          tZ(p, ti, X - (o || 0))),
                        K && !eS && tE.update(),
                        !ev || eS || m || ((m = !0), ev(tE), (m = !1));
                    }
                  }),
                  (tE.getVelocity = function () {
                    return ((tL() - s) / (eC() - Z)) * 1e3 || 0;
                  }),
                  (tE.endAnimation = function () {
                    eq(tE.callbackAnimation),
                      n &&
                        (q
                          ? q.progress(1)
                          : n.paused()
                          ? ts || eq(n, tE.direction < 0, 1)
                          : eq(n, n.reversed()));
                  }),
                  (tE.labelToScroll = function (e) {
                    return (
                      (n &&
                        n.labels &&
                        (c || tE.refresh() || c) +
                          (n.labels[e] / n.duration()) * x) ||
                      0
                    );
                  }),
                  (tE.getTrailing = function (e) {
                    var t = tg.indexOf(tE),
                      n =
                        tE.direction > 0
                          ? tg.slice(0, t).reverse()
                          : tg.slice(t + 1);
                    return (
                      eW(e)
                        ? n.filter(function (t) {
                            return t.vars.preventOverlaps === e;
                          })
                        : n
                    ).filter(function (e) {
                      return tE.direction > 0 ? e.end <= c : e.start >= f;
                    });
                  }),
                  (tE.update = function (e, t, r) {
                    if (!eZ || r || e) {
                      var a,
                        i,
                        o,
                        d,
                        p,
                        v,
                        g,
                        m = !0 === eS ? ea : tE.scroll(),
                        y = e ? 0 : (m - c) / x,
                        b = y < 0 ? 0 : y > 1 ? 1 : y || 0,
                        w = tE.progress;
                      if (
                        (t &&
                          ((s = u),
                          (u = eZ ? tL() : m),
                          eF &&
                            ((X = V), (V = n && !ts ? n.totalProgress() : b))),
                        eE &&
                          !b &&
                          ey &&
                          !J &&
                          !eP &&
                          eT &&
                          c < m + ((m - s) / (eC() - Z)) * eE &&
                          (b = 1e-4),
                        b !== w && tE.enabled)
                      ) {
                        if (
                          ((d =
                            (p =
                              (a = tE.isActive = !!b && b < 1) !=
                              (!!w && w < 1)) || !!b != !!w),
                          (tE.direction = b > w ? 1 : -1),
                          (tE.progress = b),
                          d &&
                            !J &&
                            ((i = b && !w ? 0 : 1 === b ? 1 : 1 === w ? 2 : 3),
                            ts &&
                              ((o =
                                (!p && "none" !== t_[i + 1] && t_[i + 1]) ||
                                t_[i]),
                              (g =
                                n &&
                                ("complete" === o ||
                                  "reset" === o ||
                                  o in n)))),
                          eJ &&
                            (p || g) &&
                            (g || eg || !n) &&
                            (eY(eJ)
                              ? eJ(tE)
                              : tE.getTrailing(eJ).forEach(function (e) {
                                  return e.endAnimation();
                                })),
                          !ts &&
                            (!q || J || eP
                              ? n && n.totalProgress(b, !!(J && (tN || e)))
                              : (q._dp._time - q._start !== q._time &&
                                  q.render(q._dp._time - q._start),
                                q.resetTo
                                  ? q.resetTo(
                                      "totalProgress",
                                      b,
                                      n._tTime / n._tDur
                                    )
                                  : ((q.vars.totalProgress = b),
                                    q.invalidate().restart()))),
                          ey)
                        ) {
                          if ((e && ew && (P.style[ew + ti.os2] = L), tx)) {
                            if (d) {
                              if (
                                ((v =
                                  !e &&
                                  b > w &&
                                  f + 1 > m &&
                                  m + 1 >= eV(td, ti)),
                                eU)
                              ) {
                                if (!e && (a || v)) {
                                  var _ = tn(ey, !0),
                                    C = m - c;
                                  t$(
                                    ey,
                                    Q,
                                    _.top + (ti === O ? C : 0) + "px",
                                    _.left + (ti === O ? 0 : C) + "px"
                                  );
                                } else t$(ey, P);
                              }
                              tH(a || v ? S : k),
                                (A && b < 1 && a) ||
                                  T(M + (1 !== b || v ? 0 : z));
                            }
                          } else T(eL(M + z * b));
                        }
                        !eF || l.tween || J || eP || er.restart(!0),
                          ed &&
                            (p || (eD && b && (b < 1 || !ex))) &&
                            $(ed.targets).forEach(function (e) {
                              return e.classList[a || eD ? "add" : "remove"](
                                ed.className
                              );
                            }),
                          !ef || ts || e || ef(tE),
                          d && !J
                            ? (ts &&
                                (g &&
                                  ("complete" === o
                                    ? n.pause().totalProgress(1)
                                    : "reset" === o
                                    ? n.restart(!0).pause()
                                    : "restart" === o
                                    ? n.restart(!0)
                                    : n[o]()),
                                ef && ef(tE)),
                              (p || !ex) &&
                                (eh && p && e$(tE, eh),
                                tS[i] && e$(tE, tS[i]),
                                eD && (1 === b ? tE.kill(!1, 1) : (tS[i] = 0)),
                                !p &&
                                  tS[(i = 1 === b ? 1 : 3)] &&
                                  e$(tE, tS[i])),
                              eK &&
                                !a &&
                                Math.abs(tE.getVelocity()) >
                                  (eQ(eK) ? eK : 2500) &&
                                (eq(tE.callbackAnimation),
                                q
                                  ? q.progress(1)
                                  : eq(n, "reverse" === o ? 1 : !b, 1)))
                            : ts && ef && !J && ef(tE);
                      }
                      if (U) {
                        var E = eZ
                          ? (m / eZ.duration()) * (eZ._caScrollDist || 0)
                          : m;
                        F(E + (h._isFlipped ? 1 : 0)), U(E);
                      }
                      eu && eu((-m / eZ.duration()) * (eZ._caScrollDist || 0));
                    }
                  }),
                  (tE.enable = function (t, n) {
                    tE.enabled ||
                      ((tE.enabled = !0),
                      to(td, "resize", tw),
                      ty || to(td, "scroll", tb),
                      tT && to(e, "refreshInit", tT),
                      !1 !== t && ((tE.progress = tI = 0), (u = s = tO = tL())),
                      !1 !== n && tE.refresh());
                  }),
                  (tE.getTween = function (e) {
                    return e && l ? l.tween : q;
                  }),
                  (tE.setPositions = function (e, t, n, r) {
                    if (eZ) {
                      var a = eZ.scrollTrigger,
                        l = eZ.duration(),
                        i = a.end - a.start;
                      (e = a.start + (i * e) / l), (t = a.start + (i * t) / l);
                    }
                    tE.refresh(
                      !1,
                      !1,
                      {
                        start: eR(e, n && !!tE._startClamp),
                        end: eR(t, n && !!tE._endClamp),
                      },
                      r
                    ),
                      tE.update();
                  }),
                  (tE.adjustPinSpacing = function (e) {
                    if (D && e) {
                      var t = D.indexOf(ti.d) + 1;
                      (D[t] = parseFloat(D[t]) + e + "px"),
                        (D[1] = parseFloat(D[1]) + e + "px"),
                        tH(D);
                    }
                  }),
                  (tE.disable = function (t, n) {
                    if (
                      tE.enabled &&
                      (!1 !== t && tE.revert(!0, !0),
                      (tE.enabled = tE.isActive = !1),
                      n || (q && q.pause()),
                      (ea = 0),
                      i && (i.uncache = 1),
                      tT && tu(e, "refreshInit", tT),
                      er &&
                        (er.pause(),
                        l.tween && l.tween.kill() && (l.tween = 0)),
                      !ty)
                    ) {
                      for (var r = tg.length; r--; )
                        if (tg[r].scroller === td && tg[r] !== tE) return;
                      tu(td, "resize", tw), ty || tu(td, "scroll", tb);
                    }
                  }),
                  (tE.kill = function (e, r) {
                    tE.disable(e, r), q && !r && q.kill(), ep && delete tm[ep];
                    var a = tg.indexOf(tE);
                    a >= 0 && tg.splice(a, 1),
                      a === en && tD > 0 && en--,
                      (a = 0),
                      tg.forEach(function (e) {
                        return e.scroller === tE.scroller && (a = 1);
                      }),
                      a || eS || (tE.scroll.rec = 0),
                      n &&
                        ((n.scrollTrigger = null),
                        e && n.revert({ kill: !1 }),
                        r || n.kill()),
                      d &&
                        [d, p, h, v].forEach(function (e) {
                          return e.parentNode && e.parentNode.removeChild(e);
                        }),
                      ek === tE && (ek = 0),
                      ey &&
                        (i && (i.uncache = 1),
                        (a = 0),
                        tg.forEach(function (e) {
                          return e.pin === ey && a++;
                        }),
                        a || (i.spacer = 0)),
                      t.onKill && t.onKill(tE);
                  }),
                  tg.push(tE),
                  tE.enable(!1, !1),
                  es && es(tE),
                  n && n.add && !x)
                ) {
                  var tV = tE.update;
                  (tE.update = function () {
                    (tE.update = tV), c || f || tE.refresh();
                  }),
                    j.delayedCall(0.01, tE.update),
                    (x = 0.01),
                    (c = f = 0);
                } else tE.refresh();
                ey && tR();
              }),
              (e.register = function (t) {
                return (
                  V ||
                    ((j = t || eF()),
                    eD() && window.document && e.enable(),
                    (V = eM)),
                  V
                );
              }),
              (e.defaults = function (e) {
                if (e) for (var t in e) tf[t] = e[t];
                return tf;
              }),
              (e.disable = function (e, t) {
                (eM = 0),
                  tg.forEach(function (n) {
                    return n[t ? "kill" : "disable"](e);
                  }),
                  tu(H, "wheel", tb),
                  tu(W, "scroll", tb),
                  clearInterval(K),
                  tu(W, "touchcancel", eI),
                  tu(Q, "touchstart", eI),
                  ti(tu, W, "pointerdown,touchstart,mousedown", eO),
                  ti(tu, W, "pointerup,touchend,mouseup", eN),
                  q.kill(),
                  eH(tu);
                for (var n = 0; n < y.length; n += 3)
                  ts(tu, y[n], y[n + 1]), ts(tu, y[n], y[n + 2]);
              }),
              (e.enable = function () {
                if (
                  ((H = window),
                  (Y = (W = document).documentElement),
                  (Q = W.body),
                  j &&
                    (($ = j.utils.toArray),
                    (G = j.utils.clamp),
                    (eh = j.core.context || eI),
                    (eo = j.core.suppressOverwrites || eI),
                    (ev = H.history.scrollRestoration || "auto"),
                    (tL = H.pageYOffset),
                    j.core.globals("ScrollTrigger", e),
                    Q))
                ) {
                  (eM = 1),
                    ((eg = document.createElement("div")).style.height =
                      "100vh"),
                    (eg.style.position = "absolute"),
                    tO(),
                    (function e() {
                      return eM && requestAnimationFrame(e);
                    })(),
                    B.register(j),
                    (e.isTouch = B.isTouch),
                    (ep =
                      B.isTouch &&
                      /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                    to(H, "wheel", tb),
                    (X = [H, W, Y, Q]),
                    j.matchMedia
                      ? ((e.matchMedia = function (e) {
                          var t,
                            n = j.matchMedia();
                          for (t in e) n.add(t, e[t]);
                          return n;
                        }),
                        j.addEventListener("matchMediaInit", function () {
                          return tT();
                        }),
                        j.addEventListener("matchMediaRevert", function () {
                          return tE();
                        }),
                        j.addEventListener("matchMedia", function () {
                          tI(0, 1), tP("matchMedia");
                        }),
                        j.matchMedia("(orientation: portrait)", function () {
                          return tx(), tx;
                        }))
                      : console.warn("Requires GSAP 3.11.0 or later"),
                    tx(),
                    to(W, "scroll", tb);
                  var t,
                    n,
                    r = Q.style,
                    a = r.borderTopStyle,
                    l = j.core.Animation.prototype;
                  for (
                    l.revert ||
                      Object.defineProperty(l, "revert", {
                        value: function () {
                          return this.time(-0.01, !0);
                        },
                      }),
                      r.borderTopStyle = "solid",
                      t = tn(Q),
                      O.m = Math.round(t.top + O.sc()) || 0,
                      R.m = Math.round(t.left + R.sc()) || 0,
                      a
                        ? (r.borderTopStyle = a)
                        : r.removeProperty("border-top-style"),
                      K = setInterval(ty, 250),
                      j.delayedCall(0.5, function () {
                        return (eP = 0);
                      }),
                      to(W, "touchcancel", eI),
                      to(Q, "touchstart", eI),
                      ti(to, W, "pointerdown,touchstart,mousedown", eO),
                      ti(to, W, "pointerup,touchend,mouseup", eN),
                      et = j.utils.checkPrefix("transform"),
                      tU.push(et),
                      V = eC(),
                      q = j.delayedCall(0.2, tI).pause(),
                      el = [
                        W,
                        "visibilitychange",
                        function () {
                          var e = H.innerWidth,
                            t = H.innerHeight;
                          W.hidden
                            ? ((er = e), (ea = t))
                            : (er !== e || ea !== t) && tw();
                        },
                        W,
                        "DOMContentLoaded",
                        tI,
                        H,
                        "load",
                        tI,
                        H,
                        "resize",
                        tw,
                      ],
                      eH(to),
                      tg.forEach(function (e) {
                        return e.enable(0, 1);
                      }),
                      n = 0;
                    n < y.length;
                    n += 3
                  )
                    ts(tu, y[n], y[n + 1]), ts(tu, y[n], y[n + 2]);
                }
              }),
              (e.config = function (t) {
                "limitCallbacks" in t && (ex = !!t.limitCallbacks);
                var n = t.syncInterval;
                (n && clearInterval(K)) || ((K = n) && setInterval(ty, n)),
                  "ignoreMobileResize" in t &&
                    (ec = 1 === e.isTouch && t.ignoreMobileResize),
                  "autoRefreshEvents" in t &&
                    (eH(tu) || eH(to, t.autoRefreshEvents || "none"),
                    (eu = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
              }),
              (e.scrollerProxy = function (e, t) {
                var n = N(e),
                  r = y.indexOf(n),
                  a = eA(n);
                ~r && y.splice(r, a ? 6 : 2),
                  t && (a ? b.unshift(H, t, Q, t, Y, t) : b.unshift(n, t));
              }),
              (e.clearMatchMedia = function (e) {
                tg.forEach(function (t) {
                  return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
                });
              }),
              (e.isInViewport = function (e, t, n) {
                var r = (eW(e) ? N(e) : e).getBoundingClientRect(),
                  a = r[n ? e0 : e1] * t || 0;
                return n
                  ? r.right - a > 0 && r.left + a < H.innerWidth
                  : r.bottom - a > 0 && r.top + a < H.innerHeight;
              }),
              (e.positionInViewport = function (e, t, n) {
                eW(e) && (e = N(e));
                var r = e.getBoundingClientRect(),
                  a = r[n ? e0 : e1],
                  l =
                    null == t
                      ? a / 2
                      : t in td
                      ? td[t] * a
                      : ~t.indexOf("%")
                      ? (parseFloat(t) * a) / 100
                      : parseFloat(t) || 0;
                return n
                  ? (r.left + l) / H.innerWidth
                  : (r.top + l) / H.innerHeight;
              }),
              (e.killAll = function (e) {
                if (
                  (tg.slice(0).forEach(function (e) {
                    return "ScrollSmoother" !== e.vars.id && e.kill();
                  }),
                  !0 !== e)
                ) {
                  var t = tS.killAll || [];
                  (tS = {}),
                    t.forEach(function (e) {
                      return e();
                    });
                }
              }),
              e
            );
          })();
        (tJ.version = "3.12.4"),
          (tJ.saveStyles = function (e) {
            return e
              ? $(e).forEach(function (e) {
                  if (e && e.style) {
                    var t = tC.indexOf(e);
                    t >= 0 && tC.splice(t, 5),
                      tC.push(
                        e,
                        e.style.cssText,
                        e.getBBox && e.getAttribute("transform"),
                        j.core.getCache(e),
                        eh()
                      );
                  }
                })
              : tC;
          }),
          (tJ.revert = function (e, t) {
            return tT(!e, t);
          }),
          (tJ.create = function (e, t) {
            return new tJ(e, t);
          }),
          (tJ.refresh = function (e) {
            return e ? tw() : (V || tJ.register()) && tI(!0);
          }),
          (tJ.update = function (e) {
            return ++y.cache && tF(!0 === e ? 2 : 0);
          }),
          (tJ.clearScrollMemory = tM),
          (tJ.maxScroll = function (e, t) {
            return eV(e, t ? R : O);
          }),
          (tJ.getScrollFunc = function (e, t) {
            return I(N(e), t ? R : O);
          }),
          (tJ.getById = function (e) {
            return tm[e];
          }),
          (tJ.getAll = function () {
            return tg.filter(function (e) {
              return "ScrollSmoother" !== e.vars.id;
            });
          }),
          (tJ.isScrolling = function () {
            return !!eT;
          }),
          (tJ.snapDirectional = tl),
          (tJ.addEventListener = function (e, t) {
            var n = tS[e] || (tS[e] = []);
            ~n.indexOf(t) || n.push(t);
          }),
          (tJ.removeEventListener = function (e, t) {
            var n = tS[e],
              r = n && n.indexOf(t);
            r >= 0 && n.splice(r, 1);
          }),
          (tJ.batch = function (e, t) {
            var n,
              r = [],
              a = {},
              l = t.interval || 0.016,
              i = t.batchMax || 1e9,
              o = function (e, t) {
                var n = [],
                  r = [],
                  a = j
                    .delayedCall(l, function () {
                      t(n, r), (n = []), (r = []);
                    })
                    .pause();
                return function (e) {
                  n.length || a.restart(!0),
                    n.push(e.trigger),
                    r.push(e),
                    i <= n.length && a.progress(1);
                };
              };
            for (n in t)
              a[n] =
                "on" === n.substr(0, 2) && eY(t[n]) && "onRefreshInit" !== n
                  ? o(n, t[n])
                  : t[n];
            return (
              eY(i) &&
                ((i = i()),
                to(tJ, "refresh", function () {
                  return (i = t.batchMax());
                })),
              $(e).forEach(function (e) {
                var t = {};
                for (n in a) t[n] = a[n];
                (t.trigger = e), r.push(tJ.create(t));
              }),
              r
            );
          });
        var t0,
          t1 = function (e, t, n, r) {
            return (
              t > r ? e(r) : t < 0 && e(0),
              n > r ? (r - t) / (n - t) : n < 0 ? t / (t - n) : 1
            );
          },
          t2 = function e(t, n) {
            !0 === n
              ? t.style.removeProperty("touch-action")
              : (t.style.touchAction =
                  !0 === n
                    ? "auto"
                    : n
                    ? "pan-" + n + (B.isTouch ? " pinch-zoom" : "")
                    : "none"),
              t === Y && e(Q, n);
          },
          t3 = { auto: 1, scroll: 1 },
          t4 = function (e) {
            var t,
              n = e.event,
              r = e.target,
              a = e.axis,
              l = (n.changedTouches ? n.changedTouches[0] : n).target,
              i = l._gsap || j.core.getCache(l),
              o = eC();
            if (!i._isScrollT || o - i._isScrollT > 2e3) {
              for (
                ;
                l &&
                l !== Q &&
                ((l.scrollHeight <= l.clientHeight &&
                  l.scrollWidth <= l.clientWidth) ||
                  !(t3[(t = e9(l)).overflowY] || t3[t.overflowX]));

              )
                l = l.parentNode;
              (i._isScroll =
                l &&
                l !== r &&
                !eA(l) &&
                (t3[(t = e9(l)).overflowY] || t3[t.overflowX])),
                (i._isScrollT = o);
            }
            (i._isScroll || "x" === a) &&
              (n.stopPropagation(), (n._gsapAllow = !0));
          },
          t5 = function (e, t, n, r) {
            return B.create({
              target: e,
              capture: !0,
              debounce: !1,
              lockAxis: !0,
              type: t,
              onWheel: (r = r && t4),
              onPress: r,
              onDrag: r,
              onScroll: r,
              onEnable: function () {
                return n && to(W, B.eventTypes[0], t8, !1, !0);
              },
              onDisable: function () {
                return tu(W, B.eventTypes[0], t8, !0);
              },
            });
          },
          t6 = /(input|label|select|textarea)/i,
          t8 = function (e) {
            var t = t6.test(e.target.tagName);
            (t || t0) && ((e._gsapAllow = !0), (t0 = t));
          },
          t7 = function (e) {
            eX(e) || (e = {}),
              (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
              e.type || (e.type = "wheel,touch"),
              (e.debounce = !!e.debounce),
              (e.id = e.id || "normalizer");
            var t,
              n,
              r,
              a,
              l,
              i,
              o,
              u,
              s = e,
              c = s.normalizeScrollX,
              f = s.momentum,
              d = s.allowNestedScroll,
              p = s.onRelease,
              h = N(e.target) || Y,
              v = j.core.globals().ScrollSmoother,
              g = v && v.get(),
              m =
                ep &&
                ((e.content && N(e.content)) ||
                  (g && !1 !== e.content && !g.smooth() && g.content())),
              b = I(h, O),
              x = I(h, R),
              w = 1,
              S =
                (B.isTouch && H.visualViewport
                  ? H.visualViewport.scale * H.visualViewport.width
                  : H.outerWidth) / H.innerWidth,
              _ = 0,
              k = eY(f)
                ? function () {
                    return f(t);
                  }
                : function () {
                    return f || 2.8;
                  },
              P = t5(h, e.type, !0, d),
              C = function () {
                return (a = !1);
              },
              E = eI,
              T = eI,
              M = function () {
                (n = eV(h, O)),
                  (T = G(ep ? 1 : 0, n)),
                  c && (E = G(0, eV(h, R))),
                  (r = tz);
              },
              z = function () {
                (m._gsap.y = eL(parseFloat(m._gsap.y) + b.offset) + "px"),
                  (m.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    parseFloat(m._gsap.y) +
                    ", 0, 1)"),
                  (b.offset = b.cacheID = 0);
              },
              L = function () {
                if (a) {
                  requestAnimationFrame(C);
                  var e = eL(t.deltaY / 2),
                    n = T(b.v - e);
                  if (m && n !== b.v + b.offset) {
                    b.offset = n - b.v;
                    var r = eL((parseFloat(m && m._gsap.y) || 0) - b.offset);
                    (m.style.transform =
                      "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                      r +
                      ", 0, 1)"),
                      (m._gsap.y = r + "px"),
                      (b.cacheID = y.cache),
                      tF();
                  }
                  return !0;
                }
                b.offset && z(), (a = !0);
              },
              D = function () {
                M(),
                  l.isActive() &&
                    l.vars.scrollY > n &&
                    (b() > n ? l.progress(1) && b(n) : l.resetTo("scrollY", n));
              };
            return (
              m && j.set(m, { y: "+=0" }),
              (e.ignoreCheck = function (e) {
                return (
                  (ep && "touchmove" === e.type && L()) ||
                  (w > 1.05 && "touchstart" !== e.type) ||
                  t.isGesturing ||
                  (e.touches && e.touches.length > 1)
                );
              }),
              (e.onPress = function () {
                a = !1;
                var e = w;
                (w = eL(
                  ((H.visualViewport && H.visualViewport.scale) || 1) / S
                )),
                  l.pause(),
                  e !== w && t2(h, w > 1.01 || (!c && "x")),
                  (i = x()),
                  (o = b()),
                  M(),
                  (r = tz);
              }),
              (e.onRelease = e.onGestureStart =
                function (e, t) {
                  if ((b.offset && z(), t)) {
                    y.cache++;
                    var r,
                      a,
                      i = k();
                    c &&
                      ((a = (r = x()) + -(0.05 * i * e.velocityX) / 0.227),
                      (i *= t1(x, r, a, eV(h, R))),
                      (l.vars.scrollX = E(a))),
                      (a = (r = b()) + -(0.05 * i * e.velocityY) / 0.227),
                      (i *= t1(b, r, a, eV(h, O))),
                      (l.vars.scrollY = T(a)),
                      l.invalidate().duration(i).play(0.01),
                      ((ep && l.vars.scrollY >= n) || r >= n - 1) &&
                        j.to({}, { onUpdate: D, duration: i });
                  } else u.restart(!0);
                  p && p(e);
                }),
              (e.onWheel = function () {
                l._ts && l.pause(), eC() - _ > 1e3 && ((r = 0), (_ = eC()));
              }),
              (e.onChange = function (e, t, n, a, l) {
                if (
                  (tz !== r && M(),
                  t &&
                    c &&
                    x(E(a[2] === t ? i + (e.startX - e.x) : x() + t - a[1])),
                  n)
                ) {
                  b.offset && z();
                  var u = l[2] === n,
                    s = u ? o + e.startY - e.y : b() + n - l[1],
                    f = T(s);
                  u && s !== f && (o += f - s), b(f);
                }
                (n || t) && tF();
              }),
              (e.onEnable = function () {
                t2(h, !c && "x"),
                  tJ.addEventListener("refresh", D),
                  to(H, "resize", D),
                  b.smooth &&
                    ((b.target.style.scrollBehavior = "auto"),
                    (b.smooth = x.smooth = !1)),
                  P.enable();
              }),
              (e.onDisable = function () {
                t2(h, !0),
                  tu(H, "resize", D),
                  tJ.removeEventListener("refresh", D),
                  P.kill();
              }),
              (e.lockAxis = !1 !== e.lockAxis),
              ((t = new B(e)).iOS = ep),
              ep && !b() && b(1),
              ep && j.ticker.add(eI),
              (u = t._dc),
              (l = j.to(t, {
                ease: "power4",
                paused: !0,
                scrollX: c ? "+=0.1" : "+=0",
                scrollY: "+=0.1",
                modifiers: {
                  scrollY: tG(b, b(), function () {
                    return l.pause();
                  }),
                },
                onUpdate: tF,
                onComplete: u.vars.onComplete,
              })),
              t
            );
          };
        (tJ.sort = function (e) {
          return tg.sort(
            e ||
              function (e, t) {
                return (
                  -1e6 * (e.vars.refreshPriority || 0) +
                  e.start -
                  (t.start + -1e6 * (t.vars.refreshPriority || 0))
                );
              }
          );
        }),
          (tJ.observe = function (e) {
            return new B(e);
          }),
          (tJ.normalizeScroll = function (e) {
            if (void 0 === e) return es;
            if (!0 === e && es) return es.enable();
            if (!1 === e) {
              es && es.kill(), (es = e);
              return;
            }
            var t = e instanceof B ? e : t7(e);
            return (
              es && es.target === t.target && es.kill(),
              eA(t.target) && (es = t),
              t
            );
          }),
          (tJ.core = {
            _getVelocityProp: L,
            _inputObserver: t5,
            _scrollers: y,
            _proxies: b,
            bridge: {
              ss: function () {
                eT || tP("scrollStart"), (eT = eC());
              },
              ref: function () {
                return J;
              },
            },
          }),
          eF() && j.registerPlugin(tJ),
          (e.ScrollTrigger = tJ),
          (e.default = tJ),
          "undefined" == typeof window || window !== e
            ? Object.defineProperty(e, "__esModule", { value: !0 })
            : delete window.default;
      })(t);
    },
    55819: function (e, t, n) {
      "use strict";
      n.d(t, {
        ZP: function () {
          return e_;
        },
      });
      var r,
        a,
        l,
        i,
        o,
        u,
        s,
        c,
        f,
        d,
        p = n(87905),
        h = {},
        v = 180 / Math.PI,
        g = Math.PI / 180,
        m = Math.atan2,
        y = /([A-Z])/g,
        b = /(left|right|width|margin|padding|x)/i,
        x = /[\s,\(]\S/,
        w = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        S = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
          );
        },
        _ = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
          );
        },
        k = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
            t
          );
        },
        P = function (e, t) {
          var n = t.s + t.c * e;
          t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        C = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        E = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        T = function (e, t, n) {
          return (e.style[t] = n);
        },
        M = function (e, t, n) {
          return e.style.setProperty(t, n);
        },
        z = function (e, t, n) {
          return (e._gsap[t] = n);
        },
        R = function (e, t, n) {
          return (e._gsap.scaleX = e._gsap.scaleY = n);
        },
        O = function (e, t, n, r, a) {
          var l = e._gsap;
          (l.scaleX = l.scaleY = n), l.renderTransform(a, l);
        },
        N = function (e, t, n, r, a) {
          var l = e._gsap;
          (l[t] = n), l.renderTransform(a, l);
        },
        I = "transform",
        L = I + "Origin",
        D = function e(t, n) {
          var r = this,
            a = this.target,
            l = a.style,
            i = a._gsap;
          if (t in h && l) {
            if (((this.tfm = this.tfm || {}), "transform" === t))
              return w.transform.split(",").forEach(function (t) {
                return e.call(r, t, n);
              });
            if (
              (~(t = w[t] || t).indexOf(",")
                ? t.split(",").forEach(function (e) {
                    return (r.tfm[e] = ee(a, e));
                  })
                : (this.tfm[t] = i.x ? i[t] : ee(a, t)),
              t === L && (this.tfm.zOrigin = i.zOrigin),
              this.props.indexOf(I) >= 0)
            )
              return;
            i.svg &&
              ((this.svgo = a.getAttribute("data-svg-origin")),
              this.props.push(L, n, "")),
              (t = I);
          }
          (l || n) && this.props.push(t, n, l[t]);
        },
        F = function (e) {
          e.translate &&
            (e.removeProperty("translate"),
            e.removeProperty("scale"),
            e.removeProperty("rotate"));
        },
        A = function () {
          var e,
            t,
            n = this.props,
            r = this.target,
            a = r.style,
            l = r._gsap;
          for (e = 0; e < n.length; e += 3)
            n[e + 1]
              ? (r[n[e]] = n[e + 2])
              : n[e + 2]
              ? (a[n[e]] = n[e + 2])
              : a.removeProperty(
                  "--" === n[e].substr(0, 2)
                    ? n[e]
                    : n[e].replace(y, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (t in this.tfm) l[t] = this.tfm[t];
            l.svg &&
              (l.renderTransform(),
              r.setAttribute("data-svg-origin", this.svgo || "")),
              ((e = f()) && e.isStart) ||
                a[I] ||
                (F(a),
                l.zOrigin &&
                  a[L] &&
                  ((a[L] += " " + l.zOrigin + "px"),
                  (l.zOrigin = 0),
                  l.renderTransform()),
                (l.uncache = 1));
          }
        },
        U = function (e, t) {
          var n = { target: e, props: [], revert: A, save: D };
          return (
            e._gsap || p.p8.core.getCache(e),
            t &&
              t.split(",").forEach(function (e) {
                return n.save(e);
              }),
            n
          );
        },
        B = function (e, t) {
          var n = i.createElementNS
            ? i.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : i.createElement(e);
          return n && n.style ? n : i.createElement(e);
        },
        j = function e(t, n, r) {
          var a = getComputedStyle(t);
          return (
            a[n] ||
            a.getPropertyValue(n.replace(y, "-$1").toLowerCase()) ||
            a.getPropertyValue(n) ||
            (!r && e(t, H(n) || n, 1)) ||
            ""
          );
        },
        V = "O,Moz,ms,Ms,Webkit".split(","),
        H = function (e, t, n) {
          var r = (t || s).style,
            a = 5;
          if (e in r && !n) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            a-- && !(V[a] + e in r);

          );
          return a < 0 ? null : (3 === a ? "ms" : a >= 0 ? V[a] : "") + e;
        },
        W = function () {
          "undefined" != typeof window &&
            window.document &&
            ((o = (i = window.document).documentElement),
            (s = B("div") || { style: {} }),
            B("div"),
            (L = (I = H(I)) + "Origin"),
            (s.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (d = !!H("perspective")),
            (f = p.p8.core.reverting),
            (u = 1));
        },
        Y = function e(t) {
          var n,
            r = B(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            a = this.parentNode,
            l = this.nextSibling,
            i = this.style.cssText;
          if (
            (o.appendChild(r),
            r.appendChild(this),
            (this.style.display = "block"),
            t)
          )
            try {
              (n = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = e);
            } catch (e) {}
          else this._gsapBBox && (n = this._gsapBBox());
          return (
            a && (l ? a.insertBefore(this, l) : a.appendChild(this)),
            o.removeChild(r),
            (this.style.cssText = i),
            n
          );
        },
        Q = function (e, t) {
          for (var n = t.length; n--; )
            if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
        },
        X = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (n) {
            t = Y.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) ||
              e.getBBox === Y ||
              (t = Y.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +Q(e, ["x", "cx", "x1"]) || 0,
                  y: +Q(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        q = function (e) {
          return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && X(e));
        },
        $ = function (e, t) {
          if (t) {
            var n,
              r = e.style;
            t in h && t !== L && (t = I),
              r.removeProperty
                ? (("ms" === (n = t.substr(0, 2)) ||
                    "webkit" === t.substr(0, 6)) &&
                    (t = "-" + t),
                  r.removeProperty(
                    "--" === n ? t : t.replace(y, "-$1").toLowerCase()
                  ))
                : r.removeAttribute(t);
          }
        },
        G = function (e, t, n, r, a, l) {
          var i = new p.Fo(e._pt, t, n, 0, 1, l ? E : C);
          return (e._pt = i), (i.b = r), (i.e = a), e._props.push(n), i;
        },
        Z = { deg: 1, rad: 1, turn: 1 },
        K = { grid: 1, flex: 1 },
        J = function e(t, n, r, a) {
          var l,
            o,
            u,
            c,
            f = parseFloat(r) || 0,
            d = (r + "").trim().substr((f + "").length) || "px",
            v = s.style,
            g = b.test(n),
            m = "svg" === t.tagName.toLowerCase(),
            y = (m ? "client" : "offset") + (g ? "Width" : "Height"),
            x = "px" === a,
            w = "%" === a;
          if (a === d || !f || Z[a] || Z[d]) return f;
          if (
            ("px" === d || x || (f = e(t, n, r, "px")),
            (c = t.getCTM && q(t)),
            (w || "%" === d) && (h[n] || ~n.indexOf("adius")))
          )
            return (
              (l = c ? t.getBBox()[g ? "width" : "height"] : t[y]),
              (0, p.Pr)(w ? (f / l) * 100 : (f / 100) * l)
            );
          if (
            ((v[g ? "width" : "height"] = 100 + (x ? d : a)),
            (o =
              ~n.indexOf("adius") || ("em" === a && t.appendChild && !m)
                ? t
                : t.parentNode),
            c && (o = (t.ownerSVGElement || {}).parentNode),
            (o && o !== i && o.appendChild) || (o = i.body),
            (u = o._gsap) &&
              w &&
              u.width &&
              g &&
              u.time === p.xr.time &&
              !u.uncache)
          )
            return (0, p.Pr)((f / u.width) * 100);
          if (w && ("height" === n || "width" === n)) {
            var S = t.style[n];
            (t.style[n] = 100 + a), (l = t[y]), S ? (t.style[n] = S) : $(t, n);
          } else
            (w || "%" === d) &&
              !K[j(o, "display")] &&
              (v.position = j(t, "position")),
              o === t && (v.position = "static"),
              o.appendChild(s),
              (l = s[y]),
              o.removeChild(s),
              (v.position = "absolute");
          return (
            g && w && (((u = (0, p.DY)(o)).time = p.xr.time), (u.width = o[y])),
            (0, p.Pr)(x ? (l * f) / 100 : l && f ? (100 / l) * f : 0)
          );
        },
        ee = function (e, t, n, r) {
          var a;
          return (
            u || W(),
            t in w &&
              "transform" !== t &&
              ~(t = w[t]).indexOf(",") &&
              (t = t.split(",")[0]),
            h[t] && "transform" !== t
              ? ((a = ed(e, r)),
                (a =
                  "transformOrigin" !== t
                    ? a[t]
                    : a.svg
                    ? a.origin
                    : ep(j(e, L)) + " " + a.zOrigin + "px"))
              : (!(a = e.style[t]) ||
                  "auto" === a ||
                  r ||
                  ~(a + "").indexOf("calc(")) &&
                (a =
                  (el[t] && el[t](e, t, n)) ||
                  j(e, t) ||
                  (0, p.Ok)(e, t) ||
                  ("opacity" === t ? 1 : 0)),
            n && !~(a + "").trim().indexOf(" ") ? J(e, t, a, n) + n : a
          );
        },
        et = function (e, t, n, r) {
          if (!n || "none" === n) {
            var a = H(t, e, 1),
              l = a && j(e, a, 1);
            l && l !== n
              ? ((t = a), (n = l))
              : "borderColor" === t && (n = j(e, "borderTopColor"));
          }
          var i,
            o,
            u,
            s,
            c,
            f,
            d,
            h,
            v,
            g,
            m,
            y = new p.Fo(this._pt, e.style, t, 0, 1, p.Ks),
            b = 0,
            x = 0;
          if (
            ((y.b = n),
            (y.e = r),
            (n += ""),
            "auto" == (r += "") &&
              ((f = e.style[t]),
              (e.style[t] = r),
              (r = j(e, t) || r),
              f ? (e.style[t] = f) : $(e, t)),
            (i = [n, r]),
            (0, p.kr)(i),
            (n = i[0]),
            (r = i[1]),
            (u = n.match(p.d4) || []),
            (r.match(p.d4) || []).length)
          ) {
            for (; (o = p.d4.exec(r)); )
              (d = o[0]),
                (v = r.substring(b, o.index)),
                c
                  ? (c = (c + 1) % 5)
                  : ("rgba(" === v.substr(-5) || "hsla(" === v.substr(-5)) &&
                    (c = 1),
                d !== (f = u[x++] || "") &&
                  ((s = parseFloat(f) || 0),
                  (m = f.substr((s + "").length)),
                  "=" === d.charAt(1) && (d = (0, p.cy)(s, d) + m),
                  (h = parseFloat(d)),
                  (g = d.substr((h + "").length)),
                  (b = p.d4.lastIndex - g.length),
                  g ||
                    ((g = g || p.Fc.units[t] || m),
                    b !== r.length || ((r += g), (y.e += g))),
                  m !== g && (s = J(e, t, f, g) || 0),
                  (y._pt = {
                    _next: y._pt,
                    p: v || 1 === x ? v : ",",
                    s: s,
                    c: h - s,
                    m: (c && c < 4) || "zIndex" === t ? Math.round : 0,
                  }));
            y.c = b < r.length ? r.substring(b, r.length) : "";
          } else y.r = "display" === t && "none" === r ? E : C;
          return p.bQ.test(r) && (y.e = 0), (this._pt = y), y;
        },
        en = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        er = function (e) {
          var t = e.split(" "),
            n = t[0],
            r = t[1] || "50%";
          return (
            ("top" === n || "bottom" === n || "left" === r || "right" === r) &&
              ((e = n), (n = r), (r = e)),
            (t[0] = en[n] || n),
            (t[1] = en[r] || r),
            t.join(" ")
          );
        },
        ea = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var n,
              r,
              a,
              l = t.t,
              i = l.style,
              o = t.u,
              u = l._gsap;
            if ("all" === o || !0 === o) (i.cssText = ""), (r = 1);
            else
              for (a = (o = o.split(",")).length; --a > -1; )
                h[(n = o[a])] &&
                  ((r = 1), (n = "transformOrigin" === n ? L : I)),
                  $(l, n);
            r &&
              ($(l, I),
              u &&
                (u.svg && l.removeAttribute("transform"),
                ed(l, 1),
                (u.uncache = 1),
                F(i)));
          }
        },
        el = {
          clearProps: function (e, t, n, r, a) {
            if ("isFromStart" !== a.data) {
              var l = (e._pt = new p.Fo(e._pt, t, n, 0, 0, ea));
              return (
                (l.u = r), (l.pr = -10), (l.tween = a), e._props.push(n), 1
              );
            }
          },
        },
        ei = [1, 0, 0, 1, 0, 0],
        eo = {},
        eu = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        es = function (e) {
          var t = j(e, I);
          return eu(t) ? ei : t.substr(7).match(p.SI).map(p.Pr);
        },
        ec = function (e, t) {
          var n,
            r,
            a,
            l,
            i = e._gsap || (0, p.DY)(e),
            u = e.style,
            s = es(e);
          return i.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (s = [
                (a = e.transform.baseVal.consolidate().matrix).a,
                a.b,
                a.c,
                a.d,
                a.e,
                a.f,
              ]).join(",")
              ? ei
              : s
            : (s !== ei ||
                e.offsetParent ||
                e === o ||
                i.svg ||
                ((a = u.display),
                (u.display = "block"),
                ((n = e.parentNode) && e.offsetParent) ||
                  ((l = 1), (r = e.nextElementSibling), o.appendChild(e)),
                (s = es(e)),
                a ? (u.display = a) : $(e, "display"),
                l &&
                  (r
                    ? n.insertBefore(e, r)
                    : n
                    ? n.appendChild(e)
                    : o.removeChild(e))),
              t && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s);
        },
        ef = function (e, t, n, r, a, l) {
          var i,
            o,
            u,
            s,
            c = e._gsap,
            f = a || ec(e, !0),
            d = c.xOrigin || 0,
            p = c.yOrigin || 0,
            h = c.xOffset || 0,
            v = c.yOffset || 0,
            g = f[0],
            m = f[1],
            y = f[2],
            b = f[3],
            x = f[4],
            w = f[5],
            S = t.split(" "),
            _ = parseFloat(S[0]) || 0,
            k = parseFloat(S[1]) || 0;
          n
            ? f !== ei &&
              (o = g * b - m * y) &&
              ((u = (b / o) * _ + (-y / o) * k + (y * w - b * x) / o),
              (s = (-m / o) * _ + (g / o) * k - (g * w - m * x) / o),
              (_ = u),
              (k = s))
            : ((_ =
                (i = X(e)).x + (~S[0].indexOf("%") ? (_ / 100) * i.width : _)),
              (k =
                i.y +
                (~(S[1] || S[0]).indexOf("%") ? (k / 100) * i.height : k))),
            r || (!1 !== r && c.smooth)
              ? ((x = _ - d),
                (w = k - p),
                (c.xOffset = h + (x * g + w * y) - x),
                (c.yOffset = v + (x * m + w * b) - w))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = _),
            (c.yOrigin = k),
            (c.smooth = !!r),
            (c.origin = t),
            (c.originIsAbsolute = !!n),
            (e.style[L] = "0px 0px"),
            l &&
              (G(l, c, "xOrigin", d, _),
              G(l, c, "yOrigin", p, k),
              G(l, c, "xOffset", h, c.xOffset),
              G(l, c, "yOffset", v, c.yOffset)),
            e.setAttribute("data-svg-origin", _ + " " + k);
        },
        ed = function (e, t) {
          var n = e._gsap || new p.l1(e);
          if ("x" in n && !t && !n.uncache) return n;
          var r,
            a,
            l,
            i,
            o,
            u,
            s,
            c,
            f,
            h,
            y,
            b,
            x,
            w,
            S,
            _,
            k,
            P,
            C,
            E,
            T,
            M,
            z,
            R,
            O,
            N,
            D,
            F,
            A,
            U,
            B,
            V,
            H = e.style,
            W = n.scaleX < 0,
            Y = getComputedStyle(e),
            Q = j(e, L) || "0";
          return (
            (r = a = l = u = s = c = f = h = y = 0),
            (i = o = 1),
            (n.svg = !!(e.getCTM && q(e))),
            Y.translate &&
              (("none" !== Y.translate ||
                "none" !== Y.scale ||
                "none" !== Y.rotate) &&
                (H[I] =
                  ("none" !== Y.translate
                    ? "translate3d(" +
                      (Y.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== Y.rotate ? "rotate(" + Y.rotate + ") " : "") +
                  ("none" !== Y.scale
                    ? "scale(" + Y.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== Y[I] ? Y[I] : "")),
              (H.scale = H.rotate = H.translate = "none")),
            (w = ec(e, n.svg)),
            n.svg &&
              (n.uncache
                ? ((O = e.getBBox()),
                  (Q = n.xOrigin - O.x + "px " + (n.yOrigin - O.y) + "px"),
                  (R = ""))
                : (R = !t && e.getAttribute("data-svg-origin")),
              ef(e, R || Q, !!R || n.originIsAbsolute, !1 !== n.smooth, w)),
            (b = n.xOrigin || 0),
            (x = n.yOrigin || 0),
            w !== ei &&
              ((P = w[0]),
              (C = w[1]),
              (E = w[2]),
              (T = w[3]),
              (r = M = w[4]),
              (a = z = w[5]),
              6 === w.length
                ? ((i = Math.sqrt(P * P + C * C)),
                  (o = Math.sqrt(T * T + E * E)),
                  (u = P || C ? m(C, P) * v : 0),
                  (f = E || T ? m(E, T) * v + u : 0) &&
                    (o *= Math.abs(Math.cos(f * g))),
                  n.svg &&
                    ((r -= b - (b * P + x * E)), (a -= x - (b * C + x * T))))
                : ((V = w[6]),
                  (U = w[7]),
                  (D = w[8]),
                  (F = w[9]),
                  (A = w[10]),
                  (B = w[11]),
                  (r = w[12]),
                  (a = w[13]),
                  (l = w[14]),
                  (s = (S = m(V, A)) * v),
                  S &&
                    ((R = M * (_ = Math.cos(-S)) + D * (k = Math.sin(-S))),
                    (O = z * _ + F * k),
                    (N = V * _ + A * k),
                    (D = -(M * k) + D * _),
                    (F = -(z * k) + F * _),
                    (A = -(V * k) + A * _),
                    (B = -(U * k) + B * _),
                    (M = R),
                    (z = O),
                    (V = N)),
                  (c = (S = m(-E, A)) * v),
                  S &&
                    ((R = P * (_ = Math.cos(-S)) - D * (k = Math.sin(-S))),
                    (O = C * _ - F * k),
                    (N = E * _ - A * k),
                    (B = T * k + B * _),
                    (P = R),
                    (C = O),
                    (E = N)),
                  (u = (S = m(C, P)) * v),
                  S &&
                    ((R = P * (_ = Math.cos(S)) + C * (k = Math.sin(S))),
                    (O = M * _ + z * k),
                    (C = C * _ - P * k),
                    (z = z * _ - M * k),
                    (P = R),
                    (M = O)),
                  s &&
                    Math.abs(s) + Math.abs(u) > 359.9 &&
                    ((s = u = 0), (c = 180 - c)),
                  (i = (0, p.Pr)(Math.sqrt(P * P + C * C + E * E))),
                  (o = (0, p.Pr)(Math.sqrt(z * z + V * V))),
                  (f = Math.abs((S = m(M, z))) > 2e-4 ? S * v : 0),
                  (y = B ? 1 / (B < 0 ? -B : B) : 0)),
              n.svg &&
                ((R = e.getAttribute("transform")),
                (n.forceCSS = e.setAttribute("transform", "") || !eu(j(e, I))),
                R && e.setAttribute("transform", R))),
            Math.abs(f) > 90 &&
              270 > Math.abs(f) &&
              (W
                ? ((i *= -1),
                  (f += u <= 0 ? 180 : -180),
                  (u += u <= 0 ? 180 : -180))
                : ((o *= -1), (f += f <= 0 ? 180 : -180))),
            (t = t || n.uncache),
            (n.x =
              r -
              ((n.xPercent =
                r &&
                ((!t && n.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-r) ? -50 : 0)))
                ? (e.offsetWidth * n.xPercent) / 100
                : 0) +
              "px"),
            (n.y =
              a -
              ((n.yPercent =
                a &&
                ((!t && n.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-a)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * n.yPercent) / 100
                : 0) +
              "px"),
            (n.z = l + "px"),
            (n.scaleX = (0, p.Pr)(i)),
            (n.scaleY = (0, p.Pr)(o)),
            (n.rotation = (0, p.Pr)(u) + "deg"),
            (n.rotationX = (0, p.Pr)(s) + "deg"),
            (n.rotationY = (0, p.Pr)(c) + "deg"),
            (n.skewX = f + "deg"),
            (n.skewY = h + "deg"),
            (n.transformPerspective = y + "px"),
            (n.zOrigin =
              parseFloat(Q.split(" ")[2]) || (!t && n.zOrigin) || 0) &&
              (H[L] = ep(Q)),
            (n.xOffset = n.yOffset = 0),
            (n.force3D = p.Fc.force3D),
            (n.renderTransform = n.svg ? ey : d ? em : ev),
            (n.uncache = 0),
            n
          );
        },
        ep = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        eh = function (e, t, n) {
          var r = (0, p.Wy)(t);
          return (
            (0, p.Pr)(parseFloat(t) + parseFloat(J(e, "x", n + "px", r))) + r
          );
        },
        ev = function (e, t) {
          (t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            em(e, t);
        },
        eg = "0deg",
        em = function (e, t) {
          var n = t || this,
            r = n.xPercent,
            a = n.yPercent,
            l = n.x,
            i = n.y,
            o = n.z,
            u = n.rotation,
            s = n.rotationY,
            c = n.rotationX,
            f = n.skewX,
            d = n.skewY,
            p = n.scaleX,
            h = n.scaleY,
            v = n.transformPerspective,
            m = n.force3D,
            y = n.target,
            b = n.zOrigin,
            x = "",
            w = ("auto" === m && e && 1 !== e) || !0 === m;
          if (b && (c !== eg || s !== eg)) {
            var S,
              _ = parseFloat(s) * g,
              k = Math.sin(_),
              P = Math.cos(_);
            (l = eh(y, l, -(k * (S = Math.cos((_ = parseFloat(c) * g))) * b))),
              (i = eh(y, i, -(-Math.sin(_) * b))),
              (o = eh(y, o, -(P * S * b) + b));
          }
          "0px" !== v && (x += "perspective(" + v + ") "),
            (r || a) && (x += "translate(" + r + "%, " + a + "%) "),
            (w || "0px" !== l || "0px" !== i || "0px" !== o) &&
              (x +=
                "0px" !== o || w
                  ? "translate3d(" + l + ", " + i + ", " + o + ") "
                  : "translate(" + l + ", " + i + ") "),
            u !== eg && (x += "rotate(" + u + ") "),
            s !== eg && (x += "rotateY(" + s + ") "),
            c !== eg && (x += "rotateX(" + c + ") "),
            (f !== eg || d !== eg) && (x += "skew(" + f + ", " + d + ") "),
            (1 !== p || 1 !== h) && (x += "scale(" + p + ", " + h + ") "),
            (y.style[I] = x || "translate(0, 0)");
        },
        ey = function (e, t) {
          var n,
            r,
            a,
            l,
            i,
            o = t || this,
            u = o.xPercent,
            s = o.yPercent,
            c = o.x,
            f = o.y,
            d = o.rotation,
            h = o.skewX,
            v = o.skewY,
            m = o.scaleX,
            y = o.scaleY,
            b = o.target,
            x = o.xOrigin,
            w = o.yOrigin,
            S = o.xOffset,
            _ = o.yOffset,
            k = o.forceCSS,
            P = parseFloat(c),
            C = parseFloat(f);
          (d = parseFloat(d)),
            (h = parseFloat(h)),
            (v = parseFloat(v)) && ((h += v = parseFloat(v)), (d += v)),
            d || h
              ? ((d *= g),
                (h *= g),
                (n = Math.cos(d) * m),
                (r = Math.sin(d) * m),
                (a = -(Math.sin(d - h) * y)),
                (l = Math.cos(d - h) * y),
                h &&
                  ((v *= g),
                  (a *= i = Math.sqrt(1 + (i = Math.tan(h - v)) * i)),
                  (l *= i),
                  v &&
                    ((n *= i = Math.sqrt(1 + (i = Math.tan(v)) * i)),
                    (r *= i))),
                (n = (0, p.Pr)(n)),
                (r = (0, p.Pr)(r)),
                (a = (0, p.Pr)(a)),
                (l = (0, p.Pr)(l)))
              : ((n = m), (l = y), (r = a = 0)),
            ((P && !~(c + "").indexOf("px")) ||
              (C && !~(f + "").indexOf("px"))) &&
              ((P = J(b, "x", c, "px")), (C = J(b, "y", f, "px"))),
            (x || w || S || _) &&
              ((P = (0, p.Pr)(P + x - (x * n + w * a) + S)),
              (C = (0, p.Pr)(C + w - (x * r + w * l) + _))),
            (u || s) &&
              ((i = b.getBBox()),
              (P = (0, p.Pr)(P + (u / 100) * i.width)),
              (C = (0, p.Pr)(C + (s / 100) * i.height))),
            (i =
              "matrix(" +
              n +
              "," +
              r +
              "," +
              a +
              "," +
              l +
              "," +
              P +
              "," +
              C +
              ")"),
            b.setAttribute("transform", i),
            k && (b.style[I] = i);
        },
        eb = function (e, t, n, r, a) {
          var l,
            i,
            o = (0, p.r9)(a),
            u = parseFloat(a) * (o && ~a.indexOf("rad") ? v : 1) - r,
            s = r + u + "deg";
          return (
            o &&
              ("short" === (l = a.split("_")[1]) &&
                (u %= 360) != u % 180 &&
                (u += u < 0 ? 360 : -360),
              "cw" === l && u < 0
                ? (u = ((u + 36e9) % 360) - 360 * ~~(u / 360))
                : "ccw" === l &&
                  u > 0 &&
                  (u = ((u - 36e9) % 360) - 360 * ~~(u / 360))),
            (e._pt = i = new p.Fo(e._pt, t, n, r, u, _)),
            (i.e = s),
            (i.u = "deg"),
            e._props.push(n),
            i
          );
        },
        ex = function (e, t) {
          for (var n in t) e[n] = t[n];
          return e;
        },
        ew = function (e, t, n) {
          var r,
            a,
            l,
            i,
            o,
            u,
            s,
            c = ex({}, n._gsap),
            f = n.style;
          for (a in (c.svg
            ? ((l = n.getAttribute("transform")),
              n.setAttribute("transform", ""),
              (f[I] = t),
              (r = ed(n, 1)),
              $(n, I),
              n.setAttribute("transform", l))
            : ((l = getComputedStyle(n)[I]),
              (f[I] = t),
              (r = ed(n, 1)),
              (f[I] = l)),
          h))
            (l = c[a]) !== (i = r[a]) &&
              0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(a) &&
              ((o =
                (0, p.Wy)(l) !== (s = (0, p.Wy)(i))
                  ? J(n, a, l, s)
                  : parseFloat(l)),
              (u = parseFloat(i)),
              (e._pt = new p.Fo(e._pt, r, a, o, u - o, S)),
              (e._pt.u = s || 0),
              e._props.push(a));
          ex(r, c);
        };
      (0, p.fS)("padding,margin,Width,Radius", function (e, t) {
        var n = "Right",
          r = "Bottom",
          a = "Left",
          l = (
            t < 3 ? ["Top", n, r, a] : ["Top" + a, "Top" + n, r + n, r + a]
          ).map(function (n) {
            return t < 2 ? e + n : "border" + n + e;
          });
        el[t > 1 ? "border" + e : e] = function (e, t, n, r, a) {
          var i, o;
          if (arguments.length < 4)
            return 5 ===
              (o = (i = l.map(function (t) {
                return ee(e, t, n);
              })).join(" ")).split(i[0]).length
              ? i[0]
              : o;
          (i = (r + "").split(" ")),
            (o = {}),
            l.forEach(function (e, t) {
              return (o[e] = i[t] = i[t] || i[((t - 1) / 2) | 0]);
            }),
            e.init(t, o, a);
        };
      });
      var eS = {
        name: "css",
        register: W,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, n, r, a) {
          var l,
            i,
            o,
            s,
            c,
            f,
            d,
            v,
            g,
            m,
            y,
            b,
            _,
            C,
            E,
            T,
            M = this._props,
            z = e.style,
            R = n.vars.startAt;
          for (d in (u || W(),
          (this.styles = this.styles || U(e)),
          (T = this.styles.props),
          (this.tween = n),
          t))
            if (
              "autoRound" !== d &&
              ((i = t[d]), !(p.$i[d] && (0, p.if)(d, t, n, r, e, a)))
            ) {
              if (
                ((c = typeof i),
                (f = el[d]),
                "function" === c && (c = typeof (i = i.call(n, r, e, a))),
                "string" === c && ~i.indexOf("random(") && (i = (0, p.UI)(i)),
                f)
              )
                f(this, e, d, i, n) && (E = 1);
              else if ("--" === d.substr(0, 2))
                (l = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
                  (i += ""),
                  (p.GN.lastIndex = 0),
                  p.GN.test(l) || ((v = (0, p.Wy)(l)), (g = (0, p.Wy)(i))),
                  g ? v !== g && (l = J(e, d, l, g) + g) : v && (i += v),
                  this.add(z, "setProperty", l, i, r, a, 0, 0, d),
                  M.push(d),
                  T.push(d, 0, z[d]);
              else if ("undefined" !== c) {
                if (
                  (R && d in R
                    ? ((l =
                        "function" == typeof R[d]
                          ? R[d].call(n, r, e, a)
                          : R[d]),
                      (0, p.r9)(l) &&
                        ~l.indexOf("random(") &&
                        (l = (0, p.UI)(l)),
                      (0, p.Wy)(l + "") ||
                        "auto" === l ||
                        (l += p.Fc.units[d] || (0, p.Wy)(ee(e, d)) || ""),
                      "=" === (l + "").charAt(1) && (l = ee(e, d)))
                    : (l = ee(e, d)),
                  (s = parseFloat(l)),
                  (m =
                    "string" === c && "=" === i.charAt(1) && i.substr(0, 2)) &&
                    (i = i.substr(2)),
                  (o = parseFloat(i)),
                  d in w &&
                    ("autoAlpha" === d &&
                      (1 === s &&
                        "hidden" === ee(e, "visibility") &&
                        o &&
                        (s = 0),
                      T.push("visibility", 0, z.visibility),
                      G(
                        this,
                        z,
                        "visibility",
                        s ? "inherit" : "hidden",
                        o ? "inherit" : "hidden",
                        !o
                      )),
                    "scale" !== d &&
                      "transform" !== d &&
                      ~(d = w[d]).indexOf(",") &&
                      (d = d.split(",")[0])),
                  (y = d in h))
                ) {
                  if (
                    (this.styles.save(d),
                    b ||
                      (((_ = e._gsap).renderTransform && !t.parseTransform) ||
                        ed(e, t.parseTransform),
                      (C = !1 !== t.smoothOrigin && _.smooth),
                      ((b = this._pt =
                        new p.Fo(
                          this._pt,
                          z,
                          I,
                          0,
                          1,
                          _.renderTransform,
                          _,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === d)
                  )
                    (this._pt = new p.Fo(
                      this._pt,
                      _,
                      "scaleY",
                      _.scaleY,
                      (m ? (0, p.cy)(_.scaleY, m + o) : o) - _.scaleY || 0,
                      S
                    )),
                      (this._pt.u = 0),
                      M.push("scaleY", d),
                      (d += "X");
                  else if ("transformOrigin" === d) {
                    T.push(L, 0, z[L]),
                      (i = er(i)),
                      _.svg
                        ? ef(e, i, 0, C, 0, this)
                        : ((g = parseFloat(i.split(" ")[2]) || 0) !==
                            _.zOrigin && G(this, _, "zOrigin", _.zOrigin, g),
                          G(this, z, d, ep(l), ep(i)));
                    continue;
                  } else if ("svgOrigin" === d) {
                    ef(e, i, 1, C, 0, this);
                    continue;
                  } else if (d in eo) {
                    eb(this, _, d, s, m ? (0, p.cy)(s, m + i) : i);
                    continue;
                  } else if ("smoothOrigin" === d) {
                    G(this, _, "smooth", _.smooth, i);
                    continue;
                  } else if ("force3D" === d) {
                    _[d] = i;
                    continue;
                  } else if ("transform" === d) {
                    ew(this, i, e);
                    continue;
                  }
                } else d in z || (d = H(d) || d);
                if (
                  y ||
                  ((o || 0 === o) && (s || 0 === s) && !x.test(i) && d in z)
                )
                  (v = (l + "").substr((s + "").length)),
                    o || (o = 0),
                    (g = (0, p.Wy)(i) || (d in p.Fc.units ? p.Fc.units[d] : v)),
                    v !== g && (s = J(e, d, l, g)),
                    (this._pt = new p.Fo(
                      this._pt,
                      y ? _ : z,
                      d,
                      s,
                      (m ? (0, p.cy)(s, m + o) : o) - s,
                      y || ("px" !== g && "zIndex" !== d) || !1 === t.autoRound
                        ? S
                        : P
                    )),
                    (this._pt.u = g || 0),
                    v !== g &&
                      "%" !== g &&
                      ((this._pt.b = l), (this._pt.r = k));
                else if (d in z) et.call(this, e, d, l, m ? m + i : i);
                else if (d in e) this.add(e, d, l || e[d], m ? m + i : i, r, a);
                else if ("parseTransform" !== d) {
                  (0, p.lC)(d, i);
                  continue;
                }
                y || (d in z ? T.push(d, 0, z[d]) : T.push(d, 1, l || e[d])),
                  M.push(d);
              }
            }
          E && (0, p.JV)(this);
        },
        render: function (e, t) {
          if (t.tween._time || !f())
            for (var n = t._pt; n; ) n.r(e, n.d), (n = n._next);
          else t.styles.revert();
        },
        get: ee,
        aliases: w,
        getSetter: function (e, t, n) {
          var r = w[t];
          return (
            r && 0 > r.indexOf(",") && (t = r),
            t in h && t !== L && (e._gsap.x || ee(e, "x"))
              ? n && c === n
                ? "scale" === t
                  ? R
                  : z
                : ((c = n || {}), "scale" === t ? O : N)
              : e.style && !(0, p.m2)(e.style[t])
              ? T
              : ~t.indexOf("-")
              ? M
              : (0, p.S5)(e, t)
          );
        },
        core: { _removeProperty: $, _getMatrix: ec },
      };
      (p.p8.utils.checkPrefix = H),
        (p.p8.core.getStyleSaver = U),
        (r = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
        (a = "rotation,rotationX,rotationY,skewX,skewY"),
        (l = (0, p.fS)(
          r +
            "," +
            a +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (e) {
            h[e] = 1;
          }
        )),
        (0, p.fS)(a, function (e) {
          (p.Fc.units[e] = "deg"), (eo[e] = 1);
        }),
        (w[l[13]] = r + "," + a),
        (0, p.fS)(
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
          function (e) {
            var t = e.split(":");
            w[t[1]] = l[t[0]];
          }
        ),
        (0, p.fS)(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            p.Fc.units[e] = "px";
          }
        ),
        p.p8.registerPlugin(eS);
      var e_ = p.p8.registerPlugin(eS) || p.p8;
      e_.core.Tween;
    },
    31445: function (e, t) {
      "use strict";
      /**
       * @license React
       * react-reconciler-constants.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ (t.ConcurrentRoot = 1),
        (t.ContinuousEventPriority = 4),
        (t.DefaultEventPriority = 16),
        (t.DiscreteEventPriority = 1);
    },
    53545: function (e, t, n) {
      /**
       * @license React
       * react-reconciler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ e.exports = function (e) {
        "use strict";
        var t,
          r,
          a,
          l,
          i,
          o = {},
          u = n(96682),
          s = n(31321),
          c = Object.assign;
        function f(e) {
          for (
            var t =
                "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
              n = 1;
            n < arguments.length;
            n++
          )
            t += "&args[]=" + encodeURIComponent(arguments[n]);
          return (
            "Minified React error #" +
            e +
            "; visit " +
            t +
            " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
          );
        }
        var d = u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
          p = Symbol.for("react.element"),
          h = Symbol.for("react.portal"),
          v = Symbol.for("react.fragment"),
          g = Symbol.for("react.strict_mode"),
          m = Symbol.for("react.profiler"),
          y = Symbol.for("react.provider"),
          b = Symbol.for("react.context"),
          x = Symbol.for("react.forward_ref"),
          w = Symbol.for("react.suspense"),
          S = Symbol.for("react.suspense_list"),
          _ = Symbol.for("react.memo"),
          k = Symbol.for("react.lazy");
        Symbol.for("react.scope"), Symbol.for("react.debug_trace_mode");
        var P = Symbol.for("react.offscreen");
        Symbol.for("react.legacy_hidden"),
          Symbol.for("react.cache"),
          Symbol.for("react.tracing_marker");
        var C = Symbol.iterator;
        function E(e) {
          return null === e || "object" != typeof e
            ? null
            : "function" == typeof (e = (C && e[C]) || e["@@iterator"])
            ? e
            : null;
        }
        function T(e) {
          if (null == e) return null;
          if ("function" == typeof e) return e.displayName || e.name || null;
          if ("string" == typeof e) return e;
          switch (e) {
            case v:
              return "Fragment";
            case h:
              return "Portal";
            case m:
              return "Profiler";
            case g:
              return "StrictMode";
            case w:
              return "Suspense";
            case S:
              return "SuspenseList";
          }
          if ("object" == typeof e)
            switch (e.$$typeof) {
              case b:
                return (e.displayName || "Context") + ".Consumer";
              case y:
                return (e._context.displayName || "Context") + ".Provider";
              case x:
                var t = e.render;
                return (
                  (e = e.displayName) ||
                    (e =
                      "" !== (e = t.displayName || t.name || "")
                        ? "ForwardRef(" + e + ")"
                        : "ForwardRef"),
                  e
                );
              case _:
                return null !== (t = e.displayName || null)
                  ? t
                  : T(e.type) || "Memo";
              case k:
                (t = e._payload), (e = e._init);
                try {
                  return T(e(t));
                } catch (e) {}
            }
          return null;
        }
        function M(e) {
          var t = e,
            n = e;
          if (e.alternate) for (; t.return; ) t = t.return;
          else {
            e = t;
            do 0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return);
            while (e);
          }
          return 3 === t.tag ? n : null;
        }
        function z(e) {
          if (M(e) !== e) throw Error(f(188));
        }
        function R(e) {
          var t = e.alternate;
          if (!t) {
            if (null === (t = M(e))) throw Error(f(188));
            return t !== e ? null : e;
          }
          for (var n = e, r = t; ; ) {
            var a = n.return;
            if (null === a) break;
            var l = a.alternate;
            if (null === l) {
              if (null !== (r = a.return)) {
                n = r;
                continue;
              }
              break;
            }
            if (a.child === l.child) {
              for (l = a.child; l; ) {
                if (l === n) return z(a), e;
                if (l === r) return z(a), t;
                l = l.sibling;
              }
              throw Error(f(188));
            }
            if (n.return !== r.return) (n = a), (r = l);
            else {
              for (var i = !1, o = a.child; o; ) {
                if (o === n) {
                  (i = !0), (n = a), (r = l);
                  break;
                }
                if (o === r) {
                  (i = !0), (r = a), (n = l);
                  break;
                }
                o = o.sibling;
              }
              if (!i) {
                for (o = l.child; o; ) {
                  if (o === n) {
                    (i = !0), (n = l), (r = a);
                    break;
                  }
                  if (o === r) {
                    (i = !0), (r = l), (n = a);
                    break;
                  }
                  o = o.sibling;
                }
                if (!i) throw Error(f(189));
              }
            }
            if (n.alternate !== r) throw Error(f(190));
          }
          if (3 !== n.tag) throw Error(f(188));
          return n.stateNode.current === n ? e : t;
        }
        function O(e) {
          return null !== (e = R(e))
            ? (function e(t) {
                if (5 === t.tag || 6 === t.tag) return t;
                for (t = t.child; null !== t; ) {
                  var n = e(t);
                  if (null !== n) return n;
                  t = t.sibling;
                }
                return null;
              })(e)
            : null;
        }
        var N,
          I = Array.isArray,
          L = e.getPublicInstance,
          D = e.getRootHostContext,
          F = e.getChildHostContext,
          A = e.prepareForCommit,
          U = e.resetAfterCommit,
          B = e.createInstance,
          j = e.appendInitialChild,
          V = e.finalizeInitialChildren,
          H = e.prepareUpdate,
          W = e.shouldSetTextContent,
          Y = e.createTextInstance,
          Q = e.scheduleTimeout,
          X = e.cancelTimeout,
          q = e.noTimeout,
          $ = e.isPrimaryRenderer,
          G = e.supportsMutation,
          Z = e.supportsPersistence,
          K = e.supportsHydration,
          J = e.getInstanceFromNode,
          ee = e.preparePortalMount,
          et = e.getCurrentEventPriority,
          en = e.detachDeletedInstance,
          er = e.supportsMicrotasks,
          ea = e.scheduleMicrotask,
          el = e.supportsTestSelectors,
          ei = e.findFiberRoot,
          eo = e.getBoundingRect,
          eu = e.getTextContent,
          es = e.isHiddenSubtree,
          ec = e.matchAccessibilityRole,
          ef = e.setFocusIfFocusable,
          ed = e.setupIntersectionObserver,
          ep = e.appendChild,
          eh = e.appendChildToContainer,
          ev = e.commitTextUpdate,
          eg = e.commitMount,
          em = e.commitUpdate,
          ey = e.insertBefore,
          eb = e.insertInContainerBefore,
          ex = e.removeChild,
          ew = e.removeChildFromContainer,
          eS = e.resetTextContent,
          e_ = e.hideInstance,
          ek = e.hideTextInstance,
          eP = e.unhideInstance,
          eC = e.unhideTextInstance,
          eE = e.clearContainer,
          eT = e.cloneInstance,
          eM = e.createContainerChildSet,
          ez = e.appendChildToContainerChildSet,
          eR = e.finalizeContainerChildren,
          eO = e.replaceContainerChildren,
          eN = e.cloneHiddenInstance,
          eI = e.cloneHiddenTextInstance,
          eL = e.canHydrateInstance,
          eD = e.canHydrateTextInstance,
          eF = e.canHydrateSuspenseInstance,
          eA = e.isSuspenseInstancePending,
          eU = e.isSuspenseInstanceFallback,
          eB = e.registerSuspenseInstanceRetry,
          ej = e.getNextHydratableSibling,
          eV = e.getFirstHydratableChild,
          eH = e.getFirstHydratableChildWithinContainer,
          eW = e.getFirstHydratableChildWithinSuspenseInstance,
          eY = e.hydrateInstance,
          eQ = e.hydrateTextInstance,
          eX = e.hydrateSuspenseInstance,
          eq = e.getNextHydratableInstanceAfterSuspenseInstance,
          e$ = e.commitHydratedContainer,
          eG = e.commitHydratedSuspenseInstance,
          eZ = e.clearSuspenseBoundary,
          eK = e.clearSuspenseBoundaryFromContainer,
          eJ = e.shouldDeleteUnhydratedTailInstances,
          e0 = e.didNotMatchHydratedContainerTextInstance,
          e1 = e.didNotMatchHydratedTextInstance;
        function e2(e) {
          if (void 0 === N)
            try {
              throw Error();
            } catch (e) {
              var t = e.stack.trim().match(/\n( *(at )?)/);
              N = (t && t[1]) || "";
            }
          return "\n" + N + e;
        }
        var e3 = !1;
        function e4(e, t) {
          if (!e || e3) return "";
          e3 = !0;
          var n = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          try {
            if (t) {
              if (
                ((t = function () {
                  throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                "object" == typeof Reflect && Reflect.construct)
              ) {
                try {
                  Reflect.construct(t, []);
                } catch (e) {
                  var r = e;
                }
                Reflect.construct(e, [], t);
              } else {
                try {
                  t.call();
                } catch (e) {
                  r = e;
                }
                e.call(t.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (e) {
                r = e;
              }
              e();
            }
          } catch (t) {
            if (t && r && "string" == typeof t.stack) {
              for (
                var a = t.stack.split("\n"),
                  l = r.stack.split("\n"),
                  i = a.length - 1,
                  o = l.length - 1;
                1 <= i && 0 <= o && a[i] !== l[o];

              )
                o--;
              for (; 1 <= i && 0 <= o; i--, o--)
                if (a[i] !== l[o]) {
                  if (1 !== i || 1 !== o)
                    do
                      if ((i--, 0 > --o || a[i] !== l[o])) {
                        var u = "\n" + a[i].replace(" at new ", " at ");
                        return (
                          e.displayName &&
                            u.includes("<anonymous>") &&
                            (u = u.replace("<anonymous>", e.displayName)),
                          u
                        );
                      }
                    while (1 <= i && 0 <= o);
                  break;
                }
            }
          } finally {
            (e3 = !1), (Error.prepareStackTrace = n);
          }
          return (e = e ? e.displayName || e.name : "") ? e2(e) : "";
        }
        var e5 = Object.prototype.hasOwnProperty,
          e6 = [],
          e8 = -1;
        function e7(e) {
          return { current: e };
        }
        function e9(e) {
          0 > e8 || ((e.current = e6[e8]), (e6[e8] = null), e8--);
        }
        function te(e, t) {
          (e6[++e8] = e.current), (e.current = t);
        }
        var tt = {},
          tn = e7(tt),
          tr = e7(!1),
          ta = tt;
        function tl(e, t) {
          var n = e.type.contextTypes;
          if (!n) return tt;
          var r = e.stateNode;
          if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
            return r.__reactInternalMemoizedMaskedChildContext;
          var a,
            l = {};
          for (a in n) l[a] = t[a];
          return (
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                t),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            l
          );
        }
        function ti(e) {
          return null != (e = e.childContextTypes);
        }
        function to() {
          e9(tr), e9(tn);
        }
        function tu(e, t, n) {
          if (tn.current !== tt) throw Error(f(168));
          te(tn, t), te(tr, n);
        }
        function ts(e, t, n) {
          var r = e.stateNode;
          if (
            ((t = t.childContextTypes), "function" != typeof r.getChildContext)
          )
            return n;
          for (var a in (r = r.getChildContext()))
            if (!(a in t))
              throw Error(
                f(
                  108,
                  (function (e) {
                    var t = e.type;
                    switch (e.tag) {
                      case 24:
                        return "Cache";
                      case 9:
                        return (t.displayName || "Context") + ".Consumer";
                      case 10:
                        return (
                          (t._context.displayName || "Context") + ".Provider"
                        );
                      case 18:
                        return "DehydratedFragment";
                      case 11:
                        return (
                          (e = (e = t.render).displayName || e.name || ""),
                          t.displayName ||
                            ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef")
                        );
                      case 7:
                        return "Fragment";
                      case 5:
                        return t;
                      case 4:
                        return "Portal";
                      case 3:
                        return "Root";
                      case 6:
                        return "Text";
                      case 16:
                        return T(t);
                      case 8:
                        return t === g ? "StrictMode" : "Mode";
                      case 22:
                        return "Offscreen";
                      case 12:
                        return "Profiler";
                      case 21:
                        return "Scope";
                      case 13:
                        return "Suspense";
                      case 19:
                        return "SuspenseList";
                      case 25:
                        return "TracingMarker";
                      case 1:
                      case 0:
                      case 17:
                      case 2:
                      case 14:
                      case 15:
                        if ("function" == typeof t)
                          return t.displayName || t.name || null;
                        if ("string" == typeof t) return t;
                    }
                    return null;
                  })(e) || "Unknown",
                  a
                )
              );
          return c({}, n, r);
        }
        function tc(e) {
          return (
            (e =
              ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
              tt),
            (ta = tn.current),
            te(tn, e),
            te(tr, tr.current),
            !0
          );
        }
        function tf(e, t, n) {
          var r = e.stateNode;
          if (!r) throw Error(f(169));
          n
            ? ((e = ts(e, t, ta)),
              (r.__reactInternalMemoizedMergedChildContext = e),
              e9(tr),
              e9(tn),
              te(tn, e))
            : e9(tr),
            te(tr, n);
        }
        var td = Math.clz32
            ? Math.clz32
            : function (e) {
                return 0 == (e >>>= 0) ? 32 : (31 - ((tp(e) / th) | 0)) | 0;
              },
          tp = Math.log,
          th = Math.LN2,
          tv = 64,
          tg = 4194304;
        function tm(e) {
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
              return 4194240 & e;
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
              return 130023424 & e;
            case 134217728:
              return 134217728;
            case 268435456:
              return 268435456;
            case 536870912:
              return 536870912;
            case 1073741824:
              return 1073741824;
            default:
              return e;
          }
        }
        function ty(e, t) {
          var n = e.pendingLanes;
          if (0 === n) return 0;
          var r = 0,
            a = e.suspendedLanes,
            l = e.pingedLanes,
            i = 268435455 & n;
          if (0 !== i) {
            var o = i & ~a;
            0 !== o ? (r = tm(o)) : 0 != (l &= i) && (r = tm(l));
          } else 0 != (i = n & ~a) ? (r = tm(i)) : 0 !== l && (r = tm(l));
          if (0 === r) return 0;
          if (
            0 !== t &&
            t !== r &&
            0 == (t & a) &&
            ((a = r & -r) >= (l = t & -t) || (16 === a && 0 != (4194240 & l)))
          )
            return t;
          if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
            for (e = e.entanglements, t &= r; 0 < t; )
              (a = 1 << (n = 31 - td(t))), (r |= e[n]), (t &= ~a);
          return r;
        }
        function tb(e) {
          return 0 != (e = -1073741825 & e.pendingLanes)
            ? e
            : 1073741824 & e
            ? 1073741824
            : 0;
        }
        function tx(e) {
          for (var t = [], n = 0; 31 > n; n++) t.push(e);
          return t;
        }
        function tw(e, t, n) {
          (e.pendingLanes |= t),
            536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
            ((e = e.eventTimes)[(t = 31 - td(t))] = n);
        }
        function tS(e, t) {
          var n = (e.entangledLanes |= t);
          for (e = e.entanglements; n; ) {
            var r = 31 - td(n),
              a = 1 << r;
            (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
          }
        }
        var t_ = 0;
        function tk(e) {
          return 1 < (e &= -e)
            ? 4 < e
              ? 0 != (268435455 & e)
                ? 16
                : 536870912
              : 4
            : 1;
        }
        var tP = s.unstable_scheduleCallback,
          tC = s.unstable_cancelCallback,
          tE = s.unstable_shouldYield,
          tT = s.unstable_requestPaint,
          tM = s.unstable_now,
          tz = s.unstable_ImmediatePriority,
          tR = s.unstable_UserBlockingPriority,
          tO = s.unstable_NormalPriority,
          tN = s.unstable_IdlePriority,
          tI = null,
          tL = null,
          tD =
            "function" == typeof Object.is
              ? Object.is
              : function (e, t) {
                  return (
                    (e === t && (0 !== e || 1 / e == 1 / t)) ||
                    (e != e && t != t)
                  );
                },
          tF = null,
          tA = !1,
          tU = !1;
        function tB(e) {
          null === tF ? (tF = [e]) : tF.push(e);
        }
        function tj() {
          if (!tU && null !== tF) {
            tU = !0;
            var e = 0,
              t = t_;
            try {
              var n = tF;
              for (t_ = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (null !== r);
              }
              (tF = null), (tA = !1);
            } catch (t) {
              throw (null !== tF && (tF = tF.slice(e + 1)), tP(tz, tj), t);
            } finally {
              (t_ = t), (tU = !1);
            }
          }
          return null;
        }
        var tV = d.ReactCurrentBatchConfig;
        function tH(e, t) {
          if (tD(e, t)) return !0;
          if (
            "object" != typeof e ||
            null === e ||
            "object" != typeof t ||
            null === t
          )
            return !1;
          var n = Object.keys(e),
            r = Object.keys(t);
          if (n.length !== r.length) return !1;
          for (r = 0; r < n.length; r++) {
            var a = n[r];
            if (!e5.call(t, a) || !tD(e[a], t[a])) return !1;
          }
          return !0;
        }
        function tW(e, t) {
          if (e && e.defaultProps)
            for (var n in ((t = c({}, t)), (e = e.defaultProps)))
              void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        var tY = e7(null),
          tQ = null,
          tX = null,
          tq = null;
        function t$() {
          tq = tX = tQ = null;
        }
        function tG(e, t, n) {
          $
            ? (te(tY, t._currentValue), (t._currentValue = n))
            : (te(tY, t._currentValue2), (t._currentValue2 = n));
        }
        function tZ(e) {
          var t = tY.current;
          e9(tY), $ ? (e._currentValue = t) : (e._currentValue2 = t);
        }
        function tK(e, t, n) {
          for (; null !== e; ) {
            var r = e.alternate;
            if (
              ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
                : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
              e === n)
            )
              break;
            e = e.return;
          }
        }
        function tJ(e, t) {
          (tQ = e),
            (tq = tX = null),
            null !== (e = e.dependencies) &&
              null !== e.firstContext &&
              (0 != (e.lanes & t) && (r0 = !0), (e.firstContext = null));
        }
        function t0(e) {
          var t = $ ? e._currentValue : e._currentValue2;
          if (tq !== e) {
            if (
              ((e = { context: e, memoizedValue: t, next: null }), null === tX)
            ) {
              if (null === tQ) throw Error(f(308));
              (tX = e), (tQ.dependencies = { lanes: 0, firstContext: e });
            } else tX = tX.next = e;
          }
          return t;
        }
        var t1 = null,
          t2 = !1;
        function t3(e) {
          e.updateQueue = {
            baseState: e.memoizedState,
            firstBaseUpdate: null,
            lastBaseUpdate: null,
            shared: { pending: null, interleaved: null, lanes: 0 },
            effects: null,
          };
        }
        function t4(e, t) {
          (e = e.updateQueue),
            t.updateQueue === e &&
              (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
              });
        }
        function t5(e, t) {
          return {
            eventTime: e,
            lane: t,
            tag: 0,
            payload: null,
            callback: null,
            next: null,
          };
        }
        function t6(e, t) {
          var n = e.updateQueue;
          null !== n &&
            ((n = n.shared),
            null !== aq && 0 != (1 & e.mode) && 0 == (2 & aX)
              ? (null === (e = n.interleaved)
                  ? ((t.next = t), null === t1 ? (t1 = [n]) : t1.push(n))
                  : ((t.next = e.next), (e.next = t)),
                (n.interleaved = t))
              : (null === (e = n.pending)
                  ? (t.next = t)
                  : ((t.next = e.next), (e.next = t)),
                (n.pending = t)));
        }
        function t8(e, t, n) {
          if (
            null !== (t = t.updateQueue) &&
            ((t = t.shared), 0 != (4194240 & n))
          ) {
            var r = t.lanes;
            (r &= e.pendingLanes), (n |= r), (t.lanes = n), tS(e, n);
          }
        }
        function t7(e, t) {
          var n = e.updateQueue,
            r = e.alternate;
          if (null !== r && n === (r = r.updateQueue)) {
            var a = null,
              l = null;
            if (null !== (n = n.firstBaseUpdate)) {
              do {
                var i = {
                  eventTime: n.eventTime,
                  lane: n.lane,
                  tag: n.tag,
                  payload: n.payload,
                  callback: n.callback,
                  next: null,
                };
                null === l ? (a = l = i) : (l = l.next = i), (n = n.next);
              } while (null !== n);
              null === l ? (a = l = t) : (l = l.next = t);
            } else a = l = t;
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: a,
              lastBaseUpdate: l,
              shared: r.shared,
              effects: r.effects,
            }),
              (e.updateQueue = n);
            return;
          }
          null === (e = n.lastBaseUpdate)
            ? (n.firstBaseUpdate = t)
            : (e.next = t),
            (n.lastBaseUpdate = t);
        }
        function t9(e, t, n, r) {
          var a = e.updateQueue;
          t2 = !1;
          var l = a.firstBaseUpdate,
            i = a.lastBaseUpdate,
            o = a.shared.pending;
          if (null !== o) {
            a.shared.pending = null;
            var u = o,
              s = u.next;
            (u.next = null), null === i ? (l = s) : (i.next = s), (i = u);
            var f = e.alternate;
            null !== f &&
              (o = (f = f.updateQueue).lastBaseUpdate) !== i &&
              (null === o ? (f.firstBaseUpdate = s) : (o.next = s),
              (f.lastBaseUpdate = u));
          }
          if (null !== l) {
            var d = a.baseState;
            for (i = 0, f = s = u = null, o = l; ; ) {
              var p = o.lane,
                h = o.eventTime;
              if ((r & p) === p) {
                null !== f &&
                  (f = f.next =
                    {
                      eventTime: h,
                      lane: 0,
                      tag: o.tag,
                      payload: o.payload,
                      callback: o.callback,
                      next: null,
                    });
                e: {
                  var v = e,
                    g = o;
                  switch (((p = t), (h = n), g.tag)) {
                    case 1:
                      if ("function" == typeof (v = g.payload)) {
                        d = v.call(h, d, p);
                        break e;
                      }
                      d = v;
                      break e;
                    case 3:
                      v.flags = (-65537 & v.flags) | 128;
                    case 0:
                      if (
                        null ==
                        (p =
                          "function" == typeof (v = g.payload)
                            ? v.call(h, d, p)
                            : v)
                      )
                        break e;
                      d = c({}, d, p);
                      break e;
                    case 2:
                      t2 = !0;
                  }
                }
                null !== o.callback &&
                  0 !== o.lane &&
                  ((e.flags |= 64),
                  null === (p = a.effects) ? (a.effects = [o]) : p.push(o));
              } else
                (h = {
                  eventTime: h,
                  lane: p,
                  tag: o.tag,
                  payload: o.payload,
                  callback: o.callback,
                  next: null,
                }),
                  null === f ? ((s = f = h), (u = d)) : (f = f.next = h),
                  (i |= p);
              if (null === (o = o.next)) {
                if (null === (o = a.shared.pending)) break;
                (o = (p = o).next),
                  (p.next = null),
                  (a.lastBaseUpdate = p),
                  (a.shared.pending = null);
              }
            }
            if (
              (null === f && (u = d),
              (a.baseState = u),
              (a.firstBaseUpdate = s),
              (a.lastBaseUpdate = f),
              null !== (t = a.shared.interleaved))
            ) {
              a = t;
              do (i |= a.lane), (a = a.next);
              while (a !== t);
            } else null === l && (a.shared.lanes = 0);
            (a1 |= i), (e.lanes = i), (e.memoizedState = d);
          }
        }
        function ne(e, t, n) {
          if (((e = t.effects), (t.effects = null), null !== e))
            for (t = 0; t < e.length; t++) {
              var r = e[t],
                a = r.callback;
              if (null !== a) {
                if (((r.callback = null), (r = n), "function" != typeof a))
                  throw Error(f(191, a));
                a.call(r);
              }
            }
        }
        var nt = new u.Component().refs;
        function nn(e, t, n, r) {
          (n = null == (n = n(r, (t = e.memoizedState))) ? t : c({}, t, n)),
            (e.memoizedState = n),
            0 === e.lanes && (e.updateQueue.baseState = n);
        }
        var nr = {
          isMounted: function (e) {
            return !!(e = e._reactInternals) && M(e) === e;
          },
          enqueueSetState: function (e, t, n) {
            e = e._reactInternals;
            var r = ls(),
              a = lc(e),
              l = t5(r, a);
            (l.payload = t),
              null != n && (l.callback = n),
              t6(e, l),
              null !== (t = lf(e, a, r)) && t8(t, e, a);
          },
          enqueueReplaceState: function (e, t, n) {
            e = e._reactInternals;
            var r = ls(),
              a = lc(e),
              l = t5(r, a);
            (l.tag = 1),
              (l.payload = t),
              null != n && (l.callback = n),
              t6(e, l),
              null !== (t = lf(e, a, r)) && t8(t, e, a);
          },
          enqueueForceUpdate: function (e, t) {
            e = e._reactInternals;
            var n = ls(),
              r = lc(e),
              a = t5(n, r);
            (a.tag = 2),
              null != t && (a.callback = t),
              t6(e, a),
              null !== (t = lf(e, r, n)) && t8(t, e, r);
          },
        };
        function na(e, t, n, r, a, l, i) {
          return "function" == typeof (e = e.stateNode).shouldComponentUpdate
            ? e.shouldComponentUpdate(r, l, i)
            : !t.prototype ||
                !t.prototype.isPureReactComponent ||
                !tH(n, r) ||
                !tH(a, l);
        }
        function nl(e, t, n) {
          var r = !1,
            a = tt,
            l = t.contextType;
          return (
            "object" == typeof l && null !== l
              ? (l = t0(l))
              : ((a = ti(t) ? ta : tn.current),
                (l = (r = null != (r = t.contextTypes)) ? tl(e, a) : tt)),
            (t = new t(n, l)),
            (e.memoizedState =
              null !== t.state && void 0 !== t.state ? t.state : null),
            (t.updater = nr),
            (e.stateNode = t),
            (t._reactInternals = e),
            r &&
              (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
                a),
              (e.__reactInternalMemoizedMaskedChildContext = l)),
            t
          );
        }
        function ni(e, t, n, r) {
          (e = t.state),
            "function" == typeof t.componentWillReceiveProps &&
              t.componentWillReceiveProps(n, r),
            "function" == typeof t.UNSAFE_componentWillReceiveProps &&
              t.UNSAFE_componentWillReceiveProps(n, r),
            t.state !== e && nr.enqueueReplaceState(t, t.state, null);
        }
        function no(e, t, n, r) {
          var a = e.stateNode;
          (a.props = n), (a.state = e.memoizedState), (a.refs = nt), t3(e);
          var l = t.contextType;
          "object" == typeof l && null !== l
            ? (a.context = t0(l))
            : ((l = ti(t) ? ta : tn.current), (a.context = tl(e, l))),
            (a.state = e.memoizedState),
            "function" == typeof (l = t.getDerivedStateFromProps) &&
              (nn(e, t, l, n), (a.state = e.memoizedState)),
            "function" == typeof t.getDerivedStateFromProps ||
              "function" == typeof a.getSnapshotBeforeUpdate ||
              ("function" != typeof a.UNSAFE_componentWillMount &&
                "function" != typeof a.componentWillMount) ||
              ((t = a.state),
              "function" == typeof a.componentWillMount &&
                a.componentWillMount(),
              "function" == typeof a.UNSAFE_componentWillMount &&
                a.UNSAFE_componentWillMount(),
              t !== a.state && nr.enqueueReplaceState(a, a.state, null),
              t9(e, n, a, r),
              (a.state = e.memoizedState)),
            "function" == typeof a.componentDidMount && (e.flags |= 4194308);
        }
        var nu = [],
          ns = 0,
          nc = null,
          nf = 0,
          nd = [],
          np = 0,
          nh = null,
          nv = 1,
          ng = "";
        function nm(e, t) {
          (nu[ns++] = nf), (nu[ns++] = nc), (nc = e), (nf = t);
        }
        function ny(e, t, n) {
          (nd[np++] = nv), (nd[np++] = ng), (nd[np++] = nh), (nh = e);
          var r = nv;
          e = ng;
          var a = 32 - td(r) - 1;
          (r &= ~(1 << a)), (n += 1);
          var l = 32 - td(t) + a;
          if (30 < l) {
            var i = a - (a % 5);
            (l = (r & ((1 << i) - 1)).toString(32)),
              (r >>= i),
              (a -= i),
              (nv = (1 << (32 - td(t) + a)) | (n << a) | r),
              (ng = l + e);
          } else (nv = (1 << l) | (n << a) | r), (ng = e);
        }
        function nb(e) {
          null !== e.return && (nm(e, 1), ny(e, 1, 0));
        }
        function nx(e) {
          for (; e === nc; )
            (nc = nu[--ns]), (nu[ns] = null), (nf = nu[--ns]), (nu[ns] = null);
          for (; e === nh; )
            (nh = nd[--np]),
              (nd[np] = null),
              (ng = nd[--np]),
              (nd[np] = null),
              (nv = nd[--np]),
              (nd[np] = null);
        }
        var nw = null,
          nS = null,
          n_ = !1,
          nk = !1,
          nP = null;
        function nC(e, t) {
          var n = lF(5, null, null, 0);
          (n.elementType = "DELETED"),
            (n.stateNode = t),
            (n.return = e),
            null === (t = e.deletions)
              ? ((e.deletions = [n]), (e.flags |= 16))
              : t.push(n);
        }
        function nE(e, t) {
          switch (e.tag) {
            case 5:
              return (
                null !== (t = eL(t, e.type, e.pendingProps)) &&
                ((e.stateNode = t), (nw = e), (nS = eV(t)), !0)
              );
            case 6:
              return (
                null !== (t = eD(t, e.pendingProps)) &&
                ((e.stateNode = t), (nw = e), (nS = null), !0)
              );
            case 13:
              if (null !== (t = eF(t))) {
                var n = null !== nh ? { id: nv, overflow: ng } : null;
                return (
                  (e.memoizedState = {
                    dehydrated: t,
                    treeContext: n,
                    retryLane: 1073741824,
                  }),
                  ((n = lF(18, null, null, 0)).stateNode = t),
                  (n.return = e),
                  (e.child = n),
                  (nw = e),
                  (nS = null),
                  !0
                );
              }
              return !1;
            default:
              return !1;
          }
        }
        function nT(e) {
          return 0 != (1 & e.mode) && 0 == (128 & e.flags);
        }
        function nM(e) {
          if (n_) {
            var t = nS;
            if (t) {
              var n = t;
              if (!nE(e, t)) {
                if (nT(e)) throw Error(f(418));
                t = ej(n);
                var r = nw;
                t && nE(e, t)
                  ? nC(r, n)
                  : ((e.flags = (-4097 & e.flags) | 2), (n_ = !1), (nw = e));
              }
            } else {
              if (nT(e)) throw Error(f(418));
              (e.flags = (-4097 & e.flags) | 2), (n_ = !1), (nw = e);
            }
          }
        }
        function nz(e) {
          for (
            e = e.return;
            null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

          )
            e = e.return;
          nw = e;
        }
        function nR(e) {
          if (!K || e !== nw) return !1;
          if (!n_) return nz(e), (n_ = !0), !1;
          if (
            3 !== e.tag &&
            (5 !== e.tag || (eJ(e.type) && !W(e.type, e.memoizedProps)))
          ) {
            var t = nS;
            if (t) {
              if (nT(e)) {
                for (e = nS; e; ) e = ej(e);
                throw Error(f(418));
              }
              for (; t; ) nC(e, t), (t = ej(t));
            }
          }
          if ((nz(e), 13 === e.tag)) {
            if (!K) throw Error(f(316));
            if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
              throw Error(f(317));
            nS = eq(e);
          } else nS = nw ? ej(e.stateNode) : null;
          return !0;
        }
        function nO() {
          K && ((nS = nw = null), (nk = n_ = !1));
        }
        function nN(e) {
          null === nP ? (nP = [e]) : nP.push(e);
        }
        function nI(e, t, n) {
          if (
            null !== (e = n.ref) &&
            "function" != typeof e &&
            "object" != typeof e
          ) {
            if (n._owner) {
              if ((n = n._owner)) {
                if (1 !== n.tag) throw Error(f(309));
                var r = n.stateNode;
              }
              if (!r) throw Error(f(147, e));
              var a = r,
                l = "" + e;
              return null !== t &&
                null !== t.ref &&
                "function" == typeof t.ref &&
                t.ref._stringRef === l
                ? t.ref
                : (((t = function (e) {
                    var t = a.refs;
                    t === nt && (t = a.refs = {}),
                      null === e ? delete t[l] : (t[l] = e);
                  })._stringRef = l),
                  t);
            }
            if ("string" != typeof e) throw Error(f(284));
            if (!n._owner) throw Error(f(290, e));
          }
          return e;
        }
        function nL(e, t) {
          throw Error(
            f(
              31,
              "[object Object]" === (e = Object.prototype.toString.call(t))
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : e
            )
          );
        }
        function nD(e) {
          return (0, e._init)(e._payload);
        }
        function nF(e) {
          function t(t, n) {
            if (e) {
              var r = t.deletions;
              null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n);
            }
          }
          function n(n, r) {
            if (!e) return null;
            for (; null !== r; ) t(n, r), (r = r.sibling);
            return null;
          }
          function r(e, t) {
            for (e = new Map(); null !== t; )
              null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
                (t = t.sibling);
            return e;
          }
          function a(e, t) {
            return ((e = lU(e, t)).index = 0), (e.sibling = null), e;
          }
          function l(t, n, r) {
            return ((t.index = r), e)
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags |= 2), n)
                  : r
                : ((t.flags |= 2), n)
              : ((t.flags |= 1048576), n);
          }
          function i(t) {
            return e && null === t.alternate && (t.flags |= 2), t;
          }
          function o(e, t, n, r) {
            return (
              null === t || 6 !== t.tag
                ? ((t = lH(n, e.mode, r)).return = e)
                : ((t = a(t, n)).return = e),
              t
            );
          }
          function u(e, t, n, r) {
            var l = n.type;
            return l === v
              ? c(e, t, n.props.children, r, n.key)
              : (null !== t &&
                (t.elementType === l ||
                  ("object" == typeof l &&
                    null !== l &&
                    l.$$typeof === k &&
                    nD(l) === t.type))
                  ? ((r = a(t, n.props)).ref = nI(e, t, n))
                  : ((r = lB(n.type, n.key, n.props, null, e.mode, r)).ref = nI(
                      e,
                      t,
                      n
                    )),
                (r.return = e),
                r);
          }
          function s(e, t, n, r) {
            return (
              null === t ||
              4 !== t.tag ||
              t.stateNode.containerInfo !== n.containerInfo ||
              t.stateNode.implementation !== n.implementation
                ? ((t = lW(n, e.mode, r)).return = e)
                : ((t = a(t, n.children || [])).return = e),
              t
            );
          }
          function c(e, t, n, r, l) {
            return (
              null === t || 7 !== t.tag
                ? ((t = lj(n, e.mode, r, l)).return = e)
                : ((t = a(t, n)).return = e),
              t
            );
          }
          function d(e, t, n) {
            if (("string" == typeof t && "" !== t) || "number" == typeof t)
              return ((t = lH("" + t, e.mode, n)).return = e), t;
            if ("object" == typeof t && null !== t) {
              switch (t.$$typeof) {
                case p:
                  return (
                    ((n = lB(t.type, t.key, t.props, null, e.mode, n)).ref = nI(
                      e,
                      null,
                      t
                    )),
                    (n.return = e),
                    n
                  );
                case h:
                  return ((t = lW(t, e.mode, n)).return = e), t;
                case k:
                  return d(e, (0, t._init)(t._payload), n);
              }
              if (I(t) || E(t))
                return ((t = lj(t, e.mode, n, null)).return = e), t;
              nL(e, t);
            }
            return null;
          }
          function g(e, t, n, r) {
            var a = null !== t ? t.key : null;
            if (("string" == typeof n && "" !== n) || "number" == typeof n)
              return null !== a ? null : o(e, t, "" + n, r);
            if ("object" == typeof n && null !== n) {
              switch (n.$$typeof) {
                case p:
                  return n.key === a ? u(e, t, n, r) : null;
                case h:
                  return n.key === a ? s(e, t, n, r) : null;
                case k:
                  return g(e, t, (a = n._init)(n._payload), r);
              }
              if (I(n) || E(n)) return null !== a ? null : c(e, t, n, r, null);
              nL(e, n);
            }
            return null;
          }
          function m(e, t, n, r, a) {
            if (("string" == typeof r && "" !== r) || "number" == typeof r)
              return o(t, (e = e.get(n) || null), "" + r, a);
            if ("object" == typeof r && null !== r) {
              switch (r.$$typeof) {
                case p:
                  return u(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case h:
                  return s(
                    t,
                    (e = e.get(null === r.key ? n : r.key) || null),
                    r,
                    a
                  );
                case k:
                  return m(e, t, n, (0, r._init)(r._payload), a);
              }
              if (I(r) || E(r)) return c(t, (e = e.get(n) || null), r, a, null);
              nL(t, r);
            }
            return null;
          }
          return function o(u, s, c, y) {
            if (
              ("object" == typeof c &&
                null !== c &&
                c.type === v &&
                null === c.key &&
                (c = c.props.children),
              "object" == typeof c && null !== c)
            ) {
              switch (c.$$typeof) {
                case p:
                  e: {
                    for (var b = c.key, x = s; null !== x; ) {
                      if (x.key === b) {
                        if ((b = c.type) === v) {
                          if (7 === x.tag) {
                            n(u, x.sibling),
                              ((s = a(x, c.props.children)).return = u),
                              (u = s);
                            break e;
                          }
                        } else if (
                          x.elementType === b ||
                          ("object" == typeof b &&
                            null !== b &&
                            b.$$typeof === k &&
                            nD(b) === x.type)
                        ) {
                          n(u, x.sibling),
                            ((s = a(x, c.props)).ref = nI(u, x, c)),
                            (s.return = u),
                            (u = s);
                          break e;
                        }
                        n(u, x);
                        break;
                      }
                      t(u, x), (x = x.sibling);
                    }
                    c.type === v
                      ? (((s = lj(c.props.children, u.mode, y, c.key)).return =
                          u),
                        (u = s))
                      : (((y = lB(
                          c.type,
                          c.key,
                          c.props,
                          null,
                          u.mode,
                          y
                        )).ref = nI(u, s, c)),
                        (y.return = u),
                        (u = y));
                  }
                  return i(u);
                case h:
                  e: {
                    for (x = c.key; null !== s; ) {
                      if (s.key === x) {
                        if (
                          4 === s.tag &&
                          s.stateNode.containerInfo === c.containerInfo &&
                          s.stateNode.implementation === c.implementation
                        ) {
                          n(u, s.sibling),
                            ((s = a(s, c.children || [])).return = u),
                            (u = s);
                          break e;
                        }
                        n(u, s);
                        break;
                      }
                      t(u, s), (s = s.sibling);
                    }
                    ((s = lW(c, u.mode, y)).return = u), (u = s);
                  }
                  return i(u);
                case k:
                  return o(u, s, (x = c._init)(c._payload), y);
              }
              if (I(c))
                return (function (a, i, o, u) {
                  for (
                    var s = null, c = null, f = i, p = (i = 0), h = null;
                    null !== f && p < o.length;
                    p++
                  ) {
                    f.index > p ? ((h = f), (f = null)) : (h = f.sibling);
                    var v = g(a, f, o[p], u);
                    if (null === v) {
                      null === f && (f = h);
                      break;
                    }
                    e && f && null === v.alternate && t(a, f),
                      (i = l(v, i, p)),
                      null === c ? (s = v) : (c.sibling = v),
                      (c = v),
                      (f = h);
                  }
                  if (p === o.length) return n(a, f), n_ && nm(a, p), s;
                  if (null === f) {
                    for (; p < o.length; p++)
                      null !== (f = d(a, o[p], u)) &&
                        ((i = l(f, i, p)),
                        null === c ? (s = f) : (c.sibling = f),
                        (c = f));
                    return n_ && nm(a, p), s;
                  }
                  for (f = r(a, f); p < o.length; p++)
                    null !== (h = m(f, a, p, o[p], u)) &&
                      (e &&
                        null !== h.alternate &&
                        f.delete(null === h.key ? p : h.key),
                      (i = l(h, i, p)),
                      null === c ? (s = h) : (c.sibling = h),
                      (c = h));
                  return (
                    e &&
                      f.forEach(function (e) {
                        return t(a, e);
                      }),
                    n_ && nm(a, p),
                    s
                  );
                })(u, s, c, y);
              if (E(c))
                return (function (a, i, o, u) {
                  var s = E(o);
                  if ("function" != typeof s) throw Error(f(150));
                  if (null == (o = s.call(o))) throw Error(f(151));
                  for (
                    var c = (s = null),
                      p = i,
                      h = (i = 0),
                      v = null,
                      y = o.next();
                    null !== p && !y.done;
                    h++, y = o.next()
                  ) {
                    p.index > h ? ((v = p), (p = null)) : (v = p.sibling);
                    var b = g(a, p, y.value, u);
                    if (null === b) {
                      null === p && (p = v);
                      break;
                    }
                    e && p && null === b.alternate && t(a, p),
                      (i = l(b, i, h)),
                      null === c ? (s = b) : (c.sibling = b),
                      (c = b),
                      (p = v);
                  }
                  if (y.done) return n(a, p), n_ && nm(a, h), s;
                  if (null === p) {
                    for (; !y.done; h++, y = o.next())
                      null !== (y = d(a, y.value, u)) &&
                        ((i = l(y, i, h)),
                        null === c ? (s = y) : (c.sibling = y),
                        (c = y));
                    return n_ && nm(a, h), s;
                  }
                  for (p = r(a, p); !y.done; h++, y = o.next())
                    null !== (y = m(p, a, h, y.value, u)) &&
                      (e &&
                        null !== y.alternate &&
                        p.delete(null === y.key ? h : y.key),
                      (i = l(y, i, h)),
                      null === c ? (s = y) : (c.sibling = y),
                      (c = y));
                  return (
                    e &&
                      p.forEach(function (e) {
                        return t(a, e);
                      }),
                    n_ && nm(a, h),
                    s
                  );
                })(u, s, c, y);
              nL(u, c);
            }
            return ("string" == typeof c && "" !== c) || "number" == typeof c
              ? ((c = "" + c),
                null !== s && 6 === s.tag
                  ? (n(u, s.sibling), ((s = a(s, c)).return = u))
                  : (n(u, s), ((s = lH(c, u.mode, y)).return = u)),
                i((u = s)))
              : n(u, s);
          };
        }
        var nA = nF(!0),
          nU = nF(!1),
          nB = {},
          nj = e7(nB),
          nV = e7(nB),
          nH = e7(nB);
        function nW(e) {
          if (e === nB) throw Error(f(174));
          return e;
        }
        function nY(e, t) {
          te(nH, t), te(nV, e), te(nj, nB), (e = D(t)), e9(nj), te(nj, e);
        }
        function nQ() {
          e9(nj), e9(nV), e9(nH);
        }
        function nX(e) {
          var t = nW(nH.current),
            n = nW(nj.current);
          (t = F(n, e.type, t)), n !== t && (te(nV, e), te(nj, t));
        }
        function nq(e) {
          nV.current === e && (e9(nj), e9(nV));
        }
        var n$ = e7(0);
        function nG(e) {
          for (var t = e; null !== t; ) {
            if (13 === t.tag) {
              var n = t.memoizedState;
              if (null !== n && (null === (n = n.dehydrated) || eA(n) || eU(n)))
                return t;
            } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
              if (0 != (128 & t.flags)) return t;
            } else if (null !== t.child) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break;
            for (; null === t.sibling; ) {
              if (null === t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
          return null;
        }
        var nZ = [];
        function nK() {
          for (var e = 0; e < nZ.length; e++) {
            var t = nZ[e];
            $
              ? (t._workInProgressVersionPrimary = null)
              : (t._workInProgressVersionSecondary = null);
          }
          nZ.length = 0;
        }
        var nJ = d.ReactCurrentDispatcher,
          n0 = d.ReactCurrentBatchConfig,
          n1 = 0,
          n2 = null,
          n3 = null,
          n4 = null,
          n5 = !1,
          n6 = !1,
          n8 = 0,
          n7 = 0;
        function n9() {
          throw Error(f(321));
        }
        function re(e, t) {
          if (null === t) return !1;
          for (var n = 0; n < t.length && n < e.length; n++)
            if (!tD(e[n], t[n])) return !1;
          return !0;
        }
        function rt(e, t, n, r, a, l) {
          if (
            ((n1 = l),
            (n2 = t),
            (t.memoizedState = null),
            (t.updateQueue = null),
            (t.lanes = 0),
            (nJ.current = null === e || null === e.memoizedState ? rF : rA),
            (e = n(r, a)),
            n6)
          ) {
            l = 0;
            do {
              if (((n6 = !1), (n8 = 0), 25 <= l)) throw Error(f(301));
              (l += 1),
                (n4 = n3 = null),
                (t.updateQueue = null),
                (nJ.current = rU),
                (e = n(r, a));
            } while (n6);
          }
          if (
            ((nJ.current = rD),
            (t = null !== n3 && null !== n3.next),
            (n1 = 0),
            (n4 = n3 = n2 = null),
            (n5 = !1),
            t)
          )
            throw Error(f(300));
          return e;
        }
        function rn() {
          var e = 0 !== n8;
          return (n8 = 0), e;
        }
        function rr() {
          var e = {
            memoizedState: null,
            baseState: null,
            baseQueue: null,
            queue: null,
            next: null,
          };
          return (
            null === n4 ? (n2.memoizedState = n4 = e) : (n4 = n4.next = e), n4
          );
        }
        function ra() {
          if (null === n3) {
            var e = n2.alternate;
            e = null !== e ? e.memoizedState : null;
          } else e = n3.next;
          var t = null === n4 ? n2.memoizedState : n4.next;
          if (null !== t) (n4 = t), (n3 = e);
          else {
            if (null === e) throw Error(f(310));
            (e = {
              memoizedState: (n3 = e).memoizedState,
              baseState: n3.baseState,
              baseQueue: n3.baseQueue,
              queue: n3.queue,
              next: null,
            }),
              null === n4 ? (n2.memoizedState = n4 = e) : (n4 = n4.next = e);
          }
          return n4;
        }
        function rl(e, t) {
          return "function" == typeof t ? t(e) : t;
        }
        function ri(e) {
          var t = ra(),
            n = t.queue;
          if (null === n) throw Error(f(311));
          n.lastRenderedReducer = e;
          var r = n3,
            a = r.baseQueue,
            l = n.pending;
          if (null !== l) {
            if (null !== a) {
              var i = a.next;
              (a.next = l.next), (l.next = i);
            }
            (r.baseQueue = a = l), (n.pending = null);
          }
          if (null !== a) {
            (l = a.next), (r = r.baseState);
            var o = (i = null),
              u = null,
              s = l;
            do {
              var c = s.lane;
              if ((n1 & c) === c)
                null !== u &&
                  (u = u.next =
                    {
                      lane: 0,
                      action: s.action,
                      hasEagerState: s.hasEagerState,
                      eagerState: s.eagerState,
                      next: null,
                    }),
                  (r = s.hasEagerState ? s.eagerState : e(r, s.action));
              else {
                var d = {
                  lane: c,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                };
                null === u ? ((o = u = d), (i = r)) : (u = u.next = d),
                  (n2.lanes |= c),
                  (a1 |= c);
              }
              s = s.next;
            } while (null !== s && s !== l);
            null === u ? (i = r) : (u.next = o),
              tD(r, t.memoizedState) || (r0 = !0),
              (t.memoizedState = r),
              (t.baseState = i),
              (t.baseQueue = u),
              (n.lastRenderedState = r);
          }
          if (null !== (e = n.interleaved)) {
            a = e;
            do (l = a.lane), (n2.lanes |= l), (a1 |= l), (a = a.next);
            while (a !== e);
          } else null === a && (n.lanes = 0);
          return [t.memoizedState, n.dispatch];
        }
        function ro(e) {
          var t = ra(),
            n = t.queue;
          if (null === n) throw Error(f(311));
          n.lastRenderedReducer = e;
          var r = n.dispatch,
            a = n.pending,
            l = t.memoizedState;
          if (null !== a) {
            n.pending = null;
            var i = (a = a.next);
            do (l = e(l, i.action)), (i = i.next);
            while (i !== a);
            tD(l, t.memoizedState) || (r0 = !0),
              (t.memoizedState = l),
              null === t.baseQueue && (t.baseState = l),
              (n.lastRenderedState = l);
          }
          return [l, r];
        }
        function ru() {}
        function rs(e, t) {
          var n = n2,
            r = ra(),
            a = t(),
            l = !tD(r.memoizedState, a);
          if (
            (l && ((r.memoizedState = a), (r0 = !0)),
            (r = r.queue),
            rx(rd.bind(null, n, r, e), [e]),
            r.getSnapshot !== t ||
              l ||
              (null !== n4 && 1 & n4.memoizedState.tag))
          ) {
            if (
              ((n.flags |= 2048),
              rv(9, rf.bind(null, n, r, a, t), void 0, null),
              null === aq)
            )
              throw Error(f(349));
            0 != (30 & n1) || rc(n, t, a);
          }
          return a;
        }
        function rc(e, t, n) {
          (e.flags |= 16384),
            (e = { getSnapshot: t, value: n }),
            null === (t = n2.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (n2.updateQueue = t),
                (t.stores = [e]))
              : null === (n = t.stores)
              ? (t.stores = [e])
              : n.push(e);
        }
        function rf(e, t, n, r) {
          (t.value = n), (t.getSnapshot = r), rp(t) && lf(e, 1, -1);
        }
        function rd(e, t, n) {
          return n(function () {
            rp(t) && lf(e, 1, -1);
          });
        }
        function rp(e) {
          var t = e.getSnapshot;
          e = e.value;
          try {
            var n = t();
            return !tD(e, n);
          } catch (e) {
            return !0;
          }
        }
        function rh(e) {
          var t = rr();
          return (
            "function" == typeof e && (e = e()),
            (t.memoizedState = t.baseState = e),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: rl,
              lastRenderedState: e,
            }),
            (t.queue = e),
            (e = e.dispatch = rR.bind(null, n2, e)),
            [t.memoizedState, e]
          );
        }
        function rv(e, t, n, r) {
          return (
            (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
            null === (t = n2.updateQueue)
              ? ((t = { lastEffect: null, stores: null }),
                (n2.updateQueue = t),
                (t.lastEffect = e.next = e))
              : null === (n = t.lastEffect)
              ? (t.lastEffect = e.next = e)
              : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
            e
          );
        }
        function rg() {
          return ra().memoizedState;
        }
        function rm(e, t, n, r) {
          var a = rr();
          (n2.flags |= e),
            (a.memoizedState = rv(1 | t, n, void 0, void 0 === r ? null : r));
        }
        function ry(e, t, n, r) {
          var a = ra();
          r = void 0 === r ? null : r;
          var l = void 0;
          if (null !== n3) {
            var i = n3.memoizedState;
            if (((l = i.destroy), null !== r && re(r, i.deps))) {
              a.memoizedState = rv(t, n, l, r);
              return;
            }
          }
          (n2.flags |= e), (a.memoizedState = rv(1 | t, n, l, r));
        }
        function rb(e, t) {
          return rm(8390656, 8, e, t);
        }
        function rx(e, t) {
          return ry(2048, 8, e, t);
        }
        function rw(e, t) {
          return ry(4, 2, e, t);
        }
        function rS(e, t) {
          return ry(4, 4, e, t);
        }
        function r_(e, t) {
          return "function" == typeof t
            ? (t((e = e())),
              function () {
                t(null);
              })
            : null != t
            ? ((e = e()),
              (t.current = e),
              function () {
                t.current = null;
              })
            : void 0;
        }
        function rk(e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            ry(4, 4, r_.bind(null, t, e), n)
          );
        }
        function rP() {}
        function rC(e, t) {
          var n = ra();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && re(t, r[1])
            ? r[0]
            : ((n.memoizedState = [e, t]), e);
        }
        function rE(e, t) {
          var n = ra();
          t = void 0 === t ? null : t;
          var r = n.memoizedState;
          return null !== r && null !== t && re(t, r[1])
            ? r[0]
            : ((e = e()), (n.memoizedState = [e, t]), e);
        }
        function rT(e, t) {
          var n = t_;
          (t_ = 0 !== n && 4 > n ? n : 4), e(!0);
          var r = n0.transition;
          n0.transition = {};
          try {
            e(!1), t();
          } finally {
            (t_ = n), (n0.transition = r);
          }
        }
        function rM() {
          return ra().memoizedState;
        }
        function rz(e, t, n) {
          var r = lc(e);
          (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
          }),
            rO(e)
              ? rN(t, n)
              : (rI(e, t, n),
                null !== (e = lf(e, r, (n = ls()))) && rL(e, t, r));
        }
        function rR(e, t, n) {
          var r = lc(e),
            a = {
              lane: r,
              action: n,
              hasEagerState: !1,
              eagerState: null,
              next: null,
            };
          if (rO(e)) rN(t, a);
          else {
            rI(e, t, a);
            var l = e.alternate;
            if (
              0 === e.lanes &&
              (null === l || 0 === l.lanes) &&
              null !== (l = t.lastRenderedReducer)
            )
              try {
                var i = t.lastRenderedState,
                  o = l(i, n);
                if (((a.hasEagerState = !0), (a.eagerState = o), tD(o, i)))
                  return;
              } catch (e) {
              } finally {
              }
            null !== (e = lf(e, r, (n = ls()))) && rL(e, t, r);
          }
        }
        function rO(e) {
          var t = e.alternate;
          return e === n2 || (null !== t && t === n2);
        }
        function rN(e, t) {
          n6 = n5 = !0;
          var n = e.pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
        function rI(e, t, n) {
          null !== aq && 0 != (1 & e.mode) && 0 == (2 & aX)
            ? (null === (e = t.interleaved)
                ? ((n.next = n), null === t1 ? (t1 = [t]) : t1.push(t))
                : ((n.next = e.next), (e.next = n)),
              (t.interleaved = n))
            : (null === (e = t.pending)
                ? (n.next = n)
                : ((n.next = e.next), (e.next = n)),
              (t.pending = n));
        }
        function rL(e, t, n) {
          if (0 != (4194240 & n)) {
            var r = t.lanes;
            (r &= e.pendingLanes), (n |= r), (t.lanes = n), tS(e, n);
          }
        }
        var rD = {
            readContext: t0,
            useCallback: n9,
            useContext: n9,
            useEffect: n9,
            useImperativeHandle: n9,
            useInsertionEffect: n9,
            useLayoutEffect: n9,
            useMemo: n9,
            useReducer: n9,
            useRef: n9,
            useState: n9,
            useDebugValue: n9,
            useDeferredValue: n9,
            useTransition: n9,
            useMutableSource: n9,
            useSyncExternalStore: n9,
            useId: n9,
            unstable_isNewReconciler: !1,
          },
          rF = {
            readContext: t0,
            useCallback: function (e, t) {
              return (rr().memoizedState = [e, void 0 === t ? null : t]), e;
            },
            useContext: t0,
            useEffect: rb,
            useImperativeHandle: function (e, t, n) {
              return (
                (n = null != n ? n.concat([e]) : null),
                rm(4194308, 4, r_.bind(null, t, e), n)
              );
            },
            useLayoutEffect: function (e, t) {
              return rm(4194308, 4, e, t);
            },
            useInsertionEffect: function (e, t) {
              return rm(4, 2, e, t);
            },
            useMemo: function (e, t) {
              var n = rr();
              return (
                (t = void 0 === t ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
              );
            },
            useReducer: function (e, t, n) {
              var r = rr();
              return (
                (t = void 0 !== n ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                  pending: null,
                  interleaved: null,
                  lanes: 0,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = rz.bind(null, n2, e)),
                [r.memoizedState, e]
              );
            },
            useRef: function (e) {
              return (e = { current: e }), (rr().memoizedState = e);
            },
            useState: rh,
            useDebugValue: rP,
            useDeferredValue: function (e) {
              var t = rh(e),
                n = t[0],
                r = t[1];
              return (
                rb(
                  function () {
                    var t = n0.transition;
                    n0.transition = {};
                    try {
                      r(e);
                    } finally {
                      n0.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              var e = rh(!1),
                t = e[0];
              return (
                (e = rT.bind(null, e[1])), (rr().memoizedState = e), [t, e]
              );
            },
            useMutableSource: function () {},
            useSyncExternalStore: function (e, t, n) {
              var r = n2,
                a = rr();
              if (n_) {
                if (void 0 === n) throw Error(f(407));
                n = n();
              } else {
                if (((n = t()), null === aq)) throw Error(f(349));
                0 != (30 & n1) || rc(r, t, n);
              }
              a.memoizedState = n;
              var l = { value: n, getSnapshot: t };
              return (
                (a.queue = l),
                rb(rd.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                rv(9, rf.bind(null, r, l, n, t), void 0, null),
                n
              );
            },
            useId: function () {
              var e = rr(),
                t = aq.identifierPrefix;
              if (n_) {
                var n = ng,
                  r = nv;
                (t =
                  ":" +
                  t +
                  "R" +
                  (n = (r & ~(1 << (32 - td(r) - 1))).toString(32) + n)),
                  0 < (n = n8++) && (t += "H" + n.toString(32)),
                  (t += ":");
              } else t = ":" + t + "r" + (n = n7++).toString(32) + ":";
              return (e.memoizedState = t);
            },
            unstable_isNewReconciler: !1,
          },
          rA = {
            readContext: t0,
            useCallback: rC,
            useContext: t0,
            useEffect: rx,
            useImperativeHandle: rk,
            useInsertionEffect: rw,
            useLayoutEffect: rS,
            useMemo: rE,
            useReducer: ri,
            useRef: rg,
            useState: function () {
              return ri(rl);
            },
            useDebugValue: rP,
            useDeferredValue: function (e) {
              var t = ri(rl),
                n = t[0],
                r = t[1];
              return (
                rx(
                  function () {
                    var t = n0.transition;
                    n0.transition = {};
                    try {
                      r(e);
                    } finally {
                      n0.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              return [ri(rl)[0], ra().memoizedState];
            },
            useMutableSource: ru,
            useSyncExternalStore: rs,
            useId: rM,
            unstable_isNewReconciler: !1,
          },
          rU = {
            readContext: t0,
            useCallback: rC,
            useContext: t0,
            useEffect: rx,
            useImperativeHandle: rk,
            useInsertionEffect: rw,
            useLayoutEffect: rS,
            useMemo: rE,
            useReducer: ro,
            useRef: rg,
            useState: function () {
              return ro(rl);
            },
            useDebugValue: rP,
            useDeferredValue: function (e) {
              var t = ro(rl),
                n = t[0],
                r = t[1];
              return (
                rx(
                  function () {
                    var t = n0.transition;
                    n0.transition = {};
                    try {
                      r(e);
                    } finally {
                      n0.transition = t;
                    }
                  },
                  [e]
                ),
                n
              );
            },
            useTransition: function () {
              return [ro(rl)[0], ra().memoizedState];
            },
            useMutableSource: ru,
            useSyncExternalStore: rs,
            useId: rM,
            unstable_isNewReconciler: !1,
          };
        function rB(e, t) {
          try {
            var n = "",
              r = t;
            do
              (n += (function (e) {
                switch (e.tag) {
                  case 5:
                    return e2(e.type);
                  case 16:
                    return e2("Lazy");
                  case 13:
                    return e2("Suspense");
                  case 19:
                    return e2("SuspenseList");
                  case 0:
                  case 2:
                  case 15:
                    return (e = e4(e.type, !1));
                  case 11:
                    return (e = e4(e.type.render, !1));
                  case 1:
                    return (e = e4(e.type, !0));
                  default:
                    return "";
                }
              })(r)),
                (r = r.return);
            while (r);
            var a = n;
          } catch (e) {
            a = "\nError generating stack: " + e.message + "\n" + e.stack;
          }
          return { value: e, source: t, stack: a };
        }
        function rj(e, t) {
          try {
            console.error(t.value);
          } catch (e) {
            setTimeout(function () {
              throw e;
            });
          }
        }
        var rV = "function" == typeof WeakMap ? WeakMap : Map;
        function rH(e, t, n) {
          ((n = t5(-1, n)).tag = 3), (n.payload = { element: null });
          var r = t.value;
          return (
            (n.callback = function () {
              a9 || ((a9 = !0), (le = r)), rj(e, t);
            }),
            n
          );
        }
        function rW(e, t, n) {
          (n = t5(-1, n)).tag = 3;
          var r = e.type.getDerivedStateFromError;
          if ("function" == typeof r) {
            var a = t.value;
            (n.payload = function () {
              return r(a);
            }),
              (n.callback = function () {
                rj(e, t);
              });
          }
          var l = e.stateNode;
          return (
            null !== l &&
              "function" == typeof l.componentDidCatch &&
              (n.callback = function () {
                rj(e, t),
                  "function" != typeof r &&
                    (null === lt ? (lt = new Set([this])) : lt.add(this));
                var n = t.stack;
                this.componentDidCatch(t.value, {
                  componentStack: null !== n ? n : "",
                });
              }),
            n
          );
        }
        function rY(e, t, n) {
          var r = e.pingCache;
          if (null === r) {
            r = e.pingCache = new rV();
            var a = new Set();
            r.set(t, a);
          } else void 0 === (a = r.get(t)) && ((a = new Set()), r.set(t, a));
          a.has(n) || (a.add(n), (e = lO.bind(null, e, t, n)), t.then(e, e));
        }
        function rQ(e) {
          do {
            var t;
            if (
              ((t = 13 === e.tag) &&
                (t = null === (t = e.memoizedState) || null !== t.dehydrated),
              t)
            )
              return e;
            e = e.return;
          } while (null !== e);
          return null;
        }
        function rX(e, t, n, r, a) {
          return (
            0 == (1 & e.mode)
              ? e === t
                ? (e.flags |= 65536)
                : ((e.flags |= 128),
                  (n.flags |= 131072),
                  (n.flags &= -52805),
                  1 === n.tag &&
                    (null === n.alternate
                      ? (n.tag = 17)
                      : (((t = t5(-1, 1)).tag = 2), t6(n, t))),
                  (n.lanes |= 1))
              : ((e.flags |= 65536), (e.lanes = a)),
            e
          );
        }
        function rq(e) {
          e.flags |= 4;
        }
        function r$(e, t) {
          if (null !== e && e.child === t.child) return !0;
          if (0 != (16 & t.flags)) return !1;
          for (e = t.child; null !== e; ) {
            if (0 != (12854 & e.flags) || 0 != (12854 & e.subtreeFlags))
              return !1;
            e = e.sibling;
          }
          return !0;
        }
        if (G)
          (t = function (e, t) {
            for (var n = t.child; null !== n; ) {
              if (5 === n.tag || 6 === n.tag) j(e, n.stateNode);
              else if (4 !== n.tag && null !== n.child) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === t) break;
              for (; null === n.sibling; ) {
                if (null === n.return || n.return === t) return;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
          }),
            (r = function () {}),
            (a = function (e, t, n, r, a) {
              (e = e.memoizedProps) !== r &&
                ((n = H(t.stateNode, n, e, r, a, nW(nj.current))),
                (t.updateQueue = n) && rq(t));
            }),
            (l = function (e, t, n, r) {
              n !== r && rq(t);
            });
        else if (Z) {
          t = function (e, n, r, a) {
            for (var l = n.child; null !== l; ) {
              if (5 === l.tag) {
                var i = l.stateNode;
                r && a && (i = eN(i, l.type, l.memoizedProps, l)), j(e, i);
              } else if (6 === l.tag)
                (i = l.stateNode),
                  r && a && (i = eI(i, l.memoizedProps, l)),
                  j(e, i);
              else if (4 !== l.tag) {
                if (22 === l.tag && null !== l.memoizedState)
                  null !== (i = l.child) && (i.return = l), t(e, l, !0, !0);
                else if (null !== l.child) {
                  (l.child.return = l), (l = l.child);
                  continue;
                }
              }
              if (l === n) break;
              for (; null === l.sibling; ) {
                if (null === l.return || l.return === n) return;
                l = l.return;
              }
              (l.sibling.return = l.return), (l = l.sibling);
            }
          };
          var rG = function (e, t, n, r) {
            for (var a = t.child; null !== a; ) {
              if (5 === a.tag) {
                var l = a.stateNode;
                n && r && (l = eN(l, a.type, a.memoizedProps, a)), ez(e, l);
              } else if (6 === a.tag)
                (l = a.stateNode),
                  n && r && (l = eI(l, a.memoizedProps, a)),
                  ez(e, l);
              else if (4 !== a.tag) {
                if (22 === a.tag && null !== a.memoizedState)
                  null !== (l = a.child) && (l.return = a), rG(e, a, !0, !0);
                else if (null !== a.child) {
                  (a.child.return = a), (a = a.child);
                  continue;
                }
              }
              if (a === t) break;
              for (; null === a.sibling; ) {
                if (null === a.return || a.return === t) return;
                a = a.return;
              }
              (a.sibling.return = a.return), (a = a.sibling);
            }
          };
          (r = function (e, t) {
            var n = t.stateNode;
            if (!r$(e, t)) {
              var r = eM((e = n.containerInfo));
              rG(r, t, !1, !1), (n.pendingChildren = r), rq(t), eR(e, r);
            }
          }),
            (a = function (e, n, r, a, l) {
              var i = e.stateNode,
                o = e.memoizedProps;
              if ((e = r$(e, n)) && o === a) n.stateNode = i;
              else {
                var u = n.stateNode,
                  s = nW(nj.current),
                  c = null;
                o !== a && (c = H(u, r, o, a, l, s)),
                  e && null === c
                    ? (n.stateNode = i)
                    : (V((i = eT(i, c, r, o, a, n, e, u)), r, a, l, s) && rq(n),
                      (n.stateNode = i),
                      e ? rq(n) : t(i, n, !1, !1));
              }
            }),
            (l = function (e, t, n, r) {
              n !== r
                ? ((e = nW(nH.current)),
                  (n = nW(nj.current)),
                  (t.stateNode = Y(r, e, n, t)),
                  rq(t))
                : (t.stateNode = e.stateNode);
            });
        } else (r = function () {}), (a = function () {}), (l = function () {});
        function rZ(e, t) {
          if (!n_)
            switch (e.tailMode) {
              case "hidden":
                t = e.tail;
                for (var n = null; null !== t; )
                  null !== t.alternate && (n = t), (t = t.sibling);
                null === n ? (e.tail = null) : (n.sibling = null);
                break;
              case "collapsed":
                n = e.tail;
                for (var r = null; null !== n; )
                  null !== n.alternate && (r = n), (n = n.sibling);
                null === r
                  ? t || null === e.tail
                    ? (e.tail = null)
                    : (e.tail.sibling = null)
                  : (r.sibling = null);
            }
        }
        function rK(e) {
          var t = null !== e.alternate && e.alternate.child === e.child,
            n = 0,
            r = 0;
          if (t)
            for (var a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= 14680064 & a.subtreeFlags),
                (r |= 14680064 & a.flags),
                (a.return = e),
                (a = a.sibling);
          else
            for (a = e.child; null !== a; )
              (n |= a.lanes | a.childLanes),
                (r |= a.subtreeFlags),
                (r |= a.flags),
                (a.return = e),
                (a = a.sibling);
          return (e.subtreeFlags |= r), (e.childLanes = n), t;
        }
        var rJ = d.ReactCurrentOwner,
          r0 = !1;
        function r1(e, t, n, r) {
          t.child = null === e ? nU(t, null, n, r) : nA(t, e.child, n, r);
        }
        function r2(e, t, n, r, a) {
          n = n.render;
          var l = t.ref;
          return (tJ(t, a),
          (r = rt(e, t, n, r, l, a)),
          (n = rn()),
          null === e || r0)
            ? (n_ && n && nb(t), (t.flags |= 1), r1(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~a),
              ac(e, t, a));
        }
        function r3(e, t, n, r, a) {
          if (null === e) {
            var l = n.type;
            return "function" != typeof l ||
              lA(l) ||
              void 0 !== l.defaultProps ||
              null !== n.compare ||
              void 0 !== n.defaultProps
              ? (((e = lB(n.type, null, r, t, t.mode, a)).ref = t.ref),
                (e.return = t),
                (t.child = e))
              : ((t.tag = 15), (t.type = l), r4(e, t, l, r, a));
          }
          if (((l = e.child), 0 == (e.lanes & a))) {
            var i = l.memoizedProps;
            if (
              (n = null !== (n = n.compare) ? n : tH)(i, r) &&
              e.ref === t.ref
            )
              return ac(e, t, a);
          }
          return (
            (t.flags |= 1),
            ((e = lU(l, r)).ref = t.ref),
            (e.return = t),
            (t.child = e)
          );
        }
        function r4(e, t, n, r, a) {
          if (null !== e && tH(e.memoizedProps, r) && e.ref === t.ref) {
            if (((r0 = !1), 0 == (e.lanes & a)))
              return (t.lanes = e.lanes), ac(e, t, a);
            0 != (131072 & e.flags) && (r0 = !0);
          }
          return r8(e, t, n, r, a);
        }
        function r5(e, t, n) {
          var r = t.pendingProps,
            a = r.children,
            l = null !== e ? e.memoizedState : null;
          if ("hidden" === r.mode) {
            if (0 == (1 & t.mode))
              (t.memoizedState = { baseLanes: 0, cachePool: null }),
                te(aK, aZ),
                (aZ |= n);
            else {
              if (0 == (1073741824 & n))
                return (
                  (e = null !== l ? l.baseLanes | n : n),
                  (t.lanes = t.childLanes = 1073741824),
                  (t.memoizedState = { baseLanes: e, cachePool: null }),
                  (t.updateQueue = null),
                  te(aK, aZ),
                  (aZ |= e),
                  null
                );
              (t.memoizedState = { baseLanes: 0, cachePool: null }),
                (r = null !== l ? l.baseLanes : n),
                te(aK, aZ),
                (aZ |= r);
            }
          } else
            null !== l
              ? ((r = l.baseLanes | n), (t.memoizedState = null))
              : (r = n),
              te(aK, aZ),
              (aZ |= r);
          return r1(e, t, a, n), t.child;
        }
        function r6(e, t) {
          var n = t.ref;
          ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
            ((t.flags |= 512), (t.flags |= 2097152));
        }
        function r8(e, t, n, r, a) {
          var l = ti(n) ? ta : tn.current;
          return ((l = tl(t, l)),
          tJ(t, a),
          (n = rt(e, t, n, r, l, a)),
          (r = rn()),
          null === e || r0)
            ? (n_ && r && nb(t), (t.flags |= 1), r1(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~a),
              ac(e, t, a));
        }
        function r7(e, t, n, r, a) {
          if (ti(n)) {
            var l = !0;
            tc(t);
          } else l = !1;
          if ((tJ(t, a), null === t.stateNode))
            null !== e &&
              ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              nl(t, n, r),
              no(t, n, r, a),
              (r = !0);
          else if (null === e) {
            var i = t.stateNode,
              o = t.memoizedProps;
            i.props = o;
            var u = i.context,
              s = n.contextType;
            s =
              "object" == typeof s && null !== s
                ? t0(s)
                : tl(t, (s = ti(n) ? ta : tn.current));
            var c = n.getDerivedStateFromProps,
              f =
                "function" == typeof c ||
                "function" == typeof i.getSnapshotBeforeUpdate;
            f ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((o !== r || u !== s) && ni(t, i, r, s)),
              (t2 = !1);
            var d = t.memoizedState;
            (i.state = d),
              t9(t, r, i, a),
              (u = t.memoizedState),
              o !== r || d !== u || tr.current || t2
                ? ("function" == typeof c &&
                    (nn(t, n, c, r), (u = t.memoizedState)),
                  (o = t2 || na(t, n, o, r, d, u, s))
                    ? (f ||
                        ("function" != typeof i.UNSAFE_componentWillMount &&
                          "function" != typeof i.componentWillMount) ||
                        ("function" == typeof i.componentWillMount &&
                          i.componentWillMount(),
                        "function" == typeof i.UNSAFE_componentWillMount &&
                          i.UNSAFE_componentWillMount()),
                      "function" == typeof i.componentDidMount &&
                        (t.flags |= 4194308))
                    : ("function" == typeof i.componentDidMount &&
                        (t.flags |= 4194308),
                      (t.memoizedProps = r),
                      (t.memoizedState = u)),
                  (i.props = r),
                  (i.state = u),
                  (i.context = s),
                  (r = o))
                : ("function" == typeof i.componentDidMount &&
                    (t.flags |= 4194308),
                  (r = !1));
          } else {
            (i = t.stateNode),
              t4(e, t),
              (o = t.memoizedProps),
              (s = t.type === t.elementType ? o : tW(t.type, o)),
              (i.props = s),
              (f = t.pendingProps),
              (d = i.context),
              (u =
                "object" == typeof (u = n.contextType) && null !== u
                  ? t0(u)
                  : tl(t, (u = ti(n) ? ta : tn.current)));
            var p = n.getDerivedStateFromProps;
            (c =
              "function" == typeof p ||
              "function" == typeof i.getSnapshotBeforeUpdate) ||
              ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
                "function" != typeof i.componentWillReceiveProps) ||
              ((o !== f || d !== u) && ni(t, i, r, u)),
              (t2 = !1),
              (d = t.memoizedState),
              (i.state = d),
              t9(t, r, i, a);
            var h = t.memoizedState;
            o !== f || d !== h || tr.current || t2
              ? ("function" == typeof p &&
                  (nn(t, n, p, r), (h = t.memoizedState)),
                (s = t2 || na(t, n, s, r, d, h, u) || !1)
                  ? (c ||
                      ("function" != typeof i.UNSAFE_componentWillUpdate &&
                        "function" != typeof i.componentWillUpdate) ||
                      ("function" == typeof i.componentWillUpdate &&
                        i.componentWillUpdate(r, h, u),
                      "function" == typeof i.UNSAFE_componentWillUpdate &&
                        i.UNSAFE_componentWillUpdate(r, h, u)),
                    "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                    "function" == typeof i.getSnapshotBeforeUpdate &&
                      (t.flags |= 1024))
                  : ("function" != typeof i.componentDidUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 4),
                    "function" != typeof i.getSnapshotBeforeUpdate ||
                      (o === e.memoizedProps && d === e.memoizedState) ||
                      (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = h)),
                (i.props = r),
                (i.state = h),
                (i.context = u),
                (r = s))
              : ("function" != typeof i.componentDidUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 4),
                "function" != typeof i.getSnapshotBeforeUpdate ||
                  (o === e.memoizedProps && d === e.memoizedState) ||
                  (t.flags |= 1024),
                (r = !1));
          }
          return r9(e, t, n, r, l, a);
        }
        function r9(e, t, n, r, a, l) {
          r6(e, t);
          var i = 0 != (128 & t.flags);
          if (!r && !i) return a && tf(t, n, !1), ac(e, t, l);
          (r = t.stateNode), (rJ.current = t);
          var o =
            i && "function" != typeof n.getDerivedStateFromError
              ? null
              : r.render();
          return (
            (t.flags |= 1),
            null !== e && i
              ? ((t.child = nA(t, e.child, null, l)),
                (t.child = nA(t, null, o, l)))
              : r1(e, t, o, l),
            (t.memoizedState = r.state),
            a && tf(t, n, !0),
            t.child
          );
        }
        function ae(e) {
          var t = e.stateNode;
          t.pendingContext
            ? tu(e, t.pendingContext, t.pendingContext !== t.context)
            : t.context && tu(e, t.context, !1),
            nY(e, t.containerInfo);
        }
        function at(e, t, n, r, a) {
          return nO(), nN(a), (t.flags |= 256), r1(e, t, n, r), t.child;
        }
        var an = { dehydrated: null, treeContext: null, retryLane: 0 };
        function ar(e) {
          return { baseLanes: e, cachePool: null };
        }
        function aa(e, t, n) {
          var r,
            a,
            l,
            i,
            o,
            u,
            s,
            c,
            d,
            p,
            h,
            v,
            g,
            m,
            y = t.pendingProps,
            b = n$.current,
            x = !1,
            w = 0 != (128 & t.flags);
          if (
            ((m = w) ||
              (m = (null === e || null !== e.memoizedState) && 0 != (2 & b)),
            m
              ? ((x = !0), (t.flags &= -129))
              : (null === e || null !== e.memoizedState) && (b |= 1),
            te(n$, 1 & b),
            null === e)
          )
            return (nM(t),
            null !== (e = t.memoizedState) && null !== (e = e.dehydrated))
              ? (0 == (1 & t.mode)
                  ? (t.lanes = 1)
                  : eU(e)
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824),
                null)
              : ((b = y.children),
                (e = y.fallback),
                x
                  ? ((y = t.mode),
                    (x = t.child),
                    (b = { mode: "hidden", children: b }),
                    0 == (1 & y) && null !== x
                      ? ((x.childLanes = 0), (x.pendingProps = b))
                      : (x = lV(b, y, 0, null)),
                    (e = lj(e, y, n, null)),
                    (x.return = t),
                    (e.return = t),
                    (x.sibling = e),
                    (t.child = x),
                    (t.child.memoizedState = ar(n)),
                    (t.memoizedState = an),
                    e)
                  : al(t, b));
          if (null !== (b = e.memoizedState) && null !== (m = b.dehydrated)) {
            if (w)
              return 256 & t.flags
                ? ((t.flags &= -257), ai(e, t, n, Error(f(422))))
                : null !== t.memoizedState
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((x = y.fallback),
                  (b = t.mode),
                  (y = lV(
                    { mode: "visible", children: y.children },
                    b,
                    0,
                    null
                  )),
                  (x = lj(x, b, n, null)),
                  (x.flags |= 2),
                  (y.return = t),
                  (x.return = t),
                  (y.sibling = x),
                  (t.child = y),
                  0 != (1 & t.mode) && nA(t, e.child, null, n),
                  (t.child.memoizedState = ar(n)),
                  (t.memoizedState = an),
                  x);
            if (0 == (1 & t.mode)) t = ai(e, t, n, null);
            else if (eU(m)) t = ai(e, t, n, Error(f(419)));
            else if (((y = 0 != (n & e.childLanes)), r0 || y)) {
              if (null !== (y = aq)) {
                switch (n & -n) {
                  case 4:
                    x = 2;
                    break;
                  case 16:
                    x = 8;
                    break;
                  case 64:
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
                  case 4194304:
                  case 8388608:
                  case 16777216:
                  case 33554432:
                  case 67108864:
                    x = 32;
                    break;
                  case 536870912:
                    x = 268435456;
                    break;
                  default:
                    x = 0;
                }
                0 !== (y = 0 != (x & (y.suspendedLanes | n)) ? 0 : x) &&
                  y !== b.retryLane &&
                  ((b.retryLane = y), lf(e, y, -1));
              }
              lk(), (t = ai(e, t, n, Error(f(421))));
            } else
              eA(m)
                ? ((t.flags |= 128),
                  (t.child = e.child),
                  eB(m, (t = lI.bind(null, e))),
                  (t = null))
                : ((n = b.treeContext),
                  K &&
                    ((nS = eW(m)),
                    (nw = t),
                    (n_ = !0),
                    (nP = null),
                    (nk = !1),
                    null !== n &&
                      ((nd[np++] = nv),
                      (nd[np++] = ng),
                      (nd[np++] = nh),
                      (nv = n.id),
                      (ng = n.overflow),
                      (nh = t))),
                  (t = al(t, t.pendingProps.children)),
                  (t.flags |= 4096));
            return t;
          }
          return x
            ? ((r = e),
              (a = t),
              (l = y.children),
              (i = y.fallback),
              (o = n),
              (u = a.mode),
              (s = (r = r.child).sibling),
              (c = { mode: "hidden", children: l }),
              0 == (1 & u) && a.child !== r
                ? (((l = a.child).childLanes = 0),
                  (l.pendingProps = c),
                  (a.deletions = null))
                : ((l = lU(r, c)).subtreeFlags = 14680064 & r.subtreeFlags),
              null !== s
                ? (i = lU(s, i))
                : ((i = lj(i, u, o, null)), (i.flags |= 2)),
              (i.return = a),
              (l.return = a),
              (l.sibling = i),
              (a.child = l),
              (y = i),
              (x = t.child),
              (b = e.child.memoizedState),
              (x.memoizedState =
                null === b
                  ? ar(n)
                  : { baseLanes: b.baseLanes | n, cachePool: null }),
              (x.childLanes = e.childLanes & ~n),
              (t.memoizedState = an),
              y)
            : ((d = e),
              (p = t),
              (h = y.children),
              (v = n),
              (d = (g = d.child).sibling),
              (h = lU(g, { mode: "visible", children: h })),
              0 == (1 & p.mode) && (h.lanes = v),
              (h.return = p),
              (h.sibling = null),
              null !== d &&
                (null === (v = p.deletions)
                  ? ((p.deletions = [d]), (p.flags |= 16))
                  : v.push(d)),
              (n = p.child = h),
              (t.memoizedState = null),
              n);
        }
        function al(e, t) {
          return (
            ((t = lV(
              { mode: "visible", children: t },
              e.mode,
              0,
              null
            )).return = e),
            (e.child = t)
          );
        }
        function ai(e, t, n, r) {
          return (
            null !== r && nN(r),
            nA(t, e.child, null, n),
            (e = al(t, t.pendingProps.children)),
            (e.flags |= 2),
            (t.memoizedState = null),
            e
          );
        }
        function ao(e, t, n) {
          e.lanes |= t;
          var r = e.alternate;
          null !== r && (r.lanes |= t), tK(e.return, t, n);
        }
        function au(e, t, n, r, a) {
          var l = e.memoizedState;
          null === l
            ? (e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: r,
                tail: n,
                tailMode: a,
              })
            : ((l.isBackwards = t),
              (l.rendering = null),
              (l.renderingStartTime = 0),
              (l.last = r),
              (l.tail = n),
              (l.tailMode = a));
        }
        function as(e, t, n) {
          var r = t.pendingProps,
            a = r.revealOrder,
            l = r.tail;
          if ((r1(e, t, r.children, n), 0 != (2 & (r = n$.current))))
            (r = (1 & r) | 2), (t.flags |= 128);
          else {
            if (null !== e && 0 != (128 & e.flags))
              e: for (e = t.child; null !== e; ) {
                if (13 === e.tag) null !== e.memoizedState && ao(e, n, t);
                else if (19 === e.tag) ao(e, n, t);
                else if (null !== e.child) {
                  (e.child.return = e), (e = e.child);
                  continue;
                }
                if (e === t) break;
                for (; null === e.sibling; ) {
                  if (null === e.return || e.return === t) break e;
                  e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
              }
            r &= 1;
          }
          if ((te(n$, r), 0 == (1 & t.mode))) t.memoizedState = null;
          else
            switch (a) {
              case "forwards":
                for (a = null, n = t.child; null !== n; )
                  null !== (e = n.alternate) && null === nG(e) && (a = n),
                    (n = n.sibling);
                null === (n = a)
                  ? ((a = t.child), (t.child = null))
                  : ((a = n.sibling), (n.sibling = null)),
                  au(t, !1, a, n, l);
                break;
              case "backwards":
                for (n = null, a = t.child, t.child = null; null !== a; ) {
                  if (null !== (e = a.alternate) && null === nG(e)) {
                    t.child = a;
                    break;
                  }
                  (e = a.sibling), (a.sibling = n), (n = a), (a = e);
                }
                au(t, !0, n, null, l);
                break;
              case "together":
                au(t, !1, null, null, void 0);
                break;
              default:
                t.memoizedState = null;
            }
          return t.child;
        }
        function ac(e, t, n) {
          if (
            (null !== e && (t.dependencies = e.dependencies),
            (a1 |= t.lanes),
            0 == (n & t.childLanes))
          )
            return null;
          if (null !== e && t.child !== e.child) throw Error(f(153));
          if (null !== t.child) {
            for (
              n = lU((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = lU(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        var af = !1,
          ad = !1,
          ap = "function" == typeof WeakSet ? WeakSet : Set,
          ah = null;
        function av(e, t) {
          var n = e.ref;
          if (null !== n) {
            if ("function" == typeof n)
              try {
                n(null);
              } catch (n) {
                lR(e, t, n);
              }
            else n.current = null;
          }
        }
        function ag(e, t, n) {
          try {
            n();
          } catch (n) {
            lR(e, t, n);
          }
        }
        var am = !1;
        function ay(e, t, n) {
          var r = t.updateQueue;
          if (null !== (r = null !== r ? r.lastEffect : null)) {
            var a = (r = r.next);
            do {
              if ((a.tag & e) === e) {
                var l = a.destroy;
                (a.destroy = void 0), void 0 !== l && ag(t, n, l);
              }
              a = a.next;
            } while (a !== r);
          }
        }
        function ab(e, t) {
          if (
            null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)
          ) {
            var n = (t = t.next);
            do {
              if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
              }
              n = n.next;
            } while (n !== t);
          }
        }
        function ax(e) {
          var t = e.ref;
          if (null !== t) {
            var n = e.stateNode;
            (e = 5 === e.tag ? L(n) : n),
              "function" == typeof t ? t(e) : (t.current = e);
          }
        }
        function aw(e, t, n) {
          if (tL && "function" == typeof tL.onCommitFiberUnmount)
            try {
              tL.onCommitFiberUnmount(tI, t);
            } catch (e) {}
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
                var r = (e = e.next);
                do {
                  var a = r,
                    l = a.destroy;
                  (a = a.tag),
                    void 0 !== l &&
                      (0 != (2 & a)
                        ? ag(t, n, l)
                        : 0 != (4 & a) && ag(t, n, l)),
                    (r = r.next);
                } while (r !== e);
              }
              break;
            case 1:
              if (
                (av(t, n),
                "function" == typeof (e = t.stateNode).componentWillUnmount)
              )
                try {
                  (e.props = t.memoizedProps),
                    (e.state = t.memoizedState),
                    e.componentWillUnmount();
                } catch (e) {
                  lR(t, n, e);
                }
              break;
            case 5:
              av(t, n);
              break;
            case 4:
              G
                ? aC(e, t, n)
                : Z &&
                  Z &&
                  ((n = eM((t = t.stateNode.containerInfo))), eO(t, n));
          }
        }
        function aS(e, t, n) {
          for (var r = t; ; )
            if ((aw(e, r, n), null === r.child || (G && 4 === r.tag))) {
              if (r === t) break;
              for (; null === r.sibling; ) {
                if (null === r.return || r.return === t) return;
                r = r.return;
              }
              (r.sibling.return = r.return), (r = r.sibling);
            } else (r.child.return = r), (r = r.child);
        }
        function a_(e) {
          return 5 === e.tag || 3 === e.tag || 4 === e.tag;
        }
        function ak(e) {
          e: for (;;) {
            for (; null === e.sibling; ) {
              if (null === e.return || a_(e.return)) return null;
              e = e.return;
            }
            for (
              e.sibling.return = e.return, e = e.sibling;
              5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

            ) {
              if (2 & e.flags || null === e.child || 4 === e.tag) continue e;
              (e.child.return = e), (e = e.child);
            }
            if (!(2 & e.flags)) return e.stateNode;
          }
        }
        function aP(e) {
          if (G) {
            e: {
              for (var t = e.return; null !== t; ) {
                if (a_(t)) break e;
                t = t.return;
              }
              throw Error(f(160));
            }
            var n = t;
            switch (n.tag) {
              case 5:
                (t = n.stateNode),
                  32 & n.flags && (eS(t), (n.flags &= -33)),
                  (n = ak(e)),
                  (function e(t, n, r) {
                    var a = t.tag;
                    if (5 === a || 6 === a)
                      (t = t.stateNode), n ? ey(r, t, n) : ep(r, t);
                    else if (4 !== a && null !== (t = t.child))
                      for (e(t, n, r), t = t.sibling; null !== t; )
                        e(t, n, r), (t = t.sibling);
                  })(e, n, t);
                break;
              case 3:
              case 4:
                (t = n.stateNode.containerInfo),
                  (n = ak(e)),
                  (function e(t, n, r) {
                    var a = t.tag;
                    if (5 === a || 6 === a)
                      (t = t.stateNode), n ? eb(r, t, n) : eh(r, t);
                    else if (4 !== a && null !== (t = t.child))
                      for (e(t, n, r), t = t.sibling; null !== t; )
                        e(t, n, r), (t = t.sibling);
                  })(e, n, t);
                break;
              default:
                throw Error(f(161));
            }
          }
        }
        function aC(e, t, n) {
          for (var r, a, l = t, i = !1; ; ) {
            if (!i) {
              i = l.return;
              e: for (;;) {
                if (null === i) throw Error(f(160));
                switch (((r = i.stateNode), i.tag)) {
                  case 5:
                    a = !1;
                    break e;
                  case 3:
                  case 4:
                    (r = r.containerInfo), (a = !0);
                    break e;
                }
                i = i.return;
              }
              i = !0;
            }
            if (5 === l.tag || 6 === l.tag)
              aS(e, l, n), a ? ew(r, l.stateNode) : ex(r, l.stateNode);
            else if (18 === l.tag) a ? eK(r, l.stateNode) : eZ(r, l.stateNode);
            else if (4 === l.tag) {
              if (null !== l.child) {
                (r = l.stateNode.containerInfo),
                  (a = !0),
                  (l.child.return = l),
                  (l = l.child);
                continue;
              }
            } else if ((aw(e, l, n), null !== l.child)) {
              (l.child.return = l), (l = l.child);
              continue;
            }
            if (l === t) break;
            for (; null === l.sibling; ) {
              if (null === l.return || l.return === t) return;
              4 === (l = l.return).tag && (i = !1);
            }
            (l.sibling.return = l.return), (l = l.sibling);
          }
        }
        function aE(e, t) {
          if (G) {
            switch (t.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                ay(3, t, t.return), ab(3, t), ay(5, t, t.return);
                return;
              case 1:
              case 12:
              case 17:
                return;
              case 5:
                var n = t.stateNode;
                if (null != n) {
                  var r = t.memoizedProps;
                  e = null !== e ? e.memoizedProps : r;
                  var a = t.type,
                    l = t.updateQueue;
                  (t.updateQueue = null), null !== l && em(n, l, a, e, r, t);
                }
                return;
              case 6:
                if (null === t.stateNode) throw Error(f(162));
                (n = t.memoizedProps),
                  ev(t.stateNode, null !== e ? e.memoizedProps : n, n);
                return;
              case 3:
                K &&
                  null !== e &&
                  e.memoizedState.isDehydrated &&
                  e$(t.stateNode.containerInfo);
                return;
              case 13:
              case 19:
                aT(t);
                return;
            }
            throw Error(f(163));
          }
          switch (t.tag) {
            case 0:
            case 11:
            case 14:
            case 15:
              ay(3, t, t.return), ab(3, t), ay(5, t, t.return);
              return;
            case 12:
            case 22:
            case 23:
              return;
            case 13:
            case 19:
              aT(t);
              return;
            case 3:
              K &&
                null !== e &&
                e.memoizedState.isDehydrated &&
                e$(t.stateNode.containerInfo);
          }
          e: if (Z) {
            switch (t.tag) {
              case 1:
              case 5:
              case 6:
                break e;
              case 3:
              case 4:
                eO((t = t.stateNode).containerInfo, t.pendingChildren);
                break e;
            }
            throw Error(f(163));
          }
        }
        function aT(e) {
          var t = e.updateQueue;
          if (null !== t) {
            e.updateQueue = null;
            var n = e.stateNode;
            null === n && (n = e.stateNode = new ap()),
              t.forEach(function (t) {
                var r = lL.bind(null, e, t);
                n.has(t) || (n.add(t), t.then(r, r));
              });
          }
        }
        function aM(e) {
          for (; null !== ah; ) {
            var t = ah;
            if (0 != (8772 & t.flags)) {
              var n = t.alternate;
              try {
                if (0 != (8772 & t.flags))
                  switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ad || ab(5, t);
                      break;
                    case 1:
                      var r = t.stateNode;
                      if (4 & t.flags && !ad) {
                        if (null === n) r.componentDidMount();
                        else {
                          var a =
                            t.elementType === t.type
                              ? n.memoizedProps
                              : tW(t.type, n.memoizedProps);
                          r.componentDidUpdate(
                            a,
                            n.memoizedState,
                            r.__reactInternalSnapshotBeforeUpdate
                          );
                        }
                      }
                      var l = t.updateQueue;
                      null !== l && ne(t, l, r);
                      break;
                    case 3:
                      var i = t.updateQueue;
                      if (null !== i) {
                        if (((n = null), null !== t.child))
                          switch (t.child.tag) {
                            case 5:
                              n = L(t.child.stateNode);
                              break;
                            case 1:
                              n = t.child.stateNode;
                          }
                        ne(t, i, n);
                      }
                      break;
                    case 5:
                      var o = t.stateNode;
                      null === n &&
                        4 & t.flags &&
                        eg(o, t.type, t.memoizedProps, t);
                      break;
                    case 6:
                    case 4:
                    case 12:
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                      break;
                    case 13:
                      if (K && null === t.memoizedState) {
                        var u = t.alternate;
                        if (null !== u) {
                          var s = u.memoizedState;
                          if (null !== s) {
                            var c = s.dehydrated;
                            null !== c && eG(c);
                          }
                        }
                      }
                      break;
                    default:
                      throw Error(f(163));
                  }
                ad || (512 & t.flags && ax(t));
              } catch (e) {
                lR(t, t.return, e);
              }
            }
            if (t === e) {
              ah = null;
              break;
            }
            if (null !== (n = t.sibling)) {
              (n.return = t.return), (ah = n);
              break;
            }
            ah = t.return;
          }
        }
        function az(e) {
          for (; null !== ah; ) {
            var t = ah;
            if (t === e) {
              ah = null;
              break;
            }
            var n = t.sibling;
            if (null !== n) {
              (n.return = t.return), (ah = n);
              break;
            }
            ah = t.return;
          }
        }
        function aR(e) {
          for (; null !== ah; ) {
            var t = ah;
            try {
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  var n = t.return;
                  try {
                    ab(4, t);
                  } catch (e) {
                    lR(t, n, e);
                  }
                  break;
                case 1:
                  var r = t.stateNode;
                  if ("function" == typeof r.componentDidMount) {
                    var a = t.return;
                    try {
                      r.componentDidMount();
                    } catch (e) {
                      lR(t, a, e);
                    }
                  }
                  var l = t.return;
                  try {
                    ax(t);
                  } catch (e) {
                    lR(t, l, e);
                  }
                  break;
                case 5:
                  var i = t.return;
                  try {
                    ax(t);
                  } catch (e) {
                    lR(t, i, e);
                  }
              }
            } catch (e) {
              lR(t, t.return, e);
            }
            if (t === e) {
              ah = null;
              break;
            }
            var o = t.sibling;
            if (null !== o) {
              (o.return = t.return), (ah = o);
              break;
            }
            ah = t.return;
          }
        }
        var aO = 0,
          aN = 1,
          aI = 2,
          aL = 3,
          aD = 4;
        if ("function" == typeof Symbol && Symbol.for) {
          var aF = Symbol.for;
          (aO = aF("selector.component")),
            (aN = aF("selector.has_pseudo_class")),
            (aI = aF("selector.role")),
            (aL = aF("selector.test_id")),
            (aD = aF("selector.text"));
        }
        function aA(e) {
          var t = J(e);
          if (null != t) {
            if ("string" != typeof t.memoizedProps["data-testname"])
              throw Error(f(364));
            return t;
          }
          if (null === (e = ei(e))) throw Error(f(362));
          return e.stateNode.current;
        }
        function aU(e, t) {
          switch (t.$$typeof) {
            case aO:
              if (e.type === t.value) return !0;
              break;
            case aN:
              e: {
                (t = t.value), (e = [e, 0]);
                for (var n = 0; n < e.length; ) {
                  var r = e[n++],
                    a = e[n++],
                    l = t[a];
                  if (5 !== r.tag || !es(r)) {
                    for (; null != l && aU(r, l); ) l = t[++a];
                    if (a === t.length) {
                      t = !0;
                      break e;
                    }
                    for (r = r.child; null !== r; )
                      e.push(r, a), (r = r.sibling);
                  }
                }
                t = !1;
              }
              return t;
            case aI:
              if (5 === e.tag && ec(e.stateNode, t.value)) return !0;
              break;
            case aD:
              if (
                (5 === e.tag || 6 === e.tag) &&
                null !== (e = eu(e)) &&
                0 <= e.indexOf(t.value)
              )
                return !0;
              break;
            case aL:
              if (
                5 === e.tag &&
                "string" == typeof (e = e.memoizedProps["data-testname"]) &&
                e.toLowerCase() === t.value.toLowerCase()
              )
                return !0;
              break;
            default:
              throw Error(f(365));
          }
          return !1;
        }
        function aB(e) {
          switch (e.$$typeof) {
            case aO:
              return "<" + (T(e.value) || "Unknown") + ">";
            case aN:
              return ":has(" + (aB(e) || "") + ")";
            case aI:
              return '[role="' + e.value + '"]';
            case aD:
              return '"' + e.value + '"';
            case aL:
              return '[data-testname="' + e.value + '"]';
            default:
              throw Error(f(365));
          }
        }
        function aj(e, t) {
          var n = [];
          e = [e, 0];
          for (var r = 0; r < e.length; ) {
            var a = e[r++],
              l = e[r++],
              i = t[l];
            if (5 !== a.tag || !es(a)) {
              for (; null != i && aU(a, i); ) i = t[++l];
              if (l === t.length) n.push(a);
              else
                for (a = a.child; null !== a; ) e.push(a, l), (a = a.sibling);
            }
          }
          return n;
        }
        function aV(e, t) {
          if (!el) throw Error(f(363));
          (e = aj((e = aA(e)), t)), (t = []), (e = Array.from(e));
          for (var n = 0; n < e.length; ) {
            var r = e[n++];
            if (5 === r.tag) es(r) || t.push(r.stateNode);
            else for (r = r.child; null !== r; ) e.push(r), (r = r.sibling);
          }
          return t;
        }
        var aH = Math.ceil,
          aW = d.ReactCurrentDispatcher,
          aY = d.ReactCurrentOwner,
          aQ = d.ReactCurrentBatchConfig,
          aX = 0,
          aq = null,
          a$ = null,
          aG = 0,
          aZ = 0,
          aK = e7(0),
          aJ = 0,
          a0 = null,
          a1 = 0,
          a2 = 0,
          a3 = 0,
          a4 = null,
          a5 = null,
          a6 = 0,
          a8 = 1 / 0;
        function a7() {
          a8 = tM() + 500;
        }
        var a9 = !1,
          le = null,
          lt = null,
          ln = !1,
          lr = null,
          la = 0,
          ll = 0,
          li = null,
          lo = -1,
          lu = 0;
        function ls() {
          return 0 != (6 & aX) ? tM() : -1 !== lo ? lo : (lo = tM());
        }
        function lc(e) {
          return 0 == (1 & e.mode)
            ? 1
            : 0 != (2 & aX) && 0 !== aG
            ? aG & -aG
            : null !== tV.transition
            ? (0 === lu &&
                ((e = tv), 0 == (4194240 & (tv <<= 1)) && (tv = 64), (lu = e)),
              lu)
            : 0 !== (e = t_)
            ? e
            : et();
        }
        function lf(e, t, n) {
          if (50 < ll) throw ((ll = 0), (li = null), Error(f(185)));
          var r = ld(e, t);
          return null === r
            ? null
            : (tw(r, t, n),
              (0 == (2 & aX) || r !== aq) &&
                (r === aq &&
                  (0 == (2 & aX) && (a2 |= t), 4 === aJ && lm(r, aG)),
                lp(r, n),
                1 === t && 0 === aX && 0 == (1 & e.mode) && (a7(), tA && tj())),
              r);
        }
        function ld(e, t) {
          e.lanes |= t;
          var n = e.alternate;
          for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
            (e.childLanes |= t),
              null !== (n = e.alternate) && (n.childLanes |= t),
              (n = e),
              (e = e.return);
          return 3 === n.tag ? n.stateNode : null;
        }
        function lp(e, t) {
          var n,
            r = e.callbackNode;
          !(function (e, t) {
            for (
              var n = e.suspendedLanes,
                r = e.pingedLanes,
                a = e.expirationTimes,
                l = e.pendingLanes;
              0 < l;

            ) {
              var i = 31 - td(l),
                o = 1 << i,
                u = a[i];
              -1 === u
                ? (0 == (o & n) || 0 != (o & r)) &&
                  (a[i] = (function (e, t) {
                    switch (e) {
                      case 1:
                      case 2:
                      case 4:
                        return t + 250;
                      case 8:
                      case 16:
                      case 32:
                      case 64:
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
                      default:
                        return -1;
                    }
                  })(o, t))
                : u <= t && (e.expiredLanes |= o),
                (l &= ~o);
            }
          })(e, t);
          var a = ty(e, e === aq ? aG : 0);
          if (0 === a)
            null !== r && tC(r),
              (e.callbackNode = null),
              (e.callbackPriority = 0);
          else if (((t = a & -a), e.callbackPriority !== t)) {
            if ((null != r && tC(r), 1 === t))
              0 === e.tag
                ? ((n = ly.bind(null, e)), (tA = !0), tB(n))
                : tB(ly.bind(null, e)),
                er
                  ? ea(function () {
                      0 === aX && tj();
                    })
                  : tP(tz, tj),
                (r = null);
            else {
              switch (tk(a)) {
                case 1:
                  r = tz;
                  break;
                case 4:
                  r = tR;
                  break;
                case 16:
                default:
                  r = tO;
                  break;
                case 536870912:
                  r = tN;
              }
              r = tP(r, lh.bind(null, e));
            }
            (e.callbackPriority = t), (e.callbackNode = r);
          }
        }
        function lh(e, t) {
          if (((lo = -1), (lu = 0), 0 != (6 & aX))) throw Error(f(327));
          var n = e.callbackNode;
          if (lM() && e.callbackNode !== n) return null;
          var r = ty(e, e === aq ? aG : 0);
          if (0 === r) return null;
          if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = lP(e, r);
          else {
            t = r;
            var a = aX;
            aX |= 2;
            var l = l_();
            for ((aq !== e || aG !== t) && (a7(), lw(e, t)); ; )
              try {
                !(function () {
                  for (; null !== a$ && !tE(); ) lC(a$);
                })();
                break;
              } catch (t) {
                lS(e, t);
              }
            t$(),
              (aW.current = l),
              (aX = a),
              null !== a$ ? (t = 0) : ((aq = null), (aG = 0), (t = aJ));
          }
          if (0 !== t) {
            if (
              (2 === t && 0 !== (a = tb(e)) && ((r = a), (t = lv(e, a))),
              1 === t)
            )
              throw ((n = a0), lw(e, 0), lm(e, r), lp(e, tM()), n);
            if (6 === t) lm(e, r);
            else {
              if (
                ((a = e.current.alternate),
                0 == (30 & r) &&
                  !(function (e) {
                    for (var t = e; ; ) {
                      if (16384 & t.flags) {
                        var n = t.updateQueue;
                        if (null !== n && null !== (n = n.stores))
                          for (var r = 0; r < n.length; r++) {
                            var a = n[r],
                              l = a.getSnapshot;
                            a = a.value;
                            try {
                              if (!tD(l(), a)) return !1;
                            } catch (e) {
                              return !1;
                            }
                          }
                      }
                      if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                        (n.return = t), (t = n);
                      else {
                        if (t === e) break;
                        for (; null === t.sibling; ) {
                          if (null === t.return || t.return === e) return !0;
                          t = t.return;
                        }
                        (t.sibling.return = t.return), (t = t.sibling);
                      }
                    }
                    return !0;
                  })(a) &&
                  (2 === (t = lP(e, r)) &&
                    0 !== (l = tb(e)) &&
                    ((r = l), (t = lv(e, l))),
                  1 === t))
              )
                throw ((n = a0), lw(e, 0), lm(e, r), lp(e, tM()), n);
              switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                  throw Error(f(345));
                case 2:
                case 5:
                  lT(e, a5);
                  break;
                case 3:
                  if (
                    (lm(e, r),
                    (130023424 & r) === r && 10 < (t = a6 + 500 - tM()))
                  ) {
                    if (0 !== ty(e, 0)) break;
                    if (((a = e.suspendedLanes) & r) !== r) {
                      ls(), (e.pingedLanes |= e.suspendedLanes & a);
                      break;
                    }
                    e.timeoutHandle = Q(lT.bind(null, e, a5), t);
                    break;
                  }
                  lT(e, a5);
                  break;
                case 4:
                  if ((lm(e, r), (4194240 & r) === r)) break;
                  for (a = -1, t = e.eventTimes; 0 < r; ) {
                    var i = 31 - td(r);
                    (l = 1 << i), (i = t[i]) > a && (a = i), (r &= ~l);
                  }
                  if (
                    ((r = a),
                    10 <
                      (r =
                        (120 > (r = tM() - r)
                          ? 120
                          : 480 > r
                          ? 480
                          : 1080 > r
                          ? 1080
                          : 1920 > r
                          ? 1920
                          : 3e3 > r
                          ? 3e3
                          : 4320 > r
                          ? 4320
                          : 1960 * aH(r / 1960)) - r))
                  ) {
                    e.timeoutHandle = Q(lT.bind(null, e, a5), r);
                    break;
                  }
                  lT(e, a5);
                  break;
                default:
                  throw Error(f(329));
              }
            }
          }
          return lp(e, tM()), e.callbackNode === n ? lh.bind(null, e) : null;
        }
        function lv(e, t) {
          var n = a4;
          return (
            e.current.memoizedState.isDehydrated && (lw(e, t).flags |= 256),
            2 !== (e = lP(e, t)) && ((t = a5), (a5 = n), null !== t && lg(t)),
            e
          );
        }
        function lg(e) {
          null === a5 ? (a5 = e) : a5.push.apply(a5, e);
        }
        function lm(e, t) {
          for (
            t &= ~a3,
              t &= ~a2,
              e.suspendedLanes |= t,
              e.pingedLanes &= ~t,
              e = e.expirationTimes;
            0 < t;

          ) {
            var n = 31 - td(t),
              r = 1 << n;
            (e[n] = -1), (t &= ~r);
          }
        }
        function ly(e) {
          if (0 != (6 & aX)) throw Error(f(327));
          lM();
          var t = ty(e, 0);
          if (0 == (1 & t)) return lp(e, tM()), null;
          var n = lP(e, t);
          if (0 !== e.tag && 2 === n) {
            var r = tb(e);
            0 !== r && ((t = r), (n = lv(e, r)));
          }
          if (1 === n) throw ((n = a0), lw(e, 0), lm(e, t), lp(e, tM()), n);
          if (6 === n) throw Error(f(345));
          return (
            (e.finishedWork = e.current.alternate),
            (e.finishedLanes = t),
            lT(e, a5),
            lp(e, tM()),
            null
          );
        }
        function lb(e) {
          null !== lr && 0 === lr.tag && 0 == (6 & aX) && lM();
          var t = aX;
          aX |= 1;
          var n = aQ.transition,
            r = t_;
          try {
            if (((aQ.transition = null), (t_ = 1), e)) return e();
          } finally {
            (t_ = r), (aQ.transition = n), 0 == (6 & (aX = t)) && tj();
          }
        }
        function lx() {
          (aZ = aK.current), e9(aK);
        }
        function lw(e, t) {
          (e.finishedWork = null), (e.finishedLanes = 0);
          var n = e.timeoutHandle;
          if ((n !== q && ((e.timeoutHandle = q), X(n)), null !== a$))
            for (n = a$.return; null !== n; ) {
              var r = n;
              switch ((nx(r), r.tag)) {
                case 1:
                  null != (r = r.type.childContextTypes) && to();
                  break;
                case 3:
                  nQ(), e9(tr), e9(tn), nK();
                  break;
                case 5:
                  nq(r);
                  break;
                case 4:
                  nQ();
                  break;
                case 13:
                case 19:
                  e9(n$);
                  break;
                case 10:
                  tZ(r.type._context);
                  break;
                case 22:
                case 23:
                  lx();
              }
              n = n.return;
            }
          if (
            ((aq = e),
            (a$ = e = lU(e.current, null)),
            (aG = aZ = t),
            (aJ = 0),
            (a0 = null),
            (a3 = a2 = a1 = 0),
            (a5 = a4 = null),
            null !== t1)
          ) {
            for (t = 0; t < t1.length; t++)
              if (null !== (r = (n = t1[t]).interleaved)) {
                n.interleaved = null;
                var a = r.next,
                  l = n.pending;
                if (null !== l) {
                  var i = l.next;
                  (l.next = a), (r.next = i);
                }
                n.pending = r;
              }
            t1 = null;
          }
          return e;
        }
        function lS(e, t) {
          for (;;) {
            var n = a$;
            try {
              if ((t$(), (nJ.current = rD), n5)) {
                for (var r = n2.memoizedState; null !== r; ) {
                  var a = r.queue;
                  null !== a && (a.pending = null), (r = r.next);
                }
                n5 = !1;
              }
              if (
                ((n1 = 0),
                (n4 = n3 = n2 = null),
                (n6 = !1),
                (n8 = 0),
                (aY.current = null),
                null === n || null === n.return)
              ) {
                (aJ = 1), (a0 = t), (a$ = null);
                break;
              }
              e: {
                var l = e,
                  i = n.return,
                  o = n,
                  u = t;
                if (
                  ((t = aG),
                  (o.flags |= 32768),
                  null !== u &&
                    "object" == typeof u &&
                    "function" == typeof u.then)
                ) {
                  var s = u,
                    c = o,
                    d = c.tag;
                  if (0 == (1 & c.mode) && (0 === d || 11 === d || 15 === d)) {
                    var p = c.alternate;
                    p
                      ? ((c.updateQueue = p.updateQueue),
                        (c.memoizedState = p.memoizedState),
                        (c.lanes = p.lanes))
                      : ((c.updateQueue = null), (c.memoizedState = null));
                  }
                  var h = rQ(i);
                  if (null !== h) {
                    (h.flags &= -257),
                      rX(h, i, o, l, t),
                      1 & h.mode && rY(l, s, t),
                      (t = h),
                      (u = s);
                    var v = t.updateQueue;
                    if (null === v) {
                      var g = new Set();
                      g.add(u), (t.updateQueue = g);
                    } else v.add(u);
                    break e;
                  }
                  if (0 == (1 & t)) {
                    rY(l, s, t), lk();
                    break e;
                  }
                  u = Error(f(426));
                } else if (n_ && 1 & o.mode) {
                  var m = rQ(i);
                  if (null !== m) {
                    0 == (65536 & m.flags) && (m.flags |= 256),
                      rX(m, i, o, l, t),
                      nN(u);
                    break e;
                  }
                }
                (l = u),
                  4 !== aJ && (aJ = 2),
                  null === a4 ? (a4 = [l]) : a4.push(l),
                  (u = rB(u, o)),
                  (o = i);
                do {
                  switch (o.tag) {
                    case 3:
                      (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                      var y = rH(o, u, t);
                      t7(o, y);
                      break e;
                    case 1:
                      l = u;
                      var b = o.type,
                        x = o.stateNode;
                      if (
                        0 == (128 & o.flags) &&
                        ("function" == typeof b.getDerivedStateFromError ||
                          (null !== x &&
                            "function" == typeof x.componentDidCatch &&
                            (null === lt || !lt.has(x))))
                      ) {
                        (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                        var w = rW(o, l, t);
                        t7(o, w);
                        break e;
                      }
                  }
                  o = o.return;
                } while (null !== o);
              }
              lE(n);
            } catch (e) {
              (t = e), a$ === n && null !== n && (a$ = n = n.return);
              continue;
            }
            break;
          }
        }
        function l_() {
          var e = aW.current;
          return (aW.current = rD), null === e ? rD : e;
        }
        function lk() {
          (0 === aJ || 3 === aJ || 2 === aJ) && (aJ = 4),
            null === aq ||
              (0 == (268435455 & a1) && 0 == (268435455 & a2)) ||
              lm(aq, aG);
        }
        function lP(e, t) {
          var n = aX;
          aX |= 2;
          var r = l_();
          for ((aq === e && aG === t) || lw(e, t); ; )
            try {
              !(function () {
                for (; null !== a$; ) lC(a$);
              })();
              break;
            } catch (t) {
              lS(e, t);
            }
          if ((t$(), (aX = n), (aW.current = r), null !== a$))
            throw Error(f(261));
          return (aq = null), (aG = 0), aJ;
        }
        function lC(e) {
          var t = i(e.alternate, e, aZ);
          (e.memoizedProps = e.pendingProps),
            null === t ? lE(e) : (a$ = t),
            (aY.current = null);
        }
        function lE(e) {
          var n = e;
          do {
            var i = n.alternate;
            if (((e = n.return), 0 == (32768 & n.flags))) {
              if (
                null !==
                (i = (function (e, n, i) {
                  var o = n.pendingProps;
                  switch ((nx(n), n.tag)) {
                    case 2:
                    case 16:
                    case 15:
                    case 0:
                    case 11:
                    case 7:
                    case 8:
                    case 12:
                    case 9:
                    case 14:
                      return rK(n), null;
                    case 1:
                    case 17:
                      return ti(n.type) && to(), rK(n), null;
                    case 3:
                      return (
                        (o = n.stateNode),
                        nQ(),
                        e9(tr),
                        e9(tn),
                        nK(),
                        o.pendingContext &&
                          ((o.context = o.pendingContext),
                          (o.pendingContext = null)),
                        (null === e || null === e.child) &&
                          (nR(n)
                            ? rq(n)
                            : null === e ||
                              (e.memoizedState.isDehydrated &&
                                0 == (256 & n.flags)) ||
                              ((n.flags |= 1024),
                              null !== nP && (lg(nP), (nP = null)))),
                        r(e, n),
                        rK(n),
                        null
                      );
                    case 5:
                      nq(n), (i = nW(nH.current));
                      var u = n.type;
                      if (null !== e && null != n.stateNode)
                        a(e, n, u, o, i),
                          e.ref !== n.ref &&
                            ((n.flags |= 512), (n.flags |= 2097152));
                      else {
                        if (!o) {
                          if (null === n.stateNode) throw Error(f(166));
                          return rK(n), null;
                        }
                        if (((e = nW(nj.current)), nR(n))) {
                          if (!K) throw Error(f(175));
                          (e = eY(
                            n.stateNode,
                            n.type,
                            n.memoizedProps,
                            i,
                            e,
                            n,
                            !nk
                          )),
                            (n.updateQueue = e),
                            null !== e && rq(n);
                        } else {
                          var s = B(u, o, i, e, n);
                          t(s, n, !1, !1),
                            (n.stateNode = s),
                            V(s, u, o, i, e) && rq(n);
                        }
                        null !== n.ref &&
                          ((n.flags |= 512), (n.flags |= 2097152));
                      }
                      return rK(n), null;
                    case 6:
                      if (e && null != n.stateNode) l(e, n, e.memoizedProps, o);
                      else {
                        if ("string" != typeof o && null === n.stateNode)
                          throw Error(f(166));
                        if (
                          ((e = nW(nH.current)), (i = nW(nj.current)), nR(n))
                        ) {
                          if (!K) throw Error(f(176));
                          if (
                            (i = eQ(
                              (e = n.stateNode),
                              (o = n.memoizedProps),
                              n,
                              !nk
                            )) &&
                            null !== (u = nw)
                          )
                            switch (((s = 0 != (1 & u.mode)), u.tag)) {
                              case 3:
                                e0(u.stateNode.containerInfo, e, o, s);
                                break;
                              case 5:
                                e1(
                                  u.type,
                                  u.memoizedProps,
                                  u.stateNode,
                                  e,
                                  o,
                                  s
                                );
                            }
                          i && rq(n);
                        } else n.stateNode = Y(o, e, i, n);
                      }
                      return rK(n), null;
                    case 13:
                      if (
                        (e9(n$),
                        (o = n.memoizedState),
                        n_ &&
                          null !== nS &&
                          0 != (1 & n.mode) &&
                          0 == (128 & n.flags))
                      ) {
                        for (e = nS; e; ) e = ej(e);
                        return nO(), (n.flags |= 98560), n;
                      }
                      if (null !== o && null !== o.dehydrated) {
                        if (((o = nR(n)), null === e)) {
                          if (!o) throw Error(f(318));
                          if (!K) throw Error(f(344));
                          if (
                            !(e =
                              null !== (e = n.memoizedState)
                                ? e.dehydrated
                                : null)
                          )
                            throw Error(f(317));
                          eX(e, n);
                        } else
                          nO(),
                            0 == (128 & n.flags) && (n.memoizedState = null),
                            (n.flags |= 4);
                        return rK(n), null;
                      }
                      if (
                        (null !== nP && (lg(nP), (nP = null)),
                        0 != (128 & n.flags))
                      )
                        return (n.lanes = i), n;
                      return (
                        (o = null !== o),
                        (i = !1),
                        null === e ? nR(n) : (i = null !== e.memoizedState),
                        o &&
                          !i &&
                          ((n.child.flags |= 8192),
                          0 != (1 & n.mode) &&
                            (null === e || 0 != (1 & n$.current)
                              ? 0 === aJ && (aJ = 3)
                              : lk())),
                        null !== n.updateQueue && (n.flags |= 4),
                        rK(n),
                        null
                      );
                    case 4:
                      return (
                        nQ(),
                        r(e, n),
                        null === e && ee(n.stateNode.containerInfo),
                        rK(n),
                        null
                      );
                    case 10:
                      return tZ(n.type._context), rK(n), null;
                    case 19:
                      if ((e9(n$), null === (u = n.memoizedState)))
                        return rK(n), null;
                      if (
                        ((o = 0 != (128 & n.flags)), null === (s = u.rendering))
                      ) {
                        if (o) rZ(u, !1);
                        else {
                          if (0 !== aJ || (null !== e && 0 != (128 & e.flags)))
                            for (e = n.child; null !== e; ) {
                              if (null !== (s = nG(e))) {
                                for (
                                  n.flags |= 128,
                                    rZ(u, !1),
                                    null !== (e = s.updateQueue) &&
                                      ((n.updateQueue = e), (n.flags |= 4)),
                                    n.subtreeFlags = 0,
                                    e = i,
                                    o = n.child;
                                  null !== o;

                                )
                                  (i = o),
                                    (u = e),
                                    (i.flags &= 14680066),
                                    null === (s = i.alternate)
                                      ? ((i.childLanes = 0),
                                        (i.lanes = u),
                                        (i.child = null),
                                        (i.subtreeFlags = 0),
                                        (i.memoizedProps = null),
                                        (i.memoizedState = null),
                                        (i.updateQueue = null),
                                        (i.dependencies = null),
                                        (i.stateNode = null))
                                      : ((i.childLanes = s.childLanes),
                                        (i.lanes = s.lanes),
                                        (i.child = s.child),
                                        (i.subtreeFlags = 0),
                                        (i.deletions = null),
                                        (i.memoizedProps = s.memoizedProps),
                                        (i.memoizedState = s.memoizedState),
                                        (i.updateQueue = s.updateQueue),
                                        (i.type = s.type),
                                        (u = s.dependencies),
                                        (i.dependencies =
                                          null === u
                                            ? null
                                            : {
                                                lanes: u.lanes,
                                                firstContext: u.firstContext,
                                              })),
                                    (o = o.sibling);
                                return te(n$, (1 & n$.current) | 2), n.child;
                              }
                              e = e.sibling;
                            }
                          null !== u.tail &&
                            tM() > a8 &&
                            ((n.flags |= 128),
                            (o = !0),
                            rZ(u, !1),
                            (n.lanes = 4194304));
                        }
                      } else {
                        if (!o) {
                          if (null !== (e = nG(s))) {
                            if (
                              ((n.flags |= 128),
                              (o = !0),
                              null !== (e = e.updateQueue) &&
                                ((n.updateQueue = e), (n.flags |= 4)),
                              rZ(u, !0),
                              null === u.tail &&
                                "hidden" === u.tailMode &&
                                !s.alternate &&
                                !n_)
                            )
                              return rK(n), null;
                          } else
                            2 * tM() - u.renderingStartTime > a8 &&
                              1073741824 !== i &&
                              ((n.flags |= 128),
                              (o = !0),
                              rZ(u, !1),
                              (n.lanes = 4194304));
                        }
                        u.isBackwards
                          ? ((s.sibling = n.child), (n.child = s))
                          : (null !== (e = u.last)
                              ? (e.sibling = s)
                              : (n.child = s),
                            (u.last = s));
                      }
                      if (null !== u.tail)
                        return (
                          (n = u.tail),
                          (u.rendering = n),
                          (u.tail = n.sibling),
                          (u.renderingStartTime = tM()),
                          (n.sibling = null),
                          (e = n$.current),
                          te(n$, o ? (1 & e) | 2 : 1 & e),
                          n
                        );
                      return rK(n), null;
                    case 22:
                    case 23:
                      return (
                        lx(),
                        (o = null !== n.memoizedState),
                        null !== e &&
                          (null !== e.memoizedState) !== o &&
                          (n.flags |= 8192),
                        o && 0 != (1 & n.mode)
                          ? 0 != (1073741824 & aZ) &&
                            (rK(n),
                            G && 6 & n.subtreeFlags && (n.flags |= 8192))
                          : rK(n),
                        null
                      );
                    case 24:
                    case 25:
                      return null;
                  }
                  throw Error(f(156, n.tag));
                })(i, n, aZ))
              ) {
                a$ = i;
                return;
              }
            } else {
              if (
                null !==
                (i = (function (e, t) {
                  switch ((nx(t), t.tag)) {
                    case 1:
                      return (
                        ti(t.type) && to(),
                        65536 & (e = t.flags)
                          ? ((t.flags = (-65537 & e) | 128), t)
                          : null
                      );
                    case 3:
                      return (
                        nQ(),
                        e9(tr),
                        e9(tn),
                        nK(),
                        0 != (65536 & (e = t.flags)) && 0 == (128 & e)
                          ? ((t.flags = (-65537 & e) | 128), t)
                          : null
                      );
                    case 5:
                      return nq(t), null;
                    case 13:
                      if (
                        (e9(n$),
                        null !== (e = t.memoizedState) && null !== e.dehydrated)
                      ) {
                        if (null === t.alternate) throw Error(f(340));
                        nO();
                      }
                      return 65536 & (e = t.flags)
                        ? ((t.flags = (-65537 & e) | 128), t)
                        : null;
                    case 19:
                      return e9(n$), null;
                    case 4:
                      return nQ(), null;
                    case 10:
                      return tZ(t.type._context), null;
                    case 22:
                    case 23:
                      return lx(), null;
                    default:
                      return null;
                  }
                })(i, n))
              ) {
                (i.flags &= 32767), (a$ = i);
                return;
              }
              if (null !== e)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
              else {
                (aJ = 6), (a$ = null);
                return;
              }
            }
            if (null !== (n = n.sibling)) {
              a$ = n;
              return;
            }
            a$ = n = e;
          } while (null !== n);
          0 === aJ && (aJ = 5);
        }
        function lT(e, t) {
          var n = t_,
            r = aQ.transition;
          try {
            (aQ.transition = null),
              (t_ = 1),
              (function (e, t, n) {
                do lM();
                while (null !== lr);
                if (0 != (6 & aX)) throw Error(f(327));
                var r = e.finishedWork,
                  a = e.finishedLanes;
                if (null !== r) {
                  if (
                    ((e.finishedWork = null),
                    (e.finishedLanes = 0),
                    r === e.current)
                  )
                    throw Error(f(177));
                  (e.callbackNode = null), (e.callbackPriority = 0);
                  var l = r.lanes | r.childLanes;
                  if (
                    ((function (e, t) {
                      var n = e.pendingLanes & ~t;
                      (e.pendingLanes = t),
                        (e.suspendedLanes = 0),
                        (e.pingedLanes = 0),
                        (e.expiredLanes &= t),
                        (e.mutableReadLanes &= t),
                        (e.entangledLanes &= t),
                        (t = e.entanglements);
                      var r = e.eventTimes;
                      for (e = e.expirationTimes; 0 < n; ) {
                        var a = 31 - td(n),
                          l = 1 << a;
                        (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~l);
                      }
                    })(e, l),
                    e === aq && ((a$ = aq = null), (aG = 0)),
                    (0 == (2064 & r.subtreeFlags) && 0 == (2064 & r.flags)) ||
                      ln ||
                      ((ln = !0),
                      (i = tO),
                      (o = function () {
                        return lM(), null;
                      }),
                      tP(i, o)),
                    (l = 0 != (15990 & r.flags)),
                    0 != (15990 & r.subtreeFlags) || l)
                  ) {
                    (l = aQ.transition), (aQ.transition = null);
                    var i,
                      o,
                      u,
                      s,
                      c = t_;
                    t_ = 1;
                    var d = aX;
                    (aX |= 4),
                      (aY.current = null),
                      (function (e, t) {
                        for (A(e.containerInfo), ah = t; null !== ah; )
                          if (
                            ((t = (e = ah).child),
                            0 != (1028 & e.subtreeFlags) && null !== t)
                          )
                            (t.return = e), (ah = t);
                          else
                            for (; null !== ah; ) {
                              e = ah;
                              try {
                                var n = e.alternate;
                                if (0 != (1024 & e.flags))
                                  switch (e.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                    case 5:
                                    case 6:
                                    case 4:
                                    case 17:
                                      break;
                                    case 1:
                                      if (null !== n) {
                                        var r = n.memoizedProps,
                                          a = n.memoizedState,
                                          l = e.stateNode,
                                          i = l.getSnapshotBeforeUpdate(
                                            e.elementType === e.type
                                              ? r
                                              : tW(e.type, r),
                                            a
                                          );
                                        l.__reactInternalSnapshotBeforeUpdate =
                                          i;
                                      }
                                      break;
                                    case 3:
                                      G && eE(e.stateNode.containerInfo);
                                      break;
                                    default:
                                      throw Error(f(163));
                                  }
                              } catch (t) {
                                lR(e, e.return, t);
                              }
                              if (null !== (t = e.sibling)) {
                                (t.return = e.return), (ah = t);
                                break;
                              }
                              ah = e.return;
                            }
                        (n = am), (am = !1);
                      })(e, r),
                      (function (e, t) {
                        for (ah = t; null !== ah; ) {
                          var n = (t = ah).deletions;
                          if (null !== n)
                            for (var r = 0; r < n.length; r++) {
                              var a = n[r];
                              try {
                                var l = e;
                                G ? aC(l, a, t) : aS(l, a, t);
                                var i = a.alternate;
                                null !== i && (i.return = null),
                                  (a.return = null);
                              } catch (e) {
                                lR(a, t, e);
                              }
                            }
                          if (
                            ((n = t.child),
                            0 != (12854 & t.subtreeFlags) && null !== n)
                          )
                            (n.return = t), (ah = n);
                          else
                            for (; null !== ah; ) {
                              t = ah;
                              try {
                                var o = t.flags;
                                if ((32 & o && G && eS(t.stateNode), 512 & o)) {
                                  var u = t.alternate;
                                  if (null !== u) {
                                    var s = u.ref;
                                    null !== s &&
                                      ("function" == typeof s
                                        ? s(null)
                                        : (s.current = null));
                                  }
                                }
                                if (8192 & o)
                                  switch (t.tag) {
                                    case 13:
                                      if (null !== t.memoizedState) {
                                        var c = t.alternate;
                                        (null === c ||
                                          null === c.memoizedState) &&
                                          (a6 = tM());
                                      }
                                      break;
                                    case 22:
                                      var f = null !== t.memoizedState,
                                        d = t.alternate,
                                        p =
                                          null !== d &&
                                          null !== d.memoizedState;
                                      if (((n = t), G)) {
                                        e: if (
                                          ((r = n), (a = f), (l = null), G)
                                        )
                                          for (var h = r; ; ) {
                                            if (5 === h.tag) {
                                              if (null === l) {
                                                l = h;
                                                var v = h.stateNode;
                                                a
                                                  ? e_(v)
                                                  : eP(
                                                      h.stateNode,
                                                      h.memoizedProps
                                                    );
                                              }
                                            } else if (6 === h.tag) {
                                              if (null === l) {
                                                var g = h.stateNode;
                                                a
                                                  ? ek(g)
                                                  : eC(g, h.memoizedProps);
                                              }
                                            } else if (
                                              ((22 !== h.tag && 23 !== h.tag) ||
                                                null === h.memoizedState ||
                                                h === r) &&
                                              null !== h.child
                                            ) {
                                              (h.child.return = h),
                                                (h = h.child);
                                              continue;
                                            }
                                            if (h === r) break;
                                            for (; null === h.sibling; ) {
                                              if (
                                                null === h.return ||
                                                h.return === r
                                              )
                                                break e;
                                              l === h && (l = null),
                                                (h = h.return);
                                            }
                                            l === h && (l = null),
                                              (h.sibling.return = h.return),
                                              (h = h.sibling);
                                          }
                                      }
                                      if (f && !p && 0 != (1 & n.mode)) {
                                        ah = n;
                                        for (var m = n.child; null !== m; ) {
                                          for (n = ah = m; null !== ah; ) {
                                            var y = (r = ah).child;
                                            switch (r.tag) {
                                              case 0:
                                              case 11:
                                              case 14:
                                              case 15:
                                                ay(4, r, r.return);
                                                break;
                                              case 1:
                                                av(r, r.return);
                                                var b = r.stateNode;
                                                if (
                                                  "function" ==
                                                  typeof b.componentWillUnmount
                                                ) {
                                                  var x = r.return;
                                                  try {
                                                    (b.props = r.memoizedProps),
                                                      (b.state =
                                                        r.memoizedState),
                                                      b.componentWillUnmount();
                                                  } catch (e) {
                                                    lR(r, x, e);
                                                  }
                                                }
                                                break;
                                              case 5:
                                                av(r, r.return);
                                                break;
                                              case 22:
                                                if (null !== r.memoizedState) {
                                                  az(n);
                                                  continue;
                                                }
                                            }
                                            null !== y
                                              ? ((y.return = r), (ah = y))
                                              : az(n);
                                          }
                                          m = m.sibling;
                                        }
                                      }
                                  }
                                switch (4102 & o) {
                                  case 2:
                                    aP(t), (t.flags &= -3);
                                    break;
                                  case 6:
                                    aP(t), (t.flags &= -3), aE(t.alternate, t);
                                    break;
                                  case 4096:
                                    t.flags &= -4097;
                                    break;
                                  case 4100:
                                    (t.flags &= -4097), aE(t.alternate, t);
                                    break;
                                  case 4:
                                    aE(t.alternate, t);
                                }
                              } catch (e) {
                                lR(t, t.return, e);
                              }
                              if (null !== (n = t.sibling)) {
                                (n.return = t.return), (ah = n);
                                break;
                              }
                              ah = t.return;
                            }
                        }
                      })(e, r, a),
                      U(e.containerInfo),
                      (e.current = r),
                      (u = r),
                      (s = e),
                      (ah = u),
                      (function e(t, n, r) {
                        for (var a = 0 != (1 & t.mode); null !== ah; ) {
                          var l = ah,
                            i = l.child;
                          if (22 === l.tag && a) {
                            var o = null !== l.memoizedState || af;
                            if (!o) {
                              var u = l.alternate,
                                s =
                                  (null !== u && null !== u.memoizedState) ||
                                  ad;
                              u = af;
                              var c = ad;
                              if (((af = o), (ad = s) && !c))
                                for (ah = l; null !== ah; )
                                  (s = (o = ah).child),
                                    22 === o.tag && null !== o.memoizedState
                                      ? aR(l)
                                      : null !== s
                                      ? ((s.return = o), (ah = s))
                                      : aR(l);
                              for (; null !== i; )
                                (ah = i), e(i, n, r), (i = i.sibling);
                              (ah = l), (af = u), (ad = c);
                            }
                            aM(t, n, r);
                          } else
                            0 != (8772 & l.subtreeFlags) && null !== i
                              ? ((i.return = l), (ah = i))
                              : aM(t, n, r);
                        }
                      })(u, s, a),
                      tT(),
                      (aX = d),
                      (t_ = c),
                      (aQ.transition = l);
                  } else e.current = r;
                  if (
                    (ln && ((ln = !1), (lr = e), (la = a)),
                    0 === (l = e.pendingLanes) && (lt = null),
                    (function (e) {
                      if (tL && "function" == typeof tL.onCommitFiberRoot)
                        try {
                          tL.onCommitFiberRoot(
                            tI,
                            e,
                            void 0,
                            128 == (128 & e.current.flags)
                          );
                        } catch (e) {}
                    })(r.stateNode, n),
                    lp(e, tM()),
                    null !== t)
                  )
                    for (n = e.onRecoverableError, r = 0; r < t.length; r++)
                      n(t[r]);
                  if (a9) throw ((a9 = !1), (e = le), (le = null), e);
                  0 != (1 & la) && 0 !== e.tag && lM(),
                    0 != (1 & (l = e.pendingLanes))
                      ? e === li
                        ? ll++
                        : ((ll = 0), (li = e))
                      : (ll = 0),
                    tj();
                }
              })(e, t, n);
          } finally {
            (aQ.transition = r), (t_ = n);
          }
          return null;
        }
        function lM() {
          if (null !== lr) {
            var e = tk(la),
              t = aQ.transition,
              n = t_;
            try {
              if (((aQ.transition = null), (t_ = 16 > e ? 16 : e), null === lr))
                var r = !1;
              else {
                if (((e = lr), (lr = null), (la = 0), 0 != (6 & aX)))
                  throw Error(f(331));
                var a = aX;
                for (aX |= 4, ah = e.current; null !== ah; ) {
                  var l = ah,
                    i = l.child;
                  if (0 != (16 & ah.flags)) {
                    var o = l.deletions;
                    if (null !== o) {
                      for (var u = 0; u < o.length; u++) {
                        var s = o[u];
                        for (ah = s; null !== ah; ) {
                          var c = ah;
                          switch (c.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ay(8, c, l);
                          }
                          var d = c.child;
                          if (null !== d) (d.return = c), (ah = d);
                          else
                            for (; null !== ah; ) {
                              var p = (c = ah).sibling,
                                h = c.return;
                              if (
                                (!(function e(t) {
                                  var n = t.alternate;
                                  null !== n && ((t.alternate = null), e(n)),
                                    (t.child = null),
                                    (t.deletions = null),
                                    (t.sibling = null),
                                    5 === t.tag &&
                                      null !== (n = t.stateNode) &&
                                      en(n),
                                    (t.stateNode = null),
                                    (t.return = null),
                                    (t.dependencies = null),
                                    (t.memoizedProps = null),
                                    (t.memoizedState = null),
                                    (t.pendingProps = null),
                                    (t.stateNode = null),
                                    (t.updateQueue = null);
                                })(c),
                                c === s)
                              ) {
                                ah = null;
                                break;
                              }
                              if (null !== p) {
                                (p.return = h), (ah = p);
                                break;
                              }
                              ah = h;
                            }
                        }
                      }
                      var v = l.alternate;
                      if (null !== v) {
                        var g = v.child;
                        if (null !== g) {
                          v.child = null;
                          do {
                            var m = g.sibling;
                            (g.sibling = null), (g = m);
                          } while (null !== g);
                        }
                      }
                      ah = l;
                    }
                  }
                  if (0 != (2064 & l.subtreeFlags) && null !== i)
                    (i.return = l), (ah = i);
                  else
                    for (; null !== ah; ) {
                      if (((l = ah), 0 != (2048 & l.flags)))
                        switch (l.tag) {
                          case 0:
                          case 11:
                          case 15:
                            ay(9, l, l.return);
                        }
                      var y = l.sibling;
                      if (null !== y) {
                        (y.return = l.return), (ah = y);
                        break;
                      }
                      ah = l.return;
                    }
                }
                var b = e.current;
                for (ah = b; null !== ah; ) {
                  var x = (i = ah).child;
                  if (0 != (2064 & i.subtreeFlags) && null !== x)
                    (x.return = i), (ah = x);
                  else
                    for (i = b; null !== ah; ) {
                      if (((o = ah), 0 != (2048 & o.flags)))
                        try {
                          switch (o.tag) {
                            case 0:
                            case 11:
                            case 15:
                              ab(9, o);
                          }
                        } catch (e) {
                          lR(o, o.return, e);
                        }
                      if (o === i) {
                        ah = null;
                        break;
                      }
                      var w = o.sibling;
                      if (null !== w) {
                        (w.return = o.return), (ah = w);
                        break;
                      }
                      ah = o.return;
                    }
                }
                if (
                  ((aX = a),
                  tj(),
                  tL && "function" == typeof tL.onPostCommitFiberRoot)
                )
                  try {
                    tL.onPostCommitFiberRoot(tI, e);
                  } catch (e) {}
                r = !0;
              }
              return r;
            } finally {
              (t_ = n), (aQ.transition = t);
            }
          }
          return !1;
        }
        function lz(e, t, n) {
          (t = rH(e, (t = rB(n, t)), 1)),
            t6(e, t),
            (t = ls()),
            null !== (e = ld(e, 1)) && (tw(e, 1, t), lp(e, t));
        }
        function lR(e, t, n) {
          if (3 === e.tag) lz(e, e, n);
          else
            for (; null !== t; ) {
              if (3 === t.tag) {
                lz(t, e, n);
                break;
              }
              if (1 === t.tag) {
                var r = t.stateNode;
                if (
                  "function" == typeof t.type.getDerivedStateFromError ||
                  ("function" == typeof r.componentDidCatch &&
                    (null === lt || !lt.has(r)))
                ) {
                  (e = rW(t, (e = rB(n, e)), 1)),
                    t6(t, e),
                    (e = ls()),
                    null !== (t = ld(t, 1)) && (tw(t, 1, e), lp(t, e));
                  break;
                }
              }
              t = t.return;
            }
        }
        function lO(e, t, n) {
          var r = e.pingCache;
          null !== r && r.delete(t),
            (t = ls()),
            (e.pingedLanes |= e.suspendedLanes & n),
            aq === e &&
              (aG & n) === n &&
              (4 === aJ ||
              (3 === aJ && (130023424 & aG) === aG && 500 > tM() - a6)
                ? lw(e, 0)
                : (a3 |= n)),
            lp(e, t);
        }
        function lN(e, t) {
          0 === t &&
            (0 == (1 & e.mode)
              ? (t = 1)
              : ((t = tg), 0 == (130023424 & (tg <<= 1)) && (tg = 4194304)));
          var n = ls();
          null !== (e = ld(e, t)) && (tw(e, t, n), lp(e, n));
        }
        function lI(e) {
          var t = e.memoizedState,
            n = 0;
          null !== t && (n = t.retryLane), lN(e, n);
        }
        function lL(e, t) {
          var n = 0;
          switch (e.tag) {
            case 13:
              var r = e.stateNode,
                a = e.memoizedState;
              null !== a && (n = a.retryLane);
              break;
            case 19:
              r = e.stateNode;
              break;
            default:
              throw Error(f(314));
          }
          null !== r && r.delete(t), lN(e, n);
        }
        function lD(e, t, n, r) {
          (this.tag = e),
            (this.key = n),
            (this.sibling =
              this.child =
              this.return =
              this.stateNode =
              this.type =
              this.elementType =
                null),
            (this.index = 0),
            (this.ref = null),
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
            (this.alternate = null);
        }
        function lF(e, t, n, r) {
          return new lD(e, t, n, r);
        }
        function lA(e) {
          return !(!(e = e.prototype) || !e.isReactComponent);
        }
        function lU(e, t) {
          var n = e.alternate;
          return (
            null === n
              ? (((n = lF(e.tag, t, e.key, e.mode)).elementType =
                  e.elementType),
                (n.type = e.type),
                (n.stateNode = e.stateNode),
                (n.alternate = e),
                (e.alternate = n))
              : ((n.pendingProps = t),
                (n.type = e.type),
                (n.flags = 0),
                (n.subtreeFlags = 0),
                (n.deletions = null)),
            (n.flags = 14680064 & e.flags),
            (n.childLanes = e.childLanes),
            (n.lanes = e.lanes),
            (n.child = e.child),
            (n.memoizedProps = e.memoizedProps),
            (n.memoizedState = e.memoizedState),
            (n.updateQueue = e.updateQueue),
            (t = e.dependencies),
            (n.dependencies =
              null === t
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
            (n.sibling = e.sibling),
            (n.index = e.index),
            (n.ref = e.ref),
            n
          );
        }
        function lB(e, t, n, r, a, l) {
          var i = 2;
          if (((r = e), "function" == typeof e)) lA(e) && (i = 1);
          else if ("string" == typeof e) i = 5;
          else
            e: switch (e) {
              case v:
                return lj(n.children, a, l, t);
              case g:
                (i = 8), (a |= 8);
                break;
              case m:
                return (
                  ((e = lF(12, n, t, 2 | a)).elementType = m), (e.lanes = l), e
                );
              case w:
                return (
                  ((e = lF(13, n, t, a)).elementType = w), (e.lanes = l), e
                );
              case S:
                return (
                  ((e = lF(19, n, t, a)).elementType = S), (e.lanes = l), e
                );
              case P:
                return lV(n, a, l, t);
              default:
                if ("object" == typeof e && null !== e)
                  switch (e.$$typeof) {
                    case y:
                      i = 10;
                      break e;
                    case b:
                      i = 9;
                      break e;
                    case x:
                      i = 11;
                      break e;
                    case _:
                      i = 14;
                      break e;
                    case k:
                      (i = 16), (r = null);
                      break e;
                  }
                throw Error(f(130, null == e ? e : typeof e, ""));
            }
          return (
            ((t = lF(i, n, t, a)).elementType = e),
            (t.type = r),
            (t.lanes = l),
            t
          );
        }
        function lj(e, t, n, r) {
          return ((e = lF(7, e, r, t)).lanes = n), e;
        }
        function lV(e, t, n, r) {
          return (
            ((e = lF(22, e, r, t)).elementType = P),
            (e.lanes = n),
            (e.stateNode = {}),
            e
          );
        }
        function lH(e, t, n) {
          return ((e = lF(6, e, null, t)).lanes = n), e;
        }
        function lW(e, t, n) {
          return (
            ((t = lF(
              4,
              null !== e.children ? e.children : [],
              e.key,
              t
            )).lanes = n),
            (t.stateNode = {
              containerInfo: e.containerInfo,
              pendingChildren: null,
              implementation: e.implementation,
            }),
            t
          );
        }
        function lY(e, t, n, r, a) {
          (this.tag = t),
            (this.containerInfo = e),
            (this.finishedWork =
              this.pingCache =
              this.current =
              this.pendingChildren =
                null),
            (this.timeoutHandle = q),
            (this.callbackNode = this.pendingContext = this.context = null),
            (this.callbackPriority = 0),
            (this.eventTimes = tx(0)),
            (this.expirationTimes = tx(-1)),
            (this.entangledLanes =
              this.finishedLanes =
              this.mutableReadLanes =
              this.expiredLanes =
              this.pingedLanes =
              this.suspendedLanes =
              this.pendingLanes =
                0),
            (this.entanglements = tx(0)),
            (this.identifierPrefix = r),
            (this.onRecoverableError = a),
            K && (this.mutableSourceEagerHydrationData = null);
        }
        function lQ(e, t, n, r, a, l, i, o, u) {
          return (
            (e = new lY(e, t, n, o, u)),
            1 === t ? ((t = 1), !0 === l && (t |= 8)) : (t = 0),
            (l = lF(3, null, null, t)),
            (e.current = l),
            (l.stateNode = e),
            (l.memoizedState = {
              element: r,
              isDehydrated: n,
              cache: null,
              transitions: null,
            }),
            t3(l),
            e
          );
        }
        function lX(e) {
          if (!e) return tt;
          e = e._reactInternals;
          e: {
            if (M(e) !== e || 1 !== e.tag) throw Error(f(170));
            var t = e;
            do {
              switch (t.tag) {
                case 3:
                  t = t.stateNode.context;
                  break e;
                case 1:
                  if (ti(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e;
                  }
              }
              t = t.return;
            } while (null !== t);
            throw Error(f(171));
          }
          if (1 === e.tag) {
            var n = e.type;
            if (ti(n)) return ts(e, n, t);
          }
          return t;
        }
        function lq(e) {
          var t = e._reactInternals;
          if (void 0 === t) {
            if ("function" == typeof e.render) throw Error(f(188));
            throw Error(f(268, (e = Object.keys(e).join(","))));
          }
          return null === (e = O(t)) ? null : e.stateNode;
        }
        function l$(e, t) {
          if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
            var n = e.retryLane;
            e.retryLane = 0 !== n && n < t ? n : t;
          }
        }
        function lG(e, t) {
          l$(e, t), (e = e.alternate) && l$(e, t);
        }
        function lZ(e) {
          return null === (e = O(e)) ? null : e.stateNode;
        }
        function lK() {
          return null;
        }
        return (
          (i = function (e, t, n) {
            if (null !== e) {
              if (e.memoizedProps !== t.pendingProps || tr.current) r0 = !0;
              else {
                if (0 == (e.lanes & n) && 0 == (128 & t.flags))
                  return (
                    (r0 = !1),
                    (function (e, t, n) {
                      switch (t.tag) {
                        case 3:
                          ae(t), nO();
                          break;
                        case 5:
                          nX(t);
                          break;
                        case 1:
                          ti(t.type) && tc(t);
                          break;
                        case 4:
                          nY(t, t.stateNode.containerInfo);
                          break;
                        case 10:
                          tG(t, t.type._context, t.memoizedProps.value);
                          break;
                        case 13:
                          var r = t.memoizedState;
                          if (null !== r) {
                            if (null !== r.dehydrated)
                              return (
                                te(n$, 1 & n$.current), (t.flags |= 128), null
                              );
                            if (0 != (n & t.child.childLanes))
                              return aa(e, t, n);
                            return (
                              te(n$, 1 & n$.current),
                              null !== (e = ac(e, t, n)) ? e.sibling : null
                            );
                          }
                          te(n$, 1 & n$.current);
                          break;
                        case 19:
                          if (
                            ((r = 0 != (n & t.childLanes)),
                            0 != (128 & e.flags))
                          ) {
                            if (r) return as(e, t, n);
                            t.flags |= 128;
                          }
                          var a = t.memoizedState;
                          if (
                            (null !== a &&
                              ((a.rendering = null),
                              (a.tail = null),
                              (a.lastEffect = null)),
                            te(n$, n$.current),
                            !r)
                          )
                            return null;
                          break;
                        case 22:
                        case 23:
                          return (t.lanes = 0), r5(e, t, n);
                      }
                      return ac(e, t, n);
                    })(e, t, n)
                  );
                r0 = 0 != (131072 & e.flags);
              }
            } else
              (r0 = !1), n_ && 0 != (1048576 & t.flags) && ny(t, nf, t.index);
            switch (((t.lanes = 0), t.tag)) {
              case 2:
                var r = t.type;
                null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                  (e = t.pendingProps);
                var a = tl(t, tn.current);
                tJ(t, n), (a = rt(null, t, r, e, a, n));
                var l = rn();
                return (
                  (t.flags |= 1),
                  "object" == typeof a &&
                  null !== a &&
                  "function" == typeof a.render &&
                  void 0 === a.$$typeof
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      ti(r) ? ((l = !0), tc(t)) : (l = !1),
                      (t.memoizedState =
                        null !== a.state && void 0 !== a.state
                          ? a.state
                          : null),
                      t3(t),
                      (a.updater = nr),
                      (t.stateNode = a),
                      (a._reactInternals = t),
                      no(t, r, e, n),
                      (t = r9(null, t, r, !0, l, n)))
                    : ((t.tag = 0),
                      n_ && l && nb(t),
                      r1(null, t, a, n),
                      (t = t.child)),
                  t
                );
              case 16:
                r = t.elementType;
                e: {
                  switch (
                    (null !== e &&
                      ((e.alternate = null),
                      (t.alternate = null),
                      (t.flags |= 2)),
                    (e = t.pendingProps),
                    (r = (a = r._init)(r._payload)),
                    (t.type = r),
                    (a = t.tag =
                      (function (e) {
                        if ("function" == typeof e) return lA(e) ? 1 : 0;
                        if (null != e) {
                          if ((e = e.$$typeof) === x) return 11;
                          if (e === _) return 14;
                        }
                        return 2;
                      })(r)),
                    (e = tW(r, e)),
                    a)
                  ) {
                    case 0:
                      t = r8(null, t, r, e, n);
                      break e;
                    case 1:
                      t = r7(null, t, r, e, n);
                      break e;
                    case 11:
                      t = r2(null, t, r, e, n);
                      break e;
                    case 14:
                      t = r3(null, t, r, tW(r.type, e), n);
                      break e;
                  }
                  throw Error(f(306, r, ""));
                }
                return t;
              case 0:
                return (
                  (r = t.type),
                  (a = t.pendingProps),
                  (a = t.elementType === r ? a : tW(r, a)),
                  r8(e, t, r, a, n)
                );
              case 1:
                return (
                  (r = t.type),
                  (a = t.pendingProps),
                  (a = t.elementType === r ? a : tW(r, a)),
                  r7(e, t, r, a, n)
                );
              case 3:
                e: {
                  if ((ae(t), null === e)) throw Error(f(387));
                  (r = t.pendingProps),
                    (a = (l = t.memoizedState).element),
                    t4(e, t),
                    t9(t, r, null, n);
                  var i = t.memoizedState;
                  if (((r = i.element), K && l.isDehydrated)) {
                    if (
                      ((l = {
                        element: r,
                        isDehydrated: !1,
                        cache: i.cache,
                        transitions: i.transitions,
                      }),
                      (t.updateQueue.baseState = l),
                      (t.memoizedState = l),
                      256 & t.flags)
                    ) {
                      t = at(e, t, r, n, (a = Error(f(423))));
                      break e;
                    }
                    if (r !== a) {
                      t = at(e, t, r, n, (a = Error(f(424))));
                      break e;
                    }
                    for (
                      K &&
                        ((nS = eH(t.stateNode.containerInfo)),
                        (nw = t),
                        (n_ = !0),
                        (nP = null),
                        (nk = !1)),
                        n = nU(t, null, r, n),
                        t.child = n;
                      n;

                    )
                      (n.flags = (-3 & n.flags) | 4096), (n = n.sibling);
                  } else {
                    if ((nO(), r === a)) {
                      t = ac(e, t, n);
                      break e;
                    }
                    r1(e, t, r, n);
                  }
                  t = t.child;
                }
                return t;
              case 5:
                return (
                  nX(t),
                  null === e && nM(t),
                  (r = t.type),
                  (a = t.pendingProps),
                  (l = null !== e ? e.memoizedProps : null),
                  (i = a.children),
                  W(r, a)
                    ? (i = null)
                    : null !== l && W(r, l) && (t.flags |= 32),
                  r6(e, t),
                  r1(e, t, i, n),
                  t.child
                );
              case 6:
                return null === e && nM(t), null;
              case 13:
                return aa(e, t, n);
              case 4:
                return (
                  nY(t, t.stateNode.containerInfo),
                  (r = t.pendingProps),
                  null === e ? (t.child = nA(t, null, r, n)) : r1(e, t, r, n),
                  t.child
                );
              case 11:
                return (
                  (r = t.type),
                  (a = t.pendingProps),
                  (a = t.elementType === r ? a : tW(r, a)),
                  r2(e, t, r, a, n)
                );
              case 7:
                return r1(e, t, t.pendingProps, n), t.child;
              case 8:
              case 12:
                return r1(e, t, t.pendingProps.children, n), t.child;
              case 10:
                e: {
                  if (
                    ((r = t.type._context),
                    (a = t.pendingProps),
                    (l = t.memoizedProps),
                    tG(t, r, (i = a.value)),
                    null !== l)
                  ) {
                    if (tD(l.value, i)) {
                      if (l.children === a.children && !tr.current) {
                        t = ac(e, t, n);
                        break e;
                      }
                    } else
                      for (
                        null !== (l = t.child) && (l.return = t);
                        null !== l;

                      ) {
                        var o = l.dependencies;
                        if (null !== o) {
                          i = l.child;
                          for (var u = o.firstContext; null !== u; ) {
                            if (u.context === r) {
                              if (1 === l.tag) {
                                (u = t5(-1, n & -n)).tag = 2;
                                var s = l.updateQueue;
                                if (null !== s) {
                                  var c = (s = s.shared).pending;
                                  null === c
                                    ? (u.next = u)
                                    : ((u.next = c.next), (c.next = u)),
                                    (s.pending = u);
                                }
                              }
                              (l.lanes |= n),
                                null !== (u = l.alternate) && (u.lanes |= n),
                                tK(l.return, n, t),
                                (o.lanes |= n);
                              break;
                            }
                            u = u.next;
                          }
                        } else if (10 === l.tag)
                          i = l.type === t.type ? null : l.child;
                        else if (18 === l.tag) {
                          if (null === (i = l.return)) throw Error(f(341));
                          (i.lanes |= n),
                            null !== (o = i.alternate) && (o.lanes |= n),
                            tK(i, n, t),
                            (i = l.sibling);
                        } else i = l.child;
                        if (null !== i) i.return = l;
                        else
                          for (i = l; null !== i; ) {
                            if (i === t) {
                              i = null;
                              break;
                            }
                            if (null !== (l = i.sibling)) {
                              (l.return = i.return), (i = l);
                              break;
                            }
                            i = i.return;
                          }
                        l = i;
                      }
                  }
                  r1(e, t, a.children, n), (t = t.child);
                }
                return t;
              case 9:
                return (
                  (a = t.type),
                  (r = t.pendingProps.children),
                  tJ(t, n),
                  (r = r((a = t0(a)))),
                  (t.flags |= 1),
                  r1(e, t, r, n),
                  t.child
                );
              case 14:
                return (
                  (a = tW((r = t.type), t.pendingProps)),
                  (a = tW(r.type, a)),
                  r3(e, t, r, a, n)
                );
              case 15:
                return r4(e, t, t.type, t.pendingProps, n);
              case 17:
                return (
                  (r = t.type),
                  (a = t.pendingProps),
                  (a = t.elementType === r ? a : tW(r, a)),
                  null !== e &&
                    ((e.alternate = null),
                    (t.alternate = null),
                    (t.flags |= 2)),
                  (t.tag = 1),
                  ti(r) ? ((e = !0), tc(t)) : (e = !1),
                  tJ(t, n),
                  nl(t, r, a),
                  no(t, r, a, n),
                  r9(null, t, r, !0, e, n)
                );
              case 19:
                return as(e, t, n);
              case 22:
                return r5(e, t, n);
            }
            throw Error(f(156, t.tag));
          }),
          (o.attemptContinuousHydration = function (e) {
            13 === e.tag && (lf(e, 134217728, ls()), lG(e, 134217728));
          }),
          (o.attemptHydrationAtCurrentPriority = function (e) {
            if (13 === e.tag) {
              var t = ls(),
                n = lc(e);
              lf(e, n, t), lG(e, n);
            }
          }),
          (o.attemptSynchronousHydration = function (e) {
            switch (e.tag) {
              case 3:
                var t = e.stateNode;
                if (t.current.memoizedState.isDehydrated) {
                  var n = tm(t.pendingLanes);
                  0 !== n &&
                    (tS(t, 1 | n), lp(t, tM()), 0 == (6 & aX) && (a7(), tj()));
                }
                break;
              case 13:
                var r = ls();
                lb(function () {
                  return lf(e, 1, r);
                }),
                  lG(e, 1);
            }
          }),
          (o.batchedUpdates = function (e, t) {
            var n = aX;
            aX |= 1;
            try {
              return e(t);
            } finally {
              0 === (aX = n) && (a7(), tA && tj());
            }
          }),
          (o.createComponentSelector = function (e) {
            return { $$typeof: aO, value: e };
          }),
          (o.createContainer = function (e, t, n, r, a, l, i) {
            return lQ(e, t, !1, null, n, r, a, l, i);
          }),
          (o.createHasPseudoClassSelector = function (e) {
            return { $$typeof: aN, value: e };
          }),
          (o.createHydrationContainer = function (e, t, n, r, a, l, i, o, u) {
            return (
              ((e = lQ(n, r, !0, e, a, l, i, o, u)).context = lX(null)),
              (n = e.current),
              ((l = t5((r = ls()), (a = lc(n)))).callback =
                null != t ? t : null),
              t6(n, l),
              (e.current.lanes = a),
              tw(e, a, r),
              lp(e, r),
              e
            );
          }),
          (o.createPortal = function (e, t, n) {
            var r =
              3 < arguments.length && void 0 !== arguments[3]
                ? arguments[3]
                : null;
            return {
              $$typeof: h,
              key: null == r ? null : "" + r,
              children: e,
              containerInfo: t,
              implementation: n,
            };
          }),
          (o.createRoleSelector = function (e) {
            return { $$typeof: aI, value: e };
          }),
          (o.createTestNameSelector = function (e) {
            return { $$typeof: aL, value: e };
          }),
          (o.createTextSelector = function (e) {
            return { $$typeof: aD, value: e };
          }),
          (o.deferredUpdates = function (e) {
            var t = t_,
              n = aQ.transition;
            try {
              return (aQ.transition = null), (t_ = 16), e();
            } finally {
              (t_ = t), (aQ.transition = n);
            }
          }),
          (o.discreteUpdates = function (e, t, n, r, a) {
            var l = t_,
              i = aQ.transition;
            try {
              return (aQ.transition = null), (t_ = 1), e(t, n, r, a);
            } finally {
              (t_ = l), (aQ.transition = i), 0 === aX && a7();
            }
          }),
          (o.findAllNodes = aV),
          (o.findBoundingRects = function (e, t) {
            if (!el) throw Error(f(363));
            (t = aV(e, t)), (e = []);
            for (var n = 0; n < t.length; n++) e.push(eo(t[n]));
            for (t = e.length - 1; 0 < t; t--) {
              n = e[t];
              for (
                var r = n.x,
                  a = r + n.width,
                  l = n.y,
                  i = l + n.height,
                  o = t - 1;
                0 <= o;
                o--
              )
                if (t !== o) {
                  var u = e[o],
                    s = u.x,
                    c = s + u.width,
                    d = u.y,
                    p = d + u.height;
                  if (r >= s && l >= d && a <= c && i <= p) {
                    e.splice(t, 1);
                    break;
                  }
                  if (r !== s || n.width !== u.width || p < l || d > i) {
                    if (!(l !== d || n.height !== u.height || c < r || s > a)) {
                      s > r && ((u.width += s - r), (u.x = r)),
                        c < a && (u.width = a - s),
                        e.splice(t, 1);
                      break;
                    }
                  } else {
                    d > l && ((u.height += d - l), (u.y = l)),
                      p < i && (u.height = i - d),
                      e.splice(t, 1);
                    break;
                  }
                }
            }
            return e;
          }),
          (o.findHostInstance = lq),
          (o.findHostInstanceWithNoPortals = function (e) {
            return null ===
              (e =
                null !== (e = R(e))
                  ? (function e(t) {
                      if (5 === t.tag || 6 === t.tag) return t;
                      for (t = t.child; null !== t; ) {
                        if (4 !== t.tag) {
                          var n = e(t);
                          if (null !== n) return n;
                        }
                        t = t.sibling;
                      }
                      return null;
                    })(e)
                  : null)
              ? null
              : e.stateNode;
          }),
          (o.findHostInstanceWithWarning = function (e) {
            return lq(e);
          }),
          (o.flushControlled = function (e) {
            var t = aX;
            aX |= 1;
            var n = aQ.transition,
              r = t_;
            try {
              (aQ.transition = null), (t_ = 1), e();
            } finally {
              (t_ = r), (aQ.transition = n), 0 === (aX = t) && (a7(), tj());
            }
          }),
          (o.flushPassiveEffects = lM),
          (o.flushSync = lb),
          (o.focusWithin = function (e, t) {
            if (!el) throw Error(f(363));
            for (
              t = Array.from((t = aj((e = aA(e)), t))), e = 0;
              e < t.length;

            ) {
              var n = t[e++];
              if (!es(n)) {
                if (5 === n.tag && ef(n.stateNode)) return !0;
                for (n = n.child; null !== n; ) t.push(n), (n = n.sibling);
              }
            }
            return !1;
          }),
          (o.getCurrentUpdatePriority = function () {
            return t_;
          }),
          (o.getFindAllNodesFailureDescription = function (e, t) {
            if (!el) throw Error(f(363));
            var n = 0,
              r = [];
            e = [aA(e), 0];
            for (var a = 0; a < e.length; ) {
              var l = e[a++],
                i = e[a++],
                o = t[i];
              if (
                (5 !== l.tag || !es(l)) &&
                (aU(l, o) && (r.push(aB(o)), ++i > n && (n = i)), i < t.length)
              )
                for (l = l.child; null !== l; ) e.push(l, i), (l = l.sibling);
            }
            if (n < t.length) {
              for (e = []; n < t.length; n++) e.push(aB(t[n]));
              return (
                "findAllNodes was able to match part of the selector:\n  " +
                r.join(" > ") +
                "\n\nNo matching component was found for:\n  " +
                e.join(" > ")
              );
            }
            return null;
          }),
          (o.getPublicRootInstance = function (e) {
            return (e = e.current).child
              ? 5 === e.child.tag
                ? L(e.child.stateNode)
                : e.child.stateNode
              : null;
          }),
          (o.injectIntoDevTools = function (e) {
            if (
              ((e = {
                bundleType: e.bundleType,
                version: e.version,
                rendererPackageName: e.rendererPackageName,
                rendererConfig: e.rendererConfig,
                overrideHookState: null,
                overrideHookStateDeletePath: null,
                overrideHookStateRenamePath: null,
                overrideProps: null,
                overridePropsDeletePath: null,
                overridePropsRenamePath: null,
                setErrorHandler: null,
                setSuspenseHandler: null,
                scheduleUpdate: null,
                currentDispatcherRef: d.ReactCurrentDispatcher,
                findHostInstanceByFiber: lZ,
                findFiberByHostInstance: e.findFiberByHostInstance || lK,
                findHostInstancesForRefresh: null,
                scheduleRefresh: null,
                scheduleRoot: null,
                setRefreshHandler: null,
                getCurrentFiber: null,
                reconcilerVersion: "18.0.0-fc46dba67-20220329",
              }),
              "undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)
            )
              e = !1;
            else {
              var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
              if (t.isDisabled || !t.supportsFiber) e = !0;
              else {
                try {
                  (tI = t.inject(e)), (tL = t);
                } catch (e) {}
                e = !!t.checkDCE;
              }
            }
            return e;
          }),
          (o.isAlreadyRendering = function () {
            return !1;
          }),
          (o.observeVisibleRects = function (e, t, n, r) {
            if (!el) throw Error(f(363));
            var a = ed((e = aV(e, t)), n, r).disconnect;
            return {
              disconnect: function () {
                a();
              },
            };
          }),
          (o.registerMutableSourceForHydration = function (e, t) {
            var n = t._getVersion;
            (n = n(t._source)),
              null == e.mutableSourceEagerHydrationData
                ? (e.mutableSourceEagerHydrationData = [t, n])
                : e.mutableSourceEagerHydrationData.push(t, n);
          }),
          (o.runWithPriority = function (e, t) {
            var n = t_;
            try {
              return (t_ = e), t();
            } finally {
              t_ = n;
            }
          }),
          (o.shouldError = function () {
            return null;
          }),
          (o.shouldSuspend = function () {
            return !1;
          }),
          (o.updateContainer = function (e, t, n, r) {
            var a = t.current,
              l = ls(),
              i = lc(a);
            return (
              (n = lX(n)),
              null === t.context ? (t.context = n) : (t.pendingContext = n),
              ((t = t5(l, i)).payload = { element: e }),
              null !== (r = void 0 === r ? null : r) && (t.callback = r),
              t6(a, t),
              null !== (e = lf(a, i, l)) && t8(e, a, i),
              i
            );
          }),
          o
        );
      };
    },
    58573: function (e, t, n) {
      "use strict";
      e.exports = n(31445);
    },
    84640: function (e, t, n) {
      "use strict";
      e.exports = n(53545);
    },
    82837: function (e, t) {
      "use strict";
      /**
       * @license React
       * scheduler.production.min.js
       *
       * Copyright (c) Facebook, Inc. and its affiliates.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */ function n(e, t) {
        var n = e.length;
        for (e.push(t); 0 < n; ) {
          var r = (n - 1) >>> 1,
            a = e[r];
          if (0 < l(a, t)) (e[r] = t), (e[n] = a), (n = r);
          else break;
        }
      }
      function r(e) {
        return 0 === e.length ? null : e[0];
      }
      function a(e) {
        if (0 === e.length) return null;
        var t = e[0],
          n = e.pop();
        if (n !== t) {
          e[0] = n;
          for (var r = 0, a = e.length, i = a >>> 1; r < i; ) {
            var o = 2 * (r + 1) - 1,
              u = e[o],
              s = o + 1,
              c = e[s];
            if (0 > l(u, n))
              s < a && 0 > l(c, u)
                ? ((e[r] = c), (e[s] = n), (r = s))
                : ((e[r] = u), (e[o] = n), (r = o));
            else if (s < a && 0 > l(c, n)) (e[r] = c), (e[s] = n), (r = s);
            else break;
          }
        }
        return t;
      }
      function l(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      ) {
        var i,
          o = performance;
        t.unstable_now = function () {
          return o.now();
        };
      } else {
        var u = Date,
          s = u.now();
        t.unstable_now = function () {
          return u.now() - s;
        };
      }
      var c = [],
        f = [],
        d = 1,
        p = null,
        h = 3,
        v = !1,
        g = !1,
        m = !1,
        y = "function" == typeof setTimeout ? setTimeout : null,
        b = "function" == typeof clearTimeout ? clearTimeout : null,
        x = "undefined" != typeof setImmediate ? setImmediate : null;
      function w(e) {
        for (var t = r(f); null !== t; ) {
          if (null === t.callback) a(f);
          else if (t.startTime <= e)
            a(f), (t.sortIndex = t.expirationTime), n(c, t);
          else break;
          t = r(f);
        }
      }
      function S(e) {
        if (((m = !1), w(e), !g)) {
          if (null !== r(c)) (g = !0), N(_);
          else {
            var t = r(f);
            null !== t && I(S, t.startTime - e);
          }
        }
      }
      function _(e, n) {
        (g = !1), m && ((m = !1), b(C), (C = -1)), (v = !0);
        var l = h;
        try {
          for (
            w(n), p = r(c);
            null !== p && (!(p.expirationTime > n) || (e && !M()));

          ) {
            var i = p.callback;
            if ("function" == typeof i) {
              (p.callback = null), (h = p.priorityLevel);
              var o = i(p.expirationTime <= n);
              (n = t.unstable_now()),
                "function" == typeof o ? (p.callback = o) : p === r(c) && a(c),
                w(n);
            } else a(c);
            p = r(c);
          }
          if (null !== p) var u = !0;
          else {
            var s = r(f);
            null !== s && I(S, s.startTime - n), (u = !1);
          }
          return u;
        } finally {
          (p = null), (h = l), (v = !1);
        }
      }
      "undefined" != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var k = !1,
        P = null,
        C = -1,
        E = 5,
        T = -1;
      function M() {
        return !(t.unstable_now() - T < E);
      }
      function z() {
        if (null !== P) {
          var e = t.unstable_now();
          T = e;
          var n = !0;
          try {
            n = P(!0, e);
          } finally {
            n ? i() : ((k = !1), (P = null));
          }
        } else k = !1;
      }
      if ("function" == typeof x)
        i = function () {
          x(z);
        };
      else if ("undefined" != typeof MessageChannel) {
        var R = new MessageChannel(),
          O = R.port2;
        (R.port1.onmessage = z),
          (i = function () {
            O.postMessage(null);
          });
      } else
        i = function () {
          y(z, 0);
        };
      function N(e) {
        (P = e), k || ((k = !0), i());
      }
      function I(e, n) {
        C = y(function () {
          e(t.unstable_now());
        }, n);
      }
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          g || v || ((g = !0), N(_));
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (E = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return h;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return r(c);
        }),
        (t.unstable_next = function (e) {
          switch (h) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = h;
          }
          var n = h;
          h = t;
          try {
            return e();
          } finally {
            h = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (e, t) {
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
          var n = h;
          h = e;
          try {
            return t();
          } finally {
            h = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, a, l) {
          var i = t.unstable_now();
          switch (
            ((l =
              "object" == typeof l &&
              null !== l &&
              "number" == typeof (l = l.delay) &&
              0 < l
                ? i + l
                : i),
            e)
          ) {
            case 1:
              var o = -1;
              break;
            case 2:
              o = 250;
              break;
            case 5:
              o = 1073741823;
              break;
            case 4:
              o = 1e4;
              break;
            default:
              o = 5e3;
          }
          return (
            (o = l + o),
            (e = {
              id: d++,
              callback: a,
              priorityLevel: e,
              startTime: l,
              expirationTime: o,
              sortIndex: -1,
            }),
            l > i
              ? ((e.sortIndex = l),
                n(f, e),
                null === r(c) &&
                  e === r(f) &&
                  (m ? (b(C), (C = -1)) : (m = !0), I(S, l - i)))
              : ((e.sortIndex = o), n(c, e), g || v || ((g = !0), N(_))),
            e
          );
        }),
        (t.unstable_shouldYield = M),
        (t.unstable_wrapCallback = function (e) {
          var t = h;
          return function () {
            var n = h;
            h = t;
            try {
              return e.apply(this, arguments);
            } finally {
              h = n;
            }
          };
        });
    },
    31321: function (e, t, n) {
      "use strict";
      e.exports = n(82837);
    },
    48963: function (e, t, n) {
      "use strict";
      n.d(t, {
        JU: function () {
          return L;
        },
        RI: function () {
          return j;
        },
        ZQ: function () {
          return D;
        },
      });
      var r = n(77486),
        a = n(96682);
      let l = (e, t = !1) => {
          let n = t ? e.width * t : e.width,
            l = t ? e.height * t : e.height;
          return (0, a.useMemo)(() => new r.Vector2(n, l), [n, l]);
        },
        i = (e, t, n) => {
          let l = (0, a.useMemo)(() => new r.Mesh(t, n), [t, n]);
          return (
            (0, a.useEffect)(() => {
              e.add(l);
            }, [e, l]),
            (0, a.useEffect)(
              () => () => {
                e.remove(l), t.dispose(), n.dispose();
              },
              [e, t, n, l]
            ),
            l
          );
        },
        o = (e, t, n) => {
          e.uniforms && e.uniforms[t] && null != n
            ? (e.uniforms[t].value = n)
            : console.error(
                `Uniform key "${String(
                  t
                )}" does not exist in the material. or "${String(
                  t
                )}" is null | undefined`
              );
        },
        u = (e, t) => {
          let [n, r] = [((e / t) * t) / 2, t / 2];
          return { width: n, height: r, near: -1e3, far: 1e3 };
        },
        s = (e) => {
          let t = l(e),
            { width: n, height: i, near: o, far: s } = u(t.x, t.y);
          return (0, a.useMemo)(
            () => new r.OrthographicCamera(-n, n, i, -i, o, s),
            [n, i, o, s]
          );
        },
        c = () => {
          let e = (0, a.useRef)(new r.Vector2(0, 0)),
            t = (0, a.useRef)(new r.Vector2(0, 0)),
            n = (0, a.useRef)(0),
            l = (0, a.useRef)(new r.Vector2(0, 0)),
            i = (0, a.useRef)(!1);
          return (0, a.useCallback)((r) => {
            let a = performance.now(),
              o = r.clone();
            0 === n.current && ((n.current = a), (e.current = o));
            let u = Math.max(1, a - n.current);
            (n.current = a), l.current.copy(o).sub(e.current).divideScalar(u);
            let s = l.current.length() > 0,
              c = i.current ? e.current.clone() : o;
            return (
              !i.current && s && (i.current = !0),
              (e.current = o),
              {
                currentPointer: o,
                prevPointer: c,
                diffPointer: t.current.subVectors(o, c),
                velocity: l.current,
                isVelocityUpdate: s,
              }
            );
          }, []);
        },
        f = (e) => {
          let t = (0, a.useRef)(
              Object.values(e).some((e) => "function" == typeof e)
                ? e
                : structuredClone(e)
            ),
            n = (0, a.useCallback)((e) => {
              for (let n in e)
                n in t.current && void 0 !== e[n] && null !== e[n]
                  ? (t.current[n] = e[n])
                  : console.error(
                      `"${String(
                        n
                      )}" does not exist in the params. or "${String(
                        n
                      )}" is null | undefined`
                    );
            }, []);
          return [t.current, n];
        },
        d = {
          minFilter: r.LinearFilter,
          magFilter: r.LinearFilter,
          type: r.HalfFloatType,
          stencilBuffer: !1,
        },
        p = ({
          scene: e,
          camera: t,
          size: n,
          dpr: i = !1,
          isSizeUpdate: o = !1,
          samples: u = 0,
          depthBuffer: s = !1,
          depthTexture: c = !1,
        }) => {
          let f = (0, a.useRef)(),
            p = l(n, i);
          (f.current = (0, a.useMemo)(() => {
            let e = new r.WebGLRenderTarget(p.x, p.y, {
              ...d,
              samples: u,
              depthBuffer: s,
            });
            return (
              c && (e.depthTexture = new r.DepthTexture(p.x, p.y, r.FloatType)),
              e
            );
          }, [])),
            (0, a.useLayoutEffect)(() => {
              var e;
              o && (null == (e = f.current) || e.setSize(p.x, p.y));
            }, [p, o]),
            (0, a.useEffect)(() => {
              let e = f.current;
              return () => {
                null == e || e.dispose();
              };
            }, []);
          let h = (0, a.useCallback)(
            (n, r) => {
              let a = f.current;
              return (
                n.setRenderTarget(a),
                r && r({ read: a.texture }),
                n.clear(),
                n.render(e, t),
                n.setRenderTarget(null),
                n.clear(),
                a.texture
              );
            },
            [e, t]
          );
          return [f.current, h];
        },
        h = ({
          scene: e,
          camera: t,
          size: n,
          dpr: i = !1,
          isSizeUpdate: o = !1,
          samples: u = 0,
          depthBuffer: s = !1,
          depthTexture: c = !1,
        }) => {
          let f = (0, a.useRef)({
              read: null,
              write: null,
              swap: function () {
                let e = this.read;
                (this.read = this.write), (this.write = e);
              },
            }),
            p = l(n, i),
            h = (0, a.useMemo)(() => {
              let e = new r.WebGLRenderTarget(p.x, p.y, {
                  ...d,
                  samples: u,
                  depthBuffer: s,
                }),
                t = new r.WebGLRenderTarget(p.x, p.y, {
                  ...d,
                  samples: u,
                  depthBuffer: s,
                });
              return (
                c &&
                  ((e.depthTexture = new r.DepthTexture(p.x, p.y, r.FloatType)),
                  (t.depthTexture = new r.DepthTexture(p.x, p.y, r.FloatType))),
                { read: e, write: t }
              );
            }, []);
          (f.current.read = h.read),
            (f.current.write = h.write),
            (0, a.useLayoutEffect)(() => {
              var e, t;
              o &&
                (null == (e = f.current.read) || e.setSize(p.x, p.y),
                null == (t = f.current.write) || t.setSize(p.x, p.y));
            }, [p, o]),
            (0, a.useEffect)(() => {
              let e = f.current;
              return () => {
                var t, n;
                null == (t = e.read) || t.dispose(),
                  null == (n = e.write) || n.dispose();
              };
            }, []);
          let v = (0, a.useCallback)(
            (n, r) => {
              var a;
              let l = f.current;
              return (
                n.setRenderTarget(l.write),
                r && r({ read: l.read.texture, write: l.write.texture }),
                n.clear(),
                n.render(e, t),
                l.swap(),
                n.setRenderTarget(null),
                n.clear(),
                null == (a = l.read) ? void 0 : a.texture
              );
            },
            [e, t]
          );
          return [{ read: f.current.read, write: f.current.write }, v];
        };
      new r.Texture(),
        new r.Color(16777215),
        new r.Texture(),
        new r.Color(16777215),
        new r.Color(0),
        new r.Texture(),
        new r.Texture(),
        new r.Vector3(0.5, 0.5, 0.5);
      var v = `varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform vec2 texelSize;

void main () {
	vUv = uv;
	vL = vUv - vec2(texelSize.x, 0.0);
	vR = vUv + vec2(texelSize.x, 0.0);
	vT = vUv + vec2(0.0, texelSize.y);
	vB = vUv - vec2(0.0, texelSize.y);
	gl_Position = vec4(position, 1.0);
}`,
        g = `precision highp float;

void main(){
	gl_FragColor = vec4(0.0);
}`;
      let m = () =>
        (0, a.useMemo)(
          () =>
            new r.ShaderMaterial({
              vertexShader: v,
              fragmentShader: g,
              depthTest: !1,
              depthWrite: !1,
            }),
          []
        );
      var y = `precision highp float;

varying vec2 vUv;
uniform sampler2D uVelocity;
uniform sampler2D uSource;
uniform vec2 texelSize;
uniform float dt;
uniform float dissipation;

void main () {
	vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
	gl_FragColor = dissipation * texture2D(uSource, coord);
	gl_FragColor.a = 1.0;
}`;
      let b = () =>
        (0, a.useMemo)(
          () =>
            new r.ShaderMaterial({
              uniforms: {
                uVelocity: { value: new r.Texture() },
                uSource: { value: new r.Texture() },
                texelSize: { value: new r.Vector2() },
                dt: { value: 0 },
                dissipation: { value: 0 },
              },
              vertexShader: v,
              fragmentShader: y,
            }),
          []
        );
      var x = `precision highp float;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uVelocity;

vec2 sampleVelocity (in vec2 uv) {
	vec2 multiplier = vec2(1.0, 1.0);
	if (uv.x < 0.0) { uv.x = 0.0; multiplier.x = -1.0; }
	if (uv.x > 1.0) { uv.x = 1.0; multiplier.x = -1.0; }
	if (uv.y < 0.0) { uv.y = 0.0; multiplier.y = -1.0; }
	if (uv.y > 1.0) { uv.y = 1.0; multiplier.y = -1.0; }
	return multiplier * texture2D(uVelocity, uv).xy;
}

void main () {
	float L = sampleVelocity(vL).x;
	float R = sampleVelocity(vR).x;
	float T = sampleVelocity(vT).y;
	float B = sampleVelocity(vB).y;
	float div = 0.5 * (R - L + T - B);
	gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
}`;
      let w = () =>
        (0, a.useMemo)(
          () =>
            new r.ShaderMaterial({
              uniforms: {
                uVelocity: { value: null },
                texelSize: { value: new r.Vector2() },
              },
              vertexShader: v,
              fragmentShader: x,
            }),
          []
        );
      var S = `precision highp float;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uDivergence;

vec2 boundary (in vec2 uv) {
	uv = min(max(uv, 0.0), 1.0);
	return uv;
}

void main () {
	float L = texture2D(uPressure, boundary(vL)).x;
	float R = texture2D(uPressure, boundary(vR)).x;
	float T = texture2D(uPressure, boundary(vT)).x;
	float B = texture2D(uPressure, boundary(vB)).x;
	float C = texture2D(uPressure, vUv).x;
	float divergence = texture2D(uDivergence, vUv).x;
	float pressure = (L + R + B + T - divergence) * 0.25;
	gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
}`;
      let _ = () =>
        (0, a.useMemo)(
          () =>
            new r.ShaderMaterial({
              uniforms: {
                uPressure: { value: null },
                uDivergence: { value: null },
                texelSize: { value: new r.Vector2() },
              },
              vertexShader: v,
              fragmentShader: S,
            }),
          []
        );
      var k = `precision highp float;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uVelocity;

void main () {
	float L = texture2D(uVelocity, vL).y;
	float R = texture2D(uVelocity, vR).y;
	float T = texture2D(uVelocity, vT).x;
	float B = texture2D(uVelocity, vB).x;
	float vorticity = R - L - T + B;
	gl_FragColor = vec4(vorticity, 0.0, 0.0, 1.0);
}`;
      let P = () =>
        (0, a.useMemo)(
          () =>
            new r.ShaderMaterial({
              uniforms: {
                uVelocity: { value: null },
                texelSize: { value: new r.Vector2() },
              },
              vertexShader: v,
              fragmentShader: k,
            }),
          []
        );
      var C = `precision highp float;

varying vec2 vUv;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uVelocity;
uniform sampler2D uCurl;
uniform float curl;
uniform float dt;

void main () {
	float T = texture2D(uCurl, vT).x;
	float B = texture2D(uCurl, vB).x;
	float C = texture2D(uCurl, vUv).x;
	vec2 force = vec2(abs(T) - abs(B), 0.0);
	force *= 1.0 / length(force + 0.00001) * curl * C;
	vec2 vel = texture2D(uVelocity, vUv).xy;
	gl_FragColor = vec4(vel + force * dt, 0.0, 1.0);
}`;
      let E = () =>
        (0, a.useMemo)(
          () =>
            new r.ShaderMaterial({
              uniforms: {
                uVelocity: { value: null },
                uCurl: { value: null },
                curl: { value: 0 },
                dt: { value: 0 },
                texelSize: { value: new r.Vector2() },
              },
              vertexShader: v,
              fragmentShader: C,
            }),
          []
        );
      var T = `precision highp float;

varying vec2 vUv;
uniform sampler2D uTexture;
uniform float value;

void main () {
	gl_FragColor = value * texture2D(uTexture, vUv);
}`;
      let M = () =>
        (0, a.useMemo)(
          () =>
            new r.ShaderMaterial({
              uniforms: {
                uTexture: { value: new r.Texture() },
                value: { value: 0 },
                texelSize: { value: new r.Vector2() },
              },
              vertexShader: v,
              fragmentShader: T,
            }),
          []
        );
      var z = `precision highp float;

varying vec2 vUv;
varying vec2 vL;
varying vec2 vR;
varying vec2 vT;
varying vec2 vB;
uniform sampler2D uPressure;
uniform sampler2D uVelocity;

vec2 boundary (in vec2 uv) {
	uv = min(max(uv, 0.0), 1.0);
	return uv;
}

void main () {
	float L = texture2D(uPressure, boundary(vL)).x;
	float R = texture2D(uPressure, boundary(vR)).x;
	float T = texture2D(uPressure, boundary(vT)).x;
	float B = texture2D(uPressure, boundary(vB)).x;
	vec2 velocity = texture2D(uVelocity, vUv).xy;
	velocity.xy -= vec2(R - L, T - B);
	gl_FragColor = vec4(velocity, 0.0, 1.0);
}`;
      let R = () =>
        (0, a.useMemo)(
          () =>
            new r.ShaderMaterial({
              uniforms: {
                uPressure: { value: new r.Texture() },
                uVelocity: { value: new r.Texture() },
                texelSize: { value: new r.Vector2() },
              },
              vertexShader: v,
              fragmentShader: z,
            }),
          []
        );
      var O = `precision highp float;

varying vec2 vUv;
uniform sampler2D uTarget;
uniform float aspectRatio;
uniform vec3 color;
uniform vec2 point;
uniform float radius;

void main () {
	vec2 nPoint = (point + vec2(1.0)) * 0.5;
	vec2 p = vUv - nPoint.xy;
	p.x *= aspectRatio;
	vec3 splat = exp(-dot(p, p) / radius) * color;
	vec3 base = texture2D(uTarget, vUv).xyz;
	gl_FragColor = vec4(base + splat, 1.0);
}`;
      let N = () =>
          (0, a.useMemo)(
            () =>
              new r.ShaderMaterial({
                uniforms: {
                  uTarget: { value: new r.Texture() },
                  aspectRatio: { value: 0 },
                  color: { value: new r.Vector3() },
                  point: { value: new r.Vector2() },
                  radius: { value: 0 },
                  texelSize: { value: new r.Vector2() },
                },
                vertexShader: v,
                fragmentShader: O,
              }),
            []
          ),
        I = ({ scene: e, size: t, dpr: n }) => {
          let u = (0, a.useMemo)(() => new r.PlaneGeometry(2, 2), []),
            s = m(),
            c = s.clone(),
            f = P(),
            d = E(),
            p = b(),
            h = w(),
            v = _(),
            g = M(),
            y = R(),
            x = N(),
            S = (0, a.useMemo)(
              () => ({
                vorticityMaterial: d,
                curlMaterial: f,
                advectionMaterial: p,
                divergenceMaterial: h,
                pressureMaterial: v,
                clearMaterial: g,
                gradientSubtractMaterial: y,
                splatMaterial: x,
              }),
              [d, f, p, h, v, g, y, x]
            ),
            k = l(t, n);
          (0, a.useEffect)(() => {
            for (let e of (o(S.splatMaterial, "aspectRatio", k.x / k.y),
            Object.values(S)))
              o(e, "texelSize", new r.Vector2(1 / k.x, 1 / k.y));
          }, [k, S]);
          let C = i(e, u, s);
          return (
            (0, a.useEffect)(() => {
              s.dispose(), (C.material = c);
            }, [s, C, c]),
            (0, a.useEffect)(
              () => () => {
                for (let e of Object.values(S)) e.dispose();
              },
              [S]
            ),
            [
              S,
              (0, a.useCallback)(
                (e) => {
                  (C.material = e), (C.material.needsUpdate = !0);
                },
                [C]
              ),
            ]
          );
        },
        L = {
          density_dissipation: 0.98,
          velocity_dissipation: 0.99,
          velocity_acceleration: 10,
          pressure_dissipation: 0.9,
          pressure_iterations: 20,
          curl_strength: 35,
          splat_radius: 0.002,
          fluid_color: new r.Vector3(1, 1, 1),
        },
        D = ({ size: e, dpr: t, samples: n = 0 }) => {
          let l = (0, a.useMemo)(() => new r.Scene(), []),
            [i, u] = I({ scene: l, size: e, dpr: t }),
            d = s(e),
            v = c(),
            g = (0, a.useMemo)(
              () => ({ scene: l, camera: d, size: e, samples: n }),
              [l, d, e, n]
            ),
            [m, y] = h(g),
            [b, x] = h(g),
            [w, S] = p(g),
            [_, k] = p(g),
            [P, C] = h(g),
            E = (0, a.useRef)(0),
            T = (0, a.useRef)(new r.Vector2(0, 0)),
            M = (0, a.useRef)(new r.Vector3(0, 0, 0)),
            [z, R] = f(L);
          return [
            (0, a.useCallback)(
              (e, t) => {
                let n;
                let { gl: r, pointer: a, clock: l, size: s } = e;
                t && R(t), 0 === E.current && (E.current = l.getElapsedTime());
                let c = Math.min((l.getElapsedTime() - E.current) / 3, 0.02);
                E.current = l.getElapsedTime();
                let f = y(r, ({ read: e }) => {
                    u(i.advectionMaterial),
                      o(i.advectionMaterial, "uVelocity", e),
                      o(i.advectionMaterial, "uSource", e),
                      o(i.advectionMaterial, "dt", c),
                      o(
                        i.advectionMaterial,
                        "dissipation",
                        z.velocity_dissipation
                      );
                  }),
                  d = x(r, ({ read: e }) => {
                    u(i.advectionMaterial),
                      o(i.advectionMaterial, "uVelocity", f),
                      o(i.advectionMaterial, "uSource", e),
                      o(
                        i.advectionMaterial,
                        "dissipation",
                        z.density_dissipation
                      );
                  }),
                  {
                    currentPointer: p,
                    diffPointer: h,
                    isVelocityUpdate: g,
                    velocity: m,
                  } = v(a);
                g &&
                  (y(r, ({ read: e }) => {
                    u(i.splatMaterial),
                      o(i.splatMaterial, "uTarget", e),
                      o(i.splatMaterial, "point", p);
                    let t = h.multiply(
                      T.current
                        .set(s.width, s.height)
                        .multiplyScalar(z.velocity_acceleration)
                    );
                    o(i.splatMaterial, "color", M.current.set(t.x, t.y, 1)),
                      o(i.splatMaterial, "radius", z.splat_radius);
                  }),
                  x(r, ({ read: e }) => {
                    u(i.splatMaterial), o(i.splatMaterial, "uTarget", e);
                    let t =
                      "function" == typeof z.fluid_color
                        ? z.fluid_color(m)
                        : z.fluid_color;
                    o(i.splatMaterial, "color", t);
                  }));
                let b = S(r, () => {
                  u(i.curlMaterial), o(i.curlMaterial, "uVelocity", f);
                });
                y(r, ({ read: e }) => {
                  u(i.vorticityMaterial),
                    o(i.vorticityMaterial, "uVelocity", e),
                    o(i.vorticityMaterial, "uCurl", b),
                    o(i.vorticityMaterial, "curl", z.curl_strength),
                    o(i.vorticityMaterial, "dt", c);
                });
                let w = k(r, () => {
                  u(i.divergenceMaterial),
                    o(i.divergenceMaterial, "uVelocity", f);
                });
                C(r, ({ read: e }) => {
                  u(i.clearMaterial),
                    o(i.clearMaterial, "uTexture", e),
                    o(i.clearMaterial, "value", z.pressure_dissipation);
                }),
                  u(i.pressureMaterial),
                  o(i.pressureMaterial, "uDivergence", w);
                for (let e = 0; e < z.pressure_iterations; e++)
                  n = C(r, ({ read: e }) => {
                    o(i.pressureMaterial, "uPressure", e);
                  });
                return (
                  y(r, ({ read: e }) => {
                    u(i.gradientSubtractMaterial),
                      o(i.gradientSubtractMaterial, "uPressure", n),
                      o(i.gradientSubtractMaterial, "uVelocity", e);
                  }),
                  d
                );
              },
              [i, u, S, x, k, v, C, y, R, z]
            ),
            R,
            {
              scene: l,
              materials: i,
              camera: d,
              renderTarget: {
                velocity: m,
                density: b,
                curl: w,
                divergence: _,
                pressure: P,
              },
            },
          ];
        };
      var F = `varying vec2 vUv;

void main() {
	vUv = uv;
	gl_Position = vec4(position, 1.0);
}`,
        A = `precision highp float;

varying vec2 vUv;
uniform vec2 uResolution;
uniform vec2 uTextureResolution;
uniform sampler2D uTexture0;
uniform sampler2D uTexture1;
uniform sampler2D uMap;
uniform float mapIntensity;
uniform float edgeIntensity;
uniform float progress;
uniform float dirX;
uniform float dirY;
uniform vec2 epicenter;
uniform float padding;

bool isInPaddingArea(vec2 uv) {
   return uv.x < padding || uv.x > 1.0 - padding || uv.y < padding || uv.y > 1.0 - padding;
}

void main() {
	vec2 bgRatio=vec2(
		min((uResolution.x/uResolution.y)/(uTextureResolution.x/uTextureResolution.y),1.),
		min((uResolution.y/uResolution.x)/(uTextureResolution.y/uTextureResolution.x),1.)
	);
	vec2 uv=vec2(
		vUv.x*bgRatio.x+(1.-bgRatio.x)*.5,
		vUv.y*bgRatio.y+(1.-bgRatio.y)*.5
	);

	
	vec2 map = texture2D(uMap, uv).rg;
	vec2 normalizedMap = map * 2.0 - 1.0;

	
	uv = uv * 2.0 - 1.0;
	uv *= map * distance(epicenter, uv) * edgeIntensity + 1.0;
	uv = (uv + 1.0) / 2.0;

	
	if (isInPaddingArea(uv)) {
		gl_FragColor = vec4(0.0, 0.0, 0.0, 0.0);
		return;
	}
	vec2 paddedUV = uv * (1.0 - 2.0 * padding * -1.) + padding * -1.;

	
	vec2 centeredUV = paddedUV - vec2(0.5);

	
	centeredUV *= normalizedMap * map * mapIntensity + 1.0;

	
	float xOffsetTexture0 = 0.5 - dirX * progress;
	float yOffsetTexture0 = 0.5 - dirY * progress;
	vec2 samplePosTexture0 = vec2(xOffsetTexture0, yOffsetTexture0) + centeredUV;

	
	float xOffsetTexture1 = 0.5 + dirX * (1.0 - progress);
	float yOffsetTexture1 = 0.5 + dirY * (1.0 - progress);
	vec2 samplePosTexture1 = vec2(xOffsetTexture1, yOffsetTexture1) + centeredUV;

	vec4 color0 = texture2D(uTexture0, samplePosTexture0);
	vec4 color1 = texture2D(uTexture1, samplePosTexture1);

	gl_FragColor = mix(color0, color1, progress);

}`;
      let U = ({ scene: e, size: t, dpr: n }) => {
          let o = (0, a.useMemo)(() => new r.PlaneGeometry(2, 2), []),
            u = (0, a.useMemo)(
              () =>
                new r.ShaderMaterial({
                  uniforms: {
                    uResolution: { value: new r.Vector2() },
                    uTextureResolution: { value: new r.Vector2() },
                    uTexture0: { value: new r.Texture() },
                    uTexture1: { value: new r.Texture() },
                    padding: { value: 0 },
                    uMap: { value: new r.Texture() },
                    edgeIntensity: { value: 0 },
                    mapIntensity: { value: 0 },
                    epicenter: { value: new r.Vector2(0, 0) },
                    progress: { value: 0 },
                    dirX: { value: 0 },
                    dirY: { value: 0 },
                  },
                  vertexShader: F,
                  fragmentShader: A,
                }),
              []
            ),
            s = l(t, n);
          return (
            (0, a.useEffect)(() => {
              u.uniforms.uResolution.value = s.clone();
            }, [s, u]),
            i(e, o, u),
            u
          );
        },
        B = {
          texture0: new r.Texture(),
          texture1: new r.Texture(),
          textureResolution: new r.Vector2(0, 0),
          padding: 0,
          map: new r.Texture(),
          mapIntensity: 0,
          edgeIntensity: 0,
          epicenter: new r.Vector2(0, 0),
          progress: 0,
          dir: new r.Vector2(0, 0),
        },
        j = ({ size: e, dpr: t, samples: n = 0 }) => {
          let l = (0, a.useMemo)(() => new r.Scene(), []),
            i = U({ scene: l, size: e, dpr: t }),
            u = s(e),
            [c, d] = p({
              scene: l,
              camera: u,
              dpr: t,
              size: e,
              samples: n,
              isSizeUpdate: !0,
            }),
            [h, v] = f(B);
          return [
            (0, a.useCallback)(
              (e, t) => {
                let { gl: n } = e;
                return (
                  t && v(t),
                  o(i, "uTexture0", h.texture0),
                  o(i, "uTexture1", h.texture1),
                  o(i, "uTextureResolution", h.textureResolution),
                  o(i, "padding", h.padding),
                  o(i, "uMap", h.map),
                  o(i, "mapIntensity", h.mapIntensity),
                  o(i, "edgeIntensity", h.edgeIntensity),
                  o(i, "epicenter", h.epicenter),
                  o(i, "progress", h.progress),
                  o(i, "dirX", h.dir.x),
                  o(i, "dirY", h.dir.y),
                  d(n)
                );
              },
              [d, i, h, v]
            ),
            v,
            { scene: l, material: i, camera: u, renderTarget: c },
          ];
        };
      new r.Vector2(2, 2),
        new r.Texture(),
        new r.Vector2(0, 0),
        new r.Texture(),
        new r.Vector3(0.5, 0.5, 0.5),
        new r.Vector2(0.1, 0.1),
        new r.Vector2(1, 1),
        new r.Vector2(0, 0),
        new r.Vector3(1, 1, 1),
        new r.Vector2(0, 0),
        new r.Vector2(0, 0),
        new r.Texture(),
        new r.Texture();
    },
  },
]);
