import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';

@Component({
  selector: 'app-addcategory',
  templateUrl: './addcategory.component.html',
  styleUrls: ['./addcategory.component.scss']
})
export class AddcategoryComponent implements OnInit {

  constructor(private CoreServ: CoreService, private toastr: ToastrService, private route: Router) { }

  formaddCateg: FormGroup

  token = localStorage.getItem('token')
  imgUrl = 'https://pv.greatfuturetechno.com';
  editRoute: any;
  updateData: any
  ngOnInit() {


    let ftitle = ''
    let fimage = null
    let fdiscount = ''

    this.CoreServ.editThings.subscribe((data: any) => {

      this.editRoute = data
      console.log(data);

      if (this.editRoute) {
        ftitle = data.title,
          fdiscount = data.discount
        this.updateData = data
      }
      this.formaddCateg = new FormGroup({
        title: new FormControl(ftitle, [Validators.required]),
        discount: new FormControl(fdiscount, Validators.pattern(/^[0-9]*$/)),
        image: new FormControl('',)
      })
      console.log(this.formaddCateg);
    })
  }

  url: any;
  onFileChange(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result as string;
      };
    }
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
        formData.append("discount", this.formaddCateg.get('discount')?.value);
        // formData.append("image", this.formaddCateg.get('image')?.value);

        const imageFile = this.formaddCateg.get('image')?.value;
        if (imageFile && imageFile instanceof File) {
          formData.append('image', imageFile);
          this.CoreServ.editHttp(formData, this.editRoute.id).subscribe((res: any) => {
            this.toastr.success(res.msg)
            if (res.msg == 'Product Category updated successfully') {
              this.formaddCateg.reset();
              this.updateData = '';
              this.url = '';
              // this.ngOnInit();
              window.location.reload()
            }
            console.log(res);
          })
        } else {
          this.CoreServ.editHttp(formData, this.editRoute.id).subscribe((res: any) => {
            this.toastr.success(res.msg)
            if (res.msg == 'Product Category updated successfully') {
              this.formaddCateg.reset()
              this.updateData = '';
              this.url = '';
              
              // this.ngOnInit();
              window.location.reload()
            }
            console.log(res);

          })
        }

      } else {

        var formData: any = new FormData();


        formData.append("title", this.formaddCateg.get('title')?.value);
        formData.append("discount", this.formaddCateg.get('discount')?.value);
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
  get discount() {
    return this.formaddCateg.get('discount')
  }
}
