(() => {
  "use strict";
  var n = {
      56: (n, e, t) => {
        n.exports = function (n) {
          var e = t.nc;
          e && n.setAttribute("nonce", e);
        };
      },
      72: (n) => {
        var e = [];
        function t(n) {
          for (var t = -1, r = 0; r < e.length; r++)
            if (e[r].identifier === n) {
              t = r;
              break;
            }
          return t;
        }
        function r(n, r) {
          for (var i = {}, a = [], s = 0; s < n.length; s++) {
            var c = n[s],
              l = r.base ? c[0] + r.base : c[0],
              d = i[l] || 0,
              u = "".concat(l, " ").concat(d);
            i[l] = d + 1;
            var p = t(u),
              f = {
                css: c[1],
                media: c[2],
                sourceMap: c[3],
                supports: c[4],
                layer: c[5],
              };
            if (-1 !== p) e[p].references++, e[p].updater(f);
            else {
              var m = o(f, r);
              (r.byIndex = s),
                e.splice(s, 0, { identifier: u, updater: m, references: 1 });
            }
            a.push(u);
          }
          return a;
        }
        function o(n, e) {
          var t = e.domAPI(e);
          return (
            t.update(n),
            function (e) {
              if (e) {
                if (
                  e.css === n.css &&
                  e.media === n.media &&
                  e.sourceMap === n.sourceMap &&
                  e.supports === n.supports &&
                  e.layer === n.layer
                )
                  return;
                t.update((n = e));
              } else t.remove();
            }
          );
        }
        n.exports = function (n, o) {
          var i = r((n = n || []), (o = o || {}));
          return function (n) {
            n = n || [];
            for (var a = 0; a < i.length; a++) {
              var s = t(i[a]);
              e[s].references--;
            }
            for (var c = r(n, o), l = 0; l < i.length; l++) {
              var d = t(i[l]);
              0 === e[d].references && (e[d].updater(), e.splice(d, 1));
            }
            i = c;
          };
        };
      },
      113: (n) => {
        n.exports = function (n, e) {
          if (e.styleSheet) e.styleSheet.cssText = n;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(n));
          }
        };
      },
      314: (n) => {
        n.exports = function (n) {
          var e = [];
          return (
            (e.toString = function () {
              return this.map(function (e) {
                var t = "",
                  r = void 0 !== e[5];
                return (
                  e[4] && (t += "@supports (".concat(e[4], ") {")),
                  e[2] && (t += "@media ".concat(e[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      e[5].length > 0 ? " ".concat(e[5]) : "",
                      " {"
                    )),
                  (t += n(e)),
                  r && (t += "}"),
                  e[2] && (t += "}"),
                  e[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (e.i = function (n, t, r, o, i) {
              "string" == typeof n && (n = [[null, n, void 0]]);
              var a = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var c = this[s][0];
                  null != c && (a[c] = !0);
                }
              for (var l = 0; l < n.length; l++) {
                var d = [].concat(n[l]);
                (r && a[d[0]]) ||
                  (void 0 !== i &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = i)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  e.push(d));
              }
            }),
            e
          );
        };
      },
      540: (n) => {
        n.exports = function (n) {
          var e = document.createElement("style");
          return n.setAttributes(e, n.attributes), n.insert(e, n.options), e;
        };
      },
      601: (n) => {
        n.exports = function (n) {
          return n[1];
        };
      },
      659: (n) => {
        var e = {};
        n.exports = function (n, t) {
          var r = (function (n) {
            if (void 0 === e[n]) {
              var t = document.querySelector(n);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (n) {
                  t = null;
                }
              e[n] = t;
            }
            return e[n];
          })(n);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      825: (n) => {
        n.exports = function (n) {
          if ("undefined" == typeof document)
            return { update: function () {}, remove: function () {} };
          var e = n.insertStyleElement(n);
          return {
            update: function (t) {
              !(function (n, e, t) {
                var r = "";
                t.supports && (r += "@supports (".concat(t.supports, ") {")),
                  t.media && (r += "@media ".concat(t.media, " {"));
                var o = void 0 !== t.layer;
                o &&
                  (r += "@layer".concat(
                    t.layer.length > 0 ? " ".concat(t.layer) : "",
                    " {"
                  )),
                  (r += t.css),
                  o && (r += "}"),
                  t.media && (r += "}"),
                  t.supports && (r += "}");
                var i = t.sourceMap;
                i &&
                  "undefined" != typeof btoa &&
                  (r +=
                    "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                      btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
                      " */"
                    )),
                  e.styleTagTransform(r, n, e.options);
              })(e, n, t);
            },
            remove: function () {
              !(function (n) {
                if (null === n.parentNode) return !1;
                n.parentNode.removeChild(n);
              })(e);
            },
          };
        };
      },
      919: (n, e, t) => {
        t.d(e, { A: () => s });
        var r = t(601),
          o = t.n(r),
          i = t(314),
          a = t.n(i)()(o());
        a.push([
          n.id,
          "/* 1. Use a more-intuitive box-sizing model */\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n/* 2. Remove default margin */\n* {\n    margin: 0;\n}\n\nbody {\n    /* 3. Add accessible line-height */\n    line-height: 1.5;\n    /* 4. Improve text rendering */\n    -webkit-font-smoothing: antialiased;\n}\n\n/* 5. Improve media defaults */\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n    display: block;\n    max-width: 100%;\n}\n\n/* 6. Inherit fonts for form controls */\ninput,\nbutton,\ntextarea,\nselect {\n    font: inherit;\n}\n\n/* 7. Avoid text overflows */\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    overflow-wrap: break-word;\n}\n\n/* 8. Improve line wrapping */\np {\n    text-wrap: pretty;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    text-wrap: balance;\n}\n\n/*\n9. Create a root stacking context\n*/\n#root,\n#__next {\n    isolation: isolate;\n}\n\nbody,\n#root {\n    margin: 0;\n    padding: 0;\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    --accent-color: #176484;\n    --header-color: #062e3f;\n    --background-color: #f4e9e3;\n    --card-bg-color: #fff8f3;\n    background-color: var(--background-color);\n}\n\nheader {\n    padding: 1rem;\n    height: 6rem;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background-color: var(--background-color);\n    color: var(--header-color);\n}\n\n#headline {\n    font-size: 1.75rem;\n    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;\n}\n\n#container {\n    background-color: var(--background-color);\n    padding: 1rem;\n    display: flex;\n    flex-direction: column;\n    /* take remaining space when parent is a column flex (e.g. body/#root set to display:flex; flex-direction:column; min-height:100vh) */\n    flex: 1 1 auto;\n    align-items: center;\n}\n\n/* QR overlay styles */\n.qr-overlay {\n    position: fixed;\n    inset: 0;\n    background: rgba(0, 0, 0, 0.45);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    z-index: 9999;\n    opacity: 0;\n    transition: opacity 180ms ease-in-out;\n}\n\n.qr-overlay.visible {\n    opacity: 1;\n}\n\n.qr-modal {\n    background: #fff;\n    padding: 1.25rem;\n    border-radius: 8px;\n    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);\n    display: flex;\n    gap: 1rem;\n    align-items: center;\n    flex-direction: column;\n    min-width: 280px;\n    max-width: 380px;\n}\n\n.qr-modal .qr-title {\n    font-size: 1rem;\n    margin: 0 0 0.5rem 0;\n    text-align: center;\n}\n\n.qr-modal .qr-image-wrap {\n    padding: 0.5rem;\n    background: #fff;\n}\n\n.qr-modal .qr-image {\n    width: 260px;\n    height: 260px;\n    object-fit: contain;\n}\n\n.qr-close {\n    position: absolute;\n    top: 8px;\n    right: 12px;\n    background: transparent;\n    border: 0;\n    font-size: 1.5rem;\n    cursor: pointer;\n}\n\n/* Small product card styles used by OfferCard */\n.card {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    border: 1px solid rgba(0, 0, 0, 0.396);\n    padding: 0.75rem;\n    margin-bottom: 0.75rem;\n    border-radius: 0.625rem;\n    background: var(--card-bg-color);\n    filter: drop-shadow(0 0 0.25rem rgba(108, 108, 108, 0.242));\n    width: 100%;\n    max-width: 1000px;\n}\n\n.offer-title {\n    margin-bottom: 0.5rem;\n}\n\n.offer-desc {\n    margin-bottom: 0.5rem;\n}\n\n.offer-link {\n    font-size: 1rem;\n    font-weight: 600;\n    text-align: center;\n    color: black;\n    text-decoration: none;\n    margin: 0.5rem;\n}\n\n.offer-price {\n    font-size: 1.2rem;\n    font-weight: 700;\n    color: #333;\n    margin: 0.5rem;\n}\n\n.offer-btn {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 1rem;\n    font-size: 1.2rem;\n    font-weight: bold;\n    background-color: var(--accent-color);\n    border: none;\n    color: var(--background-color);\n    padding: 0.5rem 0.75rem;\n    border-radius: 0.625rem;\n    cursor: pointer;\n    width: 100%;\n}\n\n.offer-btn-text {\n    pointer-events: none;\n    fill: var(--background-color);\n}\n\n\n.offer-btn[disabled] {\n    opacity: 0.5;\n    pointer-events: none;\n}",
          "",
        ]);
        const s = a;
      },
    },
    e = {};
  function t(r) {
    var o = e[r];
    if (void 0 !== o) return o.exports;
    var i = (e[r] = { id: r, exports: {} });
    return n[r](i, i.exports, t), i.exports;
  }
  (t.n = (n) => {
    var e = n && n.__esModule ? () => n.default : () => n;
    return t.d(e, { a: e }), e;
  }),
    (t.d = (n, e) => {
      for (var r in e)
        t.o(e, r) &&
          !t.o(n, r) &&
          Object.defineProperty(n, r, { enumerable: !0, get: e[r] });
    }),
    (t.o = (n, e) => Object.prototype.hasOwnProperty.call(n, e)),
    (t.nc = void 0);
  var r = t(72),
    o = t.n(r),
    i = t(825),
    a = t.n(i),
    s = t(659),
    c = t.n(s),
    l = t(56),
    d = t.n(l),
    u = t(540),
    p = t.n(u),
    f = t(113),
    m = t.n(f),
    h = t(919),
    v = {};
  (v.styleTagTransform = m()),
    (v.setAttributes = d()),
    (v.insert = c().bind(null, "head")),
    (v.domAPI = a()),
    (v.insertStyleElement = p()),
    o()(h.A, v),
    h.A && h.A.locals && h.A.locals;
  class g {
    constructor(n = {}) {
      const {
        id: e = `offer-${Date.now()}-${Math.floor(1e4 * Math.random())}`,
        title: t = "",
        link: r = null,
        price: o = "",
        classes: i = [],
        onClick: a = null,
        onShowQR: s = null,
        attrs: c = {},
        svgIcon:
          l = '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M120-520v-320h320v320H120Zm80-80h160v-160H200v160Zm-80 480v-320h320v320H120Zm80-80h160v-160H200v160Zm320-320v-320h320v320H520Zm80-80h160v-160H600v160Zm160 480v-80h80v80h-80ZM520-360v-80h80v80h-80Zm80 80v-80h80v80h-80Zm-80 80v-80h80v80h-80Zm80 80v-80h80v80h-80Zm80-80v-80h80v80h-80Zm0-160v-80h80v80h-80Zm80 80v-80h80v80h-80Z"/></svg>',
      } = n;
      (this.id = e),
        (this.title = t),
        (this.link = r),
        (this.price = o),
        (this.classes = Array.isArray(i) ? i : i ? [i] : []),
        (this.onClick = a),
        (this.onShowQR = s),
        (this.attrs = c),
        (this.svgIcon = l),
        (this.el = null),
        this._create();
    }
    _create() {
      const n = document.createElement("div");
      (n.className = ["card", ...this.classes].join(" ").trim()),
        (n.dataset.id = this.id);
      for (const [e, t] of Object.entries(this.attrs || {}))
        n.setAttribute(e, t);
      if (this.title) {
        const e = this.link
          ? document.createElement("a")
          : document.createElement("h3");
        this.link
          ? ((e.href = this.link),
            (e.rel = "noopener"),
            (e.className = "offer-link"),
            (e.textContent = this.title))
          : ((e.className = "offer-title"), (e.textContent = this.title)),
          n.appendChild(e);
      }
      if (this.price) {
        const e = document.createElement("p");
        (e.className = "offer-price"),
          (e.textContent = this.price + " kr"),
          n.appendChild(e);
      }
      const e = document.createElement("button");
      if (((e.type = "button"), (e.className = "offer-btn"), this.svgIcon)) {
        const n = document.createRange().createContextualFragment(this.svgIcon);
        n.querySelectorAll &&
          n.querySelectorAll("svg").forEach((n) => {
            n.classList.add("offer-btn-text");
          }),
          e.appendChild(n);
      }
      const t = document.createElement("span");
      (t.className = "offer-btn-text"),
        (t.textContent = "Visa QR kod"),
        e.appendChild(t),
        "function" == typeof this.onShowQR &&
          e.addEventListener("click", (n) => {
            n.stopPropagation(), this.onShowQR(n, this);
          }),
        n.appendChild(e),
        "function" == typeof this.onClick &&
          (n.addEventListener("click", (n) => this.onClick(n, this)),
          (n.style.cursor = "pointer")),
        (this.el = n);
    }
    render(n) {
      const e = "string" == typeof n ? document.querySelector(n) : n;
      if (!e) throw new Error("Container not found for OfferCard.render");
      return e.appendChild(this.el), this;
    }
  }
  class b {
    static async getMenu(n) {
      const e = await fetch(n, { headers: { Accept: "application/json" } });
      if (!e.ok) throw new Error(`HTTP error: ${e.status}`);
      return await e.json();
    }
    static getOffers(n) {
      const e = n.Refs;
      var t = [];
      return (
        Object.values(e).forEach((n) => {
          n.Barcodes &&
            n.Barcodes.length > 0 &&
            "Ramlösa Original" !== n.Title &&
            t.push(n);
        }),
        console.log(t),
        t
      );
    }
  }
  class y {
    static showQR(n, e) {
      !(function ({ title: n = "", data: e = "" } = {}) {
        let t = document.querySelector(".qr-overlay");
        t && t.remove(),
          (t = document.createElement("div")),
          (t.className = "qr-overlay"),
          (t.innerHTML =
            '\n        <div class="qr-modal" role="dialog" aria-modal="true" aria-label="QR Code">\n            <button class="qr-close" aria-label="Close QR">×</button>\n            <h3 class="qr-title"></h3>\n            <div class="qr-image-wrap">\n                <img class="qr-image" alt="QR code">\n            </div>\n        </div>\n    '),
          document.body.appendChild(t);
        const r = t.querySelector(".qr-title"),
          o = t.querySelector(".qr-image"),
          i = t.querySelector(".qr-close");
        r.textContent = n || "";
        const a = encodeURIComponent(e || n || ""),
          s = t.querySelector(".qr-modal");
        s &&
          i &&
          ((s.style.position = s.style.position || "relative"),
          Object.assign(i.style, {
            position: "absolute",
            top: "8px",
            right: "8px",
            padding: "6px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
            lineHeight: "1",
          })),
          (o.src = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${a}`),
          requestAnimationFrame(() => t.classList.add("visible"));
        const c = (n) => {
          "Escape" === n.key && l();
        };
        document.addEventListener("keydown", c);
        const l = () => {
          t &&
            (t.classList.remove("visible"),
            t.addEventListener("transitionend", () => t.remove(), { once: !0 }),
            document.removeEventListener("keydown", c));
        };
        i.addEventListener("click", l),
          t.addEventListener("click", (n) => {
            n.target === t && l();
          });
      })({ title: e || "", data: n || e || "" });
    }
    static async render() {
      const n = document.getElementById("container");
      let e;
      try {
        (e = await b.getMenu(
          "https://web-images.futureordering.com/menus/maxburgers/se-sv-se-251-eatin.json.gz"
        )),
          (y.menu = e);
      } catch (n) {
        console.warn("Failed to fetch menu", n);
      }
      let t = b.getOffers(e);
      (t && 0 !== t.length) ||
        !e ||
        !e.Refs ||
        (t = Object.values(e.Refs || {}).slice(0, 6));
      let r = [];
      t.forEach((n) => {
        const e = new g({
          title: n.Title || n.TitleHtml || n.Name || "Untitled",
          price: n.Price,
          attrs: { productId: n.Id },
          link: `https://order.max.se/link?countryCode=se&cultureCode=sv-se&productAdd=%5B%5B${n.Id}%5D%5D`,
          onShowQR: () =>
            y.showQR(
              n.Barcodes && n.Barcodes.length > 0
                ? n.Barcodes[0]
                : n.Id || n.Title,
              n.Title
            ),
        });
        r.push(e);
      });
      const o = (function (n) {
        return n.sort((n, e) => n.price - e.price);
      })(r);
      o.forEach((e) => {
        e.render(n);
      });
    }
  }
  !(async function () {
    await y.render();
  })();
})();
