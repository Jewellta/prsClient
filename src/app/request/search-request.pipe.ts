import { Pipe, PipeTransform } from '@angular/core';
import{Request} from './request.class';
@Pipe({
  name: 'searchRequest'
})
export class SearchRequestPipe implements PipeTransform {

  transform(requests: Request[], searchCriteria: string): Request[] {
    let selectedRequests: Request[]=[];
    if(searchCriteria.length==0){
      return requests;
    }
    for(let request of requests){
      if(
        request.id.toString().includes(searchCriteria.toLowerCase())
        || request.description.toString().includes(searchCriteria.toLowerCase())
        || request.justification.toString().includes(searchCriteria.toLowerCase())
        || request.userId.toString().includes(searchCriteria.toLowerCase())
        || request.deliveryMode.toString().includes(searchCriteria.toLowerCase())
        || request.status.toString().includes(searchCriteria.toLowerCase())
        || request.total.toString().includes(searchCriteria.toString())
        ||(request.rejectionReason != null&&
          request.rejectionReason.toString().includes(searchCriteria.toLowerCase()))
        || request.user.toString().includes(searchCriteria.toString())
      ){
        selectedRequests.push(request);
    }
  }
return selectedRequests;
}
}
