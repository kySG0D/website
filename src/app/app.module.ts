import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegrasComponent } from './components/regras/regras.component';
import { SocialComponent } from './components/social/social.component';
import { HomeComponent } from './views/home/home.component';
import { PayFormComponent } from './views/pay-form/pay-form.component';
import { DropdownModule } from 'primeng/dropdown';
import { SelectModule } from 'primeng/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    PayFormComponent,
    RegrasComponent,
    SocialComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    DropdownModule,
    SelectModule   
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
