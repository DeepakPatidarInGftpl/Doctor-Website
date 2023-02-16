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
    this.stateForm = this.fb.group({
      state: new FormControl('', [Validators.required]),
      state_code: new FormControl('', [Validators.required]),
      country: new FormControl('', [Validators.required]),
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
    
    this.coreService.getstate();
    this.tableData = this.QueryService.stateList;
    console.log(this.tableData);
    this.getFeatureGroup();
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
        window.location.reload()
      }

    })
  }
  featureGroup: any
  getFeatureGroup() {
    this.coreService.getFuature_groupD().subscribe(res => {
      this.featureGroup = res
    })
  }
  addRes: any
  submit() {
    console.log(this.stateForm.value);
    console.log(this.id);

    if (this.stateForm.valid) {
    
        this.coreService.addstate(this.stateForm.value).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Data Created") {
            this.toastr.success(this.addRes.msg)
            this.stateForm.reset()
            window.location.reload();
          }
        }, err => {
          console.log(err.error.gst);
        })
      
    } else {
      this.stateForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update(){
    if (this.stateForm.valid) {
        this.coreService.updatestate(this.stateForm.value, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "State updated successfully") {
            this.toastr.success(this.addRes.msg)
            this.stateForm.reset();
            this.addForm = true;
            window.location.reload()
          }
        }, err => {
          console.log(err.error);
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

}
