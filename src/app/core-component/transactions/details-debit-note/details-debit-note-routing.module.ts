import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsDebitNoteComponent } from './details-debit-note.component';

const routes: Routes = [
  {path:'',component:DetailsDebitNoteComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsDebitNoteRoutingModule { }
