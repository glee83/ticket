import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard.component';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './settings/account/account.component';
import { AdministrativeComponent } from './settings/administrative/administrative.component';
import { NotificationComponent } from './settings/notification/notification.component';
import { TicketComponent } from './ticket/ticket.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  { 
    path: '', 
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },

      {
        path: 'ticket',
        component: TicketComponent
      },

      {
        path: 'users',
        component: UsersComponent
      },

      {
        path: 'contact',
        component: ContactComponent
      },

      {
        path: 'setting',
        component: AccountComponent,
        children: [
          {
            path: 'administrative',
            component: AdministrativeComponent
          },
          {
            path: 'notification',
            component: NotificationComponent
          }
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
