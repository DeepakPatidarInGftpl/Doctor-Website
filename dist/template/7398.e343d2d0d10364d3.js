"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[7398],{97398:(D,o,l)=>{l.r(o),l.d(o,{PurchaseModule:()=>C});var m=l(36895),s=l(89299),t=l(94650);const M=[{path:"",redirectTo:"purchaselist",pathMatch:"full"},{path:"",children:[{path:"purchaselist",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(6166),l.e(2983),l.e(2502),l.e(2454),l.e(1253)]).then(l.bind(l,21253)).then(d=>d.PurchaselistModule)}]},{path:"addpurchase",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(531),l.e(4241),l.e(1173),l.e(7957),l.e(8592),l.e(2540)]).then(l.bind(l,52540)).then(d=>d.AddpurchaseModule)},{path:"importpurchase",loadChildren:()=>l.e(1889).then(l.bind(l,41889)).then(d=>d.ImportpurchaseModule)},{path:"editpurchase/:id",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(531),l.e(4241),l.e(1173),l.e(7957),l.e(8592),l.e(7887)]).then(l.bind(l,87887)).then(d=>d.EditpurchaseModule)},{path:"purchaseDetails/:id",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(6709),l.e(3848),l.e(7392),l.e(4159),l.e(4834)]).then(l.bind(l,44834)).then(d=>d.DetailsPurchaseModule)},{path:"material-Inward-list",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(6166),l.e(2983),l.e(2502),l.e(2454),l.e(6293)]).then(l.bind(l,6293)).then(d=>d.MaterialInwardModule)},{path:"addmaterial-Inward",loadChildren:()=>Promise.all([l.e(3238),l.e(531),l.e(4241),l.e(6166),l.e(1173),l.e(7957),l.e(4859),l.e(4159),l.e(4851),l.e(8592),l.e(3164)]).then(l.bind(l,17084)).then(d=>d.AddmaterialInwardModule)},{path:"editmaterial-Inward/:id",loadChildren:()=>Promise.all([l.e(3238),l.e(531),l.e(4241),l.e(6166),l.e(1173),l.e(7957),l.e(4859),l.e(4159),l.e(4851),l.e(8592),l.e(463)]).then(l.bind(l,68233)).then(d=>d.UpdatematerialInwardModule)},{path:"material-InwardDetails/:id",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(6709),l.e(3848),l.e(7392),l.e(4159),l.e(6063)]).then(l.bind(l,56063)).then(d=>d.DetailsMaterialInwardModule)},{path:"print-material-Inward/:id",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(531),l.e(4241),l.e(6166),l.e(1173),l.e(7957),l.e(4859),l.e(4159),l.e(4851),l.e(189)]).then(l.bind(l,50189)).then(d=>d.PrintMaterialInwardModule)},{path:"goodsReceivedNote-list",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(6166),l.e(2983),l.e(2502),l.e(2454),l.e(8592),l.e(3537)]).then(l.bind(l,83537)).then(d=>d.PurchaseBillModule)},{path:"add-goodsReceivedNote",loadChildren:()=>Promise.all([l.e(3238),l.e(531),l.e(4241),l.e(1173),l.e(7957),l.e(8651),l.e(8592),l.e(3468)]).then(l.bind(l,3468)).then(d=>d.AddpurchaseBillModule)},{path:"edit-goodsReceivedNote/:id",loadChildren:()=>Promise.all([l.e(3238),l.e(531),l.e(4241),l.e(1173),l.e(7957),l.e(8592),l.e(3037)]).then(l.bind(l,33037)).then(d=>d.UpdatepurchaseBillModule)},{path:"purchase-billDetails/:id",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(6709),l.e(3848),l.e(7392),l.e(4159),l.e(6292)]).then(l.bind(l,36292)).then(d=>d.DetailspurchaseBillModule)},{path:"purchaseReturn-list",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(6166),l.e(2983),l.e(2502),l.e(2454),l.e(8592),l.e(6952)]).then(l.bind(l,6952)).then(d=>d.DebitnotesModule)},{path:"add-purchaseReturn",loadChildren:()=>Promise.all([l.e(3238),l.e(531),l.e(4241),l.e(1173),l.e(7957),l.e(8651),l.e(8592),l.e(1416)]).then(l.bind(l,61416)).then(d=>d.AddDebitnotesModule)},{path:"edit-purchaseReturn/:id",loadChildren:()=>Promise.all([l.e(3238),l.e(531),l.e(4241),l.e(1173),l.e(7957),l.e(8592),l.e(1444)]).then(l.bind(l,81444)).then(d=>d.UpdateDebitnotesModule)},{path:"details-purchaseReturn/:id",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(6709),l.e(3848),l.e(7392),l.e(4159),l.e(9556)]).then(l.bind(l,19556)).then(d=>d.DetailsDebitnotesModule)}];let P=(()=>{class d{}return d.\u0275fac=function(h){return new(h||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[s.Bz.forChild(M),s.Bz]}),d})(),C=(()=>{class d{}return d.\u0275fac=function(h){return new(h||d)},d.\u0275mod=t.oAB({type:d}),d.\u0275inj=t.cJS({imports:[m.ez,P]}),d})()}}]);