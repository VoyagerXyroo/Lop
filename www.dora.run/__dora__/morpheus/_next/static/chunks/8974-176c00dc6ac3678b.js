"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [8974],
  {
    4857: function (e, t, r) {
      r.d(t, {
        S: function () {
          return s;
        },
      });
      var a = r(98153),
        l = r(96682),
        i = r(73918);
      let n = (0, i.j)(
          [
            "mx-4",
            "pl-4 pr-2",
            "py-2",
            "hover:bg-black_3/5",
            "rounded-lg",
            "text-xs",
            "text-black_3",
            "flex flex-row items-center",
            "cursor-pointer",
          ],
          {
            variants: {
              variant: { primary: [], white: [] },
              selected: {
                true: [
                  "bg-primary/10",
                  "hover:bg-primary/10",
                  "text-primary font-semibold",
                ],
                false: ["font-medium"],
              },
            },
            defaultVariants: { variant: "primary", selected: !1 },
          }
        ),
        s = (0, l.forwardRef)((e, t) => {
          let {
            component: r = "li",
            className: l,
            icon: s,
            label: o,
            trailing: c,
            selected: d = !1,
            ...x
          } = e;
          return (0, a.jsxs)(r, {
            ref: t,
            className: (0, i.cx)(n({ selected: d, className: l })),
            ...x,
            children: [
              s && (0, a.jsx)("div", { className: "flex mr-3", children: s }),
              o && (0, a.jsx)("span", { children: o }),
              c &&
                (0, a.jsx)("div", { className: "flex ml-auto", children: c }),
            ],
          });
        });
      s.displayName = "NavigationRailDestination";
      let o = (0, l.forwardRef)((e, t) => {
        let {
          component: r = "ul",
          className: l,
          style: i,
          leading: n,
          trailing: s,
          children: o,
          ...c
        } = e;
        return (0, a.jsxs)(r, {
          ref: t,
          className: "flex flex-col ".concat(l && l),
          style: i,
          ...c,
          children: [
            e.leading && { leading: n },
            o,
            e.trailing && { trailing: s },
          ],
        });
      });
      (o.displayName = "NavigationRail"), (t.Z = o);
    },
    20320: function (e, t, r) {
      r.d(t, {
        B: function () {
          return n;
        },
      });
      var a = r(98153);
      r(96682);
      var l = r(73918);
      let i = (0, l.j)([]),
        n = (e) => {
          let t = new Date(),
            r = Math.floor(
              ("string" == typeof e
                ? t.getTime() - new Date(e).getTime()
                : t.getTime() - e.getTime()) /
                1e3 /
                60
            ),
            a = Math.floor(r / 60 / 24 / 30 / 12),
            l = Math.floor(r / 60 / 24 / 30),
            i = Math.floor(r / 60 / 24),
            n = Math.floor(r / 60),
            s = Math.floor(r);
          return a > 0
            ? ""
                .concat(a, " year")
                .concat(a > 1 || l % 12 > 0 ? "s" : "", " ago")
            : l > 0
            ? ""
                .concat(l, " month")
                .concat(l > 1 || i % 30 > 0 ? "s" : "", " ago")
            : i > 0
            ? ""
                .concat(i, " day")
                .concat(i > 1 || n % 12 > 0 ? "s" : "", " ago")
            : n > 0
            ? ""
                .concat(n, " hour")
                .concat(n > 1 || s % 60 > 0 ? "s" : "", " ago")
            : s > 0
            ? "".concat(s, " min").concat(s > 1 ? "s" : "", " ago")
            : "".concat(s < 1 ? 1 : s, " min ago");
        },
        s = (e) => {
          let {
            component: t = "label",
            className: r,
            date: s,
            prefix: o,
            ...c
          } = e;
          return (0, a.jsx)(t, {
            role: "timeago",
            className: (0, l.cx)(i({ className: r })),
            ...c,
            children: "".concat(o || "").concat(n(s)),
          });
        };
      (s.displayName = "TimeAgo"), (t.Z = s);
    },
    78974: function (e, t, r) {
      r.d(t, {
        qE: function () {
          return d.default;
        },
        zx: function () {
          return m;
        },
        XZ: function () {
          return g;
        },
        PZ: function () {
          return o.Z;
        },
        uF: function () {
          return w.default;
        },
        iz: function () {
          return j.Z;
        },
        To: function () {
          return _;
        },
        dy: function () {
          return N.default;
        },
        Lt: function () {
          return k.default;
        },
        ub: function () {
          return F;
        },
        SK: function () {
          return S.default;
        },
        l0: function () {
          return B.default;
        },
        av: function () {
          return T;
        },
        JO: function () {
          return n.Z;
        },
        hU: function () {
          return E.Z;
        },
        PJ: function () {
          return n.P;
        },
        Ee: function () {
          return V;
        },
        II: function () {
          return L;
        },
        rU: function () {
          return x.Z;
        },
        Qj: function () {
          return f;
        },
        aN: function () {
          return u.Z;
        },
        qf: function () {
          return P.default;
        },
        v2: function () {
          return z.default;
        },
        u_: function () {
          return D.default;
        },
        Zl: function () {
          return X;
        },
        xr: function () {
          return G.default;
        },
        mQ: function () {
          return Y.default;
        },
        Vp: function () {
          return et;
        },
        gx: function () {
          return el;
        },
        bb: function () {
          return ei.Z;
        },
        u: function () {
          return ed.Tooltip;
        },
        _v: function () {
          return ed.TooltipContent;
        },
        aJ: function () {
          return ed.TooltipTrigger;
        },
        nk: function () {
          return eu;
        },
        O_: function () {
          return J;
        },
        D2: function () {
          return ec;
        },
      });
      var a = r(98153),
        l = r(96682),
        i = r(73918),
        n = r(42387);
      class s {}
      (s.Success = function (e) {
        let { color: t } = e;
        return (0, a.jsx)(n.Z, {
          id: n.P.SuccessFill_16,
          className: "text-green",
          style: { color: t },
        });
      }),
        (s.Error = function (e) {
          let { color: t } = e;
          return (0, a.jsx)(n.Z, {
            id: n.P.ErrorFill_16,
            className: "text-red",
            style: { color: t },
          });
        }),
        (s.Info = function (e) {
          let { color: t } = e;
          return (0, a.jsx)(n.Z, {
            id: n.P.InfoFill_16,
            className: "text-black_9",
            style: { color: t },
          });
        }),
        (s.Question = function (e) {
          let { color: t } = e;
          return (0, a.jsx)(n.Z, {
            id: n.P.QuestionFill_16,
            className: "text-orange",
            style: { color: t },
          });
        });
      var o = r(55834);
      let c = (0, i.j)(
        [
          "flex",
          "flex-row",
          "items-center",
          "px-4",
          "w-full",
          "text-white",
          "text-sm",
          "leading-[18px]",
          "min-h-[38px]",
        ],
        {
          variants: {
            variant: {
              negative: ["bg-red"],
              default: ["bg-black_3"],
              positive: ["bg-primary"],
            },
          },
          defaultVariants: { variant: "default" },
        }
      );
      (0, l.forwardRef)((e, t) => {
        let {
          component: r = "div",
          className: l,
          variant: n = "default",
          children: d,
          buttons: x,
          onClose: u,
          withCloseButton: p,
          ...h
        } = e;
        return (0, a.jsxs)(r, {
          ref: t,
          className: (0, i.cx)(c({ variant: n, className: l })),
          ...h,
          children: [
            (0, a.jsx)("div", {
              className: "mr-3",
              children: (0, a.jsx)(s.Info, { color: "white" }),
            }),
            (0, a.jsx)("div", {
              className: "flex-1",
              children: (0, a.jsx)("p", { children: d }),
            }),
            x &&
              (0, a.jsx)("div", {
                className: "flex flex-row py-2 space-x-1.5 m-[1px]",
                children: x,
              }),
            p &&
              (0, a.jsx)("div", {
                className: "-mr-1",
                children: (0, a.jsx)(o.Z, { onClick: () => u() }),
              }),
          ],
        });
      }).displayName = "Alert";
      var d = r(10573),
        x = r(92619),
        u = r(83262);
      let p = (0, i.j)(
          [
            "flex",
            "justify-center",
            "items-center",
            "relative",
            "text-xs",
            "font-semibold",
            "m-0.5",
            "rounded-md",
            "focus:outline-none",
            "h-[28px]",
            "min-w-[64px]",
          ],
          {
            variants: {
              variant: {
                primary: ["px-2", "py-1.5", "text-white"],
                secondary: ["px-[7px]", "py-[5px]", "border"],
                tertiary: [
                  "px-[7px]",
                  "py-[5px]",
                  "border",
                  "text-black_3",
                  "border-black_e",
                  "hover:bg-black/5",
                ],
                link: [
                  "px-2",
                  "py-1.5",
                  "text-black_3",
                  "border-transparent",
                  "hover:bg-black/5",
                ],
              },
              destructive: { true: "" },
              fullWidth: { true: "flex-1" },
              disabled: { true: ["opacity-30", "cursor-not-allowed"] },
              loading: { true: "" },
              highlight: { true: "" },
            },
            compoundVariants: [
              { variant: ["primary"], class: ["p-[5px]"] },
              {
                variant: ["primary"],
                destructive: !1,
                class: [
                  "bg-primary",
                  "border-primary",
                  "hover:bg-primary-dark",
                ],
              },
              {
                variant: ["primary"],
                destructive: !0,
                class: [
                  "bg-gradient-to-r hover:from-black/5 hover:to-black/5",
                  "bg-red",
                  "border-red",
                  "hover:bg-red",
                  "text-white",
                ],
              },
              {
                variant: ["secondary"],
                destructive: !1,
                class: [
                  "text-primary",
                  "border-primary",
                  "hover:text-primary",
                  "hover:border-primary",
                  "hover:bg-primary/10",
                ],
              },
              {
                variant: ["secondary"],
                destructive: !0,
                class: [
                  "text-red",
                  "border-red",
                  "hover:text-red",
                  "hover:border-red",
                  "hover:bg-red/10",
                ],
              },
              {
                variant: ["secondary"],
                disabled: !0,
                class: ["hover:bg-transparent"],
              },
              {
                variant: ["secondary"],
                highlight: !0,
                class: ["text-primary", "bg-white", "hover:bg-white"],
              },
              {
                variant: ["tertiary"],
                disabled: !0,
                class: ["hover:bg-transparent"],
              },
              {
                variant: ["link"],
                disabled: !0,
                class: ["hover:bg-transparent"],
              },
              { variant: ["link"], loading: !0, class: ["bg-black/5"] },
            ],
            defaultVariants: { variant: "primary" },
          }
        ),
        h = (0, l.forwardRef)((e, t) => {
          let {
            component: r = "button",
            className: l,
            type: n = "button",
            variant: s = "primary",
            leftIcon: o,
            rightIcon: c,
            children: d,
            destructive: x = !1,
            fullWidth: h = !1,
            disabled: f,
            loading: m,
            loadingLabel: v,
            highlight: b,
            onClick: g,
            ...w
          } = e;
          return (0, a.jsx)(r, {
            ref: t,
            className: (0, i.cx)("focus:outline-none", h ? "flex-1" : ""),
            type: n,
            disabled: f,
            onClick: (e) => {
              f || m || !g || g(e);
            },
            ...w,
            children: (0, a.jsxs)("div", {
              className: (0, i.cx)(
                p({
                  variant: s,
                  destructive: x,
                  fullWidth: h,
                  disabled: f,
                  loading: m,
                  className: l,
                  highlight: b,
                })
              ),
              children: [
                (0, a.jsxs)(a.Fragment, {
                  children: [
                    o &&
                      (0, a.jsx)("div", {
                        className: (0, i.cx)(
                          "inline-block -ml-0.5 mr-1.5",
                          m ? "text-transparent hover:text-transparent" : ""
                        ),
                        style: { height: 16 },
                        children: o,
                      }),
                    d &&
                      (0, a.jsx)("span", {
                        className: (0, i.cx)(
                          "whitespace-nowrap text-center overflow-hidden",
                          h ? "w-full" : "",
                          m ? "text-transparent hover:text-transparent" : ""
                        ),
                        children: d,
                      }),
                    c &&
                      (0, a.jsx)("div", {
                        className: (0, i.cx)(
                          "inline-block ml-1 -mr-1",
                          m ? "text-transparent hover:text-transparent" : ""
                        ),
                        style: { height: 16 },
                        children: c,
                      }),
                  ],
                }),
                m &&
                  (0, a.jsxs)("div", {
                    className: "absolute flex flex-row px-1.5",
                    children: [
                      (0, a.jsx)(u.Z, {
                        variant: "primary" === s ? "white" : "primary",
                      }),
                      v &&
                        (0, a.jsx)("span", {
                          className: (0, i.cx)(
                            "whitespace-nowrap ml-1.5 text-while",
                            h ? "w-full" : ""
                          ),
                          children: v,
                        }),
                    ],
                  }),
              ],
            }),
          });
        }),
        f = (e) => {
          let { ...t } = e;
          return (0, a.jsx)(h, { component: e.disabled ? "div" : x.Z, ...t });
        };
      h.displayName = "Button";
      var m = h;
      let v = (0, i.j)(["relative"], {
          variants: {
            variant: {
              variant_1: ["w-4 h-4", "p-0.5"],
              variant_2: ["w-4 h-4"],
            },
          },
          defaultVariants: {},
        }),
        b = (0, l.forwardRef)((e, t) => {
          let {
            variant: r = "variant_1",
            className: l,
            checked: s,
            destructive: o,
            ...c
          } = e;
          return (0, a.jsxs)("div", {
            className: (0, i.cx)(v({ variant: r, className: l })),
            children: [
              (0, a.jsx)("input", {
                ref: t,
                type: "checkbox",
                className: (0, i.cx)(
                  "opacity-0 absolute w-full h-full peer cursor-pointer"
                ),
                checked: s,
                ...c,
              }),
              (0, a.jsx)("div", {
                className: (0, i.cx)(
                  "w-full h-full",
                  "border",
                  "peer-checked:bg-primary",
                  "peer-checked:border-primary",
                  "",
                  "",
                  "",
                  "flex flex-col items-center justify-center",
                  "variant_1" === r ? "rounded-sm" : "rounded",
                  o ? "border-red" : "border-black_3"
                ),
                children: (0, a.jsx)(n.Z, {
                  id: n.P.Checkmark_12,
                  className: "text-white",
                }),
              }),
            ],
          });
        });
      b.displayName = "Checkbox";
      var g = b;
      r(79790);
      var w = r(58164),
        j = r(2662);
      function C() {
        return (0, a.jsx)("svg", {
          width: "28",
          height: "29",
          viewBox: "0 0 28 29",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, a.jsxs)("g", {
            id: "Frame 1",
            children: [
              (0, a.jsx)("path", {
                id: "Vector",
                opacity: "0.8",
                d: "M13.9854 0C21.7171 0 27.9854 6.26808 27.9854 14.0004C27.9854 21.7326 21.7178 28 13.9854 28",
                fill: "#246BFD",
              }),
              (0, a.jsx)("path", {
                id: "Vector_2",
                d: "M13.8207 0C15.7709 0 18.0686 5.99856 18.0686 13.7308C18.0686 21.4631 15.7709 28 13.8207 28C11.8706 28 10.7002 21.7319 10.7002 14.0004C10.7002 6.26877 11.8706 0 13.8207 0Z",
                fill: "#246BFD",
              }),
              (0, a.jsx)("path", {
                id: "Vector_3",
                d: "M2.921 12.6224C2.88189 11.482 2.77416 10.3446 2.59835 9.21589C2.54048 8.85527 2.47537 8.49465 2.38132 8.14025C2.32779 7.93299 2.26919 7.70087 2.14693 7.51849C2.09579 7.43763 2.02009 7.37354 1.92991 7.33472C1.88563 7.31539 1.83752 7.30539 1.78884 7.30539C1.74016 7.30539 1.69204 7.31539 1.64777 7.33472C1.45389 7.40934 1.36274 7.61797 1.2998 7.80864C1.21561 8.08513 1.15227 8.36703 1.11027 8.65216C0.94633 9.67801 0.841517 10.7117 0.796301 11.7485C0.72444 13.0772 0.717689 14.4073 0.776045 15.7388C0.815795 16.8208 0.913586 17.9002 1.06903 18.9727C1.11358 19.2966 1.1771 19.6179 1.25929 19.935C1.31499 20.1367 1.38517 20.3986 1.58628 20.5139C1.84744 20.6645 2.09268 20.4794 2.20264 20.2535C2.31292 20.0012 2.39465 19.7383 2.44643 19.4694C2.65767 18.5236 2.76474 17.5523 2.84214 16.5886C2.94735 15.269 2.97367 13.9448 2.921 12.6224ZM2.23519 15.5868C2.2077 16.1552 2.16478 16.7226 2.10642 17.2891C2.08038 17.5371 2.05144 17.7844 2.01816 18.031C2.01816 18.0628 2.01021 18.0939 2.00587 18.1257C2.00587 18.134 2.00587 18.1402 2.00587 18.145C2.00587 18.1499 2.00587 18.1561 2.00587 18.1637L1.98416 18.3136C1.96825 18.4186 1.95161 18.5229 1.93425 18.6266C1.89663 18.8497 1.85539 19.0728 1.80548 19.2939L1.79029 19.2131C1.75701 19.0328 1.72879 18.8511 1.70203 18.6687V18.6569V18.6438C1.69769 18.6155 1.69407 18.5872 1.69045 18.5595C1.68394 18.5105 1.67743 18.4621 1.67164 18.4138C1.65718 18.3019 1.64415 18.1892 1.63113 18.0773C1.57326 17.5592 1.52985 17.0411 1.4973 16.5202C1.41193 15.2624 1.38854 14.0041 1.42713 12.7454C1.45823 11.658 1.52623 10.5693 1.66079 9.48946C1.66875 9.43074 1.67598 9.37271 1.68394 9.31399C1.68394 9.2981 1.69479 9.23454 1.69696 9.21589C1.70998 9.12539 1.72373 9.0342 1.7382 8.9437C1.75749 8.82211 1.77895 8.70098 1.80258 8.58031C1.82863 8.69776 1.85274 8.81566 1.87493 8.93403C1.91254 9.1323 1.94727 9.33057 1.9762 9.53022L2.00225 9.70984C2.00225 9.70984 2.00225 9.71813 2.00225 9.72366C2.00659 9.75267 2.01021 9.78169 2.01455 9.81071C2.03046 9.93045 2.04565 10.05 2.06012 10.1693C2.12427 10.7104 2.17249 11.253 2.20481 11.7969C2.28655 13.0588 2.2967 14.3239 2.23519 15.5868Z",
                fill: "#FF7F41",
              }),
              (0, a.jsx)("path", {
                id: "Vector_4",
                d: "M6.77805 2.21053C8.52841 2.21053 9.94747 7.48867 9.94747 14.0004C9.94747 20.5121 8.52841 25.7895 6.77805 25.7895C5.02769 25.7895 4.05273 20.5113 4.05273 14.0004C4.05273 7.48938 5.03095 2.21053 6.77805 2.21053Z",
                fill: "#246BFD",
              }),
            ],
          }),
        });
      }
      function y() {
        return (0, a.jsxs)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          width: "60",
          height: "28",
          viewBox: "0 0 60 28",
          fill: "none",
          children: [
            (0, a.jsx)("path", {
              d: "M11.8042 4.11765H15.3679V23.8824H11.8042V21.8616C10.7545 23.2088 9.2627 23.8824 7.32894 23.8824C5.46884 23.8824 3.87578 23.1811 2.54977 21.7785C1.24218 20.3576 0.588379 18.6228 0.588379 16.5744C0.588379 14.526 1.24218 12.8005 2.54977 11.3979C3.87578 9.97693 5.46884 9.26644 7.32894 9.26644C9.2627 9.26644 10.7545 9.94002 11.8042 11.2872V4.11765ZM4.83477 19.3979C5.57144 20.1176 6.49229 20.4775 7.59729 20.4775C8.7023 20.4775 9.61394 20.1176 10.3322 19.3979C11.0504 18.6597 11.4096 17.7186 11.4096 16.5744C11.4096 15.4302 11.0504 14.4983 10.3322 13.7785C9.61394 13.0404 8.7023 12.6713 7.59729 12.6713C6.49229 12.6713 5.57144 13.0404 4.83477 13.7785C4.11652 14.4983 3.75739 15.4302 3.75739 16.5744C3.75739 17.7186 4.11652 18.6597 4.83477 19.3979Z",
              fill: "black",
            }),
            (0, a.jsx)("path", {
              d: "M30.4142 21.7785C28.9961 23.1811 27.2649 23.8824 25.2206 23.8824C23.1763 23.8824 21.4452 23.1811 20.0271 21.7785C18.6274 20.3576 17.9275 18.6228 17.9275 16.5744C17.9275 14.526 18.6274 12.8005 20.0271 11.3979C21.4452 9.97693 23.1763 9.26644 25.2206 9.26644C27.2649 9.26644 28.9961 9.97693 30.4142 11.3979C31.8322 12.8005 32.5413 14.526 32.5413 16.5744C32.5413 18.6228 31.8322 20.3576 30.4142 21.7785ZM22.541 19.3149C23.2592 20.0346 24.1524 20.3945 25.2206 20.3945C26.2888 20.3945 27.182 20.0346 27.9003 19.3149C28.6185 18.5952 28.9776 17.6817 28.9776 16.5744C28.9776 15.4671 28.6185 14.5536 27.9003 13.8339C27.182 13.1142 26.2888 12.7543 25.2206 12.7543C24.1524 12.7543 23.2592 13.1142 22.541 13.8339C21.8411 14.5536 21.4912 15.4671 21.4912 16.5744C21.4912 17.6817 21.8411 18.5952 22.541 19.3149Z",
              fill: "black",
            }),
            (0, a.jsx)("path", {
              d: "M38.7797 12.0346C39.1112 11.1488 39.6545 10.4844 40.4096 10.0415C41.1831 9.59862 42.0395 9.65398 42.9788 9.65398V13.3633C41.8922 13.2341 40.9161 13.4556 40.0505 14.0277C39.2033 14.5998 38.7797 15.5502 38.7797 16.8789V23.8824H35.2161V9.65398H38.7797V12.0346Z",
              fill: "black",
            }),
            (0, a.jsx)("path", {
              d: "M55.4953 9.65398H59.059V23.8824H55.4953V21.8616C54.4272 23.2088 52.9262 23.8824 50.9924 23.8824C49.1507 23.8824 47.5669 23.1811 46.2409 21.7785C44.9333 20.3576 44.2795 18.6228 44.2795 16.5744C44.2795 14.526 44.9333 12.8005 46.2409 11.3979C47.5669 9.97693 49.1507 9.26644 50.9924 9.26644C52.9262 9.26644 54.4272 9.94002 55.4953 11.2872V9.65398ZM48.5259 19.3979C49.2441 20.1176 50.1558 20.4775 51.2608 20.4775C52.3658 20.4775 53.2774 20.1176 53.9957 19.3979C54.7323 18.6597 55.1007 17.7186 55.1007 16.5744C55.1007 15.4302 54.7323 14.4983 53.9957 13.7785C53.2774 13.0404 52.3658 12.6713 51.2608 12.6713C50.1558 12.6713 49.2441 13.0404 48.5259 13.7785C47.8076 14.4983 47.4485 15.4302 47.4485 16.5744C47.4485 17.7186 47.8076 18.6597 48.5259 19.3979Z",
              fill: "black",
            }),
          ],
        });
      }
      var _ = function (e) {
          let { className: t, ...r } = e;
          return (0, a.jsxs)("div", {
            className: (0, i.cx)("flex flex-row", t),
            ...r,
            children: [
              (0, a.jsx)("div", {
                className: "mr-[6px] w-[28px] h-[28px]",
                children: (0, a.jsx)(C, {}),
              }),
              (0, a.jsx)("div", {
                className: "w-[58px] h-[28px]",
                children: (0, a.jsx)(y, {}),
              }),
            ],
          });
        },
        N = r(97067),
        k = r(13157);
      let Z = () => {
        {
          let { hostname: e, port: t } = window.location;
          if ("localhost" === e && "6006" === "".concat(t)) return !0;
        }
        return !1;
      };
      var V = (e) => {
        let { src: t, alt: r, ...l } = e,
          i = t;
        return (
          !Z() &&
            i &&
            i.startsWith("/static/") &&
            (i = "/__dora__/morpheus".concat(t)),
          (0, a.jsx)("img", { src: i, alt: r || "", ...l })
        );
      };
      let R = (0, i.j)([
          "bg-white",
          "w-[272px]",
          "flex flex-col items-center",
          "p-4",
        ]),
        M = (e) => {
          let {
            component: t = "div",
            className: r,
            imageSrc: l,
            children: n,
            ...s
          } = e;
          return (0, a.jsxs)(t, {
            role: "emptystate",
            className: (0, i.cx)(R({ className: r })),
            ...s,
            children: [
              (0, a.jsx)(V, {
                className: "mb-4",
                src: l,
                width: 240,
                height: 150,
                alt: "",
              }),
              (0, a.jsx)("div", {
                className: "text-xs text-center font-normal text-black_3",
                children: n,
              }),
            ],
          });
        };
      M.displayName = "EmptyState";
      var F = M,
        S = r(28567),
        B = r(17626);
      function T() {
        return (0, a.jsx)("svg", {
          width: "18",
          height: "18",
          viewBox: "0 0 19 18",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, a.jsxs)("g", {
            id: "logo googleg 48dp",
            children: [
              (0, a.jsx)("path", {
                id: "Shape",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M18.14 9.20419C18.14 8.56601 18.0827 7.95237 17.9764 7.36328H9.5V10.8446H14.3436C14.135 11.9696 13.5009 12.9228 12.5477 13.561V15.8192H15.4564C17.1582 14.2524 18.14 11.9451 18.14 9.20419Z",
                fill: "#4285F4",
              }),
              (0, a.jsx)("path", {
                id: "Shape_2",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.49976 18.0009C11.9298 18.0009 13.967 17.195 15.4561 15.8205L12.5475 13.5623C11.7416 14.1023 10.7107 14.4214 9.49976 14.4214C7.15567 14.4214 5.17158 12.8382 4.46385 10.7109H1.45703V13.0428C2.93794 15.9841 5.98158 18.0009 9.49976 18.0009Z",
                fill: "#34A853",
              }),
              (0, a.jsx)("path", {
                id: "Shape_3",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.46409 10.7108C4.28409 10.1708 4.18182 9.59398 4.18182 9.0008C4.18182 8.40762 4.28409 7.8308 4.46409 7.2908V4.95898H1.45727C0.847727 6.17398 0.5 7.54853 0.5 9.0008C0.5 10.4531 0.847727 11.8276 1.45727 13.0426L4.46409 10.7108Z",
                fill: "#FBBC05",
              }),
              (0, a.jsx)("path", {
                id: "Shape_4",
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M9.49976 3.57955C10.8211 3.57955 12.0075 4.03364 12.9402 4.92545L15.5216 2.34409C13.9629 0.891818 11.9257 0 9.49976 0C5.98158 0 2.93794 2.01682 1.45703 4.95818L4.46385 7.29C5.17158 5.16273 7.15567 3.57955 9.49976 3.57955Z",
                fill: "#EA4335",
              }),
            ],
          }),
        });
      }
      var E = r(65237);
      let I = (0, i.j)(
          [
            "flex",
            "justify-center",
            "items-center",
            "border",
            "placeholder:text-black_9",
            "m-0.5",
            "px-[5px]",
            "rounded-md",
            "text-black_3",
            "border-black_e",
            "focus:border-primary",
            "focus:outline",
            "focus:outline-primary/10",
            "min-w-[64px]",
          ],
          {
            variants: {
              variant: {
                outline_12: ["h-[28px]", "text-xs"],
                outline_14: ["h-[32px]", "text-sm leading-[18px]"],
              },
              disabled: {
                true: [
                  "cursor-not-allowed",
                  "text-black_c placeholder:text-black_c",
                  "bg-transparent",
                  "border-black_e",
                ],
              },
              fullWidth: { true: "w-full" },
            },
            defaultVariants: {},
          }
        ),
        H = (0, l.forwardRef)((e, t) => {
          let r;
          let {
              className: l,
              variant: n = "outline_12",
              leftIcon: s,
              rightIcon: o,
              disabled: c,
              ...d
            } = e,
            x = (0, B.useFormFieldContext)(),
            { assistiveText: u, error: p } = x || {};
          if ("string" == typeof p) r = p;
          else if (
            "boolean" != typeof p &&
            p &&
            (null == p ? void 0 : p.message)
          ) {
            var h;
            r =
              null === (h = p.message) || void 0 === h ? void 0 : h.toString();
          }
          return (0, a.jsxs)("div", {
            className: (0, i.cx)("flex flex-col relative"),
            children: [
              (0, a.jsx)("input", {
                ref: t,
                className: (0, i.cx)(
                  I({ variant: n, disabled: c, className: l }),
                  s ? "pl-[29px]" : "",
                  o ? "pr-[29px]" : "",
                  (null == x ? void 0 : x.error) &&
                    "border-red hover:border-red focus:border-red"
                ),
                disabled: c,
                ...d,
              }),
              s &&
                (0, a.jsx)("div", {
                  className: (0, i.cx)(
                    "absolute",
                    "flex items-center",
                    "m-0.5",
                    "top-0",
                    "left-0 pl-1.5",
                    "outline_12" === n ? "h-[28px]" : "",
                    "outline_14" === n ? "h-[32px]" : ""
                  ),
                  children: s,
                }),
              o &&
                (0, a.jsx)("div", {
                  className: (0, i.cx)(
                    "absolute",
                    "flex items-center",
                    "m-0.5",
                    "top-0",
                    "right-0 pr-1.5",
                    "outline_12" === n ? "h-[28px]" : "",
                    "outline_14" === n ? "h-[32px]" : ""
                  ),
                  children: o,
                }),
              (u || r) &&
                (0, a.jsxs)("div", {
                  className: "text-xs p-0.5",
                  children: [
                    u
                      ? (0, a.jsx)("p", {
                          className: "text-black_9",
                          children: u,
                        })
                      : null,
                    r
                      ? (0, a.jsx)("p", { className: "text-red", children: r })
                      : null,
                  ],
                }),
            ],
          });
        });
      H.displayName = "Input";
      var L = H,
        P = r(81957),
        z = r(91727),
        D = r(15098);
      r(4857);
      var Q = r(89462);
      let A = (0, i.j)(
          [
            "flex flex-col items-center",
            "bg-white",
            "rounded-lg",
            "outline outline-1 outline-black_e",
            "shadow-comp-notification",
            "px-4",
            "text-sm",
            "leading-[18px]",
            "min-h-[38px]",
            "max-w-[248px]",
          ],
          { variants: {} }
        ),
        W = (0, l.forwardRef)((e, t) => {
          let {
              className: r,
              icon: l,
              children: s,
              actions: o,
              onClose: c,
              withCloseButton: d,
              ...x
            } = e,
            u = !!o;
          return (0, a.jsxs)("div", {
            ref: t,
            className: (0, i.cx)(A({ className: r }), u ? "pt-1.5" : ""),
            ...x,
            children: [
              (0, a.jsxs)("div", {
                className: (0, i.cx)(
                  "flex flex-row py-2.5",
                  u ? "items-start" : "items-center"
                ),
                children: [
                  l &&
                    (0, a.jsx)("div", {
                      className: "mr-3 flex flex-row items-center",
                      children: l,
                    }),
                  (0, a.jsx)("p", {
                    className: "text-xs font-medium text-black_3",
                    children: s,
                  }),
                  d &&
                    (0, a.jsx)("button", {
                      className: "ml-3",
                      onClick: c,
                      children: (0, a.jsx)(n.Z, {
                        id: n.P.Xmark_16,
                        className: "text-black_9",
                      }),
                    }),
                ],
              }),
              o &&
                (0, a.jsx)("div", {
                  className: "flex flex-row justify-end w-full mb-4 space-x-2",
                  children: o,
                }),
            ],
          });
        });
      class q {
        show(e, t) {
          setTimeout(() => {
            Q.default.custom(
              (r) =>
                (0, a.jsx)(W, {
                  className: r.visible ? "animate-enter" : "animate-leave",
                  icon: null == t ? void 0 : t.icon,
                  onClose: () => Q.default.dismiss(r.id),
                  withCloseButton: null == t ? void 0 : t.withCloseButton,
                  children: e,
                }),
              { position: "bottom-right", duration: 1 / 0 }
            );
          }, 0);
        }
        showSuccess(e, t) {
          this.show(e, {
            ...t,
            icon: (null == t ? void 0 : t.icon) || (0, a.jsx)(s.Success, {}),
          });
        }
        showError(e, t) {
          this.show(e, {
            ...t,
            icon: (null == t ? void 0 : t.icon) || (0, a.jsx)(s.Error, {}),
          });
        }
        showInfo(e, t) {
          this.show(e, {
            icon:
              (null == t ? void 0 : t.icon) ||
              (0, a.jsx)(s.Info, { color: null == t ? void 0 : t.iconColor }),
            ...t,
          });
        }
        showQuestion(e, t) {
          this.show(e, {
            ...t,
            icon: (null == t ? void 0 : t.icon) || (0, a.jsx)(s.Question, {}),
          });
        }
      }
      let J = new q();
      W.displayName = "Notification";
      let O = (0, i.j)(
          [
            "flex",
            "pl-2 pr-2",
            "w-full",
            "text-sm",
            "leading-[18px]",
            "h-[44px]",
            "rounded-2xl",
            "overflow-hidden",
          ],
          {
            variants: {
              variant: { light: ["text-black_3"], dark: ["text-white"] },
            },
            defaultVariants: { variant: "light" },
          }
        ),
        U = (0, l.forwardRef)((e, t) => {
          let {
            className: r,
            variant: l = "light",
            icon: s,
            children: c,
            moreButtonText: d,
            onClose: x,
            withCloseButton: u,
            ...p
          } = e;
          return (0, a.jsx)("div", {
            className: (0, i.cx)(["relative", "z-10", "group"]),
            children: (0, a.jsxs)("div", {
              ref: t,
              className: (0, i.cx)(O({ variant: l, className: r })),
              ...p,
              children: [
                (0, a.jsx)("div", {
                  className: (0, i.cx)([
                    "absolute top-0 bottom-0 left-0 right-0",
                    "rounded-2xl",
                    "z-0",
                    "dark" === l
                      ? "group-hover:bg-white/10"
                      : "group-hover:bg-black/5",
                  ]),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-row items-center flex-1 overflow-hidden",
                  style: { zIndex: 1 },
                  children: [
                    s &&
                      (0, a.jsx)("div", {
                        className: (0, i.cx)(
                          "w-8 h-8 mr-1 flex flex-col items-center justify-center",
                          "string" == typeof s ? "text-base leading-5" : ""
                        ),
                        children: s,
                      }),
                    (0, a.jsxs)("div", {
                      className:
                        "flex flex-row items-center flex-1 overflow-hidden",
                      children: [
                        (0, a.jsx)("p", {
                          className: "text-xs truncate",
                          children: c,
                        }),
                        d &&
                          (0, a.jsx)(m, {
                            component: "span",
                            className:
                              "dark" === l ? "text-white" : "text-black_3",
                            variant: "link",
                            rightIcon: (0, a.jsx)(n.Z, {
                              id: n.P.ArrowSquareUpRight_16,
                            }),
                            children: d || "Learn more",
                          }),
                      ],
                    }),
                    u &&
                      (0, a.jsx)("div", {
                        children: (0, a.jsx)(o.Z, {
                          onClick: (e) => {
                            x(), e.preventDefault(), e.stopPropagation();
                          },
                        }),
                      }),
                  ],
                }),
              ],
            }),
          });
        });
      U.displayName = "NotificationBanner";
      var X = U;
      let K = (0, i.j)(
        ["flex", "justify-center", "items-center", "focus:outline-none"],
        {
          variants: {
            variant: { variant_1: [], variant_2: [] },
            focus: { true: [] },
            active: { true: [] },
            size: {
              16: ["w-[16px]", "h-[16px]", "rounded"],
              32: ["w-[32px]", "h-[32px]", "rounded-md"],
            },
            checked: { true: ["bg-black/5"] },
            disabled: {
              true: [
                "cursor-not-allowed",
                "text-black_c",
                "hover:bg-transparent",
              ],
            },
          },
          compoundVariants: [
            {
              variant: ["variant_1"],
              class: [
                "hover:bg-black/5",
                "active:bg-primary",
                "active:text-white",
              ],
            },
            {
              variant: ["variant_1"],
              active: [!0],
              class: ["text-white", "bg-primary", "hover:bg-primary"],
            },
            {
              variant: ["variant_1"],
              disabled: [!0],
              class: [
                "active:border-transparent active:bg-transparent active:text-black_c",
              ],
            },
            {
              variant: ["variant_2"],
              class: ["hover:bg-black/5", "border border-black_e"],
            },
            { variant: ["variant_2"], disabled: [!0], class: [] },
          ],
          defaultVariants: { variant: "variant_1", size: 32, active: !1 },
        }
      );
      ((0, l.forwardRef)((e, t) => {
        let {
          component: r = "button",
          className: l,
          type: s = "button",
          variant: o = "variant_1",
          icon: c,
          size: d = 32,
          focus: x,
          active: u,
          checked: p,
          disabled: h,
          ...f
        } = e;
        return (0, a.jsx)(r, {
          ref: t,
          className: (0, i.cx)(
            K({
              variant: o,
              size: d,
              focus: x,
              active: u,
              checked: p,
              disabled: h,
              className: l,
            })
          ),
          type: s,
          ...f,
          children: (0, a.jsx)("span", {
            className: (0, i.cx)("flex flex-col items-center justify-center"),
            children: (0, a.jsx)(n.Z, { id: c }),
          }),
        });
      }).displayName = "OptionButton"),
        r(53375);
      var G = r(49639),
        Y = r(79477);
      let $ = (0, i.j)(
          [
            "flex",
            "items-center",
            "font-medium",
            "px-0.5",
            "rounded",
            "bg-black/5",
          ],
          {
            variants: {
              variant: { solid: [], light: [], outline: [] },
              color: {
                primary: "",
                green: "",
                purple: "",
                blue: "",
                red: "",
                yellow: "",
                gray: "",
              },
              size: {
                sm: ["h-[14px]", "px-1", "py-px", "text-[10px] leading-[14px]"],
                md: ["h-5", "px-1", "py-0.5", "text-xs"],
                lg: ["h-6", "px-2", "py-1", "text-sm leading-[18px]"],
              },
            },
            compoundVariants: [
              {
                variant: "solid",
                color: "primary",
                class: ["bg-primary", "text-white"],
              },
              {
                variant: "solid",
                color: "green",
                class: ["bg-green", "text-white"],
              },
              {
                variant: "solid",
                color: "purple",
                class: ["bg-purple", "text-white"],
              },
              {
                variant: "solid",
                color: "blue",
                class: ["bg-blue", "text-white"],
              },
              {
                variant: "solid",
                color: "red",
                class: ["bg-red", "text-white"],
              },
              {
                variant: "solid",
                color: "yellow",
                class: ["bg-yellow", "text-black_3"],
              },
              {
                variant: "solid",
                color: "gray",
                class: ["bg-gray", "text-black_3"],
              },
              {
                variant: "light",
                color: "green",
                class: ["bg-green/20", "text-green"],
              },
              {
                variant: "light",
                color: "primary",
                class: ["bg-primary/20", "text-primary"],
              },
              {
                variant: "light",
                color: "purple",
                class: ["bg-purple/20", "text-purple"],
              },
              {
                variant: "light",
                color: "blue",
                class: ["bg-blue/20", "text-blue"],
              },
              {
                variant: "light",
                color: "red",
                class: ["bg-red/20", "text-red"],
              },
              {
                variant: "light",
                color: "yellow",
                class: ["bg-yellow/20", "text-black_3"],
              },
              {
                variant: "light",
                color: "gray",
                class: ["bg-gray", "text-black_3"],
              },
            ],
            defaultVariants: { variant: "solid" },
          }
        ),
        ee = (0, l.forwardRef)((e, t) => {
          let {
            component: r = "div",
            className: l,
            variant: n = "solid",
            color: s = "gray",
            size: o = "sm",
            leftIcon: c,
            rightIcon: d,
            children: x,
            ...u
          } = e;
          return (0, a.jsx)(r, {
            ref: t,
            className: (0, i.cx)(
              $({ variant: n, color: s, size: o, className: l })
            ),
            ...u,
            children: (0, a.jsxs)(a.Fragment, {
              children: [
                c &&
                  (0, a.jsx)("div", {
                    className: "inline-block mr-1.5",
                    style: { height: 16 },
                    children: c,
                  }),
                x && (0, a.jsx)("span", { children: x }),
                d && d,
              ],
            }),
          });
        });
      ee.displayName = "Tag";
      var et = ee;
      let er = (0, i.j)(
          [
            "flex",
            "justify-center",
            "items-center",
            "border",
            "placeholder:text-black_9",
            "m-0.5",
            "px-[5px]",
            "py-[5px]",
            "rounded-md",
            "text-black_3",
            "border-black_e",
            "focus:border-primary",
            "focus:outline",
            "focus:outline-primary/10",
            "min-w-[64px]",
          ],
          {
            variants: {
              variant: {
                outline_12: ["h-[28px]", "text-xs"],
                outline_14: ["h-[32px]", "text-sm leading-[18px]"],
              },
              disabled: {
                true: [
                  "cursor-not-allowed",
                  "text-black_c placeholder:text-black_c",
                  "bg-transparent",
                  "border-black_e",
                ],
              },
              fullWidth: { true: "w-full" },
            },
            defaultVariants: {},
          }
        ),
        ea = (0, l.forwardRef)((e, t) => {
          let r;
          let {
              className: l,
              variant: n = "outline_12",
              leftIcon: s,
              rightIcon: o,
              disabled: c,
              rows: d,
              ...x
            } = e,
            u = (0, B.useFormFieldContext)(),
            { assistiveText: p, error: h } = u || {};
          if ("string" == typeof h) r = h;
          else if (
            "boolean" != typeof h &&
            h &&
            (null == h ? void 0 : h.message)
          ) {
            var f;
            r =
              null === (f = h.message) || void 0 === f ? void 0 : f.toString();
          }
          return (0, a.jsxs)("div", {
            className: (0, i.cx)("flex flex-col relative"),
            children: [
              (0, a.jsx)("textarea", {
                ref: t,
                className: (0, i.cx)(
                  er({ variant: n, disabled: c, className: l }),
                  s ? "pl-[29px]" : "",
                  o ? "pr-[29px]" : "",
                  (null == u ? void 0 : u.error) &&
                    "border-red hover:border-red focus:border-red"
                ),
                disabled: c,
                style: {
                  height:
                    "outline_14" === n
                      ? "".concat(18 * (d || 1) + 12, "px")
                      : "".concat(16 * (d || 1) + 12, "px"),
                },
                ...x,
              }),
              s &&
                (0, a.jsx)("div", {
                  className: (0, i.cx)(
                    "absolute",
                    "flex items-center",
                    "m-0.5",
                    "top-0",
                    "left-0 pl-1.5",
                    "outline_12" === n ? "h-[28px]" : "",
                    "outline_14" === n ? "h-[32px]" : ""
                  ),
                  children: s,
                }),
              o &&
                (0, a.jsx)("div", {
                  className: (0, i.cx)(
                    "absolute",
                    "flex items-center",
                    "m-0.5",
                    "top-0",
                    "right-0 pr-1.5",
                    "outline_12" === n ? "h-[28px]" : "",
                    "outline_14" === n ? "h-[32px]" : ""
                  ),
                  children: o,
                }),
              (p || r) &&
                (0, a.jsxs)("div", {
                  className: "text-xs p-0.5",
                  children: [
                    p
                      ? (0, a.jsx)("p", {
                          className: "text-black_9",
                          children: p,
                        })
                      : null,
                    r
                      ? (0, a.jsx)("p", { className: "text-red", children: r })
                      : null,
                  ],
                }),
            ],
          });
        });
      ea.displayName = "TextArea";
      var el = ea,
        ei = r(20320);
      let en = (0, i.j)(
          [
            "flex flex-row items-center",
            "bg-white",
            "rounded-lg",
            "outline outline-1 outline-black_e",
            "shadow-comp-toast",
            "px-4",
            "text-sm",
            "leading-[18px]",
            "min-h-[38px]",
            "max-w-[calc(100vw-32px)]",
          ],
          { variants: {} }
        ),
        es = (0, l.forwardRef)((e, t) => {
          let { className: r, icon: l, children: n, ...s } = e;
          return (0, a.jsxs)("div", {
            ref: t,
            className: (0, i.cx)(en({ className: r })),
            ...s,
            children: [
              l &&
                (0, a.jsx)("div", {
                  className: "mr-3 flex flex-row items-center",
                  children: l,
                }),
              (0, a.jsx)("p", { className: "py-[9px]", children: n }),
            ],
          });
        });
      class eo {
        show(e, t) {
          Q.default.custom(
            (r) =>
              (0, a.jsx)(es, {
                className: r.visible ? "animate-enter" : "animate-leave",
                icon: null == t ? void 0 : t.icon,
                children: e,
              }),
            { position: "bottom-center" }
          );
        }
        showSuccess(e) {
          this.show(e, { icon: (0, a.jsx)(s.Success, {}) });
        }
        showError(e) {
          this.show(e, { icon: (0, a.jsx)(s.Error, {}) });
        }
        showInfo(e) {
          this.show(e, { icon: (0, a.jsx)(s.Info, {}) });
        }
        showQuestion(e) {
          this.show(e, { icon: (0, a.jsx)(s.Question, {}) });
        }
        showLoading(e) {
          this.show(e || "Loading...", { icon: (0, a.jsx)(u.Z, {}) });
        }
      }
      let ec = new eo();
      es.displayName = "Toast";
      var ed = r(52126);
      let ex = () => {
        {
          let { hostname: e, port: t } = window.location;
          if ("localhost" === e && "6006" === "".concat(t)) return !0;
        }
        return !1;
      };
      var eu = (e) => {
        let { src: t, ...r } = e,
          l = t;
        return (
          !ex() &&
            l &&
            l.startsWith("/static/") &&
            (l = "/__dora__/morpheus".concat(t)),
          (0, a.jsx)("video", { src: l, ...r })
        );
      };
    },
  },
]);
