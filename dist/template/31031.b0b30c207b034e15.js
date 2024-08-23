"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[31031],{25062:(D,T,p)=>{p.d(T,{y:()=>g});var h=p(92340),v=p(94650),Z=p(80529);let g=(()=>{class _{constructor(t){this.http=t,this.apiUrl=`${h.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getSupplierById(t){return this.http.get(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}SupplierIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`,r)}addSupplier(t){return this.http.post(this.apiUrl+"/pv-api/supplier/",t)}updateSupplier(t,r){return this.http.put(`${this.apiUrl+"/pv-api/supplier/?id="}${r}`,t)}deleteSupplier(t){return this.http.delete(`${this.apiUrl+"/pv-api/supplier/?id="}${t}`)}getVendor(){return this.http.get(this.apiUrl+"/pv-api/vendor/")}getVendorById(t){return this.http.get(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}VendorIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`,r)}addVendor(t){return this.http.post(this.apiUrl+"/pv-api/vendor/",t)}updateVendor(t,r){return this.http.put(`${this.apiUrl+"/pv-api/vendor/?id="}${r}`,t)}deleteVendor(t){return this.http.delete(`${this.apiUrl+"/pv-api/vendor/?id="}${t}`)}getPaymentTerms(){return this.http.get(this.apiUrl+"/pv-api/payment_terms/")}getPaymentTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}PaymentTermsIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`,r)}addPaymentTerms(t){return this.http.post(this.apiUrl+"/pv-api/payment_terms/",t)}updatePaymentTerms(t,r){return this.http.put(`${this.apiUrl+"/pv-api/payment_terms/?id="}${r}`,t)}deletePaymentTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/payment_terms/?id="}${t}`)}getTypeOfGst(){return this.http.get(this.apiUrl+"/pv-api/types_of_gst/")}getTransport(){return this.http.get(this.apiUrl+"/pv-api/transport/")}getTransportById(t){return this.http.get(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}TransportIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/transport/?id="}${t}`,r)}addTransport(t){return this.http.post(this.apiUrl+"/pv-api/transport/",t)}updateTransport(t,r){return this.http.put(`${this.apiUrl+"/pv-api/transport/?id="}${r}`,t)}deleteTransport(t){return this.http.delete(`${this.apiUrl+"/pv-api/transport/?id="}${t}`)}getEmployee(){return this.http.get(this.apiUrl+"/pv-api/employee/")}getEmployeeById(t){return this.http.get(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}EmployeeIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/employee/?id="}${t}`,r)}addEmployee(t){return this.http.post(this.apiUrl+"/pv-api/employee/",t)}updateEmployee(t,r){return this.http.put(`${this.apiUrl+"/pv-api/employee/?id="}${r}`,t)}deleteEmployee(t){return this.http.delete(`${this.apiUrl+"/pv-api/employee/?id="}${t}`)}getPermission(){return this.http.get(this.apiUrl+"/pv-api/permissions/")}getCustomer(){return this.http.get(this.apiUrl+"/pv-api/customer/")}getCustomerById(t){return this.http.get(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}CustomerIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/customer/?id="}${t}`,r)}addCustomer(t){return this.http.post(this.apiUrl+"/pv-api/customer/",t)}updateCustomer(t,r){return this.http.put(`${this.apiUrl+"/pv-api/customer/?id="}${r}`,t)}deleteCustomer(t){return this.http.delete(`${this.apiUrl+"/pv-api/customer/?id="}${t}`)}getUser(){return this.http.get(this.apiUrl+"/pv-api/user/")}getUserById(t){return this.http.get(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}UserIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/user/?id="}${t}`,r)}addUser(t){return this.http.post(this.apiUrl+"/pv-api/user/",t)}updateUser(t,r){return this.http.put(`${this.apiUrl+"/pv-api/user/?id="}${r}`,t)}deleteUser(t){return this.http.delete(`${this.apiUrl+"/pv-api/user/?id="}${t}`)}getPermissionGroup(){return this.http.get(this.apiUrl+"/pv-api/group/")}getPermissionGroupById(t){return this.http.get(`${this.apiUrl+"/pv-api/group/?id="}${t}`)}addPermissionGroup(t){return this.http.post(this.apiUrl+"/pv-api/group/",t)}updatePermissionGroup(t,r){return this.http.put(`${this.apiUrl+"/pv-api/group/?group_id="}${r}`,t)}deletePermissionGroup(t){return this.http.delete(`${this.apiUrl+"/pv-api/group/?group_id="}${t}`)}getDealer(){return this.http.get(this.apiUrl+"/pv-api/dealer/")}getDealerById(t){return this.http.get(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}DealerIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`,r)}addDealer(t){return this.http.post(this.apiUrl+"/pv-api/dealer/",t)}updateDealer(t,r){return this.http.put(`${this.apiUrl+"/pv-api/dealer/?id="}${r}`,t)}deleteDealer(t){return this.http.delete(`${this.apiUrl+"/pv-api/dealer/?id="}${t}`)}getBranch(){return this.http.get(this.apiUrl+"/pv-api/branch/")}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/variant-search/?search="+t)}getTerms(){return this.http.get(this.apiUrl+"/pv-api/terms/")}getTermsById(t){return this.http.get(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}TermsIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/terms/?id="}${t}`,r)}addTerms(t){return this.http.post(this.apiUrl+"/pv-api/terms/",t)}updateTerms(t,r){return this.http.put(`${this.apiUrl+"/pv-api/terms/?id="}${r}`,t)}deleteTerms(t){return this.http.delete(`${this.apiUrl+"/pv-api/terms/?id="}${t}`)}getVoucherType(){return this.http.get(this.apiUrl+"/pv-api/voucher-type/")}getDepartment(){return this.http.get(this.apiUrl+"/pv-api/department/")}getDepartmentById(t){return this.http.get(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}DepartmentIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/department/?id="}${t}`,r)}addDepartment(t){return this.http.post(this.apiUrl+"/pv-api/department/",t)}updateDepartment(t,r){return this.http.put(`${this.apiUrl+"/pv-api/department/?id="}${r}`,t)}deleteDepartment(t){return this.http.delete(`${this.apiUrl+"/pv-api/department/?id="}${t}`)}getCreditLimitByUserId(t){return this.http.get(`${this.apiUrl+"/pv-api/get_credit_limit/?user_by_credit_id="}${t}`)}}return _.\u0275fac=function(t){return new(t||_)(v.LFG(Z.eN))},_.\u0275prov=v.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},31031:(D,T,p)=>{p.r(T),p.d(T,{UserModule:()=>ee});var h=p(36895),v=p(4392),Z=p(2454),g=p.n(Z),_=p(96166),C=p(12983),t=p.n(C),r=p(80574),o=p(94327),e=p(94650),y=p(25062),U=p(72326),b=p(42917),m=p(24006),$=p(73162),A=p(54333),E=p(90455),P=p(54040);function N(l,u){1&l&&(e.TgZ(0,"div",65)(1,"a",66),e._UZ(2,"img",67),e._uU(3,"Add User "),e.qZA()())}function q(l,u){if(1&l&&(e.TgZ(0,"option",68),e._uU(1),e.qZA()),2&l){const i=u.$implicit;e.s9C("value",null==i?null:i.title),e.xp6(1),e.Oqu(null==i?null:i.title)}}function J(l,u){if(1&l){const i=e.EpF();e.TgZ(0,"td")(1,"mat-slide-toggle",76),e.NdJ("click",function(){e.CHM(i);const n=e.oxw(),a=n.$implicit,c=n.index,d=e.oxw(2);return e.KtG(a.is_active?d.isActive(c,a.id):d.Active(c,a.id))})("ngModelChange",function(n){e.CHM(i);const a=e.oxw().$implicit;return e.KtG(a.is_active=n)}),e.qZA()()}if(2&l){const i=e.oxw().$implicit;e.xp6(1),e.Q6J("ngModel",i.is_active)}}function L(l,u){1&l&&(e.TgZ(0,"td",77)(1,"strong",78),e._uU(2,"SUPERUSER"),e.qZA()())}function k(l,u){if(1&l&&(e.TgZ(0,"a",79),e._UZ(1,"img",83),e.qZA()),2&l){const i=e.oxw(2).$implicit;e.MGl("routerLink","//settings/updateUser/",i.id,"")}}function O(l,u){if(1&l){const i=e.EpF();e.TgZ(0,"a",84),e.NdJ("click",function(){e.CHM(i);const n=e.oxw(2),a=n.index,c=n.$implicit,d=e.oxw(2);return e.KtG(d.confirmText(a,c.id))}),e._UZ(1,"img",85),e.qZA()}}function w(l,u){if(1&l&&(e.TgZ(0,"td")(1,"a",79),e._UZ(2,"img",80),e.qZA(),e.YNc(3,k,2,1,"a",81),e.YNc(4,O,2,0,"a",82),e.qZA()),2&l){const i=e.oxw().$implicit,s=e.oxw(2);e.xp6(1),e.MGl("routerLink","//settings/user-details/",i.id,""),e.xp6(2),e.Q6J("ngIf",s.isEdit),e.xp6(1),e.Q6J("ngIf",s.isDelete)}}const R=function(l){return{"orange-row":l}};function F(l,u){if(1&l){const i=e.EpF();e.TgZ(0,"tr",70)(1,"td")(2,"label",71)(3,"input",72),e.NdJ("ngModelChange",function(n){const c=e.CHM(i).index,d=e.oxw(2);return e.KtG(d.selectedRows[c]=n)}),e.qZA(),e._UZ(4,"span",46),e.qZA()(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td",73)(8,"a",74),e._uU(9),e.qZA()(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA(),e.TgZ(18,"td"),e._uU(19),e.qZA(),e.YNc(20,J,2,1,"td",48),e.YNc(21,L,3,0,"td",75),e.YNc(22,w,5,3,"td",48),e.qZA()}if(2&l){const i=u.$implicit,s=u.index,n=e.oxw(2);e.Q6J("ngClass",e.VKq(13,R,(null==n.userDetails?null:n.userDetails.username)===(null==i?null:i.username))),e.xp6(3),e.Q6J("ngModel",n.selectedRows[s]),e.xp6(3),e.Oqu(s+1),e.xp6(2),e.MGl("routerLink","//settings/user-details/",null==i?null:i.id,""),e.xp6(1),e.Oqu(null==i?null:i.name),e.xp6(2),e.Oqu(null==i?null:i.username),e.xp6(2),e.Oqu(null==i?null:i.phone_number),e.xp6(2),e.Oqu(null==i?null:i.email),e.xp6(2),e.Oqu(null==i?null:i.user_type),e.xp6(2),e.Oqu(null==i||null==i.branch?null:i.branch.title),e.xp6(1),e.Q6J("ngIf",!0!==(null==i?null:i.is_superuser)),e.xp6(1),e.Q6J("ngIf",null==i?null:i.is_superuser),e.xp6(1),e.Q6J("ngIf",!0!==(null==i?null:i.is_superuser))}}const G=function(l,u){return{itemsPerPage:l,currentPage:u}};function Y(l,u){if(1&l&&(e.TgZ(0,"tbody"),e.YNc(1,F,23,15,"tr",69),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&l){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,i.filteredData,i.key,i.isAscending),e.WLB(8,G,i.itemsPerPage,i.p)))}}function Q(l,u){1&l&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",86)(3,"p",87),e._uU(4,"Data not available"),e.qZA()()()())}function H(l,u){1&l&&e._UZ(0,"mat-progress-bar",88)}let K=(()=>{class l{constructor(i,s,n){this.contactService=i,this.QueryService=s,this.profileService=n,this.dtOptions={},this.initChecked=!1,this.p=1,this.pageSize=10,this.itemsPerPage=10,this.selectedAccountType="",this.selectedUserType="",this.selectedBranch="",this.isAscending=!0,this.loader=!0,this.allSelected=!1,this.select=!1,this.key="id",this.reverse=!0,this.QueryService.filterToggle()}confirmText(i,s){g().fire({title:"Are you sure?",text:"You won't be able to revert this!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&this.contactService.deleteUser(s).subscribe(a=>{this.delRes=a,this.delRes.success?(this.ngOnInit(),g().fire({icon:"success",title:"Deleted!",text:this.delRes.msg}),this.tableData.splice(i,1)):g().fire({icon:"error",title:"Not Deleted!",text:this.delRes.error})})})}isActive(i,s){g().fire({title:"Are you sure?",text:"Do you want to Deactivate this user!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Deactivate it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.contactService.UserIsActive(s,"").subscribe(a=>{this.delRes=a,this.delRes.success&&this.ngOnInit()}),g().fire({icon:"success",title:"Deactivate!",text:"User Is Deactivate Successfully."}))})}Active(i,s){g().fire({title:"Are you sure?",text:"Do you want to Active this user!",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, Active it!",buttonsStyling:!0,customClass:{confirmButton:"btn btn-primary",cancelButton:"btn btn-danger ml-1"}}).then(n=>{n.isConfirmed&&(this.contactService.UserIsActive(s,"").subscribe(a=>{this.delRes=a,this.delRes.success&&this.ngOnInit()}),g().fire({icon:"success",title:"Active!",text:this.delRes.msg}))})}ngOnInit(){this.contactService.getUser().subscribe(i=>{this.tableData=i,this.loader=!1,this.selectedRows=new Array(this.tableData.length).fill(!1),this.filteredData=this.tableData.slice(),this.filterData()}),this.profileService.userDetails$.subscribe(i=>{this.userDetails=i,this.userDetails?.permission?.map(n=>{"master"===n?.content_type.app_label&&"user"===n?.content_type.model&&"add_user"==n?.codename?this.isAdd=n?.codename:"master"===n?.content_type.app_label&&"user"===n?.content_type.model&&"change_user"==n?.codename?this.isEdit=n?.codename:"master"===n?.content_type.app_label&&"user"===n?.content_type.model&&"delete_user"==n?.codename&&(this.isDelete=n?.codename)})}),this.getBranch()}getBranch(){this.contactService.getBranch().subscribe(i=>{this.branchList=i})}selectAlll(){this.selectedRows.fill(this.allSelected)}selectAll(i){this.tableData.forEach(i?s=>{s.isSelected=!1}:s=>{s.isSelected=!0})}deleteId(i){this.contactService.deleteSupplier(i).subscribe(s=>{this.delRes=s})}search(){if(""==this.titlee)this.ngOnInit();else{const i=this.titlee.toLocaleLowerCase();this.filteredData=this.filteredData.filter(s=>{const n=s?.name.toLocaleLowerCase(),a=s?.username.toLocaleLowerCase();return!!n.match(i)||!!a.match(i)})}}sort(i){this.key=i,this.reverse=!this.reverse}filterData(){let i=this.tableData.slice();this.selectedUserType&&(i=i.filter(s=>s?.user_type===this.selectedUserType)),this.selectedBranch&&(i=i.filter(s=>s?.branch?.title===this.selectedBranch)),this.filteredData=i}clearFilter(){this.selectedUserType=null,this.selectedBranch=null,this.filterData()}generatePDF(){const i=new _.default;i.setFontSize(15),i.setTextColor(33,43,54),i.text("User List",10,10),t()(i,{html:"#mytable",theme:"grid",headStyles:{fillColor:[255,159,67]},columns:[{header:"Sr No."},{header:" Name"},{header:"User Name"},{header:"Mobile Number"},{header:"Email"},{header:"User Type"},{header:"Branch"},{header:"Is Active"}]}),i.save("user.pdf")}generatePDFAgain(){const i=new _.default;i.setFontSize(12),i.setTextColor(33,43,54),i.text("User List",82,10),i.text("",10,15),t()(i,{head:[["#","Name","User Name","Mobile Number","Email","User Type","Branch"]],body:this.tableData.map((n,a)=>[a+1,n.name,n.username,n.phone_number,n.email,n.user_type,n.branch?.title]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:15}),i.save("User_List  .pdf")}getVisibleDataFromTable(){const i=[],s=document.getElementById("mytable"),n=s.querySelector("thead tr"),a=s.querySelectorAll("tbody tr"),c=[];return n.querySelectorAll("th").forEach(d=>{const f=d.textContent.trim();"Is Active"!==f&&"Action"!==f&&c.push(f)}),i.push(c),a.forEach(d=>{const f=[];d.querySelectorAll("td").forEach(S=>{f.push(S.textContent.trim())}),i.push(f)}),i}exportToExcel(){const i=this.getVisibleDataFromTable(),s=r.P6.aoa_to_sheet(i),n=r.P6.book_new();r.P6.book_append_sheet(n,s,"Sheet1");const a=r.cW(n,{bookType:"xlsx",type:"array"}),c=new Blob([a],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,o.saveAs)(c,"user.xlsx")}printTable(){const i=document.getElementById("mytable"),a=document.querySelector(".titl").outerHTML,c=i.cloneNode(!0),d=c.querySelector("th.thone:nth-child(9)");d&&d.remove();const f=c.querySelector("th.thone:last-child");f&&f.remove(),c.querySelectorAll("tr").forEach(x=>{const I=x.querySelector("td:nth-child(9)");I&&I.remove();const B=x.querySelector("td:last-child");B&&B.remove()});const te=c.outerHTML,re="<style>.spaced-title { margin-top: 80px; }</style>"+a.replace("titl","spaced-title")+te,ie=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=re,window.print(),document.body.innerHTML=ie}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.filteredData?.length)}}return l.\u0275fac=function(i){return new(i||l)(e.Y36(y.y),e.Y36(U._),e.Y36(b.J))},l.\u0275cmp=e.Xpm({type:l,selectors:[["app-user"]],decls:131,vars:13,consts:[[1,"page-header"],[1,"page-title"],[1,"titl"],["class","page-btn",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[1,"search-path"],["id","filter_search",1,"btn","btn-filter"],["src","assets/img/icons/filter.svg","alt","img"],["src","assets/img/icons/closes.svg","alt","img"],[1,"search-input"],[1,"btn","btn-searchset"],["src","assets/img/icons/search-white.svg","alt","img"],[1,"dataTables_filter"],["type","search","placeholder","Search Name/Username",1,"form-control","form-control-sm",3,"ngModel","ngModelChange"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","filter_inputs",1,"card","mb-0"],[1,"card-body","pb-0"],[1,"row"],[1,"col-lg-12","col-sm-12"],[1,"col-lg","col-sm-3","col-12"],[1,"form-group"],[1,"form-select",3,"ngModel","ngModelChange","change"],["value","","selected","","disabled",""],["value","Supplier"],["value","Vendor"],["value","Dealer"],["value","Employee"],["value","Customer"],["value","Transport"],[3,"value",4,"ngFor","ngForOf"],[1,"form-group",3,"click"],[1,"btn","btn-filters","ms-auto",2,"width","10%"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"checkboxs","mb-0","d-inline",3,"click"],["type","checkbox",3,"ngModel","ngModelChange","change"],[1,"checkmarks"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"progressbar"],["mode","indeterminate","class","progressbar",4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"page-btn"],["routerLink","//settings/addUser",1,"btn","btn-added"],["src","assets/img/icons/plus.svg","alt","img",1,"me-1"],[3,"value"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"ngClass"],[1,"checkboxs"],["type","checkbox",3,"ngModel","ngModelChange"],[1,"productimgname"],[2,"line-height","3",3,"routerLink"],["colspan","5",4,"ngIf"],[3,"ngModel","click","ngModelChange"],["colspan","5"],[1,"center-text",2,"color","#FF9F43","padding-left","30px"],[1,"me-1",3,"routerLink"],["src","assets/img/icons/eye.svg","alt","img"],["class","me-1",3,"routerLink",4,"ngIf"],["class","me-1 confirm-text","href","javascript:void(0);",3,"click",4,"ngIf"],["src","assets/img/icons/edit.svg","alt","img"],["href","javascript:void(0);",1,"me-1","confirm-text",3,"click"],["src","assets/img/icons/delete.svg","alt","img"],["colspan","8"],[1,"center-text"],["mode","indeterminate",1,"progressbar"]],template:function(i,s){if(1&i){const n=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"h4",2),e._uU(3,"User list"),e.qZA(),e.TgZ(4,"h6"),e._uU(5,"View/Search User "),e.qZA()(),e.YNc(6,N,4,0,"div",3),e.qZA(),e.TgZ(7,"div",4)(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"a",9),e._UZ(13,"img",10),e.TgZ(14,"span"),e._UZ(15,"img",11),e.qZA()()(),e.TgZ(16,"div",12)(17,"a",13),e._UZ(18,"img",14),e.qZA(),e.TgZ(19,"div",15)(20,"label")(21,"input",16),e.NdJ("ngModelChange",function(c){return s.titlee=c})("ngModelChange",function(){return s.search()}),e.qZA()()()()(),e.TgZ(22,"div",17)(23,"ul")(24,"li")(25,"a",18),e.NdJ("click",function(){return s.generatePDFAgain()}),e._UZ(26,"img",19),e.qZA()(),e.TgZ(27,"li")(28,"a",20),e.NdJ("click",function(){return s.exportToExcel()}),e._UZ(29,"img",21),e.qZA()(),e.TgZ(30,"li")(31,"a",22),e.NdJ("click",function(){return s.printTable()}),e._UZ(32,"img",23),e.qZA()()()()(),e.TgZ(33,"div",24)(34,"div",25)(35,"div",26)(36,"div",27)(37,"div",26)(38,"div",28)(39,"div",29)(40,"label"),e._uU(41,"User Type"),e.qZA(),e.TgZ(42,"select",30),e.NdJ("ngModelChange",function(c){return s.selectedUserType=c})("change",function(){return s.filterData()}),e.TgZ(43,"option",31),e._uU(44,"Select User Type"),e.qZA(),e.TgZ(45,"option",32),e._uU(46,"Supplier"),e.qZA(),e.TgZ(47,"option",33),e._uU(48,"Vendor"),e.qZA(),e.TgZ(49,"option",34),e._uU(50,"Dealer"),e.qZA(),e.TgZ(51,"option",35),e._uU(52,"Employee"),e.qZA(),e.TgZ(53,"option",36),e._uU(54,"Customer"),e.qZA(),e.TgZ(55,"option",37),e._uU(56,"Transport"),e.qZA()()()(),e.TgZ(57,"div",28)(58,"div",29)(59,"label"),e._uU(60,"Branch"),e.qZA(),e.TgZ(61,"select",30),e.NdJ("ngModelChange",function(c){return s.selectedBranch=c})("change",function(){return s.filterData()}),e.TgZ(62,"option",31),e._uU(63,"Select Branch"),e.qZA(),e.YNc(64,q,2,2,"option",38),e.qZA()()()(),e.TgZ(65,"div",39),e.NdJ("click",function(){return s.clearFilter()}),e.TgZ(66,"a",40),e._uU(67,"Clear Filter"),e.qZA()()()()()(),e.TgZ(68,"div",41)(69,"table",42)(70,"thead")(71,"tr")(72,"th",43),e.NdJ("click",function(){return s.sort("id")}),e.TgZ(73,"label",44),e.NdJ("click",function(){return s.selectAll(s.initChecked)}),e.TgZ(74,"input",45),e.NdJ("ngModelChange",function(c){return s.allSelected=c})("change",function(){return s.selectAlll()}),e.qZA(),e._UZ(75,"span",46),e.qZA(),e._UZ(76,"i",47),e.qZA(),e.TgZ(77,"th",43),e.NdJ("click",function(){return s.sort("id")}),e._uU(78,"Sr.No."),e._UZ(79,"i",47),e.qZA(),e.TgZ(80,"th",43),e.NdJ("click",function(){return s.sort("id")}),e._uU(81,"Name "),e._UZ(82,"i",47),e.qZA(),e.TgZ(83,"th",43),e.NdJ("click",function(){return s.sort("id")}),e._uU(84,"User Name "),e._UZ(85,"i",47),e.qZA(),e.TgZ(86,"th",43),e.NdJ("click",function(){return s.sort("id")}),e._uU(87,"Mobile Number "),e._UZ(88,"i",47),e.qZA(),e.TgZ(89,"th",43),e.NdJ("click",function(){return s.sort("id")}),e._uU(90,"Email"),e._UZ(91,"i",47),e.qZA(),e.TgZ(92,"th",43),e.NdJ("click",function(){return s.sort("id")}),e._uU(93,"User Type "),e._UZ(94,"i",47),e.qZA(),e.TgZ(95,"th",43),e.NdJ("click",function(){return s.sort("id")}),e._uU(96,"Branch "),e._UZ(97,"i",47),e.qZA(),e.TgZ(98,"th",43),e.NdJ("click",function(){return s.sort("id")}),e._uU(99,"Is Active "),e._UZ(100,"i",47),e.qZA(),e.TgZ(101,"th",43),e.NdJ("click",function(){return s.sort("id")}),e._uU(102,"Action "),e._UZ(103,"i",47),e.qZA()()(),e.YNc(104,Y,4,11,"tbody",48),e.YNc(105,Q,5,0,"tbody",48),e.qZA(),e.TgZ(106,"div",49),e.YNc(107,H,1,0,"mat-progress-bar",50),e.qZA(),e.TgZ(108,"div",26)(109,"div",51)(110,"div",52),e._uU(111," Show per page "),e.TgZ(112,"select",53,54),e.NdJ("ngModelChange",function(c){return s.itemsPerPage=c})("change",function(){e.CHM(n);const c=e.MAs(113);return e.KtG(s.changePg(c.value))}),e.TgZ(114,"option",55),e._uU(115,"10"),e.qZA(),e.TgZ(116,"option",56),e._uU(117,"20"),e.qZA(),e.TgZ(118,"option",57),e._uU(119,"30"),e.qZA(),e.TgZ(120,"option",58),e._uU(121,"50"),e.qZA(),e.TgZ(122,"option",59),e._uU(123,"100"),e.qZA(),e.TgZ(124,"option",60),e._uU(125,"All"),e.qZA()()()(),e.TgZ(126,"div",61)(127,"div",62)(128,"pagination-controls",63),e.NdJ("pageChange",function(c){return s.p=c}),e.qZA(),e.TgZ(129,"div",64),e._uU(130),e.qZA()()()()()()()}2&i&&(e.xp6(6),e.Q6J("ngIf",s.isAdd),e.xp6(15),e.Q6J("ngModel",s.titlee),e.xp6(21),e.Q6J("ngModel",s.selectedUserType),e.xp6(19),e.Q6J("ngModel",s.selectedBranch),e.xp6(3),e.Q6J("ngForOf",s.branchList),e.xp6(10),e.Q6J("ngModel",s.allSelected),e.xp6(30),e.Q6J("ngIf",(null==s.filteredData?null:s.filteredData.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==s.filteredData?null:s.filteredData.length)),e.xp6(2),e.Q6J("ngIf",s.loader),e.xp6(5),e.Q6J("ngModel",s.itemsPerPage),e.xp6(18),e.lnq("Showing ",s.itemsPerPage," to ",null==s.filteredData?null:s.filteredData.length," of ",s.p," entries"))},dependencies:[h.mk,h.sg,h.O5,v.yS,m.YN,m.Kr,m.Fj,m.Wl,m.EJ,m.JJ,m.On,$.pW,A.LS,E.Rr,A._s,P.T],styles:[".orange-row[_ngcontent-%COMP%]{color:#ff9f43}"]}),l})();var V=p(30597);const M=JSON.parse(localStorage.getItem("auth"));let W;M&&M.map(u=>{"master"===u.content_type.app_label&&"user"===u.content_type.model&&"view_user"==u.codename&&(W=u.codename)});const z=[{path:"",component:K,canActivate:[V.l],data:{allowedRoles:["view_user"]}}];let j=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[v.Bz.forChild(z),v.Bz]}),l})();var X=p(8468);let ee=(()=>{class l{}return l.\u0275fac=function(i){return new(i||l)},l.\u0275mod=e.oAB({type:l}),l.\u0275inj=e.cJS({imports:[h.ez,j,X.I]}),l})()},30597:(D,T,p)=>{p.d(T,{l:()=>C});var h=p(94650),v=p(4392),Z=p(97185),g=p(42917),_=p(80927);let C=(()=>{class t{constructor(o,e,y,U,b){this.router=o,this.Arout=e,this.toastr=y,this.profileService=U,this.coreService=b}canActivate(o,e){const y=JSON.parse(localStorage.getItem("auth"));if(this.profileService.userDetails$.subscribe(U=>{this.userDetails=U,this.permissions=this.userDetails?.permission}),y){const U=o.data.allowedRoles,b=y.some(m=>U.includes(m.codename));if(this.coreService.getProfile().subscribe(m=>{this.userDetails=m,this.profileService.setUserDetails(this.userDetails),this.profileService.ProfileData$.next(m);const $=m?.permission,A=this.profileService.getUserDetails();(!A||A.length!==$.length)&&(this.profileService.setUserPermission($),window.location.reload())}),b)return!0}return this.toastr.error("User have Not Permission to Access This page"),this.router.navigate(["/dashboard"]),!1}}return t.\u0275fac=function(o){return new(o||t)(h.LFG(v.F0),h.LFG(v.gz),h.LFG(Z._W),h.LFG(g.J),h.LFG(_.p))},t.\u0275prov=h.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);