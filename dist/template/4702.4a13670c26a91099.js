"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4702],{10408:(N,F,l)=>{l.r(F),l.d(F,{FooterListModule:()=>X});var f=l(36895),A=l(88996),x=l(35226),Z=l.n(x),L=l(53583),c=l(12983),d=l.n(c),r=l(80574),h=l(94327),t=l(94650),u=l(92559),_=l(72326),g=l(24006),b=l(97185),v=l(42917),C=l(73162),T=l(54333),M=l(90455),U=l(54040);function w(i,a){1&i&&(t.TgZ(0,"div",36)(1,"a",37),t._UZ(2,"img",38),t._uU(3,"Add Footer "),t.qZA()())}function I(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"th",26),t.NdJ("click",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",30),t.qZA()}}function P(i,a){if(1&i&&(t.TgZ(0,"a",49),t._UZ(1,"img",50),t.qZA()),2&i){const e=t.oxw().$implicit;t.MGl("routerLink","/website/updatefooter/",e.id,"")}}function E(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"a",51),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(),s=n.index,p=n.$implicit,m=t.oxw(2);return t.KtG(m.confirmText(s,p.id))}),t._UZ(1,"img",52),t.qZA()}}function B(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",40)(3,"input",41),t.NdJ("ngModelChange",function(n){const p=t.CHM(e).index,m=t.oxw(2);return t.KtG(m.selectedRows[p]=n)}),t.qZA(),t._UZ(4,"span",29),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",42)(8,"a",43),t._UZ(9,"img",44),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t._UZ(24,"td",45),t.TgZ(25,"td")(26,"mat-slide-toggle",46),t.NdJ("click",function(){const n=t.CHM(e),s=n.$implicit,p=n.index,m=t.oxw(2);return t.KtG(s.is_active?m.deActivate(p,s.id):m.Active(p,s.id))})("ngModelChange",function(n){const p=t.CHM(e).$implicit;return t.KtG(p.is_active=n)}),t.qZA()(),t.TgZ(27,"td"),t.YNc(28,P,2,1,"a",47),t.YNc(29,E,2,0,"a",48),t.qZA()()}if(2&i){const e=a.$implicit,o=a.index,n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedRows[o]),t.xp6(3),t.Oqu(o+1),t.xp6(3),t.Q6J("src",n.imgUrl+e.logo,t.LSH),t.xp6(2),t.Oqu(e.phone),t.xp6(2),t.Oqu(e.email),t.xp6(2),t.Oqu(e.facebook),t.xp6(2),t.Oqu(e.instagram),t.xp6(2),t.Oqu(e.twitter),t.xp6(2),t.Oqu(e.whatsapp),t.xp6(2),t.Oqu(e.address),t.xp6(1),t.Q6J("innerHTML",e.description,t.oJD),t.xp6(2),t.Q6J("ngModel",e.is_active),t.xp6(2),t.Q6J("ngIf",n.isEdit),t.xp6(1),t.Q6J("ngIf",n.isDelete)}}const O=function(i,a){return{itemsPerPage:i,currentPage:a}};function R(i,a){if(1&i&&(t.TgZ(0,"tbody"),t.YNc(1,B,30,14,"tr",39),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.tableData,e.key,e.reverse),t.WLB(8,O,e.itemsPerPage,e.p)))}}function Y(i,a){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",53)(3,"p",54),t._uU(4,"Data not available"),t.qZA()()()())}function H(i,a){1&i&&t._UZ(0,"mat-progress-bar",55)}function Q(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",56)(1,"div",57)(2,"div",58),t._uU(3," Show per page "),t.TgZ(4,"select",59),t.NdJ("ngModelChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.itemsPerPage=n)}),t.TgZ(5,"option",60),t._uU(6,"10"),t.qZA(),t.TgZ(7,"option",61),t._uU(8,"20"),t.qZA(),t.TgZ(9,"option",62),t._uU(10,"30"),t.qZA(),t.TgZ(11,"option",63),t._uU(12,"50"),t.qZA(),t.TgZ(13,"option",64),t._uU(14,"100"),t.qZA(),t.TgZ(15,"option",65),t._uU(16,"All"),t.qZA()()()(),t.TgZ(17,"div",66)(18,"div",67)(19,"pagination-controls",68),t.NdJ("pageChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.p=n)}),t.qZA(),t.TgZ(20,"div",69),t._uU(21),t.qZA()()()()}if(2&i){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(17),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}let j=(()=>{class i{constructor(e,o,n,s,p,m){this.websiteService=e,this.QueryService=o,this.fb=n,this.toastr=s,this.router=p,this.cs=m,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.imgUrl="https://pv.greatfuturetechno.com",this.select=!1,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.QueryService.filterToggle()}confirmText(e,o){Z().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.websiteService.deleteFooter(o).subscribe(s=>{this.delRes=s,"Footer Deleted successfully"==this.delRes.msg?(this.ngOnInit(),Z().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):(Z().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error}),this.tableData.splice(e,1))})})}deActivate(e,o){Z().fire({title:"Are you sure?",text:"Do you want to Deactivate this Footer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.websiteService.FooterIsActive(o,"").subscribe(s=>{this.delRes=s,"Footer Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),Z().fire({icon:"success",title:"Deactivate!",text:"Footer Is Deactivate Successfully."}))})}Active(e,o){Z().fire({title:"Are you sure?",text:"Do you want to Active this Footer!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.websiteService.FooterIsActive(o,"").subscribe(s=>{this.delRes=s,"Footer Is active Updated Successfully"==this.delRes.msg&&this.ngOnInit()}),Z().fire({icon:"success",title:"Active!",text:"Footer Is Active Successfully."}))})}ngOnInit(){this.websiteService.getFooter().subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(e=>{this.userDetails=e,this.userDetails?.permission?.map(n=>{"website"===n.content_type.app_label&&"footer"===n.content_type.model&&"add_footer"==n.codename?this.isAdd=n.codename:"website"===n.content_type.app_label&&"footer"===n.content_type.model&&"change_footer"==n.codename?this.isEdit=n.codename:"website"===n.content_type.app_label&&"footer"===n.content_type.model&&"delete_footer"==n.codename&&(this.isDelete=n.codename)})})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?o=>{o.isSelected=!1}:o=>{o.isSelected=!0})}deleteId(e){this.websiteService.deleteAddressStore(e).subscribe(o=>{this.delRes=o,"Colors Deleted successfully"==this.delRes.msg&&window.location.reload()})}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(o=>o.phone.toString().toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}generatePDF(){const e=new L.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Footer list",10,10),d()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Logo"},{header:"Phone"},{header:"Email"},{header:"Facebook"},{header:"Instagram"},{header:"Twitter"},{header:"Whatsapp"},{header:"Address"},{header:"Description"},{header:"Is Active"}]}),e.save("footer.pdf")}getVisibleDataFromTable(){const e=[],o=document.getElementById("mytable"),n=o.querySelector("thead tr"),s=o.querySelectorAll("tbody tr"),p=[];return n.querySelectorAll("th").forEach(m=>{const y=m.textContent.trim();"Is Active"!==y&&"Action"!==y&&p.push(y)}),e.push(p),s.forEach(m=>{const y=[];m.querySelectorAll("td").forEach(k=>{y.push(k.textContent.trim())}),e.push(y)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),o=r.P6.aoa_to_sheet(e),n=r.P6.book_new();r.P6.book_append_sheet(n,o,"Sheet1");const s=r.cW(n,{bookType:"xlsx",type:"array"}),p=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,h.saveAs)(p,"footer.xlsx")}printTable(){const e=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,p=e.cloneNode(!0),m=p.querySelector("th.thone:nth-child(11)");m&&m.remove();const y=p.querySelector("th.thone:last-child");y&&y.remove(),p.querySelectorAll("tr").forEach(S=>{const q=S.querySelector("td:nth-child(11)");q&&q.remove();const J=S.querySelector("td:last-child");J&&J.remove()});const tt=p.outerHTML,et="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+tt,ot=document.body.innerHTML;document.body.innerHTML=et,window.print(),document.body.innerHTML=ot}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(u.K),t.Y36(_._),t.Y36(g.qu),t.Y36(b._W),t.Y36(A.F0),t.Y36(v.J))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-footer-list"]],decls:81,vars:8,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...","placeholder","search",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"page-btn"],["routerLink","//website/addfooter",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3"],["alt","product",3,"src"],[3,"innerHTML"],[3,"ngModel","click","ngModelChange"],["class","me-3",3,"routerLink",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-3",3,"routerLink"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Footer list"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Footer"),t.qZA()(),t.YNc(6,w,4,0,"div",3),t.qZA(),t.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),t._UZ(13,"img",10),t.TgZ(14,"span"),t._UZ(15,"img",11),t.qZA()()(),t.TgZ(16,"div",12)(17,"a",13),t._UZ(18,"img",14),t.qZA(),t.TgZ(19,"div",15)(20,"label")(21,"input",16),t.NdJ("ngModelChange",function(s){return o.titlee=s})("ngModelChange",function(){return o.search()}),t.qZA()()()()(),t.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),t.NdJ("click",function(){return o.generatePDF()}),t._UZ(26,"img",19),t.qZA()(),t.TgZ(27,"li")(28,"a",20),t.NdJ("click",function(){return o.exportToExcel()}),t._UZ(29,"img",21),t.qZA()(),t.TgZ(30,"li")(31,"a",22),t.NdJ("click",function(){return o.printTable()}),t._UZ(32,"img",23),t.qZA()()()()(),t.TgZ(33,"div",24)(34,"table",25)(35,"thead")(36,"tr")(37,"th",26),t.NdJ("click",function(){return o.sort("id")}),t.TgZ(38,"label",27),t.NdJ("click",function(){return o.selectAll(o.initChecked)}),t.TgZ(39,"input",28),t.NdJ("ngModelChange",function(s){return o.allSelected=s})("change",function(){return o.selectAlll()}),t.qZA(),t._UZ(40,"span",29),t.qZA(),t._UZ(41,"i",30),t.qZA(),t.TgZ(42,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(43,"Sr. No."),t._UZ(44,"i",30),t.qZA(),t.TgZ(45,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(46,"Logo "),t._UZ(47,"i",30),t.qZA(),t.TgZ(48,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(49,"Phone "),t._UZ(50,"i",30),t.qZA(),t.TgZ(51,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(52,"Email "),t._UZ(53,"i",30),t.qZA(),t.TgZ(54,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(55,"Facebook "),t._UZ(56,"i",30),t.qZA(),t.TgZ(57,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(58,"Instagram"),t._UZ(59,"i",30),t.qZA(),t.TgZ(60,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(61,"Twitter "),t._UZ(62,"i",30),t.qZA(),t.TgZ(63,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(64,"Whatsapp "),t._UZ(65,"i",30),t.qZA(),t.TgZ(66,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(67,"Address "),t._UZ(68,"i",30),t.qZA(),t.TgZ(69,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(70,"Description "),t._UZ(71,"i",30),t.qZA(),t.TgZ(72,"th",26),t.NdJ("click",function(){return o.sort("id")}),t._uU(73,"Is Active "),t._UZ(74,"i",30),t.qZA(),t.YNc(75,I,3,0,"th",31),t.qZA()(),t.YNc(76,R,4,11,"tbody",32),t.YNc(77,Y,5,0,"tbody",32),t.qZA(),t.TgZ(78,"div",33),t.YNc(79,H,1,0,"mat-progress-bar",34),t.qZA(),t.YNc(80,Q,22,4,"div",35),t.qZA()()()),2&e&&(t.xp6(6),t.Q6J("ngIf",o.isAdd),t.xp6(15),t.Q6J("ngModel",o.titlee),t.xp6(18),t.Q6J("ngModel",o.allSelected),t.xp6(36),t.Q6J("ngIf",o.isEdit||o.isDelete),t.xp6(1),t.Q6J("ngIf",(null==o.tableData?null:o.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==o.tableData?null:o.tableData.length)&&!o.loader),t.xp6(2),t.Q6J("ngIf",o.loader),t.xp6(1),t.Q6J("ngIf",!o.loader))},dependencies:[f.sg,f.O5,A.yS,g.YN,g.Kr,g.Fj,g.Wl,g.EJ,g.JJ,g.On,C.pW,T.LS,M.Rr,T._s,U.T],styles:[".table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{padding:10px;color:#637381;font-weight:500;border-bottom:1px solid #E9ECEF;vertical-align:middle;white-space:pre-line}"]}),i})();var G=l(30597);const D=JSON.parse(localStorage.getItem("auth"));let K;D&&D.map(a=>{"website"===a.content_type.app_label&&"footer"===a.content_type.model&&"view_footer"==a.codename&&(K=a.codename)});const W=[{path:"",component:j,canActivate:[G.l],data:{allowedRoles:["view_footer"]}}];let z=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[A.Bz.forChild(W),A.Bz]}),i})();var V=l(8468);let X=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[f.ez,z,V.I]}),i})()},65415:(N,F,l)=>{l.d(F,{G:()=>x,T:()=>L});var f=l(94650),x=function(){function c(d,r,h){this.el=d,this.vcr=r,this.renderer=h,this.dtOptions={}}return c.prototype.ngOnInit=function(){var d=this;this.dtTrigger?this.dtTrigger.subscribe(function(r){d.displayTable(r)}):this.displayTable(null)},c.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},c.prototype.displayTable=function(d){var r=this;d&&(this.dtOptions=d),this.dtInstance=new Promise(function(h,t){Promise.resolve(r.dtOptions).then(function(u){0===Object.keys(u).length&&0===$("tbody tr",r.el.nativeElement).length?t("Both the table and dtOptions cannot be empty"):setTimeout(function(){var g={rowCallback:function(b,v,C){if(u.columns){var T=u.columns;r.applyNgPipeTransform(b,T),r.applyNgRefTemplate(b,T,v)}u.rowCallback&&u.rowCallback(b,v,C)}};g=Object.assign({},u,g),r.dt=$(r.el.nativeElement).DataTable(g),h(r.dt)})})})},c.prototype.applyNgPipeTransform=function(d,r){r.filter(function(t){return t.ngPipeInstance&&!t.ngTemplateRef}).forEach(function(t){var u=t.ngPipeInstance,_=t.ngPipeArgs||[],g=r.findIndex(function(T){return T.data===t.data}),b=d.childNodes.item(g),v=$(b).text(),C=u.transform.apply(u,function(c,d,r){if(r||2===arguments.length)for(var u,h=0,t=d.length;h<t;h++)(u||!(h in d))&&(u||(u=Array.prototype.slice.call(d,0,h)),u[h]=d[h]);return c.concat(u||Array.prototype.slice.call(d))}([v],_,!1));$(b).text(C)})},c.prototype.applyNgRefTemplate=function(d,r,h){var t=this;r.filter(function(_){return _.ngTemplateRef&&!_.ngPipeInstance}).forEach(function(_){var g=_.ngTemplateRef,b=g.ref,v=g.context,C=r.findIndex(function(w){return w.data===_.data}),T=d.childNodes.item(C);$(T).html("");var M=Object.assign({},v,v?.userData,{adtData:h}),U=t.vcr.createEmbeddedView(b,M);t.renderer.appendChild(T,U.rootNodes[0])})},c.\u0275fac=function(r){return new(r||c)(f.Y36(f.SBq),f.Y36(f.s_b),f.Y36(f.Qsj))},c.\u0275dir=f.lG2({type:c,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),c}(),Z=l(36895),L=function(){function c(){}return c.forRoot=function(){return{ngModule:c}},c.\u0275fac=function(r){return new(r||c)},c.\u0275mod=f.oAB({type:c}),c.\u0275inj=f.cJS({imports:[Z.ez]}),c}()}}]);