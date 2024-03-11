"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[182],{53506:(D,U,a)=>{a.d(U,{x:()=>x});var h=a(92340),g=a(94650),p=a(80529);let x=(()=>{class _{constructor(e){this.http=e,this.apiUrl=`${h.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(e){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",e)}getPurchaseById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}PurchaseIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,r)}updatePurchase(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,e)}deletePurchase(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+e)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(e){return this.http.post(this.apiUrl+"/pv-api/material_inward/",e)}getMaterialById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}MaterialIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,r)}updateMaterial(e,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,e)}deleteMaterial(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(e){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",e)}getPurchaseBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}PurchaseBillIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,r)}updatePurchaseBill(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,e)}deletePurchaseBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}getDebitNotesById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNotesIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,r)}updateDebitNotes(e,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,e)}deleteDebitNotes(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",e)}getPurchaseReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}PurchaseReturnIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,r)}updatePurchaseReturn(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,e)}deletePurchaseReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}filterVariant(e,r,l,f){let m=this.apiUrl+"/pv-api/purchase_product_filter/";const c=[];return e&&c.push(`supplier=${e}`),r&&c.push(`category=${r}`),l&&c.push(`subcategory=${l}`),f&&c.push(`search=${f}`),c.length>0&&(m+="?"+c.join("&")),this.http.get(m)}}return _.\u0275fac=function(e){return new(e||_)(g.LFG(p.eN))},_.\u0275prov=g.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},80182:(D,U,a)=>{a.r(U),a.d(U,{UpdateDebitNoteModule:()=>X});var h=a(36895),g=a(89299),p=a(24006),x=a(68675),_=a(54004),t=a(94650),e=a(71071),r=a(53506),l=a(97185),f=a(25062),m=a(47957),c=a(3238),b=a(59549),v=a(44144);function M(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"mat-option",30),t.NdJ("onSelectionChange",function(){t.CHM(n);const u=t.oxw().$implicit,d=t.oxw();return t.KtG(d.oncheck(u.id))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw().$implicit;t.Q6J("value",n.company_name),t.xp6(1),t.Oqu(n.company_name)}}function T(o,s){if(1&o&&(t.ynx(0),t.YNc(1,M,2,2,"mat-option",29),t.BQk()),2&o){const n=s.$implicit;t.xp6(1),t.Q6J("ngIf",1==n.is_active)}}function y(o,s){1&o&&(t.TgZ(0,"mat-option",31)(1,"a",32),t._uU(2,"+ Add Supplier"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function F(o,s){1&o&&(t.TgZ(0,"mat-option",33),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function O(o,s){if(1&o&&(t.ynx(0),t.YNc(1,y,3,1,"mat-option",18),t.YNc(2,F,2,0,"mat-option",19),t.BQk()),2&o){const n=s.ngIf,i=t.oxw();t.xp6(1),t.Q6J("ngIf",0===n.length),t.xp6(1),t.Q6J("ngIf",(null==i.supplierControl.value?null:i.supplierControl.value.length)<3)}}function I(o,s){1&o&&(t.TgZ(0,"span",34),t._uU(1,"Select supplier "),t.qZA())}function S(o,s){1&o&&(t.TgZ(0,"span",34),t._uU(1,"Enter date name "),t.qZA())}function w(o,s){1&o&&(t.TgZ(0,"span",34),t._uU(1,"Enter Debit Note no"),t.qZA())}function $(o,s){if(1&o){const n=t.EpF();t.TgZ(0,"mat-option",30),t.NdJ("onSelectionChange",function(){t.CHM(n);const u=t.oxw().$implicit,d=t.oxw();return t.KtG(d.oncheck2(u))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw().$implicit;t.Q6J("value",null==n?null:n.refrence_bill_no),t.xp6(1),t.hij(" ",null==n?null:n.refrence_bill_no," ")}}function B(o,s){if(1&o&&(t.ynx(0),t.YNc(1,$,2,2,"mat-option",29),t.BQk()),2&o){const n=s.$implicit;t.xp6(1),t.Q6J("ngIf",1==(null==n?null:n.is_active))}}function J(o,s){1&o&&(t.TgZ(0,"mat-option",31)(1,"a",35),t._uU(2,"+ Add purchase Bill"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function E(o,s){1&o&&(t.TgZ(0,"mat-option",33),t._uU(1," Please Enter 1 or more characters "),t.qZA())}function Q(o,s){1&o&&(t.TgZ(0,"span",34),t._uU(1,"Select Purchase Bill "),t.qZA())}function R(o,s){1&o&&(t.TgZ(0,"span",34),t._uU(1,"Enter Reason"),t.qZA())}function L(o,s){1&o&&(t.TgZ(0,"span",34),t._uU(1,"Enter Amount"),t.qZA())}function q(o,s){1&o&&(t.TgZ(0,"span",34),t._uU(1,"Enter Tax ex: (1-100)"),t.qZA())}function Y(o,s){1&o&&(t.TgZ(0,"span",34),t._uU(1,"Enter total"),t.qZA())}function V(o,s){1&o&&(t.TgZ(0,"span",34),t._uU(1,"Enter Tax"),t.qZA())}function K(o,s){1&o&&(t.TgZ(0,"button",36),t._uU(1,"Submit"),t.qZA())}function G(o,s){1&o&&(t.TgZ(0,"button",37),t._UZ(1,"span",38),t._uU(2,"\xa0 Submit"),t.qZA())}const C=function(o){return{"is-invalid":o}},k=[{path:"",component:(()=>{class o{constructor(n,i,u,d,N,Z,A){this.fb=n,this.transactionService=i,this.purchaseService=u,this.toastr=d,this.router=N,this.Arout=Z,this.contactService=A,this.supplierControl=new p.NI,this.billControl=new p.NI,this.suppliers=[],this.purchaseList=[],this.filterPurchaseBill=[],this.dateError=null,this.loaders=!1}get f(){return this.debitNoteForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.supplierControl.setValue("Loading..."),this.billControl.setValue("Loading...");const n=new Date;n.getFullYear(),(n.getMonth()+1).toString().padStart(2,"0"),n.getDate().toString().padStart(2,"0"),n.getHours().toString().padStart(2,"0"),n.getMinutes().toString().padStart(2,"0"),this.debitNoteForm=this.fb.group({party:new p.NI("",[p.kI.required]),date:new p.NI("",[p.kI.required]),debit_note_no:new p.NI(""),purchase_bill:new p.NI("",[p.kI.required]),reason:new p.NI(""),amount:new p.NI(""),tax:new p.NI("",[p.kI.pattern(/^(100|[0-9]{1,2})$/)]),note:new p.NI(""),total:new p.NI("")}),this.transactionService.getDebitNoteById(this.id).subscribe(P=>{this.getRes=P,this.debitNoteForm.patchValue(this.getRes),this.debitNoteForm.get("party")?.patchValue(P.party.id),this.debitNoteForm.get("purchase_bill")?.patchValue(P?.purchase_bill?.id),this.contactService.getSupplierById(P.party.id).subscribe(tt=>{this.supplierControl.setValue(tt.company_name),this.billControl.setValue(this.getRes?.purchase_bill?.refrence_bill_no);const et=new Date(this.getRes.date).toISOString().slice(0,16);this.debitNoteForm.get("date")?.patchValue(et)})}),this.getSupplier(),this.getPurchaseBill(),this.getprefix(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,x.O)(""),(0,_.U)(P=>this._filter(P,!0)))}getprefix(){this.transactionService.getDebitNotePrefix().subscribe(n=>{console.log(n),1==n.success?this.prefixNo=n.prefix:this.toastr.error(n.msg)},n=>{this.toastr.error(n.error.msg)})}calculateTax(){this.totals=this.taxs?(this.amounts+(this.amounts-this.amounts*(100/(100+this.taxs)))).toFixed(2):this.amounts.toFixed(2)}getSupplier(){this.purchaseService.getSupplier().subscribe(n=>{console.log(n),this.suppliers=n})}getPurchaseBill(){this.purchaseService.getPurchaseBill().subscribe(n=>{this.purchaseList=n,this.filterPurchaseBill=n})}getFilterBill(n){this.filterPurchaseBill=this.purchaseList.filter(i=>!(!i||!i?.refrence_bill_no)&&i?.refrence_bill_no.toLowerCase().includes(n)),console.log(this.filterPurchaseBill)}_filter(n,i){const u="string"==typeof n?n.toLowerCase():n.toString().toLowerCase(),d=this.suppliers.filter(i?N=>N.company_name.toLowerCase().includes(u):N=>!N.company_name.toLowerCase().includes(u));return!i&&0===d.length&&d.push({company_name:"No data found"}),d}oncheck(n){console.log(n),this.debitNoteForm.patchValue({party:n})}oncheck2(n){console.log(n),this.debitNoteForm.patchValue({purchase_bill:n.id})}get supplier(){return this.debitNoteForm.get("party")}submit(){if(this.debitNoteForm.valid){this.loaders=!0;const n=new FormData;n.append("party",this.debitNoteForm.get("party")?.value),n.append("purchase_bill",this.debitNoteForm.get("purchase_bill")?.value),n.append("date",this.debitNoteForm.get("date")?.value),n.append("debit_note_no",this.debitNoteForm.get("debit_note_no")?.value),n.append("reason",this.debitNoteForm.get("reason")?.value),n.append("amount",this.debitNoteForm.get("amount")?.value),n.append("note",this.debitNoteForm.get("note")?.value),n.append("tax",this.debitNoteForm.get("tax")?.value),n.append("total",this.debitNoteForm.get("total")?.value),this.transactionService.updateDebitNote(n,this.id).subscribe(i=>{this.loaders=!1,this.addRes=i,this.addRes.success?(this.toastr.success(this.addRes.msg),this.debitNoteForm.reset(),this.router.navigate(["//transaction/debitnoteList"])):this.loaders=!1},i=>{this.loaders=!1})}else this.debitNoteForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get debit_note_no(){return this.debitNoteForm.get("debit_note_no")}get date(){return this.debitNoteForm.get("date")}get purchase_bill(){return this.debitNoteForm.get("purchase_bill")}get reason(){return this.debitNoteForm.get("reason")}get amount(){return this.debitNoteForm.get("amount")}get tax(){return this.debitNoteForm.get("tax")}get note(){return this.debitNoteForm.get("note")}get total(){return this.debitNoteForm.get("total")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(p.qu),t.Y36(e.p),t.Y36(r.x),t.Y36(l._W),t.Y36(g.F0),t.Y36(g.gz),t.Y36(f.y))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-update-debit-note"]],decls:82,vars:49,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Company","aria-label","Party","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],["type","datetime-local","formControlName","date","id","date",3,"ngClass"],["type","text","formControlName","debit_note_no","id","debit_note_no",3,"ngClass"],["type","text","placeholder","Search purchase Bill","aria-label","Search purchase Bills","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],["type","text","formControlName","reason","id","reason",3,"ngClass"],["type","number","formControlName","amount","id","amount",3,"ngModel","ngClass","ngModelChange","input"],["type","number","formControlName","tax","id","tax",3,"ngModel","ngClass","ngModelChange","input"],["type","number","formControlName","total","id","total",3,"ngModel","ngClass","ngModelChange","input"],["formControlName","note"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/debitnoteList",1,"btn","btn-cancel","text-white"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value"],["routerLink","//contacts/addSupplier",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],["routerLink","//purchase/add-goodsReceivedNote",2,"color","#FF9F43"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Update Debit Note"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Debit Note "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Company Name*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,T,2,1,"ng-container",11),t.ALo(19,"async"),t.YNc(20,O,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,I,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",6)(24,"div",7)(25,"label"),t._uU(26,"Debit Note Date*"),t.qZA(),t._UZ(27,"input",14),t.YNc(28,S,2,0,"span",13),t.qZA()(),t.TgZ(29,"div",6)(30,"div",7)(31,"label"),t._uU(32,"Debit Note No."),t.qZA(),t._UZ(33,"input",15),t.YNc(34,w,2,0,"span",13),t.qZA()(),t.TgZ(35,"div",6)(36,"div",7)(37,"label"),t._uU(38,"Purchase Bill*"),t.qZA(),t.TgZ(39,"mat-form-field",8)(40,"input",16),t.NdJ("input",function(d){return i.getFilterBill(d.target.value)}),t.qZA(),t.TgZ(41,"mat-autocomplete",null,17),t.YNc(43,B,2,1,"ng-container",11),t.YNc(44,J,3,1,"mat-option",18),t.YNc(45,E,2,0,"mat-option",19),t.qZA()(),t.YNc(46,Q,2,0,"span",13),t.qZA()(),t.TgZ(47,"div",6)(48,"div",7)(49,"label"),t._uU(50,"Reason"),t.qZA(),t._UZ(51,"input",20),t.YNc(52,R,2,0,"span",13),t.qZA()(),t.TgZ(53,"div",6)(54,"div",7)(55,"label"),t._uU(56,"Amount"),t.qZA(),t.TgZ(57,"input",21),t.NdJ("ngModelChange",function(d){return i.amounts=d})("input",function(){return i.calculateTax()}),t.qZA(),t.YNc(58,L,2,0,"span",13),t.qZA()(),t.TgZ(59,"div",6)(60,"div",7)(61,"label"),t._uU(62,"Tax %"),t.qZA(),t.TgZ(63,"input",22),t.NdJ("ngModelChange",function(d){return i.taxs=d})("input",function(){return i.calculateTax()}),t.qZA(),t.YNc(64,q,2,0,"span",13),t.qZA()(),t.TgZ(65,"div",6)(66,"div",7)(67,"label"),t._uU(68,"Total"),t.qZA(),t.TgZ(69,"input",23),t.NdJ("ngModelChange",function(d){return i.totals=d})("input",function(){return i.calculateTax()}),t.qZA(),t.YNc(70,Y,2,0,"span",13),t.qZA()(),t.TgZ(71,"div",6)(72,"div",7)(73,"label"),t._uU(74,"Note"),t.qZA(),t._UZ(75,"textarea",24),t.YNc(76,V,2,0,"span",13),t.qZA()(),t.TgZ(77,"div",25),t.YNc(78,K,2,0,"button",26),t.YNc(79,G,3,0,"button",27),t.TgZ(80,"a",28),t._uU(81,"Cancel"),t.qZA()()()()()()),2&n){const u=t.MAs(17),d=t.MAs(42);t.xp6(8),t.Q6J("formGroup",i.debitNoteForm),t.xp6(7),t.Q6J("formControl",i.supplierControl)("matAutocomplete",u)("ngClass",t.VKq(35,C,i.f.party.touched&&i.f.party.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,31,i.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,33,i.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",i.supplier&&i.supplier.invalid&&i.supplier.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(37,C,i.f.date.touched&&i.f.date.invalid)),t.xp6(1),t.Q6J("ngIf",i.date&&i.date.invalid&&i.date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(39,C,i.f.debit_note_no.touched&&i.f.debit_note_no.invalid)),t.xp6(1),t.Q6J("ngIf",i.debit_note_no&&i.debit_note_no.invalid&&i.debit_note_no.touched),t.xp6(6),t.Q6J("formControl",i.billControl)("matAutocomplete",d),t.xp6(3),t.Q6J("ngForOf",i.filterPurchaseBill),t.xp6(1),t.Q6J("ngIf",0===(null==i.filterPurchaseBill?null:i.filterPurchaseBill.length)),t.xp6(1),t.Q6J("ngIf",(null==i.billControl||null==i.billControl.value?null:i.billControl.value.length)<1),t.xp6(1),t.Q6J("ngIf",i.purchase_bill&&i.purchase_bill.invalid&&i.purchase_bill.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(41,C,i.f.reason.touched&&i.f.reason.invalid)),t.xp6(1),t.Q6J("ngIf",i.reason&&i.reason.invalid&&i.reason.touched),t.xp6(5),t.Q6J("ngModel",i.amounts)("ngClass",t.VKq(43,C,i.f.amount.touched&&i.f.amount.invalid)),t.xp6(1),t.Q6J("ngIf",i.amount&&i.amount.invalid&&i.amount.touched),t.xp6(5),t.Q6J("ngModel",i.taxs)("ngClass",t.VKq(45,C,i.f.tax.touched&&i.f.tax.invalid)),t.xp6(1),t.Q6J("ngIf",i.tax&&i.tax.invalid&&i.tax.touched),t.xp6(5),t.Q6J("ngModel",i.totals)("ngClass",t.VKq(47,C,i.f.total.touched&&i.f.total.invalid)),t.xp6(1),t.Q6J("ngIf",i.total&&i.total.invalid&&i.total.touched),t.xp6(6),t.Q6J("ngIf",i.tax&&i.tax.invalid&&i.tax.touched),t.xp6(2),t.Q6J("ngIf",!i.loaders),t.xp6(1),t.Q6J("ngIf",i.loaders)}},dependencies:[h.mk,h.sg,h.O5,g.yS,p._Y,p.Fj,p.wV,p.JJ,p.JL,p.oH,p.sg,p.u,m.XC,m.ZL,c.ey,b.KE,v.Nt,h.Ov],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})(),canActivate:[a(30597).l],data:{allowedRoles:["change_debitnote"]}}];let j=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(k),g.Bz]}),o})();var H=a(8468);let X=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.ez,j,H.I,m.Bb,b.lN,v.c]}),o})()},30597:(D,U,a)=>{a.d(U,{l:()=>t});var h=a(94650),g=a(89299),p=a(97185),x=a(42917),_=a(80927);let t=(()=>{class e{constructor(l,f,m,c,b){this.router=l,this.Arout=f,this.toastr=m,this.profileService=c,this.coreService=b}canActivate(l,f){const m=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(c=>{this.userDetails=c,this.permissions=this.userDetails?.permission}),m){const c=l.data.allowedRoles;console.log(c,"allowedRoles");const b=m.some(v=>c.includes(v.codename));if(console.log(b),this.coreService.getProfile().subscribe(v=>{this.userDetails=v,this.profileService.setUserDetails(this.userDetails);const M=v?.permission,T=this.profileService.getUserDetails();(!T||T.length!==M.length)&&(this.profileService.setUserPermission(M),window.location.reload())}),b)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(l){return new(l||e)(h.LFG(g.F0),h.LFG(g.gz),h.LFG(p._W),h.LFG(x.J),h.LFG(_.p))},e.\u0275prov=h.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);