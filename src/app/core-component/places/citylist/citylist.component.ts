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
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService,
    private service: CompanyService) {
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
  ngOnInit(): void {
    this.cityForm = this.fb.group({
      city: new FormControl('', [Validators.required]),
      city_code: new FormControl('', [Validators.required]),
      state: new FormControl('', [Validators.required]),
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
    this.coreService.getcity();
    this.coreService.cityBehavior.subscribe( () => {
      this.tableData = JSON.parse(localStorage.getItem('cityList')!);
    })
    console.log(this.tableData);
    this.getstate();
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
  addRes: any
  submit() {
    console.log(this.cityForm.value);
    console.log(this.id);

    if (this.cityForm.valid) {
        this.coreService.addcity(this.cityForm.value).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Data Created") {
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

  update(){
    if (this.cityForm.valid) {
        this.coreService.updatecity(this.cityForm.value, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "City updated successfully") {
            this.toastr.success(this.addRes.msg)
            this.cityForm.reset();
            this.addForm = true;
            // window.location.reload()
            this.ngOnInit();
          }
        }, err => {
          console.log(err.error.gst);
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

}
