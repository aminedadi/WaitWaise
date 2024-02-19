import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {


  url = ("http://localhost:3000/api")
  constructor(private http: HttpClient) { }

  loginRequest(data: any): Observable<any> {
    console.log("data : " + data.user_name, data.user_password, data.user_type );
    return this.http.post(`${this.url}/login`, data)
  }

  signupRequest(data:any): Observable<any>{
    console.log('signup data: ' + data)
    return this.http.post(`${this.url}/signup`,data)
  }

  
}
