import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { Account } from 'src/app/interfaces/account';
import { PosDashboardService } from 'src/app/Services/pos-dashboard.service';

@Component({
  selector: 'app-list-expense',
  templateUrl: './list-expense.component.html',
  styleUrls: ['./list-expense.component.scss']
})
export class ListExpenseComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any | Account

  titlee: any;
  name: any
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  constructor(private posService: PosDashboardService, private QueryService: QueryService,) {
    this.QueryService.filterToggle()
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
        this.posService.deleteExpence(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Company Bank Deleted successfully") {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.tableData.splice(index, 1);
          }else {
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
  ngOnInit(): void {
    console.log('');
    this.posService.getExpense().subscribe(res => {
      this.tableData = res;
      this.loader = false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData && localStorageData.permission) {
      const permission = localStorageData.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'pos' && res.content_type.model === 'expance' && res.codename == 'add_expance') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'expance' && res.codename == 'change_expance') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        } else if (res.content_type.app_label === 'pos' && res.content_type.model === 'expance' && res.codename == 'delete_expance') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    }
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
        const nameLower = res.party?.name.toLocaleLowerCase();
        const companyNameLower = res?.payment_account?.branch_name.toLocaleLowerCase();
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
