import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditwarehouseComponent } from './editwarehouse.component';

const routes: Routes = [{path:'',component:EditwarehouseComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditwarehouseRoutingModule { }
