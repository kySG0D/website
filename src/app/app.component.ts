import { Component } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { filter } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, CommonModule]
})
export class AppComponent{
  isHomeRoute: boolean = false;
  private audio: HTMLAudioElement = new Audio('../../assets/mp3/bg_sound.mp3');

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isHomeRoute = this.router.url === '/';
    });
  }

  ngOnInit(): void {
    this.audio.loop = true;
    this.audio.volume = 0.3;

    this.audio.play().catch((error) => {
      console.warn('Reprodução automática bloqueada pelo navegador:', error);
    });

  }
  
}
