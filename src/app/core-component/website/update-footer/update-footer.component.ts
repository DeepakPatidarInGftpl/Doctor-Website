import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { ToastrService } from 'ngx-toastr';
import { WebsiteService } from 'src/app/Services/website/website.service';

import { Editor, Toolbar } from 'ngx-editor';
import jsonDoc from './../../../doc';
@Component({
  selector: 'app-update-footer',
  templateUrl: './update-footer.component.html',
  styleUrls: ['./update-footer.component.scss']
})
export class UpdateFooterComponent implements OnInit {

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
  constructor(private fb: FormBuilder, private toastr: ToastrService,
    private router: Router,
    private Arout: ActivatedRoute,
    private websiteService: WebsiteService) { }
  date = new Date();

  id: any;
  imgUrl = 'https://pv.greatfuturetechno.com';

  getId:any;
  ngOnInit(): void {
    this.editor = new Editor();
    this.id = this.Arout.snapshot.paramMap.get('id');
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
    });

    this.websiteService.getFooterById(this.id).subscribe(res=>{
      console.log(res);
      res.map((res:any)=>{
        if(this.id==res.id){
          console.log(res);
          this.footerForm.patchValue(res);
          // this.footerForm.get('logo')?.patchValue(res.logo);
          this.getId=res;
          console.log(this.getId);
          
          // this.footerForm.patchValue({
          //   logo:res.logo
          // })
        }
      })
    })
  }

  selectImg(event: Event) {
    const file = (event.target as HTMLInputElement).files![0];
    console.log(file);
    this.footerForm.patchValue({
      logo: file
    })
    this.footerForm.get('logo')?.updateValueAndValidity();
  }
  dateError = null;
  addRes: any;
  loaders = false;
  whatsError = '';
  submit() {
    console.log(this.footerForm.value);
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
      this.websiteService.updateFooter(formdata,this.id).subscribe((res: any) => {
        console.log(res);
        this.addRes = res;
        if (this.addRes.msg == "Footer Updated Sucessfully") {
          this.loaders = false;
          this.toastr.success(this.addRes.msg)
          this.footerForm.reset()
          this.router.navigate(['//website/footerList'])
        } else {
          this.loaders = false;
          if (this.addRes.whatsapp) {
            this.whatsError = this.addRes.whatsapp[0];
            setTimeout(() => {
              this.whatsError = ''
            }, 300);
          }
        }
      }, err => {
        console.log(err.error.gst);
      })
    } else {
      this.footerForm.markAllAsTouched()
      console.log('hhhhhh');
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