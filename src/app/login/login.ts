import { Component } from '@angular/core';
import { MyService } from '../my-service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { concatWith } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


  constructor(private service:MyService,private route:Router){}
  

  FormInput = new FormGroup({
      Username:new FormControl(''),
      Password:new FormControl('')
    });

   Login() {
    debugger;
  this.service.Login(this.FormInput.value).subscribe({
    next: (res) => {  
      console.log("Success:", res);
      localStorage.setItem('AccessToken', res.accessToken)
      this.route.navigate(['/product'])
    },
    error: (err) => {
      console.log("Error:", err);
      
    }
  });
}
}
