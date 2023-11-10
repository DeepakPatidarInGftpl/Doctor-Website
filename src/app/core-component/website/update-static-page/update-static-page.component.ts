import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';
import { Editor, Toolbar } from 'ngx-editor';
import jsonDoc from './../../../doc';
@Component({
  selector: 'app-update-static-page',
  templateUrl: './update-static-page.component.html',
  styleUrls: ['./update-static-page.component.scss']
})
export class UpdateStaticPageComponent implements OnInit, OnDestroy {

  renderer: any;
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

  staticPgForm = this.fb.group({
    title: new FormControl('', [Validators.required]),
    slug: new FormControl('', [Validators.required]),
    choice_type:new FormControl('',[Validators.required]),
    description: new FormControl('', [Validators.required])
  })

  get doc(): any {
    return this.staticPgForm.get('description')
  }

  get f() {
    return this.staticPgForm.controls;
  }

  constructor(private coreService: CoreService, private fb: FormBuilder, private toastr: ToastrService,
    private router: Router,
    private Arout: ActivatedRoute
  ) {

  }

  slugid: any
  ngOnInit(): void {
    this.editor = new Editor();
    this.staticPgForm
    this.slugid = this.Arout.snapshot.paramMap.get('slug');
    // console.log(this.slugid);
    this.coreService.getStaticPageBySlug(this.slugid).subscribe(res => {
      // console.log(res);
      this.staticPgForm.patchValue(res)
    })

 
  }

  addRes: any;
  loaders=false;
  submit() {
    // console.log(this.staticPgForm.value);
    if (this.staticPgForm.valid) {
      this.loaders=true;
      this.coreService.updateStaticPage(this.staticPgForm.value, this.slugid).subscribe(res => {
        // console.log(res);
        this.addRes = res
        if (this.addRes.success) {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.staticPgForm.reset()
          // window.location.reload();
        this.router.navigate(['/website/staticPage'])
        }else if(this.addRes?.error?.slug[0]=="Static Pages with this slug already exists."){
          this.loaders=false;
          this.toastr.error(this.addRes?.error?.slug[0])
        }
        else{
          this.loaders=false;
        }
      }, err => {
        this.loaders=false;
        // console.log(err.error);
      })
    } else {
      this.loaders=false;
      this.staticPgForm.markAllAsTouched();
      this.toastr.error('Please Fill All The Required Fields');
    }
  }


  get title() {
    return this.staticPgForm.get('title')
  }
  get slug() {
    return this.staticPgForm.get('slug')
  }
  get description(): any {
    return this.staticPgForm.get('description')
  }
  get choice_type():any{
    return this.staticPgForm.get('choice_type')
  }



  ngOnDestroy(): void {
    this.editor?.destroy();
  }
}

