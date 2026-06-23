import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
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
