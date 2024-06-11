"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[167],{53506:(O,C,s)=>{s.d(C,{x:()=>U});var S=s(92340),x=s(94650),g=s(80529);let U=(()=>{class v{constructor(i){this.http=i,this.apiUrl=`${S.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(i){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+i)}getPurchaseFY(i,n){console.log(n,"branch"),console.log(n.length,"branch");let l=this.apiUrl+"/pv-api/purchase_order/";const p=[];if(i&&p.push(`financial_year=${i}`),n&&n.length>0){const t=JSON.stringify(n);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(l+="?"+p.join("&")),this.http.get(l)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(i){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",i)}getPurchaseById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}PurchaseIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,n)}updatePurchase(i,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,i)}deletePurchase(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}searchProduct(i){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+i)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(i,n){console.log(n,"branch"),console.log(n.length,"branch");let l=this.apiUrl+"/pv-api/material_inward/";const p=[];if(i&&p.push(`financial_year=${i}`),n&&n.length>0){const t=JSON.stringify(n);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(l+="?"+p.join("&")),this.http.get(l)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(i){return this.http.post(this.apiUrl+"/pv-api/material_inward/",i)}getMaterialById(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}MaterialIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,n)}updateMaterial(i,n){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,i)}deleteMaterial(i){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getPurchaseBillFY(i,n){console.log(n,"branch"),console.log(n.length,"branch");let l=this.apiUrl+"/pv-api/purchase_bill/";const p=[];if(i&&p.push(`financial_year=${i}`),n&&n.length>0){const t=JSON.stringify(n);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(l+="?"+p.join("&")),this.http.get(l)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(i){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",i)}getPurchaseBillById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}PurchaseBillIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,n)}updatePurchaseBill(i,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,i)}deletePurchaseBill(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getDebitNotes(i,n){console.log(n,"branch"),console.log(n.length,"branch");let l=this.apiUrl+"/pv-api/debit_note/";const p=[];if(i&&p.push(`financial_year=${i}`),n&&n.length>0){const t=JSON.stringify(n);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(l+="?"+p.join("&")),this.http.get(l)}addDebitNotes(i){return this.http.post(this.apiUrl+"/pv-api/debit_note/",i)}getDebitNotesById(i){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}DebitNotesIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,n)}updateDebitNotes(i,n){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,i)}deleteDebitNotes(i){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}getSearchProductById(i){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${i}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(i,n){console.log(n,"branch"),console.log(n.length,"branch");let l=this.apiUrl+"/pv-api/purchase_return/";const p=[];if(i&&p.push(`financial_year=${i}`),n&&n.length>0){const t=JSON.stringify(n);console.log(t),console.log(t?.length),p.push(`branch=${t}`)}return p.length>0&&(l+="?"+p.join("&")),this.http.get(l)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(i){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",i)}getPurchaseReturnById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}PurchaseReturnIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,n)}updatePurchaseReturn(i,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,i)}deletePurchaseReturn(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}filterVariant(i,n,l,p){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const _=[];return i&&_.push(`supplier=${i}`),n&&_.push(`category=${n}`),l&&_.push(`subcategory=${l}`),p&&_.push(`search=${p}`),_.length>0&&(t+="?"+_.join("&")),this.http.get(t)}}return v.\u0275fac=function(i){return new(i||v)(x.LFG(g.eN))},v.\u0275prov=x.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},60167:(O,C,s)=>{s.r(C),s.d(C,{AmountWiseSaleModule:()=>ot});var S=s(36895),x=s(89299),g=s(24006),U=s(94327),v=s(96166),Z=s(12983),i=s.n(Z),n=s(68675),l=s(54004),p=s(80574),t=s(94650),_=s(97185),D=s(71071),L=s(53506),B=s(42917),N=s(87719),w=s(54333),b=s(59549),y=s(99602),I=s(54040);function J(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"a",59)(1,"input",60,61),t.NdJ("change",function(r){const h=t.CHM(e).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(h.id,r.target.checked))}),t.qZA(),t.TgZ(3,"label",62),t.NdJ("click",function(r){t.CHM(e);const c=t.oxw(2);return t.KtG(c.onLabelClick(r))}),t._uU(4),t.qZA()()}if(2&o){const e=d.$implicit,a=d.index,r=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",r.selectData.includes(e.id))("id","checkboxCat-"+a),t.xp6(2),t.Q6J("for","checkboxCat-"+a),t.xp6(1),t.Oqu(e.title)}}function E(o,d){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const F=function(){return{standalone:!0}};function q(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"div",52)(1,"div",53)(2,"button",54),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",55)(5,"li")(6,"input",56),t.NdJ("ngModelChange",function(r){t.CHM(e);const c=t.oxw();return t.KtG(c.searchBranch=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,J,5,5,"a",57),t.qZA()()(),t.TgZ(9,"div",58),t.YNc(10,E,2,1,"span",37),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,F)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function Y(o,d){if(1&o&&(t.TgZ(0,"tr")(1,"td",35),t._uU(2),t.qZA(),t.TgZ(3,"td",36),t._uU(4),t.qZA(),t.TgZ(5,"td",36),t._uU(6),t.qZA()()),2&o){const e=d.$implicit;t.xp6(2),t.Oqu(e.start_amount),t.xp6(2),t.Oqu(e.end_amount),t.xp6(2),t.Oqu(e[" total"])}}function R(o,d){if(1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td",64),t._uU(4),t.qZA(),t.TgZ(5,"td",64),t._uU(6),t.qZA(),t.TgZ(7,"td",65)(8,"table",66)(9,"tbody"),t.YNc(10,Y,7,3,"tr",63),t.qZA()()()()),2&o){const e=d.$implicit,a=d.index;t.xp6(2),t.Oqu(a+1+"."),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.total_sale),t.xp6(4),t.Q6J("ngForOf",null==e?null:e.amount_wise_data)}}const k=function(o,d){return{itemsPerPage:o,currentPage:d}};function H(o,d){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,R,11,4,"tr",63),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.amountWiseSaleList,e.key,e.reverse),t.WLB(8,k,e.itemsPerPage,e.p)))}}function Q(o,d){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",67)(3,"p",68),t._uU(4,"Data not available"),t.qZA()()()())}const z=[{path:"",component:(()=>{class o{constructor(e,a,r,c,h,m,u,f){this.router=e,this.fb=a,this.toastr=r,this.transactionService=c,this.purchaseService=h,this.cs=m,this.datepipe=u,this.reportService=f,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new g.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let u=localStorage.getItem("financialYear");console.warn(JSON.parse(u));let f=JSON.parse(u);this.fyID=f}this.cs.userDetails$.subscribe(u=>{this.isAdmin="admin"==u.role,this.getBranch()}),this.cs.userDetails$.subscribe(u=>{this.userDetails=u,console.log(u),this.userName=u?.username});const e=new Date,c=(e.getMonth(),e.getFullYear(),new Date(e));c.setDate(e.getDate()-14);const h=this.formatDate(c),m=this.formatDate(e);this.amountWiseSaleform=new g.cw({start:new g.NI(h),end:new g.NI(m)}),this.startDate=this.amountWiseSaleform.value?.start,this.endDate=this.amountWiseSaleform.value?.end,this.getamountWiseSale(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,n.O)(""),(0,l.U)(u=>{const f="string"==typeof u?u:u?.detail?.name;return f?this._filter(f):this.suppliers.slice()}))}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e){const a=e?e.toLowerCase():"";return console.log(a),this.suppliers.filter(r=>r?.detail?.name.toLowerCase().includes(a)||r?.detail?.company_name?.toLowerCase().includes(a)||r?.account?.account_id?.toLowerCase().includes(a))}displayFn(e){return e&&e?.detail?.company_name?e?.detail?.company_name:""}search(){if(""===this.titlee)this.getamountWiseSale();else{const e=this.titlee.toLocaleLowerCase();this.amountWiseSaleList=this.amountWiseSaleList.filter(a=>{const r=a?.user?.party_name.toLocaleLowerCase(),c=a?.payment_voucher_no.toLocaleLowerCase()||"";return!(!r.includes(e)&&!c.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,a,r){const c=(e-1)*a;return`Showing ${c+1}\u2013${Math.min(c+a-1,r-1)+1} of ${r} results`}getamountWiseSale(){this.reportService.getAmountWiseSale(this.startDate,this.endDate,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.amountWiseSale=e,this.amountWiseSaleList=e})}oncheckAccount(e){console.log(e),this.dataId=e,this.amountWiseSaleform.patchValue({user_id:this.dataId}),console.warn(this.amountWiseSaleform.value),this?.getamountWiseSale()}getSelectedAmountWiseSaleDates(){console.log(this.amountWiseSaleform.value);const e=this.datepipe.transform(this.amountWiseSaleform.value.start,"yyyy-MM-dd"),a=this.datepipe.transform(this.amountWiseSaleform.value.end,"yyyy-MM-dd");console.log(e),console.log(a),this.startDate=e,this.endDate=a,this.getamountWiseSale()}generatePDFAgain(){const e=new v.default,c=`Date Range From: ${this.startDate} - ${this.endDate}`,h=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Amount Wise Sale Report",82,10),e.text(h,10,18),e.text(c,10,22),e.text("",10,25);const u=[];let f=1;this.amountWiseSaleList.forEach(A=>{console.warn(A);const rt=A.date,lt=A.total_sale;let P=!0;A.amount_wise_data.forEach((M,pt)=>{console.log(M),u.push([P?f:"",P?rt:"",P?lt:"",M.start_amount,M.end_amount,M[" total"]]),P=!1}),f++}),i()(e,{head:[["#","Date","Total Sale","Start Amount","End Amount","Total"]],body:u,theme:"grid",startY:32,headStyles:{fillColor:[255,159,67],textColor:[255,255,255]}}),e.save("Amount_Wise_Sale.pdf")}getVisibleDataFromTable(){const e=[],a=document.getElementById("mytable");if(a){const r=a.querySelector("thead tr");if(r){const h=[];r.querySelectorAll("th").forEach(m=>{const u=m.textContent?.trim();u&&"Is Active"!==u&&"Action"!==u&&h.push(u)}),e.push(h)}a.querySelectorAll("tbody tr").forEach(h=>{const m=[];h.querySelectorAll("td").forEach(u=>{const f=u.textContent?.trim();f&&m.push(f)}),e.push(m)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),a=p.P6.aoa_to_sheet(e),r=p.P6.book_new();p.P6.book_append_sheet(r,a,"Sheet1");const c=p.cW(r,{bookType:"xlsx",type:"array"}),h=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,U.saveAs)(h,"amountWiseSale.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const r=document.querySelector(".titl");if(!r)return void console.error("Title element with class 'titl' not found.");const c=r.outerHTML,m=e.cloneNode(!0).outerHTML,f="<style>.spaced-title { margin-top: 80px; }</style>"+c.replace("titl","spaced-title")+m,A=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=f,window.print(),document.body.innerHTML=A}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.amountWiseSaleList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,a){if(a)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const r=this.selectData.findIndex(c=>c==e);console.log(r),-1!==r&&this.selectData.splice(r,1),this.ngOnInit(),console.log(this.selectData)}}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(x.F0),t.Y36(g.qu),t.Y36(_._W),t.Y36(D.p),t.Y36(L.x),t.Y36(B.J),t.Y36(S.uU),t.Y36(N.r))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-amount-wise-sale"]],decls:87,vars:11,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[2,"width","15%"],[2,"width","20%"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[4,"ngFor","ngForOf"],[2,"vertical-align","text-top"],["colspan","5"],[1,"table"],["colspan","10"],[1,"text-center"]],template:function(e,a){if(1&e){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Amount Wise Sale"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage Amount Wise Sale "),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,q,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return a.getSelectedAmountWiseSaleDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return a.getSelectedAmountWiseSaleDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()()()()(),t.TgZ(32,"div",24)(33,"ul")(34,"li")(35,"a",25),t.NdJ("click",function(){return a.generatePDFAgain()}),t._UZ(36,"img",26),t.qZA()(),t.TgZ(37,"li")(38,"a",27),t.NdJ("click",function(){return a.exportToExcel()}),t._UZ(39,"img",28),t.qZA()(),t.TgZ(40,"li")(41,"a",29),t.NdJ("click",function(){return a.printTable()}),t._UZ(42,"img",30),t.qZA()()()()(),t.TgZ(43,"div",31)(44,"table",32)(45,"thead")(46,"tr")(47,"th",33),t.NdJ("click",function(){return a.sort("id")}),t._uU(48,"#"),t._UZ(49,"i",34),t.qZA(),t.TgZ(50,"th",33),t.NdJ("click",function(){return a.sort("id")}),t._uU(51,"Date"),t._UZ(52,"i",34),t.qZA(),t.TgZ(53,"th",33),t.NdJ("click",function(){return a.sort("id")}),t._uU(54,"Total Sale "),t._UZ(55,"i",34),t.qZA(),t.TgZ(56,"th",35),t._uU(57,"Start Amount"),t.qZA(),t.TgZ(58,"th",36),t._uU(59,"End Amount"),t.qZA(),t.TgZ(60,"th",36),t._uU(61,"Total "),t.qZA()()(),t.YNc(62,H,4,11,"tbody",37),t.YNc(63,Q,5,0,"tbody",37),t.qZA(),t.TgZ(64,"div",6)(65,"div",38)(66,"div",39),t._uU(67," Show per page "),t.TgZ(68,"select",40,41),t.NdJ("ngModelChange",function(h){return a.itemsPerPage=h})("change",function(){t.CHM(r);const h=t.MAs(69);return t.KtG(a.changePg(h.value))}),t.TgZ(70,"option",42),t._uU(71,"10"),t.qZA(),t.TgZ(72,"option",43),t._uU(73,"20"),t.qZA(),t.TgZ(74,"option",44),t._uU(75,"30"),t.qZA(),t.TgZ(76,"option",45),t._uU(77,"50"),t.qZA(),t.TgZ(78,"option",46),t._uU(79,"100"),t.qZA(),t.TgZ(80,"option",47),t._uU(81,"All"),t.qZA()()()(),t.TgZ(82,"div",48)(83,"div",49)(84,"pagination-controls",50),t.NdJ("pageChange",function(h){return a.p=h}),t.qZA(),t.TgZ(85,"div",51),t._uU(86),t.qZA()()()()()()()()()}if(2&e){const r=t.MAs(31);t.xp6(11),t.Q6J("ngIf",a.isAdmin),t.xp6(5),t.Q6J("formGroup",a.amountWiseSaleform),t.xp6(7),t.Q6J("formGroup",a.amountWiseSaleform)("rangePicker",r),t.xp6(6),t.Q6J("for",r),t.xp6(33),t.Q6J("ngIf",(null==a.amountWiseSaleList?null:a.amountWiseSaleList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==a.amountWiseSaleList?null:a.amountWiseSaleList.length)),t.xp6(5),t.Q6J("ngModel",a.itemsPerPage),t.xp6(18),t.lnq(" Showing ",a.itemsPerPage," to ",null==a.amountWiseSaleList?null:a.amountWiseSaleList.length," of ",a.p," entries ")}},dependencies:[S.sg,S.O5,g._Y,g.YN,g.Kr,g.Fj,g.EJ,g.JJ,g.JL,g.On,g.sg,g.u,w.LS,b.KE,b.R9,y.nW,y.wx,y.zY,y.By,y._g,w._s,I.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})()}];let j=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[x.Bz.forChild(z),x.Bz]}),o})();var K=s(47957),G=s(44144),V=s(3056),X=s(87078),W=s(86323),T=s(92642),tt=s(3238),et=s(95113),it=s(64155),nt=s(6205),$=s(8468);const at={User:T.n5m,UserCheck:T.uS3,FileText:T.acj,File:T.$BE};let ot=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[S.uU],imports:[S.ez,j,$.I,g.u5,g.UX,K.Bb,b.lN,G.c,V.ZQ,X.T,y.FA,b.lN,tt.XK,et.LD,it.vQ,$.I,nt.X,W.p.pick(at),W.p]}),o})()}}]);