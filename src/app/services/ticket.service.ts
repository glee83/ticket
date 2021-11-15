import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ticket } from '../interfaces/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  base_url = 'http://localhost:3000/api/ticket/add'
  constructor( private http: HttpClient) { }

  buyTicket(body: any) {
    return this.http.post(this.base_url, body , {
      observe: body,
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  getTicket(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>('http://localhost:3000/api/ticket/get')
  }
}
