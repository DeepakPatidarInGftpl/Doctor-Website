"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[907],{37718:(V,v,d)=>{d.r(v),d.d(v,{DetailsCountraVoucherModule:()=>h});var s=d(36895),f=d(88996),t=d(94650),m=d(71071);const D=function(o,i){return{"bg-lightgreen":o,"bg-lightred":i}};function a(o,i){if(1&o&&(t.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10)(4,"ul",11)(5,"li")(6,"h4"),t._uU(7,"To Account"),t.qZA(),t.TgZ(8,"h6"),t._uU(9),t.qZA()(),t.TgZ(10,"li")(11,"h4"),t._uU(12,"From Account"),t.qZA(),t.TgZ(13,"h6"),t._uU(14),t.qZA()(),t.TgZ(15,"li")(16,"h4"),t._uU(17,"Countra Voucher No."),t.qZA(),t.TgZ(18,"h6"),t._uU(19),t.qZA()(),t.TgZ(20,"li")(21,"h4"),t._uU(22,"Amount"),t.qZA(),t.TgZ(23,"h6"),t._uU(24),t.ALo(25,"currency"),t.qZA()(),t.TgZ(26,"li")(27,"h4"),t._uU(28,"Date"),t.qZA(),t.TgZ(29,"h6"),t._uU(30),t.qZA()(),t.TgZ(31,"li")(32,"h4"),t._uU(33,"Note"),t.qZA(),t.TgZ(34,"h6"),t._uU(35),t.qZA()()()()(),t.TgZ(36,"div",12)(37,"p",13),t._uU(38,"Is Active : "),t.qZA(),t.TgZ(39,"span",14),t._uU(40),t.qZA()()()()),2&o){const e=t.oxw();t.xp6(9),t.Oqu(null==e.countraVooucherDetails||null==e.countraVooucherDetails.to_account?null:e.countraVooucherDetails.to_account.account_id),t.xp6(5),t.hij(" ",null==e.countraVooucherDetails||null==e.countraVooucherDetails.from_account?null:e.countraVooucherDetails.from_account.account_id," "),t.xp6(5),t.Oqu(null==e.countraVooucherDetails?null:e.countraVooucherDetails.countra_voucher_no),t.xp6(5),t.Oqu(t.xi3(25,8,null==e.countraVooucherDetails?null:e.countraVooucherDetails.amount,"INR")),t.xp6(6),t.Oqu(null==e.countraVooucherDetails?null:e.countraVooucherDetails.date),t.xp6(5),t.Oqu(null==e.countraVooucherDetails?null:e.countraVooucherDetails.note),t.xp6(4),t.Q6J("ngClass",t.WLB(11,D,!0===(null==e.countraVooucherDetails?null:e.countraVooucherDetails.is_active),!1===(null==e.countraVooucherDetails?null:e.countraVooucherDetails.is_active))),t.xp6(1),t.Oqu(null==e.countraVooucherDetails?null:e.countraVooucherDetails.is_active)}}const c=[{path:"",component:(()=>{class o{constructor(e,p){this.transactionService=e,this.Arout=p}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.transactionService.getCountraVoucherById(this.id).subscribe(e=>{this.countraVooucherDetails=e})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.p),t.Y36(f.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-details-countra-voucher"]],decls:12,vars:2,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"row"],["class","col-lg-12 col-sm-12",4,"ngIf"],[1,"col-lg-12","col-sm-12"],[1,"card"],[1,"card-body"],[1,"productdetails"],[1,"product-bar"],[1,"d-flex","align-items-center","mx-4"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"]],template:function(e,p){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Countra Voucher Details"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Full details of a Countra Voucher"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Edit Countra Voucher "),t.qZA()()(),t.TgZ(10,"div",5),t.YNc(11,a,41,14,"div",6),t.qZA()),2&e&&(t.xp6(7),t.MGl("routerLink","//transaction/updatecountravoucher/",null==p.countraVooucherDetails?null:p.countraVooucherDetails.id,""),t.xp6(4),t.Q6J("ngIf",p.countraVooucherDetails))},dependencies:[s.mk,s.O5,f.yS,s.H9]}),o})(),canActivate:[d(30597).l],data:{allowedRoles:["view_countravoucher"]}}];let l=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.Bz.forChild(c),f.Bz]}),o})();var u=d(8468);let h=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[s.ez,l,u.I]}),o})()},65415:(V,v,d)=>{d.d(v,{G:()=>t,T:()=>D});var s=d(94650),t=function(){function a(r,n,c){this.el=r,this.vcr=n,this.renderer=c,this.dtOptions={}}return a.prototype.ngOnInit=function(){var r=this;this.dtTrigger?this.dtTrigger.subscribe(function(n){r.displayTable(n)}):this.displayTable(null)},a.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},a.prototype.displayTable=function(r){var n=this;r&&(this.dtOptions=r),this.dtInstance=new Promise(function(c,l){Promise.resolve(n.dtOptions).then(function(u){0===Object.keys(u).length&&0===$("tbody tr",n.el.nativeElement).length?l("Both the table and dtOptions cannot be empty"):setTimeout(function(){var o={rowCallback:function(i,e,p){if(u.columns){var g=u.columns;n.applyNgPipeTransform(i,g),n.applyNgRefTemplate(i,g,e)}u.rowCallback&&u.rowCallback(i,e,p)}};o=Object.assign({},u,o),n.dt=$(n.el.nativeElement).DataTable(o),c(n.dt)})})})},a.prototype.applyNgPipeTransform=function(r,n){n.filter(function(l){return l.ngPipeInstance&&!l.ngTemplateRef}).forEach(function(l){var u=l.ngPipeInstance,h=l.ngPipeArgs||[],o=n.findIndex(function(g){return g.data===l.data}),i=r.childNodes.item(o),e=$(i).text(),p=u.transform.apply(u,function(a,r,n){if(n||2===arguments.length)for(var u,c=0,l=r.length;c<l;c++)(u||!(c in r))&&(u||(u=Array.prototype.slice.call(r,0,c)),u[c]=r[c]);return a.concat(u||Array.prototype.slice.call(r))}([e],h,!1));$(i).text(p)})},a.prototype.applyNgRefTemplate=function(r,n,c){var l=this;n.filter(function(h){return h.ngTemplateRef&&!h.ngPipeInstance}).forEach(function(h){var o=h.ngTemplateRef,i=o.ref,e=o.context,p=n.findIndex(function(Z){return Z.data===h.data}),g=r.childNodes.item(p);$(g).html("");var T=Object.assign({},e,e?.userData,{adtData:c}),y=l.vcr.createEmbeddedView(i,T);l.renderer.appendChild(g,y.rootNodes[0])})},a.\u0275fac=function(n){return new(n||a)(s.Y36(s.SBq),s.Y36(s.s_b),s.Y36(s.Qsj))},a.\u0275dir=s.lG2({type:a,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),a}(),m=d(36895),D=function(){function a(){}return a.forRoot=function(){return{ngModule:a}},a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[m.ez]}),a}()}}]);