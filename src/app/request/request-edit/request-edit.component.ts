import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RequestService } from '../request.service';
import {Request} from '../request.class';

@Component({
  selector: 'app-request-edit',
  templateUrl: './request-edit.component.html',
  styleUrls: ['./request-edit.component.css']
})
export class RequestEditComponent implements OnInit {

request:Request=null;

  constructor(
    private reqsvc:RequestService,
    private route: ActivatedRoute,
    private router: Router

  ) { }

    save():void{
      console.log("Before Change", this.request);
      this.reqsvc.change(this.request).subscribe(
        res => {console.log("edit success");
        this.router.navigateByUrl("/request/list");
      },
      err =>{
        console.error(err)
      }
      )
    }

  ngOnInit(): void {
    let id = this.route.snapshot.params.id;
    this.reqsvc.get(+id).subscribe(
      res =>{
        console.log("request", res);
        this.request=res;
      },
      err => {console.error(err);}
    );
  }

}
