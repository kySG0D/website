import { CommonModule, Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
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
    {text: "SPONSER", url: "form-sponser"},
  ]

  urls = urls;
  candidaturaURl = "Candidatar";

  constructor(
    private location: Location,
    public router: Router
  ) {}

  scrollToSection(sectionId: string) {
    if (this.location.path() !== '/') {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollTo(sectionId);
        }, 100); // esperar até o DOM carregar
      });
    } else {
      this.scrollTo(sectionId);
    }
  }

  private scrollTo(sectionId: string): void {
    const section = document.getElementById(sectionId);
    if(section){
      if (sectionId === 'inicio') {
        section.scrollIntoView({ behavior: 'smooth' });
        this.location.go('');
      }else{
        section.scrollIntoView({ behavior: 'smooth' });
        this.location.go(`#${sectionId}`);
      }
    
    }
  }
}
