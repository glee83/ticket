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
import { ContactComponent } from './views/contact/contact.component'
import { AuthModule } from './modules/auth.module';
import { ShareModuleModule } from './modules/share-module.module';
import { TicketComponent } from './views/ticket/ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SuccessfulTicketComponent } from './views/successful-ticket/successful-ticket.component';


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
    AuthModule,
    ShareModuleModule,
    ReactiveFormsModule
    
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
