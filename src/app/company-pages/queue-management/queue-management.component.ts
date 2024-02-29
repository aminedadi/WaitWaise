import { Component } from '@angular/core';
import { CommonModule, Time } from '@angular/common';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule} from  '@angular/material/input'
import { MatSelectModule } from "@angular/material/select";
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { DatabaseService } from 'src/app/services/database.service';
import { MatButtonModule } from '@angular/material/button'




export interface notification {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-queue-management',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, NgxMaterialTimepickerModule, ReactiveFormsModule,FormsModule ],
  templateUrl: './queue-management.component.html',
  styleUrls: ['./queue-management.component.css']
})



export class QueueManagementComponent {
  constructor(private db : DatabaseService){}
a : string ='';
quee_form = new FormGroup({
  queue_name : new FormControl(''),
  queue_type : new FormControl(''),
  queue_capacity : new FormControl(''),
  time_start : new FormControl(''),
  time_end : new FormControl(''),
  notification_type : new FormControl(''),
  


}
)
notification_options : notification[]  = [  
  { value : 'SMS Notification', viewValue : 'SMS Notification'},
  { value : 'mobile app notification', viewValue : 'mobile app notification'},
  { value : 'email', viewValue : 'email'}];     

queue_types :   any[]  = [  
  { value : 'customer support', viewValue : 'customer support'},
  { value : 'appointment scheduling', viewValue : 'appointment scheduling'},
  { value : 'billing', viewValue : 'billing'}];     

  getQueues(){
    this.db.getQueues().subscribe(res => {
      console.log("all queue returned from server : "  + (res.quee[0].dataValues))
    })
  }

  submitForm(){
    
    /* this.quee_form.value.time_end = "17:05:00"; */
    console.log("quee form value : " + "queue_name " + this.quee_form.value.queue_name + " queue_type " +this.quee_form.value.queue_type + " queue_capacity " +this.quee_form.value.queue_capacity + " time_start "+ this.quee_form.value.time_start + " time_end "+this.quee_form.value.time_end +" Notification_type "+ this.quee_form.value.notification_type);
    
    this.db.createQueue(this.quee_form.value).subscribe();
    return false;
  }
}


