import { DatePipe, Location } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PdfgenService } from 'src/app/Services/PdfGenrate/pdfgen.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

type addresss ={
  address_type : 'Billing' | 'Shipping',
  is_default : Boolean
}

@Component({
  selector: 'app-details-debit-note',
  templateUrl: './details-debit-note.component.html',
  styleUrls: ['./details-debit-note.component.scss'],
  providers :[DatePipe,PdfgenService]
})
export class DetailsDebitNoteComponent implements OnInit {

  
 public debitnoteDetails: any;
 public companyDetails:any;
 public id: any
 public supplierAddress: any;
 public selectedAddressBilling: any;
 public selectedAddressShipping: any;
 public p: number = 1
 public pageSize: number = 10;
 public itemsPerPage = 10;
 public key = 'id';
 public reverse: boolean = false;
 public filteredData: any[]; 
 public filterOpertion:any;
  constructor(private transactionService: TransactionService,private _pdf : PdfgenService ,private Arout: ActivatedRoute,public location:Location,private companyService: CompanyService) { }
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
     this.PageLoadData();
  }


private PageLoadData(){
  this.companyService.getCompany().subscribe(res=>{
    this.companyDetails=res[0];
  })
  this.transactionService.getDebitNoteById(this.id).subscribe(res=>{
    this.debitnoteDetails=res;
    this.filteredData = this.debitnoteDetails?.logs.slice(); // Initialize filteredData with the original data
    this.filterData(); 
    this.supplierAddress = res.party;
   let address = this._pdf.set_address(this.supplierAddress);
   address.fast_obj = this.selectedAddressShipping;
   address.secound_obj = this.selectedAddressBilling;
 })
  
}


  
  generatePdf() {
    const obj = {
    'Type' : 'Debit Note',
    'Fist_date' : this.debitnoteDetails?.date,
    'thead1' : ['Party Name','Purchase Bill','Reason','Amount','Tax','Total','Note'],
    'tbody1' : [`${this.debitnoteDetails?.party?.company_name}`,`${this.debitnoteDetails?.purchase_bill?.supplier_bill_no}`,`${this.debitnoteDetails?.reason}`,`${this.debitnoteDetails?.amount}`,`${this.debitnoteDetails?.tax ?? ''}%`,`${this.debitnoteDetails?.total}`,`${this.debitnoteDetails?.note}`],
    'table2head' : ['#','From Account','Amount Type','Amount'],
    'foot2' : [],
    'company_name' : this.companyDetails?.name,
    'company_gst' : this.companyDetails?.gst,
    'top_left_address_line1' : `${this.companyDetails?.address}, ${this.companyDetails?.city?.city}`,
    'top_left_address_line2' : `${this.companyDetails?.state?.state}, ${this.companyDetails?.country?.country_name}, ${this.companyDetails?.pincode}`,
    'top_left_phone' : this.companyDetails?.phone,
    'top_left_email' : this.companyDetails?.email,
    'BILLING_ADDRESS' : {
      'address_line_1' : this.selectedAddressBilling?.address_line_1 ?? '',
      'address_line_2' :  this.selectedAddressBilling?.address_line_2 +' ,' + this.selectedAddressBilling?.city?.city  ,
      'address_line_3' :  this.selectedAddressBilling?.state?.state  + ' , ' +  this.selectedAddressBilling?.country?.country_name ,
      'phone' : this.supplierAddress?.mobile_no ,
      'email' : this.supplierAddress?.email
    },
    'SHIPPING_ADDRESS' : {
      'address_line_1':  this.selectedAddressShipping?.address_line_1 ?? '',
      'address_line_2' : this.selectedAddressShipping?.address_line_2  +' , ' + this.selectedAddressShipping?.city?.city ,
      'address_line_3' : this.selectedAddressBilling?.state?.state + ' , ' + this.selectedAddressBilling?.country?.country_name  ,
      'phone' : this.supplierAddress?.mobile_no  ?? '',
      'email' : this.supplierAddress?.email ?? '',
    },
    'table2body' : new Array() ?? '',
    'order_no' : this.debitnoteDetails?.debit_note_no,
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


  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
  
    // filter data

    filterData() {
      let filteredData = this.debitnoteDetails?.logs.slice();
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

