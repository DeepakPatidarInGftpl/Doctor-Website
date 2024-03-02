"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6916],{71071:(P,v,l)=>{l.d(v,{p:()=>x});var u=l(92340),h=l(94650),s=l(80529);let x=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${u.N.api}`}getDebitNote(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}getDebitNoteById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNoteIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,o)}addDebitNote(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}updateDebitNote(e,o){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${o}`,e)}deleteDebitNote(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getCreditNote(){return this.http.get(this.apiUrl+"/pv-api/credit_note/")}getCreditNoteById(e){return this.http.get(`${this.apiUrl+"/pv-api/credit_note/?id="}${e}`)}CreditNoteIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/credit_note/?id="}${e}`,o)}addCreditNote(e){return this.http.post(this.apiUrl+"/pv-api/credit_note/",e)}updateCreditNote(e,o){return this.http.put(`${this.apiUrl+"/pv-api/credit_note/?id="}${o}`,e)}deleteCreditNote(e){return this.http.delete(`${this.apiUrl+"/pv-api/credit_note/?id="}${e}`)}getJournalVoucher(){return this.http.get(this.apiUrl+"/pv-api/jounal_voucher/")}getJournalVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${e}`)}JournalVoucherIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${e}`,o)}addJournalVoucher(e){return this.http.post(this.apiUrl+"/pv-api/jounal_voucher/",e)}updateJournalVoucher(e,o){return this.http.put(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${o}`,e)}deleteJournalVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${e}`)}getCountraVoucher(){return this.http.get(this.apiUrl+"/pv-api/countra_voucher/")}getCountraVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${e}`)}CountraVoucherIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${e}`,o)}addCountraVoucher(e){return this.http.post(this.apiUrl+"/pv-api/countra_voucher/",e)}updateCountraVoucher(e,o){return this.http.put(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${o}`,e)}deleteCountraVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${e}`)}getRecieptVoucher(){return this.http.get(this.apiUrl+"/pv-api/receipt_voucher/")}getRecieptVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${e}`)}RecieptVoucherIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${e}`,o)}addRecieptVoucher(e){return this.http.post(this.apiUrl+"/pv-api/receipt_voucher/",e)}updateRecieptVoucher(e,o){return this.http.put(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${o}`,e)}deleteRecieptVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${e}`)}getPaymentVoucher(){return this.http.get(this.apiUrl+"/pv-api/payment_voucher/")}getPaymentVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${e}`)}PaymentVoucherIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${e}`,o)}addPaymentVoucher(e){return this.http.post(this.apiUrl+"/pv-api/payment_voucher/",e)}updatePaymentVoucher(e,o){return this.http.put(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${o}`,e)}deletePaymentVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${e}`)}getJournalVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=JournalVoucher")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=DebitNote")}getCreditNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=CreditNote")}getCountraVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=CountraVoucher")}getReceiptVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=ReceiptVoucher")}getPaymentVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PaymentVoucher")}getExpenceVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=ExpensesVoucher")}getMaterialConsuptionPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialConsuption")}getAccount(){return this.http.get(this.apiUrl+"/pv-api/account/")}getSalesBill(){return this.http.get(this.apiUrl+"/pv-api/sale_bill/")}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getExpensVoucher(){return this.http.get(this.apiUrl+"/pv-api/expense_voucher/")}getExpensVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${e}`)}ExpensVoucherIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${e}`,o)}addExpensVoucher(e){return this.http.post(this.apiUrl+"/pv-api/expense_voucher/",e)}updateExpensVoucher(e,o){return this.http.put(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${o}`,e)}deleteExpensVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${e}`)}getMaterialConsuption(){return this.http.get(this.apiUrl+"/pv-api/new_material_consuption/")}getMaterialConsuptionById(e){return this.http.get(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${e}`)}MaterialConsuptionIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${e}`,o)}addMaterialConsuption(e){return this.http.post(this.apiUrl+"/pv-api/new_material_consuption/",e)}updateMaterialConsuption(e,o){return this.http.put(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${o}`,e)}deleteMaterialConsuption(e){return this.http.delete(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/contact-user/")}}return g.\u0275fac=function(e){return new(e||g)(h.LFG(s.eN))},g.\u0275prov=h.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},26916:(P,v,l)=>{l.r(v),l.d(v,{AddCreditNoteModule:()=>j});var u=l(36895),h=l(89299),s=l(24006),x=l(68675),g=l(54004),t=l(94650),e=l(71071),o=l(72170),a=l(97185),C=l(47957),b=l(3238),_=l(59549),m=l(44144);function N(i,p){if(1&i){const r=t.EpF();t.TgZ(0,"mat-option",31),t.NdJ("onSelectionChange",function(){t.CHM(r);const d=t.oxw().$implicit,c=t.oxw();return t.KtG(c.oncheck(d))}),t._uU(1),t.qZA()}if(2&i){const r=t.oxw().$implicit;t.Q6J("value",null==r?null:r.account_id),t.xp6(1),t.Oqu(null==r?null:r.account_id)}}function U(i,p){if(1&i&&(t.ynx(0),t.YNc(1,N,2,2,"mat-option",30),t.BQk()),2&i){const r=p.$implicit;t.xp6(1),t.Q6J("ngIf",1==r.is_active)}}function Z(i,p){1&i&&(t.TgZ(0,"mat-option",32)(1,"a",33),t._uU(2,"+ Add Account"),t.qZA()()),2&i&&t.Q6J("value","No data found")}function M(i,p){1&i&&(t.TgZ(0,"mat-option",34),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function T(i,p){if(1&i&&(t.ynx(0),t.YNc(1,Z,3,1,"mat-option",19),t.YNc(2,M,2,0,"mat-option",20),t.BQk()),2&i){const r=p.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",0===r.length),t.xp6(1),t.Q6J("ngIf",(null==n.fromAccountControl.value?null:n.fromAccountControl.value.length)<3)}}function F(i,p){1&i&&(t.TgZ(0,"span",35),t._uU(1,"Select Account "),t.qZA())}function I(i,p){1&i&&(t.TgZ(0,"span",35),t._uU(1,"Select Date "),t.qZA())}function O(i,p){1&i&&(t.TgZ(0,"span",35),t._uU(1,"Enter Credit Note no."),t.qZA())}function $(i,p){if(1&i){const r=t.EpF();t.TgZ(0,"mat-option",31),t.NdJ("onSelectionChange",function(){t.CHM(r);const d=t.oxw().$implicit,c=t.oxw();return t.KtG(c.oncheck2(d))}),t._uU(1),t.qZA()}if(2&i){const r=t.oxw().$implicit;t.Q6J("value",null==r?null:r.customer_bill_no),t.xp6(1),t.hij(" ",null==r?null:r.customer_bill_no," ")}}function y(i,p){if(1&i&&(t.ynx(0),t.YNc(1,$,2,2,"mat-option",30),t.BQk()),2&i){const r=p.$implicit;t.xp6(1),t.Q6J("ngIf",1==(null==r?null:r.is_active))}}function w(i,p){1&i&&(t.TgZ(0,"mat-option",32)(1,"a",36),t._uU(2,"+ Add sale Bill"),t.qZA()()),2&i&&t.Q6J("value","No data found")}function J(i,p){1&i&&(t.TgZ(0,"mat-option",34),t._uU(1," Please Enter 1 or more characters "),t.qZA())}function S(i,p){1&i&&(t.TgZ(0,"span",35),t._uU(1,"Select Sale Bill No. "),t.qZA())}function V(i,p){1&i&&(t.TgZ(0,"span",35),t._uU(1,"Enter Reason"),t.qZA())}function E(i,p){1&i&&(t.TgZ(0,"span",35),t._uU(1,"Enter Round Off"),t.qZA())}function B(i,p){1&i&&(t.TgZ(0,"span",35),t._uU(1,"Enter Tax ex: (1-100)"),t.qZA())}function L(i,p){1&i&&(t.TgZ(0,"span",35),t._uU(1,"Enter Total"),t.qZA())}function D(i,p){1&i&&(t.TgZ(0,"span",35),t._uU(1,"Enter Note"),t.qZA())}function Q(i,p){1&i&&(t.TgZ(0,"button",37),t._uU(1,"Submit"),t.qZA())}function R(i,p){1&i&&(t.TgZ(0,"button",38),t._UZ(1,"span",39),t._uU(2,"\xa0 Submit"),t.qZA())}const f=function(i){return{"is-invalid":i}},K=[{path:"",component:(()=>{class i{constructor(r,n,d,c,A){this.fb=r,this.transactionService=n,this.saleService=d,this.toastr=c,this.router=A,this.fromAccountControl=new s.NI,this.billControl=new s.NI,this.accountList=[],this.saleBillList=[],this.FiltersaleBillList=[],this.dateError=null,this.loaders=!1}get f(){return this.debitNoteForm.controls}ngOnInit(){const r=(new Date).toISOString().split("T")[0];this.debitNoteForm=this.fb.group({account:new s.NI("",[s.kI.required]),date:new s.NI(r,[s.kI.required]),credit_note_no:new s.NI(""),sale_bill_no:new s.NI("",[s.kI.required]),reason:new s.NI(""),roundoff:new s.NI(""),tax:new s.NI("",[s.kI.pattern(/^(100|[0-9]{1,2})$/)]),note:new s.NI(""),total:new s.NI(""),status:new s.NI("")}),this.getAccount(),this.getprefix(),this.getSaleBill(),this.filteredFromAccount=this.fromAccountControl.valueChanges.pipe((0,x.O)(""),(0,g.U)(n=>this._filter(n,!0)))}getprefix(){this.transactionService.getCreditNotePrefix().subscribe(r=>{console.log(r),1==r.success?this.prefixNo=r.prefix:this.toastr.error(r.msg)},r=>{this.toastr.error(r.error.msg)})}getAccount(){this.transactionService.getAccount().subscribe(r=>{this.accountList=r})}getSaleBill(){this.saleService.getSalesBill().subscribe(r=>{this.saleBillList=r})}getFilterBill(r){this.FiltersaleBillList=this.saleBillList.filter(n=>!(!n||!n?.customer_bill_no)&&n?.customer_bill_no.toLowerCase().includes(r)),console.log(this.FiltersaleBillList)}_filter(r,n){const d="string"==typeof r?r.toLowerCase():r.toString().toLowerCase(),c=this.accountList.filter(n?A=>A?.account_id?.toLowerCase().includes(d):A=>!A?.account_id?.toLowerCase().includes(d));return!n&&0===c.length&&c.push({account:"No data found"}),c}calculateTax(){this.totals=this.taxs?(this.amounts+(this.amounts-this.amounts*(100/(100+this.taxs)))).toFixed(2):this.amounts.toFixed(2)}oncheck(r){this.debitNoteForm.patchValue({account:r.id})}oncheck2(r){console.log(r),this.debitNoteForm.patchValue({sale_bill_no:r.id})}submit(){if(this.debitNoteForm.valid){this.loaders=!0;const r=new FormData;r.append("account",this.debitNoteForm.get("account")?.value),r.append("sale_bill_no",this.debitNoteForm.get("sale_bill_no")?.value),r.append("date",this.debitNoteForm.get("date")?.value),r.append("credit_note_no",this.debitNoteForm.get("credit_note_no")?.value),r.append("reason",this.debitNoteForm.get("reason")?.value),r.append("roundoff",this.debitNoteForm.get("roundoff")?.value),r.append("note",this.debitNoteForm.get("note")?.value),r.append("tax",this.debitNoteForm.get("tax")?.value),r.append("total",this.debitNoteForm.get("total")?.value),this.transactionService.addCreditNote(r).subscribe(n=>{this.loaders=!1,this.addRes=n,this.addRes.success?(this.toastr.success(this.addRes.msg),this.debitNoteForm.reset(),this.router.navigate(["//transaction/creditnoteList"])):this.loaders=!1},n=>{this.loaders=!1})}else this.debitNoteForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get account(){return this.debitNoteForm.get("account")}get date(){return this.debitNoteForm.get("date")}get credit_note_no(){return this.debitNoteForm.get("credit_note_no")}get reason(){return this.debitNoteForm.get("reason")}get sale_bill_no(){return this.debitNoteForm.get("sale_bill_no")}get tax(){return this.debitNoteForm.get("tax")}get note(){return this.debitNoteForm.get("note")}get total(){return this.debitNoteForm.get("total")}get roundoff(){return this.debitNoteForm.get("roundoff")}}return i.\u0275fac=function(r){return new(r||i)(t.Y36(s.qu),t.Y36(e.p),t.Y36(o.M),t.Y36(a._W),t.Y36(h.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-credit-note"]],decls:82,vars:47,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-md-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Select From Account","aria-label","from_account","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12"],["type","date","formControlName","date","id","date",3,"ngClass"],["type","text","formControlName","credit_note_no","placeholder","Enter Credit Note No.","id","credit_note_no",3,"ngModel","ngClass"],["type","text","placeholder","Search Sale Bill","aria-label","Search sale Bills","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],["type","text","formControlName","reason","placeholder","Enter Reason",3,"ngClass"],["type","number","formControlName","roundoff","placeholder","Enter Round off",3,"ngClass"],["type","number","formControlName","tax","placeholder","Enter Tax",3,"ngClass"],["type","number","formControlName","total","placeholder","Enter Total","id","total",3,"ngClass"],["formControlName","note","placeholder","Enter Note",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/creditnoteList",1,"btn","btn-cancel","text-white"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value"],["routerLink","//account/accountlist",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],["routerLink","///sales/addsalesbill",2,"color","#FF9F43"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(r,n){if(1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Add Credit Note"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Credit Note "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Account Name*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,U,2,1,"ng-container",11),t.ALo(19,"async"),t.YNc(20,T,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,F,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",14)(24,"div",7)(25,"label"),t._uU(26,"Credit Note Date*"),t.qZA(),t._UZ(27,"input",15),t.YNc(28,I,2,0,"span",13),t.qZA()(),t.TgZ(29,"div",14)(30,"div",7)(31,"label"),t._uU(32,"Credit Note No."),t.qZA(),t._UZ(33,"input",16),t.YNc(34,O,2,0,"span",13),t.qZA()(),t.TgZ(35,"div",14)(36,"div",7)(37,"label"),t._uU(38,"Select Sale Bill*"),t.qZA(),t.TgZ(39,"mat-form-field",8)(40,"input",17),t.NdJ("input",function(c){return n.getFilterBill(c.target.value)}),t.qZA(),t.TgZ(41,"mat-autocomplete",null,18),t.YNc(43,y,2,1,"ng-container",11),t.YNc(44,w,3,1,"mat-option",19),t.YNc(45,J,2,0,"mat-option",20),t.qZA()(),t.YNc(46,S,2,0,"span",13),t.qZA()(),t.TgZ(47,"div",14)(48,"div",7)(49,"label"),t._uU(50,"Reason"),t.qZA(),t._UZ(51,"input",21),t.YNc(52,V,2,0,"span",13),t.qZA()(),t.TgZ(53,"div",14)(54,"div",7)(55,"label"),t._uU(56,"Round Off"),t.qZA(),t._UZ(57,"input",22),t.YNc(58,E,2,0,"span",13),t.qZA()(),t.TgZ(59,"div",14)(60,"div",7)(61,"label"),t._uU(62,"Tax %"),t.qZA(),t._UZ(63,"input",23),t.YNc(64,B,2,0,"span",13),t.qZA()(),t.TgZ(65,"div",14)(66,"div",7)(67,"label"),t._uU(68,"Total"),t.qZA(),t._UZ(69,"input",24),t.YNc(70,L,2,0,"span",13),t.qZA()(),t.TgZ(71,"div",14)(72,"div",7)(73,"label"),t._uU(74,"Note"),t.qZA(),t._UZ(75,"textarea",25),t.YNc(76,D,2,0,"span",13),t.qZA()(),t.TgZ(77,"div",26),t.YNc(78,Q,2,0,"button",27),t.YNc(79,R,3,0,"button",28),t.TgZ(80,"a",29),t._uU(81,"Cancel"),t.qZA()()()()()()),2&r){const d=t.MAs(17),c=t.MAs(42);t.xp6(8),t.Q6J("formGroup",n.debitNoteForm),t.xp6(7),t.Q6J("formControl",n.fromAccountControl)("matAutocomplete",d),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,29,n.filteredFromAccount)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,31,n.filteredFromAccount)),t.xp6(2),t.Q6J("ngIf",n.account&&n.account.invalid&&n.account.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(33,f,n.f.date.touched&&n.f.date.invalid)),t.xp6(1),t.Q6J("ngIf",n.date&&n.date.invalid&&n.date.touched),t.xp6(5),t.Q6J("ngModel",n.prefixNo)("ngClass",t.VKq(35,f,n.f.credit_note_no.touched&&n.f.credit_note_no.invalid)),t.xp6(1),t.Q6J("ngIf",n.credit_note_no&&n.credit_note_no.invalid&&n.credit_note_no.touched),t.xp6(6),t.Q6J("formControl",n.billControl)("matAutocomplete",c),t.xp6(3),t.Q6J("ngForOf",n.FiltersaleBillList),t.xp6(1),t.Q6J("ngIf",0===(null==n.FiltersaleBillList?null:n.FiltersaleBillList.length)),t.xp6(1),t.Q6J("ngIf",(null==n.billControl||null==n.billControl.value?null:n.billControl.value.length)<1),t.xp6(1),t.Q6J("ngIf",n.sale_bill_no&&n.sale_bill_no.invalid&&n.sale_bill_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(37,f,n.f.reason.touched&&n.f.reason.invalid)),t.xp6(1),t.Q6J("ngIf",n.reason&&n.reason.invalid&&n.reason.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(39,f,n.f.roundoff.touched&&n.f.roundoff.invalid)),t.xp6(1),t.Q6J("ngIf",n.roundoff&&n.roundoff.invalid&&n.roundoff.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(41,f,n.f.tax.touched&&n.f.tax.invalid)),t.xp6(1),t.Q6J("ngIf",n.tax&&n.tax.invalid&&n.tax.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(43,f,n.f.total.touched&&n.f.total.invalid)),t.xp6(1),t.Q6J("ngIf",n.total&&n.total.invalid&&n.total.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(45,f,n.f.note.touched&&n.f.note.invalid)),t.xp6(1),t.Q6J("ngIf",n.tax&&n.tax.invalid&&n.tax.touched),t.xp6(2),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders)}},dependencies:[u.mk,u.sg,u.O5,h.yS,s._Y,s.Fj,s.wV,s.JJ,s.JL,s.oH,s.sg,s.u,C.XC,C.ZL,b.ey,_.KE,m.Nt,u.Ov],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),i})(),canActivate:[l(30597).l],data:{allowedRoles:["add_creditnote"]}}];let G=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.Bz.forChild(K),h.Bz]}),i})();var z=l(8468);let j=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,G,z.I,C.Bb,_.lN,m.c]}),i})()},30597:(P,v,l)=>{l.d(v,{l:()=>t});var u=l(94650),h=l(89299),s=l(97185),x=l(42917),g=l(80927);let t=(()=>{class e{constructor(a,C,b,_,m){this.router=a,this.Arout=C,this.toastr=b,this.profileService=_,this.coreService=m}canActivate(a,C){const b=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),b){const _=a.data.allowedRoles;console.log(_,"allowedRoles");const m=b.some(N=>_.includes(N.codename));if(console.log(m),this.coreService.getProfile().subscribe(N=>{this.userDetails=N,this.profileService.setUserDetails(this.userDetails);const U=N?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==U.length)&&(this.profileService.setUserPermission(U),window.location.reload())}),m)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(a){return new(a||e)(u.LFG(h.F0),u.LFG(h.gz),u.LFG(s._W),u.LFG(x.J),u.LFG(g.p))},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);