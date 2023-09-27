import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';
@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.scss']
})
export class SalesDetailsComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private saleService: SalesService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  orderDetail: any
  getdata() {
    this.saleService.getSalesOrderById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.orderDetail = res
        // console.log(res);
      }
    })
  }
  goBack() {
    this.location.back();
  }
}

