import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { TicketComponent } from './ticket/ticket.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { UsersComponent } from './users/users.component';
import { ContactComponent } from './contact/contact.component';
import { AccountComponent } from './settings/account/account.component';
import { AdministrativeComponent } from './settings/administrative/administrative.component';
import { NotificationComponent } from './settings/notification/notification.component';
import { HomeComponent } from './home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BooketTicketComponent } from './booket-ticket/booket-ticket.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';

@NgModule({
  declarations: [
    DashboardComponent,
    TicketComponent,
    UsersComponent,
    ContactComponent,
    AccountComponent,
    AdministrativeComponent,
    NotificationComponent,
    HomeComponent,
    BooketTicketComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DashboardModule { }
