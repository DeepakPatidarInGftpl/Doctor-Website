"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[82482],{87078:(v,p,o)=>{o.d(p,{G:()=>r.G,T:()=>y.T});var r=o(10008),y=o(33861)},10008:(v,p,o)=>{o.d(p,{G:()=>c});var r=o(94650),c=function(){function i(t,e,a){this.el=t,this.vcr=e,this.renderer=a,this.dtOptions={}}return i.prototype.ngOnInit=function(){var t=this;this.dtTrigger?this.dtTrigger.subscribe(function(e){t.displayTable(e)}):this.displayTable(null)},i.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},i.prototype.displayTable=function(t){var e=this;t&&(this.dtOptions=t),this.dtInstance=new Promise(function(a,l){Promise.resolve(e.dtOptions).then(function(n){0===Object.keys(n).length&&0===$("tbody tr",e.el.nativeElement).length?l("Both the table and dtOptions cannot be empty"):setTimeout(function(){var u={rowCallback:function(f,d,g){if(n.columns){var _=n.columns;e.applyNgPipeTransform(f,_),e.applyNgRefTemplate(f,_,d)}n.rowCallback&&n.rowCallback(f,d,g)}};u=Object.assign({},n,u),e.dt=$(e.el.nativeElement).DataTable(u),a(e.dt)})})})},i.prototype.applyNgPipeTransform=function(t,e){e.filter(function(l){return l.ngPipeInstance&&!l.ngTemplateRef}).forEach(function(l){var n=l.ngPipeInstance,s=l.ngPipeArgs||[],u=e.findIndex(function(_){return _.data===l.data}),f=t.childNodes.item(u),d=$(f).text(),g=n.transform.apply(n,function(i,t,e){if(e||2===arguments.length)for(var n,a=0,l=t.length;a<l;a++)(n||!(a in t))&&(n||(n=Array.prototype.slice.call(t,0,a)),n[a]=t[a]);return i.concat(n||Array.prototype.slice.call(t))}([d],s,!1));$(f).text(g)})},i.prototype.applyNgRefTemplate=function(t,e,a){var l=this;e.filter(function(s){return s.ngTemplateRef&&!s.ngPipeInstance}).forEach(function(s){var u=s.ngTemplateRef,f=u.ref,d=u.context,g=e.findIndex(function(m){return m.data===s.data}),_=t.childNodes.item(g);$(_).html("");var b=Object.assign({},d,d?.userData,{adtData:a}),h=l.vcr.createEmbeddedView(f,b);l.renderer.appendChild(_,h.rootNodes[0])})},i.\u0275fac=function(e){return new(e||i)(r.Y36(r.SBq),r.Y36(r.s_b),r.Y36(r.Qsj))},i.\u0275dir=r.lG2({type:i,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),i}()},33861:(v,p,o)=>{o.d(p,{T:()=>i});var r=o(36895),c=(o(10008),o(94650)),i=function(){function t(){}return t.forRoot=function(){return{ngModule:t}},t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[r.ez]}),t}()},71002:(v,p,o)=>{function r(y){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(c){return typeof c}:function(c){return c&&"function"==typeof Symbol&&c.constructor===Symbol&&c!==Symbol.prototype?"symbol":typeof c})(y)}o.d(p,{Z:()=>r})}}]);