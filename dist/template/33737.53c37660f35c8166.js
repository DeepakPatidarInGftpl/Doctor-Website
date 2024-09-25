"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[33737],{25062:(M,Z,a)=>{a.d(Z,{y:()=>b});var p=a(92340),m=a(94650),U=a(80529);let b=(()=>{class h{constructor(r){this.http=r,this.apiUrl=`${p.N.api}`}UpdateDefaultAddress(r){return this.http.post(this.apiUrl+"/pv-api/make_default_address/",r)}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(r){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}SupplierIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,i)}addSupplier(r){return this.http.post(this.apiUrl+"/pv-api/supplier/",r)}updateSupplier(r,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,r)}deleteSupplier(r){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(r){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}VendorIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,i)}addVendor(r){return this.http.post(this.apiUrl+"/pv-api/vendor/",r)}updateVendor(r,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,r)}deleteVendor(r){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}PaymentTermsIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,i)}addPaymentTerms(r){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",r)}updatePaymentTerms(r,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,r)}deletePaymentTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(r){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}TransportIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,i)}addTransport(r){return this.http.post(this.apiUrl+"/pv-api/transport/",r)}updateTransport(r,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,r)}deleteTransport(r){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${r}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(r){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}EmployeeIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,i)}addEmployee(r){return this.http.post(this.apiUrl+"/pv-api/employee/",r)}updateEmployee(r,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,r)}deleteEmployee(r){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${r}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(r){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}CustomerIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,i)}addCustomer(r){return this.http.post(this.apiUrl+"/pv-api/customer/",r)}updateCustomer(r,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,r)}deleteCustomer(r){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${r}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(r){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${r}`)}UserIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${r}`,i)}addUser(r){return this.http.post(this.apiUrl+"/pv-api/user/",r)}updateUser(r,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,r)}deleteUser(r){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${r}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(r){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${r}`)}addPermissionGroup(r){return this.http.post(this.apiUrl+"/pv-api/group/",r)}updatePermissionGroup(r,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,r)}deletePermissionGroup(r){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(r){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`)}DealerIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,i)}addDealer(r){return this.http.post(this.apiUrl+"/pv-api/dealer/",r)}updateDealer(r,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,r)}deleteDealer(r){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(r){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+r)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(r){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${r}`)}TermsIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,i)}addTerms(r){return this.http.post(this.apiUrl+"/pv-api/terms/",r)}updateTerms(r,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,r)}deleteTerms(r){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${r}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(r){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${r}`)}DepartmentIsActive(r,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${r}`,i)}addDepartment(r){return this.http.post(this.apiUrl+"/pv-api/department/",r)}updateDepartment(r,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,r)}deleteDepartment(r){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${r}`)}getCreditLimitByUserId(r){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${r}`)}}return h.\u0275fac=function(r){return new(r||h)(m.LFG(U.eN))},h.\u0275prov=m.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},33737:(M,Z,a)=>{a.r(Z),a.d(Z,{ProductLedgerModule:()=>it});var p=a(36895),m=a(4392),U=a(96166),b=a(12983),h=a.n(b),_=a(80574),r=a(94327),i=a(24006),t=a(94650),P=a(80927),C=a(25062),T=a(42917),A=a(73162),v=a(54333),c=a(47957),f=a(3238),L=a(54040);function S(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"a",78)(1,"input",79,80),t.NdJ("change",function(n){const u=t.CHM(e).$implicit,g=t.oxw(2);return t.KtG(g.SelectedBranch(u.id,n.target.checked))}),t.qZA(),t.TgZ(3,"label",81),t.NdJ("click",function(n){t.CHM(e);const s=t.oxw(2);return t.KtG(s.onLabelClick(n))}),t._uU(4),t.qZA()()}if(2&o){const e=d.$implicit,l=d.index,n=t.oxw(2);t.xp6(1),t.Q6J("value",e.id)("checked",n.selectData.includes(e.id))("id","checkboxCat-"+l),t.xp6(2),t.Q6J("for","checkboxCat-"+l),t.xp6(1),t.Oqu(e.title)}}function q(o,d){if(1&o&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&o){const e=t.oxw(2);t.xp6(1),t.Oqu(e.selectData.length+" Selected")}}const I=function(){return{standalone:!0}};function N(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"div",71)(1,"div",72)(2,"button",73),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",74)(5,"li")(6,"input",75),t.NdJ("ngModelChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.searchBranch=n)})("ngModelChange",function(){t.CHM(e);const n=t.oxw();return t.KtG(n.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,S,5,5,"a",76),t.qZA()()(),t.TgZ(9,"div",77),t.YNc(10,q,2,1,"span",67),t.qZA()()}if(2&o){const e=t.oxw();t.xp6(6),t.Q6J("ngModel",e.searchBranch)("ngModelOptions",t.DdM(4,I)),t.xp6(2),t.Q6J("ngForOf",e.filteredBranchList),t.xp6(2),t.Q6J("ngIf",e.selectData.length>0)}}function J(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"mat-option",82),t.NdJ("blur",function(){const s=t.CHM(e).$implicit,u=t.oxw();return t.KtG(u.oncheckAccount(s))}),t._uU(1),t.qZA()}if(2&o){const e=d.$implicit;t.Q6J("value",e),t.xp6(1),t.hij("",null!=e&&e.variant_name?(null==e?null:e.product_title)+" ("+(null==e?null:e.variant_name)+")":null==e?null:e.product_title," ")}}function w(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td",84),t._uU(2),t.qZA(),t.TgZ(3,"td",84),t._uU(4),t.qZA(),t.TgZ(5,"td",84),t._uU(6),t.qZA(),t.TgZ(7,"td",84),t._uU(8),t.qZA(),t.TgZ(9,"td",84),t._uU(10),t.qZA(),t.TgZ(11,"td",84),t._uU(12),t.qZA(),t.TgZ(13,"td",84),t._uU(14),t.qZA(),t.TgZ(15,"td")(16,"button",87),t.NdJ("click",function(){t.CHM(e);const n=t.oxw(2);return t.KtG(n.closeModalProduct())}),t._uU(17,"Select "),t.qZA()()()}if(2&o){const e=d.$implicit,l=d.index;t.xp6(2),t.Oqu(l+1+"."),t.xp6(2),t.Oqu(null==e?null:e.sku),t.xp6(2),t.hij("",null==e?null:e.product_title," "),t.xp6(2),t.hij(" ",null==e?null:e.variant_name," "),t.xp6(2),t.hij(" ",null==e||null==e.product?null:e.product.article_no," "),t.xp6(2),t.hij("",null==e?null:e.created_date," "),t.xp6(2),t.hij("",null==e||null==e.batch[0]?null:e.batch[0].mrp," ")}}function O(o,d){if(1&o&&(t.TgZ(0,"div",49)(1,"div",4)(2,"div",59)(3,"table",83)(4,"thead")(5,"tr")(6,"th",84),t._uU(7," Sr.No."),t.qZA(),t.TgZ(8,"th",85),t._uU(9," Barcode"),t.qZA(),t.TgZ(10,"th",85),t._uU(11," Product"),t.qZA(),t.TgZ(12,"th",84),t._uU(13," Variant Name"),t.qZA(),t.TgZ(14,"th",84),t._uU(15," Article No."),t.qZA(),t.TgZ(16,"th",85),t._uU(17," Date"),t.qZA(),t.TgZ(18,"th",85),t._uU(19," MRP"),t.qZA(),t.TgZ(20,"th",85),t._uU(21," Action"),t.qZA()()(),t.TgZ(22,"tbody"),t.YNc(23,w,18,7,"tr",86),t.qZA()()()()()),2&o){const e=t.oxw();t.xp6(23),t.Q6J("ngForOf",e.productVariantList)}}function k(o,d){if(1&o&&(t.TgZ(0,"option",88),t._uU(1),t.qZA()),2&o){const e=d.$implicit;t.s9C("value",null==e?null:e.title),t.xp6(1),t.hij("",null==e?null:e.title," ")}}function B(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",89)(3,"input",90),t.NdJ("ngModelChange",function(n){const u=t.CHM(e).index,g=t.oxw(2);return t.KtG(g.selectedRows[u]=n)}),t.qZA(),t._UZ(4,"span",64),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td")(10,"a",91),t._uU(11),t.qZA()(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA(),t.TgZ(22,"td"),t._uU(23),t.qZA(),t.TgZ(24,"td"),t._uU(25),t.qZA()()}if(2&o){const e=d.$implicit,l=d.index,n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedRows[l]),t.xp6(3),t.Oqu(l+1),t.xp6(2),t.Oqu(null==e?null:e.name),t.xp6(3),t.Oqu(null==e||null==e.product?null:e.product.title),t.xp6(2),t.Oqu(null==e||null==e.variant?null:e.variant.variant_name),t.xp6(2),t.Oqu(null==e?null:e.date),t.xp6(2),t.Oqu(null==e?null:e.voucher_type),t.xp6(2),t.Oqu(null==e?null:e.voucher_no),t.xp6(2),t.Oqu((null==e?null:e.price)??0),t.xp6(2),t.Oqu(null==e?null:e.in_qty),t.xp6(2),t.Oqu(null==e?null:e.out_qty)}}const E=function(o,d){return{itemsPerPage:o,currentPage:d}};function V(o,d){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,B,26,11,"tr",86),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.filteredData,e.key,e.reverse),t.WLB(8,E,e.itemsPerPage,e.p)))}}function F(o,d){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",92)(3,"p",93),t._uU(4,"Data not available"),t.qZA()()()())}function Q(o,d){1&o&&t._UZ(0,"mat-progress-bar",94)}function G(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"div",4)(1,"div",95)(2,"div",96),t._uU(3," Show per page "),t.TgZ(4,"select",97,98),t.NdJ("ngModelChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.itemsPerPage=n)})("change",function(){t.CHM(e);const n=t.MAs(5),s=t.oxw();return t.KtG(s.changePg(n.value))}),t.TgZ(6,"option",99),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",100),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",101),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",102),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",103),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",104),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",105)(19,"div",106)(20,"pagination-controls",107),t.NdJ("pageChange",function(n){t.CHM(e);const s=t.oxw();return t.KtG(s.p=n)}),t.qZA(),t.TgZ(21,"div",108),t._uU(22),t.qZA()()()()}if(2&o){const e=t.oxw();t.xp6(4),t.Q6J("ngModel",e.itemsPerPage),t.xp6(18),t.lnq("Showing ",e.itemsPerPage," to ",null==e.tableData?null:e.tableData.length," of ",e.p," entries ")}}const H=[{path:"",component:(()=>{class o{constructor(e,l,n){this.coreService=e,this.contactService=l,this.cs=n,this.tableData=[],this.dtOptions={},this.initChecked=!1,this.supplierControl=new i.NI(""),this.p=1,this.pageSize=10,this.itemsPerPage=10,this.loader=!0,this.isAdmin=!1,this.suppliers=[],this.allSelected=!1,this.key="id",this.reverse=!1,this.sho=!0,this.sho1=!1,this.sho2=!1,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let e=localStorage.getItem("financialYear");console.warn(JSON.parse(e));let l=JSON.parse(e);this.fyID=l}this.cs.userDetails$.subscribe(e=>{this.isAdmin="admin"==e?.role}),this.getProductLedger(),this.getVoucher(),this.getProduct(),this.getVariant(),this.supplierControl.valueChanges.subscribe(e=>{if(e){const l=this._filter(e);this.productVariantList=l}else this.productVariantList=this.productVariantData})}getProductLedger(){console.log(this.productId),this.coreService.getProductLedgerFy(this.productId,this.fyID,this.selectData).subscribe(e=>{this.tableData=e,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getVoucher(){this.contactService.getVoucherType().subscribe(e=>{console.log(e),this.voucherList=e})}_filter(e){const l="string"==typeof e?e.toLowerCase():"";return console.log(l),this.productVariantList?.length?this.productVariantList.filter(n=>n?.product_title&&n.product_title.toLowerCase().includes(l)||n?.variant_name&&n.variant_name.toLowerCase().includes(l)):""}getProduct(){this.coreService.getProducts().subscribe(e=>{console.log(e,"user"),this.suppliers=e})}getVariant(){this.contactService.productVariant().subscribe(e=>{this.productVariantList=e,this.productVariantData=e})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(e){this.tableData.forEach(e?l=>{l.isSelected=!1}:l=>{l.isSelected=!0})}displayFn(e){return e?e.variant_name?`${e.product_title} (${e.variant_name})`:e.product_title:""}search(){if(""===this.titlee)this.ngOnInit();else{const e=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(l=>l?.voucher_no?.toLocaleLowerCase().includes(e))}}sort(e){this.key=e,this.reverse=!this.reverse}openModalProduct(){const l=document.getElementById("productModal");l&&(l.classList.add("show"),l.style.display="block")}closeModalProduct(){const e=document.getElementById("productModal");e&&(e.classList.remove("show"),e.style.display="none")}hide(){this.sho=!1,this.sho1=!this.sho1,this.sho2=!1}hide1(){this.sho=!0,this.sho1=!1,this.sho2=!this.sho2}filterData(){let e=this.tableData.slice();if(this.date){const l=new Date(this.date).toISOString().split("T")[0];e=e.filter(n=>new Date(n?.date).toISOString().split("T")[0]===l)}this.selectedVoucherType&&(e=e.filter(l=>l?.voucher_type===this.selectedVoucherType)),null!=this.selectActive&&(e=e.filter(l=>l?.is_active===this.selectActive)),this.filteredData=e}clearFilters(){this.selectedVoucherType=null,this.date=null,this.selectActive=void 0,this.filterData()}generatePDF(){const e=new U.default;e.setFontSize(15),e.setTextColor(33,43,54),e.text("Product Ledger List",10,10),h()(e,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Name"},{header:"Date"},{header:"Voucher Type"},{header:"Voucher No."},{header:"Price"},{header:"In QTY"},{header:"Out QTY"},{header:"Is Active"}]}),e.save("productLedger.pdf")}generatePDFAgain(){const e=new U.default;e.setFontSize(12),e.setTextColor(33,43,54),e.text("Product Ledger List",82,10),e.text("",10,15),h()(e,{head:[["#","Name.","Date","Voucher Type","Voucher No.","Price","In QTY","Out QTY"]],body:this.tableData.map((n,s)=>[s+1,n.name,n.date,n.voucher_type,n.voucher_no,n.price,n.in_qty,n.out_qty]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),e.save("Product _Ledger.pdf")}getVisibleDataFromTable(){const e=[],l=document.getElementById("mytable"),n=l.querySelector("thead tr"),s=l.querySelectorAll("tbody tr"),u=[];return n.querySelectorAll("th").forEach(g=>{const y=g.textContent.trim();u.push(y)}),e.push(u),s.forEach(g=>{const y=[];g.querySelectorAll("td").forEach(D=>{y.push(D.textContent.trim())}),e.push(y)}),e}exportToExcel(){const e=this.getVisibleDataFromTable(),l=_.P6.aoa_to_sheet(e),n=_.P6.book_new();_.P6.book_append_sheet(n,l,"Sheet1");const s=_.cW(n,{bookType:"xlsx",type:"array"}),u=new Blob([s],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,r.saveAs)(u,"productLedger.xlsx")}printTable(){const e=document.getElementById("mytable"),n=document.querySelector(".titl").outerHTML,u=e.cloneNode(!0).outerHTML,y="<style>.spaced-title { margin-top: 80px; }</style>"+n.replace("titl","spaced-title")+u,D=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=y,window.print(),document.body.innerHTML=D}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.filteredData.length)}getBranch(){this.coreService.getBranch().subscribe(e=>{this.branchList=e,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(e=>e.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(e,l){if(l)console.log(e),this.selectData.push(e),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const n=this.selectData.findIndex(s=>s==e);console.log(n),-1!==n&&this.selectData.splice(n,1),this.ngOnInit(),console.log(this.selectData)}}oncheckAccount(e){console.warn(e),this.productId=e?.id,this?.getProductLedger()}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(P.p),t.Y36(C.y),t.Y36(T.J))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-product-ledger"]],decls:133,vars:19,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Voucher No...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"row","w-50"],[1,"col-lg-12","col-sm-12","col-12"],[1,"mb-2"],[1,"form-group","d-flex","align-items-center"],["type","text","placeholder","Enter Product",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],["data-bs-toggle","tooltip","title","ion-information",1,"ion-information","circle","ms-2",3,"click"],["id","productModal","tabindex","-1","role","dialog","aria-labelledby","addressModalLabel","aria-hidden","true",1,"modal","fade"],["role","document",1,"modal-dialog","modal-lg","modal-dialog-centered"],[1,"modal-content"],[1,"modal-header"],["id","staticBackdropLabel",1,"modal-title","fs-5"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],["class","form-group",4,"ngIf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","date",3,"ngModel","ngModelChange","change"],[3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-select",3,"ngModel","ngModelChange","change"],["selected","","disabled","",3,"ngValue"],[3,"ngValue"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[3,"click"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[3,"value","blur"],[1,"table","datanew"],[1,"boder"],[1,"boder","space-text"],[4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary","btn-sm",2,"float","right",3,"click"],[3,"value"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"product-title"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(e,l){if(1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Product Ledger"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Product Ledger"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,N,11,5,"div",6),t.qZA()()()(),t.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"a",12),t._UZ(16,"img",13),t.TgZ(17,"span"),t._UZ(18,"img",14),t.qZA()()(),t.TgZ(19,"div",15)(20,"a",16),t._UZ(21,"img",17),t.qZA(),t.TgZ(22,"div",18)(23,"label")(24,"input",19),t.NdJ("ngModelChange",function(s){return l.titlee=s})("ngModelChange",function(){return l.search()}),t.qZA()()()()(),t.TgZ(25,"div",20)(26,"div",21)(27,"strong",22),t._uU(28,"Select Product"),t.qZA(),t.TgZ(29,"div",23),t._UZ(30,"input",24),t.TgZ(31,"mat-autocomplete",25,26),t.YNc(33,J,2,2,"mat-option",27),t.qZA(),t.TgZ(34,"i",28),t.NdJ("click",function(){return l.openModalProduct()}),t.qZA()(),t.TgZ(35,"div",29)(36,"div",30)(37,"div",31)(38,"div",32)(39,"h1",33),t._uU(40,"Selected Variants"),t.qZA(),t.TgZ(41,"button",34),t.NdJ("click",function(){return l.closeModalProduct()}),t.TgZ(42,"span",35),t._uU(43,"\xd7"),t.qZA()()(),t.TgZ(44,"div",36),t.YNc(45,O,24,1,"div",37),t.qZA()()()()()(),t.TgZ(46,"div",38)(47,"ul")(48,"li")(49,"a",39),t.NdJ("click",function(){return l.generatePDFAgain()}),t._UZ(50,"img",40),t.qZA()(),t.TgZ(51,"li")(52,"a",41),t.NdJ("click",function(){return l.exportToExcel()}),t._UZ(53,"img",42),t.qZA()(),t.TgZ(54,"li")(55,"a",43),t.NdJ("click",function(){return l.printTable()}),t._UZ(56,"img",44),t.qZA()()()()(),t.TgZ(57,"div",45)(58,"div",46)(59,"div",4)(60,"div",47)(61,"div",4)(62,"div",48)(63,"div",49)(64,"label"),t._uU(65,"Date"),t.qZA(),t.TgZ(66,"input",50),t.NdJ("ngModelChange",function(s){return l.date=s})("change",function(){return l.filterData()}),t.qZA()()(),t.TgZ(67,"div",48)(68,"div",49)(69,"label"),t._uU(70,"Voucher Type"),t.qZA(),t.TgZ(71,"select",51),t.NdJ("ngModelChange",function(s){return l.selectedVoucherType=s})("change",function(){return l.filterData()}),t.TgZ(72,"option",52),t._uU(73,"Select Voucher Type"),t.qZA(),t.YNc(74,k,2,2,"option",53),t.qZA()()(),t.TgZ(75,"div",48)(76,"div",49)(77,"label"),t._uU(78,"Is Active"),t.qZA(),t.TgZ(79,"select",54),t.NdJ("ngModelChange",function(s){return l.selectActive=s})("change",function(){return l.filterData()}),t.TgZ(80,"option",55),t._uU(81,"Select Active Status"),t.qZA(),t.TgZ(82,"option",56),t._uU(83,"Yes"),t.qZA(),t.TgZ(84,"option",56),t._uU(85,"No"),t.qZA()()()()(),t.TgZ(86,"div",57),t.NdJ("click",function(){return l.clearFilters()}),t.TgZ(87,"a",58),t._uU(88,"Clear Filter"),t.qZA()()()()()(),t.TgZ(89,"div",59)(90,"table",60)(91,"thead")(92,"tr")(93,"th",61),t.NdJ("click",function(){return l.sort("id")}),t.TgZ(94,"label",62),t.NdJ("click",function(){return l.selectAll(l.initChecked)}),t.TgZ(95,"input",63),t.NdJ("ngModelChange",function(s){return l.allSelected=s})("change",function(){return l.selectAlll()}),t.qZA(),t._UZ(96,"span",64),t.qZA(),t._UZ(97,"i",65),t.qZA(),t.TgZ(98,"th",66),t.NdJ("click",function(){return l.sort("id")}),t._uU(99,"Sr No."),t._UZ(100,"i",65),t.qZA(),t.TgZ(101,"th",66),t.NdJ("click",function(){return l.sort("id")}),t._uU(102,"Name"),t._UZ(103,"i",65),t.qZA(),t.TgZ(104,"th",66),t.NdJ("click",function(){return l.sort("id")}),t._uU(105,"Product Name"),t._UZ(106,"i",65),t.qZA(),t.TgZ(107,"th",66),t.NdJ("click",function(){return l.sort("id")}),t._uU(108,"Variant Name"),t._UZ(109,"i",65),t.qZA(),t.TgZ(110,"th",66),t.NdJ("click",function(){return l.sort("id")}),t._uU(111,"Date "),t._UZ(112,"i",65),t.qZA(),t.TgZ(113,"th",66),t.NdJ("click",function(){return l.sort("id")}),t._uU(114,"Voucher Type "),t._UZ(115,"i",65),t.qZA(),t.TgZ(116,"th",66),t.NdJ("click",function(){return l.sort("id")}),t._uU(117,"Voucher No. "),t._UZ(118,"i",65),t.qZA(),t.TgZ(119,"th",66),t.NdJ("click",function(){return l.sort("id")}),t._uU(120,"Balance"),t._UZ(121,"i",65),t.qZA(),t.TgZ(122,"th",66),t.NdJ("click",function(){return l.sort("id")}),t._uU(123,"In QTY"),t._UZ(124,"i",65),t.qZA(),t.TgZ(125,"th",66),t.NdJ("click",function(){return l.sort("id")}),t._uU(126,"Out QTY"),t._UZ(127,"i",65),t.qZA()()(),t.YNc(128,V,4,11,"tbody",67),t.YNc(129,F,5,0,"tbody",67),t.qZA(),t.TgZ(130,"div",68),t.YNc(131,Q,1,0,"mat-progress-bar",69),t.qZA(),t.YNc(132,G,23,4,"div",70),t.qZA()()()),2&e){const n=t.MAs(32);t.xp6(9),t.Q6J("ngIf",l.isAdmin),t.xp6(15),t.Q6J("ngModel",l.titlee),t.xp6(6),t.Q6J("formControl",l.supplierControl)("matAutocomplete",n),t.xp6(1),t.Q6J("displayWith",l.displayFn),t.xp6(2),t.Q6J("ngForOf",l.productVariantList),t.xp6(12),t.Q6J("ngIf",l.productVariantList),t.xp6(21),t.Q6J("ngModel",l.date),t.xp6(5),t.Q6J("ngModel",l.selectedVoucherType),t.xp6(3),t.Q6J("ngForOf",l.voucherList),t.xp6(5),t.Q6J("ngModel",l.selectActive),t.xp6(1),t.Q6J("ngValue",void 0),t.xp6(2),t.Q6J("ngValue",!0),t.xp6(2),t.Q6J("ngValue",!1),t.xp6(11),t.Q6J("ngModel",l.allSelected),t.xp6(33),t.Q6J("ngIf",(null==l.filteredData?null:l.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==l.filteredData?null:l.filteredData.length)&&!l.loader),t.xp6(2),t.Q6J("ngIf",l.loader),t.xp6(1),t.Q6J("ngIf",!l.loader)}},dependencies:[p.sg,p.O5,i.YN,i.Kr,i.Fj,i.Wl,i.EJ,i.JJ,i.On,i.oH,A.pW,v.LS,c.XC,c.ZL,f.ey,v._s,L.T],styles:["input[type=date][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}.product-title[_ngcontent-%COMP%]{display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;text-overflow:ellipsis;line-height:1.5;max-height:3em;white-space:normal}.circle[_ngcontent-%COMP%]{display:inline-block;width:18px;height:18px;border-radius:50%;border:1px solid #FF9F43;text-align:center;line-height:16px;color:#ff9f43}"]}),o})(),canActivate:[a(30597).l],data:{allowedRoles:["add_productledger","change_productledger","delete_productledger","view_productledger"]}}];let K=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[m.Bz.forChild(H),m.Bz]}),o})();var $=a(59549),W=a(44144),j=a(3056),z=a(87078),X=a(99602),tt=a(95113),et=a(64155),rt=a(6205),x=a(8468);let it=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[p.ez,K,x.I,x.I,c.Bb,$.lN,W.c,j.ZQ,z.T,X.FA,$.lN,f.XK,tt.LD,et.vQ,x.I,rt.X]}),o})()},30597:(M,Z,a)=>{a.d(Z,{l:()=>_});var p=a(94650),m=a(4392),U=a(97185),b=a(42917),h=a(80927);let _=(()=>{class r{constructor(t,P,C,T,A){this.router=t,this.Arout=P,this.toastr=C,this.profileService=T,this.coreService=A}canActivate(t,P){const C=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(T=>{this.userDetails=T,this.permissions=this.userDetails?.permission}),C){const T=t.data.allowedRoles,A=C.some(c=>T.includes(c.codename));let v=this.coreService.profileData$.value;if(v&&v.username){this.userDetails=v,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(v);const c=v?.permission,f=this.profileService.getUserDetails();(!f||f.length!==c.length)&&(this.profileService.setUserPermission(c),window.location.reload())}else this.coreService.getProfile().subscribe(c=>{this.userDetails=c,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(c);const f=c?.permission,L=this.profileService.getUserDetails();(!L||L.length!==f.length)&&(this.profileService.setUserPermission(f),window.location.reload())});if(A)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return r.\u0275fac=function(t){return new(t||r)(p.LFG(m.F0),p.LFG(m.gz),p.LFG(U._W),p.LFG(b.J),p.LFG(h.p))},r.\u0275prov=p.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);