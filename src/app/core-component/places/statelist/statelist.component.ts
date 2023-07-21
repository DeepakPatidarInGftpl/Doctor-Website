import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-statelist',
  templateUrl: './statelist.component.html',
  styleUrls: ['./statelist.component.scss']
})
export class StatelistComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  stateForm!: FormGroup;
  get f() {
    return this.stateForm.controls;
  }
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService,
    private Service: CompanyService) {
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
        this.coreService.deletestate(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "State Deleted successfully") {
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
            });
          } else {
            console.log(this.delRes);
            // this.toastr.error(this.delRes.error)
            Swal.fire({
              icon: 'error',
              title: 'Not Deleted!',
              text: this.delRes.error,
            });
          }
        })

        // this.tableData.splice(index, 1);
      }
    });
  }

  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this state!",
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
        this.coreService.stateIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "State Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'State Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this state!",
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
        this.coreService.stateIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "State Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'State Is Active Successfully.',
        });
      }
    });
  }
  loader = true;
  isEdit:any;
  isAdd:any;
  isDelete:any;
  ngOnInit(): void {
    this.stateForm = this.fb.group({
      state: new FormControl('', [Validators.required]),
      state_code: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
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

    // this.coreService.getstate();

    // this.coreService.stateBehavior.subscribe( () => {
    //   this.tableData = JSON.parse(localStorage.getItem('stateList')!)
    // })
    this.coreService.getstate().subscribe(res => {
      this.loader = false;
      this.tableData = res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    console.log(this.tableData);
    this.getCountryList();

    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData && localStorageData.permission) {
      const permission = localStorageData.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'places' && res.content_type.model === 'state' && res.codename=='add_state') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'places' && res.content_type.model === 'state' && res.codename=='change_state') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        }else if (res.content_type.app_label === 'places' && res.content_type.model === 'state' && res.codename=='delete_state') {
          this.isDelete = res.codename;
          console.log(this.isDelete);
        }
      });
    }
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
    this.coreService.deletestate(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "State Deleted successfully") {
        // window.location.reload()
        this.ngOnInit()
      }

    })
  }
  countryList: any
  getCountryList() {
    this.coreService.getCountry().subscribe(res => {
      this.countryList = res
    })
  }
  addRes: any;
  loaders = false;
  submit() {
    console.log(this.stateForm.value);
    console.log(this.id);

    if (this.stateForm.valid) {
      this.loaders = true;
      this.coreService.addstate(this.stateForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.stateForm.reset()
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error.gst);
      })

    } else {
      this.stateForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }
  countryError = null;
  update() {
    if (this.stateForm.valid) {
      this.loaders = true;
      this.coreService.updatestate(this.stateForm.value, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "State updated successfully") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.stateForm.reset();
          this.addForm = true;
          this.ngOnInit()
        }
      }, err => {
        console.log(err.error);
        if (err.error.country) {
          this.countryError = 'Select Country';
          setTimeout(() => {
            this.countryError = ''
          }, 3000);
        }
      })

    } else {
      this.stateForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }
  countryy: any
  getCountry() {
    this.Service.countryList().subscribe(res => {
      this.countryy = res
    })
  }
  get state() {
    return this.stateForm.get('state')
  }
  get state_code() {
    return this.stateForm.get('state_code')
  }
  get country() {
    return this.stateForm.get('country')
  }

  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getstateById(id).subscribe(res => {
      console.log(res);
      res.map((data: any) => {
        if (id == data.id) {
          this.addForm = false
          this.stateForm.patchValue(data);
          this.editFormdata = data
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.stateForm.reset();
  }


  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res.state.toLocaleLowerCase());
        console.log(res.state.match(this.titlee));
        return res.state.match(this.titlee);
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
