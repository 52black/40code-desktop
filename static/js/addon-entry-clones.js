(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[11],{1638:function(n,e,t){var a=t(210);(n.exports=t(9)(!1)).push([n.i,'.clone-container-container {\n  display: none;\n  align-items: center;\n  padding: 0.25rem;\n  user-select: none;\n  color: #a065ff;\n}\n\n.clone-container {\n  font-size: 0.625rem;\n  font-weight: bold;\n  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;\n  white-space: nowrap;\n}\n\n.clone-icon {\n  margin: 0.25rem;\n  display: inline-block;\n  background-image: url('+a(t(1639))+');\n  height: 16px;\n  width: 16px;\n}\n\n.clone-container-container[data-count="none"] {\n  display: none;\n}\n\n.clone-container-container[data-count="full"] {\n  color: #ff6680;\n}\n\n.clone-container-container[data-count="full"] .clone-icon {\n  background-image: url('+a(t(1640))+");\n}\n\n.clone-count::after {\n  content: attr(data-str);\n}\n\n.sa-clones-small .clone-container-container {\n  display: none !important;\n}\n",""])},1639:function(n,e,t){n.exports=t.p+"static/assets/8a30520407ffdf5b0e7e06e490db9c1d.svg"},1640:function(n,e,t){n.exports=t.p+"static/assets/60fb267c5ab0c6f4ed9ab4a891ca7dd5.svg"},1698:function(n,e,t){"use strict";t.r(e),t.d(e,"resources",(function(){return o}));var a=t(1638);const o={"userscript.js":async function({addon:n,global:e,console:t,msg:a}){const o=n.tab.traps.vm;n.tab.redux.state&&"small"===n.tab.redux.state.scratchGui.stageSize.stageSize&&document.body.classList.add("sa-clones-small"),document.addEventListener("click",n=>{n.target.closest("[class*='stage-header_stage-button-first']")?document.body.classList.add("sa-clones-small"):n.target.closest("[class*='stage-header_stage-button-last']")&&document.body.classList.remove("sa-clones-small")},{capture:!0});let s=document.createElement("div");n.tab.displayNoneWhileDisabled(s);let c=document.createElement("div"),l=document.createElement("span"),i=document.createElement("span");s.className="clone-container-container",c.className="clone-container",l.className="clone-count",i.className="clone-icon",s.appendChild(i),s.appendChild(c),c.appendChild(l);let r=0;const d=Array(301).fill().map((n,e)=>a("clones",{cloneCount:e}));const u=o.runtime._step;for(o.runtime._step=function(...n){const e=u.call(this,...n);return function(){const n=o.runtime._cloneCounter;n!==r&&(r=n,0===n?s.dataset.count="none":n>=o.runtime.runtimeOptions.maxClones?s.dataset.count="full":s.dataset.count="",l.dataset.str=d[n]||a("clones",{cloneCount:n}),s.style.display=0===n?"none":"flex")}(),e};;)await n.tab.waitForElement('[class*="controls_controls-container"]',{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"]}),"editor"===n.tab.editorMode&&n.tab.appendToSharedSpace({space:"afterStopButton",element:s,order:2})},"style.css":t.n(a).a}}}]);