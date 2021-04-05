import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product:Product=null;
  id: number=0;
  showVerify: boolean=false;


  constructor(
    private prodsvc:ProductService,
    private route: ActivatedRoute,
    private router:Router
  ) { }

    edit():void{
        this.router.navigateByUrl(`/product/edit/${this.id}`)
    }
    toggleVerify():void{
        this.showVerify=!this.showVerify;

    }

    delete(): void{
      this.prodsvc.remove(this.product).subscribe(
        res =>{
          console.log("Deleted")
          this.router.navigateByUrl("/products/list");
        },
        err =>{
          console.error(err)
        }
      );
    }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.prodsvc.get(+this.id).subscribe(
      res=>{
        console.log("Product:", res);
        this.product=res;
      },
      err =>{
        console.error(err);
      }
    );
  }

}
