import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StockMovementComponent } from './stock-movement.component';

const routes: Routes = [{
  path:'',component:StockMovementComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockMovementRoutingModule { }
