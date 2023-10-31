import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { WebsiteService } from 'src/app/Services/website/website.service';

import { Editor, Toolbar } from 'ngx-editor';
import jsonDoc from './../../../doc';

@Component({
  selector: 'app-add-footer',
  templateUrl: './add-footer.component.html',
  styleUrls: ['./add-footer.component.scss']
})
export class AddFooterComponent implements OnInit {

  footerForm!: FormGroup
  get f() {
    return this.footerForm.controls;
  }

  //editor 
  editordoc = jsonDoc;
  editor: Editor | any;
  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];
  constructor(private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private websiteService: WebsiteService) { }
  date = new Date();

  ngOnInit(): void {
    this.editor = new Editor();
    this.footerForm = this.fb.group({
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(/^[0-9]*$/),]),
      facebook: new FormControl('', [Validators.required]),
      instagram: new FormControl('', [Validators.required]),
      twitter: new FormControl('', [Validators.required]),
      whatsapp: new FormControl('', [Validators.required]),
      logo: new FormControl('', [Validators.required,]),
      description: new FormControl('', [Validators.required])
    })
  }
  url: any;
  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    // console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.url = reader.result as string;
      };
    }
    this.footerForm.patchValue({
      logo: file
    })
    this.footerForm.get('logo')?.updateValueAndValidity();
  }

  dateError = null;
  addRes: any;
  loaders = false;
  whatsError = '';
  twitterError='';
  facebookError='';
  instagramError='';
  submit() {
    // console.log(this.footerForm.value);
    var formdata: any = new FormData()
    formdata.append('email', this.footerForm.get('email')?.value);
    formdata.append('phone', this.footerForm.get('phone')?.value);
    formdata.append('facebook', this.footerForm.get('facebook')?.value);
    formdata.append('instagram', this.footerForm.get('instagram')?.value);
    formdata.append('twitter', this.footerForm.get('twitter')?.value);
    formdata.append('whatsapp', this.footerForm.get('whatsapp')?.value);
    formdata.append('address', this.footerForm.get('address')?.value);
    formdata.append('logo', this.footerForm.get('logo')?.value);
    formdata.append('description', this.footerForm.get('description')?.value);

    if (this.footerForm.valid) {
      this.loaders = true;
      this.websiteService.addFooter(formdata).subscribe((res: any) => {
        // console.log(res);
        this.addRes = res;
        if (this.addRes.success) {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.footerForm.reset()
          this.router.navigate(['//website/footerList'])
        } else {
          this.loaders = false;
          if (this.addRes.error?.whatsapp) {
            this.loaders = false;
            this.whatsError = this.addRes?.error?.whatsapp[0];
            this.toastr.error('Whatsapp',this.addRes?.error?.whatsapp[0])
            setTimeout(() => {
              this.whatsError = ''
            }, 8000);
          }else if (this.addRes.error?.twitter) {
            this.loaders = false;
            this.twitterError = this.addRes?.error?.twitter[0];
            this.toastr.error('Twitter',this.addRes?.error?.twitter[0])
            setTimeout(() => {
              this.twitterError = ''
            }, 8000);
          } if (this.addRes.error?.facebook) {
            this.loaders = false;
            this.facebookError = this.addRes?.error?.facebook[0];
            this.toastr.error('Facebook',this.addRes?.error?.facebook[0])
            setTimeout(() => {
              this.facebookError = ''
            }, 8000);
          } if (this.addRes.error?.instagram) {
            this.loaders = false;
            this.instagramError = this.addRes?.error?.instagram[0];
            this.toastr.error('Instagram',this.addRes?.error?.instagram[0])
            setTimeout(() => {
              this.instagramError = ''
            }, 8000);
          }
        }
      }, err => {
        this.loaders = false;
        // console.log(err.error);
      })
    } else {
      this.footerForm.markAllAsTouched()
      // console.log('hhhhhh');
    }
  }

  get address() {
    return this.footerForm.get('address')
  }
  get phone() {
    return this.footerForm.get('phone');
  }
  get email() {
    return this.footerForm.get('email')
  }
  get facebook() {
    return this.footerForm.get('facebook');
  }
  get instagram() {
    return this.footerForm.get('instagram');
  }
  get twitter() {
    return this.footerForm.get('twitter');
  }
  get whatsapp() {
    return this.footerForm.get('whatsapp')
  }
  get description() {
    return this.footerForm.get('description')
  }
  get logo() {
    return this.footerForm.get("logo");
  }
}


