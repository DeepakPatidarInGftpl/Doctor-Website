import { DatePipe, Location } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-details-credit-note',
  templateUrl: './details-credit-note.component.html',
  styleUrls: ['./details-credit-note.component.scss'],
  providers :[DatePipe,PdfgenService]
})
export class DetailsCreditNoteComponent implements OnInit,AfterViewInit {
  constructor(private transactionService: TransactionService,private _pdf : PdfgenService ,private Arout: ActivatedRoute,public location:Location, private companyService: CompanyService) { }
 creditnoteDetails: any;
 companyDetails:any;
  id: any;
  public supplierAddress: any;
 public selectedAddressBilling: any;
 public selectedAddressShipping: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.companyService.getCompany().subscribe(res=>{
      this.companyDetails=res[0];
    })
    this.transactionService.getCreditNoteById(this.id).subscribe(res=>{
      this.creditnoteDetails=res;
      this.filteredData = this.creditnoteDetails?.logs.slice(); // Initialize filteredData with the original data
      this.filterData(); 
      this.supplierAddress = res;

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

  generatePdf() {
    // let p : number = parseFloat(this.totalMrp +'')
      
        let arr2 = new Array() ;
    //  this.journelVoucherDetail?.cart.forEach((cart : any,n : number) => {
    //   arr2.push([`${n+1}`,`${cart?.from_account?.company_name ?  cart?.from_account?.company_name :  cart?.from_account?.account_id}`,`${cart?.amount_type}`,`${cart?.amount}`])
    // });
    const obj = {
    'Type' : 'Credit Note',
    'Fist_date' : this.creditnoteDetails?.date,
    // 'Secouand_date' : this.estimateDetail?.estimate_expiry_date,
    'thead1' : ['Account','Sale Bill','Round Off','Tax','Total','Note'],
    'tbody1' : [`${this.creditnoteDetails?.account?.account_id}`,`${this.creditnoteDetails?.sale_bill_no?.customer_bill_no}`,`${this.creditnoteDetails?.reason}`,`${this.creditnoteDetails?.roundoff}`,`${ (this.creditnoteDetails?.tax == null) ? '' :this.creditnoteDetails?.tax }%`,`${this.creditnoteDetails?.total}`,`${(this.creditnoteDetails?.note == null ) ? '' : this.creditnoteDetails?.note}`],
    'table2head' : [],
    'foot2' : [
      // [
      //   {
      //     content : 'Total',
      //     colSpan:2,
      //     styles: { halign: 'center' }
      //   },
      //   {
      //     content : ``,
      //     styles: { halign: 'center' }
          
      //   },
      //   {
      //     content : ``,
      //     styles: { halign: 'center' }
          
      //   },
      //   // {
      //   //   content : `${this.estimateDetail?.total_discount}%`,
      //   //   styles: { halign: 'center' }
          
      //   // },
      //   // {
      //   //   content : `${this.estimateDetail?.total_tax}%`,
      //   //   styles: { halign: 'center' }
          
      //   // },
      //   // {
      //   //   content : `${this.estimateDetail?.total}`,
      //   //   styles: { halign: 'center' }
          
      //   // }
       
      // ],
      // [
      //   {
      //     content : `Please notify us on any disrepancies within 3 days of receipt Overdue invoices will be charged 24% interest.`,
      //     colSpan : 6,
      //     styles : {halign : 'left'}
      //   }
        
      // ],
      
      // [
      //   {
      //     content : '',
      //     colSpan : 4,
      //     // styles : {halign : 'left'}
      //   },
      //  { content : ' ',
      //   colSpan : 1,
      //   styles : {halign : 'right'}
      // },
      //  { content : ``,
      //   colSpan : 1,
      //   styles : {halign : 'left'}
      // },
      // ],
      // [
      //   {
      //     content : '',
      //     colSpan : 4,
      //     styles : {halign : 'left'}
      //   },
      //  { content : '',
      //   colSpan : 1,
      //   styles : {halign : 'right'}
      // },
      //  { content : ``,
      //   colSpan : 1,
      //   styles : {halign : 'left'}
      // },
      // ],
      // [
      //   {
      //     content : '',
      //     colSpan : 4,
      //     styles : {halign : 'left'}
      //   },
      //  { content : '',
      //   colSpan : 1,
      //   styles : {halign : 'right'}
      // },
      //  { content : ``,
      //   colSpan : 1,
      //   styles : {halign : 'left'}
      // },
      // ],
      // [
      //   {
      //     content : '',
      //   colSpan : 4,
      //   },
      //   {
      //     content : '',
      //   colSpan : 2,
      //   },
      // ]
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
    'table2body' : arr2 ?? '',
    'order_no' : this.creditnoteDetails?.credit_note_no,
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
      let filteredData = this.creditnoteDetails?.logs.slice();
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
