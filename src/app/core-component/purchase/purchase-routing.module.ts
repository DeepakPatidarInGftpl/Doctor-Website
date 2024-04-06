import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'purchaselist', pathMatch: 'full' },
  {
    path: '',
    children: [
      {
        path: 'purchaselist',
        loadChildren: () =>
          import('./purchaselist/purchaselist.module').then(
            (m) => m.PurchaselistModule
          ),
      },
    ],
  },
  {
    path: 'addpurchase',
    loadChildren: () =>
      import('./addpurchase/addpurchase.module').then(
        (m) => m.AddpurchaseModule
      ),
  },
  {
    path: 'importpurchase',
    loadChildren: () =>
      import('./importpurchase/importpurchase.module').then(
        (m) => m.ImportpurchaseModule
      ),
  },
  {
    path: 'editpurchase/:id',
    loadChildren: () =>
      import('./editpurchase/editpurchase.module').then(
        (m) => m.EditpurchaseModule
      ),
  },
  {
    path: 'purchaseDetails/:id',
    loadChildren: () =>
      import('./details-purchase/details-purchase.module').then(
        (m) => m.DetailsPurchaseModule
      ),
  },


  {
    path: 'material-Inward-list',
    loadChildren: () =>
      import('./material-inward/material-inward.module').then(
        (m) => m.MaterialInwardModule
      ),
  },

  {
    path: 'addmaterial-Inward',
    loadChildren: () =>
      import('./addmaterial-inward/addmaterial-inward.module').then(
        (m) => m.AddmaterialInwardModule
      ),
  },
  {
    path: 'editmaterial-Inward/:id',
    loadChildren: () =>
      import('./updatematerial-inward/updatematerial-inward.module').then(
        (m) => m.UpdatematerialInwardModule
      ),
  },
  {
    path: 'material-InwardDetails/:id',
    loadChildren: () =>
      import('./details-material-inward/details-material-inward.module').then(
        (m) => m.DetailsMaterialInwardModule
      ),
  },
  {
    path: 'print-material-Inward/:id',
    loadChildren: () =>
      import('./print-material-inward/print-material-inward.module').then(
        (m) => m.PrintMaterialInwardModule
      ),
  },

  {
    path: 'goodsReceivedNote-list',
    loadChildren: () =>
      import('./purchase-bill/purchase-bill.module').then(
        (m) => m.PurchaseBillModule
      ),
  },

  {
    path: 'add-goodsReceivedNote',
    loadChildren: () =>
      import('./addpurchase-bill/addpurchase-bill.module').then(
        (m) => m.AddpurchaseBillModule
      ),
  },
  {
    path: 'edit-goodsReceivedNote/:id',
    loadChildren: () =>
      import('./updatepurchase-bill/updatepurchase-bill.module').then(
        (m) => m.UpdatepurchaseBillModule
      ),
  },
  {
    path: 'purchase-billDetails/:id',
    loadChildren: () =>
      import('./detailspurchase-bill/detailspurchase-bill.module').then(
        (m) => m.DetailspurchaseBillModule
      ),
  },

  {
    path: 'purchaseReturn-list',
    loadChildren: () =>
      import('./purchase-return/debitnotes.module').then(
        (m) => m.DebitnotesModule
      ),
  },

  {
    path: 'add-purchaseReturn',
    loadChildren: () =>
      import('./add-debitnotes/add-debitnotes.module').then(
        (m) => m.AddDebitnotesModule
      ),
  },
  {
    path: 'edit-purchaseReturn/:id',
    loadChildren: () =>
      import('./update-debitnotes/update-debitnotes.module').then(
        (m) => m.UpdateDebitnotesModule
      ),
  },
  {
    path: 'details-purchaseReturn/:id',
    loadChildren: () =>
      import('./details-debitnotes/details-debitnotes.module').then(
        (m) => m.DetailsDebitnotesModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PurchaseRoutingModule { }
