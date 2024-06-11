"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8852],{53506:($,U,l)=>{l.d(U,{x:()=>R});var P=l(92340),Z=l(94650),g=l(80529);let R=(()=>{class T{constructor(r){this.http=r,this.apiUrl=`${P.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(r){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+r)}getPurchaseFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/purchase_order/";const h=[];if(r&&h.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(a+="?"+h.join("&")),this.http.get(a)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(r){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",r)}getPurchaseById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}PurchaseIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,i)}updatePurchase(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,r)}deletePurchase(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+r)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/material_inward/";const h=[];if(r&&h.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(a+="?"+h.join("&")),this.http.get(a)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(r){return this.http.post(this.apiUrl+"/pv-api/material_inward/",r)}getMaterialById(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}MaterialIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,i)}updateMaterial(r,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,r)}deleteMaterial(r){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getPurchaseBillFY(r,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/purchase_bill/";const h=[];if(r&&h.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(a+="?"+h.join("&")),this.http.get(a)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(r){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",r)}getPurchaseBillById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}PurchaseBillIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,i)}updatePurchaseBill(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,r)}deletePurchaseBill(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getDebitNotes(r,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/debit_note/";const h=[];if(r&&h.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(a+="?"+h.join("&")),this.http.get(a)}addDebitNotes(r){return this.http.post(this.apiUrl+"/pv-api/debit_note/",r)}getDebitNotesById(r){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}DebitNotesIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,i)}updateDebitNotes(r,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,r)}deleteDebitNotes(r){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}getSearchProductById(r){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${r}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(r,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/purchase_return/";const h=[];if(r&&h.push(`financial_year=${r}`),i&&i.length>0){const t=JSON.stringify(i);console.log(t),console.log(t?.length),h.push(`branch=${t}`)}return h.length>0&&(a+="?"+h.join("&")),this.http.get(a)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",r)}getPurchaseReturnById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}PurchaseReturnIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,i)}updatePurchaseReturn(r,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,r)}deletePurchaseReturn(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}filterVariant(r,i,a,h){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const v=[];return r&&v.push(`supplier=${r}`),i&&v.push(`category=${i}`),a&&v.push(`subcategory=${a}`),h&&v.push(`search=${h}`),v.length>0&&(t+="?"+v.join("&")),this.http.get(t)}}return T.\u0275fac=function(r){return new(r||T)(Z.LFG(g.eN))},T.\u0275prov=Z.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"}),T})()},98852:($,U,l)=>{l.r(U),l.d(U,{TaxWisePurchaseReturnModule:()=>at});var P=l(36895),Z=l(89299),g=l(24006),R=l(68675),T=l(54004),M=l(96166),r=l(12983),i=l.n(r),a=l(80574),h=l(94327),t=l(94650),v=l(97185),D=l(71071),L=l(53506),q=l(42917),N=l(87719),S=l(54333),b=l(59549),C=l(99602),I=l(54040);function B(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"a",60)(1,"input",61,62),t.NdJ("change",function(o){const u=t.CHM(e).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(u.id,o.target.checked))}),t.qZA(),t.TgZ(3,"label",63),t.NdJ("click",function(o){t.CHM(e);const c=t.oxw(2);return t.KtG(c.onLabelClick(o))}),t._uU(4),t.qZA()()}if(2&s){const e=d.$implicit,n=d.index,o=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",o.selectData.includes(e.id))("id","checkboxCat-"+n),t.xp6(2),t.Q6J("for","checkboxCat-"+n),t.xp6(1),t.Oqu(e.title)}}function W(s,d){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const F=function(){return{standalone:!0}};function J(s,d){if(1&s){const e=t.EpF();t.TgZ(0,"div",53)(1,"div",54)(2,"button",55),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",56)(5,"li")(6,"input",57),t.NdJ("ngModelChange",function(o){t.CHM(e);const c=t.oxw();return t.KtG(c.searchBranch=o)})("ngModelChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,B,5,5,"a",58),t.qZA()()(),t.TgZ(9,"div",59),t.YNc(10,W,2,1,"span",38),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,F)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function G(s,d){if(1&s&&(t.TgZ(0,"tr")(1,"td",66),t._uU(2),t.qZA(),t.TgZ(3,"td",66),t._uU(4),t.qZA(),t.TgZ(5,"td",66),t._uU(6),t.qZA(),t.TgZ(7,"td",66),t._uU(8),t.qZA(),t.TgZ(9,"td",66),t._uU(10),t.qZA(),t.TgZ(11,"td",66),t._uU(12),t.qZA(),t.TgZ(13,"td",66),t._uU(14),t.qZA(),t.TgZ(15,"td",66),t._uU(16),t.qZA(),t.TgZ(17,"td",66),t._uU(18),t.qZA(),t.TgZ(19,"td",66),t._uU(20),t.qZA(),t.TgZ(21,"td",66),t._uU(22),t.qZA(),t.TgZ(23,"td",66),t._uU(24),t.qZA()()),2&s){const e=d.$implicit;t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.voucher_type),t.xp6(2),t.Oqu(e.voucher_no),t.xp6(2),t.Oqu(e.hsn_code),t.xp6(2),t.Oqu(e.taxable),t.xp6(2),t.Oqu(e.CGST_rate),t.xp6(2),t.Oqu(e.CGST_amount),t.xp6(2),t.Oqu(e.SGST_rate),t.xp6(2),t.Oqu(e.SGST_amount),t.xp6(2),t.Oqu(e.IGST_rate),t.xp6(2),t.Oqu(e.IGST_amount),t.xp6(2),t.hij(" ",e.Tax_amount,"")}}function E(s,d){if(1&s&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td",65)(12,"table")(13,"tbody"),t.YNc(14,G,25,12,"tr",64),t.qZA()()()()),2&s){const e=d.$implicit,n=d.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.name),t.xp6(2),t.Oqu(e.voucher_no),t.xp6(2),t.Oqu(e.total_amount),t.xp6(4),t.Q6J("ngForOf",e.data)}}const Y=function(s,d){return{itemsPerPage:s,currentPage:d}};function k(s,d){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,E,15,6,"tr",64),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.purchaseRegisterList,e.key,e.reverse),t.WLB(8,Y,e.itemsPerPage,e.p)))}}function H(s,d){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",67)(3,"p",68),t._uU(4,"Data not available"),t.qZA()()()())}const V=[{path:"",component:(()=>{class s{constructor(e,n,o,c,u,m,p,f){this.router=e,this.fb=n,this.toastr=o,this.transactionService=c,this.purchaseService=u,this.cs=m,this.datepipe=p,this.reportService=f,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new g.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let p=localStorage.getItem("financialYear");console.warn(JSON.parse(p));let f=JSON.parse(p);this.fyID=f}this.cs.userDetails$.subscribe(p=>{this.isAdmin="admin"==p.role,this.getBranch()}),this.cs.userDetails$.subscribe(p=>{this.userDetails=p,console.log(p),this.userName=p?.username});const e=new Date,c=(e.getMonth(),e.getFullYear(),new Date(e));c.setDate(e.getDate()-14);const u=this.formatDate(c),m=this.formatDate(e);this.purchaseRegisterForm=new g.cw({start:new g.NI(u),end:new g.NI(m)}),this.startDate=this.purchaseRegisterForm.value?.start,this.endDate=this.purchaseRegisterForm.value?.end,this.getPurchaseRegister(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,R.O)(""),(0,T.U)(p=>{const f="string"==typeof p?p:p?.detail?.name;return f?this._filter(f):this.suppliers.slice()}))}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const n=e?e.toLowerCase():"";return console.log(n),this.suppliers.filter(o=>o?.detail?.name.toLowerCase().includes(n)||o?.detail?.company_name?.toLowerCase().includes(n)||o?.account?.account_id?.toLowerCase().includes(n))}displayFn(e){return e&&e?.detail?.company_name?e?.detail?.company_name:""}search(){if(""===this.titlee)this.getPurchaseRegister();else{const e=this.titlee.toLocaleLowerCase();this.purchaseRegisterList=this.purchaseRegisterList.filter(n=>{const o=n?.user?.party_name.toLocaleLowerCase(),c=n?.payment_voucher_no.toLocaleLowerCase()||"";return!(!o.includes(e)&&!c.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,n,o){const c=(e-1)*n;return`Showing ${c+1}\u2013${Math.min(c+n-1,o-1)+1} of ${o} results`}getPurchaseRegister(){this.reportService.getTaxWisePurchaseReturn(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.purchaseRegister=e,this.purchaseRegisterList=e})}oncheckAccount(e){console.log(e),this.dataId=e,this.purchaseRegisterForm.patchValue({user_id:this.dataId}),console.warn(this.purchaseRegisterForm.value),this?.getPurchaseRegister()}getSelectedpurchaseRegisterDates(){console.log(this.purchaseRegisterForm.value);const e=this.datepipe.transform(this.purchaseRegisterForm.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.purchaseRegisterForm.value.end,"yyyy-MM-dd");console.log(e),console.log(n),this.startDate=e,this.endDate=n,this?.getPurchaseRegister()}generatePDFAgain(){const e=new M.default("landscape"),c=`Date Range From: ${this.startDate} - ${this.endDate}`,u=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Tax Wise Purchase Return Report",82,10),e.text(u,10,18),e.text(c,10,22),e.text("",10,25);const p=[];let f=1;this.purchaseRegisterList.forEach(x=>{console.warn(x);const st=x.date,ot=x.name,lt=x.voucher_no,ct=x.total_amount;let y=!0;x.data.forEach((_,ut)=>{console.log(_),p.push([y?f:"",y?st:"",y?ot:"",y?lt:"",y?ct:"",_.date,_.voucher_type,_.voucher_no,_.hsn_code,_.taxable,_.CGST_rate,_.CGST_amount,_.SGST_rate,_.SGST_amount,_.IGST_rate,_.IGST_amount,_.Tax_amount]),y=!1}),f++}),i()(e,{head:[["#","Date","Name","Voucher No.","Total Amount","Date","Voucher Type","Voucher No.","Hsn Code","Taxable","CGST Rate","CGST Amount","SGST Rate","SGST Amount","IGST Rate","IGST Amount","Tax Amount"]],body:p,theme:"grid",startY:32,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),e.save("Tax_wise_Purchase_Return  .pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable");if(n){const o=n.querySelector("thead tr");if(o){const u=[];o.querySelectorAll("th").forEach(m=>{const p=m.textContent?.trim();p&&"Is Active"!==p&&"Action"!==p&&u.push(p)}),e.push(u)}n.querySelectorAll("tbody tr").forEach(u=>{const m=[];u.querySelectorAll("td").forEach(p=>{const f=p.textContent?.trim();f&&m.push(f)}),e.push(m)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=a.P6.aoa_to_sheet(e),o=a.P6.book_new();a.P6.book_append_sheet(o,n,"Sheet1");const c=a.cW(o,{bookType:"xlsx",type:"array"}),u=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(u,"taxwisepurchasereturn.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const o=document.querySelector(".titl");if(!o)return void console.error("Title element with class 'titl' not found.");const c=o.outerHTML,m=e.cloneNode(!0).outerHTML,f="<style>.spaced-title { margin-top: 80px; }</style>"+c.replace("titl","spaced-title")+m,x=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=f,window.print(),document.body.innerHTML=x}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.purchaseRegisterList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,n){if(n)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const o=this.selectData.findIndex(c=>c==e);console.log(o),-1!==o&&this.selectData.splice(o,1),this.ngOnInit(),console.log(this.selectData)}}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(Z.F0),t.Y36(g.qu),t.Y36(v._W),t.Y36(D.p),t.Y36(L.x),t.Y36(q.J),t.Y36(P.uU),t.Y36(N.r))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-tax-wise-purchase-return"]],decls:111,vars:11,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[1,"thone",2,"width","10%","padding-left","31px","padding-right","45px"],[1,"thone",2,"width","10%","white-space","pre-wrap","padding-right","60px"],[1,"thone",2,"width","10%","white-space","pre-wrap"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"],["colspan","12"],[2,"width","10%"],["colspan","10"],[1,"text-center"]],template:function(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Tax Wise Purchase Return"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Tax Wise Purchase Return"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,J,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return n.getSelectedpurchaseRegisterDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return n.getSelectedpurchaseRegisterDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()()()()(),t.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(36,"img",26),t.qZA()(),t.TgZ(37,"li")(38,"a",27),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(39,"img",28),t.qZA()(),t.TgZ(40,"li")(41,"a",29),t.NdJ("click",function(){return n.printTable()}),t._UZ(42,"img",30),t.qZA()()()()(),t.TgZ(43,"div",31)(44,"table",32)(45,"thead")(46,"tr")(47,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(48,"#"),t._UZ(49,"i",34),t.qZA(),t.TgZ(50,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(51,"Date "),t._UZ(52,"i",34),t.qZA(),t.TgZ(53,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(54,"Name"),t._UZ(55,"i",34),t.qZA(),t.TgZ(56,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(57,"Voucher No."),t._UZ(58,"i",34),t.qZA(),t.TgZ(59,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(60,"Total Amount"),t._UZ(61,"i",34),t.qZA(),t.TgZ(62,"th",35),t._uU(63,"Date "),t.qZA(),t.TgZ(64,"th",36),t._uU(65,"Voucher Type"),t.qZA(),t.TgZ(66,"th",37),t._uU(67,"Voucher No."),t.qZA(),t.TgZ(68,"th",37),t._uU(69,"Hsn Code"),t.qZA(),t.TgZ(70,"th",37),t._uU(71,"Taxable "),t.qZA(),t.TgZ(72,"th",37),t._uU(73,"CGST Rate "),t.qZA(),t.TgZ(74,"th",37),t._uU(75,"CGST Amount "),t.qZA(),t.TgZ(76,"th",37),t._uU(77,"SGST Rate "),t.qZA(),t.TgZ(78,"th",37),t._uU(79,"SGST Amount"),t.qZA(),t.TgZ(80,"th",37),t._uU(81,"IGST Rate "),t.qZA(),t.TgZ(82,"th",37),t._uU(83,"IGST Amount"),t.qZA(),t.TgZ(84,"th",37),t._uU(85,"Tax Amount"),t.qZA()()(),t.YNc(86,k,4,11,"tbody",38),t.YNc(87,H,5,0,"tbody",38),t.qZA(),t.TgZ(88,"div",6)(89,"div",39)(90,"div",40),t._uU(91," Show per page "),t.TgZ(92,"select",41,42),t.NdJ("ngModelChange",function(u){return n.itemsPerPage=u})("change",function(){t.CHM(o);const u=t.MAs(93);return t.KtG(n.changePg(u.value))}),t.TgZ(94,"option",43),t._uU(95,"10"),t.qZA(),t.TgZ(96,"option",44),t._uU(97,"20"),t.qZA(),t.TgZ(98,"option",45),t._uU(99,"30"),t.qZA(),t.TgZ(100,"option",46),t._uU(101,"50"),t.qZA(),t.TgZ(102,"option",47),t._uU(103,"100"),t.qZA(),t.TgZ(104,"option",48),t._uU(105,"All"),t.qZA()()()(),t.TgZ(106,"div",49)(107,"div",50)(108,"pagination-controls",51),t.NdJ("pageChange",function(u){return n.p=u}),t.qZA(),t.TgZ(109,"div",52),t._uU(110),t.qZA()()()()()()()()()}if(2&e){const o=t.MAs(31);t.xp6(11),t.Q6J("ngIf",n.isAdmin),t.xp6(5),t.Q6J("formGroup",n.purchaseRegisterForm),t.xp6(7),t.Q6J("formGroup",n.purchaseRegisterForm)("rangePicker",o),t.xp6(6),t.Q6J("for",o),t.xp6(57),t.Q6J("ngIf",(null==n.purchaseRegisterList?null:n.purchaseRegisterList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.purchaseRegisterList?null:n.purchaseRegisterList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq(" Showing ",n.itemsPerPage," to ",null==n.purchaseRegisterList?null:n.purchaseRegisterList.length," of ",n.p," entries ")}},dependencies:[P.sg,P.O5,g._Y,g.YN,g.Kr,g.Fj,g.EJ,g.JJ,g.JL,g.On,g.sg,g.u,S.LS,b.KE,b.R9,C.nW,C.wx,C.zY,C.By,C._g,S._s,I.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),s})()}];let Q=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[Z.Bz.forChild(V),Z.Bz]}),s})();var j=l(47957),z=l(44144),K=l(3056),X=l(87078),w=l(86323),A=l(92642),tt=l(3238),et=l(95113),rt=l(64155),it=l(6205),O=l(8468);const nt={User:A.n5m,UserCheck:A.uS3,FileText:A.acj,File:A.$BE};let at=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[P.uU],imports:[P.ez,Q,O.I,g.u5,g.UX,j.Bb,b.lN,z.c,K.ZQ,X.T,C.FA,b.lN,tt.XK,et.LD,rt.vQ,O.I,it.X,w.p.pick(nt),w.p]}),s})()}}]);