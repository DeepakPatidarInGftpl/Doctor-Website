import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockVerificationComponent } from './stock-verification.component';

const routes: Routes = [{
  path:'',component:StockVerificationComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockVerificationRoutingModule { }
