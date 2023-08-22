import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { WebsiteService } from 'src/app/Services/website/website.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-address-store',
  templateUrl: './address-store.component.html',
  styleUrls: ['./address-store.component.scss']
})
export class AddressStoreComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  constructor(private websiteService: WebsiteService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router,private cs:CompanyService) {
    this.QueryService.filterToggle();
  }

  delRes: any
  confirmText(index: any, slug: any) {
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
        this.websiteService.deleteAddressStore(slug).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Store Address Deleted successfully") {
            this.tableData
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
          this.ngOnInit();
          }
        })
        Swal.fire({
          icon: 'error',
          title: 'Not Deleted!',
          text: this.delRes.error,
        });
        // this.tableData.splice(index, 1);
      }
    });
  }

  select=false
  // active deactive
  deActivate(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Deactivate this Store Address!",
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
       this.websiteService.AddressStoreIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Store Address Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Store Address Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this Store Address!",
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
       this.websiteService.AddressStoreIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Store Address Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Active!',
         text: 'Store Address Is Active Successfully.',
       });
     }
   });
 }
 loader=true;
 isAdd:any;
 isEdit:any;
 isDelete:any;
 userDetails:any
  ngOnInit(): void {
 
  this.websiteService.getAddressStore().subscribe(res=>{
    this.tableData=res;
    this.loader=false;
    this.selectedRows = new Array(this.tableData.length).fill(false);
  })
  
  //permision from localstorage
  // const localStorageData = JSON.parse(localStorage.getItem('auth'));
  // if (localStorageData && localStorageData.permission) {
  //   const permission = localStorageData.permission;
  //   permission.map((res: any) => {
  //     if (res.content_type.app_label === 'order'  && res.content_type.model === 'storeaddress' && res.codename=='add_storeaddress') {
  //       this.isAdd = res.codename;
  //       console.log(this.isAdd);
  //     } else if(res.content_type.app_label === 'order' && res.content_type.model === 'storeaddress' && res.codename == 'change_storeaddress') {
  //       this.isEdit = res.codename;
  //       console.log(this.isEdit);
  //     }else if(res.content_type.app_label === 'order' && res.content_type.model === 'storeaddress' && res.codename == 'delete_storeaddress') {
  //       this.isDelete = res.codename;
  //       console.log(this.isDelete);
  //     }
  //   });
  // } 

     // permission from profile api
     this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'order'  && res.content_type.model === 'storeaddress' && res.codename=='add_storeaddress') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if(res.content_type.app_label === 'order' && res.content_type.model === 'storeaddress' && res.codename == 'change_storeaddress') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        }else if(res.content_type.app_label === 'order' && res.content_type.model === 'storeaddress' && res.codename == 'delete_storeaddress') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
      });
    });
}
//select table row
allSelected: boolean = false;
selectedRows:boolean[]
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
  deleteId(id: number) {
    this.websiteService.deleteAddressStore(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Colors Deleted successfully") {
        window.location.reload()
      }
    })
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
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

    // convert to pdf
    generatePDF() {
      // table data with pagination
      const doc = new jsPDF();
      const title = 'Address Store list';
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
            { header: 'Phone' },
            { header: 'Alternative Mobile No.' },
            { header: 'Line 1' },
            { header: 'Line 2' },
            { header: 'Country' },
            { header: 'State' },
            { header: 'City' },
            { header: 'Pincode' },
            { header: 'Address' },
            { header: 'Is Active' }
          ],
        })
      doc.save('addressstorelist.pdf');
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
      const fileName = 'addressstorelist.xlsx';
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
      const isActiveTh = clonedTable.querySelector('th.thone:nth-child(13)');
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
        const isActiveTd = row.querySelector('td:nth-child(13)');
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
