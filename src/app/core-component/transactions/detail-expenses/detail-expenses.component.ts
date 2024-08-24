import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';

type Billing_Type = {
  address_type : 'Billing' | 'Shipping' 
}
@Component({
  selector: 'app-detail-expenses',
  templateUrl: './detail-expenses.component.html',
  styleUrls: ['./detail-expenses.component.scss'],
  providers : [DatePipe, PdfgenService]
})
export class DetailExpensesComponent implements OnInit {
  userDetails: any;
  id: any;
  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  companyDetails:any;
  isSyncLoading = false;
  constructor(private Arout: ActivatedRoute,private _pdf : PdfgenService, private transactionService: TransactionService, public location: Location, private coreService: CoreService, private companyService: CompanyService) { }
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
  journelVoucherDetail: any;
  discount:any[]=[];
  totalDiscount=0;
  //tax
  tax:any[]=[];
  totalTax=0;
  getdata() {
    this.transactionService.getExpensVoucherById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.journelVoucherDetail = res;
        this.journelVoucherDetail?.cart.map((res:any)=>{
          //discount 
          this.discount.push(res?.discount);
          this.totalDiscount=0
          this?.discount?.forEach((number: any) => {
            this.totalDiscount += number;
          })
          //tax
          this.tax.push(res?.tax);
          this.totalTax=0
          this?.tax?.forEach((number: any) => {
            this.totalTax += number;
          })
        })
        this.filteredData = this.journelVoucherDetail?.logs.slice(); // Initialize filteredData with the original data
        this.filterData(); 



        // address selected
 this.supplierAddress = res;
 console.log('res',res)

 this.supplierAddress?.customer?.detail?.address.map((res: Billing_Type) => {
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


  generatePdf() {
    // let p : number = parseFloat(this.totalMrp +'')
      
        let arr2 = new Array() ;
     this.journelVoucherDetail?.cart.forEach((cart : any,n : number) => {
      arr2.push([`${n+1}`,`${cart?.account?.account_id}`,`${cart?.service_or_product}`,`${cart?.amount}`,`${cart?.discount}`,`${cart?.tax}`,`${cart?.tax_value}`,`${cart?.total}`,`${cart?.description}`])
    });
    const obj = {
    'Type' : 'Expense Voucher',
    'Fist_date' : this.journelVoucherDetail?.expense_date,
    // 'Secouand_date' : this.estimateDetail?.estimate_expiry_date,
    'thead1' : ['Party','Refrence Bill No.','Net Amount','Paid Amount','Roound Off','Tax Amount','Total Amount','Status','Reverse Charge','Description'],
    'tbody1' : [`${this.journelVoucherDetail?.party?.name}`,`${this.journelVoucherDetail?.refrence_bill_no}`,`${this.journelVoucherDetail?.net_amount}`,`${this.journelVoucherDetail?.paid_amount}`,`${this.journelVoucherDetail?.round_off ?? ''}`,`${this.journelVoucherDetail?.tax_amount}`,`${this.journelVoucherDetail?.total_amount}`,`${this.journelVoucherDetail?.status}`,`${this.journelVoucherDetail?.reverse_charge}`,`${this.journelVoucherDetail?.note}`],
    'table2head' : ['#','Account','Service/Product','Amount','Discount','Tax','Tax Value','Total','Description'],


    'foot2' : [
      [
        {
          content : 'Total',
          colSpan:3,
          styles: { halign: 'center' }
        },
        {
          content : `${this.journelVoucherDetail?.net_amount}`,
          styles: { halign: 'center' }
          
        },
        {
          content : `Total Debit ${this.totalDiscount}`,
          styles: { halign: 'center' }
          
        },
        {
          content : `${this.totalTax}%`,
          styles: { halign: 'center' }
          
        },
        {
          content : `${this.journelVoucherDetail?.tax_amount}%`,
          styles: { halign: 'center' }
          
        },
        {
          content : `${this.journelVoucherDetail?.total_amount}`,
          styles: { halign: 'center' }
          
        }
       
      ],
      [
        {
          content : `Please notify us on any disrepancies within 3 days of receipt Overdue invoices will be charged 24% interest.`,
          colSpan : 9,
          styles : {halign : 'left'}
        }
        
      ],
      
      [
        {
          content : '',
          colSpan : 6,
          // styles : {halign : 'left'}
        },
       { content : ' ',
        colSpan : 2,
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
          colSpan : 6,
          styles : {halign : 'left'}
        },
       { content : '',
        colSpan : 2,
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
          colSpan : 6,
          styles : {halign : 'left'}
        },
       { content : '',
        colSpan : 2,
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
        colSpan : 6,
        },
        {
          content : '',
        colSpan : 3,
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
    'order_no' : this.journelVoucherDetail?.expense_no,
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
    this.transactionService.expanseVoucherStatusUpdate(formData).subscribe((res)=> {
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
    this.transactionService.expanseVoucherStatusUpdate(formData).subscribe((res)=> {
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
      let filteredData = this.journelVoucherDetail?.logs.slice();
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
        this.itemsPerPage = this.journelVoucherDetail?.logs?.length;
      }
    }
}
