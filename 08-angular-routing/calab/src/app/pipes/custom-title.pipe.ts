import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitle',
  standalone: true
})
export class CustomTitlePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
