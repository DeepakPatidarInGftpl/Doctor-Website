"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6326],{76326:(Y,k,a)=>{a.d(k,{ZD:()=>m,mF:()=>Z,Cl:()=>G,rL:()=>H});var V=a(21281),s=a(94650),v=a(77579),y=a(39646),D=a(69751),z=a(54968),_=a(84408),F=a(50727);const u={schedule(n){let t=requestAnimationFrame,e=cancelAnimationFrame;const{delegate:i}=u;i&&(t=i.requestAnimationFrame,e=i.cancelAnimationFrame);const r=t(o=>{e=void 0,n(o)});return new F.w0(()=>e?.(r))},requestAnimationFrame(...n){const{delegate:t}=u;return(t?.requestAnimationFrame||requestAnimationFrame)(...n)},cancelAnimationFrame(...n){const{delegate:t}=u;return(t?.cancelAnimationFrame||cancelAnimationFrame)(...n)},delegate:void 0};var S=a(640);new class E extends S.v{flush(t){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let r;t=t||i.shift();do{if(r=t.execute(t.state,t.delay))break}while((t=i[0])&&t.id===e&&i.shift());if(this._active=!1,r){for(;(t=i[0])&&t.id===e&&i.shift();)t.unsubscribe();throw r}}}(class O extends _.o{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return null!==i&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t._scheduled||(t._scheduled=u.requestAnimationFrame(()=>t.flush(void 0))))}recycleAsyncId(t,e,i=0){var r;if(null!=i?i>0:this.delay>0)return super.recycleAsyncId(t,e,i);const{actions:o}=t;null!=e&&(null===(r=o[o.length-1])||void 0===r?void 0:r.id)!==e&&(u.cancelAnimationFrame(e),t._scheduled=void 0)}});let g,L=1;const f={};function w(n){return n in f&&(delete f[n],!0)}const T={setImmediate(n){const t=L++;return f[t]=!0,g||(g=Promise.resolve()),g.then(()=>w(t)&&n()),t},clearImmediate(n){w(n)}},{setImmediate:A,clearImmediate:B}=T,p={setImmediate(...n){const{delegate:t}=p;return(t?.setImmediate||A)(...n)},clearImmediate(n){const{delegate:t}=p;return(t?.clearImmediate||B)(n)},delegate:void 0};new class M extends S.v{flush(t){this._active=!0;const e=this._scheduled;this._scheduled=void 0;const{actions:i}=this;let r;t=t||i.shift();do{if(r=t.execute(t.state,t.delay))break}while((t=i[0])&&t.id===e&&i.shift());if(this._active=!1,r){for(;(t=i[0])&&t.id===e&&i.shift();)t.unsubscribe();throw r}}}(class P extends _.o{constructor(t,e){super(t,e),this.scheduler=t,this.work=e}requestAsyncId(t,e,i=0){return null!==i&&i>0?super.requestAsyncId(t,e,i):(t.actions.push(this),t._scheduled||(t._scheduled=p.setImmediate(t.flush.bind(t,void 0))))}recycleAsyncId(t,e,i=0){var r;if(null!=i?i>0:this.delay>0)return super.recycleAsyncId(t,e,i);const{actions:o}=t;null!=e&&(null===(r=o[o.length-1])||void 0===r?void 0:r.id)!==e&&(p.clearImmediate(e),t._scheduled=void 0)}});var C=a(23601),W=a(39300),R=a(83353),b=a(36895),x=a(40445);let Z=(()=>{class n{constructor(e,i,r){this._ngZone=e,this._platform=i,this._scrolled=new v.x,this._globalSubscription=null,this._scrolledCount=0,this.scrollContainers=new Map,this._document=r}register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){const i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=20){return this._platform.isBrowser?new D.y(i=>{this._globalSubscription||this._addGlobalListener();const r=e>0?this._scrolled.pipe((0,C.e)(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{r.unsubscribe(),this._scrolledCount--,this._scrolledCount||this._removeGlobalListener()}}):(0,y.of)()}ngOnDestroy(){this._removeGlobalListener(),this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){const r=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe((0,W.h)(o=>!o||r.indexOf(o)>-1))}getAncestorScrollContainers(e){const i=[];return this.scrollContainers.forEach((r,o)=>{this._scrollableContainsElement(o,e)&&i.push(o)}),i}_getWindow(){return this._document.defaultView||window}_scrollableContainsElement(e,i){let r=(0,V.fI)(i),o=e.getElementRef().nativeElement;do{if(r==o)return!0}while(r=r.parentElement);return!1}_addGlobalListener(){this._globalSubscription=this._ngZone.runOutsideAngular(()=>{const e=this._getWindow();return(0,z.R)(e.document,"scroll").subscribe(()=>this._scrolled.next())})}_removeGlobalListener(){this._globalSubscription&&(this._globalSubscription.unsubscribe(),this._globalSubscription=null)}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(s.R0b),s.LFG(R.t4),s.LFG(b.K0,8))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),H=(()=>{class n{constructor(e,i,r){this._platform=e,this._change=new v.x,this._changeListener=o=>{this._change.next(o)},this._document=r,i.runOutsideAngular(()=>{if(e.isBrowser){const o=this._getWindow();o.addEventListener("resize",this._changeListener),o.addEventListener("orientationchange",this._changeListener)}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){if(this._platform.isBrowser){const e=this._getWindow();e.removeEventListener("resize",this._changeListener),e.removeEventListener("orientationchange",this._changeListener)}this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();const e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){const e=this.getViewportScrollPosition(),{width:i,height:r}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+r,right:e.left+i,height:r,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};const e=this._document,i=this._getWindow(),r=e.documentElement,o=r.getBoundingClientRect();return{top:-o.top||e.body.scrollTop||i.scrollY||r.scrollTop||0,left:-o.left||e.body.scrollLeft||i.scrollX||r.scrollLeft||0}}change(e=20){return e>0?this._change.pipe((0,C.e)(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){const e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}}return n.\u0275fac=function(e){return new(e||n)(s.LFG(R.t4),s.LFG(s.R0b),s.LFG(b.K0,8))},n.\u0275prov=s.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})(),m=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({}),n})(),G=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=s.oAB({type:n}),n.\u0275inj=s.cJS({imports:[x.vT,m,x.vT,m]}),n})()}}]);