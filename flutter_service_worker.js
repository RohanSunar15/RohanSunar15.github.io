'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
".git/config": "84f7ab8e72e4885893e1f4e221be94ef",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "2de82f4bccd9e5df529834866fbabce7",
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
".git/index": "ed424f78472f9be40b5e19847bed83bd",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2762ad363140ea48eae42c95da3ab91a",
".git/logs/refs/heads/main": "e2565a6bf0d2619726d2dbe30b999b2c",
".git/logs/refs/remotes/origin/main": "306b21bd3ea9486b3400a8fa4e6c400a",
".git/logs/refs/remotes/origin/master": "2b109e498a759f6dc42116961edcded5",
".git/objects/01/8ca820c314b2de5e96670dc7a90ce1ea88121b": "bfd0f52ec684c65eb4ee17949d3a7f35",
".git/objects/07/294988a88b924b276f921339e867435ec40990": "94f82ad0dfb6273e7a640f181c7e20dc",
".git/objects/0b/e9a998be184e7456db7b4b5b3d062dac853742": "7d112acc2087b3f5ab8abd316a00b153",
".git/objects/0d/341648b8595e38604553299b24a845f10bb76d": "523b720ef58c3b32f8ca8a75fcaffd8e",
".git/objects/0f/82a8360517d2c8b7d16e85434d40c6fb735954": "6a607eaa588a4312c03292ddbe569cfa",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/20/496c8fac57587027a54618f864937d1f3ba506": "0b4aa8fe44c7cf03b0828d2cc248b9df",
".git/objects/20/973a51e449b16d2b6b733cd0b4aa572f5e100e": "efa36f29b8a8f7803a7238bfb4bbe512",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/26/6bd04dc67e257ade81fb4f7a164a97e997a79c": "b72fac4337a325feb7614b5f226aaa41",
".git/objects/32/41cd7e72a45ada5f4a70128c1e4389d3af9df4": "afbbc05b225bab2492c928b5b4d00180",
".git/objects/34/2d138d9f60a7f94926f6cda3611e240a197d14": "8110c5a7ac7908e498a032ec99ac7f33",
".git/objects/39/76b4afc588eb440c4a5b5f8fe0df9472dda74a": "3a2f0b5e92662ead0ea572240751cb20",
".git/objects/3f/b73eae9f3b66973b4f05ab7cd8632be3490897": "08c1f180a1b7ca03d8b6971104e7f6fb",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/41/b8e688e05e0bea47ce0810a5f2204c0dc5fcb5": "1d3ca9afa616f4f084c454a89aa67b8a",
".git/objects/45/c5ab6ef63dac1fbacd7414d7ffe3b676e75943": "fb520462a9993850b9f34b7c4f1aa913",
".git/objects/46/f9eed8898dfb910f0d82c843123fb52a75b929": "c8b6ad088c9b3c3455214e0102a229f1",
".git/objects/47/c0e6ce88a5a3a7338deb1ac2fc9425fde2a099": "ab506b339ca443be7afb2690696d9761",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/8ade5e4a045fcf4a8d5157de3c850d6de903de": "64a5ba0a00dd3de285627c2ce6401f4e",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/59/763c7fa952033020be5b578dc966ab533db46d": "24d290c18671d261dbdae626cf816163",
".git/objects/64/65bd9f7b27dfd8fdf87109825bc91d4f91041b": "2c6cd3d986eeb32d9c9cb2ff9fdabf14",
".git/objects/6a/f0d6a1d31b4db13696996bb14b2ff6044e3d6f": "2ebfdf43660b5d6ba7cd5a1f4e943f75",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/77/6961384d33f5861d01c45150fd525e6cdedc64": "e3a7e59f817049db7273121289e348de",
".git/objects/82/a8f18c836bffbb0270c41bfa1af555ac815336": "019fb39bb83e014a69aaca8b07749670",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7df5c2cef6b97cea764a664a935b6ff1b6636a": "de58171a473732a3a584a305275991d4",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/9f85ab6930f703ef73ece37b3559d8ef56b73f": "ed43d1a730160ea42f0688eafef6a9fd",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/51d0a96ac0d4e08be90da2a74e9d5b930526d6": "738672738e0743046eeb0388ada75378",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/a4/f54e1535a834200e8c245795a83df5f17b98c2": "792818faf28055fa06c088d42084a65f",
".git/objects/ac/ff75e742371a164d861b4d8dcba02441fbdcd2": "f8f013ce086336b7bd93ded36cca5011",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bd/1f1cc56da39116dc35e19e884c757e59fb38be": "56c05bfce7069765afe413bb072f362b",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/ce92f67b75b01cc4986779b5964328c478c291": "a937e82ef2cad0dd83ab5d876c67a5df",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e3/6947d31bac728914bbfa3d03df374204c20c8b": "b09d790bf94f87f9595ee3eca59ac385",
".git/objects/e5/9e68b8cd75231ec1d15246d85c97c30057b211": "70b2f8d572ec9d3e270a5fbcb8d6a591",
".git/objects/e8/543ee59f61985a1df748ff6fda8c493a2e8b8a": "b7714cde3ef471aa9de1e2df5913e637",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/8a8dc8506846fb2f4a4f758424017fcb888235": "908e1abec51f7ddbfe3fba676b8c843b",
".git/objects/pack/pack-fbe18a1cf4c1a97fb9b51d7a505972acb525fca5.idx": "6675b31eb7158ea5c158d77be0460e37",
".git/objects/pack/pack-fbe18a1cf4c1a97fb9b51d7a505972acb525fca5.pack": "827edff95c4ab6e3462cb9d9367db19b",
".git/objects/pack/pack-fbe18a1cf4c1a97fb9b51d7a505972acb525fca5.rev": "59133861822df52216e3f5a73f49ee94",
".git/ORIG_HEAD": "0cb000d96c10cb3ffd01c45bb7ce22d0",
".git/refs/heads/main": "9922b439e5297d7b2187f2114012aab2",
".git/refs/remotes/origin/main": "9922b439e5297d7b2187f2114012aab2",
".git/refs/remotes/origin/master": "0cb000d96c10cb3ffd01c45bb7ce22d0",
".github/workflows/deploy.yml": "d1dcd90cc78b9ad615ae95b8a3c53e30",
"assets/AssetManifest.bin": "daf8bffd564694bb41ba343041dd3115",
"assets/AssetManifest.bin.json": "fcc0de5e9ff0e1ecf564a956e2aa01a2",
"assets/AssetManifest.json": "bf571d94a2a60d6a6fe74ac49251ea56",
"assets/assets/images/profile_image.png": "fa3222eeef83331804eb3de77f0bfa68",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/profile_image.png": "fa3222eeef83331804eb3de77f0bfa68",
"assets/NOTICES": "c5f26c8720bdac6d949fb89081d98af3",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "b93248a553f9e8bc17f1065929d5934b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "15d54d142da2f2d6f2e90ed1d55121af",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/rohan_resume.pdf": "9b85910633c3296981ee1ffbf6fabd60",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "da95a624da631b6aa2c37f2df2f4d51c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ec93917f16926b5f36226d2812592ef5",
"/": "ec93917f16926b5f36226d2812592ef5",
"main.dart.js": "a915eac8a06c6c380121337d31af2fa5",
"manifest.json": "58249db287e88deb9a698402c44e5d41",
"profile_image.png": "fa3222eeef83331804eb3de77f0bfa68",
"version.json": "18ed5cdb363f80dbc04df6ff5b42debb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
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
