"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [856],
  {
    553: function (e, l, t) {
      t.r(l);
      var n = t(98153),
        r = t(96682),
        a = t(32202),
        s = t(2163),
        i = t(84858),
        o = t(73918),
        c = t(17626),
        u = t(42387),
        d = t(79790),
        x = t(49639);
      let f = (0, o.j)(
          [
            "flex",
            "justify-center",
            "items-center",
            "border",
            "m-0.5",
            "rounded-xl",
            "text-black_3",
            "border-black_e",
            "min-h-[40px]",
            "text-sm font-medium",
          ],
          {
            variants: {
              variant: {
                fill: ["border-none"],
                outline: [],
                "hover-outline": ["border-none hover:border"],
              },
              multiple: { true: [], false: [] },
              disabled: {
                true: [
                  "cursor-not-allowed",
                  "text-black_c placeholder:text-black_c",
                  "bg-transparent",
                  "border-black_e",
                ],
                false: [""],
              },
              fullWidth: { true: "w-full" },
            },
            defaultVariants: {},
          }
        ),
        m = (0, r.forwardRef)((e, l) => {
          let { className: t, children: r, ...a } = e;
          return (0, n.jsx)("div", {
            ref: l,
            className: (0, o.cx)(
              "rounded-lg bg-white",
              "py-1.5 flex flex-col",
              "shadow-comp-menu outline outline-1 outline-black_e",
              "z-20",
              t
            ),
            onClick: (e) => {
              e.preventDefault();
            },
            ...a,
            children: (0, n.jsx)(x.default, { children: r }),
          });
        });
      m.displayName = "LargeDropdownItems";
      let p = (0, r.forwardRef)((e, l) => {
        let t = (0, a.PC)(),
          { children: r, active: s, selected: i, disabled: c = !1, ...d } = e;
        return (0, n.jsxs)("div", {
          ref: l,
          role: "option",
          id: t,
          "aria-selected": i,
          ...d,
          className: (0, o.cx)(
            "cursor-pointer",
            "rounded-md active:outline-none focus:outline-none",
            "text-black_3 text-xs group flex items-center mx-2 my-0.5 py-1.5",
            s &&
              !c &&
              "bg-primary text-white hover:bg-primary hover:text-white ",
            c && "cursor-not-allowed text-black_c",
            "px-2"
          ),
          children: [
            (0, n.jsx)("span", {
              className: "mr-2 w-3 h-3 flex items-center",
              children:
                i &&
                (0, n.jsx)(u.Z, {
                  id: u.P.Checkmark_12,
                  className: (0, o.cx)(
                    s && !c ? "text-white" : "text-black_3",
                    c ? "text-black_c" : ""
                  ),
                }),
            }),
            r,
          ],
        });
      });
      p.displayName = "LargeDropdownItem";
      let v = (0, r.forwardRef)((e, l) => {
        let t;
        let x = (0, r.useRef)(null);
        (0, r.useImperativeHandle)(l, () => x.current, []);
        let v = (0, r.useRef)(null),
          [h, b] = (0, r.useState)(!1),
          [g, w] = (0, r.useState)(""),
          [j, k] = (0, r.useState)(!1),
          [N, y] = (0, r.useState)(!1),
          [_, C] = (0, r.useState)(""),
          [L, T] = (0, r.useState)(null),
          [E, O] = (0, r.useState)(null),
          P = null,
          R = (0, r.useRef)([]),
          {
            refs: S,
            floatingStyles: F,
            context: D,
          } = (0, a.YF)({
            placement: "bottom-start",
            whileElementsMounted: s.Me,
            open: h,
            onOpenChange: (e) => {
              b(e);
            },
            middleware: [
              (0, i.cv)(2),
              (0, i.RR)({ padding: 10 }),
              (0, i.dp)({
                apply(e) {
                  let { rects: l, availableHeight: t, elements: n } = e,
                    r = Math.max(l.reference.width, 200);
                  Object.assign(n.floating.style, {
                    width: "".concat(r, "px"),
                    maxHeight: "".concat(t, "px"),
                  });
                },
                padding: 10,
              }),
            ],
          }),
          I = (0, a.qs)(D, { role: "listbox" }),
          M = (0, a.bQ)(D, { ancestorScroll: !0 }),
          B = (0, a.c0)(D, {
            listRef: R,
            activeIndex: L,
            onNavigate: T,
            virtual: !0,
            loop: !0,
          }),
          {
            getReferenceProps: H,
            getFloatingProps: Z,
            getItemProps: z,
          } = (0, a.NI)([I, M, B]),
          {
            className: V,
            variant: q = "fill",
            placeholder: G,
            multiple: Q = !1,
            maxSelectedOptions: U,
            searchable: W = !0,
            options: Y,
            fullWidth: A = !1,
            initialSelectedValues: J,
            onChange: K,
            disabled: X = !1,
            ...$
          } = e;
        (0, r.useEffect)(() => {
          if (!J) return;
          let e = Y.find((e) => (null == J ? void 0 : J.includes(e.value)));
          e && (w(e.label), C(e.value));
        }, [null == J ? void 0 : J.join(",")]),
          (0, r.useEffect)(() => {
            X && y(!1);
          }, [X]);
        let ee = Y.filter((e) => {
            if (!W || j) return !0;
            let { label: l } = e;
            return l.toLowerCase().includes(g.toLowerCase());
          }),
          el = (0, c.useFormFieldContext)(),
          { assistiveText: et, error: en } = el || {};
        if ("string" == typeof en) t = en;
        else if (
          "boolean" != typeof en &&
          en &&
          (null == en ? void 0 : en.message)
        ) {
          var er;
          t =
            null === (er = en.message) || void 0 === er
              ? void 0
              : er.toString();
        }
        let ea = (e) => {
            let l = _.split(",").filter((e) => "" !== e);
            return !l.includes(e.value) && Q && l.length >= (U || 1);
          },
          es = (l) => {
            var t;
            let { label: n, value: r } = l,
              a = "",
              s = _.split(",").filter((e) => "" !== e);
            Q
              ? (s = s.includes(r) ? s.filter((e) => e !== r) : [...s, r])
              : ((s = [r]), (a = n)),
              w(a),
              C(s.join(",")),
              (x.current.value = s.join(",")),
              (!Q || (Q && U && s.length >= U)) && b(!1);
            let i = new Event("change", { bubbles: !0 });
            x.current.dispatchEvent(i),
              null === (t = e.onChange) || void 0 === t || t.call(e, i);
          },
          ei = () => {
            W &&
              setTimeout(() => {
                let e = v.current.value.substring(
                  v.current.selectionStart || 0,
                  v.current.selectionEnd || 0
                );
                k(e.length > 0 && e === v.current.value);
              }, 0);
          };
        return (
          (0, r.useEffect)(() => {
            if (!Q) return () => {};
            let e = (e) => {
              if ("Backspace" === e.key) {
                let e = _.split(",").pop(),
                  l = Y.find((l) => e === l.value);
                l && es(l);
              }
            };
            return (
              N && window.addEventListener("keydown", e),
              () => {
                window.removeEventListener("keydown", e);
              }
            );
          }, ["".concat(Q, "-").concat(N, "-").concat(_)]),
          (0, n.jsxs)("div", {
            className: (0, o.cx)("flex flex-col relative"),
            children: [
              (0, n.jsx)("input", {
                ref: x,
                ...$,
                value: _,
                readOnly: !0,
                className: "hidden",
                disabled: X,
              }),
              (0, n.jsxs)("div", {
                className: (0, o.cx)(
                  f({ variant: q, multiple: Q, disabled: X }),
                  "px-[15px]",
                  N && "border-primary outline outline-primary/10",
                  (null == el ? void 0 : el.error) &&
                    "border-red hover:border-red focus:border-red",
                  "items-center",
                  "justify-center",
                  W ? "" : "cursor-pointer",
                  W && !N ? "hover:bg-black/5" : "",
                  !Q || E || N ? "" : "hover:bg-black/5",
                  Q || W || !h ? "" : "bg-black/5",
                  V
                ),
                ...H({ ref: S.setReference, "aria-autocomplete": "list" }),
                onClick: () => {
                  setTimeout(() => {
                    if (!X && !N && !j) {
                      if ((b(!h), (W || Q) && y(!h), !h)) {
                        var e;
                        null === (e = v.current) || void 0 === e || e.select();
                      }
                      ei();
                    }
                  }, 0);
                },
                children: [
                  (0, n.jsxs)("div", {
                    className: (0, o.cx)(
                      "flex items-center",
                      Q ? "flex-wrap gap-x-1 gap-y-[3px] pt-[3px]" : "",
                      A ? "w-full" : ""
                    ),
                    children: [
                      Q
                        ? (0, n.jsx)(n.Fragment, {
                            children: _.split(",")
                              .map((e) => Y.find((l) => l.value === e))
                              .filter((e) => e)
                              .map((e) =>
                                (0, n.jsx)(
                                  d.Z,
                                  {
                                    size: "md",
                                    withCloseButton: !0,
                                    onClose: () => {
                                      es(e);
                                    },
                                    onMouseOver: () => {
                                      P && (clearTimeout(P), (P = null)), O(e);
                                    },
                                    onMouseLeave: () => {
                                      P = setTimeout(() => {
                                        O(null);
                                      }, 120);
                                    },
                                    children: e.label,
                                  },
                                  "dropdown-option-".concat(e.value)
                                )
                              ),
                          })
                        : (0, n.jsx)(n.Fragment, {}),
                      (0, n.jsx)("div", {
                        className: (0, o.cx)("w-full", Q ? "-mt-[3px]" : ""),
                        children: W
                          ? (0, n.jsx)("input", {
                              ref: v,
                              className: (0, o.cx)(
                                "bg-transparent focus:outline-none",
                                "placeholder:text-black_9",
                                !Q && A ? "w-full" : "min-w-[10px]",
                                X ? "cursor-not-allowed" : ""
                              ),
                              placeholder: G,
                              onChange: (e) => {
                                w(e.target.value), b(ee.length > 0);
                              },
                              value: g,
                              onClick: () => {
                                b(!0), ei();
                              },
                              onFocus: (e) => {
                                if (!X && (y(!0), _.length > 0 && !Q)) {
                                  var l;
                                  null === (l = e.target) ||
                                    void 0 === l ||
                                    l.select();
                                }
                              },
                              onBlur: () => {
                                y(!1),
                                  setTimeout(() => {
                                    let e = Y.find((e) => {
                                      var l;
                                      return (
                                        e.value ===
                                        (null === (l = x.current) ||
                                        void 0 === l
                                          ? void 0
                                          : l.value)
                                      );
                                    });
                                    g !== (null == e ? void 0 : e.label) &&
                                      w((null == e ? void 0 : e.label) || ""),
                                      k(!1);
                                  }, 200);
                              },
                              disabled: X,
                            })
                          : (0, n.jsx)(n.Fragment, {
                              children: _
                                ? (0, n.jsx)("div", {
                                    className: "text-black_3",
                                    children: g,
                                  })
                                : (0, n.jsx)("div", {
                                    className: "text-black_9",
                                    children: G,
                                  }),
                            }),
                      }),
                    ],
                  }),
                  (0, n.jsx)("div", {
                    className: (0, o.cx)(
                      "ml-1.5 w-3 h-3 overflow-hidden relative"
                    ),
                    children: (0, n.jsx)(u.Z, {
                      className: (0, o.cx)("text-black_3/60 -mt-1 -ml-1"),
                      id: h ? u.P.ChevronUp_20 : u.P.ChevronDown_20,
                    }),
                  }),
                ],
              }),
              (et || t) &&
                (0, n.jsxs)("div", {
                  className: "text-xs p-0.5",
                  children: [
                    et
                      ? (0, n.jsx)("p", {
                          className: "text-black_9",
                          children: et,
                        })
                      : null,
                    t
                      ? (0, n.jsx)("p", { className: "text-red", children: t })
                      : null,
                  ],
                }),
              (0, n.jsx)(a.ll, {
                children:
                  h &&
                  (0, n.jsx)(a.wD, {
                    context: D,
                    initialFocus: -1,
                    visuallyHiddenDismiss: !0,
                    children: (0, n.jsx)(m, {
                      ...Z({ ref: S.setFloating, style: { ...F } }),
                      children: ee.map((e, l) =>
                        (0, n.jsx)(
                          p,
                          {
                            ...z({
                              ref(e) {
                                R.current[l] = e;
                              },
                              onClick() {
                                var l;
                                ea(e) ||
                                  (es(e),
                                  null === (l = S.domReference.current) ||
                                    void 0 === l ||
                                    l.focus(),
                                  Q || b(!1));
                              },
                            }),
                            active: L === l,
                            selected: _.split(",").includes(e.value),
                            disabled: ea(e),
                            children: e.label,
                          },
                          e.value
                        )
                      ),
                    }),
                  }),
              }),
            ],
          })
        );
      });
      (v.displayName = "LargeDropdown"), (l.default = v);
    },
    81023: function (e, l, t) {
      t.r(l),
        t.d(l, {
          LargeTabsList: function () {
            return s;
          },
          LargeTabsPanel: function () {
            return c;
          },
          LargeTabsPanels: function () {
            return o;
          },
          LargeTabsTab: function () {
            return i;
          },
        });
      var n = t(98153);
      t(96682);
      var r = t(59541),
        a = t(73918);
      function s(e) {
        return (0, n.jsx)(r.O.List, {
          className: (0, a.cx)(
            "flex rounded-xl bg-black/5",
            "text-sm text-black_9 leading-6"
          ),
          ...e,
        });
      }
      function i(e) {
        return (0, n.jsx)(r.O, {
          className: (e) => {
            let { selected: l } = e;
            return (0, a.cx)(
              "w-full h-10 rounded-[10px] mx-1 my-1",
              "focus:outline-none",
              "font-semibold",
              l ? "bg-white text-black_3  shadow" : ""
            );
          },
          ...e,
        });
      }
      function o(e) {
        return (0, n.jsx)(r.O.Panels, { ...e });
      }
      function c(e) {
        return (0, n.jsx)(r.O.Panel, {
          className: (0, a.cx)("rounded-xl bg-white p-3"),
          ...e,
        });
      }
      function u(e) {
        let { className: l, children: t } = e,
          a = t.props.children.map((e) => e.props.value);
        return (0, n.jsx)("div", {
          className: l,
          children: (0, n.jsx)(r.O.Group, {
            selectedIndex: a.indexOf(e.defaultValue),
            onChange: (l) => {
              e.onChange(a[l]);
            },
            children: t,
          }),
        });
      }
      u.displayName = "LargeTabs";
      let d = Object.assign(u, { List: s, Tab: i, Panels: o, Panel: c });
      l.default = d;
    },
  },
]);
