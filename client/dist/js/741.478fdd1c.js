"use strict";(self["webpackChunkclient"]=self["webpackChunkclient"]||[]).push([[741],{356:function(t,e,n){n.d(e,{Z:function(){return R}});var o=n(6252),s=n(3577),a=n(9963);const r={class:"w-full flex flex-col gap-5"},i={class:"w-full mx-auto bg-neutral-50 dark:bg-neutral-600 dark:text-white shadow-md rounded"},m={class:"text-xs font-bold text-gray-500 dark:text-gray-300 pt-2 pl-2"},l={class:"flex flex-col px-4"},c={class:"p-2 py-5 border-b"},u={class:"font-bold text-xl dark:text-white text-black"},d={class:"py-4 px-3"},p={class:"py-2 w-full bg-neutral-50 dark:bg-neutral-600 dark:text-white drop-shadow-md rounded"},h={class:"px-5 py-5"},f={key:0},w=(0,o.Uk)(" Comments: "),g={key:1},v={key:2};function y(t,e,n,y,x,b){const I=(0,o.up)("show-more-button"),_=(0,o.up)("input-comment"),C=(0,o.up)("comment-single");return(0,o.wg)(),(0,o.iD)("div",r,[(0,o._)("div",i,[(0,o._)("div",m,[(0,o._)("span",null,"Posted by: "+(0,s.zw)(n.post.user.username)+": "+(0,s.zw)(b.createdAt),1)]),(0,o._)("div",l,[(0,o._)("div",c,[(0,o._)("h3",u,(0,s.zw)(n.post.title),1)]),(0,o.Wm)(I,null,{section:(0,o.w5)((()=>[(0,o._)("div",d,(0,s.zw)(n.post.str),1)])),_:1})])]),(0,o._)("div",p,[(0,o.Wm)(_,{postComments:n.post.comments,postId:n.post.id},null,8,["postComments","postId"]),(0,o._)("div",h,[x.showComments?((0,o.wg)(),(0,o.iD)("div",f,[w,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(n.post.comments,(t=>((0,o.wg)(),(0,o.j4)(C,{key:t.id,comment:t},null,8,["comment"])))),128))])):n.post.comments.length>0?((0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("button",{class:"w-full hover:text-blue-400 p-2 text-md",onClick:e[0]||(e[0]=(0,a.iM)((t=>x.showComments=!x.showComments),["prevent"]))}," Show comments ")])):((0,o.wg)(),(0,o.iD)("div",v,"No comments"))])])])}const x={class:"p-2"},b={class:"text-xs font-semibold"},I={class:"pl-2"};function _(t,e,n,a,r,i){return(0,o.wg)(),(0,o.iD)("div",x,[(0,o._)("div",b,(0,s.zw)(n.comment.user.username)+": "+(0,s.zw)(i.createdAt),1),(0,o._)("div",I,(0,s.zw)(n.comment.text),1)])}var C=n(8225),k={props:{comment:Object},computed:{createdAt(){return(0,C.Mu)(this.comment.createdAt)}}},S=n(3744);const $=(0,S.Z)(k,[["render",_]]);var A=$;const M={class:"p-2 flex flex-col justify-center"},T={class:"w-100 flex justify-center"};function D(t,e,n,s,r,i){return(0,o.wg)(),(0,o.iD)("div",M,[(0,o._)("form",{class:"flex flex-col gap-5",onSubmit:e[2]||(e[2]=(0,a.iM)((t=>i.comment()),["prevent"]))},[(0,o._)("div",T,[(0,o._)("button",{onKeyup:e[0]||(e[0]=(0,a.D2)(((...e)=>t.submit&&t.submit(...e)),["enter"])),class:"text-md rounded-full border shadow-md border-blue-400 bg-white px-5 py-1 transition-all hover:bg-blue-400 hover:text-white hover:dark:text-white dark:bg-sky-800 dark:border-0 hover:dark:bg-sky-700"}," Comment ",32)]),(0,o.wy)((0,o._)("textarea",{"onUpdate:modelValue":e[1]||(e[1]=t=>r.commentText=t),class:"form-textarea rounded border w-full h-12 max-h-24 mb-0.5 shadow-lg transition-all resize-none hover:h-24 focus:h-24 dark:bg-neutral-700",placeholder:"Insert comment here"},null,512),[[a.nr,r.commentText]])],32)])}var j=n(2262),O={props:{postId:String,postComments:Array},setup(t){const e=(0,o.f3)("authenticated"),n=(0,j.Vh)(t,"postComments");return{comments:n,isAuthenticated:e}},data(){return{commentText:""}},methods:{async comment(){if(""==this.commentText)return;const t=await fetch("http://localhost:3000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n          mutation CREATE_COMMENT($userId: String!, $postId: String!, $commentInput: CommentInput!) {\n            createComment(userId: $userId, postId: $postId, commentInput: $commentInput) {\n              id\n              text\n              user {\n                id\n                username\n              }\n              replies {\n                id\n                text\n              }\n            }\n          }\n          ",variables:{userId:JSON.parse(sessionStorage.getItem("user")).id,postId:this.postId,commentInput:{text:this.commentText}}})}).then((t=>t.json())).then((t=>t.data.createComment));console.log(this.comments),this.comments.push(t),this.commentText=""}}};const P=(0,S.Z)(O,[["render",D]]);var z=P;const N=(0,o._)("div",{class:"blur group-hover:bg-black/60 w-full h-10 transition-all ease-in-out"},null,-1),U=(0,o._)("div",{class:"group-hover:opacity-100 opacity-0 relative bottom-10"}," Show more ",-1),q=[N,U];function E(t,e,n,a,r,i){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",{ref:"mainPost",class:(0,s.C_)(["p-2 overflow-hidden",r.showMore?"":"max-h-72"])},[(0,o.WI)(t.$slots,"section")],2),(0,o._)("button",{class:(0,s.C_)([r.showMore?"hidden":"","w-full absolute bottom-0 h-10 text-center text-white leading-9"]),onClick:e[0]||(e[0]=t=>r.showMore=!r.showMore)},q,2)],64)}var Z={data(){return{showMore:!1}},mounted(){this.showMore=this.$refs.mainPost.offsetHeight==this.$refs.mainPost.scrollHeight}};const H=(0,S.Z)(Z,[["render",E]]);var Y=H,J={props:{post:Object},data(){return{showComments:!1}},computed:{createdAt(){return(0,C.Mu)(this.post.createdAt)}},components:{CommentSingle:A,InputComment:z,ShowMoreButton:Y}};const V=(0,S.Z)(J,[["render",y]]);var R=V},5741:function(t,e,n){n.r(e),n.d(e,{default:function(){return y}});var o=n(6252),s=n(3577);const a={class:"flex flex-row gap-4"},r=["src"],i={class:"font-semibold text-2xl"},m={class:"text-sm"},l={class:"flex justify-center"},c={class:"flex flex-col items-center w-1/2 gap-3"},u={class:"flex gap-3 bg-neutral-50 shadow-sm roudned w-full p-3"},d=(0,o._)("input",{class:"p-1 pl-10 w-full",placeholder:"Create Post",type:"text"},null,-1);function p(t,e,n,p,h,f){const w=(0,o.up)("router-link"),g=(0,o.up)("post-single");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",a,[(0,o._)("button",{onClick:e[0]||(e[0]=t=>f.addImage())},[(0,o._)("img",{src:f.avatarImageSrc,class:"w-10",alt:"community image"},null,8,r)]),(0,o._)("div",null,[(0,o._)("h2",i,(0,s.zw)(h.community.name),1),(0,o._)("p",m,(0,s.zw)(h.community.description),1)])]),(0,o._)("div",l,[(0,o._)("div",c,[(0,o._)("div",u,[(0,o.Wm)(w,{to:{name:"createPostView",params:{}}},{default:(0,o.w5)((()=>[d])),_:1})]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.community.posts,(t=>((0,o.wg)(),(0,o.j4)(g,{key:t.id,post:t},null,8,["post"])))),128))])])],64)}var h=n(356),f=n(8225),w={name:"communityDetailsView",components:{PostSingle:h.Z},data(){return{community:Object}},async created(){this.community=await fetch("http://localhost:3000/graphql",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({query:"\n            query GET_COMMUNITY($communityId: String!) {\n                community(communityId: $communityId) {\n                    id\n                    name\n                    description\n                    avatarImage\n                    posts {\n                        id\n                        title\n                        str\n                        createdAt\n                        user {\n                            id\n                            username\n                        }\n                        comments {\n                            id\n                            text\n                            createdAt\n                            user {\n                              id\n                              username\n                            }\n                        }\n                    }\n                    admin {\n                      id\n                    }\n                }\n            }",variables:{communityId:this.$route.params.id}})}).then((t=>t.json())).then((t=>t.data.community))},methods:{async addImage(){if(this.community.admin.id!=JSON.parse(sessionStorage.getItem("user")).id)return;const t=document.createElement("input"),e=new FormData;t.type="file",t.click(),t.addEventListener("change",(async()=>{if(0==t.files.length)return;e.append("operations",JSON.stringify({query:"\n            mutation UPLOAD_AVATAR_COMMUNITY($communityId: String!, $file: Upload!) {\n              changeAvatar(file: $file, communityId: $communityId) {\n                id\n                avatarImage\n              }\n            }",variables:{communityId:this.$route.params.id,file:null}})),e.append("map",'{ "0": ["variables.file"] }'),e.append("0",t.files[0]);const n=await fetch("http://localhost:3000/graphql",{method:"POST",body:e}).then((t=>t.json())).then((t=>t.data.changeAvatar));this.community.avatarImage=n.avatarImage}))}},computed:{avatarImageSrc(){return(0,f.Rd)(this.community.avatarImage)}}},g=n(3744);const v=(0,g.Z)(w,[["render",p]]);var y=v},8225:function(t,e,n){n.d(e,{PS:function(){return o},ET:function(){return s},Mu:function(){return a},Rd:function(){return r}});const o=t=>{let e=t.split("").reduce(((t,e)=>e==e.toUpperCase()?`${t} ${e}`:t+e));return e[0].toUpperCase()+e.slice(1)},s=(t,e,n)=>t.map((t=>({text:t[e],value:t[n]}))),a=t=>{let e=Math.abs(new Date(t)-new Date)/1e3,n="days";return e<60?n="seconds":e<3600?(e/=60,n="minutes"):e<216e3&&(e/=3600,n="hours"),`${e.toFixed(0)} ${n} ago`},r=t=>`http://localhost:3000/${t}`}}]);
//# sourceMappingURL=741.478fdd1c.js.map