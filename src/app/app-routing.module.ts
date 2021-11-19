import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './views/home/home/home.component';
import { SuccessfulTicketComponent } from './views/successful-ticket/successful-ticket.component';
import { TicketComponent } from './views/ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'successful',
    component: SuccessfulTicketComponent
  },

  
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'auths', loadChildren: () => import('./auths/auths.module').then(m => m.AuthsModule) },
  { path: 'ticket', loadChildren: () => import('./ticket/ticket.module').then(m => m.TicketModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
