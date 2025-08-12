'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6b27ebe895bd5e0f80f7dbcb5c576ed4",
".git/config": "b976332b25f75415f2773d2198db386e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "88cb3901c9edb2be153551c0cb25c82a",
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
".git/index": "76778e1c34969fdbf35bee3bfced0960",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e520a46e179e171a571828bff7b22ce2",
".git/logs/refs/heads/main": "9688ef2303e91d98b8caadddb34f2148",
".git/logs/refs/remotes/origin/main": "a9137e7a6bb08fa40e6f845b7e221cf9",
".git/objects/04/88b405b66d53e7ebd5c8bf4724a467b026706e": "0de855836834fe2aa11f5acc9a19c2d8",
".git/objects/07/1454ce2cd19fa7973f383c438bb282ac51e590": "3d1a1d356db5eb6d596eb1fe25ebb2ae",
".git/objects/07/294988a88b924b276f921339e867435ec40990": "94f82ad0dfb6273e7a640f181c7e20dc",
".git/objects/09/2c60a721c7be07df14a816c64e9eebb241c955": "1eb96e334e6a3e8e023f8bb273a17095",
".git/objects/0b/0c00af40f8f0a3736d869226f82d6d2f7bd1d3": "145063bac48ad6049ab2d3eca4d90771",
".git/objects/0b/e9a998be184e7456db7b4b5b3d062dac853742": "7d112acc2087b3f5ab8abd316a00b153",
".git/objects/0e/554c16ac1d7848098c3df2e742719a21f56962": "8891537f295695375a90904153ade56f",
".git/objects/0f/0b6a01823ee7eb1f759f817d12ed325e378cb7": "50d1492bbcff4791fd994e9f20f10e33",
".git/objects/0f/82a8360517d2c8b7d16e85434d40c6fb735954": "6a607eaa588a4312c03292ddbe569cfa",
".git/objects/0f/9d5cae1b5b7d6c33f54a5529bbf2a9ccc30277": "866004c9f22859f7625eb81352f88378",
".git/objects/12/1186ee104e0f7ac3738430fbb4b5889cc28a6e": "59ee817ff7dee5178c5e8fb3a2426d20",
".git/objects/13/e7ba5e9a455cc7d39d484f1f0ca9a188d0a182": "a264c7b104001626635377f791e05072",
".git/objects/18/ad33dfba491f738641b466ee519c3974641a48": "78070f17a9986eef1251263b95cdd88b",
".git/objects/1a/a8e8695d3593c5c6fecb1fb83e63527b4f9635": "451da0f0813ec10f5c824ac6c0f1572f",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/1e/03f0eb66778e66d18567d75f70a7e6b1d6bdb7": "9a13c369b135c6e900f744577a71e8ef",
".git/objects/22/cedc5ecc254d6f275afadd06ec0f357e82e4c4": "8cbab7637282610b1f6cf683bc31952e",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/25/5778e7383de12b083d98d9f60d192a5a563070": "92d9520a75dcce18f9c35c119fc56cee",
".git/objects/25/7dfbec9b97576046fd41dbdcfb8a8606b50bce": "3a13f40c1e049111e696b7ca98bae319",
".git/objects/2b/69afbd26f8760d384cc60a1452bf1274fef313": "35514d684dc4b582453e54ddf2839cc7",
".git/objects/2e/1ee6d3a94cd3a14e6ac1d272951fa17bc3f2c9": "12f767ac42c33f056bc4b2ed4d440f46",
".git/objects/2e/7e3338f0b6059d8a3b267f5b222ccebba45869": "01a1e99c25d1469a8c674b73f5500b8c",
".git/objects/30/f5735260eb8762fa9ba60fe910ef8b80f4737e": "82fe7069af8718321d3bfdba67274156",
".git/objects/31/b95ffe6b9dfcc9dd88c617e52a40baf45a30c0": "eb3ae2aa03a66846b96f72f2d3d4d9af",
".git/objects/32/41cd7e72a45ada5f4a70128c1e4389d3af9df4": "afbbc05b225bab2492c928b5b4d00180",
".git/objects/34/2d138d9f60a7f94926f6cda3611e240a197d14": "8110c5a7ac7908e498a032ec99ac7f33",
".git/objects/37/a075d6bab588c56e08aa31fedaf317ed08df71": "706879b98111de7bbb9e8233a04b67c5",
".git/objects/3b/5352c16f08646c9f8342e249c622c31caffcda": "a09dc48eb758c03805ef2ec16ec487d6",
".git/objects/3d/4e264401625e364067950d5a496c50a147b901": "eb7f281761265c194e5e391d884b7043",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/cbc51daab7e25e9296c760a359285042a6b562": "507dc2f6754b612d0f5dc6569a14d89d",
".git/objects/42/f2a4ad1e0562b1aeb9e7bf7bced1eb38809dc0": "38c21743ceaaaae7b60e475de5a78bc6",
".git/objects/45/c5ab6ef63dac1fbacd7414d7ffe3b676e75943": "fb520462a9993850b9f34b7c4f1aa913",
".git/objects/47/c0e6ce88a5a3a7338deb1ac2fc9425fde2a099": "ab506b339ca443be7afb2690696d9761",
".git/objects/49/4b03240df4e15118c99dad1a7691f236cea41a": "72fa94b2e0d47c3aa48663af650d3a99",
".git/objects/49/b7d2a78bd207e4dbc1121c9e1078439e3f3751": "429b4f4e1e2087560bb355335ab1e945",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/8ade5e4a045fcf4a8d5157de3c850d6de903de": "64a5ba0a00dd3de285627c2ce6401f4e",
".git/objects/4e/ac3aa33e62905e20dcfb6effc4f7295be62cea": "73e3a6c09e3ee497ca4d27420f42b029",
".git/objects/51/14d6f12378da0805c4996a0991a86eb40f0ffb": "d777d287a531315c3ae24dbafde5155a",
".git/objects/51/a4aa8b7842631611eebcba6f1bb4cf7cb9a203": "911d20bafc85e2fee9713a9de89bb2a0",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/55/4593785cc5d73292c57db1bfc227a38d374db8": "a7811224cb8ceb523412f44acd2c2b07",
".git/objects/59/763c7fa952033020be5b578dc966ab533db46d": "24d290c18671d261dbdae626cf816163",
".git/objects/5f/2beb6ce5e65242b11f4fa21335a5cdfe6c39c7": "3154642dec2a916ab1472862f3efb877",
".git/objects/64/49a00f875fc06bcf1c748d78662b1ffc207329": "1dc7334c7bf04d376f3bdf8a140aa20b",
".git/objects/69/2f8b2b89d5761450dcf9c641206b58ecb7f3df": "e193cafcc533a9692c7ddd6c54c65777",
".git/objects/6a/f0d6a1d31b4db13696996bb14b2ff6044e3d6f": "2ebfdf43660b5d6ba7cd5a1f4e943f75",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6f/7d5f276ab0864a38dfdd2f3d46c56f699d9103": "c69ad3ad822a9b0ca3e94a4cc070166c",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/76/0ff6af40e4946e3b2734c0e69a6e186ab4d8f4": "009b8f1268bb6c384d233bd88764e6f8",
".git/objects/76/5c3e00ed1bce3d34d062d748ad8bdfb59e0872": "ba8b88ce8d52c795e69cda0df75147a0",
".git/objects/77/6961384d33f5861d01c45150fd525e6cdedc64": "e3a7e59f817049db7273121289e348de",
".git/objects/78/a51618f8812bf47ec7c575abcae21c3967ecb5": "6d66f3417cf60cce85690451209c2f31",
".git/objects/78/dfaeffc0d91f92452712339852b6fcf4eec5d7": "fb736ca3dc605c177da164bece2f016a",
".git/objects/7b/22fef38865a3c4c84ff2304c4c67e8b366a94b": "7828b134f199fae9c227f5c88eb646c8",
".git/objects/7c/a4042aa6f4566b085dcbfd9330c2cc2af3cdab": "357a328145441b913f41abf83cbcc5d7",
".git/objects/7f/5c29bbca1479d514a7075ef3f016e1c4c9810d": "2c99aa2e1f79c4f5cdbaf1b0e2520f56",
".git/objects/82/a8f18c836bffbb0270c41bfa1af555ac815336": "019fb39bb83e014a69aaca8b07749670",
".git/objects/86/8216f58c8256c9c7bd3f19373b3184ec984e68": "6a8b25b5401e8e947ac22ee39cbadeda",
".git/objects/86/db2018006c9eefa5a705ffb98e74dab18f31cc": "d606fd80a3f22b501b65d47c8b5d6e92",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7df5c2cef6b97cea764a664a935b6ff1b6636a": "de58171a473732a3a584a305275991d4",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/3d04a0dc418bd4d75be44711fdc1427042a6e7": "35ce663e3a6cefe16d7ea47a08c3b94b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/90/9f85ab6930f703ef73ece37b3559d8ef56b73f": "ed43d1a730160ea42f0688eafef6a9fd",
".git/objects/91/ec00c9310c44fd1d7239552f2ce30cad77dce2": "3ff9355d5449a4094630d4ed6439dc23",
".git/objects/93/b1d453d3e1d668426c06e01bb21a19bd55f302": "e03b2dca899f0f948167dc4c2a78ec4b",
".git/objects/9a/49060be8c916ae60e112b9b6bf4f959607cd86": "40384e88dc66957da93bca82a8f30542",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9d/13893463c39a4720102cb19abe441c6c3c0f43": "1eb17c22b93e5e4c4861eb63ecb06982",
".git/objects/9e/2ab016519a502484208716df74818e39f1c954": "afc8cd7bf25ed008c40f5f189c6f70d4",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/a0/04f2803e8a634c5deed4d6681d60aa86810e35": "cf8b43f520287d957fe7c994ebbf1a21",
".git/objects/a7/171f9b61478fd12222afc6df5f9c7a1d47b743": "159b92f73a3955595dcd3f9dc8f40d0f",
".git/objects/ad/4c0ba9842f4de544316a62269732d33f652961": "d2648c4f7ac6a01d24dedabffef3980b",
".git/objects/b1/b1df35b6c16b5f59a37ccbb427bf87efc48e1f": "16312479d81b35f6a4c6ef7f9ff2cb6d",
".git/objects/b1/db749c1584c84c15f46dd00882813c742d0904": "2ef44be3993267a4233789c9e65ba3ee",
".git/objects/b4/a4cf344209b1d098d60825e05860b3594efde0": "762a1f81189335c780cc4be2d80551e9",
".git/objects/b6/3d8d0086e2e8674d9404237c1a341326002c67": "b880f47e0c723d828782bc7d4e4a7171",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/8eb257edee877627ab36ee2dc37a33107796b9": "a74fd9bffd2ac382e441f76821c6938e",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/bf/c0da0dd64ccce88d21374e1cf25105a423773a": "47189f90711fa6f7a3b8eb6500aada11",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/7bd76c41dc205e5a9f9360c5d2030874973beb": "895eada1ee50c38d4731b18276cec303",
".git/objects/cc/b48345b3b4304c7d62a8b06f647d0b6b08dc2c": "9285da9235a01d5ec8979526a99edf82",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/80ce749ea55b12b92f5db7747290419c975070": "8b0329dbc6565154a5434e6a0f898fdb",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/cb910385e368b5d308273a420e39da15b01de8": "4150635b5caa64601ab929a93c319daa",
".git/objects/da/c3995eeb6b56b97d0e0e945efe4be1dafe6d4d": "546e2830da33c4fd2116e1ce5ef74d6f",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/dd/4124b18d9cd4f3eff21339bcecf9edb0c33c96": "32384970cb1d88a8ad2f4f3b1a87ec86",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e4/ea536b9c87005e12da212587e7d470530e3247": "068a257bff7cb67c36e886b52191cda1",
".git/objects/e5/9e68b8cd75231ec1d15246d85c97c30057b211": "70b2f8d572ec9d3e270a5fbcb8d6a591",
".git/objects/e9/7a9650e1dab0026ce4cc6a1d6a51ff247c4aa2": "e1d6a028c6db9b44f9f4b4888b9c254a",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/e9/bdcd2321c87b772430fb61f7d0013ee6c3250a": "fa4e08d13295019d5f51d94ac4268b1e",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/b315c120f8f2eed2d04a5608eaf3036c747f7b": "4e20e852f46da4bd27cc8ef49ee6a49b",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/ORIG_HEAD": "14a8c4ad1bcf45dac2f6a21412a40cd4",
".git/refs/heads/main": "14a8c4ad1bcf45dac2f6a21412a40cd4",
".git/refs/remotes/origin/main": "206d856f78fb783248b8b1c98dfc4fbf",
"assets/AssetManifest.bin": "23f13c0dd5cf617bd128f598148754eb",
"assets/AssetManifest.bin.json": "f4f4feecc9448750f1f192670ce8a4ce",
"assets/AssetManifest.json": "af4390cb216db34e1a499803f226aaa1",
"assets/assets/images/profile_image.png": "fa3222eeef83331804eb3de77f0bfa68",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/images/profile_image.png": "fa3222eeef83331804eb3de77f0bfa68",
"assets/NOTICES": "f5cec350b6a04d3863dbeffdb318c0ac",
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
"flutter_bootstrap.js": "352ea46b69f69c9e83e2474148498581",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ec93917f16926b5f36226d2812592ef5",
"/": "ec93917f16926b5f36226d2812592ef5",
"main.dart.js": "c1e2396fe1995456b2043469688a2bc7",
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
