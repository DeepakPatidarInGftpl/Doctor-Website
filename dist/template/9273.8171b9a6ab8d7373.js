"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9273],{99273:(x,S,r)=>{r.r(S),r.d(S,{StockTransferRequestListModule:()=>ee});var d=r(36895),m=r(89299),k=r(2454),g=r.n(k),C=r(96166),R=r(12983),p=r.n(R),T=r(80574),f=r(94327),e=r(94650),v=r(42236),h=r(42917),Z=r(97185),c=r(24006),b=r(73162),q=r(54333),M=r(54040);function B(o,l){1&o&&(e.TgZ(0,"div",65)(1,"a",66),e._UZ(2,"img",67),e._uU(3,"Add Stock Transfer Request "),e.qZA()())}function J(o,l){if(1&o&&(e.TgZ(0,"option",68),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.s9C("value",null==t?null:t.title),e.xp6(1),e.Oqu(null==t?null:t.title)}}function N(o,l){if(1&o&&(e.TgZ(0,"option",68),e._uU(1),e.qZA()),2&o){const t=l.$implicit;e.s9C("value",null==t?null:t.title),e.xp6(1),e.Oqu(null==t?null:t.title)}}function F(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"select",78,79),e.NdJ("change",function(s){e.CHM(t);const i=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.changeStatusRejected(s.target.value,null==i?null:i.id))}),e.TgZ(3,"option",32),e._uU(4,"Select Status"),e.qZA(),e.TgZ(5,"option",36),e._uU(6,"Rejected"),e.qZA(),e.TgZ(7,"option",37),e._uU(8,"Dispatched"),e.qZA()()()}}function O(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"select",78,79),e.NdJ("change",function(s){e.CHM(t);const i=e.oxw().$implicit,a=e.oxw(2);return e.KtG(a.changeStatusRejected(s.target.value,null==i?null:i.id))}),e.TgZ(3,"option",32),e._uU(4,"Select Status"),e.qZA(),e.TgZ(5,"option",38),e._uU(6,"Received"),e.qZA()()()}}const A=function(o,l,t){return{"bg-lightgreen":o,"bg-lightred":l,"bg-lightyellow":t}};function w(o,l){if(1&o&&(e.TgZ(0,"span",74),e._uU(1),e.qZA()),2&o){const t=e.oxw().$implicit;e.Q6J("ngClass",e.kEZ(2,A,"Received"===(null==t?null:t.status)||"Approved"===(null==t?null:t.status),"Rejected"===(null==t?null:t.status),"Dispatched"===(null==t?null:t.status)||"Open"===(null==t?null:t.status))),e.xp6(1),e.Oqu(null==t?null:t.status)}}function I(o,l){if(1&o&&(e.TgZ(0,"a",76),e._UZ(1,"img",81),e.qZA()),2&o){const t=e.oxw(2).$implicit;e.MGl("routerLink","//inventory/update-stock-transfer-request/",t.id,"")}}function P(o,l){if(1&o&&(e.ynx(0),e.YNc(1,I,2,1,"a",80),e.BQk()),2&o){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",t.isEdit)}}function E(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"a",83),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(2),i=s.index,a=s.$implicit,u=e.oxw(2);return e.KtG(u.confirmText(i,a.id))}),e._UZ(1,"img",84),e.qZA()}}function Q(o,l){if(1&o&&(e.ynx(0),e.YNc(1,E,2,0,"a",82),e.BQk()),2&o){const t=e.oxw(3);e.xp6(1),e.Q6J("ngIf",t.isDelete)}}function Y(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",70)(3,"input",71),e.NdJ("ngModelChange",function(s){const a=e.CHM(t).index,u=e.oxw(2);return e.KtG(u.selectedRows[a]=s)}),e.qZA(),e._UZ(4,"span",47),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",72)(8,"a",73),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td")(21,"span",74),e._uU(22),e.qZA()(),e.TgZ(23,"td"),e.YNc(24,F,9,0,"div",49),e.YNc(25,O,7,0,"div",49),e.YNc(26,w,2,6,"span",75),e.qZA(),e.TgZ(27,"td")(28,"a",76),e._UZ(29,"img",77),e.qZA(),e.YNc(30,P,2,1,"ng-container",49),e.YNc(31,Q,2,1,"ng-container",49),e.qZA()()}if(2&o){const t=l.$implicit,n=l.index,s=e.oxw(2);e.xp6(3),e.Q6J("ngModel",s.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.MGl("routerLink","//inventory/details-stock-transfer-request/",null==t?null:t.id,""),e.xp6(1),e.Oqu(null==t?null:t.transfer_request_number),e.xp6(2),e.Oqu(null==t?null:t.request_date),e.xp6(2),e.Oqu(null==t||null==t.from_branch?null:t.from_branch.title),e.xp6(2),e.Oqu(null==t||null==t.to_branch?null:t.to_branch.title),e.xp6(2),e.Oqu(null==t?null:t.total_qty),e.xp6(2),e.Oqu(null==t?null:t.total_product),e.xp6(2),e.Q6J("ngClass",e.kEZ(17,A,"Received"===(null==t?null:t.status)||"Approved"===(null==t?null:t.status),"Rejected"===(null==t?null:t.status),"Dispatched"===(null==t?null:t.status)||"Open"===(null==t?null:t.status))),e.xp6(1),e.Oqu(null==t?null:t.status),e.xp6(2),e.Q6J("ngIf","Open"==(null==t?null:t.status)),e.xp6(1),e.Q6J("ngIf","Dispatched"==(null==t?null:t.status)),e.xp6(1),e.Q6J("ngIf","Open"!==(null==t?null:t.status)&&"Dispatched"!==(null==t?null:t.status)),e.xp6(2),e.MGl("routerLink","//inventory/details-stock-transfer-request/",t.id,""),e.xp6(2),e.Q6J("ngIf","Open"==(null==t?null:t.status)),e.xp6(1),e.Q6J("ngIf","Open"==(null==t?null:t.status))}}const j=function(o,l){return{itemsPerPage:o,currentPage:l}};function G(o,l){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,Y,32,21,"tr",69),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,j,t.itemsPerPage,t.p)))}}function H(o,l){1&o&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",85)(3,"p",86),e._uU(4,"Data not available"),e.qZA()()()())}function W(o,l){1&o&&e._UZ(0,"mat-progress-bar",87)}const z=[{path:"",component:(()=>{class o{constructor(t,n,s){this.stockService=t,this.cs=n,this.toastr=s,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.fromBranch=[],this.toBranch=[],this.select=!1,this.key="id",this.reverse=!1}confirmText(t,n){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.stockService.deleteStockTransferRequest(n).subscribe(i=>{this.delRes=i,this.delRes.success?(this.ngOnInit(),g().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):g().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,n){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.stockService.StockTransferRequestIsActive(n,"").subscribe(i=>{this.delRes=i,this.delRes.success&&(g().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(t,n){g().fire({title:"Are you sure?",text:"Do you want to Active this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.stockService.StockTransferRequestIsActive(n,"").subscribe(i=>{this.delRes=i,this.delRes.success&&(g().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){this.stockService.getStockTransferRequest().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(s=>{"inventory"===s.content_type.app_label&&"stocktransfer"===s.content_type.model&&"add_stocktransfer"==s.codename?this.isAdd=s.codename:"inventory"===s.content_type.app_label&&"stocktransfer"===s.content_type.model&&"change_stocktransfer"==s.codename?this.isEdit=s.codename:"inventory"===s.content_type.app_label&&"stocktransfer"===s.content_type.model&&"delete_stocktransfer"==s.codename&&(this.isDelete=s.codename)})}),this.getBranch()}selectAlll(){this.selectedRows.fill(this.allSelected)}getBranch(){this.stockService.getBranch().subscribe(t=>{this.fromBranch=t,this.toBranch=t})}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>!!n?.transfer_request_number.toLocaleLowerCase().match(t))}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new C.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Stock Transfer Request List",10,10),p()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Transfer Number"},{header:"Transfer Date"},{header:"From Branch"},{header:"To Branch"},{header:"Total Qty"},{header:"Total Product"},{header:"Status"},{header:"Is Active"}]}),t.save("stockTransferRequest.pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),s=n.querySelector("thead tr"),i=n.querySelectorAll("tbody tr"),a=[];return s.querySelectorAll("th").forEach(u=>{const _=u.textContent.trim();"Is Active"!==_&&"Action"!==_&&a.push(_)}),t.push(a),i.forEach(u=>{const _=[];u.querySelectorAll("td").forEach(y=>{_.push(y.textContent.trim())}),t.push(_)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=T.P6.aoa_to_sheet(t),s=T.P6.book_new();T.P6.book_append_sheet(s,n,"Sheet1");const i=T.cW(s,{bookType:"xlsx",type:"array"}),a=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,f.saveAs)(a,"stockTransferRequest.xlsx")}printTable(){const t=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,a=t.cloneNode(!0),u=a.querySelector("th.thone:nth-child(10)");u&&u.remove();const _=a.querySelector("th.thone:last-child");_&&_.remove(),a.querySelectorAll("tr").forEach(L=>{const U=L.querySelector("td:nth-child(10)");U&&U.remove();const D=L.querySelector("td:last-child");D&&D.remove()});const te=a.outerHTML,ne="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+te,se=document.body.innerHTML;document.body.innerHTML=ne,window.print(),document.body.innerHTML=se}filterData(){let t=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];t=t.filter(s=>new Date(s?.request_date).toISOString().split("T")[0]===n)}this.FromBranch&&(t=t.filter(n=>n?.from_branch?.title===this.FromBranch)),this.toBranchFilter&&(t=t.filter(n=>n?.to_branch?.title===this.toBranchFilter)),this.statusFilter&&(t=t.filter(n=>n?.status===this.statusFilter)),this.filteredData=t}clearFilter(){this.date=null,this.FromBranch=null,this.toBranchFilter=null,this.statusFilter=null,this.filterData()}changeStatusRejected(t,n){console.log(t),"Rejected"==t?this.stockService.stockTransferRequestRejected(n).subscribe(s=>{console.log(s),s.success?(this.toastr.success(s.msg),this.ngOnInit()):this.toastr.error(s.error)}):"Dispatched"==t?this.stockService.stockTransferRequestDispatched(n).subscribe(s=>{console.log(s),s.success?(this.toastr.success(s.msg),this.ngOnInit()):this.toastr.error(s.error)}):"Received"==t&&this.stockService.stockTransferRequestRecieved(n).subscribe(s=>{console.log(s),s.success?(this.toastr.success(s.msg),this.ngOnInit()):this.toastr.error(s.error)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(v.q),e.Y36(h.J),e.Y36(Z._W))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-stock-transfer-request-list"]],decls:146,vars:16,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Request No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["value","Open"],["value","Approved"],["value","Rejected"],["value","Dispatched"],["value","Received"],["value","Received with missing items"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//inventory/add-stock-transfer-request",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],["class","badges",3,"ngClass",4,"ngIf"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],[1,"select",3,"change"],["id",""],["class","me-1",3,"routerLink",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Stock Transfer Request list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Stock Request Transfer"),e.qZA()(),e.YNc(6,B,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(i){return n.titlee=i})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return n.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Transfer Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(i){return n.date=i})("ngModelChange",function(){return n.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Select From Branch"),e.qZA(),e.TgZ(47,"select",31),e.NdJ("ngModelChange",function(i){return n.FromBranch=i})("change",function(){return n.filterData()}),e.TgZ(48,"option",32),e._uU(49,"Select From Branch"),e.qZA(),e.YNc(50,J,2,2,"option",33),e.qZA()()(),e.TgZ(51,"div",28)(52,"div",29)(53,"label"),e._uU(54,"Select To Branch"),e.qZA(),e.TgZ(55,"select",31),e.NdJ("ngModelChange",function(i){return n.toBranchFilter=i})("change",function(){return n.filterData()}),e.TgZ(56,"option",32),e._uU(57,"Select To Branch"),e.qZA(),e.YNc(58,N,2,2,"option",33),e.qZA()()(),e.TgZ(59,"div",28)(60,"div",29)(61,"label"),e._uU(62,"Select Status"),e.qZA(),e.TgZ(63,"select",31),e.NdJ("ngModelChange",function(i){return n.statusFilter=i})("change",function(){return n.filterData()}),e.TgZ(64,"option",32),e._uU(65,"Select Status"),e.qZA(),e.TgZ(66,"option",34),e._uU(67,"Open"),e.qZA(),e.TgZ(68,"option",35),e._uU(69,"Approved"),e.qZA(),e.TgZ(70,"option",36),e._uU(71,"Rejected"),e.qZA(),e.TgZ(72,"option",37),e._uU(73,"Dispatched"),e.qZA(),e.TgZ(74,"option",38),e._uU(75,"Received"),e.qZA(),e.TgZ(76,"option",39),e._uU(77,"Received with missing items"),e.qZA()()()()(),e.TgZ(78,"div",40),e.NdJ("click",function(){return n.clearFilter()}),e.TgZ(79,"a",41),e._uU(80,"Clear Filter"),e.qZA()()()()()(),e.TgZ(81,"div",42)(82,"table",43)(83,"thead")(84,"tr")(85,"th",44),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(86,"label",45),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(87,"input",46),e.NdJ("ngModelChange",function(i){return n.allSelected=i})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(88,"span",47),e.qZA(),e._UZ(89,"i",48),e.qZA(),e.TgZ(90,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(91,"Sr. No. "),e._UZ(92,"i",48),e.qZA(),e.TgZ(93,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(94,"Transfer Request Number "),e._UZ(95,"i",48),e.qZA(),e.TgZ(96,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(97,"Transfer Request Date "),e._UZ(98,"i",48),e.qZA(),e.TgZ(99,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(100,"From Branch"),e._UZ(101,"i",48),e.qZA(),e.TgZ(102,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(103,"To Branch"),e._UZ(104,"i",48),e.qZA(),e.TgZ(105,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(106,"Total Qty"),e._UZ(107,"i",48),e.qZA(),e.TgZ(108,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(109,"Total Product"),e._UZ(110,"i",48),e.qZA(),e.TgZ(111,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(112,"Status"),e._UZ(113,"i",48),e.qZA(),e.TgZ(114,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(115,"Change Status"),e._UZ(116,"i",48),e.qZA(),e.TgZ(117,"th",44),e.NdJ("click",function(){return n.sort("id")}),e._uU(118,"Action "),e._UZ(119,"i",48),e.qZA()()(),e.YNc(120,G,4,11,"tbody",49),e.YNc(121,H,5,0,"tbody",49),e.qZA(),e.TgZ(122,"div",50),e.YNc(123,W,1,0,"mat-progress-bar",51),e.qZA(),e.TgZ(124,"div",26)(125,"div",52)(126,"div",53),e._uU(127," Show per page "),e.TgZ(128,"select",54),e.NdJ("ngModelChange",function(i){return n.itemsPerPage=i}),e.TgZ(129,"option",55),e._uU(130,"10"),e.qZA(),e.TgZ(131,"option",56),e._uU(132,"20"),e.qZA(),e.TgZ(133,"option",57),e._uU(134,"30"),e.qZA(),e.TgZ(135,"option",58),e._uU(136,"50"),e.qZA(),e.TgZ(137,"option",59),e._uU(138,"100"),e.qZA(),e.TgZ(139,"option",60),e._uU(140,"All"),e.qZA()()()(),e.TgZ(141,"div",61)(142,"div",62)(143,"pagination-controls",63),e.NdJ("pageChange",function(i){return n.p=i}),e.qZA(),e.TgZ(144,"div",64),e._uU(145),e.qZA()()()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("ngModel",n.date),e.xp6(5),e.Q6J("ngModel",n.FromBranch),e.xp6(3),e.Q6J("ngForOf",n.fromBranch),e.xp6(5),e.Q6J("ngModel",n.toBranchFilter),e.xp6(3),e.Q6J("ngForOf",n.toBranch),e.xp6(5),e.Q6J("ngModel",n.statusFilter),e.xp6(24),e.Q6J("ngModel",n.allSelected),e.xp6(33),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.filteredData?null:n.filteredData.length)),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(17),e.lnq("Showing ",n.itemsPerPage," to ",n.itemsPerPage," of ",n.itemsPerPage," entries"))},dependencies:[d.mk,d.sg,d.O5,m.yS,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,b.pW,q.LS,q._s,M.T],styles:[".select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:38px;width:75%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}"]}),o})(),canActivate:[r(30597).l],data:{allowedRoles:["view_transferrequest"]}}];let V=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.Bz.forChild(z),m.Bz]}),o})();var X=r(8468);let ee=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,V,X.I]}),o})()},30597:(x,S,r)=>{r.d(S,{l:()=>R});var d=r(94650),m=r(89299),k=r(97185),g=r(42917),C=r(80927);let R=(()=>{class p{constructor(f,e,v,h,Z){this.router=f,this.Arout=e,this.toastr=v,this.profileService=h,this.coreService=Z}canActivate(f,e){const v=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(h=>{this.userDetails=h,this.permissions=this.userDetails?.permission}),v){const h=f.data.allowedRoles;console.log(h,"allowedRoles");const Z=v.some(c=>h.includes(c.codename));if(console.log(Z),this.coreService.getProfile().subscribe(c=>{this.userDetails=c,this.profileService.setUserDetails(this.userDetails);const b=c?.permission,q=this.profileService.getUserDetails();(!q||q.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())}),Z)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(f){return new(f||p)(d.LFG(m.F0),d.LFG(m.gz),d.LFG(k._W),d.LFG(g.J),d.LFG(C.p))},p.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);