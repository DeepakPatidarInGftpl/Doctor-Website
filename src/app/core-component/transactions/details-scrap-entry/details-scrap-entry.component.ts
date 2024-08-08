import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
@Component({
  selector: 'app-details-scrap-entry',
  templateUrl: './details-scrap-entry.component.html',
  styleUrls: ['./details-scrap-entry.component.scss', '../../purchase/commonDetails.scss']
})
export class DetailsScrapEntryComponent implements OnInit {
  userDetails: any;
  companyDetails:any;
  constructor(private Arout: ActivatedRoute, private transactionService: TransactionService, private location: Location, private coreService: CoreService, private companyService: CompanyService) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.coreService.profileDetails.subscribe((res)=> {
      this.userDetails = res;
    })
    this.companyService.getCompany().subscribe(res=>{
      this.companyDetails=res[0];
    })
  }
  recieptVoucherDetail: any
  getdata() {
    this.transactionService.getScrapEntryById(this.id).subscribe((res:any) => {
      res.map((res:any)=>{
        if (this.id == res.id) {
          this.recieptVoucherDetail = res;
          console.log(this.recieptVoucherDetail);
          
          this.filteredData = this.recieptVoucherDetail?.logs.slice(); // Initialize filteredData with the original data
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

  getBadgeClass(status: string): string {
    switch (status) {
      case 'Pending':
        return 'pending-status-badge';
      case 'Approved':
        return 'approve-status-badge';
      case 'Rejected':
        return 'reject-status-badge';
      default:
        return '';
    }
  }

  approve() {
    let payload = {
      id: Number(this.id),
      status: 'Approved'
    }
    this.transactionService.scarpEntryStatusUpdate(payload).subscribe((res)=> {
      console.log(res);
      this.getdata();
      let closeModal = <HTMLElement>document.querySelector('.closeApprovalModal');
      closeModal.click();
    })
  }

  reject() {
    let payload = {
      id: Number(this.id),
      status: 'Rejected'
    }
    this.transactionService.scarpEntryStatusUpdate(payload).subscribe((res)=> {
      console.log(res);
      this.getdata();
      let closeModal = <HTMLElement>document.querySelector('.closeRejectModal');
      closeModal.click();
    })
  }

    // filter data
    filteredData: any[]; 
    filterOpertion:any;
    filterData() {
      let filteredData = this.recieptVoucherDetail?.logs.slice();
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

