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
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
@Component({
  selector: 'app-amount-wise-sale',
  templateUrl: './amount-wise-sale.component.html',
  styleUrls: ['./amount-wise-sale.component.scss']
})
export class AmountWiseSaleComponent implements OnInit {
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
  userName: any;
  amountWiseSaleList: any;

  constructor(
    private cs: CompanyService, private datepipe: DatePipe, private reportService: ReportService, private commonService: CommonServiceService,private coreService: CoreService) {
  }
  //Amount Wise Saleform
  amountWiseSaleform!: FormGroup;
  startDate: any;
  endDate: any;
  userDetails: any;
  financialYear!: string;
  minDate: Date;
  maxDate: Date;
  //23-5
  isAdmin = false;
  fyID: any;
  ngOnInit(): void {
    //23-5
    if (localStorage.getItem('financialYear')) {
      let fy = localStorage.getItem('financialYear');
      console.warn(JSON.parse(fy));
      let fyId = JSON.parse(fy);
      this.fyID = fyId;
    }

    this.financialYear = localStorage.getItem('financialYear');
    const { minDate, maxDate } = this.commonService.determineMinMaxDates(this.financialYear);
    this.minDate = minDate;
    this.maxDate = maxDate;
    this.cs.userDetails$.subscribe((res: any) => {
      this.isAdmin = res?.role == 'admin';
      this.getBranch();
    });
    //23
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      console.log(userDetails);
      this.userName = userDetails?.username
    });

    const today = new Date();

    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 14);

    const formattedStartDate = this.formatDate(startDate);
    const formattedToday = this.formatDate(today);

    // amountWiseSaleform
    this.amountWiseSaleform = new FormGroup({
      start: new FormControl(formattedStartDate, this.commonService.dateRangeValidator(this.financialYear)),
      end: new FormControl(formattedToday, this.commonService.dateRangeValidator(this.financialYear))
    });

    this.commonService.validateAndClearDates(this.amountWiseSaleform, this.minDate, this.maxDate);

    this.startDate = this.amountWiseSaleform.value?.start;
    this.endDate = this.amountWiseSaleform.value?.end;

    this.getamountWiseSale();
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
      this.getamountWiseSale();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.amountWiseSaleList = this.amountWiseSaleList.filter((res: any) => {
        const nameLower = res?.user?.party_name.toLocaleLowerCase();
        const usernameLower = res?.payment_voucher_no.toLocaleLowerCase() || "";
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
    this.countryList.forEach((f: any) => f.isSelected = !initChecked);
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
  amountWiseSale: any
  getamountWiseSale() {
    this.reportService.getAmountWiseSale(this.startDate, this.endDate, this.fyID, this.selectData).subscribe((res) => {
      console.log(res);
      this.amountWiseSale = res;
      this.amountWiseSaleList = res;
    })

  }

  // api call
  dataId: any;
  oncheckAccount(data: any) {
    console.log(data);
    this.dataId = data;
    this.amountWiseSaleform.patchValue({ user_id: this.dataId });
    console.warn(this.amountWiseSaleform.value);
    this?.getamountWiseSale();
  }

  getSelectedAmountWiseSaleDates() {
    console.log(this.amountWiseSaleform.value);
    const start = this.datepipe.transform(this.amountWiseSaleform.value.start, 'yyyy-MM-dd');
    const end = this.datepipe.transform(this.amountWiseSaleform.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.startDate = start;
    this.endDate = end;
    this.getamountWiseSale();
  }



  // convert to pdf

async  generatePDFAgain() {
  

    
    const result :any = this.coreService.profileData$.value;
    const img :any = await this.cs.loadImageReport();
    const doc = new jsPDF('p', 'mm', 'a4');
    const printDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');


try {

     // Set up document
     doc.setFontSize(12);
     doc.setTextColor(33, 43, 54);
     doc.addImage(img, "PNG", 86, 5, 31, 10);
     doc.setFontSize(25);
     doc.text('Amount Wise Sale Report', 52, 25);
     // Add details
     doc.setFontSize(12);
     doc.text(`Business Location: ${result?.branch}`, 14, 39);
     doc.text(`From Date: ${this.formatDate(this.amountWiseSaleform.get('start').value)}`, 14, 45);
     doc.text(`User: ${result?.role}`, 172, 33);
     doc.text(`Print Date: ${printDate}`, 153, 39);
     doc.text(`To Date: ${this.formatDate(this.amountWiseSaleform.get('end').value)}`, 157, 45);
  
  const headers = ['#', 'Date', 'Total Sale', 'Start Amount', 'End Amount', 'Total'];
  const data: any = [];

  let customerIndex = 1;
  this.amountWiseSaleList.forEach((list: any) => {
    console.warn(list);

    const date = list.date;
    const total_sale = list.total_sale;
    let isFirstInvoice = true;
    list.amount_wise_data.forEach((res: any, index: number) => {
      console.log(res);

      const invoiceNumber = isFirstInvoice ? customerIndex : '';
      data.push([
        invoiceNumber, // row no of each cstmr
        isFirstInvoice ? date : '',
        isFirstInvoice ? total_sale : '',
        res.start_amount,
        res.end_amount,
        res[" total"]
      ]);
      isFirstInvoice = false;
    });
    customerIndex++;
  });
  autoTable(doc, {
    head: [headers],
    body: data,
    theme: 'grid',
    startY: 49,
    margin:{top:49},
    headStyles: {
      fillColor: [255, 159, 67], // Header color
      textColor: [255, 255, 255] // Header text color
    }
  });
  doc.save('Amount_Wise_Sale.pdf');
} catch (error) {
 console.log(error) 
}



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
    const fileName = 'amountWiseSale.xlsx';
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
      this.itemsPerPage = this.amountWiseSaleList?.length;
    }
  }
  //23-5
  branchList: any[] = [];
  filteredBranchList: any[] = [];
  searchBranch: string = '';
  getBranch() {
    this.reportService.getBranch().subscribe((res: any) => {
      this.branchList = res;
      this.filteredBranchList = [...this.branchList];
    });
  }
  filterBranch() {
    if (this.searchBranch.trim() === '') {
      this.filteredBranchList = [...this.branchList];
    } else {
      this.filteredBranchList = this.branchList.filter(feature =>
        feature.title.toLowerCase().includes(this.searchBranch.toLowerCase())
      );
    }
  }
  // add remove branch 
  searchVariant = ''
  selectData: any[] = [];
  selectedCategoryIds: any[] = []
  SelectedBranch(variant: any, event: any) {
    if (event) {
      console.log(variant);
      this.selectData.push(variant)
      console.log(this.selectData, 'selected data');
      //close dropdown 
      this.searchVariant = '';
      this.ngOnInit();
    } else {
      const selectedIndex = this.selectData.findIndex(item => item == variant);
      console.log(selectedIndex);
      if (selectedIndex !== -1) {
        this.selectData.splice(selectedIndex, 1);
      }
      this.ngOnInit();
      console.log(this.selectData);
    }
  }
  //23-5
}



