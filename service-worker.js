if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return i[e]||(s=new Promise((async s=>{if("document"in self){const i=document.createElement("script");i.src=e,document.head.appendChild(i),i.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!i[e])throw new Error(`Module ${e} didn’t register its module`);return i[e]}))},s=(s,i)=>{Promise.all(s.map(e)).then((e=>i(1===e.length?e[0]:e)))},i={require:Promise.resolve(s)};self.define=(s,a,l)=>{i[s]||(i[s]=Promise.resolve().then((()=>{let i={};const r={uri:location.origin+s.slice(1)};return Promise.all(a.map((s=>{switch(s){case"exports":return i;case"module":return r;default:return e(s)}}))).then((e=>{const s=l(...e);return i.default||(i.default=s),i}))})))}}define("./service-worker.js",["./workbox-cd8a034b"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"2346c0e76b86a26c33a858bc61e0132a"},{url:"api/global-options.html",revision:"dc23bc9e6f220adb392d790f90213f28"},{url:"api/index.html",revision:"2f7b4fda6b6952a812edc41163b17039"},{url:"api/loadMore.html",revision:"56080d1d533a977a3a97d3064da419f2"},{url:"api/pagination.html",revision:"190cb12dee83ce4a5275aa056b1de8c4"},{url:"assets/css/styles.94ea81cc.css",revision:null},{url:"assets/img/back-to-top.8b37f773.svg",revision:null},{url:"assets/js/35.fb4eccfe.js",revision:null},{url:"assets/js/43.1a7d8dba.js",revision:null},{url:"assets/js/626.d09baad4.js",revision:null},{url:"assets/js/app.4439f4e0.js",revision:null},{url:"assets/js/runtime~app.9a05a3e9.js",revision:null},{url:"assets/js/v-0825d054.2072c83a.js",revision:null},{url:"assets/js/v-0b36a592.89eba8c6.js",revision:null},{url:"assets/js/v-1324f911.57e90b60.js",revision:null},{url:"assets/js/v-141987ca.b0a5d79b.js",revision:null},{url:"assets/js/v-1c7b2593.a58abbba.js",revision:null},{url:"assets/js/v-3706649a.a1f476c5.js",revision:null},{url:"assets/js/v-4b535f1b.a621beab.js",revision:null},{url:"assets/js/v-4bd15160.63814812.js",revision:null},{url:"assets/js/v-57ea1ccf.514a6a15.js",revision:null},{url:"assets/js/v-5d1e647b.8550874e.js",revision:null},{url:"assets/js/v-62cf96d0.b0beaf17.js",revision:null},{url:"assets/js/v-6fa8152f.66836b43.js",revision:null},{url:"assets/js/v-73517d5d.31c00524.js",revision:null},{url:"assets/js/v-744497ce.d392e0cb.js",revision:null},{url:"assets/js/v-74534cee.2d37f45c.js",revision:null},{url:"assets/js/v-7bceba84.d8a2d81d.js",revision:null},{url:"assets/js/v-7f1d6617.490e8d9d.js",revision:null},{url:"assets/js/v-8daa1a0e.c992ba9a.js",revision:null},{url:"assets/js/v-964bff12.e98a841f.js",revision:null},{url:"assets/js/v-aa9f2af0.78ce30bd.js",revision:null},{url:"assets/js/v-b06bec6e.b9ae388c.js",revision:null},{url:"assets/js/v-bb9fcf52.95bd4362.js",revision:null},{url:"assets/js/v-d1efe634.28627366.js",revision:null},{url:"assets/js/v-e260681e.1e55f44b.js",revision:null},{url:"assets/js/v-e7e57ac2.1a5b555f.js",revision:null},{url:"assets/js/v-fb0f0066.cb66fa4f.js",revision:null},{url:"demo/polling.html",revision:"b350a964082f0938897af2208c921604"},{url:"demo/refreshOnFocus.html",revision:"b350a964082f0938897af2208c921604"},{url:"guide/documentation/cacheKey.html",revision:"8ba8fed371d6dfe8753ba2952892c91c"},{url:"guide/documentation/dataFetching.html",revision:"af2a18b7fd9678eaf1a7b0d4ebd75f88"},{url:"guide/documentation/debounce.html",revision:"f4b406ddbb4c2ca53bcf07e5cfa2f749"},{url:"guide/documentation/errorRetry.html",revision:"ec1bd94e909e20cbcfebda941e815a5a"},{url:"guide/documentation/globalOptions.html",revision:"23ab9127f7dd0ff9c32285a8bf93f624"},{url:"guide/documentation/loadingDelay.html",revision:"653c80ae1036d4d5fd2404bb01b2f7f9"},{url:"guide/documentation/loadMore.html",revision:"f3c52261aa304bb1810a95f892797d4a"},{url:"guide/documentation/manual.html",revision:"bb6b7965abce802b962b4e0441ae12e5"},{url:"guide/documentation/mutation.html",revision:"5da63175f586d1a958d893c93ef3529a"},{url:"guide/documentation/pagination.html",revision:"38ad66947edcc7d730a1a170456282f8"},{url:"guide/documentation/polling.html",revision:"b96232c8e18fe863ccd8a243470b3a79"},{url:"guide/documentation/queries.html",revision:"312d7360ab306001326809f2f0f7b519"},{url:"guide/documentation/ready.html",revision:"a641dbd1909a4be9f5eb77d943eda538"},{url:"guide/documentation/refreshDeps.html",revision:"dfa359b373fd3c7303ba851310cafaf8"},{url:"guide/documentation/refreshOnWindowFocus.html",revision:"76e4bf0ad490e2e6fd6c2ca221bfc148"},{url:"guide/documentation/throttle.html",revision:"894dd5f201e081a0234d2177f7b0c92c"},{url:"guide/getting-started.html",revision:"44ffa3e21661f1e606043eaa62800ab5"},{url:"guide/introduction.html",revision:"8210c1e329f3af2c563ab8c7bcb66800"},{url:"index.html",revision:"6aae79ab30ab134b357c64e2114dde91"},{url:"logo.png",revision:"9af3385e0cb4a6533cfa8b580366f079"},{url:"logo@100px.png",revision:"67c1615b1ae41080a16b14aaff5375a3"},{url:"logo@16px.png",revision:"dea19892dbc99ddcdf8b780d8692200f"},{url:"logo@32px.png",revision:"7fc0123b02e45f0e23b16d3fd3d023b2"}],{})}));
