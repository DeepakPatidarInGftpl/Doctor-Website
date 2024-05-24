import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';

import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

@Component({
  selector: 'app-pos-order',
  templateUrl: './pos-order.component.html',
  styleUrls: ['./pos-order.component.scss']
})
export class PosOrderComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;

  //filter
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;

  filteredData: any[]; // The filtered data
  selectedAccountType: string = '';
  selectedAccountSubType: string = '';
  selectedAccountId: string = '';

  constructor(private coreService: CoreService, private QueryService: QueryService, private cs: CompanyService) {
    this.QueryService.filterToggle()
  }

  delRes: any

  confirmText(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.coreService.deletePosOrder(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Dealer Deleted successfully") {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.tableData.splice(index, 1);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
          }
        })
      }
    });
  }

  // active deactive
  isActive(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this pos!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Deactivate it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.coreService.PosOrderIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Dealer Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'POS Order Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this pos Order!",
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Active it!',
      buttonsStyling: true,
      customClass: {
        confirmButton: 'btn btn-primary',
        cancelButton: 'btn btn-danger ml-1',
      },
    }).then((t) => {
      if (t.isConfirmed) {
        this.coreService.PosOrderIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Dealer Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'POS Order Is Active Successfully.',
        });
      }
    });
  }
  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  //24-5
  isAdmin = false;
  fyID: any;
  //
  ngOnInit(): void {
    //24-5
    if (localStorage.getItem('financialYear')) {
      let fy = localStorage.getItem('financialYear');
      console.warn(JSON.parse(fy));
      let fyId = JSON.parse(fy);
      this.fyID = fyId;
    }
    this.cs.userDetails$.subscribe((res: any) => {
      if (res.role == 'admin') {
        this.isAdmin = true;
      } else {
        this.isAdmin = false;
      }
    });
    this.coreService.getPosOrder(this.fyID, this.selectData).subscribe(res => {
      // console.log(res);
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    });
    this.getBranch();
    //24-5
  }

  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

  select = false
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
  //       const nameLower = res?.customer?.name.toLocaleLowerCase();
  //       const companyNameLower = res.id.toString().toLocaleLowerCase();
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
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res?.customer?.name?.toLocaleLowerCase();
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

  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'POS Order';
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
          { header: 'User Id' },
          { header: 'Customer' },
          { header: 'Payment Mode' },
          { header: 'Due Amount' },
          { header: 'GST' },
          { header: 'SCFST' },
          { header: 'Supply GST' },
          { header: 'Supply State' },
          { header: 'Total Tax ' },
          { header: 'Total Amount' },
          { header: 'Is Active' }
        ],
      })
    doc.save('posOrder.pdf');
  }
  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'Pos Order';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15);
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', 'User Id', 'Customer', 'Payment Mode', 'Due Amount', 'GST', 'SCFST', 'Supply GST', 'Supply State', 'Total Tax ', 'Total Amount']
      ],
      body: this.tableData.map((row: any, index: number) => [

        index + 1,
        row.id,
        row.customer.name,
        row.payment_mode,
        row.dueAmount,
        row.get_gst,
        row.get_scgst,
        row.place_of_supply_gst_code,
        row.place_of_supply_state,
        row.total_tax,
        row.total_amount

      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15,
    });
    doc.save('Pos Order .pdf');
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
    const fileName = 'posOrder.xlsx';
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


    // Remove the "Action" column header from the cloned table
    const actionTh = clonedTable.querySelector('th.thone:last-child');
    if (actionTh) {
      actionTh.remove();
    }

    // Loop through each row and remove the "Is Active" column and "Action" column data cells
    const rows = clonedTable.querySelectorAll('tr');
    rows.forEach((row) => {


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

  // filter data
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.selectedAccountType) {
      filteredData = filteredData.filter((item) => item?.payment_mode === this.selectedAccountType);
    }

    this.filteredData = filteredData;
  }
  clearFilter() {
    this.selectedAccountType = null;
    this.filterData();
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData.length;
    }
  }
  //24-5
  branchList: any[] = [];
  filteredBranchList: any[] = [];
  searchBranch: string = '';
  getBranch() {
    this.coreService.getBranch().subscribe((res: any) => {
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
  //24-5
}
















































