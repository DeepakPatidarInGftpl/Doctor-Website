"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3468],{3468:(O,b,d)=>{d.r(b),d.d(b,{AddpurchaseBillModule:()=>re});var u=d(36895),m=d(88996),i=d(24006),T=d(68675),x=d(54004),e=d(94650),_=d(53506),w=d(97185),f=d(25062),A=d(47957),v=d(3238),g=d(59549),Z=d(44144);function C(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"mat-option",62),e.NdJ("onSelectionChange",function(){const a=e.CHM(t).$implicit,r=e.oxw();return e.KtG(r.oncheck(a.id))}),e._uU(1),e.qZA()}if(2&n){const t=s.$implicit;e.Q6J("value",t.name),e.xp6(1),e.Oqu(t.name)}}function q(n,s){1&n&&(e.TgZ(0,"mat-option",65)(1,"a",66),e._uU(2,"+ Add Supplier"),e.qZA()()),2&n&&e.Q6J("value","No data found")}function y(n,s){1&n&&(e.TgZ(0,"mat-option",67),e._uU(1,"Please Enter 1 or more characters"),e.qZA())}function M(n,s){if(1&n&&(e.ynx(0),e.YNc(1,q,3,1,"mat-option",63),e.YNc(2,y,2,0,"mat-option",64),e.BQk()),2&n){const t=s.ngIf,l=e.oxw();e.xp6(1),e.Q6J("ngIf",0===t.length),e.xp6(1),e.Q6J("ngIf",(null==l.supplierControl.value?null:l.supplierControl.value.length)<3)}}function F(n,s){1&n&&(e.TgZ(0,"span",68),e._uU(1,"Select supplier "),e.qZA())}function P(n,s){1&n&&(e.TgZ(0,"span",68),e._uU(1,"Select Supplier-bill date "),e.qZA())}function J(n,s){1&n&&(e.TgZ(0,"span",68),e._uU(1,"Enter Supplier-bill no "),e.qZA())}function k(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div",73)(1,"button",74),e.NdJ("click",function(){const a=e.CHM(t).$implicit,r=e.oxw(2);return e.KtG(r.selectAddress(a))}),e._uU(2,"Select"),e.qZA(),e.TgZ(3,"p",75)(4,"span",76),e._uU(5),e.qZA()(),e._UZ(6,"br"),e.TgZ(7,"p",75)(8,"span",77),e._uU(9),e.qZA(),e.TgZ(10,"span",78),e._uU(11),e.qZA(),e.TgZ(12,"span",79),e._uU(13,",\xa0"),e.qZA()(),e.TgZ(14,"p",75)(15,"span",80),e._uU(16),e.qZA(),e.TgZ(17,"span",79),e._uU(18,",\xa0"),e.qZA(),e.TgZ(19,"span",81),e._uU(20),e.qZA()(),e.TgZ(21,"p",82)(22,"span",69),e.O4$(),e.TgZ(23,"svg",83),e._UZ(24,"path",84),e.qZA(),e.kcU(),e.TgZ(25,"a",85),e._uU(26),e.qZA(),e._UZ(27,"input",86),e.qZA()()()}if(2&n){const t=s.$implicit,l=e.oxw(2);e.xp6(5),e.AsE(" ",null==t?null:t.address_line_1,", ",null==t?null:t.address_line_2," "),e.xp6(4),e.Oqu(null==t?null:t.pincode),e.xp6(2),e.Oqu(null==t||null==t.city?null:t.city.city),e.xp6(5),e.Oqu(null==t||null==t.state?null:t.state.state),e.xp6(4),e.Oqu(null==t||null==t.country?null:t.country.country_name),e.xp6(5),e.MGl("href","tel:",null==l.supplierAddress?null:l.supplierAddress.phone,"",e.LSH),e.xp6(1),e.Oqu(null==l.supplierAddress?null:l.supplierAddress.mobile_no),e.xp6(1),e.s9C("value",null==l.supplierAddress?null:l.supplierAddress.mobile_no)}}function L(n,s){if(1&n&&(e.TgZ(0,"div",7)(1,"h5",69),e._UZ(2,"small",70),e.qZA(),e.TgZ(3,"h5",69)(4,"small",70),e._uU(5),e.qZA(),e._UZ(6,"input",71),e.qZA(),e.TgZ(7,"div",5),e.YNc(8,k,28,9,"div",72),e.qZA()()),2&n){const t=e.oxw();e.xp6(5),e.Oqu(null==t.supplierAddress?null:t.supplierAddress.name),e.xp6(1),e.s9C("value",null==t.supplierAddress?null:t.supplierAddress.name),e.xp6(2),e.Q6J("ngForOf",null==t.supplierAddress?null:t.supplierAddress.address)}}function Q(n,s){1&n&&(e.TgZ(0,"div",7)(1,"div",87),e._UZ(2,"span"),e.qZA(),e.TgZ(3,"h5",88)(4,"small",70),e._uU(5,"Billing Address is Not Provided"),e.qZA()(),e.TgZ(6,"div",89)(7,"label",90),e._uU(8,"GSTIN "),e.TgZ(9,"span",91),e._uU(10,"-"),e.qZA()(),e.TgZ(11,"label",90),e._uU(12,"Place of Supply "),e.TgZ(13,"span",91),e._uU(14,"-"),e.qZA()()()())}function E(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"div")(1,"p",75)(2,"span",76),e._uU(3),e.qZA()(),e._UZ(4,"br"),e.TgZ(5,"p",75)(6,"span",77),e._uU(7),e.qZA(),e.TgZ(8,"span",78),e._uU(9),e.qZA(),e.TgZ(10,"span",79),e._uU(11,",\xa0"),e.qZA()(),e.TgZ(12,"p",75)(13,"span",80),e._uU(14),e.qZA(),e.TgZ(15,"span",79),e._uU(16,",\xa0"),e.qZA(),e.TgZ(17,"span",81),e._uU(18),e.qZA()(),e.TgZ(19,"p",82)(20,"span",69),e.O4$(),e.TgZ(21,"svg",83),e._UZ(22,"path",84),e.qZA(),e.kcU(),e.TgZ(23,"a",85),e._uU(24),e.qZA(),e._UZ(25,"input",86),e.qZA()(),e.TgZ(26,"div",94)(27,"a",95),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.openModal())}),e._uU(28,"Change Address"),e.qZA(),e.TgZ(29,"a",96),e._uU(30,"Edit Billing Address "),e.qZA()()()}if(2&n){const t=e.oxw(2);e.xp6(3),e.AsE(" ",null==t.selectedAddress?null:t.selectedAddress.address_line_1,", ",null==t.selectedAddress?null:t.selectedAddress.address_line_2,", "),e.xp6(4),e.hij("",null==t.selectedAddress?null:t.selectedAddress.pincode,", "),e.xp6(2),e.Oqu(null==t.selectedAddress||null==t.selectedAddress.city?null:t.selectedAddress.city.city),e.xp6(5),e.Oqu(null==t.selectedAddress||null==t.selectedAddress.state?null:t.selectedAddress.state.state),e.xp6(4),e.Oqu(null==t.selectedAddress||null==t.selectedAddress.country?null:t.selectedAddress.country.country_name),e.xp6(5),e.MGl("href","tel:",null==t.supplierAddress?null:t.supplierAddress.phone,"",e.LSH),e.xp6(1),e.Oqu(null==t.supplierAddress?null:t.supplierAddress.mobile_no),e.xp6(1),e.s9C("value",null==t.supplierAddress?null:t.supplierAddress.mobile_no),e.xp6(4),e.MGl("routerLink","//contacts/updateSupplier/",null==t.supplierAddress?null:t.supplierAddress.id,"")}}function D(n,s){if(1&n&&(e.TgZ(0,"div",7)(1,"h5",69),e._UZ(2,"small",70),e.qZA(),e.TgZ(3,"h5",69)(4,"small",70),e._uU(5),e.qZA(),e._UZ(6,"input",71),e.qZA(),e.YNc(7,E,31,10,"div",12),e.TgZ(8,"div",89)(9,"label",92)(10,"span",93),e._uU(11,"Place of Supply : "),e.qZA(),e.TgZ(12,"span",91),e._uU(13),e.qZA()(),e.TgZ(14,"label",92)(15,"span",93),e._uU(16,"GSTIN : "),e.qZA(),e.TgZ(17,"span",91),e._uU(18),e.qZA()()()()),2&n){const t=e.oxw();e.xp6(5),e.Oqu(null==t.supplierAddress?null:t.supplierAddress.name),e.xp6(1),e.s9C("value",null==t.supplierAddress?null:t.supplierAddress.name),e.xp6(1),e.Q6J("ngIf",t.selectedAddress),e.xp6(6),e.Oqu(null==t.selectedAddress||null==t.selectedAddress.state?null:t.selectedAddress.state.state),e.xp6(5),e.Oqu(null==t.supplierAddress?null:t.supplierAddress.gstin)}}function Y(n,s){if(1&n&&(e.TgZ(0,"option",65),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.s9C("value",t.id),e.xp6(1),e.hij(" ",t.material_inward_no,"")}}function K(n,s){1&n&&(e.TgZ(0,"span",68),e._uU(1,"Enter Material-inward no "),e.qZA())}function G(n,s){if(1&n&&(e.TgZ(0,"option",65),e._uU(1),e.qZA()),2&n){const t=s.$implicit;e.s9C("value",t.id),e.xp6(1),e.hij("",t.title," ")}}function V(n,s){1&n&&(e.TgZ(0,"span",68),e._uU(1,"Select Due date "),e.qZA())}function R(n,s){1&n&&(e.TgZ(0,"span",68),e._uU(1,"Select Shipping date "),e.qZA())}function $(n,s){if(1&n){const t=e.EpF();e.O4$(),e.TgZ(0,"svg",116),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.addCart())}),e._UZ(1,"path",100)(2,"path",117),e.qZA()}}function z(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"mat-option",118),e.NdJ("onSelectionChange",function(){const a=e.CHM(t).$implicit,r=e.oxw().index,p=e.oxw();return e.KtG(p.oncheckVariant(a,r))})("onSelectionChange",function(){const a=e.CHM(t).$implicit,r=e.oxw().index,p=e.oxw();return e.KtG(p.variantChanged(a,r))}),e._uU(1),e.qZA()}if(2&n){const t=s.$implicit;e.Q6J("value",null==t?null:t.product_title),e.xp6(1),e.Oqu(null==t?null:t.product_title)}}function H(n,s){1&n&&(e.TgZ(0,"mat-option",65)(1,"a",119),e._uU(2,"+ add Product"),e.qZA()()),2&n&&e.Q6J("value","No data found")}function j(n,s){if(1&n&&(e.ynx(0),e.YNc(1,H,3,1,"mat-option",63),e.BQk()),2&n){const t=s.ngIf;e.xp6(1),e.Q6J("ngIf",0===(null==t?null:t.length))}}function W(n,s){1&n&&(e.TgZ(0,"span",120),e._uU(1," Enter Discount ex: 1-100 "),e.qZA())}function X(n,s){if(1&n){const t=e.EpF();e.ynx(0),e.TgZ(1,"tr",97)(2,"td")(3,"div")(4,"div",98),e.O4$(),e.TgZ(5,"svg",99),e.NdJ("click",function(){const a=e.CHM(t).index,r=e.oxw();return e.KtG(r.removeCart(a))}),e._UZ(6,"path",100)(7,"path",101),e.qZA()(),e.YNc(8,$,3,0,"svg",102),e.qZA()(),e.kcU(),e.TgZ(9,"td")(10,"input",103,104),e.NdJ("keyup",function(){const a=e.CHM(t).index,r=e.MAs(11),p=e.oxw();return e.KtG(p.searchProduct(r.value,a))})("blur",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.hideSearch())}),e.qZA()(),e.TgZ(12,"td")(13,"mat-form-field",105),e._UZ(14,"input",106),e.TgZ(15,"mat-autocomplete",null,10),e.YNc(17,z,2,2,"mat-option",107),e.ALo(18,"async"),e.YNc(19,j,2,1,"ng-container",12),e.ALo(20,"async"),e.qZA()()(),e.TgZ(21,"td"),e._UZ(22,"input",108),e.qZA(),e.TgZ(23,"td"),e._UZ(24,"input",109),e.qZA(),e.TgZ(25,"td"),e._UZ(26,"input",110),e.qZA(),e.TgZ(27,"td"),e._UZ(28,"input",111),e.YNc(29,W,2,0,"span",112),e.qZA(),e.TgZ(30,"td"),e._UZ(31,"input",113),e.qZA(),e.TgZ(32,"td",49),e._UZ(33,"input",114),e.qZA(),e.TgZ(34,"td",49),e._UZ(35,"input",115),e.qZA()(),e.BQk()}if(2&n){const t=s.index,l=e.MAs(16),o=e.oxw();e.xp6(1),e.Q6J("formGroupName",t),e.xp6(7),e.Q6J("ngIf",o.isLastCart(t)),e.xp6(2),e.Q6J("value",void 0!==o.barcode[t]?o.barcode[t]:""),e.uIk("data-index",t),e.xp6(4),e.Q6J("formControl",o.variantControl)("matAutocomplete",l),e.xp6(3),e.Q6J("ngForOf",e.lcZ(18,11,o.filteredVariants)),e.xp6(2),e.Q6J("ngIf",e.lcZ(20,13,o.filteredVariants)),e.xp6(10),e.Q6J("ngIf",o.discountt(t)&&o.discountt(t).invalid&&o.discountt(t).touched),e.xp6(6),e.Q6J("value",o.calculateTotalEveryIndex(t).toString())("ngModel",o.calculateTotalEveryIndex(t).toString())}}function ee(n,s){if(1&n){const t=e.EpF();e.TgZ(0,"button",121),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.submit())}),e._uU(1,"Submit"),e.qZA()}}function te(n,s){1&n&&(e.TgZ(0,"button",122),e._UZ(1,"span",123),e._uU(2," Submit"),e.qZA())}const c=function(n){return{"is-invalid":n}};let le=(()=>{class n{constructor(t,l,o,a,r){this.purchaseService=t,this.fb=l,this.router=o,this.toastrService=a,this.contactService=r,this.searchControl=new i.NI,this.searchResults=[],this.supplierControlName="party",this.supplierControl=new i.NI,this.productOption=[],this.suppliers=[],this.variantControlName="barcode",this.variantControl=new i.NI,this.variants=[],this.selectedAddress="",this.loader=!1,this.check=!1,this.srchData=[],this.barcode=[],this.staticValue="Static Value",this.searchs=[],this.productName=[],this.isProduct=!0}get f(){return this.purchaseBillForm.controls}ngOnInit(){this.purchaseBillForm=this.fb.group({party:new i.NI("",[i.kI.required]),supplier_bill_date:new i.NI("",[i.kI.required]),refrence_bill_no:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),supplier_bill_no:new i.NI("",[i.kI.required,i.kI.pattern(/^[0-9]*$/)]),material_inward_no:new i.NI("",[i.kI.required,i.kI.pattern(/^[0-9]*$/)]),payment_term:new i.NI(""),due_date:new i.NI("",[i.kI.required]),reverse_charge:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),shipping_date:new i.NI("",[i.kI.required]),export:new i.NI("",[i.kI.required]),selling_price_online:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),selling_price_offline:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),dealer_price:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),employee_price:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),status:new i.NI(""),purchase_bill:this.fb.array([]),note:new i.NI("")}),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,T.O)(""),(0,x.U)(t=>this._filter(t,!0))),this.filteredVariants=this.variantControl.valueChanges.pipe((0,T.O)(""),(0,x.U)(t=>this._filtr(t,!0))),this.getSuuplier(),this.getVariants(),this.getPurchase(),this.getMaterialInward(),this.getPaymentTerms()}get supplier(){return this.purchaseBillForm.get("party")}get supplier_bill_date(){return this.purchaseBillForm.get("supplier_bill_date")}get supplier_bill_no(){return this.purchaseBillForm.get("supplier_bill_no")}get material_inward_no(){return this.purchaseBillForm.get("material_inward_no")}get due_date(){return this.purchaseBillForm.get("due_date")}get shipping_date(){return this.purchaseBillForm.get("shipping_date")}purchase_bill(){return this.fb.group({barcode:"",qty:"",unit_cost:"",mrp:"",discount:new i.NI("",[i.kI.pattern(/^(100|[0-9]{1,2})$/)]),tax:"",landing_cost:""})}getCart(){return this.purchaseBillForm.get("purchase_bill")}addCart(){this.getCart().push(this.purchase_bill())}removeCart(t){this.getCart().removeAt(t)}getSuuplier(){this.purchaseService.getSupplier().subscribe(t=>{console.log(t),this.suppliers=t})}discountt(t){return this.getCart().controls[t].get("discount")}getVariants(){this.purchaseService.productVariant().subscribe(t=>{console.log(t),this.variants=t})}getPurchase(){this.purchaseService.getPurchase().subscribe(t=>{this.purchaseList=t,console.log(this.purchaseList)})}getMaterialInward(){this.purchaseService.getMaterial().subscribe(t=>{console.log(t),this.materialList=t})}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(t=>{console.log(t),this.paymentList=t})}oncheck(t){console.log(t);const l=t;console.log(l),this.contactService.getSupplierById(l).subscribe(a=>{console.log(a),this.supplierAddress=a,this.selectedAddress=this.supplierAddress.address[0],console.log(this.selectedAddress)}),this.purchaseBillForm.get("purchase_bill").clear(),this.addCart(),this.purchaseBillForm.patchValue({party:l})}openModal(){const t=document.getElementById("addressModal");t&&(t.classList.add("show"),t.style.display="block")}selectAddress(t){this.selectedAddress=t;const l=document.getElementById("addressModal");l&&(l.classList.remove("show"),l.style.display="none")}closeModal(){const t=document.getElementById("addressModal");t&&(t.classList.remove("show"),t.style.display="none")}oncheckVariant(t,l){const o=t.id;console.log(o),this.purchaseBillForm.get("purchase_bill").at(l).patchValue({barcode:o})}submit(){if(console.log(this.purchaseBillForm.value),this.purchaseBillForm.valid){this.loader=!0;let t=new FormData;t.append("party",this.purchaseBillForm.get("party")?.value),t.append("supplier_bill_date",this.purchaseBillForm.get("supplier_bill_date")?.value),t.append("refrence_bill_no",this.purchaseBillForm.get("refrence_bill_no")?.value),t.append("supplier_bill_no",this.purchaseBillForm.get("supplier_bill_no")?.value),t.append("material_inward_no",this.purchaseBillForm.get("material_inward_no")?.value),t.append("payment_term",this.purchaseBillForm.get("payment_term")?.value),t.append("due_date",this.purchaseBillForm.get("due_date")?.value),t.append("reverse_charge",this.purchaseBillForm.get("reverse_charge")?.value),t.append("shipping_date",this.purchaseBillForm.get("shipping_date")?.value),t.append("export",this.purchaseBillForm.get("export")?.value),t.append("selling_price_online",this.purchaseBillForm.get("selling_price_online")?.value),t.append("selling_price_offline",this.purchaseBillForm.get("selling_price_offline")?.value),t.append("dealer_price",this.purchaseBillForm.get("dealer_price")?.value),t.append("employee_price",this.purchaseBillForm.get("employee_price")?.value),t.append("status",this.purchaseBillForm.get("status")?.value),t.append("note",this.purchaseBillForm.get("note")?.value);const l=this.purchaseBillForm.get("purchase_bill"),o=[];l.controls.forEach(a=>{const r=a,p={};Object.keys(r.controls).forEach(h=>{p[h]=r.controls[h].value}),o.push(p)}),t.append("purchase_bill",JSON.stringify(o)),this.purchaseService.addPurchaseBill(t).subscribe(a=>{console.log(a),this.getRes=a,"True"==this.getRes.IsSuccess?(this.loader=!1,this.toastrService.success(this.getRes.msg),this.router.navigate(["//purchase/purchase-bill-list"])):this.loader=!1},a=>{this.loader=!1})}else this.purchaseBillForm.markAllAsTouched()}_filter(t,l){console.log(t);const o="string"==typeof t?t.toLowerCase():t.toString().toLowerCase(),a=this.suppliers.filter(l?r=>r.name.toLowerCase().includes(o):r=>!r.name.toLowerCase().includes(o));return!l&&0===a.length&&(console.log("No results found"),a.push({name:"No data found"})),a}_filtr(t,l){console.log(t);const o="string"==typeof t?t?.toLowerCase():t?.toString().toLowerCase(),a=l?this.variants?.filter(r=>r&&(r.product_title?.toLowerCase().includes(o)||r.sku?.toLowerCase().includes(o)||r.variant_name?.toLowerCase().includes(o)||r.id?.toString().includes(o))):this.variants?.filter(r=>r&&!(r.product_title?.toLowerCase().includes(o)||r.sku?.toLowerCase().includes(o)||r.variant_name?.toLowerCase().includes(o)||r.id?.toString().includes(o)));return!l&&(!a||0===a.length)&&(console.log("No results found"),a.push({product_title:"No data found"})),a||[]}isLastCart(t){return t===this.getCart().controls.length-1}hideSearch(){this.searchs=void 0}onOptionSelected(t){console.log(t),console.log(t.option.value)}displayFn(t){return console.log(t),t?t.product_title:""}variantChanged(t,l){console.log(l),console.log(t?.sku),this.barcode[l]=t.sku,console.log(this.barcode[l]),console.log(this.barcode),this.v_id=t.id,this.purchaseBillForm.get("purchase_bill").at(l).patchValue({barcode:t.id}),this.searchProduct("someQuery","")}searchProduct(t,l){console.log(t),t?this.purchaseService.searchProduct(t).subscribe(o=>{this.searchs=o,this.productOption=o,console.log(this.searchs),this.productName[l]=this.searchs[0].product_title,console.log(this.productName),this.check=!0,this.purchaseBillForm.get("purchase_bill").at(l).patchValue({barcode:this.searchs[0].id})}):this.searchs=[]}open(){this.isProduct=!1}calculateTotalQty(){let t=0;for(let l=0;l<this.getCart().controls.length;l++){const o=this.getCart().controls[l].get("qty");o&&(t+=+o.value)}return t}calculateTotalMrp(){let t=0;for(let l=0;l<this.getCart().controls.length;l++){const o=this.getCart().controls[l].get("mrp");o&&(t+=+o.value)}return t}calculateTotalDiscount(){let t=0;for(let l=0;l<this.getCart().controls.length;l++){const o=this.getCart().controls[l].get("discount");o&&(t+=+o.value)}return t}calculateTotalPurchase(){let t=0;for(let l=0;l<this.getCart().controls.length;l++){const o=this.getCart().controls[l].get("purchase_rate");o&&(t+=+o.value)}return t}calculateTotalTax(){let t=0;for(let l=0;l<this.getCart().controls.length;l++){const o=this.getCart().controls[l].get("tax");o&&(t+=+o.value)}return t}calculateTotalLandingCost(){let t=0;for(let l=0;l<this.getCart().controls.length;l++){const o=this.getCart().controls[l].get("landing_cost");o&&(t+=+o.value)}return t}calculateSubtotal(){let t=0;for(let l=0;l<this.getCart().controls.length;l++){const o=this.getCart().controls[l].get("qty"),a=this.getCart().controls[l].get("mrp");o&&a&&(t+=+a.value*+o.value)}return t}calculateTotal(){let t=0;for(let l=0;l<this.getCart().controls.length;l++){const o=this.getCart().controls[l].get("qty"),a=this.getCart().controls[l].get("mrp"),r=this.getCart().controls[l].get("tax"),p=this.getCart().controls[l].get("discount");if(o&&a&&r&&p){const N=+a.value*+o.value;t+=N+N*+r.value/100-N*+p.value/100}}return t}calculateTotalEveryIndex(t){const l=this.getCart().controls[t],o=+l.get("qty").value,r=+l.get("mrp").value*o;return r+r*(+l.get("tax").value/100)-r*(+l.get("discount").value/100)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(_.x),e.Y36(i.qu),e.Y36(m.F0),e.Y36(w._W),e.Y36(f.y))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-addpurchase-bill"]],decls:220,vars:89,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"row"],[1,"col-lg-3","col-md-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Supplier","aria-label","Party","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-3","col-sm-6","col-12"],["type","date","formControlName","supplier_bill_date",3,"ngClass"],["type","text","formControlName","supplier_bill_no",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12"],["id","addressModal","tabindex","-1","role","dialog","aria-labelledby","addressModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title","fs-5"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["class","form-group",4,"ngIf"],[1,"col-lg-12","col-md-12","col-sm-12","p-0"],["type","text","formControlName","refrence_bill_no",3,"ngClass"],["formControlName","material_inward_no",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","payment_term",3,"ngClass"],["type","date","formControlName","due_date",3,"ngClass"],["type","text","formControlName","reverse_charge",3,"ngClass"],["type","date","formControlName","shipping_date",3,"ngClass"],["type","text","formControlName","selling_price_online",3,"ngClass"],["type","text","formControlName","selling_price_offline",3,"ngClass"],["type","text","formControlName","dealer_price",3,"ngClass"],["type","text","formControlName","employee_price",3,"ngClass"],["formControlName","status",3,"ngClass"],["value","Complete"],["value","Pending"],[1,"d-flex","mt-4"],["type","checkbox","formControlName","export",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],[1,"table-responsive"],[1,"table"],[2,"width","20%"],[1,"text-end"],["formArrayName","purchase_bill"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],[1,"text-start"],[1,"col-lg-6","my-3"],["formControlName","note",1,"form-control",3,"ngClass"],[1,"total-order"],[1,"total"],[1,"col-lg-12"],["class","btn btn-submit me-2",3,"click",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//purchase/purchase-bill-list",1,"btn","btn-cancel"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],[3,"value"],["routerLink","//contacts/addSupplier",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],[1,""],[1,"text-muted"],["type","hidden","name","billingcompanyname","id","billingcompanyname",1,"form-control",3,"value"],["class","col-lg-12 col-sm-12 col-12",4,"ngFor","ngForOf"],[1,"col-lg-12","col-sm-12","col-12"],["type","button",1,"btn","btn-primary","btn-sm",2,"float","right",3,"click"],[1,"d-inline","mb-0"],["id","billing-address-line-1"],["data-address-pincode",""],["data-address-city","22691"],[1,"m--font-boldest"],["data-address-state","1722"],["data-address-country","IR"],[1,"mb-2"],["xmlns","http://www.w3.org/2000/svg","width","11","height","11","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-telephone-fill",2,"height","11px","width","11px","color","#FF9F43"],["fill-rule","evenodd","d","M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"],[3,"href"],["type","hidden","name","billingphone","id","billingphone",1,"form-control",3,"value"],[1,"m-divider"],[2,"font-size","13px"],[1,"form-group","row","mt-3"],[1,"col-lg-12","col-md-12","col-sm-12",2,"font-weight","600"],["id","lblContactGSTIN",1,"font-weight-normal"],[1,"col-lg-12","col-md-12","col-sm-12"],[2,"font-weight","600"],[1,"d-grid"],["type","button",1,"btn-link",3,"click"],[1,"btn-link",3,"routerLink"],[3,"formGroupName"],[1,"me-2"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"color","red",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["style","color:green","xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","class","bi bi-plus-circle","viewBox","0 0 16 16",3,"click",4,"ngIf"],["type","text","placeholder","Search Barcode",1,"input",3,"value","keyup","blur"],["id",""],[1,"input"],["type","text","placeholder","Search Product","aria-label","Produt","matInput","",2,"height","18px",3,"formControl","matAutocomplete"],[3,"value","onSelectionChange",4,"ngFor","ngForOf"],["type","text","formControlName","qty",1,"input"],["type","text","formControlName","unit_cost",1,"input"],["type","text","formControlName","mrp",1,"input"],["type","text","formControlName","discount",1,"input"],["class","text-danger","style","display: block;",4,"ngIf"],["type","text","formControlName","tax",1,"input"],["type","text","formControlName","landing_cost",1,"input"],["type","text",1,"input",3,"value","ngModel"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle",2,"color","green",3,"click"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],[3,"value","onSelectionChange"],["routerLink","//product/addproduct",2,"color","#FF9F43"],[1,"text-danger",2,"display","block"],[1,"btn","btn-submit","me-2",3,"click"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,l){if(1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Purchase Bill Add"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Add/Update Purchase Bill"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"Supplier Name*"),e.qZA(),e.TgZ(14,"mat-form-field",8),e._UZ(15,"input",9),e.TgZ(16,"mat-autocomplete",null,10),e.YNc(18,C,2,2,"mat-option",11),e.ALo(19,"async"),e.YNc(20,M,3,2,"ng-container",12),e.ALo(21,"async"),e.qZA()(),e.YNc(22,F,2,0,"span",13),e.qZA()(),e.TgZ(23,"div",14)(24,"div",7)(25,"label"),e._uU(26,"Supplier Bill Date*"),e.qZA(),e._UZ(27,"input",15),e.YNc(28,P,2,0,"span",13),e.qZA()(),e.TgZ(29,"div",14)(30,"div",7)(31,"label"),e._uU(32,"Supplier Bill No*"),e.qZA(),e._UZ(33,"input",16),e.YNc(34,J,2,0,"span",13),e.qZA()(),e.TgZ(35,"div",14)(36,"div",7)(37,"label"),e._uU(38,"Refrence Bill No"),e.qZA(),e.TgZ(39,"div",17)(40,"div",18)(41,"div",19)(42,"div",20)(43,"div",21)(44,"h1",22),e._uU(45,"Billing Address"),e.qZA(),e.TgZ(46,"button",23),e.NdJ("click",function(){return l.closeModal()}),e.TgZ(47,"span",24),e._uU(48,"\xd7"),e.qZA()()(),e.TgZ(49,"div",25),e.YNc(50,L,9,3,"div",26),e.qZA()()()(),e.TgZ(51,"label",27)(52,"strong"),e._uU(53,"Billing Address"),e.qZA()(),e.YNc(54,Q,15,0,"div",26),e.YNc(55,D,19,5,"div",26),e.qZA(),e._UZ(56,"input",28),e.qZA()(),e.TgZ(57,"div",14)(58,"div",7)(59,"label"),e._uU(60,"Material Inward No*"),e.qZA(),e.TgZ(61,"select",29)(62,"option",30),e._uU(63,"Select Material Inward"),e.qZA(),e.YNc(64,Y,2,2,"option",31),e.qZA(),e.YNc(65,K,2,0,"span",13),e.qZA()(),e.TgZ(66,"div",14)(67,"div",7)(68,"label"),e._uU(69,"Payment Term"),e.qZA(),e.TgZ(70,"select",32)(71,"option",30),e._uU(72,"Select Payment Term"),e.qZA(),e.YNc(73,G,2,2,"option",31),e.qZA()()(),e.TgZ(74,"div",14)(75,"div",7)(76,"label"),e._uU(77,"Due Date*"),e.qZA(),e._UZ(78,"input",33),e.YNc(79,V,2,0,"span",13),e.qZA()(),e.TgZ(80,"div",14)(81,"div",7)(82,"label"),e._uU(83,"Reverse Charge"),e.qZA(),e._UZ(84,"input",34),e.qZA()(),e.TgZ(85,"div",14)(86,"div",7)(87,"label"),e._uU(88,"Shipping Date* "),e.qZA(),e._UZ(89,"input",35),e.YNc(90,R,2,0,"span",13),e.qZA()(),e.TgZ(91,"div",14)(92,"div",7)(93,"label"),e._uU(94,"Selling Price Online"),e.qZA(),e._UZ(95,"input",36),e.qZA()(),e.TgZ(96,"div",14)(97,"div",7)(98,"label"),e._uU(99,"Selling Price Offline"),e.qZA(),e._UZ(100,"input",37),e.qZA()(),e.TgZ(101,"div",14)(102,"div",7)(103,"label"),e._uU(104,"Dealer Price"),e.qZA(),e._UZ(105,"input",38),e.qZA()(),e.TgZ(106,"div",14)(107,"div",7)(108,"label"),e._uU(109,"Employee Price"),e.qZA(),e._UZ(110,"input",39),e.qZA()(),e.TgZ(111,"div",14)(112,"div",7)(113,"label"),e._uU(114,"Status"),e.qZA(),e.TgZ(115,"select",40)(116,"option",30),e._uU(117,"Select Status"),e.qZA(),e.TgZ(118,"option",41),e._uU(119,"Complete"),e.qZA(),e.TgZ(120,"option",42),e._uU(121,"Pending"),e.qZA()()()(),e.TgZ(122,"div",14)(123,"div",7)(124,"div",43),e._UZ(125,"input",44),e.TgZ(126,"label",45),e._uU(127,"Export"),e.qZA()()()()(),e.TgZ(128,"div",5)(129,"div",46)(130,"table",47)(131,"thead")(132,"tr"),e._UZ(133,"th"),e.TgZ(134,"th"),e._uU(135,"Barcode/SKU"),e.qZA(),e.TgZ(136,"th",48),e._uU(137,"Product Name"),e.qZA(),e.TgZ(138,"th"),e._uU(139,"QTY"),e.qZA(),e.TgZ(140,"th"),e._uU(141,"Unit Cost"),e.qZA(),e.TgZ(142,"th"),e._uU(143,"Mrp"),e.qZA(),e.TgZ(144,"th"),e._uU(145,"Discount"),e.qZA(),e.TgZ(146,"th"),e._uU(147,"Tax %"),e.qZA(),e.TgZ(148,"th"),e._uU(149,"Landing Cost"),e.qZA(),e.TgZ(150,"th",49),e._uU(151,"Total Cost"),e.qZA(),e._UZ(152,"th"),e.qZA()(),e.TgZ(153,"tbody"),e.ynx(154,50),e.YNc(155,X,36,15,"ng-container",51),e.BQk(),e.TgZ(156,"tr",52),e._UZ(157,"td")(158,"td"),e.TgZ(159,"td",53)(160,"strong"),e._uU(161,"Total"),e.qZA()(),e.TgZ(162,"td",53),e._uU(163),e.qZA(),e._UZ(164,"td",53)(165,"td")(166,"td"),e.TgZ(167,"td",53),e._uU(168),e.qZA(),e._UZ(169,"td",53),e.TgZ(170,"td",53),e._uU(171),e.qZA()()()()()(),e.TgZ(172,"div",5)(173,"div",54)(174,"div",7)(175,"label"),e._uU(176,"Note"),e.qZA(),e._UZ(177,"textarea",55),e.qZA()(),e.TgZ(178,"div",54)(179,"div",7)(180,"div",56)(181,"ul")(182,"li")(183,"h4"),e._uU(184,"Total Mrp"),e.qZA(),e.TgZ(185,"h5"),e._uU(186),e.ALo(187,"currency"),e.qZA()(),e.TgZ(188,"li")(189,"h4"),e._uU(190,"Sub Total"),e.qZA(),e.TgZ(191,"h5"),e._uU(192),e.ALo(193,"currency"),e.qZA()(),e.TgZ(194,"li")(195,"h4"),e._uU(196,"Total Discount "),e.qZA(),e.TgZ(197,"h5"),e._uU(198),e.qZA()(),e.TgZ(199,"li")(200,"h4"),e._uU(201,"Total Tax"),e.qZA(),e.TgZ(202,"h5"),e._uU(203),e.qZA()(),e.TgZ(204,"li")(205,"h4"),e._uU(206,"Landing Cost"),e.qZA(),e.TgZ(207,"h5"),e._uU(208),e.ALo(209,"currency"),e.qZA()(),e.TgZ(210,"li",57)(211,"h4"),e._uU(212,"Total"),e.qZA(),e.TgZ(213,"h5"),e._uU(214),e.qZA()()()()()()(),e.TgZ(215,"div",58),e.YNc(216,ee,2,0,"button",59),e.YNc(217,te,3,0,"button",60),e.TgZ(218,"a",61),e._uU(219,"Cancel"),e.qZA()()()()()),2&t){const o=e.MAs(17);e.xp6(8),e.Q6J("formGroup",l.purchaseBillForm),e.xp6(7),e.Q6J("formControl",l.supplierControl)("matAutocomplete",o)("ngClass",e.VKq(59,c,l.f.party.touched&&l.f.party.invalid)),e.xp6(3),e.Q6J("ngForOf",e.lcZ(19,46,l.filteredSuppliers)),e.xp6(2),e.Q6J("ngIf",e.lcZ(21,48,l.filteredSuppliers)),e.xp6(2),e.Q6J("ngIf",l.supplier&&l.supplier.invalid&&l.supplier.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(61,c,l.f.supplier_bill_date.touched&&l.f.supplier_bill_date.invalid)),e.xp6(1),e.Q6J("ngIf",l.supplier_bill_date&&l.supplier_bill_date.invalid&&l.supplier_bill_date.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(63,c,l.f.supplier_bill_no.touched&&l.f.supplier_bill_no.invalid)),e.xp6(1),e.Q6J("ngIf",l.supplier_bill_no&&l.supplier_bill_no.invalid&&l.supplier_bill_no.touched),e.xp6(16),e.Q6J("ngIf",l.supplierAddress),e.xp6(4),e.Q6J("ngIf",!l.supplierAddress),e.xp6(1),e.Q6J("ngIf",l.supplierAddress),e.xp6(1),e.Q6J("ngClass",e.VKq(65,c,l.f.refrence_bill_no.touched&&l.f.refrence_bill_no.invalid)),e.xp6(5),e.Q6J("ngClass",e.VKq(67,c,l.f.material_inward_no.touched&&l.f.material_inward_no.invalid)),e.xp6(3),e.Q6J("ngForOf",l.materialList),e.xp6(1),e.Q6J("ngIf",l.material_inward_no&&l.material_inward_no.invalid&&l.material_inward_no.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(69,c,l.f.payment_term.touched&&l.f.payment_term.invalid)),e.xp6(3),e.Q6J("ngForOf",l.paymentList),e.xp6(5),e.Q6J("ngClass",e.VKq(71,c,l.f.due_date.touched&&l.f.due_date.invalid)),e.xp6(1),e.Q6J("ngIf",l.due_date&&l.due_date.invalid&&l.due_date.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(73,c,l.f.reverse_charge.touched&&l.f.reverse_charge.invalid)),e.xp6(5),e.Q6J("ngClass",e.VKq(75,c,l.f.shipping_date.touched&&l.f.shipping_date.invalid)),e.xp6(1),e.Q6J("ngIf",l.shipping_date&&l.shipping_date.invalid&&l.shipping_date.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(77,c,l.f.selling_price_online.touched&&l.f.selling_price_online.invalid)),e.xp6(5),e.Q6J("ngClass",e.VKq(79,c,l.f.selling_price_offline.touched&&l.f.selling_price_offline.invalid)),e.xp6(5),e.Q6J("ngClass",e.VKq(81,c,l.f.dealer_price.touched&&l.f.dealer_price.invalid)),e.xp6(5),e.Q6J("ngClass",e.VKq(83,c,l.f.employee_price.touched&&l.f.employee_price.invalid)),e.xp6(5),e.Q6J("ngClass",e.VKq(85,c,l.f.status.touched&&l.f.status.invalid)),e.xp6(10),e.Q6J("id","checkboxMeasure-")("ngModel",!0),e.xp6(1),e.Q6J("for","checkboxMeasure-"),e.xp6(29),e.Q6J("ngForOf",l.getCart().controls),e.xp6(8),e.Oqu(l.calculateTotalQty()),e.xp6(5),e.Oqu(l.calculateTotalTax()),e.xp6(3),e.hij(" ",l.calculateTotal(),""),e.xp6(6),e.Q6J("ngClass",e.VKq(87,c,l.f.note.touched&&l.f.note.invalid)),e.xp6(9),e.Oqu(e.xi3(187,50,l.calculateTotalMrp(),"INR")),e.xp6(6),e.Oqu(e.xi3(193,53,l.calculateSubtotal(),"INR")),e.xp6(6),e.Oqu("\u20b9"+l.calculateTotalDiscount()+"%"),e.xp6(5),e.Oqu("\u20b9"+l.calculateTotalTax()+"%"),e.xp6(5),e.Oqu(e.xi3(209,56,l.calculateTotalLandingCost(),"INR")),e.xp6(6),e.Oqu(l.calculateTotal()),e.xp6(2),e.Q6J("ngIf",!l.loader),e.xp6(1),e.Q6J("ngIf",l.loader)}},dependencies:[u.mk,u.sg,u.O5,m.yS,i._Y,i.YN,i.Kr,i.Fj,i.Wl,i.EJ,i.JJ,i.JL,i.On,i.oH,i.sg,i.u,i.x0,i.CE,A.XC,A.ZL,v.ey,g.KE,Z.Nt,u.Ov,u.H9],styles:[".mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}"]}),n})();var ne=d(30597);const B=JSON.parse(localStorage.getItem("auth"));let I;B&&B.permission&&B.permission.map(s=>{"master"===s.content_type.app_label&&"purchasebill"===s.content_type.model&&"add_purchasebill"==s.codename&&(I=s.codename,console.log(I))});const oe=[{path:"",component:le,canActivate:[ne.l],data:{allowedRoles:["add_purchasebill"]}}];let ie=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild(oe),m.Bz]}),n})();var se=d(51572);let re=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,ie,se.Cq,i.u5,i.UX,A.Bb,g.lN,Z.c]}),n})()},30597:(O,b,d)=>{d.d(b,{l:()=>e});var u=d(94650),m=d(88996),i=d(97185),T=d(42917),x=d(80927);let e=(()=>{class _{constructor(f,A,v,g,Z){this.router=f,this.Arout=A,this.toastr=v,this.profileService=g,this.coreService=Z}canActivate(f,A){const v=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(g=>{this.userDetails=g,this.permissions=this.userDetails?.permission}),v){const g=f.data.allowedRoles;console.log(g,"allowedRoles");const Z=v.some(C=>g.includes(C.codename));if(this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails);const q=C?.permission,y=this.profileService.getUserDetails();(!y||y.length!==q.length)&&(this.profileService.setUserPermission(q),window.location.reload())}),console.log(Z),Z)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return _.\u0275fac=function(f){return new(f||_)(u.LFG(m.F0),u.LFG(m.gz),u.LFG(i._W),u.LFG(T.J),u.LFG(x.p))},_.\u0275prov=u.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);