"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9153],{9153:(S,m,s)=>{s.r(m),s.d(m,{AccountlistModule:()=>x});var _=s(6895),g=s(8996),f=s(2454),u=s.n(f),t=s(4650),C=s(927),v=s(2326),h=s(5415),r=s(4006),p=s(4333),Z=s(455),A=s(4040);function T(o,l){if(1&o){const n=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",54)(3,"input",55),t.NdJ("ngModelChange",function(i){const a=t.CHM(n).index,d=t.oxw();return t.KtG(d.selectedRows[a]=i)}),t.qZA(),t._UZ(4,"span",39),t.qZA()(),t.TgZ(5,"td",56)(6,"a",57),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.qZA(),t.TgZ(26,"td"),t._uU(27),t.qZA(),t.TgZ(28,"td")(29,"mat-slide-toggle",58),t.NdJ("click",function(){const i=t.CHM(n),c=i.$implicit,a=i.index,d=t.oxw();return t.KtG(c.is_active?d.deActivate(a,c.id):d.Active(a,c.id))})("ngModelChange",function(i){const a=t.CHM(n).$implicit;return t.KtG(a.is_active=i)}),t.qZA()(),t.TgZ(30,"td")(31,"a",59),t._UZ(32,"img",60),t.qZA(),t.TgZ(33,"a",59),t._UZ(34,"img",61),t.qZA(),t.TgZ(35,"a",62),t.NdJ("click",function(){const i=t.CHM(n),c=i.index,a=i.$implicit,d=t.oxw();return t.KtG(d.confirmText(c,a.id))}),t._UZ(36,"img",63),t.qZA()()()}if(2&o){const n=l.$implicit,e=l.index,i=t.oxw();t.xp6(3),t.Q6J("ngModel",i.selectedRows[e]),t.xp6(3),t.MGl("routerLink","//account/account-details/",n.id,""),t.xp6(1),t.Oqu(n.contact_person_name),t.xp6(2),t.Oqu(n.title),t.xp6(2),t.Oqu(n.birthday),t.xp6(2),t.Oqu(n.mobile),t.xp6(2),t.Oqu(n.email),t.xp6(2),t.Oqu(n.type_of_customer),t.xp6(2),t.Oqu(n.accounts_type),t.xp6(2),t.Oqu(n.opening_balance_type),t.xp6(2),t.Oqu(n.country.country_name),t.xp6(2),t.Oqu(n.state.state),t.xp6(2),t.Oqu(n.address),t.xp6(2),t.Q6J("ngModel",n.is_active),t.xp6(2),t.MGl("routerLink","//account/account-details/",n.id,""),t.xp6(2),t.MGl("routerLink","//account/editaccount/",n.id,"")}}const b=function(o,l){return{itemsPerPage:o,currentPage:l}},U=[{path:"",component:(()=>{class o{constructor(n,e){this.coreService=n,this.QueryService=e,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.allSelected=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(n,e){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.coreService.deleteAccount(e).subscribe(c=>{this.delRes=c,"Account Deleted successfully"==this.delRes.msg&&this.ngOnInit()}),u().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(n,1))})}deActivate(n,e){u().fire({title:"Are you sure?",text:"Do you want to Deactivate this account!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.coreService.accountIsActive(e,"").subscribe(c=>{this.delRes=c,"Account Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),u().fire({icon:"success",title:"Deactivate!",text:"Account Is Deactivate Successfully."}))})}Active(n,e){u().fire({title:"Are you sure?",text:"Do you want to Active this account!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.coreService.accountIsActive(e,"").subscribe(c=>{this.delRes=c,"Account Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),u().fire({icon:"success",title:"Active!",text:"Account Is Active Successfully."}))})}ngOnInit(){this.coreService.getAccount().subscribe(n=>{this.tableData=n,this.selectedRows=new Array(this.tableData.length).fill(!1)})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(n){this.tableData.forEach(n?e=>{e.isSelected=!1}:e=>{e.isSelected=!0})}deleteId(n){this.coreService.deleteEmployee(n).subscribe(e=>{this.delRes=e})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(n=>(console.log(n.contact_person_name),console.log(n.contact_person_name.toLocaleLowerCase()),console.log(n.contact_person_name.match(this.titlee)),n.contact_person_name.match(this.titlee)?n.contact_person_name.match(this.titlee):n.title.match(this.titlee)?n.title.match(this.titlee):void 0))}sort(n){this.key=n,this.reverse=!this.reverse}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(C.p),t.Y36(v._))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-accountlist"]],decls:136,vars:18,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//account/addaccount",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],[1,"form-select"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Account list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Account"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add Account "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._UZ(18,"img",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"a",14),t._UZ(21,"img",15),t.qZA(),t.TgZ(22,"div",16)(23,"label")(24,"input",17),t.NdJ("ngModelChange",function(c){return e.titlee=c})("ngModelChange",function(){return e.search()}),t.qZA()()()()(),t.TgZ(25,"div",18)(26,"ul")(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()(),t.TgZ(33,"li")(34,"a",23),t._UZ(35,"img",24),t.qZA()()()()(),t.TgZ(36,"div",25)(37,"div",26)(38,"div",27)(39,"div",28)(40,"div",29)(41,"select",30)(42,"option"),t._uU(43,"Choose Category"),t.qZA(),t.TgZ(44,"option"),t._uU(45,"Computers"),t.qZA()()()(),t.TgZ(46,"div",28)(47,"div",29)(48,"select",30)(49,"option"),t._uU(50,"Choose Sub Category"),t.qZA(),t.TgZ(51,"option"),t._uU(52,"Fruits"),t.qZA()()()(),t.TgZ(53,"div",28)(54,"div",29)(55,"select",30)(56,"option"),t._uU(57,"Choose Sub Brand"),t.qZA(),t.TgZ(58,"option"),t._uU(59,"Iphone"),t.qZA()()()(),t.TgZ(60,"div",31)(61,"div",29)(62,"a",32),t._UZ(63,"img",33),t.qZA()()()()()(),t.TgZ(64,"div",34)(65,"table",35)(66,"thead")(67,"tr")(68,"th",36),t.NdJ("click",function(){return e.sort("id")}),t.TgZ(69,"label",37),t.NdJ("click",function(){return e.selectAll(e.initChecked)}),t.TgZ(70,"input",38),t.NdJ("ngModelChange",function(c){return e.allSelected=c})("change",function(){return e.selectAlll()}),t.qZA(),t._UZ(71,"span",39),t.qZA(),t._UZ(72,"i",40),t.qZA(),t.TgZ(73,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(74,"Name "),t._UZ(75,"i",40),t.qZA(),t.TgZ(76,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(77,"Title "),t._UZ(78,"i",40),t.qZA(),t.TgZ(79,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(80,"Date of birth "),t._UZ(81,"i",40),t.qZA(),t.TgZ(82,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(83,"Phone Number "),t._UZ(84,"i",40),t.qZA(),t.TgZ(85,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(86,"Email "),t._UZ(87,"i",40),t.qZA(),t.TgZ(88,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(89,"Type Of Customer "),t._UZ(90,"i",40),t.qZA(),t.TgZ(91,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(92,"Type of Accounts "),t._UZ(93,"i",40),t.qZA(),t.TgZ(94,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(95,"Type of Opening Balance "),t._UZ(96,"i",40),t.qZA(),t.TgZ(97,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(98,"Country "),t._UZ(99,"i",40),t.qZA(),t.TgZ(100,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(101,"State "),t._UZ(102,"i",40),t.qZA(),t.TgZ(103,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(104,"Address "),t._UZ(105,"i",40),t.qZA(),t.TgZ(106,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(107,"Is Active "),t._UZ(108,"i",40),t.qZA(),t.TgZ(109,"th",36),t.NdJ("click",function(){return e.sort("id")}),t._uU(110,"Action "),t._UZ(111,"i",40),t.qZA()()(),t.TgZ(112,"tbody"),t.YNc(113,T,37,16,"tr",41),t.ALo(114,"paginate"),t.ALo(115,"orderBy"),t.qZA()(),t.TgZ(116,"div",27)(117,"div",42)(118,"div",43),t._uU(119," Show per page "),t.TgZ(120,"select",44),t.NdJ("ngModelChange",function(c){return e.itemsPerPage=c}),t.TgZ(121,"option",45),t._uU(122,"5"),t.qZA(),t.TgZ(123,"option",46),t._uU(124,"10"),t.qZA(),t.TgZ(125,"option",47),t._uU(126,"20"),t.qZA(),t.TgZ(127,"option",48),t._uU(128,"50"),t.qZA(),t.TgZ(129,"option",49),t._uU(130,"All"),t.qZA()()()(),t.TgZ(131,"div",50)(132,"div",51)(133,"pagination-controls",52),t.NdJ("pageChange",function(c){return e.p=c}),t.qZA(),t.TgZ(134,"div",53),t._uU(135),t.qZA()()()()()()()),2&n&&(t.xp6(24),t.Q6J("ngModel",e.titlee),t.xp6(41),t.Q6J("dtOptions",e.dtOptions),t.xp6(5),t.Q6J("ngModel",e.allSelected),t.xp6(43),t.Q6J("ngForOf",t.xi3(114,8,t.Dn7(115,11,e.tableData,e.key,e.reverse),t.WLB(15,b,e.pageSize,e.p))),t.xp6(7),t.Q6J("ngModel",e.itemsPerPage),t.xp6(15),t.lnq("Showing ",e.pageSize," to ",e.pageSize," of ",e.pageSize," entries"))},dependencies:[_.sg,g.yS,h.G,r.YN,r.Kr,r.Fj,r.Wl,r.EJ,r.JJ,r.On,p.LS,Z.Rr,p._s,A.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),o})()}];let y=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[g.Bz.forChild(U),g.Bz]}),o})();var q=s(906),M=s(6134),k=s(3189);let x=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.ez,y,h.T,r.u5,q.ZU,M.ii.forRoot(),k.h,p.JX,A.l,Z.rP]}),o})()}}]);