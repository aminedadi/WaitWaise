import { Component, Inject, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.css'],
    standalone: true,
})

export class MainPageComponent implements OnInit {
//  constructor(/* @Inject('Socket') */  private socketService : SocketService){}

  
  ngOnInit() {

  /*  this.message = this.socketService.getMessage(); */





   /*  console.log(this.socketService.connetcion());
    this.socketService.emitEvent('getTurnNumber', null);
    
    this.socketService.onEvent('turnNumber').subscribe(msg =>{this.message = msg}); */
  /*   this.socketService.onEvent('message').subscribe(msg =>{this.message = msg}); */
  }

  name : string = 'amine';
  message !: any;
  someElement = document.querySelector("#current-client") ;

  
  
  myFunction(){
    let  a = document.querySelector('#current-client') ;  
    var number = parseInt(a?.textContent!,10);
    number += 1
    console.log(number);
    a!.innerHTML = number.toString(10) ;
    

  }
  
 
  
 
}