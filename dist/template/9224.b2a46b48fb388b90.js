"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9224],{19224:(w,S,i)=>{i.r(S),i.d(S,{TaxSlabsListModule:()=>z});var g=i(36895),b=i(89299),Z=i(35226),u=i.n(Z),y=i(96166),A=i(12983),p=i.n(A),f=i(80574),_=i(94327),t=i(94650),T=i(80927),h=i(42917),d=i(24006),x=i(73162),v=i(54333),C=i(90455),J=i(54040);function O(o,a){1&o&&(t.TgZ(0,"div",35)(1,"a",36),t._UZ(2,"img",37),t._uU(3,"Add Tax Slab "),t.qZA()())}const B=function(o,a){return{"bg-lightgreen":o,"bg-lightred":a}};function E(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",39)(3,"input",40),t.NdJ("ngModelChange",function(n){const r=t.CHM(e).index,c=t.oxw(2);return t.KtG(c.selectedRows[r]=n)}),t.qZA(),t._UZ(4,"span",29),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",41)(8,"a",42),t._uU(9),t.qZA()(),t.TgZ(10,"td")(11,"span",43),t._uU(12),t.qZA()(),t.TgZ(13,"td")(14,"mat-slide-toggle",44),t.NdJ("click",function(){const n=t.CHM(e),l=n.$implicit,r=n.index,c=t.oxw(2);return t.KtG(l.is_active?c.isActive(r,l.id):c.Active(r,l.id))})("ngModelChange",function(n){const r=t.CHM(e).$implicit;return t.KtG(r.is_active=n)}),t.qZA()(),t.TgZ(15,"td")(16,"a",45),t._UZ(17,"img",46),t.qZA(),t.TgZ(18,"a",45),t._UZ(19,"img",47),t.qZA(),t.TgZ(20,"a",48),t.NdJ("click",function(){const n=t.CHM(e),l=n.index,r=n.$implicit,c=t.oxw(2);return t.KtG(c.confirmText(l,r.id))}),t._UZ(21,"img",49),t.qZA()()()}if(2&o){const e=a.$implicit,s=a.index,n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedRows[s]),t.xp6(3),t.Oqu(s+1),t.xp6(2),t.MGl("routerLink","//product/taxSlabDetail/",e.id,""),t.xp6(1),t.Oqu(null==e?null:e.slab_title),t.xp6(2),t.Q6J("ngClass",t.WLB(9,B,!0===(null==e?null:e.variable_tax),!1===(null==e?null:e.variable_tax))),t.xp6(1),t.Oqu(null==e?null:e.variable_tax),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//product/taxSlabDetail/",e.id,""),t.xp6(2),t.MGl("routerLink","//product/taxSlabUpdate/",e.id,"")}}const k=function(o,a){return{itemsPerPage:o,currentPage:a}};function I(o,a){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,E,22,12,"tr",38),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,k,e.itemsPerPage,e.p)))}}function R(o,a){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",50)(3,"p",51),t._uU(4,"Data not available"),t.qZA()()()())}function N(o,a){1&o&&t._UZ(0,"mat-progress-bar",52)}function q(o,a){if(1&o){const e=t.EpF();t.TgZ(0,"div",53)(1,"div",54)(2,"div",55),t._uU(3," Show per page "),t.TgZ(4,"select",56),t.NdJ("ngModelChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.itemsPerPage=n)}),t.TgZ(5,"option",57),t._uU(6,"10"),t.qZA(),t.TgZ(7,"option",58),t._uU(8,"20"),t.qZA(),t.TgZ(9,"option",59),t._uU(10,"30"),t.qZA(),t.TgZ(11,"option",60),t._uU(12,"50"),t.qZA(),t.TgZ(13,"option",61),t._uU(14,"100"),t.qZA(),t.TgZ(15,"option",62),t._uU(16,"All"),t.qZA()()()(),t.TgZ(17,"div",63)(18,"div",64)(19,"pagination-controls",65),t.NdJ("pageChange",function(n){t.CHM(e);const l=t.oxw();return t.KtG(l.p=n)}),t.qZA(),t.TgZ(20,"div",66),t._uU(21),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(17),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}let F=(()=>{class o{constructor(e,s){this.coreService=e,this.cs=s,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.row=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1}confirmText(e,s){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.coreService.deleteTaxSlab(s).subscribe(l=>{this.delRes=l,this.delRes.success?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(e,s){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this Tax Slabs!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.taxSlabIsActive(s,"").subscribe(l=>{this.delRes=l,this.delRes.success&&this.ngOnInit()}),u().fire({icon:"success",title:"Deactivate!",text:"Tax Slabs Is Deactivate Successfully."}))})}Active(e,s){u().fire({title:"Are you sure?",text:"Do you want to Active this Tax Slabs!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.taxSlabIsActive(s,"").subscribe(l=>{this.delRes=l,this.delRes.success&&this.ngOnInit()}),u().fire({icon:"success",title:"Active!",text:"Tax Slabs Is Active Successfully."}))})}ngOnInit(){this.coreService.getTaxSlab().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(n=>{"product"===n.content_type.app_label&&"taxslabs"===n.content_type.model&&"add_taxslabs"==n.codename?this.isAdd=n.codename:"product"===n.content_type.app_label&&"taxslabs"===n.content_type.model&&"change_taxslabs"==n.codename?this.isEdit=n.codename:"product"===n.content_type.app_label&&"taxslabs"===n.content_type.model&&"delete_taxslabs"==n.codename&&(this.isDelete=n.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?s=>{s.isSelected=!1}:s=>{s.isSelected=!0})}deleteId(e){this.coreService.deleteEmployee(e).subscribe(s=>{this.delRes=s})}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(s=>s?.slab_title.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new y.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Tax Slab List",10,10),p()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Subcategory Group"},{header:"SubCategory"},{header:"Is Active"}]}),e.save("taxslab.pdf")}getVisibleDataFromTable(){const e=[],s=document.getElementById("mytable"),n=s.querySelector("thead tr"),l=s.querySelectorAll("tbody tr"),r=[];return n.querySelectorAll("th").forEach(c=>{const m=c.textContent.trim();"Is Active"!==m&&"Action"!==m&&r.push(m)}),e.push(r),l.forEach(c=>{const m=[];c.querySelectorAll("td").forEach(M=>{m.push(M.textContent.trim())}),e.push(m)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),s=f.P6.aoa_to_sheet(e),n=f.P6.book_new();f.P6.book_append_sheet(n,s,"Sheet1");const l=f.cW(n,{bookType:"xlsx",type:"array"}),r=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,_.saveAs)(r,"taxslab.xlsx")}printTable(){const e=document.getElementById("mytable"),l=document.querySelector(".titl").outerHTML,r=e.cloneNode(!0),c=r.querySelector("th.thone:nth-child(5)");c&&c.remove();const m=r.querySelector("th.thone:last-child");m&&m.remove(),r.querySelectorAll("tr").forEach(D=>{const U=D.querySelector("td:nth-child(5)");U&&U.remove();const P=D.querySelector("td:last-child");P&&P.remove()});const W=r.outerHTML,j="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+W,$=document.body.innerHTML;document.body.innerHTML=j,window.print(),document.body.innerHTML=$}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(T.p),t.Y36(h.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-tax-slabs-list"]],decls:62,vars:7,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Slab...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//product/taxSlab",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-2",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-2","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Tax Slab list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Tax Slab list"),t.qZA()(),t.YNc(6,O,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(l){return s.titlee=l})("ngModelChange",function(){return s.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return s.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return s.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return s.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),t.NdJ("click",function(){return s.sort("id")}),t.TgZ(38,"label",27),t.NdJ("click",function(){return s.selectAll(s.initChecked)}),t.TgZ(39,"input",28),t.NdJ("ngModelChange",function(l){return s.allSelected=l})("change",function(){return s.selectAlll()}),t.qZA(),t._UZ(40,"span",29),t.qZA(),t._UZ(41,"i",30),t.qZA(),t.TgZ(42,"th",26),t.NdJ("click",function(){return s.sort("id")}),t._uU(43,"Sr.No."),t._UZ(44,"i",30),t.qZA(),t.TgZ(45,"th",26),t.NdJ("click",function(){return s.sort("id")}),t._uU(46,"Slab Title"),t._UZ(47,"i",30),t.qZA(),t.TgZ(48,"th",26),t.NdJ("click",function(){return s.sort("id")}),t._uU(49,"Variable Tax "),t._UZ(50,"i",30),t.qZA(),t.TgZ(51,"th",26),t.NdJ("click",function(){return s.sort("id")}),t._uU(52,"Is Active "),t._UZ(53,"i",30),t.qZA(),t.TgZ(54,"th",26),t.NdJ("click",function(){return s.sort("id")}),t._uU(55,"Action "),t._UZ(56,"i",30),t.qZA()()(),t.YNc(57,I,4,11,"tbody",31),t.YNc(58,R,5,0,"tbody",31),t.qZA(),t.TgZ(59,"div",32),t.YNc(60,N,1,0,"mat-progress-bar",33),t.qZA(),t.YNc(61,q,22,4,"div",34),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",s.isAdd),t.xp6(15),t.Q6J("ngModel",s.titlee),t.xp6(18),t.Q6J("ngModel",s.allSelected),t.xp6(18),t.Q6J("ngIf",(null==s.tableData?null:s.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==s.tableData?null:s.tableData.length)&&!s.loader),t.xp6(2),t.Q6J("ngIf",s.loader),t.xp6(1),t.Q6J("ngIf",!s.loader))},dependencies:[g.mk,g.sg,g.O5,b.yS,d.YN,d.Kr,d.Fj,d.Wl,d.EJ,d.JJ,d.On,x.pW,v.LS,C.Rr,v._s,J.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),o})();var G=i(30597);const L=JSON.parse(localStorage.getItem("auth"));let H;L&&L.map(a=>{"product"===a.content_type.app_label&&"taxslabs"===a.content_type.model&&"view_taxslabs"==a.codename&&(H=a.codename)});const Y=[{path:"",component:F,canActivate:[G.l],data:{allowedRoles:["view_taxslabs"]}}];let K=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[b.Bz.forChild(Y),b.Bz]}),o})();var Q=i(8468);let z=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.ez,K,Q.I]}),o})()},30597:(w,S,i)=>{i.d(S,{l:()=>A});var g=i(94650),b=i(89299),Z=i(97185),u=i(42917),y=i(80927);let A=(()=>{class p{constructor(_,t,T,h,d){this.router=_,this.Arout=t,this.toastr=T,this.profileService=h,this.coreService=d}canActivate(_,t){const T=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(h=>{this.userDetails=h,this.permissions=this.userDetails?.permission}),T){const h=_.data.allowedRoles;console.log(h,"allowedRoles");const d=T.some(x=>h.includes(x.codename));if(console.log(d),this.coreService.getProfile().subscribe(x=>{this.userDetails=x,this.profileService.setUserDetails(this.userDetails);const v=x?.permission,C=this.profileService.getUserDetails();(!C||C.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}),d)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(_){return new(_||p)(g.LFG(b.F0),g.LFG(b.gz),g.LFG(Z._W),g.LFG(u.J),g.LFG(y.p))},p.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);