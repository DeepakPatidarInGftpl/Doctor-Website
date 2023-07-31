import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
      {
        path: 'pos',
        loadChildren: () =>
          import('../pos/pos.module').then(
            (m) => m.PosModule
          ),
      },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewposRoutingModule { }
