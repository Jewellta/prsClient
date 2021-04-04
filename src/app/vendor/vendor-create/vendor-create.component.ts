import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendor } from '../vendor.class';
import { VendorService } from '../vendor.service';

@Component({
  selector: 'app-vendor-create',
  templateUrl: './vendor-create.component.html',
  styleUrls: ['./vendor-create.component.css']
})
export class VendorCreateComponent implements OnInit {

  vendor:Vendor= new Vendor();

  constructor(
    private vndrsvc:VendorService,
    private router:Router
  ) { }

  save(): void{
    console.log("before create: ", this.vendor);
    this.vndrsvc.create(this.vendor).subscribe(
      res =>{console.log("create succesful");
    this.router.navigateByUrl("/vendors/list");
    },
    err =>{console.error(err);
      }
    );
  }

  ngOnInit(): void {
  }

}
