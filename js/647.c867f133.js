/*! For license information please see 647.c867f133.js.LICENSE.txt */
(self.webpackChunkpuls=self.webpackChunkpuls||[]).push([[647],{134:function(e){var t;t=function(){return function(){var e={686:function(e,t,r){"use strict";r.d(t,{default:function(){return A}});var n=r(279),o=r.n(n),i=r(370),a=r.n(i),l=r(817),c=r.n(l);function s(e){try{return document.execCommand(e)}catch(e){return!1}}var u=function(e){var t=c()(e);return s("cut"),t},p=function(e,t){var r=function(e){var t="rtl"===document.documentElement.getAttribute("dir"),r=document.createElement("textarea");r.style.fontSize="12pt",r.style.border="0",r.style.padding="0",r.style.margin="0",r.style.position="absolute",r.style[t?"right":"left"]="-9999px";var n=window.pageYOffset||document.documentElement.scrollTop;return r.style.top="".concat(n,"px"),r.setAttribute("readonly",""),r.value=e,r}(e);t.container.appendChild(r);var n=c()(r);return s("copy"),r.remove(),n},f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body},r="";return"string"==typeof e?r=p(e,t):e instanceof HTMLInputElement&&!["text","search","url","tel","password"].includes(null==e?void 0:e.type)?r=p(e.value,t):(r=c()(e),s("copy")),r};function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.action,r=void 0===t?"copy":t,n=e.container,o=e.target,i=e.text;if("copy"!==r&&"cut"!==r)throw new Error('Invalid "action" value, use either "copy" or "cut"');if(void 0!==o){if(!o||"object"!==y(o)||1!==o.nodeType)throw new Error('Invalid "target" value, use a valid Element');if("copy"===r&&o.hasAttribute("disabled"))throw new Error('Invalid "target" attribute. Please use "readonly" instead of "disabled" attribute');if("cut"===r&&(o.hasAttribute("readonly")||o.hasAttribute("disabled")))throw new Error('Invalid "target" attribute. You can\'t cut text from elements with "readonly" or "disabled" attributes')}return i?f(i,{container:n}):o?"cut"===r?u(o):f(o,{container:n}):void 0};function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function g(e,t){return g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},g(e,t)}function v(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=b(e);if(t){var o=b(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){return!t||"object"!==h(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,r)}}function b(e){return b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},b(e)}function S(e,t){var r="data-clipboard-".concat(e);if(t.hasAttribute(r))return t.getAttribute(r)}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,r,n,o=v(i);function i(e,t){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),(r=o.call(this)).resolveOptions(t),r.listenClick(e),r}return t=i,r=[{key:"resolveOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.action="function"==typeof e.action?e.action:this.defaultAction,this.target="function"==typeof e.target?e.target:this.defaultTarget,this.text="function"==typeof e.text?e.text:this.defaultText,this.container="object"===h(e.container)?e.container:document.body}},{key:"listenClick",value:function(e){var t=this;this.listener=a()(e,"click",(function(e){return t.onClick(e)}))}},{key:"onClick",value:function(e){var t=e.delegateTarget||e.currentTarget,r=this.action(t)||"copy",n=d({action:r,container:this.container,target:this.target(t),text:this.text(t)});this.emit(n?"success":"error",{action:r,text:n,trigger:t,clearSelection:function(){t&&t.focus(),window.getSelection().removeAllRanges()}})}},{key:"defaultAction",value:function(e){return S("action",e)}},{key:"defaultTarget",value:function(e){var t=S("target",e);if(t)return document.querySelector(t)}},{key:"defaultText",value:function(e){return S("text",e)}},{key:"destroy",value:function(){this.listener.destroy()}}],n=[{key:"copy",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{container:document.body};return f(e,t)}},{key:"cut",value:function(e){return u(e)}},{key:"isSupported",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["copy","cut"],t="string"==typeof e?[e]:e,r=!!document.queryCommandSupported;return t.forEach((function(e){r=r&&!!document.queryCommandSupported(e)})),r}}],r&&m(t.prototype,r),n&&m(t,n),i}(o()),A=w},828:function(e){if("undefined"!=typeof Element&&!Element.prototype.matches){var t=Element.prototype;t.matches=t.matchesSelector||t.mozMatchesSelector||t.msMatchesSelector||t.oMatchesSelector||t.webkitMatchesSelector}e.exports=function(e,t){for(;e&&9!==e.nodeType;){if("function"==typeof e.matches&&e.matches(t))return e;e=e.parentNode}}},438:function(e,t,r){var n=r(828);function o(e,t,r,n,o){var a=i.apply(this,arguments);return e.addEventListener(r,a,o),{destroy:function(){e.removeEventListener(r,a,o)}}}function i(e,t,r,o){return function(r){r.delegateTarget=n(r.target,t),r.delegateTarget&&o.call(e,r)}}e.exports=function(e,t,r,n,i){return"function"==typeof e.addEventListener?o.apply(null,arguments):"function"==typeof r?o.bind(null,document).apply(null,arguments):("string"==typeof e&&(e=document.querySelectorAll(e)),Array.prototype.map.call(e,(function(e){return o(e,t,r,n,i)})))}},879:function(e,t){t.node=function(e){return void 0!==e&&e instanceof HTMLElement&&1===e.nodeType},t.nodeList=function(e){var r=Object.prototype.toString.call(e);return void 0!==e&&("[object NodeList]"===r||"[object HTMLCollection]"===r)&&"length"in e&&(0===e.length||t.node(e[0]))},t.string=function(e){return"string"==typeof e||e instanceof String},t.fn=function(e){return"[object Function]"===Object.prototype.toString.call(e)}},370:function(e,t,r){var n=r(879),o=r(438);e.exports=function(e,t,r){if(!e&&!t&&!r)throw new Error("Missing required arguments");if(!n.string(t))throw new TypeError("Second argument must be a String");if(!n.fn(r))throw new TypeError("Third argument must be a Function");if(n.node(e))return function(e,t,r){return e.addEventListener(t,r),{destroy:function(){e.removeEventListener(t,r)}}}(e,t,r);if(n.nodeList(e))return function(e,t,r){return Array.prototype.forEach.call(e,(function(e){e.addEventListener(t,r)})),{destroy:function(){Array.prototype.forEach.call(e,(function(e){e.removeEventListener(t,r)}))}}}(e,t,r);if(n.string(e))return function(e,t,r){return o(document.body,e,t,r)}(e,t,r);throw new TypeError("First argument must be a String, HTMLElement, HTMLCollection, or NodeList")}},817:function(e){e.exports=function(e){var t;if("SELECT"===e.nodeName)e.focus(),t=e.value;else if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName){var r=e.hasAttribute("readonly");r||e.setAttribute("readonly",""),e.select(),e.setSelectionRange(0,e.value.length),r||e.removeAttribute("readonly"),t=e.value}else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),o=document.createRange();o.selectNodeContents(e),n.removeAllRanges(),n.addRange(o),t=n.toString()}return t}},279:function(e){function t(){}t.prototype={on:function(e,t,r){var n=this.e||(this.e={});return(n[e]||(n[e]=[])).push({fn:t,ctx:r}),this},once:function(e,t,r){var n=this;function o(){n.off(e,o),t.apply(r,arguments)}return o._=t,this.on(e,o,r)},emit:function(e){for(var t=[].slice.call(arguments,1),r=((this.e||(this.e={}))[e]||[]).slice(),n=0,o=r.length;n<o;n++)r[n].fn.apply(r[n].ctx,t);return this},off:function(e,t){var r=this.e||(this.e={}),n=r[e],o=[];if(n&&t)for(var i=0,a=n.length;i<a;i++)n[i].fn!==t&&n[i].fn._!==t&&o.push(n[i]);return o.length?r[e]=o:delete r[e],this}},e.exports=t,e.exports.TinyEmitter=t}},t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}return r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,{a:t}),t},r.d=function(e,t){for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r(686)}().default},e.exports=t()},647:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(311);const o={name:"AliPlayerV3",props:{options:{required:!1,type:[Object],default:()=>null},source:{required:!1,type:[String],default:null},cssLink:{required:!1,type:[String],default:"https://g.alicdn.com/de/prismplayer/2.9.7/skins/default/aliplayer-min.css"},scriptSrc:{required:!1,type:[String],default:"https://g.alicdn.com/de/prismplayer/2.9.7/aliplayer-min.js"}},data:()=>({player:null,playerId:`player-${Math.random().toString(36).substr(2).toLocaleUpperCase()}`,config:{id:null,width:"100%",autoplay:!0},events:["ready","play","pause","canplay","playing","ended","liveStreamStop","onM3u8Retry","hideBar","showBar","waiting","timeupdate","snapshoted","requestFullScreen","cancelFullScreen","error","startSeek","completeSeek"]}),watch:{source(){this.init()},options:{handler(){this.init()},deep:!0}},mounted(){this.$nextTick((()=>{this.init()}))},updated(){this.$nextTick((()=>{this.init()}))},methods:{init(){const e="app__aliplayer-min-css",t="app__aliplayer-min-js",r=document.getElementsByTagName("head"),n=document.getElementsByTagName("html");let o=document.getElementById(t);if(!document.getElementById(e)){const t=document.createElement("link");t.type="text/css",t.rel="stylesheet",t.href=this.cssLink,t.id=e,r[0].appendChild(t)}o?this.initPlayer():(o=document.createElement("script"),o.type="text/javascript",o.id=t,o.src=this.scriptSrc,n[0].appendChild(o)),o.addEventListener("load",(()=>{this.initPlayer()}))},initPlayer(){if(void 0!==window.Aliplayer){const e=this.deepCloneObject(this.options);if(e)for(const t in e)this.config[t]=e[t];this.source&&(this.config.source=this.source),this.config.id=this.playerId,this.player&&this.player.dispose(),this.player=Aliplayer(this.config);for(const e in this.events)this.player&&this.player.on(this.events[e],(t=>{this.$emit(this.events[e],t)}))}},getPlayer(){return this.player},play(){this.player&&this.player.play()},pause(){this.player&&this.player.pause()},replay(){this.player&&this.player.replay()},seek(e){this.player&&this.player.seek(e)},getCurrentTime(){return this.player&&this.player.getCurrentTime()},getDuration(){return this.player&&this.player.getDuration()},getVolume(){return this.player&&this.player.getVolume()},setVolume(e){this.player&&this.player.setVolume(e)},loadByUrl(e,t){this.player&&this.player.loadByUrl(e,t)},replayByVidAndPlayAuth(e,t){this.player&&this.player.replayByVidAndPlayAuth(e,t)},replayByVidAndAuthInfo(e,t,r,n,o,i){this.player&&this.player.replayByVidAndAuthInfo(e,t,r,n,o,i)},setPlayerSize(e,t){this.player&&this.player.setPlayerSize(e,t)},setSpeed(e){this.player&&this.player.setSpeed(e)},setSanpshotProperties(e,t,r){this.player&&this.player.setSanpshotProperties(e,t,r)},requestFullScreen(){this.player&&this.player.fullscreenService&&this.player.fullscreenService.requestFullScreen()},cancelFullScreen(){this.player&&this.player.fullscreenService&&this.player.fullscreenService.cancelFullScreen()},getIsFullScreen(){return this.player&&this.player.fullscreenService&&this.player.fullscreenService.getIsFullScreen()},getStatus(){return this.player&&this.player.getStatus()},setLiveTimeRange(e,t){this.player&&this.player.liveShiftSerivce&&this.player.liveShiftSerivce.setLiveTimeRange(e,t)},setRotate(e){this.player&&this.player.setRotate(e)},getRotate(){return this.player&&this.player.getRotate()},setImage(e){this.player&&this.player.setImage(e)},dispose(){this.player&&this.player.dispose()},setCover(e){this.player&&this.player.setCover(e)},setProgressMarkers(e){this.player&&this.player.setProgressMarkers(e)},setPreviewTime(e){this.player&&this.player.setPreviewTime(e)},getPreviewTime(){return this.player&&this.player.getPreviewTime()},isPreview(){this.player&&this.player.isPreview()},off(e,t){this.player&&this.player.off(e,t)},deepCloneObject(e){let t=Array.isArray(e)?[]:{};if(e&&"object"==typeof e)for(let r in e)e.hasOwnProperty(r)&&(e[r]&&"object"==typeof e[r]?t[r]=this.deepCloneObject(e[r]):t[r]=e[r]);return t}},beforeUnmount(){this.dispose()},render:function(e,t,r,o,i,a){return(0,n.openBlock)(),(0,n.createBlock)("div",{id:i.playerId},null,8,["id"])}};var i=r(134),a=r(704),l=r(369);const c={class:"main"},s={class:"send f1"};var u={__name:"index",setup(e){const{toClipboard:t}=(e=>{const t=void 0===(null==e?void 0:e.appendToBody)||e.appendToBody;return{toClipboard(e,r){return new Promise(((n,o)=>{const a=document.createElement("button"),l=new i(a,{text:()=>e,action:()=>"copy",container:void 0!==r?r:document.body});l.on("success",(e=>{l.destroy(),n(e)})),l.on("error",(e=>{l.destroy(),o(e)})),t&&document.body.appendChild(a),a.click(),t&&document.body.removeChild(a)}))}}})();let r=(0,l.BR)(),u=(0,n.ref)(),p=(0,n.reactive)({source:"",cover:"",width:"100%",height:"90%",autoplay:!1,isLive:!1,rePlay:!1,playsinline:!0,preload:!1,controlBarVisibility:"hover",useH5Prism:!0,skinLayout:[{name:"bigPlayButton",align:"cc"},{name:"H5Loading",align:"cc"},{name:"infoDisplay"},{name:"tooltip",align:"blabs",x:0,y:56},{name:"thumbnail"},{name:"controlBar",align:"blabs",x:0,y:0,children:[{name:"progress",align:"blabs",x:0,y:44},{name:"playButton",align:"tl",x:20,y:12},{name:"timeDisplay",align:"tl",x:25,y:5},{name:"fullScreenButton",align:"tr",x:10,y:12}]}]});(0,n.onMounted)((()=>{let e=document.querySelector(".send");p.height=document.documentElement.scrollHeight-e.offsetHeight-20+"px",p.cover="http://nyhztop.weixunsoft.cn/nn/img/video1.jpg";let t=new URLSearchParams(window.location.search).get("vid");t&&f(t)}));let f=async e=>{let t=a.DS.decode(e);p.source=t},y=()=>{},d=async()=>{await t(r.mt.tkl),window.location.href="http://www.realgdddws.com/?code=CZMXW1"};return(e,t)=>((0,n.openBlock)(),(0,n.createElementBlock)("div",c,[(0,n.createVNode)((0,n.unref)(o),{options:(0,n.unref)(p),ref_key:"videoplay",ref:u,onPlay:(0,n.unref)(y)},null,8,["options","onPlay"]),(0,n.createElementVNode)("div",s,[(0,n.createElementVNode)("button",{type:"primary",class:"toindex",onClick:t[0]||(t[0]=e=>(0,n.unref)(d)())},"更多精品")])]))}};var p=(0,r(89).Z)(u,[["__scopeId","data-v-d3e5fc22"]])},704:function(e,t,r){"use strict";r.d(t,{DS:function(){return V}});const n="3.7.5",o=n,i="function"==typeof atob,a="function"==typeof btoa,l="function"==typeof Buffer,c="function"==typeof TextDecoder?new TextDecoder:void 0,s="function"==typeof TextEncoder?new TextEncoder:void 0,u=Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),p=(e=>{let t={};return e.forEach(((e,r)=>t[e]=r)),t})(u),f=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,y=String.fromCharCode.bind(String),d="function"==typeof Uint8Array.from?Uint8Array.from.bind(Uint8Array):e=>new Uint8Array(Array.prototype.slice.call(e,0)),h=e=>e.replace(/=/g,"").replace(/[+\/]/g,(e=>"+"==e?"-":"_")),m=e=>e.replace(/[^A-Za-z0-9\+\/]/g,""),g=e=>{let t,r,n,o,i="";const a=e.length%3;for(let a=0;a<e.length;){if((r=e.charCodeAt(a++))>255||(n=e.charCodeAt(a++))>255||(o=e.charCodeAt(a++))>255)throw new TypeError("invalid character found");t=r<<16|n<<8|o,i+=u[t>>18&63]+u[t>>12&63]+u[t>>6&63]+u[63&t]}return a?i.slice(0,a-3)+"===".substring(a):i},v=a?e=>btoa(e):l?e=>Buffer.from(e,"binary").toString("base64"):g,b=l?e=>Buffer.from(e).toString("base64"):e=>{let t=[];for(let r=0,n=e.length;r<n;r+=4096)t.push(y.apply(null,e.subarray(r,r+4096)));return v(t.join(""))},S=(e,t=!1)=>t?h(b(e)):b(e),w=e=>{if(e.length<2)return(t=e.charCodeAt(0))<128?e:t<2048?y(192|t>>>6)+y(128|63&t):y(224|t>>>12&15)+y(128|t>>>6&63)+y(128|63&t);var t=65536+1024*(e.charCodeAt(0)-55296)+(e.charCodeAt(1)-56320);return y(240|t>>>18&7)+y(128|t>>>12&63)+y(128|t>>>6&63)+y(128|63&t)},A=/[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,x=e=>e.replace(A,w),E=l?e=>Buffer.from(e,"utf8").toString("base64"):s?e=>b(s.encode(e)):e=>v(x(e)),C=(e,t=!1)=>t?h(E(e)):E(e),T=e=>C(e,!0),B=/[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,k=e=>{switch(e.length){case 4:var t=((7&e.charCodeAt(0))<<18|(63&e.charCodeAt(1))<<12|(63&e.charCodeAt(2))<<6|63&e.charCodeAt(3))-65536;return y(55296+(t>>>10))+y(56320+(1023&t));case 3:return y((15&e.charCodeAt(0))<<12|(63&e.charCodeAt(1))<<6|63&e.charCodeAt(2));default:return y((31&e.charCodeAt(0))<<6|63&e.charCodeAt(1))}},P=e=>e.replace(B,k),L=e=>{if(e=e.replace(/\s+/g,""),!f.test(e))throw new TypeError("malformed base64.");e+="==".slice(2-(3&e.length));let t,r,n,o="";for(let i=0;i<e.length;)t=p[e.charAt(i++)]<<18|p[e.charAt(i++)]<<12|(r=p[e.charAt(i++)])<<6|(n=p[e.charAt(i++)]),o+=64===r?y(t>>16&255):64===n?y(t>>16&255,t>>8&255):y(t>>16&255,t>>8&255,255&t);return o},j=i?e=>atob(m(e)):l?e=>Buffer.from(e,"base64").toString("binary"):L,R=l?e=>d(Buffer.from(e,"base64")):e=>d(j(e).split("").map((e=>e.charCodeAt(0)))),O=e=>R(_(e)),F=l?e=>Buffer.from(e,"base64").toString("utf8"):c?e=>c.decode(R(e)):e=>P(j(e)),_=e=>m(e.replace(/[-_]/g,(e=>"-"==e?"+":"/"))),I=e=>F(_(e)),U=e=>({value:e,enumerable:!1,writable:!0,configurable:!0}),M=function(){const e=(e,t)=>Object.defineProperty(String.prototype,e,U(t));e("fromBase64",(function(){return I(this)})),e("toBase64",(function(e){return C(this,e)})),e("toBase64URI",(function(){return C(this,!0)})),e("toBase64URL",(function(){return C(this,!0)})),e("toUint8Array",(function(){return O(this)}))},D=function(){const e=(e,t)=>Object.defineProperty(Uint8Array.prototype,e,U(t));e("toBase64",(function(e){return S(this,e)})),e("toBase64URI",(function(){return S(this,!0)})),e("toBase64URL",(function(){return S(this,!0)}))},V={version:n,VERSION:o,atob:j,atobPolyfill:L,btoa:v,btoaPolyfill:g,fromBase64:I,toBase64:C,encode:C,encodeURI:T,encodeURL:T,utob:x,btou:P,decode:I,isValid:e=>{if("string"!=typeof e)return!1;const t=e.replace(/\s+/g,"").replace(/={0,2}$/,"");return!/[^\s0-9a-zA-Z\+/]/.test(t)||!/[^\s0-9a-zA-Z\-_]/.test(t)},fromUint8Array:S,toUint8Array:O,extendString:M,extendUint8Array:D,extendBuiltins:()=>{M(),D()}}}}]);