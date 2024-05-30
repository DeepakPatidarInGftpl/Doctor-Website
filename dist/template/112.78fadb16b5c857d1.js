"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[112],{53506:(B,T,c)=>{c.d(T,{x:()=>b});var _=c(92340),P=c(94650),g=c(80529);let b=(()=>{class v{constructor(r){this.http=r,this.apiUrl=`${_.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchaseFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let o=this.apiUrl+"/pv-api/purchase_order/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(o+="?"+p.join("&")),this.http.get(o)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(r){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",r)}getPurchaseById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}PurchaseIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,i)}updatePurchase(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,r)}deletePurchase(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+r)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let o=this.apiUrl+"/pv-api/material_inward/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(o+="?"+p.join("&")),this.http.get(o)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(r){return this.http.post(this.apiUrl+"/pv-api/material_inward/",r)}getMaterialById(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}MaterialIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,i)}updateMaterial(r,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,r)}deleteMaterial(r){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getPurchaseBillFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let o=this.apiUrl+"/pv-api/purchase_bill/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(o+="?"+p.join("&")),this.http.get(o)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(r){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",r)}getPurchaseBillById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}PurchaseBillIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,i)}updatePurchaseBill(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,r)}deletePurchaseBill(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getDebitNotes(r,i){console.log(i,"branch"),console.log(i.length,"branch");let o=this.apiUrl+"/pv-api/debit_note/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(o+="?"+p.join("&")),this.http.get(o)}addDebitNotes(r){return this.http.post(this.apiUrl+"/pv-api/debit_note/",r)}getDebitNotesById(r){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}DebitNotesIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,i)}updateDebitNotes(r,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,r)}deleteDebitNotes(r){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}getSearchProductById(r){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${r}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(r,i){console.log(i,"branch"),console.log(i.length,"branch");let o=this.apiUrl+"/pv-api/purchase_return/";const p=[];if(r&&p.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(o+="?"+p.join("&")),this.http.get(o)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",r)}getPurchaseReturnById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}PurchaseReturnIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,i)}updatePurchaseReturn(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,r)}deletePurchaseReturn(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}filterVariant(r,i,o,p){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const y=[];return r&&y.push(`supplier=${r}`),i&&y.push(`category=${i}`),o&&y.push(`subcategory=${o}`),p&&y.push(`search=${p}`),y.length>0&&(t+="?"+y.join("&")),this.http.get(t)}}return v.\u0275fac=function(r){return new(r||v)(P.LFG(g.eN))},v.\u0275prov=P.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},40112:(B,T,c)=>{c.r(T),c.d(T,{SalesByProductModule:()=>it});var _=c(36895),P=c(89299),g=c(24006),b=c(68675),v=c(54004),U=c(96166),r=c(12983),i=c.n(r),o=c(80574),p=c(94327),t=c(94650),y=c(97185),R=c(71071),w=c(53506),O=c(42917),$=c(87719),C=c(59549),x=c(99602),A=c(54333),L=c(54040);function D(l,m){if(1&l){const e=t.EpF();t.TgZ(0,"a",58)(1,"input",59,60),t.NdJ("change",function(a){const u=t.CHM(e).$implicit,d=t.oxw(2);return t.KtG(d.SelectedBranch(u.id,a.target.checked))}),t.qZA(),t.TgZ(3,"label",61),t.NdJ("click",function(a){t.CHM(e);const s=t.oxw(2);return t.KtG(s.onLabelClick(a))}),t._uU(4),t.qZA()()}if(2&l){const e=m.$implicit,n=m.index,a=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",a.selectData.includes(e.id))("id","checkboxCat-"+n),t.xp6(2),t.Q6J("for","checkboxCat-"+n),t.xp6(1),t.Oqu(e.title)}}function N(l,m){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&l){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const J=function(){return{standalone:!0}};function q(l,m){if(1&l){const e=t.EpF();t.TgZ(0,"div",51)(1,"div",52)(2,"button",53),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",54)(5,"li")(6,"input",55),t.NdJ("ngModelChange",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.searchBranch=a)})("ngModelChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,D,5,5,"a",56),t.qZA()()(),t.TgZ(9,"div",57),t.YNc(10,N,2,1,"span",36),t.qZA()()}if(2&l){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,J)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}const Z=function(l){return{"font-size":l}};function I(l,m){if(1&l&&(t.TgZ(0,"div",62)(1,"div",63)(2,"div",64)(3,"div",65)(4,"h4",66),t._uU(5),t.ALo(6,"number"),t.qZA(),t.TgZ(7,"h5"),t._uU(8,"Total Qty"),t.qZA()()()(),t.TgZ(9,"div",63)(10,"div",67)(11,"div",65)(12,"h4",66),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"h5"),t._uU(16,"Total Taxable Amount"),t.qZA()()()(),t.TgZ(17,"div",63)(18,"div",68)(19,"div",65)(20,"h4",66),t._uU(21),t.ALo(22,"number"),t.qZA(),t.TgZ(23,"h5"),t._uU(24,"Total Average Price"),t.qZA()()()(),t.TgZ(25,"div",63)(26,"div",69)(27,"div",65)(28,"h4",66),t._uU(29),t.ALo(30,"number"),t.qZA(),t.TgZ(31,"h5"),t._uU(32,"Total Amoount"),t.qZA()()()()()),2&l){const e=t.oxw();let n,a,s,u;t.xp6(4),t.Q6J("ngStyle",t.VKq(20,Z,(null==e.purchaseRegister||null==e.purchaseRegister.total_qty||null==(n=e.purchaseRegister.total_qty.toString())?null:n.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(6,8,null==e.purchaseRegister?null:e.purchaseRegister.total_qty,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(22,Z,(null==e.purchaseRegister||null==e.purchaseRegister.total_taxable_amount||null==(a=e.purchaseRegister.total_taxable_amount.toString())?null:a.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(14,11,null==e.purchaseRegister?null:e.purchaseRegister.total_taxable_amount,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(24,Z,(null==e.purchaseRegister||null==e.purchaseRegister.total_averege_price||null==(s=e.purchaseRegister.total_averege_price.toString())?null:s.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(22,14,null==e.purchaseRegister?null:e.purchaseRegister.total_averege_price,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(26,Z,(null==e.purchaseRegister||null==e.purchaseRegister.total_amount||null==(u=e.purchaseRegister.total_amount.toString())?null:u.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(30,17,null==e.purchaseRegister?null:e.purchaseRegister.total_amount,"1.2-2"),"")}}function F(l,m){if(1&l&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA()()),2&l){const e=m.$implicit,n=m.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(e.sku),t.xp6(2),t.Oqu(e.variant),t.xp6(2),t.Oqu(e.product),t.xp6(2),t.Oqu(e.total_qty),t.xp6(2),t.Oqu(e.taxable_amount),t.xp6(2),t.Oqu(e.averege_price),t.xp6(2),t.Oqu(e.total)}}const k=function(l,m){return{itemsPerPage:l,currentPage:m}};function E(l,m){if(1&l&&(t.TgZ(0,"tbody"),t.YNc(1,F,17,8,"tr",70),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&l){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.purchaseRegisterList,e.key,e.reverse),t.WLB(8,k,e.itemsPerPage,e.p)))}}function Y(l,m){1&l&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",71)(3,"p",72),t._uU(4,"Data not available"),t.qZA()()()())}const Q=[{path:"",component:(()=>{class l{constructor(e,n,a,s,u,d,h,f){this.router=e,this.fb=n,this.toastr=a,this.transactionService=s,this.purchaseService=u,this.cs=d,this.datepipe=h,this.reportService=f,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new g.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let h=localStorage.getItem("financialYear");console.warn(JSON.parse(h));let f=JSON.parse(h);this.fyID=f}this.cs.userDetails$.subscribe(h=>{this.isAdmin="admin"==h.role,this.getBranch()}),this.cs.userDetails$.subscribe(h=>{this.userDetails=h,console.log(h),this.userName=h?.username});const e=new Date,s=(e.getMonth(),e.getFullYear(),new Date(e));s.setDate(e.getDate()-14);const u=this.formatDate(s),d=this.formatDate(e);this.purchaseRegisterForm=new g.cw({start:new g.NI(u),end:new g.NI(d)}),this.startDate=this.purchaseRegisterForm.value?.start,this.endDate=this.purchaseRegisterForm.value?.end,this.getPurchaseRegister(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,b.O)(""),(0,v.U)(h=>{const f="string"==typeof h?h:h?.detail?.name;return f?this._filter(f):this.suppliers.slice()}))}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const n=e?e.toLowerCase():"";return console.log(n),this.suppliers.filter(a=>a?.detail?.name.toLowerCase().includes(n)||a?.detail?.company_name?.toLowerCase().includes(n)||a?.account?.account_id?.toLowerCase().includes(n))}displayFn(e){return e&&e?.detail?.company_name?e?.detail?.company_name:""}search(){if(""===this.titlee)this.getPurchaseRegister();else{const e=this.titlee.toLocaleLowerCase();this.purchaseRegisterList=this.purchaseRegisterList.filter(n=>{const a=n?.user?.party_name.toLocaleLowerCase(),s=n?.payment_voucher_no.toLocaleLowerCase()||"";return!(!a.includes(e)&&!s.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,n,a){const s=(e-1)*n;return`Showing ${s+1}\u2013${Math.min(s+n-1,a-1)+1} of ${a} results`}getPurchaseRegister(){this.reportService.getSalesByProduct(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.purchaseRegister=e,this.purchaseRegisterList=e?.data})}oncheckAccount(e){console.log(e),this.dataId=e,this.purchaseRegisterForm.patchValue({user_id:this.dataId}),console.warn(this.purchaseRegisterForm.value),this?.getPurchaseRegister()}getSelectedpurchaseRegisterDates(){console.log(this.purchaseRegisterForm.value);const e=this.datepipe.transform(this.purchaseRegisterForm.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.purchaseRegisterForm.value.end,"yyyy-MM-dd");console.log(e),console.log(n),this.startDate=e,this.endDate=n,this?.getPurchaseRegister()}generatePDFAgain(){const e=new U.default,s=`Date Range From: ${this.startDate} - ${this.endDate}`,u=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text(" Sales By Product",82,10),e.text(u,10,18),e.text(s,10,22),e.text("",10,25),i()(e,{head:[["#","Sku","Variant","Product","Total Qty","Taxable Amount","Averagr Price","Total"]],body:this.purchaseRegisterList.map((d,h)=>[h+1,d.sku,d.variant,d.product,d.total_qty,d.taxable_amount,d.averege_price,d.total]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Sales_By_Product.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable");if(n){const a=n.querySelector("thead tr");if(a){const u=[];a.querySelectorAll("th").forEach(d=>{const h=d.textContent?.trim();h&&"Is Active"!==h&&"Action"!==h&&u.push(h)}),e.push(u)}n.querySelectorAll("tbody tr").forEach(u=>{const d=[];u.querySelectorAll("td").forEach(h=>{const f=h.textContent?.trim();f&&d.push(f)}),e.push(d)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=o.P6.aoa_to_sheet(e),a=o.P6.book_new();o.P6.book_append_sheet(a,n,"Sheet1");const s=o.cW(a,{bookType:"xlsx",type:"array"}),u=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,p.saveAs)(u,"salebyproduct.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const a=document.querySelector(".titl");if(!a)return void console.error("Title element with class 'titl' not found.");const s=a.outerHTML,d=e.cloneNode(!0).outerHTML,f="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+d,nt=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=f,window.print(),document.body.innerHTML=nt}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.purchaseRegisterList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,n){if(n)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const a=this.selectData.findIndex(s=>s==e);console.log(a),-1!==a&&this.selectData.splice(a,1),this.ngOnInit(),console.log(this.selectData)}}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(P.F0),t.Y36(g.qu),t.Y36(y._W),t.Y36(R.p),t.Y36(w.x),t.Y36(O.J),t.Y36(_.uU),t.Y36($.r))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-sales-by-product"]],decls:97,vars:12,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[1,"row","container"],[1,"col-lg-2","col-sm-4","col-12","d-flex"],[1,"dash-count",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],[1,"dash-count","das1",2,"margin","0 0 10px"],[1,"dash-count","das3",2,"margin","0 0 10px"],[1,"dash-count","das4",2,"margin","0 0 10px"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(e,n){if(1&e){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Sales By Product"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Sales By Product"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,q,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return n.getSelectedpurchaseRegisterDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return n.getSelectedpurchaseRegisterDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()()()()(),t.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(36,"img",26),t.qZA()(),t.TgZ(37,"li")(38,"a",27),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(39,"img",28),t.qZA()(),t.TgZ(40,"li")(41,"a",29),t.NdJ("click",function(){return n.printTable()}),t._UZ(42,"img",30),t.qZA()()()()(),t.YNc(43,I,33,28,"div",31),t.TgZ(44,"div",32)(45,"table",33)(46,"thead")(47,"tr")(48,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(49,"#"),t._UZ(50,"i",35),t.qZA(),t.TgZ(51,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(52,"Sku"),t._UZ(53,"i",35),t.qZA(),t.TgZ(54,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(55,"Variant "),t._UZ(56,"i",35),t.qZA(),t.TgZ(57,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(58,"Product"),t._UZ(59,"i",35),t.qZA(),t.TgZ(60,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(61," Total Qty "),t._UZ(62,"i",35),t.qZA(),t.TgZ(63,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(64," Taxable Amount "),t._UZ(65,"i",35),t.qZA(),t.TgZ(66,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(67," Average Price "),t._UZ(68,"i",35),t.qZA(),t.TgZ(69,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(70,"Total "),t._UZ(71,"i",35),t.qZA()()(),t.YNc(72,E,4,11,"tbody",36),t.YNc(73,Y,5,0,"tbody",36),t.qZA(),t.TgZ(74,"div",6)(75,"div",37)(76,"div",38),t._uU(77," Show per page "),t.TgZ(78,"select",39,40),t.NdJ("ngModelChange",function(u){return n.itemsPerPage=u})("change",function(){t.CHM(a);const u=t.MAs(79);return t.KtG(n.changePg(u.value))}),t.TgZ(80,"option",41),t._uU(81,"10"),t.qZA(),t.TgZ(82,"option",42),t._uU(83,"20"),t.qZA(),t.TgZ(84,"option",43),t._uU(85,"30"),t.qZA(),t.TgZ(86,"option",44),t._uU(87,"50"),t.qZA(),t.TgZ(88,"option",45),t._uU(89,"100"),t.qZA(),t.TgZ(90,"option",46),t._uU(91,"All"),t.qZA()()()(),t.TgZ(92,"div",47)(93,"div",48)(94,"pagination-controls",49),t.NdJ("pageChange",function(u){return n.p=u}),t.qZA(),t.TgZ(95,"div",50),t._uU(96),t.qZA()()()()()()()()()}if(2&e){const a=t.MAs(31);t.xp6(11),t.Q6J("ngIf",n.isAdmin),t.xp6(5),t.Q6J("formGroup",n.purchaseRegisterForm),t.xp6(7),t.Q6J("formGroup",n.purchaseRegisterForm)("rangePicker",a),t.xp6(6),t.Q6J("for",a),t.xp6(14),t.Q6J("ngIf",n.purchaseRegister),t.xp6(29),t.Q6J("ngIf",(null==n.purchaseRegisterList?null:n.purchaseRegisterList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.purchaseRegisterList?null:n.purchaseRegisterList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq(" Showing ",n.itemsPerPage," to ",null==n.purchaseRegisterList?null:n.purchaseRegisterList.length," of ",n.p," entries ")}},dependencies:[_.sg,_.O5,_.PC,g._Y,g.YN,g.Kr,g.Fj,g.EJ,g.JJ,g.JL,g.On,g.sg,g.u,C.KE,C.R9,x.nW,x.wx,x.zY,x.By,x._g,A.LS,_.JJ,A._s,L.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),l})()}];let j=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[P.Bz.forChild(Q),P.Bz]}),l})();var H=c(47957),z=c(44144),V=c(3056),K=c(87078),M=c(86323),S=c(92642),G=c(3238),W=c(95113),X=c(64155),tt=c(6205),et=c(8468);const rt={User:S.n5m,UserCheck:S.uS3,FileText:S.acj,File:S.$BE};let it=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[_.uU],imports:[_.ez,j,g.u5,g.UX,H.Bb,C.lN,z.c,V.ZQ,K.T,x.FA,C.lN,G.XK,W.LD,X.vQ,et.I,tt.X,M.p.pick(rt),M.p]}),l})()}}]);