"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[401],{10401:(M,C,i)=>{i.r(C),i.d(C,{EmployeeListModule:()=>B});var p=i(36895),T=i(89299),b=i(2454),d=i.n(b),e=i(94650),r=i(80927),c=i(72326),g=i(87078),o=i(24006),h=i(54333),f=i(90455),u=i(54040);function v(s,m){1&s&&(e.TgZ(0,"div",53)(1,"a",54),e._UZ(2,"img",55),e._uU(3,"Add Employee "),e.qZA()())}function y(s,m){if(1&s&&(e.TgZ(0,"a",61),e._UZ(1,"img",66),e.qZA()),2&s){const n=e.oxw().$implicit;e.MGl("routerLink","//masters/editemployee/",n.id,"")}}function Z(s,m){if(1&s){const n=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",56)(3,"input",57),e.NdJ("ngModelChange",function(a){const _=e.CHM(n).index,E=e.oxw();return e.KtG(E.selectedRows[_]=a)}),e.qZA(),e._UZ(4,"span",37),e.qZA()(),e.TgZ(5,"td",58)(6,"a",59),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td")(19,"mat-slide-toggle",60),e.NdJ("click",function(){const a=e.CHM(n),l=a.$implicit,_=a.index,E=e.oxw();return e.KtG(l.is_active?E.isActive(_,l.id):E.Active(_,l.id))})("ngModelChange",function(a){const _=e.CHM(n).$implicit;return e.KtG(_.is_active=a)}),e.qZA()(),e.TgZ(20,"td")(21,"a",61),e._UZ(22,"img",62),e.qZA(),e.YNc(23,y,2,1,"a",63),e.TgZ(24,"a",64),e.NdJ("click",function(){const a=e.CHM(n),l=a.index,_=a.$implicit,E=e.oxw();return e.KtG(E.confirmText(l,_.id))}),e._UZ(25,"img",65),e.qZA()()()}if(2&s){const n=m.$implicit,t=m.index,a=e.oxw();e.xp6(3),e.Q6J("ngModel",a.selectedRows[t]),e.xp6(3),e.MGl("routerLink","//masters/employee-details/",n.id,""),e.xp6(1),e.Oqu(n.name),e.xp6(2),e.Oqu(null==n?null:n.fathers_name),e.xp6(2),e.Oqu(null==n?null:n.dob),e.xp6(2),e.Oqu(null==n?null:n.mobile),e.xp6(2),e.Oqu(null==n?null:n.email),e.xp6(2),e.Oqu(null==n?null:n.pincode),e.xp6(2),e.Q6J("ngModel",n.is_active),e.xp6(2),e.MGl("routerLink","//masters/employee-details/",n.id,""),e.xp6(2),e.Q6J("ngIf",a.isEdit)}}const A=function(s,m){return{itemsPerPage:s,currentPage:m}};let U=(()=>{class s{constructor(n,t){this.coreService=n,this.QueryService=t,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(n,t){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(a=>{a.isConfirmed&&(this.coreService.deleteEmployee(t).subscribe(l=>{this.delRes=l,"Employee Deleted successfully"==this.delRes.msg&&this.ngOnInit()}),d().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(n,1))})}isActive(n,t){d().fire({title:"Are you sure?",text:"Do you want to Deactivate this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(a=>{a.isConfirmed&&(this.coreService.employeeIsActive(t,"").subscribe(l=>{this.delRes=l,"Employee Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),d().fire({icon:"success",title:"Deactivate!",text:"Employee Is Deactivate Successfully."}))})}Active(n,t){d().fire({title:"Are you sure?",text:"Do you want to Active this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(a=>{a.isConfirmed&&(this.coreService.employeeIsActive(t,"").subscribe(l=>{this.delRes=l,"Employee Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),d().fire({icon:"success",title:"Active!",text:"Employee Is Active Successfully."}))})}ngOnInit(){this.coreService.getEmployee().subscribe(t=>{this.tableData=t,this.selectedRows=new Array(this.tableData.length).fill(!1)});const n=JSON.parse(localStorage.getItem("auth"));n&&n.permission&&n.permission.map(a=>{"master"===a.content_type.app_label&&"employee"===a.content_type.model&&"add_employee"==a.codename?this.isAdd=a.codename:"master"===a.content_type.app_label&&"employee"===a.content_type.model&&"change_employee"==a.codename&&(this.isEdit=a.codename)})}selectAlll(){this.selectedRows.fill(this.allSelected)}ngAfterViewChecked(){}selectAll(n){this.tableData.forEach(n?t=>{t.isSelected=!1}:t=>{t.isSelected=!0})}deleteId(n){this.coreService.deleteEmployee(n).subscribe(t=>{this.delRes=t})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(n=>n.name.match(this.titlee))}sort(n){this.key=n,this.reverse=!this.reverse}changePg(n){console.log(n),-1==n&&(this.itemsPerPage=this.tableData?.length)}}return s.\u0275fac=function(n){return new(n||s)(e.Y36(r.p),e.Y36(c._))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-employee-list"]],decls:119,vars:19,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],[1,"form-select"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//masters/addemployee",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"]],template:function(n,t){if(1&n){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Employee list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Employee"),e.qZA()(),e.YNc(6,v,4,0,"div",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),e._UZ(13,"img",9),e.TgZ(14,"span"),e._UZ(15,"img",10),e.qZA()()(),e.TgZ(16,"div",11)(17,"a",12),e._UZ(18,"img",13),e.qZA(),e.TgZ(19,"div",14)(20,"label")(21,"input",15),e.NdJ("ngModelChange",function(_){return t.titlee=_})("ngModelChange",function(){return t.search()}),e.qZA()()()()(),e.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),e._UZ(26,"img",18),e.qZA()(),e.TgZ(27,"li")(28,"a",19),e._UZ(29,"img",20),e.qZA()(),e.TgZ(30,"li")(31,"a",21),e._UZ(32,"img",22),e.qZA()()()()(),e.TgZ(33,"div",23)(34,"div",24)(35,"div",25)(36,"div",26)(37,"div",27)(38,"select",28)(39,"option"),e._uU(40,"Choose Category"),e.qZA(),e.TgZ(41,"option"),e._uU(42,"Computers"),e.qZA()()()(),e.TgZ(43,"div",26)(44,"div",27)(45,"select",28)(46,"option"),e._uU(47,"Choose Sub Category"),e.qZA(),e.TgZ(48,"option"),e._uU(49,"Fruits"),e.qZA()()()(),e.TgZ(50,"div",26)(51,"div",27)(52,"select",28)(53,"option"),e._uU(54,"Choose Sub Brand"),e.qZA(),e.TgZ(55,"option"),e._uU(56,"Iphone"),e.qZA()()()(),e.TgZ(57,"div",29)(58,"div",27)(59,"a",30),e._UZ(60,"img",31),e.qZA()()()()()(),e.TgZ(61,"div",32)(62,"table",33)(63,"thead")(64,"tr")(65,"th",34),e.NdJ("click",function(){return t.sort("id")}),e.TgZ(66,"label",35),e.NdJ("click",function(){return t.selectAll(t.initChecked)}),e.TgZ(67,"input",36),e.NdJ("ngModelChange",function(_){return t.allSelected=_})("change",function(){return t.selectAlll()}),e.qZA(),e._UZ(68,"span",37),e.qZA(),e._UZ(69,"i",38),e.qZA(),e.TgZ(70,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(71,"Name "),e._UZ(72,"i",38),e.qZA(),e.TgZ(73,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(74,"Fathers Name "),e._UZ(75,"i",38),e.qZA(),e.TgZ(76,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(77,"Date of birth "),e._UZ(78,"i",38),e.qZA(),e.TgZ(79,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(80,"Phone Number "),e._UZ(81,"i",38),e.qZA(),e.TgZ(82,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(83,"Email "),e._UZ(84,"i",38),e.qZA(),e.TgZ(85,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(86,"Pincode "),e._UZ(87,"i",38),e.qZA(),e.TgZ(88,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(89,"Is Active "),e._UZ(90,"i",38),e.qZA(),e.TgZ(91,"th",34),e.NdJ("click",function(){return t.sort("id")}),e._uU(92,"Action "),e._UZ(93,"i",38),e.qZA()()(),e.TgZ(94,"tbody"),e.YNc(95,Z,26,11,"tr",39),e.ALo(96,"paginate"),e.ALo(97,"orderBy"),e.qZA()(),e.TgZ(98,"div",25)(99,"div",40)(100,"div",41),e._uU(101," Show per page "),e.TgZ(102,"select",42,43),e.NdJ("ngModelChange",function(_){return t.itemsPerPage=_})("change",function(){e.CHM(a);const _=e.MAs(103);return e.KtG(t.changePg(_.value))}),e.TgZ(104,"option",44),e._uU(105,"5"),e.qZA(),e.TgZ(106,"option",45),e._uU(107,"10"),e.qZA(),e.TgZ(108,"option",46),e._uU(109,"20"),e.qZA(),e.TgZ(110,"option",47),e._uU(111,"50"),e.qZA(),e.TgZ(112,"option",48),e._uU(113,"All"),e.qZA()()()(),e.TgZ(114,"div",49)(115,"div",50)(116,"pagination-controls",51),e.NdJ("pageChange",function(_){return t.p=_}),e.qZA(),e.TgZ(117,"div",52),e._uU(118),e.qZA()()()()()()()}2&n&&(e.xp6(6),e.Q6J("ngIf",t.isAdd),e.xp6(15),e.Q6J("ngModel",t.titlee),e.xp6(41),e.Q6J("dtOptions",t.dtOptions),e.xp6(5),e.Q6J("ngModel",t.allSelected),e.xp6(28),e.Q6J("ngForOf",e.xi3(96,9,e.Dn7(97,12,t.tableData,t.key,t.reverse),e.WLB(16,A,t.pageSize,t.p))),e.xp6(7),e.Q6J("ngModel",t.itemsPerPage),e.xp6(16),e.lnq("Showing ",t.itemsPerPage," to ",null==t.tableData?null:t.tableData.length," of ",t.p," entries"))},dependencies:[p.sg,p.O5,T.yS,g.G,o.YN,o.Kr,o.Fj,o.Wl,o.EJ,o.JJ,o.On,h.LS,f.Rr,h._s,u.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}.datanew[_ngcontent-%COMP%]   .thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),s})();var D=i(30597);const P=JSON.parse(localStorage.getItem("auth"));let O;P&&P.map(m=>{"master"===m.content_type.app_label&&"employee"===m.content_type.model&&"view_employee"==m.codename&&(O=m.codename)});const L=[{path:"",component:U,canActivate:[D.l],data:{allowedRoles:[O]}}];let S=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[T.Bz.forChild(L),T.Bz]}),s})();var x=i(96134),R=i(30906),I=i(43189);let B=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[p.ez,S,g.T,o.u5,R.ZU,x.ii.forRoot(),I.h,h.JX,u.l,f.rP]}),s})()},30597:(M,C,i)=>{i.d(C,{l:()=>r});var p=i(94650),T=i(89299),b=i(97185),d=i(42917),e=i(80927);let r=(()=>{class c{constructor(o,h,f,u,v){this.router=o,this.Arout=h,this.toastr=f,this.profileService=u,this.coreService=v}canActivate(o,h){const f=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(u=>{this.userDetails=u,this.permissions=this.userDetails?.permission}),f){const u=o.data.allowedRoles;console.log(u,"allowedRoles");const v=f.some(y=>u.includes(y.codename));if(console.log(v),this.coreService.getProfile().subscribe(y=>{this.userDetails=y,this.profileService.setUserDetails(this.userDetails);const Z=y?.permission,A=this.profileService.getUserDetails();(!A||A.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return c.\u0275fac=function(o){return new(o||c)(p.LFG(T.F0),p.LFG(T.gz),p.LFG(b._W),p.LFG(d.J),p.LFG(e.p))},c.\u0275prov=p.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()},87078:(M,C,i)=>{i.d(C,{G:()=>p.G,T:()=>T.T});var p=i(10008),T=i(33861)},10008:(M,C,i)=>{i.d(C,{G:()=>b});var p=i(94650),b=function(){function d(e,r,c){this.el=e,this.vcr=r,this.renderer=c,this.dtOptions={}}return d.prototype.ngOnInit=function(){var e=this;this.dtTrigger?this.dtTrigger.subscribe(function(r){e.displayTable(r)}):this.displayTable(null)},d.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},d.prototype.displayTable=function(e){var r=this;e&&(this.dtOptions=e),this.dtInstance=new Promise(function(c,g){Promise.resolve(r.dtOptions).then(function(o){0===Object.keys(o).length&&0===$("tbody tr",r.el.nativeElement).length?g("Both the table and dtOptions cannot be empty"):setTimeout(function(){var f={rowCallback:function(u,v,y){if(o.columns){var Z=o.columns;r.applyNgPipeTransform(u,Z),r.applyNgRefTemplate(u,Z,v)}o.rowCallback&&o.rowCallback(u,v,y)}};f=Object.assign({},o,f),r.dt=$(r.el.nativeElement).DataTable(f),c(r.dt)})})})},d.prototype.applyNgPipeTransform=function(e,r){r.filter(function(g){return g.ngPipeInstance&&!g.ngTemplateRef}).forEach(function(g){var o=g.ngPipeInstance,h=g.ngPipeArgs||[],f=r.findIndex(function(Z){return Z.data===g.data}),u=e.childNodes.item(f),v=$(u).text(),y=o.transform.apply(o,function(d,e,r){if(r||2===arguments.length)for(var o,c=0,g=e.length;c<g;c++)(o||!(c in e))&&(o||(o=Array.prototype.slice.call(e,0,c)),o[c]=e[c]);return d.concat(o||Array.prototype.slice.call(e))}([v],h,!1));$(u).text(y)})},d.prototype.applyNgRefTemplate=function(e,r,c){var g=this;r.filter(function(h){return h.ngTemplateRef&&!h.ngPipeInstance}).forEach(function(h){var f=h.ngTemplateRef,u=f.ref,v=f.context,y=r.findIndex(function(D){return D.data===h.data}),Z=e.childNodes.item(y);$(Z).html("");var A=Object.assign({},v,v?.userData,{adtData:c}),U=g.vcr.createEmbeddedView(u,A);g.renderer.appendChild(Z,U.rootNodes[0])})},d.\u0275fac=function(r){return new(r||d)(p.Y36(p.SBq),p.Y36(p.s_b),p.Y36(p.Qsj))},d.\u0275dir=p.lG2({type:d,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),d}()},33861:(M,C,i)=>{i.d(C,{T:()=>d});var p=i(36895),b=(i(10008),i(94650)),d=function(){function e(){}return e.forRoot=function(){return{ngModule:e}},e.\u0275fac=function(c){return new(c||e)},e.\u0275mod=b.oAB({type:e}),e.\u0275inj=b.cJS({imports:[p.ez]}),e}()}}]);