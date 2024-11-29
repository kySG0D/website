import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { urls } from '../../services/links.service';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  standalone: true,
  imports: [CommonModule, ButtonComponent]
})

export class NavbarComponent {
  navbarLogo =  {
    logoPath: "../../../assets/logos/logo-big.png",
    logoAlt: ""
  };
  
  navbarItems : {text:string, url: string}[]  = [
    {text: "INICIO", url: "inicio"},
    {text: "REGRAS", url: "regras"},
  ]

  urls = urls;
  candidaturaURl = "Candidatar";

  scrollToSection(sectionId: string) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
