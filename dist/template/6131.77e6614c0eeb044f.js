"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6131],{66131:(q,b,s)=>{s.r(b),s.d(b,{VendorModule:()=>W});var u=s(36895),f=s(89299),A=s(2454),g=s.n(A),M=s(96166),D=s(12983),p=s.n(D),v=s(80574),h=s(94327),e=s(94650),T=s(25062),_=s(72326),C=s(42917),d=s(24006),y=s(73162),Z=s(54333),J=s(90455),k=s(54040);function L(l,a){1&l&&(e.TgZ(0,"div",61)(1,"a",62),e._UZ(2,"img",63),e._uU(3,"Add Vendor "),e.qZA()())}function w(l,a){if(1&l&&(e.TgZ(0,"a",70),e._UZ(1,"img",74),e.qZA()),2&l){const n=e.oxw().$implicit;e.MGl("routerLink","//contacts/updateVendor/",n.id,"")}}function P(l,a){if(1&l){const n=e.EpF();e.TgZ(0,"a",75),e.NdJ("click",function(){e.CHM(n);const i=e.oxw(),o=i.index,r=i.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(o,r.id))}),e._UZ(1,"img",76),e.qZA()}}function B(l,a){if(1&l){const n=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",65)(3,"input",66),e.NdJ("ngModelChange",function(i){const r=e.CHM(n).index,c=e.oxw(2);return e.KtG(c.selectedRows[r]=i)}),e.qZA(),e._UZ(4,"span",42),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",67)(8,"a",68),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td")(21,"mat-slide-toggle",69),e.NdJ("click",function(){const i=e.CHM(n),o=i.$implicit,r=i.index,c=e.oxw(2);return e.KtG(o.is_active?c.isActive(r,o.id):c.Active(r,o.id))})("ngModelChange",function(i){const r=e.CHM(n).$implicit;return e.KtG(r.is_active=i)}),e.qZA()(),e.TgZ(22,"td")(23,"a",70),e._UZ(24,"img",71),e.qZA(),e.YNc(25,w,2,1,"a",72),e.YNc(26,P,2,0,"a",73),e.qZA()()}if(2&l){const n=a.$implicit,t=a.index,i=e.oxw(2);e.xp6(3),e.Q6J("ngModel",i.selectedRows[t]),e.xp6(3),e.Oqu(t+1),e.xp6(2),e.MGl("routerLink","//contacts/vendorDetails/",n.id,""),e.xp6(1),e.Oqu(n.name),e.xp6(2),e.Oqu(n.company_name),e.xp6(2),e.Oqu(n.mobile_no),e.xp6(2),e.Oqu((null==n?null:n.opening_balance_type)+(null!=(null==n?null:n.opening_balance)?" : "+(null==n?null:n.opening_balance):"")),e.xp6(2),e.Oqu(n.gstin),e.xp6(2),e.Oqu(n.pan_no),e.xp6(2),e.Q6J("ngModel",n.is_active),e.xp6(2),e.MGl("routerLink","//contacts/vendorDetails/",n.id,""),e.xp6(2),e.Q6J("ngIf",i.isEdit),e.xp6(1),e.Q6J("ngIf",i.isDelete)}}const E=function(l,a){return{itemsPerPage:l,currentPage:a}};function I(l,a){if(1&l&&(e.TgZ(0,"tbody"),e.YNc(1,B,27,13,"tr",64),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&l){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,n.filteredData,n.key,n.reverse),e.WLB(8,E,n.itemsPerPage,n.p)))}}function O(l,a){1&l&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",77)(3,"p",78),e._uU(4,"Data not available"),e.qZA()()()())}function R(l,a){1&l&&e._UZ(0,"mat-progress-bar",79)}let F=(()=>{class l{constructor(n,t,i){this.contactService=n,this.QueryService=t,this.cs=i,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0}confirmText(n,t){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.contactService.deleteVendor(t).subscribe(o=>{this.delRes=o,this.delRes.success?(this.ngOnInit(),g().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(n,1)):g().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(n,t){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this Vendor!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.contactService.VendorIsActive(t,"").subscribe(o=>{this.delRes=o,this.delRes.success&&this.ngOnInit()}),g().fire({icon:"success",title:"Deactivate!",text:"Vendor is Deactivate Successfully."}))})}Active(n,t){g().fire({title:"Are you sure?",text:"Do you want to Active this Vendor!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.contactService.VendorIsActive(t,"").subscribe(o=>{this.delRes=o,this.delRes.success&&this.ngOnInit()}),g().fire({icon:"success",title:"Active!",text:"Vendor is Active Successfully."}))})}ngOnInit(){this.contactService.getVendor().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()});const n=JSON.parse(localStorage.getItem("auth"));n&&n?.map(i=>{"contacts"===i.content_type.app_label&&"vendor"===i.content_type.model&&"add_vendor"==i.codename?this.isAdd=i.codename:"contacts"===i.content_type.app_label&&"vendor"===i.content_type.model&&"change_vendor"==i.codename?this.isEdit=i.codename:"contacts"===i.content_type.app_label&&"vendor"===i.content_type.model&&"delete_vendor"==i.codename&&(this.isDelete=i.codename)})}selectAlll(){this.selectedRows.fill(this.allSelected)}ngAfterViewChecked(){}selectAll(n){this.filteredData.forEach(n?t=>{t.isSelected=!1}:t=>{t.isSelected=!0})}deleteId(n){this.contactService.deleteEmployee(n).subscribe(t=>{this.delRes=t})}search(){if(""==this.titlee)this.ngOnInit();else{const n=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(t=>{const i=t.name.toLocaleLowerCase(),o=t.company_name.toLocaleLowerCase();return!!i.match(n)||!!o.match(n)})}}sort(n){this.key=n,this.reverse=!this.reverse}generatePDF(){const n=new M.default;n.setFontSize(15),n.setTextColor(33,43,54),n.text("Vendor List",10,10),p()(n,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Name"},{header:"Company Name"},{header:"Mobile Number"},{header:"Opening Balance"},{header:"GSTIN"},{header:"PanCard"},{header:"Is Active"}]}),n.save("vendor.pdf")}getVisibleDataFromTable(){const n=[],t=document.getElementById("mytable"),i=t.querySelector("thead tr"),o=t.querySelectorAll("tbody tr"),r=[];return i.querySelectorAll("th").forEach(c=>{const m=c.textContent.trim();"Is Active"!==m&&"Action"!==m&&r.push(m)}),n.push(r),o.forEach(c=>{const m=[];c.querySelectorAll("td").forEach(V=>{m.push(V.textContent.trim())}),n.push(m)}),n}exportToExcel(){const n=this.getVisibleDataFromTable(),t=v.P6.aoa_to_sheet(n),i=v.P6.book_new();v.P6.book_append_sheet(i,t,"Sheet1");const o=v.cW(i,{bookType:"xlsx",type:"array"}),r=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(r,"vendor.xlsx")}printTable(){const n=document.getElementById("mytable"),o=document.querySelector(".titl").outerHTML,r=n.cloneNode(!0),c=r.querySelector("th.thone:nth-child(9)");c&&c.remove();const m=r.querySelector("th.thone:last-child");m&&m.remove(),r.querySelectorAll("tr").forEach(S=>{const x=S.querySelector("td:nth-child(9)");x&&x.remove();const N=S.querySelector("td:last-child");N&&N.remove()});const j=r.outerHTML,z="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+j,$=document.body.innerHTML;document.body.innerHTML=z,window.print(),document.body.innerHTML=$}filterData(){let n=this.tableData.slice();if(this.selectedCompany){const t=this.selectedCompany.toLowerCase();n=n.filter(i=>i?.company_name.toLowerCase().includes(t))}this.selectCredit&&(n=n.filter(t=>t?.opening_balance_type===this.selectCredit)),this.filteredData=n}clearFilter(){this.selectCredit=null,this.selectedCompany=null,this.filterData()}changePg(n){console.log(n),-1==n&&(this.itemsPerPage=this.filteredData.length)}}return l.\u0275fac=function(n){return new(n||l)(e.Y36(T.y),e.Y36(_._),e.Y36(C.J))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-vendor"]],decls:120,vars:12,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Name...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","search","placeholder","Search Company",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],["value","Cr"],["value","Dr"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//contacts/addVendor",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(n,t){if(1&n){const i=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Vendor list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Vendor"),e.qZA()(),e.YNc(6,L,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(r){return t.titlee=r})("ngModelChange",function(){return t.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return t.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return t.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return t.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Company Name"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(r){return t.selectedCompany=r})("ngModelChange",function(){return t.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Opening Balance Type"),e.qZA(),e.TgZ(47,"select",31),e.NdJ("ngModelChange",function(r){return t.selectCredit=r})("change",function(){return t.filterData()}),e.TgZ(48,"option",32),e._uU(49,"Opening Balance Type"),e.qZA(),e.TgZ(50,"option",33),e._uU(51,"Cr"),e.qZA(),e.TgZ(52,"option",34),e._uU(53,"Dr"),e.qZA()()()()(),e.TgZ(54,"div",35),e.NdJ("click",function(){return t.clearFilter()}),e.TgZ(55,"a",36),e._uU(56,"Clear Filter"),e.qZA()()()()()(),e.TgZ(57,"div",37)(58,"table",38)(59,"thead")(60,"tr")(61,"th",39),e.NdJ("click",function(){return t.sort("id")}),e.TgZ(62,"label",40),e.NdJ("click",function(){return t.selectAll(t.initChecked)}),e.TgZ(63,"input",41),e.NdJ("ngModelChange",function(r){return t.allSelected=r})("change",function(){return t.selectAlll()}),e.qZA(),e._UZ(64,"span",42),e.qZA(),e._UZ(65,"i",43),e.qZA(),e.TgZ(66,"th",39),e.NdJ("click",function(){return t.sort("id")}),e._uU(67,"Sr. No. "),e._UZ(68,"i",43),e.qZA(),e.TgZ(69,"th",39),e.NdJ("click",function(){return t.sort("id")}),e._uU(70,"Name "),e._UZ(71,"i",43),e.qZA(),e.TgZ(72,"th",39),e.NdJ("click",function(){return t.sort("id")}),e._uU(73,"Company Name "),e._UZ(74,"i",43),e.qZA(),e.TgZ(75,"th",39),e.NdJ("click",function(){return t.sort("id")}),e._uU(76,"Mobile Number "),e._UZ(77,"i",43),e.qZA(),e.TgZ(78,"th",39),e.NdJ("click",function(){return t.sort("id")}),e._uU(79,"Opening Balance "),e._UZ(80,"i",43),e.qZA(),e.TgZ(81,"th",39),e.NdJ("click",function(){return t.sort("id")}),e._uU(82,"Gstin "),e._UZ(83,"i",43),e.qZA(),e.TgZ(84,"th",39),e.NdJ("click",function(){return t.sort("id")}),e._uU(85,"PanCard "),e._UZ(86,"i",43),e.qZA(),e.TgZ(87,"th",39),e.NdJ("click",function(){return t.sort("id")}),e._uU(88,"Is Active "),e._UZ(89,"i",43),e.qZA(),e.TgZ(90,"th",39),e.NdJ("click",function(){return t.sort("id")}),e._uU(91,"Action "),e._UZ(92,"i",43),e.qZA()()(),e.YNc(93,I,4,11,"tbody",44),e.YNc(94,O,5,0,"tbody",44),e.qZA(),e.TgZ(95,"div",45),e.YNc(96,R,1,0,"mat-progress-bar",46),e.qZA(),e.TgZ(97,"div",26)(98,"div",47)(99,"div",48),e._uU(100," Show per page "),e.TgZ(101,"select",49,50),e.NdJ("ngModelChange",function(r){return t.itemsPerPage=r})("change",function(){e.CHM(i);const r=e.MAs(102);return e.KtG(t.changePg(r.value))}),e.TgZ(103,"option",51),e._uU(104,"10"),e.qZA(),e.TgZ(105,"option",52),e._uU(106,"20"),e.qZA(),e.TgZ(107,"option",53),e._uU(108,"30"),e.qZA(),e.TgZ(109,"option",54),e._uU(110,"50"),e.qZA(),e.TgZ(111,"option",55),e._uU(112,"100"),e.qZA(),e.TgZ(113,"option",56),e._uU(114,"All"),e.qZA()()()(),e.TgZ(115,"div",57)(116,"div",58)(117,"pagination-controls",59),e.NdJ("pageChange",function(r){return t.p=r}),e.qZA(),e.TgZ(118,"div",60),e._uU(119),e.qZA()()()()()()()}2&n&&(e.xp6(6),e.Q6J("ngIf",t.isAdd),e.xp6(15),e.Q6J("ngModel",t.titlee),e.xp6(21),e.Q6J("ngModel",t.selectedCompany),e.xp6(5),e.Q6J("ngModel",t.selectCredit),e.xp6(16),e.Q6J("ngModel",t.allSelected),e.xp6(30),e.Q6J("ngIf",(null==t.filteredData?null:t.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==t.filteredData?null:t.filteredData.length)&&!t.loader),e.xp6(2),e.Q6J("ngIf",t.loader),e.xp6(5),e.Q6J("ngModel",t.itemsPerPage),e.xp6(18),e.lnq("Showing ",t.itemsPerPage," to ",null==t.tableData?null:t.tableData.length," of ",t.p," entries"))},dependencies:[u.sg,u.O5,f.yS,d.YN,d.Kr,d.Fj,d.Wl,d.EJ,d.JJ,d.On,y.pW,Z.LS,J.Rr,Z._s,k.T]}),l})();var G=s(30597);const U=JSON.parse(localStorage.getItem("auth"));let H;U&&U.map(a=>{"contacts"===a.content_type.app_label&&"vendor"===a.content_type.model&&"view_vendor"==a.codename&&(H=a.codename)});const Y=[{path:"",component:F,canActivate:[G.l],data:{allowedRoles:["view_vendor"]}}];let Q=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[f.Bz.forChild(Y),f.Bz]}),l})();var K=s(8468);let W=(()=>{class l{}return l.\u0275fac=function(n){return new(n||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,Q,K.I]}),l})()},30597:(q,b,s)=>{s.d(b,{l:()=>D});var u=s(94650),f=s(89299),A=s(97185),g=s(42917),M=s(80927);let D=(()=>{class p{constructor(h,e,T,_,C){this.router=h,this.Arout=e,this.toastr=T,this.profileService=_,this.coreService=C}canActivate(h,e){const T=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),T){const _=h.data.allowedRoles;console.log(_,"allowedRoles");const C=T.some(d=>_.includes(d.codename));if(console.log(C),this.coreService.getProfile().subscribe(d=>{this.userDetails=d,this.profileService.setUserDetails(this.userDetails);const y=d?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),C)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return p.\u0275fac=function(h){return new(h||p)(u.LFG(f.F0),u.LFG(f.gz),u.LFG(A._W),u.LFG(g.J),u.LFG(M.p))},p.\u0275prov=u.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()}}]);