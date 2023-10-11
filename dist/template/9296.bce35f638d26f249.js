"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9296],{99296:(b,u,o)=>{o.r(u),o.d(u,{CustomerlistModule:()=>A});var m=o(36895),c=o(88996),Z=o(2454),g=o.n(Z),t=o(94650),h=o(72326),p=o(65415),l=o(24006);function C(s,n){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",41)(3,"input",38),t.NdJ("ngModelChange",function(r){const d=t.CHM(e).$implicit;return t.KtG(d.isSelected=r)}),t.qZA(),t._UZ(4,"span",39),t.qZA()(),t.TgZ(5,"td",42)(6,"a",43),t._UZ(7,"img",44),t.qZA(),t.TgZ(8,"a",45),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td")(21,"a",46),t._UZ(22,"img",47),t.qZA(),t.TgZ(23,"a",48),t.NdJ("click",function(){const a=t.CHM(e).index,d=t.oxw();return t.KtG(d.confirmText(a))}),t._UZ(24,"img",49),t.qZA()()()}if(2&s){const e=n.$implicit;t.xp6(3),t.Q6J("ngModel",e.isSelected),t.xp6(4),t.Q6J("src",e.img,t.LSH),t.xp6(2),t.Oqu(e.CustomerName),t.xp6(2),t.Oqu(e.code),t.xp6(2),t.Oqu(e.Customer),t.xp6(2),t.hij("",e.Phone," "),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.Country)}}const v=[{path:"",component:(()=>{class s{constructor(e){this.QueryService=e,this.dtOptions={},this.initChecked=!1,this.tableData=[],this.QueryService.filterToggle(),this.tableData=this.QueryService.customerList}confirmText(e){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(g().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1))})}ngOnInit(){this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(e,i)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}}}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(h._))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customerlist"]],decls:76,vars:3,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//people/addcustomer",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],["type","text","placeholder","Enter Customer Code"],["type","text","placeholder","Enter Customer Name"],["type","text","placeholder","Enter Phone Number"],["type","text","placeholder","Enter Email"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[4,"ngFor","ngForOf"],[1,"checkboxs"],[1,"productimgname"],["href","javascript:void(0);",1,"product-img"],["alt","product",3,"src"],["href","javascript:void(0);"],["routerLink","//people/editcustomer",1,"me-3"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Customer List"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Customers"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add Customer"),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._UZ(18,"img",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"a",14),t._UZ(21,"img",15),t.qZA()()(),t.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),t._UZ(26,"img",18),t.qZA()(),t.TgZ(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()()()()(),t.TgZ(33,"div",23)(34,"div",24)(35,"div",25)(36,"div",26)(37,"div",27),t._UZ(38,"input",28),t.qZA()(),t.TgZ(39,"div",26)(40,"div",27),t._UZ(41,"input",29),t.qZA()(),t.TgZ(42,"div",26)(43,"div",27),t._UZ(44,"input",30),t.qZA()(),t.TgZ(45,"div",26)(46,"div",27),t._UZ(47,"input",31),t.qZA()(),t.TgZ(48,"div",32)(49,"div",27)(50,"a",33),t._UZ(51,"img",34),t.qZA()()()()()(),t.TgZ(52,"div",35)(53,"table",36)(54,"thead")(55,"tr")(56,"th")(57,"label",37),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(58,"input",38),t.NdJ("ngModelChange",function(a){return i.initChecked=a}),t.qZA(),t._UZ(59,"span",39),t.qZA()(),t.TgZ(60,"th"),t._uU(61,"Customer Name"),t.qZA(),t.TgZ(62,"th"),t._uU(63,"code"),t.qZA(),t.TgZ(64,"th"),t._uU(65,"Customer"),t.qZA(),t.TgZ(66,"th"),t._uU(67,"Phone"),t.qZA(),t.TgZ(68,"th"),t._uU(69,"email"),t.qZA(),t.TgZ(70,"th"),t._uU(71,"Country"),t.qZA(),t.TgZ(72,"th"),t._uU(73,"Action"),t.qZA()()(),t.TgZ(74,"tbody"),t.YNc(75,C,25,8,"tr",40),t.qZA()()()()()),2&e&&(t.xp6(53),t.Q6J("dtOptions",i.dtOptions),t.xp6(5),t.Q6J("ngModel",i.initChecked),t.xp6(17),t.Q6J("ngForOf",i.tableData))},dependencies:[m.sg,c.yS,p.G,l.Wl,l.JJ,l.On]}),s})()}];let f=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.Bz.forChild(v),c.Bz]}),s})();var T=o(96134);let A=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[m.ez,f,p.T,T.ii.forRoot(),l.u5]}),s})()}}]);