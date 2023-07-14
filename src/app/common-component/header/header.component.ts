import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { AuthServiceService } from 'src/app/Services/auth-service.service';
import { SettingsService } from 'src/app/shared/settings/settings.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  activePath = '';
  showSearch: boolean = false;
  public changeLayout: string = '1';
  public darkTheme: boolean = false;
  public logoPath: string = '';

  constructor(private Router: Router, private settings: SettingsService, private authServ: AuthServiceService, private toastr: ToastrService,
    private coreService: CoreService
  ) {
    this.activePath = this.Router.url.split('/')[2];
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.activePath = data.url.split('/')[2];
      }
    });
    this.settings.changeLayout.subscribe((res: any) => {
      this.changeLayout = res;
    });
    this.settings.changeTheme.subscribe((res: any) => {
      if (res == 'Dark') {
        this.darkTheme = true;
        this.logoPath = 'assets/img/logo-white.png'
      } else {
        this.darkTheme = false;
        this.logoPath = 'assets/logo/favicon_icon.png'

      }
    });
  }

  ngOnInit(): void {
    this.LoadScript('assets/js/header.js');
    this.profile()
  }


  logOut() {
    console.log(localStorage.getItem('token'));

    if (localStorage.getItem('token')) {
      this.authServ.logout().subscribe(res => {
        console.log(res);
        this.toastr.success('LogOut Successfull');
        this.Router.navigate(['/auth/signin'])
        this.authServ.doLogout()
      }, (err: any) => {
        console.log(err.error.detail);
        if (err.error.detail) {
          localStorage.removeItem('token');
          this.toastr.success('LogOut Successfull');
          this.Router.navigate(['/auth/signin'])
        }
      })
    } else {
      localStorage.removeItem('token');
      this.toastr.success('LogOut Successfull');
      this.Router.navigate(['/auth/signin'])
    }

  }
  userDetails: any
  profile() {
    this.coreService.getProfile().subscribe(res => {
      this.userDetails = res;
    },err=>{
      console.log(err.error.detail=='Invalid token.');
      if(err.error.detail=='Invalid token.'){
        localStorage.clear();
        window.location.reload();
      }
    })
  }
  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}
