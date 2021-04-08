import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import{Request} from '../request/request.class';
import { RequestService } from '../request/request.service';
import { Requestline } from '../requestline/requestline.class';
import { SystemService } from '../system.service';
import { User } from '../user/user.class';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  
  requests:Request[]=[];
  user:User=new User();
  id:number=0;

  constructor(
    private rqsvc:RequestService,
    private sys:SystemService,
    private router:Router,
    private route:ActivatedRoute

  ) { }
  
  refresh():void{
    this.rqsvc.reviews(this.sys.loggedInUser.id).subscribe(
    requests=>{console.log("Requests for approval: ", requests)
    this.requests= requests
    ;},
    err=>{console.error(err);}
    );
  }
   

  setapprove(request:Request): void{
      this.rqsvc.approve(request).subscribe(
        res =>{
          console.log("Approve")
          this.refresh();
        },
        err =>{
          console.error(err)
        }
      )
    }
  setdeny(request:Request):void{
    console.log(request)
      this.rqsvc.reject(request).subscribe(
        res =>{
          console.log("Denied")
          this.refresh();
        },
        err =>{
          console.error(err)
        }
      );
    }

  ngOnInit(): void {
    if(this.sys.loggedInUser == null){
      this.router.navigateByUrl("/users/login");
    }         
    this.user=this.sys.loggedInUser;
this.refresh();
  }

}
