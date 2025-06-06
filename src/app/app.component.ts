import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
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
