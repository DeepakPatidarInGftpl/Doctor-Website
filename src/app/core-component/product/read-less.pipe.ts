import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readLess'
})
export class ReadLessPipe implements PipeTransform {

  transform(text: string, length: number = 50, suffix: string = ''): string {

    if (!text || text?.length <= length) {
      // let truncated: string = text?.substring(length)?.trim() ;
      // return truncated;
      return text;
    }
    let truncated: string = text.substring(0, length).trim();
    return truncated + suffix;
  }


}
