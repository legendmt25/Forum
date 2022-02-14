(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[92],{6092:function(t,n,e){"use strict";e.r(n),e.d(n,{default:function(){return M}});var r=e(6252),i={class:"flex justify-center gap-2"},o={class:"flex flex-col gap-4"};function a(t,n,e,a,u,c){var s=(0,r.up)("communities-list",!0);return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",i,[(0,r.Wm)(s,{category:"random"}),(0,r.Wm)(s,{class:"w-1/3",category:"all"}),(0,r._)("div",o,[(0,r.Wm)(s,{category:"random"}),(0,r.Wm)(s,{category:"gaming"})])])])}var u=e(3577),c={class:"p-2 bg-neutral-300 w-full text-center text-xs md:text-base"},s={class:"bg-neutral-50 dark:bg-neutral-600 list-inside rounded shadow-md dark:text-white"};function l(t,n,e,i,o,a){var l=(0,r.up)("community-single-item");return(0,r.wg)(),(0,r.iD)("div",null,[(0,r._)("div",c,(0,u.zw)(a.title),1),(0,r._)("ol",s,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(o.communities,(function(t){return(0,r.wg)(),(0,r.j4)(l,{key:t.id,community:t},null,8,["community"])})),128))])])}var m=e(8534),d=(e(5666),e(1539),e(8862),e(8309),["data-community-id"]),f=["src"];function h(t,n,e,i,o,a){var c=(0,r.up)("router-link"),s=(0,r.up)("join-community-button");return(0,r.wg)(),(0,r.iD)("li",{"data-community-id":e.community.id,class:"md:flex justify-between p-3 text-center"},[(0,r.Wm)(c,{class:"md:flex gap-2 md:text-base text-sm font-light hover:font-extralight hover:text-blue-400",to:{name:"communityDetailsView",params:{id:e.community.id}}},{default:(0,r.w5)((function(){return[(0,r._)("img",{class:"w-7 h-7 mx-auto",src:a.avatarImage,alt:"communityImage"},null,8,f),(0,r.Uk)(" "+(0,u.zw)(e.community.name),1)]})),_:1},8,["to"]),(0,r.Wm)(s,{community:e.community,class:"hover:bg-blue-600 rounded-full w-full md:w-auto text-white font-semibold text-sm bg-blue-500 px-3 py-1 transition-all shadow-md"},null,8,["community"])],8,d)}var g=e(9963);function p(t,n,e,i,o,a){return i.isAuthenticated?((0,r.wg)(),(0,r.iD)("button",{key:0,type:"submit",onClick:n[0]||(n[0]=(0,g.iM)((function(t){return a.joinCommunity(t)}),["prevent"])),class:""},"Join")):(0,r.kq)("",!0)}var v={props:{community:Object},setup:function(){var t=(0,r.f3)("authenticated");return{isAuthenticated:t}},methods:{joinCommunity:function(t){var n=this;return(0,m.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:3000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n          mutation JOIN_COMMUNITY($communityId: String!, $userId: String!) {\n            joinCommunity(communityId: $communityId, userId: $userId) {\n              id\n              name\n            }\n          }\n          ",variables:{communityId:n.community.id,userId:JSON.parse(sessionStorage.getItem("user")).id}})}).then((function(t){return t.json()})).then((function(t){return t.data.joinCommunity}));case 2:t.target.classList.add("bg-green-500"),t.target.classList.remove("hover:bg-blue-600");case 4:case"end":return e.stop()}}),e)})))()}}},y=e(3744);const x=(0,y.Z)(v,[["render",p]]);var w=x,b=e(8225),I={props:{community:Object},components:{JoinCommunityButton:w},computed:{avatarImage:function(){return(0,b.Rd)(this.community.avatarImage)}}};const C=(0,y.Z)(I,[["render",h]]);var S=C,T={components:{CommunitySingleItem:S},props:{category:{type:String,default:"all"}},data:function(){return{communities:[],categoryThis:""}},created:function(){var t=this;return(0,m.Z)(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("all"!=t.category){n.next=5;break}return n.next=3,fetch("http://localhost:3000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n          query LIST_COMMUNITIES {\n              communities {\n                  id\n                  name\n                  description\n                  avatarImage\n              }\n          }"})}).then((function(t){return t.json()})).then((function(t){return t.data.communities}));case 3:return t.communities=n.sent,n.abrupt("return");case 5:return n.next=7,fetch("http://localhost:3000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n        query LIST_CATEGORIES_WITH_COMMUNITIES($categoryName: String) {\n            categories(categoryName: $categoryName) {\n                id\n                name\n                communities {\n                  id\n                  name\n                  description\n                  avatarImage\n                }\n            }\n        }",variables:{categoryName:"random"==t.category?null:t.category}})}).then((function(t){return t.json()})).then((function(t){return t.data.categories}));case 7:e=n.sent,e=e[parseInt(Math.random()*e.length-1)],t.categoryThis=e.name,t.communities=e.communities;case 11:case"end":return n.stop()}}),n)})))()},computed:{title:function(){return""==this.categoryThis?"Top communities":"Top ".concat(this.categoryThis," communities")}}};const j=(0,y.Z)(T,[["render",l]]);var k=j,N={name:"communitiesListView",components:{CommunitiesList:k}};const O=(0,y.Z)(N,[["render",a]]);var M=O},1194:function(t,n,e){var r=e(7293),i=e(5112),o=e(7392),a=i("species");t.exports=function(t){return o>=51||!r((function(){var n=[],e=n.constructor={};return e[a]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},7850:function(t,n,e){var r=e(111),i=e(4326),o=e(5112),a=o("match");t.exports=function(t){var n;return r(t)&&(void 0!==(n=t[a])?!!n:"RegExp"==i(t))}},863:function(t,n,e){var r=e(1702);t.exports=r(1..valueOf)},2222:function(t,n,e){"use strict";var r=e(2109),i=e(7854),o=e(7293),a=e(3157),u=e(111),c=e(7908),s=e(6244),l=e(6135),m=e(5417),d=e(1194),f=e(5112),h=e(7392),g=f("isConcatSpreadable"),p=9007199254740991,v="Maximum allowed index exceeded",y=i.TypeError,x=h>=51||!o((function(){var t=[];return t[g]=!1,t.concat()[0]!==t})),w=d("concat"),b=function(t){if(!u(t))return!1;var n=t[g];return void 0!==n?!!n:a(t)},I=!x||!w;r({target:"Array",proto:!0,forced:I},{concat:function(t){var n,e,r,i,o,a=c(this),u=m(a,0),d=0;for(n=-1,r=arguments.length;n<r;n++)if(o=-1===n?a:arguments[n],b(o)){if(i=s(o),d+i>p)throw y(v);for(e=0;e<i;e++,d++)e in o&&l(u,d,o[e])}else{if(d>=p)throw y(v);l(u,d++,o)}return u.length=d,u}})},1249:function(t,n,e){"use strict";var r=e(2109),i=e(2092).map,o=e(1194),a=o("map");r({target:"Array",proto:!0,forced:!a},{map:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},7042:function(t,n,e){"use strict";var r=e(2109),i=e(7854),o=e(3157),a=e(4411),u=e(111),c=e(1400),s=e(6244),l=e(5656),m=e(6135),d=e(5112),f=e(1194),h=e(206),g=f("slice"),p=d("species"),v=i.Array,y=Math.max;r({target:"Array",proto:!0,forced:!g},{slice:function(t,n){var e,r,i,d=l(this),f=s(d),g=c(t,f),x=c(void 0===n?f:n,f);if(o(d)&&(e=d.constructor,a(e)&&(e===v||o(e.prototype))?e=void 0:u(e)&&(e=e[p],null===e&&(e=void 0)),e===v||void 0===e))return h(d,g,x);for(r=new(void 0===e?v:e)(y(x-g,0)),i=0;g<x;g++,i++)g in d&&m(r,i,d[g]);return r.length=i,r}})},6977:function(t,n,e){"use strict";var r=e(2109),i=e(7854),o=e(1702),a=e(9303),u=e(863),c=e(8415),s=e(7293),l=i.RangeError,m=i.String,d=Math.floor,f=o(c),h=o("".slice),g=o(1..toFixed),p=function(t,n,e){return 0===n?e:n%2===1?p(t,n-1,e*t):p(t*t,n/2,e)},v=function(t){var n=0,e=t;while(e>=4096)n+=12,e/=4096;while(e>=2)n+=1,e/=2;return n},y=function(t,n,e){var r=-1,i=e;while(++r<6)i+=n*t[r],t[r]=i%1e7,i=d(i/1e7)},x=function(t,n){var e=6,r=0;while(--e>=0)r+=t[e],t[e]=d(r/n),r=r%n*1e7},w=function(t){var n=6,e="";while(--n>=0)if(""!==e||0===n||0!==t[n]){var r=m(t[n]);e=""===e?r:e+f("0",7-r.length)+r}return e},b=s((function(){return"0.000"!==g(8e-5,3)||"1"!==g(.9,0)||"1.25"!==g(1.255,2)||"1000000000000000128"!==g(0xde0b6b3a7640080,0)}))||!s((function(){g({})}));r({target:"Number",proto:!0,forced:b},{toFixed:function(t){var n,e,r,i,o=u(this),c=a(t),s=[0,0,0,0,0,0],d="",g="0";if(c<0||c>20)throw l("Incorrect fraction digits");if(o!=o)return"NaN";if(o<=-1e21||o>=1e21)return m(o);if(o<0&&(d="-",o=-o),o>1e-21)if(n=v(o*p(2,69,1))-69,e=n<0?o*p(2,-n,1):o/p(2,n,1),e*=4503599627370496,n=52-n,n>0){y(s,0,e),r=c;while(r>=7)y(s,1e7,0),r-=7;y(s,p(10,r,1),0),r=n-1;while(r>=23)x(s,1<<23),r-=23;x(s,1<<r),y(s,1,1),x(s,2),g=w(s)}else y(s,0,e),y(s,1<<-n,0),g=w(s)+f("0",c);return c>0?(i=g.length,g=d+(i<=c?"0."+f("0",c-i)+g:h(g,0,i-c)+"."+h(g,i-c))):g=d+g,g}})},3123:function(t,n,e){"use strict";var r=e(2104),i=e(6916),o=e(1702),a=e(7007),u=e(7850),c=e(9670),s=e(4488),l=e(6707),m=e(1530),d=e(7466),f=e(1340),h=e(8173),g=e(1589),p=e(7651),v=e(2261),y=e(2999),x=e(7293),w=y.UNSUPPORTED_Y,b=4294967295,I=Math.min,C=[].push,S=o(/./.exec),T=o(C),j=o("".slice),k=!x((function(){var t=/(?:)/,n=t.exec;t.exec=function(){return n.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));a("split",(function(t,n,e){var o;return o="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var o=f(s(this)),a=void 0===e?b:e>>>0;if(0===a)return[];if(void 0===t)return[o];if(!u(t))return i(n,o,t,a);var c,l,m,d=[],h=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),p=0,y=new RegExp(t.source,h+"g");while(c=i(v,y,o)){if(l=y.lastIndex,l>p&&(T(d,j(o,p,c.index)),c.length>1&&c.index<o.length&&r(C,d,g(c,1)),m=c[0].length,p=l,d.length>=a))break;y.lastIndex===c.index&&y.lastIndex++}return p===o.length?!m&&S(y,"")||T(d,""):T(d,j(o,p)),d.length>a?g(d,0,a):d}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:i(n,this,t,e)}:n,[function(n,e){var r=s(this),a=void 0==n?void 0:h(n,t);return a?i(a,n,r,e):i(o,f(r),n,e)},function(t,r){var i=c(this),a=f(t),u=e(o,i,a,r,o!==n);if(u.done)return u.value;var s=l(i,RegExp),h=i.unicode,g=(i.ignoreCase?"i":"")+(i.multiline?"m":"")+(i.unicode?"u":"")+(w?"g":"y"),v=new s(w?"^(?:"+i.source+")":i,g),y=void 0===r?b:r>>>0;if(0===y)return[];if(0===a.length)return null===p(v,a)?[a]:[];var x=0,C=0,S=[];while(C<a.length){v.lastIndex=w?0:C;var k,N=p(v,w?j(a,C):a);if(null===N||(k=I(d(v.lastIndex+(w?C:0)),a.length))===x)C=m(a,C,h);else{if(T(S,j(a,x,C)),S.length===y)return S;for(var O=1;O<=N.length-1;O++)if(T(S,N[O]),S.length===y)return S;C=x=k}}return T(S,j(a,x)),S}]}),!k,w)},8225:function(t,n,e){"use strict";e.d(n,{PS:function(){return r},ET:function(){return i},Mu:function(){return o},Rd:function(){return a}});e(1539),e(4916),e(3123),e(2222),e(7042),e(1249),e(6977);var r=function(t){var n=t.split("").reduce((function(t,n){return n==n.toUpperCase()?"".concat(t," ").concat(n):t+n}));return n[0].toUpperCase()+n.slice(1)},i=function(t,n,e){return t.map((function(t){return{text:t[n],value:t[e]}}))},o=function(t){var n=Math.abs(new Date(t)-new Date)/1e3,e="days";return n<60?e="seconds":n<3600?(n/=60,e="minutes"):n<216e3&&(n/=3600,e="hours"),"".concat(n.toFixed(0)," ").concat(e," ago")},a=function(t){return"http://localhost:3000/".concat(t)}}}]);
//# sourceMappingURL=92-legacy.dc53a521.js.map