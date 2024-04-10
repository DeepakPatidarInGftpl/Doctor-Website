import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  public tableData: any = []
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false;

  constructor(private coreService: CoreService, private contactService:ContactService) { }

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[];

  loader = true;
  ngOnInit(): void {
    this.coreService.getProductStock().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice();
      this.filterData();
    })

    this.getVoucher();
  }
  voucherList:any
  getVoucher(){
    this.contactService.getVoucherType().subscribe(res=>{
      console.log(res);
      this.voucherList=res;
    })
  }

  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

  selectAll(initChecked: boolean) {
    if (!initChecked) {
      this.tableData.forEach((f: any) => {
        f.isSelected = true
      })
    } else {
      this.tableData.forEach((f: any) => {
        f.isSelected = false
      })
    }
  }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res?.product_name?.toLocaleLowerCase();
        return nameLower.includes(searchTerm);
      });
    }
  }

  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }


  // read more or less
  sho = true;
  sho1 = false;
  sho2 = false;
  hide() {
    this.sho = false;
    this.sho1 = !this.sho1;
    this.sho2 = false;
  }
  hide1() {
    this.sho = true;
    this.sho1 = false;
    this.sho2 = !this.sho2;
  }

  // filter data
 
  enterFilterSku:any;
  filterData() {
    let filteredData = this.tableData.slice();

    if (this.enterFilterSku) {
      const searchTerm = this.enterFilterSku.toLowerCase();
      filteredData = filteredData.filter((item) => {
        const sku = item?.variant?.sku?.toString()?.toLowerCase();
        return sku?.includes(searchTerm);
      });
    }
    this.filteredData = filteredData;
  }

  clearFilters() {
    this.enterFilterSku = null;
    this.filterData();
  }

  // convert to pdf
  generatePDF() {
    const doc = new jsPDF();
    const title = 'Product Stock List';
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
        columns: [
          { header: 'Sr No.' },
          { header: 'Item Code' },
          { header: 'Product Name' },
          { header: 'Min QTY' },
          { header: 'Available QTY' },
          { header: 'MRP' },
          { header: 'Stock Value' },
          { header: 'Landing Stock Value' },
          { header: 'Is Active' }
        ],
      })
    doc.save('productStock.pdf');
 }
 generatePDFAgain() {
  const doc = new jsPDF();
  const title = 'Product Stock List ';
  doc.setFontSize(12);
  doc.setTextColor(33, 43, 54);
  doc.text(title, 82, 10);
  doc.text('', 10, 15); 
  // Pass tableData to autoTable
  autoTable(doc, {
    head: [
      ['#', 'Item Code',' Product Name ', 'Min QTY','Available QTY','MRP','Stock Value','Landing Stock Value']
    ],
    body: this.filteredData.map((row:any, index:number ) => [
  
      index + 1,
      row.variant?.sku,
      row.product_name,
      row.min_qty,
      row.available_qty,
     row.mrp,
      row.stock_value,
      row.landing_stock_value

    ]),
    theme: 'grid',
    headStyles: {
      fillColor: [255, 159, 67]
    },
    startY: 15, 
  });
  doc.save('Product Stock  .pdf');
}
  getVisibleDataFromTable(): any[] {
    const visibleData = [];
    const table = document.getElementById('mytable');
    const headerRow = table.querySelector('thead tr');
    const dataRows = table.querySelectorAll('tbody tr');
    const headerData = [];
    headerRow.querySelectorAll('th').forEach(cell => {
      const columnHeader = cell.textContent.trim();
        headerData.push(columnHeader);
    });
    visibleData.push(headerData);
    dataRows.forEach(row => {
      const rowData = [];
      row.querySelectorAll('td').forEach(cell => {
        rowData.push(cell.textContent.trim());
      });
      visibleData.push(rowData);
    });
    return visibleData;
  }
  exportToExcel(): void {
    const visibleDataToExport = this.getVisibleDataFromTable();
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(visibleDataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const fileName = 'productStock.xlsx';
    saveAs(blob, fileName); 
  }
  printTable(): void {
    const tableElement = document.getElementById('mytable');
    const titleElement = document.querySelector('.titl');
    const titleHTML = titleElement.outerHTML;
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
    const modifiedTableHTML = clonedTable.outerHTML;
    const styledTitleHTML = `<style>.spaced-title { margin-top: 80px; }</style>` + titleHTML.replace('titl', 'spaced-title');
    const combinedContent = styledTitleHTML + modifiedTableHTML;
    const originalContents = document.body.innerHTML;
    window.addEventListener('afterprint', () => {
      console.log('afterprint');
     window.location.reload();
    });
    document.body.innerHTML = combinedContent;
    window.print();
    document.body.innerHTML = originalContents;
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }
}
