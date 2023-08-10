import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Account } from 'src/app/interfaces/account';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-list-reciept',
  templateUrl: './list-reciept.component.html',
  styleUrls: ['./list-reciept.component.scss']
})
export class ListRecieptComponent implements OnInit {
  @ViewChild('invoice') invoiceElement!: ElementRef;

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any | Account

  titlee: any;
  name: any
  p: number = 1
  pageSize: number = 20;
  itemsPerPage: number = 20;
  constructor(private posService: PosDashboardService, private QueryService: QueryService, private cs: CompanyService) {
    this.QueryService.filterToggle()
  }

  delRes: any
  // confirmText(index: any, id: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //     buttonsStyling: true,
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-danger ml-1',
  //     },
  //   }).then((t) => {
  //     if (t.isConfirmed) {
  //       this.coreService.deleteCompanyBank(id).subscribe(res => {
  //         this.delRes = res
  //         if (this.delRes.msg == "Company Bank Deleted successfully") {
  //           this.ngOnInit();
  //           Swal.fire({
  //             icon: 'success',
  //             title: 'Deleted!',
  //             text: this.delRes.msg,
  //           });
  //           this.tableData.splice(index, 1);
  //         }else {
  //           Swal.fire({
  //             icon: 'error',
  //             title: 'Not Deleted!',
  //             text: this.delRes.error,
  //           });
  //         }
  //       })
  //     }
  //   });
  // }
  // select=false
  //  // active deactive
  //  deActivate(index: any, id: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to Deactivate this company bank!",
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, Deactivate it!',
  //     buttonsStyling: true,
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-danger ml-1',
  //     },
  //   }).then((t) => {
  //     if (t.isConfirmed) {
  //       this.coreService.CompanyBankIsActive(id,'').subscribe(res => {
  //         this.delRes = res
  //         if (this.delRes.msg == "Company Bank Is active Updated Successfully") {
  //           this.ngOnInit()
  //         }
  //       })
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Deactivate!',
  //         text: 'Company Bank Is Deactivate Successfully.',
  //       });
  //     }
  //   });
  // }
  // Active(index: any, id: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to Active this Company Bank!",
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, Active it!',
  //     buttonsStyling: true,
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-danger ml-1',
  //     },
  //   }).then((t) => {
  //     if (t.isConfirmed) {
  //       this.coreService.CompanyBankIsActive(id,'').subscribe(res => {
  //         this.delRes = res
  //         if (this.delRes.msg == "Company Bank Is active Updated Successfully") {
  //           this.ngOnInit()
  //         }
  //       })
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Active!',
  //         text: 'Company Bank Is activate Successfully.',
  //       });
  //     }
  //   });
  // }
  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any;

  //filter
  startDate: string;
  endDate: string;
  filteredData: any[]; // The filtered data
  selectedReceiptMode: string = '';
  selectedReceiptMethod: string = '';

  ngOnInit(): void {
    this.posService.getRecipt().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    });

   // permission from localstorage
   const localStorageData = JSON.parse(localStorage.getItem('auth'));
   if (localStorageData ) {
     const permission = localStorageData;
     permission.map((res: any) => {
       if (res.content_type.app_label === 'pos' && res.content_type.model === 'receipt' && res.codename == 'add_receipt') {
         this.isAdd = res.codename;
         console.log(this.isAdd);
       } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'receipt' && res.codename == 'change_receipt') {
         this.isEdit = res.codename;
         console.log(this.isEdit);
       } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'receipt' && res.codename == 'delete_receipt') {
         this.isDelete = res.codename;
         console.log(this.isDelete);
       }
     });
   }

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

  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     const searchTerm = this.titlee.toLocaleLowerCase();
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);

  //       const nameLower = res?.customer?.name.toLocaleLowerCase();
  //       const companyNameLower = res.receipt_method.toLocaleLowerCase();
  //       if (nameLower.match(searchTerm)) {
  //         return true;
  //       } else if (companyNameLower.match(searchTerm)) {
  //         return true;
  //       }
  //       return false;
  //     });
  //   }
  // }

  search() {
    if (this.titlee === undefined || this.titlee === null) {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.tableData.filter(res => {
        const nameLower = res?.customer?.name?.toString()?.toLocaleLowerCase();
        return nameLower?.includes(searchTerm) || !this.titlee;
      });
    }
  }

  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  //filter based on the start date and end date & also filter with the receipt_mode & receipt_method
  filterData() {
    let filteredData = this.tableData.slice(); 
    if (this.startDate && this.endDate) {
      const startDate = new Date(this.startDate).getTime();
      const endDate = new Date(this.endDate).getTime();
      filteredData = filteredData.filter((item) => {
        const receiptDate = new Date(item.receipt_date).getTime();
        return receiptDate >= startDate && receiptDate <= endDate;
      });
    }
    if (this.selectedReceiptMode) {
      filteredData = filteredData.filter((item) => item.receipt_mode === this.selectedReceiptMode);
    }
    if (this.selectedReceiptMethod) {
      filteredData = filteredData.filter((item) => item.receipt_method === this.selectedReceiptMethod);
    }
    this.filteredData = filteredData;
  }

  clearDateRange() {
    this.startDate = null;
    this.endDate = null;
    this.filterData();
    this.clearReceiptFilters();
  }

  clearReceiptFilters() {
    this.selectedReceiptMode = null;
    this.selectedReceiptMethod = null;
    this.filterData();
  }


  printInvoice() {
    // Make the element temporarily visible
    //this.renderer.setStyle(this.invoiceElement.nativeElement, 'display', 'block');

    // Access the element and retrieve its width
    const elementWidth = this.invoiceElement.nativeElement.offsetWidth;
    const elementHeight = this.invoiceElement.nativeElement.offsetHeight;
    console.log('Element width:', elementWidth);

    const invoice = this.invoiceElement.nativeElement;

    const htmlWidth = elementWidth;
    const htmlHeight = elementHeight;
    const topLeftMargin = 15;
    let pdfWidth = htmlWidth + (topLeftMargin * 2);
    let pdfHeight = (pdfWidth * 1.5) + (topLeftMargin * 2);
    const canvasImageWidth = htmlWidth;
    const canvasImageHeight = htmlHeight;
    const totalPDFPages = Math.ceil(htmlHeight / pdfHeight) - 1;
    html2canvas(invoice).then(canvas => {
      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('p', 'mm', 'a4'); // A4 size page of PDF
      var width = pdf.internal.pageSize.getWidth();
      var height = canvas.height * width / canvas.width;
      pdf.addImage(contentDataURL, 'PNG', 0, 0, width, height)
      pdf.save(invoice); // Generated PDF
      //this.renderer.setStyle(this.invoiceElement.nativeElement, 'display', 'none');
    });
  }

  printInvoiceExcel() {
    const generateExcel = (pageNum) => {
      if (pageNum !== 0) {
        return; // Only generate Excel for the first page (pageNum = 0)
      }
  
      const startRow = 0; // Start from the first row
      const endRow = Math.min(this.pageSize, this.filteredData.length); // Show up to 'pageSize' items
  
      const sheetName = `Page_1`; // Fixed sheet name for the first page
      const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(this.createTable(startRow, endRow));
      const wb: XLSX.WorkBook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, ws, sheetName);
  
      XLSX.writeFile(wb, `invoice_page_1.xlsx`, { type: 'binary' });
    };
  
    generateExcel(0);
  }
  
  // createTable(startRow: number, endRow: number): HTMLTableElement {
  //   // Create a new table for each page
  //   const tempTable = document.createElement('table');
  //   tempTable.className = 'table datanew';
  //   const tempTBody = document.createElement('tbody');
  
  //   for (let i = startRow; i < endRow; i++) {
  //     const rowData = this.filteredData[i];
  //     const tr = document.createElement('tr');
  
  //     // Adding table cells for each column in the row
  //     const checkboxCell = document.createElement('td');
  //     const srNoCell = document.createElement('td');
  //     const nameCell = document.createElement('td');
  //     const receiptModeCell = document.createElement('td');
  //     const receiptMethodCell = document.createElement('td');
  //     const amountCell = document.createElement('td');
  //     const billNoCell = document.createElement('td');
  //     const dateCell = document.createElement('td');
  //     const actionCell = document.createElement('td');
  
  //     // Adding data to each cell
  //     checkboxCell.innerHTML = `<label class="checkboxs"><input type="checkbox" ${(this.selectedRows[i] ? 'checked' : '')}><span class="checkmarks"></span></label>`;
  //     srNoCell.textContent = `${i + 1}`;
  //     nameCell.innerHTML = `<a style="line-height: 3;" routerLink="//bank/detailsReciept/${rowData.id}">${rowData?.customer?.name}</a>`;
  //     receiptModeCell.textContent = rowData?.receipt_mode;
  //     receiptMethodCell.textContent = rowData?.receipt_method;
  //     amountCell.textContent = rowData?.amount;
  //     billNoCell.textContent = rowData?.bill_no;
  //     dateCell.textContent = rowData?.receipt_date ? (new Date(rowData.receipt_date)).toLocaleDateString('en-US') : '';
  //     billNoCell.textContent = rowData?.description;
  
  //     // Appending cells to the row
  //     tr.appendChild(checkboxCell);
  //     tr.appendChild(srNoCell);
  //     tr.appendChild(nameCell);
  //     tr.appendChild(receiptModeCell);
  //     tr.appendChild(receiptMethodCell);
  //     tr.appendChild(amountCell);
  //     tr.appendChild(billNoCell);
  //     tr.appendChild(dateCell);
  //     tr.appendChild(actionCell);
  
  //     // Appending the row to the table body
  //     tempTBody.appendChild(tr);
  //   }
  
  //   // Appending the table body to the table
  //   tempTable.appendChild(tempTBody);
  
  //   return tempTable;
  // }
  
  createTable(startRow: number, endRow: number): HTMLTableElement {
    // Create a new table for each page
    const tempTable = document.createElement('table');
    tempTable.className = 'table datanew';
    const tempTBody = document.createElement('tbody');
  
    // Adding table headers for each column in the header row
    const headerLabels = ['Checkbox', 'Sr. No', 'Name', 'Receipt Mode', 'Receipt Method', 'Amount', 'Bill No', 'Date', 'Description'];
    const headerRow = document.createElement('tr');
    headerLabels.forEach(label => {
      const th = document.createElement('th');
      th.textContent = label;
      headerRow.appendChild(th);
    });
  
    // Appending the header row to the table body
    tempTBody.appendChild(headerRow);
  
    for (let i = startRow; i < endRow; i++) {
      const rowData = this.filteredData[i];
      const tr = document.createElement('tr');
  
      // Adding table cells for each column in the row
      const checkboxCell = document.createElement('td');
      checkboxCell.innerHTML = `<label class="checkboxs"><input type="checkbox" ${(this.selectedRows[i] ? 'checked' : '')}><span class="checkmarks"></span></label>`;
  
      const srNoCell = document.createElement('td');
      srNoCell.textContent = `${i + 1}`;
  
      const nameCell = document.createElement('td');
      nameCell.innerHTML = `<a style="line-height: 3;" routerLink="//bank/detailsReciept/${rowData.id}">${rowData?.customer?.name}</a>`;
  
      const receiptModeCell = document.createElement('td');
      receiptModeCell.textContent = rowData?.receipt_mode;
  
      const receiptMethodCell = document.createElement('td');
      receiptMethodCell.textContent = rowData?.receipt_method;
  
      const amountCell = document.createElement('td');
      amountCell.textContent = rowData?.amount;
  
      const billNoCell = document.createElement('td');
      billNoCell.textContent = rowData?.bill_no;
  
      const dateCell = document.createElement('td');
      dateCell.textContent = rowData?.receipt_date ? (new Date(rowData.receipt_date)).toLocaleDateString('en-US') : '';
  
      const descriptionCell = document.createElement('td');
      descriptionCell.textContent = rowData?.description;
  
      // Appending cells to the row
      tr.appendChild(checkboxCell);
      tr.appendChild(srNoCell);
      tr.appendChild(nameCell);
      tr.appendChild(receiptModeCell);
      tr.appendChild(receiptMethodCell);
      tr.appendChild(amountCell);
      tr.appendChild(billNoCell);
      tr.appendChild(dateCell);
      tr.appendChild(descriptionCell);
  
      // Appending the row to the table body
      tempTBody.appendChild(tr);
    }
  
    // Appending the table body to the table
    tempTable.appendChild(tempTBody);
  
    return tempTable;
  }
  
  //print table

  // printTable() {
  //   const printWindow = window.open('', '_blank', 'width=800,height=600');
  //   const tableData = this.getTableHTML();
  
  //   printWindow.document.open();
  //   printWindow.document.write(`
  //     <!doctype html>
  //     <html>
  //       <head>
  //         <title>Print Table</title>
  //         <style>
  //           /* Add any custom CSS styles here for printing, if needed */
  //         </style>
  //       </head>
  //       <body>
  //         ${tableData}
  //       </body>
  //     </html>
  //   `);
  //   printWindow.document.close();
  //   printWindow.print();
  // }
  getTableHTML(): string {
    const tableElement = document.querySelector('.table.datanew') as HTMLTableElement;
    return tableElement.outerHTML;
  }
    
     // convert to pdf
     generatePDF() {
      // table data with pagination
      const doc = new jsPDF();
      const title = 'Reciept';
      doc.setFontSize(15);
      doc.setTextColor(33, 43, 54);
      doc.text(title, 10, 10);
      // autoTable(doc, { html: '#mytable' }); // here all table field downloaded
      autoTable(doc,
  
        {
          html: '#mytable',
          theme: 'grid',
          headStyles: {
            fillColor: [255, 159, 67]
          },
          columns: [
            //remove action filed
            { header: 'Sr No.' },
            { header: 'Name' },
            { header: 'Receipt Mode' },
            { header: 'Receipt Method' },
            { header: 'Amount' },
            { header: 'Bill No' },
            { header: 'Date' },
            { header: 'Remarks' },
            { header: 'Is Active' }
          ],
        })
      doc.save('reciept.pdf');
   }
    // excel export only filtered data
    getVisibleDataFromTable(): any[] {
      const visibleData = [];
      const table = document.getElementById('mytable');
      const headerRow = table.querySelector('thead tr');
      const dataRows = table.querySelectorAll('tbody tr');
      //table heading
      const headerData = [];
      headerRow.querySelectorAll('th').forEach(cell => {
        const columnHeader = cell.textContent.trim();
        if (columnHeader !== 'Is Active' && columnHeader !== 'Action') {
          headerData.push(columnHeader);
        }
      });
      visibleData.push(headerData);
  
      // Include visible data rows
      dataRows.forEach(row => {
        const rowData = [];
        row.querySelectorAll('td').forEach(cell => {
          rowData.push(cell.textContent.trim());
        });
        visibleData.push(rowData);
      });
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
      const fileName = 'reciept.xlsx';
      saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
    }
  
    printTable(): void {
      // Get the table element and its HTML content
      const tableElement = document.getElementById('mytable');
      const tableHTML = tableElement.outerHTML;
  
      // Get the title element and its HTML content
      const titleElement = document.querySelector('.titl');
      const titleHTML = titleElement.outerHTML;
  
      // Clone the table element to manipulate
      const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
  
      // Remove the "Is Active" column header from the cloned table
      const isActiveTh = clonedTable.querySelector('th.thone:nth-child(11)');
      if (isActiveTh) {
        isActiveTh.remove();
      }
  
      // Remove the "Action" column header from the cloned table
      const actionTh = clonedTable.querySelector('th.thone:last-child');
      if (actionTh) {
        actionTh.remove();
      }
  
      // Loop through each row and remove the "Is Active" column and "Action" column data cells
      const rows = clonedTable.querySelectorAll('tr');
      rows.forEach((row) => {
        // Remove the "Is Active" column data cell
        const isActiveTd = row.querySelector('td:nth-child(11)');
        if (isActiveTd) {
          isActiveTd.remove();
        }
  
        // Remove the "Action" column data cell
        const actionTd = row.querySelector('td:last-child');
        if (actionTd) {
          actionTd.remove();
        }
      });
  
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




