import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SizeDetailsComponent } from './size-details.component';

const routes: Routes = [
  {path:'',component:SizeDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SizeDetailsRoutingModule { }
