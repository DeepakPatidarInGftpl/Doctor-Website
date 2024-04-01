"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1374],{73795:(G,P,r)=>{r.r(P),r.d(P,{UpdatePermissionGroupModule:()=>Z});var l=r(36895),p=r(89299),a=r(24006),e=r(94650),M=r(25062),A=r(97185);function u(t,s){if(1&t){const o=e.EpF();e.TgZ(0,"div")(1,"div",28)(2,"input",32),e.NdJ("change",function(i){e.CHM(o);const c=e.oxw(3);return e.KtG(c.onCheckChange(i))}),e.qZA(),e.TgZ(3,"label",30),e._uU(4),e.qZA()()()}if(2&t){const o=s.$implicit,n=e.oxw(3);e.xp6(2),e.Q6J("id","permission_"+(null==o?null:o.id))("checked",o.selected)("value",o.id)("checked",n.permissions.includes(o.id)),e.xp6(1),e.Q6J("for","permission_"+(null==o?null:o.id)),e.xp6(1),e.Oqu(null==o?null:o.name)}}function U(t,s){if(1&t){const o=e.EpF();e.TgZ(0,"div",26)(1,"h4",27),e._uU(2),e.qZA(),e.TgZ(3,"div",28)(4,"input",29),e.NdJ("change",function(i){const d=e.CHM(o).$implicit,g=e.oxw().index,b=e.oxw();return e.KtG(b.selectAllPermissions(d.permissions,g,d.model_name,i))}),e.qZA(),e.TgZ(5,"label",30),e._uU(6,"Select all"),e.qZA()(),e.YNc(7,u,5,6,"div",31),e.qZA()}if(2&t){const o=s.$implicit,n=e.oxw().index;e.xp6(2),e.Oqu(null==o?null:o.model_name),e.xp6(2),e.Q6J("id","selectAll_"+n+"_"+o.model_name),e.xp6(1),e.Q6J("for","selectAll_"+n+"_"+o.model_name),e.xp6(2),e.Q6J("ngForOf",null==o?null:o.permissions)}}function h(t,s){if(1&t&&(e.TgZ(0,"div",18)(1,"div",19)(2,"div",20)(3,"h2",21)(4,"button",22),e._uU(5),e.ALo(6,"titlecase"),e.qZA()(),e.TgZ(7,"div",23)(8,"div",24),e.YNc(9,U,8,4,"div",25),e.qZA()()()()()),2&t){const o=s.$implicit,n=s.index;e.xp6(4),e.uIk("data-bs-target","#collapse"+n)("aria-expanded",!1)("aria-controls","collapse"+n)("id","heading"+n),e.xp6(1),e.Oqu(e.lcZ(6,8,o.content_type.app_label)),e.xp6(2),e.Q6J("id","collapse"+n),e.uIk("aria-labelledby","heading"+n),e.xp6(2),e.Q6J("ngForOf",null==o?null:o.model)}}function x(t,s){1&t&&(e.TgZ(0,"button",33),e._uU(1,"Submit"),e.qZA())}function _(t,s){1&t&&(e.TgZ(0,"button",34),e._UZ(1,"span",35),e._uU(2,"\xa0 Submit"),e.qZA())}let m=(()=>{class t{constructor(o,n,i,c,d,g){this.contactService=o,this.fb=n,this.toastr=i,this.Arout=c,this.router=d,this.location=g,this.permissions=[],this.selectedSubcat=0,this.loaders=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.permissionForm=this.fb.group({group_name:new a.NI(""),permissions:new a.Oe([])}),this.contactService.getPermissionGroupById(this.id).subscribe(o=>{this.gName=o.Group,this.permissionForm.patchValue({group_name:o.Group}),this.permissions=[],o.data.forEach(n=>{n.model.forEach(i=>{i.permissions.forEach(c=>{this.permissions.push(c.id)})})})}),this.getPermissionGroup()}selectAllPermissions(o,n,i,c){const d=c.target.checked,g=this.permissionForm.get("permissions");for(let b of o)if(b.selected=d,d)this.isPermissionSelected(b.id)||(g.push(new a.NI(b.id)),this.selectedSubcat++);else if(this.isPermissionSelected(b.id)){const y=g.controls.findIndex(T=>T.value===b.id);-1!==y&&(g.removeAt(y),this.selectedSubcat--)}}isPermissionSelected(o){return this.permissionForm.get("permissions").controls.some(i=>i.value===o)}getPermissionGroup(){this.contactService.getPermission().subscribe(o=>{this.groupList=o?.data,this.groupList.forEach(n=>{let i=[];i=n?.model,i.forEach(c=>{c.permissions.map(d=>{this.permissions.includes(d.id)&&this.permissionForm.get("permissions").push(new a.NI(d.id))})})})})}onCheckChange(o){const n=this.permissionForm.get("permissions");if(o.target.checked)n.push(new a.NI(parseInt(o.target.value))),this.selectedSubcat++;else{let i=0;n.controls.forEach(c=>{if(c.value==o.target.value)return n.removeAt(i),void this.selectedSubcat--;i++})}}submit(){if(this.permissionForm.valid){this.loaders=!0;var o=new FormData;const n=this.permissionForm.get("permissions")?.value.filter(i=>null!==i);o.append("permissions",JSON.stringify(n)),this.contactService.updatePermissionGroup(o,this.id).subscribe(i=>{this.loaders=!1,this.addRes=i,"Group updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.loaders=!1,this.permissionForm.reset(),this.location.back())},i=>{})}else this.permissionForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(M.y),e.Y36(a.qu),e.Y36(A._W),e.Y36(p.gz),e.Y36(p.F0),e.Y36(l.Ye))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-update-permission-group"]],decls:27,vars:4,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],["type","text","placeholder","User Role Name","formControlName","group_name","readonly","",1,"form-control","w-30"],["id","pills-tab","role","tablist",1,"nav","nav-pills","mb-4","mt-3"],["role","presentation",1,"nav-item"],["id","pills-home-tab","data-bs-toggle","pill","data-bs-target","#pills-home","type","button","role","tab","aria-controls","pills-home","aria-selected","true",1,"nav-link","active"],["id","pills-profile-tab","data-bs-toggle","pill","data-bs-target","#pills-profile","type","button","role","tab","aria-controls","pills-profile","aria-selected","false",1,"nav-link"],["id","pills-tabContent",1,"tab-content"],["id","pills-home","role","tabpanel","aria-labelledby","pills-home-tab",1,"tab-pane","fade","show","active"],["class","heading",4,"ngFor","ngForOf"],["id","pills-profile","role","tabpanel","aria-labelledby","pills-profile-tab",1,"tab-pane","fade"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//settings/permissionGroup",1,"btn","btn-cancel"],[1,"heading"],["id","accordionExample",1,"accordion"],[1,"accordion-item"],[1,"accordion-header"],["type","button","data-bs-toggle","collapse",1,"accordion-button","collapsed"],["data-bs-parent","#accordionExample",1,"accordion-collapse","collapse",3,"id"],[1,"row","w-100","m-0"],["class","col-sm-3 mb-3",4,"ngFor","ngForOf"],[1,"col-sm-3","mb-3"],[1,"f-18","mb-2"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"id","change"],[1,"form-check-label",3,"for"],[4,"ngFor","ngForOf"],["type","checkbox","formArrayName","permissions",1,"form-check-input",3,"id","checked","value","change"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,n){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"User Role"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your User Roles"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return n.submit()}),e._UZ(9,"input",5),e.TgZ(10,"ul",6)(11,"li",7)(12,"button",8),e._uU(13,"User Role Details"),e.qZA()(),e.TgZ(14,"li",7)(15,"button",9),e._uU(16,"Report Details"),e.qZA()()(),e.TgZ(17,"div",10)(18,"div",11)(19,"div"),e.YNc(20,h,10,10,"div",12),e.qZA()(),e._UZ(21,"div",13),e.TgZ(22,"div",14),e.YNc(23,x,2,0,"button",15),e.YNc(24,_,3,0,"button",16),e.TgZ(25,"a",17),e._uU(26,"Cancel"),e.qZA()()()()()()),2&o&&(e.xp6(8),e.Q6J("formGroup",n.permissionForm),e.xp6(12),e.Q6J("ngForOf",n.groupList),e.xp6(3),e.Q6J("ngIf",!n.loaders),e.xp6(1),e.Q6J("ngIf",n.loaders))},dependencies:[l.sg,l.O5,p.yS,a._Y,a.Fj,a.JJ,a.JL,a.sg,a.u,a.CE,l.rS],styles:[".w-30[_ngcontent-%COMP%]{width:20%}.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{background:transparent;color:#f63;font-weight:500;border-bottom:2px solid #ff6633;border-radius:0;font-size:16px}.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:16px;color:#f63}.orangeb-btn[_ngcontent-%COMP%]{padding:5px 10px;border:2px solid #ff6633;background:transparent;color:#f63;border-radius:5px;font-weight:500}.orangeb-btn[_ngcontent-%COMP%]:hover{background-color:#f63;color:#fff;transition:.3s}.accordion-item[_ngcontent-%COMP%]{border:1px solid #EEEEEE}.accordion-button[_ngcontent-%COMP%]{font-size:17px;font-weight:500;padding:15px 20px}.accordion-button[_ngcontent-%COMP%]:not(.collapsed){background-color:#f9d9cc;color:#f63}.accordion-button.collapsed[_ngcontent-%COMP%]:after{width:30px;background-repeat:no-repeat;height:30px;background-size:auto}.accordion-button[_ngcontent-%COMP%]:not(.collapsed):after{transform:rotate(-180deg);width:30px;background-repeat:no-repeat;height:30px;background-size:auto}.accordion-body[_ngcontent-%COMP%]{color:#201e1f;font-size:20px}.accordion[_ngcontent-%COMP%]{margin-bottom:30px}.text-p[_ngcontent-%COMP%]{color:#483d53;font-size:15px;font-weight:400}.form-control[_ngcontent-%COMP%]:focus{border-color:#faddd1;outline:0;box-shadow:0 0 0 .25rem #ff8e5f63}.btn-close[_ngcontent-%COMP%]:focus{border-color:#faddd1;outline:0;box-shadow:0 0 0 .25rem #ff8e5f63}.form-check-input[_ngcontent-%COMP%]:focus{border-color:#faddd1;box-shadow:0 0 0 .25rem #ff8e5f63}.form-check-input[_ngcontent-%COMP%]:checked{background-color:#f63;border-color:#f63}.accordion-button[_ngcontent-%COMP%]:focus{border-color:#faddd1;box-shadow:0 0 0 .25rem #ff8e5f63}.accordion-collapse[_ngcontent-%COMP%]{padding:15px}.f-18[_ngcontent-%COMP%]{font-size:18px;font-weight:500}@media (max-width: 765px){.purple-text[_ngcontent-%COMP%]{font-size:15px}.accordion-button[_ngcontent-%COMP%]{padding:10px 15px}.text-p[_ngcontent-%COMP%]{font-size:11px}.heading[_ngcontent-%COMP%]{width:100%}.accordion-button[_ngcontent-%COMP%], .accordion-body[_ngcontent-%COMP%]{font-size:12px}.accordion-button[_ngcontent-%COMP%]:not(.collapsed):after{width:20px;height:20px}.accordion-button.collapsed[_ngcontent-%COMP%]:after{width:20px;height:20px}}"]}),t})();var v=r(30597);const f=JSON.parse(localStorage.getItem("auth"));let C;f&&f.map(s=>{"auth"===s.content_type.app_label&&"group"===s.content_type.model&&"change_group"==s.codename&&(C=s.codename)});const O=[{path:"",component:m,canActivate:[v.l],data:{allowedRoles:["change_group"]}}];let S=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[p.Bz.forChild(O),p.Bz]}),t})();var F=r(8468);let Z=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,S,F.I]}),t})()},30597:(G,P,r)=>{r.d(P,{l:()=>A});var l=r(94650),p=r(89299),a=r(97185),e=r(42917),M=r(80927);let A=(()=>{class u{constructor(h,x,_,m,v){this.router=h,this.Arout=x,this.toastr=_,this.profileService=m,this.coreService=v}canActivate(h,x){const _=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(m=>{this.userDetails=m,this.permissions=this.userDetails?.permission}),_){const m=h.data.allowedRoles;console.log(m,"allowedRoles");const v=_.some(f=>m.includes(f.codename));if(console.log(v),this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails);const C=f?.permission,O=this.profileService.getUserDetails();(!O||O.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())}),v)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return u.\u0275fac=function(h){return new(h||u)(l.LFG(p.F0),l.LFG(p.gz),l.LFG(a._W),l.LFG(e.J),l.LFG(M.p))},u.\u0275prov=l.Yz7({token:u,factory:u.\u0275fac,providedIn:"root"}),u})()}}]);