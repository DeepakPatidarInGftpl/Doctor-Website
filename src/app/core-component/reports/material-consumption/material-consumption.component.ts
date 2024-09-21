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
  selector: 'app-material-consumption',
  templateUrl: './material-consumption.component.html',
  styleUrls: ['./material-consumption.component.scss']
})
export class MaterialConsumptionComponent implements OnInit {
  saleSummaryList :any[] = [];
  startDate :any ;
  endDate :any ;
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
    this.startDate = this.saleSummaryform.get('start')?.value;
    this.endDate = this.saleSummaryform.get('end')?.value;
    this.getSaleSummary();

  }


  generatePDFAgain() {
    const doc = new jsPDF();
    const subtitle = 'PV';
    const title = 'Hsncode Wise Sale';
    const heading = `User: ${this?.userDetails?.userName}`;

    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(subtitle, 86, 5);
    doc.text(title, 82, 10);
    doc.text(heading, 10, 18);

    doc.text('', 10, 25); //,argin x, y

    // Pass tableData to autoTable
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
      startY: 25
    });

    doc.save('Hsncode Wise Sale.pdf');
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

  getSaleSummary() {
   
    console.log(this.startDate)
    this._reportService.getMaterialConsumptionList(this.startDate, this.endDate).subscribe((res) => {
      console.log(res)
      this.saleSummaryList = res;
      this.saleSummary = res
    })

  }
  getSelectedSaleSummaryDates(str:any) {
    console.log(this.saleSummaryform.value);
    const start = this.datepipe.transform(this.saleSummaryform.value.start, 'yyyy-MM-dd');
    const end = this.datepipe.transform(this.saleSummaryform.value.end, 'yyyy-MM-dd');
    console.log(str);
    // console.log(end);
    this.startDate = start;
    this.endDate = end;
    if (str =='end') {
      
      this?.getSaleSummary();
    }
  }



  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.saleSummaryList?.length;
    }
  }


 

}
