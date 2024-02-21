import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { ReportService } from 'src/app/Services/report/report.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-sale-overdue',
  templateUrl: './sale-overdue.component.html',
  styleUrls: ['./sale-overdue.component.scss']
})
export class SaleOverdueComponent implements OnInit {

  loader = true;
  id: any;

  titlee: any;
  p: number = 1
  itemsPerPage: number = 10;
  userName: any;
  startDate: any;
  endDate: any;
  
  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService, private transactionService: TransactionService, private purchaseService: PurchaseServiceService, private cs: CompanyService, private datepipe: DatePipe, private reportService: ReportService) {
  }
    //sale overdue form
    saleOverDueform!: FormGroup;
    date:any;
    userDetails: any;
    ngOnInit(): void {
      this.cs.userDetails$.subscribe((userDetails) => {
        this.userDetails = userDetails;
        console.log(userDetails);
        this.userName=userDetails?.username
      });
  
      const today = new Date();
      const month = today.getMonth();
      const year = today.getFullYear();
      const startDate = new Date(today);
      startDate.setDate(today.getDate() - 14);
  
      const formattedStartDate = this.formatDate(startDate);
      const formattedToday = this.formatDate(today);
  
      // sale over due form
      this.saleOverDueform = new FormGroup({
        date: new FormControl(formattedStartDate),
      });
      this.date=this.saleOverDueform.value.date
      this.getsaleOverDue();
     
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
  saleOverDueList:any
  saleOverDue:any
    getsaleOverDue() {
      this.reportService.getSaleOverDue(this.date).subscribe((res:any) => {
        console.log(res?.salebill);
        this.saleOverDueList = res?.salebill;
        this.saleOverDue=res;
        console.log(this.saleOverDue?.Total_Overdue_Amount);
        
      })
  
    }
    // api call
    getSelectedSaleOverDueDates(){
      console.log(this.saleOverDueform.value);
      const start = this.datepipe.transform(this.saleOverDueform.value.date, 'yyyy-MM-dd');
      console.log(start);
      this.date = start;
      this.getsaleOverDue();
    }
      // convert to pdf
      UserName: any;
      generatePDF() {
        const doc = new jsPDF();
        const subtitle = 'Instant Light Ltd.';
        const title = 'Sale Overdue Report';
        const heading2 = `Date Range From: ${this.date}`
        const heading = `User: ${this.userName}`;
      
        doc.setFontSize(12);
        doc.setTextColor(33, 43, 54);
        doc.text(subtitle, 86, 5);
        doc.text(title, 82, 10);
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
      
        doc.save('SaleOverdue.pdf');
      }
      
      generatePDFAgain() {
        const doc = new jsPDF();
        const subtitle = 'Instant Light Ltd.';
        const title = 'Sale Overdue Report';
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
            ['#', 'Bill Date', 'Due Date','Customer Bill No.','Pending Amount','Over Due Days']
          ],
          body: this.saleOverDueList.map((row:any, index:number ) => [
            index + 1,
            row.bill_date,
            row.due_date,
            row.customer_bill_no,
            row.pending_amount,
            row.over_due_days
          ]),
          theme: 'grid',
          headStyles: {
            fillColor: [24, 129, 176]
          },
          startY: 25, // margin top 
      
      
        });
      
        doc.save('Sale_Overdue .pdf');
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
        const fileName = 'SaleOverdue.xlsx';
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
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      
    
      
    
    
  
  
  
  

    
  
    
  
  

