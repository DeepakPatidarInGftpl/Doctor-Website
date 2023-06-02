import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateTransportComponent } from './update-transport.component';

const routes: Routes = [
  {path:'',component:UpdateTransportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateTransportRoutingModule { }
