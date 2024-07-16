import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import Swal from 'sweetalert2';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/Services/offer/offer.service';

@Component({
  selector: 'app-coupon-list',
  templateUrl: './coupon-list.component.html',
  styleUrls: ['./coupon-list.component.scss']
})
export class CouponListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;
  selectActive: any;
  filteredData: any[];
  couponForm!: FormGroup;
  get f() {
    return this.couponForm.controls;
  }

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage = 10;
  navigateData: any;
  fileName: string;
  selectedFile: File;
  couponId: number;
  selectedFileName: string;
  fileFormatError = false;
  missingFieldsError = false;
  fieldfilteredData: any[] = [];
  constructor(private coreService: CoreService, private fb: FormBuilder, private toastr: ToastrService, private router: Router, private offerService: OfferService) {
    this.navigateData = this.router.getCurrentNavigation()?.extras?.state?.['id']
    if (this.navigateData) {
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
        this.offerService.deleteCoupon(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.success) {
            this.tableData
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
          } else {
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

  loader = true;
  userDetails: any
  ngOnInit(): void {
    this.couponForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      coupon_code: new FormControl('', [Validators.required]),
      expiry_date: new FormControl('', [Validators.required]),
      discount: new FormControl('', [Validators.required]),
      up_to: new FormControl('', [Validators.required])
    })
    this.getAllCoupons();
  }

  getAllCoupons() {
    this.offerService.getAllCoupons().subscribe((res) => {
      console.log(res);
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
      this.filteredData = this.tableData.slice();
    })
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

  openModal() {
    this.fileName = '';
    this.missingFieldsError = false;
    this.fileFormatError = false;
  }

  triggerFileInput() {
    const fileInput = document.getElementById('fileInput') as HTMLInputElement;
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      this.selectedFileName = file.name;
      const fileExtension = this.getFileExtension(file.name);
      if (fileExtension !== 'xlsx') {
        this.fileFormatError = true;
        this.missingFieldsError = false;
      } else {
        this.fileFormatError = false;
        this.readExcelFile(file);
      }
    }
  }

  getFileExtension(filename: string): string {
    return filename.split('.').pop()?.toLowerCase() || '';
  }

  readExcelFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonSheet = XLSX.utils.sheet_to_json(worksheet);

      if (this.validateColumns(jsonSheet)) {
        this.missingFieldsError = false;
        this.fieldfilteredData = jsonSheet.map((row: any) => ({
          title: row['title'],
          coupon_code: row['coupon_code'],
          discount: row['discount'],
          up_to: row['up_to'],
          expiry_date: row['expiry_date']
        }));
        console.log('Filtered Data:', this.fieldfilteredData);
      } else {
        this.missingFieldsError = true;
      }
    };
    reader.readAsArrayBuffer(file);
  }

  validateColumns(sheetData: any[]): boolean {
    if (!sheetData || sheetData.length === 0) {
      return false;
    }

    const requiredFields = ['title', 'coupon_code', 'discount', 'up_to', 'expiry_date'];
    const sheetFields = Object.keys(sheetData[0]);

    for (const field of requiredFields) {
      if (!sheetFields.includes(field)) {
        return false;
      }
    }
    return true;
  }

  createFilteredExcelFile(data: any[]) {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const wbout = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    return new Blob([wbout], { type: 'application/octet-stream' });
  }

  uploadFile() {
    const formData = new FormData();
    const filteredExcelBlob = this.createFilteredExcelFile(this.fieldfilteredData);
    formData.append('file', filteredExcelBlob, this.selectedFileName);

    this.loader = true;
    if (!this.fileFormatError && !this.missingFieldsError && this.fileName) {
      this.offerService.importOfferFile(formData).subscribe((res) => {
        console.log(res);
        this.toastr.success(res?.msg);
        this.loader = false;
        this.missingFieldsError = false;
        this.fileFormatError = false;
        let closeModal = <HTMLElement>document.querySelector('.closeModal');
        closeModal.click();
      }, (err) => {
        this.toastr.error(err?.error?.msg);
        console.error(err?.error?.msg);
      })
    } else {
      this.loader = false;
      this.toastr.error('Please Upload a valid File');
      console.error('No file selected');
      return;
    }
  }

  download() {
    this.offerService.exportSampleOfferFile().subscribe(
      (res: Blob) => {
        const blob = new Blob([res], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        saveAs(blob, 'coupon.xlsx');
      },
      (error) => {
        console.error('Error downloading the file:', error);
        this.toastr.error('Error downloading the file');
      }
    );
  }

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
  deleteId(id: number) {
    this.coreService.deletetax(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Tax Deleted successfully") {
        window.location.reload()
      }

    })
  }

  addRes: any
  loaders = false
  submit() {
    if (this.couponForm.valid) {
      this.loaders = true;
      this.offerService.addCoupon(this.couponForm.value).subscribe(res => {
        this.addRes = res
        if (this.addRes.success) {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.couponForm.reset()
          this.getAllCoupons();
        } else {
          this.toastr.error(this.addRes.tax_percentage)
        }
      }, err => { })

    } else {
      this.couponForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields')
    }
  }

  update() {
    if (this.couponForm.valid) {
      this.loaders = true;
      this.offerService.updateCoupon(this.couponForm.value, this.couponId).subscribe(res => {
        this.addRes = res;
        if (this.addRes.success) {
          this.loaders = false;
          this.addForm = true
          this.toastr.success(this.addRes.msg)
          this.couponForm.reset()
          this.getAllCoupons();
        }
      }, err => { })

    } else {
      this.couponForm.markAllAsTouched()
      this.toastr.error('Please Fill All The Required Fields')
    }
  }

  get title() {
    return this.couponForm.get('title')
  }

  get coupon_code() {
    return this.couponForm.get('coupon_code')
  }

  get expiry_date() {
    return this.couponForm.get('expiry_date')
  }

  get discount() {
    return this.couponForm.get('discount')
  }

  get up_to() {
    return this.couponForm.get('up_to')
  }

  addForm = true
  id: any
  editFormdata: any
  editForm(data: any) {
    this.couponId = data?.id;
    if (data?.id) {
      this.addForm = false
      this.couponForm.patchValue(data);
      this.editFormdata = data;
    }
  }
  openaddForm() {
    this.addForm = true;
    this.couponForm.reset();
  }

  search() {
    if (this.titlee === "") {
      this.filteredData = this.tableData;
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.filteredData = this.tableData.filter(res => {
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

  generatePDF() {
    const doc = new jsPDF();
    const title = 'Offer List';
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
          { header: 'Title' },
          { header: 'Code' },
          { header: 'Discount' },
          { header: 'Upto' },
          { header: 'Expiry Date' }
        ],
      })
    doc.save('coupon.pdf');

  }
  generatePDFAgain() {
    const doc = new jsPDF();
    const title = 'Tax List';
    doc.setFontSize(12);
    doc.setTextColor(33, 43, 54);
    doc.text(title, 82, 10);
    doc.text('', 10, 15);
    autoTable(doc, {
      head: [
        ['#', 'Title', 'Code', 'Discount', 'Upto', 'Expiry Date']
      ],
      body: this.tableData.map((row: any, index: number) => [
        index + 1,
        row?.title,
        row?.coupon_code,
        row?.discount,
        row?.up_to,
        row?.expiry_date
      ]),
      theme: 'grid',
      headStyles: {
        fillColor: [255, 159, 67]
      },
      startY: 15,
    });
    doc.save('coupon.pdf');
  }

  getVisibleDataFromTable(): any[] {
    const visibleData = [];
    const table = document.getElementById('mytable');
    const headerRow = table.querySelector('thead tr');
    const dataRows = table.querySelectorAll('tbody tr');
    //table heading
    const headerData = [];
    headerRow.querySelectorAll('th').forEach(cell => {
      const columnHeader = cell.textContent.trim();
      if (columnHeader !== 'Action') {
        headerData.push(columnHeader);
      }
    });
    visibleData.push(headerData);

    dataRows.forEach(row => {
      const rowData = [];
      row.querySelectorAll('td').forEach(cell => {
        rowData.push(cell.textContent.trim());
      });
      visibleData.push(rowData);
    });
    return visibleData;
  }
  exportToExcel(): void {
    const visibleDataToExport = this.getVisibleDataFromTable();
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(visibleDataToExport);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    const excelBuffer: any = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
    const fileName = 'coupon.xlsx';
    saveAs(blob, fileName);
  }
  printTable(): void {
    const tableElement = document.getElementById('mytable');
    const tableHTML = tableElement.outerHTML;

    const titleElement = document.querySelector('.titl');
    const titleHTML = titleElement.outerHTML;

    const clonedTable = tableElement.cloneNode(true) as HTMLTableElement;

    const isActiveTh = clonedTable.querySelector('th.thone:nth-child(5)');
    if (isActiveTh) {
      isActiveTh.remove();
    }

    const actionTh = clonedTable.querySelector('th.thone:last-child');
    if (actionTh) {
      actionTh.remove();
    }

    const rows = clonedTable.querySelectorAll('tr');
    rows.forEach((row) => {
      const isActiveTd = row.querySelector('td:nth-child(5)');
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
    window.addEventListener('afterprint', () => {
      console.log('afterprint');
      window.location.reload();
    });
    document.body.innerHTML = combinedContent;
    window.print();
    document.body.innerHTML = originalContents;
  }
  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.filteredData.length;
    }
  }
}
