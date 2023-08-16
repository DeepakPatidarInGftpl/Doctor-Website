"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3667],{33667:(B,_,i)=>{i.r(_),i.d(_,{UpdateBranchModule:()=>Q});var r=i(36895),l=i(88996),s=i(24006),t=i(94650),U=i(80927),A=i(97185);function c(n,o){1&n&&(t.TgZ(0,"span",24),t._uU(1,"Enter Title "),t.qZA())}function T(n,o){1&n&&(t.TgZ(0,"span",24),t._uU(1,"Enter Valid GSTIN "),t.qZA())}function u(n,o){if(1&n&&(t.TgZ(0,"option",25),t._uU(1),t.qZA()),2&n){const a=o.$implicit;t.s9C("value",a.id),t.xp6(1),t.hij(" ",a.country_name," ")}}function v(n,o){1&n&&(t.TgZ(0,"span",24),t._uU(1,"Select country"),t.qZA())}function h(n,o){if(1&n&&(t.TgZ(0,"option",25),t._uU(1),t.qZA()),2&n){const a=o.$implicit;t.s9C("value",a.id),t.xp6(1),t.hij("",a.state," ")}}function d(n,o){1&n&&(t.TgZ(0,"span",24),t._uU(1,"Select state"),t.qZA())}function g(n,o){1&n&&(t.TgZ(0,"span",24),t._uU(1,"Data not available"),t.qZA())}function m(n,o){if(1&n&&(t.TgZ(0,"option",25),t._uU(1),t.qZA()),2&n){const a=o.$implicit;t.s9C("value",a.id),t.xp6(1),t.Oqu(a.city)}}function y(n,o){1&n&&(t.TgZ(0,"span",24),t._uU(1,"Select city"),t.qZA())}function b(n,o){1&n&&(t.TgZ(0,"span",24),t._uU(1,"data not available"),t.qZA())}function I(n,o){1&n&&(t.TgZ(0,"span",24),t._uU(1,"Enter your 6 digits pincode number"),t.qZA())}function S(n,o){1&n&&(t.TgZ(0,"span",24),t._uU(1,"Enter your address"),t.qZA())}function q(n,o){1&n&&(t.TgZ(0,"button",26),t._uU(1,"Submit"),t.qZA())}function F(n,o){1&n&&(t.TgZ(0,"button",27)(1,"span",28),t._uU(2,"\xa0"),t.qZA(),t._uU(3,"Submit \xa0"),t.qZA())}const p=function(n){return{"is-invalid":n}},M=[{path:"",component:(()=>{class n{constructor(a,e,Z,C,f){this.coreService=a,this.fb=e,this.toastr=Z,this.router=C,this.Arout=f,this.loaders=!1}get f(){return this.branchForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.branchForm=this.fb.group({title:new s.NI("",[s.kI.required]),gstin:new s.NI("",[s.kI.required,s.kI.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),country:new s.NI(""),state:new s.NI(""),city:new s.NI(""),pincode:new s.NI("",[s.kI.required]),address:new s.NI("")}),this.coreService.getBranchById(this.id).subscribe(a=>{console.log(a),this.id==a.id&&(this.branchForm.patchValue(a),this.branchForm.get("country")?.patchValue(a?.country?.id),this.selectState(a?.country),this.branchForm.get("state")?.patchValue(a?.state?.id),this.selectCity(a?.state),this.branchForm.get("city")?.patchValue(a?.city?.id))}),this.getCountry()}getCountry(){this.coreService.countryList().subscribe(a=>{this.country=a})}selectState(a){console.log(a),this.coreService.getStateByCountryId(a).subscribe(e=>{this.state=e,console.log(this.state)})}selectCity(a){console.log(a),this.coreService.getCityByStateId(a).subscribe(e=>{this.city=e})}update(){this.branchForm.valid?(this.loaders=!0,this.coreService.updateBranch(this.branchForm.value,this.id).subscribe(a=>{console.log(a),this.addRes=a,"Branch Updated Sucessfully"==this.addRes.msg?(this.loaders=!1,this.toastr.success(this.addRes.msg),this.router.navigate(["//masters/branch"]),this.branchForm.reset()):this.loaders=!1},a=>{this.loaders=!1,console.log(a.error.gst)})):(this.branchForm.markAllAsTouched(),console.log("forms invalid"))}get title(){return this.branchForm.get("title")}get gstin(){return this.branchForm.get("gstin")}get address(){return this.branchForm.get("address")}get countryy(){return this.branchForm.get("country")}get statee(){return this.branchForm.get("state")}get cityy(){return this.branchForm.get("city")}get pincode(){return this.branchForm.get("pincode")}}return n.\u0275fac=function(a){return new(a||n)(t.Y36(U.p),t.Y36(s.qu),t.Y36(A._W),t.Y36(l.F0),t.Y36(l.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-update-branch"]],decls:70,vars:36,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-sm-4","col-12"],[1,"form-group"],["type","text","formControlName","title","id","title",3,"ngClass"],["class","text-danger",4,"ngIf"],["type","text","formControlName","gstin","id","gstin",3,"ngClass"],["formControlName","country","id","country",1,"w-100","h-100","border",3,"ngClass","change"],["countryValue",""],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["formControlName","state","id","state",1,"w-100","h-100","border",3,"ngClass","change"],["stateValue",""],["formControlName","city","id","city",1,"w-100","h-100","border",3,"ngClass"],["type","text","formControlName","pincode","maxlength","6","minlength","6","id","pincode",3,"ngClass"],["formControlName","address","id","address",1,"textarea",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","///masters/branch",1,"btn","btn-cancel"],[1,"text-danger"],[3,"value"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(a,e){if(1&a){const Z=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Update Branch"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit new Branch "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return e.update()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"Title*"),t.qZA(),t._UZ(14,"input",8),t.YNc(15,c,2,0,"span",9),t.qZA()(),t.TgZ(16,"div",6)(17,"div",7)(18,"label"),t._uU(19,"GSTIN*"),t.qZA(),t._UZ(20,"input",10),t.YNc(21,T,2,0,"span",9),t.qZA()(),t.TgZ(22,"div",6)(23,"div",7)(24,"label"),t._uU(25,"Country"),t.qZA(),t.TgZ(26,"select",11,12),t.NdJ("change",function(){t.CHM(Z);const f=t.MAs(27);return t.KtG(e.selectState(f.value))}),t.TgZ(28,"option",13),t._uU(29,"Country"),t.qZA(),t.YNc(30,u,2,2,"option",14),t.qZA(),t.YNc(31,v,2,0,"span",9),t.qZA()(),t.TgZ(32,"div",6)(33,"div",7)(34,"label"),t._uU(35," State"),t.qZA(),t.TgZ(36,"select",15,16),t.NdJ("change",function(){t.CHM(Z);const f=t.MAs(37);return t.KtG(e.selectCity(f.value))}),t.TgZ(38,"option",13),t._uU(39,"State"),t.qZA(),t.YNc(40,h,2,2,"option",14),t.qZA(),t.YNc(41,d,2,0,"span",9),t.YNc(42,g,2,0,"span",9),t.qZA()(),t.TgZ(43,"div",6)(44,"div",7)(45,"label"),t._uU(46," City"),t.qZA(),t.TgZ(47,"select",17)(48,"option",13),t._uU(49,"City"),t.qZA(),t.YNc(50,m,2,2,"option",14),t.qZA(),t.YNc(51,y,2,0,"span",9),t.YNc(52,b,2,0,"span",9),t.qZA()(),t.TgZ(53,"div",6)(54,"div",7)(55,"label"),t._uU(56,"Pincode"),t.qZA(),t._UZ(57,"input",18),t.YNc(58,I,2,0,"span",9),t.qZA()(),t.TgZ(59,"div",6)(60,"div",7)(61,"label"),t._uU(62,"Address"),t.qZA(),t._UZ(63,"textarea",19),t.YNc(64,S,2,0,"span",9),t.qZA()(),t.TgZ(65,"div",20),t.YNc(66,q,2,0,"button",21),t.YNc(67,F,4,0,"button",22),t.TgZ(68,"a",23),t._uU(69,"Cancel"),t.qZA()()()()()()}2&a&&(t.xp6(8),t.Q6J("formGroup",e.branchForm),t.xp6(6),t.Q6J("ngClass",t.VKq(22,p,e.f.title.touched&&e.f.title.invalid)),t.xp6(1),t.Q6J("ngIf",e.title&&e.title.invalid&&e.title.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(24,p,e.f.gstin.touched&&e.f.gstin.invalid)),t.xp6(1),t.Q6J("ngIf",e.gstin&&e.gstin.invalid&&e.gstin.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(26,p,e.f.country.touched&&e.f.country.invalid)),t.xp6(4),t.Q6J("ngForOf",e.country),t.xp6(1),t.Q6J("ngIf",e.countryy&&e.countryy.invalid&&e.countryy.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(28,p,e.f.state.touched&&e.f.state.invalid)),t.xp6(4),t.Q6J("ngForOf",e.state),t.xp6(1),t.Q6J("ngIf",e.statee&&e.statee.invalid&&e.statee.touched&&(null==e.state?null:e.state.length)>0),t.xp6(1),t.Q6J("ngIf",e.statee&&e.statee.invalid&&e.statee.touched&&(null==e.state?null:e.state.length)<=0),t.xp6(5),t.Q6J("ngClass",t.VKq(30,p,e.f.city.touched&&e.f.city.invalid)),t.xp6(3),t.Q6J("ngForOf",e.city),t.xp6(1),t.Q6J("ngIf",e.cityy&&e.cityy.invalid&&e.cityy.touched&&(null==e.city?null:e.city.length)>0),t.xp6(1),t.Q6J("ngIf",e.cityy&&e.cityy.invalid&&e.cityy.touched&&(null==e.city?null:e.city.length)<=0),t.xp6(5),t.Q6J("ngClass",t.VKq(32,p,e.f.pincode.touched&&e.f.pincode.invalid)),t.xp6(1),t.Q6J("ngIf",e.pincode&&e.pincode.invalid&&e.pincode.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(34,p,e.f.address.touched&&e.f.address.invalid)),t.xp6(1),t.Q6J("ngIf",e.address&&e.address.invalid&&e.address.touched),t.xp6(2),t.Q6J("ngIf",!e.loaders),t.xp6(1),t.Q6J("ngIf",e.loaders))},dependencies:[r.mk,r.sg,r.O5,l.yS,s._Y,s.YN,s.Kr,s.Fj,s.EJ,s.JJ,s.JL,s.wO,s.nD,s.sg,s.u],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], .search[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.textarea[_ngcontent-%COMP%]{height:60px}"]}),n})(),canActivate:[i(30597).l],data:{allowedRoles:["change_branch"]}}];let O=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.Bz.forChild(M),l.Bz]}),n})();var E=i(8468);let Q=(()=>{class n{}return n.\u0275fac=function(a){return new(a||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[r.ez,O,E.I]}),n})()},30597:(B,_,i)=>{i.d(_,{l:()=>A});var r=i(94650),l=i(88996),s=i(97185),t=i(42917),U=i(80927);let A=(()=>{class c{constructor(u,v,h,d,g){this.router=u,this.Arout=v,this.toastr=h,this.profileService=d,this.coreService=g}canActivate(u,v){const h=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(d=>{this.userDetails=d,this.permissions=this.userDetails?.permission}),h){const d=u.data.allowedRoles;console.log(d,"allowedRoles");const g=h.some(m=>d.includes(m.codename));if(this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails);const y=m?.permission,b=this.profileService.getUserDetails();(!b||b.length!==y.length)&&(this.profileService.setUserPermission(y),window.location.reload())}),console.log(g),g)return!0}return console.log(this.permissions,"permisiion guard"),this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return c.\u0275fac=function(u){return new(u||c)(r.LFG(l.F0),r.LFG(l.gz),r.LFG(s._W),r.LFG(t.J),r.LFG(U.p))},c.\u0275prov=r.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);