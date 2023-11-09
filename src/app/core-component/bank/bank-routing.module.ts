import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'addCompanyBank', loadChildren: () => import('./add-company-bank/add-company-bank.module').then((m) => m.AddCompanyBankModule) },
  { path: 'companyBank', loadChildren: () => import('./company-bank/company-bank.module').then((m) => m.CompanyBankModule) },
  { path: 'updateCompanyBank/:id', loadChildren: () => import('./update-company-bank/update-company-bank.module').then((m) => m.UpdateCompanyBankModule) },
  { path: 'detailsCompanyBank/:id', loadChildren: () => import('./details-company-bank/details-company-bank.module').then((m) => m.DetailsCompanyBankModule) },
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then((m) => m.PaymentModule) },

  { path: 'reciept', loadChildren: () => import('./list-reciept/list-reciept.module').then((m) => m.ListRecieptModule) },
  { path: 'addReciept', loadChildren: () => import('./receipt/receipt.module').then((m) => m.ReceiptModule) },
  { path: 'detailsReciept/:id', loadChildren: () => import('./details-reciept/details-reciept.module').then((m) => m.DetailsRecieptModule) },
 
  { path: 'expense', loadChildren: () => import('./list-expense/list-expense.module').then((m) => m.ListExpenseModule) },
  { path: 'purchase', loadChildren: () => import('./list-purchase/list-purchase.module').then((m) => m.ListPurchaseModule) },

 
 { path: 'addExpense', loadChildren: () => import('./expense/expense.module').then((m) => m.ExpenseModule) },
  { path: 'addPurchase', loadChildren: () => import('./purchase/purchase.module').then((m) => m.PurchaseModule) },
  { path: 'detailsPurchase/:id', loadChildren: () => import('./details-purchase/details-purchase.module').then((m) => m.DetailsPurchaseModule) },
  
  { path: 'detailsExpence/:id', loadChildren: () => import('./details-expence/details-expence.module').then((m) => m.DetailsExpenceModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BankRoutingModule { }
