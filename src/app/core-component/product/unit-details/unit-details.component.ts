import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.component.html',
  styleUrls: ['./unit-details.component.scss']
})
export class UnitDetailsComponent implements OnInit {


  constructor(private router:Router,private coreService: CoreService, private Arout: ActivatedRoute, private location: Location) { }
  employeeDetails: any;
  id: any;
  
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.coreService.getUnitsById(this.id).subscribe((res:any) => {
      res.map((res:any)=>{
        if(res.id==this.id){
          this.employeeDetails = res;
          this.filteredData = this.employeeDetails?.logs.slice(); // Initialize filteredData with the original data
          this.filterData(); 
        }
      })
     
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
    this.router.navigate(['//product/units'], { state: { id: this.id } })
  }
}
