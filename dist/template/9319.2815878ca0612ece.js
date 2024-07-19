"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9319],{53506:($,x,c)=>{c.d(x,{x:()=>k});var A=c(92340),b=c(94650),u=c(80529);let k=(()=>{class v{constructor(r){this.http=r,this.apiUrl=`${A.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(r){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+r)}getPurchaseFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/purchase_order/";const h=[];if(r&&h.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(s+="?"+h.join("&")),this.http.get(s)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(r){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",r)}getPurchaseById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}PurchaseIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,i)}updatePurchase(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,r)}deletePurchase(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+r)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/material_inward/";const h=[];if(r&&h.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(s+="?"+h.join("&")),this.http.get(s)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(r){return this.http.post(this.apiUrl+"/pv-api/material_inward/",r)}getMaterialById(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}MaterialIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,i)}updateMaterial(r,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,r)}deleteMaterial(r){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getPurchaseBillFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/purchase_bill/";const h=[];if(r&&h.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(s+="?"+h.join("&")),this.http.get(s)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(r){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",r)}getPurchaseBillById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}PurchaseBillIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,i)}updatePurchaseBill(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,r)}deletePurchaseBill(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getDebitNotes(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/debit_note/";const h=[];if(r&&h.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(s+="?"+h.join("&")),this.http.get(s)}addDebitNotes(r){return this.http.post(this.apiUrl+"/pv-api/debit_note/",r)}getDebitNotesById(r){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}DebitNotesIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,i)}updateDebitNotes(r,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,r)}deleteDebitNotes(r){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}getSearchProductById(r){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${r}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(r,i){console.log(i,"branch"),console.log(i.length,"branch");let s=this.apiUrl+"/pv-api/purchase_return/";const h=[];if(r&&h.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(s+="?"+h.join("&")),this.http.get(s)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",r)}getPurchaseReturnById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}PurchaseReturnIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,i)}updatePurchaseReturn(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,r)}deletePurchaseReturn(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}filterVariant(r,i,s,h){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const y=[];return r&&y.push(`supplier=${r}`),i&&y.push(`category=${i}`),s&&y.push(`subcategory=${s}`),h&&y.push(`search=${h}`),y.length>0&&(t+="?"+y.join("&")),this.http.get(t)}}return v.\u0275fac=function(r){return new(r||v)(b.LFG(u.eN))},v.\u0275prov=b.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},9319:($,x,c)=>{c.r(x),c.d(x,{StockAlertModule:()=>st});var A=c(36895),b=c(89299),u=c(24006),k=c(68675),v=c(54004),Z=c(96166),r=c(12983),i=c.n(r),s=c(80574),h=c(94327),t=c(94650),y=c(97185),O=c(71071),N=c(53506),J=c(42917),B=c(80927),I=c(87719),q=c(43443),M=c(54333),U=c(47957),w=c(3238),T=c(59549),S=c(99602),F=c(54040);function E(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"a",69)(1,"input",70,71),t.NdJ("change",function(n){const p=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.SelectedBranch(p.id,n.target.checked))}),t.qZA(),t.TgZ(3,"label",72),t.NdJ("click",function(n){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onLabelClick(n))}),t._uU(4),t.qZA()()}if(2&a){const e=g.$implicit,o=g.index,n=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",n.selectData.includes(e.id))("id","checkboxCat-"+o),t.xp6(2),t.Q6J("for","checkboxCat-"+o),t.xp6(1),t.Oqu(e.title)}}function Y(a,g){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const Q=function(){return{standalone:!0}};function R(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"div",62)(1,"div",63)(2,"button",64),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",65)(5,"li")(6,"input",66),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.searchBranch=n)})("ngModelChange",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,E,5,5,"a",67),t.qZA()()(),t.TgZ(9,"div",68),t.YNc(10,Y,2,1,"span",47),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,Q)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function H(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"mat-option",73),t.NdJ("blur",function(){const l=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.oncheckCategory(null==l?null:l.id))}),t._uU(1),t.qZA()}if(2&a){const e=g.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function V(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"mat-option",73),t.NdJ("blur",function(){const l=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.oncheckSubCategory(null==l?null:l.id))}),t._uU(1),t.qZA()}if(2&a){const e=g.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function j(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"mat-option",73),t.NdJ("blur",function(){const l=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.oncheckBrand(null==l?null:l.id))}),t._uU(1),t.qZA()}if(2&a){const e=g.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function z(a,g){if(1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA()()),2&a){const e=g.$implicit,o=g.index;t.xp6(2),t.Oqu(o+1+"."),t.xp6(2),t.Oqu(e.product_name),t.xp6(2),t.Oqu(e.available_qty),t.xp6(2),t.Oqu(e.min_qty),t.xp6(2),t.Oqu(e.mrp),t.xp6(2),t.Oqu(e.stock_value),t.xp6(2),t.Oqu(e.landing_stock_value),t.xp6(2),t.Oqu(e.created_date),t.xp6(2),t.Oqu(e.status)}}const K=function(a,g){return{itemsPerPage:a,currentPage:g}};function G(a,g){if(1&a&&(t.TgZ(0,"tbody"),t.YNc(1,z,19,9,"tr",74),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.stockAlertList,e.key,e.reverse),t.WLB(8,K,e.itemsPerPage,e.p)))}}function W(a,g){1&a&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",75)(3,"p",76),t._uU(4,"Data not available"),t.qZA()()()())}const X=[{path:"",component:(()=>{class a{constructor(e,o,n,l,p,d,f,C,m,_){this.router=e,this.fb=o,this.toastr=n,this.transactionService=l,this.purchaseService=p,this.cs=d,this.datepipe=f,this.coreService=C,this.reportService=m,this.commonService=_,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.brandControl=new u.NI(""),this.categoryControl=new u.NI(""),this.subCategoryControl=new u.NI(""),this.itemCodeControl=new u.NI(""),this.isAdmin=!1,this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.brandList=[],this.categoryList=[],this.subCategoryList=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let m=localStorage.getItem("financialYear");console.warn(JSON.parse(m));let _=JSON.parse(m);this.fyID=_}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:o}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=o,this.cs.userDetails$.subscribe(m=>{this.isAdmin="admin"==m.role,this.getBranch()}),this.cs.userDetails$.subscribe(m=>{this.userDetails=m,console.log(m),this.userName=m?.username});const n=new Date,d=(n.getMonth(),n.getFullYear(),new Date(n));d.setDate(n.getDate()-14);const f=this.formatDate(d),C=this.formatDate(n);this.stockAlertform=new u.cw({start:new u.NI(f,this.commonService.dateRangeValidator(this.financialYear)),end:new u.NI(C,this.commonService.dateRangeValidator(this.financialYear)),category:new u.NI,subcategory:new u.NI(""),brand:new u.NI(""),costPrice:new u.NI("")}),this.commonService.validateAndClearDates(this.stockAlertform,this.minDate,this.maxDate),this.startDate=this.stockAlertform.value?.start,this.endDate=this.stockAlertform.value?.end,this.category=this.stockAlertform.value?.category,this.subcategory=this.stockAlertform.value?.subcategory,this.brand=this.stockAlertform.value?.brand,this.costPrice=this.stockAlertform.value?.costPrice,this.getStockAlert(),this.getBrand(),this.getCategory(),this.getSubcategory(),this.getProduct(),this.filteredBrand=this.brandControl.valueChanges.pipe((0,k.O)(""),(0,v.U)(m=>{const _="string"==typeof m?m:m?.title;return _?this._filter(_):this.brandList.slice()})),this.filteredCategory=this.categoryControl.valueChanges.pipe((0,k.O)(""),(0,v.U)(m=>{const _="string"==typeof m?m:m?.title;return _?this._filter2(_):this.categoryList.slice()})),this.filteredSubCategory=this.subCategoryControl.valueChanges.pipe((0,k.O)(""),(0,v.U)(m=>{const _="string"==typeof m?m:m?.title;return _?this._filter3(_):this.subCategoryList.slice()}))}getproductHistory(){throw new Error("Method not implemented.")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const o=e?e.toLowerCase():"";return console.log(o),this.brandList.filter(n=>n?.title&&n.title.toLowerCase().includes(o))}displayFn(e){return e&&e?.title?e?.title:""}_filter2(e){const o=e?e.toLowerCase():"";return console.log(o),this.categoryList.filter(n=>n?.title&&n.title.toLowerCase().includes(o))}displayFn2(e){return e&&e?.title?e?.title:""}_filter3(e){const o=e?e.toLowerCase():"";return console.log(o),this.subCategoryList.filter(n=>n?.title&&n.title.toLowerCase().includes(o))}displayFn3(e){return e&&e?.title?e?.title:""}_filter4(e){const o=e?e.toLowerCase():"";return console.log(o),this.productList.filter(n=>n?.item_code&&n.item_code.toLowerCase().includes(o))}displayFn4(e){return e&&e?.item_code?e?.item_code:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}search(){if(""===this.titlee)this.getStockAlert();else{const e=this.titlee.toLocaleLowerCase();this.stockAlertList=this.stockAlertList.filter(o=>{const n=o?.user?.party_name.toLocaleLowerCase(),l=o?.payment_voucher_no.toLocaleLowerCase()||"";return!(!n.includes(e)&&!l.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,o,n){const l=(e-1)*o;return`Showing ${l+1}\u2013${Math.min(l+o-1,n-1)+1} of ${n} results`}getStockAlert(){console.log(this.brand),this.reportService.getStockAlert(this.startDate,this.endDate,this.category,this.subcategory,this.brand,this.costPrice,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.stockAlert=e,this.stockAlertList=e})}oncheckBrand(e){console.log(e),this.dataId=e,this.stockAlertform.patchValue({brand:this.dataId}),console.warn(this.stockAlertform.value),this.brand=this.stockAlertform.value?.brand,this?.getStockAlert()}oncheckCategory(e){console.log(e),this.dataId=e,this.stockAlertform.patchValue({category:e}),console.warn(this.stockAlertform.value),this.category=this.stockAlertform.value?.category,this?.getStockAlert()}oncheckSubCategory(e){console.log(e),this.stockAlertform.patchValue({subcategory:e}),console.warn(this.stockAlertform.value),this.subcategory=this.stockAlertform.value?.subcategory,this?.getStockAlert()}oncheckCostPrice(e){this.stockAlertform.patchValue({costPrice:e}),console.warn(this.stockAlertform.value),this.costPrice=this.stockAlertform.value?.costPrice,this?.getStockAlert()}getSelectedStockAlertDates(){console.log(this.stockAlertform.value);const e=this.datepipe.transform(this.stockAlertform.value.start,"yyyy-MM-dd"),o=this.datepipe.transform(this.stockAlertform.value.end,"yyyy-MM-dd");console.log(e),console.log(o),this.startDate=e,this.endDate=o,this?.getStockAlert()}getBrand(){this.coreService.getBrand().subscribe(e=>{console.log(e),this.brandList=e})}getCategory(){this.coreService.getCategory().subscribe(e=>{console.log(e),this.categoryList=e})}getSubcategory(){this.coreService.getSubcategory().subscribe(e=>{console.log(e),this.subCategoryList=e})}generatePDF(){const e=new Z.default,l=`Date Range From: ${this.startDate} - ${this.endDate}`,p=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Stock Alert Report",84,10),e.text(p,10,18),e.text(l,10,22),e.text("",10,25),i()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Stock Alert.pdf")}generatePDFAgain(){const e=new Z.default,l=`Date Range From: ${this.startDate} - ${this.endDate}`,p=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Stock Alert Report",82,10),e.text(p,10,18),e.text(l,10,22),e.text("",10,25),i()(e,{head:[["#","Product Name","Available Qty.","Min Qty","MRP.","Stock Value","Landing Stock Value","Created Date","Status"]],body:this.stockAlertList.map((d,f)=>[f+1,d.product_name,d.available_qty,d.min_qty,d.mrp,d.stock_value,d.landing_stock_value,d.created_date,d.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Stock _Alert .pdf")}getVisibleDataFromTable(){const e=[],o=document.getElementById("mytable");if(o){const n=o.querySelector("thead tr");if(n){const p=[];n.querySelectorAll("th").forEach(d=>{const f=d.textContent?.trim();f&&"Is Active"!==f&&"Action"!==f&&p.push(f)}),e.push(p)}o.querySelectorAll("tbody tr").forEach(p=>{const d=[];p.querySelectorAll("td").forEach(f=>{const C=f.textContent?.trim();C&&d.push(C)}),e.push(d)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),o=s.P6.aoa_to_sheet(e),n=s.P6.book_new();s.P6.book_append_sheet(n,o,"Sheet1");const l=s.cW(n,{bookType:"xlsx",type:"array"}),p=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(p,"Stockalert.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const n=document.querySelector(".titl");if(!n)return void console.error("Title element with class 'titl' not found.");const l=n.outerHTML,d=e.cloneNode(!0).outerHTML,C="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+d,m=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=C,window.print(),document.body.innerHTML=m}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.stockAlertList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,o){if(o)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const n=this.selectData.findIndex(l=>l==e);console.log(n),-1!==n&&this.selectData.splice(n,1),this.ngOnInit(),console.log(this.selectData)}}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(b.F0),t.Y36(u.qu),t.Y36(y._W),t.Y36(O.p),t.Y36(N.x),t.Y36(J.J),t.Y36(A.uU),t.Y36(B.p),t.Y36(I.r),t.Y36(q.R))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-stock-alert"]],decls:132,vars:31,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-3","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],["type","text","placeholder","Enter Product",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],["type","text","placeholder","Enter Sub Category",1,"form-control",3,"formControl","matAutocomplete"],["autos","matAutocomplete"],["type","text","placeholder","Enter Brand",1,"form-control",3,"formControl","matAutocomplete"],["autob","matAutocomplete"],["type","number","placeholder","Enter Cost Price","formControlName","costPrice",1,"form-control",3,"input"],["val",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[3,"value","blur"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Stock Alert"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Stock Alert"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,R,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return o.getSelectedStockAlertDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return o.getSelectedStockAlertDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",24)(33,"div",25)(34,"strong"),t._uU(35,"Select Category"),t.qZA(),t._UZ(36,"input",26),t.TgZ(37,"mat-autocomplete",27,28),t.YNc(39,H,2,2,"mat-option",29),t.ALo(40,"async"),t.qZA()()(),t.TgZ(41,"div",24)(42,"div",25)(43,"strong"),t._uU(44,"Select Sub Category"),t.qZA(),t._UZ(45,"input",30),t.TgZ(46,"mat-autocomplete",27,31),t.YNc(48,V,2,2,"mat-option",29),t.ALo(49,"async"),t.qZA()()(),t.TgZ(50,"div",24)(51,"div",25)(52,"strong"),t._uU(53,"Select Brand"),t.qZA(),t._UZ(54,"input",32),t.TgZ(55,"mat-autocomplete",27,33),t.YNc(57,j,2,2,"mat-option",29),t.ALo(58,"async"),t.qZA()()(),t.TgZ(59,"div",24)(60,"div",25)(61,"strong"),t._uU(62,"Enter Cost Price"),t.qZA(),t.TgZ(63,"input",34,35),t.NdJ("input",function(){t.CHM(n);const p=t.MAs(64);return t.KtG(o.oncheckCostPrice(p.value))}),t.qZA()()()()()(),t.TgZ(65,"div",36)(66,"ul")(67,"li")(68,"a",37),t.NdJ("click",function(){return o.generatePDFAgain()}),t._UZ(69,"img",38),t.qZA()(),t.TgZ(70,"li")(71,"a",39),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(72,"img",40),t.qZA()(),t.TgZ(73,"li")(74,"a",41),t.NdJ("click",function(){return o.printTable()}),t._UZ(75,"img",42),t.qZA()()()()(),t.TgZ(76,"div",43)(77,"table",44)(78,"thead")(79,"tr")(80,"th",45),t.NdJ("click",function(){return o.sort("id")}),t._uU(81,"#"),t._UZ(82,"i",46),t.qZA(),t.TgZ(83,"th",45),t.NdJ("click",function(){return o.sort("id")}),t._uU(84,"Product Name "),t._UZ(85,"i",46),t.qZA(),t.TgZ(86,"th",45),t.NdJ("click",function(){return o.sort("id")}),t._uU(87,"Available Qty "),t._UZ(88,"i",46),t.qZA(),t.TgZ(89,"th",45),t.NdJ("click",function(){return o.sort("id")}),t._uU(90,"Min Qty "),t._UZ(91,"i",46),t.qZA(),t.TgZ(92,"th",45),t.NdJ("click",function(){return o.sort("id")}),t._uU(93,"MRP. "),t._UZ(94,"i",46),t.qZA(),t.TgZ(95,"th",45),t.NdJ("click",function(){return o.sort("id")}),t._uU(96,"Stock Value "),t._UZ(97,"i",46),t.qZA(),t.TgZ(98,"th",45),t.NdJ("click",function(){return o.sort("id")}),t._uU(99,"Landing Stock Value "),t._UZ(100,"i",46),t.qZA(),t.TgZ(101,"th",45),t.NdJ("click",function(){return o.sort("id")}),t._uU(102,"Created Date "),t._UZ(103,"i",46),t.qZA(),t.TgZ(104,"th",45),t.NdJ("click",function(){return o.sort("id")}),t._uU(105,"Status "),t._UZ(106,"i",46),t.qZA()()(),t.YNc(107,G,4,11,"tbody",47),t.YNc(108,W,5,0,"tbody",47),t.qZA(),t.TgZ(109,"div",6)(110,"div",48)(111,"div",49),t._uU(112," Show per page "),t.TgZ(113,"select",50,51),t.NdJ("ngModelChange",function(p){return o.itemsPerPage=p})("change",function(){t.CHM(n);const p=t.MAs(114);return t.KtG(o.changePg(p.value))}),t.TgZ(115,"option",52),t._uU(116,"10"),t.qZA(),t.TgZ(117,"option",53),t._uU(118,"20"),t.qZA(),t.TgZ(119,"option",54),t._uU(120,"30"),t.qZA(),t.TgZ(121,"option",55),t._uU(122,"50"),t.qZA(),t.TgZ(123,"option",56),t._uU(124,"100"),t.qZA(),t.TgZ(125,"option",57),t._uU(126,"All"),t.qZA()()()(),t.TgZ(127,"div",58)(128,"div",59)(129,"pagination-controls",60),t.NdJ("pageChange",function(p){return o.p=p}),t.qZA(),t.TgZ(130,"div",61),t._uU(131),t.qZA()()()()()()()()()}if(2&e){const n=t.MAs(31),l=t.MAs(38),p=t.MAs(47),d=t.MAs(56);t.xp6(11),t.Q6J("ngIf",o.isAdmin),t.xp6(5),t.Q6J("formGroup",o.stockAlertform),t.xp6(7),t.Q6J("formGroup",o.stockAlertform)("rangePicker",n)("min",o.minDate)("max",o.maxDate),t.xp6(6),t.Q6J("for",n),t.xp6(7),t.Q6J("formControl",o.categoryControl)("matAutocomplete",l),t.xp6(1),t.Q6J("displayWith",o.displayFn2),t.xp6(2),t.Q6J("ngForOf",t.lcZ(40,25,o.filteredCategory)),t.xp6(6),t.Q6J("formControl",o.subCategoryControl)("matAutocomplete",p),t.xp6(1),t.Q6J("displayWith",o.displayFn3),t.xp6(2),t.Q6J("ngForOf",t.lcZ(49,27,o.filteredSubCategory)),t.xp6(6),t.Q6J("formControl",o.brandControl)("matAutocomplete",d),t.xp6(1),t.Q6J("displayWith",o.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(58,29,o.filteredBrand)),t.xp6(50),t.Q6J("ngIf",(null==o.stockAlertList?null:o.stockAlertList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==o.stockAlertList?null:o.stockAlertList.length)),t.xp6(5),t.Q6J("ngModel",o.itemsPerPage),t.xp6(18),t.lnq(" Showing ",o.itemsPerPage," to ",null==o.stockAlertList?null:o.stockAlertList.length," of ",o.p," entries ")}},dependencies:[A.sg,A.O5,u._Y,u.YN,u.Kr,u.Fj,u.wV,u.EJ,u.JJ,u.JL,u.On,u.oH,u.sg,u.u,M.LS,U.XC,U.ZL,w.ey,T.KE,T.R9,S.nW,S.wx,S.zY,S.By,S._g,A.Ov,M._s,F.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),a})()}];let tt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[b.Bz.forChild(X),b.Bz]}),a})();var et=c(44144),rt=c(3056),ot=c(87078),L=c(86323),P=c(92642),it=c(95113),nt=c(64155),lt=c(6205),D=c(8468);const at={User:P.n5m,UserCheck:P.uS3,FileText:P.acj,File:P.$BE};let st=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[A.uU],imports:[A.ez,tt,D.I,u.u5,u.UX,U.Bb,T.lN,et.c,rt.ZQ,ot.T,S.FA,T.lN,w.XK,it.LD,nt.vQ,D.I,lt.X,L.p.pick(at),L.p]}),a})()}}]);