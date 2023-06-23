import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WebsiteService } from 'src/app/Services/website/website.service';

@Component({
  selector: 'app-details-trending-products',
  templateUrl: './details-trending-products.component.html',
  styleUrls: ['./details-trending-products.component.scss']
})
export class DetailsTrendingProductsComponent implements OnInit {


  constructor(private Arout: ActivatedRoute, private websiteService: WebsiteService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  trendingDetail: any
  getdata() {
    this.websiteService.getTrendingProductsById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.trendingDetail = res
        console.log(res);
      }
    })
  }
  goBack() {
    this.location.back();
  }
}


