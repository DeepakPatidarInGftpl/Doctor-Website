"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[8573],{25062:(b,T,a)=>{a.d(T,{y:()=>y});var u=a(92340),d=a(94650),U=a(80529);let y=(()=>{class h{constructor(e){this.http=e,this.apiUrl=`${u.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(e){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}SupplierIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`,t)}addSupplier(e){return this.http.post(this.apiUrl+"/pv-api/supplier/",e)}updateSupplier(e,t){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,e)}deleteSupplier(e){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${e}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(e){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}VendorIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`,t)}addVendor(e){return this.http.post(this.apiUrl+"/pv-api/vendor/",e)}updateVendor(e,t){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,e)}deleteVendor(e){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${e}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}PaymentTermsIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`,t)}addPaymentTerms(e){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",e)}updatePaymentTerms(e,t){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,e)}deletePaymentTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${e}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(e){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}TransportIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${e}`,t)}addTransport(e){return this.http.post(this.apiUrl+"/pv-api/transport/",e)}updateTransport(e,t){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,e)}deleteTransport(e){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${e}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(e){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}EmployeeIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${e}`,t)}addEmployee(e){return this.http.post(this.apiUrl+"/pv-api/employee/",e)}updateEmployee(e,t){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,e)}deleteEmployee(e){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${e}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(e){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}CustomerIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${e}`,t)}addCustomer(e){return this.http.post(this.apiUrl+"/pv-api/customer/",e)}updateCustomer(e,t){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,e)}deleteCustomer(e){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${e}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(e){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}UserIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${e}`,t)}addUser(e){return this.http.post(this.apiUrl+"/pv-api/user/",e)}updateUser(e,t){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${t}`,e)}deleteUser(e){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${e}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(e){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${e}`)}addPermissionGroup(e){return this.http.post(this.apiUrl+"/pv-api/group/",e)}updatePermissionGroup(e,t){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${t}`,e)}deletePermissionGroup(e){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${e}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(e){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}DealerIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`,t)}addDealer(e){return this.http.post(this.apiUrl+"/pv-api/dealer/",e)}updateDealer(e,t){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`,e)}deleteDealer(e){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${e}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+e)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(e){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}TermsIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${e}`,t)}addTerms(e){return this.http.post(this.apiUrl+"/pv-api/terms/",e)}updateTerms(e,t){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${t}`,e)}deleteTerms(e){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${e}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(e){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}DepartmentIsActive(e,t){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${e}`,t)}addDepartment(e){return this.http.post(this.apiUrl+"/pv-api/department/",e)}updateDepartment(e,t){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${t}`,e)}deleteDepartment(e){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${e}`)}getCreditLimitByUserId(e){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${e}`)}}return h.\u0275fac=function(e){return new(e||h)(d.LFG(U.eN))},h.\u0275prov=d.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},8573:(b,T,a)=>{a.r(T),a.d(T,{StockListModule:()=>J});var u=a(36895),d=a(4392),U=a(96166),y=a(12983),h=a.n(y),g=a(80574),e=a(94327),t=a(94650),l=a(80927),Z=a(25062),c=a(24006),v=a(73162),S=a(54333),f=a(54040);function C(n,p){if(1&n){const i=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"label",45)(3,"input",46),t.NdJ("ngModelChange",function(s){const m=t.CHM(i).index,_=t.oxw(2);return t.KtG(_.selectedRows[m]=s)}),t.qZA(),t._UZ(4,"span",37),t.qZA()(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td",47)(10,"a",48),t._uU(11),t.qZA()(),t.TgZ(12,"td"),t._uU(13),t.qZA(),t.TgZ(14,"td"),t._uU(15),t.qZA(),t.TgZ(16,"td"),t._uU(17),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.qZA(),t.TgZ(20,"td"),t._uU(21),t.qZA()()}if(2&n){const i=p.$implicit,r=p.index,s=t.oxw(2);t.xp6(3),t.Q6J("ngModel",s.selectedRows[r]),t.xp6(3),t.Oqu(r+1),t.xp6(2),t.Oqu(null==i||null==i.variant?null:i.variant.sku),t.xp6(2),t.MGl("routerLink","//product/product-details/",null==i||null==i.variant?null:i.variant.product,""),t.xp6(1),t.Oqu(null==i?null:i.product_name),t.xp6(2),t.Oqu(null==i?null:i.min_qty),t.xp6(2),t.Oqu(null==i?null:i.available_qty),t.xp6(2),t.Oqu((null==i?null:i.mrp)??0),t.xp6(2),t.Oqu((null==i?null:i.stock_value)??0),t.xp6(2),t.Oqu((null==i?null:i.landing_stock_value)??0)}}const $=function(n,p){return{itemsPerPage:n,currentPage:p}};function L(n,p){if(1&n&&(t.TgZ(0,"tbody"),t.YNc(1,C,22,10,"tr",44),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&n){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.filteredData,i.key,i.reverse),t.WLB(8,$,i.itemsPerPage,i.p)))}}function M(n,p){1&n&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",49)(3,"p",50),t._uU(4,"Data not available"),t.qZA()()()())}function D(n,p){1&n&&t._UZ(0,"mat-progress-bar",51)}function P(n,p){if(1&n){const i=t.EpF();t.TgZ(0,"div",25)(1,"div",52)(2,"div",53),t._uU(3," Show per page "),t.TgZ(4,"select",54,55),t.NdJ("ngModelChange",function(s){t.CHM(i);const o=t.oxw();return t.KtG(o.itemsPerPage=s)})("change",function(){t.CHM(i);const s=t.MAs(5),o=t.oxw();return t.KtG(o.changePg(s.value))}),t.TgZ(6,"option",56),t._uU(7,"10"),t.qZA(),t.TgZ(8,"option",57),t._uU(9,"20"),t.qZA(),t.TgZ(10,"option",58),t._uU(11,"30"),t.qZA(),t.TgZ(12,"option",59),t._uU(13,"50"),t.qZA(),t.TgZ(14,"option",60),t._uU(15,"100"),t.qZA(),t.TgZ(16,"option",61),t._uU(17,"All"),t.qZA()()()(),t.TgZ(18,"div",62)(19,"div",63)(20,"pagination-controls",64),t.NdJ("pageChange",function(s){t.CHM(i);const o=t.oxw();return t.KtG(o.p=s)}),t.qZA(),t.TgZ(21,"div",65),t._uU(22),t.qZA()()()()}if(2&n){const i=t.oxw();t.xp6(4),t.Q6J("ngModel",i.itemsPerPage),t.xp6(18),t.lnq("Showing ",i.itemsPerPage," to ",null==i.tableData?null:i.tableData.length," of ",i.p," entries")}}const E=[{path:"",component:(()=>{class n{constructor(i,r){this.coreService=i,this.contactService=r,this.tableData=[],this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.loader=!0,this.allSelected=!1,this.key="id",this.reverse=!1,this.sho=!0,this.sho1=!1,this.sho2=!1}ngOnInit(){this.coreService.getProductStock().subscribe(i=>{this.tableData=i,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.getVoucher()}getVoucher(){this.contactService.getVoucherType().subscribe(i=>{console.log(i),this.voucherList=i})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(i){this.tableData.forEach(i?r=>{r.isSelected=!1}:r=>{r.isSelected=!0})}search(){if(""===this.titlee)this.ngOnInit();else{const i=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(r=>r?.product_name?.toLocaleLowerCase().includes(i))}}sort(i){this.key=i,this.reverse=!this.reverse}hide(){this.sho=!1,this.sho1=!this.sho1,this.sho2=!1}hide1(){this.sho=!0,this.sho1=!1,this.sho2=!this.sho2}filterData(){let i=this.tableData.slice();if(this.enterFilterSku){const r=this.enterFilterSku.toLowerCase();i=i.filter(s=>s?.variant?.sku?.toString()?.toLowerCase()?.includes(r))}this.filteredData=i}clearFilters(){this.enterFilterSku=null,this.filterData()}generatePDF(){const i=new U.default;i.setFontSize(15),i.setTextColor(33,43,54),i.text("Product Stock List",10,10),h()(i,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Item Code"},{header:"Product Name"},{header:"Min QTY"},{header:"Available QTY"},{header:"MRP"},{header:"Stock Value"},{header:"Landing Stock Value"},{header:"Is Active"}]}),i.save("productStock.pdf")}generatePDFAgain(){const i=new U.default;i.setFontSize(12),i.setTextColor(33,43,54),i.text("Product Stock List ",82,10),i.text("",10,15),h()(i,{head:[["#","Item Code"," Product Name ","Min QTY","Available QTY","MRP","Stock Value","Landing Stock Value"]],body:this.filteredData.map((s,o)=>[o+1,s.variant?.sku,s.product_name,s.min_qty,s.available_qty,s.mrp,s.stock_value,s.landing_stock_value]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),i.save("Product Stock  .pdf")}getVisibleDataFromTable(){const i=[],r=document.getElementById("mytable"),s=r.querySelector("thead tr"),o=r.querySelectorAll("tbody tr"),m=[];return s.querySelectorAll("th").forEach(_=>{const k=_.textContent.trim();m.push(k)}),i.push(m),o.forEach(_=>{const k=[];_.querySelectorAll("td").forEach(A=>{k.push(A.textContent.trim())}),i.push(k)}),i}exportToExcel(){const i=this.getVisibleDataFromTable(),r=g.P6.aoa_to_sheet(i),s=g.P6.book_new();g.P6.book_append_sheet(s,r,"Sheet1");const o=g.cW(s,{bookType:"xlsx",type:"array"}),m=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,e.saveAs)(m,"productStock.xlsx")}printTable(){const i=document.getElementById("mytable"),s=document.querySelector(".titl").outerHTML,m=i.cloneNode(!0).outerHTML,k="<style>.spaced-title { margin-top: 80px; }</style>"+s.replace("titl","spaced-title")+m,A=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=k,window.print(),document.body.innerHTML=A}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.tableData.length)}}return n.\u0275fac=function(i){return new(i||n)(t.Y36(l.p),t.Y36(Z.y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-stock-list"]],decls:83,vars:7,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Product Name...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-6","col-sm-6","col-12"],[1,"form-group","mx-5"],["type","search","placeholder","Search Item Code...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[3,"click"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],["class","row",4,"ngIf"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"]],template:function(i,r){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),t._uU(3,"Stock"),t.qZA(),t.TgZ(4,"h6"),t._uU(5,"Manage your Stock"),t.qZA()()(),t.TgZ(6,"div",3)(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"a",8),t._UZ(12,"img",9),t.TgZ(13,"span"),t._UZ(14,"img",10),t.qZA()()(),t.TgZ(15,"div",11)(16,"a",12),t._UZ(17,"img",13),t.qZA(),t.TgZ(18,"div",14)(19,"label")(20,"input",15),t.NdJ("ngModelChange",function(o){return r.titlee=o})("ngModelChange",function(){return r.search()}),t.qZA()()()()(),t.TgZ(21,"div",16)(22,"ul")(23,"li")(24,"a",17),t.NdJ("click",function(){return r.generatePDFAgain()}),t._UZ(25,"img",18),t.qZA()(),t.TgZ(26,"li")(27,"a",19),t.NdJ("click",function(){return r.exportToExcel()}),t._UZ(28,"img",20),t.qZA()(),t.TgZ(29,"li")(30,"a",21),t.NdJ("click",function(){return r.printTable()}),t._UZ(31,"img",22),t.qZA()()()()(),t.TgZ(32,"div",23)(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",25)(37,"div",27)(38,"div",28)(39,"label"),t._uU(40,"Search Item Code"),t.qZA(),t.TgZ(41,"input",29),t.NdJ("ngModelChange",function(o){return r.enterFilterSku=o})("ngModelChange",function(){return r.filterData()}),t.qZA()()()(),t.TgZ(42,"div",30),t.NdJ("click",function(){return r.clearFilters()}),t.TgZ(43,"a",31),t._uU(44,"Clear Filter"),t.qZA()()()()()(),t.TgZ(45,"div",32)(46,"table",33)(47,"thead")(48,"tr")(49,"th",34),t.NdJ("click",function(){return r.sort("id")}),t.TgZ(50,"label",35),t.NdJ("click",function(){return r.selectAll(r.initChecked)}),t.TgZ(51,"input",36),t.NdJ("ngModelChange",function(o){return r.allSelected=o})("change",function(){return r.selectAlll()}),t.qZA(),t._UZ(52,"span",37),t.qZA(),t._UZ(53,"i",38),t.qZA(),t.TgZ(54,"th",39),t.NdJ("click",function(){return r.sort("id")}),t._uU(55,"Sr No."),t._UZ(56,"i",38),t.qZA(),t.TgZ(57,"th",39),t.NdJ("click",function(){return r.sort("id")}),t._uU(58,"Item Code"),t._UZ(59,"i",38),t.qZA(),t.TgZ(60,"th",39),t.NdJ("click",function(){return r.sort("id")}),t._uU(61,"Product Name "),t._UZ(62,"i",38),t.qZA(),t.TgZ(63,"th",39),t.NdJ("click",function(){return r.sort("id")}),t._uU(64,"Min QTY"),t._UZ(65,"i",38),t.qZA(),t.TgZ(66,"th",39),t.NdJ("click",function(){return r.sort("id")}),t._uU(67,"Available QTY"),t._UZ(68,"i",38),t.qZA(),t.TgZ(69,"th",39),t.NdJ("click",function(){return r.sort("id")}),t._uU(70,"MRP"),t._UZ(71,"i",38),t.qZA(),t.TgZ(72,"th",39),t.NdJ("click",function(){return r.sort("id")}),t._uU(73,"Stock Value"),t._UZ(74,"i",38),t.qZA(),t.TgZ(75,"th",39),t.NdJ("click",function(){return r.sort("id")}),t._uU(76,"Landing Stock Value"),t._UZ(77,"i",38),t.qZA()()(),t.YNc(78,L,4,11,"tbody",40),t.YNc(79,M,5,0,"tbody",40),t.qZA(),t.TgZ(80,"div",41),t.YNc(81,D,1,0,"mat-progress-bar",42),t.qZA(),t.YNc(82,P,23,4,"div",43),t.qZA()()()),2&i&&(t.xp6(20),t.Q6J("ngModel",r.titlee),t.xp6(21),t.Q6J("ngModel",r.enterFilterSku),t.xp6(10),t.Q6J("ngModel",r.allSelected),t.xp6(27),t.Q6J("ngIf",(null==r.filteredData?null:r.filteredData.length)>=0),t.xp6(1),t.Q6J("ngIf",0===(null==r.filteredData?null:r.filteredData.length)&&!r.loader),t.xp6(2),t.Q6J("ngIf",r.loader),t.xp6(1),t.Q6J("ngIf",!r.loader))},dependencies:[u.sg,u.O5,d.yS,c.YN,c.Kr,c.Fj,c.Wl,c.EJ,c.JJ,c.On,v.pW,S.LS,S._s,f.T],styles:["input[type=search][_ngcontent-%COMP%], select[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),n})(),canActivate:[a(30597).l],data:{allowedRoles:["add_stock","change_stock","delete_stock","view_stock"]}}];let q=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(E),d.Bz]}),n})();var N=a(8468);let J=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[u.ez,q,N.I]}),n})()},30597:(b,T,a)=>{a.d(T,{l:()=>g});var u=a(94650),d=a(4392),U=a(97185),y=a(42917),h=a(80927);let g=(()=>{class e{constructor(l,Z,c,v,S){this.router=l,this.Arout=Z,this.toastr=c,this.profileService=v,this.coreService=S}canActivate(l,Z){const c=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(v=>{this.userDetails=v,this.permissions=this.userDetails?.permission}),c){const v=l.data.allowedRoles,S=c.some(f=>v.includes(f.codename));if(this.coreService.getProfile().subscribe(f=>{this.userDetails=f,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(f);const C=f?.permission,$=this.profileService.getUserDetails();(!$||$.length!==C.length)&&(this.profileService.setUserPermission(C),window.location.reload())}),S)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return e.\u0275fac=function(l){return new(l||e)(u.LFG(d.F0),u.LFG(d.gz),u.LFG(U._W),u.LFG(y.J),u.LFG(h.p))},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()}}]);