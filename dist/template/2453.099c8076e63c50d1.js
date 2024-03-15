"use strict";(self.webpackChunktemplate=self.webpackChunktemplate||[]).push([[2453],{52453:(g,h,l)=>{l.r(h),l.d(h,{ReportsModule:()=>M});var m=l(36895),s=l(89299),n=l(94650);const P=[{path:"sale-invoice",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(6159)]).then(l.bind(l,16159)).then(t=>t.SaleInvoiceModule)},{path:"sale-summary",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(4159),l.e(8592),l.e(6699)]).then(l.bind(l,61119)).then(t=>t.SaleSummaryModule)},{path:"stock-ledger",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(777)]).then(l.bind(l,20777)).then(t=>t.StockLedgerModule)},{path:"product-history",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(1790)]).then(l.bind(l,91790)).then(t=>t.ProductHistoryModule)},{path:"product-daybook",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(744)]).then(l.bind(l,90744)).then(t=>t.ProductDaybookModule)},{path:"stock-alert",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(9319)]).then(l.bind(l,9319)).then(t=>t.StockAlertModule)},{path:"day-book",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(6819)]).then(l.bind(l,16819)).then(t=>t.DayBookModule)},{path:"list",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(5113),l.e(3848),l.e(6709),l.e(7392),l.e(7719),l.e(5819)]).then(l.bind(l,65819)).then(t=>t.AllReportsModule)},{path:"sale-overdue",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(1222)]).then(l.bind(l,31222)).then(t=>t.SaleOverdueModule)},{path:"amount-wise-sale",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(167)]).then(l.bind(l,60167)).then(t=>t.AmountWiseSaleModule)},{path:"category-wise-sale",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(4754)]).then(l.bind(l,14754)).then(t=>t.CategoryWiseSaleModule)},{path:"time-wise-sale",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(8586)]).then(l.bind(l,8586)).then(t=>t.TimeWiseSaleModule)},{path:"brand-wise-sale",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(8593)]).then(l.bind(l,18593)).then(t=>t.BrandWiseSaleModule)},{path:"product-wise-sale",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(8726)]).then(l.bind(l,78726)).then(t=>t.ProductWiseSaleModule)},{path:"customer-wise-sale",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(5047)]).then(l.bind(l,75047)).then(t=>t.CustomerWiseSaleModule)},{path:"customer-outstanding-sale",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(1166)]).then(l.bind(l,51166)).then(t=>t.CustomerOutstandingSaleModule)},{path:"customer-wise-sale-order",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(3927)]).then(l.bind(l,83927)).then(t=>t.CustomerWiseSaleOrderModule)},{path:"purchase-summary",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(76)]).then(l.bind(l,76)).then(t=>t.PurchaseSummaryModule)},{path:"purchase-overdue",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(235)]).then(l.bind(l,10235)).then(t=>t.PurchaseOverdueModule)},{path:"purchase-outstanding",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(7394)]).then(l.bind(l,27394)).then(t=>t.PurchaseOutstandingModule)},{path:"product-wise-purchase",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(9499)]).then(l.bind(l,29499)).then(t=>t.ProductWisePurchaseModule)},{path:"category-wise-purchase",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(7397)]).then(l.bind(l,97397)).then(t=>t.CategoryWisePurchaseModule)},{path:"brand-wise-purchase",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(1590)]).then(l.bind(l,41590)).then(t=>t.BrandWisePurchaseModule)},{path:"price-wise-purchase",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(6680)]).then(l.bind(l,66680)).then(t=>t.PriceWisePurchaseModule)},{path:"purchase-register",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(9908)]).then(l.bind(l,89908)).then(t=>t.PurchaseRegisterModule)},{path:"discount-wise-purchase",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(9337)]).then(l.bind(l,79337)).then(t=>t.DiscountWisePurchaseModule)},{path:"supplier-wise",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(3471)]).then(l.bind(l,93471)).then(t=>t.SupplierWiseModule)},{path:"debit-note-register",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(797)]).then(l.bind(l,90797)).then(t=>t.DebitNoteRegisterModule)},{path:"credit-note-register",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(1111)]).then(l.bind(l,71111)).then(t=>t.CreditNoteRegisterModule)},{path:"supplier-outstanding",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(925)]).then(l.bind(l,90925)).then(t=>t.SupplierOutstandingModule)},{path:"sales-by-product",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(112)]).then(l.bind(l,40112)).then(t=>t.SalesByProductModule)},{path:"stock-summary",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(2787)]).then(l.bind(l,62787)).then(t=>t.StockSummaryModule)},{path:"abc-analysis",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(1453)]).then(l.bind(l,21453)).then(t=>t.AbcAnalysisModule)},{path:"price-master",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(3128)]).then(l.bind(l,53128)).then(t=>t.PriceMasterModule)},{path:"stock-register",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(2441)]).then(l.bind(l,32441)).then(t=>t.StockRegisterModule)},{path:"supplier-wise-product",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(2467)]).then(l.bind(l,92467)).then(t=>t.SupplierWiseProductModule)},{path:"stock-movement",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(1244)]).then(l.bind(l,21244)).then(t=>t.StockMovementModule)},{path:"stock-verification",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(5137)]).then(l.bind(l,25137)).then(t=>t.StockVerificationModule)},{path:"tax-wise-purchase",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(5070)]).then(l.bind(l,25070)).then(t=>t.TaxWisePurchaseModule)},{path:"tax-wise-credit-note",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(4814)]).then(l.bind(l,44814)).then(t=>t.TaxWiseCreditNoteModule)},{path:"tax-wise-debit-note",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(6769)]).then(l.bind(l,6769)).then(t=>t.TaxWiseDebitNoteModule)},{path:"tax-wise-sale-return",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(2960)]).then(l.bind(l,82960)).then(t=>t.TaxWiseSaleReturnModule)},{path:"tax-wise-sale",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(5740)]).then(l.bind(l,5740)).then(t=>t.TaxWiseSaleModule)},{path:"tax-wise-purchase-return",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(8852)]).then(l.bind(l,98852)).then(t=>t.TaxWisePurchaseReturnModule)},{path:"sale-return",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(9998)]).then(l.bind(l,69998)).then(t=>t.SaleReturnModule)},{path:"tax-wise-purchase",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(5070)]).then(l.bind(l,25070)).then(t=>t.TaxWisePurchaseModule)},{path:"out-standing-analysis",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(8915)]).then(l.bind(l,78915)).then(t=>t.OutstandingAnalysisModule)},{path:"credit-note-register",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(1111)]).then(l.bind(l,71111)).then(t=>t.CreditNoteRegisterModule)},{path:"pending-sale-order",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(4173)]).then(l.bind(l,54173)).then(t=>t.PendingSaleOrderModule)},{path:"general-ledger",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(4892)]).then(l.bind(l,94892)).then(t=>t.GeneralLedgerModule)},{path:"product-ledger",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(6734)]).then(l.bind(l,26734)).then(t=>t.ProductLedgerModule)},{path:"expense-register",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(2064)]).then(l.bind(l,82064)).then(t=>t.ExpenseRegisterModule)},{path:"journal-book",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(8663)]).then(l.bind(l,78663)).then(t=>t.JournalBookModule)},{path:"cash-book",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(7874)]).then(l.bind(l,57874)).then(t=>t.CashBookModule)},{path:"bank-book",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(7043)]).then(l.bind(l,57043)).then(t=>t.BankBookModule)},{path:"least-selling-product",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(559)]).then(l.bind(l,20559)).then(t=>t.LeastSellingProductModule)},{path:"sale-register",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(2158)]).then(l.bind(l,32158)).then(t=>t.SaleRegisterModule)},{path:"sale-item-register",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(6837)]).then(l.bind(l,36837)).then(t=>t.SaleItemRegisterModule)},{path:"loss-qty",loadChildren:()=>Promise.all([l.e(906),l.e(3238),l.e(6134),l.e(455),l.e(8468),l.e(531),l.e(4241),l.e(6166),l.e(5113),l.e(4695),l.e(1173),l.e(7957),l.e(4859),l.e(3546),l.e(9602),l.e(7719),l.e(8592),l.e(6763)]).then(l.bind(l,6763)).then(t=>t.LossQtyModule)}];let C=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.Bz.forChild(P),s.Bz]}),t})(),M=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[m.ez,C]}),t})()}}]);