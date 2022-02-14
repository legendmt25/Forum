(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[6],{2052:function(t,e,r){"use strict";r.d(e,{Z:function(){return h}});var n=r(6252),o=r(3577),s=r(9963);const u={class:"flex flex-col gap-2"},i={class:"font-bold"},a=["type","name"];function c(t,e,r,c,l,p){return(0,n.wg)(),(0,n.iD)("label",u,[(0,n._)("span",i,(0,o.zw)(p.label),1),(0,n.wy)((0,n._)("input",{type:r.type,class:"shadow-md dark:bg-neutral-600 dark:text-white form-input mt-1 block w-full rounded border",name:c.obj[r.property],"onUpdate:modelValue":e[0]||(e[0]=t=>c.obj[r.property]=t)},null,8,a),[[s.YZ,c.obj[r.property]]])])}var l=r(8225),p={props:{which:String,property:String,type:{type:String,default:"text"}},setup(t){const e=(0,n.f3)(`${t.which}Data`);return{obj:e}},computed:{label(){return(0,l.PS)(this.property)}}},f=r(3744);const d=(0,f.Z)(p,[["render",c]]);var h=d},9006:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return x}});var n=r(6252);const o={class:"flex justify-center"},s={class:"w-full md:w-3/4 bg-neutral-50 dark:bg-neutral-700 dark:text-white rounded shadow-md p-10"},u={class:"border border-solid border-gray-300 p-4 shadow-md"},i=(0,n._)("legend",{class:"text-2xl font-extralight"},"Login",-1),a={class:"p-6 flex flex-col gap-5"},c={class:"flex justify-center"};function l(t,e,r,l,p,f){const d=(0,n.up)("input-component"),h=(0,n.up)("login-user-button");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",s,[(0,n._)("form",null,[(0,n._)("fieldset",u,[i,(0,n._)("div",a,[(0,n.Wm)(d,{which:"user",property:"username"}),(0,n.Wm)(d,{which:"user",property:"password",type:"password"}),(0,n._)("div",c,[(0,n.Wm)(h,{class:"border-2 border-slate-400 rounded-full p-2 px-5 hover:text-white hover:bg-blue-400 hover:border-blue-400 shadow:md hover:shadow-xl"})])])])])])])}var p=r(2052),f=r(2262),d=r(9963);function h(t,e,r,o,s,u){return(0,n.wg)(),(0,n.iD)("button",{type:"submit",onClick:e[0]||(e[0]=(0,d.iM)((t=>u.login()),["prevent"]))},"Login")}r(1703);var m={setup(){let t=(0,n.f3)("userData"),e=(0,n.f3)("authenticated");return{obj:t,isAuthenticated:e}},methods:{async login(){try{let t=await fetch("http://localhost:3000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n          query LOGIN($userCredentials: UserCredentialsInput!) {\n            loginUser(userCredentialsInput: $userCredentials) {\n              id\n              createdAt\n              username\n              firstName\n              lastName\n              email\n              gender\n              options {\n                inboxMessages\n                upvotesOnComments\n                upvotesOnPosts\n                newFollowers\n              }\n            }\n          }",variables:{userCredentials:{...this.obj}}})}).then((t=>t.json())).then((t=>{if(null==t.data)throw Error("Authentication failed: "+JSON.stringify(t.errors));return t.data.loginUser})).catch((t=>{throw t}));this.isAuthenticated=!0,sessionStorage.setItem("user",JSON.stringify(t)),this.$router.push("/")}catch(t){alert("Invalid username or password"),console.log(t)}}}},y=r(3744);const b=(0,y.Z)(m,[["render",h]]);var g=b,v={name:"loginView",setup(){let t=(0,f.iH)({username:"",password:""});return(0,n.JJ)("userData",t),{obj:t}},components:{InputComponent:p.Z,LoginUserButton:g}};const w=(0,y.Z)(v,[["render",l]]);var x=w},2914:function(t,e,r){var n=r(7293),o=r(9114);t.exports=!n((function(){var t=Error("a");return!("stack"in t)||(Object.defineProperty(t,"stack",o(1,7)),7!==t.stack)}))},2104:function(t,e,r){var n=r(4374),o=Function.prototype,s=o.apply,u=o.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?u.bind(s):function(){return u.apply(s,arguments)})},8340:function(t,e,r){var n=r(111),o=r(8880);t.exports=function(t,e){n(e)&&"cause"in e&&o(t,"cause",e.cause)}},9191:function(t,e,r){"use strict";var n=r(5005),o=r(2597),s=r(8880),u=r(7976),i=r(7674),a=r(9920),c=r(9587),l=r(6277),p=r(8340),f=r(7741),d=r(2914),h=r(1913);t.exports=function(t,e,r,m){var y=m?2:1,b=t.split("."),g=b[b.length-1],v=n.apply(null,b);if(v){var w=v.prototype;if(!h&&o(w,"cause")&&delete w.cause,!r)return v;var x=n("Error"),E=e((function(t,e){var r=l(m?e:t,void 0),n=m?new v(t):new v;return void 0!==r&&s(n,"message",r),d&&s(n,"stack",f(n.stack,2)),this&&u(w,this)&&c(n,this,E),arguments.length>y&&p(n,arguments[y]),n}));if(E.prototype=w,"Error"!==g&&(i?i(E,x):a(E,x,{name:!0})),a(E,v),!h)try{w.name!==g&&s(w,"name",g),w.constructor=E}catch(k){}return E}}},1703:function(t,e,r){var n=r(2109),o=r(7854),s=r(2104),u=r(9191),i="WebAssembly",a=o[i],c=7!==Error("e",{cause:7}).cause,l=function(t,e){var r={};r[t]=u(t,e,c),n({global:!0,forced:c},r)},p=function(t,e){if(a&&a[t]){var r={};r[t]=u(i+"."+t,e,c),n({target:i,stat:!0,forced:c},r)}};l("Error",(function(t){return function(e){return s(t,this,arguments)}})),l("EvalError",(function(t){return function(e){return s(t,this,arguments)}})),l("RangeError",(function(t){return function(e){return s(t,this,arguments)}})),l("ReferenceError",(function(t){return function(e){return s(t,this,arguments)}})),l("SyntaxError",(function(t){return function(e){return s(t,this,arguments)}})),l("TypeError",(function(t){return function(e){return s(t,this,arguments)}})),l("URIError",(function(t){return function(e){return s(t,this,arguments)}})),p("CompileError",(function(t){return function(e){return s(t,this,arguments)}})),p("LinkError",(function(t){return function(e){return s(t,this,arguments)}})),p("RuntimeError",(function(t){return function(e){return s(t,this,arguments)}}))},8225:function(t,e,r){"use strict";r.d(e,{PS:function(){return n},ET:function(){return o},Mu:function(){return s},Rd:function(){return u}});const n=t=>{let e=t.split("").reduce(((t,e)=>e==e.toUpperCase()?`${t} ${e}`:t+e));return e[0].toUpperCase()+e.slice(1)},o=(t,e,r)=>t.map((t=>({text:t[e],value:t[r]}))),s=t=>{let e=Math.abs(new Date(t)-new Date)/1e3,r="days";return e<60?r="seconds":e<3600?(e/=60,r="minutes"):e<216e3&&(e/=3600,r="hours"),`${e.toFixed(0)} ${r} ago`},u=t=>`http://localhost:3000/${t}`}}]);
//# sourceMappingURL=6.dc85af59.js.map