import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsJournalVoucherComponent } from './details-journal-voucher.component';

const routes: Routes = [
  {path:'',component:DetailsJournalVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsJournalVoucherRoutingModule { }
