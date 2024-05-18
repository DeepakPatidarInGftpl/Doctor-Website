"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8172],{60843:(O,M,c)=>{c.d(M,{s:()=>f});var p=c(92340),v=c(94650),Z=c(80529);let f=(()=>{class _{constructor(s){this.http=s,this.apiUrl=`${p.N.api}`}getSalesNumber(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/numbers/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getCutomerRetention(s,r,n){let t=this.apiUrl+"/pv-api/customer-retention-rate/";const e=[];return s&&e.push(`start_date=${s}`),r&&e.push(`end_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getTotalSalePurchase(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getDailySales(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/daily-sales/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getSalevsPurchase(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getCategoryWiseSale(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getSubCatWiseSale(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getInventory(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const e=[];return s&&e.push(`start_date=${s}`),r&&e.push(`end_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getRecentlySales(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/recently-sale/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getRecentlyAddedProduct(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getBestSellingProduct(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getLeastSellingProduct(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getTotalRecvsPay(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getGrowth(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/growth-graph/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getGrossNetProfit(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const e=[];return s&&e.push(`start_date=${s}`),r&&e.push(`end_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getUnpaidInvoices(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getTotalReceivables(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/total-receivable/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getTodayPayables(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/total-payable/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getTodayExpense(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/expenses/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getDepartmentWiseTarget(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getEployeeTargetAchieved(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getEmployeeTop10(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getEmployeeTargetGraph(s,r,n){let t=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const e=[];return s&&e.push(`from_date=${s}`),r&&e.push(`to_date=${r}`),n&&e.push(`branch=${n}`),e.length>0&&(t+="?"+e.join("&")),this.http.get(t)}getAnalysisInventoryList(s,r){let n=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const t=[];return s&&t.push(`start_date=${s}`),r&&t.push(`end_date=${r}`),t.length>0&&(n+="?"+t.join("&")),this.http.get(n)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(s,r){let n=this.apiUrl+"/api/reports/profit_and_loss/";const t=[];return s&&t.push(`start_date=${s}`),r&&t.push(`end_date=${r}`),t.length>0&&(n+="?"+t.join("&")),this.http.get(n)}}return _.\u0275fac=function(s){return new(s||_)(v.LFG(Z.eN))},_.\u0275prov=v.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},78172:(O,M,c)=>{c.r(M),c.d(M,{MaterialOutwardListModule:()=>z});var p=c(36895),v=c(89299),Z=c(2454),f=c.n(Z),_=c(96166),w=c(12983),s=c.n(w),r=c(80574),n=c(94327),t=c(94650),e=c(72170),y=c(42917),T=c(60843),m=c(24006),A=c(73162),C=c(54333),x=c(54040);function q(u,h){if(1&u){const i=t.EpF();t.TgZ(0,"a",74)(1,"input",75,76),t.NdJ("change",function(l){const d=t.CHM(i).$implicit,g=t.oxw(2);return t.KtG(g.SelectedBranch(d.id,l.target.checked))}),t.qZA(),t.TgZ(3,"label",77),t.NdJ("click",function(l){t.CHM(i);const o=t.oxw(2);return t.KtG(o.onLabelClick(l))}),t._uU(4),t.qZA()()}if(2&u){const i=h.$implicit,a=h.index,l=t.oxw(2);t.xp6(1),t.Q6J("value",i.id)("checked",l.selectData.includes(i.id))("id","checkboxCat-"+a),t.xp6(2),t.Q6J("for","checkboxCat-"+a),t.xp6(1),t.Oqu(i.title)}}function $(u,h){if(1&u&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&u){const i=t.oxw(2);t.xp6(1),t.Oqu(i.selectData.length+" Selected")}}const P=function(){return{standalone:!0}};function N(u,h){if(1&u){const i=t.EpF();t.TgZ(0,"div",67)(1,"div",68)(2,"button",69),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",70)(5,"li")(6,"input",71),t.NdJ("ngModelChange",function(l){t.CHM(i);const o=t.oxw();return t.KtG(o.searchBranch=l)})("ngModelChange",function(){t.CHM(i);const l=t.oxw();return t.KtG(l.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,q,5,5,"a",72),t.qZA()()(),t.TgZ(9,"div",73),t.YNc(10,$,2,1,"span",50),t.qZA()()}if(2&u){const i=t.oxw();t.xp6(6),t.Q6J("ngModel",i.searchBranch)("ngModelOptions",t.DdM(4,P)),t.xp6(2),t.Q6J("ngForOf",i.filteredBranchList),t.xp6(2),t.Q6J("ngIf",i.selectData.length>0)}}function k(u,h){1&u&&(t.TgZ(0,"a",78),t._UZ(1,"img",79),t._uU(2,"Add Sales Material Outward "),t.qZA())}function J(u,h){if(1&u&&(t.TgZ(0,"a",86),t._UZ(1,"img",90),t.qZA()),2&u){const i=t.oxw().$implicit;t.MGl("routerLink","//sales/updatesalesMaterialOutward/",i.id,"")}}function B(u,h){if(1&u){const i=t.EpF();t.TgZ(0,"a",91),t.NdJ("click",function(){t.CHM(i);const l=t.oxw(),o=l.index,d=l.$implicit,g=t.oxw(2);return t.KtG(g.confirmText(o,d.id))}),t._UZ(1,"img",92),t.qZA()}}const E=function(u,h,i){return{"bg-lightgreen":u,"bg-lightred":h,"bg-lightyellow":i}};function R(u,h){if(1&u){const i=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",81)(3,"input",82),t.NdJ("ngModelChange",function(l){const d=t.CHM(i).index,g=t.oxw(2);return t.KtG(g.selectedRows[d]=l)}),t.qZA(),t._UZ(4,"span",48),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",83)(8,"a",84),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",85),t._uU(22),t.qZA()(),t.TgZ(23,"td")(24,"a",86),t._UZ(25,"img",87),t.qZA(),t.YNc(26,J,2,1,"a",88),t.YNc(27,B,2,0,"a",89),t.qZA()()}if(2&u){const i=h.$implicit,a=h.index,l=t.oxw(2);t.xp6(3),t.Q6J("ngModel",l.selectedRows[a]),t.xp6(3),t.Oqu(a+1),t.xp6(2),t.MGl("routerLink","//sales/salesMaterialOutwardDetails/",i.id,""),t.xp6(1),t.Oqu((null==i||null==i.customer?null:i.customer.name)+" ("+(null==i||null==i.customer?null:i.customer.username)+")"),t.xp6(2),t.Oqu(null==i?null:i.mo_date),t.xp6(2),t.Oqu(null==i?null:i.refund_status),t.xp6(2),t.Oqu(null==i?null:i.voucher_number),t.xp6(2),t.Oqu(null==i?null:i.total_qty),t.xp6(2),t.Oqu(null==i?null:i.note),t.xp6(2),t.Q6J("ngClass",t.kEZ(14,E,"Received"===(null==i?null:i.status),"Pending"===(null==i?null:i.status),"Draft"===(null==i?null:i.status))),t.xp6(1),t.Oqu(null==i?null:i.status),t.xp6(2),t.MGl("routerLink","//sales/salesMaterialOutwardDetails/",i.id,""),t.xp6(2),t.Q6J("ngIf",l.isEdit),t.xp6(1),t.Q6J("ngIf",l.isDelete)}}const I=function(u,h){return{itemsPerPage:u,currentPage:h}};function F(u,h){if(1&u&&(t.TgZ(0,"tbody"),t.YNc(1,R,28,18,"tr",80),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&u){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.filteredData,i.key,i.reverse),t.WLB(8,I,i.itemsPerPage,i.p)))}}function j(u,h){1&u&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",93)(3,"p",94),t._uU(4,"Data not available"),t.qZA()()()())}function Q(u,h){1&u&&t._UZ(0,"mat-progress-bar",95)}const H=[{path:"",component:(()=>{class u{constructor(i,a,l,o){this.saleService=i,this.cs=a,this.datePipe=l,this.dashboardservice=o,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(i,a){f().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.saleService.deleteSalesMaterialOutward(a).subscribe(o=>{this.delRes=o,this.delRes.success?(this.ngOnInit(),f().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(i,1)):f().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(i,a){f().fire({title:"Are you sure?",text:"Do you want to Deactivate this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.saleService.SalesMaterialOutwardIsActive(a,"").subscribe(o=>{this.delRes=o,this.delRes.success&&(f().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(i,a){f().fire({title:"Are you sure?",text:"Do you want to Active this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.saleService.SalesMaterialOutwardIsActive(a,"").subscribe(o=>{this.delRes=o,this.delRes.success&&(f().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){if(localStorage.getItem("financialYear")){let i=localStorage.getItem("financialYear");console.warn(JSON.parse(i));let a=JSON.parse(i);this.getSaleMaterialOutwardFY(a)}this.cs.userDetails$.subscribe(i=>{this.isAdmin="admin"==i.role}),this.cs.userDetails$.subscribe(i=>{this.userDetails=i,this.userDetails?.permission?.map(l=>{"sale"===l.content_type.app_label&&"materialoutward"===l.content_type.model&&"add_materialoutward"==l.codename?this.isAdd=l.codename:"sale"===l.content_type.app_label&&"materialoutward"===l.content_type.model&&"change_materialoutward"==l.codename?this.isEdit=l.codename:"sale"===l.content_type.app_label&&"materialoutward"===l.content_type.model&&"delete_materialoutward"==l.codename&&(this.isDelete=l.codename)})}),this.getBranch()}getSaleMaterialOutwardFY(i){const a=JSON.stringify(this.selectData);console.log(a),console.log(a?.length),this.saleService.getSalesMaterialOutwardfy(i,this.selectData).subscribe(l=>{this.tableData=l,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(i){this.tableData.forEach(i?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const i=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(a=>{const l=a?.customer?.name.toLocaleLowerCase(),o=a?.customer?.username.toLocaleLowerCase()||"",d=a?.voucher_number.toLocaleLowerCase();return!(!l.match(i)&&!o.includes(i)&&!d.match(i))})}}sort(i){this.key=i,this.reverse=!this.reverse}formatDate(i){return this.datePipe.transform(i,"yyyy-MM-dd")||""}generatePDF(){const i=new _.default;i.setFontSize(15),i.setTextColor(33,43,54),i.text("Material Outward List",10,10),s()(i,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name"},{header:"Material Outward Date "},{header:"Refund Status"},{header:"Voucher Number"},{header:"Total Qty"},{header:"Note"},{header:"Status"},{header:"Is Active"}]}),i.save("materialoutward.pdf")}generatePDFAgain(){const i=new _.default;i.setFontSize(12),i.setTextColor(33,43,54),i.text("Material Outward List",82,10),i.text("",10,15),s()(i,{head:[["#","User Name","Material Outward Date ","Refund Status","Voucher Number","Total Qty","Note","Status"]],body:this.tableData.map((l,o)=>[o+1,l?.customer?.name+" ("+l?.customer?.username+")",this.formatDate(l?.mo_date),l.refund_status,l.voucher_number,l.total_qty,l?.note,l?.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),i.save("Material Outward .pdf")}getVisibleDataFromTable(){const i=[],a=document.getElementById("mytable"),l=a.querySelector("thead tr"),o=a.querySelectorAll("tbody tr"),d=[];return l.querySelectorAll("th").forEach(g=>{const b=g.textContent.trim();"Is Active"!==b&&"Action"!==b&&d.push(b)}),i.push(d),o.forEach(g=>{const b=[];g.querySelectorAll("td").forEach(L=>{b.push(L.textContent.trim())}),i.push(b)}),i}exportToExcel(){const i=this.getVisibleDataFromTable(),a=r.P6.aoa_to_sheet(i),l=r.P6.book_new();r.P6.book_append_sheet(l,a,"Sheet1");const o=r.cW(l,{bookType:"xlsx",type:"array"}),d=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,n.saveAs)(d,"materialoutward.xlsx")}printTable(){const i=document.getElementById("mytable"),o=document.querySelector(".titl").outerHTML,d=i.cloneNode(!0),g=d.querySelector("th.thone:nth-child(10)");g&&g.remove();const b=d.querySelector("th.thone:last-child");b&&b.remove(),d.querySelectorAll("tr").forEach(U=>{const D=U.querySelector("td:nth-child(10)");D&&D.remove();const S=U.querySelector("td:last-child");S&&S.remove()});const V=d.outerHTML,X="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+V,tt=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=X,window.print(),document.body.innerHTML=tt}filterData(){let i=this.tableData.slice();if(this.date){const a=new Date(this.date).toISOString().split("T")[0];i=i.filter(l=>new Date(l?.mo_date).toISOString().split("T")[0]===a)}this.selectRefundStatus&&(i=i.filter(a=>a?.refund_status===this.selectRefundStatus)),this.selectedAmount&&(i=i.filter(a=>a?.total_qty<=this.selectedAmount)),this.statusFilter&&(i=i.filter(a=>a?.status==this.statusFilter)),this.filteredData=i}clearFilter(){this.date=null,this.selectRefundStatus=null,this.selectedAmount=null,this.statusFilter=null,this.filterData()}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.filteredData.length)}getBranch(){this.dashboardservice.getBranch().subscribe(i=>{this.branchList=i,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(i=>i.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(i,a){if(a)console.log(i),this.selectData.push(i),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const l=this.selectData.findIndex(o=>o==i);console.log(l),-1!==l&&this.selectData.splice(l,1),this.ngOnInit(),console.log(this.selectData)}}}return u.\u0275fac=function(i){return new(i||u)(t.Y36(e.M),t.Y36(y.J),t.Y36(p.uU),t.Y36(T.s))},u.\u0275cmp=t.Xpm({type:u,selectors:[["app-material-outward-list"]],decls:133,vars:14,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],["routerLink","//sales/addSalesMaterialOutward","class","btn btn-added",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search User Name/Voucher No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],["value","Refundable"],["value","Non Refundable"],["value","Scrap"],["type","number","placeholder","Enter Qty",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//sales/addSalesMaterialOutward",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(i,a){if(1&i){const l=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Sales Material Outward list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Sales Material Outward"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,N,11,5,"div",6),t.qZA()(),t.YNc(10,k,3,0,"a",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(d){return a.titlee=d})("ngModelChange",function(){return a.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return a.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return a.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return a.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label"),t._uU(45,"Material Outward Date"),t.qZA(),t.TgZ(46,"input",33),t.NdJ("ngModelChange",function(d){return a.date=d})("ngModelChange",function(){return a.filterData()}),t.qZA()()(),t.TgZ(47,"div",31)(48,"div",32)(49,"label"),t._uU(50,"Select Refund Status"),t.qZA(),t.TgZ(51,"select",34),t.NdJ("ngModelChange",function(d){return a.selectRefundStatus=d})("change",function(){return a.filterData()}),t.TgZ(52,"option",35),t._uU(53,"Select Refund Status"),t.qZA(),t.TgZ(54,"option",36),t._uU(55,"Refundable"),t.qZA(),t.TgZ(56,"option",37),t._uU(57,"Non Refundable"),t.qZA(),t.TgZ(58,"option",38),t._uU(59,"Scrap"),t.qZA()()()(),t.TgZ(60,"div",31)(61,"div",32)(62,"label"),t._uU(63,"Enter Total Qty"),t.qZA(),t.TgZ(64,"input",39),t.NdJ("ngModelChange",function(d){return a.selectedAmount=d})("keyup",function(){return a.filterData()}),t.qZA(),t.TgZ(65,"span",40),t._uU(66,"Qty Filter (Less than & Equal to Total qty value)"),t.qZA()()()(),t.TgZ(67,"div",41),t.NdJ("click",function(){return a.clearFilter()}),t.TgZ(68,"a",42),t._uU(69,"Clear Filter"),t.qZA()()()()()(),t.TgZ(70,"div",43)(71,"table",44)(72,"thead")(73,"tr")(74,"th",45),t.NdJ("click",function(){return a.sort("id")}),t.TgZ(75,"label",46),t.NdJ("click",function(){return a.selectAll(a.initChecked)}),t.TgZ(76,"input",47),t.NdJ("ngModelChange",function(d){return a.allSelected=d})("change",function(){return a.selectAlll()}),t.qZA(),t._UZ(77,"span",48),t.qZA(),t._UZ(78,"i",49),t.qZA(),t.TgZ(79,"th",45),t.NdJ("click",function(){return a.sort("id")}),t._uU(80,"Sr. No. "),t._UZ(81,"i",49),t.qZA(),t.TgZ(82,"th",45),t.NdJ("click",function(){return a.sort("id")}),t._uU(83,"User Name "),t._UZ(84,"i",49),t.qZA(),t.TgZ(85,"th",45),t.NdJ("click",function(){return a.sort("id")}),t._uU(86,"Material Outward Date "),t._UZ(87,"i",49),t.qZA(),t.TgZ(88,"th",45),t.NdJ("click",function(){return a.sort("id")}),t._uU(89,"Refund Status"),t._UZ(90,"i",49),t.qZA(),t.TgZ(91,"th",45),t.NdJ("click",function(){return a.sort("id")}),t._uU(92,"Voucher Number "),t._UZ(93,"i",49),t.qZA(),t.TgZ(94,"th",45),t.NdJ("click",function(){return a.sort("id")}),t._uU(95,"Total Qty"),t._UZ(96,"i",49),t.qZA(),t.TgZ(97,"th",45),t.NdJ("click",function(){return a.sort("id")}),t._uU(98,"Note"),t._UZ(99,"i",49),t.qZA(),t.TgZ(100,"th",45),t.NdJ("click",function(){return a.sort("id")}),t._uU(101,"Status"),t._UZ(102,"i",49),t.qZA(),t.TgZ(103,"th",45),t.NdJ("click",function(){return a.sort("id")}),t._uU(104,"Action "),t._UZ(105,"i",49),t.qZA()()(),t.YNc(106,F,4,11,"tbody",50),t.YNc(107,j,5,0,"tbody",50),t.qZA(),t.TgZ(108,"div",51),t.YNc(109,Q,1,0,"mat-progress-bar",52),t.qZA(),t.TgZ(110,"div",4)(111,"div",53)(112,"div",54),t._uU(113," Show per page "),t.TgZ(114,"select",55,56),t.NdJ("ngModelChange",function(d){return a.itemsPerPage=d})("change",function(){t.CHM(l);const d=t.MAs(115);return t.KtG(a.changePg(d.value))}),t.TgZ(116,"option",57),t._uU(117,"10"),t.qZA(),t.TgZ(118,"option",58),t._uU(119,"20"),t.qZA(),t.TgZ(120,"option",59),t._uU(121,"30"),t.qZA(),t.TgZ(122,"option",60),t._uU(123,"50"),t.qZA(),t.TgZ(124,"option",61),t._uU(125,"100"),t.qZA(),t.TgZ(126,"option",62),t._uU(127,"All"),t.qZA()()()(),t.TgZ(128,"div",63)(129,"div",64)(130,"pagination-controls",65),t.NdJ("pageChange",function(d){return a.p=d}),t.qZA(),t.TgZ(131,"div",66),t._uU(132),t.qZA()()()()()()()}2&i&&(t.xp6(9),t.Q6J("ngIf",a.isAdmin),t.xp6(1),t.Q6J("ngIf",a.isAdd),t.xp6(15),t.Q6J("ngModel",a.titlee),t.xp6(21),t.Q6J("ngModel",a.date),t.xp6(5),t.Q6J("ngModel",a.selectRefundStatus),t.xp6(13),t.Q6J("ngModel",a.selectedAmount),t.xp6(12),t.Q6J("ngModel",a.allSelected),t.xp6(30),t.Q6J("ngIf",(null==a.filteredData?null:a.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==a.filteredData?null:a.filteredData.length)),t.xp6(2),t.Q6J("ngIf",a.loader),t.xp6(5),t.Q6J("ngModel",a.itemsPerPage),t.xp6(18),t.lnq("Showing ",a.itemsPerPage," to ",null==a.filteredData?null:a.filteredData.length," of ",a.p," entries"))},dependencies:[p.mk,p.sg,p.O5,v.yS,m.YN,m.Kr,m.Fj,m.wV,m.Wl,m.EJ,m.JJ,m.On,A.pW,C.LS,C._s,x.T],styles:["input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:300%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),u})(),canActivate:[c(30597).l],data:{allowedRoles:["view_materialoutward"]}}];let K=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({imports:[v.Bz.forChild(H),v.Bz]}),u})();var W=c(8468);let z=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=t.oAB({type:u}),u.\u0275inj=t.cJS({providers:[p.uU],imports:[p.ez,K,W.I]}),u})()},30597:(O,M,c)=>{c.d(M,{l:()=>w});var p=c(94650),v=c(89299),Z=c(97185),f=c(42917),_=c(80927);let w=(()=>{class s{constructor(n,t,e,y,T){this.router=n,this.Arout=t,this.toastr=e,this.profileService=y,this.coreService=T}canActivate(n,t){const e=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(y=>{this.userDetails=y,this.permissions=this.userDetails?.permission}),e){const y=n.data.allowedRoles;console.log(y,"allowedRoles");const T=e.some(m=>y.includes(m.codename));if(console.log(T),this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails);const A=m?.permission,C=this.profileService.getUserDetails();(!C||C.length!==A.length)&&(this.profileService.setUserPermission(A),window.location.reload())}),T)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return s.\u0275fac=function(n){return new(n||s)(p.LFG(v.F0),p.LFG(v.gz),p.LFG(Z._W),p.LFG(f.J),p.LFG(_.p))},s.\u0275prov=p.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);