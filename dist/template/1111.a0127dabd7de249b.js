"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1111],{53506:(O,T,p)=>{p.d(T,{x:()=>Z});var _=p(92340),y=p(94650),h=p(80529);let Z=(()=>{class v{constructor(i){this.http=i,this.apiUrl=`${_.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(i){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+i)}getPurchaseFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let l=this.apiUrl+"/pv-api/purchase_order/";const c=[];if(i&&c.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(l+="?"+c.join("&")),this.http.get(l)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(i){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",i)}getPurchaseById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}PurchaseIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,r)}updatePurchase(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,i)}deletePurchase(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}searchProduct(i){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+i)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let l=this.apiUrl+"/pv-api/material_inward/";const c=[];if(i&&c.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(l+="?"+c.join("&")),this.http.get(l)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(i){return this.http.post(this.apiUrl+"/pv-api/material_inward/",i)}getMaterialById(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}MaterialIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,r)}updateMaterial(i,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,i)}deleteMaterial(i){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getPurchaseBillFY(i,r){console.log(r,"branch"),console.log(r.length,"branch");let l=this.apiUrl+"/pv-api/purchase_bill/";const c=[];if(i&&c.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(l+="?"+c.join("&")),this.http.get(l)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(i){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",i)}getPurchaseBillById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}PurchaseBillIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,r)}updatePurchaseBill(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,i)}deletePurchaseBill(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getDebitNotes(i,r){console.log(r,"branch"),console.log(r.length,"branch");let l=this.apiUrl+"/pv-api/debit_note/";const c=[];if(i&&c.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(l+="?"+c.join("&")),this.http.get(l)}addDebitNotes(i){return this.http.post(this.apiUrl+"/pv-api/debit_note/",i)}getDebitNotesById(i){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}DebitNotesIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,r)}updateDebitNotes(i,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,i)}deleteDebitNotes(i){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}getSearchProductById(i){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${i}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(i,r){console.log(r,"branch"),console.log(r.length,"branch");let l=this.apiUrl+"/pv-api/purchase_return/";const c=[];if(i&&c.push(`financial_year=${i}`),r&&r.length>0){const t=JSON.stringify(r);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(l+="?"+c.join("&")),this.http.get(l)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(i){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",i)}getPurchaseReturnById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}PurchaseReturnIsActive(i,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,r)}updatePurchaseReturn(i,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,i)}deletePurchaseReturn(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}filterVariant(i,r,l,c){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const C=[];return i&&C.push(`supplier=${i}`),r&&C.push(`category=${r}`),l&&C.push(`subcategory=${l}`),c&&C.push(`search=${c}`),C.length>0&&(t+="?"+C.join("&")),this.http.get(t)}}return v.\u0275fac=function(i){return new(i||v)(y.LFG(h.eN))},v.\u0275prov=y.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},71111:(O,T,p)=>{p.r(T),p.d(T,{CreditNoteRegisterModule:()=>ot});var _=p(36895),y=p(4392),h=p(24006),Z=p(68675),v=p(54004),P=p(96166),i=p(12983),r=p.n(i),l=p(80574),c=p(94327),t=p(94650),C=p(97185),$=p(71071),L=p(53506),I=p(42917),B=p(87719),F=p(43443),A=p(54333),M=p(47957),S=p(3238),U=p(59549),D=p(44144),N=p(99602),J=p(54040);function W(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"a",63)(1,"input",64,65),t.NdJ("change",function(o){const d=t.CHM(e).$implicit,u=t.oxw(2);return t.KtG(u.SelectedBranch(d.id,o.target.checked))}),t.qZA(),t.TgZ(3,"label",66),t.NdJ("click",function(o){t.CHM(e);const a=t.oxw(2);return t.KtG(a.onLabelClick(o))}),t._uU(4),t.qZA()()}if(2&s){const e=g.$implicit,n=g.index,o=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",o.selectData.includes(e.id))("id","checkboxCat-"+n),t.xp6(2),t.Q6J("for","checkboxCat-"+n),t.xp6(1),t.Oqu(e.title)}}function E(s,g){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const Y=function(){return{standalone:!0}};function q(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"div",56)(1,"div",57)(2,"button",58),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",59)(5,"li")(6,"input",60),t.NdJ("ngModelChange",function(o){t.CHM(e);const a=t.oxw();return t.KtG(a.searchBranch=o)})("ngModelChange",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,W,5,5,"a",61),t.qZA()()(),t.TgZ(9,"div",62),t.YNc(10,E,2,1,"span",41),t.qZA()()}if(2&s){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,Y)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function k(s,g){if(1&s){const e=t.EpF();t.TgZ(0,"mat-option",68),t.NdJ("onSelectionChange",function(){t.CHM(e);const o=t.oxw().$implicit,a=t.oxw();return t.KtG(a.selectUser(null==o?null:o.credit_note_no))}),t._uU(1),t.qZA()}if(2&s){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.credit_note_no),t.xp6(1),t.hij(" ",null==e?null:e.credit_note_no," ")}}function H(s,g){if(1&s&&(t.ynx(0),t.YNc(1,k,2,2,"mat-option",67),t.BQk()),2&s){const e=g.$implicit;t.xp6(1),t.Q6J("ngIf",!0===e.is_active)}}function Q(s,g){if(1&s&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.ALo(7,"date"),t.qZA(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA()()),2&s){const e=g.$implicit,n=g.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(e.user.party_name),t.xp6(2),t.Oqu(t.xi3(7,7,e.credi_note.date,"yy/MM/dd")),t.xp6(3),t.Oqu(e.credi_note.credit_note_no),t.xp6(2),t.Oqu(e.credi_note.tax),t.xp6(2),t.Oqu(e.credi_note.roundoff),t.xp6(2),t.Oqu(e.credi_note.total)}}const z=function(s,g){return{itemsPerPage:s,currentPage:g}};function j(s,g){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,Q,16,10,"tr",28),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.supplierWiseList,e.key,e.reverse),t.WLB(8,z,e.itemsPerPage,e.p)))}}function K(s,g){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",69)(3,"p",70),t._uU(4,"Data not available"),t.qZA()()()())}const V=[{path:"",component:(()=>{class s{constructor(e,n,o,a,d,u,f,x,m){this.router=e,this.fb=n,this.toastr=o,this.transactionService=a,this.purchaseService=d,this.cs=u,this.datepipe=f,this.reportService=x,this.commonService=m,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new h.NI(""),this.userControl=new h.NI,this.isAdmin=!1,this.Credit=[],this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let m=localStorage.getItem("financialYear");console.warn(JSON.parse(m));let st=JSON.parse(m);this.fyID=st}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=n,this.cs.userDetails$.subscribe(m=>{this.isAdmin="admin"==m.role,this.getBranch()}),this.cs.userDetails$.subscribe(m=>{this.userDetails=m,console.log(m),this.userName=m?.username});const o=new Date,u=(o.getMonth(),o.getFullYear(),new Date(o));u.setDate(o.getDate()-14);const f=this.formatDate(u),x=this.formatDate(o);this.supplierWiseForm=new h.cw({start:new h.NI(f,this.commonService.dateRangeValidator(this.financialYear)),end:new h.NI(x,this.commonService.dateRangeValidator(this.financialYear)),user_id:new h.NI}),this.commonService.validateAndClearDates(this.supplierWiseForm,this.minDate,this.maxDate),this.startDate=this.supplierWiseForm.value?.start,this.endDate=this.supplierWiseForm.value?.end,this.supplierWiseUserId=this.supplierWiseForm.value?.user_id,this.getSupplierWise(),this.getCreditNote(),this.filteredCredit=this.userControl.valueChanges.pipe((0,Z.O)(""),(0,v.U)(m=>this._filter(m,!0)))}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e,n){const o="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),a=this.Credit.filter(n?d=>d?.credit_note_no?.toLowerCase().includes(o):d=>!d?.credit_note_no?.toLowerCase().includes(o));return!n&&0===a.length&&a.push({name:"No data found"}),a}getCreditNote(){this.transactionService.getCreditNote().subscribe(e=>{this.Credit=e})}search(){if(""===this.titlee)this.getSupplierWise();else{const e=this.titlee.toLocaleLowerCase();this.supplierWiseList=this.supplierWiseList?.filter(n=>{const o=n?.user?.party_name.toLocaleLowerCase(),a=n?.receipt_voucher_no.toLocaleLowerCase()||"";return!(!o.includes(e)&&!a.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,n,o){const a=(e-1)*n;return`Showing ${a+1}\u2013${Math.min(a+n-1,o-1)+1} of ${o} results`}getSupplierWise(){this.reportService.getCreditNoteRegister(this.startDate,this.endDate,this.supplierWiseUserId,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.supplierWiseList=e,this.supplierWise=e})}selectUser(e){this.dataId=e,this.supplierWiseForm.patchValue({user_id:this.dataId}),console.warn(this.supplierWiseForm.value),this.supplierWiseUserId=this.supplierWiseForm.value?.user_id,this?.getSupplierWise()}getSelectedSupplierWiseDates(){console.log(this.supplierWiseForm.value);const e=this.datepipe.transform(this.supplierWiseForm.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.supplierWiseForm.value.end,"yyyy-MM-dd");console.log(e),console.log(n),this.startDate=e,this.endDate=n,this?.getSupplierWise()}generatePDFAgain(){const e=new P.default,a=`Date Range From: ${this.startDate} - ${this.endDate}`,d=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Credit Note Register Report",82,10),e.text(d,10,18),e.text(a,10,22),e.text("",10,25),r()(e,{head:[["#","User","Date","Credit Note No.","Tax","RoundOff","Total"]],body:this.supplierWiseList.map((u,f)=>[f+1,u.user.party_name,this.formatDate(u.credi_note.date),u.credi_note.credit_note_no,u.credi_note.tax,u.credi_note.roundoff,u.credi_note.total]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Credit_Note_Register .pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable");if(n){const o=n.querySelector("thead tr");if(o){const d=[];o.querySelectorAll("th").forEach(u=>{const f=u.textContent?.trim();f&&"Is Active"!==f&&"Action"!==f&&d.push(f)}),e.push(d)}n.querySelectorAll("tbody tr").forEach(d=>{const u=[];d.querySelectorAll("td").forEach(f=>{const x=f.textContent?.trim();x&&u.push(x)}),e.push(u)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=l.P6.aoa_to_sheet(e),o=l.P6.book_new();l.P6.book_append_sheet(o,n,"Sheet1");const a=l.cW(o,{bookType:"xlsx",type:"array"}),d=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,c.saveAs)(d,"creditnoteregister.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const o=document.querySelector(".titl");if(!o)return void console.error("Title element with class 'titl' not found.");const a=o.outerHTML,u=e.cloneNode(!0).outerHTML,x="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+u,m=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=x,window.print(),document.body.innerHTML=m}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.supplierWiseList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,n){if(n)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const o=this.selectData.findIndex(a=>a==e);console.log(o),-1!==o&&this.selectData.splice(o,1),this.ngOnInit(),console.log(this.selectData)}}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(y.F0),t.Y36(h.qu),t.Y36(C._W),t.Y36($.p),t.Y36(L.x),t.Y36(I.J),t.Y36(_.uU),t.Y36(B.r),t.Y36(F.R))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-credit-note-register"]],decls:103,vars:18,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-5","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-5","col-md-6","col-12"],[1,"form-group"],["type","text","placeholder","Enter Credit No.","aria-label","customer","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","debitNote"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],["id","page_field",1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["colspan","10"],[1,"text-center"]],template:function(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Credit Note Register "),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Credit Note Register "),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,q,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return n.getSelectedSupplierWiseDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return n.getSelectedSupplierWiseDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",24)(33,"div",25)(34,"label"),t._uU(35,"Credit Note No."),t.qZA(),t._UZ(36,"input",26),t.TgZ(37,"mat-autocomplete",null,27),t.YNc(39,H,2,1,"ng-container",28),t.ALo(40,"async"),t.qZA()()()()()(),t.TgZ(41,"div",29)(42,"ul")(43,"li")(44,"a",30),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(45,"img",31),t.qZA()(),t.TgZ(46,"li")(47,"a",32),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(48,"img",33),t.qZA()(),t.TgZ(49,"li")(50,"a",34),t.NdJ("click",function(){return n.printTable()}),t._UZ(51,"img",35),t.qZA()()()()(),t.TgZ(52,"div",36)(53,"div",37)(54,"table",38)(55,"thead")(56,"tr")(57,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(58,"#"),t._UZ(59,"i",40),t.qZA(),t.TgZ(60,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(61,"User"),t._UZ(62,"i",40),t.qZA(),t.TgZ(63,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(64,"Date"),t._UZ(65,"i",40),t.qZA(),t.TgZ(66,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(67,"Credit Note No. "),t._UZ(68,"i",40),t.qZA(),t.TgZ(69,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(70,"Tax "),t._UZ(71,"i",40),t.qZA(),t.TgZ(72,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(73,"RoundOff "),t._UZ(74,"i",40),t.qZA(),t.TgZ(75,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(76,"Total "),t._UZ(77,"i",40),t.qZA()()(),t.YNc(78,j,4,11,"tbody",41),t.YNc(79,K,5,0,"tbody",41),t.qZA(),t.TgZ(80,"div",6)(81,"div",42)(82,"div",43),t._uU(83," Show per page "),t.TgZ(84,"select",44,45),t.NdJ("ngModelChange",function(d){return n.itemsPerPage=d})("change",function(){t.CHM(o);const d=t.MAs(85);return t.KtG(n.changePg(d.value))}),t.TgZ(86,"option",46),t._uU(87,"10"),t.qZA(),t.TgZ(88,"option",47),t._uU(89,"20"),t.qZA(),t.TgZ(90,"option",48),t._uU(91,"30"),t.qZA(),t.TgZ(92,"option",49),t._uU(93,"50"),t.qZA(),t.TgZ(94,"option",50),t._uU(95,"100"),t.qZA(),t.TgZ(96,"option",51),t._uU(97,"All"),t.qZA()()()(),t.TgZ(98,"div",52)(99,"div",53)(100,"pagination-controls",54),t.NdJ("pageChange",function(d){return n.p=d}),t.qZA(),t.TgZ(101,"div",55),t._uU(102),t.qZA()()()()()()()()()()}if(2&e){const o=t.MAs(31),a=t.MAs(38);t.xp6(11),t.Q6J("ngIf",n.isAdmin),t.xp6(5),t.Q6J("formGroup",n.supplierWiseForm),t.xp6(7),t.Q6J("formGroup",n.supplierWiseForm)("rangePicker",o)("min",n.minDate)("max",n.maxDate),t.xp6(6),t.Q6J("for",o),t.xp6(7),t.Q6J("formControl",n.userControl)("matAutocomplete",a),t.xp6(3),t.Q6J("ngForOf",t.lcZ(40,16,n.filteredCredit)),t.xp6(39),t.Q6J("ngIf",(null==n.supplierWiseList?null:n.supplierWiseList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.supplierWiseList?null:n.supplierWiseList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq(" Showing ",n.itemsPerPage," to ",null==n.supplierWiseList?null:n.supplierWiseList.length," of ",n.p," entries ")}},dependencies:[_.sg,_.O5,h._Y,h.YN,h.Kr,h.Fj,h.EJ,h.JJ,h.JL,h.On,h.oH,h.sg,h.u,A.LS,M.XC,M.ZL,S.ey,U.KE,U.R9,D.Nt,N.nW,N.wx,N.zY,N.By,N._g,_.Ov,_.uU,A._s,J.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),s})()}];let G=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[y.Bz.forChild(V),y.Bz]}),s})();var X=p(3056),tt=p(87078),w=p(86323),b=p(92642),et=p(95113),it=p(64155),rt=p(6205),R=p(8468);const nt={User:b.n5m,UserCheck:b.uS3,FileText:b.acj,File:b.$BE};let ot=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[_.uU],imports:[_.ez,G,R.I,h.u5,h.UX,M.Bb,U.lN,D.c,X.ZQ,tt.T,N.FA,U.lN,S.XK,et.LD,it.vQ,R.I,rt.X,w.p.pick(nt),w.p]}),s})()}}]);