(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4867],
  {
    15081: function (e, t, i) {
      Promise.resolve().then(i.bind(i, 19094));
    },
    19094: function (e, t, i) {
      "use strict";
      i.r(t),
        i.d(t, {
          default: function () {
            return eL;
          },
        });
      var s = i(98153),
        a = i(73918),
        n = i(55819),
        r = i(96682),
        l = i(30874),
        o = i(78974),
        c = i(29290),
        x = i(36957),
        d = i.n(x),
        p = i(10166),
        m = i(72056);
      function h(e, t) {
        switch (t) {
          case "mouse_enter":
            return { ...e, condition: "hover" };
          case "mouse_leave":
            return { ...e, condition: "default" };
          default:
            return { ...e };
        }
      }
      function u(e) {
        let { condition: t = "default" } = e,
          [i, n] = (0, r.useReducer)(h, { condition: "default" });
        return (0, s.jsx)("div", {
          className:
            "  relative w-[40px] h-[40px] ai-sm:w-[32px] ai-sm:h-[32px]  ",
          children: (0, s.jsx)(o.rU, {
            className: " ",
            href: "".concat(p.vc.homeLink, "/signup/ai"),
            target: "_blank",
            children: (0, s.jsxs)("div", {
              className:
                " flex relative self-center items-center top-0 left-0 justify-center  w-[100%] h-[100%]  ",
              onMouseLeave: () => {
                n("mouse_leave");
              },
              onMouseEnter: () => {
                n("mouse_enter");
              },
              children: [
                (0, s.jsx)(o.Ee, {
                  src: (0, c.ji)("arrow.svg"),
                  className: "  w-[100%] h-[100%]  ",
                  style: { opacity: "hover" === i.condition ? 0 : 1 },
                  alt: "",
                }),
                (0, s.jsx)(o.Ee, {
                  src: (0, c.ji)("arrow_hover.svg"),
                  className: (0, a.cx)(" w-[100%] h-[100%]  absolute "),
                  style: { opacity: "hover" === i.condition ? 1 : 0 },
                  alt: "",
                }),
              ],
            }),
          }),
        });
      }
      function f(e) {
        let { children: t, className: i = "" } = e;
        return (
          (() => {
            let e = { proximity: 60, opacity: 0 },
              t = (t) => {
                let i = document.querySelectorAll(".articless");
                for (let s = 0; s < i.length; s += 1) {
                  let a = i[s];
                  if (a instanceof HTMLElement) {
                    let i = a.getBoundingClientRect();
                    t.x > i.left - e.proximity &&
                    (null == t ? void 0 : t.x) <
                      i.left + i.width + e.proximity &&
                    (null == t ? void 0 : t.y) > i.top - e.proximity &&
                    (null == t ? void 0 : t.y) < i.top + i.height + e.proximity
                      ? a.style.setProperty("--active", "1")
                      : a.style.setProperty("--active", e.opacity.toString());
                    let s = [i.left + 0.5 * i.width, i.top + 0.5 * i.height],
                      n =
                        (180 *
                          Math.atan2(
                            (null == t ? void 0 : t.y) || 0 - s[1],
                            (null == t ? void 0 : t.x) || 0 - s[0]
                          )) /
                        Math.PI,
                      r = (n = n < 0 ? n + 360 : n) + 90;
                    a.style.setProperty("--start", r.toString());
                  }
                }
              };
            (0, r.useEffect)(
              () =>
                window.innerWidth > 840
                  ? (document.body.addEventListener("pointermove", t),
                    t({ x: 2, y: 2 }),
                    () => {
                      document.body.removeEventListener("pointermove", t);
                    })
                  : () => {},
              []
            );
          })(),
          (0, s.jsx)("div", {
            className: (0, a.cx)(" ai-dt:cursor-container  ", i),
            style: { zIndex: 3 },
            children: (0, s.jsx)("div", {
              className: (0, a.cx)("ai-dt:articless  "),
              style: { zIndex: 2 },
              children: t,
            }),
          })
        );
      }
      function v(e) {
        let { onClick: t } = e,
          [i, a] = (0, r.useReducer)(h, { condition: "default" });
        return (0, s.jsxs)("div", {
          className: " w-[40px] h-[40px] ml-4 relative cursor-pointer ",
          style: {},
          onMouseLeave: () => {
            a("mouse_leave");
          },
          onMouseEnter: () => {
            a("mouse_enter");
          },
          onClick: () => {
            t();
          },
          children: [
            (0, s.jsx)(o.Ee, {
              className: "w-[100%] h-[100%] ",
              src: (0, c.ji)("shuffle.webp"),
              alt: "",
            }),
            (0, s.jsx)(o.Ee, {
              className: "w-[100%] h-[100%] absolute top-0 left-0 ",
              src: (0, c.ji)("shuffle_hover.webp"),
              style: { opacity: "hover" === i.condition ? 1 : 0 },
              alt: "",
            }),
          ],
        });
      }
      function w(e) {
        let { children: t, className: i } = e;
        return (0, s.jsxs)("div", {
          className: (0, a.cx)(i, "rounded-[32px] relative"),
          style: {},
          children: [
            t,
            (0, s.jsx)("div", {
              className:
                " absolute top-0 left-0  h-[100%] w-[100%] rounded-[32px]  shadow-[0px_0px_20px_0px_#FFFFFF0A,2px_2px_20px_0px_#FFFFFF4D_inset] ",
              style: { pointerEvents: "none" },
            }),
          ],
        });
      }
      function g(e) {
        let t,
          { children: i, className: n = "" } = e,
          l = (0, r.useRef)(null),
          o = (0, r.useRef)(0),
          c = (e) => {
            let t = l.current;
            if (t instanceof HTMLElement) {
              let i = e,
                s = (i = i < 0 ? i + 360 : i) + 90;
              t.style.setProperty("--start", s.toString());
            }
          },
          x = () => {
            (o.current += 1), c(o.current), window.requestAnimationFrame(x);
          };
        return (
          (0, r.useEffect)(
            () => (
              l.current instanceof HTMLElement &&
                (l.current.style.setProperty("--active", "1"),
                l.current.style.setProperty("--border-radius", "353px")),
              (t = window.requestAnimationFrame(x)),
              () => {
                window.cancelAnimationFrame(t);
              }
            ),
            []
          ),
          (0, s.jsx)("div", {
            className: (0, a.cx)("cursor-container", n),
            children: (0, s.jsx)("div", {
              className: "border-effect",
              ref: l,
              children: i,
            }),
          })
        );
      }
      i(90921);
      var j = i(77486),
        b = i(45672),
        y = i(40109),
        N = i(48963);
      let E = (0, i(52109).g)(
        { u_fx: null, u_alpha: 0 },
        "\n         varying vec2 vUv;\n         void main() {\n             vUv = uv;\n             gl_Position = vec4(position, 1.0);\n         }\n     ",
        "\n         precision highp float;\n         varying vec2 vUv;\n         uniform sampler2D u_fx;\n         uniform float u_alpha;\n \n         void main() {\n             vec2 uv = vUv;\n             gl_FragColor = texture2D(u_fx, uv);\n             if(u_alpha > 0.0){\n                 gl_FragColor.a = u_alpha;\n             }\n         }\n     "
      );
      (0, b.e)({ FxMaterial: E });
      let _ = structuredClone(N.JU),
        S = () => {
          let [e] = (0, b.F)(j.TextureLoader, [
              "/__dora__/morpheus/static/images/ai/get-started-bg2.png",
            ]),
            t = r.useRef(),
            { size: i, viewport: a } = (0, b.A)(),
            { dpr: n } = a,
            l = { textureResolution: new j.Vector2(744, 423) },
            [o] = (0, N.RI)({ size: i, dpr: n }),
            [c] = (0, N.ZQ)({ size: i, dpr: n }),
            x = () => ({
              ..._,
              density_dissipation: 0.96,
              velocity_dissipation: 0,
              velocity_acceleration: 0,
              splat_radius: 0.003,
              curl_strength: 0,
              pressure_dissipation: 0,
            });
          return (
            (0, b.C)((i) => {
              let s = c(i, x()),
                a = o(i, {
                  textureResolution: l.textureResolution,
                  texture0: e,
                  map: s,
                  padding: 0,
                  mapIntensity: 1.3,
                  edgeIntensity: 0,
                });
              (t.current.uniforms.u_fx.value = a),
                (t.current.uniforms.u_alpha.value = 0);
            }),
            (0, s.jsxs)("mesh", {
              children: [
                (0, s.jsx)("planeGeometry", { args: [2, 2] }),
                (0, s.jsx)("fxMaterial", { ref: t }, E.key),
              ],
            })
          );
        };
      var I = (e) => {
        let { ow: t, oh: i, width: a, height: n } = e,
          [l, o] = (0, r.useState)(!1),
          x = (0, r.useRef)(!1);
        return (0, s.jsx)("div", {
          className: "relative overflow-hidden",
          style: {
            width: "".concat(t || 148, "px"),
            height: "".concat(i || 41, "px"),
            borderRadius: "".concat(i || 41, "px"),
            transform: "translate3d(0,0,0)",
          },
          onMouseEnter: () => {
            (x.current = !0), o(!0);
          },
          onMouseOut: () => {
            (x.current = !1),
              setTimeout(() => {
                x.current || o(!1);
              }, 2e3);
          },
          onMouseMove: () => {
            x.current = !0;
          },
          children: (0, s.jsx)("div", {
            style: {
              position: "relative",
              width: "".concat(a, "px"),
              height: "".concat(n, "px"),
              transform: "translate("
                .concat(((t || 148) - a) / 2, "px, ")
                .concat(((i || 41) - n) / 2, "px)"),
              backgroundImage: 'url("'.concat(
                (0, c.ji)("get-started-bg2.png"),
                '")'
              ),
              backgroundPosition: "center",
              backgroundSize: "contain",
            },
            children: l && (0, s.jsx)(y.Xz, { children: (0, s.jsx)(S, {}) }),
          }),
        });
      };
      function k(e) {
        let { id: t, children: i, className: n } = e;
        return (0, s.jsx)("div", {
          id: t,
          className: (0, a.cx)(
            n,
            "text-[16px] ai-xs:text-[24px] font-semibold leading-[25px] ai-xs:leading-[28px] text-[#FF7F41]"
          ),
          children: i,
        });
      }
      function C(e) {
        let { children: t, className: i } = e;
        return (0, s.jsx)("div", {
          className: (0, a.cx)(
            i,
            "text-[24px] ai-xs:text-[36px] ai-dt:text-[48px] font-semibold leading-[28px] ai-xs:leading-[43px] ai-dt:leading-[58px]"
          ),
          children: t,
        });
      }
      function F(e) {
        let { children: t, className: i } = e;
        return (0, s.jsx)("div", {
          className: (0, a.cx)(
            i,
            "text-[12px] ai-sm:text-[16px] font-normal text-white/50"
          ),
          children: t,
        });
      }
      function L(e) {
        let { title: t, width: i, height: a, fontSize: n } = e,
          [l, o] = (0, r.useState)("");
        return (
          (0, r.useEffect)(() => {
            let e = new URLSearchParams(window.location.search).get(
              "utm_campaign"
            );
            if (e) {
              let t = "";
              e && (t = "?dora_utm_campaign=".concat(e)), o(t);
            }
          }, []),
          (0, s.jsx)("div", {
            style: {
              width: "".concat(i || 148, "px"),
              height: "".concat(a || 41, "px"),
            },
            children: (0, s.jsx)("a", {
              href: "".concat(p.vc.homeLink, "/signup/ai").concat(l),
              target: "_blank",
              children: (0, s.jsxs)("div", {
                className: "relative overflow-hidden",
                style: {
                  width: "".concat(i || 148, "px"),
                  height: "".concat(a || 41, "px"),
                  borderRadius: "".concat(a || 41, "px"),
                },
                children: [
                  (0, s.jsx)("div", {
                    className: "absolute",
                    style: {
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      zIndex: 0,
                    },
                    children: (0, s.jsx)(I, {
                      ow: i,
                      oh: a,
                      width: 372,
                      height: 212,
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "absolute left-0 top-0 text-center right-0 pointer-event-none",
                    style: { lineHeight: "".concat(a || 41, "px"), zIndex: 10 },
                    children: (0, s.jsx)(g, {
                      children: (0, s.jsxs)("div", {
                        className:
                          "font-poppins flex flex-row items-center justify-center text-center font-medium",
                        style: {
                          width: "".concat(i || 148, "px"),
                          height: "".concat(a || 41, "px"),
                          fontSize: "".concat(n || 16, "px"),
                        },
                        children: [
                          (0, s.jsx)("span", {
                            className: "mr-[8px]",
                            children: t,
                          }),
                          (0, s.jsx)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            width: 25 === n ? 19 : 14,
                            height: 25 === n ? 15 : 11,
                            viewBox: "0 0 14 11",
                            fill: "none",
                            children: (0, s.jsx)("path", {
                              d: "M10.8102 4.80003H1.5C1.31435 4.80003 1.1363 4.87378 1.00503 5.00506C0.87375 5.13633 0.8 5.31438 0.8 5.50003C0.8 5.68569 0.87375 5.86373 1.00503 5.99501C1.1363 6.12628 1.31435 6.20003 1.5 6.20003H10.8102L7.50484 9.50485L7.50483 9.50486C7.3735 9.63619 7.29972 9.81431 7.29972 10C7.29972 10.1858 7.3735 10.3639 7.50483 10.4952C7.63616 10.6265 7.81427 10.7003 8 10.7003C8.18573 10.7003 8.36384 10.6265 8.49517 10.4952L12.9951 5.99528L12.9952 5.99521L12.8538 5.85378L10.8102 4.80003ZM10.8102 4.80003L7.50484 1.49522L7.50483 1.49521C7.3735 1.36388 7.29972 1.18576 7.29972 1.00003C7.29972 0.814309 7.3735 0.63619 7.50483 0.504862C7.63616 0.373535 7.81427 0.299756 8 0.299756C8.18573 0.299756 8.36384 0.373535 8.49517 0.504863L12.9951 5.00478L12.9952 5.00486L10.8102 4.80003Z",
                              fill: "white",
                              stroke: "white",
                              strokeWidth: "0.4",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            }),
          })
        );
      }
      function A(e) {
        let { className: t, placeholder: i, cursor: n } = e,
          [l, o] = (0, r.useState)(!1),
          [x, m] = (0, r.useState)(!1),
          h = (0, r.useRef)(null),
          [u, f] = (0, r.useState)(
            "Abstract white 3d objects & laptops on white plane."
          );
        return (
          (0, r.useEffect)(() => {
            window.innerWidth <= 640 && f("Build a site in the style of...");
          }, []),
          (0, s.jsxs)("div", {
            className: (0, a.cx)(
              t,
              "justify-center items-center px-[8px] rounded-[30px] h-[57px] w-[100%] flex flex-row"
            ),
            style: { background: "rgba(255, 255, 255, 0.20)" },
            children: [
              (0, s.jsx)("div", {
                className: "h-[40px] pl-[8px]",
                children: (0, s.jsx)(d(), {
                  src: (0, c.ji)("input-star.png"),
                  width: 40,
                  height: 40,
                  alt: "",
                }),
              }),
              (0, s.jsxs)("div", {
                className: "flex-auto relative h-[24px]",
                children: [
                  (0, s.jsx)("div", {
                    className: "absolute left-0 top-0 w-[100%] h-[100%]",
                    children: (0, s.jsxs)("div", {
                      className: (0, a.cx)(
                        x ? "hidden" : "",
                        l ? "focused" : "",
                        "h-[24px] w-[100%] font-normal text-[16px] leading-[24px] flex flex-row"
                      ),
                      children: [
                        (0, s.jsx)("span", {
                          style: {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          },
                          className: "placeholder-span opacity-60 h-[24px]",
                          children: i || u,
                        }),
                        (0, s.jsx)("span", {
                          className: (0, a.cx)(
                            l || !1 === n ? "hidden" : "",
                            "input-cursor"
                          ),
                          children: "|",
                        }),
                      ],
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "absolute top-0 left-0 w-[100%]",
                    children: (0, s.jsx)("form", {
                      onSubmit: (e) => {
                        e.preventDefault(),
                          window.open(
                            "".concat(p.vc.homeLink, "/signup/ai"),
                            "_blank"
                          );
                      },
                      children: (0, s.jsx)("input", {
                        ref: h,
                        type: "text",
                        className: (0, a.cx)(
                          "w-[100%] font-normal h-[24px] text-[16px] leading-[24px]"
                        ),
                        style: {
                          border: "none",
                          background: "none",
                          outline: "none",
                          padding: 0,
                          margin: 0,
                          boxShadow: "none",
                          WebkitAppearance: "none",
                          MozAppearance: "none",
                          appearance: "none",
                        },
                        onInput: () => m(!0),
                        onFocus: () => o(!0),
                        onTouchStart: () => {
                          window.open(
                            "".concat(p.vc.homeLink, "/signup/ai"),
                            "_blank"
                          );
                        },
                        onBlur: () => {
                          o(!1), m(!1), (h.current.value = "");
                        },
                      }),
                    }),
                  }),
                ],
              }),
              (0, s.jsxs)("button", {
                onClick: () => {
                  window.open("".concat(p.vc.homeLink, "/signup/ai"), "_blank");
                },
                style: { zIndex: 20, transition: "all 0.8s" },
                className:
                  "hover:shadow-[0_0px_20px_0px_#FFFFFF_inset] bg-black/10 shadow-[0_0px_2px_0px_#FFFFFF_inset] w-[32px] ai-dt:w-[133px] flex flex-row items-center justify-center gap-[8px] h-[32px] ai-dt:h-[41px] rounded-[32px] ai-dt:rounded-[56px]  border-white/20",
                children: [
                  (0, s.jsx)("span", {
                    className: "hidden ai-dt:block text-[16px] font-medium",
                    children: "Generate",
                  }),
                  (0, s.jsx)(d(), {
                    src: (0, c.ji)("arrow-right.png"),
                    width: 13,
                    height: 16,
                    alt: "",
                  }),
                ],
              }),
            ],
          })
        );
      }
      function D(e) {
        let { simple: t } = e,
          [i, n] = (0, r.useState)(!1),
          l = (0, r.useRef)(i),
          x = () => {
            window.scrollY > 0 ? l.current || n(!0) : n(!1);
          },
          d = (e, t) => {
            e.stopPropagation(), e.preventDefault();
            let i = document.getElementById(t).getBoundingClientRect();
            "tag-overview" === t
              ? window.scrollTo({ top: 1788, behavior: "smooth" })
              : window.scrollTo({
                  top: i.top + window.pageYOffset - 100,
                  behavior: "smooth",
                });
          };
        return (
          (0, r.useEffect)(
            () => (
              (l.current = i),
              document.addEventListener("scroll", x),
              () => {
                document.removeEventListener("scroll", x);
              }
            ),
            [i]
          ),
          (0, s.jsx)("div", {
            className: "fixed top-0 left-0 z-50 w-screen",
            style: { zIndex: 999 },
            children: (0, s.jsxs)("div", {
              className: "flex flex-row items-center justify-center relative",
              children: [
                (0, s.jsx)("div", {
                  className: (0, a.cx)(
                    "flex flex-row items-stretch justify-between",
                    "w-screen max-w-[1440px] h-[88px] px-[20px] ai-xs:px-[40px]"
                  ),
                  children: (0, s.jsxs)("div", {
                    className: (0, a.cx)(
                      "flex flex-row items-stretch justify-between",
                      "w-[100%] h-[60px] mt-[20px] px-[10px] animate-[hero-enter_2s_ease-out_0s_forwards] opacity-0",
                      i
                        ? "max-[840px]:topbar-active"
                        : "max-[840px]:topbar-unactive"
                    ),
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "logo items-center pl-[5px] flex flex-row w-[248px]",
                        children: (0, s.jsx)("a", {
                          href: "https://www.dora.run/",
                          target: "_blank",
                          children: (0, s.jsx)(o.Ee, {
                            src: (0, c.ji)("logo.png"),
                            width: 100,
                            height: 30,
                            alt: "",
                          }),
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "get-start items-center justify-end flex flex-row w-[148px]",
                        children: (0, s.jsx)("div", {
                          className: "w-[148px] h-[42px]",
                          children:
                            !0 !== t && (0, s.jsx)(L, { title: "Get Started" }),
                        }),
                      }),
                    ],
                  }),
                }),
                !0 !== t &&
                  (0, s.jsx)("div", {
                    className: "absolute top-0 left-0 w-screen h-[88px]",
                    style: { pointerEvents: "none" },
                    children: (0, s.jsx)("div", {
                      className: "flex flex-row items-center justify-center",
                      children: (0, s.jsx)("div", {
                        className:
                          "menu hidden ai-xl:flex flex-auto items-center justify-center font-poppins flex-row text-[16px] leading-[25px] mt-[25px]",
                        children: (0, s.jsxs)("div", {
                          className: (0, a.cx)(
                            "h-[49px] pointer-event items-center justify-center flex flex-row gap-[32px] px-[16px]",
                            i ? "topbar-active" : "topbar-unactive"
                          ),
                          children: [
                            (0, s.jsx)("a", {
                              href: "",
                              onClick: (e) => d(e, "tag-overview"),
                              className: "p-[8px] hover:text-white/40",
                              children: "Overview",
                            }),
                            (0, s.jsx)("a", {
                              href: "",
                              onClick: (e) => d(e, "tag-feature"),
                              className: "tag-link p-[8px] hover:text-white/40",
                              children: "Features",
                            }),
                            (0, s.jsx)("a", {
                              href: "",
                              onClick: (e) => d(e, "tag-roadmap"),
                              className: "p-[8px] hover:text-white/40",
                              children: "Roadmap",
                            }),
                            (0, s.jsx)("a", {
                              href: "",
                              onClick: (e) => d(e, "tag-faq"),
                              className: "p-[8px] hover:text-white/40",
                              children: "FAQ",
                            }),
                            (0, s.jsx)("a", {
                              href: "https://dora.run/",
                              target: "_blank",
                              className: "p-[8px] hover:text-white/40",
                              children: "About Dora",
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
              ],
            }),
          })
        );
      }
      var B = i(42182);
      let P = [
        {
          name: "nike",
          from: "#2474BB",
          to: "#EDEAE8",
          input: "Ad campaign with transparent Nike air balloons.",
        },
        {
          name: "pixar",
          from: "#B48EFF",
          to: "#BFEDFF",
          input: "Promo page for Pixar's VR characters, 3D render.",
        },
        {
          name: "desert",
          from: "#EFE6DB",
          to: "#76D4F9",
          input: "Desert-themed Chanel perfume campaign.",
        },
        {
          name: "temple",
          from: "#B5F4BA",
          to: "#FF529B",
          input: "Web exhibit with inflatable Chinese temples.",
        },
        {
          name: "jellyfish",
          from: "#C098E4",
          to: "#0E94B1",
          input: "Deep sea exhibit with sparkling jellyfish and coral.",
        },
        {
          name: "flower",
          from: "#A4B2CA",
          to: "#E1E1E1",
          input: "Interior design portfolio with metallic floral details.",
        },
        {
          name: "glassball",
          from: "#3A98FF",
          to: "#F52E46",
          input: "Fine dining menu with glossy glass bubbles.",
        },
        {
          name: "painting",
          from: "#A7DDFF",
          to: "#FF9568",
          input: "A modern art gallery, Magritte and Chagall style.",
        },
        {
          name: "retro",
          from: "#FFDFA1",
          to: "#B486FF",
          input: "An 80's celestial punk 3D design studio portfolio.",
        },
        {
          name: "green",
          from: "#DDFFDD",
          to: "#BDFF8A",
          input: "Landing page for a surrealist botanical garden.",
        },
      ];
      function z() {
        let e;
        let t = (0, r.useRef)(0),
          i = (e, t) => Math.floor(Math.random() * (t - e + 1) + e),
          l = () => i(0, P.length - 1),
          x = () => {
            let e = t.current;
            for (; e === t.current; ) e = l();
            return (t.current = e), P[e];
          },
          d = () => {
            clearTimeout(e), (e = void 0);
            let t = x();
            n.ZP.set(".feature-input input", { placeholder: "" }),
              n.ZP.to(".feature-input input", {
                duration: 1,
                onStart() {
                  document
                    .getElementsByClassName("feature-input")[0]
                    .getElementsByClassName("input-cursor")[0]
                    .classList.remove("hidden");
                },
                onUpdate() {
                  let e = document.getElementsByClassName("feature-input")[0];
                  if (!e) return;
                  e.getElementsByClassName("placeholder-span")[0].innerText =
                    t.input.substring(0, t.input.length * this.progress());
                  let i = document.getElementsByClassName("header-input")[0];
                  (null == i
                    ? void 0
                    : i.getElementsByClassName("placeholder-span")[0]
                  ).innerText = t.input.substring(
                    0,
                    t.input.length * this.progress()
                  );
                },
                onComplete() {
                  setTimeout(() => {
                    document
                      .getElementsByClassName("feature-input")[0]
                      .getElementsByClassName("input-cursor")[0]
                      .classList.add("hidden");
                  }, 1e3);
                },
              }),
              n.ZP.to("#feature-middle", {
                y: "100%",
                duration: 0.6,
                ease: "power1.in",
              }),
              n.ZP.to("#feature-left", {
                y: "100%",
                duration: 0.6,
                delay: 0.3,
                ease: "power1.in",
              }),
              n.ZP.to("#feature-right", {
                y: "100%",
                ease: "power1.in",
                duration: 0.6,
                delay: 0.3,
                onComplete: () => {
                  (document.getElementById("feature-left-img").src = (0, c.ji)(
                    "features2/".concat(t.name, "_left.webp")
                  )),
                    (document.getElementById("feature-middle-img").src = (0,
                    c.ji)("features2/".concat(t.name, ".webp"))),
                    (document.getElementById("feature-right-img").src = (0,
                    c.ji)("features2/".concat(t.name, "_right.webp"))),
                    (document.getElementById("feature-bg").src = (0, c.ji)(
                      "features2/shadow-".concat(t.name, ".webp")
                    )),
                    n.ZP.to("#feature-middle", { y: "0%", duration: 1 }),
                    n.ZP.to("#feature-left", {
                      y: "0%",
                      duration: 1,
                      delay: 0.3,
                    }),
                    n.ZP.to("#feature-right", {
                      y: "0%",
                      duration: 1,
                      delay: 0.3,
                    });
                },
              }),
              (e = setTimeout(d, 6e3));
          },
          p = () => {
            P.forEach((e) => {
              let { name: t } = e,
                i = (0, c.ji)("features2/".concat(t, ".webp"));
              (0, c.pt)(i);
              let s = (0, c.ji)("features2/".concat(t, "_left.webp"));
              (0, c.pt)(s);
              let a = (0, c.ji)("features2/".concat(t, "_right.webp"));
              (0, c.pt)(a);
              let n = (0, c.ji)("features2/shadow-".concat(t, ".webp"));
              (0, c.pt)(n);
            });
          };
        return (
          (0, B.V)(
            () => (
              p(),
              d(),
              () => {
                clearTimeout(e);
              }
            ),
            {}
          ),
          (0, s.jsxs)("div", {
            id: "section-feature",
            className: (0, a.cx)(
              "flex flex-col justify-center items-center",
              "w-screen",
              "relative"
            ),
            children: [
              (0, s.jsx)("div", {
                className: (0, a.cx)(
                  "w-screen h-[648px] ai-sm:h-[900px] ai-dt:h-[1340px]",
                  "absolute left-0 top-0"
                ),
                children: (0, s.jsx)("div", {
                  className:
                    "relative w-[100%] h-[648px] ai-sm:h-[900px] ai-dt:h-[1340px]",
                  children: (0, s.jsx)("div", {
                    className:
                      "absolute w-[100%] h-[648px] ai-sm:h-[900px] ai-dt:h-[1340px]",
                    style: {
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                    },
                    children: (0, s.jsx)(o.Ee, {
                      id: "feature-bg",
                      src: (0, c.ji)("features2/shadow-nike.webp"),
                      style: { width: "100%", height: "100%" },
                      alt: "",
                    }),
                  }),
                }),
              }),
              (0, s.jsxs)("div", {
                className: (0, a.cx)(
                  "flex flex-col justify-center items-center",
                  "w-screen max-w-[1440px]"
                ),
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "flex-flex-col justify-center items-center mt-[40px] ai-sm:mt-[160px] px-[40px] max-w-[658px]",
                    children: [
                      (0, s.jsx)(k, {
                        id: "tag-feature",
                        className: "text-center",
                        children: "Key Features",
                      }),
                      (0, s.jsx)(C, {
                        className:
                          "relative text-center pt-[8px] ai-sm:pt-[16px] max-w-[658px]",
                        children: (0, s.jsxs)("div", {
                          className: "z-10",
                          children: [
                            "The first AI that",
                            " ",
                            (0, s.jsxs)("span", {
                              className: "relative inline-block",
                              children: [
                                (0, s.jsx)("span", {
                                  className:
                                    "absolute left-0 bottom-0 z-0 orange-hightlight",
                                }),
                                (0, s.jsx)("span", {
                                  className: "absolute z-10",
                                  children: "truly",
                                }),
                                (0, s.jsx)("span", {
                                  className: "opacity-0",
                                  children: "truly",
                                }),
                              ],
                            }),
                            " ",
                            "understands websites.",
                          ],
                        }),
                      }),
                      (0, s.jsx)(F, {
                        className: "text-center mt-[8px] ai-sm:mt-[16px]",
                        children:
                          "Generating sites for any topic, in any style.",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className: "max-w-[720px] w-[100%] px-[40px]",
                    children: (0, s.jsx)(A, {
                      className: "mt-[40px] feature-input",
                      placeholder:
                        "Transparent inflation balloon with Nike logo.",
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: (0, a.cx)(
                      "relative w-screen overflow-hidden",
                      "feature-imgs feature-img-h pt-[80px]"
                    ),
                    children: [
                      (0, s.jsx)("div", {
                        className: (0, a.cx)(
                          "absolute left-[50%] translate-x-[-50%]"
                        ),
                        children: (0, s.jsxs)("div", {
                          className:
                            "flex flex-row justify-center items-center gap-[15px] ai-dt:gap-[40px]",
                          children: [
                            (0, s.jsx)("div", {
                              id: "feature-left",
                              className: (0, a.cx)(
                                "relative feature-img-wrapper",
                                "feature-img-w feature-img-h"
                              ),
                              children: (0, s.jsx)("div", {
                                style: {
                                  position: "absolute",
                                  left: "50%",
                                  transform: "translate(-50%, 0)",
                                  width: "103%",
                                  height: "103%",
                                },
                                children: (0, s.jsx)(o.Ee, {
                                  id: "feature-left-img",
                                  className: (0, a.cx)(
                                    "feature-img opacity-60"
                                  ),
                                  src: (0, c.ji)("features2/nike_left.webp"),
                                  style: { width: "100%" },
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, s.jsx)("div", {
                              id: "feature-middle",
                              className: (0, a.cx)(
                                "relative feature-img-wrapper",
                                "feature-img-w feature-img-h"
                              ),
                              children: (0, s.jsx)("div", {
                                style: {
                                  position: "absolute",
                                  left: "50%",
                                  top: "7%",
                                  transform: "translate(-50%, 0) scale(1.4)",
                                  width: "100%",
                                  height: "100%",
                                },
                                children: (0, s.jsx)(o.Ee, {
                                  id: "feature-middle-img",
                                  className: (0, a.cx)("feature-img"),
                                  src: (0, c.ji)("features2/nike.webp"),
                                  style: { width: "100%" },
                                  alt: "",
                                }),
                              }),
                            }),
                            (0, s.jsx)("div", {
                              id: "feature-right",
                              className: (0, a.cx)(
                                "relative feature-img-wrapper",
                                "feature-img-w feature-img-h"
                              ),
                              children: (0, s.jsx)("div", {
                                style: {
                                  position: "absolute",
                                  left: "50%",
                                  transform: "translate(-50%, 0)",
                                  width: "103%",
                                  height: "103%",
                                },
                                children: (0, s.jsx)(o.Ee, {
                                  id: "feature-right-img",
                                  className: (0, a.cx)(
                                    "feature-img opacity-60"
                                  ),
                                  src: (0, c.ji)("features2/nike_right.webp"),
                                  style: { width: "100%" },
                                  alt: "",
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                      (0, s.jsx)("div", {
                        className:
                          "absolute bottom-[-2px] left-0 right-0 pointer-event-none",
                        style: {
                          background:
                            "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
                          height: "calc((100vw - 30px) / 2.25 * 0.67 )",
                          zIndex: 900,
                        },
                      }),
                      (0, s.jsx)("div", {
                        className: (0, a.cx)(
                          "absolute left-[50%] translate-x-[-50%]"
                        ),
                        children: (0, s.jsxs)("div", {
                          className:
                            "flex flex-row justify-center items-center gap-[15px] ai-dt:gap-[40px]",
                          children: [
                            (0, s.jsx)("div", {
                              className: (0, a.cx)(
                                "relative feature-img-wrapper",
                                "feature-img-w feature-img-h"
                              ),
                            }),
                            (0, s.jsx)("div", {
                              className: (0, a.cx)(
                                "relative feature-img-wrapper",
                                "feature-img-w feature-img-h"
                              ),
                              children: (0, s.jsx)("div", {
                                className: "absolute",
                                style: {
                                  right: 0,
                                  transform: "translate(calc(50% + 2vw), 0)",
                                  top: "calc(10vw)",
                                  zIndex: 999,
                                },
                                children: (0, s.jsx)("button", {
                                  onClick: () => {
                                    d();
                                  },
                                  id: "feature-refresh",
                                  className:
                                    "hover:rotate-[30deg] inline-block cursor-pointer shadow-[0_0px_20px_0px_#00000066] rounded-[100%] flex flex-row items-center justify-center bg-[#FFFFFF1A] w-[10vw] h-[10vw] max-w-[146px] max-h-[146px]",
                                  style: {
                                    backdropFilter: "blur(30px)",
                                    WebkitBackdropFilter: "blur(30px)",
                                    transition: "transform 0.25s",
                                  },
                                  onTouchStart: () => {
                                    var e;
                                    null ===
                                      (e =
                                        document.getElementById(
                                          "feature-refresh"
                                        )) ||
                                      void 0 === e ||
                                      e.classList.add("rotate-30");
                                  },
                                  onTouchCancel: () => {
                                    var e;
                                    null ===
                                      (e =
                                        document.getElementById(
                                          "feature-refresh"
                                        )) ||
                                      void 0 === e ||
                                      e.classList.remove("rotate-30");
                                  },
                                  children: (0, s.jsx)(o.Ee, {
                                    src: (0, c.ji)("reload.png"),
                                    className:
                                      "w-[5.4vw] h-[5.4vw] max-w-[80px] max-h-[80px]",
                                    alt: "",
                                  }),
                                }),
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: (0, a.cx)(
                                "relative feature-img-wrapper",
                                "feature-img-w feature-img-h"
                              ),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var R = i(79792);
      function M(e, t) {
        switch (t) {
          case "left":
            return {
              leftStyle: "leftImg",
              centerStyle: "centerImg",
              rightStyle: "rightImg",
              leftTitle: "vis",
              rightTitle: "",
              hover: !0,
            };
          case "left-leave":
            return {
              leftStyle: "leftImg",
              centerStyle: "centerImg",
              rightStyle: "rightImg",
              leftTitle: "vis",
              rightTitle: "",
              hover: !1,
            };
          case "center":
            return {
              leftStyle: "",
              rightStyle: "",
              centerStyle: "",
              leftTitle: "",
              rightTitle: "",
              hover: !0,
            };
          case "right-leave":
            return {
              leftStyle: "leftImgr",
              centerStyle: "centerImgr",
              rightStyle: "rightImgr",
              leftTitle: "",
              rightTitle: "vis",
              hover: !1,
            };
          case "right":
            return {
              leftStyle: "leftImgr",
              centerStyle: "centerImgr",
              rightStyle: "rightImgr",
              leftTitle: "",
              rightTitle: "vis",
              hover: !0,
            };
          default:
            return { ...e };
        }
      }
      function T(e, t) {
        let i = 1;
        switch (
          (1 === e.numner
            ? (i = 2)
            : 2 === e.numner
            ? (i = 3)
            : 3 === e.numner && (i = 1),
          i)
        ) {
          case 1:
            return {
              right: "prompt_right-1.webp",
              center: "prompt_center-1.webp",
              left: "prompt_left-1.webp",
              text: "Rick and Morty birthday DVD release site, dreamlike, the holy mountain",
              numner: 1,
            };
          case 2:
            return {
              right: "prompt_right-2.webp",
              center: "prompt_center-2.webp",
              left: "prompt_left-2.webp",
              text: "Furniture design brand website, inflatable armchair, fluorescent pink, transparent, concept product design, futuristic, modern, plain studio background, studio lighting",
              numner: 2,
            };
          case 3:
            return {
              right: "prompt_right-3.webp",
              center: "prompt_center-3.webp",
              left: "prompt_left-3.webp",
              text: "Product page for futuristic blue car, frosted glass, transparent technology, industrial design",
              numner: 3,
            };
          default:
            return { ...e };
        }
      }
      i(72067);
      let H = 0,
        Z = 0,
        q = 0,
        W = null;
      function X() {
        var e, t;
        let [i, n] = (0, r.useState)(!0),
          [l, x] = (0, r.useState)(640),
          [d, p] = (0, r.useState)(null),
          h = (0, r.useRef)(),
          [g, j] = (0, r.useReducer)(M, {
            leftStyle: "",
            rightStyle: "",
            centerStyle: "",
            hover: !1,
          }),
          [b, y] = (0, r.useReducer)(T, {
            right: "prompt_right-3.webp",
            center: "prompt_center-3.webp",
            left: "prompt_left-3.webp",
            text: "Product page for futuristic blue car, frosted glass, transparent technology, industrial design",
            numner: 3,
          });
        return (
          (0, r.useEffect)(() => {
            let e = () => {
              let { innerWidth: e } = window,
                t = document.querySelector(".show-prompt-div");
              if (t instanceof HTMLElement) {
                let i = t.getBoundingClientRect(),
                  s = 240 - ((i.width - 240) / 2 - 48);
                (Z = (H = i.width / 2 - 120) - 24 - 240 - 24),
                  (q = i.width / 2 + 120 + 24),
                  x(s),
                  document.documentElement.style.setProperty(
                    "--card-animation-X-hover-right",
                    "-".concat(s, "px")
                  ),
                  document.documentElement.style.setProperty(
                    "--card-animation-X-hover-left",
                    "".concat(s, "px")
                  ),
                  e > 1024
                    ? (document.documentElement.style.setProperty(
                        "--card-animation-X-right",
                        "120px"
                      ),
                      document.documentElement.style.setProperty(
                        "--card-animation-X-left",
                        "-120px"
                      ))
                    : e > 640
                    ? (document.documentElement.style.setProperty(
                        "--card-animation-X-right",
                        "200px"
                      ),
                      document.documentElement.style.setProperty(
                        "--card-animation-X-left",
                        "-200px"
                      ))
                    : (document.documentElement.style.setProperty(
                        "--card-animation-X-right",
                        "97px"
                      ),
                      document.documentElement.style.setProperty(
                        "--card-animation-X-left",
                        "-97px"
                      ));
              }
            };
            window.addEventListener("resize", e), e();
            let t = [
                "prompt_left-1.webp",
                "prompt_left-2.webp",
                "prompt_center-1.webp",
                "prompt_center-2.webp",
                "prompt_right-1.webp",
                "prompt_right-2.webp",
              ],
              i = [];
            for (let e = 0; e < t.length; e += 1) {
              let s = document.createElement("link");
              (s.rel = "preload"),
                (s.href = (0, c.ji)(t[e])),
                (s.as = "image"),
                document.head.appendChild(s),
                i.push(s);
            }
            return () => {
              for (let e = 0; e < i.length; e += 1) {
                var t;
                let s = i[e];
                null == s ||
                  null === (t = s.parentNode) ||
                  void 0 === t ||
                  t.removeChild(s);
              }
              window.removeEventListener("resize", e);
            };
          }, []),
          (0, s.jsx)(f, {
            className:
              "show-prompt-div relative w-[100%]  ai-sm:max-w-[640px]  ai-xl:max-w-[480px] ai-m:h-[600px]  mt-[40px] ai-xl:mt-0  ai-xl:ml-6  overflow-clip   rounded-[32px]",
            children: (0, s.jsx)(w, {
              className:
                "relative flex flex-col h-[100%] ai-m:h-[600px] w-[100%] ai-sm:max-w-[640px] ai-sm:w-[100%] overflow-clip ",
              children: (0, s.jsxs)("div", {
                className: " relative w-[100%] h-[100%]",
                children: [
                  (0, s.jsxs)("div", {
                    className:
                      "relative flex flex-row justify-between content-between my-[40px] px-[20px] min-[440px]:px-[40px]",
                    children: [
                      (0, s.jsxs)("div", {
                        className: " w-[100%] ",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "leading-[28px] font-semibold text-[14px] min-[440px]:text-[24px]",
                            style: { flex: 1 },
                            children: "Prompt-relevant, always",
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "max-w-[344px] mt-[8px] text-[12px] min-[440px]:text-[16px] text-white/50 font-normal",
                            children: [
                              "No templates or stock photos. Dora AI yields results",
                              " ",
                              (0, s.jsx)("p", {
                                className: " font-bold inline",
                                children: "100%",
                              }),
                              " tailored to your prompt.",
                            ],
                          }),
                        ],
                      }),
                      (0, s.jsx)("div", {
                        style: { flex: 1 },
                        children: (0, s.jsx)(u, { condition: "default" }),
                      }),
                    ],
                  }),
                  (0, s.jsxs)("div", {
                    className: "w-[100%]  ",
                    onTouchStart: (e) => {
                      var t;
                      W =
                        null === (t = e.touches[0]) || void 0 === t
                          ? void 0
                          : t.clientX;
                    },
                    onTouchMove: (e) => {
                      if (null === W || !m.tq) return;
                      let t = e.touches[0].clientX,
                        i = W - t;
                      i > 10
                        ? ((W = null),
                          ("" === g.leftStyle ||
                            "leftImg" === g.leftStyle ||
                            "leftImgr" === g.leftStyle) &&
                            !1 === g.hover &&
                            j("right"),
                          "leftImg" === g.leftStyle &&
                            !0 === g.hover &&
                            j("left-leave"))
                        : i < -10 &&
                          ((W = null),
                          ("" === g.leftStyle ||
                            "leftImg" === g.leftStyle ||
                            "leftImgr" === g.leftStyle) &&
                            !1 === g.hover &&
                            j("left"),
                          "leftImgr" === g.leftStyle &&
                            !0 === g.hover &&
                            j("right-leave"));
                    },
                    children: [
                      (0, s.jsxs)("div", {
                        className: (0, a.cx)(
                          "relative h-[435px] w-[100%] flex flex-row overflow-clip ",
                          ""
                        ),
                        style: {
                          maskImage:
                            "linear-gradient(180deg, #000 0%, #000 74.48%, rgba(0, 0, 0, 0.00) 94.27%)",
                          maskMode: "alpha",
                        },
                        children: [
                          (0, s.jsx)(R.Z, {
                            classNames: "left",
                            timeout: { enter: 500, exit: 500 },
                            in: i,
                            onExited: () => {
                              y(1), n(!0);
                            },
                            children: (0, s.jsx)(R.Z, {
                              classNames: g.leftStyle,
                              timeout: { enter: 500, exit: 500 },
                              in: g.hover,
                              children: (0, s.jsxs)("div", {
                                className: (0, a.cx)(
                                  "leftImage absolute inline w-[264px] h-[431px] pl-[24px]  rounded-[10px]"
                                ),
                                style: { left: Z },
                                onMouseEnter: () => {
                                  j("left");
                                },
                                onMouseLeave: () => {
                                  j("left-leave");
                                },
                                children: [
                                  (0, s.jsx)("p", {
                                    className: (0, a.cx)(
                                      "w-[100%] opacity-50 font-poppins",
                                      " text-center  text-[10px] ai-sm:text-[16px]"
                                    ),
                                    style: {
                                      fontWeight: "400",
                                      lineHeight: "normal",
                                      color: "#fff",
                                      textAlign: "center",
                                      visibility:
                                        "" === g.leftTitle
                                          ? "hidden"
                                          : "visible",
                                    },
                                    children: "Other AI Product",
                                  }),
                                  (0, s.jsx)(o.Ee, {
                                    className:
                                      "  w-[100%] h-[100%]  mt-[16px]  ",
                                    src: (0, c.ji)(
                                      null !==
                                        (e = null == b ? void 0 : b.left) &&
                                        void 0 !== e
                                        ? e
                                        : ""
                                    ),
                                    alt: "",
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, s.jsx)(R.Z, {
                            classNames: "center",
                            timeout: { enter: 500, exit: 1e3 },
                            in: i,
                            children: (0, s.jsx)(R.Z, {
                              classNames: g.centerStyle,
                              timeout: { enter: 500, exit: 500 },
                              in: g.hover,
                              children: (0, s.jsx)("div", {
                                className: (0, a.cx)(
                                  "centerImg absolute inline w-[240px] h-[431px]  rounded-[10px]"
                                ),
                                style: { left: "".concat(H, "px") },
                                children: (0, s.jsxs)("div", {
                                  className: "",
                                  children: [
                                    (0, s.jsx)(o.Ee, {
                                      className: " w-[100%] h-[100%] ",
                                      src: (0, c.ji)(
                                        null !==
                                          (t = null == b ? void 0 : b.center) &&
                                          void 0 !== t
                                          ? t
                                          : ""
                                      ),
                                      alt: "",
                                      style: { zIndex: -10 },
                                    }),
                                    (0, s.jsx)("div", {
                                      className: (0, a.cx)(
                                        "absolute top-0 left-0 w-[100%] h-[100%]"
                                      ),
                                      style: {},
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                          (0, s.jsx)(R.Z, {
                            classNames: "right",
                            timeout: { enter: 500, exit: 1e3 },
                            in: i,
                            children: (0, s.jsx)(R.Z, {
                              classNames: g.rightStyle,
                              timeout: { enter: 500, exit: 1e3 },
                              in: g.hover,
                              children: (0, s.jsxs)("div", {
                                className: (0, a.cx)(
                                  "rightImage",
                                  "absolute w-[264px] h-[431px] overflow-clip pr-[24px]"
                                ),
                                style: { left: "".concat(q, "px") },
                                onMouseEnter: () => {
                                  j("right");
                                },
                                onMouseLeave: () => {
                                  j("right-leave");
                                },
                                children: [
                                  (0, s.jsx)("p", {
                                    className: (0, a.cx)(
                                      "w-[100%] opacity-50 font-poppins text-center  ",
                                      " text-[10px] ai-sm:text-[16px] "
                                    ),
                                    style: {
                                      fontWeight: "400",
                                      lineHeight: "normal",
                                      color: "#fff",
                                      textAlign: "center",
                                      visibility:
                                        "" === g.rightTitle
                                          ? "hidden"
                                          : "visible",
                                    },
                                    children: "Other AI Product",
                                  }),
                                  (0, s.jsx)("img", {
                                    className: " w-[100%] h-[100%] mt-[16px]",
                                    alt: "",
                                    src: (0, c.ji)(b.right),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, s.jsxs)("div", {
                        className:
                          " absolute flex flex-row w-[100%] bottom-0 px-4 pb-4  justify-center items-center",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              " w-[1px] pl-[16px] pr-[24px] py-[8px] rounded-[30px]   ",
                            style: {
                              background: "rgba(0, 0, 0, 0.1)",
                              boxShadow:
                                "inset 0px 0px 0px 1px rgba(255, 255, 255, 0.20)",
                              flex: 1,
                            },
                            children: (0, s.jsx)("div", {
                              className:
                                " relative h-[24px] text-center flex items-center ",
                              children: (0, s.jsx)("p", {
                                className:
                                  "  font-poppins font-normal text-white text-[16px] tracking-[0] leading-[normal] overflow-hidden text-ellipsis  whitespace-nowrap",
                                children: b.text,
                              }),
                            }),
                          }),
                          (0, s.jsx)(v, {
                            onClick: () => {
                              let e;
                              1 === b.numner
                                ? (e = 2)
                                : 2 === b.numner
                                ? (e = 3)
                                : 3 === b.numner && (e = 1),
                                (h.current = { ...h.current, num: e }),
                                n(!1);
                            },
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            }),
          })
        );
      }
      i(78006);
      let U = new Date().getTime(),
        V = { x: 0, y: 0 },
        Y = { starTimestamp: U, starPosition: V, mousePosition: V },
        O = {
          starAnimationDuration: 1500,
          minimumTimeBetweenStars: 250,
          minimumDistanceBetweenStars: 75,
          colors: ["255 255 255", "252 254 255"],
          sizes: ["1.4rem", "1rem", "0.6rem"],
          animations: ["fall-1", "fall-2", "fall-3"],
        },
        G = 0,
        Q = (e, t) => Math.floor(Math.random() * (t - e + 1)) + e,
        J = (e) => e[Q(0, e.length - 1)],
        K = (e, t) => "".concat(e).concat(t),
        $ = (e) => K(e, "px"),
        ee = (e) => K(e, "ms"),
        et = (e, t) => Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2),
        ei = (e, t) => t - e,
        es = (e) => {
          var t;
          null === (t = document.querySelector(".show-video-glow")) ||
            void 0 === t ||
            t.appendChild(e);
        },
        ea = (e, t) =>
          setTimeout(() => {
            var t;
            return null === (t = document.querySelector(".show-video-glow")) ||
              void 0 === t
              ? void 0
              : t.removeChild(e);
          }, t),
        en = (e) => {
          let t = J(O.colors),
            i = document.createElement("img");
          i.classList.add("show-video-star", "absolute"),
            (i.src = (0, c.ji)("bg-star.png")),
            (i.style.left = $(e.x)),
            (i.style.top = $(e.y)),
            (i.style.fontSize = J(O.sizes)),
            (i.style.color = "rgb(".concat(t, ")")),
            (i.style.width = "".concat(48, "px")),
            (i.style.height = "".concat(48, "px")),
            (G += 1),
            (i.style.animationName = O.animations[G % 3]),
            (i.style.animationDuration = ee(O.starAnimationDuration)),
            es(i),
            ea(i, O.starAnimationDuration);
        },
        er = (e) => {
          (Y.starTimestamp = new Date().getTime()), (Y.starPosition = e);
        },
        el = (e) => {
          Y.mousePosition = e;
        },
        eo = (e) => {
          0 === Y.mousePosition.x &&
            0 === Y.mousePosition.y &&
            (Y.mousePosition = e);
        },
        ec = (e) => {
          let t = { x: e.clientX, y: e.clientY };
          eo(t);
          let i = new Date().getTime(),
            s = et(Y.starPosition, t) >= O.minimumDistanceBetweenStars,
            a = ei(Y.starTimestamp, i) > O.minimumTimeBetweenStars;
          (s || a) && (en(t), er(t)), el(t);
        },
        ex = !1;
      function ed() {
        let [e, t] = (0, r.useState)(!1),
          i = (0, r.useRef)(null),
          a = (0, r.useRef)({ x: 0, y: 0 });
        return (
          (0, r.useEffect)(() => {
            let e = (e) => {
              a.current = { x: e.clientX, y: e.clientY };
            };
            return (
              document.addEventListener("mousemove", e),
              () => {
                document.removeEventListener("mousemove", e);
              }
            );
          }, []),
          (0, r.useEffect)(() => {
            let e = document.querySelector(".show-video-img");
            function t(i) {
              if (!0 === ex) {
                let i = document.querySelector(".show-video-glow"),
                  s = e.getBoundingClientRect(),
                  a = i.getBoundingClientRect(),
                  n = s.left - a.left,
                  r = s.top - a.top;
                e.className.includes("show-video-img-enter-done") ||
                  e.className.includes("show-video-img-exit-done") ||
                  (e.className.includes("enter")
                    ? ec({ clientX: n + s.width, clientY: r })
                    : ec({ clientX: n, clientY: r })),
                  requestAnimationFrame(t);
              }
            }
            e.addEventListener("transitionstart", () => {
              (ex = !0), requestAnimationFrame(t);
            }),
              e.addEventListener("transitionend", () => {
                ex = !1;
              });
            let s = () => {
              var e, t;
              window.innerWidth > 1140
                ? null == i ||
                  null === (e = i.current) ||
                  void 0 === e ||
                  e.style.setProperty("--magic-glow-top", "5.3%")
                : null == i ||
                  null === (t = i.current) ||
                  void 0 === t ||
                  t.style.setProperty("--magic-glow-top", "25.3%");
            };
            return (
              window.addEventListener("resize", s),
              s(),
              m.tq && document.querySelector(".show-video").play(),
              () => {
                window.removeEventListener("resize", s);
              }
            );
          }, []),
          (0, s.jsx)(f, {
            className:
              "flex flex-col  max-w-[640px] w-[100%] ai-xl:max-w-[1144px]  ai-m:h-[100%]  ",
            children: (0, s.jsxs)(w, {
              className: "flex flex-col w-[100%] h-[100%]  ",
              children: [
                (0, s.jsxs)("div", {
                  className:
                    "  flex flex-row justify-between my-[40px] px-[20px] min-[440px]:px-[40px]",
                  style: {},
                  children: [
                    (0, s.jsxs)("div", {
                      className: "w-[100%]  ",
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            " text-[14px]  min-[440px]:text-[24px] ai-xl:leading-[28px] font-semibold",
                          style: { flex: 1 },
                          children: "Design layouts intelligently",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "ai-xl:max-w-[100%] max-w-[402px]  mt-[8px] text-[12px] min-[440px]:text-[16px] text-white/50 font-normal",
                          children:
                            "Every generation coordinates images, text, and UI elements to maximize usability.",
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: " ",
                      style: { flex: 1 },
                      children: [
                        " ",
                        (0, s.jsx)(u, { condition: "default" }),
                        " ",
                      ],
                    }),
                  ],
                }),
                (0, s.jsxs)("div", {
                  className:
                    " relative show-video-glow w-[100%] h-[100%] overflow-hidden  ",
                  children: [
                    (0, s.jsx)("div", {
                      className:
                        " flex flex-row w-[100%] h-[100%]  justify-center items-center pb-[40px]  px-[40px]  ",
                      children: (0, s.jsxs)("div", {
                        className:
                          " relative max-w-[820px]   w-[100%] show-case-vide-img-div  ",
                        style: { aspectRatio: 1920 / 1040 },
                        onMouseEnter: () => {
                          m.tq || t(!0);
                        },
                        onMouseLeave: () => {
                          m.tq || t(!1);
                        },
                        onTouchStart: () => t(!0),
                        onTouchEnd: () => t(!1),
                        children: [
                          (0, s.jsx)("div", {
                            className: "w-[100%]  ",
                            style: { aspectRatio: 1920 / 1040 },
                            children: (0, s.jsx)("video", {
                              className: "show-video w-[100%] relative  aut  ",
                              style: {
                                borderRadius: "16px",
                                aspectRatio: 1920 / 1040,
                              },
                              muted: !0,
                              playsInline: !0,
                              children: (0, s.jsx)("source", {
                                src: (0, c.ji)("show/pixel.mp4"),
                                type: "video/mp4",
                              }),
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "  absolute top-0 left-0 w-[100%] h-[100%] pointer-events-none  ",
                            style: {
                              boxShadow:
                                "0px 0px 20px 0px rgba(255, 255, 255, 0.04), 2px 2px 20px 0px rgba(255, 255, 255, 0.30) inset",
                              borderRadius: "16px",
                            },
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className:
                        " absolute w-[22%] top-0 left-0  pointer-events-none ",
                      style: { aspectRatio: 0.5, zIndex: 1 },
                      children: (0, s.jsx)("div", {
                        className: " relative w-[100%] h-[100%]",
                        children: (0, s.jsx)(R.Z, {
                          classNames: "show-video-img",
                          in: e,
                          timeout: { enter: 600, exit: 600 },
                          onEntering: () => {
                            document.querySelector(".show-video").play();
                          },
                          onEntered: () => {
                            let e = document.querySelector(".show-video");
                            e.paused || e.ended || e.pause(), (ex = !1);
                          },
                          onExiting: () => {
                            document.querySelector(".show-video").play();
                          },
                          onExited: () => {
                            console.log("onExited"), (ex = !1);
                          },
                          children: (0, s.jsx)("div", {
                            className:
                              " show-video-img relative w-[100%] h-[100%]  ",
                            ref: i,
                            style: {
                              transition:
                                "all 600ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                            },
                            children: (0, s.jsx)(o.Ee, {
                              className: "relative w-[100%] h-[100%]    ",
                              src: (0, c.ji)("ai-magic.webp"),
                              style: { objectFit: "cover" },
                              alt: "",
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              ],
            }),
          })
        );
      }
      function ep(e, t) {
        switch (t) {
          case "chanel":
            return {
              ...e,
              img: "brand_chanel.webp",
              hovered: !0,
              brand: "chanel",
            };
          case "tesla":
            return {
              ...e,
              img: "brand_tesla.webp",
              brand: "tesla",
              hovered: !0,
            };
          case "nike":
            return { ...e, img: "brand_nike.webp", brand: "nike", hovered: !0 };
          case "md":
            return { ...e, img: "brand_md.webp", hovered: !0, brand: "md" };
          case "netflix":
            return {
              ...e,
              img: "brand_netflix.webp",
              brand: "netflix",
              hovered: !0,
            };
          case "lego":
            return { ...e, img: "brand_lego.webp", brand: "lego", hovered: !0 };
          case "default":
            return {
              ...e,
              img: "brand_chanel.webp",
              brand: "default",
              hovered: !0,
            };
          default:
            return e;
        }
      }
      i(75434), i(37727);
      let em = (e) => {
        let {
          className: t,
          defImg: i,
          hoverImg: n,
          brandStateReducer: r,
          brandState: l,
          brand: x = "md",
          condition: d = "default",
          playAgain: p,
          unHover: m,
        } = e;
        return (0, s.jsxs)("div", {
          className: (0, a.cx)("relative overflow-visible", t),
          children: [
            (0, s.jsx)("div", {
              className: "relative w-[100%] h-[100%]",
              onMouseLeave: () => {},
              onMouseEnter: () => {
                l.brand !== x && (r(x), null != m && m());
              },
              onTouchStart: () => {
                l.brand !== x && (r(x), null != m && m());
              },
            }),
            (0, s.jsx)("div", {
              className: (0, a.cx)(
                "absolute  w-[140px] h-[140px]  pointer-events-none  top-0 left-0  "
              ),
              children: (0, s.jsx)(o.Ee, {
                className: (0, a.cx)(" w-[140px] h-[140px]  "),
                alt: "condition",
                src: (0, c.ji)(i),
                style: {
                  objectFit: "cover",
                  transform: "translate(-40px, -40px)",
                },
              }),
            }),
            (0, s.jsx)("div", {
              className: (0, a.cx)(
                "absolute  w-[140px] h-[140px]  pointer-events-none  top-0 left-0  "
              ),
              children: (0, s.jsx)(o.Ee, {
                className: (0, a.cx)(" w-[140px] h-[140px] "),
                alt: "condition",
                src: (0, c.ji)(n),
                style: {
                  borderRadius: "50%",
                  opacity: l.brand === x || "hover" === d ? 1 : 0,
                  objectFit: "cover",
                  transform: "translate(-40px, -40px)",
                },
              }),
            }),
          ],
        });
      };
      function eh() {
        let [e, t] = (0, r.useReducer)(ep, {
            img: "brand_chanel.webp",
            hovered: !0,
            brand: "chanel",
          }),
          [i, n] = (0, r.useState)(!1),
          l = () => {},
          x = () => {
            n(!i);
          };
        return (
          (0, r.useEffect)(() => {
            let e = [
                "brand_chanel.webp",
                "brand_tesla.webp",
                "brand_nike.webp",
                "brand_md.webp",
                "brand_netflix.webp",
                "brand_lego.webp",
              ],
              t = [];
            for (let i = 0; i < e.length; i += 1) {
              let s = document.createElement("link");
              (s.rel = "preload"),
                (s.href = (0, c.ji)(e[i])),
                (s.as = "image"),
                document.head.appendChild(s),
                t.push(s);
            }
            return () => {
              for (let i = 0; i < t.length; i += 1) {
                var e;
                let s = t[i];
                null == s ||
                  null === (e = s.parentNode) ||
                  void 0 === e ||
                  e.removeChild(s);
              }
            };
          }, []),
          (0, s.jsx)(f, {
            className: (0, a.cx)(
              "w-[100%] max-w-[640px] ai-xl:w-[640px] ai-sm:w-[100%] ai-m:h-[600px]"
            ),
            children: (0, s.jsxs)(w, {
              className:
                "relative w-[100%] max-w-[640px] ai-xl:w-[640px] ai-m:h-[600px] overflow-hidden ",
              children: [
                (0, s.jsx)("div", {
                  className: "absolute left-0 top-0 w-[100%] h-[100%]",
                  children: (0, s.jsx)(o.Ee, {
                    className: "object-cover",
                    src: (0, c.ji)("elements.webp"),
                    alt: "",
                  }),
                }),
                (0, s.jsxs)("div", {
                  className:
                    " relative flex flex-col  w-[100%] h-[100%] pt-[40px] px-[20px] min-[440px]:px-[40px] ",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "flex flex-row  justify-between   ",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "  ai-sm:pr-[80px]",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                " leading-[28px] font-semibold text-[14px] min-[440px]:text-[24px]",
                              children: "Branding made effortless",
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "ai-xl:w-[100%] text-white/60 font-normal text-[12px] min-[440px]:text-[16px] mt-[8px] ",
                              children:
                                "Build with any brand identity. Dora AI helps you craft sites that are on-brand, yet brand new.",
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          style: { flex: 1 },
                          children: [
                            " ",
                            (0, s.jsx)(u, { condition: "default" }),
                            " ",
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "relative flex flex-row h-[1px] mt-[40px] ",
                      style: { flex: 1 },
                      children: [
                        (0, s.jsx)("div", {
                          className: (0, a.cx)(
                            "relative w-[240px] min-[560px]:w-[240px] ai-smm:w-[100%] h-[260px]  min-[500px]:h-[300px] ai-m:h-[435px] overflow-clip  "
                          ),
                          children: (0, s.jsx)(R.Z, {
                            classNames: "brand-img",
                            in: i,
                            onExited: () => {},
                            timeout: 1e3,
                            children: (0, s.jsx)(o.Ee, {
                              className: (0, a.cx)(
                                " w-[240px] min-[560px]:w-[240px] ai-smm:w-[100%]  min-[560px]:h-[440px]  "
                              ),
                              src: (0, c.ji)(e.img),
                              alt: "brand-img",
                              style: { borderRadius: "10px" },
                            }),
                          }),
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            " relative ml-[100px] ai-m:mt-[67px] ai-m:ml-[61px] hidden ai-m:block ",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                " absolute left-[160px] ai-m:left-[191px] overflow-visible",
                              children: (0, s.jsx)(em, {
                                className: (0, a.cx)(" w-[60px] h-[60px] "),
                                brandStateReducer: t,
                                brandState: e,
                                unHover: x,
                                defImg: "nike=Default.webp",
                                hoverImg: "nike=hover.webp",
                                brand: "nike",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: " absolute  ai-m:top-[70px]",
                              children: (0, s.jsx)(em, {
                                className: (0, a.cx)(" w-[60px] h-[60px] "),
                                brandStateReducer: t,
                                brandState: e,
                                unHover: x,
                                defImg: "tesla=Default.webp",
                                hoverImg: "tesla=hover.webp",
                                brand: "tesla",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                " absolute top-[100px] left-[160px] ai-m:top-[102px] ai-m:left-[130px]",
                              children: (0, s.jsx)(em, {
                                className: (0, a.cx)(" w-[60px] h-[60px] "),
                                brandStateReducer: t,
                                brandState: e,
                                unHover: x,
                                defImg: "chanel=Default.webp",
                                hoverImg: "chanel=hover.webp",
                                brand: "chanel",
                                condition:
                                  e.hovered && "chanel" === e.brand
                                    ? "hover"
                                    : "default",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                " absolute top-[100px] left-[0px]  ai-m:top-[179px] ai-m:left-[46px]",
                              children: (0, s.jsx)(em, {
                                className: (0, a.cx)(" w-[60px] h-[60px] "),
                                brandStateReducer: t,
                                brandState: e,
                                playAgain: l,
                                unHover: x,
                                defImg: "lego=Default.webp",
                                hoverImg: "lego=hover.webp",
                                brand: "lego",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                " absolute top-[200px] left-[0px] ai-m:top-[240px] ai-m:left-[163px]",
                              children: (0, s.jsx)(em, {
                                className: (0, a.cx)(" w-[60px] h-[60px] "),
                                brandStateReducer: t,
                                brandState: e,
                                playAgain: l,
                                unHover: x,
                                defImg: "mcdonalds=Default.webp",
                                hoverImg: "mcdonalds=hover.webp",
                                brand: "md",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                " absolute top-[200px] left-[160px]  ai-m:top-[164px] ai-m:left-[223px]",
                              children: (0, s.jsx)(em, {
                                className: (0, a.cx)(" w-[60px] h-[60px] "),
                                brandStateReducer: t,
                                brandState: e,
                                playAgain: l,
                                unHover: x,
                                defImg: "netflix=Default.webp",
                                hoverImg: "netflix=hover.webp",
                                brand: "netflix",
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            " relative flex flex-row  w-[100%]  ai-m:hidden h-[260px] min-[500px]:h-[300px] ai-m:h-[100%]  ",
                          style: { flex: 1 },
                          children: [
                            (0, s.jsx)("div", {
                              className: "w-[100%] min-w-[20px] h-[1px]",
                              style: { flex: 1 },
                            }),
                            (0, s.jsxs)("div", {
                              className: "w-[60px] flex flex-col ",
                              children: [
                                (0, s.jsx)(em, {
                                  className: (0, a.cx)(" w-[60px] h-[60px] "),
                                  brandStateReducer: t,
                                  brandState: e,
                                  playAgain: l,
                                  unHover: x,
                                  defImg: "nike=Default.webp",
                                  hoverImg: "nike=hover.webp",
                                  brand: "nike",
                                }),
                                (0, s.jsx)(em, {
                                  className: (0, a.cx)(
                                    " w-[60px] h-[60px] mt-[30px] "
                                  ),
                                  brandStateReducer: t,
                                  brandState: e,
                                  playAgain: l,
                                  unHover: x,
                                  defImg: "tesla=Default.webp",
                                  hoverImg: "tesla=hover.webp",
                                  brand: "tesla",
                                }),
                                (0, s.jsx)(em, {
                                  className: (0, a.cx)(
                                    " w-[60px] h-[60px] mt-[30px] "
                                  ),
                                  brandStateReducer: t,
                                  brandState: e,
                                  playAgain: l,
                                  unHover: x,
                                  defImg: "chanel=Default.webp",
                                  hoverImg: "chanel=hover.webp",
                                  brand: "chanel",
                                  condition:
                                    e.hovered && "chanel" === e.brand
                                      ? "hover"
                                      : "default",
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: "w-[100%] min-w-[20px]",
                              style: { flex: 1 },
                            }),
                            (0, s.jsxs)("div", {
                              className: "w-[60px] flex flex-col",
                              children: [
                                (0, s.jsx)(em, {
                                  className: (0, a.cx)(" w-[60px] h-[60px] "),
                                  brandStateReducer: t,
                                  brandState: e,
                                  playAgain: l,
                                  unHover: x,
                                  defImg: "lego=Default.webp",
                                  hoverImg: "lego=hover.webp",
                                  brand: "lego",
                                }),
                                (0, s.jsx)(em, {
                                  className: (0, a.cx)(
                                    " w-[60px] h-[60px] mt-[30px] "
                                  ),
                                  brandStateReducer: t,
                                  brandState: e,
                                  playAgain: l,
                                  unHover: x,
                                  defImg: "mcdonalds=Default.webp",
                                  hoverImg: "mcdonalds=hover.webp",
                                  brand: "md",
                                }),
                                (0, s.jsx)(em, {
                                  className: (0, a.cx)(
                                    " w-[60px] h-[60px] mt-[30px] "
                                  ),
                                  brandStateReducer: t,
                                  brandState: e,
                                  playAgain: l,
                                  unHover: x,
                                  defImg: "netflix=Default.webp",
                                  hoverImg: "netflix=hover.webp",
                                  brand: "netflix",
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
          })
        );
      }
      function eu() {
        return (0, s.jsxs)("div", {
          className: (0, a.cx)(
            " flex flex-col justify-center items-center ",
            "w-screen py-[50px] ai-xs:py-[100px]  px-[20px]  ai-xs:px-[40px] "
          ),
          style: { flex: 1 },
          children: [
            (0, s.jsxs)("div", {
              className:
                " flex flex-row justify-center w-[100%] items-center flex-wrap ai-xl:flex-nowrap   ",
              style: {},
              children: [(0, s.jsx)(eh, {}), (0, s.jsx)(X, {})],
            }),
            (0, s.jsx)("div", {
              className:
                " flex flex-row justify-center mt-[40px] ai-xl:mt-[20px] w-[100%] ",
              children: (0, s.jsx)(ed, {}),
            }),
          ],
        });
      }
      var ef = i(47966),
        ev = i(91445);
      function ew(e) {
        let { className: t, hoverBtn: i = !1, width: n = 640 } = e;
        return (0, s.jsxs)("div", {
          className:
            "absolute  flex-col top-0 left-0 w-[100%]  h-[100%] justify-center items-center pointer-events-none ",
          style: {},
          children: [
            (0, s.jsx)("div", {
              className: " absolute left-0 top-0 w-[100%] h-[100%]  ",
              style: { zIndex: 3 },
              children: (0, s.jsx)(R.Z, {
                classNames: "AiEndBg",
                in: i,
                appear: !1,
                timeout: { enter: 400, exit: 400 },
                addEndListener: () => {},
                children: (0, s.jsx)("div", {
                  className: (0, a.cx)(
                    "AiEndBg absolute top-0 left-0 w-[100%] h-[100%]"
                  ),
                  style: { zIndex: 2 },
                  children: (0, s.jsx)("img", {
                    className: "w-[100%] h-[100%]",
                    src: (0, c.ji)("bgLast.webp"),
                    alt: "ai",
                    style: { objectFit: "cover" },
                  }),
                }),
              }),
            }),
            (0, s.jsx)("div", {
              className: (0, a.cx)(
                "absolute  bottom-0  w-[100%] h-[100%] overflow-clip  flex justify-center ",
                t
              ),
              style: { zIndex: "auto" },
              children: (0, s.jsx)("div", {
                className:
                  "absolute bottom-[989px] ai-sm:bottom-[473px] ai-sssm:bottom-[738px] w-[520px] ai-xs:w-[1549px] h-[520px] ai-xs:h-[1461px] border",
                style: {
                  zIndex: 4,
                  flexShrink: 0,
                  borderRadius: "100%",
                  opacity: 0.4,
                  mixBlendMode: "luminosity",
                  border: n > 440 ? "1px solid #FFF" : "0px solid transparent",
                  rotate: "180deg",
                  background:
                    "radial-gradient(60.42% 60.42% at 50.02% 60.42%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 69.42%, rgba(255, 255, 255, 0.08) 75.33%, rgba(255, 255, 255, 0.13) 80.42%, rgba(255, 255, 255, 0.31) 86.39%, rgba(255, 255, 255, 0.57) 92.19%, #FFF 100%)",
                  boxShadow: "0px -20px 40px 0px rgba(255, 255, 255, 0.60)",
                },
              }),
            }),
            (0, s.jsx)("div", {
              className: (0, a.cx)(
                " flex bg-shadow absolute left-0 top-0 w-[100%] h-[400px] justify-center"
              ),
              style: { zIndex: 4 },
              children: (0, s.jsx)(o.Ee, {
                className: (0, a.cx)(),
                src: (0, c.ji)("bgLastShadow.webp"),
                alt: "",
              }),
            }),
          ],
        });
      }
      function eg(e) {
        let { className: t } = e,
          [i, n] = (0, r.useState)(!1),
          [l, x] = (0, r.useState)(640);
        return (
          (0, r.useEffect)(() => {
            let e = () => {
              x(window.innerWidth);
            };
            return (
              window.addEventListener("resize", e),
              e(),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, r.useEffect)(() => {
            if (l < 640) return;
            function e(e, t) {
              return Math.floor(Math.random() * t) + e;
            }
            function t(t, s, a) {
              let n = i ? 0.05 : 1;
              for (let i = 0; i < s; i += 1) {
                let i = document.createElement("img");
                i.classList.add("end-star", "absolute"),
                  (i.src = (0, c.ji)("bg-star.png")),
                  (i.style.left = "calc(".concat(e(1, 99), "%)")),
                  (i.style.top = "calc(".concat(e(5, 95), "% )")),
                  (i.style.width = "".concat(12 + 6 * t, "px")),
                  (i.style.height = "".concat(12 + 6 * t, "px")),
                  (i.style.animationName = "star-moves, star-loops"),
                  (i.style.animationIterationCount = "infinite"),
                  (i.style.animationTimingFunction = "linear"),
                  (i.style.animationFillMode = "forwards"),
                  (i.style.animationDuration = ""
                    .concat(e(80 * n, 280 * n), "s, ")
                    .concat(e(4, 10), "s")),
                  (i.style.zIndex = "990"),
                  null == a || a.appendChild(i);
              }
            }
            let s = document.querySelector(".endbg");
            if (null != s) {
              let a = s.querySelectorAll(".end-star");
              if (a.length > 0)
                for (let t = 0; t < a.length; t += 1) {
                  let s = i ? 0.3 : 1,
                    n = a[t];
                  n instanceof HTMLElement &&
                    (n.style.animationDuration = ""
                      .concat(e(80 * s, 280 * s), "s, ")
                      .concat(e(4, 10), "s"));
                }
              else
                window.innerWidth <= 640
                  ? (t(1, 8, s), t(2, 4, s), t(3, 2, s))
                  : (t(1, 32, s), t(2, 16, s), t(3, 8, s));
            }
          }, [i, l]),
          (0, s.jsxs)("div", {
            className:
              " flex relative flex-col justify-center items-center top-0 left-0 w-screen  overflow-hidden",
            children: [
              (0, s.jsx)("div", {
                className:
                  "endbg-div absolute top-0 left-0 w-screen h-full z-0 overflow-clip ",
                style: { display: i ? "block" : "none", zIndex: 4 },
                children: (0, s.jsx)("div", {
                  className: " endbg relative w-[100%] h-[100%] bottom-[450px]",
                }),
              }),
              (0, s.jsx)("div", {
                className: (0, a.cx)(
                  "relative flex flex-col justify-center items-center mt-[100px]",
                  "w-screen max-w-[1440px] ",
                  t
                ),
                children: (0, s.jsxs)("div", {
                  className:
                    "relative flex flex-col justify-center items-center z-10",
                  children: [
                    (0, s.jsxs)("div", {
                      className: (0, a.cx)(
                        "flex flex-col items-center justify-center"
                      ),
                      children: [
                        (0, s.jsx)("div", {
                          className:
                            "w-[344px] ai-xs:w-[100%] ai-xs:max-w-[440px]  ai-sm:max-w-[601px]  ai-lg:w-[749px] mt-[60px] ai-xs:mt-[200px] text-[36px] ai-dt:text-[48px]  font-bold ai-xs:font-semibold   text-center ",
                          style: { lineHeight: "120%" },
                          children:
                            "Your next big idea's just one prompt away.",
                        }),
                        (0, s.jsx)("div", {
                          className:
                            "w-[100%] flex flex-row justify-center items-center  mt-[40px] ai-xs:mt-[48px]   ",
                          style: {},
                          children: (0, s.jsx)("div", {
                            className: "w-[800px] overflow-hidden",
                            children: (0, s.jsx)("div", {
                              className:
                                "flex flex-row w-[800px] justify-center items-center gap-[50px] text-[20px] leading-[28px]  ",
                              style: {
                                alignItems: "flex-start",
                                maskMode: "alpha",
                                maskImage:
                                  "linear-gradient(270deg, rgba(255, 255, 255, 0.00) 0%, #FFF 51.42%, rgba(255, 255, 255, 0.00) 100%)",
                              },
                              children: (0, s.jsxs)("div", {
                                className:
                                  "text-scoll flex flex-row w-[800px] overflow-visible",
                                style: {
                                  gap: "50px",
                                  fontWeight: 400,
                                  lineHeight: "28px",
                                  flexShrink: 0,
                                  alignItems: "flex-start",
                                },
                                children: [
                                  (0, s.jsx)("span", {
                                    children: "Unlimited Projects",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "No credit card required",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "Publish for free",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "120 free credits",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "Custom AI copy",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "80+ design styles",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "Free dora.run domain",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "Unlimited Projects",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "No credit card required",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "Publish for free",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "120 free credits",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "Custom AI copy",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "80+ design styles",
                                  }),
                                  (0, s.jsx)("span", {
                                    children: "Free dora.run domain",
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, s.jsx)(R.Z, {
                      classNames: "tran-end-button",
                      in: i,
                      timeout: { enter: 500, exit: 500 },
                      onEntered: () => {},
                      children: (0, s.jsx)(o.rU, {
                        href: "".concat(ev.ZP.homeLink, "/signup/ai"),
                        target: "_blank",
                        className: " mt-[40px] ai-xs:mt-[48px] ",
                        children: (0, s.jsx)("div", {
                          className: "  relative ",
                          children: (0, s.jsx)("div", {
                            style: {
                              transformStyle: "preserve-3d",
                              perspective: "800px",
                              padding: "20px",
                            },
                            onMouseEnter: () => {
                              n(!0);
                            },
                            onMouseLeave: () => {
                              let e = document.querySelector(".ai-end-button");
                              setTimeout(() => {
                                e instanceof HTMLElement &&
                                  (e.style.transform = "rotateY(".concat(
                                    0,
                                    "deg) rotateX(",
                                    0,
                                    "deg)"
                                  ));
                              }, 1),
                                n(!1);
                            },
                            onMouseMove: (e) => {
                              !(function (e) {
                                let t =
                                  document.querySelector(".ai-end-button");
                                if (t instanceof HTMLElement) {
                                  var i;
                                  t.style.transition =
                                    "transform 0.1s 0s ease-in-out";
                                  let s =
                                      e.currentTarget.getBoundingClientRect(),
                                    a = {
                                      x:
                                        Math.round(
                                          (i =
                                            e.currentTarget.getBoundingClientRect())
                                            .width / 2
                                        ) + Math.round(i.left),
                                      y:
                                        Math.round(i.height / 2) +
                                        Math.round(i.top),
                                      hw: Math.round(i.width / 2),
                                      hh: Math.round(i.height / 2),
                                    },
                                    n = Math.round(e.clientX),
                                    r = Math.round(e.clientY),
                                    l = a.x - n,
                                    o = n - s.left,
                                    c = r - s.top,
                                    x = a.y - r,
                                    d = document.querySelector(".endbg-div"),
                                    p =
                                      document.querySelector(
                                        ".end-button-glows"
                                      );
                                  p instanceof HTMLElement &&
                                    ((p.style.left = "".concat(
                                      o - 120.5,
                                      "px"
                                    )),
                                    (p.style.top = "".concat(c - 120.5, "px"))),
                                    null != d &&
                                      d instanceof HTMLElement &&
                                      ((d.style.left = "".concat(
                                        o - s.width / 2,
                                        "px"
                                      )),
                                      (d.style.top = "".concat(
                                        c - s.height / 2,
                                        "px"
                                      )));
                                  let m = l / a.hw,
                                    h = x / a.hh;
                                  setTimeout(() => {
                                    t.style.transform = "rotateY("
                                      .concat(-15 * m, "deg) rotateX(")
                                      .concat(15 * h, "deg)");
                                  }, 1);
                                }
                              })(e);
                            },
                            onMouseOver: () => {},
                            children: (0, s.jsx)("div", {
                              className:
                                " ai-end-button relative h-[83px] ai-xs:h-[93.16px] ai-sm:h-[145.53px]  w-[300px] ai-xs:w-[361.58px] ai-sm:w-[564.85px]  ",
                              style: { zIndex: 1 },
                              children: (0, s.jsx)("div", {
                                className: "",
                                children: (0, s.jsxs)("div", {
                                  className: " h-[100%] w-[100%] ",
                                  onMouseEnter: () => {},
                                  onMouseLeave: () => {},
                                  style: {
                                    transform: i ? "scale(1.07)" : "scale(1)",
                                    transition: "all 0.3s ease-in-out",
                                  },
                                  children: [
                                    (0, s.jsxs)(g, {
                                      children: [
                                        l < 640 &&
                                          (0, s.jsx)("div", {
                                            className: "",
                                            children: (0, s.jsx)(o.Ee, {
                                              src: (0, c.ji)("get-started.png"),
                                              alt: "",
                                            }),
                                          }),
                                        l >= 640 &&
                                          (0, s.jsxs)("div", {
                                            className:
                                              "end-get-started flex flex-row items-center justify-center h-[100%] w-[100%] ",
                                            style: {
                                              borderRadius: "353.31px",
                                              border:
                                                "3.533px solid rgba(255, 255, 255, 0.20)",
                                            },
                                            children: [
                                              (0, s.jsx)(o.Ee, {
                                                className:
                                                  " absolute top-0 left-0  h-[100%] w-[100%]  ",
                                                src: (0, c.ji)(
                                                  "get-started-big.png"
                                                ),
                                                style: {
                                                  borderRadius: "353.31px",
                                                  border:
                                                    "3.533px solid rgba(255, 255, 255, 0.20)",
                                                  opacity: i ? 0 : 1,
                                                },
                                                alt: "",
                                              }),
                                              (0, s.jsx)("div", {
                                                className:
                                                  " absolute flex flex-col items-center justify-center h-[100%] w-[100%]",
                                                style: {
                                                  background: "#3E43A5",
                                                  borderRadius: "353.31px",
                                                  border:
                                                    "3.533px solid rgba(255, 255, 255, 0.10)",
                                                  opacity: i ? 1 : 0,
                                                },
                                              }),
                                              (0, s.jsxs)("div", {
                                                className:
                                                  "flex flex-row items-center justify-center py-[28px]   h-[83px] ai-sm:h-[145.53px] w-[300px] ai-sm:w-[560.85px] ",
                                                style: { zIndex: "2" },
                                                children: [
                                                  (0, s.jsx)("p", {
                                                    style: {
                                                      color: "#fff",
                                                      fontFamily: "Poppins",
                                                      fontSize:
                                                        l > 640
                                                          ? "64px"
                                                          : "41px",
                                                      fontStyle: "normal",
                                                      fontWeight: "500",
                                                      lineHeight: "88px",
                                                      maxLines: "1",
                                                    },
                                                    children: "Get Started",
                                                  }),
                                                  (0, s.jsx)(o.Ee, {
                                                    className:
                                                      "w-[42px] h-[35px] ml-[28px]",
                                                    src: (0, c.ji)(
                                                      "buttom-arrow.svg"
                                                    ),
                                                    alt: "",
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "  absolute top-0 left-0 h-[100%] w-[100%] overflow-clip   pointer-events-none   ",
                                      style: {
                                        borderRadius: "353.31px",
                                        display: i ? "block" : "none",
                                      },
                                      children: (0, s.jsx)("div", {
                                        className:
                                          " end-button-glows  relative top-[0px] left-[0px] w-[241px] h-[241px]  pointer-events-none ",
                                        style: {
                                          background:
                                            "radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0.24) 0%, rgba(255, 255, 255, 0.00) 100%)",
                                          backgroundClip: "content-box",
                                        },
                                        children: " ",
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, s.jsxs)("div", {
                className: " relative w-screen  flex justify-center  ",
                style: { zIndex: 10 },
                children: [
                  (0, s.jsx)(ef.HomepageFooterAi, {}),
                  (0, s.jsx)(ef.HomepageFooterAiPhone, {}),
                  (0, s.jsx)(ef.HomepageFooterAiPhonSmall, {}),
                ],
              }),
              (0, s.jsx)(ew, { hoverBtn: i, width: l }),
            ],
          })
        );
      }
      function ej(e) {
        let { title: t, content: i, className: n } = e,
          [l, o] = (0, r.useState)("rgba(255, 255, 255, 0.20)"),
          [x, d] = (0, r.useState)(!1),
          [p, m] = (0, r.useState)(0);
        return (0, s.jsxs)("div", {
          className: (0, a.cx)(
            " flex flex-col w-[100%] py-[24px]   pl-[40px]  pr-[40px]  cursor-pointer",
            n
          ),
          style: { backgroundColor: l, borderRadius: "16px" },
          onMouseEnter: () => {
            o("rgba(255, 255, 255, 0.10)");
          },
          onMouseLeave: () => {
            o("rgba(255, 255, 255, 0.20)");
          },
          onClick: (e) => {
            m(e.currentTarget.querySelector(".faq-content").scrollHeight),
              d(!x);
          },
          children: [
            (0, s.jsxs)("div", {
              className:
                "flex flex-row  w-[100%] justify-center items-center overflow-visible",
              children: [
                (0, s.jsx)("p", {
                  className:
                    "w-[100%]  font-poppins text-[#FFF] text-[16px] ai-sm:text-[24px] pr-[24px]",
                  style: {
                    fontWeight: "400",
                    textAlign: "start",
                    lineHeight: "120%",
                    fontStyle: "normal",
                    flex: 1,
                  },
                  children: t,
                }),
                (0, s.jsxs)("div", {
                  className: " relative flex flex-col   justify-center ",
                  children: [
                    (0, s.jsx)("img", {
                      className: "w-[16px] h-[16px] ",
                      src: (0, c.ji)("open.svg"),
                      alt: "",
                    }),
                    (0, s.jsx)("img", {
                      className: "w-[16px] h-[16px]  absolute top-0 left-0",
                      src: (0, c.ji)("open.svg"),
                      alt: "",
                      style: {
                        rotate: x ? "0deg" : "90deg",
                        transition: "rotate 0.2s linear",
                      },
                    }),
                  ],
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "",
              style: {
                height: x ? "".concat(p, "px") : 0,
                overflow: "hidden",
                transition: "height 0.2s linear",
              },
              children: (0, s.jsx)("div", {
                className:
                  " faq-content w-[100%] font-poppins text-[#ccc] text-[12px] ai-sm:text-[16px] pt-[24px]  ",
                style: { fontWeight: "400", fontStyle: "normal" },
                children: i,
              }),
            }),
          ],
        });
      }
      function eb(e) {
        let { className: t } = e;
        return (0, s.jsxs)("div", {
          className: (0, a.cx)(
            "flex flex-col justify-center items-center ai-xs:pt-[100px] pt-[50px] px-[20px] ai-xs:px-[40px] w-screen  ",
            " ",
            t
          ),
          style: {},
          children: [
            (0, s.jsxs)("div", {
              id: "tag-faq",
              className: (0, a.cx)(
                "flex flex-col items-center justify-center text-center w-[100%] px-[0px] ai-xs:px-[20px]"
              ),
              children: [
                (0, s.jsx)(k, { className: "text-center", children: "FAQ" }),
                (0, s.jsxs)(C, {
                  className:
                    "relative text-center pt-[8px] ai-sm:pt-[16px] max-w-[658px]",
                  children: [
                    "Got questions? ",
                    (0, s.jsx)("br", {}),
                    "Join the community.",
                  ],
                }),
                (0, s.jsxs)(F, {
                  className:
                    "text-center mt-[8px] ai-sm:mt-[16px] max-w-[625px]",
                  children: [
                    "Our Discord community and staff are here to help!",
                    (0, s.jsx)("br", {}),
                    "Your feedback will help Dora AI improve in future versions.",
                  ],
                }),
              ],
            }),
            (0, s.jsx)(o.rU, {
              href: "https://s.dora.run/dora-discord",
              target: "_blank",
              style: { transition: "all 0.8s" },
              className:
                "  hover:shadow-[0_0px_20px_0px_#FFFFFF_inset] shadow-[0_0px_2px_0px_#FFFFFF_inset] w-[156px] h-[41px] flex flex-row items-center justify-center gap-[8px]  mt-[24px] ai-xs:mt-[40px] rounded-[56px] border border-white/20 overflow-clip",
              children: (0, s.jsxs)("div", {
                className:
                  "  w-[100%] h-[100%] flex flex-row items-center justify-center gap-[8px]  bg-white/10",
                style: {},
                children: [
                  (0, s.jsx)("span", {
                    className: " text-[16px] font-medium",
                    children: "Join Discord",
                  }),
                  (0, s.jsx)(o.Ee, {
                    src: (0, c.ji)("arrow-right.png"),
                    width: 13,
                    height: 16,
                    alt: "",
                  }),
                ],
              }),
            }),
            (0, s.jsx)("div", {
              className: "w-[100%] ai-xs:max-w-[640px] ai-xl:max-w-[800px]  ",
              children: (0, s.jsx)("div", {
                className: "w-[100%] flex flex-row",
                children: (0, s.jsxs)("div", {
                  className:
                    " w-[10px] mt-[40px]  ai-sm:mt-[80px]  flex flex-col justify-center items-center ",
                  style: { flex: 1 },
                  children: [
                    (0, s.jsx)(ej, {
                      title: "How do I activate Dora AI?",
                      content: (0, s.jsxs)("p", {
                        children: [
                          "Dora AI is available to all users. Just click the",
                          (0, s.jsx)(o.Ee, {
                            className: " inline-block mx-[8px]",
                            src: (0, c.ji)("ai_mini_logo.webp"),
                            width: 28,
                            height: 28,
                            style: { verticalAlign: "middle" },
                            alt: "",
                          }),
                          "button on the top toolbar to start prompting!",
                        ],
                      }),
                    }),
                    (0, s.jsx)(ej, {
                      className: "mt-[24px]",
                      title: "How is Dora AI different from other AI tools?",
                      content: (0, s.jsxs)("p", {
                        children: [
                          "Existing AI website tools rely on predefined templates to swap generated copy and images, without real knowledge of design principles.",
                          (0, s.jsx)("br", {}),
                          (0, s.jsx)("br", {}),
                          "By contrast, each Dora AI site is realized from beginning to end with AI, from copy to composition to visual identity. No templates, no pre-defined layouts.",
                          (0, s.jsx)("br", {}),
                          (0, s.jsx)("br", {}),
                          "As a result, Dora AI builds truly custom sites. Listening and learning from your needs, it has the flexibility to create infinite possibilities for layout, styles, and content from just one prompt.",
                        ],
                      }),
                    }),
                    (0, s.jsx)(ej, {
                      className: " mt-[24px] mb-[10px]",
                      title: "How much usage is included with my Dora AI plan?",
                      content: (0, s.jsxs)("p", {
                        children: [
                          "Every Dora account has a base credit balance of 120 credits. Use these free credits to generate sites accordingly.",
                          (0, s.jsx)("br", {}),
                          (0, s.jsx)("br", {}),
                          "You can also purchase a Dora plan to obtain more credits.",
                          (0, s.jsx)(o.rU, {
                            target: "_blank",
                            href: "https://www.dora.run/pricing",
                            style: {
                              textDecoration: "underline",
                              marginLeft: "5px",
                            },
                            className: " pointer-events-auto",
                            onClick: (e) => {
                              e.stopPropagation();
                            },
                            children: "See Pricing",
                          }),
                        ],
                      }),
                    }),
                    (0, s.jsx)(ej, {
                      className: " mt-[24px] mb-[10px]",
                      title:
                        "Can Dora AI generate 3D assets or site animations?",
                      content: (0, s.jsxs)("p", {
                        children: [
                          "AI-generated 3D and animations are central to Dora AI and are currently under development for",
                          " ",
                          (0, s.jsx)("a", {
                            className: "underline",
                            href: "https://s.dora.run/ai-roadmap",
                            target: "_blank",
                            children: "future versions.",
                          }),
                          (0, s.jsx)("br", {}),
                          (0, s.jsx)("br", {}),
                          "AI generation of 3D assets and keyframe animations have proven to be some of the most challenging feats in the AIGC space. However, the Dora AI team is embracing this challenge and determined to create a viable way to expand the applications of AI.",
                        ],
                      }),
                    }),
                  ],
                }),
              }),
            }),
          ],
        });
      }
      function ey(e) {
        let { icon: t, title: i, subtitle: a } = e;
        return (0, s.jsxs)("div", {
          className:
            "flex flex-row items-center bg-white/20 rounded-[16px] mt-[32px] min-h-[100px] pl-[20px] pr-[20px]",
          children: [
            (0, s.jsx)("div", {
              className:
                "w-[60px] h-[60px] min-w-[60px] bg-white/20 rounded-[60px] mr-[20px] flex flex-row items-center justify-center",
              children: (0, s.jsx)(d(), {
                width: "36",
                height: "36",
                src: t,
                alt: i,
              }),
            }),
            (0, s.jsxs)("div", {
              className: "grow flex flex-col",
              children: [
                (0, s.jsx)("div", {
                  className:
                    "font-medium text-[16px] leading-[25px] ai-xs:text-[24px] ai-xs:leading-[28.8px] mb-[4px]",
                  children: i,
                }),
                (0, s.jsx)("div", {
                  className:
                    "font-normal text-[12px] leading-[18px] ai-xs:text-[16px] ai-xs:leading-[24px] opacity-50",
                  children: a,
                }),
              ],
            }),
          ],
        });
      }
      function eN() {
        return (0, s.jsx)("div", {
          className:
            "section-left flex flex-col justify-center ai-xl:w-[600px] w-[100%] h-[100%]",
          children: (0, s.jsxs)("div", {
            className:
              "w-[100%] h-[100%] pl-[50px] ai-xs:pl-0 ai-sm:pl-[74px] relative",
            children: [
              (0, s.jsx)("div", {
                className:
                  "absolute ai-xs:max-ai-sm:hidden ai-sm:absolute w-[40px] ai-xs:w-[59px] h-[573px] top-0 left-0 flex",
                children: (0, s.jsx)("div", {
                  className: "relative w-[100%] h-[573px] overflow-clip",
                  children: (0, s.jsx)("div", {
                    className: "absolute top-0 left-0 w-[59px] h-[573px]",
                    children: (0, s.jsx)(d(), {
                      width: "59",
                      height: "573",
                      src: (0, c.ji)("ai-roadmap-progress.png"),
                      alt: "",
                    }),
                  }),
                }),
              }),
              (0, s.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, s.jsxs)("div", {
                    className: "flex flex-row items-center font-semibold",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "bg-white text-[16px] text-black w-[87px] h-[34px] leading-[34px]  text-center font-medium rounded-[10px] mr-[13px]",
                        children: "Shipped",
                      }),
                      " ",
                      (0, s.jsx)("div", { children: "in Beta" }),
                    ],
                  }),
                  (0, s.jsx)(ey, {
                    icon: (0, c.ji)("to-website.png"),
                    title: "Text to website",
                    subtitle: "The first, but hardest step!",
                  }),
                  (0, s.jsxs)("div", {
                    className:
                      "flex flex-row items-center mt-[48px] font-semibold",
                    children: [
                      (0, s.jsx)("div", {
                        className:
                          "bg-white/20 text-[16px] pl-[10px] pr-[10px] h-[34px] leading-[34px]  text-center font-medium rounded-[10px] mr-[13px]",
                        children: "In progress",
                      }),
                      (0, s.jsx)("div", { children: "for 1.0" }),
                    ],
                  }),
                  (0, s.jsx)(ey, {
                    icon: (0, c.ji)("generate-3d.png"),
                    title: "AI-generated 3D",
                    subtitle: "Generate true 3D sites with 3D assets.",
                  }),
                  (0, s.jsx)(ey, {
                    icon: (0, c.ji)("ai-animation.png"),
                    title: "AI-generated animations",
                    subtitle: "Generation of interactive site animations.",
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "flex flex-row text-[16px] leading-[25px] items-center bg-white/20 rounded-[10px] mt-[32px] pt-[11.5px] pb-[11.5px] pl-[20px]",
                    children: (0, s.jsxs)("div", {
                      children: [
                        (0, s.jsx)("span", {
                          className: "opacity-50",
                          children: "... and much more!",
                        }),
                        " ",
                        (0, s.jsx)("a", {
                          className: "underline inline-block",
                          href: "https://s.dora.run/ai-roadmap",
                          target: "_blank",
                          children: "See full roadmap",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function eE() {
        let [e, t] = (0, r.useState)(640);
        return (
          (0, r.useEffect)(() => {
            let e = () => {
              t(window.innerWidth);
            };
            return (
              window.addEventListener("resize", e),
              e(),
              () => {
                window.removeEventListener("resize", e);
              }
            );
          }, []),
          (0, s.jsxs)("div", {
            id: "roadmap",
            className: (0, a.cx)(
              "relative flex flex-col items-center justify-center  w-screen"
            ),
            children: [
              (0, s.jsx)("div", {
                className: "z-0 absolute h-[100%] w-[100%] ",
                style: { zIndex: 1 },
                children: (0, s.jsx)("div", {
                  className: "h-[1200px] w-[100%]",
                  style: {
                    background:
                      "linear-gradient(180deg, \n            rgba(0, 0, 0, 1.0) 0%, \n            rgba(0, 0, 0, 0.0) 10%,\n            rgba(0, 0, 0, 0.0) 100%), url(".concat(
                        (0, c.ji)("bg-first.webp"),
                        ") no-repeat center"
                      ),
                    backgroundSize: "100% 100%",
                    flexShrink: 0,
                  },
                }),
              }),
              (0, s.jsxs)("div", {
                className:
                  " flex flex-col items-center justify-center  w-screen   ai-xs:py-[100px] py-[50px]    ",
                style: { zIndex: 2 },
                children: [
                  (0, s.jsxs)("div", {
                    id: "tag-roadmap",
                    className: (0, a.cx)(
                      "flex flex-col items-center justify-center pl-[20px] pr-[20px] ai-xs:pl-[40px] ai-xs:pr-[40px]"
                    ),
                    children: [
                      (0, s.jsx)(k, {
                        className: "text-center",
                        children: "Roadmap",
                      }),
                      (0, s.jsx)(C, {
                        className:
                          "relative text-center pt-[8px] ai-sm:pt-[16px] max-w-[658px]",
                        children: "The tool that evolves and grows with you.",
                      }),
                      (0, s.jsx)(F, {
                        className:
                          "text-center mt-[8px] ai-sm:mt-[16px] max-w-[625px]",
                        children:
                          "Dora AI is still in beta, but has immense potential for emergent behavior and self-evolution. Below are features currently in development for future versions:",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "get-start items-center mt-[24px] ai-sm:mt-[40px] z-10",
                    children: (0, s.jsx)(L, { title: "Get Started" }),
                  }),
                  (0, s.jsx)("div", {
                    className:
                      "w-[100%] px-[20px] ai-xs:px-[40px]  flex justify-center",
                    children: (0, s.jsx)("div", {
                      className:
                        "  w-[100%]  ai-xs:max-w-[640px]  ai-xl:max-w-[100%]   ",
                      children: (0, s.jsxs)("div", {
                        className:
                          " relative flex flex-col ai-xl:flex-row justify-center  mt-[40px] ai-sm:mt-[80px]  ",
                        children: [
                          (0, s.jsx)("div", {
                            className: "ai-xl:w-[600px]",
                            children: (0, s.jsx)(eN, {}),
                          }),
                          (0, s.jsx)("div", {
                            className:
                              "hidden ai-xl:block min-w-[40px]  max-w-[80px]",
                            style: { flex: 1 },
                          }),
                          (0, s.jsxs)("div", {
                            className:
                              "flex flex-col-reverse ai-xl:flex-col justify-center ai-xl:max-w-[460px] ai-xl:min-w-[420px]  ",
                            style: {},
                            children: [
                              (0, s.jsxs)("div", {
                                className:
                                  " w-[100%] mt-[18px] ai-xs:mt-[40px] ai-xl:mt-0  text-center text-[12px] ai-sm:text-[16px]  ",
                                style: { fontWeight: 400 },
                                children: [
                                  "Your support is vital.",
                                  (0, s.jsx)("br", {}),
                                  "With every subscription, you fund the R&D of Dora AI.",
                                ],
                              }),
                              (0, s.jsxs)("div", {
                                className:
                                  " relative h-[320px] ai-xs:h-[440px] ai-xl:h-[526px] w-[100%]  mt-[20px] ai-xs:mt-[40px] ai-xl:mt-[18px]  overflow-clip  justify-center  items-center flex",
                                style: { borderRadius: "30px" },
                                children: [
                                  (0, s.jsx)("video", {
                                    className: "roadmap-video   h-[100%]   ",
                                    style: { objectFit: "cover" },
                                    muted: !0,
                                    loop: !0,
                                    autoPlay: !0,
                                    playsInline: !0,
                                    children: (0, s.jsx)("source", {
                                      src: (0, c.ji)("show/show-2.mp4"),
                                      type: "video/mp4",
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className:
                                      "  absolute top-0 left-0 w-[100%] h-[100%] pointer-events-none  ",
                                    style: {
                                      boxShadow:
                                        "0px 0px 20px 0px rgba(255, 255, 255, 0.04), 2px 2px 20px 0px rgba(255, 255, 255, 0.30) inset",
                                      borderRadius: "30px",
                                    },
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      function e_(e) {
        let {
          className: t,
          title: i,
          description: n,
          active: r,
          onClick: l,
        } = e;
        return (0, s.jsxs)("div", {
          className: (0, a.cx)(
            t,
            "flex flex-col sub-item-title",
            r ? "opacity-100" : "ai-dt:opacity-20",
            "pointer-hand"
          ),
          onClick: l,
          children: [
            (0, s.jsx)("div", {
              className:
                "font-poppins text-[16px] ai-xs:text-[24px] font-semibold leading-[25px] ai-xs:leading-[28px]",
              children: i,
            }),
            (0, s.jsx)("div", {
              className: (0, a.cx)(
                "mt-[4px] opacity-60 ai-dt:opacity-50 font-poppins text-[12px] ai-xs:text-[16px] font-normal leading-normal ai-xs:leading-[24px] sub-item-desc"
              ),
              children: n,
            }),
          ],
        });
      }
      function eS(e) {
        let { className: t, currentActive: i, playNext: n } = e;
        return (0, s.jsx)("div", {
          id: "pipeline",
          className: (0, a.cx)(
            t,
            "flex flex-col ai-pipeline",
            "ai-dt:w-[440px] ai-dt:h-[800px] opacity-1 ai-dt:opacity-0 relative"
          ),
          children: (0, s.jsxs)("div", {
            className:
              "how-it-works opacity-1 ai-sm:opacity-1 flex flex-col items-start relative",
            children: [
              (0, s.jsx)(k, {
                id: "tag-overview",
                className: "mb-[8px] ai-sm:mb-[16px] hidden ai-dt:block",
                children: "AI Pipeline",
              }),
              (0, s.jsx)(C, {
                className:
                  "px-[29px] ai-sm:px-0 ai-sm:max-w-[342px] hidden ai-dt:block",
                children: "Building sites, end-to-end.",
              }),
              (0, s.jsxs)("div", {
                className: "flex flex-row ai-sm:mt-[40px] ai-dt:w-[400px]",
                children: [
                  (0, s.jsx)("div", {
                    className: "relative w-[0px] h-[315px] hidden ai-dt:block",
                    children: (0, s.jsx)("div", {
                      className: "absolute left-[-15px] top-0",
                      children: (0, s.jsxs)("div", {
                        className: "relative w-[29px] h-[315px]",
                        children: [
                          (0, s.jsx)("div", {
                            className:
                              "w-[2px] ml-[13px] h-[315px] bg-[#1F1F1F]",
                          }),
                          (0, s.jsx)("div", {
                            className: (0, a.cx)(
                              "absolute top-0 left-[9px] w-[10px] slider-bar"
                            ),
                            style: {
                              background:
                                "linear-gradient(0deg, #147BFF 0%, rgba(0, 0, 0, 0.00) 101.59%)",
                              filter: "blur(30px)",
                              height: "".concat(0, "px"),
                            },
                          }),
                          (0, s.jsx)("div", {
                            className: (0, a.cx)(
                              "absolute top-0 left-[9px] w-[10px] slider-bar"
                            ),
                            style: {
                              background:
                                "linear-gradient(0deg, rgba(255, 127, 65, 0.80) 0.03%, rgba(0, 0, 0, 0.00) 100%)",
                              filter: "blur(5px)",
                              height: "".concat(0, "px"),
                            },
                          }),
                          (0, s.jsx)("div", {
                            className: (0, a.cx)(
                              "absolute top-0 left-[13px] w-[2px] slider-bar"
                            ),
                            style: {
                              background:
                                "linear-gradient(180deg, #1A1D20 0%, #2A81EE 58.85%, #DBB1D5 79.17%, #FDD677 100%)",
                              height: "".concat(0, "px"),
                            },
                          }),
                          (0, s.jsx)("div", {
                            className: (0, a.cx)(
                              "absolute left-0 w-[29px] h-[29px] slider-star"
                            ),
                            style: { top: "".concat(-14, "px") },
                            children: (0, s.jsx)(o.Ee, {
                              width: 29,
                              height: 29,
                              src: (0, c.ji)("input-star.png"),
                              alt: "",
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, s.jsxs)("div", {
                    className: "flex flex-col gap-[24px] ai-dt:ml-[40px] px-0",
                    children: [
                      (0, s.jsx)(e_, {
                        active: 0 === i,
                        title: "Analyzing prompt...",
                        description:
                          "Dora AI helps determine the subject and style of your site.",
                        onClick: () => {
                          n(0);
                        },
                      }),
                      (0, s.jsx)(e_, {
                        active: 1 === i,
                        title: "Crafting designs...",
                        description:
                          "Next, it helps craft original images and copy within a responsive layout.",
                        onClick: () => {
                          n(1);
                        },
                      }),
                      (0, s.jsx)(e_, {
                        active: 2 === i,
                        title: "Tweak, iterate, publish!",
                        description:
                          "The site's generated — your turn to bring out the design chops.",
                        onClick: () => {
                          n(2);
                        },
                      }),
                    ],
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "mt-[40px] ai-dt:pl-[32px] pointer-event",
                children: (0, s.jsx)(L, { title: "Get Started" }),
              }),
            ],
          }),
        });
      }
      function eI(e) {
        let { showIframe: t } = e,
          i = {
            background: "url(".concat(
              (0, c.ji)("bg-first.webp"),
              ") no-repeat center"
            ),
            backgroundSize: "100% 100%",
            flexShrink: 0,
          };
        return (
          (0, r.useEffect)(() => {
            function e(e, t) {
              return Math.floor(Math.random() * t) + e;
            }
            function t(t, i) {
              let s = document.getElementById("hero-content");
              for (let a = 0; a < i; a += 1) {
                let i = document.createElement("img");
                i.classList.add("star", "absolute", "hero-star"),
                  (i.src = (0, c.ji)("bg-star.png")),
                  a % 2 == 0
                    ? (i.style.left = "".concat(e(1, 25), "%"))
                    : (i.style.left = "".concat(e(60, 99), "%")),
                  (i.style.bottom = "".concat(e(1, 99), "%")),
                  (i.style.width = "".concat(12 + 6 * t, "px")),
                  (i.style.height = "".concat(12 + 6 * t, "px")),
                  (i.style.animationName = "star-move, star-loop"),
                  (i.style.animationIterationCount = "infinite, infinite"),
                  (i.style.animationTimingFunction = "linear, linear"),
                  (i.style.animationDuration = ""
                    .concat(e(80, 280), "s, ")
                    .concat(e(4, 10), "s")),
                  (i.style.zIndex = "90"),
                  s.appendChild(i);
              }
            }
            window.innerWidth <= 640
              ? (t(1, 8), t(2, 4), t(3, 2))
              : (t(1, 16), t(2, 8), t(3, 4));
            let i = document.getElementById("watch-video");
            i.addEventListener("mousemove", (e) => {
              let t = i.getBoundingClientRect(),
                s = t.top,
                a = document.getElementById("watch-video-tips");
              (a.style.left = "".concat(e.clientX, "px")),
                (a.style.top = "".concat(s + t.height, "px"));
            }),
              i.addEventListener("mouseout", (e) => {
                document
                  .getElementById("watch-video-tips")
                  .classList.add("hidden");
              }),
              i.addEventListener("mouseenter", (e) => {
                document
                  .getElementById("watch-video-tips")
                  .classList.remove("hidden");
              }),
              (0, c.pt)((0, c.ji)("video-preview.webp"));
          }, []),
          (0, s.jsxs)("div", {
            className: "flex flex-col items-center",
            style: { width: "100%", zIndex: 100 },
            children: [
              (0, s.jsxs)("div", {
                className:
                  "relative w-screen h-[800px] ai-dt:h-[1600px] overflow-hidden",
                children: [
                  (0, s.jsx)("div", {
                    className:
                      "absolute animate-[hero-enter_2s_ease-out_1s_forwards] opacity-0 w-screen min-w-[1440px] h-[1020px]",
                    style: { left: "50%", transform: "translate(-50%, 0)" },
                    children: (0, s.jsx)("div", {
                      children: (0, s.jsx)("div", {
                        className: "w-screen min-w-[1440px] h-[1020px]",
                        style: i,
                      }),
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: (0, a.cx)(
                      "opacity-0 animate-[hero-enter_2s_ease-out_0.5s_forwards] absolute top-[216px] ai-dt:top-[184px] w-[1459px] h-[1461px]"
                    ),
                    style: { left: "50%", transform: "translate(-50%, 0%)" },
                    children: (0, s.jsx)("div", {
                      className: "w-[100%] h-[100%] relative",
                      style: {
                        transform: "rotate(180deg)",
                        zIndex: 4,
                        flexShrink: 0,
                        borderRadius: "100%",
                        opacity: 0.4,
                        mixBlendMode: "luminosity",
                        rotate: "180deg",
                        background:
                          "radial-gradient(60.42% 60.42% at 50.02% 60.42%, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.00) 69.42%, rgba(255, 255, 255, 0.08) 75.33%, rgba(255, 255, 255, 0.13) 80.42%, rgba(255, 255, 255, 0.31) 86.39%, rgba(255, 255, 255, 0.57) 92.19%, #FFF 100%)",
                        boxShadow:
                          "0px -20px 40px 0px rgba(255, 255, 255, 0.60)",
                      },
                      children: (0, s.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "1459",
                        height: "1461",
                        viewBox: "0 0 1459 1461",
                        fill: "none",
                        children: [
                          (0, s.jsx)("path", {
                            opacity: "0.4",
                            d: "M0.499936 730.5C0.499901 1133.67 326.885 1460.5 729.5 1460.5C1132.11 1460.5 1458.5 1133.67 1458.5 730.5C1458.5 327.331 1132.11 0.499971 729.5 0.499936C326.885 0.499901 0.499971 327.331 0.499936 730.5Z",
                            stroke: "url(#paint0_linear_3113_17586)",
                          }),
                          (0, s.jsx)("defs", {
                            children: (0, s.jsxs)("linearGradient", {
                              id: "paint0_linear_3113_17586",
                              x1: "729.5",
                              y1: "-6.37749e-05",
                              x2: "729.5",
                              y2: "1461",
                              gradientUnits: "userSpaceOnUse",
                              children: [
                                (0, s.jsx)("stop", { stopColor: "white" }),
                                (0, s.jsx)("stop", {
                                  offset: "1",
                                  stopColor: "white",
                                  stopOpacity: "0",
                                }),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: (0, a.cx)(
                      "absolute bottom-0 w-[100%] h-[720px]"
                    ),
                    style: {
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 10%, #000 100%)",
                    },
                  }),
                  (0, s.jsx)("div", {
                    className: (0, a.cx)(
                      "absolute bottom-0 w-[100%] h-[361px]"
                    ),
                    style: {
                      background:
                        "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, #000 100%)",
                    },
                  }),
                  (0, s.jsx)("div", {
                    id: "hero-content",
                    className: "absolute top-[137px] ai-dt:top-[104px] left-0",
                    style: { zIndex: 100 },
                    children: (0, s.jsxs)("div", {
                      className: (0, a.cx)(
                        "flex flex-col items-center justify-start",
                        "w-screen h-[800px] ai-sm:h-[1440px]"
                      ),
                      children: [
                        (0, s.jsxs)("div", {
                          className: "relative w-[162px] h-[162px]",
                          style: {
                            transformStyle: "preserve-3d",
                            perspective: "200px",
                            zIndex: 91,
                          },
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "ai-hero-logo w-[100%] h-[100%] animate-[hero-enter_2s_ease-out_1s_forwards] opacity-0 ai-logo",
                              style: { zIndex: 989 },
                              children: (0, s.jsx)(o.Ee, {
                                className: " w-[100%] h-[100%]",
                                src: (0, c.ji)("ai-logo.png"),
                                alt: "",
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                " absolute top-0 left-0 w-[162px] h-[162px] p-[25px]",
                              children: (0, s.jsx)("div", {
                                className: "ai-hero-log-div w-[100%] h-[100%]",
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "animate-[hero-enter_2s_ease-out_1s_forwards] opacity-0 relative text-[24px] font-[600]",
                          style: { transform: "translate(0, -32px)" },
                          children: [
                            "Dora AI",
                            (0, s.jsx)("div", {
                              className:
                                "absolute right-[-38px] top-0 flex flex-row items-center justify-center",
                              style: {},
                              children: (0, s.jsxs)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "34",
                                height: "16",
                                viewBox: "0 0 34 16",
                                fill: "none",
                                children: [
                                  (0, s.jsx)("rect", {
                                    width: "33.3333",
                                    height: "16",
                                    rx: "8",
                                    fill: "white",
                                    fillOpacity: "0.16",
                                  }),
                                  (0, s.jsx)("path", {
                                    opacity: "0.8",
                                    d: "M9.22595 8.18133C9.64551 8.25956 9.9904 8.46933 10.2606 8.81067C10.5308 9.152 10.666 9.54311 10.666 9.984C10.666 10.3822 10.5664 10.7342 10.3673 11.04C10.1753 11.3387 9.8944 11.5733 9.52462 11.744C9.15484 11.9147 8.71751 12 8.21262 12H5.00195V4.55467H8.07395C8.57884 4.55467 9.01262 4.63644 9.37528 4.8C9.74506 4.96356 10.0224 5.19111 10.2073 5.48267C10.3993 5.77422 10.4953 6.10489 10.4953 6.47467C10.4953 6.90844 10.378 7.27111 10.1433 7.56267C9.91573 7.85422 9.60995 8.06044 9.22595 8.18133ZM6.49528 7.62667H7.86062C8.21617 7.62667 8.48995 7.54844 8.68195 7.392C8.87395 7.22844 8.96995 6.99733 8.96995 6.69867C8.96995 6.4 8.87395 6.16889 8.68195 6.00533C8.48995 5.84178 8.21617 5.76 7.86062 5.76H6.49528V7.62667ZM7.99928 10.784C8.36195 10.784 8.64284 10.6987 8.84195 10.528C9.04817 10.3573 9.15128 10.1156 9.15128 9.80267C9.15128 9.48267 9.04462 9.23378 8.83128 9.056C8.61795 8.87111 8.32995 8.77867 7.96728 8.77867H6.49528V10.784H7.99928ZM17.3495 8.91733C17.3495 9.13067 17.3352 9.32267 17.3068 9.49333H12.9868C13.0223 9.92 13.1717 10.2542 13.4348 10.496C13.6979 10.7378 14.0215 10.8587 14.4055 10.8587C14.9601 10.8587 15.3548 10.6204 15.5895 10.144H17.2001C17.0295 10.7129 16.7023 11.1822 16.2188 11.552C15.7352 11.9147 15.1415 12.096 14.4375 12.096C13.8686 12.096 13.3566 11.9716 12.9015 11.7227C12.4535 11.4667 12.1015 11.1076 11.8455 10.6453C11.5966 10.1831 11.4721 9.64978 11.4721 9.04533C11.4721 8.43378 11.5966 7.89689 11.8455 7.43467C12.0943 6.97244 12.4428 6.61689 12.8908 6.368C13.3388 6.11911 13.8543 5.99467 14.4375 5.99467C14.9992 5.99467 15.5006 6.11556 15.9415 6.35733C16.3895 6.59911 16.7343 6.944 16.9761 7.392C17.225 7.83289 17.3495 8.34133 17.3495 8.91733ZM15.8028 8.49067C15.7957 8.10667 15.657 7.80089 15.3868 7.57333C15.1166 7.33867 14.7859 7.22133 14.3948 7.22133C14.025 7.22133 13.7121 7.33511 13.4561 7.56267C13.2072 7.78311 13.0543 8.09244 12.9975 8.49067H15.8028ZM20.1781 7.31733V10.176C20.1781 10.3751 20.2243 10.5209 20.3168 10.6133C20.4163 10.6987 20.5799 10.7413 20.8075 10.7413H21.5008V12H20.5621C19.3035 12 18.6741 11.3884 18.6741 10.1653V7.31733H17.9701V6.09067H18.6741V4.62933H20.1781V6.09067H21.5008V7.31733H20.1781ZM22.1909 9.024C22.1909 8.42667 22.3082 7.89689 22.5429 7.43467C22.7846 6.97244 23.1082 6.61689 23.5135 6.368C23.926 6.11911 24.3846 5.99467 24.8895 5.99467C25.3304 5.99467 25.7144 6.08356 26.0415 6.26133C26.3758 6.43911 26.6424 6.66311 26.8415 6.93333V6.09067H28.3455V12H26.8415V11.136C26.6495 11.4133 26.3829 11.6444 26.0415 11.8293C25.7073 12.0071 25.3198 12.096 24.8789 12.096C24.3811 12.096 23.926 11.968 23.5135 11.712C23.1082 11.456 22.7846 11.0969 22.5429 10.6347C22.3082 10.1653 22.1909 9.62844 22.1909 9.024ZM26.8415 9.04533C26.8415 8.68267 26.7704 8.37333 26.6282 8.11733C26.486 7.85422 26.294 7.65511 26.0522 7.52C25.8104 7.37778 25.5509 7.30667 25.2735 7.30667C24.9962 7.30667 24.7402 7.37422 24.5055 7.50933C24.2709 7.64444 24.0789 7.84356 23.9295 8.10667C23.7873 8.36267 23.7162 8.66844 23.7162 9.024C23.7162 9.37956 23.7873 9.69244 23.9295 9.96267C24.0789 10.2258 24.2709 10.4284 24.5055 10.5707C24.7473 10.7129 25.0033 10.784 25.2735 10.784C25.5509 10.784 25.8104 10.7164 26.0522 10.5813C26.294 10.4391 26.486 10.24 26.6282 9.984C26.7704 9.72089 26.8415 9.408 26.8415 9.04533Z",
                                    fill: "white",
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsx)("div", { className: "w-[100%] h-[20px]" }),
                        (0, s.jsx)("div", {
                          className:
                            "animate-[hero-enter_2s_ease-out_1s_forwards] opacity-0",
                          children: (0, s.jsx)("div", {
                            className:
                              "font-poppins hero-text mt-[8px] mb-[36px] text-[36px] leading-[43px] ai-dt:text-[48px] ai-dt:px-0 px-[28px] ai-dt:leading-[72px] leading-normal text-center font-bold max-w-[344px] ai-xs:max-w-[486px] ai-xs:px-0 ai-dt:max-w-[660px]",
                            children:
                              "Sites beyond imagination, one prompt away.",
                          }),
                        }),
                        (0, s.jsx)("div", {
                          style: { zIndex: 991 },
                          className:
                            "max-w-[720px] w-[100%] px-[20px] ai-xs:[40px]",
                          children: (0, s.jsx)(A, {
                            cursor: !0,
                            className:
                              "animate-[hero-enter_2s_ease-out_1s_forwards] header-input opacity-0",
                          }),
                        }),
                        (0, s.jsx)("a", {
                          className:
                            "hover:opacity-60 mt-[36px] ai-dt:mt-[40px]",
                          href: "#",
                          onClick: (e) => (
                            e.preventDefault(),
                            document
                              .getElementById("watch-video-tips")
                              .classList.add("hidden"),
                            t(),
                            !1
                          ),
                          children: (0, s.jsxs)("div", {
                            id: "watch-video",
                            className:
                              "relative animate-[hero-enter_2s_ease-out_1s_forwards] opacity-0 justify-center items-center flex flex-row",
                            children: [
                              (0, s.jsx)("div", {
                                className: "pointer-event-none",
                                children: (0, s.jsx)(o.Ee, {
                                  src: (0, c.ji)("play.png"),
                                  width: 22,
                                  height: 22,
                                  alt: "",
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "text-[16px] ml-[9px] leading-[25px] font-poppins font-medium pointer-event-none",
                                children: "Watch the video",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", { id: "anchor-editor" }),
              (function () {
                let [e, t] = (0, r.useState)(""),
                  [i, o] = (0, r.useState)(""),
                  [x, d] = (0, r.useState)(!1),
                  [p, m] = (0, r.useState)(0),
                  h = (0, r.useRef)(-1),
                  [u, f] = (0, r.useState)(-1),
                  v = (0, r.useRef)(!1),
                  w = (0, r.useRef)(!1),
                  g = (0, r.useRef)(!1),
                  j = (e) => {
                    document
                      .getElementById("pipeline-video-".concat(e))
                      .pause();
                  },
                  b = (e) => {
                    let t = document.getElementById(
                      "pipeline-video-".concat(e)
                    );
                    t.classList.remove("opacity-100"),
                      t.classList.add("opacity-0"),
                      t.pause(),
                      (t.currentTime = 0);
                  },
                  y = (e) => {
                    n.ZP.set(".pipeline-videos", { opacity: 1 }),
                      n.ZP.set(".hero-editor-main", { opacity: 0 });
                    let t = document.getElementById(
                      "pipeline-video-".concat(e)
                    );
                    (t.currentTime = 0),
                      t.classList.remove("opacity-0"),
                      t.classList.add("opacity-100"),
                      t.play();
                  };
                (0, B.V)(() => {
                  let e = (e) => {
                      let i = "VR Headset, Vision Pro",
                        s =
                          "Minimalist, 3D, Commercial, High quality, Hyper realistic";
                      e < 0.136
                        ? (t(i.substring(0, i.length * (e / 0.136))),
                          o(""),
                          m(1))
                        : e >= 0.136 &&
                          e <= 0.272 &&
                          (t(i),
                          o(s.substring(0, s.length * ((e - 0.136) / 0.136))),
                          m(2)),
                        e > 0.272 ? (o(s), m(0), d(!0)) : d(!1);
                    },
                    i = () => {
                      document.body.style.overflow = "hidden";
                    },
                    s = () => {
                      document.body.style.overflow = "";
                    },
                    a = (e) => {
                      let t = 315 * e;
                      n.ZP.to(".slider-bar", { height: t, duration: 0.01 }),
                        n.ZP.to(".slider-star", {
                          top: t - 14,
                          duration: 0.01,
                        });
                      let i = 0;
                      e > 0.33 && e <= 0.66 ? (i = 1) : e > 0.66 && (i = 2),
                        i !== h.current &&
                          (h.current >= 0 && b(h.current),
                          (h.current = i),
                          f(i),
                          y(i));
                    };
                  l.ScrollTrigger.matchMedia({
                    "(min-width: 840px)": function () {
                      let t = 60;
                      window.innerHeight > 870 &&
                        (t = 60 - (window.innerHeight - 870) * 0.5),
                        l.ScrollTrigger.create({
                          trigger: "#ai-editor",
                          start: "-480px 88px",
                          end: "+=2630",
                          pin: !1,
                          pinSpacing: !1,
                          scrub: !0,
                          onUpdate: (e) => {},
                          onEnter: () => {
                            n.ZP.to(".hero-editor-bg", {
                              scale: 1,
                              duration: 1,
                            });
                          },
                          onLeave: () => {},
                          onLeaveBack: () => {
                            n.ZP.to(".hero-editor-bg", {
                              scale: 0.8,
                              duration: 1,
                            });
                          },
                          onEnterBack: () => {},
                        }),
                        l.ScrollTrigger.create({
                          trigger: "#ai-editor",
                          start: "".concat(t, "px 168px"),
                          end: "+=2630",
                          pin: !0,
                          pinSpacing: !1,
                          scrub: !0,
                          onUpdate: (t) => {
                            e(t.progress);
                          },
                          onEnter: () => {
                            (v.current = !0),
                              n.ZP.to(".hero-editor", {
                                opacity: 1,
                                duration: 1,
                              }),
                              n.ZP.to(".hero-editor-popup-wrapper", {
                                y: -90,
                                duration: 1,
                              });
                          },
                          onLeave: () => {
                            b(0), b(1), j(2), (v.current = !1);
                          },
                          onLeaveBack: () => {
                            n.ZP.to(".hero-editor", {
                              opacity: 0.4,
                              duration: 1,
                            }),
                              n.ZP.to(".hero-editor-popup-wrapper", {
                                y: 0,
                                duration: 1,
                              }),
                              (v.current = !1);
                          },
                          onEnterBack: () => {
                            v.current = !0;
                          },
                        }),
                        l.ScrollTrigger.create({
                          trigger: "#anchor-editor",
                          start: "200px 300px",
                          end: "+=100",
                          pin: !1,
                          pinSpacing: !1,
                          scrub: !0,
                          onLeave: () => {},
                          onEnter: () => {
                            var e;
                            i(),
                              n.ZP.set("#hero-editor-popup", { opacity: 0 }),
                              (w.current = !0),
                              null ===
                                (e = document.getElementById("ai-editor")) ||
                                void 0 === e ||
                                e.classList.add("active"),
                              n.ZP.to(".pipeline-wrapper", {
                                width: "525",
                                duration: 1,
                                onComplete() {
                                  s(),
                                    n.ZP.to("#pipeline", {
                                      opacity: 1,
                                      duration: 1,
                                    }),
                                    v.current && w.current && y(0);
                                },
                              });
                          },
                          onEnterBack: () => {},
                          onLeaveBack: () => {
                            var e;
                            (w.current = !1),
                              n.ZP.to("#pipeline", { opacity: 0, duration: 1 }),
                              n.ZP.set(".pipeline-videos", { opacity: 0 }),
                              n.ZP.set(".hero-editor-main", { opacity: 1 }),
                              null ===
                                (e = document.getElementById("ai-editor")) ||
                                void 0 === e ||
                                e.classList.remove("active"),
                              n.ZP.to(".pipeline-wrapper", {
                                width: 0,
                                duration: 1,
                                onComplete() {
                                  n.ZP.set("#hero-editor-popup", {
                                    opacity: 1,
                                  });
                                },
                              }),
                              (h.current = -1),
                              f(-1),
                              b(0);
                          },
                        }),
                        l.ScrollTrigger.create({
                          trigger: "#anchor-editor",
                          start: "200px 300px",
                          end: "+=1600",
                          pin: !1,
                          pinSpacing: !1,
                          scrub: !0,
                          onUpdate: (e) => {
                            a(e.progress);
                          },
                          onLeave: () => {},
                          onLeaveBack: () => {
                            b(0), b(1), j(2);
                          },
                        });
                    },
                  }),
                    (g.current = !0),
                    window.innerWidth <= 840 && y(0),
                    window.addEventListener("resize", () => {
                      window.innerWidth < 840
                        ? (y(0), (g.current = !1))
                        : g.current ||
                          ((g.current = !0), window.location.reload());
                    });
                }, {});
                let N = (e) => {
                    let t = 1630;
                    1 === e
                      ? (t = 2130)
                      : 2 === e
                      ? (t = 2659)
                      : 3 === e && (t = 3159),
                      t > 0 &&
                        window.innerWidth > 840 &&
                        window.scrollTo({ top: t, behavior: "smooth" }),
                      window.innerWidth < 840 &&
                        (e >= 3 ? (b(2), b(1), y(0)) : y(e));
                  },
                  E = (e, t) => {
                    e.stopPropagation(), e.preventDefault();
                    let i = document.getElementById(t).getBoundingClientRect();
                    "tag-overview" === t
                      ? window.scrollTo({ top: 1788, behavior: "smooth" })
                      : window.scrollTo({
                          top: i.top + window.pageYOffset - 100,
                          behavior: "smooth",
                        });
                  };
                return (0, s.jsx)("div", {
                  id: "ai-editor",
                  className: (0, a.cx)(
                    "relative pointer-event-none h-[800px] max-[440px]:pt-[130px] left-0 z-[991] max-[840px]:pt-[130px] w-screen ai-dt:absolute ai-dt:top-[720px]"
                  ),
                  children: (0, s.jsx)("div", {
                    className:
                      "w-[100%] h-[100%] ai-dt:ai-editor-center left-0 right-0 relative flex flex-row items-center justify-items-center",
                    children: (0, s.jsx)("div", {
                      style: { zIndex: 991 },
                      className:
                        "editor-transform-default w-screen ai-dt:w-[1440px] editor-tranform-wrapper ai-dt:editor-transform",
                      children: (0, s.jsx)("div", {
                        className: "w-screen ai-dt:w-[1440px]",
                        children: (0, s.jsxs)("div", {
                          style: { zIndex: 991 },
                          className:
                            "flex flex-col flex-col-reverse ai-dt:flex-row justify-center items-center",
                          children: [
                            (0, s.jsx)("div", {
                              className:
                                "pipeline-wrapper w-screen ai-dt:w-0 overflow-hidden",
                              children: (0, s.jsx)("div", {
                                className:
                                  "px-[40px] mr-0 min-[1440px]:mr-[60px]",
                                children: (0, s.jsx)(eS, {
                                  playNext: N,
                                  currentActive: u,
                                  className: "",
                                }),
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className:
                                "w-screen video-size ai-dt:w-[1011px] ai-dt:h-[800px] relative",
                              children: (0, s.jsx)("div", {
                                className: "absolute left-0 top-0",
                                style: { zIndex: 991 },
                                children: (0, s.jsxs)("div", {
                                  className: (0, a.cx)(
                                    "hero-editor video-size opacity-100 ai-dt:opacity-40 w-screen ai-dt:w-[1011px] ai-dt:h-[800px] relative flex flex-row justify-center items-center"
                                  ),
                                  children: [
                                    (0, s.jsxs)("div", {
                                      className:
                                        "hero-editor-main relative w-[1011px] h-[800px] hidden ai-dt:flex flex-col items-center",
                                      style: { zIndex: 991 },
                                      children: [
                                        (0, s.jsx)("div", {
                                          className: (0, a.cx)(
                                            "hero-editor-bg w-[1011px] h-[720px] flex flex-col relative"
                                          ),
                                          style: {
                                            backgroundImage: 'url("'.concat(
                                              (0, c.ji)("editor-bg.webp"),
                                              '")'
                                            ),
                                            backgroundSize: "contain",
                                            backgroundRepeat: "no-repeat",
                                            transformOrigin: "top center",
                                            transform: "scale(0.8)",
                                            WebkitTransformOrigin: "top center",
                                          },
                                        }),
                                        (0, s.jsx)("div", {
                                          className:
                                            "absolute top-[115px] h-[615px] left-0 right-0 hero-editor-popup-wrapper w-[100%]",
                                          children: (0, s.jsx)("div", {
                                            id: "hero-editor-popup",
                                            className:
                                              "flex flex-row justify-center items-center",
                                            children: (0, s.jsx)("div", {
                                              className:
                                                "w-[494px] h-[615px] flex flex-row justify-center items-center",
                                              style: {
                                                backgroundImage: 'url("'.concat(
                                                  (0, c.ji)(
                                                    "editor-popup.webp"
                                                  ),
                                                  '")'
                                                ),
                                                backgroundSize: "cover",
                                                backgroundRepeat: "no-repeat",
                                              },
                                              children: (0, s.jsx)("div", {
                                                className: "pt-[27px]",
                                                children: (0, s.jsxs)("div", {
                                                  className:
                                                    "z-10 w-[360px] h-[445px] flex flex-col",
                                                  style: {
                                                    borderRadius: "14px",
                                                    border:
                                                      "1px solid var(--stroke, rgba(255, 255, 255, 0.20))",
                                                    background:
                                                      "linear-gradient(85deg, rgba(255, 255, 255, 0.04) 2.96%, rgba(255, 255, 255, 0.04) 96.14%)",
                                                    boxShadow:
                                                      "0px 0px 10px 0px rgba(255, 255, 255, 0.10)",
                                                  },
                                                  children: [
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "flex flex-row justify-between items-center h-[50px]",
                                                      style: {
                                                        borderRadius:
                                                          "14px 14px 0px 0px",
                                                        background:
                                                          "rgba(255, 255, 255, 0.04)",
                                                      },
                                                    }),
                                                    (0, s.jsxs)("div", {
                                                      className:
                                                        "mt-[16px] flex flex-col items-center",
                                                      children: [
                                                        (0, s.jsx)("div", {
                                                          className:
                                                            "mb-[8px] w-[300px] h-[18px] font-inter text-[12px] leading-[18px] text-white/50",
                                                        }),
                                                        (0, s.jsxs)("div", {
                                                          className:
                                                            "w-[300px] h-[140px]",
                                                          style: {
                                                            borderRadius: "8px",
                                                            fontFamily: "Inter",
                                                            fontSize: "16px",
                                                            fontWeight: "400",
                                                            lineHeight: "18px",
                                                            padding:
                                                              "10px 10px",
                                                          },
                                                          children: [
                                                            (0, s.jsx)("span", {
                                                              children: e,
                                                            }),
                                                            (0, s.jsx)("span", {
                                                              className: (0,
                                                              a.cx)(
                                                                "input-cursor",
                                                                1 === p
                                                                  ? ""
                                                                  : "hidden"
                                                              ),
                                                              children: "|",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, s.jsxs)("div", {
                                                      className:
                                                        "mt-[16px] flex flex-col items-center",
                                                      children: [
                                                        (0, s.jsx)("div", {
                                                          className:
                                                            "mb-[8px] h-[18px] w-[300px] font-inter text-[12px] leading-[18px] text-white/50",
                                                        }),
                                                        (0, s.jsxs)("div", {
                                                          className:
                                                            "w-[300px] h-[80px]",
                                                          style: {
                                                            borderRadius: "8px",
                                                            fontFamily: "Inter",
                                                            fontSize: "16px",
                                                            fontWeight: "400",
                                                            lineHeight: "18px",
                                                            padding:
                                                              "10px 10px",
                                                          },
                                                          children: [
                                                            (0, s.jsx)("span", {
                                                              children: i,
                                                            }),
                                                            (0, s.jsx)("span", {
                                                              className: (0,
                                                              a.cx)(
                                                                "input-cursor",
                                                                2 === p
                                                                  ? ""
                                                                  : "hidden"
                                                              ),
                                                              children: "|",
                                                            }),
                                                          ],
                                                        }),
                                                      ],
                                                    }),
                                                    (0, s.jsx)("div", {
                                                      className:
                                                        "mt-[30px] flex flex-col items-center",
                                                      children: (0, s.jsx)(
                                                        "a",
                                                        {
                                                          href: "",
                                                          onClick: (e) => {
                                                            E(
                                                              e,
                                                              "tag-overview"
                                                            );
                                                          },
                                                          className: (0, a.cx)(
                                                            "mb-[8px] pointer-event text-center w-[300px] h-[30px] font-inter text-[14px] font-bold leading-[28px]"
                                                          ),
                                                          style: {
                                                            borderRadius: "8px",
                                                            border:
                                                              "1px solid var(--stroke, rgba(255, 255, 255, 0.20))",
                                                            color: x
                                                              ? "#000"
                                                              : "#fff",
                                                            background: x
                                                              ? "#fff"
                                                              : "linear-gradient(85deg, rgba(255, 255, 255, 0.03) 2.96%, rgba(255, 255, 255, 0.03) 96.14%)",
                                                            boxShadow:
                                                              "0px 0px 20px 0px rgba(255, 255, 255, 0.10) inset",
                                                            filter:
                                                              "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))",
                                                          },
                                                          children: "Generate",
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              }),
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                    (0, s.jsx)("div", {
                                      className:
                                        "pipeline-videos absolute w-screen ai-dt:w-[1011px] ai-dt:h-[800px] top-0 left-0 opacity-100 ai-dt:opacity-0 pt-[40px] ai-dt:pt-0",
                                      children: (0, s.jsxs)("div", {
                                        className:
                                          "relative px-[40px] ai-dt:px-0 ai-dt:w-[1011px] ai-dt:h-[720px] flex flex-row justify-center items-center",
                                        children: [
                                          (0, s.jsxs)("div", {
                                            className:
                                              "relative pipeline-videos-size ai-dt:w-[100%] ai-dt:h-[100%] ai-dt:w-[1011px] ai-dt:h-[720px]",
                                            children: [
                                              (0, s.jsxs)("video", {
                                                playsInline: !0,
                                                id: "pipeline-video-0",
                                                className: (0, a.cx)(
                                                  "absolute left-0 top-0 opacity-100"
                                                ),
                                                muted: !0,
                                                onEnded: () => N(1),
                                                children: [
                                                  (0, s.jsx)("source", {
                                                    src: (0, c.ji)(
                                                      "pipeline/1.mp4"
                                                    ),
                                                    type: "video/mp4",
                                                  }),
                                                  "Your browser does not support the video tag.",
                                                ],
                                              }),
                                              (0, s.jsxs)("video", {
                                                playsInline: !0,
                                                id: "pipeline-video-1",
                                                className: (0, a.cx)(
                                                  "absolute left-0 top-0 opacity-0"
                                                ),
                                                muted: !0,
                                                onEnded: () => N(2),
                                                children: [
                                                  (0, s.jsx)("source", {
                                                    src: (0, c.ji)(
                                                      "pipeline/2.mp4"
                                                    ),
                                                    type: "video/mp4",
                                                  }),
                                                  "Your browser does not support the video tag.",
                                                ],
                                              }),
                                              (0, s.jsxs)("video", {
                                                playsInline: !0,
                                                id: "pipeline-video-2",
                                                className: (0, a.cx)(
                                                  "absolute left-0 top-0 opacity-0"
                                                ),
                                                muted: !0,
                                                onEnded: () => N(3),
                                                children: [
                                                  (0, s.jsx)("source", {
                                                    src: (0, c.ji)(
                                                      "pipeline/3.mp4"
                                                    ),
                                                    type: "video/mp4",
                                                  }),
                                                  "Your browser does not support the video tag.",
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, s.jsx)("div", {
                                            className:
                                              "absolute bottom-[-1px] w-[100%] h-[120px] ai-dt:h-[240px]",
                                            style: {
                                              background:
                                                "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, #000 100%)",
                                            },
                                          }),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, s.jsxs)("div", {
                              className:
                                "flex flex-col justify-center items-center block ai-dt:hidden",
                              children: [
                                (0, s.jsx)(k, {
                                  id: "tag-overview-mobile",
                                  className: "mb-[16px]",
                                  children: "AI Pipeline",
                                }),
                                (0, s.jsx)(C, {
                                  className:
                                    "ai-dt:px-[29px] text-center max-w-[342px]",
                                  children: "Building sites, end-to-end.",
                                }),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                });
              })(),
              (0, s.jsx)("div", {
                id: "watch-video-tips",
                style: {
                  zIndex: 992,
                  transition: "opacity 0.5s ease-in-out",
                  transformOrigin: "top center",
                },
                className: "pointer-event-none fixed hidden top-[33px] left-0",
                children: (0, s.jsx)("div", {
                  className:
                    "w-[222px] h-[138px] overflow-hidden rounded-[16px]",
                  style: {
                    border: "1px solid rgba(255, 255, 255, 0.30)",
                    boxShadow: "0px 14px 4px 0px rgba(0, 0, 0, 0.25)",
                    backgroundImage: 'url("'.concat(
                      (0, c.ji)("video-preview.webp"),
                      '")'
                    ),
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    transformOrigin: "top center",
                  },
                }),
              }),
            ],
          })
        );
      }
      function ek(e) {
        let { iframeActive: t, hideIframe: i } = e;
        return ((0, r.useEffect)(() => {
          let e = (e) => {
            ("Escape" === e.key || 27 === e.keyCode) && i();
          };
          return (
            document.addEventListener("keydown", e),
            () => {
              document.removeEventListener("keydown", e);
            }
          );
        }, []),
        t)
          ? (0, s.jsx)("div", {
              id: "watch-video-iframe",
              className: "fixed left-0 top-0 bottom-0 right-0",
              style: { zIndex: 9999, background: "rgba(0, 0, 0, 0.50)" },
              children: (0, s.jsx)("div", {
                onClick: (e) => {
                  i();
                },
                className:
                  "w-screen h-screen flex flex-row justify-between items-center ai-xs:px-[80px] px-0",
                children: (0, s.jsx)("div", {
                  style: {
                    width: "100%",
                    position: "relative",
                    height: "1px",
                    paddingBottom: "56.25%",
                    overflow: "hidden",
                  },
                  children: (0, s.jsx)("iframe", {
                    src: "https://www.youtube.com/embed/XlqNMwsa0QA?si=zyX5XgeYhW8nAQ4Z&autoplay=1",
                    title: "YouTube video player",
                    frameBorder: "0",
                    allow:
                      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",
                    allowFullScreen: !0,
                  }),
                }),
              }),
            })
          : (0, s.jsx)("div", {});
      }
      function eC() {
        return (0, s.jsx)("a", {
          target: "_blank",
          href: "https://www.producthunt.com/products/dora-ai-alpha?utm_source=badge-golden-kitty-badge#dora-ai-alpha",
          children: (0, s.jsx)(o.Ee, {
            src: (0, c.ji)("award2.webp"),
            className: (0, a.cx)(
              "hover:shadow-[0_0px_20px_0px_#FFFFFF_inset] award ml-[11px] fixed bottom-[40px] right-[40px] hidden ai-sm:block"
            ),
            width: 160,
            height: 60,
            alt: "",
            style: { zIndex: 9999 },
          }),
        });
      }
      function eF() {
        n.ZP.registerPlugin(l.ScrollTrigger);
        let [e, t] = (0, r.useState)(!1);
        return (0, s.jsxs)("div", {
          className: (0, a.cx)(
            "flex flex-col items-center relative overflow-hidden"
          ),
          children: [
            (0, s.jsx)(D, { simple: !1 }),
            (0, s.jsx)(eC, {}),
            (0, s.jsx)(eI, {
              showIframe: () => {
                t(!0);
              },
            }),
            (0, s.jsx)("div", {
              className:
                "pointer-event-none w-screen h-[100px] ai-xs:h-[400px] ai-dt:h-[1600px]",
            }),
            (0, s.jsx)("div", {
              className: "pointer-event-none w-screen h-0 ai-dt:h-[900px]",
            }),
            (0, s.jsx)(z, {}),
            (0, s.jsx)(eu, {}),
            (0, s.jsx)(eE, {}),
            (0, s.jsx)(eb, {}),
            (0, s.jsx)(eg, {}),
            (0, s.jsx)(ek, {
              iframeActive: e,
              hideIframe: () => {
                t(!1);
              },
            }),
          ],
        });
      }
      function eL() {
        return (0, s.jsx)(eF, {});
      }
      i(69236), i(26265), i(78805);
    },
    78805: function () {},
    90921: function () {},
    75434: function () {},
    26265: function () {},
    69236: function () {},
    37727: function () {},
    72067: function () {},
    78006: function () {},
  },
  function (e) {
    e.O(
      0,
      [
        654, 2116, 1350, 7392, 4874, 6957, 1766, 9156, 3756, 6867, 8974, 7966,
        9853, 1076, 1744,
      ],
      function () {
        return e((e.s = 15081));
      }
    ),
      (_N_E = e.O());
  },
]);
