"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5270],{60843:(x,D,d)=>{d.d(D,{s:()=>m});var g=d(92340),b=d(94650),Z=d(80529);let m=(()=>{class _{constructor(o){this.http=o,this.apiUrl=`${g.N.api}`}getSalesNumber(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/numbers/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getCutomerRetention(o,r,a){let t=this.apiUrl+"/pv-api/customer-retention-rate/";const e=[];return o&&e.push(`start_date=${o}`),r&&e.push(`end_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getTotalSalePurchase(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getDailySales(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/daily-sales/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getSalevsPurchase(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getCategoryWiseSale(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getSubCatWiseSale(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getInventory(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const e=[];return o&&e.push(`start_date=${o}`),r&&e.push(`end_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getRecentlySales(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/recently-sale/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getRecentlyAddedProduct(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getBestSellingProduct(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getLeastSellingProduct(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getTotalRecvsPay(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getGrowth(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/growth-graph/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getGrossNetProfit(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const e=[];return o&&e.push(`start_date=${o}`),r&&e.push(`end_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getUnpaidInvoices(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getTotalReceivables(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/total-receivable/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getTodayPayables(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/total-payable/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getTodayExpense(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/expenses/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getDepartmentWiseTarget(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getEployeeTargetAchieved(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getEmployeeTop10(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getEmployeeTargetGraph(o,r,a){let t=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const e=[];return o&&e.push(`from_date=${o}`),r&&e.push(`to_date=${r}`),a&&e.push(`branch=${a}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getAnalysisInventoryList(o,r){let a=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const t=[];return o&&t.push(`start_date=${o}`),r&&t.push(`end_date=${r}`),t.length>0&&(a+="?"+t.join("&")),this.http.get(a)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(o,r){let a=this.apiUrl+"/api/reports/profit_and_loss/";const t=[];return o&&t.push(`start_date=${o}`),r&&t.push(`end_date=${r}`),t.length>0&&(a+="?"+t.join("&")),this.http.get(a)}}return _.\u0275fac=function(o){return new(o||_)(b.LFG(Z.eN))},_.\u0275prov=b.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},5270:(x,D,d)=>{d.r(D),d.d(D,{DebitNoteModule:()=>tt});var g=d(36895),b=d(89299),Z=d(2454),m=d.n(Z),_=d(96166),N=d(12983),o=d.n(N),r=d(80574),a=d(94327),t=d(94650),e=d(71071),y=d(42917),T=d(60843),C=d(25062),f=d(24006),A=d(73162),U=d(54333),S=d(90455),w=d(54040);function k(l,h){if(1&l){const i=t.EpF();t.TgZ(0,"a",55)(1,"input",56,57),t.NdJ("change",function(n){const p=t.CHM(i).$implicit,u=t.oxw(2);return t.KtG(u.SelectedBranch(p.id,n.target.checked))}),t.qZA(),t.TgZ(3,"label",58),t.NdJ("click",function(n){t.CHM(i);const c=t.oxw(2);return t.KtG(c.onLabelClick(n))}),t._uU(4),t.qZA()()}if(2&l){const i=h.$implicit,s=h.index,n=t.oxw(2);t.xp6(1),t.Q6J("value",i.id)("checked",n.selectData.includes(i.id))("id","checkboxCat-"+s),t.xp6(2),t.Q6J("for","checkboxCat-"+s),t.xp6(1),t.Oqu(i.title)}}function L(l,h){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&l){const i=t.oxw(2);t.xp6(1),t.Oqu(i.selectData.length+" Selected")}}const J=function(){return{standalone:!0}};function B(l,h){if(1&l){const i=t.EpF();t.TgZ(0,"div",48)(1,"div",49)(2,"button",50),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",51)(5,"li")(6,"input",52),t.NdJ("ngModelChange",function(n){t.CHM(i);const c=t.oxw();return t.KtG(c.searchBranch=n)})("ngModelChange",function(){t.CHM(i);const n=t.oxw();return t.KtG(n.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,k,5,5,"a",53),t.qZA()()(),t.TgZ(9,"div",54),t.YNc(10,L,2,1,"span",7),t.qZA()()}if(2&l){const i=t.oxw();t.xp6(6),t.Q6J("ngModel",i.searchBranch)("ngModelOptions",t.DdM(4,J)),t.xp6(2),t.Q6J("ngForOf",i.filteredBranchList),t.xp6(2),t.Q6J("ngIf",i.selectData.length>0)}}function E(l,h){1&l&&(t.ynx(0),t.TgZ(1,"a",59),t._UZ(2,"img",60),t._uU(3,"Add New Debit Note "),t.qZA(),t.BQk())}function O(l,h){if(1&l&&(t.TgZ(0,"a",68),t._UZ(1,"img",72),t.qZA()),2&l){const i=t.oxw().$implicit;t.MGl("routerLink","//transaction/updatedebitnote/",i.id,"")}}function I(l,h){if(1&l){const i=t.EpF();t.TgZ(0,"a",73),t.NdJ("click",function(){t.CHM(i);const n=t.oxw(),c=n.index,p=n.$implicit,u=t.oxw(2);return t.KtG(u.confirmText(c,p.id))}),t._UZ(1,"img",74),t.qZA()}}const R=function(l,h,i){return{"bg-lightgreen":l,"bg-lightred":h,"bg-lightyellow":i}};function F(l,h){if(1&l){const i=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",62)(3,"input",63),t.NdJ("ngModelChange",function(n){const p=t.CHM(i).index,u=t.oxw(2);return t.KtG(u.selectedRows[p]=n)}),t.qZA(),t._UZ(4,"span",43),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",64)(8,"a",65),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA(),t.TgZ(25,"td")(26,"span",66),t._uU(27),t.qZA()(),t.TgZ(28,"td")(29,"mat-slide-toggle",67),t.NdJ("click",function(){const n=t.CHM(i),c=n.$implicit,p=n.index,u=t.oxw(2);return t.KtG(c.is_active?u.isActive(p,c.id):u.Active(p,c.id))})("ngModelChange",function(n){const p=t.CHM(i).$implicit;return t.KtG(p.is_active=n)}),t.qZA()(),t.TgZ(30,"td")(31,"a",68),t._UZ(32,"img",69),t.qZA(),t.YNc(33,O,2,1,"a",70),t.YNc(34,I,2,0,"a",71),t.qZA()()}if(2&l){const i=h.$implicit,s=h.index,n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedRows[s]),t.xp6(3),t.Oqu(s+1),t.xp6(2),t.MGl("routerLink","//transaction/detailsdebitnote/",i.id,""),t.xp6(1),t.Oqu(null==i||null==i.party?null:i.party.company_name),t.xp6(2),t.Oqu(t.xi3(12,17,null==i?null:i.date,"dd-MMMM-yyyy")),t.xp6(3),t.Oqu(i.debit_note_no),t.xp6(2),t.Oqu(null==i.purchase_bill?null:i.purchase_bill.refrence_bill_no),t.xp6(2),t.Oqu(i.reason),t.xp6(2),t.Oqu(i.amount),t.xp6(2),t.Oqu(i.tax),t.xp6(2),t.Oqu(i.total),t.xp6(2),t.Q6J("ngClass",t.kEZ(20,R,"Complete"===i.status,"Pending"===i.status,"Ordered"===i.status)),t.xp6(1),t.Oqu(i.status),t.xp6(2),t.Q6J("ngModel",i.is_active),t.xp6(2),t.MGl("routerLink","//transaction/detailsdebitnote/",i.id,""),t.xp6(2),t.Q6J("ngIf",n.isEdit),t.xp6(1),t.Q6J("ngIf",n.isDelete)}}const j=function(l,h){return{itemsPerPage:l,currentPage:h}};function G(l,h){if(1&l&&(t.TgZ(0,"tbody"),t.YNc(1,F,35,24,"tr",61),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&l){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.filteredData,i.key,i.reverse),t.WLB(8,j,i.itemsPerPage,i.p)))}}function Y(l,h){1&l&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",75)(3,"p",76),t._uU(4,"Data not available"),t.qZA()()()())}function H(l,h){1&l&&t._UZ(0,"mat-progress-bar",77)}function Q(l,h){if(1&l){const i=t.EpF();t.TgZ(0,"div",4)(1,"div",78)(2,"div",79),t._uU(3," Show per page "),t.TgZ(4,"select",80,81),t.NdJ("ngModelChange",function(n){t.CHM(i);const c=t.oxw();return t.KtG(c.itemsPerPage=n)})("change",function(){t.CHM(i);const n=t.MAs(5),c=t.oxw();return t.KtG(c.changePg(n.value))}),t.TgZ(6,"option",82),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",83),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",84),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",85),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",86),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",87),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",88)(19,"div",89)(20,"pagination-controls",90),t.NdJ("pageChange",function(n){t.CHM(i);const c=t.oxw();return t.KtG(c.p=n)}),t.qZA(),t.TgZ(21,"div",91),t._uU(22),t.qZA()()()()}if(2&l){const i=t.oxw();t.xp6(4),t.Q6J("ngModel",i.itemsPerPage),t.xp6(18),t.lnq("Showing ",i.itemsPerPage," to ",null==i.tableData?null:i.tableData.length," of ",i.p," entries")}}const z=[{path:"",component:(()=>{class l{constructor(i,s,n,c,p){this.transactionService=i,this.cs=s,this.datePipe=n,this.dashboardservice=c,this.contactservice=p,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(i,s){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.transactionService.deleteDebitNote(s).subscribe(c=>{this.delRes=c,this.delRes.success?(m().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(i,1),this.ngOnInit()):m().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(i,s){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.transactionService.DebitNoteIsActive(s,"").subscribe(c=>{this.delRes=c,this.delRes.success?(m().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):m().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(i,s){m().fire({title:"Are you sure?",text:"Do you want to Active this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.transactionService.DebitNoteIsActive(s,"").subscribe(c=>{this.delRes=c,this.delRes.success?(m().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):m().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){if(this.transactionService.getDebitNote().subscribe(i=>{this.tableData=i,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(i=>{this.isAdmin="admin"==i.role}),localStorage.getItem("financialYear")){let i=localStorage.getItem("financialYear");console.warn(JSON.parse(i));let s=JSON.parse(i);this.getEstimate(s)}this.cs.userDetails$.subscribe(i=>{this.userDetails=i,this.userDetails?.permission?.map(n=>{"transactions"===n.content_type.app_label&&"debitnote"===n.content_type.model&&"add_debitnote"==n.codename?this.isAdd=n.codename:"transactions"===n.content_type.app_label&&"debitnote"===n.content_type.model&&"change_debitnote"==n.codename?this.isEdit=n.codename:"transactions"===n.content_type.app_label&&"debitnote"===n.content_type.model&&"delete_debitnote"==n.codename&&(this.isDelete=n.codename)})}),this.getPaymentTerms(),this.getBranch()}getPaymentTerms(){this.contactservice.getPaymentTerms().subscribe(i=>{this.paymentList=i})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(i){this.tableData.forEach(i?s=>{s.isSelected=!1}:s=>{s.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const i=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(s=>{const n=s?.party?.company_name.toLocaleLowerCase(),c=s?.debit_note_no.toLocaleLowerCase();return!!n.match(i)||!!c.match(i)})}}sort(i){this.key=i,this.reverse=!this.reverse}generatePDF(){const i=new _.default;i.setFontSize(15),i.setTextColor(33,43,54),i.text("Debit Note",10,10),o()(i,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name "},{header:"Debit Note Date"},{header:"Debit Note No"},{header:"Purchase Bill"},{header:"Reason"},{header:"Amount"},{header:"Tax"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),i.save("debitnote.pdf")}formatDate(i){return this.datePipe.transform(i,"yyyy-MM-dd")||""}generatePDFAgain(){const i=new _.default;i.setFontSize(12),i.setTextColor(33,43,54),i.text("Debit Note",82,10),i.text("",10,15),o()(i,{head:[["#","Company Name"," Date","Debit Note No","Purchase Bill","Reason","Amount","Tax","Total","Status"]],body:this.tableData.map((n,c)=>[c+1,n.party?.company_name,this.formatDate(n.date),n.debit_note_no,n.purchase_bill?.refrence_bill_no,n.reason,n.amount,n.tax,n.total,n.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),i.save("Debit Note .pdf")}getVisibleDataFromTable(){const i=[],s=document.getElementById("mytable"),n=s.querySelector("thead tr"),c=s.querySelectorAll("tbody tr"),p=[];return n.querySelectorAll("th").forEach(u=>{const v=u.textContent.trim();"Is Active"!==v&&"Action"!==v&&p.push(v)}),i.push(p),c.forEach(u=>{const v=[];u.querySelectorAll("td").forEach(M=>{v.push(M.textContent.trim())}),i.push(v)}),i}exportToExcel(){const i=this.getVisibleDataFromTable(),s=r.P6.aoa_to_sheet(i),n=r.P6.book_new();r.P6.book_append_sheet(n,s,"Sheet1");const c=r.cW(n,{bookType:"xlsx",type:"array"}),p=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,a.saveAs)(p,"debitnote.xlsx")}printTable(){const i=document.getElementById("mytable"),c=document.querySelector(".titl").outerHTML,p=i.cloneNode(!0),u=p.querySelector("th.thone:nth-child(12)");u&&u.remove();const v=p.querySelector("th.thone:last-child");v&&v.remove(),p.querySelectorAll("tr").forEach(P=>{const q=P.querySelector("td:nth-child(12)");q&&q.remove();const $=P.querySelector("td:last-child");$&&$.remove()});const et=p.outerHTML,it="<style>.spaced-title { margin-top: 80px; }</style>"+c.replace("titl","spaced-title")+et,nt=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=it,window.print(),document.body.innerHTML=nt}filterData(){let i=this.tableData.slice();if(this.date){const s=new Date(this.date).toISOString().split("T")[0];i=i.filter(n=>new Date(n?.date).toISOString().split("T")[0]===s)}this.selectedAmount&&(i=i.filter(s=>s?.amount<=this.selectedAmount)),this.filteredData=i}clearFilters(){this.selectedAmount=null,this.date=null,this.filterData()}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.tableData.length)}getEstimate(i){const s=JSON.stringify(this.selectData);console.log(s),console.log(s?.length),this.transactionService.getDebitNoteFy(i,this.selectData).subscribe(n=>{this.tableData=n,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getBranch(){this.dashboardservice.getBranch().subscribe(i=>{this.branchList=i,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(i=>i.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(i,s){if(s)console.log(i),this.selectData.push(i),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const n=this.selectData.findIndex(c=>c==i);console.log(n),-1!==n&&this.selectData.splice(n,1),this.ngOnInit(),console.log(this.selectData)}}}return l.\u0275fac=function(i){return new(i||l)(t.Y36(e.p),t.Y36(y.J),t.Y36(g.uU),t.Y36(T.s),t.Y36(C.y))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-debit-note"]],decls:107,vars:10,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Company/DebitNote No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//transaction/adddebitnote",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(i,s){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Debit Note LIST"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Debit Note"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,B,11,5,"div",6),t.qZA()(),t.YNc(10,E,4,0,"ng-container",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(c){return s.titlee=c})("ngModelChange",function(){return s.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return s.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return s.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return s.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label"),t._uU(45,"Debit Note Date"),t.qZA(),t.TgZ(46,"input",33),t.NdJ("ngModelChange",function(c){return s.date=c})("change",function(){return s.filterData()}),t.qZA()()(),t.TgZ(47,"div",31)(48,"div",32)(49,"label"),t._uU(50,"Enter Amount"),t.qZA(),t.TgZ(51,"input",34),t.NdJ("ngModelChange",function(c){return s.selectedAmount=c})("keyup",function(){return s.filterData()}),t.qZA(),t.TgZ(52,"span",35),t._uU(53,"Amount Filter (Less than & Equal to Amount value)"),t.qZA()()()(),t.TgZ(54,"div",36),t.NdJ("click",function(){return s.clearFilters()}),t.TgZ(55,"a",37),t._uU(56,"Clear Filter"),t.qZA()()()()()(),t.TgZ(57,"div",38)(58,"table",39)(59,"thead")(60,"tr")(61,"th",40),t.NdJ("click",function(){return s.sort("id")}),t.TgZ(62,"label",41),t.NdJ("click",function(){return s.selectAll(s.initChecked)}),t.TgZ(63,"input",42),t.NdJ("ngModelChange",function(c){return s.allSelected=c})("change",function(){return s.selectAlll()}),t.qZA(),t._UZ(64,"span",43),t.qZA(),t._UZ(65,"i",44),t.qZA(),t.TgZ(66,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(67,"Sr. No."),t._UZ(68,"i",44),t.qZA(),t.TgZ(69,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(70,"Company Name "),t._UZ(71,"i",44),t.qZA(),t.TgZ(72,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(73,"Date"),t._UZ(74,"i",44),t.qZA(),t.TgZ(75,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(76,"Debit Note No"),t._UZ(77,"i",44),t.qZA(),t.TgZ(78,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(79,"Purchase Bill"),t._UZ(80,"i",44),t.qZA(),t.TgZ(81,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(82,"Reason"),t._UZ(83,"i",44),t.qZA(),t.TgZ(84,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(85,"Amount "),t._UZ(86,"i",44),t.qZA(),t.TgZ(87,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(88,"Tax "),t._UZ(89,"i",44),t.qZA(),t.TgZ(90,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(91,"Total "),t._UZ(92,"i",44),t.qZA(),t.TgZ(93,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(94,"Status "),t._UZ(95,"i",44),t.qZA(),t.TgZ(96,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(97,"Is Active "),t._UZ(98,"i",44),t.qZA(),t.TgZ(99,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(100,"Action "),t._UZ(101,"i",44),t.qZA()()(),t.YNc(102,G,4,11,"tbody",7),t.YNc(103,Y,5,0,"tbody",7),t.qZA(),t.TgZ(104,"div",45),t.YNc(105,H,1,0,"mat-progress-bar",46),t.qZA(),t.YNc(106,Q,23,4,"div",47),t.qZA()()()),2&i&&(t.xp6(9),t.Q6J("ngIf",s.isAdmin),t.xp6(1),t.Q6J("ngIf",s.isAdd),t.xp6(15),t.Q6J("ngModel",s.titlee),t.xp6(21),t.Q6J("ngModel",s.date),t.xp6(5),t.Q6J("ngModel",s.selectedAmount),t.xp6(12),t.Q6J("ngModel",s.allSelected),t.xp6(39),t.Q6J("ngIf",(null==s.filteredData?null:s.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==s.filteredData?null:s.filteredData.length)&&!s.loader),t.xp6(2),t.Q6J("ngIf",s.loader),t.xp6(1),t.Q6J("ngIf",!s.loader))},dependencies:[g.mk,g.sg,g.O5,b.yS,f.YN,f.Kr,f.Fj,f.wV,f.Wl,f.EJ,f.JJ,f.On,A.pW,U.LS,S.Rr,g.uU,U._s,w.T],styles:["input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:421%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),l})(),canActivate:[d(30597).l],data:{allowedRoles:["view_debitnote"]}}];let V=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[b.Bz.forChild(z),b.Bz]}),l})();var X=d(8468);let tt=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[g.uU],imports:[g.ez,V,X.I]}),l})()},30597:(x,D,d)=>{d.d(D,{l:()=>N});var g=d(94650),b=d(89299),Z=d(97185),m=d(42917),_=d(80927);let N=(()=>{class o{constructor(a,t,e,y,T){this.router=a,this.Arout=t,this.toastr=e,this.profileService=y,this.coreService=T}canActivate(a,t){const e=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(y=>{this.userDetails=y,this.permissions=this.userDetails?.permission}),e){const y=a.data.allowedRoles;console.log(y,"allowedRoles");const T=e.some(C=>y.includes(C.codename));if(console.log(T),this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails);const f=C?.permission,A=this.profileService.getUserDetails();(!A||A.length!==f.length)&&(this.profileService.setUserPermission(f),window.location.reload())}),T)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return o.\u0275fac=function(a){return new(a||o)(g.LFG(b.F0),g.LFG(b.gz),g.LFG(Z._W),g.LFG(m.J),g.LFG(_.p))},o.\u0275prov=g.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);