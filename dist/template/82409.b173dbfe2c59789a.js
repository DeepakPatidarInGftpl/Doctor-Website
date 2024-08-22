"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[82409],{60843:($,S,h)=>{h.d(S,{s:()=>_});var g=h(92340),b=h(94650),T=h(80529);let _=(()=>{class v{constructor(s){this.http=s,this.apiUrl=`${g.N.api}`}getSalesNumber(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/numbers/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getCutomerRetention(s,r,a,e){let l=this.apiUrl+"/pv-api/customer-retention-rate/";const t=[];return s&&t.push(`start_date=${s}`),r&&t.push(`end_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getTotalSalePurchase(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/total-sale-vs-total-purchase/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getDailySales(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/daily-sales/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getSalevsPurchase(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/sale_vs_purchase/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getCategoryWiseSale(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/category-wise-sale/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getSubCatWiseSale(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/subcategory-wise-sale/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getInventory(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/fsn-analysis/";const t=[];return s&&t.push(`start_date=${s}`),r&&t.push(`end_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getCustomerActivity(){return this.http.get(this.apiUrl+"/pv-api/dashboard/customers-activity/")}getTopCustomer(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/top-20-customers/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getRecentlySales(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/recently-sale/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getRecentlyAddedProduct(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/recently-added-products/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getBestSellingProduct(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/best-selling-products/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getLeastSellingProduct(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/least-selling-products/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getTotalRecvsPay(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/total-receivables-vs-total-payables/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getGrowth(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/growth-graph/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getGrossNetProfit(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/gross-profit-net-profit/";const t=[];return s&&t.push(`start_date=${s}`),r&&t.push(`end_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getUnpaidInvoices(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/unpaid-invoices/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getTotalReceivables(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/total-receivable/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getTodayPayables(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/total-payable/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getTodayExpense(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/expenses/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getDepartmentWiseTarget(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/departments_wise_targets/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getEployeeTargetAchieved(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/employee-target-achievement/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getEmployeeTop10(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/top-10-employess/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getEmployeeTargetGraph(s,r,a,e){let l=this.apiUrl+"/pv-api/dashboard/employee-target-graph/";const t=[];return s&&t.push(`from_date=${s}`),r&&t.push(`to_date=${r}`),a&&t.push(`branch=${a}`),e&&t.push(`financial_year=${e}`),t.length>0&&(l+="?"+t.join("&")),this.http.get(l)}getAnalysisInventoryList(s,r,a){let e=this.apiUrl+"/pv-api/dashboard/fsn-analysis-product-list/";const l=[];return s&&l.push(`start_date=${s}`),r&&l.push(`end_date=${r}`),a&&l.push(`financial_year=${a}`),l.length>0&&(e+="?"+l.join("&")),this.http.get(e)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}getDayBook(s,r,a){let e=this.apiUrl+"/api/reports/profit_and_loss/";const l=[];return s&&l.push(`start_date=${s}`),r&&l.push(`end_date=${r}`),l.length>0&&(e+="?"+l.join("&")),a&&l.push(`financial_year=${a}`),this.http.get(e)}}return v.\u0275fac=function(s){return new(s||v)(b.LFG(T.eN))},v.\u0275prov=b.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},82409:($,S,h)=>{h.r(S),h.d(S,{SalesReturnListModule:()=>X});var g=h(36895),b=h(4392),T=h(2454),_=h.n(T),v=h(96166),Z=h(12983),s=h.n(Z),r=h(80574),a=h(94327),e=h(94650),l=h(72170),t=h(42917),A=h(60843),f=h(24006),R=h(73162),L=h(54333),q=h(54040);function P(u,d){if(1&u){const i=e.EpF();e.TgZ(0,"a",72)(1,"input",73,74),e.NdJ("change",function(o){const p=e.CHM(i).$implicit,m=e.oxw(2);return e.KtG(m.SelectedBranch(p.id,o.target.checked))}),e.qZA(),e.TgZ(3,"label",75),e.NdJ("click",function(o){e.CHM(i);const c=e.oxw(2);return e.KtG(c.onLabelClick(o))}),e._uU(4),e.qZA()()}if(2&u){const i=d.$implicit,n=d.index,o=e.oxw(2);e.xp6(1),e.Q6J("value",i.id)("checked",o.selectData.includes(i.id))("id","checkboxCat-"+n),e.xp6(2),e.Q6J("for","checkboxCat-"+n),e.xp6(1),e.Oqu(i.title)}}function B(u,d){if(1&u&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&u){const i=e.oxw(2);e.xp6(1),e.Oqu(i.selectData.length+" Selected")}}const N=function(){return{standalone:!0}};function w(u,d){if(1&u){const i=e.EpF();e.TgZ(0,"div",65)(1,"div",66)(2,"button",67),e._uU(3,"Select Branch"),e.qZA(),e.TgZ(4,"ul",68)(5,"li")(6,"input",69),e.NdJ("ngModelChange",function(o){e.CHM(i);const c=e.oxw();return e.KtG(c.searchBranch=o)})("ngModelChange",function(){e.CHM(i);const o=e.oxw();return e.KtG(o.filterBranch())}),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,P,5,5,"a",70),e.qZA()()(),e.TgZ(9,"div",71),e.YNc(10,B,2,1,"span",48),e.qZA()()}if(2&u){const i=e.oxw();e.xp6(6),e.Q6J("ngModel",i.searchBranch)("ngModelOptions",e.DdM(4,N)),e.xp6(2),e.Q6J("ngForOf",i.filteredBranchList),e.xp6(2),e.Q6J("ngIf",i.selectData.length>0)}}function J(u,d){1&u&&(e.TgZ(0,"a",76),e._UZ(1,"img",77),e._uU(2,"Add Sales Return "),e.qZA())}function k(u,d){if(1&u&&(e.TgZ(0,"option",78),e._uU(1),e.qZA()),2&u){const i=d.$implicit;e.s9C("value",null==i?null:i.customer_bill_no),e.xp6(1),e.hij(" ",null==i?null:i.customer_bill_no,"")}}function E(u,d){if(1&u&&(e.TgZ(0,"a",85),e._UZ(1,"img",89),e.qZA()),2&u){const i=e.oxw().$implicit;e.MGl("routerLink","//sales/updatesalesReturn/",i.id,"")}}function O(u,d){if(1&u){const i=e.EpF();e.TgZ(0,"a",90),e.NdJ("click",function(){e.CHM(i);const o=e.oxw(),c=o.index,p=o.$implicit,m=e.oxw(2);return e.KtG(m.confirmText(c,p.id))}),e._UZ(1,"img",91),e.qZA()}}const I=function(u,d,i){return{"bg-lightgreen":u,"bg-lightred":d,"bg-lightyellow":i}};function F(u,d){if(1&u){const i=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",80)(3,"input",81),e.NdJ("ngModelChange",function(o){const p=e.CHM(i).index,m=e.oxw(2);return e.KtG(m.selectedRows[p]=o)}),e.qZA(),e._UZ(4,"span",46),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td",82)(10,"a",83),e._uU(11),e.qZA()(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td")(21,"span",84),e._uU(22),e.qZA()(),e.TgZ(23,"td")(24,"a",85),e._UZ(25,"img",86),e.qZA(),e.YNc(26,E,2,1,"a",87),e.YNc(27,O,2,0,"a",88),e.qZA()()}if(2&u){const i=d.$implicit,n=d.index,o=e.oxw(2);e.xp6(3),e.Q6J("ngModel",o.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.Oqu(null==i?null:i.sale_return_bill_no),e.xp6(2),e.MGl("routerLink","//sales/salesReturnedetails/",i.id,""),e.xp6(1),e.Oqu((null==i||null==i.customer?null:i.customer.name)+" ("+(null==i||null==i.customer?null:i.customer.username)+")"),e.xp6(2),e.Oqu(null==i?null:i.bill_date),e.xp6(2),e.Oqu(null==i||null==i.sale_bill?null:i.sale_bill.customer_bill_no),e.xp6(2),e.Oqu(null==i?null:i.subtotal),e.xp6(2),e.Oqu(null==i?null:i.total),e.xp6(2),e.Q6J("ngClass",e.kEZ(14,I,"Received"===i.status,"Pending"===i.status||"New"===(null==i?null:i.status),"Draft"===i.status)),e.xp6(1),e.Oqu(i.status),e.xp6(2),e.MGl("routerLink","//sales/salesReturnedetails/",i.id,""),e.xp6(2),e.Q6J("ngIf",o.isEdit),e.xp6(1),e.Q6J("ngIf",o.isDelete)}}const j=function(u,d){return{itemsPerPage:u,currentPage:d}};function G(u,d){if(1&u&&(e.TgZ(0,"tbody"),e.YNc(1,F,28,18,"tr",79),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&u){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,i.filteredData,i.key,i.reverse),e.WLB(8,j,i.itemsPerPage,i.p)))}}function Y(u,d){1&u&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",92)(3,"p",93),e._uU(4,"Data not available"),e.qZA()()()())}function Q(u,d){1&u&&e._UZ(0,"mat-progress-bar",94)}const z=[{path:"",component:(()=>{class u{constructor(i,n,o,c){this.saleService=i,this.cs=n,this.datePipe=o,this.dashboardservice=c,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.isAdmin=!1,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}confirmText(i,n){_().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.saleService.deleteSaleReturn(n).subscribe(c=>{this.delRes=c,this.delRes.success?(this.ngOnInit(),_().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(i,1)):_().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(i,n){_().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale return!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.saleService.SalesMaterialOutwardIsActive(n,"").subscribe(c=>{this.delRes=c,this.delRes.success&&(_().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(i,n){_().fire({title:"Are you sure?",text:"Do you want to Active this sale return!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.saleService.SaleReturnIsActive(n,"").subscribe(c=>{this.delRes=c,this.delRes.success&&(_().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){if(localStorage.getItem("financialYear")){let i=localStorage.getItem("financialYear");console.warn(JSON.parse(i));let n=JSON.parse(i);this.getSaleReturnFy(n)}this.cs.userDetails$.subscribe(i=>{this.isAdmin="admin"==i.role}),this.cs.userDetails$.subscribe(i=>{this.userDetails=i,this.userDetails?.permission?.map(o=>{"sale"===o.content_type.app_label&&"salereturn"===o.content_type.model&&"add_salereturn"==o.codename?this.isAdd=o.codename:"sale"===o.content_type.app_label&&"salereturn"===o.content_type.model&&"change_salereturn"==o.codename?this.isEdit=o.codename:"sale"===o.content_type.app_label&&"salereturn"===o.content_type.model&&"delete_salereturn"==o.codename&&(this.isDelete=o.codename)})}),this.getSellBill(),this.getBranch()}getSaleReturnFy(i){const n=JSON.stringify(this.selectData);console.log(n),console.log(n?.length),this.saleService.getSaleReturnfy(i,this.selectData).subscribe(o=>{this.tableData=o,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getSellBill(){this.saleService.getSalesBill().subscribe(i=>{this.saleBillList=i})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(i){this.tableData.forEach(i?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const i=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>{const o=n?.customer?.name.toLocaleLowerCase(),c=n?.customer?.username.toLocaleLowerCase()||"",p=n?.sale_return_bill_no.toLocaleLowerCase();return!(!o.match(i)&&!c.includes(i)&&!p.match(i))})}}sort(i){this.key=i,this.reverse=!this.reverse}formatDate(i){return this.datePipe.transform(i,"yyyy-MM-dd")||""}generatePDF(){const i=new v.default;i.setFontSize(15),i.setTextColor(33,43,54),i.text("Sales Return List",10,10),s()(i,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name "},{header:"Bill Date"},{header:"Bill No."},{header:"Sales Bill"},{header:"Sub Total"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),i.save("salesReturn.pdf")}generatePDFAgain(){const i=new v.default;i.setFontSize(12),i.setTextColor(33,43,54),i.text("Sales Return List",82,10),i.text("",10,15),s()(i,{head:[["#","User Name","Bill Date","Bill No.","Sales Bill","Sub Total","Total","Status"]],body:this.tableData.map((o,c)=>[c+1,o?.customer?.name+" ("+o?.customer?.username+")",this.formatDate(o?.bill_date),o.sale_return_bill_no,o.sale_bill?.customer_bill_no,o.subtotal,o.total,o.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),i.save("Sales Return .pdf")}getVisibleDataFromTable(){const i=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),c=n.querySelectorAll("tbody tr"),p=[];return o.querySelectorAll("th").forEach(m=>{const y=m.textContent.trim();"Is Active"!==y&&"Action"!==y&&p.push(y)}),i.push(p),c.forEach(m=>{const y=[];m.querySelectorAll("td").forEach(C=>{y.push(C.textContent.trim())}),i.push(y)}),i}exportToExcel(){const i=this.getVisibleDataFromTable(),n=r.P6.aoa_to_sheet(i),o=r.P6.book_new();r.P6.book_append_sheet(o,n,"Sheet1");const c=r.cW(o,{bookType:"xlsx",type:"array"}),p=new Blob([c],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,a.saveAs)(p,"saleReturn.xlsx")}printTable(){const i=document.getElementById("mytable"),n=document.querySelector(".titl");if(!i)return void console.error("Table not found");if(!n)return void console.error("Title not found");const o=i.cloneNode(!0),c=n.cloneNode(!0),p=o.querySelector("th.thone:nth-child(1)");p&&p.remove();const m=o.querySelector("th.thone:last-child");m&&m.remove(),o.querySelectorAll("tr").forEach(U=>{const x=U.querySelector("td:nth-child(1)");x&&x.remove();const M=U.querySelector("td:last-child");M&&M.remove()});const C=document.createElement("div");c.classList.add("spaced-title"),C.appendChild(c),C.appendChild(o);const D=document.createElement("style");D.id="printStyle",D.textContent="\n        @media print {\n            body * {\n                visibility: hidden;\n            }\n            #printContainer, #printContainer * {\n                visibility: visible;\n            }\n            #printContainer {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n            }\n            .spaced-title {\n                margin-top: 60px;\n                margin-bottom: 20px;\n            }\n        }\n    ",document.head.appendChild(D),C.id="printContainer",document.body.appendChild(C),window.print(),window.addEventListener("afterprint",()=>{this.clearData()}),setTimeout(()=>{this.clearData()},2e3)}clearData(){const i=document.getElementById("printContainer"),n=document.getElementById("printStyle");i&&document.body.removeChild(i),n&&document.head.removeChild(n)}filterData(){let i=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];i=i.filter(o=>new Date(o?.bill_date).toISOString().split("T")[0]===n)}this.selectSellBillNo&&(i=i.filter(n=>n?.sale_bill?.customer_bill_no===this.selectSellBillNo)),this.selectedAmount&&(i=i.filter(n=>n?.total<=this.selectedAmount)),this.filteredData=i}clearFilter(){this.date=null,this.selectedAmount=null,this.selectSellBillNo=null,this.filterData()}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.filteredData?.length)}getBranch(){this.dashboardservice.getBranch().subscribe(i=>{this.branchList=i,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(i=>i.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(i,n){if(n)console.log(i),this.selectData.push(i),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const o=this.selectData.findIndex(c=>c==i);console.log(o),-1!==o&&this.selectData.splice(o,1),this.ngOnInit(),console.log(this.selectData)}}}return u.\u0275fac=function(i){return new(i||u)(e.Y36(l.M),e.Y36(t.J),e.Y36(g.uU),e.Y36(A.s))},u.\u0275cmp=e.Xpm({type:u,selectors:[["app-sales-return-list"]],decls:133,vars:16,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],["routerLink","//sales/addsalesReturn","class","btn btn-added",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search User/Bill No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","number","placeholder","Enter Amount",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["routerLink","//sales/addsalesReturn",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(i,n){if(1&i){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Sales Return list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Sales Return"),e.qZA()(),e.TgZ(6,"div",3)(7,"div",4)(8,"div",5),e.YNc(9,w,11,5,"div",6),e.qZA()(),e.YNc(10,J,3,0,"a",7),e.qZA()(),e.TgZ(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"a",13),e._UZ(17,"img",14),e.TgZ(18,"span"),e._UZ(19,"img",15),e.qZA()()(),e.TgZ(20,"div",16)(21,"a",17),e._UZ(22,"img",18),e.qZA(),e.TgZ(23,"div",19)(24,"label")(25,"input",20),e.NdJ("ngModelChange",function(p){return n.titlee=p})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(26,"div",21)(27,"ul")(28,"li")(29,"a",22),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(30,"img",23),e.qZA()(),e.TgZ(31,"li")(32,"a",24),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(33,"img",25),e.qZA()(),e.TgZ(34,"li")(35,"a",26),e.NdJ("click",function(){return n.printTable()}),e._UZ(36,"img",27),e.qZA()()()()(),e.TgZ(37,"div",28)(38,"div",29)(39,"div",4)(40,"div",30)(41,"div",4)(42,"div",31)(43,"div",32)(44,"label"),e._uU(45,"Sale Return Date"),e.qZA(),e.TgZ(46,"input",33),e.NdJ("ngModelChange",function(p){return n.date=p})("ngModelChange",function(){return n.filterData()}),e.qZA()()(),e.TgZ(47,"div",31)(48,"div",32)(49,"label"),e._uU(50,"Due Date"),e.qZA(),e.TgZ(51,"input",33),e.NdJ("ngModelChange",function(p){return n.espireDate=p})("ngModelChange",function(){return n.filterData()}),e.qZA()()(),e.TgZ(52,"div",31)(53,"div",32)(54,"label"),e._uU(55,"Sell Bill No."),e.qZA(),e.TgZ(56,"select",34),e.NdJ("ngModelChange",function(p){return n.selectSellBillNo=p})("change",function(){return n.filterData()}),e.TgZ(57,"option",35),e._uU(58,"Select Sales Order No."),e.qZA(),e.YNc(59,k,2,2,"option",36),e.qZA()()(),e.TgZ(60,"div",31)(61,"div",32)(62,"label"),e._uU(63,"Enter Total Amount"),e.qZA(),e.TgZ(64,"input",37),e.NdJ("ngModelChange",function(p){return n.selectedAmount=p})("keyup",function(){return n.filterData()}),e.qZA(),e.TgZ(65,"span",38),e._uU(66,"Amount Filter (Less than & Equal to Total amount value)"),e.qZA()()()(),e.TgZ(67,"div",39),e.NdJ("click",function(){return n.clearFilter()}),e.TgZ(68,"a",40),e._uU(69,"Clear Filter"),e.qZA()()()()()(),e.TgZ(70,"div",41)(71,"table",42)(72,"thead")(73,"tr")(74,"th",43),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(75,"label",44),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(76,"input",45),e.NdJ("ngModelChange",function(p){return n.allSelected=p})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(77,"span",46),e.qZA(),e._UZ(78,"i",47),e.qZA(),e.TgZ(79,"th",43),e.NdJ("click",function(){return n.sort("id")}),e._uU(80,"Sr. No. "),e._UZ(81,"i",47),e.qZA(),e.TgZ(82,"th",43),e.NdJ("click",function(){return n.sort("id")}),e._uU(83,"Bill No."),e._UZ(84,"i",47),e.qZA(),e.TgZ(85,"th",43),e.NdJ("click",function(){return n.sort("id")}),e._uU(86,"User Name "),e._UZ(87,"i",47),e.qZA(),e.TgZ(88,"th",43),e.NdJ("click",function(){return n.sort("id")}),e._uU(89,"Bill Date "),e._UZ(90,"i",47),e.qZA(),e.TgZ(91,"th",43),e.NdJ("click",function(){return n.sort("id")}),e._uU(92,"Sales Bill"),e._UZ(93,"i",47),e.qZA(),e.TgZ(94,"th",43),e.NdJ("click",function(){return n.sort("id")}),e._uU(95,"Sub Total"),e._UZ(96,"i",47),e.qZA(),e.TgZ(97,"th",43),e.NdJ("click",function(){return n.sort("id")}),e._uU(98,"Total"),e._UZ(99,"i",47),e.qZA(),e.TgZ(100,"th",43),e.NdJ("click",function(){return n.sort("id")}),e._uU(101,"Status"),e._UZ(102,"i",47),e.qZA(),e.TgZ(103,"th",43),e.NdJ("click",function(){return n.sort("id")}),e._uU(104,"Action "),e._UZ(105,"i",47),e.qZA()()(),e.YNc(106,G,4,11,"tbody",48),e.YNc(107,Y,5,0,"tbody",48),e.qZA(),e.TgZ(108,"div",49),e.YNc(109,Q,1,0,"mat-progress-bar",50),e.qZA(),e.TgZ(110,"div",4)(111,"div",51)(112,"div",52),e._uU(113," Show per page "),e.TgZ(114,"select",53,54),e.NdJ("ngModelChange",function(p){return n.itemsPerPage=p})("change",function(){e.CHM(o);const p=e.MAs(115);return e.KtG(n.changePg(p.value))}),e.TgZ(116,"option",55),e._uU(117,"10"),e.qZA(),e.TgZ(118,"option",56),e._uU(119,"20"),e.qZA(),e.TgZ(120,"option",57),e._uU(121,"30"),e.qZA(),e.TgZ(122,"option",58),e._uU(123,"50"),e.qZA(),e.TgZ(124,"option",59),e._uU(125,"100"),e.qZA(),e.TgZ(126,"option",60),e._uU(127,"All"),e.qZA()()()(),e.TgZ(128,"div",61)(129,"div",62)(130,"pagination-controls",63),e.NdJ("pageChange",function(p){return n.p=p}),e.qZA(),e.TgZ(131,"div",64),e._uU(132),e.qZA()()()()()()()}2&i&&(e.xp6(9),e.Q6J("ngIf",n.isAdmin),e.xp6(1),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("ngModel",n.date),e.xp6(5),e.Q6J("ngModel",n.espireDate),e.xp6(5),e.Q6J("ngModel",n.selectSellBillNo),e.xp6(3),e.Q6J("ngForOf",n.saleBillList),e.xp6(5),e.Q6J("ngModel",n.selectedAmount),e.xp6(12),e.Q6J("ngModel",n.allSelected),e.xp6(30),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.filteredData?null:n.filteredData.length)),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq("Showing ",n.itemsPerPage," to ",null==n.filteredData?null:n.filteredData.length," of ",n.p," entries"))},dependencies:[g.mk,g.sg,g.O5,b.yS,f.YN,f.Kr,f.Fj,f.wV,f.Wl,f.EJ,f.JJ,f.On,R.pW,L.LS,L._s,q.T],styles:["input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:468%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),u})(),canActivate:[h(30597).l],data:{allowedRoles:["view_salereturn"]}}];let H=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({imports:[b.Bz.forChild(z),b.Bz]}),u})();var V=h(8468);let X=(()=>{class u{}return u.\u0275fac=function(i){return new(i||u)},u.\u0275mod=e.oAB({type:u}),u.\u0275inj=e.cJS({providers:[g.uU],imports:[g.ez,H,V.I]}),u})()},30597:($,S,h)=>{h.d(S,{l:()=>Z});var g=h(94650),b=h(4392),T=h(97185),_=h(42917),v=h(80927);let Z=(()=>{class s{constructor(a,e,l,t,A){this.router=a,this.Arout=e,this.toastr=l,this.profileService=t,this.coreService=A}canActivate(a,e){const l=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(t=>{this.userDetails=t,this.permissions=this.userDetails?.permission}),l){const t=a.data.allowedRoles,A=l.some(f=>t.includes(f.codename));if(this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(f);const R=f?.permission,L=this.profileService.getUserDetails();(!L||L.length!==R.length)&&(this.profileService.setUserPermission(R),window.location.reload())}),A)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return s.\u0275fac=function(a){return new(a||s)(g.LFG(b.F0),g.LFG(b.gz),g.LFG(T._W),g.LFG(_.J),g.LFG(v.p))},s.\u0275prov=g.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()}}]);