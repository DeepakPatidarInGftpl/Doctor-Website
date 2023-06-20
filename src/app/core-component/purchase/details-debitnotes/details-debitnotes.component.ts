import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details-debitnotes',
  templateUrl: './details-debitnotes.component.html',
  styleUrls: ['./details-debitnotes.component.scss']
})
export class DetailsDebitnotesComponent implements OnInit {

  
  constructor(private Arout: ActivatedRoute, private purchaseService: PurchaseServiceService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  purchaseBillDetail: any
  getdata() {
    this.purchaseService.getDebitNotesById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.purchaseBillDetail = res
        console.log(res);
      }
    })
  }
  goBack() {
    this.location.back();
  }
}


