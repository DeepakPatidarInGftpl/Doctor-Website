import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WebsiteService } from 'src/app/Services/website/website.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reason',
  templateUrl: './reason.component.html',
  styleUrls: ['./reason.component.scss']
})
export class ReasonComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any;
  reasonForm!: FormGroup;
  get f() {
    return this.reasonForm.controls;
  }

  titlee: any;
  p: number = 1
  pageSize: number = 5;

  itemsPerPage = 5;
  constructor(private websiteService: WebsiteService, private fb: FormBuilder, private toastr: ToastrService,) {
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
        this.websiteService.deleteReason(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Reason Deleted successfully") {
            this.tableData
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
  select = false
  // active deactive
  deActivate(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Deactivate this Reason!",
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
        this.websiteService.ReasonIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Reason Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Deactivate!',
          text: 'Reason Is Deactivate Successfully.',
        });
      }
    });
  }
  Active(index: any, id: any) {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you want to Active this Reason!",
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
        this.websiteService.ReasonIsActive(id, '').subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Reason Is active Updated Successfully") {
            this.ngOnInit()
          }
        })
        Swal.fire({
          icon: 'success',
          title: 'Active!',
          text: 'Reason Is Active Successfully.',
        });
      }
    });
  }

  loader = true;
  ngOnInit(): void {
    this.reasonForm = this.fb.group({
      type: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required])
    })
    this.websiteService.getReason().subscribe(res => {
      this.loader = false;
      this.tableData = res;
      console.log(this.tableData);
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })

  }

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

  addRes: any;
  loaders = false;
  submit() {
    console.log(this.reasonForm.value);
    if (this.reasonForm.valid) {
      this.loaders = true
      this.websiteService.addReason(this.reasonForm.value).subscribe(res => {
        console.log("response", res);
        this.addRes = res
        if (this.addRes.Is_Success == 'True') {
          this.loaders = false
          this.toastr.success(this.addRes.msg);
          this.reasonForm.reset();
          this.ngOnInit()
        }
        else {

          this.loaders = false

        }
      })
    }
    else {
      this.reasonForm.markAllAsTouched()
      console.log('invalid form');
    }


  }

  update() {
    if (this.reasonForm.valid) {
      this.loaders = true
      this.websiteService.updateReason(this.reasonForm.value,this.id).subscribe(res => {
        console.log("response", res);
        this.addRes = res
        if (this.addRes.Is_Success == 'True') {
          this.loaders = false
          this.toastr.success(this.addRes.msg);
          this.reasonForm.reset();
          this.ngOnInit()
        }
        else {
          this.loaders = false
        }
      })
    }
    else {
      this.reasonForm.markAllAsTouched()
      console.log('invalid form');
    }
    

  }

  get type() {
    return this.reasonForm.get('type')
  }
  get title() {
    return this.reasonForm.get('title')
  }

  addForm = true
  id: any
  editFormdata: any;
  resEdit: any;
  editForm(id: number) {
    this.id = id
    this.websiteService.getReasonById(id).subscribe(res => {
      console.log(res);
      this.resEdit = res;
    
      if (id == this.resEdit.id) {
        this.addForm = false
        this.reasonForm.patchValue(this.resEdit)
        this.editFormdata = res;
      }
    })
  }
  openaddForm() {
    this.addForm = true;
    this.reasonForm.reset();
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