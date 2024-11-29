import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../components/button/button.component';
import { urls } from '../../services/links.service';
import { SocialComponent } from '../../components/social/social.component';
import { RegrasComponent } from '../../components/regras/regras.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonComponent, SocialComponent, RegrasComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('fadeAnimation', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible => hidden', [
        animate('500ms ease-out') // Duração do fade-out
      ]),
      transition('hidden => visible', [
        animate('500ms ease-in') // Duração do fade-in
      ])
    ])
  ]
})

export class homeComponent implements OnInit{
  @ViewChild(NavbarComponent) navbar: NavbarComponent | undefined;
  
  welcomeText = "Bem Vindo ao Alta Roleplay";
  introText = "Você está pronto para embarcar em uma jornada única no mundo do Roleplay? No Alta RP, oferecemos uma experiência imersiva onde suas histórias e decisões moldam o destino de nossa comunidade. Seja você um novato ou um veterano no universo do RP, aqui você encontrará um espaço acolhedor e vibrante para criar, explorar e viver personagens únicos. <br><br> Nosso servidor é mais do que apenas um lugar para jogar; é um palco onde a criatividade e a narrativa se encontram. Desde policiais corajosos até criminosos astutos, de empresários de sucesso a trabalhadores humildes, cada jogador tem a oportunidade de construir sua própria história e impactar o mundo ao seu redor. Aqui, as possibilidades são infinitas! <br><br> Com uma comunidade ativa, eventos emocionantes, scripts exclusivos e suporte dedicado, garantimos que cada sessão seja uma nova aventura. Junte-se a nós, conheça pessoas novas, crie histórias inesquecíveis e torne-se parte da nossa história em constante evolução.";
  urls = urls;
  connectServerRp = "Conectar";
  candidaturaURl = "Candidatar";

  navbarItems = [
    { url: 'inicio', text: 'Início' },
    { url: 'regras', text: 'Regras' },
  ];

  ngOnInit(): void {
    const sectionId = window.location.hash.substring(1);
    if (sectionId && this.navbar) {
      this.navbar.scrollToSection(sectionId);
    }
  }
}
