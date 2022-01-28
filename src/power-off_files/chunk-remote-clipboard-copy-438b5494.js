System.register(["./chunk-vendor.js","./chunk-copy.js","./chunk-frameworks.js"],function(d){"use strict";var c,a,u,f,y;return{setters:[function(s){c=s.j,a=s.t,u=s.c},function(s){f=s.c},function(s){y=s.W}],execute:function(){var s=Object.defineProperty,m=Object.getOwnPropertyDescriptor,w=(t,e)=>s(t,"name",{value:e,configurable:!0}),r=(t,e,h,o)=>{for(var n=o>1?void 0:o?m(e,h):e,p=t.length-1,l;p>=0;p--)(l=t[p])&&(n=(o?l(e,h,n):l(n))||n);return o&&n&&s(e,h,n),n};const C=["idle","fetching","success","error"],b=["success","error"];let i=d("RemoteClipboardCopyElement",class extends HTMLElement{constructor(){super(...arguments);this.src="",this.stateTimeout=2e3,this.transientStateTimer=null,this._state="idle"}connectedCallback(){this.render()}get state(){return this._state}set state(t){!C.includes(t)||(this._state=t,this.render(),this.transientStateTimer&&(window.clearTimeout(this.transientStateTimer),this.transientStateTimer=null),b.includes(t)&&(this.transientStateTimer=window.setTimeout(()=>{this.state="idle"},this.stateTimeout)))}asyncClipboardSupported(){return"clipboard"in navigator&&typeof ClipboardItem!="undefined"}async remoteCopy(){if(this.src===""||this.state!=="idle")return;const t=this.fetchContentWithState();try{await this.asyncClipboard(t)}catch{try{await this.awaitThenCopy(t)}catch{this.state="error"}}}async asyncClipboard(t){if(!this.asyncClipboardSupported())throw new Error("Async clipboard API is not supported");const e=new ClipboardItem({"text/plain":t});await navigator.clipboard.write([e]),this.state="success"}async awaitThenCopy(t){const e=await t;await f(await e.text()),this.state="success"}async fetchContent(){await y();const t=await fetch(this.src,{method:"GET",redirect:"follow"});if(!t.ok)throw new Error("Fetching content failed");let e=await t.text();return e=e.replace(/\r?\n$/,""),new Blob([e],{type:"text/plain"})}async fetchContentWithState(){this.state="fetching";try{return await this.fetchContent()}catch(t){throw this.state="error",t}}render(){this.idle&&(this.idle.hidden=this.state!=="idle"),this.fetching&&(this.fetching.hidden=this.state!=="fetching"),this.success&&(this.success.hidden=this.state!=="success"),this.error&&(this.error.hidden=this.state!=="error")}});w(i,"RemoteClipboardCopyElement"),r([c],i.prototype,"src",2),r([c],i.prototype,"stateTimeout",2),r([a],i.prototype,"idle",2),r([a],i.prototype,"fetching",2),r([a],i.prototype,"success",2),r([a],i.prototype,"error",2),i=d("RemoteClipboardCopyElement",r([u],i))}}});
//# sourceMappingURL=chunk-remote-clipboard-copy-fe75d94f.js.map
