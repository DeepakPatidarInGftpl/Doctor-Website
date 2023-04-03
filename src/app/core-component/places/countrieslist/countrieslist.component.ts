import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CompanyService } from 'src/app/Services/Companyservice/company.service';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-countrieslist',
  templateUrl: './countrieslist.component.html',
  styleUrls: ['./countrieslist.component.scss'],
})
export class CountrieslistComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  countryForm!: FormGroup;
  get f() {
    return this.countryForm.controls;
  }
  
  titlee: any;
p:number=1
pageSize: number = 10;
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService,) {
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
        this.coreService.deleteCountry(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Country Deleted successfully") {
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
    this.countryForm = this.fb.group({
      country_name: new FormControl('', [Validators.required]),
      country_code: new FormControl('', [Validators.required])
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
    // this.coreService.getCountry();
    // this.coreService.countryBehavior.subscribe( () => {
    //   this.tableData = JSON.parse(localStorage.getItem('countryList')!);
    // })
    this.coreService.getCountry().subscribe(res=>{
      this.tableData=res;
    })
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
    this.coreService.deleteCountry(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Country Deleted successfully") {
        this.ngOnInit()
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
    console.log(this.countryForm.value);
    console.log(this.id);

    if (this.countryForm.valid) {

        this.coreService.addCountry(this.countryForm.value).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Data Created") {
            this.toastr.success(this.addRes.msg)
            this.countryForm.reset()
            this.ngOnInit()
          }
        }, err => {
          console.log(err.error.gst);
        })

    } else {
      this.countryForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update(){
    if (this.countryForm.valid) {
        this.coreService.updateCountry(this.countryForm.value, this.id).subscribe(res => {
          console.log(res);
          this.addRes = res
          if (this.addRes.msg == "Country updated successfully") {
            this.toastr.success(this.addRes.msg)
            this.countryForm.reset();
            this.addForm = true;
            this.ngOnInit()
          }
        }, err => {
          console.log(err.error);
    
        })

    } else {
      this.countryForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }
  get country_name() {
    return this.countryForm.get('country_name')
  }
  get country_code() {
    return this.countryForm.get('country_code')
  }

  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getCountryById(id).subscribe(res => {
      console.log(res);
     res.map((data:any)=>{
      if (id == data.id) {
        this.addForm = false
        this.countryForm.patchValue(data);
        this.editFormdata = data
      }
     })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.countryForm.reset();
  }

  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res.country_name.toLocaleLowerCase());
        console.log(res.country_name.match(this.titlee));
        return res.country_name.match(this.titlee);
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
