"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[99180],{99180:(q,C,r)=>{r.r(C),r.d(C,{StockTransferListModule:()=>et});var u=r(36895),Z=r(4392),D=r(2454),f=r.n(D),A=r(96166),y=r(12983),g=r.n(y),S=r(80574),m=r(94327),c=r(24006),t=r(94650),p=r(42236),b=r(42917),T=r(97185),h=r(43443),v=r(73162),k=r(54333),J=r(54040);function F(s,l){1&s&&(t.TgZ(0,"div",63)(1,"a",64),t._UZ(2,"img",65),t._uU(3,"Add Stock Transfer "),t.qZA()())}function N(s,l){if(1&s&&(t.TgZ(0,"option",66),t._uU(1),t.qZA()),2&s){const e=l.$implicit;t.s9C("value",null==e?null:e.title),t.xp6(1),t.Oqu(null==e?null:e.title)}}function w(s,l){if(1&s&&(t.TgZ(0,"option",66),t._uU(1),t.qZA()),2&s){const e=l.$implicit;t.s9C("value",null==e?null:e.title),t.xp6(1),t.Oqu(null==e?null:e.title)}}function P(s,l){1&s&&(t.TgZ(0,"option",35),t._uU(1,"Dispatched "),t.qZA())}function I(s,l){if(1&s){const e=t.EpF();t.ynx(0),t.TgZ(1,"select",75),t.NdJ("change",function(){t.CHM(e);const o=t.oxw().$implicit,i=t.oxw(2);return t.KtG(i.changeStatus(null==o?null:o.id))}),t.TgZ(2,"option",32),t._uU(3,"Select Status"),t.qZA(),t.YNc(4,P,2,0,"option",76),t.TgZ(5,"option",34),t._uU(6,"Received"),t.qZA()(),t.BQk()}if(2&s){const e=t.oxw().$implicit;t.xp6(4),t.Q6J("ngIf","Dispatched"!==e.status)}}const L=function(s,l){return{"bg-lightgreen":s,"bg-lightyellow":l}};function R(s,l){if(1&s&&(t.ynx(0),t.TgZ(1,"span",72),t._uU(2),t.qZA(),t.BQk()),2&s){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngClass",t.WLB(2,L,"Received"===e.status,"Dispatched"===e.status)),t.xp6(1),t.Oqu(e.status)}}function O(s,l){if(1&s&&(t.TgZ(0,"a",73),t._UZ(1,"img",78),t.qZA()),2&s){const e=t.oxw(2).$implicit;t.MGl("routerLink","//inventory/update-stock-transfer/",e.id,"")}}function E(s,l){if(1&s&&(t.ynx(0),t.YNc(1,O,2,1,"a",77),t.BQk()),2&s){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",e.isEdit)}}function Q(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"a",80),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2),i=o.index,a=o.$implicit,d=t.oxw(2);return t.KtG(d.confirmText(i,a.id))}),t._UZ(1,"img",81),t.qZA()}}function Y(s,l){if(1&s&&(t.ynx(0),t.YNc(1,Q,2,0,"a",79),t.BQk()),2&s){const e=t.oxw(3);t.xp6(1),t.Q6J("ngIf",e.isDelete)}}function G(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",68)(3,"input",69),t.NdJ("ngModelChange",function(o){const a=t.CHM(e).index,d=t.oxw(2);return t.KtG(d.selectedRows[a]=o)}),t.qZA(),t._UZ(4,"span",44),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",70)(8,"a",71),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",72),t._uU(22),t.qZA()(),t.TgZ(23,"td"),t.YNc(24,I,7,1,"ng-container",46),t.YNc(25,R,3,5,"ng-container",46),t.qZA(),t.TgZ(26,"td")(27,"a",73),t._UZ(28,"img",74),t.qZA(),t.YNc(29,E,2,1,"ng-container",46),t.YNc(30,Y,2,1,"ng-container",46),t.qZA()()}if(2&s){const e=l.$implicit,n=l.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[n]),t.xp6(3),t.Oqu(n+1),t.xp6(2),t.MGl("routerLink","//inventory/details-stock-transfer/",e.id,""),t.xp6(1),t.Oqu(null==e?null:e.transfer_number),t.xp6(2),t.Oqu(null==e?null:e.transfer_date),t.xp6(2),t.Oqu(null==e||null==e.from_branch?null:e.from_branch.title),t.xp6(2),t.Oqu(null==e||null==e.to_branch?null:e.to_branch.title),t.xp6(2),t.Oqu(null==e?null:e.total_qty),t.xp6(2),t.Oqu(null==e?null:e.total_product),t.xp6(2),t.Q6J("ngClass",t.WLB(16,L,"Received"===e.status,"Dispatched"===e.status)),t.xp6(1),t.Oqu(e.status),t.xp6(2),t.Q6J("ngIf","Received"!==e.status),t.xp6(1),t.Q6J("ngIf","Received"==e.status),t.xp6(2),t.MGl("routerLink","//inventory/details-stock-transfer/",e.id,""),t.xp6(2),t.Q6J("ngIf","Dispatched"==(null==e?null:e.status)),t.xp6(1),t.Q6J("ngIf","Dispatched"==(null==e?null:e.status))}}const H=function(s,l){return{itemsPerPage:s,currentPage:l}};function W(s,l){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,G,31,19,"tr",67),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.filteredData,e.key,e.reverse),t.WLB(8,H,e.itemsPerPage,e.p)))}}function $(s,l){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",82)(3,"p",83),t._uU(4,"Data not available"),t.qZA()()()())}function K(s,l){1&s&&t._UZ(0,"mat-progress-bar",84)}const V=[{path:"",component:(()=>{class s{constructor(e,n,o,i){this.stockService=e,this.cs=n,this.toastr=o,this.commonService=i,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.minDate="",this.maxDate="",this.transferDate=new c.NI(""),this.loader=!0,this.fromBranch=[],this.filterfromBranch=[],this.toBranch=[],this.filtertoBranch=[],this.searchFromBranch="",this.searchToBranch="",this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1}confirmText(e,n){f().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.stockService.deleteStockTransfer(n).subscribe(i=>{this.delRes=i,this.delRes.success?(this.ngOnInit(),f().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(e,1)):f().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,n){f().fire({title:"Are you sure?",text:"Do you want to Deactivate this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.stockService.StockTransferIsActive(n,"").subscribe(i=>{this.delRes=i,this.delRes.success&&(f().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(e,n){f().fire({title:"Are you sure?",text:"Do you want to Active this material outward!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.stockService.StockTransferIsActive(n,"").subscribe(i=>{this.delRes=i,this.delRes.success&&(f().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){this.stockService.getStockTransfer().subscribe(n=>{this.tableData=n,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(n=>{this.userDetails=n,this.userDetails?.permission?.map(i=>{"inventory"===i.content_type.app_label&&"stocktransfer"===i.content_type.model&&"add_stocktransfer"==i.codename?this.isAdd=i.codename:"inventory"===i.content_type.app_label&&"stocktransfer"===i.content_type.model&&"change_stocktransfer"==i.codename?this.isEdit=i.codename:"inventory"===i.content_type.app_label&&"stocktransfer"===i.content_type.model&&"delete_stocktransfer"==i.codename&&(this.isDelete=i.codename)})}),this.getBranch();const e=localStorage.getItem("financialYear");this.transferDateValidation(e)}getBranch(){this.stockService.getBranch().subscribe(e=>{this.fromBranch=e,this.filterfromBranch=[...this.fromBranch],this.toBranch=e,this.filtertoBranch=[...this.toBranch]})}filterFromBranch(){this.filterfromBranch=""===this.searchFromBranch.trim()?[...this.fromBranch]:this.fromBranch.filter(e=>e?.title.toLowerCase().includes(this.searchFromBranch.toLowerCase()))}filterToBranch(){this.filtertoBranch=""===this.searchToBranch.trim()?[...this.toBranch]:this.toBranch.filter(e=>e?.title.toLowerCase().includes(this.searchToBranch.toLowerCase()))}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>!!n?.transfer_number.toLocaleLowerCase().match(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new A.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Stock Transfer List",10,10),g()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Transfer Number"},{header:"Transfer Date"},{header:"From Branch"},{header:"To Branch"},{header:"Total Qty"},{header:"Total Product"},{header:"Status"},{header:"Is Active"}]}),e.save("stockTransfer.pdf")}generatePDFAgain(){const e=new A.default;e.setFontSize(12),e.setTextColor(33,43,54),e.text("Stock Transfer List ",82,10),e.text("",10,15),g()(e,{head:[["#","Transfer Number"," Transfer Date ","From Branch","To Branch","Total Qty","Total Product","Status"]],body:this.filteredData.map((o,i)=>[i+1,o.transfer_number,o.transfer_date,o.from_branch?.title,o.to_branch?.title,o.total_qty,o.total_product,o.status]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),e.save("Stock Transfer   .pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),i=n.querySelectorAll("tbody tr"),a=[];return o.querySelectorAll("th").forEach(d=>{const _=d.textContent.trim();"Is Active"!==_&&"Action"!==_&&a.push(_)}),e.push(a),i.forEach(d=>{const _=[];d.querySelectorAll("td").forEach(B=>{_.push(B.textContent.trim())}),e.push(_)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=S.P6.aoa_to_sheet(e),o=S.P6.book_new();S.P6.book_append_sheet(o,n,"Sheet1");const i=S.cW(o,{bookType:"xlsx",type:"array"}),a=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,m.saveAs)(a,"stockTransfer.xlsx")}printTable(){const e=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,a=e.cloneNode(!0),d=a.querySelector("th.thone:nth-child(10)");d&&d.remove();const _=a.querySelector("th.thone:last-child");_&&_.remove(),a.querySelectorAll("tr").forEach(x=>{const U=x.querySelector("td:nth-child(10)");U&&U.remove();const M=x.querySelector("td:last-child");M&&M.remove()});const nt=a.outerHTML,it="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+nt,st=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=it,window.print(),document.body.innerHTML=st}transferDateValidation(e){const n=this.transferDate,{formattedMinDate:o,formattedMaxDate:i}=this.commonService.setMinMaxDates(n,e);this.minDate=o,this.maxDate=i}filterData(){let e=this.tableData.slice();if(this.transferDate.value){const n=new Date(this.transferDate.value).toISOString().split("T")[0];e=e.filter(o=>new Date(o?.transfer_date).toISOString().split("T")[0]===n)}this.FromBranch&&(e=e.filter(n=>n?.from_branch?.title===this.FromBranch)),this.toBranchFilter&&(e=e.filter(n=>n?.to_branch?.title===this.toBranchFilter)),this.statusFilter&&(e=e.filter(n=>n?.status===this.statusFilter)),this.filteredData=e}clearFilter(){this.transferDate.setValue(""),this.FromBranch=null,this.toBranchFilter=null,this.statusFilter=null,this.filterData()}changeStatus(e){this.stockService.stockTransferrecieved(e).subscribe(n=>{console.log(n),n.success?(this.toastr.success(n.msg),this.ngOnInit()):this.toastr.error(n.error)})}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.tableData.length)}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(p.q),t.Y36(b.J),t.Y36(T._W),t.Y36(h.R))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-stock-transfer-list"]],decls:141,vars:18,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Transfer No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"formControl","change"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["value","Received"],["value","Dispatched"],["value","Received with missing items"],[1,"form-group","d-flex","justify-content-end"],[1,"btn","btn-filters","p-4",2,"width","20%",3,"click"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//inventory/add-stock-transfer",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],[1,"select",3,"change"],["value","Dispatched",4,"ngIf"],["class","me-1",3,"routerLink",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(e,n){if(1&e){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Stock Transfer list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Stock Transfer"),t.qZA()(),t.YNc(6,F,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(a){return n.titlee=a})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return n.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),t._uU(41,"Transfer Date"),t.qZA(),t.TgZ(42,"input",30),t.NdJ("change",function(){return n.filterData()}),t.qZA()()(),t.TgZ(43,"div",28)(44,"div",29)(45,"label"),t._uU(46,"Select From Branch"),t.qZA(),t.TgZ(47,"select",31),t.NdJ("ngModelChange",function(a){return n.FromBranch=a})("change",function(){return n.filterData()}),t.TgZ(48,"option",32),t._uU(49,"Select From Branch"),t.qZA(),t.YNc(50,N,2,2,"option",33),t.qZA()()(),t.TgZ(51,"div",28)(52,"div",29)(53,"label"),t._uU(54,"Select To Branch"),t.qZA(),t.TgZ(55,"select",31),t.NdJ("ngModelChange",function(a){return n.toBranchFilter=a})("change",function(){return n.filterData()}),t.TgZ(56,"option",32),t._uU(57,"Select To Branch"),t.qZA(),t.YNc(58,w,2,2,"option",33),t.qZA()()(),t.TgZ(59,"div",28)(60,"div",29)(61,"label"),t._uU(62,"Select Status"),t.qZA(),t.TgZ(63,"select",31),t.NdJ("ngModelChange",function(a){return n.statusFilter=a})("change",function(){return n.filterData()}),t.TgZ(64,"option",32),t._uU(65,"Select Status"),t.qZA(),t.TgZ(66,"option",34),t._uU(67,"Received"),t.qZA(),t.TgZ(68,"option",35),t._uU(69,"Dispatched"),t.qZA(),t.TgZ(70,"option",36),t._uU(71,"Received with missing items"),t.qZA()()()()(),t.TgZ(72,"div",37)(73,"a",38),t.NdJ("click",function(){return n.clearFilter()}),t._uU(74,"Clear Filter"),t.qZA()()()()()(),t.TgZ(75,"div",39)(76,"table",40)(77,"thead")(78,"tr")(79,"th",41),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(80,"label",42),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(81,"input",43),t.NdJ("ngModelChange",function(a){return n.allSelected=a})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(82,"span",44),t.qZA(),t._UZ(83,"i",45),t.qZA(),t.TgZ(84,"th",41),t.NdJ("click",function(){return n.sort("id")}),t._uU(85,"Sr. No. "),t._UZ(86,"i",45),t.qZA(),t.TgZ(87,"th",41),t.NdJ("click",function(){return n.sort("id")}),t._uU(88,"Transfer Number "),t._UZ(89,"i",45),t.qZA(),t.TgZ(90,"th",41),t.NdJ("click",function(){return n.sort("id")}),t._uU(91,"Transfer Date "),t._UZ(92,"i",45),t.qZA(),t.TgZ(93,"th",41),t.NdJ("click",function(){return n.sort("id")}),t._uU(94,"From Branch"),t._UZ(95,"i",45),t.qZA(),t.TgZ(96,"th",41),t.NdJ("click",function(){return n.sort("id")}),t._uU(97,"To Branch"),t._UZ(98,"i",45),t.qZA(),t.TgZ(99,"th",41),t.NdJ("click",function(){return n.sort("id")}),t._uU(100,"Total Qty"),t._UZ(101,"i",45),t.qZA(),t.TgZ(102,"th",41),t.NdJ("click",function(){return n.sort("id")}),t._uU(103,"Total Product"),t._UZ(104,"i",45),t.qZA(),t.TgZ(105,"th",41),t.NdJ("click",function(){return n.sort("id")}),t._uU(106,"Status"),t._UZ(107,"i",45),t.qZA(),t.TgZ(108,"th",41),t.NdJ("click",function(){return n.sort("id")}),t._uU(109,"Change Status"),t._UZ(110,"i",45),t.qZA(),t.TgZ(111,"th",41),t.NdJ("click",function(){return n.sort("id")}),t._uU(112,"Action "),t._UZ(113,"i",45),t.qZA()()(),t.YNc(114,W,4,11,"tbody",46),t.YNc(115,$,5,0,"tbody",46),t.qZA(),t.TgZ(116,"div",47),t.YNc(117,K,1,0,"mat-progress-bar",48),t.qZA(),t.TgZ(118,"div",26)(119,"div",49)(120,"div",50),t._uU(121," Show per page "),t.TgZ(122,"select",51,52),t.NdJ("ngModelChange",function(a){return n.itemsPerPage=a})("change",function(){t.CHM(o);const a=t.MAs(123);return t.KtG(n.changePg(a.value))}),t.TgZ(124,"option",53),t._uU(125,"10"),t.qZA(),t.TgZ(126,"option",54),t._uU(127,"20"),t.qZA(),t.TgZ(128,"option",55),t._uU(129,"30"),t.qZA(),t.TgZ(130,"option",56),t._uU(131,"50"),t.qZA(),t.TgZ(132,"option",57),t._uU(133,"100"),t.qZA(),t.TgZ(134,"option",58),t._uU(135,"All"),t.qZA()()()(),t.TgZ(136,"div",59)(137,"div",60)(138,"pagination-controls",61),t.NdJ("pageChange",function(a){return n.p=a}),t.qZA(),t.TgZ(139,"div",62),t._uU(140),t.qZA()()()()()()()}2&e&&(t.xp6(6),t.Q6J("ngIf",n.isAdd),t.xp6(15),t.Q6J("ngModel",n.titlee),t.xp6(21),t.Q6J("formControl",n.transferDate),t.uIk("min",n.minDate)("max",n.maxDate),t.xp6(5),t.Q6J("ngModel",n.FromBranch),t.xp6(3),t.Q6J("ngForOf",n.fromBranch),t.xp6(5),t.Q6J("ngModel",n.toBranchFilter),t.xp6(3),t.Q6J("ngForOf",n.toBranch),t.xp6(5),t.Q6J("ngModel",n.statusFilter),t.xp6(18),t.Q6J("ngModel",n.allSelected),t.xp6(33),t.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.filteredData?null:n.filteredData.length)),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq("Showing ",n.itemsPerPage," to ",null==n.tableData?null:n.tableData.length," of ",n.p," entries"))},dependencies:[u.mk,u.sg,u.O5,Z.yS,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,c.oH,v.pW,k.LS,k._s,J.T],styles:[".select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:38px;width:75%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}"]}),s})(),canActivate:[r(30597).l],data:{allowedRoles:["view_stocktransfer"]}}];let X=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[Z.Bz.forChild(V),Z.Bz]}),s})();var tt=r(8468);let et=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[u.ez,X,tt.I]}),s})()},30597:(q,C,r)=>{r.d(C,{l:()=>y});var u=r(94650),Z=r(4392),D=r(97185),f=r(42917),A=r(80927);let y=(()=>{class g{constructor(m,c,t,p,b){this.router=m,this.Arout=c,this.toastr=t,this.profileService=p,this.coreService=b}canActivate(m,c){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(p=>{this.userDetails=p,this.permissions=this.userDetails?.permission}),t){const p=m.data.allowedRoles,b=t.some(h=>p.includes(h.codename));let T=this.coreService.profileData$.value;if(T&&T.username){this.userDetails=T,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(T);const h=T?.permission,v=this.profileService.getUserDetails();(!v||v.length!==h.length)&&(this.profileService.setUserPermission(h),window.location.reload())}else this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(h);const v=h?.permission,k=this.profileService.getUserDetails();(!k||k.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())});if(b)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(m){return new(m||g)(u.LFG(Z.F0),u.LFG(Z.gz),u.LFG(D._W),u.LFG(f.J),u.LFG(A.p))},g.\u0275prov=u.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);