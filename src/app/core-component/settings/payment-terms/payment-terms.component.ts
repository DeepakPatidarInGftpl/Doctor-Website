import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactService } from 'src/app/Services/ContactService/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-payment-terms',
  templateUrl: './payment-terms.component.html',
  styleUrls: ['./payment-terms.component.scss']
})
export class PaymentTermsComponent implements OnInit {

 
  dtOptions: DataTables.Settings = {};
  initChecked: boolean = false
  public tableData: any

  paymentTermsForm!: FormGroup;
  get f() {
    return this.paymentTermsForm.controls;
  }
  imgUrl = 'https://pv.greatfuturetechno.com';
  titlee: any;
  p:number=1
  pageSize: number = 10;
  itemsPerPage:number=10;
  constructor(private contactService: ContactService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {
   
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
        this.contactService.deletePaymentTerms(id).subscribe(res => {
          this.delRes = res
          if (this.delRes.msg == "PAYMENT TERMS Deleted successfully") {
            this.tableData
            this.ngOnInit();
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
              text: this.delRes.error,
            });
          }
        })
       
      }
    });
  }
  select=false
  // active deactive
  deActivate(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Deactivate this financial year!",
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
       this.contactService.PaymentTermsIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "FinancialYear Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Deactivate!',
         text: 'Financial Year Is Deactivate Successfully.',
       });
     }
   });
 }
 Active(index: any, id: any) {
   Swal.fire({
     title: 'Are you sure?',
     text: "Do you want to Active this financial year!",
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
       this.contactService.PaymentTermsIsActive(id,'').subscribe(res => {
         this.delRes = res
         if (this.delRes.msg == "FinancialYear Is active Updated Successfully") {
           this.ngOnInit()
         }
       })
       Swal.fire({
         icon: 'success',
         title: 'Active!',
         text: 'FinancialYear Is Active Successfully.',
       });
     }
   });
 }
 loader=true;
 isAdd:any;
 isEdit:any;
 isDelete:any;
  ngOnInit(): void {
    this.paymentTermsForm = this.fb.group({
      title: new FormControl('', [Validators.required]),
      days: new FormControl('', [Validators.required]),   
    })
   
    this.contactService.getPaymentTerms().subscribe(res=>{
      this.loader=false;
      this.tableData=res;
      this.selectedRows = new Array(this.tableData.length).fill(false);
    })
    const localStorageData = JSON.parse(localStorage.getItem('auth'));
    if (localStorageData && localStorageData.permission) {
      const permission = localStorageData.permission;
      permission.map((res: any) => {
        if (res.content_type.app_label === 'master' && res.content_type.model === 'paymentterms' && res.codename=='add_paymentterms') {
          this.isAdd = res.codename;
          console.log(this.isAdd);
        } else if (res.content_type.app_label === 'master' && res.content_type.model === 'paymentterms' && res.codename=='change_paymentterms') {
          this.isEdit = res.codename;
          console.log(this.isEdit);
        } else if(res.content_type.app_label === 'master' && res.content_type.model === 'paymentterms' && res.codename=='delete_paymentterms'){
          this.isDelete=res.codename;
          console.log(this.isDelete); 
        }
      });
    }

  }

  allSelected: boolean = false;
  selectedRows:boolean[]
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
    this.contactService.deletePaymentTerms(id).subscribe(res => {
      this.delRes = res
      if (this.delRes.msg == "Deleted successfully") {
        window.location.reload()
      }
    })
  }

  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);
    this.paymentTermsForm.patchValue({
      image: file
    })
    this.paymentTermsForm.get('image')?.updateValueAndValidity();
  }

  addRes: any
  loaders=false;
 submit() {
  console.log(this.paymentTermsForm.value);
  console.log(this.id);

  if (this.paymentTermsForm.valid) {
    this.loaders=true;
    this.contactService.addPaymentTerms(this.paymentTermsForm.value).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Data Created") {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.paymentTermsForm.reset()
        // window.location.reload();
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })
  } else {
    this.paymentTermsForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

update(){
  if (this.paymentTermsForm.valid) {
    this.loaders=true;
    this.contactService.updatePaymentTerms(this.paymentTermsForm.value, this.id).subscribe(res => {
      console.log(res);
      this.addRes = res
      if (this.addRes.msg == "Payment Terms Updated Sucessfully") {
        this.loaders=false;
        this.toastr.success(this.addRes.msg)
        this.paymentTermsForm.reset()
        this.addForm=true
        // window.location.reload()
        this.ngOnInit()
      }
    }, err => {
      console.log(err.error.gst);
    })
  } else {
    this.paymentTermsForm.markAllAsTouched()
    console.log('forms invalid');
  }
}

get title() {
  return this.paymentTermsForm.get('title')
}
get days() {
  return this.paymentTermsForm.get('days')
}
 
  addForm = true
  id: any
  editFormdata: any;
  resData:any;
  editForm(id: number) {
    this.id = id
    this.contactService.getPaymentTermsById(id).subscribe(res => {
      this.resData=res
      this.resData.map((data: any) => {
        console.log(data);
        if (id == data.id) {
          this.addForm=false
          this.paymentTermsForm.patchValue({
            title:data.title,
            days:data.days
          });
          this.editFormdata = res
        }
      })
    })
  }
  openaddForm() {
    this.addForm = true;
    this.paymentTermsForm.reset();
  }

  // search() {
  //   if (this.titlee == "") {
  //     this.ngOnInit();
  //   } else {
  //     this.tableData = this.tableData.filter(res => {
  //       console.log(res);
  //       console.log(res.title.toLocaleLowerCase());
  //       console.log(res.title.match(this.titlee));
  //       return res.title.match(this.titlee);
  //     })
  //   }
  // }
  
  search() {
    if (this.titlee === "") {
      this.ngOnInit();
    } else {
      const searchTerm = this.titlee.toLocaleLowerCase(); 
      this.tableData = this.tableData.filter(res => {
        const nameLower = res.title.toLocaleLowerCase(); 
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

