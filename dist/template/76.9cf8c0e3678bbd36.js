"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[76],{53506:(N,b,o)=>{o.d(b,{x:()=>M});var y=o(92340),x=o(94650),m=o(80529);let M=(()=>{class v{constructor(r){this.http=r,this.apiUrl=`${y.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(r){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+r)}getPurchaseFY(r,a){console.log(a,"branch"),console.log(a.length,"branch");let u=this.apiUrl+"/pv-api/purchase_order/";const c=[];if(r&&c.push(`financial_year=${r}`),a&&a.length>0){const t=JSON.stringify(a);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(u+="?"+c.join("&")),this.http.get(u)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(r){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+r)}addPurchase(r){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",r)}getPurchaseById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}PurchaseIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,a)}updatePurchase(r,a){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${a}`,r)}deletePurchase(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`)}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+r)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(r,a){console.log(a,"branch"),console.log(a.length,"branch");let u=this.apiUrl+"/pv-api/material_inward/";const c=[];if(r&&c.push(`financial_year=${r}`),a&&a.length>0){const t=JSON.stringify(a);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(u+="?"+c.join("&")),this.http.get(u)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(r){return this.http.post(this.apiUrl+"/pv-api/material_inward/",r)}getMaterialById(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getMaterialByUserId(r){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${r}`)}MaterialIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,a)}updateMaterial(r,a){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${a}`,r)}deleteMaterial(r){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`)}getPurchaseBillFY(r,a){console.log(a,"branch"),console.log(a.length,"branch");let u=this.apiUrl+"/pv-api/purchase_bill/";const c=[];if(r&&c.push(`financial_year=${r}`),a&&a.length>0){const t=JSON.stringify(a);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(u+="?"+c.join("&")),this.http.get(u)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(r){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",r)}getPurchaseBillById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getPurchaseBillByUserId(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${r}`)}PurchaseBillIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,a)}updatePurchaseBill(r,a){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${a}`,r)}deletePurchaseBill(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`)}getDebitNotes(r,a){console.log(a,"branch"),console.log(a.length,"branch");let u=this.apiUrl+"/pv-api/debit_note/";const c=[];if(r&&c.push(`financial_year=${r}`),a&&a.length>0){const t=JSON.stringify(a);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(u+="?"+c.join("&")),this.http.get(u)}addDebitNotes(r){return this.http.post(this.apiUrl+"/pv-api/debit_note/",r)}getDebitNotesById(r){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}DebitNotesIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,a)}updateDebitNotes(r,a){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${a}`,r)}deleteDebitNotes(r){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`)}getSearchProductById(r){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${r}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(r,a){console.log(a,"branch"),console.log(a.length,"branch");let u=this.apiUrl+"/pv-api/purchase_return/";const c=[];if(r&&c.push(`financial_year=${r}`),a&&a.length>0){const t=JSON.stringify(a);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(u+="?"+c.join("&")),this.http.get(u)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",r)}getPurchaseReturnById(r){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}PurchaseReturnIsActive(r,a){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,a)}updatePurchaseReturn(r,a){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${a}`,r)}deletePurchaseReturn(r){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`)}filterVariant(r,a,u,c){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const S=[];return r&&S.push(`supplier=${r}`),a&&S.push(`category=${a}`),u&&S.push(`subcategory=${u}`),c&&S.push(`search=${c}`),S.length>0&&(t+="?"+S.join("&")),this.http.get(t)}purchaseReturnStatusUpdate(r){return this.http.post(this.apiUrl+"/pv-api/purchase_return_status_update/",r)}}return v.\u0275fac=function(r){return new(r||v)(x.LFG(m.eN))},v.\u0275prov=x.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},76:(N,b,o)=>{o.r(b),o.d(b,{PurchaseSummaryModule:()=>ut});var y=o(36895),x=o(4392),m=o(24006),M=o(94327),v=o(96166),w=o(12983),r=o.n(w),a=o(68675),u=o(54004),c=o(80574),t=o(94650),S=o(97185),B=o(71071),I=o(53506),J=o(42917),q=o(87719),k=o(43443),D=o(54333),U=o(59549),T=o(99602),E=o(54040);function F(l,d){if(1&l){const e=t.EpF();t.TgZ(0,"a",58)(1,"input",59,60),t.NdJ("change",function(i){const p=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.SelectedBranch(p.id,i.target.checked))}),t.qZA(),t.TgZ(3,"label",61),t.NdJ("click",function(i){t.CHM(e);const s=t.oxw(2);return t.KtG(s.onLabelClick(i))}),t._uU(4),t.qZA()()}if(2&l){const e=d.$implicit,n=d.index,i=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",i.selectData.includes(e.id))("id","checkboxCat-"+n),t.xp6(2),t.Q6J("for","checkboxCat-"+n),t.xp6(1),t.Oqu(e.title)}}function Y(l,d){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&l){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const R=function(){return{standalone:!0}};function Q(l,d){if(1&l){const e=t.EpF();t.TgZ(0,"div",51)(1,"div",52)(2,"button",53),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",54)(5,"li")(6,"input",55),t.NdJ("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.searchBranch=i)})("ngModelChange",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,F,5,5,"a",56),t.qZA()()(),t.TgZ(9,"div",57),t.YNc(10,Y,2,1,"span",36),t.qZA()()}if(2&l){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,R)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}const Z=function(l){return{"font-size":l}};function j(l,d){if(1&l&&(t.TgZ(0,"div",62)(1,"div",63)(2,"div",64)(3,"div",65)(4,"h4",66),t._uU(5),t.ALo(6,"number"),t.qZA(),t.TgZ(7,"h5"),t._uU(8,"Total"),t.qZA()()()(),t.TgZ(9,"div",63)(10,"div",67)(11,"div",65)(12,"h4",66),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"h5"),t._uU(16,"Total Cash"),t.qZA()()()(),t.TgZ(17,"div",63)(18,"div",68)(19,"div",65)(20,"h4",66),t.ALo(21,"number"),t._uU(22),t.ALo(23,"number"),t.qZA(),t.TgZ(24,"h5"),t._uU(25,"Total Bank"),t.qZA()()()(),t.TgZ(26,"div",63)(27,"div",69)(28,"div",65)(29,"h4",66),t.ALo(30,"number"),t._uU(31),t.ALo(32,"number"),t.qZA(),t.TgZ(33,"h5"),t._uU(34,"Cash Percentage"),t.qZA()()()(),t.TgZ(35,"div",63)(36,"div",68)(37,"div",65)(38,"h4",66),t.ALo(39,"number"),t._uU(40),t.ALo(41,"number"),t.qZA(),t.TgZ(42,"h5"),t._uU(43,"Bank Percentage"),t.qZA()()()()()),2&l){const e=t.oxw();let n,i,s,p,g;t.xp6(4),t.Q6J("ngStyle",t.VKq(34,Z,(null==e.purchaseSummary||null==e.purchaseSummary.total||null==(n=e.purchaseSummary.total.toString())?null:n.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(6,10,null==e.purchaseSummary?null:e.purchaseSummary.total,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(36,Z,(null==e.purchaseSummary||null==e.purchaseSummary.total_cash||null==(i=e.purchaseSummary.total_cash.toString())?null:i.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(14,13,null==e.purchaseSummary?null:e.purchaseSummary.total_cash,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(38,Z,t.xi3(21,16,null==e.purchaseSummary?null:e.purchaseSummary.total_bank,(null==(s="1.2-2".toString())?null:s.length)>=10?"15px":"24px"))),t.xp6(2),t.hij(" ",t.xi3(23,19,null==e.purchaseSummary?null:e.purchaseSummary.total_bank,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(40,Z,t.xi3(30,22,null==e.purchaseSummary?null:e.purchaseSummary.cash_percentage,(null==(p="1.2-2".toString())?null:p.length)>=10?"15px":"24px"))),t.xp6(2),t.hij(" ",t.xi3(32,25,null==e.purchaseSummary?null:e.purchaseSummary.cash_percentage,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(42,Z,t.xi3(39,28,null==e.purchaseSummary?null:e.purchaseSummary.bank_percentage,(null==(g="1.2-2".toString())?null:g.length)>=10?"15px":"24px"))),t.xp6(2),t.hij(" ",t.xi3(41,31,null==e.purchaseSummary?null:e.purchaseSummary.bank_percentage,"1.2-2"),"")}}function V(l,d){if(1&l&&(t.TgZ(0,"tr")(1,"td",72),t._uU(2),t.qZA()()),2&l){const e=d.$implicit;t.xp6(2),t.Oqu(null==e.purchase_bill?null:e.purchase_bill.supplier_bill_no)}}function H(l,d){if(1&l&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td")(14,"table",71)(15,"tbody"),t.YNc(16,V,3,1,"tr",70),t.qZA()()(),t.TgZ(17,"td"),t._uU(18),t.qZA()()),2&l){const e=d.$implicit,n=d.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(e.supplier),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.payment_type),t.xp6(2),t.Oqu(e.payment_voucher_no),t.xp6(2),t.Oqu(e.amount),t.xp6(4),t.Q6J("ngForOf",null==e?null:e.payment_cart),t.xp6(2),t.Oqu(e.note)}}const z=function(l,d){return{itemsPerPage:l,currentPage:d}};function K(l,d){if(1&l&&(t.TgZ(0,"tbody"),t.YNc(1,H,19,8,"tr",70),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&l){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.purchaseSummaryList,e.key,e.reverse),t.WLB(8,z,e.itemsPerPage,e.p)))}}function G(l,d){1&l&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",73)(3,"p",74),t._uU(4,"Data not available"),t.qZA()()()())}const W=[{path:"",component:(()=>{class l{constructor(e,n,i,s,p,g,f,_,h){this.router=e,this.fb=n,this.toastr=i,this.transactionService=s,this.purchaseService=p,this.cs=g,this.datepipe=f,this.reportService=_,this.commonService=h,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new m.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let h=localStorage.getItem("financialYear");console.warn(JSON.parse(h));let C=JSON.parse(h);this.fyID=C}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=n,this.cs.userDetails$.subscribe(h=>{this.isAdmin="admin"==h.role,this.getBranch()}),this.cs.userDetails$.subscribe(h=>{this.userDetails=h,console.log(h),this.userName=h?.username});const i=new Date,g=(i.getMonth(),i.getFullYear(),new Date(i));g.setDate(i.getDate()-14);const f=this.formatDate(g),_=this.formatDate(i);this.purchaseSummaryform=new m.cw({start:new m.NI(f,this.commonService.dateRangeValidator(this.financialYear)),end:new m.NI(_,this.commonService.dateRangeValidator(this.financialYear)),user_id:new m.NI,payment_type:new m.NI("")}),this.commonService.validateAndClearDates(this.purchaseSummaryform,this.minDate,this.maxDate),this.startDate=this.purchaseSummaryform.value?.start,this.endDate=this.purchaseSummaryform.value?.end,this.purchaseSummaryUserId=this.purchaseSummaryform.value?.user_id,this.purchaseSummaryPaymentType=this.purchaseSummaryform.value?.payment_type,this.getPurchaseSummary(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,a.O)(""),(0,u.U)(h=>{const C="string"==typeof h?h:h?.detail?.name;return C?this._filter(C):this.suppliers.slice()}))}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const n=e?e.toLowerCase():"";return console.log(n),this.suppliers.filter(i=>i?.detail?.name.toLowerCase().includes(n)||i?.detail?.company_name?.toLowerCase().includes(n)||i?.account?.account_id?.toLowerCase().includes(n))}displayFn(e){return e&&e?.detail?.company_name?e?.detail?.company_name:""}search(){if(""===this.titlee)this.getPurchaseSummary();else{const e=this.titlee.toLocaleLowerCase();this.purchaseSummaryList=this.purchaseSummaryList.filter(n=>{const i=n?.user?.party_name.toLocaleLowerCase(),s=n?.payment_voucher_no.toLocaleLowerCase()||"";return!(!i.includes(e)&&!s.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,n,i){const s=(e-1)*n;return`Showing ${s+1}\u2013${Math.min(s+n-1,i-1)+1} of ${i} results`}getPurchaseSummary(){this.reportService.getPurchaseSummary(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.purchaseSummary=e,this.purchaseSummaryList=e?.data})}oncheckAccount(e){console.log(e),this.dataId=e,this.purchaseSummaryform.patchValue({user_id:this.dataId}),console.warn(this.purchaseSummaryform.value),this.purchaseSummaryUserId=this.purchaseSummaryform.value?.user_id,this?.getPurchaseSummary()}getSelectedPurchaseSummaryDates(){console.log(this.purchaseSummaryform.value);const e=this.datepipe.transform(this.purchaseSummaryform.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.purchaseSummaryform.value.end,"yyyy-MM-dd");console.log(e),console.log(n),this.startDate=e,this.endDate=n,this?.getPurchaseSummary()}generatePDFAgain(){const e=new v.default,s=`Date Range From: ${this.startDate} - ${this.endDate}`,p=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Purchase Summary Report",82,10),e.text(p,10,18),e.text(s,10,22),e.text("",10,25);const f=[];let _=1;this.purchaseSummaryList.forEach(h=>{console.warn(h);const C=h.supplier,ct=h.date,pt=h.payment_type,ht=h.payment_voucher_no,mt=h.amount,dt=h.note;let P=!0;h.payment_cart.forEach((L,_t)=>{console.log(L),f.push([P?_:"",P?C:"",P?ct:"",P?pt:"",P?ht:"",P?mt:"",L.purchase_bill?.supplier_bill_no,P?dt:""]),P=!1}),_++}),r()(e,{head:[["#","Supplier","Date","Payment Type","Payment Voucher No. ","Amount","supplier Bill No.","Note"]],body:f,theme:"grid",startY:32,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),e.save("Purchase_Summary.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable");if(n){const i=n.querySelector("thead tr");if(i){const p=[];i.querySelectorAll("th").forEach(g=>{const f=g.textContent?.trim();f&&"Is Active"!==f&&"Action"!==f&&p.push(f)}),e.push(p)}n.querySelectorAll("tbody tr").forEach(p=>{const g=[];p.querySelectorAll("td").forEach(f=>{const _=f.textContent?.trim();_&&g.push(_)}),e.push(g)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=c.P6.aoa_to_sheet(e),i=c.P6.book_new();c.P6.book_append_sheet(i,n,"Sheet1");const s=c.cW(i,{bookType:"xlsx",type:"array"}),p=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,M.saveAs)(p,"purchaseSummary.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const i=document.querySelector(".titl");if(!i)return void console.error("Title element with class 'titl' not found.");const s=i.outerHTML,g=e.cloneNode(!0).outerHTML,_="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+g,h=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=_,window.print(),document.body.innerHTML=h}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.purchaseSummaryList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,n){if(n)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const i=this.selectData.findIndex(s=>s==e);console.log(i),-1!==i&&this.selectData.splice(i,1),this.ngOnInit(),console.log(this.selectData)}}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(x.F0),t.Y36(m.qu),t.Y36(S._W),t.Y36(B.p),t.Y36(I.x),t.Y36(J.J),t.Y36(y.uU),t.Y36(q.r),t.Y36(k.R))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-purchase-summary"]],decls:97,vars:14,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[1,"row","container"],[1,"col-lg-2","col-sm-4","col-12","d-flex"],[1,"dash-count",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],[1,"dash-count","das1",2,"margin","0 0 10px"],[1,"dash-count","das3",2,"margin","0 0 10px"],[1,"dash-count","das4",2,"margin","0 0 10px"],[4,"ngFor","ngForOf"],[1,"table"],[2,"width","15%"],["colspan","10"],[1,"text-center"]],template:function(e,n){if(1&e){const i=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Purchase Summary"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Purchase Summary"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,Q,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return n.getSelectedPurchaseSummaryDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return n.getSelectedPurchaseSummaryDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()()()()(),t.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(36,"img",26),t.qZA()(),t.TgZ(37,"li")(38,"a",27),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(39,"img",28),t.qZA()(),t.TgZ(40,"li")(41,"a",29),t.NdJ("click",function(){return n.printTable()}),t._UZ(42,"img",30),t.qZA()()()()(),t.YNc(43,j,44,44,"div",31),t.TgZ(44,"div",32)(45,"table",33)(46,"thead")(47,"tr")(48,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(49,"#"),t._UZ(50,"i",35),t.qZA(),t.TgZ(51,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(52,"Supplier "),t._UZ(53,"i",35),t.qZA(),t.TgZ(54,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(55,"Date "),t._UZ(56,"i",35),t.qZA(),t.TgZ(57,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(58,"Payment Type"),t._UZ(59,"i",35),t.qZA(),t.TgZ(60,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(61," Payment Voucher No. "),t._UZ(62,"i",35),t.qZA(),t.TgZ(63,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(64," Amount "),t._UZ(65,"i",35),t.qZA(),t.TgZ(66,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(67," Supplier Bill No. "),t._UZ(68,"i",35),t.qZA(),t.TgZ(69,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(70,"Note"),t._UZ(71,"i",35),t.qZA()()(),t.YNc(72,K,4,11,"tbody",36),t.YNc(73,G,5,0,"tbody",36),t.qZA(),t.TgZ(74,"div",6)(75,"div",37)(76,"div",38),t._uU(77," Show per page "),t.TgZ(78,"select",39,40),t.NdJ("ngModelChange",function(p){return n.itemsPerPage=p})("change",function(){t.CHM(i);const p=t.MAs(79);return t.KtG(n.changePg(p.value))}),t.TgZ(80,"option",41),t._uU(81,"10"),t.qZA(),t.TgZ(82,"option",42),t._uU(83,"20"),t.qZA(),t.TgZ(84,"option",43),t._uU(85,"30"),t.qZA(),t.TgZ(86,"option",44),t._uU(87,"50"),t.qZA(),t.TgZ(88,"option",45),t._uU(89,"100"),t.qZA(),t.TgZ(90,"option",46),t._uU(91,"All"),t.qZA()()()(),t.TgZ(92,"div",47)(93,"div",48)(94,"pagination-controls",49),t.NdJ("pageChange",function(p){return n.p=p}),t.qZA(),t.TgZ(95,"div",50),t._uU(96),t.qZA()()()()()()()()()}if(2&e){const i=t.MAs(31);t.xp6(11),t.Q6J("ngIf",n.isAdmin),t.xp6(5),t.Q6J("formGroup",n.purchaseSummaryform),t.xp6(7),t.Q6J("formGroup",n.purchaseSummaryform)("rangePicker",i)("min",n.minDate)("max",n.maxDate),t.xp6(6),t.Q6J("for",i),t.xp6(14),t.Q6J("ngIf",n.purchaseSummary),t.xp6(29),t.Q6J("ngIf",(null==n.purchaseSummaryList?null:n.purchaseSummaryList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.purchaseSummaryList?null:n.purchaseSummaryList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq(" Showing ",n.itemsPerPage," to ",null==n.purchaseSummaryList?null:n.purchaseSummaryList.length," of ",n.p," entries ")}},dependencies:[y.sg,y.O5,y.PC,m._Y,m.YN,m.Kr,m.Fj,m.EJ,m.JJ,m.JL,m.On,m.sg,m.u,D.LS,U.KE,U.R9,T.nW,T.wx,T.zY,T.By,T._g,y.JJ,D._s,E.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),l})()}];let X=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[x.Bz.forChild(W),x.Bz]}),l})();var tt=o(47957),et=o(44144),rt=o(3056),at=o(87078),$=o(86323),A=o(92642),nt=o(3238),it=o(95113),lt=o(64155),st=o(6205),O=o(8468);const ot={User:A.n5m,UserCheck:A.uS3,FileText:A.acj,File:A.$BE};let ut=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[y.uU],imports:[y.ez,X,O.I,m.u5,m.UX,tt.Bb,U.lN,et.c,rt.ZQ,at.T,T.FA,U.lN,nt.XK,it.LD,lt.vQ,O.I,st.X,$.p.pick(ot),$.p]}),l})()}}]);