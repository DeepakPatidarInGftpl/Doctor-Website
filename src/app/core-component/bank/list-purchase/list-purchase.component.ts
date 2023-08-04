import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Account } from 'src/app/interfaces/account';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

@Component({
  selector: 'app-list-purchase',
  templateUrl: './list-purchase.component.html',
  styleUrls: ['./list-purchase.component.scss']
})
export class ListPurchaseComponent implements OnInit {

  
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any | Account

  titlee: any;
  name: any
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  constructor(private posService: PosDashboardService, private QueryService: QueryService,private cs:CompanyService) {
    this.QueryService.filterToggle()
  }

  delRes: any
  // confirmText(index: any, id: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "You won't be able to revert this!",
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, delete it!',
  //     buttonsStyling: true,
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-danger ml-1',
  //     },
  //   }).then((t) => {
  //     if (t.isConfirmed) {
  //       this.coreService.deleteCompanyBank(id).subscribe(res => {
  //         this.delRes = res
  //         if (this.delRes.msg == "Company Bank Deleted successfully") {
  //           this.ngOnInit();
  //           Swal.fire({
  //             icon: 'success',
  //             title: 'Deleted!',
  //             text: this.delRes.msg,
  //           });
  //           this.tableData.splice(index, 1);
  //         }else {
  //           Swal.fire({
  //             icon: 'error',
  //             title: 'Not Deleted!',
  //             text: this.delRes.error,
  //           });
  //         }
  //       })
  //     }
  //   });
  // }
  // select=false
  //  // active deactive
  //  deActivate(index: any, id: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to Deactivate this company bank!",
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, Deactivate it!',
  //     buttonsStyling: true,
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-danger ml-1',
  //     },
  //   }).then((t) => {
  //     if (t.isConfirmed) {
  //       this.coreService.CompanyBankIsActive(id,'').subscribe(res => {
  //         this.delRes = res
  //         if (this.delRes.msg == "Company Bank Is active Updated Successfully") {
  //           this.ngOnInit()
  //         }
  //       })
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Deactivate!',
  //         text: 'Company Bank Is Deactivate Successfully.',
  //       });
  //     }
  //   });
  // }
  // Active(index: any, id: any) {
  //   Swal.fire({
  //     title: 'Are you sure?',
  //     text: "Do you want to Active this Company Bank!",
  //     showCancelButton: true,
  //     confirmButtonColor: '#3085d6',
  //     cancelButtonColor: '#d33',
  //     confirmButtonText: 'Yes, Active it!',
  //     buttonsStyling: true,
  //     customClass: {
  //       confirmButton: 'btn btn-primary',
  //       cancelButton: 'btn btn-danger ml-1',
  //     },
  //   }).then((t) => {
  //     if (t.isConfirmed) {
  //       this.coreService.CompanyBankIsActive(id,'').subscribe(res => {
  //         this.delRes = res
  //         if (this.delRes.msg == "Company Bank Is active Updated Successfully") {
  //           this.ngOnInit()
  //         }
  //       })
  //       Swal.fire({
  //         icon: 'success',
  //         title: 'Active!',
  //         text: 'Company Bank Is activate Successfully.',
  //       });
  //     }
  //   });
  // }
  loader = true;
  isAdd: any;
  isEdit: any;
  isDelete: any;
  userDetails:any
  ngOnInit(): void {
    console.log('');
    this.posService.getPurchase().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })

    // permission from localstorage api
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'pos' && res.content_type.model === 'payments' && res.codename == 'add_payments') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'payments' && res.codename == 'change_payments') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'payments' && res.codename == 'delete_payments') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);
    //     }
    //   });
    // }

      // permission from profile api
      this.cs.userDetails$.subscribe((userDetails) => {
        this.userDetails = userDetails;
        const permission = this.userDetails?.permission;
        permission.map((res: any) => {
          if (res.content_type.app_label === 'pos' && res.content_type.model === 'payments' && res.codename == 'add_payments') {
            this.isAdd = res.codename;
            console.log(this.isAdd);
          } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'payments' && res.codename == 'change_payments') {
            this.isEdit = res.codename;
            console.log(this.isEdit);
          } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'payments' && res.codename == 'delete_payments') {
            this.isDelete = res.codename;
            console.log(this.isDelete);
          }
        });
      });
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

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.receipt_mode.toLocaleLowerCase();
        const companyNameLower = res.receipt_method.toLocaleLowerCase();
        if (nameLower.match(searchTerm)) {
          return true;
        } else if (companyNameLower.match(searchTerm)) {
          return true;
        }
        return false;
      });
    }
  }

  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }
}
