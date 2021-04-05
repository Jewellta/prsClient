import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { Vendor } from 'src/app/vendor/vendor.class';
import { VendorService } from 'src/app/vendor/vendor.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product=new Product();
  vendors: Vendor[]=[];

  constructor(
    private prodsvc:ProductService,
    private router: Router,
    private vndsvc: VendorService
  ) { }

  save(): void{
    console.log("Product:", this.product);
    this.product.vendorId=+this.product.vendorId;
    this.prodsvc.create(this.product).subscribe(
      res => {console.log("Create Succesful",);
    this.router.navigateByUrl("/products/list");},
    err =>{console.error(err);
      }
    );
  }


  ngOnInit(): void {
    this.vndsvc.list().subscribe(
      res =>{console.log(res); this.vendors=res;},
      err=>{console.error(err);}
    )
  }

}
