"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6002],{26002:(q,b,s)=>{s.r(b),s.d(b,{CreditNoteModule:()=>K});var u=s(36895),f=s(89299),A=s(2454),g=s.n(A),y=s(96166),x=s(12983),p=s.n(x),C=s(80574),h=s(94327),e=s(94650),T=s(71071),m=s(42917),d=s(24006),Z=s(73162),v=s(54333),N=s(90455),k=s(54040);function J(n,l){if(1&n&&(e.TgZ(0,"a",55),e._UZ(1,"img",59),e.qZA()),2&n){const t=e.oxw().$implicit;e.MGl("routerLink","//transaction/updatecreditnote/",t.id,"")}}function w(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"a",60),e.NdJ("click",function(){e.CHM(t);const i=e.oxw(),r=i.index,a=i.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(r,a.id))}),e._UZ(1,"img",61),e.qZA()}}const L=function(n,l,t){return{"bg-lightgreen":n,"bg-lightred":l,"bg-lightyellow":t}};function E(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",49)(3,"input",50),e.NdJ("ngModelChange",function(i){const a=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[a]=i)}),e.qZA(),e._UZ(4,"span",42),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",51)(8,"a",52),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA(),e.TgZ(22,"td"),e._uU(23),e.qZA(),e.TgZ(24,"td")(25,"span",53),e._uU(26),e.qZA()(),e.TgZ(27,"td")(28,"mat-slide-toggle",54),e.NdJ("click",function(){const i=e.CHM(t),r=i.$implicit,a=i.index,c=e.oxw(2);return e.KtG(r.is_active?c.isActive(a,r.id):c.Active(a,r.id))})("ngModelChange",function(i){const a=e.CHM(t).$implicit;return e.KtG(a.is_active=i)}),e.qZA()(),e.TgZ(29,"td")(30,"a",55),e._UZ(31,"img",56),e.qZA(),e.YNc(32,J,2,1,"a",57),e.YNc(33,w,2,0,"a",58),e.qZA()()}if(2&n){const t=l.$implicit,o=l.index,i=e.oxw(2);e.xp6(3),e.Q6J("ngModel",i.selectedRows[o]),e.xp6(3),e.Oqu(o+1),e.xp6(2),e.MGl("routerLink","//transaction/detailscreditnote/",t.id,""),e.xp6(1),e.Oqu(null==t||null==t.account?null:t.account.account_id),e.xp6(2),e.Oqu(null==t?null:t.date),e.xp6(2),e.Oqu(t.credit_note_no),e.xp6(2),e.Oqu(null==t||null==t.sale_bill_no?null:t.sale_bill_no.customer_bill_no),e.xp6(2),e.Oqu(t.reason),e.xp6(2),e.Oqu(t.roundoff),e.xp6(2),e.Oqu(t.tax),e.xp6(2),e.Oqu(t.total),e.xp6(2),e.Q6J("ngClass",e.kEZ(17,L,"Complete"===t.status,"Pending"===t.status,"Ordered"===t.status)),e.xp6(1),e.Oqu(t.status),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//transaction/detailscreditnote/",t.id,""),e.xp6(2),e.Q6J("ngIf",i.isEdit),e.xp6(1),e.Q6J("ngIf",i.isDelete)}}const P=function(n,l){return{itemsPerPage:n,currentPage:l}};function R(n,l){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,E,34,21,"tr",48),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,P,t.itemsPerPage,t.p)))}}function O(n,l){1&n&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",62)(3,"p",63),e._uU(4,"Data not available"),e.qZA()()()())}function B(n,l){1&n&&e._UZ(0,"mat-progress-bar",64)}function I(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",28)(1,"div",65)(2,"div",66),e._uU(3," Show per page "),e.TgZ(4,"select",67),e.NdJ("ngModelChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.itemsPerPage=i)}),e.TgZ(5,"option",68),e._uU(6,"10"),e.qZA(),e.TgZ(7,"option",69),e._uU(8,"20"),e.qZA(),e.TgZ(9,"option",70),e._uU(10,"30"),e.qZA(),e.TgZ(11,"option",71),e._uU(12,"50"),e.qZA(),e.TgZ(13,"option",72),e._uU(14,"100"),e.qZA(),e.TgZ(15,"option",73),e._uU(16,"All"),e.qZA()()()(),e.TgZ(17,"div",74)(18,"div",75)(19,"pagination-controls",76),e.NdJ("pageChange",function(i){e.CHM(t);const r=e.oxw();return e.KtG(r.p=i)}),e.qZA(),e.TgZ(20,"div",77),e._uU(21),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.itemsPerPage),e.xp6(17),e.lnq("Showing ",t.itemsPerPage," to ",t.itemsPerPage," of ",t.itemsPerPage," entries")}}const H=[{path:"",component:(()=>{class n{constructor(t,o){this.transactionService=t,this.cs=o,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedpaymentTerms="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0}confirmText(t,o){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.transactionService.deleteCreditNote(o).subscribe(r=>{this.delRes=r,this.delRes.success?(g().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.filteredData.splice(t,1),this.ngOnInit()):g().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,o){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this Credit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.transactionService.CreditNoteIsActive(o,"").subscribe(r=>{this.delRes=r,this.delRes.success?(g().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit()):g().fire({icon:"error",title:"Not-Deactivate!",text:this.delRes.error})})})}Active(t,o){g().fire({title:"Are you sure?",text:"Do you want to Active this Credit Note!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.transactionService.CreditNoteIsActive(o,"").subscribe(r=>{this.delRes=r,this.delRes.success?(g().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit()):g().fire({icon:"error",title:"Not-Active!",text:this.delRes.error})})})}ngOnInit(){this.transactionService.getCreditNote().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(i=>{"transactions"===i.content_type.app_label&&"creditnote"===i.content_type.model&&"add_creditnote"==i.codename?(this.isAdd=i.codename,console.log(this.isAdd)):"transactions"===i.content_type.app_label&&"creditnote"===i.content_type.model&&"change_creditnote"==i.codename?(this.isEdit=i.codename,console.log(this.isEdit)):"transactions"===i.content_type.app_label&&"creditnote"===i.content_type.model&&"delete_creditnote"==i.codename&&(this.isDelete=i.codename,console.log(this.isDelete))})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(o=>{const i=o?.account?.account_id.toLocaleLowerCase(),r=o?.credit_note_no.toLocaleLowerCase();return!!i.match(t)||!!r.match(t)})}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new y.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Credit Note",10,10),p()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Company Name "},{header:"Credit Note Date"},{header:"Credit Note No"},{header:"Sale Bill"},{header:"Reason"},{header:"Round off"},{header:"Tax"},{header:"Total"},{header:"Status"},{header:"Is Active"}]}),t.save("creditNote.pdf")}getVisibleDataFromTable(){const t=[],o=document.getElementById("mytable"),i=o.querySelector("thead tr"),r=o.querySelectorAll("tbody tr"),a=[];return i.querySelectorAll("th").forEach(c=>{const _=c.textContent.trim();"Is Active"!==_&&"Action"!==_&&a.push(_)}),t.push(a),r.forEach(c=>{const _=[];c.querySelectorAll("td").forEach(M=>{_.push(M.textContent.trim())}),t.push(_)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),o=C.P6.aoa_to_sheet(t),i=C.P6.book_new();C.P6.book_append_sheet(i,o,"Sheet1");const r=C.cW(i,{bookType:"xlsx",type:"array"}),a=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(a,"creditNote.xlsx")}printTable(){const t=document.getElementById("mytable"),r=document.querySelector(".titl").outerHTML,a=t.cloneNode(!0),c=a.querySelector("th.thone:nth-child(12)");c&&c.remove();const _=a.querySelector("th.thone:last-child");_&&_.remove(),a.querySelectorAll("tr").forEach(D=>{const U=D.querySelector("td:nth-child(12)");U&&U.remove();const S=D.querySelector("td:last-child");S&&S.remove()});const W=a.outerHTML,z="<style>.spaced-title { margin-top: 80px; }</style>"+r.replace("titl","spaced-title")+W,$=document.body.innerHTML;document.body.innerHTML=z,window.print(),document.body.innerHTML=$}filterData(){let t=this.tableData.slice();if(this.date){const o=new Date(this.date).toISOString().split("T")[0];t=t.filter(i=>new Date(i?.date).toISOString().split("T")[0]===o)}this.selectedAmount&&(t=t.filter(o=>o?.total<=this.selectedAmount)),this.filteredData=t}clearFilters(){this.selectedAmount=null,this.date=null,this.filterData()}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(T.p),e.Y36(m.J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-credit-note"]],decls:106,vars:8,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],["routerLink","//transaction/addcreditnote",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","AccountID/CreditNote No.",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],["type","number","placeholder","Enter Total",3,"ngModel","ngModelChange","keyup"],[1,"text-success"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],[1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Credit Note LIST"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your Credit Note"),e.qZA()(),e.TgZ(6,"div",3)(7,"a",4),e._UZ(8,"img",5),e._uU(9,"Add New Credit Note "),e.qZA()()(),e.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"a",11),e._UZ(16,"img",12),e.TgZ(17,"span"),e._UZ(18,"img",13),e.qZA()()(),e.TgZ(19,"div",14)(20,"a",15),e._UZ(21,"img",16),e.qZA(),e.TgZ(22,"div",17)(23,"label")(24,"input",18),e.NdJ("ngModelChange",function(r){return o.titlee=r})("ngModelChange",function(){return o.search()}),e.qZA()()()()(),e.TgZ(25,"div",19)(26,"ul")(27,"li")(28,"a",20),e.NdJ("click",function(){return o.generatePDF()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return o.exportToExcel()}),e._UZ(32,"img",23),e.qZA()(),e.TgZ(33,"li")(34,"a",24),e.NdJ("click",function(){return o.printTable()}),e._UZ(35,"img",25),e.qZA()()()()(),e.TgZ(36,"div",26)(37,"div",27)(38,"div",28)(39,"div",29)(40,"div",28)(41,"div",30)(42,"div",31)(43,"label"),e._uU(44,"Credit Note Date"),e.qZA(),e.TgZ(45,"input",32),e.NdJ("ngModelChange",function(r){return o.date=r})("change",function(){return o.filterData()}),e.qZA()()(),e.TgZ(46,"div",30)(47,"div",31)(48,"label"),e._uU(49,"Enter Total"),e.qZA(),e.TgZ(50,"input",33),e.NdJ("ngModelChange",function(r){return o.selectedAmount=r})("keyup",function(){return o.filterData()}),e.qZA(),e.TgZ(51,"span",34),e._uU(52,"Total Filter (Less than & Equal to Total value)"),e.qZA()()()(),e.TgZ(53,"div",35),e.NdJ("click",function(){return o.clearFilters()}),e.TgZ(54,"a",36),e._uU(55,"Clear Filter"),e.qZA()()()()()(),e.TgZ(56,"div",37)(57,"table",38)(58,"thead")(59,"tr")(60,"th",39),e.NdJ("click",function(){return o.sort("id")}),e.TgZ(61,"label",40),e.NdJ("click",function(){return o.selectAll(o.initChecked)}),e.TgZ(62,"input",41),e.NdJ("ngModelChange",function(r){return o.allSelected=r})("change",function(){return o.selectAlll()}),e.qZA(),e._UZ(63,"span",42),e.qZA(),e._UZ(64,"i",43),e.qZA(),e.TgZ(65,"th",39),e.NdJ("click",function(){return o.sort("id")}),e._uU(66,"Sr. No."),e._UZ(67,"i",43),e.qZA(),e.TgZ(68,"th",39),e.NdJ("click",function(){return o.sort("id")}),e._uU(69,"Account"),e._UZ(70,"i",43),e.qZA(),e.TgZ(71,"th",39),e.NdJ("click",function(){return o.sort("id")}),e._uU(72,"Credit Note Date"),e._UZ(73,"i",43),e.qZA(),e.TgZ(74,"th",39),e.NdJ("click",function(){return o.sort("id")}),e._uU(75,"Credit Note No"),e._UZ(76,"i",43),e.qZA(),e.TgZ(77,"th",39),e.NdJ("click",function(){return o.sort("id")}),e._uU(78,"Sales Bill"),e._UZ(79,"i",43),e.qZA(),e.TgZ(80,"th",39),e.NdJ("click",function(){return o.sort("id")}),e._uU(81,"Reason"),e._UZ(82,"i",43),e.qZA(),e.TgZ(83,"th",39),e.NdJ("click",function(){return o.sort("id")}),e._uU(84,"Round off "),e._UZ(85,"i",43),e.qZA(),e.TgZ(86,"th",39),e.NdJ("click",function(){return o.sort("id")}),e._uU(87,"Tax "),e._UZ(88,"i",43),e.qZA(),e.TgZ(89,"th",39),e.NdJ("click",function(){return o.sort("id")}),e._uU(90,"Total "),e._UZ(91,"i",43),e.qZA(),e.TgZ(92,"th",39),e.NdJ("click",function(){return o.sort("id")}),e._uU(93,"Status "),e._UZ(94,"i",43),e.qZA(),e.TgZ(95,"th",39),e.NdJ("click",function(){return o.sort("id")}),e._uU(96,"Is Active "),e._UZ(97,"i",43),e.qZA(),e.TgZ(98,"th",39),e.NdJ("click",function(){return o.sort("id")}),e._uU(99,"Action "),e._UZ(100,"i",43),e.qZA()()(),e.YNc(101,R,4,11,"tbody",44),e.YNc(102,O,5,0,"tbody",44),e.qZA(),e.TgZ(103,"div",45),e.YNc(104,B,1,0,"mat-progress-bar",46),e.qZA(),e.YNc(105,I,22,4,"div",47),e.qZA()()()),2&t&&(e.xp6(24),e.Q6J("ngModel",o.titlee),e.xp6(21),e.Q6J("ngModel",o.date),e.xp6(5),e.Q6J("ngModel",o.selectedAmount),e.xp6(12),e.Q6J("ngModel",o.allSelected),e.xp6(39),e.Q6J("ngIf",(null==o.filteredData?null:o.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==o.filteredData?null:o.filteredData.length)&&!o.loader),e.xp6(2),e.Q6J("ngIf",o.loader),e.xp6(1),e.Q6J("ngIf",!o.loader))},dependencies:[u.mk,u.sg,u.O5,f.yS,d.YN,d.Kr,d.Fj,d.wV,d.Wl,d.EJ,d.JJ,d.On,Z.pW,v.LS,N.Rr,v._s,k.T],styles:["input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),n})(),canActivate:[s(30597).l],data:{allowedRoles:["view_debitnote"]}}];let Q=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[f.Bz.forChild(H),f.Bz]}),n})();var Y=s(8468);let K=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[u.ez,Q,Y.I]}),n})()},30597:(q,b,s)=>{s.d(b,{l:()=>x});var u=s(94650),f=s(89299),A=s(97185),g=s(42917),y=s(80927);let x=(()=>{class p{constructor(h,e,T,m,d){this.router=h,this.Arout=e,this.toastr=T,this.profileService=m,this.coreService=d}canActivate(h,e){const T=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(m=>{this.userDetails=m,this.permissions=this.userDetails?.permission}),T){const m=h.data.allowedRoles;console.log(m,"allowedRoles");const d=T.some(Z=>m.includes(Z.codename));if(console.log(d),this.coreService.getProfile().subscribe(Z=>{this.userDetails=Z,this.profileService.setUserDetails(this.userDetails);const v=Z?.permission,N=this.profileService.getUserDetails();(!N||N.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}),d)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(h){return new(h||p)(u.LFG(f.F0),u.LFG(f.gz),u.LFG(A._W),u.LFG(g.J),u.LFG(y.p))},p.\u0275prov=u.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);