import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategorydetailsComponent } from './subcategorydetails.component';

const routes: Routes = [{path:'',component:SubcategorydetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategorydetailsRoutingModule { }
