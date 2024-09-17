"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[27394],{25062:(S,P,p)=>{p.d(P,{y:()=>C});var _=p(92340),y=p(94650),d=p(80529);let C=(()=>{class f{constructor(e){this.http=e,this.apiUrl=`${_.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(e){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}SupplierIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,i)}addSupplier(e){return this.http.post(this.apiUrl+"/pv-api/supplier/",e)}updateSupplier(e,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,e)}deleteSupplier(e){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(e){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}VendorIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,i)}addVendor(e){return this.http.post(this.apiUrl+"/pv-api/vendor/",e)}updateVendor(e,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,e)}deleteVendor(e){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}PaymentTermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,i)}addPaymentTerms(e){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",e)}updatePaymentTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,e)}deletePaymentTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(e){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}TransportIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,i)}addTransport(e){return this.http.post(this.apiUrl+"/pv-api/transport/",e)}updateTransport(e,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,e)}deleteTransport(e){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(e){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}EmployeeIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,i)}addEmployee(e){return this.http.post(this.apiUrl+"/pv-api/employee/",e)}updateEmployee(e,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,e)}deleteEmployee(e){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(e){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}CustomerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,i)}addCustomer(e){return this.http.post(this.apiUrl+"/pv-api/customer/",e)}updateCustomer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,e)}deleteCustomer(e){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(e){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}UserIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${e}`,i)}addUser(e){return this.http.post(this.apiUrl+"/pv-api/user/",e)}updateUser(e,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,e)}deleteUser(e){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(e){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${e}`)}addPermissionGroup(e){return this.http.post(this.apiUrl+"/pv-api/group/",e)}updatePermissionGroup(e,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,e)}deletePermissionGroup(e){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(e){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}DealerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,i)}addDealer(e){return this.http.post(this.apiUrl+"/pv-api/dealer/",e)}updateDealer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,e)}deleteDealer(e){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+e)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}TermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,i)}addTerms(e){return this.http.post(this.apiUrl+"/pv-api/terms/",e)}updateTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,e)}deleteTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(e){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}DepartmentIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${e}`,i)}addDepartment(e){return this.http.post(this.apiUrl+"/pv-api/department/",e)}updateDepartment(e,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,e)}deleteDepartment(e){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}getCreditLimitByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${e}`)}}return f.\u0275fac=function(e){return new(e||f)(y.LFG(d.eN))},f.\u0275prov=y.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},53506:(S,P,p)=>{p.d(P,{x:()=>C});var _=p(92340),y=p(94650),d=p(80529);let C=(()=>{class f{constructor(e){this.http=e,this.apiUrl=`${_.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(e){return this.http.get(this.apiUrl+"/pv-api/supplier/?search="+e)}getPurchaseFY(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/purchase_order/";const u=[];if(e&&u.push(`financial_year=${e}`),i&&i.length>0){const h=JSON.stringify(i);console.log(h),console.log(h?.length),u.push(`branch=${h}`)}return u.length>0&&(a+="?"+u.join("&")),this.http.get(a)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}getPurchaseOrderByUserId(e){return this.http.get(this.apiUrl+"/pv-api/purchase_order/?user_id="+e)}addPurchase(e){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",e)}getPurchaseById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}PurchaseIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,i)}updatePurchase(e,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,e)}deletePurchase(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+e)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/material_inward/";const u=[];if(e&&u.push(`financial_year=${e}`),i&&i.length>0){const h=JSON.stringify(i);console.log(h),console.log(h?.length),u.push(`branch=${h}`)}return u.length>0&&(a+="?"+u.join("&")),this.http.get(a)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(e){return this.http.post(this.apiUrl+"/pv-api/material_inward/",e)}getMaterialById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getMaterialByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?user_id="}${e}`)}MaterialIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,i)}updateMaterial(e,i){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,e)}deleteMaterial(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getPurchaseBillFY(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/purchase_bill/";const u=[];if(e&&u.push(`financial_year=${e}`),i&&i.length>0){const h=JSON.stringify(i);console.log(h),console.log(h?.length),u.push(`branch=${h}`)}return u.length>0&&(a+="?"+u.join("&")),this.http.get(a)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(e){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",e)}getPurchaseBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getPurchaseBillByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?user_id="}${e}`)}PurchaseBillIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,i)}updatePurchaseBill(e,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,e)}deletePurchaseBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getDebitNotes(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/debit_note/";const u=[];if(e&&u.push(`financial_year=${e}`),i&&i.length>0){const h=JSON.stringify(i);console.log(h),console.log(h?.length),u.push(`branch=${h}`)}return u.length>0&&(a+="?"+u.join("&")),this.http.get(a)}addDebitNotes(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}getDebitNotesById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNotesIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,i)}updateDebitNotes(e,i){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,e)}deleteDebitNotes(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(e,i){console.log(i,"branch"),console.log(i.length,"branch");let a=this.apiUrl+"/pv-api/purchase_return/";const u=[];if(e&&u.push(`financial_year=${e}`),i&&i.length>0){const h=JSON.stringify(i);console.log(h),console.log(h?.length),u.push(`branch=${h}`)}return u.length>0&&(a+="?"+u.join("&")),this.http.get(a)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",e)}getPurchaseReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}PurchaseReturnIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,i)}updatePurchaseReturn(e,i){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,e)}deletePurchaseReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}filterVariant(e,i,a,u){let h=this.apiUrl+"/pv-api/purchase_product_filter/";const t=[];return e&&t.push(`supplier=${e}`),i&&t.push(`category=${i}`),a&&t.push(`subcategory=${a}`),u&&t.push(`search=${u}`),t.length>0&&(h+="?"+t.join("&")),this.http.get(h)}purchaseReturnStatusUpdate(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return_status_update/",e)}}return f.\u0275fac=function(e){return new(e||f)(y.LFG(d.eN))},f.\u0275prov=y.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},27394:(S,P,p)=>{p.r(P),p.d(P,{PurchaseOutstandingModule:()=>pt});var _=p(36895),y=p(4392),d=p(24006),C=p(94327),f=p(96166),x=p(12983),e=p.n(x),i=p(68675),a=p(54004),u=p(78372),h=p(80574),t=p(94650),L=p(97185),B=p(25062),N=p(53506),w=p(42917),J=p(87719),E=p(43443),D=p(47957),b=p(3238),A=p(59549),T=p(99602),I=p(54333),F=p(54040);function Y(l,g){if(1&l){const r=t.EpF();t.TgZ(0,"a",64)(1,"input",65,66),t.NdJ("change",function(n){const c=t.CHM(r).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(c.id,n.target.checked))}),t.qZA(),t.TgZ(3,"label",67),t.NdJ("click",function(n){t.CHM(r);const o=t.oxw(2);return t.KtG(o.onLabelClick(n))}),t._uU(4),t.qZA()()}if(2&l){const r=g.$implicit,s=g.index,n=t.oxw(2);t.xp6(1),t.Q6J("value",r.id)("checked",n.selectData.includes(r.id))("id","checkboxCat-"+s),t.xp6(2),t.Q6J("for","checkboxCat-"+s),t.xp6(1),t.Oqu(r.title)}}function R(l,g){if(1&l&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&l){const r=t.oxw(2);t.xp6(1),t.Oqu(r.selectData.length+" Selected")}}const q=function(){return{standalone:!0}};function Q(l,g){if(1&l){const r=t.EpF();t.TgZ(0,"div",57)(1,"div",58)(2,"button",59),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",60)(5,"li")(6,"input",61),t.NdJ("ngModelChange",function(n){t.CHM(r);const o=t.oxw();return t.KtG(o.searchBranch=n)})("ngModelChange",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,Y,5,5,"a",62),t.qZA()()(),t.TgZ(9,"div",63),t.YNc(10,R,2,1,"span",42),t.qZA()()}if(2&l){const r=t.oxw();t.xp6(6),t.Q6J("ngModel",r.searchBranch)("ngModelOptions",t.DdM(4,q)),t.xp6(2),t.Q6J("ngForOf",r.filteredBranchList),t.xp6(2),t.Q6J("ngIf",r.selectData.length>0)}}function V(l,g){if(1&l){const r=t.EpF();t.TgZ(0,"mat-option",68),t.NdJ("blur",function(){const o=t.CHM(r).$implicit,c=t.oxw();return t.KtG(c.oncheckSupplier(null==o?null:o.id))}),t._uU(1),t.qZA()}if(2&l){const r=g.$implicit;t.Q6J("value",r),t.xp6(1),t.hij("",null==r?null:r.name," ")}}const H=function(l){return{"font-size":l}};function k(l,g){if(1&l&&(t.TgZ(0,"div",69)(1,"div",70)(2,"div",71)(3,"div",72)(4,"h4",73),t._uU(5),t.ALo(6,"number"),t.qZA(),t.TgZ(7,"h5"),t._uU(8,"Total Payable Amount"),t.qZA()()()()()),2&l){const r=t.oxw();let s;t.xp6(4),t.Q6J("ngStyle",t.VKq(5,H,(null==r.purchaseOutstanding||null==r.purchaseOutstanding.Total_Amount_Payable||null==(s=r.purchaseOutstanding.Total_Amount_Payable.toString())?null:s.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(6,2,null==r.purchaseOutstanding?null:r.purchaseOutstanding.Total_Amount_Payable,"1.2-2"),"")}}function G(l,g){if(1&l&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.ALo(5,"date"),t.qZA(),t.TgZ(6,"td"),t._uU(7),t.ALo(8,"date"),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()()),2&l){const r=g.$implicit,s=g.index;t.xp6(2),t.Oqu(s+1+"."),t.xp6(2),t.Oqu(t.xi3(5,6,r.supplier_bill_date,"shortDate")),t.xp6(3),t.Oqu(t.xi3(8,9,r.due_date,"shortDate")),t.xp6(3),t.Oqu(r.supplier_bill_no),t.xp6(2),t.Oqu(r.pending_amount),t.xp6(2),t.Oqu(r.note)}}const j=function(l,g){return{itemsPerPage:l,currentPage:g}};function K(l,g){if(1&l&&(t.TgZ(0,"tbody"),t.YNc(1,G,15,12,"tr",74),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&l){const r=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,r.purchaseOutstandingList,r.key,r.reverse),t.WLB(8,j,r.itemsPerPage,r.p)))}}function W(l,g){1&l&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",75)(3,"p",76),t._uU(4,"Data not available"),t.qZA()()()())}const z=[{path:"",component:(()=>{class l{constructor(r,s,n,o,c,m,U,$,v){this.router=r,this.fb=s,this.toastr=n,this.contactService=o,this.purchaseService=c,this.cs=m,this.datepipe=U,this.reportService=$,this.commonService=v,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new d.NI(""),this.isAdmin=!1,this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.supplierList=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let v=localStorage.getItem("financialYear");console.warn(JSON.parse(v));let O=JSON.parse(v);this.fyID=O}this.financialYear=localStorage.getItem("financialYear");const{minDate:r,maxDate:s}=this.commonService.determineMinMaxDates(this.financialYear);this.minDate=r,this.maxDate=s,this.cs.userDetails$.subscribe(v=>{this.isAdmin="admin"==v.role,this.getBranch()}),this.cs.userDetails$.subscribe(v=>{this.userDetails=v,console.log(v),this.userName=v?.username});const n=new Date,m=(n.getMonth(),n.getFullYear(),new Date(n));m.setDate(n.getDate()-14);const U=this.formatDate(m),$=this.formatDate(n);this.purchaseOutstandingform=new d.cw({start:new d.NI(U,this.commonService.dateRangeValidator(this.financialYear)),end:new d.NI($,this.commonService.dateRangeValidator(this.financialYear)),supplier_id:new d.NI}),this.commonService.validateAndClearDates(this.purchaseOutstandingform,this.minDate,this.maxDate),this.startDate=this.purchaseOutstandingform.value?.start,this.endDate=this.purchaseOutstandingform.value?.end,this.supplierId=this.purchaseOutstandingform.value?.supplier_id,this.getPurchaseOutstanding(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,i.O)(""),(0,a.U)(v=>{const O="string"==typeof v?v:v?.name;return O?this._filter(O):this.suppliers.slice()})),this.supplierControl.valueChanges.subscribe(v=>{v.length>=3?this.getSupplier(v):(this.supplierList=[],this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,i.O)(""),(0,a.U)(O=>this._filter(O))))})}formatDate(r){return this.datepipe.transform(r,"yyyy-MM-dd")||""}_filter(r){const s=r?r.toLowerCase():"";return console.log(s),this.supplierList.filter(n=>n?.name.toLowerCase().includes(s)||n?.company_name?.toLowerCase().includes(s))}displayFn(r){return r&&r?.name?r?.name:""}search(){if(""===this.titlee)this.getPurchaseOutstanding();else{const r=this.titlee.toLocaleLowerCase();this.purchaseOutstandingList=this.purchaseOutstandingList.filter(s=>{const n=s?.supplier_bill_no.toLocaleLowerCase(),o=s?.pending_amount.toLocaleLowerCase()||"";return!(!n.includes(r)&&!o.includes(r))})}}sort(r){this.key=r,this.reverse=!this.reverse}selectAll(r){this.countryList.forEach(r?s=>{s.isSelected=!1}:s=>{s.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(r,s,n){const o=(r-1)*s;return`Showing ${o+1}\u2013${Math.min(o+s-1,n-1)+1} of ${n} results`}getPurchaseOutstanding(){this.reportService.getPurchaseOutstanding(this.startDate,this.endDate,this.supplierId,this.fyID,this.selectData).subscribe(r=>{console.warn(r),this.purchaseOutstanding=r,this.purchaseOutstandingList=r?.purchasepill,console.log(this.purchaseOutstandingList)},r=>{this.toastr.error(r.message)})}oncheckSupplier(r){console.log(r),this.dataId=r,this.purchaseOutstandingform.patchValue({supplier_id:this.dataId}),console.warn(this.purchaseOutstandingform.value),this.supplierId=this.purchaseOutstandingform.value?.supplier_id,this?.getPurchaseOutstanding()}getSelectedPurchaseOutstandingDates(){console.log(this.purchaseOutstandingform.value);const r=this.datepipe.transform(this.purchaseOutstandingform.value.start,"yyyy-MM-dd"),s=this.datepipe.transform(this.purchaseOutstandingform.value.end,"yyyy-MM-dd");console.log(r),console.log(s),this.startDate=r,this.endDate=s,this?.getPurchaseOutstanding()}getSupplier(r){this.reportService.getSupplier(r).pipe((0,u.b)(2e3)).subscribe(s=>{this.supplierList=s,this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,i.O)(""),(0,a.U)(n=>this._filter(n)))})}generatePDFAgain(){const r=new f.default,o=`Date Range From: ${this.startDate} - ${this.endDate}`,c=`User: ${this.userName}`;r.setFontSize(12),r.setTextColor(33,43,54),r.text("PV",86,5),r.text("Purchase Outstanding Report",82,10),r.text(c,10,18),r.text(o,10,22),r.text("",10,25),e()(r,{head:[["#","Bill Date","Due Date","Supplier Bill No.","Pending Amount","Note"]],body:this.purchaseOutstandingList.map((m,U)=>[U+1,this.formatDate(m.supplier_bill_date),this.formatDate(m.due_date),m.supplier_bill_no,m.pending_amount,m.note]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),r.save("Purchase_outstanding.pdf")}getVisibleDataFromTable(){const r=[],s=document.getElementById("mytable");if(s){const n=s.querySelector("thead tr");if(n){const c=[];n.querySelectorAll("th").forEach(m=>{const U=m.textContent?.trim();U&&"Is Active"!==U&&"Action"!==U&&c.push(U)}),r.push(c)}s.querySelectorAll("tbody tr").forEach(c=>{const m=[];c.querySelectorAll("td").forEach(U=>{const $=U.textContent?.trim();$&&m.push($)}),r.push(m)})}return r}exportToExcel(){const r=this.getVisibleDataFromTable(),s=h.P6.aoa_to_sheet(r),n=h.P6.book_new();h.P6.book_append_sheet(n,s,"Sheet1");const o=h.cW(n,{bookType:"xlsx",type:"array"}),c=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,C.saveAs)(c,"purchaseSummary.xlsx")}printTable(){const r=document.getElementById("mytable");if(!r)return void console.error("Table element with ID 'mytable' not found.");const n=document.querySelector(".titl");if(!n)return void console.error("Title element with class 'titl' not found.");const o=n.outerHTML,m=r.cloneNode(!0).outerHTML,$="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+m,v=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=$,window.print(),document.body.innerHTML=v}changePg(r){console.log(r),-1==r&&(this.itemsPerPage=this.purchaseOutstandingList?.length)}getBranch(){this.reportService.getBranch().subscribe(r=>{this.branchList=r,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(r=>r.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(r,s){if(s)console.log(r),this.selectData.push(r),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const n=this.selectData.findIndex(o=>o==r);console.log(n),-1!==n&&this.selectData.splice(n,1),this.ngOnInit(),console.log(this.selectData)}}}return l.\u0275fac=function(r){return new(r||l)(t.Y36(y.F0),t.Y36(d.qu),t.Y36(L._W),t.Y36(B.y),t.Y36(N.x),t.Y36(w.J),t.Y36(_.uU),t.Y36(J.r),t.Y36(E.R))},l.\u0275cmp=t.Xpm({type:l,selectors:[["app-purchase-outstanding"]],decls:100,vars:20,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker","min","max"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-5","col-sm-6","col-12"],[1,"form-group"],["type","text","placeholder","Enter Supplier",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["autos","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[3,"value","blur"],[1,"row","container"],[1,"col-lg-2","col-sm-4","col-12","d-flex"],[1,"dash-count",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(r,s){if(1&r){const n=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Purchase Outstanding Analysis"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Purchase Outstanding Analysis"),t.qZA()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7),t.YNc(11,Q,11,5,"div",8),t.qZA()()()(),t.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),t._uU(21,"Select Date"),t.qZA(),t.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),t.NdJ("dateChange",function(){return s.getSelectedPurchaseOutstandingDates()}),t.qZA(),t.TgZ(25,"span",19)(26,"span",20),t._uU(27,"to"),t.qZA()(),t.TgZ(28,"input",21),t.NdJ("dateChange",function(){return s.getSelectedPurchaseOutstandingDates()}),t.qZA()(),t._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),t.qZA()()(),t.TgZ(32,"div",24)(33,"div",25)(34,"strong"),t._uU(35,"Select Supplier"),t.qZA(),t._UZ(36,"input",26),t.TgZ(37,"mat-autocomplete",27,28),t.YNc(39,V,2,2,"mat-option",29),t.ALo(40,"async"),t.qZA()()()()()(),t.TgZ(41,"div",30)(42,"ul")(43,"li")(44,"a",31),t.NdJ("click",function(){return s.generatePDFAgain()}),t._UZ(45,"img",32),t.qZA()(),t.TgZ(46,"li")(47,"a",33),t.NdJ("click",function(){return s.exportToExcel()}),t._UZ(48,"img",34),t.qZA()(),t.TgZ(49,"li")(50,"a",35),t.NdJ("click",function(){return s.printTable()}),t._UZ(51,"img",36),t.qZA()()()()(),t.YNc(52,k,9,7,"div",37),t.TgZ(53,"div",38)(54,"table",39)(55,"thead")(56,"tr")(57,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(58,"#"),t._UZ(59,"i",41),t.qZA(),t.TgZ(60,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(61,"Bill Date "),t._UZ(62,"i",41),t.qZA(),t.TgZ(63,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(64," Due Date "),t._UZ(65,"i",41),t.qZA(),t.TgZ(66,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(67,"Supplier Bill No."),t._UZ(68,"i",41),t.qZA(),t.TgZ(69,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(70," Pending Amount "),t._UZ(71,"i",41),t.qZA(),t.TgZ(72,"th",40),t.NdJ("click",function(){return s.sort("id")}),t._uU(73,"Note"),t._UZ(74,"i",41),t.qZA()()(),t.YNc(75,K,4,11,"tbody",42),t.YNc(76,W,5,0,"tbody",42),t.qZA(),t.TgZ(77,"div",6)(78,"div",43)(79,"div",44),t._uU(80," Show per page "),t.TgZ(81,"select",45,46),t.NdJ("ngModelChange",function(c){return s.itemsPerPage=c})("change",function(){t.CHM(n);const c=t.MAs(82);return t.KtG(s.changePg(c.value))}),t.TgZ(83,"option",47),t._uU(84,"10"),t.qZA(),t.TgZ(85,"option",48),t._uU(86,"20"),t.qZA(),t.TgZ(87,"option",49),t._uU(88,"30"),t.qZA(),t.TgZ(89,"option",50),t._uU(90,"50"),t.qZA(),t.TgZ(91,"option",51),t._uU(92,"100"),t.qZA(),t.TgZ(93,"option",52),t._uU(94,"All"),t.qZA()()()(),t.TgZ(95,"div",53)(96,"div",54)(97,"pagination-controls",55),t.NdJ("pageChange",function(c){return s.p=c}),t.qZA(),t.TgZ(98,"div",56),t._uU(99),t.qZA()()()()()()()()()}if(2&r){const n=t.MAs(31),o=t.MAs(38);t.xp6(11),t.Q6J("ngIf",s.isAdmin),t.xp6(5),t.Q6J("formGroup",s.purchaseOutstandingform),t.xp6(7),t.Q6J("formGroup",s.purchaseOutstandingform)("rangePicker",n)("min",s.minDate)("max",s.maxDate),t.xp6(6),t.Q6J("for",n),t.xp6(7),t.Q6J("formControl",s.supplierControl)("matAutocomplete",o),t.xp6(1),t.Q6J("displayWith",s.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(40,18,s.filteredSuppliers)),t.xp6(13),t.Q6J("ngIf",s.purchaseOutstanding),t.xp6(23),t.Q6J("ngIf",(null==s.purchaseOutstandingList?null:s.purchaseOutstandingList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==s.purchaseOutstandingList?null:s.purchaseOutstandingList.length)),t.xp6(5),t.Q6J("ngModel",s.itemsPerPage),t.xp6(18),t.lnq(" Showing ",s.itemsPerPage," to ",null==s.purchaseOutstandingList?null:s.purchaseOutstandingList.length," of ",s.p," entries ")}},dependencies:[_.sg,_.O5,_.PC,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.oH,d.sg,d.u,D.XC,D.ZL,b.ey,A.KE,A.R9,T.nW,T.wx,T.zY,T.By,T._g,I.LS,_.Ov,_.JJ,_.uU,I._s,F.T],styles:[".button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),l})()}];let X=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({imports:[y.Bz.forChild(z),y.Bz]}),l})();var tt=p(44144),et=p(3056),it=p(87078),M=p(86323),Z=p(92642),rt=p(95113),at=p(64155),st=p(6205),nt=p(8468);const lt={User:Z.n5m,UserCheck:Z.uS3,FileText:Z.acj,File:Z.$BE};let pt=(()=>{class l{}return l.\u0275fac=function(r){return new(r||l)},l.\u0275mod=t.oAB({type:l}),l.\u0275inj=t.cJS({providers:[_.uU],imports:[_.ez,X,d.u5,d.UX,D.Bb,A.lN,tt.c,et.ZQ,it.T,T.FA,A.lN,b.XK,rt.LD,at.vQ,nt.I,st.X,M.p.pick(lt),M.p]}),l})()}}]);