import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-five',
  templateUrl: './sidebar-five.component.html',
  styleUrls: ['./sidebar-five.component.scss']
})
export class SidebarFiveComponent implements OnInit {
  opendSubMenu: Array<any> = [];

  constructor() { }

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
