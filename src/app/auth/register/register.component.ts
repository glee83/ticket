import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  success = '';
  
  constructor( private auth: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    
  }

  myForm:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.minLength(3), Validators.required]),
    phone: new FormControl( null, [ Validators.required]),
    email: new FormControl( null, [Validators.email, Validators.required]),
    password: new FormControl( null, [Validators.minLength(6), Validators.required])
  })

  goToLogin(){
    this.router.navigate(['/login'])
  }

  register(){
    if(!this.myForm.valid){
      console.log('something went wrong!')
    }else{
      this.auth.registerUsers(JSON.stringify(this.myForm.value))
        .subscribe(res => {
         
          localStorage.setItem('token', JSON.stringify(res))
          this.router.navigate(['/ticket']);
        }, error => console.log(error))
    }
  }

}


