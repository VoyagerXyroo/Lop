"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [3756],
  {
    79790: function (e, t, r) {
      var n = r(98153),
        o = r(96682),
        i = r(73918),
        a = r(42387);
      let s = (0, i.j)(
          [
            "flex",
            "items-center",
            "font-medium",
            "rounded",
            "bg-white",
            "hover:bg-black/5",
          ],
          {
            variants: {
              variant: {
                normal: ["border border-black_e", "text-black_3"],
                danger: ["border border-red", "text-red"],
              },
              size: {
                sm: ["px-1", "py-px", "h-4", "space-x-0.5", "text-[10px]"],
                md: ["px-1", "py-0.5", "h-5", "space-x-0.5", "text-xs"],
                lg: [
                  "px-2",
                  "py-1",
                  "h-6",
                  "space-x-2",
                  "text-sm leading-[18px]",
                ],
              },
            },
            defaultVariants: { variant: "normal" },
          }
        ),
        l = (0, o.forwardRef)((e, t) => {
          let {
            className: r,
            variant: o = "normal",
            size: l = "sm",
            leftIcon: c,
            rightIcon: u,
            children: d,
            withCloseButton: p,
            onClose: _,
            ...h
          } = e;
          return (0, n.jsxs)("div", {
            ref: t,
            className: (0, i.cx)(s({ variant: o, size: l, className: r })),
            ...h,
            children: [
              c && c,
              d && (0, n.jsx)("span", { children: d }),
              u && u,
              p &&
                (0, n.jsx)("button", {
                  className: (0, i.cx)([
                    "sm" === l ? "h-3" : "",
                    "md" === l ? "h-3" : "",
                    "lg" === l ? "h-4" : "",
                  ]),
                  onClick: (e) => {
                    e.preventDefault(), _ && _();
                  },
                  children: (0, n.jsx)(a.Z, { id: a.P.Xmark_12 }),
                }),
            ],
          });
        });
      (l.displayName = "Chip"), (t.Z = l);
    },
    17626: function (e, t, r) {
      r.r(t),
        r.d(t, {
          useFormFieldContext: function () {
            return p;
          },
        });
      var n = r(98153),
        o = r(96682),
        i = r(73918),
        a = r(10166),
        s = r(52126),
        l = r(42387),
        c = r(65237);
      let u = (e) => {
          let { tooltip: t } = e,
            [r, i] = (0, o.useState)(null);
          return (0, n.jsxs)(s.Tooltip, {
            open: r,
            onOpenChange: (e) => {
              i(!1 !== e || null);
            },
            placement: "bottom-end",
            children: [
              (0, n.jsx)(s.TooltipTrigger, {
                children: (0, n.jsx)(c.Z, {
                  className: "p-2 w-8 h-8 text-black_9 mr-0.5",
                  icon: l.P.PropertyHelp_16,
                  onClick: (e) => {
                    i(!r), e.preventDefault();
                  },
                  component: "div",
                  innerComponentProps: { style: { margin: 0 } },
                }),
              }),
              (0, n.jsx)(s.TooltipContent, {
                style: { maxWidth: 230 },
                children: t,
              }),
            ],
          });
        },
        [d, p] = (0, a.Rk)("FormField component was not found in the tree", !0),
        _ = (0, i.j)(["flex", "justify-center", "items-center"], {
          variants: { fullWidth: { true: "w-full" } },
          defaultVariants: {},
        }),
        h = (0, o.forwardRef)((e, t) => {
          let { className: r, ...o } = e;
          return (0, n.jsx)("form", {
            ref: t,
            className: (0, i.cx)(_({ className: r })),
            ...o,
          });
        });
      h.displayName = "Form";
      let f = Object.assign(h, {
        Field: function (e) {
          let {
            label: t,
            tooltip: r,
            assistiveText: o,
            error: i,
            children: a,
            ...s
          } = e;
          return (0, n.jsx)(d, {
            value: { assistiveText: o, error: i },
            children: (0, n.jsxs)("div", {
              className: "flex flex-col w-full",
              ...s,
              children: [
                t &&
                  (0, n.jsxs)("div", {
                    className: "w-full px-0.5 h-8 inline-flex items-center",
                    children: [
                      (0, n.jsx)("label", {
                        className:
                          "text-black_3 text-xs font-medium leading-none opacity-60",
                        children: t,
                      }),
                      (0, n.jsx)("div", { className: "flex-1" }),
                      r && (0, n.jsx)(u, { tooltip: r }),
                    ],
                  }),
                a,
              ],
            }),
          });
        },
      });
      t.default = f;
    },
    42387: function (e, t, r) {
      r.d(t, {
        P: function () {
          return _;
        },
        Z: function () {
          return f;
        },
      });
      var n,
        o,
        i,
        a,
        s,
        l,
        c,
        u,
        d = r(98153),
        p = r(96682);
      ((n = s || (s = {})).Checkmark_12 = "Checkmark_12"),
        (n.ChevronDown_12 = "Chevron_Down_12"),
        (n.ChevronLeft_12 = "Chevron_Left_12"),
        (n.ChevronRight_12 = "Chevron_Right_12"),
        (n.ChevronUp_12 = "Chevron_Up_12"),
        (n.Credits_12 = "Credits_12"),
        (n.Plus_12 = "Plus_12"),
        (n.UserPlus_12 = "UserPlus_12"),
        (n.Xmark_12 = "Xmark_12"),
        ((o = l || (l = {})).ArrowRight_16 = "Arrow_Right_16"),
        (o.ArrowSquareUpRight_16 = "Arrow_SquareUpRight_16"),
        (o.ChatSupport_16 = "Chat_support_16"),
        (o.ChevronRight_16 = "Chevron_Right_16"),
        (o.Credits_16 = "Credits_16"),
        (o.DeviceDesktop_16 = "Device_Desktop_16"),
        (o.DeviceMobile_16 = "Device_Mobile_16"),
        (o.Error_16 = "Error_16"),
        (o.ErrorFill_16 = "Error_Fill_16"),
        (o.Eye_16 = "Eye_16"),
        (o.HelpBookOpen_16 = "Help_BookOpen_16"),
        (o.HelpBug_16 = "Help_Bug_16"),
        (o.HelpDiscordLogo_16 = "Help_DiscordLogo_16"),
        (o.HelpFeature_16 = "Help_Feature_16"),
        (o.HelpFigma_16 = "Help_Figma_16"),
        (o.HelpFlag_16 = "Help_Flag_16"),
        (o.HelpYouTube_16 = "Help_YouTube_16"),
        (o.Info_16 = "Info_16"),
        (o.InfoFill_16 = "Info_Fill_16"),
        (o.Lock_16 = "Lock_16"),
        (o.LogOut_16 = "LogOut_16"),
        (o.Menu_16 = "Menu_16"),
        (o.Plus_16 = "Plus_16"),
        (o.PropertyHelp_16 = "Property_Help_16"),
        (o.PropertyInfo_16 = "Property_Info_16"),
        (o.PropertyMore_16 = "Property_More_16"),
        (o.PropertyRadius_16 = "Property_Radius_16"),
        (o.PropertySettings_16 = "Property_Settings_16"),
        (o.Question_16 = "Question_16"),
        (o.QuestionFill_16 = "Question_Fill_16"),
        (o.Row_16 = "Row_16"),
        (o.Share_16 = "Share_16"),
        (o.Success_16 = "Success_16"),
        (o.SuccessFill_16 = "Success_fill_16"),
        (o.Xmark_16 = "Xmark_16"),
        ((i = c || (c = {})).Archive_20 = "Archive_20"),
        (i.ChevronDown_20 = "ChevronDown_20"),
        (i.ChevronUp_20 = "ChevronUp_20"),
        (i.Clock_20 = "Clock_20"),
        (i.Grid_20 = "Grid_20"),
        (i.Help_20 = "Help_20"),
        (i.Learn_20 = "Learn_20"),
        (i.Plus_20 = "Plus_20"),
        (i.Project_20 = "Project_20"),
        (i.RocketLaunch_20 = "RocketLaunch_20"),
        (i.Users_20 = "Users_20"),
        ((a = u || (u = {})).AiAnimation_24 = "AiAnimation_24"),
        (a.AiInteraction_24 = "AiInteraction_24"),
        (a.AiTextToWeb_24 = "AiTextToWeb_24"),
        (a.ArrowRight_24 = "ArrowRight_24"),
        (a.Minus_24 = "Minus_24"),
        (a.Plus_24 = "Plus_24"),
        (a.Upload_24 = "Upload_24"),
        (a.Xmark_24 = "Xmark_24");
      let _ = { ...s, ...l, ...c, ...u },
        h = (0, p.forwardRef)((e, t) => {
          let { className: r, id: n, style: o, ...i } = e,
            a = e.size || (null == n ? void 0 : n.split("_").pop()) || 16;
          return (0, d.jsx)("i", {
            ref: t,
            className: "icon-"
              .concat(a, "-")
              .concat(n, " leading-none ")
              .concat(r || ""),
            style: {
              display: "inline-block",
              width: "".concat(a, "px"),
              height: "".concat(a, "px"),
              fontSize: "".concat(a, "px"),
              ...o,
            },
            ...i,
          });
        });
      h.displayName = "Icon";
      var f = h;
    },
    65237: function (e, t, r) {
      var n = r(98153),
        o = r(96682),
        i = r(73918),
        a = r(83262),
        s = r(42387);
      r(92619);
      let l = (0, i.j)(
          ["flex", "justify-center", "items-center", "focus:outline-none"],
          {
            variants: {
              variant: { variant_1: [], variant_2: [] },
              focus: { true: [] },
              active: { true: [] },
              size: {
                16: ["w-[16px]", "h-[16px]", "rounded"],
                32: ["w-[28px]", "h-[28px]", "rounded-md", "m-0.5"],
              },
              disabled: {
                true: [
                  "cursor-not-allowed",
                  "text-black_c",
                  "hover:bg-transparent",
                ],
              },
              loading: { true: ["border-transparent"] },
            },
            compoundVariants: [
              { variant: ["variant_1"], class: ["hover:bg-black/5"] },
              {
                variant: ["variant_1"],
                active: [!0],
                class: ["text-white", "bg-primary", "hover:bg-primary"],
              },
              { variant: ["variant_1"], disabled: [!0], class: [] },
              {
                variant: ["variant_2"],
                class: ["hover:bg-black/5", "border border-black_e"],
              },
              { variant: ["variant_2"], disabled: [!0], class: [] },
            ],
            defaultVariants: { variant: "variant_1", size: 32, active: !1 },
          }
        ),
        c = (0, o.forwardRef)((e, t) => {
          let {
            component: r = "button",
            className: o,
            type: c = "button",
            variant: u = "variant_1",
            icon: d,
            size: p = 32,
            focus: _,
            active: h,
            disabled: f,
            loading: m,
            innerComponentProps: x,
            ...v
          } = e;
          return (0, n.jsx)(r, {
            ref: t,
            className: (0, i.cx)("focus:outline-none"),
            type: c,
            ...v,
            children: (0, n.jsxs)("div", {
              className: (0, i.cx)(
                l({
                  variant: u,
                  size: p,
                  focus: _,
                  active: h,
                  disabled: f,
                  loading: m,
                  className: o,
                })
              ),
              ...x,
              children: [
                (0, n.jsx)("span", {
                  className: (0, i.cx)(
                    "flex flex-col items-center justify-center",
                    m ? "text-transparent hover:text-transparent" : ""
                  ),
                  children: (0, n.jsx)(s.Z, { id: d }),
                }),
                m &&
                  (0, n.jsx)("div", {
                    className:
                      "absolute flex flex-row items-center justify-center",
                    children: (0, n.jsx)(a.Z, { variant: "primary" }),
                  }),
              ],
            }),
          });
        });
      (c.displayName = "IconButton"), (t.Z = c);
    },
    92619: function (e, t, r) {
      var n = r(98153);
      r(96682);
      var o = r(91694),
        i = r.n(o),
        a = r(10166);
      t.Z = (e) => {
        let { href: t, prefetch: r, ...o } = e,
          s = (0, a.cG)(t, { useInLink: !0 });
        return !1 === r
          ? (0, n.jsx)("a", { href: s, ...o })
          : (0, n.jsx)(i(), { href: s, ...o });
      };
    },
    83262: function (e, t, r) {
      var n = r(98153),
        o = r(96682),
        i = r(73918);
      function a(e) {
        let { primary: t } = e;
        return t
          ? (0, n.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              children: [
                (0, n.jsx)("path", {
                  d: "M15 8C15 8.91925 14.8189 9.8295 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.8295 14.8189 8.91925 15 8 15C7.08075 15 6.17049 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.8295 1 8.91925 1 8C1 7.08075 1.18106 6.17049 1.53284 5.32122C1.88463 4.47194 2.40024 3.70026 3.05025 3.05025C3.70026 2.40024 4.47194 1.88463 5.32122 1.53284C6.1705 1.18106 7.08075 1 8 1C8.91925 1 9.82951 1.18106 10.6788 1.53284C11.5281 1.88463 12.2997 2.40024 12.9497 3.05025C13.5998 3.70026 14.1154 4.47194 14.4672 5.32122C14.8189 6.1705 15 7.08075 15 8L15 8Z",
                  stroke: "#246BFD",
                  strokeOpacity: "0.3",
                  strokeWidth: "2",
                }),
                (0, n.jsx)("path", {
                  d: "M14.4672 5.32122L13.5433 5.7039L14.4672 5.32122ZM14 8C14 8.55228 14.4477 9 15 9C15.5523 9 16 8.55228 16 8H14ZM8 2C8.78793 2 9.56815 2.15519 10.2961 2.45672L11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0V2ZM10.2961 2.45672C11.0241 2.75825 11.6855 3.20021 12.2426 3.75736L13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964L10.2961 2.45672ZM12.2426 3.75736C12.7998 4.31451 13.2417 4.97595 13.5433 5.7039L15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315L12.2426 3.75736ZM13.5433 5.7039C13.8448 6.43185 14 7.21207 14 8H16C16 6.94942 15.7931 5.90914 15.391 4.93853L13.5433 5.7039Z",
                  fill: "url(#paint0_linear_5976_101935)",
                }),
                (0, n.jsx)("defs", {
                  children: (0, n.jsxs)("linearGradient", {
                    id: "paint0_linear_5976_101935",
                    x1: "13.5",
                    y1: "12",
                    x2: "3.5",
                    y2: "6",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, n.jsx)("stop", { stopColor: "#246BFD" }),
                      (0, n.jsx)("stop", {
                        offset: "0.417423",
                        stopColor: "#246BFD",
                        stopOpacity: "0.559441",
                      }),
                      (0, n.jsx)("stop", {
                        offset: "0.874662",
                        stopColor: "#246BFD",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                }),
              ],
            })
          : (0, n.jsxs)("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              viewBox: "0 0 16 16",
              fill: "none",
              children: [
                (0, n.jsx)("path", {
                  opacity: "0.3",
                  d: "M15 8C15 8.91925 14.8189 9.8295 14.4672 10.6788C14.1154 11.5281 13.5998 12.2997 12.9497 12.9497C12.2997 13.5998 11.5281 14.1154 10.6788 14.4672C9.8295 14.8189 8.91925 15 8 15C7.08075 15 6.17049 14.8189 5.32122 14.4672C4.47194 14.1154 3.70026 13.5998 3.05025 12.9497C2.40024 12.2997 1.88463 11.5281 1.53284 10.6788C1.18106 9.8295 1 8.91925 1 8C1 7.08075 1.18106 6.17049 1.53284 5.32122C1.88463 4.47194 2.40024 3.70026 3.05025 3.05025C3.70026 2.40024 4.47194 1.88463 5.32122 1.53284C6.1705 1.18106 7.08075 1 8 1C8.91925 1 9.82951 1.18106 10.6788 1.53284C11.5281 1.88463 12.2997 2.40024 12.9497 3.05025C13.5998 3.70026 14.1154 4.47194 14.4672 5.32122C14.8189 6.1705 15 7.08075 15 8L15 8Z",
                  stroke: "white",
                  strokeWidth: "2",
                }),
                (0, n.jsx)("path", {
                  d: "M8 0H7V2H8V0ZM14.4672 5.32122L13.5433 5.7039L14.4672 5.32122ZM14 8C14 8.55228 14.4477 9 15 9C15.5523 9 16 8.55228 16 8H14ZM8 2C8.78793 2 9.56815 2.15519 10.2961 2.45672L11.0615 0.608964C10.0909 0.206926 9.05058 0 8 0V2ZM10.2961 2.45672C11.0241 2.75825 11.6855 3.20021 12.2426 3.75736L13.6569 2.34315C12.914 1.60028 12.0321 1.011 11.0615 0.608964L10.2961 2.45672ZM12.2426 3.75736C12.7998 4.31451 13.2417 4.97595 13.5433 5.7039L15.391 4.93853C14.989 3.96793 14.3997 3.08601 13.6569 2.34315L12.2426 3.75736ZM13.5433 5.7039C13.8448 6.43185 14 7.21207 14 8H16C16 6.94942 15.7931 5.90914 15.391 4.93853L13.5433 5.7039Z",
                  fill: "url(#paint0_linear_5976_102154)",
                }),
                (0, n.jsx)("defs", {
                  children: (0, n.jsxs)("linearGradient", {
                    id: "paint0_linear_5976_102154",
                    x1: "15",
                    y1: "9",
                    x2: "7",
                    y2: "1",
                    gradientUnits: "userSpaceOnUse",
                    children: [
                      (0, n.jsx)("stop", { stopColor: "white" }),
                      (0, n.jsx)("stop", {
                        offset: "0.557292",
                        stopColor: "white",
                        stopOpacity: "0.559441",
                      }),
                      (0, n.jsx)("stop", {
                        offset: "0.994792",
                        stopColor: "white",
                        stopOpacity: "0",
                      }),
                    ],
                  }),
                }),
              ],
            });
      }
      let s = (0, i.j)(["animate-spin"], {
          variants: { variant: { primary: [], white: [] } },
          defaultVariants: { variant: "primary" },
        }),
        l = (0, o.forwardRef)((e, t) => {
          let {
            component: r = "div",
            className: o,
            variant: l = "primary",
            ...c
          } = e;
          return (0, n.jsx)(r, {
            ref: t,
            className: (0, i.cx)(s({ variant: l, className: o }), "w-4 h-4"),
            ...c,
            children: (0, n.jsx)(a, { primary: "primary" === l }),
          });
        });
      (l.displayName = "Loader"), (t.Z = l);
    },
    49639: function (e, t, r) {
      r.r(t);
      var n = r(98153),
        o = r(96682),
        i = r(73331),
        a = r(73918);
      let s = (e) => {
        let { events: t, className: r, children: s } = e,
          l = (0, o.useRef)(null);
        return (0, n.jsx)(i.E, {
          className: (0, a.cx)("w-full h-full", r),
          ref: l,
          options: {
            scrollbars: {
              theme: "os-theme-custom",
              autoHide: "scroll",
              autoHideDelay: 1800,
              clickScroll: !1,
            },
          },
          events: t,
          defer: !0,
          children: s,
        });
      };
      (s.displayName = "ScrollArea"), (t.default = s);
    },
    52126: function (e, t, r) {
      r.r(t),
        r.d(t, {
          Tooltip: function () {
            return _;
          },
          TooltipContent: function () {
            return f;
          },
          TooltipTrigger: function () {
            return h;
          },
          useTooltip: function () {
            return u;
          },
          useTooltipContext: function () {
            return p;
          },
        });
      var n = r(98153),
        o = r(96682),
        i = r(32202),
        a = r(2163),
        s = r(89930),
        l = r(84858),
        c = r(73918);
      function u() {
        let {
            initialOpen: e = !1,
            placement: t = "bottom",
            open: r,
            onOpenChange: n,
            hoverDelay: c = 1e3,
            arrowRef: u,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          [d, p] = o.useState(e),
          _ = null != r ? r : d,
          h = null != n ? n : p,
          f = (0, i.YF)({
            placement: t,
            open: _,
            onOpenChange: h,
            whileElementsMounted: a.Me,
            middleware: [
              (0, s.x7)({ element: u }),
              (0, l.cv)(6),
              (0, l.RR)({
                crossAxis: t.includes("-"),
                fallbackAxisSideDirection: "start",
                padding: 6,
              }),
              (0, l.uY)({ padding: 6 }),
            ],
          }),
          { context: m } = f,
          x = (0, i.XI)(m, {
            move: !1,
            delay: c,
            handleClose: (0, i.xp)({ requireIntent: !1 }),
          }),
          v = (0, i.KK)(m, { enabled: null == r }),
          g = (0, i.bQ)(m, { ancestorScroll: !0 }),
          C = (0, i.qs)(m, { role: "tooltip" }),
          w = (0, i.NI)([x, v, g, C]);
        return o.useMemo(
          () => ({ open: _, setOpen: h, ...w, ...f, arrowRef: u }),
          [_, h, w, f, u]
        );
      }
      let d = o.createContext(null),
        p = () => {
          let e = o.useContext(d);
          if (null == e)
            throw Error("Tooltip components must be wrapped in <Tooltip />");
          return e;
        };
      function _(e) {
        let { children: t, ...r } = e,
          i = o.useRef(null),
          a = u({ ...r, arrowRef: i });
        return (0, n.jsx)(d.Provider, { value: a, children: t });
      }
      let h = o.forwardRef((e, t) => {
          let { children: r, asChild: a = !1, ...s } = e,
            l = p(),
            c = r.ref,
            u = (0, i.qq)([l.refs.setReference, t, c]);
          return a && o.isValidElement(r)
            ? o.cloneElement(
                r,
                l.getReferenceProps({
                  ref: u,
                  ...s,
                  ...r.props,
                  "data-state": l.open ? "open" : "closed",
                })
              )
            : (0, n.jsx)("button", {
                ref: u,
                "data-state": l.open ? "open" : "closed",
                ...l.getReferenceProps(s),
                children: r,
              });
        }),
        f = o.forwardRef((e, t) => {
          let { children: r, className: o, style: a, ...s } = e,
            l = p(),
            u = (0, i.qq)([l.refs.setFloating, t]);
          return l.open
            ? (0, n.jsx)(i.ll, {
                children: (0, n.jsx)("div", {
                  ref: u,
                  style: { ...l.floatingStyles, ...a },
                  ...l.getFloatingProps(s),
                  className: (0, c.cx)("item z-50", o),
                  children: (0, n.jsxs)("div", {
                    className:
                      "bg-black_3 rounded-md p-2 max-w-[240px] text-xs text-white",
                    style: { boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.10)" },
                    children: [
                      (0, n.jsx)(i.Y$, {
                        ref: l.arrowRef,
                        height: 6,
                        context: l.context,
                        fill: "#333333",
                      }),
                      r,
                    ],
                  }),
                }),
              })
            : null;
        });
    },
    91445: function (e, t, r) {
      r.d(t, {
        WV: function () {
          return i;
        },
      });
      var n = r(59417);
      let o = (e, t) => (0, n.OB)(e) || t || "",
        i = (e) => (e.startsWith("www.") ? e.replace("www.", "") : e);
      class a {
        setMockConfig(e) {
          this.mockConfig = e;
        }
        get target() {
          var e;
          return o(
            "NEXT_PUBLIC_TARGET",
            null === (e = this.mockConfig) || void 0 === e ? void 0 : e.target
          );
        }
        get homeHost() {
          var e;
          {
            let { hostname: e } = window.location;
            if ("invite.dora.run" === e) return "invite.dora.run";
          }
          return o(
            "NEXT_PUBLIC_HOME_HOST",
            null === (e = this.mockConfig) || void 0 === e ? void 0 : e.homeHost
          );
        }
        get runHost() {
          return i(this.homeHost);
        }
        get apiHost() {
          var e;
          return o(
            "NEXT_PUBLIC_API_HOST",
            null === (e = this.mockConfig) || void 0 === e ? void 0 : e.apiHost
          );
        }
        get trinityApiHost() {
          var e;
          return o(
            "NEXT_PUBLIC_TRINITY_API_HOST",
            null === (e = this.mockConfig) || void 0 === e
              ? void 0
              : e.trinityApiHost
          );
        }
        get cdnHost() {
          var e;
          return o(
            "NEXT_PUBLIC_CDN_HOST",
            null === (e = this.mockConfig) || void 0 === e ? void 0 : e.cdnHost
          );
        }
        get cdnImgsHost() {
          var e;
          return o(
            "NEXT_PUBLIC_CDN_IMGS_HOST",
            null === (e = this.mockConfig) || void 0 === e
              ? void 0
              : e.cdnImgsHost
          );
        }
        get homeLink() {
          let e = "https:";
          return (
            (e = window.location.protocol),
            "".concat(e, "//").concat(this.homeHost)
          );
        }
        getAssetHost() {
          return "online" === this.target
            ? "https://cdn-www.dora.run"
            : "prerelease" === this.target
            ? "https://cdn-prerelease.dora.run"
            : "";
        }
      }
      let s = new a();
      t.ZP = s;
    },
    21324: function (e, t, r) {
      r.r(t);
      var n = r(98153),
        o = r(96682);
      t.default = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          r = (0, o.createContext)(null);
        return [
          (e) => {
            let { children: t, value: o } = e;
            return (0, n.jsx)(r.Provider, { value: o, children: t });
          },
          () => {
            let n = (0, o.useContext)(r);
            if (null === n && !t) throw Error(e);
            return n;
          },
        ];
      };
    },
    1148: function (e, t, r) {
      var n = r(91445);
      t.Z = () =>
        "test" === n.ZP.target
          ? "https://test.dora.run/e/5864?copykey=aac834b7-2ab3-4336-b364-47f794cb2922"
          : "https://www.dora.run/e/4320?copykey=746c6dfd-b7b1-4a4e-8b3b-b325eab913a8";
    },
    10166: function (e, t, r) {
      r.d(t, {
        hx: function () {
          return _;
        },
        AQ: function () {
          return p;
        },
        vc: function () {
          return n.ZP;
        },
        RL: function () {
          return a;
        },
        Rk: function () {
          return s.default;
        },
        hA: function () {
          return l.Z;
        },
        Oq: function () {
          return c;
        },
        nD: function () {
          return d.Z;
        },
        cG: function () {
          return u.Z;
        },
      });
      var n = r(91445);
      let o = () => {
        let e = "";
        return (
          window.location.hostname.includes("test.dora.run")
            ? (e = "; domain=.test.dora.run")
            : window.location.hostname.includes("prerelease.dora.run")
            ? (e = "; domain=.prerelease.dora.run")
            : window.location.hostname.includes("dora.run") &&
              (e = "; domain=.dora.run"),
          e
        );
      };
      class i {
        set(e, t) {
          let { expires: r } =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : {},
            n = "";
          if ("string" == typeof r) n = r;
          else {
            let e = new Date();
            e.setTime(e.getTime() + (r || 0)), (n = e.toUTCString());
          }
          let i = o();
          document.cookie = ""
            .concat(e, "=")
            .concat(encodeURIComponent(t), "; expires=")
            .concat(n, "; path=/")
            .concat(i);
        }
        get(e) {
          let t = "; ".concat(document.cookie).split("; ".concat(e, "="));
          if (2 === t.length) return t.pop().split(";").shift();
        }
        delete(e) {
          let t = o();
          document.cookie = ""
            .concat(e, "=; expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/")
            .concat(t);
        }
        isExpired(e) {
          let t = document.cookie.replace(
            new RegExp(
              "(?:(?:^|.*;\\s*)".concat(e, "\\s*=\\s*([^;]*).*$)|^.*$")
            ),
            "$1"
          );
          return !t || new Date(t) < new Date();
        }
      }
      var a = new i(),
        s = r(21324),
        l = r(1148),
        c = (e, t) => {
          let {
            project: r,
            width: o,
            height: i,
            format: a = "webp",
          } = null != t ? t : {};
          return [
            "https://".concat(n.ZP.cdnImgsHost),
            "/design/".concat(e),
            ...(null != o ? ["/w/".concat(o)] : []),
            ...(null != i ? ["/h/".concat(i)] : []),
            ...(null != a ? ["/format/".concat(a)] : []),
            ...(null != r ? ["?project=".concat(r)] : []),
          ].join("");
        },
        u = r(88112),
        d = r(2354),
        p = {
          set: function (e, t) {
            try {
              localStorage.setItem(e, t);
            } catch (r) {
              localStorage.setItem(e, t);
            }
          },
          get: function (e) {
            {
              let t;
              try {
                t = localStorage.getItem(e);
              } catch (r) {
                t = localStorage.getItem(e);
              }
              return t;
            }
          },
        },
        _ = {
          AiInvitedShowFlag: "aiInvitedShow_",
          AiInvitedValue: "1",
          AiIntroducingShowFlag: "aiIntroducingShow_",
          AiIntroducingValue: "1",
          AiallOpenFlag: "aiAllOpen_",
          AiallOpenValue: "1",
        };
    },
    47865: function (e, t) {
      t.Z = () => {
        {
          let { hostname: e, port: t } = window.location;
          if (
            ("localhost" === e && "4444" === "".concat(t)) ||
            "test.dora.run" === e ||
            e.endsWith("swimlane.dora.run") ||
            "beta.dora.run" === e ||
            e.endsWith("swimlane-beta.dora.run") ||
            "prerelease.dora.run" === e ||
            e.endsWith("swimlane-prerelease.dora.run") ||
            "invite.dora.run" === e ||
            "www.dora.run" === e
          )
            return !0;
        }
        return !1;
      };
    },
    2354: function (e, t, r) {
      var n = r(91445),
        o = r(1148);
      class i {
        get appTour() {
          return (0, o.Z)();
        }
        get contactUs() {
          return "".concat(n.ZP.homeLink, "/contact");
        }
        constructor() {
          (this.youTubeVideos = "https://www.youtube.com/@DoraTool"),
            (this.figmaToDora =
              "https://help.dora.run/en/articles/9439079-import-from-figma"),
            (this.helpCenter = "https://help.dora.run"),
            (this.discord = "https://s.dora.run/dora-discord"),
            (this.doraEnterprise = "https://s.dora.run/dora-enterprise"),
            (this.doraCommunity =
              "https://dora-design.notion.site/Dora-Community-9ce1e5f6913448f69ce0df3275fe7b86"),
            (this.becomeAnAmbassador =
              "https://dora-design.notion.site/Dora-Community-9ce1e5f6913448f69ce0df3275fe7b86#054bf985d6914657af4cacb7193ed8f7"),
            (this.educationalDiscounts =
              "https://connect.studentbeans.com/v4/hosted/dora-us-2/US"),
            (this.templateTermsGuidelines =
              "https://dora-design.notion.site/Dora-Template-Terms-Guidelines-39c87e700ee54234b74323591c856ce7"),
            (this.bugReport = "https://s.dora.run/dora-bug-report"),
            (this.featureRequest = "https://discord.gg/CzZkRhrFah"),
            (this.gumroad = "https://gumroad.com/"),
            (this.lemonsqueezy = "https://www.lemonsqueezy.com/");
        }
      }
      t.Z = new i();
    },
    88112: function (e, t, r) {
      var n = r(47865);
      t.Z = (e, t) => {
        let r = e || "";
        if (e && e.startsWith("/")) {
          if ((0, n.Z)()) {
            let n = window.location.origin;
            (null == t ? void 0 : t.protocol) &&
              (null == t ? void 0 : t.host) &&
              (n = "".concat(t.protocol, "//").concat(t.host)),
              (r = "".concat(n).concat(e));
          } else
            (null == t ? void 0 : t.useInLink) !== !0 &&
              (r = "/__dora__/morpheus".concat(e));
        }
        return r;
      };
    },
  },
]);
