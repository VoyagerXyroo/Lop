(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1766],
  {
    65812: function (e, i, t) {
      "use strict";
      var n = t(96682),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        r = Object.prototype.hasOwnProperty,
        s =
          n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        l = { key: !0, ref: !0, __self: !0, __source: !0 };
      function u(e, i, t) {
        var n,
          a = {},
          u = null,
          c = null;
        for (n in (void 0 !== t && (u = "" + t),
        void 0 !== i.key && (u = "" + i.key),
        void 0 !== i.ref && (c = i.ref),
        i))
          r.call(i, n) && !l.hasOwnProperty(n) && (a[n] = i[n]);
        if (e && e.defaultProps)
          for (n in (i = e.defaultProps)) void 0 === a[n] && (a[n] = i[n]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: c,
          props: a,
          _owner: s.current,
        };
      }
      (i.Fragment = a), (i.jsx = u), (i.jsxs = u);
    },
    98153: function (e, i, t) {
      "use strict";
      e.exports = t(65812);
    },
    72056: function (e, i, t) {
      "use strict";
      var n,
        o,
        a,
        r,
        s,
        l,
        u = t(96682);
      u && "object" == typeof u && "default" in u && u.default;
      var c = t(47326),
        p = new c(),
        d = p.getBrowser(),
        b = p.getCPU(),
        w = p.getDevice(),
        m = p.getEngine(),
        f = p.getOS(),
        h = p.getUA(),
        v = {
          Mobile: "mobile",
          Tablet: "tablet",
          SmartTv: "smarttv",
          Console: "console",
          Wearable: "wearable",
          Embedded: "embedded",
          Browser: void 0,
        },
        g = {
          Chrome: "Chrome",
          Firefox: "Firefox",
          Opera: "Opera",
          Yandex: "Yandex",
          Safari: "Safari",
          InternetExplorer: "Internet Explorer",
          Edge: "Edge",
          Chromium: "Chromium",
          Ie: "IE",
          MobileSafari: "Mobile Safari",
          MIUI: "MIUI Browser",
          SamsungBrowser: "Samsung Browser",
        },
        x = function (e) {
          var i =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "none";
          return e || i;
        },
        E = function () {
          return (
            !!(
              "undefined" != typeof window &&
              (window.navigator || navigator)
            ) &&
            (window.navigator || navigator)
          );
        },
        k = function (e) {
          var i = E();
          return (
            i &&
            i.platform &&
            (-1 !== i.platform.indexOf(e) ||
              ("MacIntel" === i.platform &&
                i.maxTouchPoints > 1 &&
                !window.MSStream))
          );
        },
        y = function (e) {
          return e.type === v.Browser;
        },
        C = function (e) {
          return e.name === g.Edge;
        },
        S = function (e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/");
        },
        N = function () {
          return k("iPad");
        };
      w.type,
        v.SmartTv,
        w.type,
        v.Console,
        w.type,
        v.Wearable,
        w.type,
        v.Embedded,
        d.name === g.MobileSafari || N(),
        d.name,
        g.Chromium;
      var O = (n = w.type) === v.Mobile || n === v.Tablet || N();
      w.type,
        v.Mobile,
        w.type === v.Tablet || N(),
        y(w),
        y(w),
        f.name,
        f.name,
        "iOS" === f.name || N(),
        d.name,
        g.Chrome,
        d.name,
        g.Firefox,
        (o = d.name) === g.Safari || g.MobileSafari,
        d.name,
        g.Opera,
        (a = d.name) === g.InternetExplorer || g.Ie,
        x(f.version),
        x(f.name),
        x(d.version),
        x(d.major),
        x(d.name),
        x(w.vendor),
        x(w.model),
        x(m.name),
        x(m.version),
        x(h),
        C(d) || S(h),
        d.name,
        g.Yandex,
        x(w.type, "browser"),
        (r = E()) &&
          (/iPad|iPhone|iPod/.test(r.platform) ||
            ("MacIntel" === r.platform && r.maxTouchPoints > 1)) &&
          window.MSStream,
        N(),
        k("iPhone"),
        k("iPod"),
        "string" ==
          typeof (l = (s = E()) && s.userAgent && s.userAgent.toLowerCase()) &&
          /electron/.test(l),
        S(h),
        C(d) && S(h),
        f.name,
        f.name,
        d.name,
        g.MIUI,
        d.name,
        g.SamsungBrowser,
        (i.tq = O);
    },
    79792: function (e, i, t) {
      "use strict";
      t.d(i, {
        Z: function () {
          return k;
        },
      });
      var n = t(83082);
      function o(e, i) {
        if (null == e) return {};
        var t,
          n,
          o = {},
          a = Object.keys(e);
        for (n = 0; n < a.length; n++)
          (t = a[n]), i.indexOf(t) >= 0 || (o[t] = e[t]);
        return o;
      }
      function a(e, i) {
        return (a = Object.setPrototypeOf
          ? Object.setPrototypeOf.bind()
          : function (e, i) {
              return (e.__proto__ = i), e;
            })(e, i);
      }
      function r(e, i) {
        (e.prototype = Object.create(i.prototype)),
          (e.prototype.constructor = e),
          a(e, i);
      }
      function s(e, i) {
        return e
          .replace(RegExp("(^|\\s)" + i + "(?:\\s|$)", "g"), "$1")
          .replace(/\s+/g, " ")
          .replace(/^\s*|\s*$/g, "");
      }
      var l = t(96682),
        u = t(94495),
        c = { disabled: !1 },
        p = l.createContext(null),
        d = function (e) {
          return e.scrollTop;
        },
        b = "unmounted",
        w = "exited",
        m = "entering",
        f = "entered",
        h = "exiting",
        v = (function (e) {
          function i(i, t) {
            n = e.call(this, i, t) || this;
            var n,
              o,
              a = t && !t.isMounting ? i.enter : i.appear;
            return (
              (n.appearStatus = null),
              i.in
                ? a
                  ? ((o = w), (n.appearStatus = m))
                  : (o = f)
                : (o = i.unmountOnExit || i.mountOnEnter ? b : w),
              (n.state = { status: o }),
              (n.nextCallback = null),
              n
            );
          }
          r(i, e),
            (i.getDerivedStateFromProps = function (e, i) {
              return e.in && i.status === b ? { status: w } : null;
            });
          var t = i.prototype;
          return (
            (t.componentDidMount = function () {
              this.updateStatus(!0, this.appearStatus);
            }),
            (t.componentDidUpdate = function (e) {
              var i = null;
              if (e !== this.props) {
                var t = this.state.status;
                this.props.in
                  ? t !== m && t !== f && (i = m)
                  : (t === m || t === f) && (i = h);
              }
              this.updateStatus(!1, i);
            }),
            (t.componentWillUnmount = function () {
              this.cancelNextCallback();
            }),
            (t.getTimeouts = function () {
              var e,
                i,
                t,
                n = this.props.timeout;
              return (
                (e = i = t = n),
                null != n &&
                  "number" != typeof n &&
                  ((e = n.exit),
                  (i = n.enter),
                  (t = void 0 !== n.appear ? n.appear : i)),
                { exit: e, enter: i, appear: t }
              );
            }),
            (t.updateStatus = function (e, i) {
              if ((void 0 === e && (e = !1), null !== i)) {
                if ((this.cancelNextCallback(), i === m)) {
                  if (this.props.unmountOnExit || this.props.mountOnEnter) {
                    var t = this.props.nodeRef
                      ? this.props.nodeRef.current
                      : u.findDOMNode(this);
                    t && d(t);
                  }
                  this.performEnter(e);
                } else this.performExit();
              } else
                this.props.unmountOnExit &&
                  this.state.status === w &&
                  this.setState({ status: b });
            }),
            (t.performEnter = function (e) {
              var i = this,
                t = this.props.enter,
                n = this.context ? this.context.isMounting : e,
                o = this.props.nodeRef ? [n] : [u.findDOMNode(this), n],
                a = o[0],
                r = o[1],
                s = this.getTimeouts(),
                l = n ? s.appear : s.enter;
              if ((!e && !t) || c.disabled) {
                this.safeSetState({ status: f }, function () {
                  i.props.onEntered(a);
                });
                return;
              }
              this.props.onEnter(a, r),
                this.safeSetState({ status: m }, function () {
                  i.props.onEntering(a, r),
                    i.onTransitionEnd(l, function () {
                      i.safeSetState({ status: f }, function () {
                        i.props.onEntered(a, r);
                      });
                    });
                });
            }),
            (t.performExit = function () {
              var e = this,
                i = this.props.exit,
                t = this.getTimeouts(),
                n = this.props.nodeRef ? void 0 : u.findDOMNode(this);
              if (!i || c.disabled) {
                this.safeSetState({ status: w }, function () {
                  e.props.onExited(n);
                });
                return;
              }
              this.props.onExit(n),
                this.safeSetState({ status: h }, function () {
                  e.props.onExiting(n),
                    e.onTransitionEnd(t.exit, function () {
                      e.safeSetState({ status: w }, function () {
                        e.props.onExited(n);
                      });
                    });
                });
            }),
            (t.cancelNextCallback = function () {
              null !== this.nextCallback &&
                (this.nextCallback.cancel(), (this.nextCallback = null));
            }),
            (t.safeSetState = function (e, i) {
              (i = this.setNextCallback(i)), this.setState(e, i);
            }),
            (t.setNextCallback = function (e) {
              var i = this,
                t = !0;
              return (
                (this.nextCallback = function (n) {
                  t && ((t = !1), (i.nextCallback = null), e(n));
                }),
                (this.nextCallback.cancel = function () {
                  t = !1;
                }),
                this.nextCallback
              );
            }),
            (t.onTransitionEnd = function (e, i) {
              this.setNextCallback(i);
              var t = this.props.nodeRef
                  ? this.props.nodeRef.current
                  : u.findDOMNode(this),
                n = null == e && !this.props.addEndListener;
              if (!t || n) {
                setTimeout(this.nextCallback, 0);
                return;
              }
              if (this.props.addEndListener) {
                var o = this.props.nodeRef
                    ? [this.nextCallback]
                    : [t, this.nextCallback],
                  a = o[0],
                  r = o[1];
                this.props.addEndListener(a, r);
              }
              null != e && setTimeout(this.nextCallback, e);
            }),
            (t.render = function () {
              var e = this.state.status;
              if (e === b) return null;
              var i = this.props,
                t = i.children,
                n =
                  (i.in,
                  i.mountOnEnter,
                  i.unmountOnExit,
                  i.appear,
                  i.enter,
                  i.exit,
                  i.timeout,
                  i.addEndListener,
                  i.onEnter,
                  i.onEntering,
                  i.onEntered,
                  i.onExit,
                  i.onExiting,
                  i.onExited,
                  i.nodeRef,
                  o(i, [
                    "children",
                    "in",
                    "mountOnEnter",
                    "unmountOnExit",
                    "appear",
                    "enter",
                    "exit",
                    "timeout",
                    "addEndListener",
                    "onEnter",
                    "onEntering",
                    "onEntered",
                    "onExit",
                    "onExiting",
                    "onExited",
                    "nodeRef",
                  ]));
              return l.createElement(
                p.Provider,
                { value: null },
                "function" == typeof t
                  ? t(e, n)
                  : l.cloneElement(l.Children.only(t), n)
              );
            }),
            i
          );
        })(l.Component);
      function g() {}
      (v.contextType = p),
        (v.propTypes = {}),
        (v.defaultProps = {
          in: !1,
          mountOnEnter: !1,
          unmountOnExit: !1,
          appear: !1,
          enter: !0,
          exit: !0,
          onEnter: g,
          onEntering: g,
          onEntered: g,
          onExit: g,
          onExiting: g,
          onExited: g,
        }),
        (v.UNMOUNTED = b),
        (v.EXITED = w),
        (v.ENTERING = m),
        (v.ENTERED = f),
        (v.EXITING = h);
      var x = function (e, i) {
          return (
            e &&
            i &&
            i.split(" ").forEach(function (i) {
              e.classList
                ? e.classList.remove(i)
                : "string" == typeof e.className
                ? (e.className = s(e.className, i))
                : e.setAttribute(
                    "class",
                    s((e.className && e.className.baseVal) || "", i)
                  );
            })
          );
        },
        E = (function (e) {
          function i() {
            for (var i, t = arguments.length, n = Array(t), o = 0; o < t; o++)
              n[o] = arguments[o];
            return (
              ((i = e.call.apply(e, [this].concat(n)) || this).appliedClasses =
                { appear: {}, enter: {}, exit: {} }),
              (i.onEnter = function (e, t) {
                var n = i.resolveArguments(e, t),
                  o = n[0],
                  a = n[1];
                i.removeClasses(o, "exit"),
                  i.addClass(o, a ? "appear" : "enter", "base"),
                  i.props.onEnter && i.props.onEnter(e, t);
              }),
              (i.onEntering = function (e, t) {
                var n = i.resolveArguments(e, t),
                  o = n[0],
                  a = n[1];
                i.addClass(o, a ? "appear" : "enter", "active"),
                  i.props.onEntering && i.props.onEntering(e, t);
              }),
              (i.onEntered = function (e, t) {
                var n = i.resolveArguments(e, t),
                  o = n[0],
                  a = n[1] ? "appear" : "enter";
                i.removeClasses(o, a),
                  i.addClass(o, a, "done"),
                  i.props.onEntered && i.props.onEntered(e, t);
              }),
              (i.onExit = function (e) {
                var t = i.resolveArguments(e)[0];
                i.removeClasses(t, "appear"),
                  i.removeClasses(t, "enter"),
                  i.addClass(t, "exit", "base"),
                  i.props.onExit && i.props.onExit(e);
              }),
              (i.onExiting = function (e) {
                var t = i.resolveArguments(e)[0];
                i.addClass(t, "exit", "active"),
                  i.props.onExiting && i.props.onExiting(e);
              }),
              (i.onExited = function (e) {
                var t = i.resolveArguments(e)[0];
                i.removeClasses(t, "exit"),
                  i.addClass(t, "exit", "done"),
                  i.props.onExited && i.props.onExited(e);
              }),
              (i.resolveArguments = function (e, t) {
                return i.props.nodeRef ? [i.props.nodeRef.current, e] : [e, t];
              }),
              (i.getClassNames = function (e) {
                var t = i.props.classNames,
                  n = "string" == typeof t,
                  o = n ? (n && t ? t + "-" : "") + e : t[e],
                  a = n ? o + "-active" : t[e + "Active"],
                  r = n ? o + "-done" : t[e + "Done"];
                return {
                  baseClassName: o,
                  activeClassName: a,
                  doneClassName: r,
                };
              }),
              i
            );
          }
          r(i, e);
          var t = i.prototype;
          return (
            (t.addClass = function (e, i, t) {
              var n,
                o = this.getClassNames(i)[t + "ClassName"],
                a = this.getClassNames("enter").doneClassName;
              "appear" === i && "done" === t && a && (o += " " + a),
                "active" === t && e && d(e),
                o &&
                  ((this.appliedClasses[i][t] = o),
                  (n = o),
                  e &&
                    n &&
                    n.split(" ").forEach(function (i) {
                      var t, n;
                      return (
                        (t = e),
                        (n = i),
                        void (t.classList
                          ? t.classList.add(n)
                          : (t.classList
                              ? n && t.classList.contains(n)
                              : -1 !==
                                (
                                  " " +
                                  (t.className.baseVal || t.className) +
                                  " "
                                ).indexOf(" " + n + " ")) ||
                            ("string" == typeof t.className
                              ? (t.className = t.className + " " + n)
                              : t.setAttribute(
                                  "class",
                                  ((t.className && t.className.baseVal) || "") +
                                    " " +
                                    n
                                )))
                      );
                    }));
            }),
            (t.removeClasses = function (e, i) {
              var t = this.appliedClasses[i],
                n = t.base,
                o = t.active,
                a = t.done;
              (this.appliedClasses[i] = {}),
                n && x(e, n),
                o && x(e, o),
                a && x(e, a);
            }),
            (t.render = function () {
              var e = this.props,
                i = (e.classNames, o(e, ["classNames"]));
              return l.createElement(
                v,
                (0, n.Z)({}, i, {
                  onEnter: this.onEnter,
                  onEntered: this.onEntered,
                  onEntering: this.onEntering,
                  onExit: this.onExit,
                  onExiting: this.onExiting,
                  onExited: this.onExited,
                })
              );
            }),
            i
          );
        })(l.Component);
      (E.defaultProps = { classNames: "" }), (E.propTypes = {});
      var k = E;
    },
    47326: function (e, i, t) {
      var n;
      !(function (o, a) {
        "use strict";
        var r = "function",
          s = "undefined",
          l = "object",
          u = "string",
          c = "major",
          p = "model",
          d = "name",
          b = "type",
          w = "vendor",
          m = "version",
          f = "architecture",
          h = "console",
          v = "mobile",
          g = "tablet",
          x = "smarttv",
          E = "wearable",
          k = "embedded",
          y = "Amazon",
          C = "Apple",
          S = "ASUS",
          N = "BlackBerry",
          O = "Browser",
          _ = "Chrome",
          T = "Firefox",
          A = "Google",
          M = "Huawei",
          P = "Microsoft",
          R = "Motorola",
          I = "Opera",
          U = "Samsung",
          q = "Sharp",
          j = "Sony",
          z = "Xiaomi",
          D = "Zebra",
          L = "Facebook",
          B = "Chromium OS",
          V = "Mac OS",
          F = function (e, i) {
            var t = {};
            for (var n in e)
              i[n] && i[n].length % 2 == 0
                ? (t[n] = i[n].concat(e[n]))
                : (t[n] = e[n]);
            return t;
          },
          W = function (e) {
            for (var i = {}, t = 0; t < e.length; t++)
              i[e[t].toUpperCase()] = e[t];
            return i;
          },
          G = function (e, i) {
            return typeof e === u && -1 !== $(i).indexOf($(e));
          },
          $ = function (e) {
            return e.toLowerCase();
          },
          Z = function (e, i) {
            if (typeof e === u)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof i === s ? e : e.substring(0, 350)
              );
          },
          H = function (e, i) {
            for (var t, n, o, s, u, c, p = 0; p < i.length && !u; ) {
              var d = i[p],
                b = i[p + 1];
              for (t = n = 0; t < d.length && !u && d[t]; )
                if ((u = d[t++].exec(e)))
                  for (o = 0; o < b.length; o++)
                    (c = u[++n]),
                      typeof (s = b[o]) === l && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == r
                            ? (this[s[0]] = s[1].call(this, c))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== r || (s[1].exec && s[1].test)
                            ? (this[s[0]] = c ? c.replace(s[1], s[2]) : a)
                            : (this[s[0]] = c ? s[1].call(this, c, s[2]) : a)
                          : 4 === s.length &&
                            (this[s[0]] = c
                              ? s[3].call(this, c.replace(s[1], s[2]))
                              : a)
                        : (this[s] = c || a);
              p += 2;
            }
          },
          X = function (e, i) {
            for (var t in i)
              if (typeof i[t] === l && i[t].length > 0) {
                for (var n = 0; n < i[t].length; n++)
                  if (G(i[t][n], e)) return "?" === t ? a : t;
              } else if (G(i[t], e)) return "?" === t ? a : t;
            return e;
          },
          Y = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          K = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [m, [d, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [m, [d, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [d, m],
              [/opios[\/ ]+([\w\.]+)/i],
              [m, [d, I + " Mini"]],
              [/\bopr\/([\w\.]+)/i],
              [m, [d, I]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,
                /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,
                /(ba?idubrowser)[\/ ]?([\w\.]+)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [d, m],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [m, [d, "UC" + O]],
              [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
              [m, [d, "WeChat(Win) Desktop"]],
              [/micromessenger\/([\w\.]+)/i],
              [m, [d, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [m, [d, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [m, [d, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [m, [d, "Yandex"]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[d, /(.+)/, "$1 Secure " + O], m],
              [/\bfocus\/([\w\.]+)/i],
              [m, [d, T + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [m, [d, I + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [m, [d, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [m, [d, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [m, [d, I + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [m, [d, "MIUI " + O]],
              [/fxios\/([-\w\.]+)/i],
              [m, [d, T]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[d, "360 " + O]],
              [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
              [[d, /(.+)/, "$1 " + O], m],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[d, /_/g, " "], m],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [d, m],
              [
                /(metasr)[\/ ]?([\w\.]+)/i,
                /(lbbrowser)/i,
                /\[(linkedin)app\]/i,
              ],
              [d],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[d, L], m],
              [
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(chromium|instagram)[\/ ]([-\w\.]+)/i,
              ],
              [d, m],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [m, [d, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [m, [d, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [m, [d, _ + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[d, _ + " WebView"], m],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [m, [d, "Android " + O]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [d, m],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [m, [d, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [m, d],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                d,
                [
                  m,
                  X,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [d, m],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[d, "Netscape"], m],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [m, [d, T + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
                /panasonic;(viera)/i,
              ],
              [d, m],
              [/(cobalt)\/([\w\.]+)/i],
              [d, [m, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[f, "amd64"]],
              [/(ia32(?=;))/i],
              [[f, $]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[f, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[f, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[f, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[f, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[f, /ower/, "", $]],
              [/(sun4\w)[;\)]/i],
              [[f, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[f, $]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [p, [w, U], [b, g]],
              [
                /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]([-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [p, [w, U], [b, v]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [p, [w, C], [b, v]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [p, [w, C], [b, g]],
              [/(macintosh);/i],
              [p, [w, C]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [p, [w, q], [b, v]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [p, [w, M], [b, g]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [p, [w, M], [b, v]],
              [
                /\b(poco[\w ]+)(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i,
              ],
              [
                [p, /_/g, " "],
                [w, z],
                [b, v],
              ],
              [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
              [
                [p, /_/g, " "],
                [w, z],
                [b, g],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [p, [w, "OPPO"], [b, v]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [p, [w, "Vivo"], [b, v]],
              [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
              [p, [w, "Realme"], [b, v]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [p, [w, R], [b, v]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [p, [w, R], [b, g]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [p, [w, "LG"], [b, g]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [p, [w, "LG"], [b, v]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [p, [w, "Lenovo"], [b, g]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [p, /_/g, " "],
                [w, "Nokia"],
                [b, v],
              ],
              [/(pixel c)\b/i],
              [p, [w, A], [b, g]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [p, [w, A], [b, v]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [p, [w, j], [b, v]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [p, "Xperia Tablet"],
                [w, j],
                [b, g],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [p, [w, "OnePlus"], [b, v]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [p, [w, y], [b, g]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [p, /(.+)/g, "Fire Phone $1"],
                [w, y],
                [b, v],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [p, w, [b, g]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [p, [w, N], [b, v]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [p, [w, S], [b, g]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [p, [w, S], [b, v]],
              [/(nexus 9)/i],
              [p, [w, "HTC"], [b, g]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [w, [p, /_/g, " "], [b, v]],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [p, [w, "Acer"], [b, g]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [p, [w, "Meizu"], [b, v]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [w, p, [b, v]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [w, p, [b, g]],
              [/(surface duo)/i],
              [p, [w, P], [b, g]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [p, [w, "Fairphone"], [b, v]],
              [/(u304aa)/i],
              [p, [w, "AT&T"], [b, v]],
              [/\bsie-(\w*)/i],
              [p, [w, "Siemens"], [b, v]],
              [/\b(rct\w+) b/i],
              [p, [w, "RCA"], [b, g]],
              [/\b(venue[\d ]{2,7}) b/i],
              [p, [w, "Dell"], [b, g]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [p, [w, "Verizon"], [b, g]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [p, [w, "Barnes & Noble"], [b, g]],
              [/\b(tm\d{3}\w+) b/i],
              [p, [w, "NuVision"], [b, g]],
              [/\b(k88) b/i],
              [p, [w, "ZTE"], [b, g]],
              [/\b(nx\d{3}j) b/i],
              [p, [w, "ZTE"], [b, v]],
              [/\b(gen\d{3}) b.+49h/i],
              [p, [w, "Swiss"], [b, v]],
              [/\b(zur\d{3}) b/i],
              [p, [w, "Swiss"], [b, g]],
              [/\b((zeki)?tb.*\b) b/i],
              [p, [w, "Zeki"], [b, g]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[w, "Dragon Touch"], p, [b, g]],
              [/\b(ns-?\w{0,9}) b/i],
              [p, [w, "Insignia"], [b, g]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [p, [w, "NextBook"], [b, g]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[w, "Voice"], p, [b, v]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[w, "LvTel"], p, [b, v]],
              [/\b(ph-1) /i],
              [p, [w, "Essential"], [b, v]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [p, [w, "Envizen"], [b, g]],
              [/\b(trio[-\w\. ]+) b/i],
              [p, [w, "MachSpeed"], [b, g]],
              [/\btu_(1491) b/i],
              [p, [w, "Rotor"], [b, g]],
              [/(shield[\w ]+) b/i],
              [p, [w, "Nvidia"], [b, g]],
              [/(sprint) (\w+)/i],
              [w, p, [b, v]],
              [/(kin\.[onetw]{3})/i],
              [
                [p, /\./g, " "],
                [w, P],
                [b, v],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [p, [w, D], [b, g]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [p, [w, D], [b, v]],
              [/smart-tv.+(samsung)/i],
              [w, [b, x]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [p, /^/, "SmartTV"],
                [w, U],
                [b, x],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [w, "LG"],
                [b, x],
              ],
              [/(apple) ?tv/i],
              [w, [p, C + " TV"], [b, x]],
              [/crkey/i],
              [
                [p, _ + "cast"],
                [w, A],
                [b, x],
              ],
              [/droid.+aft(\w)( bui|\))/i],
              [p, [w, y], [b, x]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [p, [w, q], [b, x]],
              [/(bravia[\w ]+)( bui|\))/i],
              [p, [w, j], [b, x]],
              [/(mitv-\w{5}) bui/i],
              [p, [w, z], [b, x]],
              [/Hbbtv.*(technisat) (.*);/i],
              [w, p, [b, x]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [w, Z],
                [p, Z],
                [b, x],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[b, x]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [w, p, [b, h]],
              [/droid.+; (shield) bui/i],
              [p, [w, "Nvidia"], [b, h]],
              [/(playstation [345portablevi]+)/i],
              [p, [w, j], [b, h]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [p, [w, P], [b, h]],
              [/((pebble))app/i],
              [w, p, [b, E]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [p, [w, C], [b, E]],
              [/droid.+; (glass) \d/i],
              [p, [w, A], [b, E]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [p, [w, D], [b, E]],
              [/(quest( 2| pro)?)/i],
              [p, [w, L], [b, E]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [w, [b, k]],
              [/(aeobc)\b/i],
              [p, [w, y], [b, k]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
              [p, [b, v]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [p, [b, g]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[b, g]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[b, v]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [p, [w, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [m, [d, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [m, [d, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [d, m],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [m, d],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [d, m],
              [
                /(windows) nt 6\.2; (arm)/i,
                /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,
                /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
              ],
              [d, [m, X, Y]],
              [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
              [
                [d, "Windows"],
                [m, X, Y],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /ios;fbsv\/([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [m, /_/g, "."],
                [d, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [d, V],
                [m, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [m, d],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [d, m],
              [/\(bb(10);/i],
              [m, [d, N]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [m, [d, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [m, [d, T + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [m, [d, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [m, [d, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [m, [d, _ + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[d, B], m],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [d, m],
              [/(sunos) ?([\w\.\d]*)/i],
              [[d, "Solaris"], m],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [d, m],
            ],
          },
          Q = function (e, i) {
            if ((typeof e === l && ((i = e), (e = a)), !(this instanceof Q)))
              return new Q(e, i).getResult();
            var t = typeof o !== s && o.navigator ? o.navigator : a,
              n = e || (t && t.userAgent ? t.userAgent : ""),
              h = t && t.userAgentData ? t.userAgentData : a,
              x = i ? F(K, i) : K,
              E = t && t.userAgent == n;
            return (
              (this.getBrowser = function () {
                var e,
                  i = {};
                return (
                  (i[d] = a),
                  (i[m] = a),
                  H.call(i, n, x.browser),
                  (i[c] =
                    typeof (e = i[m]) === u
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : a),
                  E &&
                    t &&
                    t.brave &&
                    typeof t.brave.isBrave == r &&
                    (i[d] = "Brave"),
                  i
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[f] = a), H.call(e, n, x.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[w] = a),
                  (e[p] = a),
                  (e[b] = a),
                  H.call(e, n, x.device),
                  E && !e[b] && h && h.mobile && (e[b] = v),
                  E &&
                    "Macintosh" == e[p] &&
                    t &&
                    typeof t.standalone !== s &&
                    t.maxTouchPoints &&
                    t.maxTouchPoints > 2 &&
                    ((e[p] = "iPad"), (e[b] = g)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[d] = a), (e[m] = a), H.call(e, n, x.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[d] = a),
                  (e[m] = a),
                  H.call(e, n, x.os),
                  E &&
                    !e[d] &&
                    h &&
                    "Unknown" != h.platform &&
                    (e[d] = h.platform
                      .replace(/chrome os/i, B)
                      .replace(/macos/i, V)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return n;
              }),
              (this.setUA = function (e) {
                return (
                  (n = typeof e === u && e.length > 350 ? Z(e, 350) : e), this
                );
              }),
              this.setUA(n),
              this
            );
          };
        (Q.VERSION = "1.0.35"),
          (Q.BROWSER = W([d, m, c])),
          (Q.CPU = W([f])),
          (Q.DEVICE = W([p, w, b, h, v, x, g, E, k])),
          (Q.ENGINE = Q.OS = W([d, m])),
          typeof i !== s
            ? (e.exports && (i = e.exports = Q), (i.UAParser = Q))
            : t.amdO
            ? a !==
                (n = function () {
                  return Q;
                }.call(i, t, i, e)) && (e.exports = n)
            : typeof o !== s && (o.UAParser = Q);
        var J = typeof o !== s && (o.jQuery || o.Zepto);
        if (J && !J.ua) {
          var ee = new Q();
          (J.ua = ee.getResult()),
            (J.ua.get = function () {
              return ee.getUA();
            }),
            (J.ua.set = function (e) {
              ee.setUA(e);
              var i = ee.getResult();
              for (var t in i) J.ua[t] = i[t];
            });
        }
      })("object" == typeof window ? window : this);
    },
    83082: function (e, i, t) {
      "use strict";
      function n() {
        return (n = Object.assign
          ? Object.assign.bind()
          : function (e) {
              for (var i = 1; i < arguments.length; i++) {
                var t = arguments[i];
                for (var n in t)
                  Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
              }
              return e;
            }).apply(this, arguments);
      }
      t.d(i, {
        Z: function () {
          return n;
        },
      });
    },
  },
]);
