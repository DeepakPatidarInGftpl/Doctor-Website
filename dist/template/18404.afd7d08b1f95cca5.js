"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[18404],{25062:(M,U,d)=>{d.d(U,{y:()=>v});var h=d(92340),_=d(94650),u=d(80529);let v=(()=>{class g{constructor(r){this.http=r,this.apiUrl=`${h.N.api}`}UpdateDefaultAddress(r){return this.http.post(this.apiUrl+"/pv-api/make_default_address/",r)}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(r){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}SupplierIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,o)}addSupplier(r){return this.http.post(this.apiUrl+"/pv-api/supplier/",r)}updateSupplier(r,o){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${o}`,r)}deleteSupplier(r){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(r){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}VendorIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,o)}addVendor(r){return this.http.post(this.apiUrl+"/pv-api/vendor/",r)}updateVendor(r,o){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${o}`,r)}deleteVendor(r){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}PaymentTermsIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,o)}addPaymentTerms(r){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",r)}updatePaymentTerms(r,o){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${o}`,r)}deletePaymentTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(r){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}TransportIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,o)}addTransport(r){return this.http.post(this.apiUrl+"/pv-api/transport/",r)}updateTransport(r,o){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${o}`,r)}deleteTransport(r){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(r){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}EmployeeIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,o)}addEmployee(r){return this.http.post(this.apiUrl+"/pv-api/employee/",r)}updateEmployee(r,o){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${o}`,r)}deleteEmployee(r){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(r){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}CustomerIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,o)}addCustomer(r){return this.http.post(this.apiUrl+"/pv-api/customer/",r)}updateCustomer(r,o){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${o}`,r)}deleteCustomer(r){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(r){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${r}`)}UserIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${r}`,o)}addUser(r){return this.http.post(this.apiUrl+"/pv-api/user/",r)}updateUser(r,o){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${o}`,r)}deleteUser(r){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${r}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(r){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${r}`)}addPermissionGroup(r){return this.http.post(this.apiUrl+"/pv-api/group/",r)}updatePermissionGroup(r,o){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${o}`,r)}deletePermissionGroup(r){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(r){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`)}DealerIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,o)}addDealer(r){return this.http.post(this.apiUrl+"/pv-api/dealer/",r)}updateDealer(r,o){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${o}`,r)}deleteDealer(r){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+r)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${r}`)}TermsIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,o)}addTerms(r){return this.http.post(this.apiUrl+"/pv-api/terms/",r)}updateTerms(r,o){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${o}`,r)}deleteTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${r}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(r){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${r}`)}DepartmentIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${r}`,o)}addDepartment(r){return this.http.post(this.apiUrl+"/pv-api/department/",r)}updateDepartment(r,o){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${o}`,r)}deleteDepartment(r){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${r}`)}getCreditLimitByUserId(r){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${r}`)}}return g.\u0275fac=function(r){return new(r||g)(_.LFG(u.eN))},g.\u0275prov=_.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},18404:(M,U,d)=>{d.r(U),d.d(U,{StockTransferUpdateModule:()=>st});var h=d(36895),_=d(4392),u=d(24006),v=d(68675),g=d(54004),t=d(94650),r=d(42236),o=d(97185),l=d(25062),y=d(47957),S=d(3238),C=d(59549),x=d(44144);function T(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"mat-option",49),t.NdJ("onSelectionChange",function(){t.CHM(e);const a=t.oxw().$implicit,s=t.oxw();return t.KtG(s.oncheck(a))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.title),t.xp6(1),t.Oqu(null==e?null:e.title)}}function m(i,c){if(1&i&&(t.ynx(0),t.YNc(1,T,2,2,"mat-option",48),t.BQk()),2&i){const e=c.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function b(i,c){1&i&&(t.TgZ(0,"mat-option",52)(1,"a",53),t._uU(2,"+ Add Branch"),t.qZA()()),2&i&&t.Q6J("value","No data found")}function Z(i,c){1&i&&(t.TgZ(0,"mat-option",54),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function O(i,c){if(1&i&&(t.ynx(0),t.YNc(1,b,3,1,"mat-option",50),t.YNc(2,Z,2,0,"mat-option",51),t.BQk()),2&i){const e=c.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==n.fromBranchControl.value?null:n.fromBranchControl.value.length)<3)}}function F(i,c){1&i&&(t.TgZ(0,"span",55),t._uU(1,"Select From Branch "),t.qZA())}function P(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"mat-option",49),t.NdJ("onSelectionChange",function(){t.CHM(e);const a=t.oxw().$implicit,s=t.oxw();return t.KtG(s.oncheck1(a))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.title),t.xp6(1),t.Oqu(null==e?null:e.title)}}function I(i,c){if(1&i&&(t.ynx(0),t.YNc(1,P,2,2,"mat-option",48),t.BQk()),2&i){const e=c.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function N(i,c){1&i&&(t.TgZ(0,"mat-option",52)(1,"a",53),t._uU(2,"+ Add Branch"),t.qZA()()),2&i&&t.Q6J("value","No data found")}function B(i,c){1&i&&(t.TgZ(0,"mat-option",54),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function L(i,c){if(1&i&&(t.ynx(0),t.YNc(1,N,3,1,"mat-option",50),t.YNc(2,B,2,0,"mat-option",51),t.BQk()),2&i){const e=c.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==n.toBranchControl.value?null:n.toBranchControl.value.length)<3)}}function J(i,c){1&i&&(t.TgZ(0,"span",55),t._uU(1,"Select To Branch "),t.qZA())}function q(i,c){1&i&&(t.TgZ(0,"span",55),t._uU(1,"Select Transfer Date "),t.qZA())}function D(i,c){1&i&&(t.TgZ(0,"span",55),t._uU(1,"Enter Transfer Number "),t.qZA())}function Q(i,c){1&i&&(t.TgZ(0,"span",55),t._uU(1,"select Status"),t.qZA())}function E(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"a",56)(1,"input",57,58),t.NdJ("change",function(){const s=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.SelectedProduct(null==s?null:s.id))})("change",function(){t.CHM(e);const a=t.MAs(2),s=t.oxw();return t.KtG(s.getSubCategory(a.value))}),t.qZA(),t.TgZ(3,"label",59),t.NdJ("click",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.onLabelClick(a))}),t._uU(4),t.qZA()()}if(2&i){const e=c.$implicit,n=c.index;t.xp6(1),t.Q6J("value",e.id)("id","checkboxCat-"+n),t.xp6(2),t.Q6J("for","checkboxCat-"+n),t.xp6(1),t.Oqu(null==e?null:e.title)}}function V(i,c){if(1&i&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.selectData.length+" Category Selected")}}function Y(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"a",56)(1,"input",57),t.NdJ("change",function(){const s=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.SelectedProductSubCat(null==s?null:s.id))}),t.qZA(),t.TgZ(2,"label",59),t.NdJ("click",function(a){t.CHM(e);const s=t.oxw();return t.KtG(s.onLabelClick(a))}),t._uU(3),t.qZA()()}if(2&i){const e=c.$implicit,n=c.index;t.xp6(1),t.Q6J("value",e.id)("id","checkboxSubCat-"+n),t.xp6(1),t.Q6J("for","checkboxSubCat-"+n),t.xp6(1),t.Oqu(null==e?null:e.title)}}function G(i,c){if(1&i&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij("",e.selectSubCate.length+" Sub Category Selected"," ")}}function K(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"span",60),t.NdJ("click",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.addCart())}),t._uU(1,"Add Cart+"),t.qZA()}}function R(i,c){if(1&i){const e=t.EpF();t.O4$(),t.TgZ(0,"svg",74),t.NdJ("click",function(){t.CHM(e);const a=t.oxw(2);return t.KtG(a.addCart())}),t._UZ(1,"path",64)(2,"path",75),t.qZA()}}function z(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"mat-option",49),t.NdJ("onSelectionChange",function(){t.CHM(e);const a=t.oxw().$implicit,s=t.oxw().index,p=t.oxw();return t.KtG(p.oncheckVariant(a,s))})("onSelectionChange",function(){t.CHM(e);const a=t.oxw().$implicit,s=t.oxw().index,p=t.oxw();return t.KtG(p.variantChanged(a,s))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)),t.xp6(1),t.hij(" ",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)," ")}}function H(i,c){if(1&i&&(t.ynx(0),t.YNc(1,z,2,2,"mat-option",48),t.BQk()),2&i){const e=c.$implicit;t.xp6(1),t.Q6J("ngIf",1==(null==e?null:e.is_active))}}function W(i,c){1&i&&(t.TgZ(0,"mat-option",52)(1,"a",76),t._uU(2,"+add Product"),t.qZA()()),2&i&&t.Q6J("value","No data found")}function j(i,c){1&i&&(t.TgZ(0,"mat-option",54),t._uU(1," Please Enter 3 or more characters "),t.qZA())}function X(i,c){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr",61)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td")(5,"div")(6,"div",62),t.O4$(),t.TgZ(7,"svg",63),t.NdJ("click",function(){const s=t.CHM(e).index,p=t.oxw();return t.KtG(p.removeCart(s))}),t._UZ(8,"path",64)(9,"path",65),t.qZA()(),t.YNc(10,R,3,0,"svg",66),t.qZA()(),t.kcU(),t.TgZ(11,"td")(12,"input",67,68),t.NdJ("keyup",function(){const s=t.CHM(e).index,p=t.MAs(13),f=t.oxw();return t.KtG(f.getVariant(p.value,s,"barcode"))})("blur",function(){t.CHM(e);const a=t.oxw();return t.KtG(a.hideSearch())}),t.qZA()(),t.TgZ(14,"td",69)(15,"div",70)(16,"mat-form-field",8)(17,"input",71),t.NdJ("input",function(a){const p=t.CHM(e).index,f=t.oxw();return t.KtG(f.getVariant(a.target.value,p,""))}),t.qZA(),t.TgZ(18,"mat-autocomplete",null,72),t.YNc(20,H,2,1,"ng-container",11),t.YNc(21,W,3,1,"mat-option",50),t.YNc(22,j,2,0,"mat-option",51),t.qZA()()()(),t.TgZ(23,"td")(24,"input",73),t.NdJ("blur",function(){const s=t.CHM(e).index,p=t.oxw();return t.KtG(p.purchase4(s))}),t.qZA()()(),t.BQk()}if(2&i){const e=c.index,n=t.MAs(19),a=t.oxw();let s;t.xp6(1),t.Q6J("formGroupName",e),t.xp6(2),t.Oqu(e+1+"."),t.xp6(7),t.Q6J("ngIf",a.isLastCart(e)),t.xp6(2),t.Q6J("value",void 0!==a.barcode[e]?a.barcode[e]:""),t.uIk("data-index",e),t.xp6(5),t.Q6J("formControl",a.myControl.at(e))("matAutocomplete",n),t.xp6(3),t.Q6J("ngForOf",a.variantList),t.xp6(1),t.Q6J("ngIf",0===(null==a.variantList?null:a.variantList.length)),t.xp6(1),t.Q6J("ngIf",(null==(s=a.myControl.at(e))||null==s.value?null:s.value.length)<3)}}function tt(i,c){1&i&&(t.TgZ(0,"button",77),t._uU(1,"Submit"),t.qZA())}function et(i,c){1&i&&(t.TgZ(0,"button",78),t._UZ(1,"span",79),t._uU(2,"Submit"),t.qZA())}const k=function(i){return{"is-invalid":i}},$=function(){return{standalone:!0}},ot=[{path:"",component:(()=>{class i{constructor(e,n,a,s,p,f){this.stockService=e,this.fb=n,this.router=a,this.toastrService=s,this.contactService=p,this.Arout=f,this.productOption=[],this.branch=[],this.fromBranchControl=new u.NI,this.toBranchControl=new u.NI,this.variantControl=new u.NI,this.variants=[],this.variantList=[],this.categoryList=[],this.filteredCategoryList=[],this.searchCategory="",this.SubcategoryList=[],this.filteredSubCategoryList=[],this.searchSubCategory="",this.selectData=[],this.selectSubCate=[],this.isCart=!1,this.toBranch=[],this.loader=!1,this.search=!1,this.check=!1,this.srchData=[],this.barcode=[],this.searchs=[],this.productName=[],this.isProduct=!0}get f(){return this.stockTransferForm.controls}ngOnInit(){this.id=this.Arout.snapshot.paramMap.get("id"),this.myControl=new u.Oe([]);const e=(new Date).toISOString().split("T")[0];this.stockTransferForm=this.fb.group({from_branch:new u.NI("",[u.kI.required]),to_branch:new u.NI("",[u.kI.required]),transfer_date:new u.NI(e,[u.kI.required]),transfer_number:new u.NI(""),cart:this.fb.array([]),total_qty:new u.NI(""),total_product:new u.NI(""),status:new u.NI("")}),this.searchForm=this.fb.group({search:new u.NI}),this.filteredFromBranch=this.fromBranchControl.valueChanges.pipe((0,v.O)(""),(0,g.U)(n=>this._filter(n,!0))),this.filteredToBranch=this.toBranchControl.valueChanges.pipe((0,v.O)(""),(0,g.U)(n=>this._filterr(n,!0))),this.filteredVariants=this.variantControl.valueChanges.pipe((0,v.O)(""),(0,g.U)(n=>this._filtr(n,!0))),this.stockService.getStockTransferById(this.id).subscribe(n=>{this.editRes=n,this.stockTransferForm.patchValue(n),this.editRes?.cart?.length>0?this.stockTransferForm.setControl("cart",this.udateCart(this.editRes?.cart)):this.addCart(),this.stockTransferForm.get("from_branch")?.patchValue(this.editRes?.from_branch?.id),this.stockTransferForm.get("to_branch")?.patchValue(this.editRes?.to_branch?.id),this.fromBranchControl.setValue(this.editRes?.from_branch?.title),this.toBranchControl.setValue(this.editRes?.to_branch?.title)}),this.getBranch(),this.getCategory(),this.getprefix(),this.addCart()}getprefix(){this.stockService.getStockTransferPrefix().subscribe(e=>{console.log(e),1==e.success?this.prefixNo=e.prefix:this.toastrService.error(e.msg)},e=>{this.toastrService.error(e.error.msg)})}getVariant(e,n,a){this.selectData.length>0||this.selectSubCate.length>0?(this.selectData.length>0?(this.category=JSON.stringify(this.selectData),console.log(this.category)):(this.category=void 0,console.log(this.category,"else part")),this.subcategory=this.selectSubCate.length>0?JSON.stringify(this.selectSubCate):void 0,this.stockService.filterVariant(this.category,this.subcategory,e).subscribe(s=>{console.log(s),this.variantList=s,console.log(this.variantList),"barcode"===a&&(this.oncheckVariant(s[0],n),this.myControl.setValue(s[0].product_title)),e&&(this.searchs=s,this.productOption=s,this.productName[n]=this.searchs[0]?.product_title,this.check=!0,console.log(this.searchs[0]?.variant_name),this.stockTransferForm.get("cart").at(n).patchValue({})),console.log(this.stockTransferForm.value)})):this.stockService.filterVariant(this.category,this.subcategory,e).subscribe(s=>{console.log(s),this.variantList=s,console.log(this.variantList),"barcode"===a&&(this.oncheckVariant(s[0],n),this.myControl.setValue(s[0].product_title)),e&&(this.searchs=s,this.productOption=s,this.productName[n]=this.searchs[0]?.product_title,this.check=!0,this.stockTransferForm.get("cart")?.at(n).patchValue({}))})}getCategory(){this.stockService.getCategory().subscribe(e=>{this.categoryList=e,this.filteredCategoryList=[...this.categoryList]})}filterCategory(){this.filteredCategoryList=""===this.searchCategory.trim()?[...this.categoryList]:this.categoryList.filter(e=>e?.title?.toLowerCase().includes(this.searchCategory.toLowerCase()))}getSubCategory(e){this.stockService.getSubcategoryByCategory(e).subscribe(n=>{this.SubcategoryList=n,this.filteredSubCategoryList=[...this.SubcategoryList]})}filterSubCategory(){this.filteredSubCategoryList=""===this.searchSubCategory.trim()?[...this.SubcategoryList]:this.SubcategoryList.filter(e=>e?.title?.toLowerCase().includes(this.searchSubCategory.toLowerCase()))}SelectedProduct(e){const n=this.selectData.indexOf(e);-1!==n?this.selectData.splice(n,1):this.selectData.push(e),console.log(this.selectData,"selected data"),this.getVariant("","","")}SelectedProductSubCat(e){const n=this.selectSubCate.indexOf(e);-1!==n?this.selectSubCate.splice(n,1):this.selectSubCate.push(e),console.log(this.selectSubCate,"selected data"),this.getVariant("","","")}get from_branch(){return this.stockTransferForm.get("from_branch")}get to_branch(){return this.stockTransferForm.get("to_branch")}get status(){return this.stockTransferForm.get("status")}udateCart(e){console.log(e);let n=new u.Oe([]);return e.forEach((a,s)=>{n.push(this.fb.group({barcode:a.barcode.id,quantity:a.quantity})),this.myControl.push(new u.NI(a?.barcode?.product_title)),this.barcode[s]=a?.barcode?.sku}),n}cart(){return this.fb.group({barcode:0,quantity:1})}getCart(){return this.stockTransferForm.get("cart")}addCart(){this.getCart().push(this.cart()),this.isCart=!1}removeCart(e){this.getCart().removeAt(e),0==this.stockTransferForm?.value?.cart?.length&&(this.isCart=!0)}getBranch(){this.stockService.getBranch().subscribe(e=>{this.branch=e,this.toBranch=e})}oncheck(e){const n=e.id;this.userType=e?.user_type,this.stockTransferForm.patchValue({from_branch:n})}oncheck1(e){const n=e.id;this.userType=e?.user_type,this.stockTransferForm.patchValue({to_branch:n})}oncheckVariant(e,n){const a=e.id;console.log(e);const s=this.stockTransferForm.get("cart").at(n);e&&s.patchValue({barcode:a,item_name:e?.product_title,quantity:e.batch[0]?.stock})}submit(){if(console.log(this.stockTransferForm.value),this.stockTransferForm.valid){console.log("valid");let e=new FormData;e.append("from_branch",this.stockTransferForm.get("from_branch")?.value),e.append("to_branch",this.stockTransferForm.get("to_branch")?.value),e.append("transfer_date",this.stockTransferForm.get("transfer_date")?.value),e.append("transfer_number",this.stockTransferForm.get("transfer_number")?.value),e.append("total_qty",this.stockTransferForm.get("total_qty")?.value),e.append("total_product",this.stockTransferForm.get("total_product")?.value),e.append("status",this.stockTransferForm.get("status")?.value);const n=this.stockTransferForm.get("cart"),a=[];n.controls.forEach(s=>{const p=s,f={};Object.keys(p.controls).forEach(A=>{const w=p.controls[A];f[A]=isNaN(w.value)?w.value:parseFloat(w.value)}),a.push(f)}),e.append("cart",JSON.stringify(a)),this.stockService.updateStockTransfer(e,this.id).subscribe(s=>{console.log(s),this.getRes=s,this.getRes.success?(this.loader=!1,this.toastrService.success(this.getRes.msg),this.router.navigate(["//inventory/list-stock-transfer"])):(this.loader=!1,this.toastrService.error(this.getRes?.error))},s=>{this.loader=!1,this.toastrService.error(s.error?.error?.status[0])})}else this.loader=!1,this.stockTransferForm.markAllAsTouched(),this.toastrService.error("Please Fill All The Required Fields")}get transfer_date(){return this.stockTransferForm.get("transfer_date")}get refund_status(){return this.stockTransferForm.get("refund_status")}get transfer_number(){return this.stockTransferForm.get("transfer_number")}get note(){return this.stockTransferForm.get("note")}_filter(e,n){const a="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),s=this.branch.filter(n?p=>p?.title?.toLowerCase().includes(a):p=>!p?.title?.toLowerCase().includes(a));return!n&&0===s.length&&s.push({title:"No data found"}),s}_filterr(e,n){const a="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),s=this.toBranch.filter(n?p=>p?.title?.toLowerCase().includes(a):p=>!p?.title?.toLowerCase().includes(a));return!n&&0===s.length&&s.push({title:"No data found"}),s}_filtr(e,n){const a="string"==typeof e?e?.toLowerCase():e?.toString().toLowerCase(),s=n?this.variants?.filter(p=>p&&(p.product_title?.toLowerCase().includes(a)||p.sku?.toLowerCase().includes(a)||p.variant_name?.toLowerCase().includes(a)||p.id?.toString().includes(a))):this.variants?.filter(p=>p&&!(p.product_title?.toLowerCase().includes(a)||p.sku?.toLowerCase().includes(a)||p.variant_name?.toLowerCase().includes(a)||p.id?.toString().includes(a)));return!n&&(!s||0===s.length)&&s.push({product_title:"No data found"}),s||[]}isLastCart(e){return e===this.getCart().controls.length-1}clearSearch(){this.searchForm.reset(),this.search=!1}hideSearch(){this.searchs=void 0}onOptionSelected(e){}displayFn(e){return e?e.product_title:""}variantChanged(e,n){console.log(e),this.barcode[n]=e.sku,this.v_id=e.id,this.stockTransferForm.get("cart").at(n).patchValue({barcode:e.id}),this.getVariant("","","")}open(){this.isProduct=!1}calculateTotalQty(){let e=0;for(let n=0;n<this.getCart().controls.length;n++){const a=this.getCart().controls[n].get("quantity")||0;a&&(e+=+a.value||0)}return e}calculateTotalProduct(){let e=0;return e=this.getCart().controls.length,e}onLabelClick(e){e.stopPropagation()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.q),t.Y36(u.qu),t.Y36(_.F0),t.Y36(o._W),t.Y36(l.y),t.Y36(_.gz))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-stock-transfer-update"]],decls:142,vars:58,consts:[[1,"page-header"],[1,"page-title"],["id","purchaseForm",1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-md-3","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Select From Branch","aria-label","from_branch","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],["type","text","placeholder","Select To Branch","aria-label","to_branch","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["autoActiveFirstOption",""],["toBranchAuto","matAutocomplete"],[1,"col-lg-3","col-sm-3","col-12"],["type","date","formControlName","transfer_date",3,"ngClass"],["type","text","formControlName","transfer_number",3,"ngModel","ngClass"],["formControlName","status",3,"ngModel","ngClass"],["value","","selected","","disabled",""],["value","Dispatched"],["value","Received"],[1,"card"],[1,"col-lg-4","col-sm-4","col-12"],[2,"color","#FF9F43","font-size","16px"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"table-responsive"],[1,"table","datanew"],["colspan","3"],["class","debitIntoCart",3,"click",4,"ngIf"],["formArrayName","cart"],[2,"background","rgba(145, 158, 171, 0.32)"],[1,"text-start"],[1,"col-lg-6","my-3"],[1,"total-order"],["type","text","formControlName","total_product",1,"input",2,"display","none",3,"ngModel"],[1,"total"],["type","text","formControlName","total_qty",1,"input",2,"display","none",3,"ngModel"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//inventory/list-stock-transfer",1,"btn","btn-cancel","text-white"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],[3,"value"],["routerLink","//masters/branch",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],[1,"dropdown-item"],["type","checkbox",3,"value","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[1,"debitIntoCart",3,"click"],[3,"formGroupName"],[1,"me-2"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"color","red",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["style","color:green","xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","class","bi bi-plus-circle","viewBox","0 0 16 16",3,"click",4,"ngIf"],["type","text","placeholder","Search Barcode",1,"input",3,"value","keyup","blur"],["id",""],["colspan","1"],[1,"form-group",2,"margin-bottom","0"],["type","text","placeholder","Search Product","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],["type","number","formControlName","quantity",1,"input",3,"blur"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle",2,"color","green",3,"click"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],["routerLink","//product/addproduct",2,"color","#FF9F43"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Edit Stock Transfer Add"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Update Stock Transfer"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"From Branch*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,m,2,1,"ng-container",11),t.ALo(19,"async"),t.YNc(20,O,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,F,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",6)(24,"div",7)(25,"label"),t._uU(26,"To Branch*"),t.qZA(),t.TgZ(27,"mat-form-field",8),t._UZ(28,"input",14),t.TgZ(29,"mat-autocomplete",15,16),t.YNc(31,I,2,1,"ng-container",11),t.ALo(32,"async"),t.YNc(33,L,3,2,"ng-container",12),t.ALo(34,"async"),t.qZA()(),t.YNc(35,J,2,0,"span",13),t.qZA()(),t.TgZ(36,"div",17)(37,"div",7)(38,"label"),t._uU(39,"Transfer Date*"),t.qZA(),t._UZ(40,"input",18),t.YNc(41,q,2,0,"span",13),t.qZA()(),t.TgZ(42,"div",17)(43,"div",7)(44,"label"),t._uU(45,"Transfer Number"),t.qZA(),t._UZ(46,"input",19),t.YNc(47,D,2,0,"span",13),t.qZA()(),t.TgZ(48,"div",17)(49,"div",7)(50,"label"),t._uU(51,"Status"),t.qZA(),t.TgZ(52,"select",20)(53,"option",21),t._uU(54,"Select Status"),t.qZA(),t.TgZ(55,"option",22),t._uU(56,"Dispatched"),t.qZA(),t.TgZ(57,"option",23),t._uU(58,"Received"),t.qZA()(),t.YNc(59,Q,2,0,"span",13),t.qZA()()(),t.TgZ(60,"div",24)(61,"div",3)(62,"div",5)(63,"div",25)(64,"div",1)(65,"p",26),t._uU(66,"Product Details"),t.qZA()()(),t.TgZ(67,"div",25)(68,"div",7)(69,"div",27)(70,"button",28),t._uU(71,"Select Category"),t.qZA(),t.TgZ(72,"ul",29)(73,"li")(74,"input",30),t.NdJ("ngModelChange",function(s){return n.searchCategory=s})("ngModelChange",function(){return n.filterCategory()}),t.qZA()(),t.TgZ(75,"li"),t.YNc(76,E,5,4,"a",31),t.qZA()()(),t.YNc(77,V,2,1,"p",12),t.qZA()(),t.TgZ(78,"div",25)(79,"div",7)(80,"div",27)(81,"button",28),t._uU(82,"Select Sub Category"),t.qZA(),t.TgZ(83,"ul",29)(84,"li")(85,"input",30),t.NdJ("ngModelChange",function(s){return n.searchSubCategory=s})("ngModelChange",function(){return n.filterSubCategory()}),t.qZA()(),t.TgZ(86,"li"),t.YNc(87,Y,4,4,"a",31),t.qZA()()(),t.YNc(88,G,2,1,"p",12),t.qZA()(),t.TgZ(89,"div",32)(90,"table",33)(91,"thead")(92,"tr")(93,"th"),t._uU(94,"#"),t.qZA(),t._UZ(95,"th"),t.TgZ(96,"th"),t._uU(97,"Barcode/SKU"),t.qZA(),t.TgZ(98,"th"),t._uU(99,"Product Name"),t.qZA(),t.TgZ(100,"th"),t._uU(101,"QTY"),t.qZA(),t._UZ(102,"th"),t.qZA(),t.TgZ(103,"tr")(104,"th",34),t.YNc(105,K,2,0,"span",35),t.qZA()()(),t.TgZ(106,"tbody"),t.ynx(107,36),t.YNc(108,X,25,10,"ng-container",11),t.BQk(),t.TgZ(109,"tr",37),t._UZ(110,"td")(111,"td")(112,"td"),t.TgZ(113,"td",38)(114,"strong"),t._uU(115,"Total"),t.qZA()(),t.TgZ(116,"td",38),t._uU(117),t.qZA()()()()(),t.TgZ(118,"div",5),t._UZ(119,"div",39),t.TgZ(120,"div",39)(121,"div",7)(122,"div",40)(123,"ul")(124,"li")(125,"h4"),t._uU(126,"Total Product"),t.qZA(),t.TgZ(127,"h5"),t._uU(128),t._UZ(129,"input",41),t.qZA()(),t.TgZ(130,"li",42)(131,"h4"),t._uU(132,"Total QTY"),t.qZA(),t.TgZ(133,"h5"),t._uU(134),t._UZ(135,"input",43),t.qZA()()()()()()()()()(),t.TgZ(136,"div",44)(137,"div",44),t.YNc(138,tt,2,0,"button",45),t.YNc(139,et,3,0,"button",46),t.TgZ(140,"a",47),t._uU(141,"Cancel"),t.qZA()()()()()()),2&e){const a=t.MAs(17),s=t.MAs(30);t.xp6(8),t.Q6J("formGroup",n.stockTransferForm),t.xp6(7),t.Q6J("formControl",n.fromBranchControl)("matAutocomplete",a)("ngClass",t.VKq(46,k,n.f.from_branch.touched&&n.f.from_branch.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,38,n.filteredFromBranch)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,40,n.filteredFromBranch)),t.xp6(2),t.Q6J("ngIf",n.from_branch&&n.from_branch.invalid&&n.from_branch.touched),t.xp6(6),t.Q6J("formControl",n.toBranchControl)("matAutocomplete",s)("ngClass",t.VKq(48,k,n.f.to_branch.touched&&n.f.to_branch.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(32,42,n.filteredToBranch)),t.xp6(2),t.Q6J("ngIf",t.lcZ(34,44,n.filteredToBranch)),t.xp6(2),t.Q6J("ngIf",n.to_branch&&n.to_branch.invalid&&n.to_branch.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(50,k,n.f.transfer_date.touched&&n.f.transfer_date.invalid)),t.xp6(1),t.Q6J("ngIf",n.transfer_date&&n.transfer_date.invalid&&n.transfer_date.touched),t.xp6(5),t.Q6J("ngModel",n.prefixNo)("ngClass",t.VKq(52,k,n.f.transfer_number.touched&&n.f.transfer_number.invalid)),t.xp6(1),t.Q6J("ngIf",n.transfer_number&&n.transfer_number.invalid&&n.transfer_number.touched),t.xp6(5),t.Q6J("ngModel",n.prefixNo)("ngClass",t.VKq(54,k,n.f.status.touched&&n.f.status.invalid)),t.xp6(7),t.Q6J("ngIf",n.status&&n.status.invalid&&n.status.touched),t.xp6(15),t.Q6J("ngModel",n.searchCategory)("ngModelOptions",t.DdM(56,$)),t.xp6(2),t.Q6J("ngForOf",n.filteredCategoryList),t.xp6(1),t.Q6J("ngIf",n.selectData.length>0),t.xp6(8),t.Q6J("ngModel",n.searchSubCategory)("ngModelOptions",t.DdM(57,$)),t.xp6(2),t.Q6J("ngForOf",n.filteredSubCategoryList),t.xp6(1),t.Q6J("ngIf",n.selectSubCate.length>0),t.xp6(17),t.Q6J("ngIf",n.isCart),t.xp6(3),t.Q6J("ngForOf",n.getCart().controls),t.xp6(9),t.Oqu(n.calculateTotalQty()),t.xp6(11),t.hij("",n.calculateTotalProduct()," "),t.xp6(1),t.Q6J("ngModel",n.calculateTotalProduct()),t.xp6(5),t.hij(" ",n.calculateTotalQty()," "),t.xp6(1),t.Q6J("ngModel",n.calculateTotalQty()),t.xp6(3),t.Q6J("ngIf",!n.loader),t.xp6(1),t.Q6J("ngIf",n.loader)}},dependencies:[h.mk,h.sg,h.O5,_.yS,u._Y,u.YN,u.Kr,u.Fj,u.wV,u.EJ,u.JJ,u.JL,u.On,u.oH,u.sg,u.u,u.x0,u.CE,y.XC,y.ZL,S.ey,C.KE,x.Nt,h.Ov],styles:[".mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:40%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),i})(),canActivate:[d(30597).l],data:{allowedRoles:["change_stocktransfer"]}}];let it=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[_.Bz.forChild(ot),_.Bz]}),i})();var at=d(30906);let st=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.ez,it,at.ZU,u.u5,u.UX,y.Bb,C.lN,x.c]}),i})()},30597:(M,U,d)=>{d.d(U,{l:()=>t});var h=d(94650),_=d(4392),u=d(97185),v=d(42917),g=d(80927);let t=(()=>{class r{constructor(l,y,S,C,x){this.router=l,this.Arout=y,this.toastr=S,this.profileService=C,this.coreService=x}canActivate(l,y){const S=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(C=>{this.userDetails=C,this.permissions=this.userDetails?.permission}),S){const C=l.data.allowedRoles,x=S.some(m=>C.includes(m.codename));let T=this.coreService.profileData$.value;if(T&&T.username){this.userDetails=T,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(T);const m=T?.permission,b=this.profileService.getUserDetails();(!b||b.length!==m.length)&&(this.profileService.setUserPermission(m),window.location.reload())}else this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(m);const b=m?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==b.length)&&(this.profileService.setUserPermission(b),window.location.reload())});if(x)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return r.\u0275fac=function(l){return new(l||r)(h.LFG(_.F0),h.LFG(_.gz),h.LFG(u._W),h.LFG(v.J),h.LFG(g.p))},r.\u0275prov=h.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);