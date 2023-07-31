import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsRecieptComponent } from './details-reciept.component';

const routes: Routes = [
  {path:'',component:DetailsRecieptComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsRecieptRoutingModule { }
