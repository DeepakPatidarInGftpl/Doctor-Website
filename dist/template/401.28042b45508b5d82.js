"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[401],{10401:(S,y,s)=>{s.r(y),s.d(y,{EmployeeListModule:()=>k});var c=s(36895),h=s(88996),b=s(2454),m=s.n(b),e=s(94650),E=s(80927),p=s(72326),C=s(65415),a=s(24006),_=s(54333),u=s(90455),d=s(54040);function f(n,r){1&n&&(e.TgZ(0,"div",52)(1,"a",53),e._UZ(2,"img",54),e._uU(3,"Add Employee "),e.qZA()())}function v(n,r){if(1&n&&(e.TgZ(0,"a",60),e._UZ(1,"img",65),e.qZA()),2&n){const i=e.oxw().$implicit;e.MGl("routerLink","//masters/editemployee/",i.id,"")}}function T(n,r){if(1&n){const i=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",55)(3,"input",56),e.NdJ("ngModelChange",function(o){const g=e.CHM(i).index,Z=e.oxw();return e.KtG(Z.selectedRows[g]=o)}),e.qZA(),e._UZ(4,"span",37),e.qZA()(),e.TgZ(5,"td",57)(6,"a",58),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td")(19,"mat-slide-toggle",59),e.NdJ("click",function(){const o=e.CHM(i),l=o.$implicit,g=o.index,Z=e.oxw();return e.KtG(l.is_active?Z.isActive(g,l.id):Z.Active(g,l.id))})("ngModelChange",function(o){const g=e.CHM(i).$implicit;return e.KtG(g.is_active=o)}),e.qZA()(),e.TgZ(20,"td")(21,"a",60),e._UZ(22,"img",61),e.qZA(),e.YNc(23,v,2,1,"a",62),e.TgZ(24,"a",63),e.NdJ("click",function(){const o=e.CHM(i),l=o.index,g=o.$implicit,Z=e.oxw();return e.KtG(Z.confirmText(l,g.id))}),e._UZ(25,"img",64),e.qZA()()()}if(2&n){const i=r.$implicit,t=r.index,o=e.oxw();e.xp6(3),e.Q6J("ngModel",o.selectedRows[t]),e.xp6(3),e.MGl("routerLink","//masters/employee-details/",i.id,""),e.xp6(1),e.Oqu(i.name),e.xp6(2),e.Oqu(null==i?null:i.fathers_name),e.xp6(2),e.Oqu(null==i?null:i.dob),e.xp6(2),e.Oqu(null==i?null:i.mobile),e.xp6(2),e.Oqu(null==i?null:i.email),e.xp6(2),e.Oqu(null==i?null:i.pincode),e.xp6(2),e.Q6J("ngModel",i.is_active),e.xp6(2),e.MGl("routerLink","//masters/employee-details/",i.id,""),e.xp6(2),e.Q6J("ngIf",o.isEdit)}}const A=function(n,r){return{itemsPerPage:n,currentPage:r}};let L=(()=>{class n{constructor(i,t){this.coreService=i,this.QueryService=t,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(i,t){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.deleteEmployee(t).subscribe(l=>{this.delRes=l,"Employee Deleted successfully"==this.delRes.msg&&this.ngOnInit()}),m().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(i,1))})}isActive(i,t){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.employeeIsActive(t,"").subscribe(l=>{this.delRes=l,"Employee Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),m().fire({icon:"success",title:"Deactivate!",text:"Employee Is Deactivate Successfully."}))})}Active(i,t){m().fire({title:"Are you sure?",text:"Do you want to Active this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.employeeIsActive(t,"").subscribe(l=>{this.delRes=l,"Employee Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),m().fire({icon:"success",title:"Active!",text:"Employee Is Active Successfully."}))})}ngOnInit(){this.coreService.getEmployee().subscribe(t=>{this.tableData=t,this.selectedRows=new Array(this.tableData.length).fill(!1)});const i=JSON.parse(localStorage.getItem("auth"));i&&i.permission&&i.permission.map(o=>{"master"===o.content_type.app_label&&"employee"===o.content_type.model&&"add_employee"==o.codename?this.isAdd=o.codename:"master"===o.content_type.app_label&&"employee"===o.content_type.model&&"change_employee"==o.codename&&(this.isEdit=o.codename)})}selectAlll(){this.selectedRows.fill(this.allSelected)}ngAfterViewChecked(){}selectAll(i){this.tableData.forEach(i?t=>{t.isSelected=!1}:t=>{t.isSelected=!0})}deleteId(i){this.coreService.deleteEmployee(i).subscribe(t=>{this.delRes=t})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(i=>i.name.match(this.titlee))}sort(i){this.key=i,this.reverse=!this.reverse}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(E.p),e.Y36(p._))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-employee-list"]],decls:118,vars:19,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],[1,"form-select"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//masters/addemployee",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Employee list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Employee"),e.qZA()(),e.YNc(6,f,4,0,"div",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),e._UZ(13,"img",9),e.TgZ(14,"span"),e._UZ(15,"img",10),e.qZA()()(),e.TgZ(16,"div",11)(17,"a",12),e._UZ(18,"img",13),e.qZA(),e.TgZ(19,"div",14)(20,"label")(21,"input",15),e.NdJ("ngModelChange",function(l){return t.titlee=l})("ngModelChange",function(){return t.search()}),e.qZA()()()()(),e.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),e._UZ(26,"img",18),e.qZA()(),e.TgZ(27,"li")(28,"a",19),e._UZ(29,"img",20),e.qZA()(),e.TgZ(30,"li")(31,"a",21),e._UZ(32,"img",22),e.qZA()()()()(),e.TgZ(33,"div",23)(34,"div",24)(35,"div",25)(36,"div",26)(37,"div",27)(38,"select",28)(39,"option"),e._uU(40,"Choose Category"),e.qZA(),e.TgZ(41,"option"),e._uU(42,"Computers"),e.qZA()()()(),e.TgZ(43,"div",26)(44,"div",27)(45,"select",28)(46,"option"),e._uU(47,"Choose Sub Category"),e.qZA(),e.TgZ(48,"option"),e._uU(49,"Fruits"),e.qZA()()()(),e.TgZ(50,"div",26)(51,"div",27)(52,"select",28)(53,"option"),e._uU(54,"Choose Sub Brand"),e.qZA(),e.TgZ(55,"option"),e._uU(56,"Iphone"),e.qZA()()()(),e.TgZ(57,"div",29)(58,"div",27)(59,"a",30),e._UZ(60,"img",31),e.qZA()()()()()(),e.TgZ(61,"div",32)(62,"table",33)(63,"thead")(64,"tr")(65,"th",34),e.NdJ("click",function(){return t.sort("id")}),e.TgZ(66,"label",35),e.NdJ("click",function(){return t.selectAll(t.initChecked)}),e.TgZ(67,"input",36),e.NdJ("ngModelChange",function(l){return t.allSelected=l})("change",function(){return t.selectAlll()}),e.qZA(),e._UZ(68,"span",37),e.qZA(),e._UZ(69,"i",38),e.qZA(),e.TgZ(70,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(71,"Name "),e._UZ(72,"i",38),e.qZA(),e.TgZ(73,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(74,"Fathers Name "),e._UZ(75,"i",38),e.qZA(),e.TgZ(76,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(77,"Date of birth "),e._UZ(78,"i",38),e.qZA(),e.TgZ(79,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(80,"Phone Number "),e._UZ(81,"i",38),e.qZA(),e.TgZ(82,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(83,"Email "),e._UZ(84,"i",38),e.qZA(),e.TgZ(85,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(86,"Pincode "),e._UZ(87,"i",38),e.qZA(),e.TgZ(88,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(89,"Is Active "),e._UZ(90,"i",38),e.qZA(),e.TgZ(91,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(92,"Action "),e._UZ(93,"i",38),e.qZA()()(),e.TgZ(94,"tbody"),e.YNc(95,T,26,11,"tr",39),e.ALo(96,"paginate"),e.ALo(97,"orderBy"),e.qZA()(),e.TgZ(98,"div",25)(99,"div",40)(100,"div",41),e._uU(101," Show per page "),e.TgZ(102,"select",42),e.NdJ("ngModelChange",function(l){return t.itemsPerPage=l}),e.TgZ(103,"option",43),e._uU(104,"5"),e.qZA(),e.TgZ(105,"option",44),e._uU(106,"10"),e.qZA(),e.TgZ(107,"option",45),e._uU(108,"20"),e.qZA(),e.TgZ(109,"option",46),e._uU(110,"50"),e.qZA(),e.TgZ(111,"option",47),e._uU(112,"All"),e.qZA()()()(),e.TgZ(113,"div",48)(114,"div",49)(115,"pagination-controls",50),e.NdJ("pageChange",function(l){return t.p=l}),e.qZA(),e.TgZ(116,"div",51),e._uU(117),e.qZA()()()()()()()),2&i&&(e.xp6(6),e.Q6J("ngIf",t.isAdd),e.xp6(15),e.Q6J("ngModel",t.titlee),e.xp6(41),e.Q6J("dtOptions",t.dtOptions),e.xp6(5),e.Q6J("ngModel",t.allSelected),e.xp6(28),e.Q6J("ngForOf",e.xi3(96,9,e.Dn7(97,12,t.tableData,t.key,t.reverse),e.WLB(16,A,t.pageSize,t.p))),e.xp6(7),e.Q6J("ngModel",t.itemsPerPage),e.xp6(15),e.lnq("Showing ",t.pageSize," to ",t.pageSize," of ",t.pageSize," entries"))},dependencies:[c.sg,c.O5,h.yS,C.G,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.On,_.LS,u.Rr,_._s,d.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}.datanew[_ngcontent-%COMP%]   .thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),n})();var O=s(30597);const M=JSON.parse(localStorage.getItem("auth"));let U;M&&M.map(r=>{"master"===r.content_type.app_label&&"employee"===r.content_type.model&&"view_employee"==r.codename&&(U=r.codename)});const x=[{path:"",component:L,canActivate:[O.l],data:{allowedRoles:[U]}}];let D=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[h.Bz.forChild(x),h.Bz]}),n})();var P=s(96134),J=s(30906),q=s(43189);let k=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,D,C.T,a.u5,J.ZU,P.ii.forRoot(),q.h,_.JX,d.l,u.rP]}),n})()},30597:(S,y,s)=>{s.d(y,{l:()=>E});var c=s(94650),h=s(88996),b=s(97185),m=s(42917),e=s(80927);let E=(()=>{class p{constructor(a,_,u,d,f){this.router=a,this.Arout=_,this.toastr=u,this.profileService=d,this.coreService=f}canActivate(a,_){const u=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(d=>{this.userDetails=d,this.permissions=this.userDetails?.permission}),u){const d=a.data.allowedRoles;console.log(d,"allowedRoles");const f=u.some(v=>d.includes(v.codename));if(console.log(f),this.coreService.getProfile().subscribe(v=>{this.userDetails=v,this.profileService.setUserDetails(this.userDetails);const T=v?.permission,A=this.profileService.getUserDetails();(!A||A.length!==T.length)&&(this.profileService.setUserPermission(T),window.location.reload())}),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(a){return new(a||p)(c.LFG(h.F0),c.LFG(h.gz),c.LFG(b._W),c.LFG(m.J),c.LFG(e.p))},p.\u0275prov=c.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);