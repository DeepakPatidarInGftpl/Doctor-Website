import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';

@Component({
  selector: 'app-details-credit-note',
  templateUrl: './details-credit-note.component.html',
  styleUrls: ['./details-credit-note.component.scss']
})
export class DetailsCreditNoteComponent implements OnInit {
  constructor(private transactionService: TransactionService, private Arout: ActivatedRoute,private location:Location, private companyService: CompanyService) { }
 creditnoteDetails: any;
 companyDetails:any;
  id: any
  ngOnInit(): void {
    this.id = this.Arout.snapshot.paramMap.get('id');
    this.companyService.getCompany().subscribe(res=>{
      this.companyDetails=res[0];
    })
    this.transactionService.getCreditNoteById(this.id).subscribe(res=>{
      this.creditnoteDetails=res;
      this.filteredData = this.creditnoteDetails?.logs.slice(); // Initialize filteredData with the original data
      this.filterData(); 
    })
  }

  goBack() {
    this.location.back();
  }
  
  loaderPdf = false;
  async generatePdf() {
    this.loaderPdf = true;
    const elementToCapture = document.getElementById('debitNote');
    if (elementToCapture) {
      html2canvas(elementToCapture).then((canvas) => {
        this.loaderPdf = false;
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const width = pdf.internal.pageSize.getWidth();
        const height = pdf.internal.pageSize.getHeight();
        pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
        pdf.save('creditNoteVoucher.pdf');
      });
    }
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
