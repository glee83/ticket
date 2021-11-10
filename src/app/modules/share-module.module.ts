import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../shareComponents/navbar/navbar.component';
import { FooterComponent } from '../shareComponents/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


const shareComponents = [
  NavbarComponent,
  FooterComponent
]

@NgModule({
  declarations: [
    shareComponents
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    shareComponents
  ]
})
export class ShareModuleModule { }
