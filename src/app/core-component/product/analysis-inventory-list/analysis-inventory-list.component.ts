import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { DashboardService } from 'src/app/Services/DashboardService/dashboard.service';
@Component({
  selector: 'app-analysis-inventory-list',
  templateUrl: './analysis-inventory-list.component.html',
  styleUrls: ['./analysis-inventory-list.component.scss']
})
export class AnalysisInventoryListComponent implements OnInit {
  loader = true;
  id: any;

  titlee: any;
  p: number = 1
  itemsPerPage: number = 10;
  userName: any;
  
  constructor(private Arout: ActivatedRoute, private toastr: ToastrService,private cs: CompanyService, private datepipe: DatePipe, private dashboardService: DashboardService) {
  }
    //product Day Book form
    analysisForm!: FormGroup;
    startDate: any;
    endDate: any;
    userDetails: any;
    query:any;
    ngOnInit(): void {
     this.query= this.Arout.snapshot.paramMap.get('query');
      console.log(this.query);
      this.cs.userDetails$.subscribe((userDetails) => {
        this.userDetails = userDetails;
        console.log(userDetails);
        this.userName=userDetails?.username
      });
  
      const today = new Date();
      const startDate = new Date(today);
      startDate.setDate(today.getDate() - 14);
      const formattedStartDate = this.formatDate(startDate);
      const formattedToday = this.formatDate(today);
  
      // product DayBook form
      this.analysisForm = new FormGroup({
        start: new FormControl(formattedStartDate),
        end: new FormControl(formattedToday),
        
      });
      this.startDate = this.analysisForm.value?.start;
      this.endDate = this.analysisForm.value?.end;
      this.getproductDayBook();
     
    }
    // getproductDayBook() {
    //   throw new Error('Method not implemented.');
    // }
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
  productInventoryList:any
    getproductDayBook() {
      this.dashboardService.getAnalysisInventoryList(this.startDate, this.endDate).subscribe((res:any) => {
        if(this.query=='slow'){
          this.productInventoryList = res?.slow_product;
        } else if(this.query=='fast'){
          this.productInventoryList = res?.fast_product;
        }else if(this.query=='non'){
          this.productInventoryList = res?.non_product;
        }
      console.log(this.productInventoryList );   
      })
    }
  
    // api call
    getSelectedProductDayBookDates() {
      console.log(this.analysisForm.value);
      const start = this.datepipe.transform(this.analysisForm.value.start, 'yyyy-MM-dd');
      const end = this.datepipe.transform(this.analysisForm.value.end, 'yyyy-MM-dd');
      console.log(start);
      console.log(end);
      this.startDate = start;
      this.endDate = end;
      this?.getproductDayBook();
    }
    // convert to pdf
    generatePDF() {
      const doc = new jsPDF();
      const title = 'Inventory Analysis List';
      doc.setFontSize(15);
      doc.setTextColor(33, 43, 54);
      doc.text(title, 10, 10);
      autoTable(doc,
        {
          html: '#mytable',
          theme: 'grid',
          headStyles: {
            fillColor: [255, 159, 67]
          },
        })
      doc.save('inventoryAnalysis.pdf');
  
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
      const fileName = 'analysisInventory.xlsx';
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
      window.addEventListener('afterprint', () => {
        console.log('afterprint');
       window.location.reload();
      });
      // Replace the content of the body with the combined content
      document.body.innerHTML = combinedContent;
      window.print();
    
      // Restore the original content of the body
      document.body.innerHTML = originalContents;
    }
  }
