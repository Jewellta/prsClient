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
  request: Request = new Request();
  user:User=new User();

  constructor(
    private rqsvc:RequestService,
    private sys:SystemService,
    private router:Router,
    private route:ActivatedRoute

  ) { }

  setapprove(): void{
      this.rqsvc.approve(this.request).subscribe(
        res =>{
          console.log("Approve")
          this.router.navigateByUrl("/request/list");
        },
        err =>{
          console.error(err)
        }
      )
    }
  setdeny():void{
      this.rqsvc.reject(this.request).subscribe(
        res =>{
          console.log("Denied")
          this.router.navigateByUrl("/request/list");
        },
        err =>{
          console.error(err)
        }
      );
    }

  ngOnInit(): void {
    if(this.sys.loggedInUser == null){
      //this.router.navigateByUrl("/users/login");
    }         
    //this.request.userId=this.sys.loggedInUser.id;
    //this.user=this.sys.loggedInUser;

    //this.user.id=this.route.snapshot.params.id;
    this.rqsvc.reviews().subscribe(
    requests=>{console.log("Requests for approval: ", requests)
    this.requests= requests as Request[] 
    //where this.request.userId !=this.sys.loggedInUser
    ;},
    err=>{console.error(err);}
    );
  }

}
