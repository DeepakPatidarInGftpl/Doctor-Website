"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8651],{30597:(O,S,o)=>{o.d(S,{l:()=>E});var n=o(94650),k=o(89299),v=o(97185),h=o(42917),e=o(80927);let E=(()=>{class m{constructor(_,l,g,f,p){this.router=_,this.Arout=l,this.toastr=g,this.profileService=f,this.coreService=p}canActivate(_,l){const g=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(f=>{this.userDetails=f,this.permissions=this.userDetails?.permission}),g){const f=_.data.allowedRoles;console.log(f,"allowedRoles");const p=g.some(u=>f.includes(u.codename));if(console.log(p),this.coreService.getProfile().subscribe(u=>{this.userDetails=u,this.profileService.setUserDetails(this.userDetails);const A=u?.permission,i=this.profileService.getUserDetails();(!i||i.length!==A.length)&&(this.profileService.setUserPermission(A),window.location.reload())}),p)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return m.\u0275fac=function(_){return new(_||m)(n.LFG(k.F0),n.LFG(k.gz),n.LFG(v._W),n.LFG(h.J),n.LFG(e.p))},m.\u0275prov=n.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},51572:(O,S,o)=>{o.d(S,{Cq:()=>P});var n=o(21281),k=o(83353),v=o(30531),h=o(36895),e=o(94650),E=o(3238),m=o(50727);function T(s,r){if(1&s&&(e.O4$(),e._UZ(0,"circle",4)),2&s){const t=e.oxw(),d=e.MAs(1);e.Udp("animation-name","mat-progress-spinner-stroke-rotate-"+t._spinnerAnimationLabel)("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(d)),e.uIk("r",t._getCircleRadius())}}function _(s,r){if(1&s&&(e.O4$(),e._UZ(0,"circle",4)),2&s){const t=e.oxw(),d=e.MAs(1);e.Udp("stroke-dashoffset",t._getStrokeDashOffset(),"px")("stroke-dasharray",t._getStrokeCircumference(),"px")("stroke-width",t._getCircleStrokeWidth(),"%")("transform-origin",t._getCircleTransformOrigin(d)),e.uIk("r",t._getCircleRadius())}}const f=(0,E.pj)(class{constructor(s){this._elementRef=s}},"primary"),p=new e.OlP("mat-progress-spinner-default-options",{providedIn:"root",factory:function u(){return{diameter:100}}});class i extends f{constructor(r,t,d,c,a,D,M,R){super(r),this._document=d,this._diameter=100,this._value=0,this._resizeSubscription=m.w0.EMPTY,this.mode="determinate";const L=i._diameters;this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),L.has(d.head)||L.set(d.head,new Set([100])),this._noopAnimations="NoopAnimations"===c&&!!a&&!a._forceAnimations,"mat-spinner"===r.nativeElement.nodeName.toLowerCase()&&(this.mode="indeterminate"),a&&(a.color&&(this.color=this.defaultColor=a.color),a.diameter&&(this.diameter=a.diameter),a.strokeWidth&&(this.strokeWidth=a.strokeWidth)),t.isBrowser&&t.SAFARI&&M&&D&&R&&(this._resizeSubscription=M.change(150).subscribe(()=>{"indeterminate"===this.mode&&R.run(()=>D.markForCheck())}))}get diameter(){return this._diameter}set diameter(r){this._diameter=(0,n.su)(r),this._spinnerAnimationLabel=this._getSpinnerAnimationLabel(),this._styleRoot&&this._attachStyleNode()}get strokeWidth(){return this._strokeWidth||this.diameter/10}set strokeWidth(r){this._strokeWidth=(0,n.su)(r)}get value(){return"determinate"===this.mode?this._value:0}set value(r){this._value=Math.max(0,Math.min(100,(0,n.su)(r)))}ngOnInit(){const r=this._elementRef.nativeElement;this._styleRoot=(0,k.kV)(r)||this._document.head,this._attachStyleNode(),r.classList.add("mat-progress-spinner-indeterminate-animation")}ngOnDestroy(){this._resizeSubscription.unsubscribe()}_getCircleRadius(){return(this.diameter-10)/2}_getViewBox(){const r=2*this._getCircleRadius()+this.strokeWidth;return`0 0 ${r} ${r}`}_getStrokeCircumference(){return 2*Math.PI*this._getCircleRadius()}_getStrokeDashOffset(){return"determinate"===this.mode?this._getStrokeCircumference()*(100-this._value)/100:null}_getCircleStrokeWidth(){return this.strokeWidth/this.diameter*100}_getCircleTransformOrigin(r){const t=50*(r.currentScale??1);return`${t}% ${t}%`}_attachStyleNode(){const r=this._styleRoot,t=this._diameter,d=i._diameters;let c=d.get(r);if(!c||!c.has(t)){const a=this._document.createElement("style");a.setAttribute("mat-spinner-animation",this._spinnerAnimationLabel),a.textContent=this._getAnimationText(),r.appendChild(a),c||(c=new Set,d.set(r,c)),c.add(t)}}_getAnimationText(){const r=this._getStrokeCircumference();return"\n @keyframes mat-progress-spinner-stroke-rotate-DIAMETER {\n    0%      { stroke-dashoffset: START_VALUE;  transform: rotate(0); }\n    12.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(0); }\n    12.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(72.5deg); }\n    25%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(72.5deg); }\n\n    25.0001%   { stroke-dashoffset: START_VALUE;  transform: rotate(270deg); }\n    37.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(270deg); }\n    37.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(161.5deg); }\n    50%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(161.5deg); }\n\n    50.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(180deg); }\n    62.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(180deg); }\n    62.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(251.5deg); }\n    75%     { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(251.5deg); }\n\n    75.0001%  { stroke-dashoffset: START_VALUE;  transform: rotate(90deg); }\n    87.5%   { stroke-dashoffset: END_VALUE;    transform: rotate(90deg); }\n    87.5001%  { stroke-dashoffset: END_VALUE;    transform: rotateX(180deg) rotate(341.5deg); }\n    100%    { stroke-dashoffset: START_VALUE;  transform: rotateX(180deg) rotate(341.5deg); }\n  }\n".replace(/START_VALUE/g,""+.95*r).replace(/END_VALUE/g,""+.2*r).replace(/DIAMETER/g,`${this._spinnerAnimationLabel}`)}_getSpinnerAnimationLabel(){return this.diameter.toString().replace(".","_")}}i._diameters=new WeakMap,i.\u0275fac=function(r){return new(r||i)(e.Y36(e.SBq),e.Y36(k.t4),e.Y36(h.K0,8),e.Y36(e.QbO,8),e.Y36(p),e.Y36(e.sBO),e.Y36(v.rL),e.Y36(e.R0b))},i.\u0275cmp=e.Xpm({type:i,selectors:[["mat-progress-spinner"],["mat-spinner"]],hostAttrs:["role","progressbar","tabindex","-1",1,"mat-progress-spinner","mat-spinner"],hostVars:10,hostBindings:function(r,t){2&r&&(e.uIk("aria-valuemin","determinate"===t.mode?0:null)("aria-valuemax","determinate"===t.mode?100:null)("aria-valuenow","determinate"===t.mode?t.value:null)("mode",t.mode),e.Udp("width",t.diameter,"px")("height",t.diameter,"px"),e.ekj("_mat-animation-noopable",t._noopAnimations))},inputs:{color:"color",diameter:"diameter",strokeWidth:"strokeWidth",mode:"mode",value:"value"},exportAs:["matProgressSpinner"],features:[e.qOj],decls:4,vars:8,consts:[["preserveAspectRatio","xMidYMid meet","focusable","false","aria-hidden","true",3,"ngSwitch"],["svg",""],["cx","50%","cy","50%",3,"animation-name","stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%",3,"stroke-dashoffset","stroke-dasharray","stroke-width","transform-origin",4,"ngSwitchCase"],["cx","50%","cy","50%"]],template:function(r,t){1&r&&(e.O4$(),e.TgZ(0,"svg",0,1),e.YNc(2,T,1,11,"circle",2),e.YNc(3,_,1,9,"circle",3),e.qZA()),2&r&&(e.Udp("width",t.diameter,"px")("height",t.diameter,"px"),e.Q6J("ngSwitch","indeterminate"===t.mode),e.uIk("viewBox",t._getViewBox()),e.xp6(2),e.Q6J("ngSwitchCase",!0),e.xp6(1),e.Q6J("ngSwitchCase",!1))},dependencies:[h.RF,h.n9],styles:[".mat-progress-spinner{display:block;position:relative;overflow:hidden}.mat-progress-spinner svg{position:absolute;transform:rotate(-90deg);top:0;left:0;transform-origin:center;overflow:visible}.mat-progress-spinner circle{fill:rgba(0,0,0,0);transition:stroke-dashoffset 225ms linear}.cdk-high-contrast-active .mat-progress-spinner circle{stroke:CanvasText}.mat-progress-spinner[mode=indeterminate] svg{animation:mat-progress-spinner-linear-rotate 2000ms linear infinite}.mat-progress-spinner[mode=indeterminate] circle{transition-property:stroke;animation-duration:4000ms;animation-timing-function:cubic-bezier(0.35, 0, 0.25, 1);animation-iteration-count:infinite}.mat-progress-spinner._mat-animation-noopable svg,.mat-progress-spinner._mat-animation-noopable circle{animation:none;transition:none}@keyframes mat-progress-spinner-linear-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes mat-progress-spinner-stroke-rotate-100{0%{stroke-dashoffset:268.606171575px;transform:rotate(0)}12.5%{stroke-dashoffset:56.5486677px;transform:rotate(0)}12.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(72.5deg)}25%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(72.5deg)}25.0001%{stroke-dashoffset:268.606171575px;transform:rotate(270deg)}37.5%{stroke-dashoffset:56.5486677px;transform:rotate(270deg)}37.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(161.5deg)}50%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(161.5deg)}50.0001%{stroke-dashoffset:268.606171575px;transform:rotate(180deg)}62.5%{stroke-dashoffset:56.5486677px;transform:rotate(180deg)}62.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(251.5deg)}75%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(251.5deg)}75.0001%{stroke-dashoffset:268.606171575px;transform:rotate(90deg)}87.5%{stroke-dashoffset:56.5486677px;transform:rotate(90deg)}87.5001%{stroke-dashoffset:56.5486677px;transform:rotateX(180deg) rotate(341.5deg)}100%{stroke-dashoffset:268.606171575px;transform:rotateX(180deg) rotate(341.5deg)}}"],encapsulation:2,changeDetection:0});let P=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[E.BQ,h.ez,E.BQ]}),s})()}}]);