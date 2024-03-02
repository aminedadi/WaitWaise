import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button'
import { RouterModule } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  userType = null ;
  isAuthenticated = false;
  constructor(private auth:AuthService){}
  ngOnInit(): void {
    
   // window.location.reload();
    this.userType = this.auth.getRole();
    this.isAuthenticated = ( this.userType === 'company') || ( this.userType === 'client' )   ;
    
  }

  
  signOut(){
    this.auth.signOut();
  }



}
