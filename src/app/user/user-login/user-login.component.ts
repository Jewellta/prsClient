import { Component, OnInit } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';
import { SystemService} from 'src/app/system.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user:User=new User();
  message:string=' ';

  constructor(
    private sys: SystemService,
    private usrsrvc: UserService,
    private router:Router)
    { }

    login (): void{
      console.log("B4 login:", this.user);
      this.usrsrvc.login(this.user.username,this.user.password).subscribe(
        res =>{
          console.log("User", res, "is logged in.");
          this.sys.loggedInUser=res;
          this.router.navigateByUrl("/users/list");
        },
        err =>{
          alert("Incorrect Login!")
          console.error(err);
        }
      );
    }

  ngOnInit(): void {
    this.sys.loggedInUser=null;
  }

}
