import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-two',
  templateUrl: './sidebar-two.component.html',
  styleUrls: ['./sidebar-two.component.scss'],
})
export class SidebarTwoComponent implements OnInit {
  opendSubMenu: Array<any> = [];
  public externalIcons:any={}
  constructor() {
   }

  ngOnInit(): void {}

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
