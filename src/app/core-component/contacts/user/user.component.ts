import { Component, OnInit } from '@angular/core';


import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import { employee } from 'src/app/interfaces/employee';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any | employee;

  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;

  constructor(private contactService: ContactService, private QueryService: QueryService,) {
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
        this.contactService.deleteUser(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "User Deleted successfully") {
           this.ngOnInit();
           Swal.fire({
            icon: 'success',
            title: 'Deleted!',
            text: 'Your file has been deleted.',
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
      text: "Do you want to Deactivate this user!",
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
        this.contactService.UserIsActive(id,'').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "User Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'User Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this user!",
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
        this.contactService.SupplierIsActive(id,'').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "User Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'User Is Active Successfully.',
        });
      }
    });
  }
  loader=true;
  ngOnInit(): void {
    this.contactService.getUser().subscribe(res => {
      console.log(res);
      this.tableData = res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
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
    this.contactService.deleteSupplier(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Employee Deleted successfully") {
        // this.getcompanyList()
      }

    })
  }
  
  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res.name.toLocaleLowerCase());
        console.log(res.name.match(this.titlee));
        return res.name.match(this.titlee);
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