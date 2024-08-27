import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';
@Component({
  selector: 'app-details-scrap-entry',
  templateUrl: './details-scrap-entry.component.html',
  styleUrls: ['./details-scrap-entry.component.scss'],
  providers : [DatePipe, PdfgenService]
})
export class DetailsScrapEntryComponent implements OnInit,AfterViewInit {
  public userDetails: any;
  public companyDetails:any;
  public isSyncLoading = false;
  public supplierAddress: any;
  public selectedAddressBilling: any;
  public selectedAddressShipping: any;
  public id: any;
  constructor(private Arout: ActivatedRoute, private transactionService: TransactionService,public _pdf : PdfgenService ,public location: Location, private coreService: CoreService, private companyService: CompanyService) { }
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

ngAfterViewInit(): void {
  this.supplierAddress?.customer?.detail?.address.map((res: any) => {

    if (res?.address_type == 'Billing') {
      this.selectedAddressBilling = res;
      console.log('bii',this.selectedAddressBilling);
    } else if (res.address_type == 'Shipping') {
      this.selectedAddressShipping = res;
      console.log(this.selectedAddressShipping);
    }
   })
}
  recieptVoucherDetail: any
  getdata() {
    this.transactionService.getScrapEntryById(this.id).subscribe((res:any) => {
      console.log('res',res)
      res.map((res:any)=>{
        if (this.id == res.id) {
          this.recieptVoucherDetail = res;
          this.supplierAddress = res;
          this.filteredData = this.recieptVoucherDetail?.logs.slice(); // Initialize filteredData with the original data
          this.filterData(); 
        }
      })
     
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


  generatePdf() {
      
    
        let arr3 = new Array() ;
        let qut : number = 0;
     this.recieptVoucherDetail?.cart.forEach((cart : any,n : number) => {
      arr3.push([`${n+1}`,`${cart?.item_code}`,`${cart?.item_name}`,`${cart?.qty}`,`${cart?.unit}`,`${cart?.reason}`])
   qut += cart?.qty;
    });
    const obj = {
    'Type' : 'Scrap Entry',
    'Fist_date' : this.recieptVoucherDetail?.date,
    'thead1' : [],
    'tbody1' :  new Array() ?? '',
    'foot2' : [
      [
        {
          content : 'Total',
          colSpan:3,
          styles: { halign: 'center' }
        },
        {
          content : `${qut}`,
          styles: { halign: 'center' }
        },
        // {
        //   content : `${this.totalLandingCost}`,
        //   styles: { halign: 'center' }
          
        // },
       //  {
       //    content : `${this.returnBillDetail?.total_discount}%`,
       //    styles: { halign: 'center' }
          
       //  },
       //  {
       //    content : `${this.returnBillDetail?.total_tax}%`,
       //    styles: { halign: 'center' }
          
       //  },
       //  {
       //    content : `${this.returnBillDetail?.total}`,
       //    styles: { halign: 'center' }
          
       //  }
       
      ],
      [
        {
          content : `Please notify us on any disrepancies within 3 days of receipt Overdue invoices will be charged 24% interest.`,
          colSpan : 6,
          styles : {halign : 'left'}
        }
        
      ],
      [
        {
          content : ``,
          colSpan : 4,
        },
        {
          content : ``,
          colSpan : 1,
          styles : {halign : 'right'}
        },
        {
          content : '',
          colSpan : 1,
          styles : {halign : 'left'}
        }
    
      ],
      [
        {
          content : '',
          colSpan : 4,
          // styles : {halign : 'left'}
        },
       { content : '',
        colSpan : 1,
        styles : {halign : 'right'}
      },
       { content : '',
        colSpan : 1,
        styles : {halign : 'left'}
      },
      ],
      [
        {
          content : '',
          colSpan : 4,
          styles : {halign : 'left'}
        },
       { content : ' ',
        colSpan : 1,
        styles : {halign : 'right'}
      },
       { content : '',
        colSpan : 1,
        styles : {halign : 'left'}
      },
      ],
      [
        {
          content : '',
        colSpan :3,
        },
        {
          content : '',
        colSpan : 3,
        },
      ]
    ],

    'table2head' : ['#','SKU','Name','Quantity','Unit','Reason'],
    'table2body' :arr3 ?? '',
    'company_name' : this.companyDetails?.name,
    'company_gst' : this.companyDetails?.gst,
    'top_left_address_line1' : `${this.companyDetails?.address}, ${this.companyDetails?.city?.city}`,
    'top_left_address_line2' : `${this.companyDetails?.state?.state}, ${this.companyDetails?.country?.country_name}, ${this.companyDetails?.pincode}`,
    'top_left_phone' : this.companyDetails?.phone,
    'top_left_email' : this.companyDetails?.email,
    'BILLING_ADDRESS' : {
      'address_line_1' : this.selectedAddressBilling?.address_line_1 ?? '',
      'address_line_2' : this.selectedAddressBilling?.address_line_2 ?? '' +' , ' +(this.selectedAddressBilling?.city?.city == null) ? '' : this.selectedAddressBilling?.city?.city  ,
      'address_line_3' : (this.selectedAddressBilling?.state?.state == null) ? '' : this.selectedAddressBilling?.state?.state  + ' , ' + (this.selectedAddressBilling?.country?.country_name == null) ? '' : this.selectedAddressBilling?.country?.country_name ,
      // 'phone' : this.estimateDetail?.customer?.phone_number ?? '',
      // 'email' : this.estimateDetail?.customer?.email ?? ''
    },
    'SHIPPING_ADDRESS' : {
      'address_line_1':  this.selectedAddressShipping?.address_line_1 ?? '',
      'address_line_2' : this.selectedAddressShipping?.address_line_2 ?? '' +' , ' +(this.selectedAddressShipping?.city?.city == null) ? '' :this.selectedAddressShipping?.city?.city ,
      'address_line_3' : this.selectedAddressBilling?.state?.state + ' , ' + this.selectedAddressBilling?.country?.country_name  ,
      // 'phone' : this.estimateDetail?.customer?.phone_number ?? '',
      // 'email' : this.estimateDetail?.customer?.email ?? '',
    },
    'order_no' : this.recieptVoucherDetail?.voucher_no,
    }
    
     this._pdf.generatePdf(obj);
    
    
      }


  printForm() {
    const printContents = document.getElementById('debitNote').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
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

