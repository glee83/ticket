import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminTicket } from '../interfaces/adminTicket';

@Injectable({
  providedIn: 'root'
})
export class AdminTicketService {

  base_url = 'http://localhost:3000/api/ticket/addTicket'
  constructor( private http: HttpClient) { }

  addTicket(body:any){
    this.http.post(this.base_url, body, {
      observe: body,
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }).subscribe(res =>{
      console.log(res)
    }, error =>{
      console.log(error)
    })
  }

  getTicket(): Observable<AdminTicket[]>{
    return this.http.get<AdminTicket[]>('http://localhost:3000/api/ticket/getTicket')
  }
}
