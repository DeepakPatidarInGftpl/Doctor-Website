"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[34948],{25062:(I,U,c)=>{c.d(U,{y:()=>C});var _=c(92340),g=c(94650),u=c(80529);let C=(()=>{class h{constructor(e){this.http=e,this.apiUrl=`${_.N.api}`}UpdateDefaultAddress(e){return this.http.post(this.apiUrl+"/pv-api/make_default_address/",e)}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(e){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}SupplierIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,r)}addSupplier(e){return this.http.post(this.apiUrl+"/pv-api/supplier/",e)}updateSupplier(e,r){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,e)}deleteSupplier(e){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(e){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}VendorIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,r)}addVendor(e){return this.http.post(this.apiUrl+"/pv-api/vendor/",e)}updateVendor(e,r){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,e)}deleteVendor(e){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}PaymentTermsIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,r)}addPaymentTerms(e){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",e)}updatePaymentTerms(e,r){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,e)}deletePaymentTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(e){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}TransportIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,r)}addTransport(e){return this.http.post(this.apiUrl+"/pv-api/transport/",e)}updateTransport(e,r){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,e)}deleteTransport(e){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(e){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}EmployeeIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,r)}addEmployee(e){return this.http.post(this.apiUrl+"/pv-api/employee/",e)}updateEmployee(e,r){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,e)}deleteEmployee(e){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(e){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}CustomerIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,r)}addCustomer(e){return this.http.post(this.apiUrl+"/pv-api/customer/",e)}updateCustomer(e,r){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,e)}deleteCustomer(e){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(e){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}UserIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${e}`,r)}addUser(e){return this.http.post(this.apiUrl+"/pv-api/user/",e)}updateUser(e,r){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${r}`,e)}deleteUser(e){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(e){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${e}`)}addPermissionGroup(e){return this.http.post(this.apiUrl+"/pv-api/group/",e)}updatePermissionGroup(e,r){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`,e)}deletePermissionGroup(e){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(e){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}DealerIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,r)}addDealer(e){return this.http.post(this.apiUrl+"/pv-api/dealer/",e)}updateDealer(e,r){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,e)}deleteDealer(e){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+e)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}TermsIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,r)}addTerms(e){return this.http.post(this.apiUrl+"/pv-api/terms/",e)}updateTerms(e,r){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,e)}deleteTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(e){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}DepartmentIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${e}`,r)}addDepartment(e){return this.http.post(this.apiUrl+"/pv-api/department/",e)}updateDepartment(e,r){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${r}`,e)}deleteDepartment(e){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}getCreditLimitByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${e}`)}}return h.\u0275fac=function(e){return new(e||h)(g.LFG(u.eN))},h.\u0275prov=g.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},34948:(I,U,c)=>{c.r(U),c.d(U,{TermsModule:()=>_t});var _=c(36895),g=c(4392),u=c(24006),C=c(35226),h=c.n(C),y=c(96166),e=c(12983),r=c.n(e),l=c(80574),x=c(94327),t=c(94650),b=c(25062),A=c(97185),Z=c(42917),v=c(73162),T=c(54333),$=c(90455),J=c(54040);function E(s,p){if(1&s){const i=t.EpF();t.TgZ(0,"a",53),t.NdJ("click",function(){t.CHM(i);const o=t.oxw(2);return t.KtG(o.openaddForm())}),t._UZ(1,"img",54),t._uU(2,"Add Terms "),t.qZA()}}function N(s,p){if(1&s&&(t.TgZ(0,"div",51),t.YNc(1,E,3,0,"a",52),t.qZA()),2&s){const i=t.oxw();t.xp6(1),t.Q6J("ngIf",i.isAdd)}}function P(s,p){if(1&s){const i=t.EpF();t.TgZ(0,"th",28),t.NdJ("click",function(){t.CHM(i);const o=t.oxw();return t.KtG(o.sort("id"))}),t._uU(1,"Action "),t._UZ(2,"i",32),t.qZA()}}function w(s,p){if(1&s){const i=t.EpF();t.TgZ(0,"a",65),t.NdJ("click",function(){t.CHM(i);const o=t.oxw().$implicit,a=t.oxw(2);return t.KtG(a.editForm(o.id))}),t._UZ(1,"img",66),t.qZA()}}function B(s,p){if(1&s){const i=t.EpF();t.TgZ(0,"a",67),t.NdJ("click",function(){t.CHM(i);const o=t.oxw(),a=o.index,d=o.$implicit,m=t.oxw(2);return t.KtG(m.confirmText(a,d.id))}),t._UZ(1,"img",68),t.qZA()}}function L(s,p){if(1&s){const i=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",56)(3,"input",57),t.NdJ("ngModelChange",function(o){const d=t.CHM(i).index,m=t.oxw(2);return t.KtG(m.selectedRows[d]=o)}),t.qZA(),t._UZ(4,"span",31),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td",58)(8,"a",59),t._uU(9),t.qZA()(),t.TgZ(10,"td"),t._uU(11),t.qZA(),t.TgZ(12,"td")(13,"mat-slide-toggle",60),t.NdJ("click",function(){const o=t.CHM(i),a=o.$implicit,d=o.index,m=t.oxw(2);return t.KtG(a.is_active?m.deActivate(d,a.id):m.Active(d,a.id))})("ngModelChange",function(o){const d=t.CHM(i).$implicit;return t.KtG(d.is_active=o)}),t.qZA()(),t.TgZ(14,"td")(15,"a",61),t._UZ(16,"img",62),t.qZA(),t.YNc(17,w,2,0,"a",63),t.YNc(18,B,2,0,"a",64),t.qZA()()}if(2&s){const i=p.$implicit,n=p.index,o=t.oxw(2);t.xp6(3),t.Q6J("ngModel",o.selectedRows[n]),t.xp6(3),t.Oqu(n+1),t.xp6(2),t.MGl("routerLink","//settings/terms-details/",null==i?null:i.id,""),t.xp6(1),t.Oqu(null==i?null:i.voucher_type),t.xp6(2),t.Oqu(null==i?null:i.description),t.xp6(2),t.Q6J("ngModel",i.is_active),t.xp6(2),t.MGl("routerLink","//settings/terms-details/",null==i?null:i.id,""),t.xp6(2),t.Q6J("ngIf",o.isEdit),t.xp6(1),t.Q6J("ngIf",o.isDelete)}}const k=function(s,p){return{itemsPerPage:s,currentPage:p}};function Y(s,p){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,L,19,9,"tr",55),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.tableData,i.key,i.reverse),t.WLB(8,k,i.itemsPerPage,i.p)))}}function R(s,p){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",69)(3,"p",70),t._uU(4,"Data not available"),t.qZA()()()())}function O(s,p){1&s&&t._UZ(0,"mat-progress-bar",71)}function Q(s,p){1&s&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Add Terms "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Create new Terms "),t.qZA()())}function G(s,p){if(1&s&&(t.TgZ(0,"div",3),t.YNc(1,Q,5,0,"div",34),t.qZA()),2&s){const i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",i.isAdd)}}function z(s,p){1&s&&(t.TgZ(0,"div")(1,"h4"),t._uU(2," Update Terms "),t.qZA(),t.TgZ(3,"h6"),t._uU(4,"Edit Terms "),t.qZA()())}function V(s,p){if(1&s&&(t.TgZ(0,"div",3),t.YNc(1,z,5,0,"div",34),t.qZA()),2&s){const i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",i.isEdit)}}function K(s,p){if(1&s&&(t.TgZ(0,"option",86),t._uU(1),t.qZA()),2&s){const i=p.$implicit;t.s9C("value",null==i?null:i.title),t.xp6(1),t.Oqu(null==i?null:i.title)}}function H(s,p){1&s&&(t.TgZ(0,"span",87),t._uU(1,"Select Voucher Type "),t.qZA())}function W(s,p){1&s&&(t.TgZ(0,"span",87),t._uU(1,"Enter Size Description "),t.qZA())}function j(s,p){1&s&&(t.TgZ(0,"button",88),t._uU(1,"Submit"),t.qZA())}function X(s,p){1&s&&(t.TgZ(0,"button",89),t._UZ(1,"span",90),t._uU(2," \xa0 Submit"),t.qZA())}const D=function(s){return{"is-invalid":s}};function tt(s,p){if(1&s){const i=t.EpF();t.TgZ(0,"div",7)(1,"form",75),t.NdJ("ngSubmit",function(){t.CHM(i);const o=t.oxw(3);return t.KtG(o.submit())}),t.TgZ(2,"div",0)(3,"div",76)(4,"div",77)(5,"label"),t._uU(6,"Select Voucher Type*"),t.qZA(),t.TgZ(7,"select",78)(8,"option",79),t._uU(9,"Select Voucher Type"),t.qZA(),t.YNc(10,K,2,2,"option",80),t.qZA(),t.YNc(11,H,2,0,"span",81),t.qZA()(),t.TgZ(12,"div",76)(13,"div",77)(14,"label"),t._uU(15,"Description*"),t.qZA(),t._UZ(16,"input",82),t.YNc(17,W,2,0,"span",81),t.qZA()(),t.TgZ(18,"div",83),t.YNc(19,j,2,0,"button",84),t.YNc(20,X,3,0,"button",85),t.qZA()()()()}if(2&s){const i=t.oxw(3);t.xp6(1),t.Q6J("formGroup",i.sizeForm),t.xp6(6),t.Q6J("ngClass",t.VKq(8,D,i.f.voucher_type.touched&&i.f.voucher_type.invalid)),t.xp6(3),t.Q6J("ngForOf",i.voucherList),t.xp6(1),t.Q6J("ngIf",i.voucher_type&&i.voucher_type.invalid&&i.voucher_type.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(10,D,i.f.description.touched&&i.f.description.invalid)),t.xp6(1),t.Q6J("ngIf",i.description&&i.description.invalid&&i.description.touched),t.xp6(2),t.Q6J("ngIf",!i.loaders),t.xp6(1),t.Q6J("ngIf",i.loaders)}}function et(s,p){if(1&s&&(t.TgZ(0,"div"),t.YNc(1,tt,21,12,"div",74),t.qZA()),2&s){const i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",i.addForm)}}function it(s,p){if(1&s&&(t.TgZ(0,"option",86),t._uU(1),t.qZA()),2&s){const i=p.$implicit;t.s9C("value",null==i?null:i.title),t.xp6(1),t.Oqu(null==i?null:i.title)}}function rt(s,p){1&s&&(t.TgZ(0,"span",87),t._uU(1,"Select Voucher Type "),t.qZA())}function st(s,p){1&s&&(t.TgZ(0,"span",87),t._uU(1,"Enter Size description"),t.qZA())}function nt(s,p){1&s&&(t.TgZ(0,"button",88),t._uU(1,"Submit"),t.qZA())}function ot(s,p){1&s&&(t.TgZ(0,"button",89),t._UZ(1,"span",90),t._uU(2," \xa0 Submit"),t.qZA())}function lt(s,p){if(1&s){const i=t.EpF();t.TgZ(0,"div",7)(1,"form",75),t.NdJ("ngSubmit",function(){t.CHM(i);const o=t.oxw(3);return t.KtG(o.update())}),t.TgZ(2,"div",0)(3,"div",76)(4,"div",77)(5,"label"),t._uU(6,"Select Voucher Type*"),t.qZA(),t.TgZ(7,"select",78)(8,"option",79),t._uU(9,"Select Voucher Type"),t.qZA(),t.YNc(10,it,2,2,"option",80),t.qZA(),t.YNc(11,rt,2,0,"span",81),t.qZA()(),t.TgZ(12,"div",76)(13,"div",77)(14,"label"),t._uU(15,"Description*"),t.qZA(),t._UZ(16,"input",82),t.YNc(17,st,2,0,"span",81),t.qZA()(),t.TgZ(18,"div",83),t.YNc(19,nt,2,0,"button",84),t.YNc(20,ot,3,0,"button",85),t.qZA()()()()}if(2&s){const i=t.oxw(3);t.xp6(1),t.Q6J("formGroup",i.sizeForm),t.xp6(6),t.Q6J("ngClass",t.VKq(8,D,i.f.voucher_type.touched&&i.f.voucher_type.invalid)),t.xp6(3),t.Q6J("ngForOf",i.voucherList),t.xp6(1),t.Q6J("ngIf",i.voucher_type&&i.voucher_type.invalid&&i.voucher_type.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(10,D,i.f.description.touched&&i.f.description.invalid)),t.xp6(1),t.Q6J("ngIf",i.description&&i.description.invalid&&i.description.touched),t.xp6(2),t.Q6J("ngIf",!i.loaders),t.xp6(1),t.Q6J("ngIf",i.loaders)}}function at(s,p){if(1&s&&(t.TgZ(0,"div"),t.YNc(1,lt,21,12,"div",74),t.qZA()),2&s){const i=t.oxw(2);t.xp6(1),t.Q6J("ngIf",!i.addForm)}}function pt(s,p){if(1&s&&(t.TgZ(0,"div",72)(1,"div",2),t.YNc(2,G,2,1,"div",73),t.YNc(3,V,2,1,"div",73),t.qZA(),t.TgZ(4,"div",6),t.YNc(5,et,2,1,"div",34),t.YNc(6,at,2,1,"div",34),t.qZA()()),2&s){const i=t.oxw();t.xp6(2),t.Q6J("ngIf",i.addForm),t.xp6(1),t.Q6J("ngIf",!i.addForm),t.xp6(2),t.Q6J("ngIf",i.isAdd),t.xp6(1),t.Q6J("ngIf",i.isEdit)}}const ut=[{path:"",component:(()=>{class s{constructor(i,n,o,a,d){this.contactService=i,this.fb=n,this.toastr=o,this.router=a,this.cs=d,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.select=!1,this.loader=!0,this.allSelected=!1,this.loaders=!1,this.addForm=!0,this.key="id",this.reverse=!0,this.navigateData=this.router.getCurrentNavigation()?.extras?.state?.id,this.navigateData&&this.editForm(this.navigateData)}get f(){return this.sizeForm.controls}confirmText(i,n){h().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.contactService.deleteTerms(n).subscribe(a=>{this.delRes=a,this.delRes.success?(this.ngOnInit(),h().fire({icon:"success",title:"Deleted!",text:this.delRes.msg})):h().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}deActivate(i,n){h().fire({title:"Are you sure?",text:"Do you want to Deactivate this terms!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&(this.contactService.TermsIsActive(n,"").subscribe(a=>{this.delRes=a,this.delRes.success&&this.ngOnInit()}),h().fire({icon:"success",title:"Deactivate!",text:"Terms Is Deactivate Successfully."}))})}Active(i,n){h().fire({title:"Are you sure?",text:"Do you want to Active this terms!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(o=>{o.isConfirmed&&this.contactService.TermsIsActive(n,"").subscribe(a=>{this.delRes=a,this.delRes.success&&(h().fire({icon:"success",title:"Active!",text:this.delRes.msg}),this.ngOnInit())})})}ngOnInit(){this.sizeForm=this.fb.group({voucher_type:new u.NI(""),description:new u.NI("")}),this.getVoucher(),this.contactService.getTerms().subscribe(i=>{this.tableData=i,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1)}),this.cs.userDetails$.subscribe(i=>{this.userDetails=i;const n=this.userDetails?.permission;console.log(n),n?.map(o=>{"master"===o.content_type.app_label&&"terms"===o.content_type.model&&"add_terms"==o.codename?(this.isAdd=o.codename,console.log(this.isAdd)):"master"===o.content_type.app_label&&"terms"===o.content_type.model&&"change_terms"==o.codename?(this.isEdit=o.codename,console.log(this.isEdit)):"master"===o.content_type.app_label&&"terms"===o.content_type.model&&"delete_terms"==o.codename&&(this.isDelete=o.codename)})})}getVoucher(){this.contactService.getVoucherType().subscribe(i=>{console.log(i),this.voucherList=i})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(i){this.tableData.forEach(i?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}submit(){this.sizeForm.valid?(this.loaders=!0,this.contactService.addTerms(this.sizeForm.value).subscribe(i=>{this.addRes=i,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.sizeForm.reset(),this.ngOnInit()):this.loaders=!1},i=>{this.loaders=!1})):(this.sizeForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}update(){this.sizeForm.valid?(this.loaders=!0,this.contactService.updateTerms(this.sizeForm.value,this.id).subscribe(i=>{this.addRes=i,this.addRes.success?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.sizeForm.reset(),this.addForm=!0,this.ngOnInit(),this.loaders=!1):this.loaders=!1},i=>{this.loaders=!1})):(this.sizeForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields"))}get voucher_type(){return this.sizeForm.get("voucher_type")}get description(){return this.sizeForm.get("description")}editForm(i){this.id=i,this.contactService.getTermsById(i).subscribe(n=>{i==n.id&&(this.addForm=!1,this.sizeForm.patchValue(n),this.editFormdata=n)})}openaddForm(){this.addForm=!0,this.sizeForm.reset(),this.ngOnInit()}search(){if(""===this.titlee)this.ngOnInit();else{const i=this.titlee.toLocaleLowerCase();this.tableData=this.tableData.filter(n=>n.voucher_type.toLocaleLowerCase().includes(i))}}sort(i){this.key=i,this.reverse=!this.reverse}generatePDF(){const i=new y.default;i.setFontSize(15),i.setTextColor(33,43,54),i.text("Terms List",10,10),r()(i,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Vouche"},{header:"Description"},{header:"Is Active"}]}),i.save("term.pdf")}generatePDFAgain(){const i=new y.default;i.setFontSize(12),i.setTextColor(33,43,54),i.text("Terms List",82,10),i.text("",10,15),r()(i,{head:[["#","Voucher","Description"]],body:this.tableData.map((o,a)=>[a+1,o.voucher_type,o.description]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),i.save("Terms _List  .pdf")}getVisibleDataFromTable(){const i=[],n=document.getElementById("mytable"),o=n.querySelector("thead tr"),a=n.querySelectorAll("tbody tr"),d=[];return o.querySelectorAll("th").forEach(m=>{const f=m.textContent.trim();"Is Active"!==f&&"Action"!==f&&d.push(f)}),i.push(d),a.forEach(m=>{const f=[];m.querySelectorAll("td").forEach(S=>{f.push(S.textContent.trim())}),i.push(f)}),i}exportToExcel(){const i=this.getVisibleDataFromTable(),n=l.P6.aoa_to_sheet(i),o=l.P6.book_new();l.P6.book_append_sheet(o,n,"Sheet1");const a=l.cW(o,{bookType:"xlsx",type:"array"}),d=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,x.saveAs)(d,"term.xlsx")}printTable(){const i=document.getElementById("mytable"),a=document.querySelector(".titl").outerHTML,d=i.cloneNode(!0),m=d.querySelector("th.thone:nth-child(5)");m&&m.remove();const f=d.querySelector("th.thone:last-child");f&&f.remove(),d.querySelectorAll("tr").forEach(M=>{const F=M.querySelector("td:nth-child(5)");F&&F.remove();const q=M.querySelector("td:last-child");q&&q.remove()});const gt=d.outerHTML,vt="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+gt,ft=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=vt,window.print(),document.body.innerHTML=ft}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.tableData.length)}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(b.y),t.Y36(u.qu),t.Y36(A._W),t.Y36(g.F0),t.Y36(Z.J))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-terms"]],decls:83,vars:12,consts:[[1,"row"],[1,"col-lg-7","col-sm-7","col-12"],[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],["class","thone",3,"click",4,"ngIf"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["class","col-lg-5 col-sm-5 col-12",4,"ngIf"],[1,"page-btn"],["class","btn btn-added",3,"click",4,"ngIf"],[1,"btn","btn-added",3,"click"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],[3,"ngModel","click","ngModelChange"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"click",4,"ngIf"],["class","me-3 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"me-1",3,"click"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-3","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-5","col-sm-5","col-12"],["class","page-title",4,"ngIf"],["class","card-body",4,"ngIf"],[3,"formGroup","ngSubmit"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group"],["formControlName","voucher_type",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],["type","text","formControlName","description","placeholder","Enter Description","id","description",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],[3,"value"],[1,"text-danger"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(i,n){if(1&i){const o=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Terms list"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Terms"),t.qZA()(),t.YNc(8,N,2,1,"div",5),t.qZA(),t.TgZ(9,"div",6)(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"a",11),t._UZ(15,"img",12),t.TgZ(16,"span"),t._UZ(17,"img",13),t.qZA()()(),t.TgZ(18,"div",14)(19,"a",15),t._UZ(20,"img",16),t.qZA(),t.TgZ(21,"div",17)(22,"label")(23,"input",18),t.NdJ("ngModelChange",function(d){return n.titlee=d})("ngModelChange",function(){return n.search()}),t.qZA()()()()(),t.TgZ(24,"div",19)(25,"ul")(26,"li")(27,"a",20),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(28,"img",21),t.qZA()(),t.TgZ(29,"li")(30,"a",22),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(31,"img",23),t.qZA()(),t.TgZ(32,"li")(33,"a",24),t.NdJ("click",function(){return n.printTable()}),t._UZ(34,"img",25),t.qZA()()()()(),t.TgZ(35,"div",26)(36,"table",27)(37,"thead")(38,"tr")(39,"th",28),t.NdJ("click",function(){return n.sort("id")}),t.TgZ(40,"label",29),t.NdJ("click",function(){return n.selectAll(n.initChecked)}),t.TgZ(41,"input",30),t.NdJ("ngModelChange",function(d){return n.allSelected=d})("change",function(){return n.selectAlll()}),t.qZA(),t._UZ(42,"span",31),t.qZA(),t._UZ(43,"i",32),t.qZA(),t.TgZ(44,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(45,"Sr.No. "),t._UZ(46,"i",32),t.qZA(),t.TgZ(47,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(48,"Voucher"),t._UZ(49,"i",32),t.qZA(),t.TgZ(50,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(51,"Description"),t._UZ(52,"i",32),t.qZA(),t.TgZ(53,"th",28),t.NdJ("click",function(){return n.sort("id")}),t._uU(54,"Is Active "),t._UZ(55,"i",32),t.qZA(),t.YNc(56,P,3,0,"th",33),t.qZA()(),t.YNc(57,Y,4,11,"tbody",34),t.YNc(58,R,5,0,"tbody",34),t.qZA(),t.TgZ(59,"div",35),t.YNc(60,O,1,0,"mat-progress-bar",36),t.qZA(),t.TgZ(61,"div",0)(62,"div",37)(63,"div",38),t._uU(64," Show per page "),t.TgZ(65,"select",39,40),t.NdJ("ngModelChange",function(d){return n.itemsPerPage=d})("change",function(){t.CHM(o);const d=t.MAs(66);return t.KtG(n.changePg(d.value))}),t.TgZ(67,"option",41),t._uU(68,"10"),t.qZA(),t.TgZ(69,"option",42),t._uU(70,"20"),t.qZA(),t.TgZ(71,"option",43),t._uU(72,"30"),t.qZA(),t.TgZ(73,"option",44),t._uU(74,"50"),t.qZA(),t.TgZ(75,"option",45),t._uU(76,"All"),t.qZA()()()(),t.TgZ(77,"div",46)(78,"div",47)(79,"pagination-controls",48),t.NdJ("pageChange",function(d){return n.p=d}),t.qZA(),t.TgZ(80,"div",49),t._uU(81),t.qZA()()()()()()()(),t.YNc(82,pt,7,4,"div",50),t.qZA()}2&i&&(t.xp6(8),t.Q6J("ngIf",!n.addForm),t.xp6(15),t.Q6J("ngModel",n.titlee),t.xp6(18),t.Q6J("ngModel",n.allSelected),t.xp6(15),t.Q6J("ngIf",n.isEdit||n.isDelete),t.xp6(1),t.Q6J("ngIf",(null==n.tableData?null:n.tableData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==n.tableData?null:n.tableData.length)&&!n.loader),t.xp6(2),t.Q6J("ngIf",n.loader),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(16),t.lnq("Showing ",n.itemsPerPage," to ",null==n.tableData?null:n.tableData.length," of ",n.p," entries"),t.xp6(1),t.Q6J("ngIf",n.isAdd||n.isEdit))},dependencies:[_.mk,_.sg,_.O5,g.yS,u._Y,u.YN,u.Kr,u.Fj,u.Wl,u.EJ,u.JJ,u.JL,u.On,u.sg,u.u,v.pW,T.LS,$.Rr,T._s,J.T],styles:["select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),s})(),canActivate:[c(30597).l],data:{allowedRoles:["add_terms","change_terms","delete_terms","view_terms"]}}];let ht=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[g.Bz.forChild(ut),g.Bz]}),s})();var mt=c(8468);let _t=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[_.ez,ht,mt.I]}),s})()},30597:(I,U,c)=>{c.d(U,{l:()=>y});var _=c(94650),g=c(4392),u=c(97185),C=c(42917),h=c(80927);let y=(()=>{class e{constructor(l,x,t,b,A){this.router=l,this.Arout=x,this.toastr=t,this.profileService=b,this.coreService=A}canActivate(l,x){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(b=>{this.userDetails=b,this.permissions=this.userDetails?.permission}),t){const b=l.data.allowedRoles,A=t.some(v=>b.includes(v.codename));let Z=this.coreService.profileData$.value;if(Z&&Z.username){this.userDetails=Z,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(Z);const v=Z?.permission,T=this.profileService.getUserDetails();(!T||T.length!==v.length)&&(this.profileService.setUserPermission(v),window.location.reload())}else this.coreService.getProfile().subscribe(v=>{this.userDetails=v,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(v);const T=v?.permission,$=this.profileService.getUserDetails();(!$||$.length!==T.length)&&(this.profileService.setUserPermission(T),window.location.reload())});if(A)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(l){return new(l||e)(_.LFG(g.F0),_.LFG(g.gz),_.LFG(u._W),_.LFG(C.J),_.LFG(h.p))},e.\u0275prov=_.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);