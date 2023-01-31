import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  constructor(private CoreServ: CoreService, private toastr: ToastrService) { }

  formaddCateg: FormGroup

  ngOnInit() {
    this.formaddCateg = new FormGroup({
      title: new FormControl('', [Validators.required]),
      image: new FormControl(null, Validators.required)
    })
  }


  submitForm() {
    if (this.formaddCateg.invalid) {
      this.formaddCateg.markAllAsTouched()
    } else {


      let formdata = new FormData();
      // formdata.append('image', this.formaddCateg.controls['image'].value);
      formdata.append('title', this.formaddCateg.controls['title'].value);

      const headers = new HttpHeaders({
        'Content-Type': 'multipart/form-data; boundary=10'
      });



      console.log(formdata);
      console.log(this.formaddCateg.value);
      // this.CoreServ.addCategory(formdata, headers).subscribe((res: any) => {
      //   console.log(this.formaddCateg.value);
      //   console.log(res);
      //   this.toastr.success(res.msg)
      // })
    }
  }

  get title() {
    return this.formaddCateg.get('title')
  }

  get image() {
    return this.formaddCateg.get('image')
  }
}
