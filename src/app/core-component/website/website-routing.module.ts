import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'staticPage', pathMatch: 'full' },
  {
    path: '', children: [
      { path: 'staticPage', loadChildren: () => import('./static-pages/static-pages.module').then((m) => m.StaticPagesModule) },
      { path: 'addStaticPage', loadChildren: () => import('./add-static-page/add-static-page.module').then((m) => m.AddStaticPageModule) },
      { path: 'updateStaticPage/:slug', loadChildren: () => import('./update-static-page/update-static-page.module').then((m) => m.UpdateStaticPageModule) },
      { path: 'footerFeature', loadChildren: () => import('./footer-features/footer-features.module').then((m) => m.FooterFeaturesModule) },
      { path: 'banner', loadChildren: () => import('./banner/banner.module').then((m) => m.BannerModule) },
      { path: 'trendingProducts', loadChildren: () => import('./trending-products/trending-products.module').then((m) => m.TrendingProductsModule) },
      { path: 'dealOfTheDay', loadChildren: () => import('./deal-of-the-day/deal-of-the-day.module').then((m) => m.DealOfTheDayModule) },
      { path: 'details-trendingProducts/:id', loadChildren: () => import('./details-trending-products/details-trending-products.module').then((m) => m.DetailsTrendingProductsModule) },
      { path: 'details-dealoftheDay/:id', loadChildren: () => import('./details-dealof-the-day/details-dealof-the-day.module').then((m) => m.DetailsDealofTheDayModule) },
      { path: 'addressStore', loadChildren: () => import('./address-store/address-store.module').then((m) => m.AddressStoreModule) },
      { path: 'add-addressStore', loadChildren: () => import('./add-address-store/add-address-store.module').then((m) => m.AddAddressStoreModule) },
      { path: 'update-addressStore/:id', loadChildren: () => import('./update-address-store/update-address-store.module').then((m) => m.UpdateAddressStoreModule) },
      { path: 'footerList', loadChildren: () => import('./footer-list/footer-list.module').then((m) => m.FooterListModule) },
      { path: 'addfooter', loadChildren: () => import('./add-footer/add-footer.module').then((m) => m.AddFooterModule) },
      { path: 'updatefooter/:id', loadChildren: () => import('./update-footer/update-footer.module').then((m) => m.UpdateFooterModule) },
      { path: 'detailsfooter/:id', loadChildren: () => import('./details-footer/details-footer.module').then((m) => m.DetailsFooterModule) },
      { path: 'couponList', loadChildren: () => import('./coupon/coupon.module').then((m) => m.CouponModule) },
      { path: 'reason', loadChildren: () => import('./reason/reason.module').then((m) => m.ReasonModule) },
      { path: 'aboutBanner', loadChildren: () => import('./about-banner/about-banner.module').then((m) => m.AboutBannerModule) },
      { path: 'aboutFooterBanner', loadChildren: () => import('./about-footer-banner/about-footer-banner.module').then((m) => m.AboutFooterBannerModule) },
      { path: 'newArrivalBanner', loadChildren: () => import('./new-arrival-banner/new-arrival-banner.module').then((m) => m.NewArrivalBannerModule) },
      { path: 'ratingAndReview', loadChildren: () => import('./rating-and-review/rating-and-review.module').then((m) => m.RatingAndReviewModule) },
      { path: 'productOrder', loadChildren: () => import('./product-order/product-order.module').then((m) => m.ProductOrderModule) },
      { path: 'productOrder/:id', loadChildren: () => import('./product-order-details/product-order-details.module').then((m) => m.ProductOrderDetailsModule) },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
