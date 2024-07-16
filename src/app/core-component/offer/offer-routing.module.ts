import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'add-invoice-amount', loadChildren: () => import('./add-invoice-amount/invoice-amount.module').then((m) => m.InvoiceAmountModule) },
  { path: 'invoice-amount', loadChildren: () => import('./list-invoice-amount/list-invoice-amount.module').then((m) => m.ListInvoiceAmountModule) },
  { path: 'edit-invoice-amount/:id', loadChildren: () => import('./update-invoice-amount/update-invoice-amount.module').then((m) => m.UpdateInvoiceAmountModule) },
  { path: 'detail-invoice-amount/:id', loadChildren: () => import('./details-invoice-amount/details-invoice-amount.module').then((m) => m.DetailsInvoiceAmountModule) },

  { path: 'add-brand-offer', loadChildren: () => import('./add-brand-offer/add-brand-offer.module').then((m) => m.AddBrandOfferModule) },
  { path: 'brand-offer', loadChildren: () => import('./list-brand-offer/list-brand-offer.module').then((m) => m.ListBrandOfferModule) },
  { path: 'edit-brand-offer/:id', loadChildren: () => import('./update-brand-offer/update-brand-offer.module').then((m) => m.UpdateBrandOfferModule) },
  { path: 'detail-brand-offer/:id', loadChildren: () => import('./details-based-on-brands/details-based-on-brands.module').then((m) => m.DetailsBasedOnBrandsModule) },
  // 
  { path: 'add-brand-subcategory-offer', loadChildren: () => import('./add-brand-subcategory-offer/add-brand-subcategory-offer.module').then((m) => m.AddBrandSubcategoryOfferModule) },
  { path: 'brand-subcategory-offer', loadChildren: () => import('./list-brand-subcategory-offer/list-brand-subcategory-offer.module').then((m) => m.ListBrandSubcategoryOfferModule) },
  { path: 'coupon-list', loadChildren: () => import('./coupon-list/coupon-list.module').then((m) => m.CouponListModule) },
  { path: 'coupon-details/:id', loadChildren: () => import('./coupon-details/coupon-details.module').then((m) => m.CouponDetailsModule) },
  { path: 'edit-brand-subcategory-offer/:id', loadChildren: () => import('./update-brand-subcategory-offer/updaye-brand-subcategory-offer.module').then((m) => m.UpdayeBrandSubcategoryOfferModule) },
  { path: 'detail-brand-subcategory-offer/:id', loadChildren: () => import('./details-based-on-brands-sub-category/details-based-on-brands-sub-category.module').then((m) => m.DetailsBasedOnBrandsSubCategoryModule) },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfferRoutingModule { }
