import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailspurchase-bill',
  templateUrl: './detailspurchase-bill.component.html',
  styleUrls: ['./detailspurchase-bill.component.scss']
})
export class DetailspurchaseBillComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private purchaseService: PurchaseServiceService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  purchaseBillDetail: any
  getdata() {
    this.purchaseService.getPurchaseBillById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.purchaseBillDetail = res
        // console.log(res);
      }
    })
  }
  goBack() {
    this.location.back();
  }
}

