"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7976],{27976:(M,T,a)=>{a.r(T),a.d(T,{AddAttendanceModule:()=>B});var c=a(36895),v=a(89299),r=a(24006),t=a(94650),i=a(72266),s=a(97185),d=a(25062);function u(n,f){1&n&&(t.TgZ(0,"span",20),t._uU(1,"Select Date"),t.qZA())}function l(n,f){1&n&&(t.TgZ(0,"span",20),t._uU(1,"Enter Total Day Of Month"),t.qZA())}function h(n,f){if(1&n&&(t.TgZ(0,"option",27),t._uU(1),t.qZA()),2&n){const e=f.$implicit;t.s9C("value",e.id),t.xp6(1),t.hij(" ",e.name," ")}}function m(n,f){1&n&&(t.TgZ(0,"span",20),t._uU(1,"Select Employee "),t.qZA())}function p(n,f){1&n&&(t.TgZ(0,"span",28),t._uU(1,"Enter Total Present Day (ex:1-31)"),t.qZA())}function g(n,f){if(1&n&&(t.ynx(0),t.TgZ(1,"tr",21)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td")(5,"select",22)(6,"option",23),t._uU(7,"Select Employee"),t.qZA(),t.YNc(8,h,2,2,"option",24),t.qZA(),t.YNc(9,m,2,0,"span",10),t.qZA(),t.TgZ(10,"td"),t._UZ(11,"input",25),t.YNc(12,p,2,0,"span",26),t.qZA()(),t.BQk()),2&n){const e=f.index,o=t.oxw();t.xp6(1),t.Q6J("formGroupName",e),t.xp6(2),t.Oqu(e+1),t.xp6(5),t.Q6J("ngForOf",o.employeeList),t.xp6(1),t.Q6J("ngIf",o.employee(e)&&o.employee(e).invalid&&o.employee(e).touched),t.xp6(3),t.Q6J("ngIf",o.total_present_day(e)&&o.total_present_day(e).invalid&&o.total_present_day(e).touched)}}function y(n,f){1&n&&(t.TgZ(0,"button",29),t._uU(1,"Submit"),t.qZA())}function A(n,f){1&n&&(t.TgZ(0,"button",30),t._UZ(1,"span",31),t._uU(2,"\xa0 Submit"),t.qZA())}const C=function(n){return{"is-invalid":n}},F=[{path:"",component:(()=>{class n{constructor(e,o,b,_,O){this.fb=e,this.hrmService=o,this.router=b,this.toastrService=_,this.contactService=O,this.loaders=!1}get f(){return this.attendanceForm.controls}ngOnInit(){const e=new Date,o=e.getFullYear(),b=e.getMonth()+1,_=new Date(o,b,0).getDate();console.log(_),this.attendanceForm=this.fb.group({total_day_of_month:new r.NI("",[r.kI.required]),date:new r.NI("",[r.kI.required]),attendance:this.fb.array([])}),this.getEmployee()}attendance(){return this.fb.group({employee:new r.NI("",[r.kI.required]),total_present_day:new r.NI("",[r.kI.required])})}getattendance(){return this.attendanceForm.get("attendance")}addAttendance(){this.getattendance().push(this.attendance())}removeAttendance(e){this.getattendance().removeAt(e)}get total_day_of_month(){return this.attendanceForm.get("total_day_of_month")}get date(){return this.attendanceForm.get("date")}employee(e){return this.getattendance().controls[e].get("employee")}total_present_day(e){return this.getattendance().controls[e].get("total_present_day")}onCheck(){let e=new Date(this.attendanceForm.get("date")?.value);const o=e.getFullYear(),b=e.getMonth()+1,_=new Date(o,b,0).getDate();console.log(_),this.attendanceForm.get("total_day_of_month")?.patchValue(_)}getEmployee(){this.contactService.getEmployee().subscribe(e=>{this.employeeList=e;const o=this.attendanceForm.get("attendance");o.clear(),this.employeeList.forEach((b,_)=>{this.addAttendance(),o.at(_)?.get("employee")?.patchValue(b?.id)})})}submit(){if(console.log(this.attendanceForm.value),this.attendanceForm.valid){let e=new FormData;e.append("date",this.attendanceForm.get("date")?.value),e.append("total_day_of_month",this.attendanceForm.get("total_day_of_month")?.value);const o=this.attendanceForm.get("attendance"),b=[];o.controls.forEach(_=>{const O=_,x={};Object.keys(O.controls).forEach(E=>{const Z=O.controls[E];x[E]=isNaN(Z.value)?Z.value:parseFloat(Z.value)}),b.push(x)}),e.append("attendance",JSON.stringify(b)),this.loaders=!0,this.hrmService.addAttendance(e).subscribe(_=>{this.addRes=_,this.addRes.success&&(this.loaders=!1,this.toastrService.success(this.addRes.msg),this.router.navigate(["hrm/list-attendance"]))},_=>{this.loaders=!1})}else this.attendanceForm.markAllAsTouched(),this.toastrService.error("Please Fill All The Required Fields")}onLabelClick(e){e.stopPropagation()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(r.qu),t.Y36(i.z),t.Y36(v.F0),t.Y36(s._W),t.Y36(d.y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-attendance"]],decls:43,vars:12,consts:[[1,"page-header","justify-content-center"],[1,"page-title"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"card"],[1,"card-body"],[1,"row","form-card"],[1,"col-lg-3","col-sm-4","col-12"],[1,"form-group"],["type","month","formControlName","date","id","date",3,"ngClass","change"],["class","text-danger",4,"ngIf"],["type","number","formControlName","total_day_of_month","placeholder","ex-25","id","total_day_of_month",3,"ngClass"],[1,"col-lg-12","col-sm-12","col-12"],[1,"table","amt-table"],["formArrayName","attendance"],[4,"ngFor","ngForOf"],[1,"col-lg-8","text-end","mt-5"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//hrm/list-attendance",1,"btn","btn-cancel"],[1,"text-danger"],[3,"formGroupName"],["formControlName","employee",1,"form-select"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["type","text","formControlName","total_present_day","maxlength","31","placeholder","Total Present Day",1,"form-control"],["class","text-danger","style","display: block;",4,"ngIf"],[3,"value"],[1,"text-danger",2,"display","block"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Attendance Add"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Create new Attendance"),t.qZA()()(),t.TgZ(6,"form",2),t.NdJ("ngSubmit",function(){return o.submit()}),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label"),t._uU(14,"Date*"),t.qZA(),t.TgZ(15,"input",9),t.NdJ("change",function(){return o.onCheck()}),t.qZA(),t.YNc(16,u,2,0,"span",10),t.qZA()(),t.TgZ(17,"div",7)(18,"div",8)(19,"label"),t._uU(20,"Total Day Of Month*"),t.qZA(),t._UZ(21,"input",11),t.YNc(22,l,2,0,"span",10),t.qZA()(),t.TgZ(23,"div",12)(24,"table",13)(25,"thead")(26,"tr")(27,"th"),t._uU(28,"Sr. No."),t.qZA(),t.TgZ(29,"th"),t._uU(30,"Employee*"),t.qZA(),t.TgZ(31,"th"),t._uU(32,"Total Present Day*"),t.qZA(),t.TgZ(33,"th"),t._uU(34,"\xa0"),t.qZA()()(),t.TgZ(35,"tbody"),t.ynx(36,14),t.YNc(37,g,13,5,"ng-container",15),t.BQk(),t.qZA()()(),t.TgZ(38,"div",16),t.YNc(39,y,2,0,"button",17),t.YNc(40,A,3,0,"button",18),t.TgZ(41,"a",19),t._uU(42,"Cancel"),t.qZA()()()()()()()),2&e&&(t.xp6(6),t.Q6J("formGroup",o.attendanceForm),t.xp6(9),t.Q6J("ngClass",t.VKq(8,C,o.f.date.touched&&o.f.date.invalid)),t.xp6(1),t.Q6J("ngIf",o.date&&o.date.invalid&&o.date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(10,C,o.f.total_day_of_month.touched&&o.f.total_day_of_month.invalid)),t.xp6(1),t.Q6J("ngIf",o.total_day_of_month&&o.total_day_of_month.invalid&&o.total_day_of_month.touched),t.xp6(15),t.Q6J("ngForOf",o.getattendance().controls),t.xp6(2),t.Q6J("ngIf",!o.loaders),t.xp6(1),t.Q6J("ngIf",o.loaders))},dependencies:[c.mk,c.sg,c.O5,v.yS,r._Y,r.YN,r.Kr,r.Fj,r.wV,r.EJ,r.JJ,r.JL,r.nD,r.sg,r.u,r.x0,r.CE],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=month][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background-color:#fff}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600;float:left;margin-top:10px}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.inp[_ngcontent-%COMP%]{border:none}.amt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#EEF0F8}.amt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FAFBFE}.addMore[_ngcontent-%COMP%]{color:#ff9f43;font-size:20px;font-weight:500;float:right}.form-card[_ngcontent-%COMP%]{width:100%;margin:auto;justify-content:center}']}),n})(),canActivate:[a(30597).l],data:{allowedRoles:["add_attendance"]}}];let I=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[v.Bz.forChild(F),v.Bz]}),n})();var U=a(30906),S=a(87078),N=a(43189),R=a(54333),J=a(54040),L=a(95113),w=a(56709);let B=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[c.ez,I,U.ZU,r.u5,r.UX,S.T,N.h,R.JX,J.l,L.LD,w.p9]}),n})()},30597:(M,T,a)=>{a.d(T,{l:()=>s});var c=a(94650),v=a(89299),r=a(97185),t=a(42917),i=a(80927);let s=(()=>{class d{constructor(l,h,m,p,g){this.router=l,this.Arout=h,this.toastr=m,this.profileService=p,this.coreService=g}canActivate(l,h){const m=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(p=>{this.userDetails=p,this.permissions=this.userDetails?.permission}),m){const p=l.data.allowedRoles;console.log(p,"allowedRoles");const g=m.some(y=>p.includes(y.codename));if(console.log(g),this.coreService.getProfile().subscribe(y=>{this.userDetails=y,this.profileService.setUserDetails(this.userDetails);const A=y?.permission,C=this.profileService.getUserDetails();(!C||C.length!==A.length)&&(this.profileService.setUserPermission(A),window.location.reload())}),g)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return d.\u0275fac=function(l){return new(l||d)(c.LFG(v.F0),c.LFG(v.gz),c.LFG(r._W),c.LFG(t.J),c.LFG(i.p))},d.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},87078:(M,T,a)=>{a.d(T,{G:()=>c.G,T:()=>v.T});var c=a(10008),v=a(33861)},10008:(M,T,a)=>{a.d(T,{G:()=>r});var c=a(94650),r=function(){function t(i,s,d){this.el=i,this.vcr=s,this.renderer=d,this.dtOptions={}}return t.prototype.ngOnInit=function(){var i=this;this.dtTrigger?this.dtTrigger.subscribe(function(s){i.displayTable(s)}):this.displayTable(null)},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(i){var s=this;i&&(this.dtOptions=i),this.dtInstance=new Promise(function(d,u){Promise.resolve(s.dtOptions).then(function(l){0===Object.keys(l).length&&0===$("tbody tr",s.el.nativeElement).length?u("Both the table and dtOptions cannot be empty"):setTimeout(function(){var m={rowCallback:function(p,g,y){if(l.columns){var A=l.columns;s.applyNgPipeTransform(p,A),s.applyNgRefTemplate(p,A,g)}l.rowCallback&&l.rowCallback(p,g,y)}};m=Object.assign({},l,m),s.dt=$(s.el.nativeElement).DataTable(m),d(s.dt)})})})},t.prototype.applyNgPipeTransform=function(i,s){s.filter(function(u){return u.ngPipeInstance&&!u.ngTemplateRef}).forEach(function(u){var l=u.ngPipeInstance,h=u.ngPipeArgs||[],m=s.findIndex(function(A){return A.data===u.data}),p=i.childNodes.item(m),g=$(p).text(),y=l.transform.apply(l,function(t,i,s){if(s||2===arguments.length)for(var l,d=0,u=i.length;d<u;d++)(l||!(d in i))&&(l||(l=Array.prototype.slice.call(i,0,d)),l[d]=i[d]);return t.concat(l||Array.prototype.slice.call(i))}([g],h,!1));$(p).text(y)})},t.prototype.applyNgRefTemplate=function(i,s,d){var u=this;s.filter(function(h){return h.ngTemplateRef&&!h.ngPipeInstance}).forEach(function(h){var m=h.ngTemplateRef,p=m.ref,g=m.context,y=s.findIndex(function(D){return D.data===h.data}),A=i.childNodes.item(y);$(A).html("");var C=Object.assign({},g,g?.userData,{adtData:d}),P=u.vcr.createEmbeddedView(p,C);u.renderer.appendChild(A,P.rootNodes[0])})},t.\u0275fac=function(s){return new(s||t)(c.Y36(c.SBq),c.Y36(c.s_b),c.Y36(c.Qsj))},t.\u0275dir=c.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}()},33861:(M,T,a)=>{a.d(T,{T:()=>t});var c=a(36895),r=(a(10008),a(94650)),t=function(){function i(){}return i.forRoot=function(){return{ngModule:i}},i.\u0275fac=function(d){return new(d||i)},i.\u0275mod=r.oAB({type:i}),i.\u0275inj=r.cJS({imports:[c.ez]}),i}()}}]);