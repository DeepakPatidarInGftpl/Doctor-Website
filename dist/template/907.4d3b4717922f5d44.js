"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[907],{37718:(U,Z,u)=>{u.r(Z),u.d(Z,{DetailsCountraVoucherModule:()=>C});var l=u(36895),D=u(88996),t=u(94650),T=u(71071),y=u(3848),a=u(97392);function r(o,d){if(1&o&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",19),t._uU(3),t.qZA(),t.TgZ(4,"td",19),t._uU(5),t.qZA(),t.TgZ(6,"td",19),t._uU(7),t.qZA(),t.TgZ(8,"td",19),t._uU(9),t.ALo(10,"date"),t.qZA()(),t.BQk()),2&o){const e=d.$implicit,v=d.index;t.xp6(3),t.Oqu(v+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(10,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}function n(o,d){if(1&o&&(t.TgZ(0,"mat-tab",24)(1,"div",16)(2,"table",17)(3,"thead")(4,"tr")(5,"th",18),t._uU(6,"#"),t.qZA(),t.TgZ(7,"th",18),t._uU(8,"User"),t.qZA(),t.TgZ(9,"th",18),t._uU(10,"Operation Type"),t.qZA(),t.TgZ(11,"th",18),t._uU(12,"Date Time"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,r,11,7,"ng-container",25),t.qZA()()()()),2&o){const e=t.oxw(2);t.xp6(14),t.Q6J("ngForOf",null==e.countraVooucherDetails?null:e.countraVooucherDetails.logs)}}const c=function(o,d,e){return{"bg-lightgreen":o,"bg-lightred":d,"bg-lightyellow":e}};function s(o,d){if(1&o&&(t.TgZ(0,"div",11)(1,"div",12)(2,"mat-tab-group",13,14)(4,"mat-tab",15)(5,"div",16)(6,"table",17)(7,"tbody")(8,"tr")(9,"td",18),t._uU(10,"To Account"),t.qZA(),t.TgZ(11,"td",19),t._uU(12),t.qZA()(),t.TgZ(13,"tr")(14,"td",18),t._uU(15,"From Account"),t.qZA(),t.TgZ(16,"td",19),t._uU(17),t.qZA()(),t.TgZ(18,"tr")(19,"td",18),t._uU(20,"Countra Voucher No."),t.qZA(),t.TgZ(21,"td",19),t._uU(22),t.qZA()(),t.TgZ(23,"tr")(24,"td",18),t._uU(25,"Amount"),t.qZA(),t.TgZ(26,"td",19),t._uU(27),t.ALo(28,"currency"),t.qZA()(),t.TgZ(29,"tr")(30,"td",18),t._uU(31,"Date"),t.qZA(),t.TgZ(32,"td",19),t._uU(33),t.qZA()(),t.TgZ(34,"tr")(35,"td",18),t._uU(36,"Note"),t.qZA(),t.TgZ(37,"td",19),t._uU(38),t.qZA()()()()(),t.TgZ(39,"div",20)(40,"p",21),t._uU(41,"Is Active : "),t.qZA(),t.TgZ(42,"span",22),t._uU(43),t.qZA()()(),t.YNc(44,n,15,1,"mat-tab",23),t.qZA()()()),2&o){const e=t.oxw();t.xp6(12),t.Oqu(null==e.countraVooucherDetails||null==e.countraVooucherDetails.to_account?null:e.countraVooucherDetails.to_account.account_id),t.xp6(5),t.Oqu(null==e.countraVooucherDetails||null==e.countraVooucherDetails.to_account?null:e.countraVooucherDetails.to_account.account_id),t.xp6(5),t.Oqu(null==e.countraVooucherDetails?null:e.countraVooucherDetails.countra_voucher_no),t.xp6(5),t.Oqu(t.xi3(28,9,null==e.countraVooucherDetails?null:e.countraVooucherDetails.amount,"INR")),t.xp6(6),t.Oqu(null==e.countraVooucherDetails?null:e.countraVooucherDetails.date),t.xp6(5),t.Oqu(null==e.countraVooucherDetails?null:e.countraVooucherDetails.note),t.xp6(4),t.Q6J("ngClass",t.kEZ(12,c,!0===(null==e.countraVooucherDetails?null:e.countraVooucherDetails.is_active),!1===(null==e.countraVooucherDetails?null:e.countraVooucherDetails.is_active),"Partial"===(null==e.countraVooucherDetails?null:e.countraVooucherDetails.is_active))),t.xp6(1),t.Oqu(null==e.countraVooucherDetails?null:e.countraVooucherDetails.is_active),t.xp6(1),t.Q6J("ngIf",(null==e.countraVooucherDetails?null:e.countraVooucherDetails.logs.length)>0)}}const p=[{path:"",component:(()=>{class o{constructor(e,v,x){this.transactionService=e,this.Arout=v,this.location=x}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.transactionService.getCountraVoucherById(this.id).subscribe(e=>{this.countraVooucherDetails=e})}goBack(){this.location.back()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.p),t.Y36(D.gz),t.Y36(l.Ye))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-details-countra-voucher"]],decls:16,vars:2,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["class","company-details-card card",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],["animationDuration","0ms"],["tabGroup",""],["label","General Details"],[1,"table-responsive"],[1,"table"],[1,"th"],[1,"td"],[1,"d-flex","align-items-center","my-3","mx-3"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"],["label","Logs",4,"ngIf"],["label","Logs"],[4,"ngFor","ngForOf"]],template:function(e,v){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return v.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8," Back to Countra Voucher"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"Countra Voucher Details"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Countra Voucher "),t.qZA()()(),t.YNc(15,s,45,16,"div",10),t.qZA()()()),2&e&&(t.xp6(12),t.MGl("routerLink","//transaction/updatecountravoucher/",null==v.countraVooucherDetails?null:v.countraVooucherDetails.id,""),t.xp6(3),t.Q6J("ngIf",v.countraVooucherDetails))},dependencies:[l.mk,l.sg,l.O5,D.yS,y.SP,y.uX,a.Hw,l.H9,l.uU],styles:[".th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}"]}),o})(),canActivate:[u(30597).l],data:{allowedRoles:["view_countravoucher"]}}];let f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[D.Bz.forChild(p),D.Bz]}),o})();var g=u(8468),b=u(84385),m=u(56709),V=u(90455),A=u(24006);let C=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[l.ez,f,g.I,y.Nh,a.Ps,b.LD,m.p9,V.rP,A.u5]}),o})()},65415:(U,Z,u)=>{u.d(Z,{G:()=>t,T:()=>y});var l=u(94650),t=function(){function a(r,n,c){this.el=r,this.vcr=n,this.renderer=c,this.dtOptions={}}return a.prototype.ngOnInit=function(){var r=this;this.dtTrigger?this.dtTrigger.subscribe(function(n){r.displayTable(n)}):this.displayTable(null)},a.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},a.prototype.displayTable=function(r){var n=this;r&&(this.dtOptions=r),this.dtInstance=new Promise(function(c,s){Promise.resolve(n.dtOptions).then(function(i){0===Object.keys(i).length&&0===$("tbody tr",n.el.nativeElement).length?s("Both the table and dtOptions cannot be empty"):setTimeout(function(){var p={rowCallback:function(f,g,b){if(i.columns){var m=i.columns;n.applyNgPipeTransform(f,m),n.applyNgRefTemplate(f,m,g)}i.rowCallback&&i.rowCallback(f,g,b)}};p=Object.assign({},i,p),n.dt=$(n.el.nativeElement).DataTable(p),c(n.dt)})})})},a.prototype.applyNgPipeTransform=function(r,n){n.filter(function(s){return s.ngPipeInstance&&!s.ngTemplateRef}).forEach(function(s){var i=s.ngPipeInstance,h=s.ngPipeArgs||[],p=n.findIndex(function(m){return m.data===s.data}),f=r.childNodes.item(p),g=$(f).text(),b=i.transform.apply(i,function(a,r,n){if(n||2===arguments.length)for(var i,c=0,s=r.length;c<s;c++)(i||!(c in r))&&(i||(i=Array.prototype.slice.call(r,0,c)),i[c]=r[c]);return a.concat(i||Array.prototype.slice.call(r))}([g],h,!1));$(f).text(b)})},a.prototype.applyNgRefTemplate=function(r,n,c){var s=this;n.filter(function(h){return h.ngTemplateRef&&!h.ngPipeInstance}).forEach(function(h){var p=h.ngTemplateRef,f=p.ref,g=p.context,b=n.findIndex(function(C){return C.data===h.data}),m=r.childNodes.item(b);$(m).html("");var V=Object.assign({},g,g?.userData,{adtData:c}),A=s.vcr.createEmbeddedView(f,V);s.renderer.appendChild(m,A.rootNodes[0])})},a.\u0275fac=function(n){return new(n||a)(l.Y36(l.SBq),l.Y36(l.s_b),l.Y36(l.Qsj))},a.\u0275dir=l.lG2({type:a,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),a}(),T=u(36895),y=function(){function a(){}return a.forRoot=function(){return{ngModule:a}},a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=l.oAB({type:a}),a.\u0275inj=l.cJS({imports:[T.ez]}),a}()}}]);