(function(){"use strict";var Z=Object.defineProperty,ee=(t,e)=>Z(t,"name",{value:e,configurable:!0});function k(){return typeof Blob=="function"&&typeof PerformanceObserver=="function"&&typeof Intl!="undefined"&&typeof MutationObserver!="undefined"&&typeof URLSearchParams!="undefined"&&typeof WebSocket!="undefined"&&typeof IntersectionObserver!="undefined"&&typeof AbortController!="undefined"&&typeof queueMicrotask!="undefined"&&typeof TextEncoder!="undefined"&&typeof TextDecoder!="undefined"&&typeof customElements!="undefined"&&typeof HTMLDetailsElement!="undefined"&&"fromEntries"in Object&&"entries"in FormData.prototype&&"toggleAttribute"in Element.prototype&&"flatMap"in Array.prototype&&"replaceChildren"in Element.prototype}ee(k,"capableBrowser");var te=Object.defineProperty,re=(t,e)=>te(t,"name",{value:e,configurable:!0});function N(t){var e,r;const o=(r=(e=t.head)==null?void 0:e.querySelector('meta[name="expected-hostname"]'))==null?void 0:r.content;if(!o)return!1;const a=o.replace(/\.$/,"").split(".").slice(-2).join("."),m=t.location.hostname.replace(/\.$/,"").split(".").slice(-2).join(".");return a!==m}re(N,"detectProxySite");let j;function R(){return`${Math.round(Math.random()*(Math.pow(2,31)-1))}.${Math.round(Date.now()/1e3)}`}function ne(t){const e=`GH1.1.${t}`,r=Date.now(),o=new Date(r+1*365*86400*1e3).toUTCString();let{domain:a}=document;a.endsWith(".github.com")&&(a="github.com"),document.cookie=`_octo=${e}; expires=${o}; path=/; domain=${a}; secure; samesite=lax`}function oe(){let t;const r=document.cookie.match(/_octo=([^;]+)/g);if(!r)return;let o=[0,0];for(const a of r){const[,m]=a.split("="),[,i,...c]=m.split("."),u=i.split("-").map(Number);u>o&&(o=u,t=c.join("."))}return t}function ae(){try{const t=oe();if(t)return t;const e=R();return ne(e),e}catch{return j||(j=R()),j}}var b="<unknown>";function le(t){var e=t.split(`
`);return e.reduce(function(r,o){var a=ce(o)||fe(o)||pe(o)||ye(o)||ve(o);return a&&r.push(a),r},[])}var ie=/^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,se=/\((\S*)(?::(\d+))(?::(\d+))\)/;function ce(t){var e=ie.exec(t);if(!e)return null;var r=e[2]&&e[2].indexOf("native")===0,o=e[2]&&e[2].indexOf("eval")===0,a=se.exec(e[2]);return o&&a!=null&&(e[2]=a[1],e[3]=a[2],e[4]=a[3]),{file:r?null:e[2],methodName:e[1]||b,arguments:r?[e[2]]:[],lineNumber:e[3]?+e[3]:null,column:e[4]?+e[4]:null}}var ue=/^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;function fe(t){var e=ue.exec(t);return e?{file:e[2],methodName:e[1]||b,arguments:[],lineNumber:+e[3],column:e[4]?+e[4]:null}:null}var de=/^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i,me=/(\S+) line (\d+)(?: > eval line \d+)* > eval/i;function pe(t){var e=de.exec(t);if(!e)return null;var r=e[3]&&e[3].indexOf(" > eval")>-1,o=me.exec(e[3]);return r&&o!=null&&(e[3]=o[1],e[4]=o[2],e[5]=null),{file:e[3],methodName:e[1]||b,arguments:e[2]?e[2].split(","):[],lineNumber:e[4]?+e[4]:null,column:e[5]?+e[5]:null}}var ge=/^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;function ve(t){var e=ge.exec(t);return e?{file:e[3],methodName:e[1]||b,arguments:[],lineNumber:+e[4],column:e[5]?+e[5]:null}:null}var he=/^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;function ye(t){var e=he.exec(t);return e?{file:e[2],methodName:e[1]||b,arguments:[],lineNumber:+e[3],column:e[4]?+e[4]:null}:null}var be=Object.defineProperty,x=(t,e)=>be(t,"name",{value:e,configurable:!0});function E(t){const e=document.querySelectorAll(t);if(e.length>0)return e[e.length-1]}x(E,"queryLast");function I(){const t=E("meta[name=analytics-location]");return t?t.content:window.location.pathname}x(I,"pagePathname");function B(){const t=E("meta[name=analytics-location-query-strip]");let e="";t||(e=window.location.search);const r=E("meta[name=analytics-location-params]");r&&(e+=(e?"&":"?")+r.content);for(const o of document.querySelectorAll("meta[name=analytics-param-rename]")){const a=o.content.split(":",2);e=e.replace(new RegExp(`(^|[?&])${a[0]}($|=)`,"g"),`$1${a[1]}$2`)}return e}x(B,"pageQuery");function M(){return`${window.location.protocol}//${window.location.host}${I()+B()}`}x(M,"requestUri");var we=Object.defineProperty,d=(t,e)=>we(t,"name",{value:e,configurable:!0});let U=!1,X=0;const xe=Date.now();function Y(t){t.error&&S(T(_(t.error)))}d(Y,"reportEvent");async function q(t){if(!!t.promise)try{await t.promise}catch(e){S(T(_(e)))}}d(q,"reportPromiseRejectionEvent");function D(t,e={}){t&&t.name!=="AbortError"&&S(T(_(t),e))}d(D,"reportError");async function S(t){var e,r;if(!F())return;const o=(r=(e=document.head)==null?void 0:e.querySelector('meta[name="browser-errors-url"]'))==null?void 0:r.content;if(!!o){if(W(t.error.stacktrace)){U=!0;return}X++;try{await fetch(o,{method:"post",body:JSON.stringify(t)})}catch{}}}d(S,"report");function _(t){return{type:t.name,value:t.message,stacktrace:A(t)}}d(_,"formatError");function T(t,e={}){return Object.assign({error:t,sanitizedUrl:M()||window.location.href,readyState:document.readyState,referrer:document.referrer,timeSinceLoad:Math.round(Date.now()-xe),user:H()||void 0},e)}d(T,"errorContext");function A(t){return le(t.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}d(A,"stacktrace");const V=/(chrome|moz|safari)-extension:\/\//;function W(t){return t.some(e=>V.test(e.filename)||V.test(e.function))}d(W,"isExtensionError");function H(){var t,e;const r=(e=(t=document.head)==null?void 0:t.querySelector('meta[name="user-login"]'))==null?void 0:e.content;return r||`anonymous-${ae()}`}d(H,"pageUser");let P=!1;window.addEventListener("pageshow",()=>P=!1),window.addEventListener("pagehide",()=>P=!0);function F(){return!P&&!U&&X<10&&k()&&!N(document)}d(F,"reportable"),typeof BroadcastChannel=="function"&&new BroadcastChannel("shared-worker-error").addEventListener("message",e=>{D(e.data.error)}),window.addEventListener("error",Y),window.addEventListener("unhandledrejection",q),window.location.hash==="#b00m"&&setTimeout(()=>{throw new Error("b00m")}),window.requestIdleCallback=window.requestIdleCallback||function(t){var e=Date.now();return setTimeout(function(){t({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-e))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(t){clearTimeout(t)};function Ee(t,e){return e={exports:{}},t(e,e.exports),e.exports}var Se=Ee(function(t,e){(function(){var r=window,o=document;function a(i){var c=["MSIE ","Trident/","Edge/"];return new RegExp(c.join("|")).test(i)}function m(){if("scrollBehavior"in o.documentElement.style&&r.__forceSmoothScrollPolyfill__!==!0)return;var i=r.HTMLElement||r.Element,c=468,u=a(r.navigator.userAgent)?1:0,f={scroll:r.scroll||r.scrollTo,scrollBy:r.scrollBy,elementScroll:i.prototype.scroll||g,scrollIntoView:i.prototype.scrollIntoView},O=r.performance&&r.performance.now?r.performance.now.bind(r.performance):Date.now;function g(n,l){this.scrollLeft=n,this.scrollTop=l}function y(n){return .5*(1-Math.cos(Math.PI*n))}function w(n){if(n===null||typeof n!="object"||n.behavior===void 0||n.behavior==="auto"||n.behavior==="instant")return!0;if(typeof n=="object"&&n.behavior==="smooth")return!1;throw new TypeError("behavior member of ScrollOptions "+n.behavior+" is not a valid value for enumeration ScrollBehavior.")}function J(n,l){if(l==="Y")return n.clientHeight+u<n.scrollHeight;if(l==="X")return n.clientWidth+u<n.scrollWidth}function Q(n,l){var s=r.getComputedStyle(n,null)["overflow"+l];return s==="auto"||s==="scroll"}function Pe(n){var l=J(n,"Y")&&Q(n,"Y"),s=J(n,"X")&&Q(n,"X");return l||s}function Ce(n){var l;do n=n.parentNode,l=n===o.body;while(l===!1&&Pe(n)===!1);return l=null,n}function K(n){var l=O(),s,v,h,p=(l-n.startTime)/c;p=p>1?1:p,s=y(p),v=n.startX+(n.x-n.startX)*s,h=n.startY+(n.y-n.startY)*s,n.method.call(n.scrollable,v,h),(v!==n.x||h!==n.y)&&r.requestAnimationFrame(K.bind(r,n))}function $(n,l,s){var v,h,p,L,Le=O();n===o.body?(v=r,h=r.scrollX||r.pageXOffset,p=r.scrollY||r.pageYOffset,L=f.scroll):(v=n,h=n.scrollLeft,p=n.scrollTop,L=g),K({scrollable:v,method:L,startTime:Le,startX:h,startY:p,x:l,y:s})}r.scroll=r.scrollTo=function(){if(arguments[0]!==void 0){if(w(arguments[0])===!0){f.scroll.call(r,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:r.scrollX||r.pageXOffset,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:r.scrollY||r.pageYOffset);return}$.call(r,o.body,arguments[0].left!==void 0?~~arguments[0].left:r.scrollX||r.pageXOffset,arguments[0].top!==void 0?~~arguments[0].top:r.scrollY||r.pageYOffset)}},r.scrollBy=function(){if(arguments[0]!==void 0){if(w(arguments[0])){f.scrollBy.call(r,arguments[0].left!==void 0?arguments[0].left:typeof arguments[0]!="object"?arguments[0]:0,arguments[0].top!==void 0?arguments[0].top:arguments[1]!==void 0?arguments[1]:0);return}$.call(r,o.body,~~arguments[0].left+(r.scrollX||r.pageXOffset),~~arguments[0].top+(r.scrollY||r.pageYOffset))}},i.prototype.scroll=i.prototype.scrollTo=function(){if(arguments[0]!==void 0){if(w(arguments[0])===!0){if(typeof arguments[0]=="number"&&arguments[1]===void 0)throw new SyntaxError("Value couldn't be converted");f.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left:typeof arguments[0]!="object"?~~arguments[0]:this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top:arguments[1]!==void 0?~~arguments[1]:this.scrollTop);return}var n=arguments[0].left,l=arguments[0].top;$.call(this,this,typeof n=="undefined"?this.scrollLeft:~~n,typeof l=="undefined"?this.scrollTop:~~l)}},i.prototype.scrollBy=function(){if(arguments[0]!==void 0){if(w(arguments[0])===!0){f.elementScroll.call(this,arguments[0].left!==void 0?~~arguments[0].left+this.scrollLeft:~~arguments[0]+this.scrollLeft,arguments[0].top!==void 0?~~arguments[0].top+this.scrollTop:~~arguments[1]+this.scrollTop);return}this.scroll({left:~~arguments[0].left+this.scrollLeft,top:~~arguments[0].top+this.scrollTop,behavior:arguments[0].behavior})}},i.prototype.scrollIntoView=function(){if(w(arguments[0])===!0){f.scrollIntoView.call(this,arguments[0]===void 0?!0:arguments[0]);return}var n=Ce(this),l=n.getBoundingClientRect(),s=this.getBoundingClientRect();n!==o.body?($.call(this,n,n.scrollLeft+s.left-l.left,n.scrollTop+s.top-l.top),r.getComputedStyle(n).position!=="fixed"&&r.scrollBy({left:l.left,top:l.top,behavior:"smooth"})):r.scrollBy({left:s.left,top:s.top,behavior:"smooth"})}}t.exports={polyfill:m}})()});Se.polyfill;function _e(){const t=document.createElement("div");return t.style.cssText="-ms-user-select: element; user-select: contain;",t.style.getPropertyValue("-ms-user-select")==="element"||t.style.getPropertyValue("-ms-user-select")==="contain"||t.style.getPropertyValue("user-select")==="contain"}function Te(t){if(!(t.target instanceof Element))return;const e=t.target.closest(".user-select-contain");if(!e)return;const r=window.getSelection();if(!r.rangeCount)return;const o=r.getRangeAt(0).commonAncestorContainer;e.contains(o)||r.selectAllChildren(e)}window.getSelection&&!_e()&&document.addEventListener("click",Te);var Oe=Object.defineProperty,G=(t,e)=>Oe(t,"name",{value:e,configurable:!0});self.System=self.System||(()=>{const t={},e={},r=G(a=>a.replace(/-[a-f0-9]{8,}\.js$/,".js"),"stripHash"),o={register(a,m){const i=r(`./${((document.currentScript||{}).src||"").split("?").shift().split("/").pop()}`),c={},f=m(G((g,y)=>y?c[g]=y:Object.assign(c,g),"collector"),o),O=a.map((g,y)=>o.import(r(g)).then(f.setters[y]));t[i]=Promise.all(O).then(()=>(f.execute(),c)),e[i]&&(e[i](t[i]),delete e[i])},import(a){return t[a]||(t[a]=new Promise((m,i)=>{const c=setTimeout(()=>{i(new Error(`could not resolve ${a}, timeout after 10 seconds`))},1e4),u=document.querySelector(`script[data-src][data-module-id="${a}"]`);u&&(u.setAttribute("src",u.getAttribute("data-src")),u.removeAttribute("data-src"),u.addEventListener("error",()=>{clearTimeout(c),i(new Error(`could not resolve ${a}, error loading the module`))})),e[a]=f=>{clearTimeout(c),m(f)}}))}};return o})();var $e=Object.defineProperty,je=(t,e)=>$e(t,"name",{value:e,configurable:!0});Object.hasOwn||Object.defineProperty(Object,"hasOwn",{value(t,e){if(t==null)throw new TypeError("Cannot convert undefined or null to object");return Object.prototype.hasOwnProperty.call(Object(t),e)},configurable:!0,enumerable:!1,writable:!0});let z=!1;function C(){}je(C,"noop");try{const t=Object.create({},{signal:{get(){z=!0}}});window.addEventListener("test",C,t),window.removeEventListener("test",C,t)}catch{}if(!z){const t=EventTarget.prototype.addEventListener;EventTarget.prototype.addEventListener=function(e,r,o){if(typeof o=="object"&&"signal"in o&&o.signal instanceof AbortSignal){if(o.signal.aborted)return;t.call(o.signal,"abort",()=>{this.removeEventListener(e,r,o)})}return t.call(this,e,r,o)}}typeof crypto.randomUUID!="function"&&(crypto.randomUUID=()=>{const t=new Uint32Array(4);window.crypto.getRandomValues(t);let e=-1;return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(r){e++;const o=t[e>>3]>>e%8*4&15;return(r==="x"?o:o&3|8).toString(16)})})})();
//# sourceMappingURL=environment-9bc96f9b.js.map
