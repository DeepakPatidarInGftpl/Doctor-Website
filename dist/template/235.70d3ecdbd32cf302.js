"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[235],{53506:($,U,l)=>{l.d(U,{x:()=>y});var m=l(92340),_=l(94650),c=l(80529);let y=(()=>{class f{constructor(t){this.http=t,this.apiUrl=`${m.N.api}`}getBranch(){throw new Error("Method not implemented.")}getSupplier(){return this.http.get(this.apiUrl+"/pv-api/supplier/")}getPurchaseFY(t,r){console.log(r,"branch"),console.log(r.length,"branch");let e=this.apiUrl+"/pv-api/purchase_order/";const s=[];if(t&&s.push(`financial_year=${t}`),r&&r.length>0){const u=JSON.stringify(r);console.log(u),console.log(u?.length),s.push(`branch=${u}`)}return s.length>0&&(e+="?"+s.join("&")),this.http.get(e)}getPurchase(){return this.http.get(this.apiUrl+"/pv-api/purchase_order/")}addPurchase(t){return this.http.post(this.apiUrl+"/pv-api/purchase_order/",t)}getPurchaseById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}PurchaseIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`,r)}updatePurchase(t,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_order/?id="}${r}`,t)}deletePurchase(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_order/?id="}${t}`)}searchProduct(t){return this.http.get(this.apiUrl+"/pv-api/product_search/?search="+t)}productVariant(){return this.http.get(this.apiUrl+"/pv-api/product_variant/")}getMaterialFY(t,r){console.log(r,"branch"),console.log(r.length,"branch");let e=this.apiUrl+"/pv-api/material_inward/";const s=[];if(t&&s.push(`financial_year=${t}`),r&&r.length>0){const u=JSON.stringify(r);console.log(u),console.log(u?.length),s.push(`branch=${u}`)}return s.length>0&&(e+="?"+s.join("&")),this.http.get(e)}getMaterial(){return this.http.get(this.apiUrl+"/pv-api/material_inward/")}addMaterial(t){return this.http.post(this.apiUrl+"/pv-api/material_inward/",t)}getMaterialById(t){return this.http.get(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}MaterialIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`,r)}updateMaterial(t,r){return this.http.put(`${this.apiUrl+"/pv-api/material_inward/?id="}${r}`,t)}deleteMaterial(t){return this.http.delete(`${this.apiUrl+"/pv-api/material_inward/?id="}${t}`)}getPurchaseBillFY(t,r){console.log(r,"branch"),console.log(r.length,"branch");let e=this.apiUrl+"/pv-api/purchase_bill/";const s=[];if(t&&s.push(`financial_year=${t}`),r&&r.length>0){const u=JSON.stringify(r);console.log(u),console.log(u?.length),s.push(`branch=${u}`)}return s.length>0&&(e+="?"+s.join("&")),this.http.get(e)}getPurchaseBill(){return this.http.get(this.apiUrl+"/pv-api/purchase_bill/")}addPurchaseBill(t){return this.http.post(this.apiUrl+"/pv-api/purchase_bill/",t)}getPurchaseBillById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}PurchaseBillIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`,r)}updatePurchaseBill(t,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${r}`,t)}deletePurchaseBill(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_bill/?id="}${t}`)}getDebitNotes(t,r){console.log(r,"branch"),console.log(r.length,"branch");let e=this.apiUrl+"/pv-api/debit_note/";const s=[];if(t&&s.push(`financial_year=${t}`),r&&r.length>0){const u=JSON.stringify(r);console.log(u),console.log(u?.length),s.push(`branch=${u}`)}return s.length>0&&(e+="?"+s.join("&")),this.http.get(e)}addDebitNotes(t){return this.http.post(this.apiUrl+"/pv-api/debit_note/",t)}getDebitNotesById(t){return this.http.get(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}DebitNotesIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`,r)}updateDebitNotes(t,r){return this.http.put(`${this.apiUrl+"/pv-api/debit_note/?id="}${r}`,t)}deleteDebitNotes(t){return this.http.delete(`${this.apiUrl+"/pv-api/debit_note/?id="}${t}`)}getSearchProductById(t){return this.http.get(`${this.apiUrl+"/pv-api/variant-search/?search="}${t}`)}getSearchProduct(){return this.http.get(this.apiUrl+"/pv-api/variant-search/")}getPurchaseOrderPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseOrder")}getPurchaseBillPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseBill")}getDebitNotePrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=PurchaseReturn")}getMaterialInwardPrefix(){return this.http.get(this.apiUrl+"/pv-api/prefix/?id=MaterialInward")}productBySupplier(){return this.http.get(this.apiUrl+"/pv-api/purchase_product_filter/")}getAdditionalCharge(){return this.http.get(this.apiUrl+"/pv-api/pos/additional_charge_pos/")}getTax(){return this.http.get(this.apiUrl+"/pv-api/tax/")}getPurchaseReturnfy(t,r){console.log(r,"branch"),console.log(r.length,"branch");let e=this.apiUrl+"/pv-api/purchase_return/";const s=[];if(t&&s.push(`financial_year=${t}`),r&&r.length>0){const u=JSON.stringify(r);console.log(u),console.log(u?.length),s.push(`branch=${u}`)}return s.length>0&&(e+="?"+s.join("&")),this.http.get(e)}getPurchaseReturn(){return this.http.get(this.apiUrl+"/pv-api/purchase_return/")}addPurchaseReturn(t){return this.http.post(this.apiUrl+"/pv-api/purchase_return/",t)}getPurchaseReturnById(t){return this.http.get(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}PurchaseReturnIsActive(t,r){return this.http.patch(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`,r)}updatePurchaseReturn(t,r){return this.http.put(`${this.apiUrl+"/pv-api/purchase_return/?id="}${r}`,t)}deletePurchaseReturn(t){return this.http.delete(`${this.apiUrl+"/pv-api/purchase_return/?id="}${t}`)}filterVariant(t,r,e,s){let u=this.apiUrl+"/pv-api/purchase_product_filter/";const P=[];return t&&P.push(`supplier=${t}`),r&&P.push(`category=${r}`),e&&P.push(`subcategory=${e}`),s&&P.push(`search=${s}`),P.length>0&&(u+="?"+P.join("&")),this.http.get(u)}}return f.\u0275fac=function(t){return new(t||f)(_.LFG(c.eN))},f.\u0275prov=_.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()},10235:($,U,l)=>{l.r(U),l.d(U,{PurchaseOverdueModule:()=>k});var m=l(36895),_=l(89299),c=l(24006),y=l(94327),f=l(96166),D=l(12983),t=l.n(D),r=l(80574),e=l(94650),s=l(97185),u=l(71071),P=l(53506),b=l(42917),M=l(87719),Z=l(54333),S=l(54040);const C=function(n){return{"font-size":n}};function N(n,v){if(1&n&&(e.TgZ(0,"div",41)(1,"div",42)(2,"div",43)(3,"div",44)(4,"h4",45),e._uU(5),e.ALo(6,"number"),e.qZA(),e.TgZ(7,"h5"),e._uU(8,"Total Overdue Amount"),e.qZA()()()()()),2&n){const i=e.oxw();let a;e.xp6(4),e.Q6J("ngStyle",e.VKq(5,C,(null==i.purchaseOverDue||null==i.purchaseOverDue.Total_Overdue_Amount||null==(a=i.purchaseOverDue.Total_Overdue_Amount.toString())?null:a.length)>=10?"15px":"24px")),e.xp6(1),e.hij(" ",e.xi3(6,2,null==i.purchaseOverDue?null:i.purchaseOverDue.Total_Overdue_Amount,"1.2-2"),"")}}function B(n,v){if(1&n&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.ALo(8,"date"),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA(),e.TgZ(13,"td"),e._uU(14),e.qZA()()),2&n){const i=v.$implicit,a=v.index;e.xp6(2),e.Oqu(a+1+"."),e.xp6(2),e.Oqu(e.xi3(5,6,i.supplier_bill_date,"shortDate")),e.xp6(3),e.Oqu(e.xi3(8,9,i.due_date,"shortDate")),e.xp6(3),e.Oqu(i.supplier_bill_no),e.xp6(2),e.Oqu(i.pending_amount),e.xp6(2),e.Oqu(i.over_due_days)}}const L=function(n,v){return{itemsPerPage:n,currentPage:v}};function J(n,v){if(1&n&&(e.TgZ(0,"tbody"),e.YNc(1,B,15,12,"tr",46),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&n){const i=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,i.purchaseOverDueList,i.key,i.reverse),e.WLB(8,L,i.itemsPerPage,i.p)))}}function I(n,v){1&n&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",47)(3,"p",48),e._uU(4,"Data not available"),e.qZA()()()())}const F=[{path:"",component:(()=>{class n{constructor(i,a,h,o,p,d,g,O){this.router=i,this.fb=a,this.toastr=h,this.transactionService=o,this.purchaseService=p,this.cs=d,this.datepipe=g,this.reportService=O,this.loader=!0,this.p=1,this.itemsPerPage=10,this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[]}ngOnInit(){this.cs.userDetails$.subscribe(g=>{this.userDetails=g,console.log(g),this.userName=g?.username});const i=new Date,o=(i.getMonth(),i.getFullYear(),new Date(i));o.setDate(i.getDate()-14);const p=this.formatDate(o);this.formatDate(i),this.purchaseOverDueform=new c.cw({date:new c.NI(p)}),this.date=this.purchaseOverDueform.value.date,this.getPurchaseOverDue()}formatDate(i){return this.datepipe.transform(i,"yyyy-MM-dd")||""}sort(i){this.key=i,this.reverse=!this.reverse}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(i,a,h){const o=(i-1)*a;return`Showing ${o+1}\u2013${Math.min(o+a-1,h-1)+1} of ${h} results`}getPurchaseOverDue(){this.reportService.getPurchaseOverDue(this.date).subscribe(i=>{console.log(i?.successsalebill),this.purchaseOverDueList=i?.salebill,this.purchaseOverDue=i,console.log(this.purchaseOverDue?.Total_Overdue_Amount),console.log(this.purchaseOverDueList)})}getSelectedpurchaseOverDueDates(){console.log(this.purchaseOverDueform.value);const i=this.datepipe.transform(this.purchaseOverDueform.value.date,"yyyy-MM-dd");console.log(i),this.date=i,this.getPurchaseOverDue()}generatePDFAgain(){const i=new f.default,o=`Date Range From: ${this.date}`,p=`User: ${this.userName}`;i.setFontSize(12),i.setTextColor(33,43,54),i.text("PV",86,5),i.text("Purchase Overdue Report",82,10),i.text(p,10,18),i.text(o,10,22),i.text("",10,25),t()(i,{head:[["#","SupplierBill Date","Due Date","Supplier Bill No.","Pending Amount","Over Due Days"]],body:this.purchaseOverDueList.map((d,g)=>[g+1,this.formatDate(d.supplier_bill_date),this.formatDate(d.due_date),d.supplier_bill_no,d.pending_amount,d.over_due_days]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),i.save("Purchase_Overdue .pdf")}getVisibleDataFromTable(){const i=[],a=document.getElementById("mytable");if(a){const h=a.querySelector("thead tr");if(h){const p=[];h.querySelectorAll("th").forEach(d=>{const g=d.textContent?.trim();g&&"Is Active"!==g&&"Action"!==g&&p.push(g)}),i.push(p)}a.querySelectorAll("tbody tr").forEach(p=>{const d=[];p.querySelectorAll("td").forEach(g=>{const O=g.textContent?.trim();O&&d.push(O)}),i.push(d)})}return i}exportToExcel(){const i=this.getVisibleDataFromTable(),a=r.P6.aoa_to_sheet(i),h=r.P6.book_new();r.P6.book_append_sheet(h,a,"Sheet1");const o=r.cW(h,{bookType:"xlsx",type:"array"}),p=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,y.saveAs)(p,"purchaseOverdue.xlsx")}printTable(){const i=document.getElementById("mytable");if(!i)return void console.error("Table element with ID 'mytable' not found.");const h=document.querySelector(".titl");if(!h)return void console.error("Title element with class 'titl' not found.");const o=h.outerHTML,d=i.cloneNode(!0).outerHTML,O="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+d,G=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=O,window.print(),document.body.innerHTML=G}changePg(i){console.log(i),-1==i&&(this.itemsPerPage=this.purchaseOverDueList?.length)}}return n.\u0275fac=function(i){return new(i||n)(e.Y36(_.F0),e.Y36(c.qu),e.Y36(s._W),e.Y36(u.p),e.Y36(P.x),e.Y36(b.J),e.Y36(m.uU),e.Y36(M.r))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-purchase-overdue"]],decls:78,vars:8,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"row"],[1,"col-lg-12","col-sm-6","col-12"],[1,"search-input","mx-3"],["type","date","formControlName","date",3,"change"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],["class","row container",4,"ngIf"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"row","container"],[1,"col-lg-3","col-sm-4","col-12","d-flex"],[1,"dash-count",2,"margin","0 0 10px"],[1,"dash-counts"],[3,"ngStyle"],[4,"ngFor","ngForOf"],["colspan","10"],[1,"text-center"]],template:function(i,a){if(1&i){const h=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"Purchase OverDue"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your Purchase OverDue"),e.qZA()()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7)(11,"div",8)(12,"form",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"strong"),e._uU(17,"Select Date"),e.qZA(),e.TgZ(18,"input",13),e.NdJ("change",function(){return a.getSelectedpurchaseOverDueDates()}),e.qZA()()()()()(),e.TgZ(19,"div",14)(20,"ul")(21,"li")(22,"a",15),e.NdJ("click",function(){return a.generatePDFAgain()}),e._UZ(23,"img",16),e.qZA()(),e.TgZ(24,"li")(25,"a",17),e.NdJ("click",function(){return a.exportToExcel()}),e._UZ(26,"img",18),e.qZA()(),e.TgZ(27,"li")(28,"a",19),e.NdJ("click",function(){return a.printTable()}),e._UZ(29,"img",20),e.qZA()()()()(),e.YNc(30,N,9,7,"div",21),e.TgZ(31,"div",22)(32,"table",23)(33,"thead")(34,"tr")(35,"th",24),e.NdJ("click",function(){return a.sort("id")}),e._uU(36,"#"),e._UZ(37,"i",25),e.qZA(),e.TgZ(38,"th",24),e.NdJ("click",function(){return a.sort("id")}),e._uU(39," Supplier Bill Date "),e._UZ(40,"i",25),e.qZA(),e.TgZ(41,"th",24),e.NdJ("click",function(){return a.sort("id")}),e._uU(42," Due Date "),e._UZ(43,"i",25),e.qZA(),e.TgZ(44,"th",24),e.NdJ("click",function(){return a.sort("id")}),e._uU(45,"Supplier Bill No."),e._UZ(46,"i",25),e.qZA(),e.TgZ(47,"th",24),e.NdJ("click",function(){return a.sort("id")}),e._uU(48," Pending Amount "),e._UZ(49,"i",25),e.qZA(),e.TgZ(50,"th",24),e.NdJ("click",function(){return a.sort("id")}),e._uU(51,"Over Due Days"),e._UZ(52,"i",25),e.qZA()()(),e.YNc(53,J,4,11,"tbody",26),e.YNc(54,I,5,0,"tbody",26),e.qZA(),e.TgZ(55,"div",10)(56,"div",27)(57,"div",28),e._uU(58," Show per page "),e.TgZ(59,"select",29,30),e.NdJ("ngModelChange",function(p){return a.itemsPerPage=p})("change",function(){e.CHM(h);const p=e.MAs(60);return e.KtG(a.changePg(p.value))}),e.TgZ(61,"option",31),e._uU(62,"10"),e.qZA(),e.TgZ(63,"option",32),e._uU(64,"20"),e.qZA(),e.TgZ(65,"option",33),e._uU(66,"30"),e.qZA(),e.TgZ(67,"option",34),e._uU(68,"50"),e.qZA(),e.TgZ(69,"option",35),e._uU(70,"100"),e.qZA(),e.TgZ(71,"option",36),e._uU(72,"All"),e.qZA()()()(),e.TgZ(73,"div",37)(74,"div",38)(75,"pagination-controls",39),e.NdJ("pageChange",function(p){return a.p=p}),e.qZA(),e.TgZ(76,"div",40),e._uU(77),e.qZA()()()()()()()()()}2&i&&(e.xp6(12),e.Q6J("formGroup",a.purchaseOverDueform),e.xp6(18),e.Q6J("ngIf",a.purchaseOverDue),e.xp6(23),e.Q6J("ngIf",(null==a.purchaseOverDueList?null:a.purchaseOverDueList.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==a.purchaseOverDueList?null:a.purchaseOverDueList.length)),e.xp6(5),e.Q6J("ngModel",a.itemsPerPage),e.xp6(18),e.lnq(" Showing ",a.itemsPerPage," to ",null==a.purchaseOverDueList?null:a.purchaseOverDueList.length," of ",a.p," entries "))},dependencies:[m.sg,m.O5,m.PC,c._Y,c.YN,c.Kr,c.Fj,c.EJ,c.JJ,c.JL,c.On,c.sg,c.u,Z.LS,m.JJ,m.uU,Z._s,S.T],styles:[".ng-dirty.ng-invalid.is-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid red}select[_ngcontent-%COMP%], input[type=date][_ngcontent-%COMP%], input[type=button][_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}textarea[_ngcontent-%COMP%]{height:40px}"]}),n})()}];let w=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[_.Bz.forChild(F),_.Bz]}),n})();var E=l(47957),x=l(59549),R=l(44144),Y=l(3056),q=l(87078),A=l(86323),T=l(92642),j=l(99602),H=l(3238),Q=l(95113),z=l(64155),K=l(6205),V=l(8468);const W={User:T.n5m,UserCheck:T.uS3,FileText:T.acj,File:T.$BE};let k=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[m.uU],imports:[m.ez,w,c.u5,c.UX,E.Bb,x.lN,R.c,Y.ZQ,q.T,j.FA,x.lN,H.XK,Q.LD,z.vQ,V.I,K.X,A.p.pick(W),A.p]}),n})()}}]);