import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'debitnoteList',loadChildren:()=>import('./debit-note/debit-note.module').then((m)=>m.DebitNoteModule)},
  {path:'adddebitnote',loadChildren:()=>import('./add-debit-note/add-debit-note.module').then((m)=>m.AddDebitNoteModule)},
  {path:'updatedebitnote/:id',loadChildren:()=>import('./update-debit-note/update-debit-note.module').then((m)=>m.UpdateDebitNoteModule)},
  {path:'detailsdebitnote/:id',loadChildren:()=>import('./details-debit-note/details-debit-note.module').then((m)=>m.DetailsDebitNoteModule)},
  {path:'creditnoteList',loadChildren:()=>import('./credit-note/credit-note.module').then((m)=>m.CreditNoteModule)},
  {path:'addcreditnote',loadChildren:()=>import('./add-credit-note/add-credit-note.module').then((m)=>m.AddCreditNoteModule)},
  {path:'updatecreditnote/:id',loadChildren:()=>import('./update-credit-note/update-credit-note.module').then((m)=>m.UpdateCreditNoteModule)},
  {path:'detailscreditnote/:id',loadChildren:()=>import('./details-credit-note/details-credit-note.module').then((m)=>m.DetailsCreditNoteModule)},
  {path:'journalvoucherList',loadChildren:()=>import('./list-journal-voucher/list-journal-voucher.module').then((m)=>m.ListJournalVoucherModule)},
  {path:'addjournalvoucher',loadChildren:()=>import('./add-journal-voucher/add-journal-voucher.module').then((m)=>m.AddJournalVoucherModule)},
  {path:'updatejournalvoucher/:id',loadChildren:()=>import('./update-journal-voucher/update-journal-voucher.module').then((m)=>m.UpdateJournalVoucherModule)},
  {path:'detailsjournalvoucher/:id',loadChildren:()=>import('./details-journal-voucher/details-journal-voucher.module').then((m)=>m.DetailsJournalVoucherModule)},

  {path:'countravoucherList',loadChildren:()=>import('./list-countra-voucher/list-countra-voucher.module').then((m)=>m.ListCountraVoucherModule)},
  {path:'addcountravoucher',loadChildren:()=>import('./add-countra-voucher/add-countra-voucher.module').then((m)=>m.AddCountraVoucherModule)},
  {path:'updatecountravoucher/:id',loadChildren:()=>import('./update-countra-voucher/update-countra-voucher.module').then((m)=>m.UpdateCountraVoucherModule)},
  {path:'detailscountravoucher/:id',loadChildren:()=>import('./details-countra-voucher/details-countra-voucher.module').then((m)=>m.DetailsCountraVoucherModule)},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionsRoutingModule { }
