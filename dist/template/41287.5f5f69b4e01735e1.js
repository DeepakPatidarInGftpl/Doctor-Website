"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[41287],{41287:(k,T,l)=>{l.r(T),l.d(T,{CategorylistModule:()=>At});var g=l(36895),u=l(4392),D=l(92340),M=l(2454),m=l.n(M),A=l(96166),f=l(12983),Z=l.n(f),p=l(80574),x=l(94327),t=l(94650),C=l(80927),v=l(97185),y=l(42917),c=l(24006),_=l(47957),b=l(3238),U=l(59549),w=l(44144);function L(i,r){if(1&i&&(t.TgZ(0,"mat-option",16),t._uU(1),t.qZA()),2&i){const e=r.$implicit;t.Q6J("value",null==e?null:e.title)("disabled",!0),t.xp6(1),t.Oqu(null==e?null:e.title)}}function O(i,r){if(1&i&&(t.ynx(0),t.YNc(1,L,2,3,"mat-option",15),t.BQk()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.categoryList)}}function E(i,r){1&i&&(t.TgZ(0,"mat-option",17),t._uU(1,"Please Enter 3 or more characters"),t.qZA())}function B(i,r){1&i&&(t.TgZ(0,"mat-error",18),t._uU(1,"Category name is required"),t.qZA())}const R=function(i){return{"is-invalid":i}};function Q(i,r){if(1&i&&(t.ynx(0),t.TgZ(1,"mat-form-field",10),t._UZ(2,"input",11),t.TgZ(3,"mat-autocomplete",null,12),t.YNc(5,O,2,1,"ng-container",5),t.ynx(6),t.YNc(7,E,2,0,"mat-option",13),t.BQk(),t.qZA(),t.YNc(8,B,2,0,"mat-error",14),t.qZA(),t.BQk()),2&i){const e=t.MAs(4),o=t.oxw();t.xp6(2),t.Q6J("formControl",o.categoryCtrl)("matAutocomplete",e)("ngClass",t.VKq(6,R,o.categoryCtrl.touched&&o.categoryCtrl.invalid)),t.xp6(3),t.Q6J("ngIf",(null==o.categoryCtrl.value?null:o.categoryCtrl.value.length)>2),t.xp6(2),t.Q6J("ngIf",(null==o.categoryCtrl.value?null:o.categoryCtrl.value.length)<3),t.xp6(1),t.Q6J("ngIf",o.categoryCtrl.touched&&o.categoryCtrl.invalid)}}function Y(i,r){1&i&&(t.TgZ(0,"span",20),t._uU(1,"Fill The Details"),t.qZA())}function H(i,r){if(1&i&&(t.ynx(0),t._UZ(1,"input",19),t.YNc(2,Y,2,0,"span",8),t.BQk()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched)}}function G(i,r){1&i&&(t.O4$(),t.TgZ(0,"svg",29),t._UZ(1,"path",30)(2,"path",31),t.qZA())}function z(i,r){if(1&i&&t._UZ(0,"img",32),2&i){const e=t.oxw(2);t.Q6J("src",e.url,t.LSH)}}function K(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",21)(1,"div",22)(2,"div",23)(3,"input",24),t.NdJ("change",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.onFileChange(n))}),t.qZA(),t.TgZ(4,"div",25),t._UZ(5,"img",26),t.TgZ(6,"h4"),t._uU(7,"Drag and drop a file to upload"),t.qZA()()()(),t.TgZ(8,"div",22),t.YNc(9,G,3,0,"svg",27),t.YNc(10,z,1,1,"img",28),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(9),t.Q6J("ngIf",!e.url),t.xp6(1),t.Q6J("ngIf",e.url)}}function V(i,r){if(1&i&&t._UZ(0,"img",32),2&i){const e=t.oxw(2);t.Q6J("src",e.url,t.LSH)}}function j(i,r){if(1&i&&t._UZ(0,"img",32),2&i){const e=t.oxw(2);t.Q6J("src",e.imgUrl+e.updateData.image,t.LSH)}}function W(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",21)(1,"div",22)(2,"div",23)(3,"input",33),t.NdJ("change",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.onFileChange(n))}),t.qZA(),t._UZ(4,"input",34),t.TgZ(5,"div",25),t._UZ(6,"img",26),t.TgZ(7,"h4"),t._uU(8,"Drag and drop a file to upload"),t.qZA()()()(),t.TgZ(9,"div",22),t.YNc(10,V,1,1,"img",28),t.YNc(11,j,1,1,"img",28),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(10),t.Q6J("ngIf",e.url),t.xp6(1),t.Q6J("ngIf",!e.url)}}function $(i,r){1&i&&(t.TgZ(0,"span",20),t._uU(1,"Upload an image"),t.qZA())}let S=(()=>{class i{constructor(e,o,n){this.CoreServ=e,this.toastr=o,this.route=n,this.categoryCtrl=new c.NI("",[c.kI.required]),this.token=localStorage.getItem("token"),this.imgUrl="https://pv.greatfuturetechno.com",this.onDataUpdate=new t.vpe}get f(){return this.formaddCateg.controls}ngOnInit(){let e="";this.getAllCategory(),this.categoryCtrl.valueChanges.subscribe(s=>{console.log(s),this._filterBrands(s)}),this.CoreServ.editThings.subscribe(s=>{this.editRoute=s,console.log(s),this.formaddCateg=new c.cw({title:new c.NI("",[c.kI.required]),image:new c.NI("",[c.kI.required])}),this.editRoute&&(e=s?.title,this.formaddCateg.get("title").setValue(s?.title),this.editImgUrl=s?.image,this.updateData=s)});const a=JSON.parse(localStorage.getItem("auth"));a&&a.permission&&a.permission.map(d=>{"product"===d.content_type.app_label&&"productcategory"===d.content_type.model&&"add_productcategory"==d.codename?this.isAdd=d.codename:"product"===d.content_type.app_label&&"productcategory"===d.content_type.model&&"change_productcategory"==d.codename&&(this.isEdit=d.codename)})}_filterBrands(e){const o=e?.toLowerCase();this.categoryList=this.allCategoryData.filter(n=>n?.title?.toLowerCase().includes(o))}onFileChange(e){const o=e.target.files[0];if(o){const n=new FileReader;n.readAsDataURL(o),n.onload=()=>{this.url=n.result}}this.formaddCateg.patchValue({image:o}),this.formaddCateg.get("image")?.updateValueAndValidity()}getAllCategory(){this.CoreServ.getProductCategor().subscribe(e=>{this.categoryList=e,this.allCategoryData=e})}submitForm(){const e=this.formaddCateg.get("image")?.value;if(this.editRoute&&!e&&this.formaddCateg.controls.image.setValue(this.editImgUrl),this.formaddCateg.invalid&&!this.categoryCtrl.value)this.formaddCateg.markAllAsTouched();else if(this.editRoute){(o=new FormData).append("title",this.formaddCateg.get("title")?.value);const n=this.formaddCateg.get("image")?.value;n&&n instanceof File?(o.append("image",n),this.CoreServ.editHttp(o,this.editRoute.id).subscribe(a=>{this.toastr.success(a.msg),a.success&&(this.formaddCateg.reset(),this.CoreServ.editThisData(""),this.onDataUpdate.next(new Date),this.updateData="",this.url="",this.ngOnInit())})):this.CoreServ.editHttp(o,this.editRoute.id).subscribe(a=>{this.toastr.success(a.msg),a.success&&(this.formaddCateg.reset(),this.CoreServ.editThisData(""),this.onDataUpdate.next(new Date),this.updateData="",this.url="",this.ngOnInit())})}else{var o;this.formaddCateg.get("title").setValue(this.categoryCtrl.value),(o=new FormData).append("title",this.categoryCtrl.value),o.append("image",this.formaddCateg.get("image")?.value),this.CoreServ.addCategory(o).subscribe(a=>{this.toastr.success(a.msg),a.success&&(this.formaddCateg.reset(),this.updateData="",this.url="",this.onDataUpdate.next(new Date),this.categoryCtrl.reset(),this.categoryCtrl.markAsPristine(),this.ngOnInit())})}}get title(){return this.formaddCateg.get("title")}get image(){return this.formaddCateg.get("image")}get discount(){return this.formaddCateg.get("discount")}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C.p),t.Y36(v._W),t.Y36(u.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-addcategory"]],outputs:{onDataUpdate:"onDataUpdate"},decls:19,vars:7,consts:[[1,"card"],[1,"card-body"],["enctype","multipart/form-data",1,"row",3,"formGroup"],[1,"col-12"],[1,"form-group"],[4,"ngIf"],[1,"col-lg-12"],["class","row",4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"btn","btn-submit","me-2",3,"click"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Category","aria-label","category","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],["class","is-loading",4,"ngIf"],["class","mt-3 error-msg",4,"ngIf"],["style","color:#FF9F43",3,"value","disabled",4,"ngFor","ngForOf"],[2,"color","#FF9F43",3,"value","disabled"],[1,"is-loading"],[1,"mt-3","error-msg"],["type","text","formControlName","title","placeholder","Enter Category Name"],[1,"text-danger"],[1,"row"],[1,"col-lg-6"],[1,"image-upload"],["type","file","formControlName","image","required","",3,"change"],[1,"image-uploads"],["src","assets/img/icons/upload.svg","alt","img"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","class","bi bi-image mx-5 svg","viewBox","0 0 16 16","style","height: 100px; width: 100px;",4,"ngIf"],["alt","","class","p_img",3,"src",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","width","20","height","20","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-image","mx-5","svg",2,"height","100px","width","100px"],["d","M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"],["d","M2.002 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2h-12zm12 1a1 1 0 0 1 1 1v6.5l-3.777-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12V3a1 1 0 0 1 1-1h12z"],["alt","",1,"p_img",3,"src"],["type","file",3,"change"],["type","hidden","formControlName","image"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"label"),t._uU(6,"Category Name*"),t.qZA(),t.YNc(7,Q,9,8,"ng-container",5),t.YNc(8,H,3,1,"ng-container",5),t.qZA()(),t.TgZ(9,"div",6)(10,"div",4)(11,"label"),t._uU(12," Category Image*"),t.qZA(),t.YNc(13,K,11,2,"div",7),t.YNc(14,W,12,2,"div",7),t.YNc(15,$,2,0,"span",8),t.qZA()(),t.TgZ(16,"div",6)(17,"a",9),t.NdJ("click",function(){return o.submitForm()}),t._uU(18),t.qZA()()()()()),2&e&&(t.xp6(2),t.Q6J("formGroup",o.formaddCateg),t.xp6(5),t.Q6J("ngIf",!o.editRoute),t.xp6(1),t.Q6J("ngIf",!!o.editRoute),t.xp6(5),t.Q6J("ngIf",!o.editRoute),t.xp6(1),t.Q6J("ngIf",o.editRoute),t.xp6(1),t.Q6J("ngIf",o.image&&o.image.invalid&&o.image.touched),t.xp6(3),t.Oqu(o.editRoute?"Save Changes":"Submit"))},dependencies:[g.mk,g.sg,g.O5,c.Fj,c.JJ,c.JL,c.Q7,c.oH,c.sg,c.u,_.XC,_.ZL,b.ey,U.TO,U.KE,w.Nt],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}.error-msg[_ngcontent-%COMP%]{font-size:14px}  .mat-form-field-required-marker{color:#637381!important}  .mat-form-field-label{color:#637381!important}"]}),i})();var X=l(73162),J=l(54333),tt=l(90455),et=l(54040);function ot(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"a",64),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.openaddForm())}),t._UZ(1,"img",65),t._uU(2,"Add State "),t.qZA()}}function it(i,r){if(1&i&&(t.TgZ(0,"div",62),t.YNc(1,ot,3,0,"a",63),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function nt(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"th",38),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",42),t.qZA()}}function at(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"a",78),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(),a=n.$implicit,s=n.index,d=t.oxw(2);return t.KtG(d.editThis(a,s))}),t._UZ(1,"img",79),t.qZA()}}function rt(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"a",80),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(),a=n.index,s=n.$implicit,d=t.oxw(2);return t.KtG(d.confirmText(a,s.id))}),t._UZ(1,"img",81),t.qZA()}}function st(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",67)(3,"input",68),t.NdJ("ngModelChange",function(n){const s=t.CHM(e).index,d=t.oxw(2);return t.KtG(d.selectedRows[s]=n)}),t.qZA(),t._UZ(4,"span",41),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",69)(8,"a",70),t._UZ(9,"img",71),t.qZA()(),t.TgZ(10,"td")(11,"a",72),t._uU(12),t.qZA()(),t.TgZ(13,"td")(14,"mat-slide-toggle",73),t.NdJ("click",function(){const n=t.CHM(e),a=n.$implicit,s=n.index,d=t.oxw(2);return t.KtG(a.is_active?d.deActivate(s,a.id):d.Active(s,a.id))})("ngModelChange",function(n){const s=t.CHM(e).$implicit;return t.KtG(s.is_active=n)}),t.qZA()(),t.TgZ(15,"td")(16,"a",74),t._UZ(17,"img",75),t.qZA(),t.YNc(18,at,2,0,"a",76),t.YNc(19,rt,2,0,"a",77),t.qZA()()}if(2&i){const e=r.$implicit,o=r.index,n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedRows[o]),t.xp6(3),t.Oqu(o+1),t.xp6(2),t.MGl("routerLink","//product/category-details/",null==e?null:e.id,""),t.xp6(1),t.Q6J("src",n.apiUrl+e.image,t.LSH),t.xp6(2),t.MGl("routerLink","//product/category-details/",null==e?null:e.id,""),t.xp6(1),t.Oqu(e.title),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//product/category-details/",null==e?null:e.id,""),t.xp6(2),t.Q6J("ngIf",n.isEdit),t.xp6(1),t.Q6J("ngIf",n.isDelete)}}const lt=function(i,r){return{itemsPerPage:i,currentPage:r}};function ct(i,r){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,st,20,10,"tr",66),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.filteredData,e.key,e.reverse),t.WLB(8,lt,e.itemsPerPage,e.p)))}}function dt(i,r){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",82)(3,"p",83),t._uU(4,"Data not available"),t.qZA()()()())}function gt(i,r){1&i&&t._UZ(0,"mat-progress-bar",84)}function ut(i,r){if(1&i){const e=t.EpF();t.TgZ(0,"div",85)(1,"div",86)(2,"div",87)(3,"h4"),t._uU(4),t.qZA(),t.TgZ(5,"h6"),t._uU(6),t.qZA()()(),t.TgZ(7,"app-addcategory",88),t.NdJ("onDataUpdate",function(n){t.CHM(e);const a=t.oxw();return t.KtG(a.onDataUpdate(n))}),t.qZA()()}if(2&i){const e=t.oxw();t.xp6(4),t.Oqu(e.editMode?" Edit Category":"Product Add Category"),t.xp6(2),t.Oqu(e.editMode?"Edit Product Category":"Create new product Category")}}let pt=(()=>{class i{constructor(e,o,n,a){this.coreServ=e,this.router=o,this.toastr=n,this.cs=a,this.dtOptions={},this.initChecked=!1,this.tableData=[],this.apiUrl=D.N.api,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.editMode=!1,this.key="id",this.reverse=!1}confirmText(e,o){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.coreServ.deleteProductCateg(o).subscribe(a=>{this.delRes=a,this.delRes.success?(this.ngOnInit(),m().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):m().fire({icon:"error",title:"Deleted!",text:this.delRes.error})})})}deActivate(e,o){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this Category!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreServ.categoryIsActive(o,"").subscribe(a=>{this.delRes=a,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Deactivate!",text:"Category Is Deactivate Successfully."}))})}Active(e,o){m().fire({title:"Are you sure?",text:"Do you want to Active this Category!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreServ.categoryIsActive(o,"").subscribe(a=>{this.delRes=a,this.delRes.success&&this.ngOnInit()}),m().fire({icon:"success",title:"Active!",text:"Category Is Active Successfully."}))})}ngOnInit(){this.getCategory(),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(n=>{"product"===n.content_type.app_label&&"productcategory"===n.content_type.model&&"add_productcategory"==n.codename?this.isAdd=n.codename:"product"===n.content_type.app_label&&"productcategory"===n.content_type.model&&"change_productcategory"==n.codename?this.isEdit=n.codename:"product"===n.content_type.app_label&&"productcategory"===n.content_type.model&&"delete_productcategory"==n.codename&&(this.isDelete=n.codename)})})}getCategory(){this.coreServ.getProductCategor().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}selectAlll(){this.selectedRows.fill(this.allSelected)}editThis(e,o){this.coreServ.editThisData(e),this.editMode=!0}onDataUpdate(e){e&&(this.getCategory(),this.editMode=!1)}filterData(){let e=this.tableData.slice();null!=this.selectActive&&(e=e.filter(o=>o?.is_active===this.selectActive)),this.filteredData=e}clearFilter(){this.selectActive=void 0,this.filterData()}selectAll(e){this.tableData.forEach(e?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}search(){if(""===this.title)this.ngOnInit();else{const e=this.title.toLocaleLowerCase();this.filteredData=this.filteredData.filter(o=>o.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}ngOnDestroy(){this.coreServ.editThisData(null)}openaddForm(){this.editMode=!1,window.location.reload()}generatePDF(){const e=new A.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Category List",10,10),Z()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Image"},{header:"Category name"},{header:"Is Active"}]}),e.save("category.pdf")}generatePDFAgain(){const e=new A.default;e.setFontSize(12),e.setTextColor(33,43,54),e.text("Category List",82,10),e.text("",10,15),Z()(e,{head:[["#","Category name"]],body:this.tableData.map((n,a)=>[a+1,n.title]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),e.save("Category  .pdf")}getVisibleDataFromTable(){const e=[],o=document.getElementById("mytable"),n=o.querySelector("thead tr"),a=o.querySelectorAll("tbody tr"),s=[];return n.querySelectorAll("th").forEach(d=>{const h=d.textContent.trim();"Is Active"!==h&&"Action"!==h&&s.push(h)}),e.push(s),a.forEach(d=>{const h=[];d.querySelectorAll("td").forEach(N=>{h.push(N.textContent.trim())}),e.push(h)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),o=p.P6.aoa_to_sheet(e),n=p.P6.book_new();p.P6.book_append_sheet(n,o,"Sheet1");const a=p.cW(n,{bookType:"xlsx",type:"array"}),s=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,x.saveAs)(s,"category.xlsx")}printTable(){const e=document.getElementById("mytable"),a=document.querySelector(".titl").outerHTML,s=e.cloneNode(!0),d=s.querySelector("th.thone:nth-child(5)");d&&d.remove();const h=s.querySelector("th.thone:last-child");h&&h.remove(),s.querySelectorAll("tr").forEach(q=>{const F=q.querySelector("td:nth-child(5)");F&&F.remove();const P=q.querySelector("td:last-child");P&&P.remove()});const Zt=s.outerHTML,xt="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+Zt,bt=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=xt,window.print(),document.body.innerHTML=bt}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.filteredData.length)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C.p),t.Y36(u.F0),t.Y36(v._W),t.Y36(y.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-categorylist"]],decls:105,vars:16,consts:[[1,"page-header"],[1,"row"],[1,"col-7"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Category Name...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-4","col-sm-6","col-12"],[1,"form-group"],[1,"form-select",3,"ngModel","ngModelChange","change"],["selected","","disabled","",3,"ngValue"],[3,"ngValue"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto","w-25"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-5",4,"ngIf"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[1,"product-img",3,"routerLink"],["alt","product",3,"src"],[3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-1",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-5"],[1,"page-btn","d-flex","justify-content-between"],[1,"page-title","pe-4"],[3,"onDataUpdate"]],template:function(e,o){if(1&e){const n=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",0)(4,"div",3)(5,"h4",4),t._uU(6,"Product Category list"),t.qZA(),t.TgZ(7,"h6"),t._uU(8,"View/Search product Category"),t.qZA()(),t.YNc(9,it,2,1,"div",5),t.qZA(),t.TgZ(10,"div",6)(11,"div",7)(12,"div",8)(13,"div",9)(14,"div",10)(15,"a",11),t._UZ(16,"img",12),t.TgZ(17,"span"),t._UZ(18,"img",13),t.qZA()()(),t.TgZ(19,"div",14)(20,"a",15),t._UZ(21,"img",16),t.qZA(),t.TgZ(22,"div",17)(23,"label")(24,"input",18),t.NdJ("ngModelChange",function(s){return o.title=s})("ngModelChange",function(){return o.search()}),t.qZA()()()()(),t.TgZ(25,"div",19)(26,"ul")(27,"li")(28,"a",20),t.NdJ("click",function(){return o.generatePDFAgain()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(32,"img",23),t.qZA()(),t.TgZ(33,"li")(34,"a",24),t.NdJ("click",function(){return o.printTable()}),t._UZ(35,"img",25),t.qZA()()()()(),t.TgZ(36,"div",26)(37,"div",27)(38,"div",1)(39,"div",28)(40,"div",1)(41,"div",29)(42,"div",30)(43,"label"),t._uU(44,"Is Active"),t.qZA(),t.TgZ(45,"select",31),t.NdJ("ngModelChange",function(s){return o.selectActive=s})("change",function(){return o.filterData()}),t.TgZ(46,"option",32),t._uU(47,"Select Active Status"),t.qZA(),t.TgZ(48,"option",33),t._uU(49,"Yes"),t.qZA(),t.TgZ(50,"option",33),t._uU(51,"No"),t.qZA()()()()(),t.TgZ(52,"div",34),t.NdJ("click",function(){return o.clearFilter()}),t.TgZ(53,"a",35),t._uU(54,"Clear Filter"),t.qZA()()()()()(),t.TgZ(55,"div",36)(56,"table",37)(57,"thead")(58,"tr")(59,"th",38),t.NdJ("click",function(){return o.sort("id")}),t.TgZ(60,"label",39),t.NdJ("click",function(){return o.selectAll(o.initChecked)}),t.TgZ(61,"input",40),t.NdJ("ngModelChange",function(s){return o.allSelected=s})("change",function(){return o.selectAlll()}),t.qZA(),t._UZ(62,"span",41),t.qZA(),t._UZ(63,"i",42),t.qZA(),t.TgZ(64,"th",38),t.NdJ("click",function(){return o.sort("id")}),t._uU(65,"Sr.No."),t._UZ(66,"i",42),t.qZA(),t.TgZ(67,"th",38),t.NdJ("click",function(){return o.sort("id")}),t._uU(68,"Image "),t._UZ(69,"i",42),t.qZA(),t.TgZ(70,"th",38),t.NdJ("click",function(){return o.sort("id")}),t._uU(71,"Category name "),t._UZ(72,"i",42),t.qZA(),t.TgZ(73,"th",38),t.NdJ("click",function(){return o.sort("id")}),t._uU(74,"Is Active "),t._UZ(75,"i",42),t.qZA(),t.YNc(76,nt,3,0,"th",43),t.qZA()(),t.YNc(77,ct,4,11,"tbody",44),t.YNc(78,dt,5,0,"tbody",44),t.qZA(),t.TgZ(79,"div",45),t.YNc(80,gt,1,0,"mat-progress-bar",46),t.qZA(),t.TgZ(81,"div",1)(82,"div",47)(83,"div",48),t._uU(84," Show per page "),t.TgZ(85,"select",49,50),t.NdJ("ngModelChange",function(s){return o.itemsPerPage=s})("change",function(){t.CHM(n);const s=t.MAs(86);return t.KtG(o.changePg(s.value))}),t.TgZ(87,"option",51),t._uU(88,"10"),t.qZA(),t.TgZ(89,"option",52),t._uU(90,"20"),t.qZA(),t.TgZ(91,"option",53),t._uU(92,"30"),t.qZA(),t.TgZ(93,"option",54),t._uU(94,"50"),t.qZA(),t.TgZ(95,"option",55),t._uU(96,"100"),t.qZA(),t.TgZ(97,"option",56),t._uU(98,"All"),t.qZA()()()(),t.TgZ(99,"div",57)(100,"div",58)(101,"pagination-controls",59),t.NdJ("pageChange",function(s){return o.p=s}),t.qZA(),t.TgZ(102,"div",60),t._uU(103),t.qZA()()()()()()()(),t.YNc(104,ut,8,2,"div",61),t.qZA()()}2&e&&(t.xp6(9),t.Q6J("ngIf",o.editMode),t.xp6(15),t.Q6J("ngModel",o.title),t.xp6(21),t.Q6J("ngModel",o.selectActive),t.xp6(1),t.Q6J("ngValue",void 0),t.xp6(2),t.Q6J("ngValue",!0),t.xp6(2),t.Q6J("ngValue",!1),t.xp6(11),t.Q6J("ngModel",o.allSelected),t.xp6(15),t.Q6J("ngIf",o.isEdit||o.isDelete),t.xp6(1),t.Q6J("ngIf",(null==o.filteredData?null:o.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==o.filteredData?null:o.filteredData.length)&&!o.loader),t.xp6(2),t.Q6J("ngIf",o.loader),t.xp6(5),t.Q6J("ngModel",o.itemsPerPage),t.xp6(18),t.lnq("Showing ",o.itemsPerPage," to ",null==o.tableData?null:o.tableData.length," of ",o.p," entries"),t.xp6(1),t.Q6J("ngIf",o.isAdd||o.isEdit))},dependencies:[g.sg,g.O5,u.yS,S,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,X.pW,J.LS,tt.Rr,J._s,et.T],styles:['.form-select[_ngcontent-%COMP%]{width:111%;font-size:14px}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),i})();var mt=l(30597);const I=JSON.parse(localStorage.getItem("auth")),_t=[];I&&I.map(r=>{"product"===r.content_type.app_label&&"productcategory"===r.content_type.model&&_t.push(r.codename)});const ht=[{path:"",component:pt,canActivate:[mt.l],data:{allowedRoles:["add_productcategory","change_productcategory","delete_productcategory","view_productcategory"]}}];let ft=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.Bz.forChild(ht),u.Bz]}),i})();const Ct=[{path:"",component:S}];let yt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.Bz.forChild(Ct),u.Bz]}),i})(),vt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.ez,yt,c.UX,_.Bb,U.lN,w.c]}),i})();var Tt=l(8468);let At=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.ez,ft,vt,Tt.I]}),i})()},30597:(k,T,l)=>{l.d(T,{l:()=>A});var g=l(94650),u=l(4392),D=l(97185),M=l(42917),m=l(80927);let A=(()=>{class f{constructor(p,x,t,C,v){this.router=p,this.Arout=x,this.toastr=t,this.profileService=C,this.coreService=v}canActivate(p,x){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(C=>{this.userDetails=C,this.permissions=this.userDetails?.permission}),t){const C=p.data.allowedRoles,v=t.some(c=>C.includes(c.codename));let y=this.coreService.profileData$.value;if(y&&y.username){this.userDetails=y,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(y);const c=y?.permission,_=this.profileService.getUserDetails();(!_||_.length!==c.length)&&(this.profileService.setUserPermission(c),window.location.reload())}else this.coreService.getProfile().subscribe(c=>{this.userDetails=c,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(c);const _=c?.permission,b=this.profileService.getUserDetails();(!b||b.length!==_.length)&&(this.profileService.setUserPermission(_),window.location.reload())});if(v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return f.\u0275fac=function(p){return new(p||f)(g.LFG(u.F0),g.LFG(u.gz),g.LFG(D._W),g.LFG(M.J),g.LFG(m.p))},f.\u0275prov=g.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()}}]);