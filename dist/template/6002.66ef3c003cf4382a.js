"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6002],{26002:($,h,r)=>{r.r(h),r.d(h,{CreditNoteModule:()=>G});var p=r(36895),_=r(88996),v=r(2454),d=r.n(v),N=r(53583),A=r(12983),y=r.n(A),m=r(80574),x=r(94327),t=r(94650),M=r(71071),U=r(42917),g=r(24006),q=r(73162),f=r(54333),k=r(90455),D=r(54040);function J(i,s){if(1&i&&(t.TgZ(0,"a",55),t._UZ(1,"img",59),t.qZA()),2&i){const e=t.oxw().$implicit;t.MGl("routerLink","//transaction/updatecreditnote/",e.id,"")}}function S(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"a",60),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),l=o.index,a=o.$implicit,c=t.oxw(2);return t.KtG(c.confirmText(l,a.id))}),t._UZ(1,"img",61),t.qZA()}}const w=function(i,s,e){return{"bg-lightgreen":i,"bg-lightred":s,"bg-lightyellow":e}};function L(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",49)(3,"input",50),t.NdJ("ngModelChange",function(o){const a=t.CHM(e).index,c=t.oxw(2);return t.KtG(c.selectedRows[a]=o)}),t.qZA(),t._UZ(4,"span",42),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",51)(8,"a",52),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td")(25,"span",53),t._uU(26),t.qZA()(),t.TgZ(27,"td")(28,"mat-slide-toggle",54),t.NdJ("click",function(){const o=t.CHM(e),l=o.$implicit,a=o.index,c=t.oxw(2);return t.KtG(l.is_active?c.isActive(a,l.id):c.Active(a,l.id))})("ngModelChange",function(o){const a=t.CHM(e).$implicit;return t.KtG(a.is_active=o)}),t.qZA()(),t.TgZ(29,"td")(30,"a",55),t._UZ(31,"img",56),t.qZA(),t.YNc(32,J,2,1,"a",57),t.YNc(33,S,2,0,"a",58),t.qZA()()}if(2&i){const e=s.$implicit,n=s.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[n]),t.xp6(3),t.Oqu(n+1),t.xp6(2),t.MGl("routerLink","//transaction/detailscreditnote/",e.id,""),t.xp6(1),t.Oqu(null==e||null==e.account?null:e.account.account_id),t.xp6(2),t.Oqu(null==e?null:e.date),t.xp6(2),t.Oqu(e.credit_note_no),t.xp6(2),t.Oqu(null==e||null==e.sale_bill_no?null:e.sale_bill_no.customer_bill_no),t.xp6(2),t.Oqu(e.reason),t.xp6(2),t.Oqu(e.roundoff),t.xp6(2),t.Oqu(e.tax),t.xp6(2),t.Oqu(e.total),t.xp6(2),t.Q6J("ngClass",t.kEZ(17,w,"Complete"===e.status,"Pending"===e.status,"Ordered"===e.status)),t.xp6(1),t.Oqu(e.status),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//transaction/detailscreditnote/",e.id,""),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const B=function(i,s){return{itemsPerPage:i,currentPage:s}};function I(i,s){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,L,34,21,"tr",48),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.filteredData,e.key,e.reverse),t.WLB(8,B,e.itemsPerPage,e.p)))}}function R(i,s){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",62)(3,"p",63),t._uU(4,"Data not available"),t.qZA()()()())}function E(i,s){1&i&&t._UZ(0,"mat-progress-bar",64)}function O(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",28)(1,"div",65)(2,"div",66),t._uU(3," Show per page "),t.TgZ(4,"select",67),t.NdJ("ngModelChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.itemsPerPage=o)}),t.TgZ(5,"option",68),t._uU(6,"10"),t.qZA(),t.TgZ(7,"option",69),t._uU(8,"20"),t.qZA(),t.TgZ(9,"option",70),t._uU(10,"30"),t.qZA(),t.TgZ(11,"option",71),t._uU(12,"50"),t.qZA(),t.TgZ(13,"option",72),t._uU(14,"100"),t.qZA(),t.TgZ(15,"option",73),t._uU(16,"All"),t.qZA()()()(),t.TgZ(17,"div",74)(18,"div",75)(19,"pagination-controls",76),t.NdJ("pageChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.p=o)}),t.qZA(),t.TgZ(20,"div",77),t._uU(21),t.qZA()()()()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(17),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}const H=[{path:"",component:(()=>{class i{constructor(e,n){this.transactionService=e,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1}confirmText(e,n){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.deleteCreditNote(n).subscribe(l=>{this.delRes=l,this.delRes.success?(this.ngOnInit(),d().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(e,1)):d().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,n){d().fire({title:"Are you sure?",text:"Do you want to Deactivate this Credit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.CreditNoteIsActive(n,"").subscribe(l=>{this.delRes=l,this.delRes.success?(d().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):d().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(e,n){d().fire({title:"Are you sure?",text:"Do you want to Active this Credit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.transactionService.CreditNoteIsActive(n,"").subscribe(l=>{this.delRes=l,this.delRes.success?(d().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):d().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){this.transactionService.getCreditNote().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(o=>{"transactions"===o.content_type.app_label&&"creditnote"===o.content_type.model&&"add_creditnote"==o.codename?(this.isAdd=o.codename,console.log(this.isAdd)):"transactions"===o.content_type.app_label&&"creditnote"===o.content_type.model&&"change_creditnote"==o.codename?(this.isEdit=o.codename,console.log(this.isEdit)):"transactions"===o.content_type.app_label&&"creditnote"===o.content_type.model&&"delete_creditnote"==o.codename&&(this.isDelete=o.codename,console.log(this.isDelete))})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>{const o=n?.account?.account_id.toLocaleLowerCase(),l=n?.credit_note_no.toLocaleLowerCase();return!!o.match(e)||!!l.match(e)})}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new N.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Credit Note",10,10),y()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name "},{header:"Credit Note Date"},{header:"Credit Note No"},{header:"Sale Bill"},{header:"Reason"},{header:"Round off"},{header:"Tax"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),e.save("creditNote.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),l=n.querySelectorAll("tbody tr"),a=[];return o.querySelectorAll("th").forEach(c=>{const u=c.textContent.trim();"Is Active"!==u&&"Action"!==u&&a.push(u)}),e.push(a),l.forEach(c=>{const u=[];c.querySelectorAll("td").forEach(C=>{u.push(C.textContent.trim())}),e.push(u)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=m.P6.aoa_to_sheet(e),o=m.P6.book_new();m.P6.book_append_sheet(o,n,"Sheet1");const l=m.cW(o,{bookType:"xlsx",type:"array"}),a=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,x.saveAs)(a,"creditNote.xlsx")}printTable(){const e=document.getElementById("mytable"),l=document.querySelector(".titl").outerHTML,a=e.cloneNode(!0),c=a.querySelector("th.thone:nth-child(12)");c&&c.remove();const u=a.querySelector("th.thone:last-child");u&&u.remove(),a.querySelectorAll("tr").forEach(T=>{const Z=T.querySelector("td:nth-child(12)");Z&&Z.remove();const b=T.querySelector("td:last-child");b&&b.remove()});const K=a.outerHTML,j="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+K,z=document.body.innerHTML;document.body.innerHTML=j,window.print(),document.body.innerHTML=z}filterData(){let e=this.tableData.slice();if(this.date){const n=new Date(this.date).toISOString().split("T")[0];e=e.filter(o=>new Date(o?.date).toISOString().split("T")[0]===n)}this.selectedAmount&&(e=e.filter(n=>n?.total<=this.selectedAmount)),this.filteredData=e}clearFilters(){this.selectedAmount=null,this.date=null,this.filterData()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(M.p),t.Y36(U.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-credit-note"]],decls:106,vars:8,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],["routerLink","//transaction/addcreditnote",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Account ID/Credit Note No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],["type","number","placeholder","Enter Total",3,"ngModel","ngModelChange","change"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Credit Note LIST"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Credit Note"),t.qZA()(),t.TgZ(6,"div",3)(7,"a",4),t._UZ(8,"img",5),t._uU(9,"Add New Credit Note "),t.qZA()()(),t.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"a",11),t._UZ(16,"img",12),t.TgZ(17,"span"),t._UZ(18,"img",13),t.qZA()()(),t.TgZ(19,"div",14)(20,"a",15),t._UZ(21,"img",16),t.qZA(),t.TgZ(22,"div",17)(23,"label")(24,"input",18),t.NdJ("ngModelChange",function(l){return n.titlee=l})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(25,"div",19)(26,"ul")(27,"li")(28,"a",20),t.NdJ("click",function(){return n.generatePDF()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(32,"img",23),t.qZA()(),t.TgZ(33,"li")(34,"a",24),t.NdJ("click",function(){return n.printTable()}),t._UZ(35,"img",25),t.qZA()()()()(),t.TgZ(36,"div",26)(37,"div",27)(38,"div",28)(39,"div",29)(40,"div",28)(41,"div",30)(42,"div",31)(43,"label"),t._uU(44,"Credit Note Date"),t.qZA(),t.TgZ(45,"input",32),t.NdJ("ngModelChange",function(l){return n.date=l})("change",function(){return n.filterData()}),t.qZA()()(),t.TgZ(46,"div",30)(47,"div",31)(48,"label"),t._uU(49,"Enter Total"),t.qZA(),t.TgZ(50,"input",33),t.NdJ("ngModelChange",function(l){return n.selectedAmount=l})("change",function(){return n.filterData()}),t.qZA(),t.TgZ(51,"span",34),t._uU(52,"Total Filter (Less than & Equal to Total value)"),t.qZA()()()(),t.TgZ(53,"div",35),t.NdJ("click",function(){return n.clearFilters()}),t.TgZ(54,"a",36),t._uU(55,"Clear Filter"),t.qZA()()()()()(),t.TgZ(56,"div",37)(57,"table",38)(58,"thead")(59,"tr")(60,"th",39),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(61,"label",40),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(62,"input",41),t.NdJ("ngModelChange",function(l){return n.allSelected=l})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(63,"span",42),t.qZA(),t._UZ(64,"i",43),t.qZA(),t.TgZ(65,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(66,"Sr. No."),t._UZ(67,"i",43),t.qZA(),t.TgZ(68,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(69,"Account"),t._UZ(70,"i",43),t.qZA(),t.TgZ(71,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(72,"Credit Note Date"),t._UZ(73,"i",43),t.qZA(),t.TgZ(74,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(75,"Credit Note No"),t._UZ(76,"i",43),t.qZA(),t.TgZ(77,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(78,"Sales Bill"),t._UZ(79,"i",43),t.qZA(),t.TgZ(80,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(81,"Reason"),t._UZ(82,"i",43),t.qZA(),t.TgZ(83,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(84,"Round off "),t._UZ(85,"i",43),t.qZA(),t.TgZ(86,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(87,"Tax "),t._UZ(88,"i",43),t.qZA(),t.TgZ(89,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(90,"Total "),t._UZ(91,"i",43),t.qZA(),t.TgZ(92,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(93,"Status "),t._UZ(94,"i",43),t.qZA(),t.TgZ(95,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(96,"Is Active "),t._UZ(97,"i",43),t.qZA(),t.TgZ(98,"th",39),t.NdJ("click",function(){return n.sort("id")}),t._uU(99,"Action "),t._UZ(100,"i",43),t.qZA()()(),t.YNc(101,I,4,11,"tbody",44),t.YNc(102,R,5,0,"tbody",44),t.qZA(),t.TgZ(103,"div",45),t.YNc(104,E,1,0,"mat-progress-bar",46),t.qZA(),t.YNc(105,O,22,4,"div",47),t.qZA()()()),2&e&&(t.xp6(24),t.Q6J("ngModel",n.titlee),t.xp6(21),t.Q6J("ngModel",n.date),t.xp6(5),t.Q6J("ngModel",n.selectedAmount),t.xp6(12),t.Q6J("ngModel",n.allSelected),t.xp6(39),t.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==n.filteredData?null:n.filteredData.length)&&!n.loader),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(1),t.Q6J("ngIf",!n.loader))},dependencies:[p.mk,p.sg,p.O5,_.yS,g.YN,g.Kr,g.Fj,g.wV,g.Wl,g.EJ,g.JJ,g.On,q.pW,f.LS,k.Rr,f._s,D.T],styles:["input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),i})(),canActivate:[r(30597).l],data:{allowedRoles:["view_debitnote"]}}];let Q=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[_.Bz.forChild(H),_.Bz]}),i})();var Y=r(8468);let G=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.ez,Q,Y.I]}),i})()}}]);