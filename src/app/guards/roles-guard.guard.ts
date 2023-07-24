import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Auth, Permission } from '../interfaces/auth';
import { ToastrService } from 'ngx-toastr';
@Injectable({
  providedIn: 'root'
})
export class RolesGuardGuard implements CanActivate {
  constructor(private router: Router,private Arout:ActivatedRoute,private toastr:ToastrService) {
    // console.log(router); 
    // console.log(Arout);   
    // console.log(window.location.pathname);
     
   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const auth: Auth = JSON.parse(localStorage.getItem('auth'));

    if (auth && auth.user) {
      const allowedRoles = route.data['allowedRoles'] as string[];
      console.log(allowedRoles, 'allowedRoles');

      const hasPermission = auth.permission.some((permission: Permission) =>
        allowedRoles.includes(permission.codename)
      );
      console.log(hasPermission);
      if (hasPermission) {
        return true;
      }
    }

    // Redirect the user to a designated page if they don't have the required permission
    this.toastr.error('User have Not Permission to Access This page')
    this.router.navigate(['//errorpages/error500']);
    return false;
  }

}
