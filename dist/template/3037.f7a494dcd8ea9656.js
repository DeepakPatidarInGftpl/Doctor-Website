"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3037],{5062:(y,C,c)=>{c.d(C,{y:()=>U});var v=c(2340),m=c(4650),a=c(529);let U=(()=>{class d{constructor(r){this.http=r,this.apiUrl=`${v.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(r){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}SupplierIsActive(r,l){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,l)}addSupplier(r){return this.http.post(this.apiUrl+"/pv-api/supplier/",r)}updateSupplier(r,l){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${l}`,r)}deleteSupplier(r){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(r){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}VendorIsActive(r,l){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,l)}addVendor(r){return this.http.post(this.apiUrl+"/pv-api/vendor/",r)}updateVendor(r,l){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${l}`,r)}deleteVendor(r){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}PaymentTermsIsActive(r,l){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,l)}addPaymentTerms(r){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",r)}updatePaymentTerms(r,l){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${l}`,r)}deletePaymentTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(r){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}TransportIsActive(r,l){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,l)}addTransport(r){return this.http.post(this.apiUrl+"/pv-api/transport/",r)}updateTransport(r,l){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${l}`,r)}deleteTransport(r){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(r){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}EmployeeIsActive(r,l){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,l)}addEmployee(r){return this.http.post(this.apiUrl+"/pv-api/employee/",r)}updateEmployee(r,l){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${l}`,r)}deleteEmployee(r){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(r){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}CustomerIsActive(r,l){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,l)}addCustomer(r){return this.http.post(this.apiUrl+"/pv-api/customer/",r)}updateCustomer(r,l){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${l}`,r)}deleteCustomer(r){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}}return d.\u0275fac=function(r){return new(r||d)(m.LFG(a.eN))},d.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},3506:(y,C,c)=>{c.d(C,{x:()=>U});var v=c(2340),m=c(4650),a=c(529);let U=(()=>{class d{constructor(r){this.http=r,this.apiUrl=`${v.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(r){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",r)}getPurchaseById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}PurchaseIsActive(r,l){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,l)}updatePurchase(r,l){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${l}`,r)}deletePurchase(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+r)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(r){return this.http.post(this.apiUrl+"/pv-api/material_inward/",r)}getMaterialById(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}MaterialIsActive(r,l){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,l)}updateMaterial(r,l){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${l}`,r)}deleteMaterial(r){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(r){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",r)}getPurchaseBillById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}PurchaseBillIsActive(r,l){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,l)}updatePurchaseBill(r,l){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${l}`,r)}deletePurchaseBill(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(r){return this.http.post(this.apiUrl+"/pv-api/debit_note/",r)}getDebitNotesById(r){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}DebitNotesIsActive(r,l){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,l)}updateDebitNotes(r,l){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${l}`,r)}deleteDebitNotes(r){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}}return d.\u0275fac=function(r){return new(r||d)(m.LFG(a.eN))},d.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},3037:(y,C,c)=>{c.r(C),c.d(C,{UpdatepurchaseBillModule:()=>V});var v=c(6895),m=c(8996),a=c(4006),U=c(8675),d=c(4004),t=c(4650),r=c(3506),l=c(7185),s=c(5062),b=c(7957),B=c(3238),A=c(9549),x=c(4144);function I(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"mat-option",46),t.NdJ("onSelectionChange",function(){const u=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.oncheck(u.id))}),t._uU(1),t.qZA()}if(2&n){const e=h.$implicit;t.Q6J("value",e.name),t.xp6(1),t.Oqu(e.name)}}function $(n,h){1&n&&(t.TgZ(0,"mat-option",48)(1,"a",49),t._uU(2,"+ Add Supplier"),t.qZA()()),2&n&&t.Q6J("value","No data found")}function w(n,h){if(1&n&&(t.ynx(0),t.YNc(1,$,3,1,"mat-option",47),t.BQk()),2&n){const e=h.ngIf;t.xp6(1),t.Q6J("ngIf",0===e.length)}}function N(n,h){if(1&n&&(t.TgZ(0,"option",48),t._uU(1),t.qZA()),2&n){const e=h.$implicit;t.s9C("value",e.id),t.xp6(1),t.Oqu(e.material_inward_no)}}function P(n,h){if(1&n&&(t.TgZ(0,"option",48),t._uU(1),t.qZA()),2&n){const e=h.$implicit;t.s9C("value",e.id),t.xp6(1),t.Oqu(e.title)}}function S(n,h){if(1&n){const e=t.EpF();t.O4$(),t.TgZ(0,"svg",66),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.addCart())}),t._UZ(1,"path",53)(2,"path",67),t.qZA()}}function M(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"mat-option",46),t.NdJ("onSelectionChange",function(){const u=t.CHM(e).$implicit,p=t.oxw().index,_=t.oxw();return t.KtG(_.oncheckVariant(u,p))})("onSelectionChange",function(){const u=t.CHM(e).$implicit,p=t.oxw().index,_=t.oxw();return t.KtG(_.variantChanged(u,p))}),t._uU(1),t.qZA()}if(2&n){const e=h.$implicit;t.Q6J("value",null==e?null:e.product_title),t.xp6(1),t.Oqu(null==e?null:e.product_title)}}function O(n,h){1&n&&(t.TgZ(0,"mat-option",48)(1,"a",68),t._uU(2,"+ add Product"),t.qZA()()),2&n&&t.Q6J("value","No data found")}function F(n,h){if(1&n&&(t.ynx(0),t.YNc(1,O,3,1,"mat-option",47),t.BQk()),2&n){const e=h.ngIf;t.xp6(1),t.Q6J("ngIf",0===(null==e?null:e.length))}}function L(n,h){if(1&n){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr",50)(2,"td")(3,"div")(4,"div",51),t.O4$(),t.TgZ(5,"svg",52),t.NdJ("click",function(){const u=t.CHM(e).index,p=t.oxw();return t.KtG(p.removeCart(u))}),t._UZ(6,"path",53)(7,"path",54),t.qZA()(),t.YNc(8,S,3,0,"svg",55),t.qZA()(),t.kcU(),t.TgZ(9,"td")(10,"input",56,57),t.NdJ("keyup",function(){t.CHM(e);const o=t.MAs(11),u=t.oxw();return t.KtG(u.searchProduct(o.value))})("blur",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.hideSearch())}),t.qZA()(),t.TgZ(12,"td")(13,"mat-form-field",8),t._UZ(14,"input",58),t.TgZ(15,"mat-autocomplete",null,10),t.YNc(17,M,2,2,"mat-option",11),t.ALo(18,"async"),t.YNc(19,F,2,1,"ng-container",12),t.ALo(20,"async"),t.qZA()()(),t.TgZ(21,"td"),t._UZ(22,"input",59),t.qZA(),t.TgZ(23,"td"),t._UZ(24,"input",60),t.qZA(),t.TgZ(25,"td"),t._UZ(26,"input",61),t.qZA(),t.TgZ(27,"td"),t._UZ(28,"input",62),t.qZA(),t.TgZ(29,"td"),t._UZ(30,"input",63),t.qZA(),t.TgZ(31,"td",34),t._UZ(32,"input",64),t.qZA(),t.TgZ(33,"td",34),t._UZ(34,"input",65),t.qZA()(),t.BQk()}if(2&n){const e=h.index,i=t.MAs(16),o=t.oxw();t.xp6(1),t.Q6J("formGroupName",e),t.xp6(7),t.Q6J("ngIf",o.isLastCart(e)),t.xp6(2),t.Q6J("value",void 0!==o.barcode[e]?o.barcode[e]:""),t.uIk("data-index",e),t.xp6(4),t.Q6J("formControl",o.variantControl)("matAutocomplete",i),t.xp6(3),t.Q6J("ngForOf",t.lcZ(18,10,o.filteredVariants)),t.xp6(2),t.Q6J("ngIf",t.lcZ(20,12,o.filteredVariants)),t.xp6(15),t.Q6J("value",o.calculateTotalEveryIndex(e).toString())("ngModel",o.calculateTotalEveryIndex(e).toString())}}function J(n,h){if(1&n){const e=t.EpF();t.TgZ(0,"button",69),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.submit())}),t._uU(1,"Submit"),t.qZA()}}function Q(n,h){1&n&&(t.TgZ(0,"button",70),t._UZ(1,"span",71),t._uU(2," Submit"),t.qZA())}const g=function(n){return{"is-invalid":n}},k=[{path:"",component:(()=>{class n{constructor(e,i,o,u,p,_){this.purchaseService=e,this.fb=i,this.router=o,this.toastrService=u,this.contactService=p,this.Arout=_,this.searchControl=new a.NI,this.searchResults=[],this.supplierControlName="supplier",this.supplierControl=new a.NI,this.productOption=[],this.suppliers=[],this.variantControlName="barcode",this.variantControl=new a.NI,this.variants=[],this.loader=!1,this.check=!1,this.srchData=[],this.barcode=[],this.staticValue="Static Value",this.searchs=[]}get f(){return this.puchaseBillForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.puchaseBillForm=this.fb.group({supplier:new a.NI("",[a.kI.required]),supplier_bill_date:new a.NI("",[a.kI.required]),refrence_bill_no:new a.NI("",[a.kI.pattern(/^[0-9]*$/)]),supplier_bill_no:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),material_inward_no:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),payment_term:new a.NI(""),due_date:new a.NI("",[a.kI.required]),reverse_charge:new a.NI("",[a.kI.pattern(/^[0-9]*$/)]),shipping_date:new a.NI("",[a.kI.required]),export:new a.NI(""),selling_price_online:new a.NI("",[a.kI.pattern(/^[0-9]*$/)]),selling_price_offline:new a.NI("",[a.kI.pattern(/^[0-9]*$/)]),dealer_price:new a.NI("",[a.kI.pattern(/^[0-9]*$/)]),employee_price:new a.NI("",[a.kI.pattern(/^[0-9]*$/)]),status:new a.NI(""),purchase_bill:this.fb.array([]),note:new a.NI("")}),this.purchaseService.getPurchaseBillById(this.id).subscribe(e=>{console.log(e),this.getresbyId=e,this.puchaseBillForm.patchValue(e),this.puchaseBillForm.get("supplier")?.patchValue(e.supplier.id),this.puchaseBillForm.get("material_inward_no")?.patchValue(e.material_inward_no.id),this.puchaseBillForm.setControl("purchase_bill",this.udateCart(e.cart))}),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,U.O)(""),(0,d.U)(e=>this._filter(e,!0))),this.filteredVariants=this.variantControl.valueChanges.pipe((0,U.O)(""),(0,d.U)(e=>this._filtr(e,!0))),this.getSuuplier(),this.getVariants(),this.getPurchase(),this.getMaterialInward(),this.getPaymentTerms()}udateCart(e){let i=new a.Oe([]);return e.forEach((o,u)=>{i.push(this.fb.group({barcode:o.barcode.id,qty:o.qty,unit_cost:o.unit_cost,mrp:o.mrp,discount:o.discount,tax:o.tax,landing_cost:o.landing_cost})),this.barcode[u]=o.barcode.sku}),i}get supplier(){return this.puchaseBillForm.get("supplier")}purchase_bill(){return this.fb.group({barcode:"",qty:"",unit_cost:"",mrp:"",discount:"",tax:"",landing_cost:""})}getCart(){return this.puchaseBillForm.get("purchase_bill")}addCart(){this.getCart().push(this.purchase_bill())}removeCart(e){this.getCart().removeAt(e)}getSuuplier(){this.purchaseService.getSupplier().subscribe(e=>{console.log(e),this.suppliers=e})}getVariants(){this.purchaseService.productVariant().subscribe(e=>{console.log(e),this.variants=e})}getPurchase(){this.purchaseService.getPurchase().subscribe(e=>{this.purchaseList=e,console.log(this.purchaseList)})}getMaterialInward(){this.purchaseService.getMaterial().subscribe(e=>{console.log(e),this.materialList=e})}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(e=>{console.log(e),this.paymentList=e})}oncheck(e){console.log(e);const i=e;console.log(i),this.getresbyId.cart.length>=0&&(this.puchaseBillForm.get("purchase_bill").clear(),this.addCart()),this.puchaseBillForm.patchValue({supplier:i})}oncheckVariant(e,i){const o=e.id;console.log(o),this.puchaseBillForm.get("purchase_bill").at(i).patchValue({barcode:o})}submit(){if(console.log(this.puchaseBillForm.value),this.puchaseBillForm.valid){this.loader=!0;let e=new FormData;e.append("supplier",this.puchaseBillForm.get("supplier")?.value),e.append("supplier_bill_date",this.puchaseBillForm.get("supplier_bill_date")?.value),e.append("refrence_bill_no",this.puchaseBillForm.get("refrence_bill_no")?.value),e.append("supplier_bill_no",this.puchaseBillForm.get("supplier_bill_no")?.value),e.append("material_inward_no",this.puchaseBillForm.get("material_inward_no")?.value),e.append("payment_term",this.puchaseBillForm.get("payment_term")?.value),e.append("due_date",this.puchaseBillForm.get("due_date")?.value),e.append("reverse_charge",this.puchaseBillForm.get("reverse_charge")?.value),e.append("shipping_date",this.puchaseBillForm.get("shipping_date")?.value),e.append("export",this.puchaseBillForm.get("export")?.value),e.append("selling_price_online",this.puchaseBillForm.get("selling_price_online")?.value),e.append("selling_price_offline",this.puchaseBillForm.get("selling_price_offline")?.value),e.append("dealer_price",this.puchaseBillForm.get("dealer_price")?.value),e.append("employee_price",this.puchaseBillForm.get("employee_price")?.value),e.append("status",this.puchaseBillForm.get("status")?.value),e.append("note",this.puchaseBillForm.get("note")?.value);const i=this.puchaseBillForm.get("purchase_bill"),o=[];i.controls.forEach(u=>{const p=u,_={};Object.keys(p.controls).forEach(f=>{_[f]=p.controls[f].value}),o.push(_)}),e.append("purchase_bill",JSON.stringify(o)),this.purchaseService.updatePurchaseBill(e,this.id).subscribe(u=>{console.log(u),this.getRes=u,"True"==this.getRes.IsSuccess&&(this.loader=!1,this.toastrService.success(this.getRes.msg),this.router.navigate(["//purchase/purchase-bill-list"]))})}else this.puchaseBillForm.markAllAsTouched()}_filter(e,i){console.log(e);const o="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),u=this.suppliers.filter(i?p=>p.name.toLowerCase().includes(o):p=>!p.name.toLowerCase().includes(o));return!i&&0===u.length&&(console.log("No results found"),u.push({name:"No data found"})),u}_filtr(e,i){console.log(e);const o="string"==typeof e?e?.toLowerCase():e?.toString().toLowerCase(),u=i?this.variants?.filter(p=>p&&(p.product_title?.toLowerCase().includes(o)||p.sku?.toLowerCase().includes(o)||p.variant_name?.toLowerCase().includes(o)||p.id?.toString().includes(o))):this.variants?.filter(p=>p&&!(p.product_title?.toLowerCase().includes(o)||p.sku?.toLowerCase().includes(o)||p.variant_name?.toLowerCase().includes(o)||p.id?.toString().includes(o)));return!i&&(!u||0===u.length)&&(console.log("No results found"),u.push({product_title:"No data found"})),u||[]}isLastCart(e){return e===this.getCart().controls.length-1}hideSearch(){this.searchs=void 0}onOptionSelected(e){console.log(e),console.log(e.option.value)}displayFn(e){return console.log(e),e?e.product_title:""}variantChanged(e,i){console.log(i),console.log(e?.sku),this.barcode[i]=e.sku,console.log(this.barcode[i]),console.log(this.barcode),this.v_id=e.id,this.puchaseBillForm.get("purchase_bill").at(i).patchValue({barcode:e.id}),this.searchProduct("someQuery")}searchProduct(e){console.log(e),e?this.purchaseService.searchProduct(e).subscribe(i=>{this.searchs=i,this.productOption=i,console.log(this.searchs),this.check=!0}):this.searchs=[]}calculateTotalQty(){let e=0;for(let i=0;i<this.getCart().controls.length;i++){const o=this.getCart().controls[i].get("qty");o&&(e+=+o.value)}return e}calculateTotalMrp(){let e=0;for(let i=0;i<this.getCart().controls.length;i++){const o=this.getCart().controls[i].get("mrp");o&&(e+=+o.value)}return e}calculateTotalDiscount(){let e=0;for(let i=0;i<this.getCart().controls.length;i++){const o=this.getCart().controls[i].get("discount");o&&(e+=+o.value)}return e}calculateTotalPurchase(){let e=0;for(let i=0;i<this.getCart().controls.length;i++){const o=this.getCart().controls[i].get("purchase_rate");o&&(e+=+o.value)}return e}calculateTotalTax(){let e=0;for(let i=0;i<this.getCart().controls.length;i++){const o=this.getCart().controls[i].get("tax");o&&(e+=+o.value)}return e}calculateTotalLandingCost(){let e=0;for(let i=0;i<this.getCart().controls.length;i++){const o=this.getCart().controls[i].get("landing_cost");o&&(e+=+o.value)}return e}calculateSubtotal(){let e=0;for(let i=0;i<this.getCart().controls.length;i++){const o=this.getCart().controls[i].get("qty"),u=this.getCart().controls[i].get("mrp");o&&u&&(e+=+u.value*+o.value)}return e}calculateTotal(){let e=0;for(let i=0;i<this.getCart().controls.length;i++){const o=this.getCart().controls[i].get("qty"),u=this.getCart().controls[i].get("mrp"),p=this.getCart().controls[i].get("tax"),_=this.getCart().controls[i].get("discount");if(o&&u&&p&&_){const T=+u.value*+o.value;e+=T+T*+p.value/100-T*+_.value/100}}return e}calculateTotalEveryIndex(e){const i=this.getCart().controls[e],o=+i.get("qty").value,p=+i.get("mrp").value*o;return p+p*(+i.get("tax").value/100)-p*(+i.get("discount").value/100)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.x),t.Y36(a.qu),t.Y36(m.F0),t.Y36(l._W),t.Y36(s.y),t.Y36(m.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-updatepurchase-bill"]],decls:190,vars:79,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"row"],[1,"col-lg-4","col-md-6","col-12"],[1,"form-group"],[1,"w-100"],["type","text","placeholder","Search supplier","aria-label","Supplier","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[3,"value","onSelectionChange",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"col-lg-4","col-sm-6","col-12"],["type","date","formControlName","supplier_bill_date",3,"ngClass"],["type","text","formControlName","supplier_bill_no",3,"ngClass"],["type","text","formControlName","refrence_bill_no",3,"ngClass"],["formControlName","material_inward_no",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","payment_term",3,"ngClass"],["type","date","formControlName","due_date",3,"ngClass"],["type","text","formControlName","reverse_charge",3,"ngClass"],["type","date","formControlName","shipping_date",3,"ngClass"],["type","date","formControlName","export",3,"ngClass"],["type","text","formControlName","selling_price_online",3,"ngClass"],["type","text","formControlName","selling_price_offline",3,"ngClass"],["type","text","formControlName","dealer_price",3,"ngClass"],["type","text","formControlName","employee_price",3,"ngClass"],["formControlName","status",3,"ngClass"],["value","Complete"],["value","Pending"],[1,"table-responsive"],[1,"table"],[1,"text-end"],["formArrayName","purchase_bill"],[4,"ngFor","ngForOf"],[1,"col-lg-12","my-3"],["formControlName","note",1,"form-control"],[1,"col-lg-12","float-md-right"],[1,"total-order"],[1,"total"],[1,"col-lg-12"],["class","btn btn-submit me-2",3,"click",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//purchase/material-Inward-list",1,"btn","btn-cancel"],[3,"value","onSelectionChange"],[3,"value",4,"ngIf"],[3,"value"],["routerLink","//contacts/addSupplier",2,"color","#FF9F43"],[3,"formGroupName"],[1,"me-2"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"color","red",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["style","color:green","xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","class","bi bi-plus-circle","viewBox","0 0 16 16",3,"click",4,"ngIf"],["type","text","placeholder","Search Barcode",1,"input",3,"value","keyup","blur"],["id",""],["type","text","placeholder","Search Product","aria-label","Produt","matInput","",2,"height","18px",3,"formControl","matAutocomplete"],["type","text","formControlName","qty",1,"input"],["type","text","formControlName","unit_cost",1,"input"],["type","text","formControlName","mrp",1,"input"],["type","text","formControlName","discount",1,"input"],["type","text","formControlName","tax",1,"input"],["type","text","formControlName","landing_cost",1,"input"],["type","text",1,"input",3,"value","ngModel"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle",2,"color","green",3,"click"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],["routerLink","//product/addproduct",2,"color","#FF9F43"],[1,"btn","btn-submit","me-2",3,"click"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Edit Purchase Bill"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Update Purchase Bill"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Supplier Name*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,I,2,2,"mat-option",11),t.ALo(19,"async"),t.YNc(20,w,2,1,"ng-container",12),t.ALo(21,"async"),t.qZA()()()(),t.TgZ(22,"div",13)(23,"div",7)(24,"label"),t._uU(25,"Supplier Bill Date*"),t.qZA(),t._UZ(26,"input",14),t.qZA()(),t.TgZ(27,"div",13)(28,"div",7)(29,"label"),t._uU(30,"Supplier Bill No*"),t.qZA(),t._UZ(31,"input",15),t.qZA()(),t.TgZ(32,"div",13)(33,"div",7)(34,"label"),t._uU(35,"Refrence Bill No"),t.qZA(),t._UZ(36,"input",16),t.qZA()(),t.TgZ(37,"div",13)(38,"div",7)(39,"label"),t._uU(40,"Material Inward No*"),t.qZA(),t.TgZ(41,"select",17)(42,"option",18),t._uU(43,"Select Material Inward"),t.qZA(),t.YNc(44,N,2,2,"option",19),t.qZA()()(),t.TgZ(45,"div",13)(46,"div",7)(47,"label"),t._uU(48,"Payment Term"),t.qZA(),t.TgZ(49,"select",20)(50,"option",18),t._uU(51,"Select Payment Term"),t.qZA(),t.YNc(52,P,2,2,"option",19),t.qZA()()(),t.TgZ(53,"div",13)(54,"div",7)(55,"label"),t._uU(56,"Due Date*"),t.qZA(),t._UZ(57,"input",21),t.qZA()(),t.TgZ(58,"div",13)(59,"div",7)(60,"label"),t._uU(61,"Reverse Charge"),t.qZA(),t._UZ(62,"input",22),t.qZA()(),t.TgZ(63,"div",13)(64,"div",7)(65,"label"),t._uU(66,"Shipping Date* "),t.qZA(),t._UZ(67,"input",23),t.qZA()(),t.TgZ(68,"div",13)(69,"div",7)(70,"label"),t._uU(71,"Export"),t.qZA(),t._UZ(72,"input",24),t.qZA()(),t.TgZ(73,"div",13)(74,"div",7)(75,"label"),t._uU(76,"Selling Price Online"),t.qZA(),t._UZ(77,"input",25),t.qZA()(),t.TgZ(78,"div",13)(79,"div",7)(80,"label"),t._uU(81,"Selling Price Offline"),t.qZA(),t._UZ(82,"input",26),t.qZA()(),t.TgZ(83,"div",13)(84,"div",7)(85,"label"),t._uU(86,"Dealer Price"),t.qZA(),t._UZ(87,"input",27),t.qZA()(),t.TgZ(88,"div",13)(89,"div",7)(90,"label"),t._uU(91,"Employee Price"),t.qZA(),t._UZ(92,"input",28),t.qZA()(),t.TgZ(93,"div",13)(94,"div",7)(95,"label"),t._uU(96,"Status"),t.qZA(),t.TgZ(97,"select",29)(98,"option",18),t._uU(99,"Select Status"),t.qZA(),t.TgZ(100,"option",30),t._uU(101,"Complete"),t.qZA(),t.TgZ(102,"option",31),t._uU(103,"Pending"),t.qZA()()()()(),t.TgZ(104,"div",5)(105,"div",32)(106,"table",33)(107,"thead")(108,"tr"),t._UZ(109,"th"),t.TgZ(110,"th"),t._uU(111,"Barcode/SKU"),t.qZA(),t.TgZ(112,"th"),t._uU(113,"Product Name"),t.qZA(),t.TgZ(114,"th"),t._uU(115,"QTY"),t.qZA(),t.TgZ(116,"th"),t._uU(117,"Unit Cost"),t.qZA(),t.TgZ(118,"th"),t._uU(119,"Mrp"),t.qZA(),t.TgZ(120,"th"),t._uU(121,"Discount"),t.qZA(),t.TgZ(122,"th"),t._uU(123,"Tax %"),t.qZA(),t.TgZ(124,"th"),t._uU(125,"Landing Cost"),t.qZA(),t.TgZ(126,"th",34),t._uU(127,"Total Cost"),t.qZA(),t._UZ(128,"th"),t.qZA()(),t.TgZ(129,"tbody"),t.ynx(130,35),t.YNc(131,L,35,14,"ng-container",36),t.BQk(),t.qZA()()()(),t.TgZ(132,"div",37)(133,"div",7)(134,"label"),t._uU(135,"Note"),t.qZA(),t._UZ(136,"textarea",38),t.qZA()(),t.TgZ(137,"div",5)(138,"div",39)(139,"div",40)(140,"ul")(141,"li")(142,"h4"),t._uU(143,"Total Qty"),t.qZA(),t.TgZ(144,"h5"),t._uU(145),t.qZA()(),t.TgZ(146,"li")(147,"h4"),t._uU(148,"Total Mrp"),t.qZA(),t.TgZ(149,"h5"),t._uU(150),t.ALo(151,"currency"),t.qZA()(),t.TgZ(152,"li")(153,"h4"),t._uU(154,"Sub Total"),t.qZA(),t.TgZ(155,"h5"),t._uU(156),t.ALo(157,"currency"),t.qZA()(),t.TgZ(158,"li")(159,"h4"),t._uU(160,"Total Tax"),t.qZA(),t.TgZ(161,"h5"),t._uU(162),t.qZA()(),t.TgZ(163,"li")(164,"h4"),t._uU(165,"Total Discount "),t.qZA(),t.TgZ(166,"h5"),t._uU(167),t.qZA()(),t.TgZ(168,"li")(169,"h4"),t._uU(170,"Landing Cost"),t.qZA(),t.TgZ(171,"h5"),t._uU(172),t.ALo(173,"currency"),t.qZA()(),t.TgZ(174,"li")(175,"h4"),t._uU(176,"Total Purchase "),t.qZA(),t.TgZ(177,"h5"),t._uU(178),t.ALo(179,"currency"),t.qZA()(),t.TgZ(180,"li",41)(181,"h4"),t._uU(182,"Total"),t.qZA(),t.TgZ(183,"h5"),t._uU(184),t.qZA()()()()()(),t.TgZ(185,"div",42),t.YNc(186,J,2,0,"button",43),t.YNc(187,Q,3,0,"button",44),t.TgZ(188,"a",45),t._uU(189,"Cancel"),t.qZA()()()()()),2&e){const o=t.MAs(17);t.xp6(8),t.Q6J("formGroup",i.puchaseBillForm),t.xp6(7),t.Q6J("formControl",i.supplierControl)("matAutocomplete",o)("ngClass",t.VKq(49,g,i.f.supplier.touched&&i.f.supplier.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,33,i.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,35,i.filteredSuppliers)),t.xp6(6),t.Q6J("ngClass",t.VKq(51,g,i.f.supplier_bill_date.touched&&i.f.supplier_bill_date.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(53,g,i.f.supplier_bill_no.touched&&i.f.supplier_bill_no.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(55,g,i.f.refrence_bill_no.touched&&i.f.refrence_bill_no.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(57,g,i.f.material_inward_no.touched&&i.f.material_inward_no.invalid)),t.xp6(3),t.Q6J("ngForOf",i.materialList),t.xp6(5),t.Q6J("ngClass",t.VKq(59,g,i.f.payment_term.touched&&i.f.payment_term.invalid)),t.xp6(3),t.Q6J("ngForOf",i.paymentList),t.xp6(5),t.Q6J("ngClass",t.VKq(61,g,i.f.due_date.touched&&i.f.due_date.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(63,g,i.f.reverse_charge.touched&&i.f.reverse_charge.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(65,g,i.f.shipping_date.touched&&i.f.shipping_date.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(67,g,i.f.export.touched&&i.f.export.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(69,g,i.f.selling_price_online.touched&&i.f.selling_price_online.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(71,g,i.f.selling_price_offline.touched&&i.f.selling_price_offline.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(73,g,i.f.dealer_price.touched&&i.f.dealer_price.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(75,g,i.f.employee_price.touched&&i.f.employee_price.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(77,g,i.f.status.touched&&i.f.status.invalid)),t.xp6(34),t.Q6J("ngForOf",i.getCart().controls),t.xp6(14),t.Oqu(i.calculateTotalQty()),t.xp6(5),t.Oqu(t.xi3(151,37,i.calculateTotalMrp(),"INR")),t.xp6(6),t.Oqu(t.xi3(157,40,i.calculateSubtotal(),"INR")),t.xp6(6),t.Oqu("\u20b9"+i.calculateTotalTax()+"%"),t.xp6(5),t.Oqu("\u20b9"+i.calculateTotalDiscount()+"%"),t.xp6(5),t.Oqu(t.xi3(173,43,i.calculateTotalLandingCost(),"INR")),t.xp6(6),t.Oqu(t.xi3(179,46,i.calculateTotalPurchase(),"INR")),t.xp6(6),t.Oqu(i.calculateTotal()),t.xp6(2),t.Q6J("ngIf",!i.loader),t.xp6(1),t.Q6J("ngIf",i.loader)}},dependencies:[v.mk,v.sg,v.O5,m.yS,a._Y,a.YN,a.Kr,a.Fj,a.EJ,a.JJ,a.JL,a.On,a.oH,a.sg,a.u,a.x0,a.CE,b.XC,b.ZL,B.ey,A.KE,x.Nt,v.Ov,v.H9],styles:[".mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c114-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}"]}),n})()}];let E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[m.Bz.forChild(k),m.Bz]}),n})(),V=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[v.ez,E,a.u5,a.UX,b.Bb,A.lN,x.c]}),n})()}}]);