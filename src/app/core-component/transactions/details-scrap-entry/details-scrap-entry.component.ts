import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-details-scrap-entry',
  templateUrl: './details-scrap-entry.component.html',
  styleUrls: ['./details-scrap-entry.component.scss']
})
export class DetailsScrapEntryComponent implements OnInit {
  userDetails: any;
  companyDetails:any;
  isSyncLoading = false;
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

  loaderPdf = false;
  async generatePdf() {
    console.log('generatePdf called');
    debugger
    this.loaderPdf = true;
    const elementToCapture = document.getElementById('debitNote');
    if (elementToCapture) {
      html2canvas(elementToCapture).then((canvas) => {
        this.loaderPdf = false;
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save('receiptVoucher.pdf');
      });
    }
  }

  printForm() {
    const printContents = document.getElementById('debitNote').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
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
    this.isSyncLoading = true;
    this.coreService.loaderBehaveSub.next(true);
    let payload = {
      id: Number(this.id),
      status: 'Approved'
    }
    this.transactionService.scarpEntryStatusUpdate(payload).subscribe((res)=> {
      console.log(res);
      setTimeout(() => {
        this.coreService.loaderBehaveSub.next(false);
        this.isSyncLoading = false;
        this.getdata();
        let closeModal = <HTMLElement>document.querySelector('.closeApprovalModal');
        closeModal.click();
      }, 500);
    }, (err) => {
      this.isSyncLoading = false;
      this.coreService.loaderBehaveSub.next(false);
    })
  }

  reject() {
    this.isSyncLoading = true;
    this.coreService.loaderBehaveSub.next(true);
    let payload = {
      id: Number(this.id),
      status: 'Rejected'
    }
    this.transactionService.scarpEntryStatusUpdate(payload).subscribe((res)=> {
      console.log(res);
      setTimeout(() => {
        this.coreService.loaderBehaveSub.next(false);
        this.isSyncLoading = false;
        this.getdata();
        let closeModal = <HTMLElement>document.querySelector('.closeRejectModal');
        closeModal.click();
      }, 500);
    }, (err) => {
      this.isSyncLoading = false;
      this.coreService.loaderBehaveSub.next(false);
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

