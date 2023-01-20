import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SettingsService } from './shared/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'template';
  public darkTheme: boolean = false;

  constructor(private settings: SettingsService) {
    this.settings.changeTheme.subscribe((res: any) => {
      if (res == 'Dark') this.darkTheme = true;
      else this.darkTheme = false;
    });
    console.log(!!localStorage.getItem('token'));
  }

    login() {
    return !!localStorage.getItem('token');
    
    
  }
}
