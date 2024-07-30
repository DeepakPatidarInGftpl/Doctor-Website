"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[182],{25062:(T,b,o)=>{o.d(b,{y:()=>f});var g=o(92340),_=o(94650),l=o(80529);let f=(()=>{class c{constructor(t){this.http=t,this.apiUrl=`${g.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(t){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}SupplierIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,e)}addSupplier(t){return this.http.post(this.apiUrl+"/pv-api/supplier/",t)}updateSupplier(t,e){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,t)}deleteSupplier(t){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(t){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}VendorIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,e)}addVendor(t){return this.http.post(this.apiUrl+"/pv-api/vendor/",t)}updateVendor(t,e){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,t)}deleteVendor(t){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}PaymentTermsIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,e)}addPaymentTerms(t){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",t)}updatePaymentTerms(t,e){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,t)}deletePaymentTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(t){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}TransportIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,e)}addTransport(t){return this.http.post(this.apiUrl+"/pv-api/transport/",t)}updateTransport(t,e){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,t)}deleteTransport(t){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(t){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}EmployeeIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,e)}addEmployee(t){return this.http.post(this.apiUrl+"/pv-api/employee/",t)}updateEmployee(t,e){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,t)}deleteEmployee(t){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(t){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}CustomerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,e)}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/customer/",t)}updateCustomer(t,e){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,t)}deleteCustomer(t){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(t){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}UserIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${t}`,e)}addUser(t){return this.http.post(this.apiUrl+"/pv-api/user/",t)}updateUser(t,e){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${e}`,t)}deleteUser(t){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(t){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${t}`)}addPermissionGroup(t){return this.http.post(this.apiUrl+"/pv-api/group/",t)}updatePermissionGroup(t,e){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`,t)}deletePermissionGroup(t){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${t}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(t){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}DealerIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`,e)}addDealer(t){return this.http.post(this.apiUrl+"/pv-api/dealer/",t)}updateDealer(t,e){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,t)}deleteDealer(t){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+t)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}TermsIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${t}`,e)}addTerms(t){return this.http.post(this.apiUrl+"/pv-api/terms/",t)}updateTerms(t,e){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,t)}deleteTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(t){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}DepartmentIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${t}`,e)}addDepartment(t){return this.http.post(this.apiUrl+"/pv-api/department/",t)}updateDepartment(t,e){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${e}`,t)}deleteDepartment(t){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}}return c.\u0275fac=function(t){return new(t||c)(_.LFG(l.eN))},c.\u0275prov=_.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},53506:(T,b,o)=>{o.d(b,{x:()=>f});var g=o(92340),_=o(94650),l=o(80529);let f=(()=>{class c{constructor(t){this.http=t,this.apiUrl=`${g.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(t){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+t)}getPurchaseFY(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/purchase_order/";const p=[];if(t&&p.push(`financial_year=${t}`),e&&e.length>0){const s=JSON.stringify(e);console.log(s),console.log(s?.length),p.push(`branch=${s}`)}return p.length>0&&(r+="?"+p.join("&")),this.http.get(r)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,e)}updatePurchase(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/material_inward/";const p=[];if(t&&p.push(`financial_year=${t}`),e&&e.length>0){const s=JSON.stringify(e);console.log(s),console.log(s?.length),p.push(`branch=${s}`)}return p.length>0&&(r+="?"+p.join("&")),this.http.get(r)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}MaterialIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,e)}updateMaterial(t,e){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBillFY(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/purchase_bill/";const p=[];if(t&&p.push(`financial_year=${t}`),e&&e.length>0){const s=JSON.stringify(e);console.log(s),console.log(s?.length),p.push(`branch=${s}`)}return p.length>0&&(r+="?"+p.join("&")),this.http.get(r)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}PurchaseBillIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,e)}updatePurchaseBill(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getDebitNotes(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/debit_note/";const p=[];if(t&&p.push(`financial_year=${t}`),e&&e.length>0){const s=JSON.stringify(e);console.log(s),console.log(s?.length),p.push(`branch=${s}`)}return p.length>0&&(r+="?"+p.join("&")),this.http.get(r)}addDebitNotes(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}getDebitNotesById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNotesIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,e)}updateDebitNotes(t,e){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,t)}deleteDebitNotes(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getSearchProductById(t){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${t}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(t,e){console.log(e,"branch"),console.log(e.length,"branch");let r=this.apiUrl+"/pv-api/purchase_return/";const p=[];if(t&&p.push(`financial_year=${t}`),e&&e.length>0){const s=JSON.stringify(e);console.log(s),console.log(s?.length),p.push(`branch=${s}`)}return p.length>0&&(r+="?"+p.join("&")),this.http.get(r)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(t){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",t)}getPurchaseReturnById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}PurchaseReturnIsActive(t,e){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`,e)}updatePurchaseReturn(t,e){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,t)}deletePurchaseReturn(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}filterVariant(t,e,r,p){let s=this.apiUrl+"/pv-api/purchase_product_filter/";const m=[];return t&&m.push(`supplier=${t}`),e&&m.push(`category=${e}`),r&&m.push(`subcategory=${r}`),p&&m.push(`search=${p}`),m.length>0&&(s+="?"+m.join("&")),this.http.get(s)}}return c.\u0275fac=function(t){return new(t||c)(_.LFG(l.eN))},c.\u0275prov=_.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},80182:(T,b,o)=>{o.r(b),o.d(b,{UpdateDebitNoteModule:()=>nt});var g=o(36895),_=o(4392),l=o(24006),f=o(68675),c=o(54004),C=o(78372),t=o(94650),e=o(71071),r=o(53506),p=o(97185),s=o(25062),m=o(43443),U=o(47957),P=o(3238),y=o(59549),D=o(44144);function Z(a,u){if(1&a){const n=t.EpF();t.TgZ(0,"mat-option",30),t.NdJ("onSelectionChange",function(){t.CHM(n);const h=t.oxw().$implicit,d=t.oxw();return t.KtG(d.oncheck(h.id))}),t._uU(1),t.qZA()}if(2&a){const n=t.oxw().$implicit;t.Q6J("value",n.company_name),t.xp6(1),t.Oqu(n.company_name)}}function O(a,u){if(1&a&&(t.ynx(0),t.YNc(1,Z,2,2,"mat-option",29),t.BQk()),2&a){const n=u.$implicit;t.xp6(1),t.Q6J("ngIf",1==n.is_active)}}function F(a,u){1&a&&(t.TgZ(0,"mat-option",31)(1,"a",32),t._uU(2,"+ Add Supplier"),t.qZA()()),2&a&&t.Q6J("value","No data found")}function w(a,u){1&a&&(t.TgZ(0,"mat-option",33),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function B(a,u){if(1&a&&(t.ynx(0),t.YNc(1,F,3,1,"mat-option",18),t.YNc(2,w,2,0,"mat-option",19),t.BQk()),2&a){const n=u.ngIf,i=t.oxw();t.xp6(1),t.Q6J("ngIf",0===n.length),t.xp6(1),t.Q6J("ngIf",(null==i.supplierControl.value?null:i.supplierControl.value.length)<3)}}function E(a,u){1&a&&(t.TgZ(0,"span",34),t._uU(1,"Select supplier "),t.qZA())}function J(a,u){1&a&&(t.TgZ(0,"span",34),t._uU(1,"Enter date name "),t.qZA())}function R(a,u){1&a&&(t.TgZ(0,"span",34),t._uU(1,"Enter Debit Note Series"),t.qZA())}function L(a,u){if(1&a){const n=t.EpF();t.TgZ(0,"mat-option",30),t.NdJ("onSelectionChange",function(){t.CHM(n);const h=t.oxw().$implicit,d=t.oxw();return t.KtG(d.oncheck2(h))}),t._uU(1),t.qZA()}if(2&a){const n=t.oxw().$implicit;t.Q6J("value",null==n?null:n.supplier_bill_no),t.xp6(1),t.hij(" ",null==n?null:n.supplier_bill_no," ")}}function Y(a,u){if(1&a&&(t.ynx(0),t.YNc(1,L,2,2,"mat-option",29),t.BQk()),2&a){const n=u.$implicit;t.xp6(1),t.Q6J("ngIf",1==(null==n?null:n.is_active)&&(null==n?null:n.supplier_bill_no))}}function Q(a,u){1&a&&(t.TgZ(0,"mat-option",31)(1,"a",35),t._uU(2,"+ Add purchase Bill"),t.qZA()()),2&a&&t.Q6J("value","No data found")}function q(a,u){1&a&&(t.TgZ(0,"mat-option",33),t._uU(1," Please Enter 1 or more characters "),t.qZA())}function V(a,u){1&a&&(t.TgZ(0,"span",34),t._uU(1,"Select Purchase Bill "),t.qZA())}function G(a,u){1&a&&(t.TgZ(0,"span",34),t._uU(1,"Enter Reason"),t.qZA())}function K(a,u){1&a&&(t.TgZ(0,"span",34),t._uU(1,"Enter Amount"),t.qZA())}function z(a,u){1&a&&(t.TgZ(0,"span",34),t._uU(1,"Enter Tax ex: (1-100)"),t.qZA())}function W(a,u){1&a&&(t.TgZ(0,"span",34),t._uU(1,"Enter total"),t.qZA())}function j(a,u){1&a&&(t.TgZ(0,"span",34),t._uU(1,"Enter Tax"),t.qZA())}function k(a,u){1&a&&(t.TgZ(0,"button",36),t._uU(1,"Submit"),t.qZA())}function H(a,u){1&a&&(t.TgZ(0,"button",37),t._UZ(1,"span",38),t._uU(2,"\xa0 Submit"),t.qZA())}const $=function(a){return{"is-invalid":a}},et=[{path:"",component:(()=>{class a{constructor(n,i,h,d,N,x,S,M){this.fb=n,this.transactionService=i,this.purchaseService=h,this.toastr=d,this.router=N,this.Arout=x,this.contactService=S,this.commonService=M,this.minDate="",this.maxDate="",this.supplierControl=new l.NI,this.billControl=new l.NI,this.suppliers=[],this.purchaseList=[],this.filterPurchaseBill=[],this.dateError=null,this.loaders=!1}get f(){return this.debitNoteForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.supplierControl.setValue("Loading..."),this.billControl.setValue("Loading...");const n=new Date;n.getFullYear(),(n.getMonth()+1).toString().padStart(2,"0"),n.getDate().toString().padStart(2,"0"),n.getHours().toString().padStart(2,"0"),n.getMinutes().toString().padStart(2,"0"),this.debitNoteForm=this.fb.group({party:new l.NI("",[l.kI.required]),date:new l.NI("",[l.kI.required]),debit_note_no:new l.NI(""),purchase_bill:new l.NI("",[l.kI.required]),reason:new l.NI(""),amount:new l.NI(""),tax:new l.NI("",[l.kI.pattern(/^(100|[0-9]{1,2})$/)]),note:new l.NI(""),total:new l.NI("")}),this.transactionService.getDebitNoteById(this.id).subscribe(v=>{this.getRes=v,this.companyName=v.party?.company_name,this.debitNoteForm.patchValue(this.getRes),this.debitNoteForm.get("party")?.patchValue(v.party.id),this.debitNoteForm.get("purchase_bill")?.patchValue(v?.purchase_bill?.id),this.contactService.getSupplierById(v.party.id).subscribe(I=>{this.supplierControl.setValue(I.company_name),this.billControl.setValue(this.getRes?.purchase_bill?.supplier_bill_no);const A=new Date(this.getRes.date).toISOString().slice(0,16);this.debitNoteForm.get("date")?.patchValue(A)})}),this.getPurchaseBill(),this.getprefix(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,f.O)(""),(0,c.U)(v=>this._filter(v,!0)));const M=localStorage.getItem("financialYear");this.dateValidation(M),this.supplierControl.valueChanges.subscribe(v=>{v.length>=3&&v!==this.companyName?this.getSuuplier(v):(this.suppliers=[],this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,f.O)(""),(0,c.U)(A=>this._filter(A,!0))))})}dateValidation(n){const i=this.debitNoteForm.get("date"),{formattedMinDate:h,formattedMaxDate:d}=this.commonService.setMinMaxDatesForDateTime(i,n);this.minDate=h,this.maxDate=d}getprefix(){this.transactionService.getDebitNotePrefix().subscribe(n=>{console.log(n),1==n.success?this.prefixNo=n.data:this.toastr.error(n.msg)},n=>{this.toastr.error(n.error.msg)})}calculateTax(){this.totals=this.taxs?(this.amounts+(this.amounts-this.amounts*(100/(100+this.taxs)))).toFixed(2):this.amounts.toFixed(2)}getSuuplier(n){this.purchaseService.getSupplier(n).pipe((0,C.b)(2e3)).subscribe(i=>{this.suppliers=i,this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,f.O)(""),(0,c.U)(h=>this._filter(this.supplierControl?.value,!0)))})}getPurchaseBill(){this.purchaseService.getPurchaseBill().subscribe(n=>{this.purchaseList=n,this.filterPurchaseBill=n})}getFilterBill(n){this.filterPurchaseBill=this.purchaseList.filter(i=>!(!i||!i?.supplier_bill_no)&&i?.supplier_bill_no.toLowerCase().includes(n)),console.log(this.filterPurchaseBill)}_filter(n,i){const h="string"==typeof n?n.toLowerCase():n.toString().toLowerCase(),d=this.suppliers.filter(i?N=>N?.company_name.toLowerCase().includes(h):N=>!N?.company_name.toLowerCase().includes(h));return!i&&0===d.length&&d.push({company_name:"No data found"}),d}oncheck(n){console.log(n),this.debitNoteForm.patchValue({party:n})}oncheck2(n){console.log(n),this.debitNoteForm.patchValue({purchase_bill:n.id})}get supplier(){return this.debitNoteForm.get("party")}submit(){if(this.debitNoteForm.valid){this.loaders=!0;const n=new FormData;n.append("party",this.debitNoteForm.get("party")?.value),n.append("purchase_bill",this.debitNoteForm.get("purchase_bill")?.value),n.append("date",this.debitNoteForm.get("date")?.value),n.append("debit_note_no",this.debitNoteForm.get("debit_note_no")?.value),n.append("reason",this.debitNoteForm.get("reason")?.value),n.append("amount",this.debitNoteForm.get("amount")?.value),n.append("note",this.debitNoteForm.get("note")?.value),n.append("tax",this.debitNoteForm.get("tax")?.value),n.append("total",this.debitNoteForm.get("total")?.value),this.transactionService.updateDebitNote(n,this.id).subscribe(i=>{this.loaders=!1,this.addRes=i,this.addRes.success?(this.toastr.success(this.addRes.msg),this.debitNoteForm.reset(),this.router.navigate(["//transaction/debitnoteList"])):this.loaders=!1},i=>{this.loaders=!1})}else this.debitNoteForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get debit_note_no(){return this.debitNoteForm.get("debit_note_no")}get date(){return this.debitNoteForm.get("date")}get purchase_bill(){return this.debitNoteForm.get("purchase_bill")}get reason(){return this.debitNoteForm.get("reason")}get amount(){return this.debitNoteForm.get("amount")}get tax(){return this.debitNoteForm.get("tax")}get note(){return this.debitNoteForm.get("note")}get total(){return this.debitNoteForm.get("total")}}return a.\u0275fac=function(n){return new(n||a)(t.Y36(l.qu),t.Y36(e.p),t.Y36(r.x),t.Y36(p._W),t.Y36(_.F0),t.Y36(_.gz),t.Y36(s.y),t.Y36(m.R))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-update-debit-note"]],decls:82,vars:51,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Company","aria-label","Party","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],["type","datetime-local","formControlName","date","id","date",3,"ngClass"],["type","text","formControlName","debit_note_no","id","debit_note_no",3,"ngClass"],["type","text","placeholder","Search purchase Bill","aria-label","Search purchase Bills","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],["type","text","formControlName","reason","id","reason",3,"ngClass"],["type","number","formControlName","amount","id","amount",3,"ngModel","ngClass","ngModelChange","input"],["type","number","formControlName","tax","id","tax",3,"ngModel","ngClass","ngModelChange","input"],["type","number","formControlName","total","id","total",3,"ngModel","ngClass","ngModelChange","input"],["formControlName","note"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/debitnoteList",1,"btn","btn-cancel","text-white"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value"],["routerLink","//contacts/addSupplier",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],["routerLink","//purchase/add-goodsReceivedNote",2,"color","#FF9F43"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(n,i){if(1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Update Debit Note"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Debit Note "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return i.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Company Name*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,O,2,1,"ng-container",11),t.ALo(19,"async"),t.YNc(20,B,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,E,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",6)(24,"div",7)(25,"label"),t._uU(26,"Debit Note Date*"),t.qZA(),t._UZ(27,"input",14),t.YNc(28,J,2,0,"span",13),t.qZA()(),t.TgZ(29,"div",6)(30,"div",7)(31,"label"),t._uU(32,"Debit Note Series"),t.qZA(),t._UZ(33,"input",15),t.YNc(34,R,2,0,"span",13),t.qZA()(),t.TgZ(35,"div",6)(36,"div",7)(37,"label"),t._uU(38,"Purchase Bill*"),t.qZA(),t.TgZ(39,"mat-form-field",8)(40,"input",16),t.NdJ("input",function(d){return i.getFilterBill(d.target.value)}),t.qZA(),t.TgZ(41,"mat-autocomplete",null,17),t.YNc(43,Y,2,1,"ng-container",11),t.YNc(44,Q,3,1,"mat-option",18),t.YNc(45,q,2,0,"mat-option",19),t.qZA()(),t.YNc(46,V,2,0,"span",13),t.qZA()(),t.TgZ(47,"div",6)(48,"div",7)(49,"label"),t._uU(50,"Reason"),t.qZA(),t._UZ(51,"input",20),t.YNc(52,G,2,0,"span",13),t.qZA()(),t.TgZ(53,"div",6)(54,"div",7)(55,"label"),t._uU(56,"Amount"),t.qZA(),t.TgZ(57,"input",21),t.NdJ("ngModelChange",function(d){return i.amounts=d})("input",function(){return i.calculateTax()}),t.qZA(),t.YNc(58,K,2,0,"span",13),t.qZA()(),t.TgZ(59,"div",6)(60,"div",7)(61,"label"),t._uU(62,"Tax %"),t.qZA(),t.TgZ(63,"input",22),t.NdJ("ngModelChange",function(d){return i.taxs=d})("input",function(){return i.calculateTax()}),t.qZA(),t.YNc(64,z,2,0,"span",13),t.qZA()(),t.TgZ(65,"div",6)(66,"div",7)(67,"label"),t._uU(68,"Total"),t.qZA(),t.TgZ(69,"input",23),t.NdJ("ngModelChange",function(d){return i.totals=d})("input",function(){return i.calculateTax()}),t.qZA(),t.YNc(70,W,2,0,"span",13),t.qZA()(),t.TgZ(71,"div",6)(72,"div",7)(73,"label"),t._uU(74,"Note"),t.qZA(),t._UZ(75,"textarea",24),t.YNc(76,j,2,0,"span",13),t.qZA()(),t.TgZ(77,"div",25),t.YNc(78,k,2,0,"button",26),t.YNc(79,H,3,0,"button",27),t.TgZ(80,"a",28),t._uU(81,"Cancel"),t.qZA()()()()()()),2&n){const h=t.MAs(17),d=t.MAs(42);t.xp6(8),t.Q6J("formGroup",i.debitNoteForm),t.xp6(7),t.Q6J("formControl",i.supplierControl)("matAutocomplete",h)("ngClass",t.VKq(37,$,i.f.party.touched&&i.f.party.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,33,i.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,35,i.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",i.supplier&&i.supplier.invalid&&i.supplier.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(39,$,i.f.date.touched&&i.f.date.invalid)),t.uIk("min",i.minDate)("max",i.maxDate),t.xp6(1),t.Q6J("ngIf",i.date&&i.date.invalid&&i.date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(41,$,i.f.debit_note_no.touched&&i.f.debit_note_no.invalid)),t.xp6(1),t.Q6J("ngIf",i.debit_note_no&&i.debit_note_no.invalid&&i.debit_note_no.touched),t.xp6(6),t.Q6J("formControl",i.billControl)("matAutocomplete",d),t.xp6(3),t.Q6J("ngForOf",i.filterPurchaseBill),t.xp6(1),t.Q6J("ngIf",0===(null==i.filterPurchaseBill?null:i.filterPurchaseBill.length)),t.xp6(1),t.Q6J("ngIf",(null==i.billControl||null==i.billControl.value?null:i.billControl.value.length)<1),t.xp6(1),t.Q6J("ngIf",i.purchase_bill&&i.purchase_bill.invalid&&i.purchase_bill.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(43,$,i.f.reason.touched&&i.f.reason.invalid)),t.xp6(1),t.Q6J("ngIf",i.reason&&i.reason.invalid&&i.reason.touched),t.xp6(5),t.Q6J("ngModel",i.amounts)("ngClass",t.VKq(45,$,i.f.amount.touched&&i.f.amount.invalid)),t.xp6(1),t.Q6J("ngIf",i.amount&&i.amount.invalid&&i.amount.touched),t.xp6(5),t.Q6J("ngModel",i.taxs)("ngClass",t.VKq(47,$,i.f.tax.touched&&i.f.tax.invalid)),t.xp6(1),t.Q6J("ngIf",i.tax&&i.tax.invalid&&i.tax.touched),t.xp6(5),t.Q6J("ngModel",i.totals)("ngClass",t.VKq(49,$,i.f.total.touched&&i.f.total.invalid)),t.xp6(1),t.Q6J("ngIf",i.total&&i.total.invalid&&i.total.touched),t.xp6(6),t.Q6J("ngIf",i.tax&&i.tax.invalid&&i.tax.touched),t.xp6(2),t.Q6J("ngIf",!i.loaders),t.xp6(1),t.Q6J("ngIf",i.loaders)}},dependencies:[g.mk,g.sg,g.O5,_.yS,l._Y,l.Fj,l.wV,l.JJ,l.JL,l.oH,l.sg,l.u,U.XC,U.ZL,P.ey,y.KE,D.Nt,g.Ov],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),a})(),canActivate:[o(30597).l],data:{allowedRoles:["change_debitnote"]}}];let it=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[_.Bz.forChild(et),_.Bz]}),a})();var rt=o(8468);let nt=(()=>{class a{}return a.\u0275fac=function(n){return new(n||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[g.ez,it,rt.I,U.Bb,y.lN,D.c]}),a})()},30597:(T,b,o)=>{o.d(b,{l:()=>C});var g=o(94650),_=o(4392),l=o(97185),f=o(42917),c=o(80927);let C=(()=>{class t{constructor(r,p,s,m,U){this.router=r,this.Arout=p,this.toastr=s,this.profileService=m,this.coreService=U}canActivate(r,p){const s=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(m=>{this.userDetails=m,this.permissions=this.userDetails?.permission}),s){const m=r.data.allowedRoles;console.log(m,"allowedRoles");const U=s.some(P=>m.includes(P.codename));if(console.log(U),this.coreService.getProfile().subscribe(P=>{this.userDetails=P,this.profileService.setUserDetails(this.userDetails);const y=P?.permission,D=this.profileService.getUserDetails();(!D||D.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),U)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(r){return new(r||t)(g.LFG(_.F0),g.LFG(_.gz),g.LFG(l._W),g.LFG(f.J),g.LFG(c.p))},t.\u0275prov=g.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);