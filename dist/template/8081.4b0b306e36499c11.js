"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8081],{93209:(Q,q,c)=>{c.r(q),c.d(q,{CitylistModule:()=>Tt});var f=c(36895),I=c(88996),d=c(24006),M=c(35226),Z=c.n(M),r=c(53583),_=c(12983),a=c.n(_),u=c(80574),g=c(94327),t=c(94650),h=c(80927),v=c(72326),C=c(97185),y=c(42917),x=c(73162),b=c(54333),S=c(90455),J=c(54040);function U(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"a",53),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(2);return t.KtG(o.openaddForm())}),t._UZ(1,"img",54),t._uU(2,"Add City "),t.qZA()}}function Y(i,s){if(1&i&&(t.TgZ(0,"div",51),t.YNc(1,U,3,0,"a",52),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function E(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"th",28),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",32),t.qZA()}}function P(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"a",63),t.NdJ("click",function(){t.CHM(e);const o=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.editForm(o.id))}),t._UZ(1,"img",64),t.qZA()}}function O(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"a",65),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),l=o.index,p=o.$implicit,m=t.oxw(2);return t.KtG(m.confirmText(l,p.id))}),t._UZ(1,"img",66),t.qZA()}}function B(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",56)(3,"input",57),t.NdJ("ngModelChange",function(o){const p=t.CHM(e).index,m=t.oxw(2);return t.KtG(m.selectedRows[p]=o)}),t.qZA(),t._UZ(4,"span",31),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",58)(8,"a",59),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"mat-slide-toggle",60),t.NdJ("click",function(){const o=t.CHM(e),l=o.$implicit,p=o.index,m=t.oxw(2);return t.KtG(l.is_active?m.deActivate(p,l.id):m.Active(p,l.id))})("ngModelChange",function(o){const p=t.CHM(e).$implicit;return t.KtG(p.is_active=o)}),t.qZA()(),t.TgZ(16,"td"),t.YNc(17,P,2,0,"a",61),t.YNc(18,O,2,0,"a",62),t.qZA()()}if(2&i){const e=s.$implicit,n=s.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[n]),t.xp6(3),t.Oqu(n+1),t.xp6(3),t.Oqu(null==e?null:e.city),t.xp6(2),t.Oqu(null==e?null:e.city_code),t.xp6(2),t.Oqu(null==e||null==e.state?null:e.state.state),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const R=function(i,s){return{itemsPerPage:i,currentPage:s}};function L(i,s){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,B,19,8,"tr",55),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,R,e.itemsPerPage,e.p)))}}function H(i,s){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",67)(3,"p",68),t._uU(4,"Data not available"),t.qZA()()()())}function j(i,s){1&i&&t._UZ(0,"mat-progress-bar",69)}function K(i,s){1&i&&(t.TgZ(0,"div")(1,"h4"),t._uU(2,"City "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Create new City "),t.qZA()())}function G(i,s){if(1&i&&(t.TgZ(0,"div",3),t.YNc(1,K,5,0,"div",34),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isAdd)}}function V(i,s){1&i&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," City Edit"),t.qZA(),t.TgZ(3,"h6"),t._uU(4," Update City "),t.qZA()())}function z(i,s){if(1&i&&(t.TgZ(0,"div",3),t.YNc(1,V,5,0,"div",34),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.isEdit)}}function W(i,s){1&i&&(t.TgZ(0,"span",86),t._uU(1,"Enter city "),t.qZA())}function X(i,s){1&i&&(t.TgZ(0,"span",86),t._uU(1,"Enter City Code "),t.qZA())}function tt(i,s){if(1&i&&(t.TgZ(0,"option",87),t._uU(1),t.qZA()),2&i){const e=s.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.state," ")}}function et(i,s){1&i&&(t.TgZ(0,"span",86),t._uU(1,"Select state "),t.qZA())}function it(i,s){1&i&&(t.TgZ(0,"button",88),t._uU(1,"Submit"),t.qZA())}function nt(i,s){1&i&&(t.TgZ(0,"button",89),t._UZ(1,"span",90),t._uU(2," Submit"),t.qZA())}const A=function(i){return{"is-invalid":i}};function ot(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",73),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw(3);return t.KtG(o.submit())}),t.TgZ(2,"div",0)(3,"div",74)(4,"div",75)(5,"label"),t._uU(6,"City*"),t.qZA(),t._UZ(7,"input",76),t.YNc(8,W,2,0,"span",77),t.qZA()(),t.TgZ(9,"div",74)(10,"div",75)(11,"label"),t._uU(12,"City Code*"),t.qZA(),t._UZ(13,"input",78),t.YNc(14,X,2,0,"span",77),t.qZA()(),t.TgZ(15,"div",74)(16,"div",75)(17,"label"),t._uU(18,"Select State*"),t.qZA(),t.TgZ(19,"select",79,80)(21,"option",81),t._uU(22,"State"),t.qZA(),t.YNc(23,tt,2,2,"option",82),t.qZA(),t.YNc(24,et,2,0,"span",77),t.qZA()(),t.TgZ(25,"div",83),t.YNc(26,it,2,0,"button",84),t.YNc(27,nt,3,0,"button",85),t.qZA()()()()}if(2&i){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.cityForm),t.xp6(6),t.Q6J("ngClass",t.VKq(10,A,e.f.city.touched&&e.f.city.invalid)),t.xp6(1),t.Q6J("ngIf",e.city&&e.city.invalid&&e.city.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(12,A,e.f.city_code.touched&&e.f.city_code.invalid)),t.xp6(1),t.Q6J("ngIf",e.city_code&&e.city_code.invalid&&e.city_code.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(14,A,e.f.state.touched&&e.f.state.invalid)),t.xp6(4),t.Q6J("ngForOf",e.stateList),t.xp6(1),t.Q6J("ngIf",e.state&&e.state.invalid&&e.state.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function st(i,s){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,ot,28,16,"div",72),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",e.addForm)}}function lt(i,s){1&i&&(t.TgZ(0,"span",86),t._uU(1,"Enter city "),t.qZA())}function ct(i,s){1&i&&(t.TgZ(0,"span",86),t._uU(1,"Enter City Code "),t.qZA())}function at(i,s){if(1&i&&(t.TgZ(0,"option",87),t._uU(1),t.qZA()),2&i){const e=s.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.state," ")}}function rt(i,s){if(1&i&&(t.TgZ(0,"span",86),t._uU(1),t.qZA()),2&i){const e=t.oxw(4);t.xp6(1),t.Oqu(e.stateError)}}function dt(i,s){1&i&&(t.TgZ(0,"span",86),t._uU(1,"Select state "),t.qZA())}function _t(i,s){1&i&&(t.TgZ(0,"button",88),t._uU(1,"Submit"),t.qZA())}function pt(i,s){1&i&&(t.TgZ(0,"button",89),t._UZ(1,"span",90),t._uU(2," Submit"),t.qZA())}function ut(i,s){if(1&i){const e=t.EpF();t.TgZ(0,"div",7)(1,"form",73),t.NdJ("ngSubmit",function(){t.CHM(e);const o=t.oxw(3);return t.KtG(o.update())}),t.TgZ(2,"div",0)(3,"div",74)(4,"div",75)(5,"label"),t._uU(6,"City*"),t.qZA(),t._UZ(7,"input",76),t.YNc(8,lt,2,0,"span",77),t.qZA()(),t.TgZ(9,"div",74)(10,"div",75)(11,"label"),t._uU(12,"City Code*"),t.qZA(),t._UZ(13,"input",78),t.YNc(14,ct,2,0,"span",77),t.qZA()(),t.TgZ(15,"div",74)(16,"div",75)(17,"label"),t._uU(18,"Select State*"),t.qZA(),t.TgZ(19,"select",79,80)(21,"option",81),t._uU(22,"State"),t.qZA(),t.YNc(23,at,2,2,"option",82),t.qZA(),t.YNc(24,rt,2,1,"span",77),t.YNc(25,dt,2,0,"span",77),t.qZA()(),t.TgZ(26,"div",83),t.YNc(27,_t,2,0,"button",84),t.YNc(28,pt,3,0,"button",85),t.qZA()()()()}if(2&i){const e=t.oxw(3);t.xp6(1),t.Q6J("formGroup",e.cityForm),t.xp6(6),t.Q6J("ngClass",t.VKq(11,A,e.f.city.touched&&e.f.city.invalid)),t.xp6(1),t.Q6J("ngIf",e.city&&e.city.invalid&&e.city.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(13,A,e.f.city_code.touched&&e.f.city_code.invalid)),t.xp6(1),t.Q6J("ngIf",e.city_code&&e.city_code.invalid&&e.city_code.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(15,A,e.f.state.touched&&e.f.state.invalid)),t.xp6(4),t.Q6J("ngForOf",e.stateList),t.xp6(1),t.Q6J("ngIf",e.stateError),t.xp6(1),t.Q6J("ngIf",e.state&&e.state.invalid&&e.state.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}}function gt(i,s){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,ut,29,17,"div",72),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!e.addForm)}}function mt(i,s){if(1&i&&(t.TgZ(0,"div",70)(1,"div",2),t.YNc(2,G,2,1,"div",71),t.YNc(3,z,2,1,"div",71),t.qZA(),t.TgZ(4,"div",6),t.YNc(5,st,2,1,"div",34),t.YNc(6,gt,2,1,"div",34),t.qZA()()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",e.addForm),t.xp6(1),t.Q6J("ngIf",!e.addForm),t.xp6(2),t.Q6J("ngIf",e.isAdd),t.xp6(1),t.Q6J("ngIf",e.isEdit)}}let ft=(()=>{class i{constructor(e,n,o,l,p){this.coreService=e,this.QueryService=n,this.fb=o,this.toastr=l,this.cs=p,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.loaders=!1,this.stateError=null,this.addForm=!0,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}get f(){return this.cityForm.controls}confirmText(e,n){Z().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.deletecity(n).subscribe(l=>{this.delRes=l,"City Deleted successfully"==this.delRes.msg&&this.ngOnInit()}),Z().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1))})}deActivate(e,n){Z().fire({title:"Are you sure?",text:"Do you want to Deactivate this city!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.cityIsActive(n,"").subscribe(l=>{this.delRes=l,"City Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),Z().fire({icon:"success",title:"Deactivate!",text:"City Is Deactivate Successfully."}))})}Active(e,n){Z().fire({title:"Are you sure?",text:"Do you want to Active this city!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.cityIsActive(n,"").subscribe(l=>{this.delRes=l,"City Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),Z().fire({icon:"success",title:"Active!",text:"City Is Active Successfully."}))})}ngOnInit(){this.cityForm=this.fb.group({city:new d.NI("",[d.kI.required]),city_code:new d.NI("",[d.kI.required]),state:new d.NI("",[d.kI.required])}),this.coreService.getcity().subscribe(e=>{this.loader=!1,this.tableData=e,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.getstate(),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(o=>{"places"===o.content_type.app_label&&"city"===o.content_type.model&&"add_city"==o.codename?this.isAdd=o.codename:"places"===o.content_type.app_label&&"city"===o.content_type.model&&"change_city"==o.codename?this.isEdit=o.codename:"places"===o.content_type.app_label&&"city"===o.content_type.model&&"delete_city"==o.codename&&(this.isDelete=o.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(e){this.coreService.deletecity(e).subscribe(n=>{this.delRes=n,"City Deleted successfully"==this.delRes.msg&&window.location.reload()})}getstate(){this.coreService.getstateD().subscribe(e=>{this.stateList=e})}submit(){this.cityForm.valid?(this.loaders=!0,this.coreService.addcity(this.cityForm.value).subscribe(e=>{this.addRes=e,"Data Created"==this.addRes.msg&&(this.loaders=!1,this.toastr.success(this.addRes.msg),this.cityForm.reset(),this.ngOnInit())},e=>{})):this.cityForm.markAllAsTouched()}update(){this.cityForm.valid?(this.loaders=!0,this.coreService.updatecity(this.cityForm.value,this.id).subscribe(e=>{this.addRes=e,"City updated successfully"==this.addRes.msg&&(this.loaders=!1,this.toastr.success(this.addRes.msg),this.cityForm.reset(),this.addForm=!0,this.ngOnInit())},e=>{e.error.state&&(this.stateError="Select State",setTimeout(()=>{this.stateError=""},3e3))})):this.cityForm.markAllAsTouched()}get city(){return this.cityForm.get("city")}get city_code(){return this.cityForm.get("city_code")}get state(){return this.cityForm.get("state")}editForm(e){this.id=e,this.coreService.getcityById(e).subscribe(n=>{n.map(o=>{e==o.id&&(this.addForm=!1,this.cityForm.patchValue(o),this.editFormdata=o)})})}openaddForm(){this.addForm=!0,this.cityForm.reset()}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(n=>n.city.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new r.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("City List",10,10),a()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"City"},{header:"City Code"},{header:"State"},{header:"Is Active"}]}),e.save("city.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),l=n.querySelectorAll("tbody tr"),p=[];return o.querySelectorAll("th").forEach(m=>{const T=m.textContent.trim();"Is Active"!==T&&"Action"!==T&&p.push(T)}),e.push(p),l.forEach(m=>{const T=[];m.querySelectorAll("td").forEach(w=>{T.push(w.textContent.trim())}),e.push(T)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=u.P6.aoa_to_sheet(e),o=u.P6.book_new();u.P6.book_append_sheet(o,n,"Sheet1");const l=u.cW(o,{bookType:"xlsx",type:"array"}),p=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,g.saveAs)(p,"city.xlsx")}printTable(){const e=document.getElementById("mytable"),l=document.querySelector(".titl").outerHTML,p=e.cloneNode(!0),m=p.querySelector("th.thone:nth-child(6)");m&&m.remove();const T=p.querySelector("th.thone:last-child");T&&T.remove(),p.querySelectorAll("tr").forEach(F=>{const D=F.querySelector("td:nth-child(6)");D&&D.remove();const k=F.querySelector("td:last-child");k&&k.remove()});const Zt=p.outerHTML,xt="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+Zt,At=document.body.innerHTML;document.body.innerHTML=xt,window.print(),document.body.innerHTML=At}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h.p),t.Y36(v._),t.Y36(d.qu),t.Y36(C._W),t.Y36(y.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-citylist"]],decls:87,vars:12,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-lg-5 col-sm-5 col-12",4,"ngIf"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],["href","javascript:void(0);",2,"line-height","3"],[3,"ngModel","click","ngModelChange"],["class","me-3",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-3",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["type","text","formControlName","city","id","city",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","city_code","id","city_code",3,"ngClass"],["formControlName","state","required","","id","state",1,"w-100","h-100","border",3,"ngClass"],["stateValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"City list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your City"),t.qZA()(),t.YNc(8,Y,2,1,"div",5),t.qZA(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"a",11),t._UZ(15,"img",12),t.TgZ(16,"span"),t._UZ(17,"img",13),t.qZA()()(),t.TgZ(18,"div",14)(19,"a",15),t._UZ(20,"img",16),t.qZA(),t.TgZ(21,"div",17)(22,"label")(23,"input",18),t.NdJ("ngModelChange",function(l){return n.titlee=l})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(24,"div",19)(25,"ul")(26,"li")(27,"a",20),t.NdJ("click",function(){return n.generatePDF()}),t._UZ(28,"img",21),t.qZA()(),t.TgZ(29,"li")(30,"a",22),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(31,"img",23),t.qZA()(),t.TgZ(32,"li")(33,"a",24),t.NdJ("click",function(){return n.printTable()}),t._UZ(34,"img",25),t.qZA()()()()(),t.TgZ(35,"div",26)(36,"table",27)(37,"thead")(38,"tr")(39,"th",28),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(40,"label",29),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(41,"input",30),t.NdJ("ngModelChange",function(l){return n.allSelected=l})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(42,"span",31),t.qZA(),t._UZ(43,"i",32),t.qZA(),t.TgZ(44,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(45,"Sr. No. "),t._UZ(46,"i",32),t.qZA(),t.TgZ(47,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(48,"City "),t._UZ(49,"i",32),t.qZA(),t.TgZ(50,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(51,"City Code "),t._UZ(52,"i",32),t.qZA(),t.TgZ(53,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(54,"State "),t._UZ(55,"i",32),t.qZA(),t.TgZ(56,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(57,"Is Active "),t._UZ(58,"i",32),t.qZA(),t.YNc(59,E,3,0,"th",33),t.qZA()(),t.YNc(60,L,4,11,"tbody",34),t.YNc(61,H,5,0,"tbody",34),t.qZA(),t.TgZ(62,"div",35),t.YNc(63,j,1,0,"mat-progress-bar",36),t.qZA(),t.TgZ(64,"div",0)(65,"div",37)(66,"div",38),t._uU(67," Show per page "),t.TgZ(68,"select",39),t.NdJ("ngModelChange",function(l){return n.itemsPerPage=l}),t.TgZ(69,"option",40),t._uU(70,"10"),t.qZA(),t.TgZ(71,"option",41),t._uU(72,"20"),t.qZA(),t.TgZ(73,"option",42),t._uU(74,"30"),t.qZA(),t.TgZ(75,"option",43),t._uU(76,"50"),t.qZA(),t.TgZ(77,"option",44),t._uU(78,"100"),t.qZA(),t.TgZ(79,"option",45),t._uU(80,"All"),t.qZA()()()(),t.TgZ(81,"div",46)(82,"div",47)(83,"pagination-controls",48),t.NdJ("pageChange",function(l){return n.p=l}),t.qZA(),t.TgZ(84,"div",49),t._uU(85),t.qZA()()()()()()()(),t.YNc(86,mt,7,4,"div",50),t.qZA()),2&e&&(t.xp6(8),t.Q6J("ngIf",!n.addForm),t.xp6(15),t.Q6J("ngModel",n.titlee),t.xp6(18),t.Q6J("ngModel",n.allSelected),t.xp6(18),t.Q6J("ngIf",n.isEdit||n.isDelete),t.xp6(1),t.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.tableData?null:n.tableData.length)&&!n.loader),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(17),t.lnq("Showing ",n.itemsPerPage," to ",n.itemsPerPage," of ",n.itemsPerPage," entries"),t.xp6(1),t.Q6J("ngIf",n.isAdd||n.isEdit))},dependencies:[f.mk,f.sg,f.O5,d._Y,d.YN,d.Kr,d.Fj,d.Wl,d.EJ,d.JJ,d.JL,d.Q7,d.On,d.sg,d.u,x.pW,b.LS,S.Rr,b._s,J.T],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),i})();var ht=c(30597);const N=JSON.parse(localStorage.getItem("auth")),yt=[];N&&N.map(s=>{"places"===s.content_type.app_label&&"city"===s.content_type.model&&yt.push(s.codename)});const vt=[{path:"",component:ft,canActivate:[ht.l],data:{allowedRoles:["add_city","change_city","delete_city","view_city"]}}];let Ct=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[I.Bz.forChild(vt),I.Bz]}),i})();var bt=c(8468);let Tt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[f.ez,Ct,bt.I]}),i})()},65415:(Q,q,c)=>{c.d(q,{G:()=>d,T:()=>Z});var f=c(94650),d=function(){function r(_,a,u){this.el=_,this.vcr=a,this.renderer=u,this.dtOptions={}}return r.prototype.ngOnInit=function(){var _=this;this.dtTrigger?this.dtTrigger.subscribe(function(a){_.displayTable(a)}):this.displayTable(null)},r.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},r.prototype.displayTable=function(_){var a=this;_&&(this.dtOptions=_),this.dtInstance=new Promise(function(u,g){Promise.resolve(a.dtOptions).then(function(t){0===Object.keys(t).length&&0===$("tbody tr",a.el.nativeElement).length?g("Both the table and dtOptions cannot be empty"):setTimeout(function(){var v={rowCallback:function(C,y,x){if(t.columns){var b=t.columns;a.applyNgPipeTransform(C,b),a.applyNgRefTemplate(C,b,y)}t.rowCallback&&t.rowCallback(C,y,x)}};v=Object.assign({},t,v),a.dt=$(a.el.nativeElement).DataTable(v),u(a.dt)})})})},r.prototype.applyNgPipeTransform=function(_,a){a.filter(function(g){return g.ngPipeInstance&&!g.ngTemplateRef}).forEach(function(g){var t=g.ngPipeInstance,h=g.ngPipeArgs||[],v=a.findIndex(function(b){return b.data===g.data}),C=_.childNodes.item(v),y=$(C).text(),x=t.transform.apply(t,function(r,_,a){if(a||2===arguments.length)for(var t,u=0,g=_.length;u<g;u++)(t||!(u in _))&&(t||(t=Array.prototype.slice.call(_,0,u)),t[u]=_[u]);return r.concat(t||Array.prototype.slice.call(_))}([y],h,!1));$(C).text(x)})},r.prototype.applyNgRefTemplate=function(_,a,u){var g=this;a.filter(function(h){return h.ngTemplateRef&&!h.ngPipeInstance}).forEach(function(h){var v=h.ngTemplateRef,C=v.ref,y=v.context,x=a.findIndex(function(U){return U.data===h.data}),b=_.childNodes.item(x);$(b).html("");var S=Object.assign({},y,y?.userData,{adtData:u}),J=g.vcr.createEmbeddedView(C,S);g.renderer.appendChild(b,J.rootNodes[0])})},r.\u0275fac=function(a){return new(a||r)(f.Y36(f.SBq),f.Y36(f.s_b),f.Y36(f.Qsj))},r.\u0275dir=f.lG2({type:r,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),r}(),M=c(36895),Z=function(){function r(){}return r.forRoot=function(){return{ngModule:r}},r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=f.oAB({type:r}),r.\u0275inj=f.cJS({imports:[M.ez]}),r}()}}]);