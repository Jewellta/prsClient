import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  product: Product=null;
  vendors: Vendor[]=[];

  constructor(
    private prodsvc:ProductService,
    private route:ActivatedRoute,
    private router:Router,
    private vndrsvc:VendorService

  ) { }

save():void{
  console.log("Product before change:", this.product);
  this.product.vendorId=+this.product.vendorId;
  this.prodsvc.change(this.product).subscribe(
    res =>{
      console.log("edit successful");
      this.router.navigateByUrl("/product/list");
    },
    err =>(console.error(err))
  );
}


  ngOnInit(): void {
    this.vndrsvc.list().subscribe(
      res=>{console.debug(res); 
      this.vendors=res;},
      err=>{console.error(err);}
      );
      let id = this.route.snapshot.params.id;
    this.prodsvc.get(+id).subscribe(
      res =>{
        console.log("Prouct: ", res);
        this.product=res;
      },
     err => {console.error(err);}
    );
  }
}
