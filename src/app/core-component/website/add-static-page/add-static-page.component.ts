import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CoreService } from 'src/app/Services/CoreService/core.service';


import { Editor, Toolbar } from 'ngx-editor';
import jsonDoc from './../../../doc';
@Component({
  selector: 'app-add-static-page',
  templateUrl: './add-static-page.component.html',
  styleUrls: ['./add-static-page.component.scss']
})
export class AddStaticPageComponent implements OnInit, OnDestroy {


  // staticPgForm!: FormGroup;
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
    // ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];


  // form = new FormGroup({
  //   // editorContent: new FormControl(
  //   //   { value: jsonDoc, disabled: false },
  //   //   Validators.required()
  //   // ),
  //   title:new FormControl(''),
  //   slug:new FormControl(''),
  //   editorContent:new FormControl('')
  // });


  staticPgForm = this.fb.group({
    title: new FormControl('', [Validators.required]),
    slug: new FormControl('', [Validators.required]),
    choice_type:new FormControl(''),
    description: new FormControl('', [Validators.required])
  })

  get doc(): any {
    // return this.form.get('editorContent');
    return this.staticPgForm.get('description')
  }

  get f() {
    return this.staticPgForm.controls;
  }

  constructor(private coreService: CoreService, private fb: FormBuilder, private toastr: ToastrService, private router: Router) {

  }
  editorStyle = {
    height: '200px'
  };


  ngOnInit(): void {
    this.editor = new Editor();

    this.staticPgForm

    const javaScriptForQuillEditor = this.renderer.createElement('script');
    javaScriptForQuillEditor.src = `../../../assets/js/quill.js`;
    this.renderer.appendChild(document.head, javaScriptForQuillEditor);


  }

  addRes: any;
  loaders=false;
  submit() {
    console.log(this.staticPgForm.value);

    if (this.staticPgForm.valid) {
      this.loaders=true;
      this.coreService.addStatic(this.staticPgForm.value).subscribe(res => {
        console.log(res);
        this.addRes = res
        if (this.addRes.msg == "Data Created") {
          this.loaders=false;
          this.toastr.success(this.addRes.msg)
          this.staticPgForm.reset()
          this.router.navigate(['/website/staticPage'])
        }else if(this.addRes.slug[0]=="Static Pages with this slug already exists."){
          this.toastr.error(this.addRes.slug[0])
        }
      }, err => {
        console.log(err.error.gst);
      })


    } else {
      this.staticPgForm.markAllAsTouched()
      console.log('forms invalid');
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