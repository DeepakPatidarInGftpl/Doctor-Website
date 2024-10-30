

import { Component, OnInit } from '@angular/core';
import editorConfig from '../../../helpers/AngularEditorConfig';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-data-tables',
  templateUrl: './data-tables.component.html',
  styleUrls: ['./data-tables.component.scss']
})

export class DataTablesComponent implements OnInit {
  htmlContent = ''
  editorConfig = editorConfig
constructor(private _fb : FormBuilder){}
  form : FormGroup
ngOnInit(): void {
  this.form = this._fb.group({
    texts  : ['']
  })
}
ok(){

  return this.form.value
}
  
 
 
}
