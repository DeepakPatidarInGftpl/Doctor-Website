"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[408],{408:(k,F,a)=>{a.r(F),a.d(F,{FooterListModule:()=>J});var p=a(6895),A=a(8996),U=a(5226),T=a.n(U),t=a(4650),r=a(2559),c=a(2326),n=a(4006),g=a(7185),u=a(3162),d=a(4333),h=a(455),_=a(5415),v=a(4040);function f(s,m){if(1&s){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",36)(3,"input",37),t.NdJ("ngModelChange",function(i){const Z=t.CHM(e).index,y=t.oxw();return t.KtG(y.selectedRows[Z]=i)}),t.qZA(),t._UZ(4,"span",30),t.qZA()(),t.TgZ(5,"td",38)(6,"a",39),t._UZ(7,"img",40),t.qZA()(),t.TgZ(8,"td"),t._uU(9),t.qZA(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t._UZ(22,"td",41),t.TgZ(23,"td")(24,"mat-slide-toggle",42),t.NdJ("click",function(){const i=t.CHM(e),l=i.$implicit,Z=i.index,y=t.oxw();return t.KtG(l.is_active?y.deActivate(Z,l.id):y.Active(Z,l.id))})("ngModelChange",function(i){const Z=t.CHM(e).$implicit;return t.KtG(Z.is_active=i)}),t.qZA()(),t.TgZ(25,"td")(26,"a",43),t._UZ(27,"img",44),t.qZA(),t.TgZ(28,"a",45),t.NdJ("click",function(){const i=t.CHM(e),l=i.index,Z=i.$implicit,y=t.oxw();return t.KtG(y.confirmText(l,Z.id))}),t._UZ(29,"img",46),t.qZA()()()}if(2&s){const e=m.$implicit,o=m.index,i=t.oxw();t.xp6(3),t.Q6J("ngModel",i.selectedRows[o]),t.xp6(4),t.Q6J("src",i.imgUrl+e.logo,t.LSH),t.xp6(2),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.facebook),t.xp6(2),t.Oqu(e.instagram),t.xp6(2),t.Oqu(e.twitter),t.xp6(2),t.Oqu(e.whatsapp),t.xp6(2),t.Oqu(e.address),t.xp6(1),t.Q6J("innerHTML",e.description,t.oJD),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.MGl("routerLink","/website/updatefooter/",e.id,"")}}function C(s,m){1&s&&t._UZ(0,"mat-progress-bar",47)}function b(s,m){if(1&s){const e=t.EpF();t.TgZ(0,"div",48)(1,"div",49)(2,"div",50),t._uU(3," Show per page "),t.TgZ(4,"select",51),t.NdJ("ngModelChange",function(i){t.CHM(e);const l=t.oxw();return t.KtG(l.itemsPerPage=i)}),t.TgZ(5,"option",52),t._uU(6,"5"),t.qZA(),t.TgZ(7,"option",53),t._uU(8,"10"),t.qZA(),t.TgZ(9,"option",54),t._uU(10,"20"),t.qZA(),t.TgZ(11,"option",55),t._uU(12,"50"),t.qZA(),t.TgZ(13,"option",56),t._uU(14,"All"),t.qZA()()()(),t.TgZ(15,"div",57)(16,"div",58)(17,"pagination-controls",59),t.NdJ("pageChange",function(i){t.CHM(e);const l=t.oxw();return t.KtG(l.p=i)}),t.qZA(),t.TgZ(18,"div",60),t._uU(19),t.qZA()()()()}if(2&s){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(15),t.lnq("Showing ",e.pageSize," to ",e.pageSize," of ",e.pageSize," entries")}}const M=function(s,m){return{itemsPerPage:s,currentPage:m}},L=[{path:"",component:(()=>{class s{constructor(e,o,i,l,Z){this.websiteService=e,this.QueryService=o,this.fb=i,this.toastr=l,this.router=Z,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.imgUrl="https://pv.greatfuturetechno.com",this.select=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(e,o){T().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&this.websiteService.deleteFooter(o).subscribe(l=>{this.delRes=l,"Footer Deleted successfully"==this.delRes.msg?(this.ngOnInit(),T().fire({icon:"success",title:"Deleted!",text:"Your file has been deleted."}),this.tableData.splice(e,1)):(T().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error}),this.tableData.splice(e,1))})})}deActivate(e,o){T().fire({title:"Are you sure?",text:"Do you want to Deactivate this Footer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.websiteService.FooterIsActive(o,"").subscribe(l=>{this.delRes=l,"Footer Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),T().fire({icon:"success",title:"Deactivate!",text:"Footer Is Deactivate Successfully."}))})}Active(e,o){T().fire({title:"Are you sure?",text:"Do you want to Active this Footer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(i=>{i.isConfirmed&&(this.websiteService.FooterIsActive(o,"").subscribe(l=>{this.delRes=l,"Footer Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),T().fire({icon:"success",title:"Active!",text:"Footer Is Active Successfully."}))})}ngOnInit(){this.websiteService.getFooter().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}deleteId(e){this.websiteService.deleteAddressStore(e).subscribe(o=>{this.delRes=o,"Colors Deleted successfully"==this.delRes.msg&&window.location.reload()})}search(){""==this.titlee?this.ngOnInit():this.tableData=this.tableData.filter(e=>(console.log(e),console.log(e.name.toLocaleLowerCase()),console.log(e.name.match(this.titlee)),e.name.match(this.titlee)))}sort(e){this.key=e,this.reverse=!this.reverse}}return s.\u0275fac=function(e){return new(e||s)(t.Y36(r.K),t.Y36(c._),t.Y36(n.qu),t.Y36(g._W),t.Y36(A.F0))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-footer-list"]],decls:85,vars:15,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],["routerLink","//website/addfooter",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["datatable","",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3"],["alt","product",3,"src"],[3,"innerHTML"],[3,"ngModel","click","ngModelChange"],[1,"me-3",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","5"],["value","10"],["value","20"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Footer list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Footer"),t.qZA()(),t.TgZ(6,"div",2)(7,"a",3),t._UZ(8,"img",4),t._uU(9,"Add Footer "),t.qZA()()(),t.TgZ(10,"div",5)(11,"div",6)(12,"div",7)(13,"div",8)(14,"div",9)(15,"a",10),t._UZ(16,"img",11),t.TgZ(17,"span"),t._UZ(18,"img",12),t.qZA()()(),t.TgZ(19,"div",13)(20,"a",14),t._UZ(21,"img",15),t.qZA(),t.TgZ(22,"div",16)(23,"label")(24,"input",17),t.NdJ("ngModelChange",function(l){return o.titlee=l})("ngModelChange",function(){return o.search()}),t.qZA()()()()(),t.TgZ(25,"div",18)(26,"ul")(27,"li")(28,"a",19),t._UZ(29,"img",20),t.qZA()(),t.TgZ(30,"li")(31,"a",21),t._UZ(32,"img",22),t.qZA()(),t.TgZ(33,"li")(34,"a",23),t._UZ(35,"img",24),t.qZA()()()()(),t.TgZ(36,"div",25)(37,"table",26)(38,"thead")(39,"tr")(40,"th",27),t.NdJ("click",function(){return o.sort("id")}),t.TgZ(41,"label",28),t.NdJ("click",function(){return o.selectAll(o.initChecked)}),t.TgZ(42,"input",29),t.NdJ("ngModelChange",function(l){return o.allSelected=l})("change",function(){return o.selectAlll()}),t.qZA(),t._UZ(43,"span",30),t.qZA(),t._UZ(44,"i",31),t.qZA(),t.TgZ(45,"th",27),t.NdJ("click",function(){return o.sort("id")}),t._uU(46,"Logo "),t._UZ(47,"i",31),t.qZA(),t.TgZ(48,"th",27),t.NdJ("click",function(){return o.sort("id")}),t._uU(49,"Phone "),t._UZ(50,"i",31),t.qZA(),t.TgZ(51,"th",27),t.NdJ("click",function(){return o.sort("id")}),t._uU(52,"Email "),t._UZ(53,"i",31),t.qZA(),t.TgZ(54,"th",27),t.NdJ("click",function(){return o.sort("id")}),t._uU(55,"Facebook "),t._UZ(56,"i",31),t.qZA(),t.TgZ(57,"th",27),t.NdJ("click",function(){return o.sort("id")}),t._uU(58,"Instagram"),t._UZ(59,"i",31),t.qZA(),t.TgZ(60,"th",27),t.NdJ("click",function(){return o.sort("id")}),t._uU(61,"Twitter "),t._UZ(62,"i",31),t.qZA(),t.TgZ(63,"th",27),t.NdJ("click",function(){return o.sort("id")}),t._uU(64,"Whatsapp "),t._UZ(65,"i",31),t.qZA(),t.TgZ(66,"th",27),t.NdJ("click",function(){return o.sort("id")}),t._uU(67,"Address "),t._UZ(68,"i",31),t.qZA(),t.TgZ(69,"th",27),t.NdJ("click",function(){return o.sort("id")}),t._uU(70,"Description "),t._UZ(71,"i",31),t.qZA(),t.TgZ(72,"th",27),t.NdJ("click",function(){return o.sort("id")}),t._uU(73,"Is Active "),t._UZ(74,"i",31),t.qZA(),t.TgZ(75,"th",27),t.NdJ("click",function(){return o.sort("id")}),t._uU(76,"Action "),t._UZ(77,"i",31),t.qZA()()(),t.TgZ(78,"tbody"),t.YNc(79,f,30,12,"tr",32),t.ALo(80,"paginate"),t.ALo(81,"orderBy"),t.qZA()(),t.TgZ(82,"div",33),t.YNc(83,C,1,0,"mat-progress-bar",34),t.qZA(),t.YNc(84,b,20,4,"div",35),t.qZA()()()),2&e&&(t.xp6(24),t.Q6J("ngModel",o.titlee),t.xp6(18),t.Q6J("ngModel",o.allSelected),t.xp6(37),t.Q6J("ngForOf",t.xi3(80,5,t.Dn7(81,8,o.tableData,o.key,o.reverse),t.WLB(12,M,o.pageSize,o.p))),t.xp6(4),t.Q6J("ngIf",o.loader),t.xp6(1),t.Q6J("ngIf",!o.loader))},dependencies:[p.sg,p.O5,A.yS,n.YN,n.Kr,n.Fj,n.Wl,n.EJ,n.JJ,n.On,u.pW,d.LS,h.Rr,_.G,d._s,v.T]}),s})()}];let q=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[A.Bz.forChild(L),A.Bz]}),s})();var w=a(8468);let J=(()=>{class s{}return s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[p.ez,q,w.I]}),s})()},5415:(k,F,a)=>{a.d(F,{G:()=>U,T:()=>t});var p=a(4650),U=function(){function r(c,n,g){this.el=c,this.vcr=n,this.renderer=g,this.dtOptions={}}return r.prototype.ngOnInit=function(){var c=this;this.dtTrigger?this.dtTrigger.subscribe(function(n){c.displayTable(n)}):this.displayTable(null)},r.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},r.prototype.displayTable=function(c){var n=this;c&&(this.dtOptions=c),this.dtInstance=new Promise(function(g,u){Promise.resolve(n.dtOptions).then(function(d){0===Object.keys(d).length&&0===$("tbody tr",n.el.nativeElement).length?u("Both the table and dtOptions cannot be empty"):setTimeout(function(){var _={rowCallback:function(v,f,C){if(d.columns){var b=d.columns;n.applyNgPipeTransform(v,b),n.applyNgRefTemplate(v,b,f)}d.rowCallback&&d.rowCallback(v,f,C)}};_=Object.assign({},d,_),n.dt=$(n.el.nativeElement).DataTable(_),g(n.dt)})})})},r.prototype.applyNgPipeTransform=function(c,n){n.filter(function(u){return u.ngPipeInstance&&!u.ngTemplateRef}).forEach(function(u){var d=u.ngPipeInstance,h=u.ngPipeArgs||[],_=n.findIndex(function(b){return b.data===u.data}),v=c.childNodes.item(_),f=$(v).text(),C=d.transform.apply(d,function(r,c,n){if(n||2===arguments.length)for(var d,g=0,u=c.length;g<u;g++)(d||!(g in c))&&(d||(d=Array.prototype.slice.call(c,0,g)),d[g]=c[g]);return r.concat(d||Array.prototype.slice.call(c))}([f],h,!1));$(v).text(C)})},r.prototype.applyNgRefTemplate=function(c,n,g){var u=this;n.filter(function(h){return h.ngTemplateRef&&!h.ngPipeInstance}).forEach(function(h){var _=h.ngTemplateRef,v=_.ref,f=_.context,C=n.findIndex(function(L){return L.data===h.data}),b=c.childNodes.item(C);$(b).html("");var M=Object.assign({},f,f?.userData,{adtData:g}),x=u.vcr.createEmbeddedView(v,M);u.renderer.appendChild(b,x.rootNodes[0])})},r.\u0275fac=function(n){return new(n||r)(p.Y36(p.SBq),p.Y36(p.s_b),p.Y36(p.Qsj))},r.\u0275dir=p.lG2({type:r,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),r}(),T=a(6895),t=function(){function r(){}return r.forRoot=function(){return{ngModule:r}},r.\u0275fac=function(n){return new(n||r)},r.\u0275mod=p.oAB({type:r}),r.\u0275inj=p.cJS({imports:[T.ez]}),r}()}}]);