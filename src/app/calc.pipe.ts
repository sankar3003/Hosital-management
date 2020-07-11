import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calc',
})
export class CalcPipe implements PipeTransform {
  transform(value) {}
}
