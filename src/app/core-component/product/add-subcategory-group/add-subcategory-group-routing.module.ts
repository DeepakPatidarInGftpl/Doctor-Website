import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSubcategoryGroupComponent } from './add-subcategory-group.component';

const routes: Routes = [
  {path:'',component:AddSubcategoryGroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddSubcategoryGroupRoutingModule { }
