import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubcategoryGroupComponent } from './subcategory-group.component';

const routes: Routes = [{ path: '', component: SubcategoryGroupComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class subCatRoutingModule { }
