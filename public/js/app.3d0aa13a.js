(function(t){function e(e){for(var r,u,i=e[0],s=e[1],c=e[2],l=0,p=[];l<i.length;l++)u=i[l],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);f&&f(e);while(p.length)p.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,u=1;u<n.length;u++){var s=n[u];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},o={app:0},a=[];function u(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"4bf6e214"}[t]+".js"}function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(t);var c=new Error;a=function(e){s.onerror=s.onload=null,clearTimeout(l);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(e)},i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},a=[],u={},i=u,s=(n("034f"),n("2877")),c=Object(s["a"])(i,o,a,!1,null,null,null),l=c.exports,f=(n("d3b7"),n("8c4f")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.bgLink,attrs:{id:"bg"}},[n("div",{staticClass:"position text-white"},[n("div",{staticClass:"text-5xl font-bold"},[t._v("shol.xyz")]),n("div",{staticClass:"text-2xl mb-2"},[t._v("Create short domains easily!")]),t._m(0),n("div",{staticClass:"flex justify-between"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.longurl,expression:"longurl"}],staticClass:"w-full bg-opacity-0 bg-white placeholder-white appearance-none block w-1/3 text-white border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:border-gray-500",attrs:{type:"text",placeholder:"Input longurl"},domProps:{value:t.longurl},on:{input:function(e){e.target.composing||(t.longurl=e.target.value)}}}),n("button",{staticClass:"ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline",attrs:{type:"button"},on:{click:t.getShort}},[t._v(" Shorten ")])]),n("div",{staticClass:"mt-32"},[n("a",{attrs:{href:"https://gangjun.dev"}},[t._v("©"+t._s((new Date).getFullYear())+". Gangjun")])])])])},d=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex mb-8"},[n("a",{staticClass:"mr-4",attrs:{href:""}},[t._v("API Docs")]),n("a",{attrs:{href:"https://github.com/gangjun06/shol.xyz-backend"}},[t._v("Github")])])}],h=(n("99af"),n("caad"),n("2532"),n("498a"),n("bc3a")),g=n.n(h),b={name:"Home",data:function(){return{longurl:""}},computed:{bgLink:function(){var t=["305","319","613","566","96","282","279","1064","60","239","170","112","387","715","187","879","982"],e=t[Math.floor(Math.random()*t.length)];return{backgroundImage:"url('https://i.picsum.photos/id/".concat(e,"/").concat(window.innerWidth,"/").concat(window.innerHeight,".jpg')")}}},methods:{getShort:function(){var t=this,e=this.longurl.trim();""!==e?!e.includes(".")||e.length<4?this.$Msg.error("URL is wrong"):g.a.post("https://shol.xyz/?url=".concat(e)).then((function(e){if(200===e.status){var n="https://shol.xyz/"+e.data.short;t.$Msg.success("Successfully generated url.\nUrl has been saved to the clipboard"),t.$copyText(n)}else t.$Msg.error("Error while generating url")})).catch((function(e){t.$Msg.error("Server connetion faild")})):this.$Msg.error("Plase input the url")}}},v=b,m=(n("cccb"),Object(s["a"])(v,p,d,!1,null,null,null)),y=m.exports;r["a"].use(f["a"]);var w=[{path:"/",name:"Home",component:y},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],x=new f["a"]({mode:"history",base:"/",routes:w}),_=x,j=n("2f62");r["a"].use(j["a"]);var C=new j["a"].Store({state:{},mutations:{},actions:{},modules:{}}),O=(n("c898"),n("4eb5")),P=n.n(O),S=(n("7789"),n("5c66")),k=n.n(S);n("f818");P.a.config.autoSetContainer=!0,r["a"].use(P.a),r["a"].use(k.a),r["a"].config.productionTip=!1,new r["a"]({router:_,store:C,render:function(t){return t(l)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},c898:function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("5ced"),o=n.n(r);o.a}});
//# sourceMappingURL=app.3d0aa13a.js.map