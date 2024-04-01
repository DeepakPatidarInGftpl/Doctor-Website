"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6734],{53506:(J,L,s)=>{s.d(L,{x:()=>P});var _=s(92340),A=s(94650),u=s(80529);let P=(()=>{class f{constructor(o){this.http=o,this.apiUrl=`${_.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(o){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",o)}getPurchaseById(o){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${o}`)}PurchaseIsActive(o,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${o}`,i)}updatePurchase(o,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,o)}deletePurchase(o){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${o}`)}searchProduct(o){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+o)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(o){return this.http.post(this.apiUrl+"/pv-api/material_inward/",o)}getMaterialById(o){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${o}`)}MaterialIsActive(o,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${o}`,i)}updateMaterial(o,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,o)}deleteMaterial(o){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${o}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(o){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",o)}getPurchaseBillById(o){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${o}`)}PurchaseBillIsActive(o,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${o}`,i)}updatePurchaseBill(o,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,o)}deletePurchaseBill(o){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${o}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(o){return this.http.post(this.apiUrl+"/pv-api/debit_note/",o)}getDebitNotesById(o){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${o}`)}DebitNotesIsActive(o,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${o}`,i)}updateDebitNotes(o,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,o)}deleteDebitNotes(o){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${o}`)}getSearchProductById(o){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${o}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(o){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",o)}getPurchaseReturnById(o){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${o}`)}PurchaseReturnIsActive(o,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${o}`,i)}updatePurchaseReturn(o,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,o)}deletePurchaseReturn(o){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${o}`)}filterVariant(o,i,d,Z){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const v=[];return o&&v.push(`supplier=${o}`),i&&v.push(`category=${i}`),d&&v.push(`subcategory=${d}`),Z&&v.push(`search=${Z}`),v.length>0&&(t+="?"+v.join("&")),this.http.get(t)}}return f.\u0275fac=function(o){return new(o||f)(A.LFG(u.eN))},f.\u0275prov=A.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},26734:(J,L,s)=>{s.r(L),s.d(L,{ProductLedgerModule:()=>pt});var _=s(36895),A=s(89299),u=s(24006),P=s(68675),f=s(54004),M=s(96166),o=s(12983),i=s.n(o),d=s(80574),Z=s(94327),t=s(94650),v=s(97185),D=s(71071),F=s(53506),B=s(42917),q=s(80927),E=s(87719),Q=s(72170),w=s(54333),S=s(47957),N=s(3238),T=s(59549),O=s(44144),b=s(99602),V=s(54040);function Y(l,h){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",61),t.NdJ("onSelectionChange",function(){t.CHM(e);const n=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.oncheckVariant(null==n?null:n.id))}),t._uU(1),t.qZA()}if(2&l){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)),t.xp6(1),t.hij(" ",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)," ")}}function R(l,h){if(1&l&&(t.ynx(0),t.YNc(1,Y,2,2,"mat-option",60),t.BQk()),2&l){const e=h.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function H(l,h){if(1&l&&(t.ynx(0),t.YNc(1,R,2,1,"ng-container",59),t.BQk()),2&l){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.variantList)}}function z(l,h){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",62),t.NdJ("blur",function(){const a=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.oncheckCategory(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&l){const e=h.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function j(l,h){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",62),t.NdJ("blur",function(){const a=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.oncheckSubCategory(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&l){const e=h.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function W(l,h){if(1&l){const e=t.EpF();t.TgZ(0,"mat-option",62),t.NdJ("blur",function(){const a=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.oncheckBrand(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&l){const e=h.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function K(l,h){if(1&l&&(t.TgZ(0,"tr")(1,"td",65),t._uU(2),t.ALo(3,"date"),t.qZA(),t.TgZ(4,"td",65),t._uU(5),t.qZA(),t.TgZ(6,"td",65),t._uU(7),t.qZA(),t.TgZ(8,"td",65),t._uU(9),t.qZA(),t.TgZ(10,"td",65),t._uU(11),t.qZA(),t.TgZ(12,"td",65),t._uU(13),t.qZA(),t.TgZ(14,"td",65),t._uU(15),t.qZA()()),2&l){const e=h.$implicit;t.xp6(2),t.hij(" ",t.xi3(3,7,e.date,"YY/MM/dd"),""),t.xp6(3),t.Oqu(e.voucher_type),t.xp6(2),t.Oqu(e.voucher_no),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.price),t.xp6(2),t.Oqu(e.in_qty),t.xp6(2),t.Oqu(e.out_qty)}}function G(l,h){if(1&l&&(t.TgZ(0,"tr")(1,"td",63),t._uU(2),t.qZA(),t.TgZ(3,"td",63),t._uU(4),t.qZA(),t.TgZ(5,"td",63),t._uU(6),t.qZA(),t.TgZ(7,"td",64),t.YNc(8,K,16,10,"tr",59),t.qZA()()),2&l){const e=h.$implicit,r=h.index;t.xp6(2),t.Oqu(r+1+"."),t.xp6(2),t.Oqu(e.variant_name),t.xp6(2),t.Oqu(e.product),t.xp6(2),t.Q6J("ngForOf",null==e?null:e.data)}}const X=function(l,h){return{itemsPerPage:l,currentPage:h}};function tt(l,h){if(1&l&&(t.TgZ(0,"tbody"),t.YNc(1,G,9,4,"tr",59),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&l){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.stockAlertList,e.key,e.reverse),t.WLB(8,X,e.itemsPerPage,e.p)))}}function et(l,h){1&l&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",66)(3,"p",67),t._uU(4,"Data not available"),t.qZA()()()())}const rt=[{path:"",component:(()=>{class l{constructor(e,r,n,a,p,m,c,g,C,k){this.router=e,this.fb=r,this.toastr=n,this.transactionService=a,this.purchaseService=p,this.cs=m,this.datepipe=c,this.coreService=g,this.reportService=C,this.saleService=k,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.brandControl=new u.NI(""),this.categoryControl=new u.NI(""),this.subCategoryControl=new u.NI(""),this.itemCodeControl=new u.NI(""),this.supplierControl=new u.NI(""),this.productControl=new u.NI(""),this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.brandList=[],this.categoryList=[],this.subCategoryList=[],this.isSearch=!1,this.variantList=[]}ngOnInit(){this.cs.userDetails$.subscribe(c=>{this.userDetails=c,console.log(c),this.userName=c?.username});const e=new Date,a=(e.getMonth(),e.getFullYear(),new Date(e));a.setDate(e.getDate()-14);const p=this.formatDate(a),m=this.formatDate(e);this.stockAlertform=new u.cw({start:new u.NI(p),end:new u.NI(m),category:new u.NI,subcategory:new u.NI(""),brand:new u.NI(""),product:new u.NI(""),variant:new u.NI("")}),this.startDate=this.stockAlertform.value?.start,this.endDate=this.stockAlertform.value?.end,this.category=this.stockAlertform.value?.category,this.subcategory=this.stockAlertform.value?.subcategory,this.brand=this.stockAlertform.value?.brand,this.product=this.stockAlertform.value?.product,this.variant=this.stockAlertform.value?.variant,this.getStockAlert(),this.getBrand(),this.getCategory(),this.getSubcategory(),this.getProduct(),this.reportService.getVariant().subscribe(c=>{console.log(c)}),this.filteredBrand=this.brandControl.valueChanges.pipe((0,P.O)(""),(0,f.U)(c=>{const g="string"==typeof c?c:c?.title;return g?this._filter(g):this.brandList.slice()})),this.filteredCategory=this.categoryControl.valueChanges.pipe((0,P.O)(""),(0,f.U)(c=>{const g="string"==typeof c?c:c?.title;return g?this._filter2(g):this.categoryList.slice()})),this.filteredSubCategory=this.subCategoryControl.valueChanges.pipe((0,P.O)(""),(0,f.U)(c=>{const g="string"==typeof c?c:c?.title;return g?this._filter3(g):this.subCategoryList.slice()})),this.filteredProduct=this.productControl.valueChanges.pipe((0,P.O)(""),(0,f.U)(c=>{const g="string"==typeof c?c:c?.title;return g?this._filter5(g):this.productList.slice()})),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,P.O)(""),(0,f.U)(c=>{const g="string"==typeof c?c:c?.title;return g?this._filter6(g):this.productList.slice()}))}getproductHistory(){throw new Error("Method not implemented.")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const r=e?e.toLowerCase():"";return console.log(r),this.brandList.filter(n=>n?.title&&n.title.toLowerCase().includes(r))}displayFn(e){return e&&e?.title?e?.title:""}_filter2(e){const r=e?e.toLowerCase():"";return this.categoryList.filter(n=>n?.title&&n.title.toLowerCase().includes(r))}displayFn2(e){return e&&e?.title?e?.title:""}_filter3(e){const r=e?e.toLowerCase():"";return console.log(r),this.subCategoryList.filter(n=>n?.title&&n.title.toLowerCase().includes(r))}displayFn3(e){return e&&e?.title?e?.title:""}_filter4(e){const r=e?e.toLowerCase():"";return console.log(r),this.productList.filter(n=>n?.item_code&&n.item_code.toLowerCase().includes(r))}displayFn4(e){return e&&e?.item_code?e?.item_code:""}_filter6(e){const r=e?e.toLowerCase():"";return console.log(r),this.productList.filter(n=>n?.title&&n.title.toLowerCase().includes(r)||n?.name&&n.name.toLowerCase().includes(r))}displayFn6(e){return e&&e?.title||e?.name?e?.title||e?.name:""}_filter5(e){const r=e?e.toLowerCase():"";return console.log(r),this.productList.filter(n=>n?.title&&n.title.toLowerCase().includes(r)||n?.name&&n.name.toLowerCase().includes(r))}displayFn5(e){return e&&e?.title||e?.name?e?.title||e?.name:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}search(){if(""===this.titlee)this.getStockAlert();else{const e=this.titlee.toLocaleLowerCase();this.stockAlertList=this.stockAlertList.filter(r=>{const n=r?.user?.party_name.toLocaleLowerCase(),a=r?.payment_voucher_no.toLocaleLowerCase()||"";return!(!n.includes(e)&&!a.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?r=>{r.isSelected=!1}:r=>{r.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,r,n){const a=(e-1)*r;return`Showing ${a+1}\u2013${Math.min(a+r-1,n-1)+1} of ${n} results`}getStockAlert(){console.log(this.brand),this.reportService.getProductLedger(this.startDate,this.endDate,this.category,this.subcategory,this.brand,this.variant).subscribe(e=>{console.log(e),this.stockAlert=e,this.stockAlertList=e})}oncheckBrand(e){console.log(e),this.dataId=e,this.stockAlertform.patchValue({brand:this.dataId}),console.warn(this.stockAlertform.value),this.brand=this.stockAlertform.value?.brand,this?.getStockAlert()}oncheckCategory(e){console.log(e),this.dataId=e,this.stockAlertform.patchValue({category:this.dataId}),console.warn(this.stockAlertform.value),this.category=this.stockAlertform.value?.category,this?.getStockAlert()}oncheckSubCategory(e){console.log(e),this.stockAlertform.patchValue({subcategory:e}),console.warn(this.stockAlertform.value),this.subcategory=this.stockAlertform.value?.subcategory,this?.getStockAlert()}oncheckVariant(e){this.stockAlertform.patchValue({variant:e}),console.warn(this.stockAlertform.value),this.variant=this.stockAlertform.value?.variant,this?.getStockAlert()}getSelectedStockAlertDates(){console.log(this.stockAlertform.value);const e=this.datepipe.transform(this.stockAlertform.value.start,"yyyy-MM-dd"),r=this.datepipe.transform(this.stockAlertform.value.end,"yyyy-MM-dd");console.log(e),console.log(r),this.startDate=e,this.endDate=r,this?.getStockAlert()}getBrand(){this.coreService.getBrand().subscribe(e=>{console.log(e),this.brandList=e})}getCategory(){this.coreService.getCategory().subscribe(e=>{console.log(e),this.categoryList=e})}getSubcategory(){this.coreService.getSubcategory().subscribe(e=>{console.log(e),this.subCategoryList=e})}getVariant(e){this.searchLength=e,this.isSearch=!0,e.toString().length>=3&&this.search.toString().length>=3&&this.saleService.filterVariant("","",e).subscribe(r=>{console.log(r),this.isSearch=!1,this.variantList=r,console.log(this.variantList)})}generatePDFAgain(){const e=new M.default,a=`Date Range From: ${this.startDate} - ${this.endDate}`,p=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Product Ledger Report",82,10),e.text(p,10,18),e.text(a,10,22),e.text("",10,25);const c=[];let g=1;this.stockAlertList.forEach(C=>{console.warn(C);const k=C.variant_name,ut=C.product;let x=!0;C.data.forEach((y,gt)=>{console.log(y),c.push([x?g:"",x?k:"",x?ut:"",this.formatDate(y.date),y.voucher_type,y.voucher_no,y.name,y.price,y.in_qty,y.out_qty]),x=!1}),g++}),i()(e,{head:[["#","Variant Name","Product","Date","Voucher Type","Voucher No.","Name","Price","IN Qty","Out Qty"]],body:c,theme:"grid",startY:32,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),e.save("Product_Ledger .pdf")}getVisibleDataFromTable(){const e=[],r=document.getElementById("mytable");if(r){const n=r.querySelector("thead tr");if(n){const p=[];n.querySelectorAll("th").forEach(m=>{const c=m.textContent?.trim();c&&"Is Active"!==c&&"Action"!==c&&p.push(c)}),e.push(p)}r.querySelectorAll("tbody tr").forEach(p=>{const m=[];p.querySelectorAll("td").forEach(c=>{const g=c.textContent?.trim();g&&m.push(g)}),e.push(m)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),r=d.P6.aoa_to_sheet(e),n=d.P6.book_new();d.P6.book_append_sheet(n,r,"Sheet1");const a=d.cW(n,{bookType:"xlsx",type:"array"}),p=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,Z.saveAs)(p,"productledger.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const n=document.querySelector(".titl");if(!n)return void console.error("Title element with class 'titl' not found.");const a=n.outerHTML,m=e.cloneNode(!0).outerHTML,g="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+m,C=document.body.innerHTML;document.body.innerHTML=g,window.print(),document.body.innerHTML=C}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.stockAlertList?.length)}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(A.F0),t.Y36(u.qu),t.Y36(v._W),t.Y36(D.p),t.Y36(F.x),t.Y36(B.J),t.Y36(_.uU),t.Y36(q.p),t.Y36(E.r),t.Y36(Q.M))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-product-ledger"]],decls:133,vars:31,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"form-group"],["type","text","placeholder","Search Variant","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[4,"ngIf"],["type","text","placeholder","Enter Product",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["autoc","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],["type","text","placeholder","Enter Sub Category",1,"form-control",3,"formControl","matAutocomplete"],["autosc","matAutocomplete"],["type","text","placeholder","Enter Brand",1,"form-control",3,"formControl","matAutocomplete"],["autob","matAutocomplete"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%",3,"click"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngFor","ngForOf"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value","blur"],[2,"vertical-align","top !important"],["colspan","7"],[2,"width","10%"],["colspan","10"],[1,"text-center"]],template:function(e,r){if(1&e){const n=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Product Ledger"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Product Ledger"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return r.getSelectedStockAlertDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return r.getSelectedStockAlertDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()(),t.TgZ(28,"div",11)(29,"div",21)(30,"strong"),t._uU(31,"Select Variant"),t.qZA(),t.TgZ(32,"input",22),t.NdJ("input",function(p){return r.getVariant(p.target.value)}),t.qZA(),t.TgZ(33,"mat-autocomplete",null,23),t.YNc(35,H,2,1,"ng-container",24),t.qZA()()(),t.TgZ(36,"div",11)(37,"div",21)(38,"strong"),t._uU(39,"Select Category"),t.qZA(),t._UZ(40,"input",25),t.TgZ(41,"mat-autocomplete",26,27),t.YNc(43,z,2,2,"mat-option",28),t.ALo(44,"async"),t.qZA()()(),t.TgZ(45,"div",11)(46,"div",21)(47,"strong"),t._uU(48,"Select Sub Category"),t.qZA(),t._UZ(49,"input",29),t.TgZ(50,"mat-autocomplete",26,30),t.YNc(52,j,2,2,"mat-option",28),t.ALo(53,"async"),t.qZA()()(),t.TgZ(54,"div",11)(55,"div",21)(56,"strong"),t._uU(57,"Select Brand"),t.qZA(),t._UZ(58,"input",31),t.TgZ(59,"mat-autocomplete",26,32),t.YNc(61,W,2,2,"mat-option",28),t.ALo(62,"async"),t.qZA()()()()()(),t.TgZ(63,"div",33)(64,"ul")(65,"li")(66,"a",34),t.NdJ("click",function(){return r.generatePDFAgain()}),t._UZ(67,"img",35),t.qZA()(),t.TgZ(68,"li")(69,"a",36),t.NdJ("click",function(){return r.exportToExcel()}),t._UZ(70,"img",37),t.qZA()(),t.TgZ(71,"li")(72,"a",38),t.NdJ("click",function(){return r.printTable()}),t._UZ(73,"img",39),t.qZA()()()()(),t.TgZ(74,"div",40)(75,"table",41)(76,"thead")(77,"tr")(78,"th",42),t.NdJ("click",function(){return r.sort("id")}),t._uU(79,"#"),t._UZ(80,"i",43),t.qZA(),t.TgZ(81,"th",42),t.NdJ("click",function(){return r.sort("id")}),t._uU(82,"Variant Name"),t._UZ(83,"i",43),t.qZA(),t.TgZ(84,"th",42),t.NdJ("click",function(){return r.sort("id")}),t._uU(85,"Product"),t._UZ(86,"i",43),t.qZA(),t.TgZ(87,"th",44),t.NdJ("click",function(){return r.sort("id")}),t._uU(88,"Date "),t._UZ(89,"i",43),t.qZA(),t.TgZ(90,"th",44),t.NdJ("click",function(){return r.sort("id")}),t._uU(91,"Voucher Type "),t._UZ(92,"i",43),t.qZA(),t.TgZ(93,"th",44),t.NdJ("click",function(){return r.sort("id")}),t._uU(94,"Voucher No. "),t._UZ(95,"i",43),t.qZA(),t.TgZ(96,"th",44),t.NdJ("click",function(){return r.sort("id")}),t._uU(97,"Name "),t._UZ(98,"i",43),t.qZA(),t.TgZ(99,"th",44),t.NdJ("click",function(){return r.sort("id")}),t._uU(100,"price "),t._UZ(101,"i",43),t.qZA(),t.TgZ(102,"th",44),t.NdJ("click",function(){return r.sort("id")}),t._uU(103,"In Qty "),t._UZ(104,"i",43),t.qZA(),t.TgZ(105,"th",44),t.NdJ("click",function(){return r.sort("id")}),t._uU(106,"Out Qty "),t._UZ(107,"i",43),t.qZA()()(),t.YNc(108,tt,4,11,"tbody",24),t.YNc(109,et,5,0,"tbody",24),t.qZA(),t.TgZ(110,"div",10)(111,"div",45)(112,"div",46),t._uU(113," Show per page "),t.TgZ(114,"select",47,48),t.NdJ("ngModelChange",function(p){return r.itemsPerPage=p})("change",function(){t.CHM(n);const p=t.MAs(115);return t.KtG(r.changePg(p.value))}),t.TgZ(116,"option",49),t._uU(117,"10"),t.qZA(),t.TgZ(118,"option",50),t._uU(119,"20"),t.qZA(),t.TgZ(120,"option",51),t._uU(121,"30"),t.qZA(),t.TgZ(122,"option",52),t._uU(123,"50"),t.qZA(),t.TgZ(124,"option",53),t._uU(125,"100"),t.qZA(),t.TgZ(126,"option",54),t._uU(127,"All"),t.qZA()()()(),t.TgZ(128,"div",55)(129,"div",56)(130,"pagination-controls",57),t.NdJ("pageChange",function(p){return r.p=p}),t.qZA(),t.TgZ(131,"div",58),t._uU(132),t.qZA()()()()()()()()()}if(2&e){const n=t.MAs(27),a=t.MAs(34),p=t.MAs(42),m=t.MAs(51),c=t.MAs(60);t.xp6(12),t.Q6J("formGroup",r.stockAlertform),t.xp6(7),t.Q6J("formGroup",r.stockAlertform)("rangePicker",n),t.xp6(6),t.Q6J("for",n),t.xp6(7),t.Q6J("formControl",r.productControl)("matAutocomplete",a),t.xp6(3),t.Q6J("ngIf",(null==r.productControl.value?null:r.productControl.value.length)>=1&&(null==r.productControl.value?null:r.productControl.value.length)>0),t.xp6(5),t.Q6J("formControl",r.categoryControl)("matAutocomplete",p),t.xp6(1),t.Q6J("displayWith",r.displayFn2),t.xp6(2),t.Q6J("ngForOf",t.lcZ(44,25,r.filteredCategory)),t.xp6(6),t.Q6J("formControl",r.subCategoryControl)("matAutocomplete",m),t.xp6(1),t.Q6J("displayWith",r.displayFn3),t.xp6(2),t.Q6J("ngForOf",t.lcZ(53,27,r.filteredSubCategory)),t.xp6(6),t.Q6J("formControl",r.brandControl)("matAutocomplete",c),t.xp6(1),t.Q6J("displayWith",r.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(62,29,r.filteredBrand)),t.xp6(47),t.Q6J("ngIf",(null==r.stockAlertList?null:r.stockAlertList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==r.stockAlertList?null:r.stockAlertList.length)),t.xp6(5),t.Q6J("ngModel",r.itemsPerPage),t.xp6(18),t.lnq("Showing ",r.itemsPerPage," to ",null==r.stockAlertList?null:r.stockAlertList.length," of ",r.p," entries")}},dependencies:[_.sg,_.O5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.On,u.oH,u.sg,u.u,w.LS,S.XC,S.ZL,N.ey,T.KE,T.R9,O.Nt,b.nW,b.wx,b.zY,b.By,b._g,_.Ov,_.uU,w._s,V.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:top}table[_ngcontent-%COMP%]{justify-content:center}"]}),l})()}];let ot=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[A.Bz.forChild(rt),A.Bz]}),l})();var it=s(3056),nt=s(87078),$=s(86323),U=s(92642),lt=s(95113),at=s(64155),st=s(6205),I=s(8468);const ct={User:U.n5m,UserCheck:U.uS3,FileText:U.acj,File:U.$BE};let pt=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[_.uU],imports:[_.ez,ot,I.I,u.u5,u.UX,S.Bb,T.lN,O.c,it.ZQ,nt.T,b.FA,T.lN,N.XK,lt.LD,at.vQ,I.I,st.X,$.p.pick(ct),$.p]}),l})()}}]);