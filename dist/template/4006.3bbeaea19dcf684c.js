"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4006],{4006:(S,c,l)=>{l.r(c),l.d(c,{SizeChartDetailsModule:()=>z});var s=l(36895),n=l(4392),e=l(94650),u=l(80927),r=l(3848),m=l(97392);const h=function(i,a,t){return{"bg-lightgreen":i,"bg-lightred":a,"bg-lightyellow":t}};function p(i,a){if(1&i&&(e.TgZ(0,"div",11)(1,"div",12)(2,"mat-tab-group",13,14)(4,"mat-tab",15)(5,"div",16)(6,"table",17)(7,"tbody")(8,"tr")(9,"td",18),e._uU(10,"Brand Name "),e.qZA(),e.TgZ(11,"td",19),e._uU(12),e.qZA()(),e.TgZ(13,"tr")(14,"td",18),e._uU(15,"SubCategory Name"),e.qZA(),e.TgZ(16,"td",19),e._uU(17),e.qZA()()()()(),e.TgZ(18,"div",20)(19,"p",21),e._uU(20,"Is Active : "),e.qZA(),e.TgZ(21,"span",22),e._uU(22),e.qZA()()(),e.TgZ(23,"mat-tab",23)(24,"div",1),e._UZ(25,"div",2),e.qZA()()()()()),2&i){const t=e.oxw();e.xp6(12),e.Oqu(null==t.employeeDetails||null==t.employeeDetails.brand?null:t.employeeDetails.brand.title),e.xp6(5),e.Oqu(null==t.employeeDetails||null==t.employeeDetails.subcategory?null:t.employeeDetails.subcategory.title),e.xp6(4),e.Q6J("ngClass",e.kEZ(4,h,!0===(null==t.employeeDetails?null:t.employeeDetails.is_active),!1===(null==t.employeeDetails?null:t.employeeDetails.is_active),"Partial"===(null==t.employeeDetails?null:t.employeeDetails.is_active))),e.xp6(1),e.Oqu(null==t.employeeDetails?null:t.employeeDetails.is_active)}}const g=[{path:"",component:(()=>{class i{constructor(t,o,d,Z){this.coreService=t,this.Arout=o,this.location=d,this.router=Z,this.key="id",this.reverse=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.coreService.getsizeChartById(this.id).subscribe(t=>{console.log(t),t.map(o=>{o.id==this.id&&(this.employeeDetails=o)})})}goBack(){this.location.back()}sort(t){this.key=t,this.reverse=!this.reverse}navigate(){this.router.navigate(["//product/size-chart"],{state:{id:this.id}})}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(u.p),e.Y36(n.gz),e.Y36(s.Ye),e.Y36(n.F0))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-size-chart-details"]],decls:16,vars:1,consts:[[1,"row","bg"],[1,"card"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"subhead-color",3,"click"],[2,"vertical-align","middle"],[1,"page-btn"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/edit.svg","alt","img",1,"me-1"],["class","company-details-card card",4,"ngIf"],[1,"company-details-card","card"],[1,"sub-card","row"],["animationDuration","0ms"],["tabGroup",""],["label","General Details"],[1,"table-responsive"],[1,"table"],[1,"th"],[1,"td"],[1,"d-flex","align-items-center","mx-4","mt-3"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"],["label","Logs"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h6",5),e.NdJ("click",function(){return o.goBack()}),e.TgZ(6,"mat-icon",6),e._uU(7,"keyboard_backspace"),e.qZA(),e._uU(8,"Back to Size Chart"),e.qZA(),e.TgZ(9,"h4"),e._uU(10,"Full details of a Size Chart"),e.qZA()(),e.TgZ(11,"div",7)(12,"a",8),e.NdJ("click",function(){return o.navigate()}),e._UZ(13,"img",9),e._uU(14,"Edit Size Chart "),e.qZA()()(),e.YNc(15,p,26,8,"div",10),e.qZA()()()),2&t&&(e.xp6(15),e.Q6J("ngIf",o.employeeDetails))},dependencies:[s.mk,s.O5,r.SP,r.uX,m.Hw],styles:[".th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}"]}),i})()}];let v=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[n.Bz.forChild(g),n.Bz]}),i})();var f=l(24006),y=l(56709),b=l(95113),C=l(90455),D=l(8468);let z=(()=>{class i{}return i.\u0275fac=function(t){return new(t||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[s.ez,v,r.Nh,m.Ps,b.LD,y.p9,C.rP,f.u5,D.I]}),i})()}}]);