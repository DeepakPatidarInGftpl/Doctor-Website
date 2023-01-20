import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-three',
  templateUrl: './sidebar-three.component.html',
  styleUrls: ['./sidebar-three.component.scss']
})
export class SidebarThreeComponent implements OnInit {
  opendSubMenu: Array<any> = [];
  public externalIcons:any={}
  constructor() {
   }

  ngOnInit(): void {
  }
  showMenu(val: string): void {
    if (this.opendSubMenu[0] != val) {
      this.opendSubMenu[0] = val;
    } else {
      this.opendSubMenu[0] = '';
    }
  }

  showSubMenu(val: string): void {
    if (this.opendSubMenu[1] != val) {
      this.opendSubMenu[1] = val;
    } else {
      this.opendSubMenu[1] = '';
    }
  }
}
