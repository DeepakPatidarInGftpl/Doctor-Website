"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[408],{10408:(x,T,n)=>{n.r(T),n.d(T,{FooterListModule:()=>P});var a=n(36895),m=n(88996),F=n(35226),g=n.n(F),t=n(94650),L=n(92559),u=n(72326),c=n(24006),h=n(97185),b=n(42917),f=n(73162),_=n(54333),Z=n(90455),v=n(54040);function C(s,r){1&s&&(t.TgZ(0,"div",35)(1,"a",36),t._UZ(2,"img",37),t._uU(3,"Add Footer "),t.qZA()())}function A(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"th",25),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",29),t.qZA()}}function M(s,r){if(1&s&&(t.TgZ(0,"a",48),t._UZ(1,"img",49),t.qZA()),2&s){const e=t.oxw().$implicit;t.MGl("routerLink","/website/updatefooter/",e.id,"")}}function D(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"a",50),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),l=o.index,d=o.$implicit,p=t.oxw(2);return t.KtG(p.confirmText(l,d.id))}),t._UZ(1,"img",51),t.qZA()}}function S(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",39)(3,"input",40),t.NdJ("ngModelChange",function(o){const d=t.CHM(e).index,p=t.oxw(2);return t.KtG(p.selectedRows[d]=o)}),t.qZA(),t._UZ(4,"span",28),t.qZA()(),t.TgZ(5,"td",41)(6,"a",42),t._UZ(7,"img",43),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t._UZ(22,"td",44),t.TgZ(23,"td")(24,"mat-slide-toggle",45),t.NdJ("click",function(){const o=t.CHM(e),l=o.$implicit,d=o.index,p=t.oxw(2);return t.KtG(l.is_active?p.deActivate(d,l.id):p.Active(d,l.id))})("ngModelChange",function(o){const d=t.CHM(e).$implicit;return t.KtG(d.is_active=o)}),t.qZA()(),t.TgZ(25,"td"),t.YNc(26,M,2,1,"a",46),t.YNc(27,D,2,0,"a",47),t.qZA()()}if(2&s){const e=r.$implicit,i=r.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[i]),t.xp6(4),t.Q6J("src",o.imgUrl+e.logo,t.LSH),t.xp6(2),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.facebook),t.xp6(2),t.Oqu(e.instagram),t.xp6(2),t.Oqu(e.twitter),t.xp6(2),t.Oqu(e.whatsapp),t.xp6(2),t.Oqu(e.address),t.xp6(1),t.Q6J("innerHTML",e.description,t.oJD),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const w=function(s,r){return{itemsPerPage:s,currentPage:r}};function J(s,r){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,S,28,13,"tr",38),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,w,e.pageSize,e.p)))}}function q(s,r){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",52)(3,"p",53),t._uU(4,"Data not available"),t.qZA()()()())}function I(s,r){1&s&&t._UZ(0,"mat-progress-bar",54)}function k(s,r){if(1&s){const e=t.EpF();t.TgZ(0,"div",55)(1,"div",56)(2,"div",57),t._uU(3," Show per page "),t.TgZ(4,"select",58),t.NdJ("ngModelChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.itemsPerPage=o)}),t.TgZ(5,"option",59),t._uU(6,"5"),t.qZA(),t.TgZ(7,"option",60),t._uU(8,"10"),t.qZA(),t.TgZ(9,"option",61),t._uU(10,"20"),t.qZA(),t.TgZ(11,"option",62),t._uU(12,"50"),t.qZA(),t.TgZ(13,"option",63),t._uU(14,"All"),t.qZA()()()(),t.TgZ(15,"div",64)(16,"div",65)(17,"pagination-controls",66),t.NdJ("pageChange",function(o){t.CHM(e);const l=t.oxw();return t.KtG(l.p=o)}),t.qZA(),t.TgZ(18,"div",67),t._uU(19),t.qZA()()()()}if(2&s){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(15),t.lnq("Showing ",e.pageSize," to ",e.pageSize," of ",e.pageSize," entries")}}let N=(()=>{class s{constructor(e,i,o,l,d,p){this.websiteService=e,this.QueryService=i,this.fb=o,this.toastr=l,this.router=d,this.cs=p,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.imgUrl="https://pv.greatfuturetechno.com",this.select=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(e,i){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.websiteService.deleteFooter(i).subscribe(l=>{this.delRes=l,"Footer Deleted successfully"==this.delRes.msg?(this.ngOnInit(),g().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):(g().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error}),this.tableData.splice(e,1))})})}deActivate(e,i){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this Footer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.websiteService.FooterIsActive(i,"").subscribe(l=>{this.delRes=l,"Footer Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),g().fire({icon:"success",title:"Deactivate!",text:"Footer Is Deactivate Successfully."}))})}Active(e,i){g().fire({title:"Are you sure?",text:"Do you want to Active this Footer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.websiteService.FooterIsActive(i,"").subscribe(l=>{this.delRes=l,"Footer Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),g().fire({icon:"success",title:"Active!",text:"Footer Is Active Successfully."}))})}ngOnInit(){this.websiteService.getFooter().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission.map(o=>{"website"===o.content_type.app_label&&"footer"===o.content_type.model&&"add_footer"==o.codename?(this.isAdd=o.codename,console.log(this.isAdd)):"website"===o.content_type.app_label&&"footer"===o.content_type.model&&"change_footer"==o.codename?(this.isEdit=o.codename,console.log(this.isEdit)):"website"===o.content_type.app_label&&"footer"===o.content_type.model&&"delete_footer"==o.codename&&(this.isDelete=o.codename,console.log(this.isDelete))})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}deleteId(e){this.websiteService.deleteAddressStore(e).subscribe(i=>{this.delRes=i,"Colors Deleted successfully"==this.delRes.msg&&window.location.reload()})}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(i=>i.phone.toString().toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(L.K),t.Y36(u._),t.Y36(c.qu),t.Y36(h._W),t.Y36(m.F0),t.Y36(b.J))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-footer-list"]],decls:78,vars:8,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//website/addfooter",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3"],["alt","product",3,"src"],[3,"innerHTML"],[3,"ngModel","click","ngModelChange"],["class","me-3",3,"routerLink",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-3",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Footer list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Footer"),t.qZA()(),t.YNc(6,C,4,0,"div",2),t.qZA(),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t.TgZ(14,"span"),t._UZ(15,"img",10),t.qZA()()(),t.TgZ(16,"div",11)(17,"a",12),t._UZ(18,"img",13),t.qZA(),t.TgZ(19,"div",14)(20,"label")(21,"input",15),t.NdJ("ngModelChange",function(l){return i.titlee=l})("ngModelChange",function(){return i.search()}),t.qZA()()()()(),t.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),t._UZ(26,"img",18),t.qZA()(),t.TgZ(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()()()()(),t.TgZ(33,"div",23)(34,"table",24)(35,"thead")(36,"tr")(37,"th",25),t.NdJ("click",function(){return i.sort("id")}),t.TgZ(38,"label",26),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(39,"input",27),t.NdJ("ngModelChange",function(l){return i.allSelected=l})("change",function(){return i.selectAlll()}),t.qZA(),t._UZ(40,"span",28),t.qZA(),t._UZ(41,"i",29),t.qZA(),t.TgZ(42,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(43,"Logo "),t._UZ(44,"i",29),t.qZA(),t.TgZ(45,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(46,"Phone "),t._UZ(47,"i",29),t.qZA(),t.TgZ(48,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(49,"Email "),t._UZ(50,"i",29),t.qZA(),t.TgZ(51,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(52,"Facebook "),t._UZ(53,"i",29),t.qZA(),t.TgZ(54,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(55,"Instagram"),t._UZ(56,"i",29),t.qZA(),t.TgZ(57,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(58,"Twitter "),t._UZ(59,"i",29),t.qZA(),t.TgZ(60,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(61,"Whatsapp "),t._UZ(62,"i",29),t.qZA(),t.TgZ(63,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(64,"Address "),t._UZ(65,"i",29),t.qZA(),t.TgZ(66,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(67,"Description "),t._UZ(68,"i",29),t.qZA(),t.TgZ(69,"th",25),t.NdJ("click",function(){return i.sort("id")}),t._uU(70,"Is Active "),t._UZ(71,"i",29),t.qZA(),t.YNc(72,A,3,0,"th",30),t.qZA()(),t.YNc(73,J,4,11,"tbody",31),t.YNc(74,q,5,0,"tbody",31),t.qZA(),t.TgZ(75,"div",32),t.YNc(76,I,1,0,"mat-progress-bar",33),t.qZA(),t.YNc(77,k,20,4,"div",34),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",i.isAdd),t.xp6(15),t.Q6J("ngModel",i.titlee),t.xp6(18),t.Q6J("ngModel",i.allSelected),t.xp6(33),t.Q6J("ngIf",i.isEdit||i.isDelete),t.xp6(1),t.Q6J("ngIf",(null==i.tableData?null:i.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==i.tableData?null:i.tableData.length)&&!i.loader),t.xp6(2),t.Q6J("ngIf",i.loader),t.xp6(1),t.Q6J("ngIf",!i.loader))},dependencies:[a.sg,a.O5,m.yS,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,f.pW,_.LS,Z.Rr,_._s,v.T]}),s})();var R=n(30597);const U=JSON.parse(localStorage.getItem("auth"));let y;U&&U.permission&&U.permission.map(r=>{"website"===r.content_type.app_label&&"footer"===r.content_type.model&&"view_footer"==r.codename&&(y=r.codename,console.log(y))});const B=[{path:"",component:N,canActivate:[R.l],data:{allowedRoles:["view_footer"]}}];let O=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[m.Bz.forChild(B),m.Bz]}),s})();var E=n(8468);let P=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[a.ez,O,E.I]}),s})()},30597:(x,T,n)=>{n.d(T,{l:()=>L});var a=n(94650),m=n(88996),F=n(97185),g=n(42917),t=n(80927);let L=(()=>{class u{constructor(h,b,f,_,Z){this.router=h,this.Arout=b,this.toastr=f,this.profileService=_,this.coreService=Z}canActivate(h,b){const f=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(_=>{this.userDetails=_,this.permissions=this.userDetails?.permission}),f){const _=h.data.allowedRoles;console.log(_,"allowedRoles");const Z=f.some(v=>_.includes(v.codename));if(this.coreService.getProfile().subscribe(v=>{this.userDetails=v,this.profileService.setUserDetails(this.userDetails);const C=v?.permission,A=this.profileService.getUserDetails();(!A||A.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())}),console.log(Z),Z)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return u.\u0275fac=function(h){return new(h||u)(a.LFG(m.F0),a.LFG(m.gz),a.LFG(F._W),a.LFG(g.J),a.LFG(t.p))},u.\u0275prov=a.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);