import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  @ViewChild(MatSidenav)
  sidenav: MatSidenav

  panelOpenState = false;

  constructor( private obs: BreakpointObserver ) { }

  ngAfterViewInit(){
    this.obs.observe(['(max-width: 800px)']).subscribe((res) =>{
      if(res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }else{
        this.sidenav.mode = 'side';
        this.sidenav.open()
      }
    })
  }

  ngOnInit(): void {
  }

  

  menuItems:any = [
    {
      title: 'dashboard',
      subtitle: 'recent analytics',
      other:[
        {icon: 'view_agenda', items:'General', link: ""},
      {icon: 'business_center', items:'Students', link: "students"},
      {icon: 'cast_for_education', items:'Instructors', link: "instructors"}
      ],
    },
    {
      title: 'applications',
      subtitle: 'current events',
      other:[
      {icon: 'school', items:'academy', link:"academy"},
      {icon: 'today', items:'calendar', link:"filemanager"},
      {icon: 'forum', items:'chat',link:"chat"},
      {icon: 'call', items:'contact', link:"contact"},
  
      ],
    },
  ]

  pages:any = [
    {
      title: 'features and more',
      subtitle: 'activities, notes, others....',
      other:[
      {icon: 'notes', items:'Activities', link:"activity"},
      // {icon: 'email', items:'mailbox'},
      // {icon: 'text_snippet', items:'notes'},
      {icon: 'sensor_window', items:'scrumboard'},
      {icon: 'task_alt', items:'tasks', link:"task"},
      {icon: 'settings', items:'settings', link:'settings'},
      {icon: 'account_circle', items:'profile',  link:'profile'}
      ],
    },

  ]

}
