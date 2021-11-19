import { JsonpClientBackend } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlDirective, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    email: new FormControl(null, [ Validators.email,Validators.required]),
    password: new FormControl(null, [Validators.required])
  })
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  goToRegister(){
    this.router.navigate(['/auths/register'])
  }

  login(){
    if(!this.loginForm.valid){
      console.log('user name or password did not match')
      return
    }else{
      console.log('successful')
      this.auth.loginUsers(JSON.stringify(this.loginForm.value)).subscribe(
        data =>{
          console.log(data)
          localStorage.setItem('token', JSON.stringify(data))
          this.router.navigate(['/ticket']);
        },
        error => console.log(error)
      )

    }
  }

}
