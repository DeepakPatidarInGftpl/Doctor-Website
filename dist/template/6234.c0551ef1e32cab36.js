"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6234],{26234:(y,h,p)=>{p.r(h),p.d(h,{InvoicereportModule:()=>v});var g=p(36895),Z=p(88996),t=p(94650),b=p(72326),T=p(65415),i=p(24006),r=p(30906);const o=function(n,s,e){return{"bg-lightgreen":n,"bg-lightred":s,"bg-lightgrey":e}};function d(n,s){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",37)(3,"input",34),t.NdJ("ngModelChange",function(f){const A=t.CHM(e).$implicit;return t.KtG(A.isSelected=f)}),t.qZA(),t._UZ(4,"span",35),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td")(18,"span",38),t._uU(19),t.qZA()()()}if(2&n){const e=s.$implicit;t.xp6(3),t.Q6J("ngModel",e.isSelected),t.xp6(3),t.Oqu(e.Invoicenumber),t.xp6(2),t.Oqu(e.Customername),t.xp6(2),t.Oqu(e.Duedate),t.xp6(2),t.Oqu(e.Amount),t.xp6(2),t.Oqu(e.Paid),t.xp6(2),t.Oqu(e.Amountdue),t.xp6(2),t.Q6J("ngClass",t.kEZ(9,o,"Paid"===e.Status,"Overdue"===e.Status,"Unpaid"===e.Status)),t.xp6(1),t.Oqu(e.Status)}}let c=(()=>{class n{constructor(e){this.QueryService=e,this.dtOptions={},this.initChecked=!1,this.tableData=[],this.date=new Date,this.QueryService.filterToggle(),this.tableData=this.QueryService.invoiceReport}ngOnInit(){this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(e,a)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}}}selectAll(e){this.tableData.forEach(e?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(b._))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-invoicereport"]],decls:70,vars:5,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],[1,"input-groupicon"],[3,"ngModel","ngModelChange"],[1,"addonset"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[4,"ngFor","ngForOf"],[1,"checkboxs"],[1,"badges",3,"ngClass"]],template:function(e,a){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Invoice Report"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Invoice Report"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"a",7),t._UZ(12,"img",8),t.TgZ(13,"span"),t._UZ(14,"img",9),t.qZA()()(),t.TgZ(15,"div",10)(16,"a",11),t._UZ(17,"img",12),t.qZA()()(),t.TgZ(18,"div",13)(19,"ul")(20,"li")(21,"a",14),t._UZ(22,"img",15),t.qZA()(),t.TgZ(23,"li")(24,"a",16),t._UZ(25,"img",17),t.qZA()(),t.TgZ(26,"li")(27,"a",18),t._UZ(28,"img",19),t.qZA()()()()(),t.TgZ(29,"div",20)(30,"div",21)(31,"div",22)(32,"div",23)(33,"div",24)(34,"div",25)(35,"ngx-datepicker",26),t.NdJ("ngModelChange",function(m){return a.date=m}),t.qZA(),t._UZ(36,"div",27),t.qZA()()(),t.TgZ(37,"div",23)(38,"div",24)(39,"div",25)(40,"ngx-datepicker",26),t.NdJ("ngModelChange",function(m){return a.date=m}),t.qZA(),t._UZ(41,"div",27),t.qZA()()(),t.TgZ(42,"div",28)(43,"div",24)(44,"a",29),t._UZ(45,"img",30),t.qZA()()()()()(),t.TgZ(46,"div",31)(47,"table",32)(48,"thead")(49,"tr")(50,"th")(51,"label",33),t.NdJ("click",function(){return a.selectAll(a.initChecked)}),t.TgZ(52,"input",34),t.NdJ("ngModelChange",function(m){return a.initChecked=m}),t.qZA(),t._UZ(53,"span",35),t.qZA()(),t.TgZ(54,"th"),t._uU(55,"Invoice number\t"),t.qZA(),t.TgZ(56,"th"),t._uU(57,"Customer name "),t.qZA(),t.TgZ(58,"th"),t._uU(59,"Due date"),t.qZA(),t.TgZ(60,"th"),t._uU(61,"Amount"),t.qZA(),t.TgZ(62,"th"),t._uU(63,"Paid"),t.qZA(),t.TgZ(64,"th"),t._uU(65,"Amount due"),t.qZA(),t.TgZ(66,"th"),t._uU(67,"Status"),t.qZA()()(),t.TgZ(68,"tbody"),t.YNc(69,d,20,13,"tr",36),t.qZA()()()()()),2&e&&(t.xp6(35),t.Q6J("ngModel",a.date),t.xp6(5),t.Q6J("ngModel",a.date),t.xp6(7),t.Q6J("dtOptions",a.dtOptions),t.xp6(5),t.Q6J("ngModel",a.initChecked),t.xp6(17),t.Q6J("ngForOf",a.tableData))},dependencies:[g.mk,g.sg,T.G,i.Wl,i.JJ,i.On,r.QB]}),n})();const l=[{path:"",component:c}];let u=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[Z.Bz.forChild(l),Z.Bz]}),n})(),v=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n,bootstrap:[c]}),n.\u0275inj=t.cJS({imports:[g.ez,u,T.T,i.u5,r.ZU]}),n})()},65415:(y,h,p)=>{p.d(h,{G:()=>t,T:()=>T});var g=p(94650),t=function(){function i(r,o,d){this.el=r,this.vcr=o,this.renderer=d,this.dtOptions={}}return i.prototype.ngOnInit=function(){var r=this;this.dtTrigger?this.dtTrigger.subscribe(function(o){r.displayTable(o)}):this.displayTable(null)},i.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},i.prototype.displayTable=function(r){var o=this;r&&(this.dtOptions=r),this.dtInstance=new Promise(function(d,c){Promise.resolve(o.dtOptions).then(function(l){0===Object.keys(l).length&&0===$("tbody tr",o.el.nativeElement).length?c("Both the table and dtOptions cannot be empty"):setTimeout(function(){var v={rowCallback:function(n,s,e){if(l.columns){var a=l.columns;o.applyNgPipeTransform(n,a),o.applyNgRefTemplate(n,a,s)}l.rowCallback&&l.rowCallback(n,s,e)}};v=Object.assign({},l,v),o.dt=$(o.el.nativeElement).DataTable(v),d(o.dt)})})})},i.prototype.applyNgPipeTransform=function(r,o){o.filter(function(c){return c.ngPipeInstance&&!c.ngTemplateRef}).forEach(function(c){var l=c.ngPipeInstance,u=c.ngPipeArgs||[],v=o.findIndex(function(a){return a.data===c.data}),n=r.childNodes.item(v),s=$(n).text(),e=l.transform.apply(l,function(i,r,o){if(o||2===arguments.length)for(var l,d=0,c=r.length;d<c;d++)(l||!(d in r))&&(l||(l=Array.prototype.slice.call(r,0,d)),l[d]=r[d]);return i.concat(l||Array.prototype.slice.call(r))}([s],u,!1));$(n).text(e)})},i.prototype.applyNgRefTemplate=function(r,o,d){var c=this;o.filter(function(u){return u.ngTemplateRef&&!u.ngPipeInstance}).forEach(function(u){var v=u.ngTemplateRef,n=v.ref,s=v.context,e=o.findIndex(function(A){return A.data===u.data}),a=r.childNodes.item(e);$(a).html("");var f=Object.assign({},s,s?.userData,{adtData:d}),m=c.vcr.createEmbeddedView(n,f);c.renderer.appendChild(a,m.rootNodes[0])})},i.\u0275fac=function(o){return new(o||i)(g.Y36(g.SBq),g.Y36(g.s_b),g.Y36(g.Qsj))},i.\u0275dir=g.lG2({type:i,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),i}(),b=p(36895),T=function(){function i(){}return i.forRoot=function(){return{ngModule:i}},i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=g.oAB({type:i}),i.\u0275inj=g.cJS({imports:[b.ez]}),i}()}}]);