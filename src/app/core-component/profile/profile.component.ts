import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  password = 'password'
  show = false;


  constructor(private coreService: CoreService) { }
  userDetails: any;
  ngOnInit(): void {
    this.coreService.getProfile().subscribe(res => {
      this.userDetails = res
    })
  }


  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
}
