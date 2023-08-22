import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { WebsiteService } from 'src/app/Services/website/website.service';

@Component({
  selector: 'app-details-dealof-the-day',
  templateUrl: './details-dealof-the-day.component.html',
  styleUrls: ['./details-dealof-the-day.component.scss']
})
export class DetailsDealofTheDayComponent implements OnInit {

 
  constructor(private Arout: ActivatedRoute, private websiteService: WebsiteService, private location: Location) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }
  dealodtheDayDetail: any
  getdata() {
    this.websiteService.getDealOfTheDayById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.dealodtheDayDetail = res
        // console.log(res);
      }
    })
  }
  goBack() {
    this.location.back();
  }
}