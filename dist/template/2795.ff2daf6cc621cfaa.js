"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2795],{42795:(z,h,l)=>{l.r(h),l.d(h,{ListMaterialConsumptionModule:()=>Y});var m=l(36895),_=l(89299),M=l(2454),d=l.n(M),v=l(96166),A=l(12983),y=l.n(A),g=l(80574),x=l(94327),t=l(94650),L=l(71071),U=l(42917),p=l(24006),q=l(73162),f=l(54333),k=l(54040);function D(o,a){1&o&&(t.TgZ(0,"div",35)(1,"a",36),t._UZ(2,"img",37),t._uU(3,"Add New Material Consuption "),t.qZA()())}function N(o,a){if(1&o&&(t.TgZ(0,"a",44),t._UZ(1,"img",48),t.qZA()),2&o){const e=t.oxw().$implicit;t.MGl("routerLink","//transaction/updateMaterialConsuption/",e.id,"")}}function S(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"a",49),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(),s=i.index,r=i.$implicit,c=t.oxw(2);return t.KtG(c.confirmText(s,r.id))}),t._UZ(1,"img",50),t.qZA()}}const J=function(o,a,e){return{"bg-lightgreen":o,"bg-lightred":a,"bg-lightyellow":e}};function w(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",39)(3,"input",40),t.NdJ("ngModelChange",function(i){const r=t.CHM(e).index,c=t.oxw(2);return t.KtG(c.selectedRows[r]=i)}),t.qZA(),t._UZ(4,"span",29),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",41)(8,"a",42),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA(),t.TgZ(25,"td"),t._uU(26),t.qZA(),t.TgZ(27,"td"),t._uU(28),t.qZA(),t.TgZ(29,"td")(30,"span",43),t._uU(31),t.qZA()(),t.TgZ(32,"td")(33,"a",44),t._UZ(34,"img",45),t.qZA(),t.YNc(35,N,2,1,"a",46),t.YNc(36,S,2,0,"a",47),t.qZA()()}if(2&o){const e=a.$implicit,n=a.index,i=t.oxw(2);t.xp6(3),t.Q6J("ngModel",i.selectedRows[n]),t.xp6(3),t.Oqu(n+1),t.xp6(2),t.MGl("routerLink","//transaction/detailsMaterialConsuption/",e.id,""),t.xp6(1),t.Oqu(null==e||null==e.user?null:e.user.username),t.xp6(2),t.Oqu(t.xi3(12,18,null==e?null:e.consumption_date,"dd-MMMM-yyyy")),t.xp6(3),t.Oqu(null==e?null:e.prefix),t.xp6(2),t.Oqu(e.consumption_type),t.xp6(2),t.Oqu(e.consumption_no),t.xp6(2),t.Oqu(null==e.barcode?null:e.barcode.product_title),t.xp6(2),t.Oqu(e.price),t.xp6(2),t.Oqu(e.qty),t.xp6(2),t.Oqu(e.total_action),t.xp6(2),t.Oqu(e.remark),t.xp6(2),t.Q6J("ngClass",t.kEZ(21,J,"Complete"===e.status,"Pending"===e.status,"Ordered"===e.status)),t.xp6(1),t.Oqu(e.status),t.xp6(2),t.MGl("routerLink","//transaction/detailsMaterialConsuption/",e.id,""),t.xp6(2),t.Q6J("ngIf",i.isEdit),t.xp6(1),t.Q6J("ngIf",i.isDelete)}}const P=function(o,a){return{itemsPerPage:o,currentPage:a}};function B(o,a){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,w,37,25,"tr",38),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.filteredData,e.key,e.reverse),t.WLB(8,P,e.itemsPerPage,e.p)))}}function O(o,a){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",51)(3,"p",52),t._uU(4,"Data not available"),t.qZA()()()())}function I(o,a){1&o&&t._UZ(0,"mat-progress-bar",53)}function R(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",54)(1,"div",55)(2,"div",56),t._uU(3," Show per page "),t.TgZ(4,"select",57),t.NdJ("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.itemsPerPage=i)}),t.TgZ(5,"option",58),t._uU(6,"10"),t.qZA(),t.TgZ(7,"option",59),t._uU(8,"20"),t.qZA(),t.TgZ(9,"option",60),t._uU(10,"30"),t.qZA(),t.TgZ(11,"option",61),t._uU(12,"50"),t.qZA(),t.TgZ(13,"option",62),t._uU(14,"100"),t.qZA(),t.TgZ(15,"option",63),t._uU(16,"All"),t.qZA()()()(),t.TgZ(17,"div",64)(18,"div",65)(19,"pagination-controls",66),t.NdJ("pageChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.p=i)}),t.qZA(),t.TgZ(20,"div",67),t._uU(21),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(17),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}const E=[{path:"",component:(()=>{class o{constructor(e,n){this.transactionService=e,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1}confirmText(e,n){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.transactionService.deleteMaterialConsuption(n).subscribe(s=>{this.delRes=s,this.delRes.success?(d().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(e,1),this.ngOnInit()):d().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,n){d().fire({title:"Are you sure?",text:"Do you want to Deactivate this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.transactionService.MaterialConsuptionIsActive(n,"").subscribe(s=>{this.delRes=s,this.delRes.success?(d().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):d().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(e,n){d().fire({title:"Are you sure?",text:"Do you want to Active this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.transactionService.MaterialConsuptionIsActive(n,"").subscribe(s=>{this.delRes=s,this.delRes.success?(d().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):d().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){this.transactionService.getMaterialConsuption().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(i=>{"transactions"===i.content_type.app_label&&"debitnote"===i.content_type.model&&"add_debitnote"==i.codename?this.isAdd=i.codename:"transactions"===i.content_type.app_label&&"debitnote"===i.content_type.model&&"change_debitnote"==i.codename?this.isEdit=i.codename:"transactions"===i.content_type.app_label&&"debitnote"===i.content_type.model&&"delete_debitnote"==i.codename&&(this.isDelete=i.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>{const i=n?.user?.username.toLocaleLowerCase(),s=n?.barcode?.product_title.toLocaleLowerCase();return!!i.match(e)||!!s.match(e)})}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new v.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Debit Note",10,10),y()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name "},{header:"Debit Note Date"},{header:"Debit Note No"},{header:"Purchase Bill"},{header:"Reason"},{header:"Amount"},{header:"Tax"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),e.save("debitnote.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable"),i=n.querySelector("thead tr"),s=n.querySelectorAll("tbody tr"),r=[];return i.querySelectorAll("th").forEach(c=>{const u=c.textContent.trim();"Is Active"!==u&&"Action"!==u&&r.push(u)}),e.push(r),s.forEach(c=>{const u=[];c.querySelectorAll("td").forEach(C=>{u.push(C.textContent.trim())}),e.push(u)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=g.P6.aoa_to_sheet(e),i=g.P6.book_new();g.P6.book_append_sheet(i,n,"Sheet1");const s=g.cW(i,{bookType:"xlsx",type:"array"}),r=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,x.saveAs)(r,"debitnote.xlsx")}printTable(){const e=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,r=e.cloneNode(!0),c=r.querySelector("th.thone:nth-child(12)");c&&c.remove();const u=r.querySelector("th.thone:last-child");u&&u.remove(),r.querySelectorAll("tr").forEach(Z=>{const T=Z.querySelector("td:nth-child(12)");T&&T.remove();const b=Z.querySelector("td:last-child");b&&b.remove()});const Q=r.outerHTML,G="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+Q,j=document.body.innerHTML;document.body.innerHTML=G,window.print(),document.body.innerHTML=j}filterData(){let e=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];e=e.filter(i=>new Date(i?.date).toISOString().split("T")[0]===n)}this.selectedAmount&&(e=e.filter(n=>n?.amount<=this.selectedAmount)),this.filteredData=e}clearFilters(){this.selectedAmount=null,this.date=null,this.filterData()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(L.p),t.Y36(U.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-list-material-consumption"]],decls:86,vars:7,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","User/Product",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//transaction/addMaterialConsuption",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Material Consuption LIST"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Material Consuption"),t.qZA()(),t.YNc(6,D,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(s){return n.titlee=s})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return n.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return n.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(38,"label",27),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(39,"input",28),t.NdJ("ngModelChange",function(s){return n.allSelected=s})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(40,"span",29),t.qZA(),t._UZ(41,"i",30),t.qZA(),t.TgZ(42,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(43,"Sr. No."),t._UZ(44,"i",30),t.qZA(),t.TgZ(45,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(46,"User"),t._UZ(47,"i",30),t.qZA(),t.TgZ(48,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(49,"Prefix"),t._UZ(50,"i",30),t.qZA(),t.TgZ(51,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(52,"Date"),t._UZ(53,"i",30),t.qZA(),t.TgZ(54,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(55,"Consuption Type"),t._UZ(56,"i",30),t.qZA(),t.TgZ(57,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(58,"Consuption No"),t._UZ(59,"i",30),t.qZA(),t.TgZ(60,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(61,"Product"),t._UZ(62,"i",30),t.qZA(),t.TgZ(63,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(64,"Price "),t._UZ(65,"i",30),t.qZA(),t.TgZ(66,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(67,"QTY "),t._UZ(68,"i",30),t.qZA(),t.TgZ(69,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(70,"Total "),t._UZ(71,"i",30),t.qZA(),t.TgZ(72,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(73,"Remark"),t._UZ(74,"i",30),t.qZA(),t.TgZ(75,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(76,"Status "),t._UZ(77,"i",30),t.qZA(),t.TgZ(78,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(79,"Action "),t._UZ(80,"i",30),t.qZA()()(),t.YNc(81,B,4,11,"tbody",31),t.YNc(82,O,5,0,"tbody",31),t.qZA(),t.TgZ(83,"div",32),t.YNc(84,I,1,0,"mat-progress-bar",33),t.qZA(),t.YNc(85,R,22,4,"div",34),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",n.isAdd),t.xp6(15),t.Q6J("ngModel",n.titlee),t.xp6(18),t.Q6J("ngModel",n.allSelected),t.xp6(42),t.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==n.filteredData?null:n.filteredData.length)&&!n.loader),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(1),t.Q6J("ngIf",!n.loader))},dependencies:[m.mk,m.sg,m.O5,_.yS,p.YN,p.Kr,p.Fj,p.Wl,p.EJ,p.JJ,p.On,q.pW,f.LS,m.uU,f._s,k.T],styles:["input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),o})()}];let F=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(E),_.Bz]}),o})();var H=l(8468);let Y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,F,H.I]}),o})()}}]);