"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3116],{3116:(A,h,a)=>{a.r(h),a.d(h,{FeatureModule:()=>ie});var d=a(6895),m=a(8996),l=a(4006),Z=a(5226),c=a.n(Z),e=a(4650),g=a(927),v=a(2326),_=a(7185),b=a(3162),f=a(4333),F=a(455),M=a(5415),I=a(4040);function y(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"a",51),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(2);return e.KtG(o.openaddForm())}),e._UZ(1,"img",52),e._uU(2,"Add Feature Group "),e.qZA()}}function J(i,s){if(1&i&&(e.TgZ(0,"div",49),e.YNc(1,y,3,0,"a",50),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngIf",t.isAdd)}}function S(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"th",27),e.NdJ("click",function(){e.CHM(t);const o=e.oxw();return e.KtG(o.sort("id"))}),e._uU(1,"Action "),e._UZ(2,"i",31),e.qZA()}}function U(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"a",60),e.NdJ("click",function(){e.CHM(t);const o=e.oxw().$implicit,r=e.oxw();return e.KtG(r.editForm(o.id))}),e._UZ(1,"img",61),e.qZA()}}function N(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"a",62),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(),r=o.index,u=o.$implicit,p=e.oxw();return e.KtG(p.confirmText(r,u.id))}),e._UZ(1,"img",63),e.qZA()}}function q(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",53)(3,"input",54),e.NdJ("ngModelChange",function(o){const u=e.CHM(t).index,p=e.oxw();return e.KtG(p.selectedRows[u]=o)}),e.qZA(),e._UZ(4,"span",30),e.qZA()(),e.TgZ(5,"td",55)(6,"a",56),e._uU(7),e.qZA()(),e.TgZ(8,"td")(9,"mat-slide-toggle",57),e.NdJ("click",function(){const o=e.CHM(t),r=o.$implicit,u=o.index,p=e.oxw();return e.KtG(r.is_active?p.deActivate(u,r.id):p.Active(u,r.id))})("ngModelChange",function(o){const u=e.CHM(t).$implicit;return e.KtG(u.is_active=o)}),e.qZA()(),e.TgZ(10,"td"),e.YNc(11,U,2,0,"a",58),e.YNc(12,N,2,0,"a",59),e.qZA()()}if(2&i){const t=s.$implicit,n=s.index,o=e.oxw();e.xp6(3),e.Q6J("ngModel",o.selectedRows[n]),e.xp6(4),e.Oqu(t.title),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.Q6J("ngIf",o.isEdit),e.xp6(1),e.Q6J("ngIf",o.isDelete)}}function O(i,s){1&i&&e._UZ(0,"mat-progress-bar",64)}function w(i,s){1&i&&(e.TgZ(0,"div")(1,"h4"),e._uU(2," Feature "),e.qZA(),e.TgZ(3,"h6"),e._uU(4,"Create new Feature "),e.qZA()())}function Q(i,s){if(1&i&&(e.TgZ(0,"div",3),e.YNc(1,w,5,0,"div",67),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.isAdd)}}function R(i,s){1&i&&(e.TgZ(0,"div")(1,"h4"),e._uU(2," Feature Edit"),e.qZA(),e.TgZ(3,"h6"),e._uU(4," Update Feature "),e.qZA()())}function Y(i,s){if(1&i&&(e.TgZ(0,"div",3),e.YNc(1,R,5,0,"div",67),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.isEdit)}}function D(i,s){1&i&&(e.TgZ(0,"span",77),e._uU(1,"Enter Title "),e.qZA())}function P(i,s){1&i&&(e.TgZ(0,"button",78),e._uU(1,"Submit"),e.qZA())}function k(i,s){1&i&&(e.TgZ(0,"button",79),e._UZ(1,"span",80),e._uU(2," Submit"),e.qZA())}const x=function(i){return{"is-invalid":i}};function E(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",6)(1,"form",69),e.NdJ("ngSubmit",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.submit())}),e.TgZ(2,"div",0)(3,"div",70)(4,"div",71)(5,"label"),e._uU(6,"Title*"),e.qZA(),e._UZ(7,"input",72),e.YNc(8,D,2,0,"span",73),e.qZA()(),e.TgZ(9,"div",74),e.YNc(10,P,2,0,"button",75),e.YNc(11,k,3,0,"button",76),e.qZA()()()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("formGroup",t.featureForm),e.xp6(6),e.Q6J("ngClass",e.VKq(5,x,t.f.title.touched&&t.f.title.invalid)),e.xp6(1),e.Q6J("ngIf",t.title&&t.title.invalid&&t.title.touched),e.xp6(2),e.Q6J("ngIf",!t.loaders),e.xp6(1),e.Q6J("ngIf",t.loaders)}}function B(i,s){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,E,12,7,"div",68),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",t.addForm)}}function G(i,s){1&i&&(e.TgZ(0,"span",77),e._uU(1,"Enter Title "),e.qZA())}function z(i,s){1&i&&(e.TgZ(0,"button",78),e._uU(1,"Submit"),e.qZA())}function K(i,s){1&i&&(e.TgZ(0,"button",79),e._UZ(1,"span",80),e._uU(2," Submit"),e.qZA())}function L(i,s){if(1&i){const t=e.EpF();e.TgZ(0,"div",6)(1,"form",69),e.NdJ("ngSubmit",function(){e.CHM(t);const o=e.oxw(3);return e.KtG(o.update())}),e.TgZ(2,"div",0)(3,"div",70)(4,"div",71)(5,"label"),e._uU(6,"Title*"),e.qZA(),e._UZ(7,"input",72),e.YNc(8,G,2,0,"span",73),e.qZA()(),e.TgZ(9,"div",74),e.YNc(10,z,2,0,"button",75),e.YNc(11,K,3,0,"button",76),e.qZA()()()()}if(2&i){const t=e.oxw(3);e.xp6(1),e.Q6J("formGroup",t.featureForm),e.xp6(6),e.Q6J("ngClass",e.VKq(5,x,t.f.title.touched&&t.f.title.invalid)),e.xp6(1),e.Q6J("ngIf",t.title&&t.title.invalid&&t.title.touched),e.xp6(2),e.Q6J("ngIf",!t.loaders),e.xp6(1),e.Q6J("ngIf",t.loaders)}}function H(i,s){if(1&i&&(e.TgZ(0,"div"),e.YNc(1,L,12,7,"div",68),e.qZA()),2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("ngIf",!t.addForm)}}function W(i,s){if(1&i&&(e.TgZ(0,"div",65)(1,"div",2),e.YNc(2,Q,2,1,"div",66),e.YNc(3,Y,2,1,"div",66),e.qZA(),e.TgZ(4,"div",5),e.YNc(5,B,2,1,"div",67),e.YNc(6,H,2,1,"div",67),e.qZA()()),2&i){const t=e.oxw();e.xp6(2),e.Q6J("ngIf",t.addForm),e.xp6(1),e.Q6J("ngIf",!t.addForm),e.xp6(2),e.Q6J("ngIf",t.isAdd),e.xp6(1),e.Q6J("ngIf",t.isEdit)}}const j=function(i,s){return{itemsPerPage:i,currentPage:s}};let $=(()=>{class i{constructor(t,n,o,r){this.coreService=t,this.QueryService=n,this.fb=o,this.toastr=r,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=5,this.itemsPerPage=5,this.select=!1,this.loader=!0,this.allSelected=!1,this.loaders=!1,this.addForm=!0,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}get f(){return this.featureForm.controls}confirmText(t,n){c().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.coreService.deleteFeature(n).subscribe(r=>{this.delRes=r,"Feature Deleted successfully"==this.delRes.msg?(this.ngOnInit(),this.tableData.splice(t,1),c().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."})):c().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(t,n){c().fire({title:"Are you sure?",text:"Do you want to Deactivate this feature!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.featureIsActive(n,"").subscribe(r=>{this.delRes=r,"Feature Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),c().fire({icon:"success",title:"Deactivate!",text:"Feature Is Deactivate Successfully."}))})}Active(t,n){c().fire({title:"Are you sure?",text:"Do you want to Active this feature!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.featureIsActive(n,"").subscribe(r=>{this.delRes=r,"Feature Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),c().fire({icon:"success",title:"Active!",text:"Feature Is Active Successfully."}))})}ngOnInit(){this.featureForm=this.fb.group({title:new l.NI("",[l.kI.required])}),this.coreService.getfeature().subscribe(n=>{this.tableData=n,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.getFeatureGroup();const t=JSON.parse(localStorage.getItem("auth"));t&&t.permission&&t.permission.map(o=>{"product"===o.content_type.app_label&&"productfeatures"===o.content_type.model&&"add_productfeatures"==o.codename?(this.isAdd=o.codename,console.log(this.isAdd)):"product"===o.content_type.app_label&&"productfeatures"===o.content_type.model&&"change_productfeatures"==o.codename?(this.isEdit=o.codename,console.log(this.isEdit)):"product"===o.content_type.app_label&&"productfeatures"===o.content_type.model&&"delete_productfeatures"==o.codename&&(this.isDelete=o.codename,console.log(this.isDelete))})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(t){this.coreService.deleteFuature_group(t).subscribe(n=>{this.delRes=n,"Feature Deleted successfully"==this.delRes.msg&&this.ngOnInit()})}getFeatureGroup(){this.coreService.getFuature_groupD().subscribe(t=>{this.featureGroup=t})}submit(){console.log(this.featureForm.value),console.log(this.id),this.featureForm.valid?(this.loaders=!0,this.coreService.addFeature(this.featureForm.value).subscribe(t=>{console.log(t),this.addRes=t,"Feature Successfuly Added"==this.addRes.msg&&(this.loaders=!1,this.toastr.success(this.addRes.msg),this.featureForm.reset(),this.ngOnInit())},t=>{console.log(t.error.gst)})):(this.featureForm.markAllAsTouched(),console.log("forms invalid"))}update(){this.featureForm.valid?(this.loaders=!0,this.coreService.updateFeature(this.featureForm.value,this.id).subscribe(t=>{console.log(t),this.addRes=t,"Feature updated successfully"==this.addRes.msg&&(this.loaders=!1,this.toastr.success(this.addRes.msg),this.featureForm.reset(),this.addForm=!0,this.ngOnInit())},t=>{console.log(t.error.gst)})):(this.featureForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.featureForm.get("title")}get feature_group(){return this.featureForm.get("feature_group")}editForm(t){this.id=t,this.coreService.getFeatureById(t).subscribe(n=>{console.log(n),t==n.id&&(this.addForm=!1,this.featureForm.patchValue(n),this.editFormdata=n)})}openaddForm(){this.addForm=!0,this.featureForm.reset()}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(t=>(console.log(t),console.log(t.title.toLocaleLowerCase()),console.log(t.title.match(this.titlee)),t.title.match(this.titlee)))}sort(t){this.key=t,this.reverse=!this.reverse}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(g.p),e.Y36(v._),e.Y36(l.qu),e.Y36(_._W))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-feature"]],decls:78,vars:22,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-lg-5 col-sm-5 col-12",4,"ngIf"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],["href","javascript:void(0);",2,"line-height","3"],[3,"ngModel","click","ngModelChange"],["class","me-3",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-3",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],[4,"ngIf"],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"col-lg-12","col-sm-12","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"col-lg-8","text-end","mt-5"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),e._uU(5,"Feature list"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Feature "),e.qZA()(),e.YNc(8,J,2,1,"div",4),e.qZA(),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"a",10),e._UZ(15,"img",11),e.TgZ(16,"span"),e._UZ(17,"img",12),e.qZA()()(),e.TgZ(18,"div",13)(19,"a",14),e._UZ(20,"img",15),e.qZA(),e.TgZ(21,"div",16)(22,"label")(23,"input",17),e.NdJ("ngModelChange",function(r){return n.titlee=r})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(24,"div",18)(25,"ul")(26,"li")(27,"a",19),e._UZ(28,"img",20),e.qZA()(),e.TgZ(29,"li")(30,"a",21),e._UZ(31,"img",22),e.qZA()(),e.TgZ(32,"li")(33,"a",23),e._UZ(34,"img",24),e.qZA()()()()(),e.TgZ(35,"div",25)(36,"table",26)(37,"thead")(38,"tr")(39,"th",27),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(40,"label",28),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(41,"input",29),e.NdJ("ngModelChange",function(r){return n.allSelected=r})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(42,"span",30),e.qZA(),e._UZ(43,"i",31),e.qZA(),e.TgZ(44,"th",27),e.NdJ("click",function(){return n.sort("id")}),e._uU(45,"Title "),e._UZ(46,"i",31),e.qZA(),e.TgZ(47,"th",27),e.NdJ("click",function(){return n.sort("id")}),e._uU(48,"Is Active "),e._UZ(49,"i",31),e.qZA(),e.YNc(50,S,3,0,"th",32),e.qZA()(),e.TgZ(51,"tbody"),e.YNc(52,q,13,5,"tr",33),e.ALo(53,"paginate"),e.ALo(54,"orderBy"),e.qZA()(),e.TgZ(55,"div",34),e.YNc(56,O,1,0,"mat-progress-bar",35),e.qZA(),e.TgZ(57,"div",0)(58,"div",36)(59,"div",37),e._uU(60," Show per page "),e.TgZ(61,"select",38),e.NdJ("ngModelChange",function(r){return n.itemsPerPage=r}),e.TgZ(62,"option",39),e._uU(63,"5"),e.qZA(),e.TgZ(64,"option",40),e._uU(65,"10"),e.qZA(),e.TgZ(66,"option",41),e._uU(67,"20"),e.qZA(),e.TgZ(68,"option",42),e._uU(69,"50"),e.qZA(),e.TgZ(70,"option",43),e._uU(71,"All"),e.qZA()()()(),e.TgZ(72,"div",44)(73,"div",45)(74,"pagination-controls",46),e.NdJ("pageChange",function(r){return n.p=r}),e.qZA(),e.TgZ(75,"div",47),e._uU(76),e.qZA()()()()()()()(),e.YNc(77,W,7,4,"div",48),e.qZA()),2&t&&(e.xp6(8),e.Q6J("ngIf",!n.addForm),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(13),e.Q6J("dtOptions",n.dtOptions),e.xp6(5),e.Q6J("ngModel",n.allSelected),e.xp6(9),e.Q6J("ngIf",n.isEdit||n.isDelete),e.xp6(2),e.Q6J("ngForOf",e.xi3(53,12,e.Dn7(54,15,n.tableData,n.key,n.reverse),e.WLB(19,j,n.pageSize,n.p))),e.xp6(4),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(15),e.lnq("Showing ",n.pageSize," to ",n.pageSize," of ",n.pageSize," entries"),e.xp6(1),e.Q6J("ngIf",n.isAdd||n.isEdit))},dependencies:[d.mk,d.sg,d.O5,l._Y,l.YN,l.Kr,l.Fj,l.Wl,l.EJ,l.JJ,l.JL,l.On,l.sg,l.u,b.pW,f.LS,F.Rr,M.G,f._s,I.T],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),i})();var V=a(597);const C=JSON.parse(localStorage.getItem("auth")),T=[];C&&C.permission&&C.permission.map(s=>{"product"===s.content_type.app_label&&"productfeatures"===s.content_type.model&&T.push(s.codename)});const X=[{path:"",component:$,canActivate:[V.l],data:{allowedRoles:T}}];let ee=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.Bz.forChild(X),m.Bz]}),i})();var te=a(8468);let ie=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[d.ez,ee,te.I]}),i})()},597:(A,h,a)=>{a.d(h,{l:()=>Z});var d=a(4650),m=a(8996),l=a(7185);let Z=(()=>{class c{constructor(g,v,_){this.router=g,this.Arout=v,this.toastr=_}canActivate(g,v){const _=JSON.parse(localStorage.getItem("auth"));if(_&&_.user){const b=g.data.allowedRoles;console.log(b,"allowedRoles");const f=_.permission.some(F=>b.includes(F.codename));if(console.log(f),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return c.\u0275fac=function(g){return new(g||c)(d.LFG(m.F0),d.LFG(m.gz),d.LFG(l._W))},c.\u0275prov=d.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);