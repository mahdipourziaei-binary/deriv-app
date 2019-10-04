/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/css/AccountSignupModal.css","a30f9ea7503f584b9910a100dfdf8e5e"],["/css/account.css","0a3a5ac5495c8e95046c28cf0163c178"],["/css/app.css","e8d20088e6d316057a83e821f8448762"],["/css/default~modals~mt5.css","35914afade30258cfe95d2b07c22bcdf"],["/css/modals.css","26414ea9499779d47666f8e94ff53622"],["/css/mt5.css","28309f0f958f52c5b5e8ffc4620ad585"],["/css/notification-messages.css","6a0d670b1dfcacb96b7260efffc6a4f5"],["/css/reports.css","3f379e4798102173a5b10ebc4e400946"],["/css/screen-small.css","e9121bc9b28df9aaf8e5086d03205f6f"],["/css/settings-chart.css","1d871c9430edb2809600ace0624dcb12"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","2ccd66d733ea55b1ab751c693e2a799e"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","d570b1ce9d5cafa720d4b5c88f75c987"],["/js/0.d33921b78e5e06ac8fa0.js","07f972f111bdd5a7b1c00cc738dc30a7"],["/js/1.d33921b78e5e06ac8fa0.js","82fe5186a81a8cf29202573944bda7f2"],["/js/10.d33921b78e5e06ac8fa0.js","8b3dcc14f35e5fdfa8656831e1528dce"],["/js/11.d33921b78e5e06ac8fa0.js","a609c11a70a22afa5aafd19a81fc0dcc"],["/js/12.d33921b78e5e06ac8fa0.js","314f1b51f7b2500e4eeb720d0f9e49ae"],["/js/13.d33921b78e5e06ac8fa0.js","40fcab8027c4b6953a1cae32967ebc9f"],["/js/14.d33921b78e5e06ac8fa0.js","a2d26ff9920c286cefcd867c6f1acd29"],["/js/15.d33921b78e5e06ac8fa0.js","0a32126a92ec83357a9b129ea3307071"],["/js/16.d33921b78e5e06ac8fa0.js","676c079a942b110585cae69ca96c430d"],["/js/17.d33921b78e5e06ac8fa0.js","60e4c57f1bc66add59df87436c2349c7"],["/js/18.d33921b78e5e06ac8fa0.js","c3fc9a6c477054a63b3b0e3fbf76fb4f"],["/js/19.d33921b78e5e06ac8fa0.js","ce0635c9c53190397d88e7cb73a286c0"],["/js/2.d33921b78e5e06ac8fa0.js","0b81791a49ecc31f6e2c732af7f4fcae"],["/js/20.d33921b78e5e06ac8fa0.js","2e194dba60a8402ca3f64204a3051e42"],["/js/21.d33921b78e5e06ac8fa0.js","a4a5562dc89cd7f4109c1d7b155e3acd"],["/js/22.d33921b78e5e06ac8fa0.js","76051b06cc0c3a2a184cad7cbd914abd"],["/js/23.d33921b78e5e06ac8fa0.js","634ed525a2fc73109d11c05d279c5519"],["/js/24.d33921b78e5e06ac8fa0.js","2618e89256a31a0e69ef54b03db2ada1"],["/js/25.d33921b78e5e06ac8fa0.js","52c73ffe5012eaff64ab342493a41649"],["/js/26.d33921b78e5e06ac8fa0.js","08cfc5f558885407b59797f1796c085d"],["/js/27.d33921b78e5e06ac8fa0.js","651a3a91665baf9efece6e34494ff0a4"],["/js/28.d33921b78e5e06ac8fa0.js","7c4997ea93e21b97e7ae96a7b68f55dd"],["/js/29.d33921b78e5e06ac8fa0.js","b989ca60cbdf7686b3facaf046496f8a"],["/js/3.d33921b78e5e06ac8fa0.js","82d97e1a268f0187caed4cc38d57e7bc"],["/js/30.d33921b78e5e06ac8fa0.js","247c178985d3c90011b823a3cc8683f3"],["/js/31.d33921b78e5e06ac8fa0.js","ea183bc56c93ea8abd0fd81ac0307ceb"],["/js/32.d33921b78e5e06ac8fa0.js","619ff05102611ce545e38d308ec2ad65"],["/js/33.d33921b78e5e06ac8fa0.js","11e7ec865807245f6eb3becfe4467541"],["/js/34.d33921b78e5e06ac8fa0.js","ec5a50c09a78931b89ec32a5f713391f"],["/js/35.d33921b78e5e06ac8fa0.js","d093ded0789601c806b3c5a34cd0237e"],["/js/36.d33921b78e5e06ac8fa0.js","c7d05019f6b6c03c4b4dfc4605f62334"],["/js/37.d33921b78e5e06ac8fa0.js","3bf96c8d1c608d210fd7e45f02538328"],["/js/38.d33921b78e5e06ac8fa0.js","0c5d7e73c5c2a83088cff6871d7b7ff5"],["/js/39.d33921b78e5e06ac8fa0.js","8a8bdc1eabdfafc66cf38ac058900334"],["/js/4.d33921b78e5e06ac8fa0.js","43ee06de0d484caa4333afe1f218c6e1"],["/js/40.d33921b78e5e06ac8fa0.js","ec526fe15b5d90e1233b797a57ebdf94"],["/js/404.d33921b78e5e06ac8fa0.js","17829368380578a90b2af8b90930cf9c"],["/js/41.d33921b78e5e06ac8fa0.js","f1065140da9376ee549bdfb12b2772bf"],["/js/42.d33921b78e5e06ac8fa0.js","e48698fc6efc5aa49c738e1a0fd34b4f"],["/js/43.d33921b78e5e06ac8fa0.js","54e4431d246bbdb6d989f3da80a6a6af"],["/js/44.d33921b78e5e06ac8fa0.js","78d6b82dd7a85501bae09195eea6c53d"],["/js/45.d33921b78e5e06ac8fa0.js","6e8d81cf0220434432b96b6eda191908"],["/js/46.d33921b78e5e06ac8fa0.js","243866fa105b55b0ce319ff6c39f6f13"],["/js/47.d33921b78e5e06ac8fa0.js","fd280bbf5449ea15f52016999ba71108"],["/js/48.d33921b78e5e06ac8fa0.js","e3b297a7a7d1e6047f5a0965134a02dc"],["/js/49.d33921b78e5e06ac8fa0.js","cea0080c1ea1ce746bd231b7623e306e"],["/js/5.d33921b78e5e06ac8fa0.js","56555dc69fdda6e7c3304a08f637c643"],["/js/50.d33921b78e5e06ac8fa0.js","a4ba374550b1b02228d17478ad7737bd"],["/js/51.d33921b78e5e06ac8fa0.js","4c805620ab4e3bf552e4a655eb0cef05"],["/js/52.d33921b78e5e06ac8fa0.js","74cd03900fabbbc5f7a2e0c601565432"],["/js/53.d33921b78e5e06ac8fa0.js","85a38a19ae3b8ef76d5644bf7e691db9"],["/js/54.d33921b78e5e06ac8fa0.js","bc14d0bc93f3ae93a24e6e0f4cd10d13"],["/js/55.d33921b78e5e06ac8fa0.js","f226f92c2504785a8632e06a04dba0a1"],["/js/56.d33921b78e5e06ac8fa0.js","b1fe4f69ca9a95603964c05b706cc8b3"],["/js/57.d33921b78e5e06ac8fa0.js","fb29dd089c6a40a20a295d8a1abc5a32"],["/js/58.d33921b78e5e06ac8fa0.js","b8d911de869bd0eaee38b8eadd309237"],["/js/59.d33921b78e5e06ac8fa0.js","fc6479aed14b7b9f5b666fc75053b25c"],["/js/6.d33921b78e5e06ac8fa0.js","ab8ee81fad8ccd7cf284bb7e3e6ebdfb"],["/js/60.d33921b78e5e06ac8fa0.js","3bd0e57d2234485dd7d1ca6d51aae7cb"],["/js/61.d33921b78e5e06ac8fa0.js","a9a3cf1250a30f685e41db71674ca448"],["/js/62.d33921b78e5e06ac8fa0.js","2e70f43ef3c0dda79196afa9278f2392"],["/js/63.d33921b78e5e06ac8fa0.js","766f34d123ae5d2b755b6de66b0fce02"],["/js/64.d33921b78e5e06ac8fa0.js","fe8ae03d3b44ea6ac0cff38d9042a90d"],["/js/65.d33921b78e5e06ac8fa0.js","4deb77af1d84f834ac271f63cb929235"],["/js/66.d33921b78e5e06ac8fa0.js","e0079fdae144a9a4bc5eddb99166768b"],["/js/67.d33921b78e5e06ac8fa0.js","a5a411f81e662b6b4e047dc4923828c9"],["/js/68.d33921b78e5e06ac8fa0.js","8adc3d343e68dc35c64baa66a454e556"],["/js/69.d33921b78e5e06ac8fa0.js","f9c3e5d09cefe3ebcec898ee41c8969e"],["/js/7.d33921b78e5e06ac8fa0.js","453be20375f7cb9f5dc5245a1632a068"],["/js/70.d33921b78e5e06ac8fa0.js","0e23e8f5212bf95077c94390d6d84e98"],["/js/71.d33921b78e5e06ac8fa0.js","32a49c806f1d3025766c7319f1f08eb0"],["/js/72.d33921b78e5e06ac8fa0.js","a9da412643be22ffeec3f2c4b74fd6ef"],["/js/73.d33921b78e5e06ac8fa0.js","92213a55835ddf0938f88c8493432475"],["/js/74.d33921b78e5e06ac8fa0.js","37d3e3f3eccf9fa6205ee51cad649486"],["/js/75.d33921b78e5e06ac8fa0.js","95f3069a590a9f823c9299aa21275d49"],["/js/76.d33921b78e5e06ac8fa0.js","e3b3e80fa04231ad90c7fe1d5584f1ec"],["/js/77.d33921b78e5e06ac8fa0.js","8f9e64cb3b2bb96b64970939ec955d74"],["/js/78.d33921b78e5e06ac8fa0.js","01bad8f4f64a780dd62aad9a294a880d"],["/js/79.d33921b78e5e06ac8fa0.js","9782ab53294522a54121317f8063f634"],["/js/8.d33921b78e5e06ac8fa0.js","24669bfee0e66866253c19619fe8d990"],["/js/80.d33921b78e5e06ac8fa0.js","307ec0769e92a9f8d72da6434cf10c31"],["/js/81.d33921b78e5e06ac8fa0.js","4910e2d5870fbeabba2414e7b5bb7c55"],["/js/82.d33921b78e5e06ac8fa0.js","563e77479885ca7fcf4a0fbb9353b7fb"],["/js/83.d33921b78e5e06ac8fa0.js","ffdcbf4534c0f006ccfb5f1954514446"],["/js/84.d33921b78e5e06ac8fa0.js","206ccee57c6cc86d6975bc6fad19dde8"],["/js/85.d33921b78e5e06ac8fa0.js","97426cd291607f3b7c16c86a6b4e32f5"],["/js/86.d33921b78e5e06ac8fa0.js","5c6d9e2de0bd62058813cd93f852a8c3"],["/js/87.d33921b78e5e06ac8fa0.js","f17c1aa9e6562cd03870c18999ccb699"],["/js/88.d33921b78e5e06ac8fa0.js","aad5bfaf1469565a8b3e1a24fc6f26e4"],["/js/89.d33921b78e5e06ac8fa0.js","e1f870210d9b69a66d3a4a8d91e9a5ab"],["/js/9.d33921b78e5e06ac8fa0.js","47483dbe44f827c7dea214690be36c0a"],["/js/90.d33921b78e5e06ac8fa0.js","e460ca76caf126f607b806fbd7ba86bb"],["/js/91.d33921b78e5e06ac8fa0.js","04471a1f568bde2353b241f812b2aa60"],["/js/92.d33921b78e5e06ac8fa0.js","67ebfd1b089d549eba5dcb8ef729a180"],["/js/93.d33921b78e5e06ac8fa0.js","870597c8b0c197030e02a0ec563dd7a8"],["/js/94.d33921b78e5e06ac8fa0.js","614fe95a39bc152f6eb508c9b3c3f7c9"],["/js/95.d33921b78e5e06ac8fa0.js","93f96b881a08c08931f5102317f6a956"],["/js/96.d33921b78e5e06ac8fa0.js","c721a2595c9268939e8f20d6c8ad843b"],["/js/AccountSignupModal.d33921b78e5e06ac8fa0.js","c0a1f85005d8ebae9bfd94c79a0ab2dd"],["/js/ResetPasswordModal.d33921b78e5e06ac8fa0.js","907c60358256b3abc82bfa6a9b0e54e5"],["/js/account-info.d33921b78e5e06ac8fa0.js","17cdf134f4983c5be978bd9df957286f"],["/js/account.d33921b78e5e06ac8fa0.js","dd6dfc2ab063951a2b8d412c2d462a78"],["/js/contract.d33921b78e5e06ac8fa0.js","c640864f6ce7100877fd033987a126fc"],["/js/default~modals~mt5.d33921b78e5e06ac8fa0.js","811a6dcdaa230e36a5b7af08d9818d43"],["/js/main.d33921b78e5e06ac8fa0.js","4466ec306030fec0f3c1abd253174d4a"],["/js/modals.d33921b78e5e06ac8fa0.js","1f12dcb30dc72af876de61ae8930a3c5"],["/js/mt5.d33921b78e5e06ac8fa0.js","ccf0109c91a068adb29f1357b715b043"],["/js/notification-messages.d33921b78e5e06ac8fa0.js","2ed3ece0d93837ae69f5cbcedf368154"],["/js/push-notification.d33921b78e5e06ac8fa0.js","2a248a0d0c24a75a2cf8fe0fafec1a46"],["/js/reports.d33921b78e5e06ac8fa0.js","ebd1a741ff0acbf9ce61dfcf15d92e3c"],["/js/screen-small.d33921b78e5e06ac8fa0.js","6d687f5e9ae73640cbcc064f0c83e85e"],["/js/settings-chart.d33921b78e5e06ac8fa0.js","116a596275be9e7982be638cfbc19ecf"],["/js/settings-language.d33921b78e5e06ac8fa0.js","9784dc48188d81f5401ca509e80f01ce"],["/js/settings-theme.d33921b78e5e06ac8fa0.js","f4810dc8b43b977a74a3e801b3bfeb3e"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.d33921b78e5e06ac8fa0.js","f131f6703c26551cbd2b612b413fa105"],["/js/two-month-picker.d33921b78e5e06ac8fa0.js","0a6fdb7b906e966dc64330eeca68f76d"],["/js/vendors~smart_chart.d33921b78e5e06ac8fa0.js","65a201baf261f02060948c467dcd2794"],["/js/work-in-progress.d33921b78e5e06ac8fa0.js","96733c6d826fe831191c8d00f8a76fa6"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
var cacheName = 'sw-precache-v3-app-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, /\.\w{8}\./);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '/';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







