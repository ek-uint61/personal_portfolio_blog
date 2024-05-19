if (!self.define) {
    let e, s = {};
    const a = (a, i) => (a = new URL(a + ".js", i).href, s[a] || new Promise((s => {
      if ("document" in self) {
        const e = document.createElement("script");
        e.src = a, e.onload = s, document.head.appendChild(e)
      } else e = a, importScripts(a), s()
    })).then((() => {
      let e = s[a];
      if (!e) throw new Error(`Module ${a} didn’t register its module`);
      return e
    })));
    self.define = (i, n) => {
      const t = e || ("document" in self ? document.currentScript.src : "") || location.href;
      if (s[t]) return;
      let c = {};
      const r = e => a(e, t),
        d = {
          module: { uri: t },
          exports: c,
          require: r
        };
      s[t] = Promise.all(i.map((e => d[e] || r(e)))).then((e => (n(...e), c)))
    }
  }
  define(["./workbox-7c2a5a06"], (function (e) {
    "use strict";
    importScripts(), self.skipWaiting(), e.clientsClaim(), e.precacheAndRoute([{
      url: "/Timer.jpg",
      revision: "cd490d829735be7fae030bf54fbcdafb"
    }, {
      url: "/_next/app-build-manifest.json",
      revision: "0035261f77b24951a0aa03e845b5a826"
    }, {
      url: "/_next/static/R0tQyeAHCd60xhiau4yJO/_buildManifest.js",
      revision: "2ec694eb52ae4f523f265a46bae4d768"
    }, {
      url: "/_next/static/R0tQyeAHCd60xhiau4yJO/_ssgManifest.js",
      revision: "b6652df95db52feb4daf4eca35380933"
    }, {
      url: "/_next/static/chunks/00cbbcb7-cc3440719b3e40c7.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/14-748fc7cc75da0687.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/23-f6468c261070edfc.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/4f53ad1b-7250f0b2d19489cc.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/547-21420e8ddc96a691.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/737dfa3e-6713a1717660b125.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/9081a741-6eb4da1a9ae7bea0.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/93854f56-79e3cbc4c348d24d.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/app/_not-found/page-ea85ca6953a3e087.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/app/layout-921f45aeee96b8d4.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/app/page-9c354ca30b62f76a.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/fd9d1056-4d2ecb7add830950.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/framework-aec844d2ccbe7592.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/main-68a6841286a2ae7e.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/main-app-ed14fbedc17ef736.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/pages/_app-6a626577ffa902a4.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/pages/_error-1be831200e60c5c0.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",
      revision: "79330112775102f91e1010318bae2bd3"
    }, {
      url: "/_next/static/chunks/webpack-b2d1a3f7dd542205.js",
      revision: "R0tQyeAHCd60xhiau4yJO"
    }, {
      url: "/_next/static/css/1a5def9178320dd4.css",
      revision: "1a5def9178320dd4"
    }, {
      url: "/_next/static/media/05a31a2ca4975f99-s.woff2",
      revision: "f1b44860c66554b91f3b1c81556f73ca"
    }, {
      url: "/_next/static/media/513657b02c5c193f-s.woff2",
      revision: "c4eb7f37bc4206c901ab08601f21f0f2"
    }, {
      url: "/_next/static/media/51ed15f9841b9f9d-s.woff2",
      revision: "bb9d99fb9bbc695be80777ca2c1c2bee"
    }, {
      url: "/_next/static/media/Timer.b1c54e0a.jpg",
      revision: "cd490d829735be7fae030bf54fbcdafb"
    }, {
      url: "/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",
      revision: "74c3556b9dad12fb76f84af53ba69410"
    }, {
      url: "/_next/static/media/d6b16ce4a6175f26-s.woff2",
      revision: "dd930bafc6297347be3213f22cc53d3e"
    }, {
      url: "/_next/static/media/ec159349637c90ad-s.woff2",
      revision: "0e89df9522084290e01e4127495fae99"
    }, {
      url: "/_next/static/media/ecommerce.9364fe3b.png",
      revision: "99d96af532cc93489f5e2dbc78f42f21"
    }, {
      url: "/_next/static/media/fd4db3eb5472fc27-s.woff2",
      revision: "71f3fcaf22131c3368d9ec28ef839831"
    }, {
      url: "/_next/static/media/mobileApp.7d5584bf.png",
      revision: "74752f648899e7f46dd506ebd3af3373"
    }, {
      url: "/_next/static/media/realtor.adca1d0d.png",
      revision: "32ef35ded77b2e33c66b5b9cb0138dcb"
    }, {
      url: "/_next/static/media/teknoopak.656a4d75.png",
      revision: "4c698188b754520198076a28993ab286"
    }, {
      url: "/putin.jpg",
      revision: "86da98e563709967b1b8ab448fbb2be8"
    }, {
      url: "/carhub.png",
      revision: "75baabd035c5d9585b3a2f4d35988713"
    }, {
      url: "/desktop.ini",
      revision: "32a2567a15e64fd52f6f50eed2dd199f"}, {
        url: "/ecommerce.png",
        revision: "99d96af532cc93489f5e2dbc78f42f21"
      }, {
        url: "/icons/icon-256x256.png",
        revision: "ea491129b9bc0cebb6fd24e1a0365c53"
      }, {
        url: "/icons/icon-384x384.png",
        revision: "f864924c7af78de6f46455e69f88edea"
      }, {
        url: "/icons/icon-512x512.png",
        revision: "a9602516a1724dfa7429ebb8aea06333"
      }, {
        url: "/icons/icon.png",
        revision: "58c1e28906a2f30bc9dff4c2e4747c2a"
      }, {
        url: "/icons/maskable.png",
        revision: "0c2ddb8ff6324f679713ef3e2ceac4ca"
      }, {
        url: "/manifest.json",
        revision: "d41d8cd98f00b204e9800998ecf8427e"
      }, {
        url: "/mobileApp.png",
        revision: "74752f648899e7f46dd506ebd3af3373"
      }, {
        url: "/profile.png",
        revision: "633c60efbaa33f4e4a6ce02cd1d5abf9"
      }, {
        url: "/realtor.png",
        revision: "32ef35ded77b2e33c66b5b9cb0138dcb"
      }, {
        url: "/resume.pdf",
        revision: "00e70b08f4730a0e8f678884bd5640e5"
      }, {
        url: "/teknoopak.png",
        revision: "4c698188b754520198076a28993ab286"
      }], {
        ignoreURLParametersMatching: []
      }), e.cleanupOutdatedCaches(), e.registerRoute("/", new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [{
          cacheWillUpdate: async ({
            request: e,
            response: s,
            event: a,
            state: i
          }) => s && "opaqueredirect" === s.type ? new Response(s.body, {
            status: 200,
            statusText: "OK",
            headers: s.headers
          }) : s
        }]
      }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i, new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [new e.ExpirationPlugin({
          maxEntries: 4,
          maxAgeSeconds: 31536e3
        })]
      }), "GET"), e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i, new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [new e.ExpirationPlugin({
          maxEntries: 4,
          maxAgeSeconds: 604800
        })]
      }), "GET"), e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [new e.ExpirationPlugin({
          maxEntries: 4,
          maxAgeSeconds: 604800
        })]
      }), "GET"), e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [new e.ExpirationPlugin({
          maxEntries: 64,
          maxAgeSeconds: 86400
        })]
      }), "GET"), e.registerRoute(/\/_next\/image\?url=.+$/i, new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [new e.ExpirationPlugin({
          maxEntries: 64,
          maxAgeSeconds: 86400
        })]
      }), "GET"), e.registerRoute(/\.(?:mp3|wav|ogg)$/i, new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
          maxEntries: 32,
          maxAgeSeconds: 86400
        })]
      }), "GET"), e.registerRoute(/\.(?:mp4)$/i, new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [new e.RangeRequestsPlugin, new e.ExpirationPlugin({
          maxEntries: 32,
          maxAgeSeconds: 86400
        })]
      }), "GET"), e.registerRoute(/\.(?:js)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [new e.ExpirationPlugin({
          maxEntries: 32,
          maxAgeSeconds: 86400
        })]
      }), "GET"), e.registerRoute(/\.(?:css|less)$/i, new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [new e.ExpirationPlugin({
          maxEntries: 32,
          maxAgeSeconds: 86400
        })]
      }), "GET"), e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i, new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [new e.ExpirationPlugin({
          maxEntries: 32,
          maxAgeSeconds: 86400
        })]
      }), "GET"), e.registerRoute(/\.(?:json|xml|csv)$/i, new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [new e.ExpirationPlugin({
          maxEntries: 32,
          maxAgeSeconds: 86400
        })]
      }), "GET"), e.registerRoute(({
        url: e
      }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/")
      }, new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
          maxEntries: 16,
          maxAgeSeconds: 86400
        })]
      }), "GET"), e.registerRoute(({
        url: e
      }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/")
      }, new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
          maxEntries: 32,
          maxAgeSeconds: 86400
        })]
      }), "GET"), e.registerRoute(({
        url: e
      }) => !(self.origin === e.origin), new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [new e.ExpirationPlugin({
          maxEntries: 32,
          maxAgeSeconds: 3600
        })]
      }), "GET")
    }));
  