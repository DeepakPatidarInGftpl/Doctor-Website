import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorDetailsComponent } from './color-details.component';

const routes: Routes = [
  {path:'',component:ColorDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColorDetailsRoutingModule { }
