import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './views/home/home/home.component';
import { SuccessfulTicketComponent } from './views/successful-ticket/successful-ticket.component';
import { TicketComponent } from './views/ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'ticket',
    component: TicketComponent,
    canActivate: [AuthGuard]
  },

  {
    path: 'account',
    component: RegisterComponent
  },
  {
    path: 'successful',
    component: SuccessfulTicketComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
