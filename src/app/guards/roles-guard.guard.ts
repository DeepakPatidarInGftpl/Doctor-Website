import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Auth, Permission } from '../interfaces/auth';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from '../Services/Companyservice/company.service';
import { CoreService } from '../Services/CoreService/core.service';
@Injectable({
  providedIn: 'root'
})
export class RolesGuardGuard  {
  userDetails: any
  constructor(private router: Router,private Arout:ActivatedRoute,private toastr:ToastrService,
    private profileService:CompanyService,private coreService:CoreService) {
    // console.log(router); 
    // console.log(Arout);   
    // console.log(window.location.pathname);   

   }
 
   permissions:any;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const auth: any = JSON.parse(localStorage.getItem('auth'));

    this.profileService.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      this.permissions = this.userDetails?.permission;
    });
// from localstorage
    if (auth) {
      const allowedRoles = route.data['allowedRoles'] as string[];
      // console.log(allowedRoles, 'allowedRoles');

      const hasPermission = auth.some((permission: Permission) =>
        allowedRoles.includes(permission.codename)
      );


      // get  profile data from a services store 

    let result : any =  this.coreService.profileData$.value;
 if (result && result.username) {
      this.userDetails = result;
      this.profileService.setUserDetails(this.userDetails); 
      this.profileService.ProfileData$.next(result)

      // permission lenghth increase or decrease then localstorage store data 
      const userDetails = result?.permission;
      const storedUserDetails = this.profileService.getUserDetails();
      if (!storedUserDetails || storedUserDetails.length !== userDetails.length) {
        this.profileService.setUserPermission(userDetails);
        window.location.reload();
      }
      //end
    }else{
      // call profile api
      this.coreService.getProfile().subscribe((res:any) => {
        this.userDetails = res;
        this.profileService.setUserDetails(this.userDetails); 
        this.profileService.ProfileData$.next(res)

        // permission lenghth increase or decrease then localstorage store data 
        const userDetails = res?.permission;
        const storedUserDetails = this.profileService.getUserDetails();
        if (!storedUserDetails || storedUserDetails.length !== userDetails.length) {
          this.profileService.setUserPermission(userDetails);
          window.location.reload();
        }
        //end
      })

    }

      //end
      // console.log(hasPermission);
      if (hasPermission) {
        return true;
      }
    }
    // console.log(this.permissions ,'permisiion guard');

    // dynamic data from profile api
    // if(this.permissions ){
    //   const allowedRoles = route.data['allowedRoles'] as string[];
    //   console.log(allowedRoles, 'allowedRoles,guard');
    //   const hasPermission = this.permissions.some((permission: Permission) =>
    //   // console.log(allowedRoles.includes(permission.codename),'ddddddddd') 
    //     allowedRoles.includes(permission.codename)
    //   );
    //   console.log(hasPermission);
    //   if (hasPermission) {
    //     return true;
    //   }
    // }

    // Redirect the user to a designated page if they don't have the required permission
    this.toastr.error('User have Not Permission to Access This page')
    // this.router.navigate(['//errorpages/error500']);
    this.router.navigate(['/dashboard'])
    return false;
  }

}
