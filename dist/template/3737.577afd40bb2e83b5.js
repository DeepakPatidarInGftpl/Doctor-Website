"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[3737],{25062:($,T,a)=>{a.d(T,{y:()=>P});var c=a(92340),_=a(94650),U=a(80529);let P=(()=>{class g{constructor(e){this.http=e,this.apiUrl=`${c.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(e){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}SupplierIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,i)}addSupplier(e){return this.http.post(this.apiUrl+"/pv-api/supplier/",e)}updateSupplier(e,i){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${i}`,e)}deleteSupplier(e){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(e){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}VendorIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,i)}addVendor(e){return this.http.post(this.apiUrl+"/pv-api/vendor/",e)}updateVendor(e,i){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${i}`,e)}deleteVendor(e){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}PaymentTermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,i)}addPaymentTerms(e){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",e)}updatePaymentTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${i}`,e)}deletePaymentTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(e){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}TransportIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,i)}addTransport(e){return this.http.post(this.apiUrl+"/pv-api/transport/",e)}updateTransport(e,i){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${i}`,e)}deleteTransport(e){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(e){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}EmployeeIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,i)}addEmployee(e){return this.http.post(this.apiUrl+"/pv-api/employee/",e)}updateEmployee(e,i){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${i}`,e)}deleteEmployee(e){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(e){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}CustomerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,i)}addCustomer(e){return this.http.post(this.apiUrl+"/pv-api/customer/",e)}updateCustomer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${i}`,e)}deleteCustomer(e){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(e){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}UserIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${e}`,i)}addUser(e){return this.http.post(this.apiUrl+"/pv-api/user/",e)}updateUser(e,i){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${i}`,e)}deleteUser(e){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(e){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${e}`)}addPermissionGroup(e){return this.http.post(this.apiUrl+"/pv-api/group/",e)}updatePermissionGroup(e,i){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${i}`,e)}deletePermissionGroup(e){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(e){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}DealerIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,i)}addDealer(e){return this.http.post(this.apiUrl+"/pv-api/dealer/",e)}updateDealer(e,i){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${i}`,e)}deleteDealer(e){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+e)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}TermsIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,i)}addTerms(e){return this.http.post(this.apiUrl+"/pv-api/terms/",e)}updateTerms(e,i){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${i}`,e)}deleteTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(e){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}DepartmentIsActive(e,i){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${e}`,i)}addDepartment(e){return this.http.post(this.apiUrl+"/pv-api/department/",e)}updateDepartment(e,i){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${i}`,e)}deleteDepartment(e){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}}return g.\u0275fac=function(e){return new(e||g)(_.LFG(U.eN))},g.\u0275prov=_.Yz7({token:g,factory:g.\u0275fac,providedIn:"root"}),g})()},33737:($,T,a)=>{a.r(T),a.d(T,{ProductLedgerModule:()=>it});var c=a(36895),_=a(89299),U=a(96166),P=a(12983),g=a.n(P),v=a(80574),e=a(94327),i=a(68675),o=a(54004),u=a(24006),t=a(94650),f=a(80927),Z=a(25062),C=a(42917),L=a(73162),A=a(54333),b=a(47957),M=a(3238),I=a(54040);function J(s,d){if(1&s){const r=t.EpF();t.TgZ(0,"a",65)(1,"input",66,67),t.NdJ("change",function(n){const h=t.CHM(r).$implicit,m=t.oxw(2);return t.KtG(m.SelectedBranch(h.id,n.target.checked))}),t.qZA(),t.TgZ(3,"label",68),t.NdJ("click",function(n){t.CHM(r);const p=t.oxw(2);return t.KtG(p.onLabelClick(n))}),t._uU(4),t.qZA()()}if(2&s){const r=d.$implicit,l=d.index,n=t.oxw(2);t.xp6(1),t.Q6J("value",r.id)("checked",n.selectData.includes(r.id))("id","checkboxCat-"+l),t.xp6(2),t.Q6J("for","checkboxCat-"+l),t.xp6(1),t.Oqu(r.title)}}function N(s,d){if(1&s&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&s){const r=t.oxw(2);t.xp6(1),t.Oqu(r.selectData.length+" Selected")}}const O=function(){return{standalone:!0}};function E(s,d){if(1&s){const r=t.EpF();t.TgZ(0,"div",58)(1,"div",59)(2,"button",60),t._uU(3,"Select Branch"),t.qZA(),t.TgZ(4,"ul",61)(5,"li")(6,"input",62),t.NdJ("ngModelChange",function(n){t.CHM(r);const p=t.oxw();return t.KtG(p.searchBranch=n)})("ngModelChange",function(){t.CHM(r);const n=t.oxw();return t.KtG(n.filterBranch())}),t.qZA()(),t.TgZ(7,"li"),t.YNc(8,J,5,5,"a",63),t.qZA()()(),t.TgZ(9,"div",64),t.YNc(10,N,2,1,"span",54),t.qZA()()}if(2&s){const r=t.oxw();t.xp6(6),t.Q6J("ngModel",r.searchBranch)("ngModelOptions",t.DdM(4,O)),t.xp6(2),t.Q6J("ngForOf",r.filteredBranchList),t.xp6(2),t.Q6J("ngIf",r.selectData.length>0)}}function B(s,d){if(1&s){const r=t.EpF();t.TgZ(0,"mat-option",69),t.NdJ("blur",function(){const p=t.CHM(r).$implicit,h=t.oxw();return t.KtG(h.oncheckAccount(null==p?null:p.id))}),t._uU(1),t.qZA()}if(2&s){const r=d.$implicit;t.Q6J("value",r),t.xp6(1),t.hij("",null==r?null:r.title," ")}}function q(s,d){if(1&s&&(t.TgZ(0,"option",70),t._uU(1),t.qZA()),2&s){const r=d.$implicit;t.s9C("value",null==r?null:r.title),t.xp6(1),t.hij("",null==r?null:r.title," ")}}function w(s,d){if(1&s){const r=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",72)(3,"input",73),t.NdJ("ngModelChange",function(n){const h=t.CHM(r).index,m=t.oxw(2);return t.KtG(m.selectedRows[h]=n)}),t.qZA(),t._UZ(4,"span",51),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.qZA(),t.TgZ(17,"td"),t._uU(18),t.qZA(),t.TgZ(19,"td"),t._uU(20),t.qZA()()}if(2&s){const r=d.$implicit,l=d.index,n=t.oxw(2);t.xp6(3),t.Q6J("ngModel",n.selectedRows[l]),t.xp6(3),t.Oqu(l+1),t.xp6(2),t.Oqu(null==r?null:r.name),t.xp6(2),t.Oqu(null==r?null:r.date),t.xp6(2),t.Oqu(null==r?null:r.voucher_type),t.xp6(2),t.Oqu(null==r?null:r.voucher_no),t.xp6(2),t.Oqu((null==r?null:r.price)??0),t.xp6(2),t.Oqu(null==r?null:r.in_qty),t.xp6(2),t.Oqu(null==r?null:r.out_qty)}}const F=function(s,d){return{itemsPerPage:s,currentPage:d}};function V(s,d){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,w,21,9,"tr",71),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const r=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,r.filteredData,r.key,r.reverse),t.WLB(8,F,r.itemsPerPage,r.p)))}}function Q(s,d){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",74)(3,"p",75),t._uU(4,"Data not available"),t.qZA()()()())}function k(s,d){1&s&&t._UZ(0,"mat-progress-bar",76)}function G(s,d){if(1&s){const r=t.EpF();t.TgZ(0,"div",4)(1,"div",77)(2,"div",78),t._uU(3," Show per page "),t.TgZ(4,"select",79,80),t.NdJ("ngModelChange",function(n){t.CHM(r);const p=t.oxw();return t.KtG(p.itemsPerPage=n)})("change",function(){t.CHM(r);const n=t.MAs(5),p=t.oxw();return t.KtG(p.changePg(n.value))}),t.TgZ(6,"option",81),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",82),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",83),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",84),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",85),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",86),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",87)(19,"div",88)(20,"pagination-controls",89),t.NdJ("pageChange",function(n){t.CHM(r);const p=t.oxw();return t.KtG(p.p=n)}),t.qZA(),t.TgZ(21,"div",90),t._uU(22),t.qZA()()()()}if(2&s){const r=t.oxw();t.xp6(4),t.Q6J("ngModel",r.itemsPerPage),t.xp6(18),t.lnq("Showing ",r.itemsPerPage," to ",null==r.tableData?null:r.tableData.length," of ",r.p," entries ")}}const H=[{path:"",component:(()=>{class s{constructor(r,l,n){this.coreService=r,this.contactService=l,this.cs=n,this.tableData=[],this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.loader=!0,this.isAdmin=!1,this.suppliers=[],this.allSelected=!1,this.key="id",this.reverse=!1,this.sho=!0,this.sho1=!1,this.sho2=!1,this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[],this.supplierControl=new u.NI("")}ngOnInit(){if(localStorage.getItem("financialYear")){let r=localStorage.getItem("financialYear");console.warn(JSON.parse(r));let l=JSON.parse(r);this.fyID=l}this.cs.userDetails$.subscribe(r=>{this.isAdmin="admin"==r.role}),this.getProductLedger(),this.getVoucher(),this.getProduct(),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,i.O)(""),(0,o.U)(r=>{const l="string"==typeof r?r:r?.title;return l?this._filter(l):this.suppliers.slice()}))}getProductLedger(){console.log(this.productId),this.coreService.getProductLedgerFy(this.productId,this.fyID,this.selectData).subscribe(r=>{this.tableData=r,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()})}getVoucher(){this.contactService.getVoucherType().subscribe(r=>{console.log(r),this.voucherList=r})}_filter(r){const l=r?r.toLowerCase():"";return console.log(l),this.suppliers.filter(n=>n?.title&&n.title.toLowerCase().includes(l)||n?.name&&n.name.toLowerCase().includes(l))}displayFn(r){return r&&r?.title||r?.name?r?.title||r?.name:""}getProduct(){this.coreService.getProducts().subscribe(r=>{console.log(r,"user"),this.suppliers=r})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(r){this.tableData.forEach(r?l=>{l.isSelected=!1}:l=>{l.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const r=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(l=>l?.voucher_no?.toLocaleLowerCase().includes(r))}}sort(r){this.key=r,this.reverse=!this.reverse}hide(){this.sho=!1,this.sho1=!this.sho1,this.sho2=!1}hide1(){this.sho=!0,this.sho1=!1,this.sho2=!this.sho2}filterData(){let r=this.tableData.slice();if(this.date){const l=new Date(this.date).toISOString().split("T")[0];r=r.filter(n=>new Date(n?.date).toISOString().split("T")[0]===l)}this.selectedVoucherType&&(r=r.filter(l=>l?.voucher_type===this.selectedVoucherType)),null!=this.selectActive&&(r=r.filter(l=>l?.is_active===this.selectActive)),this.filteredData=r}clearFilters(){this.selectedVoucherType=null,this.date=null,this.selectActive=void 0,this.filterData()}generatePDF(){const r=new U.default;r.setFontSize(15),r.setTextColor(33,43,54),r.text("Product Ledger List",10,10),g()(r,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Name"},{header:"Date"},{header:"Voucher Type"},{header:"Voucher No."},{header:"Price"},{header:"In QTY"},{header:"Out QTY"},{header:"Is Active"}]}),r.save("productLedger.pdf")}generatePDFAgain(){const r=new U.default;r.setFontSize(12),r.setTextColor(33,43,54),r.text("Product Ledger List",82,10),r.text("",10,15),g()(r,{head:[["#","Name.","Date","Voucher Type","Voucher No.","Price","In QTY","Out QTY"]],body:this.tableData.map((n,p)=>[p+1,n.name,n.date,n.voucher_type,n.voucher_no,n.price,n.in_qty,n.out_qty]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),r.save("Product _Ledger.pdf")}getVisibleDataFromTable(){const r=[],l=document.getElementById("mytable"),n=l.querySelector("thead tr"),p=l.querySelectorAll("tbody tr"),h=[];return n.querySelectorAll("th").forEach(m=>{const y=m.textContent.trim();h.push(y)}),r.push(h),p.forEach(m=>{const y=[];m.querySelectorAll("td").forEach(x=>{y.push(x.textContent.trim())}),r.push(y)}),r}exportToExcel(){const r=this.getVisibleDataFromTable(),l=v.P6.aoa_to_sheet(r),n=v.P6.book_new();v.P6.book_append_sheet(n,l,"Sheet1");const p=v.cW(n,{bookType:"xlsx",type:"array"}),h=new Blob([p],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,e.saveAs)(h,"productLedger.xlsx")}printTable(){const r=document.getElementById("mytable"),n=document.querySelector(".titl").outerHTML,h=r.cloneNode(!0).outerHTML,y="<style>.spaced-title { margin-top: 80px; }</style>"+n.replace("titl","spaced-title")+h,x=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=y,window.print(),document.body.innerHTML=x}changePg(r){console.log(r),-1==r&&(this.itemsPerPage=this.filteredData.length)}getBranch(){this.coreService.getBranch().subscribe(r=>{this.branchList=r,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(r=>r.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(r,l){if(l)console.log(r),this.selectData.push(r),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const n=this.selectData.findIndex(p=>p==r);console.log(n),-1!==n&&this.selectData.splice(n,1),this.ngOnInit(),console.log(this.selectData)}}oncheckAccount(r){console.warn(r),this.productId=r,this?.getProductLedger()}}return s.\u0275fac=function(r){return new(r||s)(t.Y36(f.p),t.Y36(Z.y),t.Y36(C.J))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-product-ledger"]],decls:116,vars:20,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Voucher No...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"col-lg-12","col-sm-12","col-12"],[1,"form-group"],["type","text","placeholder","Enter Product",1,"form-control",3,"formControl","matAutocomplete"],[3,"displayWith"],["auto","matAutocomplete"],[3,"value","blur",4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],["type","date",3,"ngModel","ngModelChange","change"],[3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],[1,"form-select",3,"ngModel","ngModelChange","change"],["selected","","disabled","",3,"ngValue"],[3,"ngValue"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[3,"click"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],[3,"value","blur"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(r,l){if(1&r&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Product Ledger"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Product Ledger"),t.qZA()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5),t.YNc(9,E,11,5,"div",6),t.qZA()()()(),t.TgZ(10,"div",7)(11,"div",8)(12,"div",9)(13,"div",10)(14,"div",11)(15,"a",12),t._UZ(16,"img",13),t.TgZ(17,"span"),t._UZ(18,"img",14),t.qZA()()(),t.TgZ(19,"div",15)(20,"a",16),t._UZ(21,"img",17),t.qZA(),t.TgZ(22,"div",18)(23,"label")(24,"input",19),t.NdJ("ngModelChange",function(p){return l.titlee=p})("ngModelChange",function(){return l.search()}),t.qZA()()()()(),t.TgZ(25,"div",4)(26,"div",20)(27,"div",21)(28,"strong"),t._uU(29,"Select Product"),t.qZA(),t._UZ(30,"input",22),t.TgZ(31,"mat-autocomplete",23,24),t.YNc(33,B,2,2,"mat-option",25),t.ALo(34,"async"),t.qZA()()()(),t.TgZ(35,"div",26)(36,"ul")(37,"li")(38,"a",27),t.NdJ("click",function(){return l.generatePDFAgain()}),t._UZ(39,"img",28),t.qZA()(),t.TgZ(40,"li")(41,"a",29),t.NdJ("click",function(){return l.exportToExcel()}),t._UZ(42,"img",30),t.qZA()(),t.TgZ(43,"li")(44,"a",31),t.NdJ("click",function(){return l.printTable()}),t._UZ(45,"img",32),t.qZA()()()()(),t.TgZ(46,"div",33)(47,"div",34)(48,"div",4)(49,"div",35)(50,"div",4)(51,"div",36)(52,"div",21)(53,"label"),t._uU(54,"Date"),t.qZA(),t.TgZ(55,"input",37),t.NdJ("ngModelChange",function(p){return l.date=p})("change",function(){return l.filterData()}),t.qZA()()(),t.TgZ(56,"div",36)(57,"div",21)(58,"label"),t._uU(59,"Voucher Type"),t.qZA(),t.TgZ(60,"select",38),t.NdJ("ngModelChange",function(p){return l.selectedVoucherType=p})("change",function(){return l.filterData()}),t.TgZ(61,"option",39),t._uU(62,"Select Voucher Type"),t.qZA(),t.YNc(63,q,2,2,"option",40),t.qZA()()(),t.TgZ(64,"div",36)(65,"div",21)(66,"label"),t._uU(67,"Is Active"),t.qZA(),t.TgZ(68,"select",41),t.NdJ("ngModelChange",function(p){return l.selectActive=p})("change",function(){return l.filterData()}),t.TgZ(69,"option",42),t._uU(70,"Select Active Status"),t.qZA(),t.TgZ(71,"option",43),t._uU(72,"Yes"),t.qZA(),t.TgZ(73,"option",43),t._uU(74,"No"),t.qZA()()()()(),t.TgZ(75,"div",44),t.NdJ("click",function(){return l.clearFilters()}),t.TgZ(76,"a",45),t._uU(77,"Clear Filter"),t.qZA()()()()()(),t.TgZ(78,"div",46)(79,"table",47)(80,"thead")(81,"tr")(82,"th",48),t.NdJ("click",function(){return l.sort("id")}),t.TgZ(83,"label",49),t.NdJ("click",function(){return l.selectAll(l.initChecked)}),t.TgZ(84,"input",50),t.NdJ("ngModelChange",function(p){return l.allSelected=p})("change",function(){return l.selectAlll()}),t.qZA(),t._UZ(85,"span",51),t.qZA(),t._UZ(86,"i",52),t.qZA(),t.TgZ(87,"th",53),t.NdJ("click",function(){return l.sort("id")}),t._uU(88,"Sr No."),t._UZ(89,"i",52),t.qZA(),t.TgZ(90,"th",53),t.NdJ("click",function(){return l.sort("id")}),t._uU(91,"Name"),t._UZ(92,"i",52),t.qZA(),t.TgZ(93,"th",53),t.NdJ("click",function(){return l.sort("id")}),t._uU(94,"Date "),t._UZ(95,"i",52),t.qZA(),t.TgZ(96,"th",53),t.NdJ("click",function(){return l.sort("id")}),t._uU(97,"Voucher Type "),t._UZ(98,"i",52),t.qZA(),t.TgZ(99,"th",53),t.NdJ("click",function(){return l.sort("id")}),t._uU(100,"Voucher No. "),t._UZ(101,"i",52),t.qZA(),t.TgZ(102,"th",53),t.NdJ("click",function(){return l.sort("id")}),t._uU(103,"Price"),t._UZ(104,"i",52),t.qZA(),t.TgZ(105,"th",53),t.NdJ("click",function(){return l.sort("id")}),t._uU(106,"In QTY"),t._UZ(107,"i",52),t.qZA(),t.TgZ(108,"th",53),t.NdJ("click",function(){return l.sort("id")}),t._uU(109,"Out QTY"),t._UZ(110,"i",52),t.qZA()()(),t.YNc(111,V,4,11,"tbody",54),t.YNc(112,Q,5,0,"tbody",54),t.qZA(),t.TgZ(113,"div",55),t.YNc(114,k,1,0,"mat-progress-bar",56),t.qZA(),t.YNc(115,G,23,4,"div",57),t.qZA()()()),2&r){const n=t.MAs(32);t.xp6(9),t.Q6J("ngIf",l.isAdmin),t.xp6(15),t.Q6J("ngModel",l.titlee),t.xp6(6),t.Q6J("formControl",l.supplierControl)("matAutocomplete",n),t.xp6(1),t.Q6J("displayWith",l.displayFn),t.xp6(2),t.Q6J("ngForOf",t.lcZ(34,18,l.filteredSuppliers)),t.xp6(22),t.Q6J("ngModel",l.date),t.xp6(5),t.Q6J("ngModel",l.selectedVoucherType),t.xp6(3),t.Q6J("ngForOf",l.voucherList),t.xp6(5),t.Q6J("ngModel",l.selectActive),t.xp6(1),t.Q6J("ngValue",void 0),t.xp6(2),t.Q6J("ngValue",!0),t.xp6(2),t.Q6J("ngValue",!1),t.xp6(11),t.Q6J("ngModel",l.allSelected),t.xp6(27),t.Q6J("ngIf",(null==l.filteredData?null:l.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==l.filteredData?null:l.filteredData.length)&&!l.loader),t.xp6(2),t.Q6J("ngIf",l.loader),t.xp6(1),t.Q6J("ngIf",!l.loader)}},dependencies:[c.sg,c.O5,u.YN,u.Kr,u.Fj,u.Wl,u.EJ,u.JJ,u.On,u.oH,L.pW,A.LS,b.XC,b.ZL,M.ey,c.Ov,A._s,I.T],styles:["input[type=date][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),s})(),canActivate:[a(30597).l],data:{allowedRoles:["add_productledger","change_productledger","delete_productledger","view_productledger"]}}];let K=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[_.Bz.forChild(H),_.Bz]}),s})();var S=a(59549),W=a(44144),z=a(3056),j=a(87078),X=a(99602),tt=a(95113),et=a(64155),rt=a(6205),D=a(8468);let it=(()=>{class s{}return s.\u0275fac=function(r){return new(r||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[c.ez,K,D.I,D.I,b.Bb,S.lN,W.c,z.ZQ,j.T,X.FA,S.lN,M.XK,tt.LD,et.vQ,D.I,rt.X]}),s})()},30597:($,T,a)=>{a.d(T,{l:()=>v});var c=a(94650),_=a(89299),U=a(97185),P=a(42917),g=a(80927);let v=(()=>{class e{constructor(o,u,t,f,Z){this.router=o,this.Arout=u,this.toastr=t,this.profileService=f,this.coreService=Z}canActivate(o,u){const t=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(f=>{this.userDetails=f,this.permissions=this.userDetails?.permission}),t){const f=o.data.allowedRoles;console.log(f,"allowedRoles");const Z=t.some(C=>f.includes(C.codename));if(console.log(Z),this.coreService.getProfile().subscribe(C=>{this.userDetails=C,this.profileService.setUserDetails(this.userDetails);const L=C?.permission,A=this.profileService.getUserDetails();(!A||A.length!==L.length)&&(this.profileService.setUserPermission(L),window.location.reload())}),Z)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(o){return new(o||e)(c.LFG(_.F0),c.LFG(_.gz),c.LFG(U._W),c.LFG(P.J),c.LFG(g.p))},e.\u0275prov=c.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);