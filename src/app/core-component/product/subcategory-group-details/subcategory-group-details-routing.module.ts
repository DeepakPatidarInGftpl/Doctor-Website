import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoryGroupDetailsComponent } from './subcategory-group-details.component';

const routes: Routes = [{path:'',component:SubcategoryGroupDetailsComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubcategoryGroupDetailsRoutingModule { }
