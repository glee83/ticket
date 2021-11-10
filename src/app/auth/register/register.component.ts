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
      this.auth.registerUsers(JSON.stringify(this.myForm.value)).subscribe(data => {
        console.log(data);
        this.router.navigate(['/login']);
      }, error => console.log(error))
      console.log(JSON.stringify(this.myForm.value))
    }
  }

  
/*
  registerUser(event) {

    event.preventDefault()

    const errors = [];
    const target = event.target;
    const name = target.querySelector('#name').value
    const phone = target.querySelector('#phone').value
    const email = target.querySelector('#email').value
    const password = target.querySelector('#password').value
    
    //more validation

    if(errors.length == 0){
      this.auth.registerUsers(name, phone, email, password).subscribe(data =>{
        console.log(data)

        if(data.success){
          this.router.navigate(['ticket'])
        }
      })
    }
    
  } */

}
function password(username: any, phone: any, email: any, password: any) {
  throw new Error('Function not implemented.');
}

function email(username: any, phone: any, email: any, password: (username: any, phone: any, email: any, password: any) => void) {
  throw new Error('Function not implemented.');
}

function phone(username: any, phone: any, email: (username: any, phone: any, email: any, password: (username: any, phone: any, email: any, password: any) => void) => void, password: (username: any, phone: any, email: any, password: any) => void) {
  throw new Error('Function not implemented.');
}

function username(username: any, phone: (username: any, phone: any, email: (username: any, phone: any, email: any, password: (username: any, phone: any, email: any, password: any) => void) => void, password: (username: any, phone: any, email: any, password: any) => void) => void, email: (username: any, phone: any, email: any, password: (username: any, phone: any, email: any, password: any) => void) => void, password: (username: any, phone: any, email: any, password: any) => void) {
  throw new Error('Function not implemented.');
}

