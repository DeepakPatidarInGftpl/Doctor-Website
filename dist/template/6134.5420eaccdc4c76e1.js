"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6134],{96134:(C,h,l)=>{l.d(h,{ii:()=>y});var r=l(94650),f=l(36895);const c=new r.OlP("@sweetalert2/ngx-sweetalert2#swalProvider"),d=new r.OlP("@sweetalert2/ngx-sweetalert2#fireOnInit"),p=new r.OlP("@sweetalert2/ngx-sweetalert2#dismissOnDestroy");let u=(()=>{class t{constructor(e){this.swalProvider=e}get swal(){return this.swalPromiseCache||this.preloadSweetAlertLibrary(),this.swalPromiseCache}preloadSweetAlertLibrary(){if(this.swalPromiseCache)return;const e=function i(s){return"function"==typeof s&&void 0===s.version}(this.swalProvider)?this.swalProvider():Promise.resolve(this.swalProvider);this.swalPromiseCache=e.then(s=>function o(s){return"function"==typeof s}(s)?s:s.default)}}return t.\u0275fac=function(e){return new(e||t)(r.LFG(c))},t.\u0275prov=r.Yz7({token:t,factory:t.\u0275fac}),t})();function v(){return l.e(5226).then(l.t.bind(l,35226,19))}let y=(()=>{class t{static forRoot(e={}){return{ngModule:t,providers:[u,{provide:c,useValue:e.provideSwal||v},{provide:d,useValue:e.fireOnInit||!1},{provide:p,useValue:e.dismissOnDestroy||!0}]}}static forChild(e={}){return{ngModule:t,providers:[...e.provideSwal?[u,{provide:c,useValue:e.provideSwal}]:[],...void 0!==e.fireOnInit?[{provide:d,useValue:e.fireOnInit}]:[],...void 0!==e.dismissOnDestroy?[{provide:p,useValue:e.dismissOnDestroy}]:[]]}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[[f.ez]]}),t})()}}]);