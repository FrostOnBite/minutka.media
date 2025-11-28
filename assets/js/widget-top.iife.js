var ThetruestoryWidgetTop=function(m){"use strict";var Rt=Object.defineProperty;var Lt=(m,f,$)=>f in m?Rt(m,f,{enumerable:!0,configurable:!0,writable:!0,value:$}):m[f]=$;var Y=(m,f,$)=>(Lt(m,typeof f!="symbol"?f+"":f,$),$);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const f=window,$=f.ShadowRoot&&(f.ShadyCSS===void 0||f.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol(),K=new WeakMap;let Q=class{constructor(t,e,i){if(this._$cssResult$=!0,i!==R)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if($&&t===void 0){const i=e!==void 0&&e.length===1;i&&(t=K.get(e)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&K.set(e,t))}return t}toString(){return this.cssText}};const _t=s=>new Q(typeof s=="string"?s:s+"",void 0,R),X=(s,...t)=>{const e=s.length===1?s[0]:t.reduce((i,o,n)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+s[n+1],s[0]);return new Q(e,s,R)},yt=(s,t)=>{$?s.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet):t.forEach(e=>{const i=document.createElement("style"),o=f.litNonce;o!==void 0&&i.setAttribute("nonce",o),i.textContent=e.cssText,s.appendChild(i)})},F=$?s=>s:s=>s instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return _t(e)})(s):s;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var L;const H=window,tt=H.trustedTypes,bt=tt?tt.emptyScript:"",et=H.reactiveElementPolyfillSupport,j={toAttribute(s,t){switch(t){case Boolean:s=s?bt:null;break;case Object:case Array:s=s==null?s:JSON.stringify(s)}return s},fromAttribute(s,t){let e=s;switch(t){case Boolean:e=s!==null;break;case Number:e=s===null?null:Number(s);break;case Object:case Array:try{e=JSON.parse(s)}catch{e=null}}return e}},it=(s,t)=>t!==s&&(t==t||s==s),z={attribute:!0,type:String,converter:j,reflect:!1,hasChanged:it},B="finalized";let w=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var e;this.finalize(),((e=this.h)!==null&&e!==void 0?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach((e,i)=>{const o=this._$Ep(i,e);o!==void 0&&(this._$Ev.set(o,i),t.push(o))}),t}static createProperty(t,e=z){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i=typeof t=="symbol"?Symbol():"__"+t,o=this.getPropertyDescriptor(t,i,e);o!==void 0&&Object.defineProperty(this.prototype,t,o)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(o){const n=this[t];this[e]=o,this.requestUpdate(t,n,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||z}static finalize(){if(this.hasOwnProperty(B))return!1;this[B]=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const e=this.properties,i=[...Object.getOwnPropertyNames(e),...Object.getOwnPropertySymbols(e)];for(const o of i)this.createProperty(o,e[o])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const o of i)e.unshift(F(o))}else t!==void 0&&e.push(F(t));return e}static _$Ep(t,e){const i=e.attribute;return i===!1?void 0:typeof i=="string"?i:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(e=>e(this))}addController(t){var e,i;((e=this._$ES)!==null&&e!==void 0?e:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((i=t.hostConnected)===null||i===void 0||i.call(t))}removeController(t){var e;(e=this._$ES)===null||e===void 0||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])})}createRenderRoot(){var t;const e=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return yt(e,this.constructor.elementStyles),e}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostConnected)===null||i===void 0?void 0:i.call(e)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(e=>{var i;return(i=e.hostDisconnected)===null||i===void 0?void 0:i.call(e)})}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=z){var o;const n=this.constructor._$Ep(t,i);if(n!==void 0&&i.reflect===!0){const r=(((o=i.converter)===null||o===void 0?void 0:o.toAttribute)!==void 0?i.converter:j).toAttribute(e,i.type);this._$El=t,r==null?this.removeAttribute(n):this.setAttribute(n,r),this._$El=null}}_$AK(t,e){var i;const o=this.constructor,n=o._$Ev.get(t);if(n!==void 0&&this._$El!==n){const r=o.getPropertyOptions(n),h=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:j;this._$El=n,this[n]=h.fromAttribute(e,r.type),this._$El=null}}requestUpdate(t,e,i){let o=!0;t!==void 0&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||it)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),i.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,i))):o=!1),!this.isUpdatePending&&o&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(e){Promise.reject(e)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((o,n)=>this[n]=o),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),(t=this._$ES)===null||t===void 0||t.forEach(o=>{var n;return(n=o.hostUpdate)===null||n===void 0?void 0:n.call(o)}),this.update(i)):this._$Ek()}catch(o){throw e=!1,this._$Ek(),o}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;(e=this._$ES)===null||e===void 0||e.forEach(i=>{var o;return(o=i.hostUpdated)===null||o===void 0?void 0:o.call(i)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((e,i)=>this._$EO(i,this[i],e)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};w[B]=!0,w.elementProperties=new Map,w.elementStyles=[],w.shadowRootOptions={mode:"open"},et==null||et({ReactiveElement:w}),((L=H.reactiveElementVersions)!==null&&L!==void 0?L:H.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var D;const I=window,x=I.trustedTypes,ot=x?x.createPolicy("lit-html",{createHTML:s=>s}):void 0,W="$lit$",_=`lit$${(Math.random()+"").slice(9)}$`,st="?"+_,At=`<${st}>`,y=document,k=()=>y.createComment(""),T=s=>s===null||typeof s!="object"&&typeof s!="function",rt=Array.isArray,wt=s=>rt(s)||typeof(s==null?void 0:s[Symbol.iterator])=="function",V=`[ 	
\f\r]`,N=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,nt=/-->/g,at=/>/g,b=RegExp(`>|${V}(?:([^\\s"'>=/]+)(${V}*=${V}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),lt=/'/g,ht=/"/g,ct=/^(?:script|style|textarea|title)$/i,xt=s=>(t,...e)=>({_$litType$:s,strings:t,values:e}),p=xt(1),S=Symbol.for("lit-noChange"),u=Symbol.for("lit-nothing"),dt=new WeakMap,A=y.createTreeWalker(y,129,null,!1);function pt(s,t){if(!Array.isArray(s)||!s.hasOwnProperty("raw"))throw Error("invalid template strings array");return ot!==void 0?ot.createHTML(t):t}const St=(s,t)=>{const e=s.length-1,i=[];let o,n=t===2?"<svg>":"",r=N;for(let h=0;h<e;h++){const a=s[h];let l,c,d=-1,g=0;for(;g<a.length&&(r.lastIndex=g,c=r.exec(a),c!==null);)g=r.lastIndex,r===N?c[1]==="!--"?r=nt:c[1]!==void 0?r=at:c[2]!==void 0?(ct.test(c[2])&&(o=RegExp("</"+c[2],"g")),r=b):c[3]!==void 0&&(r=b):r===b?c[0]===">"?(r=o??N,d=-1):c[1]===void 0?d=-2:(d=r.lastIndex-c[2].length,l=c[1],r=c[3]===void 0?b:c[3]==='"'?ht:lt):r===ht||r===lt?r=b:r===nt||r===at?r=N:(r=b,o=void 0);const v=r===b&&s[h+1].startsWith("/>")?" ":"";n+=r===N?a+At:d>=0?(i.push(l),a.slice(0,d)+W+a.slice(d)+_+v):a+_+(d===-2?(i.push(void 0),h):v)}return[pt(s,n+(s[e]||"<?>")+(t===2?"</svg>":"")),i]};class U{constructor({strings:t,_$litType$:e},i){let o;this.parts=[];let n=0,r=0;const h=t.length-1,a=this.parts,[l,c]=St(t,e);if(this.el=U.createElement(l,i),A.currentNode=this.el.content,e===2){const d=this.el.content,g=d.firstChild;g.remove(),d.append(...g.childNodes)}for(;(o=A.nextNode())!==null&&a.length<h;){if(o.nodeType===1){if(o.hasAttributes()){const d=[];for(const g of o.getAttributeNames())if(g.endsWith(W)||g.startsWith(_)){const v=c[r++];if(d.push(g),v!==void 0){const Mt=o.getAttribute(v.toLowerCase()+W).split(_),M=/([.?@])?(.*)/.exec(v);a.push({type:1,index:n,name:M[2],strings:Mt,ctor:M[1]==="."?Et:M[1]==="?"?Tt:M[1]==="@"?Nt:O})}else a.push({type:6,index:n})}for(const g of d)o.removeAttribute(g)}if(ct.test(o.tagName)){const d=o.textContent.split(_),g=d.length-1;if(g>0){o.textContent=x?x.emptyScript:"";for(let v=0;v<g;v++)o.append(d[v],k()),A.nextNode(),a.push({type:2,index:++n});o.append(d[g],k())}}}else if(o.nodeType===8)if(o.data===st)a.push({type:2,index:n});else{let d=-1;for(;(d=o.data.indexOf(_,d+1))!==-1;)a.push({type:7,index:n}),d+=_.length-1}n++}}static createElement(t,e){const i=y.createElement("template");return i.innerHTML=t,i}}function C(s,t,e=s,i){var o,n,r,h;if(t===S)return t;let a=i!==void 0?(o=e._$Co)===null||o===void 0?void 0:o[i]:e._$Cl;const l=T(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==l&&((n=a==null?void 0:a._$AO)===null||n===void 0||n.call(a,!1),l===void 0?a=void 0:(a=new l(s),a._$AT(s,e,i)),i!==void 0?((r=(h=e)._$Co)!==null&&r!==void 0?r:h._$Co=[])[i]=a:e._$Cl=a),a!==void 0&&(t=C(s,a._$AS(s,t.values),a,i)),t}class Ct{constructor(t,e){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var e;const{el:{content:i},parts:o}=this._$AD,n=((e=t==null?void 0:t.creationScope)!==null&&e!==void 0?e:y).importNode(i,!0);A.currentNode=n;let r=A.nextNode(),h=0,a=0,l=o[0];for(;l!==void 0;){if(h===l.index){let c;l.type===2?c=new P(r,r.nextSibling,this,t):l.type===1?c=new l.ctor(r,l.name,l.strings,this,t):l.type===6&&(c=new Ut(r,this,t)),this._$AV.push(c),l=o[++a]}h!==(l==null?void 0:l.index)&&(r=A.nextNode(),h++)}return A.currentNode=y,n}v(t){let e=0;for(const i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class P{constructor(t,e,i,o){var n;this.type=2,this._$AH=u,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=o,this._$Cp=(n=o==null?void 0:o.isConnected)===null||n===void 0||n}get _$AU(){var t,e;return(e=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&e!==void 0?e:this._$Cp}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return e!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=C(this,t,e),T(t)?t===u||t==null||t===""?(this._$AH!==u&&this._$AR(),this._$AH=u):t!==this._$AH&&t!==S&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):wt(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==u&&T(this._$AH)?this._$AA.nextSibling.data=t:this.$(y.createTextNode(t)),this._$AH=t}g(t){var e;const{values:i,_$litType$:o}=t,n=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=U.createElement(pt(o.h,o.h[0]),this.options)),o);if(((e=this._$AH)===null||e===void 0?void 0:e._$AD)===n)this._$AH.v(i);else{const r=new Ct(n,this),h=r.u(this.options);r.v(i),this.$(h),this._$AH=r}}_$AC(t){let e=dt.get(t.strings);return e===void 0&&dt.set(t.strings,e=new U(t)),e}T(t){rt(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,o=0;for(const n of t)o===e.length?e.push(i=new P(this.k(k()),this.k(k()),this,this.options)):i=e[o],i._$AI(n),o++;o<e.length&&(this._$AR(i&&i._$AB.nextSibling,o),e.length=o)}_$AR(t=this._$AA.nextSibling,e){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,e);t&&t!==this._$AB;){const o=t.nextSibling;t.remove(),t=o}}setConnected(t){var e;this._$AM===void 0&&(this._$Cp=t,(e=this._$AP)===null||e===void 0||e.call(this,t))}}class O{constructor(t,e,i,o,n){this.type=1,this._$AH=u,this._$AN=void 0,this.element=t,this.name=e,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=u}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,o){const n=this.strings;let r=!1;if(n===void 0)t=C(this,t,e,0),r=!T(t)||t!==this._$AH&&t!==S,r&&(this._$AH=t);else{const h=t;let a,l;for(t=n[0],a=0;a<n.length-1;a++)l=C(this,h[i+a],e,a),l===S&&(l=this._$AH[a]),r||(r=!T(l)||l!==this._$AH[a]),l===u?t=u:t!==u&&(t+=(l??"")+n[a+1]),this._$AH[a]=l}r&&!o&&this.j(t)}j(t){t===u?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class Et extends O{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===u?void 0:t}}const kt=x?x.emptyScript:"";class Tt extends O{constructor(){super(...arguments),this.type=4}j(t){t&&t!==u?this.element.setAttribute(this.name,kt):this.element.removeAttribute(this.name)}}class Nt extends O{constructor(t,e,i,o,n){super(t,e,i,o,n),this.type=5}_$AI(t,e=this){var i;if((t=(i=C(this,t,e,0))!==null&&i!==void 0?i:u)===S)return;const o=this._$AH,n=t===u&&o!==u||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==u&&(o===u||n);n&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;typeof this._$AH=="function"?this._$AH.call((i=(e=this.options)===null||e===void 0?void 0:e.host)!==null&&i!==void 0?i:this.element,t):this._$AH.handleEvent(t)}}class Ut{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){C(this,t)}}const ut=I.litHtmlPolyfillSupport;ut==null||ut(U,P),((D=I.litHtmlVersions)!==null&&D!==void 0?D:I.litHtmlVersions=[]).push("2.8.0");const Pt=(s,t,e)=>{var i,o;const n=(i=e==null?void 0:e.renderBefore)!==null&&i!==void 0?i:t;let r=n._$litPart$;if(r===void 0){const h=(o=e==null?void 0:e.renderBefore)!==null&&o!==void 0?o:null;n._$litPart$=r=new P(t.insertBefore(k(),h),h,void 0,e??{})}return r._$AI(s),r};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Z,G;class E extends w{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return(t=(e=this.renderOptions).renderBefore)!==null&&t!==void 0||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pt(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return S}}E.finalized=!0,E._$litElement$=!0,(Z=globalThis.litElementHydrateSupport)===null||Z===void 0||Z.call(globalThis,{LitElement:E});const gt=globalThis.litElementPolyfillSupport;gt==null||gt({LitElement:E}),((G=globalThis.litElementVersions)!==null&&G!==void 0?G:globalThis.litElementVersions=[]).push("3.3.3");function Ht(s,t,e,i){return s=Math.floor(Math.abs(s))%100,s>10&&s<20?i:(s=s%10,s===1?t:s>=2&&s<=4?e:i)}function J(s,t,e){return function(i){return Ht(i,s,t,e)}}const ft="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOSIgaGVpZ2h0PSIxNSIgdmlld0JveD0iMCAwIDkgMTUiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgPHN0eWxlPgogICAgOnJvb3QgeyAtLWNvbG9ycy1pbms6IGJsYWNrOyB9CiAgICBwYXRoIHsgc3Ryb2tlOiB2YXIoLS1jb2xvcnMtaW5rKTsgfQogIDwvc3R5bGU+CiAgPHBhdGggZD0iTTAgNkg4LjY4NzUiIHN0cm9rZS13aWR0aD0iMS41Ii8+CiAgPHBhdGggZD0iTTAgOC44NzVINS42MjUiIHN0cm9rZS13aWR0aD0iMS41Ii8+Cjwvc3ZnPgo=";class q extends E{constructor(){super(),this.inclineSource=J("источник","источника","источников"),this.inclineMessage=J("сообщение","сообщения","сообщений")}bottomLineTemplate(){if(this.slug==="echofm")return p`
        <p class="bottom-line">
          <span class="bottom-line__headliner block">
            <img src=${ft} alt="Headline icon" />
            ${this.item.source.title}
          </span>
          <span class="bottom-line__counter">
            ${this.item.count} ${this.inclineSource(this.item.count)}
          </span>
        </p>
      `;const t=`${this.item.count} ${this.inclineSource(this.item.count)}`,e=`${this.item.count} ${this.inclineMessage(this.item.count)}`,i=this.item.source_date_formed;let o=this.item.source.title;this.first&&(o=`заголовок: ${o}`);let n=t,r=p`
      <img src=${ft} alt="Headliner icon" />
      ${o}
    `;return this.storyCounter==="messages"&&(n=e),this.showTimes&&(r=p`• ${i}`),this.slug==="republic"&&(r=p`| ${o}`),p`
      <p class="bottom-line">
        <span class="bottom-line__counter">${n}</span>
        <span class="bottom-line__headliner"> ${r} </span>
      </p>
    `}render(){const e=this.item.source.title.replace(/^the(-)?/,"")[0].toUpperCase(),i=this.item.source.base64,o=`icon ${this.item.source.shape??"round"}`,n=i?p`<img src=${i} alt="Media logo" class=${o} />`:p`<span class="fallback">${e}</span>`;return p`
      <a href=${this.item.url} target="_blank">
        <div class="headline">
          <p><span class="headline__text">${this.item.title}</span></p>
          ${this.showIcons?n:u}
        </div>
        ${this.bottomLineTemplate()}
      </a>
    `}}Y(q,"properties",{first:{type:Boolean},item:{type:Object},showIcons:{type:Boolean},showTimes:{type:Boolean},slug:{type:String},storyCounter:{type:String}}),Y(q,"styles",X`
    p {
      margin: 0;
    }
    a:link,
    a:visited {
      display: block;
      text-decoration: none;
    }
    a:link .headline__text,
    a:visited .headline__text {
      color: var(--story-headline-color-normal);
      transition: color 0.3s ease, background-color 0.3s ease;
    }
    a:hover .headline__text,
    a:active .headline__text {
      color: var(--story-headline-color-hover);
      background-color: var(--story-headline-background-color-hover);
      transition: color 0.3s ease, background-color 0.3s ease;
    }
    .headline {
      display: flex;
      justify-content: space-between;
      gap: var(--story-gap);
      align-items: start;
      margin: 0 0 var(--story-gap);
      font: var(--story-headline-font-weight) var(--story-headline-font-size) /
        var(--story-headline-line-height) var(--story-headline-font-family);
      letter-spacing: var(--story-headline-letter-spacing);
      text-align: left;
    }
    .icon {
      border: 1px solid var(--story-icon-border-color-normal);
    }
    .icon.square {
      width: 20px;
      height: 20px;
      border-radius: 3px;
    }
    .icon.round,
    .fallback {
      width: 21px;
      height: 21px;
      border-radius: 50%;
    }
    .fallback {
      text-align: center;
      font: var(--story-icon-fallback-font-weight) var(--story-icon-fallback-font-weight) /
        var(--story-icon-fallback-line-height) var(--story-icon-fallback-font-family);
      color: var(--story-icon-fallback-color-normal);
      background-color: var(--story-icon-fallback-background-color-normal);
      min-width: 21px;
      height: 21px;
    }
    .bottom-line {
      margin: 0;
    }
    .bottom-line__counter {
      margin-right: var(--story-bottomline-gap);
      font: var(--story-bottomline-counter-font-weight) var(--story-bottomline-counter-font-size) /
        var(--story-bottomline-counter-line-height) var(--story-bottomline-counter-font-family);
      font-variant-numeric: lining-nums;
      letter-spacing: var(--story-bottomline-counter-letter-spacing);
      color: var(--story-bottomline-counter-color-normal);
    }
    .bottom-line__headliner {
      font: var(--story-bottomline-headliner-font-weight)
        var(--story-bottomline-headliner-font-size) / var(--story-bottomline-headliner-line-height)
        var(--story-bottomline-headliner-font-family);
      letter-spacing: var(--story-bottomline-headliner-letter-spacing);
      color: var(--story-bottomline-headliner-color-normal);
      white-space: nowrap;
    }
    .bottom-line__headliner.block {
      display: block;
    }
    .bottom-line__headliner img {
      vertical-align: -4px;
      margin-right: 2px;
    }
  `),window.customElements.get("thetruestory-widget-top-item")||window.customElements.define("thetruestory-widget-top-item",q);const vt="https://thetruestory.news/ru",It=`${vt}/about`,mt="https://classic.thetruestory.news/api/widget",Ot="https://st.thetruestory.news/w";class $t extends E{constructor(){super(),this.inclineSource=J("источник","источника","источников"),this.slug="uni",this.edition="ru",this.category=""}static get properties(){return{_configLoaded:{state:!0,type:Boolean},_loaded:{state:!0,type:Boolean},category:{type:String},count:{attribute:!1,type:Number},edition:{type:String},noIcons:{attribute:"no-icons",type:Boolean},partnerConfig:{attribute:!1,type:Object},slug:{type:String},stories:{type:Number},top:{attribute:!1,type:Array},variant:{type:String}}}static get styles(){return X`
      :host {
        display: block;
        --ovdinfo-column-gap: 40px;
      }
      article {
        font-family: var(--global-content);
        color: var(--global-ink-normal);
      }
      article.dressed {
        padding: var(--widget-padding);
        background-color: var(--widget-background-color-normal);
        border-radius: var(--widget-border-radius);
      }
      header {
        padding-top: var(--header-padding-top);
        border-top: var(--header-border-top-width) solid var(--header-border-top-color-normal);
        font: var(--header-text-font-weight) var(--header-text-font-size) /
          var(--header-text-line-height) var(--header-text-font-family);
        letter-spacing: var(--header-text-letter-spacing);
        color: var(--header-text-color-normal);
      }
      article.dressed header {
        border-top: none;
      }
      header p {
        text-align-last: justify;
      }
      .nowrap {
        white-space: nowrap;
      }
      .header__source {
        font: var(--header-source-font-weight) var(--header-source-font-size) /
          var(--header-source-line-height) var(--header-source-font-family);
        font-variant-numeric: lining-nums;
        letter-spacing: var(--header-source-letter-spacing);
        color: var(--header-source-color-normal);
      }
      .header__logo {
        font: var(--header-logo-font-weight) var(--header-logo-font-size) /
          var(--header-logo-line-height) var(--header-logo-font-family);
        letter-spacing: var(--header-logo-letter-spacing);
        color: var(--header-logo-color-normal);
      }
      .header__img--gross {
        vertical-align: -7px;
      }
      .header__img--klein {
        vertical-align: -3px;
      }
      ul {
        list-style: none;
        margin: var(--stories-margin-top) 0 var(--stories-margin-bottom);
        padding: var(--stories-padding-top) 0 var(--stories-padding-bottom);
        border-top: var(--stories-border-top-width) solid var(--stories-border-top-color-normal);
        border-bottom: var(--stories-border-bottom-width) solid
          var(--stories-border-bottom-color-normal);
      }
      li {
        padding: var(--story-padding-top) 0 0;
        margin-top: var(--story-margin-top);
        border-top: var(--story-border-top-width) solid var(--story-border-top-color-normal);
      }
      li:first-child {
        margin-top: 0;
        padding-top: 0;
        border: none;
      }
      .columns ul {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        column-gap: var(--widget-gap);
        border-bottom: none;
      }
      .two-columns li {
        flex-grow: 1;
        flex-basis: 45%;
      }
      .three-columns li {
        flex-grow: 1;
        flex-basis: 27%;
      }
      :host([slug='ovd-info']) li:first-child,
      .columns li:first-child {
        padding: var(--story-padding-top) 0 0;
        margin-top: var(--story-margin-top);
        border-top: var(--story-border-top-width) solid var(--story-border-top-color-normal);
      }
      @media (max-width: 539px) {
        .columns ul {
          flex-direction: column;
        }
      }
      :host([slug='ovd-info']) footer,
      :host([slug='republic']) footer {
        display: none;
      }
      p {
        margin: 0;
      }
      a:link,
      a:visited {
        text-decoration: none;
        color: inherit;
        transition: color 0.3s ease;
      }
      a:hover,
      a:active {
        color: var(--story-headline-color-hover);
      }
      footer {
        font: var(--footer-text-font-weight) var(--footer-text-font-size) /
          var(--footer-text-line-height) var(--footer-text-font-family);
        letter-spacing: var(--footer-text-letter-spacing);
        text-align: right;
        color: var(--footer-text-color-normal);
      }
      footer.left-aligned {
        text-align: left;
      }
      .footer__logo {
        font: var(--footer-logo-font-weight) var(--footer-logo-font-size) /
          var(--footer-logo-line-height) var(--footer-logo-font-family);
        letter-spacing: var(--footer-logo-letter-spacing);
        color: var(--footer-logo-color-normal);
      }
    `}connectedCallback(){super.connectedCallback(),this.partnerConfig||this.loadConfig(this.slug),this.connectIntersectionObserver()}willUpdate(t){let e=!1;const i=["category","edition","stories"];for(const o of t.keys())if(i.includes(o)&&t.get(o)!==this[o]){e=!0;break}e&&this.fetchTop()}async fetchTop(){var o;this._loaded=!1;let t=this.stories||5;this.slug==="istories"&&(t=3),this.slug==="republic"&&(t=6),this.slug==="verstka"&&(t=6),this.slug==="ovd-info"&&(t=this.stories||9);const e=this.edition||((o=this.partnerConfig)==null?void 0:o.edition);let i=`${mt}/main?with_icons=1&edition=${e}&limit=${t}&slug=${this.slug}`;this.category&&(i+=`&category=${this.category}`);try{const r=await(await fetch(i)).json();this.count=r.content.source_count,this.top=r.content.top,this._loaded=!0}catch{}}async loadConfig(t){this._configLoaded=!1;try{const e=await fetch(`${mt}/${t}`,{cache:"force-cache"});this.partnerConfig=await e.json(),this.partnerConfig.edition&&this.partnerConfig.edition!==this.edition&&(this.edition=this.partnerConfig.edition),t==="ovd-info"&&this.stories<6&&(this.partnerConfig.columns=1),this._configLoaded=!0}catch{}}connectIntersectionObserver(){const t={root:null,threshold:.3},e=new IntersectionObserver(this.handleIntersect,t);e.slug=this.slug,e.observe(this)}async handleIntersect(t,e){const i=`${Ot}?slug=${e.slug}`;if(t[0].isIntersecting&&!this._visible){this._visible=!0;try{await fetch(i)}catch{}}}customStyling(){return p`<style>
      ${this.partnerConfig.css}
    </style>`}headerTemplate(){if(this.partnerConfig.headerType==="no_header")return;const t=this.partnerConfig.iconSize===24?"header__img--gross":"header__img--klein",e=p`<a class="nowrap header__logo" href=${vt} target="_blank">
      <img
        class=${t}
        src=${this.partnerConfig.icon}
        alt="logo"
      />&#x2006;the&#x2006;True&#x2006;Story
    </a>`;let i;switch(this.partnerConfig.headerType){case"max":i=p`<span class="header__source"
            >${this.partnerConfig.mediaName}&#x2006;<span class="nowrap">и&#x2006;ещё</span
            >&#x2006;<span class="nowrap"
              >${this.count}&#x2006;${this.inclineSource(this.count)}</span
            ></span
          >&#x2006;<span class="nowrap">в&#x2006;главных&#x2006;сюжетах ${e}</span>`;break;case"extended":i=p`<span class="header__source"
            >${this.partnerConfig.mediaName}&#x2006;<span class="nowrap">и&#x2006;ещё</span
            >&#x2006;<span class="nowrap"
              >${this.count}&#x2006;${this.inclineSource(this.count)}</span
            ></span
          >&#x2006;<span>${e}</span>`;break;case"plus":i=p`<span class="nowrap header__source"
            >${this.partnerConfig.mediaName}&#x2006;+${this.count}</span
          >
          ${e}`;break;case"just_logo":i=p`${e}`;break;case"short":i=p``;break;case"basic":default:i=p``}return p`
      <header>
        <p>${i}</p>
      </header>
    `}footerTemplate(){const t=this.slug==="echofm"?"left-aligned":"";return p``}render(){if(!this._loaded||!this._configLoaded)return"";let t="";return this.partnerConfig.columns===2&&(t+=" columns two-columns"),this.partnerConfig.columns===3&&(t+=" columns three-columns"),[this.variant,this.partnerConfig.variant].includes("dressed")&&(t+=" dressed"),p`
      ${this.customStyling()}

      <article class=${t||u}>
        ${this.headerTemplate()}

        <ul>
          ${this.top.map((e,i)=>p`
              <li>
                <thetruestory-widget-top-item
                  .item=${e}
                  .first=${i===0}
                  .showIcons=${this.partnerConfig.showIcons&&!this.noIcons}
                  .showTimes=${this.partnerConfig.showTimes}
                  .slug=${this.slug}
                  .storyCounter=${this.partnerConfig.storyCounter}
                >
                </thetruestory-widget-top-item>
              </li>
            `)}
        </ul>

        ${this.footerTemplate()}
      </article>
    `}}return window.customElements.get("thetruestory-widget-top")||window.customElements.define("thetruestory-widget-top",$t),m.ThetruestoryWidgetTop=$t,Object.defineProperty(m,Symbol.toStringTag,{value:"Module"}),m}({});
