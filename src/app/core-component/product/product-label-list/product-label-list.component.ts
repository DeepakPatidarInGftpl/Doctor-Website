import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-product-label-list',
  templateUrl: './product-label-list.component.html',
  styleUrls: ['./product-label-list.component.scss']
})
export class ProductLabelListComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any = [];
  selectActive: any;

  imgUrl = 'https://pv.greatfuturetechno.com';

  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router, private cs: CompanyService,private _actv :ActivatedRoute) {
    this.QueryService.filterToggle();
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
        this.coreService.deleteProductLabel(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.ngOnInit()
          } else {
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
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this Product Label!",
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
        this.coreService.productLabelIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Product Label Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Product Label!",
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
        this.coreService.productLabelIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Product Label Is Active Successfully.',
        });
      }
    });
  }
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  filteredData: any[]; // The filtered data
  addProductForm!: FormGroup;
  get f() {
    return this.addProductForm.controls;
  }

  loader = true;
  addRes: any;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails: any;
  update_id : number
  ngOnInit(): void {

this.update_id = Number(this._actv.snapshot.paramMap.get('id'));
// console.log(this.update_id,'update_id')

// Form Ins
this.addProductForm = new FormGroup({
  title: new FormControl('', [Validators.required]),
  incentive: new FormControl('',Validators.required),
  incentive_type: new FormControl('%', [Validators.required]),
  decription: new FormControl(''),
});


    this.coreService.getProductLabel().subscribe((res : any[]) => {
      this.tableData = res;
      this.loader = false
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice(); // Initialize filteredData with the original data
      this.filterData();

      if (this.update_id) {
        const [obj] = res.filter((item:any)=>item.id == this.update_id);
        console.log(obj)
        this.addProductForm.patchValue(obj)
        this.addForm = false;
      }
    
    });

  





    // permission from profile api
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'product' && res.content_type.model === 'productlabel' && res.codename == 'add_productlabel') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productlabel' && res.codename == 'change_productlabel') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'productlabel' && res.codename == 'delete_productlabel') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
      });
    });

  }




  //select table row
  allSelected: boolean = false;
  selectedRows: boolean[]
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

  filterData() {
    let filteredData = this.tableData.slice();
    if (this.selectActive !== undefined && this.selectActive !== null) {
      filteredData = filteredData.filter(item => item?.is_active === this.selectActive);
    }
    this.filteredData = filteredData;
  }

  clearFilter() {
    this.selectActive = undefined;
    this.filterData();
  }

  loaders = false
  submit() {
   if (this.addProductForm.valid) {
      this.loaders = true;
      var formData: any = new FormData();
      ['title', 'incentive', 'incentive_type', 'decription'].forEach((key: string) => {
        formData.append(key, this.addProductForm.get(key)?.value);
      });

      // Add Product Lable
      if (this.addForm) {
        this.coreService.addProductLabel(formData).subscribe({
          next :(res)  =>{
            this.addRes = res
            if (this.addRes.success) {
              this.loaders = false;
              this.toastr.success(this.addRes.msg)
              this.addProductForm.reset()
              this.ngOnInit()
            } else {
              this.toastr.error(this.addRes.tax_percentage)
            }
          },
          error :(err)=> {
             console.log(err.error.errors);
          },
        })
      }else{
  // Update Product Lable
  this.coreService.updateProductLabel(formData, this.id)
  .subscribe({
    next :(res) =>{
      this.addRes = res
      if (this.addRes.success) {
        this.loaders = false;
        this.addForm = true
        this.toastr.success(this.addRes.msg)
        this.addProductForm.reset();
        this.ngOnInit()
      }
    }})
      }
    
     
     

    } 
    
    
    else {
      this.addProductForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields')
    }
  }


  get title() {
    return this.addProductForm.get('title')
  }
  get incentive() {
    return this.addProductForm.get('incentive')
  }
  get incentive_type() {
    return this.addProductForm.get('incentive_type')
  }

  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    let [obj] = this.filteredData.filter((item:any)=>item.id == id);
        this.addForm = false
        this.addProductForm.patchValue(obj);
        this.editFormdata = obj
    
  }
  openaddForm() {
    if (this.update_id) {
      this.router.navigate(['//product/product-label'])
   }
    this.addForm = true;
    this.addProductForm.reset();
    this.addProductForm.get('incentive_type').setValue('%')
    
  }



  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.filteredData.filter(res => {
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
    const title = 'Tax List';
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
          { header: 'Incentive' },
          { header: 'Incentive Type' },
          { header: 'Is Active' }
        ],
      })
    doc.save('productLabel.pdf');

  }
  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'Product Label';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15);
    // Pass tableData to autoTable
    autoTable(doc, {
      head: [
        ['#', 'Title.', 'Incentive']
      ],
      body: this.filteredData.map((row: any, index: number) => [
        index + 1,
        row?.title,
        row.incentive,
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15,
    });
    doc.save('Product _Label.pdf');
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
    const fileName = 'productLabel.xlsx';
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
    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(6)');
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
      const isActiveTd = row.querySelector('td:nth-child(6)');
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
      this.itemsPerPage = this.filteredData.length;
    }
  }
}
