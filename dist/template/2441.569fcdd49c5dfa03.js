"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2441],{53506:(w,S,s)=>{s.d(S,{x:()=>v});var _=s(92340),y=s(94650),p=s(80529);let v=(()=>{class f{constructor(r){this.http=r,this.apiUrl=`${_.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(r){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",r)}getPurchaseById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}PurchaseIsActive(r,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,n)}updatePurchase(r,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,r)}deletePurchase(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+r)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(r){return this.http.post(this.apiUrl+"/pv-api/material_inward/",r)}getMaterialById(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}MaterialIsActive(r,n){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,n)}updateMaterial(r,n){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,r)}deleteMaterial(r){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(r){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",r)}getPurchaseBillById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}PurchaseBillIsActive(r,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,n)}updatePurchaseBill(r,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,r)}deletePurchaseBill(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(r){return this.http.post(this.apiUrl+"/pv-api/debit_note/",r)}getDebitNotesById(r){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}DebitNotesIsActive(r,n){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,n)}updateDebitNotes(r,n){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,r)}deleteDebitNotes(r){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}getSearchProductById(r){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${r}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",r)}getPurchaseReturnById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}PurchaseReturnIsActive(r,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,n)}updatePurchaseReturn(r,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,r)}deletePurchaseReturn(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}filterVariant(r,n,u,b){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const C=[];return r&&C.push(`supplier=${r}`),n&&C.push(`category=${n}`),u&&C.push(`subcategory=${u}`),b&&C.push(`search=${b}`),C.length>0&&(t+="?"+C.join("&")),this.http.get(t)}}return f.\u0275fac=function(r){return new(r||f)(y.LFG(p.eN))},f.\u0275prov=y.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},32441:(w,S,s)=>{s.r(S),s.d(S,{StockRegisterModule:()=>st});var _=s(36895),y=s(89299),p=s(24006),v=s(68675),f=s(54004),T=s(96166),r=s(12983),n=s.n(r),u=s(80574),b=s(94327),t=s(94650),C=s(97185),N=s(71071),R=s(53506),$=s(42917),J=s(80927),D=s(87719),B=s(72170),k=s(47957),U=s(3238),x=s(59549),M=s(44144),A=s(99602),L=s(54333),F=s(54040);function I(l,h){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",60),t.NdJ("blur",function(){const a=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.oncheckproduct(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&l){const e=h.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function Q(l,h){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",63),t.NdJ("onSelectionChange",function(){t.CHM(e);const o=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.oncheckVariant(null==o?null:o.id))}),t._uU(1),t.qZA()}if(2&l){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)),t.xp6(1),t.hij(" ",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)," ")}}function E(l,h){if(1&l&&(t.ynx(0),t.YNc(1,Q,2,2,"mat-option",62),t.BQk()),2&l){const e=h.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function q(l,h){if(1&l&&(t.ynx(0),t.YNc(1,E,2,1,"ng-container",61),t.BQk()),2&l){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.variantList)}}function V(l,h){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",60),t.NdJ("blur",function(){const a=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.oncheckCategory(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&l){const e=h.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function Y(l,h){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",60),t.NdJ("blur",function(){const a=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.oncheckSubCategory(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&l){const e=h.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function H(l,h){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",60),t.NdJ("blur",function(){const a=t.CHM(e).$implicit,d=t.oxw();return t.KtG(d.oncheckBrand(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&l){const e=h.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function z(l,h){if(1&l&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()()),2&l){const e=h.$implicit,i=h.index;t.xp6(2),t.Oqu(i+1+"."),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.product_title),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.variant_name),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.sku),t.xp6(2),t.Oqu(e.in_qty),t.xp6(2),t.Oqu(e.out_qty),t.xp6(2),t.Oqu(e.closing)}}const j=function(l,h){return{itemsPerPage:l,currentPage:h}};function W(l,h){if(1&l&&(t.TgZ(0,"tbody"),t.YNc(1,z,15,7,"tr",61),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&l){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.stockAlertList,e.key,e.reverse),t.WLB(8,j,e.itemsPerPage,e.p)))}}function K(l,h){1&l&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",64)(3,"p",65),t._uU(4,"Data not available"),t.qZA()()()())}const G=[{path:"",component:(()=>{class l{constructor(e,i,o,a,d,m,c,g,P,at){this.router=e,this.fb=i,this.toastr=o,this.transactionService=a,this.purchaseService=d,this.cs=m,this.datepipe=c,this.coreService=g,this.reportService=P,this.saleService=at,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.brandControl=new p.NI(""),this.categoryControl=new p.NI(""),this.subCategoryControl=new p.NI(""),this.itemCodeControl=new p.NI(""),this.supplierControl=new p.NI(""),this.productControl=new p.NI(""),this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.selectBrand=[],this.selectCategory=[],this.selectSubCat=[],this.selectProduct=[],this.selectVariant=[],this.brandList=[],this.categoryList=[],this.subCategoryList=[],this.isSearch=!1,this.variantList=[]}ngOnInit(){this.cs.userDetails$.subscribe(c=>{this.userDetails=c,console.log(c),this.userName=c?.username});const e=new Date,a=(e.getMonth(),e.getFullYear(),new Date(e));a.setDate(e.getDate()-14);const d=this.formatDate(a),m=this.formatDate(e);this.stockAlertform=new p.cw({start:new p.NI(d),end:new p.NI(m),category:new p.NI,subcategory:new p.NI(""),brand:new p.NI(""),product:new p.NI(""),variant:new p.NI("")}),this.startDate=this.stockAlertform.value?.start,this.endDate=this.stockAlertform.value?.end,this.category=this.stockAlertform.value?.category,this.subcategory=this.stockAlertform.value?.subcategory,this.brand=this.stockAlertform.value?.brand,this.product=this.stockAlertform.value?.product,this.variant=this.stockAlertform.value?.variant,this.getStockAlert(),this.getBrand(),this.getCategory(),this.getSubcategory(),this.getProduct(),this.filteredBrand=this.brandControl.valueChanges.pipe((0,v.O)(""),(0,f.U)(c=>{const g="string"==typeof c?c:c?.title;return g?this._filter(g):this.brandList.slice()})),this.filteredCategory=this.categoryControl.valueChanges.pipe((0,v.O)(""),(0,f.U)(c=>{const g="string"==typeof c?c:c?.title;return g?this._filter2(g):this.categoryList.slice()})),this.filteredSubCategory=this.subCategoryControl.valueChanges.pipe((0,v.O)(""),(0,f.U)(c=>{const g="string"==typeof c?c:c?.title;return g?this._filter3(g):this.subCategoryList.slice()})),this.filteredProduct=this.productControl.valueChanges.pipe((0,v.O)(""),(0,f.U)(c=>{const g="string"==typeof c?c:c?.title;return g?this._filter5(g):this.productList.slice()})),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,v.O)(""),(0,f.U)(c=>{const g="string"==typeof c?c:c?.title;return g?this._filter6(g):this.productList.slice()}))}getproductHistory(){throw new Error("Method not implemented.")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const i=e?e.toLowerCase():"";return console.log(i),this.brandList.filter(o=>o?.title&&o.title.toLowerCase().includes(i))}displayFn(e){return e&&e?.title?e?.title:""}_filter2(e){const i=e?e.toLowerCase():"";return this.categoryList.filter(o=>o?.title&&o.title.toLowerCase().includes(i))}displayFn2(e){return e&&e?.title?e?.title:""}_filter3(e){const i=e?e.toLowerCase():"";return console.log(i),this.subCategoryList.filter(o=>o?.title&&o.title.toLowerCase().includes(i))}displayFn3(e){return e&&e?.title?e?.title:""}_filter4(e){const i=e?e.toLowerCase():"";return console.log(i),this.productList.filter(o=>o?.item_code&&o.item_code.toLowerCase().includes(i))}displayFn4(e){return e&&e?.item_code?e?.item_code:""}_filter6(e){const i=e?e.toLowerCase():"";return console.log(i),this.productList.filter(o=>o?.title&&o.title.toLowerCase().includes(i)||o?.name&&o.name.toLowerCase().includes(i))}displayFn6(e){return e&&e?.title||e?.name?e?.title||e?.name:""}_filter5(e){const i=e?e.toLowerCase():"";return console.log(i),this.productList.filter(o=>o?.title&&o.title.toLowerCase().includes(i)||o?.name&&o.name.toLowerCase().includes(i))}displayFn5(e){return e&&e?.title||e?.name?e?.title||e?.name:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}search(){if(""===this.titlee)this.getStockAlert();else{const e=this.titlee.toLocaleLowerCase();this.stockAlertList=this.stockAlertList.filter(i=>{const o=i?.user?.party_name.toLocaleLowerCase(),a=i?.payment_voucher_no.toLocaleLowerCase()||"";return!(!o.includes(e)&&!a.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,i,o){const a=(e-1)*i;return`Showing ${a+1}\u2013${Math.min(a+i-1,o-1)+1} of ${o} results`}getStockAlert(){this.reportService.getStockRegister(this.startDate,this.endDate,this.categoryArray,this.subCatArray,this.brandArray,this.productsArray,this.variantsArray).subscribe(e=>{console.log(e),this.stockAlert=e,this.stockAlertList=e})}oncheckBrand(e){const i=this.selectBrand.indexOf(e);-1!==i?this.selectBrand.splice(i,1):this.selectBrand.push(e),console.log(this.selectBrand,"selected data"),this.selectBrand.length>0&&(this.brandArray=JSON.stringify(this.selectBrand),console.log(this.brandArray,"brandArray"),this.brandControl.reset(),this.getStockAlert())}oncheckCategory(e){const i=this.selectCategory.indexOf(e);-1!==i?this.selectCategory.splice(i,1):this.selectCategory.push(e),console.log(this.selectCategory,"selected data"),this.selectCategory.length>0&&(this.categoryArray=JSON.stringify(this.selectCategory),console.log(this.categoryArray,"categoryArray"),this.categoryControl.reset(),this.getStockAlert())}oncheckSubCategory(e){const i=this.selectSubCat.indexOf(e);-1!==i?this.selectSubCat.splice(i,1):this.selectSubCat.push(e),console.log(this.selectSubCat,"selected data"),this.selectSubCat.length>0&&(this.subCatArray=JSON.stringify(this.selectSubCat),console.log(this.subCatArray,"subCatArray"),this.subCategoryControl.reset(),this.getStockAlert())}oncheckproduct(e){const i=this.selectProduct.indexOf(e);-1!==i?this.selectProduct.splice(i,1):this.selectProduct.push(e),console.log(this.selectProduct,"selected data"),this.selectProduct.length>0&&(this.productsArray=JSON.stringify(this.selectProduct),console.log(this.productsArray,"productsArray"),this.productControl.reset(),this.getStockAlert())}oncheckVariant(e){const i=this.selectVariant.indexOf(e);-1!==i?this.selectVariant.splice(i,1):this.selectVariant.push(e),console.log(this.selectVariant,"selected data"),this.selectVariant.length>0&&(this.variantsArray=JSON.stringify(this.selectVariant),console.log(this.variantsArray,"variantsArray"),this.supplierControl.reset(),this.getStockAlert())}getSelectedStockAlertDates(){console.log(this.stockAlertform.value);const e=this.datepipe.transform(this.stockAlertform.value.start,"yyyy-MM-dd"),i=this.datepipe.transform(this.stockAlertform.value.end,"yyyy-MM-dd");console.log(e),console.log(i),this.startDate=e,this.endDate=i,this?.getStockAlert()}getBrand(){this.coreService.getBrand().subscribe(e=>{console.log(e),this.brandList=e})}getCategory(){this.coreService.getCategory().subscribe(e=>{console.log(e),this.categoryList=e})}getSubcategory(){this.coreService.getSubcategory().subscribe(e=>{console.log(e),this.subCategoryList=e})}getVariant(e){this.searchLength=e,this.isSearch=!0,e.toString().length>=3&&this.search.toString().length>=3&&this.saleService.filterVariant("","",e).subscribe(i=>{console.log(i),this.isSearch=!1,this.variantList=i,console.log(this.variantList)})}generatePDFAgain(){const e=new T.default,a=`Date Range From: ${this.startDate} - ${this.endDate}`,d=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Stock Register Report",82,10),e.text(d,10,18),e.text(a,10,22),e.text("",10,25),n()(e,{head:[["#","ProductTitle","VariantName","Sku","IN Qty","Out Qty","Closing"]],body:this.stockAlertList.map((m,c)=>[c+1,m.product.product_title,m.product.variant_name,m.product.sku,m.in_qty,m.out_qty,m.closing]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Stock _Register .pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable");if(i){const o=i.querySelector("thead tr");if(o){const d=[];o.querySelectorAll("th").forEach(m=>{const c=m.textContent?.trim();c&&"Is Active"!==c&&"Action"!==c&&d.push(c)}),e.push(d)}i.querySelectorAll("tbody tr").forEach(d=>{const m=[];d.querySelectorAll("td").forEach(c=>{const g=c.textContent?.trim();g&&m.push(g)}),e.push(m)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=u.P6.aoa_to_sheet(e),o=u.P6.book_new();u.P6.book_append_sheet(o,i,"Sheet1");const a=u.cW(o,{bookType:"xlsx",type:"array"}),d=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,b.saveAs)(d,"Stockregister.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const o=document.querySelector(".titl");if(!o)return void console.error("Title element with class 'titl' not found.");const a=o.outerHTML,m=e.cloneNode(!0).outerHTML,g="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+m,P=document.body.innerHTML;document.body.innerHTML=g,window.print(),document.body.innerHTML=P}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(y.F0),t.Y36(p.qu),t.Y36(C._W),t.Y36(N.p),t.Y36(R.x),t.Y36($.J),t.Y36(_.uU),t.Y36(J.p),t.Y36(D.r),t.Y36(B.M))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-stock-register"]],decls:132,vars:37,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],["type","text","placeholder","Enter Product",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],["type","text","placeholder","Search Variant","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[4,"ngIf"],[1,"col-lg-2","col-sm-6","col-12"],["autoc","matAutocomplete"],["type","text","placeholder","Enter Sub Category",1,"form-control",3,"formControl","matAutocomplete"],["autosc","matAutocomplete"],["type","text","placeholder","Enter Brand",1,"form-control",3,"formControl","matAutocomplete"],["autob","matAutocomplete"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[3,"value","blur"],[4,"ngFor","ngForOf"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["colspan","10"],[1,"text-center"]],template:function(e,i){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Stock Register"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Stock Register"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return i.getSelectedStockAlertDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return i.getSelectedStockAlertDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()(),t.TgZ(28,"div",21)(29,"div",22)(30,"strong"),t._uU(31,"Select Product"),t.qZA(),t._UZ(32,"input",23),t.TgZ(33,"mat-autocomplete",24,25),t.YNc(35,I,2,2,"mat-option",26),t.ALo(36,"async"),t.qZA()()(),t.TgZ(37,"div",21)(38,"div",22)(39,"strong"),t._uU(40,"Select Variant"),t.qZA(),t.TgZ(41,"input",27),t.NdJ("input",function(a){return i.getVariant(a.target.value)}),t.qZA(),t.TgZ(42,"mat-autocomplete",null,28),t.YNc(44,q,2,1,"ng-container",29),t.qZA()()(),t.TgZ(45,"div",30)(46,"div",22)(47,"strong"),t._uU(48,"Select Category"),t.qZA(),t._UZ(49,"input",23),t.TgZ(50,"mat-autocomplete",24,31),t.YNc(52,V,2,2,"mat-option",26),t.ALo(53,"async"),t.qZA()()(),t.TgZ(54,"div",30)(55,"div",22)(56,"strong"),t._uU(57,"Select Sub Category"),t.qZA(),t._UZ(58,"input",32),t.TgZ(59,"mat-autocomplete",24,33),t.YNc(61,Y,2,2,"mat-option",26),t.ALo(62,"async"),t.qZA()()(),t.TgZ(63,"div",30)(64,"div",22)(65,"strong"),t._uU(66,"Select Brand"),t.qZA(),t._UZ(67,"input",34),t.TgZ(68,"mat-autocomplete",24,35),t.YNc(70,H,2,2,"mat-option",26),t.ALo(71,"async"),t.qZA()()()()()(),t.TgZ(72,"div",36)(73,"ul")(74,"li")(75,"a",37),t.NdJ("click",function(){return i.generatePDFAgain()}),t._UZ(76,"img",38),t.qZA()(),t.TgZ(77,"li")(78,"a",39),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(79,"img",40),t.qZA()(),t.TgZ(80,"li")(81,"a",41),t.NdJ("click",function(){return i.printTable()}),t._UZ(82,"img",42),t.qZA()()()()(),t.TgZ(83,"div",43)(84,"table",44)(85,"thead")(86,"tr")(87,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(88,"#"),t._UZ(89,"i",46),t.qZA(),t.TgZ(90,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(91,"ProductTitle "),t._UZ(92,"i",46),t.qZA(),t.TgZ(93,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(94,"VariantName "),t._UZ(95,"i",46),t.qZA(),t.TgZ(96,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(97,"Sku "),t._UZ(98,"i",46),t.qZA(),t.TgZ(99,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(100,"In Qty "),t._UZ(101,"i",46),t.qZA(),t.TgZ(102,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(103,"Out Qty "),t._UZ(104,"i",46),t.qZA(),t.TgZ(105,"th",45),t.NdJ("click",function(){return i.sort("id")}),t._uU(106,"Closing "),t._UZ(107,"i",46),t.qZA()()(),t.YNc(108,W,4,11,"tbody",29),t.YNc(109,K,5,0,"tbody",29),t.qZA(),t.TgZ(110,"div",10)(111,"div",47)(112,"div",48),t._uU(113," Show per page "),t.TgZ(114,"select",49),t.NdJ("ngModelChange",function(a){return i.itemsPerPage=a}),t.TgZ(115,"option",50),t._uU(116,"10"),t.qZA(),t.TgZ(117,"option",51),t._uU(118,"20"),t.qZA(),t.TgZ(119,"option",52),t._uU(120,"30"),t.qZA(),t.TgZ(121,"option",53),t._uU(122,"50"),t.qZA(),t.TgZ(123,"option",54),t._uU(124,"100"),t.qZA(),t.TgZ(125,"option",55),t._uU(126,"All"),t.qZA()()()(),t.TgZ(127,"div",56)(128,"div",57)(129,"pagination-controls",58),t.NdJ("pageChange",function(a){return i.p=a}),t.qZA(),t.TgZ(130,"div",59),t._uU(131),t.qZA()()()()()()()()()),2&e){const o=t.MAs(27),a=t.MAs(34),d=t.MAs(43),m=t.MAs(51),c=t.MAs(60),g=t.MAs(69);t.xp6(12),t.Q6J("formGroup",i.stockAlertform),t.xp6(7),t.Q6J("formGroup",i.stockAlertform)("rangePicker",o),t.xp6(6),t.Q6J("for",o),t.xp6(7),t.Q6J("formControl",i.supplierControl)("matAutocomplete",a),t.xp6(1),t.Q6J("displayWith",i.displayFn5),t.xp6(2),t.Q6J("ngForOf",t.lcZ(36,29,i.filteredSuppliers)),t.xp6(6),t.Q6J("formControl",i.productControl)("matAutocomplete",d),t.xp6(3),t.Q6J("ngIf",(null==i.productControl.value?null:i.productControl.value.length)>=1&&(null==i.productControl.value?null:i.productControl.value.length)>0),t.xp6(5),t.Q6J("formControl",i.categoryControl)("matAutocomplete",m),t.xp6(1),t.Q6J("displayWith",i.displayFn2),t.xp6(2),t.Q6J("ngForOf",t.lcZ(53,31,i.filteredCategory)),t.xp6(6),t.Q6J("formControl",i.subCategoryControl)("matAutocomplete",c),t.xp6(1),t.Q6J("displayWith",i.displayFn3),t.xp6(2),t.Q6J("ngForOf",t.lcZ(62,33,i.filteredSubCategory)),t.xp6(6),t.Q6J("formControl",i.brandControl)("matAutocomplete",g),t.xp6(1),t.Q6J("displayWith",i.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(71,35,i.filteredBrand)),t.xp6(38),t.Q6J("ngIf",(null==i.stockAlertList?null:i.stockAlertList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==i.stockAlertList?null:i.stockAlertList.length)),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(17),t.lnq(" Showing ",i.itemsPerPage," to ",i.itemsPerPage," of ",i.p," entries ")}},dependencies:[_.sg,_.O5,p._Y,p.YN,p.Kr,p.Fj,p.EJ,p.JJ,p.JL,p.On,p.oH,p.sg,p.u,k.XC,k.ZL,U.ey,x.KE,x.R9,M.Nt,A.nW,A.wx,A.zY,A.By,A._g,L.LS,_.Ov,L._s,F.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;letter-spacing:3px;font-weight:700;padding-left:30px}.head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:3px;font-weight:700}.head6[_ngcontent-%COMP%]{font-size:18px;padding-left:10%}"]}),l})()}];let X=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[y.Bz.forChild(G),y.Bz]}),l})();var tt=s(3056),et=s(87078),O=s(86323),Z=s(92642),it=s(95113),rt=s(64155),ot=s(6205),nt=s(8468);const lt={User:Z.n5m,UserCheck:Z.uS3,FileText:Z.acj,File:Z.$BE};let st=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[_.uU],imports:[_.ez,X,p.u5,p.UX,k.Bb,x.lN,M.c,tt.ZQ,et.T,A.FA,x.lN,U.XK,it.LD,rt.vQ,nt.I,ot.X,O.p.pick(lt),O.p]}),l})()}}]);