"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4182],{84182:(V,_,l)=>{l.r(_),l.d(_,{CompanyBankModule:()=>$});var g=l(36895),h=l(88996),v=l(2454),d=l.n(v),T=l(53583),B=l(12983),A=l.n(B),u=l(80574),x=l(94327),e=l(94650),U=l(80927),M=l(72326),S=l(42917),p=l(24006),q=l(73162),y=l(54333),N=l(90455),D=l(54040);function J(a,s){1&a&&(e.TgZ(0,"div",48)(1,"a",49),e._UZ(2,"img",50),e._uU(3,"Add Company Bank "),e.qZA()())}function w(a,s){if(1&a&&(e.TgZ(0,"a",57),e._UZ(1,"img",61),e.qZA()),2&a){const t=e.oxw().$implicit;e.MGl("routerLink","//bank/updateCompanyBank/",t.id,"")}}function I(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"a",62),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(),i=o.index,c=o.$implicit,r=e.oxw(2);return e.KtG(r.confirmText(i,c.id))}),e._UZ(1,"img",63),e.qZA()}}function L(a,s){if(1&a){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",52)(3,"input",53),e.NdJ("ngModelChange",function(o){const c=e.CHM(t).index,r=e.oxw(2);return e.KtG(r.selectedRows[c]=o)}),e.qZA(),e._UZ(4,"span",29),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",54)(8,"a",55),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td")(21,"mat-slide-toggle",56),e.NdJ("click",function(){const o=e.CHM(t),i=o.$implicit,c=o.index,r=e.oxw(2);return e.KtG(i.is_active?r.deActivate(c,i.id):r.Active(c,i.id))})("ngModelChange",function(o){const c=e.CHM(t).$implicit;return e.KtG(c.is_active=o)}),e.qZA()(),e.TgZ(22,"td")(23,"a",57),e._UZ(24,"img",58),e.qZA(),e.YNc(25,w,2,1,"a",59),e.YNc(26,I,2,0,"a",60),e.qZA()()}if(2&a){const t=s.$implicit,n=s.index,o=e.oxw(2);e.xp6(3),e.Q6J("ngModel",o.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.MGl("routerLink","//bank/detailsCompanyBank/",t.id,""),e.xp6(1),e.Oqu(null==t?null:t.name),e.xp6(2),e.Oqu(null==t?null:t.account_holder_name),e.xp6(2),e.Oqu(null==t?null:t.account_number),e.xp6(2),e.Oqu(null==t?null:t.branch_name),e.xp6(2),e.Oqu(null==t?null:t.credit_balance),e.xp6(2),e.Oqu(null==t?null:t.debit_balance),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//bank/detailsCompanyBank/",t.id,""),e.xp6(2),e.Q6J("ngIf",o.isEdit),e.xp6(1),e.Q6J("ngIf",o.isDelete)}}const P=function(a,s){return{itemsPerPage:a,currentPage:s}};function R(a,s){if(1&a&&(e.TgZ(0,"tbody"),e.YNc(1,L,27,13,"tr",51),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&a){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.tableData,t.key,t.reverse),e.WLB(8,P,t.itemsPerPage,t.p)))}}function E(a,s){1&a&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",64)(3,"p",65),e._uU(4,"Data not available"),e.qZA()()()())}function H(a,s){1&a&&e._UZ(0,"mat-progress-bar",66)}let O=(()=>{class a{constructor(t,n,o){this.coreService=t,this.QueryService=n,this.cs=o,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(t,n){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.coreService.deleteCompanyBank(n).subscribe(i=>{this.delRes=i,"Company Bank Deleted successfully"==this.delRes.msg?(this.ngOnInit(),d().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):d().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(t,n){d().fire({title:"Are you sure?",text:"Do you want to Deactivate this company bank!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.CompanyBankIsActive(n,"").subscribe(i=>{this.delRes=i,"Company Bank Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),d().fire({icon:"success",title:"Deactivate!",text:"Company Bank Is Deactivate Successfully."}))})}Active(t,n){d().fire({title:"Are you sure?",text:"Do you want to Active this Company Bank!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.CompanyBankIsActive(n,"").subscribe(i=>{this.delRes=i,"Company Bank Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),d().fire({icon:"success",title:"Active!",text:"Company Bank Is activate Successfully."}))})}ngOnInit(){console.log(""),this.coreService.getCompanyBank().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(o=>{"pos"===o.content_type.app_label&&"companybank"===o.content_type.model&&"add_companybank"==o.codename?this.isAdd=o.codename:"pos"===o.content_type.app_label&&"companybank"===o.content_type.model&&"change_companybank"==o.codename?this.isEdit=o.codename:"pos"===o.content_type.app_label&&"companybank"===o.content_type.model&&"delete_companybank"==o.codename&&(this.isDelete=o.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(t){this.coreService.deleteEmployee(t).subscribe(n=>{this.delRes=n})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(n=>{const o=n.name.toLocaleLowerCase(),i=n.account_holder_name.toLocaleLowerCase();return!!o.match(t)||!!i.match(t)})}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new T.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Company Bank",10,10),A()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Name"},{header:"Accounts Holder Name"},{header:"Account Number"},{header:"Branch"},{header:"Credit Balance"},{header:"Debit Balance"},{header:"Is Active"}]}),t.save("companyBank.pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),i=n.querySelectorAll("tbody tr"),c=[];return o.querySelectorAll("th").forEach(r=>{const m=r.textContent.trim();"Is Active"!==m&&"Action"!==m&&c.push(m)}),t.push(c),i.forEach(r=>{const m=[];r.querySelectorAll("td").forEach(C=>{m.push(C.textContent.trim())}),t.push(m)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=u.P6.aoa_to_sheet(t),o=u.P6.book_new();u.P6.book_append_sheet(o,n,"Sheet1");const i=u.cW(o,{bookType:"xlsx",type:"array"}),c=new Blob([i],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,x.saveAs)(c,"companyBank.xlsx")}printTable(){const t=document.getElementById("mytable"),i=document.querySelector(".titl").outerHTML,c=t.cloneNode(!0),r=c.querySelector("th.thone:nth-child(9)");r&&r.remove();const m=c.querySelector("th.thone:last-child");m&&m.remove(),c.querySelectorAll("tr").forEach(b=>{const k=b.querySelector("td:nth-child(9)");k&&k.remove();const Z=b.querySelector("td:last-child");Z&&Z.remove()});const z=c.outerHTML,K="<style>.spaced-title { margin-top: 80px; }</style>"+i.replace("titl","spaced-title")+z,W=document.body.innerHTML;document.body.innerHTML=K,window.print(),document.body.innerHTML=W}}return a.\u0275fac=function(t){return new(t||a)(e.Y36(U.p),e.Y36(M._),e.Y36(S.J))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-company-bank"]],decls:95,vars:10,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//bank/addCompanyBank",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Company Bank list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Company Bank"),e.qZA()(),e.YNc(6,J,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(i){return n.titlee=i})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return n.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(38,"label",27),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(39,"input",28),e.NdJ("ngModelChange",function(i){return n.allSelected=i})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(40,"span",29),e.qZA(),e._UZ(41,"i",30),e.qZA(),e.TgZ(42,"th",26),e.NdJ("click",function(){return n.sort("id")}),e._uU(43,"Sr.No."),e._UZ(44,"i",30),e.qZA(),e.TgZ(45,"th",26),e.NdJ("click",function(){return n.sort("id")}),e._uU(46,"Name"),e._UZ(47,"i",30),e.qZA(),e.TgZ(48,"th",26),e.NdJ("click",function(){return n.sort("id")}),e._uU(49,"Accounts Holder Name "),e._UZ(50,"i",30),e.qZA(),e.TgZ(51,"th",26),e.NdJ("click",function(){return n.sort("id")}),e._uU(52,"Account Number "),e._UZ(53,"i",30),e.qZA(),e.TgZ(54,"th",26),e.NdJ("click",function(){return n.sort("id")}),e._uU(55,"Branch"),e._UZ(56,"i",30),e.qZA(),e.TgZ(57,"th",26),e.NdJ("click",function(){return n.sort("id")}),e._uU(58,"Credit Balance "),e._UZ(59,"i",30),e.qZA(),e.TgZ(60,"th",26),e.NdJ("click",function(){return n.sort("id")}),e._uU(61,"Debit Balance "),e._UZ(62,"i",30),e.qZA(),e.TgZ(63,"th",26),e.NdJ("click",function(){return n.sort("id")}),e._uU(64,"Is Active "),e._UZ(65,"i",30),e.qZA(),e.TgZ(66,"th",26),e.NdJ("click",function(){return n.sort("id")}),e._uU(67,"Action "),e._UZ(68,"i",30),e.qZA()()(),e.YNc(69,R,4,11,"tbody",31),e.YNc(70,E,5,0,"tbody",31),e.qZA(),e.TgZ(71,"div",32),e.YNc(72,H,1,0,"mat-progress-bar",33),e.qZA(),e.TgZ(73,"div",34)(74,"div",35)(75,"div",36),e._uU(76," Show per page "),e.TgZ(77,"select",37),e.NdJ("ngModelChange",function(i){return n.itemsPerPage=i}),e.TgZ(78,"option",38),e._uU(79,"10"),e.qZA(),e.TgZ(80,"option",39),e._uU(81,"20"),e.qZA(),e.TgZ(82,"option",40),e._uU(83,"30"),e.qZA(),e.TgZ(84,"option",41),e._uU(85,"50"),e.qZA(),e.TgZ(86,"option",42),e._uU(87,"100"),e.qZA(),e.TgZ(88,"option",43),e._uU(89,"All"),e.qZA()()()(),e.TgZ(90,"div",44)(91,"div",45)(92,"pagination-controls",46),e.NdJ("pageChange",function(i){return n.p=i}),e.qZA(),e.TgZ(93,"div",47),e._uU(94),e.qZA()()()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(18),e.Q6J("ngModel",n.allSelected),e.xp6(30),e.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.tableData?null:n.tableData.length)),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(17),e.lnq("Showing ",n.itemsPerPage," to ",n.itemsPerPage," of ",n.itemsPerPage," entries"))},dependencies:[g.sg,g.O5,h.yS,p.YN,p.Kr,p.Fj,p.Wl,p.EJ,p.JJ,p.On,q.pW,y.LS,N.Rr,y._s,D.T]}),a})();var F=l(30597);const f=JSON.parse(localStorage.getItem("auth"));let Y;f&&f.map(s=>{"pos"===s.content_type.app_label&&"companybank"===s.content_type.model&&"view_companybank"==s.codename&&(Y=s.codename)});const Q=[{path:"",component:O,canActivate:[F.l],data:{allowedRoles:["view_companybank"]}}];let j=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[h.Bz.forChild(Q),h.Bz]}),a})();var G=l(8468);let $=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[g.ez,j,G.I]}),a})()}}]);