import { Component, OnInit } from '@angular/core';

import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WebsiteService } from 'src/app/Services/website/website.service';
import Swal from 'sweetalert2';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
// vaidation for future date
function futureDateValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const selectedDate = new Date(control.value);
    const currentDate = new Date();

    if (selectedDate < currentDate) {
      return { pastDate: true };
    }

    return null;
  };
}
@Component({
  selector: 'app-deal-of-the-day',
  templateUrl: './deal-of-the-day.component.html',
  styleUrls: ['./deal-of-the-day.component.scss']
})
export class DealOfTheDayComponent implements OnInit {
  //
  dropdownList = [];
  selectedItems: any[] = [];
  dropdownSettings: IDropdownSettings = {};
  //

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;
  dealOfTheDayForm!: FormGroup;
  get f() {
    return this.dealOfTheDayForm.controls;
  }

  titlee: any;
  p: number = 1
  pageSize: number = 10;

  itemsPerPage = 10;
  constructor(private websiteService: WebsiteService, private fb: FormBuilder, private toastr: ToastrService, private cs: CompanyService) {
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
        this.websiteService.deleteDealOfTheDay(id).subscribe(res => {
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
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this Deals Of The Day!",
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
        this.websiteService.DealOfTheDayIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Deals Of The Day Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Deals Of The Day!",
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
        this.websiteService.DealOfTheDayIsActive(id, '').subscribe(res => {
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
  userDetails: any;
  ngOnInit(): void {
    this.dealOfTheDayForm = this.fb.group({
      variant: new FormArray([], [Validators.required]),
      discount: new FormControl('', [Validators.pattern(/^(100|[0-9]{1,2})$/), Validators.required]),
      datetime: new FormControl('', [Validators.required, futureDateValidator()])
    })
    //dropdown list
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'product_title',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };

    this.websiteService.getDealOfTheDay().subscribe(res => {
      this.loader = false;
      this.tableData = res;

      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    this.getVariant();

    //permission from localstorage
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'product' && res.content_type.model === 'dealsoftheday' && res.codename=='add_dealsoftheday') {
    //       this.isAdd = res.codename;
          // console.log(this.isAdd);   
    //     } else if (res.content_type.app_label === 'product' && res.content_type.model === 'dealsoftheday' && res.codename=='change_dealsoftheday') {
    //       this.isEdit = res.codename;
          // console.log(this.isEdit);  
    //     }else if (res.content_type.app_label === 'product' && res.content_type.model === 'dealsoftheday' && res.codename=='delete_dealsoftheday') {
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
        if (res.content_type.app_label === 'product' && res.content_type.model === 'dealsoftheday' && res.codename == 'add_dealsoftheday') {
          this.isAdd = res.codename;
          // console.log(this.isAdd);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'dealsoftheday' && res.codename == 'change_dealsoftheday') {
          this.isEdit = res.codename;
          // console.log(this.isEdit);
        } else if (res.content_type.app_label === 'product' && res.content_type.model === 'dealsoftheday' && res.codename == 'delete_dealsoftheday') {
          this.isDelete = res.codename;
          // console.log(this.isDelete);
        }
      });
    });
  }

  //
  onItemSelect(item: any) {
    // console.log(item);
    let formArray: any = this.dealOfTheDayForm.get('variant') as FormArray;
    formArray.push(new FormControl(item.id))
  }
  onItemDeselect(item: any): void {
    // Handle the deselection of the item
    // console.log('Item deselected:', item);
    let formArray: FormArray = this.dealOfTheDayForm.get('variant') as FormArray;
    // console.log(formArray);
    const index = formArray.controls.findIndex(control => control.value === item.id);
    // console.log(index);
    if (index !== -1) {
      formArray.removeAt(index);
    }
  }

  onSelectAll(items: any) {
    // console.log(items);
    let formArray: any = this.dealOfTheDayForm.get('variant') as FormArray;
    items.forEach((item: any) => {
      formArray.push(new FormControl(item.id));
    });
  }
  onDeselectAll(items: any) {
    // console.log('All items deselected:', items);
    let formArray: any = this.dealOfTheDayForm.get('variant') as FormArray;
    formArray.clear();
  }
  variantList: any[] = [];
  getVariant() {
    this.websiteService.getVariant().subscribe((res: any) => {
      // console.log(res);
      this.variantList = res;
    })
  }
  //
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

  addRes: any;
  loaders = false;
  submit() {
    // console.log(this.dealOfTheDayForm.value);
    if (this.dealOfTheDayForm.valid) {
      this.loaders = true;
      // console.log('valid');
      var formdata: any = new FormData()
      formdata.append('discount', this.dealOfTheDayForm.get('discount')?.value);
      // formdata.append('variant', JSON.stringify(this.dealOfTheDayForm.get('variant')?.value));
      // Filter out null values from the variant array
      const variantArray = this.dealOfTheDayForm.get('variant')?.value.filter((value: any) => value !== null);
      formdata.append('variant', JSON.stringify(variantArray));
      formdata.append('datetime', this.dealOfTheDayForm.get('datetime')?.value);

      this.websiteService.addDealOfTheDay(formdata).subscribe(res => {
        // console.log(res);
        this.loaders = false;
        this.addRes = res
        if (this.addRes.sucess) {
          this.toastr.success(this.addRes.msg);
          this.selectedItems = [];
          this.dealOfTheDayForm.reset();
          this.ngOnInit()
        } else {
          this.loaders = false;
          this.toastr.error(this.addRes.msg)
        }
      }, err => {
        this.loaders = false;
        // console.log(err.error);
      })
    } else {
      this.dealOfTheDayForm.markAllAsTouched()
      // console.log('forms invalid');
    }
  }

  update() {
    // console.log(this.id);
    // console.log(this.dealOfTheDayForm.value);
    if (this.dealOfTheDayForm.valid) {
      this.loaders = true;
      var formdata: any = new FormData()
      formdata.append('discount', this.dealOfTheDayForm.get('discount')?.value);
      // formdata.append('variant', JSON.stringify(this.dealOfTheDayForm.get('variant')?.value));
      const variantArray = this.dealOfTheDayForm.get('variant')?.value.filter((value: any) => value !== null);
      formdata.append('variant', JSON.stringify(variantArray));
      formdata.append('datetime', this.dealOfTheDayForm.get('datetime')?.value);

      this.websiteService.updateDealOfTheDay(formdata, this.id).subscribe(res => {
        // console.log(res);

        this.addRes = res
        if (this.addRes.success) {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.dealOfTheDayForm.reset()
          this.addForm = true
          this.selectedItems = [];
          this.ngOnInit()
        } else {
          this.loaders = false;
          this.toastr.error(this.addRes.msg)
        }
      }, err => {
        this.loaders = false;
        // console.log(err.error);
      })
    } else {
      this.dealOfTheDayForm.markAllAsTouched()
      // console.log('forms invalid');
    }
  }

  get variant() {
    return this.dealOfTheDayForm.get('variant')
  }
  get discount() {
    return this.dealOfTheDayForm.get('discount')
  }
  get datetime() {
    return this.dealOfTheDayForm.get("datetime")
  }

  addForm = true
  id: any
  editFormdata: any;
  resEdit: any;
  variantItem: any;
  editForm(id: number) {
    this.id = id
    this.websiteService.getDealOfTheDayById(id).subscribe(res => {
      // console.log(res);
      this.resEdit = res;
      if (id == this.resEdit.id) {
        // console.log(this.resEdit.variant);
        this.addForm = false
        this.dealOfTheDayForm.patchValue({
          discount: this.resEdit.discount,
          // datetime: this.resEdit.datetime
        });
        const formattedDate = new Date(this.resEdit.datetime).toISOString().slice(0, 16);
        this.dealOfTheDayForm.get('datetime')?.patchValue(formattedDate);
        // here selected data send value in formArray
        this.resEdit.variant.map((res: any) => {
          // console.log(res);
          let formArray: any = this.dealOfTheDayForm.get('variant') as FormArray;
          formArray.push(new FormControl(res.id))
        })
        // here display auto selected data
        this.variantItem = res.variant.map((variant: any) => {
          return {
            id: variant.id,
            product_title: variant.product_title
          };
        });
        this.selectedItems = this.variantItem;
        // console.log(this.variantItem);
        this.editFormdata = res;
      }
    })
  }
  openaddForm() {
    this.addForm = true;
    this.dealOfTheDayForm.reset();
  }

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter((res: any) => {
        // console.log(res);
        const matchingVariants = res.variant.filter((variant: any) =>
          variant.product_title.toLowerCase().includes(this.titlee.toLowerCase())
        );
        return matchingVariants.length > 0;
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
    const title = 'Deal Of The Day';
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
          { header: 'Discount' },
          { header: 'Variant' },
          { header: 'Created Date' },
          { header: 'Is Active' }
        ],
      })
    doc.save('dealoftheday.pdf');
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
    const fileName = 'dealoftheday.xlsx';
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
    // Replace the content of the body with the combined content
    document.body.innerHTML = combinedContent;
    window.print();
    // Restore the original content of the body
    document.body.innerHTML = originalContents;
  }
}
