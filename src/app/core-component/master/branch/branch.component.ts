import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { QueryService } from 'src/app/shared/query.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-branch',
  templateUrl: './branch.component.html',
  styleUrls: ['./branch.component.scss']
})
export class BranchComponent implements OnInit {

 
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  colorForm!: FormGroup;
  get f() {
    return this.colorForm.controls;
  }
  titlee: any;
  p: number = 1
  pageSize: number = 10;
  itemsPerPage: number = 10;
  constructor(private coreService: CoreService, private QueryService: QueryService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
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
        this.coreService.deleteBranch(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Branch Deleted successfully") {
            this.tableData
            this.ngOnInit();
            Swal.fire({
              icon: 'success',
              title: 'Deleted!',
              text: 'Your file has been deleted.',
            });
          }else{
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
      text: "Do you want to Deactivate this branch!",
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
        this.coreService.BranchIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Branch Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Branch Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this branch!",
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
        this.coreService.BranchIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Branch Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Branch Is Active Successfully.',
        });
      }
    });
  }
  form!: FormGroup;
  loader=true
  ngOnInit(): void {
    this.form = this.fb.group({
      img: new FormControl('')
    })

    this.colorForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      gstin: new FormControl('', [Validators.required,Validators.pattern("^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[A-Z0-9]{1}[Z]{1}[A-Z0-9]{1}")]),
      address: new FormControl('', [Validators.required]),
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

    // this.coreService.getcolor();
    // // this.tableData = this.QueryService.colorsList;
    // // console.log(this.tableData);

    // this.coreService.colorBehavior.subscribe(() => {
    //   if (localStorage.getItem('colorsList')) {
    //     this.tableData = Object.values(JSON.parse(localStorage.getItem("colorsList")!))
    //   }
    // })
    this.coreService.getBranch().subscribe(res => {
      this.tableData = res;
      this.loader=false;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })

    this.getAddress();
  }
  addressList:any;
  getAddress(){
    this.coreService.getAddress().subscribe(res=>{
      console.log(res);
      this.addressList=res;
    })
  }
  add() {
    console.log('jj');
    console.log(this.form.value);
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

  addRes: any

loaders=false;
  submit() {
    console.log(this.colorForm.value);
    console.log(this.id);

    if (this.colorForm.valid) {
      this.loaders=true;
      this.coreService.addBranch(this.colorForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "BRANCH CREATED SUCESSFULLY") {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.colorForm.reset()
          // window.location.reload();
          this.ngOnInit()
        }else{
          this.loader=false
        }
      }, err => {
        this.loader=false
        console.log(err.error.gst);
      })
    } else {
      this.colorForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  update() {
    if (this.colorForm.valid) {
      this.loaders=true;
      this.coreService.updateBranch(this.colorForm.value, this.id).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Branch Updated Sucessfully") {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.colorForm.reset()
          this.addForm = true
          // window.location.reload()
          this.ngOnInit()
        }else{
          this.loader=false
        }
      }, err => {
        this.loaders=false;
        console.log(err.error.gst);
      })
    } else {
      this.colorForm.markAllAsTouched()
      console.log('forms invalid');
    }
  }

  get title() {
    return this.colorForm.get('title')
  }
  get gstin() {
    return this.colorForm.get('gstin')
  }
  get address(){
    return this.colorForm.get('address')
  }
  addForm = true
  id: any
  editFormdata: any
  editForm(id: number) {
    this.id = id
    this.coreService.getBranchById(id).subscribe(res => {
      console.log(res);
      if (id == res.id) {
        this.addForm = false;
        this.colorForm.patchValue(res);
        this.colorForm.get('address')?.patchValue(res.address.id)
        this.editFormdata = res
      }
    })
  }
  openaddForm() {
    this.addForm = true;
    this.colorForm.reset();
  }
  search() {
    if (this.titlee == "") {
      this.ngOnInit();
    } else {
      this.tableData = this.tableData.filter(res => {
        console.log(res);
        console.log(res.title.toLocaleLowerCase());
        console.log(res.title.match(this.titlee));
        return res.title.match(this.titlee);
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