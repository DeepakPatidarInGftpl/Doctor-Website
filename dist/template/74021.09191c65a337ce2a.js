"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[74021],{74021:(D,A,o)=>{o.r(A),o.d(A,{UpdateTargetModule:()=>Y});var c=o(36895),C=o(4392),s=o(24006),t=o(94650),i=o(72266),l=o(97185);function d(r,m){if(1&r&&(t.TgZ(0,"option",32),t._uU(1),t.qZA()),2&r){const a=m.$implicit;t.s9C("value",a.id),t.xp6(1),t.hij(" ",a.title," ")}}function h(r,m){1&r&&(t.TgZ(0,"span",33),t._uU(1,"Select Department "),t.qZA())}function g(r,m){1&r&&(t.TgZ(0,"span",33),t._uU(1,"Select Start Date"),t.qZA())}function b(r,m){1&r&&(t.TgZ(0,"span",33),t._uU(1,"Select End Date"),t.qZA())}function v(r,m){1&r&&(t.TgZ(0,"span",33),t._uU(1,"Select Target Value"),t.qZA())}function f(r,m){1&r&&(t.TgZ(0,"span",34),t._uU(1,"Select Employee Type"),t.qZA())}function T(r,m){1&r&&(t.TgZ(0,"span",40),t._uU(1,"Enter Percentage(%) ex: 1-100 % "),t.qZA())}function y(r,m){if(1&r){const a=t.EpF();t.ynx(0),t.TgZ(1,"tr",35)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._UZ(5,"input",36),t.qZA(),t.TgZ(6,"td")(7,"input",37),t.NdJ("blur",function(){const u=t.CHM(a).index,_=t.oxw();return t.KtG(_.calculateSaleValue(u))}),t.qZA(),t.YNc(8,T,2,0,"span",38),t.qZA(),t.TgZ(9,"td")(10,"input",39),t.NdJ("blur",function(){const u=t.CHM(a).index,_=t.oxw();return t.KtG(_.calculatePercentage(u))}),t.qZA()()(),t.BQk()}if(2&r){const a=m.index,e=t.oxw();t.xp6(1),t.Q6J("formGroupName",a),t.xp6(2),t.Oqu(a+1),t.xp6(5),t.Q6J("ngIf",e.discountt(a)&&e.discountt(a).invalid&&e.discountt(a).touched)}}function p(r,m){1&r&&(t.TgZ(0,"button",41),t._uU(1,"Submit"),t.qZA())}function U(r,m){1&r&&(t.TgZ(0,"button",42),t._UZ(1,"span",43),t._uU(2,"\xa0 Submit"),t.qZA())}const Z=function(r){return{"is-invalid":r}},E=[{path:"",component:(()=>{class r{constructor(a,e,n,u,_){this.fb=a,this.hrmService=e,this.router=n,this.Arout=u,this.toastrService=_,this.loaders=!1}get f(){return this.targetForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.targetForm=this.fb.group({department:new s.NI("",[s.kI.required]),start_date:new s.NI("",[s.kI.required]),end_date:new s.NI("",[s.kI.required]),target_value:new s.NI("",[s.kI.required]),employee_type:new s.NI("",[s.kI.required]),cart:this.fb.array([])}),this.getDepartment(),this.hrmService.getTargetById(this.id).subscribe(a=>{this.getRes=a,this.targetForm.patchValue(this.getRes),this.targetForm.get("department")?.patchValue(this.getRes.department?.id),this.targetForm.setControl("cart",this.updateCart(this.getRes.cart))})}updateCart(a){let e=new s.Oe([]);return a.forEach(n=>{e.push(this.fb.group({month_and_year:n.month_and_year,percent_of_total_target:n.percent_of_total_target,estimated_sale_value:n.estimated_sale_value}))}),e}cart(){return this.fb.group({month_and_year:"",percent_of_total_target:new s.NI("",[s.kI.pattern(/^(100|[0-9]{1,2})$/)]),estimated_sale_value:""})}getCart(){return this.targetForm.get("cart")}addCart(){this.getCart().push(this.cart())}removeCart(a){this.getCart().removeAt(a)}onCheck(){const a=new Date(this.targetForm.get("start_date").value),e=new Date(this.targetForm.get("end_date").value),n=this.targetForm.get("cart");n.clear();const u=12*(e.getFullYear()-a.getFullYear())+e.getMonth()-a.getMonth()+1;if(u)for(let _=0;_<u;_++){this.addCart();const M=`${a.getFullYear()+Math.floor((a.getMonth()+_)/12)}-${(a.getMonth()+_)%12+1}-01`;n.at(_).get("month_and_year").patchValue(M)}}formatMonthAndYear(a){const n=a.getMonth(),u=a.getFullYear();return`${["January","February","March","April","May","June","July","August","September","October","November","December"][n]} ${u}`}get department(){return this.targetForm.get("department")}get start_date(){return this.targetForm.get("start_date")}get end_date(){return this.targetForm.get("end_date")}get employee_type(){return this.targetForm.get("employee_type")}get target_value(){return this.targetForm.get("target_value")}discountt(a){return this.getCart().controls[a].get("percent_of_total_target")}getDepartment(){this.hrmService.getDepartment().subscribe(a=>{this.departmentList=a})}calculateSaleValue(a){const e=this.targetForm.get("target_value"),n=this.getCart().controls[a],u=+n.get("percent_of_total_target").value||0;if(n.get("estimated_sale_value"),u&&e){const P=(+e.value||0)*u/100;console.log(P,"calculateAmount"),n.get("estimated_sale_value").patchValue(P),console.log(n.get("percent_of_total_target")?.value>100),n.get("percent_of_total_target")?.value>100&&this.toastrService.error("Enter Percentage (%) Between 1-100")}}calculatePercentage(a){const e=this.targetForm.get("target_value"),n=this.getCart().controls[a],u=+n.get("estimated_sale_value").value||0;if(e&&u){const _=+e.value||0,M=100*u/_;console.log(M,"calculatePercentage"),n.get("percent_of_total_target").patchValue(M),n.get("estimated_sale_value")?.value!==_&&this.toastrService.error("Target Value & sale Value should Be Equal")}}saleValue(){let a=0;for(let e=0;e<this.getCart().controls.length;e++){const n=this.getCart().controls[e].get("estimated_sale_value");n&&(a+=+n.value||0)}return a}percentageValue(){let a=0;for(let e=0;e<this.getCart().controls.length;e++){const n=this.getCart().controls[e].get("percent_of_total_target");n&&(a+=+n.value||0)}return a}submit(){if(console.log(this.targetForm.value),this.targetValue=this.targetForm.get("target_value")?.value,console.log(this.saleValue()),console.log(this.targetValue),this.saleValue()==this.targetValue)if(this.percentageValue()<=100)if(this.targetForm.valid){let a=new FormData;a.append("department",this.targetForm.get("department")?.value),a.append("start_date",this.targetForm.get("start_date")?.value),a.append("end_date",this.targetForm.get("end_date")?.value),a.append("target_value",this.targetForm.get("target_value")?.value),a.append("employee_type",this.targetForm.get("employee_type")?.value);const e=this.targetForm.get("cart"),n=[];e.controls.forEach(u=>{const _=u,M={};Object.keys(_.controls).forEach(P=>{const x=_.controls[P];M[P]=isNaN(x.value)?x.value:parseFloat(x.value)}),n.push(M)}),a.append("cart",JSON.stringify(n)),this.loaders=!0,this.hrmService.updateTarget(a,this.id).subscribe(u=>{this.addRes=u,this.addRes.success&&(this.loaders=!1,this.toastrService.success(this.addRes.msg),this.router.navigate(["hrm/list-target"]))})}else this.targetForm.markAllAsTouched(),this.toastrService.error("Please Fill All The Required Fields");else this.toastrService.error("Total Percentage (%) should be less than and Equal to 100"),this.targetForm.markAllAsTouched();else this.toastrService.error("Target Value and Sale Value total should be same"),this.targetForm.markAllAsTouched()}onLabelClick(a){a.stopPropagation()}}return r.\u0275fac=function(a){return new(a||r)(t.Y36(s.qu),t.Y36(i.z),t.Y36(C.F0),t.Y36(C.gz),t.Y36(l._W))},r.\u0275cmp=t.Xpm({type:r,selectors:[["app-update-target"]],decls:83,vars:27,consts:[[1,"page-header","justify-content-center"],[1,"page-title"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"card"],[1,"card-body"],[1,"row","form-card"],[1,"col-lg-3","col-sm-4","col-12"],[1,"form-group"],["formControlName","department",1,"form-select",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],["type","date","formControlName","start_date","id","start_date",3,"ngClass","change"],["type","date","formControlName","end_date","id","end_date",3,"ngClass","change"],["type","number","formControlName","target_value","id","target_value",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12"],["formControlName","employee_type","id","employee_type",3,"ngClass"],["value","Fresher"],["value","Experienced"],["value","Master"],["class","text-danger d-block",4,"ngIf"],[1,"col-lg-12","col-sm-12","col-12"],[1,"table","amt-table"],["formArrayName","cart"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","2",1,"text-start"],[1,"col-lg-8","text-end","mt-5"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//hrm/list-target",1,"btn","btn-cancel"],[3,"value"],[1,"text-danger"],[1,"text-danger","d-block"],[3,"formGroupName"],["type","text","placeholder","Months Name","formControlName","month_and_year",1,"form-control"],["type","text","formControlName","percent_of_total_target","placeholder","ex-100",1,"form-control",3,"blur"],["class","text-danger","style","display: block;",4,"ngIf"],["type","text","formControlName","estimated_sale_value","placeholder","ex-100",1,"form-control",3,"blur"],[1,"text-danger",2,"display","block"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,e){if(1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Update Target"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Target"),t.qZA()()(),t.TgZ(6,"form",2),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label"),t._uU(14,"Department*"),t.qZA(),t.TgZ(15,"select",9)(16,"option",10),t._uU(17,"Select department"),t.qZA(),t.YNc(18,d,2,2,"option",11),t.qZA(),t.YNc(19,h,2,0,"span",12),t.qZA()(),t.TgZ(20,"div",7)(21,"div",8)(22,"label"),t._uU(23,"Start Date"),t.qZA(),t.TgZ(24,"input",13),t.NdJ("change",function(){return e.onCheck()}),t.qZA(),t.YNc(25,g,2,0,"span",12),t.qZA()(),t.TgZ(26,"div",7)(27,"div",8)(28,"label"),t._uU(29,"End Date"),t.qZA(),t.TgZ(30,"input",14),t.NdJ("change",function(){return e.onCheck()}),t.qZA(),t.YNc(31,b,2,0,"span",12),t.qZA()(),t.TgZ(32,"div",7)(33,"div",8)(34,"label"),t._uU(35,"Target Value"),t.qZA(),t._UZ(36,"input",15),t.YNc(37,v,2,0,"span",12),t.qZA()(),t.TgZ(38,"div",16)(39,"div",8)(40,"label"),t._uU(41,"Employee Type*"),t.qZA(),t.TgZ(42,"select",17)(43,"option",10),t._uU(44,"Select Employee Type"),t.qZA(),t.TgZ(45,"option",18),t._uU(46,"Fresher"),t.qZA(),t.TgZ(47,"option",19),t._uU(48,"Experienced"),t.qZA(),t.TgZ(49,"option",20),t._uU(50,"Master"),t.qZA()(),t.YNc(51,f,2,0,"span",21),t.qZA()(),t.TgZ(52,"div",22)(53,"table",23)(54,"thead")(55,"tr")(56,"th"),t._uU(57,"Sr. No."),t.qZA(),t.TgZ(58,"th"),t._uU(59,"Month"),t.qZA(),t.TgZ(60,"th"),t._uU(61,"Percentage (%)"),t.qZA(),t.TgZ(62,"th"),t._uU(63,"Sale Value"),t.qZA(),t.TgZ(64,"th"),t._uU(65,"\xa0"),t.qZA()()(),t.TgZ(66,"tbody"),t.ynx(67,24),t.YNc(68,y,11,3,"ng-container",25),t.BQk(),t.TgZ(69,"tr",26)(70,"td",27)(71,"strong"),t._uU(72,"Total"),t.qZA()(),t.TgZ(73,"td"),t._uU(74),t.qZA(),t.TgZ(75,"td"),t._uU(76),t.qZA(),t._UZ(77,"td"),t.qZA()()()(),t.TgZ(78,"div",28),t.YNc(79,p,2,0,"button",29),t.YNc(80,U,3,0,"button",30),t.TgZ(81,"a",31),t._uU(82,"Cancel"),t.qZA()()()()()()()),2&a){let n;t.xp6(6),t.Q6J("formGroup",e.targetForm),t.xp6(9),t.Q6J("ngClass",t.VKq(17,Z,e.f.department.touched&&e.f.department.invalid)),t.xp6(3),t.Q6J("ngForOf",e.departmentList),t.xp6(1),t.Q6J("ngIf",e.department&&e.department.invalid&&e.department.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(19,Z,e.f.start_date.touched&&e.f.start_date.invalid)),t.xp6(1),t.Q6J("ngIf",e.start_date&&e.start_date.invalid&&e.start_date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(21,Z,e.f.end_date.touched&&e.f.end_date.invalid)),t.xp6(1),t.Q6J("ngIf",e.end_date&&e.end_date.invalid&&e.end_date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(23,Z,e.f.target_value.touched&&e.f.target_value.invalid)),t.xp6(1),t.Q6J("ngIf",e.target_value&&e.target_value.invalid&&e.target_value.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(25,Z,e.f.employee_type.touched&&e.f.employee_type.invalid)),t.xp6(9),t.Q6J("ngIf",e.employee_type&&e.employee_type.invalid&&e.employee_type.touched),t.xp6(17),t.Q6J("ngForOf",e.getCart().controls),t.xp6(6),t.Oqu(e.percentageValue()),t.xp6(2),t.hij(" ",null==(n=e.saleValue())?null:n.toFixed(2),""),t.xp6(3),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}},dependencies:[c.mk,c.sg,c.O5,C.yS,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.sg,s.u,s.x0,s.CE],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background-color:#fff}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600;float:left;margin-top:10px}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.inp[_ngcontent-%COMP%]{border:none}.amt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#EEF0F8}.amt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FAFBFE}.addMore[_ngcontent-%COMP%]{color:#ff9f43;font-size:20px;font-weight:500;float:right}.form-card[_ngcontent-%COMP%]{width:100%;margin:auto;justify-content:center}']}),r})(),canActivate:[o(30597).l],data:{allowedRoles:["change_target"]}}];let S=(()=>{class r{}return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[C.Bz.forChild(E),C.Bz]}),r})();var I=o(30906),N=o(87078),J=o(43189),V=o(54333),q=o(54040),R=o(95113),w=o(56709);let Y=(()=>{class r{}return r.\u0275fac=function(a){return new(a||r)},r.\u0275mod=t.oAB({type:r}),r.\u0275inj=t.cJS({imports:[c.ez,S,I.ZU,s.u5,s.UX,N.T,J.h,V.JX,q.l,R.LD,w.p9]}),r})()},30597:(D,A,o)=>{o.d(A,{l:()=>l});var c=o(94650),C=o(4392),s=o(97185),t=o(42917),i=o(80927);let l=(()=>{class d{constructor(g,b,v,f,T){this.router=g,this.Arout=b,this.toastr=v,this.profileService=f,this.coreService=T}canActivate(g,b){const v=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(f=>{this.userDetails=f,this.permissions=this.userDetails?.permission}),v){const f=g.data.allowedRoles,T=v.some(p=>f.includes(p.codename));let y=this.coreService.profileData$.value;if(y&&y.username){this.userDetails=y,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(y);const p=y?.permission,U=this.profileService.getUserDetails();(!U||U.length!==p.length)&&(this.profileService.setUserPermission(p),window.location.reload())}else this.coreService.getProfile().subscribe(p=>{this.userDetails=p,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(p);const U=p?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==U.length)&&(this.profileService.setUserPermission(U),window.location.reload())});if(T)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return d.\u0275fac=function(g){return new(g||d)(c.LFG(C.F0),c.LFG(C.gz),c.LFG(s._W),c.LFG(t.J),c.LFG(i.p))},d.\u0275prov=c.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},87078:(D,A,o)=>{o.d(A,{G:()=>c.G,T:()=>C.T});var c=o(10008),C=o(33861)},10008:(D,A,o)=>{o.d(A,{G:()=>s});var c=o(94650),s=function(){function t(i,l,d){this.el=i,this.vcr=l,this.renderer=d,this.dtOptions={}}return t.prototype.ngOnInit=function(){var i=this;this.dtTrigger?this.dtTrigger.subscribe(function(l){i.displayTable(l)}):this.displayTable(null)},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(i){var l=this;i&&(this.dtOptions=i),this.dtInstance=new Promise(function(d,h){Promise.resolve(l.dtOptions).then(function(g){0===Object.keys(g).length&&0===$("tbody tr",l.el.nativeElement).length?h("Both the table and dtOptions cannot be empty"):setTimeout(function(){var v={rowCallback:function(f,T,y){if(g.columns){var p=g.columns;l.applyNgPipeTransform(f,p),l.applyNgRefTemplate(f,p,T)}g.rowCallback&&g.rowCallback(f,T,y)}};v=Object.assign({},g,v),l.dt=$(l.el.nativeElement).DataTable(v),d(l.dt)})})})},t.prototype.applyNgPipeTransform=function(i,l){l.filter(function(h){return h.ngPipeInstance&&!h.ngTemplateRef}).forEach(function(h){var g=h.ngPipeInstance,b=h.ngPipeArgs||[],v=l.findIndex(function(p){return p.data===h.data}),f=i.childNodes.item(v),T=$(f).text(),y=g.transform.apply(g,function(t,i,l){if(l||2===arguments.length)for(var g,d=0,h=i.length;d<h;d++)(g||!(d in i))&&(g||(g=Array.prototype.slice.call(i,0,d)),g[d]=i[d]);return t.concat(g||Array.prototype.slice.call(i))}([T],b,!1));$(f).text(y)})},t.prototype.applyNgRefTemplate=function(i,l,d){var h=this;l.filter(function(b){return b.ngTemplateRef&&!b.ngPipeInstance}).forEach(function(b){var v=b.ngTemplateRef,f=v.ref,T=v.context,y=l.findIndex(function(F){return F.data===b.data}),p=i.childNodes.item(y);$(p).html("");var U=Object.assign({},T,T?.userData,{adtData:d}),Z=h.vcr.createEmbeddedView(f,U);h.renderer.appendChild(p,Z.rootNodes[0])})},t.\u0275fac=function(l){return new(l||t)(c.Y36(c.SBq),c.Y36(c.s_b),c.Y36(c.Qsj))},t.\u0275dir=c.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}()},33861:(D,A,o)=>{o.d(A,{T:()=>t});var c=o(36895),s=(o(10008),o(94650)),t=function(){function i(){}return i.forRoot=function(){return{ngModule:i}},i.\u0275fac=function(d){return new(d||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({imports:[c.ez]}),i}()}}]);