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

var precacheConfig = [["/br_move-label-component/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_move-label-component/css/AccountSignupModal.css","52fe17b8d8c79b4b047b30e89b927764"],["/br_move-label-component/css/app.css","9e4483b9b71194d2c8b4d13d87d5f48f"],["/br_move-label-component/css/default~open_position~1833eefb.css","5e23755b9a7a74d795bf8d1ad9bc408f"],["/br_move-label-component/css/digits.css","1419ea07bf9c9264cb142ce95d47171a"],["/br_move-label-component/css/modals.css","a3ada3ef9ab9912f1f3b17ded2c4fdb2"],["/br_move-label-component/css/notification-messages.css","30c5f2d725b0ba1d8d70246ac9d6f545"],["/br_move-label-component/css/reports.css","091287a748a6c548cd24ba11b3742b29"],["/br_move-label-component/css/screen-small.css","bf00b73794f7526c5c4ac49b7472ae83"],["/br_move-label-component/css/smartcharts.css","ad5eeb1c115f04f4fe4136058ed9970c"],["/br_move-label-component/css/work-in-progress.css","124f574d47a7d3d3f72c38068dc644ff"],["/br_move-label-component/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_move-label-component/index.html","0c45d534e7a55f6d3a4752ab04280daf"],["/br_move-label-component/js/0.b05ff42739f27e0b0717.js","4956cbaf28887aee84c04a709e91e00d"],["/br_move-label-component/js/1.b05ff42739f27e0b0717.js","726b25870355687032ce25a0a1f01bf9"],["/br_move-label-component/js/10.b05ff42739f27e0b0717.js","9e97436b5b14888ed0a56947287f4545"],["/br_move-label-component/js/11.b05ff42739f27e0b0717.js","51dd7742dc3a721aae10fcbb5c191822"],["/br_move-label-component/js/12.b05ff42739f27e0b0717.js","401d05056a3b75285a96437f3f95ff2e"],["/br_move-label-component/js/13.b05ff42739f27e0b0717.js","c5420e95eb9b40c53688b30f75c341c1"],["/br_move-label-component/js/14.b05ff42739f27e0b0717.js","3b1ec33417d1044cea2cb87ed8a40966"],["/br_move-label-component/js/15.b05ff42739f27e0b0717.js","3dd0ff18bbafb859ff367f3c6d8f6e73"],["/br_move-label-component/js/16.b05ff42739f27e0b0717.js","c5474ee272401cea9cf515dbbac0631c"],["/br_move-label-component/js/17.b05ff42739f27e0b0717.js","3ac1880a57fcac928cadc7d4bda90088"],["/br_move-label-component/js/18.b05ff42739f27e0b0717.js","c81e7984c57978eace3bd141c340fc40"],["/br_move-label-component/js/19.b05ff42739f27e0b0717.js","df1fdc7b5ed2d4dcbbb3a8b3b7454e08"],["/br_move-label-component/js/2.b05ff42739f27e0b0717.js","2eef9495e640780c8a64851db0dcd596"],["/br_move-label-component/js/20.b05ff42739f27e0b0717.js","e51b67daa71869b50b5030bd88d53e7b"],["/br_move-label-component/js/21.b05ff42739f27e0b0717.js","15b2649966b1b9f3fa0b83e328fe521a"],["/br_move-label-component/js/22.b05ff42739f27e0b0717.js","e2b0dfd7d095c26cd6ca27d0416088c1"],["/br_move-label-component/js/23.b05ff42739f27e0b0717.js","d52049fe2eec8bd26fd20b22f8b41b0d"],["/br_move-label-component/js/24.b05ff42739f27e0b0717.js","2ed653d7dd655900c3e9b493d5d84b9a"],["/br_move-label-component/js/25.b05ff42739f27e0b0717.js","e6f98d10060020a9ba499b020527e884"],["/br_move-label-component/js/26.b05ff42739f27e0b0717.js","e823603d6fc68e8451f4083f98eea93f"],["/br_move-label-component/js/27.b05ff42739f27e0b0717.js","5a978d50a5615f3e586cfc6aa3385cb4"],["/br_move-label-component/js/28.b05ff42739f27e0b0717.js","da2ae07d720cc1ee960772c5d0d89100"],["/br_move-label-component/js/29.b05ff42739f27e0b0717.js","f57589670f7595ad113fa3516381ec08"],["/br_move-label-component/js/3.b05ff42739f27e0b0717.js","5df83b835f4011cf6c6afc5a2d0c4b80"],["/br_move-label-component/js/30.b05ff42739f27e0b0717.js","fb68f3a0d4e200c49355d59b79321c69"],["/br_move-label-component/js/31.b05ff42739f27e0b0717.js","37a74eb2d92096efd165c4dbdb768db1"],["/br_move-label-component/js/32.b05ff42739f27e0b0717.js","3116e3c6ba915228380949862421b743"],["/br_move-label-component/js/33.b05ff42739f27e0b0717.js","b4532d41abcb8b5fec5c0388d4fb2518"],["/br_move-label-component/js/34.b05ff42739f27e0b0717.js","174748536a49f1b294dda9cdb186e909"],["/br_move-label-component/js/35.b05ff42739f27e0b0717.js","d648b1c92ddc3a5caac4d615b06767d7"],["/br_move-label-component/js/36.b05ff42739f27e0b0717.js","9a64e752cb6b84b713c4de8a54e59dca"],["/br_move-label-component/js/37.b05ff42739f27e0b0717.js","c70041967020f57a0339917c2ccf88e3"],["/br_move-label-component/js/38.b05ff42739f27e0b0717.js","9351ef48f280e4623c60243373297c86"],["/br_move-label-component/js/39.b05ff42739f27e0b0717.js","a380d83af60a67a7aef951d57912189d"],["/br_move-label-component/js/4.b05ff42739f27e0b0717.js","d0dc816541e4abc875fdb19e64b63401"],["/br_move-label-component/js/40.b05ff42739f27e0b0717.js","06d0f6c17dcad7a49e8d704e54a52511"],["/br_move-label-component/js/404.b05ff42739f27e0b0717.js","ca5281933b55050f1db3597901152b0c"],["/br_move-label-component/js/41.b05ff42739f27e0b0717.js","8e041d3e938b643d04ae86561afcbbba"],["/br_move-label-component/js/42.b05ff42739f27e0b0717.js","e518d257246934b67add04db53985674"],["/br_move-label-component/js/43.b05ff42739f27e0b0717.js","0413b9df40858a8667228209945e6d2f"],["/br_move-label-component/js/44.b05ff42739f27e0b0717.js","800526eb846b195acc8860075bd589f5"],["/br_move-label-component/js/45.b05ff42739f27e0b0717.js","24c2501c3a436c46578e8317ff713f9d"],["/br_move-label-component/js/46.b05ff42739f27e0b0717.js","50604cf6395a15688a9dcc8eac9e1557"],["/br_move-label-component/js/47.b05ff42739f27e0b0717.js","37f44130def3c5843af540e33c3658d4"],["/br_move-label-component/js/48.b05ff42739f27e0b0717.js","ce7b5db134f6266744c88ab99b8c968c"],["/br_move-label-component/js/49.b05ff42739f27e0b0717.js","25bd3b51afd1e4ec3e2736387e573175"],["/br_move-label-component/js/5.b05ff42739f27e0b0717.js","a92cb71653a3521487de91a03fee2c6d"],["/br_move-label-component/js/50.b05ff42739f27e0b0717.js","16a652072ae9f7f05e39fbf0765e23b1"],["/br_move-label-component/js/51.b05ff42739f27e0b0717.js","74d3198ce4e9cf70989e012429f6b92f"],["/br_move-label-component/js/52.b05ff42739f27e0b0717.js","f35aba92d4a5acdea3958e9d8e403ff0"],["/br_move-label-component/js/53.b05ff42739f27e0b0717.js","f3dabddff3f232ac64a90e74e345f9aa"],["/br_move-label-component/js/54.b05ff42739f27e0b0717.js","6b3f6e4c05cf3d8b02872122bed11e11"],["/br_move-label-component/js/55.b05ff42739f27e0b0717.js","fe24f0cd7599e83f6ae5f3026e367521"],["/br_move-label-component/js/56.b05ff42739f27e0b0717.js","6a21e74fe873962429aa8f5c76798620"],["/br_move-label-component/js/57.b05ff42739f27e0b0717.js","0a7d66ce5a262a4d926f61a2f5978887"],["/br_move-label-component/js/58.b05ff42739f27e0b0717.js","ae008bf921c94003309d64563577dc2c"],["/br_move-label-component/js/59.b05ff42739f27e0b0717.js","f9a07704a5533b6a963a65af36507f25"],["/br_move-label-component/js/6.b05ff42739f27e0b0717.js","fd4f12ab9f1981b6f9ec2d9b93221edf"],["/br_move-label-component/js/60.b05ff42739f27e0b0717.js","d03a477351be1f933e153846394a5c19"],["/br_move-label-component/js/61.b05ff42739f27e0b0717.js","63fb706c5277fd7d9fa3905dddc39c21"],["/br_move-label-component/js/62.b05ff42739f27e0b0717.js","35831529daa3fc405ce6742779714d1d"],["/br_move-label-component/js/63.b05ff42739f27e0b0717.js","cf2ea46263ab4e43a90deb6664267d4a"],["/br_move-label-component/js/64.b05ff42739f27e0b0717.js","78f1d71afb854ca3c93dcc4e3ba68302"],["/br_move-label-component/js/65.b05ff42739f27e0b0717.js","9494d0ccfe6e284007ab6bfd43b5febb"],["/br_move-label-component/js/66.b05ff42739f27e0b0717.js","d5952e20d2e243f36779799725e97879"],["/br_move-label-component/js/67.b05ff42739f27e0b0717.js","ba41f1b25908ba4fa2c8a20fe873bb32"],["/br_move-label-component/js/68.b05ff42739f27e0b0717.js","6b09cb12be489074e4f63d7986d4c9a9"],["/br_move-label-component/js/69.b05ff42739f27e0b0717.js","66f0be3c35b9ab9b610abc65dbe04633"],["/br_move-label-component/js/7.b05ff42739f27e0b0717.js","9f0cd5b7016afec896be6de947843ef2"],["/br_move-label-component/js/70.b05ff42739f27e0b0717.js","8e415de5e612ff27718e850e03526c71"],["/br_move-label-component/js/71.b05ff42739f27e0b0717.js","11e9fbaf9fde53a3e84831b83fd0e776"],["/br_move-label-component/js/8.b05ff42739f27e0b0717.js","1f3603e02b356cd8b1534bc3ff1e4dcd"],["/br_move-label-component/js/9.b05ff42739f27e0b0717.js","db1f3093fe1ddb3ab845e7ae18b276cb"],["/br_move-label-component/js/AccountSignupModal.b05ff42739f27e0b0717.js","c24fecd92ebda92fa74836f3a63e145d"],["/br_move-label-component/js/account-info.b05ff42739f27e0b0717.js","1223539cde1d941cab393a54cfd5dbc3"],["/br_move-label-component/js/contract.b05ff42739f27e0b0717.js","dea42da8b6676f32b45d79c68020083e"],["/br_move-label-component/js/default~open_position~1833eefb.b05ff42739f27e0b0717.js","836fc944edc11e620097f8f6d9d52901"],["/br_move-label-component/js/digits.b05ff42739f27e0b0717.js","8d5aa5b7a3103f8e1109e74eff2b583d"],["/br_move-label-component/js/info-box.b05ff42739f27e0b0717.js","52c19ec2458757ee57ad44c0e4109aaf"],["/br_move-label-component/js/modals.b05ff42739f27e0b0717.js","26be5b4c33c9e448b22bc575d382e8e8"],["/br_move-label-component/js/notification-messages.b05ff42739f27e0b0717.js","ff0495e2bc1da099ba910ed3573ce89a"],["/br_move-label-component/js/open_positions.b05ff42739f27e0b0717.js","8e6f5509270ada881ab8d4f77fbec67e"],["/br_move-label-component/js/profit_table.b05ff42739f27e0b0717.js","e6b8370649a66b9c588692b13ca96d78"],["/br_move-label-component/js/push-notification.b05ff42739f27e0b0717.js","069720dcabdd5f8a661c41a03d84821a"],["/br_move-label-component/js/reports.b05ff42739f27e0b0717.js","9e284d3a327674a5cac317dce31b14a5"],["/br_move-label-component/js/screen-small.b05ff42739f27e0b0717.js","991db1d8086826e831caac75e3a70a38"],["/br_move-label-component/js/settings-chart.b05ff42739f27e0b0717.js","e2ed552a8b083dd498889c798e67fc6f"],["/br_move-label-component/js/settings-language.b05ff42739f27e0b0717.js","4687cf19f9b1a1aac4a88211193aae6a"],["/br_move-label-component/js/settings-theme.b05ff42739f27e0b0717.js","6817ae0be2dbc72ed88476378f4844ec"],["/br_move-label-component/js/smart_chart.b05ff42739f27e0b0717.js","773a2c46f35e8c053210b930875f3edc"],["/br_move-label-component/js/smartcharts/chartiq-62df45.smartcharts.js","627c1a573f422d8552b134f56919c465"],["/br_move-label-component/js/smartcharts/de-po-85a3a1.smartcharts.js","54c9b988c91436d79f66c0bffdf4f512"],["/br_move-label-component/js/smartcharts/es-po-287910.smartcharts.js","8887bfb6e0dd5e186b69103af852f5c8"],["/br_move-label-component/js/smartcharts/fr-po-f63092.smartcharts.js","9450d3e0a2c66a018633c7d7f16b2e05"],["/br_move-label-component/js/smartcharts/html2canvas-170a5f.smartcharts.js","fe74957b81282a01ec3feb2b8f15898d"],["/br_move-label-component/js/smartcharts/id-po-a507b0.smartcharts.js","7ff3fe44d4e49aabfee8b8763fd40de4"],["/br_move-label-component/js/smartcharts/it-po-d7f7d0.smartcharts.js","ca570055c74039c2b0611a960d63601a"],["/br_move-label-component/js/smartcharts/nl-po-9c2797.smartcharts.js","9d25eb1e8882bd16fab0fd06b51879e6"],["/br_move-label-component/js/smartcharts/pl-po-6a29bf.smartcharts.js","b8c83ad42f7939389132215c6517efc9"],["/br_move-label-component/js/smartcharts/pt-po-442261.smartcharts.js","782f439c0b123480b0a3333fcc639a38"],["/br_move-label-component/js/smartcharts/ru-po-fd5d55.smartcharts.js","7914f91ce2882a44b960378ecbc1597a"],["/br_move-label-component/js/smartcharts/sprite-b53c32.smartcharts.svg","69044fe17e0e4dfa0983c39721eaf391"],["/br_move-label-component/js/smartcharts/th-po-b1f54e.smartcharts.js","ff0f350120fcbaa4391e7b658004fd6f"],["/br_move-label-component/js/smartcharts/vendors~resize-observer-polyfill-74e819.smartcharts.js","1dccd581fde32ec59f11cf05c9677f89"],["/br_move-label-component/js/smartcharts/vi-po-c8209f.smartcharts.js","19e73bf9ff36d527787d7134f783ecbf"],["/br_move-label-component/js/smartcharts/zh_cn-po-34629d.smartcharts.js","1ca5d22285816a6a8962e98eed154083"],["/br_move-label-component/js/smartcharts/zh_tw-po-0b1925.smartcharts.js","7d047c400e3f327c1da0c19ea0cfb42a"],["/br_move-label-component/js/statement.b05ff42739f27e0b0717.js","cea23e4ccb5e624f1ae60b47f0fec176"],["/br_move-label-component/js/toggle-menu-drawer.b05ff42739f27e0b0717.js","b109481162363a3f5a230085837f18ef"],["/br_move-label-component/js/two-month-picker.b05ff42739f27e0b0717.js","63486b7b1fbd5456013ef102bd77024a"],["/br_move-label-component/js/vendors~AccountSignupModal.b05ff42739f27e0b0717.js","dda46395702e26d99434424179e27485"],["/br_move-label-component/js/vendors~open_position~7c650be5.b05ff42739f27e0b0717.js","35e9a0b928d379da3420c5b85c32e316"],["/br_move-label-component/js/vendors~smart_chart.b05ff42739f27e0b0717.js","98ea17222e4e0f80f27e2bbb796f3ff6"],["/br_move-label-component/js/work-in-progress.b05ff42739f27e0b0717.js","622cb77066976cada48a89ea0e701c5f"],["/br_move-label-component/manifest.json","cfd99fc08f0406fd5d9c0d85e06d2835"],["/br_move-label-component/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_move-label-component/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_move-label-component/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_move-label-component/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_move-label-component/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_move-label-component/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_move-label-component/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_move-label-component/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_move-label-component/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_move-label-component/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_move-label-component/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_move-label-component/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_move-label-component/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_move-label-component/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_move-label-component/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_move-label-component/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_move-label-component/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_move-label-component/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_move-label-component/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_move-label-component/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_move-label-component/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_move-label-component/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_move-label-component/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_move-label-component/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_move-label-component/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_move-label-component/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_move-label-component/';
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







