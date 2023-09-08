import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCreditNoteComponent } from './add-credit-note.component';

const routes: Routes = [
  {path:'',component:AddCreditNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddCreditNoteRoutingModule { }
