"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[32441],{32441:(dt,A,a)=>{a.r(A),a.d(A,{StockRegisterModule:()=>at});var u=a(36895),S=a(4392),T=a(49671),d=a(24006),m=a(68675),f=a(54004),M=a(96166),L=a(12983),w=a.n(L),_=a(80574),O=a(94327),t=a(94650),P=a(42917),J=a(80927),R=a(87719),N=a(72170),D=a(43443),v=a(47957),x=a(3238),C=a(59549),b=a(44144),h=a(99602),k=a(54333),U=a(54040);function F(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"a",71)(1,"input",72,73),t.NdJ("change",function(n){const s=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.SelectedBranch(s.id,n.target.checked))}),t.qZA(),t.TgZ(3,"label",74),t.NdJ("click",function(n){t.CHM(e);const i=t.oxw(2);return t.KtG(i.onLabelClick(n))}),t._uU(4),t.qZA()()}if(2&r){const e=c.$implicit,o=c.index,n=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",n.selectData.includes(e.id))("id","checkboxCat-"+o),t.xp6(2),t.Q6J("for","checkboxCat-"+o),t.xp6(1),t.Oqu(e.title)}}function B(r,c){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const I=function(){return{standalone:!0}};function q(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"div",64)(1,"div",65)(2,"button",66),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",67)(5,"li")(6,"input",68),t.NdJ("ngModelChange",function(n){t.CHM(e);const i=t.oxw();return t.KtG(i.searchBranch=n)})("ngModelChange",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,F,5,5,"a",69),t.qZA()()(),t.TgZ(9,"div",70),t.YNc(10,B,2,1,"span",32),t.qZA()()}if(2&r){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,I)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function Q(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"mat-option",75),t.NdJ("blur",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.oncheckproduct(null==i?null:i.id))}),t._uU(1),t.qZA()}if(2&r){const e=c.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function Y(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"mat-option",78),t.NdJ("onSelectionChange",function(){t.CHM(e);const n=t.oxw().$implicit,i=t.oxw(2);return t.KtG(i.oncheckVariant(null==n?null:n.id))}),t._uU(1),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)),t.xp6(1),t.hij(" ",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)," ")}}function E(r,c){if(1&r&&(t.ynx(0),t.YNc(1,Y,2,2,"mat-option",77),t.BQk()),2&r){const e=c.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function V(r,c){if(1&r&&(t.ynx(0),t.YNc(1,E,2,1,"ng-container",76),t.BQk()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.variantList)}}function $(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"mat-option",75),t.NdJ("blur",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.oncheckCategory(null==i?null:i.id))}),t._uU(1),t.qZA()}if(2&r){const e=c.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function H(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"mat-option",75),t.NdJ("blur",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.oncheckSubCategory(null==i?null:i.id))}),t._uU(1),t.qZA()}if(2&r){const e=c.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function z(r,c){if(1&r){const e=t.EpF();t.TgZ(0,"mat-option",75),t.NdJ("blur",function(){const i=t.CHM(e).$implicit,s=t.oxw();return t.KtG(s.oncheckBrand(null==i?null:i.id))}),t._uU(1),t.qZA()}if(2&r){const e=c.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function G(r,c){if(1&r&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()()),2&r){const e=c.$implicit,o=c.index;t.xp6(2),t.Oqu(o+1+"."),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.product_title),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.variant_name),t.xp6(2),t.Oqu(null==e||null==e.product?null:e.product.sku),t.xp6(2),t.Oqu(e.in_qty),t.xp6(2),t.Oqu(e.out_qty),t.xp6(2),t.Oqu(e.closing)}}const j=function(r,c){return{itemsPerPage:r,currentPage:c}};function K(r,c){if(1&r&&(t.TgZ(0,"tbody"),t.YNc(1,G,15,7,"tr",76),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.stockAlertList,e.key,e.reverse),t.WLB(8,j,e.itemsPerPage,e.p)))}}function W(r,c){1&r&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",79)(3,"p",80),t._uU(4,"Data not available"),t.qZA()()()())}const X=[{path:"",component:(()=>{class r{constructor(e,o,n,i,s,g){this.cs=e,this.datepipe=o,this.coreService=n,this.reportService=i,this.saleService=s,this.commonService=g,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.brandControl=new d.NI(""),this.categoryControl=new d.NI(""),this.subCategoryControl=new d.NI(""),this.itemCodeControl=new d.NI(""),this.supplierControl=new d.NI(""),this.productControl=new d.NI(""),this.isAdmin=!1,this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.selectBrand=[],this.selectCategory=[],this.selectSubCat=[],this.selectProduct=[],this.selectVariant=[],this.brandList=[],this.categoryList=[],this.subCategoryList=[],this.isSearch=!1,this.variantList=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let l=localStorage.getItem("financialYear");console.warn(JSON.parse(l));let p=JSON.parse(l);this.fyID=p}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:o}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=o,this.cs.userDetails$.subscribe(l=>{this.isAdmin="admin"==l?.role,this.getBranch()}),this.cs.userDetails$.subscribe(l=>{this.userDetails=l,console.log(l),this.userName=l?.username});const n=new Date,i=new Date(n);i.setDate(n.getDate()-14);const s=this.formatDate(i),g=this.formatDate(n);this.stockAlertform=new d.cw({start:new d.NI(s,this.commonService.dateRangeValidator(this.financialYear)),end:new d.NI(g,this.commonService.dateRangeValidator(this.financialYear)),category:new d.NI,subcategory:new d.NI(""),brand:new d.NI(""),product:new d.NI(""),variant:new d.NI("")}),this.commonService.validateAndClearDates(this.stockAlertform,this.minDate,this.maxDate),this.startDate=this.stockAlertform.value?.start,this.endDate=this.stockAlertform.value?.end,this.category=this.stockAlertform.value?.category,this.subcategory=this.stockAlertform.value?.subcategory,this.brand=this.stockAlertform.value?.brand,this.product=this.stockAlertform.value?.product,this.variant=this.stockAlertform.value?.variant,this.getStockAlert(),this.getBrand(),this.getCategory(),this.getSubcategory(),this.getProduct(),this.filteredBrand=this.brandControl.valueChanges.pipe((0,m.O)(""),(0,f.U)(l=>{const p="string"==typeof l?l:l?.title;return p?this._filter(p):this.brandList.slice()})),this.filteredCategory=this.categoryControl.valueChanges.pipe((0,m.O)(""),(0,f.U)(l=>{const p="string"==typeof l?l:l?.title;return p?this._filter2(p):this.categoryList.slice()})),this.filteredSubCategory=this.subCategoryControl.valueChanges.pipe((0,m.O)(""),(0,f.U)(l=>{const p="string"==typeof l?l:l?.title;return p?this._filter3(p):this.subCategoryList.slice()})),this.filteredProduct=this.productControl.valueChanges.pipe((0,m.O)(""),(0,f.U)(l=>{const p="string"==typeof l?l:l?.title;return p?this._filter5(p):this.productList.slice()})),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,m.O)(""),(0,f.U)(l=>{const p="string"==typeof l?l:l?.title;return p?this._filter6(p):this.productList.slice()}))}getproductHistory(){throw new Error("Method not implemented.")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const o=e?e.toLowerCase():"";return console.log(o),this.brandList.filter(n=>n?.title&&n.title.toLowerCase().includes(o))}displayFn(e){return e&&e?.title?e?.title:""}_filter2(e){const o=e?e.toLowerCase():"";return this.categoryList.filter(n=>n?.title&&n.title.toLowerCase().includes(o))}displayFn2(e){return e&&e?.title?e?.title:""}_filter3(e){const o=e?e.toLowerCase():"";return console.log(o),this.subCategoryList.filter(n=>n?.title&&n.title.toLowerCase().includes(o))}displayFn3(e){return e&&e?.title?e?.title:""}_filter4(e){const o=e?e.toLowerCase():"";return console.log(o),this.productList.filter(n=>n?.item_code&&n.item_code.toLowerCase().includes(o))}displayFn4(e){return e&&e?.item_code?e?.item_code:""}_filter6(e){const o=e?e.toLowerCase():"";return console.log(o),this.productList.filter(n=>n?.title&&n.title.toLowerCase().includes(o)||n?.name&&n.name.toLowerCase().includes(o))}displayFn6(e){return e&&e?.title||e?.name?e?.title||e?.name:""}_filter5(e){const o=e?e.toLowerCase():"";return console.log(o),this.productList.filter(n=>n?.title&&n.title.toLowerCase().includes(o)||n?.name&&n.name.toLowerCase().includes(o))}displayFn5(e){return e&&e?.title||e?.name?e?.title||e?.name:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}search(){if(""===this.titlee)this.getStockAlert();else{const e=this.titlee.toLocaleLowerCase();this.stockAlertList=this.stockAlertList.filter(o=>{const n=o?.user?.party_name.toLocaleLowerCase(),i=o?.payment_voucher_no.toLocaleLowerCase()||"";return!(!n.includes(e)&&!i.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(o=>o.isSelected=!e)}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,o,n){const i=(e-1)*o;return`Showing ${i+1}\u2013${Math.min(i+o-1,n-1)+1} of ${n} results`}getStockAlert(){this.reportService.getStockRegister(this.startDate,this.endDate,this.categoryArray,this.subCatArray,this.brandArray,this.productsArray,this.variantsArray,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.stockAlert=e,this.stockAlertList=e})}oncheckBrand(e){const o=this.selectBrand.indexOf(e);-1!==o?this.selectBrand.splice(o,1):this.selectBrand.push(e),console.log(this.selectBrand,"selected data"),this.selectBrand.length>0&&(this.brandArray=JSON.stringify(this.selectBrand),console.log(this.brandArray,"brandArray"),this.brandControl.reset(),this.getStockAlert())}oncheckCategory(e){const o=this.selectCategory.indexOf(e);-1!==o?this.selectCategory.splice(o,1):this.selectCategory.push(e),console.log(this.selectCategory,"selected data"),this.selectCategory.length>0&&(this.categoryArray=JSON.stringify(this.selectCategory),console.log(this.categoryArray,"categoryArray"),this.categoryControl.reset(),this.getStockAlert())}oncheckSubCategory(e){const o=this.selectSubCat.indexOf(e);-1!==o?this.selectSubCat.splice(o,1):this.selectSubCat.push(e),console.log(this.selectSubCat,"selected data"),this.selectSubCat.length>0&&(this.subCatArray=JSON.stringify(this.selectSubCat),console.log(this.subCatArray,"subCatArray"),this.subCategoryControl.reset(),this.getStockAlert())}oncheckproduct(e){const o=this.selectProduct.indexOf(e);-1!==o?this.selectProduct.splice(o,1):this.selectProduct.push(e),console.log(this.selectProduct,"selected data"),this.selectProduct.length>0&&(this.productsArray=JSON.stringify(this.selectProduct),console.log(this.productsArray,"productsArray"),this.productControl.reset(),this.getStockAlert())}oncheckVariant(e){const o=this.selectVariant.indexOf(e);-1!==o?this.selectVariant.splice(o,1):this.selectVariant.push(e),console.log(this.selectVariant,"selected data"),this.selectVariant.length>0&&(this.variantsArray=JSON.stringify(this.selectVariant),console.log(this.variantsArray,"variantsArray"),this.supplierControl.reset(),this.getStockAlert())}getSelectedStockAlertDates(){console.log(this.stockAlertform.value);const e=this.datepipe.transform(this.stockAlertform.value.start,"yyyy-MM-dd"),o=this.datepipe.transform(this.stockAlertform.value.end,"yyyy-MM-dd");console.log(e),console.log(o),this.startDate=e,this.endDate=o,this?.getStockAlert()}getBrand(){this.coreService.getBrand().subscribe(e=>{console.log(e),this.brandList=e})}getCategory(){this.coreService.getCategory().subscribe(e=>{console.log(e),this.categoryList=e})}getSubcategory(){this.coreService.getSubcategory().subscribe(e=>{console.log(e),this.subCategoryList=e})}getVariant(e){this.searchLength=e,this.isSearch=!0,e.toString().length>=3&&this.search.toString().length>=3&&this.saleService.filterVariant("","",e).subscribe(o=>{console.log(o),this.isSearch=!1,this.variantList=o,console.log(this.variantList)})}generatePDFAgain(){var e=this;return(0,T.Z)(function*(){const o=e.coreService.profileData$.value,n=yield e.cs.loadImageReport(),i=new M.default("p","mm","a4"),s=e.datepipe.transform(new Date,"yyyy-MM-dd");try{i.setFontSize(12),i.setTextColor(33,43,54),i.addImage(n,"PNG",86,5,31,10),i.setFontSize(25),i.text("Stock Register Report",52,25),i.setFontSize(12),i.text(`Business Location: ${o?.branch}`,14,39),i.text(`From Date: ${e.formatDate(e.stockAlertform.get("start").value)}`,14,45),i.text(`User: ${o?.role}`,172,33),i.text(`Print Date: ${s}`,153,39),i.text(`To Date: ${e.formatDate(e.stockAlertform.get("end").value)}`,157,45),w()(i,{head:[["#","ProductTitle","VariantName","Sku","IN Qty","Out Qty","Closing"]],body:e.stockAlertList.map((g,l)=>[l+1,g.product.product_title,g.product.variant_name,g.product.sku,g.in_qty,g.out_qty,g.closing]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:49,margin:{top:49}}),i.save("Stock _Register .pdf")}catch(g){console.log(g)}})()}getVisibleDataFromTable(){const e=[],o=document.getElementById("mytable");if(o){const n=o.querySelector("thead tr");if(n){const s=[];n.querySelectorAll("th").forEach(g=>{const l=g.textContent?.trim();l&&"Is Active"!==l&&"Action"!==l&&s.push(l)}),e.push(s)}o.querySelectorAll("tbody tr").forEach(s=>{const g=[];s.querySelectorAll("td").forEach(l=>{const p=l.textContent?.trim();p&&g.push(p)}),e.push(g)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),o=_.P6.aoa_to_sheet(e),n=_.P6.book_new();_.P6.book_append_sheet(n,o,"Sheet1");const i=_.cW(n,{bookType:"xlsx",type:"array"}),s=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,O.saveAs)(s,"Stockregister.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const n=document.querySelector(".titl");if(!n)return void console.error("Title element with class 'titl' not found.");const i=n.outerHTML,g=e.cloneNode(!0).outerHTML,p="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+g,ct=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=p,window.print(),document.body.innerHTML=ct}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.stockAlertList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,o){if(o)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const n=this.selectData.findIndex(i=>i==e);console.log(n),-1!==n&&this.selectData.splice(n,1),this.ngOnInit(),console.log(this.selectData)}}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(P.J),t.Y36(u.uU),t.Y36(J.p),t.Y36(R.r),t.Y36(N.M),t.Y36(D.R))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-stock-register"]],decls:137,vars:40,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-3","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],["type","text","placeholder","Enter Product",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],["type","text","placeholder","Search Variant","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[4,"ngIf"],[1,"col-lg-2","col-sm-6","col-12"],["autoc","matAutocomplete"],["type","text","placeholder","Enter Sub Category",1,"form-control",3,"formControl","matAutocomplete"],["autosc","matAutocomplete"],["type","text","placeholder","Enter Brand",1,"form-control",3,"formControl","matAutocomplete"],["autob","matAutocomplete"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[3,"value","blur"],[4,"ngFor","ngForOf"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["colspan","10"],[1,"text-center"]],template:function(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Stock Register"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Stock Register"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,q,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return o.getSelectedStockAlertDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return o.getSelectedStockAlertDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",24)(33,"div",25)(34,"strong"),t._uU(35,"Select Product"),t.qZA(),t._UZ(36,"input",26),t.TgZ(37,"mat-autocomplete",27,28),t.YNc(39,Q,2,2,"mat-option",29),t.ALo(40,"async"),t.qZA()()(),t.TgZ(41,"div",24)(42,"div",25)(43,"strong"),t._uU(44,"Select Variant"),t.qZA(),t.TgZ(45,"input",30),t.NdJ("input",function(s){return o.getVariant(s.target.value)}),t.qZA(),t.TgZ(46,"mat-autocomplete",null,31),t.YNc(48,V,2,1,"ng-container",32),t.qZA()()(),t.TgZ(49,"div",33)(50,"div",25)(51,"strong"),t._uU(52,"Select Category"),t.qZA(),t._UZ(53,"input",26),t.TgZ(54,"mat-autocomplete",27,34),t.YNc(56,$,2,2,"mat-option",29),t.ALo(57,"async"),t.qZA()()(),t.TgZ(58,"div",33)(59,"div",25)(60,"strong"),t._uU(61,"Select Sub Category"),t.qZA(),t._UZ(62,"input",35),t.TgZ(63,"mat-autocomplete",27,36),t.YNc(65,H,2,2,"mat-option",29),t.ALo(66,"async"),t.qZA()()(),t.TgZ(67,"div",33)(68,"div",25)(69,"strong"),t._uU(70,"Select Brand"),t.qZA(),t._UZ(71,"input",37),t.TgZ(72,"mat-autocomplete",27,38),t.YNc(74,z,2,2,"mat-option",29),t.ALo(75,"async"),t.qZA()()()()()(),t.TgZ(76,"div",39)(77,"ul")(78,"li")(79,"a",40),t.NdJ("click",function(){return o.generatePDFAgain()}),t._UZ(80,"img",41),t.qZA()(),t.TgZ(81,"li")(82,"a",42),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(83,"img",43),t.qZA()(),t.TgZ(84,"li")(85,"a",44),t.NdJ("click",function(){return o.printTable()}),t._UZ(86,"img",45),t.qZA()()()()(),t.TgZ(87,"div",46)(88,"table",47)(89,"thead")(90,"tr")(91,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(92,"#"),t._UZ(93,"i",49),t.qZA(),t.TgZ(94,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(95,"ProductTitle "),t._UZ(96,"i",49),t.qZA(),t.TgZ(97,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(98,"VariantName "),t._UZ(99,"i",49),t.qZA(),t.TgZ(100,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(101,"Sku "),t._UZ(102,"i",49),t.qZA(),t.TgZ(103,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(104,"In Qty "),t._UZ(105,"i",49),t.qZA(),t.TgZ(106,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(107,"Out Qty "),t._UZ(108,"i",49),t.qZA(),t.TgZ(109,"th",48),t.NdJ("click",function(){return o.sort("id")}),t._uU(110,"Closing "),t._UZ(111,"i",49),t.qZA()()(),t.YNc(112,K,4,11,"tbody",32),t.YNc(113,W,5,0,"tbody",32),t.qZA(),t.TgZ(114,"div",6)(115,"div",50)(116,"div",51),t._uU(117," Show per page "),t.TgZ(118,"select",52,53),t.NdJ("ngModelChange",function(s){return o.itemsPerPage=s})("change",function(){t.CHM(n);const s=t.MAs(119);return t.KtG(o.changePg(s.value))}),t.TgZ(120,"option",54),t._uU(121,"10"),t.qZA(),t.TgZ(122,"option",55),t._uU(123,"20"),t.qZA(),t.TgZ(124,"option",56),t._uU(125,"30"),t.qZA(),t.TgZ(126,"option",57),t._uU(127,"50"),t.qZA(),t.TgZ(128,"option",58),t._uU(129,"100"),t.qZA(),t.TgZ(130,"option",59),t._uU(131,"All"),t.qZA()()()(),t.TgZ(132,"div",60)(133,"div",61)(134,"pagination-controls",62),t.NdJ("pageChange",function(s){return o.p=s}),t.qZA(),t.TgZ(135,"div",63),t._uU(136),t.qZA()()()()()()()()()}if(2&e){const n=t.MAs(31),i=t.MAs(38),s=t.MAs(47),g=t.MAs(55),l=t.MAs(64),p=t.MAs(73);t.xp6(11),t.Q6J("ngIf",o.isAdmin),t.xp6(5),t.Q6J("formGroup",o.stockAlertform),t.xp6(7),t.Q6J("formGroup",o.stockAlertform)("rangePicker",n)("min",o.minDate)("max",o.maxDate),t.xp6(6),t.Q6J("for",n),t.xp6(7),t.Q6J("formControl",o.supplierControl)("matAutocomplete",i),t.xp6(1),t.Q6J("displayWith",o.displayFn5),t.xp6(2),t.Q6J("ngForOf",t.lcZ(40,32,o.filteredSuppliers)),t.xp6(6),t.Q6J("formControl",o.productControl)("matAutocomplete",s),t.xp6(3),t.Q6J("ngIf",(null==o.productControl.value?null:o.productControl.value.length)>=1&&(null==o.productControl.value?null:o.productControl.value.length)>0),t.xp6(5),t.Q6J("formControl",o.categoryControl)("matAutocomplete",g),t.xp6(1),t.Q6J("displayWith",o.displayFn2),t.xp6(2),t.Q6J("ngForOf",t.lcZ(57,34,o.filteredCategory)),t.xp6(6),t.Q6J("formControl",o.subCategoryControl)("matAutocomplete",l),t.xp6(1),t.Q6J("displayWith",o.displayFn3),t.xp6(2),t.Q6J("ngForOf",t.lcZ(66,36,o.filteredSubCategory)),t.xp6(6),t.Q6J("formControl",o.brandControl)("matAutocomplete",p),t.xp6(1),t.Q6J("displayWith",o.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(75,38,o.filteredBrand)),t.xp6(38),t.Q6J("ngIf",(null==o.stockAlertList?null:o.stockAlertList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==o.stockAlertList?null:o.stockAlertList.length)),t.xp6(5),t.Q6J("ngModel",o.itemsPerPage),t.xp6(18),t.lnq(" Showing ",o.itemsPerPage," to ",null==o.stockAlertList?null:o.stockAlertList.length," of ",o.p," entries ")}},dependencies:[u.sg,u.O5,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.oH,d.sg,d.u,v.XC,v.ZL,x.ey,C.KE,C.R9,b.Nt,h.nW,h.wx,h.zY,h.By,h._g,k.LS,u.Ov,k._s,U.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;letter-spacing:3px;font-weight:700;padding-left:30px}.head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:3px;font-weight:700}.head6[_ngcontent-%COMP%]{font-size:18px;padding-left:10%}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),r})()}];let tt=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[S.Bz.forChild(X),S.Bz]}),r})();var et=a(3056),ot=a(87078),Z=a(86323),y=a(92642),nt=a(95113),it=a(64155),rt=a(6205),lt=a(8468);const st={User:y.n5m,UserCheck:y.uS3,FileText:y.acj,File:y.$BE};let at=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({providers:[u.uU],imports:[u.ez,tt,d.u5,d.UX,v.Bb,C.lN,b.c,et.ZQ,ot.T,h.FA,C.lN,x.XK,nt.LD,it.vQ,lt.I,rt.X,Z.p.pick(st),Z.p]}),r})()}}]);