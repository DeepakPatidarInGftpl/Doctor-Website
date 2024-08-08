import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-details-reciept-voucher',
  templateUrl: './details-reciept-voucher.component.html',
  styleUrls: ['./details-reciept-voucher.component.scss']
})
export class DetailsRecieptVoucherComponent implements OnInit {

  userDetails: any;
  constructor(private Arout: ActivatedRoute, private transactionService: TransactionService, private location: Location, private coreService: CoreService) { }
  id: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.coreService.profileDetails.subscribe((res)=> {
      this.userDetails = res;
    })
  }
  recieptVoucherDetail: any
  getdata() {
    this.transactionService.getRecieptVoucherById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.recieptVoucherDetail = res;
        this.filteredData = this.recieptVoucherDetail?.logs.slice(); // Initialize filteredData with the original data
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
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Approved')
    this.transactionService.receiptVoucherStatusUpdate(formData).subscribe((res)=> {
      console.log(res);
      this.getdata();
      let closeModal = <HTMLElement>document.querySelector('.closeApprovalModal');
      closeModal.click();
    })
  }

  reject() {
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Rejected')
    this.transactionService.receiptVoucherStatusUpdate(formData).subscribe((res)=> {
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
