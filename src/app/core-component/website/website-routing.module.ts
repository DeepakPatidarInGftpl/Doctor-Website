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
     { path: 'couponList', loadChildren: () => import('./coupon/coupon.module').then((m) => m.CouponModule) },
      { path: 'reason', loadChildren: () => import('./reason/reason.module').then((m) => m.ReasonModule) },
      { path: 'aboutBanner', loadChildren: () => import('./about-banner/about-banner.module').then((m) => m.AboutBannerModule) },
      { path: 'aboutFooterBanner', loadChildren: () => import('./about-footer-banner/about-footer-banner.module').then((m) => m.AboutFooterBannerModule) },
      { path: 'newArrivalBanner', loadChildren: () => import('./new-arrival-banner/new-arrival-banner.module').then((m) => m.NewArrivalBannerModule) },
      { path: 'ratingAndReview', loadChildren: () => import('./rating-and-review/rating-and-review.module').then((m) => m.RatingAndReviewModule) },
      { path: 'order', loadChildren: () => import('./product-order/product-order.module').then((m) => m.ProductOrderModule) },
      { path: 'order-detail/:id', loadChildren: () => import('./product-order-details/product-order-details.module').then((m) => m.ProductOrderDetailsModule) },

      // 
      { path: 'bannerDetails/:id', loadChildren: () => import('./banner-details/banner-details.module').then((m) => m.BannerDetailsModule ) },
      { path: 'reasonDetails/:id', loadChildren: () => import('./reason-details/reason-details.module').then((m) => m.ReasonDetailsModule) },
      { path: 'newArrivalBannerDetails/:id', loadChildren: () => import('./new-arrival-banner-details/new-arrival-banner-details.module').then((m) => m.NewArrivalBannerDetailsModule) },
      { path: 'footerFeatureDetails/:id', loadChildren: () => import('./footer-feature-details/footer-feature-details.module').then((m) => m.FooterFeatureDetailsModule) },
      { path: 'footerDetails/:id', loadChildren: () => import('./footer-details/footer-details.module').then((m) => m.FooterDetailsModule) },
      { path: 'couponDetails/:id', loadChildren: () => import('./coupon-details/coupon-details.module').then((m) => m.CouponDetailsModule) },
      { path: 'addressStoreDetails/:id', loadChildren: () => import('./address-store-details/address-store-details.module').then((m) => m.AddressStoreDetailsModule) },
      { path: 'aboutBannerDetails/:id', loadChildren: () => import('./about-banner-details/about-banner-details.module').then((m) => m.AboutBannerDetailsModule) },
      { path: 'aboutFooterBannerDetails/:id', loadChildren: () => import('./about-footer-banner-details/about-footer-banner-details.module').then((m) => m.AboutFooterBannerDetailsModule) },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
