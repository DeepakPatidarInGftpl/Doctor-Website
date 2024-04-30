"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6699],{53506:(D,U,i)=>{i.d(U,{x:()=>b});var g=i(92340),_=i(94650),m=i(80529);let b=(()=>{class f{constructor(a){this.http=a,this.apiUrl=`${g.N.api}`}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(a){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",a)}getPurchaseById(a){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${a}`)}PurchaseIsActive(a,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${a}`,n)}updatePurchase(a,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${n}`,a)}deletePurchase(a){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${a}`)}searchProduct(a){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+a)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(a){return this.http.post(this.apiUrl+"/pv-api/material_inward/",a)}getMaterialById(a){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${a}`)}MaterialIsActive(a,n){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${a}`,n)}updateMaterial(a,n){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${n}`,a)}deleteMaterial(a){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${a}`)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(a){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",a)}getPurchaseBillById(a){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${a}`)}PurchaseBillIsActive(a,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${a}`,n)}updatePurchaseBill(a,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${n}`,a)}deletePurchaseBill(a){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${a}`)}getDebitNotes(){return this.http.get(this.apiUrl+"/pv-api/debit_note/")}addDebitNotes(a){return this.http.post(this.apiUrl+"/pv-api/debit_note/",a)}getDebitNotesById(a){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${a}`)}DebitNotesIsActive(a,n){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${a}`,n)}updateDebitNotes(a,n){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${n}`,a)}deleteDebitNotes(a){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${a}`)}getSearchProductById(a){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${a}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(a){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",a)}getPurchaseReturnById(a){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${a}`)}PurchaseReturnIsActive(a,n){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${a}`,n)}updatePurchaseReturn(a,n){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${n}`,a)}deletePurchaseReturn(a){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${a}`)}filterVariant(a,n,p,v){let P=this.apiUrl+"/pv-api/purchase_product_filter/";const S=[];return a&&S.push(`supplier=${a}`),n&&S.push(`category=${n}`),p&&S.push(`subcategory=${p}`),v&&S.push(`search=${v}`),S.length>0&&(P+="?"+S.join("&")),this.http.get(P)}}return f.\u0275fac=function(a){return new(a||f)(_.LFG(m.eN))},f.\u0275prov=_.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},61119:(D,U,i)=>{i.r(U),i.d(U,{SaleSummaryModule:()=>rt});var g=i(36895),_=i(89299),m=i(24006),b=i(94327),f=i(96166),M=i(12983),a=i.n(M),n=i(68675),p=i(54004),v=i(80574),P=i(4159),S=i.n(P),t=i(94650),I=i(97185),J=i(71071),B=i(53506),E=i(42917),F=i(87719),L=i(54333),A=i(47957),w=i(3238),T=i(59549),$=i(44144),x=i(99602),R=i(54040);function q(o,d){if(1&o){const e=t.EpF();t.TgZ(0,"mat-option",55),t.NdJ("onSelectionChange",function(){t.CHM(e);const s=t.oxw().$implicit,l=t.oxw();return t.KtG(l.selectUser(null==s?null:s.id))}),t._uU(1),t.qZA()}if(2&o){const e=t.oxw().$implicit;t.Q6J("value",(null==e?null:e.name)+" "+(null==e?null:e.username)),t.xp6(1),t.hij(" ",(null==e?null:e.name)+" ("+(null==e?null:e.username)+")"," ")}}function z(o,d){if(1&o&&(t.ynx(0),t.YNc(1,q,2,2,"mat-option",54),t.BQk()),2&o){const e=d.$implicit;t.xp6(1),t.Q6J("ngIf",!0===e.is_active)}}const C=function(o){return{"font-size":o}};function Q(o,d){if(1&o&&(t.TgZ(0,"div",56)(1,"div",57)(2,"div",58)(3,"div",59)(4,"h4",60),t._uU(5),t.ALo(6,"number"),t.qZA(),t.TgZ(7,"h5"),t._uU(8,"Total"),t.qZA()()()(),t.TgZ(9,"div",57)(10,"div",61)(11,"div",59)(12,"h4",60),t._uU(13),t.ALo(14,"number"),t.qZA(),t.TgZ(15,"h5"),t._uU(16,"Total Cash"),t.qZA()()()(),t.TgZ(17,"div",57)(18,"div",62)(19,"div",59)(20,"h4",60),t._uU(21),t.ALo(22,"number"),t.qZA(),t.TgZ(23,"h5"),t._uU(24,"Total Bank"),t.qZA()()()(),t.TgZ(25,"div",57)(26,"div",63)(27,"div",59)(28,"h4",60),t._uU(29),t.ALo(30,"number"),t.qZA(),t.TgZ(31,"h5"),t._uU(32,"Cash Percentage"),t.qZA()()()(),t.TgZ(33,"div",57)(34,"div",62)(35,"div",59)(36,"h4",60),t._uU(37),t.ALo(38,"number"),t.qZA(),t.TgZ(39,"h5"),t._uU(40,"Bank Percentage"),t.qZA()()()()()),2&o){const e=t.oxw();let r,s,l,u,c;t.xp6(4),t.Q6J("ngStyle",t.VKq(25,C,(null==e.saleSummary||null==e.saleSummary.total||null==(r=e.saleSummary.total.toString())?null:r.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(6,10,null==e.saleSummary?null:e.saleSummary.total,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(27,C,(null==e.saleSummary||null==e.saleSummary.total_cash||null==(s=e.saleSummary.total_cash.toString())?null:s.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(14,13,null==e.saleSummary?null:e.saleSummary.total_cash,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(29,C,(null==e.saleSummary||null==e.saleSummary.total_abnk||null==(l=e.saleSummary.total_abnk.toString())?null:l.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(22,16,null==e.saleSummary?null:e.saleSummary.total_abnk,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(31,C,(null==e.saleSummary||null==e.saleSummary.cash_percentage||null==(u=e.saleSummary.cash_percentage.toString())?null:u.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(30,19,null==e.saleSummary?null:e.saleSummary.cash_percentage,"1.2-2"),""),t.xp6(7),t.Q6J("ngStyle",t.VKq(33,C,(null==e.saleSummary||null==e.saleSummary.bank_percentage||null==(c=e.saleSummary.bank_percentage.toString())?null:c.length)>=10?"15px":"24px")),t.xp6(1),t.hij(" ",t.xi3(38,22,null==e.saleSummary?null:e.saleSummary.bank_percentage,"1.2-2"),"")}}function Y(o,d){if(1&o&&(t.TgZ(0,"tr")(1,"th"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA()()),2&o){const e=d.$implicit,r=d.index;t.xp6(2),t.Oqu(r+1+"."),t.xp6(2),t.Oqu(e.date),t.xp6(2),t.Oqu(e.receipt_type),t.xp6(2),t.Oqu(e.receipt_voucher_no),t.xp6(2),t.Oqu(e.note)}}const k=function(o,d){return{itemsPerPage:o,currentPage:d}};function H(o,d){if(1&o&&(t.TgZ(0,"tbody"),t.YNc(1,Y,11,5,"tr",25),t.ALo(2,"paginate"),t.ALo(3,"orderBy"),t.qZA()),2&o){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",t.xi3(2,1,t.Dn7(3,4,e.saleSummaryList,e.key,e.reverse),t.WLB(8,k,e.itemsPerPage,e.p)))}}function V(o,d){1&o&&(t.TgZ(0,"tbody")(1,"tr")(2,"td",64)(3,"p",65),t._uU(4,"Data not available"),t.qZA()()()())}const j=[{path:"",component:(()=>{class o{constructor(e,r,s,l,u,c,h,y){this.router=e,this.fb=r,this.toastr=s,this.transactionService=l,this.purchaseService=u,this.cs=c,this.datepipe=h,this.reportService=y,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new m.NI(""),this.userControl=new m.NI,this.users=[],this.suppliers=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.loaderPdf=!1}ngOnInit(){this.cs.userDetails$.subscribe(h=>{this.userDetails=h,console.log(h),this.userName=h?.username});const e=new Date,l=(e.getMonth(),e.getFullYear(),new Date(e));l.setDate(e.getDate()-14);const u=this.formatDate(l),c=this.formatDate(e);this.saleSummaryform=new m.cw({start:new m.NI(u),end:new m.NI(c),user_id:new m.NI,payment_type:new m.NI("")}),this.startDate=this.saleSummaryform.value?.start,this.endDate=this.saleSummaryform.value?.end,this.saleSummaryUserId=this.saleSummaryform.value?.user_id,this.saleSummaryPaymentType=this.saleSummaryform.value?.payment_type,this.getSaleSummary(),this.getUser(),this.filteredusers=this.userControl.valueChanges.pipe((0,n.O)(""),(0,p.U)(h=>this._filter1(h,!0))),this.filteredSuppliers=this.supplierControl.valueChanges.pipe((0,n.O)(""),(0,p.U)(h=>{const y="string"==typeof h?h:h?.detail?.name;return y?this._filter(y):this.suppliers.slice()}))}formatDate(e){return this.datepipe.transform(e,"yyyy-MM-dd")||""}_filter1(e,r){const s="string"==typeof e?e.toLowerCase():e.toString().toLowerCase(),l=this.users.filter(r?u=>u?.name?.toLowerCase().includes(s)||u.username.toLowerCase().includes(s):u=>!u?.name?.toLowerCase().includes(s)||u.username.toLowerCase().includes(s));return!r&&0===l.length&&l.push({name:"No data found"}),l}getUser(){this.reportService.getUser().subscribe(e=>{this.users=e?.data})}_filter(e){const r=e?e.toLowerCase():"";return console.log(r),this.suppliers.filter(s=>s?.detail?.name.toLowerCase().includes(r)||s?.detail?.company_name?.toLowerCase().includes(r)||s?.account?.account_id?.toLowerCase().includes(r))}displayFn(e){return e&&e?.detail?.company_name?e?.detail?.company_name:""}search(){if(""===this.titlee)this.getSaleSummary();else{const e=this.titlee.toLocaleLowerCase();this.saleSummaryList=this.saleSummaryList?.filter(r=>{const s=r?.user?.party_name.toLocaleLowerCase(),l=r?.receipt_voucher_no.toLocaleLowerCase()||"";return!(!s.includes(e)&&!l.includes(e))})}}sort(e){this.key=e,this.reverse=!this.reverse}selectAll(e){this.countryList.forEach(e?r=>{r.isSelected=!1}:r=>{r.isSelected=!0})}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(e,r,s){const l=(e-1)*r;return`Showing ${l+1}\u2013${Math.min(l+r-1,s-1)+1} of ${s} results`}getSaleSummary(){this.reportService.getSaleSummaryList(this.startDate,this.endDate,this.saleSummaryUserId).subscribe(e=>{console.log(e),this.saleSummaryList=e?.data,this.saleSummary=e})}oncheckAccount(e){console.log(e),this.userName=e?.detail?.company_name,this.dataId=e?.id,this.saleSummaryform.patchValue({user_id:this.dataId}),console.warn(this.saleSummaryform.value),this.saleSummaryUserId=this.saleSummaryform.value?.user_id,this?.getSaleSummary()}selectUser(e){this.dataId=e,this.saleSummaryform.patchValue({user_id:this.dataId}),console.warn(this.saleSummaryform.value),this.saleSummaryUserId=this.saleSummaryform.value?.user_id,this?.getSaleSummary()}getSelectedSaleSummaryDates(){console.log(this.saleSummaryform.value);const e=this.datepipe.transform(this.saleSummaryform.value.start,"yyyy-MM-dd"),r=this.datepipe.transform(this.saleSummaryform.value.end,"yyyy-MM-dd");console.log(e),console.log(r),this.startDate=e,this.endDate=r,this?.getSaleSummary()}generatePDFAgain(){const e=new f.default,l=`Date Range From: ${this.startDate} - ${this.endDate}`,u=`User: ${this.userName}`;e.setFontSize(12),e.setTextColor(33,43,54),e.text("PV",86,5),e.text("Sale Summary Report",82,10),e.text(u,10,18),e.text(l,10,22),e.text("",10,25),a()(e,{head:[["#","Date","Reciept Method","Reciept Voucher No. ","Note"]],body:this.saleSummaryList.map((c,h)=>[h+1,c.date,c.receipt_type,c.receipt_voucher_no,c.note]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),e.save("saleSummary.pdf")}getVisibleDataFromTable(){const e=[],r=document.getElementById("mytable");if(r){const s=r.querySelector("thead tr");if(s){const u=[];s.querySelectorAll("th").forEach(c=>{const h=c.textContent?.trim();h&&"Is Active"!==h&&"Action"!==h&&u.push(h)}),e.push(u)}r.querySelectorAll("tbody tr").forEach(u=>{const c=[];u.querySelectorAll("td").forEach(h=>{const y=h.textContent?.trim();y&&c.push(y)}),e.push(c)})}return e}exportToExcel(){const e=this.getVisibleDataFromTable(),r=v.P6.aoa_to_sheet(e),s=v.P6.book_new();v.P6.book_append_sheet(s,r,"Sheet1");const l=v.cW(s,{bookType:"xlsx",type:"array"}),u=new Blob([l],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,b.saveAs)(u,"saleSummary.xlsx")}printTable(){const e=document.getElementById("mytable");if(!e)return void console.error("Table element with ID 'mytable' not found.");const s=document.querySelector(".titl");if(!s)return void console.error("Title element with class 'titl' not found.");const l=s.outerHTML,c=e.cloneNode(!0).outerHTML,y="<style>.spaced-title { margin-top: 80px; }</style>"+l.replace("titl","spaced-title")+c,nt=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=y,window.print(),document.body.innerHTML=nt}generatePdf(){this.loaderPdf=!0;const e=document.getElementById("debitNote");e&&S()(e).then(r=>{this.loaderPdf=!1;const s=r.toDataURL("image/png"),l=new f.default("p","mm","a4"),u=l.internal.pageSize.getWidth(),c=l.internal.pageSize.getHeight();l.addImage(s,"JPEG",0,0,u,c),l.save("saleSummary.pdf")})}changePg(e){console.log(e),-1==e&&(this.itemsPerPage=this.saleSummaryList?.length)}}return o.\u0275fac=function(e){return new(e||o)(t.Y36(_.F0),t.Y36(m.qu),t.Y36(I._W),t.Y36(J.p),t.Y36(B.x),t.Y36(E.J),t.Y36(g.uU),t.Y36(F.r))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-sale-summary"]],decls:94,vars:16,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","97%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-5","col-md-6","col-12"],[1,"form-group"],["type","text","placeholder","Search UserName","aria-label","customer","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["id","debitNote"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],["id","page_field",1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],[1,"row","container"],[1,"col-lg-2","col-sm-4","col-12","d-flex"],[1,"dash-count",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],[1,"dash-count","das1",2,"margin","0 0 10px"],[1,"dash-count","das3",2,"margin","0 0 10px"],[1,"dash-count","das4",2,"margin","0 0 10px"],["colspan","10"],[1,"text-center"]],template:function(e,r){if(1&e){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),t._uU(5,"Sale Summary"),t.qZA(),t.TgZ(6,"h6"),t._uU(7,"Manage your Sale Summary"),t.qZA()()(),t.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),t._uU(17,"Select Date"),t.qZA(),t.TgZ(18,"mat-form-field",13)(19,"mat-date-range-input",14)(20,"input",15),t.NdJ("dateChange",function(){return r.getSelectedSaleSummaryDates()}),t.qZA(),t.TgZ(21,"span",16)(22,"span",17),t._uU(23,"to"),t.qZA()(),t.TgZ(24,"input",18),t.NdJ("dateChange",function(){return r.getSelectedSaleSummaryDates()}),t.qZA()(),t._UZ(25,"mat-datepicker-toggle",19)(26,"mat-date-range-picker",null,20),t.qZA()()(),t.TgZ(28,"div",21)(29,"div",22)(30,"label"),t._uU(31,"User Name"),t.qZA(),t._UZ(32,"input",23),t.TgZ(33,"mat-autocomplete",null,24),t.YNc(35,z,2,1,"ng-container",25),t.ALo(36,"async"),t.qZA()()()()()(),t.TgZ(37,"div",26)(38,"ul")(39,"li")(40,"a",27),t.NdJ("click",function(){return r.generatePDFAgain()}),t._UZ(41,"img",28),t.qZA()(),t.TgZ(42,"li")(43,"a",29),t.NdJ("click",function(){return r.exportToExcel()}),t._UZ(44,"img",30),t.qZA()(),t.TgZ(45,"li")(46,"a",31),t.NdJ("click",function(){return r.printTable()}),t._UZ(47,"img",32),t.qZA()()()()(),t.TgZ(48,"div",33),t.YNc(49,Q,41,35,"div",34),t.TgZ(50,"div",35)(51,"table",36)(52,"thead")(53,"tr")(54,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(55,"#"),t._UZ(56,"i",38),t.qZA(),t.TgZ(57,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(58,"Date "),t._UZ(59,"i",38),t.qZA(),t.TgZ(60,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(61,"Reciept Method"),t._UZ(62,"i",38),t.qZA(),t.TgZ(63,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(64," Reciept Voucher No. "),t._UZ(65,"i",38),t.qZA(),t.TgZ(66,"th",37),t.NdJ("click",function(){return r.sort("id")}),t._uU(67,"Note"),t._UZ(68,"i",38),t.qZA()()(),t.YNc(69,H,4,11,"tbody",39),t.YNc(70,V,5,0,"tbody",39),t.qZA(),t.TgZ(71,"div",10)(72,"div",40)(73,"div",41),t._uU(74," Show per page "),t.TgZ(75,"select",42,43),t.NdJ("ngModelChange",function(u){return r.itemsPerPage=u})("change",function(){t.CHM(s);const u=t.MAs(76);return t.KtG(r.changePg(u.value))}),t.TgZ(77,"option",44),t._uU(78,"10"),t.qZA(),t.TgZ(79,"option",45),t._uU(80,"20"),t.qZA(),t.TgZ(81,"option",46),t._uU(82,"30"),t.qZA(),t.TgZ(83,"option",47),t._uU(84,"50"),t.qZA(),t.TgZ(85,"option",48),t._uU(86,"100"),t.qZA(),t.TgZ(87,"option",49),t._uU(88,"All"),t.qZA()()()(),t.TgZ(89,"div",50)(90,"div",51)(91,"pagination-controls",52),t.NdJ("pageChange",function(u){return r.p=u}),t.qZA(),t.TgZ(92,"div",53),t._uU(93),t.qZA()()()()()()()()()()}if(2&e){const s=t.MAs(27),l=t.MAs(34);t.xp6(12),t.Q6J("formGroup",r.saleSummaryform),t.xp6(7),t.Q6J("formGroup",r.saleSummaryform)("rangePicker",s),t.xp6(6),t.Q6J("for",s),t.xp6(7),t.Q6J("formControl",r.userControl)("matAutocomplete",l),t.xp6(3),t.Q6J("ngForOf",t.lcZ(36,14,r.filteredusers)),t.xp6(14),t.Q6J("ngIf",r.saleSummary),t.xp6(20),t.Q6J("ngIf",(null==r.saleSummaryList?null:r.saleSummaryList.length)>=0),t.xp6(1),t.Q6J("ngIf",0==(null==r.saleSummaryList?null:r.saleSummaryList.length)),t.xp6(5),t.Q6J("ngModel",r.itemsPerPage),t.xp6(18),t.lnq(" Showing ",r.itemsPerPage," to ",null==r.saleSummaryList?null:r.saleSummaryList.length," of ",r.p," entries ")}},dependencies:[g.sg,g.O5,g.PC,m._Y,m.YN,m.Kr,m.Fj,m.EJ,m.JJ,m.JL,m.On,m.oH,m.sg,m.u,L.LS,A.XC,A.ZL,w.ey,T.KE,T.R9,$.Nt,x.nW,x.wx,x.zY,x.By,x._g,g.Ov,g.JJ,L._s,R.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:15px;letter-spacing:3px;font-weight:700;padding-left:30px}.head[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:20px;letter-spacing:3px;font-weight:700}.head6[_ngcontent-%COMP%]{font-size:18px;padding-left:10%}"]}),o})()}];let K=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[_.Bz.forChild(j),_.Bz]}),o})();var W=i(3056),G=i(87078),O=i(86323),Z=i(92642),X=i(95113),tt=i(64155),et=i(6205),N=i(8468);const at={User:Z.n5m,UserCheck:Z.uS3,FileText:Z.acj,File:Z.$BE};let rt=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[g.uU],imports:[g.ez,K,N.I,m.u5,m.UX,A.Bb,T.lN,$.c,W.ZQ,G.T,x.FA,T.lN,w.XK,X.LD,tt.vQ,N.I,et.X,O.p.pick(at),O.p]}),o})()}}]);