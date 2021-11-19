import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomeComponent } from './views/home/home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from './views/booking/card/card.component';
import { FeaturesComponent } from './views/features/features.component';
import { DiscountComponent } from './views/discount/discount.component';
import { DboardingComponent } from './views/dboarding/dboarding.component';
import { TestiComponent } from './views/testi/testi.component';
import { ContactComponent } from './views/contact/contact.component';
import { ShareModuleModule } from './modules/share-module.module';
import { TicketComponent } from './views/ticket/ticket.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { SuccessfulTicketComponent } from './views/successful-ticket/successful-ticket.component';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { TicketService } from './services/ticket.service';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    FeaturesComponent,
    DiscountComponent,
    DboardingComponent,
    TestiComponent,
    ContactComponent,
    TicketComponent,
    SuccessfulTicketComponent
  ],

  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    ShareModuleModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthService, TicketService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
