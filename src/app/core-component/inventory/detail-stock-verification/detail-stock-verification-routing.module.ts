import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailStockVerificationComponent } from './detail-stock-verification.component';

const routes: Routes = [
  {path:'',component:DetailStockVerificationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailStockVerificationRoutingModule { }
