"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2371],{30597:(D,y,s)=>{s.d(y,{l:()=>P});var r=s(94650),l=s(88996),g=s(97185),v=s(42917),E=s(80927);let P=(()=>{class o{constructor(m,u,c,n,p){this.router=m,this.Arout=u,this.toastr=c,this.profileService=n,this.coreService=p}canActivate(m,u){const c=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(n=>{this.userDetails=n,this.permissions=this.userDetails?.permission}),c){const n=m.data.allowedRoles;console.log(n,"allowedRoles");const p=c.some(b=>n.includes(b.codename));if(console.log(p),this.coreService.getProfile().subscribe(b=>{this.userDetails=b,this.profileService.setUserDetails(this.userDetails);const d=b?.permission,_=this.profileService.getUserDetails();(!_||_.length!==d.length)&&(this.profileService.setUserPermission(d),window.location.reload())}),p)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return o.\u0275fac=function(m){return new(m||o)(r.LFG(l.F0),r.LFG(l.gz),r.LFG(g._W),r.LFG(v.J),r.LFG(E.p))},o.\u0275prov=r.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},73162:(D,y,s)=>{s.d(y,{Cv:()=>_,pW:()=>b});var r=s(94650),l=s(36895),g=s(3238),v=s(21281),E=s(50727),P=s(54968),o=s(39300);const M=["primaryValueBar"],m=(0,g.pj)(class{constructor(e){this._elementRef=e}},"primary"),u=new r.OlP("mat-progress-bar-location",{providedIn:"root",factory:function c(){const e=(0,r.f3M)(l.K0),i=e?e.location:null;return{getPathname:()=>i?i.pathname+i.search:""}}}),n=new r.OlP("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");let p=0,b=(()=>{class e extends m{constructor(a,t,f,O,h,A){super(a),this._ngZone=t,this._animationMode=f,this._changeDetectorRef=A,this._isNoopAnimation=!1,this._value=0,this._bufferValue=0,this.animationEnd=new r.vpe,this._animationEndSubscription=E.w0.EMPTY,this.mode="determinate",this.progressbarId="mat-progress-bar-"+p++;const k=O?O.getPathname().split("#")[0]:"";this._rectangleFillValue=`url('${k}#${this.progressbarId}')`,this._isNoopAnimation="NoopAnimations"===f,h&&(h.color&&(this.color=this.defaultColor=h.color),this.mode=h.mode||this.mode)}get value(){return this._value}set value(a){this._value=d((0,v.su)(a)||0),this._changeDetectorRef?.markForCheck()}get bufferValue(){return this._bufferValue}set bufferValue(a){this._bufferValue=d(a||0),this._changeDetectorRef?.markForCheck()}_primaryTransform(){return{transform:`scale3d(${this.value/100}, 1, 1)`}}_bufferTransform(){return"buffer"===this.mode?{transform:`scale3d(${this.bufferValue/100}, 1, 1)`}:null}ngAfterViewInit(){this._ngZone.runOutsideAngular(()=>{const a=this._primaryValueBar.nativeElement;this._animationEndSubscription=(0,P.R)(a,"transitionend").pipe((0,o.h)(t=>t.target===a)).subscribe(()=>{0!==this.animationEnd.observers.length&&("determinate"===this.mode||"buffer"===this.mode)&&this._ngZone.run(()=>this.animationEnd.next({value:this.value}))})})}ngOnDestroy(){this._animationEndSubscription.unsubscribe()}}return e.\u0275fac=function(a){return new(a||e)(r.Y36(r.SBq),r.Y36(r.R0b),r.Y36(r.QbO,8),r.Y36(u,8),r.Y36(n,8),r.Y36(r.sBO))},e.\u0275cmp=r.Xpm({type:e,selectors:[["mat-progress-bar"]],viewQuery:function(a,t){if(1&a&&r.Gf(M,5),2&a){let f;r.iGM(f=r.CRH())&&(t._primaryValueBar=f.first)}},hostAttrs:["role","progressbar","aria-valuemin","0","aria-valuemax","100","tabindex","-1",1,"mat-progress-bar"],hostVars:4,hostBindings:function(a,t){2&a&&(r.uIk("aria-valuenow","indeterminate"===t.mode||"query"===t.mode?null:t.value)("mode",t.mode),r.ekj("_mat-animation-noopable",t._isNoopAnimation))},inputs:{color:"color",value:"value",bufferValue:"bufferValue",mode:"mode"},outputs:{animationEnd:"animationEnd"},exportAs:["matProgressBar"],features:[r.qOj],decls:10,vars:4,consts:[["aria-hidden","true"],["width","100%","height","4","focusable","false",1,"mat-progress-bar-background","mat-progress-bar-element"],["x","4","y","0","width","8","height","4","patternUnits","userSpaceOnUse",3,"id"],["cx","2","cy","2","r","2"],["width","100%","height","100%"],[1,"mat-progress-bar-buffer","mat-progress-bar-element",3,"ngStyle"],[1,"mat-progress-bar-primary","mat-progress-bar-fill","mat-progress-bar-element",3,"ngStyle"],["primaryValueBar",""],[1,"mat-progress-bar-secondary","mat-progress-bar-fill","mat-progress-bar-element"]],template:function(a,t){1&a&&(r.TgZ(0,"div",0),r.O4$(),r.TgZ(1,"svg",1)(2,"defs")(3,"pattern",2),r._UZ(4,"circle",3),r.qZA()(),r._UZ(5,"rect",4),r.qZA(),r.kcU(),r._UZ(6,"div",5)(7,"div",6,7)(9,"div",8),r.qZA()),2&a&&(r.xp6(3),r.Q6J("id",t.progressbarId),r.xp6(2),r.uIk("fill",t._rectangleFillValue),r.xp6(1),r.Q6J("ngStyle",t._bufferTransform()),r.xp6(1),r.Q6J("ngStyle",t._primaryTransform()))},dependencies:[l.PC],styles:['.mat-progress-bar{display:block;height:4px;overflow:hidden;position:relative;transition:opacity 250ms linear;width:100%}.mat-progress-bar._mat-animation-noopable{transition:none !important;animation:none !important}.mat-progress-bar .mat-progress-bar-element,.mat-progress-bar .mat-progress-bar-fill::after{height:100%;position:absolute;width:100%}.mat-progress-bar .mat-progress-bar-background{width:calc(100% + 10px)}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-background{display:none}.mat-progress-bar .mat-progress-bar-buffer{transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-buffer{border-top:solid 5px;opacity:.5}.mat-progress-bar .mat-progress-bar-secondary{display:none}.mat-progress-bar .mat-progress-bar-fill{animation:none;transform-origin:top left;transition:transform 250ms ease}.cdk-high-contrast-active .mat-progress-bar .mat-progress-bar-fill{border-top:solid 4px}.mat-progress-bar .mat-progress-bar-fill::after{animation:none;content:"";display:inline-block;left:0}.mat-progress-bar[dir=rtl],[dir=rtl] .mat-progress-bar{transform:rotateY(180deg)}.mat-progress-bar[mode=query]{transform:rotateZ(180deg)}.mat-progress-bar[mode=query][dir=rtl],[dir=rtl] .mat-progress-bar[mode=query]{transform:rotateZ(180deg) rotateY(180deg)}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-fill,.mat-progress-bar[mode=query] .mat-progress-bar-fill{transition:none}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary,.mat-progress-bar[mode=query] .mat-progress-bar-primary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-translate 2000ms infinite linear;left:-145.166611%}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-primary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-primary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary,.mat-progress-bar[mode=query] .mat-progress-bar-secondary{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-translate 2000ms infinite linear;left:-54.888891%;display:block}.mat-progress-bar[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar[mode=query] .mat-progress-bar-secondary.mat-progress-bar-fill::after{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-secondary-indeterminate-scale 2000ms infinite linear}.mat-progress-bar[mode=buffer] .mat-progress-bar-background{-webkit-backface-visibility:hidden;backface-visibility:hidden;animation:mat-progress-bar-background-scroll 250ms infinite linear;display:block}.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-buffer,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-primary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-secondary.mat-progress-bar-fill::after,.mat-progress-bar._mat-animation-noopable .mat-progress-bar-background{animation:none;transition-duration:1ms}@keyframes mat-progress-bar-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mat-progress-bar-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mat-progress-bar-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mat-progress-bar-background-scroll{to{transform:translateX(-8px)}}'],encapsulation:2,changeDetection:0}),e})();function d(e,i=0,a=100){return Math.max(i,Math.min(a,e))}let _=(()=>{class e{}return e.\u0275fac=function(a){return new(a||e)},e.\u0275mod=r.oAB({type:e}),e.\u0275inj=r.cJS({imports:[l.ez,g.BQ,g.BQ]}),e})()}}]);