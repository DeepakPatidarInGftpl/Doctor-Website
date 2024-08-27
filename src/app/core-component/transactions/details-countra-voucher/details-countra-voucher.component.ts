import { DatePipe, Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-details-countra-voucher',
  templateUrl: './details-countra-voucher.component.html',
  styleUrls: ['./details-countra-voucher.component.scss'],
  providers : [DatePipe, PdfgenService]
})
export class DetailsCountraVoucherComponent implements OnInit {

  constructor(private transactionService: TransactionService,private _pdf : PdfgenService, private Arout: ActivatedRoute,public location: Location, private companyService: CompanyService ) { }
  countraVooucherDetails: any;
  companyDetails:any;
  id: any;
  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.companyService.getCompany().subscribe(res=>{
      this.companyDetails=res[0];
    })
    this.transactionService.getCountraVoucherById(this.id).subscribe(res=>{
      this.countraVooucherDetails=res;
      this.filteredData = this.countraVooucherDetails?.logs.slice(); // Initialize filteredData with the original data
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
    // let p : number = parseFloat(this.totalMrp +'')
      
        let arr2 = new Array() ;
    //  this.journelVoucherDetail?.cart.forEach((cart : any,n : number) => {
    //   arr2.push([`${n+1}`,`${cart?.from_account?.company_name ?  cart?.from_account?.company_name :  cart?.from_account?.account_id}`,`${cart?.amount_type}`,`${cart?.amount}`])
    // });
    const obj = {
    'Type' : 'Countra Voucher',
    'Fist_date' : this.countraVooucherDetails?.date,
    // 'Secouand_date' : this.estimateDetail?.estimate_expiry_date,
    'thead1' : ['To Account','From Account','Countra Voucher No.','Amount','Date','Note'],
    'tbody1' : [`${this.countraVooucherDetails?.to_account?.company_name ? this.countraVooucherDetails?.to_account?.company_name :this.countraVooucherDetails?.to_account?.account_id}`,`${this.countraVooucherDetails?.from_account?.company_name ? this.countraVooucherDetails?.from_account?.company_name :this.countraVooucherDetails?.from_account?.account_id}`,`${this.countraVooucherDetails?.countra_voucher_no}`,`${this.countraVooucherDetails?.amount}`,`${this.countraVooucherDetails?.date ?? ''}`,`${this.countraVooucherDetails?.note}`],
    'table2head' : ['#','From Account','Amount Type','Amount'],
    'foot2' : [
      [
        {
          content : 'Total',
          colSpan:2,
          styles: { halign: 'center' }
        },
        {
          content : ``,
          styles: { halign: 'center' }
          
        },
        {
          content : ``,
          styles: { halign: 'center' }
          
        },
        // {
        //   content : `${this.estimateDetail?.total_discount}%`,
        //   styles: { halign: 'center' }
          
        // },
        // {
        //   content : `${this.estimateDetail?.total_tax}%`,
        //   styles: { halign: 'center' }
          
        // },
        // {
        //   content : `${this.estimateDetail?.total}`,
        //   styles: { halign: 'center' }
          
        // }
       
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
    'table2body' : arr2 ?? '',
    'order_no' : this.countraVooucherDetails?.countra_voucher_no,
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

    // filter data
    filteredData: any[]; 
    filterOpertion:any;
    filterData() {
      let filteredData = this.countraVooucherDetails?.logs.slice();
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

