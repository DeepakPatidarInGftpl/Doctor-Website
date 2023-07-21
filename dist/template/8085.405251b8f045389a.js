"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8085],{8085:(A,y,c)=>{c.r(y),c.d(y,{PaymentsettingsModule:()=>m});var u=c(6895),b=c(8996),T=c(2454),Z=c.n(T),t=c(4650),o=c(2326),s=c(5415),a=c(4006);function d(e,l){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",45)(3,"input",22),t.NdJ("ngModelChange",function(f){const v=t.CHM(n).$implicit;return t.KtG(v.isSelected=f)}),t.qZA(),t._UZ(4,"span",23),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td")(8,"div",46)(9,"input",47),t.NdJ("ngModelChange",function(f){const v=t.CHM(n).$implicit;return t.KtG(v.isStatus=f)}),t.qZA(),t.TgZ(10,"label",48),t._uU(11,"checkbox"),t.qZA()()(),t.TgZ(12,"td",24)(13,"a",49),t._UZ(14,"img",50),t.qZA(),t.TgZ(15,"a",51),t.NdJ("click",function(){const h=t.CHM(n).index,v=t.oxw();return t.KtG(v.confirmText(h))}),t._UZ(16,"img",52),t.qZA()()()}if(2&e){const n=l.$implicit;t.xp6(3),t.Q6J("ngModel",n.isSelected),t.xp6(3),t.Oqu(n.PaymentTypeName),t.xp6(3),t.s9C("id",n.PaymentTypeName+"-Div"),t.Q6J("ngModel",n.isStatus),t.xp6(1),t.s9C("for",n.PaymentTypeName+"-Div")}}const r=[{path:"",component:(()=>{class e{constructor(n){this.QueryService=n,this.dtOptions={},this.initChecked=!1,this.tableData=[],this.QueryService.filterToggle(),this.tableData=this.QueryService.paymentSettings}confirmText(n){Z().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(Z().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(n,1))})}ngOnInit(){this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(n,i)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}}}selectAll(n){this.tableData.forEach(n?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(o._))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-paymentsettings"]],decls:106,vars:3,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["data-bs-toggle","modal","data-bs-target","#addpayment",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-2"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[1,"text-end"],[4,"ngFor","ngForOf"],["id","addpayment","tabindex","-1","role","dialog","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[1,"col-12"],[1,"form-group"],["type","text"],[1,"form-group","mb-0"],[1,"form-select"],[1,"modal-footer"],["type","button",1,"btn","btn-submit"],["type","button","data-bs-dismiss","modal",1,"btn","btn-cancel"],["id","editpayment","tabindex","-1","role","dialog","aria-hidden","true",1,"modal","fade"],["type","text","value","Cash"],[1,"checkboxs"],[1,"status-toggle","d-flex","justify-content-between","align-items-center"],["type","checkbox",1,"check",3,"id","ngModel","ngModelChange"],[1,"checktoggle",3,"for"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#editpayment",1,"me-3"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(n,i){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Payment Settings"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage Payment Settings"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add Payment Settings"),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.qZA()()(),t.TgZ(17,"div",12)(18,"ul")(19,"li")(20,"a",13),t._UZ(21,"img",14),t.qZA()(),t.TgZ(22,"li")(23,"a",15),t._UZ(24,"img",16),t.qZA()(),t.TgZ(25,"li")(26,"a",17),t._UZ(27,"img",18),t.qZA()()()()(),t.TgZ(28,"div",19)(29,"table",20)(30,"thead")(31,"tr")(32,"th")(33,"label",21),t.NdJ("click",function(){return i.selectAll(i.initChecked)}),t.TgZ(34,"input",22),t.NdJ("ngModelChange",function(h){return i.initChecked=h}),t.qZA(),t._UZ(35,"span",23),t.qZA()(),t.TgZ(36,"th"),t._uU(37,"Payment Type Name"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"Status"),t.qZA(),t.TgZ(40,"th",24),t._uU(41,"Action"),t.qZA()()(),t.TgZ(42,"tbody"),t.YNc(43,d,17,5,"tr",25),t.qZA()()()()(),t.TgZ(44,"div",26)(45,"div",27)(46,"div",28)(47,"div",29)(48,"h5",30),t._uU(49,"Add payment type"),t.qZA(),t.TgZ(50,"button",31)(51,"span",32),t._uU(52,"\xd7"),t.qZA()()(),t.TgZ(53,"div",33)(54,"div",34)(55,"div",35)(56,"div",36)(57,"label"),t._uU(58,"Payment Name"),t.qZA(),t._UZ(59,"input",37),t.qZA()(),t.TgZ(60,"div",35)(61,"div",38)(62,"label"),t._uU(63,"Status"),t.qZA(),t.TgZ(64,"select",39)(65,"option"),t._uU(66,"Choose Status"),t.qZA(),t.TgZ(67,"option"),t._uU(68," Active"),t.qZA(),t.TgZ(69,"option"),t._uU(70," InActive"),t.qZA()()()()()(),t.TgZ(71,"div",40)(72,"button",41),t._uU(73,"Confirm"),t.qZA(),t.TgZ(74,"button",42),t._uU(75,"Cancel"),t.qZA()()()()(),t.TgZ(76,"div",43)(77,"div",27)(78,"div",28)(79,"div",29)(80,"h5",30),t._uU(81,"Edit payment type"),t.qZA(),t.TgZ(82,"button",31)(83,"span",32),t._uU(84,"\xd7"),t.qZA()()(),t.TgZ(85,"div",33)(86,"div",34)(87,"div",35)(88,"div",36)(89,"label"),t._uU(90,"Payment Name"),t.qZA(),t._UZ(91,"input",44),t.qZA()(),t.TgZ(92,"div",35)(93,"div",38)(94,"label"),t._uU(95,"Status"),t.qZA(),t.TgZ(96,"select",39)(97,"option"),t._uU(98," Active"),t.qZA(),t.TgZ(99,"option"),t._uU(100," InActive"),t.qZA()()()()()(),t.TgZ(101,"div",40)(102,"button",41),t._uU(103,"Update"),t.qZA(),t.TgZ(104,"button",42),t._uU(105,"Cancel"),t.qZA()()()()()),2&n&&(t.xp6(29),t.Q6J("dtOptions",i.dtOptions),t.xp6(5),t.Q6J("ngModel",i.initChecked),t.xp6(9),t.Q6J("ngForOf",i.tableData))},dependencies:[u.sg,s.G,a.YN,a.Kr,a.Wl,a.JJ,a.On]}),e})()}];let p=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[b.Bz.forChild(r),b.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,p,s.T,a.u5]}),e})()},5415:(A,y,c)=>{c.d(y,{G:()=>T,T:()=>t});var u=c(4650),T=function(){function o(s,a,d){this.el=s,this.vcr=a,this.renderer=d,this.dtOptions={}}return o.prototype.ngOnInit=function(){var s=this;this.dtTrigger?this.dtTrigger.subscribe(function(a){s.displayTable(a)}):this.displayTable(null)},o.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},o.prototype.displayTable=function(s){var a=this;s&&(this.dtOptions=s),this.dtInstance=new Promise(function(d,g){Promise.resolve(a.dtOptions).then(function(r){0===Object.keys(r).length&&0===$("tbody tr",a.el.nativeElement).length?g("Both the table and dtOptions cannot be empty"):setTimeout(function(){var m={rowCallback:function(e,l,n){if(r.columns){var i=r.columns;a.applyNgPipeTransform(e,i),a.applyNgRefTemplate(e,i,l)}r.rowCallback&&r.rowCallback(e,l,n)}};m=Object.assign({},r,m),a.dt=$(a.el.nativeElement).DataTable(m),d(a.dt)})})})},o.prototype.applyNgPipeTransform=function(s,a){a.filter(function(g){return g.ngPipeInstance&&!g.ngTemplateRef}).forEach(function(g){var r=g.ngPipeInstance,p=g.ngPipeArgs||[],m=a.findIndex(function(i){return i.data===g.data}),e=s.childNodes.item(m),l=$(e).text(),n=r.transform.apply(r,function(o,s,a){if(a||2===arguments.length)for(var r,d=0,g=s.length;d<g;d++)(r||!(d in s))&&(r||(r=Array.prototype.slice.call(s,0,d)),r[d]=s[d]);return o.concat(r||Array.prototype.slice.call(s))}([l],p,!1));$(e).text(n)})},o.prototype.applyNgRefTemplate=function(s,a,d){var g=this;a.filter(function(p){return p.ngTemplateRef&&!p.ngPipeInstance}).forEach(function(p){var m=p.ngTemplateRef,e=m.ref,l=m.context,n=a.findIndex(function(v){return v.data===p.data}),i=s.childNodes.item(n);$(i).html("");var f=Object.assign({},l,l?.userData,{adtData:d}),h=g.vcr.createEmbeddedView(e,f);g.renderer.appendChild(i,h.rootNodes[0])})},o.\u0275fac=function(a){return new(a||o)(u.Y36(u.SBq),u.Y36(u.s_b),u.Y36(u.Qsj))},o.\u0275dir=u.lG2({type:o,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),o}(),Z=c(6895),t=function(){function o(){}return o.forRoot=function(){return{ngModule:o}},o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({imports:[Z.ez]}),o}()}}]);