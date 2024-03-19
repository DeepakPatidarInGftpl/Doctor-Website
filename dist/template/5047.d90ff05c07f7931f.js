"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5047],{53506:(w,y,o)=>{o.d(y,{x:()=>T});var g=o(92340),_=o(94650),u=o(80529);let T=(()=>{class f{constructor(e){this.http=e,this.apiUrl=`${g.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(e){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",e)}getPurchaseById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}PurchaseIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`,r)}updatePurchase(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,e)}deletePurchase(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${e}`)}searchProduct(e){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+e)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(e){return this.http.post(this.apiUrl+"/pv-api/material_inward/",e)}getMaterialById(e){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}MaterialIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`,r)}updateMaterial(e,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,e)}deleteMaterial(e){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${e}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(e){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",e)}getPurchaseBillById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}PurchaseBillIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`,r)}updatePurchaseBill(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,e)}deletePurchaseBill(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${e}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(e){return this.http.post(this.apiUrl+"/pv-api/debit_note/",e)}getDebitNotesById(e){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}DebitNotesIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`,r)}updateDebitNotes(e,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,e)}deleteDebitNotes(e){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${e}`)}getSearchProductById(e){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${e}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(e){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",e)}getPurchaseReturnById(e){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}PurchaseReturnIsActive(e,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`,r)}updatePurchaseReturn(e,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,e)}deletePurchaseReturn(e){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${e}`)}filterVariant(e,r,p,C){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const v=[];return e&&v.push(`supplier=${e}`),r&&v.push(`category=${r}`),p&&v.push(`subcategory=${p}`),C&&v.push(`search=${C}`),v.length>0&&(t+="?"+v.join("&")),this.http.get(t)}}return f.\u0275fac=function(e){return new(e||f)(_.LFG(u.eN))},f.\u0275prov=_.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},75047:(w,y,o)=>{o.r(y),o.d(y,{CustomerWiseSaleModule:()=>X});var g=o(36895),_=o(89299),u=o(24006),T=o(94327),f=o(96166),b=o(12983),e=o.n(b),r=o(68675),p=o(54004),C=o(80574),t=o(94650),v=o(97185),D=o(71071),N=o(53506),L=o(42917),I=o(87719),Z=o(54333),M=o(47957),W=o(3238),P=o(59549),A=o(44144),S=o(99602),F=o(54040);function B(s,m){if(1&s){const i=t.EpF();t.TgZ(0,"mat-option",53),t.NdJ("onSelectionChange",function(){t.CHM(i);const n=t.oxw().$implicit,l=t.oxw();return t.KtG(l.selectUser(null==n?null:n.id))}),t._uU(1),t.qZA()}if(2&s){const i=t.oxw().$implicit;t.Q6J("value",(null==i?null:i.name)+" "+(null==i?null:i.username)),t.xp6(1),t.hij(" ",(null==i?null:i.name)+" ("+(null==i?null:i.username)+")"," ")}}function J(s,m){if(1&s&&(t.ynx(0),t.YNc(1,B,2,2,"mat-option",52),t.BQk()),2&s){const i=m.$implicit;t.xp6(1),t.Q6J("ngIf",!0===i.is_active)}}function E(s,m){if(1&s&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()()),2&s){const i=m.$implicit,a=m.index;t.xp6(2),t.Oqu(a+1+"."),t.xp6(2),t.Oqu(null==i.user_detail.party_name?null:i.user_detail.party_name.name),t.xp6(2),t.Oqu(null==i.user_detail.party_name?null:i.user_detail.party_name.mobile_no),t.xp6(2),t.Oqu(i.no_of_bill),t.xp6(2),t.Oqu(i.total_amount)}}const R=function(s,m){return{itemsPerPage:s,currentPage:m}};function Y(s,m){if(1&s&&(t.TgZ(0,"tbody"),t.YNc(1,E,11,5,"tr",25),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&s){const i=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,i.customerWiseSaleList,i.key,i.reverse),t.WLB(8,R,i.itemsPerPage,i.p)))}}function z(s,m){1&s&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",54)(3,"p",55),t._uU(4,"Data not available"),t.qZA()()()())}const H=[{path:"",component:(()=>{class s{constructor(i,a,n,l,c,d,h,U){this.router=i,this.fb=a,this.toastr=n,this.transactionService=l,this.purchaseService=c,this.cs=d,this.datepipe=h,this.reportService=U,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new u.NI(""),this.userControl=new u.NI,this.users=[],this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(h=>{this.userDetails=h,console.log(h),this.UserName=h?.username});const i=new Date,l=(i.getMonth(),i.getFullYear(),new Date(i));l.setDate(i.getDate()-14);const c=this.formatDate(l),d=this.formatDate(i);this.customerWiseSaleForm=new u.cw({start:new u.NI(c),end:new u.NI(d),user_id:new u.NI}),this.startDate=this.customerWiseSaleForm.value?.start,this.endDate=this.customerWiseSaleForm.value?.end,this.customerWiseSaleUserId=this.customerWiseSaleForm.value?.user_id,this.getCustomerWiseSale(),this.getUser(),this.filteredusers=this.userControl.valueChanges.pipe((0,r.O)(""),(0,p.U)(h=>this._filter(h,!0)))}formatDate(i){return this.datepipe.transform(i,"yyyy-MM-dd")||""}_filter(i,a){const n="string"==typeof i?i.toLowerCase():i.toString().toLowerCase(),l=this.users.filter(a?c=>c?.name?.toLowerCase().includes(n)||c.username.toLowerCase().includes(n):c=>!c?.name?.toLowerCase().includes(n)||c.username.toLowerCase().includes(n));return!a&&0===l.length&&l.push({name:"No data found"}),l}getUser(){this.reportService.getUser().subscribe(i=>{this.users=i?.data})}search(){if(""===this.titlee)this.getCustomerWiseSale();else{const i=this.titlee.toLocaleLowerCase();this.customerWiseSaleList=this.customerWiseSaleList?.filter(a=>{const n=a?.user?.party_name.toLocaleLowerCase(),l=a?.receipt_voucher_no.toLocaleLowerCase()||"";return!(!n.includes(i)&&!l.includes(i))})}}sort(i){this.key=i,this.reverse=!this.reverse}selectAll(i){this.countryList.forEach(i?a=>{a.isSelected=!1}:a=>{a.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(i,a,n){const l=(i-1)*a;return`Showing ${l+1}\u2013${Math.min(l+a-1,n-1)+1} of ${n} results`}getCustomerWiseSale(){this.reportService.getCustomerWiseSale(this.startDate,this.endDate,this.customerWiseSaleUserId).subscribe(i=>{console.log(i),this.customerWiseSaleList=i,this.customerWiseSale=i})}selectUser(i){this.dataId=i,this.customerWiseSaleForm.patchValue({user_id:this.dataId}),console.warn(this.customerWiseSaleForm.value),this.customerWiseSaleUserId=this.customerWiseSaleForm.value?.user_id,this?.getCustomerWiseSale()}getSelectedCustomerWiseSaleDates(){console.log(this.customerWiseSaleForm.value);const i=this.datepipe.transform(this.customerWiseSaleForm.value.start,"yyyy-MM-dd"),a=this.datepipe.transform(this.customerWiseSaleForm.value.end,"yyyy-MM-dd");console.log(i),console.log(a),this.startDate=i,this.endDate=a,this?.getCustomerWiseSale()}generatePDFAgain(){const i=new f.default,l=`Date Range From: ${this.startDate} - ${this.endDate}`,c=`User: ${this.UserName}`;i.setFontSize(12),i.setTextColor(33,43,54),i.text("PV",86,5),i.text("Customer Wise Sale Report",82,10),i.text(c,10,18),i.text(l,10,22),i.text("",10,25),e()(i,{head:[["#","UserDetail","MobileNo.","No.Of Bill ","Total Amount"]],body:this.customerWiseSaleList.map((d,h)=>[h+1,d.user_detail.party_name?.name,d.user_detail.party_name?.mobile_no,d.no_of_bill,d.total_amount]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),i.save("Customer_wise_sale.pdf")}getVisibleDataFromTable(){const i=[],a=document.getElementById("mytable");if(a){const n=a.querySelector("thead tr");if(n){const c=[];n.querySelectorAll("th").forEach(d=>{const h=d.textContent?.trim();h&&"Is Active"!==h&&"Action"!==h&&c.push(h)}),i.push(c)}a.querySelectorAll("tbody tr").forEach(c=>{const d=[];c.querySelectorAll("td").forEach(h=>{const U=h.textContent?.trim();U&&d.push(U)}),i.push(d)})}return i}exportToExcel(){const i=this.getVisibleDataFromTable(),a=C.P6.aoa_to_sheet(i),n=C.P6.book_new();C.P6.book_append_sheet(n,a,"Sheet1");const l=C.cW(n,{bookType:"xlsx",type:"array"}),c=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,T.saveAs)(c,"saleSummary.xlsx")}printTable(){const i=document.getElementById("mytable");if(!i)return void console.error("Table element with ID 'mytable' not found.");const n=document.querySelector(".titl");if(!n)return void console.error("Title element with class 'titl' not found.");const l=n.outerHTML,d=i.cloneNode(!0).outerHTML,U="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+d,tt=document.body.innerHTML;document.body.innerHTML=U,window.print(),document.body.innerHTML=tt}}return s.\u0275fac=function(i){return new(i||s)(t.Y36(_.F0),t.Y36(u.qu),t.Y36(v._W),t.Y36(D.p),t.Y36(N.x),t.Y36(L.J),t.Y36(g.uU),t.Y36(I.r))},s.\u0275cmp=t.Xpm({type:s,selectors:[["app-customer-wise-sale"]],decls:92,vars:15,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-5","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-5","col-md-6","col-12"],[1,"form-group"],["type","text","placeholder","Search Name/Username","aria-label","customer","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","debitNote"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],["id","page_field",1,"pagination",3,"ngModel","ngModelChange"],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["colspan","10"],[1,"text-center"]],template:function(i,a){if(1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Customer Wise Sale"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Customer Wise Sale"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return a.getSelectedCustomerWiseSaleDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return a.getSelectedCustomerWiseSaleDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()(),t.TgZ(28,"div",21)(29,"div",22)(30,"label"),t._uU(31,"User Name"),t.qZA(),t._UZ(32,"input",23),t.TgZ(33,"mat-autocomplete",null,24),t.YNc(35,J,2,1,"ng-container",25),t.ALo(36,"async"),t.qZA()()()()()(),t.TgZ(37,"div",26)(38,"ul")(39,"li")(40,"a",27),t.NdJ("click",function(){return a.generatePDFAgain()}),t._UZ(41,"img",28),t.qZA()(),t.TgZ(42,"li")(43,"a",29),t.NdJ("click",function(){return a.exportToExcel()}),t._UZ(44,"img",30),t.qZA()(),t.TgZ(45,"li")(46,"a",31),t.NdJ("click",function(){return a.printTable()}),t._UZ(47,"img",32),t.qZA()()()()(),t.TgZ(48,"div",33)(49,"div",34)(50,"table",35)(51,"thead")(52,"tr")(53,"th",36),t.NdJ("click",function(){return a.sort("id")}),t._uU(54,"#"),t._UZ(55,"i",37),t.qZA(),t.TgZ(56,"th",36),t.NdJ("click",function(){return a.sort("id")}),t._uU(57,"UserDetail"),t._UZ(58,"i",37),t.qZA(),t.TgZ(59,"th",36),t.NdJ("click",function(){return a.sort("id")}),t._uU(60,"MobileNo. "),t._UZ(61,"i",37),t.qZA(),t.TgZ(62,"th",36),t.NdJ("click",function(){return a.sort("id")}),t._uU(63,"No.Of Bill "),t._UZ(64,"i",37),t.qZA(),t.TgZ(65,"th",36),t.NdJ("click",function(){return a.sort("id")}),t._uU(66,"Total Amount "),t._UZ(67,"i",37),t.qZA()()(),t.YNc(68,Y,4,11,"tbody",38),t.YNc(69,z,5,0,"tbody",38),t.qZA(),t.TgZ(70,"div",10)(71,"div",39)(72,"div",40),t._uU(73," Show per page "),t.TgZ(74,"select",41),t.NdJ("ngModelChange",function(l){return a.itemsPerPage=l}),t.TgZ(75,"option",42),t._uU(76,"10"),t.qZA(),t.TgZ(77,"option",43),t._uU(78,"20"),t.qZA(),t.TgZ(79,"option",44),t._uU(80,"30"),t.qZA(),t.TgZ(81,"option",45),t._uU(82,"50"),t.qZA(),t.TgZ(83,"option",46),t._uU(84,"100"),t.qZA(),t.TgZ(85,"option",47),t._uU(86,"All"),t.qZA()()()(),t.TgZ(87,"div",48)(88,"div",49)(89,"pagination-controls",50),t.NdJ("pageChange",function(l){return a.p=l}),t.qZA(),t.TgZ(90,"div",51),t._uU(91),t.qZA()()()()()()()()()()),2&i){const n=t.MAs(27),l=t.MAs(34);t.xp6(12),t.Q6J("formGroup",a.customerWiseSaleForm),t.xp6(7),t.Q6J("formGroup",a.customerWiseSaleForm)("rangePicker",n),t.xp6(6),t.Q6J("for",n),t.xp6(7),t.Q6J("formControl",a.userControl)("matAutocomplete",l),t.xp6(3),t.Q6J("ngForOf",t.lcZ(36,13,a.filteredusers)),t.xp6(33),t.Q6J("ngIf",(null==a.customerWiseSaleList?null:a.customerWiseSaleList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==a.customerWiseSaleList?null:a.customerWiseSaleList.length)),t.xp6(5),t.Q6J("ngModel",a.itemsPerPage),t.xp6(17),t.lnq(" Showing ",a.itemsPerPage," to ",a.itemsPerPage," of ",a.p," entries ")}},dependencies:[g.sg,g.O5,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.On,u.oH,u.sg,u.u,Z.LS,M.XC,M.ZL,W.ey,P.KE,P.R9,A.Nt,S.nW,S.wx,S.zY,S.By,S._g,g.Ov,Z._s,F.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;letter-spacing:3px;font-weight:700;padding-left:30px}.head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:3px;font-weight:700}.head6[_ngcontent-%COMP%]{font-size:18px;padding-left:10%}"]}),s})()}];let Q=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({imports:[_.Bz.forChild(H),_.Bz]}),s})();var k=o(3056),q=o(87078),O=o(86323),x=o(92642),j=o(95113),K=o(64155),V=o(6205),$=o(8468);const G={User:x.n5m,UserCheck:x.uS3,FileText:x.acj,File:x.$BE};let X=(()=>{class s{}return s.\u0275fac=function(i){return new(i||s)},s.\u0275mod=t.oAB({type:s}),s.\u0275inj=t.cJS({providers:[g.uU],imports:[g.ez,Q,$.I,u.u5,u.UX,M.Bb,P.lN,A.c,k.ZQ,q.T,S.FA,P.lN,W.XK,j.LD,K.vQ,$.I,V.X,O.p.pick(G),O.p]}),s})()}}]);