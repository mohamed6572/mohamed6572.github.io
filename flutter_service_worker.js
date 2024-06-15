'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c8b8893654ca16f88b022e31d6bba820",
"assets/AssetManifest.bin.json": "a20b1227a9353a5c83c0a186b7e58a06",
"assets/AssetManifest.json": "ee761e05e4c5615a92ca9dc770122112",
"assets/assets/fonts/Montserrat-Medium.ttf": "bdb7ba651b7bdcda6ce527b3b6705334",
"assets/assets/fonts/Montserrat-Regular.ttf": "5e077c15f6e1d334dd4e9be62b28ac75",
"assets/assets/icons/about.svg": "40b8636209b4a469a067e9139e86b273",
"assets/assets/icons/android.svg": "54170236db11e0fc8448fc6e75d38965",
"assets/assets/icons/api.svg": "5d4280e94f516f994763ef09cc2bcae5",
"assets/assets/icons/apple.svg": "bc25a3a2980a5125d90f409004210d08",
"assets/assets/icons/bloc.svg": "61c05bdac9cc880dd2d5da94ce89f2fc",
"assets/assets/icons/certificate.svg": "64fca1cc909995dbe405a46ac4bf9885",
"assets/assets/icons/contact-us.svg": "a72f9793192385df9a76c0b447fed15e",
"assets/assets/icons/cubit.svg": "820ff1df91fbeb5679f697cfdf1f6d18",
"assets/assets/icons/dart.svg": "63a1fa89591745e789e439a1f2d1abf1",
"assets/assets/icons/education.svg": "da29507698b52815a4a716fa88f4b227",
"assets/assets/icons/experiencec.svg": "0c592423d0083dfc178abf10bb6d0946",
"assets/assets/icons/facebook.svg": "059a2755c99e7e523ce9e7566d3a4dc3",
"assets/assets/icons/firebase.svg": "7f8d489c1887554fcf61932505d46393",
"assets/assets/icons/fiverr.svg": "f9836da05512c198fcf7e681b3d16e98",
"assets/assets/icons/flutter.svg": "bd9fec894dfe707631e11a1dfedb25b5",
"assets/assets/icons/git.svg": "e05398dde1ab1fcaa9dfc1238937dcf1",
"assets/assets/icons/github.svg": "4a4b8675cf9b5c90aad89fe71e670b2d",
"assets/assets/icons/home.svg": "d12bcf4e7bd60cc29273d72c2de1abae",
"assets/assets/icons/khamsat.svg": "c6337e66c355640ca2683ddf17897ad5",
"assets/assets/icons/linkdin.svg": "4cea89bafd183a6b80c1e7357a446a3a",
"assets/assets/icons/projects.svg": "e65b279b641f62393dcb174ec904967b",
"assets/assets/icons/services.svg": "00da7683bdf0842d946fb4cfa528ecc5",
"assets/assets/icons/upwork.svg": "b83756ba54a0f69f7c044089ce25bc72",
"assets/assets/icons/whatsapp.svg": "6aa37b4d3f868de723cc2c1cbee7c251",
"assets/FontManifest.json": "72c73d9ad7d6bb4f1a7d6dc05bd98c4d",
"assets/fonts/MaterialIcons-Regular.otf": "a0ea1719e2f54e4cb4afb96f9f6f7682",
"assets/NOTICES": "114822b24e389a4d5ec7a7cf4f39d7a6",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/android-chrome-192x192.png": "44c8836628cfd092fe907945d7d2dbe6",
"icons/android-chrome-512x512.png": "d5e937afa8ab482b8a19725bd4ec6502",
"icons/apple-touch-icon.png": "b272098504f3d46956a064a92d7c921a",
"index.html": "890d17a2b8e114a138ae0a90fd2768c7",
"/": "890d17a2b8e114a138ae0a90fd2768c7",
"logo.png": "44c8836628cfd092fe907945d7d2dbe6",
"main.dart.js": "ccc17c7b8b01dddd06bcf9fe4d1cf37d",
"manifest.json": "2c0b65071765675ae304d9cc6521e3eb",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
