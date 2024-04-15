import { Component, OnInit } from '@angular/core';

import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { ReportService } from 'src/app/Services/report/report.service';
import * as XLSX from 'xlsx';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

@Component({
  selector: 'app-purchase-outstanding',
  templateUrl: './purchase-outstanding.component.html',
  styleUrls: ['./purchase-outstanding.component.scss']
})
export class PurchaseOutstandingComponent implements OnInit {
  loader = true;
  public tableData: any
  id: any;
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public countryList: any = [];

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;

  filteredSuppliers: Observable<any[]> | undefined;
  supplierControl: FormControl = new FormControl('');

  purchaseSummaryPaymentType: any;
  userName: any;

  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService, private contactService: ContactService, private purchaseService: PurchaseServiceService, private cs: CompanyService, private datepipe: DatePipe, private reportService: ReportService) {
  }
  //purchase summary form
  purchaseOutstandingform!: FormGroup;
  startDate: any;
  endDate: any;
  supplierId: any;
  purchaseOutstandingList: any;


  userDetails: any;
  ngOnInit(): void {
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      console.log(userDetails);
      this.userName = userDetails?.username
    });

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 14);

    const formattedStartDate = this.formatDate(startDate);
    const formattedToday = this.formatDate(today);

    // purchaseOutstandingform
    this.purchaseOutstandingform = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
      supplier_id: new FormControl(),
    });
    this.startDate = this.purchaseOutstandingform.value?.start;
    this.endDate = this.purchaseOutstandingform.value?.end;
    this.supplierId = this.purchaseOutstandingform.value?.supplier_id;

    this.getPurchaseOutstanding();
    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const name = typeof value === 'string' ? value : value?.name;
        return name ? this._filter(name as string) : this.suppliers.slice();
      }),
    );
    this.getSupplier();
  }
  private formatDate(date: Date): string {
    return this.datepipe.transform(date, 'yyyy-MM-dd') || '';
  }

  private _filter(name: string): any[] {
    const filterValue = name ? name.toLowerCase() : '';
    console.log(filterValue);
    return this.supplierList.filter((option: any) => (option?.name.toLowerCase().includes(filterValue)) || (option?.company_name?.toLowerCase().includes(filterValue)) );
  }


  displayFn(user: any): string {
    return user && user?.name ? user?.name : '';
  }
  suppliers: any[] = [];

  search() {
    if (this.titlee === "") {
      this.getPurchaseOutstanding();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.purchaseOutstandingList = this.purchaseOutstandingList.filter((res: any) => {
        const nameLower = res?.supplier_bill_no.toLocaleLowerCase();
        const usernameLower = res?.pending_amount.toLocaleLowerCase() || "";
        // return nameLower.includes(searchTerm);
        if (nameLower.includes(searchTerm) || usernameLower.includes(searchTerm)) {
          return true;
        }
        return false;
      });
    }
  }

  key = 'id'
  reverse: boolean = false;
  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse
  }

  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.countryList.forEach((f: any) => {
        f.isSelected = true
      })
    } else {
      this.countryList.forEach((f: any) => {
        f.isSelected = false
      })
    }
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
  purchaseOutstanding: any
  getPurchaseOutstanding() {
    this.reportService.getPurchaseOutstanding(this.startDate, this.endDate, this.supplierId).subscribe((res) => { 
   
        console.warn(res);
      this.purchaseOutstanding = res;
      this.purchaseOutstandingList = res?.purchasepill;
      console.log(this.purchaseOutstandingList);
     
    },err=>{
      this.toastr.error(err.message)
    })

  }

  // api call
  dataId: any;
  oncheckSupplier(data: any) {
    console.log(data);
    this.dataId = data;
    this.purchaseOutstandingform.patchValue({ supplier_id: this.dataId });
    console.warn(this.purchaseOutstandingform.value);
    this.supplierId = this.purchaseOutstandingform.value?.supplier_id;
    this?.getPurchaseOutstanding();
  }
  getSelectedPurchaseOutstandingDates() {
    console.log(this.purchaseOutstandingform.value);
    const start = this.datepipe.transform(this.purchaseOutstandingform.value.start, 'yyyy-MM-dd');
    const end = this.datepipe.transform(this.purchaseOutstandingform.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.startDate = start;
    this.endDate = end;
    this?.getPurchaseOutstanding();
  }
  supplierList: any[] = [];
  getSupplier() {
    this.contactService.getSupplier().subscribe((res: any) => {
      this.supplierList = res;
    })
  }
  // convert to pdf
  UserName: any;

  generatePDFAgain() {
    const doc = new jsPDF();
    const subtitle = 'PV';
    const title = 'Purchase Outstanding Report';
    const heading2 = `Date Range From: ${this.startDate} - ${this.endDate}`
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
        ['#', 'Bill Date', 'Due Date', 'Supplier Bill No.', 'Pending Amount', 'Note']
      ],
      body: this.purchaseOutstandingList.map((row: any, index: number) => [
        index + 1,
        this.formatDate(row.supplier_bill_date),
        this.formatDate(row.due_date),
        row.supplier_bill_no,
        row.pending_amount,
        row.note
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 25, // margin top 


    });

    doc.save('Purchase_outstanding.pdf');
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
    const fileName = 'purchaseSummary.xlsx';
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
      this.itemsPerPage = this.purchaseOutstandingList?.length;
    }
  }
}



