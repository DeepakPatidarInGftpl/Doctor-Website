"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[16725],{16725:(M,d,r)=>{r.r(d),r.d(d,{NotificationsModule:()=>P});var f=r(36895),g=r(4392),t=r(94650),m=r(1954);function h(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"input",28),t.NdJ("change",function(){t.CHM(i);const a=t.oxw(),o=a.$implicit,c=a.index,l=t.oxw();return t.KtG(l.chackboxChange(null==o?null:o.id,c))}),t.qZA()}}function _(e,s){1&e&&t._UZ(0,"div",29)}function N(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"div",17)(1,"div",18),t.YNc(2,h,1,0,"input",19),t.TgZ(3,"div",20),t.NdJ("click",function(){const o=t.CHM(i).$implicit,c=t.oxw();return t.KtG(c.notificationRead(null==o?null:o.id,null==o?null:o.is_view))}),t.TgZ(4,"div",21)(5,"div",22),t._UZ(6,"img",23),t.TgZ(7,"div")(8,"h5",24),t._uU(9),t.qZA(),t.TgZ(10,"p",25),t._uU(11),t.qZA(),t.TgZ(12,"p",26),t._uU(13),t.qZA()()(),t.YNc(14,_,1,0,"div",27),t.qZA()()()()}if(2&e){const i=s.$implicit,n=t.oxw();t.xp6(2),t.Q6J("ngIf",!(null!=i&&i.is_view)),t.xp6(1),t.Q6J("ngClass",null!=i&&i.is_view&&!n.isAllNotificationView?"notification-spacing-wrapper":""),t.xp6(1),t.Q6J("ngClass",null!=i&&i.is_view?"":"unread-card-wrapper"),t.xp6(5),t.Oqu(null==i?null:i.title),t.xp6(2),t.Oqu(null==i?null:i.body),t.xp6(2),t.Oqu(null==i?null:i.minutesAgo),t.xp6(1),t.Q6J("ngIf",!(null!=i&&i.is_view))}}const C=function(e,s){return{"active-page":e,disabled:s}};function v(e,s){if(1&e){const i=t.EpF();t.TgZ(0,"li",30),t.NdJ("click",function(){const o=t.CHM(i).$implicit,c=t.oxw();return t.KtG("..."!==o&&c.pageChange(o))}),t.TgZ(1,"a",12),t._uU(2),t.qZA()()}if(2&e){const i=s.$implicit,n=t.oxw();t.Q6J("ngClass",t.WLB(2,C,i===n.page,"..."===i)),t.xp6(2),t.Oqu(i)}}const x=[{path:"",component:(()=>{class e{constructor(i){this.notificationService=i,this.totalNotificationCount=0,this.page=1,this.itemsPerPage=10,this.notificationIds=[],this.selectedNotificationIds=[],this.isAllNotificationView=!1}ngOnInit(){this.getNotificationList(this.page)}calculateMinutesAgo(i){const n=new Date(i),o=(new Date).getTime()-n.getTime(),c=Math.floor(o/6e4);return c<60?`${c} minutes ago`:n.toLocaleDateString("en-US",{day:"numeric",month:"short",hour:"numeric",minute:"numeric",hour12:!0})}getNotificationList(i){this.notificationService.getNotificationPanel(i).subscribe(n=>{this.itemsPerPage=n?.notifications?.length,this.totalNotificationCount=n?.notifications_count,this.notificationList=n.notifications.map(o=>({...o,minutesAgo:this.calculateMinutesAgo(o?.schedule_time)}));let a=[];this.notificationList.map(o=>{a.push(o?.is_view)}),this.isAllNotificationView=a.every(o=>!0===o)})}chackboxChange(i,n){this.selectedNotificationIds?.includes(i)?this.selectedNotificationIds=this.selectedNotificationIds.filter(a=>a!==i):this.selectedNotificationIds.push(i)}selectedNotification(){let i=new FormData;i.append("notification_id",JSON.stringify(this.selectedNotificationIds)),this.notificationService.updateNotificationPanelByIds(i).subscribe(n=>{this.getNotificationList(this.page),this.selectedNotificationIds=[]},n=>{this.selectedNotificationIds=[]})}viewAllNotification(){this.notificationService.viewAllNotification().subscribe(i=>{this.getNotificationList(this.page)})}notificationRead(i,n){if(!n&&!this.notificationIds.includes(i)){this.notificationIds.push(i);let a=new FormData;a.append("notification_id",JSON.stringify(this.notificationIds)),this.notificationService.updateNotificationPanelByIds(a).subscribe(o=>{this.getNotificationList(this.page),this.notificationIds=[]},o=>{this.notificationIds=[]})}}pageChange(i){i!==this.page&&(this.page=i,this.getNotificationList(this.page))}getPageNumbers(){const i=this.totalNotificationCount,n=this.page;let o,c;if(i<=5)o=1,c=i;else{const p=Math.floor(2.5),u=Math.ceil(2.5)-1;n<=p?(o=1,c=5):n+u>=i?(o=i-5+1,c=i):(o=n-p,c=n+u)}const l=Array.from(Array(c+1-o).keys()).map(p=>o+p);return o>1&&(l.unshift("..."),l.unshift(1)),(c<i-1||c===i-1)&&l.push("..."),l}}return e.\u0275fac=function(i){return new(i||e)(t.Y36(m.g))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-notifications"]],decls:27,vars:10,consts:[[1,"container-fluid","my-4"],[1,"mb-4","d-flex","align-items-center","justify-content-between"],[1,""],[1,"text-bold"],[1,"notification-description-wrapper"],[1,"btn","btn-primary","ms-3","ms-md-0","me-md-3",3,"click"],[1,"btn","btn-primary","ms-3","ms-md-0","mt-3","mt-md-0",3,"click"],[1,"row","m-0"],["class","col-12 p-0",4,"ngFor","ngForOf"],[1,"d-flex","w-100","justify-content-end","my-3"],[1,"pagination-list"],[3,"click"],["href","javascript:void(0)"],[1,"fa","fa-angle-double-left"],[3,"ngClass","click",4,"ngFor","ngForOf"],[1,"fa","fa-angle-double-right"],[1,"entries","f-right"],[1,"col-12","p-0"],[1,"d-flex","align-items-center","mb-4"],["type","checkbox","class","me-3 checkbox-wrapper",3,"change",4,"ngIf"],[1,"card","card-wrapper","w-100","mb-0",3,"ngClass","click"],[1,"card-body","p-1","d-flex","align-items-center","justify-content-between",3,"ngClass"],[1,"d-flex","align-items-center"],["src","../../../assets/logo/logo.png","alt","logo-img","width","50","height","50",1,"rounded-circle","mr-3"],[1,"card-title","mb-1"],[1,"card-text","text-muted","mb-1"],[1,"card-text","text-muted"],["class","unread-notification-wrapper me-3",4,"ngIf"],["type","checkbox",1,"me-3","checkbox-wrapper",3,"change"],[1,"unread-notification-wrapper","me-3"],[3,"ngClass","click"]],template:function(i,n){1&i&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"h2",3),t._uU(4,"All Notifications"),t.qZA(),t.TgZ(5,"p",4),t._uU(6,"View your all activities"),t.qZA()(),t.TgZ(7,"div")(8,"button",5),t.NdJ("click",function(){return n.selectedNotification()}),t._uU(9),t.qZA(),t.TgZ(10,"button",6),t.NdJ("click",function(){return n.viewAllNotification()}),t._uU(11,"View All"),t.qZA()()(),t.TgZ(12,"div",7),t.YNc(13,N,15,7,"div",8),t.qZA(),t.TgZ(14,"div",9)(15,"ul",10)(16,"li",11),t.NdJ("click",function(){return n.page>1&&n.pageChange(n.page-1)}),t.TgZ(17,"a",12),t._UZ(18,"i",13),t._uU(19," Previous "),t.qZA()(),t.YNc(20,v,3,5,"li",14),t.TgZ(21,"li",11),t.NdJ("click",function(){return n.page<n.totalNotificationCount&&n.pageChange(n.page+1)}),t.TgZ(22,"a",12),t._uU(23," Next "),t._UZ(24,"i",15),t.qZA()()()(),t.TgZ(25,"div",16),t._uU(26),t.qZA()()),2&i&&(t.xp6(9),t.hij("View Selected(",null==n.selectedNotificationIds?null:n.selectedNotificationIds.length,")"),t.xp6(4),t.Q6J("ngForOf",n.notificationList),t.xp6(3),t.ekj("disabled",1===n.page),t.xp6(4),t.Q6J("ngForOf",n.getPageNumbers()),t.xp6(1),t.ekj("disabled",n.page===n.totalNotificationCount),t.xp6(5),t.lnq(" Showing ",(n.page-1)*n.itemsPerPage+1," to ",n.page*n.itemsPerPage," of ",n.totalNotificationCount," entries "))},dependencies:[f.mk,f.sg,f.O5],styles:[".card-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{flex-shrink:0;margin-right:1rem}.notification-description-wrapper[_ngcontent-%COMP%]{font-weight:500;font-size:16px}.pagination-list[_ngcontent-%COMP%]{list-style-type:none;display:flex;justify-content:center;border:1px solid #ddd;border-radius:4px}.pagination-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:inline-block;padding:5px 0}.pagination-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:#000;padding:6px 12px}.pagination-list[_ngcontent-%COMP%]   li.disabled[_ngcontent-%COMP%]{pointer-events:none;color:#ccc}.pagination-list[_ngcontent-%COMP%]   li.active-page[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{background-color:#ff9f43;font-weight:700;color:#fff;border-color:#ff9f43}.pagination-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){border-right:1px solid #ddd}.pagination-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:first-child{border-left:1px solid #ddd}.unread-notification-wrapper[_ngcontent-%COMP%]{height:14px;width:14px;background:#FF9F43;border-radius:50%}.unread-card-wrapper[_ngcontent-%COMP%]{background-color:#f3f3f3}.checkbox-wrapper[_ngcontent-%COMP%]{height:24px;width:24px}.notification-spacing-wrapper[_ngcontent-%COMP%]{margin-left:40px}"]}),e})()}];let w=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[g.Bz.forChild(x),g.Bz]}),e})();var b=r(54333);let P=(()=>{class e{}return e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[f.ez,w,b.JX]}),e})()}}]);