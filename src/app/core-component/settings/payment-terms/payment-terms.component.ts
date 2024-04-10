import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import Swal from 'sweetalert2';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-payment-terms',
  templateUrl: './payment-terms.component.html',
  styleUrls: ['./payment-terms.component.scss']
})
export class PaymentTermsComponent implements OnInit {

 
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  paymentTermsForm!: FormGroup;
  get f() {
    return this.paymentTermsForm.controls;
  }
  imgUrl = 'https://pv.greatfuturetechno.com';
  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  navigateData:any
  constructor(private contactService: ContactService, private fb: FormBuilder, private toastr: ToastrService, private router: Router,private profileService:CompanyService) {
    
      this.navigateData=this.router.getCurrentNavigation()?.extras?.state?.['id']
      if (this.navigateData){
        this.editForm(this.navigateData)
      }
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
        this.contactService.deletePaymentTerms(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.tableData
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.ngOnInit();
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
  select=false
  // active deactive
  deActivate(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Deactivate this payment terms!",
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
       this.contactService.PaymentTermsIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.success) {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Payment Terms Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this payment terms!",
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
       this.contactService.PaymentTermsIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.success) {
          Swal.fire({
            icon: 'success',
            title: 'Active!',
            text: this.delRes.msg,
          });
           this.ngOnInit()
         }
       })
     
     }
   });
 }
 loader=true;
 isAdd:any;
 isEdit:any;
 isDelete:any;

 userDetails:any;
  ngOnInit(): void {
    this.paymentTermsForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      days: new FormControl('', [Validators.required]),   
    })
   
    this.contactService.getPaymentTerms().subscribe(res=>{
      this.loader=false;
      this.tableData=res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'master' && res.content_type.model === 'paymentterms' && res.codename=='add_paymentterms') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'master' && res.content_type.model === 'paymentterms' && res.codename=='change_paymentterms') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     } else if(res.content_type.app_label === 'master' && res.content_type.model === 'paymentterms' && res.codename=='delete_paymentterms'){
    //       this.isDelete=res.codename;
    //       console.log(this.isDelete); 
    //     }
    //   });
    // }

    this.profileService.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res?.content_type.app_label === 'master' && res?.content_type.model === 'paymentterms' && res?.codename=='add_paymentterms') {
          this.isAdd = res?.codename;
          // console.log(this.isAdd);
        } else if (res?.content_type.app_label === 'master' && res?.content_type.model === 'paymentterms' && res?.codename=='change_paymentterms') {
          this.isEdit = res?.codename;
          // console.log(this.isEdit);
        } else if(res?.content_type.app_label === 'master' && res?.content_type.model === 'paymentterms' && res?.codename=='delete_paymentterms'){
          this.isDelete=res?.codename;
          // console.log(this.isDelete); 
        }
      });
    });
  }

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
    this.contactService.deletePaymentTerms(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Deleted successfully") {
        window.location.reload()
      }
    })
  }

  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    // console.log(file);
    this.paymentTermsForm.patchValue({
      image: file
    })
    this.paymentTermsForm.get('image')?.updateValueAndValidity();
  }

  addRes: any
  loaders=false;
 submit() {
  // console.log(this.paymentTermsForm.value);
  // console.log(this.id);

  if (this.paymentTermsForm.valid) {
    this.loaders=true;
    this.contactService.addPaymentTerms(this.paymentTermsForm.value).subscribe(res => {
      // console.log(res);
      this.addRes = res
      if (this.addRes.success) {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.paymentTermsForm.reset()
        // window.location.reload();
        this.ngOnInit()
      }
    }, err => {
      // console.log(err.error.gst);
    })
  } else {
    this.paymentTermsForm.markAllAsTouched()
    this.toastr.error('Please Fill All The Required Fields');
  }
}

update(){
  if (this.paymentTermsForm.valid) {
    this.loaders=true;
    this.contactService.updatePaymentTerms(this.paymentTermsForm.value, this.id).subscribe(res => {
      // console.log(res);
      this.addRes = res
      if (this.addRes.success) {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.paymentTermsForm.reset()
        this.addForm=true
        // window.location.reload()
        this.ngOnInit()
      }
    }, err => {
      // console.log(err.error.gst);
    })
  } else {
    this.paymentTermsForm.markAllAsTouched()
    // console.log('forms invalid');
  }
}

get title() {
  return this.paymentTermsForm.get('title')
}
get days() {
  return this.paymentTermsForm.get('days')
}
 
  addForm = true
  id: any
  editFormdata: any;
  resData:any;
  editForm(id: number) {
    this.id = id
    this.contactService.getPaymentTermsById(id).subscribe(res => {
      this.resData=res
      this.resData.map((data: any) => {
        // console.log(data);
        if (id == data.id) {
          this.addForm=false
          this.paymentTermsForm.patchValue({
            title:data.title,
            days:data.days
          });
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.paymentTermsForm.reset();
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
  reverse: boolean = true;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }


  // convert to pdf
  generatePDF() {
    // table data with pagination
    const doc = new jsPDF();
    const title = 'Payment Terms';
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
          { header: 'Days' },
          { header: 'Is Active' }
        ],
      })
    doc.save('paymentTerms.pdf');

 }
 generatePDFAgain() {
  const doc = new jsPDF();
  const title = 'Payment Terms';
  doc.setFontSize(12);
  doc.setTextColor(33, 43, 54);
  doc.text(title, 82, 10);
  doc.text('', 10, 15); 
  // Pass tableData to autoTable
  autoTable(doc, {
    head: [
      ['#', 'Title', 'Days']
    ],
    body: this.tableData.map((row:any, index:number ) => [
  
      index + 1,
      row.title,
      row.days ,
  

    ]),
    theme: 'grid',
    headStyles: {
      fillColor: [255, 159, 67]
    },
    startY: 15, 
  });
  doc.save('Payment Terms  .pdf');
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
    const fileName = 'paymentTerms.xlsx';
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

