import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    let name:any={...{},...args}
    let nameFull=name['0'] + ' ' + name['1']
    return nameFull;
  }

}
