"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7101],{27101:(N,Z,u)=>{u.r(Z),u.d(Z,{UpdateJournalVoucherModule:()=>B});var l=u(36895),p=u(89299),a=u(24006),t=u(94650),y=u(97185),w=u(71071),h=u(43443),b=u(47957),m=u(3238),A=u(59549),g=u(44144);function _(r,i){1&r&&(t.TgZ(0,"span",29),t._uU(1,"Select Date"),t.qZA())}function f(r,i){1&r&&(t.TgZ(0,"span",29),t._uU(1,"Enter Journal Voucher Series"),t.qZA())}function v(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"span",30),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.addCart())}),t._uU(1,"Add Cart+"),t.qZA()}}function U(r,i){if(1&r){const e=t.EpF();t.O4$(),t.TgZ(0,"svg",52),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.addCart())}),t._UZ(1,"path",34)(2,"path",53),t.qZA()}}function T(r,i){if(1&r){const e=t.EpF();t.TgZ(0,"mat-option",55),t.NdJ("onSelectionChange",function(){t.CHM(e);const n=t.oxw().$implicit,c=t.oxw().index,s=t.oxw();return t.KtG(s.oncheck(n,c))}),t._uU(1),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.account_id),t.xp6(1),t.hij(" ",null==e?null:e.account_id," ")}}function I(r,i){if(1&r&&(t.ynx(0),t.YNc(1,T,2,2,"mat-option",54),t.BQk()),2&r){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",1==(null==e?null:e.is_active))}}function V(r,i){1&r&&(t.TgZ(0,"mat-option",56)(1,"a",57),t._uU(2,"+ Add Account"),t.qZA()()),2&r&&t.Q6J("value","No data found")}function j(r,i){1&r&&(t.TgZ(0,"mat-option",58),t._uU(1," Please Enter 1 or more characters "),t.qZA())}function S(r,i){1&r&&(t.TgZ(0,"span",59),t._uU(1,"Select Account"),t.qZA())}function q(r,i){1&r&&(t.TgZ(0,"span",59),t._uU(1,"Select Amount Type"),t.qZA())}function O(r,i){1&r&&(t.TgZ(0,"span",59),t._uU(1,"Enter Debit Amount"),t.qZA())}function D(r,i){1&r&&(t.TgZ(0,"span",59),t._uU(1,"Enter Credit Amount"),t.qZA())}function P(r,i){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr",31)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td")(5,"div")(6,"div",32),t.O4$(),t.TgZ(7,"svg",33),t.NdJ("click",function(){const c=t.CHM(e).index,s=t.oxw();return t.KtG(s.removeCart(c))}),t._UZ(8,"path",34)(9,"path",35),t.qZA()(),t.YNc(10,U,3,0,"svg",36),t.qZA()(),t.kcU(),t.TgZ(11,"td")(12,"div",37)(13,"mat-form-field",38)(14,"input",39),t.NdJ("input",function(n){t.CHM(e);const c=t.oxw();return t.KtG(c.getFilter(n.target.value))}),t.qZA(),t.TgZ(15,"mat-autocomplete",null,40),t.YNc(17,I,2,1,"ng-container",18),t.YNc(18,V,3,1,"mat-option",41),t.YNc(19,j,2,0,"mat-option",42),t.qZA()()(),t.YNc(20,S,2,0,"span",43),t.qZA(),t.TgZ(21,"td")(22,"select",44)(23,"option",45),t._uU(24,"Select Amount Type"),t.qZA(),t.TgZ(25,"option",46),t._uU(26,"Credit"),t.qZA(),t.TgZ(27,"option",47),t._uU(28,"Debit"),t.qZA()(),t.YNc(29,q,2,0,"span",43),t.qZA(),t.TgZ(30,"td")(31,"input",48,49),t.NdJ("keyup",function(){const c=t.CHM(e).index,s=t.MAs(32),d=t.oxw();return t.KtG(d.debit(c,s.value))}),t.qZA(),t.YNc(33,O,2,0,"span",43),t.qZA(),t.TgZ(34,"td")(35,"input",48,50),t.NdJ("keyup",function(){const c=t.CHM(e).index,s=t.MAs(36),d=t.oxw();return t.KtG(d.credit(c,s.value))}),t.qZA(),t.YNc(37,D,2,0,"span",43),t.qZA(),t.TgZ(38,"td"),t._UZ(39,"input",51),t.qZA()(),t.BQk()}if(2&r){const e=i.index,o=t.MAs(16),n=t.oxw();let c;t.xp6(1),t.Q6J("formGroupName",e),t.xp6(2),t.Oqu(e+1+"."),t.xp6(7),t.Q6J("ngIf",n.isLastCart(e)),t.xp6(4),t.Q6J("formControl",n.myControls.at(e))("matAutocomplete",o),t.xp6(3),t.Q6J("ngForOf",n.filterAccount),t.xp6(1),t.Q6J("ngIf",0===(null==n.filterAccount?null:n.filterAccount.length)),t.xp6(1),t.Q6J("ngIf",(null==(c=n.myControls.at(e))||null==c.value?null:c.value.length)<1),t.xp6(1),t.Q6J("ngIf",n.from_account(e)&&n.from_account(e).invalid&&n.from_account(e).touched),t.xp6(9),t.Q6J("ngIf",n.amount_type(e)&&n.amount_type(e).invalid&&n.amount_type(e).touched),t.xp6(2),t.Q6J("value",n.debitAmount[e]),t.xp6(2),t.Q6J("ngIf",n.amount(e)&&n.amount(e).invalid&&n.amount(e).touched),t.xp6(2),t.Q6J("value",n.creditAmount[e]),t.xp6(2),t.Q6J("ngIf",n.amount(e)&&n.amount(e).invalid&&n.amount(e).touched)}}function E(r,i){1&r&&(t.TgZ(0,"span",29),t._uU(1,"Enter Description"),t.qZA())}function Q(r,i){1&r&&(t.TgZ(0,"button",60),t._uU(1,"Submit"),t.qZA())}function L(r,i){1&r&&(t.TgZ(0,"button",61),t._UZ(1,"span",62),t._uU(2,"\xa0 Submit"),t.qZA())}const x=function(r){return{"is-invalid":r}},G=[{path:"",component:(()=>{class r{constructor(e,o,n,c,s,d){this.fb=e,this.router=o,this.toastrService=n,this.transactionService=c,this.Arout=s,this.commonService=d,this.minDate="",this.maxDate="",this.accountList=[],this.filterAccount=[],this.isCart=!1,this.dateError=null,this.loaders=!1,this.debitAmount=[],this.creditAmount=[]}get f(){return this.journalvoucherForm.controls}ngOnInit(){const e=(new Date).toISOString().split("T")[0];this.id=this.Arout.snapshot.paramMap.get("id"),this.myControls=new a.Oe([]),this.journalvoucherForm=this.fb.group({date:new a.NI(e,[a.kI.required]),journal_voucher_no:new a.NI("",[a.kI.required]),journal_voucher_cart:this.fb.array([]),total_credit:new a.NI(0),total_debit:new a.NI(0),description:new a.NI("")}),this.transactionService.getJournalVoucherById(this.id).subscribe(n=>{this.editRes=n,this.journalvoucherForm.patchValue(this.editRes),this.editRes?.cart?.length>0?this.journalvoucherForm.setControl("journal_voucher_cart",this.udateCart(this.editRes?.cart)):this.isCart=!0});const o=localStorage.getItem("financialYear");this.dateValidation(o),this.getAccount(),this.getprefix()}dateValidation(e){const o=this.journalvoucherForm.get("date"),{formattedMinDate:n,formattedMaxDate:c}=this.commonService.setMinMaxDates(o,e);this.minDate=n,this.maxDate=c}getprefix(){this.transactionService.getJournalVoucherPrefix().subscribe(e=>{console.log(e),1==e.success?this.prefixNo=e.data:this.toastrService.error(e.msg)},e=>{this.toastrService.error(e.error.msg)})}udateCart(e){console.log(e);let o=new a.Oe([]);return e.forEach((n,c)=>{"Credit"==n?.amount_type?(this.creditAmount[c]=n?.amount,console.log(this.debitAmount[c])):"Debit"==n?.amount_type&&(this.debitAmount[c]=n?.amount,console.log(this.creditAmount[c])),o.push(this.fb.group({from_account:n.from_account?.id,amount_type:n?.amount_type,amount:n?.amount,description:n?.description})),this.myControls.push(new a.NI(n.from_account?.account_id))}),o}getAccount(){this.transactionService.getAccount().subscribe(e=>{this.accountList=e,this.filterAccount=e})}getFilter(e){this.filterAccount=this.accountList.filter(o=>!(!o||!o.account_id)&&o.account_id.toLowerCase().includes(e)),console.log(this.filterAccount)}oncheck(e,o){this.journalvoucherForm.get("journal_voucher_cart").at(o).patchValue({from_account:e?.id})}cart(){return this.fb.group({from_account:new a.NI("",[a.kI.required]),amount_type:new a.NI("",[a.kI.required]),amount:new a.NI(0,[a.kI.required]),description:""})}getCart(){return this.journalvoucherForm.get("journal_voucher_cart")}addCart(){this.getCart().push(this.cart()),this.isCart=!1}removeCart(e){this.getCart().removeAt(e)}isLastCart(e){return e===this.getCart().controls.length-1}submit(){console.log(this.journalvoucherForm.value),console.log(this.debitAmount),console.log(this.creditAmount);let e=0;this.debitAmount.forEach(n=>{e+=+n});let o=0;if(this.creditAmount.forEach(n=>{o+=+n}),e==o)if(console.log(o,e),this.journalvoucherForm.valid){this.loaders=!0;let n=new FormData;n.append("date",this.journalvoucherForm.get("date")?.value),n.append("journal_voucher_no",this.journalvoucherForm.get("journal_voucher_no")?.value),n.append("total_credit",this.journalvoucherForm.get("total_credit")?.value),n.append("total_debit",this.journalvoucherForm.get("total_debit")?.value),n.append("description",this.journalvoucherForm.get("description")?.value);const c=this.journalvoucherForm.get("journal_voucher_cart"),s=[];c.controls.forEach(d=>{const M=d,J={};Object.keys(M.controls).forEach(C=>{const F=M.controls[C];J[C]="amount_type"===C||"description"===C||isNaN(F.value)?F.value:parseFloat(F.value)}),s.push(J)}),n.append("journal_voucher_cart",JSON.stringify(s)),this.transactionService.updateJournalVoucher(n,this.id).subscribe(d=>{this.loaders=!1,this.addRes=d,this.addRes.success?(this.toastrService.success(this.addRes.msg),this.journalvoucherForm.reset(),this.router.navigate(["//transaction/journalvoucherList"])):this.loaders=!1},d=>{this.loaders=!1})}else this.journalvoucherForm.markAllAsTouched(),this.toastrService.error("Please Fill All The Required Fields");else console.log(e,o),this.toastrService.warning("Debit and credit amount total should be same"),this.journalvoucherForm.markAllAsTouched()}get date(){return this.journalvoucherForm.get("date")}get total_debit(){return this.journalvoucherForm.get("total_debit")}get total_credit(){return this.journalvoucherForm.get("total_credit")}get note(){return this.journalvoucherForm.get("description")}get journal_voucher_no(){return this.journalvoucherForm.get("journal_voucher_no")}from_account(e){return this.getCart().controls[e].get("from_account")}amount_type(e){return this.getCart().controls[e].get("amount_type")}amount(e){return this.getCart().controls[e].get("amount")}debit(e,o){this.creditAmount[e]=0,this.debitAmount[e]=o,this.journalvoucherForm.get("journal_voucher_cart").at(e).patchValue({amount:this.debitAmount[e]})}credit(e,o){this.creditAmount[e]=o,this.debitAmount[e]=0,this.journalvoucherForm.get("journal_voucher_cart").at(e).patchValue({amount:this.creditAmount[e]})}calculateTotalDebit(){let e=0;return this.debitAmount.forEach(o=>{e+=+o}),e}calculateTotalCredit(){let e=0;return this.creditAmount.forEach(o=>{e+=+o}),e}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(a.qu),t.Y36(p.F0),t.Y36(y._W),t.Y36(w.p),t.Y36(p.gz),t.Y36(h.R))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-update-journal-voucher"]],decls:83,vars:29,consts:[[1,"page-header"],[1,"page-title"],["id","purchaseForm",1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date","formControlName","date",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","journal_voucher_no","readonly","",3,"ngClass"],[1,"card"],[1,"table-responsive"],[1,"table","datanew"],[2,"color","red"],["colspan","3"],["class","debitIntoCart",3,"click",4,"ngIf"],["formArrayName","journal_voucher_cart"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],[1,"text-start"],["type","text","formControlName","total_debit",1,"input",2,"display","none",3,"ngModel","ngClass"],["type","text","formControlName","total_credit",1,"input",2,"display","none",3,"ngModel","ngClass"],[1,"col-lg-12","my-3"],["formControlName","description","placeholder","Enter Description",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/journalvoucherList",1,"btn","btn-cancel","text-white"],[1,"text-danger"],[1,"debitIntoCart",3,"click"],[3,"formGroupName"],[1,"me-2"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"color","red",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["style","color:green","xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","class","bi bi-plus-circle","viewBox","0 0 16 16",3,"click",4,"ngIf"],[1,"form-group",2,"margin-bottom","-1%"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Product","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],["class","text-danger","style","display: block;",4,"ngIf"],["formControlName","amount_type"],["value","","selected","","disabled",""],["value","Credit"],["value","Debit"],["type","number",1,"input",3,"value","keyup"],["cr",""],["dr",""],["type","text","formControlName","description","placeholder","Enter Note",1,"input"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle",2,"color","green",3,"click"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value"],["routerLink","//account/accountlist",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger",2,"display","block"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Update Journal Voucher"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Journal Voucher"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Date"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,_,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Journal Voucher Series"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,f,2,0,"span",9),t.qZA()()(),t.TgZ(22,"div",11)(23,"div",3)(24,"div",5)(25,"div",12)(26,"table",13)(27,"thead")(28,"tr")(29,"th"),t._uU(30,"#"),t.qZA(),t._UZ(31,"th"),t.TgZ(32,"th"),t._uU(33,"From Account"),t.TgZ(34,"span",14),t._uU(35,"*"),t.qZA()(),t.TgZ(36,"th"),t._uU(37,"Amount Type"),t.TgZ(38,"span",14),t._uU(39,"*"),t.qZA()(),t.TgZ(40,"th"),t._uU(41,"Debit"),t.TgZ(42,"span",14),t._uU(43,"*"),t.qZA()(),t.TgZ(44,"th"),t._uU(45,"Credit"),t.TgZ(46,"span",14),t._uU(47,"*"),t.qZA()(),t.TgZ(48,"th"),t._uU(49,"Note"),t.qZA()(),t.TgZ(50,"tr")(51,"th",15),t.YNc(52,v,2,0,"span",16),t.qZA()()(),t.TgZ(53,"tbody"),t.ynx(54,17),t.YNc(55,P,40,14,"ng-container",18),t.BQk(),t.TgZ(56,"tr",19),t._UZ(57,"td")(58,"td")(59,"td"),t.TgZ(60,"td",20)(61,"strong"),t._uU(62,"Total"),t.qZA()(),t.TgZ(63,"td",20)(64,"strong"),t._uU(65),t.qZA(),t._UZ(66,"input",21),t.qZA(),t.TgZ(67,"td",20)(68,"strong"),t._uU(69),t.qZA(),t._UZ(70,"input",22),t.qZA(),t._UZ(71,"td"),t.qZA()()()()()()(),t.TgZ(72,"div",23)(73,"div",7)(74,"label"),t._uU(75,"Description"),t.qZA(),t._UZ(76,"textarea",24),t.YNc(77,E,2,0,"span",9),t.qZA()(),t.TgZ(78,"div",25),t.YNc(79,Q,2,0,"button",26),t.YNc(80,L,3,0,"button",27),t.TgZ(81,"a",28),t._uU(82,"Cancel"),t.qZA()()()()()),2&e&&(t.xp6(8),t.Q6J("formGroup",o.journalvoucherForm),t.xp6(6),t.Q6J("ngClass",t.VKq(19,x,o.f.date.touched&&o.f.date.invalid)),t.uIk("min",o.minDate)("max",o.maxDate),t.xp6(1),t.Q6J("ngIf",o.date&&o.date.invalid&&o.date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(21,x,o.f.journal_voucher_no.touched&&o.f.journal_voucher_no.invalid)),t.xp6(1),t.Q6J("ngIf",o.journal_voucher_no&&o.journal_voucher_no.invalid&&o.journal_voucher_no.touched),t.xp6(31),t.Q6J("ngIf",o.isCart),t.xp6(3),t.Q6J("ngForOf",o.getCart().controls),t.xp6(10),t.Oqu(o.calculateTotalDebit().toFixed(2)),t.xp6(1),t.Q6J("ngModel",o.calculateTotalDebit())("ngClass",t.VKq(23,x,o.f.total_debit.touched&&o.f.total_debit.invalid)),t.xp6(3),t.Oqu(o.calculateTotalCredit().toFixed(2)),t.xp6(1),t.Q6J("ngModel",o.calculateTotalCredit())("ngClass",t.VKq(25,x,o.f.total_credit.touched&&o.f.total_credit.invalid)),t.xp6(6),t.Q6J("ngClass",t.VKq(27,x,o.f.description.touched&&o.f.description.invalid)),t.xp6(1),t.Q6J("ngIf",o.note&&o.note.invalid&&o.note.touched),t.xp6(2),t.Q6J("ngIf",!o.loaders),t.xp6(1),t.Q6J("ngIf",o.loaders))},dependencies:[l.mk,l.sg,l.O5,p.yS,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.oH,a.sg,a.u,a.x0,a.CE,b.XC,b.ZL,m.ey,A.KE,g.Nt],styles:[".ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:40%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),r})(),canActivate:[u(30597).l],data:{allowedRoles:["change_journalvoucher"]}}];let k=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[p.Bz.forChild(G),p.Bz]}),r})();var K=u(8468);let B=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[l.ez,k,K.I,b.Bb,A.lN,g.c]}),r})()},30597:(N,Z,u)=>{u.d(Z,{l:()=>w});var l=u(94650),p=u(89299),a=u(97185),t=u(42917),y=u(80927);let w=(()=>{class h{constructor(m,A,g,_,f){this.router=m,this.Arout=A,this.toastr=g,this.profileService=_,this.coreService=f}canActivate(m,A){const g=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),g){const _=m.data.allowedRoles;console.log(_,"allowedRoles");const f=g.some(v=>_.includes(v.codename));if(console.log(f),this.coreService.getProfile().subscribe(v=>{this.userDetails=v,this.profileService.setUserDetails(this.userDetails);const U=v?.permission,T=this.profileService.getUserDetails();(!T||T.length!==U.length)&&(this.profileService.setUserPermission(U),window.location.reload())}),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return h.\u0275fac=function(m){return new(m||h)(l.LFG(p.F0),l.LFG(p.gz),l.LFG(a._W),l.LFG(t.J),l.LFG(y.p))},h.\u0275prov=l.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()}}]);