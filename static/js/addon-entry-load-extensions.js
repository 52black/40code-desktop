(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[33],{1709:function(n,e,s){"use strict";s.r(e),s.d(e,"resources",(function(){return t}));const t={"userscript.js":async function({addon:n,global:e,console:s}){const t=n.tab.traps.vm,o=()=>{if(n.self.disabled)return;const e=["music","pen","text2speech","translate"];for(let s of e)n.settings.get(s)&&!t.extensionManager.isExtensionLoaded(s)&&t.extensionManager.loadExtensionIdSync(s)};t.editingTarget?o():t.runtime.once("PROJECT_LOADED",o)}}}}]);