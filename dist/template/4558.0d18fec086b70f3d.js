"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4558],{4558:(A,f,a)=>{a.r(f),a.d(f,{DealerListModule:()=>w});var d=a(6895),p=a(8996),v=a(2454),c=a.n(v),e=a(4650),D=a(5062),u=a(2326),r=a(4006),m=a(3162),h=a(4333),Z=a(455),C=a(4040);function y(o,s){1&o&&(e.TgZ(0,"div",46)(1,"a",47),e._UZ(2,"img",48),e._uU(3,"Add Dealer "),e.qZA()())}function L(o,s){if(1&o&&(e.TgZ(0,"a",55),e._UZ(1,"img",59),e.qZA()),2&o){const n=e.oxw().$implicit;e.MGl("routerLink","//contacts/updateDealer/",n.id,"")}}function U(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"a",60),e.NdJ("click",function(){e.CHM(n);const i=e.oxw(),l=i.index,g=i.$implicit,_=e.oxw(2);return e.KtG(_.confirmText(l,g.id))}),e._UZ(1,"img",61),e.qZA()}}function M(o,s){if(1&o){const n=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",50)(3,"input",51),e.NdJ("ngModelChange",function(i){const g=e.CHM(n).index,_=e.oxw(2);return e.KtG(_.selectedRows[g]=i)}),e.qZA(),e._UZ(4,"span",28),e.qZA()(),e.TgZ(5,"td",52)(6,"a",53),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td")(19,"mat-slide-toggle",54),e.NdJ("click",function(){const i=e.CHM(n),l=i.$implicit,g=i.index,_=e.oxw(2);return e.KtG(l.is_active?_.isActive(g,l.id):_.Active(g,l.id))})("ngModelChange",function(i){const g=e.CHM(n).$implicit;return e.KtG(g.is_active=i)}),e.qZA()(),e.TgZ(20,"td")(21,"a",55),e._UZ(22,"img",56),e.qZA(),e.YNc(23,L,2,1,"a",57),e.YNc(24,U,2,0,"a",58),e.qZA()()}if(2&o){const n=s.$implicit,t=s.index,i=e.oxw(2);e.xp6(3),e.Q6J("ngModel",i.selectedRows[t]),e.xp6(3),e.MGl("routerLink","//contacts/detailDealer/",n.id,""),e.xp6(1),e.Oqu(n.name),e.xp6(2),e.Oqu(n.company_name),e.xp6(2),e.Oqu(n.mobile_no),e.xp6(2),e.Oqu(n.gstin),e.xp6(2),e.Oqu(n.pan_no),e.xp6(2),e.Oqu(n.opening_balance_type+" : "+n.opening_balance),e.xp6(2),e.Q6J("ngModel",n.is_active),e.xp6(2),e.MGl("routerLink","//contacts/detailDealer/",n.id,""),e.xp6(2),e.Q6J("ngIf",i.isEdit),e.xp6(1),e.Q6J("ngIf",i.isDelete)}}const x=function(o,s){return{itemsPerPage:o,currentPage:s}};function S(o,s){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,M,25,12,"tr",49),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,n.tableData,n.key,n.reverse),e.WLB(8,x,n.pageSize,n.p)))}}function J(o,s){1&o&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",62)(3,"p",63),e._uU(4,"Data not available"),e.qZA()()()())}function k(o,s){1&o&&e._UZ(0,"mat-progress-bar",64)}let q=(()=>{class o{constructor(n,t){this.contactService=n,this.QueryService=t,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(n,t){c().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.contactService.deleteDealer(t).subscribe(l=>{this.delRes=l,"Dealer Deleted successfully"==this.delRes.msg?(this.ngOnInit(),c().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(n,1)):c().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(n,t){c().fire({title:"Are you sure?",text:"Do you want to Deactivate this dealer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.contactService.DealerIsActive(t,"").subscribe(l=>{this.delRes=l,"Dealer Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),c().fire({icon:"success",title:"Deactivate!",text:"Dealer Is Deactivate Successfully."}))})}Active(n,t){c().fire({title:"Are you sure?",text:"Do you want to Active this dealer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.contactService.DealerIsActive(t,"").subscribe(l=>{this.delRes=l,"Dealer Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),c().fire({icon:"success",title:"Active!",text:"Dealer Is Active Successfully."}))})}ngOnInit(){this.contactService.getDealer().subscribe(t=>{console.log(t),this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)});const n=JSON.parse(localStorage.getItem("auth"));n&&n.permission&&n.permission.map(i=>{"master"===i.content_type.app_label&&"dealer"===i.content_type.model&&"add_dealer"==i.codename?(this.isAdd=i.codename,console.log(this.isAdd)):"master"===i.content_type.app_label&&"dealer"===i.content_type.model&&"change_dealer"==i.codename?(this.isEdit=i.codename,console.log(this.isEdit)):"master"===i.content_type.app_label&&"dealer"===i.content_type.model&&"delete_dealer"==i.codename&&(this.isDelete=i.codename,console.log(this.isDelete))})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(n){this.tableData.forEach(n?t=>{t.isSelected=!1}:t=>{t.isSelected=!0})}deleteId(n){this.contactService.deleteSupplier(n).subscribe(t=>{this.delRes=t})}search(){if(""==this.titlee)this.ngOnInit();else{const n=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(t=>{const i=t.name.toLocaleLowerCase(),l=t.company_name.toLocaleLowerCase();return!!i.match(n)||!!l.match(n)})}}sort(n){this.key=n,this.reverse=!this.reverse}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(D.y),e.Y36(u._))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-dealer-list"]],decls:90,vars:10,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//contacts/addDealer",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Dealer list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Dealer"),e.qZA()(),e.YNc(6,y,4,0,"div",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),e._UZ(13,"img",9),e.TgZ(14,"span"),e._UZ(15,"img",10),e.qZA()()(),e.TgZ(16,"div",11)(17,"a",12),e._UZ(18,"img",13),e.qZA(),e.TgZ(19,"div",14)(20,"label")(21,"input",15),e.NdJ("ngModelChange",function(l){return t.titlee=l})("ngModelChange",function(){return t.search()}),e.qZA()()()()(),e.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),e._UZ(26,"img",18),e.qZA()(),e.TgZ(27,"li")(28,"a",19),e._UZ(29,"img",20),e.qZA()(),e.TgZ(30,"li")(31,"a",21),e._UZ(32,"img",22),e.qZA()()()()(),e.TgZ(33,"div",23)(34,"table",24)(35,"thead")(36,"tr")(37,"th",25),e.NdJ("click",function(){return t.sort("id")}),e.TgZ(38,"label",26),e.NdJ("click",function(){return t.selectAll(t.initChecked)}),e.TgZ(39,"input",27),e.NdJ("ngModelChange",function(l){return t.allSelected=l})("change",function(){return t.selectAlll()}),e.qZA(),e._UZ(40,"span",28),e.qZA(),e._UZ(41,"i",29),e.qZA(),e.TgZ(42,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(43,"Name "),e._UZ(44,"i",29),e.qZA(),e.TgZ(45,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(46,"Company Name "),e._UZ(47,"i",29),e.qZA(),e.TgZ(48,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(49,"Mobile Number "),e._UZ(50,"i",29),e.qZA(),e.TgZ(51,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(52,"GSTIN "),e._UZ(53,"i",29),e.qZA(),e.TgZ(54,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(55,"PanCard "),e._UZ(56,"i",29),e.qZA(),e.TgZ(57,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(58,"Opening Balance"),e._UZ(59,"i",29),e.qZA(),e.TgZ(60,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(61,"Is Active "),e._UZ(62,"i",29),e.qZA(),e.TgZ(63,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(64,"Action "),e._UZ(65,"i",29),e.qZA()()(),e.YNc(66,S,4,11,"tbody",30),e.YNc(67,J,5,0,"tbody",30),e.qZA(),e.TgZ(68,"div",31),e.YNc(69,k,1,0,"mat-progress-bar",32),e.qZA(),e.TgZ(70,"div",33)(71,"div",34)(72,"div",35),e._uU(73," Show per page "),e.TgZ(74,"select",36),e.NdJ("ngModelChange",function(l){return t.itemsPerPage=l}),e.TgZ(75,"option",37),e._uU(76,"5"),e.qZA(),e.TgZ(77,"option",38),e._uU(78,"10"),e.qZA(),e.TgZ(79,"option",39),e._uU(80,"20"),e.qZA(),e.TgZ(81,"option",40),e._uU(82,"50"),e.qZA(),e.TgZ(83,"option",41),e._uU(84,"All"),e.qZA()()()(),e.TgZ(85,"div",42)(86,"div",43)(87,"pagination-controls",44),e.NdJ("pageChange",function(l){return t.p=l}),e.qZA(),e.TgZ(88,"div",45),e._uU(89),e.qZA()()()()()()()),2&n&&(e.xp6(6),e.Q6J("ngIf",t.isAdd),e.xp6(15),e.Q6J("ngModel",t.titlee),e.xp6(18),e.Q6J("ngModel",t.allSelected),e.xp6(27),e.Q6J("ngIf",(null==t.tableData?null:t.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==t.tableData?null:t.tableData.length)),e.xp6(2),e.Q6J("ngIf",t.loader),e.xp6(5),e.Q6J("ngModel",t.itemsPerPage),e.xp6(15),e.lnq("Showing ",t.pageSize," to ",t.pageSize," of ",t.pageSize," entries"))},dependencies:[d.sg,d.O5,p.yS,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.On,m.pW,h.LS,Z.Rr,h._s,C.T]}),o})();var N=a(597);const T=JSON.parse(localStorage.getItem("auth"));let b;T&&T.permission&&T.permission.map(s=>{"master"===s.content_type.app_label&&"dealer"===s.content_type.model&&"view_dealer"==s.codename&&(b=s.codename,console.log(b))});const I=[{path:"",component:q,canActivate:[N.l],data:{allowedRoles:[b]}}];let R=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.Bz.forChild(I),p.Bz]}),o})();var B=a(8468);let w=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[d.ez,R,B.I]}),o})()},597:(A,f,a)=>{a.d(f,{l:()=>c});var d=a(4650),p=a(8996),v=a(7185);let c=(()=>{class e{constructor(u,r,m){this.router=u,this.Arout=r,this.toastr=m}canActivate(u,r){const m=JSON.parse(localStorage.getItem("auth"));if(m&&m.user){const h=u.data.allowedRoles;console.log(h,"allowedRoles");const Z=m.permission.some(C=>h.includes(C.codename));if(console.log(Z),Z)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return e.\u0275fac=function(u){return new(u||e)(d.LFG(p.F0),d.LFG(p.gz),d.LFG(v._W))},e.\u0275prov=d.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);