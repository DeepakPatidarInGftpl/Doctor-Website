"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5937],{85937:(S,v,i)=>{i.r(v),i.d(v,{CustomerModule:()=>E});var c=i(36895),_=i(88996),A=i(2454),u=i.n(A),e=i(94650),y=i(25062),m=i(72326),U=i(42917),a=i(24006),Z=i(73162),p=i(54333),d=i(90455),h=i(65415),f=i(54040);function b(n,l){1&n&&(e.TgZ(0,"div",46)(1,"a",47),e._UZ(2,"img",48),e._uU(3,"Add Customer "),e.qZA()())}function T(n,l){if(1&n&&(e.TgZ(0,"a",55),e._UZ(1,"img",59),e.qZA()),2&n){const o=e.oxw().$implicit;e.MGl("routerLink","//contacts/updateCustomer/",o.id,"")}}function x(n,l){if(1&n){const o=e.EpF();e.TgZ(0,"a",60),e.NdJ("click",function(){e.CHM(o);const s=e.oxw(),r=s.index,g=s.$implicit,C=e.oxw(2);return e.KtG(C.confirmText(r,g.id))}),e._UZ(1,"img",61),e.qZA()}}function J(n,l){if(1&n){const o=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",50)(3,"input",51),e.NdJ("ngModelChange",function(s){const g=e.CHM(o).index,C=e.oxw(2);return e.KtG(C.selectedRows[g]=s)}),e.qZA(),e._UZ(4,"span",28),e.qZA()(),e.TgZ(5,"td",52)(6,"a",53),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td")(19,"mat-slide-toggle",54),e.NdJ("click",function(){const s=e.CHM(o),r=s.$implicit,g=s.index,C=e.oxw(2);return e.KtG(r.is_active?C.isActive(g,r.id):C.Active(g,r.id))})("ngModelChange",function(s){const g=e.CHM(o).$implicit;return e.KtG(g.is_active=s)}),e.qZA()(),e.TgZ(20,"td")(21,"a",55),e._UZ(22,"img",56),e.qZA(),e.YNc(23,T,2,1,"a",57),e.YNc(24,x,2,0,"a",58),e.qZA()()}if(2&n){const o=l.$implicit,t=l.index,s=e.oxw(2);e.xp6(3),e.Q6J("ngModel",s.selectedRows[t]),e.xp6(3),e.MGl("routerLink","//contacts/customerDetails/",o.id,""),e.xp6(1),e.Oqu(o.name),e.xp6(2),e.Oqu(o.company_name),e.xp6(2),e.Oqu(o.mobile_no),e.xp6(2),e.Oqu(o.gstin),e.xp6(2),e.Oqu(o.pan_no),e.xp6(2),e.Oqu(o.membership),e.xp6(2),e.Q6J("ngModel",o.is_active),e.xp6(2),e.MGl("routerLink","//contacts/customerDetails/",o.id,""),e.xp6(2),e.Q6J("ngIf",s.isEdit),e.xp6(1),e.Q6J("ngIf",s.isDelete)}}const I=function(n,l){return{itemsPerPage:n,currentPage:l}};function N(n,l){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,J,25,12,"tr",49),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&n){const o=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,o.tableData,o.key,o.reverse),e.WLB(8,I,o.pageSize,o.p)))}}function k(n,l){1&n&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",62)(3,"p",63),e._uU(4,"Data not available"),e.qZA()()()())}function q(n,l){1&n&&e._UZ(0,"mat-progress-bar",64)}let R=(()=>{class n{constructor(o,t,s){this.contactService=o,this.QueryService=t,this.cs=s,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(o,t){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&this.contactService.deleteCustomer(t).subscribe(r=>{this.delRes=r,"Customer Deleted successfully"==this.delRes.msg?(this.ngOnInit(),u().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(o,1)):u().fire({icon:"error",title:"Not Deleted!",text:this.delRes.erro})})})}isActive(o,t){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this customer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.contactService.CustomerIsActive(t,"").subscribe(r=>{this.delRes=r,"Customer Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),u().fire({icon:"success",title:"Deactivate!",text:"Customer Is Deactivate Successfully."}))})}Active(o,t){u().fire({title:"Are you sure?",text:"Do you want to Active this customer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(s=>{s.isConfirmed&&(this.contactService.CustomerIsActive(t,"").subscribe(r=>{this.delRes=r,"Customer Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),u().fire({icon:"success",title:"Active!",text:"Customer Is Active Successfully."}))})}ngOnInit(){this.contactService.getCustomer().subscribe(o=>{console.log(o),this.tableData=o,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(o=>{this.userDetails=o,this.userDetails?.permission.map(s=>{"contacts"===s.content_type.app_label&&"customer"===s.content_type.model&&"add_customer"==s.codename?(this.isAdd=s.codename,console.log(this.isAdd)):"contacts"===s.content_type.app_label&&"customer"===s.content_type.model&&"change_customer"==s.codename?(this.isEdit=s.codename,console.log(this.isEdit)):"contacts"===s.content_type.app_label&&"customer"===s.content_type.model&&"delete_customer"==s.codename&&(this.isDelete=s.codename,console.log(this.isDelete))})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(o){this.tableData.forEach(o?t=>{t.isSelected=!1}:t=>{t.isSelected=!0})}deleteId(o){this.contactService.deleteCustomer(o).subscribe(t=>{this.delRes=t})}search(){if(""==this.titlee)this.ngOnInit();else{const o=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(t=>{const s=t.name.toLocaleLowerCase(),r=t.company_name.toLocaleLowerCase();return!!s.match(o)||!!r.match(o)})}}sort(o){this.key=o,this.reverse=!this.reverse}}return n.\u0275fac=function(o){return new(o||n)(e.Y36(y.y),e.Y36(m._),e.Y36(U.J))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-customer"]],decls:90,vars:10,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//contacts/addCustomer",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(o,t){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Customer list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Customer "),e.qZA()(),e.YNc(6,b,4,0,"div",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),e._UZ(13,"img",9),e.TgZ(14,"span"),e._UZ(15,"img",10),e.qZA()()(),e.TgZ(16,"div",11)(17,"a",12),e._UZ(18,"img",13),e.qZA(),e.TgZ(19,"div",14)(20,"label")(21,"input",15),e.NdJ("ngModelChange",function(r){return t.titlee=r})("ngModelChange",function(){return t.search()}),e.qZA()()()()(),e.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),e._UZ(26,"img",18),e.qZA()(),e.TgZ(27,"li")(28,"a",19),e._UZ(29,"img",20),e.qZA()(),e.TgZ(30,"li")(31,"a",21),e._UZ(32,"img",22),e.qZA()()()()(),e.TgZ(33,"div",23)(34,"table",24)(35,"thead")(36,"tr")(37,"th",25),e.NdJ("click",function(){return t.sort("id")}),e.TgZ(38,"label",26),e.NdJ("click",function(){return t.selectAll(t.initChecked)}),e.TgZ(39,"input",27),e.NdJ("ngModelChange",function(r){return t.allSelected=r})("change",function(){return t.selectAlll()}),e.qZA(),e._UZ(40,"span",28),e.qZA(),e._UZ(41,"i",29),e.qZA(),e.TgZ(42,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(43,"Name "),e._UZ(44,"i",29),e.qZA(),e.TgZ(45,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(46,"Company Name "),e._UZ(47,"i",29),e.qZA(),e.TgZ(48,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(49,"Mobile Number "),e._UZ(50,"i",29),e.qZA(),e.TgZ(51,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(52,"Gstin "),e._UZ(53,"i",29),e.qZA(),e.TgZ(54,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(55,"PanCard "),e._UZ(56,"i",29),e.qZA(),e.TgZ(57,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(58,"Membership "),e._UZ(59,"i",29),e.qZA(),e.TgZ(60,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(61,"Is Active "),e._UZ(62,"i",29),e.qZA(),e.TgZ(63,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(64,"Action "),e._UZ(65,"i",29),e.qZA()()(),e.YNc(66,N,4,11,"tbody",30),e.YNc(67,k,5,0,"tbody",30),e.qZA(),e.TgZ(68,"div",31),e.YNc(69,q,1,0,"mat-progress-bar",32),e.qZA(),e.TgZ(70,"div",33)(71,"div",34)(72,"div",35),e._uU(73," Show per page "),e.TgZ(74,"select",36),e.NdJ("ngModelChange",function(r){return t.itemsPerPage=r}),e.TgZ(75,"option",37),e._uU(76,"5"),e.qZA(),e.TgZ(77,"option",38),e._uU(78,"10"),e.qZA(),e.TgZ(79,"option",39),e._uU(80,"20"),e.qZA(),e.TgZ(81,"option",40),e._uU(82,"50"),e.qZA(),e.TgZ(83,"option",41),e._uU(84,"All"),e.qZA()()()(),e.TgZ(85,"div",42)(86,"div",43)(87,"pagination-controls",44),e.NdJ("pageChange",function(r){return t.p=r}),e.qZA(),e.TgZ(88,"div",45),e._uU(89),e.qZA()()()()()()()),2&o&&(e.xp6(6),e.Q6J("ngIf",t.isAdd),e.xp6(15),e.Q6J("ngModel",t.titlee),e.xp6(18),e.Q6J("ngModel",t.allSelected),e.xp6(27),e.Q6J("ngIf",(null==t.tableData?null:t.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==t.tableData?null:t.tableData.length)),e.xp6(2),e.Q6J("ngIf",t.loader),e.xp6(5),e.Q6J("ngModel",t.itemsPerPage),e.xp6(15),e.lnq("Showing ",t.pageSize," to ",t.pageSize," of ",t.pageSize," entries"))},dependencies:[c.sg,c.O5,_.yS,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.On,Z.pW,p.LS,d.Rr,h.G,p._s,f.T]}),n})();var B=i(30597);const M=JSON.parse(localStorage.getItem("auth"));let D;M&&M.permission&&M.permission.map(l=>{"contacts"===l.content_type.app_label&&"customer"===l.content_type.model&&"view_customer"==l.codename&&(D=l.codename,console.log(D))});const L=[{path:"",component:R,canActivate:[B.l],data:{allowedRoles:["view_customer"]}}];let O=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[_.Bz.forChild(L),_.Bz]}),n})();var w=i(8468);let E=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,O,w.I]}),n})()},30597:(S,v,i)=>{i.d(v,{l:()=>y});var c=i(94650),_=i(88996),A=i(97185),u=i(42917),e=i(80927);let y=(()=>{class m{constructor(a,Z,p,d,h){this.router=a,this.Arout=Z,this.toastr=p,this.profileService=d,this.coreService=h}canActivate(a,Z){const p=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(d=>{this.userDetails=d,this.permissions=this.userDetails?.permission}),p){const d=a.data.allowedRoles;console.log(d,"allowedRoles");const h=p.some(f=>d.includes(f.codename));if(this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails);const b=f?.permission,T=this.profileService.getUserDetails();(!T||T.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())}),console.log(h),h)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return m.\u0275fac=function(a){return new(a||m)(c.LFG(_.F0),c.LFG(_.gz),c.LFG(A._W),c.LFG(u.J),c.LFG(e.p))},m.\u0275prov=c.Yz7({token:m,factory:m.\u0275fac,providedIn:"root"}),m})()}}]);