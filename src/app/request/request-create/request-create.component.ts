import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import { Router } from '@angular/router';
import { RequestService } from '../request.service';
import {Request} from '../request.class';
import { SystemService } from 'src/app/system.service';
import { User } from 'src/app/user/user.class';


@Component({
  selector: 'app-request-create',
  templateUrl: './request-create.component.html',
  styleUrls: ['./request-create.component.css']
})
export class RequestCreateComponent implements OnInit {

  request: Request = new Request();
  user:User= new User();

  constructor(
    private reqsvc: RequestService,
    private router:Router,
    private sys: SystemService,
  ) { }

save(): void{
  console.log("Before Created :", this.request);
  this.reqsvc.create(this.request).subscribe(
    res => {console.log("created");
    this.router.navigateByUrl("request/list");},
    err =>{console.log(err)}
  );
}

  ngOnInit(): void {
   if(this.sys.loggedInUser == null){
    //this.router.navigateByUrl("/users/login");
  }         
  this.request.userId=this.sys.loggedInUser.id;
  this.user=this.sys.loggedInUser;
  
}
}