import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  apiUrl = 'http://localhost:3000';

  constructor(private http:HttpClient) {}

  // HttpClient API get() method => Fetch clients list
 /*    getEmployees(): Observable<Person> {
      return this.http
        .get<Person>(this.apiURL + '/api/Person')}
  */     
    getQueues(): Observable<any> {
      return this.http.get(`${this.apiUrl}/queues`);
    };
  
    createQueue(queueData: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/queues`, queueData);
    }

   
}
