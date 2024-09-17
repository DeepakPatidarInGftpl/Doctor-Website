"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[84182],{84182:(q,k,s)=>{s.r(k),s.d(k,{CompanyBankModule:()=>$});var m=s(36895),y=s(4392),B=s(2454),u=s.n(B),Z=s(96166),D=s(12983),g=s.n(D),v=s(80574),f=s(94327),e=s(94650),b=s(80927),C=s(72326),T=s(42917),d=s(24006),p=s(73162),_=s(54333),A=s(90455),J=s(54040);function L(i,r){1&i&&(e.TgZ(0,"div",59)(1,"a",60),e._UZ(2,"img",61),e._uU(3,"Add Company Bank "),e.qZA()())}function I(i,r){if(1&i&&(e.TgZ(0,"a",70),e._UZ(1,"img",74),e.qZA()),2&i){const t=e.oxw().$implicit;e.MGl("routerLink","//bank/updateCompanyBank/",t.id,"")}}function w(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"a",75),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(),a=o.index,l=o.$implicit,c=e.oxw(2);return e.KtG(c.confirmText(a,l.id))}),e._UZ(1,"img",76),e.qZA()}}function P(i,r){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",63)(3,"input",64),e.NdJ("ngModelChange",function(o){const l=e.CHM(t).index,c=e.oxw(2);return e.KtG(c.selectedRows[l]=o)}),e.qZA(),e._UZ(4,"span",40),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",65)(8,"a",66),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td")(17,"span",67),e._uU(18),e.qZA(),e.TgZ(19,"span",68),e._uU(20),e.qZA()(),e.TgZ(21,"td")(22,"mat-slide-toggle",69),e.NdJ("click",function(){const o=e.CHM(t),a=o.$implicit,l=o.index,c=e.oxw(2);return e.KtG(a.is_active?c.deActivate(l,a.id):c.Active(l,a.id))})("ngModelChange",function(o){const l=e.CHM(t).$implicit;return e.KtG(l.is_active=o)}),e.qZA()(),e.TgZ(23,"td")(24,"a",70),e._UZ(25,"img",71),e.qZA(),e.YNc(26,I,2,1,"a",72),e.YNc(27,w,2,0,"a",73),e.qZA()()}if(2&i){const t=r.$implicit,n=r.index,o=e.oxw(2);e.xp6(3),e.Q6J("ngModel",o.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.MGl("routerLink","//bank/detailsCompanyBank/",t.id,""),e.xp6(1),e.Oqu(null==t?null:t.name),e.xp6(2),e.Oqu(null==t?null:t.account_holder_name),e.xp6(2),e.Oqu(null==t?null:t.account_number),e.xp6(2),e.Oqu(null==t?null:t.branch_name),e.xp6(3),e.Oqu(null==t?null:t.credit_balance),e.xp6(2),e.hij("",null==t?null:t.debit_balance," "),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//bank/detailsCompanyBank/",t.id,""),e.xp6(2),e.Q6J("ngIf",o.isEdit),e.xp6(1),e.Q6J("ngIf",o.isDelete)}}const E=function(i,r){return{itemsPerPage:i,currentPage:r}};function R(i,r){if(1&i&&(e.TgZ(0,"tbody"),e.YNc(1,P,28,13,"tr",62),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.tableData,t.key,t.reverse),e.WLB(8,E,t.itemsPerPage,t.p)))}}function F(i,r){1&i&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",77)(3,"p",78),e._uU(4,"Data not available"),e.qZA()()()())}function O(i,r){1&i&&e._UZ(0,"mat-progress-bar",79)}let H=(()=>{class i{constructor(t,n,o){this.coreService=t,this.QueryService=n,this.cs=o,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedBankName="",this.selectedIsActive="",this.select=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!0,this.QueryService.filterToggle()}confirmText(t,n){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.coreService.deleteCompanyBank(n).subscribe(a=>{this.delRes=a,this.delRes.success?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(t,n){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this company bank!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.CompanyBankIsActive(n,"").subscribe(a=>{this.delRes=a,this.delRes.success&&this.ngOnInit()}),u().fire({icon:"success",title:"Deactivate!",text:"Company Bank Is Deactivate Successfully."}))})}Active(t,n){u().fire({title:"Are you sure?",text:"Do you want to Active this Company Bank!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.CompanyBankIsActive(n,"").subscribe(a=>{this.delRes=a,this.delRes.success&&this.ngOnInit()}),u().fire({icon:"success",title:"Active!",text:"Company Bank Is activate Successfully."}))})}ngOnInit(){this.coreService.getCompanyBank().subscribe(t=>{this.tableData=t,this.filteredData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(o=>{"pos"===o.content_type.app_label&&"companybank"===o.content_type.model&&"add_companybank"==o.codename?this.isAdd=o.codename:"pos"===o.content_type.app_label&&"companybank"===o.content_type.model&&"change_companybank"==o.codename?this.isEdit=o.codename:"pos"===o.content_type.app_label&&"companybank"===o.content_type.model&&"delete_companybank"==o.codename&&(this.isDelete=o.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(t){this.coreService.deleteEmployee(t).subscribe(n=>{this.delRes=n})}filterData(){this.tableData=this.filteredData;let t=this.tableData.slice();if(this.selectedBankName&&(t=t.filter(n=>n?.name?.toLowerCase().includes(this.selectedBankName?.toLowerCase()))),this.selectedIsActive){let n="Active"===this.selectedIsActive;t=t.filter(o=>o?.is_active===n)}this.tableData=t}clearFilter(){this.selectedBankName="",this.selectedIsActive="",this.filterData()}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.tableData=this.filteredData.filter(n=>{const o=n?.name?.toLocaleLowerCase(),a=n?.account_holder_name.toLocaleLowerCase(),l=n?.account_number.toLocaleLowerCase();return!!o.match(t)||!(!a.includes(t)&&!l.includes(t))})}}sort(t){this.key=t,this.reverse=!this.reverse}generatePDF(){const t=new Z.default;t.setFontSize(15),t.setTextColor(33,43,54),t.text("Company Bank",10,10),g()(t,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Name"},{header:"Accounts Holder Name"},{header:"Account Number"},{header:"Branch"},{header:"Credit Balance"},{header:"Debit Balance"},{header:"Is Active"}]}),t.save("companyBank.pdf")}generatePDFAgain(){const t=new Z.default;t.setFontSize(12),t.setTextColor(33,43,54),t.text("Company Bank",82,10),t.text("",10,15),g()(t,{head:[["#","Name","Accounts Holder Name","Account Number","Branch","Credit Balance,Debit Balance"]],body:this.tableData.map((o,a)=>[a+1,o.products?.name,o.account_holder_name,o.account_number,o.branch_name,o.credit_balance,o.debit_balance]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),t.save("Company Bank .pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),a=n.querySelectorAll("tbody tr"),l=[];return o.querySelectorAll("th").forEach(c=>{const h=c.textContent.trim();"Is Active"!==h&&"Action"!==h&&l.push(h)}),t.push(l),a.forEach(c=>{const h=[];c.querySelectorAll("td").forEach(S=>{h.push(S.textContent.trim())}),t.push(h)}),t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=v.P6.aoa_to_sheet(t),o=v.P6.book_new();v.P6.book_append_sheet(o,n,"Sheet1");const a=v.cW(o,{bookType:"xlsx",type:"array"}),l=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,f.saveAs)(l,"companyBank.xlsx")}printTable(){const t=document.getElementById("mytable"),a=document.querySelector(".titl").outerHTML,l=t.cloneNode(!0),c=l.querySelector("th.thone:nth-child(9)");c&&c.remove();const h=l.querySelector("th.thone:last-child");h&&h.remove(),l.querySelectorAll("tr").forEach(U=>{const x=U.querySelector("td:nth-child(9)");x&&x.remove();const N=U.querySelector("td:last-child");N&&N.remove()});const j=l.outerHTML,z="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+j,V=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=z,window.print(),document.body.innerHTML=V}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.tableData.length)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(b.p),e.Y36(C._),e.Y36(T.J))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-company-bank"]],decls:117,vars:12,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","text","placeholder","Search Bank Name",3,"ngModel","ngModelChange","input"],[1,"form-control",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//bank/addCompanyBank",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"text-success","d-block","w-100"],[1,"text-danger","d-block","w-100"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Company Bank list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Company Bank"),e.qZA()(),e.YNc(6,L,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(l){return n.titlee=l})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return n.generatePDF()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Bank Name"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(l){return n.selectedBankName=l})("input",function(){return n.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Is Active"),e.qZA(),e.TgZ(47,"select",31),e.NdJ("ngModelChange",function(l){return n.selectedIsActive=l})("change",function(){return n.filterData()}),e.TgZ(48,"option",32),e._uU(49,"Select Type"),e.qZA(),e.TgZ(50,"option"),e._uU(51," Active"),e.qZA(),e.TgZ(52,"option"),e._uU(53,"InActive"),e.qZA()()()()(),e.TgZ(54,"div",33),e.NdJ("click",function(){return n.clearFilter()}),e.TgZ(55,"a",34),e._uU(56,"Clear Filter"),e.qZA()()()()()(),e.TgZ(57,"div",35)(58,"table",36)(59,"thead")(60,"tr")(61,"th",37),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(62,"label",38),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(63,"input",39),e.NdJ("ngModelChange",function(l){return n.allSelected=l})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(64,"span",40),e.qZA(),e._UZ(65,"i",41),e.qZA(),e.TgZ(66,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(67,"Sr.No."),e._UZ(68,"i",41),e.qZA(),e.TgZ(69,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(70,"Name"),e._UZ(71,"i",41),e.qZA(),e.TgZ(72,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(73,"Accounts Holder Name "),e._UZ(74,"i",41),e.qZA(),e.TgZ(75,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(76,"Account Number "),e._UZ(77,"i",41),e.qZA(),e.TgZ(78,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(79,"Branch"),e._UZ(80,"i",41),e.qZA(),e.TgZ(81,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(82,"Balance "),e._UZ(83,"i",41),e.qZA(),e.TgZ(84,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(85,"Is Active "),e._UZ(86,"i",41),e.qZA(),e.TgZ(87,"th",37),e.NdJ("click",function(){return n.sort("id")}),e._uU(88,"Action "),e._UZ(89,"i",41),e.qZA()()(),e.YNc(90,R,4,11,"tbody",42),e.YNc(91,F,5,0,"tbody",42),e.qZA(),e.TgZ(92,"div",43),e.YNc(93,O,1,0,"mat-progress-bar",44),e.qZA(),e.TgZ(94,"div",26)(95,"div",45)(96,"div",46),e._uU(97," Show per page "),e.TgZ(98,"select",47,48),e.NdJ("ngModelChange",function(l){return n.itemsPerPage=l})("change",function(){e.CHM(o);const l=e.MAs(99);return e.KtG(n.changePg(l.value))}),e.TgZ(100,"option",49),e._uU(101,"10"),e.qZA(),e.TgZ(102,"option",50),e._uU(103,"20"),e.qZA(),e.TgZ(104,"option",51),e._uU(105,"30"),e.qZA(),e.TgZ(106,"option",52),e._uU(107,"50"),e.qZA(),e.TgZ(108,"option",53),e._uU(109,"100"),e.qZA(),e.TgZ(110,"option",54),e._uU(111,"All"),e.qZA()()()(),e.TgZ(112,"div",55)(113,"div",56)(114,"pagination-controls",57),e.NdJ("pageChange",function(l){return n.p=l}),e.qZA(),e.TgZ(115,"div",58),e._uU(116),e.qZA()()()()()()()}2&t&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("ngModel",n.selectedBankName),e.xp6(5),e.Q6J("ngModel",n.selectedIsActive),e.xp6(16),e.Q6J("ngModel",n.allSelected),e.xp6(27),e.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.tableData?null:n.tableData.length)),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq("Showing ",n.itemsPerPage," to ",null==n.tableData?null:n.tableData.length," of ",n.p," entries "))},dependencies:[m.sg,m.O5,y.yS,d.YN,d.Kr,d.Fj,d.Wl,d.EJ,d.JJ,d.On,p.pW,_.LS,A.Rr,_._s,J.T]}),i})();var G=s(30597);const M=JSON.parse(localStorage.getItem("auth"));let Y;M&&M.map(r=>{"pos"===r.content_type.app_label&&"companybank"===r.content_type.model&&"view_companybank"==r.codename&&(Y=r.codename)});const Q=[{path:"",component:H,canActivate:[G.l],data:{allowedRoles:["view_companybank"]}}];let K=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[y.Bz.forChild(Q),y.Bz]}),i})();var W=s(8468);let $=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[m.ez,K,W.I]}),i})()},30597:(q,k,s)=>{s.d(k,{l:()=>D});var m=s(94650),y=s(4392),B=s(97185),u=s(42917),Z=s(80927);let D=(()=>{class g{constructor(f,e,b,C,T){this.router=f,this.Arout=e,this.toastr=b,this.profileService=C,this.coreService=T}canActivate(f,e){const b=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(C=>{this.userDetails=C,this.permissions=this.userDetails?.permission}),b){const C=f.data.allowedRoles,T=b.some(p=>C.includes(p.codename));let d=this.coreService.profileData$.value;if(d&&d.username){this.userDetails=d,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(d);const p=d?.permission,_=this.profileService.getUserDetails();(!_||_.length!==p.length)&&(this.profileService.setUserPermission(p),window.location.reload())}else this.coreService.getProfile().subscribe(p=>{this.userDetails=p,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(p);const _=p?.permission,A=this.profileService.getUserDetails();(!A||A.length!==_.length)&&(this.profileService.setUserPermission(_),window.location.reload())});if(T)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(f){return new(f||g)(m.LFG(y.F0),m.LFG(y.gz),m.LFG(B._W),m.LFG(u.J),m.LFG(Z.p))},g.\u0275prov=m.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);