"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[214],{70214:(M,Z,l)=>{l.r(Z),l.d(Z,{ColorsModule:()=>rt});var a=l(36895),f=l(88996),c=l(24006),y=l(35226),_=l.n(y),t=l(94650),m=l(80927),I=l(72326),p=l(97185),b=l(42917),h=l(73162),g=l(54333),v=l(90455),C=l(65415),T=l(54040);function x(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"a",51),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.openaddForm())}),t._UZ(1,"img",52),t._uU(2,"Add State "),t.qZA()}}function J(o,s){if(1&o&&(t.TgZ(0,"div",49),t.YNc(1,x,3,0,"a",50),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function S(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"th",27),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",31),t.qZA()}}function q(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"a",61),t.NdJ("click",function(){t.CHM(e);const n=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.editForm(n.id))}),t._UZ(1,"img",62),t.qZA()}}function F(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"a",63),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(),r=n.index,d=n.$implicit,u=t.oxw(2);return t.KtG(u.confirmText(r,d.id))}),t._UZ(1,"img",64),t.qZA()}}function N(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",54)(3,"input",55),t.NdJ("ngModelChange",function(n){const d=t.CHM(e).index,u=t.oxw(2);return t.KtG(u.selectedRows[d]=n)}),t.qZA(),t._UZ(4,"span",30),t.qZA()(),t.TgZ(5,"td",56)(6,"a",57),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"mat-slide-toggle",58),t.NdJ("click",function(){const n=t.CHM(e),r=n.$implicit,d=n.index,u=t.oxw(2);return t.KtG(r.is_active?u.deActivate(d,r.id):u.Active(d,r.id))})("ngModelChange",function(n){const d=t.CHM(e).$implicit;return t.KtG(d.is_active=n)}),t.qZA()(),t.TgZ(12,"td"),t.YNc(13,q,2,0,"a",59),t.YNc(14,F,2,0,"a",60),t.qZA()()}if(2&o){const e=s.$implicit,i=s.index,n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedRows[i]),t.xp6(4),t.Oqu(e.title),t.xp6(2),t.Oqu(e.color_code),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.Q6J("ngIf",n.isEdit),t.xp6(1),t.Q6J("ngIf",n.isDelete)}}const D=function(o,s){return{itemsPerPage:o,currentPage:s}};function w(o,s){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,N,15,6,"tr",53),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,D,e.pageSize,e.p)))}}function Q(o,s){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",65)(3,"p",66),t._uU(4,"Data not available"),t.qZA()()()())}function Y(o,s){1&o&&t._UZ(0,"mat-progress-bar",67)}function O(o,s){1&o&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Add Colors "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Create new Colors "),t.qZA()())}function R(o,s){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,O,5,0,"div",33),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function E(o,s){1&o&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Update Colors "),t.qZA()())}function P(o,s){if(1&o&&(t.TgZ(0,"div",3),t.YNc(1,E,3,0,"div",33),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isEdit)}}function B(o,s){1&o&&(t.TgZ(0,"span",80),t._uU(1,"Enter Title "),t.qZA())}function k(o,s){1&o&&(t.TgZ(0,"span",80),t._uU(1,"Enter Color Code (example: #fff) "),t.qZA())}function G(o,s){1&o&&(t.TgZ(0,"button",81),t._uU(1,"Submit"),t.qZA())}function L(o,s){1&o&&(t.TgZ(0,"button",82),t._UZ(1,"span",83),t._uU(2," Submit"),t.qZA())}const A=function(o){return{"is-invalid":o}};function K(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",6)(1,"form",71),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.submit())}),t.TgZ(2,"div",0)(3,"div",72)(4,"div",73)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",74),t.YNc(8,B,2,0,"span",75),t.qZA()(),t.TgZ(9,"div",72)(10,"div",73)(11,"label"),t._uU(12,"Color Code*"),t.qZA(),t._UZ(13,"input",76),t.YNc(14,k,2,0,"span",75),t.qZA()(),t.TgZ(15,"div",77),t.YNc(16,G,2,0,"button",78),t.YNc(17,L,3,0,"button",79),t.qZA()()()()}if(2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.colorForm),t.xp6(6),t.Q6J("ngClass",t.VKq(7,A,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(9,A,e.f.color_code.touched&&e.f.color_code.invalid)),t.xp6(1),t.Q6J("ngIf",e.color_code&&e.color_code.invalid&&e.color_code.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function z(o,s){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,K,18,11,"div",70),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.addForm)}}function W(o,s){1&o&&(t.TgZ(0,"span",80),t._uU(1,"Enter Title "),t.qZA())}function H(o,s){1&o&&(t.TgZ(0,"span",80),t._uU(1,"Enter Color Code (example: #fff) "),t.qZA())}function j(o,s){1&o&&(t.TgZ(0,"button",81),t._uU(1,"Submit"),t.qZA())}function $(o,s){1&o&&(t.TgZ(0,"button",82),t._UZ(1,"span",83),t._uU(2," Submit"),t.qZA())}function V(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"div",6)(1,"form",71),t.NdJ("ngSubmit",function(){t.CHM(e);const n=t.oxw(3);return t.KtG(n.update())}),t.TgZ(2,"div",0)(3,"div",72)(4,"div",73)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",74),t.YNc(8,W,2,0,"span",75),t.qZA()(),t.TgZ(9,"div",72)(10,"div",73)(11,"label"),t._uU(12,"Color Code*"),t.qZA(),t._UZ(13,"input",76),t.YNc(14,H,2,0,"span",75),t.qZA()(),t.TgZ(15,"div",77),t.YNc(16,j,2,0,"button",78),t.YNc(17,$,3,0,"button",79),t.qZA()()()()}if(2&o){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.colorForm),t.xp6(6),t.Q6J("ngClass",t.VKq(7,A,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(9,A,e.f.color_code.touched&&e.f.color_code.invalid)),t.xp6(1),t.Q6J("ngIf",e.color_code&&e.color_code.invalid&&e.color_code.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function X(o,s){if(1&o&&(t.TgZ(0,"div"),t.YNc(1,V,18,11,"div",70),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.addForm)}}function tt(o,s){if(1&o&&(t.TgZ(0,"div",68)(1,"div",2),t.YNc(2,R,2,1,"div",69),t.YNc(3,P,2,1,"div",69),t.qZA(),t.TgZ(4,"div",5),t.YNc(5,z,2,1,"div",33),t.YNc(6,X,2,1,"div",33),t.qZA()()),2&o){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.addForm),t.xp6(1),t.Q6J("ngIf",!e.addForm),t.xp6(2),t.Q6J("ngIf",e.isAdd),t.xp6(1),t.Q6J("ngIf",e.isEdit)}}let et=(()=>{class o{constructor(e,i,n,r,d,u){this.coreService=e,this.QueryService=i,this.fb=n,this.toastr=r,this.router=d,this.cs=u,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.loaders=!1,this.addForm=!0,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}get f(){return this.colorForm.controls}confirmText(e,i){_().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.coreService.deletecolor(i).subscribe(r=>{this.delRes=r,"Colour Deleted successfully"==this.delRes.msg?(this.ngOnInit(),_().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):_().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(e,i){_().fire({title:"Are you sure?",text:"Do you want to Deactivate this color!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.colorIsActive(i,"").subscribe(r=>{this.delRes=r,"Color Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),_().fire({icon:"success",title:"Deactivate!",text:"Color Is Deactivate Successfully."}))})}Active(e,i){_().fire({title:"Are you sure?",text:"Do you want to Active this color!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.colorIsActive(i,"").subscribe(r=>{this.delRes=r,"Colors Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),_().fire({icon:"success",title:"Active!",text:"Color Is Active Successfully."}))})}ngOnInit(){this.form=this.fb.group({img:new c.NI("")}),this.colorForm=this.fb.group({title:new c.NI("",[c.kI.required]),color_code:new c.NI("",[c.kI.required])}),this.coreService.getColor().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission.map(n=>{"product"===n.content_type.app_label&&"color"===n.content_type.model&&"add_color"==n.codename?(this.isAdd=n.codename,console.log(this.isAdd)):"product"===n.content_type.app_label&&"color"===n.content_type.model&&"change_color"==n.codename?(this.isEdit=n.codename,console.log(this.isEdit)):"product"===n.content_type.app_label&&"color"===n.content_type.model&&"delete_color"==n.codename&&(this.isDelete=n.codename,console.log(this.isDelete))})})}add(){console.log("jj"),console.log(this.form.value)}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deletecolor(e).subscribe(i=>{this.delRes=i,"Colors Deleted successfully"==this.delRes.msg&&window.location.reload()})}submit(){console.log(this.colorForm.value),console.log(this.id),this.colorForm.valid?(this.loaders=!0,this.coreService.addcolor(this.colorForm.value).subscribe(e=>{console.log(e),this.addRes=e,"Data Created"==this.addRes.msg&&(this.loaders=!1,this.toastr.success(this.addRes.msg),this.colorForm.reset(),this.ngOnInit())},e=>{console.log(e.error.gst)})):(this.colorForm.markAllAsTouched(),console.log("forms invalid"))}update(){this.colorForm.valid?(this.loaders=!0,this.coreService.updatecolor(this.colorForm.value,this.id).subscribe(e=>{console.log(e),this.addRes=e,"Colour updated successfully"==this.addRes.msg&&(this.loaders=!1,this.toastr.success(this.addRes.msg),this.colorForm.reset(),this.addForm=!0,this.ngOnInit())},e=>{console.log(e.error.gst)})):(this.colorForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.colorForm.get("title")}get color_code(){return this.colorForm.get("color_code")}editForm(e){this.id=e,this.coreService.getcolorById(e).subscribe(i=>{console.log(i),i.map(n=>{console.log(n),e==n.id&&(this.addForm=!1,this.colorForm.patchValue(n),this.editFormdata=i)})})}openaddForm(){this.addForm=!0,this.colorForm.reset()}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(i=>i.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(m.p),t.Y36(I._),t.Y36(c.qu),t.Y36(p._W),t.Y36(f.F0),t.Y36(b.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-colors"]],decls:79,vars:12,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-lg-5 col-sm-5 col-12",4,"ngIf"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],["href","javascript:void(0);",2,"line-height","3"],[3,"ngModel","click","ngModelChange"],["class","me-3",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-3",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","color_code","id","color_code",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5,"Colors list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Colors"),t.qZA()(),t.YNc(8,J,2,1,"div",4),t.qZA(),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"a",10),t._UZ(15,"img",11),t.TgZ(16,"span"),t._UZ(17,"img",12),t.qZA()()(),t.TgZ(18,"div",13)(19,"a",14),t._UZ(20,"img",15),t.qZA(),t.TgZ(21,"div",16)(22,"label")(23,"input",17),t.NdJ("ngModelChange",function(r){return i.titlee=r})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(24,"div",18)(25,"ul")(26,"li")(27,"a",19),t._UZ(28,"img",20),t.qZA()(),t.TgZ(29,"li")(30,"a",21),t._UZ(31,"img",22),t.qZA()(),t.TgZ(32,"li")(33,"a",23),t._UZ(34,"img",24),t.qZA()()()()(),t.TgZ(35,"div",25)(36,"table",26)(37,"thead")(38,"tr")(39,"th",27),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(40,"label",28),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(41,"input",29),t.NdJ("ngModelChange",function(r){return i.allSelected=r})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(42,"span",30),t.qZA(),t._UZ(43,"i",31),t.qZA(),t.TgZ(44,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(45,"Title "),t._UZ(46,"i",31),t.qZA(),t.TgZ(47,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(48,"Color Code "),t._UZ(49,"i",31),t.qZA(),t.TgZ(50,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(51,"Is Active "),t._UZ(52,"i",31),t.qZA(),t.YNc(53,S,3,0,"th",32),t.qZA()(),t.YNc(54,w,4,11,"tbody",33),t.YNc(55,Q,5,0,"tbody",33),t.qZA(),t.TgZ(56,"div",34),t.YNc(57,Y,1,0,"mat-progress-bar",35),t.qZA(),t.TgZ(58,"div",0)(59,"div",36)(60,"div",37),t._uU(61," Show per page "),t.TgZ(62,"select",38),t.NdJ("ngModelChange",function(r){return i.itemsPerPage=r}),t.TgZ(63,"option",39),t._uU(64,"5"),t.qZA(),t.TgZ(65,"option",40),t._uU(66,"10"),t.qZA(),t.TgZ(67,"option",41),t._uU(68,"20"),t.qZA(),t.TgZ(69,"option",42),t._uU(70,"50"),t.qZA(),t.TgZ(71,"option",43),t._uU(72,"All"),t.qZA()()()(),t.TgZ(73,"div",44)(74,"div",45)(75,"pagination-controls",46),t.NdJ("pageChange",function(r){return i.p=r}),t.qZA(),t.TgZ(76,"div",47),t._uU(77),t.qZA()()()()()()()(),t.YNc(78,tt,7,4,"div",48),t.qZA()),2&e&&(t.xp6(8),t.Q6J("ngIf",!i.addForm),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(18),t.Q6J("ngModel",i.allSelected),t.xp6(12),t.Q6J("ngIf",i.isEdit||i.isDelete),t.xp6(1),t.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==i.tableData?null:i.tableData.length)&&!i.loader),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(15),t.lnq("Showing ",i.pageSize," to ",i.pageSize," of ",i.pageSize," entries"),t.xp6(1),t.Q6J("ngIf",i.isAdd||i.isEdit))},dependencies:[a.mk,a.sg,a.O5,c._Y,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.JL,c.On,c.sg,c.u,h.pW,g.LS,v.Rr,C.G,g._s,T.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),o})();var ot=l(30597);const U=JSON.parse(localStorage.getItem("auth")),it=[];U&&U.permission&&U.permission.map(s=>{"product"===s.content_type.app_label&&"color"===s.content_type.model&&it.push(s.codename)});const nt=[{path:"",component:et,canActivate:[ot.l],data:{allowedRoles:["add_color","change_color","delete_color","view_color"]}}];let st=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.Bz.forChild(nt),f.Bz]}),o})();var lt=l(8468);let rt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[a.ez,st,lt.I]}),o})()},30597:(M,Z,l)=>{l.d(Z,{l:()=>t});var a=l(94650),f=l(88996),c=l(97185),y=l(42917),_=l(80927);let t=(()=>{class m{constructor(p,b,h,g,v){this.router=p,this.Arout=b,this.toastr=h,this.profileService=g,this.coreService=v}canActivate(p,b){const h=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(g=>{this.userDetails=g,this.permissions=this.userDetails?.permission}),h){const g=p.data.allowedRoles;console.log(g,"allowedRoles");const v=h.some(C=>g.includes(C.codename));if(this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails);const T=C?.permission,x=this.profileService.getUserDetails();(!x||x.length!==T.length)&&(this.profileService.setUserPermission(T),window.location.reload())}),console.log(v),v)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return m.\u0275fac=function(p){return new(p||m)(a.LFG(f.F0),a.LFG(f.gz),a.LFG(c._W),a.LFG(y.J),a.LFG(_.p))},m.\u0275prov=a.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);