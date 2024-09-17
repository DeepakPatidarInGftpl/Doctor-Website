import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../Services/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard  {

  constructor(public authService: AuthServiceService, private router: Router, private toastr: ToastrService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      
    if (this.authService.isLoggedIn !== true ) {
            this.router.navigate(['/auth/signin'])
            
    }
    //  else  if(this.authService.isSubIn !== true){
    //   console.log('call gard')
    //   this.router.navigate(['/auth/scription']);
    // }
    
    
     
    return true;
  }
  
}
