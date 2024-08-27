import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe, Location } from '@angular/common';

import { StockService } from 'src/app/Services/stockService/stock.service';
import { ToastrService } from 'ngx-toastr';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
@Component({
  selector: 'app-stock-transfer-request-details',
  templateUrl: './stock-transfer-request-details.component.html',
  styleUrls: ['./stock-transfer-request-details.component.scss'],
  providers : [DatePipe, PdfgenService]
})
export class StockTransferRequestDetailsComponent implements OnInit {

 
  constructor(private companyService : CompanyService,private _dpipe : DatePipe,private Arout: ActivatedRoute, private toastr: ToastrService, private stockService: StockService, public location: Location, private _pdf : PdfgenService) { }
  id: any;
  printDetails: any;
  companyDetails : any;
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.getdata();
    this.companyService.getCompany().subscribe(res => {
      this.companyDetails = res[0];
    })
  }
  stockTransferRequestDetail: any
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
    this.stockService.getStockTransferRequestById(this.id).subscribe(res => {
      if (this.id == res.id) {
        this.stockTransferRequestDetail = res;

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
      this.stockTransferRequestDetail?.cart.forEach((cart : any,n : number) => {
       arr2.push([`${n+1}`,`${cart?.barcode?.sku ?? ''}`,`${cart?.barcode?.product_title ?? '' }`,`${cart?.quantity}`])
     });
     // table 3 data set 
      let arr3 = new Array() ;
      this.stockTransferRequestDetail?.logs.forEach((log : any,n : number) => {
       arr3.push([`${n+1}`,`${log?.userid ?? ''}`,`${log?.operation_type ?? '' }`,`${this._dpipe.transform(log?.date_time , 'dd-MM-yyyy hh:mm:ss a') ?? ''}`])
     });

     // table 3 show and hide 
    let shows : boolean = false;
    if(this.stockTransferRequestDetail?.logs?.length>0){
    shows = true;
    }
     const obj = {
      "show" : shows,
     'Type' : 'Stock Transfer Request',
     'Fist_date' : (this.stockTransferRequestDetail?.request_date == null) ? '' : this.stockTransferRequestDetail?.request_date,
     'thead1' : ['S.No.','Transfer Request Number No.','Transfer Request Date','From Branch','To Branch','Status'],
     'tbody1' : [
      '1',
      `${this.stockTransferRequestDetail?.transfer_request_number}`,
      `${this.stockTransferRequestDetail?.request_date ?? ''}`,
      `${ this.stockTransferRequestDetail?.from_branch?.title ?? ''}`,
      `${this.stockTransferRequestDetail?.to_branch?.title ?? ''}`,
      `${this.stockTransferRequestDetail?.status ?? '' }`
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
           content : `${this.stockTransferRequestDetail?.total_qty}`,
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
        { content : `${this.stockTransferRequestDetail?.total_product}`,
         colSpan : 1,
         styles : {halign : 'left'}
       },
       ],
       [
        { content : 'Total QTY ',
         colSpan : 3,
         styles : {halign : 'right'}
       },
        { content : `${this.stockTransferRequestDetail?.total_qty}`,
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
     'order_no' : this.stockTransferRequestDetail?.transfer_request_number,
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

  changeStatusRejected(type: any) {
    console.log(type);
    
    if (type == 'Rejected') {
      this.stockService.stockTransferRequestRejected(this.id).subscribe(res => {
        console.log(res);
        if (res.success) {
          this.toastr.success(res.msg);
          this.ngOnInit();
        } else {
          this.toastr.error(res.error);
        }
      })
    }else if(type == 'Dispatched'){
      this.stockService.stockTransferRequestDispatched(this.id).subscribe(res => {
        console.log(res);
        if (res.success) {
          this.toastr.success(res.msg);
          this.ngOnInit();
        } else {
          this.toastr.error(res.error);
        }
      })
    }else if(type == 'Received'){
      this.stockService.stockTransferRequestRecieved(this.id).subscribe(res => {
        console.log(res);
        if (res.success) {
          this.toastr.success(res.msg);
          this.ngOnInit();
        } else {
          this.toastr.error(res.error);
        }
      })
    }

  }
}

