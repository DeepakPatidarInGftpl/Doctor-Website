"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1287],{41287:(P,v,r)=>{r.r(v),r.d(v,{CategorylistModule:()=>gt});var g=r(36895),p=r(89299),b=r(92340),A=r(2454),m=r.n(A),x=r(96166),f=r(12983),M=r.n(f),u=r(80574),T=r(94327),t=r(94650),_=r(80927),C=r(97185),y=r(42917),d=r(24006);function Z(i,a){1&i&&(t.TgZ(0,"span",10),t._uU(1,"Fill The Details"),t.qZA())}function q(i,a){1&i&&(t.O4$(),t.TgZ(0,"svg",19),t._UZ(1,"path",20)(2,"path",21),t.qZA())}function k(i,a){if(1&i&&t._UZ(0,"img",22),2&i){const e=t.oxw(2);t.Q6J("src",e.url,t.LSH)}}function F(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13)(3,"input",14),t.NdJ("change",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.onFileChange(n))}),t.qZA(),t.TgZ(4,"div",15),t._UZ(5,"img",16),t.TgZ(6,"h4"),t._uU(7,"Drag and drop a file to upload"),t.qZA()()()(),t.TgZ(8,"div",12),t.YNc(9,q,3,0,"svg",17),t.YNc(10,k,1,1,"img",18),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(9),t.Q6J("ngIf",!e.url),t.xp6(1),t.Q6J("ngIf",e.url)}}function E(i,a){if(1&i&&t._UZ(0,"img",22),2&i){const e=t.oxw(2);t.Q6J("src",e.url,t.LSH)}}function L(i,a){if(1&i&&t._UZ(0,"img",22),2&i){const e=t.oxw(2);t.Q6J("src",e.imgUrl+e.updateData.image,t.LSH)}}function O(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",11)(1,"div",12)(2,"div",13)(3,"input",23),t.NdJ("change",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.onFileChange(n))}),t.qZA(),t.TgZ(4,"div",15),t._UZ(5,"img",16),t.TgZ(6,"h4"),t._uU(7,"Drag and drop a file to upload"),t.qZA()()()(),t.TgZ(8,"div",12),t.YNc(9,E,1,1,"img",18),t.YNc(10,L,1,1,"img",18),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(9),t.Q6J("ngIf",e.url),t.xp6(1),t.Q6J("ngIf",!e.url)}}function R(i,a){1&i&&(t.TgZ(0,"span",10),t._uU(1,"Upload an image"),t.qZA())}let w=(()=>{class i{constructor(e,o,n){this.CoreServ=e,this.toastr=o,this.route=n,this.token=localStorage.getItem("token"),this.imgUrl="https://pv.greatfuturetechno.com"}ngOnInit(){let e="";this.CoreServ.editThings.subscribe(c=>{this.editRoute=c,this.editRoute&&(e=c.title,this.updateData=c),this.formaddCateg=new d.cw({title:new d.NI(e,[d.kI.required]),image:new d.NI("")})});const s=JSON.parse(localStorage.getItem("auth"));s&&s.permission&&s.permission.map(l=>{"product"===l.content_type.app_label&&"productcategory"===l.content_type.model&&"add_productcategory"==l.codename?this.isAdd=l.codename:"product"===l.content_type.app_label&&"productcategory"===l.content_type.model&&"change_productcategory"==l.codename&&(this.isEdit=l.codename)})}onFileChange(e){const o=e.target.files[0];if(o){const n=new FileReader;n.readAsDataURL(o),n.onload=()=>{this.url=n.result}}this.formaddCateg.patchValue({image:o}),this.formaddCateg.get("image")?.updateValueAndValidity()}submitForm(){if(this.formaddCateg.invalid)this.formaddCateg.markAllAsTouched();else if(this.editRoute){(e=new FormData).append("title",this.formaddCateg.get("title")?.value);const o=this.formaddCateg.get("image")?.value;o&&o instanceof File?(e.append("image",o),this.CoreServ.editHttp(e,this.editRoute.id).subscribe(n=>{this.toastr.success(n.msg),n.success&&(this.formaddCateg.reset(),this.updateData="",this.url="",window.location.reload())})):this.CoreServ.editHttp(e,this.editRoute.id).subscribe(n=>{this.toastr.success(n.msg),n.success&&(this.formaddCateg.reset(),this.updateData="",this.url="",window.location.reload())})}else{var e;(e=new FormData).append("title",this.formaddCateg.get("title")?.value),e.append("image",this.formaddCateg.get("image")?.value),this.CoreServ.addCategory(e).subscribe(n=>{this.toastr.success(n.msg),n.success&&(this.formaddCateg.reset(),window.location.reload())})}}get title(){return this.formaddCateg.get("title")}get image(){return this.formaddCateg.get("image")}get discount(){return this.formaddCateg.get("discount")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(_.p),t.Y36(C._W),t.Y36(p.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-addcategory"]],decls:19,vars:6,consts:[[1,"card"],[1,"card-body"],["enctype","multipart/form-data",1,"row",3,"formGroup"],[1,"col-12"],[1,"form-group"],["type","text","formControlName","title","placeholder","Enter Category Name"],["class","text-danger",4,"ngIf"],[1,"col-lg-12"],["class","row",4,"ngIf"],[1,"btn","btn-submit","me-2",3,"click"],[1,"text-danger"],[1,"row"],[1,"col-lg-6"],[1,"image-upload"],["type","file","formControlName","image","required","",3,"change"],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","class","bi bi-image mx-5 svg","viewBox","0 0 16 16","style","height: 100px; width: 100px;",4,"ngIf"],["alt","","class","p_img",3,"src",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-image","mx-5","svg",2,"height","100px","width","100px"],["d","M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"],["d","M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"],["alt","",1,"p_img",3,"src"],["type","file","formControlName","image",3,"change"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label"),t._uU(6,"Category Name*"),t.qZA(),t._UZ(7,"input",5),t.YNc(8,Z,2,0,"span",6),t.qZA()(),t.TgZ(9,"div",7)(10,"div",4)(11,"label"),t._uU(12,"\tCategory Image*"),t.qZA(),t.YNc(13,F,11,2,"div",8),t.YNc(14,O,11,2,"div",8),t.YNc(15,R,2,0,"span",6),t.qZA()(),t.TgZ(16,"div",7)(17,"a",9),t.NdJ("click",function(){return o.submitForm()}),t._uU(18),t.qZA()()()()()),2&e&&(t.xp6(2),t.Q6J("formGroup",o.formaddCateg),t.xp6(6),t.Q6J("ngIf",o.title&&o.title.invalid&&o.title.touched),t.xp6(5),t.Q6J("ngIf",!o.editRoute),t.xp6(1),t.Q6J("ngIf",o.editRoute),t.xp6(1),t.Q6J("ngIf",o.image&&o.image.invalid&&o.image.touched),t.xp6(3),t.Oqu(o.editRoute?"Save Changes":"Submit"))},dependencies:[g.O5,d.Fj,d.JJ,d.JL,d.Q7,d.sg,d.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}"]}),i})();var B=r(73162),S=r(54333),Y=r(90455),Q=r(54040);function H(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"a",53),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.openaddForm())}),t._UZ(1,"img",54),t._uU(2,"Add State "),t.qZA()}}function G(i,a){if(1&i&&(t.TgZ(0,"div",51),t.YNc(1,H,3,0,"a",52),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function z(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"th",28),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",32),t.qZA()}}function K(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"a",67),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(),s=n.$implicit,c=n.index,l=t.oxw(2);return t.KtG(l.editThis(s,c))}),t._UZ(1,"img",68),t.qZA()}}function j(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"a",69),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(),s=n.index,c=n.$implicit,l=t.oxw(2);return t.KtG(l.confirmText(s,c.id))}),t._UZ(1,"img",70),t.qZA()}}function W(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",56)(3,"input",57),t.NdJ("ngModelChange",function(n){const c=t.CHM(e).index,l=t.oxw(2);return t.KtG(l.selectedRows[c]=n)}),t.qZA(),t._UZ(4,"span",31),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",58)(8,"a",59),t._UZ(9,"img",60),t.qZA()(),t.TgZ(10,"td")(11,"a",61),t._uU(12),t.qZA()(),t.TgZ(13,"td")(14,"mat-slide-toggle",62),t.NdJ("click",function(){const n=t.CHM(e),s=n.$implicit,c=n.index,l=t.oxw(2);return t.KtG(s.is_active?l.deActivate(c,s.id):l.Active(c,s.id))})("ngModelChange",function(n){const c=t.CHM(e).$implicit;return t.KtG(c.is_active=n)}),t.qZA()(),t.TgZ(15,"td")(16,"a",63),t._UZ(17,"img",64),t.qZA(),t.YNc(18,K,2,0,"a",65),t.YNc(19,j,2,0,"a",66),t.qZA()()}if(2&i){const e=a.$implicit,o=a.index,n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedRows[o]),t.xp6(3),t.Oqu(o+1),t.xp6(2),t.MGl("routerLink","//product/category-details/",null==e?null:e.id,""),t.xp6(1),t.Q6J("src",n.apiUrl+e.image,t.LSH),t.xp6(2),t.MGl("routerLink","//product/category-details/",null==e?null:e.id,""),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//product/category-details/",null==e?null:e.id,""),t.xp6(2),t.Q6J("ngIf",n.isEdit),t.xp6(1),t.Q6J("ngIf",n.isDelete)}}const V=function(i,a){return{itemsPerPage:i,currentPage:a}};function $(i,a){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,W,20,10,"tr",55),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,V,e.itemsPerPage,e.p)))}}function X(i,a){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",71)(3,"p",72),t._uU(4,"Data not available"),t.qZA()()()())}function tt(i,a){1&i&&t._UZ(0,"mat-progress-bar",73)}function et(i,a){if(1&i&&(t.TgZ(0,"div",74)(1,"div",75)(2,"div",76)(3,"h4"),t._uU(4),t.qZA(),t.TgZ(5,"h6"),t._uU(6),t.qZA()()(),t._UZ(7,"app-addcategory"),t.qZA()),2&i){const e=t.oxw();t.xp6(4),t.Oqu(e.editMode?" Edit Category":"Product Add Category"),t.xp6(2),t.Oqu(e.editMode?"Edit Product Category":"Create new product Category")}}let ot=(()=>{class i{constructor(e,o,n,s){this.coreServ=e,this.router=o,this.toastr=n,this.cs=s,this.dtOptions={},this.initChecked=!1,this.tableData=[],this.apiUrl=b.N.api,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.editMode=!1,this.key="id",this.reverse=!1}confirmText(e,o){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.coreServ.deleteProductCateg(o).subscribe(s=>{this.delRes=s,this.delRes.success?(this.ngOnInit(),m().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):m().fire({icon:"error",title:"Deleted!",text:this.delRes.error})})})}deActivate(e,o){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this Category!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreServ.categoryIsActive(o,"").subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Deactivate!",text:"Category Is Deactivate Successfully."}))})}Active(e,o){m().fire({title:"Are you sure?",text:"Do you want to Active this Category!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreServ.categoryIsActive(o,"").subscribe(s=>{this.delRes=s,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Active!",text:"Category Is Active Successfully."}))})}ngOnInit(){this.coreServ.getProductCategor().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(n=>{"product"===n.content_type.app_label&&"productcategory"===n.content_type.model&&"add_productcategory"==n.codename?this.isAdd=n.codename:"product"===n.content_type.app_label&&"productcategory"===n.content_type.model&&"change_productcategory"==n.codename?this.isEdit=n.codename:"product"===n.content_type.app_label&&"productcategory"===n.content_type.model&&"delete_productcategory"==n.codename&&(this.isDelete=n.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}editThis(e,o){this.coreServ.editThisData(e),this.editMode=!0}selectAll(e){this.tableData.forEach(e?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}search(){if(""===this.title)this.ngOnInit();else{const e=this.title.toLocaleLowerCase();this.tableData=this.tableData.filter(o=>o.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}ngOnDestroy(){this.coreServ.editThisData(null)}openaddForm(){this.editMode=!1,window.location.reload()}generatePDF(){const e=new x.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Category List",10,10),M()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Image"},{header:"Category name"},{header:"Is Active"}]}),e.save("category.pdf")}getVisibleDataFromTable(){const e=[],o=document.getElementById("mytable"),n=o.querySelector("thead tr"),s=o.querySelectorAll("tbody tr"),c=[];return n.querySelectorAll("th").forEach(l=>{const h=l.textContent.trim();"Is Active"!==h&&"Action"!==h&&c.push(h)}),e.push(c),s.forEach(l=>{const h=[];l.querySelectorAll("td").forEach(D=>{h.push(D.textContent.trim())}),e.push(h)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),o=u.P6.aoa_to_sheet(e),n=u.P6.book_new();u.P6.book_append_sheet(n,o,"Sheet1");const s=u.cW(n,{bookType:"xlsx",type:"array"}),c=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,T.saveAs)(c,"category.xlsx")}printTable(){const e=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,c=e.cloneNode(!0),l=c.querySelector("th.thone:nth-child(5)");l&&l.remove();const h=c.querySelector("th.thone:last-child");h&&h.remove(),c.querySelectorAll("tr").forEach(J=>{const I=J.querySelector("td:nth-child(5)");I&&I.remove();const N=J.querySelector("td:last-child");N&&N.remove()});const pt=c.outerHTML,ut="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+pt,mt=document.body.innerHTML;document.body.innerHTML=ut,window.print(),document.body.innerHTML=mt}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(_.p),t.Y36(p.F0),t.Y36(C._W),t.Y36(y.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-categorylist"]],decls:85,vars:12,consts:[[1,"page-header"],[1,"row"],[1,"col-7"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Category Name...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-5",4,"ngIf"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[1,"product-img",3,"routerLink"],["alt","product",3,"src"],[3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-1",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-5"],[1,"page-btn","d-flex","justify-content-between"],[1,"page-title","pe-4"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"h4",4),t._uU(6,"Product Category list"),t.qZA(),t.TgZ(7,"h6"),t._uU(8,"View/Search product Category"),t.qZA()(),t.YNc(9,G,2,1,"div",5),t.qZA(),t.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"a",11),t._UZ(16,"img",12),t.TgZ(17,"span"),t._UZ(18,"img",13),t.qZA()()(),t.TgZ(19,"div",14)(20,"a",15),t._UZ(21,"img",16),t.qZA(),t.TgZ(22,"div",17)(23,"label")(24,"input",18),t.NdJ("ngModelChange",function(s){return o.title=s})("ngModelChange",function(){return o.search()}),t.qZA()()()()(),t.TgZ(25,"div",19)(26,"ul")(27,"li")(28,"a",20),t.NdJ("click",function(){return o.generatePDF()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(32,"img",23),t.qZA()(),t.TgZ(33,"li")(34,"a",24),t.NdJ("click",function(){return o.printTable()}),t._UZ(35,"img",25),t.qZA()()()()(),t.TgZ(36,"div",26)(37,"table",27)(38,"thead")(39,"tr")(40,"th",28),t.NdJ("click",function(){return o.sort("id")}),t.TgZ(41,"label",29),t.NdJ("click",function(){return o.selectAll(o.initChecked)}),t.TgZ(42,"input",30),t.NdJ("ngModelChange",function(s){return o.allSelected=s})("change",function(){return o.selectAlll()}),t.qZA(),t._UZ(43,"span",31),t.qZA(),t._UZ(44,"i",32),t.qZA(),t.TgZ(45,"th",28),t.NdJ("click",function(){return o.sort("id")}),t._uU(46,"Sr.No."),t._UZ(47,"i",32),t.qZA(),t.TgZ(48,"th",28),t.NdJ("click",function(){return o.sort("id")}),t._uU(49,"Image "),t._UZ(50,"i",32),t.qZA(),t.TgZ(51,"th",28),t.NdJ("click",function(){return o.sort("id")}),t._uU(52,"Category name "),t._UZ(53,"i",32),t.qZA(),t.TgZ(54,"th",28),t.NdJ("click",function(){return o.sort("id")}),t._uU(55,"Is Active "),t._UZ(56,"i",32),t.qZA(),t.YNc(57,z,3,0,"th",33),t.qZA()(),t.YNc(58,$,4,11,"tbody",34),t.YNc(59,X,5,0,"tbody",34),t.qZA(),t.TgZ(60,"div",35),t.YNc(61,tt,1,0,"mat-progress-bar",36),t.qZA(),t.TgZ(62,"div",1)(63,"div",37)(64,"div",38),t._uU(65," Show per page "),t.TgZ(66,"select",39),t.NdJ("ngModelChange",function(s){return o.itemsPerPage=s}),t.TgZ(67,"option",40),t._uU(68,"10"),t.qZA(),t.TgZ(69,"option",41),t._uU(70,"20"),t.qZA(),t.TgZ(71,"option",42),t._uU(72,"30"),t.qZA(),t.TgZ(73,"option",43),t._uU(74,"50"),t.qZA(),t.TgZ(75,"option",44),t._uU(76,"100"),t.qZA(),t.TgZ(77,"option",45),t._uU(78,"All"),t.qZA()()()(),t.TgZ(79,"div",46)(80,"div",47)(81,"pagination-controls",48),t.NdJ("pageChange",function(s){return o.p=s}),t.qZA(),t.TgZ(82,"div",49),t._uU(83),t.qZA()()()()()()()(),t.YNc(84,et,8,2,"div",50),t.qZA()()),2&e&&(t.xp6(9),t.Q6J("ngIf",o.editMode),t.xp6(15),t.Q6J("ngModel",o.title),t.xp6(18),t.Q6J("ngModel",o.allSelected),t.xp6(15),t.Q6J("ngIf",o.isEdit||o.isDelete),t.xp6(1),t.Q6J("ngIf",(null==o.tableData?null:o.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==o.tableData?null:o.tableData.length)&&!o.loader),t.xp6(2),t.Q6J("ngIf",o.loader),t.xp6(5),t.Q6J("ngModel",o.itemsPerPage),t.xp6(17),t.lnq("Showing ",o.itemsPerPage," to ",o.itemsPerPage," of ",o.itemsPerPage," entries"),t.xp6(1),t.Q6J("ngIf",o.isAdd||o.isEdit))},dependencies:[g.sg,g.O5,p.yS,w,d.YN,d.Kr,d.Fj,d.Wl,d.EJ,d.JJ,d.On,B.pW,S.LS,Y.Rr,S._s,Q.T],styles:['.form-select[_ngcontent-%COMP%]{width:111%;font-size:14px}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),i})();var it=r(30597);const U=JSON.parse(localStorage.getItem("auth")),nt=[];U&&U.map(a=>{"product"===a.content_type.app_label&&"productcategory"===a.content_type.model&&nt.push(a.codename)});const at=[{path:"",component:ot,canActivate:[it.l],data:{allowedRoles:["add_productcategory","change_productcategory","delete_productcategory","view_productcategory"]}}];let st=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(at),p.Bz]}),i})();const rt=[{path:"",component:w}];let lt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.Bz.forChild(rt),p.Bz]}),i})(),ct=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.ez,lt,d.UX]}),i})();var dt=r(8468);let gt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.ez,st,ct,dt.I]}),i})()},30597:(P,v,r)=>{r.d(v,{l:()=>x});var g=r(94650),p=r(89299),b=r(97185),A=r(42917),m=r(80927);let x=(()=>{class f{constructor(u,T,t,_,C){this.router=u,this.Arout=T,this.toastr=t,this.profileService=_,this.coreService=C}canActivate(u,T){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),t){const _=u.data.allowedRoles;console.log(_,"allowedRoles");const C=t.some(y=>_.includes(y.codename));if(console.log(C),this.coreService.getProfile().subscribe(y=>{this.userDetails=y,this.profileService.setUserDetails(this.userDetails);const d=y?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==d.length)&&(this.profileService.setUserPermission(d),window.location.reload())}),C)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return f.\u0275fac=function(u){return new(u||f)(g.LFG(p.F0),g.LFG(p.gz),g.LFG(b._W),g.LFG(A.J),g.LFG(m.p))},f.\u0275prov=g.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()}}]);