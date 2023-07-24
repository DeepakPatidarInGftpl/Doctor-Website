import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadMorePipe } from '../read-more.pipe';
import { ReadLessPipe } from '../read-less.pipe';



@NgModule({
  declarations: [
    ReadMorePipe,
    ReadLessPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ReadMorePipe,
    ReadLessPipe,
  ]
})
export class PipeModuleModule { }
