(this["webpackJsonppocket-studio"]=this["webpackJsonppocket-studio"]||[]).push([[0],{12:function(e,t,n){e.exports={link:"subMenu_link__1Uczd",linkContainer:"subMenu_linkContainer__2ZX9J",icon:"subMenu_icon__3nhcE",active:"subMenu_active__3f-D-",enter:"subMenu_enter__1wMDm",enterActive:"subMenu_enterActive__1YiKx",exit:"subMenu_exit__uyhMf",exitActive:"subMenu_exitActive__1Xbjq"}},144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(19),i=n.n(c),u=(n(58),n(8)),o=n(14),s=n(10),l=n(43),m=n(13),p=n(145),f=n(27),b=n.n(f),_=n(28),O=n.n(_),d=function(e){var t=e.text,n=e.target,a=e.closeMenu,c=e.currentPage;return r.a.createElement(o.c,{to:n,isActive:function(){return"/".concat(n)===c},className:O.a.link,activeClassName:O.a.active,onClick:a},t)},v=n(15),g=n(46),k=n.n(g),y=n(12),h=n.n(y);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.text,n=e.menu,c=e.closeMenu,i=e.currentPage,o=Object(a.useState)(!1),s=Object(u.a)(o,2),l=s[0],f=s[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{className:h.a.link,onClick:function(){return f(!l)},type:"button"},r.a.createElement(v.b,{className:k()(h.a.icon,Object(m.a)({},h.a.active,l))}),t),r.a.createElement(p.a,{in:l,timeout:1e3,classNames:x({},h.a),unmountOnExit:!0},r.a.createElement("div",{className:h.a.linkContainer},n.map((function(e){return r.a.createElement(d,Object.assign({key:e.target},e,{closeMenu:c,currentPage:i}))})))))},P=n(47);function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function w(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(n,!0).forEach((function(t){Object(m.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var N=function(e){var t=e.isOpen,n=e.closeMenu,c=e.currentPage,i=Object(a.useRef)();return Object(a.useEffect)((function(){var e=function(e){i.current.contains(e.target)||n()};return t&&document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[n,t]),r.a.createElement(p.a,{in:t,timeout:1e3,classNames:w({},b.a),unmountOnExit:!0},r.a.createElement("nav",{ref:i,className:b.a.container},P.map((function(e){return"link"===e.type?r.a.createElement(d,Object.assign({key:e.id},e,{closeMenu:n,currentPage:c})):r.a.createElement(E,Object.assign({key:e.id},e,{closeMenu:n,currentPage:c}))}))))},A=n(31),S=n.n(A),C=n(48),D=n(49),L=n.n(D),F=n(32),G=n.n(F),J=function(e){var t=e.page,n=void 0===t?"home":t,c=Object(a.useState)(!1),i=Object(u.a)(c,2),o=i[0],s=i[1],l=Object(a.useState)(!1),m=Object(u.a)(l,2),p=m[0],f=m[1];return Object(a.useEffect)((function(){(function(){var e=Object(C.a)(S.a.mark((function e(){var t,a,r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s(!1),t="./pages/".concat(n,".md"),e.prev=2,e.next=5,fetch(t);case 5:if(404!==(a=e.sent).status){e.next=9;break}throw f(!1),"Page Not Found";case 9:return e.next=11,a.text();case 11:r=e.sent,f(r),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(2),s(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}})()()}),[n]),r.a.createElement("div",{className:G.a.container},r.a.createElement("div",{className:G.a.inner},o&&r.a.createElement("p",null,o),p&&r.a.createElement(L.a,{escapeHtml:!0,source:p})))},U=n(50),Z=n.n(U),I=function(e){var t=e.handleClick,n=e.isMenuOpen;return r.a.createElement("button",{"alt-text":n?"Close navigation menu":"Open navigation menu",className:Z.a.button,type:"button",onClick:t},n?r.a.createElement(v.a,null):r.a.createElement(v.c,null))},R=n(16),z=n.n(R);i.a.render(r.a.createElement((function(){var e=window.matchMedia("(min-width: ".concat("1000px",")")),t=Object(a.useState)(e.matches),n=Object(u.a)(t,2),c=n[0],i=n[1],m=Object(a.useState)(c),p=Object(u.a)(m,2),f=p[0],b=p[1],_=Object(a.useState)(""),O=Object(u.a)(_,2),d=O[0],v=O[1];Object(a.useEffect)((function(){var t=Object(l.debounce)((function(){c!==e.matches&&(i(e.matches),b(e.matches))}),180);return e.addListener(t),function(){return e.removeListener(t)}}),[c,e]);var g=function(){c||b(!1)};return r.a.createElement(o.a,null,r.a.createElement("div",{className:z.a.App},r.a.createElement("header",{className:z.a.header},!c&&r.a.createElement(I,{handleClick:function(){b(!f)},isMenuOpen:f}),r.a.createElement(o.b,{to:"/",className:z.a.title},"PocketStudio")),r.a.createElement("main",{className:z.a.main},r.a.createElement(N,{closeMenu:g,isOpen:f,currentPage:d}),r.a.createElement(s.a,{exact:!0,path:"/"},r.a.createElement(J,{closeMenu:g})),r.a.createElement(s.a,{path:"/:page",render:function(e){var t=e.match;return v(t.url),r.a.createElement(J,{closeMenu:g,page:t.url})}}))))}),null),document.getElementById("root"))},16:function(e,t,n){e.exports={header:"App_header__3ZZ1n",title:"App_title__-GfWs",main:"App_main__3ZkGI"}},27:function(e,t,n){e.exports={container:"menu_container__2kTtF",enter:"menu_enter__3l_UM",enterActive:"menu_enterActive__2PVUc",exit:"menu_exit__1hLwy",exitActive:"menu_exitActive__2Fazm"}},28:function(e,t,n){e.exports={link:"menuLink_link__xaM7P",active:"menuLink_active__3ACef"}},32:function(e,t,n){e.exports={container:"content_container__2UrNR",inner:"content_inner__1ret2"}},47:function(e){e.exports=JSON.parse('[{"id":1,"type":"link","text":"About Pocket Studio","target":"about"},{"id":2,"type":"title","text":"Get started with PocketStudio","menu":[{"type":"link","text":"Add media","target":"add-media"},{"type":"link","text":"Mark clips","target":"mark-clips"},{"type":"link","text":"Delete Media","target":"delete-media"}]},{"id":3,"type":"title","text":"Create awesome thing","menu":[{"type":"link","text":"Do the thing","target":"do-the-thing"},{"type":"link","text":"Make it sing","target":"make-it-sing"},{"type":"link","text":"Get rid of it","target":"get-rid-of-it"}]},{"id":4,"type":"title","text":"Work smarter","menu":[{"type":"link","text":"Reuse assets","target":"reuse-assets"},{"type":"link","text":"Automate everything","target":"automate-everything"}]}]')},50:function(e,t,n){e.exports={button:"menuIcon_button__1sfPa"}},53:function(e,t,n){e.exports=n(144)},58:function(e,t,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.4b102a61.chunk.js.map