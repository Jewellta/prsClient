import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  menus:any[]=[
    {display: "Home", route:"/home"},
    {display: "Users", route:"/users/list"},
    {display: "Vendor", route:"/vendors/list"},
    {display: "Product", route:"/product/list"},
    {display: "Review", route:"/review/list"},
    {display: "Request", route:"/request/list"},
    {display: "Login", route:"/users/login"}
  ]

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
