"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2795],{60843:(L,y,p)=>{p.d(y,{s:()=>f});var g=p(92340),v=p(94650),Z=p(80529);let f=(()=>{class _{constructor(n){this.http=n,this.apiUrl=`${g.N.api}`}getSalesNumber(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/numbers/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getCutomerRetention(n,l,r,t){let a=this.apiUrl+"/pv-api/customer-retention-rate/";const e=[];return n&&e.push(`start_date=${n}`),l&&e.push(`end_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getTotalSalePurchase(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getDailySales(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/daily-sales/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getSalevsPurchase(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getCategoryWiseSale(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getSubCatWiseSale(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getInventory(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const e=[];return n&&e.push(`start_date=${n}`),l&&e.push(`end_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getRecentlySales(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/recently-sale/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getRecentlyAddedProduct(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getBestSellingProduct(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getLeastSellingProduct(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getTotalRecvsPay(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getGrowth(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/growth-graph/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getGrossNetProfit(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const e=[];return n&&e.push(`start_date=${n}`),l&&e.push(`end_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getUnpaidInvoices(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getTotalReceivables(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/total-receivable/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getTodayPayables(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/total-payable/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getTodayExpense(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/expenses/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getDepartmentWiseTarget(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getEployeeTargetAchieved(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getEmployeeTop10(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getEmployeeTargetGraph(n,l,r,t){let a=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),r&&e.push(`branch=${r}`),t&&e.push(`financial_year=${t}`),e.length>0&&(a+="?"+e.join("&")),this.http.get(a)}getAnalysisInventoryList(n,l,r){let t=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const a=[];return n&&a.push(`start_date=${n}`),l&&a.push(`end_date=${l}`),r&&a.push(`financial_year=${r}`),a.length>0&&(t+="?"+a.join("&")),this.http.get(t)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(n,l,r){let t=this.apiUrl+"/api/reports/profit_and_loss/";const a=[];return n&&a.push(`start_date=${n}`),l&&a.push(`end_date=${l}`),a.length>0&&(t+="?"+a.join("&")),r&&a.push(`financial_year=${r}`),this.http.get(t)}}return _.\u0275fac=function(n){return new(n||_)(v.LFG(Z.eN))},_.\u0275prov=v.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},42795:(L,y,p)=>{p.r(y),p.d(y,{ListMaterialConsumptionModule:()=>X});var g=p(36895),v=p(89299),Z=p(2454),f=p.n(Z),_=p(96166),x=p(12983),n=p.n(x),l=p(80574),r=p(94327),t=p(94650),a=p(71071),e=p(42917),T=p(60843),M=p(25062),C=p(24006),A=p(73162),U=p(54333),S=p(54040);function N(c,h){if(1&c){const i=t.EpF();t.TgZ(0,"a",45)(1,"input",46,47),t.NdJ("change",function(s){const d=t.CHM(i).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(d.id,s.target.checked))}),t.qZA(),t.TgZ(3,"label",48),t.NdJ("click",function(s){t.CHM(i);const u=t.oxw(2);return t.KtG(u.onLabelClick(s))}),t._uU(4),t.qZA()()}if(2&c){const i=h.$implicit,o=h.index,s=t.oxw(2);t.xp6(1),t.Q6J("value",i.id)("checked",s.selectData.includes(i.id))("id","checkboxCat-"+o),t.xp6(2),t.Q6J("for","checkboxCat-"+o),t.xp6(1),t.Oqu(i.title)}}function w(c,h){if(1&c&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&c){const i=t.oxw(2);t.xp6(1),t.Oqu(i.selectData.length+" Selected")}}const k=function(){return{standalone:!0}};function B(c,h){if(1&c){const i=t.EpF();t.TgZ(0,"div",38)(1,"div",39)(2,"button",40),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",41)(5,"li")(6,"input",42),t.NdJ("ngModelChange",function(s){t.CHM(i);const u=t.oxw();return t.KtG(u.searchBranch=s)})("ngModelChange",function(){t.CHM(i);const s=t.oxw();return t.KtG(s.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,N,5,5,"a",43),t.qZA()()(),t.TgZ(9,"div",44),t.YNc(10,w,2,1,"span",7),t.qZA()()}if(2&c){const i=t.oxw();t.xp6(6),t.Q6J("ngModel",i.searchBranch)("ngModelOptions",t.DdM(4,k)),t.xp6(2),t.Q6J("ngForOf",i.filteredBranchList),t.xp6(2),t.Q6J("ngIf",i.selectData.length>0)}}function O(c,h){1&c&&(t.ynx(0),t.TgZ(1,"a",49),t._UZ(2,"img",50),t._uU(3,"Add New Material Consumption "),t.qZA(),t.BQk())}function J(c,h){if(1&c&&(t.TgZ(0,"a",57),t._UZ(1,"img",61),t.qZA()),2&c){const i=t.oxw().$implicit;t.MGl("routerLink","//transaction/updateMaterialConsuption/",i.id,"")}}function E(c,h){if(1&c){const i=t.EpF();t.TgZ(0,"a",62),t.NdJ("click",function(){t.CHM(i);const s=t.oxw(),u=s.index,d=s.$implicit,m=t.oxw(2);return t.KtG(m.confirmText(u,d.id))}),t._UZ(1,"img",63),t.qZA()}}const I=function(c,h,i){return{"bg-lightgreen":c,"bg-lightred":h,"bg-lightyellow":i}};function R(c,h){if(1&c){const i=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",52)(3,"input",53),t.NdJ("ngModelChange",function(s){const d=t.CHM(i).index,m=t.oxw(2);return t.KtG(m.selectedRows[d]=s)}),t.qZA(),t._UZ(4,"span",33),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",54)(8,"a",55),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.qZA(),t.TgZ(29,"td")(30,"span",56),t._uU(31),t.qZA()(),t.TgZ(32,"td")(33,"a",57),t._UZ(34,"img",58),t.qZA(),t.YNc(35,J,2,1,"a",59),t.YNc(36,E,2,0,"a",60),t.qZA()()}if(2&c){const i=h.$implicit,o=h.index,s=t.oxw(2);t.xp6(3),t.Q6J("ngModel",s.selectedRows[o]),t.xp6(3),t.Oqu(o+1),t.xp6(2),t.MGl("routerLink","//transaction/detailsMaterialConsuption/",i.id,""),t.xp6(1),t.Oqu(null==i||null==i.user?null:i.user.username),t.xp6(2),t.Oqu(t.xi3(12,18,null==i?null:i.consumption_date,"dd-MMMM-yyyy")),t.xp6(3),t.Oqu(null==i?null:i.prefix),t.xp6(2),t.Oqu(i.consumption_type),t.xp6(2),t.Oqu(i.consumption_no),t.xp6(2),t.Oqu(null==i.barcode?null:i.barcode.product_title),t.xp6(2),t.Oqu(i.price),t.xp6(2),t.Oqu(i.qty),t.xp6(2),t.Oqu(i.total_action),t.xp6(2),t.Oqu(i.remark),t.xp6(2),t.Q6J("ngClass",t.kEZ(21,I,"Complete"===i.status,"Pending"===i.status,"Ordered"===i.status)),t.xp6(1),t.Oqu(i.status),t.xp6(2),t.MGl("routerLink","//transaction/detailsMaterialConsuption/",i.id,""),t.xp6(2),t.Q6J("ngIf",s.isEdit),t.xp6(1),t.Q6J("ngIf",s.isDelete)}}const F=function(c,h){return{itemsPerPage:c,currentPage:h}};function j(c,h){if(1&c&&(t.TgZ(0,"tbody"),t.YNc(1,R,37,25,"tr",51),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&c){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.filteredData,i.key,i.reverse),t.WLB(8,F,i.itemsPerPage,i.p)))}}function G(c,h){1&c&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",64)(3,"p",65),t._uU(4,"Data not available"),t.qZA()()()())}function Y(c,h){1&c&&t._UZ(0,"mat-progress-bar",66)}function Q(c,h){if(1&c){const i=t.EpF();t.TgZ(0,"div",4)(1,"div",67)(2,"div",68),t._uU(3," Show per page "),t.TgZ(4,"select",69,70),t.NdJ("ngModelChange",function(s){t.CHM(i);const u=t.oxw();return t.KtG(u.itemsPerPage=s)})("change",function(){t.CHM(i);const s=t.MAs(5),u=t.oxw();return t.KtG(u.changePg(s.value))}),t.TgZ(6,"option",71),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",72),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",73),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",74),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",75),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",76),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",77)(19,"div",78)(20,"pagination-controls",79),t.NdJ("pageChange",function(s){t.CHM(i);const u=t.oxw();return t.KtG(u.p=s)}),t.qZA(),t.TgZ(21,"div",80),t._uU(22),t.qZA()()()()}if(2&c){const i=t.oxw();t.xp6(4),t.Q6J("ngModel",i.itemsPerPage),t.xp6(18),t.lnq("Showing ",i.itemsPerPage," to ",null==i.tableData?null:i.tableData.length," of ",i.p," entries")}}const W=[{path:"",component:(()=>{class c{constructor(i,o,s,u){this.transactionService=i,this.cs=o,this.dashboardservice=s,this.contactservice=u,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(i,o){f().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.transactionService.deleteMaterialConsuption(o).subscribe(u=>{this.delRes=u,this.delRes.success?(f().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(i,1),this.ngOnInit()):f().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(i,o){f().fire({title:"Are you sure?",text:"Do you want to Deactivate this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.transactionService.MaterialConsuptionIsActive(o,"").subscribe(u=>{this.delRes=u,this.delRes.success?(f().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):f().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(i,o){f().fire({title:"Are you sure?",text:"Do you want to Active this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.transactionService.MaterialConsuptionIsActive(o,"").subscribe(u=>{this.delRes=u,this.delRes.success?(f().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):f().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){if(this.transactionService.getMaterialConsuption().subscribe(i=>{this.tableData=i,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(i=>{this.isAdmin="admin"==i.role}),localStorage.getItem("financialYear")){let i=localStorage.getItem("financialYear");console.warn(JSON.parse(i));let o=JSON.parse(i);this.getEstimate(o)}this.cs.userDetails$.subscribe(i=>{this.userDetails=i,this.userDetails?.permission?.map(s=>{"inventory"===s.content_type.app_label&&"materialconsumption"===s.content_type.model&&"add_materialconsumption"==s.codename?this.isAdd=s.codename:"inventory"===s.content_type.app_label&&"materialconsumption"===s.content_type.model&&"change_materialconsumption"==s.codename?this.isEdit=s.codename:"inventory"===s.content_type.app_label&&"materialconsumption"===s.content_type.model&&"delete_materialconsumption"==s.codename&&(this.isDelete=s.codename)})}),this.getPaymentTerms(),this.getBranch()}getPaymentTerms(){this.contactservice.getPaymentTerms().subscribe(i=>{this.paymentList=i})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(i){this.tableData.forEach(i?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const i=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(o=>{const s=o?.user?.username.toLocaleLowerCase(),u=o?.barcode?.product_title.toLocaleLowerCase();return!!s.match(i)||!!u.match(i)})}}sort(i){this.key=i,this.reverse=!this.reverse}generatePDF(){const i=new _.default;i.setFontSize(15),i.setTextColor(33,43,54),i.text("Debit Note",10,10),n()(i,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name "},{header:"Debit Note Date"},{header:"Debit Note No"},{header:"Purchase Bill"},{header:"Reason"},{header:"Amount"},{header:"Tax"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),i.save("debitnote.pdf")}generatePDFAgain(){const i=new _.default("landscape");i.setFontSize(12),i.setTextColor(33,43,54),i.text("Material Consuption",82,10),i.text("",10,15),n()(i,{head:[["#","User","Prefix","Date","Consuption Type","Consuption No","Product","Price","QTY","Total","Remark","Status"]],body:this.tableData.map((s,u)=>[u+1,s.user?.username,s.consumption_date,s.prefix,s.consumption_type,s.consumption_no,s.barcode?.product_title,s.price,s.qty,s.total_action,s.remark,s.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),i.save("Material Consuption .pdf")}getVisibleDataFromTable(){const i=[],o=document.getElementById("mytable"),s=o.querySelector("thead tr"),u=o.querySelectorAll("tbody tr"),d=[];return s.querySelectorAll("th").forEach(m=>{const b=m.textContent.trim();"Is Active"!==b&&"Action"!==b&&d.push(b)}),i.push(d),u.forEach(m=>{const b=[];m.querySelectorAll("td").forEach($=>{b.push($.textContent.trim())}),i.push(b)}),i}exportToExcel(){const i=this.getVisibleDataFromTable(),o=l.P6.aoa_to_sheet(i),s=l.P6.book_new();l.P6.book_append_sheet(s,o,"Sheet1");const u=l.cW(s,{bookType:"xlsx",type:"array"}),d=new Blob([u],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,r.saveAs)(d,"debitnote.xlsx")}printTable(){const i=document.getElementById("mytable"),u=document.querySelector(".titl").outerHTML,d=i.cloneNode(!0),m=d.querySelector("th.thone:nth-child(12)");m&&m.remove();const b=d.querySelector("th.thone:last-child");b&&b.remove(),d.querySelectorAll("tr").forEach(D=>{const P=D.querySelector("td:nth-child(12)");P&&P.remove();const q=D.querySelector("td:last-child");q&&q.remove()});const tt=d.outerHTML,et="<style>.spaced-title { margin-top: 80px; }</style>"+u.replace("titl","spaced-title")+tt,it=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=et,window.print(),document.body.innerHTML=it}filterData(){let i=this.tableData.slice();if(this.date){const o=new Date(this.date).toISOString().split("T")[0];i=i.filter(s=>new Date(s?.date).toISOString().split("T")[0]===o)}this.selectedAmount&&(i=i.filter(o=>o?.amount<=this.selectedAmount)),this.filteredData=i}clearFilters(){this.selectedAmount=null,this.date=null,this.filterData()}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.tableData.length)}getEstimate(i){const o=JSON.stringify(this.selectData);console.log(o),console.log(o?.length),this.transactionService.getMaterialConsuptionFy(i,this.selectData).subscribe(s=>{this.tableData=s,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getBranch(){this.dashboardservice.getBranch().subscribe(i=>{this.branchList=i,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(i=>i.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(i,o){if(o)console.log(i),this.selectData.push(i),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const s=this.selectData.findIndex(u=>u==i);console.log(s),-1!==s&&this.selectData.splice(s,1),this.ngOnInit(),console.log(this.selectData)}}}return c.\u0275fac=function(i){return new(i||c)(t.Y36(a.p),t.Y36(e.J),t.Y36(T.s),t.Y36(M.y))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-list-material-consumption"]],decls:90,vars:8,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","User/Product",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//transaction/addMaterialConsuption",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Material Consumption LIST"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Material Consumption"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,B,11,5,"div",6),t.qZA()(),t.YNc(10,O,4,0,"ng-container",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(u){return o.titlee=u})("ngModelChange",function(){return o.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return o.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return o.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"table",29)(39,"thead")(40,"tr")(41,"th",30),t.NdJ("click",function(){return o.sort("id")}),t.TgZ(42,"label",31),t.NdJ("click",function(){return o.selectAll(o.initChecked)}),t.TgZ(43,"input",32),t.NdJ("ngModelChange",function(u){return o.allSelected=u})("change",function(){return o.selectAlll()}),t.qZA(),t._UZ(44,"span",33),t.qZA(),t._UZ(45,"i",34),t.qZA(),t.TgZ(46,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(47,"Sr. No."),t._UZ(48,"i",34),t.qZA(),t.TgZ(49,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(50,"User"),t._UZ(51,"i",34),t.qZA(),t.TgZ(52,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(53,"Prefix"),t._UZ(54,"i",34),t.qZA(),t.TgZ(55,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(56,"Date"),t._UZ(57,"i",34),t.qZA(),t.TgZ(58,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(59,"Consumption Type"),t._UZ(60,"i",34),t.qZA(),t.TgZ(61,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(62,"Consumption No"),t._UZ(63,"i",34),t.qZA(),t.TgZ(64,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(65,"Product"),t._UZ(66,"i",34),t.qZA(),t.TgZ(67,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(68,"Price "),t._UZ(69,"i",34),t.qZA(),t.TgZ(70,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(71,"QTY "),t._UZ(72,"i",34),t.qZA(),t.TgZ(73,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(74,"Total "),t._UZ(75,"i",34),t.qZA(),t.TgZ(76,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(77,"Remark"),t._UZ(78,"i",34),t.qZA(),t.TgZ(79,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(80,"Status "),t._UZ(81,"i",34),t.qZA(),t.TgZ(82,"th",30),t.NdJ("click",function(){return o.sort("id")}),t._uU(83,"Action "),t._UZ(84,"i",34),t.qZA()()(),t.YNc(85,j,4,11,"tbody",7),t.YNc(86,G,5,0,"tbody",7),t.qZA(),t.TgZ(87,"div",35),t.YNc(88,Y,1,0,"mat-progress-bar",36),t.qZA(),t.YNc(89,Q,23,4,"div",37),t.qZA()()()),2&i&&(t.xp6(9),t.Q6J("ngIf",o.isAdmin),t.xp6(1),t.Q6J("ngIf",o.isAdd),t.xp6(15),t.Q6J("ngModel",o.titlee),t.xp6(18),t.Q6J("ngModel",o.allSelected),t.xp6(42),t.Q6J("ngIf",(null==o.filteredData?null:o.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==o.filteredData?null:o.filteredData.length)&&!o.loader),t.xp6(2),t.Q6J("ngIf",o.loader),t.xp6(1),t.Q6J("ngIf",!o.loader))},dependencies:[g.mk,g.sg,g.O5,v.yS,C.YN,C.Kr,C.Fj,C.Wl,C.EJ,C.JJ,C.On,A.pW,U.LS,g.uU,U._s,S.T],styles:["input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:293%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),c})(),canActivate:[p(30597).l],data:{allowedRoles:["view_materialconsumption"]}}];let z=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[v.Bz.forChild(W),v.Bz]}),c})();var V=p(8468);let X=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[g.ez,z,V.I]}),c})()},30597:(L,y,p)=>{p.d(y,{l:()=>x});var g=p(94650),v=p(89299),Z=p(97185),f=p(42917),_=p(80927);let x=(()=>{class n{constructor(r,t,a,e,T){this.router=r,this.Arout=t,this.toastr=a,this.profileService=e,this.coreService=T}canActivate(r,t){const a=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(e=>{this.userDetails=e,this.permissions=this.userDetails?.permission}),a){const e=r.data.allowedRoles;console.log(e,"allowedRoles");const T=a.some(M=>e.includes(M.codename));if(console.log(T),this.coreService.getProfile().subscribe(M=>{this.userDetails=M,this.profileService.setUserDetails(this.userDetails);const C=M?.permission,A=this.profileService.getUserDetails();(!A||A.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())}),T)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(r){return new(r||n)(g.LFG(v.F0),g.LFG(v.gz),g.LFG(Z._W),g.LFG(f.J),g.LFG(_.p))},n.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);