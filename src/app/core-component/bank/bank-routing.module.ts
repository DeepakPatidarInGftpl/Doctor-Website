import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'addCompanyBank', loadChildren: () => import('./add-company-bank/add-company-bank.module').then((m) => m.AddCompanyBankModule) },
  { path: 'companyBank', loadChildren: () => import('./company-bank/company-bank.module').then((m) => m.CompanyBankModule) },
  { path: 'updateCompanyBank/:id', loadChildren: () => import('./update-company-bank/update-company-bank.module').then((m) => m.UpdateCompanyBankModule) },
  { path: 'detailsCompanyBank/:id', loadChildren: () => import('./details-company-bank/details-company-bank.module').then((m) => m.DetailsCompanyBankModule) },
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then((m) => m.PaymentModule) },
  { path: 'reciept', loadChildren: () => import('./receipt/receipt.module').then((m) => m.ReceiptModule) },
  { path: 'expense', loadChildren: () => import('./expense/expense.module').then((m) => m.ExpenseModule) },
  { path: 'purchase', loadChildren: () => import('./purchase/purchase.module').then((m) => m.PurchaseModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
