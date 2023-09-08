import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDebitNoteComponent } from './add-debit-note.component';

const routes: Routes = [
  {path:'',component:AddDebitNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddDebitNoteRoutingModule { }
