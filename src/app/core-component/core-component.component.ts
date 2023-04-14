import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { SettingsService } from '../shared/settings/settings.service';

@Component({
  selector: 'app-core-component.',
  templateUrl: './core-component.component.html',
  styleUrls: ['./core-component.component.scss']
})
export class CoreComponentComponent implements OnInit {


  public sideBaractivePath: boolean = false;
  // public headeractivePath: boolean = false;
  public changeLayout: string = '1';

  constructor(private Router: Router, private settings: SettingsService) {
    this.getRoutes(this.Router
    )

    this.settings.changeLayout.subscribe((res: any) => {
      this.changeLayout = res;
    });
    this.Router.events.subscribe((data: any) => {
      if (data instanceof NavigationStart) {
        this.getRoutes(data)
      }
    });
  }
  ngOnInit(): void {
  }
  private getRoutes(data: any): void {
    $('div').removeClass('slide-nav');
    $('div').removeClass('opened');
    if (
      data.url.split('/')[1] === 'errorpages' ||
      data.url.split('/')[2] === 'pos' ||
      data.url.split('/')[1] === 'auth' ||
      data.url.split('/')[1] === 'pos' 
    ) {
      this.sideBaractivePath = true;
    } else {
      this.sideBaractivePath = false;
    }
    if (data.url.split('/')[2] === 'pos') {
      this.sideBaractivePath = true;
    }
    if(data.url.split('/')[1] === 'pos'){
      window.addEventListener('load', function () {
        let wrapper:any = document.getElementById('core-comp1');
        wrapper.classList.remove('content');      
      })
      
      // wrapper.classList.remove('content');
      // wrapper = wrapper[0];
      //$('#core-comp1').addClass('content1');

    }
  }
  ngAfterViewInit() {
    this.LoadScript('assets/js/script.js');
    this.LoadScript('assets/js/togglescript.js');
  }
  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
}
