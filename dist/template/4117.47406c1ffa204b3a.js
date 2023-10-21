"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4117],{13979:(w,x,c)=>{c.r(x),c.d(x,{DetailsPermissionGroupModule:()=>T});var u=c(36895),_=c(88996),e=c(94650),P=c(25062),M=c(24006),i=c(97185),a=c(97392);function o(t,r){1&t&&(e.TgZ(0,"mat-icon",32),e._uU(1,"cancel"),e.qZA())}function l(t,r){1&t&&(e.TgZ(0,"mat-icon",33),e._uU(1,"check"),e.qZA())}function p(t,r){if(1&t&&(e.TgZ(0,"div")(1,"div",28),e.YNc(2,o,2,0,"mat-icon",29),e.YNc(3,l,2,0,"mat-icon",30),e.TgZ(4,"label",31),e._uU(5),e.qZA()()()),2&t){const n=r.$implicit,d=e.oxw(3);e.xp6(2),e.Q6J("ngIf",!d.permissions.includes(n.id)),e.xp6(1),e.Q6J("ngIf",d.permissions.includes(n.id)),e.xp6(1),e.Q6J("for","permission_"+(null==n?null:n.id)),e.xp6(1),e.Oqu(null==n?null:n.name)}}function s(t,r){if(1&t&&(e.TgZ(0,"div",25)(1,"h4",26),e._uU(2),e.qZA(),e.YNc(3,p,6,4,"div",27),e.qZA()),2&t){const n=r.$implicit;e.xp6(2),e.Oqu(null==n?null:n.model_name),e.xp6(1),e.Q6J("ngForOf",null==n?null:n.permissions)}}function m(t,r){if(1&t&&(e.TgZ(0,"div",17)(1,"div",18)(2,"div",19)(3,"h2",20)(4,"button",21),e._uU(5),e.ALo(6,"titlecase"),e.qZA()(),e.TgZ(7,"div",22)(8,"div",23),e.YNc(9,s,4,2,"div",24),e.qZA()()()()()),2&t){const n=r.$implicit,d=r.index;e.xp6(4),e.uIk("data-bs-target","#collapse"+d)("aria-expanded",!1)("aria-controls","collapse"+d)("id","heading"+d),e.xp6(1),e.Oqu(e.lcZ(6,8,n.content_type.app_label)),e.xp6(2),e.Q6J("id","collapse"+d),e.uIk("aria-labelledby","heading"+d),e.xp6(2),e.Q6J("ngForOf",null==n?null:n.model)}}const v=[{path:"",component:(()=>{class t{constructor(n,d,y,C){this.contactService=n,this.fb=d,this.toastr=y,this.Arout=C,this.data=[{content_type:{id:3,app_label:"Places"},model:[{id:13,selected_group:"city",model_name:"city",permissions:[{id:109,name:"Can add City",codename:"add_city"},{id:110,name:"Can change City",codename:"change_city"},{id:111,name:"Can delete City",codename:"delete_city"},{id:112,name:"Can view City",codename:"view_city"}]},{id:13,selected_group:"city",model_name:"country",permissions:[{id:113,name:"Can add Country",codename:"add_country"},{id:114,name:"Can change Country",codename:"change_country"},{id:115,name:"Can delete Country",codename:"delete_country"},{id:116,name:"Can view Country",codename:"view_country"}]}]},{content_type:{id:3,app_label:"Contacts"},model:[{id:13,selected_group:"country",model_name:"amount",permissions:[{id:113,name:"Can add amount",codename:"add_amount"},{id:114,name:"Can change amount",codename:"change_amount"},{id:115,name:"Can delete amount",codename:"delete_amount"},{id:116,name:"Can view amount",codename:"view_amount"}]}]},{content_type:{id:3,app_label:"Product"},model:[{id:13,selected_group:"city",model_name:"color",permissions:[{id:113,name:"Can add color",codename:"add_color"},{id:114,name:"Can change color",codename:"change_color"}]}]}],this.permissions=[],this.isCheck=!1,this.notCheck=!0}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.getPermissionGroup(),this.contactService.getPermissionGroupById(this.id).subscribe(n=>{this.modelName=function f(t){if(!t)return"";const r=t.toLowerCase().split(" ");for(let n=0;n<r.length;n++)r[n]=r[n][0].toUpperCase()+r[n].substring(1);return r.join(" ")}(n.Group),this.permissions=[],n.data.forEach(d=>{d.model.forEach(y=>{y.permissions.forEach(C=>{this.permissions.push(C.id)})})})})}getPermissionGroup(){this.contactService.getPermission().subscribe(n=>{this.groupList=n?.data,this.groupList.forEach(d=>{let y=[];y=d?.model,y.forEach(C=>{C.permissions.map(Z=>{this.permissions.includes(Z.id)&&(this.isCheck=!0,this.notCheck=!1)})})})})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(P.y),e.Y36(M.qu),e.Y36(i._W),e.Y36(_.gz))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-details-permission-group"]],decls:28,vars:4,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[1,"d-flex","justify-content-between","align-items-start"],[3,"routerLink"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-pencil-square"],["d","M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"],["fill-rule","evenodd","d","M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"],["id","pills-tab","role","tablist",1,"nav","nav-pills","mb-4","mt-3"],["role","presentation",1,"nav-item"],["id","pills-home-tab","data-bs-toggle","pill","data-bs-target","#pills-home","type","button","role","tab","aria-controls","pills-home","aria-selected","true",1,"nav-link","active"],["id","pills-profile-tab","data-bs-toggle","pill","data-bs-target","#pills-profile","type","button","role","tab","aria-controls","pills-profile","aria-selected","false",1,"nav-link"],["id","pills-tabContent",1,"tab-content"],["id","pills-home","role","tabpanel","aria-labelledby","pills-home-tab",1,"tab-pane","fade","show","active"],["class","heading",4,"ngFor","ngForOf"],["id","pills-profile","role","tabpanel","aria-labelledby","pills-profile-tab",1,"tab-pane","fade"],[1,"heading"],["id","accordionExample",1,"accordion"],[1,"accordion-item"],[1,"accordion-header"],["type","button","data-bs-toggle","collapse",1,"accordion-button","collapsed"],["data-bs-parent","#accordionExample",1,"accordion-collapse","collapse",3,"id"],[1,"row","w-100","m-0"],["class","col-sm-3 mb-3",4,"ngFor","ngForOf"],[1,"col-sm-3","mb-3"],[1,"f-18","mb-2"],[4,"ngFor","ngForOf"],[1,"form-check"],["style","color: red;padding-top: 5px; font-size: 20px;",4,"ngIf"],["style","color: green;padding-top: 5px; font-size: 20px;",4,"ngIf"],[1,"form-check-label",3,"for"],[2,"color","red","padding-top","5px","font-size","20px"],[2,"color","green","padding-top","5px","font-size","20px"]],template:function(n,d){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4"),e._uU(3),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"Manage your User"),e.qZA()()(),e.TgZ(6,"div",2)(7,"div",3)(8,"div",4)(9,"strong"),e._uU(10),e.qZA(),e.TgZ(11,"a",5),e.O4$(),e.TgZ(12,"svg",6),e._UZ(13,"path",7)(14,"path",8),e.qZA(),e._uU(15," Edit Permission Group "),e.qZA()(),e.kcU(),e.TgZ(16,"ul",9)(17,"li",10)(18,"button",11),e._uU(19,"User Role Details"),e.qZA()(),e.TgZ(20,"li",10)(21,"button",12),e._uU(22,"Report Details"),e.qZA()()(),e.TgZ(23,"div",13)(24,"div",14)(25,"div"),e.YNc(26,m,10,10,"div",15),e.qZA()(),e._UZ(27,"div",16),e.qZA()()()),2&n&&(e.xp6(3),e.Oqu(d.modelName),e.xp6(7),e.hij("User Role Name : ",d.modelName,""),e.xp6(1),e.MGl("routerLink","//settings/updatePermissionGroup/",d.id,""),e.xp6(15),e.Q6J("ngForOf",d.groupList))},dependencies:[u.sg,u.O5,_.yS,a.Hw,u.rS],styles:[".w-30[_ngcontent-%COMP%]{width:20%}.nav-pills[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{background:transparent;color:#f63;font-weight:500;border-bottom:2px solid #ff6633;border-radius:0;font-size:16px}.nav-pills[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:16px;color:#f63}.orangeb-btn[_ngcontent-%COMP%]{padding:5px 10px;border:2px solid #ff6633;background:transparent;color:#f63;border-radius:5px;font-weight:500}.orangeb-btn[_ngcontent-%COMP%]:hover{background-color:#f63;color:#fff;transition:.3s}.accordion-item[_ngcontent-%COMP%]{border:1px solid #EEEEEE}.accordion-button[_ngcontent-%COMP%]{font-size:17px;font-weight:500;padding:15px 20px}.accordion-button[_ngcontent-%COMP%]:not(.collapsed){background-color:#f9d9cc;color:#f63}.accordion-button.collapsed[_ngcontent-%COMP%]:after{width:30px;background-repeat:no-repeat;height:30px;background-size:auto}.accordion-button[_ngcontent-%COMP%]:not(.collapsed):after{transform:rotate(-180deg);width:30px;background-repeat:no-repeat;height:30px;background-size:auto}.accordion-body[_ngcontent-%COMP%]{color:#201e1f;font-size:20px}.accordion[_ngcontent-%COMP%]{margin-bottom:30px}.text-p[_ngcontent-%COMP%]{color:#483d53;font-size:15px;font-weight:400}.form-control[_ngcontent-%COMP%]:focus{border-color:#faddd1;outline:0;box-shadow:0 0 0 .25rem #ff8e5f63}.btn-close[_ngcontent-%COMP%]:focus{border-color:#faddd1;outline:0;box-shadow:0 0 0 .25rem #ff8e5f63}.form-check-input[_ngcontent-%COMP%]:focus{border-color:#faddd1;box-shadow:0 0 0 .25rem #ff8e5f63}.form-check-input[_ngcontent-%COMP%]:checked{background-color:#f63;border-color:#f63}.accordion-button[_ngcontent-%COMP%]:focus{border-color:#faddd1;box-shadow:0 0 0 .25rem #ff8e5f63}.accordion-collapse[_ngcontent-%COMP%]{padding:15px}.f-18[_ngcontent-%COMP%]{font-size:18px;font-weight:500}@media (max-width: 765px){.purple-text[_ngcontent-%COMP%]{font-size:15px}.accordion-button[_ngcontent-%COMP%]{padding:10px 15px}.text-p[_ngcontent-%COMP%]{font-size:11px}.heading[_ngcontent-%COMP%]{width:100%}.accordion-button[_ngcontent-%COMP%], .accordion-body[_ngcontent-%COMP%]{font-size:12px}.accordion-button[_ngcontent-%COMP%]:not(.collapsed):after{width:20px;height:20px}.accordion-button.collapsed[_ngcontent-%COMP%]:after{width:20px;height:20px}}"]}),t})(),canActivate:[c(30597).l],data:{allowedRoles:["view_group"]}}];let b=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[_.Bz.forChild(v),_.Bz]}),t})();var O=c(8468);let T=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,b,O.I,a.Ps]}),t})()},65415:(w,x,c)=>{c.d(x,{G:()=>e,T:()=>M});var u=c(94650),e=function(){function i(a,o,l){this.el=a,this.vcr=o,this.renderer=l,this.dtOptions={}}return i.prototype.ngOnInit=function(){var a=this;this.dtTrigger?this.dtTrigger.subscribe(function(o){a.displayTable(o)}):this.displayTable(null)},i.prototype.ngOnDestroy=function(){this.dtTrigger&&this.dtTrigger.unsubscribe(),this.dt&&this.dt.destroy(!0)},i.prototype.displayTable=function(a){var o=this;a&&(this.dtOptions=a),this.dtInstance=new Promise(function(l,p){Promise.resolve(o.dtOptions).then(function(s){0===Object.keys(s).length&&0===$("tbody tr",o.el.nativeElement).length?p("Both the table and dtOptions cannot be empty"):setTimeout(function(){var f={rowCallback:function(h,g,v){if(s.columns){var b=s.columns;o.applyNgPipeTransform(h,b),o.applyNgRefTemplate(h,b,g)}s.rowCallback&&s.rowCallback(h,g,v)}};f=Object.assign({},s,f),o.dt=$(o.el.nativeElement).DataTable(f),l(o.dt)})})})},i.prototype.applyNgPipeTransform=function(a,o){o.filter(function(p){return p.ngPipeInstance&&!p.ngTemplateRef}).forEach(function(p){var s=p.ngPipeInstance,m=p.ngPipeArgs||[],f=o.findIndex(function(b){return b.data===p.data}),h=a.childNodes.item(f),g=$(h).text(),v=s.transform.apply(s,function(i,a,o){if(o||2===arguments.length)for(var s,l=0,p=a.length;l<p;l++)(s||!(l in a))&&(s||(s=Array.prototype.slice.call(a,0,l)),s[l]=a[l]);return i.concat(s||Array.prototype.slice.call(a))}([g],m,!1));$(h).text(v)})},i.prototype.applyNgRefTemplate=function(a,o,l){var p=this;o.filter(function(m){return m.ngTemplateRef&&!m.ngPipeInstance}).forEach(function(m){var f=m.ngTemplateRef,h=f.ref,g=f.context,v=o.findIndex(function(t){return t.data===m.data}),b=a.childNodes.item(v);$(b).html("");var O=Object.assign({},g,g?.userData,{adtData:l}),T=p.vcr.createEmbeddedView(h,O);p.renderer.appendChild(b,T.rootNodes[0])})},i.\u0275fac=function(o){return new(o||i)(u.Y36(u.SBq),u.Y36(u.s_b),u.Y36(u.Qsj))},i.\u0275dir=u.lG2({type:i,selectors:[["","datatable",""]],inputs:{dtOptions:"dtOptions",dtTrigger:"dtTrigger"}}),i}(),P=c(36895),M=function(){function i(){}return i.forRoot=function(){return{ngModule:i}},i.\u0275fac=function(o){return new(o||i)},i.\u0275mod=u.oAB({type:i}),i.\u0275inj=u.cJS({imports:[P.ez]}),i}()}}]);