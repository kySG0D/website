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
  isChristmas: boolean = false;
  defaultAudio: string = '../../assets/mp3/bg_sound.mp3';
  christmasAudio: string = '../../assets/mp3/jingle_bells.mp3';

  private audio = new Audio();

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

  checkIfItsChristmas(): void{
    const today = new Date();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    this.isChristmas = (month >= 12) || (month <= 1 && day <= 7);
  }

  ngOnInit(): void {
    this.checkIfItsChristmas();

    if (this.isChristmas) {
      this.snow.start();
      this.audio.src = this.christmasAudio;
    }else{
      this.audio.src = this.defaultAudio;
    }

    this.audio.loop = true;
    this.audio.volume = 0.3;
    this.audio.preload = 'auto';

    this.audio.play().catch((error) => {
      console.warn('Reprodução automática bloqueada pelo navegador:', error);
    });
  }
  
  ngOnDestroy() {
    this.snow.stop();
    this.audio.pause();
  }
}
