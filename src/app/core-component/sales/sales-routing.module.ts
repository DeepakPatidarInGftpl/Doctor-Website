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
        path: 'edit-sales',
        loadChildren: () =>
          import('./edit-sales/edit-sales.module').then(
            (m) => m.EditSalesModule
          ),
      },
      {
        path: 'sales-details',
        loadChildren: () =>
          import('./sales-details/sales-details.module').then(
            (m) => m.SalesDetailsModule
          ),
      },
      {
        path: 'posOrder',
        loadChildren: () =>
          import('./pos-order/pos-order.module').then(
            (m) => m.PosOrderModule
          ),
      },
      {
        path: 'posOrderDetails/:id',
        loadChildren: () =>
          import('./details-pos-order/details-pos-order.module').then(
            (m) => m.DetailsPosOrderModule
          ),
      },
    ],
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule {}
