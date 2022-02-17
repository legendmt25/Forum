(function(){"use strict";var e={8225:function(e,t,n){n.d(t,{PS:function(){return o},ET:function(){return i},Mu:function(){return a},Rd:function(){return s},B5:function(){return d}});var r=n(8534),o=(n(5666),n(1539),n(4916),n(3123),n(2222),n(7042),n(1249),n(6977),n(2481),n(5306),n(5505),n(7714),n(2801),n(1174),n(2472),n(8675),n(2990),n(8927),n(3105),n(5035),n(4345),n(7174),n(2846),n(4731),n(7209),n(6319),n(8867),n(7789),n(3739),n(9368),n(4483),n(2056),n(3462),n(678),n(7462),n(3824),n(5021),n(2974),n(5016),n(8862),n(9714),n(3948),function(e){var t=e.split("").reduce((function(e,t){return t==t.toUpperCase()?"".concat(e," ").concat(t):e+t}));return t[0].toUpperCase()+t.slice(1)}),i=function(e,t,n){return e.map((function(e){return{text:e[t],value:e[n]}}))},a=function(e){var t=Math.abs(new Date(e)-new Date)/1e3,n="second";return t>=86400?(t/=86400,n="day"):t>=3600?(t/=3600,n="hour"):t>=60&&(t/=60,n="minutes"),n+=1==t?"":"s","".concat(t.toFixed(0)," ").concat(n," ago")},s=function(e){return"http://localhost:3000/".concat(e)};function u(){return c.apply(this,arguments)}function c(){return c=(0,r.Z)(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!("serviceWorker"in navigator)){e.next=8;break}return e.next=3,navigator.serviceWorker.ready;case 3:return t=e.sent,e.next=6,t.pushManager.subscribe({applicationServerKey:l("BBCJhz9zZnZCPmERIDeY_vz8H8HWMeiktLMtu93-6FlfvIgD_LZPc4y8VjUaOpHeOGmiJsKwmxwxqrsyzM6JhC0"),userVisibleOnly:!0});case 6:return n=e.sent,e.abrupt("return",n);case 8:case"end":return e.stop()}}),e)}))),c.apply(this,arguments)}function l(e){for(var t="=".repeat((4-e.length%4)%4),n=(e+t).replace(/-/g,"+").replace(/_/g,"/"),r=window.atob(n),o=new Uint8Array(r.length),i=0;i<r.length;++i)o[i]=r.charCodeAt(i);return o}function d(){return f.apply(this,arguments)}function f(){return f=(0,r.Z)(regeneratorRuntime.mark((function e(){var t,n,r,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,u();case 2:if(t=e.sent,n="string"==typeof sessionStorage.getItem("user"),r=null,n&&(r=JSON.parse(sessionStorage.getItem("user"))),o=JSON.parse(JSON.stringify(t)),i=!1,!n){e.next=12;break}return e.next=11,fetch("http://localhost:3000/graphql",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:"\n            mutation ADD_SUBSCRIPTION($userId: String!, $pushSubscriptionInput: PushSubscriptionInput!) {\n              addedSubscription(userId: $userId, pushSubscriptionInput: $pushSubscriptionInput)\n            }\n            ",variables:{userId:r.id,pushSubscriptionInput:{subscription:{endpoint:o.endpoint.toString(),keys:{p256dh:o.keys.p256dh.toString(),auth:o.keys.auth.toString()}}}}})}).then((function(e){return e.json()})).then((function(e){return e.data.addedSubscription}));case 11:i=e.sent;case 12:return e.abrupt("return",i);case 13:case"end":return e.stop()}}),e)}))),f.apply(this,arguments)}},2066:function(e,t,n){n(6992),n(8674),n(9601),n(7727),n(1539),n(8309);var r=n(9963),o=n(6252),i={class:"bg-gray-100 dark:bg-neutral-800 py-2 flex justify-center min-h-screen"},a={class:"container"};function s(e,t,n,r,s,u){var c=(0,o.up)("navbar-component"),l=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),(0,o._)("div",i,[(0,o._)("div",a,[(0,o.Wm)(l)])])],64)}var u=n(2262),c=n(3577),l={class:"flex bg-white shadow-md dark:bg-sky-800 rounded-b"},d={class:"flex container justify-center gap-5 py-1 font-light"},f=(0,o.Uk)("Home"),p=(0,o.Uk)("Communities"),m={class:"py-1 ml-auto pr-2 flex gap-2"};function h(e,t,n,i,a,s){var u=(0,o.up)("router-link"),h=(0,o.up)("user-info-nav");return(0,o.wg)(),(0,o.iD)("nav",l,[(0,o._)("div",d,[(0,o.Wm)(u,{"active-class":a.activeLinkClasses,class:(0,c.C_)([{"hover:text-blue-500 dark:hover:text-white":"/"!==this.$route.path},"font-bold text-lg py-2 px-1"]),to:"/"},{default:(0,o.w5)((function(){return[f]})),_:1},8,["active-class","class"]),(0,o.Wm)(u,{"active-class":a.activeLinkClasses,class:(0,c.C_)([{"hover:text-blue-500 dark:hover:text-white":"/communities"!==this.$route.path},"font-bold text-lg py-2 px-1"]),to:"/communities"},{default:(0,o.w5)((function(){return[p]})),_:1},8,["active-class","class"])]),(0,o._)("div",m,[(0,o.Wm)(h),(0,o._)("button",{type:"button",onClick:t[0]||(t[0]=(0,r.iM)((function(e){return s.themeToggle()}),["prevent"])),class:"bg-black shadow-2xl shadow-black py-2 px-3 dark:bg-white rounded"})])])}var g={class:"flex items-center"},v=(0,o._)("img",{class:"rounded-full h-10 w-10 overflow-hidden object-contain box-border py-1",src:"https://styles.redditmedia.com/t5_2yo6b/styles/communityIcon_sfbxdgfr14t71.png?width=256&s=4a982d8dedd0fe64047246c7ad62738810cc9713",alt:"User"},null,-1),b={class:"text-black dark:text-white p-1 drop-shadow-md"},w=(0,o._)("svg",{class:"w-4 h-4 transition-transform duration-300",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},[(0,o._)("path",{d:"M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 0 1-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"})],-1),y={key:0,class:"flex flex-col gap-2 py-2 px-0.5"},k={class:"list-item border-slate-500"},x=(0,o.Uk)("Options"),S={key:1,class:"flex flex-col gap-2 py-2 px-0.5"},_={class:"list-item border-slate-500"},O=(0,o.Uk)("Login"),C=(0,o._)("li",{class:"border-b px-1"},null,-1),I={class:"list-item border-slate-500"},N=(0,o.Uk)("Register");function j(e,t,n,r,i,a){var s=(0,o.up)("router-link"),u=(0,o.up)("logout-user"),l=(0,o.up)("dropdown-menu");return(0,o.wg)(),(0,o.j4)(l,{placement:"left"},{button:(0,o.w5)((function(){return[(0,o._)("div",g,[v,(0,o._)("span",b,(0,c.zw)(a.getUsername),1),w])]})),"list-items":(0,o.w5)((function(){return[r.isAuthenticated?((0,o.wg)(),(0,o.iD)("div",y,[(0,o._)("li",k,[(0,o.Wm)(s,{to:"/user/options",class:"flex px-4 rounded-md hover:bg-sky-400 drop-shadow-md py-1"},{default:(0,o.w5)((function(){return[x]})),_:1})]),(0,o._)("li",null,[(0,o.Wm)(u,{class:"flex px-4 rounded-md w-full hover:bg-sky-400 drop-shadow-md py-1"})])])):((0,o.wg)(),(0,o.iD)("div",S,[(0,o._)("li",_,[(0,o.Wm)(s,{to:"/login",class:"flex px-4 rounded-md hover:bg-sky-400 drop-shadow-md py-1"},{default:(0,o.w5)((function(){return[O]})),_:1})]),C,(0,o._)("li",I,[(0,o.Wm)(s,{to:"/register",class:"flex px-4 rounded-md hover:bg-sky-400 drop-shadow-md py-2"},{default:(0,o.w5)((function(){return[N]})),_:1})])]))]})),_:1})}var P={class:"relative"},L=(0,o.Uk)("a");function A(e,t,n,i,a,s){return(0,o.wg)(),(0,o.iD)("div",P,[(0,o._)("button",{class:"flex items-center gap-3 select-none text-sm font-bold hover:text-slate-500",onClick:t[0]||(t[0]=function(e){return s.toggle(e)})},[(0,o.WI)(e.$slots,"button")]),(0,o.Wm)(r.uT,{"enter-active-class":"transition-all duration-750 ease-out","leave-active-class":"transition-all duration-750 ease-in","enter-class":"opacity-100 scale-100","leave-class":"opacity-100 scale-100","leave-to-class":"opacity-0 scale-75"},{default:(0,o.w5)((function(){return[a.open?((0,o.wg)(),(0,o.iD)("ul",{key:0,onClick:t[1]||(t[1]=function(){return s.toggle&&s.toggle.apply(s,arguments)}),class:(0,c.C_)(["absolute bg-white rounded shadow-lg text-sm text-left w-32","left"==n.placement?"right-0":"left-0"])},[(0,o.WI)(e.$slots,"list-items",{},(function(){return[L]}))],2)):(0,o.kq)("",!0)]})),_:3})])}var U={props:{placement:String},data:function(){return{open:!1}},methods:{toggle:function(e){this.open=!this.open,this.open?e.target.parentNode.querySelector("svg").classList.add("rotate-180"):e.target.parentNode.querySelector("svg").classList.remove("rotate-180")}}},W=n(3744);const D=(0,W.Z)(U,[["render",A]]);var T=D;function E(e,t,n,r,i,a){return(0,o.wg)(),(0,o.iD)("button",{onClick:t[0]||(t[0]=function(e){return a.logout()})},"Logout")}var R={setup:function(){var e=(0,o.f3)("authenticated");return{isAuthenticated:e}},methods:{logout:function(){sessionStorage.clear(),this.isAuthenticated=!1}}};const Z=(0,W.Z)(R,[["render",E]]);var J=Z,M={setup:function(){var e=(0,o.f3)("authenticated");return{isAuthenticated:e}},components:{"dropdown-menu":T,LogoutUser:J},computed:{getUsername:function(){return this.isAuthenticated?JSON.parse(sessionStorage.getItem("user")).username:""}}};const V=(0,W.Z)(M,[["render",j]]);var q=V,B={data:function(){return{activeLinkClasses:"text-white text-blue-400 dark:text-neutral-50 rounded md:bg-transparent"}},methods:{themeToggle:function(){"light"===localStorage.theme?(localStorage.theme="dark",document.documentElement.classList.add("dark")):(document.documentElement.classList.remove("dark"),localStorage.theme="light")}},created:function(){void 0===localStorage.theme&&(localStorage.theme="light",document.documentElement.classList.remove("dark"))},components:{UserInfoNav:q}};const $=(0,W.Z)(B,[["render",h]]);var z=$,F={components:{NavbarComponent:z},setup:function(){var e=(0,u.iH)("string"==typeof sessionStorage.getItem("user"));return(0,o.JJ)("authenticated",e),{isAuthenticated:e}}};const H=(0,W.Z)(F,[["render",s]]);var K=H,Y=(n(8783),n(3948),n(2119)),G=[{path:"/",name:"homeView",component:function(){return Promise.all([n.e(823),n.e(387)]).then(n.bind(n,7387))}},{path:"/community/:id",name:"communityDetailsView",component:function(){return Promise.all([n.e(823),n.e(978)]).then(n.bind(n,3978))}},{path:"/communities",name:"communitiesListView",component:function(){return n.e(92).then(n.bind(n,6092))}},{path:"/register",name:"registerView",component:function(){return Promise.all([n.e(791),n.e(177)]).then(n.bind(n,1177))}},{path:"/login",name:"loginView",component:function(){return Promise.all([n.e(791),n.e(732)]).then(n.bind(n,8732))}},{path:"/submit",name:"createPostView",component:function(){return n.e(363).then(n.bind(n,9363))}},{path:"/user/options",name:"userOptionsView",component:function(){return n.e(294).then(n.bind(n,1294))},children:[{name:"account-options",path:"account",component:function(){return n.e(364).then(n.bind(n,2364))}},{name:"notifications-options",path:"notifications",component:function(){return n.e(818).then(n.bind(n,4818))}},{name:"profile-options",path:"profile",component:function(){return n.e(289).then(n.bind(n,2289))}}]}],Q=(0,Y.p7)({history:(0,Y.PO)(),routes:G}),X=Q,ee=n(8534),te=(n(5666),n(5205)),ne=n(8225);function re(){return oe.apply(this,arguments)}function oe(){return oe=(0,ee.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Notification.requestPermission((function(e){return"Notifications permission status ".concat(e)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)}))),oe.apply(this,arguments)}(0,te.z)("".concat("/","service-worker.js"),{ready:function(){return(0,ee.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:Notification.requestPermission((function(e){return console.log("Notifications permission status ".concat(e))})),re(),"granted"==Notification.permission&&(0,ne.B5)(),console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB");case 4:case"end":return e.stop()}}),e)})))()},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),X.beforeEach((function(e,t,n){if(e.matched.some((function(e){return"loginView"==e.name||"registerView"==e.name}))){var r=JSON.parse(sessionStorage.getItem("user"));return null==r?n():n("/")}return n()})),(0,r.ri)(K).use(X).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,i<a&&(a=i));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"-legacy."+{92:"8aec5b67",177:"bb14620d",289:"27579ca0",294:"eec9f246",363:"c2a62799",364:"5733998c",387:"cea06cb6",732:"85227f0d",791:"ff0ca316",818:"1fe85cc8",823:"947ee08b",978:"ebae1942"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="client:";n.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var s,u;if(void 0!==i)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}};n.l(a,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,i,a=r[0],s=r[1],u=r[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(l)},r=self["webpackChunkclient"]=self["webpackChunkclient"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(2066)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.0e7e4d53.js.map