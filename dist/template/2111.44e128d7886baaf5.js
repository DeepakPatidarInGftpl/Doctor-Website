"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2111],{92111:(B,T,p)=>{p.r(T),p.d(T,{BatchVariantProductModule:()=>z});var u=p(36895),g=p(89299),o=p(24006),e=p(94650),q=p(80927),k=p(97185);function d(i,l){1&i&&(e.TgZ(0,"span",25),e._uU(1,"Enter MRP "),e.qZA())}function S(i,l){1&i&&(e.TgZ(0,"span",25),e._uU(1,"Enter Cost Price"),e.qZA())}function f(i,l){if(1&i&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&i){const r=e.oxw();e.xp6(1),e.Oqu(r.errorCost)}}function P(i,l){1&i&&(e.TgZ(0,"span",25),e._uU(1,"Enter discount (ex:0-100)"),e.qZA())}function b(i,l){1&i&&(e.TgZ(0,"span",25),e._uU(1,"Enter Enter discount (ex:0-100)"),e.qZA())}function m(i,l){1&i&&(e.TgZ(0,"span",25),e._uU(1,"Enter Selling Price Online"),e.qZA())}function v(i,l){if(1&i&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&i){const r=e.oxw();e.xp6(1),e.Oqu(r.errorOnline)}}function C(i,l){if(1&i&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&i){const r=e.oxw();e.xp6(1),e.Oqu(r.errorOnlineMrp)}}function y(i,l){1&i&&(e.TgZ(0,"span",25),e._uU(1,"Enter Selling Price Offline"),e.qZA())}function F(i,l){if(1&i&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&i){const r=e.oxw();e.xp6(1),e.Oqu(r.errorOffline)}}function V(i,l){if(1&i&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&i){const r=e.oxw();e.xp6(1),e.Oqu(r.errorOfflineMrp)}}function M(i,l){1&i&&(e.TgZ(0,"span",25),e._uU(1,"Enter Selling Price Dealer"),e.qZA())}function O(i,l){if(1&i&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&i){const r=e.oxw();e.xp6(1),e.Oqu(r.errorDealer)}}function U(i,l){if(1&i&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&i){const r=e.oxw();e.xp6(1),e.Oqu(r.errorDealerMrp)}}function N(i,l){1&i&&(e.TgZ(0,"span",25),e._uU(1,"Enter Selling Price Employee"),e.qZA())}function I(i,l){if(1&i&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&i){const r=e.oxw();e.xp6(1),e.Oqu(r.errorEmployee)}}function E(i,l){if(1&i&&(e.TgZ(0,"span",25),e._uU(1),e.qZA()),2&i){const r=e.oxw();e.xp6(1),e.Oqu(r.errorEmployeeMrp)}}function J(i,l){1&i&&(e.TgZ(0,"span",25),e._uU(1,"Enter Stock"),e.qZA())}function D(i,l){1&i&&(e.TgZ(0,"span",25),e._uU(1,"Enter opening stock"),e.qZA())}function Q(i,l){1&i&&(e.TgZ(0,"span",25),e._uU(1,"Enter Minimum Stock Threshold"),e.qZA())}function Y(i,l){1&i&&(e.TgZ(0,"span",25),e._uU(1,"Enter Max Order Quantity"),e.qZA())}function L(i,l){1&i&&(e.TgZ(0,"button",26),e._uU(1,"Submit"),e.qZA())}function w(i,l){1&i&&(e.TgZ(0,"button",27),e._UZ(1,"span",28),e._uU(2,"Submit"),e.qZA())}const h=function(i){return{"is-invalid":i}},Z=function(i){return{border:i}},K=[{path:"",component:(()=>{class i{constructor(r,t,n,a,s,c){this.coreService=r,this.fb=t,this.toastr=n,this.router=a,this.Arout=s,this.location=c,this.p=1,this.pageSize=5,this.itemsPerPage=5,this.loader=!1}get f(){return this.batchForm.controls}ngOnInit(){this.batchForm=this.fb.group({mrp:new o.NI(0,[o.kI.required]),cost_price:new o.NI(0),selling_price_online:new o.NI(0),selling_price_offline:new o.NI(0),selling_price_dealer:new o.NI(0),selling_price_employee:new o.NI(0),stock:new o.NI(0,[o.kI.required]),opening_stock:new o.NI(0,[o.kI.required]),minimum_stock_threshold:new o.NI(0,[o.kI.required]),max_order_quantity:new o.NI(0),discount:new o.NI(0,[o.kI.pattern(/^(100|[0-9]{1,2})$/)]),additional_discount:new o.NI(0,[o.kI.pattern(/^(100|[0-9]{1,2})$/)])}),this.id=+this.Arout.snapshot.paramMap.get("id")}backLoc(){this.location.back()}getBrand(){this.coreService.getVariantBrandById(this.id).subscribe(r=>{if(console.log(r),this.brandList=r?.product?.brand,console.log(this.brandList),this.brandList?.markup_percentage_employee>0){let t=this.batchForm.value?.cost_price,a=t+t*this.brandList?.markup_percentage_employee/100;this.batchForm.get("selling_price_employee")?.patchValue(a),this.checkMrpSelling(),this.checkCostSelling(),this.checkEmployee()}if(this.brandList?.markup_percentage_online>0){let t=this.batchForm.value?.cost_price,a=t+t*this.brandList?.markup_percentage_online/100;this.batchForm.get("selling_price_online")?.patchValue(a),this.checkMrpSelling(),this.checkCostSelling(),this.checkOnline()}if(this.brandList?.markup_percentage_customer>0){let t=this.batchForm.value?.cost_price,a=t+t*this.brandList?.markup_percentage_customer/100;this.batchForm.get("selling_price_offline")?.patchValue(a),this.checkMrpSelling(),this.checkCostSelling(),this.checkOffline()}if(this.brandList?.markup_percentage_wholesale>0){let t=this.batchForm.value?.cost_price,a=t+t*this.brandList?.markup_percentage_wholesale/100;this.batchForm.get("selling_price_dealer")?.patchValue(a),this.checkMrpSelling(),this.checkCostSelling(),this.checkDealer()}})}checkCost(){let r=this.batchForm.value?.mrp,t=this.batchForm.value?.cost_price;console.log(this.batchForm.value),t<r?(this.errorCost="",this.getBrand(),this.batchForm.get("selling_price_employee")?.patchValue(t),this.batchForm.get("selling_price_online")?.patchValue(t),this.batchForm.get("selling_price_offline")?.patchValue(t),this.batchForm.get("selling_price_dealer")?.patchValue(t)):this.errorCost="Cost Price Should Be Less Than MRP"}checkMrpSelling(){let r=this.batchForm.value?.selling_price_offline,t=this.batchForm.value?.selling_price_online,n=this.batchForm.value?.selling_price_dealer,a=this.batchForm.value?.selling_price_employee,s=this.batchForm.value?.mrp;console.log(this.batchForm.value),r<=s&&t<=s&&n<=s&&a<=s?(this.errorMrp="",console.log(r<=s&&t<=s&&n<=s&&a<=s)):this.errorMrp="Selling Price Should Be Less Than Equal To MRP"}checkCostSelling(){let r=this.batchForm.value?.selling_price_offline,t=this.batchForm.value?.selling_price_online,n=this.batchForm.value?.selling_price_dealer,a=this.batchForm.value?.selling_price_employee,c=this.batchForm.value?.cost_price;console.log(this.batchForm.value),r>c&&t>c&&n>c&&a>c?(this.errorCostSell="",console.log(r>c&&t>c&&n>c&&a>c)):this.errorCostSell="Selling Price Should Be Grater Than Cost Price"}checkOnline(){let r=this.batchForm.value?.selling_price_online,t=this.batchForm.value?.mrp,n=this.batchForm.value?.cost_price;console.log(this.batchForm.value),r<=t?(this.errorOnlineMrp="",console.log(r<=t)):(console.log(r<=t),this.errorOnlineMrp="Selling Price Online Should Be Less Than Equal To MRP"),r>n?(this.errorOnline="",console.log(r>n)):this.errorOnline="Selling Price Online Should Be Greater Than Cost Price"}checkOffline(){let r=this.batchForm.value?.selling_price_offline,t=this.batchForm.value?.mrp,n=this.batchForm.value?.cost_price;console.log(this.batchForm.value),r<=t?(this.errorOfflineMrp="",console.log(r<=t)):(console.log(r<=t),this.errorOfflineMrp="Selling Price Offline Should Be Less Than Equal To MRP"),r>n?(this.errorOffline="",console.log(r>n)):this.errorOffline="Selling Price Offline Should Be Greater Than Cost Price"}checkDealer(){let r=this.batchForm.value?.selling_price_dealer,t=this.batchForm.value?.mrp,n=this.batchForm.value?.cost_price;console.log(this.batchForm.value),r<=t?(this.errorDealerMrp="",console.log(r<=t)):(console.log(r<=t),this.errorDealerMrp="Selling Price Dealer Should Be Less Than Equal To MRP"),r>n?(this.errorDealer="",console.log(r>n)):this.errorDealer="Selling Price Dealer Should Be Greater Than Cost Price"}checkEmployee(){let r=this.batchForm.value?.selling_price_employee,t=this.batchForm.value?.mrp,n=this.batchForm.value?.cost_price;console.log(this.batchForm.value),r<=t?(this.errorEmployeeMrp="",console.log(r<=t)):(console.log(r<=t),this.errorEmployeeMrp="Selling Price Employee Should Be Less Than Equal To MRP"),r>n?(this.errorEmployee="",console.log(r>n)):this.errorEmployee="Selling Price Employee Should Be Greater Than Cost Price"}submit(){if(console.log(this.batchForm.value),this.batchForm.valid){let r=this.batchForm.value?.selling_price_offline,t=this.batchForm.value?.selling_price_online,n=this.batchForm.value?.selling_price_dealer,a=this.batchForm.value?.selling_price_employee,s=this.batchForm.value?.mrp,c=this.batchForm.value?.cost_price;if(c<s)if(this.errorCost="",r>c&&t>c&&n>c&&a>c&&r<=s&&t<=s&&n<=s&&a<=s){this.errorMrp="",this.loader=!0;let _=new FormData;_.append("mrp",this.batchForm.get("mrp")?.value),_.append("cost_price",this.batchForm.get("cost_price")?.value),_.append("selling_price_online",this.batchForm.get("selling_price_online")?.value),_.append("selling_price_offline",this.batchForm.get("selling_price_offline")?.value),_.append("selling_price_dealer",this.batchForm.get("selling_price_dealer")?.value),_.append("selling_price_employee",this.batchForm.get("selling_price_employee")?.value),_.append("stock",this.batchForm.get("stock")?.value),_.append("opening_stock",this.batchForm.get("opening_stock")?.value),_.append("minimum_stock_threshold",this.batchForm.get("minimum_stock_threshold")?.value),_.append("max_order_quantity",this.batchForm.get("max_order_quantity")?.value),_.append("discount",this.batchForm.get("discount")?.value),_.append("additional_discount",this.batchForm.get("additional_discount")?.value),this.coreService.addBatch(_,this.id).subscribe(A=>{this.addRes=A,"True"==this.addRes.sucess?(this.loader=!1,this.toastr.success(this.addRes.msg),this.batchForm.reset(),this.location.back()):this.loader=!1},A=>{this.loader=!1})}else this.toastr.error("Selling Price Should Be Grater Than Cost Price And Less Than Equal To MRP");else this.errorCost="Cost Price Should Be Less Than MRP"}else this.batchForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get mrp(){return this.batchForm.get("mrp")}get cost_price(){return this.batchForm.get("cost_price")}get selling_price_offline(){return this.batchForm.get("selling_price_offline")}get selling_price_online(){return this.batchForm.get("selling_price_online")}get selling_price_vendor(){return this.batchForm.get("selling_price_dealer")}get selling_price_employee(){return this.batchForm.get("selling_price_employee")}get stock(){return this.batchForm.get("stock")}get minimum_stock_threshold(){return this.batchForm.get("minimum_stock_threshold")}get max_order_quantity(){return this.batchForm.get("max_order_quantity")}get variant(){return this.batchForm.get("variant")}get opening_stock(){return this.batchForm.get("opening_stock")}get discount(){return this.batchForm.get("discount")}get additional_discount(){return this.batchForm.get("additional_discount")}get employee_incentive(){return this.batchForm.get("employee_incentive")}get employee_incentive_type(){return this.batchForm.get("employee_incentive_type")}}return i.\u0275fac=function(r){return new(r||i)(e.Y36(q.p),e.Y36(o.qu),e.Y36(k._W),e.Y36(g.F0),e.Y36(g.gz),e.Y36(u.Ye))},i.\u0275cmp=e.Xpm({type:i,selectors:[["app-batch-variant-product"]],decls:101,vars:75,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-3","col-12"],[1,"form-group"],["type","number","formControlName","mrp","id","mrp","placeholder","0",3,"ngClass","blur"],["class","text-danger",4,"ngIf"],["type","number","formControlName","cost_price","id","cost_price","placeholder","0",3,"ngClass","ngStyle","blur"],["type","number","formControlName","discount","id","discount","placeholder","0",3,"ngClass"],["type","number","formControlName","additional_discount","id","additional_discount","placeholder","0",3,"ngClass"],["type","number","formControlName","selling_price_online","id","selling_price_online","placeholder","0",3,"ngClass","ngStyle","blur"],["type","number","formControlName","selling_price_offline","id","selling_price_offline","placeholder","0",3,"ngClass","ngStyle","blur"],["type","number","formControlName","selling_price_dealer","id","selling_price_dealer","placeholder","0",3,"ngClass","ngStyle","blur"],["type","number","formControlName","selling_price_employee","id","selling_price_employee","placeholder","0",3,"ngClass","ngStyle","blur"],["type","number","formControlName","stock","id","stock","placeholder","0",3,"ngClass"],["type","number","formControlName","opening_stock","id","opening_stock","placeholder","0",3,"ngClass"],["type","number","formControlName","minimum_stock_threshold","id","minimum_stock_threshold","placeholder","0",3,"ngClass"],["type","number","formControlName","max_order_quantity","id","max_order_quantity","placeholder","0",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[1,"btn","btn-cancel",3,"click"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3," Add Batch"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Batch "),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return t.submit()}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),e._uU(13,"MRP*"),e.qZA(),e.TgZ(14,"input",8),e.NdJ("blur",function(){return t.checkCost()})("blur",function(){return t.checkMrpSelling()}),e.qZA(),e.YNc(15,d,2,0,"span",9),e.qZA()(),e.TgZ(16,"div",6)(17,"div",7)(18,"label"),e._uU(19,"Cost Price"),e.qZA(),e.TgZ(20,"input",10),e.NdJ("blur",function(){return t.checkCost()})("blur",function(){return t.checkMrpSelling()})("blur",function(){return t.checkCostSelling()}),e.qZA(),e.YNc(21,S,2,0,"span",9),e.YNc(22,f,2,1,"span",9),e._UZ(23,"br"),e.qZA()(),e.TgZ(24,"div",6)(25,"div",7)(26,"label"),e._uU(27,"Discount %"),e.qZA(),e._UZ(28,"input",11),e.YNc(29,P,2,0,"span",9),e.qZA()(),e.TgZ(30,"div",6)(31,"div",7)(32,"label"),e._uU(33,"Additional Discount %"),e.qZA(),e._UZ(34,"input",12),e.YNc(35,b,2,0,"span",9),e.qZA()(),e.TgZ(36,"div",6)(37,"div",7)(38,"label"),e._uU(39,"Selling Price Online"),e.qZA(),e.TgZ(40,"input",13),e.NdJ("blur",function(){return t.checkOnline()}),e.qZA(),e.YNc(41,m,2,0,"span",9),e.YNc(42,v,2,1,"span",9),e._UZ(43,"br"),e.YNc(44,C,2,1,"span",9),e.qZA()(),e.TgZ(45,"div",6)(46,"div",7)(47,"label"),e._uU(48,"Selling Price Offline"),e.qZA(),e.TgZ(49,"input",14),e.NdJ("blur",function(){return t.checkOffline()}),e.qZA(),e.YNc(50,y,2,0,"span",9),e.YNc(51,F,2,1,"span",9),e._UZ(52,"br"),e.YNc(53,V,2,1,"span",9),e.qZA()(),e.TgZ(54,"div",6)(55,"div",7)(56,"label"),e._uU(57,"Selling Price Dealer"),e.qZA(),e.TgZ(58,"input",15),e.NdJ("blur",function(){return t.checkDealer()}),e.qZA(),e.YNc(59,M,2,0,"span",9),e.YNc(60,O,2,1,"span",9),e._UZ(61,"br"),e.YNc(62,U,2,1,"span",9),e.qZA()(),e.TgZ(63,"div",6)(64,"div",7)(65,"label"),e._uU(66,"Selling Price Employee"),e.qZA(),e.TgZ(67,"input",16),e.NdJ("blur",function(){return t.checkEmployee()}),e.qZA(),e.YNc(68,N,2,0,"span",9),e.YNc(69,I,2,1,"span",9),e._UZ(70,"br"),e.YNc(71,E,2,1,"span",9),e.qZA()(),e.TgZ(72,"div",6)(73,"div",7)(74,"label"),e._uU(75,"Stock*"),e.qZA(),e._UZ(76,"input",17),e.YNc(77,J,2,0,"span",9),e.qZA()(),e.TgZ(78,"div",6)(79,"div",7)(80,"label"),e._uU(81,"Opening Stock*"),e.qZA(),e._UZ(82,"input",18),e.YNc(83,D,2,0,"span",9),e.qZA()(),e.TgZ(84,"div",6)(85,"div",7)(86,"label"),e._uU(87,"Minimum Stock Threshold*"),e.qZA(),e._UZ(88,"input",19),e.YNc(89,Q,2,0,"span",9),e.qZA()(),e.TgZ(90,"div",6)(91,"div",7)(92,"label"),e._uU(93,"Max Order Quantity"),e.qZA(),e._UZ(94,"input",20),e.YNc(95,Y,2,0,"span",9),e.qZA()(),e.TgZ(96,"div",21),e.YNc(97,L,2,0,"button",22),e.YNc(98,w,3,0,"button",23),e.TgZ(99,"a",24),e.NdJ("click",function(){return t.backLoc()}),e._uU(100,"Cancel"),e.qZA()()()()()()),2&r&&(e.xp6(8),e.Q6J("formGroup",t.batchForm),e.xp6(6),e.Q6J("ngClass",e.VKq(41,h,t.f.mrp.touched&&t.f.mrp.invalid)),e.xp6(1),e.Q6J("ngIf",t.mrp&&t.mrp.invalid&&t.mrp.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(43,h,t.f.cost_price.touched&&t.f.cost_price.invalid))("ngStyle",e.VKq(45,Z,t.errorCost?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",t.cost_price&&t.cost_price.invalid&&t.cost_price.touched),e.xp6(1),e.Q6J("ngIf",t.errorCost),e.xp6(6),e.Q6J("ngClass",e.VKq(47,h,t.f.discount.touched&&t.f.discount.invalid)),e.xp6(1),e.Q6J("ngIf",t.discount&&t.discount.invalid&&t.discount.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(49,h,t.f.additional_discount.touched&&t.f.additional_discount.invalid)),e.xp6(1),e.Q6J("ngIf",t.additional_discount&&t.additional_discount.invalid&&t.additional_discount.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(51,h,t.f.selling_price_online.touched&&t.f.selling_price_online.invalid))("ngStyle",e.VKq(53,Z,t.errorOnline||t.errorOnlineMrp?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",t.selling_price_online&&t.selling_price_online.invalid&&t.selling_price_online.touched),e.xp6(1),e.Q6J("ngIf",t.errorOnline),e.xp6(2),e.Q6J("ngIf",t.errorOnlineMrp),e.xp6(5),e.Q6J("ngClass",e.VKq(55,h,t.f.selling_price_offline.touched&&t.f.selling_price_offline.invalid))("ngStyle",e.VKq(57,Z,t.errorOffline||t.errorOfflineMrp?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",t.selling_price_offline&&t.selling_price_offline.invalid&&t.selling_price_offline.touched),e.xp6(1),e.Q6J("ngIf",t.errorOffline),e.xp6(2),e.Q6J("ngIf",t.errorOfflineMrp),e.xp6(5),e.Q6J("ngClass",e.VKq(59,h,t.f.selling_price_dealer.touched&&t.f.selling_price_dealer.invalid))("ngStyle",e.VKq(61,Z,t.errorDealer||t.errorDealerMrp?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",t.selling_price_vendor&&t.selling_price_vendor.invalid&&t.selling_price_vendor.touched),e.xp6(1),e.Q6J("ngIf",t.errorDealer),e.xp6(2),e.Q6J("ngIf",t.errorDealerMrp),e.xp6(5),e.Q6J("ngClass",e.VKq(63,h,t.f.selling_price_employee.touched&&t.f.selling_price_employee.invalid))("ngStyle",e.VKq(65,Z,t.errorEmployee||t.errorEmployeeMrp?"1px solid red":"")),e.xp6(1),e.Q6J("ngIf",t.selling_price_employee&&t.selling_price_employee.invalid&&t.selling_price_employee.touched),e.xp6(1),e.Q6J("ngIf",t.errorEmployee),e.xp6(2),e.Q6J("ngIf",t.errorEmployeeMrp),e.xp6(5),e.Q6J("ngClass",e.VKq(67,h,t.f.stock.touched&&t.f.stock.invalid)),e.xp6(1),e.Q6J("ngIf",t.stock&&t.stock.invalid&&t.stock.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(69,h,t.f.opening_stock.touched&&t.f.opening_stock.invalid)),e.xp6(1),e.Q6J("ngIf",t.opening_stock&&t.opening_stock.invalid&&t.opening_stock.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(71,h,t.f.minimum_stock_threshold.touched&&t.f.minimum_stock_threshold.invalid)),e.xp6(1),e.Q6J("ngIf",t.minimum_stock_threshold&&t.minimum_stock_threshold.invalid&&t.minimum_stock_threshold.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(73,h,t.f.max_order_quantity.touched&&t.f.max_order_quantity.invalid)),e.xp6(1),e.Q6J("ngIf",t.max_order_quantity&&t.max_order_quantity.invalid&&t.max_order_quantity.touched),e.xp6(2),e.Q6J("ngIf",!t.loader),e.xp6(1),e.Q6J("ngIf",t.loader))},dependencies:[u.mk,u.O5,u.PC,o._Y,o.Fj,o.wV,o.JJ,o.JL,o.sg,o.u],styles:["select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),i})(),canActivate:[p(30597).l],data:{allowedRoles:["add_batch"]}}];let G=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[g.Bz.forChild(K),g.Bz]}),i})(),z=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=e.oAB({type:i}),i.\u0275inj=e.cJS({imports:[u.ez,G,o.u5,o.UX]}),i})()},30597:(B,T,p)=>{p.d(T,{l:()=>k});var u=p(94650),g=p(89299),o=p(97185),e=p(42917),q=p(80927);let k=(()=>{class d{constructor(f,P,b,m,v){this.router=f,this.Arout=P,this.toastr=b,this.profileService=m,this.coreService=v}canActivate(f,P){const b=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(m=>{this.userDetails=m,this.permissions=this.userDetails?.permission}),b){const m=f.data.allowedRoles;console.log(m,"allowedRoles");const v=b.some(C=>m.includes(C.codename));if(console.log(v),this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails);const y=C?.permission,F=this.profileService.getUserDetails();(!F||F.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return d.\u0275fac=function(f){return new(f||d)(u.LFG(g.F0),u.LFG(g.gz),u.LFG(o._W),u.LFG(e.J),u.LFG(q.p))},d.\u0275prov=u.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()}}]);