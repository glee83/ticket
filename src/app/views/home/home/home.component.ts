import { Component, OnInit, ViewChild } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ContactUsService } from 'src/app/services/contact-us.service';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public busTickets = [];

  contactForm:FormGroup = new FormGroup({
    firstName: new FormControl(null, [ Validators.required]),
    lastName: new FormControl(null , [ Validators.required]),
    phone: new FormControl( null, Validators.required),
    email: new FormControl( null, [Validators.email, Validators.required]),
    message: new FormControl( null, [Validators.maxLength(255), Validators.required])
  });
  
  constructor(private contact: ContactUsService, private ticket: TicketService) { }

  ngOnInit(): void {
    
  this.getTicketDetails()
  }

  @ViewChild('myCarousel', {static: false}) myCarousel;

next() {
    this.myCarousel.next();
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

  // get tickets details;

  getTicketDetails(){
    this.ticket.getAdminTicket().subscribe(data =>{
      this.busTickets= data
      console.log(this.busTickets)
    }, error => {
      console.log(error)
    })
  }


  // customOptions: any = {
  //   loop: true,
  //   mouseDrag: true,
  //   touchDrag: true,
  //   pullDrag: true,
  //   dots: true,
  //   navSpeed: 700,
  //   navText: ['', ''],
  //   responsive: {
  //     0: {
  //       items: 1
  //     },
  //     400: {
  //       items: 2
  //     },

  //     740: {
  //       items: 3
  //     },
  //     940: {
  //       items: 4
  //     }
  //   },
  //   nav: true
  // }
}
