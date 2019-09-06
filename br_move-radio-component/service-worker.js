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

var precacheConfig = [["/br_move-radio-component/404.html","371e1cb54c1792d5e32e0b6cd8834d03"],["/br_move-radio-component/css/AccountSignupModal.css","e259d4fe9a325a23d5ca5119b01d2c6c"],["/br_move-radio-component/css/app.css","1e8812af835029986877613a627aa29b"],["/br_move-radio-component/css/default~open_position~1833eefb.css","68f0f941424072a8839005fae754ea56"],["/br_move-radio-component/css/digits.css","8e0c3639dc5d97daf805bd355f6bd61f"],["/br_move-radio-component/css/modals.css","62e97c98c849dfaad877a710a7c06350"],["/br_move-radio-component/css/notification-messages.css","3a4c941d74380bc59f328d97d3d5a29f"],["/br_move-radio-component/css/reports.css","dec2ce4997d7a792e672d40a818d6361"],["/br_move-radio-component/css/screen-small.css","6ef029a4ce7a534a440630f047658efb"],["/br_move-radio-component/css/settings-chart.css","b4fa1120fcb488bd004d422e6339828c"],["/br_move-radio-component/css/smartcharts.css","abc265e8f0847879f0a2e3e35cdfa641"],["/br_move-radio-component/css/work-in-progress.css","d50fe922cdf426bafc8e8f12c106e137"],["/br_move-radio-component/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_move-radio-component/index.html","11ff12792a2d77f39ace97a84eb9360c"],["/br_move-radio-component/js/0.140d00da06f8f6e50b62.js","d8b9079dcad29812a4e0b65db3a8c89b"],["/br_move-radio-component/js/1.140d00da06f8f6e50b62.js","d5b227514040f9243fd1bd65d8f4d25e"],["/br_move-radio-component/js/10.140d00da06f8f6e50b62.js","8958a5efde16b9f3f03c90d7b9d37d17"],["/br_move-radio-component/js/11.140d00da06f8f6e50b62.js","acce189eda79f6b5736a40eb6d8d5f98"],["/br_move-radio-component/js/12.140d00da06f8f6e50b62.js","ee44b731f6900e7ccc73f242ed3e4e4d"],["/br_move-radio-component/js/13.140d00da06f8f6e50b62.js","9c695dc05e918c1008404ce725e60481"],["/br_move-radio-component/js/14.140d00da06f8f6e50b62.js","33d37032119f2e4b992b830fccf6ad82"],["/br_move-radio-component/js/15.140d00da06f8f6e50b62.js","76f05dd99abd1229f89a7c1102ff1826"],["/br_move-radio-component/js/16.140d00da06f8f6e50b62.js","3ce63fe42b93882ce2659e02f448ca85"],["/br_move-radio-component/js/17.140d00da06f8f6e50b62.js","541fec0c7f5a4d4492ec9fe514d8008c"],["/br_move-radio-component/js/18.140d00da06f8f6e50b62.js","dd8bf65cf65f347bc489481aa016c50b"],["/br_move-radio-component/js/19.140d00da06f8f6e50b62.js","f862d72135432a24aa9f6db89b09f8ca"],["/br_move-radio-component/js/2.140d00da06f8f6e50b62.js","d6729726c1d4fbfdfd85b12620e52515"],["/br_move-radio-component/js/20.140d00da06f8f6e50b62.js","6beafd2bb872be804374f949ee93236e"],["/br_move-radio-component/js/21.140d00da06f8f6e50b62.js","a516ce3bf4dd2e992b57b05ca48e9681"],["/br_move-radio-component/js/22.140d00da06f8f6e50b62.js","f21a445b04c6d32143971884813f9ed2"],["/br_move-radio-component/js/23.140d00da06f8f6e50b62.js","fb701e8ee187912d8e43a156650121c6"],["/br_move-radio-component/js/24.140d00da06f8f6e50b62.js","1d5a076c696dfaa892725e6772a0b1be"],["/br_move-radio-component/js/25.140d00da06f8f6e50b62.js","d9359481e4d6ddb7252368d547a719c6"],["/br_move-radio-component/js/26.140d00da06f8f6e50b62.js","9b49a6abba358e476f6f8ac3398671eb"],["/br_move-radio-component/js/27.140d00da06f8f6e50b62.js","0796b7ea70934eae1b486b5aa13ab069"],["/br_move-radio-component/js/28.140d00da06f8f6e50b62.js","adbf510614c224b14cba70eb3f11af18"],["/br_move-radio-component/js/29.140d00da06f8f6e50b62.js","e43c7a4490f162eb809140b75e67173f"],["/br_move-radio-component/js/3.140d00da06f8f6e50b62.js","e46b170f7047561d1c538c38480fa04e"],["/br_move-radio-component/js/30.140d00da06f8f6e50b62.js","26205c97d5c89455c76279e0bb08de4d"],["/br_move-radio-component/js/31.140d00da06f8f6e50b62.js","0a3cd04996ff8848287f2ec09d20e50c"],["/br_move-radio-component/js/32.140d00da06f8f6e50b62.js","88fa3864e4483588bb6f9a99180218ca"],["/br_move-radio-component/js/33.140d00da06f8f6e50b62.js","429dbf00261d1eb49a3fa7085fcf9e65"],["/br_move-radio-component/js/34.140d00da06f8f6e50b62.js","7b3901614911314a75ffc6091b907650"],["/br_move-radio-component/js/35.140d00da06f8f6e50b62.js","5d6359465e161a7591382d98c410d797"],["/br_move-radio-component/js/36.140d00da06f8f6e50b62.js","282ade981de24ef6859cf0c2607e704e"],["/br_move-radio-component/js/37.140d00da06f8f6e50b62.js","e2c101fa2d92d32da1d61b08a08b0d03"],["/br_move-radio-component/js/38.140d00da06f8f6e50b62.js","e640fbb0096a931058250e3ff92492eb"],["/br_move-radio-component/js/39.140d00da06f8f6e50b62.js","b5702bb17302f415a8179f5ded8cb2b1"],["/br_move-radio-component/js/4.140d00da06f8f6e50b62.js","98d11c18123dadd3fa0da60d4a1d8e4d"],["/br_move-radio-component/js/40.140d00da06f8f6e50b62.js","bb9f713fc0a8334188bf7c4b1db52b13"],["/br_move-radio-component/js/404.140d00da06f8f6e50b62.js","15e3b95eec7f9dc9762ce8d1fa7c639b"],["/br_move-radio-component/js/41.140d00da06f8f6e50b62.js","5c37d9a7d2c8a15e9ad200ad32b312cf"],["/br_move-radio-component/js/42.140d00da06f8f6e50b62.js","b3c18a9404562f0a005726f540cadbfb"],["/br_move-radio-component/js/43.140d00da06f8f6e50b62.js","20e7b6a0e223136319a8de5344773cd1"],["/br_move-radio-component/js/44.140d00da06f8f6e50b62.js","800d9a45f7e7b4f634e4d9ed0712ccb0"],["/br_move-radio-component/js/45.140d00da06f8f6e50b62.js","9417477798ed2caf8545fbd0610b0af1"],["/br_move-radio-component/js/46.140d00da06f8f6e50b62.js","ecbeec308d0414c70384206c418feff7"],["/br_move-radio-component/js/47.140d00da06f8f6e50b62.js","e42ea84ddc7e3827d3fcd702d8f86ab6"],["/br_move-radio-component/js/48.140d00da06f8f6e50b62.js","fed012001a93f3ab0f2d5a067048b235"],["/br_move-radio-component/js/49.140d00da06f8f6e50b62.js","1625b2a663b2fe781471c7e83754490b"],["/br_move-radio-component/js/5.140d00da06f8f6e50b62.js","e8a98d899ce3ac8a390d016fd3b088b0"],["/br_move-radio-component/js/50.140d00da06f8f6e50b62.js","11a4bfe92ad7a6f27cfa12f7a4384441"],["/br_move-radio-component/js/51.140d00da06f8f6e50b62.js","4b628b10f2d5b405079d00b68b49066f"],["/br_move-radio-component/js/52.140d00da06f8f6e50b62.js","ea53befbc15fd32a17a123c66e9516be"],["/br_move-radio-component/js/53.140d00da06f8f6e50b62.js","24915e62a944043f178a28a94939f02f"],["/br_move-radio-component/js/54.140d00da06f8f6e50b62.js","f9ce82c1eba1b5949f156f15ab27dad2"],["/br_move-radio-component/js/55.140d00da06f8f6e50b62.js","11bb74750638ce9cfa9be687866ab198"],["/br_move-radio-component/js/56.140d00da06f8f6e50b62.js","dd6e15302e295e8a162d041d0dd132ae"],["/br_move-radio-component/js/57.140d00da06f8f6e50b62.js","be49051fc95706d04fd32b84d83ae678"],["/br_move-radio-component/js/58.140d00da06f8f6e50b62.js","cb429d77b6828c6ab7091cc3eb56d5ce"],["/br_move-radio-component/js/59.140d00da06f8f6e50b62.js","4f275a0da12e986fa0e90b34713d7e78"],["/br_move-radio-component/js/6.140d00da06f8f6e50b62.js","e451ab08bd5f2037a105a1b47195aed7"],["/br_move-radio-component/js/60.140d00da06f8f6e50b62.js","0faabad8e465298e40927e937adfa32d"],["/br_move-radio-component/js/61.140d00da06f8f6e50b62.js","8235dfe44363431a4a591d7c63a9e9f8"],["/br_move-radio-component/js/62.140d00da06f8f6e50b62.js","ffb22e7f3f2136a423d52f8815cc7c29"],["/br_move-radio-component/js/63.140d00da06f8f6e50b62.js","e88eeddbea7dc182514dfa70e49770b2"],["/br_move-radio-component/js/64.140d00da06f8f6e50b62.js","3060133f9778cae20cd5a16d87d88e7f"],["/br_move-radio-component/js/65.140d00da06f8f6e50b62.js","dca94a266c37ab45bc5795a209a1569d"],["/br_move-radio-component/js/66.140d00da06f8f6e50b62.js","a09b3211a4d1d88e373d708b90106e98"],["/br_move-radio-component/js/67.140d00da06f8f6e50b62.js","2e1d9d07990fd15e46e61fc5923e80d5"],["/br_move-radio-component/js/68.140d00da06f8f6e50b62.js","ead2b3320618499ddc75c160130a9ff5"],["/br_move-radio-component/js/69.140d00da06f8f6e50b62.js","9c5378c25efd5362aa8fa268c4419176"],["/br_move-radio-component/js/7.140d00da06f8f6e50b62.js","83e12b92961079501d44db6d5eaa3633"],["/br_move-radio-component/js/70.140d00da06f8f6e50b62.js","c1e9bae8923c603e670412f72f974e8c"],["/br_move-radio-component/js/71.140d00da06f8f6e50b62.js","e53e8a7f0f8803a052035ba3a8e19f62"],["/br_move-radio-component/js/8.140d00da06f8f6e50b62.js","1d36df44a0c6c879a6ffc141fc65ba87"],["/br_move-radio-component/js/9.140d00da06f8f6e50b62.js","402075a4357a2ea0d24dfab3f48838be"],["/br_move-radio-component/js/AccountSignupModal.140d00da06f8f6e50b62.js","a5cad1f44ca984aea1adbf95fbc6033b"],["/br_move-radio-component/js/account-info.140d00da06f8f6e50b62.js","3838205d370f6fa50dc4f6c7607487f1"],["/br_move-radio-component/js/contract.140d00da06f8f6e50b62.js","9ff03b1b2f439465fdb1b6f9c7a9df62"],["/br_move-radio-component/js/default~open_position~1833eefb.140d00da06f8f6e50b62.js","2e5af712eaff38052b69e216f115997d"],["/br_move-radio-component/js/digits.140d00da06f8f6e50b62.js","ad9da75b7ba4515a2424cb69982e511c"],["/br_move-radio-component/js/info-box.140d00da06f8f6e50b62.js","d875b810eca8d18514f47976f1f3cb25"],["/br_move-radio-component/js/modals.140d00da06f8f6e50b62.js","3b5a2d3b763b2ef17599341714b5135e"],["/br_move-radio-component/js/notification-messages.140d00da06f8f6e50b62.js","27594c506ac828f2ab8f3b0641fd343d"],["/br_move-radio-component/js/open_positions.140d00da06f8f6e50b62.js","1fc1b7b908937b9cd37fa021895fed7b"],["/br_move-radio-component/js/profit_table.140d00da06f8f6e50b62.js","e86e8eab70e2f1fba5861e9a8fba578d"],["/br_move-radio-component/js/push-notification.140d00da06f8f6e50b62.js","0b12df6e5ba12101d9d791943e5994ca"],["/br_move-radio-component/js/reports.140d00da06f8f6e50b62.js","b1bacb6e5f1b89d75a4f2aef5d46cc91"],["/br_move-radio-component/js/screen-small.140d00da06f8f6e50b62.js","2a5e918f77b02d51f1ca71af6f442c58"],["/br_move-radio-component/js/settings-chart.140d00da06f8f6e50b62.js","6c9518ecce1deeb30ce5f91c7edb3224"],["/br_move-radio-component/js/settings-language.140d00da06f8f6e50b62.js","07acdadb84ebc179dcbc8eb8585b0a8e"],["/br_move-radio-component/js/settings-theme.140d00da06f8f6e50b62.js","dc396d0e6e847f4cecb6a04ab51955b0"],["/br_move-radio-component/js/smart_chart.140d00da06f8f6e50b62.js","0bd151447fb09ea7ea7570c5835f6351"],["/br_move-radio-component/js/smartcharts/chartiq-20e7d9.smartcharts.js","bff0550267141f484e80bd85a653d525"],["/br_move-radio-component/js/smartcharts/de-po-2be090.smartcharts.js","add4442c58a7566295b9d2dd4af1c66f"],["/br_move-radio-component/js/smartcharts/es-po-13563c.smartcharts.js","a1fe9d146280432fd352a12db2ffc267"],["/br_move-radio-component/js/smartcharts/fr-po-68d56d.smartcharts.js","da7115f055ca710a9bc12ecdf5a3ad1a"],["/br_move-radio-component/js/smartcharts/html2canvas-fb6a61.smartcharts.js","9c599654d508fd876e10a24a0ada1b79"],["/br_move-radio-component/js/smartcharts/id-po-b0a940.smartcharts.js","188c6bee2e66a7e06d42265b789753c5"],["/br_move-radio-component/js/smartcharts/it-po-ed7ac7.smartcharts.js","e27729e8ba56a2169c1555066115fe1f"],["/br_move-radio-component/js/smartcharts/nl-po-85ccc7.smartcharts.js","e4429757bdce370683fb0445834017b4"],["/br_move-radio-component/js/smartcharts/pl-po-db1605.smartcharts.js","6bc8bf5b0c78b4889a5eafb6ce59e4c8"],["/br_move-radio-component/js/smartcharts/pt-po-056cd5.smartcharts.js","01e422ae46f341ec59b835abba6e6366"],["/br_move-radio-component/js/smartcharts/ru-po-85c8e0.smartcharts.js","a798f555c2b26c2b8886be49b06e35de"],["/br_move-radio-component/js/smartcharts/sprite-2b590f.smartcharts.svg","73570b62f65ac8c48e9dc7feb9404e39"],["/br_move-radio-component/js/smartcharts/th-po-8641c6.smartcharts.js","8e52e408600ab67b033a16aaa9eb2efa"],["/br_move-radio-component/js/smartcharts/vendors~resize-observer-polyfill-a9bbdb.smartcharts.js","8b6ac48c545f617e07626a394a4ae6df"],["/br_move-radio-component/js/smartcharts/vi-po-9a11b6.smartcharts.js","51ed5d1e8ff12b5575c0ab985d177ed5"],["/br_move-radio-component/js/smartcharts/zh_cn-po-d2943e.smartcharts.js","d52097a138017b87b75fa968ef9c8cf7"],["/br_move-radio-component/js/smartcharts/zh_tw-po-33941e.smartcharts.js","f48370516c26d072d20764a77cbd61c3"],["/br_move-radio-component/js/statement.140d00da06f8f6e50b62.js","9a8f9ce973af0c135b292708a3f209dd"],["/br_move-radio-component/js/toggle-menu-drawer.140d00da06f8f6e50b62.js","df941bd2e4bfb7c0b0b73dfd23d3fefb"],["/br_move-radio-component/js/two-month-picker.140d00da06f8f6e50b62.js","7ffcebff91118e847097df8afcb893b7"],["/br_move-radio-component/js/vendors~AccountSignupModal.140d00da06f8f6e50b62.js","6f04d3ae3230e8e84e5b53fe29a32186"],["/br_move-radio-component/js/vendors~digits~info-b~897959f6.140d00da06f8f6e50b62.js","46b15bf292db5de0f1d34d8f63458cfd"],["/br_move-radio-component/js/vendors~open_position~7c650be5.140d00da06f8f6e50b62.js","35e9a0b928d379da3420c5b85c32e316"],["/br_move-radio-component/js/vendors~smart_chart.140d00da06f8f6e50b62.js","1d4ffc16a386cb003144587e5697b34a"],["/br_move-radio-component/js/work-in-progress.140d00da06f8f6e50b62.js","694c057ec7838bb4b68034d289016484"],["/br_move-radio-component/manifest.json","42ebfe1ab28ceb60ecffb297fc5a8a45"],["/br_move-radio-component/public/fonts/binary_symbols.woff","61e1ace6ff353fca2d529d7bab8948d8"],["/br_move-radio-component/public/images/app/portfolio/ic_no_resale.svg","b34c177c2a8dd29227ed4b73890944e3"],["/br_move-radio-component/public/images/app/portfolio/ic_price_down.svg","002fdbdfdf687cbbbd665ad2ed4e2271"],["/br_move-radio-component/public/images/app/portfolio/ic_price_stable_light.svg","6c8b02bfff4862edb63a5995801e02c5"],["/br_move-radio-component/public/images/app/portfolio/ic_price_up.svg","f5ce1b9a4f239983cf96f1b886ccfbb0"],["/br_move-radio-component/public/images/app/portfolio/ic_purchase_light.svg","f4198eca77a4a8d7609e94bd99ff49c8"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXAUDCAD.svg","0e02b29c079d8a2503eeae23d4a70abd"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXAUDCHF.svg","9f1294ee595affa142b1787edc8ee378"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXAUDJPY.svg","a09634b5a938b3bc2d2d6d1b4b34193a"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXAUDNZD.svg","36bb58800ea9fc55f80d33a1cc654a8b"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXAUDPLN.svg","231c309538f63208c0ff435bf1616ee2"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXAUDUSD.svg","fa2a7eae666b34bca85d5d9ba8a97fc3"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXBROUSD.svg","d454ac8ca26aa0e9d84f8231e4e6f56b"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXEURAUD.svg","bf5dd5889c7608c2f581b3bd7a7c9b07"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXEURCAD.svg","826dcb7d90a4f98a037fd8a179873e83"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXEURCHF.svg","7a7a36e50bcd3c1652c21e416f9b8c24"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXEURGBP.svg","1c047c435f163fd321205ea502ef7071"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXEURJPY.svg","96a2b55c98cea9d1e3bf8c355f242216"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXEURNZD.svg","eb773cf5d2d1b16e7eab8fe62f6e7a43"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXEURUSD.svg","ed33019b3a3e2ad631e70046e3c81bab"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPAUD.svg","7d6233396dab53a0d5e5ab4bdb390a88"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPCAD.svg","da4dee9654e64414d9d3f13baf44e481"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPCHF.svg","08fae8ef7318afed3d738e52f62871d6"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPJPY.svg","fb61f9ad86b8c437759a3a0f50db7a45"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPNOK.svg","734eb6209af77575b2fd3f4e59c54329"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPNZD.svg","0089704ff5ea8451c83ca117add4c396"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPPLN.svg","06029550ad05db454279a195de6856bc"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPUSD.svg","9e96781efa1570050fa5a7632722a0e2"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXGBPZD.svg","877234a276ee1b8c2d4f7931baa3b0a0"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXNZDJPY.svg","e296bdc23c9829be7c9eb174b569afc9"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXNZDUSD.svg","b068987219a73dbe29caa54a6dbb8405"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDCAD.svg","7f09b6fe11f64726126d32968318f7b0"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDCHF.svg","dba53d336c615e74e1b89bb8faef5d54"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDJPY.svg","9969ec8f6271100c154781fa183ef3df"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDMSX.svg","2ea1e6b470f57a43fddd27ae639e9bc4"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDMXN.svg","de25932d5605337b1d4da137db83c509"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDNOK.svg","51a8c3cef23b4ad6e7f1c0876417ea09"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDPLN.svg","77560baac0b372af2dfeaf30a58a61ac"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXUSDSEK.svg","c40ed3c77ab113fb28c0c14bd62b6769"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXXAGUSD.svg","ba1dcb0a58f34891b4cc79a6531d5d35"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXXAUUSD.svg","89a5740f670412e3be719b8674e80ef2"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXXPDUSD.svg","559e63158fe326e7ee79cc9241c7e710"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-FRXXPTUSD.svg","5c5291ad97c53cbfdd04d2872a369ea4"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_AEX.svg","da838d08f8ae8c062b40fd1b9fc7df50"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_AS51.svg","f35091e9b97bb42f093a9dc3651687fe"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_DJI.svg","60b7292c39d97e537ef29c5fe43e89ff"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_FCHI.svg","7c553bece0f7c3804af6d0af559feebf"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_FTSE.svg","932536d233662ecec6002b91f08d693f"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_GDAXI.svg","21d968c48ac312a00632aaaee5423e4b"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_HSI.svg","9f5c3240bfefab9dde95548593447242"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_IBEX35.svg","b53aaa7c1f4ec0ca4c884383d4768715"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_N225.svg","f27adb15502a053d9a5002481f9dd1ff"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_NDX.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_SPC.svg","0ca7966d68f3f68e0cb0325c2b0fd56b"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_SSMI.svg","0b4b351389d00812e2ef6396ec99be3b"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-OTC_SX5E.svg","02007f062286e57773d02e4964ec13ea"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-RDBEAR.svg","45078bcd1bc743115b02397b72f68807"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-RDBULL.svg","1770d6be3fc02d01bc0a25a5e33f1445"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-R_10.svg","ccb2be1474ede6763d4588569e22272d"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-R_100.svg","58e582043b18e9a90f990337147fb55d"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-R_25.svg","c40ce01f7312aa7bff80633d1fed7414"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-R_50.svg","286e843e489439ee786f6ce425bc0e54"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-R_75.svg","a7452cb4a214a8bfc8cc8eee9bad1094"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-WLDAUD.svg","f77108b55b618a54e4191aaf6a6df334"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-WLDEUR.svg","4fff7b5328490a0303242868c42855b0"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-WLDGBP.svg","179724153e7076e17e330a494f8e0667"],["/br_move-radio-component/public/images/app/portfolio/underlying-icons/ic-WLDUSD.svg","02ff9d916a84b8d552d964124fa3a31a"],["/br_move-radio-component/public/images/common/logos/platform_logos/ic_platform_deriv_192x192.png","0eb8dee8f816898e27bd6b6880305b00"],["/br_move-radio-component/public/images/common/logos/platform_logos/ic_platform_deriv_512x512.png","6b11d96a148b86123a3c98559c418fbd"],["/br_move-radio-component/public/images/favicons/apple-touch-icon-114x114.png","0322f631bc36073c8d7456dce0bd7fed"],["/br_move-radio-component/public/images/favicons/apple-touch-icon-120x120.png","e4ecdb1e9e69fd419242d371d6d0a51b"],["/br_move-radio-component/public/images/favicons/apple-touch-icon-144x144.png","b2397442dc3f9e6ef133602c05ed57bf"],["/br_move-radio-component/public/images/favicons/apple-touch-icon-152x152.png","06ae76ded3fb5d8927c3700e45ef60e2"],["/br_move-radio-component/public/images/favicons/apple-touch-icon-180x180.png","9f57e8fbe12daeaacb0f88dea5c5f369"],["/br_move-radio-component/public/images/favicons/apple-touch-icon-57x57.png","bbfe68e3b267290cc478df7b2d492336"],["/br_move-radio-component/public/images/favicons/apple-touch-icon-60x60.png","bb6b7812c581bf31708a0629d6b53761"],["/br_move-radio-component/public/images/favicons/apple-touch-icon-72x72.png","f796ea13287ac8b5bd2db9253b7dfaf6"],["/br_move-radio-component/public/images/favicons/apple-touch-icon-76x76.png","a5150075e18059d0e3e50e63857d0d69"],["/br_move-radio-component/public/images/favicons/favicon-160x160.png","542be4b17cd98c676574f268bf975487"],["/br_move-radio-component/public/images/favicons/favicon-16x16.png","aa22e6e04029273227969f3b3157ff8c"],["/br_move-radio-component/public/images/favicons/favicon-192x192.png","3e1de28b91fc30127e329421aa65f7e2"],["/br_move-radio-component/public/images/favicons/favicon-32x32.png","710e816cc831e25e8b418020df168a77"],["/br_move-radio-component/public/images/favicons/favicon-96x96.png","3bf1801bf4abae86504d04883db54bdb"],["/br_move-radio-component/public/images/favicons/favicon.ico","965c20ead52a51848b5475c8496c49c2"],["/br_move-radio-component/robots.txt","6978a616c585d03cb5b542a891995efb"],["/br_move-radio-component/sitemap.xml","2a4cb574e213e6cc9da7b7196b3817f3"]];
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
    var navigateFallback = '/br_move-radio-component/';
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







