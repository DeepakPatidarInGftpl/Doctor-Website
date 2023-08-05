import { Component, OnInit } from '@angular/core';

import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { employee } from 'src/app/interfaces/employee';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any | employee;

  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;

  constructor(private contactService: ContactService, private QueryService: QueryService,
    private cs:CompanyService) {
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
        this.contactService.deleteCustomer(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Customer Deleted successfully") {
           this.ngOnInit()
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
              text: this.delRes.erro,
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
      text: "Do you want to Deactivate this customer!",
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
        this.contactService.CustomerIsActive(id,'').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Customer Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Customer Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this customer!",
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
        this.contactService.CustomerIsActive(id,'').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Customer Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Customer Is Active Successfully.',
        });
      }
    });
  }
  loader=true;
  isAdd:any;
  isEdit:any;
  isDelete:any;
  userDetails:any
  ngOnInit(): void {
    this.contactService.getCustomer().subscribe(res => {
      console.log(res);
      this.tableData = res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    // from localstorage permission check
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'contacts'  && res.content_type.model === 'customer' && res.codename=='add_customer') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
          
    //     } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'customer' && res.codename=='change_customer') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
          
    //     }else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'customer' && res.codename=='delete_customer') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);
          
      
    //     }
    //   });
    // }

      // permissin from api profile
      this.cs.userDetails$.subscribe((userDetails) => {
        this.userDetails = userDetails;
        const permission = this.userDetails?.permission;
        permission.map((res: any) => {
          if (res.content_type.app_label === 'contacts'  && res.content_type.model === 'customer' && res.codename=='add_customer') {
            this.isAdd = res.codename;
            console.log(this.isAdd);
            
          } else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'customer' && res.codename=='change_customer') {
            this.isEdit = res.codename;
            console.log(this.isEdit);
            
          }else if (res.content_type.app_label === 'contacts' && res.content_type.model === 'customer' && res.codename=='delete_customer') {
            this.isDelete = res.codename;
            console.log(this.isDelete);
            
        
          }
        });
      });
  }

  allSelected: boolean = false;
  selectedRows:boolean[]
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
  deleteId(id: number) {
    this.contactService.deleteCustomer(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Employee Deleted successfully") {
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
  //       console.log(res.name.toLocaleLowerCase());
  //       console.log(res.name.match(this.titlee));
  //       return res.name.match(this.titlee);
  //     })
  //   }
  // }
  // search() {
  //   if (this.titlee === "") {
  //     this.ngOnInit();
  //   } else {
  //     const searchTerm = this.titlee.toLocaleLowerCase(); 
  //     this.tableData = this.tableData.filter(res => {
  //       const nameLower = res.name.toLocaleLowerCase(); 
  //       return nameLower.includes(searchTerm); 
  //     });
  //   }
  // }

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase();
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.name.toLocaleLowerCase();
        const companyNameLower = res.company_name.toLocaleLowerCase();
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