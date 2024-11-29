import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SocialComponent } from '../social/social.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, SocialComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  
})
export class FooterComponent {
  footerCopyRight = "2024 Alta Roleplay. Todos os direitos reservados";

  // linksSection : {url:string, text:string}[] = [
  //   {url: "/terms-conditions", text: "Termos e Condições"},
  //   {url: "/privacy-policy", text: "Política de Privacidade"}
  // ];
}
