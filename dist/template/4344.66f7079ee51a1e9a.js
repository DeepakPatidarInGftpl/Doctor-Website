"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4344],{74344:(st,h,l)=>{l.r(h),l.d(h,{StockTransferRequestListModule:()=>X});var p=l(36895),f=l(88996),b=l(2454),d=l.n(b),S=l(53583),C=l(12983),R=l.n(C),_=l(80574),A=l(94327),t=l(94650),y=l(42236),L=l(42917),x=l(97185),g=l(24006),U=l(73162),m=l(54333),M=l(54040);function D(o,r){1&o&&(t.TgZ(0,"div",59)(1,"a",60),t._UZ(2,"img",61),t._uU(3,"Add Stock Transfer Request "),t.qZA()())}function B(o,r){if(1&o&&(t.TgZ(0,"option",62),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.s9C("value",null==e?null:e.title),t.xp6(1),t.Oqu(null==e?null:e.title)}}function J(o,r){if(1&o&&(t.TgZ(0,"option",62),t._uU(1),t.qZA()),2&o){const e=r.$implicit;t.s9C("value",null==e?null:e.title),t.xp6(1),t.Oqu(null==e?null:e.title)}}function N(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"select",72,73),t.NdJ("change",function(s){t.CHM(e);const i=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.changeStatusRejected(s.target.value,null==i?null:i.id))}),t.TgZ(3,"option",32),t._uU(4,"Select Status"),t.qZA(),t.TgZ(5,"option",74),t._uU(6,"Rejected"),t.qZA(),t.TgZ(7,"option",75),t._uU(8,"Dispatched"),t.qZA()()()}}function w(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div")(1,"select",72,73),t.NdJ("change",function(s){t.CHM(e);const i=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.changeStatusRejected(s.target.value,null==i?null:i.id))}),t.TgZ(3,"option",32),t._uU(4,"Select Status"),t.qZA(),t.TgZ(5,"option",76),t._uU(6,"Received"),t.qZA()()()}}const T=function(o,r,e){return{"bg-lightgreen":o,"bg-lightred":r,"bg-lightyellow":e}};function F(o,r){if(1&o&&(t.TgZ(0,"span",68),t._uU(1),t.qZA()),2&o){const e=t.oxw().$implicit;t.Q6J("ngClass",t.kEZ(2,T,"Dispatched"===(null==e?null:e.status)||"Approved"===(null==e?null:e.status),"Rejected"===(null==e?null:e.status),"Received"===(null==e?null:e.status)||"Open"===(null==e?null:e.status))),t.xp6(1),t.Oqu(null==e?null:e.status)}}function O(o,r){if(1&o&&(t.TgZ(0,"a",70),t._UZ(1,"img",78),t.qZA()),2&o){const e=t.oxw(2).$implicit;t.MGl("routerLink","//product/update-stock-transfer-request/",e.id,"")}}function I(o,r){if(1&o&&(t.ynx(0),t.YNc(1,O,2,1,"a",77),t.BQk()),2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",e.isEdit)}}function Q(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"a",80),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2),i=s.index,a=s.$implicit,c=t.oxw(2);return t.KtG(c.confirmText(i,a.id))}),t._UZ(1,"img",81),t.qZA()}}function P(o,r){if(1&o&&(t.ynx(0),t.YNc(1,Q,2,0,"a",79),t.BQk()),2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",e.isDelete)}}function E(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",64)(3,"input",65),t.NdJ("ngModelChange",function(s){const a=t.CHM(e).index,c=t.oxw(2);return t.KtG(c.selectedRows[a]=s)}),t.qZA(),t._UZ(4,"span",41),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",66)(8,"a",67),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",68),t._uU(22),t.qZA()(),t.TgZ(23,"td"),t.YNc(24,N,9,0,"div",43),t.YNc(25,w,7,0,"div",43),t.YNc(26,F,2,6,"span",69),t.qZA(),t.TgZ(27,"td")(28,"a",70),t._UZ(29,"img",71),t.qZA(),t.YNc(30,I,2,1,"ng-container",43),t.YNc(31,P,2,1,"ng-container",43),t.qZA()()}if(2&o){const e=r.$implicit,n=r.index,s=t.oxw(2);t.xp6(3),t.Q6J("ngModel",s.selectedRows[n]),t.xp6(3),t.Oqu(n+1),t.xp6(2),t.MGl("routerLink","//product/details-stock-transfer-request/",null==e?null:e.id,""),t.xp6(1),t.Oqu(null==e?null:e.transfer_request_number),t.xp6(2),t.Oqu(null==e?null:e.request_date),t.xp6(2),t.Oqu(null==e||null==e.from_branch?null:e.from_branch.title),t.xp6(2),t.Oqu(null==e||null==e.to_branch?null:e.to_branch.title),t.xp6(2),t.Oqu(null==e?null:e.total_qty),t.xp6(2),t.Oqu(null==e?null:e.total_product),t.xp6(2),t.Q6J("ngClass",t.kEZ(17,T,"Dispatched"===(null==e?null:e.status)||"Approved"===(null==e?null:e.status),"Rejected"===(null==e?null:e.status),"Received"===(null==e?null:e.status)||"Open"===(null==e?null:e.status))),t.xp6(1),t.Oqu(null==e?null:e.status),t.xp6(2),t.Q6J("ngIf","Open"==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf","Dispatched"==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf","Open"!==(null==e?null:e.status)&&"Dispatched"!==(null==e?null:e.status)),t.xp6(2),t.MGl("routerLink","//product/details-stock-transfer-request/",e.id,""),t.xp6(2),t.Q6J("ngIf","Open"==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf","Open"==(null==e?null:e.status))}}const Y=function(o,r){return{itemsPerPage:o,currentPage:r}};function j(o,r){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,E,32,21,"tr",63),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.filteredData,e.key,e.reverse),t.WLB(8,Y,e.itemsPerPage,e.p)))}}function H(o,r){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",82)(3,"p",83),t._uU(4,"Data not available"),t.qZA()()()())}function $(o,r){1&o&&t._UZ(0,"mat-progress-bar",84)}const K=[{path:"",component:(()=>{class o{constructor(e,n,s){this.stockService=e,this.cs=n,this.toastr=s,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.fromBranch=[],this.toBranch=[],this.select=!1,this.key="id",this.reverse=!1}confirmText(e,n){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.stockService.deleteStockTransferRequest(n).subscribe(i=>{this.delRes=i,this.delRes.success?(this.ngOnInit(),d().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(e,1)):d().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,n){d().fire({title:"Are you sure?",text:"Do you want to Deactivate this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.stockService.StockTransferRequestIsActive(n,"").subscribe(i=>{this.delRes=i,this.delRes.success&&(d().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(e,n){d().fire({title:"Are you sure?",text:"Do you want to Active this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.stockService.StockTransferRequestIsActive(n,"").subscribe(i=>{this.delRes=i,this.delRes.success&&(d().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){this.stockService.getStockTransferRequest().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(s=>{"inventory"===s.content_type.app_label&&"stocktransfer"===s.content_type.model&&"add_stocktransfer"==s.codename?this.isAdd=s.codename:"inventory"===s.content_type.app_label&&"stocktransfer"===s.content_type.model&&"change_stocktransfer"==s.codename?this.isEdit=s.codename:"inventory"===s.content_type.app_label&&"stocktransfer"===s.content_type.model&&"delete_stocktransfer"==s.codename&&(this.isDelete=s.codename)})}),this.getBranch()}selectAlll(){this.selectedRows.fill(this.allSelected)}getBranch(){this.stockService.getBranch().subscribe(e=>{this.fromBranch=e,this.toBranch=e})}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>!!n?.transfer_request_number.toLocaleLowerCase().match(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new S.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Stock Transfer Request List",10,10),R()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Transfer Number"},{header:"Transfer Date"},{header:"From Branch"},{header:"To Branch"},{header:"Total Qty"},{header:"Total Product"},{header:"Status"},{header:"Is Active"}]}),e.save("stockTransferRequest.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable"),s=n.querySelector("thead tr"),i=n.querySelectorAll("tbody tr"),a=[];return s.querySelectorAll("th").forEach(c=>{const u=c.textContent.trim();"Is Active"!==u&&"Action"!==u&&a.push(u)}),e.push(a),i.forEach(c=>{const u=[];c.querySelectorAll("td").forEach(Z=>{u.push(Z.textContent.trim())}),e.push(u)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=_.P6.aoa_to_sheet(e),s=_.P6.book_new();_.P6.book_append_sheet(s,n,"Sheet1");const i=_.cW(s,{bookType:"xlsx",type:"array"}),a=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,A.saveAs)(a,"stockTransferRequest.xlsx")}printTable(){const e=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,a=e.cloneNode(!0),c=a.querySelector("th.thone:nth-child(10)");c&&c.remove();const u=a.querySelector("th.thone:last-child");u&&u.remove(),a.querySelectorAll("tr").forEach(q=>{const v=q.querySelector("td:nth-child(10)");v&&v.remove();const k=q.querySelector("td:last-child");k&&k.remove()});const tt=a.outerHTML,et="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+tt,nt=document.body.innerHTML;document.body.innerHTML=et,window.print(),document.body.innerHTML=nt}filterData(){let e=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];e=e.filter(s=>new Date(s?.request_date).toISOString().split("T")[0]===n)}this.FromBranch&&(e=e.filter(n=>n?.from_branch?.title===this.FromBranch)),this.toBranchFilter&&(e=e.filter(n=>n?.to_branch?.title<=this.toBranchFilter)),this.filteredData=e}clearFilter(){this.date=null,this.FromBranch=null,this.toBranchFilter=null,this.filterData()}changeStatusRejected(e,n){console.log(e),"Rejected"==e?this.stockService.stockTransferRequestRejected(n).subscribe(s=>{console.log(s),s.success?(this.toastr.success(s.msg),this.ngOnInit()):this.toastr.error(s.error)}):"Dispatched"==e?this.stockService.stockTransferRequestDispatched(n).subscribe(s=>{console.log(s),s.success?(this.toastr.success(s.msg),this.ngOnInit()):this.toastr.error(s.error)}):"Received"==e&&this.stockService.stockTransferRequestRecieved(n).subscribe(s=>{console.log(s),s.success?(this.toastr.success(s.msg),this.ngOnInit()):this.toastr.error(s.error)})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(y.q),t.Y36(L.J),t.Y36(x._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-stock-transfer-request-list"]],decls:127,vars:15,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Request No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//product/add-stock-transfer-request",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],["class","badges",3,"ngClass",4,"ngIf"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],[1,"select",3,"change"],["id",""],["value","Rejected"],["value","Dispatched"],["value","Received"],["class","me-1",3,"routerLink",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Stock Transfer Request list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Stock Request Transfer"),t.qZA()(),t.YNc(6,D,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(i){return n.titlee=i})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return n.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return n.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),t._uU(41,"Transfer Date"),t.qZA(),t.TgZ(42,"input",30),t.NdJ("ngModelChange",function(i){return n.date=i})("ngModelChange",function(){return n.filterData()}),t.qZA()()(),t.TgZ(43,"div",28)(44,"div",29)(45,"label"),t._uU(46,"Select From Branch"),t.qZA(),t.TgZ(47,"select",31),t.NdJ("ngModelChange",function(i){return n.FromBranch=i})("change",function(){return n.filterData()}),t.TgZ(48,"option",32),t._uU(49,"Select From Branch"),t.qZA(),t.YNc(50,B,2,2,"option",33),t.qZA()()(),t.TgZ(51,"div",28)(52,"div",29)(53,"label"),t._uU(54,"Select To Branch"),t.qZA(),t.TgZ(55,"select",31),t.NdJ("ngModelChange",function(i){return n.toBranchFilter=i})("change",function(){return n.filterData()}),t.TgZ(56,"option",32),t._uU(57,"Select To Branch"),t.qZA(),t.YNc(58,J,2,2,"option",33),t.qZA()()()(),t.TgZ(59,"div",34),t.NdJ("click",function(){return n.clearFilter()}),t.TgZ(60,"a",35),t._uU(61,"Clear Filter"),t.qZA()()()()()(),t.TgZ(62,"div",36)(63,"table",37)(64,"thead")(65,"tr")(66,"th",38),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(67,"label",39),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(68,"input",40),t.NdJ("ngModelChange",function(i){return n.allSelected=i})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(69,"span",41),t.qZA(),t._UZ(70,"i",42),t.qZA(),t.TgZ(71,"th",38),t.NdJ("click",function(){return n.sort("id")}),t._uU(72,"Sr. No. "),t._UZ(73,"i",42),t.qZA(),t.TgZ(74,"th",38),t.NdJ("click",function(){return n.sort("id")}),t._uU(75,"Transfer Request Number "),t._UZ(76,"i",42),t.qZA(),t.TgZ(77,"th",38),t.NdJ("click",function(){return n.sort("id")}),t._uU(78,"Transfer Request Date "),t._UZ(79,"i",42),t.qZA(),t.TgZ(80,"th",38),t.NdJ("click",function(){return n.sort("id")}),t._uU(81,"From Branch"),t._UZ(82,"i",42),t.qZA(),t.TgZ(83,"th",38),t.NdJ("click",function(){return n.sort("id")}),t._uU(84,"To Branch"),t._UZ(85,"i",42),t.qZA(),t.TgZ(86,"th",38),t.NdJ("click",function(){return n.sort("id")}),t._uU(87,"Total Qty"),t._UZ(88,"i",42),t.qZA(),t.TgZ(89,"th",38),t.NdJ("click",function(){return n.sort("id")}),t._uU(90,"Total Product"),t._UZ(91,"i",42),t.qZA(),t.TgZ(92,"th",38),t.NdJ("click",function(){return n.sort("id")}),t._uU(93,"Status"),t._UZ(94,"i",42),t.qZA(),t.TgZ(95,"th",38),t.NdJ("click",function(){return n.sort("id")}),t._uU(96,"Change Status"),t._UZ(97,"i",42),t.qZA(),t.TgZ(98,"th",38),t.NdJ("click",function(){return n.sort("id")}),t._uU(99,"Action "),t._UZ(100,"i",42),t.qZA()()(),t.YNc(101,j,4,11,"tbody",43),t.YNc(102,H,5,0,"tbody",43),t.qZA(),t.TgZ(103,"div",44),t.YNc(104,$,1,0,"mat-progress-bar",45),t.qZA(),t.TgZ(105,"div",26)(106,"div",46)(107,"div",47),t._uU(108," Show per page "),t.TgZ(109,"select",48),t.NdJ("ngModelChange",function(i){return n.itemsPerPage=i}),t.TgZ(110,"option",49),t._uU(111,"10"),t.qZA(),t.TgZ(112,"option",50),t._uU(113,"20"),t.qZA(),t.TgZ(114,"option",51),t._uU(115,"30"),t.qZA(),t.TgZ(116,"option",52),t._uU(117,"50"),t.qZA(),t.TgZ(118,"option",53),t._uU(119,"100"),t.qZA(),t.TgZ(120,"option",54),t._uU(121,"All"),t.qZA()()()(),t.TgZ(122,"div",55)(123,"div",56)(124,"pagination-controls",57),t.NdJ("pageChange",function(i){return n.p=i}),t.qZA(),t.TgZ(125,"div",58),t._uU(126),t.qZA()()()()()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",n.isAdd),t.xp6(15),t.Q6J("ngModel",n.titlee),t.xp6(21),t.Q6J("ngModel",n.date),t.xp6(5),t.Q6J("ngModel",n.FromBranch),t.xp6(3),t.Q6J("ngForOf",n.fromBranch),t.xp6(5),t.Q6J("ngModel",n.toBranchFilter),t.xp6(3),t.Q6J("ngForOf",n.toBranch),t.xp6(10),t.Q6J("ngModel",n.allSelected),t.xp6(33),t.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.filteredData?null:n.filteredData.length)),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(17),t.lnq("Showing ",n.itemsPerPage," to ",n.itemsPerPage," of ",n.itemsPerPage," entries"))},dependencies:[p.mk,p.sg,p.O5,f.yS,g.YN,g.Kr,g.Fj,g.Wl,g.EJ,g.JJ,g.On,U.pW,m.LS,m._s,M.T],styles:[".select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:38px;width:75%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}"]}),o})(),canActivate:[l(30597).l],data:{allowedRoles:["view_transferrequest"]}}];let W=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.Bz.forChild(K),f.Bz]}),o})();var V=l(8468);let X=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,W,V.I]}),o})()}}]);