"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5557],{5557:(Y,u,l)=>{l.r(u),l.d(u,{UnitModule:()=>w});var d=l(6895),g=l(1728),r=l(433),v=l(5226),p=l.n(v),t=l(1571),Z=l(927),U=l(2326),C=l(7185),m=l(5415),h=l(4333),_=l(4040);function b(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",43)(1,"a",44),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.openaddForm())}),t._UZ(2,"img",45),t._uU(3,"Add Unit "),t.qZA()()}}const T=function(n,s,e){return{"bg-lightgreen":n,"bg-lightred":s,"bg-lightyellow":e}};function x(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",46)(3,"input",29),t.NdJ("ngModelChange",function(o){const c=t.CHM(e).$implicit;return t.KtG(c.is_active=o)}),t.qZA(),t._UZ(4,"span",30),t.qZA()(),t.TgZ(5,"td",47)(6,"a",48),t._uU(7),t.qZA()(),t.TgZ(8,"td")(9,"span",49),t._uU(10),t.qZA()(),t.TgZ(11,"td")(12,"a",50),t.NdJ("click",function(){const a=t.CHM(e).$implicit,c=t.oxw();return t.KtG(c.editForm(a.id))}),t._UZ(13,"img",51),t.qZA(),t.TgZ(14,"a",52),t.NdJ("click",function(){const o=t.CHM(e),a=o.index,c=o.$implicit,P=t.oxw();return t.KtG(P.confirmText(a,c.id))}),t._UZ(15,"img",53),t.qZA()()()}if(2&n){const e=s.$implicit;t.xp6(3),t.Q6J("ngModel",e.is_active),t.xp6(4),t.Oqu(e.title),t.xp6(2),t.Q6J("ngClass",t.kEZ(4,T,!0===e.is_active,!1===e.is_active,"Partial"===e.is_active)),t.xp6(1),t.Oqu(e.is_active)}}function A(n,s){1&n&&(t.TgZ(0,"div",3)(1,"h4"),t._uU(2," Add Unit "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Create new Unit "),t.qZA()())}function M(n,s){1&n&&(t.TgZ(0,"div",3)(1,"h4"),t._uU(2," Update Unit "),t.qZA()())}function J(n,s){1&n&&(t.TgZ(0,"span",62),t._uU(1,"Enter Title "),t.qZA())}const f=function(n){return{"is-invalid":n}};function F(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",6)(1,"form",54),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.submit())}),t.TgZ(2,"div",0)(3,"div",55)(4,"div",56)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",57),t.YNc(8,J,2,0,"span",58),t.qZA()(),t.TgZ(9,"div",59)(10,"button",60),t._uU(11,"Submit"),t.qZA(),t.TgZ(12,"a",61),t._uU(13,"Cancel"),t.qZA()()()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.unitsForm),t.xp6(6),t.Q6J("ngClass",t.VKq(3,f,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched)}}function q(n,s){1&n&&(t.TgZ(0,"span",62),t._uU(1,"Enter Title "),t.qZA())}function S(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",6)(1,"form",54),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.update())}),t.TgZ(2,"div",0)(3,"div",55)(4,"div",56)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",57),t.YNc(8,q,2,0,"span",58),t.qZA()(),t.TgZ(9,"div",59)(10,"button",60),t._uU(11,"Submit"),t.qZA(),t.TgZ(12,"a",61),t._uU(13,"Cancel"),t.qZA()()()()()}if(2&n){const e=t.oxw();t.xp6(1),t.Q6J("formGroup",e.unitsForm),t.xp6(6),t.Q6J("ngClass",t.VKq(3,f,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched)}}const y=function(n,s){return{itemsPerPage:n,currentPage:s}},O=[{path:"",component:(()=>{class n{constructor(e,i,o,a,c){this.coreService=e,this.QueryService=i,this.fb=o,this.toastr=a,this.router=c,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.addForm=!0,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}get f(){return this.unitsForm.controls}confirmText(e,i){p().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.deleteUnits(i).subscribe(a=>{this.delRes=a,"Unit Deleted successfully"==this.delRes.msg&&this.ngOnInit()}),p().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1))})}ngOnInit(){this.unitsForm=this.fb.group({title:new r.NI("",[r.kI.required])}),this.coreService.getUnit().subscribe(e=>{this.tableData=e})}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deleteUnits(e).subscribe(i=>{this.delRes=i})}openaddForm(){this.addForm=!0,this.unitsForm.reset()}submit(){console.log(this.unitsForm.value),console.log(this.id),this.unitsForm.valid?this.coreService.addUnits(this.unitsForm.value).subscribe(e=>{console.log(e),this.addRes=e,"Data Created"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.unitsForm.reset(),this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.unitsForm.markAllAsTouched(),console.log("forms invalid"))}update(){this.unitsForm.valid?this.coreService.updateUnits(this.unitsForm.value,this.id).subscribe(e=>{console.log(e),this.addRes=e,"Unit updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.unitsForm.reset(),this.ngOnInit())},e=>{console.log(e.error.gst)}):(this.unitsForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.unitsForm.get("title")}editForm(e){this.id=e,this.coreService.getUnitsById(e).subscribe(i=>{console.log(i),i.map(o=>{console.log(o),e==o.id&&(this.addForm=!1,this.unitsForm.patchValue(o))})})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(e=>(console.log(e),console.log(e.title.toLocaleLowerCase()),console.log(e.title.match(this.titlee)),e.title.match(this.titlee)))}sort(e){this.key=e,this.reverse=!this.reverse}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z.p),t.Y36(U._),t.Y36(r.qu),t.Y36(C._W),t.Y36(g.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-unit"]],decls:85,vars:27,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],["colspan","5"],[1,"dataTables_length"],[1,"labelSize"],[3,"ngModel","ngModelChange"],[3,"ngValue"],[1,"pagination"],[1,"entries"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[1,"page-btn"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"checkboxs"],[1,"productimgname"],["href","javascript:void(0);",2,"line-height","3"],[1,"badges",3,"ngClass"],[1,"me-3",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"col-lg-12"],[1,"btn","btn-submit","me-2"],["routerLink","/product/units",1,"btn","btn-cancel"],[1,"text-danger"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5,"Unit list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"View/Search Units"),t.qZA()(),t.YNc(8,b,4,0,"div",4),t.qZA(),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"a",10),t._UZ(15,"img",11),t.TgZ(16,"span"),t._UZ(17,"img",12),t.qZA()()(),t.TgZ(18,"div",13)(19,"a",14),t._UZ(20,"img",15),t.qZA(),t.TgZ(21,"div",16)(22,"label")(23,"input",17),t.NdJ("ngModelChange",function(a){return i.titlee=a})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(24,"div",18)(25,"ul")(26,"li")(27,"a",19),t._UZ(28,"img",20),t.qZA()(),t.TgZ(29,"li")(30,"a",21),t._UZ(31,"img",22),t.qZA()(),t.TgZ(32,"li")(33,"a",23),t._UZ(34,"img",24),t.qZA()()()()(),t.TgZ(35,"div",25)(36,"table",26)(37,"thead")(38,"tr")(39,"th",27),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(40,"label",28),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(41,"input",29),t.NdJ("ngModelChange",function(a){return i.initChecked=a}),t.qZA(),t._UZ(42,"span",30),t.qZA(),t._UZ(43,"i",31),t.qZA(),t.TgZ(44,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(45,"Title "),t._UZ(46,"i",31),t.qZA(),t.TgZ(47,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(48,"Is Active "),t._UZ(49,"i",31),t.qZA(),t.TgZ(50,"th",27),t.NdJ("click",function(){return i.sort("id")}),t._uU(51,"Action "),t._UZ(52,"i",31),t.qZA()()(),t.TgZ(53,"tbody"),t.YNc(54,x,16,8,"tr",32),t.ALo(55,"paginate"),t.ALo(56,"orderBy"),t.qZA(),t.TgZ(57,"tr")(58,"td",33)(59,"div",34)(60,"label",35),t._uU(61,"Show :\xa0 "),t.TgZ(62,"select",36),t.NdJ("ngModelChange",function(a){return i.pageSize=a}),t.TgZ(63,"option",37),t._uU(64,"10"),t.qZA(),t.TgZ(65,"option",37),t._uU(66,"25"),t.qZA(),t.TgZ(67,"option",37),t._uU(68,"50"),t.qZA(),t.TgZ(69,"option",37),t._uU(70,"100"),t.qZA()(),t._uU(71," entries"),t.qZA()(),t.TgZ(72,"div"),t._UZ(73,"ul",38),t.qZA()()(),t.TgZ(74,"tr")(75,"td",33)(76,"div",39),t._uU(77),t.qZA()()()()()()()(),t.TgZ(78,"div",40)(79,"div",2),t.YNc(80,A,5,0,"div",41),t.YNc(81,M,3,0,"div",41),t.qZA(),t.TgZ(82,"div",5),t.YNc(83,F,14,5,"div",42),t.YNc(84,S,14,5,"div",42),t.qZA()()()),2&e&&(t.xp6(8),t.Q6J("ngIf",!i.addForm),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(13),t.Q6J("dtOptions",i.dtOptions),t.xp6(5),t.Q6J("ngModel",i.initChecked),t.xp6(13),t.Q6J("ngForOf",t.xi3(55,17,t.Dn7(56,20,i.tableData,i.key,i.reverse),t.WLB(24,y,i.pageSize,i.p))),t.xp6(8),t.Q6J("ngModel",i.pageSize),t.xp6(1),t.Q6J("ngValue",10),t.xp6(2),t.Q6J("ngValue",25),t.xp6(2),t.Q6J("ngValue",50),t.xp6(2),t.Q6J("ngValue",100),t.xp6(8),t.lnq("Showing ",i.pageSize," to ",i.pageSize," of ",i.pageSize," entries"),t.xp6(3),t.Q6J("ngIf",i.addForm),t.xp6(1),t.Q6J("ngIf",!i.addForm),t.xp6(2),t.Q6J("ngIf",i.addForm),t.xp6(1),t.Q6J("ngIf",!i.addForm))},dependencies:[d.mk,d.sg,d.O5,g.yS,r._Y,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.JL,r.On,r.sg,r.u,m.G,h._s,_.T],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600;float:left;margin-top:10px}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),n})()}];let k=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.Bz.forChild(O),g.Bz]}),n})();var N=l(906),Q=l(6134),I=l(3189);let w=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.ez,k,N.ZU,r.u5,r.UX,Q.ii,m.T,I.h,h.JX,_.l]}),n})()}}]);