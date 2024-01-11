"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4021],{74021:(P,A,o)=>{o.r(A),o.d(A,{UpdateTargetModule:()=>Y});var g=o(36895),b=o(89299),s=o(24006),t=o(94650),i=o(72266),l=o(97185);function d(n,h){if(1&n&&(t.TgZ(0,"option",26),t._uU(1),t.qZA()),2&n){const a=h.$implicit;t.s9C("value",a.id),t.xp6(1),t.hij(" ",a.title," ")}}function _(n,h){1&n&&(t.TgZ(0,"span",27),t._uU(1,"Select Department "),t.qZA())}function c(n,h){1&n&&(t.TgZ(0,"span",27),t._uU(1,"Select Start Date"),t.qZA())}function T(n,h){1&n&&(t.TgZ(0,"span",27),t._uU(1,"Select End Date"),t.qZA())}function v(n,h){1&n&&(t.TgZ(0,"span",27),t._uU(1,"Select Target Value"),t.qZA())}function m(n,h){1&n&&(t.TgZ(0,"span",33),t._uU(1,"Enter Percentage(%) ex: 1-100 % "),t.qZA())}function f(n,h){if(1&n){const a=t.EpF();t.ynx(0),t.TgZ(1,"tr",28)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td"),t._UZ(5,"input",29),t.qZA(),t.TgZ(6,"td")(7,"input",30),t.NdJ("blur",function(){const u=t.CHM(a).index,p=t.oxw();return t.KtG(p.calculateSaleValue(u))}),t.qZA(),t.YNc(8,m,2,0,"span",31),t.qZA(),t.TgZ(9,"td")(10,"input",32),t.NdJ("blur",function(){const u=t.CHM(a).index,p=t.oxw();return t.KtG(p.calculatePercentage(u))}),t.qZA()()(),t.BQk()}if(2&n){const a=h.index,e=t.oxw();t.xp6(1),t.Q6J("formGroupName",a),t.xp6(2),t.Oqu(a+1),t.xp6(5),t.Q6J("ngIf",e.discountt(a)&&e.discountt(a).invalid&&e.discountt(a).touched)}}function C(n,h){1&n&&(t.TgZ(0,"button",34),t._uU(1,"Submit"),t.qZA())}function y(n,h){1&n&&(t.TgZ(0,"button",35),t._UZ(1,"span",36),t._uU(2,"\xa0 Submit"),t.qZA())}const M=function(n){return{"is-invalid":n}},D=[{path:"",component:(()=>{class n{constructor(a,e,r,u,p){this.fb=a,this.hrmService=e,this.router=r,this.Arout=u,this.toastrService=p,this.loaders=!1}get f(){return this.targetForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.targetForm=this.fb.group({department:new s.NI("",[s.kI.required]),start_date:new s.NI("",[s.kI.required]),end_date:new s.NI("",[s.kI.required]),target_value:new s.NI("",[s.kI.required]),cart:this.fb.array([])}),this.getDepartment(),this.hrmService.getTargetById(this.id).subscribe(a=>{this.getRes=a,this.targetForm.patchValue(this.getRes),this.targetForm.get("department")?.patchValue(this.getRes.department),this.targetForm.setControl("cart",this.updateCart(this.getRes.cart))})}updateCart(a){let e=new s.Oe([]);return a.forEach(r=>{e.push(this.fb.group({month_and_year:r.month_and_year,percent_of_total_target:r.percent_of_total_target,estimated_sale_value:r.estimated_sale_value}))}),e}cart(){return this.fb.group({month_and_year:"",percent_of_total_target:new s.NI("",[s.kI.pattern(/^(100|[0-9]{1,2})$/)]),estimated_sale_value:""})}getCart(){return this.targetForm.get("cart")}addCart(){this.getCart().push(this.cart())}removeCart(a){this.getCart().removeAt(a)}onCheck(){const a=new Date(this.targetForm.get("start_date").value),e=new Date(this.targetForm.get("end_date").value),r=this.targetForm.get("cart");r.clear();const u=12*(e.getFullYear()-a.getFullYear())+e.getMonth()-a.getMonth()+1;if(u)for(let p=0;p<u;p++){this.addCart();const Z=`${a.getFullYear()+Math.floor((a.getMonth()+p)/12)}-${(a.getMonth()+p)%12+1}-01`;r.at(p).get("month_and_year").patchValue(Z)}}formatMonthAndYear(a){const r=a.getMonth(),u=a.getFullYear();return`${["January","February","March","April","May","June","July","August","September","October","November","December"][r]} ${u}`}get department(){return this.targetForm.get("department")}get start_date(){return this.targetForm.get("start_date")}get end_date(){return this.targetForm.get("end_date")}get target_value(){return this.targetForm.get("target_value")}discountt(a){return this.getCart().controls[a].get("percent_of_total_target")}getDepartment(){this.hrmService.getDepartment().subscribe(a=>{this.departmentList=a})}calculateSaleValue(a){const e=this.targetForm.get("target_value"),r=this.getCart().controls[a],u=+r.get("percent_of_total_target").value||0;if(r.get("estimated_sale_value"),u&&e){const U=(+e.value||0)*u/100;console.log(U,"calculateAmount"),r.get("estimated_sale_value").patchValue(U),console.log(r.get("percent_of_total_target")?.value>100),r.get("percent_of_total_target")?.value>100&&this.toastrService.error("Enter Percentage (%) Between 1-100")}}calculatePercentage(a){const e=this.targetForm.get("target_value"),r=this.getCart().controls[a],u=+r.get("estimated_sale_value").value||0;if(e&&u){const p=+e.value||0,Z=100*u/p;console.log(Z,"calculatePercentage"),r.get("percent_of_total_target").patchValue(Z),r.get("estimated_sale_value")?.value!==p&&this.toastrService.error("Target Value & sale Value should Be Equal")}}saleValue(){let a=0;for(let e=0;e<this.getCart().controls.length;e++){const r=this.getCart().controls[e].get("estimated_sale_value");r&&(a+=+r.value||0)}return a}percentageValue(){let a=0;for(let e=0;e<this.getCart().controls.length;e++){const r=this.getCart().controls[e].get("percent_of_total_target");r&&(a+=+r.value||0)}return a}submit(){if(console.log(this.targetForm.value),this.targetValue=this.targetForm.get("target_value")?.value,console.log(this.saleValue()),console.log(this.targetValue),this.saleValue()==this.targetValue)if(this.percentageValue()<=100)if(this.targetForm.valid){let a=new FormData;a.append("department",this.targetForm.get("department")?.value),a.append("start_date",this.targetForm.get("start_date")?.value),a.append("end_date",this.targetForm.get("end_date")?.value),a.append("target_value",this.targetForm.get("target_value")?.value);const e=this.targetForm.get("cart"),r=[];e.controls.forEach(u=>{const p=u,Z={};Object.keys(p.controls).forEach(U=>{const x=p.controls[U];Z[U]=isNaN(x.value)?x.value:parseFloat(x.value)}),r.push(Z)}),a.append("cart",JSON.stringify(r)),this.loaders=!0,this.hrmService.updateTarget(a,this.id).subscribe(u=>{this.addRes=u,this.addRes.success&&(this.loaders=!1,this.toastrService.success(this.addRes.msg),this.router.navigate(["hrm/list-target"]))})}else this.targetForm.markAllAsTouched(),this.toastrService.error("Please Fill All The Required Fields");else this.toastrService.error("Total Percentage (%) should be less than and Equal to 100"),this.targetForm.markAllAsTouched();else this.toastrService.error("Target Value and Sale Value total should be same"),this.targetForm.markAllAsTouched()}onLabelClick(a){a.stopPropagation()}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(s.qu),t.Y36(i.z),t.Y36(b.F0),t.Y36(b.gz),t.Y36(l._W))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-update-target"]],decls:69,vars:23,consts:[[1,"page-header","justify-content-center"],[1,"page-title"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"card"],[1,"card-body"],[1,"row","form-card"],[1,"col-lg-3","col-sm-4","col-12"],[1,"form-group"],["formControlName","department",1,"form-select",3,"ngClass"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["class","text-danger",4,"ngIf"],["type","date","formControlName","start_date","id","start_date",3,"ngClass","change"],["type","date","formControlName","end_date","id","end_date",3,"ngClass","change"],["type","number","formControlName","target_value","id","target_value",3,"ngClass"],[1,"col-lg-12","col-sm-12","col-12"],[1,"table","amt-table"],["formArrayName","cart"],[4,"ngFor","ngForOf"],[2,"background","rgba(145, 158, 171, 0.32)"],["colspan","2",1,"text-start"],[1,"col-lg-8","text-end","mt-5"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//hrm/list-target",1,"btn","btn-cancel"],[3,"value"],[1,"text-danger"],[3,"formGroupName"],["type","text","placeholder","Months Name","formControlName","month_and_year",1,"form-control"],["type","text","formControlName","percent_of_total_target","placeholder","ex-100",1,"form-control",3,"blur"],["class","text-danger","style","display: block;",4,"ngIf"],["type","text","formControlName","estimated_sale_value","placeholder","ex-100",1,"form-control",3,"blur"],[1,"text-danger",2,"display","block"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,e){if(1&a&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Update Target"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Target"),t.qZA()()(),t.TgZ(6,"form",2),t.NdJ("ngSubmit",function(){return e.submit()}),t.TgZ(7,"div",3)(8,"div",4)(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"label"),t._uU(14,"Department*"),t.qZA(),t.TgZ(15,"select",9)(16,"option",10),t._uU(17,"Select department"),t.qZA(),t.YNc(18,d,2,2,"option",11),t.qZA(),t.YNc(19,_,2,0,"span",12),t.qZA()(),t.TgZ(20,"div",7)(21,"div",8)(22,"label"),t._uU(23,"Start Date"),t.qZA(),t.TgZ(24,"input",13),t.NdJ("change",function(){return e.onCheck()}),t.qZA(),t.YNc(25,c,2,0,"span",12),t.qZA()(),t.TgZ(26,"div",7)(27,"div",8)(28,"label"),t._uU(29,"End Date"),t.qZA(),t.TgZ(30,"input",14),t.NdJ("change",function(){return e.onCheck()}),t.qZA(),t.YNc(31,T,2,0,"span",12),t.qZA()(),t.TgZ(32,"div",7)(33,"div",8)(34,"label"),t._uU(35,"Target Value"),t.qZA(),t._UZ(36,"input",15),t.YNc(37,v,2,0,"span",12),t.qZA()(),t.TgZ(38,"div",16)(39,"table",17)(40,"thead")(41,"tr")(42,"th"),t._uU(43,"Sr. No."),t.qZA(),t.TgZ(44,"th"),t._uU(45,"Month"),t.qZA(),t.TgZ(46,"th"),t._uU(47,"Percentage (%)"),t.qZA(),t.TgZ(48,"th"),t._uU(49,"Sale Value"),t.qZA(),t.TgZ(50,"th"),t._uU(51,"\xa0"),t.qZA()()(),t.TgZ(52,"tbody"),t.ynx(53,18),t.YNc(54,f,11,3,"ng-container",19),t.BQk(),t.TgZ(55,"tr",20)(56,"td",21)(57,"strong"),t._uU(58,"Total"),t.qZA()(),t.TgZ(59,"td"),t._uU(60),t.qZA(),t.TgZ(61,"td"),t._uU(62),t.qZA(),t._UZ(63,"td"),t.qZA()()()(),t.TgZ(64,"div",22),t.YNc(65,C,2,0,"button",23),t.YNc(66,y,3,0,"button",24),t.TgZ(67,"a",25),t._uU(68,"Cancel"),t.qZA()()()()()()()),2&a){let r;t.xp6(6),t.Q6J("formGroup",e.targetForm),t.xp6(9),t.Q6J("ngClass",t.VKq(15,M,e.f.department.touched&&e.f.department.invalid)),t.xp6(3),t.Q6J("ngForOf",e.departmentList),t.xp6(1),t.Q6J("ngIf",e.department&&e.department.invalid&&e.department.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(17,M,e.f.start_date.touched&&e.f.start_date.invalid)),t.xp6(1),t.Q6J("ngIf",e.start_date&&e.start_date.invalid&&e.start_date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(19,M,e.f.end_date.touched&&e.f.end_date.invalid)),t.xp6(1),t.Q6J("ngIf",e.end_date&&e.end_date.invalid&&e.end_date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(21,M,e.f.target_value.touched&&e.f.target_value.invalid)),t.xp6(1),t.Q6J("ngIf",e.target_value&&e.target_value.invalid&&e.target_value.touched),t.xp6(17),t.Q6J("ngForOf",e.getCart().controls),t.xp6(6),t.Oqu(e.percentageValue()),t.xp6(2),t.hij(" ",null==(r=e.saleValue())?null:r.toFixed(2),""),t.xp6(3),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders)}},dependencies:[g.mk,g.sg,g.O5,b.yS,s._Y,s.YN,s.Kr,s.Fj,s.wV,s.EJ,s.JJ,s.JL,s.sg,s.u,s.x0,s.CE],styles:['.ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background-color:#fff}.table[_ngcontent-%COMP%] > [_ngcontent-%COMP%]:not(:first-child){border-top:none!important}.labelSize[_ngcontent-%COMP%]{display:flex;align-items:center}.entries[_ngcontent-%COMP%]{font-size:12px;color:#5e5873;font-weight:600;float:left;margin-top:10px}.labelSize[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]{border:1px solid #ced4da;width:80px;height:30px;padding:0;border-radius:3px}.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:right;margin-top:4px}@media (max-width: 765px){.thone[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{float:inherit;margin-top:0}}.fa-sort[_ngcontent-%COMP%]:before{content:"\\f0dc";right:.5em;color:#babfc7;font-size:12px;opacity:1}.inp[_ngcontent-%COMP%]{border:none}.amt-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{background:#EEF0F8}.amt-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]{background:#FAFBFE}.addMore[_ngcontent-%COMP%]{color:#ff9f43;font-size:20px;font-weight:500;float:right}.form-card[_ngcontent-%COMP%]{width:100%;margin:auto;justify-content:center}']}),n})(),canActivate:[o(30597).l],data:{allowedRoles:["change_target"]}}];let E=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[b.Bz.forChild(D),b.Bz]}),n})();var S=o(30906),I=o(87078),N=o(43189),R=o(54333),V=o(54040),J=o(95113),q=o(56709);let Y=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,E,S.ZU,s.u5,s.UX,I.T,N.h,R.JX,V.l,J.LD,q.p9]}),n})()},30597:(P,A,o)=>{o.d(A,{l:()=>l});var g=o(94650),b=o(89299),s=o(97185),t=o(42917),i=o(80927);let l=(()=>{class d{constructor(c,T,v,m,f){this.router=c,this.Arout=T,this.toastr=v,this.profileService=m,this.coreService=f}canActivate(c,T){const v=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(m=>{this.userDetails=m,this.permissions=this.userDetails?.permission}),v){const m=c.data.allowedRoles;console.log(m,"allowedRoles");const f=v.some(C=>m.includes(C.codename));if(console.log(f),this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails);const y=C?.permission,M=this.profileService.getUserDetails();(!M||M.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),f)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return d.\u0275fac=function(c){return new(c||d)(g.LFG(b.F0),g.LFG(b.gz),g.LFG(s._W),g.LFG(t.J),g.LFG(i.p))},d.\u0275prov=g.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},87078:(P,A,o)=>{o.d(A,{G:()=>g.G,T:()=>b.T});var g=o(10008),b=o(33861)},10008:(P,A,o)=>{o.d(A,{G:()=>s});var g=o(94650),s=function(){function t(i,l,d){this.el=i,this.vcr=l,this.renderer=d,this.dtOptions={}}return t.prototype.ngOnInit=function(){var i=this;this.dtTrigger?this.dtTrigger.subscribe(function(l){i.displayTable(l)}):this.displayTable(null)},t.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},t.prototype.displayTable=function(i){var l=this;i&&(this.dtOptions=i),this.dtInstance=new Promise(function(d,_){Promise.resolve(l.dtOptions).then(function(c){0===Object.keys(c).length&&0===$("tbody tr",l.el.nativeElement).length?_("Both the table and dtOptions cannot be empty"):setTimeout(function(){var v={rowCallback:function(m,f,C){if(c.columns){var y=c.columns;l.applyNgPipeTransform(m,y),l.applyNgRefTemplate(m,y,f)}c.rowCallback&&c.rowCallback(m,f,C)}};v=Object.assign({},c,v),l.dt=$(l.el.nativeElement).DataTable(v),d(l.dt)})})})},t.prototype.applyNgPipeTransform=function(i,l){l.filter(function(_){return _.ngPipeInstance&&!_.ngTemplateRef}).forEach(function(_){var c=_.ngPipeInstance,T=_.ngPipeArgs||[],v=l.findIndex(function(y){return y.data===_.data}),m=i.childNodes.item(v),f=$(m).text(),C=c.transform.apply(c,function(t,i,l){if(l||2===arguments.length)for(var c,d=0,_=i.length;d<_;d++)(c||!(d in i))&&(c||(c=Array.prototype.slice.call(i,0,d)),c[d]=i[d]);return t.concat(c||Array.prototype.slice.call(i))}([f],T,!1));$(m).text(C)})},t.prototype.applyNgRefTemplate=function(i,l,d){var _=this;l.filter(function(T){return T.ngTemplateRef&&!T.ngPipeInstance}).forEach(function(T){var v=T.ngTemplateRef,m=v.ref,f=v.context,C=l.findIndex(function(F){return F.data===T.data}),y=i.childNodes.item(C);$(y).html("");var M=Object.assign({},f,f?.userData,{adtData:d}),O=_.vcr.createEmbeddedView(m,M);_.renderer.appendChild(y,O.rootNodes[0])})},t.\u0275fac=function(l){return new(l||t)(g.Y36(g.SBq),g.Y36(g.s_b),g.Y36(g.Qsj))},t.\u0275dir=g.lG2({type:t,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),t}()},33861:(P,A,o)=>{o.d(A,{T:()=>t});var g=o(36895),s=(o(10008),o(94650)),t=function(){function i(){}return i.forRoot=function(){return{ngModule:i}},i.\u0275fac=function(d){return new(d||i)},i.\u0275mod=s.oAB({type:i}),i.\u0275inj=s.cJS({imports:[g.ez]}),i}()}}]);