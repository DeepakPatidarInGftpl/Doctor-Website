"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9656],{69656:(A,M,r)=>{r.r(M),r.d(M,{UpdateMaterialConsumptionModule:()=>j});var p=r(36895),d=r(89299),a=r(24006),U=r(68675),y=r(54004),t=r(94650),g=r(42236),T=r(71071),_=r(97185),C=r(47957),v=r(3238),c=r(59549),h=r(44144);function b(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"mat-option",37),t.NdJ("onSelectionChange",function(){t.CHM(o);const l=t.oxw().$implicit,s=t.oxw();return t.KtG(s.oncheck(l.id))}),t._uU(1),t.qZA()}if(2&e){const o=t.oxw().$implicit;t.Q6J("value",o.username+" "+(null==o?null:o.username)),t.xp6(1),t.Oqu(null==o?null:o.username)}}function x(e,i){if(1&e&&(t.ynx(0),t.YNc(1,b,2,2,"mat-option",36),t.BQk()),2&e){const o=i.$implicit;t.xp6(1),t.Q6J("ngIf",1==o.is_active)}}function Z(e,i){1&e&&(t.TgZ(0,"mat-option",38)(1,"a",39),t._uU(2,"+ Add Supplier"),t.qZA()()),2&e&&t.Q6J("value","No data found")}function P(e,i){1&e&&(t.TgZ(0,"mat-option",40),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function F(e,i){if(1&e&&(t.ynx(0),t.YNc(1,Z,3,1,"mat-option",27),t.YNc(2,P,2,0,"mat-option",28),t.BQk()),2&e){const o=i.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",0===o.length),t.xp6(1),t.Q6J("ngIf",(null==n.supplierControl.value?null:n.supplierControl.value.length)<3)}}function O(e,i){1&e&&(t.TgZ(0,"span",41),t._uU(1,"Select User "),t.qZA())}function w(e,i){1&e&&(t.TgZ(0,"span",41),t._uU(1,"Select Consumption Date "),t.qZA())}function S(e,i){1&e&&(t.TgZ(0,"span",41),t._uU(1,"Enter Prefix"),t.qZA())}function q(e,i){1&e&&(t.TgZ(0,"span",41),t._uU(1,"Enter Consumption Series"),t.qZA())}function N(e,i){1&e&&(t.TgZ(0,"span",41),t._uU(1,"Enter Consumption Type"),t.qZA())}function I(e,i){1&e&&(t.TgZ(0,"span",41),t._uU(1,"Enter Remarks"),t.qZA())}function J(e,i){if(1&e){const o=t.EpF();t.TgZ(0,"mat-option",37),t.NdJ("onSelectionChange",function(){t.CHM(o);const l=t.oxw().$implicit,s=t.oxw(2);return t.KtG(s.oncheckProduct(l))}),t._uU(1),t.qZA()}if(2&e){const o=t.oxw().$implicit;t.Q6J("value",(null==o?null:o.product_title)+" "+(null==o?null:o.variant_name)),t.xp6(1),t.hij(" ",(null==o?null:o.product_title)+" "+(null==o?null:o.variant_name),"")}}function Q(e,i){if(1&e&&(t.ynx(0),t.YNc(1,J,2,2,"mat-option",36),t.BQk()),2&e){const o=i.$implicit;t.xp6(1),t.Q6J("ngIf",1==o.is_active)}}function E(e,i){if(1&e&&(t.ynx(0),t.YNc(1,Q,2,1,"ng-container",11),t.BQk()),2&e){const o=t.oxw();t.xp6(1),t.Q6J("ngForOf",o.variantList)}}function Y(e,i){1&e&&(t.TgZ(0,"mat-option",38)(1,"a",42),t._uU(2,"+add Product"),t.qZA()()),2&e&&t.Q6J("value","No data found")}function L(e,i){1&e&&(t.TgZ(0,"mat-option",40),t._uU(1," Please Enter 3 or more characters"),t.qZA())}function k(e,i){1&e&&(t.TgZ(0,"span",41),t._uU(1,"Enter qty"),t.qZA())}function D(e,i){1&e&&(t.TgZ(0,"span",41),t._uU(1,"Enter Price"),t.qZA())}function R(e,i){1&e&&(t.TgZ(0,"span",41),t._uU(1,"Enter Total Action"),t.qZA())}function V(e,i){1&e&&(t.TgZ(0,"button",43),t._uU(1,"Submit"),t.qZA())}function K(e,i){1&e&&(t.TgZ(0,"button",44),t._UZ(1,"span",45),t._uU(2,"\xa0 Submit"),t.qZA())}const m=function(e){return{"is-invalid":e}},z=[{path:"",component:(()=>{class e{constructor(o,n,l,s,f,u){this.fb=o,this.inventoryService=n,this.transactionService=l,this.Arout=s,this.toastr=f,this.router=u,this.supplierControl=new a.NI,this.amounts=0,this.taxs=0,this.totals=0,this.userList=[],this.dateError=null,this.loaders=!1,this.variantList=[],this.barcodeControl=new a.NI("")}get f(){return this.materialConsumptionForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id");const o=new Date,f=`${o.getFullYear()}-${(o.getMonth()+1).toString().padStart(2,"0")}-${o.getDate().toString().padStart(2,"0")}`;this.materialConsumptionForm=this.fb.group({user:new a.NI("",[a.kI.required]),consumption_date:new a.NI(f,[a.kI.required]),prefix:new a.NI(""),consumption_no:new a.NI(""),consumption_type:new a.NI("",[a.kI.required]),remarks:new a.NI(""),barcode:new a.NI(""),qty:new a.NI(1),price:new a.NI(0),total_action:new a.NI(0)}),this.transactionService.getMaterialConsuptionById(this.id).subscribe(u=>{this.materialConsumptionForm.patchValue(u),this.materialConsumptionForm.get("user")?.patchValue(u.user?.id),this.materialConsumptionForm.get("barcode")?.patchValue(u.barcode?.id),this.supplierControl.setValue(u.user.username),this.barcodeControl.setValue(u.barcode.product_title+"-"+u.barcode.variant_name)}),this.getUser(),this.getprefix(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,U.O)(""),(0,y.U)(u=>this._filter(u,!0)))}getprefix(){this.transactionService.getMaterialConsuptionPrefix().subscribe(o=>{console.log(o),1==o.success?this.prefixNo=o.data:this.toastr.error(o.msg)},o=>{this.toastr.error(o.error.msg)})}calculateTax(){this.totals=this.taxs?(this.amounts+(this.amounts-this.amounts*(100/(100+this.taxs)))).toFixed(2):this.amounts.toFixed(2)}getUser(){this.transactionService.getUser().subscribe(o=>{console.log(o),this.userList=o?.data})}_filter(o,n){const l="string"==typeof o?o.toLowerCase():o.toString().toLowerCase(),s=this.userList.filter(n?f=>f.username.toLowerCase().includes(l):f=>!f.username.toLowerCase().includes(l));return!n&&0===s.length&&s.push({username:"No data found"}),s}oncheck(o){console.log(o),this.materialConsumptionForm.patchValue({user:o})}get supplier(){return this.materialConsumptionForm.get("user")}submit(){if(this.materialConsumptionForm.valid){this.loaders=!0;const o=new FormData;o.append("user",this.materialConsumptionForm.get("user")?.value),o.append("consumption_date",this.materialConsumptionForm.get("consumption_date")?.value),o.append("prefix",this.materialConsumptionForm.get("prefix")?.value),o.append("consumption_no",this.materialConsumptionForm.get("consumption_no")?.value),o.append("consumption_type",this.materialConsumptionForm.get("consumption_type")?.value),o.append("remarks",this.materialConsumptionForm.get("remarks")?.value),o.append("barcode",this.materialConsumptionForm.get("barcode")?.value),o.append("qty",this.materialConsumptionForm.get("qty")?.value),o.append("price",this.materialConsumptionForm.get("price")?.value),o.append("total_action",this.materialConsumptionForm.get("total_action")?.value),this.transactionService.updateMaterialConsuption(o,this.id).subscribe(n=>{this.loaders=!1,this.addRes=n,this.addRes.success?(this.toastr.success(this.addRes.msg),this.materialConsumptionForm.reset(),this.router.navigate(["//transaction/materialConsuption"])):this.loaders=!1},n=>{this.loaders=!1})}else this.materialConsumptionForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get user(){return this.materialConsumptionForm.get("user")}get consumption_date(){return this.materialConsumptionForm.get("consumption_date")}get prefix(){return this.materialConsumptionForm.get("prefix")}get consumption_no(){return this.materialConsumptionForm.get("consumption_no")}get consumption_type(){return this.materialConsumptionForm.get("consumption_type")}get remarks(){return this.materialConsumptionForm.get("remarks")}get barcode(){return this.materialConsumptionForm.get("barcode")}get qty(){return this.materialConsumptionForm.get("qty")}get price(){return this.materialConsumptionForm.get("price")}get total_action(){return this.materialConsumptionForm.get("total_action")}getVariant(o){this.inventoryService.filterVariant("","",o).subscribe(n=>{console.log(n),this.variantList=n,console.log(this.variantList)})}oncheckProduct(o){console.log(o),this.materialConsumptionForm.get("barcode")?.patchValue(o?.id)}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(a.qu),t.Y36(g.q),t.Y36(T.p),t.Y36(d.gz),t.Y36(_._W),t.Y36(d.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-update-material-consumption"]],decls:97,vars:52,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-md-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Company","aria-label","User","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12"],["type","date","formControlName","consumption_date","id","consumption_date",3,"ngClass"],["type","text","formControlName","prefix","placeholder","Enter Prefix","readonly","","id","prefix",3,"ngClass"],["type","text","formControlName","consumption_no","placeholder","Enter Consumption No.","id","consumption_no",3,"ngClass"],["formControlName","consumption_type","id","consumption_type",3,"ngClass"],["value","","selected","","disabled",""],["value","Sample"],["value","Production"],["value","Scrap/Wastage"],["type","text","formControlName","remarks","placeholder","Enter remarks","id","remarks",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12"],["type","text","placeholder","Search Product","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],["type","number","formControlName","qty","placeholder","Enter qty","id","qty",3,"ngClass"],["type","number","formControlName","price","placeholder","Enter price","id","price",3,"ngClass"],["type","number","formControlName","total_action","placeholder","Enter total_action","id","total_action",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/materialConsuption",1,"btn","btn-cancel","text-white"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value"],["routerLink","//contacts/addSupplier",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],["routerLink","//product/addproduct",2,"color","#FF9F43"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(o,n){if(1&o&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Update Material Consumption"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Material Consumption "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"User*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,x,2,1,"ng-container",11),t.ALo(19,"async"),t.YNc(20,F,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,O,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",14)(24,"div",7)(25,"label"),t._uU(26,"Debit Note Date*"),t.qZA(),t._UZ(27,"input",15),t.YNc(28,w,2,0,"span",13),t.qZA()(),t.TgZ(29,"div",14)(30,"div",7)(31,"label"),t._uU(32,"Prefix"),t.qZA(),t._UZ(33,"input",16),t.YNc(34,S,2,0,"span",13),t.qZA()(),t.TgZ(35,"div",14)(36,"div",7)(37,"label"),t._uU(38,"Consumption Series"),t.qZA(),t._UZ(39,"input",17),t.YNc(40,q,2,0,"span",13),t.qZA()(),t.TgZ(41,"div",14)(42,"div",7)(43,"label"),t._uU(44,"Consumption Type"),t.qZA(),t.TgZ(45,"select",18)(46,"option",19),t._uU(47,"Select Consumption Type"),t.qZA(),t.TgZ(48,"option",20),t._uU(49,"Sample"),t.qZA(),t.TgZ(50,"option",21),t._uU(51,"Production"),t.qZA(),t.TgZ(52,"option",22),t._uU(53,"Scrap/Wastage"),t.qZA()(),t.YNc(54,N,2,0,"span",13),t.qZA()(),t.TgZ(55,"div",14)(56,"div",7)(57,"label"),t._uU(58,"Remarks"),t.qZA(),t._UZ(59,"input",23),t.YNc(60,I,2,0,"span",13),t.qZA()(),t.TgZ(61,"div",2)(62,"div",3)(63,"div",5)(64,"div",24)(65,"div",7)(66,"label"),t._uU(67,"Select Product"),t.qZA(),t.TgZ(68,"input",25),t.NdJ("input",function(s){return n.getVariant(s.target.value)}),t.qZA(),t.TgZ(69,"mat-autocomplete",null,26),t.YNc(71,E,2,1,"ng-container",12),t.YNc(72,Y,3,1,"mat-option",27),t.YNc(73,L,2,0,"mat-option",28),t.qZA()()(),t.TgZ(74,"div",24)(75,"div",7)(76,"label"),t._uU(77,"QTY"),t.qZA(),t._UZ(78,"input",29),t.YNc(79,k,2,0,"span",13),t.qZA()(),t.TgZ(80,"div",24)(81,"div",7)(82,"label"),t._uU(83,"Price"),t.qZA(),t._UZ(84,"input",30),t.YNc(85,D,2,0,"span",13),t.qZA()(),t.TgZ(86,"div",24)(87,"div",7)(88,"label"),t._uU(89,"Total Action"),t.qZA(),t._UZ(90,"input",31),t.YNc(91,R,2,0,"span",13),t.qZA()()()()(),t.TgZ(92,"div",32),t.YNc(93,V,2,0,"button",33),t.YNc(94,K,3,0,"button",34),t.TgZ(95,"a",35),t._uU(96,"Cancel"),t.qZA()()()()()()),2&o){const l=t.MAs(17),s=t.MAs(70);t.xp6(8),t.Q6J("formGroup",n.materialConsumptionForm),t.xp6(7),t.Q6J("formControl",n.supplierControl)("matAutocomplete",l)("ngClass",t.VKq(34,m,n.f.user.touched&&n.f.user.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,30,n.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,32,n.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",n.supplier&&n.supplier.invalid&&n.supplier.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(36,m,n.f.consumption_date.touched&&n.f.consumption_date.invalid)),t.xp6(1),t.Q6J("ngIf",n.consumption_date&&n.consumption_date.invalid&&n.consumption_date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(38,m,n.f.prefix.touched&&n.f.prefix.invalid)),t.xp6(1),t.Q6J("ngIf",n.prefix&&n.prefix.invalid&&n.prefix.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(40,m,n.f.consumption_no.touched&&n.f.consumption_no.invalid)),t.xp6(1),t.Q6J("ngIf",n.consumption_no&&n.consumption_no.invalid&&n.consumption_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(42,m,n.f.consumption_type.touched&&n.f.consumption_type.invalid)),t.xp6(9),t.Q6J("ngIf",n.consumption_type&&n.consumption_type.invalid&&n.consumption_type.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(44,m,n.f.remarks.touched&&n.f.remarks.invalid)),t.xp6(1),t.Q6J("ngIf",n.remarks&&n.remarks.invalid&&n.remarks.touched),t.xp6(8),t.Q6J("formControl",n.barcodeControl)("matAutocomplete",s),t.xp6(3),t.Q6J("ngIf",(null==n.barcodeControl.value?null:n.barcodeControl.value.length)>=1&&(null==n.barcodeControl.value?null:n.barcodeControl.value.length)>0),t.xp6(1),t.Q6J("ngIf",0===(null==n.variantList?null:n.variantList.length)),t.xp6(1),t.Q6J("ngIf",(null==n.barcodeControl.value?null:n.barcodeControl.value.length)<3),t.xp6(5),t.Q6J("ngClass",t.VKq(46,m,n.f.qty.touched&&n.f.qty.invalid)),t.xp6(1),t.Q6J("ngIf",n.qty&&n.qty.invalid&&n.qty.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(48,m,n.f.price.touched&&n.f.price.invalid)),t.xp6(1),t.Q6J("ngIf",n.price&&n.price.invalid&&n.price.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(50,m,n.f.total_action.touched&&n.f.total_action.invalid)),t.xp6(1),t.Q6J("ngIf",n.total_action&&n.total_action.invalid&&n.total_action.touched),t.xp6(2),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders)}},dependencies:[p.mk,p.sg,p.O5,d.yS,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.JL,a.oH,a.sg,a.u,C.XC,C.ZL,v.ey,c.KE,h.Nt,p.Ov],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),e})(),canActivate:[r(30597).l],data:{allowedRoles:["change_materialconsumption"]}}];let W=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[d.Bz.forChild(z),d.Bz]}),e})();var $=r(8468);let j=(()=>{class e{}return e.\u0275fac=function(o){return new(o||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[p.ez,W,$.I,C.Bb,c.lN,h.c]}),e})()},30597:(A,M,r)=>{r.d(M,{l:()=>t});var p=r(94650),d=r(89299),a=r(97185),U=r(42917),y=r(80927);let t=(()=>{class g{constructor(_,C,v,c,h){this.router=_,this.Arout=C,this.toastr=v,this.profileService=c,this.coreService=h}canActivate(_,C){const v=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(c=>{this.userDetails=c,this.permissions=this.userDetails?.permission}),v){const c=_.data.allowedRoles;console.log(c,"allowedRoles");const h=v.some(b=>c.includes(b.codename));if(console.log(h),this.coreService.getProfile().subscribe(b=>{this.userDetails=b,this.profileService.setUserDetails(this.userDetails);const x=b?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==x.length)&&(this.profileService.setUserPermission(x),window.location.reload())}),h)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return g.\u0275fac=function(_){return new(_||g)(p.LFG(d.F0),p.LFG(d.gz),p.LFG(a._W),p.LFG(U.J),p.LFG(y.p))},g.\u0275prov=p.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()}}]);