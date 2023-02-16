import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subscription } from 'rxjs';
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
    this.tableData = this.QueryService.companyList;

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
            this.tableData
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deleted!',
          text: 'Your file has been deleted.',
        });
        this.tableData.splice(index, 1);
      }
    });
  }

  ngOnInit(): void {
    this.dtOptions = {
      dom: 'Btlpif',
      pagingType: 'numbers',
      language: {
        search: ' ',
        searchPlaceholder: "Search...",
        info: "_START_ - _END_ of _TOTAL_ items",
      },
      initComplete: (settings, json) => {
        $('.dt-buttons').appendTo('.wordset');
        $('.dataTables_filter').appendTo('.search-input');
      },

    };
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
