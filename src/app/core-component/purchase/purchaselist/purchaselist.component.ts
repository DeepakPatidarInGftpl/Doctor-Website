import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { PurchaseServiceService } from 'src/app/Services/Purchase/purchase-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-purchaselist',
  templateUrl: './purchaselist.component.html',
  styleUrls: ['./purchaselist.component.scss']
})
export class PurchaselistComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;

  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;

  constructor(private purchaseService: PurchaseServiceService,private cs:CompanyService) { }

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
        this.purchaseService.deletePurchase(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "PURCHASE ORDER Deleted successfully") {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: this.delRes.msg,
            });
            this.tableData.splice(index, 1);
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

  // active deactive
  isActive(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this purchase order!",
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
        this.purchaseService.PurchaseIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Purchase Order Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Purchase Order Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this purchase!",
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
        this.purchaseService.PurchaseIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Purchase Order Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Purchase Order Is Active Successfully.',
        });
      }
    });
  }
  isAdd:any;
  isEdit:any;
  isDelete:any;
  userDetails:any
  ngOnInit(): void {
   this.getPurchase();

   // permission from localstoarg 
  //  const localStorageData = JSON.parse(localStorage.getItem('auth'));
  //  if (localStorageData && localStorageData.permission) {
  //    const permission = localStorageData.permission;
  //    permission.map((res: any) => {
  //      if (res.content_type.app_label === 'master' && res.content_type.model === 'purchaseorder' && res.codename=='add_purchaseorder') {
  //        this.isAdd = res.codename;
  //        console.log(this.isAdd);
  //      } else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchaseorder' && res.codename=='change_purchaseorder') {
  //        this.isEdit = res.codename;
  //        console.log(this.isEdit);
  //      }else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchaseorder' && res.codename=='delete_purchaseorder') {
  //       this.isDelete = res.codename;
  //       console.log(this.isDelete);
  //     }
  //    });
  //  }

    // permissin from api profile
    this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'master' && res.content_type.model === 'purchaseorder' && res.codename=='add_purchaseorder') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchaseorder' && res.codename=='change_purchaseorder') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        }else if (res.content_type.app_label === 'master' && res.content_type.model === 'purchaseorder' && res.codename=='delete_purchaseorder') {
         this.isDelete = res.codename;
         console.log(this.isDelete);
       }
      });
    });
  }
  loader=true;
  getPurchase(){
    this.purchaseService.getPurchase().subscribe(res => {
      console.log(res);
      this.tableData = res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
  }
  allSelected: boolean = false;
  selectedRows: boolean[]
  selectAlll() {
    this.selectedRows.fill(this.allSelected);
  }

  select = false
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
  deleteId(id: number) {
    this.purchaseService.deletePurchase(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Purchase Order Deleted successfully") {
        // this.getcompanyList()
      }
    })
  }

  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
  //       console.log(res.supplier.name.toLocaleLowerCase());
  //       console.log(res.supplier.name.match(this.titlee));
  //       return res.supplier.name.match(this.titlee);
  //     })
  //   }
  // }

  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.supplier.name.toLocaleLowerCase(); 
        return nameLower.includes(searchTerm); 
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