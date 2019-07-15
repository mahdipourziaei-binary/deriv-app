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

var precacheConfig = [["/br_env-test/404.html","8483487e5b8462268ba74f7305dc240c"],["/br_env-test/css/app.css","aff50d82b39acafb0cb299d115ec840b"],["/br_env-test/css/smartcharts.css","7abed6df084ad8422da0067ff98caa8c"],["/br_env-test/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_env-test/index.html","0dbc29c2c5f66eb071568056dc1b138a"],["/br_env-test/js/0.5352181001424036d10d.js","267eb0c09097b50dcf7b77b0aab658fd"],["/br_env-test/js/1.5352181001424036d10d.js","dc774492c423b5d534c2348255c955b3"],["/br_env-test/js/10.5352181001424036d10d.js","ebf0445b44d6c72d842a58ce7ea890e5"],["/br_env-test/js/11.5352181001424036d10d.js","2962c41c8508f6bbf581d673f0ddd1d1"],["/br_env-test/js/12.5352181001424036d10d.js","b7bc27ecc778a43711b90590bc1882bb"],["/br_env-test/js/13.5352181001424036d10d.js","563d5530cfd34ccc7e947512a420cacd"],["/br_env-test/js/14.5352181001424036d10d.js","bd40630a8321f22b8957ede550b0ec61"],["/br_env-test/js/15.5352181001424036d10d.js","06c0e4a9e3d1e4916aa880f768fdfc6c"],["/br_env-test/js/16.5352181001424036d10d.js","8709555047379155b0c44183f2211cb2"],["/br_env-test/js/17.5352181001424036d10d.js","b1b12440353f8438d4aab202faf5052e"],["/br_env-test/js/18.5352181001424036d10d.js","7a6fcd44adf202aa23c13e2279305898"],["/br_env-test/js/19.5352181001424036d10d.js","5e81ba0608c9fd22d1f625d5a3206fc5"],["/br_env-test/js/2.5352181001424036d10d.js","4481086795bdfb889c3ab4c113f98356"],["/br_env-test/js/20.5352181001424036d10d.js","189051aad81df24fc0e96634da87b9de"],["/br_env-test/js/21.5352181001424036d10d.js","87db613e5eede4409c25a2ff9139c0a0"],["/br_env-test/js/22.5352181001424036d10d.js","55e1904b364f6b9c28020bddcc450bfd"],["/br_env-test/js/23.5352181001424036d10d.js","abd5a5c0897bba337beca7c9cda0c59b"],["/br_env-test/js/24.5352181001424036d10d.js","6946c10b016e575d8f4f953c2857e745"],["/br_env-test/js/25.5352181001424036d10d.js","6ee79c4f0ec6fc206c182fda4d5f8bff"],["/br_env-test/js/26.5352181001424036d10d.js","92f924e20165f51e53d133863935b3ce"],["/br_env-test/js/27.5352181001424036d10d.js","86e42f05948bd1b3674bcf4a7955ccd1"],["/br_env-test/js/28.5352181001424036d10d.js","eac3945e1e24f4308af7d6815489da46"],["/br_env-test/js/29.5352181001424036d10d.js","b256dcb181fd8bdc2e5b97618deff88a"],["/br_env-test/js/3.5352181001424036d10d.js","f56849e2bf86b56ef2b72f7a5f114400"],["/br_env-test/js/30.5352181001424036d10d.js","8738aa602b16a304f2915fd56facdea2"],["/br_env-test/js/31.5352181001424036d10d.js","44e815584e9dfcc14e784917b0bc77f6"],["/br_env-test/js/32.5352181001424036d10d.js","d4161df902b745061592407cedc39fc1"],["/br_env-test/js/33.5352181001424036d10d.js","e4e291471d42804be11f3a513c7d856c"],["/br_env-test/js/34.5352181001424036d10d.js","ae9db30ed7e4dd51f7a308a1998c28df"],["/br_env-test/js/35.5352181001424036d10d.js","e63dbb55fe9a8a95c9b1da711dc54858"],["/br_env-test/js/36.5352181001424036d10d.js","e1f1f6d5ca36eb41232ee1a16af700dc"],["/br_env-test/js/37.5352181001424036d10d.js","531b61a8fb0211cce123333bd486923b"],["/br_env-test/js/38.5352181001424036d10d.js","4481ad0006527899db2f15fc70cdea5e"],["/br_env-test/js/39.5352181001424036d10d.js","9bdb4b580725f34b47c27b45b3447131"],["/br_env-test/js/4.5352181001424036d10d.js","6434749c13763e6f27f91a5b6cf1ba71"],["/br_env-test/js/40.5352181001424036d10d.js","cf8e96cfd90ac5d7710331c1047fda20"],["/br_env-test/js/404.5352181001424036d10d.js","f231c92209113a11becb2dabae40c954"],["/br_env-test/js/41.5352181001424036d10d.js","96db2ffef460600c2aa8197a9a609575"],["/br_env-test/js/42.5352181001424036d10d.js","c2e4b851ac0640fb3c15d58d4b6913e7"],["/br_env-test/js/43.5352181001424036d10d.js","6fd189c6138e268d75c74e8249f7c34e"],["/br_env-test/js/44.5352181001424036d10d.js","e2990558fda514f6c9201f21fd4b05ab"],["/br_env-test/js/45.5352181001424036d10d.js","6839e0ae7c8d290f2224cabb0decaad5"],["/br_env-test/js/46.5352181001424036d10d.js","5a3ef7631c21599fc2d0d9b873134b4d"],["/br_env-test/js/47.5352181001424036d10d.js","d63afb4a76451244d09e474f9a978ff7"],["/br_env-test/js/48.5352181001424036d10d.js","9acc3adaa3dab42c95b31ba82e18948c"],["/br_env-test/js/49.5352181001424036d10d.js","cca2a7b72bd7125da42fc1bf48d12343"],["/br_env-test/js/5.5352181001424036d10d.js","2058884e2a074fd29862f9829f79bcc7"],["/br_env-test/js/50.5352181001424036d10d.js","0d03f2412964ac5b466c0a78836d4b20"],["/br_env-test/js/51.5352181001424036d10d.js","ba3c1e98cf9ae98f298860ea83075c16"],["/br_env-test/js/52.5352181001424036d10d.js","8c718eb46199afc5318e6a2dd0764c8f"],["/br_env-test/js/53.5352181001424036d10d.js","9b7e1fd8351d7423a647ae05ee61ea11"],["/br_env-test/js/54.5352181001424036d10d.js","992983d8c67d6f49e0ea55622fde4285"],["/br_env-test/js/55.5352181001424036d10d.js","52b241726d01a03f6ec364769df47c04"],["/br_env-test/js/56.5352181001424036d10d.js","833a796e3620da69086f30c830fa011b"],["/br_env-test/js/57.5352181001424036d10d.js","521247d747372cdc3126381780547c96"],["/br_env-test/js/58.5352181001424036d10d.js","9815d74bd004c0d9c965ed4b47e56dde"],["/br_env-test/js/59.5352181001424036d10d.js","8e0afc741621cd1f525a409ef3ab03d7"],["/br_env-test/js/6.5352181001424036d10d.js","c8f695af5bdfdfd90d1cd0e0d5709f20"],["/br_env-test/js/60.5352181001424036d10d.js","4f9aa4d751b4872303c5bbaa59dd6d1f"],["/br_env-test/js/61.5352181001424036d10d.js","caa7ed329dc76e1ea75272c8eb9579ca"],["/br_env-test/js/62.5352181001424036d10d.js","b426667957450509c9dc819fe6d5f32d"],["/br_env-test/js/63.5352181001424036d10d.js","79f33202ae8c4498bdffd054394daeb3"],["/br_env-test/js/64.5352181001424036d10d.js","b6d5d70e35c5b672d0565ca4a57e853a"],["/br_env-test/js/65.5352181001424036d10d.js","36e893455bf439845ddd80f7c8d9d397"],["/br_env-test/js/66.5352181001424036d10d.js","305cbed99c89e07a71710c16ae3de1ed"],["/br_env-test/js/67.5352181001424036d10d.js","cb365bc9c7f0eb155111680bf3437ac5"],["/br_env-test/js/68.5352181001424036d10d.js","b396c78f68fffc3679f73e92aba51107"],["/br_env-test/js/69.5352181001424036d10d.js","1f93939cab85ea82775009e0dc12138a"],["/br_env-test/js/7.5352181001424036d10d.js","39257d67032a15b704f72c934796f1bf"],["/br_env-test/js/8.5352181001424036d10d.js","2ea4d6d01a5942c4110258b3ddcf482a"],["/br_env-test/js/9.5352181001424036d10d.js","6ef83c051bf09644b3341c60d18df1df"],["/br_env-test/js/contract.5352181001424036d10d.js","fa984cba979cf7d7fc72d961421d3ea0"],["/br_env-test/js/main.5352181001424036d10d.js","7786c167b156526d00f9662741788ea5"],["/br_env-test/js/open_positions.5352181001424036d10d.js","53cdadd759c2aab2623389260a690e76"],["/br_env-test/js/open_positions~profit_table~statement.5352181001424036d10d.js","87d1ddba6a08289fee78a58cafc3b3d1"],["/br_env-test/js/profit_table.5352181001424036d10d.js","e518d19d59ffc8d97f2667d73be40fb8"],["/br_env-test/js/reports.5352181001424036d10d.js","1895d1fb4e5d86b589dde8b60d7c02b1"],["/br_env-test/js/smart_chart.5352181001424036d10d.js","6a2c6922dce69e72f99eb0d44ae6e6c0"],["/br_env-test/js/smartcharts/chartiq-a0bb2d.smartcharts.js","2859b5a06eb9379a6f1065b51efa81cc"],["/br_env-test/js/smartcharts/de-po-e522d0.smartcharts.js","7f153fed6e754e5a79ba509ccf85a4d8"],["/br_env-test/js/smartcharts/es-po-61430e.smartcharts.js","905b4e1ee7aac1c8b66133646b36954e"],["/br_env-test/js/smartcharts/fr-po-1555a4.smartcharts.js","7cc9c589cadea98aa382c136476627bd"],["/br_env-test/js/smartcharts/html2canvas-c78ff1.smartcharts.js","0ae4bc6f8fe8997549df280580c85bb8"],["/br_env-test/js/smartcharts/id-po-3cdbc8.smartcharts.js","b91c4ac925120746c6544fc17d073c31"],["/br_env-test/js/smartcharts/it-po-edf79d.smartcharts.js","2aad8d954ae4ae0f031459903d8782dc"],["/br_env-test/js/smartcharts/nl-po-6d1e52.smartcharts.js","60827db65225ff31f00b53d263f4edfe"],["/br_env-test/js/smartcharts/pl-po-c7f985.smartcharts.js","ca2d20798ea5ef8d8c32b81a54fd703b"],["/br_env-test/js/smartcharts/pt-po-aaec6f.smartcharts.js","783407adcfa8b46016d2dc8b2be39a66"],["/br_env-test/js/smartcharts/ru-po-9f0c5d.smartcharts.js","18edfe06c994d4cde84cd293d504dd3e"],["/br_env-test/js/smartcharts/sprite-606f3c.smartcharts.svg","e15866a8a21c2a2c9fb2816bd9bcd937"],["/br_env-test/js/smartcharts/th-po-650f93.smartcharts.js","c784d0a255058385b73b59e504c81b33"],["/br_env-test/js/smartcharts/vendors~resize-observer-polyfill-f202e8.smartcharts.js","b52a4ce9f52de8dd42942dc15164c867"],["/br_env-test/js/smartcharts/vi-po-4c86cc.smartcharts.js","ee995e5408a03f53f5c880f6a251ce46"],["/br_env-test/js/smartcharts/zh_cn-po-ba46f0.smartcharts.js","9cda59ab320fd2969f3905d1f6e5e80c"],["/br_env-test/js/smartcharts/zh_tw-po-b78185.smartcharts.js","5a312bed6c388379da77ca71554631f8"],["/br_env-test/js/statement.5352181001424036d10d.js","3ee373a7bf665d8c0f097b2ec2fe2741"],["/br_env-test/js/vendors~open_positions~profit_table~statement.5352181001424036d10d.js","24d22e155c989d62300f0ba4e6357f0c"],["/br_env-test/js/vendors~smart_chart.5352181001424036d10d.js","e72b66be68637a199d6a41cc0f28936f"],["/br_env-test/manifest.json","dab2603fa9e3fa2c4daa551e0a6e5731"],["/br_env-test/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_env-test/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_env-test/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_env-test/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_env-test/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_env-test/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_env-test/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_env-test/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_env-test/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_env-test/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_env-test/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_env-test/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_env-test/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_env-test/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_env-test/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_env-test/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_env-test/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_env-test/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_env-test/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_env-test/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_env-test/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_env-test/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_env-test/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_env-test/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_env-test/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_env-test/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_env-test/';
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







