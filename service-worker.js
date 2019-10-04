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

var precacheConfig = [["/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/css/0.css","9b0f09994fa74a0d8432dc0201fa51c1"],["/css/AccountSignupModal.css","a30f9ea7503f584b9910a100dfdf8e5e"],["/css/account.css","0a3a5ac5495c8e95046c28cf0163c178"],["/css/app.css","e8d20088e6d316057a83e821f8448762"],["/css/default~modals~mt5.css","35914afade30258cfe95d2b07c22bcdf"],["/css/modals.css","26414ea9499779d47666f8e94ff53622"],["/css/mt5.css","28309f0f958f52c5b5e8ffc4620ad585"],["/css/notification-messages.css","6a0d670b1dfcacb96b7260efffc6a4f5"],["/css/reports.css","3f379e4798102173a5b10ebc4e400946"],["/css/screen-small.css","e9121bc9b28df9aaf8e5086d03205f6f"],["/css/settings-chart.css","1d871c9430edb2809600ace0624dcb12"],["/css/smartcharts.css","f96099649bff90fd60bf594c0fdc1e16"],["/css/work-in-progress.css","2ccd66d733ea55b1ab751c693e2a799e"],["/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/index.html","5354977ef7848939c1f220f54f67a6c7"],["/js/0.92a1642e41906e49b2fb.js","1dd5325211c7c4ff4194354d2c77b978"],["/js/1.92a1642e41906e49b2fb.js","7fd509b1a7dce7bad2023e8f453cecf0"],["/js/10.92a1642e41906e49b2fb.js","cf8c01090345108a64157185959a1d16"],["/js/11.92a1642e41906e49b2fb.js","65c21925c2ac638d147ad5790bd0f55c"],["/js/12.92a1642e41906e49b2fb.js","db687171b4f37f39c12349c278911cb3"],["/js/13.92a1642e41906e49b2fb.js","043647f1cbfacfcc679c18fce69764c1"],["/js/14.92a1642e41906e49b2fb.js","aaccd712505d34173f87d7e24f0842e4"],["/js/15.92a1642e41906e49b2fb.js","9bb837a646404a92427bd76251d40cd8"],["/js/16.92a1642e41906e49b2fb.js","9daf89b165b3ffaff3b64306c8e52c43"],["/js/17.92a1642e41906e49b2fb.js","cf8c0f4a3e1ef98039e4aa91789e1d33"],["/js/18.92a1642e41906e49b2fb.js","048617c66a494e2d848f803e23dbb9f8"],["/js/19.92a1642e41906e49b2fb.js","b309fdfc746b14e15c6ef27e295dbfae"],["/js/2.92a1642e41906e49b2fb.js","f00dff6ecaf9d675f80a17527740a838"],["/js/20.92a1642e41906e49b2fb.js","3518b547e68f61c3ab0a9f896123f590"],["/js/21.92a1642e41906e49b2fb.js","97806ad5490f4eb17ef7977dc0a01296"],["/js/22.92a1642e41906e49b2fb.js","70e36ec5c9bf813adabe209f5dae962a"],["/js/23.92a1642e41906e49b2fb.js","02720392c218718c9cdb089142b4acb7"],["/js/24.92a1642e41906e49b2fb.js","db7cfd516e380e6e9bc9ac881f7ef137"],["/js/25.92a1642e41906e49b2fb.js","6f3e5b272666cc91fd4d013a1232e355"],["/js/26.92a1642e41906e49b2fb.js","737db3541846a36d0b0f987e3e40ba6b"],["/js/27.92a1642e41906e49b2fb.js","bd886889b7e4b31b312916d53f8b8439"],["/js/28.92a1642e41906e49b2fb.js","82c4d1c6d4af472cca19615d60bf6eee"],["/js/29.92a1642e41906e49b2fb.js","7c24a07dd003fde78fa298a384697373"],["/js/3.92a1642e41906e49b2fb.js","4affb476c3423f0b132fd5b64b4df766"],["/js/30.92a1642e41906e49b2fb.js","3d2f5f2c357e805a5842f6b9910f9b54"],["/js/31.92a1642e41906e49b2fb.js","331b0efc5bee70702734295aebb67d3e"],["/js/32.92a1642e41906e49b2fb.js","b5d4cf1e37b0715b97018999655733e9"],["/js/33.92a1642e41906e49b2fb.js","fd8621c1ad12dfbf1bfda71c38767b25"],["/js/34.92a1642e41906e49b2fb.js","8c367939339cd44d07c9c68e667c4deb"],["/js/35.92a1642e41906e49b2fb.js","814a7a870ad373e325713c2423065b02"],["/js/36.92a1642e41906e49b2fb.js","87851fe516ec208a7f5bed5c8bb19097"],["/js/37.92a1642e41906e49b2fb.js","9c6c12b25a25b48de79cf0ecb2326c04"],["/js/38.92a1642e41906e49b2fb.js","3190b685f49c3ec5abead5bdfdd86390"],["/js/39.92a1642e41906e49b2fb.js","1009bef3c3919ff21ebf7b7101f91e85"],["/js/4.92a1642e41906e49b2fb.js","87e53110165383cd7c3e3ebff7ea988f"],["/js/40.92a1642e41906e49b2fb.js","1d3819d37cb98f2b9d609949639d72a6"],["/js/404.92a1642e41906e49b2fb.js","e700a5143aa1406aef271df781d15911"],["/js/41.92a1642e41906e49b2fb.js","6643112f87288026fa367bed06ec42c6"],["/js/42.92a1642e41906e49b2fb.js","36df6b7a843648165b4f621729c3b7b8"],["/js/43.92a1642e41906e49b2fb.js","bf6d85102023f285fdf97f1667d18207"],["/js/44.92a1642e41906e49b2fb.js","a5158a430757f4b48370b30e684a3cd2"],["/js/45.92a1642e41906e49b2fb.js","1f95db7c71097a780b956b9e44f011d5"],["/js/46.92a1642e41906e49b2fb.js","f7a2975b8dc0e65d8388e4ee705bac8e"],["/js/47.92a1642e41906e49b2fb.js","d4ff6a7f0c196e5cdd909f159d04b6d9"],["/js/48.92a1642e41906e49b2fb.js","4b92a0905a8317a23452f64fd2a02f33"],["/js/49.92a1642e41906e49b2fb.js","4f59b908c9c524e4e3322077227cc0c8"],["/js/5.92a1642e41906e49b2fb.js","6b426be68ca2ad808436e7684213df14"],["/js/50.92a1642e41906e49b2fb.js","765641b2daabe8d824eca0d5ad09a3f2"],["/js/51.92a1642e41906e49b2fb.js","04c3fa695f9ac8ee76e8f8e832a504cb"],["/js/52.92a1642e41906e49b2fb.js","874d8714ab3c8d8f6003eeead17ff4c0"],["/js/53.92a1642e41906e49b2fb.js","4c10fdccb3322ecb262a0fa88cde8557"],["/js/54.92a1642e41906e49b2fb.js","203265fb1c30d9128a35d2eeb223b383"],["/js/55.92a1642e41906e49b2fb.js","0bf1637fc1c2dcdadcd92f53169cceb7"],["/js/56.92a1642e41906e49b2fb.js","be0273dfaee5ed474670c99d37706d65"],["/js/57.92a1642e41906e49b2fb.js","5a917045ec759f27b654a17bda2aa9e3"],["/js/58.92a1642e41906e49b2fb.js","b9cfcd227011ea23c73a771bbfd5d675"],["/js/59.92a1642e41906e49b2fb.js","2f8d198917bab77b5ab948c0f4f2fbb3"],["/js/6.92a1642e41906e49b2fb.js","92a9e6e1024c466e15ac630e5956d12a"],["/js/60.92a1642e41906e49b2fb.js","7673092b24d386a665e33bbf872cb204"],["/js/61.92a1642e41906e49b2fb.js","ce735a8e573fe04ecf0fffeb712bd307"],["/js/62.92a1642e41906e49b2fb.js","5f0bb3d35e652ad691bfc4def29e8d32"],["/js/63.92a1642e41906e49b2fb.js","96dd243da939b7c0cbf91d595f3b24ee"],["/js/64.92a1642e41906e49b2fb.js","be35e4f90f0c0aa20e31b96bd15f2627"],["/js/65.92a1642e41906e49b2fb.js","3d582d048deeca9ed39c2d0ecaa97219"],["/js/66.92a1642e41906e49b2fb.js","364660cfbce808810f1146b3bbb08f45"],["/js/67.92a1642e41906e49b2fb.js","816bb19ef9299c7a1c4ab99f292c0da4"],["/js/68.92a1642e41906e49b2fb.js","b52df90ea9a1da733de0c7dc9609e5fc"],["/js/69.92a1642e41906e49b2fb.js","bc68ebebb2636fc4052ead4e9ffc8b44"],["/js/7.92a1642e41906e49b2fb.js","fd20fce8e052be541c873ea8d5f6965b"],["/js/70.92a1642e41906e49b2fb.js","8ee72071f59a3221e67ae7a644e9d72b"],["/js/71.92a1642e41906e49b2fb.js","7ee640362cf2c9e96e8d8599a4a7badf"],["/js/72.92a1642e41906e49b2fb.js","5ebc5eddc59cabfc671ffb8857bacc23"],["/js/73.92a1642e41906e49b2fb.js","c3fa9ace473697166ec8a251d5786ac1"],["/js/74.92a1642e41906e49b2fb.js","7821c912c7a1dcfb9fd57824bfb81865"],["/js/75.92a1642e41906e49b2fb.js","475b7389920775f2c2532bf33fcf1924"],["/js/76.92a1642e41906e49b2fb.js","b5f0752997c3f7caa4961745d7e2a2b0"],["/js/77.92a1642e41906e49b2fb.js","e4e559506e2bb513d2527c516b9181d8"],["/js/78.92a1642e41906e49b2fb.js","82cf23e36c3b7eeb796449c97ea59290"],["/js/79.92a1642e41906e49b2fb.js","be7ab8f37a56ef92972fdba3ac34d23d"],["/js/8.92a1642e41906e49b2fb.js","9cae0ce605309e2a00664f80d6ab9851"],["/js/80.92a1642e41906e49b2fb.js","56d85af61a84a8920535214841d0720b"],["/js/81.92a1642e41906e49b2fb.js","9ac3b4c4d540d8b60ad77bf9adf7c202"],["/js/82.92a1642e41906e49b2fb.js","f755dc1b4bd2c9ed6eb3fc523c022e49"],["/js/83.92a1642e41906e49b2fb.js","aae0020e94af4193a70da9e2832c59f7"],["/js/84.92a1642e41906e49b2fb.js","ba1eea20334c984ac5dfdfe8511cebeb"],["/js/85.92a1642e41906e49b2fb.js","4416403f7d7b18e33c3df0c65abaecf0"],["/js/86.92a1642e41906e49b2fb.js","93abb383ca8602145895210dc19ea333"],["/js/87.92a1642e41906e49b2fb.js","f73faba71655103a3692d3f9bf575262"],["/js/88.92a1642e41906e49b2fb.js","11fbf5246a3d1e4faf419ca66266e739"],["/js/89.92a1642e41906e49b2fb.js","ee5f888ad7c96915cecb7399ff9ec01b"],["/js/9.92a1642e41906e49b2fb.js","6c5af7f18122c90ae320e72f56af93a4"],["/js/90.92a1642e41906e49b2fb.js","4f358f3829b4534d60a3eefb93131b7f"],["/js/91.92a1642e41906e49b2fb.js","52cfa72844c9ab600dbf4945b53ed83e"],["/js/92.92a1642e41906e49b2fb.js","31f5e9aea7615f9b0d5959bbf45e98a6"],["/js/93.92a1642e41906e49b2fb.js","10369c9ab09de86707cac724d6edebe8"],["/js/94.92a1642e41906e49b2fb.js","5b30cf46e4e48aae934a9ce5268da4a2"],["/js/95.92a1642e41906e49b2fb.js","430faf912c87668dda9e04ccbfe582f6"],["/js/96.92a1642e41906e49b2fb.js","45607334d823761e535db4a3489cd5b2"],["/js/AccountSignupModal.92a1642e41906e49b2fb.js","cd8ff2fec2759974f60346b71e5367d4"],["/js/ResetPasswordModal.92a1642e41906e49b2fb.js","fab091719052a7e3bb26f5e4c7862965"],["/js/account-info.92a1642e41906e49b2fb.js","1d21467f60f88a5bc290c54cc8cbfe79"],["/js/account.92a1642e41906e49b2fb.js","68b534ba456ccdf477353e6dc2b2168a"],["/js/contract.92a1642e41906e49b2fb.js","236695fe26b30b007051b0fef40ede9f"],["/js/default~modals~mt5.92a1642e41906e49b2fb.js","beccb564a28091da1acec1e4d5d66577"],["/js/main.92a1642e41906e49b2fb.js","d0fabc6f27ea4df478194090fe0db993"],["/js/modals.92a1642e41906e49b2fb.js","344ad6089f4ad83db0fbe66f0aae5528"],["/js/mt5.92a1642e41906e49b2fb.js","c3db30256895c5a4f3f64e8cf653d4ba"],["/js/notification-messages.92a1642e41906e49b2fb.js","4e231e36581a2f962a60e5aa92f0a884"],["/js/push-notification.92a1642e41906e49b2fb.js","b33f5e24043874c1e24001b051a235b4"],["/js/reports.92a1642e41906e49b2fb.js","16803c123faa7db70c5251069cda3bac"],["/js/screen-small.92a1642e41906e49b2fb.js","4c5c071034777b3e145841bdcfe3a106"],["/js/settings-chart.92a1642e41906e49b2fb.js","c51ca68d77f181c4fcd39a01fb91ebe3"],["/js/settings-language.92a1642e41906e49b2fb.js","250611be9e85f73431ca6d8f94854bd9"],["/js/settings-theme.92a1642e41906e49b2fb.js","11f7f629236217f385a83df1027d2035"],["/js/smartcharts/chartiq-302ec2.smartcharts.js","885ab4d19a35ef179fe5df6dff271e82"],["/js/smartcharts/de-po-19b36a.smartcharts.js","93276add9f19a88a6abbd68beb85966b"],["/js/smartcharts/es-po-b9a6df.smartcharts.js","7bddc7b125daae2ef6d857918b4f6d86"],["/js/smartcharts/fr-po-dd5658.smartcharts.js","fb85f8bfc515f5029e5fc2cb41d6d231"],["/js/smartcharts/html2canvas-d83c30.smartcharts.js","57079e3ad10d2b8a6fd07d2fc8d3b03d"],["/js/smartcharts/id-po-d54e7d.smartcharts.js","fea611375ba01ede6bfbae7d244107f5"],["/js/smartcharts/it-po-5fbfc0.smartcharts.js","b695cb48dc6da8d4c3455533ca7245a6"],["/js/smartcharts/nl-po-a0b37e.smartcharts.js","b4d6e6a1de4da23f935fc0efb5d87577"],["/js/smartcharts/pl-po-92d503.smartcharts.js","ddf8904cd29f8658ed87fdeed29982da"],["/js/smartcharts/pt-po-1e3948.smartcharts.js","111b75d1bf89b71b5f4a9375447b56da"],["/js/smartcharts/ru-po-f66380.smartcharts.js","0ae3f1d3e2f64aacfe79f6edac2f664e"],["/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/js/smartcharts/th-po-dad07a.smartcharts.js","b69242075fd4d7dabe9d285938d7b729"],["/js/smartcharts/vendors~resize-observer-polyfill-f331bc.smartcharts.js","6d2364b12f8c4350ea65b61435de450d"],["/js/smartcharts/vi-po-680676.smartcharts.js","8e50f1de3e358ecf5a035b24ede0dcc8"],["/js/smartcharts/zh_cn-po-d1e9aa.smartcharts.js","a1c3abe7fa584136b67e033c12d8bb9c"],["/js/smartcharts/zh_tw-po-e26699.smartcharts.js","d72a8ad084ecc8184026fbd037b9d0a0"],["/js/toggle-menu-drawer.92a1642e41906e49b2fb.js","b96d764f8ff222b6bd9c13c22e9ceee6"],["/js/two-month-picker.92a1642e41906e49b2fb.js","623bfe43f00d2a261ca977e0349340d3"],["/js/vendors~smart_chart.92a1642e41906e49b2fb.js","a58a30b5dbef55da56d021d85c1fcdc9"],["/js/work-in-progress.92a1642e41906e49b2fb.js","7401e2bbca7f686dac2ab277839baed9"],["/manifest.json","bc36e536fc772555add791513f4697e1"],["/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/public/images/favicons/apple-touch-icon-114.png","effff3cb7c7aa7890a0f613252d40b8c"],["/public/images/favicons/apple-touch-icon-120.png","30ea8aae4db71e707571a615a1207462"],["/public/images/favicons/apple-touch-icon-144.png","1fbf7ddfba9aa060af026c6856ffec44"],["/public/images/favicons/apple-touch-icon-152.png","816388a881453a30d4c2b2711fa05e64"],["/public/images/favicons/apple-touch-icon-180.png","a8db9d4eb2e09a4357ecd6a87a1dd6d9"],["/public/images/favicons/apple-touch-icon-57.png","535f09e679b29d21c3c5b9d6447d2585"],["/public/images/favicons/apple-touch-icon-60.png","56a21b5a2b088cbcf26912c17061b612"],["/public/images/favicons/apple-touch-icon-72.png","6786ed4ef1e2e96e3d4edebc3be12fd5"],["/public/images/favicons/apple-touch-icon-76.png","796a1bbc9a1a6ebdf0a002af495f9233"],["/public/images/favicons/favicon-16.png","8cf977893d6011fc63021bb7ce461544"],["/public/images/favicons/favicon-160.png","45fe97d84d1923f3e05626ea79971262"],["/public/images/favicons/favicon-192.png","3975b58ec899147249328917c81a90f4"],["/public/images/favicons/favicon-32.png","5bf792f88750e72e5e5ed56fc96c6efb"],["/public/images/favicons/favicon-96.png","bbaa020b9ae1944f52a684c311edda66"],["/public/images/favicons/favicon.ico","e0543288c8157aeb3bdd984219c150ee"],["/robots.txt","6978a616c585d03cb5b542a891995efb"],["/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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







