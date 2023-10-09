import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-static-pages',
  templateUrl: './static-pages.component.html',
  styleUrls: ['./static-pages.component.scss']
})
export class StaticPagesComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  staticPgForm!: FormGroup;
  get f() {
    return this.staticPgForm.controls;
  }
  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router,private cs:CompanyService) {
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
        this.coreService.deleteStaticPage(slug).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
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
        this.tableData.splice(index, 1);
      }
    });
  }

  select=false
  // active deactive
  deActivate(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Deactivate this static page!",
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
       this.coreService.staticPageIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.success) {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Static Pages Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this static page!",
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
       this.coreService.staticPageIsActive(id,'').subscribe(res => {
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
userDetails:any
  ngOnInit(): void {
    this.staticPgForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      slug: new FormControl('', [Validators.required]),   
      description:new FormControl('',[Validators.required])
    })
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
    // this.coreService.getStaicPages();
    // // this.tableData = this.QueryService.colorsList;
    // // console.log(this.tableData);

    // this.coreService.StaticPageBehaveSub.subscribe(() => {
    //   if (localStorage.getItem('staticPages')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("staticPages")!))
    //     console.log(this.tableData);   
    //   }
    // })
  this.coreService.getStaicPages().subscribe(res=>{
    this.loader=false;
    this.tableData=res;
    this.selectedRows = new Array(this.tableData.length).fill(false);
  })

  // permission from localstorage
//  const localStorageData = JSON.parse(localStorage.getItem('auth'));
//     if (localStorageData && localStorageData.permission) {
//       const permission = localStorageData.permission;
//       permission.map((res: any) => {
//         if (res.content_type.app_label === 'website'  && res.content_type.model === 'staticpages' && res.codename=='add_staticpages') {
//           this.isAdd = res.codename;
//         } else if (res.content_type.app_label === 'website' && res.content_type.model === 'staticpages' && res.codename=='change_staticpages') {
//           this.isEdit = res.codename;
//         }
//         else if (res.content_type.app_label === 'website' && res.content_type.model === 'staticpages' && res.codename=='delete_staticpages') {
//           this.isDelete = res.codename;
//           console.log(this.isDelete); 
//         }
//       });
//     }
    
     // permission from profile api
     this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'website'  && res.content_type.model === 'staticpages' && res.codename=='add_staticpages') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'website' && res.content_type.model === 'staticpages' && res.codename=='change_staticpages') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);  
        } else if (res.content_type.app_label === 'website' && res.content_type.model === 'staticpages' && res.codename=='delete_staticpages') {
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
    this.coreService.deletecolor(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Colors Deleted successfully") {
        window.location.reload()
      }

    })
  }

  addRes: any
  
  
 submit() {
  // console.log(this.staticPgForm.value);
  // console.log(this.id);

  if (this.staticPgForm.valid) {
    this.coreService.addcolor(this.staticPgForm.value).subscribe(res => {
      // console.log(res);
      this.addRes = res
      if (this.addRes.success) {
        this.toastr.success(this.addRes.msg)
        this.staticPgForm.reset()
        // window.location.reload();
        this.ngOnInit()
      }
    }, err => {
      // console.log(err.error.gst);
    })
    
    
  } else {
    this.staticPgForm.markAllAsTouched()
    // console.log('forms invalid');
  }
}

update(){
  if (this.staticPgForm.valid) {
    this.coreService.updatecolor(this.staticPgForm.value, this.id).subscribe(res => {
      // console.log(res);
      this.addRes = res
      if (this.addRes.success) {
        this.toastr.success(this.addRes.msg)
        this.staticPgForm.reset()
        this.addForm=true
        // window.location.reload()
        this.ngOnInit()
      }
    }, err => {
      // console.log(err.error.gst);
    })
   
  } else {
    this.staticPgForm.markAllAsTouched()
    // console.log('forms invalid');
  }
}

  get title() {
    return this.staticPgForm.get('title')
  }
  get slug() {
    return this.staticPgForm.get('slug')
  }
  get description(){
    return this.staticPgForm.get('description')
  }
 
  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getcolorById(id).subscribe(res => {
      // console.log(res);
      res.map((data: any) => {
        // console.log(data);
        if (id == data.id) {
          this.addForm=false;
          this.staticPgForm.patchValue(data);
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.staticPgForm.reset();
  }

  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
  //       console.log(res.title.toLocaleLowerCase());
  //       console.log(res.title.match(this.titlee));
  //       return res.title.match(this.titlee);
  //     })
  //   }
  // }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
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
     // convert to pdf
     generatePDF() {
      // table data with pagination
      const doc = new jsPDF();
      const title = 'Static Pages List';
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
            { header: 'Title' },
            { header: 'Slug' },
            { header: 'Is Active' }
          ],
        })
      doc.save('staticPages.pdf');
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
      const fileName = 'staticPages.xlsx';
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
  
      // Replace the content of the body with the combined content
      document.body.innerHTML = combinedContent;
      window.print();
  
      // Restore the original content of the body
      document.body.innerHTML = originalContents;
    }
}
