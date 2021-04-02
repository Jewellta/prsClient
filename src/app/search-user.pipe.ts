import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user/user.class';

@Pipe({
  name: 'searchUser'
})
export class SearchUserPipe implements PipeTransform {

  transform(users: User[],searchCriteria:string): User[] {
    let selectedUsers: User[]=[];
    if(searchCriteria.length==0){
      return users;
    }
    for(let user of users){
      if(user.id.toString().includes(searchCriteria.toLowerCase())
      || user.username.toLowerCase().includes(searchCriteria.toLocaleLowerCase())
      || user.firstname.toLowerCase().includes(searchCriteria.toLocaleLowerCase())
      || user.lastname.toLowerCase().includes(searchCriteria.toLocaleLowerCase())
      ||(user.email != null&&
      user.email.toLowerCase().includes(searchCriteria.toLocaleLowerCase()))
      ||(user.phone != null&&
      user.phone.toLowerCase().includes(searchCriteria.toLocaleLowerCase()))
    ) {
      selectedUsers.push(user);
    }
    }
    return selectedUsers;
  }

}
