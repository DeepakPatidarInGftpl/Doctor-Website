"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1111],{53506:(M,C,o)=>{o.d(C,{x:()=>x});var v=o(92340),f=o(94650),u=o(80529);let x=(()=>{class m{constructor(t){this.http=t,this.apiUrl=`${v.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,i)}updatePurchase(t,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}MaterialIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,i)}updateMaterial(t,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}PurchaseBillIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,i)}updatePurchaseBill(t,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}getDebitNotesById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNotesIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,i)}updateDebitNotes(t,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,t)}deleteDebitNotes(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getSearchProductById(t){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${t}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(t){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",t)}getPurchaseReturnById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}PurchaseReturnIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`,i)}updatePurchaseReturn(t,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,t)}deletePurchaseReturn(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}filterVariant(t,i,n,P){let e=this.apiUrl+"/pv-api/purchase_product_filter/";const _=[];return t&&_.push(`supplier=${t}`),i&&_.push(`category=${i}`),n&&_.push(`subcategory=${n}`),P&&_.push(`search=${P}`),_.length>0&&(e+="?"+_.join("&")),this.http.get(e)}}return m.\u0275fac=function(t){return new(t||m)(f.LFG(u.eN))},m.\u0275prov=f.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},71071:(M,C,o)=>{o.d(C,{p:()=>x});var v=o(92340),f=o(94650),u=o(80529);let x=(()=>{class m{constructor(t){this.http=t,this.apiUrl=`${v.N.api}`}getDebitNote(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}getDebitNoteById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNoteIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,i)}addDebitNote(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}updateDebitNote(t,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,t)}deleteDebitNote(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getCreditNote(){return this.http.get(this.apiUrl+"/pv-api/credit_note/")}getCreditNoteById(t){return this.http.get(`${this.apiUrl+"/pv-api/credit_note/?id="}${t}`)}CreditNoteIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/credit_note/?id="}${t}`,i)}addCreditNote(t){return this.http.post(this.apiUrl+"/pv-api/credit_note/",t)}updateCreditNote(t,i){return this.http.put(`${this.apiUrl+"/pv-api/credit_note/?id="}${i}`,t)}deleteCreditNote(t){return this.http.delete(`${this.apiUrl+"/pv-api/credit_note/?id="}${t}`)}getJournalVoucher(){return this.http.get(this.apiUrl+"/pv-api/jounal_voucher/")}getJournalVoucherById(t){return this.http.get(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${t}`)}JournalVoucherIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${t}`,i)}addJournalVoucher(t){return this.http.post(this.apiUrl+"/pv-api/jounal_voucher/",t)}updateJournalVoucher(t,i){return this.http.put(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${i}`,t)}deleteJournalVoucher(t){return this.http.delete(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${t}`)}getCountraVoucher(){return this.http.get(this.apiUrl+"/pv-api/countra_voucher/")}getCountraVoucherById(t){return this.http.get(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${t}`)}CountraVoucherIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${t}`,i)}addCountraVoucher(t){return this.http.post(this.apiUrl+"/pv-api/countra_voucher/",t)}updateCountraVoucher(t,i){return this.http.put(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${i}`,t)}deleteCountraVoucher(t){return this.http.delete(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${t}`)}getRecieptVoucher(){return this.http.get(this.apiUrl+"/pv-api/receipt_voucher/")}getRecieptVoucherById(t){return this.http.get(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${t}`)}RecieptVoucherIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${t}`,i)}addRecieptVoucher(t){return this.http.post(this.apiUrl+"/pv-api/receipt_voucher/",t)}updateRecieptVoucher(t,i){return this.http.put(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${i}`,t)}deleteRecieptVoucher(t){return this.http.delete(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${t}`)}getPaymentVoucher(){return this.http.get(this.apiUrl+"/pv-api/payment_voucher/")}getPaymentVoucherById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${t}`)}PaymentVoucherIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${t}`,i)}addPaymentVoucher(t){return this.http.post(this.apiUrl+"/pv-api/payment_voucher/",t)}updatePaymentVoucher(t,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${i}`,t)}deletePaymentVoucher(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${t}`)}getJournalVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=JournalVoucher")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=DebitNote")}getCreditNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=CreditNote")}getCountraVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=CountraVoucher")}getReceiptVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=ReceiptVoucher")}getPaymentVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PaymentVoucher")}getExpenceVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=ExpensesVoucher")}getMaterialConsuptionPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialConsuption")}getAccount(){return this.http.get(this.apiUrl+"/pv-api/account/")}getSalesBill(){return this.http.get(this.apiUrl+"/pv-api/sale_bill/")}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getExpensVoucher(){return this.http.get(this.apiUrl+"/pv-api/expense_voucher/")}getExpensVoucherById(t){return this.http.get(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${t}`)}ExpensVoucherIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${t}`,i)}addExpensVoucher(t){return this.http.post(this.apiUrl+"/pv-api/expense_voucher/",t)}updateExpensVoucher(t,i){return this.http.put(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${i}`,t)}deleteExpensVoucher(t){return this.http.delete(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${t}`)}getMaterialConsuption(){return this.http.get(this.apiUrl+"/pv-api/new_material_consuption/")}getMaterialConsuptionById(t){return this.http.get(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${t}`)}MaterialConsuptionIsActive(t,i){return this.http.patch(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${t}`,i)}addMaterialConsuption(t){return this.http.post(this.apiUrl+"/pv-api/new_material_consuption/",t)}updateMaterialConsuption(t,i){return this.http.put(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${i}`,t)}deleteMaterialConsuption(t){return this.http.delete(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/contact-user/")}}return m.\u0275fac=function(t){return new(t||m)(f.LFG(u.eN))},m.\u0275prov=f.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},71111:(M,C,o)=>{o.r(C),o.d(C,{CreditNoteRegisterModule:()=>X});var v=o(36895),f=o(89299),u=o(24006),x=o(68675),m=o(54004),y=o(96166),t=o(12983),i=o.n(t),n=o(80574),P=o(94327),e=o(94650),_=o(97185),O=o(71071),S=o(53506),L=o(42917),w=o(87719),Z=o(54333),b=o(47957),A=o(3238),N=o(59549),R=o(44144),U=o(99602),V=o(54040);function B(s,g){if(1&s){const r=e.EpF();e.TgZ(0,"mat-option",53),e.NdJ("onSelectionChange",function(){e.CHM(r);const l=e.oxw().$implicit,p=e.oxw();return e.KtG(p.selectUser(null==l?null:l.credit_note_no))}),e._uU(1),e.qZA()}if(2&s){const r=e.oxw().$implicit;e.Q6J("value",null==r?null:r.credit_note_no),e.xp6(1),e.hij(" ",null==r?null:r.credit_note_no," ")}}function E(s,g){if(1&s&&(e.ynx(0),e.YNc(1,B,2,2,"mat-option",52),e.BQk()),2&s){const r=g.$implicit;e.xp6(1),e.Q6J("ngIf",!0===r.is_active)}}function W(s,g){if(1&s&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"date"),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA()()),2&s){const r=g.$implicit,a=g.index;e.xp6(2),e.Oqu(a+1+"."),e.xp6(2),e.Oqu(r.user),e.xp6(2),e.Oqu(e.xi3(7,7,r.credi_note.date,"yy/MM/dd")),e.xp6(3),e.Oqu(r.credi_note.credit_note_no),e.xp6(2),e.Oqu(r.credi_note.tax),e.xp6(2),e.Oqu(r.credi_note.roundoff),e.xp6(2),e.Oqu(r.credi_note.total)}}const F=function(s,g){return{itemsPerPage:s,currentPage:g}};function J(s,g){if(1&s&&(e.TgZ(0,"tbody"),e.YNc(1,W,16,10,"tr",25),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&s){const r=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,r.supplierWiseList,r.key,r.reverse),e.WLB(8,F,r.itemsPerPage,r.p)))}}function Y(s,g){1&s&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",54)(3,"p",55),e._uU(4,"Data not available"),e.qZA()()()())}const z=[{path:"",component:(()=>{class s{constructor(r,a,l,p,h,d,c,$){this.router=r,this.fb=a,this.toastr=l,this.transactionService=p,this.purchaseService=h,this.cs=d,this.datepipe=c,this.reportService=$,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new u.NI(""),this.userControl=new u.NI,this.Credit=[],this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(c=>{this.userDetails=c,console.log(c),this.userName=c?.username});const r=new Date,p=(r.getMonth(),r.getFullYear(),new Date(r));p.setDate(r.getDate()-14);const h=this.formatDate(p),d=this.formatDate(r);this.supplierWiseForm=new u.cw({start:new u.NI(h),end:new u.NI(d),user_id:new u.NI}),this.startDate=this.supplierWiseForm.value?.start,this.endDate=this.supplierWiseForm.value?.end,this.supplierWiseUserId=this.supplierWiseForm.value?.user_id,this.getSupplierWise(),this.getCreditNote(),this.filteredCredit=this.userControl.valueChanges.pipe((0,x.O)(""),(0,m.U)(c=>this._filter(c,!0)))}formatDate(r){return this.datepipe.transform(r,"yyyy-MM-dd")||""}_filter(r,a){const l="string"==typeof r?r.toLowerCase():r.toString().toLowerCase(),p=this.Credit.filter(a?h=>h?.credit_note_no?.toLowerCase().includes(l):h=>!h?.credit_note_no?.toLowerCase().includes(l));return!a&&0===p.length&&p.push({name:"No data found"}),p}getCreditNote(){this.transactionService.getCreditNote().subscribe(r=>{this.Credit=r})}search(){if(""===this.titlee)this.getSupplierWise();else{const r=this.titlee.toLocaleLowerCase();this.supplierWiseList=this.supplierWiseList?.filter(a=>{const l=a?.user?.party_name.toLocaleLowerCase(),p=a?.receipt_voucher_no.toLocaleLowerCase()||"";return!(!l.includes(r)&&!p.includes(r))})}}sort(r){this.key=r,this.reverse=!this.reverse}selectAll(r){this.countryList.forEach(r?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(r,a,l){const p=(r-1)*a;return`Showing ${p+1}\u2013${Math.min(p+a-1,l-1)+1} of ${l} results`}getSupplierWise(){this.reportService.getCreditNoteRegister(this.startDate,this.endDate,this.supplierWiseUserId).subscribe(r=>{console.log(r),this.supplierWiseList=r,this.supplierWise=r})}selectUser(r){this.dataId=r,this.supplierWiseForm.patchValue({user_id:this.dataId}),console.warn(this.supplierWiseForm.value),this.supplierWiseUserId=this.supplierWiseForm.value?.user_id,this?.getSupplierWise()}getSelectedSupplierWiseDates(){console.log(this.supplierWiseForm.value);const r=this.datepipe.transform(this.supplierWiseForm.value.start,"yyyy-MM-dd"),a=this.datepipe.transform(this.supplierWiseForm.value.end,"yyyy-MM-dd");console.log(r),console.log(a),this.startDate=r,this.endDate=a,this?.getSupplierWise()}generatePDFAgain(){const r=new y.default,p=`Date Range From: ${this.startDate} - ${this.endDate}`,h=`User: ${this.userName}`;r.setFontSize(12),r.setTextColor(33,43,54),r.text("PV",86,5),r.text("Credit Note Register Report",82,10),r.text(h,10,18),r.text(p,10,22),r.text("",10,25),i()(r,{head:[["#","User","Date","Credit Note No.","Tax","RoundOff","Total"]],body:this.supplierWiseList.map((d,c)=>[c+1,d.user,this.formatDate(d.credi_note.date),d.credi_note.credit_note_no,d.credi_note.tax,d.credi_note.roundoff,d.credi_note.total]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),r.save("Credit_Note_Register_Purchase .pdf")}getVisibleDataFromTable(){const r=[],a=document.getElementById("mytable");if(a){const l=a.querySelector("thead tr");if(l){const h=[];l.querySelectorAll("th").forEach(d=>{const c=d.textContent?.trim();c&&"Is Active"!==c&&"Action"!==c&&h.push(c)}),r.push(h)}a.querySelectorAll("tbody tr").forEach(h=>{const d=[];h.querySelectorAll("td").forEach(c=>{const $=c.textContent?.trim();$&&d.push($)}),r.push(d)})}return r}exportToExcel(){const r=this.getVisibleDataFromTable(),a=n.P6.aoa_to_sheet(r),l=n.P6.book_new();n.P6.book_append_sheet(l,a,"Sheet1");const p=n.cW(l,{bookType:"xlsx",type:"array"}),h=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,P.saveAs)(h,"creditnoteregister.xlsx")}printTable(){const r=document.getElementById("mytable");if(!r)return void console.error("Table element with ID 'mytable' not found.");const l=document.querySelector(".titl");if(!l)return void console.error("Title element with class 'titl' not found.");const p=l.outerHTML,d=r.cloneNode(!0).outerHTML,$="<style>.spaced-title { margin-top: 80px; }</style>"+p.replace("titl","spaced-title")+d,tt=document.body.innerHTML;document.body.innerHTML=$,window.print(),document.body.innerHTML=tt}}return s.\u0275fac=function(r){return new(r||s)(e.Y36(f.F0),e.Y36(u.qu),e.Y36(_._W),e.Y36(O.p),e.Y36(S.x),e.Y36(L.J),e.Y36(v.uU),e.Y36(w.r))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-credit-note-register"]],decls:98,vars:15,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-5","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-5","col-md-6","col-12"],[1,"form-group"],["type","text","placeholder","Enter Credit No.","aria-label","customer","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","debitNote"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],["id","page_field",1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["colspan","10"],[1,"text-center"]],template:function(r,a){if(1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"Credit Note Register "),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Credit Note Register "),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),e._uU(17,"Select Date"),e.qZA(),e.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),e.NdJ("dateChange",function(){return a.getSelectedSupplierWiseDates()}),e.qZA(),e.TgZ(21,"span",16)(22,"span",17),e._uU(23,"to"),e.qZA()(),e.TgZ(24,"input",18),e.NdJ("dateChange",function(){return a.getSelectedSupplierWiseDates()}),e.qZA()(),e._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),e.qZA()()(),e.TgZ(28,"div",21)(29,"div",22)(30,"label"),e._uU(31,"Credit Note No."),e.qZA(),e._UZ(32,"input",23),e.TgZ(33,"mat-autocomplete",null,24),e.YNc(35,E,2,1,"ng-container",25),e.ALo(36,"async"),e.qZA()()()()()(),e.TgZ(37,"div",26)(38,"ul")(39,"li")(40,"a",27),e.NdJ("click",function(){return a.generatePDFAgain()}),e._UZ(41,"img",28),e.qZA()(),e.TgZ(42,"li")(43,"a",29),e.NdJ("click",function(){return a.exportToExcel()}),e._UZ(44,"img",30),e.qZA()(),e.TgZ(45,"li")(46,"a",31),e.NdJ("click",function(){return a.printTable()}),e._UZ(47,"img",32),e.qZA()()()()(),e.TgZ(48,"div",33)(49,"div",34)(50,"table",35)(51,"thead")(52,"tr")(53,"th",36),e.NdJ("click",function(){return a.sort("id")}),e._uU(54,"#"),e._UZ(55,"i",37),e.qZA(),e.TgZ(56,"th",36),e.NdJ("click",function(){return a.sort("id")}),e._uU(57,"User"),e._UZ(58,"i",37),e.qZA(),e.TgZ(59,"th",36),e.NdJ("click",function(){return a.sort("id")}),e._uU(60,"Date"),e._UZ(61,"i",37),e.qZA(),e.TgZ(62,"th",36),e.NdJ("click",function(){return a.sort("id")}),e._uU(63,"Credit Note No. "),e._UZ(64,"i",37),e.qZA(),e.TgZ(65,"th",36),e.NdJ("click",function(){return a.sort("id")}),e._uU(66,"Tax "),e._UZ(67,"i",37),e.qZA(),e.TgZ(68,"th",36),e.NdJ("click",function(){return a.sort("id")}),e._uU(69,"RoundOff "),e._UZ(70,"i",37),e.qZA(),e.TgZ(71,"th",36),e.NdJ("click",function(){return a.sort("id")}),e._uU(72,"Total "),e._UZ(73,"i",37),e.qZA()()(),e.YNc(74,J,4,11,"tbody",38),e.YNc(75,Y,5,0,"tbody",38),e.qZA(),e.TgZ(76,"div",10)(77,"div",39)(78,"div",40),e._uU(79," Show per page "),e.TgZ(80,"select",41),e.NdJ("ngModelChange",function(p){return a.itemsPerPage=p}),e.TgZ(81,"option",42),e._uU(82,"10"),e.qZA(),e.TgZ(83,"option",43),e._uU(84,"20"),e.qZA(),e.TgZ(85,"option",44),e._uU(86,"30"),e.qZA(),e.TgZ(87,"option",45),e._uU(88,"50"),e.qZA(),e.TgZ(89,"option",46),e._uU(90,"100"),e.qZA(),e.TgZ(91,"option",47),e._uU(92,"All"),e.qZA()()()(),e.TgZ(93,"div",48)(94,"div",49)(95,"pagination-controls",50),e.NdJ("pageChange",function(p){return a.p=p}),e.qZA(),e.TgZ(96,"div",51),e._uU(97),e.qZA()()()()()()()()()()),2&r){const l=e.MAs(27),p=e.MAs(34);e.xp6(12),e.Q6J("formGroup",a.supplierWiseForm),e.xp6(7),e.Q6J("formGroup",a.supplierWiseForm)("rangePicker",l),e.xp6(6),e.Q6J("for",l),e.xp6(7),e.Q6J("formControl",a.userControl)("matAutocomplete",p),e.xp6(3),e.Q6J("ngForOf",e.lcZ(36,13,a.filteredCredit)),e.xp6(39),e.Q6J("ngIf",(null==a.supplierWiseList?null:a.supplierWiseList.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==a.supplierWiseList?null:a.supplierWiseList.length)),e.xp6(5),e.Q6J("ngModel",a.itemsPerPage),e.xp6(17),e.lnq(" Showing ",a.itemsPerPage," to ",a.itemsPerPage," of ",a.p," entries ")}},dependencies:[v.sg,v.O5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.On,u.oH,u.sg,u.u,Z.LS,b.XC,b.ZL,A.ey,N.KE,N.R9,R.Nt,U.nW,U.wx,U.zY,U.By,U._g,v.Ov,v.uU,Z._s,V.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),s})()}];let j=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[f.Bz.forChild(z),f.Bz]}),s})();var k=o(3056),q=o(87078),D=o(86323),T=o(92642),H=o(95113),Q=o(64155),K=o(6205),I=o(8468);const G={User:T.n5m,UserCheck:T.uS3,FileText:T.acj,File:T.$BE};let X=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({providers:[v.uU],imports:[v.ez,j,I.I,u.u5,u.UX,b.Bb,N.lN,R.c,k.ZQ,q.T,U.FA,N.lN,A.XK,H.LD,Q.vQ,I.I,K.X,D.p.pick(G),D.p]}),s})()}}]);