"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3265],{3265:(C,b,c)=>{c.r(b),c.d(b,{UserlistsModule:()=>m});var u=c(6895),T=c(8996),y=c(2454),U=c.n(y),t=c(4650),s=c(2326),a=c(5415),e=c(4006),d=c(906);const g=function(n,l){return{"bg-lightgreen":n,"bg-lightred":l}};function r(n,l){if(1&n){const i=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",42)(3,"input",39),t.NdJ("ngModelChange",function(v){const A=t.CHM(i).$implicit;return t.KtG(A.isSelected=v)}),t.qZA(),t._UZ(4,"span",40),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"span",43),t._uU(17),t.qZA()(),t.TgZ(18,"td")(19,"a",44),t._UZ(20,"img",45),t.qZA(),t.TgZ(21,"a",46),t.NdJ("click",function(){const Z=t.CHM(i).index,A=t.oxw();return t.KtG(A.confirmText(Z))}),t._UZ(22,"img",47),t.qZA()()()}if(2&n){const i=l.$implicit;t.xp6(3),t.Q6J("ngModel",i.isSelected),t.xp6(3),t.Oqu(i.Username),t.xp6(2),t.Oqu(i.Phone),t.xp6(2),t.Oqu(i.email),t.xp6(2),t.Oqu(i.Role),t.xp6(2),t.Oqu(i.CreatedOn),t.xp6(2),t.Q6J("ngClass",t.WLB(8,g,"Active"===i.Status,"Restricted"===i.Status)),t.xp6(1),t.Oqu(i.Status)}}let p=(()=>{class n{constructor(i){this.QueryService=i,this.dtOptions={},this.initChecked=!1,this.tableData=[],this.date=new Date,this.QueryService.filterToggle(),this.tableData=this.QueryService.userList}confirmText(i){U().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(U().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(i,1))})}ngOnInit(){this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(i,o)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}}}selectAll(i){this.tableData.forEach(i?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(s._))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-userlists"]],decls:83,vars:4,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//users/newuser",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],["type","text","placeholder","Enter User Name"],["type","text","placeholder","Enter Phone"],["type","text","placeholder","Enter Email"],[3,"ngModel","ngModelChange"],[1,"form-select"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[4,"ngFor","ngForOf"],[1,"checkboxs"],[1,"badges",3,"ngClass"],["routerLink","//users/newuseredit",1,"me-3"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(i,o){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"User List"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your User"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add User"),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._UZ(18,"img",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"a",14),t._UZ(21,"img",15),t.qZA()()(),t.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),t._UZ(26,"img",18),t.qZA()(),t.TgZ(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()()()()(),t.TgZ(33,"div",23)(34,"div",24)(35,"div",25)(36,"div",26)(37,"div",27),t._UZ(38,"input",28),t.qZA()(),t.TgZ(39,"div",26)(40,"div",27),t._UZ(41,"input",29),t.qZA()(),t.TgZ(42,"div",26)(43,"div",27),t._UZ(44,"input",30),t.qZA()(),t.TgZ(45,"div",26)(46,"div",27)(47,"ngx-datepicker",31),t.NdJ("ngModelChange",function(Z){return o.date=Z}),t.qZA()()(),t.TgZ(48,"div",26)(49,"div",27)(50,"select",32)(51,"option"),t._uU(52,"Disable"),t.qZA(),t.TgZ(53,"option"),t._uU(54,"Enable"),t.qZA()()()(),t.TgZ(55,"div",33)(56,"div",27)(57,"a",34),t._UZ(58,"img",35),t.qZA()()()()()(),t.TgZ(59,"div",36)(60,"table",37)(61,"thead")(62,"tr")(63,"th")(64,"label",38),t.NdJ("click",function(){return o.selectAll(o.initChecked)}),t.TgZ(65,"input",39),t.NdJ("ngModelChange",function(Z){return o.initChecked=Z}),t.qZA(),t._UZ(66,"span",40),t.qZA()(),t.TgZ(67,"th"),t._uU(68,"User name "),t.qZA(),t.TgZ(69,"th"),t._uU(70,"Phone"),t.qZA(),t.TgZ(71,"th"),t._uU(72,"email"),t.qZA(),t.TgZ(73,"th"),t._uU(74,"Role"),t.qZA(),t.TgZ(75,"th"),t._uU(76,"Created On"),t.qZA(),t.TgZ(77,"th"),t._uU(78,"Status"),t.qZA(),t.TgZ(79,"th"),t._uU(80,"Action"),t.qZA()()(),t.TgZ(81,"tbody"),t.YNc(82,r,23,11,"tr",41),t.qZA()()()()()),2&i&&(t.xp6(47),t.Q6J("ngModel",o.date),t.xp6(13),t.Q6J("dtOptions",o.dtOptions),t.xp6(5),t.Q6J("ngModel",o.initChecked),t.xp6(17),t.Q6J("ngForOf",o.tableData))},dependencies:[u.mk,u.sg,T.yS,a.G,e.YN,e.Kr,e.Wl,e.JJ,e.On,d.QB]}),n})();const f=[{path:"",component:p}];let h=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[T.Bz.forChild(f),T.Bz]}),n})(),m=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n,bootstrap:[p]}),n.\u0275inj=t.cJS({imports:[u.ez,h,a.T,e.u5,d.ZU]}),n})()},5415:(C,b,c)=>{c.d(b,{G:()=>y,T:()=>t});var u=c(4650),y=function(){function s(a,e,d){this.el=a,this.vcr=e,this.renderer=d,this.dtOptions={}}return s.prototype.ngOnInit=function(){var a=this;this.dtTrigger?this.dtTrigger.subscribe(function(e){a.displayTable(e)}):this.displayTable(null)},s.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},s.prototype.displayTable=function(a){var e=this;a&&(this.dtOptions=a),this.dtInstance=new Promise(function(d,g){Promise.resolve(e.dtOptions).then(function(r){0===Object.keys(r).length&&0===$("tbody tr",e.el.nativeElement).length?g("Both the table and dtOptions cannot be empty"):setTimeout(function(){var f={rowCallback:function(h,m,n){if(r.columns){var l=r.columns;e.applyNgPipeTransform(h,l),e.applyNgRefTemplate(h,l,m)}r.rowCallback&&r.rowCallback(h,m,n)}};f=Object.assign({},r,f),e.dt=$(e.el.nativeElement).DataTable(f),d(e.dt)})})})},s.prototype.applyNgPipeTransform=function(a,e){e.filter(function(g){return g.ngPipeInstance&&!g.ngTemplateRef}).forEach(function(g){var r=g.ngPipeInstance,p=g.ngPipeArgs||[],f=e.findIndex(function(l){return l.data===g.data}),h=a.childNodes.item(f),m=$(h).text(),n=r.transform.apply(r,function(s,a,e){if(e||2===arguments.length)for(var r,d=0,g=a.length;d<g;d++)(r||!(d in a))&&(r||(r=Array.prototype.slice.call(a,0,d)),r[d]=a[d]);return s.concat(r||Array.prototype.slice.call(a))}([m],p,!1));$(h).text(n)})},s.prototype.applyNgRefTemplate=function(a,e,d){var g=this;e.filter(function(p){return p.ngTemplateRef&&!p.ngPipeInstance}).forEach(function(p){var f=p.ngTemplateRef,h=f.ref,m=f.context,n=e.findIndex(function(v){return v.data===p.data}),l=a.childNodes.item(n);$(l).html("");var i=Object.assign({},m,m?.userData,{adtData:d}),o=g.vcr.createEmbeddedView(h,i);g.renderer.appendChild(l,o.rootNodes[0])})},s.\u0275fac=function(e){return new(e||s)(u.Y36(u.SBq),u.Y36(u.s_b),u.Y36(u.Qsj))},s.\u0275dir=u.lG2({type:s,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),s}(),U=c(6895),t=function(){function s(){}return s.forRoot=function(){return{ngModule:s}},s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=u.oAB({type:s}),s.\u0275inj=u.cJS({imports:[U.ez]}),s}()}}]);