"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[97398],{97398:(R,o,t)=>{t.r(o),t.d(o,{PurchaseModule:()=>D});var m=t(36895),s=t(4392),d=t(94650);const M=[{path:"",redirectTo:"purchaselist",pathMatch:"full"},{path:"",children:[{path:"purchaselist",loadChildren:()=>Promise.all([t.e(30906),t.e(3238),t.e(96134),t.e(90455),t.e(8468),t.e(96166),t.e(12983),t.e(72502),t.e(43443),t.e(2454),t.e(21253)]).then(t.bind(t,21253)).then(l=>l.PurchaselistModule)}]},{path:"addpurchase",loadChildren:()=>Promise.all([t.e(30906),t.e(3238),t.e(30531),t.e(74241),t.e(44144),t.e(47957),t.e(43443),t.e(52540)]).then(t.bind(t,52540)).then(l=>l.AddpurchaseModule)},{path:"importpurchase",loadChildren:()=>t.e(41889).then(t.bind(t,41889)).then(l=>l.ImportpurchaseModule)},{path:"editpurchase/:id",loadChildren:()=>Promise.all([t.e(30906),t.e(3238),t.e(30531),t.e(74241),t.e(44144),t.e(47957),t.e(43443),t.e(87887)]).then(t.bind(t,87887)).then(l=>l.EditpurchaseModule)},{path:"purchaseDetails/:id",loadChildren:()=>Promise.all([t.e(30906),t.e(3238),t.e(96134),t.e(90455),t.e(8468),t.e(30531),t.e(74241),t.e(96166),t.e(95113),t.e(12983),t.e(56709),t.e(3848),t.e(97392),t.e(44834)]).then(t.bind(t,44834)).then(l=>l.DetailsPurchaseModule)},{path:"material-Inward-list",loadChildren:()=>Promise.all([t.e(30906),t.e(3238),t.e(96134),t.e(90455),t.e(8468),t.e(30531),t.e(74241),t.e(96166),t.e(12983),t.e(72502),t.e(44144),t.e(43443),t.e(4859),t.e(99602),t.e(2454),t.e(6293)]).then(t.bind(t,6293)).then(l=>l.MaterialInwardModule)},{path:"addmaterial-Inward",loadChildren:()=>Promise.all([t.e(3238),t.e(30531),t.e(74241),t.e(96166),t.e(44144),t.e(47957),t.e(43443),t.e(4859),t.e(4159),t.e(74851),t.e(33164)]).then(t.bind(t,17084)).then(l=>l.AddmaterialInwardModule)},{path:"editmaterial-Inward/:id",loadChildren:()=>Promise.all([t.e(3238),t.e(30531),t.e(74241),t.e(96166),t.e(44144),t.e(47957),t.e(43443),t.e(4859),t.e(4159),t.e(74851),t.e(80463)]).then(t.bind(t,68233)).then(l=>l.UpdatematerialInwardModule)},{path:"material-InwardDetails/:id",loadChildren:()=>Promise.all([t.e(30906),t.e(3238),t.e(96134),t.e(90455),t.e(8468),t.e(30531),t.e(74241),t.e(96166),t.e(95113),t.e(12983),t.e(56709),t.e(3848),t.e(97392),t.e(94431),t.e(56063)]).then(t.bind(t,56063)).then(l=>l.DetailsMaterialInwardModule)},{path:"print-material-Inward/:id",loadChildren:()=>Promise.all([t.e(30906),t.e(3238),t.e(30531),t.e(74241),t.e(96166),t.e(44144),t.e(47957),t.e(4859),t.e(4159),t.e(74851),t.e(50189)]).then(t.bind(t,50189)).then(l=>l.PrintMaterialInwardModule)},{path:"goodsReceivedNote-list",loadChildren:()=>Promise.all([t.e(30906),t.e(3238),t.e(96134),t.e(90455),t.e(8468),t.e(30531),t.e(74241),t.e(96166),t.e(12983),t.e(72502),t.e(44144),t.e(43443),t.e(4859),t.e(99602),t.e(2454),t.e(83537)]).then(t.bind(t,83537)).then(l=>l.PurchaseBillModule)},{path:"add-goodsReceivedNote",loadChildren:()=>Promise.all([t.e(3238),t.e(30531),t.e(74241),t.e(44144),t.e(47957),t.e(43443),t.e(68651),t.e(3468)]).then(t.bind(t,3468)).then(l=>l.AddpurchaseBillModule)},{path:"edit-goodsReceivedNote/:id",loadChildren:()=>Promise.all([t.e(3238),t.e(30531),t.e(74241),t.e(44144),t.e(47957),t.e(43443),t.e(33037)]).then(t.bind(t,33037)).then(l=>l.UpdatepurchaseBillModule)},{path:"purchase-billDetails/:id",loadChildren:()=>Promise.all([t.e(30906),t.e(3238),t.e(96134),t.e(90455),t.e(8468),t.e(30531),t.e(74241),t.e(96166),t.e(95113),t.e(12983),t.e(56709),t.e(3848),t.e(97392),t.e(94431),t.e(36292)]).then(t.bind(t,36292)).then(l=>l.DetailspurchaseBillModule)},{path:"purchaseReturn-list",loadChildren:()=>Promise.all([t.e(30906),t.e(3238),t.e(96134),t.e(90455),t.e(8468),t.e(96166),t.e(12983),t.e(72502),t.e(43443),t.e(2454),t.e(6952)]).then(t.bind(t,6952)).then(l=>l.DebitnotesModule)},{path:"add-purchaseReturn",loadChildren:()=>Promise.all([t.e(3238),t.e(30531),t.e(74241),t.e(44144),t.e(47957),t.e(43443),t.e(68651),t.e(61416)]).then(t.bind(t,61416)).then(l=>l.AddDebitnotesModule)},{path:"edit-purchaseReturn/:id",loadChildren:()=>Promise.all([t.e(3238),t.e(30531),t.e(74241),t.e(44144),t.e(47957),t.e(43443),t.e(81444)]).then(t.bind(t,81444)).then(l=>l.UpdateDebitnotesModule)},{path:"details-purchaseReturn/:id",loadChildren:()=>Promise.all([t.e(30906),t.e(3238),t.e(96134),t.e(90455),t.e(8468),t.e(30531),t.e(74241),t.e(96166),t.e(95113),t.e(12983),t.e(56709),t.e(3848),t.e(97392),t.e(94431),t.e(19556)]).then(t.bind(t,19556)).then(l=>l.DetailsDebitnotesModule)}];let P=(()=>{class l{}return l.\u0275fac=function(h){return new(h||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[s.Bz.forChild(M),s.Bz]}),l})();var C=t(97185);let D=(()=>{class l{}return l.\u0275fac=function(h){return new(h||l)},l.\u0275mod=d.oAB({type:l}),l.\u0275inj=d.cJS({imports:[m.ez,P,C.Rh.forRoot({timeOut:1e3,positionClass:"toast-top-right",preventDuplicates:!0})]}),l})()}}]);