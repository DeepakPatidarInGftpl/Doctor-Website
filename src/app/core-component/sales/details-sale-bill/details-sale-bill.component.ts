import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';
@Component({
  selector: 'app-details-sale-bill',
  templateUrl: './details-sale-bill.component.html',
  styleUrls: ['./details-sale-bill.component.scss']
})
export class DetailsSaleBillComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private saleService: SalesService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  BillDetail: any
  getdata() {
    this.saleService.getSalesBillById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.BillDetail = res
        // console.log(res);
      }
    })
  }
  goBack() {
    this.location.back();
  }
}
