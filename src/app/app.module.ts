import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

import { DropdownModule } from 'primeng/dropdown';
import { SelectModule } from 'primeng/select';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { ButtonComponent } from './components/button/button.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RegrasComponent } from './components/regras/regras.component';
import { SocialComponent } from './components/social/social.component';
import { ApplicationComponent } from './views/application/application.component';
import { DonateComponent } from './views/donate/donate.component';
import { HomeComponent } from './views/home/home.component';
import { PayFormComponent } from './views/pay-form/pay-form.component';
import { LoadingScreenComponent } from './components/loading-screen/loading-screen.component';
import { ModalScreenComponent } from './components/modal-screen/modal-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ButtonComponent,
    PayFormComponent,
    RegrasComponent,
    SocialComponent,
    DonateComponent,
    ApplicationComponent,
    LoadingScreenComponent,
    ModalScreenComponent
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
