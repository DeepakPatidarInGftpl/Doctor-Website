"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6985],{6985:(b,g,r)=>{r.r(g),r.d(g,{CustomerreportModule:()=>A});var d=r(6895),u=r(8996),t=r(4650),Z=r(2326),p=r(5415),l=r(4006),c=r(906);const h=function(o){return{"bg-lightgreen":o}},C=function(o,s,e){return{"bg-lightgreen":o,"bg-lightred":s,"bg-lightgrey":e}};function T(o,s){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",37)(3,"input",34),t.NdJ("ngModelChange",function(i){const _=t.CHM(e).$implicit;return t.KtG(_.isSelected=i)}),t.qZA(),t._UZ(4,"span",35),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"span",38),t._uU(17),t.qZA()(),t.TgZ(18,"td")(19,"span",38),t._uU(20),t.qZA()()()}if(2&o){const e=s.$implicit;t.xp6(3),t.Q6J("ngModel",e.isSelected),t.xp6(3),t.Oqu(e.Customercode),t.xp6(2),t.Oqu(e.Customername),t.xp6(2),t.Oqu(e.Amount),t.xp6(2),t.Oqu(e.Paid),t.xp6(2),t.Oqu(e.Amountdue),t.xp6(2),t.Q6J("ngClass",t.VKq(10,h,"Completed"===e.Status)),t.xp6(1),t.Oqu(e.Status),t.xp6(2),t.Q6J("ngClass",t.kEZ(12,C,"Paid"===e.PaymentStatus,"Overdue"===e.PaymentStatus,"UnPaid"===e.PaymentStatus)),t.xp6(1),t.Oqu(e.PaymentStatus)}}let m=(()=>{class o{constructor(e){this.QueryService=e,this.dtOptions={},this.initChecked=!1,this.tableData=[],this.date=new Date,this.QueryService.filterToggle(),this.tableData=this.QueryService.customerReport}ngOnInit(){this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(e,n)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}}}selectAll(e){this.tableData.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(Z._))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-customerreport"]],decls:70,vars:5,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],[1,"input-groupicon"],[3,"ngModel","ngModelChange"],[1,"addonset"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[4,"ngFor","ngForOf"],[1,"checkboxs"],[1,"badges",3,"ngClass"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Customer Report"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Customer Report"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"a",7),t._UZ(12,"img",8),t.TgZ(13,"span"),t._UZ(14,"img",9),t.qZA()()(),t.TgZ(15,"div",10)(16,"a",11),t._UZ(17,"img",12),t.qZA()()(),t.TgZ(18,"div",13)(19,"ul")(20,"li")(21,"a",14),t._UZ(22,"img",15),t.qZA()(),t.TgZ(23,"li")(24,"a",16),t._UZ(25,"img",17),t.qZA()(),t.TgZ(26,"li")(27,"a",18),t._UZ(28,"img",19),t.qZA()()()()(),t.TgZ(29,"div",20)(30,"div",21)(31,"div",22)(32,"div",23)(33,"div",24)(34,"div",25)(35,"ngx-datepicker",26),t.NdJ("ngModelChange",function(a){return n.date=a}),t.qZA(),t._UZ(36,"div",27),t.qZA()()(),t.TgZ(37,"div",23)(38,"div",24)(39,"div",25)(40,"ngx-datepicker",26),t.NdJ("ngModelChange",function(a){return n.date=a}),t.qZA(),t._UZ(41,"div",27),t.qZA()()(),t.TgZ(42,"div",28)(43,"div",24)(44,"a",29),t._UZ(45,"img",30),t.qZA()()()()()(),t.TgZ(46,"div",31)(47,"table",32)(48,"thead")(49,"tr")(50,"th")(51,"label",33),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(52,"input",34),t.NdJ("ngModelChange",function(a){return n.initChecked=a}),t.qZA(),t._UZ(53,"span",35),t.qZA()(),t.TgZ(54,"th"),t._uU(55,"Customer code"),t.qZA(),t.TgZ(56,"th"),t._uU(57,"Customer name "),t.qZA(),t.TgZ(58,"th"),t._uU(59,"Amount"),t.qZA(),t.TgZ(60,"th"),t._uU(61,"Paid"),t.qZA(),t.TgZ(62,"th"),t._uU(63,"Amount due"),t.qZA(),t.TgZ(64,"th"),t._uU(65,"Status"),t.qZA(),t.TgZ(66,"th"),t._uU(67,"Payment Status"),t.qZA()()(),t.TgZ(68,"tbody"),t.YNc(69,T,21,16,"tr",36),t.qZA()()()()()),2&e&&(t.xp6(35),t.Q6J("ngModel",n.date),t.xp6(5),t.Q6J("ngModel",n.date),t.xp6(7),t.Q6J("dtOptions",n.dtOptions),t.xp6(5),t.Q6J("ngModel",n.initChecked),t.xp6(17),t.Q6J("ngForOf",n.tableData))},dependencies:[d.mk,d.sg,p.G,l.Wl,l.JJ,l.On,c.QB]}),o})();const v=[{path:"",component:m}];let f=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.Bz.forChild(v),u.Bz]}),o})(),A=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o,bootstrap:[m]}),o.\u0275inj=t.cJS({imports:[d.ez,f,p.T,l.u5,c.ZU]}),o})()}}]);