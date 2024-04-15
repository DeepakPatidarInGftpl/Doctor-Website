"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9319],{53506:(w,b,a)=>{a.d(b,{x:()=>C});var _=a(92340),A=a(94650),p=a(80529);let C=(()=>{class f{constructor(r){this.http=r,this.apiUrl=`${_.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(r){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",r)}getPurchaseById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}PurchaseIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,i)}updatePurchase(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,r)}deletePurchase(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+r)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(r){return this.http.post(this.apiUrl+"/pv-api/material_inward/",r)}getMaterialById(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}MaterialIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,i)}updateMaterial(r,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,r)}deleteMaterial(r){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(r){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",r)}getPurchaseBillById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}PurchaseBillIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,i)}updatePurchaseBill(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,r)}deletePurchaseBill(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(r){return this.http.post(this.apiUrl+"/pv-api/debit_note/",r)}getDebitNotesById(r){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}DebitNotesIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,i)}updateDebitNotes(r,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,r)}deleteDebitNotes(r){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}getSearchProductById(r){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${r}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",r)}getPurchaseReturnById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}PurchaseReturnIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,i)}updatePurchaseReturn(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,r)}deletePurchaseReturn(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}filterVariant(r,i,u,S){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const v=[];return r&&v.push(`supplier=${r}`),i&&v.push(`category=${i}`),u&&v.push(`subcategory=${u}`),S&&v.push(`search=${S}`),v.length>0&&(t+="?"+v.join("&")),this.http.get(t)}}return f.\u0275fac=function(r){return new(r||f)(A.LFG(p.eN))},f.\u0275prov=A.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},9319:(w,b,a)=>{a.r(b),a.d(b,{StockAlertModule:()=>rt});var _=a(36895),A=a(89299),p=a(24006),C=a(68675),f=a(54004),k=a(96166),r=a(12983),i=a.n(r),u=a(80574),S=a(94327),t=a(94650),v=a(97185),O=a(71071),N=a(53506),D=a(42917),J=a(80927),I=a(87719),x=a(54333),T=a(47957),M=a(3238),Z=a(59549),y=a(99602),B=a(54040);function F(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"mat-option",59),t.NdJ("blur",function(){const n=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.oncheckCategory(null==n?null:n.id))}),t._uU(1),t.qZA()}if(2&s){const e=g.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function E(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"mat-option",59),t.NdJ("blur",function(){const n=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.oncheckSubCategory(null==n?null:n.id))}),t._uU(1),t.qZA()}if(2&s){const e=g.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function q(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"mat-option",59),t.NdJ("blur",function(){const n=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.oncheckBrand(null==n?null:n.id))}),t._uU(1),t.qZA()}if(2&s){const e=g.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function R(s,g){if(1&s&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA()()),2&s){const e=g.$implicit,o=g.index;t.xp6(2),t.Oqu(o+1+"."),t.xp6(2),t.Oqu(e.product_name),t.xp6(2),t.Oqu(e.available_qty),t.xp6(2),t.Oqu(e.min_qty),t.xp6(2),t.Oqu(e.mrp),t.xp6(2),t.Oqu(e.stock_value),t.xp6(2),t.Oqu(e.landing_stock_value),t.xp6(2),t.Oqu(e.created_date),t.xp6(2),t.Oqu(e.status)}}const Q=function(s,g){return{itemsPerPage:s,currentPage:g}};function Y(s,g){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,R,19,9,"tr",60),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.stockAlertList,e.key,e.reverse),t.WLB(8,Q,e.itemsPerPage,e.p)))}}function H(s,g){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",61)(3,"p",62),t._uU(4,"Data not available"),t.qZA()()()())}const V=[{path:"",component:(()=>{class s{constructor(e,o,l,n,c,h,d,m,U){this.router=e,this.fb=o,this.toastr=l,this.transactionService=n,this.purchaseService=c,this.cs=h,this.datepipe=d,this.coreService=m,this.reportService=U,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.brandControl=new p.NI(""),this.categoryControl=new p.NI(""),this.subCategoryControl=new p.NI(""),this.itemCodeControl=new p.NI(""),this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.brandList=[],this.categoryList=[],this.subCategoryList=[]}ngOnInit(){this.cs.userDetails$.subscribe(d=>{this.userDetails=d,console.log(d),this.userName=d?.username});const e=new Date,n=(e.getMonth(),e.getFullYear(),new Date(e));n.setDate(e.getDate()-14);const c=this.formatDate(n),h=this.formatDate(e);this.stockAlertform=new p.cw({start:new p.NI(c),end:new p.NI(h),category:new p.NI,subcategory:new p.NI(""),brand:new p.NI(""),costPrice:new p.NI("")}),this.startDate=this.stockAlertform.value?.start,this.endDate=this.stockAlertform.value?.end,this.category=this.stockAlertform.value?.category,this.subcategory=this.stockAlertform.value?.subcategory,this.brand=this.stockAlertform.value?.brand,this.costPrice=this.stockAlertform.value?.costPrice,this.getStockAlert(),this.getBrand(),this.getCategory(),this.getSubcategory(),this.getProduct(),this.filteredBrand=this.brandControl.valueChanges.pipe((0,C.O)(""),(0,f.U)(d=>{const m="string"==typeof d?d:d?.title;return m?this._filter(m):this.brandList.slice()})),this.filteredCategory=this.categoryControl.valueChanges.pipe((0,C.O)(""),(0,f.U)(d=>{const m="string"==typeof d?d:d?.title;return m?this._filter2(m):this.categoryList.slice()})),this.filteredSubCategory=this.subCategoryControl.valueChanges.pipe((0,C.O)(""),(0,f.U)(d=>{const m="string"==typeof d?d:d?.title;return m?this._filter3(m):this.subCategoryList.slice()}))}getproductHistory(){throw new Error("Method not implemented.")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const o=e?e.toLowerCase():"";return console.log(o),this.brandList.filter(l=>l?.title&&l.title.toLowerCase().includes(o))}displayFn(e){return e&&e?.title?e?.title:""}_filter2(e){const o=e?e.toLowerCase():"";return console.log(o),this.categoryList.filter(l=>l?.title&&l.title.toLowerCase().includes(o))}displayFn2(e){return e&&e?.title?e?.title:""}_filter3(e){const o=e?e.toLowerCase():"";return console.log(o),this.subCategoryList.filter(l=>l?.title&&l.title.toLowerCase().includes(o))}displayFn3(e){return e&&e?.title?e?.title:""}_filter4(e){const o=e?e.toLowerCase():"";return console.log(o),this.productList.filter(l=>l?.item_code&&l.item_code.toLowerCase().includes(o))}displayFn4(e){return e&&e?.item_code?e?.item_code:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}search(){if(""===this.titlee)this.getStockAlert();else{const e=this.titlee.toLocaleLowerCase();this.stockAlertList=this.stockAlertList.filter(o=>{const l=o?.user?.party_name.toLocaleLowerCase(),n=o?.payment_voucher_no.toLocaleLowerCase()||"";return!(!l.includes(e)&&!n.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,o,l){const n=(e-1)*o;return`Showing ${n+1}\u2013${Math.min(n+o-1,l-1)+1} of ${l} results`}getStockAlert(){console.log(this.brand),this.reportService.getStockAlert(this.startDate,this.endDate,this.category,this.subcategory,this.brand,this.costPrice).subscribe(e=>{console.log(e),this.stockAlert=e,this.stockAlertList=e})}oncheckBrand(e){console.log(e),this.dataId=e,this.stockAlertform.patchValue({brand:this.dataId}),console.warn(this.stockAlertform.value),this.brand=this.stockAlertform.value?.brand,this?.getStockAlert()}oncheckCategory(e){console.log(e),this.dataId=e,this.stockAlertform.patchValue({category:e}),console.warn(this.stockAlertform.value),this.category=this.stockAlertform.value?.category,this?.getStockAlert()}oncheckSubCategory(e){console.log(e),this.stockAlertform.patchValue({subcategory:e}),console.warn(this.stockAlertform.value),this.subcategory=this.stockAlertform.value?.subcategory,this?.getStockAlert()}oncheckCostPrice(e){this.stockAlertform.patchValue({costPrice:e}),console.warn(this.stockAlertform.value),this.costPrice=this.stockAlertform.value?.costPrice,this?.getStockAlert()}getSelectedStockAlertDates(){console.log(this.stockAlertform.value);const e=this.datepipe.transform(this.stockAlertform.value.start,"yyyy-MM-dd"),o=this.datepipe.transform(this.stockAlertform.value.end,"yyyy-MM-dd");console.log(e),console.log(o),this.startDate=e,this.endDate=o,this?.getStockAlert()}getBrand(){this.coreService.getBrand().subscribe(e=>{console.log(e),this.brandList=e})}getCategory(){this.coreService.getCategory().subscribe(e=>{console.log(e),this.categoryList=e})}getSubcategory(){this.coreService.getSubcategory().subscribe(e=>{console.log(e),this.subCategoryList=e})}generatePDF(){const e=new k.default,n=`Date Range From: ${this.startDate} - ${this.endDate}`,c=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Stock Alert Report",84,10),e.text(c,10,18),e.text(n,10,22),e.text("",10,25),i()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Stock Alert.pdf")}generatePDFAgain(){const e=new k.default,n=`Date Range From: ${this.startDate} - ${this.endDate}`,c=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Stock Alert Report",82,10),e.text(c,10,18),e.text(n,10,22),e.text("",10,25),i()(e,{head:[["#","Product Name","Available Qty.","Min Qty","MRP.","Stock Value","Landing Stock Value","Created Date","Status"]],body:this.stockAlertList.map((h,d)=>[d+1,h.product_name,h.available_qty,h.min_qty,h.mrp,h.stock_value,h.landing_stock_value,h.created_date,h.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Stock _Alert .pdf")}getVisibleDataFromTable(){const e=[],o=document.getElementById("mytable");if(o){const l=o.querySelector("thead tr");if(l){const c=[];l.querySelectorAll("th").forEach(h=>{const d=h.textContent?.trim();d&&"Is Active"!==d&&"Action"!==d&&c.push(d)}),e.push(c)}o.querySelectorAll("tbody tr").forEach(c=>{const h=[];c.querySelectorAll("td").forEach(d=>{const m=d.textContent?.trim();m&&h.push(m)}),e.push(h)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),o=u.P6.aoa_to_sheet(e),l=u.P6.book_new();u.P6.book_append_sheet(l,o,"Sheet1");const n=u.cW(l,{bookType:"xlsx",type:"array"}),c=new Blob([n],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,S.saveAs)(c,"Stockalert.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const l=document.querySelector(".titl");if(!l)return void console.error("Title element with class 'titl' not found.");const n=l.outerHTML,h=e.cloneNode(!0).outerHTML,m="<style>.spaced-title { margin-top: 80px; }</style>"+n.replace("titl","spaced-title")+h,U=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=m,window.print(),document.body.innerHTML=U}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.stockAlertList?.length)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(A.F0),t.Y36(p.qu),t.Y36(v._W),t.Y36(O.p),t.Y36(N.x),t.Y36(D.J),t.Y36(_.uU),t.Y36(J.p),t.Y36(I.r))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-stock-alert"]],decls:128,vars:28,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],["type","text","placeholder","Enter Product",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],["type","text","placeholder","Enter Sub Category",1,"form-control",3,"formControl","matAutocomplete"],["autos","matAutocomplete"],["type","text","placeholder","Enter Brand",1,"form-control",3,"formControl","matAutocomplete"],["autob","matAutocomplete"],["type","number","placeholder","Enter Cost Price","formControlName","costPrice",1,"form-control",3,"input"],["val",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[3,"value","blur"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(e,o){if(1&e){const l=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Stock Alert"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Stock Alert"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return o.getSelectedStockAlertDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return o.getSelectedStockAlertDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()(),t.TgZ(28,"div",21)(29,"div",22)(30,"strong"),t._uU(31,"Select Category"),t.qZA(),t._UZ(32,"input",23),t.TgZ(33,"mat-autocomplete",24,25),t.YNc(35,F,2,2,"mat-option",26),t.ALo(36,"async"),t.qZA()()(),t.TgZ(37,"div",21)(38,"div",22)(39,"strong"),t._uU(40,"Select Sub Category"),t.qZA(),t._UZ(41,"input",27),t.TgZ(42,"mat-autocomplete",24,28),t.YNc(44,E,2,2,"mat-option",26),t.ALo(45,"async"),t.qZA()()(),t.TgZ(46,"div",21)(47,"div",22)(48,"strong"),t._uU(49,"Select Brand"),t.qZA(),t._UZ(50,"input",29),t.TgZ(51,"mat-autocomplete",24,30),t.YNc(53,q,2,2,"mat-option",26),t.ALo(54,"async"),t.qZA()()(),t.TgZ(55,"div",21)(56,"div",22)(57,"strong"),t._uU(58,"Enter Cost Price"),t.qZA(),t.TgZ(59,"input",31,32),t.NdJ("input",function(){t.CHM(l);const c=t.MAs(60);return t.KtG(o.oncheckCostPrice(c.value))}),t.qZA()()()()()(),t.TgZ(61,"div",33)(62,"ul")(63,"li")(64,"a",34),t.NdJ("click",function(){return o.generatePDFAgain()}),t._UZ(65,"img",35),t.qZA()(),t.TgZ(66,"li")(67,"a",36),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(68,"img",37),t.qZA()(),t.TgZ(69,"li")(70,"a",38),t.NdJ("click",function(){return o.printTable()}),t._UZ(71,"img",39),t.qZA()()()()(),t.TgZ(72,"div",40)(73,"table",41)(74,"thead")(75,"tr")(76,"th",42),t.NdJ("click",function(){return o.sort("id")}),t._uU(77,"#"),t._UZ(78,"i",43),t.qZA(),t.TgZ(79,"th",42),t.NdJ("click",function(){return o.sort("id")}),t._uU(80,"Product Name "),t._UZ(81,"i",43),t.qZA(),t.TgZ(82,"th",42),t.NdJ("click",function(){return o.sort("id")}),t._uU(83,"Available Qty "),t._UZ(84,"i",43),t.qZA(),t.TgZ(85,"th",42),t.NdJ("click",function(){return o.sort("id")}),t._uU(86,"Min Qty "),t._UZ(87,"i",43),t.qZA(),t.TgZ(88,"th",42),t.NdJ("click",function(){return o.sort("id")}),t._uU(89,"MRP. "),t._UZ(90,"i",43),t.qZA(),t.TgZ(91,"th",42),t.NdJ("click",function(){return o.sort("id")}),t._uU(92,"Stock Value "),t._UZ(93,"i",43),t.qZA(),t.TgZ(94,"th",42),t.NdJ("click",function(){return o.sort("id")}),t._uU(95,"Landing Stock Value "),t._UZ(96,"i",43),t.qZA(),t.TgZ(97,"th",42),t.NdJ("click",function(){return o.sort("id")}),t._uU(98,"Created Date "),t._UZ(99,"i",43),t.qZA(),t.TgZ(100,"th",42),t.NdJ("click",function(){return o.sort("id")}),t._uU(101,"Status "),t._UZ(102,"i",43),t.qZA()()(),t.YNc(103,Y,4,11,"tbody",44),t.YNc(104,H,5,0,"tbody",44),t.qZA(),t.TgZ(105,"div",10)(106,"div",45)(107,"div",46),t._uU(108," Show per page "),t.TgZ(109,"select",47,48),t.NdJ("ngModelChange",function(c){return o.itemsPerPage=c})("change",function(){t.CHM(l);const c=t.MAs(110);return t.KtG(o.changePg(c.value))}),t.TgZ(111,"option",49),t._uU(112,"10"),t.qZA(),t.TgZ(113,"option",50),t._uU(114,"20"),t.qZA(),t.TgZ(115,"option",51),t._uU(116,"30"),t.qZA(),t.TgZ(117,"option",52),t._uU(118,"50"),t.qZA(),t.TgZ(119,"option",53),t._uU(120,"100"),t.qZA(),t.TgZ(121,"option",54),t._uU(122,"All"),t.qZA()()()(),t.TgZ(123,"div",55)(124,"div",56)(125,"pagination-controls",57),t.NdJ("pageChange",function(c){return o.p=c}),t.qZA(),t.TgZ(126,"div",58),t._uU(127),t.qZA()()()()()()()()()}if(2&e){const l=t.MAs(27),n=t.MAs(34),c=t.MAs(43),h=t.MAs(52);t.xp6(12),t.Q6J("formGroup",o.stockAlertform),t.xp6(7),t.Q6J("formGroup",o.stockAlertform)("rangePicker",l),t.xp6(6),t.Q6J("for",l),t.xp6(7),t.Q6J("formControl",o.categoryControl)("matAutocomplete",n),t.xp6(1),t.Q6J("displayWith",o.displayFn2),t.xp6(2),t.Q6J("ngForOf",t.lcZ(36,22,o.filteredCategory)),t.xp6(6),t.Q6J("formControl",o.subCategoryControl)("matAutocomplete",c),t.xp6(1),t.Q6J("displayWith",o.displayFn3),t.xp6(2),t.Q6J("ngForOf",t.lcZ(45,24,o.filteredSubCategory)),t.xp6(6),t.Q6J("formControl",o.brandControl)("matAutocomplete",h),t.xp6(1),t.Q6J("displayWith",o.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(54,26,o.filteredBrand)),t.xp6(50),t.Q6J("ngIf",(null==o.stockAlertList?null:o.stockAlertList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==o.stockAlertList?null:o.stockAlertList.length)),t.xp6(5),t.Q6J("ngModel",o.itemsPerPage),t.xp6(18),t.lnq(" Showing ",o.itemsPerPage," to ",null==o.stockAlertList?null:o.stockAlertList.length," of ",o.p," entries ")}},dependencies:[_.sg,_.O5,p._Y,p.YN,p.Kr,p.Fj,p.wV,p.EJ,p.JJ,p.JL,p.On,p.oH,p.sg,p.u,x.LS,T.XC,T.ZL,M.ey,Z.KE,Z.R9,y.nW,y.wx,y.zY,y.By,y._g,_.Ov,x._s,B.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),s})()}];let z=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[A.Bz.forChild(V),A.Bz]}),s})();var W=a(44144),j=a(3056),K=a(87078),L=a(86323),P=a(92642),G=a(95113),X=a(64155),tt=a(6205),$=a(8468);const et={User:P.n5m,UserCheck:P.uS3,FileText:P.acj,File:P.$BE};let rt=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[_.uU],imports:[_.ez,z,$.I,p.u5,p.UX,T.Bb,Z.lN,W.c,j.ZQ,K.T,y.FA,Z.lN,M.XK,G.LD,X.vQ,$.I,tt.X,L.p.pick(et),L.p]}),s})()}}]);