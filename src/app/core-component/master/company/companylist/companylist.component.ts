import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { company } from 'src/app/interfaces/company';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-companylist',
  templateUrl: './companylist.component.html',
  styleUrls: ['./companylist.component.scss']
})
export class CompanylistComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any | company

  constructor(private QueryService: QueryService, private companyService: CompanyService, private router: Router) {
    this.QueryService.filterToggle()
  }

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
        this.companyService.deleteCompany(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Company Deleted successfully") {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.tableData.splice(index, 1);
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
  isAdd: any;
  isEdit: any;
  isDelete:any;
  userDetails:any
  ngOnInit(): void {
    //from localstorage
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'master' && res.content_type.model === 'company' && res.codename == 'add_company') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'master' && res.content_type.model === 'company' && res.codename == 'change_company') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     }else if (res.content_type.app_label === 'master' && res.content_type.model === 'company' && res.codename == 'delete_company') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);
    //     }
    //   });
    // }
//from profile api
    this.companyService.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission?.map((res: any) => {
        if (res.content_type.app_label === 'master' && res.content_type.model === 'company' && res.codename == 'add_company') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'company' && res.codename == 'change_company') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        }else if (res.content_type.app_label === 'master' && res.content_type.model === 'company' && res.codename == 'delete_company') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    });
    // this.companyService.getCompany()
    // this.companyService.companyBehaviour.subscribe( () => {
    //   this.tableData = JSON.parse(localStorage.getItem('companyList')!);
    // })
    this.companyService.getCompany().subscribe(res => {
      this.tableData = res;
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

  // companyList: any
  // getcompanyList() {
  //   this.companyService.getCompany().subscribe(res => {
  //     console.log(res);
  //     this.companyList = res;
  //   })
  // }

  delRes: any
  deleteId(id: number) {
    this.companyService.deleteCompany(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Company Deleted successfully") {
        // this.getcompanyList()
      }

    })
  }

  delete(i: any, id: any) {
    this.tableData.splice(id, 1)

    this.companyService.deleteC('/pv-api/company/', i.id).subscribe(res => {
      console.log(res);

    })

  }
}
