"use strict";(self.webpackChunken=self.webpackChunken||[]).push([[592],{16932:(e,a,t)=>{t.r(a),t.d(a,{default:()=>ge});var n=t(27875);const l=(0,n.uE)('<h1 id="pagination-api" tabindex="-1"><a class="header-anchor" href="#pagination-api" aria-hidden="true">#</a> Pagination API</h1><p>Pagination extension.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token operator">...</span>ReturnValues <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">usePagination</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token punctuation">,</span> <span class="token constant">P</span><span class="token punctuation">,</span> <span class="token constant">FR</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>Service<span class="token punctuation">,</span> Options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',3),o=(0,n._)("strong",null,"See also:",-1),s=(0,n.Uk)(),i=(0,n.Uk)("Pagination"),r={class:"custom-container warning"},u=(0,n._)("p",{class:"custom-container-title"},"Note",-1),p=(0,n.Uk)("The following API is a superset of "),c=(0,n.Uk)("Public API"),d=(0,n.Uk)(". If there are no special instructions, it is consistent with "),h=(0,n.Uk)("Public API"),g=(0,n.Uk)("."),k=(0,n.uE)('<h2 id="return-values" tabindex="-1"><a class="header-anchor" href="#return-values" aria-hidden="true">#</a> Return Values</h2><h3 id="current" tabindex="-1"><a class="header-anchor" href="#current" aria-hidden="true">#</a> current</h3><ul><li><p><strong>Type:</strong> <code>Ref&lt;number&gt;</code></p></li><li><p><strong>Default:</strong> <code>1</code></p><p>Current page number. We listened to this value internally. When you modify the <code>current</code> directly, we will trigger the <a href="#changecurrent"><code>changeCurrent</code></a> method. So you can use it with <code>v-model</code>.</p></li></ul><h3 id="pagesize" tabindex="-1"><a class="header-anchor" href="#pagesize" aria-hidden="true">#</a> pageSize</h3><ul><li><p><strong>Type:</strong> <code>Ref&lt;number&gt;</code></p></li><li><p><strong>Default:</strong> <code>10</code></p><p>The number of items per page. We have monitored this value internally, and when you directly modify the <code>pageSize</code>, we will trigger the <a href="#changepagesize"><code>changePageSize</code></a> method automatically. So you can use it with <code>v-model</code>.</p></li></ul><h3 id="total" tabindex="-1"><a class="header-anchor" href="#total" aria-hidden="true">#</a> total</h3><ul><li><p><strong>Type:</strong> <code>Ref&lt;number&gt;</code></p></li><li><p><strong>Default:</strong> <code>0</code></p><p>The total number of data.</p></li></ul><h3 id="totalpage" tabindex="-1"><a class="header-anchor" href="#totalpage" aria-hidden="true">#</a> totalPage</h3><ul><li><p><strong>Type:</strong> <code>Ref&lt;number&gt;</code></p></li><li><p><strong>Default:</strong> <code>0</code></p><p>The total number of pages, you must provide the correct <a href="#total"><code>total</code></a> and <a href="#pagesize"><code>pageSize</code></a>, otherwise, you may get incorrect values.</p></li></ul><h3 id="changecurrent" tabindex="-1"><a class="header-anchor" href="#changecurrent" aria-hidden="true">#</a> changeCurrent</h3><ul><li><p><strong>Type:</strong> <code>(current: number) =&gt; void</code></p><p>Modify the current page number.</p></li></ul><h3 id="changepagesize" tabindex="-1"><a class="header-anchor" href="#changepagesize" aria-hidden="true">#</a> changePageSize</h3><ul><li><p><strong>Type:</strong> <code>(pageSize: number) =&gt; void</code></p><p>Modify the number of entries per page.</p></li></ul>',13),f={id:"changepagination",tabindex:"-1"},_=(0,n._)("a",{class:"header-anchor",href:"#changepagination","aria-hidden":"true"},"#",-1),m=(0,n.Uk)(" changePagination "),y=(0,n.uE)('<ul><li><p><strong>Type:</strong> <code>(current: number, pageSize: number) =&gt; void</code></p><p>Modify <code>pageSize</code> and <code>current</code>.</p></li></ul><h3 id="reload" tabindex="-1"><a class="header-anchor" href="#reload" aria-hidden="true">#</a> reload</h3>',2),b=(0,n._)("p",null,[(0,n._)("strong",null,"Type:"),(0,n.Uk)(),(0,n._)("code",null,"() => void")],-1),v=(0,n.Uk)("Clear all request status and request results (including "),U=(0,n._)("code",null,"data",-1),P=(0,n.Uk)("), and use "),w=(0,n._)("code",null,"defaultParams",-1),S=(0,n.Uk)(" to trigger "),x=(0,n._)("code",null,"run()",-1),z={id:"queries",tabindex:"-1"},q=(0,n._)("a",{class:"header-anchor",href:"#queries","aria-hidden":"true"},"#",-1),W=(0,n.Uk)(" queries "),T=(0,n.Uk)("In paging mode, "),R=(0,n.Uk)("Concurrent Request"),K=(0,n.Uk)(" is not supported"),C=(0,n.uE)('<h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2><h3 id="pagination" tabindex="-1"><a class="header-anchor" href="#pagination" aria-hidden="true">#</a> pagination</h3><ul><li><p><strong>Type:</strong></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>\n  currentKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  pageSizeKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  totalKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  totalPageKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li><li><p><strong>Details:</strong></p></li></ul>',3),D={class:"custom-container tip"},I=(0,n._)("p",{class:"custom-container-title"},"Tips",-1),A=(0,n.Uk)("Both "),E=(0,n._)("code",null,"totalKey",-1),N=(0,n.Uk)(" and "),O=(0,n._)("code",null,"totalPageKey",-1),M=(0,n.Uk)(" are implemented using "),V=(0,n._)("code",null,"lodash.get",-1),Y=(0,n.Uk)(", so the path of the object property is supported to get the value. See also "),B={href:"https://lodash.com/docs/4.17.15#get",target:"_blank",rel:"noopener noreferrer"},F=(0,n.Uk)("lodash document"),J=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",null,"pagination Field"),(0,n._)("th",null,"Description"),(0,n._)("th",null,"Defaults")])],-1),L=(0,n._)("tr",null,[(0,n._)("td",null,"currentKey"),(0,n._)("td",null,[(0,n.Uk)("You can use this value to specify the attribute value of the interface "),(0,n._)("strong",null,"current page number"),(0,n.Uk)(" parameter.")]),(0,n._)("td",null,[(0,n._)("code",null,"'current'")])],-1),j=(0,n._)("tr",null,[(0,n._)("td",null,"pageSizeKey"),(0,n._)("td",null,[(0,n.Uk)("You can use this value to specify the interface "),(0,n._)("strong",null,"get the number of items per page"),(0,n.Uk)(" the attribute value of the parameter.")]),(0,n._)("td",null,[(0,n._)("code",null,"'pageSize'")])],-1),H=(0,n._)("td",null,"totalKey",-1),G=(0,n.Uk)("Specify the path of the "),Q=(0,n._)("a",{href:"#total"},[(0,n._)("code",null,"total")],-1),X=(0,n.Uk)(" attribute in "),Z=(0,n._)("code",null,"data",-1),$=(0,n.Uk)("."),ee=(0,n._)("td",null,[(0,n._)("code",null,"'total'")],-1),ae=(0,n._)("td",null,"totalPageKey",-1),te=(0,n.Uk)("Specify the path of the "),ne=(0,n._)("code",null,"data",-1),le=(0,n.Uk)(" attribute in "),oe=(0,n._)("a",{href:"#totalpage"},[(0,n._)("code",null,"totalPage")],-1),se=(0,n.Uk)("."),ie=(0,n._)("td",null,[(0,n._)("code",null,"'totalPage'")],-1),re={id:"querykey",tabindex:"-1"},ue=(0,n._)("a",{class:"header-anchor",href:"#querykey","aria-hidden":"true"},"#",-1),pe=(0,n.Uk)(" queryKey "),ce=(0,n.Uk)("In paging mode, "),de=(0,n.Uk)("Concurrent Request"),he=(0,n.Uk)(" is not supported"),ge={render:function(e,a){const t=(0,n.up)("RouterLink"),ge=(0,n.up)("Badge"),ke=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.iD)(n.HY,null,[l,(0,n._)("p",null,[o,s,(0,n.Wm)(t,{to:"/guide/documentation/pagination.html"},{default:(0,n.w5)((()=>[i])),_:1})]),(0,n._)("div",r,[u,(0,n._)("p",null,[p,(0,n.Wm)(t,{to:"/api/"},{default:(0,n.w5)((()=>[c])),_:1}),d,(0,n.Wm)(t,{to:"/api/"},{default:(0,n.w5)((()=>[h])),_:1}),g])]),k,(0,n._)("h3",f,[_,m,(0,n.Wm)(ge,{text:"New in 1.2.0"})]),y,(0,n._)("ul",null,[(0,n._)("li",null,[b,(0,n._)("p",null,[v,(0,n.Wm)(t,{to:"/api/#data"},{default:(0,n.w5)((()=>[U])),_:1}),P,(0,n.Wm)(t,{to:"/api/#defaultparams"},{default:(0,n.w5)((()=>[w])),_:1}),S,(0,n.Wm)(t,{to:"/api/#run"},{default:(0,n.w5)((()=>[x])),_:1})])])]),(0,n._)("h3",z,[q,W,(0,n.Wm)(ge,{text:"Not Support",type:"danger"})]),(0,n._)("p",null,[T,(0,n.Wm)(t,{to:"/guide/documentation/queries.html"},{default:(0,n.w5)((()=>[R])),_:1}),K]),C,(0,n._)("div",D,[I,(0,n._)("p",null,[A,E,N,O,M,V,Y,(0,n._)("a",B,[F,(0,n.Wm)(ke)])])]),(0,n._)("table",null,[J,(0,n._)("tbody",null,[L,j,(0,n._)("tr",null,[H,(0,n._)("td",null,[G,Q,X,(0,n.Wm)(t,{to:"/api/#data"},{default:(0,n.w5)((()=>[Z])),_:1}),$]),ee]),(0,n._)("tr",null,[ae,(0,n._)("td",null,[te,(0,n.Wm)(t,{to:"/api/#data"},{default:(0,n.w5)((()=>[ne])),_:1}),le,oe,se]),ie])])]),(0,n._)("h3",re,[ue,pe,(0,n.Wm)(ge,{text:"Not Support",type:"danger"})]),(0,n._)("p",null,[ce,(0,n.Wm)(t,{to:"/guide/documentation/queries.html"},{default:(0,n.w5)((()=>[de])),_:1}),he])],64)}}},3640:(e,a,t)=>{t.r(a),t.d(a,{data:()=>n});const n={key:"v-e260681e",path:"/api/pagination.html",title:"Pagination API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Return Values",slug:"return-values",children:[{level:3,title:"current",slug:"current",children:[]},{level:3,title:"pageSize",slug:"pagesize",children:[]},{level:3,title:"total",slug:"total",children:[]},{level:3,title:"totalPage",slug:"totalpage",children:[]},{level:3,title:"changeCurrent",slug:"changecurrent",children:[]},{level:3,title:"changePageSize",slug:"changepagesize",children:[]},{level:3,title:"changePagination",slug:"changepagination",children:[]},{level:3,title:"reload",slug:"reload",children:[]},{level:3,title:"queries",slug:"queries",children:[]}]},{level:2,title:"Options",slug:"options",children:[{level:3,title:"pagination",slug:"pagination",children:[]},{level:3,title:"queryKey",slug:"querykey",children:[]}]}],filePathRelative:"api/pagination.md",git:{updatedTime:1631095383e3,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);