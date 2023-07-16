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
itemsPerPage:number=10;
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
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
            });
            this.tableData.splice(index, 1);
           this.ngOnInit()
          }else{
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
  select=false
  // active deactive
  deActivate(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Deactivate this product!",
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, Deactivate it!',
     buttonsStyling: true,
     customClass: {
       confirmButton: 'btn btn-primary',
       cancelButton: 'btn btn-danger ml-1',
     },
   }).then((t) => {
     if (t.isConfirmed) {
       this.coreService.productIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Product Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Product Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this product!",
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     confirmButtonText: 'Yes, Active it!',
     buttonsStyling: true,
     customClass: {
       confirmButton: 'btn btn-primary',
       cancelButton: 'btn btn-danger ml-1',
     },
   }).then((t) => {
     if (t.isConfirmed) {
       this.coreService.productIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "Product Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Active!',
         text: 'Product Is Active Successfully.',
       });
     }
   });
 }
 loader=true;

 isAscending: boolean = true;

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
      this.tableData=res;
      this.loader=false;
      console.log(this.tableData);
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    console.log(this.tableData);
  }

  allSelected: boolean = false;
  selectedRows:boolean[]
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
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res.title.toLocaleLowerCase());
        console.log(res.title.toLocaleLowerCase().match(this.titlee.toLocaleLowerCase()));
        // return res.title.match(this.titlee);
        if(res.title.match(this.titlee)){
                  return res.title.match(this.titlee);
                }
                // else if(res.category.title.match(this.titlee)){
                //   return res.category.title.match(this.titlee);
                // }
                // else if(res.subcategory.title.match(this.titlee)){
                //   return res.subcategory.title.match(this.titlee);
                // }
                // else if(res.subcategory_group.title.match(this.titlee)){
                //   return res.subcategory_group.title.match(this.titlee);
                // }
                // else if(res.brand.title.match(this.titlee)){
                //   return res.brand.title.match(this.titlee);
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


  // read more or less
  sho = true;
  sho1 = false;
  sho2 = false;
  hide() {
    this.sho = false;
    this.sho1 = !this.sho1;
    this.sho2 = false;
  }
  hide1() {
    this.sho = true;
    this.sho1 = false;
    this.sho2 = !this.sho2;
  }
}
