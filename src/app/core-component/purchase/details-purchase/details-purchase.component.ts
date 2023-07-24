import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-purchase',
  templateUrl: './details-purchase.component.html',
  styleUrls: ['./details-purchase.component.scss']
})
export class DetailsPurchaseComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private purchaseService: PurchaseServiceService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  purchaseDetail: any
  getdata() {
    this.purchaseService.getPurchaseById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.purchaseDetail = res
        console.log(res);
      }
    })
  }
  goBack() {
    this.location.back();
  }
}
