import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'sale-invoice',
    loadChildren: () =>
      import('./sale-invoice/sale-invoice.module').then((m) => m.SaleInvoiceModule),
  },
  {
    path: 'sale-summary',
    loadChildren: () =>
      import('./sale-summary/sale-summary.module').then((m) => m.SaleSummaryModule),
  },
  {
    path: 'stock-ledger',
    loadChildren: () =>
      import('./stock-ledger/stock-ledger.module').then((m) => m.StockLedgerModule),

  },
  {
    path: 'product-history',
    loadChildren: () =>
      import('./product-history/product-history.module').then((m) => m.ProductHistoryModule),

  },
  {
    path:'product-daybook',
    loadChildren: () =>
    import('./product-daybook/product-daybook.module').then((m) =>m.ProductDaybookModule),
  },
  {
    path:'stock-alert',
    loadChildren: () =>
    import('./stock-alert/stock-alert.module').then((m) =>m.StockAlertModule),
  },
  {
    path:'day-book',
    loadChildren: () =>
    import('./day-book/day-book.module').then((m) =>m.DayBookModule),

  },
  {
    path:'list',
    loadChildren: () =>
    import('./all-reports/all-reports.module').then((m) =>m.AllReportsModule),

  },
  {
    path:'sale-overdue',
    loadChildren: () =>
    import('./sale-overdue/sale-overdue.module').then((m) =>m.SaleOverdueModule)
},
{
  path:'amount-wise-sale',
    loadChildren: () =>
    import('./amount-wise-sale/amount-wise-sale.module').then((m) =>m.AmountWiseSaleModule)
},
{
  path:'category-wise-sale',
  loadChildren: () =>
  import('./category-wise-sale/category-wise-sale.module').then((m) =>m.CategoryWiseSaleModule)

},
{
  path:'time-wise-sale',
  loadChildren: () =>
  import('./time-wise-sale/time-wise-sale.module').then((m) =>m.TimeWiseSaleModule)

},
{
  path:'brand-wise-sale',
  loadChildren: () =>
  import('./brand-wise-sale/brand-wise-sale.module').then((m) =>m.BrandWiseSaleModule)
},
{
  path:'product-wise-sale',
  loadChildren: () =>
  import('./product-wise-sale/product-wise-sale.module').then((m) =>m.ProductWiseSaleModule)
},
{
  path:'customer-wise-sale',
  loadChildren: () =>
  import('./customer-wise-sale/customer-wise-sale.module').then((m) =>m.CustomerWiseSaleModule)
},
{
  path:'customer-outstanding-sale',
  loadChildren: () =>
  import('./customer-outstanding-sale/customer-outstanding-sale.module').then((m) =>m.CustomerOutstandingSaleModule)
},
{
  path:'customer-wise-sale-order',
  loadChildren: () =>
  import('./customer-wise-sale-order/customer-wise-sale-order.module').then((m) =>m.CustomerWiseSaleOrderModule)
},
{
  path: 'purchase-summary',
  loadChildren: () =>
    import('./purchase-summary/purchase-summary.module').then((m) => m.PurchaseSummaryModule),
},
{
  path: 'purchase-overdue',
  loadChildren: () =>
    import('./purchase-overdue/purchase-overdue.module').then((m) => m.PurchaseOverdueModule),
},
 
{
  path: 'purchase-outstanding',
  loadChildren: () =>
    import('./purchase-outstanding/purchase-outstanding.module').then((m) => m.PurchaseOutstandingModule),
},
{
  path:'product-wise-purchase',
  loadChildren: () =>
  import('./product-wise-purchase/product-wise-purchase.module').then((m) =>m.ProductWisePurchaseModule)
},
{
  path:'category-wise-purchase',
  loadChildren: () =>
  import('./category-wise-purchase/category-wise-purchase.module').then((m) =>m.CategoryWisePurchaseModule)

},
{
  path:'brand-wise-purchase',
  loadChildren: () =>
  import('./brand-wise-purchase/brand-wise-purchase.module').then((m) =>m.BrandWisePurchaseModule)
},
{
  path:'price-wise-purchase',
  loadChildren: () =>
  import('./price-wise-purchase/price-wise-purchase.module').then((m) =>m.PriceWisePurchaseModule)
},
{
  path:'purchase-register',
  loadChildren: () =>
  import('./purchase-register/purchase-register.module').then((m) =>m.PurchaseRegisterModule)
},
{
  path:'discount-wise-purchase',
  loadChildren: () =>
  import('./discount-wise-purchase/discount-wise-purchase.module').then((m) =>m.DiscountWisePurchaseModule)
},
{
  path:'supplier-wise',
  loadChildren: () =>
  import('./supplier-wise/supplier-wise.module').then((m) =>m.SupplierWiseModule)
},
{
  path:'debit-note-register',
  loadChildren: () =>
  import('./debit-note-register/debit-note-register.module').then((m) =>m.DebitNoteRegisterModule)
},
{
  path:'credit-note-register',
  loadChildren: () =>
  import('./credit-note-register/credit-note-register.module').then((m) =>m.CreditNoteRegisterModule)
},
{
  path: 'supplier-outstanding',
  loadChildren: () =>
    import('./supplier-outstanding/supplier-outstanding.module').then((m) => m.SupplierOutstandingModule),
},
{
  path: 'sales-by-product',
  loadChildren: () =>
    import('./sales-by-product/sales-by-product.module').then((m) => m.SalesByProductModule),
},
{
  path: 'stock-summary',
  loadChildren: () =>
    import('./stock-summary/stock-summary.module').then((m) => m.StockSummaryModule),
},
{
  path: 'abc-analysis',
  loadChildren: () =>
    import('./abc-analysis/abc-analysis.module').then((m) => m.AbcAnalysisModule),
},
{
  path: 'price-master',
  loadChildren: () =>
    import('./price-master/price-master.module').then((m) => m.PriceMasterModule),
},
{
  path: 'stock-register',
  loadChildren: () =>
    import('./stock-register/stock-register.module').then((m) => m.StockRegisterModule),
},
{
  path: 'supplier-wise-product',
  loadChildren: () =>
    import('./supplier-wise-product/supplier-wise-product.module').then((m) => m.SupplierWiseProductModule),
},
{
  path: 'stock-movement',
  loadChildren: () =>
    import('./stock-movement/stock-movement.module').then((m) => m.StockMovementModule),
},
{
  path: 'stock-verification',
  loadChildren: () =>
    import('./stock-verification/stock-verification.module').then((m) => m.StockVerificationModule),
},
{
  path: 'tax-wise-purchase',
  loadChildren: () =>
    import('./tax-wise-purchase/tax-wise-purchase.module').then((m) => m.TaxWisePurchaseModule),
},
{
  path: 'tax-wise-credit-note',
  loadChildren: () =>
    import('./tax-wise-credit-note/tax-wise-credit-note.module').then((m) => m.TaxWiseCreditNoteModule),
},
{
  path: 'tax-wise-debit-note',
  loadChildren: () =>
    import('./tax-wise-debit-note/tax-wise-debit-note.module').then((m) => m.TaxWiseDebitNoteModule),
},
{
  path: 'tax-wise-sale-return',
  loadChildren: () =>
    import('./tax-wise-sale-return/tax-wise-sale-return.module').then((m) => m.TaxWiseSaleReturnModule),
},
{
  path: 'tax-wise-sale',
  loadChildren: () =>
    import('./tax-wise-sale/tax-wise-sale.module').then((m) => m.TaxWiseSaleModule),
},
{
  path: 'tax-wise-purchase-return',
  loadChildren: () =>
    import('./tax-wise-purchase-return/tax-wise-purchase-return.module').then((m) => m.TaxWisePurchaseReturnModule),
},
{
  path: 'sale-return',
  loadChildren: () =>
    import('./sale-return/sale-return.module').then((m) => m.SaleReturnModule),
},
{
  path: 'tax-wise-purchase',
  loadChildren: () =>
    import('./tax-wise-purchase/tax-wise-purchase.module').then((m) => m.TaxWisePurchaseModule),
},
{
  path: 'out-standing-analysis',
  loadChildren: () =>
    import('./outstanding-analysis/outstanding-analysis.module').then((m) => m.OutstandingAnalysisModule),
},
{
  path: 'credit-note-register',
  loadChildren: () =>
    import('./credit-note-register/credit-note-register.module').then((m) => m.CreditNoteRegisterModule),
},
{
  path: 'pending-sale-order',
  loadChildren: () =>
    import('./pending-sale-order/pending-sale-order.module').then((m) => m.PendingSaleOrderModule),
},
{
  path: 'general-ledger',
  loadChildren: () =>
    import('./general-ledger/general-ledger.module').then((m) => m.GeneralLedgerModule),
},
{
  path: 'product-ledger',
  loadChildren: () =>
    import('./product-ledger/product-ledger.module').then((m) => m.ProductLedgerModule),
},
{
  path: 'expense-register',
  loadChildren: () =>
    import('./expense-register/expense-register.module').then((m) => m.ExpenseRegisterModule),
},
{
  path: 'journal-book',
  loadChildren: () =>
    import('./journal-book/journal-book.module').then((m) => m.JournalBookModule),
},
{
  path: 'cash-book',
  loadChildren: () =>
    import('./cash-book/cash-book.module').then((m) => m.CashBookModule),
},
{
  path: 'bank-book',
  loadChildren: () =>
    import('./bank-book/bank-book.module').then((m) => m.BankBookModule),
},
{
  path: 'least-selling-product',
  loadChildren: () =>
    import('./least-selling-product/least-selling-product.module').then((m) => m.LeastSellingProductModule),
},
{
  path: 'sale-register',
  loadChildren: () =>
    import('./sale-register/sale-register.module').then((m) => m.SaleRegisterModule),
},
{
  path: 'sale-item-register',
  loadChildren: () =>
    import('./sale-item-register/sale-item-register.module').then((m) => m.SaleItemRegisterModule),
},
{
  path: 'loss-qty',
  loadChildren: () =>
    import('./loss-qty/loss-qty.module').then((m) => m.LossQtyModule),
},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
