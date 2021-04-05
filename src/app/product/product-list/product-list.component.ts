import { Component, OnInit } from '@angular/core';
import { Product } from '../product.class';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  searchCriteria: string="";
  
  constructor(
    private prosvc:ProductService
  ) { }


  ngOnInit(): void {this.prosvc.list().subscribe(
    products =>{console.log("Products:", products)
  this.products=products as Product[];},
  err=>{console.error(err);}
  );
  }

}
