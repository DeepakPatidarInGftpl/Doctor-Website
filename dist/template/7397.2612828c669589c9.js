"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7397],{53506:(q,U,s)=>{s.d(U,{x:()=>w});var v=s(92340),Z=s(94650),g=s(80529);let w=(()=>{class C{constructor(i){this.http=i,this.apiUrl=`${v.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(i){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+i)}getPurchaseFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let l=this.apiUrl+"/pv-api/purchase_order/";const h=[];if(i&&h.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(l+="?"+h.join("&")),this.http.get(l)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(i){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",i)}getPurchaseById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}PurchaseIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,r)}updatePurchase(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,i)}deletePurchase(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}searchProduct(i){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+i)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let l=this.apiUrl+"/pv-api/material_inward/";const h=[];if(i&&h.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(l+="?"+h.join("&")),this.http.get(l)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(i){return this.http.post(this.apiUrl+"/pv-api/material_inward/",i)}getMaterialById(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getMaterialByUserId(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${i}`)}MaterialIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,r)}updateMaterial(i,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,i)}deleteMaterial(i){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getPurchaseBillFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let l=this.apiUrl+"/pv-api/purchase_bill/";const h=[];if(i&&h.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(l+="?"+h.join("&")),this.http.get(l)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(i){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",i)}getPurchaseBillById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getPurchaseBillByUserId(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${i}`)}PurchaseBillIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,r)}updatePurchaseBill(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,i)}deletePurchaseBill(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getDebitNotes(i,r){console.log(r,"branch"),console.log(r.length,"branch");let l=this.apiUrl+"/pv-api/debit_note/";const h=[];if(i&&h.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(l+="?"+h.join("&")),this.http.get(l)}addDebitNotes(i){return this.http.post(this.apiUrl+"/pv-api/debit_note/",i)}getDebitNotesById(i){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}DebitNotesIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,r)}updateDebitNotes(i,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,i)}deleteDebitNotes(i){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}getSearchProductById(i){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${i}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(i,r){console.log(r,"branch"),console.log(r.length,"branch");let l=this.apiUrl+"/pv-api/purchase_return/";const h=[];if(i&&h.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(l+="?"+h.join("&")),this.http.get(l)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(i){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",i)}getPurchaseReturnById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}PurchaseReturnIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,r)}updatePurchaseReturn(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,i)}deletePurchaseReturn(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}filterVariant(i,r,l,h){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const P=[];return i&&P.push(`supplier=${i}`),r&&P.push(`category=${r}`),l&&P.push(`subcategory=${l}`),h&&P.push(`search=${h}`),P.length>0&&(t+="?"+P.join("&")),this.http.get(t)}}return C.\u0275fac=function(i){return new(i||C)(Z.LFG(g.eN))},C.\u0275prov=Z.Yz7({token:C,factory:C.\u0275fac,providedIn:"root"}),C})()},97397:(q,U,s)=>{s.r(U),s.d(U,{CategoryWisePurchaseModule:()=>ct});var v=s(36895),Z=s(4392),g=s(24006),w=s(94327),C=s(96166),W=s(12983),i=s.n(W),r=s(68675),l=s(54004),h=s(80574),t=s(94650),P=s(97185),B=s(71071),N=s(53506),F=s(42917),I=s(87719),J=s(80927),E=s(43443),D=s(54333),O=s(47957),S=s(3238),M=s(59549),T=s(99602),Y=s(54040);function k(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"a",68)(1,"input",69,70),t.NdJ("change",function(o){const p=t.CHM(e).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(p.id,o.target.checked))}),t.qZA(),t.TgZ(3,"label",71),t.NdJ("click",function(o){t.CHM(e);const c=t.oxw(2);return t.KtG(c.onLabelClick(o))}),t._uU(4),t.qZA()()}if(2&n){const e=d.$implicit,a=d.index,o=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",o.selectData.includes(e.id))("id","checkboxCat-"+a),t.xp6(2),t.Q6J("for","checkboxCat-"+a),t.xp6(1),t.Oqu(e.title)}}function R(n,d){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const Q=function(){return{standalone:!0}};function j(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"div",61)(1,"div",62)(2,"button",63),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",64)(5,"li")(6,"input",65),t.NdJ("ngModelChange",function(o){t.CHM(e);const c=t.oxw();return t.KtG(c.searchBranch=o)})("ngModelChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,k,5,5,"a",66),t.qZA()()(),t.TgZ(9,"div",67),t.YNc(10,R,2,1,"span",46),t.qZA()()}if(2&n){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,Q)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function H(n,d){if(1&n){const e=t.EpF();t.TgZ(0,"mat-option",72),t.NdJ("blur",function(){const c=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.oncheckCategory(null==c?null:c.id))}),t._uU(1),t.qZA()}if(2&n){const e=d.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function z(n,d){if(1&n&&(t.TgZ(0,"tr")(1,"td",76),t._uU(2),t.qZA(),t.TgZ(3,"td",77),t._uU(4),t.qZA(),t.TgZ(5,"td",76),t._uU(6),t.qZA(),t.TgZ(7,"td",76),t._uU(8),t.qZA(),t.TgZ(9,"td",76),t._uU(10),t.qZA(),t.TgZ(11,"td",76),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td",78),t._uU(16),t.qZA(),t.TgZ(17,"td",78),t._uU(18),t.qZA(),t.TgZ(19,"td",78),t._uU(20),t.qZA(),t.TgZ(21,"td",79),t._uU(22),t.qZA(),t.TgZ(23,"td",78),t._uU(24),t.qZA(),t.TgZ(25,"td",78),t._uU(26),t.qZA()()),2&n){const e=d.$implicit;t.xp6(2),t.hij(" ",e.barcode.variant_name,""),t.xp6(2),t.Oqu(e.barcode.sku),t.xp6(2),t.hij(" ",e.barcode.product.title,""),t.xp6(2),t.hij(" ",e.barcode.product.category,""),t.xp6(2),t.hij(" ",e.barcode.product.subcategory,""),t.xp6(2),t.hij(" ",e.barcode.product.brand,""),t.xp6(2),t.Oqu(e.qty),t.xp6(2),t.Oqu(e.unit_cost),t.xp6(2),t.Oqu(e.mrp),t.xp6(2),t.Oqu(e.discount),t.xp6(2),t.Oqu(e.tax),t.xp6(2),t.Oqu(e.landing_cost),t.xp6(2),t.hij(" ",e.total,"")}}function V(n,d){if(1&n&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.ALo(9,"number"),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td",74)(14,"table",75)(15,"tbody"),t.YNc(16,z,27,13,"tr",73),t.qZA()()()()),2&n){const e=d.$implicit,a=d.index;t.xp6(2),t.Oqu(a+1+"."),t.xp6(2),t.Oqu(e.user.party_name),t.xp6(2),t.Oqu(e.check_gst),t.xp6(2),t.Oqu(t.xi3(9,6,e.total,"1.2-2")),t.xp6(3),t.Oqu(t.xi3(12,9,e.bill_date,"yy/mm/dd")),t.xp6(5),t.Q6J("ngForOf",e.data)}}const G=function(n,d){return{itemsPerPage:n,currentPage:d}};function K(n,d){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,V,17,12,"tr",73),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.categoryWisePurchaseList,e.key,e.reverse),t.WLB(8,G,e.itemsPerPage,e.p)))}}function X(n,d){1&n&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",80)(3,"p",81),t._uU(4,"Data not available"),t.qZA()()()())}const tt=[{path:"",component:(()=>{class n{constructor(e,a,o,c,p,m,f,_,u,x){this.router=e,this.fb=a,this.toastr=o,this.transactionService=c,this.purchaseService=p,this.cs=m,this.datepipe=f,this.reportService=_,this.coreService=u,this.commonService=x,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.categoryControl=new g.NI(""),this.isAdmin=!1,this.productList=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.categoryList=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let u=localStorage.getItem("financialYear");console.warn(JSON.parse(u));let x=JSON.parse(u);this.fyID=x}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:a}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=a,this.cs.userDetails$.subscribe(u=>{this.isAdmin="admin"==u.role,this.getBranch()}),this.cs.userDetails$.subscribe(u=>{this.userDetails=u,console.log(u),this.userName=u?.username});const o=new Date,m=(o.getMonth(),o.getFullYear(),new Date(o));m.setDate(o.getDate()-14);const f=this.formatDate(m),_=this.formatDate(o);this.categoryWisePurchaseForm=new g.cw({start:new g.NI(f,this.commonService.dateRangeValidator(this.financialYear)),end:new g.NI(_,this.commonService.dateRangeValidator(this.financialYear)),category:new g.NI}),this.commonService.validateAndClearDates(this.categoryWisePurchaseForm,this.minDate,this.maxDate),this.startDate=this.categoryWisePurchaseForm.value?.start,this.endDate=this.categoryWisePurchaseForm.value?.end,this.category=this.categoryWisePurchaseForm.value?.category,this.getCategoryWisePurchase(),this.getCategory(),this.filteredCategory=this.categoryControl.valueChanges.pipe((0,r.O)(""),(0,l.U)(u=>{const x="string"==typeof u?u:u?.title;return x?this._filter2(x):this.categoryList.slice()}))}getproductHistory(){throw new Error("Method not implemented.")}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}displayFn(e){return e&&e?.title?e?.title:""}_filter2(e){const a=e?e.toLowerCase():"";return console.log(a),this.categoryList.filter(o=>o?.title&&o.title.toLowerCase().includes(a))}displayFn2(e){return e&&e?.title?e?.title:""}displayFn3(e){return e&&e?.title?e?.title:""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.productList=e})}search(){if(""===this.titlee)this.getCategoryWisePurchase();else{const e=this.titlee.toLocaleLowerCase();this.categoryWisePurchaseList=this.categoryWisePurchaseList.filter(a=>{const o=a?.user?.party_name.toLocaleLowerCase(),c=a?.payment_voucher_no.toLocaleLowerCase()||"";return!(!o.includes(e)&&!c.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,a,o){const c=(e-1)*a;return`Showing ${c+1}\u2013${Math.min(c+a-1,o-1)+1} of ${o} results`}getCategoryWisePurchase(){this.reportService.getCategoryWisePurchase(this.startDate,this.endDate,this.category,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.categoryWisePurchaseList=e})}oncheckCategory(e){console.log(e),this.dataId=e,this.categoryWisePurchaseForm.patchValue({category:e}),console.warn(this.categoryWisePurchaseForm.value),this.category=this.categoryWisePurchaseForm.value?.category,this?.getCategoryWisePurchase()}getSelectedCategoryWisePurchaseDates(){console.log(this.categoryWisePurchaseForm.value);const e=this.datepipe.transform(this.categoryWisePurchaseForm.value.start,"yyyy-MM-dd"),a=this.datepipe.transform(this.categoryWisePurchaseForm.value.end,"yyyy-MM-dd");console.log(e),console.log(a),this.startDate=e,this.endDate=a,this?.getCategoryWisePurchase()}getCategory(){this.coreService.getCategory().subscribe(e=>{console.log(e),this.categoryList=e})}generatePDFAgain(){const e=new C.default("landscape"),c=`Date Range From: ${this.startDate} - ${this.endDate}`,p=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Category Wise Purchase Report",82,10),e.text(p,10,18),e.text(c,10,22),e.text("",10,25);const f=[];let _=1;this.categoryWisePurchaseList.forEach(u=>{console.warn(u);const x=u.user.party_name,ht=u.check_gst,pt=u.total,ut=u.bill_date;let b=!0;u.data.forEach((y,mt)=>{console.log(y),f.push([b?_:"",b?x:"",b?ht:"",b?pt:"",this.formatDate(b?ut:""),y.barcode.variant_name,y.barcode.sku,y.barcode.product.title,y.barcode.product.category,y.barcode.product.subcategory,y.barcode.product.brand,y.qty,y.unit_cost,y.mrp,y.discount,y.tax,y.landing_cost,y.total]),b=!1}),_++}),i()(e,{head:[["#","User","Check Gst","Total","Bill Date","Variant Name","Sku","Title","Category","Subcategory","Brand","Qty","Unit Cost","Mrp","Discount","Tax","Landing Cost","Total"]],body:f,theme:"grid",startY:32,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),e.save("Category_wise_Purchase .pdf")}getVisibleDataFromTable(){const e=[],a=document.getElementById("mytable");if(a){const o=a.querySelector("thead tr");if(o){const p=[];o.querySelectorAll("th").forEach(m=>{const f=m.textContent?.trim();f&&"Is Active"!==f&&"Action"!==f&&p.push(f)}),e.push(p)}a.querySelectorAll("tbody tr").forEach(p=>{const m=[];p.querySelectorAll("td").forEach(f=>{const _=f.textContent?.trim();_&&m.push(_)}),e.push(m)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),a=h.P6.aoa_to_sheet(e),o=h.P6.book_new();h.P6.book_append_sheet(o,a,"Sheet1");const c=h.cW(o,{bookType:"xlsx",type:"array"}),p=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,w.saveAs)(p,"Stockalert.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const o=document.querySelector(".titl");if(!o)return void console.error("Title element with class 'titl' not found.");const c=o.outerHTML,m=e.cloneNode(!0).outerHTML,_="<style>.spaced-title { margin-top: 80px; }</style>"+c.replace("titl","spaced-title")+m,u=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=_,window.print(),document.body.innerHTML=u}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.categoryWisePurchaseList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,a){if(a)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const o=this.selectData.findIndex(c=>c==e);console.log(o),-1!==o&&this.selectData.splice(o,1),this.ngOnInit(),console.log(this.selectData)}}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z.F0),t.Y36(g.qu),t.Y36(P._W),t.Y36(B.p),t.Y36(N.x),t.Y36(F.J),t.Y36(v.uU),t.Y36(I.r),t.Y36(J.p),t.Y36(E.R))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-category-wise-purchase"]],decls:122,vars:19,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-5","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"form-group"],["type","text","placeholder","Enter Product",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img",2,"max-width","none"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img",2,"max-width","none"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%"],[1,"thone",2,"padding-left","30px","padding-right","64px"],[1,"thone",2,"width","10%","padding-left","40px"],[1,"thone",2,"width","10%","padding-right","-1px","white-space","pre-wrap"],[1,"thone",2,"width","10%","padding-left","15px","padding-right","15px"],[1,"thone",2,"width","10%","white-space","pre-wrap"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[3,"value","blur"],[4,"ngFor","ngForOf"],["colspan","13"],[1,"nested-table"],[2,"width","10%","white-space","pre-wrap"],[2,"padding-left","35px","padding-right","20px"],[2,"width","10%"],[2,"width","7%"],["colspan","10"],[1,"text-center"]],template:function(e,a){if(1&e){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Category Wise Purchase"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Category Wise Purchase"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,j,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return a.getSelectedCategoryWisePurchaseDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return a.getSelectedCategoryWisePurchaseDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",14)(33,"div",24)(34,"strong"),t._uU(35,"Select Category"),t.qZA(),t._UZ(36,"input",25),t.TgZ(37,"mat-autocomplete",26,27),t.YNc(39,H,2,2,"mat-option",28),t.ALo(40,"async"),t.qZA()()()()()(),t.TgZ(41,"div",29)(42,"ul")(43,"li")(44,"a",30),t.NdJ("click",function(){return a.generatePDFAgain()}),t._UZ(45,"img",31),t.qZA()(),t.TgZ(46,"li")(47,"a",32),t.NdJ("click",function(){return a.exportToExcel()}),t._UZ(48,"img",33),t.qZA()(),t.TgZ(49,"li")(50,"a",34),t.NdJ("click",function(){return a.printTable()}),t._UZ(51,"img",35),t.qZA()()()()(),t.TgZ(52,"div",36)(53,"table",37)(54,"thead")(55,"tr")(56,"th",38),t.NdJ("click",function(){return a.sort("id")}),t._uU(57,"#"),t._UZ(58,"i",39),t.qZA(),t.TgZ(59,"th",38),t.NdJ("click",function(){return a.sort("id")}),t._uU(60,"User "),t._UZ(61,"i",39),t.qZA(),t.TgZ(62,"th",38),t.NdJ("click",function(){return a.sort("id")}),t._uU(63,"Check Gst "),t._UZ(64,"i",39),t.qZA(),t.TgZ(65,"th",38),t.NdJ("click",function(){return a.sort("id")}),t._uU(66,"Total "),t._UZ(67,"i",39),t.qZA(),t.TgZ(68,"th",38),t.NdJ("click",function(){return a.sort("id")}),t._uU(69,"Bill Date "),t._UZ(70,"i",39),t.qZA(),t.TgZ(71,"th",40),t._uU(72,"Variant Name "),t.qZA(),t.TgZ(73,"th",41),t._uU(74,"Sku "),t.qZA(),t.TgZ(75,"th",40),t._uU(76,"Title "),t.qZA(),t.TgZ(77,"th",42),t._uU(78,"Category"),t.qZA(),t.TgZ(79,"th",43),t._uU(80,"Sub Category "),t.qZA(),t.TgZ(81,"th",40),t._uU(82,"Brand"),t.qZA(),t.TgZ(83,"th",44),t._uU(84,"Qty "),t.qZA(),t.TgZ(85,"th",40),t._uU(86,"Unit Cost "),t.qZA(),t.TgZ(87,"th",40),t._uU(88,"Mrp "),t.qZA(),t.TgZ(89,"th",40),t._uU(90,"Discount "),t.qZA(),t.TgZ(91,"th",40),t._uU(92,"Tax"),t.qZA(),t.TgZ(93,"th",45),t._uU(94,"Landing Cost "),t.qZA(),t.TgZ(95,"th",40),t._uU(96,"Total"),t.qZA()()(),t.YNc(97,K,4,11,"tbody",46),t.YNc(98,X,5,0,"tbody",46),t.qZA(),t.TgZ(99,"div",6)(100,"div",47)(101,"div",48),t._uU(102," Show per page "),t.TgZ(103,"select",49,50),t.NdJ("ngModelChange",function(p){return a.itemsPerPage=p})("change",function(){t.CHM(o);const p=t.MAs(104);return t.KtG(a.changePg(p.value))}),t.TgZ(105,"option",51),t._uU(106,"10"),t.qZA(),t.TgZ(107,"option",52),t._uU(108,"20"),t.qZA(),t.TgZ(109,"option",53),t._uU(110,"30"),t.qZA(),t.TgZ(111,"option",54),t._uU(112,"50"),t.qZA(),t.TgZ(113,"option",55),t._uU(114,"100"),t.qZA(),t.TgZ(115,"option",56),t._uU(116,"All"),t.qZA()()()(),t.TgZ(117,"div",57)(118,"div",58)(119,"pagination-controls",59),t.NdJ("pageChange",function(p){return a.p=p}),t.qZA(),t.TgZ(120,"div",60),t._uU(121),t.qZA()()()()()()()()()}if(2&e){const o=t.MAs(31),c=t.MAs(38);t.xp6(11),t.Q6J("ngIf",a.isAdmin),t.xp6(5),t.Q6J("formGroup",a.categoryWisePurchaseForm),t.xp6(7),t.Q6J("formGroup",a.categoryWisePurchaseForm)("rangePicker",o)("min",a.minDate)("max",a.maxDate),t.xp6(6),t.Q6J("for",o),t.xp6(7),t.Q6J("formControl",a.categoryControl)("matAutocomplete",c),t.xp6(1),t.Q6J("displayWith",a.displayFn2),t.xp6(2),t.Q6J("ngForOf",t.lcZ(40,17,a.filteredCategory)),t.xp6(58),t.Q6J("ngIf",(null==a.categoryWisePurchaseList?null:a.categoryWisePurchaseList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==a.categoryWisePurchaseList?null:a.categoryWisePurchaseList.length)),t.xp6(5),t.Q6J("ngModel",a.itemsPerPage),t.xp6(18),t.lnq(" Showing ",a.itemsPerPage," to ",null==a.categoryWisePurchaseList?null:a.categoryWisePurchaseList.length," of ",a.p," entries ")}},dependencies:[v.sg,v.O5,g._Y,g.YN,g.Kr,g.Fj,g.EJ,g.JJ,g.JL,g.On,g.oH,g.sg,g.u,D.LS,O.XC,O.ZL,S.ey,M.KE,M.R9,T.nW,T.wx,T.zY,T.By,T._g,v.Ov,v.JJ,v.uU,D._s,Y.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}table[_ngcontent-%COMP%]{width:100%}.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{vertical-align:super}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),n})()}];let et=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[Z.Bz.forChild(tt),Z.Bz]}),n})();var it=s(44144),rt=s(3056),at=s(87078),$=s(86323),A=s(92642),ot=s(95113),nt=s(64155),st=s(6205),L=s(8468);const lt={User:A.n5m,UserCheck:A.uS3,FileText:A.acj,File:A.$BE};let ct=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[v.uU],imports:[v.ez,et,L.I,g.u5,g.UX,O.Bb,M.lN,it.c,rt.ZQ,at.T,T.FA,M.lN,S.XK,ot.LD,nt.vQ,L.I,st.X,$.p.pick(lt),$.p]}),n})()}}]);