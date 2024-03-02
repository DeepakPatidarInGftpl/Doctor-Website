import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxWiseDebitNoteComponent } from './tax-wise-debit-note.component';

const routes: Routes = [{
  path:'',component:TaxWiseDebitNoteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxWiseDebitNoteRoutingModule { }
