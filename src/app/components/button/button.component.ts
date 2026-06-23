import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() btnType: string | 'normal' = '';
  @Input() link: string = '';
  @Input() newPage: boolean = true;
  @Input() buttonText: string = 'Open Link';

  constructor(private router: Router) {}

  openLink(): void {
    if (!this.link) return;
    if(this.newPage){ 
      window.open(this.link, '_blank')
      return;
    }
    
    this.router.navigate([this.link]);
  }
}
