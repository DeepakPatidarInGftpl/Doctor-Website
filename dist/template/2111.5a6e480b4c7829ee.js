"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2111],{92111:(A,h,r)=>{r.r(h),r.d(h,{BatchVariantProductModule:()=>F});var s=r(36895),c=r(88996),i=r(24006),e=r(94650),y=r(80927),C=r(97185);function d(n,o){1&n&&(e.TgZ(0,"span",34),e._uU(1,"Enter MRP "),e.qZA())}function b(n,o){1&n&&(e.TgZ(0,"span",34),e._uU(1,"Enter Cost Price"),e.qZA())}function u(n,o){1&n&&(e.TgZ(0,"span",34),e._uU(1,"Enter Selling Price Online "),e.qZA())}function f(n,o){1&n&&(e.TgZ(0,"span",34),e._uU(1,"Enter Selling Price Offline "),e.qZA())}function _(n,o){1&n&&(e.TgZ(0,"span",34),e._uU(1,"Enter Selling Price Vendor "),e.qZA())}function p(n,o){1&n&&(e.TgZ(0,"span",34),e._uU(1,"Enter Selling Price Employee "),e.qZA())}function g(n,o){1&n&&(e.TgZ(0,"span",34),e._uU(1,"Enter Stock"),e.qZA())}function m(n,o){1&n&&(e.TgZ(0,"span",34),e._uU(1,"Enter opening stock"),e.qZA())}function v(n,o){1&n&&(e.TgZ(0,"span",34),e._uU(1,"Enter Minimum Stock Threshold"),e.qZA())}function Z(n,o){1&n&&(e.TgZ(0,"span",34),e._uU(1,"Enter Max Order Quantity"),e.qZA())}function I(n,o){1&n&&(e.TgZ(0,"span",34),e._uU(1,"Enter discount (ex:0-100)"),e.qZA())}function P(n,o){1&n&&(e.TgZ(0,"span",34),e._uU(1,"Enter Enter discount (ex:0-100)"),e.qZA())}function U(n,o){1&n&&(e.TgZ(0,"span",35),e._uU(1,"Select Employee Incentive Type"),e.qZA())}function N(n,o){1&n&&(e.TgZ(0,"span",36),e._uU(1,"Employee Incentive"),e.qZA())}function k(n,o){1&n&&(e.TgZ(0,"button",37),e._uU(1,"Submit"),e.qZA())}function V(n,o){1&n&&(e.TgZ(0,"button",38),e._UZ(1,"span",39),e._uU(2,"Submit"),e.qZA())}const a=function(n){return{"is-invalid":n}},M=[{path:"",component:(()=>{class n{constructor(l,t,T,q,E,Q){this.coreService=l,this.fb=t,this.toastr=T,this.router=q,this.Arout=E,this.location=Q,this.p=1,this.pageSize=5,this.itemsPerPage=5,this.loader=!1}get f(){return this.batchForm.controls}ngOnInit(){this.batchForm=this.fb.group({mrp:new i.NI(0,[i.kI.required]),cost_price:new i.NI(0,i.kI.pattern(/^[0-9]*$/)),selling_price_online:new i.NI(0,[i.kI.pattern(/^[0-9]*$/)]),selling_price_offline:new i.NI(0,i.kI.pattern(/^[0-9]*$/)),selling_price_dealer:new i.NI(0,[i.kI.pattern(/^[0-9]*$/)]),selling_price_employee:new i.NI(0,i.kI.pattern(/^[0-9]*$/)),stock:new i.NI(0,[i.kI.required,i.kI.pattern(/^[0-9]*$/)]),opening_stock:new i.NI(0,[i.kI.required,i.kI.pattern(/^[0-9]*$/)]),minimum_stock_threshold:new i.NI(0,[i.kI.required,i.kI.pattern(/^[0-9]*$/)]),max_order_quantity:new i.NI(0,[i.kI.pattern(/^[0-9]*$/)]),discount:new i.NI(0,[i.kI.pattern(/^(100|[0-9]{1,2})$/)]),additional_discount:new i.NI(0,[i.kI.pattern(/^(100|[0-9]{1,2})$/)]),employee_incentive:new i.NI(0,[i.kI.pattern(/^(100|[0-9]{1,2})$/)]),employee_incentive_type:"%"}),this.id=+this.Arout.snapshot.paramMap.get("id")}submit(){this.batchForm.valid?(this.loader=!0,this.coreService.addBatch(this.batchForm.value,this.id).subscribe(l=>{this.addRes=l,"True"==this.addRes.sucess?(this.loader=!1,this.toastr.success(this.addRes.msg),this.batchForm.reset(),this.location.back()):this.loader=!1},l=>{this.loader=!1})):(this.batchForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get mrp(){return this.batchForm.get("mrp")}get cost_price(){return this.batchForm.get("cost_price")}get selling_price_offline(){return this.batchForm.get("selling_price_offline")}get selling_price_online(){return this.batchForm.get("selling_price_online")}get selling_price_vendor(){return this.batchForm.get("selling_price_dealer")}get selling_price_employee(){return this.batchForm.get("selling_price_employee")}get stock(){return this.batchForm.get("stock")}get minimum_stock_threshold(){return this.batchForm.get("minimum_stock_threshold")}get max_order_quantity(){return this.batchForm.get("max_order_quantity")}get variant(){return this.batchForm.get("variant")}get opening_stock(){return this.batchForm.get("opening_stock")}get discount(){return this.batchForm.get("discount")}get additional_discount(){return this.batchForm.get("additional_discount")}get employee_incentive(){return this.batchForm.get("employee_incentive")}get employee_incentive_type(){return this.batchForm.get("employee_incentive_type")}}return n.\u0275fac=function(l){return new(l||n)(e.Y36(y.p),e.Y36(i.qu),e.Y36(C._W),e.Y36(c.F0),e.Y36(c.gz),e.Y36(s.Ye))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-batch-variant-product"]],decls:105,vars:65,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","mrp","id","mrp","placeholder","0",3,"ngClass","ngModel","ngModelChange"],["class","text-danger",4,"ngIf"],["type","text","formControlName","cost_price","id","cost_price","placeholder","0",3,"ngClass"],["type","text","formControlName","selling_price_online","id","selling_price_online","placeholder","0",3,"ngModel","ngClass"],["type","text","formControlName","selling_price_offline","id","selling_price_offline","placeholder","0",3,"ngModel","ngClass"],["type","text","formControlName","selling_price_dealer","id","selling_price_dealer","placeholder","0",3,"ngModel","ngClass"],["type","text","formControlName","selling_price_employee","id","selling_price_employee","placeholder","0",3,"ngModel","ngClass"],["type","text","formControlName","stock","id","stock","placeholder","0",3,"ngClass"],["type","text","formControlName","opening_stock","id","opening_stock","placeholder","0",3,"ngClass"],["type","text","formControlName","minimum_stock_threshold","id","minimum_stock_threshold","placeholder","0",3,"ngClass"],["type","text","formControlName","max_order_quantity","id","max_order_quantity","placeholder","0",3,"ngClass"],["type","text","formControlName","discount","id","discount","placeholder","0",3,"ngClass"],["type","text","formControlName","additional_discount","id","additional_discount","placeholder","0",3,"ngClass"],[1,"form-group","row"],[1,"col-lg-12"],[1,"input-group"],["formControlName","employee_incentive_type","required","","id","employee_incentive_type",1,"border","hov",3,"ngClass"],["value","","selected","","disabled","",1,"unhov"],["value","%",1,"unhov"],["value","Rs",1,"unhov"],["class","text-danger d-block",4,"ngIf"],["type","text","formControlName","employee_incentive","id","em-ployee_incentive",3,"ngClass"],["class","text-danger ml-5 pl-5",4,"ngIf"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"btn","btn-cancel",3,"routerLink"],[1,"text-danger"],[1,"text-danger","d-block"],[1,"text-danger","ml-5","pl-5"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(l,t){1&l&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add Batch"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Batch "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"MRP*"),e.qZA(),e.TgZ(14,"input",8),e.NdJ("ngModelChange",function(q){return t.mrpN=q}),e.qZA(),e.YNc(15,d,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Cost Price"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,b,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Selling Price Online"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,u,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Selling Price Offline"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,f,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"Selling Price Dealer"),e.qZA(),e._UZ(38,"input",13),e.YNc(39,_,2,0,"span",9),e.qZA()(),e.TgZ(40,"div",6)(41,"div",7)(42,"label"),e._uU(43,"Selling Price Employee"),e.qZA(),e._UZ(44,"input",14),e.YNc(45,p,2,0,"span",9),e.qZA()(),e.TgZ(46,"div",6)(47,"div",7)(48,"label"),e._uU(49,"Stock*"),e.qZA(),e._UZ(50,"input",15),e.YNc(51,g,2,0,"span",9),e.qZA()(),e.TgZ(52,"div",6)(53,"div",7)(54,"label"),e._uU(55,"Opening Stock*"),e.qZA(),e._UZ(56,"input",16),e.YNc(57,m,2,0,"span",9),e.qZA()(),e.TgZ(58,"div",6)(59,"div",7)(60,"label"),e._uU(61,"Minimum Stock Threshold*"),e.qZA(),e._UZ(62,"input",17),e.YNc(63,v,2,0,"span",9),e.qZA()(),e.TgZ(64,"div",6)(65,"div",7)(66,"label"),e._uU(67,"Max Order Quantity"),e.qZA(),e._UZ(68,"input",18),e.YNc(69,Z,2,0,"span",9),e.qZA()(),e.TgZ(70,"div",6)(71,"div",7)(72,"label"),e._uU(73,"Discount %"),e.qZA(),e._UZ(74,"input",19),e.YNc(75,I,2,0,"span",9),e.qZA()(),e.TgZ(76,"div",6)(77,"div",7)(78,"label"),e._uU(79,"Additional Discount %"),e.qZA(),e._UZ(80,"input",20),e.YNc(81,P,2,0,"span",9),e.qZA()(),e.TgZ(82,"div",6)(83,"div",21)(84,"div",22)(85,"label"),e._uU(86,"Employee Incentive*"),e.qZA(),e.TgZ(87,"div",23)(88,"div")(89,"select",24)(90,"option",25),e._uU(91,"Employee Incentive Type"),e.qZA(),e.TgZ(92,"option",26),e._uU(93,"%"),e.qZA(),e.TgZ(94,"option",27),e._uU(95,"Rs"),e.qZA()(),e.YNc(96,U,2,0,"span",28),e.qZA(),e.TgZ(97,"div"),e._UZ(98,"input",29),e.YNc(99,N,2,0,"span",30),e.qZA()()()()(),e.TgZ(100,"div",22),e.YNc(101,k,2,0,"button",31),e.YNc(102,V,3,0,"button",32),e.TgZ(103,"a",33),e._uU(104,"Cancel"),e.qZA()()()()()()),2&l&&(e.xp6(8),e.Q6J("formGroup",t.batchForm),e.xp6(6),e.Q6J("ngClass",e.VKq(37,a,t.f.mrp.touched&&t.f.mrp.invalid))("ngModel",t.mrpN),e.xp6(1),e.Q6J("ngIf",t.mrp&&t.mrp.invalid&&t.mrp.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(39,a,t.f.cost_price.touched&&t.f.cost_price.invalid)),e.xp6(1),e.Q6J("ngIf",t.cost_price&&t.cost_price.invalid&&t.cost_price.touched),e.xp6(5),e.Q6J("ngModel",t.mrpN)("ngClass",e.VKq(41,a,t.f.selling_price_online.touched&&t.f.selling_price_online.invalid)),e.xp6(1),e.Q6J("ngIf",t.selling_price_online&&t.selling_price_online.invalid&&t.selling_price_online.touched),e.xp6(5),e.Q6J("ngModel",t.mrpN)("ngClass",e.VKq(43,a,t.f.selling_price_offline.touched&&t.f.selling_price_offline.invalid)),e.xp6(1),e.Q6J("ngIf",t.selling_price_offline&&t.selling_price_offline.invalid&&t.selling_price_offline.touched),e.xp6(5),e.Q6J("ngModel",t.mrpN)("ngClass",e.VKq(45,a,t.f.selling_price_dealer.touched&&t.f.selling_price_dealer.invalid)),e.xp6(1),e.Q6J("ngIf",t.selling_price_vendor&&t.selling_price_vendor.invalid&&t.selling_price_vendor.touched),e.xp6(5),e.Q6J("ngModel",t.mrpN)("ngClass",e.VKq(47,a,t.f.selling_price_employee.touched&&t.f.selling_price_employee.invalid)),e.xp6(1),e.Q6J("ngIf",t.selling_price_employee&&t.selling_price_employee.invalid&&t.selling_price_employee.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(49,a,t.f.stock.touched&&t.f.stock.invalid)),e.xp6(1),e.Q6J("ngIf",t.stock&&t.stock.invalid&&t.stock.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(51,a,t.f.opening_stock.touched&&t.f.opening_stock.invalid)),e.xp6(1),e.Q6J("ngIf",t.opening_stock&&t.opening_stock.invalid&&t.opening_stock.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(53,a,t.f.minimum_stock_threshold.touched&&t.f.minimum_stock_threshold.invalid)),e.xp6(1),e.Q6J("ngIf",t.minimum_stock_threshold&&t.minimum_stock_threshold.invalid&&t.minimum_stock_threshold.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(55,a,t.f.max_order_quantity.touched&&t.f.max_order_quantity.invalid)),e.xp6(1),e.Q6J("ngIf",t.max_order_quantity&&t.max_order_quantity.invalid&&t.max_order_quantity.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(57,a,t.f.discount.touched&&t.f.discount.invalid)),e.xp6(1),e.Q6J("ngIf",t.discount&&t.discount.invalid&&t.discount.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(59,a,t.f.additional_discount.touched&&t.f.additional_discount.invalid)),e.xp6(1),e.Q6J("ngIf",t.additional_discount&&t.additional_discount.invalid&&t.additional_discount.touched),e.xp6(8),e.Q6J("ngClass",e.VKq(61,a,t.f.employee_incentive_type.touched&&t.f.employee_incentive_type.invalid)),e.xp6(7),e.Q6J("ngIf",t.employee_incentive_type&&t.employee_incentive_type.invalid&&t.employee_incentive_type.touched),e.xp6(2),e.Q6J("ngClass",e.VKq(63,a,t.f.employee_incentive.touched&&t.f.employee_incentive.invalid)),e.xp6(1),e.Q6J("ngIf",t.employee_incentive&&t.employee_incentive.invalid&&t.employee_incentive.touched),e.xp6(2),e.Q6J("ngIf",!t.loader),e.xp6(1),e.Q6J("ngIf",t.loader),e.xp6(1),e.MGl("routerLink","//product/",t.id,""))},dependencies:[s.mk,s.O5,c.yS,i._Y,i.YN,i.Kr,i.Fj,i.EJ,i.JJ,i.JL,i.Q7,i.sg,i.u],styles:["select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),n})(),canActivate:[r(30597).l],data:{allowedRoles:["add_batch"]}}];let S=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.Bz.forChild(M),c.Bz]}),n})(),F=(()=>{class n{}return n.\u0275fac=function(l){return new(l||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.ez,S,i.u5,i.UX]}),n})()},30597:(A,h,r)=>{r.d(h,{l:()=>C});var s=r(94650),c=r(88996),i=r(97185),e=r(42917),y=r(80927);let C=(()=>{class d{constructor(u,f,_,p,g){this.router=u,this.Arout=f,this.toastr=_,this.profileService=p,this.coreService=g}canActivate(u,f){const _=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(p=>{this.userDetails=p,this.permissions=this.userDetails?.permission}),_){const p=u.data.allowedRoles;console.log(p,"allowedRoles");const g=_.some(m=>p.includes(m.codename));if(console.log(g),this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails);const v=m?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}),g)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return d.\u0275fac=function(u){return new(u||d)(s.LFG(c.F0),s.LFG(c.gz),s.LFG(i._W),s.LFG(e.J),s.LFG(y.p))},d.\u0275prov=s.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);