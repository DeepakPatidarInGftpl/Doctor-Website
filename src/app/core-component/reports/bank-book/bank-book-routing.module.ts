import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BankBookComponent } from './bank-book.component';

const routes: Routes = [{
  path:'',component:BankBookComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankBookRoutingModule { }
