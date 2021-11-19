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

  constructor( private ticketService: TicketService, private rout: Router) { }

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


  buyTicket(){
    if(this.myform.valid){
      this.ticketService.buyTicket(this.myform.value).subscribe(res =>{
        console.log(res)
        this.rout.navigate(['/successful'])
      }, error => console.log(error))
    }
  }

}