"use strict";(self.webpackChunken=self.webpackChunken||[]).push([[497],{58915:(n,a,s)=>{s.r(a),s.d(a,{default:()=>E});var t=s(27875);const o=(0,t._)("h1",{id:"loadmore",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#loadmore","aria-hidden":"true"},"#"),(0,t.Uk)(" LoadMore")],-1),e={class:"custom-container warning"},p=(0,t._)("p",{class:"custom-container-title"},"Note",-1),c=(0,t.Uk)("In "),k=(0,t._)("code",null,"LoadMore",-1),u=(0,t.Uk)(" mode, only "),l=(0,t._)("strong",null,"Request Method",-1),_=(0,t.Uk)(" is supported."),i=(0,t.Uk)("We will automatically help you manage the list data. The data structure returned by "),r=(0,t._)("code",null,"Service",-1),U=(0,t.Uk)(" must contain "),d=(0,t._)("code",null,"{list: LR[]}",-1),m=(0,t.Uk)(". If not, you can specify another key name with "),g=(0,t._)("code",null,"listKey",-1),h=(0,t.Uk)(" or convert it once with "),f=(0,t._)("code",null,"formatResult()",-1),v=(0,t.Uk)(". Then we can get the requested data list collection through the returned "),w=(0,t._)("code",null,"dataList",-1),y=(0,t.Uk)(" variable, and then use "),L=(0,t._)("code",null,"loadMore()",-1),M=(0,t.Uk)(" to trigger loading more."),q=(0,t.Uk)("In addition, we will pass in the first parameter of the "),N=(0,t._)("code",null,"Request Method",-1),b=(0,t.Uk)(),x=(0,t._)("code",null,"{data: R, dataList: LR}",-1),S=(0,t.Uk)(". You can decide the parameters of the next request based on these parameters."),R=(0,t.Uk)("See more available configurations: "),W=(0,t.Uk)("LoadMore API"),D=(0,t.uE)('<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useLoadMore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n</code></pre></div><h2 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h2>',3),I=(0,t.Uk)("You can also use it with "),B=(0,t._)("code",null,"ant-design-vue",-1),A=(0,t.Uk)(". Here we provide a demo, "),j={href:"https://2x.antdv.com/components/list#components-list-demo-loadmore",target:"_blank",rel:"noopener noreferrer"},C=(0,t.Uk)("click to view"),P=(0,t._)("div",{class:"language-vue ext-vue"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("div")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("load-more-container"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NSpin")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("load-more-container__list"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":show"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("refreshing"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NList")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"bordered"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NListItem")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-for"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("item in dataList"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":key"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("item.id"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"#prefix"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NAvatar")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("{{ item.name[0] }}"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NAvatar")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"#suffix"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n            "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("span")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("load-more-container__list-suffix"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("{{ item.job }}"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("span")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          {{ item.name }}\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NListItem")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NList")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NSpin")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NSpace")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"class"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("load-more-container__page"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"justify"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("center"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NButton")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"type"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("primary"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":disabled"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("noMore"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":loading"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("loadingMore"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"@click"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("loadMore"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        {{ noMore ? 'No more data' : 'Load more' }}\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NButton")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NButton")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":loading"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("refreshing"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"@click"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("refresh"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)(" Refresh "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NButton")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NSpace")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("div")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("ts"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" NAvatar"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NButton"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NList"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NListItem"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NSpace"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NSpin "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'naive-ui'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" computed"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" defineComponent "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" useLoadMore "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue-request'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\ntype Data "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  data"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    id"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" number"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    name"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" string"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    avatar"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" string"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    job"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" string"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token punctuation"},"]"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  total"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" number"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"testService"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("params"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" data"),(0,t._)("span",{class:"token operator"},"?"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" Data"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)(" dataList"),(0,t._)("span",{class:"token operator"},"?"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" Data"),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'data'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" p "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" limit"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"10"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("params"),(0,t._)("span",{class:"token operator"},"?."),(0,t.Uk)("dataList"),(0,t._)("span",{class:"token operator"},"?."),(0,t.Uk)("length "),(0,t._)("span",{class:"token operator"},"!=="),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"undefined"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    p"),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'page'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" params"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("dataList"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("length "),(0,t._)("span",{class:"token operator"},"/"),(0,t.Uk)(" p"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("limit "),(0,t._)("span",{class:"token operator"},"+"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"1"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"else"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    p"),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'page'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"1"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    url"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token template-string"},[(0,t._)("span",{class:"token template-punctuation string"},"`"),(0,t._)("span",{class:"token string"},"https://61273138c2e8920017bc0b3c.mockapi.io/api/users?"),(0,t._)("span",{class:"token interpolation"},[(0,t._)("span",{class:"token interpolation-punctuation punctuation"},"${"),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"URLSearchParams"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("p "),(0,t._)("span",{class:"token keyword"},"as"),(0,t.Uk)(" any"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token interpolation-punctuation punctuation"},"}")]),(0,t._)("span",{class:"token template-punctuation string"},"`")]),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"defineComponent"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  name"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'LoadMore'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  components"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    NList"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NListItem"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NButton"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NSpin"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NAvatar"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NSpace"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"setup"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" loadingMore"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" dataList"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" refreshing"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" loadMore"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" refresh "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(" useLoadMore"),(0,t._)("span",{class:"token operator"},"<"),(0,t.Uk)("\n      Data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      Parameters"),(0,t._)("span",{class:"token operator"},"<"),(0,t._)("span",{class:"token keyword"},"typeof"),(0,t.Uk)(" testService"),(0,t._)("span",{class:"token operator"},">"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      Data"),(0,t._)("span",{class:"token punctuation"},"["),(0,t._)("span",{class:"token string"},"'data'"),(0,t._)("span",{class:"token punctuation"},"]"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token operator"},">"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("testService"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      listKey"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'data'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" noMore "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"computed"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(" dataList"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("length "),(0,t._)("span",{class:"token operator"},"==="),(0,t.Uk)(" data"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value"),(0,t._)("span",{class:"token operator"},"?."),(0,t.Uk)("total"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      dataList"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      loadingMore"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      loadMore"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      noMore"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      refreshing"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      refresh"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("style")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"scoped"),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("scss"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token style"}),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("style")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])])],-1),E={render:function(n,a){const s=(0,t.up)("RouterLink"),E=(0,t.up)("OutboundLink"),T=(0,t.up)("Demo");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,(0,t._)("div",e,[p,(0,t._)("p",null,[c,k,u,(0,t.Wm)(s,{to:"/api/loadMore.html#request-method"},{default:(0,t.w5)((()=>[l])),_:1}),_])]),(0,t._)("p",null,[i,(0,t.Wm)(s,{to:"/api/loadMore.html#service"},{default:(0,t.w5)((()=>[r])),_:1}),U,d,m,(0,t.Wm)(s,{to:"/api/loadMore.html#listkey"},{default:(0,t.w5)((()=>[g])),_:1}),h,(0,t.Wm)(s,{to:"/api/index.html#formatresult"},{default:(0,t.w5)((()=>[f])),_:1}),v,(0,t.Wm)(s,{to:"/api/loadMore.html#datalist"},{default:(0,t.w5)((()=>[w])),_:1}),y,(0,t.Wm)(s,{to:"/api/loadMore.html#loadmore"},{default:(0,t.w5)((()=>[L])),_:1}),M]),(0,t._)("p",null,[q,(0,t.Wm)(s,{to:"/api/loadMore.html#request-method"},{default:(0,t.w5)((()=>[N])),_:1}),b,x,S]),(0,t._)("p",null,[R,(0,t.Wm)(s,{to:"/api/loadMore.html"},{default:(0,t.w5)((()=>[W])),_:1})]),D,(0,t._)("blockquote",null,[(0,t._)("p",null,[I,B,A,(0,t._)("a",j,[C,(0,t.Wm)(E)])])]),(0,t.Wm)(T,{name:"LoadMoreDemo",title:"LoadMore demo"},{default:(0,t.w5)((()=>[P])),_:1})],64)}}},12220:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-73517d5d",path:"/guide/documentation/loadMore.html",title:"LoadMore",lang:"en-US",frontmatter:{head:[["meta",{name:"og:title",content:"LoadMore - VueRequest"}]]},excerpt:"",headers:[{level:2,title:"Usage",slug:"usage",children:[]},{level:2,title:"Example",slug:"example",children:[]}],filePathRelative:"guide/documentation/loadMore.md",git:{updatedTime:1631068275e3,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);