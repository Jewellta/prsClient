import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import {User} from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  user:User=new User;
  users:User[]=[];
  searchCriteria:string="";

  constructor(
    private usrsvc:UserService,
    private sys:SystemService,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.sys.chklogin();
    
    this.usrsvc.list().subscribe(
      users=>{console.log("User list:", users)
      this.users=users as User[];},
      err=>{console.error(err);}
      );
      this.user.isAdmin=this.sys.loggedInUser.isAdmin;
  }

}
