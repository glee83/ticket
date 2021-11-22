import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  constructor() { }

  myTicket:FormGroup = new FormGroup({
    date: new FormControl(null, [Validators.required]),
    departure: new FormControl(null, [Validators.required]),
    destination: new FormControl( null, [Validators.required]),
    departure_time: new FormControl( null, [Validators.required]),
    seat: new FormControl( null , [Validators.required]),
    bus_type: new FormControl( null, [Validators.required]),
    amount: new FormControl( null , [Validators.required]),
    plate_num: new FormControl( null, [Validators.required])
  })

  ngOnInit(): void {
  }

  addTicket(){
    if(this.myTicket.valid){
      console.log(this.myTicket.value)
    }
  }

}
