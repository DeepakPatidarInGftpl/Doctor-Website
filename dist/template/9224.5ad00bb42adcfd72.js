"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9224],{19224:(V,_,a)=>{a.r(_),a.d(_,{TaxSlabsListModule:()=>z});var u=a(36895),h=a(88996),Z=a(35226),g=a.n(Z),y=a(53583),A=a(12983),L=a.n(A),m=a(80574),M=a(94327),t=a(94650),U=a(80927),w=a(42917),p=a(24006),D=a(73162),f=a(54333),J=a(90455),k=a(54040);function q(s,l){1&s&&(t.TgZ(0,"div",35)(1,"a",36),t._UZ(2,"img",37),t._uU(3,"Add Tax Slab "),t.qZA()())}function P(s,l){if(1&s&&(t.TgZ(0,"a",42),t._UZ(1,"img",46),t.qZA()),2&s){const e=t.oxw().$implicit;t.MGl("routerLink","//product/taxSlabUpdate/",e.id,"")}}function I(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"a",47),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),i=o.index,c=o.$implicit,r=t.oxw(2);return t.KtG(r.confirmText(i,c.id))}),t._UZ(1,"img",48),t.qZA()}}function N(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",39)(3,"input",40),t.NdJ("ngModelChange",function(o){const c=t.CHM(e).index,r=t.oxw(2);return t.KtG(r.selectedRows[c]=o)}),t.qZA(),t._UZ(4,"span",29),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"mat-slide-toggle",41),t.NdJ("click",function(){const o=t.CHM(e),i=o.$implicit,c=o.index,r=t.oxw(2);return t.KtG(i.is_active?r.isActive(c,i.id):r.Active(c,i.id))})("ngModelChange",function(o){const c=t.CHM(e).$implicit;return t.KtG(c.is_active=o)}),t.qZA()(),t.TgZ(13,"td")(14,"a",42),t._UZ(15,"img",43),t.qZA(),t.YNc(16,P,2,1,"a",44),t.YNc(17,I,2,0,"a",45),t.qZA()()}if(2&s){const e=l.$implicit,n=l.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[n]),t.xp6(3),t.Oqu(n+1),t.xp6(2),t.hij(" ",e.subcategory_group.title," "),t.xp6(2),t.Oqu(null==e?null:e.subcategory[0].title),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//product/taxSlabDetail/",e.id,""),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const B=function(s,l){return{itemsPerPage:s,currentPage:l}};function O(s,l){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,N,18,8,"tr",38),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,B,e.itemsPerPage,e.p)))}}function E(s,l){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",49)(3,"p",50),t._uU(4,"Data not available"),t.qZA()()()())}function R(s,l){1&s&&t._UZ(0,"mat-progress-bar",51)}function H(s,l){if(1&s){const e=t.EpF();t.TgZ(0,"div",52)(1,"div",53)(2,"div",54),t._uU(3," Show per page "),t.TgZ(4,"select",55),t.NdJ("ngModelChange",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.itemsPerPage=o)}),t.TgZ(5,"option",56),t._uU(6,"10"),t.qZA(),t.TgZ(7,"option",57),t._uU(8,"20"),t.qZA(),t.TgZ(9,"option",58),t._uU(10,"30"),t.qZA(),t.TgZ(11,"option",59),t._uU(12,"50"),t.qZA(),t.TgZ(13,"option",60),t._uU(14,"100"),t.qZA(),t.TgZ(15,"option",61),t._uU(16,"All"),t.qZA()()()(),t.TgZ(17,"div",62)(18,"div",63)(19,"pagination-controls",64),t.NdJ("pageChange",function(o){t.CHM(e);const i=t.oxw();return t.KtG(i.p=o)}),t.qZA(),t.TgZ(20,"div",65),t._uU(21),t.qZA()()()()}if(2&s){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(17),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}let F=(()=>{class s{constructor(e,n){this.coreService=e,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.row=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1}confirmText(e,n){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.coreService.deleteTaxSlab(n).subscribe(i=>{this.delRes=i,"Tax Slabs Deleted successfully"==this.delRes.msg?(this.ngOnInit(),g().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."})):g().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,n){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this product!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.taxSlabIsActive(n,"").subscribe(i=>{this.delRes=i,"Tax Slabs Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),g().fire({icon:"success",title:"Deactivate!",text:"Tax Slabs Is Deactivate Successfully."}))})}Active(e,n){g().fire({title:"Are you sure?",text:"Do you want to Active this product!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.taxSlabIsActive(n,"").subscribe(i=>{this.delRes=i,"Tax Slabs Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),g().fire({icon:"success",title:"Active!",text:"Tax Slabs Is Active Successfully."}))})}ngOnInit(){this.coreService.getTaxSlab().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission.map(o=>{"product"===o.content_type.app_label&&"taxslabs"===o.content_type.model&&"add_taxslabs"==o.codename?(this.isAdd=o.codename,console.log(this.isAdd)):"product"===o.content_type.app_label&&"taxslabs"===o.content_type.model&&"change_taxslabs"==o.codename?(this.isEdit=o.codename,console.log(this.isEdit)):"product"===o.content_type.app_label&&"taxslabs"===o.content_type.model&&"delete_taxslabs"==o.codename&&(this.isDelete=o.codename,console.log(this.isDelete))})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(e){this.coreService.deleteEmployee(e).subscribe(n=>{this.delRes=n})}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(n=>n.subcategory_group?.title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new y.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Tax Slab List",10,10),L()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Subcategory Group"},{header:"SubCategory"},{header:"Is Active"}]}),e.save("taxslab.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),i=n.querySelectorAll("tbody tr"),c=[];return o.querySelectorAll("th").forEach(r=>{const d=r.textContent.trim();"Is Active"!==d&&"Action"!==d&&c.push(d)}),e.push(c),i.forEach(r=>{const d=[];r.querySelectorAll("td").forEach(x=>{d.push(x.textContent.trim())}),e.push(d)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=m.P6.aoa_to_sheet(e),o=m.P6.book_new();m.P6.book_append_sheet(o,n,"Sheet1");const i=m.cW(o,{bookType:"xlsx",type:"array"}),c=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,M.saveAs)(c,"taxslab.xlsx")}printTable(){const e=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,c=e.cloneNode(!0),r=c.querySelector("th.thone:nth-child(5)");r&&r.remove();const d=c.querySelector("th.thone:last-child");d&&d.remove(),c.querySelectorAll("tr").forEach(v=>{const S=v.querySelector("td:nth-child(5)");S&&S.remove();const C=v.querySelector("td:last-child");C&&C.remove()});const K=c.outerHTML,$="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+K,W=document.body.innerHTML;document.body.innerHTML=$,window.print(),document.body.innerHTML=W}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(U.p),t.Y36(w.J))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-tax-slabs-list"]],decls:62,vars:7,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//product/taxSlab",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[3,"ngModel","click","ngModelChange"],[1,"me-2",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-2",3,"routerLink",4,"ngIf"],["class","me-2 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-2","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Tax Slab list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Tax Slab list"),t.qZA()(),t.YNc(6,q,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(i){return n.titlee=i})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return n.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return n.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(38,"label",27),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(39,"input",28),t.NdJ("ngModelChange",function(i){return n.allSelected=i})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(40,"span",29),t.qZA(),t._UZ(41,"i",30),t.qZA(),t.TgZ(42,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(43,"Sr.No."),t._UZ(44,"i",30),t.qZA(),t.TgZ(45,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(46,"Subcategory Group "),t._UZ(47,"i",30),t.qZA(),t.TgZ(48,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(49,"SubCategory "),t._UZ(50,"i",30),t.qZA(),t.TgZ(51,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(52,"Is Active "),t._UZ(53,"i",30),t.qZA(),t.TgZ(54,"th",26),t.NdJ("click",function(){return n.sort("id")}),t._uU(55,"Action "),t._UZ(56,"i",30),t.qZA()()(),t.YNc(57,O,4,11,"tbody",31),t.YNc(58,E,5,0,"tbody",31),t.qZA(),t.TgZ(59,"div",32),t.YNc(60,R,1,0,"mat-progress-bar",33),t.qZA(),t.YNc(61,H,22,4,"div",34),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",n.isAdd),t.xp6(15),t.Q6J("ngModel",n.titlee),t.xp6(18),t.Q6J("ngModel",n.allSelected),t.xp6(18),t.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==n.tableData?null:n.tableData.length)&&!n.loader),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(1),t.Q6J("ngIf",!n.loader))},dependencies:[u.sg,u.O5,h.yS,p.YN,p.Kr,p.Fj,p.Wl,p.EJ,p.JJ,p.On,D.pW,f.LS,J.Rr,f._s,k.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),s})();var Y=a(30597);const b=JSON.parse(localStorage.getItem("auth"));let T;b&&b.permission&&b.permission.map(l=>{"product"===l.content_type.app_label&&"taxslabs"===l.content_type.model&&"view_taxslabs"==l.codename&&(T=l.codename,console.log(T))});const Q=[{path:"",component:F,canActivate:[Y.l],data:{allowedRoles:["view_taxslabs"]}}];let G=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[h.Bz.forChild(Q),h.Bz]}),s})();var j=a(8468);let z=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[u.ez,G,j.I]}),s})()}}]);