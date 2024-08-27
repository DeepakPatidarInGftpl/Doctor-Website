import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';
@Component({
  selector: 'app-details-payment-voucher',
  templateUrl: './details-payment-voucher.component.html',
  styleUrls: ['./details-payment-voucher.component.scss'],
  providers : [DatePipe, PdfgenService]
})
export class DetailsPaymentVoucherComponent implements OnInit {
  userDetails: any;
  companyDetails:any;
  isSyncLoading = false;
  filteredData: any[]; 
  filterOpertion:any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage = 10;
  key = 'id';
  reverse: boolean = false;
  id: any;
  paymentVoucherDetail: any;
  public supplierAddress: any;
  public selectedAddressBilling: any;
  public selectedAddressShipping: any;
  constructor(private Arout: ActivatedRoute, private transactionService: TransactionService,public _pdf : PdfgenService ,public location: Location, private coreService: CoreService, private companyService: CompanyService ) { }
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
  
 private getdata() : void {
    this.transactionService.getPaymentVoucherById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.paymentVoucherDetail = res;
        this.filteredData = this.paymentVoucherDetail?.logs.slice(); // Initialize filteredData with the original data
        this.filterData(); 
        this.supplierAddress = res;
        }
    })
  }

  
  

  paidPaymentVoucher() {
    this.isSyncLoading = true;
    this.coreService.loaderBehaveSub.next(true);
    let id: any = Number(this.id)

    const formData = new FormData();
    formData.append('id', id)
    formData.append('status', 'Paid')

    this.transactionService.paymentVoucherStatusUpdate(formData).subscribe({
    next : () =>{
    setTimeout(() => {
      this.coreService.loaderBehaveSub.next(false);
      this.isSyncLoading = false;
      this.getdata();
      let closeModal = <HTMLElement>document.querySelector('.closePaidPaymentModal');
      closeModal.click();
    }, 500);
  },
  error : () =>{
    this.isSyncLoading = false;
    this.coreService.loaderBehaveSub.next(false);
  
  },
})


  }


  printForm(): void {
    const printContents = document.getElementById('debitNote').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }




  generatePdf() {
      
        let arr2 = new Array() ;
        let original_amount : number = 0;
        let paid_amount : number = 0;
        let pending_amount : number = 0;
        let payment : number = 0;

     this.paymentVoucherDetail?.payment_cart.forEach((cart : any,n : number) => {
      arr2.push([`${n+1}`,`${cart?.purchase_bill?.refrence_bill_no ?? ''}`,`${cart?.original_amount}`,`${cart?.paid_amount}`, `${cart?.pending_amount}`,`${cart?.payment ?? '' }`]);
      original_amount += cart?.original_amount;
      paid_amount += cart?.paid_amount;
      pending_amount += cart?.pending_amount;
      payment += cart?.payment;
    });
    const obj = {
    'Type' : 'Payment Voucher',
    'Fist_date' : this.paymentVoucherDetail?.date,
    // 'Secouand_date' : this.estimateDetail?.estimate_expiry_date,
    'thead1' : ['Supplier','Payment Type','Mode Type','Payment Account','Amount','Bank Payment','Description'],
    'tbody1' : [`${this.paymentVoucherDetail?.supplier?.company_name}`,`${this.paymentVoucherDetail?.payment_type}`,`${this.paymentVoucherDetail?.mode_type}`,`${this.paymentVoucherDetail?.payment_account?.company_name}`,`${this.paymentVoucherDetail?.amount}`,`${this.paymentVoucherDetail?.bank_payment}`,`${this.paymentVoucherDetail?.note}`],
    'table2head' : ['#','Sale Bill','Original Amount','Paid Amount','Pending Amount','Payment'],
    'foot2' : [
      [
        {
          content : 'Total',
          colSpan:2,
          styles: { halign: 'center' }
        },
        {
          content : `${original_amount}`,
          styles: { halign: 'center' }
          
        },
        {
          content : `${paid_amount}`,
          styles: { halign: 'center' }
          
        },
        {
          content : `${pending_amount}`,
          styles: { halign: 'center' }
          
        },
        {
          content : `${payment}`,
          styles: { halign: 'center' }
          
        }
      ],
      [
        {
          content : `Please notify us on any disrepancies within 3 days of receipt Overdue invoices will be charged 24% interest.`,
          colSpan : 8,
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
      'address_line_2' : this.selectedAddressBilling?.address_line_2 ?? '' +' , ' +this.selectedAddressBilling?.city?.city ?? '',
      'address_line_3' : this.selectedAddressBilling?.state?.state  + ' , ' + this.selectedAddressBilling?.country?.country_name ,
      // 'phone' : this.estimateDetail?.customer?.phone_number ?? '',
      // 'email' : this.estimateDetail?.customer?.email ?? ''
    },
    'SHIPPING_ADDRESS' : {
      'address_line_1':  this.selectedAddressShipping?.address_line_1 ?? '',
      'address_line_2' : this.selectedAddressShipping?.address_line_2 ?? '' +' , ' +this.selectedAddressShipping?.city?.city ?? '',
      'address_line_3' : this.selectedAddressBilling?.state?.state + ' , ' + this.selectedAddressBilling?.country?.country_name  ,
      // 'phone' : this.estimateDetail?.customer?.phone_number ?? '',
      // 'email' : this.estimateDetail?.customer?.email ?? '',
    },
    'table2body' : arr2,
    'order_no' : this.paymentVoucherDetail?.payment_voucher_no,
    }
    
     this._pdf.generatePdf(obj);
    
    
      }


  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
    // filter data
    
    filterData() {
      let filteredData = this.paymentVoucherDetail?.logs.slice();
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
      if (val == -1) {
        this.itemsPerPage = this.filteredData?.length;
      }
    }
}

