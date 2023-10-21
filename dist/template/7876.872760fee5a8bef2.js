"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7876],{49938:(w,Z,i)=>{i.r(Z),i.d(Z,{AddCountraVoucherModule:()=>j});var p=i(36895),T=i(88996),c=i(24006),y=i(68675),V=i(54004),t=i(94650),u=i(71071),a=i(80927),d=i(97185),s=i(47957),l=i(3238),h=i(59549),g=i(44144);function C(o,r){1&o&&(t.TgZ(0,"span",27),t._uU(1,"Select Date "),t.qZA())}function _(o,r){1&o&&(t.TgZ(0,"span",27),t._uU(1,"Enter Contra Voucher No."),t.qZA())}function b(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"mat-option",29),t.NdJ("onSelectionChange",function(){t.CHM(e);const m=t.oxw().$implicit,f=t.oxw();return t.KtG(f.oncheck(m))}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.account_id),t.xp6(1),t.Oqu(null==e?null:e.account_id)}}function A(o,r){if(1&o&&(t.ynx(0),t.YNc(1,b,2,2,"mat-option",28),t.BQk()),2&o){const e=r.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function I(o,r){1&o&&(t.TgZ(0,"mat-option",32)(1,"a",33),t._uU(2,"+ Add Account"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function N(o,r){1&o&&(t.TgZ(0,"mat-option",34),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function F(o,r){if(1&o&&(t.ynx(0),t.YNc(1,I,3,1,"mat-option",30),t.YNc(2,N,2,0,"mat-option",31),t.BQk()),2&o){const e=r.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==n.fromAccountControl.value?null:n.fromAccountControl.value.length)<3)}}function M(o,r){1&o&&(t.TgZ(0,"span",27),t._uU(1,"Select From Account "),t.qZA())}function O(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"mat-option",29),t.NdJ("onSelectionChange",function(){t.CHM(e);const m=t.oxw().$implicit,f=t.oxw();return t.KtG(f.oncheck1(m))}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.account_id),t.xp6(1),t.Oqu(null==e?null:e.account_id)}}function J(o,r){if(1&o&&(t.ynx(0),t.YNc(1,O,2,2,"mat-option",28),t.BQk()),2&o){const e=r.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function Q(o,r){1&o&&(t.TgZ(0,"mat-option",32)(1,"a",33),t._uU(2,"+ Add Account"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function P(o,r){1&o&&(t.TgZ(0,"mat-option",34),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function U(o,r){if(1&o&&(t.ynx(0),t.YNc(1,Q,3,1,"mat-option",30),t.YNc(2,P,2,0,"mat-option",31),t.BQk()),2&o){const e=r.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==n.toAccountControl.value?null:n.toAccountControl.value.length)<3)}}function S(o,r){1&o&&(t.TgZ(0,"span",27),t._uU(1,"Select To Account "),t.qZA())}function q(o,r){1&o&&(t.TgZ(0,"span",27),t._uU(1,"Enter round off"),t.qZA())}function Y(o,r){1&o&&(t.TgZ(0,"span",27),t._uU(1,"Enter note"),t.qZA())}function L(o,r){1&o&&(t.TgZ(0,"button",35),t._uU(1,"Submit"),t.qZA())}function D(o,r){1&o&&(t.TgZ(0,"button",36),t._UZ(1,"span",37),t._uU(2,"Submit"),t.qZA())}const x=function(o){return{"is-invalid":o}},B=[{path:"",component:(()=>{class o{constructor(e,n,m,f,v,K){this.fb=e,this.renderer=n,this.transactionService=m,this.coreService=f,this.toastr=v,this.router=K,this.fromAccountControl=new c.NI,this.toAccountControl=new c.NI,this.accountList=[],this.toAccountList=[],this.dateError=null,this.loaders=!1}get f(){return this.countraVoucherForm.controls}ngOnInit(){const e=(new Date).toISOString().split("T")[0];this.countraVoucherForm=this.fb.group({date:new c.NI(e,[c.kI.required]),countra_voucher_no:new c.NI(""),from_account:new c.NI("",[c.kI.required]),to_account:new c.NI("",[c.kI.required]),amount:new c.NI("",[c.kI.required]),note:new c.NI("",[c.kI.required])}),this.getAccount(),this.getprefix(),this.filteredFromAccount=this.fromAccountControl.valueChanges.pipe((0,y.O)(""),(0,V.U)(n=>this._filter(n,!0))),this.filteredToAccount=this.toAccountControl.valueChanges.pipe((0,y.O)(""),(0,V.U)(n=>this._filterr(n,!0)))}getprefix(){this.transactionService.getCountraVoucherPrefix().subscribe(e=>{console.log(e),1==e.success?this.prefixNo=e.prefix:this.toastr.error(e.msg)},e=>{this.toastr.error(e.error.msg)})}getAccount(){this.transactionService.getAccount().subscribe(e=>{this.accountList=e,this.toAccountList=e})}_filter(e,n){const m="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),f=this.accountList.filter(n?v=>v?.account_id?.toLowerCase().includes(m):v=>!v?.account_id?.toLowerCase().includes(m));return!n&&0===f.length&&f.push({account:"No data found"}),f}_filterr(e,n){const m="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),f=this.toAccountList.filter(n?v=>v?.account_id?.toLowerCase().includes(m):v=>!v?.account_id?.toLowerCase().includes(m));return!n&&0===f.length&&f.push({account:"No data found"}),f}oncheck(e){console.log(e),this.countraVoucherForm.patchValue({from_account:e.id})}oncheck1(e){console.log(e),this.countraVoucherForm.patchValue({to_account:e.id})}submit(){this.countraVoucherForm.valid?(this.loaders=!0,this.transactionService.addCountraVoucher(this.countraVoucherForm.value).subscribe(e=>{this.loaders=!1,this.addRes=e,this.addRes.success?(this.toastr.success(this.addRes.msg),this.countraVoucherForm.reset(),this.router.navigate(["//transaction/countravoucherList"])):this.loaders=!1},e=>{this.loaders=!1})):this.countraVoucherForm.markAllAsTouched()}get from_account(){return this.countraVoucherForm.get("from_account")}get date(){return this.countraVoucherForm.get("date")}get countra_voucher_no(){return this.countraVoucherForm.get("countra_voucher_no")}get to_account(){return this.countraVoucherForm.get("to_account")}get note(){return this.countraVoucherForm.get("note")}get amount(){return this.countraVoucherForm.get("amount")}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(c.qu),t.Y36(t.Qsj),t.Y36(u.p),t.Y36(a.p),t.Y36(d._W),t.Y36(T.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-countra-voucher"]],decls:67,vars:41,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-4","col-12"],[1,"form-group"],["type","date","formControlName","date","id","date",3,"ngClass"],["class","text-danger",4,"ngIf"],[2,"color","red"],["type","text","formControlName","countra_voucher_no","readonly","",3,"ngModel","ngClass"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Select From Account","aria-label","from_account","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["type","text","placeholder","Select To Account","aria-label","to_account","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["autoActiveFirstOption",""],["toAccountAuto","matAutocomplete"],["type","number","formControlName","amount",3,"ngClass"],[1,"col-lg-6","col-sm-8","col-12"],["formControlName","note",2,"height","45px"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/countravoucherList",1,"btn","btn-cancel","text-white"],[1,"text-danger"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],[3,"value"],["routerLink","//account/accountlist",2,"color","#FF9F43"],[1,"is-loading"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Add Countra Voucher"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Countra Voucher "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Date*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,C,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Contra Voucher No."),t.TgZ(20,"span",10),t._uU(21,"*"),t.qZA()(),t._UZ(22,"input",11),t.YNc(23,_,2,0,"span",9),t.qZA()(),t.TgZ(24,"div",6)(25,"div",7)(26,"label"),t._uU(27,"From Account*"),t.qZA(),t.TgZ(28,"mat-form-field",12),t._UZ(29,"input",13),t.TgZ(30,"mat-autocomplete",null,14),t.YNc(32,A,2,1,"ng-container",15),t.ALo(33,"async"),t.YNc(34,F,3,2,"ng-container",16),t.ALo(35,"async"),t.qZA()(),t.YNc(36,M,2,0,"span",9),t.qZA()(),t.TgZ(37,"div",6)(38,"div",7)(39,"label"),t._uU(40,"To Account*"),t.qZA(),t.TgZ(41,"mat-form-field",12),t._UZ(42,"input",17),t.TgZ(43,"mat-autocomplete",18,19),t.YNc(45,J,2,1,"ng-container",15),t.ALo(46,"async"),t.YNc(47,U,3,2,"ng-container",16),t.ALo(48,"async"),t.qZA()(),t.YNc(49,S,2,0,"span",9),t.qZA()(),t.TgZ(50,"div",6)(51,"div",7)(52,"label"),t._uU(53,"Amount"),t.qZA(),t._UZ(54,"input",20),t.YNc(55,q,2,0,"span",9),t.qZA()(),t.TgZ(56,"div",21)(57,"div",7)(58,"label"),t._uU(59,"Note"),t.qZA(),t._UZ(60,"textarea",22),t.YNc(61,Y,2,0,"span",9),t.qZA()(),t.TgZ(62,"div",23),t.YNc(63,L,2,0,"button",24),t.YNc(64,D,3,0,"button",25),t.TgZ(65,"a",26),t._uU(66,"Cancel"),t.qZA()()()()()()),2&e){const m=t.MAs(31),f=t.MAs(44);t.xp6(8),t.Q6J("formGroup",n.countraVoucherForm),t.xp6(6),t.Q6J("ngClass",t.VKq(31,x,n.f.date.touched&&n.f.date.invalid)),t.xp6(1),t.Q6J("ngIf",n.date&&n.date.invalid&&n.date.touched),t.xp6(7),t.Q6J("ngModel",n.prefixNo)("ngClass",t.VKq(33,x,n.f.countra_voucher_no.touched&&n.f.countra_voucher_no.invalid)),t.xp6(1),t.Q6J("ngIf",n.countra_voucher_no&&n.countra_voucher_no.invalid&&n.countra_voucher_no.touched),t.xp6(6),t.Q6J("formControl",n.fromAccountControl)("matAutocomplete",m)("ngClass",t.VKq(35,x,n.f.from_account.touched&&n.f.from_account.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(33,23,n.filteredFromAccount)),t.xp6(2),t.Q6J("ngIf",t.lcZ(35,25,n.filteredFromAccount)),t.xp6(2),t.Q6J("ngIf",n.from_account&&n.from_account.invalid&&n.from_account.touched),t.xp6(6),t.Q6J("formControl",n.toAccountControl)("matAutocomplete",f)("ngClass",t.VKq(37,x,n.f.to_account.touched&&n.f.to_account.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(46,27,n.filteredToAccount)),t.xp6(2),t.Q6J("ngIf",t.lcZ(48,29,n.filteredToAccount)),t.xp6(2),t.Q6J("ngIf",n.to_account&&n.to_account.invalid&&n.to_account.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(39,x,n.f.amount.touched&&n.f.amount.invalid)),t.xp6(1),t.Q6J("ngIf",n.amount&&n.amount.invalid&&n.amount.touched),t.xp6(6),t.Q6J("ngIf",n.note&&n.note.invalid&&n.note.touched),t.xp6(2),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders)}},dependencies:[p.mk,p.sg,p.O5,T.yS,c._Y,c.Fj,c.wV,c.JJ,c.JL,c.oH,c.sg,c.u,s.XC,s.ZL,l.ey,h.KE,g.Nt,p.Ov],styles:[".ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:40%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})(),canActivate:[i(30597).l],data:{allowedRoles:["add_countravoucher"]}}];let k=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[T.Bz.forChild(B),T.Bz]}),o})();var z=i(8468);let j=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,k,z.I,s.Bb,h.lN,g.c]}),o})()},65415:(w,Z,i)=>{i.d(Z,{G:()=>c,T:()=>V});var p=i(94650),c=function(){function t(u,a,d){this.el=u,this.vcr=a,this.renderer=d,this.dtOptions={}}return t.prototype.ngOnInit=function(){var u=this;this.dtTrigger?this.dtTrigger.subscribe(function(a){u.displayTable(a)}):this.displayTable(null)},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(u){var a=this;u&&(this.dtOptions=u),this.dtInstance=new Promise(function(d,s){Promise.resolve(a.dtOptions).then(function(l){0===Object.keys(l).length&&0===$("tbody tr",a.el.nativeElement).length?s("Both the table and dtOptions cannot be empty"):setTimeout(function(){var g={rowCallback:function(C,_,b){if(l.columns){var A=l.columns;a.applyNgPipeTransform(C,A),a.applyNgRefTemplate(C,A,_)}l.rowCallback&&l.rowCallback(C,_,b)}};g=Object.assign({},l,g),a.dt=$(a.el.nativeElement).DataTable(g),d(a.dt)})})})},t.prototype.applyNgPipeTransform=function(u,a){a.filter(function(s){return s.ngPipeInstance&&!s.ngTemplateRef}).forEach(function(s){var l=s.ngPipeInstance,h=s.ngPipeArgs||[],g=a.findIndex(function(A){return A.data===s.data}),C=u.childNodes.item(g),_=$(C).text(),b=l.transform.apply(l,function(t,u,a){if(a||2===arguments.length)for(var l,d=0,s=u.length;d<s;d++)(l||!(d in u))&&(l||(l=Array.prototype.slice.call(u,0,d)),l[d]=u[d]);return t.concat(l||Array.prototype.slice.call(u))}([_],h,!1));$(C).text(b)})},t.prototype.applyNgRefTemplate=function(u,a,d){var s=this;a.filter(function(h){return h.ngTemplateRef&&!h.ngPipeInstance}).forEach(function(h){var g=h.ngTemplateRef,C=g.ref,_=g.context,b=a.findIndex(function(F){return F.data===h.data}),A=u.childNodes.item(b);$(A).html("");var I=Object.assign({},_,_?.userData,{adtData:d}),N=s.vcr.createEmbeddedView(C,I);s.renderer.appendChild(A,N.rootNodes[0])})},t.\u0275fac=function(a){return new(a||t)(p.Y36(p.SBq),p.Y36(p.s_b),p.Y36(p.Qsj))},t.\u0275dir=p.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}(),y=i(36895),V=function(){function t(){}return t.forRoot=function(){return{ngModule:t}},t.\u0275fac=function(a){return new(a||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({imports:[y.ez]}),t}()}}]);