import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  DatePipe, Location } from '@angular/common';
import { SalesService } from 'src/app/Services/salesService/sales.service';

import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';
@Component({
  selector: 'app-details-estimate',
  templateUrl: './details-estimate.component.html',
  styleUrls: ['./details-estimate.component.scss', '../commonDetails.scss'],
  providers : [DatePipe,PdfgenService]
})
export class DetailsEstimateComponent implements OnInit {

  constructor(
        private companyService: CompanyService,
        private Arout: ActivatedRoute,
        private saleService: SalesService,
        private location: Location,
        public _pdf : PdfgenService
      ) { }
  id: any;
  companyDetails: any;
  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  
  estimateDetail: any;
  totalmrp: any[] = [];
  totalMrp = 0;
  totalDiscount: any[] = [];
  discount = 0;
  totaldiscount = 0;
  totalItems: any;

  // loaderPdf = false;

  // pagesntions 
  p: number = 1
  pageSize: number = 10;
  itemsPerPage = 10;
  key = 'id';
  reverse: boolean = false;
  // tax
  calculateTax = 0;
  totalTax: any[] = [];

  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.companyService.getCompany().subscribe(res => {
      this.companyDetails = res[0];
    });

  }
  getdata() {
    this.saleService.getSalesEstimateById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.estimateDetail = res;
        // calculation
        this.totalItems = this.estimateDetail?.cart?.length;
        this.estimateDetail?.cart?.forEach((item: any) => {
          // discount
          let d: any = (item?.price * item?.discount) / 100;
          // console.log(item?.price?.toFixed(2) - d.toFixed(2));
          // this.discount = item?.price - d.toFixed(2);
          this.totaldiscount = 0;
          this.totalDiscount.push(d);
          // console.log(this.totalDiscount);
          this.totalDiscount?.forEach((number: any) => {
            this.totaldiscount += number;
          });
          // console.log(this.totaldiscount?.toFixed(2));

          // calulating tax
          let dis: any = (item?.price * item?.discount) / 100;
          // console.log(item?.price?.toFixed(2) - dis.toFixed(2));
          this.discount = item?.price - dis.toFixed(2);
          
          let taxPrice: any = this.discount - (this.discount * (100 / (100 + item?.tax)));
          // console.log(taxPrice, 'taxprice');
          this.totalTax.push(taxPrice || 0);
          // console.log(this.totalTax);  
          this.calculateTax = this.totaldiscount - taxPrice;
          // console.log(this.calculateTax);
          
          // mrp
          this.totalmrp.push(item?.price);
          this.totalMrp = 0;
          let total:any = 0;
          this?.totalmrp?.forEach((number: any) => {
            total += parseFloat(number);
          })
          this.totalMrp = total;
        });
        // address selected
        this.supplierAddress = res;

        this.supplierAddress?.customer?.detail?.address.map((res: any) => {
          if (res?.address_type == 'Billing') {
            this.selectedAddressBilling = res;
            // console.log('bii',this.selectedAddressBilling);
          } else if (res.address_type == 'Shipping') {
            this.selectedAddressShipping = res;
            // console.log(this.selectedAddressShipping);
          }
        })
      }
    })
  }
  goBack() {
    this.location.back();
  }


  generatePdf() {
let p : number = parseFloat(this.totalMrp +'')
  
    let arr2 = new Array() ;
 this.estimateDetail?.cart.forEach((cart : any,n : number) => {
  arr2.push([`${n+1}`,`${cart?.barcode?.sku}`,`${cart?.item_name}`,`${cart?.price}`, `${cart?.qty}`,`${cart?.discount ?? '' }`,`${cart?.tax ?? ''}`,`${cart?.total}`])
});
const obj = {
'Type' : 'ESTIMATE',
'Fist_date' : this.estimateDetail?.estimate_date,
'Secouand_date' : this.estimateDetail?.estimate_expiry_date,
'thead1' : ['Estimate No.','Party Name','Payment Terms','Sale Estimate Date','Estimate Expiry date'],
'tbody1' : [`${this.estimateDetail?.estimate_no}`,`${this.estimateDetail?.customer?.name+ ' (' + this.estimateDetail?.customer?.user_type + ')'}`,`${this.estimateDetail?.payment_terms?.title}`,`${this.estimateDetail?.estimate_date}`,`${this.estimateDetail?.estimate_expiry_date}`],
'table2head' : ['#','Barcode/SKU','Product Name','Price','QTY','Discount(%)','Tax(%)','Total'],
'foot2' : [
  [
    {
      content : 'Total',
      colSpan:3,
      styles: { halign: 'center' }
    },
    {
      content : `${p.toFixed(2)}`,
      styles: { halign: 'center' }
      
    },
    {
      content : `${this.estimateDetail?.total_qty}`,
      styles: { halign: 'center' }
      
    },
    {
      content : `${this.estimateDetail?.total_discount}%`,
      styles: { halign: 'center' }
      
    },
    {
      content : `${this.estimateDetail?.total_tax}%`,
      styles: { halign: 'center' }
      
    },
    {
      content : `${this.estimateDetail?.total}`,
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
      colSpan : 5,
    },
    {
      content : `Sub Total `,
      colSpan : 2,
      styles : {halign : 'right'}
    },
    {
      content : `${this.estimateDetail?.subtotal}`,
      colSpan : 1,
      styles : {halign : 'left'}
    }

  ],
  [
    {
      content : '',
      colSpan : 5,
      // styles : {halign : 'left'}
    },
   { content : 'Round Off ',
    colSpan : 2,
    styles : {halign : 'right'}
  },
   { content : `${this.estimateDetail?.roundoff}`,
    colSpan : 1,
    styles : {halign : 'left'}
  },
  ],
  [
    {
      content : '',
      colSpan : 5,
      styles : {halign : 'left'}
    },
   { content : 'Total ',
    colSpan : 2,
    styles : {halign : 'right'}
  },
   { content : `${this.estimateDetail?.total}`,
    colSpan : 1,
    styles : {halign : 'left'}
  },
  ],
  [
    {
      content : '',
    colSpan : 5,
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
  'address_line_2' : this.selectedAddressBilling?.address_line_2 ?? '' +' , ' +this.selectedAddressBilling?.city?.city ?? '',
  'address_line_3' : this.selectedAddressBilling?.state?.state  + ' , ' + this.selectedAddressBilling?.country?.country_name ,
  'phone' : this.estimateDetail?.customer?.phone_number ?? '',
  'email' : this.estimateDetail?.customer?.email ?? ''
},
'SHIPPING_ADDRESS' : {
  'address_line_1':  this.selectedAddressShipping?.address_line_1 ?? '',
  'address_line_2' : this.selectedAddressShipping?.address_line_2 ?? '' +' , ' +this.selectedAddressShipping?.city?.city ?? '',
  'address_line_3' : this.selectedAddressBilling?.state?.state + ' , ' + this.selectedAddressBilling?.country?.country_name  ,
  'phone' : this.estimateDetail?.customer?.phone_number ?? '',
  'email' : this.estimateDetail?.customer?.email ?? '',
},
'table2body' : arr2,
'order_no' : this.estimateDetail?.estimate_no,
}

 this._pdf.generatePdf(obj);


  }
 
  printForm(): void {
    const printContents = document.getElementById('debitNote').outerHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
  }
  
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }


  changePg(val: any) {
    // console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.estimateDetail?.logs?.length;
    }
  }
}

