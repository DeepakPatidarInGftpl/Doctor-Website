"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5058],{5058:(C,m,i)=>{i.r(m),i.d(m,{ListPurchaseModule:()=>J});var r=i(6895),u=i(8996),e=i(4650),f=i(4270),d=i(2326),c=i(4006),g=i(3162),h=i(4333),p=i(4040);function _(o,a){1&o&&(e.TgZ(0,"div",46)(1,"a",47),e._UZ(2,"img",48),e._uU(3,"Add Purchase "),e.qZA()())}function Z(o,a){if(1&o){const n=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",50)(3,"input",51),e.NdJ("ngModelChange",function(s){const k=e.CHM(n).index,N=e.oxw(2);return e.KtG(N.selectedRows[k]=s)}),e.qZA(),e._UZ(4,"span",28),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",52)(8,"a",53),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.ALo(16,"date"),e.qZA(),e.TgZ(17,"td")(18,"a",54),e._UZ(19,"img",55),e.qZA()()()}if(2&o){const n=a.$implicit,t=a.index,s=e.oxw(2);e.xp6(3),e.Q6J("ngModel",s.selectedRows[t]),e.xp6(3),e.Oqu(t+1),e.xp6(2),e.MGl("routerLink","//bank/detailsPurchase/",n.id,""),e.xp6(1),e.Oqu(null==n?null:n.receipt_mode),e.xp6(2),e.Oqu(null==n?null:n.receipt_method),e.xp6(2),e.Oqu(null==n?null:n.amount),e.xp6(2),e.Oqu(e.xi3(16,8,null==n?null:n.receipt_date,"dd/MM/yyyy")),e.xp6(3),e.MGl("routerLink","//bank/detailsPurchase/",n.id,"")}}const v=function(o,a){return{itemsPerPage:o,currentPage:a}};function L(o,a){if(1&o&&(e.TgZ(0,"tbody"),e.YNc(1,Z,20,11,"tr",49),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&o){const n=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,n.tableData,n.key,n.reverse),e.WLB(8,v,n.pageSize,n.p)))}}function P(o,a){1&o&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",56)(3,"p",57),e._uU(4,"Data not available"),e.qZA()()()())}function b(o,a){1&o&&e._UZ(0,"mat-progress-bar",58)}let y=(()=>{class o{constructor(n,t){this.posService=n,this.QueryService=t,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}ngOnInit(){console.log(""),this.posService.getPurchase().subscribe(t=>{this.tableData=t,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)});const n=JSON.parse(localStorage.getItem("auth"));n&&n.permission&&n.permission.map(s=>{"pos"===s.content_type.app_label&&"payments"===s.content_type.model&&"add_payments"==s.codename?(this.isAdd=s.codename,console.log(this.isAdd)):"pos"===s.content_type.app_label&&"payments"===s.content_type.model&&"change_payments"==s.codename?(this.isEdit=s.codename,console.log(this.isEdit)):"pos"===s.content_type.app_label&&"payments"===s.content_type.model&&"delete_payments"==s.codename&&(this.isDelete=s.codename,console.log(this.isDelete))})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(n){this.tableData.forEach(n?t=>{t.isSelected=!1}:t=>{t.isSelected=!0})}search(){if(""==this.titlee)this.ngOnInit();else{const n=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(t=>{const s=t.receipt_mode.toLocaleLowerCase(),l=t.receipt_method.toLocaleLowerCase();return!!s.match(n)||!!l.match(n)})}}sort(n){this.key=n,this.reverse=!this.reverse}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(f.v),e.Y36(d._))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-list-purchase"]],decls:84,vars:10,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],[1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//bank/addPurchase",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(n,t){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Purchase list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Purchase"),e.qZA()(),e.YNc(6,_,4,0,"div",2),e.qZA(),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),e._UZ(13,"img",9),e.TgZ(14,"span"),e._UZ(15,"img",10),e.qZA()()(),e.TgZ(16,"div",11)(17,"a",12),e._UZ(18,"img",13),e.qZA(),e.TgZ(19,"div",14)(20,"label")(21,"input",15),e.NdJ("ngModelChange",function(l){return t.titlee=l})("ngModelChange",function(){return t.search()}),e.qZA()()()()(),e.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),e._UZ(26,"img",18),e.qZA()(),e.TgZ(27,"li")(28,"a",19),e._UZ(29,"img",20),e.qZA()(),e.TgZ(30,"li")(31,"a",21),e._UZ(32,"img",22),e.qZA()()()()(),e.TgZ(33,"div",23)(34,"table",24)(35,"thead")(36,"tr")(37,"th",25),e.NdJ("click",function(){return t.sort("id")}),e.TgZ(38,"label",26),e.NdJ("click",function(){return t.selectAll(t.initChecked)}),e.TgZ(39,"input",27),e.NdJ("ngModelChange",function(l){return t.allSelected=l})("change",function(){return t.selectAlll()}),e.qZA(),e._UZ(40,"span",28),e.qZA(),e._UZ(41,"i",29),e.qZA(),e.TgZ(42,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(43,"Sr. No"),e._UZ(44,"i",29),e.qZA(),e.TgZ(45,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(46,"Receipt Mode"),e._UZ(47,"i",29),e.qZA(),e.TgZ(48,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(49,"Receipt Method"),e._UZ(50,"i",29),e.qZA(),e.TgZ(51,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(52,"Amount"),e._UZ(53,"i",29),e.qZA(),e.TgZ(54,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(55,"Date"),e._UZ(56,"i",29),e.qZA(),e.TgZ(57,"th",25),e.NdJ("click",function(){return t.sort("id")}),e._uU(58,"Action"),e._UZ(59,"i",29),e.qZA()()(),e.YNc(60,L,4,11,"tbody",30),e.YNc(61,P,5,0,"tbody",30),e.qZA(),e.TgZ(62,"div",31),e.YNc(63,b,1,0,"mat-progress-bar",32),e.qZA(),e.TgZ(64,"div",33)(65,"div",34)(66,"div",35),e._uU(67," Show per page "),e.TgZ(68,"select",36),e.NdJ("ngModelChange",function(l){return t.itemsPerPage=l}),e.TgZ(69,"option",37),e._uU(70,"5"),e.qZA(),e.TgZ(71,"option",38),e._uU(72,"10"),e.qZA(),e.TgZ(73,"option",39),e._uU(74,"20"),e.qZA(),e.TgZ(75,"option",40),e._uU(76,"50"),e.qZA(),e.TgZ(77,"option",41),e._uU(78,"All"),e.qZA()()()(),e.TgZ(79,"div",42)(80,"div",43)(81,"pagination-controls",44),e.NdJ("pageChange",function(l){return t.p=l}),e.qZA(),e.TgZ(82,"div",45),e._uU(83),e.qZA()()()()()()()),2&n&&(e.xp6(6),e.Q6J("ngIf",t.isAdd),e.xp6(15),e.Q6J("ngModel",t.titlee),e.xp6(18),e.Q6J("ngModel",t.allSelected),e.xp6(21),e.Q6J("ngIf",(null==t.tableData?null:t.tableData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==t.tableData?null:t.tableData.length)),e.xp6(2),e.Q6J("ngIf",t.loader),e.xp6(5),e.Q6J("ngModel",t.itemsPerPage),e.xp6(15),e.lnq("Showing ",t.pageSize," to ",t.pageSize," of ",t.pageSize," entries"))},dependencies:[r.sg,r.O5,u.yS,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,g.pW,h.LS,r.uU,h._s,p.T]}),o})();var U=i(597);const T=JSON.parse(localStorage.getItem("auth"));let A;T&&T.permission&&T.permission.map(a=>{"pos"===a.content_type.app_label&&"payments"===a.content_type.model&&"view_payments"==a.codename&&(A=a.codename,console.log(A))});const M=[{path:"",component:y,canActivate:[U.l],data:{allowedRoles:[A]}}];let S=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.Bz.forChild(M),u.Bz]}),o})();var q=i(8468);let J=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[r.ez,S,q.I]}),o})()},597:(C,m,i)=>{i.d(m,{l:()=>f});var r=i(4650),u=i(8996),e=i(7185);let f=(()=>{class d{constructor(g,h,p){this.router=g,this.Arout=h,this.toastr=p}canActivate(g,h){const p=JSON.parse(localStorage.getItem("auth"));if(p&&p.user){const _=g.data.allowedRoles;console.log(_,"allowedRoles");const Z=p.permission.some(v=>_.includes(v.codename));if(console.log(Z),Z)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return d.\u0275fac=function(g){return new(g||d)(r.LFG(u.F0),r.LFG(u.gz),r.LFG(e._W))},d.\u0275prov=r.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);