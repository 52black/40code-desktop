(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[41],{1577:function(e,n,s){(e.exports=s(9)(!1)).push([e.i,".sa-search-sprites-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\ninput.sa-search-sprites-box {\n  width: 100%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: 0px;\n  border-bottom: 1px solid hsla(0, 0%, 1%, 0.15);\n  outline: none;\n  padding: 5px 20px 5px 10px;\n}\n\n.sa-search-sprites-reset {\n  display: none;\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  padding-right: 5px;\n  font-size: 25px;\n}\n\n.sa-search-sprites-box:not(:placeholder-shown) ~ .sa-search-sprites-reset {\n  display: block;\n}\n",""])},1630:function(e,n,s){"use strict";s.r(n),s.d(n,"resources",(function(){return r}));var t=s(1577);const r={"userscript.js":async function(e){let n,s,{addon:t,global:r,console:o,msg:a}=e;const i=document.createElement("div");i.className="sa-search-sprites-container",t.tab.displayNoneWhileDisabled(i,{display:"flex"});const c=document.createElement("input");c.className="sa-search-sprites-box",c.placeholder=a("placeholder"),c.autocomplete="off",c.type="text";const l=e=>{if(!n)return;e=e.toLowerCase();const s=n=>n.toLowerCase().includes(e);for(const t of n.children){const n=!e||s(t.children[0].children[1].innerText)||s(t.children[0].children[2].children[0].innerText)&&t.children[0].classList.contains("sa-folders-folder");t.style.display=n?"":"none"}};c.addEventListener("input",e=>{l(e.target.value)});const d=()=>{l(""),c.value=""},p=document.createElement("button");for(p.className="sa-search-sprites-reset",p.addEventListener("click",d),p.textContent="×",t.self.addEventListener("disabled",d),i.appendChild(c),i.appendChild(p);;)await t.tab.waitForElement("div[class^='sprite-selector_items-wrapper']",{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition:e=>!e.scratchGui.mode.isPlayerOnly}),n=document.querySelector('[class^="sprite-selector_items-wrapper"]'),s=document.querySelector('[class^="sprite-selector_scroll-wrapper"]'),s.insertBefore(i,n),d()},"search-bar.css":s.n(t).a}}}]);