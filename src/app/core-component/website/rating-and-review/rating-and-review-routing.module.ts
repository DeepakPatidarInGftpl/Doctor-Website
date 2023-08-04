import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RatingAndReviewComponent } from './rating-and-review.component';
import { RolesGuardGuard } from 'src/app/guards/roles-guard.guard';

const localStorageData = JSON.parse(localStorage.getItem('auth'));
const allowedRoles: string[] = [];
if (localStorageData && localStorageData.permission) {
  const permission = localStorageData.permission;
  permission.map((res: any) => {
    if (res.content_type.app_label === 'product' && res.content_type.model === 'ratingandreviewsonproduct') {
      allowedRoles.push(res.codename);
    }
  });
}
const routes: Routes = [
  {path:'',component:RatingAndReviewComponent,canActivate:[RolesGuardGuard],data:{allowedRoles:['add_ratingandreviewsonproduct', 'change_ratingandreviewsonproduct', 'delete_ratingandreviewsonproduct', 'view_ratingandreviewsonproduct']}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RatingAndReviewRoutingModule { }
