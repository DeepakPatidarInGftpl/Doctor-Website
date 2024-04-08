import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readLess'
})
export class ReadLessPipe implements PipeTransform {

  transform(text: string, length: number = 2, suffix: string = '...'): string {

    if (text?.length < length) {
      let truncated: string = text?.substring(length)?.trim() ;
      return truncated;
    }
    return text;
  }


}
