import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( private rout:Router ) { }

  ngOnInit(): void {

  }

  gotoAuth(){
    this.rout.navigate(['/auths/register'])
  }
  gotoTicket(){
    this.rout.navigate(['/ticket'])
  }
  gotoCheckTicket(){
    this.rout.navigate(['/successful'])
  }

  home(){
    this.rout.navigate([''])
  }

}
