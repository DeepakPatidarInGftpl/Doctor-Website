import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'readMore'
})
export class ReadMorePipe implements PipeTransform {

  transform(text: string, length: number = 1, suffix: string = '...'): string {

    if (text?.length > length) {
      let truncated: string = text?.substring(0, length)?.trim() ;
      return truncated;
    }

   
    return text;
  }

}
