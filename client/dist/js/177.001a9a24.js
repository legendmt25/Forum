"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[177],{2052:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(6252),o=r(3577),s=r(9963);const a={class:"flex flex-col gap-2"},p={class:"font-bold"},i=["type","name"];function l(e,t,r,l,u,c){return(0,n.wg)(),(0,n.iD)("label",a,[(0,n._)("span",p,(0,o.zw)(c.label),1),(0,n.wy)((0,n._)("input",{type:r.type,class:"shadow-md dark:bg-neutral-600 dark:text-white form-input mt-1 block w-full rounded border",name:l.obj[r.property],"onUpdate:modelValue":t[0]||(t[0]=e=>l.obj[r.property]=e)},null,8,i),[[s.YZ,l.obj[r.property]]])])}var u=r(8225),c={props:{which:String,property:String,type:{type:String,default:"text"}},setup(e){const t=(0,n.f3)(`${e.which}Data`);return{obj:t}},computed:{label(){return(0,u.PS)(this.property)}}},d=r(3744);const h=(0,d.Z)(c,[["render",l]]);var y=h},5347:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(6252),o=r(3577),s=r(9963);const a={class:"flex flex-col gap-2"},p={class:"text-gray-700 dark:text-white font-bold"},i=["size"],l=["value"];function u(e,t,r,u,c,d){return(0,n.wg)(),(0,n.iD)("label",a,[(0,n._)("span",p,(0,o.zw)(d.label),1),(0,n.wy)((0,n._)("select",{size:r.size,class:"form-select dark:bg-neutral-700 shadow-md border rounded w-full","onUpdate:modelValue":t[0]||(t[0]=e=>u.obj[r.property]=e)},[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(r.list,((e,t)=>((0,n.wg)(),(0,n.iD)("option",{value:e.value,key:t},(0,o.zw)(e.text),9,l)))),128))],8,i),[[s.bM,u.obj[r.property]]])])}var c=r(8225),d={props:{size:{type:String,default:"1"},which:String,property:String,list:Array},setup(e){const t=(0,n.f3)(`${e.which}Data`);return{obj:t}},computed:{label(){return(0,c.PS)(this.property)}}},h=r(3744);const y=(0,h.Z)(d,[["render",u]]);var m=y},1177:function(e,t,r){r.r(t),r.d(t,{default:function(){return $}});var n=r(6252);const o={class:"flex justify-center"},s={class:"w-full md:w-3/4 mx-auto p-10 bg-neutral-50 dark:bg-neutral-700 dark:text-white rounded shadow-md"},a={class:"flex flex-col gap-4"},p={class:"flex gap-2"},i={class:"flex gap-2"};function l(e,t,r,l,u,c){const d=(0,n.up)("input-component"),h=(0,n.up)("select-gender"),y=(0,n.up)("location-input"),m=(0,n.up)("register-user-button");return(0,n.wg)(),(0,n.iD)("div",o,[(0,n._)("div",s,[(0,n._)("form",a,[(0,n._)("div",p,[(0,n.Wm)(d,{which:"user",class:"w-1/2",property:"firstName"}),(0,n.Wm)(d,{which:"user",class:"w-1/2",property:"lastName"})]),(0,n.Wm)(d,{which:"user",property:"email",type:"email"}),(0,n._)("div",i,[(0,n.Wm)(d,{which:"user",class:"w-1/2",property:"username"}),(0,n.Wm)(d,{which:"user",class:"w-1/2",property:"password",type:"password"})]),(0,n.Wm)(h,{property:"gender"}),(0,n.Wm)(d,{which:"user",property:"birthDate",type:"date"}),(0,n.Wm)(y,{property:"location"}),(0,n.Wm)(m,{class:"border-slate-400 border-2 rounded-full p-2 px-5 mt-2 hover:text-white hover:bg-blue-400 hover:border-blue-400 shadow:md hover:shadow-xl"})])])])}var u=r(2262),c=r(2052);function d(e,t,r,o,s,a){const p=(0,n.up)("SelectComponent");return(0,n.wg)(),(0,n.j4)(p,{which:"user",property:r.property,list:s.list},null,8,["property","list"])}var h=r(5347),y=r(8225),m={props:{property:String},data(){return{list:[]}},async created(){this.list=await fetch("http://localhost:3000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n        query LIST_COUNTRIES {\n            countries {\n                iso3\n                country\n            }\n        }"})}).then((e=>e.json())).then((e=>e.data.countries)),this.list=(0,y.ET)(this.list,"country","iso3")},components:{SelectComponent:h.Z}},w=r(3744);const f=(0,w.Z)(m,[["render",d]]);var g=f;function b(e,t,r,o,s,a){const p=(0,n.up)("select-component");return(0,n.wg)(),(0,n.j4)(p,{which:"user",property:r.property,list:s.genders},null,8,["property","list"])}var v={props:{property:String},data(){return{genders:(0,y.ET)([{gender:"Man"},{gender:"Woman"},{gender:"Other"}],"gender","gender")}},setup(){const e=(0,n.f3)("userData");return{user:e}},components:{SelectComponent:h.Z}};const S=(0,w.Z)(v,[["render",b]]);var x=S,D=r(9963);function j(e,t,r,o,s,a){return(0,n.wg)(),(0,n.iD)("button",{type:"submit",onClick:t[0]||(t[0]=(0,D.iM)((e=>a.registerUser()),["prevent"])),class:""}," Register ")}var k={setup(){const e=(0,n.f3)("userData");return{obj:e}},methods:{async registerUser(){await fetch("http://localhost:3000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n        mutation ADD_USER($userData:UserInput!) {\n            register(userData: $userData)\n            {\n                id\n                email\n            }\n        }\n        ",variables:{userData:{...this.obj}}})}).then((e=>e.json())).then((e=>e.data.register)),this.$router.push("/login")}}};const C=(0,w.Z)(k,[["render",j]]);var Z=C,U={name:"registerView",setup(){let e=(0,u.iH)({firstName:"",lastName:"",email:"",username:"",password:"",birthDate:"",gender:"",location:""});return(0,n.JJ)("userData",e),{obj:e}},components:{InputComponent:c.Z,LocationInput:g,SelectGender:x,RegisterUserButton:Z}};const W=(0,w.Z)(U,[["render",l]]);var $=W},8225:function(e,t,r){r.d(t,{PS:function(){return n},ET:function(){return o},Mu:function(){return s},Rd:function(){return a}});const n=e=>{let t=e.split("").reduce(((e,t)=>t==t.toUpperCase()?`${e} ${t}`:e+t));return t[0].toUpperCase()+t.slice(1)},o=(e,t,r)=>e.map((e=>({text:e[t],value:e[r]}))),s=e=>{let t=Math.abs(new Date(e)-new Date)/1e3,r="days";return t<60?r="seconds":t<3600?(t/=60,r="minutes"):t<216e3&&(t/=3600,r="hours"),`${t.toFixed(0)} ${r} ago`},a=e=>`http://localhost:3000/${e}`}}]);
//# sourceMappingURL=177.001a9a24.js.map