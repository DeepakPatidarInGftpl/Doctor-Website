"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[6330],{16330:(g,l,a)=>{a.r(l),a.d(l,{FormWizardModule:()=>c});var d=a(36895),o=a(88996),t=a(94650);const p=[{path:"",component:(()=>{class i{constructor(){}ngOnInit(){}ngAfterViewInit(){this.loadformwizardbootstrap("assets/plugins/twitter-bootstrap-wizard/jquery.bootstrap.wizard.min.js"),this.loadformwizardprettify("assets/plugins/twitter-bootstrap-wizard/prettify.js"),this.loadformwizard("assets/plugins/twitter-bootstrap-wizard/form-wizard.js")}loadformwizardbootstrap(n){var e=document.createElement("script");e.src=n,e.async=!1,document.body.appendChild(e)}loadformwizardprettify(n){var e=document.createElement("script");e.src=n,e.async=!1,document.body.appendChild(e)}loadformwizard(n){var e=document.createElement("script");e.src=n,e.async=!1,document.body.appendChild(e)}loadformwizardcss(n){var e=document.createElement("link");e.href=n,e.rel="stylesheet",document.head.appendChild(e)}}return i.\u0275fac=function(n){return new(n||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-form-wizard"]],decls:311,vars:0,consts:[[1,"cardhead"],[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","//dashboard"],[1,"breadcrumb-item","active"],[1,"col-lg-12"],[1,"card"],[1,"card-header"],[1,"card-title","mb-0"],[1,"card-body"],["id","basic-pills-wizard",1,"twitter-bs-wizard"],[1,"twitter-bs-wizard-nav"],[1,"nav-item"],["href","#seller-details","data-toggle","tab",1,"nav-link"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Seller Details",1,"step-icon"],[1,"far","fa-user"],["href","#company-document","data-toggle","tab",1,"nav-link"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Company Document",1,"step-icon"],[1,"fas","fa-map-pin"],["href","#bank-detail","data-toggle","tab",1,"nav-link"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Bank Details",1,"step-icon"],[1,"fas","fa-credit-card"],[1,"tab-content","twitter-bs-wizard-tab-content"],["id","seller-details",1,"tab-pane"],[1,"mb-4","mt-3"],[1,"col-lg-6"],[1,"mb-3"],["for","basicpill-firstname-input",1,"form-label"],["type","text","id","basicpill-firstname-input",1,"form-control"],["for","basicpill-lastname-input",1,"form-label"],["type","text","id","basicpill-lastname-input",1,"form-control"],["for","basicpill-phoneno-input",1,"form-label"],["type","text","id","basicpill-phoneno-input",1,"form-control"],["for","basicpill-email-input",1,"form-label"],["type","email","id","basicpill-email-input",1,"form-control"],[1,"pager","wizard","twitter-bs-wizard-pager-link"],[1,"next"],["href","javascript: void(0);","onclick","nextTab()",1,"btn","btn-primary"],[1,"bx","bx-chevron-right","ms-1"],["id","company-document",1,"tab-pane"],["for","basicpill-pancard-input",1,"form-label"],["type","text","id","basicpill-pancard-input",1,"form-control"],["for","basicpill-vatno-input",1,"form-label"],["type","text","id","basicpill-vatno-input",1,"form-control"],["for","basicpill-cstno-input",1,"form-label"],["type","text","id","basicpill-cstno-input",1,"form-control"],["for","basicpill-servicetax-input",1,"form-label"],["type","text","id","basicpill-servicetax-input",1,"form-control"],[1,"previous"],[1,"bx","bx-chevron-left","me-1"],["id","bank-detail",1,"tab-pane"],["for","basicpill-namecard-input",1,"form-label"],["type","text","id","basicpill-namecard-input",1,"form-control"],[1,"form-label"],[1,"form-select"],["selected",""],["value","AE"],["value","VI"],["value","MC"],["value","DI"],["for","basicpill-cardno-input",1,"form-label"],["type","text","id","basicpill-cardno-input",1,"form-control"],["for","basicpill-card-verification-input",1,"form-label"],["type","text","id","basicpill-card-verification-input",1,"form-control"],["for","basicpill-expiration-input",1,"form-label"],["type","text","id","basicpill-expiration-input",1,"form-control"],[1,"float-end"],["href","javascript: void(0);","data-bs-toggle","modal","data-bs-target",".confirmModal",1,"btn","btn-primary"],["id","progrss-wizard",1,"twitter-bs-wizard"],[1,"twitter-bs-wizard-nav","nav","nav-pills","nav-justified"],["href","#progress-seller-details","data-toggle","tab",1,"nav-link"],["data-bs-toggle","tooltip","data-bs-placement","top","title","User Details",1,"step-icon"],["href","#progress-company-document","data-toggle","tab",1,"nav-link"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Address Detail",1,"step-icon"],["href","#progress-bank-detail","data-toggle","tab",1,"nav-link"],["data-bs-toggle","tooltip","data-bs-placement","top","title","Payment Details",1,"step-icon"],["id","bar",1,"progress","mt-4"],[1,"progress-bar","bg-success","progress-bar-striped","progress-bar-animated"],["id","progress-seller-details",1,"tab-pane"],["for","progresspill-firstname-input"],["type","text","id","progresspill-firstname-input",1,"form-control"],["for","progresspill-lastname-input"],["type","text","id","progresspill-lastname-input",1,"form-control"],["for","progresspill-phoneno-input"],["type","text","id","progresspill-phoneno-input",1,"form-control"],["for","progresspill-email-input"],["type","email","id","progresspill-email-input",1,"form-control"],["id","progress-company-document",1,"tab-pane"],["for","progresspill-pancard-input",1,"form-label"],["type","text","id","progresspill-pancard-input",1,"form-control"],["for","progresspill-vatno-input",1,"form-label"],["type","text","id","progresspill-vatno-input",1,"form-control"],["for","progresspill-cstno-input",1,"form-label"],["type","text","id","progresspill-cstno-input",1,"form-control"],["for","progresspill-servicetax-input",1,"form-label"],["type","text","id","progresspill-servicetax-input",1,"form-control"],["for","progresspill-companyuin-input",1,"form-label"],["type","text","id","progresspill-companyuin-input",1,"form-control"],["for","progresspill-declaration-input",1,"form-label"],["type","text","id","progresspill-declaration-input",1,"form-control"],["id","progress-bank-detail",1,"tab-pane"],["for","progresspill-namecard-input",1,"form-label"],["type","text","id","progresspill-namecard-input",1,"form-control"],["for","progresspill-cardno-input",1,"form-label"],["type","text","id","progresspill-cardno-input",1,"form-control"],["for","progresspill-card-verification-input",1,"form-label"],["type","text","id","progresspill-card-verification-input",1,"form-control"],["for","progresspill-expiration-input",1,"form-label"],["type","text","id","progresspill-expiration-input",1,"form-control"]],template:function(n,e){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),t._uU(6,"Form Wizard"),t.qZA(),t.TgZ(7,"ul",6)(8,"li",7)(9,"a",8),t._uU(10,"Dashboard"),t.qZA()(),t.TgZ(11,"li",9),t._uU(12,"Form Wizard"),t.qZA()()()()(),t.TgZ(13,"div",3)(14,"div",10)(15,"div",11)(16,"div",12)(17,"h4",13),t._uU(18,"Basic Wizard"),t.qZA()(),t.TgZ(19,"div",14)(20,"div",15)(21,"ul",16)(22,"li",17)(23,"a",18)(24,"div",19),t._UZ(25,"i",20),t.qZA()()(),t.TgZ(26,"li",17)(27,"a",21)(28,"div",22),t._UZ(29,"i",23),t.qZA()()(),t.TgZ(30,"li",17)(31,"a",24)(32,"div",25),t._UZ(33,"i",26),t.qZA()()()(),t.TgZ(34,"div",27)(35,"div",28)(36,"div",29)(37,"h5"),t._uU(38,"Enter Your Personal Details"),t.qZA()(),t.TgZ(39,"form")(40,"div",3)(41,"div",30)(42,"div",31)(43,"label",32),t._uU(44,"First name"),t.qZA(),t._UZ(45,"input",33),t.qZA()(),t.TgZ(46,"div",30)(47,"div",31)(48,"label",34),t._uU(49,"Last name"),t.qZA(),t._UZ(50,"input",35),t.qZA()()(),t.TgZ(51,"div",3)(52,"div",30)(53,"div",31)(54,"label",36),t._uU(55,"Phone"),t.qZA(),t._UZ(56,"input",37),t.qZA()(),t.TgZ(57,"div",30)(58,"div",31)(59,"label",38),t._uU(60,"Email"),t.qZA(),t._UZ(61,"input",39),t.qZA()()()(),t.TgZ(62,"ul",40)(63,"li",41)(64,"a",42),t._uU(65,"Next "),t._UZ(66,"i",43),t.qZA()()()(),t.TgZ(67,"div",44)(68,"div")(69,"div",29)(70,"h5"),t._uU(71,"Enter Your Address"),t.qZA()(),t.TgZ(72,"form")(73,"div",3)(74,"div",30)(75,"div",31)(76,"label",45),t._uU(77,"Address 1"),t.qZA(),t._UZ(78,"input",46),t.qZA()(),t.TgZ(79,"div",30)(80,"div",31)(81,"label",47),t._uU(82,"Address 2"),t.qZA(),t._UZ(83,"input",48),t.qZA()()(),t.TgZ(84,"div",3)(85,"div",30)(86,"div",31)(87,"label",49),t._uU(88,"Landmark"),t.qZA(),t._UZ(89,"input",50),t.qZA()(),t.TgZ(90,"div",30)(91,"div",31)(92,"label",51),t._uU(93,"Town"),t.qZA(),t._UZ(94,"input",52),t.qZA()()()(),t.TgZ(95,"ul",40)(96,"li",53)(97,"a",42),t._UZ(98,"i",54),t._uU(99," Previous"),t.qZA()(),t.TgZ(100,"li",41)(101,"a",42),t._uU(102,"Next "),t._UZ(103,"i",43),t.qZA()()()()(),t.TgZ(104,"div",55)(105,"div")(106,"div",29)(107,"h5"),t._uU(108,"Payment Details"),t.qZA()(),t.TgZ(109,"form")(110,"div",3)(111,"div",30)(112,"div",31)(113,"label",56),t._uU(114,"Name on Card"),t.qZA(),t._UZ(115,"input",57),t.qZA()(),t.TgZ(116,"div",30)(117,"div",31)(118,"label",58),t._uU(119,"Credit Card Type"),t.qZA(),t.TgZ(120,"select",59)(121,"option",60),t._uU(122,"Select Card Type"),t.qZA(),t.TgZ(123,"option",61),t._uU(124,"American Express"),t.qZA(),t.TgZ(125,"option",62),t._uU(126,"Visa"),t.qZA(),t.TgZ(127,"option",63),t._uU(128,"MasterCard"),t.qZA(),t.TgZ(129,"option",64),t._uU(130,"Discover"),t.qZA()()()()(),t.TgZ(131,"div",3)(132,"div",30)(133,"div",31)(134,"label",65),t._uU(135,"Credit Card Number"),t.qZA(),t._UZ(136,"input",66),t.qZA()(),t.TgZ(137,"div",30)(138,"div",31)(139,"label",67),t._uU(140,"Card Verification Number"),t.qZA(),t._UZ(141,"input",68),t.qZA()()(),t.TgZ(142,"div",3)(143,"div",30)(144,"div",31)(145,"label",69),t._uU(146,"Expiration Date"),t.qZA(),t._UZ(147,"input",70),t.qZA()()()(),t.TgZ(148,"ul",40)(149,"li",53)(150,"a",42),t._UZ(151,"i",54),t._uU(152," Previous"),t.qZA()(),t.TgZ(153,"li",71)(154,"a",72),t._uU(155,"Save Changes"),t.qZA()()()()()()()()()(),t.TgZ(156,"div",10)(157,"div",11)(158,"div",12)(159,"h4",13),t._uU(160,"Wizard with Progressbar"),t.qZA()(),t.TgZ(161,"div",14)(162,"div",73)(163,"ul",74)(164,"li",17)(165,"a",75)(166,"div",76),t._UZ(167,"i",20),t.qZA()()(),t.TgZ(168,"li",17)(169,"a",77)(170,"div",78),t._UZ(171,"i",23),t.qZA()()(),t.TgZ(172,"li",17)(173,"a",79)(174,"div",80),t._UZ(175,"i",26),t.qZA()()()(),t.TgZ(176,"div",81),t._UZ(177,"div",82),t.qZA(),t.TgZ(178,"div",27)(179,"div",83)(180,"div",29)(181,"h5"),t._uU(182,"User Details"),t.qZA()(),t.TgZ(183,"form")(184,"div",3)(185,"div",30)(186,"div",31)(187,"label",84),t._uU(188,"First name"),t.qZA(),t._UZ(189,"input",85),t.qZA()(),t.TgZ(190,"div",30)(191,"div",31)(192,"label",86),t._uU(193,"Last name"),t.qZA(),t._UZ(194,"input",87),t.qZA()()(),t.TgZ(195,"div",3)(196,"div",30)(197,"div",31)(198,"label",88),t._uU(199,"Phone"),t.qZA(),t._UZ(200,"input",89),t.qZA()(),t.TgZ(201,"div",30)(202,"div",31)(203,"label",90),t._uU(204,"Email"),t.qZA(),t._UZ(205,"input",91),t.qZA()()()(),t.TgZ(206,"ul",40)(207,"li",41)(208,"a",42),t._uU(209,"Next "),t._UZ(210,"i",43),t.qZA()()()(),t.TgZ(211,"div",92)(212,"div")(213,"div",29)(214,"h5"),t._uU(215,"Location Details"),t.qZA()(),t.TgZ(216,"form")(217,"div",3)(218,"div",30)(219,"div",31)(220,"label",93),t._uU(221,"Address Line 1"),t.qZA(),t._UZ(222,"input",94),t.qZA()(),t.TgZ(223,"div",30)(224,"div",31)(225,"label",95),t._uU(226,"Address Line 2"),t.qZA(),t._UZ(227,"input",96),t.qZA()()(),t.TgZ(228,"div",3)(229,"div",30)(230,"div",31)(231,"label",97),t._uU(232,"Landmark"),t.qZA(),t._UZ(233,"input",98),t.qZA()(),t.TgZ(234,"div",30)(235,"div",31)(236,"label",99),t._uU(237,"City"),t.qZA(),t._UZ(238,"input",100),t.qZA()()(),t.TgZ(239,"div",3)(240,"div",30)(241,"div",31)(242,"label",101),t._uU(243,"State"),t.qZA(),t._UZ(244,"input",102),t.qZA()(),t.TgZ(245,"div",30)(246,"div",31)(247,"label",103),t._uU(248,"Country"),t.qZA(),t._UZ(249,"input",104),t.qZA()()()(),t.TgZ(250,"ul",40)(251,"li",53)(252,"a",42),t._UZ(253,"i",54),t._uU(254," Previous"),t.qZA()(),t.TgZ(255,"li",41)(256,"a",42),t._uU(257,"Next "),t._UZ(258,"i",43),t.qZA()()()()(),t.TgZ(259,"div",105)(260,"div")(261,"div",29)(262,"h5"),t._uU(263,"Payment Details"),t.qZA()(),t.TgZ(264,"form")(265,"div",3)(266,"div",30)(267,"div",31)(268,"label",106),t._uU(269,"Name on Card"),t.qZA(),t._UZ(270,"input",107),t.qZA()(),t.TgZ(271,"div",30)(272,"div",31)(273,"label",58),t._uU(274,"Credit Card Type"),t.qZA(),t.TgZ(275,"select",59)(276,"option",60),t._uU(277,"Select Card Type"),t.qZA(),t.TgZ(278,"option",61),t._uU(279,"American Express"),t.qZA(),t.TgZ(280,"option",62),t._uU(281,"Visa"),t.qZA(),t.TgZ(282,"option",63),t._uU(283,"MasterCard"),t.qZA(),t.TgZ(284,"option",64),t._uU(285,"Discover"),t.qZA()()()()(),t.TgZ(286,"div",3)(287,"div",30)(288,"div",31)(289,"label",108),t._uU(290,"Credit Card Number"),t.qZA(),t._UZ(291,"input",109),t.qZA()(),t.TgZ(292,"div",30)(293,"div",31)(294,"label",110),t._uU(295,"Card Verification Number"),t.qZA(),t._UZ(296,"input",111),t.qZA()()(),t.TgZ(297,"div",3)(298,"div",30)(299,"div",31)(300,"label",112),t._uU(301,"Expiration Date"),t.qZA(),t._UZ(302,"input",113),t.qZA()()()(),t.TgZ(303,"ul",40)(304,"li",53)(305,"a",42),t._UZ(306,"i",54),t._uU(307," Previous"),t.qZA()(),t.TgZ(308,"li",71)(309,"a",72),t._uU(310,"Save Changes"),t.qZA()()()()()()()()()()()()())},dependencies:[o.yS],styles:['.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%]{display:inline-block;width:56px;height:56px;line-height:54px;border:1px solid rgba(81,86,190,.2);color:#5156be;text-align:center;border-radius:50%;position:relative;z-index:1;font-size:20px}@media (max-width: 575.98px){.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%]{width:40px;height:40px;line-height:38px}}.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%]{margin-left:6px}.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]:last-child   .nav-link[_ngcontent-%COMP%]:after{display:none}.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.done[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%]{background-color:#5156be;color:#fff}.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.done[_ngcontent-%COMP%]   .uil[_ngcontent-%COMP%]:before{content:"\\e9c3"}.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{font-size:14px;position:relative}@media (max-width: 575.98px){.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding:.5rem}}.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:after{content:"";position:absolute;width:75%;height:2px;background-color:#e9e9ef;left:62%;top:50%;transform:translateY(-50%)}@media (max-width: 575.98px){.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:after{display:none}}.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{color:#495057;background-color:transparent}.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%]{background-color:#5156be33;color:#5156be;border-color:#5156be33}.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-pager-link[_ngcontent-%COMP%]{padding-top:24px;padding-left:0;list-style:none;margin-bottom:0}.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-pager-link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block}.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-pager-link[_ngcontent-%COMP%]   li.next[_ngcontent-%COMP%]{float:right}.twitter-bs-wizard-tab-content[_ngcontent-%COMP%]{padding-top:24px;min-height:262px}body[data-layout-mode=dark][_ngcontent-%COMP%]   .twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:after{background-color:#3b403d}@media (max-width: 767.98px){.twitter-bs-wizard[_ngcontent-%COMP%]   .twitter-bs-wizard-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:after{content:none}}']}),i})()}];let s=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[o.Bz.forChild(p),o.Bz]}),i})(),c=(()=>{class i{}return i.\u0275fac=function(n){return new(n||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[d.ez,s]}),i})()}}]);