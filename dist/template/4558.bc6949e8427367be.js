"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4558],{64558:(M,Z,o)=>{o.r(Z),o.d(Z,{DealerListModule:()=>w});var c=o(36895),_=o(88996),T=o(2454),d=o.n(T),e=o(94650),A=o(25062),g=o(72326),y=o(42917),r=o(24006),D=o(73162),p=o(54333),u=o(90455),h=o(54040);function f(s,a){1&s&&(e.TgZ(0,"div",46)(1,"a",47),e._UZ(2,"img",48),e._uU(3,"Add Dealer "),e.qZA()())}function C(s,a){if(1&s&&(e.TgZ(0,"a",55),e._UZ(1,"img",59),e.qZA()),2&s){const t=e.oxw().$implicit;e.MGl("routerLink","//contacts/updateDealer/",t.id,"")}}function b(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"a",60),e.NdJ("click",function(){e.CHM(t);const n=e.oxw(),l=n.index,m=n.$implicit,v=e.oxw(2);return e.KtG(v.confirmText(l,m.id))}),e._UZ(1,"img",61),e.qZA()}}function S(s,a){if(1&s){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",50)(3,"input",51),e.NdJ("ngModelChange",function(n){const m=e.CHM(t).index,v=e.oxw(2);return e.KtG(v.selectedRows[m]=n)}),e.qZA(),e._UZ(4,"span",28),e.qZA()(),e.TgZ(5,"td",52)(6,"a",53),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td")(19,"mat-slide-toggle",54),e.NdJ("click",function(){const n=e.CHM(t),l=n.$implicit,m=n.index,v=e.oxw(2);return e.KtG(l.is_active?v.isActive(m,l.id):v.Active(m,l.id))})("ngModelChange",function(n){const m=e.CHM(t).$implicit;return e.KtG(m.is_active=n)}),e.qZA()(),e.TgZ(20,"td")(21,"a",55),e._UZ(22,"img",56),e.qZA(),e.YNc(23,C,2,1,"a",57),e.YNc(24,b,2,0,"a",58),e.qZA()()}if(2&s){const t=a.$implicit,i=a.index,n=e.oxw(2);e.xp6(3),e.Q6J("ngModel",n.selectedRows[i]),e.xp6(3),e.MGl("routerLink","//contacts/detailDealer/",t.id,""),e.xp6(1),e.Oqu(t.name),e.xp6(2),e.Oqu(t.company_name),e.xp6(2),e.Oqu(t.mobile_no),e.xp6(2),e.Oqu(t.gstin),e.xp6(2),e.Oqu(t.pan_no),e.xp6(2),e.Oqu(t.opening_balance_type+" : "+t.opening_balance==null?"":t.opening_balance),e.xp6(2),e.Q6J("ngModel",t.is_active),e.xp6(2),e.MGl("routerLink","//contacts/detailDealer/",t.id,""),e.xp6(2),e.Q6J("ngIf",n.isEdit),e.xp6(1),e.Q6J("ngIf",n.isDelete)}}const x=function(s,a){return{itemsPerPage:s,currentPage:a}};function J(s,a){if(1&s&&(e.TgZ(0,"tbody"),e.YNc(1,S,25,12,"tr",49),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&s){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.tableData,t.key,t.reverse),e.WLB(8,x,t.pageSize,t.p)))}}function I(s,a){1&s&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",62)(3,"p",63),e._uU(4,"Data not available"),e.qZA()()()())}function N(s,a){1&s&&e._UZ(0,"mat-progress-bar",64)}let k=(()=>{class s{constructor(t,i,n){this.contactService=t,this.QueryService=i,this.cs=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(t,i){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.contactService.deleteDealer(i).subscribe(l=>{this.delRes=l,"Dealer Deleted successfully"==this.delRes.msg?(this.ngOnInit(),d().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(t,1)):d().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(t,i){d().fire({title:"Are you sure?",text:"Do you want to Deactivate this dealer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.contactService.DealerIsActive(i,"").subscribe(l=>{this.delRes=l,"Dealer Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),d().fire({icon:"success",title:"Deactivate!",text:"Dealer Is Deactivate Successfully."}))})}Active(t,i){d().fire({title:"Are you sure?",text:"Do you want to Active this dealer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.contactService.DealerIsActive(i,"").subscribe(l=>{this.delRes=l,"Dealer Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),d().fire({icon:"success",title:"Active!",text:"Dealer Is Active Successfully."}))})}ngOnInit(){this.contactService.getDealer().subscribe(t=>{console.log(t),this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(t=>{this.userDetails=t,this.userDetails?.permission?.map(n=>{"master"===n.content_type.app_label&&"dealer"===n.content_type.model&&"add_dealer"==n.codename?(this.isAdd=n.codename,console.log(this.isAdd)):"master"===n.content_type.app_label&&"dealer"===n.content_type.model&&"change_dealer"==n.codename?(this.isEdit=n.codename,console.log(this.isEdit)):"master"===n.content_type.app_label&&"dealer"===n.content_type.model&&"delete_dealer"==n.codename&&(this.isDelete=n.codename,console.log(this.isDelete))})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(t){this.tableData.forEach(t?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(t){this.contactService.deleteSupplier(t).subscribe(i=>{this.delRes=i})}search(){if(""==this.titlee)this.ngOnInit();else{const t=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(i=>{const n=i.name.toLocaleLowerCase(),l=i.company_name.toLocaleLowerCase();return!!n.match(t)||!!l.match(t)})}}sort(t){this.key=t,this.reverse=!this.reverse}}return s.\u0275fac=function(t){return new(t||s)(e.Y36(A.y),e.Y36(g._),e.Y36(y.J))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-dealer-list"]],decls:90,vars:10,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//contacts/addDealer",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Dealer list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Dealer"),e.qZA()(),e.YNc(6,f,4,0,"div",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),e._UZ(13,"img",9),e.TgZ(14,"span"),e._UZ(15,"img",10),e.qZA()()(),e.TgZ(16,"div",11)(17,"a",12),e._UZ(18,"img",13),e.qZA(),e.TgZ(19,"div",14)(20,"label")(21,"input",15),e.NdJ("ngModelChange",function(l){return i.titlee=l})("ngModelChange",function(){return i.search()}),e.qZA()()()()(),e.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),e._UZ(26,"img",18),e.qZA()(),e.TgZ(27,"li")(28,"a",19),e._UZ(29,"img",20),e.qZA()(),e.TgZ(30,"li")(31,"a",21),e._UZ(32,"img",22),e.qZA()()()()(),e.TgZ(33,"div",23)(34,"table",24)(35,"thead")(36,"tr")(37,"th",25),e.NdJ("click",function(){return i.sort("id")}),e.TgZ(38,"label",26),e.NdJ("click",function(){return i.selectAll(i.initChecked)}),e.TgZ(39,"input",27),e.NdJ("ngModelChange",function(l){return i.allSelected=l})("change",function(){return i.selectAlll()}),e.qZA(),e._UZ(40,"span",28),e.qZA(),e._UZ(41,"i",29),e.qZA(),e.TgZ(42,"th",25),e.NdJ("click",function(){return i.sort("id")}),e._uU(43,"Name "),e._UZ(44,"i",29),e.qZA(),e.TgZ(45,"th",25),e.NdJ("click",function(){return i.sort("id")}),e._uU(46,"Company Name "),e._UZ(47,"i",29),e.qZA(),e.TgZ(48,"th",25),e.NdJ("click",function(){return i.sort("id")}),e._uU(49,"Mobile Number "),e._UZ(50,"i",29),e.qZA(),e.TgZ(51,"th",25),e.NdJ("click",function(){return i.sort("id")}),e._uU(52,"GSTIN "),e._UZ(53,"i",29),e.qZA(),e.TgZ(54,"th",25),e.NdJ("click",function(){return i.sort("id")}),e._uU(55,"PanCard "),e._UZ(56,"i",29),e.qZA(),e.TgZ(57,"th",25),e.NdJ("click",function(){return i.sort("id")}),e._uU(58,"Opening Balance"),e._UZ(59,"i",29),e.qZA(),e.TgZ(60,"th",25),e.NdJ("click",function(){return i.sort("id")}),e._uU(61,"Is Active "),e._UZ(62,"i",29),e.qZA(),e.TgZ(63,"th",25),e.NdJ("click",function(){return i.sort("id")}),e._uU(64,"Action "),e._UZ(65,"i",29),e.qZA()()(),e.YNc(66,J,4,11,"tbody",30),e.YNc(67,I,5,0,"tbody",30),e.qZA(),e.TgZ(68,"div",31),e.YNc(69,N,1,0,"mat-progress-bar",32),e.qZA(),e.TgZ(70,"div",33)(71,"div",34)(72,"div",35),e._uU(73," Show per page "),e.TgZ(74,"select",36),e.NdJ("ngModelChange",function(l){return i.itemsPerPage=l}),e.TgZ(75,"option",37),e._uU(76,"5"),e.qZA(),e.TgZ(77,"option",38),e._uU(78,"10"),e.qZA(),e.TgZ(79,"option",39),e._uU(80,"20"),e.qZA(),e.TgZ(81,"option",40),e._uU(82,"50"),e.qZA(),e.TgZ(83,"option",41),e._uU(84,"All"),e.qZA()()()(),e.TgZ(85,"div",42)(86,"div",43)(87,"pagination-controls",44),e.NdJ("pageChange",function(l){return i.p=l}),e.qZA(),e.TgZ(88,"div",45),e._uU(89),e.qZA()()()()()()()),2&t&&(e.xp6(6),e.Q6J("ngIf",i.isAdd),e.xp6(15),e.Q6J("ngModel",i.titlee),e.xp6(18),e.Q6J("ngModel",i.allSelected),e.xp6(27),e.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==i.tableData?null:i.tableData.length)),e.xp6(2),e.Q6J("ngIf",i.loader),e.xp6(5),e.Q6J("ngModel",i.itemsPerPage),e.xp6(15),e.lnq("Showing ",i.pageSize," to ",i.pageSize," of ",i.pageSize," entries"))},dependencies:[c.sg,c.O5,_.yS,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.On,D.pW,p.LS,u.Rr,p._s,h.T]}),s})();var q=o(30597);const L=JSON.parse(localStorage.getItem("auth"));let U;L&&L.permission&&L.permission.map(a=>{"master"===a.content_type.app_label&&"dealer"===a.content_type.model&&"view_dealer"==a.codename&&(U=a.codename,console.log(U))});const R=[{path:"",component:k,canActivate:[q.l],data:{allowedRoles:["view_dealer"]}}];let B=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[_.Bz.forChild(R),_.Bz]}),s})();var O=o(8468);let w=(()=>{class s{}return s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[c.ez,B,O.I]}),s})()},30597:(M,Z,o)=>{o.d(Z,{l:()=>A});var c=o(94650),_=o(88996),T=o(97185),d=o(42917),e=o(80927);let A=(()=>{class g{constructor(r,D,p,u,h){this.router=r,this.Arout=D,this.toastr=p,this.profileService=u,this.coreService=h}canActivate(r,D){const p=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(u=>{this.userDetails=u,this.permissions=this.userDetails?.permission}),p){const u=r.data.allowedRoles;console.log(u,"allowedRoles");const h=p.some(f=>u.includes(f.codename));if(this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails);const C=f?.permission,b=this.profileService.getUserDetails();(!b||b.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())}),console.log(h),h)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(r){return new(r||g)(c.LFG(_.F0),c.LFG(_.gz),c.LFG(T._W),c.LFG(d.J),c.LFG(e.p))},g.\u0275prov=c.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);