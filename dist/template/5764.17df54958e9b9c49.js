"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5764],{45764:(C,d,n)=>{n.r(d),n.d(d,{GrouppermissionsModule:()=>v});var u=n(36895),c=n(88996),m=n(2454),g=n.n(m),t=n(94650),h=n(72326),r=n(24006);function Z(s,o){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",26)(3,"input",22),t.NdJ("ngModelChange",function(a){const p=t.CHM(e).$implicit;return t.KtG(p.isSelected=a)}),t.qZA(),t._UZ(4,"span",23),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"span",27),t._uU(11),t.qZA()(),t.TgZ(12,"td",24)(13,"a",28),t._UZ(14,"img",29),t.qZA(),t.TgZ(15,"a",30),t.NdJ("click",function(){const l=t.CHM(e).index,p=t.oxw();return t.KtG(p.confirmText(l))}),t._UZ(16,"img",31),t.qZA()()()}if(2&s){const e=o.$implicit;t.xp6(3),t.Q6J("ngModel",e.isSelected),t.xp6(3),t.Oqu(e.Role),t.xp6(2),t.Oqu(e.description),t.xp6(3),t.Oqu(e.Status)}}const f=[{path:"",component:(()=>{class s{constructor(e){this.QueryService=e,this.dtOptions={},this.initChecked=!1,this.tableData=[],this.QueryService.filterToggle(),this.tableData=this.QueryService.groupPermission}confirmText(e){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(g().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1))})}ngOnInit(){this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(e,i)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}}}selectAll(e){this.tableData.forEach(e?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(h._))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-grouppermissions"]],decls:46,vars:2,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//settings/createpermission",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],[1,"table","datanew"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[1,"text-end"],[4,"ngFor","ngForOf"],[1,"checkboxs"],[1,"badges","bg-lightgreen"],["routerLink","//settings/editpermission",1,"me-3"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Group Permissions"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage Group Permissions"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add Group Permission"),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.qZA()()(),t.TgZ(17,"div",12)(18,"ul")(19,"li")(20,"a",13),t._UZ(21,"img",14),t.qZA()(),t.TgZ(22,"li")(23,"a",15),t._UZ(24,"img",16),t.qZA()(),t.TgZ(25,"li")(26,"a",17),t._UZ(27,"img",18),t.qZA()()()()(),t.TgZ(28,"div",19)(29,"table",20)(30,"thead")(31,"tr")(32,"th")(33,"label",21),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(34,"input",22),t.NdJ("ngModelChange",function(l){return i.initChecked=l}),t.qZA(),t._UZ(35,"span",23),t.qZA()(),t.TgZ(36,"th"),t._uU(37,"Role"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"description"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"Status"),t.qZA(),t.TgZ(42,"th",24),t._uU(43,"Action"),t.qZA()()(),t.TgZ(44,"tbody"),t.YNc(45,Z,17,4,"tr",25),t.qZA()()()()()),2&e&&(t.xp6(34),t.Q6J("ngModel",i.initChecked),t.xp6(11),t.Q6J("ngForOf",i.tableData))},dependencies:[u.sg,c.yS,r.Wl,r.JJ,r.On]}),s})()}];let T=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.Bz.forChild(f),c.Bz]}),s})();var b=n(65415);let v=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[u.ez,T,b.T,r.u5]}),s})()}}]);