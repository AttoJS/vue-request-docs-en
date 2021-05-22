(self.webpackChunken=self.webpackChunken||[]).push([[114],{2210:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>Ae});var n=a(7875);const l=(0,n.uE)('<h1 id="loadmore-api"><a class="header-anchor" href="#loadmore-api">#</a> LoadMore API</h1><p>LoadMore extensions.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token operator">...</span>ReturnValues <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">useLoadMore</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token punctuation">,</span> <span class="token constant">P</span><span class="token punctuation">,</span> <span class="token constant">FR</span><span class="token punctuation">,</span> <span class="token constant">LR</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>Service<span class="token punctuation">,</span> Options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',3),s={class:"custom-container tip"},o=(0,n.Wm)("p",{class:"custom-container-title"},"TS Generic description",-1),r=(0,n.Uk)("Generics not listed are consistent with the definition in the "),i=(0,n.Uk)("Public API"),d=(0,n.Uk)(" chapter"),u=(0,n.Wm)("p",null,[(0,n.Wm)("code",null,"LR"),(0,n.Uk)(" is a generic of "),(0,n.Wm)("a",{href:"#datalist"},[(0,n.Wm)("code",null,"dataList")]),(0,n.Uk)(". ("),(0,n.Wm)("strong",null,"Note:"),(0,n.Uk)(" This generic is subject to "),(0,n.Wm)("code",null,"unknown[]"),(0,n.Uk)(" constraints)")],-1),c=(0,n.Wm)("strong",null,"See also:",-1),p=(0,n.Uk)(),h=(0,n.Uk)("LoadMore"),m={class:"custom-container warning"},g=(0,n.Wm)("p",{class:"custom-container-title"},"Note",-1),k=(0,n.Uk)("The following API is a superset of "),W=(0,n.Uk)("Public API"),f=(0,n.Uk)(". If there are no special instructions, it is consistent with "),U=(0,n.Uk)("Public API"),y=(0,n.Uk)("."),v=(0,n.uE)('<h2 id="return-values"><a class="header-anchor" href="#return-values">#</a> Return Values</h2><h3 id="datalist"><a class="header-anchor" href="#datalist">#</a> dataList</h3><ul><li><p><strong>Type:</strong> <code>Ref&lt;LR&gt;</code></p></li><li><p><strong>Default:</strong> <code>[]</code></p><p>All requests data (data taken from <strong>data[<a href="#listkey">listkey</a>]</strong>) merge array.</p></li></ul><h3 id="loadingmore"><a class="header-anchor" href="#loadingmore">#</a> loadingMore</h3>',4),w=(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Wm)("strong",null,"Type:"),(0,n.Uk)(),(0,n.Wm)("code",null,"Ref<boolean>")])],-1),q=(0,n.Wm)("p",null,[(0,n.Wm)("strong",null,"Default:"),(0,n.Uk)(),(0,n.Wm)("code",null,"false")],-1),R=(0,n.Uk)("Is loading more, used to record whether "),M=(0,n.Wm)("a",{href:"#loadmore"},[(0,n.Wm)("code",null,"loadMore()")],-1),T=(0,n.Uk)(" is triggering. If you want to determine whether "),b=(0,n.Wm)("code",null,"Service",-1),L=(0,n.Uk)(" is requesting, please use "),x=(0,n.Wm)("code",null,"loading",-1),D=(0,n.Uk)("."),I={id:"refreshing"},S=(0,n.Wm)("a",{class:"header-anchor",href:"#refreshing"},"#",-1),P=(0,n.Uk)(" refreshing "),N=(0,n.uE)('<ul><li><p><strong>Type:</strong> <code>Ref&lt;boolean&gt;</code></p></li><li><p><strong>Default:</strong> <code>false</code></p><p>Is refreshing, used to record whether <a href="#refresh"><code>refresh()</code></a> is triggering.</p></li></ul><h3 id="nomore"><a class="header-anchor" href="#nomore">#</a> noMore</h3><ul><li><p><strong>Type:</strong> <code>Ref&lt;boolean&gt;</code></p></li><li><p><strong>Default:</strong> <code>false</code></p><p>Is there have more data, need use with <a href="#isnomore"><code>isNoMore</code></a>.</p></li></ul><h3 id="loadmore"><a class="header-anchor" href="#loadmore">#</a> loadMore</h3><ul><li><p><strong>Type:</strong> <code>() =&gt; void</code></p></li><li><p><strong>Default:</strong> <code>0</code></p><p>Trigger load more.</p></li></ul><h3 id="reload"><a class="header-anchor" href="#reload">#</a> reload</h3><ul><li><p><strong>Type:</strong> <code>() =&gt; void</code></p><p>Trigger reload, used to clear all request status and request data (includes <a href="#datalist"><code>dataList</code></a>), and trigger the request again.</p></li></ul>',7),_={id:"refresh"},j=(0,n.Wm)("a",{class:"header-anchor",href:"#refresh"},"#",-1),A=(0,n.Uk)(" refresh "),K=(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Wm)("strong",null,"Type:"),(0,n.Uk)(),(0,n.Wm)("code",null,"() => void")]),(0,n.Wm)("p",null,[(0,n.Uk)("Re-request data. Unlike "),(0,n.Wm)("a",{href:"#reload"},[(0,n.Wm)("code",null,"reload")]),(0,n.Uk)(", this method will not clear "),(0,n.Wm)("a",{href:"#datalist"},[(0,n.Wm)("code",null,"dataList")]),(0,n.Uk)(" before the end of the request. It can be used to pull down to refresh.")])])],-1),O={id:"queries"},E=(0,n.Wm)("a",{class:"header-anchor",href:"#queries"},"#",-1),C=(0,n.Uk)(" queries "),V=(0,n.Uk)("In "),G=(0,n.Wm)("code",null,"LoadMore",-1),B=(0,n.Uk)(" mode, "),F=(0,n.Uk)("Concurrent Request"),H=(0,n.Uk)(" is not supported"),Y={id:"mutate"},z=(0,n.Wm)("a",{class:"header-anchor",href:"#mutate"},"#",-1),J=(0,n.Uk)(" mutate "),Q=(0,n.Uk)("In "),X=(0,n.Wm)("code",null,"LoadMore",-1),Z=(0,n.Uk)(" mode, "),$=(0,n.Uk)("Mutate"),ee=(0,n.Uk)(" is not supported"),te=(0,n.uE)('<h2 id="service"><a class="header-anchor" href="#service">#</a> Service</h2><h3 id="request-method"><a class="header-anchor" href="#request-method">#</a> Request Method</h3><ul><li><p><strong>Type:</strong></p><ul><li><code>(returnData: ReturnDataType | undefined, ...params: P) =&gt; Promise&lt;R&gt;</code></li><li><code>| (returnData: ReturnDataType | undefined, ...params: P) =&gt; string</code></li><li><code>| (returnData: ReturnDataType | undefined, ...params: P) =&gt; ({ url: string; [key: string]: any; })</code></li></ul></li><li><p><strong>Details:</strong></p><p>The type of the first parameter is explained as follows (when the first request is made, the first parameter is <code>undefined</code>)</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ReturnDataType</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n  data<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">;</span> <span class="token comment">// The result of the last request</span>\n  dataList<span class="token operator">:</span> <span class="token constant">LR</span><span class="token punctuation">;</span> <span class="token comment">// The result of the current request merged array</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n</code></pre></div></li></ul>',3),ae={id:"string"},ne=(0,n.Wm)("a",{class:"header-anchor",href:"#string"},"#",-1),le=(0,n.Uk)(" String "),se=(0,n.Wm)("p",null,[(0,n.Uk)("Not supported in "),(0,n.Wm)("code",null,"LoadMore"),(0,n.Uk)(" mode.")],-1),oe={id:"object"},re=(0,n.Wm)("a",{class:"header-anchor",href:"#object"},"#",-1),ie=(0,n.Uk)(" Object "),de=(0,n.Wm)("p",null,[(0,n.Uk)("Not supported in "),(0,n.Wm)("code",null,"LoadMore"),(0,n.Uk)(" mode.")],-1),ue=(0,n.Wm)("h2",{id:"options"},[(0,n.Wm)("a",{class:"header-anchor",href:"#options"},"#"),(0,n.Uk)(" Options")],-1),ce=(0,n.Wm)("h3",{id:"listkey"},[(0,n.Wm)("a",{class:"header-anchor",href:"#listkey"},"#"),(0,n.Uk)(" listKey")],-1),pe=(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Wm)("strong",null,"Type:"),(0,n.Uk)(),(0,n.Wm)("code",null,"string")])],-1),he=(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[(0,n.Wm)("strong",null,"Default:"),(0,n.Uk)(),(0,n.Wm)("code",null,"list")])],-1),me=(0,n.Wm)("p",null,[(0,n.Wm)("strong",null,"Details:")],-1),ge={class:"custom-container tip"},ke=(0,n.Wm)("p",{class:"custom-container-title"},"Tips",-1),We=(0,n.Wm)("code",null,"listKey",-1),fe=(0,n.Uk)(" is implemented using "),Ue=(0,n.Wm)("code",null,"lodash.get",-1),ye=(0,n.Uk)(", so the path of the object property is supported to get the value. See also "),ve={href:"https://lodash.com/docs/4.17.15#get",target:"_blank",rel:"noopener noreferrer"},we=(0,n.Uk)("lodash document"),qe=(0,n.Uk)("Specify the path of the "),Re=(0,n.Wm)("code",null,"data",-1),Me=(0,n.Uk)(" attribute in "),Te=(0,n.Wm)("a",{href:"#listkey"},[(0,n.Wm)("code",null,"listKey")],-1),be=(0,n.Uk)("."),Le=(0,n.uE)('<h3 id="isnomore"><a class="header-anchor" href="#isnomore">#</a> isNoMore</h3><ul><li><p><strong>Type:</strong> <code>(data: R) =&gt; boolean</code></p></li><li><p><strong>Default:</strong> <code>false</code></p></li><li><p><strong>Details:</strong></p><p>Is there has more data.</p></li></ul>',2),xe={id:"querykey"},De=(0,n.Wm)("a",{class:"header-anchor",href:"#querykey"},"#",-1),Ie=(0,n.Uk)(" queryKey "),Se=(0,n.Uk)("In "),Pe=(0,n.Wm)("code",null,"LoadMore",-1),Ne=(0,n.Uk)(" mode, "),_e=(0,n.Uk)("Concurrent Request"),je=(0,n.Uk)(" is not supported"),Ae={render:function(e,t){const a=(0,n.up)("RouterLink"),Ae=(0,n.up)("Badge"),Ke=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[l,(0,n.Wm)("div",s,[o,(0,n.Wm)("p",null,[r,(0,n.Wm)(a,{to:"/api/index.html"},{default:(0,n.w5)((()=>[i])),_:1}),d]),u]),(0,n.Wm)("p",null,[c,p,(0,n.Wm)(a,{to:"/guide/documentation/advancedUsage.html#loadmore"},{default:(0,n.w5)((()=>[h])),_:1})]),(0,n.Wm)("div",m,[g,(0,n.Wm)("p",null,[k,(0,n.Wm)(a,{to:"/api/index.html"},{default:(0,n.w5)((()=>[W])),_:1}),f,(0,n.Wm)(a,{to:"/api/index.html"},{default:(0,n.w5)((()=>[U])),_:1}),y])]),v,(0,n.Wm)("ul",null,[w,(0,n.Wm)("li",null,[q,(0,n.Wm)("p",null,[R,M,T,(0,n.Wm)(a,{to:"/api/index.html#service"},{default:(0,n.w5)((()=>[b])),_:1}),L,(0,n.Wm)(a,{to:"/api/index.html#loading"},{default:(0,n.w5)((()=>[x])),_:1}),D])])]),(0,n.Wm)("h3",I,[S,P,(0,n.Wm)(Ae,{text:"New in 1.1.0"})]),N,(0,n.Wm)("h3",_,[j,A,(0,n.Wm)(Ae,{text:"New in 1.1.0"})]),K,(0,n.Wm)("h3",O,[E,C,(0,n.Wm)(Ae,{text:"Not Support",type:"danger"})]),(0,n.Wm)("p",null,[V,G,B,(0,n.Wm)(a,{to:"/guide/documentation/queries.html"},{default:(0,n.w5)((()=>[F])),_:1}),H]),(0,n.Wm)("h3",Y,[z,J,(0,n.Wm)(Ae,{text:"Not Support",type:"danger"})]),(0,n.Wm)("p",null,[Q,X,Z,(0,n.Wm)(a,{to:"/guide/documentation/mutate.html"},{default:(0,n.w5)((()=>[$])),_:1}),ee]),te,(0,n.Wm)("h3",ae,[ne,le,(0,n.Wm)(Ae,{text:"Not Support",type:"danger"})]),se,(0,n.Wm)("h3",oe,[re,ie,(0,n.Wm)(Ae,{text:"Not Support",type:"danger"})]),de,ue,ce,(0,n.Wm)("ul",null,[pe,he,(0,n.Wm)("li",null,[me,(0,n.Wm)("div",ge,[ke,(0,n.Wm)("p",null,[We,fe,Ue,ye,(0,n.Wm)("a",ve,[we,(0,n.Wm)(Ke)])])])])]),(0,n.Wm)("p",null,[qe,(0,n.Wm)(a,{to:"/api/#data"},{default:(0,n.w5)((()=>[Re])),_:1}),Me,Te,be]),Le,(0,n.Wm)("h3",xe,[De,Ie,(0,n.Wm)(Ae,{text:"Not Support",type:"danger"})]),(0,n.Wm)("p",null,[Se,Pe,Ne,(0,n.Wm)(a,{to:"/guide/documentation/queries.html"},{default:(0,n.w5)((()=>[_e])),_:1}),je])],64)}}},4488:(e,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>n});const n={key:"v-4bd15160",path:"/api/loadMore.html",title:"LoadMore API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Return Values",slug:"return-values",children:[{level:3,title:"dataList",slug:"datalist",children:[]},{level:3,title:"loadingMore",slug:"loadingmore",children:[]},{level:3,title:"refreshing",slug:"refreshing",children:[]},{level:3,title:"noMore",slug:"nomore",children:[]},{level:3,title:"loadMore",slug:"loadmore",children:[]},{level:3,title:"reload",slug:"reload",children:[]},{level:3,title:"refresh",slug:"refresh",children:[]},{level:3,title:"queries",slug:"queries",children:[]},{level:3,title:"mutate",slug:"mutate",children:[]}]},{level:2,title:"Service",slug:"service",children:[{level:3,title:"Request Method",slug:"request-method",children:[]},{level:3,title:"String",slug:"string",children:[]},{level:3,title:"Object",slug:"object",children:[]}]},{level:2,title:"Options",slug:"options",children:[{level:3,title:"listKey",slug:"listkey",children:[]},{level:3,title:"isNoMore",slug:"isnomore",children:[]},{level:3,title:"queryKey",slug:"querykey",children:[]}]}],filePathRelative:"api/loadMore.md",git:{updatedTime:162167432e4,contributors:[]}}}}]);