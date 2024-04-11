import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any = []

  apiUrl = environment.api
  title: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  constructor( private coreServ: CoreService, private router: Router, private toastr: ToastrService,
    private cs:CompanyService) {
  }

  delRes: any
  confirmText(index: any, id) {
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
        this.coreServ.deleteProductCateg(id).subscribe(res => {
          this.delRes = res;
          // console.log(this.delRes);
          if (this.delRes.success) {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
          } else {
            // console.log(this.delRes.error);
            // this.toastr.error(this.delRes.error)
            Swal.fire({
              icon: 'error',
              title: 'Deleted!',
              text: this.delRes.error,
            });
          }
        })

        // this.tableData.splice(index, 1);
      }
    });

  }
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this Category!",
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
        this.coreServ.categoryIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Category Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Category!",
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
        this.coreServ.categoryIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Category Is Active Successfully.',
        });
      }
    });
  }

  loader = true;
  isAdd:any;
  isEdit:any;
  isDelete:any;
  userDetails:any
  ngOnInit() {
    this.coreServ.getProductCategor().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    // this.coreServ.ProdCategBehaveSub.subscribe(() => {
    //   if (localStorage.getItem("prodCategories")) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("prodCategories")))
    //   }
    // })
    // this.dtOptions = {
    //   dom: 'Btlpif',
    //   pagingType: 'numbers',
    //   language: {
    //     search: ' ',
    //     searchPlaceholder: "Search...",
    //     info: "_START_ - _END_ of _TOTAL_ items",
    //   },
    //   initComplete: (settings, json) => {
    //     $('.dt-buttons').appendTo('.wordset');
    //     $('.dataTables_filter').appendTo('.search-input');
    //   },

    // };
 
    //permission from localstorage
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'product' && res.content_type.model === 'productcategory' && res.codename=='add_productcategory') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productcategory' && res.codename=='change_productcategory') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     }else if (res.content_type.app_label === 'product' && res.content_type.model === 'productcategory' && res.codename=='delete_productcategory') {
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
        if (res.content_type.app_label === 'product' && res.content_type.model === 'productcategory' && res.codename=='add_productcategory') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productcategory' && res.codename=='change_productcategory') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        }else if (res.content_type.app_label === 'product' && res.content_type.model === 'productcategory' && res.codename=='delete_productcategory') {
          this.isDelete = res.codename;
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

  editMode = false
  editThis(prod, index) {
    this.coreServ.editThisData(prod)
    this.editMode = true
    // this.router.navigate(['product/categorylist/'+`${prod.id}`])
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
  //   if (this.title == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
  //       console.log(res.title.toLocaleLowerCase());
  //       console.log(res.title.toLocaleLowerCase().match(this.title.toLocaleLowerCase()));
  //       return res.title.match(this.title);
  //     })
  //   }
  // }
  search() {
    if (this.title === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.title.toLocaleLowerCase(); 
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.title.toLocaleLowerCase(); 
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
  ngOnDestroy() {
    this.coreServ.editThisData(null)
  }
  openaddForm() {
    this.editMode = false;
    window.location.reload()
  }

  
  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Category List';
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
          { header: 'Image' },
          { header: 'Category name' },
          { header: 'Is Active' }
        ],
      })
    doc.save('category.pdf');

 }
 generatePDFAgain() {
  const doc = new jsPDF();
  const title = 'Category List';
  doc.setFontSize(12);
  doc.setTextColor(33, 43, 54);
  doc.text(title, 82, 10);
  doc.text('', 10, 15); 
  // Pass tableData to autoTable
  autoTable(doc, {
    head: [
      ['#', 'Category name']
    ],
    body: this.tableData.map((row:any, index:number ) => [
  
      index + 1,
      row.title ,
 
  

    ]),
    theme: 'grid',
    headStyles: {
      fillColor: [255, 159, 67]
    },
    startY: 15, 
  });
  doc.save('Category  .pdf');
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
    const fileName = 'category.xlsx';
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
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(5)');
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
      const isActiveTd = row.querySelector('td:nth-child(5)');
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
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }
}
