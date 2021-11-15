import { Component, OnInit } from '@angular/core';
import { TicketService } from 'src/app/services/ticket.service';

@Component({
  selector: 'app-successful-ticket',
  templateUrl: './successful-ticket.component.html',
  styleUrls: ['./successful-ticket.component.scss']
})
export class SuccessfulTicketComponent implements OnInit {

  public tickets = [];
  public counter;

  constructor(private ticket: TicketService) { }

  ngOnInit(): void {

    this.getTicket()

  }

  getTicket(){
    this.ticket.getTicket().subscribe(data =>{
      this.tickets= data
      this.counter = this.tickets.length
      console.log(this.tickets)
    }, error => {
      console.log(error)
    })
  }

}
