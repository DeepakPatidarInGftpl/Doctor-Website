import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TextEditorRoutingModule } from './text-editor-routing.module';
import { TextEditorComponent } from './text-editor.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TextEditorComponent
  ],
  imports: [
    CommonModule,
    TextEditorRoutingModule,
    FormsModule
  ],exports : [TextEditorComponent]
})
export class TextEditorModule { }
