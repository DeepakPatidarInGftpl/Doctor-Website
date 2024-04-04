import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-tax-details',
  templateUrl: './tax-details.component.html',
  styleUrls: ['./tax-details.component.scss']
})
export class TaxDetailsComponent implements OnInit {

 
  constructor(private coreService: CoreService, private Arout: ActivatedRoute, private location: Location,private router:Router) { }
  employeeDetails: any;
  id: any;
  
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.coreService.gettaxById(this.id).subscribe((res:any) => {
      res.map((res:any)=>{
        if(res.id==res.id){
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
    this.router.navigate(['//product/tax'], { state: { id: this.id } })
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData.length;
    }
  }
}

