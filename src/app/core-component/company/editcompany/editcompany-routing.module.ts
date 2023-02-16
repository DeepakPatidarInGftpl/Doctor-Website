import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditcompanyComponent } from './editcompany.component';

const routes: Routes = [{path:'',component:EditcompanyComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditcompanyRoutingModule { }
