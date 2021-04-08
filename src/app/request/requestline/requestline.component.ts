import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import {Request} from '../request.class';
import { Requestline } from 'src/app/requestline/requestline.class';
import { ProductService } from 'src/app/product/product.service';
import { Product } from 'src/app/product/product.class';
import { RequestlineService } from 'src/app/requestline/requestline.service';

@Component({
  selector: 'app-requestline',
  templateUrl: './requestline.component.html',
  styleUrls: ['./requestline.component.css']
})
export class RequestlineComponent implements OnInit {

request:Request=null;
id:number=0;
requestlines:Requestline[]=[];
requestline:Requestline=null;
products: Product[]=[];

  constructor(
    private rlsvc:RequestlineService,
    private route:ActivatedRoute,
    private router:Router,
    private prodsvc:ProductService,
    private rqsvc:RequestService
  ) { }

  delete(requestline:Requestline):void{
    this.rlsvc.remove(requestline).subscribe(
      res =>{
        console.log("Deleted")
        this.refresh();
      },
      err =>{
        console.error(err)
      }
    )
  }
refresh():void{
  this.id=this.route.snapshot.params.id;
  this.rqsvc.get(+this.id).subscribe(
    res =>{
      console.log("request:", res);
      this.request=res;
    },
    err =>{
      console.error(err);
    }
  )

}
review():void{
  this.rqsvc.review(this.request).subscribe(
    res =>{
      console.log("approval pre process:")
      this.request=res;
      this.router.navigateByUrl("review/list");
    },
    err =>{
      console.error(err);
    }
  )
}

  ngOnInit(): void {
    this.prodsvc.list().subscribe(
      res=>{console.debug(res); 
      this.products=res;},
      err=>{console.error(err);}
      );

      // this.rlsvc.list().subscribe(
      //   res =>{console.log(res);
      //   this.requestlines=res;},
      //   err=>{console.error(err);}
      // );
        this.refresh();
  }

}
