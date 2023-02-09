import { Pipe, PipeTransform } from '@angular/core';
import * as routes from '../../constant/absolute-route';

@Pipe({
  name: 'absoluteRouting'
})
export class AbsoluteRoutingPipe implements PipeTransform {

  transform(route:string) {
    console.log(route,"pipeeeeeee")
    try{
      // console.log(route,"pipee");
      // @ts-ignore: Unreachable code error

      console.log(routes[route]);

      // @ts-ignore: Unreachable code error
      return routes[route];
    }catch (error) {
      // console.log(route, '--------');
      return '';
    }

  }

}
