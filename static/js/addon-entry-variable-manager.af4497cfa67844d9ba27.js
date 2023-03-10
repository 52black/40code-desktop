(window.webpackJsonpGUI=window.webpackJsonpGUI||[]).push([[48],{1575:function(e,t,a){var n=a(209);(e.exports=a(9)(!1)).push([e.i,"/* Change z-indexes to allow more than 3 tabs */\n.gui_tab_27Unf.gui_is-selected_sHAiu {\n  z-index: 10 !important;\n}\n.gui_tab_27Unf:nth-of-type(1) {\n  z-index: 9;\n}\n.gui_tab_27Unf:nth-of-type(2) {\n  z-index: 8;\n}\n.gui_tab_27Unf:nth-of-type(3) {\n  z-index: 7;\n}\n.gui_tab_27Unf:nth-of-type(4) {\n  z-index: 6;\n}\n\n.sa-var-manager {\n  display: block;\n  padding: 18px;\n  /* weird hack to fix scrolling??? */\n  height: 50px;\n  overflow-y: auto;\n}\n\n.sa-var-manager-searchbox {\n  background-image: url("+n(a(1576))+');\n  width: 25%;\n  margin-bottom: 4px;\n  padding: 8px;\n  padding-right: 32px; /* for the text to not overlap the image */\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-size: 18px 18px;\n  background-position: calc(100% - 7px) center;\n  font-size: 0.75rem;\n}\n[theme="dark"] .sa-var-manager-searchbox {\n  border-color: #333;\n}\n\n[dir="rtl"] .sa-var-manager-searchbox {\n  padding-right: 8px;\n  padding-left: 32px;\n  background-position: 7px center;\n}\n\n.sa-var-manager.freeze .sa-var-manager-value *,\n.sa-var-manager.freeze .sa-var-manager-name * {\n  opacity: 0.5;\n}\n\n.sa-var-manager.freeze input:focus,\n.sa-var-manager.freeze textarea:focus {\n  opacity: 1;\n}\n\n.sa-var-manager-heading {\n  display: block;\n  font-weight: bold;\n  font-size: large;\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n\n.sa-var-manager-name {\n  word-break: break-word;\n}\n\n.sa-var-manager .sa-var-manager-value {\n  width: 75%;\n}\n\n.sa-var-manager * > input {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n}\n\n.sa-var-manager-value > textarea {\n  background: none;\n  border: none;\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  line-height: 2em;\n  resize: none;\n}\n\n.sa-var-manager input:disabled, .sa-var-manager textarea:disabled {\n  font-style: italic;\n  opacity: 0.8;\n}\n\n.sa-var-manager table {\n  border-radius: 5px;\n  border-collapse: collapse;\n  width: 100%;\n}\n\n.sa-var-manager td {\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  text-align: left;\n}\n[theme="dark"] .sa-var-manager td {\n  border-color: #333;\n}\n\n/* tr:nth-child(even) {\n    background-color: #dddddd;\n} */\n',""])},1576:function(e,t,a){e.exports=a.p+"static/assets/1821649bb254ff5d93bb397ad646a23f.svg"},1609:function(e,t,a){"use strict";a.r(t),a.d(t,"resources",(function(){return i}));var n=a(1575);const i={"userscript.js":async function(e){let{addon:t,global:a,console:n,msg:i}=e;const s=t.tab.traps.vm;let r=[],c=[],o=!1;const l=document.createElement("div");l.classList.add(t.tab.scratchClass("asset-panel_wrapper"),"sa-var-manager");const d=document.createElement("input");d.placeholder=i("search"),d.className=t.tab.scratchClass("input_input-form",{others:"sa-var-manager-searchbox"}),d.addEventListener("input",e=>{for(const e of r)e.handleSearch(d.value);for(const e of c)e.handleSearch(d.value);x()}),l.appendChild(d);const u=document.createElement("div"),g=document.createElement("span"),h=document.createElement("table");g.className="sa-var-manager-heading",g.innerText=i("for-this-sprite"),u.appendChild(g),u.appendChild(h);const p=document.createElement("div"),b=document.createElement("span"),m=document.createElement("table");b.className="sa-var-manager-heading",b.innerText=i("for-all-sprites"),p.appendChild(b),p.appendChild(m),l.appendChild(u),l.appendChild(p);const M=document.createElement("li");t.tab.displayNoneWhileDisabled(M,{display:"flex"}),M.classList.add(t.tab.scratchClass("react-tabs_react-tabs__tab"),t.tab.scratchClass("gui_tab")),M.id="react-tabs-sa-variable-manager";const v=document.createElement("img");v.draggable=!1,v.src=(e=>{if("/icon.svg"===e)return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0iI2ZmNGM0YyI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBkPSJNNC42NDkgMy4wODRBMSAxIDAgMCAxIDUuMTYzIDQuNCAxMy45NSAxMy45NSAwIDAgMCA0IDEwYzAgMS45OTMuNDE2IDMuODg2IDEuMTY0IDUuNmExIDEgMCAwIDEtMS44MzIuOEExNS45NSAxNS45NSAwIDAgMSAyIDEwYzAtMi4yNzQuNDc1LTQuNDQgMS4zMzItNi40YTEgMSAwIDAgMSAxLjMxNy0uNTE2ek0xMi45NiA3YTMgMyAwIDAgMC0yLjM0MiAxLjEyNmwtLjMyOC40MS0uMTExLS4yNzlBMiAyIDAgMCAwIDguMzIzIDdIOGExIDEgMCAwIDAgMCAyaC4zMjNsLjUzMiAxLjMzLTEuMDM1IDEuMjk1YTEgMSAwIDAgMS0uNzgxLjM3NUg3YTEgMSAwIDEgMCAwIDJoLjAzOWEzIDMgMCAwIDAgMi4zNDItMS4xMjZsLjMyOC0uNDEuMTExLjI3OUEyIDIgMCAwIDAgMTEuNjc3IDE0SDEyYTEgMSAwIDEgMCAwLTJoLS4zMjNsLS41MzItMS4zMyAxLjAzNS0xLjI5NUExIDEgMCAwIDEgMTIuOTYxIDlIMTNhMSAxIDAgMSAwIDAtMmgtLjAzOXptMS44NzQtMi42YTEgMSAwIDAgMSAxLjgzMy0uOEExNS45NSAxNS45NSAwIDAgMSAxOCAxMGMwIDIuMjc0LS40NzUgNC40NC0xLjMzMiA2LjRhMSAxIDAgMSAxLTEuODMyLS44QTEzLjk0OSAxMy45NDkgMCAwIDAgMTYgMTBjMC0xLjk5My0uNDE2LTMuODg2LTEuMTY1LTUuNnoiIGNsaXAtcnVsZT0iZXZlbm9kZCIvPjwvc3ZnPg==";if("/search.svg"===e)return"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCI+PHBhdGggZD0iTTE1LjUgMTRoLS43OWwtLjI4LS4yN0E2LjQ3MSA2LjQ3MSAwIDAgMCAxNiA5LjUgNi41IDYuNSAwIDEgMCA5LjUgMTZjMS42MSAwIDMuMDktLjU5IDQuMjMtMS41N2wuMjcuMjh2Ljc5bDUgNC45OUwyMC40OSAxOWwtNC45OS01em0tNiAwQzcuMDEgMTQgNSAxMS45OSA1IDkuNVM3LjAxIDUgOS41IDUgMTQgNy4wMSAxNCA5LjUgMTEuOTkgMTQgOS41IDE0eiIgZmlsbD0iI0QzRDNEMyIvPjxwYXRoIGQ9Ik0wIDBoMjR2MjRIMHoiIGZpbGw9Im5vbmUiLz48L3N2Zz4=";throw new Error("Unknown asset: ".concat(e))})("/icon.svg");const I=document.createElement("span");function x(){let e=r.filter(e=>"none"!==e.row.style.display),t=c.filter(e=>"none"!==e.row.style.display);g.style.display=0===e.length?"none":"",b.style.display=0===t.length?"none":""}I.innerText=i("variables"),M.appendChild(v),M.appendChild(I);const A=new WeakMap,E=new IntersectionObserver(e=>{for(const t of e){A.get(t.target).setVisible(t.isIntersecting)}},{rootMargin:"100px"});class f{constructor(e,t){this.scratchVariable=e,this.target=t,this.visible=!1,this.tooBig=!1,this.buildDOM()}updateValue(e){if(!this.visible&&!e)return;if(this.tooBig)return;let t;if("list"===this.scratchVariable.type?(t=this.scratchVariable.value.join("\n"),t.length>12e6&&(this.tooBig=!0)):(t=this.scratchVariable.value,t.length>1e6&&(this.tooBig=!0)),this.tooBig)return this.input.value="Too big to safely display. If this limit is too low, use the feedback button at the top of the screen.",void(this.input.disabled=!0);t!==this.input.value&&(this.input.value=t)}handleSearch(e){this.scratchVariable.name.toLowerCase().includes(e.toLowerCase())||!e?(this.row.style.display="",this.updateValue(!0)):this.row.style.display="none"}resizeInputIfList(){if("list"===this.scratchVariable.type){this.input.style.height="auto";const e=Math.min(1e3,this.input.scrollHeight);e>0&&(this.input.style.height=e+"px")}}setVisible(e){this.visible!==e&&(this.visible=e,e&&this.updateValue())}buildDOM(){const e="sa-variable-manager-".concat(this.scratchVariable.id),t=document.createElement("tr");this.row=t;const a=document.createElement("td");a.className="sa-var-manager-name";const n=document.createElement("input");n.value=this.scratchVariable.name,n.htmlFor=e;n.addEventListener("keydown",e=>{"Enter"!==e.key||e.shiftKey||e.target.blur()}),n.addEventListener("focusout",e=>{e.preventDefault();const t=Blockly.getMainWorkspace();t.getVariable(n.value,this.scratchVariable.type)?n.value=this.scratchVariable.name:t.renameVariableById(this.scratchVariable.id,n.value),n.blur()}),n.addEventListener("focus",e=>{o=!0,l.classList.add("freeze")}),n.addEventListener("blur",e=>{o=!1,l.classList.remove("freeze")}),a.appendChild(n),A.set(t,this),E.observe(t);const i=document.createElement("td");let r;i.className="sa-var-manager-value",r="list"===this.scratchVariable.type?document.createElement("textarea"):document.createElement("input"),r.id=e,this.input=r,this.updateValue(!0),"list"===this.scratchVariable.type&&this.input.addEventListener("input",()=>this.resizeInputIfList(),!1);r.addEventListener("keydown",e=>{"Enter"!==e.key||e.shiftKey||e.target.blur()}),r.addEventListener("focusout",e=>{e.preventDefault(),"list"===this.scratchVariable.type?s.setVariableValue(this.target.id,this.scratchVariable.id,r.value.split("\n")):s.setVariableValue(this.target.id,this.scratchVariable.id,r.value),r.blur()}),r.addEventListener("focus",e=>{o=!0,l.classList.add("freeze")}),r.addEventListener("blur",e=>{o=!1,l.classList.remove("freeze")}),i.appendChild(r),t.appendChild(a),t.appendChild(i),this.handleSearch(d.value)}}function y(){var e,a,n;if(3!==(null===(e=t.tab.redux.state)||void 0===e||null===(a=e.scratchGui)||void 0===a||null===(n=a.editorTab)||void 0===n?void 0:n.activeTabIndex)||o)return;const i=s.runtime.getEditingTarget(),l=s.runtime.getTargetForStage();for(r=i.isStage?[]:Object.values(i.variables).filter(e=>""===e.type||"list"===e.type).map(e=>new f(e,i)),c=Object.values(l.variables).filter(e=>""===e.type||"list"===e.type).map(e=>new f(e,l)),x();h.firstChild;)h.removeChild(h.firstChild);for(;m.firstChild;)m.removeChild(m.firstChild);for(const e of r)h.appendChild(e.row),e.resizeInputIfList();for(const e of c)m.appendChild(e.row),e.resizeInputIfList()}function D(){var e,a,n;if(3===(null===(e=t.tab.redux.state)||void 0===e||null===(a=e.scratchGui)||void 0===a||null===(n=a.editorTab)||void 0===n?void 0:n.activeTabIndex)&&!o){for(const e of r)e.updateValue();for(const e of c)e.updateValue()}}function L(e){if(e){M.classList.add(t.tab.scratchClass("react-tabs_react-tabs__tab--selected"),t.tab.scratchClass("gui_is-selected"));document.querySelector("[class^=gui_tabs]").insertAdjacentElement("beforeend",l),y()}else M.classList.remove(t.tab.scratchClass("react-tabs_react-tabs__tab--selected"),t.tab.scratchClass("gui_is-selected")),l.remove(),r=[],c=[]}M.addEventListener("click",e=>{t.tab.redux.dispatch({type:"scratch-gui/navigation/ACTIVATE_TAB",activeTabIndex:3})}),t.tab.redux.initialize(),t.tab.redux.addEventListener("statechanged",e=>{let{detail:a}=e;"scratch-gui/navigation/ACTIVATE_TAB"===a.action.type?L(3===a.action.activeTabIndex):"scratch-gui/mode/SET_PLAYER"===a.action.type&&(a.action.isPlayerOnly||3!==t.tab.redux.state.scratchGui.editorTab.activeTabIndex||queueMicrotask(()=>L(!0)))}),s.runtime.on("PROJECT_LOADED",()=>{try{y()}catch(e){n.error(e)}}),s.runtime.on("TOOLBOX_EXTENSIONS_NEED_UPDATE",()=>{try{y()}catch(e){n.error(e)}});const w=s.runtime._step;for(s.runtime._step=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];const i=w.call(this,...t);try{D()}catch(e){n.error(e)}return i},t.self.addEventListener("disabled",()=>{3===t.tab.redux.state.scratchGui.editorTab.activeTabIndex&&t.tab.redux.dispatch({type:"scratch-gui/navigation/ACTIVATE_TAB",activeTabIndex:2})});;)await t.tab.waitForElement("[class^='react-tabs_react-tabs__tab-list']",{markAsSeen:!0,reduxEvents:["scratch-gui/mode/SET_PLAYER","fontsLoaded/SET_FONTS_LOADED","scratch-gui/locales/SELECT_LOCALE"],reduxCondition:e=>!e.scratchGui.mode.isPlayerOnly}),t.tab.appendToSharedSpace({space:"afterSoundTab",element:M,order:3})},"style.css":a.n(n).a}}}]);