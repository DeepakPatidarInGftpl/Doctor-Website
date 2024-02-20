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
    path: 'purchase-summary',
    loadChildren: () =>
      import('./purchase-summary/purchase-summary.module').then((m) => m.PurchaseSummaryModule),
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
 


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
