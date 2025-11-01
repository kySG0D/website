import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { SnowService } from './services/snow.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent{
  isHomeRoute: boolean = false;
  private audio: HTMLAudioElement = new Audio('../../assets/mp3/bg_sound.mp3');

  constructor(
    private router: Router,
    private snow: SnowService
  ) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.isHomeRoute = this.router.url === '/';
    });
  }

  ngOnInit(): void {
    this.audio.loop = true;
    this.audio.volume = 0.3;

    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();

    this.audio.play().catch((error) => {
      console.warn('Reprodução automática bloqueada pelo navegador:', error);
    });

    const isWinterSeason = (month === 12 && day >= 1) || (month === 1 && day <= 7);

    if (isWinterSeason) {
      this.snow.start();
    }
  }
  
  ngOnDestroy() {
    this.snow.stop();
  }
}
