import{createWebviewManager as i}from"./main.js";const d=document.location.search.match(/\bid=([\w-]+)/)[1],a=/platform=electron/.test(document.location.search),n=new class{constructor(){this.handlers=new Map,window.addEventListener("message",e=>{const t=e.data.channel,o=this.handlers.get(t);if(o)for(const r of o)r(e,e.data.args);else console.log("no handler for ",e)})}postMessage(e,t){window.parent.postMessage({target:d,channel:e,data:t},"*")}onMessage(e,t){let o=this.handlers.get(e);o||(o=[],this.handlers.set(e,o)),o.push(t)}},l=new class{constructor(){this.confirmBeforeClose="keyboardOnly",this.isModifierKeyDown=!1,n.onMessage("set-confirm-before-close",(s,e)=>{this.confirmBeforeClose=e}),n.onMessage("content",(s,e)=>{this.confirmBeforeClose=e.confirmBeforeClose}),window.addEventListener("beforeunload",s=>{if(!a)switch(this.confirmBeforeClose){case"always":return s.preventDefault(),s.returnValue="","";case"never":break;case"keyboardOnly":default:{if(this.isModifierKeyDown)return s.preventDefault(),s.returnValue="","";break}}})}onIframeLoaded(s){s.contentWindow.addEventListener("keydown",e=>{this.isModifierKeyDown=e.metaKey||e.ctrlKey||e.altKey}),s.contentWindow.addEventListener("keyup",()=>{this.isModifierKeyDown=!1})}};i({postMessage:n.postMessage.bind(n),onMessage:n.onMessage.bind(n),onElectron:a,useParentPostMessage:!1,onIframeLoaded:s=>{l.onIframeLoaded(s)}});

//# sourceMappingURL=host.js.map