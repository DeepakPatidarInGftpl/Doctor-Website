import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ReportService } from 'src/app/Services/report/report.service';
import { CommonServiceService } from 'src/app/Services/commonService/common-service.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { DatePipe } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-hsncode-wise-sale',
  templateUrl: './hsncode-wise-sale.component.html',
  styleUrls: ['./hsncode-wise-sale.component.scss']
})
export class HsncodeWiseSaleComponent implements OnInit {
  saleSummaryList :any[] = [];
  startDate ;
  endDate ;
  saleSummaryform: FormGroup;
  financialYear!: string;
  userDetails:any;
  fyID: any;
  constructor(

    private _reportService : ReportService,
    private commonService: CommonServiceService,
    private cs: CompanyService,
    private datepipe: DatePipe,
    private _coreService : CoreService 

  ) { }

  ngOnInit(): void {
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

    this.pageLoadData();


    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      console.log(userDetails);
      // this.userName = userDetails?.username
    });
    const today = new Date();
 
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 14);

    const formattedStartDate = this.formatDate(startDate);
    const formattedToday = this.formatDate(today);

    // salesummaryform
    this.saleSummaryform = new FormGroup({
      start: new FormControl(formattedStartDate, this.commonService.dateRangeValidator(this.financialYear)),
      end: new FormControl(formattedToday, this.commonService.dateRangeValidator(this.financialYear)),
      user_id: new FormControl(),
      payment_type: new FormControl('')
    });
    this.startDate = this.saleSummaryform.value.start;
    this.endDate = this.saleSummaryform.value.end;
  }


 async generatePDFAgain() {
    const result :any = this._coreService.profileData$.value;
    const img :any = await this.cs.loadImageReport();
    const doc = new jsPDF('p', 'mm', 'a4');
    const printDate = this.datepipe.transform(new Date(), 'yyyy-MM-dd');

    try {
         // Set up document
   doc.setFontSize(12);
   doc.setTextColor(33, 43, 54);
   doc.addImage(img, "PNG", 86, 5, 31, 10);
   doc.setFontSize(25);
   doc.text('Hsncode Wise Sale Report', 52, 25);
   // Add details
   doc.setFontSize(12);
   doc.text(`Business Location: ${result?.branch}`, 14, 39);
   doc.text(`From Date: ${this.formatDate(this.saleSummaryform.get('start').value)}`, 14, 45);
   doc.text(`User: ${result?.role}`, 172, 33);
   doc.text(`Print Date: ${printDate}`, 153, 39);
   doc.text(`To Date: ${this.formatDate(this.saleSummaryform.get('end').value)}`, 157, 45);
      autoTable(doc, {
        head: [
          ['#', 'Hsncode', 'Total Qty', 'Total Amount']
        ],
        body: this.saleSummaryList.map((row: any, index: number) => [
          index + 1,
          row.hsncode,
          row.total_qty,
          row.total_amount,
        ]),
        theme: 'grid',
        headStyles: {
          fillColor: [255, 159, 67]
        },
        startY: 49,
        margin :{top:49}
      });
  
      doc.save('Hsncode Wise Sale.pdf');
    } catch (error) {
      console.log(error)
    }

    // Pass tableData to autoTable
 
  };

  private formatDate(date: Date): string {
    return this.datepipe.transform(date, 'yyyy-MM-dd') || '';
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
  saleSummary: any

  key = 'id'
  reverse: boolean = false;

  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  minDate: Date;
  maxDate: Date;


  sort(key: any) {
    this.key = key;
    this.reverse = !this.reverse
  }

  getSaleSummary(hsn :number) {
   
    
    this._reportService.get_hsncode_wise_TaxList(this.startDate, this.endDate,hsn).subscribe((res) => {
      this.saleSummaryList = res;
      this.saleSummary = res
    })

  }
  getSelectedSaleSummaryDates() {
    console.log(this.saleSummaryform.value);
    const start = this.datepipe.transform(this.saleSummaryform.value.start, 'yyyy-MM-dd');
    const end = this.datepipe.transform(this.saleSummaryform.value.end, 'yyyy-MM-dd');
    console.log(start);
    console.log(end);
    this.startDate = start;
    this.endDate = end;
    if (start && end) {
      
      this?.getSaleSummary(this.hsn_id);
    }
  }



  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.saleSummaryList?.length;
    }
  }


  public hsnList :any[] = [];
  private pageLoadData(){
    this._coreService.getHSNCode().subscribe({
      next : (value :any)=> {
        this.hsnList = value;
        console.log(value)
      },
    })
  };


  hsn_id : number;
  handelChang(event :any){
    this.hsn_id =(event.target.value)
    this.getSaleSummary(event.target.value)
  };
}
