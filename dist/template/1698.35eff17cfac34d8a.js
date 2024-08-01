"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1698],{25062:(U,y,d)=>{d.d(y,{y:()=>v});var h=d(92340),_=d(94650),u=d(80529);let v=(()=>{class g{constructor(r){this.http=r,this.apiUrl=`${h.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(r){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}SupplierIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,o)}addSupplier(r){return this.http.post(this.apiUrl+"/pv-api/supplier/",r)}updateSupplier(r,o){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${o}`,r)}deleteSupplier(r){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(r){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}VendorIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,o)}addVendor(r){return this.http.post(this.apiUrl+"/pv-api/vendor/",r)}updateVendor(r,o){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${o}`,r)}deleteVendor(r){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}PaymentTermsIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,o)}addPaymentTerms(r){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",r)}updatePaymentTerms(r,o){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${o}`,r)}deletePaymentTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(r){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}TransportIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,o)}addTransport(r){return this.http.post(this.apiUrl+"/pv-api/transport/",r)}updateTransport(r,o){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${o}`,r)}deleteTransport(r){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(r){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}EmployeeIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,o)}addEmployee(r){return this.http.post(this.apiUrl+"/pv-api/employee/",r)}updateEmployee(r,o){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${o}`,r)}deleteEmployee(r){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(r){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}CustomerIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,o)}addCustomer(r){return this.http.post(this.apiUrl+"/pv-api/customer/",r)}updateCustomer(r,o){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${o}`,r)}deleteCustomer(r){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(r){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${r}`)}UserIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${r}`,o)}addUser(r){return this.http.post(this.apiUrl+"/pv-api/user/",r)}updateUser(r,o){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${o}`,r)}deleteUser(r){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${r}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(r){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${r}`)}addPermissionGroup(r){return this.http.post(this.apiUrl+"/pv-api/group/",r)}updatePermissionGroup(r,o){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${o}`,r)}deletePermissionGroup(r){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(r){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`)}DealerIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,o)}addDealer(r){return this.http.post(this.apiUrl+"/pv-api/dealer/",r)}updateDealer(r,o){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${o}`,r)}deleteDealer(r){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+r)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${r}`)}TermsIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,o)}addTerms(r){return this.http.post(this.apiUrl+"/pv-api/terms/",r)}updateTerms(r,o){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${o}`,r)}deleteTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${r}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(r){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${r}`)}DepartmentIsActive(r,o){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${r}`,o)}addDepartment(r){return this.http.post(this.apiUrl+"/pv-api/department/",r)}updateDepartment(r,o){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${o}`,r)}deleteDepartment(r){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${r}`)}}return g.\u0275fac=function(r){return new(r||g)(_.LFG(u.eN))},g.\u0275prov=_.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},61698:(U,y,d)=>{d.r(y),d.d(y,{AddStockTransferRequestModule:()=>ct});var h=d(36895),_=d(4392),u=d(24006),v=d(68675),g=d(54004),t=d(94650),r=d(42236),o=d(97185),l=d(25062),x=d(43443),f=d(47957),C=d(3238),T=d(59549),b=d(44144);function A(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"mat-option",52),t.NdJ("onSelectionChange",function(){t.CHM(e);const s=t.oxw().$implicit,a=t.oxw();return t.KtG(a.oncheck(s))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.title),t.xp6(1),t.Oqu(null==e?null:e.title)}}function S(i,c){if(1&i&&(t.ynx(0),t.YNc(1,A,2,2,"mat-option",51),t.BQk()),2&i){const e=c.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function w(i,c){1&i&&(t.TgZ(0,"mat-option",55)(1,"a",56),t._uU(2,"+ Add Branch"),t.qZA()()),2&i&&t.Q6J("value","No data found")}function M(i,c){1&i&&(t.TgZ(0,"mat-option",57),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function $(i,c){if(1&i&&(t.ynx(0),t.YNc(1,w,3,1,"mat-option",53),t.YNc(2,M,2,0,"mat-option",54),t.BQk()),2&i){const e=c.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==n.fromBranchControl.value?null:n.fromBranchControl.value.length)<3)}}function F(i,c){1&i&&(t.TgZ(0,"span",58),t._uU(1,"Select From Branch "),t.qZA())}function O(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"mat-option",52),t.NdJ("onSelectionChange",function(){t.CHM(e);const s=t.oxw().$implicit,a=t.oxw();return t.KtG(a.oncheck1(s))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("value",null==e?null:e.title),t.xp6(1),t.Oqu(null==e?null:e.title)}}function I(i,c){if(1&i&&(t.ynx(0),t.YNc(1,O,2,2,"mat-option",51),t.BQk()),2&i){const e=c.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function P(i,c){1&i&&(t.TgZ(0,"mat-option",55)(1,"a",56),t._uU(2,"+ Add Branch"),t.qZA()()),2&i&&t.Q6J("value","No data found")}function N(i,c){1&i&&(t.TgZ(0,"mat-option",57),t._uU(1,"Please Enter 1 or more characters"),t.qZA())}function B(i,c){if(1&i&&(t.ynx(0),t.YNc(1,P,3,1,"mat-option",53),t.YNc(2,N,2,0,"mat-option",54),t.BQk()),2&i){const e=c.ngIf,n=t.oxw();t.xp6(1),t.Q6J("ngIf",0===e.length),t.xp6(1),t.Q6J("ngIf",(null==n.toBranchControl.value?null:n.toBranchControl.value.length)<3)}}function L(i,c){1&i&&(t.TgZ(0,"span",58),t._uU(1,"Select To Branch "),t.qZA())}function J(i,c){1&i&&(t.TgZ(0,"span",58),t._uU(1,"Select Request Date "),t.qZA())}function D(i,c){1&i&&(t.TgZ(0,"span",58),t._uU(1,"Enter Transfer Request Number "),t.qZA())}function Q(i,c){1&i&&(t.TgZ(0,"span",58),t._uU(1,"select Status"),t.qZA())}function E(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"a",59)(1,"input",60,61),t.NdJ("change",function(){const a=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.SelectedProduct(null==a?null:a.id))})("change",function(){t.CHM(e);const s=t.MAs(2),a=t.oxw();return t.KtG(a.getSubCategory(s.value))}),t.qZA(),t.TgZ(3,"label",62),t.NdJ("click",function(s){t.CHM(e);const a=t.oxw();return t.KtG(a.onLabelClick(s))}),t._uU(4),t.qZA()()}if(2&i){const e=c.$implicit,n=c.index;t.xp6(1),t.Q6J("value",e.id)("id","checkboxCat-"+n),t.xp6(2),t.Q6J("for","checkboxCat-"+n),t.xp6(1),t.Oqu(null==e?null:e.title)}}function Y(i,c){if(1&i&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Oqu(e.selectData.length+" Category Selected")}}function V(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"a",59)(1,"input",60),t.NdJ("change",function(){const a=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.SelectedProductSubCat(null==a?null:a.id))}),t.qZA(),t.TgZ(2,"label",62),t.NdJ("click",function(s){t.CHM(e);const a=t.oxw();return t.KtG(a.onLabelClick(s))}),t._uU(3),t.qZA()()}if(2&i){const e=c.$implicit,n=c.index;t.xp6(1),t.Q6J("value",e.id)("id","checkboxSubCat-"+n),t.xp6(1),t.Q6J("for","checkboxSubCat-"+n),t.xp6(1),t.Oqu(null==e?null:e.title)}}function G(i,c){if(1&i&&(t.TgZ(0,"p"),t._uU(1),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.hij("",e.selectSubCate.length+" Sub Category Selected"," ")}}function K(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"span",63),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.addCart())}),t._uU(1,"Add Cart+"),t.qZA()}}function z(i,c){if(1&i){const e=t.EpF();t.O4$(),t.TgZ(0,"svg",77),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2);return t.KtG(s.addCart())}),t._UZ(1,"path",67)(2,"path",78),t.qZA()}}function H(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"mat-option",52),t.NdJ("onSelectionChange",function(){t.CHM(e);const s=t.oxw().$implicit,a=t.oxw(2).index,p=t.oxw();return t.KtG(p.oncheckVariant(s,a))})("onSelectionChange",function(){t.CHM(e);const s=t.oxw().$implicit,a=t.oxw(2).index,p=t.oxw();return t.KtG(p.variantChanged(s,a))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)),t.xp6(1),t.hij(" ",(null==e?null:e.product_title)+" "+(null==e?null:e.variant_name)," ")}}function j(i,c){if(1&i&&(t.ynx(0),t.YNc(1,H,2,2,"mat-option",51),t.BQk()),2&i){const e=c.$implicit;t.xp6(1),t.Q6J("ngIf",1==e.is_active)}}function W(i,c){if(1&i&&(t.ynx(0),t.YNc(1,j,2,1,"ng-container",11),t.BQk()),2&i){const e=t.oxw(2);t.xp6(1),t.Q6J("ngForOf",e.variantList)}}function X(i,c){1&i&&(t.TgZ(0,"mat-option",55)(1,"a",79),t._uU(2,"+add Product"),t.qZA()()),2&i&&t.Q6J("value","No data found")}function tt(i,c){1&i&&(t.TgZ(0,"mat-option",57),t._uU(1," Please Enter 3 or more characters "),t.qZA())}function et(i,c){if(1&i){const e=t.EpF();t.ynx(0),t.TgZ(1,"tr",64)(2,"td"),t._uU(3),t.qZA(),t.TgZ(4,"td")(5,"div")(6,"div",65),t.O4$(),t.TgZ(7,"svg",66),t.NdJ("click",function(){const a=t.CHM(e).index,p=t.oxw();return t.KtG(p.removeCart(a))}),t._UZ(8,"path",67)(9,"path",68),t.qZA()(),t.YNc(10,z,3,0,"svg",69),t.qZA()(),t.kcU(),t.TgZ(11,"td")(12,"input",70,71),t.NdJ("keyup",function(){const a=t.CHM(e).index,p=t.MAs(13),m=t.oxw();return t.KtG(m.getVariant(p.value,a,"barcode"))})("blur",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.hideSearch())}),t.qZA()(),t.TgZ(14,"td",72)(15,"div",73)(16,"mat-form-field",8)(17,"input",74),t.NdJ("input",function(s){const p=t.CHM(e).index,m=t.oxw();return t.KtG(m.getVariant(s.target.value,p,""))}),t.qZA(),t.TgZ(18,"mat-autocomplete",null,75),t.YNc(20,W,2,1,"ng-container",12),t.YNc(21,X,3,1,"mat-option",53),t.YNc(22,tt,2,0,"mat-option",54),t.qZA()()()(),t.TgZ(23,"td")(24,"input",76),t.NdJ("blur",function(){const a=t.CHM(e).index,p=t.oxw();return t.KtG(p.purchase4(a))}),t.qZA()()(),t.BQk()}if(2&i){const e=c.index,n=t.MAs(19),s=t.oxw();t.xp6(1),t.Q6J("formGroupName",e),t.xp6(2),t.Oqu(e+1+"."),t.xp6(7),t.Q6J("ngIf",s.isLastCart(e)),t.xp6(2),t.Q6J("value",void 0!==s.barcode[e]?s.barcode[e]:""),t.uIk("data-index",e),t.xp6(5),t.Q6J("formControl",s.myControl)("matAutocomplete",n),t.xp6(3),t.Q6J("ngIf",(null==s.myControl.value?null:s.myControl.value.length)>=1&&(null==s.myControl.value?null:s.myControl.value.length)>0),t.xp6(1),t.Q6J("ngIf",0===(null==s.variantList?null:s.variantList.length)),t.xp6(1),t.Q6J("ngIf",(null==s.myControl.value?null:s.myControl.value.length)<3)}}function rt(i,c){1&i&&(t.TgZ(0,"button",80),t._uU(1,"Submit"),t.qZA())}function nt(i,c){1&i&&(t.TgZ(0,"button",81),t._UZ(1,"span",82),t._uU(2,"\xa0 Submit"),t.qZA())}const q=function(i){return{"is-invalid":i}},R=function(){return{standalone:!0}},st=[{path:"",component:(()=>{class i{constructor(e,n,s,a,p,m){this.stockService=e,this.fb=n,this.router=s,this.toastrService=a,this.contactService=p,this.commonService=m,this.productOption=[],this.branch=[],this.fromBranchControl=new u.NI,this.toBranchControl=new u.NI,this.variantControl=new u.NI,this.variants=[],this.minDate="",this.maxDate="",this.myControl=new u.NI(""),this.variantList=[],this.categoryList=[],this.filteredCategoryList=[],this.searchCategory="",this.SubcategoryList=[],this.filteredSubCategoryList=[],this.searchSubCategory="",this.selectData=[],this.selectSubCate=[],this.isCart=!1,this.toBranch=[],this.loader=!1,this.search=!1,this.check=!1,this.srchData=[],this.barcode=[],this.searchs=[],this.productName=[],this.isProduct=!0}get f(){return this.stockTransferRequestForm.controls}ngOnInit(){const e=(new Date).toISOString().split("T")[0];this.stockTransferRequestForm=this.fb.group({from_branch:new u.NI("",[u.kI.required]),to_branch:new u.NI("",[u.kI.required]),request_date:new u.NI(e,[u.kI.required]),transfer_request_number:new u.NI(""),cart:this.fb.array([]),total_qty:new u.NI(""),total_product:new u.NI(""),status:new u.NI("")}),this.searchForm=this.fb.group({search:new u.NI}),this.filteredFromBranch=this.fromBranchControl.valueChanges.pipe((0,v.O)(""),(0,g.U)(s=>this._filter(s,!0))),this.filteredToBranch=this.toBranchControl.valueChanges.pipe((0,v.O)(""),(0,g.U)(s=>this._filterr(s,!0))),this.filteredVariants=this.variantControl.valueChanges.pipe((0,v.O)(""),(0,g.U)(s=>this._filtr(s,!0))),this.getBranch(),this.getCategory(),this.getprefix(),this.addCart();const n=localStorage.getItem("financialYear");this.stockTransferDateValidation(n)}getprefix(){this.stockService.getStockTransferRequestPrefix().subscribe(e=>{console.log(e),1==e.success?this.prefixNo=e.prefix:this.toastrService.error(e.msg)},e=>{this.toastrService.error(e.error.msg)})}getVariant(e,n,s){this.selectData.length>0||this.selectSubCate.length>0?(this.selectData.length>0?(this.category=JSON.stringify(this.selectData),console.log(this.category)):(this.category=void 0,console.log(this.category,"else part")),this.subcategory=this.selectSubCate.length>0?JSON.stringify(this.selectSubCate):void 0,this.stockService.filterVariant(this.category,this.subcategory,e).subscribe(a=>{console.log(a),this.variantList=a,console.log(this.variantList),"barcode"===s&&(this.oncheckVariant(a[0],n),this.myControl.setValue(a[0].product_title)),e&&(this.searchs=a,this.productOption=a,this.productName[n]=this.searchs[0]?.product_title,this.check=!0,console.log(this.searchs[0]?.variant_name),this.stockTransferRequestForm.get("cart").at(n).patchValue({})),console.log(this.stockTransferRequestForm.value)})):this.stockService.filterVariant(this.category,this.subcategory,e).subscribe(a=>{console.log(a),this.variantList=a,console.log(this.variantList),"barcode"===s&&(this.oncheckVariant(a[0],n),this.myControl.setValue(a[0].product_title)),e&&(this.searchs=a,this.productOption=a,this.productName[n]=this.searchs[0]?.product_title,this.check=!0,this.stockTransferRequestForm.get("cart")?.at(n).patchValue({}))})}stockTransferDateValidation(e){const n=this.stockTransferRequestForm.get("request_date"),{formattedMinDate:s,formattedMaxDate:a}=this.commonService.setMinMaxDates(n,e);this.minDate=s,this.maxDate=a}getCategory(){this.stockService.getCategory().subscribe(e=>{this.categoryList=e,this.filteredCategoryList=[...this.categoryList]})}filterCategory(){this.filteredCategoryList=""===this.searchCategory.trim()?[...this.categoryList]:this.categoryList.filter(e=>e?.title?.toLowerCase().includes(this.searchCategory.toLowerCase()))}getSubCategory(e){this.stockService.getSubcategoryByCategory(e).subscribe(n=>{this.SubcategoryList=n,this.filteredSubCategoryList=[...this.SubcategoryList]})}filterSubCategory(){this.filteredSubCategoryList=""===this.searchSubCategory.trim()?[...this.SubcategoryList]:this.SubcategoryList.filter(e=>e?.title?.toLowerCase().includes(this.searchSubCategory.toLowerCase()))}SelectedProduct(e){const n=this.selectData.indexOf(e);-1!==n?this.selectData.splice(n,1):this.selectData.push(e),console.log(this.selectData,"selected data"),this.getVariant("","","")}SelectedProductSubCat(e){const n=this.selectSubCate.indexOf(e);-1!==n?this.selectSubCate.splice(n,1):this.selectSubCate.push(e),console.log(this.selectSubCate,"selected data"),this.getVariant("","","")}get from_branch(){return this.stockTransferRequestForm.get("from_branch")}get to_branch(){return this.stockTransferRequestForm.get("to_branch")}get status(){return this.stockTransferRequestForm.get("status")}cart(){return this.fb.group({barcode:0,quantity:1})}getCart(){return this.stockTransferRequestForm.get("cart")}addCart(){this.getCart().push(this.cart()),this.isCart=!1}removeCart(e){this.getCart().removeAt(e),0==this.stockTransferRequestForm?.value?.cart?.length&&(this.isCart=!0)}getBranch(){this.stockService.getBranch().subscribe(e=>{this.branch=e,this.toBranch=e})}oncheck(e){const n=e.id;this.userType=e?.user_type,this.stockTransferRequestForm.patchValue({from_branch:n})}oncheck1(e){const n=e.id;this.userType=e?.user_type,this.stockTransferRequestForm.patchValue({to_branch:n})}oncheckVariant(e,n){const s=e.id;console.log(e);const a=this.stockTransferRequestForm.get("cart").at(n);e&&a.patchValue({barcode:s,item_name:e?.product_title,quantity:e.batch[0]?.stock})}submit(){if(console.log(this.stockTransferRequestForm.value),this.stockTransferRequestForm.valid){console.log("valid");let e=new FormData;e.append("from_branch",this.stockTransferRequestForm.get("from_branch")?.value),e.append("to_branch",this.stockTransferRequestForm.get("to_branch")?.value),e.append("request_date",this.stockTransferRequestForm.get("request_date")?.value),e.append("transfer_request_number",this.stockTransferRequestForm.get("transfer_request_number")?.value),e.append("total_qty",this.stockTransferRequestForm.get("total_qty")?.value),e.append("total_product",this.stockTransferRequestForm.get("total_product")?.value),e.append("status",this.stockTransferRequestForm.get("status")?.value);const n=this.stockTransferRequestForm.get("cart"),s=[];n.controls.forEach(a=>{const p=a,m={};Object.keys(p.controls).forEach(k=>{const Z=p.controls[k];m[k]=isNaN(Z.value)?Z.value:parseFloat(Z.value)}),s.push(m)}),e.append("cart",JSON.stringify(s)),this.stockService.addStockTransferRequest(e).subscribe(a=>{console.log(a),this.getRes=a,this.getRes.success?(this.loader=!1,this.toastrService.success(this.getRes.msg),this.router.navigate(["//inventory/list-stock-transfer-request"])):this.loader=!1},a=>{this.loader=!1})}else this.loader=!1,this.stockTransferRequestForm.markAllAsTouched(),this.toastrService.error("Please Fill All The Required Fields"),this.toastrService.error("Please Fill All The Required Fields")}get request_date(){return this.stockTransferRequestForm.get("request_date")}get refund_status(){return this.stockTransferRequestForm.get("refund_status")}get transfer_request_number(){return this.stockTransferRequestForm.get("transfer_request_number")}get note(){return this.stockTransferRequestForm.get("note")}_filter(e,n){const s="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),a=this.branch.filter(n?p=>p?.title?.toLowerCase().includes(s):p=>!p?.title?.toLowerCase().includes(s));return!n&&0===a.length&&a.push({title:"No data found"}),a}_filterr(e,n){const s="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),a=this.toBranch.filter(n?p=>p?.title?.toLowerCase().includes(s):p=>!p?.title?.toLowerCase().includes(s));return!n&&0===a.length&&a.push({title:"No data found"}),a}_filtr(e,n){const s="string"==typeof e?e?.toLowerCase():e?.toString().toLowerCase(),a=n?this.variants?.filter(p=>p&&(p.product_title?.toLowerCase().includes(s)||p.sku?.toLowerCase().includes(s)||p.variant_name?.toLowerCase().includes(s)||p.id?.toString().includes(s))):this.variants?.filter(p=>p&&!(p.product_title?.toLowerCase().includes(s)||p.sku?.toLowerCase().includes(s)||p.variant_name?.toLowerCase().includes(s)||p.id?.toString().includes(s)));return!n&&(!a||0===a.length)&&a.push({product_title:"No data found"}),a||[]}isLastCart(e){return e===this.getCart().controls.length-1}clearSearch(){this.searchForm.reset(),this.search=!1}hideSearch(){this.searchs=void 0}onOptionSelected(e){}displayFn(e){return e?e.product_title:""}variantChanged(e,n){console.log(e),this.barcode[n]=e.sku,this.v_id=e.id,this.stockTransferRequestForm.get("cart").at(n).patchValue({barcode:e.id}),this.getVariant("","","")}open(){this.isProduct=!1}calculateTotalQty(){let e=0;for(let n=0;n<this.getCart().controls.length;n++){const s=this.getCart().controls[n].get("quantity")||0;s&&(e+=+s.value||0)}return e}calculateTotalProduct(){let e=0;return e=this.getCart().controls.length,e}onLabelClick(e){e.stopPropagation()}clearForm(){this.stockTransferRequestForm.reset()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.q),t.Y36(u.qu),t.Y36(_.F0),t.Y36(o._W),t.Y36(l.y),t.Y36(x.R))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-add-stock-transfer-request"]],decls:148,vars:60,consts:[[1,"page-header"],[1,"page-title"],["id","purchaseForm",1,"card"],[1,"card-body"],[3,"formGroup","ngSubmit"],[1,"row"],[1,"col-lg-3","col-md-3","col-12"],[1,"form-group"],[1,"w-100",2,"padding","0","width","100%","min-width","100%","border-top","none"],["type","text","placeholder","Select From Branch","aria-label","from_branch","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-danger",4,"ngIf"],["type","text","placeholder","Select To Branch","aria-label","to_branch","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","ngClass"],["autoActiveFirstOption",""],["toBranchAuto","matAutocomplete"],[1,"col-lg-3","col-sm-3","col-12"],["type","date","formControlName","request_date",3,"ngClass"],["type","text","formControlName","transfer_request_number",3,"ngModel","ngClass"],["formControlName","status",3,"ngModel","ngClass"],["value","","selected","","disabled",""],["value","Open"],["value","Approved"],["value","Rejected"],["value","Dispatched"],["value","Received"],[1,"card"],[1,"col-lg-4","col-sm-4","col-12"],[2,"color","#FF9F43","font-size","16px"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"table-responsive"],[1,"table","datanew"],["colspan","3"],["class","debitIntoCart",3,"click",4,"ngIf"],["formArrayName","cart"],[2,"background","rgba(145, 158, 171, 0.32)"],[1,"text-start"],[1,"col-lg-6","my-3"],[1,"total-order"],[1,"total"],["type","text","formControlName","total_product",1,"input",2,"display","none",3,"ngModel"],["type","text","formControlName","total_qty",1,"input",2,"display","none",3,"ngModel"],[1,"col-lg-12"],["class","btn btn-submit me-2",4,"ngIf"],["class","btn btn-submit me-2","type","submit","disabled","",4,"ngIf"],["routerLink","//inventory/list-stock-transfer-request",1,"btn","btn-cancel","text-white"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[3,"value",4,"ngIf"],["class","is-loading",4,"ngIf"],[3,"value"],["routerLink","//masters/branch",2,"color","#FF9F43"],[1,"is-loading"],[1,"text-danger"],[1,"dropdown-item"],["type","checkbox",3,"value","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[1,"debitIntoCart",3,"click"],[3,"formGroupName"],[1,"me-2"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x-circle",2,"color","red",3,"click"],["d","M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],["style","color:green","xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","class","bi bi-plus-circle","viewBox","0 0 16 16",3,"click",4,"ngIf"],["type","text","placeholder","Search Barcode",1,"input",3,"value","keyup","blur"],["id",""],["colspan","1"],[1,"form-group",2,"margin-bottom","0"],["type","text","placeholder","Search Product","aria-label","Search Products","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete","input"],["autos","matAutocomplete"],["type","number","formControlName","quantity",1,"input",3,"blur"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-plus-circle",2,"color","green",3,"click"],["d","M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"],["routerLink","//product/addproduct",2,"color","#FF9F43"],[1,"btn","btn-submit","me-2"],["type","submit","disabled","",1,"btn","btn-submit","me-2"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm"]],template:function(e,n){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4"),t._uU(3,"Add Stock Transfer Request"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Add/New Stock Transfer Request"),t.qZA()()(),t.TgZ(6,"div",2)(7,"div",3)(8,"form",4),t.NdJ("ngSubmit",function(){return n.submit()}),t.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"label"),t._uU(13,"From Branch*"),t.qZA(),t.TgZ(14,"mat-form-field",8),t._UZ(15,"input",9),t.TgZ(16,"mat-autocomplete",null,10),t.YNc(18,S,2,1,"ng-container",11),t.ALo(19,"async"),t.YNc(20,$,3,2,"ng-container",12),t.ALo(21,"async"),t.qZA()(),t.YNc(22,F,2,0,"span",13),t.qZA()(),t.TgZ(23,"div",6)(24,"div",7)(25,"label"),t._uU(26,"To Branch*"),t.qZA(),t.TgZ(27,"mat-form-field",8),t._UZ(28,"input",14),t.TgZ(29,"mat-autocomplete",15,16),t.YNc(31,I,2,1,"ng-container",11),t.ALo(32,"async"),t.YNc(33,B,3,2,"ng-container",12),t.ALo(34,"async"),t.qZA()(),t.YNc(35,L,2,0,"span",13),t.qZA()(),t.TgZ(36,"div",17)(37,"div",7)(38,"label"),t._uU(39,"Request Date*"),t.qZA(),t._UZ(40,"input",18),t.YNc(41,J,2,0,"span",13),t.qZA()(),t.TgZ(42,"div",17)(43,"div",7)(44,"label"),t._uU(45,"Transfer Request Number"),t.qZA(),t._UZ(46,"input",19),t.YNc(47,D,2,0,"span",13),t.qZA()(),t.TgZ(48,"div",17)(49,"div",7)(50,"label"),t._uU(51,"Status"),t.qZA(),t.TgZ(52,"select",20)(53,"option",21),t._uU(54,"Select Status"),t.qZA(),t.TgZ(55,"option",22),t._uU(56,"Open"),t.qZA(),t.TgZ(57,"option",23),t._uU(58,"Approved"),t.qZA(),t.TgZ(59,"option",24),t._uU(60,"Rejected"),t.qZA(),t.TgZ(61,"option",25),t._uU(62,"Dispatched"),t.qZA(),t.TgZ(63,"option",26),t._uU(64,"Received"),t.qZA()(),t.YNc(65,Q,2,0,"span",13),t.qZA()()(),t.TgZ(66,"div",27)(67,"div",3)(68,"div",5)(69,"div",28)(70,"div",1)(71,"p",29),t._uU(72,"Product Details"),t.qZA()()(),t.TgZ(73,"div",28)(74,"div",7)(75,"div",30)(76,"button",31),t._uU(77,"Select Category"),t.qZA(),t.TgZ(78,"ul",32)(79,"li")(80,"input",33),t.NdJ("ngModelChange",function(a){return n.searchCategory=a})("ngModelChange",function(){return n.filterCategory()}),t.qZA()(),t.TgZ(81,"li"),t.YNc(82,E,5,4,"a",34),t.qZA()()(),t.YNc(83,Y,2,1,"p",12),t.qZA()(),t.TgZ(84,"div",28)(85,"div",7)(86,"div",30)(87,"button",31),t._uU(88,"Select Sub Category"),t.qZA(),t.TgZ(89,"ul",32)(90,"li")(91,"input",33),t.NdJ("ngModelChange",function(a){return n.searchSubCategory=a})("ngModelChange",function(){return n.filterSubCategory()}),t.qZA()(),t.TgZ(92,"li"),t.YNc(93,V,4,4,"a",34),t.qZA()()(),t.YNc(94,G,2,1,"p",12),t.qZA()(),t.TgZ(95,"div",35)(96,"table",36)(97,"thead")(98,"tr")(99,"th"),t._uU(100,"#"),t.qZA(),t._UZ(101,"th"),t.TgZ(102,"th"),t._uU(103,"Barcode/SKU"),t.qZA(),t.TgZ(104,"th"),t._uU(105,"Product Name"),t.qZA(),t.TgZ(106,"th"),t._uU(107,"QTY"),t.qZA(),t._UZ(108,"th"),t.qZA(),t.TgZ(109,"tr")(110,"th",37),t.YNc(111,K,2,0,"span",38),t.qZA()()(),t.TgZ(112,"tbody"),t.ynx(113,39),t.YNc(114,et,25,10,"ng-container",11),t.BQk(),t.TgZ(115,"tr",40),t._UZ(116,"td")(117,"td")(118,"td"),t.TgZ(119,"td",41)(120,"strong"),t._uU(121,"Total"),t.qZA()(),t.TgZ(122,"td",41),t._uU(123),t.qZA()()()()(),t.TgZ(124,"div",5),t._UZ(125,"div",42),t.TgZ(126,"div",42)(127,"div",7)(128,"div",43)(129,"ul")(130,"li",44)(131,"h4"),t._uU(132,"Total Product"),t.qZA(),t.TgZ(133,"h5"),t._uU(134),t._UZ(135,"input",45),t.qZA()(),t.TgZ(136,"li",44)(137,"h4"),t._uU(138,"Total QTY"),t.qZA(),t.TgZ(139,"h5"),t._uU(140),t._UZ(141,"input",46),t.qZA()()()()()()()()()(),t.TgZ(142,"div",47)(143,"div",47),t.YNc(144,rt,2,0,"button",48),t.YNc(145,nt,3,0,"button",49),t.TgZ(146,"a",50),t._uU(147,"Cancel"),t.qZA()()()()()()),2&e){const s=t.MAs(17),a=t.MAs(30);t.xp6(8),t.Q6J("formGroup",n.stockTransferRequestForm),t.xp6(7),t.Q6J("formControl",n.fromBranchControl)("matAutocomplete",s)("ngClass",t.VKq(48,q,n.f.from_branch.touched&&n.f.from_branch.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(19,40,n.filteredFromBranch)),t.xp6(2),t.Q6J("ngIf",t.lcZ(21,42,n.filteredFromBranch)),t.xp6(2),t.Q6J("ngIf",n.from_branch&&n.from_branch.invalid&&n.from_branch.touched),t.xp6(6),t.Q6J("formControl",n.toBranchControl)("matAutocomplete",a)("ngClass",t.VKq(50,q,n.f.to_branch.touched&&n.f.to_branch.invalid)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(32,44,n.filteredToBranch)),t.xp6(2),t.Q6J("ngIf",t.lcZ(34,46,n.filteredToBranch)),t.xp6(2),t.Q6J("ngIf",n.to_branch&&n.to_branch.invalid&&n.to_branch.touched),t.xp6(5),t.Q6J("ngClass",t.VKq(52,q,n.f.request_date.touched&&n.f.request_date.invalid)),t.uIk("min",n.minDate)("max",n.maxDate),t.xp6(1),t.Q6J("ngIf",n.request_date&&n.request_date.invalid&&n.request_date.touched),t.xp6(5),t.Q6J("ngModel",n.prefixNo)("ngClass",t.VKq(54,q,n.f.transfer_request_number.touched&&n.f.transfer_request_number.invalid)),t.xp6(1),t.Q6J("ngIf",n.transfer_request_number&&n.transfer_request_number.invalid&&n.transfer_request_number.touched),t.xp6(5),t.Q6J("ngModel",n.prefixNo)("ngClass",t.VKq(56,q,n.f.status.touched&&n.f.status.invalid)),t.xp6(13),t.Q6J("ngIf",n.status&&n.status.invalid&&n.status.touched),t.xp6(15),t.Q6J("ngModel",n.searchCategory)("ngModelOptions",t.DdM(58,R)),t.xp6(2),t.Q6J("ngForOf",n.filteredCategoryList),t.xp6(1),t.Q6J("ngIf",n.selectData.length>0),t.xp6(8),t.Q6J("ngModel",n.searchSubCategory)("ngModelOptions",t.DdM(59,R)),t.xp6(2),t.Q6J("ngForOf",n.filteredSubCategoryList),t.xp6(1),t.Q6J("ngIf",n.selectSubCate.length>0),t.xp6(17),t.Q6J("ngIf",n.isCart),t.xp6(3),t.Q6J("ngForOf",n.getCart().controls),t.xp6(9),t.Oqu(n.calculateTotalQty()),t.xp6(11),t.hij("",n.calculateTotalProduct()," "),t.xp6(1),t.Q6J("ngModel",n.calculateTotalProduct()),t.xp6(5),t.hij(" ",n.calculateTotalQty()," "),t.xp6(1),t.Q6J("ngModel",n.calculateTotalQty()),t.xp6(3),t.Q6J("ngIf",!n.loader),t.xp6(1),t.Q6J("ngIf",n.loader)}},dependencies:[h.mk,h.sg,h.O5,_.yS,u._Y,u.YN,u.Kr,u.Fj,u.wV,u.EJ,u.JJ,u.JL,u.On,u.oH,u.sg,u.u,u.x0,u.CE,f.XC,f.ZL,C.ey,T.KE,b.Nt,h.Ov],styles:[".mat-autocomplete-trigger.mat-input-element.mat-form-field-autofill-control.ng-tns-c116-0.ng-untouched.ng-pristine.ng-valid.cdk-text-field-autofill-monitored.is-invalid[_ngcontent-%COMP%], .ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%], .ng-pristine.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=datetime-local][_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:40%;font-size:14px;font-weight:500;color:#637381;padding:10px 8px;border-radius:5px}.example-form[_ngcontent-%COMP%]{min-width:150px;max-width:500px;width:100%}.example-full-width[_ngcontent-%COMP%]{width:100%}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]{position:relative;display:inline-block}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .selected-items[_ngcontent-%COMP%]{display:inline-block;padding:6px;border:1px solid #ccc;border-radius:4px;background-color:#fff;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]{position:absolute;top:100%;left:0;z-index:9999;width:100%;padding:6px;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;background-color:#fff;box-shadow:0 2px 4px #0003}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{padding:6px;cursor:pointer}.custom-dropdown[_ngcontent-%COMP%]   .dropdown-list[_ngcontent-%COMP%]   .dropdown-list-container[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover{background-color:#f1f1f1}.cdk-overlay-pane[_ngcontent-%COMP%]{width:300.85px!important}a[_ngcontent-%COMP%]{text-decoration:none;color:#ff9f43}@media (max-width: 1023px){h5[_ngcontent-%COMP%]{font-size:13px}}.table[_ngcontent-%COMP%]   th.product-name[_ngcontent-%COMP%]{width:40%}.table[_ngcontent-%COMP%]   th.qty[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   th.mrp[_ngcontent-%COMP%]{width:10%}.form-control[_ngcontent-%COMP%]{border-bottom:1px solid #9c9c9c;border-top:none;border-right:none;border-left:none;font-size:15px;color:#606060;border-radius:0;padding-left:2px}.space-text[_ngcontent-%COMP%]{white-space:pre-wrap!important}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),i})(),canActivate:[d(30597).l],data:{allowedRoles:["add_transferrequest"]}}];let at=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[_.Bz.forChild(st),_.Bz]}),i})();var lt=d(30906);let ct=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[h.ez,at,lt.ZU,u.u5,u.UX,f.Bb,T.lN,b.c]}),i})()},30597:(U,y,d)=>{d.d(y,{l:()=>t});var h=d(94650),_=d(4392),u=d(97185),v=d(42917),g=d(80927);let t=(()=>{class r{constructor(l,x,f,C,T){this.router=l,this.Arout=x,this.toastr=f,this.profileService=C,this.coreService=T}canActivate(l,x){const f=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(C=>{this.userDetails=C,this.permissions=this.userDetails?.permission}),f){const C=l.data.allowedRoles;console.log(C,"allowedRoles");const T=f.some(b=>C.includes(b.codename));if(console.log(T),this.coreService.getProfile().subscribe(b=>{this.userDetails=b,this.profileService.setUserDetails(this.userDetails);const A=b?.permission,S=this.profileService.getUserDetails();(!S||S.length!==A.length)&&(this.profileService.setUserPermission(A),window.location.reload())}),T)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return r.\u0275fac=function(l){return new(l||r)(h.LFG(_.F0),h.LFG(_.gz),h.LFG(u._W),h.LFG(v.J),h.LFG(g.p))},r.\u0275prov=h.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);