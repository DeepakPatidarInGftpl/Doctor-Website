import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-detail-material-consumption',
  templateUrl: './detail-material-consumption.component.html',
  styleUrls: ['./detail-material-consumption.component.scss']
})
export class DetailMaterialConsumptionComponent implements OnInit {
  userDetails: any;
  companyDetails:any;
  isSyncLoading = false;
  constructor(private transactionService: TransactionService, private Arout: ActivatedRoute,private location:Location, private coreService: CoreService, private companyService: CompanyService) { }
  consuptionDetail: any
  id: any
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

  goBack() {
    this.location.back();
  }

  getdata() {
    this.transactionService.getMaterialConsuptionById(this.id).subscribe(res=>{
      this.consuptionDetail=res;
      this.filteredData = this.consuptionDetail?.logs.slice(); // Initialize filteredData with the original data
      this.filterData(); 
    })
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
      let filteredData = this.consuptionDetail?.logs.slice();
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

    loaderPdf = false;
  async generatePdf() {
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
      let id: any = Number(this.id)
      const formData = new FormData();
      formData.append('id', id)
      formData.append('status', 'Approved')
      this.transactionService.materialConsumptionStatusUpdate(formData).subscribe((res)=> {
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
      let id: any = Number(this.id)
      const formData = new FormData();
      formData.append('id', id)
      formData.append('status', 'Rejected')
      this.transactionService.materialConsumptionStatusUpdate(formData).subscribe((res)=> {
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
        }
      )
    }
}

