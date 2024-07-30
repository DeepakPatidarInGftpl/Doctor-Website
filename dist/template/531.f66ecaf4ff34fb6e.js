"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[531],{53101:(L,R,s)=>{s.d(R,{E:()=>E});var b=s(84408);let _,a=1;const S={};function C(h){return h in S&&(delete S[h],!0)}const x={setImmediate(h){const l=a++;return S[l]=!0,_||(_=Promise.resolve()),_.then(()=>C(l)&&h()),l},clearImmediate(h){C(h)}},{setImmediate:k,clearImmediate:v}=x,w={setImmediate(...h){const{delegate:l}=w;return(l?.setImmediate||k)(...h)},clearImmediate(h){const{delegate:l}=w;return(l?.clearImmediate||v)(h)},delegate:void 0};var y=s(97565);const E=new class D extends y.v{flush(l){this._active=!0;const u=this._scheduled;this._scheduled=void 0;const{actions:d}=this;let p;l=l||d.shift();do{if(p=l.execute(l.state,l.delay))break}while((l=d[0])&&l.id===u&&d.shift());if(this._active=!1,p){for(;(l=d[0])&&l.id===u&&d.shift();)l.unsubscribe();throw p}}}(class V extends b.o{constructor(l,u){super(l,u),this.scheduler=l,this.work=u}requestAsyncId(l,u,d=0){return null!==d&&d>0?super.requestAsyncId(l,u,d):(l.actions.push(this),l._scheduled||(l._scheduled=w.setImmediate(l.flush.bind(l,void 0))))}recycleAsyncId(l,u,d=0){var p;if(null!=d?d>0:this.delay>0)return super.recycleAsyncId(l,u,d);const{actions:z}=l;null!=u&&(null===(p=z[z.length-1])||void 0===p?void 0:p.id)!==u&&(w.clearImmediate(u),l._scheduled=void 0)}})},30531:(L,R,s)=>{s.d(R,{ZD:()=>F,mF:()=>A,Cl:()=>M,rL:()=>P});var b=s(21281),a=s(94650),_=s(77579),S=s(39646),C=s(69751),x=s(54968),O=s(84408),k=s(50727);const v={schedule(n){let i=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:t}=v;t&&(i=t.requestAnimationFrame,e=t.cancelAnimationFrame);const r=i(o=>{e=void 0,n(o)});return new k.w0(()=>e?.(r))},requestAnimationFrame(...n){const{delegate:i}=v;return(i?.requestAnimationFrame||requestAnimationFrame)(...n)},cancelAnimationFrame(...n){const{delegate:i}=v;return(i?.cancelAnimationFrame||cancelAnimationFrame)(...n)},delegate:void 0};var V=s(97565);new class y extends V.v{flush(i){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:t}=this;let r;i=i||t.shift();do{if(r=i.execute(i.state,i.delay))break}while((i=t[0])&&i.id===e&&t.shift());if(this._active=!1,r){for(;(i=t[0])&&i.id===e&&t.shift();)i.unsubscribe();throw r}}}(class w extends O.o{constructor(i,e){super(i,e),this.scheduler=i,this.work=e}requestAsyncId(i,e,t=0){return null!==t&&t>0?super.requestAsyncId(i,e,t):(i.actions.push(this),i._scheduled||(i._scheduled=v.requestAnimationFrame(()=>i.flush(void 0))))}recycleAsyncId(i,e,t=0){var r;if(null!=t?t>0:this.delay>0)return super.recycleAsyncId(i,e,t);const{actions:o}=i;null!=e&&(null===(r=o[o.length-1])||void 0===r?void 0:r.id)!==e&&(v.cancelAnimationFrame(e),i._scheduled=void 0)}});s(53101);var h=s(23601),l=s(39300),u=s(83353),d=s(36895),p=s(40445);let A=(()=>{class n{constructor(e,t,r){this._ngZone=e,this._platform=t,this._scrolled=new _.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new C.y(t=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe((0,h.e)(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,S.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,l.h)(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&t.push(o)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let r=(0,b.fI)(t),o=e.getElementRef().nativeElement;do{if(r==o)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,x.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return n.\u0275fac=function(e){return new(e||n)(a.LFG(a.R0b),a.LFG(u.t4),a.LFG(d.K0,8))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),P=(()=>{class n{constructor(e,t,r){this._platform=e,this._change=new _.x,this._changeListener=o=>{this._change.next(o)},this._document=r,t.runOutsideAngular(()=>{if(e.isBrowser){const o=this._getWindow();o.addEventListener("resize",this._changeListener),o.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect();return{top:-o.top||e.body.scrollTop||t.scrollY||r.scrollTop||0,left:-o.left||e.body.scrollLeft||t.scrollX||r.scrollLeft||0}}change(e=20){return e>0?this._change.pipe((0,h.e)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return n.\u0275fac=function(e){return new(e||n)(a.LFG(u.t4),a.LFG(a.R0b),a.LFG(d.K0,8))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),F=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({}),n})(),M=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[p.vT,F,p.vT,F]}),n})()}}]);