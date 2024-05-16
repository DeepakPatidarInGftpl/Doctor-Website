"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7007],{53506:(U,N,l)=>{l.d(N,{x:()=>P});var h=l(92340),g=l(94650),p=l(80529);let P=(()=>{class _{constructor(e){this.http=e,this.apiUrl=`${h.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchaseFY(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?financial_year="}${e}`)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(e){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",e)}getPurchaseById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}PurchaseIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,o)}updatePurchase(e,o){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${o}`,e)}deletePurchase(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+e)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?financial_year="}${e}`)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(e){return this.http.post(this.apiUrl+"/pv-api/material_inward/",e)}getMaterialById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}MaterialIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,o)}updateMaterial(e,o){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${o}`,e)}deleteMaterial(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getPurchaseBillFY(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?financial_year="}${e}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(e){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",e)}getPurchaseBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}PurchaseBillIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,o)}updatePurchaseBill(e,o){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${o}`,e)}deletePurchaseBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}getDebitNotesById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNotesIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,o)}updateDebitNotes(e,o){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${o}`,e)}deleteDebitNotes(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?financial_year="}${e}`)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",e)}getPurchaseReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}PurchaseReturnIsActive(e,o){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,o)}updatePurchaseReturn(e,o){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${o}`,e)}deletePurchaseReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}filterVariant(e,o,a,m){let f=this.apiUrl+"/pv-api/purchase_product_filter/";const c=[];return e&&c.push(`supplier=${e}`),o&&c.push(`category=${o}`),a&&c.push(`subcategory=${a}`),m&&c.push(`search=${m}`),c.length>0&&(f+="?"+c.join("&")),this.http.get(f)}}return _.\u0275fac=function(e){return new(e||_)(g.LFG(p.eN))},_.\u0275prov=g.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},87007:(U,N,l)=>{l.r(N),l.d(N,{AddDebitNoteModule:()=>W});var h=l(36895),g=l(89299),p=l(24006),P=l(68675),_=l(54004),t=l(94650),e=l(71071),o=l(53506),a=l(97185),m=l(47957),f=l(3238),c=l(59549),v=l(44144);function A(r,s){if(1&r){const i=t.EpF();t.TgZ(0,"mat-option",31),t.NdJ("onSelectionChange",function(){t.CHM(i);const u=t.oxw().$implicit,d=t.oxw();return t.KtG(d.oncheck(u.id))}),t._uU(1),t.qZA()}if(2&r){const i=t.oxw().$implicit;t.Q6J("value",i.name+" "+(null==i?null:i.company_name)),t.xp6(1),t.Oqu(i.name+" "+(null==i?null:i.company_name))}}function x(r,s){if(1&r&&(t.ynx(0),t.YNc(1,A,2,2,"mat-option",30),t.BQk()),2&r){const i=s.$implicit;t.xp6(1),t.Q6J("ngIf",1==i.is_active)}}function M(r,s){1&r&&(t.TgZ(0,"mat-option",32)(1,"a",33),t._uU(2,"+ Add Supplier"),t.qZA()()),2&r&&t.Q6J("value","No data found")}function T(r,s){1&r&&(t.TgZ(0,"mat-option",34),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function Z(r,s){if(1&r&&(t.ynx(0),t.YNc(1,M,3,1,"mat-option",19),t.YNc(2,T,2,0,"mat-option",20),t.BQk()),2&r){const i=s.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",0===i.length),t.xp6(1),t.Q6J("ngIf",(null==n.supplierControl.value?null:n.supplierControl.value.length)<3)}}function D(r,s){1&r&&(t.TgZ(0,"span",35),t._uU(1,"Select Supplier "),t.qZA())}function y(r,s){1&r&&(t.TgZ(0,"span",35),t._uU(1,"Select Debit Note Date "),t.qZA())}function F(r,s){1&r&&(t.TgZ(0,"span",35),t._uU(1,"Enter Debit Note No."),t.qZA())}function O(r,s){if(1&r){const i=t.EpF();t.TgZ(0,"mat-option",31),t.NdJ("onSelectionChange",function(){t.CHM(i);const u=t.oxw().$implicit,d=t.oxw();return t.KtG(d.oncheck2(u))}),t._uU(1),t.qZA()}if(2&r){const i=t.oxw().$implicit;t.Q6J("value",null==i?null:i.refrence_bill_no),t.xp6(1),t.hij(" ",null==i?null:i.refrence_bill_no," ")}}function w(r,s){if(1&r&&(t.ynx(0),t.YNc(1,O,2,2,"mat-option",30),t.BQk()),2&r){const i=s.$implicit;t.xp6(1),t.Q6J("ngIf",1==(null==i?null:i.is_active))}}function I(r,s){1&r&&(t.TgZ(0,"mat-option",32)(1,"a",36),t._uU(2,"+ Add purchase Bill"),t.qZA()()),2&r&&t.Q6J("value","No data found")}function S(r,s){1&r&&(t.TgZ(0,"mat-option",34),t._uU(1," Please Enter 1 or more characters "),t.qZA())}function $(r,s){1&r&&(t.TgZ(0,"span",35),t._uU(1,"Select Purchase Bill "),t.qZA())}function B(r,s){1&r&&(t.TgZ(0,"span",35),t._uU(1,"Enter Reason"),t.qZA())}function J(r,s){1&r&&(t.TgZ(0,"span",35),t._uU(1,"Enter Amount"),t.qZA())}function E(r,s){1&r&&(t.TgZ(0,"span",35),t._uU(1,"Enter Tax ex: (1-100)"),t.qZA())}function Q(r,s){1&r&&(t.TgZ(0,"span",35),t._uU(1,"Enter total"),t.qZA())}function q(r,s){1&r&&(t.TgZ(0,"span",35),t._uU(1,"Enter Note"),t.qZA())}function R(r,s){1&r&&(t.TgZ(0,"button",37),t._uU(1,"Submit"),t.qZA())}function L(r,s){1&r&&(t.TgZ(0,"button",38),t._UZ(1,"span",39),t._uU(2,"\xa0 Submit"),t.qZA())}const b=function(r){return{"is-invalid":r}},G=[{path:"",component:(()=>{class r{constructor(i,n,u,d,C){this.fb=i,this.transactionService=n,this.purchaseService=u,this.toastr=d,this.router=C,this.supplierControl=new p.NI,this.billControl=new p.NI,this.amounts=0,this.taxs=0,this.totals=0,this.suppliers=[],this.purchaseList=[],this.filterPurchaseBill=[],this.dateError=null,this.loaders=!1}get f(){return this.debitNoteForm.controls}ngOnInit(){const i=new Date,j=`${i.getFullYear()}-${(i.getMonth()+1).toString().padStart(2,"0")}-${i.getDate().toString().padStart(2,"0")}T${i.getHours().toString().padStart(2,"0")}:${i.getMinutes().toString().padStart(2,"0")}`;this.debitNoteForm=this.fb.group({party:new p.NI("",[p.kI.required]),date:new p.NI(j,[p.kI.required]),debit_note_no:new p.NI(""),purchase_bill:new p.NI("",[p.kI.required]),reason:new p.NI(""),amount:new p.NI(0),tax:new p.NI(0,[p.kI.pattern(/^(100|[0-9]{1,2})$/)]),note:new p.NI(""),total:new p.NI(0)}),this.getSupplier(),this.getPurchaseBill(),this.getprefix(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,P.O)(""),(0,_.U)(H=>this._filter(H,!0)))}getprefix(){this.transactionService.getDebitNotePrefix().subscribe(i=>{console.log(i),1==i.success?this.prefixNo=i.prefix:this.toastr.error(i.msg)},i=>{this.toastr.error(i.error.msg)})}calculateTax(){this.totals=this.taxs?(this.amounts+(this.amounts-this.amounts*(100/(100+this.taxs)))).toFixed(2):this.amounts.toFixed(2)}getSupplier(){this.purchaseService.getSupplier().subscribe(i=>{console.log(i),this.suppliers=i})}getPurchaseBill(){this.purchaseService.getPurchaseBill().subscribe(i=>{this.purchaseList=i})}getFilterBill(i){this.filterPurchaseBill=this.purchaseList.filter(n=>!(!n||!n?.refrence_bill_no)&&n?.refrence_bill_no.toLowerCase().includes(i)),console.log(this.filterPurchaseBill)}_filter(i,n){const u="string"==typeof i?i.toLowerCase():i.toString().toLowerCase(),d=this.suppliers.filter(n?C=>C.company_name.toLowerCase().includes(u):C=>!C.company_name.toLowerCase().includes(u));return!n&&0===d.length&&d.push({company_name:"No data found"}),d}oncheck(i){console.log(i),this.debitNoteForm.patchValue({party:i})}oncheck2(i){console.log(i),this.debitNoteForm.patchValue({purchase_bill:i.id})}get supplier(){return this.debitNoteForm.get("party")}submit(){if(this.debitNoteForm.valid){this.loaders=!0;const i=new FormData;i.append("party",this.debitNoteForm.get("party")?.value),i.append("purchase_bill",this.debitNoteForm.get("purchase_bill")?.value),i.append("date",this.debitNoteForm.get("date")?.value),i.append("debit_note_no",this.debitNoteForm.get("debit_note_no")?.value),i.append("reason",this.debitNoteForm.get("reason")?.value),i.append("amount",this.debitNoteForm.get("amount")?.value),i.append("note",this.debitNoteForm.get("note")?.value),i.append("tax",this.debitNoteForm.get("tax")?.value),i.append("total",this.debitNoteForm.get("total")?.value),this.transactionService.addDebitNote(i).subscribe(n=>{this.loaders=!1,this.addRes=n,this.addRes.success?(this.toastr.success(this.addRes.msg),this.debitNoteForm.reset(),this.router.navigate(["//transaction/debitnoteList"])):this.loaders=!1},n=>{this.loaders=!1})}else this.debitNoteForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get debit_note_no(){return this.debitNoteForm.get("debit_note_no")}get date(){return this.debitNoteForm.get("date")}get purchase_bill(){return this.debitNoteForm.get("purchase_bill")}get reason(){return this.debitNoteForm.get("reason")}get amount(){return this.debitNoteForm.get("amount")}get tax(){return this.debitNoteForm.get("tax")}get note(){return this.debitNoteForm.get("note")}get total(){return this.debitNoteForm.get("total")}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(p.qu),t.Y36(e.p),t.Y36(o.x),t.Y36(a._W),t.Y36(g.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-add-debit-note"]],decls:82,vars:53,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-md-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Company","aria-label","Party","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12"],["type","datetime-local","formControlName","date","id","date",3,"ngClass"],["type","text","formControlName","debit_note_no","placeholder","Enter Debit Note No.","readonly","","id","debit_note_no",3,"ngModel","ngClass"],["type","text","placeholder","Search purchase Bill","aria-label","Search purchase Bills","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],["type","text","formControlName","reason","placeholder","Enter Reason","id","reason",3,"ngClass"],["type","number","formControlName","amount","placeholder","Enter Amount","id","amount",3,"ngModel","ngClass","ngModelChange","input"],["type","number","formControlName","tax","placeholder","Enter Tax","id","tax",3,"ngModel","ngClass","ngModelChange","input"],["type","number","formControlName","total","placeholder","Enter Total","id","total",3,"ngModel","ngClass","ngModelChange","input"],["formControlName","note","placeholder","Enter Note",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/debitnoteList",1,"btn","btn-cancel","text-white"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value"],["routerLink","//contacts/addSupplier",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],["routerLink","//purchase/add-goodsReceivedNote",2,"color","#FF9F43"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(i,n){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Add Debit Note"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Debit Note "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Supplier/Company Name*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,x,2,1,"ng-container",11),t.ALo(19,"async"),t.YNc(20,Z,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,D,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",14)(24,"div",7)(25,"label"),t._uU(26,"Debit Note Date*"),t.qZA(),t._UZ(27,"input",15),t.YNc(28,y,2,0,"span",13),t.qZA()(),t.TgZ(29,"div",14)(30,"div",7)(31,"label"),t._uU(32,"Debit Note No."),t.qZA(),t._UZ(33,"input",16),t.YNc(34,F,2,0,"span",13),t.qZA()(),t.TgZ(35,"div",14)(36,"div",7)(37,"label"),t._uU(38,"Purchase Bill*"),t.qZA(),t.TgZ(39,"mat-form-field",8)(40,"input",17),t.NdJ("input",function(d){return n.getFilterBill(d.target.value)}),t.qZA(),t.TgZ(41,"mat-autocomplete",null,18),t.YNc(43,w,2,1,"ng-container",11),t.YNc(44,I,3,1,"mat-option",19),t.YNc(45,S,2,0,"mat-option",20),t.qZA()(),t.YNc(46,$,2,0,"span",13),t.qZA()(),t.TgZ(47,"div",14)(48,"div",7)(49,"label"),t._uU(50,"Reason"),t.qZA(),t._UZ(51,"input",21),t.YNc(52,B,2,0,"span",13),t.qZA()(),t.TgZ(53,"div",14)(54,"div",7)(55,"label"),t._uU(56,"Amount"),t.qZA(),t.TgZ(57,"input",22),t.NdJ("ngModelChange",function(d){return n.amounts=d})("input",function(){return n.calculateTax()}),t.qZA(),t.YNc(58,J,2,0,"span",13),t.qZA()(),t.TgZ(59,"div",14)(60,"div",7)(61,"label"),t._uU(62,"Tax %"),t.qZA(),t.TgZ(63,"input",23),t.NdJ("ngModelChange",function(d){return n.taxs=d})("input",function(){return n.calculateTax()}),t.qZA(),t.YNc(64,E,2,0,"span",13),t.qZA()(),t.TgZ(65,"div",14)(66,"div",7)(67,"label"),t._uU(68,"Total"),t.qZA(),t.TgZ(69,"input",24),t.NdJ("ngModelChange",function(d){return n.totals=d})("input",function(){return n.calculateTax()}),t.qZA(),t.YNc(70,Q,2,0,"span",13),t.qZA()(),t.TgZ(71,"div",14)(72,"div",7)(73,"label"),t._uU(74,"Note"),t.qZA(),t._UZ(75,"textarea",25),t.YNc(76,q,2,0,"span",13),t.qZA()(),t.TgZ(77,"div",26),t.YNc(78,R,2,0,"button",27),t.YNc(79,L,3,0,"button",28),t.TgZ(80,"a",29),t._uU(81,"Cancel"),t.qZA()()()()()()),2&i){const u=t.MAs(17),d=t.MAs(42);t.xp6(8),t.Q6J("formGroup",n.debitNoteForm),t.xp6(7),t.Q6J("formControl",n.supplierControl)("matAutocomplete",u)("ngClass",t.VKq(37,b,n.f.party.touched&&n.f.party.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,33,n.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,35,n.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",n.supplier&&n.supplier.invalid&&n.supplier.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(39,b,n.f.date.touched&&n.f.date.invalid)),t.xp6(1),t.Q6J("ngIf",n.date&&n.date.invalid&&n.date.touched),t.xp6(5),t.Q6J("ngModel",n.prefixNo)("ngClass",t.VKq(41,b,n.f.debit_note_no.touched&&n.f.debit_note_no.invalid)),t.xp6(1),t.Q6J("ngIf",n.debit_note_no&&n.debit_note_no.invalid&&n.debit_note_no.touched),t.xp6(6),t.Q6J("formControl",n.billControl)("matAutocomplete",d),t.xp6(3),t.Q6J("ngForOf",n.filterPurchaseBill),t.xp6(1),t.Q6J("ngIf",0===(null==n.filterPurchaseBill?null:n.filterPurchaseBill.length)),t.xp6(1),t.Q6J("ngIf",(null==n.billControl||null==n.billControl.value?null:n.billControl.value.length)<1),t.xp6(1),t.Q6J("ngIf",n.purchase_bill&&n.purchase_bill.invalid&&n.purchase_bill.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(43,b,n.f.reason.touched&&n.f.reason.invalid)),t.xp6(1),t.Q6J("ngIf",n.reason&&n.reason.invalid&&n.reason.touched),t.xp6(5),t.Q6J("ngModel",n.amounts)("ngClass",t.VKq(45,b,n.f.amount.touched&&n.f.amount.invalid)),t.xp6(1),t.Q6J("ngIf",n.amount&&n.amount.invalid&&n.amount.touched),t.xp6(5),t.Q6J("ngModel",n.taxs)("ngClass",t.VKq(47,b,n.f.tax.touched&&n.f.tax.invalid)),t.xp6(1),t.Q6J("ngIf",n.tax&&n.tax.invalid&&n.tax.touched),t.xp6(5),t.Q6J("ngModel",n.totals)("ngClass",t.VKq(49,b,n.f.total.touched&&n.f.total.invalid)),t.xp6(1),t.Q6J("ngIf",n.total&&n.total.invalid&&n.total.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(51,b,n.f.note.touched&&n.f.note.invalid)),t.xp6(1),t.Q6J("ngIf",n.tax&&n.tax.invalid&&n.tax.touched),t.xp6(2),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders)}},dependencies:[h.mk,h.sg,h.O5,g.yS,p._Y,p.Fj,p.wV,p.JJ,p.JL,p.oH,p.sg,p.u,m.XC,m.ZL,f.ey,c.KE,v.Nt,h.Ov],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),r})(),canActivate:[l(30597).l],data:{allowedRoles:["add_debitnote"]}}];let z=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[g.Bz.forChild(G),g.Bz]}),r})();var V=l(8468);let W=(()=>{class r{}return r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[h.ez,z,V.I,m.Bb,c.lN,v.c]}),r})()},30597:(U,N,l)=>{l.d(N,{l:()=>t});var h=l(94650),g=l(89299),p=l(97185),P=l(42917),_=l(80927);let t=(()=>{class e{constructor(a,m,f,c,v){this.router=a,this.Arout=m,this.toastr=f,this.profileService=c,this.coreService=v}canActivate(a,m){const f=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(c=>{this.userDetails=c,this.permissions=this.userDetails?.permission}),f){const c=a.data.allowedRoles;console.log(c,"allowedRoles");const v=f.some(A=>c.includes(A.codename));if(console.log(v),this.coreService.getProfile().subscribe(A=>{this.userDetails=A,this.profileService.setUserDetails(this.userDetails);const x=A?.permission,M=this.profileService.getUserDetails();(!M||M.length!==x.length)&&(this.profileService.setUserPermission(x),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(a){return new(a||e)(h.LFG(g.F0),h.LFG(g.gz),h.LFG(p._W),h.LFG(P.J),h.LFG(_.p))},e.\u0275prov=h.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);