"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4182],{84182:(D,y,a)=>{a.r(y),a.d(y,{CompanyBankModule:()=>O});var c=a(36895),_=a(88996),k=a(2454),d=a.n(k),e=a(94650),T=a(80927),m=a(72326),A=a(42917),r=a(24006),v=a(73162),u=a(54333),p=a(90455),h=a(54040);function f(i,l){1&i&&(e.TgZ(0,"div",54)(1,"a",55),e._UZ(2,"img",56),e._uU(3,"Add Company Bank "),e.qZA()())}function Z(i,l){if(1&i&&(e.TgZ(0,"a",63),e._UZ(1,"img",67),e.qZA()),2&i){const t=e.oxw().$implicit;e.MGl("routerLink","//bank/updateCompanyBank/",t.id,"")}}function b(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"a",68),e.NdJ("click",function(){e.CHM(t);const o=e.oxw(),s=o.index,g=o.$implicit,C=e.oxw(2);return e.KtG(C.confirmText(s,g.id))}),e._UZ(1,"img",69),e.qZA()}}function M(i,l){if(1&i){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",58)(3,"input",59),e.NdJ("ngModelChange",function(o){const g=e.CHM(t).index,C=e.oxw(2);return e.KtG(C.selectedRows[g]=o)}),e.qZA(),e._UZ(4,"span",37),e.qZA()(),e.TgZ(5,"td",60)(6,"a",61),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td")(19,"mat-slide-toggle",62),e.NdJ("click",function(){const o=e.CHM(t),s=o.$implicit,g=o.index,C=e.oxw(2);return e.KtG(s.is_active?C.deActivate(g,s.id):C.Active(g,s.id))})("ngModelChange",function(o){const g=e.CHM(t).$implicit;return e.KtG(g.is_active=o)}),e.qZA()(),e.TgZ(20,"td")(21,"a",63),e._UZ(22,"img",64),e.qZA(),e.YNc(23,Z,2,1,"a",65),e.YNc(24,b,2,0,"a",66),e.qZA()()}if(2&i){const t=l.$implicit,n=l.index,o=e.oxw(2);e.xp6(3),e.Q6J("ngModel",o.selectedRows[n]),e.xp6(3),e.MGl("routerLink","//bank/detailsCompanyBank/",t.id,""),e.xp6(1),e.Oqu(null==t?null:t.name),e.xp6(2),e.Oqu(null==t?null:t.account_holder_name),e.xp6(2),e.Oqu(null==t?null:t.account_number),e.xp6(2),e.Oqu(null==t?null:t.branch_name),e.xp6(2),e.Oqu(null==t?null:t.credit_balance),e.xp6(2),e.Oqu(null==t?null:t.debit_balance),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//bank/detailsCompanyBank/",t.id,""),e.xp6(2),e.Q6J("ngIf",o.isEdit),e.xp6(1),e.Q6J("ngIf",o.isDelete)}}const S=function(i,l){return{itemsPerPage:i,currentPage:l}};function x(i,l){if(1&i&&(e.TgZ(0,"tbody"),e.YNc(1,M,25,12,"tr",57),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&i){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.tableData,t.key,t.reverse),e.WLB(8,S,t.pageSize,t.p)))}}function q(i,l){1&i&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",70)(3,"p",71),e._uU(4,"Data not available"),e.qZA()()()())}function J(i,l){1&i&&e._UZ(0,"mat-progress-bar",72)}let I=(()=>{class i{constructor(t,n,o){this.coreService=t,this.QueryService=n,this.cs=o,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(t,n){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.coreService.deleteCompanyBank(n).subscribe(s=>{this.delRes=s,"Company Bank Deleted successfully"==this.delRes.msg?(this.ngOnInit(),d().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):d().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(t,n){d().fire({title:"Are you sure?",text:"Do you want to Deactivate this company bank!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.CompanyBankIsActive(n,"").subscribe(s=>{this.delRes=s,"Company Bank Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),d().fire({icon:"success",title:"Deactivate!",text:"Company Bank Is Deactivate Successfully."}))})}Active(t,n){d().fire({title:"Are you sure?",text:"Do you want to Active this Company Bank!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.CompanyBankIsActive(n,"").subscribe(s=>{this.delRes=s,"Company Bank Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),d().fire({icon:"success",title:"Active!",text:"Company Bank Is activate Successfully."}))})}ngOnInit(){console.log(""),this.coreService.getCompanyBank().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission.map(o=>{"pos"===o.content_type.app_label&&"companybank"===o.content_type.model&&"add_companybank"==o.codename?(this.isAdd=o.codename,console.log(this.isAdd)):"pos"===o.content_type.app_label&&"companybank"===o.content_type.model&&"change_companybank"==o.codename?(this.isEdit=o.codename,console.log(this.isEdit)):"pos"===o.content_type.app_label&&"companybank"===o.content_type.model&&"delete_companybank"==o.codename&&(this.isDelete=o.codename,console.log(this.isDelete))})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(t){this.coreService.deleteEmployee(t).subscribe(n=>{this.delRes=n})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(n=>{const o=n.name.toLocaleLowerCase(),s=n.account_holder_name.toLocaleLowerCase();return!!o.match(t)||!!s.match(t)})}}sort(t){this.key=t,this.reverse=!this.reverse}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(T.p),e.Y36(m._),e.Y36(A.J))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-company-bank"]],decls:118,vars:10,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],[1,"form-select"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//bank/addCompanyBank",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Company Bank list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Company Bank"),e.qZA()(),e.YNc(6,f,4,0,"div",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),e._UZ(13,"img",9),e.TgZ(14,"span"),e._UZ(15,"img",10),e.qZA()()(),e.TgZ(16,"div",11)(17,"a",12),e._UZ(18,"img",13),e.qZA(),e.TgZ(19,"div",14)(20,"label")(21,"input",15),e.NdJ("ngModelChange",function(s){return n.titlee=s})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),e._UZ(26,"img",18),e.qZA()(),e.TgZ(27,"li")(28,"a",19),e._UZ(29,"img",20),e.qZA()(),e.TgZ(30,"li")(31,"a",21),e._UZ(32,"img",22),e.qZA()()()()(),e.TgZ(33,"div",23)(34,"div",24)(35,"div",25)(36,"div",26)(37,"div",27)(38,"select",28)(39,"option"),e._uU(40,"Choose Category"),e.qZA(),e.TgZ(41,"option"),e._uU(42,"Computers"),e.qZA()()()(),e.TgZ(43,"div",26)(44,"div",27)(45,"select",28)(46,"option"),e._uU(47,"Choose Sub Category"),e.qZA(),e.TgZ(48,"option"),e._uU(49,"Fruits"),e.qZA()()()(),e.TgZ(50,"div",26)(51,"div",27)(52,"select",28)(53,"option"),e._uU(54,"Choose Sub Brand"),e.qZA(),e.TgZ(55,"option"),e._uU(56,"Iphone"),e.qZA()()()(),e.TgZ(57,"div",29)(58,"div",27)(59,"a",30),e._UZ(60,"img",31),e.qZA()()()()()(),e.TgZ(61,"div",32)(62,"table",33)(63,"thead")(64,"tr")(65,"th",34),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(66,"label",35),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(67,"input",36),e.NdJ("ngModelChange",function(s){return n.allSelected=s})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(68,"span",37),e.qZA(),e._UZ(69,"i",38),e.qZA(),e.TgZ(70,"th",34),e.NdJ("click",function(){return n.sort("id")}),e._uU(71,"Name"),e._UZ(72,"i",38),e.qZA(),e.TgZ(73,"th",34),e.NdJ("click",function(){return n.sort("id")}),e._uU(74,"Accounts Holder Name "),e._UZ(75,"i",38),e.qZA(),e.TgZ(76,"th",34),e.NdJ("click",function(){return n.sort("id")}),e._uU(77,"Account Number "),e._UZ(78,"i",38),e.qZA(),e.TgZ(79,"th",34),e.NdJ("click",function(){return n.sort("id")}),e._uU(80,"Branch"),e._UZ(81,"i",38),e.qZA(),e.TgZ(82,"th",34),e.NdJ("click",function(){return n.sort("id")}),e._uU(83,"Credit Balance "),e._UZ(84,"i",38),e.qZA(),e.TgZ(85,"th",34),e.NdJ("click",function(){return n.sort("id")}),e._uU(86,"Debit Balance "),e._UZ(87,"i",38),e.qZA(),e.TgZ(88,"th",34),e.NdJ("click",function(){return n.sort("id")}),e._uU(89,"Is Active "),e._UZ(90,"i",38),e.qZA(),e.TgZ(91,"th",34),e.NdJ("click",function(){return n.sort("id")}),e._uU(92,"Action "),e._UZ(93,"i",38),e.qZA()()(),e.YNc(94,x,4,11,"tbody",39),e.YNc(95,q,5,0,"tbody",39),e.qZA(),e.TgZ(96,"div",40),e.YNc(97,J,1,0,"mat-progress-bar",41),e.qZA(),e.TgZ(98,"div",25)(99,"div",42)(100,"div",43),e._uU(101," Show per page "),e.TgZ(102,"select",44),e.NdJ("ngModelChange",function(s){return n.itemsPerPage=s}),e.TgZ(103,"option",45),e._uU(104,"5"),e.qZA(),e.TgZ(105,"option",46),e._uU(106,"10"),e.qZA(),e.TgZ(107,"option",47),e._uU(108,"20"),e.qZA(),e.TgZ(109,"option",48),e._uU(110,"50"),e.qZA(),e.TgZ(111,"option",49),e._uU(112,"All"),e.qZA()()()(),e.TgZ(113,"div",50)(114,"div",51)(115,"pagination-controls",52),e.NdJ("pageChange",function(s){return n.p=s}),e.qZA(),e.TgZ(116,"div",53),e._uU(117),e.qZA()()()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(46),e.Q6J("ngModel",n.allSelected),e.xp6(27),e.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.tableData?null:n.tableData.length)),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(15),e.lnq("Showing ",n.pageSize," to ",n.pageSize," of ",n.pageSize," entries"))},dependencies:[c.sg,c.O5,_.yS,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.On,v.pW,u.LS,p.Rr,u._s,h.T]}),i})();var N=a(30597);const B=JSON.parse(localStorage.getItem("auth"));let U;B&&B.permission&&B.permission.map(l=>{"pos"===l.content_type.app_label&&"companybank"===l.content_type.model&&"view_companybank"==l.codename&&(U=l.codename,console.log(U))});const R=[{path:"",component:I,canActivate:[N.l],data:{allowedRoles:["view_companybank"]}}];let L=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[_.Bz.forChild(R),_.Bz]}),i})();var w=a(8468);let O=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[c.ez,L,w.I]}),i})()},30597:(D,y,a)=>{a.d(y,{l:()=>T});var c=a(94650),_=a(88996),k=a(97185),d=a(42917),e=a(80927);let T=(()=>{class m{constructor(r,v,u,p,h){this.router=r,this.Arout=v,this.toastr=u,this.profileService=p,this.coreService=h}canActivate(r,v){const u=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(p=>{this.userDetails=p,this.permissions=this.userDetails?.permission}),u){const p=r.data.allowedRoles;console.log(p,"allowedRoles");const h=u.some(f=>p.includes(f.codename));if(this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails);const Z=f?.permission,b=this.profileService.getUserDetails();(!b||b.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())}),console.log(h),h)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return m.\u0275fac=function(r){return new(r||m)(c.LFG(_.F0),c.LFG(_.gz),c.LFG(k._W),c.LFG(d.J),c.LFG(e.p))},m.\u0275prov=c.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);