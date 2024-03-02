"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[112],{53506:(S,U,n)=>{n.d(U,{x:()=>x});var v=n(92340),f=n(94650),u=n(80529);let x=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${v.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(e){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",e)}getPurchaseById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}PurchaseIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,r)}updatePurchase(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,e)}deletePurchase(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+e)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(e){return this.http.post(this.apiUrl+"/pv-api/material_inward/",e)}getMaterialById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}MaterialIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,r)}updateMaterial(e,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,e)}deleteMaterial(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(e){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",e)}getPurchaseBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}PurchaseBillIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,r)}updatePurchaseBill(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,e)}deletePurchaseBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}getDebitNotesById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNotesIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,r)}updateDebitNotes(e,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,e)}deleteDebitNotes(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",e)}getPurchaseReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}PurchaseReturnIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,r)}updatePurchaseReturn(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,e)}deletePurchaseReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}filterVariant(e,r,l,$){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const y=[];return e&&y.push(`supplier=${e}`),r&&y.push(`category=${r}`),l&&y.push(`subcategory=${l}`),$&&y.push(`search=${$}`),y.length>0&&(t+="?"+y.join("&")),this.http.get(t)}}return g.\u0275fac=function(e){return new(e||g)(f.LFG(u.eN))},g.\u0275prov=f.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},71071:(S,U,n)=>{n.d(U,{p:()=>x});var v=n(92340),f=n(94650),u=n(80529);let x=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${v.N.api}`}getDebitNote(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}getDebitNoteById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNoteIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,r)}addDebitNote(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}updateDebitNote(e,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,e)}deleteDebitNote(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getCreditNote(){return this.http.get(this.apiUrl+"/pv-api/credit_note/")}getCreditNoteById(e){return this.http.get(`${this.apiUrl+"/pv-api/credit_note/?id="}${e}`)}CreditNoteIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/credit_note/?id="}${e}`,r)}addCreditNote(e){return this.http.post(this.apiUrl+"/pv-api/credit_note/",e)}updateCreditNote(e,r){return this.http.put(`${this.apiUrl+"/pv-api/credit_note/?id="}${r}`,e)}deleteCreditNote(e){return this.http.delete(`${this.apiUrl+"/pv-api/credit_note/?id="}${e}`)}getJournalVoucher(){return this.http.get(this.apiUrl+"/pv-api/jounal_voucher/")}getJournalVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${e}`)}JournalVoucherIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${e}`,r)}addJournalVoucher(e){return this.http.post(this.apiUrl+"/pv-api/jounal_voucher/",e)}updateJournalVoucher(e,r){return this.http.put(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${r}`,e)}deleteJournalVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/jounal_voucher/?id="}${e}`)}getCountraVoucher(){return this.http.get(this.apiUrl+"/pv-api/countra_voucher/")}getCountraVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${e}`)}CountraVoucherIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${e}`,r)}addCountraVoucher(e){return this.http.post(this.apiUrl+"/pv-api/countra_voucher/",e)}updateCountraVoucher(e,r){return this.http.put(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${r}`,e)}deleteCountraVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/countra_voucher/?id="}${e}`)}getRecieptVoucher(){return this.http.get(this.apiUrl+"/pv-api/receipt_voucher/")}getRecieptVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${e}`)}RecieptVoucherIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${e}`,r)}addRecieptVoucher(e){return this.http.post(this.apiUrl+"/pv-api/receipt_voucher/",e)}updateRecieptVoucher(e,r){return this.http.put(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${r}`,e)}deleteRecieptVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${e}`)}getPaymentVoucher(){return this.http.get(this.apiUrl+"/pv-api/payment_voucher/")}getPaymentVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${e}`)}PaymentVoucherIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${e}`,r)}addPaymentVoucher(e){return this.http.post(this.apiUrl+"/pv-api/payment_voucher/",e)}updatePaymentVoucher(e,r){return this.http.put(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${r}`,e)}deletePaymentVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_voucher/?id="}${e}`)}getJournalVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=JournalVoucher")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=DebitNote")}getCreditNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=CreditNote")}getCountraVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=CountraVoucher")}getReceiptVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=ReceiptVoucher")}getPaymentVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PaymentVoucher")}getExpenceVoucherPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=ExpensesVoucher")}getMaterialConsuptionPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialConsuption")}getAccount(){return this.http.get(this.apiUrl+"/pv-api/account/")}getSalesBill(){return this.http.get(this.apiUrl+"/pv-api/sale_bill/")}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getExpensVoucher(){return this.http.get(this.apiUrl+"/pv-api/expense_voucher/")}getExpensVoucherById(e){return this.http.get(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${e}`)}ExpensVoucherIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${e}`,r)}addExpensVoucher(e){return this.http.post(this.apiUrl+"/pv-api/expense_voucher/",e)}updateExpensVoucher(e,r){return this.http.put(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${r}`,e)}deleteExpensVoucher(e){return this.http.delete(`${this.apiUrl+"/pv-api/expense_voucher/?id="}${e}`)}getMaterialConsuption(){return this.http.get(this.apiUrl+"/pv-api/new_material_consuption/")}getMaterialConsuptionById(e){return this.http.get(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${e}`)}MaterialConsuptionIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${e}`,r)}addMaterialConsuption(e){return this.http.post(this.apiUrl+"/pv-api/new_material_consuption/",e)}updateMaterialConsuption(e,r){return this.http.put(`${this.apiUrl+"/pv-api/new_material_consuption/?id="}${r}`,e)}deleteMaterialConsuption(e){return this.http.delete(`${this.apiUrl+"/pv-api/receipt_voucher/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/contact-user/")}}return g.\u0275fac=function(e){return new(e||g)(f.LFG(u.eN))},g.\u0275prov=f.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},40112:(S,U,n)=>{n.r(U),n.d(U,{SalesByProductModule:()=>X});var v=n(36895),f=n(89299),u=n(24006),x=n(68675),g=n(54004),C=n(96166),e=n(12983),r=n.n(e),l=n(80574),$=n(94327),t=n(94650),y=n(97185),R=n(71071),B=n(53506),D=n(42917),N=n(87719),T=n(59549),P=n(99602),A=n(54333),O=n(54040);const b=function(o){return{"font-size":o}};function I(o,m){if(1&o&&(t.TgZ(0,"div",47)(1,"div",48)(2,"div",49)(3,"div",50)(4,"h4",51),t._uU(5),t.ALo(6,"number"),t.qZA(),t.TgZ(7,"h5"),t._uU(8,"Total Qty"),t.qZA()()()(),t.TgZ(9,"div",48)(10,"div",52)(11,"div",50)(12,"h4",51),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"h5"),t._uU(16,"Total Taxable Amount"),t.qZA()()()(),t.TgZ(17,"div",48)(18,"div",53)(19,"div",50)(20,"h4",51),t._uU(21),t.ALo(22,"number"),t.qZA(),t.TgZ(23,"h5"),t._uU(24,"Total Average Price"),t.qZA()()()(),t.TgZ(25,"div",48)(26,"div",54)(27,"div",50)(28,"h4",51),t._uU(29),t.ALo(30,"number"),t.qZA(),t.TgZ(31,"h5"),t._uU(32,"Total Amoount"),t.qZA()()()()()),2&o){const i=t.oxw();let a,s,p,d;t.xp6(4),t.Q6J("ngStyle",t.VKq(20,b,(null==i.purchaseRegister||null==i.purchaseRegister.total_qty||null==(a=i.purchaseRegister.total_qty.toString())?null:a.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(6,8,null==i.purchaseRegister?null:i.purchaseRegister.total_qty,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(22,b,(null==i.purchaseRegister||null==i.purchaseRegister.total_taxable_amount||null==(s=i.purchaseRegister.total_taxable_amount.toString())?null:s.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(14,11,null==i.purchaseRegister?null:i.purchaseRegister.total_taxable_amount,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(24,b,(null==i.purchaseRegister||null==i.purchaseRegister.total_averege_price||null==(p=i.purchaseRegister.total_averege_price.toString())?null:p.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(22,14,null==i.purchaseRegister?null:i.purchaseRegister.total_averege_price,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(26,b,(null==i.purchaseRegister||null==i.purchaseRegister.total_amount||null==(d=i.purchaseRegister.total_amount.toString())?null:d.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(30,17,null==i.purchaseRegister?null:i.purchaseRegister.total_amount,"1.2-2"),"")}}function L(o,m){if(1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA()()),2&o){const i=m.$implicit,a=m.index;t.xp6(2),t.Oqu(a+1+"."),t.xp6(2),t.Oqu(i.sku),t.xp6(2),t.Oqu(i.variant),t.xp6(2),t.Oqu(i.product),t.xp6(2),t.Oqu(i.total_qty),t.xp6(2),t.Oqu(i.taxable_amount),t.xp6(2),t.Oqu(i.averege_price),t.xp6(2),t.Oqu(i.total)}}const V=function(o,m){return{itemsPerPage:o,currentPage:m}};function w(o,m){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,L,17,8,"tr",55),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.purchaseRegisterList,i.key,i.reverse),t.WLB(8,V,i.itemsPerPage,i.p)))}}function J(o,m){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",56)(3,"p",57),t._uU(4,"Data not available"),t.qZA()()()())}const E=[{path:"",component:(()=>{class o{constructor(i,a,s,p,d,h,c,_){this.router=i,this.fb=a,this.toastr=s,this.transactionService=p,this.purchaseService=d,this.cs=h,this.datepipe=c,this.reportService=_,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new u.NI(""),this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(c=>{this.userDetails=c,console.log(c),this.userName=c?.username});const i=new Date,p=(i.getMonth(),i.getFullYear(),new Date(i));p.setDate(i.getDate()-14);const d=this.formatDate(p),h=this.formatDate(i);this.purchaseRegisterForm=new u.cw({start:new u.NI(d),end:new u.NI(h)}),this.startDate=this.purchaseRegisterForm.value?.start,this.endDate=this.purchaseRegisterForm.value?.end,this.getPurchaseRegister(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,x.O)(""),(0,g.U)(c=>{const _="string"==typeof c?c:c?.detail?.name;return _?this._filter(_):this.suppliers.slice()}))}formatDate(i){return this.datepipe.transform(i,"yyyy-MM-dd")||""}_filter(i){const a=i?i.toLowerCase():"";return console.log(a),this.suppliers.filter(s=>s?.detail?.name.toLowerCase().includes(a)||s?.detail?.company_name?.toLowerCase().includes(a)||s?.account?.account_id?.toLowerCase().includes(a))}displayFn(i){return i&&i?.detail?.company_name?i?.detail?.company_name:""}search(){if(""===this.titlee)this.getPurchaseRegister();else{const i=this.titlee.toLocaleLowerCase();this.purchaseRegisterList=this.purchaseRegisterList.filter(a=>{const s=a?.user?.party_name.toLocaleLowerCase(),p=a?.payment_voucher_no.toLocaleLowerCase()||"";return!(!s.includes(i)&&!p.includes(i))})}}sort(i){this.key=i,this.reverse=!this.reverse}selectAll(i){this.countryList.forEach(i?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(i,a,s){const p=(i-1)*a;return`Showing ${p+1}\u2013${Math.min(p+a-1,s-1)+1} of ${s} results`}getPurchaseRegister(){this.reportService.getSalesByProduct(this.startDate,this.endDate).subscribe(i=>{console.log(i),this.purchaseRegister=i,this.purchaseRegisterList=i?.data})}oncheckAccount(i){console.log(i),this.dataId=i,this.purchaseRegisterForm.patchValue({user_id:this.dataId}),console.warn(this.purchaseRegisterForm.value),this?.getPurchaseRegister()}getSelectedpurchaseRegisterDates(){console.log(this.purchaseRegisterForm.value);const i=this.datepipe.transform(this.purchaseRegisterForm.value.start,"yyyy-MM-dd"),a=this.datepipe.transform(this.purchaseRegisterForm.value.end,"yyyy-MM-dd");console.log(i),console.log(a),this.startDate=i,this.endDate=a,this?.getPurchaseRegister()}generatePDFAgain(){const i=new C.default,p=`Date Range From: ${this.startDate} - ${this.endDate}`,d=`User: ${this.userName}`;i.setFontSize(12),i.setTextColor(33,43,54),i.text("PV",86,5),i.text(" Sales By Product",82,10),i.text(d,10,18),i.text(p,10,22),i.text("",10,25),r()(i,{head:[["#","Sku","Variant","Product","Total Qty","Taxable Amount","Averagr Price","Total"]],body:this.purchaseRegisterList.map((h,c)=>[c+1,h.sku,h.variant,h.product,h.total_qty,h.taxable_amount,h.averege_price,h.total]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),i.save("Sales_By_Product.pdf")}getVisibleDataFromTable(){const i=[],a=document.getElementById("mytable");if(a){const s=a.querySelector("thead tr");if(s){const d=[];s.querySelectorAll("th").forEach(h=>{const c=h.textContent?.trim();c&&"Is Active"!==c&&"Action"!==c&&d.push(c)}),i.push(d)}a.querySelectorAll("tbody tr").forEach(d=>{const h=[];d.querySelectorAll("td").forEach(c=>{const _=c.textContent?.trim();_&&h.push(_)}),i.push(h)})}return i}exportToExcel(){const i=this.getVisibleDataFromTable(),a=l.P6.aoa_to_sheet(i),s=l.P6.book_new();l.P6.book_append_sheet(s,a,"Sheet1");const p=l.cW(s,{bookType:"xlsx",type:"array"}),d=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,$.saveAs)(d,"salebyproduct.xlsx")}printTable(){const i=document.getElementById("mytable");if(!i)return void console.error("Table element with ID 'mytable' not found.");const s=document.querySelector(".titl");if(!s)return void console.error("Title element with class 'titl' not found.");const p=s.outerHTML,h=i.cloneNode(!0).outerHTML,_="<style>.spaced-title { margin-top: 80px; }</style>"+p.replace("titl","spaced-title")+h,tt=document.body.innerHTML;document.body.innerHTML=_,window.print(),document.body.innerHTML=tt}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(f.F0),t.Y36(u.qu),t.Y36(y._W),t.Y36(R.p),t.Y36(B.x),t.Y36(D.J),t.Y36(v.uU),t.Y36(N.r))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sales-by-product"]],decls:92,vars:11,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"row","container"],[1,"col-lg-2","col-sm-4","col-12","d-flex"],[1,"dash-count",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],[1,"dash-count","das1",2,"margin","0 0 10px"],[1,"dash-count","das3",2,"margin","0 0 10px"],[1,"dash-count","das4",2,"margin","0 0 10px"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(i,a){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Sales By Product"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Sales By Product"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return a.getSelectedpurchaseRegisterDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return a.getSelectedpurchaseRegisterDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()()()()(),t.TgZ(28,"div",21)(29,"ul")(30,"li")(31,"a",22),t.NdJ("click",function(){return a.generatePDFAgain()}),t._UZ(32,"img",23),t.qZA()(),t.TgZ(33,"li")(34,"a",24),t.NdJ("click",function(){return a.exportToExcel()}),t._UZ(35,"img",25),t.qZA()(),t.TgZ(36,"li")(37,"a",26),t.NdJ("click",function(){return a.printTable()}),t._UZ(38,"img",27),t.qZA()()()()(),t.YNc(39,I,33,28,"div",28),t.TgZ(40,"div",29)(41,"table",30)(42,"thead")(43,"tr")(44,"th",31),t.NdJ("click",function(){return a.sort("id")}),t._uU(45,"#"),t._UZ(46,"i",32),t.qZA(),t.TgZ(47,"th",31),t.NdJ("click",function(){return a.sort("id")}),t._uU(48,"Sku"),t._UZ(49,"i",32),t.qZA(),t.TgZ(50,"th",31),t.NdJ("click",function(){return a.sort("id")}),t._uU(51,"Variant "),t._UZ(52,"i",32),t.qZA(),t.TgZ(53,"th",31),t.NdJ("click",function(){return a.sort("id")}),t._uU(54,"Product"),t._UZ(55,"i",32),t.qZA(),t.TgZ(56,"th",31),t.NdJ("click",function(){return a.sort("id")}),t._uU(57," Total Qty "),t._UZ(58,"i",32),t.qZA(),t.TgZ(59,"th",31),t.NdJ("click",function(){return a.sort("id")}),t._uU(60," Taxable Amount "),t._UZ(61,"i",32),t.qZA(),t.TgZ(62,"th",31),t.NdJ("click",function(){return a.sort("id")}),t._uU(63," Average Price "),t._UZ(64,"i",32),t.qZA(),t.TgZ(65,"th",31),t.NdJ("click",function(){return a.sort("id")}),t._uU(66,"Total "),t._UZ(67,"i",32),t.qZA()()(),t.YNc(68,w,4,11,"tbody",33),t.YNc(69,J,5,0,"tbody",33),t.qZA(),t.TgZ(70,"div",10)(71,"div",34)(72,"div",35),t._uU(73," Show per page "),t.TgZ(74,"select",36),t.NdJ("ngModelChange",function(p){return a.itemsPerPage=p}),t.TgZ(75,"option",37),t._uU(76,"10"),t.qZA(),t.TgZ(77,"option",38),t._uU(78,"20"),t.qZA(),t.TgZ(79,"option",39),t._uU(80,"30"),t.qZA(),t.TgZ(81,"option",40),t._uU(82,"50"),t.qZA(),t.TgZ(83,"option",41),t._uU(84,"100"),t.qZA(),t.TgZ(85,"option",42),t._uU(86,"All"),t.qZA()()()(),t.TgZ(87,"div",43)(88,"div",44)(89,"pagination-controls",45),t.NdJ("pageChange",function(p){return a.p=p}),t.qZA(),t.TgZ(90,"div",46),t._uU(91),t.qZA()()()()()()()()()),2&i){const s=t.MAs(27);t.xp6(12),t.Q6J("formGroup",a.purchaseRegisterForm),t.xp6(7),t.Q6J("formGroup",a.purchaseRegisterForm)("rangePicker",s),t.xp6(6),t.Q6J("for",s),t.xp6(14),t.Q6J("ngIf",a.purchaseRegister),t.xp6(29),t.Q6J("ngIf",(null==a.purchaseRegisterList?null:a.purchaseRegisterList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==a.purchaseRegisterList?null:a.purchaseRegisterList.length)),t.xp6(5),t.Q6J("ngModel",a.itemsPerPage),t.xp6(17),t.lnq(" Showing ",a.itemsPerPage," to ",a.itemsPerPage," of ",a.p," entries ")}},dependencies:[v.sg,v.O5,v.PC,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.On,u.sg,u.u,T.KE,T.R9,P.nW,P.wx,P.zY,P.By,P._g,A.LS,v.JJ,A._s,O.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),o})()}];let F=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.Bz.forChild(E),f.Bz]}),o})();var q=n(47957),k=n(44144),Y=n(3056),j=n(87078),M=n(86323),Z=n(92642),Q=n(3238),z=n(95113),H=n(64155),K=n(6205),W=n(8468);const G={User:Z.n5m,UserCheck:Z.uS3,FileText:Z.acj,File:Z.$BE};let X=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[v.uU],imports:[v.ez,F,u.u5,u.UX,q.Bb,T.lN,k.c,Y.ZQ,j.T,P.FA,T.lN,Q.XK,z.LD,H.vQ,W.I,K.X,M.p.pick(G),M.p]}),o})()}}]);