"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2409],{82409:(K,h,o)=>{o.r(h),o.d(h,{SalesReturnListModule:()=>j});var m=o(36895),_=o(88996),C=o(2454),u=o.n(C),S=o(53583),A=o(12983),y=o.n(A),p=o(80574),R=o(94327),e=o(94650),L=o(72170),M=o(42917),g=o(24006),U=o(73162),f=o(54333),x=o(90455),k=o(54040);function q(i,a){1&i&&(e.TgZ(0,"div",56)(1,"a",57),e._UZ(2,"img",58),e._uU(3,"Add Sales Return "),e.qZA()())}function D(i,a){if(1&i&&(e.TgZ(0,"a",66),e._UZ(1,"img",70),e.qZA()),2&i){const t=e.oxw().$implicit;e.MGl("routerLink","//sales/updatesalesReturn/",t.id,"")}}function J(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"a",71),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(),s=l.index,r=l.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(s,r.id))}),e._UZ(1,"img",72),e.qZA()}}const N=function(i,a,t){return{"bg-lightgreen":i,"bg-lightred":a,"bg-lightyellow":t}};function w(i,a){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",60)(3,"input",61),e.NdJ("ngModelChange",function(l){const r=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[r]=l)}),e.qZA(),e._UZ(4,"span",38),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",62)(8,"a",63),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td")(21,"span",64),e._uU(22),e.qZA()(),e.TgZ(23,"td")(24,"mat-slide-toggle",65),e.NdJ("click",function(){const l=e.CHM(t),s=l.$implicit,r=l.index,c=e.oxw(2);return e.KtG(s.is_active?c.isActive(r,s.id):c.Active(r,s.id))})("ngModelChange",function(l){const r=e.CHM(t).$implicit;return e.KtG(r.is_active=l)}),e.qZA()(),e.TgZ(25,"td")(26,"a",66),e._UZ(27,"img",67),e.qZA(),e.YNc(28,D,2,1,"a",68),e.YNc(29,J,2,0,"a",69),e.qZA()()}if(2&i){const t=a.$implicit,n=a.index,l=e.oxw(2);e.xp6(3),e.Q6J("ngModel",l.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.MGl("routerLink","//sales/salesReturnedetails/",t.id,""),e.xp6(1),e.Oqu(null==t||null==t.customer?null:t.customer.name),e.xp6(2),e.Oqu(null==t?null:t.bill_date),e.xp6(2),e.Oqu(t.sale_return_bill_no),e.xp6(2),e.Oqu(t.sale_bill),e.xp6(2),e.Oqu(null==t?null:t.subtotal),e.xp6(2),e.Oqu(null==t?null:t.total),e.xp6(2),e.Q6J("ngClass",e.kEZ(15,N,"Received"===t.status,"Pending"===t.status,"Draft"===t.status)),e.xp6(1),e.Oqu(t.status),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//sales/salesReturnedetails/",t.id,""),e.xp6(2),e.Q6J("ngIf",l.isEdit),e.xp6(1),e.Q6J("ngIf",l.isDelete)}}const B=function(i,a){return{itemsPerPage:i,currentPage:a}};function I(i,a){if(1&i&&(e.TgZ(0,"tbody"),e.YNc(1,w,30,19,"tr",59),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,B,t.itemsPerPage,t.p)))}}function P(i,a){1&i&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",73)(3,"p",74),e._uU(4,"Data not available"),e.qZA()()()())}function O(i,a){1&i&&e._UZ(0,"mat-progress-bar",75)}const H=[{path:"",component:(()=>{class i{constructor(t,n){this.saleService=t,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1}confirmText(t,n){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.saleService.deleteSaleReturn(n).subscribe(s=>{this.delRes=s,this.delRes.success?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,n){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this sale return!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.saleService.SalesMaterialOutwardIsActive(n,"").subscribe(s=>{this.delRes=s,this.delRes.success&&(u().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(t,n){u().fire({title:"Are you sure?",text:"Do you want to Active this sale return!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(l=>{l.isConfirmed&&this.saleService.SaleReturnIsActive(n,"").subscribe(s=>{this.delRes=s,this.delRes.success&&(u().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){this.saleService.getSaleReturn().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(l=>{"sale"===l.content_type.app_label&&"salereturn"===l.content_type.model&&"add_salereturn"==l.codename?this.isAdd=l.codename:"sale"===l.content_type.app_label&&"salereturn"===l.content_type.model&&"change_salereturn"==l.codename?this.isEdit=l.codename:"sale"===l.content_type.app_label&&"salereturn"===l.content_type.model&&"delete_salereturn"==l.codename&&(this.isDelete=l.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>{const l=n?.customer?.name.toLocaleLowerCase(),s=n?.sale_return_bill_no.toLocaleLowerCase();return!!l.match(t)||!!s.match(t)})}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new S.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Sales Return List",10,10),y()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"User Name "},{header:"Bill Date"},{header:"Bill No."},{header:"Sales Bill"},{header:"Sub Total"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),t.save("salesReturn.pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),l=n.querySelector("thead tr"),s=n.querySelectorAll("tbody tr"),r=[];return l.querySelectorAll("th").forEach(c=>{const d=c.textContent.trim();"Is Active"!==d&&"Action"!==d&&r.push(d)}),t.push(r),s.forEach(c=>{const d=[];c.querySelectorAll("td").forEach(T=>{d.push(T.textContent.trim())}),t.push(d)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=p.P6.aoa_to_sheet(t),l=p.P6.book_new();p.P6.book_append_sheet(l,n,"Sheet1");const s=p.cW(l,{bookType:"xlsx",type:"array"}),r=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,R.saveAs)(r,"saleReturn.xlsx")}printTable(){const t=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,r=t.cloneNode(!0),c=r.querySelector("th.thone:nth-child(10)");c&&c.remove();const d=r.querySelector("th.thone:last-child");d&&d.remove(),r.querySelectorAll("tr").forEach(Z=>{const b=Z.querySelector("td:nth-child(10)");b&&b.remove();const v=Z.querySelector("td:last-child");v&&v.remove()});const G=r.outerHTML,$="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+G,z=document.body.innerHTML;document.body.innerHTML=$,window.print(),document.body.innerHTML=z}filterData(){let t=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];t=t.filter(l=>new Date(l?.bill_date).toISOString().split("T")[0]===n)}this.filteredData=t}clearFilter(){this.date=null,this.filterData()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(L.M),e.Y36(M.J))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-sales-return-list"]],decls:111,vars:11,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search User/Bill No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",1,"search",3,"ngModel","ngModelChange"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//sales/addsalesReturn",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Sales Return list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Sales Return"),e.qZA()(),e.YNc(6,q,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(s){return n.titlee=s})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return n.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Sale Return Date"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(s){return n.date=s})("ngModelChange",function(){return n.filterData()}),e.qZA()()()(),e.TgZ(43,"div",31),e.NdJ("click",function(){return n.clearFilter()}),e.TgZ(44,"a",32),e._uU(45,"Clear Filter"),e.qZA()()()()()(),e.TgZ(46,"div",33)(47,"table",34)(48,"thead")(49,"tr")(50,"th",35),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(51,"label",36),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(52,"input",37),e.NdJ("ngModelChange",function(s){return n.allSelected=s})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(53,"span",38),e.qZA(),e._UZ(54,"i",39),e.qZA(),e.TgZ(55,"th",35),e.NdJ("click",function(){return n.sort("id")}),e._uU(56,"Sr. No. "),e._UZ(57,"i",39),e.qZA(),e.TgZ(58,"th",35),e.NdJ("click",function(){return n.sort("id")}),e._uU(59,"User Name "),e._UZ(60,"i",39),e.qZA(),e.TgZ(61,"th",35),e.NdJ("click",function(){return n.sort("id")}),e._uU(62,"Bill Date "),e._UZ(63,"i",39),e.qZA(),e.TgZ(64,"th",35),e.NdJ("click",function(){return n.sort("id")}),e._uU(65,"Bill No."),e._UZ(66,"i",39),e.qZA(),e.TgZ(67,"th",35),e.NdJ("click",function(){return n.sort("id")}),e._uU(68,"Sales Bill"),e._UZ(69,"i",39),e.qZA(),e.TgZ(70,"th",35),e.NdJ("click",function(){return n.sort("id")}),e._uU(71,"Sub Total"),e._UZ(72,"i",39),e.qZA(),e.TgZ(73,"th",35),e.NdJ("click",function(){return n.sort("id")}),e._uU(74,"Total"),e._UZ(75,"i",39),e.qZA(),e.TgZ(76,"th",35),e.NdJ("click",function(){return n.sort("id")}),e._uU(77,"Status"),e._UZ(78,"i",39),e.qZA(),e.TgZ(79,"th",35),e.NdJ("click",function(){return n.sort("id")}),e._uU(80,"Is Active "),e._UZ(81,"i",39),e.qZA(),e.TgZ(82,"th",35),e.NdJ("click",function(){return n.sort("id")}),e._uU(83,"Action "),e._UZ(84,"i",39),e.qZA()()(),e.YNc(85,I,4,11,"tbody",40),e.YNc(86,P,5,0,"tbody",40),e.qZA(),e.TgZ(87,"div",41),e.YNc(88,O,1,0,"mat-progress-bar",42),e.qZA(),e.TgZ(89,"div",26)(90,"div",43)(91,"div",44),e._uU(92," Show per page "),e.TgZ(93,"select",45),e.NdJ("ngModelChange",function(s){return n.itemsPerPage=s}),e.TgZ(94,"option",46),e._uU(95,"10"),e.qZA(),e.TgZ(96,"option",47),e._uU(97,"20"),e.qZA(),e.TgZ(98,"option",48),e._uU(99,"30"),e.qZA(),e.TgZ(100,"option",49),e._uU(101,"50"),e.qZA(),e.TgZ(102,"option",50),e._uU(103,"100"),e.qZA(),e.TgZ(104,"option",51),e._uU(105,"All"),e.qZA()()()(),e.TgZ(106,"div",52)(107,"div",53)(108,"pagination-controls",54),e.NdJ("pageChange",function(s){return n.p=s}),e.qZA(),e.TgZ(109,"div",55),e._uU(110),e.qZA()()()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("ngModel",n.date),e.xp6(10),e.Q6J("ngModel",n.allSelected),e.xp6(33),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.filteredData?null:n.filteredData.length)),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(17),e.lnq("Showing ",n.itemsPerPage," to ",n.itemsPerPage," of ",n.itemsPerPage," entries"))},dependencies:[m.mk,m.sg,m.O5,_.yS,g.YN,g.Kr,g.Fj,g.Wl,g.EJ,g.JJ,g.On,U.pW,f.LS,x.Rr,f._s,k.T]}),i})(),canActivate:[o(30597).l],data:{allowedRoles:["view_salereturn"]}}];let Q=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[_.Bz.forChild(H),_.Bz]}),i})();var Y=o(8468);let j=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.ez,Q,Y.I]}),i})()}}]);