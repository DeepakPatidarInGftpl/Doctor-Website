"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[41433],{25062:(M,C,c)=>{c.d(C,{y:()=>g});var m=c(92340),v=c(94650),b=c(80529);let g=(()=>{class _{constructor(t){this.http=t,this.apiUrl=`${m.N.api}`}UpdateDefaultAddress(t){return this.http.post(this.apiUrl+"/pv-api/make_default_address/",t)}GetUsedPoints(t){return this.http.get(`${this.apiUrl+"/pv-api/total_use_point/?user_id="}${t}`)}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(t){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}SupplierIsActive(t,l){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,l)}addSupplier(t){return this.http.post(this.apiUrl+"/pv-api/supplier/",t)}updateSupplier(t,l){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${l}`,t)}deleteSupplier(t){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(t){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}VendorIsActive(t,l){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,l)}addVendor(t){return this.http.post(this.apiUrl+"/pv-api/vendor/",t)}updateVendor(t,l){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${l}`,t)}deleteVendor(t){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}PaymentTermsIsActive(t,l){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,l)}addPaymentTerms(t){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",t)}updatePaymentTerms(t,l){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${l}`,t)}deletePaymentTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(t){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}TransportIsActive(t,l){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,l)}addTransport(t){return this.http.post(this.apiUrl+"/pv-api/transport/",t)}updateTransport(t,l){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${l}`,t)}deleteTransport(t){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(t){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}EmployeeIsActive(t,l){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,l)}addEmployee(t){return this.http.post(this.apiUrl+"/pv-api/employee/",t)}updateEmployee(t,l){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${l}`,t)}deleteEmployee(t){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(t){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}CustomerIsActive(t,l){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,l)}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/customer/",t)}updateCustomer(t,l){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${l}`,t)}deleteCustomer(t){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(t){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}UserIsActive(t,l){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${t}`,l)}addUser(t){return this.http.post(this.apiUrl+"/pv-api/user/",t)}updateUser(t,l){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${l}`,t)}deleteUser(t){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(t){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${t}`)}addPermissionGroup(t){return this.http.post(this.apiUrl+"/pv-api/group/",t)}updatePermissionGroup(t,l){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${l}`,t)}deletePermissionGroup(t){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${t}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(t){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}DealerIsActive(t,l){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`,l)}addDealer(t){return this.http.post(this.apiUrl+"/pv-api/dealer/",t)}updateDealer(t,l){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${l}`,t)}deleteDealer(t){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+t)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}TermsIsActive(t,l){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${t}`,l)}addTerms(t){return this.http.post(this.apiUrl+"/pv-api/terms/",t)}updateTerms(t,l){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${l}`,t)}deleteTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(t){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}DepartmentIsActive(t,l){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${t}`,l)}addDepartment(t){return this.http.post(this.apiUrl+"/pv-api/department/",t)}updateDepartment(t,l){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${l}`,t)}deleteDepartment(t){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}getCreditLimitByUserId(t){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${t}`)}}return _.\u0275fac=function(t){return new(t||_)(v.LFG(b.eN))},_.\u0275prov=v.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},41433:(M,C,c)=>{c.r(C),c.d(C,{EmployeeModule:()=>ne});var m=c(36895),v=c(4392),b=c(2454),g=c.n(b),_=c(96166),A=c(12983),t=c.n(A),l=c(80574),a=c(94327),e=c(94650),U=c(25062),y=c(72326),E=c(42917),T=c(72266),h=c(24006),Z=c(73162),D=c(54333),P=c(54040);function B(s,u){1&s&&(e.TgZ(0,"div",69)(1,"a",70),e._UZ(2,"img",71),e._uU(3,"Add Employee "),e.qZA()())}function L(s,u){if(1&s&&(e.TgZ(0,"option",72),e._uU(1),e.qZA()),2&s){const i=u.$implicit;e.s9C("value",i.name),e.xp6(1),e.hij(" ",i.name,"")}}function O(s,u){if(1&s&&(e.TgZ(0,"option",72),e._uU(1),e.qZA()),2&s){const i=u.$implicit;e.Q6J("value",i.id),e.xp6(1),e.Oqu(i.title)}}function w(s,u){if(1&s&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&s){const i=e.oxw().$implicit;e.xp6(1),e.hij(" ",(null==i||null==i.closing_balance?null:i.closing_balance.closing_balance_type)+(null!=(null==i||null==i.closing_balance?null:i.closing_balance.closing_balance)?" : "+(null==i||null==i.closing_balance?null:i.closing_balance.closing_balance):"")," ")}}function R(s,u){1&s&&(e.TgZ(0,"span"),e._uU(1,"-"),e.qZA())}function F(s,u){if(1&s){const i=e.EpF();e.TgZ(0,"div",83),e.NdJ("click",function(){e.CHM(i);const r=e.oxw(),o=r.$implicit,p=r.index,d=e.oxw(2);return e.KtG(o.is_active?d.isActive(p,o.id):d.Active(p,o.id))}),e._UZ(1,"input",84),e.TgZ(2,"label",85),e._uU(3,"checkbox"),e.qZA()()}if(2&s){const i=e.oxw(),n=i.index,r=i.$implicit;e.xp6(1),e.s9C("id","places.CountryName"+n),e.Q6J("checked",r.is_active),e.xp6(1),e.s9C("for","places.CountryName"+n)}}function G(s,u){if(1&s){const i=e.EpF();e.TgZ(0,"div",83),e.NdJ("click",function(){e.CHM(i);const r=e.oxw(),o=r.$implicit,p=r.index,d=e.oxw(2);return e.KtG(o.is_active?d.isActive(p,o.id):d.Active(p,o.id))}),e._UZ(1,"input",86),e.TgZ(2,"label",85),e._uU(3,"checkbox"),e.qZA()()}if(2&s){const i=e.oxw(),n=i.index,r=i.$implicit;e.xp6(1),e.s9C("id","places.CountryName"+n),e.Q6J("checked",r.is_active),e.xp6(1),e.s9C("for","places.CountryName"+n)}}function Q(s,u){if(1&s&&(e.TgZ(0,"a",79),e._UZ(1,"img",87),e.qZA()),2&s){const i=e.oxw().$implicit;e.MGl("routerLink","//contacts/updateEmployee/",i.id,"")}}function Y(s,u){if(1&s){const i=e.EpF();e.TgZ(0,"a",88),e.NdJ("click",function(){e.CHM(i);const r=e.oxw(),o=r.index,p=r.$implicit,d=e.oxw(2);return e.KtG(d.confirmText(o,p.id))}),e._UZ(1,"img",89),e.qZA()}}function V(s,u){if(1&s){const i=e.EpF();e.TgZ(0,"tr")(1,"td")(2,"label",74)(3,"input",75),e.NdJ("ngModelChange",function(r){const p=e.CHM(i).index,d=e.oxw(2);return e.KtG(d.selectedRows[p]=r)}),e.qZA(),e._UZ(4,"span",50),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",76)(8,"a",77),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e.YNc(19,w,2,1,"span",52),e.YNc(20,R,2,0,"span",52),e.qZA(),e.TgZ(21,"td"),e._uU(22),e.qZA(),e.TgZ(23,"td"),e._uU(24),e.qZA(),e.TgZ(25,"td"),e.YNc(26,F,4,3,"div",78),e.YNc(27,G,4,3,"div",78),e.qZA(),e.TgZ(28,"td")(29,"a",79),e._UZ(30,"img",80),e.qZA(),e.YNc(31,Q,2,1,"a",81),e.YNc(32,Y,2,0,"a",82),e.qZA()()}if(2&s){const i=u.$implicit,n=u.index,r=e.oxw(2);e.xp6(3),e.Q6J("ngModel",r.selectedRows[n]),e.xp6(3),e.Oqu(n+1),e.xp6(2),e.MGl("routerLink","//contacts/employeeDetails/",i.id,""),e.xp6(1),e.Oqu(i.name),e.xp6(2),e.Oqu(i.mobile_no),e.xp6(2),e.Oqu(null==i?null:i.employee_type),e.xp6(2),e.Oqu(null==i?null:i.email),e.xp6(2),e.Oqu(null==i?null:i.department.title),e.xp6(2),e.Q6J("ngIf",null==i||null==i.closing_balance?null:i.closing_balance.isSuccess),e.xp6(1),e.Q6J("ngIf",!(null!=i&&null!=i.closing_balance&&i.closing_balance.isSuccess)),e.xp6(2),e.Oqu(null==i||null==i.userid?null:i.userid.user_type),e.xp6(2),e.Oqu(null==i||null==i.address[0]||null==i.address[0].city?null:i.address[0].city.city),e.xp6(2),e.Q6J("ngIf",i.is_active),e.xp6(1),e.Q6J("ngIf",!i.is_active),e.xp6(2),e.MGl("routerLink","//contacts/employeeDetails/",i.id,""),e.xp6(2),e.Q6J("ngIf",r.isEdit),e.xp6(1),e.Q6J("ngIf",r.isDelete)}}const K=function(s,u){return{itemsPerPage:s,currentPage:u}};function j(s,u){if(1&s&&(e.TgZ(0,"tbody"),e.YNc(1,V,33,17,"tr",73),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&s){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,i.filteredData,i.key,i.reverse),e.WLB(8,K,i.itemsPerPage,i.p)))}}function W(s,u){1&s&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",90)(3,"p",91),e._uU(4,"Data not available"),e.qZA()()()())}function z(s,u){1&s&&e._UZ(0,"mat-progress-bar",92)}let H=(()=>{class s{constructor(i,n,r,o){this.contactService=i,this.QueryService=n,this.cs=r,this.hrmService=o,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.roleType="",this.selectedCompany="",this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.QueryService.filterToggle()}confirmText(i,n){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(r=>{r.isConfirmed&&this.contactService.deleteEmployee(n).subscribe(o=>{this.delRes=o,this.delRes.success?(g().fire({icon:"success",title:"Deleted !",text:this.delRes.msg}),this.tableData.splice(i,1),this.ngOnInit()):g().fire({icon:"error",title:"Not Deleted !",text:this.delRes.error})})})}isActive(i,n){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(r=>{r.isConfirmed&&(this.contactService.EmployeeIsActive(n,"").subscribe(o=>{this.delRes=o,this.delRes.success&&this.filteredData.forEach(p=>{p.id==n&&(p.is_active=!1)})}),g().fire({icon:"success",title:"Deactivate!",text:"Employee is Deactivate Successfully."}))})}Active(i,n){g().fire({title:"Are you sure?",text:"Do you want to Active this employee!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(r=>{r.isConfirmed&&(this.contactService.EmployeeIsActive(n,"").subscribe(o=>{this.delRes=o,this.delRes.success&&this.filteredData.forEach(p=>{p.id==n&&(p.is_active=!0)})}),g().fire({icon:"success",title:"Active!",text:this.delRes.msg}))})}ngOnInit(){this.contactService.getEmployee().subscribe(i=>{this.tableData=i,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.cs.userDetails$.subscribe(i=>{this.userDetails=i,this.userDetails?.permission?.map(r=>{"contacts"===r.content_type.app_label&&"employee"===r.content_type.model&&"add_employee"==r.codename?this.isAdd=r.codename:"contacts"===r.content_type.app_label&&"employee"===r.content_type.model&&"change_employee"==r.codename?this.isEdit=r.codename:"contacts"===r.content_type.app_label&&"employee"===r.content_type.model&&"delete_employee"==r.codename&&(this.isDelete=r.codename)})}),this.getGroup(),this.GetAllDepartment()}getGroup(){this.contactService.getPermissionGroup().subscribe(i=>{this.groupList=i})}selectAlll(){this.selectedRows.fill(this.allSelected)}ngAfterViewChecked(){}selectAll(i){this.tableData.forEach(i?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}deleteId(i){this.contactService.deleteSupplier(i).subscribe(n=>{this.delRes=n})}search(){if(""===this.titlee)this.ngOnInit();else{const i=this.titlee.toLocaleLowerCase();this.filteredData=this.tableData.filter(n=>{const r=n.name.toLocaleLowerCase(),o=n?.mobile_no.toLocaleLowerCase(),p=n?.address[0]?.city?.city?.toLocaleLowerCase();return!(!r.match(i)&&!o.match(i)&&!p.match(i))})}}sort(i){this.key=i,this.reverse=!this.reverse}generatePDF(){const i=new _.default;i.setFontSize(15),i.setTextColor(33,43,54),i.text("Employee List",10,10),t()(i,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:"Name"},{header:"Email"},{header:"Mobile Number"},{header:"Opening Balance"},{header:"Commision"},{header:"PanCard"},{header:"User Role"},{header:"Is Active"}]}),i.save("employee.pdf")}generatePDFAgain(){const i=new _.default;i.setFontSize(12),i.setTextColor(33,43,54),i.text("Employee List",82,10),i.text("",10,15),t()(i,{head:[["#","Name","Mobile Number","Employee Type","Email","Opening Balance","Joining","PanCard","User Role"]],body:this.tableData.map((r,o)=>[o+1,r.name,r.mobile_no,r.employee_type,r.email,r?.opening_balance_type+(null!=r?.opening_balance?" : "+r?.opening_balance:""),r.date_of_joining,r.pan_no,r.userid?.user_type]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),i.save("employee.pdf")}getVisibleDataFromTable(){const i=[],n=document.getElementById("mytable"),r=n.querySelector("thead tr"),o=n.querySelectorAll("tbody tr"),p=[];return r.querySelectorAll("th").forEach(d=>{const f=d.textContent.trim();"Is Active"!==f&&"Action"!==f&&p.push(f)}),i.push(p),o.forEach(d=>{const f=[];d.querySelectorAll("td").forEach(N=>{f.push(N.textContent.trim())}),i.push(f)}),i}exportToExcel(){const i=this.getVisibleDataFromTable(),n=l.P6.aoa_to_sheet(i),r=l.P6.book_new();l.P6.book_append_sheet(r,n,"Sheet1");const o=l.cW(r,{bookType:"xlsx",type:"array"}),p=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,a.saveAs)(p,"employee.xlsx")}printTable(){const i=document.getElementById("mytable"),n=document.querySelector(".titl");if(!i)return void console.error("Table not found");const r=i.cloneNode(!0),o=n.cloneNode(!0),p=r.querySelector("th.thone:nth-child(11)");p&&p.remove();const d=r.querySelector("th.thone:nth-child(1)");d&&d.remove();const f=r.querySelector("th.thone:last-child");f&&f.remove(),r.querySelectorAll("tr").forEach(x=>{const J=x.querySelector("td:nth-child(11)");J&&J.remove();const I=x.querySelector("td:nth-child(1)");I&&I.remove();const k=x.querySelector("td:last-child");k&&k.remove()});const $=document.createElement("div");o.classList.add("spaced-title"),$.appendChild(o),$.appendChild(r);const S=document.createElement("style");S.id="printStyle",S.textContent="\n        @media print {\n            body * {\n                visibility: hidden;\n            }\n            #printContainer, #printContainer * {\n                visibility: visible;\n            }\n            #printContainer {\n                position: absolute;\n                top: 0;\n                left: 0;\n                width: 100%;\n            }\n            .spaced-title {\n                margin-top: 60px;\n                margin-bottom: 20px;\n            }\n        }\n    ",document.head.appendChild(S),$.id="printContainer",document.body.appendChild($),window.print(),window.addEventListener("afterprint",()=>{this.clearData()}),setTimeout(()=>{this.clearData()},2e3)}clearData(){const i=document.getElementById("printContainer"),n=document.getElementById("printStyle");i&&document.body.removeChild(i),n&&document.head.removeChild(n)}filterData(i,n){let r=this.tableData.slice();if(this.roleType&&(r=r.filter(o=>o?.userid?.role?.name===this.roleType)),this.selectedCompany){const o=this.selectedCompany.toLowerCase();r=r.filter(p=>p?.mobile_no?.toString().toLowerCase().includes(o))}this.selectCredit&&(r=r.filter(o=>o?.opening_balance_type===this.selectCredit)),null!=this.selectActive&&(r=r.filter(o=>o?.is_active===this.selectActive)),"Employeetype"==n&&(r=r.filter(o=>o?.employee_type===i)),"departmenttyoe"==n&&(r=r.filter(o=>o?.department?.id==i)),this.filteredData=r}clearFilter(){this.roleType=null,this.selectedCompany=null,this.selectCredit=null,this.selectActive=void 0,this.filterData()}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.filteredData?.length)}GetAllDepartment(){this.hrmService.getDepartment().subscribe({next:i=>{this.departmentList=i},error:i=>{console.log(i)}})}}return s.\u0275fac=function(i){return new(i||s)(e.Y36(U.y),e.Y36(y._),e.Y36(E.J),e.Y36(T.z))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-employee"]],decls:168,vars:19,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Name...",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg-3","col-sm-6","col-12"],[1,"form-group"],["type","search","placeholder","Search Mobile No.","maxlength","10",1,"search",3,"ngModel","ngModelChange"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],[3,"value",4,"ngFor","ngForOf"],["value","undefined","disabled","","selected",""],["value","Cr"],["value","Dr"],["selected","","disabled","",3,"ngValue"],[3,"ngValue"],[1,"form-select",3,"change"],["vals",""],["value",""],["depvals",""],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","20%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//contacts/addEmployee",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[4,"ngFor","ngForOf"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],["class","status-toggle d-flex justify-content-between align-items-center",3,"click",4,"ngIf"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],[1,"status-toggle","d-flex","justify-content-between","align-items-center",3,"click"],["disabled","true","type","checkbox",1,"check",2,"accent-color","var(--primary-color) !important",3,"id","checked"],[1,"checktoggle",3,"for"],["disabled","true","type","checkbox",1,"check",3,"id","checked"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","10"],[1,"center-textt"],["mode","indeterminate",1,"progressbar"]],template:function(i,n){if(1&i){const r=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"Employee list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search Employee"),e.qZA()(),e.YNc(6,B,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(p){return n.titlee=p})("ngModelChange",function(){return n.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return n.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"Mobile Number"),e.qZA(),e.TgZ(42,"input",30),e.NdJ("ngModelChange",function(p){return n.selectedCompany=p})("ngModelChange",function(){return n.filterData()}),e.qZA()()(),e.TgZ(43,"div",28)(44,"div",29)(45,"label"),e._uU(46,"Role Type"),e.qZA(),e.TgZ(47,"select",31),e.NdJ("ngModelChange",function(p){return n.roleType=p})("change",function(){return n.filterData()}),e.TgZ(48,"option",32),e._uU(49,"Role Type"),e.qZA(),e.YNc(50,L,2,2,"option",33),e.qZA()()(),e.TgZ(51,"div",28)(52,"div",29)(53,"label"),e._uU(54,"Opening Balance Type"),e.qZA(),e.TgZ(55,"select",31),e.NdJ("ngModelChange",function(p){return n.selectCredit=p})("change",function(){return n.filterData()}),e.TgZ(56,"option",34),e._uU(57,"Opening Balance Type"),e.qZA(),e.TgZ(58,"option",35),e._uU(59,"Cr"),e.qZA(),e.TgZ(60,"option",36),e._uU(61,"Dr"),e.qZA()()()(),e.TgZ(62,"div",28)(63,"div",29)(64,"label"),e._uU(65,"Is Active"),e.qZA(),e.TgZ(66,"select",31),e.NdJ("ngModelChange",function(p){return n.selectActive=p})("change",function(){return n.filterData()}),e.TgZ(67,"option",37),e._uU(68,"Select Active Status"),e.qZA(),e.TgZ(69,"option",38),e._uU(70,"Yes"),e.qZA(),e.TgZ(71,"option",38),e._uU(72,"No"),e.qZA()()()(),e.TgZ(73,"div",28)(74,"div",29)(75,"label"),e._uU(76,"Employee type"),e.qZA(),e.TgZ(77,"select",39,40),e.NdJ("change",function(){e.CHM(r);const p=e.MAs(78);return e.KtG(n.filterData(p.value,"Employeetype"))}),e.TgZ(79,"option",41),e._uU(80,"Select Active Status"),e.qZA(),e.TgZ(81,"option"),e._uU(82,"Fresher"),e.qZA(),e.TgZ(83,"option"),e._uU(84,"Experienced"),e.qZA(),e.TgZ(85,"option"),e._uU(86,"Master"),e.qZA()()()(),e.TgZ(87,"div",28)(88,"div",29)(89,"label"),e._uU(90,"Department type"),e.qZA(),e.TgZ(91,"select",39,42),e.NdJ("change",function(){e.CHM(r);const p=e.MAs(92);return e.KtG(n.filterData(p.value,"departmenttyoe"))}),e.TgZ(93,"option",41),e._uU(94,"Select Active Status"),e.qZA(),e.YNc(95,O,2,2,"option",33),e.qZA()()()(),e.TgZ(96,"div",43),e.NdJ("click",function(){return n.clearFilter()}),e.TgZ(97,"a",44),e._uU(98,"Clear Filter"),e.qZA()()()()()(),e.TgZ(99,"div",45)(100,"table",46)(101,"thead")(102,"tr")(103,"th",47),e.NdJ("click",function(){return n.sort("id")}),e.TgZ(104,"label",48),e.NdJ("click",function(){return n.selectAll(n.initChecked)}),e.TgZ(105,"input",49),e.NdJ("ngModelChange",function(p){return n.allSelected=p})("change",function(){return n.selectAlll()}),e.qZA(),e._UZ(106,"span",50),e.qZA(),e._UZ(107,"i",51),e.qZA(),e.TgZ(108,"th",47),e.NdJ("click",function(){return n.sort("id")}),e._uU(109,"Sr. No."),e._UZ(110,"i",51),e.qZA(),e.TgZ(111,"th",47),e.NdJ("click",function(){return n.sort("id")}),e._uU(112,"Name "),e._UZ(113,"i",51),e.qZA(),e.TgZ(114,"th",47),e.NdJ("click",function(){return n.sort("id")}),e._uU(115,"Mobile Number "),e._UZ(116,"i",51),e.qZA(),e.TgZ(117,"th",47),e.NdJ("click",function(){return n.sort("id")}),e._uU(118,"Employee Type"),e._UZ(119,"i",51),e.qZA(),e.TgZ(120,"th",47),e.NdJ("click",function(){return n.sort("id")}),e._uU(121,"Email"),e._UZ(122,"i",51),e.qZA(),e.TgZ(123,"th",47),e.NdJ("click",function(){return n.sort("id")}),e._uU(124,"Department"),e._UZ(125,"i",51),e.qZA(),e.TgZ(126,"th",47),e.NdJ("click",function(){return n.sort("id")}),e._uU(127," Current Balance "),e._UZ(128,"i",51),e.qZA(),e.TgZ(129,"th",47),e.NdJ("click",function(){return n.sort("id")}),e._uU(130,"User Role"),e._UZ(131,"i",51),e.qZA(),e.TgZ(132,"th",47),e.NdJ("click",function(){return n.sort("id")}),e._uU(133,"City "),e._UZ(134,"i",51),e.qZA(),e.TgZ(135,"th",47),e.NdJ("click",function(){return n.sort("id")}),e._uU(136,"Is Active "),e._UZ(137,"i",51),e.qZA(),e.TgZ(138,"th",47),e.NdJ("click",function(){return n.sort("id")}),e._uU(139,"Action "),e._UZ(140,"i",51),e.qZA()()(),e.YNc(141,j,4,11,"tbody",52),e.YNc(142,W,5,0,"tbody",52),e.qZA(),e.TgZ(143,"div",53),e.YNc(144,z,1,0,"mat-progress-bar",54),e.qZA(),e.TgZ(145,"div",26)(146,"div",55)(147,"div",56),e._uU(148," Show per page "),e.TgZ(149,"select",57,58),e.NdJ("ngModelChange",function(p){return n.itemsPerPage=p})("change",function(){e.CHM(r);const p=e.MAs(150);return e.KtG(n.changePg(p.value))}),e.TgZ(151,"option",59),e._uU(152,"10"),e.qZA(),e.TgZ(153,"option",60),e._uU(154,"20"),e.qZA(),e.TgZ(155,"option",61),e._uU(156,"30"),e.qZA(),e.TgZ(157,"option",62),e._uU(158,"50"),e.qZA(),e.TgZ(159,"option",63),e._uU(160,"100"),e.qZA(),e.TgZ(161,"option",64),e._uU(162,"All"),e.qZA()()()(),e.TgZ(163,"div",65)(164,"div",66)(165,"pagination-controls",67),e.NdJ("pageChange",function(p){return n.p=p}),e.qZA(),e.TgZ(166,"div",68),e._uU(167),e.qZA()()()()()()()}2&i&&(e.xp6(6),e.Q6J("ngIf",n.isAdd),e.xp6(15),e.Q6J("ngModel",n.titlee),e.xp6(21),e.Q6J("ngModel",n.selectedCompany),e.xp6(5),e.Q6J("ngModel",n.roleType),e.xp6(3),e.Q6J("ngForOf",n.groupList),e.xp6(5),e.Q6J("ngModel",n.selectCredit),e.xp6(11),e.Q6J("ngModel",n.selectActive),e.xp6(1),e.Q6J("ngValue",void 0),e.xp6(2),e.Q6J("ngValue",!0),e.xp6(2),e.Q6J("ngValue",!1),e.xp6(24),e.Q6J("ngForOf",n.departmentList),e.xp6(10),e.Q6J("ngModel",n.allSelected),e.xp6(36),e.Q6J("ngIf",(null==n.filteredData?null:n.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.filteredData?null:n.filteredData.length)),e.xp6(2),e.Q6J("ngIf",n.loader),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq("Showing ",n.itemsPerPage," to ",null==n.filteredData?null:n.filteredData.length," of ",n.p," entries"))},dependencies:[m.sg,m.O5,v.yS,h.YN,h.Kr,h.Fj,h.Wl,h.EJ,h.JJ,h.nD,h.On,Z.pW,D.LS,D._s,P.T]}),s})();var X=c(30597);const q=JSON.parse(localStorage.getItem("auth"));let ee;q&&q.map(u=>{"master"===u.content_type.app_label&&"employee"===u.content_type.model&&"view_employee"==u.codename&&(ee=u.codename)});const te=[{path:"",component:H,canActivate:[X.l],data:{allowedRoles:["view_employee"]}}];let ie=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[v.Bz.forChild(te),v.Bz]}),s})();var le=c(8468);let ne=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=e.oAB({type:s}),s.\u0275inj=e.cJS({imports:[m.ez,ie,le.I]}),s})()},30597:(M,C,c)=>{c.d(C,{l:()=>A});var m=c(94650),v=c(4392),b=c(97185),g=c(42917),_=c(80927);let A=(()=>{class t{constructor(a,e,U,y,E){this.router=a,this.Arout=e,this.toastr=U,this.profileService=y,this.coreService=E}canActivate(a,e){const U=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(y=>{this.userDetails=y,this.permissions=this.userDetails?.permission}),U){const y=a.data.allowedRoles,E=U.some(h=>y.includes(h.codename));let T=this.coreService.profileData$.value;if(T&&T.username){this.userDetails=T,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(T);const h=T?.permission,Z=this.profileService.getUserDetails();(!Z||Z.length!==h.length)&&(this.profileService.setUserPermission(h),window.location.reload())}else this.coreService.getProfile().subscribe(h=>{this.userDetails=h,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(h);const Z=h?.permission,D=this.profileService.getUserDetails();(!D||D.length!==Z.length)&&(this.profileService.setUserPermission(Z),window.location.reload())});if(E)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(a){return new(a||t)(m.LFG(v.F0),m.LFG(v.gz),m.LFG(b._W),m.LFG(g.J),m.LFG(_.p))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);