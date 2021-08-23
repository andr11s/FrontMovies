import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moviepI'
})
export class MoviePipe implements PipeTransform {

  transform(text: string): string {
    let NewText = text.slice(0 , 130);
    return NewText;
    
  }

}
