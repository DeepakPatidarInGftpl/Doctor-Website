"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[840],{73795:(k,T,f)=>{f.r(T),f.d(T,{UpdatePermissionGroupModule:()=>U});var p=f(36895),C=f(88996),u=f(24006),e=f(94650),A=f(25062),r=f(97185);function a(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div")(1,"div",28)(2,"input",32),e.NdJ("change",function(s){e.CHM(t);const g=e.oxw(3);return e.KtG(g.onCheckChange(s))}),e.qZA(),e.TgZ(3,"label",30),e._uU(4),e.qZA()()()}if(2&o){const t=l.$implicit,n=e.oxw(3);e.xp6(2),e.Q6J("id","permission_"+(null==t?null:t.id))("checked",t.selected)("value",t.id)("checked",n.permissions.includes(t.id)),e.xp6(1),e.Q6J("for","permission_"+(null==t?null:t.id)),e.xp6(1),e.Oqu(null==t?null:t.name)}}function i(o,l){if(1&o){const t=e.EpF();e.TgZ(0,"div",26)(1,"h4",27),e._uU(2),e.qZA(),e.TgZ(3,"div",28)(4,"input",29),e.NdJ("change",function(s){const x=e.CHM(t).$implicit,P=e.oxw().index,O=e.oxw();return e.KtG(O.selectAllPermissions(x.permissions,P,x.model_name,s))}),e.qZA(),e.TgZ(5,"label",30),e._uU(6,"Select all"),e.qZA()(),e.YNc(7,a,5,6,"div",31),e.qZA()}if(2&o){const t=l.$implicit,n=e.oxw().index;e.xp6(2),e.Oqu(null==t?null:t.model_name),e.xp6(2),e.Q6J("id","selectAll_"+n+"_"+t.model_name),e.xp6(1),e.Q6J("for","selectAll_"+n+"_"+t.model_name),e.xp6(2),e.Q6J("ngForOf",null==t?null:t.permissions)}}function d(o,l){if(1&o&&(e.TgZ(0,"div",18)(1,"div",19)(2,"div",20)(3,"h2",21)(4,"button",22),e._uU(5),e.ALo(6,"titlecase"),e.qZA()(),e.TgZ(7,"div",23)(8,"div",24),e.YNc(9,i,8,4,"div",25),e.qZA()()()()()),2&o){const t=l.$implicit,n=l.index;e.xp6(4),e.uIk("data-bs-target","#collapse"+n)("aria-expanded",!1)("aria-controls","collapse"+n)("id","heading"+n),e.xp6(1),e.Oqu(e.lcZ(6,8,t.content_type.app_label)),e.xp6(2),e.Q6J("id","collapse"+n),e.uIk("aria-labelledby","heading"+n),e.xp6(2),e.Q6J("ngForOf",null==t?null:t.model)}}function m(o,l){1&o&&(e.TgZ(0,"button",33),e._uU(1,"Submit"),e.qZA())}function c(o,l){1&o&&(e.TgZ(0,"button",34),e._UZ(1,"span",35),e._uU(2,"Submit"),e.qZA())}let h=(()=>{class o{constructor(t,n,s,g,x,P){this.contactService=t,this.fb=n,this.toastr=s,this.Arout=g,this.router=x,this.location=P,this.permissions=[],this.selectedSubcat=0,this.loaders=!1}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.permissionForm=this.fb.group({group_name:new u.NI(""),permissions:new u.Oe([])}),this.contactService.getPermissionGroupById(this.id).subscribe(t=>{this.gName=t.Group,this.permissionForm.patchValue({group_name:t.Group}),this.permissions=[],t.data.forEach(n=>{n.model.forEach(s=>{s.permissions.forEach(g=>{this.permissions.push(g.id)})})})}),this.getPermissionGroup()}selectAllPermissions(t,n,s,g){const x=g.target.checked,P=this.permissionForm.get("permissions");for(let O of t)if(O.selected=x,x)this.isPermissionSelected(O.id)||(P.push(new u.NI(O.id)),this.selectedSubcat++);else if(this.isPermissionSelected(O.id)){const Z=P.controls.findIndex(G=>G.value===O.id);-1!==Z&&(P.removeAt(Z),this.selectedSubcat--)}}isPermissionSelected(t){return this.permissionForm.get("permissions").controls.some(s=>s.value===t)}getPermissionGroup(){this.contactService.getPermission().subscribe(t=>{this.groupList=t?.data,this.groupList.forEach(n=>{let s=[];s=n?.model,s.forEach(g=>{g.permissions.map(x=>{this.permissions.includes(x.id)&&this.permissionForm.get("permissions").push(new u.NI(x.id))})})})})}onCheckChange(t){const n=this.permissionForm.get("permissions");if(t.target.checked)n.push(new u.NI(parseInt(t.target.value))),this.selectedSubcat++;else{let s=0;n.controls.forEach(g=>{if(g.value==t.target.value)return n.removeAt(s),void this.selectedSubcat--;s++})}}submit(){if(this.permissionForm.valid){this.loaders=!0;var t=new FormData;const n=this.permissionForm.get("permissions")?.value.filter(s=>null!==s);t.append("permissions",JSON.stringify(n)),this.contactService.updatePermissionGroup(t,this.id).subscribe(s=>{this.loaders=!1,this.addRes=s,"Group updated successfully"==this.addRes.msg&&(this.toastr.success(this.addRes.msg),this.loaders=!1,this.permissionForm.reset(),this.location.back())},s=>{})}else this.permissionForm.markAllAsTouched()}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(A.y),e.Y36(u.qu),e.Y36(r._W),e.Y36(C.gz),e.Y36(C.F0),e.Y36(p.Ye))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-update-permission-group"]],decls:27,vars:4,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],["type","text","placeholder","User Role Name","formControlName","group_name","readonly","",1,"form-control","w-30"],["id","pills-tab","role","tablist",1,"nav","nav-pills","mb-4","mt-3"],["role","presentation",1,"nav-item"],["id","pills-home-tab","data-bs-toggle","pill","data-bs-target","#pills-home","type","button","role","tab","aria-controls","pills-home","aria-selected","true",1,"nav-link","active"],["id","pills-profile-tab","data-bs-toggle","pill","data-bs-target","#pills-profile","type","button","role","tab","aria-controls","pills-profile","aria-selected","false",1,"nav-link"],["id","pills-tabContent",1,"tab-content"],["id","pills-home","role","tabpanel","aria-labelledby","pills-home-tab",1,"tab-pane","fade","show","active"],["class","heading",4,"ngFor","ngForOf"],["id","pills-profile","role","tabpanel","aria-labelledby","pills-profile-tab",1,"tab-pane","fade"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//settings/permissionGroup",1,"btn","btn-cancel"],[1,"heading"],["id","accordionExample",1,"accordion"],[1,"accordion-item"],[1,"accordion-header"],["type","button","data-bs-toggle","collapse",1,"accordion-button","collapsed"],["data-bs-parent","#accordionExample",1,"accordion-collapse","collapse",3,"id"],[1,"row","w-100","m-0"],["class","col-sm-3 mb-3",4,"ngFor","ngForOf"],[1,"col-sm-3","mb-3"],[1,"f-18","mb-2"],[1,"form-check"],["type","checkbox",1,"form-check-input",3,"id","change"],[1,"form-check-label",3,"for"],[4,"ngFor","ngForOf"],["type","checkbox","formArrayName","permissions",1,"form-check-input",3,"id","checked","value","change"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3,"User Role"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your User"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"form",4),e.NdJ("ngSubmit",function(){return n.submit()}),e._UZ(9,"input",5),e.TgZ(10,"ul",6)(11,"li",7)(12,"button",8),e._uU(13,"User Role Details"),e.qZA()(),e.TgZ(14,"li",7)(15,"button",9),e._uU(16,"Report Details"),e.qZA()()(),e.TgZ(17,"div",10)(18,"div",11)(19,"div"),e.YNc(20,d,10,10,"div",12),e.qZA()(),e._UZ(21,"div",13),e.TgZ(22,"div",14),e.YNc(23,m,2,0,"button",15),e.YNc(24,c,3,0,"button",16),e.TgZ(25,"a",17),e._uU(26,"Cancel"),e.qZA()()()()()()),2&t&&(e.xp6(8),e.Q6J("formGroup",n.permissionForm),e.xp6(12),e.Q6J("ngForOf",n.groupList),e.xp6(3),e.Q6J("ngIf",!n.loaders),e.xp6(1),e.Q6J("ngIf",n.loaders))},dependencies:[p.sg,p.O5,C.yS,u._Y,u.Fj,u.JJ,u.JL,u.sg,u.u,u.CE,p.rS],styles:[".w-30[_ngcontent-%COMP%]{width:20%}.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{background:transparent;color:#f63;font-weight:500;border-bottom:2px solid #ff6633;border-radius:0;font-size:16px}.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:16px;color:#f63}.orangeb-btn[_ngcontent-%COMP%]{padding:5px 10px;border:2px solid #ff6633;background:transparent;color:#f63;border-radius:5px;font-weight:500}.orangeb-btn[_ngcontent-%COMP%]:hover{background-color:#f63;color:#fff;transition:.3s}.accordion-item[_ngcontent-%COMP%]{border:1px solid #EEEEEE}.accordion-button[_ngcontent-%COMP%]{font-size:17px;font-weight:500;padding:15px 20px}.accordion-button[_ngcontent-%COMP%]:not(.collapsed){background-color:#f9d9cc;color:#f63}.accordion-button.collapsed[_ngcontent-%COMP%]:after{width:30px;background-repeat:no-repeat;height:30px;background-size:auto}.accordion-button[_ngcontent-%COMP%]:not(.collapsed):after{transform:rotate(-180deg);width:30px;background-repeat:no-repeat;height:30px;background-size:auto}.accordion-body[_ngcontent-%COMP%]{color:#201e1f;font-size:20px}.accordion[_ngcontent-%COMP%]{margin-bottom:30px}.text-p[_ngcontent-%COMP%]{color:#483d53;font-size:15px;font-weight:400}.form-control[_ngcontent-%COMP%]:focus{border-color:#faddd1;outline:0;box-shadow:0 0 0 .25rem #ff8e5f63}.btn-close[_ngcontent-%COMP%]:focus{border-color:#faddd1;outline:0;box-shadow:0 0 0 .25rem #ff8e5f63}.form-check-input[_ngcontent-%COMP%]:focus{border-color:#faddd1;box-shadow:0 0 0 .25rem #ff8e5f63}.form-check-input[_ngcontent-%COMP%]:checked{background-color:#f63;border-color:#f63}.accordion-button[_ngcontent-%COMP%]:focus{border-color:#faddd1;box-shadow:0 0 0 .25rem #ff8e5f63}.accordion-collapse[_ngcontent-%COMP%]{padding:15px}.f-18[_ngcontent-%COMP%]{font-size:18px;font-weight:500}@media (max-width: 765px){.purple-text[_ngcontent-%COMP%]{font-size:15px}.accordion-button[_ngcontent-%COMP%]{padding:10px 15px}.text-p[_ngcontent-%COMP%]{font-size:11px}.heading[_ngcontent-%COMP%]{width:100%}.accordion-button[_ngcontent-%COMP%], .accordion-body[_ngcontent-%COMP%]{font-size:12px}.accordion-button[_ngcontent-%COMP%]:not(.collapsed):after{width:20px;height:20px}.accordion-button.collapsed[_ngcontent-%COMP%]:after{width:20px;height:20px}}"]}),o})();var _=f(30597);const b=JSON.parse(localStorage.getItem("auth"));let v;b&&b.map(l=>{"auth"===l.content_type.app_label&&"group"===l.content_type.model&&"change_group"==l.codename&&(v=l.codename)});const M=[{path:"",component:h,canActivate:[_.l],data:{allowedRoles:["change_group"]}}];let y=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[C.Bz.forChild(M),C.Bz]}),o})();var w=f(8468);let U=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[p.ez,y,w.I]}),o})()},65415:(k,T,f)=>{f.d(T,{G:()=>u,T:()=>A});var p=f(94650),u=function(){function r(a,i,d){this.el=a,this.vcr=i,this.renderer=d,this.dtOptions={}}return r.prototype.ngOnInit=function(){var a=this;this.dtTrigger?this.dtTrigger.subscribe(function(i){a.displayTable(i)}):this.displayTable(null)},r.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},r.prototype.displayTable=function(a){var i=this;a&&(this.dtOptions=a),this.dtInstance=new Promise(function(d,m){Promise.resolve(i.dtOptions).then(function(c){0===Object.keys(c).length&&0===$("tbody tr",i.el.nativeElement).length?m("Both the table and dtOptions cannot be empty"):setTimeout(function(){var _={rowCallback:function(b,v,M){if(c.columns){var y=c.columns;i.applyNgPipeTransform(b,y),i.applyNgRefTemplate(b,y,v)}c.rowCallback&&c.rowCallback(b,v,M)}};_=Object.assign({},c,_),i.dt=$(i.el.nativeElement).DataTable(_),d(i.dt)})})})},r.prototype.applyNgPipeTransform=function(a,i){i.filter(function(m){return m.ngPipeInstance&&!m.ngTemplateRef}).forEach(function(m){var c=m.ngPipeInstance,h=m.ngPipeArgs||[],_=i.findIndex(function(y){return y.data===m.data}),b=a.childNodes.item(_),v=$(b).text(),M=c.transform.apply(c,function(r,a,i){if(i||2===arguments.length)for(var c,d=0,m=a.length;d<m;d++)(c||!(d in a))&&(c||(c=Array.prototype.slice.call(a,0,d)),c[d]=a[d]);return r.concat(c||Array.prototype.slice.call(a))}([v],h,!1));$(b).text(M)})},r.prototype.applyNgRefTemplate=function(a,i,d){var m=this;i.filter(function(h){return h.ngTemplateRef&&!h.ngPipeInstance}).forEach(function(h){var _=h.ngTemplateRef,b=_.ref,v=_.context,M=i.findIndex(function(o){return o.data===h.data}),y=a.childNodes.item(M);$(y).html("");var w=Object.assign({},v,v?.userData,{adtData:d}),U=m.vcr.createEmbeddedView(b,w);m.renderer.appendChild(y,U.rootNodes[0])})},r.\u0275fac=function(i){return new(i||r)(p.Y36(p.SBq),p.Y36(p.s_b),p.Y36(p.Qsj))},r.\u0275dir=p.lG2({type:r,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),r}(),e=f(36895),A=function(){function r(){}return r.forRoot=function(){return{ngModule:r}},r.\u0275fac=function(i){return new(i||r)},r.\u0275mod=p.oAB({type:r}),r.\u0275inj=p.cJS({imports:[e.ez]}),r}()}}]);