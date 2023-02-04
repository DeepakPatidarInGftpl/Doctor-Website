import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  constructor(private CoreServ: CoreService, private toastr: ToastrService, private route: ActivatedRoute) { }

  formaddCateg: FormGroup

  token = localStorage.getItem('token')

  editRoute

  ngOnInit() {


    let ftitle = ''
    let fimage = null


    this.CoreServ.editThings.subscribe((data: any) => {

      this.editRoute = data

      if (this.editRoute) {
        ftitle = data.title
      }
      this.formaddCateg = new FormGroup({
        title: new FormControl(ftitle, [Validators.required]),
        image: new FormControl(fimage, Validators.required)
      })
      console.log(this.formaddCateg);
    })
  }


  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);

    this.formaddCateg.patchValue({
      image: file
    });

    this.formaddCateg.get('image')?.updateValueAndValidity()
  }

  submitForm() {

    if (this.formaddCateg.invalid) {
      this.formaddCateg.markAllAsTouched()
    } else {
      if (this.editRoute) {

        var formData: any = new FormData();

        formData.append("title", this.formaddCateg.get('title')?.value);
        formData.append("image", this.formaddCateg.get('image')?.value);

        this.CoreServ.editHttp(formData, this.editRoute.id).subscribe((res: any) => {
          if (res.msg == 'Product Category updated successfully') {
            this.formaddCateg.reset()
            window.location.reload()
          }
          console.log(res);

        })
      } else {

        var formData: any = new FormData();


        formData.append("title", this.formaddCateg.get('title')?.value);
        formData.append("image", this.formaddCateg.get('image')?.value);

        this.CoreServ.addCategory(formData).subscribe((res: any) => {
          console.log(res);
          this.toastr.success(res.msg)
          if (res.msg == 'Data Created') {
            this.formaddCateg.reset()
            window.location.reload()
          }
        })
      }
    }
  }

  get title() {
    return this.formaddCateg.get('title')
  }

  get image() {
    return this.formaddCateg.get('image')
  }
}
