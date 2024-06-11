"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8915],{53506:(L,b,o)=>{o.d(b,{x:()=>A});var _=o(92340),C=o(94650),g=o(80529);let A=(()=>{class v{constructor(n){this.http=n,this.apiUrl=`${_.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(n){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+n)}getPurchaseFY(n,i){console.log(i,"branch"),console.log(i.length,"branch");let c=this.apiUrl+"/pv-api/purchase_order/";const p=[];if(n&&p.push(`financial_year=${n}`),i&&i.length>0){const h=JSON.stringify(i);console.log(h),console.log(h?.length),p.push(`branch=${h}`)}return p.length>0&&(c+="?"+p.join("&")),this.http.get(c)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(n){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",n)}getPurchaseById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`)}PurchaseIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,i)}updatePurchase(n,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,n)}deletePurchase(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`)}searchProduct(n){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+n)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(n,i){console.log(i,"branch"),console.log(i.length,"branch");let c=this.apiUrl+"/pv-api/material_inward/";const p=[];if(n&&p.push(`financial_year=${n}`),i&&i.length>0){const h=JSON.stringify(i);console.log(h),console.log(h?.length),p.push(`branch=${h}`)}return p.length>0&&(c+="?"+p.join("&")),this.http.get(c)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(n){return this.http.post(this.apiUrl+"/pv-api/material_inward/",n)}getMaterialById(n){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`)}MaterialIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,i)}updateMaterial(n,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,n)}deleteMaterial(n){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`)}getPurchaseBillFY(n,i){console.log(i,"branch"),console.log(i.length,"branch");let c=this.apiUrl+"/pv-api/purchase_bill/";const p=[];if(n&&p.push(`financial_year=${n}`),i&&i.length>0){const h=JSON.stringify(i);console.log(h),console.log(h?.length),p.push(`branch=${h}`)}return p.length>0&&(c+="?"+p.join("&")),this.http.get(c)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(n){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",n)}getPurchaseBillById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`)}PurchaseBillIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,i)}updatePurchaseBill(n,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,n)}deletePurchaseBill(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`)}getDebitNotes(n,i){console.log(i,"branch"),console.log(i.length,"branch");let c=this.apiUrl+"/pv-api/debit_note/";const p=[];if(n&&p.push(`financial_year=${n}`),i&&i.length>0){const h=JSON.stringify(i);console.log(h),console.log(h?.length),p.push(`branch=${h}`)}return p.length>0&&(c+="?"+p.join("&")),this.http.get(c)}addDebitNotes(n){return this.http.post(this.apiUrl+"/pv-api/debit_note/",n)}getDebitNotesById(n){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`)}DebitNotesIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,i)}updateDebitNotes(n,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,n)}deleteDebitNotes(n){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`)}getSearchProductById(n){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${n}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(n,i){console.log(i,"branch"),console.log(i.length,"branch");let c=this.apiUrl+"/pv-api/purchase_return/";const p=[];if(n&&p.push(`financial_year=${n}`),i&&i.length>0){const h=JSON.stringify(i);console.log(h),console.log(h?.length),p.push(`branch=${h}`)}return p.length>0&&(c+="?"+p.join("&")),this.http.get(c)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(n){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",n)}getPurchaseReturnById(n){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`)}PurchaseReturnIsActive(n,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,i)}updatePurchaseReturn(n,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,n)}deletePurchaseReturn(n){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`)}filterVariant(n,i,c,p){let h=this.apiUrl+"/pv-api/purchase_product_filter/";const t=[];return n&&t.push(`supplier=${n}`),i&&t.push(`category=${i}`),c&&t.push(`subcategory=${c}`),p&&t.push(`search=${p}`),t.length>0&&(h+="?"+t.join("&")),this.http.get(h)}}return v.\u0275fac=function(n){return new(n||v)(C.LFG(g.eN))},v.\u0275prov=C.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},78915:(L,b,o)=>{o.r(b),o.d(b,{OutstandingAnalysisModule:()=>rt});var _=o(36895),C=o(89299),g=o(24006),A=o(68675),v=o(54004),U=o(78372),n=o(96166),i=o(12983),c=o.n(i),p=o(80574),h=o(94327),t=o(94650),$=o(97185),D=o(71071),N=o(53506),B=o(42917),I=o(87719),S=o(47957),P=o(3238),O=o(59549),Z=o(44144),x=o(99602),M=o(54333),J=o(54040);function F(a,m){if(1&a){const e=t.EpF();t.TgZ(0,"a",63)(1,"input",64,65),t.NdJ("change",function(r){const u=t.CHM(e).$implicit,f=t.oxw(2);return t.KtG(f.SelectedBranch(u.id,r.target.checked))}),t.qZA(),t.TgZ(3,"label",66),t.NdJ("click",function(r){t.CHM(e);const l=t.oxw(2);return t.KtG(l.onLabelClick(r))}),t._uU(4),t.qZA()()}if(2&a){const e=m.$implicit,s=m.index,r=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",r.selectData.includes(e.id))("id","checkboxCat-"+s),t.xp6(2),t.Q6J("for","checkboxCat-"+s),t.xp6(1),t.Oqu(e.title)}}function W(a,m){if(1&a&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&a){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const q=function(){return{standalone:!0}};function E(a,m){if(1&a){const e=t.EpF();t.TgZ(0,"div",56)(1,"div",57)(2,"button",58),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",59)(5,"li")(6,"input",60),t.NdJ("ngModelChange",function(r){t.CHM(e);const l=t.oxw();return t.KtG(l.searchBranch=r)})("ngModelChange",function(){t.CHM(e);const r=t.oxw();return t.KtG(r.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,F,5,5,"a",61),t.qZA()()(),t.TgZ(9,"div",62),t.YNc(10,W,2,1,"span",41),t.qZA()()}if(2&a){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,q)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function R(a,m){if(1&a){const e=t.EpF();t.TgZ(0,"mat-option",68),t.NdJ("onSelectionChange",function(){t.CHM(e);const r=t.oxw().$implicit,l=t.oxw();return t.KtG(l.selectUser(null==r?null:r.id))}),t._uU(1),t.qZA()}if(2&a){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.name)+" "+(null==e?null:e.username)),t.xp6(1),t.hij(" ",(null==e?null:e.name)+" ("+(null==e?null:e.username)+")"," ")}}function Y(a,m){if(1&a&&(t.ynx(0),t.YNc(1,R,2,2,"mat-option",67),t.BQk()),2&a){const e=m.$implicit;t.xp6(1),t.Q6J("ngIf",!0===e.is_active)}}const k=function(a){return{"font-size":a}};function Q(a,m){if(1&a&&(t.TgZ(0,"div",69)(1,"div",70)(2,"div",71)(3,"div",72)(4,"h4",73),t._uU(5),t.ALo(6,"number"),t.qZA(),t.TgZ(7,"h5"),t._uU(8,"Total Amount Receivable"),t.qZA()()()()()),2&a){const e=t.oxw();let s;t.xp6(4),t.Q6J("ngStyle",t.VKq(5,k,(null==e.customerWiseSaleList||null==e.customerWiseSaleList.Total_Amount_Receivable||null==(s=e.customerWiseSaleList.Total_Amount_Receivable.toString())?null:s.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(6,2,null==e.customerWiseSaleList?null:e.customerWiseSaleList.Total_Amount_Receivable,"1.2-2"),"")}}function z(a,m){if(1&a&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA()()),2&a){const e=m.$implicit,s=m.index;t.xp6(2),t.Oqu(s+1+"."),t.xp6(2),t.Oqu(e.customer_bill_no),t.xp6(2),t.Oqu(e.bill_date),t.xp6(2),t.Oqu(e.due_date),t.xp6(2),t.Oqu(e.pending_amount),t.xp6(2),t.Oqu(e.note)}}const H=function(a,m){return{itemsPerPage:a,currentPage:m}};function j(a,m){if(1&a&&(t.TgZ(0,"tbody"),t.YNc(1,z,13,6,"tr",28),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&a){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.customerWiseSaleList,e.key,e.reverse),t.WLB(8,H,e.itemsPerPage,e.p)))}}function K(a,m){1&a&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",74)(3,"p",75),t._uU(4,"Data not available"),t.qZA()()()())}const G=[{path:"",component:(()=>{class a{constructor(e,s,r,l,u,f,d,y){this.router=e,this.fb=s,this.toastr=r,this.transactionService=l,this.purchaseService=u,this.cs=f,this.datepipe=d,this.reportService=y,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new g.NI(""),this.userControl=new g.NI,this.isAdmin=!1,this.users=[],this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let d=localStorage.getItem("financialYear");console.warn(JSON.parse(d));let y=JSON.parse(d);this.fyID=y}this.cs.userDetails$.subscribe(d=>{this.isAdmin="admin"==d.role,this.getBranch()}),this.cs.userDetails$.subscribe(d=>{this.userDetails=d,console.log(d),this.UserName=d?.username});const e=new Date,l=(e.getMonth(),e.getFullYear(),new Date(e));l.setDate(e.getDate()-14);const u=this.formatDate(l),f=this.formatDate(e);this.customerWiseSaleForm=new g.cw({start:new g.NI(u),end:new g.NI(f),user_id:new g.NI}),this.startDate=this.customerWiseSaleForm.value?.start,this.endDate=this.customerWiseSaleForm.value?.end,this.customerWiseSaleUserId=this.customerWiseSaleForm.value?.user_id,this.getCustomerWiseSale(),this.filteredusers=this.userControl.valueChanges.pipe((0,A.O)(""),(0,v.U)(d=>this._filter(d,!0))),this.userControl.valueChanges.subscribe(d=>{d.length>=3?this.getUser(d):(this.users=[],this.filteredusers=this.userControl.valueChanges.pipe((0,A.O)(""),(0,v.U)(y=>this._filter(y,!0))))})}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter(e,s){const r="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),l=this.users.filter(s?u=>u?.name?.toLowerCase().includes(r)||u.username.toLowerCase().includes(r):u=>!u?.name?.toLowerCase().includes(r)||u.username.toLowerCase().includes(r));return!s&&0===l.length&&l.push({name:"No data found"}),l}getUser(e){this.reportService.getUser(e).pipe((0,U.b)(2e3)).subscribe(s=>{this.users=s?.data,this.filteredusers=this.userControl.valueChanges.pipe((0,A.O)(""),(0,v.U)(r=>this._filter(r,!0)))})}search(){if(""===this.titlee)this.getCustomerWiseSale();else{const e=this.titlee.toLocaleLowerCase();this.customerWiseSaleList=this.customerWiseSaleList?.filter(s=>{const r=s?.user?.party_name.toLocaleLowerCase(),l=s?.receipt_voucher_no.toLocaleLowerCase()||"";return!(!r.includes(e)&&!l.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?s=>{s.isSelected=!1}:s=>{s.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,s,r){const l=(e-1)*s;return`Showing ${l+1}\u2013${Math.min(l+s-1,r-1)+1} of ${r} results`}getCustomerWiseSale(){this.reportService.getOutStandingAnalysis(this.startDate,this.endDate,this.customerWiseSaleUserId,this.fyID,this.selectData).subscribe(e=>{console.log(e),this.customerWiseSale=e,this.customerWiseSaleList=e?.salebill})}selectUser(e){this.dataId=e,this.customerWiseSaleForm.patchValue({user_id:this.dataId}),console.warn(this.customerWiseSaleForm.value),this.customerWiseSaleUserId=this.customerWiseSaleForm.value?.user_id,this?.getCustomerWiseSale()}getSelectedCustomerWiseSaleDates(){console.log(this.customerWiseSaleForm.value);const e=this.datepipe.transform(this.customerWiseSaleForm.value.start,"yyyy-MM-dd"),s=this.datepipe.transform(this.customerWiseSaleForm.value.end,"yyyy-MM-dd");console.log(e),console.log(s),this.startDate=e,this.endDate=s,this?.getCustomerWiseSale()}generatePDFAgain(){const e=new n.default,l=`Date Range From: ${this.startDate} - ${this.endDate}`,u=`User: ${this.UserName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("pv",86,5),e.text(" Outstanding Analysis Report",82,10),e.text(u,10,18),e.text(l,10,22),e.text("",10,25),c()(e,{head:[["#","Customer Bill No."," Bill Date","Due Date","Pending Amount","Note"]],body:this.customerWiseSaleList.map((f,d)=>[d+1,f.customer_bill_no,f.bill_date,f.due_date,f.pending_amount,f.note]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Outstanding _Analysis .pdf")}getVisibleDataFromTable(){const e=[],s=document.getElementById("mytable");if(s){const r=s.querySelector("thead tr");if(r){const u=[];r.querySelectorAll("th").forEach(f=>{const d=f.textContent?.trim();d&&"Is Active"!==d&&"Action"!==d&&u.push(d)}),e.push(u)}s.querySelectorAll("tbody tr").forEach(u=>{const f=[];u.querySelectorAll("td").forEach(d=>{const y=d.textContent?.trim();y&&f.push(y)}),e.push(f)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),s=p.P6.aoa_to_sheet(e),r=p.P6.book_new();p.P6.book_append_sheet(r,s,"Sheet1");const l=p.cW(r,{bookType:"xlsx",type:"array"}),u=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(u,"outstandinganalysis.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const r=document.querySelector(".titl");if(!r)return void console.error("Title element with class 'titl' not found.");const l=r.outerHTML,f=e.cloneNode(!0).outerHTML,y="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+f,lt=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=y,window.print(),document.body.innerHTML=lt}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.customerWiseSaleList?.length)}getBranch(){this.reportService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,s){if(s)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const r=this.selectData.findIndex(l=>l==e);console.log(r),-1!==r&&this.selectData.splice(r,1),this.ngOnInit(),console.log(this.selectData)}}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(C.F0),t.Y36(g.qu),t.Y36($._W),t.Y36(D.p),t.Y36(N.x),t.Y36(B.J),t.Y36(_.uU),t.Y36(I.r))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-outstanding-analysis"]],decls:100,vars:17,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-5","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-5","col-md-6","col-12"],[1,"form-group"],["type","text","placeholder","Search Name/Username","aria-label","customer","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[1,"row","container"],[1,"col-lg-2","col-sm-4","col-12","d-flex"],[1,"dash-count","das3",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],["colspan","10"],[1,"text-center"]],template:function(e,s){if(1&e){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Outstanding Analysis"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Outstanding Analysis "),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,E,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return s.getSelectedCustomerWiseSaleDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return s.getSelectedCustomerWiseSaleDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",24)(33,"div",25)(34,"label"),t._uU(35,"User Name"),t.qZA(),t._UZ(36,"input",26),t.TgZ(37,"mat-autocomplete",null,27),t.YNc(39,Y,2,1,"ng-container",28),t.ALo(40,"async"),t.qZA()()()()()(),t.TgZ(41,"div",29)(42,"ul")(43,"li")(44,"a",30),t.NdJ("click",function(){return s.generatePDFAgain()}),t._UZ(45,"img",31),t.qZA()(),t.TgZ(46,"li")(47,"a",32),t.NdJ("click",function(){return s.exportToExcel()}),t._UZ(48,"img",33),t.qZA()(),t.TgZ(49,"li")(50,"a",34),t.NdJ("click",function(){return s.printTable()}),t._UZ(51,"img",35),t.qZA()()()()(),t.YNc(52,Q,9,7,"div",36),t.TgZ(53,"div",37)(54,"table",38)(55,"thead")(56,"tr")(57,"th",39),t.NdJ("click",function(){return s.sort("id")}),t._uU(58,"#"),t._UZ(59,"i",40),t.qZA(),t.TgZ(60,"th",39),t.NdJ("click",function(){return s.sort("id")}),t._uU(61,"Customer Bill No."),t._UZ(62,"i",40),t.qZA(),t.TgZ(63,"th",39),t.NdJ("click",function(){return s.sort("id")}),t._uU(64,"Bill Date "),t._UZ(65,"i",40),t.qZA(),t.TgZ(66,"th",39),t.NdJ("click",function(){return s.sort("id")}),t._uU(67,"Due Date "),t._UZ(68,"i",40),t.qZA(),t.TgZ(69,"th",39),t.NdJ("click",function(){return s.sort("id")}),t._uU(70,"Pending Amount "),t._UZ(71,"i",40),t.qZA(),t.TgZ(72,"th",39),t.NdJ("click",function(){return s.sort("id")}),t._uU(73,"Note "),t._UZ(74,"i",40),t.qZA()()(),t.YNc(75,j,4,11,"tbody",41),t.YNc(76,K,5,0,"tbody",41),t.qZA(),t.TgZ(77,"div",6)(78,"div",42)(79,"div",43),t._uU(80," Show per page "),t.TgZ(81,"select",44,45),t.NdJ("ngModelChange",function(u){return s.itemsPerPage=u})("change",function(){t.CHM(r);const u=t.MAs(82);return t.KtG(s.changePg(u.value))}),t.TgZ(83,"option",46),t._uU(84,"10"),t.qZA(),t.TgZ(85,"option",47),t._uU(86,"20"),t.qZA(),t.TgZ(87,"option",48),t._uU(88,"30"),t.qZA(),t.TgZ(89,"option",49),t._uU(90,"50"),t.qZA(),t.TgZ(91,"option",50),t._uU(92,"100"),t.qZA(),t.TgZ(93,"option",51),t._uU(94,"All"),t.qZA()()()(),t.TgZ(95,"div",52)(96,"div",53)(97,"pagination-controls",54),t.NdJ("pageChange",function(u){return s.p=u}),t.qZA(),t.TgZ(98,"div",55),t._uU(99),t.qZA()()()()()()()()()}if(2&e){const r=t.MAs(31),l=t.MAs(38);t.xp6(11),t.Q6J("ngIf",s.isAdmin),t.xp6(5),t.Q6J("formGroup",s.customerWiseSaleForm),t.xp6(7),t.Q6J("formGroup",s.customerWiseSaleForm)("rangePicker",r),t.xp6(6),t.Q6J("for",r),t.xp6(7),t.Q6J("formControl",s.userControl)("matAutocomplete",l),t.xp6(3),t.Q6J("ngForOf",t.lcZ(40,15,s.filteredusers)),t.xp6(13),t.Q6J("ngIf",s.customerWiseSaleList),t.xp6(23),t.Q6J("ngIf",(null==s.customerWiseSaleList?null:s.customerWiseSaleList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==s.customerWiseSaleList?null:s.customerWiseSaleList.length)),t.xp6(5),t.Q6J("ngModel",s.itemsPerPage),t.xp6(18),t.lnq(" Showing ",s.itemsPerPage," to ",null==s.customerWiseSaleList?null:s.customerWiseSaleList.length," of ",s.p," entries ")}},dependencies:[_.sg,_.O5,_.PC,g._Y,g.YN,g.Kr,g.Fj,g.EJ,g.JJ,g.JL,g.On,g.oH,g.sg,g.u,S.XC,S.ZL,P.ey,O.KE,O.R9,Z.Nt,x.nW,x.wx,x.zY,x.By,x._g,M.LS,_.Ov,_.JJ,M._s,J.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;letter-spacing:3px;font-weight:700;padding-left:30px}.head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:3px;font-weight:700}.head6[_ngcontent-%COMP%]{font-size:18px;padding-left:10%}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),a})()}];let V=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[C.Bz.forChild(G),C.Bz]}),a})();var X=o(3056),tt=o(87078),w=o(86323),T=o(92642),et=o(95113),nt=o(64155),it=o(6205),st=o(8468);const at={User:T.n5m,UserCheck:T.uS3,FileText:T.acj,File:T.$BE};let rt=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({providers:[_.uU],imports:[_.ez,V,g.u5,g.UX,S.Bb,O.lN,Z.c,X.ZQ,tt.T,x.FA,O.lN,P.XK,et.LD,nt.vQ,st.I,it.X,w.p.pick(at),w.p]}),a})()}}]);