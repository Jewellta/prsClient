import { Component, OnInit } from '@angular/core';
import {Vendor} from '../vendor.class';
import{VendorService} from '../vendor.service'

@Component({
  selector: 'app-vendor-list',
  templateUrl: './vendor-list.component.html',
  styleUrls: ['./vendor-list.component.css']
})
export class VendorListComponent implements OnInit {

  vendors:Vendor[]=[]
  searchCriteria:string="";

  constructor(
    private vndsrvc:VendorService
  ) { }

  ngOnInit(): void {this.vndsrvc.list().subscribe(
    vendors=>{console.log("Vendor List:", vendors)
    this.vendors=vendors as Vendor[];},
    err=>{console.error(err);}
      );

  } 
}

