"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[531],{53101:(I,R,s)=>{s.d(R,{E:()=>O});var b=s(84408);let _,a=1;const S={};function C(h){return h in S&&(delete S[h],!0)}const x={setImmediate(h){const o=a++;return S[o]=!0,_||(_=Promise.resolve()),_.then(()=>C(o)&&h()),o},clearImmediate(h){C(h)}},{setImmediate:k,clearImmediate:v}=x,w={setImmediate(...h){const{delegate:o}=w;return(o?.setImmediate||k)(...h)},clearImmediate(h){const{delegate:o}=w;return(o?.clearImmediate||v)(h)},delegate:void 0};var y=s(640);const O=new class D extends y.v{flush(o){this._active=!0;const f=this._scheduled;this._scheduled=void 0;const{actions:d}=this;let m;o=o||d.shift();do{if(m=o.execute(o.state,o.delay))break}while((o=d[0])&&o.id===f&&d.shift());if(this._active=!1,m){for(;(o=d[0])&&o.id===f&&d.shift();)o.unsubscribe();throw m}}}(class V extends b.o{constructor(o,f){super(o,f),this.scheduler=o,this.work=f}requestAsyncId(o,f,d=0){return null!==d&&d>0?super.requestAsyncId(o,f,d):(o.actions.push(this),o._scheduled||(o._scheduled=w.setImmediate(o.flush.bind(o,void 0))))}recycleAsyncId(o,f,d=0){if(null!=d&&d>0||null==d&&this.delay>0)return super.recycleAsyncId(o,f,d);o.actions.some(m=>m.id===f)||(w.clearImmediate(f),o._scheduled=void 0)}})},30531:(I,R,s)=>{s.d(R,{ZD:()=>z,mF:()=>T,Cl:()=>P,rL:()=>B});var b=s(21281),a=s(94650),_=s(77579),S=s(39646),C=s(69751),x=s(54968),F=s(84408),k=s(50727);const v={schedule(n){let i=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:t}=v;t&&(i=t.requestAnimationFrame,e=t.cancelAnimationFrame);const r=i(l=>{e=void 0,n(l)});return new k.w0(()=>e?.(r))},requestAnimationFrame(...n){const{delegate:i}=v;return(i?.requestAnimationFrame||requestAnimationFrame)(...n)},cancelAnimationFrame(...n){const{delegate:i}=v;return(i?.cancelAnimationFrame||cancelAnimationFrame)(...n)},delegate:void 0};var V=s(640);new class y extends V.v{flush(i){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:t}=this;let r;i=i||t.shift();do{if(r=i.execute(i.state,i.delay))break}while((i=t[0])&&i.id===e&&t.shift());if(this._active=!1,r){for(;(i=t[0])&&i.id===e&&t.shift();)i.unsubscribe();throw r}}}(class w extends F.o{constructor(i,e){super(i,e),this.scheduler=i,this.work=e}requestAsyncId(i,e,t=0){return null!==t&&t>0?super.requestAsyncId(i,e,t):(i.actions.push(this),i._scheduled||(i._scheduled=v.requestAnimationFrame(()=>i.flush(void 0))))}recycleAsyncId(i,e,t=0){if(null!=t&&t>0||null==t&&this.delay>0)return super.recycleAsyncId(i,e,t);i.actions.some(r=>r.id===e)||(v.cancelAnimationFrame(e),i._scheduled=void 0)}});s(53101);var h=s(23601),o=s(39300),f=s(83353),d=s(36895),m=s(40445);let T=(()=>{class n{constructor(e,t,r){this._ngZone=e,this._platform=t,this._scrolled=new _.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const t=this.scrollContainers.get(e);t&&(t.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new C.y(t=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe((0,h.e)(e)).subscribe(t):this._scrolled.subscribe(t);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,S.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,t)=>this.deregister(t)),this._scrolled.complete()}ancestorScrolled(e,t){const r=this.getAncestorScrollContainers(e);return this.scrolled(t).pipe((0,o.h)(l=>!l||r.indexOf(l)>-1))}getAncestorScrollContainers(e){const t=[];return this.scrollContainers.forEach((r,l)=>{this._scrollableContainsElement(l,e)&&t.push(l)}),t}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,t){let r=(0,b.fI)(t),l=e.getElementRef().nativeElement;do{if(r==l)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,x.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return n.\u0275fac=function(e){return new(e||n)(a.LFG(a.R0b),a.LFG(f.t4),a.LFG(d.K0,8))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),B=(()=>{class n{constructor(e,t,r){this._platform=e,this._change=new _.x,this._changeListener=l=>{this._change.next(l)},this._document=r,t.runOutsideAngular(()=>{if(e.isBrowser){const l=this._getWindow();l.addEventListener("resize",this._changeListener),l.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:t,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+t,height:r,width:t}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,t=this._getWindow(),r=e.documentElement,l=r.getBoundingClientRect();return{top:-l.top||e.body.scrollTop||t.scrollY||r.scrollTop||0,left:-l.left||e.body.scrollLeft||t.scrollX||r.scrollLeft||0}}change(e=20){return e>0?this._change.pipe((0,h.e)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return n.\u0275fac=function(e){return new(e||n)(a.LFG(f.t4),a.LFG(a.R0b),a.LFG(d.K0,8))},n.\u0275prov=a.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({}),n})(),P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=a.oAB({type:n}),n.\u0275inj=a.cJS({imports:[m.vT,z,m.vT,z]}),n})()}}]);