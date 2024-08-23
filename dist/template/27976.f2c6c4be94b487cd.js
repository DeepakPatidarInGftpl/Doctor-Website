"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[27976],{25062:(C,U,i)=>{i.d(U,{y:()=>e});var u=i(92340),g=i(94650),l=i(80529);let e=(()=>{class s{constructor(t){this.http=t,this.apiUrl=`${u.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(t){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}SupplierIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,r)}addSupplier(t){return this.http.post(this.apiUrl+"/pv-api/supplier/",t)}updateSupplier(t,r){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,t)}deleteSupplier(t){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(t){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}VendorIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,r)}addVendor(t){return this.http.post(this.apiUrl+"/pv-api/vendor/",t)}updateVendor(t,r){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,t)}deleteVendor(t){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}PaymentTermsIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,r)}addPaymentTerms(t){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",t)}updatePaymentTerms(t,r){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,t)}deletePaymentTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(t){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}TransportIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,r)}addTransport(t){return this.http.post(this.apiUrl+"/pv-api/transport/",t)}updateTransport(t,r){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,t)}deleteTransport(t){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(t){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}EmployeeIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,r)}addEmployee(t){return this.http.post(this.apiUrl+"/pv-api/employee/",t)}updateEmployee(t,r){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,t)}deleteEmployee(t){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(t){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}CustomerIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,r)}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/customer/",t)}updateCustomer(t,r){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,t)}deleteCustomer(t){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(t){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}UserIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${t}`,r)}addUser(t){return this.http.post(this.apiUrl+"/pv-api/user/",t)}updateUser(t,r){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${r}`,t)}deleteUser(t){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(t){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${t}`)}addPermissionGroup(t){return this.http.post(this.apiUrl+"/pv-api/group/",t)}updatePermissionGroup(t,r){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`,t)}deletePermissionGroup(t){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${t}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(t){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}DealerIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`,r)}addDealer(t){return this.http.post(this.apiUrl+"/pv-api/dealer/",t)}updateDealer(t,r){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,t)}deleteDealer(t){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+t)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}TermsIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${t}`,r)}addTerms(t){return this.http.post(this.apiUrl+"/pv-api/terms/",t)}updateTerms(t,r){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,t)}deleteTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(t){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}DepartmentIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${t}`,r)}addDepartment(t){return this.http.post(this.apiUrl+"/pv-api/department/",t)}updateDepartment(t,r){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${r}`,t)}deleteDepartment(t){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}getCreditLimitByUserId(t){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${t}`)}}return s.\u0275fac=function(t){return new(t||s)(g.LFG(l.eN))},s.\u0275prov=g.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},27976:(C,U,i)=>{i.r(U),i.d(U,{AddAttendanceModule:()=>J});var u=i(36895),g=i(4392),l=i(24006),e=i(94650),s=i(72266),d=i(97185),t=i(25062);function r(o,c){1&o&&(e.TgZ(0,"span",20),e._uU(1,"Select Date"),e.qZA())}function n(o,c){1&o&&(e.TgZ(0,"span",20),e._uU(1,"Enter Total Day Of Month"),e.qZA())}function f(o,c){if(1&o&&(e.TgZ(0,"option",27),e._uU(1),e.qZA()),2&o){const a=c.$implicit;e.s9C("value",a.id),e.xp6(1),e.hij(" ",a.name," ")}}function m(o,c){1&o&&(e.TgZ(0,"span",20),e._uU(1,"Select Employee "),e.qZA())}function h(o,c){1&o&&(e.TgZ(0,"span",28),e._uU(1,"Enter Total Present Day "),e.qZA())}function v(o,c){if(1&o&&(e.ynx(0),e.TgZ(1,"tr",21)(2,"td"),e._uU(3),e.qZA(),e.TgZ(4,"td")(5,"select",22)(6,"option",23),e._uU(7,"Select Employee"),e.qZA(),e.YNc(8,f,2,2,"option",24),e.qZA(),e.YNc(9,m,2,0,"span",10),e.qZA(),e.TgZ(10,"td"),e._UZ(11,"input",25),e.YNc(12,h,2,0,"span",26),e.qZA()(),e.BQk()),2&o){const a=c.index,p=e.oxw();e.xp6(1),e.Q6J("formGroupName",a),e.xp6(2),e.Oqu(a+1),e.xp6(5),e.Q6J("ngForOf",p.employeeList),e.xp6(1),e.Q6J("ngIf",p.employee(a)&&p.employee(a).invalid&&p.employee(a).touched),e.xp6(3),e.Q6J("ngIf",p.total_present_day(a)&&p.total_present_day(a).invalid&&p.total_present_day(a).touched)}}function _(o,c){1&o&&(e.TgZ(0,"button",29),e._uU(1,"Submit"),e.qZA())}function A(o,c){1&o&&(e.TgZ(0,"button",30),e._UZ(1,"span",31),e._uU(2,"\xa0 Submit"),e.qZA())}const b=function(o){return{"is-invalid":o}},x=[{path:"",component:(()=>{class o{constructor(a,p,T,y,P){this.fb=a,this.hrmService=p,this.router=T,this.toastrService=y,this.contactService=P,this.loaders=!1}get f(){return this.attendanceForm.controls}ngOnInit(){const a=new Date,p=a.getFullYear(),T=a.getMonth()+1,y=new Date(p,T,0).getDate();console.log(y),this.attendanceForm=this.fb.group({total_day_of_month:new l.NI("",[l.kI.required]),date:new l.NI("",[l.kI.required]),attendance:this.fb.array([])}),this.getEmployee()}attendance(){return this.fb.group({employee:new l.NI("",[l.kI.required]),total_present_day:new l.NI("",[l.kI.required,l.kI.maxLength(31)])})}getattendance(){return this.attendanceForm.get("attendance")}addAttendance(){this.getattendance().push(this.attendance())}removeAttendance(a){this.getattendance().removeAt(a)}get total_day_of_month(){return this.attendanceForm.get("total_day_of_month")}get date(){return this.attendanceForm.get("date")}employee(a){return this.getattendance().controls[a].get("employee")}total_present_day(a){return this.getattendance().controls[a].get("total_present_day")}onCheck(){let a=new Date(this.attendanceForm.get("date")?.value);const p=a.getFullYear(),T=a.getMonth()+1,y=new Date(p,T,0).getDate();console.log(y),this.attendanceForm.get("total_day_of_month")?.patchValue(y)}getEmployee(){this.hrmService.getEmployee().subscribe(a=>{this.employeeList=a;const p=this.attendanceForm.get("attendance");p.clear(),this.employeeList.forEach((T,y)=>{this.addAttendance(),p.at(y)?.get("employee")?.patchValue(T?.id)})})}submit(){if(console.log(this.attendanceForm.value),this.attendanceForm.valid){let a=new FormData;a.append("date",this.attendanceForm.get("date")?.value),a.append("total_day_of_month",this.attendanceForm.get("total_day_of_month")?.value);const p=this.attendanceForm.get("attendance"),T=[];p.controls.forEach(y=>{const P=y,O={};Object.keys(P.controls).forEach(E=>{const I=P.controls[E];O[E]=isNaN(I.value)?I.value:parseFloat(I.value)}),T.push(O)}),a.append("attendance",JSON.stringify(T)),this.loaders=!0,this.hrmService.addAttendance(a).subscribe(y=>{this.addRes=y,this.addRes.success&&(this.loaders=!1,this.toastrService.success(this.addRes.msg),this.router.navigate(["hrm/list-attendance"]))},y=>{this.loaders=!1})}else this.attendanceForm.markAllAsTouched(),this.toastrService.error("Please Fill All The Required Fields")}onLabelClick(a){a.stopPropagation()}}return o.\u0275fac=function(a){return new(a||o)(e.Y36(l.qu),e.Y36(s.z),e.Y36(g.F0),e.Y36(d._W),e.Y36(t.y))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-add-attendance"]],decls:43,vars:12,consts:[[1,"page-header","justify-content-center"],[1,"page-title"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"card"],[1,"card-body"],[1,"row","form-card"],[1,"col-lg-3","col-sm-4","col-12"],[1,"form-group"],["type","month","formControlName","date","id","date",3,"ngClass","change"],["class","text-danger",4,"ngIf"],["type","number","formControlName","total_day_of_month","placeholder","ex-25","id","total_day_of_month",3,"ngClass"],[1,"col-lg-12","col-sm-12","col-12"],[1,"table","amt-table"],["formArrayName","attendance"],[4,"ngFor","ngForOf"],[1,"col-lg-8","text-end","mt-5"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//hrm/list-attendance",1,"btn","btn-cancel"],[1,"text-danger"],[3,"formGroupName"],["formControlName","employee",1,"form-select"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","total_present_day","maxlength","31","placeholder","Total Present Day",1,"form-control"],["class","text-danger","style","display: block;",4,"ngIf"],[3,"value"],[1,"text-danger",2,"display","block"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,p){1&a&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"Attendance Add"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Create new Attendance"),e.qZA()()(),e.TgZ(6,"form",2),e.NdJ("ngSubmit",function(){return p.submit()}),e.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label"),e._uU(14,"Date*"),e.qZA(),e.TgZ(15,"input",9),e.NdJ("change",function(){return p.onCheck()}),e.qZA(),e.YNc(16,r,2,0,"span",10),e.qZA()(),e.TgZ(17,"div",7)(18,"div",8)(19,"label"),e._uU(20,"Total Day Of Month*"),e.qZA(),e._UZ(21,"input",11),e.YNc(22,n,2,0,"span",10),e.qZA()(),e.TgZ(23,"div",12)(24,"table",13)(25,"thead")(26,"tr")(27,"th"),e._uU(28,"Sr. No."),e.qZA(),e.TgZ(29,"th"),e._uU(30,"Employee*"),e.qZA(),e.TgZ(31,"th"),e._uU(32,"Total Present Day*"),e.qZA(),e.TgZ(33,"th"),e._uU(34,"\xa0"),e.qZA()()(),e.TgZ(35,"tbody"),e.ynx(36,14),e.YNc(37,v,13,5,"ng-container",15),e.BQk(),e.qZA()()(),e.TgZ(38,"div",16),e.YNc(39,_,2,0,"button",17),e.YNc(40,A,3,0,"button",18),e.TgZ(41,"a",19),e._uU(42,"Cancel"),e.qZA()()()()()()()),2&a&&(e.xp6(6),e.Q6J("formGroup",p.attendanceForm),e.xp6(9),e.Q6J("ngClass",e.VKq(8,b,p.f.date.touched&&p.f.date.invalid)),e.xp6(1),e.Q6J("ngIf",p.date&&p.date.invalid&&p.date.touched),e.xp6(5),e.Q6J("ngClass",e.VKq(10,b,p.f.total_day_of_month.touched&&p.f.total_day_of_month.invalid)),e.xp6(1),e.Q6J("ngIf",p.total_day_of_month&&p.total_day_of_month.invalid&&p.total_day_of_month.touched),e.xp6(15),e.Q6J("ngForOf",p.getattendance().controls),e.xp6(2),e.Q6J("ngIf",!p.loaders),e.xp6(1),e.Q6J("ngIf",p.loaders))},dependencies:[u.mk,u.sg,u.O5,g.yS,l._Y,l.YN,l.Kr,l.Fj,l.wV,l.EJ,l.JJ,l.JL,l.nD,l.sg,l.u,l.x0,l.CE],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background-color:#fff}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600;float:left;margin-top:10px}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.inp[_ngcontent-%COMP%]{border:none}.amt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#EEF0F8}.amt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FAFBFE}.addMore[_ngcontent-%COMP%]{color:#ff9f43;font-size:20px;font-weight:500;float:right}.form-card[_ngcontent-%COMP%]{width:100%;margin:auto;justify-content:center}']}),o})(),canActivate:[i(30597).l],data:{allowedRoles:["add_attendance"]}}];let Z=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(x),g.Bz]}),o})();var F=i(30906),S=i(87078),B=i(43189),N=i(54333),R=i(54040),L=i(95113),G=i(56709);let J=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[u.ez,Z,F.ZU,l.u5,l.UX,S.T,B.h,N.JX,R.l,L.LD,G.p9]}),o})()},30597:(C,U,i)=>{i.d(U,{l:()=>d});var u=i(94650),g=i(4392),l=i(97185),e=i(42917),s=i(80927);let d=(()=>{class t{constructor(n,f,m,h,v){this.router=n,this.Arout=f,this.toastr=m,this.profileService=h,this.coreService=v}canActivate(n,f){const m=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(h=>{this.userDetails=h,this.permissions=this.userDetails?.permission}),m){const h=n.data.allowedRoles,v=m.some(_=>h.includes(_.codename));if(this.coreService.getProfile().subscribe(_=>{this.userDetails=_,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(_);const A=_?.permission,b=this.profileService.getUserDetails();(!b||b.length!==A.length)&&(this.profileService.setUserPermission(A),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(n){return new(n||t)(u.LFG(g.F0),u.LFG(g.gz),u.LFG(l._W),u.LFG(e.J),u.LFG(s.p))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},87078:(C,U,i)=>{i.d(U,{G:()=>u.G,T:()=>g.T});var u=i(10008),g=i(33861)},10008:(C,U,i)=>{i.d(U,{G:()=>l});var u=i(94650),l=function(){function e(s,d,t){this.el=s,this.vcr=d,this.renderer=t,this.dtOptions={}}return e.prototype.ngOnInit=function(){var s=this;this.dtTrigger?this.dtTrigger.subscribe(function(d){s.displayTable(d)}):this.displayTable(null)},e.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},e.prototype.displayTable=function(s){var d=this;s&&(this.dtOptions=s),this.dtInstance=new Promise(function(t,r){Promise.resolve(d.dtOptions).then(function(n){0===Object.keys(n).length&&0===$("tbody tr",d.el.nativeElement).length?r("Both the table and dtOptions cannot be empty"):setTimeout(function(){var m={rowCallback:function(h,v,_){if(n.columns){var A=n.columns;d.applyNgPipeTransform(h,A),d.applyNgRefTemplate(h,A,v)}n.rowCallback&&n.rowCallback(h,v,_)}};m=Object.assign({},n,m),d.dt=$(d.el.nativeElement).DataTable(m),t(d.dt)})})})},e.prototype.applyNgPipeTransform=function(s,d){d.filter(function(r){return r.ngPipeInstance&&!r.ngTemplateRef}).forEach(function(r){var n=r.ngPipeInstance,f=r.ngPipeArgs||[],m=d.findIndex(function(A){return A.data===r.data}),h=s.childNodes.item(m),v=$(h).text(),_=n.transform.apply(n,function(e,s,d){if(d||2===arguments.length)for(var n,t=0,r=s.length;t<r;t++)(n||!(t in s))&&(n||(n=Array.prototype.slice.call(s,0,t)),n[t]=s[t]);return e.concat(n||Array.prototype.slice.call(s))}([v],f,!1));$(h).text(_)})},e.prototype.applyNgRefTemplate=function(s,d,t){var r=this;d.filter(function(f){return f.ngTemplateRef&&!f.ngPipeInstance}).forEach(function(f){var m=f.ngTemplateRef,h=m.ref,v=m.context,_=d.findIndex(function(M){return M.data===f.data}),A=s.childNodes.item(_);$(A).html("");var b=Object.assign({},v,v?.userData,{adtData:t}),D=r.vcr.createEmbeddedView(h,b);r.renderer.appendChild(A,D.rootNodes[0])})},e.\u0275fac=function(d){return new(d||e)(u.Y36(u.SBq),u.Y36(u.s_b),u.Y36(u.Qsj))},e.\u0275dir=u.lG2({type:e,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),e}()},33861:(C,U,i)=>{i.d(U,{T:()=>e});var u=i(36895),l=(i(10008),i(94650)),e=function(){function s(){}return s.forRoot=function(){return{ngModule:s}},s.\u0275fac=function(t){return new(t||s)},s.\u0275mod=l.oAB({type:s}),s.\u0275inj=l.cJS({imports:[u.ez]}),s}()}}]);