import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.scss']
})
export class CategorylistComponent implements OnInit, OnDestroy {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any = []

  apiUrl = environment.api

  constructor(private QueryService: QueryService, private coreServ: CoreService, private router: Router) {
    this.QueryService.filterToggle()
  }


  confirmText(index: any, id) {
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
        this.coreServ.deleteProductCateg(id).subscribe( res => {
          console.log(res);
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



  ngOnInit() {

    this.coreServ.getProductCategory()
    this.coreServ.ProdCategBehaveSub.subscribe(() => {
      if (localStorage.getItem("prodCategories")) {
        this.tableData = Object.values(JSON.parse(localStorage.getItem("prodCategories")))
      }
    })


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

  editMode = false
  editThis(prod, index) {
    this.coreServ.editThisData(prod)
    this.editMode = true
    // this.router.navigate(['product/categorylist/'+`${prod.id}`])
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


  ngOnDestroy() {
    this.coreServ.editThisData(null)
}
}
