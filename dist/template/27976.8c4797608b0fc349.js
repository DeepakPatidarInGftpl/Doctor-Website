"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[27976],{25062:(C,T,i)=>{i.d(T,{y:()=>e});var u=i(92340),m=i(94650),p=i(80529);let e=(()=>{class o{constructor(t){this.http=t,this.apiUrl=`${u.N.api}`}UpdateDefaultAddress(t){return this.http.post(this.apiUrl+"/pv-api/make_default_address/",t)}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(t){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}SupplierIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,r)}addSupplier(t){return this.http.post(this.apiUrl+"/pv-api/supplier/",t)}updateSupplier(t,r){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,t)}deleteSupplier(t){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(t){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}VendorIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,r)}addVendor(t){return this.http.post(this.apiUrl+"/pv-api/vendor/",t)}updateVendor(t,r){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,t)}deleteVendor(t){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}PaymentTermsIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,r)}addPaymentTerms(t){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",t)}updatePaymentTerms(t,r){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,t)}deletePaymentTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(t){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}TransportIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,r)}addTransport(t){return this.http.post(this.apiUrl+"/pv-api/transport/",t)}updateTransport(t,r){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,t)}deleteTransport(t){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(t){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}EmployeeIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,r)}addEmployee(t){return this.http.post(this.apiUrl+"/pv-api/employee/",t)}updateEmployee(t,r){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,t)}deleteEmployee(t){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(t){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}CustomerIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,r)}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/customer/",t)}updateCustomer(t,r){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,t)}deleteCustomer(t){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(t){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}UserIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${t}`,r)}addUser(t){return this.http.post(this.apiUrl+"/pv-api/user/",t)}updateUser(t,r){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${r}`,t)}deleteUser(t){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(t){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${t}`)}addPermissionGroup(t){return this.http.post(this.apiUrl+"/pv-api/group/",t)}updatePermissionGroup(t,r){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`,t)}deletePermissionGroup(t){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${t}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(t){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}DealerIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`,r)}addDealer(t){return this.http.post(this.apiUrl+"/pv-api/dealer/",t)}updateDealer(t,r){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,t)}deleteDealer(t){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+t)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}TermsIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${t}`,r)}addTerms(t){return this.http.post(this.apiUrl+"/pv-api/terms/",t)}updateTerms(t,r){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,t)}deleteTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(t){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}DepartmentIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${t}`,r)}addDepartment(t){return this.http.post(this.apiUrl+"/pv-api/department/",t)}updateDepartment(t,r){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${r}`,t)}deleteDepartment(t){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}getCreditLimitByUserId(t){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${t}`)}}return o.\u0275fac=function(t){return new(t||o)(m.LFG(p.eN))},o.\u0275prov=m.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},27976:(C,T,i)=>{i.r(T),i.d(T,{AddAttendanceModule:()=>J});var u=i(36895),m=i(4392),p=i(24006),e=i(94650),o=i(72266),d=i(97185),t=i(25062);function r(s,g){1&s&&(e.TgZ(0,"span",20),e._uU(1,"Select Date"),e.qZA())}function n(s,g){1&s&&(e.TgZ(0,"span",20),e._uU(1,"Enter Total Day Of Month"),e.qZA())}function _(s,g){if(1&s&&(e.TgZ(0,"option",27),e._uU(1),e.qZA()),2&s){const a=g.$implicit;e.s9C("value",a.id),e.xp6(1),e.hij(" ",a.name," ")}}function v(s,g){1&s&&(e.TgZ(0,"span",20),e._uU(1,"Select Employee "),e.qZA())}function c(s,g){1&s&&(e.TgZ(0,"span",28),e._uU(1,"Enter Total Present Day "),e.qZA())}function f(s,g){if(1&s&&(e.ynx(0),e.TgZ(1,"tr",21)(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td")(5,"select",22)(6,"option",23),e._uU(7,"Select Employee"),e.qZA(),e.YNc(8,_,2,2,"option",24),e.qZA(),e.YNc(9,v,2,0,"span",10),e.qZA(),e.TgZ(10,"td"),e._UZ(11,"input",25),e.YNc(12,c,2,0,"span",26),e.qZA()(),e.BQk()),2&s){const a=g.index,l=e.oxw();e.xp6(1),e.Q6J("formGroupName",a),e.xp6(2),e.Oqu(a+1),e.xp6(5),e.Q6J("ngForOf",l.employeeList),e.xp6(1),e.Q6J("ngIf",l.employee(a)&&l.employee(a).invalid&&l.employee(a).touched),e.xp6(3),e.Q6J("ngIf",l.total_present_day(a)&&l.total_present_day(a).invalid&&l.total_present_day(a).touched)}}function y(s,g){1&s&&(e.TgZ(0,"button",29),e._uU(1,"Submit"),e.qZA())}function h(s,g){1&s&&(e.TgZ(0,"button",30),e._UZ(1,"span",31),e._uU(2,"\xa0 Submit"),e.qZA())}const b=function(s){return{"is-invalid":s}},x=[{path:"",component:(()=>{class s{constructor(a,l,U,A,P){this.fb=a,this.hrmService=l,this.router=U,this.toastrService=A,this.contactService=P,this.loaders=!1}get f(){return this.attendanceForm.controls}ngOnInit(){const a=new Date,l=a.getFullYear(),U=a.getMonth()+1,A=new Date(l,U,0).getDate();console.log(A),this.attendanceForm=this.fb.group({total_day_of_month:new p.NI("",[p.kI.required]),date:new p.NI("",[p.kI.required]),attendance:this.fb.array([])}),this.getEmployee()}attendance(){return this.fb.group({employee:new p.NI("",[p.kI.required]),total_present_day:new p.NI("",[p.kI.required,p.kI.maxLength(31)])})}getattendance(){return this.attendanceForm.get("attendance")}addAttendance(){this.getattendance().push(this.attendance())}removeAttendance(a){this.getattendance().removeAt(a)}get total_day_of_month(){return this.attendanceForm.get("total_day_of_month")}get date(){return this.attendanceForm.get("date")}employee(a){return this.getattendance().controls[a].get("employee")}total_present_day(a){return this.getattendance().controls[a].get("total_present_day")}onCheck(){let a=new Date(this.attendanceForm.get("date")?.value);const l=a.getFullYear(),U=a.getMonth()+1,A=new Date(l,U,0).getDate();console.log(A),this.attendanceForm.get("total_day_of_month")?.patchValue(A)}getEmployee(){this.hrmService.getEmployee().subscribe(a=>{this.employeeList=a;const l=this.attendanceForm.get("attendance");l.clear(),this.employeeList.forEach((U,A)=>{U?.is_active&&(this.addAttendance(),l.at(A)?.get("employee")?.patchValue(U?.id))})})}submit(){if(console.log(this.attendanceForm.value),this.attendanceForm.valid){let a=new FormData;a.append("date",this.attendanceForm.get("date")?.value),a.append("total_day_of_month",this.attendanceForm.get("total_day_of_month")?.value);const l=this.attendanceForm.get("attendance"),U=[];l.controls.forEach(A=>{const P=A,O={};Object.keys(P.controls).forEach(E=>{const I=P.controls[E];O[E]=isNaN(I.value)?I.value:parseFloat(I.value)}),U.push(O)}),a.append("attendance",JSON.stringify(U)),this.loaders=!0,this.hrmService.addAttendance(a).subscribe(A=>{this.addRes=A,this.addRes.success&&(this.loaders=!1,this.toastrService.success(this.addRes.msg),this.router.navigate(["hrm/list-attendance"]))},A=>{this.loaders=!1})}else this.attendanceForm.markAllAsTouched(),this.toastrService.error("Please Fill All The Required Fields")}onLabelClick(a){a.stopPropagation()}}return s.\u0275fac=function(a){return new(a||s)(e.Y36(p.qu),e.Y36(o.z),e.Y36(m.F0),e.Y36(d._W),e.Y36(t.y))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-add-attendance"]],decls:43,vars:12,consts:[[1,"page-header","justify-content-center"],[1,"page-title"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"card"],[1,"card-body"],[1,"row","form-card"],[1,"col-lg-3","col-sm-4","col-12"],[1,"form-group"],["type","month","formControlName","date","id","date",3,"ngClass","change"],["class","text-danger",4,"ngIf"],["type","number","formControlName","total_day_of_month","placeholder","ex-25","id","total_day_of_month",3,"ngClass"],[1,"col-lg-12","col-sm-12","col-12"],[1,"table","amt-table"],["formArrayName","attendance"],[4,"ngFor","ngForOf"],[1,"col-lg-8","text-end","mt-5"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//hrm/list-attendance",1,"btn","btn-cancel"],[1,"text-danger"],[3,"formGroupName"],["formControlName","employee",1,"form-select"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","total_present_day","maxlength","31","placeholder","Total Present Day",1,"form-control"],["class","text-danger","style","display: block;",4,"ngIf"],[3,"value"],[1,"text-danger",2,"display","block"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,l){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Attendance Add"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Attendance"),e.qZA()()(),e.TgZ(6,"form",2),e.NdJ("ngSubmit",function(){return l.submit()}),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label"),e._uU(14,"Date*"),e.qZA(),e.TgZ(15,"input",9),e.NdJ("change",function(){return l.onCheck()}),e.qZA(),e.YNc(16,r,2,0,"span",10),e.qZA()(),e.TgZ(17,"div",7)(18,"div",8)(19,"label"),e._uU(20,"Total Day Of Month*"),e.qZA(),e._UZ(21,"input",11),e.YNc(22,n,2,0,"span",10),e.qZA()(),e.TgZ(23,"div",12)(24,"table",13)(25,"thead")(26,"tr")(27,"th"),e._uU(28,"Sr. No."),e.qZA(),e.TgZ(29,"th"),e._uU(30,"Employee*"),e.qZA(),e.TgZ(31,"th"),e._uU(32,"Total Present Day*"),e.qZA(),e.TgZ(33,"th"),e._uU(34,"\xa0"),e.qZA()()(),e.TgZ(35,"tbody"),e.ynx(36,14),e.YNc(37,f,13,5,"ng-container",15),e.BQk(),e.qZA()()(),e.TgZ(38,"div",16),e.YNc(39,y,2,0,"button",17),e.YNc(40,h,3,0,"button",18),e.TgZ(41,"a",19),e._uU(42,"Cancel"),e.qZA()()()()()()()),2&a&&(e.xp6(6),e.Q6J("formGroup",l.attendanceForm),e.xp6(9),e.Q6J("ngClass",e.VKq(8,b,l.f.date.touched&&l.f.date.invalid)),e.xp6(1),e.Q6J("ngIf",l.date&&l.date.invalid&&l.date.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(10,b,l.f.total_day_of_month.touched&&l.f.total_day_of_month.invalid)),e.xp6(1),e.Q6J("ngIf",l.total_day_of_month&&l.total_day_of_month.invalid&&l.total_day_of_month.touched),e.xp6(15),e.Q6J("ngForOf",l.getattendance().controls),e.xp6(2),e.Q6J("ngIf",!l.loaders),e.xp6(1),e.Q6J("ngIf",l.loaders))},dependencies:[u.mk,u.sg,u.O5,m.yS,p._Y,p.YN,p.Kr,p.Fj,p.wV,p.EJ,p.JJ,p.JL,p.nD,p.sg,p.u,p.x0,p.CE],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background-color:#fff}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600;float:left;margin-top:10px}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.inp[_ngcontent-%COMP%]{border:none}.amt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#EEF0F8}.amt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FAFBFE}.addMore[_ngcontent-%COMP%]{color:#ff9f43;font-size:20px;font-weight:500;float:right}.form-card[_ngcontent-%COMP%]{width:100%;margin:auto;justify-content:center}']}),s})(),canActivate:[i(30597).l],data:{allowedRoles:["add_attendance"]}}];let Z=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[m.Bz.forChild(x),m.Bz]}),s})();var S=i(30906),F=i(87078),B=i(43189),N=i(54333),R=i(54040),L=i(95113),G=i(56709);let J=(()=>{class s{}return s.\u0275fac=function(a){return new(a||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[u.ez,Z,S.ZU,p.u5,p.UX,F.T,B.h,N.JX,R.l,L.LD,G.p9]}),s})()},30597:(C,T,i)=>{i.d(T,{l:()=>d});var u=i(94650),m=i(4392),p=i(97185),e=i(42917),o=i(80927);let d=(()=>{class t{constructor(n,_,v,c,f){this.router=n,this.Arout=_,this.toastr=v,this.profileService=c,this.coreService=f}canActivate(n,_){const v=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(c=>{this.userDetails=c,this.permissions=this.userDetails?.permission}),v){const c=n.data.allowedRoles,f=v.some(h=>c.includes(h.codename));let y=this.coreService.profileData$.value;if(y&&y.username){this.userDetails=y,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(y);const h=y?.permission,b=this.profileService.getUserDetails();(!b||b.length!==h.length)&&(this.profileService.setUserPermission(h),window.location.reload())}else this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(h);const b=h?.permission,D=this.profileService.getUserDetails();(!D||D.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())});if(f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(n){return new(n||t)(u.LFG(m.F0),u.LFG(m.gz),u.LFG(p._W),u.LFG(e.J),u.LFG(o.p))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},87078:(C,T,i)=>{i.d(T,{G:()=>u.G,T:()=>m.T});var u=i(10008),m=i(33861)},10008:(C,T,i)=>{i.d(T,{G:()=>p});var u=i(94650),p=function(){function e(o,d,t){this.el=o,this.vcr=d,this.renderer=t,this.dtOptions={}}return e.prototype.ngOnInit=function(){var o=this;this.dtTrigger?this.dtTrigger.subscribe(function(d){o.displayTable(d)}):this.displayTable(null)},e.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},e.prototype.displayTable=function(o){var d=this;o&&(this.dtOptions=o),this.dtInstance=new Promise(function(t,r){Promise.resolve(d.dtOptions).then(function(n){0===Object.keys(n).length&&0===$("tbody tr",d.el.nativeElement).length?r("Both the table and dtOptions cannot be empty"):setTimeout(function(){var v={rowCallback:function(c,f,y){if(n.columns){var h=n.columns;d.applyNgPipeTransform(c,h),d.applyNgRefTemplate(c,h,f)}n.rowCallback&&n.rowCallback(c,f,y)}};v=Object.assign({},n,v),d.dt=$(d.el.nativeElement).DataTable(v),t(d.dt)})})})},e.prototype.applyNgPipeTransform=function(o,d){d.filter(function(r){return r.ngPipeInstance&&!r.ngTemplateRef}).forEach(function(r){var n=r.ngPipeInstance,_=r.ngPipeArgs||[],v=d.findIndex(function(h){return h.data===r.data}),c=o.childNodes.item(v),f=$(c).text(),y=n.transform.apply(n,function(e,o,d){if(d||2===arguments.length)for(var n,t=0,r=o.length;t<r;t++)(n||!(t in o))&&(n||(n=Array.prototype.slice.call(o,0,t)),n[t]=o[t]);return e.concat(n||Array.prototype.slice.call(o))}([f],_,!1));$(c).text(y)})},e.prototype.applyNgRefTemplate=function(o,d,t){var r=this;d.filter(function(_){return _.ngTemplateRef&&!_.ngPipeInstance}).forEach(function(_){var v=_.ngTemplateRef,c=v.ref,f=v.context,y=d.findIndex(function(M){return M.data===_.data}),h=o.childNodes.item(y);$(h).html("");var b=Object.assign({},f,f?.userData,{adtData:t}),D=r.vcr.createEmbeddedView(c,b);r.renderer.appendChild(h,D.rootNodes[0])})},e.\u0275fac=function(d){return new(d||e)(u.Y36(u.SBq),u.Y36(u.s_b),u.Y36(u.Qsj))},e.\u0275dir=u.lG2({type:e,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),e}()},33861:(C,T,i)=>{i.d(T,{T:()=>e});var u=i(36895),p=(i(10008),i(94650)),e=function(){function o(){}return o.forRoot=function(){return{ngModule:o}},o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=p.oAB({type:o}),o.\u0275inj=p.cJS({imports:[u.ez]}),o}()}}]);