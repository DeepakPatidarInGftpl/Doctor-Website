"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7007],{53506:(T,N,l)=>{l.d(N,{x:()=>f});var g=l(92340),_=l(94650),s=l(80529);let f=(()=>{class m{constructor(t){this.http=t,this.apiUrl=`${g.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(t){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+t)}getPurchaseFY(t,i){console.log(i,"branch"),console.log(i.length,"branch");let r=this.apiUrl+"/pv-api/purchase_order/";const a=[];if(t&&a.push(`financial_year=${t}`),i&&i.length>0){const u=JSON.stringify(i);console.log(u),console.log(u?.length),a.push(`branch=${u}`)}return a.length>0&&(r+="?"+a.join("&")),this.http.get(r)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,i)}updatePurchase(t,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(t,i){console.log(i,"branch"),console.log(i.length,"branch");let r=this.apiUrl+"/pv-api/material_inward/";const a=[];if(t&&a.push(`financial_year=${t}`),i&&i.length>0){const u=JSON.stringify(i);console.log(u),console.log(u?.length),a.push(`branch=${u}`)}return a.length>0&&(r+="?"+a.join("&")),this.http.get(r)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}MaterialIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,i)}updateMaterial(t,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBillFY(t,i){console.log(i,"branch"),console.log(i.length,"branch");let r=this.apiUrl+"/pv-api/purchase_bill/";const a=[];if(t&&a.push(`financial_year=${t}`),i&&i.length>0){const u=JSON.stringify(i);console.log(u),console.log(u?.length),a.push(`branch=${u}`)}return a.length>0&&(r+="?"+a.join("&")),this.http.get(r)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}PurchaseBillIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,i)}updatePurchaseBill(t,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getDebitNotes(t,i){console.log(i,"branch"),console.log(i.length,"branch");let r=this.apiUrl+"/pv-api/debit_note/";const a=[];if(t&&a.push(`financial_year=${t}`),i&&i.length>0){const u=JSON.stringify(i);console.log(u),console.log(u?.length),a.push(`branch=${u}`)}return a.length>0&&(r+="?"+a.join("&")),this.http.get(r)}addDebitNotes(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}getDebitNotesById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNotesIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,i)}updateDebitNotes(t,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,t)}deleteDebitNotes(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getSearchProductById(t){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${t}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(t,i){console.log(i,"branch"),console.log(i.length,"branch");let r=this.apiUrl+"/pv-api/purchase_return/";const a=[];if(t&&a.push(`financial_year=${t}`),i&&i.length>0){const u=JSON.stringify(i);console.log(u),console.log(u?.length),a.push(`branch=${u}`)}return a.length>0&&(r+="?"+a.join("&")),this.http.get(r)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(t){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",t)}getPurchaseReturnById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}PurchaseReturnIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`,i)}updatePurchaseReturn(t,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,t)}deletePurchaseReturn(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}filterVariant(t,i,r,a){let u=this.apiUrl+"/pv-api/purchase_product_filter/";const h=[];return t&&h.push(`supplier=${t}`),i&&h.push(`category=${i}`),r&&h.push(`subcategory=${r}`),a&&h.push(`search=${a}`),h.length>0&&(u+="?"+h.join("&")),this.http.get(u)}}return m.\u0275fac=function(t){return new(t||m)(_.LFG(s.eN))},m.\u0275prov=_.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},87007:(T,N,l)=>{l.r(N),l.d(N,{AddDebitNoteModule:()=>tt});var g=l(36895),_=l(4392),s=l(24006),f=l(68675),m=l(54004),P=l(78372),t=l(94650),i=l(71071),r=l(53506),a=l(97185),u=l(43443),h=l(47957),A=l(3238),b=l(59549),x=l(44144);function M(o,p){if(1&o){const n=t.EpF();t.TgZ(0,"mat-option",33),t.NdJ("onSelectionChange",function(){t.CHM(n);const d=t.oxw().$implicit,c=t.oxw();return t.KtG(c.oncheck(d.id))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw().$implicit;t.Q6J("value",n.name+" "+(null==n?null:n.company_name)),t.xp6(1),t.Oqu(null==n?null:n.company_name)}}function Z(o,p){if(1&o&&(t.ynx(0),t.YNc(1,M,2,2,"mat-option",32),t.BQk()),2&o){const n=p.$implicit;t.xp6(1),t.Q6J("ngIf",1==n.is_active&&!(null==n||!n.company_name))}}function S(o,p){1&o&&(t.TgZ(0,"mat-option",34)(1,"a",35),t._uU(2,"+ Add Supplier"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function y(o,p){1&o&&(t.TgZ(0,"mat-option",36),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function O(o,p){if(1&o&&(t.ynx(0),t.YNc(1,S,3,1,"mat-option",21),t.YNc(2,y,2,0,"mat-option",22),t.BQk()),2&o){const n=p.ngIf,e=t.oxw();t.xp6(1),t.Q6J("ngIf",0===n.length),t.xp6(1),t.Q6J("ngIf",(null==e.supplierControl.value?null:e.supplierControl.value.length)<3)}}function F(o,p){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Select Supplier "),t.qZA())}function I(o,p){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Select Debit Note Date "),t.qZA())}function $(o,p){if(1&o&&(t.TgZ(0,"option",34),t._uU(1),t.qZA()),2&o){const n=p.$implicit;t.s9C("value",n.id),t.xp6(1),t.Oqu(n.prefix)}}function w(o,p){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Enter Debit Note Series"),t.qZA())}function J(o,p){if(1&o){const n=t.EpF();t.TgZ(0,"mat-option",33),t.NdJ("onSelectionChange",function(){t.CHM(n);const d=t.oxw().$implicit,c=t.oxw();return t.KtG(c.oncheck2(d))}),t._uU(1),t.qZA()}if(2&o){const n=t.oxw().$implicit;t.Q6J("value",null==n?null:n.supplier_bill_no),t.xp6(1),t.hij(" ",null==n?null:n.supplier_bill_no," ")}}function B(o,p){if(1&o&&(t.ynx(0),t.YNc(1,J,2,2,"mat-option",32),t.BQk()),2&o){const n=p.$implicit;t.xp6(1),t.Q6J("ngIf",1==(null==n?null:n.is_active)&&!(null==n||!n.supplier_bill_no))}}function E(o,p){1&o&&(t.TgZ(0,"mat-option",34)(1,"a",38),t._uU(2,"+ Add purchase Bill"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function q(o,p){1&o&&(t.TgZ(0,"mat-option",36),t._uU(1," Please Enter 1 or more characters "),t.qZA())}function Q(o,p){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Select Purchase Bill "),t.qZA())}function Y(o,p){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Enter Reason"),t.qZA())}function R(o,p){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Enter Amount"),t.qZA())}function L(o,p){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Enter Tax ex: (1-100)"),t.qZA())}function K(o,p){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Enter total"),t.qZA())}function G(o,p){1&o&&(t.TgZ(0,"span",37),t._uU(1,"Enter Note"),t.qZA())}function V(o,p){1&o&&(t.TgZ(0,"button",39),t._uU(1,"Submit"),t.qZA())}function z(o,p){1&o&&(t.TgZ(0,"button",40),t._UZ(1,"span",41),t._uU(2,"\xa0 Submit"),t.qZA())}const v=function(o){return{"is-invalid":o}},k=[{path:"",component:(()=>{class o{constructor(n,e,d,c,C,D){this.fb=n,this.transactionService=e,this.purchaseService=d,this.toastr=c,this.router=C,this.commonService=D,this.minDate="",this.maxDate="",this.supplierControl=new s.NI,this.billControl=new s.NI,this.amounts=0,this.taxs=0,this.totals=0,this.suppliers=[],this.purchaseList=[],this.filterPurchaseBill=[],this.dateError=null,this.loaders=!1}get f(){return this.debitNoteForm.controls}ngOnInit(){const n=new Date,et=`${n.getFullYear()}-${(n.getMonth()+1).toString().padStart(2,"0")}-${n.getDate().toString().padStart(2,"0")}T${n.getHours().toString().padStart(2,"0")}:${n.getMinutes().toString().padStart(2,"0")}`;this.debitNoteForm=this.fb.group({party:new s.NI("",[s.kI.required]),date:new s.NI(et,[s.kI.required]),debit_note_no:new s.NI(""),purchase_bill:new s.NI("",[s.kI.required]),reason:new s.NI(""),amount:new s.NI(0),tax:new s.NI(0,[s.kI.pattern(/^(100|[0-9]{1,2})$/)]),note:new s.NI(""),total:new s.NI(0)}),this.getPurchaseBill(),this.getprefix(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,f.O)(""),(0,m.U)(U=>this._filter(U,!0)));const it=localStorage.getItem("financialYear");this.dateValidation(it),this.supplierControl.valueChanges.subscribe(U=>{U.length>=3?this.getSuuplier(U):(this.suppliers=[],this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,f.O)(""),(0,m.U)(nt=>this._filter(nt,!0))))})}dateValidation(n){const e=this.debitNoteForm.get("date"),{formattedMinDate:d,formattedMaxDate:c}=this.commonService.setMinMaxDatesForDateTime(e,n);this.minDate=d,this.maxDate=c}getprefix(){this.transactionService.getDebitNotePrefix().subscribe(n=>{console.log(n),n.success?(this.prefixNo=n?.data,this.debitNoteForm.get("debit_note_no").patchValue(this.prefixNo[0]?.id)):this.toastr.error(n.msg)},n=>{this.toastr.error(n.error.msg)})}calculateTax(){this.totals=this.taxs?(this.amounts+(this.amounts-this.amounts*(100/(100+this.taxs)))).toFixed(2):this.amounts.toFixed(2)}getSuuplier(n){this.purchaseService.getSupplier(n).pipe((0,P.b)(2e3)).subscribe(e=>{this.suppliers=e,this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,f.O)(""),(0,m.U)(d=>this._filter(this.supplierControl?.value,!0)))})}getPurchaseBill(){this.purchaseService.getPurchaseBill().subscribe(n=>{this.purchaseList=n})}getFilterBill(n){this.filterPurchaseBill=this.purchaseList.filter(e=>!(!e||!e?.supplier_bill_no)&&e?.supplier_bill_no.toLowerCase().includes(n)),console.log(this.filterPurchaseBill)}_filter(n,e){const d="string"==typeof n?n.toLowerCase():n.toString().toLowerCase(),c=this.suppliers.filter(e?C=>C?.company_name.toLowerCase().includes(d):C=>!C?.company_name.toLowerCase().includes(d));return!e&&0===c.length&&c.push({company_name:"No data found"}),c}oncheck(n){console.log(n),this.debitNoteForm.patchValue({party:n})}oncheck2(n){console.log(n),this.debitNoteForm.patchValue({purchase_bill:n.id})}get supplier(){return this.debitNoteForm.get("party")}submit(){if(this.debitNoteForm.valid){this.loaders=!0;const n=new FormData;n.append("party",this.debitNoteForm.get("party")?.value),n.append("purchase_bill",this.debitNoteForm.get("purchase_bill")?.value),n.append("date",this.debitNoteForm.get("date")?.value),n.append("debit_note_no",this.debitNoteForm.get("debit_note_no")?.value),n.append("reason",this.debitNoteForm.get("reason")?.value),n.append("amount",this.debitNoteForm.get("amount")?.value),n.append("note",this.debitNoteForm.get("note")?.value),n.append("tax",this.debitNoteForm.get("tax")?.value),n.append("total",this.debitNoteForm.get("total")?.value),this.transactionService.addDebitNote(n).subscribe(e=>{this.loaders=!1,this.addRes=e,this.addRes.success?(this.toastr.success(this.addRes.msg),this.debitNoteForm.reset(),this.router.navigate(["//transaction/debitnoteList"])):this.loaders=!1},e=>{this.loaders=!1})}else this.debitNoteForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get debit_note_no(){return this.debitNoteForm.get("debit_note_no")}get date(){return this.debitNoteForm.get("date")}get purchase_bill(){return this.debitNoteForm.get("purchase_bill")}get reason(){return this.debitNoteForm.get("reason")}get amount(){return this.debitNoteForm.get("amount")}get tax(){return this.debitNoteForm.get("tax")}get note(){return this.debitNoteForm.get("note")}get total(){return this.debitNoteForm.get("total")}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(s.qu),t.Y36(i.p),t.Y36(r.x),t.Y36(a._W),t.Y36(_.F0),t.Y36(u.R))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-add-debit-note"]],decls:85,vars:52,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-md-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Company","aria-label","Party","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12"],["type","datetime-local","formControlName","date","id","date",3,"ngClass"],["formControlName","debit_note_no"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","placeholder","Search purchase Bill","aria-label","Search purchase Bills","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],["type","text","formControlName","reason","placeholder","Enter Reason","id","reason",3,"ngClass"],["type","number","formControlName","amount","placeholder","Enter Amount","id","amount",3,"ngModel","ngClass","ngModelChange","input"],["type","number","formControlName","tax","placeholder","Enter Tax","id","tax",3,"ngModel","ngClass","ngModelChange","input"],["type","number","formControlName","total","placeholder","Enter Total","id","total",3,"ngModel","ngClass","ngModelChange","input"],["formControlName","note","placeholder","Enter Note",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/debitnoteList",1,"btn","btn-cancel","text-white"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value"],["routerLink","//contacts/addSupplier",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],["routerLink","//purchase/add-goodsReceivedNote",2,"color","#FF9F43"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,e){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Add Debit Note"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Debit Note "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Supplier/Company Name*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,Z,2,1,"ng-container",11),t.ALo(19,"async"),t.YNc(20,O,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,F,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",14)(24,"div",7)(25,"label"),t._uU(26,"Debit Note Date*"),t.qZA(),t._UZ(27,"input",15),t.YNc(28,I,2,0,"span",13),t.qZA()(),t.TgZ(29,"div",14)(30,"div",7)(31,"label"),t._uU(32,"Debit Note Series"),t.qZA(),t.TgZ(33,"select",16)(34,"option",17),t._uU(35,"Select Debit Note Series"),t.qZA(),t.YNc(36,$,2,2,"option",18),t.qZA(),t.YNc(37,w,2,0,"span",13),t.qZA()(),t.TgZ(38,"div",14)(39,"div",7)(40,"label"),t._uU(41,"Purchase Bill*"),t.qZA(),t.TgZ(42,"mat-form-field",8)(43,"input",19),t.NdJ("input",function(c){return e.getFilterBill(c.target.value)}),t.qZA(),t.TgZ(44,"mat-autocomplete",null,20),t.YNc(46,B,2,1,"ng-container",11),t.YNc(47,E,3,1,"mat-option",21),t.YNc(48,q,2,0,"mat-option",22),t.qZA()(),t.YNc(49,Q,2,0,"span",13),t.qZA()(),t.TgZ(50,"div",14)(51,"div",7)(52,"label"),t._uU(53,"Reason"),t.qZA(),t._UZ(54,"input",23),t.YNc(55,Y,2,0,"span",13),t.qZA()(),t.TgZ(56,"div",14)(57,"div",7)(58,"label"),t._uU(59,"Amount"),t.qZA(),t.TgZ(60,"input",24),t.NdJ("ngModelChange",function(c){return e.amounts=c})("input",function(){return e.calculateTax()}),t.qZA(),t.YNc(61,R,2,0,"span",13),t.qZA()(),t.TgZ(62,"div",14)(63,"div",7)(64,"label"),t._uU(65,"Tax %"),t.qZA(),t.TgZ(66,"input",25),t.NdJ("ngModelChange",function(c){return e.taxs=c})("input",function(){return e.calculateTax()}),t.qZA(),t.YNc(67,L,2,0,"span",13),t.qZA()(),t.TgZ(68,"div",14)(69,"div",7)(70,"label"),t._uU(71,"Total"),t.qZA(),t.TgZ(72,"input",26),t.NdJ("ngModelChange",function(c){return e.totals=c})("input",function(){return e.calculateTax()}),t.qZA(),t.YNc(73,K,2,0,"span",13),t.qZA()(),t.TgZ(74,"div",14)(75,"div",7)(76,"label"),t._uU(77,"Note"),t.qZA(),t._UZ(78,"textarea",27),t.YNc(79,G,2,0,"span",13),t.qZA()(),t.TgZ(80,"div",28),t.YNc(81,V,2,0,"button",29),t.YNc(82,z,3,0,"button",30),t.TgZ(83,"a",31),t._uU(84,"Cancel"),t.qZA()()()()()()),2&n){const d=t.MAs(17),c=t.MAs(45);t.xp6(8),t.Q6J("formGroup",e.debitNoteForm),t.xp6(7),t.Q6J("formControl",e.supplierControl)("matAutocomplete",d)("ngClass",t.VKq(38,v,e.f.party.touched&&e.f.party.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,34,e.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,36,e.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",e.supplier&&e.supplier.invalid&&e.supplier.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(40,v,e.f.date.touched&&e.f.date.invalid)),t.uIk("min",e.minDate)("max",e.maxDate),t.xp6(1),t.Q6J("ngIf",e.date&&e.date.invalid&&e.date.touched),t.xp6(8),t.Q6J("ngForOf",e.prefixNo),t.xp6(1),t.Q6J("ngIf",e.debit_note_no&&e.debit_note_no.invalid&&e.debit_note_no.touched),t.xp6(6),t.Q6J("formControl",e.billControl)("matAutocomplete",c),t.xp6(3),t.Q6J("ngForOf",e.filterPurchaseBill),t.xp6(1),t.Q6J("ngIf",0===(null==e.filterPurchaseBill?null:e.filterPurchaseBill.length)),t.xp6(1),t.Q6J("ngIf",(null==e.billControl||null==e.billControl.value?null:e.billControl.value.length)<1),t.xp6(1),t.Q6J("ngIf",e.purchase_bill&&e.purchase_bill.invalid&&e.purchase_bill.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(42,v,e.f.reason.touched&&e.f.reason.invalid)),t.xp6(1),t.Q6J("ngIf",e.reason&&e.reason.invalid&&e.reason.touched),t.xp6(5),t.Q6J("ngModel",e.amounts)("ngClass",t.VKq(44,v,e.f.amount.touched&&e.f.amount.invalid)),t.xp6(1),t.Q6J("ngIf",e.amount&&e.amount.invalid&&e.amount.touched),t.xp6(5),t.Q6J("ngModel",e.taxs)("ngClass",t.VKq(46,v,e.f.tax.touched&&e.f.tax.invalid)),t.xp6(1),t.Q6J("ngIf",e.tax&&e.tax.invalid&&e.tax.touched),t.xp6(5),t.Q6J("ngModel",e.totals)("ngClass",t.VKq(48,v,e.f.total.touched&&e.f.total.invalid)),t.xp6(1),t.Q6J("ngIf",e.total&&e.total.invalid&&e.total.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(50,v,e.f.note.touched&&e.f.note.invalid)),t.xp6(1),t.Q6J("ngIf",e.tax&&e.tax.invalid&&e.tax.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}},dependencies:[g.mk,g.sg,g.O5,_.yS,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.oH,s.sg,s.u,h.XC,h.ZL,A.ey,b.KE,x.Nt,g.Ov],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})(),canActivate:[l(30597).l],data:{allowedRoles:["add_debitnote"]}}];let H=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(k),_.Bz]}),o})();var X=l(8468);let tt=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,H,X.I,h.Bb,b.lN,x.c]}),o})()},30597:(T,N,l)=>{l.d(N,{l:()=>P});var g=l(94650),_=l(4392),s=l(97185),f=l(42917),m=l(80927);let P=(()=>{class t{constructor(r,a,u,h,A){this.router=r,this.Arout=a,this.toastr=u,this.profileService=h,this.coreService=A}canActivate(r,a){const u=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(h=>{this.userDetails=h,this.permissions=this.userDetails?.permission}),u){const h=r.data.allowedRoles;console.log(h,"allowedRoles");const A=u.some(b=>h.includes(b.codename));if(console.log(A),this.coreService.getProfile().subscribe(b=>{this.userDetails=b,this.profileService.setUserDetails(this.userDetails);const x=b?.permission,M=this.profileService.getUserDetails();(!M||M.length!==x.length)&&(this.profileService.setUserPermission(x),window.location.reload())}),A)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(r){return new(r||t)(g.LFG(_.F0),g.LFG(_.gz),g.LFG(s._W),g.LFG(f.J),g.LFG(m.p))},t.\u0275prov=g.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);