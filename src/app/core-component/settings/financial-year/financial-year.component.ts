import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-financial-year',
  templateUrl: './financial-year.component.html',
  styleUrls: ['./financial-year.component.scss']
})
export class FinancialYearComponent implements OnInit {

 
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  FinancialYearForm!: FormGroup;
  get f() {
    return this.FinancialYearForm.controls;
  }
  imgUrl = 'https://pv.greatfuturetechno.com';
  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  constructor(private coreService: CoreService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
   
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
        this.coreService.deleteFinancialYear(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "Deleted successfully") {
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
  ngOnInit(): void {
    this.FinancialYearForm = this.fb.group({
      start_year: new FormControl('', [Validators.required]),
      close_year: new FormControl('', [Validators.required]),   
    })
  
    
    this.coreService.getFinancialYear().subscribe(res=>{
      this.tableData=res;
    })
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
    this.coreService.deletesize(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Deleted successfully") {
        window.location.reload()
      }
    })
  }


  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);
    this.FinancialYearForm.patchValue({
      image: file
    })
    this.FinancialYearForm.get('image')?.updateValueAndValidity();
  }

  addRes: any
  
 submit() {
  console.log(this.FinancialYearForm.value);
  console.log(this.id);

  if (this.FinancialYearForm.valid) {
    this.coreService.addFinancialYear(this.FinancialYearForm.value).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Data Created") {
        this.toastr.success(this.addRes.msg)
        this.FinancialYearForm.reset()
        // window.location.reload();
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })
  } else {
    this.FinancialYearForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

update(){
  if (this.FinancialYearForm.valid) {
  
    this.coreService.updateFinancialYear(this.FinancialYearForm.value, this.id).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Finincial Year Updated Sucessfully") {
        this.toastr.success(this.addRes.msg)
        this.FinancialYearForm.reset()
        this.addForm=true
        // window.location.reload()
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })
  } else {
    this.FinancialYearForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

  get start_year() {
    return this.FinancialYearForm.get('start_year')
  }
  get close_year() {
    return this.FinancialYearForm.get('close_year')
  }
 
  addForm = true
  id: any
  editFormdata: any;
  resData:any;
  editForm(id: number) {
    this.id = id
    this.coreService.getFinancialYearById(id).subscribe(res => {
      this.resData=res
      this.resData.map((data: any) => {
        console.log(data);
        if (id == data.id) {
          this.addForm=false
          this.FinancialYearForm.patchValue({
            start_year:data.start_year,
            close_year:data.close_year
          });
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.FinancialYearForm.reset();
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

