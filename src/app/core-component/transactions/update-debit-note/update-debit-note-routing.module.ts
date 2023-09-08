import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateDebitNoteComponent } from './update-debit-note.component';

const routes: Routes = [
  {path:'',component:UpdateDebitNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateDebitNoteRoutingModule { }
