import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSubcategoryGroupComponent } from './edit-subcategory-group.component';

const routes: Routes = [
  {path:'',component:EditSubcategoryGroupComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSubcategoryGroupRoutingModule { }
