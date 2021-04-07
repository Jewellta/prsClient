import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
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
    private prodsvc:ProductService
  ) { }


save():void{
  console.log("Before Create: ", this.requestline);
  this.rlsvc.create(this.requestline).subscribe(
    res => {console.log("create");
  this.router.navigateByUrl('/requestline');
},
  err =>{console.log(err)}
  );
}

  ngOnInit(): void {
    this.prodsvc.list().subscribe(
      res=>{
        console.log("res"); this.products=res;},
        err=>{console.error(err);}
    )
      }
}