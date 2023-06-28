"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4716],{4716:(x,y,u)=>{u.r(y),u.d(y,{WarehouselistModule:()=>O});var g=u(6895),a=u(4006),q=u(6134),C=u(5415),U=u(906),n=u(8996),r=u(5226),o=u.n(r),e=u(4650),d=u(927),l=u(2326),m=u(7185);const v=function(i,h,t){return{"bg-lightgreen":i,"bg-lightred":h,"bg-lightyellow":t}};function Z(i,h){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",58)(3,"input",28),e.NdJ("ngModelChange",function(p){const _=e.CHM(t).$implicit;return e.KtG(_.is_active=p)}),e.qZA(),e._UZ(4,"span",29),e.qZA()(),e.TgZ(5,"td",59)(6,"a",60),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td")(13,"span",61),e._uU(14),e.qZA()(),e.TgZ(15,"td")(16,"a",62),e.NdJ("click",function(){const c=e.CHM(t).$implicit,_=e.oxw();return e.KtG(_.editWareHouse(c))}),e._UZ(17,"img",63),e.qZA(),e.TgZ(18,"a",64),e.NdJ("click",function(){const p=e.CHM(t),c=p.index,_=p.$implicit,D=e.oxw();return e.KtG(D.confirmText(c,_.id))}),e._UZ(19,"img",65),e.qZA()()()}if(2&i){const t=h.$implicit;e.xp6(3),e.Q6J("ngModel",t.is_active),e.xp6(4),e.Oqu(t.title),e.xp6(2),e.Oqu(t.accounts_type),e.xp6(2),e.Oqu(t.address),e.xp6(2),e.Q6J("ngClass",e.kEZ(6,v,!0===t.is_active,!1===t.is_active,"Partial"===t.is_active)),e.xp6(1),e.Oqu(t.is_active)}}function f(i,h){1&i&&(e.TgZ(0,"span",66),e._uU(1,"Enter Title name "),e.qZA())}function b(i,h){1&i&&(e.TgZ(0,"span",66),e._uU(1,"Select Type of Account"),e.qZA())}function T(i,h){1&i&&(e.TgZ(0,"span",66),e._uU(1,"Enter your address"),e.qZA())}function W(i,h){1&i&&(e.TgZ(0,"a",67),e._uU(1,"Cancel"),e.qZA())}const A=function(i){return{"is-invalid":i}},S=[{path:"",component:(()=>{class i{constructor(t,s,p,c){this.fb=t,this.coreService=s,this.queryService=p,this.toastr=c,this.dtOptions={},this.initChecked=!1,this.editMode=!1,this.queryService.filterToggle()}confirmText(t,s){o().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(p=>{p.isConfirmed&&(this.coreService.deleteWarehouse(s).subscribe(c=>{this.delRes=c,console.log(c)}),o().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(t,1))})}get f(){return this.warehouseForm.controls}ngOnInit(){this.queryService.getWarehouse(),this.queryService.warehouse.subscribe(c=>{localStorage.getItem("warehouseList")&&(this.tableData=Object.values(JSON.parse(localStorage.getItem("warehouseList"))))});let t="",s="",p="";this.coreService.editThings.subscribe(c=>{this.editRoute=c,this.editRoute&&(t=c.title,s=c.accounts_type,p=c.address),this.warehouseForm=this.fb.group({title:new a.NI(t,[a.kI.required]),accounts_type:new a.NI(s,[a.kI.required]),address:new a.NI(p,[a.kI.required])})}),this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(c,_)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}}}selectAll(t){this.tableData.forEach(t?s=>{s.isSelected=!1}:s=>{s.isSelected=!0})}deleteId(t){this.coreService.deleteWarehouse(t).subscribe(s=>{this.delRes=s})}submit(){this.warehouseForm.valid?this.editMode?this.coreService.updateWarehouse(this.warehouseForm.value,this.editRoute.id).subscribe(t=>{"Warehouse updated successfully"==t.msg&&(this.toastr.success(t.msg),this.ngOnInit(),this.warehouseForm.reset(),this.editMode=!1)}):this.coreService.addWarehouse(this.warehouseForm.value).subscribe(t=>{console.log(t),this.addRes=t,"Data Created"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.ngOnInit(),this.warehouseForm.reset())},t=>{console.log(t.error.gst)}):(this.warehouseForm.markAllAsTouched(),console.log("forms invalid"))}editWareHouse(t){this.coreService.editThisData(t),this.editMode=!0}ngOnDestroy(){this.coreService.editThisData(null)}get accounts_type(){return this.warehouseForm.get("accounts_type")}get title(){return this.warehouseForm.get("title")}get address(){return this.warehouseForm.get("address")}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(a.qu),e.Y36(d.p),e.Y36(l._),e.Y36(m._W))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-warehouse-list"]],decls:120,vars:20,consts:[[1,"row"],[1,"col-7"],[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//warehouse/addwarehouse",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[4,"ngFor","ngForOf"],[1,"col-5"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["formControlName","accounts_type","required","","id","accounts_type",1,"w-100","h-100","border",3,"ngClass"],["value","","selected","","disabled",""],["value","Cash"],["value","Bank"],["value","Employee"],["value","Customer"],["value","Sale"],["value","Purchase"],["value","Stock"],["value","Dealer"],["value","Supplier"],["value","Tax"],["value","Expense"],["value","Capital"],["value","Current Asset"],["value","Current Liabilities"],["value","Fixed Assets"],[1,"col-lg-12"],["formControlName","address","id","address",1,"form-control",3,"ngClass"],["type","submit",1,"btn","btn-submit","me-2"],["routerLink","//warehouse/warehouselist","class","btn btn-cancel",4,"ngIf"],[1,"checkboxs"],[1,"productimgname"],["href","javascript:void(0);",2,"line-height","3"],[1,"badges",3,"ngClass"],[1,"me-3",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],[1,"text-danger"],["routerLink","//warehouse/warehouselist",1,"btn","btn-cancel"]],template:function(t,s){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),e._uU(5,"Warehouse list"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"View/Search Warehouse"),e.qZA()(),e.TgZ(8,"div",4)(9,"a",5),e._UZ(10,"img",6),e._uU(11,"Add Warehouse "),e.qZA()()(),e.TgZ(12,"div",7)(13,"div",8)(14,"div",9)(15,"div",10)(16,"div",11)(17,"a",12),e._UZ(18,"img",13),e.TgZ(19,"span"),e._UZ(20,"img",14),e.qZA()()(),e.TgZ(21,"div",15)(22,"a",16),e._UZ(23,"img",17),e.qZA()()(),e.TgZ(24,"div",18)(25,"ul")(26,"li")(27,"a",19),e._UZ(28,"img",20),e.qZA()(),e.TgZ(29,"li")(30,"a",21),e._UZ(31,"img",22),e.qZA()(),e.TgZ(32,"li")(33,"a",23),e._UZ(34,"img",24),e.qZA()()()()(),e.TgZ(35,"div",25)(36,"table",26)(37,"thead")(38,"tr")(39,"th")(40,"label",27),e.NdJ("click",function(){return s.selectAll(s.initChecked)}),e.TgZ(41,"input",28),e.NdJ("ngModelChange",function(c){return s.initChecked=c}),e.qZA(),e._UZ(42,"span",29),e.qZA()(),e.TgZ(43,"th"),e._uU(44,"Title"),e.qZA(),e.TgZ(45,"th"),e._uU(46,"Accounts Type"),e.qZA(),e.TgZ(47,"th"),e._uU(48,"Address"),e.qZA(),e.TgZ(49,"th"),e._uU(50,"Is Active"),e.qZA(),e.TgZ(51,"th"),e._uU(52,"Action"),e.qZA()()(),e.TgZ(53,"tbody"),e.YNc(54,Z,20,10,"tr",30),e.qZA()()()()()(),e.TgZ(55,"div",31)(56,"div",2)(57,"div",3)(58,"h4"),e._uU(59),e.qZA(),e.TgZ(60,"h6"),e._uU(61),e.qZA()()(),e.TgZ(62,"div",7)(63,"div",8)(64,"form",32),e.NdJ("ngSubmit",function(){return s.submit()}),e.TgZ(65,"div",0)(66,"div",33)(67,"div",34)(68,"label"),e._uU(69,"Title*"),e.qZA(),e._UZ(70,"input",35),e.YNc(71,f,2,0,"span",36),e.qZA()(),e.TgZ(72,"div",33)(73,"div",34)(74,"label"),e._uU(75," Type of Account*"),e.qZA(),e.TgZ(76,"select",37)(77,"option",38),e._uU(78,"Accounts type"),e.qZA(),e.TgZ(79,"option",39),e._uU(80,"Cash"),e.qZA(),e.TgZ(81,"option",40),e._uU(82,"Bank"),e.qZA(),e.TgZ(83,"option",41),e._uU(84,"Employee"),e.qZA(),e.TgZ(85,"option",42),e._uU(86,"Customer"),e.qZA(),e.TgZ(87,"option",43),e._uU(88,"Sale"),e.qZA(),e.TgZ(89,"option",44),e._uU(90,"Purchase"),e.qZA(),e.TgZ(91,"option",45),e._uU(92,"Stock"),e.qZA(),e.TgZ(93,"option",46),e._uU(94,"Dealer"),e.qZA(),e.TgZ(95,"option",47),e._uU(96,"Supplier"),e.qZA(),e.TgZ(97,"option",48),e._uU(98,"Tax"),e.qZA(),e.TgZ(99,"option",49),e._uU(100,"Expense"),e.qZA(),e.TgZ(101,"option",50),e._uU(102,"Capital"),e.qZA(),e.TgZ(103,"option",51),e._uU(104,"Current Asset"),e.qZA(),e.TgZ(105,"option",52),e._uU(106,"Current Liabilities"),e.qZA(),e.TgZ(107,"option",53),e._uU(108,"Fixed Assets"),e.qZA()(),e.YNc(109,b,2,0,"span",36),e.qZA()(),e.TgZ(110,"div",54)(111,"div",34)(112,"label"),e._uU(113,"Address*"),e.qZA(),e._UZ(114,"textarea",55),e.YNc(115,T,2,0,"span",36),e.qZA()(),e.TgZ(116,"div",54)(117,"button",56),e._uU(118),e.qZA(),e.YNc(119,W,2,0,"a",57),e.qZA()()()()()()()),2&t&&(e.xp6(36),e.Q6J("dtOptions",s.dtOptions),e.xp6(5),e.Q6J("ngModel",s.initChecked),e.xp6(13),e.Q6J("ngForOf",s.tableData),e.xp6(5),e.hij(" ",s.editMode?"Edit Warehouse":"Add Warehouse",""),e.xp6(2),e.Oqu(s.editMode?"Edit Warehouse List":"Create new Warehouse"),e.xp6(3),e.Q6J("formGroup",s.warehouseForm),e.xp6(6),e.Q6J("ngClass",e.VKq(14,A,s.f.title.touched&&s.f.title.invalid)),e.xp6(1),e.Q6J("ngIf",s.title&&s.title.invalid&&s.title.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(16,A,s.f.accounts_type.touched&&s.f.accounts_type.invalid)),e.xp6(33),e.Q6J("ngIf",s.accounts_type&&s.accounts_type.invalid&&s.accounts_type.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(18,A,s.f.address.touched&&s.f.address.invalid)),e.xp6(1),e.Q6J("ngIf",s.address&&s.address.invalid&&s.address.touched),e.xp6(3),e.Oqu(s.editMode?"Save Changes":"Submit"),e.xp6(1),e.Q6J("ngIf",!s.editMode))},dependencies:[g.mk,g.sg,g.O5,n.yS,a._Y,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.JL,a.Q7,a.On,a.sg,a.u,C.G],styles:["select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),i})()}];let M=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[n.Bz.forChild(S),n.Bz]}),i})(),O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,M,a.u5,a.UX,U.ZU,q.ii,C.T]}),i})()},5415:(x,y,u)=>{u.d(y,{G:()=>q,T:()=>U});var g=u(4650),q=function(){function n(r,o,e){this.el=r,this.vcr=o,this.renderer=e,this.dtOptions={}}return n.prototype.ngOnInit=function(){var r=this;this.dtTrigger?this.dtTrigger.subscribe(function(o){r.displayTable(o)}):this.displayTable(null)},n.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},n.prototype.displayTable=function(r){var o=this;r&&(this.dtOptions=r),this.dtInstance=new Promise(function(e,d){Promise.resolve(o.dtOptions).then(function(l){0===Object.keys(l).length&&0===$("tbody tr",o.el.nativeElement).length?d("Both the table and dtOptions cannot be empty"):setTimeout(function(){var v={rowCallback:function(Z,f,b){if(l.columns){var T=l.columns;o.applyNgPipeTransform(Z,T),o.applyNgRefTemplate(Z,T,f)}l.rowCallback&&l.rowCallback(Z,f,b)}};v=Object.assign({},l,v),o.dt=$(o.el.nativeElement).DataTable(v),e(o.dt)})})})},n.prototype.applyNgPipeTransform=function(r,o){o.filter(function(d){return d.ngPipeInstance&&!d.ngTemplateRef}).forEach(function(d){var l=d.ngPipeInstance,m=d.ngPipeArgs||[],v=o.findIndex(function(T){return T.data===d.data}),Z=r.childNodes.item(v),f=$(Z).text(),b=l.transform.apply(l,function(n,r,o){if(o||2===arguments.length)for(var l,e=0,d=r.length;e<d;e++)(l||!(e in r))&&(l||(l=Array.prototype.slice.call(r,0,e)),l[e]=r[e]);return n.concat(l||Array.prototype.slice.call(r))}([f],m,!1));$(Z).text(b)})},n.prototype.applyNgRefTemplate=function(r,o,e){var d=this;o.filter(function(m){return m.ngTemplateRef&&!m.ngPipeInstance}).forEach(function(m){var v=m.ngTemplateRef,Z=v.ref,f=v.context,b=o.findIndex(function(w){return w.data===m.data}),T=r.childNodes.item(b);$(T).html("");var W=Object.assign({},f,f?.userData,{adtData:e}),A=d.vcr.createEmbeddedView(Z,W);d.renderer.appendChild(T,A.rootNodes[0])})},n.\u0275fac=function(o){return new(o||n)(g.Y36(g.SBq),g.Y36(g.s_b),g.Y36(g.Qsj))},n.\u0275dir=g.lG2({type:n,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),n}(),C=u(6895),U=function(){function n(){}return n.forRoot=function(){return{ngModule:n}},n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=g.oAB({type:n}),n.\u0275inj=g.cJS({imports:[C.ez]}),n}()}}]);