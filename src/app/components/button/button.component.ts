import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() btnType: string | 'normal' = '';
  @Input() link: string = '';
  @Input() buttonText: string = 'Open Link';

  openLink(): void {
    if (this.link) {
      window.open(this.link, '_blank');
    }
  }
}
