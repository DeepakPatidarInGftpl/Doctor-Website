"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7725],{27725:(ft,h,c)=>{c.r(h),c.d(h,{UnitModule:()=>mt});var m=c(96814),p=c(74408),d=c(56223),U=c(13519),u=c.n(U),A=c(69846),y=c(33403),M=c.n(y),g=c(11486),J=c(10217),t=c(19212),q=c(44293),S=c(31025),I=c(58763),F=c(41789),N=c(16007),f=c(76472),w=c(82599),k=c(35202);function D(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"a",53),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(2);return t.KtG(i.openaddForm())}),t._UZ(1,"img",54),t._uU(2,"Add Unit "),t.qZA()}}function P(n,l){if(1&n&&(t.TgZ(0,"div",51),t.YNc(1,D,3,0,"a",52),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function Q(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"th",28),t.NdJ("click",function(){t.CHM(e);const i=t.oxw();return t.KtG(i.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",32),t.qZA()}}function E(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"a",65),t.NdJ("click",function(){t.CHM(e);const i=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.editForm(i.id))}),t._UZ(1,"img",66),t.qZA()}}function Y(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"a",67),t.NdJ("click",function(){t.CHM(e);const i=t.oxw(),s=i.index,a=i.$implicit,r=t.oxw(2);return t.KtG(r.confirmText(s,a.id))}),t._UZ(1,"img",68),t.qZA()}}function B(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",56)(3,"input",57),t.NdJ("ngModelChange",function(i){const a=t.CHM(e).index,r=t.oxw(2);return t.KtG(r.selectedRows[a]=i)}),t.qZA(),t._UZ(4,"span",31),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",58)(8,"a",59),t._uU(9),t.qZA()(),t.TgZ(10,"td")(11,"mat-slide-toggle",60),t.NdJ("click",function(){const i=t.CHM(e),s=i.$implicit,a=i.index,r=t.oxw(2);return t.KtG(s.is_active?r.deActivate(a,s.id):r.Active(a,s.id))})("ngModelChange",function(i){const a=t.CHM(e).$implicit;return t.KtG(a.is_active=i)}),t.qZA()(),t.TgZ(12,"td")(13,"a",61),t._UZ(14,"img",62),t.qZA(),t.YNc(15,E,2,0,"a",63)(16,Y,2,0,"a",64),t.qZA()()}if(2&n){const e=l.$implicit,o=l.index,i=t.oxw(2);t.xp6(3),t.Q6J("ngModel",i.selectedRows[o]),t.xp6(3),t.Oqu(o+1),t.xp6(2),t.MGl("routerLink","//product/unit-details/",null==e?null:e.id,""),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//product/unit-details/",null==e?null:e.id,""),t.xp6(2),t.Q6J("ngIf",i.isEdit),t.xp6(1),t.Q6J("ngIf",i.isDelete)}}const O=(n,l)=>({itemsPerPage:n,currentPage:l});function R(n,l){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,B,17,8,"tr",55),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,O,e.itemsPerPage,e.p)))}}function L(n,l){1&n&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",69)(3,"p",70),t._uU(4,"Data not available"),t.qZA()()()())}function H(n,l){1&n&&t._UZ(0,"mat-progress-bar",71)}function G(n,l){1&n&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Add Unit "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Create new Unit "),t.qZA()())}function K(n,l){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,G,5,0,"div",34),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function z(n,l){1&n&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Update Unit "),t.qZA()())}function j(n,l){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,z,3,0,"div",34),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isEdit)}}function V(n,l){1&n&&(t.TgZ(0,"span",83),t._uU(1,"Enter Units "),t.qZA())}function W(n,l){1&n&&(t.TgZ(0,"button",84),t._uU(1,"Submit"),t.qZA())}function $(n,l){1&n&&(t.TgZ(0,"button",85),t._UZ(1,"span",86),t._uU(2," Submit"),t.qZA())}const v=n=>({"is-invalid":n});function X(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",75),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.submit())}),t.TgZ(2,"div",0)(3,"div",76)(4,"div",77)(5,"label"),t._uU(6,"Unit*"),t.qZA(),t._UZ(7,"input",78),t.YNc(8,V,2,0,"span",79),t.qZA()(),t.TgZ(9,"div",80),t.YNc(10,W,2,0,"button",81)(11,$,3,0,"button",82),t.qZA()()()()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.unitsForm),t.xp6(6),t.Q6J("ngClass",t.VKq(5,v,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function tt(n,l){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,X,12,7,"div",74),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.addForm)}}function et(n,l){1&n&&(t.TgZ(0,"span",83),t._uU(1,"Enter Title "),t.qZA())}function it(n,l){1&n&&(t.TgZ(0,"button",84),t._uU(1,"Submit"),t.qZA())}function nt(n,l){1&n&&(t.TgZ(0,"button",85),t._UZ(1,"span",86),t._uU(2," Submit"),t.qZA())}function ot(n,l){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",75),t.NdJ("ngSubmit",function(){t.CHM(e);const i=t.oxw(3);return t.KtG(i.update())}),t.TgZ(2,"div",0)(3,"div",76)(4,"div",77)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",87),t.YNc(8,et,2,0,"span",79),t.qZA()(),t.TgZ(9,"div",80),t.YNc(10,it,2,0,"button",81)(11,nt,3,0,"button",82),t.qZA()()()()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.unitsForm),t.xp6(6),t.Q6J("ngClass",t.VKq(5,v,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function st(n,l){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,ot,12,7,"div",74),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.addForm)}}function lt(n,l){if(1&n&&(t.TgZ(0,"div",72)(1,"div",2),t.YNc(2,K,2,1,"div",73)(3,j,2,1,"div",73),t.qZA(),t.TgZ(4,"div",6),t.YNc(5,tt,2,1,"div",34)(6,st,2,1,"div",34),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.addForm),t.xp6(1),t.Q6J("ngIf",!e.addForm),t.xp6(2),t.Q6J("ngIf",e.isAdd),t.xp6(1),t.Q6J("ngIf",e.isEdit)}}let at=(()=>{class n{get f(){return this.unitsForm.controls}constructor(e,o,i,s,a,r){this.coreService=e,this.QueryService=o,this.fb=i,this.toastr=s,this.router=a,this.cs=r,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.loaders=!1,this.addForm=!0,this.key="id",this.reverse=!1,this.navigateData=this.router.getCurrentNavigation()?.extras?.state?.id,this.navigateData&&this.editForm(this.navigateData)}confirmText(e,o){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.coreService.deleteUnits(o).subscribe(s=>{this.delRes=s,this.delRes.success?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(e,1)):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(e,o){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this Unit!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.coreService.unitIsActive(o,"").subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),u().fire({icon:"success",title:"Deactivate!",text:"Unit Is Deactivate Successfully."}))})}Active(e,o){u().fire({title:"Are you sure?",text:"Do you want to Active this Unit!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.coreService.unitIsActive(o,"").subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),u().fire({icon:"success",title:"Active!",text:this.delRes.msg}))})}ngOnInit(){this.unitsForm=this.fb.group({title:new d.NI("",[d.kI.required])}),this.coreService.getUnit().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(i=>{"product"===i.content_type.app_label&&"unit"===i.content_type.model&&"add_unit"==i.codename?this.isAdd=i.codename:"product"===i.content_type.app_label&&"unit"===i.content_type.model&&"change_unit"==i.codename?this.isEdit=i.codename:"product"===i.content_type.app_label&&"unit"===i.content_type.model&&"delete_unit"==i.codename&&(this.isDelete=i.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}deleteId(e){this.coreService.deleteUnits(e).subscribe(o=>{this.delRes=o})}openaddForm(){this.addForm=!0,this.unitsForm.reset()}submit(){this.unitsForm.valid?(this.loaders=!0,this.coreService.addUnits(this.unitsForm.value).subscribe(e=>{this.addRes=e,this.addRes.success&&(this.loaders=!1,this.toastr.success(this.addRes.msg),this.unitsForm.reset(),this.ngOnInit())},e=>{})):(this.unitsForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}update(){this.unitsForm.valid?(this.loaders=!0,this.coreService.updateUnits(this.unitsForm.value,this.id).subscribe(e=>{this.addRes=e,this.addRes.success&&(this.loaders=!1,this.addForm=!0,this.toastr.success(this.addRes.msg),this.unitsForm.reset(),this.ngOnInit())},e=>{})):(this.unitsForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get title(){return this.unitsForm.get("title")}editForm(e){this.id=e,this.coreService.getUnitsById(e).subscribe(o=>{o.map(i=>{e==i.id&&(this.addForm=!1,this.unitsForm.patchValue(i))})})}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(o=>o.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new A.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Unit list",10,10),M()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Title"},{header:"Is Active"}]}),e.save("unit.pdf")}getVisibleDataFromTable(){const e=[],o=document.getElementById("mytable"),i=o.querySelector("thead tr"),s=o.querySelectorAll("tbody tr"),a=[];return i.querySelectorAll("th").forEach(r=>{const _=r.textContent.trim();"Is Active"!==_&&"Action"!==_&&a.push(_)}),e.push(a),s.forEach(r=>{const _=[];r.querySelectorAll("td").forEach(T=>{_.push(T.textContent.trim())}),e.push(_)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),o=g.P6.aoa_to_sheet(e),i=g.P6.book_new();g.P6.book_append_sheet(i,o,"Sheet1");const s=g.cW(i,{bookType:"xlsx",type:"array"}),a=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,J.saveAs)(a,"unit.xlsx")}printTable(){const e=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,a=e.cloneNode(!0),r=a.querySelector("th.thone:nth-child(4)");r&&r.remove();const _=a.querySelector("th.thone:last-child");_&&_.remove(),a.querySelectorAll("tr").forEach(x=>{const Z=x.querySelector("td:nth-child(4)");Z&&Z.remove();const C=x.querySelector("td:last-child");C&&C.remove()});const pt=a.outerHTML,gt="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+pt,ht=document.body.innerHTML;document.body.innerHTML=gt,window.print(),document.body.innerHTML=ht}static#t=this.\u0275fac=function(o){return new(o||n)(t.Y36(q.p),t.Y36(S._),t.Y36(d.qu),t.Y36(I._W),t.Y36(p.F0),t.Y36(F.J))};static#e=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-unit"]],decls:81,vars:12,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Units...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-lg-5 col-sm-5 col-12",4,"ngIf"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-1",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"col-lg-12","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title","placeholder","Enter Units",3,"ngClass"],["class","text-danger",4,"ngIf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],["type","text","formControlName","title","id","title",3,"ngClass"]],template:function(o,i){1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Unit list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"View/Search Units"),t.qZA()(),t.YNc(8,P,2,1,"div",5),t.qZA(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"a",11),t._UZ(15,"img",12),t.TgZ(16,"span"),t._UZ(17,"img",13),t.qZA()()(),t.TgZ(18,"div",14)(19,"a",15),t._UZ(20,"img",16),t.qZA(),t.TgZ(21,"div",17)(22,"label")(23,"input",18),t.NdJ("ngModelChange",function(a){return i.titlee=a})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(24,"div",19)(25,"ul")(26,"li")(27,"a",20),t.NdJ("click",function(){return i.generatePDF()}),t._UZ(28,"img",21),t.qZA()(),t.TgZ(29,"li")(30,"a",22),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(31,"img",23),t.qZA()(),t.TgZ(32,"li")(33,"a",24),t.NdJ("click",function(){return i.printTable()}),t._UZ(34,"img",25),t.qZA()()()()(),t.TgZ(35,"div",26)(36,"table",27)(37,"thead")(38,"tr")(39,"th",28),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(40,"label",29),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(41,"input",30),t.NdJ("ngModelChange",function(a){return i.allSelected=a})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(42,"span",31),t.qZA(),t._UZ(43,"i",32),t.qZA(),t.TgZ(44,"th",28),t.NdJ("click",function(){return i.sort("id")}),t._uU(45,"Sr.No. "),t._UZ(46,"i",32),t.qZA(),t.TgZ(47,"th",28),t.NdJ("click",function(){return i.sort("id")}),t._uU(48,"Units "),t._UZ(49,"i",32),t.qZA(),t.TgZ(50,"th",28),t.NdJ("click",function(){return i.sort("id")}),t._uU(51,"Is Active "),t._UZ(52,"i",32),t.qZA(),t.YNc(53,Q,3,0,"th",33),t.qZA()(),t.YNc(54,R,4,11,"tbody",34)(55,L,5,0,"tbody",34),t.qZA(),t.TgZ(56,"div",35),t.YNc(57,H,1,0,"mat-progress-bar",36),t.qZA(),t.TgZ(58,"div",0)(59,"div",37)(60,"div",38),t._uU(61," Show per page "),t.TgZ(62,"select",39),t.NdJ("ngModelChange",function(a){return i.itemsPerPage=a}),t.TgZ(63,"option",40),t._uU(64,"10"),t.qZA(),t.TgZ(65,"option",41),t._uU(66,"20"),t.qZA(),t.TgZ(67,"option",42),t._uU(68,"30"),t.qZA(),t.TgZ(69,"option",43),t._uU(70,"50"),t.qZA(),t.TgZ(71,"option",44),t._uU(72,"100"),t.qZA(),t.TgZ(73,"option",45),t._uU(74,"All"),t.qZA()()()(),t.TgZ(75,"div",46)(76,"div",47)(77,"pagination-controls",48),t.NdJ("pageChange",function(a){return i.p=a}),t.qZA(),t.TgZ(78,"div",49),t._uU(79),t.qZA()()()()()()()(),t.YNc(80,lt,7,4,"div",50),t.qZA()),2&o&&(t.xp6(8),t.Q6J("ngIf",!i.addForm),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(18),t.Q6J("ngModel",i.allSelected),t.xp6(12),t.Q6J("ngIf",i.isEdit||i.isDelete),t.xp6(1),t.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==i.tableData?null:i.tableData.length)&&!i.loader),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(17),t.lnq("Showing ",i.itemsPerPage," to ",i.itemsPerPage," of ",i.itemsPerPage," entries"),t.xp6(1),t.Q6J("ngIf",i.isAdd||i.isEdit))},dependencies:[m.mk,m.sg,m.O5,p.rH,d._Y,d.YN,d.Kr,d.Fj,d.Wl,d.EJ,d.JJ,d.JL,d.On,d.sg,d.u,N.pW,f.LS,w.Rr,f._s,k.T],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']})}return n})();var ct=c(1971);const b=JSON.parse(localStorage.getItem("auth")),rt=[];b&&b.map(l=>{"product"===l.content_type.app_label&&"unit"===l.content_type.model&&rt.push(l.codename)});const dt=[{path:"",component:at,canActivate:[ct.l],data:{allowedRoles:["add_unit","change_unit","delete_unit","view_unit"]}}];let _t=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[p.Bz.forChild(dt),p.Bz]})}return n})();var ut=c(16047);let mt=(()=>{class n{static#t=this.\u0275fac=function(o){return new(o||n)};static#e=this.\u0275mod=t.oAB({type:n});static#i=this.\u0275inj=t.cJS({imports:[m.ez,_t,ut.I]})}return n})()}}]);