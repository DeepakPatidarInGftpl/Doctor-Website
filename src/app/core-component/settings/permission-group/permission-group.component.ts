import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-permission-group',
  templateUrl: './permission-group.component.html',
  styleUrls: ['./permission-group.component.scss']
})
export class PermissionGroupComponent implements OnInit {
 
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any 

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  isMenuCollapsed = true;
  constructor(private contactService: ContactService, private profileService:CompanyService) {}

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
        this.contactService.deletePermissionGroup(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.IsSuccess == true) {
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
          if (this.delRes.msg == "Employee Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Employee Is Deactivate Successfully.',
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
          if (this.delRes.msg == "Employee Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Employee Is Active Successfully.',
        });
      }
    });
  }
  loader = true;
  userDetails:any;
  isAdd:any;
  isEdit:any;
  isDelete:any;

  groupList:any[]=[];
  ngOnInit(): void {
    this.contactService.getPermissionGroup().subscribe(res => {
      this.tableData = res;
      // console.log(res);
      this.tableData.forEach((res: any) => {
      //  console.log(res);
      });
      // console.log(this.groupList);
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    });
    // console.log(this.tableData);

    this.profileService.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res?.content_type.app_label === 'auth'  && res?.content_type.model === 'group' && res?.codename=='add_group') {
          this.isAdd = res?.codename;
          // console.log(this.isAdd);
        } else if (res?.content_type.app_label === 'auth' && res?.content_type.model === 'group' && res?.codename=='change_group') {
          this.isEdit = res?.codename;
          // console.log(this.isEdit);
        }else if (res?.content_type.app_label === 'auth' && res?.content_type.model === 'group' && res?.codename=='delete_group') {
          this.isDelete = res?.codename;
          // console.log(this.isDelete);
        }
      });
    });
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
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
  //       console.log(res.name.toLocaleLowerCase());
  //       console.log(res.name.match(this.titlee));
  //       return res.name.match(this.titlee);
  //     })
  //   }
  // }
  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.name.toLocaleLowerCase(); 
        return nameLower.includes(searchTerm); 
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
      const title = 'User Roles list';
  
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
            { header: 'Group Name' },
            { header: 'Is Active' }
          ],
        })
      doc.save('userRole.pdf');
  
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
      const fileName = 'userRole.xlsx';
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
    
      // Replace the content of the body with the combined content
      document.body.innerHTML = combinedContent;
      window.print();
    
      // Restore the original content of the body
      document.body.innerHTML = originalContents;
    }
    changePg(val: any) {
      console.log(val);
      if (val == -1) {
        this.itemsPerPage = this.tableData.length;
      }
    }
}