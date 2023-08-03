"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1433],{41433:(A,f,s)=>{s.r(f),s.d(f,{EmployeeModule:()=>B});var m=s(36895),u=s(88996),Z=s(2454),c=s.n(Z),e=s(94650),v=s(25062),p=s(72326),r=s(24006),g=s(73162),h=s(54333),y=s(90455),C=s(54040);function E(l,i){1&l&&(e.TgZ(0,"div",46)(1,"a",47),e._UZ(2,"img",48),e._uU(3,"Add Employee "),e.qZA()())}function U(l,i){if(1&l&&(e.TgZ(0,"a",55),e._UZ(1,"img",59),e.qZA()),2&l){const o=e.oxw().$implicit;e.MGl("routerLink","//contacts/updateEmployee/",o.id,"")}}function M(l,i){if(1&l){const o=e.EpF();e.TgZ(0,"a",60),e.NdJ("click",function(){e.CHM(o);const n=e.oxw(),a=n.index,d=n.$implicit,_=e.oxw(2);return e.KtG(_.confirmText(a,d.id))}),e._UZ(1,"img",61),e.qZA()}}function x(l,i){if(1&l){const o=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",50)(3,"input",51),e.NdJ("ngModelChange",function(n){const d=e.CHM(o).index,_=e.oxw(2);return e.KtG(_.selectedRows[d]=n)}),e.qZA(),e._UZ(4,"span",28),e.qZA()(),e.TgZ(5,"td",52)(6,"a",53),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td")(17,"mat-slide-toggle",54),e.NdJ("click",function(){const n=e.CHM(o),a=n.$implicit,d=n.index,_=e.oxw(2);return e.KtG(a.is_active?_.isActive(d,a.id):_.Active(d,a.id))})("ngModelChange",function(n){const d=e.CHM(o).$implicit;return e.KtG(d.is_active=n)}),e.qZA()(),e.TgZ(18,"td")(19,"a",55),e._UZ(20,"img",56),e.qZA(),e.YNc(21,U,2,1,"a",57),e.YNc(22,M,2,0,"a",58),e.qZA()()}if(2&l){const o=i.$implicit,t=i.index,n=e.oxw(2);e.xp6(3),e.Q6J("ngModel",n.selectedRows[t]),e.xp6(3),e.MGl("routerLink","//contacts/employeeDetails/",o.id,""),e.xp6(1),e.Oqu(o.name),e.xp6(2),e.Oqu(o.mobile_no),e.xp6(2),e.Oqu(null==o?null:o.email),e.xp6(2),e.Oqu(o.commision),e.xp6(2),e.Oqu(o.pan_no),e.xp6(2),e.Q6J("ngModel",o.is_active),e.xp6(2),e.MGl("routerLink","//contacts/employeeDetails/",o.id,""),e.xp6(2),e.Q6J("ngIf",n.isEdit),e.xp6(1),e.Q6J("ngIf",n.isDelete)}}const S=function(l,i){return{itemsPerPage:l,currentPage:i}};function D(l,i){if(1&l&&(e.TgZ(0,"tbody"),e.YNc(1,x,23,11,"tr",49),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&l){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,o.tableData,o.key,o.reverse),e.WLB(8,S,o.pageSize,o.p)))}}function J(l,i){1&l&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",62)(3,"p",63),e._uU(4,"Data not available"),e.qZA()()()())}function k(l,i){1&l&&e._UZ(0,"mat-progress-bar",64)}let q=(()=>{class l{constructor(o,t){this.contactService=o,this.QueryService=t,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(o,t){c().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.contactService.deleteEmployee(t).subscribe(a=>{this.delRes=a,"Employee Deleted successfully"==this.delRes.msg?(this.ngOnInit(),c().fire({icon:"success",title:"Deleted !",text:this.delRes.msg}),this.tableData.splice(o,1)):c().fire({icon:"error",title:"Not Deleted !",text:this.delRes.error})})})}isActive(o,t){c().fire({title:"Are you sure?",text:"Do you want to Deactivate this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.contactService.EmployeeIsActive(t,"").subscribe(a=>{this.delRes=a,"Employee Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),c().fire({icon:"success",title:"Deactivate!",text:"Employee Is Deactivate Successfully."}))})}Active(o,t){c().fire({title:"Are you sure?",text:"Do you want to Active this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.contactService.EmployeeIsActive(t,"").subscribe(a=>{this.delRes=a,"Employee Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),c().fire({icon:"success",title:"Active!",text:"Employee Is Active Successfully."}))})}ngOnInit(){this.contactService.getEmployee().subscribe(t=>{console.log(t),this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)});const o=JSON.parse(localStorage.getItem("auth"));o&&o.permission&&o.permission.map(n=>{"master"===n.content_type.app_label&&"employee"===n.content_type.model&&"add_employee"==n.codename?(this.isAdd=n.codename,console.log(this.isAdd)):"master"===n.content_type.app_label&&"employee"===n.content_type.model&&"change_employee"==n.codename?(this.isEdit=n.codename,console.log(this.isEdit)):"master"===n.content_type.app_label&&"employee"===n.content_type.model&&"delete_employee"==n.codename&&(this.isDelete=n.codename,console.log(this.isDelete))})}selectAlll(){this.selectedRows.fill(this.allSelected)}ngAfterViewChecked(){}selectAll(o){this.tableData.forEach(o?t=>{t.isSelected=!1}:t=>{t.isSelected=!0})}deleteId(o){this.contactService.deleteSupplier(o).subscribe(t=>{this.delRes=t})}search(){if(""===this.titlee)this.ngOnInit();else{const o=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(t=>t.name.toLocaleLowerCase().includes(o))}}sort(o){this.key=o,this.reverse=!this.reverse}}return l.\u0275fac=function(o){return new(o||l)(e.Y36(v.y),e.Y36(p._))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-employee"]],decls:87,vars:10,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//contacts/addEmployee",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Employee list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Employee"),e.qZA()(),e.YNc(6,E,4,0,"div",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),e._UZ(13,"img",9),e.TgZ(14,"span"),e._UZ(15,"img",10),e.qZA()()(),e.TgZ(16,"div",11)(17,"a",12),e._UZ(18,"img",13),e.qZA(),e.TgZ(19,"div",14)(20,"label")(21,"input",15),e.NdJ("ngModelChange",function(a){return t.titlee=a})("ngModelChange",function(){return t.search()}),e.qZA()()()()(),e.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),e._UZ(26,"img",18),e.qZA()(),e.TgZ(27,"li")(28,"a",19),e._UZ(29,"img",20),e.qZA()(),e.TgZ(30,"li")(31,"a",21),e._UZ(32,"img",22),e.qZA()()()()(),e.TgZ(33,"div",23)(34,"table",24)(35,"thead")(36,"tr")(37,"th",25),e.NdJ("click",function(){return t.sort("id")}),e.TgZ(38,"label",26),e.NdJ("click",function(){return t.selectAll(t.initChecked)}),e.TgZ(39,"input",27),e.NdJ("ngModelChange",function(a){return t.allSelected=a})("change",function(){return t.selectAlll()}),e.qZA(),e._UZ(40,"span",28),e.qZA(),e._UZ(41,"i",29),e.qZA(),e.TgZ(42,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(43,"Name "),e._UZ(44,"i",29),e.qZA(),e.TgZ(45,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(46,"Mobile Number "),e._UZ(47,"i",29),e.qZA(),e.TgZ(48,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(49,"Email"),e._UZ(50,"i",29),e.qZA(),e.TgZ(51,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(52,"Commision "),e._UZ(53,"i",29),e.qZA(),e.TgZ(54,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(55,"PanCard "),e._UZ(56,"i",29),e.qZA(),e.TgZ(57,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(58,"Is Active "),e._UZ(59,"i",29),e.qZA(),e.TgZ(60,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(61,"Action "),e._UZ(62,"i",29),e.qZA()()(),e.YNc(63,D,4,11,"tbody",30),e.YNc(64,J,5,0,"tbody",30),e.qZA(),e.TgZ(65,"div",31),e.YNc(66,k,1,0,"mat-progress-bar",32),e.qZA(),e.TgZ(67,"div",33)(68,"div",34)(69,"div",35),e._uU(70," Show per page "),e.TgZ(71,"select",36),e.NdJ("ngModelChange",function(a){return t.itemsPerPage=a}),e.TgZ(72,"option",37),e._uU(73,"5"),e.qZA(),e.TgZ(74,"option",38),e._uU(75,"10"),e.qZA(),e.TgZ(76,"option",39),e._uU(77,"20"),e.qZA(),e.TgZ(78,"option",40),e._uU(79,"50"),e.qZA(),e.TgZ(80,"option",41),e._uU(81,"All"),e.qZA()()()(),e.TgZ(82,"div",42)(83,"div",43)(84,"pagination-controls",44),e.NdJ("pageChange",function(a){return t.p=a}),e.qZA(),e.TgZ(85,"div",45),e._uU(86),e.qZA()()()()()()()),2&o&&(e.xp6(6),e.Q6J("ngIf",t.isAdd),e.xp6(15),e.Q6J("ngModel",t.titlee),e.xp6(18),e.Q6J("ngModel",t.allSelected),e.xp6(24),e.Q6J("ngIf",(null==t.tableData?null:t.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==t.tableData?null:t.tableData.length)),e.xp6(2),e.Q6J("ngIf",t.loader),e.xp6(5),e.Q6J("ngModel",t.itemsPerPage),e.xp6(15),e.lnq("Showing ",t.pageSize," to ",t.pageSize," of ",t.pageSize," entries"))},dependencies:[m.sg,m.O5,u.yS,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.On,g.pW,h.LS,y.Rr,h._s,C.T]}),l})();var I=s(30597);const T=JSON.parse(localStorage.getItem("auth"));let b;T&&T.permission&&T.permission.map(i=>{"master"===i.content_type.app_label&&"employee"===i.content_type.model&&"view_employee"==i.codename&&(b=i.codename,console.log(b))});const N=[{path:"",component:q,canActivate:[I.l],data:{allowedRoles:[b]}}];let R=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.Bz.forChild(N),u.Bz]}),l})();var w=s(8468);let B=(()=>{class l{}return l.\u0275fac=function(o){return new(o||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[m.ez,R,w.I]}),l})()},30597:(A,f,s)=>{s.d(f,{l:()=>c});var m=s(94650),u=s(88996),Z=s(97185);let c=(()=>{class e{constructor(p,r,g){this.router=p,this.Arout=r,this.toastr=g}canActivate(p,r){const g=JSON.parse(localStorage.getItem("auth"));if(g&&g.user){const h=p.data.allowedRoles;console.log(h,"allowedRoles");const y=g.permission.some(C=>h.includes(C.codename));if(console.log(y),y)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return e.\u0275fac=function(p){return new(p||e)(m.LFG(u.F0),m.LFG(u.gz),m.LFG(Z._W))},e.\u0275prov=m.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);