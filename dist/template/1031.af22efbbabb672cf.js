"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1031],{31031:(A,f,r)=>{r.r(f),r.d(f,{UserModule:()=>L});var d=r(36895),p=r(88996),v=r(2454),c=r.n(v),e=r(94650),U=r(25062),u=r(72326),a=r(24006),m=r(73162),h=r(54333),Z=r(90455),C=r(65415),y=r(54040);function M(o,l){1&o&&(e.TgZ(0,"div",46)(1,"a",47),e._UZ(2,"img",48),e._uU(3,"Add User "),e.qZA()())}function x(o,l){if(1&o&&(e.TgZ(0,"a",57),e._UZ(1,"img",58),e.qZA()),2&o){const s=e.oxw().$implicit;e.MGl("routerLink","//settings/updateUser/",s.id,"")}}function S(o,l){if(1&o){const s=e.EpF();e.TgZ(0,"a",59),e.NdJ("click",function(){e.CHM(s);const n=e.oxw(),i=n.index,g=n.$implicit,_=e.oxw(2);return e.KtG(_.confirmText(i,g.id))}),e._UZ(1,"img",60),e.qZA()}}function J(o,l){if(1&o){const s=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",50)(3,"input",51),e.NdJ("ngModelChange",function(n){const g=e.CHM(s).index,_=e.oxw(2);return e.KtG(_.selectedRows[g]=n)}),e.qZA(),e._UZ(4,"span",28),e.qZA()(),e.TgZ(5,"td",52)(6,"a",53),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td")(17,"mat-slide-toggle",54),e.NdJ("click",function(){const n=e.CHM(s),i=n.$implicit,g=n.index,_=e.oxw(2);return e.KtG(i.is_active?_.isActive(g,i.id):_.Active(g,i.id))})("ngModelChange",function(n){const g=e.CHM(s).$implicit;return e.KtG(g.is_active=n)}),e.qZA()(),e.TgZ(18,"td"),e.YNc(19,x,2,1,"a",55),e.YNc(20,S,2,0,"a",56),e.qZA()()}if(2&o){const s=l.$implicit,t=l.index,n=e.oxw(2);e.xp6(3),e.Q6J("ngModel",n.selectedRows[t]),e.xp6(4),e.Oqu(s.name),e.xp6(2),e.Oqu(s.username),e.xp6(2),e.Oqu(s.phone_number),e.xp6(2),e.Oqu(s.email),e.xp6(2),e.Oqu(s.user_type),e.xp6(2),e.Q6J("ngModel",s.is_active),e.xp6(2),e.Q6J("ngIf",n.isEdit),e.xp6(1),e.Q6J("ngIf",n.isDelete)}}const D=function(o,l){return{itemsPerPage:o,currentPage:l}};function N(o,l){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,J,21,9,"tr",49),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&o){const s=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,s.tableData,s.key,s.isAscending),e.WLB(8,D,s.pageSize,s.p)))}}function I(o,l){1&o&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",61)(3,"p",62),e._uU(4,"Data not available"),e.qZA()()()())}function q(o,l){1&o&&e._UZ(0,"mat-progress-bar",63)}let k=(()=>{class o{constructor(s,t){this.contactService=s,this.QueryService=t,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.isAscending=!0,this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(s,t){c().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.contactService.deleteUser(t).subscribe(i=>{this.delRes=i,"User Deleted successfully"==this.delRes.msg?(this.ngOnInit(),c().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(s,1)):c().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(s,t){c().fire({title:"Are you sure?",text:"Do you want to Deactivate this user!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.contactService.UserIsActive(t,"").subscribe(i=>{this.delRes=i,"User Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),c().fire({icon:"success",title:"Deactivate!",text:"User Is Deactivate Successfully."}))})}Active(s,t){c().fire({title:"Are you sure?",text:"Do you want to Active this user!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.contactService.SupplierIsActive(t,"").subscribe(i=>{this.delRes=i,"User Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),c().fire({icon:"success",title:"Active!",text:"User Is Active Successfully."}))})}ngOnInit(){this.contactService.getUser().subscribe(t=>{console.log(t),this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)});const s=JSON.parse(localStorage.getItem("auth"));s&&s.permission&&s.permission.map(n=>{"master"===n.content_type.app_label&&"user"===n.content_type.model&&"add_user"==n.codename?(this.isAdd=n.codename,console.log(this.isAdd)):"master"===n.content_type.app_label&&"user"===n.content_type.model&&"change_user"==n.codename?(this.isEdit=n.codename,console.log(this.isEdit)):"master"===n.content_type.app_label&&"user"===n.content_type.model&&"delete_user"==n.codename&&(this.isDelete=n.codename,console.log(this.isDelete))})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(s){this.tableData.forEach(s?t=>{t.isSelected=!1}:t=>{t.isSelected=!0})}deleteId(s){this.contactService.deleteSupplier(s).subscribe(t=>{this.delRes=t})}search(){if(""==this.titlee)this.ngOnInit();else{const s=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(t=>{const n=t.name.toLocaleLowerCase(),i=t.username.toLocaleLowerCase();return!!n.match(s)||!!i.match(s)})}}sort(s){this.key=s,this.reverse=!this.reverse}}return o.\u0275fac=function(s){return new(s||o)(e.Y36(U.y),e.Y36(u._))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-user"]],decls:87,vars:10,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//settings/addUser",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3"],[3,"ngModel","click","ngModelChange"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","8"],[1,"center-text"],["mode","indeterminate",1,"progressbar"]],template:function(s,t){1&s&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"User list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search User "),e.qZA()(),e.YNc(6,M,4,0,"div",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),e._UZ(13,"img",9),e.TgZ(14,"span"),e._UZ(15,"img",10),e.qZA()()(),e.TgZ(16,"div",11)(17,"a",12),e._UZ(18,"img",13),e.qZA(),e.TgZ(19,"div",14)(20,"label")(21,"input",15),e.NdJ("ngModelChange",function(i){return t.titlee=i})("ngModelChange",function(){return t.search()}),e.qZA()()()()(),e.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),e._UZ(26,"img",18),e.qZA()(),e.TgZ(27,"li")(28,"a",19),e._UZ(29,"img",20),e.qZA()(),e.TgZ(30,"li")(31,"a",21),e._UZ(32,"img",22),e.qZA()()()()(),e.TgZ(33,"div",23)(34,"table",24)(35,"thead")(36,"tr")(37,"th",25),e.NdJ("click",function(){return t.sort("id")}),e.TgZ(38,"label",26),e.NdJ("click",function(){return t.selectAll(t.initChecked)}),e.TgZ(39,"input",27),e.NdJ("ngModelChange",function(i){return t.allSelected=i})("change",function(){return t.selectAlll()}),e.qZA(),e._UZ(40,"span",28),e.qZA(),e._UZ(41,"i",29),e.qZA(),e.TgZ(42,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(43,"Name "),e._UZ(44,"i",29),e.qZA(),e.TgZ(45,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(46,"User Name "),e._UZ(47,"i",29),e.qZA(),e.TgZ(48,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(49,"Mobile Number "),e._UZ(50,"i",29),e.qZA(),e.TgZ(51,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(52,"Email"),e._UZ(53,"i",29),e.qZA(),e.TgZ(54,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(55,"User Type "),e._UZ(56,"i",29),e.qZA(),e.TgZ(57,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(58,"Is Active "),e._UZ(59,"i",29),e.qZA(),e.TgZ(60,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(61,"Action "),e._UZ(62,"i",29),e.qZA()()(),e.YNc(63,N,4,11,"tbody",30),e.YNc(64,I,5,0,"tbody",30),e.qZA(),e.TgZ(65,"div",31),e.YNc(66,q,1,0,"mat-progress-bar",32),e.qZA(),e.TgZ(67,"div",33)(68,"div",34)(69,"div",35),e._uU(70," Show per page "),e.TgZ(71,"select",36),e.NdJ("ngModelChange",function(i){return t.itemsPerPage=i}),e.TgZ(72,"option",37),e._uU(73,"5"),e.qZA(),e.TgZ(74,"option",38),e._uU(75,"10"),e.qZA(),e.TgZ(76,"option",39),e._uU(77,"20"),e.qZA(),e.TgZ(78,"option",40),e._uU(79,"50"),e.qZA(),e.TgZ(80,"option",41),e._uU(81,"All"),e.qZA()()()(),e.TgZ(82,"div",42)(83,"div",43)(84,"pagination-controls",44),e.NdJ("pageChange",function(i){return t.p=i}),e.qZA(),e.TgZ(85,"div",45),e._uU(86),e.qZA()()()()()()()),2&s&&(e.xp6(6),e.Q6J("ngIf",t.isAdd),e.xp6(15),e.Q6J("ngModel",t.titlee),e.xp6(18),e.Q6J("ngModel",t.allSelected),e.xp6(24),e.Q6J("ngIf",(null==t.tableData?null:t.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==t.tableData?null:t.tableData.length)),e.xp6(2),e.Q6J("ngIf",t.loader),e.xp6(5),e.Q6J("ngModel",t.itemsPerPage),e.xp6(15),e.lnq("Showing ",t.pageSize," to ",t.pageSize," of ",t.pageSize," entries"))},dependencies:[d.sg,d.O5,p.yS,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.On,m.pW,h.LS,Z.Rr,C.G,h._s,y.T]}),o})();var R=r(30597);const T=JSON.parse(localStorage.getItem("auth"));let b;T&&T.permission&&T.permission.map(l=>{"master"===l.content_type.app_label&&"user"===l.content_type.model&&"view_user"==l.codename&&(b=l.codename,console.log(b))});const B=[{path:"",component:k,canActivate:[R.l],data:{allowedRoles:[b]}}];let w=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(B),p.Bz]}),o})();var O=r(8468);let L=(()=>{class o{}return o.\u0275fac=function(s){return new(s||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,w,O.I]}),o})()},30597:(A,f,r)=>{r.d(f,{l:()=>c});var d=r(94650),p=r(88996),v=r(97185);let c=(()=>{class e{constructor(u,a,m){this.router=u,this.Arout=a,this.toastr=m}canActivate(u,a){const m=JSON.parse(localStorage.getItem("auth"));if(m&&m.user){const h=u.data.allowedRoles;console.log(h,"allowedRoles");const Z=m.permission.some(C=>h.includes(C.codename));if(console.log(Z),Z)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return e.\u0275fac=function(u){return new(u||e)(d.LFG(p.F0),d.LFG(p.gz),d.LFG(v._W))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);