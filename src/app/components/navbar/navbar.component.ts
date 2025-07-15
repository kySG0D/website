import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { urls } from '../../services/links.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})

export class NavbarComponent {
  navbarLogo =  {
    logoPath: "../../../assets/logos/logo-big.png",
    logoAlt: ""
  };
  
  navbarItems : {text:string, url: string}[]  = [
    {text: "INICIO", url: "inicio"},
    {text: "REGRAS", url: "regras"},
    {text: "DOAR", url: "doar"},
    // {text: "LOJA", url: "loja"},
  ]

  urls = urls;
  candidaturaURl = "Candidatar";
  mediaQuery = window.matchMedia("(max-width: 768px)");
  isTabletOrMobile: boolean = this.mediaQuery.matches;

  constructor(
    private location: Location,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.mediaQuery.addEventListener("change", (event: MediaQueryListEvent) => {
      this.isTabletOrMobile = event.matches;
    });
  }

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
