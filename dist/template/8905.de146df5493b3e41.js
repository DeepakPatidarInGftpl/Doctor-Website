"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8905],{68905:(W,h,s)=>{s.r(h),s.d(h,{TransportModule:()=>$});var g=s(36895),_=s(88996),y=s(2454),p=s.n(y),A=s(96166),M=s(12983),U=s.n(M),u=s(80574),x=s(94327),e=s(94650),q=s(25062),D=s(72326),S=s(42917),m=s(24006),k=s(73162),T=s(54333),N=s(90455),J=s(54040);function w(i,l){1&i&&(e.TgZ(0,"div",60)(1,"a",61),e._UZ(2,"img",62),e._uU(3,"Add Transport "),e.qZA()())}function L(i,l){if(1&i&&(e.TgZ(0,"a",69),e._UZ(1,"img",73),e.qZA()),2&i){const t=e.oxw().$implicit;e.MGl("routerLink","//contacts/transportUpdate/",t.id,"")}}function B(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"a",74),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(),r=o.index,a=o.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(r,a.id))}),e._UZ(1,"img",75),e.qZA()}}function I(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",64)(3,"input",65),e.NdJ("ngModelChange",function(o){const a=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[a]=o)}),e.qZA(),e._UZ(4,"span",42),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",66)(8,"a",67),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td")(21,"mat-slide-toggle",68),e.NdJ("click",function(){const o=e.CHM(t),r=o.$implicit,a=o.index,c=e.oxw(2);return e.KtG(r.is_active?c.isActive(a,r.id):c.Active(a,r.id))})("ngModelChange",function(o){const a=e.CHM(t).$implicit;return e.KtG(a.is_active=o)}),e.qZA()(),e.TgZ(22,"td")(23,"a",69),e._UZ(24,"img",70),e.qZA(),e.YNc(25,L,2,1,"a",71),e.YNc(26,B,2,0,"a",72),e.qZA()()}if(2&i){const t=l.$implicit,n=l.index,o=e.oxw(2);e.xp6(3),e.Q6J("ngModel",o.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.MGl("routerLink","//contacts/transportDetails/",t.id,""),e.xp6(1),e.Oqu(t.name),e.xp6(2),e.Oqu(t.company_name),e.xp6(2),e.Oqu(t.mobile_no),e.xp6(2),e.Oqu((null==t?null:t.opening_balance_type)+(null!=(null==t?null:t.opening_balance)?" : "+(null==t?null:t.opening_balance):"")),e.xp6(2),e.Oqu(t.gstin),e.xp6(2),e.Oqu(t.pan_no),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//contacts/transportDetails/",t.id,""),e.xp6(2),e.Q6J("ngIf",o.isEdit),e.xp6(1),e.Q6J("ngIf",o.isDelete)}}const P=function(i,l){return{itemsPerPage:i,currentPage:l}};function O(i,l){if(1&i&&(e.TgZ(0,"tbody"),e.YNc(1,I,27,13,"tr",63),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.filteredData,t.key,t.reverse),e.WLB(8,P,t.itemsPerPage,t.p)))}}function R(i,l){1&i&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",76)(3,"p",77),e._uU(4,"Data not available"),e.qZA()()()())}function E(i,l){1&i&&e._UZ(0,"mat-progress-bar",78)}let F=(()=>{class i{constructor(t,n,o){this.contactService=t,this.QueryService=n,this.cs=o,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.QueryService.filterToggle()}confirmText(t,n){p().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.contactService.deleteTransport(n).subscribe(r=>{this.delRes=r,this.delRes.success?(this.ngOnInit(),p().fire({icon:"success",title:"Deleted !",text:this.delRes.msg}),this.tableData.splice(t,1)):p().fire({icon:"error",title:"Not Deleted !",text:this.delRes.error})})})}isActive(t,n){p().fire({title:"Are you sure?",text:"Do you want to Deactivate this Transport!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.contactService.TransportIsActive(n,"").subscribe(r=>{this.delRes=r,this.delRes.success&&this.ngOnInit()}),p().fire({icon:"success",title:"Deactivate!",text:"Transport is Deactivate Successfully."}))})}Active(t,n){p().fire({title:"Are you sure?",text:"Do you want to Active this Transport!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.contactService.TransportIsActive(n,"").subscribe(r=>{this.delRes=r,this.delRes.success&&this.ngOnInit()}),p().fire({icon:"success",title:"Active!",text:"Transport is Active Successfully."}))})}ngOnInit(){this.contactService.getTransport().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(o=>{"contacts"===o.content_type.app_label&&"transport"===o.content_type.model&&"add_transport"==o.codename?this.isAdd=o.codename:"contacts"===o.content_type.app_label&&"transport"===o.content_type.model&&"change_transport"==o.codename?this.isEdit=o.codename:"contacts"===o.content_type.app_label&&"transport"===o.content_type.model&&"delete_transport"==o.codename&&(this.isDelete=o.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}ngAfterViewChecked(){}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(t){this.contactService.deleteSupplier(t).subscribe(n=>{this.delRes=n})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(n=>{const o=n.name.toLocaleLowerCase(),r=n.company_name.toLocaleLowerCase();return!!o.match(t)||!!r.match(t)})}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new A.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Customer List",10,10),U()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Name"},{header:"Company Name"},{header:"Mobile Number"},{header:"Opening Balance"},{header:"GSTIN"},{header:"PanCard"},{header:"Membership"}]}),t.save("customer.pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),r=n.querySelectorAll("tbody tr"),a=[];return o.querySelectorAll("th").forEach(c=>{const d=c.textContent.trim();"Is Active"!==d&&"Action"!==d&&a.push(d)}),t.push(a),r.forEach(c=>{const d=[];c.querySelectorAll("td").forEach(Z=>{d.push(Z.textContent.trim())}),t.push(d)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=u.P6.aoa_to_sheet(t),o=u.P6.book_new();u.P6.book_append_sheet(o,n,"Sheet1");const r=u.cW(o,{bookType:"xlsx",type:"array"}),a=new Blob([r],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,x.saveAs)(a,"customer.xlsx")}printTable(){const t=document.getElementById("mytable"),r=document.querySelector(".titl").outerHTML,a=t.cloneNode(!0),c=a.querySelector("th.thone:nth-child(9)");c&&c.remove();const d=a.querySelector("th.thone:last-child");d&&d.remove(),a.querySelectorAll("tr").forEach(C=>{const v=C.querySelector("td:nth-child(9)");v&&v.remove();const b=C.querySelector("td:last-child");b&&b.remove()});const z=a.outerHTML,K="<style>.spaced-title { margin-top: 80px; }</style>"+r.replace("titl","spaced-title")+z,V=document.body.innerHTML;document.body.innerHTML=K,window.print(),document.body.innerHTML=V}filterData(){let t=this.tableData.slice();if(this.selectedCompany){const n=this.selectedCompany.toLowerCase();t=t.filter(o=>o?.company_name.toLowerCase().includes(n))}this.selectCredit&&(t=t.filter(n=>n?.opening_balance_type===this.selectCredit)),this.filteredData=t}clearFilter(){this.supplierType=null,this.selectedCompany=null,this.selectCredit=null,this.filterData()}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(q.y),e.Y36(D._),e.Y36(S.J))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-transport"]],decls:119,vars:12,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Name...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","search","placeholder","Search Company",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],["value","Cr"],["value","Dr"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//contacts/addTransport",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Transport list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Transport"),e.qZA()(),e.YNc(6,w,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(r){return n.titlee=r})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return n.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Company Name"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(r){return n.selectedCompany=r})("ngModelChange",function(){return n.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Opening Balance Type"),e.qZA(),e.TgZ(47,"select",31),e.NdJ("ngModelChange",function(r){return n.selectCredit=r})("change",function(){return n.filterData()}),e.TgZ(48,"option",32),e._uU(49,"Opening Balance Type"),e.qZA(),e.TgZ(50,"option",33),e._uU(51,"Cr"),e.qZA(),e.TgZ(52,"option",34),e._uU(53,"Dr"),e.qZA()()()()(),e.TgZ(54,"div",35),e.NdJ("click",function(){return n.clearFilter()}),e.TgZ(55,"a",36),e._uU(56,"Clear Filter"),e.qZA()()()()()(),e.TgZ(57,"div",37)(58,"table",38)(59,"thead")(60,"tr")(61,"th",39),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(62,"label",40),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(63,"input",41),e.NdJ("ngModelChange",function(r){return n.allSelected=r})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(64,"span",42),e.qZA(),e._UZ(65,"i",43),e.qZA(),e.TgZ(66,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(67,"Sr. No. "),e._UZ(68,"i",43),e.qZA(),e.TgZ(69,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(70,"Name "),e._UZ(71,"i",43),e.qZA(),e.TgZ(72,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(73,"Company Name "),e._UZ(74,"i",43),e.qZA(),e.TgZ(75,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(76,"Mobile Number "),e._UZ(77,"i",43),e.qZA(),e.TgZ(78,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(79,"Opening Balance "),e._UZ(80,"i",43),e.qZA(),e.TgZ(81,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(82,"Gstin "),e._UZ(83,"i",43),e.qZA(),e.TgZ(84,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(85,"PanCard "),e._UZ(86,"i",43),e.qZA(),e.TgZ(87,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(88,"Is Active "),e._UZ(89,"i",43),e.qZA(),e.TgZ(90,"th",39),e.NdJ("click",function(){return n.sort("id")}),e._uU(91,"Action "),e._UZ(92,"i",43),e.qZA()()(),e.YNc(93,O,4,11,"tbody",44),e.YNc(94,R,5,0,"tbody",44),e.qZA(),e.TgZ(95,"div",45),e.YNc(96,E,1,0,"mat-progress-bar",46),e.qZA(),e.TgZ(97,"div",26)(98,"div",47)(99,"div",48),e._uU(100," Show per page "),e.TgZ(101,"select",49),e.NdJ("ngModelChange",function(r){return n.itemsPerPage=r}),e.TgZ(102,"option",50),e._uU(103,"10"),e.qZA(),e.TgZ(104,"option",51),e._uU(105,"20"),e.qZA(),e.TgZ(106,"option",52),e._uU(107,"30"),e.qZA(),e.TgZ(108,"option",53),e._uU(109,"50"),e.qZA(),e.TgZ(110,"option",54),e._uU(111,"100"),e.qZA(),e.TgZ(112,"option",55),e._uU(113,"All"),e.qZA()()()(),e.TgZ(114,"div",56)(115,"div",57)(116,"pagination-controls",58),e.NdJ("pageChange",function(r){return n.p=r}),e.qZA(),e.TgZ(117,"div",59),e._uU(118),e.qZA()()()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("ngModel",n.selectedCompany),e.xp6(5),e.Q6J("ngModel",n.selectCredit),e.xp6(16),e.Q6J("ngModel",n.allSelected),e.xp6(30),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.filteredData?null:n.filteredData.length)),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(17),e.lnq("Showing ",n.itemsPerPage," to ",n.itemsPerPage," of ",n.itemsPerPage," entries"))},dependencies:[g.sg,g.O5,_.yS,m.YN,m.Kr,m.Fj,m.Wl,m.EJ,m.JJ,m.On,k.pW,T.LS,N.Rr,T._s,J.T]}),i})();var H=s(30597);const f=JSON.parse(localStorage.getItem("auth"));let Q;f&&f.map(l=>{"contacts"===l.content_type.app_label&&"transport"===l.content_type.model&&"view_transport"==l.codename&&(Q=l.codename)});const Y=[{path:"",component:F,canActivate:[H.l],data:{allowedRoles:["view_transport"]}}];let G=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[_.Bz.forChild(Y),_.Bz]}),i})();var j=s(8468);let $=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.ez,G,j.I]}),i})()}}]);