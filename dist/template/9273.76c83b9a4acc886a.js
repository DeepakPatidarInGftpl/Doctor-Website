"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9273],{99273:(M,q,l)=>{l.r(q),l.d(q,{StockTransferRequestListModule:()=>te});var d=l(36895),m=l(4392),C=l(2454),g=l.n(C),S=l(96166),R=l(12983),_=l.n(R),T=l(80574),h=l(94327),c=l(24006),e=l(94650),p=l(42236),v=l(42917),Z=l(97185),b=l(43443),k=l(73162),A=l(54333),B=l(54040);function J(o,a){1&o&&(e.TgZ(0,"div",66)(1,"a",67),e._UZ(2,"img",68),e._uU(3,"Add Stock Transfer Request "),e.qZA()())}function N(o,a){if(1&o&&(e.TgZ(0,"option",69),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.s9C("value",null==t?null:t.title),e.xp6(1),e.Oqu(null==t?null:t.title)}}function F(o,a){if(1&o&&(e.TgZ(0,"option",69),e._uU(1),e.qZA()),2&o){const t=a.$implicit;e.s9C("value",null==t?null:t.title),e.xp6(1),e.Oqu(null==t?null:t.title)}}function O(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"select",79,80),e.NdJ("change",function(i){e.CHM(t);const s=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.changeStatusRejected(i.target.value,null==s?null:s.id))}),e.TgZ(3,"option",32),e._uU(4,"Select Status"),e.qZA(),e.TgZ(5,"option",36),e._uU(6,"Rejected"),e.qZA(),e.TgZ(7,"option",37),e._uU(8,"Dispatched"),e.qZA()()()}}function w(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"select",79,80),e.NdJ("change",function(i){e.CHM(t);const s=e.oxw().$implicit,r=e.oxw(2);return e.KtG(r.changeStatusRejected(i.target.value,null==s?null:s.id))}),e.TgZ(3,"option",32),e._uU(4,"Select Status"),e.qZA(),e.TgZ(5,"option",38),e._uU(6,"Received"),e.qZA()()()}}const y=function(o,a,t){return{"bg-lightgreen":o,"bg-lightred":a,"bg-lightyellow":t}};function I(o,a){if(1&o&&(e.TgZ(0,"span",75),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.Q6J("ngClass",e.kEZ(2,y,"Received"===(null==t?null:t.status)||"Approved"===(null==t?null:t.status),"Rejected"===(null==t?null:t.status),"Dispatched"===(null==t?null:t.status)||"Open"===(null==t?null:t.status))),e.xp6(1),e.Oqu(null==t?null:t.status)}}function P(o,a){if(1&o&&(e.TgZ(0,"a",77),e._UZ(1,"img",82),e.qZA()),2&o){const t=e.oxw(2).$implicit;e.MGl("routerLink","//inventory/update-stock-transfer-request/",t.id,"")}}function E(o,a){if(1&o&&(e.ynx(0),e.YNc(1,P,2,1,"a",81),e.BQk()),2&o){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",t.isEdit)}}function Q(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"a",84),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(2),s=i.index,r=i.$implicit,u=e.oxw(2);return e.KtG(u.confirmText(s,r.id))}),e._UZ(1,"img",85),e.qZA()}}function Y(o,a){if(1&o&&(e.ynx(0),e.YNc(1,Q,2,0,"a",83),e.BQk()),2&o){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",t.isDelete)}}function j(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",71)(3,"input",72),e.NdJ("ngModelChange",function(i){const r=e.CHM(t).index,u=e.oxw(2);return e.KtG(u.selectedRows[r]=i)}),e.qZA(),e._UZ(4,"span",47),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",73)(8,"a",74),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td")(21,"span",75),e._uU(22),e.qZA()(),e.TgZ(23,"td"),e.YNc(24,O,9,0,"div",49),e.YNc(25,w,7,0,"div",49),e.YNc(26,I,2,6,"span",76),e.qZA(),e.TgZ(27,"td")(28,"a",77),e._UZ(29,"img",78),e.qZA(),e.YNc(30,E,2,1,"ng-container",49),e.YNc(31,Y,2,1,"ng-container",49),e.qZA()()}if(2&o){const t=a.$implicit,n=a.index,i=e.oxw(2);e.xp6(3),e.Q6J("ngModel",i.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.MGl("routerLink","//inventory/details-stock-transfer-request/",null==t?null:t.id,""),e.xp6(1),e.Oqu(null==t?null:t.transfer_request_number),e.xp6(2),e.Oqu(null==t?null:t.request_date),e.xp6(2),e.Oqu(null==t||null==t.from_branch?null:t.from_branch.title),e.xp6(2),e.Oqu(null==t||null==t.to_branch?null:t.to_branch.title),e.xp6(2),e.Oqu(null==t?null:t.total_qty),e.xp6(2),e.Oqu(null==t?null:t.total_product),e.xp6(2),e.Q6J("ngClass",e.kEZ(17,y,"Received"===(null==t?null:t.status)||"Approved"===(null==t?null:t.status),"Rejected"===(null==t?null:t.status),"Dispatched"===(null==t?null:t.status)||"Open"===(null==t?null:t.status))),e.xp6(1),e.Oqu(null==t?null:t.status),e.xp6(2),e.Q6J("ngIf","Open"==(null==t?null:t.status)),e.xp6(1),e.Q6J("ngIf","Dispatched"==(null==t?null:t.status)),e.xp6(1),e.Q6J("ngIf","Open"!==(null==t?null:t.status)&&"Dispatched"!==(null==t?null:t.status)),e.xp6(2),e.MGl("routerLink","//inventory/details-stock-transfer-request/",t.id,""),e.xp6(2),e.Q6J("ngIf","Open"==(null==t?null:t.status)),e.xp6(1),e.Q6J("ngIf","Open"==(null==t?null:t.status))}}const G=function(o,a){return{itemsPerPage:o,currentPage:a}};function H(o,a){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,j,32,21,"tr",70),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,G,t.itemsPerPage,t.p)))}}function K(o,a){1&o&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",86)(3,"p",87),e._uU(4,"Data not available"),e.qZA()()()())}function W(o,a){1&o&&e._UZ(0,"mat-progress-bar",88)}const V=[{path:"",component:(()=>{class o{constructor(t,n,i,s){this.stockService=t,this.cs=n,this.toastr=i,this.commonService=s,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.minDate="",this.maxDate="",this.transferDate=new c.NI(""),this.loader=!0,this.allSelected=!1,this.fromBranch=[],this.toBranch=[],this.select=!1,this.key="id",this.reverse=!1}confirmText(t,n){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.stockService.deleteStockTransferRequest(n).subscribe(s=>{this.delRes=s,this.delRes.success?(this.ngOnInit(),g().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):g().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,n){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.stockService.StockTransferRequestIsActive(n,"").subscribe(s=>{this.delRes=s,this.delRes.success&&(g().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(t,n){g().fire({title:"Are you sure?",text:"Do you want to Active this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.stockService.StockTransferRequestIsActive(n,"").subscribe(s=>{this.delRes=s,this.delRes.success&&(g().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){this.stockService.getStockTransferRequest().subscribe(n=>{this.tableData=n,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(n=>{this.userDetails=n,this.userDetails?.permission?.map(s=>{"inventory"===s.content_type.app_label&&"stocktransfer"===s.content_type.model&&"add_stocktransfer"==s.codename?this.isAdd=s.codename:"inventory"===s.content_type.app_label&&"stocktransfer"===s.content_type.model&&"change_stocktransfer"==s.codename?this.isEdit=s.codename:"inventory"===s.content_type.app_label&&"stocktransfer"===s.content_type.model&&"delete_stocktransfer"==s.codename&&(this.isDelete=s.codename)})}),this.getBranch();const t=localStorage.getItem("financialYear");this.transferDateValidation(t)}selectAlll(){this.selectedRows.fill(this.allSelected)}getBranch(){this.stockService.getBranch().subscribe(t=>{this.fromBranch=t,this.toBranch=t})}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>!!n?.transfer_request_number.toLocaleLowerCase().match(t))}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new S.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Stock Transfer Request List",10,10),_()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Transfer Number"},{header:"Transfer Date"},{header:"From Branch"},{header:"To Branch"},{header:"Total Qty"},{header:"Total Product"},{header:"Status"},{header:"Is Active"}]}),t.save("stockTransferRequest.pdf")}generatePDFAgain(){const t=new S.default;t.setFontSize(12),t.setTextColor(33,43,54),t.text("Stock Transfer Request ",82,10),t.text("",10,15),_()(t,{head:[["#","Transfer Request Number"," Transfer Request Date ","From Branch","To Branch","Total Qty","Total Product","Status"]],body:this.filteredData.map((i,s)=>[s+1,i.transfer_request_number,i.request_date,i.from_branch?.title,i.to_branch?.title,i.total_qty,i.total_product,i.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),t.save("Stock Transfer Request  .pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),i=n.querySelector("thead tr"),s=n.querySelectorAll("tbody tr"),r=[];return i.querySelectorAll("th").forEach(u=>{const f=u.textContent.trim();"Is Active"!==f&&"Action"!==f&&r.push(f)}),t.push(r),s.forEach(u=>{const f=[];u.querySelectorAll("td").forEach(D=>{f.push(D.textContent.trim())}),t.push(f)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=T.P6.aoa_to_sheet(t),i=T.P6.book_new();T.P6.book_append_sheet(i,n,"Sheet1");const s=T.cW(i,{bookType:"xlsx",type:"array"}),r=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(r,"stockTransferRequest.xlsx")}printTable(){const t=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,r=t.cloneNode(!0),u=r.querySelector("th.thone:nth-child(10)");u&&u.remove();const f=r.querySelector("th.thone:last-child");f&&f.remove(),r.querySelectorAll("tr").forEach(L=>{const x=L.querySelector("td:nth-child(10)");x&&x.remove();const U=L.querySelector("td:last-child");U&&U.remove()});const ne=r.outerHTML,se="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+ne,oe=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=se,window.print(),document.body.innerHTML=oe}transferDateValidation(t){const n=this.transferDate,{formattedMinDate:i,formattedMaxDate:s}=this.commonService.setMinMaxDates(n,t);this.minDate=i,this.maxDate=s}filterData(){let t=this.tableData.slice();if(this.transferDate.value){const n=new Date(this.transferDate.value).toISOString().split("T")[0];t=t.filter(i=>new Date(i?.request_date).toISOString().split("T")[0]===n)}this.FromBranch&&(t=t.filter(n=>n?.from_branch?.title===this.FromBranch)),this.toBranchFilter&&(t=t.filter(n=>n?.to_branch?.title===this.toBranchFilter)),this.statusFilter&&(t=t.filter(n=>n?.status===this.statusFilter)),this.filteredData=t}clearFilter(){this.transferDate.setValue(""),this.FromBranch=null,this.toBranchFilter=null,this.statusFilter=null,this.filterData()}changeStatusRejected(t,n){console.log(t),"Rejected"==t?this.stockService.stockTransferRequestRejected(n).subscribe(i=>{console.log(i),i.success?(this.toastr.success(i.msg),this.ngOnInit()):this.toastr.error(i.error)}):"Dispatched"==t?this.stockService.stockTransferRequestDispatched(n).subscribe(i=>{console.log(i),i.success?(this.toastr.success(i.msg),this.ngOnInit()):this.toastr.error(i.error)}):"Received"==t&&this.stockService.stockTransferRequestRecieved(n).subscribe(i=>{console.log(i),i.success?(this.toastr.success(i.msg),this.ngOnInit()):this.toastr.error(i.error)})}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.tableData.length)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.q),e.Y36(v.J),e.Y36(Z._W),e.Y36(b.R))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-stock-transfer-request-list"]],decls:147,vars:18,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Request No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"formControl","change"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["value","Open"],["value","Approved"],["value","Rejected"],["value","Dispatched"],["value","Received"],["value","Received with missing items"],[1,"form-group","d-flex","justify-content-end"],[1,"btn","btn-filters","p-4",2,"width","20%",3,"click"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//inventory/add-stock-transfer-request",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],["class","badges",3,"ngClass",4,"ngIf"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],[1,"select",3,"change"],["id",""],["class","me-1",3,"routerLink",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,n){if(1&t){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Stock Transfer Request list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Stock Request Transfer"),e.qZA()(),e.YNc(6,J,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(r){return n.titlee=r})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Transfer Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("change",function(){return n.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Select From Branch"),e.qZA(),e.TgZ(47,"select",31),e.NdJ("ngModelChange",function(r){return n.FromBranch=r})("change",function(){return n.filterData()}),e.TgZ(48,"option",32),e._uU(49,"Select From Branch"),e.qZA(),e.YNc(50,N,2,2,"option",33),e.qZA()()(),e.TgZ(51,"div",28)(52,"div",29)(53,"label"),e._uU(54,"Select To Branch"),e.qZA(),e.TgZ(55,"select",31),e.NdJ("ngModelChange",function(r){return n.toBranchFilter=r})("change",function(){return n.filterData()}),e.TgZ(56,"option",32),e._uU(57,"Select To Branch"),e.qZA(),e.YNc(58,F,2,2,"option",33),e.qZA()()(),e.TgZ(59,"div",28)(60,"div",29)(61,"label"),e._uU(62,"Select Status"),e.qZA(),e.TgZ(63,"select",31),e.NdJ("ngModelChange",function(r){return n.statusFilter=r})("change",function(){return n.filterData()}),e.TgZ(64,"option",32),e._uU(65,"Select Status"),e.qZA(),e.TgZ(66,"option",34),e._uU(67,"Open"),e.qZA(),e.TgZ(68,"option",35),e._uU(69,"Approved"),e.qZA(),e.TgZ(70,"option",36),e._uU(71,"Rejected"),e.qZA(),e.TgZ(72,"option",37),e._uU(73,"Dispatched"),e.qZA(),e.TgZ(74,"option",38),e._uU(75,"Received"),e.qZA(),e.TgZ(76,"option",39),e._uU(77,"Received with missing items"),e.qZA()()()()(),e.TgZ(78,"div",40)(79,"a",41),e.NdJ("click",function(){return n.clearFilter()}),e._uU(80,"Clear Filter"),e.qZA()()()()()(),e.TgZ(81,"div",42)(82,"table",43)(83,"thead")(84,"tr")(85,"th",44),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(86,"label",45),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(87,"input",46),e.NdJ("ngModelChange",function(r){return n.allSelected=r})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(88,"span",47),e.qZA(),e._UZ(89,"i",48),e.qZA(),e.TgZ(90,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(91,"Sr. No. "),e._UZ(92,"i",48),e.qZA(),e.TgZ(93,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(94,"Transfer Request Number "),e._UZ(95,"i",48),e.qZA(),e.TgZ(96,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(97,"Transfer Request Date "),e._UZ(98,"i",48),e.qZA(),e.TgZ(99,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(100,"From Branch"),e._UZ(101,"i",48),e.qZA(),e.TgZ(102,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(103,"To Branch"),e._UZ(104,"i",48),e.qZA(),e.TgZ(105,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(106,"Total Qty"),e._UZ(107,"i",48),e.qZA(),e.TgZ(108,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(109,"Total Product"),e._UZ(110,"i",48),e.qZA(),e.TgZ(111,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(112,"Status"),e._UZ(113,"i",48),e.qZA(),e.TgZ(114,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(115,"Change Status"),e._UZ(116,"i",48),e.qZA(),e.TgZ(117,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(118,"Action "),e._UZ(119,"i",48),e.qZA()()(),e.YNc(120,H,4,11,"tbody",49),e.YNc(121,K,5,0,"tbody",49),e.qZA(),e.TgZ(122,"div",50),e.YNc(123,W,1,0,"mat-progress-bar",51),e.qZA(),e.TgZ(124,"div",26)(125,"div",52)(126,"div",53),e._uU(127," Show per page "),e.TgZ(128,"select",54,55),e.NdJ("ngModelChange",function(r){return n.itemsPerPage=r})("change",function(){e.CHM(i);const r=e.MAs(129);return e.KtG(n.changePg(r.value))}),e.TgZ(130,"option",56),e._uU(131,"10"),e.qZA(),e.TgZ(132,"option",57),e._uU(133,"20"),e.qZA(),e.TgZ(134,"option",58),e._uU(135,"30"),e.qZA(),e.TgZ(136,"option",59),e._uU(137,"50"),e.qZA(),e.TgZ(138,"option",60),e._uU(139,"100"),e.qZA(),e.TgZ(140,"option",61),e._uU(141,"All"),e.qZA()()()(),e.TgZ(142,"div",62)(143,"div",63)(144,"pagination-controls",64),e.NdJ("pageChange",function(r){return n.p=r}),e.qZA(),e.TgZ(145,"div",65),e._uU(146),e.qZA()()()()()()()}2&t&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("formControl",n.transferDate),e.uIk("min",n.minDate)("max",n.maxDate),e.xp6(5),e.Q6J("ngModel",n.FromBranch),e.xp6(3),e.Q6J("ngForOf",n.fromBranch),e.xp6(5),e.Q6J("ngModel",n.toBranchFilter),e.xp6(3),e.Q6J("ngForOf",n.toBranch),e.xp6(5),e.Q6J("ngModel",n.statusFilter),e.xp6(24),e.Q6J("ngModel",n.allSelected),e.xp6(33),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.filteredData?null:n.filteredData.length)),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq("Showing ",n.itemsPerPage," to ",null==n.tableData?null:n.tableData.length," of ",n.p," entries"))},dependencies:[d.mk,d.sg,d.O5,m.yS,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,c.oH,k.pW,A.LS,A._s,B.T],styles:[".select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:38px;width:75%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}"]}),o})(),canActivate:[l(30597).l],data:{allowedRoles:["view_transferrequest"]}}];let X=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.Bz.forChild(V),m.Bz]}),o})();var ee=l(8468);let te=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,X,ee.I]}),o})()},30597:(M,q,l)=>{l.d(q,{l:()=>R});var d=l(94650),m=l(4392),C=l(97185),g=l(42917),S=l(80927);let R=(()=>{class _{constructor(h,c,e,p,v){this.router=h,this.Arout=c,this.toastr=e,this.profileService=p,this.coreService=v}canActivate(h,c){const e=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(p=>{this.userDetails=p,this.permissions=this.userDetails?.permission}),e){const p=h.data.allowedRoles;console.log(p,"allowedRoles");const v=e.some(Z=>p.includes(Z.codename));if(console.log(v),this.coreService.getProfile().subscribe(Z=>{this.userDetails=Z,this.profileService.setUserDetails(this.userDetails);const b=Z?.permission,k=this.profileService.getUserDetails();(!k||k.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return _.\u0275fac=function(h){return new(h||_)(d.LFG(m.F0),d.LFG(m.gz),d.LFG(C._W),d.LFG(g.J),d.LFG(S.p))},_.\u0275prov=d.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);