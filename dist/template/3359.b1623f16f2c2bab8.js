"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3359],{3359:(J,T,a)=>{a.r(T),a.d(T,{TaxModule:()=>lt});var c=a(36895),v=a(88996),r=a(24006),y=a(35226),_=a.n(y),t=a(94650),p=a(80927),I=a(72326),u=a(97185),b=a(42917),m=a(73162),g=a(54333),x=a(90455),f=a(65415),Z=a(54040);function C(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"a",47),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.openaddForm())}),t._UZ(1,"img",48),t._uU(2,"Add Tax "),t.qZA()}}function M(i,s){if(1&i&&(t.TgZ(0,"div",45),t.YNc(1,C,3,0,"a",46),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function S(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"th",23),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",27),t.qZA()}}function q(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"a",57),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.editForm(o.id))}),t._UZ(1,"img",58),t.qZA()}}function D(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"a",59),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),l=o.index,d=o.$implicit,h=t.oxw(2);return t.KtG(h.confirmText(l,d.id))}),t._UZ(1,"img",60),t.qZA()}}function F(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",50)(3,"input",51),t.NdJ("ngModelChange",function(o){const d=t.CHM(e).index,h=t.oxw(2);return t.KtG(h.selectedRows[d]=o)}),t.qZA(),t._UZ(4,"span",26),t.qZA()(),t.TgZ(5,"td",52)(6,"a",53),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td")(11,"mat-slide-toggle",54),t.NdJ("click",function(){const o=t.CHM(e),l=o.$implicit,d=o.index,h=t.oxw(2);return t.KtG(l.is_active?h.deActivate(d,l.id):h.Active(d,l.id))})("ngModelChange",function(o){const d=t.CHM(e).$implicit;return t.KtG(d.is_active=o)}),t.qZA()(),t.TgZ(12,"td"),t.YNc(13,q,2,0,"a",55),t.YNc(14,D,2,0,"a",56),t.qZA()()}if(2&i){const e=s.$implicit,n=s.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[n]),t.xp6(4),t.Oqu(e.title),t.xp6(2),t.Oqu(e.tax_percentage),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const N=function(i,s){return{itemsPerPage:i,currentPage:s}};function w(i,s){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,F,15,6,"tr",49),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,N,e.pageSize,e.p)))}}function O(i,s){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",61)(3,"p",62),t._uU(4,"Data not available"),t.qZA()()()())}function Q(i,s){1&i&&t._UZ(0,"mat-progress-bar",63)}function P(i,s){1&i&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Tax "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Create new Tax "),t.qZA()())}function R(i,s){if(1&i&&(t.TgZ(0,"div",3),t.YNc(1,P,5,0,"div",29),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function Y(i,s){1&i&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Update Tax "),t.qZA()())}function E(i,s){if(1&i&&(t.TgZ(0,"div",3),t.YNc(1,Y,3,0,"div",29),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isEdit)}}function k(i,s){1&i&&(t.TgZ(0,"span",76),t._uU(1,"Enter Title "),t.qZA())}function B(i,s){1&i&&(t.TgZ(0,"span",76),t._uU(1,"Enter Tax Percentage "),t.qZA())}function G(i,s){1&i&&(t.TgZ(0,"button",77),t._uU(1,"Submit"),t.qZA())}function L(i,s){1&i&&(t.TgZ(0,"button",78),t._UZ(1,"span",79),t._uU(2," Submit"),t.qZA())}const A=function(i){return{"is-invalid":i}};function K(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",6)(1,"form",67),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw(3);return t.KtG(o.submit())}),t.TgZ(2,"div",0)(3,"div",68)(4,"div",69)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",70),t.YNc(8,k,2,0,"span",71),t.qZA()(),t.TgZ(9,"div",68)(10,"div",69)(11,"label"),t._uU(12,"Tax Percentage*"),t.qZA(),t._UZ(13,"input",72),t.YNc(14,B,2,0,"span",71),t.qZA()(),t.TgZ(15,"div",73),t.YNc(16,G,2,0,"button",74),t.YNc(17,L,3,0,"button",75),t.qZA()()()()}if(2&i){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.taxForm),t.xp6(6),t.Q6J("ngClass",t.VKq(7,A,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(9,A,e.f.tax_percentage.touched&&e.f.tax_percentage.invalid)),t.xp6(1),t.Q6J("ngIf",e.tax_percentage&&e.tax_percentage.invalid&&e.tax_percentage.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function z(i,s){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,K,18,11,"div",66),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.addForm)}}function W(i,s){1&i&&(t.TgZ(0,"span",76),t._uU(1,"Enter Title "),t.qZA())}function H(i,s){1&i&&(t.TgZ(0,"span",76),t._uU(1,"Enter Tax Percentage "),t.qZA())}function $(i,s){1&i&&(t.TgZ(0,"button",77),t._uU(1,"Submit"),t.qZA())}function j(i,s){1&i&&(t.TgZ(0,"button",78),t._UZ(1,"span",79),t._uU(2," Submit"),t.qZA())}function V(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",6)(1,"form",67),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw(3);return t.KtG(o.update())}),t.TgZ(2,"div",0)(3,"div",68)(4,"div",69)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",70),t.YNc(8,W,2,0,"span",71),t.qZA()(),t.TgZ(9,"div",68)(10,"div",69)(11,"label"),t._uU(12,"Tax Percentage*"),t.qZA(),t._UZ(13,"input",72),t.YNc(14,H,2,0,"span",71),t.qZA()(),t.TgZ(15,"div",73),t.YNc(16,$,2,0,"button",74),t.YNc(17,j,3,0,"button",75),t.qZA()()()()}if(2&i){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.taxForm),t.xp6(6),t.Q6J("ngClass",t.VKq(7,A,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(9,A,e.f.tax_percentage.touched&&e.f.tax_percentage.invalid)),t.xp6(1),t.Q6J("ngIf",e.tax_percentage&&e.tax_percentage.invalid&&e.tax_percentage.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function X(i,s){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,V,18,11,"div",66),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.addForm)}}function tt(i,s){if(1&i&&(t.TgZ(0,"div",64)(1,"div",2),t.YNc(2,R,2,1,"div",65),t.YNc(3,E,2,1,"div",65),t.qZA(),t.TgZ(4,"div",5),t.YNc(5,z,2,1,"div",29),t.YNc(6,X,2,1,"div",29),t.qZA()()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.addForm),t.xp6(1),t.Q6J("ngIf",!e.addForm),t.xp6(2),t.Q6J("ngIf",e.isAdd),t.xp6(1),t.Q6J("ngIf",e.isEdit)}}let et=(()=>{class i{constructor(e,n,o,l,d){this.coreService=e,this.QueryService=n,this.fb=o,this.toastr=l,this.cs=d,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=5,this.itemsPerPage=5,this.select=!1,this.loader=!0,this.allSelected=!1,this.loaders=!1,this.addForm=!0,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}get f(){return this.taxForm.controls}confirmText(e,n){_().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.coreService.deletetax(n).subscribe(l=>{this.delRes=l,"Tax Deleted successfully"==this.delRes.msg?(this.ngOnInit(),_().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):_().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(e,n){_().fire({title:"Are you sure?",text:"Do you want to Deactivate this tax!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.taxIsActive(n,"").subscribe(l=>{this.delRes=l,"Tax Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),_().fire({icon:"success",title:"Deactivate!",text:"Tax Is Deactivate Successfully."}))})}Active(e,n){_().fire({title:"Are you sure?",text:"Do you want to Active this tax!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.taxIsActive(n,"").subscribe(l=>{this.delRes=l,"Tax Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),_().fire({icon:"success",title:"Active!",text:"Tax Is Active Successfully."}))})}ngOnInit(){this.taxForm=this.fb.group({title:new r.NI("",[r.kI.required]),tax_percentage:new r.NI("",[r.kI.required,r.kI.pattern(/^[0-9]*$/)])}),this.coreService.gettaxd().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission.map(o=>{"product"===o.content_type.app_label&&"tax"===o.content_type.model&&"add_tax"==o.codename?(this.isAdd=o.codename,console.log(this.isAdd)):"product"===o.content_type.app_label&&"tax"===o.content_type.model&&"change_tax"==o.codename?(this.isEdit=o.codename,console.log(this.isEdit)):"product"===o.content_type.app_label&&"tax"===o.content_type.model&&"delete_tax"==o.codename&&(this.isDelete=o.codename,console.log(this.isDelete))})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(e){this.coreService.deletetax(e).subscribe(n=>{this.delRes=n,"Tax Deleted successfully"==this.delRes.msg&&window.location.reload()})}submit(){console.log(this.taxForm.value),console.log(this.id),this.taxForm.valid?(this.loaders=!0,this.coreService.addtax(this.taxForm.value).subscribe(e=>{console.log(e),this.addRes=e,"Data Created"==this.addRes.msg?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.taxForm.reset(),this.ngOnInit()):this.toastr.error(this.addRes.tax_percentage)},e=>{console.log(e.error.gst)})):(this.taxForm.markAllAsTouched(),console.log("forms invalid"))}update(){this.taxForm.valid?(this.loaders=!0,this.coreService.updatetax(this.taxForm.value,this.id).subscribe(e=>{console.log(e),this.addRes=e,"Tax updated successfully"==this.addRes.msg&&(this.loaders=!1,this.addForm=!0,this.toastr.success(this.addRes.msg),this.taxForm.reset(),this.ngOnInit())},e=>{console.log(e.error.gst)})):(this.taxForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.taxForm.get("title")}get tax_percentage(){return this.taxForm.get("tax_percentage")}editForm(e){this.id=e,this.coreService.gettaxById(e).subscribe(n=>{console.log(n),n.map(o=>{console.log(o),e==o.id&&(this.addForm=!1,this.taxForm.patchValue(o),this.editFormdata=n)})})}openaddForm(){this.addForm=!0,this.taxForm.reset()}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(n=>n.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.p),t.Y36(I._),t.Y36(r.qu),t.Y36(u._W),t.Y36(b.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-tax"]],decls:74,vars:13,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-lg-5 col-sm-5 col-12",4,"ngIf"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],["href","javascript:void(0);",2,"line-height","3"],[3,"ngModel","click","ngModelChange"],["class","me-3",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-3",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","tax_percentage","id","tax_percentage",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5,"Tax list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Tax"),t.qZA()(),t.YNc(8,M,2,1,"div",4),t.qZA(),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"a",10),t._UZ(15,"img",11),t.qZA(),t.TgZ(16,"div",12)(17,"label")(18,"input",13),t.NdJ("ngModelChange",function(l){return n.titlee=l})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(19,"div",14)(20,"ul")(21,"li")(22,"a",15),t._UZ(23,"img",16),t.qZA()(),t.TgZ(24,"li")(25,"a",17),t._UZ(26,"img",18),t.qZA()(),t.TgZ(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()()()()(),t.TgZ(30,"div",21)(31,"table",22)(32,"thead")(33,"tr")(34,"th",23),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(35,"label",24),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(36,"input",25),t.NdJ("ngModelChange",function(l){return n.allSelected=l})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(37,"span",26),t.qZA(),t._UZ(38,"i",27),t.qZA(),t.TgZ(39,"th",23),t.NdJ("click",function(){return n.sort("id")}),t._uU(40,"Title "),t._UZ(41,"i",27),t.qZA(),t.TgZ(42,"th",23),t.NdJ("click",function(){return n.sort("id")}),t._uU(43,"Tax Percentage "),t._UZ(44,"i",27),t.qZA(),t.TgZ(45,"th",23),t.NdJ("click",function(){return n.sort("id")}),t._uU(46,"Is Active "),t._UZ(47,"i",27),t.qZA(),t.YNc(48,S,3,0,"th",28),t.qZA()(),t.YNc(49,w,4,11,"tbody",29),t.YNc(50,O,5,0,"tbody",29),t.qZA(),t.TgZ(51,"div",30),t.YNc(52,Q,1,0,"mat-progress-bar",31),t.qZA(),t.TgZ(53,"div",0)(54,"div",32)(55,"div",33),t._uU(56," Show per page "),t.TgZ(57,"select",34),t.NdJ("ngModelChange",function(l){return n.itemsPerPage=l}),t.TgZ(58,"option",35),t._uU(59,"5"),t.qZA(),t.TgZ(60,"option",36),t._uU(61,"10"),t.qZA(),t.TgZ(62,"option",37),t._uU(63,"20"),t.qZA(),t.TgZ(64,"option",38),t._uU(65,"50"),t.qZA(),t.TgZ(66,"option",39),t._uU(67,"All"),t.qZA()()()(),t.TgZ(68,"div",40)(69,"div",41)(70,"pagination-controls",42),t.NdJ("pageChange",function(l){return n.p=l}),t.qZA(),t.TgZ(71,"div",43),t._uU(72),t.qZA()()()()()()()(),t.YNc(73,tt,7,4,"div",44),t.qZA()),2&e&&(t.xp6(8),t.Q6J("ngIf",!n.addForm),t.xp6(10),t.Q6J("ngModel",n.titlee),t.xp6(13),t.Q6J("dtOptions",n.dtOptions),t.xp6(5),t.Q6J("ngModel",n.allSelected),t.xp6(12),t.Q6J("ngIf",n.isEdit||n.isDelete),t.xp6(1),t.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==n.tableData?null:n.tableData.length)&&!n.loader),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(15),t.lnq("Showing ",n.pageSize," to ",n.pageSize," of ",n.pageSize," entries"),t.xp6(1),t.Q6J("ngIf",n.isAdd||n.isEdit))},dependencies:[c.mk,c.sg,c.O5,r._Y,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.JL,r.On,r.sg,r.u,m.pW,g.LS,x.Rr,f.G,g._s,Z.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),i})();var it=a(30597);const U=JSON.parse(localStorage.getItem("auth")),nt=[];U&&U.permission&&U.permission.map(s=>{"product"===s.content_type.app_label&&"tax"===s.content_type.model&&nt.push(s.codename)});const ot=[{path:"",component:et,canActivate:[it.l],data:{allowedRoles:["add_tax","change_tax","delete_tax","view_tax"]}}];let st=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[v.Bz.forChild(ot),v.Bz]}),i})();var at=a(8468);let lt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.ez,st,at.I]}),i})()},30597:(J,T,a)=>{a.d(T,{l:()=>t});var c=a(94650),v=a(88996),r=a(97185),y=a(42917),_=a(80927);let t=(()=>{class p{constructor(u,b,m,g,x){this.router=u,this.Arout=b,this.toastr=m,this.profileService=g,this.coreService=x}canActivate(u,b){const m=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(g=>{this.userDetails=g,this.permissions=this.userDetails?.permission}),m){const g=u.data.allowedRoles;console.log(g,"allowedRoles");const x=m.some(f=>g.includes(f.codename));if(this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails);const Z=f?.permission,C=this.profileService.getUserDetails();(!C||C.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),console.log(x),x)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(u){return new(u||p)(c.LFG(v.F0),c.LFG(v.gz),c.LFG(r._W),c.LFG(y.J),c.LFG(_.p))},p.\u0275prov=c.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);