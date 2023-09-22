import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';

@Component({
  selector: 'app-details-material-outward',
  templateUrl: './details-material-outward.component.html',
  styleUrls: ['./details-material-outward.component.scss']
})
export class DetailsMaterialOutwardComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private saleService: SalesService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  returnBillDetail: any
  getdata() {
    this.saleService.getSalesMaterialOutwardById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.returnBillDetail = res
        // console.log(res);
      }
    })
  }
  goBack() {
    this.location.back();
  }
}
