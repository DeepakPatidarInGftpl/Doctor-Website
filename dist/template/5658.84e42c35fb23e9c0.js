"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[5658],{95658:(V,h,t)=>{t.r(h),t.d(h,{TransactionsModule:()=>P});var m=t(36895),s=t(88996),o=t(94650);const C=[{path:"debitnoteList",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(3583),t.e(4695),t.e(4511),t.e(8592),t.e(5270)]).then(t.bind(t,5270)).then(d=>d.DebitNoteModule)},{path:"adddebitnote",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(5001),t.e(8592),t.e(3892)]).then(t.bind(t,87007)).then(d=>d.AddDebitNoteModule)},{path:"updatedebitnote/:id",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(5001),t.e(8592),t.e(2814)]).then(t.bind(t,80182)).then(d=>d.UpdateDebitNoteModule)},{path:"detailsdebitnote/:id",loadChildren:()=>Promise.all([t.e(3238),t.e(455),t.e(531),t.e(4241),t.e(3848),t.e(7392),t.e(3763),t.e(8592),t.e(8926)]).then(t.bind(t,68926)).then(d=>d.DetailsDebitNoteModule)},{path:"creditnoteList",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(3583),t.e(4695),t.e(4511),t.e(8592),t.e(6002)]).then(t.bind(t,26002)).then(d=>d.CreditNoteModule)},{path:"addcreditnote",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(5001),t.e(8592),t.e(3671)]).then(t.bind(t,26916)).then(d=>d.AddCreditNoteModule)},{path:"updatecreditnote/:id",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(5001),t.e(8592),t.e(8535)]).then(t.bind(t,40584)).then(d=>d.UpdateCreditNoteModule)},{path:"detailscreditnote/:id",loadChildren:()=>Promise.all([t.e(3238),t.e(455),t.e(531),t.e(4241),t.e(3848),t.e(7392),t.e(3763),t.e(8592),t.e(4375)]).then(t.bind(t,34375)).then(d=>d.DetailsCreditNoteModule)},{path:"journalvoucherList",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(3583),t.e(4695),t.e(4511),t.e(8592),t.e(9424)]).then(t.bind(t,19424)).then(d=>d.ListJournalVoucherModule)},{path:"addjournalvoucher",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(5001),t.e(8592),t.e(9565)]).then(t.bind(t,22382)).then(d=>d.AddJournalVoucherModule)},{path:"updatejournalvoucher/:id",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(5001),t.e(8592),t.e(4738)]).then(t.bind(t,27101)).then(d=>d.UpdateJournalVoucherModule)},{path:"detailsjournalvoucher/:id",loadChildren:()=>Promise.all([t.e(3238),t.e(455),t.e(531),t.e(4241),t.e(3848),t.e(7392),t.e(3763),t.e(8592),t.e(7847)]).then(t.bind(t,97847)).then(d=>d.DetailsJournalVoucherModule)},{path:"countravoucherList",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(3583),t.e(4695),t.e(4511),t.e(8592),t.e(3841)]).then(t.bind(t,83841)).then(d=>d.ListCountraVoucherModule)},{path:"addcountravoucher",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(5001),t.e(8592),t.e(7876)]).then(t.bind(t,49938)).then(d=>d.AddCountraVoucherModule)},{path:"updatecountravoucher/:id",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(5001),t.e(8592),t.e(1936)]).then(t.bind(t,57174)).then(d=>d.UpdateCountraVoucherModule)},{path:"detailscountravoucher/:id",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(3848),t.e(7392),t.e(3763),t.e(8592),t.e(907)]).then(t.bind(t,37718)).then(d=>d.DetailsCountraVoucherModule)},{path:"recieptVoucherList",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(3583),t.e(4695),t.e(4511),t.e(8592),t.e(8504)]).then(t.bind(t,98504)).then(d=>d.ListRecieptVoucherModule)},{path:"addrecieptVoucher",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(5001),t.e(3848),t.e(8592),t.e(286)]).then(t.bind(t,98317)).then(d=>d.AddRecieptVoucherModule)},{path:"updaterecieptVoucher/:id",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(5001),t.e(3848),t.e(8592),t.e(4782)]).then(t.bind(t,65659)).then(d=>d.UpdateRecieptVoucherModule)},{path:"detailsrecieptVoucher/:id",loadChildren:()=>Promise.all([t.e(3238),t.e(455),t.e(531),t.e(4241),t.e(3848),t.e(7392),t.e(3763),t.e(8592),t.e(5373)]).then(t.bind(t,5373)).then(d=>d.DetailsRecieptVoucherModule)},{path:"paymentVoucherList",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(3583),t.e(4695),t.e(4511),t.e(8592),t.e(9377)]).then(t.bind(t,89377)).then(d=>d.ListPaymentVoucherModule)},{path:"addpaymentVoucher",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(5001),t.e(3848),t.e(8592),t.e(9614)]).then(t.bind(t,37596)).then(d=>d.AddPaymentVoucherModule)},{path:"updatepaymentVoucher/:id",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(5001),t.e(3848),t.e(8592),t.e(7950)]).then(t.bind(t,98130)).then(d=>d.UpdatePaymentVoucherModule)},{path:"detailspaymentVoucher/:id",loadChildren:()=>Promise.all([t.e(906),t.e(3238),t.e(455),t.e(6134),t.e(2371),t.e(531),t.e(4241),t.e(3848),t.e(7392),t.e(3763),t.e(8592),t.e(4957)]).then(t.bind(t,70783)).then(d=>d.DetailsPaymentVoucherModule)}];let M=(()=>{class d{}return d.\u0275fac=function(l){return new(l||d)},d.\u0275mod=o.oAB({type:d}),d.\u0275inj=o.cJS({imports:[s.Bz.forChild(C),s.Bz]}),d})(),P=(()=>{class d{}return d.\u0275fac=function(l){return new(l||d)},d.\u0275mod=o.oAB({type:d}),d.\u0275inj=o.cJS({imports:[m.ez,M]}),d})()}}]);