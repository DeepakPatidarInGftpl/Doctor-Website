import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-details-debit-note',
  templateUrl: './details-debit-note.component.html',
  styleUrls: ['./details-debit-note.component.scss']
})
export class DetailsDebitNoteComponent implements OnInit {


  constructor(private transactionService: TransactionService, private Arout: ActivatedRoute,private location:Location) { }
  debitnoteDetails: any
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.transactionService.getDebitNoteById(this.id).subscribe(res=>{
      this.debitnoteDetails=res;
      this.filteredData = this.debitnoteDetails?.logs.slice(); // Initialize filteredData with the original data
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
      let filteredData = this.debitnoteDetails?.logs.slice();
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

