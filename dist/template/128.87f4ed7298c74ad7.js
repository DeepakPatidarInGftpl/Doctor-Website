"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[128],{128:(N,p,a)=>{a.r(p),a.d(p,{FeatureGroupModule:()=>M});var c=a(6895),d=a(1652),n=a(433),h=a(5226),g=a.n(h),t=a(1571),_=a(927),v=a(2326),Z=a(7185),m=a(5415);function F(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",32)(1,"a",33),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.openaddForm())}),t._UZ(2,"img",34),t._uU(3,"Add Feature Group "),t.qZA()()}}const b=function(o,r,e){return{"bg-lightgreen":o,"bg-lightred":r,"bg-lightyellow":e}};function T(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",35)(3,"input",26),t.NdJ("ngModelChange",function(s){const u=t.CHM(e).$implicit;return t.KtG(u.is_active=s)}),t.qZA(),t._UZ(4,"span",27),t.qZA()(),t.TgZ(5,"td",36)(6,"a",37),t._uU(7),t.qZA()(),t.TgZ(8,"td")(9,"span",38),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"a",39),t.NdJ("click",function(){const l=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.editForm(l.id))}),t._UZ(13,"img",40),t.qZA(),t.TgZ(14,"a",41),t.NdJ("click",function(){const s=t.CHM(e),l=s.index,u=s.$implicit,I=t.oxw();return t.KtG(I.confirmText(l,u.id))}),t._UZ(15,"img",42),t.qZA()()()}if(2&o){const e=r.$implicit;t.xp6(3),t.Q6J("ngModel",e.is_active),t.xp6(4),t.Oqu(e.title),t.xp6(2),t.Q6J("ngClass",t.kEZ(4,b,!0===e.is_active,!1===e.is_active,"Partial"===e.is_active)),t.xp6(1),t.Oqu(e.is_active)}}function C(o,r){1&o&&(t.TgZ(0,"div",3)(1,"h4"),t._uU(2," Feature Group "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Create new Feature Group "),t.qZA()())}function A(o,r){1&o&&(t.TgZ(0,"div",3)(1,"h4"),t._uU(2," Feature Group Edit"),t.qZA(),t.TgZ(3,"h6"),t._uU(4," Update Feature Group "),t.qZA()())}function x(o,r){1&o&&(t.TgZ(0,"span",51),t._uU(1,"Enter Title "),t.qZA())}const f=function(o){return{"is-invalid":o}};function G(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",6)(1,"form",43),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.submit())}),t.TgZ(2,"div",0)(3,"div",44)(4,"div",45)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",46),t.YNc(8,x,2,0,"span",47),t.qZA()(),t.TgZ(9,"div",48)(10,"button",49),t._uU(11,"Submit"),t.qZA(),t.TgZ(12,"a",50),t._uU(13,"Cancel"),t.qZA()()()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.featureForm),t.xp6(6),t.Q6J("ngClass",t.VKq(3,f,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched)}}function U(o,r){1&o&&(t.TgZ(0,"span",51),t._uU(1,"Enter Title "),t.qZA())}function q(o,r){if(1&o){const e=t.EpF();t.TgZ(0,"div",6)(1,"form",43),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.update())}),t.TgZ(2,"div",0)(3,"div",44)(4,"div",45)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",46),t.YNc(8,U,2,0,"span",47),t.qZA()(),t.TgZ(9,"div",48)(10,"button",49),t._uU(11,"Submit"),t.qZA(),t.TgZ(12,"a",50),t._uU(13,"Cancel"),t.qZA()()()()()}if(2&o){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.featureForm),t.xp6(6),t.Q6J("ngClass",t.VKq(3,f,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched)}}const J=[{path:"",component:(()=>{class o{constructor(e,i,s,l){this.coreService=e,this.QueryService=i,this.fb=s,this.toastr=l,this.dtOptions={},this.initChecked=!1,this.addForm=!0,this.QueryService.filterToggle()}get f(){return this.featureForm.controls}confirmText(e,i){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.deleteFuature_group(i).subscribe(l=>{this.delRes=l,"FeatureGroup Deleted successfully"==this.delRes.msg&&window.location.reload()}),g().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1))})}ngOnInit(){this.featureForm=this.fb.group({title:new n.NI("",[n.kI.required])}),this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(e,i)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}},this.coreService.getFuature_group(),this.coreService.featureGroupBehavior.subscribe(()=>{localStorage.getItem("fuature_groupList")&&(this.tableData=Object.values(JSON.parse(localStorage.getItem("fuature_groupList"))))})}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deleteFuature_group(e).subscribe(i=>{this.delRes=i,"FeatureGroup Deleted successfully"==this.delRes.msg&&window.location.reload()})}submit(){console.log(this.featureForm.value),console.log(this.id),this.featureForm.valid?this.coreService.addFuature_group(this.featureForm.value).subscribe(e=>{console.log(e),this.addRes=e,"FeatureGroup Successfuly Added"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.featureForm.reset(),this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.featureForm.markAllAsTouched(),console.log("forms invalid"))}update(){this.featureForm.valid?this.coreService.updateFuature_group(this.featureForm.value,this.id).subscribe(e=>{console.log(e),this.addRes=e,"FeatureGroup updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.featureForm.reset(),this.addForm=!0,this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.featureForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.featureForm.get("title")}editForm(e){this.id=e,this.coreService.getFuature_groupById(e).subscribe(i=>{console.log(i),e==i.id&&(this.addForm=!1,this.featureForm.patchValue(i),this.editFormdata=i)})}openaddForm(){this.addForm=!0,this.featureForm.reset()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.p),t.Y36(v._),t.Y36(n.qu),t.Y36(Z._W))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-feature-group"]],decls:55,vars:8,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[4,"ngFor","ngForOf"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[1,"page-btn"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"checkboxs"],[1,"productimgname"],["href","javascript:void(0);"],[1,"badges",3,"ngClass"],[1,"me-3",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"col-lg-12"],[1,"btn","btn-submit","me-2"],["routerLink","/product/feature_group",1,"btn","btn-cancel"],[1,"text-danger"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5,"Feature Group list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Feature Group"),t.qZA()(),t.YNc(8,F,4,0,"div",4),t.qZA(),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"a",10),t._UZ(15,"img",11),t.TgZ(16,"span"),t._UZ(17,"img",12),t.qZA()()(),t.TgZ(18,"div",13)(19,"a",14),t._UZ(20,"img",15),t.qZA()()(),t.TgZ(21,"div",16)(22,"ul")(23,"li")(24,"a",17),t._UZ(25,"img",18),t.qZA()(),t.TgZ(26,"li")(27,"a",19),t._UZ(28,"img",20),t.qZA()(),t.TgZ(29,"li")(30,"a",21),t._UZ(31,"img",22),t.qZA()()()()(),t.TgZ(32,"div",23)(33,"table",24)(34,"thead")(35,"tr")(36,"th")(37,"label",25),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(38,"input",26),t.NdJ("ngModelChange",function(l){return i.initChecked=l}),t.qZA(),t._UZ(39,"span",27),t.qZA()(),t.TgZ(40,"th"),t._uU(41,"Title"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"Is_active"),t.qZA(),t.TgZ(44,"th"),t._uU(45,"Action"),t.qZA()()(),t.TgZ(46,"tbody"),t.YNc(47,T,16,8,"tr",28),t.qZA()()()()()(),t.TgZ(48,"div",29)(49,"div",2),t.YNc(50,C,5,0,"div",30),t.YNc(51,A,5,0,"div",30),t.qZA(),t.TgZ(52,"div",5),t.YNc(53,G,14,5,"div",31),t.YNc(54,q,14,5,"div",31),t.qZA()()()),2&e&&(t.xp6(8),t.Q6J("ngIf",!i.addForm),t.xp6(25),t.Q6J("dtOptions",i.dtOptions),t.xp6(5),t.Q6J("ngModel",i.initChecked),t.xp6(9),t.Q6J("ngForOf",i.tableData),t.xp6(3),t.Q6J("ngIf",i.addForm),t.xp6(1),t.Q6J("ngIf",!i.addForm),t.xp6(2),t.Q6J("ngIf",i.addForm),t.xp6(1),t.Q6J("ngIf",!i.addForm))},dependencies:[c.mk,c.sg,c.O5,d.yS,n._Y,n.Fj,n.Wl,n.JJ,n.JL,n.On,n.sg,n.u,m.G]}),o})()}];let S=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[d.Bz.forChild(J),d.Bz]}),o})();var y=a(6134);let M=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,S,n.u5,n.UX,y.ii,m.T]}),o})()}}]);