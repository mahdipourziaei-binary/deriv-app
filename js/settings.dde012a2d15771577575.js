(window.webpackJsonp=window.webpackJsonp||[]).push([["settings","account_password","api_token","authorized_application","cashier_password","financial_assessment","limits","login_history","personal_details","self_exclusion"],{688:function(t,e,n){"use strict";var i=n(0),a=n.n(i),r=n(1),s=n.n(r),c=function(t){var e=t.title,n=t.description,i=t.children;return a.a.createElement("div",{className:"section"},a.a.createElement("h2",{className:"section__title"},e),a.a.createElement("h4",{className:"section__description"},n),i)};c.propTypes={children:s.a.oneOfType([s.a.arrayOf(s.a.node),s.a.node]),description:s.a.string,title:s.a.string},e.a=c},698:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),r=n(0),s=n.n(r),c=n(688),o=function(t){var e=t.title,n=t.description;return s.a.createElement(c.a,{title:e,description:n})};o.propTypes={description:a.a.string,title:a.a.string},e.default=o},699:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),r=n(0),s=n.n(r),c=n(688),o=function(t){var e=t.title,n=t.description;return s.a.createElement(c.a,{title:e,description:n})};o.propTypes={description:a.a.string,title:a.a.string},e.default=o},700:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),r=n(0),s=n.n(r),c=n(688),o=function(t){var e=t.title,n=t.description;return s.a.createElement(c.a,{title:e,description:n})};o.propTypes={description:a.a.string,title:a.a.string},e.default=o},701:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),r=n(0),s=n.n(r),c=n(688),o=function(t){var e=t.title,n=t.description;return s.a.createElement(c.a,{title:e,description:n})};o.propTypes={description:a.a.string,title:a.a.string},e.default=o},702:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),r=n(0),s=n.n(r),c=n(688),o=function(t){var e=t.title,n=t.description;return s.a.createElement(c.a,{title:e,description:n})};o.propTypes={description:a.a.string,title:a.a.string},e.default=o},703:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),r=n(0),s=n.n(r),c=n(688),o=function(t){var e=t.title,n=t.description;return s.a.createElement(c.a,{title:e,description:n})};o.propTypes={description:a.a.string,title:a.a.string},e.default=o},704:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),r=n(0),s=n.n(r),c=n(688),o=function(t){var e=t.title,n=t.description;return s.a.createElement(c.a,{title:e,description:n})};o.propTypes={description:a.a.string,title:a.a.string},e.default=o},705:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),r=n(0),s=n.n(r),c=n(688),o=function(t){var e=t.title,n=t.description;return s.a.createElement(c.a,{title:e,description:n})};o.propTypes={description:a.a.string,title:a.a.string},e.default=o},706:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),r=n(0),s=n.n(r),c=n(688),o=function(t){var e=t.title,n=t.description;return s.a.createElement(c.a,{title:e,description:n})};o.propTypes={description:a.a.string,title:a.a.string},e.default=o},735:function(t,e,n){t.exports=n.p+"public/images/app/settings/ic-personal-details.svg"},736:function(t,e,n){t.exports=n.p+"public/images/app/settings/ic-financial-assesment.svg"},737:function(t,e,n){t.exports=n.p+"public/images/app/settings/ic-account-password.svg"},738:function(t,e,n){t.exports=n.p+"public/images/app/settings/ic-cashier-password.svg"},739:function(t,e,n){t.exports=n.p+"public/images/app/settings/ic-self-exclusion.svg"},740:function(t,e,n){t.exports=n.p+"public/images/app/settings/ic-limits.svg"},741:function(t,e,n){t.exports=n.p+"public/images/app/settings/ic-login-history.svg"},742:function(t,e,n){t.exports=n.p+"public/images/app/settings/ic-api-token.svg"},743:function(t,e,n){t.exports=n.p+"public/images/app/settings/ic-authorised-applications.svg"},750:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),r=n(0),s=n.n(r),c=n(32),o=n(37),p=function(t){var e=t.title,n=t.Icon,i=t.description,a=t.path,r=s.a.createElement(s.a.Fragment,null,s.a.createElement(n,null),s.a.createElement("div",{className:"menu-item__content"},s.a.createElement("div",{className:"menu-item__title"},e),s.a.createElement("div",{className:"menu-item__description"},i)));return a?s.a.createElement(o.c,{className:"menu-item",to:a,activeClassName:"menu-item--active"},r):s.a.createElement("div",{className:"menu-item"},r)};p.propTypes={description:a.a.string,Icon:a.a.element,path:a.a.string,title:a.a.string};var l=p,u=function(t){var e=t.items;return s.a.createElement("div",null,e.map(function(t,e){var n=t.title,i=t.description,a=t.Icon,r=t.path;return s.a.createElement(l,{key:e,title:n,description:i,Icon:a,path:r})}))};u.propTypes={items:a.a.arrayOf(a.a.shape({description:a.a.string,Icon:a.a.element,path:a.a.string,title:a.a.string}))};var m=u,d=function(t){var e=t.data;return s.a.createElement("div",{className:"settings-menu"},e.map(function(t){return s.a.createElement("div",{key:t.title},s.a.createElement("h2",{className:"settings-menu__group-header"},t.title),s.a.createElement("hr",{className:"hr settings-menu__separator"}),s.a.createElement(m,{items:t.items}))}))};d.propTypes={data:a.a.arrayOf(a.a.shape({items:a.a.array,title:a.a.string}))};var f=d,g=n(3),v=n(735),y=n.n(v),b=n(736),h=n.n(b),E=n(737),O=n.n(E),w=n(738),j=n.n(w),_=n(739),I=n.n(_),T=n(740),C=n.n(T),N=n(741),x=n.n(N),k=n(742),A=n.n(k),P=n(743),S=n.n(P),V=n(698),F=n(699),L=n(700),z=n(701),D=n(702),J=n(703),H=n(704),M=n(705),q=n(706),B=[{title:Object(g.a)("Profile"),items:[{title:Object(g.a)("Personal Details"),description:Object(g.a)("View your personal information."),Icon:y.a,Component:M.default},{title:Object(g.a)("Financial Assessment"),description:Object(g.a)("View your financial assessment settings"),Icon:h.a,Component:D.default}]},{title:Object(g.a)("Security & Limits"),items:[{title:Object(g.a)("Account Password"),description:Object(g.a)("Change your main login password."),Icon:O.a,Component:V.default},{title:Object(g.a)("Cashier Password"),description:Object(g.a)("Change the password used for deposits and withdrawals"),Icon:j.a,Component:z.default},{title:Object(g.a)("Self Exclusion"),description:Object(g.a)("Facility that allows you to set limits on your account."),Icon:I.a,Component:q.default},{title:Object(g.a)("Limits"),description:Object(g.a)("View your trading and withdrawal limits"),Icon:C.a,Component:J.default},{title:Object(g.a)("Login History"),description:Object(g.a)("View your login history"),Icon:x.a,Component:H.default},{title:Object(g.a)("API Token"),description:Object(g.a)("API token for third party applications"),Icon:A.a,Component:F.default},{title:Object(g.a)("Authorized Applications"),description:Object(g.a)("Manage your authorised applications"),Icon:S.a,Component:L.default}]}];function G(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function K(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){Q(t,e,n[e])})}return t}function Q(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var R=function(t){var e=t.match,n=t.routes.reduce(function(t,e){var n=e.component,i=e.path;return t[n.displayName||n.name]=i,t},{}),i=B.map(function(t){return K({},t,{items:t.items.map(function(t){return K({},t,{path:n[t.Component.displayname||t.Component.name]})})})}),a=i.reduce(function(t,e){return[].concat(G(t),G(e.items))},[]);return s.a.createElement("div",{className:"settings container"},s.a.createElement("div",{className:"settings__sidebar desktop-only"},s.a.createElement(f,{data:i})),s.a.createElement("div",{className:"settings__content"},s.a.createElement(c.d,null,a.map(function(t){var e=t.Component,n=t.title,i=t.description,a=t.path;return s.a.createElement(c.b,{key:a,path:a,render:function(){return s.a.createElement(e,{title:n,description:i})}})}),s.a.createElement(c.a,{from:e.url,to:a[0].path}))))};R.propTypes={match:a.a.object,routes:a.a.arrayOf(a.a.shape({component:a.a.func,path:a.a.string}))};e.default=R}}]);
//# sourceMappingURL=settings.dde012a2d15771577575.js.map