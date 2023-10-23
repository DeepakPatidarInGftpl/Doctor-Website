import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  
  //stock transfer
  { path: 'add-stock-transfer', loadChildren: () => import('./add-stock-transfer/add-stock-transfer.module').then((m) => m.AddStockTransferModule) },
  { path: 'update-stock-transfer/:id', loadChildren: () => import('./stock-transfer-update/stock-transfer-update.module').then((m) => m.StockTransferUpdateModule) },
  { path: 'list-stock-transfer', loadChildren: () => import('./stock-transfer-list/stock-transfer-list.module').then((m) => m.StockTransferListModule) },
  { path: 'details-stock-transfer/:id', loadChildren: () => import('./stock-transfer-details/stock-transfer-details.module').then((m) => m.StockTransferDetailsModule) },
  //stock transfer
  { path: 'add-stock-transfer-request', loadChildren: () => import('./add-stock-transfer-request/add-stock-transfer-request.module').then((m) => m.AddStockTransferRequestModule) },
  { path: 'update-stock-transfer-request/:id', loadChildren: () => import('./stock-transfer-request-update/stock-transfer-request-update.module').then((m) => m.StockTransferRequestUpdateModule) },
  { path: 'list-stock-transfer-request', loadChildren: () => import('./stock-transfer-request-list/stock-transfer-request-list.module').then((m) => m.StockTransferRequestListModule) },
  { path: 'details-stock-transfer-request/:id', loadChildren: () => import('./stock-transfer-request-details/stock-transfer-request-details.module').then((m) => m.StockTransferRequestDetailsModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryRoutingModule { }
