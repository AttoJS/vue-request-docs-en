"use strict";(self.webpackChunken=self.webpackChunken||[]).push([[186],{87203:(n,s,a)=>{a.r(s),a.d(s,{default:()=>h});var t=a(27875);const o=(0,t._)("h1",{id:"error-retry",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#error-retry","aria-hidden":"true"},"#"),(0,t.Uk)(" Error Retry")],-1),e=(0,t._)("p",null,"In applications, transient errors are actually very common. For example, the connection between the interface server and the database server is temporarily disconnected, or the user's network temporarily fails. These failures are often corrected by themselves in a short time. If you can try again after a suitable delay, the request may be successful.",-1),p=(0,t.Uk)("Now you can let VueRequest handle this for you through a simple configuration. Just provide a "),c=(0,t._)("code",null,"errorRetryCount",-1),k=(0,t.Uk)(" to tell us the number of retries. As the following example"),u=(0,t._)("div",{class:"language-vue ext-vue"},[(0,t._)("pre",{class:"language-vue"},[(0,t._)("code",null,[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NSpace")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"vertical"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("span")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("Switch button to mock success request or error request"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("span")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NSpace")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"justify"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("space-between"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NRadioGroup")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},[(0,t._)("span",{class:"token namespace"},"v-model:"),(0,t.Uk)("value")]),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("isErrorRequest"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NRadioButton")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"key"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("error"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":value"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("1"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)(" Error "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NRadioButton")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NRadioButton")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"key"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("success"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":value"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("0"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)(" Success "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NRadioButton")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NRadioGroup")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NButton")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"type"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("primary"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"@click"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("handleClick"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)(" Run "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NButton")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NSpace")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NSpin")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":show"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("loading"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("NAlert")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},":type"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("hasError ? "),(0,t._)("span",{class:"token punctuation"},"'"),(0,t.Uk)("error"),(0,t._)("span",{class:"token punctuation"},"'"),(0,t.Uk)(" : "),(0,t._)("span",{class:"token punctuation"},"'"),(0,t.Uk)("success"),(0,t._)("span",{class:"token punctuation"},"'"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("span")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-if"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("hasError"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          {{ `${6 - errorCount} retries left` }}\n          "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("span")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-if"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("needRetry"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)(", waiting for retry "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("span")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("span")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("span")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"v-else"),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n          {{ data }}\n        "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("span")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NAlert")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NSpin")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("NSpace")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("template")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("script")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("ts"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token script"},[(0,t._)("span",{class:"token language-javascript"},[(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'toastify-js/src/toastify.css'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" NAlert"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NButton"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NRadioButton"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NRadioGroup"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NSpace"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" NSpin "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'naive-ui'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(" Toastify "),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'toastify-js'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" computed"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" defineComponent"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" ref"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" watch "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"import"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)(" useRequest "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"from"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'vue-request'"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"let"),(0,t.Uk)(" error "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token boolean"},"true"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token keyword"},"function"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"testService"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"new"),(0,t.Uk)(),(0,t._)("span",{class:"token class-name"},"Promise"),(0,t._)("span",{class:"token operator"},"<"),(0,t.Uk)("string"),(0,t._)("span",{class:"token operator"},">"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t.Uk)("resolve"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(" reject")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"if"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("error"),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"setTimeout"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token function"},"reject"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'Request failed'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"2000"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"else"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"setTimeout"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token function"},"resolve"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'✿✿ヽ(°▽°)ノ✿ Successfuly'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"1000"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)("\n"),(0,t._)("span",{class:"token keyword"},"export"),(0,t.Uk)(),(0,t._)("span",{class:"token keyword"},"default"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"defineComponent"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n  name"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'App'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  components"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    NRadioGroup"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NRadioButton"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NButton"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NSpace"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NSpin"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    NAlert"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token function"},"setup"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" errorCount "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"ref"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(" isErrorRequest "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"ref"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token number"},"1"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      error"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" hasError"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      loading"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      run"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"useRequest"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("testService"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      errorRetryCount"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"5"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      initialData"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'init'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function-variable function"},"onError"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token function"},"showMessage"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'(⊙︿⊙) something error'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n        errorCount"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value"),(0,t._)("span",{class:"token operator"},"++"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function-variable function"},"onSuccess"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        "),(0,t._)("span",{class:"token function"},"showMessage"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token string"},"'✿✿ヽ(°▽°)ノ✿ success'"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n        errorCount"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token function-variable function"},"showMessage"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token parameter"},[(0,t.Uk)("msg"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" string")]),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"Toastify"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n        text"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(" msg"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n        position"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token string"},"'center'"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},"."),(0,t._)("span",{class:"token function"},"showToast"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"const"),(0,t.Uk)(),(0,t._)("span",{class:"token function-variable function"},"handleClick"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      errorCount"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n      "),(0,t._)("span",{class:"token function"},"run"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token function"},"watch"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("isErrorRequest"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)(),(0,t._)("span",{class:"token parameter"},"val"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      error "),(0,t._)("span",{class:"token operator"},"="),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"Boolean"),(0,t._)("span",{class:"token punctuation"},"("),(0,t.Uk)("val"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n\n    "),(0,t._)("span",{class:"token keyword"},"return"),(0,t.Uk)(),(0,t._)("span",{class:"token punctuation"},"{"),(0,t.Uk)("\n      handleClick"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      needRetry"),(0,t._)("span",{class:"token operator"},":"),(0,t.Uk)(),(0,t._)("span",{class:"token function"},"computed"),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},"("),(0,t._)("span",{class:"token punctuation"},")"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"=>"),(0,t.Uk)(" errorCount"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value "),(0,t._)("span",{class:"token operator"},"!=="),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"0"),(0,t.Uk)(),(0,t._)("span",{class:"token operator"},"&&"),(0,t.Uk)(" errorCount"),(0,t._)("span",{class:"token punctuation"},"."),(0,t.Uk)("value "),(0,t._)("span",{class:"token operator"},"<"),(0,t.Uk)(),(0,t._)("span",{class:"token number"},"6"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      isErrorRequest"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      errorCount"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      loading"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      data"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n      hasError"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n    "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n  "),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},","),(0,t.Uk)("\n"),(0,t._)("span",{class:"token punctuation"},"}"),(0,t._)("span",{class:"token punctuation"},")"),(0,t._)("span",{class:"token punctuation"},";"),(0,t.Uk)("\n")])]),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("script")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n\n"),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"<"),(0,t.Uk)("style")]),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"scoped"),(0,t.Uk)(),(0,t._)("span",{class:"token attr-name"},"lang"),(0,t._)("span",{class:"token attr-value"},[(0,t._)("span",{class:"token punctuation attr-equals"},"="),(0,t._)("span",{class:"token punctuation"},'"'),(0,t.Uk)("scss"),(0,t._)("span",{class:"token punctuation"},'"')]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t._)("span",{class:"token style"}),(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token tag"},[(0,t._)("span",{class:"token punctuation"},"</"),(0,t.Uk)("style")]),(0,t._)("span",{class:"token punctuation"},">")]),(0,t.Uk)("\n")])]),(0,t._)("div",{class:"highlight-lines"},[(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("div",{class:"highlight-line"}," "),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br"),(0,t._)("br")])],-1),l=(0,t.uE)('<h2 id="errorretrycount" tabindex="-1"><a class="header-anchor" href="#errorretrycount" aria-hidden="true">#</a> ErrorRetryCount</h2><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  errorRetryCount<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// it will retry 5 times</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><br><div class="highlight-line"> </div><br></div></div><h2 id="errorretryinterval" tabindex="-1"><a class="header-anchor" href="#errorretryinterval" aria-hidden="true">#</a> ErrorRetryInterval</h2>',3),r={class:"custom-container tip"},_=(0,t._)("p",{class:"custom-container-title"},"Tips",-1),i=(0,t.Uk)("By default, we will use "),U={href:"https://en.wikipedia.org/wiki/Exponential_backoff",target:"_blank",rel:"noopener noreferrer"},b=(0,t._)("strong",null,"Exponential Backoff Algorithm",-1),d=(0,t.Uk)(" to help you calculate the appropriate interval time"),g=(0,t.Uk)("Of course, you can also provide "),m=(0,t._)("code",null,"errorRetryInterval",-1),y=(0,t.Uk)(" to set the retry interval"),f=(0,t.uE)('<div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> useRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue-request&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> <span class="token punctuation">{</span> data <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRequest</span><span class="token punctuation">(</span><span class="token string">&#39;api/users&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  errorRetryCount<span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// it will retry 5 times</span>\n  errorRetryInterval<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span> <span class="token comment">// The retry interval is 5 seconds</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><div class="highlight-line"> </div><br></div></div>',1),h={render:function(n,s){const a=(0,t.up)("RouterLink"),h=(0,t.up)("Demo"),v=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[o,e,(0,t._)("p",null,[p,(0,t.Wm)(a,{to:"/api/index.html#errorretrycount"},{default:(0,t.w5)((()=>[c])),_:1}),k]),(0,t.Wm)(h,{name:"ErrorRetryDemo",title:"Error Retry demo"},{default:(0,t.w5)((()=>[u])),_:1}),l,(0,t._)("div",r,[_,(0,t._)("p",null,[i,(0,t._)("a",U,[b,(0,t.Wm)(v)]),d])]),(0,t._)("p",null,[g,(0,t.Wm)(a,{to:"/api/index.html#errorretryinterval"},{default:(0,t.w5)((()=>[m])),_:1}),y]),f],64)}}},35670:(n,s,a)=>{a.r(s),a.d(s,{data:()=>t});const t={key:"v-62cf96d0",path:"/guide/documentation/errorRetry.html",title:"Error Retry",lang:"en-US",frontmatter:{head:[["meta",{name:"og:title",content:"Error Retry - VueRequest"}]]},excerpt:"",headers:[{level:2,title:"ErrorRetryCount",slug:"errorretrycount",children:[]},{level:2,title:"ErrorRetryInterval",slug:"errorretryinterval",children:[]}],filePathRelative:"guide/documentation/errorRetry.md",git:{updatedTime:1631070702e3,contributors:[{name:"John",email:"John60676@qq.com",commits:1}]}}}}]);