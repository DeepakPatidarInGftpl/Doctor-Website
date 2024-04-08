import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesComponent } from './sales.component';

const routes: Routes = [
  { path: '', redirectTo: 'saleslist', pathMatch: 'full' },
  {
    path: '',
    component: SalesComponent,
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
      //sales bill
      {
        path: 'salesbill-list',
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
      // material outward
      {
        path: 'salesMaterialOutward-list',
        loadChildren: () =>
          import('./material-outward-list/material-outward-list.module').then(
            (m) => m.MaterialOutwardListModule
          ),
      },
      {
        path: 'addSalesMaterialOutward',
        loadChildren: () =>
          import('./add-material-outward/add-material-outward.module').then(
            (m) => m.AddMaterialOutwardModule
          ),
      },
      {
        path: 'updatesalesMaterialOutward/:id',
        loadChildren: () =>
          import('./update-material-outward/update-material-outward.module').then(
            (m) => m.UpdateMaterialOutwardModule
          ),
      },
      {
        path: 'salesMaterialOutwardDetails/:id',
        loadChildren: () =>
          import('./details-material-outward/details-material-outward.module').then(
            (m) => m.DetailsMaterialOutwardModule
          ),
      },
      // sales Estimate
      {
        path: 'salesEstimatelist',
        loadChildren: () =>
          import('./estimate-list/estimate-list.module').then(
            (m) => m.EstimateListModule
          ),
      },
      {
        path: 'addsalesEstimate',
        loadChildren: () =>
          import('./add-estimate/add-estimate.module').then(
            (m) => m.AddEstimateModule
          ),
      },
      {
        path: 'updatesalesEstimate/:id',
        loadChildren: () =>
          import('./update-estimate/update-estimate.module').then(
            (m) => m.UpdateEstimateModule
          ),
      },
      {
        path: 'salesEstimatedetails/:id',
        loadChildren: () =>
          import('./details-estimate/details-estimate.module').then(
            (m) => m.DetailsEstimateModule
          ),
      },
      // sales return
      {
        path: 'salesReturnlist',
        loadChildren: () =>
          import('./sales-return-list/sales-return-list.module').then(
            (m) => m.SalesReturnListModule
          ),
      },
      {
        path: 'addsalesReturn',
        loadChildren: () =>
          import('./add-sales-return/add-sales-return.module').then(
            (m) => m.AddSalesReturnModule
          ),
      },
      {
        path: 'updatesalesReturn/:id',
        loadChildren: () =>
          import('./update-sales-return/update-sales-return.module').then(
            (m) => m.UpdateSalesReturnModule
          ),
      },
      {
        path: 'salesReturnedetails/:id',
        loadChildren: () =>
          import('./details-sales-return/details-sales-return.module').then(
            (m) => m.DetailsSalesReturnModule
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
      {
        path: 'add-advance-booking',
        loadChildren: () =>
          import('./add-advance-booking/add-advance-booking.module').then((m) => m.AddAdvanceBookingModule),
      },
      {
        path: 'update-advance-booking/:id',
        loadChildren: () =>
          import('./update-advance-booking/update-advance-booking.module').then((m) => m.UpdateAdvanceBookingModule),
      },
      {
        path: 'advance-booking-list',
        loadChildren: () =>
          import('./advance-booking-list/advance-booking-list.module').then((m) => m.AdvanceBookingListModule),
      },
      {
        path: 'detail-advance-booking/:id',
        loadChildren: () =>
          import('./detail-advance-booking/detail-advance-booking.module').then((m) => m.DetailAdvanceBookingModule),
      },
     
 // sales deleivery challan
 {
  path: 'delivery-challan-list',
  loadChildren: () =>
    import('./list-delivery-challan/list-delivery-challan.module').then(
      (m) => m.ListDeliveryChallanModule
    ),
},
{
  path: 'add-delivery-challan',
  loadChildren: () =>
    import('./add-delivery-challan/add-delivery-challan.module').then(
      (m) => m.AddDeliveryChallanModule
    ),
},
{
  path: 'update-delivery-challan/:id',
  loadChildren: () =>
    import('./update-delivery-challan/update-delivery-challan.module').then(
      (m) => m.UpdateDeliveryChallanModule
    ),
},
{
  path: 'detail-delivery-challan/:id',
  loadChildren: () =>
    import('./detail-delivery-challan/detail-delivery-challan.module').then(
      (m) => m.DetailDeliveryChallanModule
    ),
},
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SalesRoutingModule { }
