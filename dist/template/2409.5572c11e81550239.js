"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2409],{60843:(R,S,h)=>{h.d(S,{s:()=>f});var p=h(92340),v=h(94650),C=h(80529);let f=(()=>{class _{constructor(n){this.http=n,this.apiUrl=`${p.N.api}`}getSalesNumber(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/numbers/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getCutomerRetention(n,a,l){let e=this.apiUrl+"/pv-api/customer-retention-rate/";const t=[];return n&&t.push(`start_date=${n}`),a&&t.push(`end_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getTotalSalePurchase(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getDailySales(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/daily-sales/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getSalevsPurchase(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getCategoryWiseSale(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getSubCatWiseSale(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getInventory(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const t=[];return n&&t.push(`start_date=${n}`),a&&t.push(`end_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getRecentlySales(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/recently-sale/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getRecentlyAddedProduct(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getBestSellingProduct(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getLeastSellingProduct(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getTotalRecvsPay(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getGrowth(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/growth-graph/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getGrossNetProfit(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const t=[];return n&&t.push(`start_date=${n}`),a&&t.push(`end_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getUnpaidInvoices(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getTotalReceivables(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/total-receivable/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getTodayPayables(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/total-payable/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getTodayExpense(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/expenses/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getDepartmentWiseTarget(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getEployeeTargetAchieved(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getEmployeeTop10(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getEmployeeTargetGraph(n,a,l){let e=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const t=[];return n&&t.push(`from_date=${n}`),a&&t.push(`to_date=${a}`),l&&t.push(`branch=${l}`),t.length>0&&(e+="?"+t.join("&")),this.http.get(e)}getAnalysisInventoryList(n,a){let l=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const e=[];return n&&e.push(`start_date=${n}`),a&&e.push(`end_date=${a}`),e.length>0&&(l+="?"+e.join("&")),this.http.get(l)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(n,a){let l=this.apiUrl+"/api/reports/profit_and_loss/";const e=[];return n&&e.push(`start_date=${n}`),a&&e.push(`end_date=${a}`),e.length>0&&(l+="?"+e.join("&")),this.http.get(l)}}return _.\u0275fac=function(n){return new(n||_)(v.LFG(C.eN))},_.\u0275prov=v.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},82409:(R,S,h)=>{h.r(S),h.d(S,{SalesReturnListModule:()=>V});var p=h(36895),v=h(89299),C=h(2454),f=h.n(C),_=h(96166),Z=h(12983),n=h.n(Z),a=h(80574),l=h(94327),e=h(94650),t=h(72170),T=h(42917),y=h(60843),m=h(24006),L=h(73162),A=h(54333),q=h(54040);function $(c,d){if(1&c){const s=e.EpF();e.TgZ(0,"a",72)(1,"input",73,74),e.NdJ("change",function(r){const u=e.CHM(s).$implicit,g=e.oxw(2);return e.KtG(g.SelectedBranch(u.id,r.target.checked))}),e.qZA(),e.TgZ(3,"label",75),e.NdJ("click",function(r){e.CHM(s);const o=e.oxw(2);return e.KtG(o.onLabelClick(r))}),e._uU(4),e.qZA()()}if(2&c){const s=d.$implicit,i=d.index,r=e.oxw(2);e.xp6(1),e.Q6J("value",s.id)("checked",r.selectData.includes(s.id))("id","checkboxCat-"+i),e.xp6(2),e.Q6J("for","checkboxCat-"+i),e.xp6(1),e.Oqu(s.title)}}function P(c,d){if(1&c&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&c){const s=e.oxw(2);e.xp6(1),e.Oqu(s.selectData.length+" Selected")}}const B=function(){return{standalone:!0}};function N(c,d){if(1&c){const s=e.EpF();e.TgZ(0,"div",65)(1,"div",66)(2,"button",67),e._uU(3,"Select Branch"),e.qZA(),e.TgZ(4,"ul",68)(5,"li")(6,"input",69),e.NdJ("ngModelChange",function(r){e.CHM(s);const o=e.oxw();return e.KtG(o.searchBranch=r)})("ngModelChange",function(){e.CHM(s);const r=e.oxw();return e.KtG(r.filterBranch())}),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,$,5,5,"a",70),e.qZA()()(),e.TgZ(9,"div",71),e.YNc(10,P,2,1,"span",48),e.qZA()()}if(2&c){const s=e.oxw();e.xp6(6),e.Q6J("ngModel",s.searchBranch)("ngModelOptions",e.DdM(4,B)),e.xp6(2),e.Q6J("ngForOf",s.filteredBranchList),e.xp6(2),e.Q6J("ngIf",s.selectData.length>0)}}function w(c,d){1&c&&(e.TgZ(0,"a",76),e._UZ(1,"img",77),e._uU(2,"Add Sales Return "),e.qZA())}function J(c,d){if(1&c&&(e.TgZ(0,"option",78),e._uU(1),e.qZA()),2&c){const s=d.$implicit;e.s9C("value",null==s?null:s.customer_bill_no),e.xp6(1),e.Oqu(null==s?null:s.customer_bill_no)}}function k(c,d){if(1&c&&(e.TgZ(0,"a",85),e._UZ(1,"img",89),e.qZA()),2&c){const s=e.oxw().$implicit;e.MGl("routerLink","//sales/updatesalesReturn/",s.id,"")}}function O(c,d){if(1&c){const s=e.EpF();e.TgZ(0,"a",90),e.NdJ("click",function(){e.CHM(s);const r=e.oxw(),o=r.index,u=r.$implicit,g=e.oxw(2);return e.KtG(g.confirmText(o,u.id))}),e._UZ(1,"img",91),e.qZA()}}const E=function(c,d,s){return{"bg-lightgreen":c,"bg-lightred":d,"bg-lightyellow":s}};function I(c,d){if(1&c){const s=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",80)(3,"input",81),e.NdJ("ngModelChange",function(r){const u=e.CHM(s).index,g=e.oxw(2);return e.KtG(g.selectedRows[u]=r)}),e.qZA(),e._UZ(4,"span",46),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",82)(8,"a",83),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td")(21,"span",84),e._uU(22),e.qZA()(),e.TgZ(23,"td")(24,"a",85),e._UZ(25,"img",86),e.qZA(),e.YNc(26,k,2,1,"a",87),e.YNc(27,O,2,0,"a",88),e.qZA()()}if(2&c){const s=d.$implicit,i=d.index,r=e.oxw(2);e.xp6(3),e.Q6J("ngModel",r.selectedRows[i]),e.xp6(3),e.Oqu(i+1),e.xp6(2),e.MGl("routerLink","//sales/salesReturnedetails/",s.id,""),e.xp6(1),e.Oqu((null==s||null==s.customer?null:s.customer.name)+" ("+(null==s||null==s.customer?null:s.customer.username)+")"),e.xp6(2),e.Oqu(null==s?null:s.bill_date),e.xp6(2),e.Oqu(null==s?null:s.sale_return_bill_no),e.xp6(2),e.Oqu(null==s||null==s.sale_bill?null:s.sale_bill.customer_bill_no),e.xp6(2),e.Oqu(null==s?null:s.subtotal),e.xp6(2),e.Oqu(null==s?null:s.total),e.xp6(2),e.Q6J("ngClass",e.kEZ(14,E,"Received"===s.status,"Pending"===s.status,"Draft"===s.status)),e.xp6(1),e.Oqu(s.status),e.xp6(2),e.MGl("routerLink","//sales/salesReturnedetails/",s.id,""),e.xp6(2),e.Q6J("ngIf",r.isEdit),e.xp6(1),e.Q6J("ngIf",r.isDelete)}}const F=function(c,d){return{itemsPerPage:c,currentPage:d}};function j(c,d){if(1&c&&(e.TgZ(0,"tbody"),e.YNc(1,I,28,18,"tr",79),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&c){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,s.filteredData,s.key,s.reverse),e.WLB(8,F,s.itemsPerPage,s.p)))}}function G(c,d){1&c&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",92)(3,"p",93),e._uU(4,"Data not available"),e.qZA()()()())}function Y(c,d){1&c&&e._UZ(0,"mat-progress-bar",94)}const K=[{path:"",component:(()=>{class c{constructor(s,i,r,o){this.saleService=s,this.cs=i,this.datePipe=r,this.dashboardservice=o,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(s,i){f().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(r=>{r.isConfirmed&&this.saleService.deleteSaleReturn(i).subscribe(o=>{this.delRes=o,this.delRes.success?(this.ngOnInit(),f().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(s,1)):f().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(s,i){f().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale return!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(r=>{r.isConfirmed&&this.saleService.SalesMaterialOutwardIsActive(i,"").subscribe(o=>{this.delRes=o,this.delRes.success&&(f().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(s,i){f().fire({title:"Are you sure?",text:"Do you want to Active this sale return!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(r=>{r.isConfirmed&&this.saleService.SaleReturnIsActive(i,"").subscribe(o=>{this.delRes=o,this.delRes.success&&(f().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){if(localStorage.getItem("financialYear")){let s=localStorage.getItem("financialYear");console.warn(JSON.parse(s));let i=JSON.parse(s);this.getSaleReturnFy(i)}this.cs.userDetails$.subscribe(s=>{this.isAdmin="admin"==s.role}),this.cs.userDetails$.subscribe(s=>{this.userDetails=s,this.userDetails?.permission?.map(r=>{"sale"===r.content_type.app_label&&"salereturn"===r.content_type.model&&"add_salereturn"==r.codename?this.isAdd=r.codename:"sale"===r.content_type.app_label&&"salereturn"===r.content_type.model&&"change_salereturn"==r.codename?this.isEdit=r.codename:"sale"===r.content_type.app_label&&"salereturn"===r.content_type.model&&"delete_salereturn"==r.codename&&(this.isDelete=r.codename)})}),this.getSellBill(),this.getBranch()}getSaleReturnFy(s){const i=JSON.stringify(this.selectData);console.log(i),console.log(i?.length),this.saleService.getSaleReturnfy(s,this.selectData).subscribe(r=>{this.tableData=r,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getSellBill(){this.saleService.getSalesBill().subscribe(s=>{this.saleBillList=s})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(s){this.tableData.forEach(s?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const s=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(i=>{const r=i?.customer?.name.toLocaleLowerCase(),o=i?.customer?.username.toLocaleLowerCase()||"",u=i?.sale_return_bill_no.toLocaleLowerCase();return!(!r.match(s)&&!o.includes(s)&&!u.match(s))})}}sort(s){this.key=s,this.reverse=!this.reverse}formatDate(s){return this.datePipe.transform(s,"yyyy-MM-dd")||""}generatePDF(){const s=new _.default;s.setFontSize(15),s.setTextColor(33,43,54),s.text("Sales Return List",10,10),n()(s,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name "},{header:"Bill Date"},{header:"Bill No."},{header:"Sales Bill"},{header:"Sub Total"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),s.save("salesReturn.pdf")}generatePDFAgain(){const s=new _.default;s.setFontSize(12),s.setTextColor(33,43,54),s.text("Sales Return List",82,10),s.text("",10,15),n()(s,{head:[["#","User Name","Bill Date","Bill No.","Sales Bill","Sub Total","Total","Status"]],body:this.tableData.map((r,o)=>[o+1,r?.customer?.name+" ("+r?.customer?.username+")",this.formatDate(r?.bill_date),r.sale_return_bill_no,r.sale_bill?.customer_bill_no,r.subtotal,r.total,r.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),s.save("Sales Return .pdf")}getVisibleDataFromTable(){const s=[],i=document.getElementById("mytable"),r=i.querySelector("thead tr"),o=i.querySelectorAll("tbody tr"),u=[];return r.querySelectorAll("th").forEach(g=>{const b=g.textContent.trim();"Is Active"!==b&&"Action"!==b&&u.push(b)}),s.push(u),o.forEach(g=>{const b=[];g.querySelectorAll("td").forEach(U=>{b.push(U.textContent.trim())}),s.push(b)}),s}exportToExcel(){const s=this.getVisibleDataFromTable(),i=a.P6.aoa_to_sheet(s),r=a.P6.book_new();a.P6.book_append_sheet(r,i,"Sheet1");const o=a.cW(r,{bookType:"xlsx",type:"array"}),u=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,l.saveAs)(u,"saleReturn.xlsx")}printTable(){const s=document.getElementById("mytable"),o=document.querySelector(".titl").outerHTML,u=s.cloneNode(!0),g=u.querySelector("th.thone:nth-child(10)");g&&g.remove();const b=u.querySelector("th.thone:last-child");b&&b.remove(),u.querySelectorAll("tr").forEach(D=>{const M=D.querySelector("td:nth-child(10)");M&&M.remove();const x=D.querySelector("td:last-child");x&&x.remove()});const X=u.outerHTML,ee="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+X,te=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=ee,window.print(),document.body.innerHTML=te}filterData(){let s=this.tableData.slice();if(this.date){const i=new Date(this.date).toISOString().split("T")[0];s=s.filter(r=>new Date(r?.bill_date).toISOString().split("T")[0]===i)}this.selectSellBillNo&&(s=s.filter(i=>i?.sale_bill?.customer_bill_no===this.selectSellBillNo)),this.selectedAmount&&(s=s.filter(i=>i?.total<=this.selectedAmount)),this.filteredData=s}clearFilter(){this.date=null,this.selectedAmount=null,this.selectSellBillNo=null,this.filterData()}changePg(s){console.log(s),-1==s&&(this.itemsPerPage=this.filteredData?.length)}getBranch(){this.dashboardservice.getBranch().subscribe(s=>{this.branchList=s,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(s=>s.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(s,i){if(i)console.log(s),this.selectData.push(s),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const r=this.selectData.findIndex(o=>o==s);console.log(r),-1!==r&&this.selectData.splice(r,1),this.ngOnInit(),console.log(this.selectData)}}}return c.\u0275fac=function(s){return new(s||c)(e.Y36(t.M),e.Y36(T.J),e.Y36(p.uU),e.Y36(y.s))},c.\u0275cmp=e.Xpm({type:c,selectors:[["app-sales-return-list"]],decls:133,vars:16,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],["routerLink","//sales/addsalesReturn","class","btn btn-added",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search User/Bill No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//sales/addsalesReturn",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(s,i){if(1&s){const r=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Sales Return list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Sales Return"),e.qZA()(),e.TgZ(6,"div",3)(7,"div",4)(8,"div",5),e.YNc(9,N,11,5,"div",6),e.qZA()(),e.YNc(10,w,3,0,"a",7),e.qZA()(),e.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),e._UZ(17,"img",14),e.TgZ(18,"span"),e._UZ(19,"img",15),e.qZA()()(),e.TgZ(20,"div",16)(21,"a",17),e._UZ(22,"img",18),e.qZA(),e.TgZ(23,"div",19)(24,"label")(25,"input",20),e.NdJ("ngModelChange",function(u){return i.titlee=u})("ngModelChange",function(){return i.search()}),e.qZA()()()()(),e.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),e.NdJ("click",function(){return i.generatePDFAgain()}),e._UZ(30,"img",23),e.qZA()(),e.TgZ(31,"li")(32,"a",24),e.NdJ("click",function(){return i.exportToExcel()}),e._UZ(33,"img",25),e.qZA()(),e.TgZ(34,"li")(35,"a",26),e.NdJ("click",function(){return i.printTable()}),e._UZ(36,"img",27),e.qZA()()()()(),e.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label"),e._uU(45,"Sale Return Date"),e.qZA(),e.TgZ(46,"input",33),e.NdJ("ngModelChange",function(u){return i.date=u})("ngModelChange",function(){return i.filterData()}),e.qZA()()(),e.TgZ(47,"div",31)(48,"div",32)(49,"label"),e._uU(50,"Due Date"),e.qZA(),e.TgZ(51,"input",33),e.NdJ("ngModelChange",function(u){return i.espireDate=u})("ngModelChange",function(){return i.filterData()}),e.qZA()()(),e.TgZ(52,"div",31)(53,"div",32)(54,"label"),e._uU(55,"Sell Bill No."),e.qZA(),e.TgZ(56,"select",34),e.NdJ("ngModelChange",function(u){return i.selectSellBillNo=u})("change",function(){return i.filterData()}),e.TgZ(57,"option",35),e._uU(58,"Select Sales Order No."),e.qZA(),e.YNc(59,J,2,2,"option",36),e.qZA()()(),e.TgZ(60,"div",31)(61,"div",32)(62,"label"),e._uU(63,"Enter Total Amount"),e.qZA(),e.TgZ(64,"input",37),e.NdJ("ngModelChange",function(u){return i.selectedAmount=u})("keyup",function(){return i.filterData()}),e.qZA(),e.TgZ(65,"span",38),e._uU(66,"Amount Filter (Less than & Equal to Total amount value)"),e.qZA()()()(),e.TgZ(67,"div",39),e.NdJ("click",function(){return i.clearFilter()}),e.TgZ(68,"a",40),e._uU(69,"Clear Filter"),e.qZA()()()()()(),e.TgZ(70,"div",41)(71,"table",42)(72,"thead")(73,"tr")(74,"th",43),e.NdJ("click",function(){return i.sort("id")}),e.TgZ(75,"label",44),e.NdJ("click",function(){return i.selectAll(i.initChecked)}),e.TgZ(76,"input",45),e.NdJ("ngModelChange",function(u){return i.allSelected=u})("change",function(){return i.selectAlll()}),e.qZA(),e._UZ(77,"span",46),e.qZA(),e._UZ(78,"i",47),e.qZA(),e.TgZ(79,"th",43),e.NdJ("click",function(){return i.sort("id")}),e._uU(80,"Sr. No. "),e._UZ(81,"i",47),e.qZA(),e.TgZ(82,"th",43),e.NdJ("click",function(){return i.sort("id")}),e._uU(83,"User Name "),e._UZ(84,"i",47),e.qZA(),e.TgZ(85,"th",43),e.NdJ("click",function(){return i.sort("id")}),e._uU(86,"Bill Date "),e._UZ(87,"i",47),e.qZA(),e.TgZ(88,"th",43),e.NdJ("click",function(){return i.sort("id")}),e._uU(89,"Bill No."),e._UZ(90,"i",47),e.qZA(),e.TgZ(91,"th",43),e.NdJ("click",function(){return i.sort("id")}),e._uU(92,"Sales Bill"),e._UZ(93,"i",47),e.qZA(),e.TgZ(94,"th",43),e.NdJ("click",function(){return i.sort("id")}),e._uU(95,"Sub Total"),e._UZ(96,"i",47),e.qZA(),e.TgZ(97,"th",43),e.NdJ("click",function(){return i.sort("id")}),e._uU(98,"Total"),e._UZ(99,"i",47),e.qZA(),e.TgZ(100,"th",43),e.NdJ("click",function(){return i.sort("id")}),e._uU(101,"Status"),e._UZ(102,"i",47),e.qZA(),e.TgZ(103,"th",43),e.NdJ("click",function(){return i.sort("id")}),e._uU(104,"Action "),e._UZ(105,"i",47),e.qZA()()(),e.YNc(106,j,4,11,"tbody",48),e.YNc(107,G,5,0,"tbody",48),e.qZA(),e.TgZ(108,"div",49),e.YNc(109,Y,1,0,"mat-progress-bar",50),e.qZA(),e.TgZ(110,"div",4)(111,"div",51)(112,"div",52),e._uU(113," Show per page "),e.TgZ(114,"select",53,54),e.NdJ("ngModelChange",function(u){return i.itemsPerPage=u})("change",function(){e.CHM(r);const u=e.MAs(115);return e.KtG(i.changePg(u.value))}),e.TgZ(116,"option",55),e._uU(117,"10"),e.qZA(),e.TgZ(118,"option",56),e._uU(119,"20"),e.qZA(),e.TgZ(120,"option",57),e._uU(121,"30"),e.qZA(),e.TgZ(122,"option",58),e._uU(123,"50"),e.qZA(),e.TgZ(124,"option",59),e._uU(125,"100"),e.qZA(),e.TgZ(126,"option",60),e._uU(127,"All"),e.qZA()()()(),e.TgZ(128,"div",61)(129,"div",62)(130,"pagination-controls",63),e.NdJ("pageChange",function(u){return i.p=u}),e.qZA(),e.TgZ(131,"div",64),e._uU(132),e.qZA()()()()()()()}2&s&&(e.xp6(9),e.Q6J("ngIf",i.isAdmin),e.xp6(1),e.Q6J("ngIf",i.isAdd),e.xp6(15),e.Q6J("ngModel",i.titlee),e.xp6(21),e.Q6J("ngModel",i.date),e.xp6(5),e.Q6J("ngModel",i.espireDate),e.xp6(5),e.Q6J("ngModel",i.selectSellBillNo),e.xp6(3),e.Q6J("ngForOf",i.saleBillList),e.xp6(5),e.Q6J("ngModel",i.selectedAmount),e.xp6(12),e.Q6J("ngModel",i.allSelected),e.xp6(30),e.Q6J("ngIf",(null==i.filteredData?null:i.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==i.filteredData?null:i.filteredData.length)),e.xp6(2),e.Q6J("ngIf",i.loader),e.xp6(5),e.Q6J("ngModel",i.itemsPerPage),e.xp6(18),e.lnq("Showing ",i.itemsPerPage," to ",null==i.filteredData?null:i.filteredData.length," of ",i.p," entries"))},dependencies:[p.mk,p.sg,p.O5,v.yS,m.YN,m.Kr,m.Fj,m.wV,m.Wl,m.EJ,m.JJ,m.On,L.pW,A.LS,A._s,q.T],styles:["input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:468%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),c})(),canActivate:[h(30597).l],data:{allowedRoles:["view_salereturn"]}}];let W=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({imports:[v.Bz.forChild(K),v.Bz]}),c})();var z=h(8468);let V=(()=>{class c{}return c.\u0275fac=function(s){return new(s||c)},c.\u0275mod=e.oAB({type:c}),c.\u0275inj=e.cJS({providers:[p.uU],imports:[p.ez,W,z.I]}),c})()},30597:(R,S,h)=>{h.d(S,{l:()=>Z});var p=h(94650),v=h(89299),C=h(97185),f=h(42917),_=h(80927);let Z=(()=>{class n{constructor(l,e,t,T,y){this.router=l,this.Arout=e,this.toastr=t,this.profileService=T,this.coreService=y}canActivate(l,e){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(T=>{this.userDetails=T,this.permissions=this.userDetails?.permission}),t){const T=l.data.allowedRoles;console.log(T,"allowedRoles");const y=t.some(m=>T.includes(m.codename));if(console.log(y),this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails);const L=m?.permission,A=this.profileService.getUserDetails();(!A||A.length!==L.length)&&(this.profileService.setUserPermission(L),window.location.reload())}),y)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(l){return new(l||n)(p.LFG(v.F0),p.LFG(v.gz),p.LFG(C._W),p.LFG(f.J),p.LFG(_.p))},n.\u0275prov=p.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);