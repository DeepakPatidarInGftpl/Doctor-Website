"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[19224],{19224:(w,S,o)=>{o.r(S),o.d(S,{TaxSlabsListModule:()=>z});var d=o(36895),b=o(4392),A=o(35226),u=o.n(A),C=o(96166),y=o(12983),p=o.n(y),T=o(80574),h=o(94327),e=o(94650),v=o(80927),_=o(42917),g=o(24006),f=o(73162),x=o(54333),Z=o(90455),J=o(54040);function k(s,a){1&s&&(e.TgZ(0,"div",46)(1,"a",47),e._UZ(2,"img",48),e._uU(3,"Add Tax Slab "),e.qZA()())}const O=function(s,a){return{"bg-lightgreen":s,"bg-lightred":a}};function E(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",50)(3,"input",51),e.NdJ("ngModelChange",function(n){const r=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[r]=n)}),e.qZA(),e._UZ(4,"span",40),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",52)(8,"a",53),e._uU(9),e.qZA()(),e.TgZ(10,"td")(11,"span",54),e._uU(12),e.qZA()(),e.TgZ(13,"td")(14,"mat-slide-toggle",55),e.NdJ("click",function(){const n=e.CHM(t),l=n.$implicit,r=n.index,c=e.oxw(2);return e.KtG(l.is_active?c.isActive(r,l.id):c.Active(r,l.id))})("ngModelChange",function(n){const r=e.CHM(t).$implicit;return e.KtG(r.is_active=n)}),e.qZA()(),e.TgZ(15,"td")(16,"a",56),e._UZ(17,"img",57),e.qZA(),e.TgZ(18,"a",56),e._UZ(19,"img",58),e.qZA(),e.TgZ(20,"a",59),e.NdJ("click",function(){const n=e.CHM(t),l=n.index,r=n.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(l,r.id))}),e._UZ(21,"img",60),e.qZA()()()}if(2&s){const t=a.$implicit,i=a.index,n=e.oxw(2);e.xp6(3),e.Q6J("ngModel",n.selectedRows[i]),e.xp6(3),e.Oqu(i+1),e.xp6(2),e.MGl("routerLink","//product/taxSlabDetail/",t.id,""),e.xp6(1),e.Oqu(null==t?null:t.slab_title),e.xp6(2),e.Q6J("ngClass",e.WLB(9,O,!0===(null==t?null:t.variable_tax),!1===(null==t?null:t.variable_tax))),e.xp6(1),e.Oqu(null==t?null:t.variable_tax),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//product/taxSlabDetail/",t.id,""),e.xp6(2),e.MGl("routerLink","//product/taxSlabUpdate/",t.id,"")}}const N=function(s,a){return{itemsPerPage:s,currentPage:a}};function q(s,a){if(1&s&&(e.TgZ(0,"tbody"),e.YNc(1,E,22,12,"tr",49),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,N,t.itemsPerPage,t.p)))}}function B(s,a){1&s&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",61)(3,"p",62),e._uU(4,"Data not available"),e.qZA()()()())}function I(s,a){1&s&&e._UZ(0,"mat-progress-bar",63)}function R(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"div",26)(1,"div",64)(2,"div",65),e._uU(3," Show per page "),e.TgZ(4,"select",66,67),e.NdJ("ngModelChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.itemsPerPage=n)})("change",function(){e.CHM(t);const n=e.MAs(5),l=e.oxw();return e.KtG(l.changePg(n.value))}),e.TgZ(6,"option",68),e._uU(7,"10"),e.qZA(),e.TgZ(8,"option",69),e._uU(9,"20"),e.qZA(),e.TgZ(10,"option",70),e._uU(11,"30"),e.qZA(),e.TgZ(12,"option",71),e._uU(13,"50"),e.qZA(),e.TgZ(14,"option",72),e._uU(15,"100"),e.qZA(),e.TgZ(16,"option",73),e._uU(17,"All"),e.qZA()()()(),e.TgZ(18,"div",74)(19,"div",75)(20,"pagination-controls",76),e.NdJ("pageChange",function(n){e.CHM(t);const l=e.oxw();return e.KtG(l.p=n)}),e.qZA(),e.TgZ(21,"div",77),e._uU(22),e.qZA()()()()}if(2&s){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.itemsPerPage),e.xp6(18),e.lnq("Showing ",t.itemsPerPage," to ",null==t.tableData?null:t.tableData.length," of ",t.p," entries ")}}let F=(()=>{class s{constructor(t,i){this.coreService=t,this.cs=i,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.row=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1}confirmText(t,i){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.coreService.deleteTaxSlab(i).subscribe(l=>{this.delRes=l,this.delRes.success?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,i){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this Tax Slabs!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.taxSlabIsActive(i,"").subscribe(l=>{this.delRes=l,this.delRes.success&&this.ngOnInit()}),u().fire({icon:"success",title:"Deactivate!",text:"Tax Slabs Is Deactivate Successfully."}))})}Active(t,i){u().fire({title:"Are you sure?",text:"Do you want to Active this Tax Slabs!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.taxSlabIsActive(i,"").subscribe(l=>{this.delRes=l,this.delRes.success&&this.ngOnInit()}),u().fire({icon:"success",title:"Active!",text:"Tax Slabs Is Active Successfully."}))})}ngOnInit(){this.coreService.getTaxSlab().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(n=>{"product"===n.content_type.app_label&&"taxslabs"===n.content_type.model&&"add_taxslabs"==n.codename?this.isAdd=n.codename:"product"===n.content_type.app_label&&"taxslabs"===n.content_type.model&&"change_taxslabs"==n.codename?this.isEdit=n.codename:"product"===n.content_type.app_label&&"taxslabs"===n.content_type.model&&"delete_taxslabs"==n.codename&&(this.isDelete=n.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}filterData(){let t=this.tableData.slice();null!=this.selectActive&&(t=t.filter(i=>i?.is_active===this.selectActive)),this.filteredData=t}clearFilter(){this.selectActive=void 0,this.filterData()}deleteId(t){this.coreService.deleteEmployee(t).subscribe(i=>{this.delRes=i})}search(){if(""===this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(i=>i?.slab_title.toLocaleLowerCase().includes(t))}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new C.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Tax Slab List",10,10),p()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Subcategory Group"},{header:"SubCategory"},{header:"Is Active"}]}),t.save("taxslab.pdf")}generatePDFAgain(){const t=new C.default;t.setFontSize(12),t.setTextColor(33,43,54),t.text("Tax List",82,10),t.text("",10,15),p()(t,{head:[["#","Slab Title","Variable Tax"]],body:this.tableData.map((n,l)=>[l+1,n.slab_title,n.variable_tax]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),t.save("Tax_slab .pdf")}getVisibleDataFromTable(){const t=[],i=document.getElementById("mytable"),n=i.querySelector("thead tr"),l=i.querySelectorAll("tbody tr"),r=[];return n.querySelectorAll("th").forEach(c=>{const m=c.textContent.trim();"Is Active"!==m&&"Action"!==m&&r.push(m)}),t.push(r),l.forEach(c=>{const m=[];c.querySelectorAll("td").forEach(M=>{m.push(M.textContent.trim())}),t.push(m)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),i=T.P6.aoa_to_sheet(t),n=T.P6.book_new();T.P6.book_append_sheet(n,i,"Sheet1");const l=T.cW(n,{bookType:"xlsx",type:"array"}),r=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(r,"taxslab.xlsx")}printTable(){const t=document.getElementById("mytable"),l=document.querySelector(".titl").outerHTML,r=t.cloneNode(!0),c=r.querySelector("th.thone:nth-child(5)");c&&c.remove();const m=r.querySelector("th.thone:last-child");m&&m.remove(),r.querySelectorAll("tr").forEach(D=>{const U=D.querySelector("td:nth-child(5)");U&&U.remove();const P=D.querySelector("td:last-child");P&&P.remove()});const W=r.outerHTML,V="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+W,j=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=V,window.print(),document.body.innerHTML=j}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.filteredData.length)}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(v.p),e.Y36(_.J))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-tax-slabs-list"]],decls:81,vars:11,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Slab...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],[1,"form-select",3,"ngModel","ngModelChange","change"],["selected","","disabled","",3,"ngValue"],[3,"ngValue"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto","w-25"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//product/taxSlab",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-2",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-2","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Tax Slab list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Tax Slab list"),e.qZA()(),e.YNc(6,k,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(l){return i.titlee=l})("ngModelChange",function(){return i.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return i.generatePDFAgain()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return i.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return i.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Is Active"),e.qZA(),e.TgZ(42,"select",30),e.NdJ("ngModelChange",function(l){return i.selectActive=l})("change",function(){return i.filterData()}),e.TgZ(43,"option",31),e._uU(44,"Select Active Status"),e.qZA(),e.TgZ(45,"option",32),e._uU(46,"Yes"),e.qZA(),e.TgZ(47,"option",32),e._uU(48,"No"),e.qZA()()()()(),e.TgZ(49,"div",33),e.NdJ("click",function(){return i.clearFilter()}),e.TgZ(50,"a",34),e._uU(51,"Clear Filter"),e.qZA()()()()()(),e.TgZ(52,"div",35)(53,"table",36)(54,"thead")(55,"tr")(56,"th",37),e.NdJ("click",function(){return i.sort("id")}),e.TgZ(57,"label",38),e.NdJ("click",function(){return i.selectAll(i.initChecked)}),e.TgZ(58,"input",39),e.NdJ("ngModelChange",function(l){return i.allSelected=l})("change",function(){return i.selectAlll()}),e.qZA(),e._UZ(59,"span",40),e.qZA(),e._UZ(60,"i",41),e.qZA(),e.TgZ(61,"th",37),e.NdJ("click",function(){return i.sort("id")}),e._uU(62,"Sr.No."),e._UZ(63,"i",41),e.qZA(),e.TgZ(64,"th",37),e.NdJ("click",function(){return i.sort("id")}),e._uU(65,"Slab Title"),e._UZ(66,"i",41),e.qZA(),e.TgZ(67,"th",37),e.NdJ("click",function(){return i.sort("id")}),e._uU(68,"Variable Tax "),e._UZ(69,"i",41),e.qZA(),e.TgZ(70,"th",37),e.NdJ("click",function(){return i.sort("id")}),e._uU(71,"Is Active "),e._UZ(72,"i",41),e.qZA(),e.TgZ(73,"th",37),e.NdJ("click",function(){return i.sort("id")}),e._uU(74,"Action "),e._UZ(75,"i",41),e.qZA()()(),e.YNc(76,q,4,11,"tbody",42),e.YNc(77,B,5,0,"tbody",42),e.qZA(),e.TgZ(78,"div",43),e.YNc(79,I,1,0,"mat-progress-bar",44),e.qZA(),e.YNc(80,R,23,4,"div",45),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",i.isAdd),e.xp6(15),e.Q6J("ngModel",i.titlee),e.xp6(21),e.Q6J("ngModel",i.selectActive),e.xp6(1),e.Q6J("ngValue",void 0),e.xp6(2),e.Q6J("ngValue",!0),e.xp6(2),e.Q6J("ngValue",!1),e.xp6(11),e.Q6J("ngModel",i.allSelected),e.xp6(18),e.Q6J("ngIf",(null==i.filteredData?null:i.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==i.filteredData?null:i.filteredData.length)&&!i.loader),e.xp6(2),e.Q6J("ngIf",i.loader),e.xp6(1),e.Q6J("ngIf",!i.loader))},dependencies:[d.mk,d.sg,d.O5,b.yS,g.YN,g.Kr,g.Fj,g.Wl,g.EJ,g.JJ,g.On,f.pW,x.LS,Z.Rr,x._s,J.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),s})();var G=o(30597);const L=JSON.parse(localStorage.getItem("auth"));let H;L&&L.map(a=>{"product"===a.content_type.app_label&&"taxslabs"===a.content_type.model&&"view_taxslabs"==a.codename&&(H=a.codename)});const Q=[{path:"",component:F,canActivate:[G.l],data:{allowedRoles:["view_taxslabs"]}}];let Y=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[b.Bz.forChild(Q),b.Bz]}),s})();var K=o(8468);let z=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[d.ez,Y,K.I]}),s})()},30597:(w,S,o)=>{o.d(S,{l:()=>y});var d=o(94650),b=o(4392),A=o(97185),u=o(42917),C=o(80927);let y=(()=>{class p{constructor(h,e,v,_,g){this.router=h,this.Arout=e,this.toastr=v,this.profileService=_,this.coreService=g}canActivate(h,e){const v=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),v){const _=h.data.allowedRoles,g=v.some(f=>_.includes(f.codename));if(this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(f);const x=f?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==x.length)&&(this.profileService.setUserPermission(x),window.location.reload())}),g)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(h){return new(h||p)(d.LFG(b.F0),d.LFG(b.gz),d.LFG(A._W),d.LFG(u.J),d.LFG(C.p))},p.\u0275prov=d.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);