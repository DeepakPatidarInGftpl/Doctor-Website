import { Component,OnInit } from '@angular/core';
import { SettingsService } from './shared/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'template';
  public darkTheme: boolean = false;

  constructor(private settings: SettingsService,) { }

  ngOnInit(): void {
    this.settings.changeTheme.subscribe((res: any) => {
      if (res == 'Dark') this.darkTheme = true;
      else this.darkTheme = false;
    });
    // console.log(!!localStorage.getItem('token'));
  }
    login() {
    return !!localStorage.getItem('token');
  }

}
