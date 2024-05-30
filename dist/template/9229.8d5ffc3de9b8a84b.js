"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9229],{60843:(L,b,h)=>{h.d(b,{s:()=>$});var g=h(92340),y=h(94650),S=h(80529);let $=(()=>{class _{constructor(i){this.http=i,this.apiUrl=`${g.N.api}`}getSalesNumber(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/numbers/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getCutomerRetention(i,t,a,r){let s=this.apiUrl+"/pv-api/customer-retention-rate/";const e=[];return i&&e.push(`start_date=${i}`),t&&e.push(`end_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTotalSalePurchase(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getDailySales(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/daily-sales/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getSalevsPurchase(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getCategoryWiseSale(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getSubCatWiseSale(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getInventory(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const e=[];return i&&e.push(`start_date=${i}`),t&&e.push(`end_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getRecentlySales(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/recently-sale/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getRecentlyAddedProduct(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getBestSellingProduct(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getLeastSellingProduct(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTotalRecvsPay(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getGrowth(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/growth-graph/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getGrossNetProfit(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const e=[];return i&&e.push(`start_date=${i}`),t&&e.push(`end_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getUnpaidInvoices(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTotalReceivables(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/total-receivable/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTodayPayables(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/total-payable/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTodayExpense(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/expenses/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getDepartmentWiseTarget(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getEployeeTargetAchieved(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getEmployeeTop10(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getEmployeeTargetGraph(i,t,a,r){let s=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const e=[];return i&&e.push(`from_date=${i}`),t&&e.push(`to_date=${t}`),a&&e.push(`branch=${a}`),r&&e.push(`financial_year=${r}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getAnalysisInventoryList(i,t,a){let r=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const s=[];return i&&s.push(`start_date=${i}`),t&&s.push(`end_date=${t}`),a&&s.push(`financial_year=${a}`),s.length>0&&(r+="?"+s.join("&")),this.http.get(r)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(i,t,a){let r=this.apiUrl+"/api/reports/profit_and_loss/";const s=[];return i&&s.push(`start_date=${i}`),t&&s.push(`end_date=${t}`),s.length>0&&(r+="?"+s.join("&")),a&&s.push(`financial_year=${a}`),this.http.get(r)}}return _.\u0275fac=function(i){return new(i||_)(y.LFG(S.eN))},_.\u0275prov=y.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},99229:(L,b,h)=>{h.r(b),h.d(b,{ScrapEntryListModule:()=>W});var g=h(36895),y=h(89299),S=h(96166),$=h(12983),_=h.n($),Z=h(94327),i=h(80574),t=h(94650),a=h(71071),r=h(42917),s=h(97185),e=h(60843),T=h(25062),f=h(24006),E=h(73162),C=h(54333),x=h(54040);function M(c,d){if(1&c){const n=t.EpF();t.TgZ(0,"a",58)(1,"input",59,60),t.NdJ("change",function(l){const u=t.CHM(n).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(u.id,l.target.checked))}),t.qZA(),t.TgZ(3,"label",61),t.NdJ("click",function(l){t.CHM(n);const p=t.oxw(2);return t.KtG(p.onLabelClick(l))}),t._uU(4),t.qZA()()}if(2&c){const n=d.$implicit,o=d.index,l=t.oxw(2);t.xp6(1),t.Q6J("value",n.id)("checked",l.selectData.includes(n.id))("id","checkboxCat-"+o),t.xp6(2),t.Q6J("for","checkboxCat-"+o),t.xp6(1),t.Oqu(n.title)}}function q(c,d){if(1&c&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&c){const n=t.oxw(2);t.xp6(1),t.Oqu(n.selectData.length+" Selected")}}const w=function(){return{standalone:!0}};function J(c,d){if(1&c){const n=t.EpF();t.TgZ(0,"div",51)(1,"div",52)(2,"button",53),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",54)(5,"li")(6,"input",55),t.NdJ("ngModelChange",function(l){t.CHM(n);const p=t.oxw();return t.KtG(p.searchBranch=l)})("ngModelChange",function(){t.CHM(n);const l=t.oxw();return t.KtG(l.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,M,5,5,"a",56),t.qZA()()(),t.TgZ(9,"div",57),t.YNc(10,q,2,1,"span",7),t.qZA()()}if(2&c){const n=t.oxw();t.xp6(6),t.Q6J("ngModel",n.searchBranch)("ngModelOptions",t.DdM(4,w)),t.xp6(2),t.Q6J("ngForOf",n.filteredBranchList),t.xp6(2),t.Q6J("ngIf",n.selectData.length>0)}}function N(c,d){1&c&&(t.ynx(0),t.TgZ(1,"a",62),t._UZ(2,"img",63),t._uU(3,"Add Scrap Entry "),t.qZA(),t.BQk())}function B(c,d){if(1&c){const n=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",65)(3,"input",66),t.NdJ("ngModelChange",function(l){const u=t.CHM(n).index,m=t.oxw(2);return t.KtG(m.selectedRows[u]=l)}),t.qZA(),t._UZ(4,"span",33),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",67)(8,"a",68),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"a",69),t._UZ(16,"img",70),t.qZA()()()}if(2&c){const n=d.$implicit,o=d.index,l=t.oxw(2);t.xp6(3),t.Q6J("ngModel",l.selectedRows[o]),t.xp6(3),t.Oqu(o+1),t.xp6(2),t.MGl("routerLink","//transaction/details-scarp-entry/",n.id,""),t.xp6(1),t.Oqu(null==n?null:n.date),t.xp6(2),t.Oqu(null==n?null:n.voucher_no),t.xp6(2),t.Oqu(n.updater_name),t.xp6(2),t.MGl("routerLink","//transaction/details-scarp-entry/",n.id,"")}}const O=function(c,d){return{itemsPerPage:c,currentPage:d}};function k(c,d){if(1&c&&(t.TgZ(0,"tbody"),t.YNc(1,B,17,7,"tr",64),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&c){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,n.tableData,n.key,n.reverse),t.WLB(8,O,n.itemsPerPage,n.p)))}}function I(c,d){1&c&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",71)(3,"p",72),t._uU(4,"Data not available"),t.qZA()()()())}function j(c,d){1&c&&t._UZ(0,"mat-progress-bar",73)}const G=[{path:"",component:(()=>{class c{constructor(n,o,l,p,u){this.transactionService=n,this.cs=o,this.toastrService=l,this.dashboardservice=p,this.contactservice=u,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.selectedRows=[],this.select=!1,this.key="id",this.reverse=!0,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(this.transactionService.getScrapEntry().subscribe(n=>{this.tableData=n,this.loader=!1}),this.cs.userDetails$.subscribe(n=>{this.isAdmin="admin"==n.role}),localStorage.getItem("financialYear")){let n=localStorage.getItem("financialYear");console.warn(JSON.parse(n));let o=JSON.parse(n);this.getEstimate(o)}this.cs.userDetails$.subscribe(n=>{this.userDetails=n,this.userDetails?.permission?.map(l=>{"transactions"===l.content_type.app_label&&"scarpentry"===l.content_type.model&&"add_scarpentry"==l.codename?(this.isAdd=l.codename,console.log(this.isAdd)):"transactions"===l.content_type.app_label&&"scarpentry"===l.content_type.model&&"change_scarpentry"==l.codename?(this.isEdit=l.codename,console.log(this.isEdit)):"transactions"===l.content_type.app_label&&"scarpentry"===l.content_type.model&&"delete_scarpentry"==l.codename&&(this.isDelete=l.codename,console.log(this.isDelete))})}),this.getPaymentTerms(),this.getBranch()}getPaymentTerms(){this.contactservice.getPaymentTerms().subscribe(n=>{this.paymentList=n})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(n){this.tableData.forEach(n?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const n=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(o=>!!(o?.voucher_no.toLocaleLowerCase()||"").includes(n))}}sort(n){this.key=n,this.reverse=!this.reverse}generatePDFAgain(){const n=new S.default;n.setFontSize(12),n.setTextColor(33,43,54),n.text("Scrap Entry",82,10),n.text("",10,15),_()(n,{head:[["#","Date","Voucher No.","Updater Name"]],body:this.tableData.map((l,p)=>[p+1,l.date,l.voucher_no,l.updater_name]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),n.save("Scrap_entry.pdf")}getVisibleDataFromTable(){const n=[],o=document.getElementById("mytable"),l=o.querySelector("thead tr"),p=o.querySelectorAll("tbody tr"),u=[];return l.querySelectorAll("th").forEach(m=>{const v=m.textContent.trim();"Is Active"!==v&&"Action"!==v&&u.push(v)}),n.push(u),p.forEach(m=>{const v=[];m.querySelectorAll("td").forEach(A=>{v.push(A.textContent.trim())}),n.push(v)}),n}exportToExcel(){const n=this.getVisibleDataFromTable(),o=i.P6.aoa_to_sheet(n),l=i.P6.book_new();i.P6.book_append_sheet(l,o,"Sheet1");const p=i.cW(l,{bookType:"xlsx",type:"array"}),u=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,Z.saveAs)(u,"scrapEntry.xlsx")}printTable(){const n=document.getElementById("mytable"),p=document.querySelector(".titl").outerHTML,u=n.cloneNode(!0),m=u.querySelector("th.thone:nth-child(2)");m&&m.remove();const v=u.querySelector("th.thone:last-child");v&&v.remove(),u.querySelectorAll("tr").forEach(U=>{const P=U.querySelector("td:nth-child(2)");P&&P.remove();const D=U.querySelector("td:last-child");D&&D.remove()});const Q=u.outerHTML,K="<style>.spaced-title { margin-top: 80px; }</style>"+p.replace("titl","spaced-title")+Q,z=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=K,window.print(),document.body.innerHTML=z}changePg(n){console.log(n),-1==n&&(this.itemsPerPage=this.tableData.length)}getEstimate(n){const o=JSON.stringify(this.selectData);console.log(o),console.log(o?.length),this.transactionService.getScrapEntryFy(n,this.selectData).subscribe(l=>{this.tableData=l,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)})}getBranch(){this.dashboardservice.getBranch().subscribe(n=>{this.branchList=n,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(n=>n.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(n,o){if(o)console.log(n),this.selectData.push(n),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const l=this.selectData.findIndex(p=>p==n);console.log(l),-1!==l&&this.selectData.splice(l,1),this.ngOnInit(),console.log(this.selectData)}}}return c.\u0275fac=function(n){return new(n||c)(t.Y36(a.p),t.Y36(r.J),t.Y36(s._W),t.Y36(e.s),t.Y36(T.y))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-scrap-entry-list"]],decls:88,vars:11,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Voucher No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//transaction/add-scarp-entry",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(n,o){if(1&n){const l=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Scrap Entry list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Scrap Entry"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,J,11,5,"div",6),t.qZA()(),t.YNc(10,N,4,0,"ng-container",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(u){return o.titlee=u})("ngModelChange",function(){return o.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return o.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return o.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"table",29)(39,"thead")(40,"tr")(41,"th",30),t.NdJ("click",function(){return o.sort("id")}),t.TgZ(42,"label",31),t.NdJ("click",function(){return o.selectAll(o.initChecked)}),t.TgZ(43,"input",32),t.NdJ("ngModelChange",function(u){return o.allSelected=u})("change",function(){return o.selectAlll()}),t.qZA(),t._UZ(44,"span",33),t.qZA(),t._UZ(45,"i",34),t.qZA(),t.TgZ(46,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(47,"Sr. No. "),t._UZ(48,"i",34),t.qZA(),t.TgZ(49,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(50,"Date"),t._UZ(51,"i",34),t.qZA(),t.TgZ(52,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(53,"Voucher No "),t._UZ(54,"i",34),t.qZA(),t.TgZ(55,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(56,"Updater Name "),t._UZ(57,"i",34),t.qZA(),t.TgZ(58,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(59,"Action "),t._UZ(60,"i",34),t.qZA()()(),t.YNc(61,k,4,11,"tbody",7),t.YNc(62,I,5,0,"tbody",7),t.qZA(),t.TgZ(63,"div",35),t.YNc(64,j,1,0,"mat-progress-bar",36),t.qZA(),t.TgZ(65,"div",4)(66,"div",37)(67,"div",38),t._uU(68," Show per page "),t.TgZ(69,"select",39,40),t.NdJ("ngModelChange",function(u){return o.itemsPerPage=u})("change",function(){t.CHM(l);const u=t.MAs(70);return t.KtG(o.changePg(u.value))}),t.TgZ(71,"option",41),t._uU(72,"10"),t.qZA(),t.TgZ(73,"option",42),t._uU(74,"20"),t.qZA(),t.TgZ(75,"option",43),t._uU(76,"30"),t.qZA(),t.TgZ(77,"option",44),t._uU(78,"50"),t.qZA(),t.TgZ(79,"option",45),t._uU(80,"100"),t.qZA(),t.TgZ(81,"option",46),t._uU(82,"All"),t.qZA()()()(),t.TgZ(83,"div",47)(84,"div",48)(85,"pagination-controls",49),t.NdJ("pageChange",function(u){return o.p=u}),t.qZA(),t.TgZ(86,"div",50),t._uU(87),t.qZA()()()()()()()}2&n&&(t.xp6(9),t.Q6J("ngIf",o.isAdmin),t.xp6(1),t.Q6J("ngIf",o.isAdd),t.xp6(15),t.Q6J("ngModel",o.titlee),t.xp6(18),t.Q6J("ngModel",o.allSelected),t.xp6(18),t.Q6J("ngIf",(null==o.tableData?null:o.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==o.tableData?null:o.tableData.length)),t.xp6(2),t.Q6J("ngIf",o.loader),t.xp6(5),t.Q6J("ngModel",o.itemsPerPage),t.xp6(18),t.lnq("Showing ",o.itemsPerPage," to ",null==o.tableData?null:o.tableData.length," of ",o.p," entries"))},dependencies:[g.sg,g.O5,y.yS,f.YN,f.Kr,f.Fj,f.Wl,f.EJ,f.JJ,f.On,E.pW,C.LS,C._s,x.T],styles:[".button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:497%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),c})(),canActivate:[h(30597).l],data:{allowedRoles:["view_scarpentry"]}}];let Y=(()=>{class c{}return c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[y.Bz.forChild(G),y.Bz]}),c})();var H=h(8468);let W=(()=>{class c{}return c.\u0275fac=function(n){return new(n||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[g.ez,Y,H.I]}),c})()},30597:(L,b,h)=>{h.d(b,{l:()=>Z});var g=h(94650),y=h(89299),S=h(97185),$=h(42917),_=h(80927);let Z=(()=>{class i{constructor(a,r,s,e,T){this.router=a,this.Arout=r,this.toastr=s,this.profileService=e,this.coreService=T}canActivate(a,r){const s=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(e=>{this.userDetails=e,this.permissions=this.userDetails?.permission}),s){const e=a.data.allowedRoles;console.log(e,"allowedRoles");const T=s.some(f=>e.includes(f.codename));if(console.log(T),this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails);const E=f?.permission,C=this.profileService.getUserDetails();(!C||C.length!==E.length)&&(this.profileService.setUserPermission(E),window.location.reload())}),T)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return i.\u0275fac=function(a){return new(a||i)(g.LFG(y.F0),g.LFG(y.gz),g.LFG(S._W),g.LFG($.J),g.LFG(_.p))},i.\u0275prov=g.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()}}]);