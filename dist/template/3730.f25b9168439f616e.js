"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3730],{19224:(I,Z,l)=>{l.r(Z),l.d(Z,{TaxSlabsListModule:()=>z});var f=l(36895),S=l(88996),A=l(35226),v=l.n(A),M=l(53583),r=l(12983),d=l.n(r),a=l(80574),p=l(94327),t=l(94650),g=l(80927),_=l(42917),m=l(24006),T=l(73162),b=l(54333),C=l(90455),x=l(54040);function L(o,c){1&o&&(t.TgZ(0,"div",35)(1,"a",36),t._UZ(2,"img",37),t._uU(3,"Add Tax Slab "),t.qZA()())}const D=function(o,c){return{"bg-lightgreen":o,"bg-lightred":c}};function w(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",39)(3,"input",40),t.NdJ("ngModelChange",function(i){const u=t.CHM(e).index,h=t.oxw(2);return t.KtG(h.selectedRows[u]=i)}),t.qZA(),t._UZ(4,"span",29),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"span",41),t._uU(11),t.qZA()(),t.TgZ(12,"td")(13,"mat-slide-toggle",42),t.NdJ("click",function(){const i=t.CHM(e),s=i.$implicit,u=i.index,h=t.oxw(2);return t.KtG(s.is_active?h.isActive(u,s.id):h.Active(u,s.id))})("ngModelChange",function(i){const u=t.CHM(e).$implicit;return t.KtG(u.is_active=i)}),t.qZA()(),t.TgZ(14,"td")(15,"a",43),t._UZ(16,"img",44),t.qZA(),t.TgZ(17,"a",43),t._UZ(18,"img",45),t.qZA(),t.TgZ(19,"a",46),t.NdJ("click",function(){const i=t.CHM(e),s=i.index,u=i.$implicit,h=t.oxw(2);return t.KtG(h.confirmText(s,u.id))}),t._UZ(20,"img",47),t.qZA()()()}if(2&o){const e=c.$implicit,n=c.index,i=t.oxw(2);t.xp6(3),t.Q6J("ngModel",i.selectedRows[n]),t.xp6(3),t.Oqu(n+1),t.xp6(2),t.hij(" ",null==e?null:e.slab_title," "),t.xp6(2),t.Q6J("ngClass",t.WLB(8,D,!0===(null==e?null:e.variable_tax),!1===(null==e?null:e.variable_tax))),t.xp6(1),t.Oqu(null==e?null:e.variable_tax),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//product/taxSlabDetail/",e.id,""),t.xp6(2),t.MGl("routerLink","//product/taxSlabUpdate/",e.id,"")}}const q=function(o,c){return{itemsPerPage:o,currentPage:c}};function B(o,c){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,w,21,11,"tr",38),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,q,e.itemsPerPage,e.p)))}}function O(o,c){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",48)(3,"p",49),t._uU(4,"Data not available"),t.qZA()()()())}function R(o,c){1&o&&t._UZ(0,"mat-progress-bar",50)}function E(o,c){if(1&o){const e=t.EpF();t.TgZ(0,"div",51)(1,"div",52)(2,"div",53),t._uU(3," Show per page "),t.TgZ(4,"select",54),t.NdJ("ngModelChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.itemsPerPage=i)}),t.TgZ(5,"option",55),t._uU(6,"10"),t.qZA(),t.TgZ(7,"option",56),t._uU(8,"20"),t.qZA(),t.TgZ(9,"option",57),t._uU(10,"30"),t.qZA(),t.TgZ(11,"option",58),t._uU(12,"50"),t.qZA(),t.TgZ(13,"option",59),t._uU(14,"100"),t.qZA(),t.TgZ(15,"option",60),t._uU(16,"All"),t.qZA()()()(),t.TgZ(17,"div",61)(18,"div",62)(19,"pagination-controls",63),t.NdJ("pageChange",function(i){t.CHM(e);const s=t.oxw();return t.KtG(s.p=i)}),t.qZA(),t.TgZ(20,"div",64),t._uU(21),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(17),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}let F=(()=>{class o{constructor(e,n){this.coreService=e,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.row=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1}confirmText(e,n){v().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.coreService.deleteTaxSlab(n).subscribe(s=>{this.delRes=s,"Tax Slabs Deleted successfully"==this.delRes.msg?(this.ngOnInit(),v().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."})):v().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,n){v().fire({title:"Are you sure?",text:"Do you want to Deactivate this product!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.coreService.taxSlabIsActive(n,"").subscribe(s=>{this.delRes=s,"Tax Slabs Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),v().fire({icon:"success",title:"Deactivate!",text:"Tax Slabs Is Deactivate Successfully."}))})}Active(e,n){v().fire({title:"Are you sure?",text:"Do you want to Active this product!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.coreService.taxSlabIsActive(n,"").subscribe(s=>{this.delRes=s,"Tax Slabs Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),v().fire({icon:"success",title:"Active!",text:"Tax Slabs Is Active Successfully."}))})}ngOnInit(){this.coreService.getTaxSlab().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(i=>{"product"===i.content_type.app_label&&"taxslabs"===i.content_type.model&&"add_taxslabs"==i.codename?this.isAdd=i.codename:"product"===i.content_type.app_label&&"taxslabs"===i.content_type.model&&"change_taxslabs"==i.codename?this.isEdit=i.codename:"product"===i.content_type.app_label&&"taxslabs"===i.content_type.model&&"delete_taxslabs"==i.codename&&(this.isDelete=i.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(e){this.coreService.deleteEmployee(e).subscribe(n=>{this.delRes=n})}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(n=>n.subcategory_group?.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new M.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Tax Slab List",10,10),d()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Subcategory Group"},{header:"SubCategory"},{header:"Is Active"}]}),e.save("taxslab.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable"),i=n.querySelector("thead tr"),s=n.querySelectorAll("tbody tr"),u=[];return i.querySelectorAll("th").forEach(h=>{const y=h.textContent.trim();"Is Active"!==y&&"Action"!==y&&u.push(y)}),e.push(u),s.forEach(h=>{const y=[];h.querySelectorAll("td").forEach(U=>{y.push(U.textContent.trim())}),e.push(y)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=a.P6.aoa_to_sheet(e),i=a.P6.book_new();a.P6.book_append_sheet(i,n,"Sheet1");const s=a.cW(i,{bookType:"xlsx",type:"array"}),u=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,p.saveAs)(u,"taxslab.xlsx")}printTable(){const e=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,u=e.cloneNode(!0),h=u.querySelector("th.thone:nth-child(5)");h&&h.remove();const y=u.querySelector("th.thone:last-child");y&&y.remove(),u.querySelectorAll("tr").forEach(k=>{const J=k.querySelector("td:nth-child(5)");J&&J.remove();const N=k.querySelector("td:last-child");N&&N.remove()});const K=u.outerHTML,V="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+K,W=document.body.innerHTML;document.body.innerHTML=V,window.print(),document.body.innerHTML=W}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(g.p),t.Y36(_.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tax-slabs-list"]],decls:62,vars:7,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//product/taxSlab",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-2",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-2","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Tax Slab list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Tax Slab list"),t.qZA()(),t.YNc(6,L,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(s){return n.titlee=s})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return n.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return n.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(38,"label",27),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(39,"input",28),t.NdJ("ngModelChange",function(s){return n.allSelected=s})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(40,"span",29),t.qZA(),t._UZ(41,"i",30),t.qZA(),t.TgZ(42,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(43,"Sr.No."),t._UZ(44,"i",30),t.qZA(),t.TgZ(45,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(46,"Slab Title"),t._UZ(47,"i",30),t.qZA(),t.TgZ(48,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(49,"Variable Tax "),t._UZ(50,"i",30),t.qZA(),t.TgZ(51,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(52,"Is Active "),t._UZ(53,"i",30),t.qZA(),t.TgZ(54,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(55,"Action "),t._UZ(56,"i",30),t.qZA()()(),t.YNc(57,B,4,11,"tbody",31),t.YNc(58,O,5,0,"tbody",31),t.qZA(),t.TgZ(59,"div",32),t.YNc(60,R,1,0,"mat-progress-bar",33),t.qZA(),t.YNc(61,E,22,4,"div",34),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",n.isAdd),t.xp6(15),t.Q6J("ngModel",n.titlee),t.xp6(18),t.Q6J("ngModel",n.allSelected),t.xp6(18),t.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==n.tableData?null:n.tableData.length)&&!n.loader),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(1),t.Q6J("ngIf",!n.loader))},dependencies:[f.mk,f.sg,f.O5,S.yS,m.YN,m.Kr,m.Fj,m.Wl,m.EJ,m.JJ,m.On,T.pW,b.LS,C.Rr,b._s,x.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),o})();var H=l(30597);const P=JSON.parse(localStorage.getItem("auth"));let Y;P&&P.map(c=>{"product"===c.content_type.app_label&&"taxslabs"===c.content_type.model&&"view_taxslabs"==c.codename&&(Y=c.codename)});const j=[{path:"",component:F,canActivate:[H.l],data:{allowedRoles:["view_taxslabs"]}}];let Q=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[S.Bz.forChild(j),S.Bz]}),o})();var G=l(8468);let z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[f.ez,Q,G.I]}),o})()},65415:(I,Z,l)=>{l.d(Z,{G:()=>A,T:()=>M});var f=l(94650),A=function(){function r(d,a,p){this.el=d,this.vcr=a,this.renderer=p,this.dtOptions={}}return r.prototype.ngOnInit=function(){var d=this;this.dtTrigger?this.dtTrigger.subscribe(function(a){d.displayTable(a)}):this.displayTable(null)},r.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},r.prototype.displayTable=function(d){var a=this;d&&(this.dtOptions=d),this.dtInstance=new Promise(function(p,t){Promise.resolve(a.dtOptions).then(function(g){0===Object.keys(g).length&&0===$("tbody tr",a.el.nativeElement).length?t("Both the table and dtOptions cannot be empty"):setTimeout(function(){var m={rowCallback:function(T,b,C){if(g.columns){var x=g.columns;a.applyNgPipeTransform(T,x),a.applyNgRefTemplate(T,x,b)}g.rowCallback&&g.rowCallback(T,b,C)}};m=Object.assign({},g,m),a.dt=$(a.el.nativeElement).DataTable(m),p(a.dt)})})})},r.prototype.applyNgPipeTransform=function(d,a){a.filter(function(t){return t.ngPipeInstance&&!t.ngTemplateRef}).forEach(function(t){var g=t.ngPipeInstance,_=t.ngPipeArgs||[],m=a.findIndex(function(x){return x.data===t.data}),T=d.childNodes.item(m),b=$(T).text(),C=g.transform.apply(g,function(r,d,a){if(a||2===arguments.length)for(var g,p=0,t=d.length;p<t;p++)(g||!(p in d))&&(g||(g=Array.prototype.slice.call(d,0,p)),g[p]=d[p]);return r.concat(g||Array.prototype.slice.call(d))}([b],_,!1));$(T).text(C)})},r.prototype.applyNgRefTemplate=function(d,a,p){var t=this;a.filter(function(_){return _.ngTemplateRef&&!_.ngPipeInstance}).forEach(function(_){var m=_.ngTemplateRef,T=m.ref,b=m.context,C=a.findIndex(function(w){return w.data===_.data}),x=d.childNodes.item(C);$(x).html("");var L=Object.assign({},b,b?.userData,{adtData:p}),D=t.vcr.createEmbeddedView(T,L);t.renderer.appendChild(x,D.rootNodes[0])})},r.\u0275fac=function(a){return new(a||r)(f.Y36(f.SBq),f.Y36(f.s_b),f.Y36(f.Qsj))},r.\u0275dir=f.lG2({type:r,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),r}(),v=l(36895),M=function(){function r(){}return r.forRoot=function(){return{ngModule:r}},r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=f.oAB({type:r}),r.\u0275inj=f.cJS({imports:[v.ez]}),r}()}}]);