"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2540],{2540:(F,C,c)=>{c.r(C),c.d(C,{AddpurchaseModule:()=>X});var p=c(6895),Z=c(906),_=c(8996),a=c(4006),d=c(8675),v=c(4004),t=c(4650),A=c(3506),g=c(7185),m=c(7957),T=c(3238),x=c(9549),w=c(4144);function S(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"mat-option",35),t.NdJ("onSelectionChange",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.oncheck(i.id))}),t._uU(1),t.qZA()}if(2&r){const e=l.$implicit;t.Q6J("value",e.name),t.xp6(1),t.Oqu(e.name)}}function O(r,l){1&r&&(t.TgZ(0,"mat-option",38)(1,"a",39),t._uU(2,"+ Add Supplier"),t.qZA()()),2&r&&t.Q6J("value","No data found")}function M(r,l){1&r&&(t.TgZ(0,"mat-option",40),t._uU(1,"Please Enter 3 or more characters"),t.qZA())}function P(r,l){if(1&r&&(t.ynx(0),t.YNc(1,O,3,1,"mat-option",36),t.YNc(2,M,2,0,"mat-option",37),t.BQk()),2&r){const e=l.ngIf,o=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==o.supplierControl.value?null:o.supplierControl.value.length)<3)}}function J(r,l){1&r&&(t.TgZ(0,"span",41),t._uU(1,"Select supplier "),t.qZA())}function k(r,l){1&r&&(t.TgZ(0,"span",41),t._uU(1,"Select Order Date "),t.qZA())}function Q(r,l){1&r&&(t.TgZ(0,"span",41),t._uU(1,"Enter Order no. "),t.qZA())}function L(r,l){1&r&&(t.TgZ(0,"span",41),t._uU(1,"Select Shipping date "),t.qZA())}function E(r,l){1&r&&(t.TgZ(0,"span",41),t._uU(1,"Enter Shipping note "),t.qZA())}function Y(r,l){if(1&r){const e=t.EpF();t.O4$(),t.TgZ(0,"svg",61),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.addCart())}),t._UZ(1,"path",45)(2,"path",62),t.qZA()}}function V(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"mat-option",63),t.NdJ("onSelectionChange",function(){const i=t.CHM(e).$implicit,s=t.oxw().index,u=t.oxw();return t.KtG(u.oncheckVariant(i,s))})("onSelectionChange",function(){const i=t.CHM(e).$implicit,s=t.oxw().index,u=t.oxw();return t.KtG(u.variantChanged(i,s))}),t._uU(1),t.qZA()}if(2&r){const e=l.$implicit;t.Q6J("value",null==e?null:e.product_title),t.xp6(1),t.Oqu(null==e?null:e.product_title)}}function G(r,l){1&r&&(t.TgZ(0,"mat-option",38)(1,"a",64),t._uU(2,"+ add Product"),t.qZA()()),2&r&&t.Q6J("value","No data found")}function R(r,l){if(1&r&&(t.ynx(0),t.YNc(1,G,3,1,"mat-option",36),t.BQk()),2&r){const e=l.ngIf;t.xp6(1),t.Q6J("ngIf",0===(null==e?null:e.length))}}function B(r,l){1&r&&(t.TgZ(0,"span",65),t._uU(1," Enter Discount ex: 1-100 "),t.qZA())}function D(r,l){if(1&r){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr",42)(2,"td")(3,"div")(4,"div",43),t.O4$(),t.TgZ(5,"svg",44),t.NdJ("click",function(){const i=t.CHM(e).index,s=t.oxw();return t.KtG(s.removeCart(i))}),t._UZ(6,"path",45)(7,"path",46),t.qZA()(),t.YNc(8,Y,3,0,"svg",47),t.qZA()(),t.kcU(),t.TgZ(9,"td")(10,"input",48,49),t.NdJ("keyup",function(){const i=t.CHM(e).index,s=t.MAs(11),u=t.oxw();return t.KtG(u.searchProduct(s.value,i))})("blur",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.hideSearch())}),t.qZA()(),t.TgZ(12,"td")(13,"mat-form-field",50),t._UZ(14,"input",51),t.TgZ(15,"mat-autocomplete",null,10),t.YNc(17,V,2,2,"mat-option",52),t.ALo(18,"async"),t.YNc(19,R,2,1,"ng-container",12),t.ALo(20,"async"),t.qZA()()(),t.TgZ(21,"td"),t._UZ(22,"input",53),t.qZA(),t.TgZ(23,"td"),t._UZ(24,"input",54),t.qZA(),t.TgZ(25,"td"),t._UZ(26,"input",55),t.qZA(),t.TgZ(27,"td"),t._UZ(28,"input",56),t.YNc(29,B,2,0,"span",57),t.qZA(),t.TgZ(30,"td"),t._UZ(31,"input",58),t.qZA(),t.TgZ(32,"td",23),t._UZ(33,"input",59),t.qZA(),t.TgZ(34,"td",23),t._UZ(35,"input",60),t.qZA()(),t.BQk()}if(2&r){const e=l.index,o=t.MAs(16),n=t.oxw();t.xp6(1),t.Q6J("formGroupName",e),t.xp6(7),t.Q6J("ngIf",n.isLastCart(e)),t.xp6(2),t.Q6J("value",void 0!==n.barcode[e]?n.barcode[e]:""),t.uIk("data-index",e),t.xp6(4),t.Q6J("formControl",n.variantControl)("matAutocomplete",o),t.xp6(3),t.Q6J("ngForOf",t.lcZ(18,11,n.filteredVariants)),t.xp6(2),t.Q6J("ngIf",t.lcZ(20,13,n.filteredVariants)),t.xp6(10),t.Q6J("ngIf",n.discountt(e)&&n.discountt(e).invalid&&n.discountt(e).touched),t.xp6(6),t.Q6J("value",n.calculateTotalEveryIndex(e).toString())("ngModel",n.calculateTotalEveryIndex(e).toString())}}function K(r,l){1&r&&(t.TgZ(0,"span",41),t._uU(1,"Enter note "),t.qZA())}function $(r,l){if(1&r){const e=t.EpF();t.TgZ(0,"button",66),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.submit())}),t._uU(1,"Submit"),t.qZA()}}function z(r,l){1&r&&(t.TgZ(0,"button",67),t._UZ(1,"span",68),t._uU(2," Submit"),t.qZA())}const f=function(r){return{"is-invalid":r}};let U=(()=>{class r{constructor(e,o,n,i){this.purchaseService=e,this.fb=o,this.router=n,this.toastrService=i,this.searchControl=new a.NI,this.searchResults=[],this.supplierControlName="supplier",this.supplierControl=new a.NI,this.productOption=[],this.suppliers=[],this.variantControlName="barcode",this.variantControl=new a.NI,this.variants=[],this.loader=!1,this.search=!1,this.check=!1,this.srchData=[],this.barcode=[],this.staticValue="Static Value",this.searchs=[],this.productName=[],this.isProduct=!0}get f(){return this.purchaseForm.controls}ngOnInit(){this.purchaseForm=this.fb.group({supplier:new a.NI("",[a.kI.required]),order_date:new a.NI(""),order_no:new a.NI("",[a.kI.required,a.kI.pattern(/^[0-9]*$/)]),shipping_date:new a.NI("",[a.kI.required]),shipping_note:new a.NI("",[a.kI.required]),sub_total:new a.NI("",[a.kI.pattern(/^[0-9]*$/)]),purchase_cart:this.fb.array([]),total_tax:new a.NI("",[a.kI.pattern(/^[0-9]*$/)]),total_discount:new a.NI("",[a.kI.pattern(/^[0-9]*$/)]),round_off:new a.NI("",[a.kI.pattern(/^[0-9]*$/)]),total:new a.NI("",[a.kI.pattern(/^[0-9]*$/)]),note:new a.NI("",[a.kI.required])}),this.searchForm=this.fb.group({search:new a.NI}),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,d.O)(""),(0,v.U)(e=>this._filter(e,!0))),this.filteredVariants=this.variantControl.valueChanges.pipe((0,d.O)(""),(0,v.U)(e=>this._filtr(e,!0))),this.getSuuplier(),this.getVariants()}get supplier(){return this.purchaseForm.get("supplier")}purchase_cart(){return this.fb.group({barcode:"",qty:"",purchase_rate:"",mrp:"",discount:new a.NI("",[a.kI.pattern(/^(100|[0-9]{1,2})$/)]),tax:"",landing_cost:"",total:""})}getCart(){return this.purchaseForm.get("purchase_cart")}addCart(){this.getCart().push(this.purchase_cart())}removeCart(e){this.getCart().removeAt(e)}getSuuplier(){this.purchaseService.getSupplier().subscribe(e=>{console.log(e),this.suppliers=e})}getVariants(){this.purchaseService.productVariant().subscribe(e=>{console.log(e),this.variants=e})}oncheck(e){console.log(e);const o=e;console.log(o),this.purchaseForm.get("purchase_cart").clear(),this.addCart(),this.purchaseForm.patchValue({supplier:o})}oncheckVariant(e,o){const n=e.id;console.log(n),this.purchaseForm.get("purchase_cart").at(o).patchValue({barcode:n})}submit(){if(console.log(this.purchaseForm.value),this.purchaseForm.valid){this.loader=!0;let e=new FormData;e.append("supplier",this.purchaseForm.get("supplier")?.value),e.append("order_date",this.purchaseForm.get("order_date")?.value),e.append("order_no",this.purchaseForm.get("order_no")?.value),e.append("shipping_date",this.purchaseForm.get("shipping_date")?.value),e.append("shipping_note",this.purchaseForm.get("shipping_note")?.value),e.append("sub_total",this.purchaseForm.get("sub_total")?.value),e.append("total_tax",this.purchaseForm.get("total_tax")?.value),e.append("total_discount",this.purchaseForm.get("total_discount")?.value),e.append("round_off",this.purchaseForm.get("round_off")?.value),e.append("total",this.purchaseForm.get("total")?.value),e.append("note",this.purchaseForm.get("note")?.value);const o=this.purchaseForm.get("purchase_cart"),n=[];o.controls.forEach(i=>{const s=i,u={};Object.keys(s.controls).forEach(h=>{u[h]=s.controls[h].value}),n.push(u)}),e.append("purchase_cart",JSON.stringify(n)),this.purchaseService.addPurchase(e).subscribe(i=>{console.log(i),this.getRes=i,"True"==this.getRes.IsSuccess?(this.loader=!1,this.toastrService.success(this.getRes.msg),this.router.navigate(["//purchase/purchaselist"])):this.loader=!1},i=>{this.loader=!1})}else this.loader=!1,this.purchaseForm.markAllAsTouched(),console.log(this.purchaseForm.value)}get order_no(){return this.purchaseForm.get("order_no")}get order_date(){return this.purchaseForm.get("order_date")}get shipping_date(){return this.purchaseForm.get("shipping_date")}get shipping_note(){return this.purchaseForm.get("shipping_note")}get note(){return this.purchaseForm.get("note")}discountt(e){return this.getCart().controls[e].get("discount")}_filter(e,o){console.log(e);const n="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),i=this.suppliers.filter(o?s=>s.name.toLowerCase().includes(n):s=>!s.name.toLowerCase().includes(n));return!o&&0===i.length&&(console.log("No results found"),i.push({name:"No data found"})),i}_filtr(e,o){console.log(e);const n="string"==typeof e?e?.toLowerCase():e?.toString().toLowerCase(),i=o?this.variants?.filter(s=>s&&(s.product_title?.toLowerCase().includes(n)||s.sku?.toLowerCase().includes(n)||s.variant_name?.toLowerCase().includes(n)||s.id?.toString().includes(n))):this.variants?.filter(s=>s&&!(s.product_title?.toLowerCase().includes(n)||s.sku?.toLowerCase().includes(n)||s.variant_name?.toLowerCase().includes(n)||s.id?.toString().includes(n)));return!o&&(!i||0===i.length)&&(console.log("No results found"),i.push({product_title:"No data found"})),i||[]}isLastCart(e){return e===this.getCart().controls.length-1}clearSearch(){this.searchForm.reset(),this.search=!1}hideSearch(){this.searchs=void 0}onOptionSelected(e){console.log(e),console.log(e.option.value)}displayFn(e){return console.log(e),e?e.product_title:""}variantChanged(e,o){console.log(e),console.log(o),console.log(e?.sku),this.barcode[o]=e.sku,console.log(this.barcode[o]),console.log(this.barcode),this.v_id=e.id,this.purchaseForm.get("purchase_cart").at(o).patchValue({barcode:e.id}),this.searchProduct("someQuery","")}searchProduct(e,o){console.log(e),e?this.purchaseService.searchProduct(e).subscribe(n=>{this.searchs=n,this.productOption=n,console.log(this.searchs),this.productName[o]=this.searchs[0].product_title,console.log(this.productName),this.check=!0,this.purchaseForm.get("purchase_cart").at(o).patchValue({barcode:this.searchs[0].id})}):this.searchs=[]}open(){this.isProduct=!1}calculateTotalQty(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("qty");n&&(e+=+n.value)}return e}calculateTotalMrp(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("mrp");n&&(e+=+n.value)}return e}calculateTotalDiscount(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("discount");n&&(e+=+n.value)}return e}calculateTotalPurchase(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("purchase_rate");n&&(e+=+n.value)}return e}calculateTotalTax(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("tax");n&&(e+=+n.value)}return e}calculateTotalLandingCost(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("landing_cost");n&&(e+=+n.value)}return e}calculateSubtotal(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("qty"),i=this.getCart().controls[o].get("mrp");n&&i&&(e+=+i.value*+n.value)}return e}calculateTotal(){let e=0;for(let o=0;o<this.getCart().controls.length;o++){const n=this.getCart().controls[o].get("qty"),i=this.getCart().controls[o].get("mrp"),s=this.getCart().controls[o].get("tax"),u=this.getCart().controls[o].get("discount");if(n&&i&&s&&u){const N=+i.value*+n.value;e+=N+N*+s.value/100-N*+u.value/100}}return e}calculateTotalEveryIndex(e){const o=this.getCart().controls[e],n=+o.get("qty").value,s=+o.get("mrp").value*n;return s+s*(+o.get("tax").value/100)-s*(+o.get("discount").value/100)}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(A.x),t.Y36(a.qu),t.Y36(_.F0),t.Y36(g._W))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-addpurchase"]],decls:134,vars:56,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-md-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search supplier","aria-label","Supplier","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-4","col-sm-6","col-12"],["type","date","formControlName","order_date",3,"ngClass"],["type","text","formControlName","order_no",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12"],["type","date","formControlName","shipping_date",3,"ngClass"],[1,"col-lg-3","col-sm-6","col-12"],["type","text","formControlName","shipping_note",3,"ngClass"],[1,"table-responsive"],[1,"table"],[1,"text-end"],["formArrayName","purchase_cart"],[4,"ngFor","ngForOf"],[1,"col-lg-12","my-3"],["formControlName","note",1,"form-control",3,"ngClass"],[1,"col-lg-12","float-md-right"],[1,"total-order"],[1,"total"],[1,"col-lg-12"],["class","btn btn-submit me-2",3,"click",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//purchase/purchaselist",1,"btn","btn-cancel"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],[3,"value"],["routerLink","//contacts/addSupplier",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],[3,"formGroupName"],[1,"me-2"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"color","red",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["style","color:green","xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","class","bi bi-plus-circle","viewBox","0 0 16 16",3,"click",4,"ngIf"],["type","text","placeholder","Search Barcode",1,"input",3,"value","keyup","blur"],["id",""],[1,"input"],["type","text","placeholder","Search Product","aria-label","Produt","matInput","",2,"height","18px",3,"formControl","matAutocomplete"],[3,"value","onSelectionChange",4,"ngFor","ngForOf"],["type","text","formControlName","qty",1,"input"],["type","text","formControlName","purchase_rate",1,"input"],["type","text","formControlName","mrp",1,"input"],["type","text","formControlName","discount",1,"input"],["class","text-danger","style","display: block;",4,"ngIf"],["type","text","formControlName","tax",1,"input"],["type","text","formControlName","landing_cost",1,"input"],["type","text","formControlName","total",1,"input",3,"value","ngModel"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle",2,"color","green",3,"click"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],[3,"value","onSelectionChange"],["routerLink","//product/addproduct",2,"color","#FF9F43"],[1,"text-danger",2,"display","block"],[1,"btn","btn-submit","me-2",3,"click"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Purchase Add"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Add/Update Purchase"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Supplier Name*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,S,2,2,"mat-option",11),t.ALo(19,"async"),t.YNc(20,P,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,J,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",14)(24,"div",7)(25,"label"),t._uU(26,"Purchase Date"),t.qZA(),t._UZ(27,"input",15),t.YNc(28,k,2,0,"span",13),t.qZA()(),t.TgZ(29,"div",14)(30,"div",7)(31,"label"),t._uU(32,"Purchase No.* "),t.qZA(),t._UZ(33,"input",16),t.YNc(34,Q,2,0,"span",13),t.qZA()(),t.TgZ(35,"div",17)(36,"div",7)(37,"label"),t._uU(38,"Shipping Date* "),t.qZA(),t._UZ(39,"input",18),t.YNc(40,L,2,0,"span",13),t.qZA()(),t.TgZ(41,"div",19)(42,"div",7)(43,"label"),t._uU(44,"Shipping Note* "),t.qZA(),t._UZ(45,"input",20),t.YNc(46,E,2,0,"span",13),t.qZA()()(),t.TgZ(47,"div",5)(48,"div",21)(49,"table",22)(50,"thead")(51,"tr"),t._UZ(52,"th"),t.TgZ(53,"th"),t._uU(54,"Barcode/SKU"),t.qZA(),t.TgZ(55,"th"),t._uU(56,"Product Name"),t.qZA(),t.TgZ(57,"th"),t._uU(58,"QTY"),t.qZA(),t.TgZ(59,"th"),t._uU(60,"Purchase Price"),t.qZA(),t.TgZ(61,"th"),t._uU(62,"Mrp"),t.qZA(),t.TgZ(63,"th"),t._uU(64,"Discount"),t.qZA(),t.TgZ(65,"th"),t._uU(66,"Tax %"),t.qZA(),t.TgZ(67,"th"),t._uU(68,"Landing Cost"),t.qZA(),t.TgZ(69,"th",23),t._uU(70,"Total Cost"),t.qZA(),t._UZ(71,"th"),t.qZA()(),t.TgZ(72,"tbody"),t.ynx(73,24),t.YNc(74,D,36,15,"ng-container",25),t.BQk(),t.qZA()()()(),t.TgZ(75,"div",26)(76,"div",7)(77,"label"),t._uU(78,"Note*"),t.qZA(),t._UZ(79,"textarea",27),t.YNc(80,K,2,0,"span",13),t.qZA()(),t.TgZ(81,"div",5)(82,"div",28)(83,"div",29)(84,"ul")(85,"li")(86,"h4"),t._uU(87,"Total Qty"),t.qZA(),t.TgZ(88,"h5"),t._uU(89),t.qZA()(),t.TgZ(90,"li")(91,"h4"),t._uU(92,"Total Mrp"),t.qZA(),t.TgZ(93,"h5"),t._uU(94),t.ALo(95,"currency"),t.qZA()(),t.TgZ(96,"li")(97,"h4"),t._uU(98,"Sub Total"),t.qZA(),t.TgZ(99,"h5"),t._uU(100),t.ALo(101,"currency"),t.qZA()(),t.TgZ(102,"li")(103,"h4"),t._uU(104,"Total Tax"),t.qZA(),t.TgZ(105,"h5"),t._uU(106),t.qZA()(),t.TgZ(107,"li")(108,"h4"),t._uU(109,"Total Discount "),t.qZA(),t.TgZ(110,"h5"),t._uU(111),t.qZA()(),t.TgZ(112,"li")(113,"h4"),t._uU(114,"Landing Cost"),t.qZA(),t.TgZ(115,"h5"),t._uU(116),t.ALo(117,"currency"),t.qZA()(),t.TgZ(118,"li")(119,"h4"),t._uU(120,"Total Purchase "),t.qZA(),t.TgZ(121,"h5"),t._uU(122),t.ALo(123,"currency"),t.qZA()(),t.TgZ(124,"li",30)(125,"h4"),t._uU(126,"Total"),t.qZA(),t.TgZ(127,"h5"),t._uU(128),t.qZA()()()()()(),t.TgZ(129,"div",31),t.YNc(130,$,2,0,"button",32),t.YNc(131,z,3,0,"button",33),t.TgZ(132,"a",34),t._uU(133,"Cancel"),t.qZA()()()()()),2&e){const n=t.MAs(17);t.xp6(8),t.Q6J("formGroup",o.purchaseForm),t.xp6(7),t.Q6J("formControl",o.supplierControl)("matAutocomplete",n)("ngClass",t.VKq(44,f,o.f.supplier.touched&&o.f.supplier.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,28,o.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,30,o.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",o.supplier&&o.supplier.invalid&&o.supplier.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(46,f,o.f.order_date.touched&&o.f.order_date.invalid)),t.xp6(1),t.Q6J("ngIf",o.order_date&&o.order_date.invalid&&o.order_date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(48,f,o.f.order_no.touched&&o.f.order_no.invalid)),t.xp6(1),t.Q6J("ngIf",o.order_no&&o.order_no.invalid&&o.order_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(50,f,o.f.shipping_date.touched&&o.f.shipping_date.invalid)),t.xp6(1),t.Q6J("ngIf",o.shipping_date&&o.shipping_date.invalid&&o.shipping_date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(52,f,o.f.shipping_note.touched&&o.f.shipping_note.invalid)),t.xp6(1),t.Q6J("ngIf",o.shipping_note&&o.shipping_note.invalid&&o.shipping_note.touched),t.xp6(28),t.Q6J("ngForOf",o.getCart().controls),t.xp6(5),t.Q6J("ngClass",t.VKq(54,f,o.f.note.touched&&o.f.note.invalid)),t.xp6(1),t.Q6J("ngIf",o.note&&o.note.invalid&&o.note.touched),t.xp6(9),t.Oqu(o.calculateTotalQty()),t.xp6(5),t.Oqu(t.xi3(95,32,o.calculateTotalMrp(),"INR")),t.xp6(6),t.Oqu(t.xi3(101,35,o.calculateSubtotal(),"INR")),t.xp6(6),t.Oqu("\u20b9"+o.calculateTotalTax()+"%"),t.xp6(5),t.Oqu("\u20b9"+o.calculateTotalDiscount()+"%"),t.xp6(5),t.Oqu(t.xi3(117,38,o.calculateTotalLandingCost(),"INR")),t.xp6(6),t.Oqu(t.xi3(123,41,o.calculateTotalPurchase(),"INR")),t.xp6(6),t.Oqu(o.calculateTotal()),t.xp6(2),t.Q6J("ngIf",!o.loader),t.xp6(1),t.Q6J("ngIf",o.loader)}},dependencies:[p.mk,p.sg,p.O5,_.yS,a._Y,a.Fj,a.JJ,a.JL,a.oH,a.sg,a.u,a.x0,a.CE,m.XC,m.ZL,T.ey,x.KE,w.Nt,p.Ov,p.H9],styles:[".mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}"]}),r})();var H=c(597);const q=JSON.parse(localStorage.getItem("auth"));let y;q&&q.permission&&q.permission.map(l=>{"master"===l.content_type.app_label&&"purchaseorder"===l.content_type.model&&"add_purchaseorder"==l.codename&&(y=l.codename,console.log(y))});const W=[{path:"",component:U,canActivate:[H.l],data:{allowedRoles:[y]}}];let j=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[_.Bz.forChild(W),_.Bz]}),r})(),X=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r,bootstrap:[U]}),r.\u0275inj=t.cJS({imports:[p.ez,j,Z.ZU,a.u5,a.UX,m.Bb,x.lN,w.c]}),r})()},597:(F,C,c)=>{c.d(C,{l:()=>a});var p=c(4650),Z=c(8996),_=c(7185);let a=(()=>{class d{constructor(t,A,g){this.router=t,this.Arout=A,this.toastr=g}canActivate(t,A){const g=JSON.parse(localStorage.getItem("auth"));if(g&&g.user){const m=t.data.allowedRoles;console.log(m,"allowedRoles");const T=g.permission.some(x=>m.includes(x.codename));if(console.log(T),T)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return d.\u0275fac=function(t){return new(t||d)(p.LFG(Z.F0),p.LFG(Z.gz),p.LFG(_._W))},d.\u0275prov=p.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);