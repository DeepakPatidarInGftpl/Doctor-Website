"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7392],{97392:(q,y,l)=>{l.d(y,{Hw:()=>J,Ps:()=>X});var i=l(94650),E=l(3238),P=l(21281),S=l(36895),u=l(39646),w=l(62843),D=l(4128),N=l(50727),C=l(18505),g=l(54004),U=l(70262),x=l(28746),B=l(13099),W=l(95698),M=l(80529),F=l(11481);const b=["*"];let m;function d(s){return function K(){if(void 0===m&&(m=null,typeof window<"u")){const s=window;void 0!==s.trustedTypes&&(m=s.trustedTypes.createPolicy("angular#components",{createHTML:c=>c}))}return m}()?.createHTML(s)||s}function R(s){return Error(`Unable to find icon with the name "${s}"`)}function A(s){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${s}".`)}function L(s){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${s}".`)}class h{constructor(c,t,e){this.url=c,this.svgText=t,this.options=e}}let v=(()=>{class s{constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._svgIconConfigs=new Map,this._iconSetConfigs=new Map,this._cachedIconsByUrl=new Map,this._inProgressUrlFetches=new Map,this._fontCssClassesByAlias=new Map,this._resolvers=[],this._defaultFontSetClass=["material-icons","mat-ligature-font"],this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace("",t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace("",t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new h(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){const r=this._sanitizer.sanitize(i.q3G.HTML,n);if(!r)throw L(n);const a=d(r);return this._addSvgIconConfig(t,e,new h("",a,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace("",t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace("",t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new h(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){const o=this._sanitizer.sanitize(i.q3G.HTML,e);if(!o)throw L(e);const r=d(o);return this._addSvgIconSetConfig(t,new h("",r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass}getSvgIconFromUrl(t){const e=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,t);if(!e)throw A(t);const n=this._cachedIconsByUrl.get(e);return n?(0,u.of)(I(n)):this._loadSvgIconFromConfig(new h(t,null)).pipe((0,C.b)(o=>this._cachedIconsByUrl.set(e,o)),(0,g.U)(o=>I(o)))}getNamedSvgIcon(t,e=""){const n=O(e,t);let o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);const r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):(0,w._)(R(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?(0,u.of)(I(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe((0,g.U)(e=>I(e)))}_getSvgFromIconSetConfigs(t,e){const n=this._extractIconWithNameFromAnySet(t,e);if(n)return(0,u.of)(n);const o=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe((0,U.K)(a=>{const _=`Loading icon set URL: ${this._sanitizer.sanitize(i.q3G.RESOURCE_URL,r.url)} failed: ${a.message}`;return this._errorHandler.handleError(new Error(_)),(0,u.of)(null)})));return(0,D.D)(o).pipe((0,g.U)(()=>{const r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw R(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){const o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){const r=this._svgElementFromConfig(o),a=this._extractSvgIconFromSet(r,t,o.options);if(a)return a}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe((0,C.b)(e=>t.svgText=e),(0,g.U)(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?(0,u.of)(null):this._fetchIcon(t).pipe((0,C.b)(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){const o=t.querySelector(`[id="${e}"]`);if(!o)return null;const r=o.cloneNode(!0);if(r.removeAttribute("id"),"svg"===r.nodeName.toLowerCase())return this._setSvgAttributes(r,n);if("symbol"===r.nodeName.toLowerCase())return this._setSvgAttributes(this._toSvgElement(r),n);const a=this._svgElementFromString(d("<svg></svg>"));return a.appendChild(r),this._setSvgAttributes(a,n)}_svgElementFromString(t){const e=this._document.createElement("DIV");e.innerHTML=t;const n=e.querySelector("svg");if(!n)throw Error("<svg> tag not found");return n}_toSvgElement(t){const e=this._svgElementFromString(d("<svg></svg>")),n=t.attributes;for(let o=0;o<n.length;o++){const{name:r,value:a}=n[o];"id"!==r&&e.setAttribute(r,a)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute("fit",""),t.setAttribute("height","100%"),t.setAttribute("width","100%"),t.setAttribute("preserveAspectRatio","xMidYMid meet"),t.setAttribute("focusable","false"),e&&e.viewBox&&t.setAttribute("viewBox",e.viewBox),t}_fetchIcon(t){const{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw function H(){return Error("Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.")}();if(null==e)throw Error(`Cannot fetch icon from URL "${e}".`);const r=this._sanitizer.sanitize(i.q3G.RESOURCE_URL,e);if(!r)throw A(e);const a=this._inProgressUrlFetches.get(r);if(a)return a;const f=this._httpClient.get(r,{responseType:"text",withCredentials:o}).pipe((0,g.U)(_=>d(_)),(0,x.x)(()=>this._inProgressUrlFetches.delete(r)),(0,B.B)());return this._inProgressUrlFetches.set(r,f),f}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(O(t,e),n),this}_addSvgIconSetConfig(t,e){const n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){const e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){const o=this._resolvers[n](e,t);if(o)return $(o)?new h(o.url,null,o.options):new h(o,null)}}}return s.\u0275fac=function(t){return new(t||s)(i.LFG(M.eN,8),i.LFG(F.H7),i.LFG(S.K0,8),i.LFG(i.qLn))},s.\u0275prov=i.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})();function I(s){return s.cloneNode(!0)}function O(s,c){return s+":"+c}function $(s){return!(!s.url||!s.options)}const j=(0,E.pj)(class{constructor(s){this._elementRef=s}}),Y=new i.OlP("MAT_ICON_DEFAULT_OPTIONS"),G=new i.OlP("mat-icon-location",{providedIn:"root",factory:function V(){const s=(0,i.f3M)(S.K0),c=s?s.location:null;return{getPathname:()=>c?c.pathname+c.search:""}}}),T=["clip-path","color-profile","src","cursor","fill","filter","marker","marker-start","marker-mid","marker-end","mask","stroke"],k=T.map(s=>`[${s}]`).join(", "),Q=/^url\(['"]?#(.*?)['"]?\)$/;let J=(()=>{class s extends j{constructor(t,e,n,o,r,a){super(t),this._iconRegistry=e,this._location=o,this._errorHandler=r,this._inline=!1,this._previousFontSetClass=[],this._currentIconFetch=N.w0.EMPTY,a&&(a.color&&(this.color=this.defaultColor=a.color),a.fontSet&&(this.fontSet=a.fontSet)),n||t.nativeElement.setAttribute("aria-hidden","true")}get inline(){return this._inline}set inline(t){this._inline=(0,P.Ig)(t)}get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}get fontSet(){return this._fontSet}set fontSet(t){const e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}get fontIcon(){return this._fontIcon}set fontIcon(t){const e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_splitIconName(t){if(!t)return["",""];const e=t.split(":");switch(e.length){case 1:return["",e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){const t=this._elementsWithExternalReferences;if(t&&t.size){const e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();const e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){const t=this._elementRef.nativeElement;let e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){const n=t.childNodes[e];(1!==n.nodeType||"svg"===n.nodeName.toLowerCase())&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;const t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes("mat-ligature-font")&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return"string"==typeof t?t.trim().split(" ")[0]:t}_prependPathToReferences(t){const e=this._elementsWithExternalReferences;e&&e.forEach((n,o)=>{n.forEach(r=>{o.setAttribute(r.name,`url('${t}#${r.value}')`)})})}_cacheChildrenWithExternalReferences(t){const e=t.querySelectorAll(k),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)T.forEach(r=>{const a=e[o],f=a.getAttribute(r),_=f?f.match(Q):null;if(_){let p=n.get(a);p||(p=[],n.set(a,p)),p.push({name:r,value:_[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){const[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe((0,W.q)(1)).subscribe(o=>this._setSvgElement(o),o=>{this._errorHandler.handleError(new Error(`Error retrieving icon ${e}:${n}! ${o.message}`))})}}}return s.\u0275fac=function(t){return new(t||s)(i.Y36(i.SBq),i.Y36(v),i.$8M("aria-hidden"),i.Y36(G),i.Y36(i.qLn),i.Y36(Y,8))},s.\u0275cmp=i.Xpm({type:s,selectors:[["mat-icon"]],hostAttrs:["role","img",1,"mat-icon","notranslate"],hostVars:7,hostBindings:function(t,e){2&t&&(i.uIk("data-mat-icon-type",e._usingFontIcon()?"font":"svg")("data-mat-icon-name",e._svgName||e.fontIcon)("data-mat-icon-namespace",e._svgNamespace||e.fontSet),i.ekj("mat-icon-inline",e.inline)("mat-icon-no-color","primary"!==e.color&&"accent"!==e.color&&"warn"!==e.color))},inputs:{color:"color",inline:"inline",svgIcon:"svgIcon",fontSet:"fontSet",fontIcon:"fontIcon"},exportAs:["matIcon"],features:[i.qOj],ngContentSelectors:b,decls:1,vars:0,template:function(t,e){1&t&&(i.F$t(),i.Hsn(0))},styles:[".mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}"],encapsulation:2,changeDetection:0}),s})(),X=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=i.oAB({type:s}),s.\u0275inj=i.cJS({imports:[E.BQ,E.BQ]}),s})()}}]);