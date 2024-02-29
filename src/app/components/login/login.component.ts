import { HttpClient, HttpHandler } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule,FormGroup, FormControl, MaxLengthValidator, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ConnectionService } from 'src/app/services/connection.service';
import { DatabaseService } from 'src/app/services/database.service';



@Component({
  selector: 'app-login',
  standalone: true,
  imports:[FormsModule, ReactiveFormsModule, RouterModule,RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],

})
export class LoginComponent {
  errorMsg : string = "";
  loginObj = new FormGroup ({
    user_name : new FormControl(''),
    user_password : new FormControl(''),
    user_type: new FormControl('')
  })
  getUserName(){}

  
  
  
  
  constructor(  private http: HttpClient,
                private router : Router,
                private cnx: ConnectionService,
                private auth: AuthService ){}
  onLogin(){
    //debugger;
    this.cnx.loginRequest(this.loginObj.value).subscribe((res:any)=>{
      if(!res.success){
        this.errorMsg = res.message;
        console.log("error msg from login comp " + this.errorMsg);
        setTimeout(()=>{ this.errorMsg = ""},4000)
      }else{
        this.router.navigateByUrl('dashbord');
      
      }      
      this.auth.saveToken(res.accessToken);
      /* window.localStorage.setItem('TokenKey',res.accessToken); */
      //console.log("AccessToken : " + res.accessToken)
      console.log(res)
    });

    /* this.http.post('url',this.loginObj).subscribe((res:any) =>{
      if (res.result) {
        console.log('login Success');
        localStorage.setItem('loginToken',res.data.token);
        this.router.navigateByUrl('./dashbord');
      }else{
        alert(res.message);
        console.log('login ');
      } 
    })*/
  }

}
