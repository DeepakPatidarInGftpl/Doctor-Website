"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[401],{10401:(D,A,s)=>{s.r(A),s.d(A,{EmployeeListModule:()=>k});var g=s(36895),T=s(88996),M=s(2454),y=s.n(M),e=s(94650),c=s(80927),r=s(72326),a=s(65415),l=s(24006),m=s(54333),d=s(90455),u=s(54040);function f(o,h){1&o&&(e.TgZ(0,"div",52)(1,"a",53),e._UZ(2,"img",54),e._uU(3,"Add Employee "),e.qZA()())}function _(o,h){if(1&o&&(e.TgZ(0,"a",60),e._UZ(1,"img",65),e.qZA()),2&o){const i=e.oxw().$implicit;e.MGl("routerLink","//masters/editemployee/",i.id,"")}}function v(o,h){if(1&o){const i=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",55)(3,"input",56),e.NdJ("ngModelChange",function(n){const b=e.CHM(i).index,E=e.oxw();return e.KtG(E.selectedRows[b]=n)}),e.qZA(),e._UZ(4,"span",37),e.qZA()(),e.TgZ(5,"td",57)(6,"a",58),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td")(19,"mat-slide-toggle",59),e.NdJ("click",function(){const n=e.CHM(i),p=n.$implicit,b=n.index,E=e.oxw();return e.KtG(p.is_active?E.isActive(b,p.id):E.Active(b,p.id))})("ngModelChange",function(n){const b=e.CHM(i).$implicit;return e.KtG(b.is_active=n)}),e.qZA()(),e.TgZ(20,"td")(21,"a",60),e._UZ(22,"img",61),e.qZA(),e.YNc(23,_,2,1,"a",62),e.TgZ(24,"a",63),e.NdJ("click",function(){const n=e.CHM(i),p=n.index,b=n.$implicit,E=e.oxw();return e.KtG(E.confirmText(p,b.id))}),e._UZ(25,"img",64),e.qZA()()()}if(2&o){const i=h.$implicit,t=h.index,n=e.oxw();e.xp6(3),e.Q6J("ngModel",n.selectedRows[t]),e.xp6(3),e.MGl("routerLink","//masters/employee-details/",i.id,""),e.xp6(1),e.Oqu(i.name),e.xp6(2),e.Oqu(null==i?null:i.fathers_name),e.xp6(2),e.Oqu(null==i?null:i.dob),e.xp6(2),e.Oqu(null==i?null:i.mobile),e.xp6(2),e.Oqu(null==i?null:i.email),e.xp6(2),e.Oqu(null==i?null:i.pincode),e.xp6(2),e.Q6J("ngModel",i.is_active),e.xp6(2),e.MGl("routerLink","//masters/employee-details/",i.id,""),e.xp6(2),e.Q6J("ngIf",n.isEdit)}}const Z=function(o,h){return{itemsPerPage:o,currentPage:h}};let C=(()=>{class o{constructor(i,t){this.coreService=i,this.QueryService=t,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(i,t){y().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.deleteEmployee(t).subscribe(p=>{this.delRes=p,"Employee Deleted successfully"==this.delRes.msg&&this.ngOnInit()}),y().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(i,1))})}isActive(i,t){y().fire({title:"Are you sure?",text:"Do you want to Deactivate this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.employeeIsActive(t,"").subscribe(p=>{this.delRes=p,"Employee Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),y().fire({icon:"success",title:"Deactivate!",text:"Employee Is Deactivate Successfully."}))})}Active(i,t){y().fire({title:"Are you sure?",text:"Do you want to Active this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.employeeIsActive(t,"").subscribe(p=>{this.delRes=p,"Employee Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),y().fire({icon:"success",title:"Active!",text:"Employee Is Active Successfully."}))})}ngOnInit(){this.coreService.getEmployee().subscribe(t=>{console.log(t),this.tableData=t,this.selectedRows=new Array(this.tableData.length).fill(!1)});const i=JSON.parse(localStorage.getItem("auth"));i&&i.permission&&i.permission.map(n=>{"master"===n.content_type.app_label&&"employee"===n.content_type.model&&"add_employee"==n.codename?this.isAdd=n.codename:"master"===n.content_type.app_label&&"employee"===n.content_type.model&&"change_employee"==n.codename&&(this.isEdit=n.codename)})}selectAlll(){this.selectedRows.fill(this.allSelected)}ngAfterViewChecked(){}selectAll(i){this.tableData.forEach(i?t=>{t.isSelected=!1}:t=>{t.isSelected=!0})}deleteId(i){this.coreService.deleteEmployee(i).subscribe(t=>{this.delRes=t})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(i=>(console.log(i),console.log(i.name.toLocaleLowerCase()),console.log(i.name.match(this.titlee)),i.name.match(this.titlee)))}sort(i){this.key=i,this.reverse=!this.reverse}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(c.p),e.Y36(r._))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-employee-list"]],decls:118,vars:19,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],[1,"form-select"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//masters/addemployee",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Employee list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Employee"),e.qZA()(),e.YNc(6,f,4,0,"div",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),e._UZ(13,"img",9),e.TgZ(14,"span"),e._UZ(15,"img",10),e.qZA()()(),e.TgZ(16,"div",11)(17,"a",12),e._UZ(18,"img",13),e.qZA(),e.TgZ(19,"div",14)(20,"label")(21,"input",15),e.NdJ("ngModelChange",function(p){return t.titlee=p})("ngModelChange",function(){return t.search()}),e.qZA()()()()(),e.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),e._UZ(26,"img",18),e.qZA()(),e.TgZ(27,"li")(28,"a",19),e._UZ(29,"img",20),e.qZA()(),e.TgZ(30,"li")(31,"a",21),e._UZ(32,"img",22),e.qZA()()()()(),e.TgZ(33,"div",23)(34,"div",24)(35,"div",25)(36,"div",26)(37,"div",27)(38,"select",28)(39,"option"),e._uU(40,"Choose Category"),e.qZA(),e.TgZ(41,"option"),e._uU(42,"Computers"),e.qZA()()()(),e.TgZ(43,"div",26)(44,"div",27)(45,"select",28)(46,"option"),e._uU(47,"Choose Sub Category"),e.qZA(),e.TgZ(48,"option"),e._uU(49,"Fruits"),e.qZA()()()(),e.TgZ(50,"div",26)(51,"div",27)(52,"select",28)(53,"option"),e._uU(54,"Choose Sub Brand"),e.qZA(),e.TgZ(55,"option"),e._uU(56,"Iphone"),e.qZA()()()(),e.TgZ(57,"div",29)(58,"div",27)(59,"a",30),e._UZ(60,"img",31),e.qZA()()()()()(),e.TgZ(61,"div",32)(62,"table",33)(63,"thead")(64,"tr")(65,"th",34),e.NdJ("click",function(){return t.sort("id")}),e.TgZ(66,"label",35),e.NdJ("click",function(){return t.selectAll(t.initChecked)}),e.TgZ(67,"input",36),e.NdJ("ngModelChange",function(p){return t.allSelected=p})("change",function(){return t.selectAlll()}),e.qZA(),e._UZ(68,"span",37),e.qZA(),e._UZ(69,"i",38),e.qZA(),e.TgZ(70,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(71,"Name "),e._UZ(72,"i",38),e.qZA(),e.TgZ(73,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(74,"Fathers Name "),e._UZ(75,"i",38),e.qZA(),e.TgZ(76,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(77,"Date of birth "),e._UZ(78,"i",38),e.qZA(),e.TgZ(79,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(80,"Phone Number "),e._UZ(81,"i",38),e.qZA(),e.TgZ(82,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(83,"Email "),e._UZ(84,"i",38),e.qZA(),e.TgZ(85,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(86,"Pincode "),e._UZ(87,"i",38),e.qZA(),e.TgZ(88,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(89,"Is Active "),e._UZ(90,"i",38),e.qZA(),e.TgZ(91,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(92,"Action "),e._UZ(93,"i",38),e.qZA()()(),e.TgZ(94,"tbody"),e.YNc(95,v,26,11,"tr",39),e.ALo(96,"paginate"),e.ALo(97,"orderBy"),e.qZA()(),e.TgZ(98,"div",25)(99,"div",40)(100,"div",41),e._uU(101," Show per page "),e.TgZ(102,"select",42),e.NdJ("ngModelChange",function(p){return t.itemsPerPage=p}),e.TgZ(103,"option",43),e._uU(104,"5"),e.qZA(),e.TgZ(105,"option",44),e._uU(106,"10"),e.qZA(),e.TgZ(107,"option",45),e._uU(108,"20"),e.qZA(),e.TgZ(109,"option",46),e._uU(110,"50"),e.qZA(),e.TgZ(111,"option",47),e._uU(112,"All"),e.qZA()()()(),e.TgZ(113,"div",48)(114,"div",49)(115,"pagination-controls",50),e.NdJ("pageChange",function(p){return t.p=p}),e.qZA(),e.TgZ(116,"div",51),e._uU(117),e.qZA()()()()()()()),2&i&&(e.xp6(6),e.Q6J("ngIf",t.isAdd),e.xp6(15),e.Q6J("ngModel",t.titlee),e.xp6(41),e.Q6J("dtOptions",t.dtOptions),e.xp6(5),e.Q6J("ngModel",t.allSelected),e.xp6(28),e.Q6J("ngForOf",e.xi3(96,9,e.Dn7(97,12,t.tableData,t.key,t.reverse),e.WLB(16,Z,t.pageSize,t.p))),e.xp6(7),e.Q6J("ngModel",t.itemsPerPage),e.xp6(15),e.lnq("Showing ",t.pageSize," to ",t.pageSize," of ",t.pageSize," entries"))},dependencies:[g.sg,g.O5,T.yS,a.G,l.YN,l.Kr,l.Fj,l.Wl,l.EJ,l.JJ,l.On,m.LS,d.Rr,m._s,u.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}.datanew[_ngcontent-%COMP%]   .thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),o})();var L=s(30597);const U=JSON.parse(localStorage.getItem("auth"));let S;U&&U.permission&&U.permission.map(h=>{"master"===h.content_type.app_label&&"employee"===h.content_type.model&&"view_employee"==h.codename&&(S=h.codename,console.log(S))});const O=[{path:"",component:C,canActivate:[L.l],data:{allowedRoles:[S]}}];let x=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[T.Bz.forChild(O),T.Bz]}),o})();var P=s(96134),J=s(30906),R=s(43189);let k=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.ez,x,a.T,l.u5,J.ZU,P.ii.forRoot(),R.h,m.JX,u.l,d.rP]}),o})()},30597:(D,A,s)=>{s.d(A,{l:()=>c});var g=s(94650),T=s(88996),M=s(97185),y=s(42917),e=s(80927);let c=(()=>{class r{constructor(l,m,d,u,f){this.router=l,this.Arout=m,this.toastr=d,this.profileService=u,this.coreService=f}canActivate(l,m){const d=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(u=>{this.userDetails=u,this.permissions=this.userDetails?.permission}),d){const u=l.data.allowedRoles;console.log(u,"allowedRoles");const f=d.some(_=>u.includes(_.codename));if(this.coreService.getProfile().subscribe(_=>{this.userDetails=_,this.profileService.setUserDetails(this.userDetails);const v=_?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}),console.log(f),f)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return r.\u0275fac=function(l){return new(l||r)(g.LFG(T.F0),g.LFG(T.gz),g.LFG(M._W),g.LFG(y.J),g.LFG(e.p))},r.\u0275prov=g.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},65415:(D,A,s)=>{s.d(A,{G:()=>M,T:()=>e});var g=s(94650),M=function(){function c(r,a,l){this.el=r,this.vcr=a,this.renderer=l,this.dtOptions={}}return c.prototype.ngOnInit=function(){var r=this;this.dtTrigger?this.dtTrigger.subscribe(function(a){r.displayTable(a)}):this.displayTable(null)},c.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},c.prototype.displayTable=function(r){var a=this;r&&(this.dtOptions=r),this.dtInstance=new Promise(function(l,m){Promise.resolve(a.dtOptions).then(function(d){0===Object.keys(d).length&&0===$("tbody tr",a.el.nativeElement).length?m("Both the table and dtOptions cannot be empty"):setTimeout(function(){var f={rowCallback:function(_,v,Z){if(d.columns){var C=d.columns;a.applyNgPipeTransform(_,C),a.applyNgRefTemplate(_,C,v)}d.rowCallback&&d.rowCallback(_,v,Z)}};f=Object.assign({},d,f),a.dt=$(a.el.nativeElement).DataTable(f),l(a.dt)})})})},c.prototype.applyNgPipeTransform=function(r,a){a.filter(function(m){return m.ngPipeInstance&&!m.ngTemplateRef}).forEach(function(m){var d=m.ngPipeInstance,u=m.ngPipeArgs||[],f=a.findIndex(function(C){return C.data===m.data}),_=r.childNodes.item(f),v=$(_).text(),Z=d.transform.apply(d,function(c,r,a){if(a||2===arguments.length)for(var d,l=0,m=r.length;l<m;l++)(d||!(l in r))&&(d||(d=Array.prototype.slice.call(r,0,l)),d[l]=r[l]);return c.concat(d||Array.prototype.slice.call(r))}([v],u,!1));$(_).text(Z)})},c.prototype.applyNgRefTemplate=function(r,a,l){var m=this;a.filter(function(u){return u.ngTemplateRef&&!u.ngPipeInstance}).forEach(function(u){var f=u.ngTemplateRef,_=f.ref,v=f.context,Z=a.findIndex(function(S){return S.data===u.data}),C=r.childNodes.item(Z);$(C).html("");var L=Object.assign({},v,v?.userData,{adtData:l}),U=m.vcr.createEmbeddedView(_,L);m.renderer.appendChild(C,U.rootNodes[0])})},c.\u0275fac=function(a){return new(a||c)(g.Y36(g.SBq),g.Y36(g.s_b),g.Y36(g.Qsj))},c.\u0275dir=g.lG2({type:c,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),c}(),y=s(36895),e=function(){function c(){}return c.forRoot=function(){return{ngModule:c}},c.\u0275fac=function(a){return new(a||c)},c.\u0275mod=g.oAB({type:c}),c.\u0275inj=g.cJS({imports:[y.ez]}),c}()}}]);