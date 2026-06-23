import { Component, Input } from '@angular/core';

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

  openLink(): void {
    if (!this.link) return;
    this.newPage ? window.open(this.link, '_blank') : window.location.href = this.link;
  }
}
