"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7359],{65557:(k,A,a)=>{a.r(A),a.d(A,{UnitModule:()=>_t});var f=a(36895),y=a(88996),m=a(24006),M=a(35226),Z=a.n(M),c=a(53583),d=a(12983),r=a.n(d),p=a(80574),_=a(94327),t=a(94650),h=a(80927),b=a(72326),T=a(97185),v=a(42917),U=a(73162),x=a(54333),I=a(90455),S=a(54040);function J(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"a",53),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.openaddForm())}),t._UZ(1,"img",54),t._uU(2,"Add Unit "),t.qZA()}}function Y(n,s){if(1&n&&(t.TgZ(0,"div",51),t.YNc(1,J,3,0,"a",52),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function E(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"th",28),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",32),t.qZA()}}function Q(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"a",63),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.editForm(o.id))}),t._UZ(1,"img",64),t.qZA()}}function O(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"a",65),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),l=o.index,u=o.$implicit,g=t.oxw(2);return t.KtG(g.confirmText(l,u.id))}),t._UZ(1,"img",66),t.qZA()}}function R(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",56)(3,"input",57),t.NdJ("ngModelChange",function(o){const u=t.CHM(e).index,g=t.oxw(2);return t.KtG(g.selectedRows[u]=o)}),t.qZA(),t._UZ(4,"span",31),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",58)(8,"a",59),t._uU(9),t.qZA()(),t.TgZ(10,"td")(11,"mat-slide-toggle",60),t.NdJ("click",function(){const o=t.CHM(e),l=o.$implicit,u=o.index,g=t.oxw(2);return t.KtG(l.is_active?g.deActivate(u,l.id):g.Active(u,l.id))})("ngModelChange",function(o){const u=t.CHM(e).$implicit;return t.KtG(u.is_active=o)}),t.qZA()(),t.TgZ(12,"td"),t.YNc(13,Q,2,0,"a",61),t.YNc(14,O,2,0,"a",62),t.qZA()()}if(2&n){const e=s.$implicit,i=s.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[i]),t.xp6(3),t.Oqu(i+1),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const B=function(n,s){return{itemsPerPage:n,currentPage:s}};function L(n,s){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,R,15,6,"tr",55),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,B,e.itemsPerPage,e.p)))}}function H(n,s){1&n&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",67)(3,"p",68),t._uU(4,"Data not available"),t.qZA()()()())}function G(n,s){1&n&&t._UZ(0,"mat-progress-bar",69)}function j(n,s){1&n&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Add Unit "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Create new Unit "),t.qZA()())}function K(n,s){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,j,5,0,"div",34),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function z(n,s){1&n&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Update Unit "),t.qZA()())}function V(n,s){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,z,3,0,"div",34),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isEdit)}}function W(n,s){1&n&&(t.TgZ(0,"span",81),t._uU(1,"Enter Title "),t.qZA())}function X(n,s){1&n&&(t.TgZ(0,"button",82),t._uU(1,"Submit"),t.qZA())}function tt(n,s){1&n&&(t.TgZ(0,"button",83),t._UZ(1,"span",84),t._uU(2," Submit"),t.qZA())}const N=function(n){return{"is-invalid":n}};function et(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",73),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw(3);return t.KtG(o.submit())}),t.TgZ(2,"div",0)(3,"div",74)(4,"div",75)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",76),t.YNc(8,W,2,0,"span",77),t.qZA()(),t.TgZ(9,"div",78),t.YNc(10,X,2,0,"button",79),t.YNc(11,tt,3,0,"button",80),t.qZA()()()()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.unitsForm),t.xp6(6),t.Q6J("ngClass",t.VKq(5,N,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function nt(n,s){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,et,12,7,"div",72),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.addForm)}}function it(n,s){1&n&&(t.TgZ(0,"span",81),t._uU(1,"Enter Title "),t.qZA())}function ot(n,s){1&n&&(t.TgZ(0,"button",82),t._uU(1,"Submit"),t.qZA())}function st(n,s){1&n&&(t.TgZ(0,"button",83),t._UZ(1,"span",84),t._uU(2," Submit"),t.qZA())}function lt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",73),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw(3);return t.KtG(o.update())}),t.TgZ(2,"div",0)(3,"div",74)(4,"div",75)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",76),t.YNc(8,it,2,0,"span",77),t.qZA()(),t.TgZ(9,"div",78),t.YNc(10,ot,2,0,"button",79),t.YNc(11,st,3,0,"button",80),t.qZA()()()()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.unitsForm),t.xp6(6),t.Q6J("ngClass",t.VKq(5,N,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function at(n,s){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,lt,12,7,"div",72),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.addForm)}}function rt(n,s){if(1&n&&(t.TgZ(0,"div",70)(1,"div",2),t.YNc(2,K,2,1,"div",71),t.YNc(3,V,2,1,"div",71),t.qZA(),t.TgZ(4,"div",6),t.YNc(5,nt,2,1,"div",34),t.YNc(6,at,2,1,"div",34),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.addForm),t.xp6(1),t.Q6J("ngIf",!e.addForm),t.xp6(2),t.Q6J("ngIf",e.isAdd),t.xp6(1),t.Q6J("ngIf",e.isEdit)}}let ct=(()=>{class n{constructor(e,i,o,l,u,g){this.coreService=e,this.QueryService=i,this.fb=o,this.toastr=l,this.router=u,this.cs=g,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.loaders=!1,this.addForm=!0,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}get f(){return this.unitsForm.controls}confirmText(e,i){Z().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.coreService.deleteUnits(i).subscribe(l=>{this.delRes=l,"Unit Deleted successfully"==this.delRes.msg?(this.ngOnInit(),Z().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(e,1)):Z().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(e,i){Z().fire({title:"Are you sure?",text:"Do you want to Deactivate this Unit!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.unitIsActive(i,"").subscribe(l=>{this.delRes=l,"Unit Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),Z().fire({icon:"success",title:"Deactivate!",text:"Unit Group Is Deactivate Successfully."}))})}Active(e,i){Z().fire({title:"Are you sure?",text:"Do you want to Active this Unit!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.unitIsActive(i,"").subscribe(l=>{this.delRes=l,"Unit Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),Z().fire({icon:"success",title:"Active!",text:"Unit Group Is Active Successfully."}))})}ngOnInit(){this.unitsForm=this.fb.group({title:new m.NI("",[m.kI.required])}),this.coreService.getUnit().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(o=>{"product"===o.content_type.app_label&&"unit"===o.content_type.model&&"add_unit"==o.codename?this.isAdd=o.codename:"product"===o.content_type.app_label&&"unit"===o.content_type.model&&"change_unit"==o.codename?this.isEdit=o.codename:"product"===o.content_type.app_label&&"unit"===o.content_type.model&&"delete_unit"==o.codename&&(this.isDelete=o.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deleteUnits(e).subscribe(i=>{this.delRes=i})}openaddForm(){this.addForm=!0,this.unitsForm.reset()}submit(){this.unitsForm.valid?(this.loaders=!0,this.coreService.addUnits(this.unitsForm.value).subscribe(e=>{this.addRes=e,"Data Created"==this.addRes.msg&&(this.loaders=!1,this.toastr.success(this.addRes.msg),this.unitsForm.reset(),this.ngOnInit())},e=>{})):this.unitsForm.markAllAsTouched()}update(){this.unitsForm.valid?(this.loaders=!0,this.coreService.updateUnits(this.unitsForm.value,this.id).subscribe(e=>{this.addRes=e,"Unit updated successfully"==this.addRes.msg&&(this.loaders=!1,this.toastr.success(this.addRes.msg),this.unitsForm.reset(),this.ngOnInit())},e=>{})):this.unitsForm.markAllAsTouched()}get title(){return this.unitsForm.get("title")}editForm(e){this.id=e,this.coreService.getUnitsById(e).subscribe(i=>{i.map(o=>{e==o.id&&(this.addForm=!1,this.unitsForm.patchValue(o))})})}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(i=>i.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new c.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Unit list",10,10),r()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Title"},{header:"Is Active"}]}),e.save("unit.pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable"),o=i.querySelector("thead tr"),l=i.querySelectorAll("tbody tr"),u=[];return o.querySelectorAll("th").forEach(g=>{const C=g.textContent.trim();"Is Active"!==C&&"Action"!==C&&u.push(C)}),e.push(u),l.forEach(g=>{const C=[];g.querySelectorAll("td").forEach(w=>{C.push(w.textContent.trim())}),e.push(C)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=p.P6.aoa_to_sheet(e),o=p.P6.book_new();p.P6.book_append_sheet(o,i,"Sheet1");const l=p.cW(o,{bookType:"xlsx",type:"array"}),u=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,_.saveAs)(u,"unit.xlsx")}printTable(){const e=document.getElementById("mytable"),l=document.querySelector(".titl").outerHTML,u=e.cloneNode(!0),g=u.querySelector("th.thone:nth-child(4)");g&&g.remove();const C=u.querySelector("th.thone:last-child");C&&C.remove(),u.querySelectorAll("tr").forEach(D=>{const F=D.querySelector("td:nth-child(4)");F&&F.remove();const P=D.querySelector("td:last-child");P&&P.remove()});const ft=u.outerHTML,ht="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+ft,vt=document.body.innerHTML;document.body.innerHTML=ht,window.print(),document.body.innerHTML=vt}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.p),t.Y36(b._),t.Y36(m.qu),t.Y36(T._W),t.Y36(y.F0),t.Y36(v.J))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-unit"]],decls:81,vars:12,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-lg-5 col-sm-5 col-12",4,"ngIf"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],["href","javascript:void(0);",2,"line-height","3"],[3,"ngModel","click","ngModelChange"],["class","me-3",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-3",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Unit list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"View/Search Units"),t.qZA()(),t.YNc(8,Y,2,1,"div",5),t.qZA(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"a",11),t._UZ(15,"img",12),t.TgZ(16,"span"),t._UZ(17,"img",13),t.qZA()()(),t.TgZ(18,"div",14)(19,"a",15),t._UZ(20,"img",16),t.qZA(),t.TgZ(21,"div",17)(22,"label")(23,"input",18),t.NdJ("ngModelChange",function(l){return i.titlee=l})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(24,"div",19)(25,"ul")(26,"li")(27,"a",20),t.NdJ("click",function(){return i.generatePDF()}),t._UZ(28,"img",21),t.qZA()(),t.TgZ(29,"li")(30,"a",22),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(31,"img",23),t.qZA()(),t.TgZ(32,"li")(33,"a",24),t.NdJ("click",function(){return i.printTable()}),t._UZ(34,"img",25),t.qZA()()()()(),t.TgZ(35,"div",26)(36,"table",27)(37,"thead")(38,"tr")(39,"th",28),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(40,"label",29),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(41,"input",30),t.NdJ("ngModelChange",function(l){return i.allSelected=l})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(42,"span",31),t.qZA(),t._UZ(43,"i",32),t.qZA(),t.TgZ(44,"th",28),t.NdJ("click",function(){return i.sort("id")}),t._uU(45,"Sr.No. "),t._UZ(46,"i",32),t.qZA(),t.TgZ(47,"th",28),t.NdJ("click",function(){return i.sort("id")}),t._uU(48,"Title "),t._UZ(49,"i",32),t.qZA(),t.TgZ(50,"th",28),t.NdJ("click",function(){return i.sort("id")}),t._uU(51,"Is Active "),t._UZ(52,"i",32),t.qZA(),t.YNc(53,E,3,0,"th",33),t.qZA()(),t.YNc(54,L,4,11,"tbody",34),t.YNc(55,H,5,0,"tbody",34),t.qZA(),t.TgZ(56,"div",35),t.YNc(57,G,1,0,"mat-progress-bar",36),t.qZA(),t.TgZ(58,"div",0)(59,"div",37)(60,"div",38),t._uU(61," Show per page "),t.TgZ(62,"select",39),t.NdJ("ngModelChange",function(l){return i.itemsPerPage=l}),t.TgZ(63,"option",40),t._uU(64,"10"),t.qZA(),t.TgZ(65,"option",41),t._uU(66,"20"),t.qZA(),t.TgZ(67,"option",42),t._uU(68,"30"),t.qZA(),t.TgZ(69,"option",43),t._uU(70,"50"),t.qZA(),t.TgZ(71,"option",44),t._uU(72,"100"),t.qZA(),t.TgZ(73,"option",45),t._uU(74,"All"),t.qZA()()()(),t.TgZ(75,"div",46)(76,"div",47)(77,"pagination-controls",48),t.NdJ("pageChange",function(l){return i.p=l}),t.qZA(),t.TgZ(78,"div",49),t._uU(79),t.qZA()()()()()()()(),t.YNc(80,rt,7,4,"div",50),t.qZA()),2&e&&(t.xp6(8),t.Q6J("ngIf",!i.addForm),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(18),t.Q6J("ngModel",i.allSelected),t.xp6(12),t.Q6J("ngIf",i.isEdit||i.isDelete),t.xp6(1),t.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==i.tableData?null:i.tableData.length)&&!i.loader),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(17),t.lnq("Showing ",i.itemsPerPage," to ",i.itemsPerPage," of ",i.itemsPerPage," entries"),t.xp6(1),t.Q6J("ngIf",i.isAdd||i.isEdit))},dependencies:[f.mk,f.sg,f.O5,m._Y,m.YN,m.Kr,m.Fj,m.Wl,m.EJ,m.JJ,m.JL,m.On,m.sg,m.u,U.pW,x.LS,I.Rr,x._s,S.T],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),n})();var dt=a(30597);const q=JSON.parse(localStorage.getItem("auth")),ut=[];q&&q.map(s=>{"product"===s.content_type.app_label&&"unit"===s.content_type.model&&ut.push(s.codename)});const pt=[{path:"",component:ct,canActivate:[dt.l],data:{allowedRoles:["add_unit","change_unit","delete_unit","view_unit"]}}];let gt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[y.Bz.forChild(pt),y.Bz]}),n})();var mt=a(8468);let _t=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[f.ez,gt,mt.I]}),n})()},65415:(k,A,a)=>{a.d(A,{G:()=>m,T:()=>Z});var f=a(94650),m=function(){function c(d,r,p){this.el=d,this.vcr=r,this.renderer=p,this.dtOptions={}}return c.prototype.ngOnInit=function(){var d=this;this.dtTrigger?this.dtTrigger.subscribe(function(r){d.displayTable(r)}):this.displayTable(null)},c.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},c.prototype.displayTable=function(d){var r=this;d&&(this.dtOptions=d),this.dtInstance=new Promise(function(p,_){Promise.resolve(r.dtOptions).then(function(t){0===Object.keys(t).length&&0===$("tbody tr",r.el.nativeElement).length?_("Both the table and dtOptions cannot be empty"):setTimeout(function(){var b={rowCallback:function(T,v,U){if(t.columns){var x=t.columns;r.applyNgPipeTransform(T,x),r.applyNgRefTemplate(T,x,v)}t.rowCallback&&t.rowCallback(T,v,U)}};b=Object.assign({},t,b),r.dt=$(r.el.nativeElement).DataTable(b),p(r.dt)})})})},c.prototype.applyNgPipeTransform=function(d,r){r.filter(function(_){return _.ngPipeInstance&&!_.ngTemplateRef}).forEach(function(_){var t=_.ngPipeInstance,h=_.ngPipeArgs||[],b=r.findIndex(function(x){return x.data===_.data}),T=d.childNodes.item(b),v=$(T).text(),U=t.transform.apply(t,function(c,d,r){if(r||2===arguments.length)for(var t,p=0,_=d.length;p<_;p++)(t||!(p in d))&&(t||(t=Array.prototype.slice.call(d,0,p)),t[p]=d[p]);return c.concat(t||Array.prototype.slice.call(d))}([v],h,!1));$(T).text(U)})},c.prototype.applyNgRefTemplate=function(d,r,p){var _=this;r.filter(function(h){return h.ngTemplateRef&&!h.ngPipeInstance}).forEach(function(h){var b=h.ngTemplateRef,T=b.ref,v=b.context,U=r.findIndex(function(J){return J.data===h.data}),x=d.childNodes.item(U);$(x).html("");var I=Object.assign({},v,v?.userData,{adtData:p}),S=_.vcr.createEmbeddedView(T,I);_.renderer.appendChild(x,S.rootNodes[0])})},c.\u0275fac=function(r){return new(r||c)(f.Y36(f.SBq),f.Y36(f.s_b),f.Y36(f.Qsj))},c.\u0275dir=f.lG2({type:c,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),c}(),M=a(36895),Z=function(){function c(){}return c.forRoot=function(){return{ngModule:c}},c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[M.ez]}),c}()}}]);