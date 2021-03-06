import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class AuthService {
  apiUrl="http://localhost:3000/";
    constructor(
    private http : HttpClient
  ) { }

  login(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    
    let url = this.apiUrl+'users/login'
    return this.http.post(url,data, {headers: headers});
  }
  register(data)
  {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    let url = this.apiUrl+'users/register'
    return this.http.post(url,data, {headers: headers});
  }
  getToken()
  {
    return localStorage.getItem('token');
  }
}
