"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9153],{9153:(y,f,s)=>{s.r(f),s.d(f,{AccountlistModule:()=>L});var u=s(6895),m=s(8996),Z=s(2454),r=s.n(Z),t=s(4650),v=s(927),g=s(2326),a=s(4006),p=s(3162),h=s(4333),A=s(455),C=s(5415),M=s(4040);function x(i,c){1&i&&(t.TgZ(0,"div",54)(1,"a",55),t._UZ(2,"img",56),t._uU(3,"Add Account "),t.qZA()())}function U(i,c){if(1&i&&(t.TgZ(0,"a",63),t._UZ(1,"img",67),t.qZA()),2&i){const e=t.oxw().$implicit;t.MGl("routerLink","//masters/editaccount/",e.id,"")}}function S(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"a",68),t.NdJ("click",function(){t.CHM(e);const o=t.oxw(),l=o.index,d=o.$implicit,_=t.oxw(2);return t.KtG(_.confirmText(l,d.id))}),t._UZ(1,"img",69),t.qZA()}}function O(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",58)(3,"input",59),t.NdJ("ngModelChange",function(o){const d=t.CHM(e).index,_=t.oxw(2);return t.KtG(_.selectedRows[d]=o)}),t.qZA(),t._UZ(4,"span",37),t.qZA()(),t.TgZ(5,"td",60)(6,"a",61),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td")(17,"mat-slide-toggle",62),t.NdJ("click",function(){const o=t.CHM(e),l=o.$implicit,d=o.index,_=t.oxw(2);return t.KtG(l.is_active?_.deActivate(d,l.id):_.Active(d,l.id))})("ngModelChange",function(o){const d=t.CHM(e).$implicit;return t.KtG(d.is_active=o)}),t.qZA()(),t.TgZ(18,"td")(19,"a",63),t._UZ(20,"img",64),t.qZA(),t.YNc(21,U,2,1,"a",65),t.YNc(22,S,2,0,"a",66),t.qZA()()}if(2&i){const e=c.$implicit,n=c.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[n]),t.xp6(3),t.MGl("routerLink","//masters/account-details/",e.id,""),t.xp6(1),t.Oqu(null==e?null:e.title),t.xp6(2),t.Oqu(null==e?null:e.accounts_type),t.xp6(2),t.Oqu(null==e||null==e.account_subtype?null:e.account_subtype.title),t.xp6(2),t.Oqu(null==e?null:e.account_id),t.xp6(2),t.Oqu((null==e?null:e.opening_balance_type)+" : "+(null==e?null:e.opening_balance)),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//masters/account-details/",e.id,""),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const q=function(i,c){return{itemsPerPage:i,currentPage:c}};function J(i,c){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,O,23,11,"tr",57),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,q,e.pageSize,e.p)))}}function D(i,c){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",70)(3,"p",71),t._uU(4,"Data not available"),t.qZA()()()())}function I(i,c){1&i&&t._UZ(0,"mat-progress-bar",72)}let k=(()=>{class i{constructor(e,n){this.coreService=e,this.QueryService=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(e,n){r().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.coreService.deleteAccount(n).subscribe(l=>{this.delRes=l,"Account Deleted successfully"==this.delRes.msg?(this.ngOnInit(),r().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(e,1)):r().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(e,n){r().fire({title:"Are you sure?",text:"Do you want to Deactivate this account!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.accountIsActive(n,"").subscribe(l=>{this.delRes=l,"Account Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),r().fire({icon:"success",title:"Deactivate!",text:"Account Is Deactivate Successfully."}))})}Active(e,n){r().fire({title:"Are you sure?",text:"Do you want to Active this account!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.coreService.accountIsActive(n,"").subscribe(l=>{this.delRes=l,"Account Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),r().fire({icon:"success",title:"Active!",text:"Account Is Active Successfully."}))})}ngOnInit(){this.coreService.getAccount().subscribe(n=>{this.tableData=n,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)});const e=JSON.parse(localStorage.getItem("auth"));e&&e.permission&&e.permission.map(o=>{"master"===o.content_type.app_label&&"account"===o.content_type.model&&"add_account"==o.codename?(this.isAdd=o.codename,console.log(this.isAdd)):"master"===o.content_type.app_label&&"account"===o.content_type.model&&"change_account"==o.codename?(this.isEdit=o.codename,console.log(this.isEdit)):"master"===o.content_type.app_label&&"account"===o.content_type.model&&"delete_account"==o.codename&&(this.isDelete=o.codename,console.log(this.isDelete))})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(e){this.coreService.deleteEmployee(e).subscribe(n=>{this.delRes=n})}search(){if(""==this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(n=>{const o=n.title.toLocaleLowerCase(),l=n.accounts_type.toLocaleLowerCase();return!!o.match(e)||!!l.match(e)})}}sort(e){this.key=e,this.reverse=!this.reverse}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(v.p),t.Y36(g._))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-accountlist"]],decls:115,vars:11,consts:[[1,"page-header"],[1,"page-title"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],[1,"form-select"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//masters/addaccount",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Account list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Account"),t.qZA()(),t.YNc(6,x,4,0,"div",2),t.qZA(),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t.TgZ(14,"span"),t._UZ(15,"img",10),t.qZA()()(),t.TgZ(16,"div",11)(17,"a",12),t._UZ(18,"img",13),t.qZA(),t.TgZ(19,"div",14)(20,"label")(21,"input",15),t.NdJ("ngModelChange",function(l){return n.titlee=l})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),t._UZ(26,"img",18),t.qZA()(),t.TgZ(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()()()()(),t.TgZ(33,"div",23)(34,"div",24)(35,"div",25)(36,"div",26)(37,"div",27)(38,"select",28)(39,"option"),t._uU(40,"Choose Category"),t.qZA(),t.TgZ(41,"option"),t._uU(42,"Computers"),t.qZA()()()(),t.TgZ(43,"div",26)(44,"div",27)(45,"select",28)(46,"option"),t._uU(47,"Choose Sub Category"),t.qZA(),t.TgZ(48,"option"),t._uU(49,"Fruits"),t.qZA()()()(),t.TgZ(50,"div",26)(51,"div",27)(52,"select",28)(53,"option"),t._uU(54,"Choose Sub Brand"),t.qZA(),t.TgZ(55,"option"),t._uU(56,"Iphone"),t.qZA()()()(),t.TgZ(57,"div",29)(58,"div",27)(59,"a",30),t._UZ(60,"img",31),t.qZA()()()()()(),t.TgZ(61,"div",32)(62,"table",33)(63,"thead")(64,"tr")(65,"th",34),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(66,"label",35),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(67,"input",36),t.NdJ("ngModelChange",function(l){return n.allSelected=l})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(68,"span",37),t.qZA(),t._UZ(69,"i",38),t.qZA(),t.TgZ(70,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(71,"Title "),t._UZ(72,"i",38),t.qZA(),t.TgZ(73,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(74,"Accounts Type "),t._UZ(75,"i",38),t.qZA(),t.TgZ(76,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(77,"Account Sub Type "),t._UZ(78,"i",38),t.qZA(),t.TgZ(79,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(80,"Account Id "),t._UZ(81,"i",38),t.qZA(),t.TgZ(82,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(83,"Opening Balance "),t._UZ(84,"i",38),t.qZA(),t.TgZ(85,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(86,"Is Active "),t._UZ(87,"i",38),t.qZA(),t.TgZ(88,"th",34),t.NdJ("click",function(){return n.sort("id")}),t._uU(89,"Action "),t._UZ(90,"i",38),t.qZA()()(),t.YNc(91,J,4,11,"tbody",39),t.YNc(92,D,5,0,"tbody",39),t.qZA(),t.TgZ(93,"div",40),t.YNc(94,I,1,0,"mat-progress-bar",41),t.qZA(),t.TgZ(95,"div",25)(96,"div",42)(97,"div",43),t._uU(98," Show per page "),t.TgZ(99,"select",44),t.NdJ("ngModelChange",function(l){return n.itemsPerPage=l}),t.TgZ(100,"option",45),t._uU(101,"5"),t.qZA(),t.TgZ(102,"option",46),t._uU(103,"10"),t.qZA(),t.TgZ(104,"option",47),t._uU(105,"20"),t.qZA(),t.TgZ(106,"option",48),t._uU(107,"50"),t.qZA(),t.TgZ(108,"option",49),t._uU(109,"All"),t.qZA()()()(),t.TgZ(110,"div",50)(111,"div",51)(112,"pagination-controls",52),t.NdJ("pageChange",function(l){return n.p=l}),t.qZA(),t.TgZ(113,"div",53),t._uU(114),t.qZA()()()()()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",n.isAdd),t.xp6(15),t.Q6J("ngModel",n.titlee),t.xp6(41),t.Q6J("dtOptions",n.dtOptions),t.xp6(5),t.Q6J("ngModel",n.allSelected),t.xp6(24),t.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.tableData?null:n.tableData.length)),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(15),t.lnq("Showing ",n.pageSize," to ",n.pageSize," of ",n.pageSize," entries"))},dependencies:[u.sg,u.O5,m.yS,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.On,p.pW,h.LS,A.Rr,C.G,h._s,M.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),i})();var w=s(597);const b=JSON.parse(localStorage.getItem("auth"));let T;b&&b.permission&&b.permission.map(c=>{"master"===c.content_type.app_label&&"account"===c.content_type.model&&"view_account"==c.codename&&(T=c.codename,console.log(T))});const N=[{path:"",component:k,canActivate:[w.l],data:{allowedRoles:[T]}}];let R=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[m.Bz.forChild(N),m.Bz]}),i})();var B=s(6134),P=s(8468);let L=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,R,B.ii.forRoot(),P.I]}),i})()},597:(y,f,s)=>{s.d(f,{l:()=>r});var u=s(4650),m=s(8996),Z=s(7185);let r=(()=>{class t{constructor(g,a,p){this.router=g,this.Arout=a,this.toastr=p}canActivate(g,a){const p=JSON.parse(localStorage.getItem("auth"));if(p&&p.user){const h=g.data.allowedRoles;console.log(h,"allowedRoles");const A=p.permission.some(C=>h.includes(C.codename));if(console.log(A),A)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["//errorpages/error500"]),!1}}return t.\u0275fac=function(g){return new(g||t)(u.LFG(m.F0),u.LFG(m.gz),u.LFG(Z._W))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);