import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentTermsComponent } from './payment-terms.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData) {
  const permission = localStorageData;
  permission.map((res:any)=>{
    if(res.content_type.app_label === 'master' && res.content_type.model === 'paymentterms'){
      allowedRoles.push(res.codename);
    }
  });
} 
const routes: Routes = [
  {path:'',component:PaymentTermsComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_paymentterms', 'change_paymentterms', 'delete_paymentterms', 'view_paymentterms']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentTermsRoutingModule { }
