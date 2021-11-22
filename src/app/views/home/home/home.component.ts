import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  contactForm:FormGroup = new FormGroup({
    firstName: new FormControl(null, [ Validators.required]),
    lastName: new FormControl(null , [ Validators.required]),
    phone: new FormControl( null, Validators.required),
    email: new FormControl( null, [Validators.email, Validators.required]),
    message: new FormControl( null, [Validators.maxLength(255), Validators.required])
  });
  
  constructor(private contact: ContactUsService) { }

  ngOnInit(): void {
  }
   
  
  sendMessage(){
    if(!this.contactForm.valid){
      console.log('please check the form and resend again thanks')
    }else{
      this.contact.addMessages(JSON.stringify(this.contactForm.value)).subscribe(data =>{
        console.log(data);
      }, error => console.log(error));
      console.log(JSON.stringify(this.contactForm.value))
    }
  }
}
