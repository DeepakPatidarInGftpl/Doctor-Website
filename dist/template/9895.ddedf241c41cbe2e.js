"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9895],{9895:(L,B,s)=>{s.r(B),s.d(B,{BatchVariantProductListModule:()=>x});var h=s(6895),A=s(8996),P=s(5226),Z=s.n(P),t=s(4650),l=s(927),c=s(5415),a=s(4006),u=s(4333),g=s(455),d=s(4040);function p(o,m){if(1&o){const i=t.EpF();t.ynx(0),t.TgZ(1,"td")(2,"label",47)(3,"input",48),t.NdJ("ngModelChange",function(e){t.CHM(i);const r=t.oxw().index,C=t.oxw();return t.KtG(C.selectedRows[r]=e)}),t.qZA(),t._UZ(4,"span",30),t.qZA()(),t.TgZ(5,"td",49)(6,"a",50),t._uU(7),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td")(25,"mat-slide-toggle",51),t.NdJ("click",function(){t.CHM(i);const e=t.oxw(),r=e.$implicit,C=e.index,y=t.oxw();return t.KtG(null!=r&&r.is_active?y.isActive(C,r.id):y.Active(C,r.id))})("ngModelChange",function(e){t.CHM(i);const r=t.oxw().$implicit;return t.KtG(r.is_active=e)}),t.qZA()(),t.TgZ(26,"td")(27,"a",52),t._UZ(28,"img",53),t.qZA(),t.TgZ(29,"a",52),t._UZ(30,"img",54),t.qZA(),t.TgZ(31,"a",55),t.NdJ("click",function(){t.CHM(i);const e=t.oxw(),r=e.index,C=e.$implicit,y=t.oxw();return t.KtG(y.confirmText(r,C.id))}),t._UZ(32,"img",56),t.qZA()(),t.BQk()}if(2&o){const i=t.oxw(),n=i.index,e=i.$implicit,r=t.oxw();t.xp6(3),t.Q6J("ngModel",r.selectedRows[n]),t.xp6(3),t.MGl("routerLink","//product/batchUpdate/",null==e?null:e.id,""),t.xp6(1),t.Oqu(null==e?null:e.mrp),t.xp6(2),t.Oqu(null==e?null:e.cost_price),t.xp6(2),t.Oqu(null==e?null:e.selling_price_online),t.xp6(2),t.Oqu(null==e?null:e.selling_price_offline),t.xp6(2),t.Oqu(null==e?null:e.selling_price_employee),t.xp6(2),t.Oqu(null==e?null:e.selling_price_vendor),t.xp6(2),t.Oqu(null==e?null:e.max_order_quantity),t.xp6(2),t.Oqu(null==e?null:e.stock),t.xp6(2),t.Oqu(null==e?null:e.minimum_stock_threshold),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","//product/batchDetails/",null==e?null:e.id,""),t.xp6(2),t.MGl("routerLink","//product/batchUpdate/",null==e?null:e.id,"")}}function _(o,m){if(1&o&&(t.TgZ(0,"tr"),t.YNc(1,p,33,14,"ng-container",46),t.qZA()),2&o){const i=m.$implicit,n=t.oxw();t.xp6(1),t.Q6J("ngIf",n.id==i.variant.id)}}const f=function(o,m){return{itemsPerPage:o,currentPage:m}},b=[{path:"",component:(()=>{class o{constructor(i,n){this.coreService=i,this.Arout=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!1}confirmText(i,n){Z().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(e=>{e.isConfirmed&&this.coreService.deleteBatch(n).subscribe(r=>{this.delRes=r,"Batch Deleted successfully"==this.delRes.msg?(this.ngOnInit(),Z().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(i,1)):Z().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(i,n){Z().fire({title:"Are you sure?",text:"Do you want to Deactivate this batch!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(e=>{e.isConfirmed&&(this.coreService.BatchIsActive(n,"").subscribe(r=>{this.delRes=r,"Batch Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),Z().fire({icon:"success",title:"Deactivate!",text:"Batch Is Deactivate Successfully."}))})}Active(i,n){Z().fire({title:"Are you sure?",text:"Do you want to Active this batch!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(e=>{e.isConfirmed&&(this.coreService.BatchIsActive(n,"").subscribe(r=>{this.delRes=r,"Batch Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),Z().fire({icon:"success",title:"Active!",text:"Batch Is Active Successfully."}))})}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.coreService.getBatchById(this.id).subscribe(i=>{console.log(i),this.tableData=i,this.selectedRows=new Array(this.tableData.length).fill(!1)})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(i){this.tableData.forEach(i?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(i){this.coreService.deleteBatch(i).subscribe(n=>{this.delRes=n,"Batch Deleted successfully"==this.delRes.msg&&this.ngOnInit()})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(i=>(console.log(i),console.log(i.name.toLocaleLowerCase()),console.log(i.name.match(this.titlee)),i.name.match(this.titlee)))}sort(i){this.key=i,this.reverse=!this.reverse}}return o.\u0275fac=function(i){return new(i||o)(t.Y36(l.p),t.Y36(A.gz))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-batch-variant-product-list"]],decls:102,vars:17,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//contacts/addCustomer",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[4,"ngIf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Batch list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"View/Search Batch "),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add Batch "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._UZ(18,"img",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"a",14),t._UZ(21,"img",15),t.qZA(),t.TgZ(22,"div",16)(23,"label")(24,"input",17),t.NdJ("ngModelChange",function(r){return n.titlee=r})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(25,"div",18)(26,"ul")(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()(),t.TgZ(33,"li")(34,"a",23),t._UZ(35,"img",24),t.qZA()()()()(),t.TgZ(36,"div",25)(37,"table",26)(38,"thead")(39,"tr")(40,"th",27),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(41,"label",28),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(42,"input",29),t.NdJ("ngModelChange",function(r){return n.allSelected=r})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(43,"span",30),t.qZA(),t._UZ(44,"i",31),t.qZA(),t.TgZ(45,"th",27),t.NdJ("click",function(){return n.sort("id")}),t._uU(46,"mrp "),t._UZ(47,"i",31),t.qZA(),t.TgZ(48,"th",27),t.NdJ("click",function(){return n.sort("id")}),t._uU(49,"Cost Price"),t._UZ(50,"i",31),t.qZA(),t.TgZ(51,"th",27),t.NdJ("click",function(){return n.sort("id")}),t._uU(52,"Selling Price Online"),t._UZ(53,"i",31),t.qZA(),t.TgZ(54,"th",27),t.NdJ("click",function(){return n.sort("id")}),t._uU(55,"Selling Price Offline "),t._UZ(56,"i",31),t.qZA(),t.TgZ(57,"th",27),t.NdJ("click",function(){return n.sort("id")}),t._uU(58,"Selling Price Employee "),t._UZ(59,"i",31),t.qZA(),t.TgZ(60,"th",27),t.NdJ("click",function(){return n.sort("id")}),t._uU(61,"Selling Price Vendor "),t._UZ(62,"i",31),t.qZA(),t.TgZ(63,"th",27),t.NdJ("click",function(){return n.sort("id")}),t._uU(64,"Max Order Quantity "),t._UZ(65,"i",31),t.qZA(),t.TgZ(66,"th",27),t.NdJ("click",function(){return n.sort("id")}),t._uU(67,"stock "),t._UZ(68,"i",31),t.qZA(),t.TgZ(69,"th",27),t.NdJ("click",function(){return n.sort("id")}),t._uU(70,"Minimum Stock Threshold "),t._UZ(71,"i",31),t.qZA(),t.TgZ(72,"th",27),t.NdJ("click",function(){return n.sort("id")}),t._uU(73,"Is Active "),t._UZ(74,"i",31),t.qZA(),t.TgZ(75,"th",27),t.NdJ("click",function(){return n.sort("id")}),t._uU(76,"Action "),t._UZ(77,"i",31),t.qZA()()(),t.TgZ(78,"tbody"),t.YNc(79,_,2,1,"tr",32),t.ALo(80,"paginate"),t.ALo(81,"orderBy"),t.qZA()(),t.TgZ(82,"div",33)(83,"div",34)(84,"div",35),t._uU(85," Show per page "),t.TgZ(86,"select",36),t.NdJ("ngModelChange",function(r){return n.itemsPerPage=r}),t.TgZ(87,"option",37),t._uU(88,"5"),t.qZA(),t.TgZ(89,"option",38),t._uU(90,"10"),t.qZA(),t.TgZ(91,"option",39),t._uU(92,"20"),t.qZA(),t.TgZ(93,"option",40),t._uU(94,"50"),t.qZA(),t.TgZ(95,"option",41),t._uU(96,"All"),t.qZA()()()(),t.TgZ(97,"div",42)(98,"div",43)(99,"pagination-controls",44),t.NdJ("pageChange",function(r){return n.p=r}),t.qZA(),t.TgZ(100,"div",45),t._uU(101),t.qZA()()()()()()()),2&i&&(t.xp6(24),t.Q6J("ngModel",n.titlee),t.xp6(18),t.Q6J("ngModel",n.allSelected),t.xp6(37),t.Q6J("ngForOf",t.xi3(80,7,t.Dn7(81,10,n.tableData,n.key,n.reverse),t.WLB(14,f,n.pageSize,n.p))),t.xp6(7),t.Q6J("ngModel",n.itemsPerPage),t.xp6(15),t.lnq("Showing ",n.pageSize," to ",n.pageSize," of ",n.pageSize," entries"))},dependencies:[h.sg,h.O5,A.yS,c.G,a.YN,a.Kr,a.Fj,a.Wl,a.EJ,a.JJ,a.On,u.LS,g.Rr,u._s,d.T]}),o})()}];let T=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[A.Bz.forChild(b),A.Bz]}),o})();var U=s(6134),M=s(906),k=s(3189);let x=(()=>{class o{}return o.\u0275fac=function(i){return new(i||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[h.ez,T,c.T,a.u5,M.ZU,U.ii.forRoot(),k.h,u.JX,d.l,g.rP]}),o})()},5415:(L,B,s)=>{s.d(B,{G:()=>P,T:()=>t});var h=s(4650),P=function(){function l(c,a,u){this.el=c,this.vcr=a,this.renderer=u,this.dtOptions={}}return l.prototype.ngOnInit=function(){var c=this;this.dtTrigger?this.dtTrigger.subscribe(function(a){c.displayTable(a)}):this.displayTable(null)},l.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},l.prototype.displayTable=function(c){var a=this;c&&(this.dtOptions=c),this.dtInstance=new Promise(function(u,g){Promise.resolve(a.dtOptions).then(function(d){0===Object.keys(d).length&&0===$("tbody tr",a.el.nativeElement).length?g("Both the table and dtOptions cannot be empty"):setTimeout(function(){var _={rowCallback:function(f,v,b){if(d.columns){var T=d.columns;a.applyNgPipeTransform(f,T),a.applyNgRefTemplate(f,T,v)}d.rowCallback&&d.rowCallback(f,v,b)}};_=Object.assign({},d,_),a.dt=$(a.el.nativeElement).DataTable(_),u(a.dt)})})})},l.prototype.applyNgPipeTransform=function(c,a){a.filter(function(g){return g.ngPipeInstance&&!g.ngTemplateRef}).forEach(function(g){var d=g.ngPipeInstance,p=g.ngPipeArgs||[],_=a.findIndex(function(T){return T.data===g.data}),f=c.childNodes.item(_),v=$(f).text(),b=d.transform.apply(d,function(l,c,a){if(a||2===arguments.length)for(var d,u=0,g=c.length;u<g;u++)(d||!(u in c))&&(d||(d=Array.prototype.slice.call(c,0,u)),d[u]=c[u]);return l.concat(d||Array.prototype.slice.call(c))}([v],p,!1));$(f).text(b)})},l.prototype.applyNgRefTemplate=function(c,a,u){var g=this;a.filter(function(p){return p.ngTemplateRef&&!p.ngPipeInstance}).forEach(function(p){var _=p.ngTemplateRef,f=_.ref,v=_.context,b=a.findIndex(function(k){return k.data===p.data}),T=c.childNodes.item(b);$(T).html("");var U=Object.assign({},v,v?.userData,{adtData:u}),M=g.vcr.createEmbeddedView(f,U);g.renderer.appendChild(T,M.rootNodes[0])})},l.\u0275fac=function(a){return new(a||l)(h.Y36(h.SBq),h.Y36(h.s_b),h.Y36(h.Qsj))},l.\u0275dir=h.lG2({type:l,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),l}(),Z=s(6895),t=function(){function l(){}return l.forRoot=function(){return{ngModule:l}},l.\u0275fac=function(a){return new(a||l)},l.\u0275mod=h.oAB({type:l}),l.\u0275inj=h.cJS({imports:[Z.ez]}),l}()}}]);