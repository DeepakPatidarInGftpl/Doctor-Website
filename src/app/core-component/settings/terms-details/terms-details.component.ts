import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

@Component({
  selector: 'app-terms-details',
  templateUrl: './terms-details.component.html',
  styleUrls: ['./terms-details.component.scss']
})
export class TermsDetailsComponent implements OnInit {

  constructor(private contactService: ContactService, private Arout: ActivatedRoute, private router:Router ,private location: Location) { }
  
  termsDetails: any;
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.contactService.getTermsById(this.id).subscribe((res:any) => {
      if(res.id==this.id){
        this.termsDetails = res;
        this.filteredData = this.termsDetails?.logs.slice(); 
        this.filterData(); 
      }
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
    let filteredData = this.termsDetails?.logs.slice();
    if (this.filterOpertion) {
      filteredData = filteredData.filter((item) => item?.operation_type === this.filterOpertion);
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.filterOpertion=null;
    this.filterData();
  }

  navigate(){
    this.router.navigate(['//settings/terms'], { state: { id: this.id } })
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData?.length;
    }
  }
}


