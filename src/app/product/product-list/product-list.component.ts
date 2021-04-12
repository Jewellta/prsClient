import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SystemService } from 'src/app/system.service';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import {User} from 'src/app/user/user.class';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:Product[]=[];
  searchCriteria: string="";
  user:User=new User;
  
  constructor(
    private prosvc:ProductService,
    private sys:SystemService,
    private router:Router
  ) { }


  ngOnInit(): void {
        
   this.sys.chklogin();

    this.prosvc.list().subscribe(
    products =>{console.log("Products:", products)
  this.products=products as Product[];},
  err=>{console.error(err);}
  );
  this.user.isAdmin=this.sys.loggedInUser.isAdmin;

    
  }
}

