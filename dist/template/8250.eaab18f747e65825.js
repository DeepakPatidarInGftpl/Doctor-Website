"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8250],{25062:($,A,c)=>{c.d(A,{y:()=>b});var g=c(92340),_=c(94650),p=c(80529);let b=(()=>{class v{constructor(n){this.http=n,this.apiUrl=`${g.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(n){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${n}`)}SupplierIsActive(n,r){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${n}`,r)}addSupplier(n){return this.http.post(this.apiUrl+"/pv-api/supplier/",n)}updateSupplier(n,r){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,n)}deleteSupplier(n){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${n}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(n){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${n}`)}VendorIsActive(n,r){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${n}`,r)}addVendor(n){return this.http.post(this.apiUrl+"/pv-api/vendor/",n)}updateVendor(n,r){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,n)}deleteVendor(n){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${n}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(n){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${n}`)}PaymentTermsIsActive(n,r){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${n}`,r)}addPaymentTerms(n){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",n)}updatePaymentTerms(n,r){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,n)}deletePaymentTerms(n){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${n}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(n){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${n}`)}TransportIsActive(n,r){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${n}`,r)}addTransport(n){return this.http.post(this.apiUrl+"/pv-api/transport/",n)}updateTransport(n,r){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,n)}deleteTransport(n){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${n}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(n){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${n}`)}EmployeeIsActive(n,r){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${n}`,r)}addEmployee(n){return this.http.post(this.apiUrl+"/pv-api/employee/",n)}updateEmployee(n,r){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,n)}deleteEmployee(n){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${n}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(n){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${n}`)}CustomerIsActive(n,r){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${n}`,r)}addCustomer(n){return this.http.post(this.apiUrl+"/pv-api/customer/",n)}updateCustomer(n,r){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,n)}deleteCustomer(n){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${n}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(n){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${n}`)}UserIsActive(n,r){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${n}`,r)}addUser(n){return this.http.post(this.apiUrl+"/pv-api/user/",n)}updateUser(n,r){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${r}`,n)}deleteUser(n){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${n}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(n){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${n}`)}addPermissionGroup(n){return this.http.post(this.apiUrl+"/pv-api/group/",n)}updatePermissionGroup(n,r){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`,n)}deletePermissionGroup(n){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${n}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(n){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${n}`)}DealerIsActive(n,r){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${n}`,r)}addDealer(n){return this.http.post(this.apiUrl+"/pv-api/dealer/",n)}updateDealer(n,r){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,n)}deleteDealer(n){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${n}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(n){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+n)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(n){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${n}`)}TermsIsActive(n,r){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${n}`,r)}addTerms(n){return this.http.post(this.apiUrl+"/pv-api/terms/",n)}updateTerms(n,r){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,n)}deleteTerms(n){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${n}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(n){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${n}`)}DepartmentIsActive(n,r){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${n}`,r)}addDepartment(n){return this.http.post(this.apiUrl+"/pv-api/department/",n)}updateDepartment(n,r){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${r}`,n)}deleteDepartment(n){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${n}`)}}return v.\u0275fac=function(n){return new(n||v)(_.LFG(p.eN))},v.\u0275prov=_.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},48250:($,A,c)=>{c.r(A),c.d(A,{UpdateExpensesModule:()=>lt});var g=c(36895),_=c(89299),p=c(24006),b=c(68675),v=c(54004),t=c(94650),n=c(97185),r=c(71071),l=c(25062),F=c(43443),f=c(47957),x=c(3238),C=c(59549),Z=c(44144);function N(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"mat-option",48),t.NdJ("onSelectionChange",function(){t.CHM(e);const a=t.oxw().$implicit,s=t.oxw();return t.KtG(s.oncheckParty(a.id))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.name)+" - "+(null==e?null:e.username)),t.xp6(1),t.Oqu((null==e?null:e.name)+" - "+(null==e?null:e.username))}}function P(i,u){if(1&i&&(t.ynx(0),t.YNc(1,N,2,2,"mat-option",47),t.BQk()),2&i){const e=u.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function q(i,u){1&i&&(t.TgZ(0,"mat-option",51)(1,"a",52),t._uU(2,"+ Add Party"),t.qZA()()),2&i&&t.Q6J("value","No data found")}function M(i,u){1&i&&(t.TgZ(0,"mat-option",53),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function O(i,u){if(1&i&&(t.ynx(0),t.YNc(1,q,3,1,"mat-option",49),t.YNc(2,M,2,0,"mat-option",50),t.BQk()),2&i){const e=u.ngIf,o=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==o.fromPartyControl.value?null:o.fromPartyControl.value.length)<3)}}function S(i,u){1&i&&(t.TgZ(0,"span",54),t._uU(1,"Select party "),t.qZA())}function J(i,u){1&i&&(t.TgZ(0,"span",54),t._uU(1,"Select Expense Date"),t.qZA())}function D(i,u){1&i&&(t.TgZ(0,"span",54),t._uU(1,"Enter Expence Voucher Series"),t.qZA())}function V(i,u){1&i&&(t.TgZ(0,"span",54),t._uU(1,"Enter Refrence Bill No."),t.qZA())}function Q(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"span",55),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.addCart(0))}),t._uU(1,"Add Cart+"),t.qZA()}}function L(i,u){if(1&i){const e=t.EpF();t.O4$(),t.TgZ(0,"svg",74),t.NdJ("click",function(){t.CHM(e);const a=t.oxw().index,s=t.oxw();return t.KtG(s.addCart(a+1))}),t._UZ(1,"path",59)(2,"path",75),t.qZA()}}function R(i,u){if(1&i){const e=t.EpF();t.TgZ(0,"mat-option",48),t.NdJ("onSelectionChange",function(){t.CHM(e);const a=t.oxw().$implicit,s=t.oxw().index,d=t.oxw();return t.KtG(d.oncheck(a,s))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.account_id),t.xp6(1),t.hij(" ",null==e?null:e.account_id," ")}}function Y(i,u){if(1&i&&(t.ynx(0),t.YNc(1,R,2,2,"mat-option",47),t.BQk()),2&i){const e=u.$implicit;t.xp6(1),t.Q6J("ngIf",1==(null==e?null:e.is_active))}}function B(i,u){1&i&&(t.TgZ(0,"mat-option",51)(1,"a",76),t._uU(2,"+ Add Account"),t.qZA()()),2&i&&t.Q6J("value","No data found")}function G(i,u){1&i&&(t.TgZ(0,"mat-option",53),t._uU(1," Please Enter 1 or more characters "),t.qZA())}function k(i,u){1&i&&(t.TgZ(0,"span",77),t._uU(1,"Select Account"),t.qZA())}function K(i,u){1&i&&(t.TgZ(0,"span",77),t._uU(1,"Select Amount Type"),t.qZA())}function z(i,u){1&i&&(t.TgZ(0,"span",77),t._uU(1,"Enter Amount"),t.qZA())}function W(i,u){1&i&&(t.TgZ(0,"span",77),t._uU(1,"Enter Discount (ex:1-100)"),t.qZA())}function H(i,u){1&i&&(t.TgZ(0,"span",77),t._uU(1,"Enter Tax (ex:1-100)"),t.qZA())}function X(i,u){1&i&&(t.TgZ(0,"span",77),t._uU(1,"Enter Tax Value"),t.qZA())}function j(i,u){1&i&&(t.TgZ(0,"span",77),t._uU(1,"Enter Total"),t.qZA())}function tt(i,u){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr",56)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td")(5,"div")(6,"div",57),t.O4$(),t.TgZ(7,"svg",58),t.NdJ("click",function(){const s=t.CHM(e).index,d=t.oxw();return t.KtG(d.removeCart(s))}),t._UZ(8,"path",59)(9,"path",60),t.qZA()(),t.YNc(10,L,3,0,"svg",61),t.qZA()(),t.kcU(),t.TgZ(11,"td")(12,"div",62)(13,"mat-form-field",9)(14,"input",63),t.NdJ("input",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.getFilter(a.target.value))}),t.qZA(),t.TgZ(15,"mat-autocomplete",null,11),t.YNc(17,Y,2,1,"ng-container",12),t.YNc(18,B,3,1,"mat-option",49),t.YNc(19,G,2,0,"mat-option",50),t.qZA()()(),t.YNc(20,k,2,0,"span",64),t.qZA(),t.TgZ(21,"td")(22,"select",65)(23,"option",66),t._uU(24,"Service"),t.qZA(),t.TgZ(25,"option",67),t._uU(26,"Product"),t.qZA()(),t.YNc(27,K,2,0,"span",64),t.qZA(),t.TgZ(28,"td"),t._UZ(29,"input",68),t.qZA(),t.TgZ(30,"td")(31,"input",69),t.NdJ("blur",function(){const s=t.CHM(e).index,d=t.oxw();return t.KtG(d.calculateTotalEveryIndex(s))}),t.qZA(),t.YNc(32,z,2,0,"span",64),t.qZA(),t.TgZ(33,"td")(34,"input",70),t.NdJ("blur",function(){const s=t.CHM(e).index,d=t.oxw();return t.KtG(d.calculateTotalEveryIndex(s))}),t.qZA(),t.YNc(35,W,2,0,"span",64),t.qZA(),t.TgZ(36,"td")(37,"input",71),t.NdJ("blur",function(){const s=t.CHM(e).index,d=t.oxw();return t.KtG(d.calculateTotalEveryIndex(s))}),t.qZA(),t.YNc(38,H,2,0,"span",64),t.qZA(),t.TgZ(39,"td"),t._UZ(40,"input",72),t.YNc(41,X,2,0,"span",64),t.qZA(),t.TgZ(42,"td"),t._UZ(43,"input",73),t.YNc(44,j,2,0,"span",64),t.qZA()(),t.BQk()}if(2&i){const e=u.index,o=t.MAs(16),a=t.oxw();let s;t.xp6(1),t.Q6J("formGroupName",e),t.xp6(2),t.Oqu(e+1+"."),t.xp6(7),t.Q6J("ngIf",a.isLastCart(e)),t.xp6(4),t.Q6J("formControl",a.myControls.at(e))("matAutocomplete",o),t.xp6(3),t.Q6J("ngForOf",a.filterAccount),t.xp6(1),t.Q6J("ngIf",0===(null==a.filterAccount?null:a.filterAccount.length)),t.xp6(1),t.Q6J("ngIf",(null==(s=a.myControls.at(e))||null==s.value?null:s.value.length)<1),t.xp6(1),t.Q6J("ngIf",a.account(e)&&a.account(e).invalid&&a.account(e).touched),t.xp6(7),t.Q6J("ngIf",a.service_or_product(e)&&a.service_or_product(e).invalid&&a.service_or_product(e).touched),t.xp6(5),t.Q6J("ngIf",a.amount(e)&&a.amount(e).invalid&&a.amount(e).touched),t.xp6(3),t.Q6J("ngIf",a.discount(e)&&a.discount(e).invalid&&a.discount(e).touched),t.xp6(3),t.Q6J("ngIf",a.tax(e)&&a.tax(e).invalid&&a.tax(e).touched),t.xp6(3),t.Q6J("ngIf",a.tax_value(e)&&a.tax_value(e).invalid&&a.tax_value(e).touched),t.xp6(3),t.Q6J("ngIf",a.total(e)&&a.total(e).invalid&&a.total(e).touched)}}function et(i,u){1&i&&(t.TgZ(0,"span",54),t._uU(1,"Enter note "),t.qZA())}function nt(i,u){1&i&&(t.TgZ(0,"button",78),t._uU(1,"Submit"),t.qZA())}function rt(i,u){1&i&&(t.TgZ(0,"button",79),t._UZ(1,"span",80),t._uU(2,"\xa0 Submit"),t.qZA())}const E=function(i){return{"is-invalid":i}},w=function(i){return{color:i}},it=[{path:"",component:(()=>{class i{constructor(e,o,a,s,d,m,h){this.fb=e,this.router=o,this.toastrService=a,this.transactionService=s,this.Arout=d,this.contactService=m,this.commonService=h,this.minDate="",this.maxDate="",this.fromPartyControl=new p.NI,this.userList=[],this.accountList=[],this.filterAccount=[],this.isCart=!1,this.dateError=null,this.loaders=!1,this.isPercentage=[],this.isAmount=[],this.taxIntoRupees=[],this.roundOff=0,this.isMinus=!1}get f(){return this.expensevoucherForm.controls}ngOnInit(){const e=(new Date).toISOString().split("T")[0];this.id=this.Arout.snapshot.paramMap.get("id"),this.myControls=new p.Oe([]),this.expensevoucherForm=this.fb.group({party:new p.NI("",[p.kI.required]),expense_date:new p.NI(e,[p.kI.required]),expense_no:new p.NI("",[p.kI.required]),refrence_bill_no:new p.NI(""),reverse_charge:new p.NI(""),created_from:new p.NI("ERP"),expenses_voucher_cart:this.fb.array([]),tax_amount:new p.NI(0),total_amount:new p.NI(0),round_off:new p.NI(0),net_amount:new p.NI(0),paid_amount:new p.NI(0),status:new p.NI(""),note:new p.NI("")}),this.transactionService.getExpensVoucherById(this.id).subscribe(a=>{this.editRes=a,this.expensevoucherForm.patchValue(this.editRes),this.fromPartyControl.setValue(a?.party?.name),this.roundOff=a.round_off,this.expensevoucherForm.get("party")?.patchValue(a?.party?.id),this.editRes?.cart?.length>0?this.expensevoucherForm.setControl("expenses_voucher_cart",this.udateCart(this.editRes?.cart)):this.isCart=!0}),this.getAccount(),this.getUser(),this.getprefix(),this.filteredFromParty=this.fromPartyControl.valueChanges.pipe((0,b.O)(""),(0,v.U)(a=>this._filter2(a,!0)));const o=localStorage.getItem("financialYear");this.dateValidation(o)}dateValidation(e){const o=this.expensevoucherForm.get("expense_date"),{formattedMinDate:a,formattedMaxDate:s}=this.commonService.setMinMaxDates(o,e);this.minDate=a,this.maxDate=s}_filter2(e,o){const a="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),s=this.userList.filter(o?d=>d?.name?.toLowerCase().includes(a)||d?.username?.toLowerCase().includes(a):d=>!d?.name?.toLowerCase().includes(a)||!d?.username?.toLowerCase().includes(a));return!o&&0===s.length&&s.push({party:"No data found"}),s}getUser(){this.contactService.getUser().subscribe(e=>{this.userList=e})}getprefix(){this.transactionService.getExpenceVoucherPrefix().subscribe(e=>{console.log(e),1==e.success?this.prefixNo=e.data:this.toastrService.error(e.msg)},e=>{this.toastrService.error(e.error.msg)})}udateCart(e){console.log(e);let o=new p.Oe([]);return e.forEach((a,s)=>{a.discount>100&&(this.isAmount[s]=!0,this.isPercentage[s]=!1),a.discount<=100&&(this.isPercentage[s]=!0,this.isAmount[s]=!1),o.push(this.fb.group({account:a?.account,service_or_product:a?.service_or_product,amount:a?.amount,discount:a?.discount,tax:a?.tax,tax_value:a?.tax_value,total:a?.total,description:a?.description})),this.myControls.push(new p.NI(a.account))}),o}getAccount(){this.transactionService.getAccount().subscribe(e=>{this.accountList=e,this.filterAccount=e})}getFilter(e){this.filterAccount=this.accountList.filter(o=>!(!o||!o.account_id)&&o.account_id.toLowerCase().includes(e)),console.log(this.filterAccount)}oncheck(e,o){this.expensevoucherForm.get("expenses_voucher_cart").at(o).patchValue({account:e?.id})}oncheckParty(e){let o=e;this.expensevoucherForm.get("party")?.patchValue(o)}cart(){return this.fb.group({account:new p.NI("",[p.kI.required]),service_or_product:new p.NI(""),amount:new p.NI(0,[p.kI.required]),discount:new p.NI(0,[p.kI.required,p.kI.pattern(/^(100|[0-9]{1,2})$/)]),tax:new p.NI(0,[p.kI.pattern(/^(100|[0-9]{1,2})$/)]),tax_value:new p.NI(0),total:new p.NI(0),description:""})}getCart(){return this.expensevoucherForm.get("expenses_voucher_cart")}addCart(e){this.getCart().push(this.cart()),this.isCart=!1,e>0&&(this.isPercentage[e]=!0,this.isAmount[e]=!1)}removeCart(e){this.getCart().removeAt(e)}isLastCart(e){return e===this.getCart().controls.length-1}submit(){if(console.log(this.expensevoucherForm.value),this.expensevoucherForm.valid){this.loaders=!0;let e=new FormData;e.append("party",this.expensevoucherForm.get("party")?.value),e.append("expense_date",this.expensevoucherForm.get("expense_date")?.value),e.append("expense_no",this.expensevoucherForm.get("expense_no")?.value),e.append("refrence_bill_no",this.expensevoucherForm.get("refrence_bill_no")?.value),e.append("reverse_charge",this.expensevoucherForm.get("reverse_charge")?.value),e.append("created_from",this.expensevoucherForm.get("created_from")?.value),e.append("tax_amount",this.expensevoucherForm.get("tax_amount")?.value),e.append("total_amount",this.expensevoucherForm.get("total_amount")?.value),e.append("round_off",this.expensevoucherForm.get("round_off")?.value),e.append("net_amount",this.expensevoucherForm.get("net_amount")?.value),e.append("status",this.expensevoucherForm.get("status")?.value),e.append("note",this.expensevoucherForm.get("note")?.value);const o=this.expensevoucherForm.get("expenses_voucher_cart"),a=[];o.controls.forEach(s=>{const d=s,m={};Object.keys(d.controls).forEach(h=>{const U=d.controls[h];m[h]="service_or_product"===h||"description"===h||isNaN(U.value)?U.value:parseFloat(U.value)}),a.push(m)}),e.append("expenses_voucher_cart",JSON.stringify(a)),this.transactionService.updateExpensVoucher(e,this.id).subscribe(s=>{this.loaders=!1,this.addRes=s,this.addRes.success?(this.toastrService.success(this.addRes.msg),this.expensevoucherForm.reset(),this.router.navigate(["//transaction/expensesList"])):this.loaders=!1},s=>{this.loaders=!1})}else this.expensevoucherForm.markAllAsTouched(),this.toastrService.error("Please Fill All The Required Fields")}get party(){return this.expensevoucherForm.get("party")}get expense_date(){return this.expensevoucherForm.get("expense_date")}get expense_no(){return this.expensevoucherForm.get("expense_no")}get refrence_bill_no(){return this.expensevoucherForm.get("refrence_bill_no")}get reverse_charge(){return this.expensevoucherForm.get("reverse_charge")}get created_from(){return this.expensevoucherForm.get("created_from")}get tax_amount(){return this.expensevoucherForm.get("tax_amount")}get total_amount(){return this.expensevoucherForm.get("total_amount")}get round_off(){return this.expensevoucherForm.get("round_off")}get net_amount(){return this.expensevoucherForm.get("net_amount")}get paid_amount(){return this.expensevoucherForm.get("paid_amount")}get note(){return this.expensevoucherForm.get("note")}account(e){return this.getCart().controls[e].get("account")}service_or_product(e){return this.getCart().controls[e].get("service_or_product")}amount(e){return this.getCart().controls[e].get("amount")}discount(e){return this.getCart().controls[e].get("discount")}tax(e){return this.getCart().controls[e].get("tax")}tax_value(e){return this.getCart().controls[e].get("tax_value")}total(e){return this.getCart().controls[e].get("total")}totalDiscount(){let e=0;return this.getCart().controls.forEach((o,a)=>{const s=this.getCart().controls[a].get("discount");s&&(e+=+s.value||0)}),e}totalAmount(){let e=0;return this.getCart().controls.forEach((o,a)=>{const s=this.getCart().controls[a].get("amount");s&&(e+=+s.value||0)}),e}totalTax(){let e=0;return this.getCart().controls.forEach((o,a)=>{const s=this.getCart().controls[a].get("tax");s&&(e+=+s.value||0)}),e}totalTaxValue(){let e=0;return this.getCart().controls.forEach((o,a)=>{const s=this.getCart().controls[a].get("tax_value");s&&(e+=+s.value||0)}),e}totalTotal(){let e=0;return this.getCart().controls.forEach((o,a)=>{const s=this.getCart().controls[a].get("total");s&&(e+=+s.value||0)}),e}percentage(e){this.isPercentage[e]=!1,this.isAmount[e]=!0}rupees(e){this.isPercentage[e]=!0,this.isAmount[e]=!1}calculateTotalEveryIndex(e){const o=this.getCart().controls[e],a=o.get("amount"),s=o.get("tax"),d=o.get("discount");if(a&&s&&d){const m=+d.value||0,h=+a.value||0,U=+s.value||0;if(console.log(m,"discountPercentage"),console.log(h,"amountControlValue"),console.log(U,"taxPercentageValue"),1==this.isPercentage[e]){let I=h*m/100;console.log(I,"discount price");let T=h-I;console.log(T,"getCoastPrice");let y=T*U/100;console.log(y,"taxPrice"),this.taxIntoRupees[e]=y||0,console.log(this.taxIntoRupees,"tax value"),o.get("tax_value")?.patchValue(y);let ut=h+y;o.get("total")?.patchValue(ut)}else if(1==this.isAmount[e]){let I=h-m;console.log(I,"getCoastPrice");let T=I*U/100;console.log(T,"taxPrice"),this.taxIntoRupees[e]=T||0,console.log(this.taxIntoRupees,"tax value"),o.get("tax_value")?.patchValue(T);let y=h+T;o.get("total")?.patchValue(y)}}return 0}changeValue(e){this.roundOff=this.expensevoucherForm.get("round_off")?.value,console.log(this.roundOff,"this.roundoff"),e?(this.expensevoucherForm.get("round_off")?.patchValue(e),console.log(this.expensevoucherForm.get("round_off")?.value),this.roundOff=e,console.log(this.expensevoucherForm.value)):this.expensevoucherForm.get("round_off")?.patchValue(this.roundOff)}updateValue(e){this.roundOff="+"===e?Math.abs(this.roundOff):-Math.abs(this.roundOff),this.isMinus="-"===e}calculateTotal(){let e=0,o=0,a=this.expensevoucherForm.get("round_off")?.value;this.getCart().controls.forEach((d,m)=>{const h=this.getCart().controls[m].get("total");h&&(e+=+h.value||0)});const s=parseFloat(a)||0;return o=e+s,o}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(p.qu),t.Y36(_.F0),t.Y36(n._W),t.Y36(r.p),t.Y36(_.gz),t.Y36(l.y),t.Y36(F.R))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-update-expenses"]],decls:160,vars:68,consts:[[1,"page-header"],[1,"page-title"],["id","purchaseForm",1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-md-6","col-12"],[1,"form-group"],[2,"color","red"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Party","aria-label","Party","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["autos","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-3","col-sm-6","col-12"],["type","date","formControlName","expense_date",3,"ngClass"],["type","text","formControlName","expense_no","placeholder","Enter Expence Voucher No.","readonly","",3,"ngClass"],["type","text","formControlName","refrence_bill_no","placeholder","Enter Refrence Bill No.",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12","d-flex","align-items-center"],[1,"form-group","mt-4"],[1,"d-flex"],["type","checkbox","formControlName","reverse_charge",3,"id","ngModel"],[1,"d_flex",2,"margin-bottom","0","margin-left","5px",3,"for"],[1,"card"],[1,"table-responsive"],[1,"table","datanew"],["colspan","3"],["class","debitIntoCart",3,"click",4,"ngIf"],["formArrayName","expenses_voucher_cart"],[2,"background","rgba(145, 158, 171, 0.32)"],[1,"text-start"],[1,"col-lg-6","my-3"],["formControlName","note","placeholder","Enter Note",3,"ngClass"],[1,"total-order"],["type","text","formControlName","tax_amount",1,"input",2,"display","none",3,"ngModel"],["type","text","formControlName","net_amount",1,"input",2,"display","none",3,"ngModel"],[2,"display","inline-grid"],["data-bs-toggle","tooltip","title","ion-plus-circled",1,"ion-plus-circled","mx-1",3,"ngStyle","click"],["data-bs-toggle","tooltip","title","ion-minus-circled",1,"ion-minus-circled","mx-1",3,"ngStyle","click"],["type","text",1,"input",2,"width","34%",3,"value","blur"],[1,"total"],["type","text","formControlName","total_amount",1,"input",2,"display","none",3,"ngModel"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/expensesList",1,"btn","btn-cancel","text-white"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],[3,"value"],["routerLink","//contacts/addSupplier",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],[1,"debitIntoCart",3,"click"],[3,"formGroupName"],[1,"me-2"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"color","red",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["style","color:green","xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","class","bi bi-plus-circle","viewBox","0 0 16 16",3,"click",4,"ngIf"],[1,"form-group",2,"margin-bottom","-1%"],["type","text","placeholder","Search Product","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["class","text-danger","style","display: block;",4,"ngIf"],["formControlName","service_or_product"],["value","Service","selected",""],["value","Product"],["type","text","formControlName","description","placeholder","Enter Note",1,"input"],["type","number","formControlName","amount",1,"input",3,"blur"],["type","number","formControlName","discount",1,"input",3,"blur"],["type","number","formControlName","tax",1,"input",3,"blur"],["type","number","formControlName","tax_value","readonly","",1,"input"],["type","number","formControlName","total","readonly","",1,"input"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle",2,"color","green",3,"click"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],["routerLink","//account/accountlist",2,"color","#FF9F43"],[1,"text-danger",2,"display","block"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,o){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Update Expense Voucher"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Expense Voucher"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Party"),t.TgZ(14,"span",8),t._uU(15,"*"),t.qZA()(),t.TgZ(16,"mat-form-field",9),t._UZ(17,"input",10),t.TgZ(18,"mat-autocomplete",null,11),t.YNc(20,P,2,1,"ng-container",12),t.ALo(21,"async"),t.YNc(22,O,3,2,"ng-container",13),t.ALo(23,"async"),t.qZA()(),t.YNc(24,S,2,0,"span",14),t.qZA()(),t.TgZ(25,"div",15)(26,"div",7)(27,"label"),t._uU(28,"Expense Date"),t.TgZ(29,"span",8),t._uU(30,"*"),t.qZA()(),t._UZ(31,"input",16),t.YNc(32,J,2,0,"span",14),t.qZA()(),t.TgZ(33,"div",15)(34,"div",7)(35,"label"),t._uU(36,"Expence Voucher Series "),t.TgZ(37,"span",8),t._uU(38,"*"),t.qZA()(),t._UZ(39,"input",17),t.YNc(40,D,2,0,"span",14),t.qZA()(),t.TgZ(41,"div",15)(42,"div",7)(43,"label"),t._uU(44,"Refrence Bill No."),t.qZA(),t._UZ(45,"input",18),t.YNc(46,V,2,0,"span",14),t.qZA()(),t.TgZ(47,"div",19)(48,"div",20)(49,"div",21),t._UZ(50,"input",22),t.TgZ(51,"label",23),t._uU(52,"Reverse Charge"),t.qZA()()()()(),t.TgZ(53,"div",24)(54,"div",3)(55,"div",5)(56,"div",25)(57,"table",26)(58,"thead")(59,"tr")(60,"th"),t._uU(61,"#"),t.qZA(),t._UZ(62,"th"),t.TgZ(63,"th"),t._uU(64,"From Account"),t.TgZ(65,"span",8),t._uU(66,"*"),t.qZA()(),t.TgZ(67,"th"),t._uU(68,"Service/Product"),t.qZA(),t.TgZ(69,"th"),t._uU(70,"Note"),t.qZA(),t.TgZ(71,"th"),t._uU(72,"Amount"),t.TgZ(73,"span",8),t._uU(74,"*"),t.qZA()(),t.TgZ(75,"th"),t._uU(76,"Discount (%)"),t.qZA(),t.TgZ(77,"th"),t._uU(78,"Tax (%)"),t.TgZ(79,"span",8),t._uU(80,"*"),t.qZA()(),t.TgZ(81,"th"),t._uU(82,"Tax Value"),t.qZA(),t.TgZ(83,"th"),t._uU(84,"Total"),t.qZA()(),t.TgZ(85,"tr")(86,"th",27),t.YNc(87,Q,2,0,"span",28),t.qZA()()(),t.TgZ(88,"tbody"),t.ynx(89,29),t.YNc(90,tt,45,15,"ng-container",12),t.BQk(),t.TgZ(91,"tr",30),t._UZ(92,"td")(93,"td")(94,"td"),t.TgZ(95,"td",31)(96,"strong"),t._uU(97,"Total"),t.qZA()(),t._UZ(98,"td"),t.TgZ(99,"td",31)(100,"strong"),t._uU(101),t.qZA()(),t.TgZ(102,"td",31)(103,"strong"),t._uU(104),t.qZA()(),t.TgZ(105,"td",31)(106,"strong"),t._uU(107),t.qZA()(),t.TgZ(108,"td",31)(109,"strong"),t._uU(110),t.qZA()(),t.TgZ(111,"td",31)(112,"strong"),t._uU(113),t.qZA()()()()()()()()(),t.TgZ(114,"div",5)(115,"div",32)(116,"div",7)(117,"label"),t._uU(118,"Note"),t.qZA(),t._UZ(119,"textarea",33),t.YNc(120,et,2,0,"span",14),t.qZA()(),t.TgZ(121,"div",32)(122,"div",7)(123,"div",34)(124,"ul")(125,"li")(126,"h4"),t._uU(127,"Tax Amount"),t.qZA(),t.TgZ(128,"h5"),t._uU(129),t.ALo(130,"currency"),t.qZA(),t._UZ(131,"input",35),t.qZA(),t.TgZ(132,"li")(133,"h4"),t._uU(134,"Sub Total"),t.qZA(),t.TgZ(135,"h5"),t._uU(136),t.ALo(137,"currency"),t.qZA(),t._UZ(138,"input",36),t.qZA(),t.TgZ(139,"li")(140,"h4"),t._uU(141,"Round Off"),t.qZA(),t.TgZ(142,"h5")(143,"span",37)(144,"i",38),t.NdJ("click",function(){return o.updateValue("+")}),t.qZA(),t.TgZ(145,"i",39),t.NdJ("click",function(){return o.updateValue("-")}),t.qZA()(),t.TgZ(146,"input",40),t.NdJ("blur",function(s){return o.changeValue(s.target.value)}),t.ALo(147,"number"),t.qZA()()(),t.TgZ(148,"li",41)(149,"h4"),t._uU(150,"Total Amount"),t.qZA(),t.TgZ(151,"h5"),t._uU(152),t.ALo(153,"currency"),t.qZA(),t._UZ(154,"input",42),t.qZA()()()()()(),t.TgZ(155,"div",43),t.YNc(156,nt,2,0,"button",44),t.YNc(157,rt,3,0,"button",45),t.TgZ(158,"a",46),t._uU(159,"Cancel"),t.qZA()()()()()),2&e){const a=t.MAs(19);t.xp6(8),t.Q6J("formGroup",o.expensevoucherForm),t.xp6(9),t.Q6J("formControl",o.fromPartyControl)("matAutocomplete",a)("ngClass",t.VKq(54,E,o.f.party.touched&&o.f.party.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(21,38,o.filteredFromParty)),t.xp6(2),t.Q6J("ngIf",t.lcZ(23,40,o.filteredFromParty)),t.xp6(2),t.Q6J("ngIf",o.party&&o.party.invalid&&o.party.touched),t.xp6(7),t.Q6J("ngClass",t.VKq(56,E,o.f.expense_date.touched&&o.f.expense_date.invalid)),t.uIk("min",o.minDate)("max",o.maxDate),t.xp6(1),t.Q6J("ngIf",o.expense_date&&o.expense_date.invalid&&o.expense_date.touched),t.xp6(7),t.Q6J("ngClass",t.VKq(58,E,o.f.expense_no.touched&&o.f.expense_no.invalid)),t.xp6(1),t.Q6J("ngIf",o.expense_no&&o.expense_no.invalid&&o.expense_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(60,E,o.f.refrence_bill_no.touched&&o.f.refrence_bill_no.invalid)),t.xp6(1),t.Q6J("ngIf",o.refrence_bill_no&&o.refrence_bill_no.invalid&&o.refrence_bill_no.touched),t.xp6(4),t.Q6J("id","checkboxTax-")("ngModel",!0),t.xp6(1),t.Q6J("for","checkboxTax-"),t.xp6(36),t.Q6J("ngIf",o.isCart),t.xp6(3),t.Q6J("ngForOf",o.getCart().controls),t.xp6(11),t.Oqu(o.totalAmount().toFixed(2)),t.xp6(3),t.Oqu(o.totalDiscount()),t.xp6(3),t.Oqu(o.totalTax()),t.xp6(3),t.Oqu(o.totalTaxValue().toFixed(2)),t.xp6(3),t.Oqu(o.totalTotal().toFixed(2)),t.xp6(6),t.Q6J("ngClass",t.VKq(62,E,o.f.note.touched&&o.f.note.invalid)),t.xp6(1),t.Q6J("ngIf",o.note&&o.note.invalid&&o.note.touched),t.xp6(9),t.Oqu(t.xi3(130,42,o.totalTaxValue().toFixed(2),"INR")),t.xp6(2),t.Q6J("ngModel",o.totalTaxValue().toFixed(2)),t.xp6(5),t.hij(" ",t.xi3(137,45,o.totalAmount().toFixed(2),"INR"),""),t.xp6(2),t.Q6J("ngModel",o.totalAmount().toFixed(2)),t.xp6(6),t.Q6J("ngStyle",t.VKq(64,w,o.isMinus?"gray":"#FF9F43")),t.xp6(1),t.Q6J("ngStyle",t.VKq(66,w,o.isMinus?"#FF9F43":"gray")),t.xp6(1),t.Q6J("value",t.xi3(147,48,o.roundOff,"1.2-2")),t.xp6(6),t.hij(" ",t.xi3(153,51,o.calculateTotal(),"INR"),""),t.xp6(2),t.Q6J("ngModel",o.calculateTotal()),t.xp6(2),t.Q6J("ngIf",!o.loaders),t.xp6(1),t.Q6J("ngIf",o.loaders)}},dependencies:[g.mk,g.sg,g.O5,g.PC,_.yS,p._Y,p.YN,p.Kr,p.Fj,p.wV,p.Wl,p.EJ,p.JJ,p.JL,p.oH,p.sg,p.u,p.x0,p.CE,f.XC,f.ZL,x.ey,C.KE,Z.Nt,g.Ov,g.JJ,g.H9],styles:[".ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:40%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}.symbol[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px;border-radius:5px}"]}),i})(),canActivate:[c(30597).l],data:{allowedRoles:["change_expensesvoucher"]}}];let st=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[_.Bz.forChild(it),_.Bz]}),i})();var pt=c(8468);let lt=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[g.ez,st,pt.I,f.Bb,C.lN,Z.c]}),i})()},30597:($,A,c)=>{c.d(A,{l:()=>t});var g=c(94650),_=c(89299),p=c(97185),b=c(42917),v=c(80927);let t=(()=>{class n{constructor(l,F,f,x,C){this.router=l,this.Arout=F,this.toastr=f,this.profileService=x,this.coreService=C}canActivate(l,F){const f=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(x=>{this.userDetails=x,this.permissions=this.userDetails?.permission}),f){const x=l.data.allowedRoles;console.log(x,"allowedRoles");const C=f.some(Z=>x.includes(Z.codename));if(console.log(C),this.coreService.getProfile().subscribe(Z=>{this.userDetails=Z,this.profileService.setUserDetails(this.userDetails);const N=Z?.permission,P=this.profileService.getUserDetails();(!P||P.length!==N.length)&&(this.profileService.setUserPermission(N),window.location.reload())}),C)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return n.\u0275fac=function(l){return new(l||n)(g.LFG(_.F0),g.LFG(_.gz),g.LFG(p._W),g.LFG(b.J),g.LFG(v.p))},n.\u0275prov=g.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()}}]);