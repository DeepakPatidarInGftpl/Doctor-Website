import { Component, OnInit } from '@angular/core';
import { DoctorserviceService } from 'src/app/service/doctorservice.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
 carts:any[]=[];

  constructor(public _service : DoctorserviceService){
    
  }
  ngOnInit(): void {
    this.carts = this._service.cartData$()
    console.log(this.carts)
  }
}
