"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[22382],{22382:(j,T,c)=>{c.r(T),c.d(T,{AddJournalVoucherModule:()=>$});var u=c(36895),_=c(4392),a=c(24006),N=c(68675),U=c(54004),t=c(94650),p=c(97185),M=c(71071),g=c(43443),C=c(47957),A=c(3238),m=c(59549),x=c(44144);function f(n,i){1&n&&(t.TgZ(0,"span",31),t._uU(1,"Select Date"),t.qZA())}function h(n,i){if(1&n&&(t.TgZ(0,"option",32),t._uU(1),t.qZA()),2&n){const e=i.$implicit;t.s9C("value",e.id),t.xp6(1),t.Oqu(e.prefix)}}function v(n,i){1&n&&(t.TgZ(0,"span",31),t._uU(1,"Select Journal Voucher No"),t.qZA())}function J(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"span",33),t.NdJ("click",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.addCart())}),t._uU(1,"Add Cart+"),t.qZA()}}function V(n,i){if(1&n){const e=t.EpF();t.O4$(),t.TgZ(0,"svg",50),t.NdJ("click",function(){t.CHM(e);const r=t.oxw(2);return t.KtG(r.addCart())}),t._UZ(1,"path",37)(2,"path",51),t.qZA()}}function D(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"mat-option",53),t.NdJ("onSelectionChange",function(){t.CHM(e);const r=t.oxw().$implicit,l=t.oxw().index,s=t.oxw();return t.KtG(s.oncheck(r,l))}),t._uU(1),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("value",null!=e&&e.account_id&&null!=e&&e.company_name?(null==e?null:e.company_name)+" ("+(null==e?null:e.account_id)+")":null==e?null:e.account_id),t.xp6(1),t.Oqu(null!=e&&e.account_id&&null!=e&&e.company_name?(null==e?null:e.company_name)+" ("+(null==e?null:e.account_id)+")":null==e?null:e.account_id)}}function I(n,i){if(1&n&&(t.ynx(0),t.YNc(1,D,2,2,"mat-option",52),t.BQk()),2&n){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",!0===(null==e?null:e.is_active))}}function O(n,i){1&n&&(t.TgZ(0,"mat-option",56),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function S(n,i){if(1&n&&(t.ynx(0),t.TgZ(1,"mat-option",32)(2,"a",54),t._uU(3,"+ Add Account"),t.qZA()(),t.YNc(4,O,2,0,"mat-option",55),t.BQk()),2&n){const e=t.oxw().index,o=t.oxw();let r;t.xp6(1),t.Q6J("value","No data found"),t.xp6(3),t.Q6J("ngIf",(null==(r=o.myControls.at(e))||null==r.value?null:r.value.length)<3)}}function P(n,i){1&n&&(t.TgZ(0,"span",57),t._uU(1,"Select Account"),t.qZA())}function q(n,i){1&n&&(t.TgZ(0,"span",57),t._uU(1,"Enter Debit Amount"),t.qZA())}function L(n,i){1&n&&(t.TgZ(0,"span",57),t._uU(1,"Enter Credit Amount"),t.qZA())}function E(n,i){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr",34)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td")(5,"div")(6,"div",35),t.O4$(),t.TgZ(7,"svg",36),t.NdJ("click",function(){const l=t.CHM(e).index,s=t.oxw();return t.KtG(s.removeCart(l))}),t._UZ(8,"path",37)(9,"path",38),t.qZA()(),t.YNc(10,V,3,0,"svg",39),t.qZA()(),t.kcU(),t.TgZ(11,"td")(12,"div",40)(13,"mat-form-field",41),t._UZ(14,"input",42),t.TgZ(15,"mat-autocomplete",null,43),t.YNc(17,I,2,1,"ng-container",20),t.YNc(18,S,5,2,"ng-container",44),t.qZA()()(),t.YNc(19,P,2,0,"span",45),t.qZA(),t.TgZ(20,"td")(21,"input",46,47),t.NdJ("keyup",function(){const l=t.CHM(e).index,s=t.MAs(22),d=t.oxw();return t.KtG(d.debit(l,s.value))}),t.qZA(),t.YNc(23,q,2,0,"span",45),t.qZA(),t.TgZ(24,"td")(25,"input",46,48),t.NdJ("keyup",function(){const l=t.CHM(e).index,s=t.MAs(26),d=t.oxw();return t.KtG(d.credit(l,s.value))}),t.qZA(),t.YNc(27,L,2,0,"span",45),t.qZA(),t.TgZ(28,"td"),t._UZ(29,"input",49),t.qZA()(),t.BQk()}if(2&n){const e=i.index,o=t.MAs(16),r=t.oxw();t.xp6(1),t.Q6J("formGroupName",e),t.xp6(2),t.Oqu(e+1+"."),t.xp6(7),t.Q6J("ngIf",r.isLastCart(e)),t.xp6(4),t.Q6J("formControl",r.myControls.at(e))("matAutocomplete",o),t.xp6(3),t.Q6J("ngForOf",r.filteredFromAccountList),t.xp6(1),t.Q6J("ngIf",!(null!=r.filteredFromAccountList&&r.filteredFromAccountList.length)),t.xp6(1),t.Q6J("ngIf",r.from_account(e)&&r.from_account(e).invalid&&r.from_account(e).touched),t.xp6(2),t.Q6J("value",r.debitAmount[e]),t.xp6(2),t.Q6J("ngIf",r.amount(e)&&r.amount(e).invalid&&r.amount(e).touched),t.xp6(2),t.Q6J("value",r.creditAmount[e]),t.xp6(2),t.Q6J("ngIf",r.amount(e)&&r.amount(e).invalid&&r.amount(e).touched)}}function Q(n,i){1&n&&(t.TgZ(0,"span",31),t._uU(1,"Enter Description"),t.qZA())}function Y(n,i){1&n&&(t.TgZ(0,"button",58),t._uU(1,"Submit"),t.qZA())}function G(n,i){1&n&&(t.TgZ(0,"button",59),t._UZ(1,"span",60),t._uU(2,"\xa0 Submit"),t.qZA())}const F=function(n){return{"is-invalid":n}},B=[{path:"",component:(()=>{class n{constructor(e,o,r,l,s){this.fb=e,this.router=o,this.toastrService=r,this.transactionService=l,this.commonService=s,this.minDate="",this.maxDate="",this.filteredFromAccountList=[],this.accountList=[],this.isCart=!1,this.dateError=null,this.loaders=!1,this.debitAmount=[],this.creditAmount=[]}get f(){return this.journalvoucherForm.controls}ngOnInit(){const e=(new Date).toISOString().split("T")[0];this.journalvoucherForm=this.fb.group({date:new a.NI(e),journal_voucher_no:new a.NI(""),journal_voucher_cart:this.fb.array([]),total_credit:new a.NI(0),total_debit:new a.NI(0),description:new a.NI("")}),this.myControls=new a.Oe([]),this.getAccount(),this.getprefix(),this.addCart();const o=localStorage.getItem("financialYear");this.dateValidation(o)}dateValidation(e){const o=this.journalvoucherForm.get("date"),{formattedMinDate:r,formattedMaxDate:l}=this.commonService.setMinMaxDates(o,e);this.minDate=r,this.maxDate=l}subscribeToControlValueChanges(e){this.myControls.at(e).valueChanges.pipe((0,N.O)(""),(0,U.U)(r=>this._filter(r,!0))).subscribe(r=>{console.log(r)})}getprefix(){this.transactionService.getJournalVoucherPrefix().subscribe(e=>{console.log(e),e.success?(this.prefixNo=e?.data,this.journalvoucherForm.get("journal_voucher_no").patchValue(this.prefixNo[0]?.id)):this.toaster.error(e.msg)},e=>{this.toastrService.error(e.error.msg)})}getAccount(){this.transactionService.getAccount().subscribe(e=>{this.accountList=e})}_filter(e,o){const r="string"==typeof e?e?.toLowerCase():e?.toString().toLowerCase();return this.filteredFromAccountList=this.accountList.filter(l=>{const s=l?.account_id?.toLowerCase().includes(r),d=l?.title?.toLowerCase().includes(r),Z=l?.company_name?.toLowerCase().includes(r);return o?s||d||Z:!s&&!d&&!Z}),!o&&0===this.filteredFromAccountList?.length&&(this.filteredFromAccountList=[]),this.filteredFromAccountList}oncheck(e,o){this.journalvoucherForm.get("journal_voucher_cart").at(o).patchValue({from_account:e?.id})}cart(){return this.fb.group({from_account:new a.NI("",[a.kI.required]),amount_type:new a.NI(""),amount:new a.NI(0,[a.kI.required]),description:""})}getCart(){return this.journalvoucherForm.get("journal_voucher_cart")}addCart(){this.getCart().push(this.cart()),this.isCart=!1,this.myControls.push(new a.NI("")),this.subscribeToControlValueChanges(this.myControls.length-1)}removeCart(e){this.getCart().removeAt(e),this.myControls.removeAt(e),0==this.journalvoucherForm?.value?.journal_voucher_cart?.length&&(this.isCart=!0)}isLastCart(e){return e===this.getCart().controls.length-1}submit(){console.log(this.journalvoucherForm.value),console.log(this.debitAmount),console.log(this.creditAmount);let e=0;this.debitAmount.forEach(r=>{e+=+r});let o=0;if(this.creditAmount.forEach(r=>{o+=+r}),e==o)if(console.log(o,e),this.journalvoucherForm.valid){this.loaders=!0;let r=new FormData;r.append("date",this.journalvoucherForm.get("date")?.value),r.append("journal_voucher_no",this.journalvoucherForm.get("journal_voucher_no")?.value),r.append("total_credit",this.journalvoucherForm.get("total_credit")?.value),r.append("total_debit",this.journalvoucherForm.get("total_debit")?.value),r.append("description",this.journalvoucherForm.get("description")?.value??"");const l=this.journalvoucherForm.get("journal_voucher_cart"),s=[];l.controls.forEach(d=>{const Z=d,w={};Object.keys(Z.controls).forEach(b=>{const y=Z.controls[b];w[b]="amount_type"===b||"description"===b||isNaN(y.value)?y.value:parseFloat(y.value)}),s.push(w)}),r.append("journal_voucher_cart",JSON.stringify(s)),this.transactionService.addJournalVoucher(r).subscribe(d=>{this.loaders=!1,this.addRes=d,this.addRes.success?(this.toastrService.success(this.addRes.msg),this.journalvoucherForm.reset(),this.router.navigate(["//transaction/journalvoucherList"])):this.loaders=!1},d=>{this.loaders=!1})}else this.journalvoucherForm.markAllAsTouched(),this.toastrService.error("Please Fill All The Required Fields");else console.log(e,o),this.toastrService.error("Debit and credit amount total should be same"),this.journalvoucherForm.markAllAsTouched()}get date(){return this.journalvoucherForm.get("date")}get total_debit(){return this.journalvoucherForm.get("total_debit")}get total_credit(){return this.journalvoucherForm.get("total_credit")}get note(){return this.journalvoucherForm.get("description")}get journal_voucher_no(){return this.journalvoucherForm.get("journal_voucher_no")}from_account(e){return this.getCart().controls[e].get("from_account")}amount(e){return this.getCart().controls[e].get("amount")}debit(e,o){this.journalvoucherForm.get("journal_voucher_cart").at(e).patchValue({amount_type:"Debit"}),this.creditAmount[e]=0,this.debitAmount[e]=o}credit(e,o){this.journalvoucherForm.get("journal_voucher_cart").at(e).patchValue({amount_type:"Credit"}),this.creditAmount[e]=o,this.debitAmount[e]=0}calculateTotalDebit(){let e=0;return this.debitAmount.forEach(o=>{e+=+o}),e}calculateTotalCredit(){let e=0;return this.creditAmount.forEach(o=>{e+=+o}),e}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(_.F0),t.Y36(p._W),t.Y36(M.p),t.Y36(g.R))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-journal-voucher"]],decls:82,vars:27,consts:[[1,"page-header"],[1,"page-title"],["id","purchaseForm",1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date","formControlName","date",3,"ngClass"],["class","text-danger",4,"ngIf"],["formControlName","journal_voucher_no"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"card"],[1,"table-responsive"],[1,"table","datanew"],[2,"color","red"],["colspan","3"],["class","debitIntoCart",3,"click",4,"ngIf"],["formArrayName","journal_voucher_cart"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],[1,"text-start"],["type","text","formControlName","total_debit",1,"input",2,"display","none",3,"ngModel","ngClass"],["type","text","formControlName","total_credit",1,"input",2,"display","none",3,"ngModel","ngClass"],[1,"col-lg-12","my-3"],["formControlName","description","placeholder","Enter Description",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/journalvoucherList",1,"btn","btn-cancel","text-white"],[1,"text-danger"],[3,"value"],[1,"debitIntoCart",3,"click"],[3,"formGroupName"],[1,"me-2"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"color","red",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["style","color:green","xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","class","bi bi-plus-circle","viewBox","0 0 16 16",3,"click",4,"ngIf"],[1,"form-group",2,"margin-bottom","-1%"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Select From Account","aria-label","from_account","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngIf"],["class","text-danger","style","display: block;",4,"ngIf"],["type","number","formControlName","amount",1,"input",3,"value","keyup"],["cr",""],["dr",""],["type","text","formControlName","description","placeholder","Enter Note",1,"input"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle",2,"color","green",3,"click"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["routerLink","//account/accountlist",2,"color","#FF9F43"],["class","is-loading",4,"ngIf"],[1,"is-loading"],[1,"text-danger",2,"display","block"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Journal Voucher Add"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create New Journal Voucher"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Date"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,f,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"Journal Voucher No"),t.qZA(),t.TgZ(20,"select",10)(21,"option",11),t._uU(22,"Select Journal Voucher No"),t.qZA(),t.YNc(23,h,2,2,"option",12),t.qZA(),t.YNc(24,v,2,0,"span",9),t.qZA()()(),t.TgZ(25,"div",13)(26,"div",3)(27,"div",5)(28,"div",14)(29,"table",15)(30,"thead")(31,"tr")(32,"th"),t._uU(33,"#"),t.qZA(),t._UZ(34,"th"),t.TgZ(35,"th"),t._uU(36,"From Account"),t.TgZ(37,"span",16),t._uU(38,"*"),t.qZA()(),t.TgZ(39,"th"),t._uU(40,"Debit"),t.TgZ(41,"span",16),t._uU(42,"*"),t.qZA()(),t.TgZ(43,"th"),t._uU(44,"Credit"),t.TgZ(45,"span",16),t._uU(46,"*"),t.qZA()(),t.TgZ(47,"th"),t._uU(48,"Note"),t.qZA()(),t.TgZ(49,"tr")(50,"th",17),t.YNc(51,J,2,0,"span",18),t.qZA()()(),t.TgZ(52,"tbody"),t.ynx(53,19),t.YNc(54,E,30,12,"ng-container",20),t.BQk(),t.TgZ(55,"tr",21),t._UZ(56,"td")(57,"td")(58,"td"),t.TgZ(59,"td",22)(60,"strong"),t._uU(61,"Total"),t.qZA()(),t.TgZ(62,"td",22)(63,"strong"),t._uU(64),t.qZA(),t._UZ(65,"input",23),t.qZA(),t.TgZ(66,"td",22)(67,"strong"),t._uU(68),t.qZA(),t._UZ(69,"input",24),t.qZA(),t._UZ(70,"td"),t.qZA()()()()()()(),t.TgZ(71,"div",25)(72,"div",7)(73,"label"),t._uU(74,"Description"),t.qZA(),t._UZ(75,"textarea",26),t.YNc(76,Q,2,0,"span",9),t.qZA()(),t.TgZ(77,"div",27),t.YNc(78,Y,2,0,"button",28),t.YNc(79,G,3,0,"button",29),t.TgZ(80,"a",30),t._uU(81,"Cancel"),t.qZA()()()()()),2&e&&(t.xp6(8),t.Q6J("formGroup",o.journalvoucherForm),t.xp6(6),t.Q6J("ngClass",t.VKq(19,F,o.f.date.touched&&o.f.date.invalid)),t.uIk("min",o.minDate)("max",o.maxDate),t.xp6(1),t.Q6J("ngIf",o.date&&o.date.invalid&&o.date.touched),t.xp6(8),t.Q6J("ngForOf",o.prefixNo),t.xp6(1),t.Q6J("ngIf",o.journal_voucher_no&&o.journal_voucher_no.invalid&&o.journal_voucher_no.touched),t.xp6(27),t.Q6J("ngIf",o.isCart),t.xp6(3),t.Q6J("ngForOf",o.getCart().controls),t.xp6(10),t.Oqu(o.calculateTotalDebit().toFixed(2)),t.xp6(1),t.Q6J("ngModel",o.calculateTotalDebit())("ngClass",t.VKq(21,F,o.f.total_debit.touched&&o.f.total_debit.invalid)),t.xp6(3),t.Oqu(o.calculateTotalCredit().toFixed(2)),t.xp6(1),t.Q6J("ngModel",o.calculateTotalCredit())("ngClass",t.VKq(23,F,o.f.total_credit.touched&&o.f.total_credit.invalid)),t.xp6(6),t.Q6J("ngClass",t.VKq(25,F,o.f.description.touched&&o.f.description.invalid)),t.xp6(1),t.Q6J("ngIf",o.note&&o.note.invalid&&o.note.touched),t.xp6(2),t.Q6J("ngIf",!o.loaders),t.xp6(1),t.Q6J("ngIf",o.loaders))},dependencies:[u.mk,u.sg,u.O5,_.yS,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.JL,a.oH,a.sg,a.u,a.x0,a.CE,C.XC,C.ZL,A.ey,m.KE,x.Nt],styles:[".ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:40%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),n})(),canActivate:[c(30597).l],data:{allowedRoles:["add_journalvoucher"]}}];let K=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.Bz.forChild(B),_.Bz]}),n})();var z=c(8468);let $=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,K,z.I,C.Bb,m.lN,x.c]}),n})()},30597:(j,T,c)=>{c.d(T,{l:()=>t});var u=c(94650),_=c(4392),a=c(97185),N=c(42917),U=c(80927);let t=(()=>{class p{constructor(g,C,A,m,x){this.router=g,this.Arout=C,this.toastr=A,this.profileService=m,this.coreService=x}canActivate(g,C){const A=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(m=>{this.userDetails=m,this.permissions=this.userDetails?.permission}),A){const m=g.data.allowedRoles,x=A.some(h=>m.includes(h.codename));let f=this.coreService.profileData$.value;if(f&&f.username){this.userDetails=f,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(f);const h=f?.permission,v=this.profileService.getUserDetails();(!v||v.length!==h.length)&&(this.profileService.setUserPermission(h),window.location.reload())}else this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(h);const v=h?.permission,J=this.profileService.getUserDetails();(!J||J.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())});if(x)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(g){return new(g||p)(u.LFG(_.F0),u.LFG(_.gz),u.LFG(a._W),u.LFG(N.J),u.LFG(U.p))},p.\u0275prov=u.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);