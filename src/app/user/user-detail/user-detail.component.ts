import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { User } from '../user.class';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user:User=null;
  id:number=0;
  showVerify:boolean=false;
  get isAdmin(){return this.sys.isAdmin};

  constructor(
    private usrsvc: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private sys: SystemService
  ) { }

    edit(): void{
      this.router.navigateByUrl(`/users/edit/ ${this.id}`)
    }

    toggleVerify(): void{
      this.showVerify=!this.showVerify;
    }

    delete(): void{
      this.usrsvc.remove(this.user).subscribe(
        res =>{
          console.log("Deleted")
          this.router.navigateByUrl("/users/list");
        },
        err => {
          console.error(err)
        }
      );
    }
  ngOnInit(): void {
    
 this.sys.chklogin();     
 
 this.id= this.route.snapshot.params.id;
 this.usrsvc.get(+this.id).subscribe(
   res =>{
     console.log("User:", res);
     this.user=res;
      },
      err =>{
        console.error(err);
      }
    );
  }

}
