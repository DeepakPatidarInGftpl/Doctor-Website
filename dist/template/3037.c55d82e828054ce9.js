"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3037],{33037:(F,b,c)=>{c.r(b),c.d(b,{UpdatepurchaseBillModule:()=>j});var u=c(36895),g=c(88996),i=c(24006),x=c(68675),Z=c(54004),q=c(18505),t=c(94650),w=c(53506),f=c(97185),T=c(25062),h=c(47957),_=c(3238),C=c(59549),v=c(44144);function y(l,s){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",49),t.NdJ("onSelectionChange",function(){const r=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.oncheck(r.id))}),t._uU(1),t.qZA()}if(2&l){const e=s.$implicit;t.Q6J("value",e.name),t.xp6(1),t.Oqu(e.name)}}function U(l,s){1&l&&(t.TgZ(0,"mat-option",52)(1,"a",53),t._uU(2,"+ Add Supplier"),t.qZA()()),2&l&&t.Q6J("value","No data found")}function P(l,s){1&l&&(t.TgZ(0,"mat-option",54),t._uU(1,"Please Enter 3 or more characters"),t.qZA())}function M(l,s){if(1&l&&(t.ynx(0),t.YNc(1,U,3,1,"mat-option",50),t.YNc(2,P,2,0,"mat-option",51),t.BQk()),2&l){const e=s.ngIf,o=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==o.supplierControl.value?null:o.supplierControl.value.length)<3)}}function O(l,s){1&l&&(t.TgZ(0,"span",55),t._uU(1,"Select supplier "),t.qZA())}function J(l,s){if(1&l&&(t.TgZ(0,"option",52),t._uU(1),t.qZA()),2&l){const e=s.$implicit;t.s9C("value",e.id),t.xp6(1),t.Oqu(e.material_inward_no)}}function Q(l,s){if(1&l&&(t.TgZ(0,"option",52),t._uU(1),t.qZA()),2&l){const e=s.$implicit;t.s9C("value",e.id),t.xp6(1),t.Oqu(e.title)}}function L(l,s){if(1&l){const e=t.EpF();t.O4$(),t.TgZ(0,"svg",74),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.addCart())}),t._UZ(1,"path",59)(2,"path",75),t.qZA()}}function k(l,s){if(1&l){const e=t.EpF();t.TgZ(0,"input",76),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.open())}),t.qZA()}if(2&l){const e=t.oxw().index,o=t.oxw();t.Q6J("value",void 0!==o.productName[e]?o.productName[e]:"")}}function D(l,s){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",80),t.NdJ("onSelectionChange",function(){const r=t.CHM(e).$implicit,a=t.oxw(2).index,p=t.oxw();return t.KtG(p.oncheckVariant(r,a))})("onSelectionChange",function(){const r=t.CHM(e).$implicit,a=t.oxw(2).index,p=t.oxw();return t.KtG(p.variantChanged(r,a))}),t._uU(1),t.qZA()}if(2&l){const e=s.$implicit;t.Q6J("value",null==e?null:e.product_title),t.xp6(1),t.Oqu(null==e?null:e.product_title)}}function E(l,s){1&l&&(t.TgZ(0,"mat-option",52)(1,"a",81),t._uU(2,"+ add Product"),t.qZA()()),2&l&&t.Q6J("value","No data found")}function V(l,s){if(1&l&&(t.ynx(0),t.YNc(1,E,3,1,"mat-option",50),t.BQk()),2&l){const e=s.ngIf;t.xp6(1),t.Q6J("ngIf",0===(null==e?null:e.length))}}function K(l,s){if(1&l&&(t.TgZ(0,"mat-form-field",77),t._UZ(1,"input",78),t.TgZ(2,"mat-autocomplete",null,10),t.YNc(4,D,2,2,"mat-option",79),t.ALo(5,"async"),t.YNc(6,V,2,1,"ng-container",12),t.ALo(7,"async"),t.qZA()()),2&l){const e=t.MAs(3),o=t.oxw(2);t.xp6(1),t.Q6J("formControl",o.variantControl)("matAutocomplete",e),t.xp6(3),t.Q6J("ngForOf",t.lcZ(5,4,o.filteredVariants)),t.xp6(2),t.Q6J("ngIf",t.lcZ(7,6,o.filteredVariants))}}function Y(l,s){1&l&&(t.TgZ(0,"span",82),t._uU(1," Enter Discount ex: 1-100 "),t.qZA())}function R(l,s){if(1&l){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr",56)(2,"td")(3,"div")(4,"div",57),t.O4$(),t.TgZ(5,"svg",58),t.NdJ("click",function(){const r=t.CHM(e).index,a=t.oxw();return t.KtG(a.removeCart(r))}),t._UZ(6,"path",59)(7,"path",60),t.qZA()(),t.YNc(8,L,3,0,"svg",61),t.qZA()(),t.kcU(),t.TgZ(9,"td")(10,"input",62,63),t.NdJ("keyup",function(){const r=t.CHM(e).index,a=t.MAs(11),p=t.oxw();return t.KtG(p.searchProduct(a.value,r))})("blur",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.hideSearch())}),t.qZA()(),t.TgZ(12,"td"),t.YNc(13,k,1,1,"input",64),t.YNc(14,K,8,8,"mat-form-field",65),t.qZA(),t.TgZ(15,"td"),t._UZ(16,"input",66),t.qZA(),t.TgZ(17,"td"),t._UZ(18,"input",67),t.qZA(),t.TgZ(19,"td"),t._UZ(20,"input",68),t.qZA(),t.TgZ(21,"td"),t._UZ(22,"input",69),t.YNc(23,Y,2,0,"span",70),t.qZA(),t.TgZ(24,"td"),t._UZ(25,"input",71),t.qZA(),t.TgZ(26,"td",37),t._UZ(27,"input",72),t.qZA(),t.TgZ(28,"td",37),t._UZ(29,"input",73),t.qZA()(),t.BQk()}if(2&l){const e=s.index,o=t.oxw();t.xp6(1),t.Q6J("formGroupName",e),t.xp6(7),t.Q6J("ngIf",o.isLastCart(e)),t.xp6(2),t.Q6J("value",void 0!==o.barcode[e]?o.barcode[e]:""),t.uIk("data-index",e),t.xp6(3),t.Q6J("ngIf",o.isProduct),t.xp6(1),t.Q6J("ngIf",!o.isProduct),t.xp6(9),t.Q6J("ngIf",o.discountt(e)&&o.discountt(e).invalid&&o.discountt(e).touched),t.xp6(6),t.Q6J("value",o.calculateTotalEveryIndex(e).toString())("ngModel",o.calculateTotalEveryIndex(e).toString())}}function G(l,s){if(1&l){const e=t.EpF();t.TgZ(0,"button",83),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.submit())}),t._uU(1,"Submit"),t.qZA()}}function $(l,s){1&l&&(t.TgZ(0,"button",84),t._UZ(1,"span",85),t._uU(2," Submit"),t.qZA())}const d=function(l){return{"is-invalid":l}};let z=(()=>{class l{constructor(e,o,n,r,a,p){this.purchaseService=e,this.fb=o,this.router=n,this.toastrService=r,this.contactService=a,this.Arout=p,this.searchControl=new i.NI,this.searchResults=[],this.supplierControlName="party",this.supplierControl=new i.NI,this.productOption=[],this.suppliers=[],this.variantControlName="barcode",this.variantControl=new i.NI,this.variants=[],this.loader=!1,this.check=!1,this.srchData=[],this.barcode=[],this.staticValue="Static Value",this.searchs=[],this.productName=[],this.isProduct=!0}get f(){return this.puchaseBillForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.puchaseBillForm=this.fb.group({party:new i.NI("",[i.kI.required]),supplier_bill_date:new i.NI("",[i.kI.required]),refrence_bill_no:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),supplier_bill_no:new i.NI("",[i.kI.required,i.kI.pattern(/^[0-9]*$/)]),material_inward_no:new i.NI("",[i.kI.required,i.kI.pattern(/^[0-9]*$/)]),payment_term:new i.NI(""),due_date:new i.NI("",[i.kI.required]),reverse_charge:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),shipping_date:new i.NI("",[i.kI.required]),export:new i.NI(""),selling_price_online:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),selling_price_offline:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),dealer_price:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),employee_price:new i.NI("",[i.kI.pattern(/^[0-9]*$/)]),status:new i.NI(""),purchase_bill:this.fb.array([]),note:new i.NI("")}),this.purchaseService.getPurchaseBillById(this.id).subscribe(e=>{console.log(e),this.getresbyId=e,this.puchaseBillForm.patchValue(e),this.puchaseBillForm.get("party")?.patchValue(e.party.id),this.puchaseBillForm.get("material_inward_no")?.patchValue(e.material_inward_no.id),this.puchaseBillForm.setControl("purchase_bill",this.udateCart(e.cart)),this.displaySupplierName(e.party.id)}),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,x.O)(""),(0,Z.U)(e=>this._filter(e,!0))),this.filteredVariants=this.variantControl.valueChanges.pipe((0,x.O)(""),(0,Z.U)(e=>this._filtr(e,!0))),this.getSuuplier(),this.getVariants(),this.getPurchase(),this.getMaterialInward(),this.getPaymentTerms()}displaySupplierName(e){this.filteredSuppliers.pipe((0,q.b)(o=>console.log("Data emitted:",o)),(0,Z.U)(o=>o.filter(n=>n.id===e))).subscribe(o=>{o.length>0&&this.supplierControl.setValue(o[0].name)})}udateCart(e){let o=new i.Oe([]);return e.forEach((n,r)=>{o.push(this.fb.group({barcode:n.barcode.id,qty:n.qty,unit_cost:n.unit_cost,mrp:n.mrp,discount:n.discount,tax:n.tax,landing_cost:n.landing_cost})),this.barcode[r]=n.barcode.sku,this.productName[r]=n.barcode.product_title}),o}get supplier(){return this.puchaseBillForm.get("party")}discountt(e){return this.getCart().controls[e].get("discount")}purchase_bill(){return this.fb.group({barcode:"",qty:"",unit_cost:"",mrp:"",discount:new i.NI("",[i.kI.pattern(/^(100|[0-9]{1,2})$/)]),tax:"",landing_cost:""})}getCart(){return this.puchaseBillForm.get("purchase_bill")}addCart(){this.getCart().push(this.purchase_bill())}removeCart(e){this.getCart().removeAt(e)}getSuuplier(){this.purchaseService.getSupplier().subscribe(e=>{console.log(e),this.suppliers=e})}getVariants(){this.purchaseService.productVariant().subscribe(e=>{console.log(e),this.variants=e})}getPurchase(){this.purchaseService.getPurchase().subscribe(e=>{this.purchaseList=e,console.log(this.purchaseList)})}getMaterialInward(){this.purchaseService.getMaterial().subscribe(e=>{console.log(e),this.materialList=e})}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(e=>{console.log(e),this.paymentList=e})}oncheck(e){console.log(e);const o=e;console.log(o),this.getresbyId.cart.length>=0&&(this.puchaseBillForm.get("purchase_bill").clear(),this.addCart()),this.puchaseBillForm.patchValue({party:o})}oncheckVariant(e,o){const n=e.id;console.log(n),this.puchaseBillForm.get("purchase_bill").at(o).patchValue({barcode:n})}submit(){if(console.log(this.puchaseBillForm.value),this.puchaseBillForm.valid){this.loader=!0;let e=new FormData;e.append("party",this.puchaseBillForm.get("party")?.value),e.append("supplier_bill_date",this.puchaseBillForm.get("supplier_bill_date")?.value),e.append("refrence_bill_no",this.puchaseBillForm.get("refrence_bill_no")?.value),e.append("supplier_bill_no",this.puchaseBillForm.get("supplier_bill_no")?.value),e.append("material_inward_no",this.puchaseBillForm.get("material_inward_no")?.value),e.append("payment_term",this.puchaseBillForm.get("payment_term")?.value),e.append("due_date",this.puchaseBillForm.get("due_date")?.value),e.append("reverse_charge",this.puchaseBillForm.get("reverse_charge")?.value),e.append("shipping_date",this.puchaseBillForm.get("shipping_date")?.value),e.append("export",this.puchaseBillForm.get("export")?.value),e.append("selling_price_online",this.puchaseBillForm.get("selling_price_online")?.value),e.append("selling_price_offline",this.puchaseBillForm.get("selling_price_offline")?.value),e.append("dealer_price",this.puchaseBillForm.get("dealer_price")?.value),e.append("employee_price",this.puchaseBillForm.get("employee_price")?.value),e.append("status",this.puchaseBillForm.get("status")?.value),e.append("note",this.puchaseBillForm.get("note")?.value);const o=this.puchaseBillForm.get("purchase_bill"),n=[];o.controls.forEach(r=>{const a=r,p={};Object.keys(a.controls).forEach(m=>{p[m]=a.controls[m].value}),n.push(p)}),e.append("purchase_bill",JSON.stringify(n)),this.purchaseService.updatePurchaseBill(e,this.id).subscribe(r=>{console.log(r),this.getRes=r,"True"==this.getRes.IsSuccess&&(this.loader=!1,this.toastrService.success(this.getRes.msg),this.router.navigate(["//purchase/purchase-bill-list"]))})}else this.puchaseBillForm.markAllAsTouched()}_filter(e,o){console.log(e);const n="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),r=this.suppliers.filter(o?a=>a.name.toLowerCase().includes(n):a=>!a.name.toLowerCase().includes(n));return!o&&0===r.length&&(console.log("No results found"),r.push({name:"No data found"})),r}_filtr(e,o){console.log(e);const n="string"==typeof e?e?.toLowerCase():e?.toString().toLowerCase(),r=o?this.variants?.filter(a=>a&&(a.product_title?.toLowerCase().includes(n)||a.sku?.toLowerCase().includes(n)||a.variant_name?.toLowerCase().includes(n)||a.id?.toString().includes(n))):this.variants?.filter(a=>a&&!(a.product_title?.toLowerCase().includes(n)||a.sku?.toLowerCase().includes(n)||a.variant_name?.toLowerCase().includes(n)||a.id?.toString().includes(n)));return!o&&(!r||0===r.length)&&(console.log("No results found"),r.push({product_title:"No data found"})),r||[]}isLastCart(e){return e===this.getCart().controls.length-1}hideSearch(){this.searchs=void 0}onOptionSelected(e){console.log(e),console.log(e.option.value)}displayFn(e){return console.log(e),e?e.product_title:""}variantChanged(e,o){console.log(o),console.log(e?.sku),this.barcode[o]=e.sku,console.log(this.barcode[o]),console.log(this.barcode),this.v_id=e.id,this.puchaseBillForm.get("purchase_bill").at(o).patchValue({barcode:e.id}),this.searchProduct("someQuery","")}searchProduct(e,o){console.log(e),e?this.purchaseService.searchProduct(e).subscribe(n=>{this.searchs=n,console.log(this.searchs),this.productName[o]=this.searchs[0].product_title,console.log(this.productName),this.check=!0,this.puchaseBillForm.get("purchase_bill").at(o).patchValue({barcode:this.searchs[0].id})}):this.searchs=[]}open(){this.isProduct=!1}calculateTotalQty(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("qty");n&&(e+=+n.value)}return e}calculateTotalMrp(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("mrp");n&&(e+=+n.value)}return e}calculateTotalDiscount(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("discount");n&&(e+=+n.value)}return e}calculateTotalPurchase(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("purchase_rate");n&&(e+=+n.value)}return e}calculateTotalTax(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("tax");n&&(e+=+n.value)}return e}calculateTotalLandingCost(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("landing_cost");n&&(e+=+n.value)}return e}calculateSubtotal(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("qty"),r=this.getCart().controls[o].get("mrp");n&&r&&(e+=+r.value*+n.value)}return e}calculateTotal(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("qty"),r=this.getCart().controls[o].get("mrp"),a=this.getCart().controls[o].get("tax"),p=this.getCart().controls[o].get("discount");if(n&&r&&a&&p){const B=+r.value*+n.value;e+=B+B*+a.value/100-B*+p.value/100}}return e}calculateTotalEveryIndex(e){const o=this.getCart().controls[e],n=+o.get("qty").value,a=+o.get("mrp").value*n;return a+a*(+o.get("tax").value/100)-a*(+o.get("discount").value/100)}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(w.x),t.Y36(i.qu),t.Y36(g.F0),t.Y36(f._W),t.Y36(T.y),t.Y36(g.gz))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-updatepurchase-bill"]],decls:192,vars:79,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup"],[1,"row"],[1,"col-lg-4","col-md-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Supplier","aria-label","Supplier","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","readonly"],["auto","matAutocomplete"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-4","col-sm-6","col-12"],["type","date","formControlName","supplier_bill_date","readonly","",3,"ngClass"],["type","text","formControlName","supplier_bill_no","readonly","",3,"ngClass"],["type","text","formControlName","refrence_bill_no","readonly","",3,"ngClass"],["formControlName","material_inward_no","readonly","",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","payment_term","readonly","",3,"ngClass"],["type","date","formControlName","due_date","readonly","",3,"ngClass"],["type","text","formControlName","reverse_charge","readonly","",3,"ngClass"],["type","date","formControlName","shipping_date","readonly","",3,"ngClass"],["type","text","formControlName","selling_price_online","readonly","",3,"ngClass"],["type","text","formControlName","selling_price_offline","readonly","",3,"ngClass"],["type","text","formControlName","dealer_price","readonly","",3,"ngClass"],["type","text","formControlName","employee_price","readonly","",3,"ngClass"],["formControlName","status","readonly","",3,"ngClass"],["value","Complete"],["value","Pending"],[1,"d-flex"],["type","checkbox","formControlName","export","readonly","",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],[1,"table-responsive"],[1,"table"],[1,"text-end"],["formArrayName","purchase_bill"],[4,"ngFor","ngForOf"],[1,"col-lg-12","my-3"],["formControlName","note",1,"form-control",3,"readonly"],[1,"col-lg-12","float-md-right"],[1,"total-order"],[1,"total"],[1,"col-lg-12"],["class","btn btn-submit me-2",3,"click",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//purchase/purchase-bill-list",1,"btn","btn-cancel"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],[3,"value"],["routerLink","//contacts/addSupplier",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],[3,"formGroupName"],[1,"me-2"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"color","red",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["style","color:green","xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","class","bi bi-plus-circle","viewBox","0 0 16 16",3,"click",4,"ngIf"],["type","text","placeholder","Search Barcode",1,"input",3,"value","keyup","blur"],["id",""],["type","text","placeholder","Search Product","class","input",3,"value","click",4,"ngIf"],["class","w-100","class","input",4,"ngIf"],["type","text","formControlName","qty",1,"input"],["type","text","formControlName","unit_cost",1,"input"],["type","text","formControlName","mrp",1,"input"],["type","text","formControlName","discount",1,"input"],["class","text-danger","style","display: block;",4,"ngIf"],["type","text","formControlName","tax",1,"input"],["type","text","formControlName","landing_cost",1,"input"],["type","text",1,"input",3,"value","ngModel"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle",2,"color","green",3,"click"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],["type","text","placeholder","Search Product",1,"input",3,"value","click"],[1,"input"],["type","text","placeholder","Search Product","aria-label","Produt","matInput","",2,"height","18px",3,"formControl","matAutocomplete"],[3,"value","onSelectionChange",4,"ngFor","ngForOf"],[3,"value","onSelectionChange"],["routerLink","//product/addproduct",2,"color","#FF9F43"],[1,"text-danger",2,"display","block"],[1,"btn","btn-submit","me-2",3,"click"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Edit Purchase Bill"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Update Purchase Bill"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Supplier Name*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,y,2,2,"mat-option",11),t.ALo(19,"async"),t.YNc(20,M,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,O,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",14)(24,"div",7)(25,"label"),t._uU(26,"Supplier Bill Date*"),t.qZA(),t._UZ(27,"input",15),t.qZA()(),t.TgZ(28,"div",14)(29,"div",7)(30,"label"),t._uU(31,"Supplier Bill No*"),t.qZA(),t._UZ(32,"input",16),t.qZA()(),t.TgZ(33,"div",14)(34,"div",7)(35,"label"),t._uU(36,"Refrence Bill No"),t.qZA(),t._UZ(37,"input",17),t.qZA()(),t.TgZ(38,"div",14)(39,"div",7)(40,"label"),t._uU(41,"Material Inward No*"),t.qZA(),t.TgZ(42,"select",18)(43,"option",19),t._uU(44,"Select Material Inward"),t.qZA(),t.YNc(45,J,2,2,"option",20),t.qZA()()(),t.TgZ(46,"div",14)(47,"div",7)(48,"label"),t._uU(49,"Payment Term"),t.qZA(),t.TgZ(50,"select",21)(51,"option",19),t._uU(52,"Select Payment Term"),t.qZA(),t.YNc(53,Q,2,2,"option",20),t.qZA()()(),t.TgZ(54,"div",14)(55,"div",7)(56,"label"),t._uU(57,"Due Date*"),t.qZA(),t._UZ(58,"input",22),t.qZA()(),t.TgZ(59,"div",14)(60,"div",7)(61,"label"),t._uU(62,"Reverse Charge"),t.qZA(),t._UZ(63,"input",23),t.qZA()(),t.TgZ(64,"div",14)(65,"div",7)(66,"label"),t._uU(67,"Shipping Date* "),t.qZA(),t._UZ(68,"input",24),t.qZA()(),t.TgZ(69,"div",14)(70,"div",7)(71,"label"),t._uU(72,"Selling Price Online"),t.qZA(),t._UZ(73,"input",25),t.qZA()(),t.TgZ(74,"div",14)(75,"div",7)(76,"label"),t._uU(77,"Selling Price Offline"),t.qZA(),t._UZ(78,"input",26),t.qZA()(),t.TgZ(79,"div",14)(80,"div",7)(81,"label"),t._uU(82,"Dealer Price"),t.qZA(),t._UZ(83,"input",27),t.qZA()(),t.TgZ(84,"div",14)(85,"div",7)(86,"label"),t._uU(87,"Employee Price"),t.qZA(),t._UZ(88,"input",28),t.qZA()(),t.TgZ(89,"div",14)(90,"div",7)(91,"label"),t._uU(92,"Status"),t.qZA(),t.TgZ(93,"select",29)(94,"option",19),t._uU(95,"Select Status"),t.qZA(),t.TgZ(96,"option",30),t._uU(97,"Complete"),t.qZA(),t.TgZ(98,"option",31),t._uU(99,"Pending"),t.qZA()()()(),t.TgZ(100,"div",14)(101,"div",7)(102,"div",32),t._UZ(103,"input",33),t.TgZ(104,"label",34),t._uU(105,"Export"),t.qZA()()()()(),t.TgZ(106,"div",5)(107,"div",35)(108,"table",36)(109,"thead")(110,"tr"),t._UZ(111,"th"),t.TgZ(112,"th"),t._uU(113,"Barcode/SKU"),t.qZA(),t.TgZ(114,"th"),t._uU(115,"Product Name"),t.qZA(),t.TgZ(116,"th"),t._uU(117,"QTY"),t.qZA(),t.TgZ(118,"th"),t._uU(119,"Unit Cost"),t.qZA(),t.TgZ(120,"th"),t._uU(121,"Mrp"),t.qZA(),t.TgZ(122,"th"),t._uU(123,"Discount"),t.qZA(),t.TgZ(124,"th"),t._uU(125,"Tax %"),t.qZA(),t.TgZ(126,"th"),t._uU(127,"Landing Cost"),t.qZA(),t.TgZ(128,"th",37),t._uU(129,"Total Cost"),t.qZA(),t._UZ(130,"th"),t.qZA()(),t.TgZ(131,"tbody"),t.ynx(132,38),t.YNc(133,R,30,9,"ng-container",39),t.BQk(),t.qZA()()()(),t.TgZ(134,"div",40)(135,"div",7)(136,"label"),t._uU(137,"Note"),t.qZA(),t._UZ(138,"textarea",41),t.qZA()(),t.TgZ(139,"div",5)(140,"div",42)(141,"div",43)(142,"ul")(143,"li")(144,"h4"),t._uU(145,"Total Qty"),t.qZA(),t.TgZ(146,"h5"),t._uU(147),t.qZA()(),t.TgZ(148,"li")(149,"h4"),t._uU(150,"Total Mrp"),t.qZA(),t.TgZ(151,"h5"),t._uU(152),t.ALo(153,"currency"),t.qZA()(),t.TgZ(154,"li")(155,"h4"),t._uU(156,"Sub Total"),t.qZA(),t.TgZ(157,"h5"),t._uU(158),t.ALo(159,"currency"),t.qZA()(),t.TgZ(160,"li")(161,"h4"),t._uU(162,"Total Tax"),t.qZA(),t.TgZ(163,"h5"),t._uU(164),t.qZA()(),t.TgZ(165,"li")(166,"h4"),t._uU(167,"Total Discount "),t.qZA(),t.TgZ(168,"h5"),t._uU(169),t.qZA()(),t.TgZ(170,"li")(171,"h4"),t._uU(172,"Landing Cost"),t.qZA(),t.TgZ(173,"h5"),t._uU(174),t.ALo(175,"currency"),t.qZA()(),t.TgZ(176,"li")(177,"h4"),t._uU(178,"Total Purchase "),t.qZA(),t.TgZ(179,"h5"),t._uU(180),t.ALo(181,"currency"),t.qZA()(),t.TgZ(182,"li",44)(183,"h4"),t._uU(184,"Total"),t.qZA(),t.TgZ(185,"h5"),t._uU(186),t.qZA()()()()()(),t.TgZ(187,"div",45),t.YNc(188,G,2,0,"button",46),t.YNc(189,$,3,0,"button",47),t.TgZ(190,"a",48),t._uU(191,"Cancel"),t.qZA()()()()()),2&e){const n=t.MAs(17);t.xp6(8),t.Q6J("formGroup",o.puchaseBillForm),t.xp6(7),t.Q6J("formControl",o.supplierControl)("matAutocomplete",n)("readonly",!0),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,37,o.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,39,o.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",o.supplier&&o.supplier.invalid&&o.supplier.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(53,d,o.f.supplier_bill_date.touched&&o.f.supplier_bill_date.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(55,d,o.f.supplier_bill_no.touched&&o.f.supplier_bill_no.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(57,d,o.f.refrence_bill_no.touched&&o.f.refrence_bill_no.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(59,d,o.f.material_inward_no.touched&&o.f.material_inward_no.invalid)),t.xp6(3),t.Q6J("ngForOf",o.materialList),t.xp6(5),t.Q6J("ngClass",t.VKq(61,d,o.f.payment_term.touched&&o.f.payment_term.invalid)),t.xp6(3),t.Q6J("ngForOf",o.paymentList),t.xp6(5),t.Q6J("ngClass",t.VKq(63,d,o.f.due_date.touched&&o.f.due_date.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(65,d,o.f.reverse_charge.touched&&o.f.reverse_charge.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(67,d,o.f.shipping_date.touched&&o.f.shipping_date.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(69,d,o.f.selling_price_online.touched&&o.f.selling_price_online.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(71,d,o.f.selling_price_offline.touched&&o.f.selling_price_offline.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(73,d,o.f.dealer_price.touched&&o.f.dealer_price.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(75,d,o.f.employee_price.touched&&o.f.employee_price.invalid)),t.xp6(5),t.Q6J("ngClass",t.VKq(77,d,o.f.status.touched&&o.f.status.invalid)),t.xp6(10),t.Q6J("id","checkboxMeasure-")("ngModel",!0),t.xp6(1),t.Q6J("for","checkboxMeasure-"),t.xp6(29),t.Q6J("ngForOf",o.getCart().controls),t.xp6(5),t.Q6J("readonly",!0),t.xp6(9),t.Oqu(o.calculateTotalQty()),t.xp6(5),t.Oqu(t.xi3(153,41,o.calculateTotalMrp(),"INR")),t.xp6(6),t.Oqu(t.xi3(159,44,o.calculateSubtotal(),"INR")),t.xp6(6),t.Oqu("\u20b9"+o.calculateTotalTax()+"%"),t.xp6(5),t.Oqu("\u20b9"+o.calculateTotalDiscount()+"%"),t.xp6(5),t.Oqu(t.xi3(175,47,o.calculateTotalLandingCost(),"INR")),t.xp6(6),t.Oqu(t.xi3(181,50,o.calculateTotalPurchase(),"INR")),t.xp6(6),t.Oqu(o.calculateTotal()),t.xp6(2),t.Q6J("ngIf",!o.loader),t.xp6(1),t.Q6J("ngIf",o.loader)}},dependencies:[u.mk,u.sg,u.O5,g.yS,i._Y,i.YN,i.Kr,i.Fj,i.Wl,i.EJ,i.JJ,i.JL,i.On,i.oH,i.sg,i.u,i.x0,i.CE,h.XC,h.ZL,_.ey,C.KE,v.Nt,u.Ov,u.H9],styles:[".mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c114-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}"]}),l})();var H=c(30597);const N=JSON.parse(localStorage.getItem("auth"));let I;N&&N.permission&&N.permission.map(s=>{"master"===s.content_type.app_label&&"purchasebill"===s.content_type.model&&"change_purchasebill"==s.codename&&(I=s.codename,console.log(I))});const W=[{path:"",component:z,canActivate:[H.l],data:{allowedRoles:["change_purchasebill"]}}];let X=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[g.Bz.forChild(W),g.Bz]}),l})(),j=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[u.ez,X,i.u5,i.UX,h.Bb,C.lN,v.c]}),l})()},30597:(F,b,c)=>{c.d(b,{l:()=>q});var u=c(94650),g=c(88996),i=c(97185),x=c(42917),Z=c(80927);let q=(()=>{class t{constructor(f,T,h,_,C){this.router=f,this.Arout=T,this.toastr=h,this.profileService=_,this.coreService=C}canActivate(f,T){const h=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),h){const _=f.data.allowedRoles;console.log(_,"allowedRoles");const C=h.some(v=>_.includes(v.codename));if(this.coreService.getProfile().subscribe(v=>{this.userDetails=v,this.profileService.setUserDetails(this.userDetails);const y=v?.permission,U=this.profileService.getUserDetails();(!U||U.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),console.log(C),C)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(f){return new(f||t)(u.LFG(g.F0),u.LFG(g.gz),u.LFG(i._W),u.LFG(x.J),u.LFG(Z.p))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);