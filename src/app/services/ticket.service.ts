import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdminTicket } from '../interfaces/adminTicket';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  base_url = 'http://localhost:3000/api/ticket/add'
  constructor( private http: HttpClient) { }

  addTicket(body:any) {
    return this.http.post(this.base_url, body , {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  getTicket(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>('http://localhost:3000/api/ticket/get')
  }

  adminTicket(body:any){
    this.http.post('http://localhost:3000/api/ticket/addTicket', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  getAdminTicket(): Observable<AdminTicket[]>{
    return this.http.get<AdminTicket[]>('http://localhost:3000/api/ticket/getTicket')
  }
}
