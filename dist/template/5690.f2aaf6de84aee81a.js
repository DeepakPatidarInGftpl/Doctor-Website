"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5690],{3359:(k,A,l)=>{l.r(A),l.d(A,{TaxModule:()=>ht});var f=l(36895),M=l(88996),_=l(24006),I=l(35226),Z=l.n(I),c=l(53583),d=l(12983),r=l.n(d),u=l(80574),g=l(94327),t=l(94650),h=l(80927),T=l(72326),v=l(97185),x=l(42917),y=l(73162),b=l(54333),q=l(90455),J=l(54040);function S(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",49),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.openaddForm())}),t._UZ(1,"img",50),t._uU(2,"Add Tax "),t.qZA()}}function E(n,a){if(1&n&&(t.TgZ(0,"div",47),t.YNc(1,S,3,0,"a",48),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function Q(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"th",24),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",28),t.qZA()}}function Y(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",59),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.editForm(o.id))}),t._UZ(1,"img",60),t.qZA()}}function R(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"a",61),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),s=o.index,p=o.$implicit,m=t.oxw(2);return t.KtG(m.confirmText(s,p.id))}),t._UZ(1,"img",62),t.qZA()}}function B(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",52)(3,"input",53),t.NdJ("ngModelChange",function(o){const p=t.CHM(e).index,m=t.oxw(2);return t.KtG(m.selectedRows[p]=o)}),t.qZA(),t._UZ(4,"span",27),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",54)(8,"a",55),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"mat-slide-toggle",56),t.NdJ("click",function(){const o=t.CHM(e),s=o.$implicit,p=o.index,m=t.oxw(2);return t.KtG(s.is_active?m.deActivate(p,s.id):m.Active(p,s.id))})("ngModelChange",function(o){const p=t.CHM(e).$implicit;return t.KtG(p.is_active=o)}),t.qZA()(),t.TgZ(14,"td"),t.YNc(15,Y,2,0,"a",57),t.YNc(16,R,2,0,"a",58),t.qZA()()}if(2&n){const e=a.$implicit,i=a.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[i]),t.xp6(3),t.Oqu(i+1),t.xp6(3),t.Oqu(e.title),t.xp6(2),t.Oqu(e.tax_percentage),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const O=function(n,a){return{itemsPerPage:n,currentPage:a}};function L(n,a){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,B,17,7,"tr",51),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,O,e.itemsPerPage,e.p)))}}function H(n,a){1&n&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",63)(3,"p",64),t._uU(4,"Data not available"),t.qZA()()()())}function j(n,a){1&n&&t._UZ(0,"mat-progress-bar",65)}function G(n,a){1&n&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Tax "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Create new Tax "),t.qZA()())}function K(n,a){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,G,5,0,"div",30),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function z(n,a){1&n&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Update Tax "),t.qZA()())}function V(n,a){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,z,3,0,"div",30),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isEdit)}}function W(n,a){1&n&&(t.TgZ(0,"span",78),t._uU(1,"Enter Tax Name "),t.qZA())}function X(n,a){1&n&&(t.TgZ(0,"span",78),t._uU(1,"Enter Tax Percentage "),t.qZA())}function tt(n,a){1&n&&(t.TgZ(0,"button",79),t._uU(1,"Submit"),t.qZA())}function et(n,a){1&n&&(t.TgZ(0,"button",80),t._UZ(1,"span",81),t._uU(2," Submit"),t.qZA())}const N=function(n){return{"is-invalid":n}};function nt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",69),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw(3);return t.KtG(o.submit())}),t.TgZ(2,"div",0)(3,"div",70)(4,"div",71)(5,"label"),t._uU(6,"Tax Name*"),t.qZA(),t._UZ(7,"input",72),t.YNc(8,W,2,0,"span",73),t.qZA()(),t.TgZ(9,"div",70)(10,"div",71)(11,"label"),t._uU(12,"Tax Percentage %*"),t.qZA(),t._UZ(13,"input",74),t.YNc(14,X,2,0,"span",73),t.qZA()(),t.TgZ(15,"div",75),t.YNc(16,tt,2,0,"button",76),t.YNc(17,et,3,0,"button",77),t.qZA()()()()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.taxForm),t.xp6(6),t.Q6J("ngClass",t.VKq(7,N,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(9,N,e.f.tax_percentage.touched&&e.f.tax_percentage.invalid)),t.xp6(1),t.Q6J("ngIf",e.tax_percentage&&e.tax_percentage.invalid&&e.tax_percentage.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function it(n,a){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,nt,18,11,"div",68),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.addForm)}}function ot(n,a){1&n&&(t.TgZ(0,"span",78),t._uU(1,"Enter Title "),t.qZA())}function at(n,a){1&n&&(t.TgZ(0,"span",78),t._uU(1,"Enter Tax Percentage "),t.qZA())}function st(n,a){1&n&&(t.TgZ(0,"button",79),t._uU(1,"Submit"),t.qZA())}function lt(n,a){1&n&&(t.TgZ(0,"button",80),t._UZ(1,"span",81),t._uU(2," Submit"),t.qZA())}function rt(n,a){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",69),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw(3);return t.KtG(o.update())}),t.TgZ(2,"div",0)(3,"div",70)(4,"div",71)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",82),t.YNc(8,ot,2,0,"span",73),t.qZA()(),t.TgZ(9,"div",70)(10,"div",71)(11,"label"),t._uU(12,"Tax Percentage*"),t.qZA(),t._UZ(13,"input",83),t.YNc(14,at,2,0,"span",73),t.qZA()(),t.TgZ(15,"div",75),t.YNc(16,st,2,0,"button",76),t.YNc(17,lt,3,0,"button",77),t.qZA()()()()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.taxForm),t.xp6(6),t.Q6J("ngClass",t.VKq(7,N,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(9,N,e.f.tax_percentage.touched&&e.f.tax_percentage.invalid)),t.xp6(1),t.Q6J("ngIf",e.tax_percentage&&e.tax_percentage.invalid&&e.tax_percentage.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function ct(n,a){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,rt,18,11,"div",68),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.addForm)}}function dt(n,a){if(1&n&&(t.TgZ(0,"div",66)(1,"div",2),t.YNc(2,K,2,1,"div",67),t.YNc(3,V,2,1,"div",67),t.qZA(),t.TgZ(4,"div",6),t.YNc(5,it,2,1,"div",30),t.YNc(6,ct,2,1,"div",30),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.addForm),t.xp6(1),t.Q6J("ngIf",!e.addForm),t.xp6(2),t.Q6J("ngIf",e.isAdd),t.xp6(1),t.Q6J("ngIf",e.isEdit)}}let pt=(()=>{class n{constructor(e,i,o,s,p){this.coreService=e,this.QueryService=i,this.fb=o,this.toastr=s,this.cs=p,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.loaders=!1,this.addForm=!0,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}get f(){return this.taxForm.controls}confirmText(e,i){Z().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.coreService.deletetax(i).subscribe(s=>{this.delRes=s,this.delRes.success?(this.ngOnInit(),Z().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):Z().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(e,i){Z().fire({title:"Are you sure?",text:"Do you want to Deactivate this tax!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.taxIsActive(i,"").subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),Z().fire({icon:"success",title:"Deactivate!",text:"Tax Is Deactivate Successfully."}))})}Active(e,i){Z().fire({title:"Are you sure?",text:"Do you want to Active this tax!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.taxIsActive(i,"").subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),Z().fire({icon:"success",title:"Active!",text:"Tax Is Active Successfully."}))})}ngOnInit(){this.taxForm=this.fb.group({title:new _.NI("",[_.kI.required]),tax_percentage:new _.NI("",[_.kI.required,_.kI.pattern(/^[0-9]*$/)])}),this.coreService.gettaxd().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(o=>{"product"===o.content_type.app_label&&"tax"===o.content_type.model&&"add_tax"==o.codename?this.isAdd=o.codename:"product"===o.content_type.app_label&&"tax"===o.content_type.model&&"change_tax"==o.codename?this.isEdit=o.codename:"product"===o.content_type.app_label&&"tax"===o.content_type.model&&"delete_tax"==o.codename&&(this.isDelete=o.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deletetax(e).subscribe(i=>{this.delRes=i,"Tax Deleted successfully"==this.delRes.msg&&window.location.reload()})}submit(){this.taxForm.valid?(this.loaders=!0,this.coreService.addtax(this.taxForm.value).subscribe(e=>{this.addRes=e,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.taxForm.reset(),this.ngOnInit()):this.toastr.error(this.addRes.tax_percentage)},e=>{})):this.taxForm.markAllAsTouched()}update(){this.taxForm.valid?(this.loaders=!0,this.coreService.updatetax(this.taxForm.value,this.id).subscribe(e=>{this.addRes=e,this.addRes.success&&(this.loaders=!1,this.addForm=!0,this.toastr.success(this.addRes.msg),this.taxForm.reset(),this.ngOnInit())},e=>{})):this.taxForm.markAllAsTouched()}get title(){return this.taxForm.get("title")}get tax_percentage(){return this.taxForm.get("tax_percentage")}editForm(e){this.id=e,this.coreService.gettaxById(e).subscribe(i=>{i.map(o=>{e==o.id&&(this.addForm=!1,this.taxForm.patchValue(o),this.editFormdata=i)})})}openaddForm(){this.addForm=!0,this.taxForm.reset()}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(i=>i.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new c.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Tax List",10,10),r()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Title"},{header:"Tax Percentage"},{header:"Is Active"}]}),e.save("tax.pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable"),o=i.querySelector("thead tr"),s=i.querySelectorAll("tbody tr"),p=[];return o.querySelectorAll("th").forEach(m=>{const C=m.textContent.trim();"Is Active"!==C&&"Action"!==C&&p.push(C)}),e.push(p),s.forEach(m=>{const C=[];m.querySelectorAll("td").forEach(w=>{C.push(w.textContent.trim())}),e.push(C)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=u.P6.aoa_to_sheet(e),o=u.P6.book_new();u.P6.book_append_sheet(o,i,"Sheet1");const s=u.cW(o,{bookType:"xlsx",type:"array"}),p=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,g.saveAs)(p,"tax.xlsx")}printTable(){const e=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,p=e.cloneNode(!0),m=p.querySelector("th.thone:nth-child(5)");m&&m.remove();const C=p.querySelector("th.thone:last-child");C&&C.remove(),p.querySelectorAll("tr").forEach(F=>{const D=F.querySelector("td:nth-child(5)");D&&D.remove();const P=F.querySelector("td:last-child");P&&P.remove()});const xt=p.outerHTML,Tt="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+xt,vt=document.body.innerHTML;document.body.innerHTML=Tt,window.print(),document.body.innerHTML=vt}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.p),t.Y36(T._),t.Y36(_.qu),t.Y36(v._W),t.Y36(x.J))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tax"]],decls:79,vars:12,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Tax Name",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-lg-5 col-sm-5 col-12",4,"ngIf"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],["href","javascript:void(0);",2,"line-height","3"],[3,"ngModel","click","ngModelChange"],["class","me-3",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-3",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","placeholder","Enter Tax Name","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","tax_percentage","placeholder","Enter Tax Percentage","id","tax_percentage",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],["type","text","formControlName","title","id","title",3,"ngClass"],["type","text","formControlName","tax_percentage","id","tax_percentage",3,"ngClass"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Tax list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Tax"),t.qZA()(),t.YNc(8,E,2,1,"div",5),t.qZA(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"a",11),t._UZ(15,"img",12),t.qZA(),t.TgZ(16,"div",13)(17,"label")(18,"input",14),t.NdJ("ngModelChange",function(s){return i.titlee=s})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(19,"div",15)(20,"ul")(21,"li")(22,"a",16),t.NdJ("click",function(){return i.generatePDF()}),t._UZ(23,"img",17),t.qZA()(),t.TgZ(24,"li")(25,"a",18),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return i.printTable()}),t._UZ(29,"img",21),t.qZA()()()()(),t.TgZ(30,"div",22)(31,"table",23)(32,"thead")(33,"tr")(34,"th",24),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(35,"label",25),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(36,"input",26),t.NdJ("ngModelChange",function(s){return i.allSelected=s})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(37,"span",27),t.qZA(),t._UZ(38,"i",28),t.qZA(),t.TgZ(39,"th",24),t.NdJ("click",function(){return i.sort("id")}),t._uU(40,"Sr.No. "),t._UZ(41,"i",28),t.qZA(),t.TgZ(42,"th",24),t.NdJ("click",function(){return i.sort("id")}),t._uU(43,"Tax Name "),t._UZ(44,"i",28),t.qZA(),t.TgZ(45,"th",24),t.NdJ("click",function(){return i.sort("id")}),t._uU(46,"Tax % "),t._UZ(47,"i",28),t.qZA(),t.TgZ(48,"th",24),t.NdJ("click",function(){return i.sort("id")}),t._uU(49,"Is Active "),t._UZ(50,"i",28),t.qZA(),t.YNc(51,Q,3,0,"th",29),t.qZA()(),t.YNc(52,L,4,11,"tbody",30),t.YNc(53,H,5,0,"tbody",30),t.qZA(),t.TgZ(54,"div",31),t.YNc(55,j,1,0,"mat-progress-bar",32),t.qZA(),t.TgZ(56,"div",0)(57,"div",33)(58,"div",34),t._uU(59," Show per page "),t.TgZ(60,"select",35),t.NdJ("ngModelChange",function(s){return i.itemsPerPage=s}),t.TgZ(61,"option",36),t._uU(62,"10"),t.qZA(),t.TgZ(63,"option",37),t._uU(64,"20"),t.qZA(),t.TgZ(65,"option",38),t._uU(66,"30"),t.qZA(),t.TgZ(67,"option",39),t._uU(68,"50"),t.qZA(),t.TgZ(69,"option",40),t._uU(70,"100"),t.qZA(),t.TgZ(71,"option",41),t._uU(72,"All"),t.qZA()()()(),t.TgZ(73,"div",42)(74,"div",43)(75,"pagination-controls",44),t.NdJ("pageChange",function(s){return i.p=s}),t.qZA(),t.TgZ(76,"div",45),t._uU(77),t.qZA()()()()()()()(),t.YNc(78,dt,7,4,"div",46),t.qZA()),2&e&&(t.xp6(8),t.Q6J("ngIf",!i.addForm),t.xp6(10),t.Q6J("ngModel",i.titlee),t.xp6(18),t.Q6J("ngModel",i.allSelected),t.xp6(15),t.Q6J("ngIf",i.isEdit||i.isDelete),t.xp6(1),t.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==i.tableData?null:i.tableData.length)&&!i.loader),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(17),t.lnq("Showing ",i.itemsPerPage," to ",i.itemsPerPage," of ",i.itemsPerPage," entries"),t.xp6(1),t.Q6J("ngIf",i.isAdd||i.isEdit))},dependencies:[f.mk,f.sg,f.O5,_._Y,_.YN,_.Kr,_.Fj,_.Wl,_.EJ,_.JJ,_.JL,_.On,_.sg,_.u,y.pW,b.LS,q.Rr,b._s,J.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),n})();var _t=l(30597);const U=JSON.parse(localStorage.getItem("auth")),ut=[];U&&U.map(a=>{"product"===a.content_type.app_label&&"tax"===a.content_type.model&&ut.push(a.codename)});const gt=[{path:"",component:pt,canActivate:[_t.l],data:{allowedRoles:["add_tax","change_tax","delete_tax","view_tax"]}}];let mt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[M.Bz.forChild(gt),M.Bz]}),n})();var ft=l(8468);let ht=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[f.ez,mt,ft.I]}),n})()},65415:(k,A,l)=>{l.d(A,{G:()=>_,T:()=>Z});var f=l(94650),_=function(){function c(d,r,u){this.el=d,this.vcr=r,this.renderer=u,this.dtOptions={}}return c.prototype.ngOnInit=function(){var d=this;this.dtTrigger?this.dtTrigger.subscribe(function(r){d.displayTable(r)}):this.displayTable(null)},c.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},c.prototype.displayTable=function(d){var r=this;d&&(this.dtOptions=d),this.dtInstance=new Promise(function(u,g){Promise.resolve(r.dtOptions).then(function(t){0===Object.keys(t).length&&0===$("tbody tr",r.el.nativeElement).length?g("Both the table and dtOptions cannot be empty"):setTimeout(function(){var T={rowCallback:function(v,x,y){if(t.columns){var b=t.columns;r.applyNgPipeTransform(v,b),r.applyNgRefTemplate(v,b,x)}t.rowCallback&&t.rowCallback(v,x,y)}};T=Object.assign({},t,T),r.dt=$(r.el.nativeElement).DataTable(T),u(r.dt)})})})},c.prototype.applyNgPipeTransform=function(d,r){r.filter(function(g){return g.ngPipeInstance&&!g.ngTemplateRef}).forEach(function(g){var t=g.ngPipeInstance,h=g.ngPipeArgs||[],T=r.findIndex(function(b){return b.data===g.data}),v=d.childNodes.item(T),x=$(v).text(),y=t.transform.apply(t,function(c,d,r){if(r||2===arguments.length)for(var t,u=0,g=d.length;u<g;u++)(t||!(u in d))&&(t||(t=Array.prototype.slice.call(d,0,u)),t[u]=d[u]);return c.concat(t||Array.prototype.slice.call(d))}([x],h,!1));$(v).text(y)})},c.prototype.applyNgRefTemplate=function(d,r,u){var g=this;r.filter(function(h){return h.ngTemplateRef&&!h.ngPipeInstance}).forEach(function(h){var T=h.ngTemplateRef,v=T.ref,x=T.context,y=r.findIndex(function(S){return S.data===h.data}),b=d.childNodes.item(y);$(b).html("");var q=Object.assign({},x,x?.userData,{adtData:u}),J=g.vcr.createEmbeddedView(v,q);g.renderer.appendChild(b,J.rootNodes[0])})},c.\u0275fac=function(r){return new(r||c)(f.Y36(f.SBq),f.Y36(f.s_b),f.Y36(f.Qsj))},c.\u0275dir=f.lG2({type:c,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),c}(),I=l(36895),Z=function(){function c(){}return c.forRoot=function(){return{ngModule:c}},c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[I.ez]}),c}()}}]);