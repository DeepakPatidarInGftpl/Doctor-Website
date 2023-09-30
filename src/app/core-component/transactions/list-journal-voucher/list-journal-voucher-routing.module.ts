import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListJournalVoucherComponent } from './list-journal-voucher.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const routes: Routes = [
  {path:'',component:ListJournalVoucherComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['view_journalvoucher']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListJournalVoucherRoutingModule { }
