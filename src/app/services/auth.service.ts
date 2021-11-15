import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../interfaces/register';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor( private http: HttpClient) { }

  registerUsers(body:any){
    return this.http.post('http://localhost:3000/api/register', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  loginUsers(body:any){
    return this.http.post('http://localhost:3000/api/login', body, {
      observe: 'body',
      withCredentials: true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    })
  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  getToken(){
    return localStorage.getItem('token');
  }
}
