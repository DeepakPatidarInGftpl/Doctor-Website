"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8915],{53506:($,b,o)=>{o.d(b,{x:()=>S});var v=o(92340),x=o(94650),h=o(80529);let S=(()=>{class y{constructor(i){this.http=i,this.apiUrl=`${v.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(i){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+i)}getPurchaseFY(i,n){console.log(n,"branch"),console.log(n.length,"branch");let c=this.apiUrl+"/pv-api/purchase_order/";const p=[];if(i&&p.push(`financial_year=${i}`),n&&n.length>0){const d=JSON.stringify(n);console.log(d),console.log(d?.length),p.push(`branch=${d}`)}return p.length>0&&(c+="?"+p.join("&")),this.http.get(c)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(i){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",i)}getPurchaseById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}PurchaseIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,n)}updatePurchase(i,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,i)}deletePurchase(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}searchProduct(i){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+i)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(i,n){console.log(n,"branch"),console.log(n.length,"branch");let c=this.apiUrl+"/pv-api/material_inward/";const p=[];if(i&&p.push(`financial_year=${i}`),n&&n.length>0){const d=JSON.stringify(n);console.log(d),console.log(d?.length),p.push(`branch=${d}`)}return p.length>0&&(c+="?"+p.join("&")),this.http.get(c)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(i){return this.http.post(this.apiUrl+"/pv-api/material_inward/",i)}getMaterialById(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}MaterialIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,n)}updateMaterial(i,n){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,i)}deleteMaterial(i){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getPurchaseBillFY(i,n){console.log(n,"branch"),console.log(n.length,"branch");let c=this.apiUrl+"/pv-api/purchase_bill/";const p=[];if(i&&p.push(`financial_year=${i}`),n&&n.length>0){const d=JSON.stringify(n);console.log(d),console.log(d?.length),p.push(`branch=${d}`)}return p.length>0&&(c+="?"+p.join("&")),this.http.get(c)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(i){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",i)}getPurchaseBillById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}PurchaseBillIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,n)}updatePurchaseBill(i,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,i)}deletePurchaseBill(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getDebitNotes(i,n){console.log(n,"branch"),console.log(n.length,"branch");let c=this.apiUrl+"/pv-api/debit_note/";const p=[];if(i&&p.push(`financial_year=${i}`),n&&n.length>0){const d=JSON.stringify(n);console.log(d),console.log(d?.length),p.push(`branch=${d}`)}return p.length>0&&(c+="?"+p.join("&")),this.http.get(c)}addDebitNotes(i){return this.http.post(this.apiUrl+"/pv-api/debit_note/",i)}getDebitNotesById(i){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}DebitNotesIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,n)}updateDebitNotes(i,n){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,i)}deleteDebitNotes(i){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}getSearchProductById(i){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${i}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(i,n){console.log(n,"branch"),console.log(n.length,"branch");let c=this.apiUrl+"/pv-api/purchase_return/";const p=[];if(i&&p.push(`financial_year=${i}`),n&&n.length>0){const d=JSON.stringify(n);console.log(d),console.log(d?.length),p.push(`branch=${d}`)}return p.length>0&&(c+="?"+p.join("&")),this.http.get(c)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(i){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",i)}getPurchaseReturnById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}PurchaseReturnIsActive(i,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,n)}updatePurchaseReturn(i,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,i)}deletePurchaseReturn(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}filterVariant(i,n,c,p){let d=this.apiUrl+"/pv-api/purchase_product_filter/";const t=[];return i&&t.push(`supplier=${i}`),n&&t.push(`category=${n}`),c&&t.push(`subcategory=${c}`),p&&t.push(`search=${p}`),t.length>0&&(d+="?"+t.join("&")),this.http.get(d)}}return y.\u0275fac=function(i){return new(i||y)(x.LFG(h.eN))},y.\u0275prov=x.Yz7({token:y,factory:y.\u0275fac,providedIn:"root"}),y})()},78915:($,b,o)=>{o.r(b),o.d(b,{OutstandingAnalysisModule:()=>ct});var v=o(36895),x=o(89299),h=o(24006),S=o(68675),y=o(54004),U=o(78372),i=o(96166),n=o(12983),c=o.n(n),p=o(80574),d=o(94327),t=o(94650),N=o(97185),I=o(71071),B=o(53506),J=o(42917),F=o(87719),W=o(43443),P=o(47957),M=o(3238),O=o(59549),w=o(44144),A=o(99602),D=o(54333),Y=o(54040);function E(r,g){if(1&r){const e=t.EpF();t.TgZ(0,"a",63)(1,"input",64,65),t.NdJ("change",function(a){const u=t.CHM(e).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(u.id,a.target.checked))}),t.qZA(),t.TgZ(3,"label",66),t.NdJ("click",function(a){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onLabelClick(a))}),t._uU(4),t.qZA()()}if(2&r){const e=g.$implicit,s=g.index,a=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",a.selectData.includes(e.id))("id","checkboxCat-"+s),t.xp6(2),t.Q6J("for","checkboxCat-"+s),t.xp6(1),t.Oqu(e.title)}}function q(r,g){if(1&r&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&r){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const R=function(){return{standalone:!0}};function k(r,g){if(1&r){const e=t.EpF();t.TgZ(0,"div",56)(1,"div",57)(2,"button",58),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",59)(5,"li")(6,"input",60),t.NdJ("ngModelChange",function(a){t.CHM(e);const l=t.oxw();return t.KtG(l.searchBranch=a)})("ngModelChange",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,E,5,5,"a",61),t.qZA()()(),t.TgZ(9,"div",62),t.YNc(10,q,2,1,"span",41),t.qZA()()}if(2&r){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,R)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function Q(r,g){if(1&r){const e=t.EpF();t.TgZ(0,"mat-option",68),t.NdJ("onSelectionChange",function(){t.CHM(e);const a=t.oxw().$implicit,l=t.oxw();return t.KtG(l.selectUser(null==a?null:a.id))}),t._uU(1),t.qZA()}if(2&r){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.name)+" "+(null==e?null:e.username)),t.xp6(1),t.hij(" ",(null==e?null:e.name)+" ("+(null==e?null:e.username)+")"," ")}}function z(r,g){if(1&r&&(t.ynx(0),t.YNc(1,Q,2,2,"mat-option",67),t.BQk()),2&r){const e=g.$implicit;t.xp6(1),t.Q6J("ngIf",!0===e.is_active)}}const H=function(r){return{"font-size":r}};function j(r,g){if(1&r&&(t.TgZ(0,"div",69)(1,"div",70)(2,"div",71)(3,"div",72)(4,"h4",73),t._uU(5),t.ALo(6,"number"),t.qZA(),t.TgZ(7,"h5"),t._uU(8,"Total Amount Receivable"),t.qZA()()()()()),2&r){const e=t.oxw();let s;t.xp6(4),t.Q6J("ngStyle",t.VKq(5,H,(null==e.customerWiseSaleList||null==e.customerWiseSaleList.Total_Amount_Receivable||null==(s=e.customerWiseSaleList.Total_Amount_Receivable.toString())?null:s.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(6,2,null==e.customerWiseSaleList?null:e.customerWiseSaleList.Total_Amount_Receivable,"1.2-2"),"")}}function K(r,g){if(1&r&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA()()),2&r){const e=g.$implicit,s=g.index;t.xp6(2),t.Oqu(s+1+"."),t.xp6(2),t.Oqu(e.customer_bill_no),t.xp6(2),t.Oqu(e.bill_date),t.xp6(2),t.Oqu(e.due_date),t.xp6(2),t.Oqu(e.pending_amount),t.xp6(2),t.Oqu(e.note)}}const V=function(r,g){return{itemsPerPage:r,currentPage:g}};function G(r,g){if(1&r&&(t.TgZ(0,"tbody"),t.YNc(1,K,13,6,"tr",28),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&r){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.customerWiseSaleList,e.key,e.reverse),t.WLB(8,V,e.itemsPerPage,e.p)))}}function X(r,g){1&r&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",74)(3,"p",75),t._uU(4,"Data not available"),t.qZA()()()())}const tt=[{path:"",component:(()=>{class r{constructor(e,s,a,l,u,m,_,C,f){this.router=e,this.fb=s,this.toastr=a,this.transactionService=l,this.purchaseService=u,this.cs=m,this.datepipe=_,this.reportService=C,this.commonService=f,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new h.NI(""),this.userControl=new h.NI,this.isAdmin=!1,this.users=[],this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let f=localStorage.getItem("financialYear");console.warn(JSON.parse(f));let Z=JSON.parse(f);this.fyID=Z}this.financialYear=localStorage.getItem("financialYear");const{minDate:e,maxDate:s}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=e,this.maxDate=s,this.cs.userDetails$.subscribe(f=>{this.isAdmin="admin"==f.role,this.getBranch()}),this.cs.userDetails$.subscribe(f=>{this.userDetails=f,console.log(f),this.UserName=f?.username});const a=new Date,m=(a.getMonth(),a.getFullYear(),new Date(a));m.setDate(a.getDate()-14);const _=this.formatDate(m),C=this.formatDate(a);this.customerWiseSaleForm=new h.cw({start:new h.NI(_,this.commonService.dateRangeValidator(this.financialYear)),end:new h.NI(C,this.commonService.dateRangeValidator(this.financialYear)),user_id:new h.NI}),this.commonService.validateAndClearDates(this.customerWiseSaleForm,this.minDate,this.maxDate),this.startDate=this.customerWiseSaleForm.value?.start,this.endDate=this.customerWiseSaleForm.value?.end,this.customerWiseSaleUserId=this.customerWiseSaleForm.value?.user_id,this.getCustomerWiseSale(),this.filteredusers=this.userControl.valueChanges.pipe((0,S.O)(""),(0,y.U)(f=>this._filter(f,!0))),this.userControl.valueChanges.subscribe(f=>{f.length>=3?this.getUser(f):(this.users=[],this.filteredusers=this.userControl.valueChanges.pipe((0,S.O)(""),(0,y.U)(Z=>this._filter(Z,!0))))})}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e,s){const a="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),l=this.users.filter(s?u=>u?.name?.toLowerCase().includes(a)||u.username.toLowerCase().includes(a):u=>!u?.name?.toLowerCase().includes(a)||u.username.toLowerCase().includes(a));return!s&&0===l.length&&l.push({name:"No data found"}),l}getUser(e){this.reportService.getUser(e).pipe((0,U.b)(2e3)).subscribe(s=>{this.users=s?.data,this.filteredusers=this.userControl.valueChanges.pipe((0,S.O)(""),(0,y.U)(a=>this._filter(a,!0)))})}search(){if(""===this.titlee)this.getCustomerWiseSale();else{const e=this.titlee.toLocaleLowerCase();this.customerWiseSaleList=this.customerWiseSaleList?.filter(s=>{const a=s?.user?.party_name.toLocaleLowerCase(),l=s?.receipt_voucher_no.toLocaleLowerCase()||"";return!(!a.includes(e)&&!l.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?s=>{s.isSelected=!1}:s=>{s.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,s,a){const l=(e-1)*s;return`Showing ${l+1}\u2013${Math.min(l+s-1,a-1)+1} of ${a} results`}getCustomerWiseSale(){this.reportService.getOutStandingAnalysis(this.startDate,this.endDate,this.customerWiseSaleUserId,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.customerWiseSale=e,this.customerWiseSaleList=e?.salebill})}selectUser(e){this.dataId=e,this.customerWiseSaleForm.patchValue({user_id:this.dataId}),console.warn(this.customerWiseSaleForm.value),this.customerWiseSaleUserId=this.customerWiseSaleForm.value?.user_id,this?.getCustomerWiseSale()}getSelectedCustomerWiseSaleDates(){console.log(this.customerWiseSaleForm.value);const e=this.datepipe.transform(this.customerWiseSaleForm.value.start,"yyyy-MM-dd"),s=this.datepipe.transform(this.customerWiseSaleForm.value.end,"yyyy-MM-dd");console.log(e),console.log(s),this.startDate=e,this.endDate=s,this?.getCustomerWiseSale()}generatePDFAgain(){const e=new i.default,l=`Date Range From: ${this.startDate} - ${this.endDate}`,u=`User: ${this.UserName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("pv",86,5),e.text(" Outstanding Analysis Report",82,10),e.text(u,10,18),e.text(l,10,22),e.text("",10,25),c()(e,{head:[["#","Customer Bill No."," Bill Date","Due Date","Pending Amount","Note"]],body:this.customerWiseSaleList.map((m,_)=>[_+1,m.customer_bill_no,m.bill_date,m.due_date,m.pending_amount,m.note]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Outstanding _Analysis .pdf")}getVisibleDataFromTable(){const e=[],s=document.getElementById("mytable");if(s){const a=s.querySelector("thead tr");if(a){const u=[];a.querySelectorAll("th").forEach(m=>{const _=m.textContent?.trim();_&&"Is Active"!==_&&"Action"!==_&&u.push(_)}),e.push(u)}s.querySelectorAll("tbody tr").forEach(u=>{const m=[];u.querySelectorAll("td").forEach(_=>{const C=_.textContent?.trim();C&&m.push(C)}),e.push(m)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),s=p.P6.aoa_to_sheet(e),a=p.P6.book_new();p.P6.book_append_sheet(a,s,"Sheet1");const l=p.cW(a,{bookType:"xlsx",type:"array"}),u=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,d.saveAs)(u,"outstandinganalysis.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const a=document.querySelector(".titl");if(!a)return void console.error("Title element with class 'titl' not found.");const l=a.outerHTML,m=e.cloneNode(!0).outerHTML,C="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+m,f=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=C,window.print(),document.body.innerHTML=f}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.customerWiseSaleList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,s){if(s)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const a=this.selectData.findIndex(l=>l==e);console.log(a),-1!==a&&this.selectData.splice(a,1),this.ngOnInit(),console.log(this.selectData)}}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(x.F0),t.Y36(h.qu),t.Y36(N._W),t.Y36(I.p),t.Y36(B.x),t.Y36(J.J),t.Y36(v.uU),t.Y36(F.r),t.Y36(W.R))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-outstanding-analysis"]],decls:100,vars:19,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-5","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-5","col-md-6","col-12"],[1,"form-group"],["type","text","placeholder","Search Name/Username","aria-label","customer","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[1,"row","container"],[1,"col-lg-2","col-sm-4","col-12","d-flex"],[1,"dash-count","das3",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],["colspan","10"],[1,"text-center"]],template:function(e,s){if(1&e){const a=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Outstanding Analysis"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Outstanding Analysis "),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,k,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return s.getSelectedCustomerWiseSaleDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return s.getSelectedCustomerWiseSaleDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",24)(33,"div",25)(34,"label"),t._uU(35,"User Name"),t.qZA(),t._UZ(36,"input",26),t.TgZ(37,"mat-autocomplete",null,27),t.YNc(39,z,2,1,"ng-container",28),t.ALo(40,"async"),t.qZA()()()()()(),t.TgZ(41,"div",29)(42,"ul")(43,"li")(44,"a",30),t.NdJ("click",function(){return s.generatePDFAgain()}),t._UZ(45,"img",31),t.qZA()(),t.TgZ(46,"li")(47,"a",32),t.NdJ("click",function(){return s.exportToExcel()}),t._UZ(48,"img",33),t.qZA()(),t.TgZ(49,"li")(50,"a",34),t.NdJ("click",function(){return s.printTable()}),t._UZ(51,"img",35),t.qZA()()()()(),t.YNc(52,j,9,7,"div",36),t.TgZ(53,"div",37)(54,"table",38)(55,"thead")(56,"tr")(57,"th",39),t.NdJ("click",function(){return s.sort("id")}),t._uU(58,"#"),t._UZ(59,"i",40),t.qZA(),t.TgZ(60,"th",39),t.NdJ("click",function(){return s.sort("id")}),t._uU(61,"Customer Bill No."),t._UZ(62,"i",40),t.qZA(),t.TgZ(63,"th",39),t.NdJ("click",function(){return s.sort("id")}),t._uU(64,"Bill Date "),t._UZ(65,"i",40),t.qZA(),t.TgZ(66,"th",39),t.NdJ("click",function(){return s.sort("id")}),t._uU(67,"Due Date "),t._UZ(68,"i",40),t.qZA(),t.TgZ(69,"th",39),t.NdJ("click",function(){return s.sort("id")}),t._uU(70,"Pending Amount "),t._UZ(71,"i",40),t.qZA(),t.TgZ(72,"th",39),t.NdJ("click",function(){return s.sort("id")}),t._uU(73,"Note "),t._UZ(74,"i",40),t.qZA()()(),t.YNc(75,G,4,11,"tbody",41),t.YNc(76,X,5,0,"tbody",41),t.qZA(),t.TgZ(77,"div",6)(78,"div",42)(79,"div",43),t._uU(80," Show per page "),t.TgZ(81,"select",44,45),t.NdJ("ngModelChange",function(u){return s.itemsPerPage=u})("change",function(){t.CHM(a);const u=t.MAs(82);return t.KtG(s.changePg(u.value))}),t.TgZ(83,"option",46),t._uU(84,"10"),t.qZA(),t.TgZ(85,"option",47),t._uU(86,"20"),t.qZA(),t.TgZ(87,"option",48),t._uU(88,"30"),t.qZA(),t.TgZ(89,"option",49),t._uU(90,"50"),t.qZA(),t.TgZ(91,"option",50),t._uU(92,"100"),t.qZA(),t.TgZ(93,"option",51),t._uU(94,"All"),t.qZA()()()(),t.TgZ(95,"div",52)(96,"div",53)(97,"pagination-controls",54),t.NdJ("pageChange",function(u){return s.p=u}),t.qZA(),t.TgZ(98,"div",55),t._uU(99),t.qZA()()()()()()()()()}if(2&e){const a=t.MAs(31),l=t.MAs(38);t.xp6(11),t.Q6J("ngIf",s.isAdmin),t.xp6(5),t.Q6J("formGroup",s.customerWiseSaleForm),t.xp6(7),t.Q6J("formGroup",s.customerWiseSaleForm)("rangePicker",a)("min",s.minDate)("max",s.maxDate),t.xp6(6),t.Q6J("for",a),t.xp6(7),t.Q6J("formControl",s.userControl)("matAutocomplete",l),t.xp6(3),t.Q6J("ngForOf",t.lcZ(40,17,s.filteredusers)),t.xp6(13),t.Q6J("ngIf",s.customerWiseSaleList),t.xp6(23),t.Q6J("ngIf",(null==s.customerWiseSaleList?null:s.customerWiseSaleList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==s.customerWiseSaleList?null:s.customerWiseSaleList.length)),t.xp6(5),t.Q6J("ngModel",s.itemsPerPage),t.xp6(18),t.lnq(" Showing ",s.itemsPerPage," to ",null==s.customerWiseSaleList?null:s.customerWiseSaleList.length," of ",s.p," entries ")}},dependencies:[v.sg,v.O5,v.PC,h._Y,h.YN,h.Kr,h.Fj,h.EJ,h.JJ,h.JL,h.On,h.oH,h.sg,h.u,P.XC,P.ZL,M.ey,O.KE,O.R9,w.Nt,A.nW,A.wx,A.zY,A.By,A._g,D.LS,v.Ov,v.JJ,D._s,Y.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;letter-spacing:3px;font-weight:700;padding-left:30px}.head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:3px;font-weight:700}.head6[_ngcontent-%COMP%]{font-size:18px;padding-left:10%}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),r})()}];let et=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[x.Bz.forChild(tt),x.Bz]}),r})();var it=o(3056),nt=o(87078),L=o(86323),T=o(92642),st=o(95113),at=o(64155),rt=o(6205),lt=o(8468);const ot={User:T.n5m,UserCheck:T.uS3,FileText:T.acj,File:T.$BE};let ct=(()=>{class r{}return r.\u0275fac=function(e){return new(e||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({providers:[v.uU],imports:[v.ez,et,h.u5,h.UX,P.Bb,O.lN,w.c,it.ZQ,nt.T,A.FA,O.lN,M.XK,st.LD,at.vQ,lt.I,rt.X,L.p.pick(ot),L.p]}),r})()}}]);