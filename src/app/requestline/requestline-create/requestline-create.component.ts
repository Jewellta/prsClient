import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { SystemService } from 'src/app/system.service';
import { UserService } from 'src/app/user/user.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-create',
  templateUrl: './requestline-create.component.html',
  styleUrls: ['./requestline-create.component.css']
})
export class RequestlineCreateComponent implements OnInit {

  requestline:Requestline= new Requestline();
  products:Product[]=[];
   

  constructor(
    private rlsvc:RequestlineService,
    private router:Router,
    private route:ActivatedRoute,
    private prodsvc:ProductService,
    private sys:SystemService
  ) { }


save():void{
  this.requestline.productId=+this.requestline.productId;
  console.log("Before Create: ", this.requestline);
  this.rlsvc.create(this.requestline).subscribe(
    res => {console.log("create", res);
    this.router.navigateByUrl('/request/list');
  },
  err =>{console.log(err)}
  );
}

ngOnInit(): void {
  //this.requestline.requestId=this.sys.loggedInUser.id;
  //this.requestline.requestId=this.sys.loggedInUser
  
  this.prodsvc.list().subscribe(
    res=>{
      console.log("res",res); this.products=res;},
      err=>{console.error(err);}
      )
    this.requestline.requestId =+this.route.snapshot.params.rid;
      }
}