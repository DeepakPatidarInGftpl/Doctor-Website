"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4030],{54030:(A,s,o)=>{o.r(s),o.d(s,{AccountdetailsModule:()=>r});var u=o(36895),i=o(88996),e=o(94650),a=o(80927);const p=function(l,n,t){return{"bg-lightgreen":l,"bg-lightred":n,"bg-lightyellow":t}};function d(l,n){if(1&l&&(e.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10)(4,"ul",11)(5,"li")(6,"h4"),e._uU(7,"Title"),e.qZA(),e.TgZ(8,"h6"),e._uU(9),e.qZA()(),e.TgZ(10,"li")(11,"h4"),e._uU(12,"Opening Balance"),e.qZA(),e.TgZ(13,"h6"),e._uU(14),e.qZA()(),e.TgZ(15,"li")(16,"h4"),e._uU(17,"Opening Balance Type"),e.qZA(),e.TgZ(18,"h6"),e._uU(19),e.qZA()(),e.TgZ(20,"li")(21,"h4"),e._uU(22,"Account Type"),e.qZA(),e.TgZ(23,"h6"),e._uU(24),e.qZA()(),e.TgZ(25,"li")(26,"h4"),e._uU(27,"Account Sub Type"),e.qZA(),e.TgZ(28,"h6"),e._uU(29),e.qZA()(),e.TgZ(30,"li")(31,"h4"),e._uU(32,"Account ID"),e.qZA(),e.TgZ(33,"h6"),e._uU(34),e.qZA()()()()(),e.TgZ(35,"div",12)(36,"p",13),e._uU(37,"Is Active : "),e.qZA(),e.TgZ(38,"span",14),e._uU(39),e.qZA()()()()),2&l){const t=e.oxw();e.xp6(9),e.Oqu(null==t.employeeDetails?null:t.employeeDetails.title),e.xp6(5),e.Oqu(null==t.employeeDetails?null:t.employeeDetails.opening_balance),e.xp6(5),e.Oqu(null==t.employeeDetails?null:t.employeeDetails.opening_balance_type),e.xp6(5),e.Oqu(null==t.employeeDetails?null:t.employeeDetails.accounts_type),e.xp6(5),e.Oqu(null==t.employeeDetails||null==t.employeeDetails.account_subtype?null:t.employeeDetails.account_subtype.title),e.xp6(5),e.Oqu(null==t.employeeDetails?null:t.employeeDetails.account_id),e.xp6(4),e.Q6J("ngClass",e.kEZ(8,p,!0===t.employeeDetails.is_active,!1===t.employeeDetails.is_active,"Partial"===t.employeeDetails.is_active)),e.xp6(1),e.Oqu(t.employeeDetails.is_active)}}const m=[{path:"",component:(()=>{class l{constructor(t,c){this.coreService=t,this.Arout=c}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.coreService.getAccountById(this.id).subscribe(t=>{this.employeeDetails=t})}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(a.p),e.Y36(i.gz))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-accountdetails"]],decls:12,vars:2,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"row"],["class","col-lg-12 col-sm-12",4,"ngIf"],[1,"col-lg-12","col-sm-12"],[1,"card"],[1,"card-body"],[1,"productdetails"],[1,"product-bar"],[1,"d-flex","align-items-center","mx-4"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"]],template:function(t,c){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Account Details"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Full details of a Account"),e.qZA()(),e.TgZ(6,"div",2)(7,"a",3),e._UZ(8,"img",4),e._uU(9,"Edit Account "),e.qZA()()(),e.TgZ(10,"div",5),e.YNc(11,d,40,12,"div",6),e.qZA()),2&t&&(e.xp6(7),e.MGl("routerLink","//account/editaccount/",c.employeeDetails.id,""),e.xp6(4),e.Q6J("ngIf",c.employeeDetails))},dependencies:[u.mk,u.O5,i.yS]}),l})()}];let g=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[i.Bz.forChild(m),i.Bz]}),l})(),r=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[u.ez,g]}),l})()}}]);