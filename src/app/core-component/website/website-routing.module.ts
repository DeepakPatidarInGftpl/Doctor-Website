import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'staticPage', pathMatch: 'full' },
  {
    path: '', children: [
      { path: 'staticPage', loadChildren: () => import('./static-pages/static-pages.module').then((m) => m.StaticPagesModule) },
      { path: 'addStaticPage', loadChildren: () => import('./add-static-page/add-static-page.module').then((m) => m.AddStaticPageModule) },
      { path: 'updateStaticPage/:slug', loadChildren: () => import('./update-static-page/update-static-page.module').then((m) => m.UpdateStaticPageModule) },
      {path:'footerFeature',loadChildren:()=>import('./footer-features/footer-features.module').then((m)=>m.FooterFeaturesModule)},
      {path:'banner',loadChildren:()=>import('./banner/banner.module').then((m)=>m.BannerModule)}, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebsiteRoutingModule { }
