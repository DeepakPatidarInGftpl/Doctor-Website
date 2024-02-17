// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
// import { Observable, map, startWith } from 'rxjs';
// import { hrmService } from 'src/app/Services/hrmService/contact.service';
// import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';

// @Component({
//   selector: 'app-membership',
//   templateUrl: './membership.component.html',
//   styleUrls: ['./membership.component.scss']
// })
// export class MembershipComponent implements OnInit {

//   filteredCustomer: Observable<any[]>;
//   customerControl = new FormControl();
//   constructor(private hrmService: HrmServiceService, private fb: FormBuilder, private hrmService: hrmService) { }

//   id: any
//   ngOnInit(): void {
//     this.getCustomer();
//     this.filteredCustomer = this.customerControl.valueChanges.pipe(
//       startWith(''),
//       map(value => this._filter(value, true))
//     );
//   }
//   private _filter(value: string | number, include: boolean): any[] {
//     const filterValue = typeof value === 'string' ? value.toLowerCase() : value.toString().toLowerCase();
//     const filteredCustomer = include
//       ? this.customerList.filter(employee => employee.name.toLowerCase().includes(filterValue))
//       : this.customerList.filter(employee => !employee.name.toLowerCase().includes(filterValue));
//     if (!include && filteredCustomer.length === 0) {
//       filteredCustomer.push({ name: "No data found" });
//     }
//     return filteredCustomer;
//   }
//   customerList: any[] = [];
//   getCustomer() {
//     this.hrmService.getCustomer().subscribe((res: any) => {
//       this.customerList = res;
//     })
//   }
//   membershipList:any
//   onCheck(employeeId: any) {
//     console.log(employeeId, 'employeeId');
//     this.hrmService.getLoyalPoints(employeeId).subscribe((res:any)=>{
//       console.log(res);
//       this.membershipList=res;
//     })
//   }
 
//   p: number = 1
//   itemsPerPage = 10;
//   key = 'id';
//   reverse: boolean = false;
//   sort(key) {
//     this.key = key;
//     this.reverse = !this.reverse
//   }
// }



// list
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { HrmServiceService } from 'src/app/Services/hrm/hrm-service.service';
@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.scss']
})
export class MembershipComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any ;

  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;

  filteredData: any[]; 
  selectedAccountType: string = '';
  selectedUserType: string = '';
  selectedBranch:string=''
  isAscending: boolean = true;
  imgUrl = 'https://pv.greatfuturetechno.com';

  constructor(private hrmService: HrmServiceService, private profileService:CompanyService) {
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
        this.hrmService.deleteMembership(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
           this.ngOnInit();
           Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: this.delRes.msg,
          });
          this.tableData.splice(index, 1);
          }else{
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
      text: "Do you want to Deactivate this membership!",
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
        this.hrmService.MembershipIsActive(id,'').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'User Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Membership!",
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
        this.hrmService.MembershipIsActive(id,'').subscribe(res => {
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
  loader=true;
  isAdd:any;
  isEdit:any;
  isDelete:any;
  userDetails:any;
  ngOnInit(): void {
    this.hrmService.getMembership().subscribe(res => {
      this.tableData = res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); 
    })

    this.profileService.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res?.content_type.app_label === 'sale'  && res?.content_type.model === 'membership' && res?.codename=='add_membership') {
          this.isAdd = res?.codename;
        } else if (res?.content_type.app_label === 'sale' && res?.content_type.model === 'membership' && res?.codename=='change_membership') {
          this.isEdit = res?.codename;
        }else if (res?.content_type.app_label === 'sale' && res?.content_type.model === 'membership' && res?.codename=='delete_membership') {
          this.isDelete = res?.codename;
        }
      });
    });
  }

  allSelected: boolean = false;
  selectedRows:boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

select=false
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
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
        const nameLower = res?.title.toLocaleLowerCase();
        // const companyNameLower = res?.username.toLocaleLowerCase();
        if (nameLower.match(searchTerm)) {
          return true;
        }
        // else if (companyNameLower.match(searchTerm)) {
        //   return true;
        // }
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
    const title = 'User List';
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
          { header: ' Name' },
          { header: 'User Name' },
          { header: 'Mobile Number' },
          { header: 'Email' },
          { header: 'User Type' },
          { header: 'Branch' },
          { header: 'Is Active' }
        ],
      })
    doc.save('user.pdf');

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
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const fileName = 'user.xlsx';
    saveAs(blob, fileName); 
  }
  printTable(): void {
    const tableElement = document.getElementById('mytable');
    const tableHTML = tableElement.outerHTML;
    const titleElement = document.querySelector('.titl');
    const titleHTML = titleElement.outerHTML;
    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(9)');
    if (isActiveTh) {
      isActiveTh.remove();
    }
  
    const actionTh = clonedTable.querySelector('th.thone:last-child');
    if (actionTh) {
      actionTh.remove();
    }
  
    const rows = clonedTable.querySelectorAll('tr');
    rows.forEach((row) => {
      const isActiveTd = row.querySelector('td:nth-child(9)');
      if (isActiveTd) {
        isActiveTd.remove();
      }
      const actionTd = row.querySelector('td:last-child');
      if (actionTd) {
        actionTd.remove();
      }
    });
    const modifiedTableHTML = clonedTable.outerHTML;
    const styledTitleHTML = `<style>.spaced-title { margin-top: 80px; }</style>` + titleHTML.replace('titl', 'spaced-title');
  
    const combinedContent = styledTitleHTML + modifiedTableHTML;
    const originalContents = document.body.innerHTML;
    document.body.innerHTML = combinedContent;
    window.print();
  
    // Restore the original content of the body
    document.body.innerHTML = originalContents;
  }
  
}
