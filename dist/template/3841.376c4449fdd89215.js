"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3841],{60843:($,T,h)=>{h.d(T,{s:()=>f});var _=h(92340),C=h(94650),A=h(80529);let f=(()=>{class m{constructor(n){this.http=n,this.apiUrl=`${_.N.api}`}getSalesNumber(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/numbers/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getCutomerRetention(n,l,a,t){let s=this.apiUrl+"/pv-api/customer-retention-rate/";const e=[];return n&&e.push(`start_date=${n}`),l&&e.push(`end_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTotalSalePurchase(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getDailySales(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/daily-sales/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getSalevsPurchase(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getCategoryWiseSale(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getSubCatWiseSale(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getInventory(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const e=[];return n&&e.push(`start_date=${n}`),l&&e.push(`end_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getRecentlySales(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/recently-sale/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getRecentlyAddedProduct(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getBestSellingProduct(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getLeastSellingProduct(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTotalRecvsPay(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getGrowth(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/growth-graph/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getGrossNetProfit(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const e=[];return n&&e.push(`start_date=${n}`),l&&e.push(`end_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getUnpaidInvoices(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTotalReceivables(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/total-receivable/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTodayPayables(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/total-payable/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getTodayExpense(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/expenses/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getDepartmentWiseTarget(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getEployeeTargetAchieved(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getEmployeeTop10(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getEmployeeTargetGraph(n,l,a,t){let s=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const e=[];return n&&e.push(`from_date=${n}`),l&&e.push(`to_date=${l}`),a&&e.push(`branch=${a}`),t&&e.push(`financial_year=${t}`),e.length>0&&(s+="?"+e.join("&")),this.http.get(s)}getAnalysisInventoryList(n,l,a){let t=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const s=[];return n&&s.push(`start_date=${n}`),l&&s.push(`end_date=${l}`),a&&s.push(`financial_year=${a}`),s.length>0&&(t+="?"+s.join("&")),this.http.get(t)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(n,l,a){let t=this.apiUrl+"/api/reports/profit_and_loss/";const s=[];return n&&s.push(`start_date=${n}`),l&&s.push(`end_date=${l}`),s.length>0&&(t+="?"+s.join("&")),a&&s.push(`financial_year=${a}`),this.http.get(t)}}return m.\u0275fac=function(n){return new(n||m)(C.LFG(A.eN))},m.\u0275prov=C.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()},83841:($,T,h)=>{h.r(T),h.d(T,{ListCountraVoucherModule:()=>X});var _=h(36895),C=h(89299),A=h(2454),f=h.n(A),m=h(96166),x=h(12983),n=h.n(x),l=h(80574),a=h(94327),t=h(94650),s=h(71071),e=h(42917),y=h(60843),Z=h(25062),v=h(24006),L=h(73162),D=h(54333),q=h(90455),V=h(54040);function w(c,p){if(1&c){const i=t.EpF();t.TgZ(0,"a",55)(1,"input",56,57),t.NdJ("change",function(o){const d=t.CHM(i).$implicit,g=t.oxw(2);return t.KtG(g.SelectedBranch(d.id,o.target.checked))}),t.qZA(),t.TgZ(3,"label",58),t.NdJ("click",function(o){t.CHM(i);const u=t.oxw(2);return t.KtG(u.onLabelClick(o))}),t._uU(4),t.qZA()()}if(2&c){const i=p.$implicit,r=p.index,o=t.oxw(2);t.xp6(1),t.Q6J("value",i.id)("checked",o.selectData.includes(i.id))("id","checkboxCat-"+r),t.xp6(2),t.Q6J("for","checkboxCat-"+r),t.xp6(1),t.Oqu(i.title)}}function N(c,p){if(1&c&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&c){const i=t.oxw(2);t.xp6(1),t.Oqu(i.selectData.length+" Selected")}}const J=function(){return{standalone:!0}};function k(c,p){if(1&c){const i=t.EpF();t.TgZ(0,"div",48)(1,"div",49)(2,"button",50),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",51)(5,"li")(6,"input",52),t.NdJ("ngModelChange",function(o){t.CHM(i);const u=t.oxw();return t.KtG(u.searchBranch=o)})("ngModelChange",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,w,5,5,"a",53),t.qZA()()(),t.TgZ(9,"div",54),t.YNc(10,N,2,1,"span",7),t.qZA()()}if(2&c){const i=t.oxw();t.xp6(6),t.Q6J("ngModel",i.searchBranch)("ngModelOptions",t.DdM(4,J)),t.xp6(2),t.Q6J("ngForOf",i.filteredBranchList),t.xp6(2),t.Q6J("ngIf",i.selectData.length>0)}}function B(c,p){1&c&&(t.ynx(0),t.TgZ(1,"a",59),t._UZ(2,"img",60),t._uU(3,"Add New Countra Voucher "),t.qZA(),t.BQk())}function E(c,p){if(1&c&&(t.TgZ(0,"a",68),t._UZ(1,"img",72),t.qZA()),2&c){const i=t.oxw().$implicit;t.MGl("routerLink","//transaction/updatecountravoucher/",null==i?null:i.id,"")}}function I(c,p){if(1&c){const i=t.EpF();t.TgZ(0,"a",73),t.NdJ("click",function(){t.CHM(i);const o=t.oxw(),u=o.index,d=o.$implicit,g=t.oxw(2);return t.KtG(g.confirmText(u,null==d?null:d.id))}),t._UZ(1,"img",74),t.qZA()}}function O(c,p){if(1&c){const i=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",62)(3,"input",63),t.NdJ("ngModelChange",function(o){const d=t.CHM(i).index,g=t.oxw(2);return t.KtG(g.selectedRows[d]=o)}),t.qZA(),t._UZ(4,"span",43),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",64)(8,"a",65),t._uU(9),t.qZA()(),t.TgZ(10,"td",66),t._uU(11),t.qZA(),t.TgZ(12,"td",66),t._uU(13),t.qZA(),t.TgZ(14,"td",66),t._uU(15),t.qZA(),t.TgZ(16,"td",66),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"mat-slide-toggle",67),t.NdJ("click",function(){const o=t.CHM(i),u=o.$implicit,d=o.index,g=t.oxw(2);return t.KtG(u.is_active?g.isActive(d,u.id):g.Active(d,u.id))})("ngModelChange",function(o){const d=t.CHM(i).$implicit;return t.KtG(d.is_active=o)}),t.qZA()(),t.TgZ(22,"td")(23,"a",68),t._UZ(24,"img",69),t.qZA(),t.YNc(25,E,2,1,"a",70),t.YNc(26,I,2,0,"a",71),t.qZA()()}if(2&c){const i=p.$implicit,r=p.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[r]),t.xp6(3),t.Oqu(r+1+"."),t.xp6(2),t.MGl("routerLink","//transaction/detailscountravoucher/",i.id,""),t.xp6(1),t.Oqu(null==i?null:i.countra_voucher_no),t.xp6(2),t.Oqu(null==i||null==i.from_account?null:i.from_account.account_id),t.xp6(2),t.Oqu(null==i||null==i.to_account?null:i.to_account.account_id),t.xp6(2),t.Oqu(null==i?null:i.amount),t.xp6(2),t.Oqu(null==i?null:i.date),t.xp6(2),t.Oqu(null==i?null:i.note),t.xp6(2),t.Q6J("ngModel",i.is_active),t.xp6(2),t.MGl("routerLink","//transaction/detailscountravoucher/",null==i?null:i.id,""),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const R=function(c,p){return{itemsPerPage:c,currentPage:p}};function F(c,p){if(1&c&&(t.TgZ(0,"tbody"),t.YNc(1,O,27,13,"tr",61),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&c){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.filteredData,i.key,i.reverse),t.WLB(8,R,i.itemsPerPage,i.p)))}}function j(c,p){1&c&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",75)(3,"p",76),t._uU(4,"Data not available"),t.qZA()()()())}function G(c,p){1&c&&t._UZ(0,"mat-progress-bar",77)}function Y(c,p){if(1&c){const i=t.EpF();t.TgZ(0,"div",4)(1,"div",78)(2,"div",79),t._uU(3," Show per page "),t.TgZ(4,"select",80,81),t.NdJ("ngModelChange",function(o){t.CHM(i);const u=t.oxw();return t.KtG(u.itemsPerPage=o)})("change",function(){t.CHM(i);const o=t.MAs(5),u=t.oxw();return t.KtG(u.changePg(o.value))}),t.TgZ(6,"option",82),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",83),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",84),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",85),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",86),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",87),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",88)(19,"div",89)(20,"pagination-controls",90),t.NdJ("pageChange",function(o){t.CHM(i);const u=t.oxw();return t.KtG(u.p=o)}),t.qZA(),t.TgZ(21,"div",91),t._uU(22),t.qZA()()()()}if(2&c){const i=t.oxw();t.xp6(4),t.Q6J("ngModel",i.itemsPerPage),t.xp6(18),t.lnq("Showing ",i.itemsPerPage," to ",null==i.tableData?null:i.tableData.length," of ",i.p," entries")}}const K=[{path:"",component:(()=>{class c{constructor(i,r,o,u){this.transactionService=i,this.cs=r,this.dashboardservice=o,this.contactservice=u,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(i,r){f().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.deleteCountraVoucher(r).subscribe(u=>{this.delRes=u,this.delRes.success?(f().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(i,1),this.ngOnInit()):f().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(i,r){f().fire({title:"Are you sure?",text:"Do you want to Deactivate this Countra Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.CountraVoucherIsActive(r,"").subscribe(u=>{this.delRes=u,this.delRes.success?(f().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):f().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(i,r){f().fire({title:"Are you sure?",text:"Do you want to Active this Countra Voucher!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.CountraVoucherIsActive(r,"").subscribe(u=>{this.delRes=u,this.delRes.success?(f().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):f().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){if(this.transactionService.getCountraVoucher().subscribe(i=>{this.tableData=i,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(i=>{this.isAdmin="admin"==i.role}),localStorage.getItem("financialYear")){let i=localStorage.getItem("financialYear");console.warn(JSON.parse(i));let r=JSON.parse(i);this.getEstimate(r)}this.cs.userDetails$.subscribe(i=>{this.userDetails=i,this.userDetails?.permission?.map(o=>{"transactions"===o.content_type.app_label&&"countravoucher"===o.content_type.model&&"add_countravoucher"==o.codename?this.isAdd=o.codename:"transactions"===o.content_type.app_label&&"countravoucher"===o.content_type.model&&"change_countravoucher"==o.codename?this.isEdit=o.codename:"transactions"===o.content_type.app_label&&"countravoucher"===o.content_type.model&&"delete_countravoucher"==o.codename&&(this.isDelete=o.codename)})}),this.getPaymentTerms(),this.getBranch()}getPaymentTerms(){this.contactservice.getPaymentTerms().subscribe(i=>{this.paymentList=i})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(i){this.tableData.forEach(i?r=>{r.isSelected=!1}:r=>{r.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const i=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(r=>r?.countra_voucher_no.toLocaleLowerCase().includes(i))}}sort(i){this.key=i,this.reverse=!this.reverse}generatePDF(){const i=new m.default;i.setFontSize(15),i.setTextColor(33,43,54),i.text("Countra Voucher",10,10),n()(i,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Countra Voucher No."},{header:"From Account"},{header:"To Account"},{header:"Amount"},{header:"Date"},{header:"Description"},{header:"Is Active"}]}),i.save("countravoucher.pdf")}generatePDFAgain(){const i=new m.default;i.setFontSize(12),i.setTextColor(33,43,54),i.text("Countra Voucher",82,10),i.text("",10,15),n()(i,{head:[["#","Countra Voucher No.","From Account","To Account","Amount","Date","Description"]],body:this.tableData.map((o,u)=>[u+1,o.countra_voucher_no,o.from_account?.account_id,o.to_account?.account_id,o.amount,o.date,o.note]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),i.save("Countra Voucher .pdf")}getVisibleDataFromTable(){const i=[],r=document.getElementById("mytable"),o=r.querySelector("thead tr"),u=r.querySelectorAll("tbody tr"),d=[];return o.querySelectorAll("th").forEach(g=>{const b=g.textContent.trim();"Is Active"!==b&&"Action"!==b&&d.push(b)}),i.push(d),u.forEach(g=>{const b=[];g.querySelectorAll("td").forEach(U=>{b.push(U.textContent.trim())}),i.push(b)}),i}exportToExcel(){const i=this.getVisibleDataFromTable(),r=l.P6.aoa_to_sheet(i),o=l.P6.book_new();l.P6.book_append_sheet(o,r,"Sheet1");const u=l.cW(o,{bookType:"xlsx",type:"array"}),d=new Blob([u],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,a.saveAs)(d,"countravoucher.xlsx")}printTable(){const i=document.getElementById("mytable"),u=document.querySelector(".titl").outerHTML,d=i.cloneNode(!0),g=d.querySelector("th.thone:nth-child(9)");g&&g.remove();const b=d.querySelector("th.thone:last-child");b&&b.remove(),d.querySelectorAll("tr").forEach(M=>{const P=M.querySelector("td:nth-child(9)");P&&P.remove();const S=M.querySelector("td:last-child");S&&S.remove()});const tt=d.outerHTML,et="<style>.spaced-title { margin-top: 80px; }</style>"+u.replace("titl","spaced-title")+tt,it=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=et,window.print(),document.body.innerHTML=it}filterData(){let i=this.tableData.slice();if(this.date){const r=new Date(this.date).toISOString().split("T")[0];i=i.filter(o=>new Date(o?.date).toISOString().split("T")[0]===r)}this.selectedAmount&&(i=i.filter(r=>r?.amount<=this.selectedAmount)),this.filteredData=i}clearFilters(){this.selectedAmount=null,this.selectedpaymentTerms=null,this.date=null,this.filterData()}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.tableData.length)}getEstimate(i){const r=JSON.stringify(this.selectData);console.log(r),console.log(r?.length),this.transactionService.getCountraVoucherFy(i,this.selectData).subscribe(o=>{this.tableData=o,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getBranch(){this.dashboardservice.getBranch().subscribe(i=>{this.branchList=i,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(i=>i.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(i,r){if(r)console.log(i),this.selectData.push(i),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const o=this.selectData.findIndex(u=>u==i);console.log(o),-1!==o&&this.selectData.splice(o,1),this.ngOnInit(),console.log(this.selectData)}}}return c.\u0275fac=function(i){return new(i||c)(t.Y36(s.p),t.Y36(e.J),t.Y36(y.s),t.Y36(Z.y))},c.\u0275cmp=t.Xpm({type:c,selectors:[["app-list-countra-voucher"]],decls:98,vars:10,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Cuntra Voucher No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//transaction/addcountravoucher",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"text-center"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Countra Voucher LIST"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Countra Voucher"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,k,11,5,"div",6),t.qZA()(),t.YNc(10,B,4,0,"ng-container",7),t.qZA()(),t.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),t._UZ(17,"img",14),t.TgZ(18,"span"),t._UZ(19,"img",15),t.qZA()()(),t.TgZ(20,"div",16)(21,"a",17),t._UZ(22,"img",18),t.qZA(),t.TgZ(23,"div",19)(24,"label")(25,"input",20),t.NdJ("ngModelChange",function(u){return r.titlee=u})("ngModelChange",function(){return r.search()}),t.qZA()()()()(),t.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),t.NdJ("click",function(){return r.generatePDFAgain()}),t._UZ(30,"img",23),t.qZA()(),t.TgZ(31,"li")(32,"a",24),t.NdJ("click",function(){return r.exportToExcel()}),t._UZ(33,"img",25),t.qZA()(),t.TgZ(34,"li")(35,"a",26),t.NdJ("click",function(){return r.printTable()}),t._UZ(36,"img",27),t.qZA()()()()(),t.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label"),t._uU(45,"Countra Voucher Date"),t.qZA(),t.TgZ(46,"input",33),t.NdJ("ngModelChange",function(u){return r.date=u})("change",function(){return r.filterData()}),t.qZA()()(),t.TgZ(47,"div",31)(48,"div",32)(49,"label"),t._uU(50,"Enter Amount"),t.qZA(),t.TgZ(51,"input",34),t.NdJ("ngModelChange",function(u){return r.selectedAmount=u})("keyup",function(){return r.filterData()}),t.qZA(),t.TgZ(52,"span",35),t._uU(53,"Amount Filter (Less than & Equal to Amount value)"),t.qZA()()()(),t.TgZ(54,"div",36),t.NdJ("click",function(){return r.clearFilters()}),t.TgZ(55,"a",37),t._uU(56,"Clear Filter"),t.qZA()()()()()(),t.TgZ(57,"div",38)(58,"table",39)(59,"thead")(60,"tr")(61,"th",40),t.NdJ("click",function(){return r.sort("id")}),t.TgZ(62,"label",41),t.NdJ("click",function(){return r.selectAll(r.initChecked)}),t.TgZ(63,"input",42),t.NdJ("ngModelChange",function(u){return r.allSelected=u})("change",function(){return r.selectAlll()}),t.qZA(),t._UZ(64,"span",43),t.qZA(),t._UZ(65,"i",44),t.qZA(),t.TgZ(66,"th",40),t.NdJ("click",function(){return r.sort("id")}),t._uU(67,"Sr. No."),t._UZ(68,"i",44),t.qZA(),t.TgZ(69,"th",40),t.NdJ("click",function(){return r.sort("id")}),t._uU(70,"Countra Voucher No."),t._UZ(71,"i",44),t.qZA(),t.TgZ(72,"th",40),t.NdJ("click",function(){return r.sort("id")}),t._uU(73,"From Account"),t._UZ(74,"i",44),t.qZA(),t.TgZ(75,"th",40),t.NdJ("click",function(){return r.sort("id")}),t._uU(76,"To Account"),t._UZ(77,"i",44),t.qZA(),t.TgZ(78,"th",40),t.NdJ("click",function(){return r.sort("id")}),t._uU(79,"Amount"),t._UZ(80,"i",44),t.qZA(),t.TgZ(81,"th",40),t.NdJ("click",function(){return r.sort("id")}),t._uU(82,"Date"),t._UZ(83,"i",44),t.qZA(),t.TgZ(84,"th",40),t.NdJ("click",function(){return r.sort("id")}),t._uU(85,"Description"),t._UZ(86,"i",44),t.qZA(),t.TgZ(87,"th",40),t.NdJ("click",function(){return r.sort("id")}),t._uU(88,"Is Active"),t._UZ(89,"i",44),t.qZA(),t.TgZ(90,"th",40),t.NdJ("click",function(){return r.sort("id")}),t._uU(91,"Action"),t._UZ(92,"i",44),t.qZA()()(),t.YNc(93,F,4,11,"tbody",7),t.YNc(94,j,5,0,"tbody",7),t.qZA(),t.TgZ(95,"div",45),t.YNc(96,G,1,0,"mat-progress-bar",46),t.qZA(),t.YNc(97,Y,23,4,"div",47),t.qZA()()()),2&i&&(t.xp6(9),t.Q6J("ngIf",r.isAdmin),t.xp6(1),t.Q6J("ngIf",r.isAdd),t.xp6(15),t.Q6J("ngModel",r.titlee),t.xp6(21),t.Q6J("ngModel",r.date),t.xp6(5),t.Q6J("ngModel",r.selectedAmount),t.xp6(12),t.Q6J("ngModel",r.allSelected),t.xp6(30),t.Q6J("ngIf",(null==r.filteredData?null:r.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==r.filteredData?null:r.filteredData.length)&&!r.loader),t.xp6(2),t.Q6J("ngIf",r.loader),t.xp6(1),t.Q6J("ngIf",!r.loader))},dependencies:[_.sg,_.O5,C.yS,v.YN,v.Kr,v.Fj,v.wV,v.Wl,v.EJ,v.JJ,v.On,L.pW,D.LS,q.Rr,D._s,V.T],styles:["input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:336%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),c})(),canActivate:[h(30597).l],data:{allowedRoles:["view_countravoucher"]}}];let W=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[C.Bz.forChild(K),C.Bz]}),c})();var z=h(8468);let X=(()=>{class c{}return c.\u0275fac=function(i){return new(i||c)},c.\u0275mod=t.oAB({type:c}),c.\u0275inj=t.cJS({imports:[_.ez,W,z.I]}),c})()},30597:($,T,h)=>{h.d(T,{l:()=>x});var _=h(94650),C=h(89299),A=h(97185),f=h(42917),m=h(80927);let x=(()=>{class n{constructor(a,t,s,e,y){this.router=a,this.Arout=t,this.toastr=s,this.profileService=e,this.coreService=y}canActivate(a,t){const s=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(e=>{this.userDetails=e,this.permissions=this.userDetails?.permission}),s){const e=a.data.allowedRoles;console.log(e,"allowedRoles");const y=s.some(Z=>e.includes(Z.codename));if(console.log(y),this.coreService.getProfile().subscribe(Z=>{this.userDetails=Z,this.profileService.setUserDetails(this.userDetails);const v=Z?.permission,L=this.profileService.getUserDetails();(!L||L.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}),y)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(a){return new(a||n)(_.LFG(C.F0),_.LFG(C.gz),_.LFG(A._W),_.LFG(f.J),_.LFG(m.p))},n.\u0275prov=_.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);