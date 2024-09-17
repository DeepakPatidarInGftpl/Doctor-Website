import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { DynamicRolesGuardGuard } from '../guards/dynamic-roles-guard.guard';

const routes: Routes = [
  // { path: '', redirectTo: 'signin', pathMatch: 'full' },
  {
    path:'',
    children: [
      {
        path: 'signin',
        loadChildren: () =>
          import('./signin/signin.module').then((m) => m.SigninModule),
      },
      {
        path: 'signup',
        loadChildren: () =>
          import('./signup/signup.module').then((m) => m.SignupModule),
      },
      {
        path: 'forgetpassword',
      
        loadChildren: () =>
          import('./forgetpassword/forgetpassword.module').then(
            (m) => m.ForgetpasswordModule
          ),
      },
      {
        path: 'subscription',
        loadChildren: () =>
          import('./subscription/subscription.module').then(
            (m) => m.SubscriptionModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
