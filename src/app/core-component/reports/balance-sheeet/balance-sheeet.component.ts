import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';
import { Observable, map, startWith } from 'rxjs';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';
import { ReportService } from 'src/app/Services/report/report.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { SalesService } from 'src/app/Services/salesService/sales.service';
@Component({
  selector: 'app-balance-sheeet',
  templateUrl: './balance-sheeet.component.html',
  styleUrls: ['./balance-sheeet.component.scss']
})
export class BalanceSheeetComponent implements OnInit {
  
    loader = true;
    public tableData: any
    id: any;
    dtOptions: DataTables.Settings = {};
    initChecked: boolean = false
    public countryList: any = [];
  
    titlee: any;
    p: number = 1
    pageSize: number = 10;
    itemsPerPage: number = 10;
  
    filteredSuppliers: Observable<any[]> | undefined;
    supplierControl: FormControl = new FormControl('');
    
    filteredProduct: Observable<any[]> | undefined;
    productControl: FormControl = new FormControl('');
    userName: any;
    
    constructor(private router: Router, private fb: FormBuilder, private toastr: ToastrService, private transactionService:TransactionService, private coreService:CoreService, private cs:CompanyService, private datepipe: DatePipe, private reportService:ReportService) {
    }
      //product Day Book form
      productDayBookform!: FormGroup;
      startDate: any;
      endDate: any;
      userDetails: any;
      ngOnInit(): void {
        this.cs.userDetails$.subscribe((userDetails) => {
          this.userDetails = userDetails;
          console.log(userDetails);
          this.userName=userDetails?.username
        });
    
        const today = new Date();
        const month = today.getMonth();
        const year = today.getFullYear();
        const startDate = new Date(today);
        startDate.setDate(today.getDate() - 14);
    
        const formattedStartDate = this.formatDate(startDate);
        const formattedToday = this.formatDate(today);
    
        // product DayBook form
        this.productDayBookform = new FormGroup({
          start: new FormControl(formattedStartDate),
          end: new FormControl(formattedToday),
          
        });
        this.startDate = this.productDayBookform.value?.start;
        this.endDate = this.productDayBookform.value?.end;
        this.getproductDayBook();
       
      }
      // getproductDayBook() {
      //   throw new Error('Method not implemented.');
      // }
      private formatDate(date: Date): string {
        return this.datepipe.transform(date, 'yyyy-MM-dd') || '';
      }
    
      key = 'id'
      reverse: boolean = false;
      sort(key: any) {
        this.key = key;
        this.reverse = !this.reverse
      }
    
      //select table row
      allSelected: boolean = false;
      selectedRows: boolean[] = [];
      selectAlll() {
        this.selectedRows.fill(this.allSelected);
      }
      calculateProductRange(currentPage: number, productsPerPage: number, totalProducts: number): string {
        const startIndex = (currentPage - 1) * productsPerPage;
        const endIndex = Math.min(startIndex + productsPerPage - 1, totalProducts - 1);
        return `Showing ${startIndex + 1}–${endIndex + 1} of ${totalProducts} results`;
      }
    productDayBookList:any
      getproductDayBook() {
        this.reportService.getBalanceSheet(this.startDate, this.endDate).subscribe((res:any) => {
          console.log(res);
          this.productDayBookList = res;
        })
    
      }
    
      // api call
      getSelectedProductDayBookDates() {
        console.log(this.productDayBookform.value);
        const start = this.datepipe.transform(this.productDayBookform.value.start, 'yyyy-MM-dd');
        const end = this.datepipe.transform(this.productDayBookform.value.end, 'yyyy-MM-dd');
        console.log(start);
        console.log(end);
        this.startDate = start;
        this.endDate = end;
        this?.getproductDayBook();
      }
      
      loaders=false;
      exportToExcel(): void {
        this.loaders=true;
        const excelUrl = this.reportService.exportToExcelBalanceSheet(this.startDate, this.endDate);
        window.open(excelUrl);
        this.loaders=false;
      }
      
    
     
      changePg(val: any) {
        console.log(val);
        if (val == -1) {
          this.itemsPerPage = this.productDayBookList?.length;
        }
      }
    }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
      
    
      
    
    
  
  
  
  
  
  

