import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'
import * as XLSX from 'xlsx';
import { ToastrService } from 'ngx-toastr';
import { TransactionService } from 'src/app/Services/transactionService/transaction.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

@Component({
  selector: 'app-scrap-entry-list',
  templateUrl: './scrap-entry-list.component.html',
  styleUrls: ['./scrap-entry-list.component.scss']
})
export class ScrapEntryListComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;

  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  supplierType: string = '';
  selectedCompany: string = '';

  constructor(private transactionService: TransactionService,private cs:CompanyService,private toastrService:ToastrService) {}



loader=true;
isAdd:any;
isEdit:any;
isDelete:any;
userDetails:any;
  ngOnInit(): void {
    this.transactionService.getScrapEntry().subscribe(res => {
      this.tableData = res;
      this.loader=false;
     
    })

    //permission from profile api
    this.cs.userDetails$.subscribe((userDetails:any) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'transactions'  && res.content_type.model === 'scarpentry' && res.codename=='add_scarpentry') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'scarpentry' && res.codename=='change_scarpentry') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        }else if (res.content_type.app_label === 'transactions' && res.content_type.model === 'scarpentry' && res.codename=='delete_scarpentry') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
    });
  })
  }

  allSelected: boolean = false;
  selectedRows:boolean[]=[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

select=false
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
  
  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.tableData = this.tableData.filter((res:any) => {
        const nameLower = res?.voucher_no.toLocaleLowerCase() || "";
        if (nameLower.includes(searchTerm) ) {
          return true;
        } 
        return false;
      });
    }
  }
  

  key = 'id'
  reverse: boolean = true;
  sort(key:any) {
    this.key = key;
    this.reverse = !this.reverse
  }

  changePg(val: any) {
    console.log(val);
    if (val == -1) {
      this.itemsPerPage = this.tableData.length;
    }
  }

}

