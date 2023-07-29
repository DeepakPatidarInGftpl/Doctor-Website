import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecieptComponent } from './reciept.component';

const routes: Routes = [
  {path:'',component:RecieptComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecieptRoutingModule { }
