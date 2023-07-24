import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailTransportComponent } from './detail-transport.component';

const routes: Routes = [
  {path:'',component:DetailTransportComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailTransportRoutingModule { }
