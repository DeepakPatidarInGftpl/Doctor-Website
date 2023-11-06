import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  constructor(private contactService: ContactService, private Arout: ActivatedRoute, private router:Router ,private location: Location) { }
  
  userDetails: any;
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.contactService.getUserById(this.id).subscribe((res:any) => {
      if(res.id==this.id){
        this.userDetails = res;
        this.filteredData = this.userDetails?.logs.slice(); 
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
    let filteredData = this.userDetails?.logs.slice();
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
    this.router.navigate(['//places/citylist'], { state: { id: this.id } })
  }
}

