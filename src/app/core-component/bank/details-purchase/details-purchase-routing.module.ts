import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsPurchaseComponent } from './details-purchase.component';

const routes: Routes = [
  {path:'',component:DetailsPurchaseComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsPurchaseRoutingModule { }
