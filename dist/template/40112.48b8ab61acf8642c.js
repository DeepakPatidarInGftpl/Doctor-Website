"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[40112],{53506:(D,S,c)=>{c.d(S,{x:()=>B});var _=c(92340),x=c(94650),d=c(80529);let B=(()=>{class v{constructor(i){this.http=i,this.apiUrl=`${_.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(i){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+i)}getPurchaseFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let s=this.apiUrl+"/pv-api/purchase_order/";const p=[];if(i&&p.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(i){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+i)}addPurchase(i){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",i)}getPurchaseById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}PurchaseIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,r)}updatePurchase(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,i)}deletePurchase(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}searchProduct(i){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+i)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let s=this.apiUrl+"/pv-api/material_inward/";const p=[];if(i&&p.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(i){return this.http.post(this.apiUrl+"/pv-api/material_inward/",i)}getMaterialById(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getMaterialByUserId(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${i}`)}MaterialIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,r)}updateMaterial(i,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,i)}deleteMaterial(i){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getPurchaseBillFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let s=this.apiUrl+"/pv-api/purchase_bill/";const p=[];if(i&&p.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(i){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",i)}getPurchaseBillById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getPurchaseBillByUserId(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${i}`)}PurchaseBillIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,r)}updatePurchaseBill(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,i)}deletePurchaseBill(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getDebitNotes(i,r){console.log(r,"branch"),console.log(r.length,"branch");let s=this.apiUrl+"/pv-api/debit_note/";const p=[];if(i&&p.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}addDebitNotes(i){return this.http.post(this.apiUrl+"/pv-api/debit_note/",i)}getDebitNotesById(i){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}DebitNotesIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,r)}updateDebitNotes(i,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,i)}deleteDebitNotes(i){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}getSearchProductById(i){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${i}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(i,r){console.log(r,"branch"),console.log(r.length,"branch");let s=this.apiUrl+"/pv-api/purchase_return/";const p=[];if(i&&p.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(i){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",i)}getPurchaseReturnById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}PurchaseReturnIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,r)}updatePurchaseReturn(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,i)}deletePurchaseReturn(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}filterVariant(i,r,s,p){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const y=[];return i&&y.push(`supplier=${i}`),r&&y.push(`category=${r}`),s&&y.push(`subcategory=${s}`),p&&y.push(`search=${p}`),y.length>0&&(t+="?"+y.join("&")),this.http.get(t)}purchaseReturnStatusUpdate(i){return this.http.post(this.apiUrl+"/pv-api/purchase_return_status_update/",i)}}return v.\u0275fac=function(i){return new(i||v)(x.LFG(d.eN))},v.\u0275prov=x.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},40112:(D,S,c)=>{c.r(S),c.d(S,{SalesByProductModule:()=>lt});var _=c(36895),x=c(4392),d=c(24006),B=c(68675),v=c(54004),M=c(96166),i=c(12983),r=c.n(i),s=c(80574),p=c(94327),t=c(94650),y=c(97185),$=c(71071),w=c(53506),O=c(42917),L=c(87719),N=c(43443),C=c(59549),T=c(99602),A=c(54333),I=c(54040);function J(l,g){if(1&l){const e=t.EpF();t.TgZ(0,"a",58)(1,"input",59,60),t.NdJ("change",function(n){const u=t.CHM(e).$implicit,h=t.oxw(2);return t.KtG(h.SelectedBranch(u.id,n.target.checked))}),t.qZA(),t.TgZ(3,"label",61),t.NdJ("click",function(n){t.CHM(e);const o=t.oxw(2);return t.KtG(o.onLabelClick(n))}),t._uU(4),t.qZA()()}if(2&l){const e=g.$implicit,a=g.index,n=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",n.selectData.includes(e.id))("id","checkboxCat-"+a),t.xp6(2),t.Q6J("for","checkboxCat-"+a),t.xp6(1),t.Oqu(e.title)}}function q(l,g){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&l){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const F=function(){return{standalone:!0}};function k(l,g){if(1&l){const e=t.EpF();t.TgZ(0,"div",51)(1,"div",52)(2,"button",53),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",54)(5,"li")(6,"input",55),t.NdJ("ngModelChange",function(n){t.CHM(e);const o=t.oxw();return t.KtG(o.searchBranch=n)})("ngModelChange",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,J,5,5,"a",56),t.qZA()()(),t.TgZ(9,"div",57),t.YNc(10,q,2,1,"span",36),t.qZA()()}if(2&l){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,F)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}const Z=function(l){return{"font-size":l}};function Y(l,g){if(1&l&&(t.TgZ(0,"div",62)(1,"div",63)(2,"div",64)(3,"div",65)(4,"h4",66),t._uU(5),t.ALo(6,"number"),t.qZA(),t.TgZ(7,"h5"),t._uU(8,"Total Qty"),t.qZA()()()(),t.TgZ(9,"div",63)(10,"div",67)(11,"div",65)(12,"h4",66),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"h5"),t._uU(16,"Total Taxable Amount"),t.qZA()()()(),t.TgZ(17,"div",63)(18,"div",68)(19,"div",65)(20,"h4",66),t._uU(21),t.ALo(22,"number"),t.qZA(),t.TgZ(23,"h5"),t._uU(24,"Total Average Price"),t.qZA()()()(),t.TgZ(25,"div",63)(26,"div",69)(27,"div",65)(28,"h4",66),t._uU(29),t.ALo(30,"number"),t.qZA(),t.TgZ(31,"h5"),t._uU(32,"Total Amoount"),t.qZA()()()()()),2&l){const e=t.oxw();let a,n,o,u;t.xp6(4),t.Q6J("ngStyle",t.VKq(20,Z,(null==e.purchaseRegister||null==e.purchaseRegister.total_qty||null==(a=e.purchaseRegister.total_qty.toString())?null:a.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(6,8,null==e.purchaseRegister?null:e.purchaseRegister.total_qty,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(22,Z,(null==e.purchaseRegister||null==e.purchaseRegister.total_taxable_amount||null==(n=e.purchaseRegister.total_taxable_amount.toString())?null:n.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(14,11,null==e.purchaseRegister?null:e.purchaseRegister.total_taxable_amount,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(24,Z,(null==e.purchaseRegister||null==e.purchaseRegister.total_averege_price||null==(o=e.purchaseRegister.total_averege_price.toString())?null:o.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(22,14,null==e.purchaseRegister?null:e.purchaseRegister.total_averege_price,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(26,Z,(null==e.purchaseRegister||null==e.purchaseRegister.total_amount||null==(u=e.purchaseRegister.total_amount.toString())?null:u.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(30,17,null==e.purchaseRegister?null:e.purchaseRegister.total_amount,"1.2-2"),"")}}function E(l,g){if(1&l&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA()()),2&l){const e=g.$implicit,a=g.index;t.xp6(2),t.Oqu(a+1+"."),t.xp6(2),t.Oqu(e.sku),t.xp6(2),t.Oqu(e.variant),t.xp6(2),t.Oqu(e.product),t.xp6(2),t.Oqu(e.total_qty),t.xp6(2),t.Oqu(e.taxable_amount),t.xp6(2),t.Oqu(e.averege_price),t.xp6(2),t.Oqu(e.total)}}const Q=function(l,g){return{itemsPerPage:l,currentPage:g}};function j(l,g){if(1&l&&(t.TgZ(0,"tbody"),t.YNc(1,E,17,8,"tr",70),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&l){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.purchaseRegisterList,e.key,e.reverse),t.WLB(8,Q,e.itemsPerPage,e.p)))}}function H(l,g){1&l&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",71)(3,"p",72),t._uU(4,"Data not available"),t.qZA()()()())}const V=[{path:"",component:(()=>{class l{constructor(e,a,n,o,u,h,f,P,m){this.router=e,this.fb=a,this.toastr=n,this.transactionService=o,this.purchaseService=u,this.cs=h,this.datepipe=f,this.reportService=P,this.commonService=m,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new d.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let m=localStorage.getItem("financialYear");console.warn(JSON.parse(m));let b=JSON.parse(m);this.fyID=b}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:a}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=a,this.cs.userDetails$.subscribe(m=>{this.isAdmin="admin"==m.role,this.getBranch()}),this.cs.userDetails$.subscribe(m=>{this.userDetails=m,console.log(m),this.userName=m?.username});const n=new Date,h=(n.getMonth(),n.getFullYear(),new Date(n));h.setDate(n.getDate()-14);const f=this.formatDate(h),P=this.formatDate(n);this.purchaseRegisterForm=new d.cw({start:new d.NI(f,this.commonService.dateRangeValidator(this.financialYear)),end:new d.NI(P,this.commonService.dateRangeValidator(this.financialYear))}),this.commonService.validateAndClearDates(this.purchaseRegisterForm,this.minDate,this.maxDate),this.startDate=this.purchaseRegisterForm.value?.start,this.endDate=this.purchaseRegisterForm.value?.end,this.getPurchaseRegister(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,B.O)(""),(0,v.U)(m=>{const b="string"==typeof m?m:m?.detail?.name;return b?this._filter(b):this.suppliers.slice()}))}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const a=e?e.toLowerCase():"";return console.log(a),this.suppliers.filter(n=>n?.detail?.name.toLowerCase().includes(a)||n?.detail?.company_name?.toLowerCase().includes(a)||n?.account?.account_id?.toLowerCase().includes(a))}displayFn(e){return e&&e?.detail?.company_name?e?.detail?.company_name:""}search(){if(""===this.titlee)this.getPurchaseRegister();else{const e=this.titlee.toLocaleLowerCase();this.purchaseRegisterList=this.purchaseRegisterList.filter(a=>{const n=a?.user?.party_name.toLocaleLowerCase(),o=a?.payment_voucher_no.toLocaleLowerCase()||"";return!(!n.includes(e)&&!o.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,a,n){const o=(e-1)*a;return`Showing ${o+1}\u2013${Math.min(o+a-1,n-1)+1} of ${n} results`}getPurchaseRegister(){this.reportService.getSalesByProduct(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.purchaseRegister=e,this.purchaseRegisterList=e?.data})}oncheckAccount(e){console.log(e),this.dataId=e,this.purchaseRegisterForm.patchValue({user_id:this.dataId}),console.warn(this.purchaseRegisterForm.value),this?.getPurchaseRegister()}getSelectedpurchaseRegisterDates(){console.log(this.purchaseRegisterForm.value);const e=this.datepipe.transform(this.purchaseRegisterForm.value.start,"yyyy-MM-dd"),a=this.datepipe.transform(this.purchaseRegisterForm.value.end,"yyyy-MM-dd");console.log(e),console.log(a),this.startDate=e,this.endDate=a,this?.getPurchaseRegister()}generatePDFAgain(){const e=new M.default,o=`Date Range From: ${this.startDate} - ${this.endDate}`,u=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text(" Sales By Product",82,10),e.text(u,10,18),e.text(o,10,22),e.text("",10,25),r()(e,{head:[["#","Sku","Variant","Product","Total Qty","Taxable Amount","Averagr Price","Total"]],body:this.purchaseRegisterList.map((h,f)=>[f+1,h.sku,h.variant,h.product,h.total_qty,h.taxable_amount,h.averege_price,h.total]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Sales_By_Product.pdf")}getVisibleDataFromTable(){const e=[],a=document.getElementById("mytable");if(a){const n=a.querySelector("thead tr");if(n){const u=[];n.querySelectorAll("th").forEach(h=>{const f=h.textContent?.trim();f&&"Is Active"!==f&&"Action"!==f&&u.push(f)}),e.push(u)}a.querySelectorAll("tbody tr").forEach(u=>{const h=[];u.querySelectorAll("td").forEach(f=>{const P=f.textContent?.trim();P&&h.push(P)}),e.push(h)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),a=s.P6.aoa_to_sheet(e),n=s.P6.book_new();s.P6.book_append_sheet(n,a,"Sheet1");const o=s.cW(n,{bookType:"xlsx",type:"array"}),u=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,p.saveAs)(u,"salebyproduct.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const n=document.querySelector(".titl");if(!n)return void console.error("Title element with class 'titl' not found.");const o=n.outerHTML,h=e.cloneNode(!0).outerHTML,P="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+h,m=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=P,window.print(),document.body.innerHTML=m}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.purchaseRegisterList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,a){if(a)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const n=this.selectData.findIndex(o=>o==e);console.log(n),-1!==n&&this.selectData.splice(n,1),this.ngOnInit(),console.log(this.selectData)}}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(x.F0),t.Y36(d.qu),t.Y36(y._W),t.Y36($.p),t.Y36(w.x),t.Y36(O.J),t.Y36(_.uU),t.Y36(L.r),t.Y36(N.R))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-sales-by-product"]],decls:97,vars:14,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[1,"row","container"],[1,"col-lg-2","col-sm-4","col-12","d-flex"],[1,"dash-count",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],[1,"dash-count","das1",2,"margin","0 0 10px"],[1,"dash-count","das3",2,"margin","0 0 10px"],[1,"dash-count","das4",2,"margin","0 0 10px"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(e,a){if(1&e){const n=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Sales By Product"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Sales By Product"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,k,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return a.getSelectedpurchaseRegisterDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return a.getSelectedpurchaseRegisterDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()()()()(),t.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),t.NdJ("click",function(){return a.generatePDFAgain()}),t._UZ(36,"img",26),t.qZA()(),t.TgZ(37,"li")(38,"a",27),t.NdJ("click",function(){return a.exportToExcel()}),t._UZ(39,"img",28),t.qZA()(),t.TgZ(40,"li")(41,"a",29),t.NdJ("click",function(){return a.printTable()}),t._UZ(42,"img",30),t.qZA()()()()(),t.YNc(43,Y,33,28,"div",31),t.TgZ(44,"div",32)(45,"table",33)(46,"thead")(47,"tr")(48,"th",34),t.NdJ("click",function(){return a.sort("id")}),t._uU(49,"#"),t._UZ(50,"i",35),t.qZA(),t.TgZ(51,"th",34),t.NdJ("click",function(){return a.sort("id")}),t._uU(52,"Sku"),t._UZ(53,"i",35),t.qZA(),t.TgZ(54,"th",34),t.NdJ("click",function(){return a.sort("id")}),t._uU(55,"Variant "),t._UZ(56,"i",35),t.qZA(),t.TgZ(57,"th",34),t.NdJ("click",function(){return a.sort("id")}),t._uU(58,"Product"),t._UZ(59,"i",35),t.qZA(),t.TgZ(60,"th",34),t.NdJ("click",function(){return a.sort("id")}),t._uU(61," Total Qty "),t._UZ(62,"i",35),t.qZA(),t.TgZ(63,"th",34),t.NdJ("click",function(){return a.sort("id")}),t._uU(64," Taxable Amount "),t._UZ(65,"i",35),t.qZA(),t.TgZ(66,"th",34),t.NdJ("click",function(){return a.sort("id")}),t._uU(67," Average Price "),t._UZ(68,"i",35),t.qZA(),t.TgZ(69,"th",34),t.NdJ("click",function(){return a.sort("id")}),t._uU(70,"Total "),t._UZ(71,"i",35),t.qZA()()(),t.YNc(72,j,4,11,"tbody",36),t.YNc(73,H,5,0,"tbody",36),t.qZA(),t.TgZ(74,"div",6)(75,"div",37)(76,"div",38),t._uU(77," Show per page "),t.TgZ(78,"select",39,40),t.NdJ("ngModelChange",function(u){return a.itemsPerPage=u})("change",function(){t.CHM(n);const u=t.MAs(79);return t.KtG(a.changePg(u.value))}),t.TgZ(80,"option",41),t._uU(81,"10"),t.qZA(),t.TgZ(82,"option",42),t._uU(83,"20"),t.qZA(),t.TgZ(84,"option",43),t._uU(85,"30"),t.qZA(),t.TgZ(86,"option",44),t._uU(87,"50"),t.qZA(),t.TgZ(88,"option",45),t._uU(89,"100"),t.qZA(),t.TgZ(90,"option",46),t._uU(91,"All"),t.qZA()()()(),t.TgZ(92,"div",47)(93,"div",48)(94,"pagination-controls",49),t.NdJ("pageChange",function(u){return a.p=u}),t.qZA(),t.TgZ(95,"div",50),t._uU(96),t.qZA()()()()()()()()()}if(2&e){const n=t.MAs(31);t.xp6(11),t.Q6J("ngIf",a.isAdmin),t.xp6(5),t.Q6J("formGroup",a.purchaseRegisterForm),t.xp6(7),t.Q6J("formGroup",a.purchaseRegisterForm)("rangePicker",n)("min",a.minDate)("max",a.maxDate),t.xp6(6),t.Q6J("for",n),t.xp6(14),t.Q6J("ngIf",a.purchaseRegister),t.xp6(29),t.Q6J("ngIf",(null==a.purchaseRegisterList?null:a.purchaseRegisterList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==a.purchaseRegisterList?null:a.purchaseRegisterList.length)),t.xp6(5),t.Q6J("ngModel",a.itemsPerPage),t.xp6(18),t.lnq(" Showing ",a.itemsPerPage," to ",null==a.purchaseRegisterList?null:a.purchaseRegisterList.length," of ",a.p," entries ")}},dependencies:[_.sg,_.O5,_.PC,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.sg,d.u,C.KE,C.R9,T.nW,T.wx,T.zY,T.By,T._g,A.LS,_.JJ,A._s,I.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),l})()}];let z=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[x.Bz.forChild(V),x.Bz]}),l})();var K=c(47957),G=c(44144),W=c(3056),X=c(87078),R=c(86323),U=c(92642),tt=c(3238),et=c(95113),it=c(64155),rt=c(6205),at=c(8468);const nt={User:U.n5m,UserCheck:U.uS3,FileText:U.acj,File:U.$BE};let lt=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[_.uU],imports:[_.ez,z,d.u5,d.UX,K.Bb,C.lN,G.c,W.ZQ,X.T,T.FA,C.lN,tt.XK,et.LD,it.vQ,at.I,rt.X,R.p.pick(nt),R.p]}),l})()}}]);