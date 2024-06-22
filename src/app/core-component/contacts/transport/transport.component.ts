import { Component, OnInit } from '@angular/core';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { employee } from 'src/app/interfaces/employee';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss']
})
export class TransportComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any | employee;

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  supplierType: string = '';
  selectedCompany: string = '';
  selectActive: any;

  constructor(private contactService: ContactService, private QueryService: QueryService, private cs: CompanyService) {
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
        this.contactService.deleteTransport(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted !',
              text: this.delRes.msg,
            });
            this.tableData.splice(index, 1);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted !',
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
      text: "Do you want to Deactivate this Transport!",
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
        this.contactService.TransportIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Transport is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Transport!",
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
        this.contactService.TransportIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Transport is Active Successfully.',
        });
      }
    });
  }

  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any
  ngOnInit(): void {
    this.contactService.getTransport().subscribe(res => {
      // console.log(res);
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    })
    //from localstorage use 
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'contacts'  && res.content_type.model === 'transport' && res.codename=='add_transport') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);

    //     } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'transport' && res.codename=='change_transport') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);

    //     }else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'transport' && res.codename=='delete_transport') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);

    //     }
    //   });
    // }
    //permission from profile api

    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'contacts' && res.content_type.model === 'transport' && res.codename == 'add_transport') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);

        } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'transport' && res.codename == 'change_transport') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);

        } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'transport' && res.codename == 'delete_transport') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);

        }
      });
    })
  }

  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

  ngAfterViewChecked(): void {
    // let i = this.coreService.getEmploye();
    // console.log(i);
    // console.log(this.coreService.data);
    // console.log('ngAfterViewChecked');
    // this.tableData=this.QueryService.employeeList
    // console.log(this.tableData);

    //search sorting filtering not wroking when direct getting variable data
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
  deleteId(id: number) {
    this.contactService.deleteSupplier(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Employee Deleted successfully") {
        // this.getcompanyList()
      }

    })
  }

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res.name.toLocaleLowerCase();
        const companyNameLower = res.company_name.toLocaleLowerCase();
        if (nameLower.match(searchTerm)) {
          return true;
        } else if (companyNameLower.match(searchTerm)) {
          return true;
        }
        return false;
      });
    }
  }
  key = 'id'
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Customer List';

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
          { header: 'Company Name' },
          { header: 'Mobile Number' },
          { header: 'Opening Balance' },
          { header: 'GSTIN' },
          { header: 'PanCard' },
          { header: 'Membership' },
        ],
      })
    doc.save('customer.pdf');
  }
  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'Transport List';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15);
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', 'Name', 'Company Name ', 'Mobile Number ', 'Opening Balance', 'GSTIN', 'PanCard']
      ],
      body: this.tableData.map((row: any, index: number) => [
        index + 1,
        row.name,
        row.company_name,
        row.mobile_no,
        row?.opening_balance_type + (row?.opening_balance != null ? ' : ' + row?.opening_balance : ''),
        row?.gstin,
        row?.pan_no
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15,
    });
    doc.save('transport.pdf');
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
    const fileName = 'customer.xlsx';
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
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(9)');
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
      const isActiveTd = row.querySelector('td:nth-child(9)');
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

  // filter data
  selectCredit: any;
  filterData() {
    let filteredData = this.tableData.slice();
    // if (this.supplierType) {
    //   filteredData = filteredData.filter((item) => item?.supplier_type === this.supplierType);
    // }

    if (this.selectedCompany) {
      const searchTerm = this.selectedCompany.toLowerCase();
      filteredData = filteredData.filter((item) => {
        const aliasLower = item?.company_name.toLowerCase();
        return aliasLower.includes(searchTerm);
      });
    }
    if (this.selectCredit) {
      filteredData = filteredData.filter((item) => item?.opening_balance_type === this.selectCredit);
    }
    if (this.selectActive !== undefined && this.selectActive !== null) {
      filteredData = filteredData.filter(item => item?.is_active === this.selectActive);
    }
    this.filteredData = filteredData;
  }
  clearFilter() {
    this.supplierType = null;
    this.selectedCompany = null;
    this.selectCredit = null;
    this.selectActive = undefined;
    this.filterData();
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }
}

