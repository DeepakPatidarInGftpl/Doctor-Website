import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';

@Component({
  selector: 'app-details-target',
  templateUrl: './details-target.component.html',
  styleUrls: ['./details-target.component.scss']
})
export class DetailsTargetComponent implements OnInit {

  constructor(private Arout: ActivatedRoute, private hrmService: HrmServiceService,private location:Location) { }
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
  }

  ngAfterViewInit() {
    this.jquery("assets/plugins/owlcarousel/owl.carousel.min.js")
    this.LoadScript("assets/js/product-details.js")
  }
  jquery(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  LoadScript(js: string) {
    var script = document.createElement('script');
    script.src = js;
    script.async = false;
    document.body.appendChild(script);
  }
  targetDetail: any;
  getdata() {
    this.hrmService.getTargetById(this.id).subscribe(res => {
          this.targetDetail = res;
          this.filteredData = this.targetDetail?.logs.slice(); // Initialize filteredData with the original data
          this.filterData(); 
    })
  }

  goBack() {
    this.location.back();
  }

  p: number = 1
  pageSize: number = 10;
  itemsPerPage = 10;
  key = 'id';
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
  // filter data
  filteredData: any[]; 
  filterOpertion:any;
  filterData() {
    let filteredData = this.targetDetail?.logs.slice();
    if (this.filterOpertion) {
      filteredData = filteredData.filter((item) => item?.operation_type === this.filterOpertion);
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.filterOpertion=null;
    this.filterData();
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData?.length;
    }
  }
}

