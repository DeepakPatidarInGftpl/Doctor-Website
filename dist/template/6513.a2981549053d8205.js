"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6513],{6513:(q,m,o)=>{o.r(m),o.d(m,{CompanylistModule:()=>U});var p=o(6895),d=o(1652),h=o(2454),u=o.n(h),t=o(1571),C=o(2326),y=o(2917),Z=o(5415),c=o(433);const v=function(i,a,e){return{"bg-lightgreen":i,"bg-lightred":a,"bg-lightyellow":e}};function T(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",38)(3,"input",35),t.NdJ("ngModelChange",function(n){const r=t.CHM(e).$implicit;return t.KtG(r.is_active=n)}),t.qZA(),t._UZ(4,"span",36),t.qZA()(),t.TgZ(5,"td",39)(6,"a",40),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td")(25,"span",41),t._uU(26),t.qZA()(),t.TgZ(27,"td")(28,"a",42),t._UZ(29,"img",43),t.qZA(),t.TgZ(30,"a",42),t._UZ(31,"img",44),t.qZA(),t.TgZ(32,"a",45),t.NdJ("click",function(){const n=t.CHM(e),l=n.index,r=n.$implicit,g=t.oxw();return t.KtG(g.confirmText(l,r.id))})("click",function(){const n=t.CHM(e),l=n.$implicit,r=n.index,g=t.oxw();return t.KtG(g.delete(l,r))}),t._UZ(33,"img",46),t.qZA()()()}if(2&i){const e=a.$implicit;t.xp6(3),t.Q6J("ngModel",e.is_active),t.xp6(4),t.Oqu(e.name),t.xp6(2),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.country),t.xp6(2),t.Oqu(e.state),t.xp6(2),t.Oqu(e.pincode),t.xp6(2),t.Oqu(e.financial_year),t.xp6(2),t.Oqu(e.gst),t.xp6(2),t.Oqu(e.currency),t.xp6(2),t.Q6J("ngClass",t.kEZ(14,v,!0===e.is_active,!1===e.is_active,"Partial"===e.is_active)),t.xp6(1),t.Oqu(e.is_active),t.xp6(2),t.MGl("routerLink","//company/company-details/",e.id,""),t.xp6(2),t.MGl("routerLink","//company/editcompany/",e.id,"")}}const f=[{path:"",component:(()=>{class i{constructor(e,s,n){this.QueryService=e,this.companyService=s,this.router=n,this.dtOptions={},this.initChecked=!1,this.QueryService.filterToggle(),this.tableData=this.QueryService.companyList}confirmText(e,s){u().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.companyService.deleteCompany(s).subscribe(l=>{this.delRes=l}),u().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1))})}ngOnInit(){this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(e,s)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}}}selectAll(e){this.tableData.forEach(e?s=>{s.isSelected=!1}:s=>{s.isSelected=!0})}deleteId(e){this.companyService.deleteCompany(e).subscribe(s=>{this.delRes=s})}delete(e,s){this.tableData.splice(s,1),this.companyService.deleteC("/pv-api/company/",e.id).subscribe(n=>{console.log(n)})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(C._),t.Y36(y.J),t.Y36(d.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-companylist"]],decls:93,vars:3,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//company/addcompany",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],[1,"form-select"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[4,"ngFor","ngForOf"],[1,"checkboxs"],[1,"productimgname"],["href","javascript:void(0);"],[1,"badges",3,"ngClass"],[1,"me-3",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(e,s){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Company list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Company"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add Company "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._UZ(18,"img",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"a",14),t._UZ(21,"img",15),t.qZA()()(),t.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),t._UZ(26,"img",18),t.qZA()(),t.TgZ(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()()()()(),t.TgZ(33,"div",23)(34,"div",24)(35,"div",25)(36,"div",26)(37,"div",27)(38,"select",28)(39,"option"),t._uU(40,"Choose Category"),t.qZA(),t.TgZ(41,"option"),t._uU(42,"Computers"),t.qZA()()()(),t.TgZ(43,"div",26)(44,"div",27)(45,"select",28)(46,"option"),t._uU(47,"Choose Sub Category"),t.qZA(),t.TgZ(48,"option"),t._uU(49,"Fruits"),t.qZA()()()(),t.TgZ(50,"div",26)(51,"div",27)(52,"select",28)(53,"option"),t._uU(54,"Choose Sub Brand"),t.qZA(),t.TgZ(55,"option"),t._uU(56,"Iphone"),t.qZA()()()(),t.TgZ(57,"div",29)(58,"div",27)(59,"a",30),t._UZ(60,"img",31),t.qZA()()()()()(),t.TgZ(61,"div",32)(62,"table",33)(63,"thead")(64,"tr")(65,"th")(66,"label",34),t.NdJ("click",function(){return s.selectAll(s.initChecked)}),t.TgZ(67,"input",35),t.NdJ("ngModelChange",function(l){return s.initChecked=l}),t.qZA(),t._UZ(68,"span",36),t.qZA()(),t.TgZ(69,"th"),t._uU(70,"Name "),t.qZA(),t.TgZ(71,"th"),t._uU(72,"Phone Number"),t.qZA(),t.TgZ(73,"th"),t._uU(74,"Email"),t.qZA(),t.TgZ(75,"th"),t._uU(76,"Country"),t.qZA(),t.TgZ(77,"th"),t._uU(78,"State"),t.qZA(),t.TgZ(79,"th"),t._uU(80,"Pincode"),t.qZA(),t.TgZ(81,"th"),t._uU(82,"Financial Year"),t.qZA(),t.TgZ(83,"th"),t._uU(84,"GST"),t.qZA(),t.TgZ(85,"th"),t._uU(86,"Currency"),t.qZA(),t.TgZ(87,"th"),t._uU(88,"Is_active"),t.qZA(),t.TgZ(89,"th"),t._uU(90,"Action"),t.qZA()()(),t.TgZ(91,"tbody"),t.YNc(92,T,34,18,"tr",37),t.qZA()()()()()),2&e&&(t.xp6(62),t.Q6J("dtOptions",s.dtOptions),t.xp6(5),t.Q6J("ngModel",s.initChecked),t.xp6(25),t.Q6J("ngForOf",s.tableData))},dependencies:[p.mk,p.sg,d.yS,Z.G,c.YN,c.Kr,c.Wl,c.JJ,c.On]}),i})()}];let _=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.Bz.forChild(f),d.Bz]}),i})();var A=o(6134),b=o(906);let U=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[p.ez,_,Z.T,c.u5,b.ZU,A.ii.forRoot()]}),i})()}}]);