(self.webpackChunken=self.webpackChunken||[]).push([[592],{204:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>pe});var n=a(7875);const l=(0,n.uE)('<h1 id="pagination-api"><a class="header-anchor" href="#pagination-api">#</a> Pagination API</h1><p>Pagination extension.</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> <span class="token operator">...</span>ReturnValues <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token generic-function"><span class="token function">usePagination</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token punctuation">,</span> <span class="token constant">P</span><span class="token punctuation">,</span> <span class="token constant">FR</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>Service<span class="token punctuation">,</span> Options<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre></div>',3),s=(0,n.Wm)("strong",null,"See also:",-1),o=(0,n.Uk)(),r=(0,n.Uk)("Pagination"),i={class:"custom-container warning"},u=(0,n.Wm)("p",{class:"custom-container-title"},"Note",-1),p=(0,n.Uk)("The following API is a superset of "),c=(0,n.Uk)("Public API"),d=(0,n.Uk)(". If there are no special instructions, it is consistent with "),g=(0,n.Uk)("Public API"),h=(0,n.Uk)("."),m=(0,n.uE)('<h2 id="return-values"><a class="header-anchor" href="#return-values">#</a> Return Values</h2><h3 id="current"><a class="header-anchor" href="#current">#</a> current</h3><ul><li><p><strong>Type:</strong> <code>Ref&lt;number&gt;</code></p></li><li><p><strong>Default:</strong> <code>1</code></p><p>Current page number. We listened to this value internally. When you modify the <code>current</code> directly, we will trigger the <a href="#changecurrent"><code>changeCurrent</code></a> method. So you can use it with <code>v-model</code>.</p></li></ul><h3 id="pagesize"><a class="header-anchor" href="#pagesize">#</a> pageSize</h3><ul><li><p><strong>Type:</strong> <code>Ref&lt;number&gt;</code></p></li><li><p><strong>Default:</strong> <code>10</code></p><p>The number of items per page. We have monitored this value internally, and when you directly modify the <code>pageSize</code>, we will trigger the <a href="#changepagesize"><code>changePageSize</code></a> method automatically. So you can use it with <code>v-model</code>.</p></li></ul><h3 id="total"><a class="header-anchor" href="#total">#</a> total</h3><ul><li><p><strong>Type:</strong> <code>Ref&lt;number&gt;</code></p></li><li><p><strong>Default:</strong> <code>0</code></p><p>The total number of data.</p></li></ul><h3 id="totalpage"><a class="header-anchor" href="#totalpage">#</a> totalPage</h3><ul><li><p><strong>Type:</strong> <code>Ref&lt;number&gt;</code></p></li><li><p><strong>Default:</strong> <code>0</code></p><p>The total number of pages, you must provide the correct <a href="#total"><code>total</code></a> and <a href="#pagesize"><code>pageSize</code></a>, otherwise, you may get incorrect values.</p></li></ul><h3 id="changecurrent"><a class="header-anchor" href="#changecurrent">#</a> changeCurrent</h3><ul><li><p><strong>Type:</strong> <code>(current: number) =&gt; void</code></p><p>Modify the current page number.</p></li></ul><h3 id="changepagesize"><a class="header-anchor" href="#changepagesize">#</a> changePageSize</h3><ul><li><p><strong>Type:</strong> <code>(pageSize: number) =&gt; void</code></p><p>Modify the number of entries per page.</p></li></ul><h3 id="reload"><a class="header-anchor" href="#reload">#</a> reload</h3>',14),k=(0,n.Wm)("p",null,[(0,n.Wm)("strong",null,"Type:"),(0,n.Uk)(),(0,n.Wm)("code",null,"() => void")],-1),W=(0,n.Uk)("Clear all request status and request results (including "),f=(0,n.Wm)("code",null,"data",-1),y=(0,n.Uk)("), and use "),v=(0,n.Wm)("code",null,"defaultParams",-1),U=(0,n.Uk)(" to trigger "),b=(0,n.Wm)("code",null,"run()",-1),w={id:"queries"},P=(0,n.Wm)("a",{class:"header-anchor",href:"#queries"},"#",-1),S=(0,n.Uk)(" queries "),z=(0,n.Uk)("In paging mode, "),q=(0,n.Uk)("Concurrent Request"),T=(0,n.Uk)(" is not supported"),R=(0,n.uE)('<h2 id="options"><a class="header-anchor" href="#options">#</a> Options</h2><h3 id="pagination"><a class="header-anchor" href="#pagination">#</a> pagination</h3><ul><li><p><strong>Type:</strong></p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token punctuation">{</span>\n  currentKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  pageSizeKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  totalKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n  totalPageKey<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre></div></li><li><p><strong>Details:</strong></p></li></ul>',3),K={class:"custom-container tip"},_=(0,n.Wm)("p",{class:"custom-container-title"},"Tips",-1),C=(0,n.Uk)("Both "),I=(0,n.Wm)("code",null,"totalKey",-1),D=(0,n.Uk)(" and "),x=(0,n.Wm)("code",null,"totalPageKey",-1),A=(0,n.Uk)(" are implemented using "),O=(0,n.Wm)("code",null,"lodash.get",-1),E=(0,n.Uk)(", so the path of the object property is supported to get the value. See also "),N={href:"https://lodash.com/docs/4.17.15#get",target:"_blank",rel:"noopener noreferrer"},V=(0,n.Uk)("lodash document"),Y=(0,n.Wm)("thead",null,[(0,n.Wm)("tr",null,[(0,n.Wm)("th",null,"pagination Field"),(0,n.Wm)("th",null,"Description"),(0,n.Wm)("th",null,"Defaults")])],-1),j=(0,n.Wm)("tr",null,[(0,n.Wm)("td",null,"currentKey"),(0,n.Wm)("td",null,[(0,n.Uk)("You can use this value to specify the attribute value of the interface "),(0,n.Wm)("strong",null,"current page number"),(0,n.Uk)(" parameter.")]),(0,n.Wm)("td",null,[(0,n.Wm)("code",null,"'current'")])],-1),B=(0,n.Wm)("tr",null,[(0,n.Wm)("td",null,"pageSizeKey"),(0,n.Wm)("td",null,[(0,n.Uk)("You can use this value to specify the interface "),(0,n.Wm)("strong",null,"get the number of items per page"),(0,n.Uk)(" the attribute value of the parameter.")]),(0,n.Wm)("td",null,[(0,n.Wm)("code",null,"'pageSize'")])],-1),F=(0,n.Wm)("td",null,"totalKey",-1),L=(0,n.Uk)("Specify the path of the "),M=(0,n.Wm)("a",{href:"#total"},[(0,n.Wm)("code",null,"total")],-1),H=(0,n.Uk)(" attribute in "),G=(0,n.Wm)("code",null,"data",-1),J=(0,n.Uk)("."),Q=(0,n.Wm)("td",null,[(0,n.Wm)("code",null,"'total'")],-1),X=(0,n.Wm)("td",null,"totalPageKey",-1),Z=(0,n.Uk)("Specify the path of the "),$=(0,n.Wm)("code",null,"data",-1),ee=(0,n.Uk)(" attribute in "),te=(0,n.Wm)("a",{href:"#totalpage"},[(0,n.Wm)("code",null,"totalPage")],-1),ae=(0,n.Uk)("."),ne=(0,n.Wm)("td",null,[(0,n.Wm)("code",null,"'totalPage'")],-1),le={id:"querykey"},se=(0,n.Wm)("a",{class:"header-anchor",href:"#querykey"},"#",-1),oe=(0,n.Uk)(" queryKey "),re=(0,n.Uk)("In paging mode, "),ie=(0,n.Uk)("Concurrent Request"),ue=(0,n.Uk)(" is not supported"),pe={render:function(e,t){const a=(0,n.up)("RouterLink"),pe=(0,n.up)("Badge"),ce=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[l,(0,n.Wm)("p",null,[s,o,(0,n.Wm)(a,{to:"/guide/documentation/advancedUsage.html#pagination"},{default:(0,n.w5)((()=>[r])),_:1})]),(0,n.Wm)("div",i,[u,(0,n.Wm)("p",null,[p,(0,n.Wm)(a,{to:"/api/"},{default:(0,n.w5)((()=>[c])),_:1}),d,(0,n.Wm)(a,{to:"/api/"},{default:(0,n.w5)((()=>[g])),_:1}),h])]),m,(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[k,(0,n.Wm)("p",null,[W,(0,n.Wm)(a,{to:"/api/#data"},{default:(0,n.w5)((()=>[f])),_:1}),y,(0,n.Wm)(a,{to:"/api/#defaultparams"},{default:(0,n.w5)((()=>[v])),_:1}),U,(0,n.Wm)(a,{to:"/api/#run"},{default:(0,n.w5)((()=>[b])),_:1})])])]),(0,n.Wm)("h3",w,[P,S,(0,n.Wm)(pe,{text:"Not Support",type:"danger"})]),(0,n.Wm)("p",null,[z,(0,n.Wm)(a,{to:"/guide/documentation/queries.html"},{default:(0,n.w5)((()=>[q])),_:1}),T]),R,(0,n.Wm)("div",K,[_,(0,n.Wm)("p",null,[C,I,D,x,A,O,E,(0,n.Wm)("a",N,[V,(0,n.Wm)(ce)])])]),(0,n.Wm)("table",null,[Y,(0,n.Wm)("tbody",null,[j,B,(0,n.Wm)("tr",null,[F,(0,n.Wm)("td",null,[L,M,H,(0,n.Wm)(a,{to:"/api/#data"},{default:(0,n.w5)((()=>[G])),_:1}),J]),Q]),(0,n.Wm)("tr",null,[X,(0,n.Wm)("td",null,[Z,(0,n.Wm)(a,{to:"/api/#data"},{default:(0,n.w5)((()=>[$])),_:1}),ee,te,ae]),ne])])]),(0,n.Wm)("h3",le,[se,oe,(0,n.Wm)(pe,{text:"Not Support",type:"danger"})]),(0,n.Wm)("p",null,[re,(0,n.Wm)(a,{to:"/guide/documentation/queries.html"},{default:(0,n.w5)((()=>[ie])),_:1}),ue])],64)}}},3640:(e,t,a)=>{"use strict";a.r(t),a.d(t,{data:()=>n});const n={key:"v-e260681e",path:"/api/pagination.html",title:"Pagination API",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Return Values",slug:"return-values",children:[{level:3,title:"current",slug:"current",children:[]},{level:3,title:"pageSize",slug:"pagesize",children:[]},{level:3,title:"total",slug:"total",children:[]},{level:3,title:"totalPage",slug:"totalpage",children:[]},{level:3,title:"changeCurrent",slug:"changecurrent",children:[]},{level:3,title:"changePageSize",slug:"changepagesize",children:[]},{level:3,title:"reload",slug:"reload",children:[]},{level:3,title:"queries",slug:"queries",children:[]}]},{level:2,title:"Options",slug:"options",children:[{level:3,title:"pagination",slug:"pagination",children:[]},{level:3,title:"queryKey",slug:"querykey",children:[]}]}],filePathRelative:"api/pagination.md",git:{updatedTime:1621417083e3,contributors:[]}}}}]);