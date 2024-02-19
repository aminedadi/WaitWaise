import {Socket, io} from 'socket.io-client'
import { Observable } from 'rxjs';
import { Component, Inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { AuthService } from './services/auth.service';
//import { SocketService } from './services/socket.service';


RouterOutlet
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  isLoggedIn!: boolean;
  /* socket = io('http://localhost:4000',{ withCredentials: false }); */

  constructor(private authService: AuthService){}
  
  
  ngOnInit(): void{
    this.isLoggedIn = !!this.authService.getToken();
  }

  getUserName() {
    return this.authService.getUser();
  }
  //Method to logout
  signOut() {
    this.authService.signOut();
  }
  
  
  

  /* connetcion(){
    this.socket.on('connection',msg=>{
      return msg;
    });
  } *//* 

  emitEvent(eventName: string, data?: any): void {
    this.socket.emit(eventName, data);
  }

  onEvent(eventName:string):Observable<any>{
    return new Observable<any>((observer) => {
      this.socket.on(eventName, (data: any) => {
        observer.next(data);
      });
    });
  }

  message = this.onEvent('message').subscribe(msg=>console.log(msg)); */


 /*  constructor( private socketService: SocketService){}
  title = 'app';
  msg !: string;
  ngOnInit(): void {
    
    this.socketService.connetcion();
    this.socketService.onEvent('messsage').subscribe(message=> console.log(message));
  }
   */
  
}


 
