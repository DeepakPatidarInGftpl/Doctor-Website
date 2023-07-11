import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDealerComponent } from './add-dealer.component';

const routes: Routes = [
  {path:'',component:AddDealerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDealerRoutingModule { }
