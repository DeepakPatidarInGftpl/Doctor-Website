"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[401],{401:(x,u,s)=>{s.r(u),s.d(u,{EmployeeListModule:()=>q});var h=s(6895),m=s(8996),y=s(2454),d=s.n(y),e=s(4650),C=s(927),v=s(2326),_=s(5415),c=s(4006),p=s(4333),Z=s(455),f=s(4040);function T(o,r){if(1&o){const i=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",54)(3,"input",55),e.NdJ("ngModelChange",function(n){const a=e.CHM(i).index,g=e.oxw();return e.KtG(g.selectedRows[a]=n)}),e.qZA(),e._UZ(4,"span",39),e.qZA()(),e.TgZ(5,"td",56)(6,"a",57),e._uU(7),e.qZA()(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.TgZ(20,"td"),e._uU(21),e.qZA(),e.TgZ(22,"td")(23,"mat-slide-toggle",58),e.NdJ("click",function(){const n=e.CHM(i),l=n.$implicit,a=n.index,g=e.oxw();return e.KtG(l.is_active?g.isActive(a,l.id):g.Active(a,l.id))})("ngModelChange",function(n){const a=e.CHM(i).$implicit;return e.KtG(a.is_active=n)}),e.qZA()(),e.TgZ(24,"td")(25,"a",59),e._UZ(26,"img",60),e.qZA(),e.TgZ(27,"a",59),e._UZ(28,"img",61),e.qZA(),e.TgZ(29,"a",62),e.NdJ("click",function(){const n=e.CHM(i),l=n.index,a=n.$implicit,g=e.oxw();return e.KtG(g.confirmText(l,a.id))}),e._UZ(30,"img",63),e.qZA()()()}if(2&o){const i=r.$implicit,t=r.index,n=e.oxw();e.xp6(3),e.Q6J("ngModel",n.selectedRows[t]),e.xp6(3),e.MGl("routerLink","//employee/employee-details/",i.id,""),e.xp6(1),e.Oqu(i.name),e.xp6(2),e.Oqu(i.fathers_name),e.xp6(2),e.Oqu(i.dob),e.xp6(2),e.Oqu(i.mobile),e.xp6(2),e.Oqu(i.email),e.xp6(2),e.Oqu(i.country.country_name),e.xp6(2),e.Oqu(i.state.state),e.xp6(2),e.Oqu(i.pincode),e.xp6(2),e.Q6J("ngModel",i.is_active),e.xp6(2),e.MGl("routerLink","//employee/employee-details/",i.id,""),e.xp6(2),e.MGl("routerLink","//employee/editemployee/",i.id,"")}}const A=function(o,r){return{itemsPerPage:o,currentPage:r}},b=[{path:"",component:(()=>{class o{constructor(i,t){this.coreService=i,this.QueryService=t,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(i,t){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.deleteEmployee(t).subscribe(l=>{this.delRes=l,"Employee Deleted successfully"==this.delRes.msg&&this.ngOnInit()}),d().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(i,1))})}isActive(i,t){d().fire({title:"Are you sure?",text:"Do you want to Deactivate this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.employeeIsActive(t,"").subscribe(l=>{this.delRes=l,"Employee Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),d().fire({icon:"success",title:"Deactivate!",text:"Employee Is Deactivate Successfully."}))})}Active(i,t){d().fire({title:"Are you sure?",text:"Do you want to Active this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.coreService.employeeIsActive(t,"").subscribe(l=>{this.delRes=l,"Employee Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),d().fire({icon:"success",title:"Active!",text:"Employee Is Active Successfully."}))})}ngOnInit(){this.coreService.getEmployee().subscribe(i=>{console.log(i),this.tableData=i,this.selectedRows=new Array(this.tableData.length).fill(!1)})}selectAlll(){this.selectedRows.fill(this.allSelected)}ngAfterViewChecked(){}selectAll(i){this.tableData.forEach(i?t=>{t.isSelected=!1}:t=>{t.isSelected=!0})}deleteId(i){this.coreService.deleteEmployee(i).subscribe(t=>{this.delRes=t})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(i=>(console.log(i),console.log(i.name.toLocaleLowerCase()),console.log(i.name.match(this.titlee)),i.name.match(this.titlee)))}sort(i){this.key=i,this.reverse=!this.reverse}}return o.\u0275fac=function(i){return new(i||o)(e.Y36(C.p),e.Y36(v._))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-employee-list"]],decls:127,vars:18,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//employee/addemployee",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],[1,"form-select"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(i,t){1&i&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Employee list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Employee"),e.qZA()(),e.TgZ(6,"div",2)(7,"a",3),e._UZ(8,"img",4),e._uU(9,"Add Employee "),e.qZA()()(),e.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),e._UZ(16,"img",11),e.TgZ(17,"span"),e._UZ(18,"img",12),e.qZA()()(),e.TgZ(19,"div",13)(20,"a",14),e._UZ(21,"img",15),e.qZA(),e.TgZ(22,"div",16)(23,"label")(24,"input",17),e.NdJ("ngModelChange",function(l){return t.titlee=l})("ngModelChange",function(){return t.search()}),e.qZA()()()()(),e.TgZ(25,"div",18)(26,"ul")(27,"li")(28,"a",19),e._UZ(29,"img",20),e.qZA()(),e.TgZ(30,"li")(31,"a",21),e._UZ(32,"img",22),e.qZA()(),e.TgZ(33,"li")(34,"a",23),e._UZ(35,"img",24),e.qZA()()()()(),e.TgZ(36,"div",25)(37,"div",26)(38,"div",27)(39,"div",28)(40,"div",29)(41,"select",30)(42,"option"),e._uU(43,"Choose Category"),e.qZA(),e.TgZ(44,"option"),e._uU(45,"Computers"),e.qZA()()()(),e.TgZ(46,"div",28)(47,"div",29)(48,"select",30)(49,"option"),e._uU(50,"Choose Sub Category"),e.qZA(),e.TgZ(51,"option"),e._uU(52,"Fruits"),e.qZA()()()(),e.TgZ(53,"div",28)(54,"div",29)(55,"select",30)(56,"option"),e._uU(57,"Choose Sub Brand"),e.qZA(),e.TgZ(58,"option"),e._uU(59,"Iphone"),e.qZA()()()(),e.TgZ(60,"div",31)(61,"div",29)(62,"a",32),e._UZ(63,"img",33),e.qZA()()()()()(),e.TgZ(64,"div",34)(65,"table",35)(66,"thead")(67,"tr")(68,"th",36),e.NdJ("click",function(){return t.sort("id")}),e.TgZ(69,"label",37),e.NdJ("click",function(){return t.selectAll(t.initChecked)}),e.TgZ(70,"input",38),e.NdJ("ngModelChange",function(l){return t.allSelected=l})("change",function(){return t.selectAlll()}),e.qZA(),e._UZ(71,"span",39),e.qZA(),e._UZ(72,"i",40),e.qZA(),e.TgZ(73,"th",36),e.NdJ("click",function(){return t.sort("id")}),e._uU(74,"Name "),e._UZ(75,"i",40),e.qZA(),e.TgZ(76,"th",36),e.NdJ("click",function(){return t.sort("id")}),e._uU(77,"Fathers Name "),e._UZ(78,"i",40),e.qZA(),e.TgZ(79,"th",36),e.NdJ("click",function(){return t.sort("id")}),e._uU(80,"Date of birth "),e._UZ(81,"i",40),e.qZA(),e.TgZ(82,"th",36),e.NdJ("click",function(){return t.sort("id")}),e._uU(83,"Phone Number "),e._UZ(84,"i",40),e.qZA(),e.TgZ(85,"th",36),e.NdJ("click",function(){return t.sort("id")}),e._uU(86,"Email "),e._UZ(87,"i",40),e.qZA(),e.TgZ(88,"th",36),e.NdJ("click",function(){return t.sort("id")}),e._uU(89,"Country "),e._UZ(90,"i",40),e.qZA(),e.TgZ(91,"th",36),e.NdJ("click",function(){return t.sort("id")}),e._uU(92,"State "),e._UZ(93,"i",40),e.qZA(),e.TgZ(94,"th",36),e.NdJ("click",function(){return t.sort("id")}),e._uU(95,"Pincode "),e._UZ(96,"i",40),e.qZA(),e.TgZ(97,"th",36),e.NdJ("click",function(){return t.sort("id")}),e._uU(98,"Is Active "),e._UZ(99,"i",40),e.qZA(),e.TgZ(100,"th",36),e.NdJ("click",function(){return t.sort("id")}),e._uU(101,"Action "),e._UZ(102,"i",40),e.qZA()()(),e.TgZ(103,"tbody"),e.YNc(104,T,31,13,"tr",41),e.ALo(105,"paginate"),e.ALo(106,"orderBy"),e.qZA()(),e.TgZ(107,"div",27)(108,"div",42)(109,"div",43),e._uU(110," Show per page "),e.TgZ(111,"select",44),e.NdJ("ngModelChange",function(l){return t.itemsPerPage=l}),e.TgZ(112,"option",45),e._uU(113,"5"),e.qZA(),e.TgZ(114,"option",46),e._uU(115,"10"),e.qZA(),e.TgZ(116,"option",47),e._uU(117,"20"),e.qZA(),e.TgZ(118,"option",48),e._uU(119,"50"),e.qZA(),e.TgZ(120,"option",49),e._uU(121,"All"),e.qZA()()()(),e.TgZ(122,"div",50)(123,"div",51)(124,"pagination-controls",52),e.NdJ("pageChange",function(l){return t.p=l}),e.qZA(),e.TgZ(125,"div",53),e._uU(126),e.qZA()()()()()()()),2&i&&(e.xp6(24),e.Q6J("ngModel",t.titlee),e.xp6(41),e.Q6J("dtOptions",t.dtOptions),e.xp6(5),e.Q6J("ngModel",t.allSelected),e.xp6(34),e.Q6J("ngForOf",e.xi3(105,8,e.Dn7(106,11,t.tableData,t.key,t.reverse),e.WLB(15,A,t.pageSize,t.p))),e.xp6(7),e.Q6J("ngModel",t.itemsPerPage),e.xp6(15),e.lnq("Showing ",t.pageSize," to ",t.pageSize," of ",t.pageSize," entries"))},dependencies:[h.sg,m.yS,_.G,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,p.LS,Z.Rr,p._s,f.T],styles:['.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}.datanew[_ngcontent-%COMP%]   .thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:unset;margin-left:5px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}']}),o})()}];let U=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.Bz.forChild(b),m.Bz]}),o})();var M=s(6134),E=s(906),L=s(3189);let q=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[h.ez,U,_.T,c.u5,E.ZU,M.ii.forRoot(),L.h,p.JX,f.l,Z.rP]}),o})()}}]);