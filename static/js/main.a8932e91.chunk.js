(this["webpackJsonppocket-studio"]=this["webpackJsonppocket-studio"]||[]).push([[0],{12:function(e,t,n){e.exports={link:"subMenu_link__1Uczd",linkContainer:"subMenu_linkContainer__2ZX9J",icon:"subMenu_icon__3nhcE",active:"subMenu_active__3f-D-",enter:"subMenu_enter__1wMDm",enterActive:"subMenu_enterActive__1YiKx",exit:"subMenu_exit__uyhMf",exitActive:"subMenu_exitActive__1Xbjq"}},142:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(17),i=n.n(c),o=(n(56),n(9)),u=n(18),s=n(10),l=n(13),m=n(143),p=n(27),f=n.n(p),b=n(28),O=n.n(b),_=function(e){var t=e.text,n=e.target;return r.a.createElement(u.b,{to:n,className:O.a.link,activeclassname:O.a.active},t)},d=n(14),v=n(43),g=n.n(v),k=n(12),y=n.n(k);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.text,n=e.menu,c=Object(a.useState)(!1),i=Object(o.a)(c,2),u=i[0],s=i[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:y.a.link,onClick:function(){return s(!u)},type:"button"},r.a.createElement(d.b,{className:g()(y.a.icon,Object(l.a)({},y.a.active,u))}),t),r.a.createElement(m.a,{in:u,timeout:1e3,classNames:x({},y.a),unmountOnExit:!0},r.a.createElement("div",{className:y.a.linkContainer},n.map((function(e){return r.a.createElement(_,Object.assign({key:e.target},e))})))))},j=n(44);function w(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):w(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var M=function(e){var t=e.isOpen,n=e.closeMenu,c=Object(a.useRef)(),i=function(e){c.current.contains(e.target)||n()};return Object(a.useEffect)((function(){return t&&document.addEventListener("mousedown",i),function(){document.removeEventListener("mousedown",i)}})),r.a.createElement(m.a,{in:t,timeout:1e3,classNames:P({},f.a),unmountOnExit:!0},r.a.createElement("nav",{ref:c,className:f.a.container},j.map((function(e){return"link"===e.type?r.a.createElement(_,Object.assign({key:e.id},e)):r.a.createElement(E,Object.assign({key:e.id},e))}))))},A=n(31),N=n.n(A),S=n(45),D=n(46),C=n.n(D),L=n(47),J=n.n(L),U=function(e){var t=e.page,n=void 0===t?"home":t,c=Object(a.useState)(!1),i=Object(o.a)(c,2),u=i[0],s=i[1],l=Object(a.useState)(!1),m=Object(o.a)(l,2),p=m[0],f=m[1];return Object(a.useEffect)((function(){(function(){var e=Object(S.a)(N.a.mark((function e(){var t,a,r;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="./pages/".concat(n,".md"),e.prev=1,e.next=4,fetch(t);case 4:return a=e.sent,e.next=7,a.text();case 7:r=e.sent,console.log(a),f(r),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),s(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),r.a.createElement("div",{className:J.a.container},u&&r.a.createElement("p",null,u),p&&r.a.createElement(C.a,{escapeHtml:!0,source:p}))},Z=n(48),F=n.n(Z),G=function(e){var t=e.handleClick,n=e.isMenuOpen;return r.a.createElement("button",{"alt-text":n?"Close navigation menu":"Open navigation menu",className:F.a.button,type:"button",onClick:t},n?r.a.createElement(d.a,null):r.a.createElement(d.c,null))},I=n(19),R=n.n(I);i.a.render(r.a.createElement((function(){var e=window.matchMedia("(min-width: ".concat("1000px",")")),t=Object(a.useState)(e.matches),n=Object(o.a)(t,2),c=n[0],i=n[1],l=Object(a.useState)(c),m=Object(o.a)(l,2),p=m[0],f=m[1];Object(a.useEffect)((function(){var t=function(){c!==e.matches&&(i(e.matches),f(e.matches))};return e.addListener(t),function(){return e.removeListener(t)}}));return r.a.createElement(u.a,null,r.a.createElement("div",{className:R.a.App},r.a.createElement("header",{className:R.a.header},!c&&r.a.createElement(G,{handleClick:function(){f(!p)},isMenuOpen:p}),"PocketStudio"),r.a.createElement("main",{className:R.a.main},r.a.createElement(M,{closeMenu:function(){c||f(!1)},isOpen:p}),r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(U,null)),r.a.createElement(s.a,{path:"/:page",render:function(e){var t=e.match;return r.a.createElement(U,{page:t.url})}}))))}),null),document.getElementById("root"))},19:function(e,t,n){e.exports={header:"App_header__3ZZ1n",main:"App_main__3ZkGI"}},27:function(e,t,n){e.exports={container:"menu_container__2kTtF",enter:"menu_enter__3l_UM",enterActive:"menu_enterActive__2PVUc",exit:"menu_exit__1hLwy",exitActive:"menu_exitActive__2Fazm"}},28:function(e,t,n){e.exports={link:"menuLink_link__xaM7P",active:"menuLink_active__3ACef"}},44:function(e){e.exports=JSON.parse('[{"id":1,"type":"link","text":"About Pocket Studio","target":"about"},{"id":2,"type":"title","text":"Get started with PocketStudio","menu":[{"type":"link","text":"Add media","target":"add-media"},{"type":"link","text":"Mark clips","target":"mark-clips"},{"type":"link","text":"Delete Media","target":"delete-media"}]},{"id":3,"type":"title","text":"Create awesome thing","menu":[{"type":"link","text":"Do the thing","target":"do-the-thing"},{"type":"link","text":"Make it sing","target":"make-it-sing"},{"type":"link","text":"Get rid of it","target":"get-rid-of-it"}]},{"id":4,"type":"title","text":"Work smarter","menu":[{"type":"link","text":"Reuse assets","target":"reuse-assets"},{"type":"link","text":"Automate everything","target":"automate-everything"}]}]')},47:function(e,t,n){e.exports={container:"content_container__2UrNR"}},48:function(e,t,n){e.exports={button:"menuIcon_button__1sfPa"}},51:function(e,t,n){e.exports=n(142)},56:function(e,t,n){}},[[51,1,2]]]);
//# sourceMappingURL=main.a8932e91.chunk.js.map