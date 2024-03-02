"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3927],{53506:(x,O,s)=>{s.d(O,{x:()=>S});var v=s(92340),f=s(94650),p=s(80529);let S=(()=>{class c{constructor(t){this.http=t,this.apiUrl=`${v.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,r)}updatePurchase(t,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}MaterialIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,r)}updateMaterial(t,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}PurchaseBillIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,r)}updatePurchaseBill(t,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}getDebitNotesById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNotesIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,r)}updateDebitNotes(t,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,t)}deleteDebitNotes(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getSearchProductById(t){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${t}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(t){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",t)}getPurchaseReturnById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}PurchaseReturnIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`,r)}updatePurchaseReturn(t,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,t)}deletePurchaseReturn(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}filterVariant(t,r,l,C){let e=this.apiUrl+"/pv-api/purchase_product_filter/";const U=[];return t&&U.push(`supplier=${t}`),r&&U.push(`category=${r}`),l&&U.push(`subcategory=${l}`),C&&U.push(`search=${C}`),U.length>0&&(e+="?"+U.join("&")),this.http.get(e)}}return c.\u0275fac=function(t){return new(t||c)(f.LFG(p.eN))},c.\u0275prov=f.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},71071:(x,O,s)=>{s.d(O,{p:()=>S});var v=s(92340),f=s(94650),p=s(80529);let S=(()=>{class c{constructor(t){this.http=t,this.apiUrl=`${v.N.api}`}getDebitNote(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}getDebitNoteById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNoteIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,r)}addDebitNote(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}updateDebitNote(t,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,t)}deleteDebitNote(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getCreditNote(){return this.http.get(this.apiUrl+"/pv-api/credit_note/")}getCreditNoteById(t){return this.http.get(`${this.apiUrl+"/pv-api/credit_note/?id="}${t}`)}CreditNoteIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/credit_note/?id="}${t}`,r)}addCreditNote(t){return this.http.post(this.apiUrl+"/pv-api/credit_note/",t)}updateCreditNote(t,r){return this.http.put(`${this.apiUrl+"/pv-api/credit_note/?id="}${r}`,t)}deleteCreditNote(t){return this.http.delete(`${this.apiUrl+"/pv-api/credit_note/?id="}${t}`)}getJournalVoucher(){return this.http.get(this.apiUrl+"/pv-api/jounal_voucher/")}getJournalVoucherById(t){return this.http.get(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${t}`)}JournalVoucherIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${t}`,r)}addJournalVoucher(t){return this.http.post(this.apiUrl+"/pv-api/jounal_voucher/",t)}updateJournalVoucher(t,r){return this.http.put(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${r}`,t)}deleteJournalVoucher(t){return this.http.delete(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${t}`)}getCountraVoucher(){return this.http.get(this.apiUrl+"/pv-api/countra_voucher/")}getCountraVoucherById(t){return this.http.get(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${t}`)}CountraVoucherIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${t}`,r)}addCountraVoucher(t){return this.http.post(this.apiUrl+"/pv-api/countra_voucher/",t)}updateCountraVoucher(t,r){return this.http.put(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${r}`,t)}deleteCountraVoucher(t){return this.http.delete(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${t}`)}getRecieptVoucher(){return this.http.get(this.apiUrl+"/pv-api/receipt_voucher/")}getRecieptVoucherById(t){return this.http.get(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${t}`)}RecieptVoucherIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${t}`,r)}addRecieptVoucher(t){return this.http.post(this.apiUrl+"/pv-api/receipt_voucher/",t)}updateRecieptVoucher(t,r){return this.http.put(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${r}`,t)}deleteRecieptVoucher(t){return this.http.delete(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${t}`)}getPaymentVoucher(){return this.http.get(this.apiUrl+"/pv-api/payment_voucher/")}getPaymentVoucherById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${t}`)}PaymentVoucherIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${t}`,r)}addPaymentVoucher(t){return this.http.post(this.apiUrl+"/pv-api/payment_voucher/",t)}updatePaymentVoucher(t,r){return this.http.put(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${r}`,t)}deletePaymentVoucher(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${t}`)}getJournalVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=JournalVoucher")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=DebitNote")}getCreditNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=CreditNote")}getCountraVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=CountraVoucher")}getReceiptVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=ReceiptVoucher")}getPaymentVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PaymentVoucher")}getExpenceVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=ExpensesVoucher")}getMaterialConsuptionPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialConsuption")}getAccount(){return this.http.get(this.apiUrl+"/pv-api/account/")}getSalesBill(){return this.http.get(this.apiUrl+"/pv-api/sale_bill/")}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getExpensVoucher(){return this.http.get(this.apiUrl+"/pv-api/expense_voucher/")}getExpensVoucherById(t){return this.http.get(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${t}`)}ExpensVoucherIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${t}`,r)}addExpensVoucher(t){return this.http.post(this.apiUrl+"/pv-api/expense_voucher/",t)}updateExpensVoucher(t,r){return this.http.put(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${r}`,t)}deleteExpensVoucher(t){return this.http.delete(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${t}`)}getMaterialConsuption(){return this.http.get(this.apiUrl+"/pv-api/new_material_consuption/")}getMaterialConsuptionById(t){return this.http.get(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${t}`)}MaterialConsuptionIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${t}`,r)}addMaterialConsuption(t){return this.http.post(this.apiUrl+"/pv-api/new_material_consuption/",t)}updateMaterialConsuption(t,r){return this.http.put(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${r}`,t)}deleteMaterialConsuption(t){return this.http.delete(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/contact-user/")}}return c.\u0275fac=function(t){return new(t||c)(f.LFG(p.eN))},c.\u0275prov=f.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},83927:(x,O,s)=>{s.r(O),s.d(O,{CustomerWiseSaleOrderModule:()=>K});var v=s(36895),f=s(89299),p=s(24006),S=s(94327),c=s(96166),$=s(12983),t=s.n($),r=s(68675),l=s(54004),C=s(80574),e=s(94650),U=s(97185),W=s(71071),A=s(53506),D=s(42917),N=s(87719),b=s(54333),P=s(59549),y=s(99602),I=s(54040);function L(n,g){if(1&n&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td"),e._uU(16),e.qZA()()),2&n){const i=g.$implicit,a=g.index;e.xp6(2),e.Oqu(a+1+"."),e.xp6(2),e.Oqu(null==i.customer?null:i.customer.party_name),e.xp6(2),e.Oqu(i.sale_order_date),e.xp6(2),e.Oqu(i.sale_order_no),e.xp6(2),e.Oqu(i.total_qty),e.xp6(2),e.Oqu(i.total),e.xp6(2),e.Oqu(null==i||null==i.invoice_detail?null:i.invoice_detail.total_qty),e.xp6(2),e.Oqu(null==i||null==i.invoice_detail?null:i.invoice_detail.total_amount)}}const V=function(n,g){return{itemsPerPage:n,currentPage:g}};function w(n,g){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,L,17,8,"tr",47),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,i.customerWiseSaleOrderList,i.key,i.reverse),e.WLB(8,V,i.itemsPerPage,i.p)))}}function B(n,g){1&n&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",48)(3,"p",49),e._uU(4,"Data not available"),e.qZA()()()())}const E=[{path:"",component:(()=>{class n{constructor(i,a,o,u,m,h,d,_){this.router=i,this.fb=a,this.toastr=o,this.transactionService=u,this.purchaseService=m,this.cs=h,this.datepipe=d,this.reportService=_,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new p.NI(""),this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(d=>{this.userDetails=d,console.log(d),this.userName=d?.username});const i=new Date,u=(i.getMonth(),i.getFullYear(),new Date(i));u.setDate(i.getDate()-14);const m=this.formatDate(u),h=this.formatDate(i);this.customerWiseSaleOrderForm=new p.cw({start:new p.NI(m),end:new p.NI(h),user_id:new p.NI}),this.startDate=this.customerWiseSaleOrderForm.value?.start,this.endDate=this.customerWiseSaleOrderForm.value?.end,this.customerWiseSaleOrderUserId=this.customerWiseSaleOrderForm.value?.user_id,this.getCustomerWiseSaleOrder(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,r.O)(""),(0,l.U)(d=>{const _="string"==typeof d?d:d?.detail?.name;return _?this._filter(_):this.suppliers.slice()}))}formatDate(i){return this.datepipe.transform(i,"yyyy-MM-dd")||""}_filter(i){const a=i?i.toLowerCase():"";return console.log(a),this.suppliers.filter(o=>o?.detail?.name.toLowerCase().includes(a)||o?.detail?.company_name?.toLowerCase().includes(a)||o?.account?.account_id?.toLowerCase().includes(a))}displayFn(i){return i&&i?.detail?.company_name?i?.detail?.company_name:""}search(){if(""===this.titlee)this.getCustomerWiseSaleOrder();else{const i=this.titlee.toLocaleLowerCase();this.customerWiseSaleOrderList=this.customerWiseSaleOrderList?.filter(a=>{const o=a?.user?.party_name.toLocaleLowerCase(),u=a?.receipt_voucher_no.toLocaleLowerCase()||"";return!(!o.includes(i)&&!u.includes(i))})}}sort(i){this.key=i,this.reverse=!this.reverse}selectAll(i){this.countryList.forEach(i?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(i,a,o){const u=(i-1)*a;return`Showing ${u+1}\u2013${Math.min(u+a-1,o-1)+1} of ${o} results`}getCustomerWiseSaleOrder(){this.reportService.getCustomerWiseSaleOrder(this.startDate,this.endDate,this.customerWiseSaleOrderUserId).subscribe(i=>{console.log(i),this.customerWiseSaleOrderList=i,this.customerWiseSaleOrder=i,this.customerWiseSaleOrder.map(a=>{console.log(a.sale_order),this.customerWiseSaleOrderList=a.sale_order})})}oncheckAccount(i){console.log(i),this.userName=i?.detail?.company_name,this.dataId=i?.id,this.customerWiseSaleOrderForm.patchValue({user_id:this.dataId}),console.warn(this.customerWiseSaleOrderForm.value),this.customerWiseSaleOrderUserId=this.customerWiseSaleOrderForm.value?.user_id,this?.getCustomerWiseSaleOrder()}getSelectedCustomerWiseSaleOrderDates(){console.log(this.customerWiseSaleOrderForm.value);const i=this.datepipe.transform(this.customerWiseSaleOrderForm.value.start,"yyyy-MM-dd"),a=this.datepipe.transform(this.customerWiseSaleOrderForm.value.end,"yyyy-MM-dd");console.log(i),console.log(a),this.startDate=i,this.endDate=a,this?.getCustomerWiseSaleOrder()}generatePDFAgain(){const i=new c.default,u=`Date Range From: ${this.startDate} - ${this.endDate}`,m=`User: ${this.userName}`;i.setFontSize(12),i.setTextColor(33,43,54),i.text("PV",86,5),i.text("Customer Wise Sale Order Report",82,10),i.text(m,10,18),i.text(u,10,22),i.text("",10,25),t()(i,{head:[["#","Customer","Sale Order Date","Sale Order No. ","Total Qty","Total","Invoice Total Qty","Invoice Total Amount"]],body:this.customerWiseSaleOrderList.map((h,d)=>[d+1,h.customer?.party_name,h.sale_order_date,h.sale_order_no,h.total_qty,h.total,h.invoice_detail?.total_qty,h.invoice_detail?.total_amount]),startY:25}),i.save("Customer_wise_sale_Order.pdf")}getVisibleDataFromTable(){const i=[],a=document.getElementById("mytable");if(a){const o=a.querySelector("thead tr");if(o){const m=[];o.querySelectorAll("th").forEach(h=>{const d=h.textContent?.trim();d&&"Is Active"!==d&&"Action"!==d&&m.push(d)}),i.push(m)}a.querySelectorAll("tbody tr").forEach(m=>{const h=[];m.querySelectorAll("td").forEach(d=>{const _=d.textContent?.trim();_&&h.push(_)}),i.push(h)})}return i}exportToExcel(){const i=this.getVisibleDataFromTable(),a=C.P6.aoa_to_sheet(i),o=C.P6.book_new();C.P6.book_append_sheet(o,a,"Sheet1");const u=C.cW(o,{bookType:"xlsx",type:"array"}),m=new Blob([u],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,S.saveAs)(m,"saleSummary.xlsx")}printTable(){const i=document.getElementById("mytable");if(!i)return void console.error("Table element with ID 'mytable' not found.");const o=document.querySelector(".titl");if(!o)return void console.error("Title element with class 'titl' not found.");const u=o.outerHTML,h=i.cloneNode(!0).outerHTML,_="<style>.spaced-title { margin-top: 80px; }</style>"+u.replace("titl","spaced-title")+h,G=document.body.innerHTML;document.body.innerHTML=_,window.print(),document.body.innerHTML=G}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(f.F0),e.Y36(p.qu),e.Y36(U._W),e.Y36(W.p),e.Y36(A.x),e.Y36(D.J),e.Y36(v.uU),e.Y36(N.r))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-customer-wise-sale-order"]],decls:92,vars:10,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","debitNote"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],["id","page_field",1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(i,a){if(1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"Customer Wise Sale Order"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Customer Wise Sale Order"),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),e._uU(17,"Select Date"),e.qZA(),e.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),e.NdJ("dateChange",function(){return a.getSelectedCustomerWiseSaleOrderDates()}),e.qZA(),e.TgZ(21,"span",16)(22,"span",17),e._uU(23,"to"),e.qZA()(),e.TgZ(24,"input",18),e.NdJ("dateChange",function(){return a.getSelectedCustomerWiseSaleOrderDates()}),e.qZA()(),e._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),e.qZA()()()()()(),e.TgZ(28,"div",21)(29,"ul")(30,"li")(31,"a",22),e.NdJ("click",function(){return a.generatePDFAgain()}),e._UZ(32,"img",23),e.qZA()(),e.TgZ(33,"li")(34,"a",24),e.NdJ("click",function(){return a.exportToExcel()}),e._UZ(35,"img",25),e.qZA()(),e.TgZ(36,"li")(37,"a",26),e.NdJ("click",function(){return a.printTable()}),e._UZ(38,"img",27),e.qZA()()()()(),e.TgZ(39,"div",28)(40,"div",29)(41,"table",30)(42,"thead")(43,"tr")(44,"th",31),e.NdJ("click",function(){return a.sort("id")}),e._uU(45,"#"),e._UZ(46,"i",32),e.qZA(),e.TgZ(47,"th",31),e.NdJ("click",function(){return a.sort("id")}),e._uU(48,"Customer"),e._UZ(49,"i",32),e.qZA(),e.TgZ(50,"th",31),e.NdJ("click",function(){return a.sort("id")}),e._uU(51,"Sale Order Date "),e._UZ(52,"i",32),e.qZA(),e.TgZ(53,"th",31),e.NdJ("click",function(){return a.sort("id")}),e._uU(54,"Sale Order No. "),e._UZ(55,"i",32),e.qZA(),e.TgZ(56,"th",31),e.NdJ("click",function(){return a.sort("id")}),e._uU(57,"Total Qty "),e._UZ(58,"i",32),e.qZA(),e.TgZ(59,"th",31),e.NdJ("click",function(){return a.sort("id")}),e._uU(60,"Total "),e._UZ(61,"i",32),e.qZA(),e.TgZ(62,"th",31),e.NdJ("click",function(){return a.sort("id")}),e._uU(63," Invoice Total QTY "),e._UZ(64,"i",32),e.qZA(),e.TgZ(65,"th",31),e.NdJ("click",function(){return a.sort("id")}),e._uU(66,"Invoice Total Amount "),e._UZ(67,"i",32),e.qZA()()(),e.YNc(68,w,4,11,"tbody",33),e.YNc(69,B,5,0,"tbody",33),e.qZA(),e.TgZ(70,"div",10)(71,"div",34)(72,"div",35),e._uU(73," Show per page "),e.TgZ(74,"select",36),e.NdJ("ngModelChange",function(u){return a.itemsPerPage=u}),e.TgZ(75,"option",37),e._uU(76,"10"),e.qZA(),e.TgZ(77,"option",38),e._uU(78,"20"),e.qZA(),e.TgZ(79,"option",39),e._uU(80,"30"),e.qZA(),e.TgZ(81,"option",40),e._uU(82,"50"),e.qZA(),e.TgZ(83,"option",41),e._uU(84,"100"),e.qZA(),e.TgZ(85,"option",42),e._uU(86,"All"),e.qZA()()()(),e.TgZ(87,"div",43)(88,"div",44)(89,"pagination-controls",45),e.NdJ("pageChange",function(u){return a.p=u}),e.qZA(),e.TgZ(90,"div",46),e._uU(91),e.qZA()()()()()()()()()()),2&i){const o=e.MAs(27);e.xp6(12),e.Q6J("formGroup",a.customerWiseSaleOrderForm),e.xp6(7),e.Q6J("formGroup",a.customerWiseSaleOrderForm)("rangePicker",o),e.xp6(6),e.Q6J("for",o),e.xp6(43),e.Q6J("ngIf",(null==a.customerWiseSaleOrderList?null:a.customerWiseSaleOrderList.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==a.customerWiseSaleOrderList?null:a.customerWiseSaleOrderList.length)),e.xp6(5),e.Q6J("ngModel",a.itemsPerPage),e.xp6(17),e.lnq(" Showing ",a.itemsPerPage," to ",a.itemsPerPage," of ",a.p," entries ")}},dependencies:[v.sg,v.O5,p._Y,p.YN,p.Kr,p.Fj,p.EJ,p.JJ,p.JL,p.On,p.sg,p.u,b.LS,P.KE,P.R9,y.nW,y.wx,y.zY,y.By,y._g,b._s,I.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),n})()}];let J=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.Bz.forChild(E),f.Bz]}),n})();var F=s(47957),R=s(44144),q=s(3056),Y=s(87078),M=s(86323),T=s(92642),k=s(3238),z=s(95113),j=s(64155),H=s(6205),Z=s(8468);const Q={User:T.n5m,UserCheck:T.uS3,FileText:T.acj,File:T.$BE};let K=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[v.uU],imports:[v.ez,J,Z.I,p.u5,p.UX,F.Bb,P.lN,R.c,q.ZQ,Y.T,y.FA,P.lN,k.XK,z.LD,j.vQ,Z.I,H.X,M.p.pick(Q),M.p]}),n})()}}]);