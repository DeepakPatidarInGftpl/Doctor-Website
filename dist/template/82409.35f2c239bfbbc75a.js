"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[82409],{60843:(P,T,h)=>{h.d(T,{s:()=>f});var m=h(92340),b=h(94650),A=h(80529);let f=(()=>{class _{constructor(a){this.http=a,this.apiUrl=`${m.N.api}`}getSalesNumber(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/numbers/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getCutomerRetention(a,r,l,s){let e=this.apiUrl+"/pv-api/customer-retention-rate/";const t=[];return a&&t.push(`start_date=${a}`),r&&t.push(`end_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getTotalSalePurchase(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getDailySales(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/daily-sales/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getSalevsPurchase(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getCategoryWiseSale(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getSubCatWiseSale(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getInventory(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const t=[];return a&&t.push(`start_date=${a}`),r&&t.push(`end_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getRecentlySales(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/recently-sale/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getRecentlyAddedProduct(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getBestSellingProduct(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getLeastSellingProduct(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getTotalRecvsPay(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getGrowth(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/growth-graph/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getGrossNetProfit(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const t=[];return a&&t.push(`start_date=${a}`),r&&t.push(`end_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getUnpaidInvoices(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getTotalReceivables(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/total-receivable/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getTodayPayables(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/total-payable/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getTodayExpense(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/expenses/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getDepartmentWiseTarget(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getEployeeTargetAchieved(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getEmployeeTop10(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getEmployeeTargetGraph(a,r,l,s){let e=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const t=[];return a&&t.push(`from_date=${a}`),r&&t.push(`to_date=${r}`),l&&t.push(`branch=${l}`),s&&t.push(`financial_year=${s}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getAnalysisInventoryList(a,r,l){let s=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const e=[];return a&&e.push(`start_date=${a}`),r&&e.push(`end_date=${r}`),l&&e.push(`financial_year=${l}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(a,r,l){let s=this.apiUrl+"/api/reports/profit_and_loss/";const e=[];return a&&e.push(`start_date=${a}`),r&&e.push(`end_date=${r}`),e.length>0&&(s+="?"+e.join("&")),l&&e.push(`financial_year=${l}`),this.http.get(s)}}return _.\u0275fac=function(a){return new(a||_)(b.LFG(A.eN))},_.\u0275prov=b.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},82409:(P,T,h)=>{h.r(T),h.d(T,{SalesReturnListModule:()=>ne});var m=h(36895),b=h(4392),A=h(2454),f=h.n(A),_=h(96166),x=h(12983),a=h.n(x),r=h(80574),l=h(94327),s=h(24006),e=h(94650),t=h(72170),R=h(42917),S=h(60843),v=h(43443),C=h(73162),U=h(54333),Z=h(99602),L=h(59549),B=h(54040);function N(u,p){if(1&u){const i=e.EpF();e.TgZ(0,"a",82)(1,"input",83,84),e.NdJ("change",function(o){const d=e.CHM(i).$implicit,g=e.oxw(2);return e.KtG(g.SelectedBranch(d.id,o.target.checked))}),e.qZA(),e.TgZ(3,"label",85),e.NdJ("click",function(o){e.CHM(i);const c=e.oxw(2);return e.KtG(c.onLabelClick(o))}),e._uU(4),e.qZA()()}if(2&u){const i=p.$implicit,n=p.index,o=e.oxw(2);e.xp6(1),e.Q6J("value",i.id)("checked",o.selectData.includes(i.id))("id","checkboxCat-"+n),e.xp6(2),e.Q6J("for","checkboxCat-"+n),e.xp6(1),e.Oqu(i.title)}}function k(u,p){if(1&u&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&u){const i=e.oxw(2);e.xp6(1),e.Oqu(i.selectData.length+" Selected")}}const J=function(){return{standalone:!0}};function E(u,p){if(1&u){const i=e.EpF();e.TgZ(0,"div",75)(1,"div",76)(2,"button",77),e._uU(3,"Select Branch"),e.qZA(),e.TgZ(4,"ul",78)(5,"li")(6,"input",79),e.NdJ("ngModelChange",function(o){e.CHM(i);const c=e.oxw();return e.KtG(c.searchBranch=o)})("ngModelChange",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.filterBranch())}),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,N,5,5,"a",80),e.qZA()()(),e.TgZ(9,"div",81),e.YNc(10,k,2,1,"span",58),e.qZA()()}if(2&u){const i=e.oxw();e.xp6(6),e.Q6J("ngModel",i.searchBranch)("ngModelOptions",e.DdM(4,J)),e.xp6(2),e.Q6J("ngForOf",i.filteredBranchList),e.xp6(2),e.Q6J("ngIf",i.selectData.length>0)}}function O(u,p){1&u&&(e.TgZ(0,"a",86),e._UZ(1,"img",87),e._uU(2,"Add Sales Return "),e.qZA())}function F(u,p){if(1&u&&(e.TgZ(0,"option",88),e._uU(1),e.qZA()),2&u){const i=p.$implicit;e.s9C("value",null==i?null:i.customer_bill_no),e.xp6(1),e.hij(" ",null==i?null:i.customer_bill_no,"")}}function I(u,p){if(1&u&&(e.TgZ(0,"a",95),e._UZ(1,"img",99),e.qZA()),2&u){const i=e.oxw().$implicit;e.MGl("routerLink","//sales/updatesalesReturn/",i.id,"")}}function j(u,p){if(1&u){const i=e.EpF();e.TgZ(0,"a",100),e.NdJ("click",function(){e.CHM(i);const o=e.oxw(),c=o.index,d=o.$implicit,g=e.oxw(2);return e.KtG(g.confirmText(c,d.id))}),e._UZ(1,"img",101),e.qZA()}}const Y=function(u,p,i){return{"bg-lightgreen":u,"bg-lightred":p,"bg-lightyellow":i}};function G(u,p){if(1&u){const i=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",90)(3,"input",91),e.NdJ("ngModelChange",function(o){const d=e.CHM(i).index,g=e.oxw(2);return e.KtG(g.selectedRows[d]=o)}),e.qZA(),e._UZ(4,"span",56),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td",92)(10,"a",93),e._uU(11),e.qZA()(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td")(21,"span",94),e._uU(22),e.qZA()(),e.TgZ(23,"td")(24,"a",95),e._UZ(25,"img",96),e.qZA(),e.YNc(26,I,2,1,"a",97),e.YNc(27,j,2,0,"a",98),e.qZA()()}if(2&u){const i=p.$implicit,n=p.index,o=e.oxw(2);e.xp6(3),e.Q6J("ngModel",o.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.Oqu(null==i?null:i.sale_return_bill_no),e.xp6(2),e.MGl("routerLink","//sales/salesReturnedetails/",i.id,""),e.xp6(1),e.Oqu((null==i||null==i.customer?null:i.customer.name)+" ("+(null==i||null==i.customer?null:i.customer.username)+")"),e.xp6(2),e.Oqu(null==i?null:i.bill_date),e.xp6(2),e.Oqu(null==i||null==i.sale_bill?null:i.sale_bill.customer_bill_no),e.xp6(2),e.Oqu(null==i?null:i.total_tax),e.xp6(2),e.Oqu(null==i?null:i.total),e.xp6(2),e.Q6J("ngClass",e.kEZ(14,Y,"Used"===i.status,"Pending"===i.status,"Draft"===i.status||"New"===(null==i?null:i.status))),e.xp6(1),e.Oqu(i.status),e.xp6(2),e.MGl("routerLink","//sales/salesReturnedetails/",i.id,""),e.xp6(2),e.Q6J("ngIf",o.isEdit),e.xp6(1),e.Q6J("ngIf",o.isDelete)}}const Q=function(u,p){return{itemsPerPage:u,currentPage:p}};function K(u,p){if(1&u&&(e.TgZ(0,"tbody"),e.YNc(1,G,28,18,"tr",89),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&u){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,i.filteredData,i.key,i.reverse),e.WLB(8,Q,i.itemsPerPage,i.p)))}}function W(u,p){1&u&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",102)(3,"p",103),e._uU(4,"Data not available"),e.qZA()()()())}function z(u,p){1&u&&e._UZ(0,"mat-progress-bar",104)}const X=[{path:"",component:(()=>{class u{constructor(i,n,o,c,d){this.saleService=i,this.cs=n,this.datePipe=o,this.dashboardservice=c,this.commonService=d,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(i,n){f().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.saleService.deleteSaleReturn(n).subscribe(c=>{this.delRes=c,this.delRes.success?(this.ngOnInit(),f().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(i,1)):f().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(i,n){f().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale return!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.saleService.SalesMaterialOutwardIsActive(n,"").subscribe(c=>{this.delRes=c,this.delRes.success&&(f().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(i,n){f().fire({title:"Are you sure?",text:"Do you want to Active this sale return!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.saleService.SaleReturnIsActive(n,"").subscribe(c=>{this.delRes=c,this.delRes.success&&(f().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){if(localStorage.getItem("financialYear")){let o=localStorage.getItem("financialYear");console.warn(JSON.parse(o));let c=JSON.parse(o);this.getSaleReturnFy(c)}this.cs.userDetails$.subscribe(o=>{this.isAdmin="admin"==o.role}),this.financialYear=localStorage.getItem("financialYear");const{minDate:i,maxDate:n}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=i,this.maxDate=n,this.dueDateForm=new s.cw({start:new s.NI("",[s.kI.required,this.commonService.dateRangeValidator(this.financialYear)]),end:new s.NI("",[s.kI.required,this.commonService.dateRangeValidator(this.financialYear)])}),this.saleReturnDateForm=new s.cw({start:new s.NI("",[s.kI.required,this.commonService.dateRangeValidator(this.financialYear)]),end:new s.NI("",[s.kI.required,this.commonService.dateRangeValidator(this.financialYear)])}),this.commonService.validateAndClearDates(this.dueDateForm,this.minDate,this.maxDate),this.commonService.validateAndClearDates(this.saleReturnDateForm,this.minDate,this.maxDate),this.cs.userDetails$.subscribe(o=>{this.userDetails=o,this.userDetails?.permission?.map(d=>{"sale"===d.content_type.app_label&&"salereturn"===d.content_type.model&&"add_salereturn"==d.codename?this.isAdd=d.codename:"sale"===d.content_type.app_label&&"salereturn"===d.content_type.model&&"change_salereturn"==d.codename?this.isEdit=d.codename:"sale"===d.content_type.app_label&&"salereturn"===d.content_type.model&&"delete_salereturn"==d.codename&&(this.isDelete=d.codename)})}),this.getSellBill(),this.getBranch()}getSaleReturnFy(i){const n=JSON.stringify(this.selectData);console.log(n),console.log(n?.length),this.saleService.getSaleReturnfy(i,this.selectData).subscribe(o=>{this.tableData=o,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getSellBill(){this.saleService.getSalesBill().subscribe(i=>{this.saleBillList=i})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(i){this.tableData.forEach(i?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){const i=this.titlee.toLocaleLowerCase();this.filteredData=i?this.tableData.filter(n=>{const o=n?.customer?.name.toLocaleLowerCase(),c=n?.status?.toLocaleLowerCase(),d=n?.customer?.username.toLocaleLowerCase()||"",g=n?.sale_return_bill_no.toLocaleLowerCase();return o.includes(i)||d.includes(i)||c.includes(i)||g.includes(i)}):this.tableData}sort(i){this.key=i,this.reverse=!this.reverse}formatDate(i){return this.datePipe.transform(i,"yyyy-MM-dd")||""}generatePDF(){const i=new _.default;i.setFontSize(15),i.setTextColor(33,43,54),i.text("Sales Return List",10,10),a()(i,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name "},{header:"Bill Date"},{header:"Bill No."},{header:"Sales Bill"},{header:"Sub Total"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),i.save("salesReturn.pdf")}generatePDFAgain(){const i=new _.default;i.setFontSize(12),i.setTextColor(33,43,54),i.text("Sales Return List",82,10),i.text("",10,15),a()(i,{head:[["#","User Name","Bill Date","Bill No.","Sales Bill","Sub Total","Total","Status"]],body:this.tableData.map((o,c)=>[c+1,o?.customer?.name+" ("+o?.customer?.username+")",this.formatDate(o?.bill_date),o.sale_return_bill_no,o.sale_bill?.customer_bill_no,o.subtotal,o.total,o.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),i.save("Sales Return .pdf")}getVisibleDataFromTable(){const i=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),c=n.querySelectorAll("tbody tr"),d=[];return o.querySelectorAll("th").forEach(g=>{const y=g.textContent.trim();"Is Active"!==y&&"Action"!==y&&d.push(y)}),i.push(d),c.forEach(g=>{const y=[];g.querySelectorAll("td").forEach(D=>{y.push(D.textContent.trim())}),i.push(y)}),i}exportToExcel(){const i=this.getVisibleDataFromTable(),n=r.P6.aoa_to_sheet(i),o=r.P6.book_new();r.P6.book_append_sheet(o,n,"Sheet1");const c=r.cW(o,{bookType:"xlsx",type:"array"}),d=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,l.saveAs)(d,"saleReturn.xlsx")}printTable(){const i=document.getElementById("mytable"),n=document.querySelector(".titl");if(!i)return void console.error("Table not found");if(!n)return void console.error("Title not found");const o=i.cloneNode(!0),c=n.cloneNode(!0),d=o.querySelector("th.thone:nth-child(1)");d&&d.remove();const g=o.querySelector("th.thone:last-child");g&&g.remove(),o.querySelectorAll("tr").forEach(q=>{const M=q.querySelector("td:nth-child(1)");M&&M.remove();const w=q.querySelector("td:last-child");w&&w.remove()});const D=document.createElement("div");c.classList.add("spaced-title"),D.appendChild(c),D.appendChild(o);const $=document.createElement("style");$.id="printStyle",$.textContent="\n        @media print {\n            body * {\n                visibility: hidden;\n            }\n            #printContainer, #printContainer * {\n                visibility: visible;\n            }\n            #printContainer {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n            }\n            .spaced-title {\n                margin-top: 60px;\n                margin-bottom: 20px;\n            }\n        }\n    ",document.head.appendChild($),D.id="printContainer",document.body.appendChild(D),window.print(),window.addEventListener("afterprint",()=>{this.clearData()}),setTimeout(()=>{this.clearData()},2e3)}clearData(){const i=document.getElementById("printContainer"),n=document.getElementById("printStyle");i&&document.body.removeChild(i),n&&document.head.removeChild(n)}filterData(){let i=this.tableData.slice();if(this.dueDateForm.get("start").value&&this.dueDateForm.get("end").value){const n=new Date(this.dueDateForm.get("start").value),o=new Date(this.dueDateForm.get("end").value);i=i.filter(c=>{const d=new Date(c?.return_date);return d>=n&&d<=o})}if(this.saleReturnDateForm.get("start").value&&this.saleReturnDateForm.get("end").value){const n=new Date(this.saleReturnDateForm.get("start").value),o=new Date(this.saleReturnDateForm.get("end").value);i=i.filter(c=>{const d=new Date(c?.bill_date);return d>=n&&d<=o})}this.selectSellBillNo&&(i=i.filter(n=>n?.sale_bill?.customer_bill_no===this.selectSellBillNo)),this.selectedAmount&&(i=i.filter(n=>n?.total<=this.selectedAmount)),this.filteredData=i}clearFilter(){this.date=null,this.selectedAmount=null,this.selectSellBillNo=null,this.saleReturnDateForm.reset(),this.dueDateForm.reset(),this.filterData()}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.filteredData?.length)}getBranch(){this.dashboardservice.getBranch().subscribe(i=>{this.branchList=i,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(i=>i.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(i,n){if(n)console.log(i),this.selectData.push(i),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const o=this.selectData.findIndex(c=>c==i);console.log(o),-1!==o&&this.selectData.splice(o,1),this.ngOnInit(),console.log(this.selectData)}}}return u.\u0275fac=function(i){return new(i||u)(e.Y36(t.M),e.Y36(R.J),e.Y36(m.uU),e.Y36(S.s),e.Y36(v.R))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-sales-return-list"]],decls:151,vars:24,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],["routerLink","//sales/addsalesReturn","class","btn btn-added",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search User/Bill No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,""],[1,"mb-1","pb-1"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["saleOrderDatePicker",""],["dueDatePicker",""],[1,"form-group"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//sales/addsalesReturn",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(i,n){if(1&i){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Sales Return list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Sales Return"),e.qZA()(),e.TgZ(6,"div",3)(7,"div",4)(8,"div",5),e.YNc(9,E,11,5,"div",6),e.qZA()(),e.YNc(10,O,3,0,"a",7),e.qZA()(),e.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),e._UZ(17,"img",14),e.TgZ(18,"span"),e._UZ(19,"img",15),e.qZA()()(),e.TgZ(20,"div",16)(21,"a",17),e._UZ(22,"img",18),e.qZA(),e.TgZ(23,"div",19)(24,"label")(25,"input",20),e.NdJ("ngModelChange",function(d){return n.titlee=d})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(30,"img",23),e.qZA()(),e.TgZ(31,"li")(32,"a",24),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(33,"img",25),e.qZA()(),e.TgZ(34,"li")(35,"a",26),e.NdJ("click",function(){return n.printTable()}),e._UZ(36,"img",27),e.qZA()()()()(),e.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label",33),e._uU(45,"Sale Return Date"),e.qZA(),e.TgZ(46,"mat-form-field",34)(47,"mat-date-range-input",35)(48,"input",36),e.NdJ("dateChange",function(){return n.filterData()}),e.qZA(),e.TgZ(49,"span",37)(50,"span",38),e._uU(51,"to"),e.qZA()(),e.TgZ(52,"input",39),e.NdJ("dateChange",function(){return n.filterData()}),e.qZA()(),e._UZ(53,"mat-datepicker-toggle",40)(54,"mat-date-range-picker",null,41),e.qZA()()(),e.TgZ(56,"div",31)(57,"div",32)(58,"label",33),e._uU(59,"Due Date"),e.qZA(),e.TgZ(60,"mat-form-field",34)(61,"mat-date-range-input",35)(62,"input",36),e.NdJ("dateChange",function(){return n.filterData()}),e.qZA(),e.TgZ(63,"span",37)(64,"span",38),e._uU(65,"to"),e.qZA()(),e.TgZ(66,"input",39),e.NdJ("dateChange",function(){return n.filterData()}),e.qZA()(),e._UZ(67,"mat-datepicker-toggle",40)(68,"mat-date-range-picker",null,42),e.qZA()()(),e.TgZ(70,"div",31)(71,"div",43)(72,"label"),e._uU(73,"Sell Bill No."),e.qZA(),e.TgZ(74,"select",44),e.NdJ("ngModelChange",function(d){return n.selectSellBillNo=d})("change",function(){return n.filterData()}),e.TgZ(75,"option",45),e._uU(76,"Select Sales Order No."),e.qZA(),e.YNc(77,F,2,2,"option",46),e.qZA()()(),e.TgZ(78,"div",31)(79,"div",43)(80,"label"),e._uU(81,"Enter Total Amount"),e.qZA(),e.TgZ(82,"input",47),e.NdJ("ngModelChange",function(d){return n.selectedAmount=d})("keyup",function(){return n.filterData()}),e.qZA(),e.TgZ(83,"span",48),e._uU(84,"Amount Filter (Less than & Equal to Total amount value)"),e.qZA()()()(),e.TgZ(85,"div",49),e.NdJ("click",function(){return n.clearFilter()}),e.TgZ(86,"a",50),e._uU(87,"Clear Filter"),e.qZA()()()()()(),e.TgZ(88,"div",51)(89,"table",52)(90,"thead")(91,"tr")(92,"th",53),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(93,"label",54),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(94,"input",55),e.NdJ("ngModelChange",function(d){return n.allSelected=d})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(95,"span",56),e.qZA(),e._UZ(96,"i",57),e.qZA(),e.TgZ(97,"th",53),e.NdJ("click",function(){return n.sort("id")}),e._uU(98,"Sr. No. "),e._UZ(99,"i",57),e.qZA(),e.TgZ(100,"th",53),e.NdJ("click",function(){return n.sort("id")}),e._uU(101,"Bill No."),e._UZ(102,"i",57),e.qZA(),e.TgZ(103,"th",53),e.NdJ("click",function(){return n.sort("id")}),e._uU(104,"User Name "),e._UZ(105,"i",57),e.qZA(),e.TgZ(106,"th",53),e.NdJ("click",function(){return n.sort("id")}),e._uU(107,"Bill Date "),e._UZ(108,"i",57),e.qZA(),e.TgZ(109,"th",53),e.NdJ("click",function(){return n.sort("id")}),e._uU(110,"Sales Bill"),e._UZ(111,"i",57),e.qZA(),e.TgZ(112,"th",53),e.NdJ("click",function(){return n.sort("id")}),e._uU(113,"Total Tax"),e._UZ(114,"i",57),e.qZA(),e.TgZ(115,"th",53),e.NdJ("click",function(){return n.sort("id")}),e._uU(116,"Total"),e._UZ(117,"i",57),e.qZA(),e.TgZ(118,"th",53),e.NdJ("click",function(){return n.sort("id")}),e._uU(119,"Status"),e._UZ(120,"i",57),e.qZA(),e.TgZ(121,"th",53),e.NdJ("click",function(){return n.sort("id")}),e._uU(122,"Action "),e._UZ(123,"i",57),e.qZA()()(),e.YNc(124,K,4,11,"tbody",58),e.YNc(125,W,5,0,"tbody",58),e.qZA(),e.TgZ(126,"div",59),e.YNc(127,z,1,0,"mat-progress-bar",60),e.qZA(),e.TgZ(128,"div",4)(129,"div",61)(130,"div",62),e._uU(131," Show per page "),e.TgZ(132,"select",63,64),e.NdJ("ngModelChange",function(d){return n.itemsPerPage=d})("change",function(){e.CHM(o);const d=e.MAs(133);return e.KtG(n.changePg(d.value))}),e.TgZ(134,"option",65),e._uU(135,"10"),e.qZA(),e.TgZ(136,"option",66),e._uU(137,"20"),e.qZA(),e.TgZ(138,"option",67),e._uU(139,"30"),e.qZA(),e.TgZ(140,"option",68),e._uU(141,"50"),e.qZA(),e.TgZ(142,"option",69),e._uU(143,"100"),e.qZA(),e.TgZ(144,"option",70),e._uU(145,"All"),e.qZA()()()(),e.TgZ(146,"div",71)(147,"div",72)(148,"pagination-controls",73),e.NdJ("pageChange",function(d){return n.p=d}),e.qZA(),e.TgZ(149,"div",74),e._uU(150),e.qZA()()()()()()()}if(2&i){const o=e.MAs(55),c=e.MAs(69);e.xp6(9),e.Q6J("ngIf",n.isAdmin),e.xp6(1),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(22),e.Q6J("formGroup",n.saleReturnDateForm)("rangePicker",o)("min",n.minDate)("max",n.maxDate),e.xp6(6),e.Q6J("for",o),e.xp6(8),e.Q6J("formGroup",n.dueDateForm)("rangePicker",c)("min",n.minDate)("max",n.maxDate),e.xp6(6),e.Q6J("for",c),e.xp6(7),e.Q6J("ngModel",n.selectSellBillNo),e.xp6(3),e.Q6J("ngForOf",n.saleBillList),e.xp6(5),e.Q6J("ngModel",n.selectedAmount),e.xp6(12),e.Q6J("ngModel",n.allSelected),e.xp6(30),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.filteredData?null:n.filteredData.length)),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq("Showing ",n.itemsPerPage," to ",null==n.filteredData?null:n.filteredData.length," of ",n.p," entries")}},dependencies:[m.mk,m.sg,m.O5,b.yS,s.YN,s.Kr,s.Fj,s.wV,s.Wl,s.EJ,s.JJ,s.JL,s.On,s.sg,s.u,C.pW,U.LS,Z.nW,Z.wx,Z.zY,Z.By,Z._g,L.KE,L.R9,U._s,B.T],styles:["input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:468%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}.mat-form-field-suffix[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.mat-form-field[_ngcontent-%COMP%]{padding-left:20px;height:40px;border-radius:6px}"]}),u})(),canActivate:[h(30597).l],data:{allowedRoles:["view_salereturn"]}}];let ee=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[b.Bz.forChild(X),b.Bz]}),u})();var te=h(8468),ie=h(3238);let ne=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({providers:[m.uU],imports:[m.ez,ee,te.I,Z.FA,L.lN,ie.XK]}),u})()},30597:(P,T,h)=>{h.d(T,{l:()=>x});var m=h(94650),b=h(4392),A=h(97185),f=h(42917),_=h(80927);let x=(()=>{class a{constructor(l,s,e,t,R){this.router=l,this.Arout=s,this.toastr=e,this.profileService=t,this.coreService=R}canActivate(l,s){const e=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(t=>{this.userDetails=t,this.permissions=this.userDetails?.permission}),e){const t=l.data.allowedRoles,R=e.some(v=>t.includes(v.codename));let S=this.coreService.profileData$.value;if(S&&S.username){this.userDetails=S,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(S);const v=S?.permission,C=this.profileService.getUserDetails();(!C||C.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}else this.coreService.getProfile().subscribe(v=>{this.userDetails=v,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(v);const C=v?.permission,U=this.profileService.getUserDetails();(!U||U.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())});if(R)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return a.\u0275fac=function(l){return new(l||a)(m.LFG(b.F0),m.LFG(b.gz),m.LFG(A._W),m.LFG(f.J),m.LFG(_.p))},a.\u0275prov=m.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()}}]);