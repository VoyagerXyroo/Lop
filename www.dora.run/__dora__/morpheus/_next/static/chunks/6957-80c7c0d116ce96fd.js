(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6957],
  {
    78326: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return y;
          },
        });
      let r = n(97295),
        i = n(3589)._(n(96682)),
        o = r._(n(94495)),
        a = r._(n(79032)),
        l = n(49829),
        u = n(69682),
        s = n(31505);
      n(80700);
      let d = n(24614),
        c = r._(n(661)),
        f = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/__dora__/morpheus/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function p(e, t, n, r, i, o) {
        let a = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== a &&
          ((e["data-loaded-src"] = a),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    i = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function m(e) {
        let [t, n] = i.version.split(".", 2),
          r = parseInt(t, 10),
          o = parseInt(n, 10);
        return r > 18 || (18 === r && o >= 3)
          ? { fetchPriority: e }
          : { fetchpriority: e };
      }
      let g = (0, i.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: o,
          height: a,
          width: l,
          decoding: u,
          className: s,
          style: d,
          fetchPriority: c,
          placeholder: f,
          loading: g,
          unoptimized: h,
          fill: y,
          onLoadRef: b,
          onLoadingCompleteRef: v,
          setBlurComplete: _,
          setShowAltText: w,
          onLoad: S,
          onError: P,
          ...C
        } = e;
        return i.default.createElement("img", {
          ...C,
          ...m(c),
          loading: g,
          width: l,
          height: a,
          decoding: u,
          "data-nimg": y ? "fill" : "1",
          className: s,
          style: d,
          sizes: o,
          srcSet: r,
          src: n,
          ref: (0, i.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e && (P && (e.src = e.src), e.complete && p(e, f, b, v, _, h));
            },
            [n, f, b, v, _, P, h, t]
          ),
          onLoad: (e) => {
            p(e.currentTarget, f, b, v, _, h);
          },
          onError: (e) => {
            w(!0), "empty" !== f && _(!0), P && P(e);
          },
        });
      });
      function h(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...m(n.fetchPriority),
          };
        return t && o.default.preload
          ? (o.default.preload(n.src, r), null)
          : i.default.createElement(
              a.default,
              null,
              i.default.createElement("link", {
                key: "__nimg-" + n.src + n.srcSet + n.sizes,
                rel: "preload",
                href: n.srcSet ? void 0 : n.src,
                ...r,
              })
            );
      }
      let y = (0, i.forwardRef)((e, t) => {
        let n = (0, i.useContext)(d.RouterContext),
          r = (0, i.useContext)(s.ImageConfigContext),
          o = (0, i.useMemo)(() => {
            let e = f || r || u.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: a, onLoadingComplete: p } = e,
          m = (0, i.useRef)(a);
        (0, i.useEffect)(() => {
          m.current = a;
        }, [a]);
        let y = (0, i.useRef)(p);
        (0, i.useEffect)(() => {
          y.current = p;
        }, [p]);
        let [b, v] = (0, i.useState)(!1),
          [_, w] = (0, i.useState)(!1),
          { props: S, meta: P } = (0, l.getImgProps)(e, {
            defaultLoader: c.default,
            imgConf: o,
            blurComplete: b,
            showAltText: _,
          });
        return i.default.createElement(
          i.default.Fragment,
          null,
          i.default.createElement(g, {
            ...S,
            unoptimized: P.unoptimized,
            placeholder: P.placeholder,
            fill: P.fill,
            onLoadRef: m,
            onLoadingCompleteRef: y,
            setBlurComplete: v,
            setShowAltText: w,
            ref: t,
          }),
          P.priority
            ? i.default.createElement(h, { isAppRouter: !n, imgAttributes: S })
            : null
        );
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    62609: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(97295)._(n(96682)).default.createContext({});
    },
    30853: function (e, t) {
      "use strict";
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    49829: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return l;
          },
        }),
        n(80700);
      let r = n(650),
        i = n(69682);
      function o(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function l(e, t) {
        var n;
        let l,
          u,
          s,
          {
            src: d,
            sizes: c,
            unoptimized: f = !1,
            priority: p = !1,
            loading: m,
            className: g,
            quality: h,
            width: y,
            height: b,
            fill: v = !1,
            style: _,
            onLoad: w,
            onLoadingComplete: S,
            placeholder: P = "empty",
            blurDataURL: C,
            fetchPriority: j,
            layout: O,
            objectFit: x,
            objectPosition: E,
            lazyBoundary: z,
            lazyRoot: M,
            ...I
          } = e,
          { imgConf: k, showAltText: A, blurComplete: R, defaultLoader: D } = t,
          U = k || i.imageConfigDefault;
        if ("allSizes" in U) l = U;
        else {
          let e = [...U.deviceSizes, ...U.imageSizes].sort((e, t) => e - t),
            t = U.deviceSizes.sort((e, t) => e - t);
          l = { ...U, allSizes: e, deviceSizes: t };
        }
        let L = I.loader || D;
        delete I.loader, delete I.srcSet;
        let N = "__next_img_default" in L;
        if (N) {
          if ("custom" === l.loader)
            throw Error(
              'Image with src "' +
                d +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = L;
          L = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (O) {
          "fill" === O && (v = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[O];
          e && (_ = { ..._, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[O];
          t && !c && (c = t);
        }
        let B = "",
          F = a(y),
          G = a(b);
        if ("object" == typeof (n = d) && (o(n) || void 0 !== n.src)) {
          let e = o(d) ? d.default : d;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((u = e.blurWidth),
            (s = e.blurHeight),
            (C = C || e.blurDataURL),
            (B = e.src),
            !v)
          ) {
            if (F || G) {
              if (F && !G) {
                let t = F / e.width;
                G = Math.round(e.height * t);
              } else if (!F && G) {
                let t = G / e.height;
                F = Math.round(e.width * t);
              }
            } else (F = e.width), (G = e.height);
          }
        }
        let T = !p && ("lazy" === m || void 0 === m);
        (!(d = "string" == typeof d ? d : B) ||
          d.startsWith("data:") ||
          d.startsWith("blob:")) &&
          ((f = !0), (T = !1)),
          l.unoptimized && (f = !0),
          N && d.endsWith(".svg") && !l.dangerouslyAllowSVG && (f = !0),
          p && (j = "high");
        let W = a(h),
          V = Object.assign(
            v
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: x,
                  objectPosition: E,
                }
              : {},
            A ? {} : { color: "transparent" },
            _
          ),
          H =
            R || "empty" === P
              ? null
              : "blur" === P
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: F,
                  heightInt: G,
                  blurWidth: u,
                  blurHeight: s,
                  blurDataURL: C || "",
                  objectFit: V.objectFit,
                }) +
                '")'
              : 'url("' + P + '")',
          q = H
            ? {
                backgroundSize: V.objectFit || "cover",
                backgroundPosition: V.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: H,
              }
            : {},
          $ = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: i,
              quality: o,
              sizes: a,
              loader: l,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: u, kind: s } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: i } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, a),
              d = u.length - 1;
            return {
              sizes: a || "w" !== s ? a : "100vw",
              srcSet: u
                .map(
                  (e, r) =>
                    l({ config: t, src: n, quality: o, width: e }) +
                    " " +
                    ("w" === s ? e : r + 1) +
                    s
                )
                .join(", "),
              src: l({ config: t, src: n, quality: o, width: u[d] }),
            };
          })({
            config: l,
            src: d,
            unoptimized: f,
            width: F,
            quality: W,
            sizes: c,
            loader: L,
          });
        return {
          props: {
            ...I,
            loading: T ? "lazy" : m,
            fetchPriority: j,
            width: F,
            height: G,
            decoding: "async",
            className: g,
            style: { ...V, ...q },
            sizes: $.sizes,
            srcSet: $.srcSet,
            src: $.src,
          },
          meta: { unoptimized: f, priority: p, placeholder: P, fill: v },
        };
      }
    },
    79032: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          defaultHead: function () {
            return s;
          },
          default: function () {
            return p;
          },
        });
      let r = n(97295),
        i = n(3589)._(n(96682)),
        o = r._(n(41680)),
        a = n(62609),
        l = n(21495),
        u = n(30853);
      function s(e) {
        void 0 === e && (e = !1);
        let t = [i.default.createElement("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              i.default.createElement("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function d(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === i.default.Fragment
          ? e.concat(
              i.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(80700);
      let c = ["name", "httpEquiv", "charSet", "itemProp"];
      function f(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(d, [])
          .reverse()
          .concat(s(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (i) => {
                let o = !0,
                  a = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = c.length; e < t; e++) {
                      let t = c[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (o = !1) : n.add(t);
                        else {
                          let e = i.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !a) && n.has(e)
                            ? (o = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                i.default.cloneElement(e, t)
              );
            }
            return i.default.cloneElement(e, { key: r });
          });
      }
      let p = function (e) {
        let { children: t } = e,
          n = (0, i.useContext)(a.AmpStateContext),
          r = (0, i.useContext)(l.HeadManagerContext);
        return i.default.createElement(
          o.default,
          {
            reduceComponentsToState: f,
            headManager: r,
            inAmpMode: (0, u.isInAmpMode)(n),
          },
          t
        );
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    650: function (e, t) {
      "use strict";
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: i,
            blurDataURL: o,
            objectFit: a,
          } = e,
          l = r ? 40 * r : t,
          u = i ? 40 * i : n,
          s = l && u ? "viewBox='0 0 " + l + " " + u + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          s +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (s
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    31505: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(97295)._(n(96682)),
        i = n(69682),
        o = r.default.createContext(i.imageConfigDefault);
    },
    69682: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    67241: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          unstable_getImgProps: function () {
            return u;
          },
          default: function () {
            return s;
          },
        });
      let r = n(97295),
        i = n(49829),
        o = n(80700),
        a = n(78326),
        l = r._(n(661)),
        u = (e) => {
          (0, o.warnOnce)(
            "Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk."
          );
          let { props: t } = (0, i.getImgProps)(e, {
            defaultLoader: l.default,
            imgConf: {
              deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
              imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
              path: "/__dora__/morpheus/_next/image",
              loader: "default",
              dangerouslyAllowSVG: !1,
              unoptimized: !1,
            },
          });
          for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
          return { props: t };
        },
        s = a.Image;
    },
    661: function (e, t) {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: r, quality: i } = e;
        return (
          t.path +
          "?url=" +
          encodeURIComponent(n) +
          "&w=" +
          r +
          "&q=" +
          (i || 75)
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    41680: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return a;
          },
        });
      let r = n(96682),
        i = r.useLayoutEffect,
        o = r.useEffect;
      function a(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function a() {
          if (t && t.mountedInstances) {
            let i = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(i, e));
          }
        }
        return (
          i(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = a),
              () => {
                t && (t._pendingUpdate = a);
              }
            )
          ),
          o(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    80700: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "warnOnce", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = (e) => {};
    },
    36957: function (e, t, n) {
      e.exports = n(67241);
    },
  },
]);
