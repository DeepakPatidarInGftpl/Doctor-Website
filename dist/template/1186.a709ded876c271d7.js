"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[1186],{1186:(A,i,l)=>{l.r(i),l.d(i,{AdddealOfTheDayModule:()=>g});var m=l(6895),c=l(8996),o=l(4650),h=l(2559),a=l(4006),r=l(3056);const p=[{path:"",component:(()=>{class e{constructor(t){this.websiteService=t,this.dropdownList=[],this.selectedItems=[],this.dropdownSettings={}}ngOnInit(){this.websiteService.getTrendingProducts().subscribe(t=>{console.log(t),this.dropdownList=t,this.selectedItems=this.dropdownList.map(n=>({id:n.id,discount:n.discount}))}),this.dropdownSettings={singleSelection:!1,idField:"id",textField:"discount",selectAllText:"Select All",unSelectAllText:"UnSelect All",itemsShowLimit:3,allowSearchFilter:!0}}onItemSelect(t){console.log(t)}onSelectAll(t){console.log(t)}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(h.K))},e.\u0275cmp=o.Xpm({type:e,selectors:[["app-adddeal-of-the-day"]],decls:1,vars:4,consts:[[3,"placeholder","settings","data","ngModel","ngModelChange","onSelect","onSelectAll"]],template:function(t,n){1&t&&(o.TgZ(0,"ng-multiselect-dropdown",0),o.NdJ("ngModelChange",function(s){return n.selectedItems=s})("onSelect",function(s){return n.onItemSelect(s)})("onSelectAll",function(s){return n.onSelectAll(s)}),o.qZA()),2&t&&o.Q6J("placeholder","custom placeholder")("settings",n.dropdownSettings)("data",n.dropdownList)("ngModel",n.selectedItems)},dependencies:[a.JJ,a.On,r.OP]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[c.Bz.forChild(p),c.Bz]}),e})(),g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[m.ez,f,a.u5,a.UX,r.ZQ.forRoot()]}),e})()}}]);