"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[27078],{27078:(J,p,a)=>{a.r(p),a.d(p,{CategoryDetailsModule:()=>q});var r=a(36895),c=a(4392),_=a(92340),t=a(94650),h=a(80927),d=a(3848),m=a(97392),g=a(24006),u=a(54333),y=a(54040);function f(i,l){if(1&i&&(t.ynx(0),t.TgZ(1,"tr")(2,"td",19),t._uU(3),t.qZA(),t.TgZ(4,"td",19),t._uU(5),t.qZA(),t.TgZ(6,"td",19),t._uU(7),t.qZA(),t.TgZ(8,"td",19),t._uU(9),t.ALo(10,"date"),t.qZA()(),t.BQk()),2&i){const e=l.$implicit,o=l.index;t.xp6(3),t.Oqu(o+1),t.xp6(2),t.Oqu(null==e?null:e.userid),t.xp6(2),t.Oqu(null==e?null:e.operation_type),t.xp6(2),t.Oqu(t.xi3(10,4,null==e?null:e.date_time,"dd-MM-yyyy hh:mm:ss a"))}}function v(i,l){1&i&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",46)(3,"p",47),t._uU(4,"Data not available"),t.qZA()()()())}const Z=function(i,l){return{itemsPerPage:i,currentPage:l}};function C(i,l){if(1&i){const e=t.EpF();t.TgZ(0,"mat-tab",25)(1,"div",1)(2,"div",2)(3,"div",16)(4,"table",26)(5,"thead")(6,"tr")(7,"th",27),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.sort("id"))}),t._uU(8,"# "),t._UZ(9,"i",28),t.qZA(),t.TgZ(10,"th",27),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.sort("id"))}),t._uU(11,"User "),t._UZ(12,"i",28),t.qZA(),t.TgZ(13,"th",27),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.sort("id"))}),t._uU(14,"Operation Type "),t._UZ(15,"i",28),t.qZA(),t.TgZ(16,"th",27),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.sort("id"))}),t._uU(17,"Date Time "),t._UZ(18,"i",28),t.qZA()()(),t.TgZ(19,"tbody"),t.YNc(20,f,11,7,"ng-container",29),t.ALo(21,"paginate"),t.ALo(22,"orderBy"),t.qZA(),t.YNc(23,v,5,0,"tbody",30),t.qZA(),t.TgZ(24,"div",31)(25,"div",32)(26,"div",33),t._uU(27," Show per page "),t.TgZ(28,"select",34,35),t.NdJ("ngModelChange",function(n){t.CHM(e);const s=t.oxw(2);return t.KtG(s.itemsPerPage=n)})("change",function(){t.CHM(e);const n=t.MAs(29),s=t.oxw(2);return t.KtG(s.changePg(n.value))}),t.TgZ(30,"option",36),t._uU(31,"10"),t.qZA(),t.TgZ(32,"option",37),t._uU(33,"20"),t.qZA(),t.TgZ(34,"option",38),t._uU(35,"30"),t.qZA(),t.TgZ(36,"option",39),t._uU(37,"50"),t.qZA(),t.TgZ(38,"option",40),t._uU(39,"100"),t.qZA(),t.TgZ(40,"option",41),t._uU(41,"All"),t.qZA()()()(),t.TgZ(42,"div",42)(43,"div",43)(44,"pagination-controls",44),t.NdJ("pageChange",function(n){t.CHM(e);const s=t.oxw(2);return t.KtG(s.p=n)}),t.qZA(),t.TgZ(45,"div",45),t._uU(46),t.qZA()()()()()()()()}if(2&i){const e=t.oxw(2);t.xp6(20),t.Q6J("ngForOf",t.xi3(21,6,t.Dn7(22,9,e.filteredData,e.key,e.reverse),t.WLB(13,Z,e.itemsPerPage,e.p))),t.xp6(3),t.Q6J("ngIf",0==(null==e.filteredData?null:e.filteredData.length)),t.xp6(5),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",e.itemsPerPage," of ",e.itemsPerPage," entries")}}const D=function(i,l,e){return{"bg-lightgreen":i,"bg-lightred":l,"bg-lightyellow":e}};function b(i,l){if(1&i&&(t.TgZ(0,"div",11)(1,"div",12)(2,"mat-tab-group",13,14)(4,"mat-tab",15)(5,"div",16)(6,"table",17)(7,"tbody")(8,"tr")(9,"td",18),t._uU(10,"Title"),t.qZA(),t.TgZ(11,"td",19),t._uU(12),t.qZA()(),t.TgZ(13,"tr")(14,"td",18),t._uU(15,"Category Image"),t.qZA(),t.TgZ(16,"td",19),t._UZ(17,"img",20),t.qZA()()()()(),t.TgZ(18,"div",21)(19,"p",22),t._uU(20,"Is Active : "),t.qZA(),t.TgZ(21,"span",23),t._uU(22),t.qZA()()(),t.YNc(23,C,47,16,"mat-tab",24),t.qZA()()()),2&i){const e=t.oxw();t.xp6(12),t.Oqu(null==e.employeeDetails?null:e.employeeDetails.title),t.xp6(5),t.Q6J("src",e.apiUrl+(null==e.employeeDetails?null:e.employeeDetails.image),t.LSH),t.xp6(4),t.Q6J("ngClass",t.kEZ(5,D,!0===(null==e.employeeDetails?null:e.employeeDetails.is_active),!1===(null==e.employeeDetails?null:e.employeeDetails.is_active),"Partial"===(null==e.employeeDetails?null:e.employeeDetails.is_active))),t.xp6(1),t.Oqu(null==e.employeeDetails?null:e.employeeDetails.is_active),t.xp6(1),t.Q6J("ngIf",(null==e.employeeDetails||null==e.employeeDetails.logs?null:e.employeeDetails.logs.length)>0)}}const x=[{path:"",component:(()=>{class i{constructor(e,o,n,s){this.coreService=e,this.Arout=o,this.location=n,this.rout=s,this.apiUrl=_.N.api,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.coreService.getCategoryById(this.id).subscribe(e=>{e.map(o=>{o.id==this.id&&(this.employeeDetails=o,this.filteredData=this.employeeDetails?.logs.slice(),this.filterData())})})}goBack(){this.location.back()}sort(e){this.key=e,this.reverse=!this.reverse}filterData(){let e=this.employeeDetails?.logs.slice();this.filterOpertion&&(e=e.filter(o=>o?.operation_type===this.filterOpertion)),this.filteredData=e}clearFilter(){this.filterOpertion=null,this.filterData()}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.filteredData.length)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(h.p),t.Y36(c.gz),t.Y36(r.Ye),t.Y36(c.F0))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-category-details"]],decls:16,vars:1,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],["routerLink","//product/categorylist",1,"btn","btn-added"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["class","company-details-card card",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],["animationDuration","0ms"],["tabGroup",""],["label","General Details"],[1,"table-responsive"],[1,"table"],[1,"th"],[1,"td"],["alt","",3,"src"],[1,"d-flex","align-items-center","mx-4"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"],["label","Logs",4,"ngIf"],["label","Logs"],[1,"table","datanew"],[1,"th",3,"click"],[1,"fa","fa-sort"],[4,"ngFor","ngForOf"],[4,"ngIf"],[1,"row"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["colspan","10"],[1,"center-textt"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),t.NdJ("click",function(){return o.goBack()}),t.TgZ(6,"mat-icon",6),t._uU(7,"keyboard_backspace"),t.qZA(),t._uU(8,"Back to Category"),t.qZA(),t.TgZ(9,"h4"),t._uU(10,"Full details of a Category"),t.qZA()(),t.TgZ(11,"div",7)(12,"a",8),t._UZ(13,"img",9),t._uU(14,"Edit Category "),t.qZA()()(),t.YNc(15,b,24,9,"div",10),t.qZA()()()),2&e&&(t.xp6(15),t.Q6J("ngIf",o.employeeDetails))},dependencies:[r.mk,r.sg,r.O5,c.yS,d.SP,d.uX,m.Hw,g.YN,g.Kr,g.EJ,g.JJ,g.On,u.LS,r.uU,u._s,y.T],styles:[".th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}"]}),i})()}];let T=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[c.Bz.forChild(x),c.Bz]}),i})();var A=a(95113),U=a(56709),P=a(90455),M=a(8468);let q=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[r.ez,T,d.Nh,m.Ps,A.LD,U.p9,P.rP,g.u5,M.I]}),i})()}}]);