'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7d750c81271be6fa0eb4ba83763dc66c",
".git/config": "8ec96a7462064339172fb27e8652bb6a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "10f6a2e7be3d7740e210029fd9d559ca",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a247f6e69575e7a5106748e611108559",
".git/logs/refs/heads/main": "e9ca1333e787933eba4c48f52053cc81",
".git/logs/refs/remotes/origin/main": "3e21e312a8fce4ab571973d6334a0846",
".git/objects/01/42f190756b6f3bbc63f622bc7d7a6f0cdea834": "aa48358061591bda018d70dbace3a74d",
".git/objects/05/44f9a798846d0ab3eeab5ee9cf5c21ab20dccd": "6d3840089e4fa746abdee234411e1b12",
".git/objects/07/1584263b84b6bf8dd8b05cde26fe1abb876f94": "39b3535b3d9cc4f258c8b6b0111dee00",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0b/226fe622332bf7a6fc62fa5384de08d26af313": "151075b07f85d74e89f9c42764f135f7",
".git/objects/14/d6fe5ee7920d52cb4cad6452bd9d8f60b94118": "ca2c6d33546d8ca45f572220af5b5631",
".git/objects/14/f43afc346e5e63b96c06791af753e5f7aa6f53": "e7f097fd6b820ce5e938a82a33168c0f",
".git/objects/15/1fdd8e44fdfa521529f64ee220f04f83d939f9": "ce06e285f1f6e8109688735e0ffdaaf3",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/1e/b3c8e788dd2e0de03f5c2b502cb30a80a8a676": "b842ff041c6f5fc8f48031f614acb243",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/23/914ab31beb8046fe38f327c351ae88f466ebc6": "46e5145ae88c22de37b5429c604ea77b",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/26/f4145b0eea930991d24e27f92d07eb3271feec": "4184a2334b7e1e121d2c8cd6cc24ffd9",
".git/objects/33/9842307ad16ed6873e6e538f70416db6ffc906": "e81d0621b05ee78cdc899dedeb2f3d45",
".git/objects/35/267b72ed699da69ca0b974c989f180761735e8": "379b778bf8b021a2626905304e068baf",
".git/objects/38/1d76f5c3aa30f0c545dda6e4c2fbddb3023d18": "c7a42da627399d4a7eb8cf432912f978",
".git/objects/3b/2cbb02c24c9cb95b3f55e8c497e7e4038ef758": "347bf226217f7b41dfb636d778dc0c7d",
".git/objects/3b/86b90513e2414124b9fc2607b36d4aec0adf26": "48adeaa556394bae4ccf8c669e621897",
".git/objects/3e/a8dd051023692ff2dcb5eaaa8110155071b866": "db3300e18408d59cbb15e681ddf9b11c",
".git/objects/40/12225c0b220d0e1d67001daa7e01bba3df6953": "62a756494cd4486a4ac4ba6c10ccb080",
".git/objects/40/2909513fe3d374f105e3976f4d22a0e4526735": "bd9c7dd05437e9843f669e5a80d4a475",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/6201e332efcc375e8665b5f820b18a69a603da": "94dda59ac60b42aa7e039a5ae2af1c31",
".git/objects/50/b9d4b67113da2039c04f12022dcd5a9da6f88a": "598696c21d812d527fb5418c4644bad1",
".git/objects/51/3caf5b4758f0bd0a8c57a6dad9d5149192b8bb": "6754e01540a151c63cff8568677a20b6",
".git/objects/54/95fefa98d37280b7382708891b5c1c0e7a6fc2": "717d7cdd8d686d4ec20c1aa0fcce9e96",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/5c/bcae78288671ab42ef3ce69c8105c41be38b5c": "feccd2f14dfc9c9af4f32f41720ecb8c",
".git/objects/61/897115ca881c61361491fa97496fbc929836a6": "d5566cd7c6360df914eea1a1ce04accb",
".git/objects/66/1b3ff95cfe0e2993a1cf76fb6f167fe160ad54": "2a53a938f73c7a4735a27ded4d41dc9d",
".git/objects/68/61d6acd3cfc30210d6f50ac1811e09dcff9812": "231cd1c982467028b0769d4ea50623fe",
".git/objects/6d/93f98a7d623c5fbee4a0ad32991b74c7506e7f": "8a0121cba5463fe3c79514bb1ca52f3a",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/78/794c890fc18ae017b231144849fea2966e639f": "61aaf887a29bad0e14e82a7cfffc5349",
".git/objects/7e/7d56a77bc7b93a12385d892d3a3603269cab03": "964a208f2d7476af1070bd91c6035f2b",
".git/objects/82/13883646f3e7c5147eea7dd19ce887981d5bc4": "0fc5387df639d0b8c2693dff8b59377b",
".git/objects/84/62fcb2829be827b0a250937507ae021df01a1a": "079665083843286592b36fc6bd93b893",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/4fe930f28d3de2584e5de0a1a13e6d661d580f": "9642fa0af7eb148a36e29aa06a874019",
".git/objects/89/8bbe8a00323126fb038369349734102e437470": "a78e313f6855afe6c4d745027f4e40b4",
".git/objects/89/9b345d6f74b5f9a2ea0d9244e8d2718d869f56": "dc43e1b30020248df5c3c9be2eb8dc86",
".git/objects/8a/f9dd0e806aba9d38e1465a4abaf00949b5144b": "d5161ce686d0c50ac9d2a4bc98cb60b2",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/99/663f088826e62b24a08a404e86ffede6ae455c": "227055ab3aa0f1e2214717cc76fb6cb8",
".git/objects/9a/fb7995ffdf93e558d46628c67628541666350c": "0ca9869f63fd58a71f1331b4323bc1ab",
".git/objects/9d/7fe0132f02f932163766afdc4ee0c98daa0ec7": "7125cd6ce6a4881d641e0f6824031562",
".git/objects/9f/d5deb11a9c1a0c61d45fea0f47690895cc3bf3": "40beadaed2d4dc15e38a7f6e8b29f491",
".git/objects/a0/c5ed785010ce92b5ac27e5f1596e3124f9fdb0": "b86e42d42e4b7c4df04956ff8bc55125",
".git/objects/a4/b3e3f9aa3b20b76c43fcbdccbf3f5af725a5e4": "92af7c78b7850b7c6f2568c51d021d6c",
".git/objects/a5/8386c8a3b68c7742e2280f21c43c662a6a79cd": "b1995627bcdae044c87981e44cc7aa2e",
".git/objects/a5/bb9b52ca7e852e137bc4dabd98ac7379f1bf25": "453804ce3c63fef91be61ca587f42ea4",
".git/objects/a5/bbe5e69b008c2170d05ac6f19fdc2b7074d1a1": "638bdc1923c15747e3a4566a1dcadcdc",
".git/objects/a8/cc012a3ae707342362fc846a1af7002649196f": "59ca6ab93ab3040b37afca471e84c7e6",
".git/objects/a9/9c30840e690bd26a9316dfebf7a1315f9edab4": "a10c8f6f888e2d6d54e3e31353a20445",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b5/876e232d826df832ffd2286af4c5209729cfd3": "a5ee04390c0927c8a032c65a0fea21e8",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/8056d2d7d32c21f4fb111f6c588e1daf09373e": "98b04f0f463f5144bd4346c7cd2f59b0",
".git/objects/c3/fc3c37643d7e1cace6d6d74394a54b7ef915f1": "4325794606b57dface0239c5144bb97a",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/c7/7d77ff105e9801553e71cf55fabe4c559d3153": "7ff600fab769f40d5576cd07e98515b0",
".git/objects/cd/939474915defa3a663635c67a69a3c05b2fe06": "61f231e39ae8765d2d2b0d155a3310b1",
".git/objects/d2/129276dc774e086da1a54796f281ee195fb632": "716e0a4e45e9e0a6783a6cf7e8980a4b",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/dd87c9d35781b58b6206746f8435a04f38b212": "35ee6d0364d6490923be308b66abb8f2",
".git/objects/d9/670e01a23ca3154679e1b99434081a0113928c": "ee1f5aa55e88b8bc44c032148bb0c28e",
".git/objects/dd/14103c6dbc05cac25d9be0bcd1f37d92149ceb": "1a7b01b5e224e8d4a4843d12000fc18c",
".git/objects/e1/31170d0891740a22fd2f02dd089d19bb9f1904": "48ae10b69e71e0f90e39f0c771440517",
".git/objects/e7/ad2263de22f16ad189e5e13d12d6354452ab5d": "f957cdca49c13c026419af9bea7c9f28",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/e9/d6a734a77ad64d2f6b170467caa67351c2e465": "ebbc5330aca9775b5d66c7bf6c7cb992",
".git/objects/ea/20fa1b5bd4125fb9b18b34e8a367ed80280c7e": "f8e1878f615e4ab6d86ee1c48c795324",
".git/objects/ec/aa560c031b49f8ac4148eac1a506446ce2603b": "473f3318cadcc8cb38b6329d6fc1f11c",
".git/objects/ef/e79fb6fab4e9079f9fd2f46c36718c5faf0ae4": "c1e527afcf523246e4b750ade483bde0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/a266dd37d5066da46c9a6b8898073ae2930a64": "90c22367f91de9fd622ad04f0a5fd7c8",
".git/objects/f9/9a40a52a417f2da764ae0a5c6c7b9b4804b34f": "5da555ab8a70d43a6e22edacb927ca1b",
".git/refs/heads/main": "ee729447d2b359e3ff6b6d64462debda",
".git/refs/remotes/origin/main": "ee729447d2b359e3ff6b6d64462debda",
"assets/AssetManifest.bin": "c8b8893654ca16f88b022e31d6bba820",
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
"index.html": "cee2ad6753791b1d61832d85f25c1ff2",
"/": "cee2ad6753791b1d61832d85f25c1ff2",
"logo.png": "44c8836628cfd092fe907945d7d2dbe6",
"main.dart.js": "baf5c87eb7ab3a37f1346c8e13b14b88",
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
