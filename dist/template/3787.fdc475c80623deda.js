"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3787],{5062:(c,d,a)=>{a.d(d,{y:()=>g});var o=a(2340),h=a(4650),t=a(529);let g=(()=>{class n{constructor(e){this.http=e,this.apiUrl=`${o.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(e){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}SupplierIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,i)}addSupplier(e){return this.http.post(this.apiUrl+"/pv-api/supplier/",e)}updateSupplier(e,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,e)}deleteSupplier(e){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(e){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}VendorIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,i)}addVendor(e){return this.http.post(this.apiUrl+"/pv-api/vendor/",e)}updateVendor(e,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,e)}deleteVendor(e){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}PaymentTermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,i)}addPaymentTerms(e){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",e)}updatePaymentTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,e)}deletePaymentTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(e){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}TransportIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,i)}addTransport(e){return this.http.post(this.apiUrl+"/pv-api/transport/",e)}updateTransport(e,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,e)}deleteTransport(e){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(e){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}EmployeeIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,i)}addEmployee(e){return this.http.post(this.apiUrl+"/pv-api/employee/",e)}updateEmployee(e,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,e)}deleteEmployee(e){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(e){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}CustomerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,i)}addCustomer(e){return this.http.post(this.apiUrl+"/pv-api/customer/",e)}updateCustomer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,e)}deleteCustomer(e){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}}return n.\u0275fac=function(e){return new(e||n)(h.LFG(t.eN))},n.\u0275prov=h.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()},3787:(c,d,a)=>{a.r(d),a.d(d,{DetailSupplierModule:()=>y});var o=a(6895),h=a(8996),t=a(4650),g=a(5062),n=a(3848);function m(r,s){if(1&r&&(t.TgZ(0,"div",11)(1,"div",1)(2,"div",12)(3,"ul",13)(4,"li")(5,"h4"),t._uU(6,"Address Line 1"),t.qZA(),t.TgZ(7,"h6"),t._uU(8),t.qZA()(),t.TgZ(9,"li")(10,"h4"),t._uU(11,"Address Line 2"),t.qZA(),t.TgZ(12,"h6"),t._uU(13),t.qZA()(),t.TgZ(14,"li")(15,"h4"),t._uU(16,"Select Country"),t.qZA(),t.TgZ(17,"h6"),t._uU(18),t.qZA()(),t.TgZ(19,"li")(20,"h4"),t._uU(21,"Select State"),t.qZA(),t.TgZ(22,"h6"),t._uU(23),t.qZA()(),t.TgZ(24,"li")(25,"h4"),t._uU(26,"Select City"),t.qZA(),t.TgZ(27,"h6"),t._uU(28),t.qZA()(),t.TgZ(29,"li")(30,"h4"),t._uU(31,"Pincode"),t.qZA(),t.TgZ(32,"h6"),t._uU(33),t.qZA()(),t.TgZ(34,"li")(35,"h4"),t._uU(36,"Address Type"),t.qZA(),t.TgZ(37,"h6"),t._uU(38),t.qZA()()()()()()),2&r){const p=s.$implicit;t.xp6(8),t.Oqu(p.address_line_1),t.xp6(5),t.Oqu(p.address_line_2),t.xp6(5),t.Oqu(null==p||null==p.country?null:p.country.country_name),t.xp6(5),t.Oqu(null==p||null==p.state?null:p.state.state),t.xp6(5),t.Oqu(null==p||null==p.city?null:p.city.state),t.xp6(5),t.Oqu(p.pincode),t.xp6(5),t.Oqu(p.address_type)}}function e(r,s){if(1&r&&(t.TgZ(0,"div",11)(1,"div",1)(2,"div",12)(3,"ul",13)(4,"li")(5,"h4"),t._uU(6,"Account Holder Name"),t.qZA(),t.TgZ(7,"h6"),t._uU(8),t.qZA()(),t.TgZ(9,"li")(10,"h4"),t._uU(11,"Bank Name"),t.qZA(),t.TgZ(12,"h6"),t._uU(13),t.qZA()(),t.TgZ(14,"li")(15,"h4"),t._uU(16,"Branch Name"),t.qZA(),t.TgZ(17,"h6"),t._uU(18),t.qZA()(),t.TgZ(19,"li")(20,"h4"),t._uU(21,"Account Number"),t.qZA(),t.TgZ(22,"h6"),t._uU(23),t.qZA()(),t.TgZ(24,"li")(25,"h4"),t._uU(26,"Bank IFSC Code"),t.qZA(),t.TgZ(27,"h6"),t._uU(28),t.qZA()()()()()()),2&r){const p=s.$implicit;t.xp6(8),t.Oqu(p.account_holder_name),t.xp6(5),t.Oqu(p.bank_name),t.xp6(5),t.Oqu(p.branch_name),t.xp6(5),t.Oqu(p.account_no),t.xp6(5),t.Oqu(p.bank_ifsc_code)}}const i=function(r,s,p){return{"bg-lightgreen":r,"bg-lightred":s,"bg-lightyellow":p}},v=[{path:"",component:(()=>{class r{constructor(p,l){this.Arout=p,this.contactService=l,this.sho=!0,this.sho1=!1,this.sho2=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata()}ngAfterViewInit(){this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js"),this.LoadScript("assets/js/product-details.js")}jquery(p){var l=document.createElement("script");l.src=p,l.async=!1,document.body.appendChild(l)}LoadScript(p){var l=document.createElement("script");l.src=p,l.async=!1,document.body.appendChild(l)}getdata(){this.contactService.getSupplierById(this.id).subscribe(p=>{this.id==p.id&&(this.supplierDetail=p,console.log(p))})}hide(){this.sho=!1,this.sho1=!this.sho1,this.sho2=!1}hide1(){this.sho=!0,this.sho1=!1,this.sho2=!this.sho2}}return r.\u0275fac=function(p){return new(p||r)(t.Y36(h.gz),t.Y36(g.y))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-detail-supplier"]],decls:118,vars:26,consts:[[1,"card","bg"],[1,"card-body"],[1,"page-header"],[1,"page-title"],[1,"page-btn"],[1,"btn","btn-added",3,"routerLink"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],["animationDuration","0ms"],["label","General Details"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"card"],[1,"productdetails"],[1,"product-bar"],[1,"d-flex","align-items-center","mx-4"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"],["label","Address"],["class","card",4,"ngFor","ngForOf"],["label","Bank Details"]],template:function(p,l){1&p&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5,"Supplier Details"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Full details of a Supplier"),t.qZA()(),t.TgZ(8,"div",4)(9,"a",5),t._UZ(10,"img",6),t._uU(11,"Edit Supplier "),t.qZA()()(),t.TgZ(12,"mat-tab-group",7)(13,"mat-tab",8)(14,"div",9)(15,"div",10)(16,"div",11)(17,"div",1)(18,"div",12)(19,"ul",13)(20,"li")(21,"h4"),t._uU(22,"Name"),t.qZA(),t.TgZ(23,"h6"),t._uU(24),t.qZA()(),t.TgZ(25,"li")(26,"h4"),t._uU(27,"Company name"),t.qZA(),t.TgZ(28,"h6"),t._uU(29),t.qZA()(),t.TgZ(30,"li")(31,"h4"),t._uU(32,"Date of Birth"),t.qZA(),t.TgZ(33,"h6"),t._uU(34),t.qZA()(),t.TgZ(35,"li")(36,"h4"),t._uU(37,"Anniversary"),t.qZA(),t.TgZ(38,"h6"),t._uU(39),t.qZA()(),t.TgZ(40,"li")(41,"h4"),t._uU(42,"Mobile Number"),t.qZA(),t.TgZ(43,"h6"),t._uU(44),t.qZA()(),t.TgZ(45,"li")(46,"h4"),t._uU(47,"Telephone Number"),t.qZA(),t.TgZ(48,"h6"),t._uU(49),t.qZA()(),t.TgZ(50,"li")(51,"h4"),t._uU(52,"WhatsApp Number"),t.qZA(),t.TgZ(53,"h6"),t._uU(54),t.qZA()(),t.TgZ(55,"li")(56,"h4"),t._uU(57,"Email"),t.qZA(),t.TgZ(58,"h6"),t._uU(59),t.qZA()(),t.TgZ(60,"li")(61,"h4"),t._uU(62,"Remark"),t.qZA(),t.TgZ(63,"h6"),t._uU(64),t.qZA()(),t.TgZ(65,"li")(66,"h4"),t._uU(67,"GST Type"),t.qZA(),t.TgZ(68,"h6"),t._uU(69),t.qZA()(),t.TgZ(70,"li")(71,"h4"),t._uU(72,"GSTIN"),t.qZA(),t.TgZ(73,"h6"),t._uU(74),t.qZA()(),t.TgZ(75,"li")(76,"h4"),t._uU(77,"Apply TDS"),t.qZA(),t.TgZ(78,"h6"),t._uU(79),t.qZA()(),t.TgZ(80,"li")(81,"h4"),t._uU(82,"Pan card"),t.qZA(),t.TgZ(83,"h6"),t._uU(84),t.qZA()(),t.TgZ(85,"li")(86,"h4"),t._uU(87,"Credit Limit"),t.qZA(),t.TgZ(88,"h6"),t._uU(89),t.qZA()(),t.TgZ(90,"li")(91,"h4"),t._uU(92,"Payment Terms"),t.qZA(),t.TgZ(93,"h6"),t._uU(94),t.qZA()(),t.TgZ(95,"li")(96,"h4"),t._uU(97,"Opening Balance"),t.qZA(),t.TgZ(98,"h6"),t._uU(99),t.qZA()(),t.TgZ(100,"li")(101,"h4"),t._uU(102,"Manufacture"),t.qZA(),t.TgZ(103,"h6"),t._uU(104),t.qZA()()()()(),t.TgZ(105,"div",14)(106,"p",15),t._uU(107,"Is Active : "),t.qZA(),t.TgZ(108,"span",16),t._uU(109),t.qZA()()()()()(),t.TgZ(110,"mat-tab",17)(111,"div",9)(112,"div",10),t.YNc(113,m,39,7,"div",18),t.qZA()()(),t.TgZ(114,"mat-tab",19)(115,"div",9)(116,"div",10),t.YNc(117,e,29,5,"div",18),t.qZA()()()()()()),2&p&&(t.xp6(9),t.MGl("routerLink","//contacts/updateSupplier/",l.supplierDetail.id,""),t.xp6(15),t.Oqu(l.supplierDetail.name),t.xp6(5),t.Oqu(l.supplierDetail.company_name),t.xp6(5),t.Oqu(l.supplierDetail.date_of_birth),t.xp6(5),t.Oqu(l.supplierDetail.anniversary_date),t.xp6(5),t.Oqu(l.supplierDetail.mobile_no),t.xp6(5),t.Oqu(l.supplierDetail.telephone_no),t.xp6(5),t.Oqu(l.supplierDetail.whatsapp_no),t.xp6(5),t.Oqu(l.supplierDetail.email),t.xp6(5),t.Oqu(l.supplierDetail.remark),t.xp6(5),t.Oqu(l.supplierDetail.gst_type),t.xp6(5),t.Oqu(l.supplierDetail.gstin),t.xp6(5),t.Oqu(l.supplierDetail.apply_tds),t.xp6(5),t.Oqu(l.supplierDetail.pan_no),t.xp6(5),t.Oqu(l.supplierDetail.credit_limit),t.xp6(5),t.Oqu(l.supplierDetail.payment_terms.title),t.xp6(5),t.Oqu(l.supplierDetail.opening_balance),t.xp6(5),t.Oqu(l.supplierDetail.supplier_type),t.xp6(4),t.Q6J("ngClass",t.kEZ(22,i,!0===l.supplierDetail.is_active,!1===l.supplierDetail.is_active,"Partial"===l.supplierDetail.is_active)),t.xp6(1),t.Oqu(l.supplierDetail.is_active),t.xp6(4),t.Q6J("ngForOf",l.supplierDetail.address),t.xp6(4),t.Q6J("ngForOf",l.supplierDetail.bank_id))},dependencies:[o.mk,o.sg,h.yS,n.SP,n.uX]}),r})()}];let U=(()=>{class r{}return r.\u0275fac=function(p){return new(p||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[h.Bz.forChild(v),h.Bz]}),r})();var Z=a(4006),T=a(5869),A=a(7392),_=a(4385),q=a(6709);let y=(()=>{class r{}return r.\u0275fac=function(p){return new(p||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[o.ez,U,Z.u5,Z.UX,T.FP,n.Nh,A.Ps,_.LD,q.p9]}),r})()}}]);