"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[4892],{94892:(re,C,i)=>{i.r(C),i.d(C,{GeneralLedgerModule:()=>ne});var u=i(36895),y=i(89299),d=i(24006),b=i(68675),D=i(54004),M=i(96166),A=i(12983),U=i.n(A),h=i(80574),w=i(94327),e=i(94650),B=i(97185),k=i(71071),G=i(80927),P=i(42917),O=i(87719),v=i(47957),x=i(3238),f=i(59549),Z=i(44144),m=i(99602),T=i(54333),N=i(54040);function S(r,g){if(1&r){const t=e.EpF();e.TgZ(0,"a",62)(1,"input",63,64),e.NdJ("change",function(a){const l=e.CHM(t).$implicit,s=e.oxw(2);return e.KtG(s.SelectedBranch(l.id,a.target.checked))}),e.qZA(),e.TgZ(3,"label",65),e.NdJ("click",function(a){e.CHM(t);const o=e.oxw(2);return e.KtG(o.onLabelClick(a))}),e._uU(4),e.qZA()()}if(2&r){const t=g.$implicit,n=g.index,a=e.oxw(2);e.xp6(1),e.Q6J("value",t.id)("checked",a.selectData.includes(t.id))("id","checkboxCat-"+n),e.xp6(2),e.Q6J("for","checkboxCat-"+n),e.xp6(1),e.Oqu(t.title)}}function J(r,g){if(1&r&&(e.TgZ(0,"span"),e._uU(1),e.qZA()),2&r){const t=e.oxw(2);e.xp6(1),e.Oqu(t.selectData.length+" Selected")}}const I=function(){return{standalone:!0}};function q(r,g){if(1&r){const t=e.EpF();e.TgZ(0,"div",55)(1,"div",56)(2,"button",57),e._uU(3,"Select Branch"),e.qZA(),e.TgZ(4,"ul",58)(5,"li")(6,"input",59),e.NdJ("ngModelChange",function(a){e.CHM(t);const o=e.oxw();return e.KtG(o.searchBranch=a)})("ngModelChange",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.filterBranch())}),e.qZA()(),e.TgZ(7,"li"),e.YNc(8,S,5,5,"a",60),e.qZA()()(),e.TgZ(9,"div",61),e.YNc(10,J,2,1,"span",40),e.qZA()()}if(2&r){const t=e.oxw();e.xp6(6),e.Q6J("ngModel",t.searchBranch)("ngModelOptions",e.DdM(4,I)),e.xp6(2),e.Q6J("ngForOf",t.filteredBranchList),e.xp6(2),e.Q6J("ngIf",t.selectData.length>0)}}function F(r,g){if(1&r){const t=e.EpF();e.TgZ(0,"mat-option",67),e.NdJ("onSelectionChange",function(){e.CHM(t);const a=e.oxw().$implicit,o=e.oxw();return e.KtG(o.selectUser(null==a?null:a.id))}),e._uU(1),e.qZA()}if(2&r){const t=e.oxw().$implicit;e.Q6J("value",(null==t?null:t.name)+" "+(null==t?null:t.username)),e.xp6(1),e.hij(" ",(null==t?null:t.name)+" ("+(null==t?null:t.username)+")"," ")}}function Y(r,g){if(1&r&&(e.ynx(0),e.YNc(1,F,2,2,"mat-option",66),e.BQk()),2&r){const t=g.$implicit;e.xp6(1),e.Q6J("ngIf",!0===t.is_active)}}function E(r,g){if(1&r&&(e.TgZ(0,"tr")(1,"th"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"date"),e.qZA(),e.TgZ(6,"td"),e._uU(7),e.qZA(),e.TgZ(8,"td"),e._uU(9),e.qZA(),e.TgZ(10,"td"),e._uU(11),e.qZA(),e.TgZ(12,"td"),e._uU(13),e.qZA(),e.TgZ(14,"td"),e._uU(15),e.qZA(),e.TgZ(16,"td"),e._uU(17),e.qZA()()),2&r){const t=g.$implicit,n=g.index;e.xp6(2),e.Oqu(n+1+"."),e.xp6(2),e.Oqu(e.xi3(5,8,t.date,"dd-MM-yyyy")),e.xp6(3),e.Oqu(t.particulars),e.xp6(2),e.Oqu(t.voucher_type),e.xp6(2),e.Oqu(t.voucher_no),e.xp6(2),e.Oqu(t.description),e.xp6(2),e.Oqu(t.debit),e.xp6(2),e.Oqu(t.credit)}}const H=function(r,g){return{itemsPerPage:r,currentPage:g}};function Q(r,g){if(1&r&&(e.TgZ(0,"tbody"),e.YNc(1,E,18,11,"tr",28),e.ALo(2,"paginate"),e.ALo(3,"orderBy"),e.qZA()),2&r){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",e.xi3(2,1,e.Dn7(3,4,t.productDayBookList,t.key,t.reverse),e.WLB(8,H,t.itemsPerPage,t.p)))}}function z(r,g){1&r&&(e.TgZ(0,"tbody")(1,"tr")(2,"td",68)(3,"p",69),e._uU(4,"Data not available"),e.qZA()()()())}const $=[{path:"",component:(()=>{class r{constructor(t,n,a,o,l,s,c,p){this.router=t,this.fb=n,this.toastr=a,this.transactionService=o,this.coreService=l,this.cs=s,this.datepipe=c,this.reportService=p,this.loader=!0,this.dtOptions={},this.initChecked=!1,this.countryList=[],this.p=1,this.pageSize=10,this.itemsPerPage=10,this.supplierControl=new d.NI(""),this.userControl=new d.NI,this.productControl=new d.NI(""),this.isAdmin=!1,this.users=[],this.key="id",this.reverse=!1,this.allSelected=!1,this.selectedRows=[],this.productDayBookList=[],this.branchList=[],this.filteredBranchList=[],this.searchBranch="",this.searchVariant="",this.selectData=[],this.selectedCategoryIds=[]}ngOnInit(){if(localStorage.getItem("financialYear")){let c=localStorage.getItem("financialYear");console.warn(JSON.parse(c));let p=JSON.parse(c);this.fyID=p}this.cs.userDetails$.subscribe(c=>{this.isAdmin="admin"==c.role,this.getBranch()}),this.cs.userDetails$.subscribe(c=>{this.userDetails=c,console.log(c),this.userName=c?.username});const t=new Date,o=(t.getMonth(),t.getFullYear(),new Date(t));o.setDate(t.getDate()-14);const l=this.formatDate(o),s=this.formatDate(t);this.productDayBookform=new d.cw({start:new d.NI(l),end:new d.NI(s),user_id:new d.NI}),this.startDate=this.productDayBookform.value?.start,this.endDate=this.productDayBookform.value?.end,this.UserId=this.productDayBookform.value?.user_id,this.getUser(),this.filteredusers=this.userControl.valueChanges.pipe((0,b.O)(""),(0,D.U)(c=>this._filter1(c,!0)))}formatDate(t){return this.datepipe.transform(t,"yyyy-MM-dd")||""}_filter1(t,n){const a="string"==typeof t?t.toLowerCase():t.toString().toLowerCase(),o=this.users.filter(n?l=>l?.name?.toLowerCase().includes(a)||l.username.toLowerCase().includes(a):l=>!l?.name?.toLowerCase().includes(a)||l.username.toLowerCase().includes(a));return!n&&0===o.length&&o.push({name:"No data found"}),o}getUser(){this.reportService.getUser().subscribe(t=>{this.users=t?.data})}sort(t){this.key=t,this.reverse=!this.reverse}selectAlll(){this.selectedRows.fill(this.allSelected)}calculateProductRange(t,n,a){const o=(t-1)*n;return`Showing ${o+1}\u2013${Math.min(o+n-1,a-1)+1} of ${a} results`}getGeneralLedger(){this.reportService.getGeneralLedger(this.startDate,this.endDate,this.UserId,this.fyID,this.selectData).subscribe(t=>{console.log(t),this.productDayBookList=t})}oncheckAccount(t){console.log(t),this.userName=t?.detail?.company_name,this.dataId=t?.id,this.productDayBookform.patchValue({user_id:this.dataId}),console.warn(this.productDayBookform.value),this.UserId=this.productDayBookform.value?.user_id,this?.getGeneralLedger()}selectUser(t){this.dataId=t,this.productDayBookform.patchValue({user_id:this.dataId}),console.warn(this.productDayBookform.value),this.UserId=this.productDayBookform.value?.user_id,this?.getGeneralLedger()}getSelectedProductDayBookDates(){console.log(this.productDayBookform.value);const t=this.datepipe.transform(this.productDayBookform.value.start,"yyyy-MM-dd"),n=this.datepipe.transform(this.productDayBookform.value.end,"yyyy-MM-dd");console.log(t),console.log(n),this.startDate=t,this.endDate=n,this?.getGeneralLedger()}generatePDFAgain(){const t=new M.default,o=`Date Range From: ${this.startDate} - ${this.endDate}`,l=`User: ${this.userName}`;t.setFontSize(12),t.setTextColor(33,43,54),t.text("PV",86,5),t.text("General Ledger Report",82,10),t.text(l,10,18),t.text(o,10,22),t.text("",10,25),U()(t,{head:[["#","Date","Particulars","Voucher Type","Voucher No.","Description","Debit","Credit"]],body:this.productDayBookList.map((s,c)=>[c+1,this.formatDate(s.date),s.particulars,s.voucher_type,s.voucher_no,s.description,s.debit,s.credit]),theme:"grid",headStyles:{fillColor:[255,159,67]},startY:25}),t.save("General_Ledger.pdf")}getVisibleDataFromTable(){const t=[],n=document.getElementById("mytable");if(n){const a=n.querySelector("thead tr");if(a){const l=[];a.querySelectorAll("th").forEach(s=>{const c=s.textContent?.trim();c&&"Is Active"!==c&&"Action"!==c&&l.push(c)}),t.push(l)}n.querySelectorAll("tbody tr").forEach(l=>{const s=[];l.querySelectorAll("td").forEach(c=>{const p=c.textContent?.trim();p&&s.push(p)}),t.push(s)})}return t}exportToExcel(){const t=this.getVisibleDataFromTable(),n=h.P6.aoa_to_sheet(t),a=h.P6.book_new();h.P6.book_append_sheet(a,n,"Sheet1");const o=h.cW(a,{bookType:"xlsx",type:"array"}),l=new Blob([o],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"});(0,w.saveAs)(l,"generalledger.xlsx")}printTable(){const t=document.getElementById("mytable");if(!t)return void console.error("Table element with ID 'mytable' not found.");const a=document.querySelector(".titl");if(!a)return void console.error("Title element with class 'titl' not found.");const o=a.outerHTML,s=t.cloneNode(!0).outerHTML,p="<style>.spaced-title { margin-top: 80px; }</style>"+o.replace("titl","spaced-title")+s,oe=document.body.innerHTML;window.addEventListener("afterprint",()=>{console.log("afterprint"),window.location.reload()}),document.body.innerHTML=p,window.print(),document.body.innerHTML=oe}changePg(t){console.log(t),-1==t&&(this.itemsPerPage=this.productDayBookList?.length)}getBranch(){this.reportService.getBranch().subscribe(t=>{this.branchList=t,this.filteredBranchList=[...this.branchList]})}filterBranch(){this.filteredBranchList=""===this.searchBranch.trim()?[...this.branchList]:this.branchList.filter(t=>t.title.toLowerCase().includes(this.searchBranch.toLowerCase()))}SelectedBranch(t,n){if(n)console.log(t),this.selectData.push(t),console.log(this.selectData,"selected data"),this.searchVariant="",this.ngOnInit();else{const a=this.selectData.findIndex(o=>o==t);console.log(a),-1!==a&&this.selectData.splice(a,1),this.ngOnInit(),console.log(this.selectData)}}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(y.F0),e.Y36(d.qu),e.Y36(B._W),e.Y36(k.p),e.Y36(G.p),e.Y36(P.J),e.Y36(u.uU),e.Y36(O.r))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-general-ledger"]],decls:105,vars:16,consts:[[1,"row","w-100","m-0"],[1,"col-lg-12","col-12"],[1,"page-header"],[1,"page-title","titl"],[1,"text_24"],[1,"page-btn"],[1,"row"],[1,"col-lg-3","col-sm-6","col-12","d-flex"],["class","form-group w-100",4,"ngIf"],[1,"card"],[1,"card-body"],[1,"table-top"],[1,"search-set"],[3,"formGroup"],[1,"col-lg-7","col-sm-6","col-12"],[1,"search-input","mx-3"],[1,"border",2,"width","100%"],[3,"formGroup","rangePicker"],["matStartDate","","placeholder","Start date","formControlName","start",1,"mat-input",3,"dateChange"],[1,"mat-input-placeholder-wrapper"],[1,"mat-input-placeholder"],["matEndDate","","placeholder","End date","formControlName","end",1,"mat-input",3,"dateChange"],["matSuffix","",2,"font-size","x-large",3,"for"],["startdatePicker",""],[1,"col-lg-5","col-md-6","col-12"],[1,"form-group"],["type","text","placeholder","Search UserName","aria-label","customer","matInput","",2,"box-sizing","border-box",3,"formControl","matAutocomplete"],["auto","matAutocomplete"],[4,"ngFor","ngForOf"],[1,"wordset"],["data-bs-toggle","tooltip","data-bs-placement","top","title","pdf",3,"click"],["src","assets/img/icons/pdf.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","excel",3,"click"],["src","assets/img/icons/excel.svg","alt","img"],["data-bs-toggle","tooltip","data-bs-placement","top","title","print",3,"click"],["src","assets/img/icons/printer.svg","alt","img"],[1,"table-responsive"],["id","mytable",1,"table","datanew"],[1,"thone",3,"click"],[1,"fa","fa-sort"],[4,"ngIf"],[1,"col-lg-4","col-sm-4","col-12","mt-2"],[1,"entries"],[1,"pagination",3,"ngModel","ngModelChange","change"],["v",""],["value","10"],["value","20"],["value","30"],["value","50"],["value","100"],["value","-1"],[1,"col-lg-8","col-sm-8","col-12","mt-2"],[1,"f-right"],[3,"pageChange"],[1,"entries","f-right"],[1,"form-group","w-100"],[1,"dropdown"],["type","button","type","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","button"],[1,"dropdown-menu",2,"width","100%","max-height","300px","overflow-y","auto"],["type","text","placeholder","search category",1,"form-control",3,"ngModel","ngModelOptions","ngModelChange"],["class","dropdown-item",4,"ngFor","ngForOf"],[1,"d-flex"],[1,"dropdown-item"],["type","checkbox",2,"margin-right","5px",3,"value","checked","id","change"],["categoryValue",""],[2,"margin-bottom","0",3,"for","click"],["style","color:#FF9F43",3,"value","onSelectionChange",4,"ngIf"],[2,"color","#FF9F43",3,"value","onSelectionChange"],["colspan","10"],[1,"text-center"]],template:function(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h4",4),e._uU(5,"General Ledger"),e.qZA(),e.TgZ(6,"h6"),e._uU(7,"Manage your General Ledger"),e.qZA()(),e.TgZ(8,"div",5)(9,"div",6)(10,"div",7),e.YNc(11,q,11,5,"div",8),e.qZA()()()(),e.TgZ(12,"div",9)(13,"div",10)(14,"div",11)(15,"div",12)(16,"form",13)(17,"div",6)(18,"div",14)(19,"div",15)(20,"strong"),e._uU(21,"Select Date"),e.qZA(),e.TgZ(22,"mat-form-field",16)(23,"mat-date-range-input",17)(24,"input",18),e.NdJ("dateChange",function(){return n.getSelectedProductDayBookDates()}),e.qZA(),e.TgZ(25,"span",19)(26,"span",20),e._uU(27,"to"),e.qZA()(),e.TgZ(28,"input",21),e.NdJ("dateChange",function(){return n.getSelectedProductDayBookDates()}),e.qZA()(),e._UZ(29,"mat-datepicker-toggle",22)(30,"mat-date-range-picker",null,23),e.qZA()()(),e.TgZ(32,"div",24)(33,"div",25)(34,"label"),e._uU(35,"User Name"),e.qZA(),e._UZ(36,"input",26),e.TgZ(37,"mat-autocomplete",null,27),e.YNc(39,Y,2,1,"ng-container",28),e.ALo(40,"async"),e.qZA()()()()()(),e.TgZ(41,"div",29)(42,"ul")(43,"li")(44,"a",30),e.NdJ("click",function(){return n.generatePDFAgain()}),e._UZ(45,"img",31),e.qZA()(),e.TgZ(46,"li")(47,"a",32),e.NdJ("click",function(){return n.exportToExcel()}),e._UZ(48,"img",33),e.qZA()(),e.TgZ(49,"li")(50,"a",34),e.NdJ("click",function(){return n.printTable()}),e._UZ(51,"img",35),e.qZA()()()()(),e.TgZ(52,"div",36)(53,"table",37)(54,"thead")(55,"tr")(56,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(57,"#"),e._UZ(58,"i",39),e.qZA(),e.TgZ(59,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(60,"Date "),e._UZ(61,"i",39),e.qZA(),e.TgZ(62,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(63,"Particulars "),e._UZ(64,"i",39),e.qZA(),e.TgZ(65,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(66," Voucher Type "),e._UZ(67,"i",39),e.qZA(),e.TgZ(68,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(69," Voucher No. "),e._UZ(70,"i",39),e.qZA(),e.TgZ(71,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(72," Description "),e._UZ(73,"i",39),e.qZA(),e.TgZ(74,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(75,"Debit"),e._UZ(76,"i",39),e.qZA(),e.TgZ(77,"th",38),e.NdJ("click",function(){return n.sort("id")}),e._uU(78,"Credit"),e._UZ(79,"i",39),e.qZA()()(),e.YNc(80,Q,4,11,"tbody",40),e.YNc(81,z,5,0,"tbody",40),e.qZA(),e.TgZ(82,"div",6)(83,"div",41)(84,"div",42),e._uU(85," Show per page "),e.TgZ(86,"select",43,44),e.NdJ("ngModelChange",function(l){return n.itemsPerPage=l})("change",function(){e.CHM(a);const l=e.MAs(87);return e.KtG(n.changePg(l.value))}),e.TgZ(88,"option",45),e._uU(89,"10"),e.qZA(),e.TgZ(90,"option",46),e._uU(91,"20"),e.qZA(),e.TgZ(92,"option",47),e._uU(93,"30"),e.qZA(),e.TgZ(94,"option",48),e._uU(95,"50"),e.qZA(),e.TgZ(96,"option",49),e._uU(97,"100"),e.qZA(),e.TgZ(98,"option",50),e._uU(99,"All"),e.qZA()()()(),e.TgZ(100,"div",51)(101,"div",52)(102,"pagination-controls",53),e.NdJ("pageChange",function(l){return n.p=l}),e.qZA(),e.TgZ(103,"div",54),e._uU(104),e.qZA()()()()()()()()()}if(2&t){const a=e.MAs(31),o=e.MAs(38);e.xp6(11),e.Q6J("ngIf",n.isAdmin),e.xp6(5),e.Q6J("formGroup",n.productDayBookform),e.xp6(7),e.Q6J("formGroup",n.productDayBookform)("rangePicker",a),e.xp6(6),e.Q6J("for",a),e.xp6(7),e.Q6J("formControl",n.userControl)("matAutocomplete",o),e.xp6(3),e.Q6J("ngForOf",e.lcZ(40,14,n.filteredusers)),e.xp6(41),e.Q6J("ngIf",(null==n.productDayBookList?null:n.productDayBookList.length)>=0),e.xp6(1),e.Q6J("ngIf",0==(null==n.productDayBookList?null:n.productDayBookList.length)),e.xp6(5),e.Q6J("ngModel",n.itemsPerPage),e.xp6(18),e.lnq("Showing ",n.itemsPerPage," to ",null==n.productDayBookList?null:n.productDayBookList.length," of ",n.p," entries")}},dependencies:[u.sg,u.O5,d._Y,d.YN,d.Kr,d.Fj,d.EJ,d.JJ,d.JL,d.On,d.oH,d.sg,d.u,v.XC,v.ZL,x.ey,f.KE,f.R9,Z.Nt,m.nW,m.wx,m.zY,m.By,m._g,T.LS,u.Ov,u.uU,T._s,N.T],styles:[".example-form-field[_ngcontent-%COMP%]{margin:0 8px 5px 0}.mat-form-field[_ngcontent-%COMP%]{display:inline-block;position:relative;text-align:left}.mat-form-field[_ngcontent-%COMP%]{width:65%;padding-left:8%;padding-top:1%;font-size:inherit;font-weight:400;line-height:1.125;font-family:Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-wrapper[_ngcontent-%COMP%]{padding-bottom:1.25em}.mat-form-field-wrapper[_ngcontent-%COMP%]{position:relative}.mat-form-field-flex[_ngcontent-%COMP%]{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-infix[_ngcontent-%COMP%]{padding:.5em 0;border-top:.84375em solid rgba(0,0,0,0)}.mat-form-field-infix[_ngcontent-%COMP%]{display:block;position:relative;flex:auto;min-width:0;width:180px}.mat-form-field-type-mat-date-range-input[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{width:200px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-infix[_ngcontent-%COMP%]{padding:.4375em 0}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}.mat-form-field-label-wrapper[_ngcontent-%COMP%]{top:-.84375em;padding-top:.84375em}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{height:1px}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{background-color:#0000006b}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-underline[_ngcontent-%COMP%]{bottom:1.25em}.mat-form-field-underline[_ngcontent-%COMP%]{position:absolute;width:100%;pointer-events:none;transform:scale3d(1,1.0001,1)}.mat-form-field-appearance-legacy[_ngcontent-%COMP%]   .mat-form-field-ripple[_ngcontent-%COMP%]{top:0;height:2px;overflow:hidden}.mat-form-field-ripple[_ngcontent-%COMP%]{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(.5);opacity:0;transition:background-color .3s cubic-bezier(.55,0,.55,.2)}.mat-form-field-ripple[_ngcontent-%COMP%]{background-color:#000000de}.mat-form-field-prefix[_ngcontent-%COMP%], .mat-form-field-suffix[_ngcontent-%COMP%]{font-size:x-large;white-space:nowrap;flex:none;position:relative}select[_ngcontent-%COMP%], .input[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:100%;font-size:14px;font-weight:500;color:#637381;padding:10px 15px;border-radius:5px}.button[_ngcontent-%COMP%]{border:1px solid rgba(145,158,171,.32);height:40px;width:781%;font-size:14px;font-weight:500;color:#637381;display:flex;padding:10px 15px;border-radius:5px;justify-content:space-between;align-items:center;background:white}"]}),r})()}];let R=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({imports:[y.Bz.forChild($),y.Bz]}),r})();var V=i(3056),j=i(87078),L=i(86323),_=i(92642),K=i(95113),X=i(64155),W=i(6205),ee=i(8468);const te={User:_.n5m,UserCheck:_.uS3,FileText:_.acj,File:_.$BE};let ne=(()=>{class r{}return r.\u0275fac=function(t){return new(t||r)},r.\u0275mod=e.oAB({type:r}),r.\u0275inj=e.cJS({providers:[u.uU],imports:[u.ez,R,d.u5,d.UX,v.Bb,f.lN,Z.c,V.ZQ,j.T,m.FA,f.lN,x.XK,K.LD,X.vQ,ee.I,W.X,L.p.pick(te),L.p]}),r})()}}]);