"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2803],{32803:(y,m,p)=>{p.r(m),p.d(m,{PurchasereportModule:()=>h});var g=p(36895),v=p(88996),e=p(94650),Z=p(72326),T=p(65415),a=p(24006),o=p(30906);function r(n,l){if(1&n){const t=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",38)(3,"input",35),e.NdJ("ngModelChange",function(u){const b=e.CHM(t).$implicit;return e.KtG(b.isSelected=u)}),e.qZA(),e._UZ(4,"span",36),e.qZA()(),e.TgZ(5,"td",39)(6,"a",40),e._UZ(7,"img",41),e.qZA(),e.TgZ(8,"a",42),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA()()}if(2&n){const t=l.$implicit;e.xp6(3),e.Q6J("ngModel",t.isSelected),e.xp6(4),e.Q6J("src",t.img,e.LSH),e.xp6(2),e.Oqu(t.ProductName),e.xp6(2),e.Oqu(t.Purchasedamount),e.xp6(2),e.Oqu(t.PurchasedQTY),e.xp6(2),e.Oqu(t.InstockQTY)}}let c=(()=>{class n{constructor(t){this.QueryService=t,this.dtOptions={},this.initChecked=!1,this.tableData=[],this.date=new Date,this.QueryService.filterToggle(),this.tableData=this.QueryService.purchaseReport}ngOnInit(){this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(t,i)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}}}selectAll(t){this.tableData.forEach(t?i=>{i.isSelected=!1}:i=>{i.isSelected=!0})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(Z._))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-purchasereport"]],decls:71,vars:5,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],[1,"input-groupicon"],[3,"ngModel","ngModelChange"],[1,"addonset"],[1,"form-select"],[1,"col-lg-1","col-sm-6","col-12","ms-auto"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[4,"ngFor","ngForOf"],[1,"checkboxs"],[1,"productimgname"],[1,"product-img"],["alt","product",3,"src"],["href","javascript:void(0);"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Purchase Report"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your Purchase Report"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"a",7),e._UZ(12,"img",8),e.TgZ(13,"span"),e._UZ(14,"img",9),e.qZA()()(),e.TgZ(15,"div",10)(16,"a",11),e._UZ(17,"img",12),e.qZA()()(),e.TgZ(18,"div",13)(19,"ul")(20,"li")(21,"a",14),e._UZ(22,"img",15),e.qZA()(),e.TgZ(23,"li")(24,"a",16),e._UZ(25,"img",17),e.qZA()(),e.TgZ(26,"li")(27,"a",18),e._UZ(28,"img",19),e.qZA()()()()(),e.TgZ(29,"div",20)(30,"div",21)(31,"div",22)(32,"div",23)(33,"div",24)(34,"div",25)(35,"ngx-datepicker",26),e.NdJ("ngModelChange",function(f){return i.date=f}),e.qZA(),e._UZ(36,"div",27),e.qZA()()(),e.TgZ(37,"div",23)(38,"div",24)(39,"div",25)(40,"ngx-datepicker",26),e.NdJ("ngModelChange",function(f){return i.date=f}),e.qZA(),e._UZ(41,"div",27),e.qZA()()(),e.TgZ(42,"div",23)(43,"div",24)(44,"select",28)(45,"option"),e._uU(46,"Choose Suppliers"),e.qZA(),e.TgZ(47,"option"),e._uU(48,"Suppliers"),e.qZA()()()(),e.TgZ(49,"div",29)(50,"div",24)(51,"a",30),e._UZ(52,"img",31),e.qZA()()()()()(),e.TgZ(53,"div",32)(54,"table",33)(55,"thead")(56,"tr")(57,"th")(58,"label",34),e.NdJ("click",function(){return i.selectAll(i.initChecked)}),e.TgZ(59,"input",35),e.NdJ("ngModelChange",function(f){return i.initChecked=f}),e.qZA(),e._UZ(60,"span",36),e.qZA()(),e.TgZ(61,"th"),e._uU(62,"Product Name"),e.qZA(),e.TgZ(63,"th"),e._uU(64,"Purchased amount"),e.qZA(),e.TgZ(65,"th"),e._uU(66,"Purchased QTY"),e.qZA(),e.TgZ(67,"th"),e._uU(68,"Instock qty"),e.qZA()()(),e.TgZ(69,"tbody"),e.YNc(70,r,16,6,"tr",37),e.qZA()()()()()),2&t&&(e.xp6(35),e.Q6J("ngModel",i.date),e.xp6(5),e.Q6J("ngModel",i.date),e.xp6(14),e.Q6J("dtOptions",i.dtOptions),e.xp6(5),e.Q6J("ngModel",i.initChecked),e.xp6(11),e.Q6J("ngForOf",i.tableData))},dependencies:[g.sg,T.G,a.YN,a.Kr,a.Wl,a.JJ,a.On,o.QB]}),n})();const d=[{path:"",component:c}];let s=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[v.Bz.forChild(d),v.Bz]}),n})(),h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n,bootstrap:[c]}),n.\u0275inj=e.cJS({imports:[g.ez,s,T.T,a.u5,o.ZU]}),n})()},65415:(y,m,p)=>{p.d(m,{G:()=>e,T:()=>T});var g=p(94650),e=function(){function a(o,r,c){this.el=o,this.vcr=r,this.renderer=c,this.dtOptions={}}return a.prototype.ngOnInit=function(){var o=this;this.dtTrigger?this.dtTrigger.subscribe(function(r){o.displayTable(r)}):this.displayTable(null)},a.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},a.prototype.displayTable=function(o){var r=this;o&&(this.dtOptions=o),this.dtInstance=new Promise(function(c,d){Promise.resolve(r.dtOptions).then(function(s){0===Object.keys(s).length&&0===$("tbody tr",r.el.nativeElement).length?d("Both the table and dtOptions cannot be empty"):setTimeout(function(){var n={rowCallback:function(l,t,i){if(s.columns){var u=s.columns;r.applyNgPipeTransform(l,u),r.applyNgRefTemplate(l,u,t)}s.rowCallback&&s.rowCallback(l,t,i)}};n=Object.assign({},s,n),r.dt=$(r.el.nativeElement).DataTable(n),c(r.dt)})})})},a.prototype.applyNgPipeTransform=function(o,r){r.filter(function(d){return d.ngPipeInstance&&!d.ngTemplateRef}).forEach(function(d){var s=d.ngPipeInstance,h=d.ngPipeArgs||[],n=r.findIndex(function(u){return u.data===d.data}),l=o.childNodes.item(n),t=$(l).text(),i=s.transform.apply(s,function(a,o,r){if(r||2===arguments.length)for(var s,c=0,d=o.length;c<d;c++)(s||!(c in o))&&(s||(s=Array.prototype.slice.call(o,0,c)),s[c]=o[c]);return a.concat(s||Array.prototype.slice.call(o))}([t],h,!1));$(l).text(i)})},a.prototype.applyNgRefTemplate=function(o,r,c){var d=this;r.filter(function(h){return h.ngTemplateRef&&!h.ngPipeInstance}).forEach(function(h){var n=h.ngTemplateRef,l=n.ref,t=n.context,i=r.findIndex(function(A){return A.data===h.data}),u=o.childNodes.item(i);$(u).html("");var f=Object.assign({},t,t?.userData,{adtData:c}),b=d.vcr.createEmbeddedView(l,f);d.renderer.appendChild(u,b.rootNodes[0])})},a.\u0275fac=function(r){return new(r||a)(g.Y36(g.SBq),g.Y36(g.s_b),g.Y36(g.Qsj))},a.\u0275dir=g.lG2({type:a,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),a}(),Z=p(36895),T=function(){function a(){}return a.forRoot=function(){return{ngModule:a}},a.\u0275fac=function(r){return new(r||a)},a.\u0275mod=g.oAB({type:a}),a.\u0275inj=g.cJS({imports:[Z.ez]}),a}()}}]);