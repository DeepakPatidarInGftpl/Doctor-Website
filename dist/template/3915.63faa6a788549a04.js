"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3915],{73915:(y,v,s)=>{s.r(v),s.d(v,{SalesreturnlistsModule:()=>C});var c=s(36895),_=s(30906),Z=s(4392),l=s(2454),n=s.n(l),t=s(94650),r=s(72326),d=s(87078),i=s(24006);const u=function(a,g,e){return{"bg-lightgreen":a,"bg-lightred":g,"bg-lightyellow":e}};function f(a,g){if(1&a){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",39)(3,"input",36),t.NdJ("ngModelChange",function(A){const S=t.CHM(e).$implicit;return t.KtG(S.isSelected=A)}),t.qZA(),t._UZ(4,"span",37),t.qZA()(),t.TgZ(5,"td",40)(6,"a",41),t._UZ(7,"img",42),t.qZA(),t.TgZ(8,"a",43),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td")(15,"span",44),t._uU(16),t.qZA()(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA(),t.TgZ(21,"td"),t._uU(22),t.qZA(),t.TgZ(23,"td")(24,"span",44),t._uU(25),t.qZA()(),t.TgZ(26,"td")(27,"a",45),t._UZ(28,"img",46),t.qZA(),t.TgZ(29,"a",47),t.NdJ("click",function(){const b=t.CHM(e).index,S=t.oxw();return t.KtG(S.confirmText(b))}),t._UZ(30,"img",48),t.qZA()()()}if(2&a){const e=g.$implicit;t.xp6(3),t.Q6J("ngModel",e.isSelected),t.xp6(4),t.Q6J("src",e.img,t.LSH),t.xp6(2),t.Oqu(e.ProductName),t.xp6(2),t.Oqu(e.Date),t.xp6(2),t.Oqu(e.Customer),t.xp6(2),t.Q6J("ngClass",t.kEZ(12,u,"Received"===e.Status,"Pending"===e.Status,"Ordered"===e.Status)),t.xp6(1),t.Oqu(e.Status),t.xp6(2),t.Oqu(e.GrandTotal),t.xp6(2),t.Oqu(e.Paid),t.xp6(2),t.Oqu(e.Due),t.xp6(2),t.Q6J("ngClass",t.kEZ(16,u,"Paid"===e.PaymentStatus,"UnPaid"===e.PaymentStatus,"Partial"===e.PaymentStatus)),t.xp6(1),t.Oqu(e.PaymentStatus)}}let p=(()=>{class a{constructor(e){this.QueryService=e,this.dtOptions={},this.initChecked=!1,this.tableData=[],this.date=new Date,this.QueryService.filterToggle(),this.tableData=this.QueryService.salesreturnList}confirmText(e){n().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(n().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1))})}ngOnInit(){this.dtOptions={dom:"Btlpif",pagingType:"numbers",language:{search:" ",searchPlaceholder:"Search...",info:"_START_ - _END_ of _TOTAL_ items"},initComplete:(e,o)=>{$(".dt-buttons").appendTo(".wordset"),$(".dataTables_filter").appendTo(".search-input")}}}selectAll(e){this.tableData.forEach(e?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(r._))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-salesreturnlists"]],decls:95,vars:4,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//return/createsalesreturn",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-2"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-2","col-sm-6","col-12"],[1,"form-group"],[3,"ngModel","ngModelChange"],["type","text","placeholder","Enter Reference"],[1,"form-select"],[1,"btn","btn-filters","ms-auto"],["src","assets/img/icons/search-whites.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew",3,"dtOptions"],[1,"checkboxs",3,"click"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"checkmarks"],[4,"ngFor","ngForOf"],[1,"checkboxs"],[1,"productimgname"],["href","javascript:void(0);",1,"product-img"],["alt","product",3,"src"],["href","javascript:void(0);"],[1,"badges",3,"ngClass"],["routerLink","//sales/editsalesreturns",1,"me-3"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Sales Return List"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Returns"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add New Sales Return"),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._UZ(18,"img",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"a",14),t._UZ(21,"img",15),t.qZA()()(),t.TgZ(22,"div",16)(23,"ul")(24,"li")(25,"a",17),t._UZ(26,"img",18),t.qZA()(),t.TgZ(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()()()()(),t.TgZ(33,"div",23)(34,"div",24)(35,"div",25)(36,"div",26)(37,"div",27)(38,"ngx-datepicker",28),t.NdJ("ngModelChange",function(b){return o.date=b}),t.qZA()()(),t.TgZ(39,"div",26)(40,"div",27),t._UZ(41,"input",29),t.qZA()(),t.TgZ(42,"div",26)(43,"div",27)(44,"select",30)(45,"option"),t._uU(46,"Choose Customer"),t.qZA(),t.TgZ(47,"option"),t._uU(48,"Customer"),t.qZA()()()(),t.TgZ(49,"div",26)(50,"div",27)(51,"select",30)(52,"option"),t._uU(53,"Choose Status"),t.qZA(),t.TgZ(54,"option"),t._uU(55,"Inprogress"),t.qZA()()()(),t.TgZ(56,"div",26)(57,"div",27)(58,"select",30)(59,"option"),t._uU(60,"Choose Payment Status"),t.qZA(),t.TgZ(61,"option"),t._uU(62,"Payment Status"),t.qZA()()()(),t.TgZ(63,"div",26)(64,"div",27)(65,"a",31),t._UZ(66,"img",32),t.qZA()()()()()(),t.TgZ(67,"div",33)(68,"table",34)(69,"thead")(70,"tr")(71,"th")(72,"label",35),t.NdJ("click",function(){return o.selectAll(o.initChecked)}),t.TgZ(73,"input",36),t.NdJ("ngModelChange",function(b){return o.initChecked=b}),t.qZA(),t._UZ(74,"span",37),t.qZA()(),t.TgZ(75,"th"),t._uU(76,"Product Name"),t.qZA(),t.TgZ(77,"th"),t._uU(78,"Date"),t.qZA(),t.TgZ(79,"th"),t._uU(80,"Customer"),t.qZA(),t.TgZ(81,"th"),t._uU(82,"Status"),t.qZA(),t.TgZ(83,"th"),t._uU(84,"Grand Total ($)"),t.qZA(),t.TgZ(85,"th"),t._uU(86,"Paid ($)"),t.qZA(),t.TgZ(87,"th"),t._uU(88,"Due ($)"),t.qZA(),t.TgZ(89,"th"),t._uU(90,"Payment Status"),t.qZA(),t.TgZ(91,"th"),t._uU(92,"Action"),t.qZA()()(),t.TgZ(93,"tbody"),t.YNc(94,f,31,20,"tr",38),t.qZA()()()()()),2&e&&(t.xp6(38),t.Q6J("ngModel",o.date),t.xp6(30),t.Q6J("dtOptions",o.dtOptions),t.xp6(5),t.Q6J("ngModel",o.initChecked),t.xp6(21),t.Q6J("ngForOf",o.tableData))},dependencies:[c.mk,c.sg,Z.yS,d.G,i.YN,i.Kr,i.Wl,i.JJ,i.On,_.QB]}),a})();const m=[{path:"",component:p}];let T=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[Z.Bz.forChild(m),Z.Bz]}),a})();var h=s(96134);let C=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a,bootstrap:[p]}),a.\u0275inj=t.cJS({imports:[c.ez,T,d.T,i.u5,_.ZU,h.ii.forRoot()]}),a})()},87078:(y,v,s)=>{s.d(v,{G:()=>c.G,T:()=>_.T});var c=s(10008),_=s(33861)},10008:(y,v,s)=>{s.d(v,{G:()=>Z});var c=s(94650),Z=function(){function l(n,t,r){this.el=n,this.vcr=t,this.renderer=r,this.dtOptions={}}return l.prototype.ngOnInit=function(){var n=this;this.dtTrigger?this.dtTrigger.subscribe(function(t){n.displayTable(t)}):this.displayTable(null)},l.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},l.prototype.displayTable=function(n){var t=this;n&&(this.dtOptions=n),this.dtInstance=new Promise(function(r,d){Promise.resolve(t.dtOptions).then(function(i){0===Object.keys(i).length&&0===$("tbody tr",t.el.nativeElement).length?d("Both the table and dtOptions cannot be empty"):setTimeout(function(){var f={rowCallback:function(p,m,T){if(i.columns){var h=i.columns;t.applyNgPipeTransform(p,h),t.applyNgRefTemplate(p,h,m)}i.rowCallback&&i.rowCallback(p,m,T)}};f=Object.assign({},i,f),t.dt=$(t.el.nativeElement).DataTable(f),r(t.dt)})})})},l.prototype.applyNgPipeTransform=function(n,t){t.filter(function(d){return d.ngPipeInstance&&!d.ngTemplateRef}).forEach(function(d){var i=d.ngPipeInstance,u=d.ngPipeArgs||[],f=t.findIndex(function(h){return h.data===d.data}),p=n.childNodes.item(f),m=$(p).text(),T=i.transform.apply(i,function(l,n,t){if(t||2===arguments.length)for(var i,r=0,d=n.length;r<d;r++)(i||!(r in n))&&(i||(i=Array.prototype.slice.call(n,0,r)),i[r]=n[r]);return l.concat(i||Array.prototype.slice.call(n))}([m],u,!1));$(p).text(T)})},l.prototype.applyNgRefTemplate=function(n,t,r){var d=this;t.filter(function(u){return u.ngTemplateRef&&!u.ngPipeInstance}).forEach(function(u){var f=u.ngTemplateRef,p=f.ref,m=f.context,T=t.findIndex(function(g){return g.data===u.data}),h=n.childNodes.item(T);$(h).html("");var C=Object.assign({},m,m?.userData,{adtData:r}),a=d.vcr.createEmbeddedView(p,C);d.renderer.appendChild(h,a.rootNodes[0])})},l.\u0275fac=function(t){return new(t||l)(c.Y36(c.SBq),c.Y36(c.s_b),c.Y36(c.Qsj))},l.\u0275dir=c.lG2({type:l,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),l}()},33861:(y,v,s)=>{s.d(v,{T:()=>l});var c=s(36895),Z=(s(10008),s(94650)),l=function(){function n(){}return n.forRoot=function(){return{ngModule:n}},n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=Z.oAB({type:n}),n.\u0275inj=Z.cJS({imports:[c.ez]}),n}()}}]);