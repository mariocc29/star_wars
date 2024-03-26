import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toString',
  standalone: true
})
export class TostringPipe implements PipeTransform {

  transform(value: number): string {
    return (value < 10) ? `0${value}` : value.toString();
  }

}
