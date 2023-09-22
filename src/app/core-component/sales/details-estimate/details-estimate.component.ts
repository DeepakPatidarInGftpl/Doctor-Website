import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';

@Component({
  selector: 'app-details-estimate',
  templateUrl: './details-estimate.component.html',
  styleUrls: ['./details-estimate.component.scss']
})
export class DetailsEstimateComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private saleService: SalesService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  estimateDetail: any
  getdata() {
    this.saleService.getSalesEstimateById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.estimateDetail = res
        // console.log(res);
      }
    })
  }
  goBack() {
    this.location.back();
  }
}

