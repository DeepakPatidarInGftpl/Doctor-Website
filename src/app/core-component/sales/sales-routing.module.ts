import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  { path: '', redirectTo: 'saleslist', pathMatch: 'full' },
  {
    path: '',
    component:SalesComponent,
    children: [
      {
        path: 'saleslist',
        loadChildren: () =>
          import('./saleslist/saleslist.module').then((m) => m.SaleslistModule),
      },
      {
        path: 'pos',
        loadChildren: () => import('./pos/pos.module').then((m) => m.PosModule),
      },
      {
        path: 'salesreturnlists',
        loadChildren: () =>
          import('./salesreturnlists/salesreturnlists.module').then(
            (m) => m.SalesreturnlistsModule
          ),
      },
      {
        path: 'createsalesreturns',
        loadChildren: () =>
          import('./createsalesreturns/createsalesreturns.module').then(
            (m) => m.CreatesalesreturnsModule
          ),
      },
      {
        path: 'add-sales',
        loadChildren: () =>
          import('./add-sales/add-sales.module').then((m) => m.AddSalesModule),
      },
      {
        path: 'editsalesreturns',
        loadChildren: () =>
          import('./editsalesreturns/editsalesreturns.module').then(
            (m) => m.EditsalesreturnsModule
          ),
      },
      {
        path: 'edit-sales/:id',
        loadChildren: () =>
          import('./edit-sales/edit-sales.module').then(
            (m) => m.EditSalesModule
          ),
      },
      {
        path: 'sales-details/:id',
        loadChildren: () =>
          import('./sales-details/sales-details.module').then(
            (m) => m.SalesDetailsModule
          ),
      },
      {
        path: 'salesbilllist',
        loadChildren: () =>
          import('./sale-bill-list/sale-bill-list.module').then(
            (m) => m.SaleBillListModule
          ),
      },
      {
        path: 'addsalesbill',
        loadChildren: () =>
          import('./add-sale-bill/add-sale-bill.module').then(
            (m) => m.AddSaleBillModule
          ),
      },
      {
        path: 'updatesalesbill/:id',
        loadChildren: () =>
          import('./update-sale-bill/update-sale-bill.module').then(
            (m) => m.UpdateSaleBillModule
          ),
      },
      {
        path: 'salesbilldetails/:id',
        loadChildren: () =>
          import('./details-sale-bill/details-sale-bill.module').then(
            (m) => m.DetailsSaleBillModule
          ),
      },
      // {
      //   path: 'posOrder',
      //   loadChildren: () =>
      //     import('./pos-order/pos-order.module').then(
      //       (m) => m.PosOrderModule
      //     ),
      // },
      // {
      //   path: 'posOrderDetails/:id',
      //   loadChildren: () =>
      //     import('./details-pos-order/details-pos-order.module').then(
      //       (m) => m.DetailsPosOrderModule
      //     ),
      // },
  
    
    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
