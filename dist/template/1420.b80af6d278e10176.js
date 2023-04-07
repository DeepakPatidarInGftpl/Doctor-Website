"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1420],{1420:(Z,c,l)=>{l.r(c),l.d(c,{FormSelect2Module:()=>g});var u=l(6895),r=l(1728),e=l(1571),s=l(927);function d(t,n){if(1&t&&(e.TgZ(0,"option",33),e._uU(1),e.qZA()),2&t){const o=n.$implicit;e.s9C("value",o.id),e.xp6(1),e.Oqu(o.title)}}const p=[{path:"",component:(()=>{class t{constructor(o){this.coreService=o}ngOnInit(){this.coreService.getSubcategory().subscribe(o=>{console.log(o),this.subcategoryList=o})}ngAfterViewInit(){this.LoadScript("assets/plugins/select2/js/select2.min.js"),this.LoadScript1("assets/plugins/select2/js/custom-select.js")}LoadScript(o){var i=document.createElement("script");i.src=o,i.async=!1,document.body.appendChild(i)}LoadScript1(o){var i=document.createElement("script");i.src=o,i.async=!1,document.body.appendChild(i)}LoadScript2(o){var i=document.createElement("script");i.src=o,i.async=!1,document.body.appendChild(i)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(s.p))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-form-select2"]],decls:146,vars:1,consts:[[1,"cardhead"],[1,"container-fluid"],[1,"page-header"],[1,"row"],[1,"col-sm-12"],[1,"page-title"],[1,"breadcrumb"],[1,"breadcrumb-item"],["routerLink","//dashboard"],[1,"breadcrumb-item","active"],[1,"col-md-6"],[1,"card"],[1,"card-header"],[1,"card-title"],[1,"card-body"],[1,"col-md-12"],[1,"js-example-basic-single","select2","form-select"],["selected","selected"],[3,"value",4,"ngFor","ngForOf"],[1,"form-control","nested"],["label","Group1"],["label","Group2"],["label","Group3"],[1,"placeholder","js-states","form-control"],["value","one"],["value","two"],["value","three"],["value","four"],["value","five"],["multiple","multiple",1,"form-control","tagging"],[1,"form-control","form-small","select"],[1,"form-control","disabled-results"],["value","two","disabled","disabled"],[3,"value"]],template:function(o,i){1&o&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"h3",5),e._uU(6,"Form Select2"),e.qZA(),e.TgZ(7,"ul",6)(8,"li",7)(9,"a",8),e._uU(10,"Dashboard"),e.qZA()(),e.TgZ(11,"li",9),e._uU(12,"Form Select2"),e.qZA()()()()(),e.TgZ(13,"div",3)(14,"div",10)(15,"div",11)(16,"div",12)(17,"h5",13),e._uU(18,"Basic"),e.qZA()(),e.TgZ(19,"div",14)(20,"div",3)(21,"div",15)(22,"p"),e._uU(23,"Use select2() function on select element to convert it to Select 2."),e.qZA(),e.TgZ(24,"select",16)(25,"option",17),e._uU(26,"orange"),e.qZA(),e.YNc(27,d,2,2,"option",18),e.qZA()()()()(),e.TgZ(28,"div",11)(29,"div",12)(30,"h5",13),e._uU(31,"Nested"),e.qZA()(),e.TgZ(32,"div",14)(33,"div",3)(34,"div",15)(35,"p"),e._uU(36,"Add options inside the optgroups to for group options."),e.qZA(),e.TgZ(37,"select",19)(38,"optgroup",20)(39,"option",17),e._uU(40,"orange"),e.qZA(),e.TgZ(41,"option"),e._uU(42,"white"),e.qZA(),e.TgZ(43,"option"),e._uU(44,"purple"),e.qZA()(),e.TgZ(45,"optgroup",21)(46,"option"),e._uU(47,"purple"),e.qZA(),e.TgZ(48,"option"),e._uU(49,"orange"),e.qZA(),e.TgZ(50,"option"),e._uU(51,"white"),e.qZA()(),e.TgZ(52,"optgroup",22)(53,"option"),e._uU(54,"white"),e.qZA(),e.TgZ(55,"option"),e._uU(56,"purple"),e.qZA(),e.TgZ(57,"option"),e._uU(58,"orange"),e.qZA()()()()()()(),e.TgZ(59,"div",11)(60,"div",12)(61,"h5",13),e._uU(62,"Placeholder"),e.qZA()(),e.TgZ(63,"div",14)(64,"div",3)(65,"div",15)(66,"p"),e._uU(67,"Apply Placeholder by setting option placeholder option."),e.qZA(),e.TgZ(68,"select",23)(69,"option"),e._uU(70,"Choose..."),e.qZA(),e.TgZ(71,"option",24),e._uU(72,"First"),e.qZA(),e.TgZ(73,"option",25),e._uU(74,"Second"),e.qZA(),e.TgZ(75,"option",26),e._uU(76,"Third"),e.qZA(),e.TgZ(77,"option",27),e._uU(78,"Fourth"),e.qZA(),e.TgZ(79,"option",28),e._uU(80,"Fifth"),e.qZA()()()()()(),e.TgZ(81,"div",11)(82,"div",12)(83,"h5",13),e._uU(84,"Tagging with multi-value select boxes"),e.qZA()(),e.TgZ(85,"div",14)(86,"div",3)(87,"div",15)(88,"p"),e._uU(89,"Set tags: true to convert select 2 in Tag mode."),e.qZA(),e.TgZ(90,"select",29)(91,"option"),e._uU(92,"orange"),e.qZA(),e.TgZ(93,"option"),e._uU(94,"white"),e.qZA(),e.TgZ(95,"option"),e._uU(96,"purple"),e.qZA()()()()()()(),e.TgZ(97,"div",10)(98,"div",11)(99,"div",12)(100,"h5",13),e._uU(101,"Small Select2"),e.qZA()(),e.TgZ(102,"div",14)(103,"div",3)(104,"div",15)(105,"p"),e._uU(106,"Use data('select2') function to get container of select2."),e.qZA(),e.TgZ(107,"select",30)(108,"option",17),e._uU(109,"orange"),e.qZA(),e.TgZ(110,"option"),e._uU(111,"white"),e.qZA(),e.TgZ(112,"option"),e._uU(113,"purple"),e.qZA()()()()()(),e.TgZ(114,"div",11)(115,"div",12)(116,"h5",13),e._uU(117,"Disabling options"),e.qZA()(),e.TgZ(118,"div",14)(119,"div",3)(120,"div",15)(121,"p"),e._uU(122,"Disable Select using disabled attribute."),e.qZA(),e.TgZ(123,"select",31)(124,"option",24),e._uU(125,"First"),e.qZA(),e.TgZ(126,"option",32),e._uU(127,"Second"),e.qZA(),e.TgZ(128,"option",26),e._uU(129,"Third"),e.qZA()()()()()(),e.TgZ(130,"div",11)(131,"div",12)(132,"h5",13),e._uU(133,"Limiting the number of Tagging"),e.qZA()(),e.TgZ(134,"div",14)(135,"div",3)(136,"div",15)(137,"p"),e._uU(138,"Set maximumSelectionLength: 2 with tags: true to limit selectin in Tag mode."),e.qZA(),e.TgZ(139,"select",29)(140,"option"),e._uU(141,"orange"),e.qZA(),e.TgZ(142,"option"),e._uU(143,"white"),e.qZA(),e.TgZ(144,"option"),e._uU(145,"purple"),e.qZA()()()()()()()()()()),2&o&&(e.xp6(27),e.Q6J("ngForOf",i.subcategoryList))},dependencies:[u.sg,r.yS]}),t})()}];let a=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.Bz.forChild(p),r.Bz]}),t})(),g=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[u.ez,a]}),t})()}}]);