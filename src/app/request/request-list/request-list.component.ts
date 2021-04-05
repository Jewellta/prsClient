import { Component, OnInit } from '@angular/core';
import { RequestService } from '../request.service';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {

  requests:Request[]=[];
  searchCriteria:string="";


  constructor(
    private rqsvc: RequestService
  ) { }

  ngOnInit(): void {this.rqsvc.list().subscribe(
    requests=>{console.log("Requests: ", requests)
  this.requests=requests as Request[];},
  err => console.error(err);}
  );
  }

}
