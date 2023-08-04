import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-citylist',
  templateUrl: './citylist.component.html',
  styleUrls: ['./citylist.component.scss']
})
export class CitylistComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  cityForm!: FormGroup;
  get f() {
    return this.cityForm.controls;
  }
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService,
    private cs :CompanyService) {
    this.QueryService.filterToggle();
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
        this.coreService.deletecity(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "City Deleted successfully") {
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
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this city!",
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
        this.coreService.cityIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "City Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'City Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this city!",
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
        this.coreService.cityIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "City Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'City Is Active Successfully.',
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
    this.cityForm = this.fb.group({
      city: new FormControl('', [Validators.required]),
      city_code: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
    })
    // this.dtOptions = {
    //   dom: 'Btlpif',
    //   pagingType: 'numbers',
    //   language: {
    //     search: ' ',
    //     searchPlaceholder: "Search...",
    //     info: "_START_ - _END_ of _TOTAL_ items",
    //   },
    //   initComplete: (settings, json) => {
    //     $('.dt-buttons').appendTo('.wordset');
    //     $('.dataTables_filter').appendTo('.search-input');
    //   },

    // };
    // this.coreService.getcity();
    // this.coreService.cityBehavior.subscribe( () => {
    //   this.tableData = JSON.parse(localStorage.getItem('cityList')!);
    // })

    this.coreService.getcity().subscribe(res => {
      this.loader=false;
      this.tableData = res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    console.log(this.tableData);
    this.getstate();

    //permission from localstorage
    // const localStorageData = JSON.parse(localStorage.getItem('auth'));
    // if (localStorageData && localStorageData.permission) {
    //   const permission = localStorageData.permission;
    //   permission.map((res: any) => {
    //     if (res.content_type.app_label === 'places' && res.content_type.model === 'city' && res.codename=='add_city') {
    //       this.isAdd = res.codename;
    //       console.log(this.isAdd);
    //     } else if (res.content_type.app_label === 'places' && res.content_type.model === 'city' && res.codename=='change_city') {
    //       this.isEdit = res.codename;
    //       console.log(this.isEdit);
    //     } else if (res.content_type.app_label === 'places' && res.content_type.model === 'city' && res.codename=='delete_city') {
    //       this.isDelete = res.codename;
    //       console.log(this.isDelete);
    //     }
    //   });
    // }

     // permission from profile api
     this.cs.userDetails$.subscribe((userDetails) => {
      this.userDetails = userDetails;
      const permission = this.userDetails?.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'places' && res.content_type.model === 'city' && res.codename=='add_city') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'places' && res.content_type.model === 'city' && res.codename=='change_city') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        } else if (res.content_type.app_label === 'places' && res.content_type.model === 'city' && res.codename=='delete_city') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    });
  }

  //select table row
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
  deleteId(id: number) {
    this.coreService.deletecity(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "City Deleted successfully") {
        window.location.reload()
      }

    })
  }
  stateList: any
  getstate() {
    this.coreService.getstateD().subscribe(res => {
      this.stateList = res
    })
  }
  addRes: any;
  loaders=false;
  submit() {
    console.log(this.cityForm.value);
    console.log(this.id);

    if (this.cityForm.valid) {
      this.loaders=true;
      this.coreService.addcity(this.cityForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.cityForm.reset()
          // window.location.reload();
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.cityForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  stateError = null
  update() {
    if (this.cityForm.valid) {
      this.loaders=true;
      this.coreService.updatecity(this.cityForm.value, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "City updated successfully") {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.cityForm.reset();
          this.addForm = true;
          // window.location.reload()
          this.ngOnInit();
        }
      }, err => {
        console.log(err.error.state);
        if (err.error.state) {
          this.stateError = 'Select State';
          setTimeout(() => {
            this.stateError = ''
          }, 3000);
        }
      })

    } else {
      this.cityForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get city() {
    return this.cityForm.get('city')
  }
  get city_code() {
    return this.cityForm.get('city_code')
  }
  get state() {
    return this.cityForm.get('state')
  }

  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getcityById(id).subscribe(res => {
      console.log(res);
      res.map((data: any) => {
        if (id == data.id) {
          this.addForm = false
          this.cityForm.patchValue(data);
          this.editFormdata = data
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.cityForm.reset();
  }


  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
  //       console.log(res.city.toLocaleLowerCase());
  //       console.log(res.city.match(this.titlee));
  //       return res.city.match(this.titlee);
  //     })
  //   }
  // }
  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.city.toLocaleLowerCase(); 
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
