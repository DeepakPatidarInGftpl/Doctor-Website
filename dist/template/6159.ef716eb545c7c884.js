"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6159],{53506:(w,S,r)=>{r.d(S,{x:()=>y});var g=r(92340),C=r(94650),u=r(80529);let y=(()=>{class f{constructor(i){this.http=i,this.apiUrl=`${g.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(i){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",i)}getPurchaseById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}PurchaseIsActive(i,a){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`,a)}updatePurchase(i,a){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${a}`,i)}deletePurchase(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${i}`)}searchProduct(i){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+i)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(i){return this.http.post(this.apiUrl+"/pv-api/material_inward/",i)}getMaterialById(i){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}MaterialIsActive(i,a){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`,a)}updateMaterial(i,a){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${a}`,i)}deleteMaterial(i){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${i}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(i){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",i)}getPurchaseBillById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}PurchaseBillIsActive(i,a){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`,a)}updatePurchaseBill(i,a){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${a}`,i)}deletePurchaseBill(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${i}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(i){return this.http.post(this.apiUrl+"/pv-api/debit_note/",i)}getDebitNotesById(i){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}DebitNotesIsActive(i,a){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`,a)}updateDebitNotes(i,a){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${a}`,i)}deleteDebitNotes(i){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${i}`)}getSearchProductById(i){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${i}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(i){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",i)}getPurchaseReturnById(i){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}PurchaseReturnIsActive(i,a){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`,a)}updatePurchaseReturn(i,a){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${a}`,i)}deletePurchaseReturn(i){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${i}`)}filterVariant(i,a,p,I){let t=this.apiUrl+"/pv-api/purchase_product_filter/";const _=[];return i&&_.push(`supplier=${i}`),a&&_.push(`category=${a}`),p&&_.push(`subcategory=${p}`),I&&_.push(`search=${I}`),_.length>0&&(t+="?"+_.join("&")),this.http.get(t)}}return f.\u0275fac=function(i){return new(i||f)(C.LFG(u.eN))},f.\u0275prov=C.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},16159:(w,S,r)=>{r.r(S),r.d(S,{SaleInvoiceModule:()=>et});var g=r(36895),C=r(89299),u=r(24006),y=r(94327),f=r(96166),Z=r(12983),i=r.n(Z),a=r(68675),p=r(54004),I=r(80574),t=r(94650),_=r(97185),D=r(71071),N=r(53506),J=r(42917),B=r(87719),A=r(54333),P=r(47957),L=r(3238),T=r(59549),M=r(44144),U=r(99602),F=r(54040);function q(o,m){if(1&o){const e=t.EpF();t.TgZ(0,"mat-option",54),t.NdJ("onSelectionChange",function(){t.CHM(e);const s=t.oxw().$implicit,l=t.oxw();return t.KtG(l.selectUser(null==s?null:s.id))}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.name)+" "+(null==e?null:e.username)),t.xp6(1),t.hij(" ",(null==e?null:e.name)+" ("+(null==e?null:e.username)+")"," ")}}function E(o,m){if(1&o&&(t.ynx(0),t.YNc(1,q,2,2,"mat-option",53),t.BQk()),2&o){const e=m.$implicit;t.xp6(1),t.Q6J("ngIf",!0===e.is_active)}}const b=function(o){return{"font-size":o}};function R(o,m){if(1&o&&(t.TgZ(0,"div",55)(1,"div",56)(2,"div",57)(3,"div",58)(4,"h4",59),t._uU(5),t.ALo(6,"number"),t.qZA(),t.TgZ(7,"h5"),t._uU(8,"Paid Amount"),t.qZA()()()(),t.TgZ(9,"div",56)(10,"div",60)(11,"div",58)(12,"h4",59),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"h5"),t._uU(16,"Pending Amount"),t.qZA()()()(),t.TgZ(17,"div",56)(18,"div",61)(19,"div",58)(20,"h4",59),t._uU(21),t.ALo(22,"number"),t.qZA(),t.TgZ(23,"h5"),t._uU(24,"Total Amount"),t.qZA()()()()()),2&o){const e=t.oxw();let n,s,l;t.xp6(4),t.Q6J("ngStyle",t.VKq(15,b,(null==e.saleInvoice||null==e.saleInvoice.paid_amount||null==(n=e.saleInvoice.paid_amount.toString())?null:n.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(6,6,null==e.saleInvoice?null:e.saleInvoice.paid_amount,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(17,b,(null==e.saleInvoice||null==e.saleInvoice.pending_amount||null==(s=e.saleInvoice.pending_amount.toString())?null:s.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(14,9,null==e.saleInvoice?null:e.saleInvoice.pending_amount,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(19,b,(null==e.saleInvoice||null==e.saleInvoice.total_amount||null==(l=e.saleInvoice.total_amount.toString())?null:l.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(22,12,null==e.saleInvoice?null:e.saleInvoice.total_amount,"1.2-2"),"")}}function Y(o,m){if(1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA()()),2&o){const e=m.$implicit,n=m.index;t.xp6(2),t.Oqu(n+1+"."),t.xp6(2),t.Oqu(e.customer.party_name),t.xp6(2),t.Oqu(e.bill_date),t.xp6(2),t.Oqu(e.customer_bill_no),t.xp6(2),t.Oqu(e.total),t.xp6(2),t.Oqu(e.paid_amount),t.xp6(2),t.Oqu(e.pending_amount)}}const k=function(o,m){return{itemsPerPage:o,currentPage:m}};function Q(o,m){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,Y,15,7,"tr",25),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.saleInvoiceList,e.key,e.reverse),t.WLB(8,k,e.itemsPerPage,e.p)))}}function z(o,m){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",62)(3,"p",63),t._uU(4,"Data not available"),t.qZA()()()())}const H=[{path:"",component:(()=>{class o{constructor(e,n,s,l,c,h,d,v){this.router=e,this.fb=n,this.toastr=s,this.transactionService=l,this.purchaseService=c,this.cs=h,this.datepipe=d,this.reportService=v,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new u.NI(""),this.userControl=new u.NI,this.users=[],this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(d=>{this.userDetails=d,console.log(d),this.UserName=d?.username});const e=new Date,l=(e.getMonth(),e.getFullYear(),new Date(e));l.setDate(e.getDate()-14);const c=this.formatDate(l),h=this.formatDate(e);this.saleInvoiceListform=new u.cw({start:new u.NI(c,[u.kI.required]),end:new u.NI(h,[u.kI.required]),user_id:new u.NI("")}),this.startDate=this.saleInvoiceListform.value?.start,this.endDate=this.saleInvoiceListform.value?.end,this.getSaleInvoiceList(),this.getUser(),this.filteredusers=this.userControl.valueChanges.pipe((0,a.O)(""),(0,p.U)(d=>this._filter1(d,!0))),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,a.O)(""),(0,p.U)(d=>{const v="string"==typeof d?d:d?.detail?.name;return v?this._filter(v):this.suppliers.slice()}))}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter1(e,n){const s="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),l=this.users.filter(n?c=>c?.name?.toLowerCase().includes(s)||c.username.toLowerCase().includes(s):c=>!c?.name?.toLowerCase().includes(s)||c.username.toLowerCase().includes(s));return!n&&0===l.length&&l.push({name:"No data found"}),l}getUser(){this.reportService.getUser().subscribe(e=>{this.users=e?.data})}_filter(e){const n=e?e.toLowerCase():"";return console.log(n),this.suppliers.filter(s=>s?.detail?.name.toLowerCase().includes(n)||s?.detail?.company_name?.toLowerCase().includes(n)||s?.account?.account_id?.toLowerCase().includes(n))}displayFn(e){return e&&e?.detail?.company_name?e?.detail?.company_name:""}search(){if(""===this.titlee)this.getSaleInvoiceList();else{const e=this.titlee.toLocaleLowerCase();this.saleInvoiceList=this.saleInvoiceList?.filter(n=>{const s=n?.user?.party_name.toLocaleLowerCase(),l=n?.customer_bill_no.toLocaleLowerCase()||"";return!(!s.includes(e)&&!l.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?n=>{n.isSelected=!1}:n=>{n.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,n,s){const l=(e-1)*n;return`Showing ${l+1}\u2013${Math.min(l+n-1,s-1)+1} of ${s} results`}getSaleInvoiceList(){this.reportService.getSaleInvoiceList(this.startDate,this.endDate,this.saleInvoiceListUserId).subscribe(e=>{console.log(e),this.saleInvoiceList=e?.data,this.saleInvoice=e})}selectUser(e){this.dataId=e,this.saleInvoiceListform.patchValue({user_id:this.dataId}),console.warn(this.saleInvoiceListform.value),this.saleInvoiceListUserId=this.saleInvoiceListform.value?.user_id,this?.getSaleInvoiceList()}getSelectedSaleInvoiceListDates(){console.log(this.saleInvoiceListform.value);const e=this.datepipe.transform(this.saleInvoiceListform.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.saleInvoiceListform.value.end,"yyyy-MM-dd");console.log(e),console.log(n),this.startDate=e,this.endDate=n,e&&n&&(console.log("checking"),this.getSaleInvoiceList())}generatePDFAgain(){const e=new f.default,l=`Date Range From: ${this.startDate} - ${this.endDate}`,c=`User: ${this.UserName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Sale Invoice List Report",82,10),e.text(c,10,18),e.text(l,10,22),e.text("",10,25),i()(e,{head:[["#","Customer","Bill Date","Customer Bill No.","Total","Paid Amount","Pending Amount"]],body:this.saleInvoiceList.map((h,d)=>[d+1,h.customer.party_name,h.bill_date,h.customer_bill_no,h.total,h.paid_amount,h.pending_amount]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("Sale_ Invoice _List.pdf")}getVisibleDataFromTable(){const e=[],n=document.getElementById("mytable");if(n){const s=n.querySelector("thead tr");if(s){const c=[];s.querySelectorAll("th").forEach(h=>{const d=h.textContent?.trim();d&&"Is Active"!==d&&"Action"!==d&&c.push(d)}),e.push(c)}n.querySelectorAll("tbody tr").forEach(c=>{const h=[];c.querySelectorAll("td").forEach(d=>{const v=d.textContent?.trim();v&&h.push(v)}),e.push(h)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),n=I.P6.aoa_to_sheet(e),s=I.P6.book_new();I.P6.book_append_sheet(s,n,"Sheet1");const l=I.cW(s,{bookType:"xlsx",type:"array"}),c=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,y.saveAs)(c,"SaleInvoiceList.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const s=document.querySelector(".titl");if(!s)return void console.error("Title element with class 'titl' not found.");const l=s.outerHTML,h=e.cloneNode(!0).outerHTML,v="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+h,it=document.body.innerHTML;document.body.innerHTML=v,window.print(),document.body.innerHTML=it}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.saleInvoiceList?.length)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(C.F0),t.Y36(u.qu),t.Y36(_._W),t.Y36(D.p),t.Y36(N.x),t.Y36(J.J),t.Y36(g.uU),t.Y36(B.r))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sale-invoice"]],decls:99,vars:16,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-5","col-md-6","col-12"],[1,"form-group"],["type","text","placeholder","Search UserName","aria-label","customer","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[1,"row","container"],[1,"col-lg-2","col-sm-4","col-12","d-flex"],[1,"dash-count",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],[1,"dash-count","das1",2,"margin","0 0 10px"],[1,"dash-count","das3",2,"margin","0 0 10px"],["colspan","10"],[1,"text-center"]],template:function(e,n){if(1&e){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Sale Invoice List"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Sale Invoice List"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return n.getSelectedSaleInvoiceListDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return n.getSelectedSaleInvoiceListDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()(),t.TgZ(28,"div",21)(29,"div",22)(30,"label"),t._uU(31,"User Name"),t.qZA(),t._UZ(32,"input",23),t.TgZ(33,"mat-autocomplete",null,24),t.YNc(35,E,2,1,"ng-container",25),t.ALo(36,"async"),t.qZA()()()()()(),t.TgZ(37,"div",26)(38,"ul")(39,"li")(40,"a",27),t.NdJ("click",function(){return n.generatePDFAgain()}),t._UZ(41,"img",28),t.qZA()(),t.TgZ(42,"li")(43,"a",29),t.NdJ("click",function(){return n.exportToExcel()}),t._UZ(44,"img",30),t.qZA()(),t.TgZ(45,"li")(46,"a",31),t.NdJ("click",function(){return n.printTable()}),t._UZ(47,"img",32),t.qZA()()()()(),t.YNc(48,R,25,21,"div",33),t.TgZ(49,"div",34)(50,"table",35)(51,"thead")(52,"tr")(53,"th",36),t.NdJ("click",function(){return n.sort("id")}),t._uU(54,"#"),t._UZ(55,"i",37),t.qZA(),t.TgZ(56,"th",36),t.NdJ("click",function(){return n.sort("id")}),t._uU(57,"Customer "),t._UZ(58,"i",37),t.qZA(),t.TgZ(59,"th",36),t.NdJ("click",function(){return n.sort("id")}),t._uU(60,"Bill Date "),t._UZ(61,"i",37),t.qZA(),t.TgZ(62,"th",36),t.NdJ("click",function(){return n.sort("id")}),t._uU(63,"Customer Bill No."),t._UZ(64,"i",37),t.qZA(),t.TgZ(65,"th",36),t.NdJ("click",function(){return n.sort("id")}),t._uU(66," Total "),t._UZ(67,"i",37),t.qZA(),t.TgZ(68,"th",36),t.NdJ("click",function(){return n.sort("id")}),t._uU(69,"Paid Amount "),t._UZ(70,"i",37),t.qZA(),t.TgZ(71,"th",36),t.NdJ("click",function(){return n.sort("id")}),t._uU(72,"Pending Amount "),t._UZ(73,"i",37),t.qZA()()(),t.YNc(74,Q,4,11,"tbody",38),t.YNc(75,z,5,0,"tbody",38),t.qZA(),t.TgZ(76,"div",10)(77,"div",39)(78,"div",40),t._uU(79," Show per page "),t.TgZ(80,"select",41,42),t.NdJ("ngModelChange",function(c){return n.itemsPerPage=c})("change",function(){t.CHM(s);const c=t.MAs(81);return t.KtG(n.changePg(c.value))}),t.TgZ(82,"option",43),t._uU(83,"10"),t.qZA(),t.TgZ(84,"option",44),t._uU(85,"20"),t.qZA(),t.TgZ(86,"option",45),t._uU(87,"30"),t.qZA(),t.TgZ(88,"option",46),t._uU(89,"50"),t.qZA(),t.TgZ(90,"option",47),t._uU(91,"100"),t.qZA(),t.TgZ(92,"option",48),t._uU(93,"All"),t.qZA()()()(),t.TgZ(94,"div",49)(95,"div",50)(96,"pagination-controls",51),t.NdJ("pageChange",function(c){return n.p=c}),t.qZA(),t.TgZ(97,"div",52),t._uU(98),t.qZA()()()()()()()()()}if(2&e){const s=t.MAs(27),l=t.MAs(34);t.xp6(12),t.Q6J("formGroup",n.saleInvoiceListform),t.xp6(7),t.Q6J("formGroup",n.saleInvoiceListform)("rangePicker",s),t.xp6(6),t.Q6J("for",s),t.xp6(7),t.Q6J("formControl",n.userControl)("matAutocomplete",l),t.xp6(3),t.Q6J("ngForOf",t.lcZ(36,14,n.filteredusers)),t.xp6(13),t.Q6J("ngIf",n.saleInvoice),t.xp6(26),t.Q6J("ngIf",(null==n.saleInvoiceList?null:n.saleInvoiceList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==n.saleInvoiceList?null:n.saleInvoiceList.length)),t.xp6(5),t.Q6J("ngModel",n.itemsPerPage),t.xp6(18),t.lnq(" Showing ",n.itemsPerPage," to ",null==n.saleInvoiceList?null:n.saleInvoiceList.length," of ",n.p," entries ")}},dependencies:[g.sg,g.O5,g.PC,u._Y,u.YN,u.Kr,u.Fj,u.EJ,u.JJ,u.JL,u.On,u.oH,u.sg,u.u,A.LS,P.XC,P.ZL,L.ey,T.KE,T.R9,M.Nt,U.nW,U.wx,U.zY,U.By,U._g,g.Ov,g.JJ,A._s,F.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}"]}),o})()}];let j=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[C.Bz.forChild(H),C.Bz]}),o})();var K=r(3056),V=r(87078),$=r(86323),x=r(92642),W=r(95113),G=r(64155),X=r(6205),O=r(8468);const tt={User:x.n5m,UserCheck:x.uS3,FileText:x.acj,File:x.$BE};let et=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[g.uU],imports:[g.ez,j,O.I,u.u5,u.UX,P.Bb,T.lN,M.c,K.ZQ,V.T,U.FA,T.lN,L.XK,W.LD,G.vQ,O.I,X.X,$.p.pick(tt),$.p]}),o})()}}]);