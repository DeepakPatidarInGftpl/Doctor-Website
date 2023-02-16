import { Component, OnInit } from '@angular/core';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss'],
})
export class ProductlistComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any = []

  constructor(private QueryService: QueryService, private coreService: CoreService) {
    this.QueryService.filterToggle()
  }
  delRes:any
  confirmText(index: any,id:number) {
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
        this.coreService.deleteProduct(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Prodct Deleted successfully") {
           this.ngOnInit()
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
        searchPlaceholder: 'Search...',
        info: '_START_ - _END_ of _TOTAL_ items',
      },
      initComplete: (settings, json) => {
        $('.dt-buttons').appendTo('.none');
        $('.dataTables_filter').appendTo('.search-input');
      },
    };

    this.coreService.getProduct();
    this.coreService.productListBehaviur.subscribe( () => {
      this.tableData =  Object.values(JSON.parse(localStorage.getItem("productList")))
    })
    // this.QueryService.productList;
    console.log(this.tableData);
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
}
