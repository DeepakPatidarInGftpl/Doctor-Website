"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5270],{5270:(z,h,s)=>{s.r(h),s.d(h,{DebitNoteModule:()=>Y});var m=s(36895),_=s(88996),v=s(2454),d=s.n(v),N=s(53583),C=s(12983),y=s.n(C),p=s(80574),A=s(94327),t=s(94650),x=s(71071),M=s(42917),g=s(24006),U=s(73162),b=s(54333),q=s(90455),k=s(54040);function S(o,a){1&o&&(t.TgZ(0,"div",44)(1,"a",45),t._UZ(2,"img",46),t._uU(3,"Add New Debit Note "),t.qZA()())}function J(o,a){if(1&o&&(t.TgZ(0,"a",54),t._UZ(1,"img",58),t.qZA()),2&o){const e=t.oxw().$implicit;t.MGl("routerLink","//transaction/updatedebitnote/",e.id,"")}}function w(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"a",59),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(),l=i.index,r=i.$implicit,c=t.oxw(2);return t.KtG(c.confirmText(l,r.id))}),t._UZ(1,"img",60),t.qZA()}}const I=function(o,a,e){return{"bg-lightgreen":o,"bg-lightred":a,"bg-lightyellow":e}};function B(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",48)(3,"input",49),t.NdJ("ngModelChange",function(i){const r=t.CHM(e).index,c=t.oxw(2);return t.KtG(c.selectedRows[r]=i)}),t.qZA(),t._UZ(4,"span",38),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",50)(8,"a",51),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.ALo(12,"date"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA(),t.TgZ(25,"td")(26,"span",52),t._uU(27),t.qZA()(),t.TgZ(28,"td")(29,"mat-slide-toggle",53),t.NdJ("click",function(){const i=t.CHM(e),l=i.$implicit,r=i.index,c=t.oxw(2);return t.KtG(l.is_active?c.isActive(r,l.id):c.Active(r,l.id))})("ngModelChange",function(i){const r=t.CHM(e).$implicit;return t.KtG(r.is_active=i)}),t.qZA()(),t.TgZ(30,"td")(31,"a",54),t._UZ(32,"img",55),t.qZA(),t.YNc(33,J,2,1,"a",56),t.YNc(34,w,2,0,"a",57),t.qZA()()}if(2&o){const e=a.$implicit,n=a.index,i=t.oxw(2);t.xp6(3),t.Q6J("ngModel",i.selectedRows[n]),t.xp6(3),t.Oqu(n+1),t.xp6(2),t.MGl("routerLink","//transaction/detailsdebitnote/",e.id,""),t.xp6(1),t.Oqu(null==e||null==e.party?null:e.party.name),t.xp6(2),t.Oqu(t.xi3(12,17,null==e?null:e.date,"yyyy-MM-dd hh:mm:ss a")),t.xp6(3),t.Oqu(e.debit_note_no),t.xp6(2),t.Oqu(e.purchase_bill),t.xp6(2),t.Oqu(e.reason),t.xp6(2),t.Oqu(e.amount),t.xp6(2),t.Oqu(e.tax),t.xp6(2),t.Oqu(e.total),t.xp6(2),t.Q6J("ngClass",t.kEZ(20,I,"Complete"===e.status,"Pending"===e.status,"Ordered"===e.status)),t.xp6(1),t.Oqu(e.status),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//transaction/detailsdebitnote/",e.id,""),t.xp6(2),t.Q6J("ngIf",i.isEdit),t.xp6(1),t.Q6J("ngIf",i.isDelete)}}const L=function(o,a){return{itemsPerPage:o,currentPage:a}};function P(o,a){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,B,35,24,"tr",47),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.filteredData,e.key,e.reverse),t.WLB(8,L,e.itemsPerPage,e.p)))}}function O(o,a){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",61)(3,"p",62),t._uU(4,"Data not available"),t.qZA()()()())}function R(o,a){1&o&&t._UZ(0,"mat-progress-bar",63)}function E(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",26)(1,"div",64)(2,"div",65),t._uU(3," Show per page "),t.TgZ(4,"select",66),t.NdJ("ngModelChange",function(i){t.CHM(e);const l=t.oxw();return t.KtG(l.itemsPerPage=i)}),t.TgZ(5,"option",67),t._uU(6,"10"),t.qZA(),t.TgZ(7,"option",68),t._uU(8,"20"),t.qZA(),t.TgZ(9,"option",69),t._uU(10,"30"),t.qZA(),t.TgZ(11,"option",70),t._uU(12,"50"),t.qZA(),t.TgZ(13,"option",71),t._uU(14,"100"),t.qZA(),t.TgZ(15,"option",72),t._uU(16,"All"),t.qZA()()()(),t.TgZ(17,"div",73)(18,"div",74)(19,"pagination-controls",75),t.NdJ("pageChange",function(i){t.CHM(e);const l=t.oxw();return t.KtG(l.p=i)}),t.qZA(),t.TgZ(20,"div",76),t._uU(21),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(17),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}const F=[{path:"",component:(()=>{class o{constructor(e,n){this.transactionService=e,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1}confirmText(e,n){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.transactionService.deleteDebitNote(n).subscribe(l=>{this.delRes=l,"Debit Note Deleted successfully"==this.delRes.msg?(this.ngOnInit(),d().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(e,1)):d().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,n){d().fire({title:"Are you sure?",text:"Do you want to Deactivate this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.transactionService.DebitNoteIsActive(n,"").subscribe(l=>{this.delRes=l,"Debit Note is actived successfully"==this.delRes.msg?(d().fire({icon:"success",title:"Deactivate!",text:"Purchase Return Is Deactivate Successfully."}),this.ngOnInit()):d().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(e,n){d().fire({title:"Are you sure?",text:"Do you want to Active this Debit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.transactionService.DebitNoteIsActive(n,"").subscribe(l=>{this.delRes=l,"Debit Note is actived successfully"==this.delRes.msg?(d().fire({icon:"success",title:"Active!",text:"Purchase Return Is Active Successfully."}),this.ngOnInit()):d().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){this.transactionService.getDebitNote().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(i=>{"master"===i.content_type.app_label&&"debitnote"===i.content_type.model&&"add_debitnote"==i.codename?this.isAdd=i.codename:"master"===i.content_type.app_label&&"debitnote"===i.content_type.model&&"change_debitnote"==i.codename?this.isEdit=i.codename:"master"===i.content_type.app_label&&"debitnote"===i.content_type.model&&"delete_debitnote"==i.codename&&(this.isDelete=i.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>n?.party.name.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new N.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Debit Note",10,10),y()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name "},{header:"Debit Note Date"},{header:"Debit Note No"},{header:"Purchase Bill"},{header:"Reason"},{header:"Amount"},{header:"Tax"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),e.save("debitnote.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable"),i=n.querySelector("thead tr"),l=n.querySelectorAll("tbody tr"),r=[];return i.querySelectorAll("th").forEach(c=>{const u=c.textContent.trim();"Is Active"!==u&&"Action"!==u&&r.push(u)}),e.push(r),l.forEach(c=>{const u=[];c.querySelectorAll("td").forEach(f=>{u.push(f.textContent.trim())}),e.push(u)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=p.P6.aoa_to_sheet(e),i=p.P6.book_new();p.P6.book_append_sheet(i,n,"Sheet1");const l=p.cW(i,{bookType:"xlsx",type:"array"}),r=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,A.saveAs)(r,"debitnote.xlsx")}printTable(){const e=document.getElementById("mytable"),l=document.querySelector(".titl").outerHTML,r=e.cloneNode(!0),c=r.querySelector("th.thone:nth-child(12)");c&&c.remove();const u=r.querySelector("th.thone:last-child");u&&u.remove(),r.querySelectorAll("tr").forEach(Z=>{const T=Z.querySelector("td:nth-child(12)");T&&T.remove();const D=Z.querySelector("td:last-child");D&&D.remove()});const G=r.outerHTML,K="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+G,j=document.body.innerHTML;document.body.innerHTML=K,window.print(),document.body.innerHTML=j}filterData(){let e=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];e=e.filter(i=>new Date(i?.date).toISOString().split("T")[0]===n)}console.log(e),this.filteredData=e}clearFilters(){this.selectedpaymentTerms=null,this.date=null,this.filterData()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(x.p),t.Y36(M.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-debit-note"]],decls:96,vars:8,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Supplier",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","datetime-local",3,"ngModel","ngModelChange","change"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//transaction/adddebitnote",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Debit Note LIST"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Debit Note"),t.qZA()(),t.YNc(6,S,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(l){return n.titlee=l})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return n.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return n.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),t._uU(41,"Debit Note Date"),t.qZA(),t.TgZ(42,"input",30),t.NdJ("ngModelChange",function(l){return n.date=l})("change",function(){return n.filterData()}),t.qZA()()()(),t.TgZ(43,"div",31),t.NdJ("click",function(){return n.clearFilters()}),t.TgZ(44,"a",32),t._uU(45,"Clear Filter"),t.qZA()()()()()(),t.TgZ(46,"div",33)(47,"table",34)(48,"thead")(49,"tr")(50,"th",35),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(51,"label",36),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(52,"input",37),t.NdJ("ngModelChange",function(l){return n.allSelected=l})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(53,"span",38),t.qZA(),t._UZ(54,"i",39),t.qZA(),t.TgZ(55,"th",35),t.NdJ("click",function(){return n.sort("id")}),t._uU(56,"Sr. No."),t._UZ(57,"i",39),t.qZA(),t.TgZ(58,"th",35),t.NdJ("click",function(){return n.sort("id")}),t._uU(59,"Company Name "),t._UZ(60,"i",39),t.qZA(),t.TgZ(61,"th",35),t.NdJ("click",function(){return n.sort("id")}),t._uU(62,"Debit Note Date"),t._UZ(63,"i",39),t.qZA(),t.TgZ(64,"th",35),t.NdJ("click",function(){return n.sort("id")}),t._uU(65,"Debit Note No"),t._UZ(66,"i",39),t.qZA(),t.TgZ(67,"th",35),t.NdJ("click",function(){return n.sort("id")}),t._uU(68,"Purchase Bill"),t._UZ(69,"i",39),t.qZA(),t.TgZ(70,"th",35),t.NdJ("click",function(){return n.sort("id")}),t._uU(71,"Reason"),t._UZ(72,"i",39),t.qZA(),t.TgZ(73,"th",35),t.NdJ("click",function(){return n.sort("id")}),t._uU(74,"Amount "),t._UZ(75,"i",39),t.qZA(),t.TgZ(76,"th",35),t.NdJ("click",function(){return n.sort("id")}),t._uU(77,"Tax "),t._UZ(78,"i",39),t.qZA(),t.TgZ(79,"th",35),t.NdJ("click",function(){return n.sort("id")}),t._uU(80,"Total "),t._UZ(81,"i",39),t.qZA(),t.TgZ(82,"th",35),t.NdJ("click",function(){return n.sort("id")}),t._uU(83,"Status "),t._UZ(84,"i",39),t.qZA(),t.TgZ(85,"th",35),t.NdJ("click",function(){return n.sort("id")}),t._uU(86,"Is Active "),t._UZ(87,"i",39),t.qZA(),t.TgZ(88,"th",35),t.NdJ("click",function(){return n.sort("id")}),t._uU(89,"Action "),t._UZ(90,"i",39),t.qZA()()(),t.YNc(91,P,4,11,"tbody",40),t.YNc(92,O,5,0,"tbody",40),t.qZA(),t.TgZ(93,"div",41),t.YNc(94,R,1,0,"mat-progress-bar",42),t.qZA(),t.YNc(95,E,22,4,"div",43),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",n.isAdd),t.xp6(15),t.Q6J("ngModel",n.titlee),t.xp6(21),t.Q6J("ngModel",n.date),t.xp6(10),t.Q6J("ngModel",n.allSelected),t.xp6(39),t.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==n.filteredData?null:n.filteredData.length)&&!n.loader),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(1),t.Q6J("ngIf",!n.loader))},dependencies:[m.mk,m.sg,m.O5,_.yS,g.YN,g.Kr,g.Fj,g.Wl,g.EJ,g.JJ,g.On,U.pW,b.LS,q.Rr,m.uU,b._s,k.T],styles:["input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),o})()}];let H=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(F),_.Bz]}),o})();var Q=s(8468);let Y=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.ez,H,Q.I]}),o})()}}]);