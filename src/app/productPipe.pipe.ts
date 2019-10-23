import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPipe'
})
export class ProductPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args == true){
      return "On Salee!!  " + value;
    }
    return value;
  }

}
