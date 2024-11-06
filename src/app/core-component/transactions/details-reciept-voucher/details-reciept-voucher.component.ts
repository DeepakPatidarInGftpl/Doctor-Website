import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';


@Component({
  selector: 'app-details-reciept-voucher',
  templateUrl: './details-reciept-voucher.component.html',
  styleUrls: ['./details-reciept-voucher.component.scss'],
  providers : [DatePipe , PdfgenService]
})
export class DetailsRecieptVoucherComponent implements OnInit {
  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  userDetails: any;
  companyDetails:any;
  isSyncLoading = false;
  constructor(private Arout: ActivatedRoute,public _pdf : PdfgenService, private transactionService: TransactionService, public location: Location, private coreService: CoreService, private companyService: CompanyService) { }
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
    this.transactionService.getRecieptVoucherById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.recieptVoucherDetail = res;
        this.filteredData = this.recieptVoucherDetail?.logs.slice(); // Initialize filteredData with the original data
        this.filterData(); 



 // address selected
 this.supplierAddress = res;
 console.log('res',res)

 this.supplierAddress?.customer?.detail?.address.map((res: any) => {
  console.log('res',res)

   if (res?.address_type == 'Billing') {
     this.selectedAddressBilling = res;
     console.log('bii',this.selectedAddressBilling);
   } else if (res.address_type == 'Shipping') {
     this.selectedAddressShipping = res;
     console.log(this.selectedAddressShipping);
   }
 })


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




  generatePdf() {
    // let p : number = parseFloat(this.totalMrp +'')
      
        let arr2 = new Array() ;
     this.recieptVoucherDetail?.bill_cart.forEach((cart : any,n : number) => {
      arr2.push([`${n+1}`,`${cart?.sale_bill?.customer_bill_no}`,`${cart?.original_amount}`,`${cart?.paid_amount}`, `${cart?.pending_amount}`,`${cart?.payment ?? '' }`])
    });
    const obj = {
    'Type' : 'Reciept Voucher',
    'Fist_date' : this.recieptVoucherDetail?.date,
    // 'Secouand_date' : this.estimateDetail?.estimate_expiry_date,
    'thead1' : ['Payment Account','Receipt Type','Mode Type','Payer','Amount'],
    'tbody1' : [`${this.recieptVoucherDetail?.payment_account}`,`${this.recieptVoucherDetail?.receipt_type}`,`${this.recieptVoucherDetail?.mode_type}`,`${this.recieptVoucherDetail?.payer.account_id}`,`${this.recieptVoucherDetail?.amount}`],
    'table2head' : ['#','Sale Bill','Original Amount','Paid Amount','Pending Amount','Payment'],
    'foot2' : [
      // [
      //   {
      //     content : 'Total',
      //     colSpan:3,
      //     styles: { halign: 'center' }
      //   },
      //   {
      //     content : `${p.toFixed(2)}`,
      //     styles: { halign: 'center' }
          
      //   },
      //   {
      //     content : `${this.estimateDetail?.total_qty}`,
      //     styles: { halign: 'center' }
          
      //   },
      //   {
      //     content : `${this.estimateDetail?.total_discount}%`,
      //     styles: { halign: 'center' }
          
      //   },
      //   {
      //     content : `${this.estimateDetail?.total_tax}%`,
      //     styles: { halign: 'center' }
          
      //   },
      //   {
      //     content : `${this.estimateDetail?.total}`,
      //     styles: { halign: 'center' }
          
      //   }
       
      // ],
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
          content : ` `,
          colSpan : 1,
          styles : {halign : 'right'}
        },
        {
          content : ``,
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
       { content : ' ',
        colSpan : 1,
        styles : {halign : 'right'}
      },
       { content : ``,
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
       { content : '',
        colSpan : 1,
        styles : {halign : 'right'}
      },
       { content : ``,
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
       { content : '',
        colSpan : 1,
        styles : {halign : 'right'}
      },
       { content : ``,
        colSpan : 1,
        styles : {halign : 'left'}
      },
      ],
      [
        {
          content : '',
        colSpan : 4,
        },
        {
          content : '',
        colSpan : 2,
        },
      ]
    ],
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
    'table2body' : arr2,
    'order_no' : this.recieptVoucherDetail?.receipt_voucher_no,
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
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Received')
    this.transactionService.receiptVoucherStatusUpdate(formData).subscribe((res)=> {
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
    let id: any = Number(this.id)
    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Rejected')
    this.transactionService.receiptVoucherStatusUpdate(formData).subscribe((res)=> {
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
