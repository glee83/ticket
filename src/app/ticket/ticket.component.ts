import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  constructor( private ticketS:TicketService,  private rout: Router) { }

  ngOnInit(): void {
  }

  myform: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    idCard: new FormControl( null, [Validators.required]),
    phone: new FormControl( null, [Validators.required]),
    email: new FormControl( null, [Validators.required, Validators.email]),
    seat: new FormControl( null, [Validators.required]),
    date: new FormControl( null, [Validators.required])
  })

  ticket(){
    if(!this.myform.valid){
      console.log('sorry an error occured!')
    }else{
      this.ticketS.addTicket(JSON.stringify(this.myform.value)).subscribe(data =>{
        console.log(data)
        this.rout.navigate(['/successful'])
      },error =>{
        console.log(error) 
      })
    }
  }
}