"use strict";(self.webpackChunkmain_client=self.webpackChunkmain_client||[]).push([[706],{706:(e,n,t)=>{t.r(n);var r=t(950),a=t.n(r),o=t(181),i=t.n(o),c=t(608),l=t(379),s=t.n(l),u=t(795),p=t.n(u),d=t(569),m=t.n(d),f=t(565),v=t.n(f),h=t(216),y=t.n(h),g=t(589),b=t.n(g),E=t(420),x={};x.styleTagTransform=b(),x.setAttributes=v(),x.insert=m().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=y(),s()(E.Z,x);const k=E.Z&&E.Z.locals?E.Z.locals:void 0;var w=t(383),S={};function C(){return a().createElement("h1",null,"Main")}S.styleTagTransform=b(),S.setAttributes=v(),S.insert=m().bind(null,"head"),S.domAPI=p(),S.insertStyleElement=y(),s()(w.Z,S),w.Z&&w.Z.locals&&w.Z.locals;var T=a().lazy((function(){return t.e(292).then(t.bind(t,292))})),A=a().lazy((function(){return t.e(618).then(t.bind(t,618))})),Z=function(){return a().createElement(c.BrowserRouter,null,a().createElement("div",{className:"container"},a().createElement("h1",null," Main Application "),a().createElement("div",{style:{margin:"auto",display:"inline-block",width:"100%",textAlign:"center"}},a().createElement("button",{className:k.buttonStyle}," ",a().createElement(c.Link,{to:"/login"}," Login ")," "),a().createElement("button",{className:k.buttonStyle}," ",a().createElement(c.Link,{to:"/countries"}," Countries ")," ")),a().createElement(r.Suspense,{fallback:a().createElement("h1",null,"Loading....")},a().createElement(c.Routes,null,a().createElement(c.Route,{key:"main",element:a().createElement(C,null),path:"/"}),a().createElement(c.Route,{key:"login",element:a().createElement(T,null),path:"/login"}),a().createElement(c.Route,{key:"countryPage",element:a().createElement(A,null),path:"/countries"})))))};i().render(a().createElement(Z,null),document.getElementById("app"))},383:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,"body {\n  font-family: Arial, Helvetica, sans-serif;\n}\n\n.container {\n  font-size: 3rem;\n  margin: auto;\n  max-width: 800px;\n  margin-top: 20px;\n}",""]);const c=i},420:(e,n,t)=>{t.d(n,{Z:()=>c});var r=t(81),a=t.n(r),o=t(645),i=t.n(o)()(a());i.push([e.id,".WDFu11_uPv7m15J9ueQ9 {\n    color: black;\n    padding: 10px;\n    border: 1px solid greenyellow;\n    border-radius: 10px;\n    margin-right: 10px;\n    background-color: white !important;\n\n}\n\n.WDFu11_uPv7m15J9ueQ9:hover {\n    background-color: antiquewhite;\n\n}",""]),i.locals={buttonStyle:"WDFu11_uPv7m15J9ueQ9"};const c=i},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var l=this[c][0];null!=l&&(i[l]=!0)}for(var s=0;s<e.length;s++){var u=[].concat(e[s]);r&&i[u[0]]||(void 0!==o&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=o),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),a&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=a):u[4]="".concat(a)),n.push(u))}},n}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var o={},i=[],c=0;c<e.length;c++){var l=e[c],s=r.base?l[0]+r.base:l[0],u=o[s]||0,p="".concat(s," ").concat(u);o[s]=u+1;var d=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==d)n[d].references++,n[d].updater(m);else{var f=a(m,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var c=t(o[i]);n[c].references--}for(var l=r(e,a),s=0;s<o.length;s++){var u=t(o[s]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}o=l}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,a&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}}]);