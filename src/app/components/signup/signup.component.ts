import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  clientObj = new FormGroup({
    'full_name' : new FormControl(),
    'email' : new FormControl(),
    'phone_number' : new FormControl(),
    'user_type' : new FormControl(),
    'user_name' : new FormControl(),
    'user_password' : new FormControl(),
  })
  companyObj = new FormGroup({
    'business_name' : new FormControl(),
    'business_email' : new FormControl(),
    'business_phone' : new FormControl(),
    'address' : new FormControl(),
    'type_of_business' : new FormControl(),
    'user_type' : new FormControl(),
    'user_name' : new FormControl(),
    'user_password' : new FormControl(),
  })
  constructor(private  cnx:ConnectionService){}
  
  toggleForm(userType:any) {
    const companyForm = document.getElementById('company-form');
    const clientForm = document.getElementById('client-form');
    if (userType === 'company') {
      companyForm!.style.display = 'flex';
      clientForm!.style.display = 'none';
    } else {
      console.log('toggleForm clicked in client');
      companyForm!.style.display = 'none';
      clientForm!.style.display = 'flex';
    }
  }

  OnsignupClient(){
    this.clientObj.value.user_type = 'client'; 
    this.cnx.signupRequest(this.clientObj.value).subscribe();
  }

  OnsignupCompany(){
    this.companyObj.value.user_type = 'company'; 
    this.cnx.signupRequest(this.companyObj.value).subscribe();
  }
}
