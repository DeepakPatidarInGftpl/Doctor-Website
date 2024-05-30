"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[375],{60843:(D,y,h)=>{h.d(y,{s:()=>f});var m=h(92340),T=h(94650),E=h(80529);let f=(()=>{class _{constructor(n){this.http=n,this.apiUrl=`${m.N.api}`}getSalesNumber(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/numbers/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getCutomerRetention(n,o,l,t){let a=this.apiUrl+"/pv-api/customer-retention-rate/";const e=[];return n&&e.push(`start_date=${n}`),o&&e.push(`end_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getTotalSalePurchase(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getDailySales(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/daily-sales/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getSalevsPurchase(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getCategoryWiseSale(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getSubCatWiseSale(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getInventory(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const e=[];return n&&e.push(`start_date=${n}`),o&&e.push(`end_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getRecentlySales(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/recently-sale/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getRecentlyAddedProduct(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getBestSellingProduct(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getLeastSellingProduct(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getTotalRecvsPay(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getGrowth(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/growth-graph/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getGrossNetProfit(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const e=[];return n&&e.push(`start_date=${n}`),o&&e.push(`end_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getUnpaidInvoices(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getTotalReceivables(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/total-receivable/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getTodayPayables(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/total-payable/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getTodayExpense(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/expenses/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getDepartmentWiseTarget(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getEployeeTargetAchieved(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getEmployeeTop10(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getEmployeeTargetGraph(n,o,l,t){let a=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const e=[];return n&&e.push(`from_date=${n}`),o&&e.push(`to_date=${o}`),l&&e.push(`branch=${l}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getAnalysisInventoryList(n,o,l){let t=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const a=[];return n&&a.push(`start_date=${n}`),o&&a.push(`end_date=${o}`),l&&a.push(`financial_year=${l}`),a.length>0&&(t+="?"+a.join("&")),this.http.get(t)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(n,o,l){let t=this.apiUrl+"/api/reports/profit_and_loss/";const a=[];return n&&a.push(`start_date=${n}`),o&&a.push(`end_date=${o}`),a.length>0&&(t+="?"+a.join("&")),l&&a.push(`financial_year=${l}`),this.http.get(t)}}return _.\u0275fac=function(n){return new(n||_)(T.LFG(E.eN))},_.\u0275prov=T.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},10375:(D,y,h)=>{h.r(y),h.d(y,{EstimateListModule:()=>X});var m=h(36895),T=h(89299),E=h(2454),f=h.n(E),_=h(96166),A=h(12983),n=h.n(A),o=h(80574),l=h(94327),t=h(94650),a=h(72170),e=h(42917),Z=h(25062),C=h(60843),v=h(24006),L=h(73162),U=h(54333),P=h(54040);function q(u,d){if(1&u){const i=t.EpF();t.TgZ(0,"a",74)(1,"input",75,76),t.NdJ("change",function(r){const p=t.CHM(i).$implicit,g=t.oxw(2);return t.KtG(g.SelectedBranch(p.id,r.target.checked))}),t.qZA(),t.TgZ(3,"label",77),t.NdJ("click",function(r){t.CHM(i);const c=t.oxw(2);return t.KtG(c.onLabelClick(r))}),t._uU(4),t.qZA()()}if(2&u){const i=d.$implicit,s=d.index,r=t.oxw(2);t.xp6(1),t.Q6J("value",i.id)("checked",r.selectData.includes(i.id))("id","checkboxCat-"+s),t.xp6(2),t.Q6J("for","checkboxCat-"+s),t.xp6(1),t.Oqu(i.title)}}function w(u,d){if(1&u&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&u){const i=t.oxw(2);t.xp6(1),t.Oqu(i.selectData.length+" Selected")}}const J=function(){return{standalone:!0}};function N(u,d){if(1&u){const i=t.EpF();t.TgZ(0,"div",67)(1,"div",68)(2,"button",69),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",70)(5,"li")(6,"input",71),t.NdJ("ngModelChange",function(r){t.CHM(i);const c=t.oxw();return t.KtG(c.searchBranch=r)})("ngModelChange",function(){t.CHM(i);const r=t.oxw();return t.KtG(r.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,q,5,5,"a",72),t.qZA()()(),t.TgZ(9,"div",73),t.YNc(10,w,2,1,"span",7),t.qZA()()}if(2&u){const i=t.oxw();t.xp6(6),t.Q6J("ngModel",i.searchBranch)("ngModelOptions",t.DdM(4,J)),t.xp6(2),t.Q6J("ngForOf",i.filteredBranchList),t.xp6(2),t.Q6J("ngIf",i.selectData.length>0)}}function k(u,d){1&u&&(t.ynx(0),t.TgZ(1,"a",78),t._UZ(2,"img",79),t._uU(3,"Add Sales Estimate "),t.qZA(),t.BQk())}function O(u,d){if(1&u&&(t.TgZ(0,"option",80),t._uU(1),t.qZA()),2&u){const i=d.$implicit;t.s9C("value",null==i?null:i.title),t.xp6(1),t.Oqu(null==i?null:i.title)}}function B(u,d){if(1&u&&(t.TgZ(0,"a",87),t._UZ(1,"img",91),t.qZA()),2&u){const i=t.oxw().$implicit;t.MGl("routerLink","//sales/updatesalesEstimate/",i.id,"")}}function I(u,d){if(1&u){const i=t.EpF();t.TgZ(0,"a",92),t.NdJ("click",function(){t.CHM(i);const r=t.oxw(),c=r.index,p=r.$implicit,g=t.oxw(2);return t.KtG(g.confirmText(c,p.id))}),t._UZ(1,"img",93),t.qZA()}}const F=function(u,d,i){return{"bg-lightgreen":u,"bg-lightred":d,"bg-lightyellow":i}};function R(u,d){if(1&u){const i=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",82)(3,"input",83),t.NdJ("ngModelChange",function(r){const p=t.CHM(i).index,g=t.oxw(2);return t.KtG(g.selectedRows[p]=r)}),t.qZA(),t._UZ(4,"span",49),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",84)(8,"a",85),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td")(23,"span",86),t._uU(24),t.qZA()(),t.TgZ(25,"td")(26,"a",87),t._UZ(27,"img",88),t.qZA(),t.YNc(28,B,2,1,"a",89),t.YNc(29,I,2,0,"a",90),t.qZA()()}if(2&u){const i=d.$implicit,s=d.index,r=t.oxw(2);t.xp6(3),t.Q6J("ngModel",r.selectedRows[s]),t.xp6(3),t.Oqu(s+1),t.xp6(2),t.MGl("routerLink","//sales/salesEstimatedetails/",i.id,""),t.xp6(1),t.Oqu((null==i||null==i.customer?null:i.customer.name)+" ("+(null==i||null==i.customer?null:i.customer.username)+")"),t.xp6(2),t.Oqu(null==i?null:i.estimate_date),t.xp6(2),t.Oqu(i.estimate_no),t.xp6(2),t.Oqu(i.payment_terms.title),t.xp6(2),t.Oqu(null==i?null:i.estimate_expiry_date),t.xp6(2),t.Oqu(null==i?null:i.subtotal),t.xp6(2),t.Oqu(null==i?null:i.total),t.xp6(2),t.Q6J("ngClass",t.kEZ(15,F,"Converted to order"===i.status,"Expired"===i.status,"Draft"===i.status)),t.xp6(1),t.Oqu(i.status),t.xp6(2),t.MGl("routerLink","//sales/salesEstimatedetails/",i.id,""),t.xp6(2),t.Q6J("ngIf",r.isEdit),t.xp6(1),t.Q6J("ngIf",r.isDelete)}}const j=function(u,d){return{itemsPerPage:u,currentPage:d}};function Y(u,d){if(1&u&&(t.TgZ(0,"tbody"),t.YNc(1,R,30,19,"tr",81),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&u){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.filteredData,i.key,i.reverse),t.WLB(8,j,i.itemsPerPage,i.p)))}}function G(u,d){1&u&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",94)(3,"p",95),t._uU(4,"Data not available"),t.qZA()()()())}function Q(u,d){1&u&&t._UZ(0,"mat-progress-bar",96)}const W=[{path:"",component:(()=>{class u{constructor(i,s,r,c,p){this.saleService=i,this.cs=s,this.contactService=r,this.dashboardService=c,this.datePipe=p,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(i,s){f().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(r=>{r.isConfirmed&&this.saleService.deleteSalesEstimate(s).subscribe(c=>{this.delRes=c,this.delRes.success?(this.ngOnInit(),f().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(i,1)):f().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(i,s){f().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale estimate!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(r=>{r.isConfirmed&&this.saleService.SalesEstimateIsActive(s,"").subscribe(c=>{this.delRes=c,this.delRes.success&&(f().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(i,s){f().fire({title:"Are you sure?",text:"Do you want to Active this sale Estimate!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(r=>{r.isConfirmed&&this.saleService.SalesEstimateIsActive(s,"").subscribe(c=>{this.delRes=c,this.delRes.success&&(f().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){if(this.cs.userDetails$.subscribe(i=>{this.isAdmin="admin"==i.role}),localStorage.getItem("financialYear")){let i=localStorage.getItem("financialYear");console.warn(JSON.parse(i));let s=JSON.parse(i);this.getEstimate(s)}this.cs.userDetails$.subscribe(i=>{this.userDetails=i,this.userDetails?.permission?.map(r=>{"sale"===r.content_type.app_label&&"estimate"===r.content_type.model&&"add_estimate"==r.codename?this.isAdd=r.codename:"sale"===r.content_type.app_label&&"estimate"===r.content_type.model&&"change_estimate"==r.codename?this.isEdit=r.codename:"sale"===r.content_type.app_label&&"estimate"===r.content_type.model&&"delete_estimate"==r.codename&&(this.isDelete=r.codename)})}),this.getPaymentTerms(),this.getBranch()}getEstimate(i){const s=JSON.stringify(this.selectData);console.log(s),console.log(s?.length),this.saleService.getSalesEstimatefy(i,this.selectData).subscribe(r=>{this.tableData=r,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getPaymentTerms(){this.contactService.getPaymentTerms().subscribe(i=>{this.paymentList=i})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(i){this.tableData.forEach(i?s=>{s.isSelected=!1}:s=>{s.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const i=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(s=>{const r=s?.customer?.name.toLocaleLowerCase()||"",c=s?.customer?.username.toLocaleLowerCase()||"",p=s.estimate_no.toLocaleLowerCase();return!(!r.includes(i)&&!c.includes(i)&&!p.includes(i))})}}sort(i){this.key=i,this.reverse=!this.reverse}formatDate(i){return this.datePipe.transform(i,"yyyy-MM-dd")||""}generatePDF(){const i=new _.default;i.setFontSize(15),i.setTextColor(33,43,54),i.text("Estimate List",10,10),n()(i,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name "},{header:"Estimate Date "},{header:"Estimate no"},{header:"Payment Terms"},{header:"Expire Date"},{header:"Sub Total"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),i.save("estimate.pdf")}generatePDFAgain(){const i=new _.default;i.setFontSize(12),i.setTextColor(33,43,54),i.text("Estimate List",82,10),i.text("",10,15),n()(i,{head:[["#","User Name ","Estimate Date","Estimate no","Payment Terms","Expire Date","Sub Total","Total","Status"]],body:this.tableData.map((r,c)=>[c+1,r?.customer?.name+" ("+r?.customer?.username+")",this.formatDate(r?.estimate_date),r.estimate_no,r.payment_terms.title,this.formatDate(r?.estimate_expiry_date),r.subtotal,r.total,r?.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),i.save("Estimate List.pdf")}getVisibleDataFromTable(){const i=[],s=document.getElementById("mytable"),r=s.querySelector("thead tr"),c=s.querySelectorAll("tbody tr"),p=[];return r.querySelectorAll("th").forEach(g=>{const b=g.textContent.trim();"Is Active"!==b&&"Action"!==b&&p.push(b)}),i.push(p),c.forEach(g=>{const b=[];g.querySelectorAll("td").forEach($=>{b.push($.textContent.trim())}),i.push(b)}),i}exportToExcel(){const i=this.getVisibleDataFromTable(),s=o.P6.aoa_to_sheet(i),r=o.P6.book_new();o.P6.book_append_sheet(r,s,"Sheet1");const c=o.cW(r,{bookType:"xlsx",type:"array"}),p=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,l.saveAs)(p,"estimate.xlsx")}printTable(){const i=document.getElementById("mytable"),c=document.querySelector(".titl").outerHTML,p=i.cloneNode(!0),g=p.querySelector("th.thone:nth-child(11)");g&&g.remove();const b=p.querySelector("th.thone:last-child");b&&b.remove(),p.querySelectorAll("tr").forEach(x=>{const M=x.querySelector("td:nth-child(11)");M&&M.remove();const S=x.querySelector("td:last-child");S&&S.remove()});const tt=p.outerHTML,et="<style>.spaced-title { margin-top: 80px; }</style>"+c.replace("titl","spaced-title")+tt,it=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=et,window.print(),document.body.innerHTML=it}filterData(){let i=this.tableData.slice();if(this.date){const s=new Date(this.date).toISOString().split("T")[0];i=i.filter(r=>new Date(r?.estimate_date).toISOString().split("T")[0]===s)}if(this.espireDate){const s=new Date(this.espireDate).toISOString().split("T")[0];i=i.filter(r=>new Date(r?.estimate_expiry_date).toISOString().split("T")[0]===s)}this.filterPaymentTerms&&(i=i.filter(s=>s?.payment_terms?.title===this.filterPaymentTerms)),this.selectedAmount&&(i=i.filter(s=>s?.total<=this.selectedAmount)),this.statusFilter&&(i=i.filter(s=>s?.status===this.statusFilter)),this.filteredData=i}clearFilter(){this.date=null,this.espireDate=null,this.filterPaymentTerms=null,this.selectedAmount=null,this.statusFilter=null,this.filterData()}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.filteredData?.length)}getBranch(){this.dashboardService.getBranch().subscribe(i=>{this.branchList=i,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(i=>i.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(i,s){if(s)console.log(i),this.selectData.push(i),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const r=this.selectData.findIndex(c=>c==i);console.log(r),-1!==r&&this.selectData.splice(r,1),this.ngOnInit(),console.log(this.selectData)}}}return u.\u0275fac=function(i){return new(i||u)(t.Y36(a.M),t.Y36(e.J),t.Y36(Z.y),t.Y36(C.s),t.Y36(m.uU))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-estimate-list"]],decls:149,vars:17,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Customer/Estimate No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],["value","Draft"],["value","Expired"],["value","Converted to order"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//sales/addsalesEstimate",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(i,s){if(1&i){const r=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Sales Estimate list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Sales Estimate"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,N,11,5,"div",6),t.qZA()(),t.YNc(10,k,4,0,"ng-container",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(p){return s.titlee=p})("ngModelChange",function(){return s.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return s.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return s.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return s.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label"),t._uU(45,"Estimate Date"),t.qZA(),t.TgZ(46,"input",33),t.NdJ("ngModelChange",function(p){return s.date=p})("ngModelChange",function(){return s.filterData()}),t.qZA()()(),t.TgZ(47,"div",31)(48,"div",32)(49,"label"),t._uU(50,"Estimate Expire Date"),t.qZA(),t.TgZ(51,"input",33),t.NdJ("ngModelChange",function(p){return s.espireDate=p})("ngModelChange",function(){return s.filterData()}),t.qZA()()(),t.TgZ(52,"div",31)(53,"div",32)(54,"label"),t._uU(55,"Payment terms"),t.qZA(),t.TgZ(56,"select",34),t.NdJ("ngModelChange",function(p){return s.filterPaymentTerms=p})("change",function(){return s.filterData()}),t.TgZ(57,"option",35),t._uU(58,"Select Payment Terms"),t.qZA(),t.YNc(59,O,2,2,"option",36),t.qZA()()(),t.TgZ(60,"div",31)(61,"div",32)(62,"label"),t._uU(63,"Enter Total Amount"),t.qZA(),t.TgZ(64,"input",37),t.NdJ("ngModelChange",function(p){return s.selectedAmount=p})("keyup",function(){return s.filterData()}),t.qZA(),t.TgZ(65,"span",38),t._uU(66,"Amount Filter (Less than & Equal to Total amount value)"),t.qZA()()(),t.TgZ(67,"div",31)(68,"div",32)(69,"label"),t._uU(70,"Select Status"),t.qZA(),t.TgZ(71,"select",34),t.NdJ("ngModelChange",function(p){return s.statusFilter=p})("change",function(){return s.filterData()}),t.TgZ(72,"option",35),t._uU(73,"Select Status"),t.qZA(),t.TgZ(74,"option",39),t._uU(75,"Draft"),t.qZA(),t.TgZ(76,"option",40),t._uU(77,"Expired"),t.qZA(),t.TgZ(78,"option",41),t._uU(79,"Converted to order"),t.qZA()()()()(),t.TgZ(80,"div",42),t.NdJ("click",function(){return s.clearFilter()}),t.TgZ(81,"a",43),t._uU(82,"Clear Filter"),t.qZA()()()()()(),t.TgZ(83,"div",44)(84,"table",45)(85,"thead")(86,"tr")(87,"th",46),t.NdJ("click",function(){return s.sort("id")}),t.TgZ(88,"label",47),t.NdJ("click",function(){return s.selectAll(s.initChecked)}),t.TgZ(89,"input",48),t.NdJ("ngModelChange",function(p){return s.allSelected=p})("change",function(){return s.selectAlll()}),t.qZA(),t._UZ(90,"span",49),t.qZA(),t._UZ(91,"i",50),t.qZA(),t.TgZ(92,"th",46),t.NdJ("click",function(){return s.sort("id")}),t._uU(93,"Sr. No. "),t._UZ(94,"i",50),t.qZA(),t.TgZ(95,"th",46),t.NdJ("click",function(){return s.sort("id")}),t._uU(96,"User Name "),t._UZ(97,"i",50),t.qZA(),t.TgZ(98,"th",46),t.NdJ("click",function(){return s.sort("id")}),t._uU(99,"Estimate Date "),t._UZ(100,"i",50),t.qZA(),t.TgZ(101,"th",46),t.NdJ("click",function(){return s.sort("id")}),t._uU(102,"Estimate no "),t._UZ(103,"i",50),t.qZA(),t.TgZ(104,"th",46),t.NdJ("click",function(){return s.sort("id")}),t._uU(105,"Payment Terms "),t._UZ(106,"i",50),t.qZA(),t.TgZ(107,"th",46),t.NdJ("click",function(){return s.sort("id")}),t._uU(108,"Expire Date "),t._UZ(109,"i",50),t.qZA(),t.TgZ(110,"th",46),t.NdJ("click",function(){return s.sort("id")}),t._uU(111,"Sub Total"),t._UZ(112,"i",50),t.qZA(),t.TgZ(113,"th",46),t.NdJ("click",function(){return s.sort("id")}),t._uU(114,"Total"),t._UZ(115,"i",50),t.qZA(),t.TgZ(116,"th",46),t.NdJ("click",function(){return s.sort("id")}),t._uU(117,"Status"),t._UZ(118,"i",50),t.qZA(),t.TgZ(119,"th",46),t.NdJ("click",function(){return s.sort("id")}),t._uU(120,"Action "),t._UZ(121,"i",50),t.qZA()()(),t.YNc(122,Y,4,11,"tbody",7),t.YNc(123,G,5,0,"tbody",7),t.qZA(),t.TgZ(124,"div",51),t.YNc(125,Q,1,0,"mat-progress-bar",52),t.qZA(),t.TgZ(126,"div",4)(127,"div",53)(128,"div",54),t._uU(129," Show per page "),t.TgZ(130,"select",55,56),t.NdJ("ngModelChange",function(p){return s.itemsPerPage=p})("change",function(){t.CHM(r);const p=t.MAs(131);return t.KtG(s.changePg(p.value))}),t.TgZ(132,"option",57),t._uU(133,"10"),t.qZA(),t.TgZ(134,"option",58),t._uU(135,"20"),t.qZA(),t.TgZ(136,"option",59),t._uU(137,"30"),t.qZA(),t.TgZ(138,"option",60),t._uU(139,"50"),t.qZA(),t.TgZ(140,"option",61),t._uU(141,"100"),t.qZA(),t.TgZ(142,"option",62),t._uU(143,"All"),t.qZA()()()(),t.TgZ(144,"div",63)(145,"div",64)(146,"pagination-controls",65),t.NdJ("pageChange",function(p){return s.p=p}),t.qZA(),t.TgZ(147,"div",66),t._uU(148),t.qZA()()()()()()()}2&i&&(t.xp6(9),t.Q6J("ngIf",s.isAdmin),t.xp6(1),t.Q6J("ngIf",s.isAdd),t.xp6(15),t.Q6J("ngModel",s.titlee),t.xp6(21),t.Q6J("ngModel",s.date),t.xp6(5),t.Q6J("ngModel",s.espireDate),t.xp6(5),t.Q6J("ngModel",s.filterPaymentTerms),t.xp6(3),t.Q6J("ngForOf",s.paymentList),t.xp6(5),t.Q6J("ngModel",s.selectedAmount),t.xp6(7),t.Q6J("ngModel",s.statusFilter),t.xp6(18),t.Q6J("ngModel",s.allSelected),t.xp6(33),t.Q6J("ngIf",(null==s.filteredData?null:s.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==s.filteredData?null:s.filteredData.length)),t.xp6(2),t.Q6J("ngIf",s.loader),t.xp6(5),t.Q6J("ngModel",s.itemsPerPage),t.xp6(18),t.lnq("Showing ",s.itemsPerPage," to ",null==s.filteredData?null:s.filteredData.length," of ",s.p," entries"))},dependencies:[m.mk,m.sg,m.O5,T.yS,v.YN,v.Kr,v.Fj,v.wV,v.Wl,v.EJ,v.JJ,v.On,L.pW,U.LS,U._s,P.T],styles:["input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:421%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),u})(),canActivate:[h(30597).l],data:{allowedRoles:["view_estimate"]}}];let z=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[T.Bz.forChild(W),T.Bz]}),u})();var V=h(8468);let X=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({providers:[m.uU],imports:[m.ez,z,V.I]}),u})()},30597:(D,y,h)=>{h.d(y,{l:()=>A});var m=h(94650),T=h(89299),E=h(97185),f=h(42917),_=h(80927);let A=(()=>{class n{constructor(l,t,a,e,Z){this.router=l,this.Arout=t,this.toastr=a,this.profileService=e,this.coreService=Z}canActivate(l,t){const a=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(e=>{this.userDetails=e,this.permissions=this.userDetails?.permission}),a){const e=l.data.allowedRoles;console.log(e,"allowedRoles");const Z=a.some(C=>e.includes(C.codename));if(console.log(Z),this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails);const v=C?.permission,L=this.profileService.getUserDetails();(!L||L.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}),Z)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(l){return new(l||n)(m.LFG(T.F0),m.LFG(T.gz),m.LFG(E._W),m.LFG(f.J),m.LFG(_.p))},n.\u0275prov=m.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);