import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';

import { StockService } from 'src/app/Services/stockService/stock.service';
import { ToastrService } from 'ngx-toastr';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
@Component({
  selector: 'app-stock-transfer-details',
  templateUrl: './stock-transfer-details.component.html',
  styleUrls: ['./stock-transfer-details.component.scss'],
  providers : [DatePipe, PdfgenService]
})
export class StockTransferDetailsComponent implements OnInit {

  constructor(private companyService: CompanyService,private Arout: ActivatedRoute,private _dpipe : DatePipe,private _pdf : PdfgenService ,private toastr:ToastrService, private stockService: StockService, public location: Location) { }
  id: any;
  printDetails: any;
  companyDetails: any;

  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();

    this.companyService.getCompany().subscribe(res => {
      this.companyDetails = res[0];
    })
  }
  stockTransferDetail: any
  totalPurchase: any[] = [];
  totalPurchaseRate = 0;
  totalmrp: any[] = [];
  totalMrp = 0;
  totallanding: any[] = [];
  totalLandingCost = 0;
  supplierAddress: any;
  selectedAddressBilling: any;
  selectedAddressShipping: any;
  getdata() {
    this.stockService.getStockTransferById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.stockTransferDetail = res;

        this.supplierAddress = res;
        console.log(this.supplierAddress);
        this.supplierAddress?.party?.address.map((res: any) => {
          if (res?.address_type == 'Billing') {
            this.selectedAddressBilling = res;
            console.log(this.selectedAddressBilling);
          } else if (res.address_type == 'Shipping') {
            this.selectedAddressShipping = res;
            console.log(this.selectedAddressShipping);
          }
        })
      }
    })
  }
  





  generatePdf() {
      // table 2 data set
        let arr2 = new Array() ;
        this.stockTransferDetail?.cart.forEach((cart : any,n : number) => {
         arr2.push([`${n+1}`,`${cart?.barcode?.sku ?? ''}`,`${cart?.barcode?.product_title ?? '' }`,`${cart?.quantity}`])
       });
       // table 3 data set 
        let arr3 = new Array() ;
        this.stockTransferDetail?.logs.forEach((log : any,n : number) => {
         arr3.push([`${n+1}`,`${log?.userid ?? ''}`,`${log?.operation_type ?? '' }`,`${this._dpipe.transform(log?.date_time , 'dd-MM-yyyy hh:mm:ss a') ?? ''}`])
       });

       // table 3 show and hide 
      let shows : boolean = false;
      if(this.stockTransferDetail?.logs?.length>0){
      shows = true;
      }
       const obj = {
        "show" : shows,
       'Type' : 'New Stock Transfer',
       'Fist_date' : (this.stockTransferDetail?.transfer_date == null) ? '' : this.stockTransferDetail?.transfer_date,
       'thead1' : ['S.No.','Transfer Number No.','Transfer Date','From Branch','To Branch','Status'],
       'tbody1' : [
        '1',
        `${this.stockTransferDetail?.transfer_number}`,
        `${this.stockTransferDetail?.transfer_date ?? ''}`,
        `${ this.stockTransferDetail?.from_branch?.title ?? ''}`,
        `${this.stockTransferDetail?.to_branch?.title ?? ''}`,
        `${this.stockTransferDetail?.status ?? '' }`
      ],
      'Thead3' : [['Sr. No.','User','Operation Type','Date Time']],
      'Tbody3' : arr3,
      'Tfoot3' : [[]],
       'table2head' : ['#','Barcode/SKU','Product Name','QTY'],
      'foot2' : [
         [
           {
             content : 'Total',
             colSpan:3,
             styles: { halign: 'center' }
           },
           {
             content : `${this.stockTransferDetail?.total_qty}`,
             styles: { halign: 'center' }
           }
         ],
         [
           {
             content : `Please notify us on any disrepancies within 3 days of receipt Overdue invoices will be charged 24% interest.`,
             colSpan : 15,
             styles : {halign : 'left'}
           }
         ],
         [
          { content : 'Total Product',
           colSpan : 3,
           styles : {halign : 'right'}
         },
          { content : `${this.stockTransferDetail?.total_product}`,
           colSpan : 1,
           styles : {halign : 'left'}
         },
         ],
         [
          { content : 'Total QTY ',
           colSpan : 3,
           styles : {halign : 'right'}
         },
          { content : `${this.stockTransferDetail?.total_qty}`,
           colSpan : 1,
           styles : {halign : 'left'}
         },
         ],
       ],
       'company_name' : this.companyDetails?.name,
       'company_gst' : this.companyDetails?.gst,
       'top_left_address_line1' : `${this.companyDetails?.address}, ${this.companyDetails?.city?.city}`,
       'top_left_address_line2' : `${this.companyDetails?.state?.state}, ${this.companyDetails?.country?.country_name}, ${this.companyDetails?.pincode}`,
       'top_left_phone' : this.companyDetails?.phone,
       'top_left_email' : this.companyDetails?.email,
       'BILLING_ADDRESS' : {
         'address_line_1' : this.selectedAddressBilling?.address_line_1 ?? '',
         'address_line_2' : this.selectedAddressBilling?.address_line_2 ?? '' +' , ' +(this.selectedAddressBilling?.city?.city == null) ? '' : this.selectedAddressBilling?.city?.city,
         'address_line_3' : this.selectedAddressBilling?.state?.state == null ? '' : this.selectedAddressBilling?.state?.state + ' , ' + this.selectedAddressBilling?.country?.country_name == null ? '' :this.selectedAddressBilling?.country?.country_name ,
         'phone' : this.selectedAddressBilling?.party?.mobile_no ?? '',
         'email' : this.selectedAddressBilling?.party?.email ?? ''
       },
       'SHIPPING_ADDRESS' : {
         'address_line_1':  this.selectedAddressShipping?.address_line_1 ?? '',
         'address_line_2' : this.selectedAddressShipping?.address_line_2 ?? '' +' , ' +(this.selectedAddressShipping?.city?.city == null) ? '' : this.selectedAddressShipping?.city?.city == null ,
         'address_line_3' : this.selectedAddressBilling?.state?.state == null ? '' : this.selectedAddressBilling?.state?.state  + ' , ' + this.selectedAddressBilling?.country?.country_name == null ? '' : this.selectedAddressBilling?.country?.country_name  ,
         'phone' : this.selectedAddressBilling?.party?.mobile_no ?? '',
         'email' : this.selectedAddressBilling?.party?.email ?? '',
       },
       'table2body' : arr2,
       'order_no' : this.stockTransferDetail?.transfer_number,
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
 changeStatus() {
    this.stockService.stockTransferrecieved(this.id).subscribe(res => {
      if(res.success){
        this.toastr.success(res.msg);
        this.ngOnInit();
      }else{
        this.toastr.error(res.err);
      }
    })
  }
}
