"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9998],{53506:($,T,l)=>{l.d(T,{x:()=>M});var y=l(92340),C=l(94650),d=l(80529);let M=(()=>{class v{constructor(e){this.http=e,this.apiUrl=`${y.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(e){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+e)}getPurchaseFY(e,r){console.log(r,"branch"),console.log(r.length,"branch");let s=this.apiUrl+"/pv-api/purchase_order/";const p=[];if(e&&p.push(`financial_year=${e}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(e){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",e)}getPurchaseById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}PurchaseIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,r)}updatePurchase(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,e)}deletePurchase(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+e)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(e,r){console.log(r,"branch"),console.log(r.length,"branch");let s=this.apiUrl+"/pv-api/material_inward/";const p=[];if(e&&p.push(`financial_year=${e}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(e){return this.http.post(this.apiUrl+"/pv-api/material_inward/",e)}getMaterialById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getMaterialByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${e}`)}MaterialIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,r)}updateMaterial(e,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,e)}deleteMaterial(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getPurchaseBillFY(e,r){console.log(r,"branch"),console.log(r.length,"branch");let s=this.apiUrl+"/pv-api/purchase_bill/";const p=[];if(e&&p.push(`financial_year=${e}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(e){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",e)}getPurchaseBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getPurchaseBillByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${e}`)}PurchaseBillIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,r)}updatePurchaseBill(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,e)}deletePurchaseBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getDebitNotes(e,r){console.log(r,"branch"),console.log(r.length,"branch");let s=this.apiUrl+"/pv-api/debit_note/";const p=[];if(e&&p.push(`financial_year=${e}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}addDebitNotes(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}getDebitNotesById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNotesIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,r)}updateDebitNotes(e,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,e)}deleteDebitNotes(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(e,r){console.log(r,"branch"),console.log(r.length,"branch");let s=this.apiUrl+"/pv-api/purchase_return/";const p=[];if(e&&p.push(`financial_year=${e}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(s+="?"+p.join("&")),this.http.get(s)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",e)}getPurchaseReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}PurchaseReturnIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,r)}updatePurchaseReturn(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,e)}deletePurchaseReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}filterVariant(e,r,s,p){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const _=[];return e&&_.push(`supplier=${e}`),r&&_.push(`category=${r}`),s&&_.push(`subcategory=${s}`),p&&_.push(`search=${p}`),_.length>0&&(t+="?"+_.join("&")),this.http.get(t)}}return v.\u0275fac=function(e){return new(e||v)(C.LFG(d.eN))},v.\u0275prov=C.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},69998:($,T,l)=>{l.r(T),l.d(T,{SaleReturnModule:()=>rt});var y=l(36895),C=l(4392),d=l(24006),M=l(68675),v=l(54004),b=l(96166),e=l(12983),r=l.n(e),s=l(80574),p=l(94327),t=l(94650),_=l(97185),O=l(71071),w=l(53506),L=l(42917),N=l(87719),B=l(43443),R=l(54333),Z=l(59549),P=l(99602),I=l(54040);function q(o,g){if(1&o){const i=t.EpF();t.TgZ(0,"a",58)(1,"input",59,60),t.NdJ("change",function(a){const u=t.CHM(i).$implicit,h=t.oxw(2);return t.KtG(h.SelectedBranch(u.id,a.target.checked))}),t.qZA(),t.TgZ(3,"label",61),t.NdJ("click",function(a){t.CHM(i);const c=t.oxw(2);return t.KtG(c.onLabelClick(a))}),t._uU(4),t.qZA()()}if(2&o){const i=g.$implicit,n=g.index,a=t.oxw(2);t.xp6(1),t.Q6J("value",i.id)("checked",a.selectData.includes(i.id))("id","checkboxCat-"+n),t.xp6(2),t.Q6J("for","checkboxCat-"+n),t.xp6(1),t.Oqu(i.title)}}function F(o,g){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const i=t.oxw(2);t.xp6(1),t.Oqu(i.selectData.length+" Selected")}}const J=function(){return{standalone:!0}};function E(o,g){if(1&o){const i=t.EpF();t.TgZ(0,"div",51)(1,"div",52)(2,"button",53),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",54)(5,"li")(6,"input",55),t.NdJ("ngModelChange",function(a){t.CHM(i);const c=t.oxw();return t.KtG(c.searchBranch=a)})("ngModelChange",function(){t.CHM(i);const a=t.oxw();return t.KtG(a.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,q,5,5,"a",56),t.qZA()()(),t.TgZ(9,"div",57),t.YNc(10,F,2,1,"span",36),t.qZA()()}if(2&o){const i=t.oxw();t.xp6(6),t.Q6J("ngModel",i.searchBranch)("ngModelOptions",t.DdM(4,J)),t.xp6(2),t.Q6J("ngForOf",i.filteredBranchList),t.xp6(2),t.Q6J("ngIf",i.selectData.length>0)}}function Y(o,g){if(1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA()()),2&o){const i=g.$implicit,n=g.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(i.party_name.party_name),t.xp6(2),t.Oqu(i.voucher_no),t.xp6(2),t.Oqu(i.variant_name),t.xp6(2),t.Oqu(i.product_name),t.xp6(2),t.Oqu(i.lending_cost),t.xp6(2),t.Oqu(i.mrp),t.xp6(2),t.Oqu(i.qty),t.xp6(2),t.Oqu(i.deduction),t.xp6(2),t.Oqu(i.tax),t.xp6(2),t.Oqu(i.amount)}}const k=function(o,g){return{itemsPerPage:o,currentPage:g}};function H(o,g){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,Y,23,11,"tr",62),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.purchaseRegisterList,i.key,i.reverse),t.WLB(8,k,i.itemsPerPage,i.p)))}}const Q=[{path:"",component:(()=>{class o{constructor(i,n,a,c,u,h,f,x,m){this.router=i,this.fb=n,this.toastr=a,this.transactionService=c,this.purchaseService=u,this.cs=h,this.datepipe=f,this.reportService=x,this.commonService=m,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new d.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let m=localStorage.getItem("financialYear");console.warn(JSON.parse(m));let S=JSON.parse(m);this.fyID=S}this.financialYear=localStorage.getItem("financialYear");const{minDate:i,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=i,this.maxDate=n,this.cs.userDetails$.subscribe(m=>{this.isAdmin="admin"==m.role,this.getBranch()}),this.cs.userDetails$.subscribe(m=>{this.userDetails=m,console.log(m),this.userName=m?.username});const a=new Date,h=(a.getMonth(),a.getFullYear(),new Date(a));h.setDate(a.getDate()-14);const f=this.formatDate(h),x=this.formatDate(a);this.purchaseRegisterForm=new d.cw({start:new d.NI(f,this.commonService.dateRangeValidator(this.financialYear)),end:new d.NI(x,this.commonService.dateRangeValidator(this.financialYear))}),this.commonService.validateAndClearDates(this.purchaseRegisterForm,this.minDate,this.maxDate),this.startDate=this.purchaseRegisterForm.value?.start,this.endDate=this.purchaseRegisterForm.value?.end,this.getPurchaseRegister(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,M.O)(""),(0,v.U)(m=>{const S="string"==typeof m?m:m?.detail?.name;return S?this._filter(S):this.suppliers.slice()}))}formatDate(i){return this.datepipe.transform(i,"yyyy-MM-dd")||""}_filter(i){const n=i?i.toLowerCase():"";return console.log(n),this.suppliers.filter(a=>a?.detail?.name.toLowerCase().includes(n)||a?.detail?.company_name?.toLowerCase().includes(n)||a?.account?.account_id?.toLowerCase().includes(n))}displayFn(i){return i&&i?.detail?.company_name?i?.detail?.company_name:""}search(){if(""===this.titlee)this.getPurchaseRegister();else{const i=this.titlee.toLocaleLowerCase();this.purchaseRegisterList=this.purchaseRegisterList.filter(n=>{const a=n?.user?.party_name.toLocaleLowerCase(),c=n?.payment_voucher_no.toLocaleLowerCase()||"";return!(!a.includes(i)&&!c.includes(i))})}}sort(i){this.key=i,this.reverse=!this.reverse}selectAll(i){this.countryList.forEach(i?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(i,n,a){const c=(i-1)*n;return`Showing ${c+1}\u2013${Math.min(c+n-1,a-1)+1} of ${a} results`}getPurchaseRegister(){this.reportService.getSaleReturn(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(i=>{console.log(i),this.purchaseRegister=i,this.purchaseRegisterList=i})}oncheckAccount(i){console.log(i),this.dataId=i,this.purchaseRegisterForm.patchValue({user_id:this.dataId}),console.warn(this.purchaseRegisterForm.value),this?.getPurchaseRegister()}getSelectedpurchaseRegisterDates(){console.log(this.purchaseRegisterForm.value);const i=this.datepipe.transform(this.purchaseRegisterForm.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.purchaseRegisterForm.value.end,"yyyy-MM-dd");console.log(i),console.log(n),this.startDate=i,this.endDate=n,this?.getPurchaseRegister()}generatePDFAgain(){const i=new b.default("landscape"),c=`Date Range From: ${this.startDate} - ${this.endDate}`,u=`User: ${this.userName}`;i.setFontSize(12),i.setTextColor(33,43,54),i.text("PV",86,5),i.text("Sale Return Report",82,10),i.text(u,10,18),i.text(c,10,22),i.text("",10,25),r()(i,{head:[["#","PartyName","VoucherNo","VariantName ","ProductName","Lending Cost","Mrp","Qty","Deduction","Tax","Amount"]],body:this.purchaseRegisterList.map((h,f)=>[f+1,h.party_name.party_name,h.voucher_no,h.variant_name,h.product_name,h.lending_cost,h.mrp,h.qty,h.deduction,h.tax,h.amount]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),i.save("sale_Return.pdf")}getVisibleDataFromTable(){const i=[],n=document.getElementById("mytable");if(n){const a=n.querySelector("thead tr");if(a){const u=[];a.querySelectorAll("th").forEach(h=>{const f=h.textContent?.trim();f&&"Is Active"!==f&&"Action"!==f&&u.push(f)}),i.push(u)}n.querySelectorAll("tbody tr").forEach(u=>{const h=[];u.querySelectorAll("td").forEach(f=>{const x=f.textContent?.trim();x&&h.push(x)}),i.push(h)})}return i}exportToExcel(){const i=this.getVisibleDataFromTable(),n=s.P6.aoa_to_sheet(i),a=s.P6.book_new();s.P6.book_append_sheet(a,n,"Sheet1");const c=s.cW(a,{bookType:"xlsx",type:"array"}),u=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,p.saveAs)(u,"salereturn.xlsx")}printTable(){const i=document.getElementById("mytable");if(!i)return void console.error("Table element with ID 'mytable' not found.");const a=document.querySelector(".titl");if(!a)return void console.error("Title element with class 'titl' not found.");const c=a.outerHTML,h=i.cloneNode(!0).outerHTML,x="<style>.spaced-title { margin-top: 80px; }</style>"+c.replace("titl","spaced-title")+h,m=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=x,window.print(),document.body.innerHTML=m}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.purchaseRegisterList?.length)}getBranch(){this.reportService.getBranch().subscribe(i=>{this.branchList=i,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(i=>i.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(i,n){if(n)console.log(i),this.selectData.push(i),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const a=this.selectData.findIndex(c=>c==i);console.log(a),-1!==a&&this.selectData.splice(a,1),this.ngOnInit(),console.log(this.selectData)}}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(C.F0),t.Y36(d.qu),t.Y36(_._W),t.Y36(O.p),t.Y36(w.x),t.Y36(L.J),t.Y36(y.uU),t.Y36(N.r),t.Y36(B.R))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sale-return"]],decls:97,vars:12,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"]],template:function(i,n){if(1&i){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5," Sale Return"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Sale Return"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,E,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return n.getSelectedpurchaseRegisterDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return n.getSelectedpurchaseRegisterDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()()()()(),t.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(36,"img",26),t.qZA()(),t.TgZ(37,"li")(38,"a",27),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(39,"img",28),t.qZA()(),t.TgZ(40,"li")(41,"a",29),t.NdJ("click",function(){return n.printTable()}),t._UZ(42,"img",30),t.qZA()()()()(),t.TgZ(43,"div",31)(44,"table",32)(45,"thead")(46,"tr")(47,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(48,"#"),t._UZ(49,"i",34),t.qZA(),t.TgZ(50,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(51,"Party Name "),t._UZ(52,"i",34),t.qZA(),t.TgZ(53,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(54,"Voucher No."),t._UZ(55,"i",34),t.qZA(),t.TgZ(56,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(57,"Voucher Name"),t._UZ(58,"i",34),t.qZA(),t.TgZ(59,"th",35),t._uU(60,"Product Name >"),t.qZA(),t.TgZ(61,"th",35),t._uU(62,"Landing Cost"),t.qZA(),t.TgZ(63,"th",35),t._uU(64,"Mrp"),t.qZA(),t.TgZ(65,"th",35),t._uU(66,"Qty"),t.qZA(),t.TgZ(67,"th",35),t._uU(68,"Deduction "),t.qZA(),t.TgZ(69,"th",35),t._uU(70,"Tax "),t.qZA(),t.TgZ(71,"th",35),t._uU(72," Amount "),t.qZA()()(),t.YNc(73,H,4,11,"tbody",36),t.qZA(),t.TgZ(74,"div",6)(75,"div",37)(76,"div",38),t._uU(77," Show per page "),t.TgZ(78,"select",39,40),t.NdJ("ngModelChange",function(u){return n.itemsPerPage=u})("change",function(){t.CHM(a);const u=t.MAs(79);return t.KtG(n.changePg(u.value))}),t.TgZ(80,"option",41),t._uU(81,"10"),t.qZA(),t.TgZ(82,"option",42),t._uU(83,"20"),t.qZA(),t.TgZ(84,"option",43),t._uU(85,"30"),t.qZA(),t.TgZ(86,"option",44),t._uU(87,"50"),t.qZA(),t.TgZ(88,"option",45),t._uU(89,"100"),t.qZA(),t.TgZ(90,"option",46),t._uU(91,"All"),t.qZA()()()(),t.TgZ(92,"div",47)(93,"div",48)(94,"pagination-controls",49),t.NdJ("pageChange",function(u){return n.p=u}),t.qZA(),t.TgZ(95,"div",50),t._uU(96),t.qZA()()()()()()()()()}if(2&i){const a=t.MAs(31);t.xp6(11),t.Q6J("ngIf",n.isAdmin),t.xp6(5),t.Q6J("formGroup",n.purchaseRegisterForm),t.xp6(7),t.Q6J("formGroup",n.purchaseRegisterForm)("rangePicker",a)("min",n.minDate)("max",n.maxDate),t.xp6(6),t.Q6J("for",a),t.xp6(44),t.Q6J("ngIf",(null==n.purchaseRegisterList?null:n.purchaseRegisterList.length)>=0),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq(" Showing ",n.itemsPerPage," to ",null==n.purchaseRegisterList?null:n.purchaseRegisterList.length," of ",n.p," entries ")}},dependencies:[y.sg,y.O5,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.sg,d.u,R.LS,Z.KE,Z.R9,P.nW,P.wx,P.zY,P.By,P._g,R._s,I.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})()}];let V=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[C.Bz.forChild(Q),C.Bz]}),o})();var z=l(47957),j=l(44144),K=l(3056),G=l(87078),A=l(86323),U=l(92642),W=l(3238),X=l(95113),tt=l(64155),et=l(6205),D=l(8468);const it={User:U.n5m,UserCheck:U.uS3,FileText:U.acj,File:U.$BE};let rt=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[y.uU],imports:[y.ez,V,D.I,d.u5,d.UX,z.Bb,Z.lN,j.c,K.ZQ,G.T,P.FA,Z.lN,W.XK,X.LD,tt.vQ,D.I,et.X,A.p.pick(it),A.p]}),o})()}}]);