import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-feature-group-details',
  templateUrl: './feature-group-details.component.html',
  styleUrls: ['./feature-group-details.component.scss']
})
export class FeatureGroupDetailsComponent implements OnInit {

  constructor(private coreService: CoreService, private Arout: ActivatedRoute, private router:Router,private location: Location) { }
  employeeDetails: any;
  id: any;
  
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.coreService.getFeatureGroupById(this.id).subscribe(res => {
      this.employeeDetails = res;
      this.filteredData = this.employeeDetails?.logs.slice(); // Initialize filteredData with the original data
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
    let filteredData = this.employeeDetails?.logs.slice();
    if (this.filterOpertion) {
      filteredData = filteredData.filter((item) => item?.operation_type === this.filterOpertion);
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.filterOpertion=null;
    this.filterData();
  }
  navigate() {
    this.router.navigate(['//product/feature_group'], { state: { id: this.id } })
  }
}

