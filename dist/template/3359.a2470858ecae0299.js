"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3359],{3359:(F,b,r)=>{r.r(b),r.d(b,{TaxModule:()=>mt});var _=r(36895),x=r(89299),c=r(24006),S=r(35226),g=r.n(S),Z=r(96166),m=r(12983),C=r.n(m),p=r(80574),A=r(94327),t=r(94650),h=r(80927),f=r(97185),T=r(42917),y=r(73162),v=r(54333),D=r(90455),P=r(54040);function w(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"a",50),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.openaddForm())}),t._UZ(1,"img",51),t._uU(2,"Add Tax "),t.qZA()}}function E(n,s){if(1&n&&(t.TgZ(0,"div",48),t.YNc(1,w,3,0,"a",49),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function k(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"th",24),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",28),t.qZA()}}function R(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"a",62),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.editForm(o.id))}),t._UZ(1,"img",63),t.qZA()}}function L(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"a",64),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),a=o.index,l=o.$implicit,d=t.oxw(2);return t.KtG(d.confirmText(a,l.id))}),t._UZ(1,"img",65),t.qZA()}}function Y(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",53)(3,"input",54),t.NdJ("ngModelChange",function(o){const l=t.CHM(e).index,d=t.oxw(2);return t.KtG(d.selectedRows[l]=o)}),t.qZA(),t._UZ(4,"span",27),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",55)(8,"a",56),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"mat-slide-toggle",57),t.NdJ("click",function(){const o=t.CHM(e),a=o.$implicit,l=o.index,d=t.oxw(2);return t.KtG(a.is_active?d.deActivate(l,a.id):d.Active(l,a.id))})("ngModelChange",function(o){const l=t.CHM(e).$implicit;return t.KtG(l.is_active=o)}),t.qZA()(),t.TgZ(14,"td")(15,"a",58),t._UZ(16,"img",59),t.qZA(),t.YNc(17,R,2,0,"a",60),t.YNc(18,L,2,0,"a",61),t.qZA()()}if(2&n){const e=s.$implicit,i=s.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[i]),t.xp6(3),t.Oqu(i+1),t.xp6(2),t.MGl("routerLink","//product/tax-details/",null==e?null:e.id,""),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Oqu(e.tax_percentage),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//product/tax-details/",null==e?null:e.id,""),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const O=function(n,s){return{itemsPerPage:n,currentPage:s}};function Q(n,s){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,Y,19,9,"tr",52),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,O,e.itemsPerPage,e.p)))}}function B(n,s){1&n&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",66)(3,"p",67),t._uU(4,"Data not available"),t.qZA()()()())}function G(n,s){1&n&&t._UZ(0,"mat-progress-bar",68)}function H(n,s){1&n&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Tax "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Create new Tax "),t.qZA()())}function K(n,s){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,H,5,0,"div",30),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function z(n,s){1&n&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Update Tax "),t.qZA()())}function W(n,s){if(1&n&&(t.TgZ(0,"div",3),t.YNc(1,z,3,0,"div",30),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isEdit)}}function j(n,s){1&n&&(t.TgZ(0,"span",81),t._uU(1,"Enter Tax Name "),t.qZA())}function $(n,s){1&n&&(t.TgZ(0,"span",81),t._uU(1,"Enter Tax Percentage "),t.qZA())}function V(n,s){1&n&&(t.TgZ(0,"button",82),t._uU(1,"Submit"),t.qZA())}function X(n,s){1&n&&(t.TgZ(0,"button",83),t._UZ(1,"span",84),t._uU(2," Submit"),t.qZA())}const M=function(n){return{"is-invalid":n}};function tt(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",72),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw(3);return t.KtG(o.submit())}),t.TgZ(2,"div",0)(3,"div",73)(4,"div",74)(5,"label"),t._uU(6,"Tax Name*"),t.qZA(),t._UZ(7,"input",75),t.YNc(8,j,2,0,"span",76),t.qZA()(),t.TgZ(9,"div",73)(10,"div",74)(11,"label"),t._uU(12,"Tax Percentage %*"),t.qZA(),t._UZ(13,"input",77),t.YNc(14,$,2,0,"span",76),t.qZA()(),t.TgZ(15,"div",78),t.YNc(16,V,2,0,"button",79),t.YNc(17,X,3,0,"button",80),t.qZA()()()()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.taxForm),t.xp6(6),t.Q6J("ngClass",t.VKq(7,M,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(9,M,e.f.tax_percentage.touched&&e.f.tax_percentage.invalid)),t.xp6(1),t.Q6J("ngIf",e.tax_percentage&&e.tax_percentage.invalid&&e.tax_percentage.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function et(n,s){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,tt,18,11,"div",71),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.addForm)}}function nt(n,s){1&n&&(t.TgZ(0,"span",81),t._uU(1,"Enter Title "),t.qZA())}function it(n,s){1&n&&(t.TgZ(0,"span",81),t._uU(1,"Enter Tax Percentage "),t.qZA())}function ot(n,s){1&n&&(t.TgZ(0,"button",82),t._uU(1,"Submit"),t.qZA())}function at(n,s){1&n&&(t.TgZ(0,"button",83),t._UZ(1,"span",84),t._uU(2," Submit"),t.qZA())}function st(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",72),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw(3);return t.KtG(o.update())}),t.TgZ(2,"div",0)(3,"div",73)(4,"div",74)(5,"label"),t._uU(6,"Title*"),t.qZA(),t._UZ(7,"input",85),t.YNc(8,nt,2,0,"span",76),t.qZA()(),t.TgZ(9,"div",73)(10,"div",74)(11,"label"),t._uU(12,"Tax Percentage*"),t.qZA(),t._UZ(13,"input",86),t.YNc(14,it,2,0,"span",76),t.qZA()(),t.TgZ(15,"div",78),t.YNc(16,ot,2,0,"button",79),t.YNc(17,at,3,0,"button",80),t.qZA()()()()}if(2&n){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.taxForm),t.xp6(6),t.Q6J("ngClass",t.VKq(7,M,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(9,M,e.f.tax_percentage.touched&&e.f.tax_percentage.invalid)),t.xp6(1),t.Q6J("ngIf",e.tax_percentage&&e.tax_percentage.invalid&&e.tax_percentage.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function lt(n,s){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,st,18,11,"div",71),t.qZA()),2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.addForm)}}function rt(n,s){if(1&n&&(t.TgZ(0,"div",69)(1,"div",2),t.YNc(2,K,2,1,"div",70),t.YNc(3,W,2,1,"div",70),t.qZA(),t.TgZ(4,"div",6),t.YNc(5,et,2,1,"div",30),t.YNc(6,lt,2,1,"div",30),t.qZA()()),2&n){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.addForm),t.xp6(1),t.Q6J("ngIf",!e.addForm),t.xp6(2),t.Q6J("ngIf",e.isAdd),t.xp6(1),t.Q6J("ngIf",e.isEdit)}}let ct=(()=>{class n{constructor(e,i,o,a,l){this.coreService=e,this.fb=i,this.toastr=o,this.cs=a,this.router=l,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.loaders=!1,this.addForm=!0,this.key="id",this.reverse=!1,this.navigateData=this.router.getCurrentNavigation()?.extras?.state?.id,this.navigateData&&this.editForm(this.navigateData)}get f(){return this.taxForm.controls}confirmText(e,i){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.coreService.deletetax(i).subscribe(a=>{this.delRes=a,this.delRes.success?(this.ngOnInit(),g().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):g().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(e,i){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this tax!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.taxIsActive(i,"").subscribe(a=>{this.delRes=a,this.delRes.success&&this.ngOnInit()}),g().fire({icon:"success",title:"Deactivate!",text:"Tax Is Deactivate Successfully."}))})}Active(e,i){g().fire({title:"Are you sure?",text:"Do you want to Active this tax!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.taxIsActive(i,"").subscribe(a=>{this.delRes=a,this.delRes.success&&this.ngOnInit()}),g().fire({icon:"success",title:"Active!",text:"Tax Is Active Successfully."}))})}ngOnInit(){this.taxForm=this.fb.group({title:new c.NI("",[c.kI.required]),tax_percentage:new c.NI("",[c.kI.required,c.kI.pattern(/^[0-9]*$/)])}),this.coreService.gettaxd().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(o=>{"product"===o.content_type.app_label&&"tax"===o.content_type.model&&"add_tax"==o.codename?this.isAdd=o.codename:"product"===o.content_type.app_label&&"tax"===o.content_type.model&&"change_tax"==o.codename?this.isEdit=o.codename:"product"===o.content_type.app_label&&"tax"===o.content_type.model&&"delete_tax"==o.codename&&(this.isDelete=o.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.coreService.deletetax(e).subscribe(i=>{this.delRes=i,"Tax Deleted successfully"==this.delRes.msg&&window.location.reload()})}submit(){this.taxForm.valid?(this.loaders=!0,this.coreService.addtax(this.taxForm.value).subscribe(e=>{this.addRes=e,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.taxForm.reset(),this.ngOnInit()):this.toastr.error(this.addRes.tax_percentage)},e=>{})):(this.taxForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}update(){this.taxForm.valid?(this.loaders=!0,this.coreService.updatetax(this.taxForm.value,this.id).subscribe(e=>{this.addRes=e,this.addRes.success&&(this.loaders=!1,this.addForm=!0,this.toastr.success(this.addRes.msg),this.taxForm.reset(),this.ngOnInit())},e=>{})):(this.taxForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get title(){return this.taxForm.get("title")}get tax_percentage(){return this.taxForm.get("tax_percentage")}editForm(e){this.id=e,this.coreService.gettaxById(e).subscribe(i=>{i.map(o=>{e==o.id&&(this.addForm=!1,this.taxForm.patchValue(o),this.editFormdata=i)})})}openaddForm(){this.addForm=!0,this.taxForm.reset()}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(i=>i.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new Z.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Tax List",10,10),C()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Title"},{header:"Tax Percentage"},{header:"Is Active"}]}),e.save("tax.pdf")}generatePDFAgain(){const e=new Z.default;e.setFontSize(12),e.setTextColor(33,43,54),e.text("Tax List",82,10),e.text("",10,15),C()(e,{head:[["#","Tax Name","Tax %"]],body:this.tableData.map((o,a)=>[a+1,o.title,o.tax_percentage]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),e.save("Tax .pdf")}getVisibleDataFromTable(){const e=[],i=document.getElementById("mytable"),o=i.querySelector("thead tr"),a=i.querySelectorAll("tbody tr"),l=[];return o.querySelectorAll("th").forEach(d=>{const u=d.textContent.trim();"Is Active"!==u&&"Action"!==u&&l.push(u)}),e.push(l),a.forEach(d=>{const u=[];d.querySelectorAll("td").forEach(N=>{u.push(N.textContent.trim())}),e.push(u)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),i=p.P6.aoa_to_sheet(e),o=p.P6.book_new();p.P6.book_append_sheet(o,i,"Sheet1");const a=p.cW(o,{bookType:"xlsx",type:"array"}),l=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,A.saveAs)(l,"tax.xlsx")}printTable(){const e=document.getElementById("mytable"),a=document.querySelector(".titl").outerHTML,l=e.cloneNode(!0),d=l.querySelector("th.thone:nth-child(5)");d&&d.remove();const u=l.querySelector("th.thone:last-child");u&&u.remove(),l.querySelectorAll("tr").forEach(U=>{const J=U.querySelector("td:nth-child(5)");J&&J.remove();const q=U.querySelector("td:last-child");q&&q.remove()});const ht=l.outerHTML,xt="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+ht,ft=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=xt,window.print(),document.body.innerHTML=ft}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.tableData.length)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(h.p),t.Y36(c.qu),t.Y36(f._W),t.Y36(T.J),t.Y36(x.F0))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-tax"]],decls:80,vars:12,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Tax Name",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-lg-5 col-sm-5 col-12",4,"ngIf"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-1",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","title","placeholder","Enter Tax Name","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","tax_percentage","placeholder","Enter Tax Percentage","id","tax_percentage",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"],["type","text","formControlName","title","id","title",3,"ngClass"],["type","text","formControlName","tax_percentage","id","tax_percentage",3,"ngClass"]],template:function(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Tax list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Tax"),t.qZA()(),t.YNc(8,E,2,1,"div",5),t.qZA(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"a",11),t._UZ(15,"img",12),t.qZA(),t.TgZ(16,"div",13)(17,"label")(18,"input",14),t.NdJ("ngModelChange",function(l){return i.titlee=l})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(19,"div",15)(20,"ul")(21,"li")(22,"a",16),t.NdJ("click",function(){return i.generatePDFAgain()}),t._UZ(23,"img",17),t.qZA()(),t.TgZ(24,"li")(25,"a",18),t.NdJ("click",function(){return i.exportToExcel()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return i.printTable()}),t._UZ(29,"img",21),t.qZA()()()()(),t.TgZ(30,"div",22)(31,"table",23)(32,"thead")(33,"tr")(34,"th",24),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(35,"label",25),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(36,"input",26),t.NdJ("ngModelChange",function(l){return i.allSelected=l})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(37,"span",27),t.qZA(),t._UZ(38,"i",28),t.qZA(),t.TgZ(39,"th",24),t.NdJ("click",function(){return i.sort("id")}),t._uU(40,"Sr.No. "),t._UZ(41,"i",28),t.qZA(),t.TgZ(42,"th",24),t.NdJ("click",function(){return i.sort("id")}),t._uU(43,"Tax Name "),t._UZ(44,"i",28),t.qZA(),t.TgZ(45,"th",24),t.NdJ("click",function(){return i.sort("id")}),t._uU(46,"Tax % "),t._UZ(47,"i",28),t.qZA(),t.TgZ(48,"th",24),t.NdJ("click",function(){return i.sort("id")}),t._uU(49,"Is Active "),t._UZ(50,"i",28),t.qZA(),t.YNc(51,k,3,0,"th",29),t.qZA()(),t.YNc(52,Q,4,11,"tbody",30),t.YNc(53,B,5,0,"tbody",30),t.qZA(),t.TgZ(54,"div",31),t.YNc(55,G,1,0,"mat-progress-bar",32),t.qZA(),t.TgZ(56,"div",0)(57,"div",33)(58,"div",34),t._uU(59," Show per page "),t.TgZ(60,"select",35,36),t.NdJ("ngModelChange",function(l){return i.itemsPerPage=l})("change",function(){t.CHM(o);const l=t.MAs(61);return t.KtG(i.changePg(l.value))}),t.TgZ(62,"option",37),t._uU(63,"10"),t.qZA(),t.TgZ(64,"option",38),t._uU(65,"20"),t.qZA(),t.TgZ(66,"option",39),t._uU(67,"30"),t.qZA(),t.TgZ(68,"option",40),t._uU(69,"50"),t.qZA(),t.TgZ(70,"option",41),t._uU(71,"100"),t.qZA(),t.TgZ(72,"option",42),t._uU(73,"All"),t.qZA()()()(),t.TgZ(74,"div",43)(75,"div",44)(76,"pagination-controls",45),t.NdJ("pageChange",function(l){return i.p=l}),t.qZA(),t.TgZ(77,"div",46),t._uU(78),t.qZA()()()()()()()(),t.YNc(79,rt,7,4,"div",47),t.qZA()}2&e&&(t.xp6(8),t.Q6J("ngIf",!i.addForm),t.xp6(10),t.Q6J("ngModel",i.titlee),t.xp6(18),t.Q6J("ngModel",i.allSelected),t.xp6(15),t.Q6J("ngIf",i.isEdit||i.isDelete),t.xp6(1),t.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==i.tableData?null:i.tableData.length)&&!i.loader),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(5),t.Q6J("ngModel",i.itemsPerPage),t.xp6(18),t.lnq("Showing ",i.itemsPerPage," to ",null==i.tableData?null:i.tableData.length," of ",i.p," entries"),t.xp6(1),t.Q6J("ngIf",i.isAdd||i.isEdit))},dependencies:[_.mk,_.sg,_.O5,x.yS,c._Y,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.JL,c.On,c.sg,c.u,y.pW,v.LS,D.Rr,v._s,P.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),n})();var dt=r(30597);const I=JSON.parse(localStorage.getItem("auth")),_t=[];I&&I.map(s=>{"product"===s.content_type.app_label&&"tax"===s.content_type.model&&_t.push(s.codename)});const pt=[{path:"",component:ct,canActivate:[dt.l],data:{allowedRoles:["add_tax","change_tax","delete_tax","view_tax"]}}];let gt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[x.Bz.forChild(pt),x.Bz]}),n})();var ut=r(8468);let mt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[_.ez,gt,ut.I]}),n})()},30597:(F,b,r)=>{r.d(b,{l:()=>Z});var _=r(94650),x=r(89299),c=r(97185),S=r(42917),g=r(80927);let Z=(()=>{class m{constructor(p,A,t,h,f){this.router=p,this.Arout=A,this.toastr=t,this.profileService=h,this.coreService=f}canActivate(p,A){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(h=>{this.userDetails=h,this.permissions=this.userDetails?.permission}),t){const h=p.data.allowedRoles;console.log(h,"allowedRoles");const f=t.some(T=>h.includes(T.codename));if(console.log(f),this.coreService.getProfile().subscribe(T=>{this.userDetails=T,this.profileService.setUserDetails(this.userDetails);const y=T?.permission,v=this.profileService.getUserDetails();(!v||v.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return m.\u0275fac=function(p){return new(p||m)(_.LFG(x.F0),_.LFG(x.gz),_.LFG(c._W),_.LFG(S.J),_.LFG(g.p))},m.\u0275prov=_.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);