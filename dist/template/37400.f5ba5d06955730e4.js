"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[37400],{37400:(R,m,a)=>{a.r(m),a.d(m,{DetailCustomerModule:()=>G});var s=a(36895),d=a(4392),f=a(35226),b=a.n(f),t=a(94650),Z=a(72266),x=a(80927),v=a(25062),p=a(3848),g=a(56709),c=a(86257);function D(l,n){if(1&l){const e=t.EpF();t.TgZ(0,"div",14)(1,"div",15)(2,"div",16)(3,"h1",17),t._uU(4),t.qZA()(),t.TgZ(5,"div",18)(6,"h5",19),t._uU(7),t.qZA(),t.TgZ(8,"p",20),t.NdJ("click",function(){t.CHM(e);const o=t.oxw();return t.KtG(o.openModalMembershp(null==o.productDetail||null==o.productDetail.membership?null:o.productDetail.membership.id))}),t._uU(9),t.qZA()()(),t.TgZ(10,"div",21)(11,"a",22),t._UZ(12,"i",23),t.TgZ(13,"span",24),t._uU(14,"Edit Customer"),t.qZA()()()()}if(2&l){const e=t.oxw();t.xp6(4),t.Oqu(e.getInitial(null==e.productDetail?null:e.productDetail.name)),t.xp6(3),t.AsE("",null==e.productDetail?null:e.productDetail.name," (",null==e.productDetail?null:e.productDetail.mobile_no,") "),t.xp6(2),t.Oqu(null!=e.productDetail&&null!=e.productDetail.membership&&e.productDetail.membership.title?null==e.productDetail||null==e.productDetail.membership?null:e.productDetail.membership.title:null==e.profileDetails?null:e.profileDetails.role),t.xp6(2),t.MGl("routerLink","//contacts/updateCustomer/",null==e.productDetail?null:e.productDetail.id,"")}}function T(l,n){if(1&l&&(t.TgZ(0,"div",40)(1,"h3",29),t._uU(2,"Remark"),t.qZA(),t.TgZ(3,"p",41),t._uU(4),t.qZA()()),2&l){const e=t.oxw(2);t.xp6(4),t.Oqu(null==e.productDetail?null:e.productDetail.remark)}}function y(l,n){if(1&l&&(t.TgZ(0,"p",47),t._uU(1),t.qZA()),2&l){const e=t.oxw().$implicit;t.xp6(1),t.AsE("",null==e?null:e.address_line_1,", ",null==e?null:e.address_line_2,",")}}const h=function(l){return{"text-success":l}};function C(l,n){if(1&l){const e=t.EpF();t.TgZ(0,"mat-checkbox",51),t.NdJ("change",function(){t.CHM(e);const o=t.oxw().$implicit,r=t.oxw(2);return t.KtG(r.onChange(o))}),t.TgZ(1,"span",52),t._uU(2),t.qZA()()}if(2&l){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngClass",t.VKq(2,h,e.is_default)),t.xp6(1),t.hij(" Default ",null==e?null:e.address_type," Address")}}function A(l,n){if(1&l&&(t.TgZ(0,"span",53),t._uU(1),t.qZA()),2&l){const e=t.oxw().$implicit;t.Q6J("ngClass",t.VKq(2,h,e.is_default)),t.xp6(1),t.hij(" Default ",null==e?null:e.address_type," Address")}}function q(l,n){if(1&l&&(t.TgZ(0,"div",42)(1,"div",43)(2,"div",44)(3,"h5",45),t._uU(4),t.qZA(),t.YNc(5,y,2,2,"p",46),t.TgZ(6,"p",47),t._uU(7),t.qZA(),t.TgZ(8,"p",47),t._uU(9),t.qZA(),t.TgZ(10,"div",48),t.YNc(11,C,3,4,"mat-checkbox",49),t.YNc(12,A,2,4,"span",50),t.qZA()()()()),2&l){const e=n.$implicit;t.xp6(4),t.Oqu(null==e?null:e.address_type),t.xp6(1),t.Q6J("ngIf",(null==e?null:e.address_line_1)||(null==e?null:e.address_line_2)),t.xp6(2),t.lnq("",null==e||null==e.city?null:e.city.city,", ",null==e||null==e.state?null:e.state.state,", ",null==e||null==e.country?null:e.country.country_name,""),t.xp6(2),t.hij("Pincode - ",(null==e?null:e.pincode)||"--"," "),t.xp6(2),t.Q6J("ngIf",!e.is_default),t.xp6(1),t.Q6J("ngIf",e.is_default)}}function U(l,n){if(1&l&&(t.TgZ(0,"mat-tab",54)(1,"div",55)(2,"div",1)(3,"div",56),t.ynx(4),t.TgZ(5,"div",57)(6,"div",58)(7,"div",59)(8,"h4"),t._uU(9),t.qZA(),t.TgZ(10,"h5"),t._uU(11,"Available Point"),t.qZA()()()(),t.TgZ(12,"div",60)(13,"div",61)(14,"div",59)(15,"h4"),t._uU(16),t.qZA(),t.TgZ(17,"h5"),t._uU(18,"Used Points"),t.qZA()()()(),t.TgZ(19,"div",57)(20,"div",62)(21,"div",59)(22,"h4"),t._uU(23),t.qZA(),t.TgZ(24,"h5"),t._uU(25,"Sale Bill Credit Point"),t.qZA()()()(),t.TgZ(26,"div",57)(27,"div",63)(28,"div",59)(29,"h4"),t._uU(30),t.qZA(),t.TgZ(31,"h5"),t._uU(32,"Sale Return Points"),t.qZA()()()(),t.BQk(),t.qZA()()()()),2&l){const e=t.oxw(2);t.xp6(9),t.Oqu(null==e.LoyaltyList?null:e.LoyaltyList["loyalty points"]),t.xp6(7),t.Oqu(e.LoyaltyList.total_used_point),t.xp6(7),t.Oqu(null==e.LoyaltyList?null:e.LoyaltyList.sale_bill_credit_points),t.xp6(7),t.Oqu(null==e.LoyaltyList?null:e.LoyaltyList.sale_return_points)}}function w(l,n){if(1&l&&(t.TgZ(0,"div",69)(1,"p",70)(2,"span",71),t._uU(3),t.qZA()(),t.TgZ(4,"span",72),t._uU(5),t.qZA()()),2&l){const e=t.oxw().$implicit,i=t.oxw(3);t.xp6(3),t.AsE("",null==e?null:e.operation_type," By ",null==e?null:e.userid,""),t.xp6(2),t.Oqu(i.formatDate(e.date_time))}}function O(l,n){1&l&&(t.ynx(0),t.TgZ(1,"mat-step"),t.YNc(2,w,6,3,"ng-template",68),t.qZA(),t.BQk())}function M(l,n){if(1&l&&(t.TgZ(0,"mat-tab",64)(1,"div",55),t._UZ(2,"div",65),t.TgZ(3,"div",1)(4,"mat-stepper",66),t.YNc(5,O,3,0,"ng-container",67),t.qZA()()()()),2&l){const e=t.oxw(2);t.xp6(5),t.Q6J("ngForOf",null==e.productDetail?null:e.productDetail.logs)}}function P(l,n){if(1&l&&(t.TgZ(0,"mat-tab-group",25)(1,"mat-tab",26)(2,"div",27)(3,"div",28)(4,"div",1)(5,"h3",29),t._uU(6,"Contact Information"),t.qZA(),t.TgZ(7,"div",30)(8,"div",31)(9,"div",30)(10,"div",32)(11,"label",33),t._uU(12,"Contact person Name:"),t.qZA()(),t.TgZ(13,"div",32)(14,"h5",34),t._uU(15),t.qZA()(),t.TgZ(16,"div",32)(17,"label",33),t._uU(18,"Mobile Number:"),t.qZA()(),t.TgZ(19,"div",32)(20,"h5",34),t._uU(21),t.qZA()(),t.TgZ(22,"div",32)(23,"label",33),t._uU(24,"Email:"),t.qZA()(),t.TgZ(25,"div",32)(26,"h5",34),t._uU(27),t.qZA()(),t.TgZ(28,"div",32)(29,"label",33),t._uU(30,"Telephone Number:"),t.qZA()(),t.TgZ(31,"div",32)(32,"h5",34),t._uU(33),t.qZA()(),t.TgZ(34,"div",32)(35,"label",33),t._uU(36,"WhatsApp Number:"),t.qZA()(),t.TgZ(37,"div",32)(38,"h5",34),t._uU(39),t.qZA()(),t.TgZ(40,"div",32)(41,"label",33),t._uU(42,"Date of Birth:"),t.qZA()(),t.TgZ(43,"div",32)(44,"h5",34),t._uU(45),t.qZA()(),t.TgZ(46,"div",32)(47,"label",33),t._uU(48,"Anniversary:"),t.qZA()(),t.TgZ(49,"div",32)(50,"h5",34),t._uU(51),t.qZA()()()()(),t.TgZ(52,"h3",29),t._uU(53,"Business Information"),t.qZA(),t.TgZ(54,"div",30)(55,"div",31)(56,"div",30)(57,"div",32)(58,"label",33),t._uU(59,"Company Name:"),t.qZA()(),t.TgZ(60,"div",32)(61,"h5",34),t._uU(62),t.qZA()(),t.TgZ(63,"div",32)(64,"label",33),t._uU(65,"GST Type:"),t.qZA()(),t.TgZ(66,"div",32)(67,"h5",34),t._uU(68),t.qZA()(),t.TgZ(69,"div",32)(70,"label",33),t._uU(71,"GSTIN:"),t.qZA()(),t.TgZ(72,"div",32)(73,"h5",34),t._uU(74),t.qZA()(),t.TgZ(75,"div",32)(76,"label",33),t._uU(77,"Apply TDS:"),t.qZA()(),t.TgZ(78,"div",32)(79,"h5",34),t._uU(80),t.qZA()(),t.TgZ(81,"div",32)(82,"label",33),t._uU(83,"Pan Card:"),t.qZA()(),t.TgZ(84,"div",32)(85,"h5",34),t._uU(86),t.qZA()(),t.TgZ(87,"div",32)(88,"label",33),t._uU(89,"Credit Limit:"),t.qZA()(),t.TgZ(90,"div",32)(91,"h5",34),t._uU(92),t.qZA()(),t.TgZ(93,"div",32)(94,"label",33),t._uU(95,"Billable Amount:"),t.qZA()(),t.TgZ(96,"div",32)(97,"h5",34),t._uU(98),t.qZA()(),t.TgZ(99,"div",32)(100,"label",33),t._uU(101,"Current Balance:"),t.qZA()(),t.TgZ(102,"div",32)(103,"h5",34),t._uU(104),t.qZA()(),t.TgZ(105,"div",32)(106,"label",33),t._uU(107,"Payment Terms:"),t.qZA()(),t.TgZ(108,"div",32)(109,"h5",34),t._uU(110),t.qZA()()()()(),t.YNc(111,T,5,1,"div",35),t.qZA()()()(),t.TgZ(112,"mat-tab",36)(113,"div",27),t.YNc(114,q,13,8,"div",37),t.qZA()(),t.YNc(115,U,33,4,"mat-tab",38),t.YNc(116,M,6,1,"mat-tab",39),t.qZA()),2&l){const e=t.oxw();t.xp6(15),t.hij("",(null==e.productDetail?null:e.productDetail.name)||"--"," "),t.xp6(6),t.hij("",(null==e.productDetail?null:e.productDetail.mobile_no)||"--"," "),t.xp6(6),t.Oqu((null==e.productDetail?null:e.productDetail.email)||"--"),t.xp6(6),t.hij("",(null==e.productDetail?null:e.productDetail.telephone_no)||"--"," "),t.xp6(6),t.hij("",(null==e.productDetail?null:e.productDetail.whatsapp_no)||"--"," "),t.xp6(6),t.Oqu((null==e.productDetail?null:e.productDetail.date_of_birth)||"--"),t.xp6(6),t.Oqu((null==e.productDetail?null:e.productDetail.anniversary_date)||"--"),t.xp6(11),t.hij("",(null==e.productDetail?null:e.productDetail.company_name)||"--"," "),t.xp6(6),t.hij("",(null==e.productDetail?null:e.productDetail.gst_type)||"--"," "),t.xp6(6),t.Oqu((null==e.productDetail?null:e.productDetail.gstin)||"--"),t.xp6(6),t.hij("",null!=e.productDetail&&e.productDetail.apply_tds?"Yes":"No"," "),t.xp6(6),t.Oqu((null==e.productDetail?null:e.productDetail.pan_no)||"--"),t.xp6(6),t.Oqu(e.creditLimit||0),t.xp6(6),t.Oqu(e.billable_amount||0),t.xp6(6),t.Oqu(e.Current_Bala||0),t.xp6(6),t.Oqu((null==e.productDetail||null==e.productDetail.payment_terms?null:e.productDetail.payment_terms.title)||"--"),t.xp6(1),t.Q6J("ngIf",(null==e.productDetail?null:e.productDetail.remark)&&"null"!==(null==e.productDetail?null:e.productDetail.remark)),t.xp6(3),t.Q6J("ngForOf",null==e.productDetail?null:e.productDetail.address),t.xp6(1),t.Q6J("ngIf",e.LoyaltyList),t.xp6(1),t.Q6J("ngIf",(null==e.productDetail||null==e.productDetail.logs?null:e.productDetail.logs.length)>0)}}function L(l,n){1&l&&(t.TgZ(0,"div",73)(1,"p",74),t._uU(2,"Data not available"),t.qZA()())}const I=function(l,n,e){return{"bg-lightgreen":l,"bg-lightred":n,"bg-lightyellow":e}};function k(l,n){if(1&l&&(t.TgZ(0,"div",75)(1,"div",27)(2,"div",76)(3,"table",77)(4,"tbody")(5,"tr")(6,"td"),t._uU(7,"Attachment"),t.qZA(),t.TgZ(8,"td"),t._UZ(9,"img",78),t.qZA()(),t.TgZ(10,"tr")(11,"td"),t._uU(12,"Validity of Points"),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()(),t.TgZ(15,"tr")(16,"td"),t._uU(17,"Title"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA()(),t.TgZ(20,"tr")(21,"td"),t._uU(22,"Points Per 100"),t.qZA(),t.TgZ(23,"td"),t._uU(24),t.qZA()(),t.TgZ(25,"tr")(26,"td"),t._uU(27,"Purchase From"),t.qZA(),t.TgZ(28,"td"),t._uU(29),t.qZA()(),t.TgZ(30,"tr")(31,"td"),t._uU(32,"Purchase To"),t.qZA(),t.TgZ(33,"td"),t._uU(34),t.qZA()(),t.TgZ(35,"tr")(36,"td"),t._uU(37,"Maximum Redemption Points"),t.qZA(),t.TgZ(38,"td"),t._uU(39),t.qZA()()()()(),t.TgZ(40,"div",79)(41,"p",80),t._uU(42,"Is Active : "),t.qZA(),t.TgZ(43,"span",81),t._uU(44),t.qZA()()()()),2&l){const e=t.oxw();t.xp6(9),t.Q6J("src",e.imgUrl+(null==e.memberDetails?null:e.memberDetails.attachment),t.LSH),t.xp6(5),t.Oqu((null==e.memberDetails?null:e.memberDetails.validity_of_points)||"--"),t.xp6(5),t.Oqu((null==e.memberDetails?null:e.memberDetails.title)||"--"),t.xp6(5),t.Oqu((null==e.memberDetails?null:e.memberDetails.points_per_100)||"--"),t.xp6(5),t.Oqu((null==e.memberDetails?null:e.memberDetails.purchase_from)||"--"),t.xp6(5),t.Oqu((null==e.memberDetails?null:e.memberDetails.purchase_to)||"--"),t.xp6(5),t.Oqu((null==e.memberDetails?null:e.memberDetails.maximum_redemption_points)||"--"),t.xp6(4),t.Q6J("ngClass",t.kEZ(9,I,!0===(null==e.memberDetails?null:e.memberDetails.is_active),!1===(null==e.memberDetails?null:e.memberDetails.is_active),"Partial"===(null==e.memberDetails?null:e.memberDetails.is_active))),t.xp6(1),t.Oqu(null==e.memberDetails?null:e.memberDetails.is_active)}}const S=function(){return[]},Y=[{path:"",component:(()=>{class l{constructor(e,i,o,r,u){this.Arout=e,this.hrmService=i,this.coreService=o,this.location=r,this.contactService=u,this.imgUrl="https://pv.greatfuturetechno.com",this.sho=!0,this.sho1=!1,this.sho2=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.key="id",this.reverse=!1,this.loader=!0}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getdata(),this.getLoyaltyPoints(),this.coreService.profileDetails.subscribe(e=>{this.profileDetails=e})}ngAfterViewInit(){this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js"),this.LoadScript("assets/js/product-details.js")}jquery(e){var i=document.createElement("script");i.src=e,i.async=!1,document.body.appendChild(i)}LoadScript(e){var i=document.createElement("script");i.src=e,i.async=!1,document.body.appendChild(i)}getdata(){this.contactService.getCustomerById(this.id).subscribe(e=>{if(this.id==e.id){this.productDetail=e,this.userID=e?.userid,this.getCreditLimit(this.userID);let o=e.name.split(" ").map(r=>r.charAt(0)).join("");this.firstLatter=o,this.filteredData=this.productDetail?.logs.slice(),this.filterData()}})}onChange(e){b().fire({title:"Are you sure?",text:"You won't to make this address as default ??",icon:"warning",showCancelButton:!0,confirmButtonColor:"#198754",cancelButtonColor:"#d33",confirmButtonText:"Yes, make it default!"}).then(i=>{if(i.isConfirmed){const o=new FormData;o.append("user_id",this.userID),o.append("address_id",e.id),this.contactService.UpdateDefaultAddress(o).subscribe({next:r=>{this.productDetail?.address.forEach(u=>{u.address_type===e.address_type&&(u.is_default=u.id===e.id)})},error:r=>{console.log(r)}})}else this.productDetail?.address.forEach(o=>{o.id===e.id&&(o.is_default=!1)})})}getCreditLimit(e){this.contactService.getCreditLimitByUserId(e).subscribe(i=>{this.creditLimit=i?.credit_Limit,this.billable_amount=i?.billable_amount,this.Current_Bala=i?.closing_balance_type+" "+i?.closing_balance})}formatDate(e){const i=new Date(e);return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",hour:"2-digit",minute:"2-digit",hour12:!0}).format(i)}getInitial(e){return e?e.split(" ").map(r=>r.charAt(0).toUpperCase()).join(""):""}getLoyaltyPoints(){this.hrmService.getLoyalPoints(this.id).subscribe(e=>{console.log(e),this.LoyaltyList=e})}hide(){this.sho=!1,this.sho1=!this.sho1,this.sho2=!1}hide1(){this.sho=!0,this.sho1=!1,this.sho2=!this.sho2}goBack(){this.location.back()}sort(e){this.key=e,this.reverse=!this.reverse}filterData(){let e=this.productDetail?.logs.slice();this.filterOpertion&&(e=e.filter(i=>i?.operation_type===this.filterOpertion)),this.filteredData=e}clearFilter(){this.filterOpertion=null,this.filterData()}openModalMembershp(e){const i=document.getElementById("membershipModal");i&&(i.classList.add("show"),i.style.display="block",this.getMemberShipById(e))}closeModalMembership(){const e=document.getElementById("membershipModal");e&&(e.classList.remove("show"),e.style.display="none")}getMemberShip(){this.hrmService.getMembership().subscribe(e=>{this.membershipList=e,this.loader=!1})}getMemberShipById(e){this.hrmService.getMembershipById(e).subscribe(i=>{this.memberDetails=i,this.loader=!1})}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.filteredData?.length)}}return l.\u0275fac=function(e){return new(e||l)(t.Y36(d.gz),t.Y36(Z.z),t.Y36(x.p),t.Y36(s.Ye),t.Y36(v.y))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-detail-customer"]],decls:16,vars:5,consts:[[1,"card","bg"],[1,"card-body"],["class","card d-flex align-items-center card-container-wrapper justify-content-between",4,"ngIf"],["animationDuration","0ms",4,"ngIf"],["class","container",4,"ngIf"],["id","membershipModal","tabindex","-1","role","dialog","aria-labelledby","addressModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title","fs-5"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["class","form-group",4,"ngIf"],[1,"card","d-flex","align-items-center","card-container-wrapper","justify-content-between"],[1,"card-body","p-0","d-flex","align-items-center"],[1,"initial","logo-title-wrapper","me-3"],[1,"logo-title"],[1,"user-title-wrapper","text-white","px-2"],[1,"card-title","user-title-wrapper","text-white","mb-0"],[1,"card-text","mb-0","membership-title-wrapper",3,"click"],[1,"page-btn","me-4"],[1,"btn","btn-added","d-flex","align-items-center","bg-white",3,"routerLink"],[1,"fas","fa-edit","edit-icon"],[1,"ms-2","edit-btn-title"],["animationDuration","0ms"],["label","General Details"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"contact-title-wrapper","ps-4","mb-3"],[1,"row","m-0"],[1,"col-5"],[1,"col-6","mb-2"],[1,"label-title-wrapper"],[1,"field-title-wrapper"],["class","mt-4",4,"ngIf"],["label","Address"],["class","col-md-4",4,"ngFor","ngForOf"],["label","Loyalty",4,"ngIf"],["label","Logs",4,"ngIf"],[1,"mt-4"],[1,"mb-0","text-black","fw-semibold","ps-4","fs-6"],[1,"col-md-4"],[1,"card","mb-4"],[1,"card-body","p-4","address-card-body-wrapper"],[1,"card-title","address-type-title","text-black","mb-1","pb-1"],["class","card-text card-description mb-1 pb-1",4,"ngIf"],[1,"card-text","card-description","mb-1","pb-1"],[1,"d-flex","align-items-center"],["class","example-margin",3,"change",4,"ngIf"],[3,"ngClass",4,"ngIf"],[1,"example-margin",3,"change"],[1,"primary-color",3,"ngClass"],[3,"ngClass"],["label","Loyalty"],[1,"card"],[1,"row","container"],[1,"col-lg-3","col-sm-4","col-12","d-flex"],[1,"dash-count","das1"],[1,"dash-counts"],[1,"col-lg-5","col-sm-5","col-12","d-flex"],[1,"dash-count"],[1,"dash-count","das2"],[1,"dash-count","das3"],["label","Logs"],[1,"search-set","mx-3","mt-3"],["orientation","vertical"],[4,"ngFor","ngForOf"],["matStepLabel",""],[1,"step-label-wrapper"],[1,"mb-1","text-title-wrapper"],[1,"operation-label"],[1,"date-label"],[1,"container"],[1,"center-textt"],[1,"form-group"],[1,"table-responsive"],[1,"table"],["alt","product",2,"width","15%",3,"src"],[1,"d-flex","align-items-center","mx-4"],[1,"mb-0","d-inline","f-500","me-2"],[1,"badges",3,"ngClass"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t.YNc(2,D,15,5,"div",2),t.YNc(3,P,117,20,"mat-tab-group",3),t.YNc(4,L,3,0,"div",4),t.qZA()(),t.TgZ(5,"div",5)(6,"div",6)(7,"div",7)(8,"div",8)(9,"h1",9),t._uU(10,"Membership"),t.qZA(),t.TgZ(11,"button",10),t.NdJ("click",function(){return i.closeModalMembership()}),t.TgZ(12,"span",11),t._uU(13,"\xd7"),t.qZA()()(),t.TgZ(14,"div",12),t.YNc(15,k,45,13,"div",13),t.qZA()()()()),2&e&&(t.xp6(2),t.Q6J("ngIf",null==i.productDetail?null:i.productDetail.name),t.xp6(1),t.Q6J("ngIf",i.productDetail),t.xp6(1),t.Q6J("ngIf",(null==i.productDetail?null:i.productDetail.length)==t.DdM(4,S)),t.xp6(11),t.Q6J("ngIf",i.memberDetails))},dependencies:[s.mk,s.sg,s.O5,d.yS,p.SP,p.uX,g.oG,c.C0,c.VY,c.Vq],styles:[".th[_ngcontent-%COMP%]{background:#EEF0F8;font-family:Poppins;font-style:normal;font-weight:500;font-size:18px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.td[_ngcontent-%COMP%]{background-color:#f2f4f3;font-family:Poppins;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#3b3b3b;border-right:2px solid white;border-bottom:2px solid white}.user_card[_ngcontent-%COMP%]{background-color:#ffeadc;width:25%}.name_card[_ngcontent-%COMP%]{width:42px;height:42px;border-radius:12px;background-color:#ff8431}.name_carp_p[_ngcontent-%COMP%]{font-family:Nunito Sans;font-size:20px;font-weight:700;text-align:left;padding-top:4px;text-align:center;color:#fff}.card_p1[_ngcontent-%COMP%]{font-family:Nunito Sans;font-size:15px;font-weight:600;line-height:20px;letter-spacing:0em;text-align:left;color:#0e1726;margin-bottom:0}.card_p2[_ngcontent-%COMP%]{font-family:Nunito Sans;font-size:13px;font-weight:600;line-height:18px;letter-spacing:0em;text-align:left;color:#585858;margin-bottom:0}.logo-title[_ngcontent-%COMP%]{font-size:42px;line-height:1;font-weight:700;color:#ea5455}.card-container-wrapper[_ngcontent-%COMP%]{flex-direction:row!important;background:linear-gradient(90deg,#EA5455 0%,#FF9F43 100%)}.logo-title-wrapper[_ngcontent-%COMP%]{background-color:#fff;padding:12px;margin:16px;border-radius:50%}.user-title-wrapper[_ngcontent-%COMP%]{font-size:20px!important;text-transform:capitalize}.info-title-wrapper[_ngcontent-%COMP%]{font-size:28px;font-weight:700}.title-field-wrapper[_ngcontent-%COMP%]{font-size:16px;font-weight:600}.edit-btn-title[_ngcontent-%COMP%]{color:#ea5455;font-weight:600}.edit-icon[_ngcontent-%COMP%]{color:#ea5455;font-size:20px}.contact-title-wrapper[_ngcontent-%COMP%]{font-size:24px;font-weight:600;color:#000}.field-title-wrapper[_ngcontent-%COMP%]{font-size:16px;color:#000;font-weight:500}.label-title-wrapper[_ngcontent-%COMP%]{font-size:16px;color:#000;font-weight:400}.primary-color[_ngcontent-%COMP%]{color:#ea5455}.card-description[_ngcontent-%COMP%]{font-size:15px;color:#000}.step-label-wrapper[_ngcontent-%COMP%]{margin-top:18px}.address-type-title[_ngcontent-%COMP%]{font-weight:600!important}.address-card-body-wrapper[_ngcontent-%COMP%]{background-color:#f2f4f3!important}.text-title-wrapper[_ngcontent-%COMP%]{font-size:18px}.membership-title-wrapper[_ngcontent-%COMP%]{cursor:pointer}.supplier-name-wrapper[_ngcontent-%COMP%]{padding-left:44px}  .mat-checkbox-frame{border-color:#ea5455!important}  .mat-step-icon{margin-right:28px!important;background-color:#ea5455!important}  .mat-checkbox-ripple .mat-ripple-element{background-color:#ea5455!important}  .mat-checkbox-checked.mat-accent .mat-checkbox-background{background-color:#ea5455!important}  .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{border-radius:5px!important;background-color:#ea5455!important}"]}),l})(),canActivate:[a(30597).l],data:{allowedRoles:["view_customer"]}}];let z=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[d.Bz.forChild(Y),d.Bz]}),l})();var _=a(24006),j=a(76844),F=a(97392),J=a(95113),Q=a(8468),E=a(4859);let G=(()=>{class l{}return l.\u0275fac=function(e){return new(e||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[s.ez,z,_.u5,_.UX,j.FP,p.Nh,F.Ps,J.LD,g.p9,Q.I,c.T5,E.ot]}),l})()}}]);