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
  selector: 'app-purchase-overdue',
  templateUrl: './purchase-overdue.component.html',
  styleUrls: ['./purchase-overdue.component.scss']
})
export class PurchaseOverdueComponent implements OnInit {

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
    //Purchase overdue form
    purchaseOverDueform!: FormGroup;
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
  
      // purchase over due form
      this.purchaseOverDueform = new FormGroup({
        date: new FormControl(formattedStartDate),
      });
      this.date=this.purchaseOverDueform.value.date
      this.getPurchaseOverDue();
     
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
  purchaseOverDueList:any
  purchaseOverDue:any
    getPurchaseOverDue() {
      this.reportService.getPurchaseOverDue(this.date).subscribe((res:any) => {
        console.log(res?.successsalebill);
        this.purchaseOverDueList = res?.salebill;
        this.purchaseOverDue=res;
        console.log(this.purchaseOverDue?.Total_Overdue_Amount); 
        console.log(this.purchaseOverDueList);
 
      })
  
    }
    // api call
    getSelectedpurchaseOverDueDates(){
      console.log(this.purchaseOverDueform.value);
      const start = this.datepipe.transform(this.purchaseOverDueform.value.date, 'yyyy-MM-dd');
      console.log(start);
      this.date = start;
      this.getPurchaseOverDue();
    }
      // convert to pdf
      UserName: any;
   
      
      generatePDFAgain() {
        const doc = new jsPDF();
        const subtitle = 'PV';
        const title = 'Purchase Overdue Report';
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
            ['#', 'SupplierBill Date', 'Due Date','Supplier Bill No.','Pending Amount','Over Due Days']
          ],
          body: this.purchaseOverDueList.map((row:any, index:number ) => [
            index + 1,
            this.formatDate(row.supplier_bill_date),
            this.formatDate(row.due_date),
            row.supplier_bill_no,
            row.pending_amount,
            row.over_due_days
          ]),
          theme: 'grid',
          headStyles: {
            fillColor: [255, 159, 67]
          },
          startY: 25, // margin top 
      
      
        });
      
        doc.save('Purchase_Overdue .pdf');
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
        const fileName = 'purchaseOverdue.xlsx';
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
        //refresh
  window.addEventListener('afterprint', () => {
    console.log('afterprint');
   window.location.reload();
  });
  //end
        // Replace the content of the body with the combined content
        document.body.innerHTML = combinedContent;
        window.print();
      
        // Restore the original content of the body
        document.body.innerHTML = originalContents;
      }
      
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.purchaseOverDueList?.length;
    }
  }
    }
  