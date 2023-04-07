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

  titlee: any;
p:number=1
pageSize: number = 10;
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
    // this.dtOptions = {
    //   dom: 'Btlpif',
    //   pagingType: 'numbers',
    //   language: {
    //     search: ' ',
    //     searchPlaceholder: 'Search...',
    //     info: '_START_ - _END_ of _TOTAL_ items',
    //   },
    //   initComplete: (settings, json) => {
    //     $('.dt-buttons').appendTo('.none');
    //     $('.dataTables_filter').appendTo('.search-input');
    //   },
    // };

    // this.coreService.getProduct();
    // this.coreService.productListBehaviur.subscribe( () => {
    //   if (localStorage.getItem('productList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("productList")!))
    //   }
    // })
    // this.QueryService.productList;
    this.coreService.getProducts().subscribe(res=>{
      this.tableData=res
    })
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

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res.title.toLocaleLowerCase());
        console.log(res.title.match(this.titlee));
        // search data base on - title, category,subcategory,subcategory_grp,
        if(res.title.match(this.titlee)){
          return res.title.match(this.titlee);
        }else if(res.category.match(this.titlee)){
          return res.category.match(this.titlee);
        }
        else if(res.subcategory.match(this.titlee)){
          return res.subcategory.match(this.titlee);
        }
        // else if(res.subcategory_group.match(this.titlee)){
        //   return res.subcategory_group.match(this.titlee);
        // }
        // else if(res.brand.match(this.titlee)){
        //   return res.brand.match(this.titlee);
        // }
       
      })
    }
  }
  key = 'id'
  reverse: boolean = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse
  }

}
