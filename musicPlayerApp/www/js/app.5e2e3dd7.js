(function(e){function n(n){for(var c,r,i=n[0],o=n[1],s=n[2],d=0,f=[];d<i.length;d++)r=i[d],u[r]&&f.push(u[r][0]),u[r]=0;for(c in o)Object.prototype.hasOwnProperty.call(o,c)&&(e[c]=o[c]);l&&l(n);while(f.length)f.shift()();return a.push.apply(a,s||[]),t()}function t(){for(var e,n=0;n<a.length;n++){for(var t=a[n],c=!0,r=1;r<t.length;r++){var i=t[r];0!==u[i]&&(c=!1)}c&&(a.splice(n--,1),e=o(o.s=t[0]))}return e}var c={},r={app:0},u={app:0},a=[];function i(e){return o.p+"js/"+({}[e]||e)+"."+{"chunk-01c81620":"1e549db9","chunk-2d0be128":"47313fa5","chunk-3958cbb5":"2de08b08","chunk-5914b952":"2ad84562","chunk-7ad4261f":"5d3595cf","chunk-53d78775":"887a1469","chunk-6063191e":"3c81ba67","chunk-d6939f42":"bfbac9bd","chunk-edae038a":"34cf73ce"}[e]+".js"}function o(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.e=function(e){var n=[],t={"chunk-01c81620":1,"chunk-3958cbb5":1,"chunk-5914b952":1,"chunk-53d78775":1,"chunk-6063191e":1,"chunk-d6939f42":1,"chunk-edae038a":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise(function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-01c81620":"c41d2f61","chunk-2d0be128":"31d6cfe0","chunk-3958cbb5":"c69d9ab4","chunk-5914b952":"0d106b88","chunk-7ad4261f":"31d6cfe0","chunk-53d78775":"a9809147","chunk-6063191e":"c115e417","chunk-d6939f42":"7d40665e","chunk-edae038a":"36ec722d"}[e]+".css",u=o.p+c,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var s=a[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===c||d===u))return n()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],d=s.getAttribute("data-href");if(d===c||d===u)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||u,a=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=c,delete r[e],l.parentNode.removeChild(l),t(a)},l.href=u;var m=document.getElementsByTagName("head")[0];m.appendChild(l)}).then(function(){r[e]=0}));var c=u[e];if(0!==c)if(c)n.push(c[2]);else{var a=new Promise(function(n,t){c=u[e]=[n,t]});n.push(c[2]=a);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,o.nc&&d.setAttribute("nonce",o.nc),d.src=i(e),s=function(n){d.onerror=d.onload=null,clearTimeout(f);var t=u[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src,a=new Error("Loading chunk "+e+" failed.\n("+c+": "+r+")");a.type=c,a.request=r,t[1](a)}u[e]=void 0}};var f=setTimeout(function(){s({type:"timeout",target:d})},12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(n)},o.m=e,o.c=c,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)o.d(t,c,function(n){return e[n]}.bind(null,c));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="",o.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=n,s=s.slice();for(var f=0;f<s.length;f++)n(s[f]);var l=d;a.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("cadf"),t("551c"),t("f751"),t("097d");var c=t("2b0e"),r=t("5c96"),u=t.n(r),a=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},i=[],o=(t("7c55"),t("2877")),s={},d=Object(o["a"])(s,a,i,!1,null,null,null),f=d.exports,l=t("8c4f");c["default"].use(l["a"]);var m=new l["a"]({routes:[{path:"/",name:"home",component:function(){return Promise.all([t.e("chunk-7ad4261f"),t.e("chunk-53d78775")]).then(t.bind(null,"bb51"))},redirect:"index",children:[{path:"index",name:"index",component:function(){return Promise.all([t.e("chunk-7ad4261f"),t.e("chunk-6063191e")]).then(t.bind(null,"1e4b"))}},{path:"myMusic",name:"myMusic",component:function(){return t.e("chunk-d6939f42").then(t.bind(null,"cae7"))}},{path:"discover",name:"discover",component:function(){return t.e("chunk-2d0be128").then(t.bind(null,"2f64"))}},{path:"songerList",name:"songerList",component:function(){return t.e("chunk-3958cbb5").then(t.bind(null,"85ac"))}},{path:"ademSong",name:"ademSong",component:function(){return t.e("chunk-5914b952").then(t.bind(null,"5b9f"))}},{path:"singer",name:"singer",component:function(){return t.e("chunk-edae038a").then(t.bind(null,"20d0"))}},{path:"todayMusic",name:"todayMusic",component:function(){return t.e("chunk-01c81620").then(t.bind(null,"92d9"))}}]}]}),h=t("2f62");c["default"].use(h["a"]);var p=new h["a"].Store({state:{onOff:{isShowPlayingMusicList:!1,ishidden:!1,isShowMS:!1,isPlay:!1,isShowOption:!1},playingMusicListArr:[{musicId:19999,musicName:"绅士",singerName:"薛之谦",ademName:"绅士",musicSrc:t("f083"),ademImgSrc:t("6a91")},{musicId:10005,musicName:"刚刚好",singerName:"薛之谦",ademName:"初学者",musicSrc:t("aae3"),ademImgSrc:t("5fe1")},{musicId:10001,musicName:"有何不可",singerName:"许嵩",ademName:"自定义",musicSrc:t("5cdc"),ademImgSrc:t("e600")},{musicId:10002,musicName:"幻听",singerName:"许嵩",ademName:"梦游计",musicSrc:t("fed0"),ademImgSrc:t("d4c3")}],cycleWay:0,thisSelectMusic:{},musicListArr:[],playingMusic:{index:0,music:{musicId:19999,musicName:"绅士",singerName:"薛之谦",ademName:"绅士",musicSrc:t("f083"),ademImgSrc:t("6a91")}},proBarLen:0,Vol:50},getters:{},mutations:{ShowPlayingMusicList:function(e){e.onOff.isShowPlayingMusicList=!e.onOff.isShowPlayingMusicList},changeMPShow:function(e){e.onOff.ishidden=!e.onOff.ishidden},changeCycleWay:function(e){e.cycleWay<1?e.cycleWay++:e.cycleWay=0},changeisShowMS:function(e){e.onOff.isShowMS=!e.onOff.isShowMS},playMusic:function(e){e.onOff.isPlay,e.onOff.isPlay=!e.onOff.isPlay}},actions:{}}),g=(t("0fae"),t("1f54"),t("bc3a")),b=t.n(g);c["default"].use(u.a),c["default"].prototype.axios=b.a,c["default"].config.productionTip=!1,new c["default"]({router:m,store:p,render:function(e){return e(f)}}).$mount("#app")},"5c48":function(e,n,t){},"5cdc":function(e,n,t){e.exports=t.p+"media/许嵩 - 有何不可.4651c16e.mp3"},"5fe1":function(e,n,t){e.exports=t.p+"img/刚刚好.4c8e1f61.jpg"},"6a91":function(e,n,t){e.exports=t.p+"img/绅士.ed430955.jpg"},"7c55":function(e,n,t){"use strict";var c=t("5c48"),r=t.n(c);r.a},aae3:function(e,n,t){e.exports=t.p+"media/薛之谦 - 刚刚好.3da5f675.mp3"},d4c3:function(e,n,t){e.exports=t.p+"img/幻听.4f9cb283.jpg"},e600:function(e,n,t){e.exports=t.p+"img/有何不可.f0161577.jpg"},f083:function(e,n,t){e.exports=t.p+"media/薛之谦 - 绅士.e4799efd.mp3"},fed0:function(e,n,t){e.exports=t.p+"media/许嵩 - 幻听.917b5db0.mp3"}});
//# sourceMappingURL=app.5e2e3dd7.js.map