"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8586],{53506:(O,b,o)=>{o.d(b,{x:()=>w});var _=o(92340),x=o(94650),g=o(80529);let w=(()=>{class T{constructor(e){this.http=e,this.apiUrl=`${_.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(e){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+e)}getPurchaseFY(e,a){console.log(a,"branch"),console.log(a.length,"branch");let s=this.apiUrl+"/pv-api/purchase_order/";const c=[];if(e&&c.push(`financial_year=${e}`),a&&a.length>0){const t=JSON.stringify(a);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(s+="?"+c.join("&")),this.http.get(s)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(e){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+e)}addPurchase(e){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",e)}getPurchaseById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}PurchaseIsActive(e,a){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,a)}updatePurchase(e,a){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${a}`,e)}deletePurchase(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+e)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(e,a){console.log(a,"branch"),console.log(a.length,"branch");let s=this.apiUrl+"/pv-api/material_inward/";const c=[];if(e&&c.push(`financial_year=${e}`),a&&a.length>0){const t=JSON.stringify(a);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(s+="?"+c.join("&")),this.http.get(s)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(e){return this.http.post(this.apiUrl+"/pv-api/material_inward/",e)}getMaterialById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getMaterialByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${e}`)}MaterialIsActive(e,a){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,a)}updateMaterial(e,a){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${a}`,e)}deleteMaterial(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getPurchaseBillFY(e,a){console.log(a,"branch"),console.log(a.length,"branch");let s=this.apiUrl+"/pv-api/purchase_bill/";const c=[];if(e&&c.push(`financial_year=${e}`),a&&a.length>0){const t=JSON.stringify(a);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(s+="?"+c.join("&")),this.http.get(s)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(e){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",e)}getPurchaseBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getPurchaseBillByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${e}`)}PurchaseBillIsActive(e,a){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,a)}updatePurchaseBill(e,a){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${a}`,e)}deletePurchaseBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getDebitNotes(e,a){console.log(a,"branch"),console.log(a.length,"branch");let s=this.apiUrl+"/pv-api/debit_note/";const c=[];if(e&&c.push(`financial_year=${e}`),a&&a.length>0){const t=JSON.stringify(a);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(s+="?"+c.join("&")),this.http.get(s)}addDebitNotes(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}getDebitNotesById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNotesIsActive(e,a){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,a)}updateDebitNotes(e,a){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${a}`,e)}deleteDebitNotes(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(e,a){console.log(a,"branch"),console.log(a.length,"branch");let s=this.apiUrl+"/pv-api/purchase_return/";const c=[];if(e&&c.push(`financial_year=${e}`),a&&a.length>0){const t=JSON.stringify(a);console.log(t),console.log(t?.length),c.push(`branch=${t}`)}return c.length>0&&(s+="?"+c.join("&")),this.http.get(s)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",e)}getPurchaseReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}PurchaseReturnIsActive(e,a){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,a)}updatePurchaseReturn(e,a){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${a}`,e)}deletePurchaseReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}filterVariant(e,a,s,c){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const S=[];return e&&S.push(`supplier=${e}`),a&&S.push(`category=${a}`),s&&S.push(`subcategory=${s}`),c&&S.push(`search=${c}`),S.length>0&&(t+="?"+S.join("&")),this.http.get(t)}}return T.\u0275fac=function(e){return new(e||T)(x.LFG(g.eN))},T.\u0275prov=x.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"}),T})()},8586:(O,b,o)=>{o.r(b),o.d(b,{TimeWiseSaleModule:()=>ot});var _=o(36895),x=o(4392),g=o(24006),w=o(94327),T=o(96166),W=o(12983),e=o.n(W),a=o(68675),s=o(54004),c=o(80574),t=o(94650),S=o(97185),L=o(71071),B=o(53506),I=o(42917),N=o(87719),J=o(43443),A=o(54333),P=o(59549),y=o(99602),E=o(54040);function F(l,u){if(1&l){const i=t.EpF();t.TgZ(0,"a",59)(1,"input",60,61),t.NdJ("change",function(r){const h=t.CHM(i).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(h.id,r.target.checked))}),t.qZA(),t.TgZ(3,"label",62),t.NdJ("click",function(r){t.CHM(i);const p=t.oxw(2);return t.KtG(p.onLabelClick(r))}),t._uU(4),t.qZA()()}if(2&l){const i=u.$implicit,n=u.index,r=t.oxw(2);t.xp6(1),t.Q6J("value",i.id)("checked",r.selectData.includes(i.id))("id","checkboxCat-"+n),t.xp6(2),t.Q6J("for","checkboxCat-"+n),t.xp6(1),t.Oqu(i.title)}}function Y(l,u){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&l){const i=t.oxw(2);t.xp6(1),t.Oqu(i.selectData.length+" Selected")}}const q=function(){return{standalone:!0}};function R(l,u){if(1&l){const i=t.EpF();t.TgZ(0,"div",52)(1,"div",53)(2,"button",54),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",55)(5,"li")(6,"input",56),t.NdJ("ngModelChange",function(r){t.CHM(i);const p=t.oxw();return t.KtG(p.searchBranch=r)})("ngModelChange",function(){t.CHM(i);const r=t.oxw();return t.KtG(r.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,F,5,5,"a",57),t.qZA()()(),t.TgZ(9,"div",58),t.YNc(10,Y,2,1,"span",37),t.qZA()()}if(2&l){const i=t.oxw();t.xp6(6),t.Q6J("ngModel",i.searchBranch)("ngModelOptions",t.DdM(4,q)),t.xp6(2),t.Q6J("ngForOf",i.filteredBranchList),t.xp6(2),t.Q6J("ngIf",i.selectData.length>0)}}function k(l,u){if(1&l&&(t.TgZ(0,"tr")(1,"td",35),t._uU(2),t.qZA(),t.TgZ(3,"td",67),t._uU(4),t.qZA(),t.TgZ(5,"td",35),t._uU(6),t.qZA()()),2&l){const i=u.$implicit;t.xp6(2),t.Oqu(i.start_time),t.xp6(2),t.Oqu(i.end_time),t.xp6(2),t.Oqu(i[" total_sale"])}}function H(l,u){if(1&l&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td",64),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td",64),t._uU(7),t.qZA(),t.TgZ(8,"td",65)(9,"table",66)(10,"tbody"),t.YNc(11,k,7,3,"tr",63),t.qZA()()()()),2&l){const i=u.$implicit,n=u.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(t.xi3(5,4,i.date,"yy/MM/dd")),t.xp6(3),t.Oqu(i.total_sale),t.xp6(4),t.Q6J("ngForOf",null==i?null:i.time_wise_data)}}const Q=function(l,u){return{itemsPerPage:l,currentPage:u}};function z(l,u){if(1&l&&(t.TgZ(0,"tbody"),t.YNc(1,H,12,7,"tr",63),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&l){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.amountWiseSaleList,i.key,i.reverse),t.WLB(8,Q,i.itemsPerPage,i.p)))}}function j(l,u){1&l&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",68)(3,"p",69),t._uU(4,"Data not available"),t.qZA()()()())}const V=[{path:"",component:(()=>{class l{constructor(i,n,r,p,h,m,f,v,d){this.router=i,this.fb=n,this.toastr=r,this.transactionService=p,this.purchaseService=h,this.cs=m,this.datepipe=f,this.reportService=v,this.commonService=d,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new g.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let d=localStorage.getItem("financialYear");console.warn(JSON.parse(d));let C=JSON.parse(d);this.fyID=C}this.financialYear=localStorage.getItem("financialYear");const{minDate:i,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=i,this.maxDate=n,this.cs.userDetails$.subscribe(d=>{this.isAdmin="admin"==d.role,this.getBranch()}),this.cs.userDetails$.subscribe(d=>{this.userDetails=d,console.log(d),this.userName=d?.username});const r=new Date,m=(r.getMonth(),r.getFullYear(),new Date(r));m.setDate(r.getDate()-14);const f=this.formatDate(m),v=this.formatDate(r);this.amountWiseSaleform=new g.cw({start:new g.NI(f,this.commonService.dateRangeValidator(this.financialYear)),end:new g.NI(v,this.commonService.dateRangeValidator(this.financialYear))}),this.commonService.validateAndClearDates(this.amountWiseSaleform,this.minDate,this.maxDate),this.startDate=this.amountWiseSaleform.value?.start,this.endDate=this.amountWiseSaleform.value?.end,this.getamountWiseSale(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,a.O)(""),(0,s.U)(d=>{const C="string"==typeof d?d:d?.detail?.name;return C?this._filter(C):this.suppliers.slice()}))}formatDate(i){return this.datepipe.transform(i,"yyyy-MM-dd")||""}_filter(i){const n=i?i.toLowerCase():"";return console.log(n),this.suppliers.filter(r=>r?.detail?.name.toLowerCase().includes(n)||r?.detail?.company_name?.toLowerCase().includes(n)||r?.account?.account_id?.toLowerCase().includes(n))}displayFn(i){return i&&i?.detail?.company_name?i?.detail?.company_name:""}search(){if(""===this.titlee)this.getamountWiseSale();else{const i=this.titlee.toLocaleLowerCase();this.amountWiseSaleList=this.amountWiseSaleList.filter(n=>{const r=n?.user?.party_name.toLocaleLowerCase(),p=n?.payment_voucher_no.toLocaleLowerCase()||"";return!(!r.includes(i)&&!p.includes(i))})}}sort(i){this.key=i,this.reverse=!this.reverse}selectAll(i){this.countryList.forEach(i?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(i,n,r){const p=(i-1)*n;return`Showing ${p+1}\u2013${Math.min(p+n-1,r-1)+1} of ${r} results`}getamountWiseSale(){this.reportService.getTimeWiseSale(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(i=>{console.log(i),this.amountWiseSale=i,this.amountWiseSaleList=i})}oncheckAccount(i){console.log(i),this.dataId=i,this.amountWiseSaleform.patchValue({user_id:this.dataId}),console.warn(this.amountWiseSaleform.value),this?.getamountWiseSale()}getSelectedAmountWiseSaleDates(){console.log(this.amountWiseSaleform.value);const i=this.datepipe.transform(this.amountWiseSaleform.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.amountWiseSaleform.value.end,"yyyy-MM-dd");console.log(i),console.log(n),this.startDate=i,this.endDate=n,this.getamountWiseSale()}generatePDFAgain(){const i=new T.default,p=`Date Range From: ${this.startDate} - ${this.endDate}`,h=`User: ${this.userName}`;i.setFontSize(12),i.setTextColor(33,43,54),i.text("PV",86,5),i.text("Time Wise Sale Report",82,10),i.text(h,10,18),i.text(p,10,22),i.text("",10,25);const f=[];let v=1;this.amountWiseSaleList.forEach(d=>{console.warn(d);const C=d.date,st=d.total_sale;let U=!0;d.time_wise_data.forEach((Z,ht)=>{console.log(Z),f.push([U?v:"",this.formatDate(U?C:""),U?st:"",Z.start_time,Z.end_time,Z[" total_sale"]]),U=!1}),v++}),e()(i,{head:[["#","Date","Total Sale","Start Time","End Time","Total Sale"]],body:f,theme:"grid",startY:32,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),i.save("Time_Wise_Sale.pdf")}getVisibleDataFromTable(){const i=[],n=document.getElementById("mytable");if(n){const r=n.querySelector("thead tr");if(r){const h=[];r.querySelectorAll("th").forEach(m=>{const f=m.textContent?.trim();f&&"Is Active"!==f&&"Action"!==f&&h.push(f)}),i.push(h)}n.querySelectorAll("tbody tr").forEach(h=>{const m=[];h.querySelectorAll("td").forEach(f=>{const v=f.textContent?.trim();v&&m.push(v)}),i.push(m)})}return i}exportToExcel(){const i=this.getVisibleDataFromTable(),n=c.P6.aoa_to_sheet(i),r=c.P6.book_new();c.P6.book_append_sheet(r,n,"Sheet1");const p=c.cW(r,{bookType:"xlsx",type:"array"}),h=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,w.saveAs)(h,"timeWiseSale.xlsx")}printTable(){const i=document.getElementById("mytable");if(!i)return void console.error("Table element with ID 'mytable' not found.");const r=document.querySelector(".titl");if(!r)return void console.error("Title element with class 'titl' not found.");const p=r.outerHTML,m=i.cloneNode(!0).outerHTML,v="<style>.spaced-title { margin-top: 80px; }</style>"+p.replace("titl","spaced-title")+m,d=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=v,window.print(),document.body.innerHTML=d}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.amountWiseSaleList?.length)}getBranch(){this.reportService.getBranch().subscribe(i=>{this.branchList=i,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(i=>i.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(i,n){if(n)console.log(i),this.selectData.push(i),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const r=this.selectData.findIndex(p=>p==i);console.log(r),-1!==r&&this.selectData.splice(r,1),this.ngOnInit(),console.log(this.selectData)}}}return l.\u0275fac=function(i){return new(i||l)(t.Y36(x.F0),t.Y36(g.qu),t.Y36(S._W),t.Y36(L.p),t.Y36(B.x),t.Y36(I.J),t.Y36(_.uU),t.Y36(N.r),t.Y36(J.R))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-time-wise-sale"]],decls:87,vars:13,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[2,"width","15%"],[2,"width","20%"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"],[2,"vertical-align","text-top"],["colspan","5"],[1,"table"],[2,"width","25%"],["colspan","10"],[1,"text-center"]],template:function(i,n){if(1&i){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5," Time Wise Sale"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage Your Time Wise Sale "),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,R,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return n.getSelectedAmountWiseSaleDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return n.getSelectedAmountWiseSaleDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()()()()(),t.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(36,"img",26),t.qZA()(),t.TgZ(37,"li")(38,"a",27),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(39,"img",28),t.qZA()(),t.TgZ(40,"li")(41,"a",29),t.NdJ("click",function(){return n.printTable()}),t._UZ(42,"img",30),t.qZA()()()()(),t.TgZ(43,"div",31)(44,"table",32)(45,"thead")(46,"tr")(47,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(48,"#"),t._UZ(49,"i",34),t.qZA(),t.TgZ(50,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(51,"Date"),t._UZ(52,"i",34),t.qZA(),t.TgZ(53,"th",33),t.NdJ("click",function(){return n.sort("id")}),t._uU(54,"Total Sale "),t._UZ(55,"i",34),t.qZA(),t.TgZ(56,"th",35),t._uU(57,"Start Time"),t.qZA(),t.TgZ(58,"th",36),t._uU(59,"End Time"),t.qZA(),t.TgZ(60,"th",36),t._uU(61,"Total Sale (Time Wise)"),t.qZA()()(),t.YNc(62,z,4,11,"tbody",37),t.YNc(63,j,5,0,"tbody",37),t.qZA(),t.TgZ(64,"div",6)(65,"div",38)(66,"div",39),t._uU(67," Show per page "),t.TgZ(68,"select",40,41),t.NdJ("ngModelChange",function(h){return n.itemsPerPage=h})("change",function(){t.CHM(r);const h=t.MAs(69);return t.KtG(n.changePg(h.value))}),t.TgZ(70,"option",42),t._uU(71,"10"),t.qZA(),t.TgZ(72,"option",43),t._uU(73,"20"),t.qZA(),t.TgZ(74,"option",44),t._uU(75,"30"),t.qZA(),t.TgZ(76,"option",45),t._uU(77,"50"),t.qZA(),t.TgZ(78,"option",46),t._uU(79,"100"),t.qZA(),t.TgZ(80,"option",47),t._uU(81,"All"),t.qZA()()()(),t.TgZ(82,"div",48)(83,"div",49)(84,"pagination-controls",50),t.NdJ("pageChange",function(h){return n.p=h}),t.qZA(),t.TgZ(85,"div",51),t._uU(86),t.qZA()()()()()()()()()}if(2&i){const r=t.MAs(31);t.xp6(11),t.Q6J("ngIf",n.isAdmin),t.xp6(5),t.Q6J("formGroup",n.amountWiseSaleform),t.xp6(7),t.Q6J("formGroup",n.amountWiseSaleform)("rangePicker",r)("min",n.minDate)("max",n.maxDate),t.xp6(6),t.Q6J("for",r),t.xp6(33),t.Q6J("ngIf",(null==n.amountWiseSaleList?null:n.amountWiseSaleList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.amountWiseSaleList?null:n.amountWiseSaleList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq(" Showing ",n.itemsPerPage," to ",null==n.amountWiseSaleList?null:n.amountWiseSaleList.length," of ",n.p," entries ")}},dependencies:[_.sg,_.O5,g._Y,g.YN,g.Kr,g.Fj,g.EJ,g.JJ,g.JL,g.On,g.sg,g.u,A.LS,P.KE,P.R9,y.nW,y.wx,y.zY,y.By,y._g,_.uU,A._s,E.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),l})()}];let K=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[x.Bz.forChild(V),x.Bz]}),l})();var G=o(47957),X=o(44144),tt=o(3056),et=o(87078),D=o(86323),M=o(92642),it=o(3238),at=o(95113),nt=o(64155),rt=o(6205),$=o(8468);const lt={User:M.n5m,UserCheck:M.uS3,FileText:M.acj,File:M.$BE};let ot=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[_.uU],imports:[_.ez,K,$.I,g.u5,g.UX,G.Bb,P.lN,X.c,tt.ZQ,et.T,y.FA,P.lN,it.XK,at.LD,nt.vQ,$.I,rt.X,D.p.pick(lt),D.p]}),l})()}}]);