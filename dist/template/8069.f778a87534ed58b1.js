"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8069],{96329:(g,p,o)=>{o.r(p),o.d(p,{EmployeedetailsModule:()=>c});var n=o(36895),s=o(4392),e=o(94650),u=o(80927);const m=function(l,i,t){return{"bg-lightgreen":l,"bg-lightred":i,"bg-lightyellow":t}};function d(l,i){if(1&l&&(e.TgZ(0,"div",7)(1,"div",8)(2,"div",9)(3,"div",10)(4,"ul",11)(5,"li")(6,"h4"),e._uU(7,"Name"),e.qZA(),e.TgZ(8,"h6"),e._uU(9),e.qZA()(),e.TgZ(10,"li")(11,"h4"),e._uU(12,"Fathers name"),e.qZA(),e.TgZ(13,"h6"),e._uU(14),e.qZA()(),e.TgZ(15,"li")(16,"h4"),e._uU(17,"Date of Birth"),e.qZA(),e.TgZ(18,"h6"),e._uU(19),e.qZA()(),e.TgZ(20,"li")(21,"h4"),e._uU(22,"Phone"),e.qZA(),e.TgZ(23,"h6"),e._uU(24),e.qZA()(),e.TgZ(25,"li")(26,"h4"),e._uU(27,"Email"),e.qZA(),e.TgZ(28,"h6"),e._uU(29),e.qZA()(),e.TgZ(30,"li")(31,"h4"),e._uU(32,"Anniversary"),e.qZA(),e.TgZ(33,"h6"),e._uU(34),e.qZA()(),e.TgZ(35,"li")(36,"h4"),e._uU(37,"Attendance"),e.qZA(),e.TgZ(38,"h6"),e._uU(39),e.qZA()(),e.TgZ(40,"li")(41,"h4"),e._uU(42,"Employee id"),e.qZA(),e.TgZ(43,"h6"),e._uU(44),e.qZA()(),e.TgZ(45,"li")(46,"h4"),e._uU(47,"Is Salesman"),e.qZA(),e.TgZ(48,"h6"),e._uU(49),e.qZA()(),e.TgZ(50,"li")(51,"h4"),e._uU(52,"Country"),e.qZA(),e.TgZ(53,"h6"),e._uU(54),e.qZA()(),e.TgZ(55,"li")(56,"h4"),e._uU(57,"State"),e.qZA(),e.TgZ(58,"h6"),e._uU(59),e.qZA()(),e.TgZ(60,"li")(61,"h4"),e._uU(62,"Pincode"),e.qZA(),e.TgZ(63,"h6"),e._uU(64),e.qZA()(),e.TgZ(65,"li")(66,"h4"),e._uU(67,"Address"),e.qZA(),e.TgZ(68,"h6"),e._uU(69),e.qZA()()()()(),e.TgZ(70,"div",12)(71,"p",13),e._uU(72,"Is Active : "),e.qZA(),e.TgZ(73,"span",14),e._uU(74),e.qZA()()()()),2&l){const t=e.oxw();e.xp6(9),e.Oqu(t.employeeDetails.name),e.xp6(5),e.Oqu(t.employeeDetails.fathers_name),e.xp6(5),e.Oqu(t.employeeDetails.dob),e.xp6(5),e.Oqu(t.employeeDetails.mobile),e.xp6(5),e.Oqu(t.employeeDetails.email),e.xp6(5),e.Oqu(t.employeeDetails.anniversary),e.xp6(5),e.Oqu(t.employeeDetails.attendance),e.xp6(5),e.Oqu(t.employeeDetails.employee_id),e.xp6(5),e.Oqu(t.employeeDetails.is_salesman),e.xp6(5),e.Oqu(t.employeeDetails.country.country_name),e.xp6(5),e.Oqu(t.employeeDetails.state.state),e.xp6(5),e.Oqu(t.employeeDetails.pincode),e.xp6(5),e.Oqu(t.employeeDetails.address),e.xp6(4),e.Q6J("ngClass",e.kEZ(15,m,!0===t.employeeDetails.is_active,!1===t.employeeDetails.is_active,"Partial"===t.employeeDetails.is_active)),e.xp6(1),e.Oqu(t.employeeDetails.is_active)}}const Z=[{path:"",component:(()=>{class l{constructor(t,a){this.coreService=t,this.Arout=a}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.coreService.getEmployeeById(this.id).subscribe(t=>{this.employeeDetails=t})}}return l.\u0275fac=function(t){return new(t||l)(e.Y36(u.p),e.Y36(s.gz))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-employeedetails"]],decls:12,vars:2,consts:[[1,"page-header"],[1,"page-title"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[1,"row"],["class","col-lg-12 col-sm-12",4,"ngIf"],[1,"col-lg-12","col-sm-12"],[1,"card"],[1,"card-body"],[1,"productdetails"],[1,"product-bar"],[1,"d-flex","align-items-center","mx-4"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,">Employee Details"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Full details of a Employee"),e.qZA()(),e.TgZ(6,"div",2)(7,"a",3),e._UZ(8,"img",4),e._uU(9,"Edit Employee "),e.qZA()()(),e.TgZ(10,"div",5),e.YNc(11,d,75,19,"div",6),e.qZA()),2&t&&(e.xp6(7),e.MGl("routerLink","//masters/editemployee/",a.employeeDetails.id,""),e.xp6(4),e.Q6J("ngIf",a.employeeDetails))},dependencies:[n.mk,n.O5,s.yS]}),l})()}];let r=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[s.Bz.forChild(Z),s.Bz]}),l})(),c=(()=>{class l{}return l.\u0275fac=function(t){return new(t||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[n.ez,r]}),l})()}}]);