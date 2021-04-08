import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/product/product.class';
import { ProductService } from 'src/app/product/product.service';
import { Requestline } from '../requestline.class';
import { RequestlineService } from '../requestline.service';

@Component({
  selector: 'app-requestline-edit',
  templateUrl: './requestline-edit.component.html',
  styleUrls: ['./requestline-edit.component.css']
})
export class RequestlineEditComponent implements OnInit {

  requestline:Requestline=null;
  products:Product[]=[]
  
  constructor(
    private rlsvc:RequestlineService,
    private route:ActivatedRoute,
    private router:Router,
    private prodsvc:ProductService
  ) { }

save(): void{
  this.requestline.productId=+this.requestline.productId;
  console.log("before change", this.requestline);
  this.rlsvc.change(this.requestline).subscribe(
    res =>{
      console.log("succesful edit", res)
      this.router.navigateByUrl("/request/list");
    },
    err =>{
      console.error(err);
    }
  )
}

  ngOnInit(): void {
      this.prodsvc.list().subscribe(
        res=>{
          console.log("res",res)
          this.products=res;
        }
      )
    let id = this.route.snapshot.params.id;
    this.rlsvc.get(+id).subscribe(

      res =>{
        console.log("Requestline: ", res);
        this.requestline=res;
      },
      err =>{console.error(err);}
    );
  }
}
