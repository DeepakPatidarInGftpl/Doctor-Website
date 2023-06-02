import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTransportComponent } from './add-transport.component';

const routes: Routes = [
  {path:'',component:AddTransportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddTransportRoutingModule { }
