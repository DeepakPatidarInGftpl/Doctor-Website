import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-prefix',
  templateUrl: './prefix.component.html',
  styleUrls: ['./prefix.component.scss']
})
export class PrefixComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;
  filterData: any;

  prefixForm!: FormGroup;
  get f() {
    return this.prefixForm.controls;
  }
  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage = 10;
  navigateData:any;
  constructor(private contactService: ContactService,  private fb: FormBuilder, private toastr: ToastrService, private router: Router,private cs:CompanyService, private coreService: CoreService) {
    this.navigateData=this.router.getCurrentNavigation()?.extras?.state?.['id']
    if (this.navigateData){
      this.editForm(this.navigateData)
    }
  }
  prefixList = this.coreService.prefixList;
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
        this.contactService.deleteTerms(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.tableData
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
          }
        })
      
        // this.tableData.splice(index, 1);
      }
    });
  }
  select=false
  // active deactive
  deActivate(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Deactivate this Prefix!",
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
       this.coreService.PrefixIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.success) {
           this.getPrefixList();
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Prefix Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this Prefix!",
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
       this.coreService.PrefixIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.success) {
          Swal.fire({
            icon: 'success',
            title: 'Active!',
            text: this.delRes.msg,
          });
           this.getPrefixList();
         }
       })
     }
   });
 }
 loader=true
 isAdd:any = true;
 isEdit:any;
 isDelete:any;
 userDetails:any

  ngOnInit(): void {
    this.prefixForm = this.fb.group({
      prefix: new FormControl(''),   
      prefix_type: new FormControl(''),
      sequence_no: new FormControl(''),   
    })
    this.getPrefixList();
  }

 //select table row
 allSelected: boolean = false;
  selectedRows:boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

  getPrefixList() {
    this.coreService.getPrefix().subscribe((res)=> {
      this.tableData=res;
      this.filterData = res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
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
 
  addRes: any
  loaders=false;
 submit() {
  if (this.prefixForm.valid) {
    this.loaders=true;
    this.coreService.addPrefix(this.prefixForm.value).subscribe(res => {
      // console.log(res);
      this.addRes = res
      if (this.addRes.success) {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.prefixForm.reset()
        this.getPrefixList();
      }else{
        this.loaders=false;
      }
    }, err => {
      this.loaders=false;
      // console.log(err.error.gst);
    })
  } else {
    this.prefixForm.markAllAsTouched()
    this.toastr.error('Please Fill All The Required Fields');
  }
}

  get prefix_type() {
    return this.prefixForm.get('prefix_type')
  }
  get prefix() {
    return this.prefixForm.get('prefix')
  }

  get sequence_no() {
    return this.prefixForm.get('sequence_no')
  }
 
  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.contactService.getTermsById(id).subscribe(res => {
        if (id == res.id) {
          this.addForm=false
          this.prefixForm.patchValue(res);
          this.editFormdata = res
        }
    })
  }
  openaddForm() {
    this.addForm = true;
    this.prefixForm.reset();
    this.getPrefixList()
  }

  
  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
        // console.log(res);
        // console.log(res.title.toLocaleLowerCase());
        // console.log(res.title.match(this.titlee));
  //       return res.title.match(this.titlee);
  //     })
  //   }
  // }

  search() {
    if (this.titlee === "") {
      this.tableData = this.filterData;
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
      this.tableData = this.filterData.filter(res => {
        const prefix = res?.prefix.toLocaleLowerCase(); 
        const prefixType = res?.prefix_type.toLocaleLowerCase(); 
        const sequenceNo = res?.sequence_no?.toString().toLocaleLowerCase(); 

        if(prefix.includes(searchTerm) || prefixType.includes(searchTerm) || sequenceNo?.includes(searchTerm)){
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
    const title = 'Prefix List';
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
          { header: 'Prefix' },
          { header: 'Prefix Type' },
          { header: 'Sequence No' },
          { header: 'Is Active' }
        ],
      })
    doc.save('prefix.pdf');

 }
 generatePDFAgain() {
  const doc = new jsPDF();
  const title = 'Prefix List';
  doc.setFontSize(12);
  doc.setTextColor(33, 43, 54);
  doc.text(title, 82, 10);
  doc.text('', 10, 15); 
  // Pass tableData to autoTable
  autoTable(doc, {
    head: [
      ['#', 'Prefix', 'Prefix Type', 'Sequence No']
    ],
    body: this.tableData.map((row:any, index:number ) => [
  
      index + 1,
      row.prefix,
      row.prefix_type,
      row.sequence_no
    ]),
    theme: 'grid',
    headStyles: {
      fillColor: [255, 159, 67]
    },
    startY: 15, 
  });
  doc.save('Prefix_List.pdf');
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
    const fileName = 'prefix.xlsx';
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
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(6)');
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
        const isActiveTd = row.querySelector('td:nth-child(6)');
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

  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }

}