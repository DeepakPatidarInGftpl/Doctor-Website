import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditaccountComponent } from './editaccount.component';

const routes: Routes = [{path:'',component:EditaccountComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditaccountRoutingModule { }
