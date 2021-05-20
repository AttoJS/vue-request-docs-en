(self.webpackChunken=self.webpackChunken||[]).push([[276],{7895:(n,s,a)=>{"use strict";a.r(s),a.d(s,{default:()=>h});var t=a(7875);const p=(0,t.Wm)("h1",{id:"refresh-on-window-focus"},[(0,t.Wm)("a",{class:"header-anchor",href:"#refresh-on-window-focus"},"#"),(0,t.Uk)(" Refresh On Window Focus")],-1),o=(0,t.Uk)("Sometimes, you need to ensure data consistency between multiple browser windows; or when the user's computer is reactivated in the dormant state, the page data needs to be synchronized to the latest state. "),e=(0,t.Wm)("code",null,"refreshOnWindowFocus",-1),c=(0,t.Uk)(" may save you a lot of logic code, as shown below, you only need to enable "),u=(0,t.Wm)("code",null,"refreshOnWindowFocus",-1),l=(0,t.Uk)("."),i=(0,t.Wm)("div",{class:"custom-container tip"},[(0,t.Wm)("p",{class:"custom-container-title"},"Tips"),(0,t.Wm)("p",null,"You can try to switch the window or hide the window and then switch back to observe the following example (the default interval is 5 seconds)")],-1),k=(0,t.uE)('<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">&#39;@name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>testService<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      refreshOnWindowFocus<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">random name: </span><span class="token punctuation">{</span>loading<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&#39;loading...&#39;</span> <span class="token operator">:</span> data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div></div><h2 id="refocustimespan"><a class="header-anchor" href="#refocustimespan">#</a> RefocusTimespan</h2>',2),r=(0,t.Uk)("If you don’t want users to frequently trigger "),d=(0,t.Wm)("code",null,"refreshOnWindowFocus",-1),m=(0,t.Uk)(" in a short time to cause frequent requests, you can modify ["),f=(0,t.Wm)("code",null,"refocusTimespan",-1),w=(0,t.Uk)("](../.. /api/index.md#refocustimespan) to extend the trigger interval, as shown below"),g=(0,t.uE)('<div class="language-tsx ext-tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> Mock <span class="token keyword">from</span> <span class="token string">&#39;mockjs&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">testService</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span></span><span class="token punctuation">(</span><span class="token parameter">resolve</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n      <span class="token function">resolve</span><span class="token punctuation">(</span>Mock<span class="token punctuation">.</span><span class="token function">mock</span><span class="token punctuation">(</span><span class="token string">&#39;@name&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  name<span class="token operator">:</span> <span class="token string">&#39;App&#39;</span><span class="token punctuation">,</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span>testService<span class="token punctuation">,</span> <span class="token punctuation">{</span>\n      refreshOnWindowFocus<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      refocusTimespan<span class="token operator">:</span> <span class="token number">2000</span><span class="token punctuation">,</span> <span class="token comment">// 2000ms</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span><span class="token plain-text">random name: </span><span class="token punctuation">{</span>loading<span class="token punctuation">.</span>value <span class="token operator">?</span> <span class="token string">&#39;loading...&#39;</span> <span class="token operator">:</span> data<span class="token punctuation">.</span>value<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div></div>',1),h={render:function(n,s){const a=(0,t.up)("RouterLink"),h=(0,t.up)("RefreshOnWindowFocusDemo"),b=(0,t.up)("Demo");return(0,t.wg)(),(0,t.j4)(t.HY,null,[p,(0,t.Wm)("p",null,[o,(0,t.Wm)(a,{to:"/api/#refreshonwindowfocus"},{default:(0,t.w5)((()=>[e])),_:1}),c,(0,t.Wm)(a,{to:"/api/#refreshonwindowfocus"},{default:(0,t.w5)((()=>[u])),_:1}),l]),i,(0,t.Wm)(b,null,{default:(0,t.w5)((()=>[(0,t.Wm)(h)])),_:1}),k,(0,t.Wm)("p",null,[r,(0,t.Wm)(a,{to:"/api/#refreshonwindowfocus"},{default:(0,t.w5)((()=>[d])),_:1}),m,f,w]),g],64)}}},2548:(n,s,a)=>{"use strict";a.r(s),a.d(s,{data:()=>t});const t={key:"v-141987ca",path:"/guide/documentation/refreshOnWindowFocus.html",title:"Refresh On Window Focus",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"RefocusTimespan",slug:"refocustimespan",children:[]}],filePathRelative:"guide/documentation/refreshOnWindowFocus.md",git:{updatedTime:1621482699e3,contributors:[]}}}}]);