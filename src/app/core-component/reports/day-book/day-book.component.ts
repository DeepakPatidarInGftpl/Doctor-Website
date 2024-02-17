import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';
import { Observable, map, startWith } from 'rxjs';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { ReportService } from 'src/app/Services/report/report.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-day-book',
  templateUrl: './day-book.component.html',
  styleUrls: ['./day-book.component.scss']
})
export class DayBookComponent implements OnInit {
  loader = true;
  id: any;

  titlee: any;
  p: number = 1
  itemsPerPage: number = 10;
  tableData: any;
  userName: any;
  date:any
  
  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService, private transactionService:TransactionService, private coreService:CoreService, private cs:CompanyService, private datepipe: DatePipe, private reportService:ReportService) {
  }
  //day book form
  dayBookform!: FormGroup;
  voucherType: any;
  accountId: any;
  userDetails: any;
  filteredSuppliers: Observable<any[]> | undefined;
  supplierControl: FormControl = new FormControl('');

  ngOnInit(): void {
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      console.log(userDetails);
      this.userName=userDetails?.username
    });
this.getAccount()
    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const startDate = new Date(today);
    const formattedStartDate = this.formatDate(startDate);
    const formattedToday = this.formatDate(today);

    // day book form
    this.dayBookform = new FormGroup({
      date: new FormControl(formattedStartDate),
      voucherType: new FormControl(''),
      accountId: new FormControl('')
    });
    this.date = this.dayBookform.value.date;
    this.voucherType = this.dayBookform.value.voucherType;
    this.accountId = this.dayBookform.value.account_Id;

    this.getDayBook();

    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const title = typeof value === 'string' ? value : value?.title;
        return title ? this._filter3(title as string) : this.accountList.slice();
      }),
    );
  }


  suppliers: any[] = [];
  private _filter(name: string): any[] {
    const filterValue = name.toLowerCase();
    console.log(filterValue);

    return this.suppliers.filter((option: any) => (option?.title.toLowerCase().includes(filterValue))(option?.title?.toLowerCase().includes(filterValue))(option?.title.toLowerCase().includes(filterValue)));
  }

  displayFn(user: any): string {
    return user && user?.title ? user?.title : '';
  }
 

  private formatDate(date: Date): string {
    return this.datepipe.transform(date, 'yyyy-MM-dd') || '';
  }

  key = 'id'
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse
  }

  //select table row
  allSelected: boolean = false;
  selectedRows: boolean[] = [];
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }
  calculateProductRange(currentPage: number, productsPerPage: number, totalProducts: number): string {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = Math.min(startIndex + productsPerPage - 1, totalProducts - 1);
    return `Showing ${startIndex + 1}–${endIndex + 1} of ${totalProducts} results`;
  }
  dayBookList: any
  dayBook: any
  getDayBook() {
    console.log(this.date);

    this.reportService.getDayBook(this.date, this.voucherType, this.accountId).subscribe((res: any) => {
      console.log(res);
      this.dayBookList = res;
      this.dayBook = res;


    })

  }
  // api call
  getSelecteddayBookDates() {
    console.log(this.dayBookform.value);
    const start = this.datepipe.transform(this.dayBookform.value.date, 'yyyy-MM-dd');
    console.log(start);
    this.date = start;
    this.getDayBook();
  }
  getSelecteddayBookVoucherType() {
    console.log(this.dayBookform.value);
    const type = this.dayBookform.value.voucherType;
    console.log(type);
    this.voucherType = type;
    this.getDayBook();
  }

  getSelectedAccount(data:any){
    console.log(data);
    console.log(this.dayBookform.value);
    this.dayBookform.patchValue({accountId:data});
    console.log(this.dayBookform.value);
    this.accountId = this.dayBookform.value.accountId;
    this.getDayBook();
  }
 
  isSearch=false
  userChange(data: any) {
    this.isSearch=true;
    if(data.toString().length>=2){
    console.warn(data);
    this.coreService.getAccount().subscribe((res:any)=>{
      console.warn(res?.data); 
      this.suppliers = res?.data;
      this.isSearch=false;
      if(res?.data?.length>0){
        this.isSearch=false;
      }

    })
    }
  }
      // convert to pdf
      // UserName: any;
      generatePDF() {
        const doc = new jsPDF();
        const subtitle = 'Instant Light Ltd.';
        const title = 'Day Book Report';
        const heading2 = `Date Range From: ${this.date}`
        const heading = `User: ${this.userName}`;
      
        doc.setFontSize(12);
        doc.setTextColor(33, 43, 54);
        doc.text(subtitle, 86, 5);
        doc.text(title, 84, 10);
        doc.text(heading, 10, 18);
        doc.text(heading2, 10, 22)
      
        doc.text('', 10, 25); //,argin x, y
      
        autoTable(doc, {
          html: '#mytable',
          theme: 'grid',
          headStyles: {
            fillColor: [24, 129, 176]
          },
          startY: 25, // margin top 
        });
      
        doc.save('Day Book.pdf');
      }
      
      generatePDFAgain() {
        const doc = new jsPDF();
        const subtitle = 'Instant Light Ltd.';
        const title = 'Day Book Report';
        const heading2 = `Date Range From: ${this.date}`
        const heading = `User: ${this.userName}`;
      
        doc.setFontSize(12);
        doc.setTextColor(33, 43, 54);
        doc.text(subtitle, 86, 5);
        doc.text(title, 82, 10);
        doc.text(heading, 10, 18);
        doc.text(heading2, 10, 22)
      
        doc.text('', 10, 25); //,argin x, y
      
        // Pass tableData to autoTable
        autoTable(doc, {
          head: [
            ['#', 'Party','Date','Particulars', 'Voucher Type','Voucher No.','Description','Debit','Credit','Closing','Account Id']
          ],
          body: this.dayBookList.map((row:any, index:number ) => [
            index + 1,
            row.party,
            row.date,
            row.particulars,
            row.voucher_type,
            row.voucher_no,
            row.description,
            row.debit,
            row.credit,
            row.closing,
            row.account_id
          ]),
          theme: 'grid',
          headStyles: {
            fillColor: [24, 129, 176]
          },
          startY: 25, // margin top 
      
      
        });
      
        doc.save('Day_Book.pdf');
      } 
    
      // excel export only filtered data
      getVisibleDataFromTable(): any[] {
        const visibleData = [];
        const table = document.getElementById('mytable');
        if (table) {
          const headerRow = table.querySelector('thead tr');
          if (headerRow) {
            const headerData: string[] = [];
            headerRow.querySelectorAll('th').forEach(cell => {
              const columnHeader = cell.textContent?.trim(); // Add null check here
              if (columnHeader && columnHeader !== 'Is Active' && columnHeader !== 'Action') {
                headerData.push(columnHeader);
              }
            });
            visibleData.push(headerData);
          }
      
          // Include visible data rows
          const dataRows = table.querySelectorAll('tbody tr');
          dataRows.forEach(row => {
            const rowData: string[] = [];
            row.querySelectorAll('td').forEach(cell => {
              const cellData = cell.textContent?.trim(); // Add null check here
              if (cellData) {
                rowData.push(cellData);
              }
            });
            visibleData.push(rowData);
          });
        }
        return visibleData;
      }
      
          // Modify your exportToExcel() function
      exportToExcel(): void {
        const visibleDataToExport = this.getVisibleDataFromTable();
        const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(visibleDataToExport);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        // Create a Blob from the workbook and initiate a download
        const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const fileName = 'DayBook.xlsx';
        saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
      }
    
      printTable(): void {
        // Get the table element and its HTML content
        const tableElement = document.getElementById('mytable');
        if (!tableElement) {
          console.error("Table element with ID 'mytable' not found.");
          return;
        }
      
        const tableHTML = tableElement.outerHTML;
      
        // Get the title element and its HTML content
        const titleElement = document.querySelector('.titl');
        if (!titleElement) {
          console.error("Title element with class 'titl' not found.");
          return;
        }
      
        const titleHTML = titleElement.outerHTML;
      
        // Clone the table element to manipulate
        const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
    
      
        // Get the modified table's HTML content
        const modifiedTableHTML = clonedTable.outerHTML;
      
        // Apply styles to add some space from the top after the title
        const styledTitleHTML = `<style>.spaced-title { margin-top: 80px; }</style>` + titleHTML.replace('titl', 'spaced-title');
      
        // Combine the title and table content
        const combinedContent = styledTitleHTML + modifiedTableHTML;
      
        // Store the original contents
        const originalContents = document.body.innerHTML;
      
        // Replace the content of the body with the combined content
        document.body.innerHTML = combinedContent;
        window.print();
      
        // Restore the original content of the body
        document.body.innerHTML = originalContents;
      }

 //product sub category
 private _filter3(title: string): any[] {
  const filterValue = title ? title.toLowerCase() : '';
  console.log(filterValue);
  return this.accountList.filter((option: any) =>
    (option?.title && option.title.toLowerCase().includes(filterValue))
  );
}
displayFn3(user: any): string {
  return user && user?.title ? user?.title : '';
}

      accountList: any[] = [];
      getAccount() {
        this.coreService.getAccount().subscribe((res: any) => {
          this.accountList = res;
        })
      }
    }
  





  

















  

