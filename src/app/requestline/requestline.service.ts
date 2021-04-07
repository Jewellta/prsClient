import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Requestline } from './requestline.class';
import{HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestlineService {
baseurl:string="http://localhost:59793/api/requestlines";

  constructor(
private http:HttpClient
  ) { }

  get(id:number):Observable<Requestline>{
    return this.http.get(`${this.baseurl}/${id}`) as Observable<Requestline>
  }
  list():Observable<Requestline[]>{
    return this.http.get(`${this.baseurl}`)as Observable<Requestline[]>;
  }
  create(requestline:Requestline):Observable<Requestline>{
    return this.http.post(`${this.baseurl}`, requestline)as Observable<Requestline>
  }
  change(requestline:Requestline):Observable<any>{
    return this.http.put(`${this.baseurl}/${requestline.id}`, requestline)as Observable<any>
  }
}
