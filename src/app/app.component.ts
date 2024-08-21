import { Component,OnInit } from '@angular/core';
import { SettingsService } from './shared/settings/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  public darkTheme: boolean = false;

  constructor(private settings: SettingsService,) { }

  ngOnInit(): void {
    this.settings.changeTheme.subscribe((res: any) => {
      (res == 'Dark') ? this.darkTheme = true : this.darkTheme = false

    });
  }
  // login() {
  //   return !!localStorage.getItem('token');
  // }

}
