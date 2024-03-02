import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxWiseCreditNoteComponent } from './tax-wise-credit-note.component';

const routes: Routes = [{
  path:'',component:TaxWiseCreditNoteComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaxWiseCreditNoteRoutingModule { }
