"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1582],{71582:(se,f,r)=>{r.r(f),r.d(f,{AddressStoreModule:()=>V});var _=r(36895),m=r(88996),U=r(35226),g=r.n(U),q=r(53583),M=r(12983),k=r.n(M),p=r(80574),J=r(94327),e=r(94650),w=r(92559),N=r(72326),c=r(24006),D=r(97185),I=r(42917),h=r(54333),A=r(90455),Z=r(73162),T=r(54040);function L(n,l){1&n&&(e.TgZ(0,"div",36)(1,"a",37),e._UZ(2,"img",38),e._uU(3,"Add Address Store "),e.qZA()())}function P(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"th",26),e.NdJ("click",function(){e.CHM(t);const s=e.oxw();return e.KtG(s.sort("id"))}),e._uU(1,"Action "),e._UZ(2,"i",30),e.qZA()}}function B(n,l){if(1&n&&(e.TgZ(0,"a",46),e._UZ(1,"img",47),e.qZA()),2&n){const t=e.oxw().$implicit;e.MGl("routerLink","/website/update-addressStore/",t.id,"")}}function E(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"a",48),e.NdJ("click",function(){e.CHM(t);const s=e.oxw(),i=s.index,d=s.$implicit,a=e.oxw(2);return e.KtG(a.confirmText(i,d.id))}),e._UZ(1,"img",49),e.qZA()}}function O(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",40)(3,"input",41),e.NdJ("ngModelChange",function(s){const d=e.CHM(t).index,a=e.oxw(2);return e.KtG(a.selectedRows[d]=s)}),e.qZA(),e._UZ(4,"span",29),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA(),e.TgZ(15,"td",42),e._uU(16),e.qZA(),e.TgZ(17,"td",42),e._uU(18),e.qZA(),e.TgZ(19,"td"),e._uU(20),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA(),e.TgZ(25,"td"),e._uU(26),e.qZA(),e.TgZ(27,"td",42),e._uU(28),e.qZA(),e.TgZ(29,"td")(30,"mat-slide-toggle",43),e.NdJ("click",function(){const s=e.CHM(t),i=s.$implicit,d=s.index,a=e.oxw(2);return e.KtG(i.is_active?a.deActivate(d,i.id):a.Active(d,i.id))})("ngModelChange",function(s){const d=e.CHM(t).$implicit;return e.KtG(d.is_active=s)}),e.qZA()(),e.TgZ(31,"td"),e.YNc(32,B,2,1,"a",44),e.YNc(33,E,2,0,"a",45),e.qZA()()}if(2&n){const t=l.$implicit,o=l.index,s=e.oxw(2);e.xp6(3),e.Q6J("ngModel",s.selectedRows[o]),e.xp6(3),e.Oqu(o+1),e.xp6(2),e.hij(" ",t.name," "),e.xp6(2),e.Oqu(t.email),e.xp6(2),e.Oqu(t.mobile_no),e.xp6(2),e.Oqu(t.alternative_mobile_no),e.xp6(2),e.Oqu(t.line1),e.xp6(2),e.Oqu(t.line2),e.xp6(2),e.Oqu(t.country),e.xp6(2),e.Oqu(t.state),e.xp6(2),e.Oqu(t.city),e.xp6(2),e.Oqu(t.pincode),e.xp6(2),e.Oqu(t.address),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.Q6J("ngIf",s.isEdit),e.xp6(1),e.Q6J("ngIf",s.isDelete)}}const R=function(n,l){return{itemsPerPage:n,currentPage:l}};function Y(n,l){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,O,34,16,"tr",39),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.tableData,t.key,t.reverse),e.WLB(8,R,t.itemsPerPage,t.p)))}}function F(n,l){1&n&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",50)(3,"p",51),e._uU(4,"Data not available"),e.qZA()()()())}function H(n,l){1&n&&e._UZ(0,"mat-progress-bar",52)}function Q(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"div",53)(1,"div",54)(2,"div",55),e._uU(3," Show per page "),e.TgZ(4,"select",56),e.NdJ("ngModelChange",function(s){e.CHM(t);const i=e.oxw();return e.KtG(i.itemsPerPage=s)}),e.TgZ(5,"option",57),e._uU(6,"10"),e.qZA(),e.TgZ(7,"option",58),e._uU(8,"20"),e.qZA(),e.TgZ(9,"option",59),e._uU(10,"30"),e.qZA(),e.TgZ(11,"option",60),e._uU(12,"50"),e.qZA(),e.TgZ(13,"option",61),e._uU(14,"100"),e.qZA(),e.TgZ(15,"option",62),e._uU(16,"All"),e.qZA()()()(),e.TgZ(17,"div",63)(18,"div",64)(19,"pagination-controls",65),e.NdJ("pageChange",function(s){e.CHM(t);const i=e.oxw();return e.KtG(i.p=s)}),e.qZA(),e.TgZ(20,"div",66),e._uU(21),e.qZA()()()()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.itemsPerPage),e.xp6(17),e.lnq("Showing ",t.itemsPerPage," to ",t.itemsPerPage," of ",t.itemsPerPage," entries")}}let j=(()=>{class n{constructor(t,o,s,i,d,a){this.websiteService=t,this.QueryService=o,this.fb=s,this.toastr=i,this.router=d,this.cs=a,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(t,o){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.websiteService.deleteAddressStore(o).subscribe(i=>{this.delRes=i,"Store Address Deleted successfully"==this.delRes.msg&&(g().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.ngOnInit())}),g().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error}))})}deActivate(t,o){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this Store Address!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.websiteService.AddressStoreIsActive(o,"").subscribe(i=>{this.delRes=i,"Store Address Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),g().fire({icon:"success",title:"Deactivate!",text:"Store Address Is Deactivate Successfully."}))})}Active(t,o){g().fire({title:"Are you sure?",text:"Do you want to Active this Store Address!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.websiteService.AddressStoreIsActive(o,"").subscribe(i=>{this.delRes=i,"Store Address Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),g().fire({icon:"success",title:"Active!",text:"Store Address Is Active Successfully."}))})}ngOnInit(){this.websiteService.getAddressStore().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(s=>{"order"===s.content_type.app_label&&"storeaddress"===s.content_type.model&&"add_storeaddress"==s.codename?this.isAdd=s.codename:"order"===s.content_type.app_label&&"storeaddress"===s.content_type.model&&"change_storeaddress"==s.codename?this.isEdit=s.codename:"order"===s.content_type.app_label&&"storeaddress"===s.content_type.model&&"delete_storeaddress"==s.codename&&(this.isDelete=s.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}deleteId(t){this.websiteService.deleteAddressStore(t).subscribe(o=>{this.delRes=o,"Colors Deleted successfully"==this.delRes.msg&&window.location.reload()})}search(){if(""===this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(o=>o.name.toLocaleLowerCase().includes(t))}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new q.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Address Store list",10,10),k()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Name"},{header:"Email"},{header:"Phone"},{header:"Alternative Mobile No."},{header:"Line 1"},{header:"Line 2"},{header:"Country"},{header:"State"},{header:"City"},{header:"Pincode"},{header:"Address"},{header:"Is Active"}]}),t.save("addressstorelist.pdf")}getVisibleDataFromTable(){const t=[],o=document.getElementById("mytable"),s=o.querySelector("thead tr"),i=o.querySelectorAll("tbody tr"),d=[];return s.querySelectorAll("th").forEach(a=>{const u=a.textContent.trim();"Is Active"!==u&&"Action"!==u&&d.push(u)}),t.push(d),i.forEach(a=>{const u=[];a.querySelectorAll("td").forEach(S=>{u.push(S.textContent.trim())}),t.push(u)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),o=p.P6.aoa_to_sheet(t),s=p.P6.book_new();p.P6.book_append_sheet(s,o,"Sheet1");const i=p.cW(s,{bookType:"xlsx",type:"array"}),d=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,J.saveAs)(d,"addressstorelist.xlsx")}printTable(){const t=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,d=t.cloneNode(!0),a=d.querySelector("th.thone:nth-child(13)");a&&a.remove();const u=d.querySelector("th.thone:last-child");u&&u.remove(),d.querySelectorAll("tr").forEach(C=>{const y=C.querySelector("td:nth-child(13)");y&&y.remove();const x=C.querySelector("td:last-child");x&&x.remove()});const ee=d.outerHTML,te="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+ee,oe=document.body.innerHTML;document.body.innerHTML=te,window.print(),document.body.innerHTML=oe}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(w.K),e.Y36(N._),e.Y36(c.qu),e.Y36(D._W),e.Y36(m.F0),e.Y36(I.J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-address-store"]],decls:87,vars:8,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//website/add-addressStore",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"tdd"],[3,"ngModel","click","ngModelChange"],["class","me-3",3,"routerLink",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-3",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","12"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Address Store list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your Address Store"),e.qZA()(),e.YNc(6,L,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(i){return o.titlee=i})("ngModelChange",function(){return o.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return o.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return o.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return o.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),e.NdJ("click",function(){return o.sort("id")}),e.TgZ(38,"label",27),e.NdJ("click",function(){return o.selectAll(o.initChecked)}),e.TgZ(39,"input",28),e.NdJ("ngModelChange",function(i){return o.allSelected=i})("change",function(){return o.selectAlll()}),e.qZA(),e._UZ(40,"span",29),e.qZA(),e._UZ(41,"i",30),e.qZA(),e.TgZ(42,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(43,"Sr. No."),e._UZ(44,"i",30),e.qZA(),e.TgZ(45,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(46,"Name"),e._UZ(47,"i",30),e.qZA(),e.TgZ(48,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(49,"Email"),e._UZ(50,"i",30),e.qZA(),e.TgZ(51,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(52,"Phone"),e._UZ(53,"i",30),e.qZA(),e.TgZ(54,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(55,"Alternative No."),e._UZ(56,"i",30),e.qZA(),e.TgZ(57,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(58,"Line 1"),e._UZ(59,"i",30),e.qZA(),e.TgZ(60,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(61,"Line 2"),e._UZ(62,"i",30),e.qZA(),e.TgZ(63,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(64,"Country"),e._UZ(65,"i",30),e.qZA(),e.TgZ(66,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(67,"State"),e._UZ(68,"i",30),e.qZA(),e.TgZ(69,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(70,"City"),e._UZ(71,"i",30),e.qZA(),e.TgZ(72,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(73,"Pincode"),e._UZ(74,"i",30),e.qZA(),e.TgZ(75,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(76,"Address"),e._UZ(77,"i",30),e.qZA(),e.TgZ(78,"th",26),e.NdJ("click",function(){return o.sort("id")}),e._uU(79,"Is Active"),e._UZ(80,"i",30),e.qZA(),e.YNc(81,P,3,0,"th",31),e.qZA()(),e.YNc(82,Y,4,11,"tbody",32),e.YNc(83,F,5,0,"tbody",32),e.qZA(),e.TgZ(84,"div",33),e.YNc(85,H,1,0,"mat-progress-bar",34),e.qZA(),e.YNc(86,Q,22,4,"div",35),e.qZA()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",o.isAdd),e.xp6(15),e.Q6J("ngModel",o.titlee),e.xp6(18),e.Q6J("ngModel",o.allSelected),e.xp6(42),e.Q6J("ngIf",o.isEdit||o.isDelete),e.xp6(1),e.Q6J("ngIf",(null==o.tableData?null:o.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0===(null==o.tableData?null:o.tableData.length)&&!o.loader),e.xp6(2),e.Q6J("ngIf",o.loader),e.xp6(1),e.Q6J("ngIf",!o.loader))},dependencies:[_.sg,_.O5,m.yS,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,h.LS,A.Rr,Z.pW,h._s,T.T],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}.tdd[_ngcontent-%COMP%]{padding:10px;color:#637381;font-weight:500;border-bottom:1px solid #E9ECEF;vertical-align:middle;white-space:pre-line}"]}),n})();var K=r(30597);const v=JSON.parse(localStorage.getItem("auth"));let G;v&&v.map(l=>{"order"===l.content_type.app_label&&"storeaddress"===l.content_type.model&&"view_storeaddress"==l.codename&&(G=l.codename)});const $=[{path:"",component:j,canActivate:[K.l],data:{allowedRoles:["view_storeaddress"]}}];let z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[m.Bz.forChild($),m.Bz]}),n})();var b=r(30906),W=r(96134),X=r(43189);let V=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[_.ez,z,b.ZU,c.u5,c.UX,b.ZU,W.ii.forRoot(),X.h,h.JX,T.l,A.rP,Z.Cv]}),n})()}}]);