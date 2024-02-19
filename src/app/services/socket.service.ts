import { Injectable } from '@angular/core';
//import { io, Socket } from 'socket.io-client';
import {  Observable } from 'rxjs';
/* import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators'; */
import {Socket, io} from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class SocketService {

/*   constructor(private socket: Socket) {}

  sendMessage(msg: string) {
    this.socket.emit('message', msg);
  }
  getMessage() {
    return this.socket.fromEvent('message').pipe(map( data => data));
  } */

























  constructor(private socket: Socket) {
    socket = io('http://localhost:3000',{ withCredentials: true });
    console.log(socket);
  }

  connetcion(){
    this.socket.on('connection',msg=>{
      return msg;
    });
  }

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
  
}
