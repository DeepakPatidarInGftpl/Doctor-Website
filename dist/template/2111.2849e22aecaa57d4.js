"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2111],{2111:(U,u,a)=>{a.r(u),a.d(u,{BatchVariantProductModule:()=>N});var c=a(6895),s=a(8996),i=a(4006),e=a(4650),m=a(927),_=a(7185);function g(n,o){1&n&&(e.TgZ(0,"span",22),e._uU(1,"Enter MRP "),e.qZA())}function h(n,o){1&n&&(e.TgZ(0,"span",22),e._uU(1,"Enter Cost Price"),e.qZA())}function f(n,o){1&n&&(e.TgZ(0,"span",22),e._uU(1,"Enter Selling Price Online "),e.qZA())}function v(n,o){1&n&&(e.TgZ(0,"span",22),e._uU(1,"Enter Selling Price Offline "),e.qZA())}function Z(n,o){1&n&&(e.TgZ(0,"span",22),e._uU(1,"Enter Selling Price Vendor "),e.qZA())}function b(n,o){1&n&&(e.TgZ(0,"span",22),e._uU(1,"Enter Selling Price Employee "),e.qZA())}function C(n,o){1&n&&(e.TgZ(0,"span",22),e._uU(1,"Enter Stock"),e.qZA())}function q(n,o){1&n&&(e.TgZ(0,"span",22),e._uU(1,"Enter Minimum Stock Threshold"),e.qZA())}function T(n,o){1&n&&(e.TgZ(0,"span",22),e._uU(1,"Enter Max Order Quantity"),e.qZA())}function y(n,o){1&n&&(e.TgZ(0,"button",23),e._uU(1,"Submit"),e.qZA())}function A(n,o){1&n&&(e.TgZ(0,"button",24),e._UZ(1,"span",25),e._uU(2,"Submit"),e.qZA())}const l=function(n){return{"is-invalid":n}},P=[{path:"",component:(()=>{class n{constructor(r,t,p,d,I,V){this.coreService=r,this.fb=t,this.toastr=p,this.router=d,this.Arout=I,this.location=V,this.p=1,this.pageSize=5,this.itemsPerPage=5,this.loader=!1}get f(){return this.batchForm.controls}ngOnInit(){this.batchForm=this.fb.group({mrp:new i.NI("",[i.kI.required]),cost_price:new i.NI(0,i.kI.pattern(/^[0-9]*$/)),selling_price_online:new i.NI(0,[i.kI.pattern(/^[0-9]*$/)]),selling_price_offline:new i.NI(0,i.kI.pattern(/^[0-9]*$/)),selling_price_vendor:new i.NI(0,[i.kI.pattern(/^[0-9]*$/)]),selling_price_employee:new i.NI(0,i.kI.pattern(/^[0-9]*$/)),stock:new i.NI("",[i.kI.required,i.kI.pattern(/^[0-9]*$/)]),minimum_stock_threshold:new i.NI("",[i.kI.required,i.kI.pattern(/^[0-9]*$/)]),max_order_quantity:new i.NI(0,[i.kI.pattern(/^[0-9]*$/)])}),this.id=+this.Arout.snapshot.paramMap.get("id")}submit(){console.log(this.batchForm.value),this.batchForm.valid?(this.loader=!0,this.coreService.addBatch(this.batchForm.value,this.id).subscribe(r=>{this.addRes=r,"True"==this.addRes.Is_Sucess?(this.loader=!1,this.toastr.success(this.addRes.msg),this.batchForm.reset(),this.location.back()):this.loader=!1},r=>{this.loader=!1,console.log(r.error)})):(this.batchForm.markAllAsTouched(),console.log("forms invalid"))}get mrp(){return this.batchForm.get("mrp")}get cost_price(){return this.batchForm.get("cost_price")}get selling_price_offline(){return this.batchForm.get("selling_price_offline")}get selling_price_online(){return this.batchForm.get("selling_price_online")}get selling_price_vendor(){return this.batchForm.get("selling_price_vendor")}get selling_price_employee(){return this.batchForm.get("selling_price_employee")}get stock(){return this.batchForm.get("stock")}get minimum_stock_threshold(){return this.batchForm.get("minimum_stock_threshold")}get max_order_quantity(){return this.batchForm.get("max_order_quantity")}get variant(){return this.batchForm.get("variant")}}return n.\u0275fac=function(r){return new(r||n)(e.Y36(m.p),e.Y36(i.qu),e.Y36(_._W),e.Y36(s.F0),e.Y36(s.gz),e.Y36(c.Ye))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-batch-variant-product"]],decls:69,vars:45,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","text","formControlName","mrp","id","mrp","placeholder","0",3,"ngClass","ngModel","ngModelChange"],["class","text-danger",4,"ngIf"],["type","text","formControlName","cost_price","id","cost_price","placeholder","0",3,"ngClass"],["type","text","formControlName","selling_price_online","id","selling_price_online","placeholder","0",3,"ngModel","ngClass"],["type","text","formControlName","selling_price_offline","id","selling_price_offline","placeholder","0",3,"ngModel","ngClass"],["type","text","formControlName","selling_price_vendor","id","selling_price_vendor","placeholder","0",3,"ngModel","ngClass"],["type","text","formControlName","selling_price_employee","id","selling_price_employee","placeholder","0",3,"ngModel","ngClass"],["type","text","formControlName","stock","id","stock","placeholder","0",3,"ngClass"],["type","text","formControlName","minimum_stock_threshold","id","minimum_stock_threshold","placeholder","0",3,"ngClass"],["type","text","formControlName","max_order_quantity","id","max_order_quantity","placeholder","0",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"btn","btn-cancel",3,"routerLink"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add Batch"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Batch "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"MRP*"),e.qZA(),e.TgZ(14,"input",8),e.NdJ("ngModelChange",function(d){return t.mrpN=d}),e.qZA(),e.YNc(15,g,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Cost Price"),e.qZA(),e._UZ(20,"input",10),e.YNc(21,h,2,0,"span",9),e.qZA()(),e.TgZ(22,"div",6)(23,"div",7)(24,"label"),e._uU(25,"Selling Price Online"),e.qZA(),e._UZ(26,"input",11),e.YNc(27,f,2,0,"span",9),e.qZA()(),e.TgZ(28,"div",6)(29,"div",7)(30,"label"),e._uU(31,"Selling Price Offline"),e.qZA(),e._UZ(32,"input",12),e.YNc(33,v,2,0,"span",9),e.qZA()(),e.TgZ(34,"div",6)(35,"div",7)(36,"label"),e._uU(37,"Selling Price Vendor"),e.qZA(),e._UZ(38,"input",13),e.YNc(39,Z,2,0,"span",9),e.qZA()(),e.TgZ(40,"div",6)(41,"div",7)(42,"label"),e._uU(43,"Selling Price Employee"),e.qZA(),e._UZ(44,"input",14),e.YNc(45,b,2,0,"span",9),e.qZA()(),e.TgZ(46,"div",6)(47,"div",7)(48,"label"),e._uU(49,"Stock*"),e.qZA(),e._UZ(50,"input",15),e.YNc(51,C,2,0,"span",9),e.qZA()(),e.TgZ(52,"div",6)(53,"div",7)(54,"label"),e._uU(55,"Minimum Stock Threshold*"),e.qZA(),e._UZ(56,"input",16),e.YNc(57,q,2,0,"span",9),e.qZA()(),e.TgZ(58,"div",6)(59,"div",7)(60,"label"),e._uU(61,"Max Order Quantity"),e.qZA(),e._UZ(62,"input",17),e.YNc(63,T,2,0,"span",9),e.qZA()(),e.TgZ(64,"div",18),e.YNc(65,y,2,0,"button",19),e.YNc(66,A,3,0,"button",20),e.TgZ(67,"a",21),e._uU(68,"Cancel"),e.qZA()()()()()()),2&r&&(e.xp6(8),e.Q6J("formGroup",t.batchForm),e.xp6(6),e.Q6J("ngClass",e.VKq(27,l,t.f.mrp.touched&&t.f.mrp.invalid))("ngModel",t.mrpN),e.xp6(1),e.Q6J("ngIf",t.mrp&&t.mrp.invalid&&t.mrp.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(29,l,t.f.cost_price.touched&&t.f.cost_price.invalid)),e.xp6(1),e.Q6J("ngIf",t.cost_price&&t.cost_price.invalid&&t.cost_price.touched),e.xp6(5),e.Q6J("ngModel",t.mrpN)("ngClass",e.VKq(31,l,t.f.selling_price_online.touched&&t.f.selling_price_online.invalid)),e.xp6(1),e.Q6J("ngIf",t.selling_price_online&&t.selling_price_online.invalid&&t.selling_price_online.touched),e.xp6(5),e.Q6J("ngModel",t.mrpN)("ngClass",e.VKq(33,l,t.f.selling_price_offline.touched&&t.f.selling_price_offline.invalid)),e.xp6(1),e.Q6J("ngIf",t.selling_price_offline&&t.selling_price_offline.invalid&&t.selling_price_offline.touched),e.xp6(5),e.Q6J("ngModel",t.mrpN)("ngClass",e.VKq(35,l,t.f.selling_price_vendor.touched&&t.f.selling_price_vendor.invalid)),e.xp6(1),e.Q6J("ngIf",t.selling_price_vendor&&t.selling_price_vendor.invalid&&t.selling_price_vendor.touched),e.xp6(5),e.Q6J("ngModel",t.mrpN)("ngClass",e.VKq(37,l,t.f.selling_price_employee.touched&&t.f.selling_price_employee.invalid)),e.xp6(1),e.Q6J("ngIf",t.selling_price_employee&&t.selling_price_employee.invalid&&t.selling_price_employee.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(39,l,t.f.stock.touched&&t.f.stock.invalid)),e.xp6(1),e.Q6J("ngIf",t.stock&&t.stock.invalid&&t.stock.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(41,l,t.f.minimum_stock_threshold.touched&&t.f.minimum_stock_threshold.invalid)),e.xp6(1),e.Q6J("ngIf",t.minimum_stock_threshold&&t.minimum_stock_threshold.invalid&&t.minimum_stock_threshold.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(43,l,t.f.max_order_quantity.touched&&t.f.max_order_quantity.invalid)),e.xp6(1),e.Q6J("ngIf",t.max_order_quantity&&t.max_order_quantity.invalid&&t.max_order_quantity.touched),e.xp6(2),e.Q6J("ngIf",!t.loader),e.xp6(1),e.Q6J("ngIf",t.loader),e.xp6(1),e.MGl("routerLink","//product/",t.id,""))},dependencies:[c.mk,c.O5,s.yS,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u]}),n})()}];let k=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[s.Bz.forChild(P),s.Bz]}),n})(),N=(()=>{class n{}return n.\u0275fac=function(r){return new(r||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,k,i.u5,i.UX]}),n})()}}]);