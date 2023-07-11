import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDealerComponent } from './update-dealer.component';

const routes: Routes = [
  {path:'',component:UpdateDealerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDealerRoutingModule { }
