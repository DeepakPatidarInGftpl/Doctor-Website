"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8776],{38776:(q,C,l)=>{l.r(C),l.d(C,{ListInvoiceAmountModule:()=>K});var d=l(36895),f=l(89299),I=l(2454),m=l.n(I),b=l(96166),D=l(12983),_=l.n(D),v=l(80574),h=l(94327),t=l(94650),A=l(53989),g=l(42917),u=l(24006),T=l(73162),Z=l(54333),y=l(90455),k=l(54040);function J(s,a){1&s&&(t.TgZ(0,"div",49)(1,"a",50),t._UZ(2,"img",51),t._uU(3,"Add Invoice Amount "),t.qZA()())}function N(s,a){if(1&s&&(t.TgZ(0,"a",59),t._UZ(1,"img",63),t.qZA()),2&s){const n=t.oxw(2).$implicit;t.MGl("routerLink","//offer/edit-invoice-amount/",n.id,"")}}function B(s,a){if(1&s){const n=t.EpF();t.TgZ(0,"a",64),t.NdJ("click",function(){t.CHM(n);const e=t.oxw(2),i=e.index,c=e.$implicit,r=t.oxw(2);return t.KtG(r.confirmText(i,c.id))}),t._UZ(1,"img",65),t.qZA()}}const L=function(s,a){return{"bg-lightgreen":s,"bg-lightred":a}};function O(s,a){if(1&s){const n=t.EpF();t.ynx(0),t.TgZ(1,"td")(2,"label",53)(3,"input",54),t.NdJ("ngModelChange",function(e){t.CHM(n);const i=t.oxw().index,c=t.oxw(2);return t.KtG(c.selectedRows[i]=e)}),t.qZA(),t._UZ(4,"span",29),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",55)(8,"a",56),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"span",57),t._uU(22),t.qZA()(),t.TgZ(23,"td")(24,"span",57),t._uU(25),t.qZA()(),t.TgZ(26,"td")(27,"span",57),t._uU(28),t.qZA()(),t.TgZ(29,"td")(30,"span",57),t._uU(31),t.qZA()(),t.TgZ(32,"td")(33,"mat-slide-toggle",58),t.NdJ("click",function(){t.CHM(n);const e=t.oxw(),i=e.$implicit,c=e.index,r=t.oxw(2);return t.KtG(null!=i&&i.is_active?r.isActive(c,null==i?null:i.id):r.Active(c,null==i?null:i.id))})("ngModelChange",function(e){t.CHM(n);const i=t.oxw().$implicit;return t.KtG(i.is_active=e)}),t.qZA()(),t.TgZ(34,"td")(35,"a",59),t._UZ(36,"img",60),t.qZA(),t.YNc(37,N,2,1,"a",61),t.YNc(38,B,2,0,"a",62),t.qZA(),t.BQk()}if(2&s){const n=t.oxw(),o=n.index,e=n.$implicit,i=t.oxw(2);t.xp6(3),t.Q6J("ngModel",i.selectedRows[o]),t.xp6(3),t.Oqu(o+1),t.xp6(3),t.Oqu(e.name),t.xp6(2),t.Oqu(e.discount_type),t.xp6(2),t.Oqu(e.start_date),t.xp6(2),t.Oqu(e.end_date),t.xp6(2),t.Oqu(null==e.business_location?null:e.business_location.title),t.xp6(2),t.Oqu(null==e.customers_group?null:e.customers_group.title),t.xp6(2),t.Q6J("ngClass",t.WLB(20,L,!0===(null==e?null:e.multiuse),!1===(null==e?null:e.multiuse))),t.xp6(1),t.Oqu(null==e?null:e.multiuse),t.xp6(2),t.Q6J("ngClass",t.WLB(23,L,!0===(null==e?null:e.is_compulsory),!1===(null==e?null:e.is_compulsory))),t.xp6(1),t.Oqu(null==e?null:e.is_compulsory),t.xp6(2),t.Q6J("ngClass",t.WLB(26,L,!0===(null==e?null:e.applicable_for_only_coupons),!1===(null==e?null:e.applicable_for_only_coupons))),t.xp6(1),t.Oqu(null==e?null:e.applicable_for_only_coupons),t.xp6(2),t.Q6J("ngClass",t.WLB(29,L,!0===(null==e?null:e.auto_update_price),!1===(null==e?null:e.auto_update_price))),t.xp6(1),t.Oqu(null==e?null:e.auto_update_price),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//offer/detail-invoice-amount/",e.id,""),t.xp6(2),t.Q6J("ngIf",i.isEdit),t.xp6(1),t.Q6J("ngIf",i.isDelete)}}function P(s,a){if(1&s&&(t.TgZ(0,"tr"),t.YNc(1,O,39,32,"ng-container",31),t.qZA()),2&s){const n=a.$implicit;t.xp6(1),t.Q6J("ngIf","BasedOnInvoiceAmount"===n.discount_type)}}const E=function(s,a){return{itemsPerPage:s,currentPage:a}};function w(s,a){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,P,2,1,"tr",52),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const n=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,n.filteredData,n.key,n.reverse),t.WLB(8,E,n.itemsPerPage,n.p)))}}function R(s,a){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",66)(3,"p",67),t._uU(4,"Data not available"),t.qZA()()()())}function F(s,a){1&s&&t._UZ(0,"mat-progress-bar",68)}const H=[{path:"",component:(()=>{class s{constructor(n,o){this.offerService=n,this.cs=o,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0}confirmText(n,o){m().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(e=>{e.isConfirmed&&this.offerService.deleteDiscount(o).subscribe(i=>{this.delRes=i,this.delRes.success?(this.ngOnInit(),m().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(n,1)):m().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(n,o){m().fire({title:"Are you sure?",text:"Do you want to Deactivate this Invoice Amount!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(e=>{e.isConfirmed&&this.offerService.DiscountIsActive(o,"").subscribe(i=>{this.delRes=i,this.delRes.success&&(m().fire({icon:"success",title:"Deactivate!",text:this.delRes.msg}),this.ngOnInit())})})}Active(n,o){m().fire({title:"Are you sure?",text:"Do you want to Active this Invoice Amount!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(e=>{e.isConfirmed&&this.offerService.DiscountIsActive(o,"").subscribe(i=>{this.delRes=i,this.delRes.success&&(m().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){this.offerService.getDiscount().subscribe(n=>{this.tableData=n,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(n=>{this.userDetails=n,this.userDetails?.permission?.map(e=>{"master"===e.content_type.app_label&&"discount"===e.content_type.model&&"add_discount"==e.codename?this.isAdd=e.codename:"master"===e.content_type.app_label&&"discount"===e.content_type.model&&"change_discount"==e.codename?this.isEdit=e.codename:"master"===e.content_type.app_label&&"discount"===e.content_type.model&&"delete_discount"==e.codename&&(this.isDelete=e.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(n){this.tableData.forEach(n?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const n=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(o=>{const e=o.discount_type.toLocaleLowerCase(),i=o.name.toLocaleLowerCase();return!!e.match(n)||!!i.match(n)})}}sort(n){this.key=n,this.reverse=!this.reverse}generatePDF(){const n=new b.default;n.setFontSize(15),n.setTextColor(33,43,54),n.text("Invoice Amount Offer",10,10),_()(n,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Discount Type"},{header:"Start Date"},{header:"End Date"},{header:"Opening Balance"},{header:"GSTIN"},{header:"PanCard"},{header:"Membership"},{header:"Is Active"}]}),n.save("dealer.pdf")}generatePDFAgain(){const n=new b.default("landscape");n.setFontSize(12),n.setTextColor(33,43,54),n.text("PV",86,5),n.text("Amount Wise Offer",82,10),n.text("",10,20),_()(n,{head:[["#","name","Discount Type","Start Date","End Date","Business Location","Customers Group","Multiuse","Is Compulsory","Applicable For Only Coupons","Auto Update Price"]],body:this.filteredData.map((i,c)=>[c+1,i.name,i.discount_type,i.start_date,i.end_date,i.business_location,i.customers_group,i.multiuse,i.is_compulsory,i.applicable_for_only_coupons,i.auto_update_price]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:22}),n.save("amount_wise_offer.pdf")}getVisibleDataFromTable(){const n=[],o=document.getElementById("mytable"),e=o.querySelector("thead tr"),i=o.querySelectorAll("tbody tr"),c=[];return e.querySelectorAll("th").forEach(r=>{const p=r.textContent.trim();"Is Active"!==p&&"Action"!==p&&c.push(p)}),n.push(c),i.forEach(r=>{const p=[];r.querySelectorAll("td").forEach(U=>{p.push(U.textContent.trim())}),n.push(p)}),n}exportToExcel(){const n=this.getVisibleDataFromTable(),o=v.P6.aoa_to_sheet(n),e=v.P6.book_new();v.P6.book_append_sheet(e,o,"Sheet1");const i=v.cW(e,{bookType:"xlsx",type:"array"}),c=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(c,"invoice_amount_offer.xlsx")}printTable(){const n=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,c=n.cloneNode(!0),r=c.querySelector("th.thone:nth-child(11)");r&&r.remove();const p=c.querySelector("th.thone:last-child");p&&p.remove(),c.querySelectorAll("tr").forEach(x=>{const M=x.querySelector("td:nth-child(11)");M&&M.remove();const S=x.querySelector("td:last-child");S&&S.remove()});const j=c.outerHTML,z="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+j,$=document.body.innerHTML;document.body.innerHTML=z,window.print(),document.body.innerHTML=$}filterData(){let n=this.tableData.slice();if(this.selectedCompany){const o=this.selectedCompany.toLowerCase();n=n.filter(e=>e?.company_name.toLowerCase().includes(o))}this.selectCredit&&(n=n.filter(o=>o?.opening_balance_type===this.selectCredit)),this.filteredData=n}clearFilter(){this.selectCredit=null,this.selectedCompany=null,this.selectCredit=null,this.filterData()}pgChange(n){console.warn(n,"pg"),-1==n&&(this.itemsPerPage=this.filteredData.length)}}return s.\u0275fac=function(n){return new(n||s)(t.Y36(A.K),t.Y36(g.J))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-list-invoice-amount"]],decls:108,vars:10,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","name..",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//offer/add-invoice-amount",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3"],[1,"badges",3,"ngClass"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Invoice Amount Offer list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Invoice Amount Offer"),t.qZA()(),t.YNc(6,J,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(c){return o.titlee=c})("ngModelChange",function(){return o.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return o.generatePDFAgain()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return o.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),t.NdJ("click",function(){return o.sort("id")}),t.TgZ(38,"label",27),t.NdJ("click",function(){return o.selectAll(o.initChecked)}),t.TgZ(39,"input",28),t.NdJ("ngModelChange",function(c){return o.allSelected=c})("change",function(){return o.selectAlll()}),t.qZA(),t._UZ(40,"span",29),t.qZA(),t._UZ(41,"i",30),t.qZA(),t.TgZ(42,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(43,"Sr. No. "),t._UZ(44,"i",30),t.qZA(),t.TgZ(45,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(46,"Name"),t._UZ(47,"i",30),t.qZA(),t.TgZ(48,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(49,"Discount Type "),t._UZ(50,"i",30),t.qZA(),t.TgZ(51,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(52,"Start Date"),t._UZ(53,"i",30),t.qZA(),t.TgZ(54,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(55,"End Date"),t._UZ(56,"i",30),t.qZA(),t.TgZ(57,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(58,"Business Location "),t._UZ(59,"i",30),t.qZA(),t.TgZ(60,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(61,"Customers Group "),t._UZ(62,"i",30),t.qZA(),t.TgZ(63,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(64,"Multiuse"),t._UZ(65,"i",30),t.qZA(),t.TgZ(66,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(67,"Is Compulsory"),t._UZ(68,"i",30),t.qZA(),t.TgZ(69,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(70,"Applicable For Only Coupons"),t._UZ(71,"i",30),t.qZA(),t.TgZ(72,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(73,"Auto Update Price"),t._UZ(74,"i",30),t.qZA(),t.TgZ(75,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(76,"Is Active "),t._UZ(77,"i",30),t.qZA(),t.TgZ(78,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(79,"Action "),t._UZ(80,"i",30),t.qZA()()(),t.YNc(81,w,4,11,"tbody",31),t.YNc(82,R,5,0,"tbody",31),t.qZA(),t.TgZ(83,"div",32),t.YNc(84,F,1,0,"mat-progress-bar",33),t.qZA(),t.TgZ(85,"div",34)(86,"div",35)(87,"div",36),t._uU(88," Show per page "),t.TgZ(89,"select",37,38),t.NdJ("ngModelChange",function(c){return o.itemsPerPage=c})("change",function(){t.CHM(e);const c=t.MAs(90);return t.KtG(o.pgChange(c.value))}),t.TgZ(91,"option",39),t._uU(92,"10"),t.qZA(),t.TgZ(93,"option",40),t._uU(94,"20"),t.qZA(),t.TgZ(95,"option",41),t._uU(96,"30"),t.qZA(),t.TgZ(97,"option",42),t._uU(98,"50"),t.qZA(),t.TgZ(99,"option",43),t._uU(100,"100"),t.qZA(),t.TgZ(101,"option",44),t._uU(102,"All"),t.qZA()()()(),t.TgZ(103,"div",45)(104,"div",46)(105,"pagination-controls",47),t.NdJ("pageChange",function(c){return o.p=c}),t.qZA(),t.TgZ(106,"div",48),t._uU(107),t.qZA()()()()()()()}2&n&&(t.xp6(6),t.Q6J("ngIf",o.isAdd),t.xp6(15),t.Q6J("ngModel",o.titlee),t.xp6(18),t.Q6J("ngModel",o.allSelected),t.xp6(42),t.Q6J("ngIf",(null==o.filteredData?null:o.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==o.filteredData?null:o.filteredData.length)),t.xp6(2),t.Q6J("ngIf",o.loader),t.xp6(5),t.Q6J("ngModel",o.itemsPerPage),t.xp6(18),t.lnq("Showing ",o.itemsPerPage," to ",null==o.filteredData?null:o.filteredData.length," of ",o.p," entries"))},dependencies:[d.mk,d.sg,d.O5,f.yS,u.YN,u.Kr,u.Fj,u.Wl,u.EJ,u.JJ,u.On,T.pW,Z.LS,y.Rr,Z._s,k.T]}),s})(),canActivate:[l(30597).l],data:{allowedRoles:["view_discount"]}}];let Y=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[f.Bz.forChild(H),f.Bz]}),s})();var W=l(8468);let K=(()=>{class s{}return s.\u0275fac=function(n){return new(n||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[d.ez,Y,W.I]}),s})()},30597:(q,C,l)=>{l.d(C,{l:()=>D});var d=l(94650),f=l(89299),I=l(97185),m=l(42917),b=l(80927);let D=(()=>{class _{constructor(h,t,A,g,u){this.router=h,this.Arout=t,this.toastr=A,this.profileService=g,this.coreService=u}canActivate(h,t){const A=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(g=>{this.userDetails=g,this.permissions=this.userDetails?.permission}),A){const g=h.data.allowedRoles;console.log(g,"allowedRoles");const u=A.some(T=>g.includes(T.codename));if(console.log(u),this.coreService.getProfile().subscribe(T=>{this.userDetails=T,this.profileService.setUserDetails(this.userDetails);const Z=T?.permission,y=this.profileService.getUserDetails();(!y||y.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),u)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return _.\u0275fac=function(h){return new(h||_)(d.LFG(f.F0),d.LFG(f.gz),d.LFG(I._W),d.LFG(m.J),d.LFG(b.p))},_.\u0275prov=d.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()}}]);