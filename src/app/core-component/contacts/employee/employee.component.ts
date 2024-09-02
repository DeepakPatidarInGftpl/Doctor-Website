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
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any | employee;

  //filter
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  roleType: string = '';
  selectedCompany: string = '';
  selectActive: any;

  constructor(private contactService: ContactService, private QueryService: QueryService,
    private cs: CompanyService) {
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
        this.contactService.deleteEmployee(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {

            Swal.fire({
              icon: 'success',
              title: 'Deleted !',
              text: this.delRes.msg,
            });
            this.tableData.splice(index, 1);
            this.ngOnInit();
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
      text: "Do you want to Deactivate this employee!",
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
        this.contactService.EmployeeIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Employee is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this employee!",
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
        this.contactService.EmployeeIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: this.delRes.msg,
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

    this.contactService.getEmployee().subscribe(res => {
      // console.log(res);
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();
    })
    //from localstorage permission
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'master'  && res.content_type.model === 'employee' && res.codename=='add_employee') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);    
    //     } else if (res.content_type.app_label === 'master' && res.content_type.model === 'employee' && res.codename=='change_employee') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);      
    //     }else if (res.content_type.app_label === 'master' && res.content_type.model === 'employee' && res.codename=='delete_employee') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);      
    //     }
    //   });
    // }
    // permissin from api profile
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'master' && res.content_type.model === 'employee' && res.codename == 'add_employee') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);    
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'employee' && res.codename == 'change_employee') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);      
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'employee' && res.codename == 'delete_employee') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);      
        }
      });
    });

    this.getGroup()
  }

  groupList: any
  getGroup() {
    this.contactService.getPermissionGroup().subscribe((res: any) => {
      // console.log(res);
      this.groupList = res
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
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.tableData.filter(res => {
        const nameLower = res.name.toLocaleLowerCase();
        const mobileNo = res?.mobile_no.toLocaleLowerCase();
        const city = res?.address[0]?.city?.city?.toLocaleLowerCase();
        if (nameLower.match(searchTerm)) {
          return true;
        } else if (mobileNo.match(searchTerm)) {
          return true;
        } else if (city.match(searchTerm)) {
          return true;
        } else {
          return false;
        }
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
    const title = 'Employee List';

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
          { header: 'Email' },
          { header: 'Mobile Number' },
          { header: 'Opening Balance' },
          { header: 'Commision' },
          { header: 'PanCard' },
          { header: 'User Role' },
          { header: 'Is Active' }
        ],
      })
    doc.save('employee.pdf');
  }
  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'Employee List';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15);
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', 'Name', 'Mobile Number', 'Employee Type', 'Email', 'Opening Balance', 'Joining', 'PanCard', 'User Role']
      ],
      body: this.tableData.map((row: any, index: number) => [
        index + 1,
        row.name,
        row.mobile_no,
        row.employee_type,
        row.email,
        row?.opening_balance_type + (row?.opening_balance != null ? ' : ' + row?.opening_balance : ''),
        row.date_of_joining,
        row.pan_no,
        row.userid?.user_type
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15,
    });
    doc.save('employee.pdf');
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
    const fileName = 'employee.xlsx';
    saveAs(blob, fileName); // Use the FileSaver.js library to initiate download
  }

  printTable(): void {
    const tableElement = document.getElementById('mytable');
    const titleElement = document.querySelector('.titl'); 
    if (!tableElement) {
        console.error('Table not found');
        return;
    }  
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
    const clonedTitle = titleElement.cloneNode(true) as HTMLElement;
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(11)');
    if (isActiveTh) {
      isActiveTh.remove();
    }

    const isfirstTh = clonedTable.querySelector('th.thone:nth-child(1)');
    if (isfirstTh) {
      isfirstTh.remove();
    }

    const actionTh = clonedTable.querySelector('th.thone:last-child');
      if (actionTh) {
        actionTh.remove();
      }
  
      const rows = clonedTable.querySelectorAll('tr');
      rows.forEach((row) => {
        const isActiveTd = row.querySelector('td:nth-child(11)');
        if (isActiveTd) {
          isActiveTd.remove();
        }
        const isfirstTd = row.querySelector('td:nth-child(1)');
        if (isfirstTd) {
           isfirstTd.remove();
        }
        const actionTd = row.querySelector('td:last-child');
        if (actionTd) {
          actionTd.remove();
        }
      });
  
    const printContainer = document.createElement('div');
    clonedTitle.classList.add('spaced-title');
    printContainer.appendChild(clonedTitle);
    printContainer.appendChild(clonedTable);
  
    const style = document.createElement('style');
    style.id = 'printStyle'; 
    style.textContent = `
        @media print {
            body * {
                visibility: hidden;
            }
            #printContainer, #printContainer * {
                visibility: visible;
            }
            #printContainer {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
            }
            .spaced-title {
                margin-top: 60px;
                margin-bottom: 20px;
            }
        }
    `;
    document.head.appendChild(style);
  
    printContainer.id = 'printContainer';
    document.body.appendChild(printContainer);
  
    window.print();
  
    window.addEventListener('afterprint', () => {
      this.clearData();
    });

    setTimeout(() => {
      this.clearData();
    }, 2000);
  }

  clearData() {
    const printContainer = document.getElementById('printContainer');
    const style = document.getElementById('printStyle');
    if (printContainer) {
      document.body.removeChild(printContainer);
    }
    if (style) {
      document.head.removeChild(style);
    }
  }

  // filter data
  selectCredit: any;
  filterData() {
    let filteredData = this.tableData.slice();
    if (this.roleType) {
      filteredData = filteredData.filter((item) => item?.userid?.role?.name === this.roleType);
    }
    if (this.selectedCompany) {
      const searchTerm = this.selectedCompany.toLowerCase();
      filteredData = filteredData.filter((item) => {
        const aliasLower = item?.mobile_no?.toString().toLowerCase();
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
    this.roleType = null;
    this.selectedCompany = null;
    this.selectCredit = null;
    this.selectActive = undefined;
    this.filterData();
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData?.length;
    }
  }
}