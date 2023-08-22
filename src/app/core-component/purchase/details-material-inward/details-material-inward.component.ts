import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-details-material-inward',
  templateUrl: './details-material-inward.component.html',
  styleUrls: ['./details-material-inward.component.scss']
})
export class DetailsMaterialInwardComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private purchaseService: PurchaseServiceService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  materialDetail: any
  getdata() {
    this.purchaseService.getMaterialById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.materialDetail = res
        // console.log(res);
      }
    })
  }
  goBack() {
    this.location.back();
  }
}

