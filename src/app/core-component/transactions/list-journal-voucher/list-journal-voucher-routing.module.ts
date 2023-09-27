import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListJournalVoucherComponent } from './list-journal-voucher.component';

const routes: Routes = [
  {path:'',component:ListJournalVoucherComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListJournalVoucherRoutingModule { }
