import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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

  constructor(private Router: Router, private settings: SettingsService, private authServ: AuthServiceService, private toastr: ToastrService) {
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
        this.logoPath = 'assets/img/logo.png'

      }
    });
  }

  ngOnInit(): void {
    this.LoadScript('assets/js/header.js');
  }


  logOut() {
    if(localStorage.getItem('token')){
      this.authServ.logout().subscribe(res => {
        console.log(res);
        this.toastr.success('LogOut Successfull');
        this.Router.navigate(['/auth/signin'])
        this.authServ.doLogout()
      })
    } else{
      localStorage.removeItem('token');
      this.toastr.success('LogOut Successfull');
      this.Router.navigate(['/auth/signin'])
    }
   
  }

  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}
