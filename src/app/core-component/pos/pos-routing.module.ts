import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosComponent } from './pos/pos.component';
import { InovoiceComponent } from './inovoice/inovoice.component';
const routes: Routes = [
  { path: '', children:[
    { path: '', component: PosComponent },
    { path: 'invoice/:id', component: InovoiceComponent }
  ] }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
