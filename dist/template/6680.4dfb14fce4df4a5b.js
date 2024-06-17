"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6680],{53506:(L,U,o)=>{o.d(U,{x:()=>A});var v=o(92340),b=o(94650),d=o(80529);let A=(()=>{class x{constructor(i){this.http=i,this.apiUrl=`${v.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(i){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+i)}getPurchaseFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let t=this.apiUrl+"/pv-api/purchase_order/";const c=[];if(i&&c.push(`financial_year=${i}`),r&&r.length>0){const h=JSON.stringify(r);console.log(h),console.log(h?.length),c.push(`branch=${h}`)}return c.length>0&&(t+="?"+c.join("&")),this.http.get(t)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(i){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",i)}getPurchaseById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}PurchaseIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,r)}updatePurchase(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,i)}deletePurchase(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}searchProduct(i){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+i)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let t=this.apiUrl+"/pv-api/material_inward/";const c=[];if(i&&c.push(`financial_year=${i}`),r&&r.length>0){const h=JSON.stringify(r);console.log(h),console.log(h?.length),c.push(`branch=${h}`)}return c.length>0&&(t+="?"+c.join("&")),this.http.get(t)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(i){return this.http.post(this.apiUrl+"/pv-api/material_inward/",i)}getMaterialById(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}MaterialIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,r)}updateMaterial(i,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,i)}deleteMaterial(i){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getPurchaseBillFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let t=this.apiUrl+"/pv-api/purchase_bill/";const c=[];if(i&&c.push(`financial_year=${i}`),r&&r.length>0){const h=JSON.stringify(r);console.log(h),console.log(h?.length),c.push(`branch=${h}`)}return c.length>0&&(t+="?"+c.join("&")),this.http.get(t)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(i){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",i)}getPurchaseBillById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}PurchaseBillIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,r)}updatePurchaseBill(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,i)}deletePurchaseBill(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getDebitNotes(i,r){console.log(r,"branch"),console.log(r.length,"branch");let t=this.apiUrl+"/pv-api/debit_note/";const c=[];if(i&&c.push(`financial_year=${i}`),r&&r.length>0){const h=JSON.stringify(r);console.log(h),console.log(h?.length),c.push(`branch=${h}`)}return c.length>0&&(t+="?"+c.join("&")),this.http.get(t)}addDebitNotes(i){return this.http.post(this.apiUrl+"/pv-api/debit_note/",i)}getDebitNotesById(i){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}DebitNotesIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,r)}updateDebitNotes(i,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,i)}deleteDebitNotes(i){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}getSearchProductById(i){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${i}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(i,r){console.log(r,"branch"),console.log(r.length,"branch");let t=this.apiUrl+"/pv-api/purchase_return/";const c=[];if(i&&c.push(`financial_year=${i}`),r&&r.length>0){const h=JSON.stringify(r);console.log(h),console.log(h?.length),c.push(`branch=${h}`)}return c.length>0&&(t+="?"+c.join("&")),this.http.get(t)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(i){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",i)}getPurchaseReturnById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}PurchaseReturnIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,r)}updatePurchaseReturn(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,i)}deletePurchaseReturn(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}filterVariant(i,r,t,c){let h=this.apiUrl+"/pv-api/purchase_product_filter/";const y=[];return i&&y.push(`supplier=${i}`),r&&y.push(`category=${r}`),t&&y.push(`subcategory=${t}`),c&&y.push(`search=${c}`),y.length>0&&(h+="?"+y.join("&")),this.http.get(h)}}return x.\u0275fac=function(i){return new(i||x)(b.LFG(d.eN))},x.\u0275prov=b.Yz7({token:x,factory:x.\u0275fac,providedIn:"root"}),x})()},66680:(L,U,o)=>{o.r(U),o.d(U,{PriceWisePurchaseModule:()=>st});var v=o(36895),b=o(89299),d=o(24006),A=o(96166),x=o(12983),W=o.n(x),i=o(80574),r=o(94327),t=o(94650),c=o(97185),h=o(71071),y=o(53506),$=o(42917),q=o(80927),B=o(87719),N=o(43443),O=o(54333),M=o(59549),Z=o(99602),I=o(54040);function F(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"a",67)(1,"input",68,69),t.NdJ("change",function(a){const p=t.CHM(e).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(p.id,a.target.checked))}),t.qZA(),t.TgZ(3,"label",70),t.NdJ("click",function(a){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onLabelClick(a))}),t._uU(4),t.qZA()()}if(2&s){const e=u.$implicit,n=u.index,a=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",a.selectData.includes(e.id))("id","checkboxCat-"+n),t.xp6(2),t.Q6J("for","checkboxCat-"+n),t.xp6(1),t.Oqu(e.title)}}function J(s,u){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const k=function(){return{standalone:!0}};function E(s,u){if(1&s){const e=t.EpF();t.TgZ(0,"div",60)(1,"div",61)(2,"button",62),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",63)(5,"li")(6,"input",64),t.NdJ("ngModelChange",function(a){t.CHM(e);const l=t.oxw();return t.KtG(l.searchBranch=a)})("ngModelChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,F,5,5,"a",65),t.qZA()()(),t.TgZ(9,"div",66),t.YNc(10,J,2,1,"span",45),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,k)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function Y(s,u){if(1&s&&(t.TgZ(0,"tr")(1,"td",73),t._uU(2),t.qZA(),t.TgZ(3,"td",74),t._uU(4),t.qZA(),t.TgZ(5,"td",75),t._uU(6),t.qZA(),t.TgZ(7,"td",73),t._uU(8),t.qZA(),t.TgZ(9,"td",73),t._uU(10),t.qZA(),t.TgZ(11,"td",76),t._uU(12),t.qZA(),t.TgZ(13,"td",77),t._uU(14),t.qZA(),t.TgZ(15,"td",77),t._uU(16),t.qZA(),t.TgZ(17,"td",78),t._uU(18),t.qZA(),t.TgZ(19,"td",78),t._uU(20),t.qZA(),t.TgZ(21,"td",79),t._uU(22),t.qZA(),t.TgZ(23,"td",80),t._uU(24),t.qZA(),t.TgZ(25,"td",79),t._uU(26),t.qZA()()),2&s){const e=u.$implicit;t.xp6(2),t.hij(" ",null==e?null:e.barcode.variant_name,""),t.xp6(2),t.Oqu(null==e?null:e.barcode.sku),t.xp6(2),t.hij(" ",e.barcode.product.title,""),t.xp6(2),t.hij(" ",e.barcode.product.category,""),t.xp6(2),t.hij(" ",e.barcode.product.subcategory,""),t.xp6(2),t.hij("",e.barcode.product.brand," "),t.xp6(2),t.Oqu(e.qty),t.xp6(2),t.Oqu(e.unit_cost),t.xp6(2),t.Oqu(e.mrp),t.xp6(2),t.Oqu(e.discount),t.xp6(2),t.Oqu(e.tax),t.xp6(2),t.hij(" ",e.landing_cost,""),t.xp6(2),t.hij(" ",e.total,"")}}function R(s,u){if(1&s&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.ALo(11,"date"),t.qZA(),t.TgZ(12,"td",72)(13,"table")(14,"tbody"),t.YNc(15,Y,27,13,"tr",71),t.qZA()()()()),2&s){const e=u.$implicit,n=u.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(e.user.party_name),t.xp6(2),t.Oqu(e.check_gst),t.xp6(2),t.Oqu(e.total),t.xp6(2),t.Oqu(t.xi3(11,6,e.bill_date,"yy/mm/dd")),t.xp6(5),t.Q6J("ngForOf",e.data)}}const j=function(s,u){return{itemsPerPage:s,currentPage:u}};function H(s,u){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,R,16,9,"tr",71),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.priceWisePurchaseList,e.key,e.reverse),t.WLB(8,j,e.itemsPerPage,e.p)))}}function z(s,u){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",81)(3,"p",82),t._uU(4,"Data not available"),t.qZA()()()())}const Q=[{path:"",component:(()=>{class s{constructor(e,n,a,l,p,m,f,_,g,T){this.router=e,this.fb=n,this.toastr=a,this.transactionService=l,this.purchaseService=p,this.cs=m,this.datepipe=f,this.coreService=_,this.reportService=g,this.commonService=T,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.isAdmin=!1,this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.brandList=[],this.categoryList=[],this.subCategoryList=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let g=localStorage.getItem("financialYear");console.warn(JSON.parse(g));let T=JSON.parse(g);this.fyID=T}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=n,this.cs.userDetails$.subscribe(g=>{this.isAdmin="admin"==g.role,this.getBranch()}),this.cs.userDetails$.subscribe(g=>{this.userDetails=g,console.log(g),this.userName=g?.username});const a=new Date,m=(a.getMonth(),a.getFullYear(),new Date(a));m.setDate(a.getDate()-14);const f=this.formatDate(m),_=this.formatDate(a);this.priceWisePurchaseForm=new d.cw({start:new d.NI(f,[d.kI.required,this.commonService.dateRangeValidator(this.financialYear)]),end:new d.NI(_,[d.kI.required,this.commonService.dateRangeValidator(this.financialYear)]),Price:new d.NI("")}),this.commonService.validateAndClearDates(this.priceWisePurchaseForm,this.minDate,this.maxDate),this.startDate=this.priceWisePurchaseForm.value?.start,this.endDate=this.priceWisePurchaseForm.value?.end,this.Price=this.priceWisePurchaseForm.value?.costPrice,this.getPriceWisePurchase(),this.getProduct()}getproductHistory(){throw new Error("Method not implemented.")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const n=e?e.toLowerCase():"";return console.log(n),this.brandList.filter(a=>a?.title&&a.title.toLowerCase().includes(n))}displayFn(e){return e&&e?.title?e?.title:""}displayFn2(e){return e&&e?.title?e?.title:""}playFn3(e){return e&&e?.title?e?.title:""}displayFn4(e){return e&&e?.item_code?e?.item_code:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}search(){if(""===this.titlee)this.getPriceWisePurchase();else{const e=this.titlee.toLocaleLowerCase();this.priceWisePurchaseList=this.priceWisePurchaseList.filter(n=>{const a=n?.user?.party_name.toLocaleLowerCase(),l=n?.payment_voucher_no.toLocaleLowerCase()||"";return!(!a.includes(e)&&!l.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,n,a){const l=(e-1)*n;return`Showing ${l+1}\u2013${Math.min(l+n-1,a-1)+1} of ${a} results`}getPriceWisePurchase(){this.reportService.getPriceWisePurchase(this.startDate,this.endDate,this.Price,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.priceWisePurchase=e,this.priceWisePurchaseList=e})}oncheckBrand(e){console.log(e),this.dataId=e,this.priceWisePurchaseForm.patchValue({brand:this.dataId}),console.warn(this.priceWisePurchaseForm.value),this?.getPriceWisePurchase()}oncheckPrice(e){this.priceWisePurchaseForm.patchValue({Price:e}),console.warn(this.priceWisePurchaseForm.value),this.Price=this.priceWisePurchaseForm.value?.Price,this?.getPriceWisePurchase()}getSelectedPriceWisePurchaseDates(){console.log(this.priceWisePurchaseForm.value);const e=this.datepipe.transform(this.priceWisePurchaseForm.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.priceWisePurchaseForm.value.end,"yyyy-MM-dd");console.log(e),console.log(n),this.startDate=e,this.endDate=n,this?.getPriceWisePurchase()}getBrand(){this.coreService.getBrand().subscribe(e=>{console.log(e),this.brandList=e})}getCategory(){this.coreService.getCategory().subscribe(e=>{console.log(e),this.categoryList=e})}getSubcategory(){this.coreService.getSubcategory().subscribe(e=>{console.log(e),this.subCategoryList=e})}generatePDFAgain(){const e=new A.default("landscape"),l=`Date Range From: ${this.startDate} - ${this.endDate}`,p=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Price Wise Purchase Report",82,10),e.text(p,10,18),e.text(l,10,22),e.text("",10,25);const f=[];let _=1;this.priceWisePurchaseList.forEach(g=>{console.warn(g);const T=g.user.party_name,ot=g.check_gst,lt=g.total,ct=g.bill_date;let C=!0;g.data.forEach((P,dt)=>{console.log(P),f.push([C?_:"",C?T:"",C?ot:"",C?lt:"",this.formatDate(C?ct:""),P.barcode.variant_name,P.barcode.sku,P.barcode.product.title,P.barcode.product.category,P.barcode.product.subcategory,P.barcode.product.brand,P.qty,P.unit_cost,P.mrp,P.discount,P.tax,P.landing_cost,P.total]),C=!1}),_++}),W()(e,{head:[["#","User","Check Gst","Total","Bill Date","Variant Name","Sku","Title","Category","Subcategory","Brand","Qty","Unit Cost","Mrp","Discount","Tax","Landing Cost","Total"]],body:f,theme:"grid",startY:32,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),e.save("Price_wise_Purchase .pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable");if(n){const a=n.querySelector("thead tr");if(a){const p=[];a.querySelectorAll("th").forEach(m=>{const f=m.textContent?.trim();f&&"Is Active"!==f&&"Action"!==f&&p.push(f)}),e.push(p)}n.querySelectorAll("tbody tr").forEach(p=>{const m=[];p.querySelectorAll("td").forEach(f=>{const _=f.textContent?.trim();_&&m.push(_)}),e.push(m)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=i.P6.aoa_to_sheet(e),a=i.P6.book_new();i.P6.book_append_sheet(a,n,"Sheet1");const l=i.cW(a,{bookType:"xlsx",type:"array"}),p=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,r.saveAs)(p,"Stockalert.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const a=document.querySelector(".titl");if(!a)return void console.error("Title element with class 'titl' not found.");const l=a.outerHTML,m=e.cloneNode(!0).outerHTML,_="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+m,g=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=_,window.print(),document.body.innerHTML=g}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.priceWisePurchaseList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,n){if(n)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const a=this.selectData.findIndex(l=>l==e);console.log(a),-1!==a&&this.selectData.splice(a,1),this.ngOnInit(),console.log(this.selectData)}}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(b.F0),t.Y36(d.qu),t.Y36(c._W),t.Y36(h.p),t.Y36(y.x),t.Y36($.J),t.Y36(v.uU),t.Y36(q.p),t.Y36(B.r),t.Y36(N.R))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-price-wise-purchase"]],decls:119,vars:13,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-6","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],["type","number","placeholder","Enter Price","formControlName","costPrice",1,"form-control",3,"input"],["val",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%","white-space","pre-wrap"],[1,"thone",2,"width","10%","padding-left","55px","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","42px"],[1,"thone",2,"width","10%","padding-right","25px","padding-left","20px"],[1,"thone",2,"width","10%"],[1,"thone",2,"width","10%","white-space","pre-wrap","padding-left","10px","padding-right","20px"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"],["colspan","13"],[2,"width","10%","white-space","pre-wrap"],[2,"width","10%","padding-left","10px","padding-right","20px"],[2,"width","8%",";white-space","pre-wrap"],[2,"width","8%","white-space","pre-wrap"],[2,"width","6%"],[2,"width","7%"],[2,"width","10%"],[2,"width","10%","padding-right","23px","padding-left","0px"],["colspan","10"],[1,"text-center"]],template:function(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Price Wise Purchase"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Price Wise Purchase"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,E,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return n.getSelectedPriceWisePurchaseDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return n.getSelectedPriceWisePurchaseDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",24)(33,"div",25)(34,"strong"),t._uU(35,"Enter Price"),t.qZA(),t.TgZ(36,"input",26,27),t.NdJ("input",function(){t.CHM(a);const p=t.MAs(37);return t.KtG(n.oncheckPrice(p.value))}),t.qZA()()()()()(),t.TgZ(38,"div",28)(39,"ul")(40,"li")(41,"a",29),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(42,"img",30),t.qZA()(),t.TgZ(43,"li")(44,"a",31),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(45,"img",32),t.qZA()(),t.TgZ(46,"li")(47,"a",33),t.NdJ("click",function(){return n.printTable()}),t._UZ(48,"img",34),t.qZA()()()()(),t.TgZ(49,"div",35)(50,"table",36)(51,"thead")(52,"tr")(53,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(54,"#"),t._UZ(55,"i",38),t.qZA(),t.TgZ(56,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(57,"User "),t._UZ(58,"i",38),t.qZA(),t.TgZ(59,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(60,"Check Gst "),t._UZ(61,"i",38),t.qZA(),t.TgZ(62,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(63,"Total "),t._UZ(64,"i",38),t.qZA(),t.TgZ(65,"th",37),t.NdJ("click",function(){return n.sort("id")}),t._uU(66,"Bill Date "),t._UZ(67,"i",38),t.qZA(),t.TgZ(68,"th",39),t._uU(69,"Variant Name "),t.qZA(),t.TgZ(70,"th",40),t._uU(71,"Sku "),t.qZA(),t.TgZ(72,"th",41),t._uU(73,"Title"),t.qZA(),t.TgZ(74,"th",42),t._uU(75,"Category"),t.qZA(),t.TgZ(76,"th",39),t._uU(77,"Sub category "),t.qZA(),t.TgZ(78,"th",43),t._uU(79,"Brand"),t.qZA(),t.TgZ(80,"th",43),t._uU(81,"Qty "),t.qZA(),t.TgZ(82,"th",44),t._uU(83,"Unit Cost "),t.qZA(),t.TgZ(84,"th",43),t._uU(85,"Mrp "),t.qZA(),t.TgZ(86,"th",43),t._uU(87,"Discount "),t.qZA(),t.TgZ(88,"th",43),t._uU(89,"Tax"),t.qZA(),t.TgZ(90,"th",39),t._uU(91,"Landing Cost "),t.qZA(),t.TgZ(92,"th",43),t._uU(93,"Total"),t.qZA()()(),t.YNc(94,H,4,11,"tbody",45),t.YNc(95,z,5,0,"tbody",45),t.qZA(),t.TgZ(96,"div",6)(97,"div",46)(98,"div",47),t._uU(99," Show per page "),t.TgZ(100,"select",48,49),t.NdJ("ngModelChange",function(p){return n.itemsPerPage=p})("change",function(){t.CHM(a);const p=t.MAs(101);return t.KtG(n.changePg(p.value))}),t.TgZ(102,"option",50),t._uU(103,"10"),t.qZA(),t.TgZ(104,"option",51),t._uU(105,"20"),t.qZA(),t.TgZ(106,"option",52),t._uU(107,"30"),t.qZA(),t.TgZ(108,"option",53),t._uU(109,"50"),t.qZA(),t.TgZ(110,"option",54),t._uU(111,"100"),t.qZA(),t.TgZ(112,"option",55),t._uU(113,"All"),t.qZA()()()(),t.TgZ(114,"div",56)(115,"div",57)(116,"pagination-controls",58),t.NdJ("pageChange",function(p){return n.p=p}),t.qZA(),t.TgZ(117,"div",59),t._uU(118),t.qZA()()()()()()()()()}if(2&e){const a=t.MAs(31);t.xp6(11),t.Q6J("ngIf",n.isAdmin),t.xp6(5),t.Q6J("formGroup",n.priceWisePurchaseForm),t.xp6(7),t.Q6J("formGroup",n.priceWisePurchaseForm)("rangePicker",a)("min",n.minDate)("max",n.maxDate),t.xp6(6),t.Q6J("for",a),t.xp6(65),t.Q6J("ngIf",(null==n.priceWisePurchaseList?null:n.priceWisePurchaseList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.priceWisePurchaseList?null:n.priceWisePurchaseList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq(" Showing ",n.itemsPerPage," to ",null==n.priceWisePurchaseList?null:n.priceWisePurchaseList.length," of ",n.p," entries ")}},dependencies:[v.sg,v.O5,d._Y,d.YN,d.Kr,d.Fj,d.wV,d.EJ,d.JJ,d.JL,d.On,d.sg,d.u,O.LS,M.KE,M.R9,Z.nW,Z.wx,Z.zY,Z.By,Z._g,v.uU,O._s,I.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;letter-spacing:3px;font-weight:700;padding-left:30px}.head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:3px;font-weight:700}.head6[_ngcontent-%COMP%]{font-size:18px;padding-left:10%}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:super}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),s})()}];let V=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[b.Bz.forChild(Q),b.Bz]}),s})();var G=o(47957),K=o(44144),X=o(3056),tt=o(87078),S=o(86323),w=o(92642),et=o(3238),it=o(95113),rt=o(64155),nt=o(6205),D=o(8468);const at={User:w.n5m,UserCheck:w.uS3,FileText:w.acj,File:w.$BE};let st=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[v.uU],imports:[v.ez,V,D.I,d.u5,d.UX,G.Bb,M.lN,K.c,X.ZQ,tt.T,Z.FA,M.lN,et.XK,it.LD,rt.vQ,D.I,nt.X,S.p.pick(at),S.p]}),s})()}}]);