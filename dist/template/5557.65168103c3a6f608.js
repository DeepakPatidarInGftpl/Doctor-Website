"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5557],{5557:(k,u,l)=>{l.r(u),l.d(u,{UnitModule:()=>N});var d=l(6895),g=l(1652),r=l(433),f=l(5226),m=l.n(f),t=l(1571),v=l(927),_=l(2326),Z=l(7185),p=l(5415);function b(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",32)(1,"a",33),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.openaddForm())}),t._UZ(2,"img",34),t._uU(3,"Add Unit "),t.qZA()()}}const U=function(i,o,e){return{"bg-lightgreen":i,"bg-lightred":o,"bg-lightyellow":e}};function T(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",35)(3,"input",26),t.NdJ("ngModelChange",function(s){const c=t.CHM(e).$implicit;return t.KtG(c.is_active=s)}),t.qZA(),t._UZ(4,"span",27),t.qZA()(),t.TgZ(5,"td",36)(6,"a",37),t._uU(7),t.qZA()(),t.TgZ(8,"td")(9,"span",38),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"a",39),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.editForm(a.id))}),t._UZ(13,"img",40),t.qZA(),t.TgZ(14,"a",41),t.NdJ("click",function(){const s=t.CHM(e),a=s.index,c=s.$implicit,O=t.oxw();return t.KtG(O.confirmText(a,c.id))}),t._UZ(15,"img",42),t.qZA()()()}if(2&i){const e=o.$implicit;t.xp6(3),t.Q6J("ngModel",e.is_active),t.xp6(4),t.Oqu(e.title),t.xp6(2),t.Q6J("ngClass",t.kEZ(4,U,!0===e.is_active,!1===e.is_active,"Partial"===e.is_active)),t.xp6(1),t.Oqu(e.is_active)}}function C(i,o){1&i&&(t.TgZ(0,"div",3)(1,"h4"),t._uU(2," Add Unit "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Create new Unit "),t.qZA()())}function x(i,o){1&i&&(t.TgZ(0,"div",3)(1,"h4"),t._uU(2," Update Unit "),t.qZA()())}function A(i,o){1&i&&(t.TgZ(0,"span",51),t._uU(1,"Enter Title "),t.qZA())}const h=function(i){return{"is-invalid":i}};function F(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",6)(1,"form",43),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.submit())}),t.TgZ(2,"div",0)(3,"div",44)(4,"div",45)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",46),t.YNc(8,A,2,0,"span",47),t.qZA()(),t.TgZ(9,"div",48)(10,"button",49),t._uU(11,"Submit"),t.qZA(),t.TgZ(12,"a",50),t._uU(13,"Cancel"),t.qZA()()()()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.unitsForm),t.xp6(6),t.Q6J("ngClass",t.VKq(3,h,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched)}}function q(i,o){1&i&&(t.TgZ(0,"span",51),t._uU(1,"Enter Title "),t.qZA())}function J(i,o){if(1&i){const e=t.EpF();t.TgZ(0,"div",6)(1,"form",43),t.NdJ("ngSubmit",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.update())}),t.TgZ(2,"div",0)(3,"div",44)(4,"div",45)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",46),t.YNc(8,q,2,0,"span",47),t.qZA()(),t.TgZ(9,"div",48)(10,"button",49),t._uU(11,"Submit"),t.qZA(),t.TgZ(12,"a",50),t._uU(13,"Cancel"),t.qZA()()()()()}if(2&i){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.unitsForm),t.xp6(6),t.Q6J("ngClass",t.VKq(3,h,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched)}}const S=[{path:"",component:(()=>{class i{constructor(e,n,s,a,c){this.coreService=e,this.QueryService=n,this.fb=s,this.toastr=a,this.router=c,this.dtOptions={},this.initChecked=!1,this.addForm=!0,this.QueryService.filterToggle()}get f(){return this.unitsForm.controls}confirmText(e,n){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.coreService.deleteUnits(n).subscribe(a=>{this.delRes=a}),m().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1))})}ngOnInit(){this.unitsForm=this.fb.group({title:new r.NI("",[r.kI.required])}),this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(e,n)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}},this.coreService.getUnits(),this.coreService.unitBehavior.subscribe(()=>{localStorage.getItem("unitList")&&(this.tableData=Object.values(JSON.parse(localStorage.getItem("unitList"))))})}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(e){this.coreService.deleteUnits(e).subscribe(n=>{this.delRes=n})}openaddForm(){this.addForm=!0,this.unitsForm.reset()}submit(){console.log(this.unitsForm.value),console.log(this.id),this.unitsForm.valid?this.coreService.addUnits(this.unitsForm.value).subscribe(e=>{console.log(e),this.addRes=e,"Data Created"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.unitsForm.reset(),this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.unitsForm.markAllAsTouched(),console.log("forms invalid"))}update(){this.unitsForm.valid?this.coreService.updateUnits(this.unitsForm.value,this.id).subscribe(e=>{console.log(e),this.addRes=e,"Unit updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.unitsForm.reset(),this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.unitsForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.unitsForm.get("title")}editForm(e){this.id=e,this.coreService.getUnitsById(e).subscribe(n=>{console.log(n),n.map(s=>{console.log(s),e==s.id&&(this.addForm=!1,this.unitsForm.patchValue(s))})})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(v.p),t.Y36(_._),t.Y36(r.qu),t.Y36(Z._W),t.Y36(g.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-unit"]],decls:55,vars:8,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[4,"ngFor","ngForOf"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[1,"page-btn"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"checkboxs"],[1,"productimgname"],["href","javascript:void(0);"],[1,"badges",3,"ngClass"],[1,"me-3",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"col-lg-12"],[1,"btn","btn-submit","me-2"],["routerLink","/product/units",1,"btn","btn-cancel"],[1,"text-danger"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5,"Unit list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"View/Search Units"),t.qZA()(),t.YNc(8,b,4,0,"div",4),t.qZA(),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"a",10),t._UZ(15,"img",11),t.TgZ(16,"span"),t._UZ(17,"img",12),t.qZA()()(),t.TgZ(18,"div",13)(19,"a",14),t._UZ(20,"img",15),t.qZA()()(),t.TgZ(21,"div",16)(22,"ul")(23,"li")(24,"a",17),t._UZ(25,"img",18),t.qZA()(),t.TgZ(26,"li")(27,"a",19),t._UZ(28,"img",20),t.qZA()(),t.TgZ(29,"li")(30,"a",21),t._UZ(31,"img",22),t.qZA()()()()(),t.TgZ(32,"div",23)(33,"table",24)(34,"thead")(35,"tr")(36,"th")(37,"label",25),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(38,"input",26),t.NdJ("ngModelChange",function(a){return n.initChecked=a}),t.qZA(),t._UZ(39,"span",27),t.qZA()(),t.TgZ(40,"th"),t._uU(41,"Title"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"Is_active"),t.qZA(),t.TgZ(44,"th"),t._uU(45,"Action"),t.qZA()()(),t.TgZ(46,"tbody"),t.YNc(47,T,16,8,"tr",28),t.qZA()()()()()(),t.TgZ(48,"div",29)(49,"div",2),t.YNc(50,C,5,0,"div",30),t.YNc(51,x,3,0,"div",30),t.qZA(),t.TgZ(52,"div",5),t.YNc(53,F,14,5,"div",31),t.YNc(54,J,14,5,"div",31),t.qZA()()()),2&e&&(t.xp6(8),t.Q6J("ngIf",!n.addForm),t.xp6(25),t.Q6J("dtOptions",n.dtOptions),t.xp6(5),t.Q6J("ngModel",n.initChecked),t.xp6(9),t.Q6J("ngForOf",n.tableData),t.xp6(3),t.Q6J("ngIf",n.addForm),t.xp6(1),t.Q6J("ngIf",!n.addForm),t.xp6(2),t.Q6J("ngIf",n.addForm),t.xp6(1),t.Q6J("ngIf",!n.addForm))},dependencies:[d.mk,d.sg,d.O5,g.yS,r._Y,r.Fj,r.Wl,r.JJ,r.JL,r.On,r.sg,r.u,p.G],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),i})()}];let y=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.Bz.forChild(S),g.Bz]}),i})();var M=l(906),I=l(6134);let N=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.ez,y,M.ZU,r.u5,r.UX,I.ii,p.T]}),i})()}}]);