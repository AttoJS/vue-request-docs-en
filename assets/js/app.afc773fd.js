(self.webpackChunken=self.webpackChunken||[]).push([[143],{9756:(e,n,t)=>{"use strict";t.d(n,{g:()=>pe});var a=t(2393),o=t(2855),l=t(1053),i=t(7875);const u=(0,i.HX)("data-v-6bca7330");(0,i.dD)("data-v-6bca7330");const d={class:"demo"};(0,i.Cn)();const r=u(((e,n,t,a,o,l)=>{const r=(0,i.up)("ClientOnly");return(0,i.wg)(),(0,i.j4)("div",d,[(0,i.Wm)(r,null,{default:u((()=>[(0,i.WI)(e.$slots,"default",{},void 0,!0)])),_:3})])})),m={};m.render=r,m.__scopeId="data-v-6bca7330";const s=m;var c=t(641);const h=(0,i.aZ)({setup(){const e=(0,c.iH)(!1);(0,i.bv)((()=>{(0,i.Y3)((()=>{const n=document.getElementsByTagName("meta")["attojs-site-env"];e.value=n&&"CN"===n.content}))}));const n=(0,i.Fl)((()=>e.value?[(0,i.h)("a",{href:"https://beian.miit.gov.cn/"},"粤ICP备18051424号")," | "]:[]));return()=>(0,i.h)("div",{class:"footer"},[...n.value,"MIT Licensed | Copyright ©2020-present AttoJS"])}});h.__scopeId="data-v-cf6935ba";const v=h;var p=t(4825),g=t(6144);function b(e){return new Promise((n=>{setTimeout((()=>{n(e)}),1e3)}))}const f=(0,i.aZ)({name:"App",setup(){const e=(0,c.iH)("John"),{run:n,data:t,loading:a}=(0,g.QT)(b,{manual:!0}),o=()=>{n(e.value)};return()=>(0,i.Wm)("div",null,[a.value?"loading...":t.value?`hello, ${t.value}`:"",(0,i.Wm)("br",null,null),(0,i.wy)((0,i.Wm)("input",{"onUpdate:modelValue":n=>e.value=n,type:"text",placeholder:"Enter your account"},null),[[p.nr,e.value]]),(0,i.Wm)("br",null,null),(0,i.Wm)("button",{onClick:o},[(0,i.Uk)("Login")])])}});let W=0;function y(){return new Promise((e=>{setTimeout((()=>{e(W++)}),1e3)}))}const k=(0,i.aZ)({name:"App",setup(){const{data:e,loading:n}=(0,g.QT)(y,{pollingInterval:1e3});return()=>(0,i.Wm)("h1",null,[n.value?"loading...":e.value])}});let C=0;function T(){return new Promise((e=>{setTimeout((()=>{e(C++)}),1e3)}))}const w=(0,i.aZ)({name:"App",setup(){const{data:e,loading:n}=(0,g.QT)(T,{pollingInterval:1e3,pollingWhenHidden:!0});return()=>(0,i.Wm)("h1",null,[n.value?"loading...":e.value])}});let R=0;function x(){return new Promise((e=>{setTimeout((()=>{e(R++)}),1e3)}))}const D=(0,i.aZ)({name:"App",setup(){const{data:e,loading:n}=(0,g.QT)(x,{pollingInterval:1e3,pollingWhenOffline:!0});return()=>(0,i.Wm)("h1",null,[n.value?"loading...":e.value])}});function U(e){return new Promise((n=>{setTimeout((()=>{var t;const a=null==(t=P.find((n=>n.id===e)))?void 0:t.name;n(`${a} status update successfully`)}),1e3)}))}const P=[{id:1,name:"Benny"},{id:2,name:"John"},{id:3,name:"Sam"}],Z=(0,i.aZ)({name:"App",setup(){const{run:e,loading:n}=(0,g.QT)(U,{manual:!0,onSuccess:e=>{alert(e)}});return()=>(0,i.Wm)("ul",null,[P.map((t=>(0,i.Wm)("li",null,[(0,i.Wm)("span",null,[t.name,(0,i.Uk)(" ")]),(0,i.Wm)("button",{onClick:()=>e(t.id)},[n.value?"loading...":"disable"])])))])}});function q(e){return new Promise((n=>{setTimeout((()=>{var t;const a=null==(t=A.find((n=>n.id===e)))?void 0:t.name;n(`${a} status update successfully`)}),1e3)}))}const A=[{id:1,name:"Benny"},{id:2,name:"John"},{id:3,name:"Sam"}],I=(0,i.aZ)({name:"App",setup(){const{run:e,queries:n}=(0,g.QT)(q,{manual:!0,queryKey:e=>String(e),onSuccess:e=>{alert(e)}});return()=>(0,i.Wm)("ul",null,[A.map((t=>{var a;return(0,i.Wm)("li",null,[(0,i.Wm)("span",null,[t.name,(0,i.Uk)(" ")]),(0,i.Wm)("button",{onClick:()=>e(t.id)},[(null==(a=n[t.id])?void 0:a.loading)?"loading...":"disable"])])}))])}});var L=t(9731),Q=t.n(L);function F(e){return new Promise((e=>{setTimeout((()=>{e(Q().mock("@name"))}),1e3)}))}const S=(0,i.aZ)({name:"App",setup(){const e=(0,c.iH)("John"),{data:n,mutate:t,loading:a}=(0,g.QT)(F);return()=>(0,i.Wm)("div",null,[(0,i.Wm)("div",null,[(0,i.Uk)("name: "),a.value?"loading...":n.value]),(0,i.Wm)("br",null,null),(0,i.Wm)("div",null,[(0,i.wy)((0,i.Wm)("input",{type:"text","onUpdate:modelValue":n=>e.value=n},null),[[p.nr,e.value]]),(0,i.Wm)("button",{onClick:()=>t(e.value)},[(0,i.Uk)(" Edit ")])])])}});function M(){return new Promise((e=>{setTimeout((()=>{e("token")}),1e3)}))}function O(){return new Promise((e=>{setTimeout((()=>{e(Q().mock("@name"))}),1e3)}))}const H=(0,i.aZ)({name:"App",setup(){const{data:e,loading:n,run:t}=(0,g.QT)(M,{manual:!0}),{data:a,loading:o}=(0,g.QT)(O,{ready:(0,i.Fl)((()=>!!e.value))});return()=>(0,i.Wm)("div",null,[(0,i.Wm)("div",null,[a.value?`User Name: ${a.value}`:o.value?"loading...":"Please login first"]),(0,i.Wm)("br",null,null),(0,i.Wm)("button",{disabled:!!e.value,onClick:()=>t()},[n.value?"Login...":"Login"])])}});function N(){return new Promise((e=>{setTimeout((()=>{e(Q().mock({"array|3-5":["@name"]}))}),1e3)}))}const j=(0,i.aZ)({name:"App",setup(){const{data:e,loading:n,run:t}=(0,g.QT)(N,{throttleInterval:300,manual:!0});return()=>{var a,o;return(0,i.Wm)("div",null,[(0,i.Wm)("input",{placeholder:"Enter the name",type:"text",onInput:()=>t()},null),(0,i.Wm)("br",null,null),(0,i.Wm)("ul",null,[n.value?"loading...":null==(o=null==(a=e.value)?void 0:a.array)?void 0:o.map((e=>(0,i.Wm)("li",{key:e},[e])))])])}}});function z(){return new Promise((e=>{setTimeout((()=>{e(Q().mock({"array|3-5":["@name"]}))}),1e3)}))}const E=(0,i.aZ)({name:"App",setup(){const{data:e,loading:n,run:t}=(0,g.QT)(z,{debounceInterval:300,manual:!0});return()=>{var a,o;return(0,i.Wm)("div",null,[(0,i.Wm)("input",{placeholder:"Enter the name",type:"text",onInput:()=>t()},null),(0,i.Wm)("br",null,null),(0,i.Wm)("ul",null,[n.value?"loading...":null==(o=null==(a=e.value)?void 0:a.array)?void 0:o.map((e=>(0,i.Wm)("li",{key:e},[e])))])])}}});function V(){return new Promise((e=>{setTimeout((()=>{e(Q().mock("@name"))}),1e3)}))}const G=(0,i.aZ)({name:"App",setup(){const{data:e,loading:n}=(0,g.QT)(V,{refreshOnWindowFocus:!0});return()=>(0,i.Wm)("div",null,[(0,i.Uk)("random name: "),n.value?"loading...":e.value])}}),J=Q().mock({"array|5":["@cname"]}),$=Q().mock({"array|5":["@name"]}),B=(0,i.aZ)({name:"App",setup(){const e=(0,c.iH)(0),{data:n,loading:t}=(0,g.QT)((()=>{return n=e.value,new Promise((e=>{setTimeout((()=>{e(n?$.array:J.array)}),1e3)}));var n}),{refreshDeps:[e]});return()=>(0,i.Wm)("div",null,[(0,i.Wm)("div",null,[(0,i.Wm)("input",{type:"radio",id:"contactChoice1",checked:0===e.value,onChange:()=>e.value=0},null),(0,i.Wm)("label",{htmlFor:"contactChoice1"},[(0,i.Uk)("Chinese Names")]),(0,i.Uk)("   "),(0,i.Wm)("input",{type:"radio",id:"contactChoice2",checked:1===e.value,onChange:()=>e.value=1},null),(0,i.Wm)("label",{htmlFor:"contactChoice2"},[(0,i.Uk)("English Names")])]),(0,i.Wm)("ul",null,[t.value?"loading...":n.value.map((e=>(0,i.Wm)("li",null,[e])))])])}});function _(){return new Promise((e=>{setTimeout((()=>{e((new Date).getTime())}),100)}))}const K=(0,i.aZ)({name:"App",setup(){const{data:e,loading:n,run:t}=(0,g.QT)(_,{loadingDelay:500}),{data:a,loading:o,run:l}=(0,g.QT)(_);return()=>(0,i.Wm)("div",null,[(0,i.Wm)("button",{onClick:()=>{l(),t()}},[(0,i.Uk)("run")]),(0,i.Wm)("br",null,null),(0,i.Wm)("br",null,null),(0,i.Wm)("div",null,[(0,i.Uk)("Current Time (default): "),o.value?"loading...":a.value]),(0,i.Wm)("div",null,[(0,i.Uk)("Current Time (delay): "),n.value?"loading...":e.value])])}});function Y(){return new Promise((e=>{setTimeout((()=>{e(Q().mock("@paragraph"))}),1e3)}))}const X=(0,i.aZ)({name:"CacheComponent",setup(){const{data:e,loading:n}=(0,g.QT)(Y,{cacheKey:"paragraph"});return()=>(0,i.Wm)("div",null,[(0,i.Wm)("div",null,[(0,i.Uk)(" "),!e.value&&n.value?"loading...":"",(0,i.Uk)(" ")]),(0,i.Wm)("div",null,[e.value])])}}),ee=(0,i.aZ)({name:"App",setup(){const e=(0,c.iH)(!0);return()=>(0,i.Wm)("div",null,[(0,i.Wm)("button",{onClick:()=>e.value=!e.value},[e.value?"hidden":"show"]),(0,i.Wm)("br",null,null),(0,i.Wm)("br",null,null),e.value&&(0,i.Wm)(X,null,null)])}});let ne=!0;function te(){return new Promise(((e,n)=>{ne?setTimeout((()=>{n("Request failed")}),2e3):setTimeout((()=>{e(Q().mock("@name"))}),1e3)}))}const ae=(0,i.aZ)({name:"App",setup(){const e=(0,c.iH)(0),n=(0,c.iH)(ne),{data:t,loading:a,run:o}=(0,g.QT)(te,{errorRetryCount:5,onError:()=>e.value++,onSuccess:()=>e.value=0});return(0,i.m0)((()=>{ne=n.value})),()=>(0,i.Wm)("div",null,[(0,i.Wm)("button",{onClick:()=>n.value=!n.value},[(0,i.Uk)("switch to "),(0,i.Wm)("b",null,[n.value?"success":"error"]),(0,i.Uk)(" request")]),(0,i.Uk)("   "),(0,i.Wm)("button",{onClick:()=>{e.value=0,o()}},[(0,i.Uk)("run")]),(0,i.Wm)("br",null,null),(0,i.Wm)("br",null,null),(0,i.Wm)("div",{style:{height:"32px"}},[e.value>0&&`error times: ${e.value}`]),(0,i.Wm)("br",null,null),(0,i.Wm)("div",{style:{height:"32px"}},[a.value?e.value?"retry loading...":"loading...":t.value])])}});var oe=t(1319),le=t(8304);function ie(){return new Promise((e=>{setTimeout((()=>{e({total:100,result:Q().mock({"array|5":["@name"]}).array})}),1e3)}))}t(7026),t(6854);const ue=(0,i.aZ)({name:"App",setup(){const{data:e,current:n,total:t,loading:a,pageSize:o,changeCurrent:l}=(0,g.h0)(ie);return()=>{var u;return(0,i.Wm)("div",null,[(0,i.Wm)("div",{style:{height:"140px"}},[a.value?(0,i.Wm)(oe.g,null,null):(0,i.Wm)("ul",null,[null==(u=e.value)?void 0:u.result.map((e=>(0,i.Wm)("li",{key:e},[e])))])]),(0,i.Wm)(le.t,{"prev-text":"Previous","next-text":"Next",modelValue:n.value,"total-items":t.value,"show-page-size":o.value,"force-ellipses":!0,onChange:e=>l(e)},null)])}}});var de=t(2987),re=t(5652),me=t(5257),se=t(877);function ce(e){var n;const t=((null==(n=null==e?void 0:e.data)?void 0:n.current)||0)+1;return new Promise((e=>{setTimeout((()=>{e(function(e,n=10){let t=[];return t=e<=n?Q().mock({"list|10":["@name"]}).list:[],{current:e,total:n,list:t}}(t))}),1e3)}))}t(6821),t(9804),t(4867),t(6069);const he=(0,i.aZ)({name:"App",setup(){const{loadMore:e,loadingMore:n,dataList:t,noMore:a,refreshing:o,reload:l,refresh:u}=(0,g.BR)(ce,{isNoMore:e=>(null==e?void 0:e.current)>=(null==e?void 0:e.total)}),d=()=>{var e;null==(e=document.querySelector(".list"))||e.scrollTo({top:0,behavior:"smooth"}),u()};return()=>(0,i.Wm)("div",null,[(0,i.Wm)(de.z,{style:"margin-bottom: 20px",type:"warning",size:"mini",onClick:()=>{l()}},{default:()=>[(0,i.Uk)("Reload")]}),(0,i.Wm)(de.z,{style:"margin-bottom: 20px",type:"warning",size:"mini",onClick:d},{default:()=>[(0,i.Uk)("Refresh")]}),(0,i.Wm)("div",{class:"list",style:"height: 300px; overflow-y: scroll"},[(0,i.Wm)(re.I,{"pulling-text":"pull down to refresh...","loosing-text":"release to refresh...","loading-text":"refreshing...",modelValue:o.value,onRefresh:()=>u()},{default:()=>[(0,i.Wm)(me.a,{loading:n.value,"loading-text":"loading...",finished:a.value,"finished-text":"no more",onLoad:()=>{e()}},{default:()=>{var e;return[null==(e=t.value)?void 0:e.map(((e,n)=>(0,i.Wm)(se.b,{key:e,value:`${n}  ${e}`},null)))]}})]})])])}});var ve=t(2290);const pe=[a.Z,o.Z,l.Z,({app:e})=>{e.component("Demo",s),e.component("Footer",v),e.component("ManualDemo",f),e.component("pollingDemo",k),e.component("pollingWhenHiddenDemo",w),e.component("pollingWhenOfflineDemo",D),e.component("queriesBadDemo",Z),e.component("queriesDemo",I),e.component("MutateDemo",S),e.component("ReadyDemo",H),e.component("ThrottleDemo",j),e.component("DebounceDemo",E),e.component("RefreshOnWindowFocusDemo",G),e.component("RefreshDepsDemo",B),e.component("LoadingDelayDemo",K),e.component("CacheDemo",ee),e.component("ErrorRetryDemo",ae),e.component("PaginationDemo",ue),e.component("LoadMoreDemo",he)},ve.Z]},8968:(e,n,t)=>{"use strict";t.d(n,{p:()=>l});var a=t(8137),o=t(3203);const l=[a.Z,o.Z]},6539:(e,n,t)=>{"use strict";t.d(n,{l:()=>u});var a=t(6451),o=t(7450),l=t(9377),i=t(4882);const u=[a.Z,o.Z,l.Z,i.Z]},4702:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var a=t(7875);const o={404:(0,a.RC)((()=>t.e(887).then(t.bind(t,4887)))),Layout:(0,a.RC)((()=>t.e(197).then(t.bind(t,7197))))}},2467:(e,n,t)=>{"use strict";t.d(n,{b:()=>o});var a=t(7875);const o={"v-8daa1a0e":(0,a.RC)((()=>t.e(509).then(t.bind(t,7773)))),"v-bb9fcf52":(0,a.RC)((()=>t.e(6).then(t.bind(t,5540)))),"v-744497ce":(0,a.RC)((()=>t.e(671).then(t.bind(t,145)))),"v-4bd15160":(0,a.RC)((()=>t.e(114).then(t.bind(t,4135)))),"v-e260681e":(0,a.RC)((()=>t.e(592).then(t.bind(t,204)))),"v-fb0f0066":(0,a.RC)((()=>t.e(170).then(t.bind(t,2079)))),"v-1c7b2593":(0,a.RC)((()=>t.e(617).then(t.bind(t,5295)))),"v-041f880a":(0,a.RC)((()=>t.e(471).then(t.bind(t,5210)))),"v-5d1e647b":(0,a.RC)((()=>t.e(782).then(t.bind(t,3974)))),"v-6fa8152f":(0,a.RC)((()=>t.e(694).then(t.bind(t,7154)))),"v-3d6dd5d7":(0,a.RC)((()=>t.e(183).then(t.bind(t,9074)))),"v-62cf96d0":(0,a.RC)((()=>t.e(186).then(t.bind(t,2434)))),"v-77327eb8":(0,a.RC)((()=>t.e(546).then(t.bind(t,2110)))),"v-1324f911":(0,a.RC)((()=>t.e(966).then(t.bind(t,4676)))),"v-0b36a592":(0,a.RC)((()=>t.e(555).then(t.bind(t,9751)))),"v-5e1b0e12":(0,a.RC)((()=>t.e(251).then(t.bind(t,7375)))),"v-7f1d6617":(0,a.RC)((()=>t.e(995).then(t.bind(t,9297)))),"v-0825d054":(0,a.RC)((()=>t.e(683).then(t.bind(t,162)))),"v-964bff12":(0,a.RC)((()=>t.e(388).then(t.bind(t,3306)))),"v-4b535f1b":(0,a.RC)((()=>t.e(95).then(t.bind(t,8442)))),"v-141987ca":(0,a.RC)((()=>t.e(276).then(t.bind(t,7895)))),"v-74534cee":(0,a.RC)((()=>t.e(841).then(t.bind(t,880)))),"v-3706649a":(0,a.RC)((()=>t.e(88).then(t.bind(t,2246))))}},7962:(e,n,t)=>{"use strict";t.d(n,{T:()=>a});const a={"v-8daa1a0e":()=>t.e(509).then(t.bind(t,3301)).then((({data:e})=>e)),"v-bb9fcf52":()=>t.e(6).then(t.bind(t,4502)).then((({data:e})=>e)),"v-744497ce":()=>t.e(671).then(t.bind(t,3535)).then((({data:e})=>e)),"v-4bd15160":()=>t.e(114).then(t.bind(t,4488)).then((({data:e})=>e)),"v-e260681e":()=>t.e(592).then(t.bind(t,3640)).then((({data:e})=>e)),"v-fb0f0066":()=>t.e(170).then(t.bind(t,74)).then((({data:e})=>e)),"v-1c7b2593":()=>t.e(617).then(t.bind(t,4394)).then((({data:e})=>e)),"v-041f880a":()=>t.e(471).then(t.bind(t,3374)).then((({data:e})=>e)),"v-5d1e647b":()=>t.e(782).then(t.bind(t,1503)).then((({data:e})=>e)),"v-6fa8152f":()=>t.e(694).then(t.bind(t,5030)).then((({data:e})=>e)),"v-3d6dd5d7":()=>t.e(183).then(t.bind(t,7239)).then((({data:e})=>e)),"v-62cf96d0":()=>t.e(186).then(t.bind(t,5670)).then((({data:e})=>e)),"v-77327eb8":()=>t.e(546).then(t.bind(t,9181)).then((({data:e})=>e)),"v-1324f911":()=>t.e(966).then(t.bind(t,4055)).then((({data:e})=>e)),"v-0b36a592":()=>t.e(555).then(t.bind(t,7877)).then((({data:e})=>e)),"v-5e1b0e12":()=>t.e(251).then(t.bind(t,8314)).then((({data:e})=>e)),"v-7f1d6617":()=>t.e(995).then(t.bind(t,4637)).then((({data:e})=>e)),"v-0825d054":()=>t.e(683).then(t.bind(t,5507)).then((({data:e})=>e)),"v-964bff12":()=>t.e(388).then(t.bind(t,2916)).then((({data:e})=>e)),"v-4b535f1b":()=>t.e(95).then(t.bind(t,272)).then((({data:e})=>e)),"v-141987ca":()=>t.e(276).then(t.bind(t,2548)).then((({data:e})=>e)),"v-74534cee":()=>t.e(841).then(t.bind(t,8257)).then((({data:e})=>e)),"v-3706649a":()=>t.e(88).then(t.bind(t,6425)).then((({data:e})=>e))}},6178:(e,n,t)=>{"use strict";t.d(n,{g:()=>o});var a=t(6364);const o=[["v-8daa1a0e","/","",["/index.html","/index.md"]],["v-bb9fcf52","/api/global-options.html","Global Options",["/api/global-options.md"]],["v-744497ce","/api/","Public API",["/api/index.html","/api/index.md"]],["v-4bd15160","/api/loadMore.html","LoadMore API",["/api/loadMore.md"]],["v-e260681e","/api/pagination.html","Pagination API",["/api/pagination.md"]],["v-fb0f0066","/guide/getting-started.html","Getting Started",["/guide/getting-started.md"]],["v-1c7b2593","/guide/introduction.html","Introduction",["/guide/introduction.md"]],["v-041f880a","/guide/documentation/advancedUsage.html","Advanced Usage",["/guide/documentation/advancedUsage.md"]],["v-5d1e647b","/guide/documentation/cacheKey.html","Cache / Preload",["/guide/documentation/cacheKey.md"]],["v-6fa8152f","/guide/documentation/debounce.html","Debounce",["/guide/documentation/debounce.md"]],["v-3d6dd5d7","/guide/documentation/default-request.html","Default Request",["/guide/documentation/default-request.md"]],["v-62cf96d0","/guide/documentation/errorRetry.html","Error Retry",["/guide/documentation/errorRetry.md"]],["v-77327eb8","/guide/documentation/global-options.html","Global Options",["/guide/documentation/global-options.md"]],["v-1324f911","/guide/documentation/loadingDelay.html","Loading Delay",["/guide/documentation/loadingDelay.md"]],["v-0b36a592","/guide/documentation/manual.html","Manually Trigger",["/guide/documentation/manual.md"]],["v-5e1b0e12","/guide/documentation/mutate.html","Mutate",["/guide/documentation/mutate.md"]],["v-7f1d6617","/guide/documentation/polling.html","Polling",["/guide/documentation/polling.md"]],["v-0825d054","/guide/documentation/queries.html","Concurrent Request",["/guide/documentation/queries.md"]],["v-964bff12","/guide/documentation/ready.html","Dependent Request",["/guide/documentation/ready.md"]],["v-4b535f1b","/guide/documentation/refreshDeps.html","Dependency Refresh",["/guide/documentation/refreshDeps.md"]],["v-141987ca","/guide/documentation/refreshOnWindowFocus.html","Refresh On Window Focus",["/guide/documentation/refreshOnWindowFocus.md"]],["v-74534cee","/guide/documentation/throttle.html","Throttle",["/guide/documentation/throttle.md"]],["v-3706649a","/404.html","",[]]].reduce(((e,[n,t,o,l])=>(e.push({name:n,path:t,component:a.Y,meta:{title:o}},...l.map((e=>({path:e,redirect:t})))),e)),[{name:"404",path:"/:catchAll(.*)",component:a.Y}])},9901:(e,n,t)=>{"use strict";t.d(n,{H:()=>a});const a={base:"/",lang:"en-US",title:"",description:"",head:[],locales:{"/":{lang:"en-US",title:"VueRequest",description:"vue-request - A request library for Vue 3.",head:[["link",{rel:"icon",type:"image/png",sizes:"32x32",href:"logo@32px.png"}],["link",{rel:"icon",type:"image/png",sizes:"16x16",href:"logo@16px.png"}],["link",{rel:"shortcut icon",type:"image/png",sizes:"16x16",href:"logo@16px.png"}],["link",{rel:"manifest",href:"/manifest.webmanifest"}],["link",{rel:"alternate",hreflang:"en",href:"https://en.attojs.com/"}],["link",{rel:"alternate",hreflang:"zh-cn",href:"https://www.attojs.com/"}],["meta",{name:"application-name",content:"VueRequest"}],["meta",{"http-equiv":"Content-Type",content:"text/html; charset=UTF-8"}],["meta",{name:"apple-mobile-web-app-title",content:"VueRequest"}],["meta",{name:"apple-mobile-web-app-status-bar-style",content:"black"}],["meta",{name:"baidu-site-verification",content:"code-kq0ZWRB0uD"}],["meta",{name:"google-site-verification",content:"-zekuAhD-WeZ_iSgC4Js4rVeJ3CxzjRxIpiJN6TL7go"}],["meta",{name:"keywords",content:"vue-request, vue3, vue request, axios, vue, vuejs, js, request, fetch, vue-next, swr, 请求, vue请求库"}],["meta",{name:"attojs-site-env",content:"CN"}],["script",{src:"https://hm.baidu.com/hm.js?9ff6837028ca9b7ed17fc684b9f946a2"}],["meta",{name:"description",content:"vue-request - Vue 3 composition API for data fetching, supports SWR, polling, error retry, cache request, loading status, pagination, infinite load, etc."}]]}}}},7212:(e,n,t)=>{"use strict";t.d(n,{f:()=>a});const a={logo:"logo@100px.png",repo:"attojs/vue-request",docsRepo:"attojs/vue-request-doc",docsBranch:"release",editLink:!1,locales:{"/":{navbar:[{text:"Documentation",link:"/guide/introduction.html"},{text:"API Reference",link:"/api/index.html"},{text:"Languages",children:[{text:"中文",link:"https://www.attojs.com/"}]}],sidebar:{"/guide/":[{text:"Guide",isGroup:!0,children:["/guide/introduction.html","/guide/getting-started.html"]},{text:"Documentation",isGroup:!0,children:["/guide/documentation/global-options.html","/guide/documentation/default-request.html","/guide/documentation/manual.html","/guide/documentation/mutate.html","/guide/documentation/polling.html","/guide/documentation/queries.html","/guide/documentation/ready.html","/guide/documentation/debounce.html","/guide/documentation/throttle.html","/guide/documentation/cacheKey.html","/guide/documentation/errorRetry.html","/guide/documentation/loadingDelay.html","/guide/documentation/refreshDeps.html","/guide/documentation/refreshOnWindowFocus.html","/guide/documentation/advancedUsage.html"]}],"/api/":[{text:"API Reference",isGroup:!0,children:["/api/index.html","/api/global-options.html","/api/pagination.html","/api/loadMore.html"]}]},selectLanguageName:"English",danger:"WARNING"}},navbar:[],selectLanguageText:"Languages",selectLanguageAriaLabel:"Select language",sidebar:"auto",sidebarDepth:2,editLinkText:"Edit this page",lastUpdated:!0,lastUpdatedText:"Last Updated",contributors:!0,contributorsText:"Contributors",notFound:["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."],backToHome:"Take me home",openInNewWindow:"open in new window"}}},e=>{"use strict";e.O(0,[477,154],(()=>(1198,e(e.s=1198)))),e.O()}]);