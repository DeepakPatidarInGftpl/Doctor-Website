import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { saveAs } from 'file-saver';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { ToastrService } from 'ngx-toastr';
import { Observable, map, startWith } from 'rxjs';
import * as XLSX from 'xlsx';
import html2canvas from 'html2canvas';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { ReportService } from 'src/app/Services/report/report.service';

@Component({
  selector: 'app-customer-wise-sale-order',
  templateUrl: './customer-wise-sale-order.component.html',
  styleUrls: ['./customer-wise-sale-order.component.scss']
})
export class CustomerWiseSaleOrderComponent implements OnInit {
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

  constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService, private transactionService: TransactionService, private purchaseService: PurchaseServiceService, private cs: CompanyService, private datepipe: DatePipe, private reportService: ReportService) {
  }
  //Customer Wise Sale Order form
    customerWiseSaleOrderForm!: FormGroup;
  startDate: any;
  endDate: any;
  customerWiseSaleOrderUserId: any;
     customerWiseSaleOrderList: any;


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

    // Customer Wise Sale form
    this.customerWiseSaleOrderForm = new FormGroup({
      start: new FormControl(formattedStartDate),
      end: new FormControl(formattedToday),
      user_id: new FormControl(),
    });
    this.startDate = this.customerWiseSaleOrderForm.value?.start;
    this.endDate = this.customerWiseSaleOrderForm.value?.end;
    this.customerWiseSaleOrderUserId = this.customerWiseSaleOrderForm.value?.user_id;

    this.getCustomerWiseSaleOrder();
    this.filteredSuppliers = this.supplierControl.valueChanges.pipe(
      startWith(''),
      map((value: any) => {
        const name = typeof value === 'string' ? value : value?.detail?.name;
        return name ? this._filter(name as string) : this.suppliers.slice();
      }),
    );
  }
  private formatDate(date: Date): string {
    return this.datepipe.transform(date, 'yyyy-MM-dd') || '';
  }

  private _filter(item_code: string): any[] {
    const filterValue = item_code ? item_code.toLowerCase() : '';
    console.log(filterValue);
    return this.suppliers.filter((option: any) => (option?.detail?.name.toLowerCase().includes(filterValue)) || (option?.detail?.company_name?.toLowerCase().includes(filterValue)) || (option?.account?.account_id?.toLowerCase().includes(filterValue)));
  }


  displayFn(user: any): string {
    return user && user?.detail?.company_name ? user?.detail?.company_name : '';
  }
  suppliers: any[] = [];

  search() {
    if (this.titlee === "") {
      this.getCustomerWiseSaleOrder();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.customerWiseSaleOrderList = this.  customerWiseSaleOrderList?.filter((res: any) => {
        const nameLower = res?.user?.party_name.toLocaleLowerCase();
        const usernameLower = res?.receipt_voucher_no.toLocaleLowerCase() || "";
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
  combinedList: any[] = [];
customerWiseSaleOrder:any[]=[]
getCustomerWiseSaleOrder() {
    this.reportService.getCustomerWiseSaleOrder(this.startDate, this.endDate, this.customerWiseSaleOrderUserId).subscribe((res) => {
      console.log(res);
      this.customerWiseSaleOrderList = res;
      this.customerWiseSaleOrder=res;
      this.customerWiseSaleOrder.map((res:any)=>{
        this.customerWiseSaleOrderList.push(res);
      })
// combine array of array object data into array of object 
      this.customerWiseSaleOrder.forEach((innerArray: any[]) => {
        this.combinedList = this.combinedList.concat(innerArray);
      });
      console.log(this.combinedList);
    })

  }
  

  // api call
  dataId: any;
  userName:any;
  oncheckAccount(data: any) {
    console.log(data);
    this.userName=data?.detail?.company_name
    this.dataId = data?.id;
   this.customerWiseSaleOrderForm.patchValue({user_id:this.dataId});
   console.warn(this.customerWiseSaleOrderForm.value);
   this.customerWiseSaleOrderUserId = this.customerWiseSaleOrderForm.value?.user_id;
   this?.getCustomerWiseSaleOrder();
  }
  getSelectedCustomerWiseSaleOrderDates() {
    console.log(this.customerWiseSaleOrderForm.value);
    const start = this.datepipe.transform(this.customerWiseSaleOrderForm.value.start, 'yyyy-MM-dd');
    const end = this.datepipe.transform(this.customerWiseSaleOrderForm.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.startDate = start;
    this.endDate = end;
    this?.getCustomerWiseSaleOrder();
  }

     // convert to pdf
UserName: any;
generatePDFAgain() {
  const doc = new jsPDF();
  const subtitle = 'PV';
  const title = 'Customer Wise Sale Order Report';
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
      ['#', 'Customer', 'Sale Order Date', 'Sale Order No. ','Total Qty','Total','Invoice Total Qty','Invoice Total Amount']
    ],
    body: this.combinedList.map((row:any, index:number ) => [
      index + 1,
      row.customer?.party_name,
      row.sale_order_date,
      row.sale_order_no,
      row.total_qty,
      row.total,
      row.invoice_detail?.total_qty,
      row.invoice_detail?.total_amount,
]),
theme: 'grid',
headStyles: {
  fillColor: [255, 159, 67]
},
startY: 25
});
  

  doc.save('Customer_wise_sale_Order.pdf');
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
      const fileName = 'saleSummary.xlsx';
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

    changePg(val: any) {
      console.log(val);
      if (val == -1) {
        this.itemsPerPage = this.combinedList?.length;
      }
    }
  }
