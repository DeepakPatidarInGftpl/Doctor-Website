"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[9656],{69656:(A,M,r)=>{r.r(M),r.d(M,{UpdateMaterialConsumptionModule:()=>H});var u=r(36895),m=r(89299),a=r(24006),v=r(68675),b=r(54004),y=r(78372),t=r(94650),T=r(42236),_=r(71071),x=r(97185),d=r(47957),g=r(3238),h=r(59549),C=r(44144);function U(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"mat-option",37),t.NdJ("onSelectionChange",function(){t.CHM(e);const s=t.oxw().$implicit,l=t.oxw();return t.KtG(l.oncheck(s.id))}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("value",e.username+" "+(null==e?null:e.username)),t.xp6(1),t.Oqu(null==e||null==e.detail?null:e.detail.company_name)}}function Z(o,i){if(1&o&&(t.ynx(0),t.YNc(1,U,2,2,"mat-option",36),t.BQk()),2&o){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active&&(null==e||null==e.detail?null:e.detail.company_name))}}function P(o,i){1&o&&(t.TgZ(0,"mat-option",38)(1,"a",39),t._uU(2,"+ Add User"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function F(o,i){1&o&&(t.TgZ(0,"mat-option",40),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function O(o,i){if(1&o&&(t.ynx(0),t.YNc(1,P,3,1,"mat-option",27),t.YNc(2,F,2,0,"mat-option",28),t.BQk()),2&o){const e=i.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==n.supplierControl.value?null:n.supplierControl.value.length)<3)}}function w(o,i){1&o&&(t.TgZ(0,"span",41),t._uU(1,"Select User "),t.qZA())}function S(o,i){1&o&&(t.TgZ(0,"span",41),t._uU(1,"Select Consumption Date "),t.qZA())}function N(o,i){1&o&&(t.TgZ(0,"span",41),t._uU(1,"Enter Prefix"),t.qZA())}function q(o,i){1&o&&(t.TgZ(0,"span",41),t._uU(1,"Enter Consumption Series"),t.qZA())}function I(o,i){1&o&&(t.TgZ(0,"span",41),t._uU(1,"Enter Consumption Type"),t.qZA())}function J(o,i){1&o&&(t.TgZ(0,"span",41),t._uU(1,"Enter Remarks"),t.qZA())}function Q(o,i){if(1&o){const e=t.EpF();t.TgZ(0,"mat-option",37),t.NdJ("onSelectionChange",function(){t.CHM(e);const s=t.oxw().$implicit,l=t.oxw(2);return t.KtG(l.oncheckProduct(s))}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)),t.xp6(1),t.hij(" ",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name),"")}}function E(o,i){if(1&o&&(t.ynx(0),t.YNc(1,Q,2,2,"mat-option",36),t.BQk()),2&o){const e=i.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function L(o,i){if(1&o&&(t.ynx(0),t.YNc(1,E,2,1,"ng-container",11),t.BQk()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.variantList)}}function Y(o,i){1&o&&(t.TgZ(0,"mat-option",38)(1,"a",42),t._uU(2,"+add Product"),t.qZA()()),2&o&&t.Q6J("value","No data found")}function D(o,i){1&o&&(t.TgZ(0,"mat-option",40),t._uU(1," Please Enter 3 or more characters"),t.qZA())}function k(o,i){1&o&&(t.TgZ(0,"span",41),t._uU(1,"Enter qty"),t.qZA())}function R(o,i){1&o&&(t.TgZ(0,"span",41),t._uU(1,"Enter Price"),t.qZA())}function V(o,i){1&o&&(t.TgZ(0,"span",41),t._uU(1,"Enter Total Action"),t.qZA())}function K(o,i){1&o&&(t.TgZ(0,"button",43),t._uU(1,"Submit"),t.qZA())}function B(o,i){1&o&&(t.TgZ(0,"button",44),t._UZ(1,"span",45),t._uU(2,"\xa0 Submit"),t.qZA())}const c=function(o){return{"is-invalid":o}},W=[{path:"",component:(()=>{class o{constructor(e,n,s,l,f,p){this.fb=e,this.inventoryService=n,this.transactionService=s,this.Arout=l,this.toastr=f,this.router=p,this.supplierControl=new a.NI,this.amounts=0,this.taxs=0,this.totals=0,this.userList=[],this.dateError=null,this.loaders=!1,this.variantList=[],this.barcodeControl=new a.NI("")}get f(){return this.materialConsumptionForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id");const e=new Date,f=`${e.getFullYear()}-${(e.getMonth()+1).toString().padStart(2,"0")}-${e.getDate().toString().padStart(2,"0")}`;this.materialConsumptionForm=this.fb.group({user:new a.NI("",[a.kI.required]),consumption_date:new a.NI(f,[a.kI.required]),prefix:new a.NI(""),consumption_no:new a.NI(""),consumption_type:new a.NI("",[a.kI.required]),remarks:new a.NI(""),barcode:new a.NI(""),qty:new a.NI(1),price:new a.NI(0),total_action:new a.NI(0)}),this.transactionService.getMaterialConsuptionById(this.id).subscribe(p=>{this.materialConsumptionForm.patchValue(p),this.materialConsumptionForm.get("user")?.patchValue(p.user?.id),this.materialConsumptionForm.get("barcode")?.patchValue(p.barcode?.id),this.supplierControl.setValue(p.user.username),this.barcodeControl.setValue(p.barcode.product_title+"-"+p.barcode.variant_name)}),this.getprefix(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,v.O)(""),(0,b.U)(p=>this._filter(p,!0))),this.supplierControl.valueChanges.subscribe(p=>{p.length>=3?this.getUser(p):(this.userList=[],this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,v.O)(""),(0,b.U)(X=>this._filter(this.supplierControl?.value,!0))))})}getprefix(){this.transactionService.getMaterialConsuptionPrefix().subscribe(e=>{console.log(e),1==e.success?this.prefixNo=e.data:this.toastr.error(e.msg)},e=>{this.toastr.error(e.error.msg)})}calculateTax(){this.totals=this.taxs?(this.amounts+(this.amounts-this.amounts*(100/(100+this.taxs)))).toFixed(2):this.amounts.toFixed(2)}getUser(e){this.transactionService.getUser(e).pipe((0,y.b)(2e3)).subscribe(n=>{this.userList=n?.data,this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,v.O)(""),(0,b.U)(s=>this._filter(this.supplierControl?.value,!0)))})}_filter(e,n){const s="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),l=this.userList.filter(n?f=>f?.detail?.company_name?.toLowerCase().includes(s):f=>!f?.detail?.company_name?.toLowerCase().includes(s));return!n&&0===l.length&&l.push({username:"No data found"}),l}oncheck(e){console.log(e),this.materialConsumptionForm.patchValue({user:e})}get supplier(){return this.materialConsumptionForm.get("user")}submit(){if(this.materialConsumptionForm.valid){this.loaders=!0;const e=new FormData;e.append("user",this.materialConsumptionForm.get("user")?.value),e.append("consumption_date",this.materialConsumptionForm.get("consumption_date")?.value),e.append("prefix",this.materialConsumptionForm.get("prefix")?.value),e.append("consumption_no",this.materialConsumptionForm.get("consumption_no")?.value),e.append("consumption_type",this.materialConsumptionForm.get("consumption_type")?.value),e.append("remarks",this.materialConsumptionForm.get("remarks")?.value),e.append("barcode",this.materialConsumptionForm.get("barcode")?.value),e.append("qty",this.materialConsumptionForm.get("qty")?.value),e.append("price",this.materialConsumptionForm.get("price")?.value),e.append("total_action",this.materialConsumptionForm.get("total_action")?.value),this.transactionService.updateMaterialConsuption(e,this.id).subscribe(n=>{this.loaders=!1,this.addRes=n,this.addRes.success?(this.toastr.success(this.addRes.msg),this.materialConsumptionForm.reset(),this.router.navigate(["//transaction/materialConsuption"])):this.loaders=!1},n=>{this.loaders=!1})}else this.materialConsumptionForm.markAllAsTouched(),this.toastr.error("Please Fill All The Required Fields")}get user(){return this.materialConsumptionForm.get("user")}get consumption_date(){return this.materialConsumptionForm.get("consumption_date")}get prefix(){return this.materialConsumptionForm.get("prefix")}get consumption_no(){return this.materialConsumptionForm.get("consumption_no")}get consumption_type(){return this.materialConsumptionForm.get("consumption_type")}get remarks(){return this.materialConsumptionForm.get("remarks")}get barcode(){return this.materialConsumptionForm.get("barcode")}get qty(){return this.materialConsumptionForm.get("qty")}get price(){return this.materialConsumptionForm.get("price")}get total_action(){return this.materialConsumptionForm.get("total_action")}getVariant(e){this.inventoryService.filterVariant("","",e).subscribe(n=>{console.log(n),this.variantList=n,console.log(this.variantList)})}oncheckProduct(e){console.log(e),this.materialConsumptionForm.get("barcode")?.patchValue(e?.id)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(a.qu),t.Y36(T.q),t.Y36(_.p),t.Y36(m.gz),t.Y36(x._W),t.Y36(m.F0))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-update-material-consumption"]],decls:97,vars:52,consts:[[1,"page-header"],[1,"page-title"],[1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-4","col-md-6","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Search Company","aria-label","User","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12"],["type","date","formControlName","consumption_date","id","consumption_date",3,"ngClass"],["type","text","formControlName","prefix","placeholder","Enter Prefix","readonly","","id","prefix",3,"ngClass"],["type","text","formControlName","consumption_no","placeholder","Enter Consumption No.","id","consumption_no",3,"ngClass"],["formControlName","consumption_type","id","consumption_type",3,"ngClass"],["value","","selected","","disabled",""],["value","Sample"],["value","Production"],["value","Scrap/Wastage"],["type","text","formControlName","remarks","placeholder","Enter remarks","id","remarks",3,"ngClass"],[1,"col-lg-3","col-sm-3","col-12"],["type","text","placeholder","Search Product","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],["type","number","formControlName","qty","placeholder","Enter qty","id","qty",3,"ngClass"],["type","number","formControlName","price","placeholder","Enter price","id","price",3,"ngClass"],["type","number","formControlName","total_action","placeholder","Enter total_action","id","total_action",3,"ngClass"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//transaction/materialConsuption",1,"btn","btn-cancel","text-white"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value"],["routerLink","//contacts/addSupplier",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],["routerLink","//product/addproduct",2,"color","#FF9F43"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3," Update Material Consumption"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Edit Material Consumption "),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"User*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,Z,2,1,"ng-container",11),t.ALo(19,"async"),t.YNc(20,O,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,w,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",14)(24,"div",7)(25,"label"),t._uU(26,"Debit Note Date*"),t.qZA(),t._UZ(27,"input",15),t.YNc(28,S,2,0,"span",13),t.qZA()(),t.TgZ(29,"div",14)(30,"div",7)(31,"label"),t._uU(32,"Prefix"),t.qZA(),t._UZ(33,"input",16),t.YNc(34,N,2,0,"span",13),t.qZA()(),t.TgZ(35,"div",14)(36,"div",7)(37,"label"),t._uU(38,"Consumption Series"),t.qZA(),t._UZ(39,"input",17),t.YNc(40,q,2,0,"span",13),t.qZA()(),t.TgZ(41,"div",14)(42,"div",7)(43,"label"),t._uU(44,"Consumption Type"),t.qZA(),t.TgZ(45,"select",18)(46,"option",19),t._uU(47,"Select Consumption Type"),t.qZA(),t.TgZ(48,"option",20),t._uU(49,"Sample"),t.qZA(),t.TgZ(50,"option",21),t._uU(51,"Production"),t.qZA(),t.TgZ(52,"option",22),t._uU(53,"Scrap/Wastage"),t.qZA()(),t.YNc(54,I,2,0,"span",13),t.qZA()(),t.TgZ(55,"div",14)(56,"div",7)(57,"label"),t._uU(58,"Remarks"),t.qZA(),t._UZ(59,"input",23),t.YNc(60,J,2,0,"span",13),t.qZA()(),t.TgZ(61,"div",2)(62,"div",3)(63,"div",5)(64,"div",24)(65,"div",7)(66,"label"),t._uU(67,"Select Product"),t.qZA(),t.TgZ(68,"input",25),t.NdJ("input",function(l){return n.getVariant(l.target.value)}),t.qZA(),t.TgZ(69,"mat-autocomplete",null,26),t.YNc(71,L,2,1,"ng-container",12),t.YNc(72,Y,3,1,"mat-option",27),t.YNc(73,D,2,0,"mat-option",28),t.qZA()()(),t.TgZ(74,"div",24)(75,"div",7)(76,"label"),t._uU(77,"QTY"),t.qZA(),t._UZ(78,"input",29),t.YNc(79,k,2,0,"span",13),t.qZA()(),t.TgZ(80,"div",24)(81,"div",7)(82,"label"),t._uU(83,"Price"),t.qZA(),t._UZ(84,"input",30),t.YNc(85,R,2,0,"span",13),t.qZA()(),t.TgZ(86,"div",24)(87,"div",7)(88,"label"),t._uU(89,"Total Action"),t.qZA(),t._UZ(90,"input",31),t.YNc(91,V,2,0,"span",13),t.qZA()()()()(),t.TgZ(92,"div",32),t.YNc(93,K,2,0,"button",33),t.YNc(94,B,3,0,"button",34),t.TgZ(95,"a",35),t._uU(96,"Cancel"),t.qZA()()()()()()),2&e){const s=t.MAs(17),l=t.MAs(70);t.xp6(8),t.Q6J("formGroup",n.materialConsumptionForm),t.xp6(7),t.Q6J("formControl",n.supplierControl)("matAutocomplete",s)("ngClass",t.VKq(34,c,n.f.user.touched&&n.f.user.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,30,n.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,32,n.filteredSuppliers)),t.xp6(2),t.Q6J("ngIf",n.supplier&&n.supplier.invalid&&n.supplier.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(36,c,n.f.consumption_date.touched&&n.f.consumption_date.invalid)),t.xp6(1),t.Q6J("ngIf",n.consumption_date&&n.consumption_date.invalid&&n.consumption_date.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(38,c,n.f.prefix.touched&&n.f.prefix.invalid)),t.xp6(1),t.Q6J("ngIf",n.prefix&&n.prefix.invalid&&n.prefix.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(40,c,n.f.consumption_no.touched&&n.f.consumption_no.invalid)),t.xp6(1),t.Q6J("ngIf",n.consumption_no&&n.consumption_no.invalid&&n.consumption_no.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(42,c,n.f.consumption_type.touched&&n.f.consumption_type.invalid)),t.xp6(9),t.Q6J("ngIf",n.consumption_type&&n.consumption_type.invalid&&n.consumption_type.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(44,c,n.f.remarks.touched&&n.f.remarks.invalid)),t.xp6(1),t.Q6J("ngIf",n.remarks&&n.remarks.invalid&&n.remarks.touched),t.xp6(8),t.Q6J("formControl",n.barcodeControl)("matAutocomplete",l),t.xp6(3),t.Q6J("ngIf",(null==n.barcodeControl.value?null:n.barcodeControl.value.length)>=1&&(null==n.barcodeControl.value?null:n.barcodeControl.value.length)>0),t.xp6(1),t.Q6J("ngIf",0===(null==n.variantList?null:n.variantList.length)),t.xp6(1),t.Q6J("ngIf",(null==n.barcodeControl.value?null:n.barcodeControl.value.length)<3),t.xp6(5),t.Q6J("ngClass",t.VKq(46,c,n.f.qty.touched&&n.f.qty.invalid)),t.xp6(1),t.Q6J("ngIf",n.qty&&n.qty.invalid&&n.qty.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(48,c,n.f.price.touched&&n.f.price.invalid)),t.xp6(1),t.Q6J("ngIf",n.price&&n.price.invalid&&n.price.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(50,c,n.f.total_action.touched&&n.f.total_action.invalid)),t.xp6(1),t.Q6J("ngIf",n.total_action&&n.total_action.invalid&&n.total_action.touched),t.xp6(2),t.Q6J("ngIf",!n.loaders),t.xp6(1),t.Q6J("ngIf",n.loaders)}},dependencies:[u.mk,u.sg,u.O5,m.yS,a._Y,a.YN,a.Kr,a.Fj,a.wV,a.EJ,a.JJ,a.JL,a.oH,a.sg,a.u,d.XC,d.ZL,g.ey,h.KE,C.Nt,u.Ov],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}textarea[_ngcontent-%COMP%]{height:40px}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], input[type=number][_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),o})(),canActivate:[r(30597).l],data:{allowedRoles:["change_materialconsumption"]}}];let $=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(W),m.Bz]}),o})();var j=r(8468);let H=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[u.ez,$,j.I,d.Bb,h.lN,C.c]}),o})()},30597:(A,M,r)=>{r.d(M,{l:()=>y});var u=r(94650),m=r(89299),a=r(97185),v=r(42917),b=r(80927);let y=(()=>{class t{constructor(_,x,d,g,h){this.router=_,this.Arout=x,this.toastr=d,this.profileService=g,this.coreService=h}canActivate(_,x){const d=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(g=>{this.userDetails=g,this.permissions=this.userDetails?.permission}),d){const g=_.data.allowedRoles;console.log(g,"allowedRoles");const h=d.some(C=>g.includes(C.codename));if(console.log(h),this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails);const U=C?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==U.length)&&(this.profileService.setUserPermission(U),window.location.reload())}),h)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(_){return new(_||t)(u.LFG(m.F0),u.LFG(m.gz),u.LFG(a._W),u.LFG(v.J),u.LFG(b.p))},t.\u0275prov=u.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);