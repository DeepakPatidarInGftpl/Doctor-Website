import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JournalBookComponent } from './journal-book.component';

const routes: Routes = [{
  path:'',component:JournalBookComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JournalBookRoutingModule { }
