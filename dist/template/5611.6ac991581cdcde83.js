"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5611],{75611:(T,_,a)=>{a.r(_),a.d(_,{CurrencysettingsModule:()=>g});var u=a(36895),Z=a(88996),h=a(2454),d=a.n(h),t=a(94650),i=a(72326),s=a(87078),o=a(24006);function l(e,c){if(1&e){const n=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",48)(3,"input",22),t.NdJ("ngModelChange",function(v){const b=t.CHM(n).$implicit;return t.KtG(b.isSelected=v)}),t.qZA(),t._UZ(4,"span",23),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td")(12,"div",49)(13,"input",50),t.NdJ("ngModelChange",function(v){const b=t.CHM(n).$implicit;return t.KtG(b.isStatus=v)}),t.qZA(),t.TgZ(14,"label",51),t._uU(15,"checkbox"),t.qZA()()(),t.TgZ(16,"td",24)(17,"a",52),t._UZ(18,"img",53),t.qZA(),t.TgZ(19,"a",54),t.NdJ("click",function(){const y=t.CHM(n).index,b=t.oxw();return t.KtG(b.confirmText(y))}),t._UZ(20,"img",55),t.qZA()()()}if(2&e){const n=c.$implicit,r=c.index;t.xp6(3),t.Q6J("ngModel",n.isSelected),t.xp6(3),t.Oqu(n.Currencyname),t.xp6(2),t.Oqu(n.Currencycode),t.xp6(2),t.Oqu(n.Currencysymbol),t.xp6(3),t.s9C("id",r+"-Div"),t.Q6J("ngModel",n.isStatus),t.xp6(1),t.s9C("for",r+"-Div")}}const m=[{path:"",component:(()=>{class e{constructor(n){this.QueryService=n,this.dtOptions={},this.initChecked=!1,this.tableData=[],this.QueryService.filterToggle(),this.tableData=this.QueryService.currencySettings}confirmText(n){d().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(r=>{r.isConfirmed&&(d().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(n,1))})}ngOnInit(){this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(n,r)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}}}selectAll(n){this.tableData.forEach(n?r=>{r.isSelected=!1}:r=>{r.isSelected=!0})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(i._))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-currencysettings"]],decls:138,vars:3,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["data-bs-toggle","modal","data-bs-target","#addpayment",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[1,"text-end"],[4,"ngFor","ngForOf"],["id","addpayment","tabindex","-1","role","dialog","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","data-bs-dismiss","modal","aria-label","Close",1,"close"],["aria-hidden","true"],[1,"modal-body"],[1,"row"],[1,"col-12"],[1,"form-group"],[1,"manitory"],["type","text"],[1,"form-group","mb-0"],[1,"form-select"],[1,"modal-footer"],["type","button",1,"btn","btn-submit"],["type","button","data-bs-dismiss","modal",1,"btn","btn-cancel"],["id","editpayment","tabindex","-1","role","dialog","aria-hidden","true",1,"modal","fade"],["type","text","placeholder","India - Indian rupee"],["type","text","placeholder","INR"],["type","text","placeholder","\u20b9"],[1,"checkboxs"],[1,"status-toggle","d-flex","justify-content-between","align-items-center"],["type","checkbox",1,"check",3,"id","ngModel","ngModelChange"],[1,"checktoggle",3,"for"],["href","javascript:void(0);","data-bs-toggle","modal","data-bs-target","#editpayment",1,"me-3"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Currency Settings"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage Currency Settings"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add New Currency"),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.qZA()()(),t.TgZ(17,"div",12)(18,"ul")(19,"li")(20,"a",13),t._UZ(21,"img",14),t.qZA()(),t.TgZ(22,"li")(23,"a",15),t._UZ(24,"img",16),t.qZA()(),t.TgZ(25,"li")(26,"a",17),t._UZ(27,"img",18),t.qZA()()()()(),t.TgZ(28,"div",19)(29,"table",20)(30,"thead")(31,"tr")(32,"th")(33,"label",21),t.NdJ("click",function(){return r.selectAll(r.initChecked)}),t.TgZ(34,"input",22),t.NdJ("ngModelChange",function(y){return r.initChecked=y}),t.qZA(),t._UZ(35,"span",23),t.qZA()(),t.TgZ(36,"th"),t._uU(37,"Currency name"),t.qZA(),t.TgZ(38,"th"),t._uU(39,"Currency code"),t.qZA(),t.TgZ(40,"th"),t._uU(41,"Currency symbol"),t.qZA(),t.TgZ(42,"th"),t._uU(43,"Status"),t.qZA(),t.TgZ(44,"th",24),t._uU(45,"Action"),t.qZA()()(),t.TgZ(46,"tbody"),t.YNc(47,l,21,7,"tr",25),t.qZA()()()()(),t.TgZ(48,"div",26)(49,"div",27)(50,"div",28)(51,"div",29)(52,"h5",30),t._uU(53,"Add Currency "),t.qZA(),t.TgZ(54,"button",31)(55,"span",32),t._uU(56,"\xd7"),t.qZA()()(),t.TgZ(57,"div",33)(58,"div",34)(59,"div",35)(60,"div",36)(61,"label"),t._uU(62,"Currency Name"),t.TgZ(63,"span",37),t._uU(64,"*"),t.qZA()(),t._UZ(65,"input",38),t.qZA()(),t.TgZ(66,"div",35)(67,"div",36)(68,"label"),t._uU(69,"Currency Code"),t.qZA(),t._UZ(70,"input",38),t.qZA()(),t.TgZ(71,"div",35)(72,"div",36)(73,"label"),t._uU(74,"Currency Symbol"),t.TgZ(75,"span",37),t._uU(76,"*"),t.qZA()(),t._UZ(77,"input",38),t.qZA()(),t.TgZ(78,"div",35)(79,"div",39)(80,"label"),t._uU(81,"Status"),t.qZA(),t.TgZ(82,"select",40)(83,"option"),t._uU(84,"Choose Status"),t.qZA(),t.TgZ(85,"option"),t._uU(86," Active"),t.qZA(),t.TgZ(87,"option"),t._uU(88," InActive"),t.qZA()()()()()(),t.TgZ(89,"div",41)(90,"button",42),t._uU(91,"Confirm"),t.qZA(),t.TgZ(92,"button",43),t._uU(93,"Cancel"),t.qZA()()()()(),t.TgZ(94,"div",44)(95,"div",27)(96,"div",28)(97,"div",29)(98,"h5",30),t._uU(99,"Edit Currency"),t.qZA(),t.TgZ(100,"button",31)(101,"span",32),t._uU(102,"\xd7"),t.qZA()()(),t.TgZ(103,"div",33)(104,"div",34)(105,"div",35)(106,"div",36)(107,"label"),t._uU(108,"Currency Name"),t.TgZ(109,"span",37),t._uU(110,"*"),t.qZA()(),t._UZ(111,"input",45),t.qZA()(),t.TgZ(112,"div",35)(113,"div",36)(114,"label"),t._uU(115,"Currency Code"),t.qZA(),t._UZ(116,"input",46),t.qZA()(),t.TgZ(117,"div",35)(118,"div",36)(119,"label"),t._uU(120,"Currency Symbol"),t.TgZ(121,"span",37),t._uU(122,"*"),t.qZA()(),t._UZ(123,"input",47),t.qZA()(),t.TgZ(124,"div",35)(125,"div",39)(126,"label"),t._uU(127,"Status"),t.qZA(),t.TgZ(128,"select",40)(129,"option"),t._uU(130," Active"),t.qZA(),t.TgZ(131,"option"),t._uU(132," InActive"),t.qZA()()()()()(),t.TgZ(133,"div",41)(134,"button",42),t._uU(135,"Update"),t.qZA(),t.TgZ(136,"button",43),t._uU(137,"Cancel"),t.qZA()()()()()),2&n&&(t.xp6(29),t.Q6J("dtOptions",r.dtOptions),t.xp6(5),t.Q6J("ngModel",r.initChecked),t.xp6(13),t.Q6J("ngForOf",r.tableData))},dependencies:[u.sg,s.G,o.YN,o.Kr,o.Wl,o.JJ,o.On]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[Z.Bz.forChild(m),Z.Bz]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[u.ez,f,s.T,o.u5]}),e})()},87078:(T,_,a)=>{a.d(_,{G:()=>u.G,T:()=>Z.T});var u=a(10008),Z=a(33861)},10008:(T,_,a)=>{a.d(_,{G:()=>h});var u=a(94650),h=function(){function d(t,i,s){this.el=t,this.vcr=i,this.renderer=s,this.dtOptions={}}return d.prototype.ngOnInit=function(){var t=this;this.dtTrigger?this.dtTrigger.subscribe(function(i){t.displayTable(i)}):this.displayTable(null)},d.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},d.prototype.displayTable=function(t){var i=this;t&&(this.dtOptions=t),this.dtInstance=new Promise(function(s,o){Promise.resolve(i.dtOptions).then(function(l){0===Object.keys(l).length&&0===$("tbody tr",i.el.nativeElement).length?o("Both the table and dtOptions cannot be empty"):setTimeout(function(){var m={rowCallback:function(f,g,e){if(l.columns){var c=l.columns;i.applyNgPipeTransform(f,c),i.applyNgRefTemplate(f,c,g)}l.rowCallback&&l.rowCallback(f,g,e)}};m=Object.assign({},l,m),i.dt=$(i.el.nativeElement).DataTable(m),s(i.dt)})})})},d.prototype.applyNgPipeTransform=function(t,i){i.filter(function(o){return o.ngPipeInstance&&!o.ngTemplateRef}).forEach(function(o){var l=o.ngPipeInstance,p=o.ngPipeArgs||[],m=i.findIndex(function(c){return c.data===o.data}),f=t.childNodes.item(m),g=$(f).text(),e=l.transform.apply(l,function(d,t,i){if(i||2===arguments.length)for(var l,s=0,o=t.length;s<o;s++)(l||!(s in t))&&(l||(l=Array.prototype.slice.call(t,0,s)),l[s]=t[s]);return d.concat(l||Array.prototype.slice.call(t))}([g],p,!1));$(f).text(e)})},d.prototype.applyNgRefTemplate=function(t,i,s){var o=this;i.filter(function(p){return p.ngTemplateRef&&!p.ngPipeInstance}).forEach(function(p){var m=p.ngTemplateRef,f=m.ref,g=m.context,e=i.findIndex(function(v){return v.data===p.data}),c=t.childNodes.item(e);$(c).html("");var n=Object.assign({},g,g?.userData,{adtData:s}),r=o.vcr.createEmbeddedView(f,n);o.renderer.appendChild(c,r.rootNodes[0])})},d.\u0275fac=function(i){return new(i||d)(u.Y36(u.SBq),u.Y36(u.s_b),u.Y36(u.Qsj))},d.\u0275dir=u.lG2({type:d,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),d}()},33861:(T,_,a)=>{a.d(_,{T:()=>d});var u=a(36895),h=(a(10008),a(94650)),d=function(){function t(){}return t.forRoot=function(){return{ngModule:t}},t.\u0275fac=function(s){return new(s||t)},t.\u0275mod=h.oAB({type:t}),t.\u0275inj=h.cJS({imports:[u.ez]}),t}()}}]);