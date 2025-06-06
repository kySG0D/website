import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pay-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pay-form.component.html',
  styleUrl: './pay-form.component.scss'
})
export class PayFormComponent {
  username: string = '';
  amount: string = '';
  card: string = '';

  onSubmit() {
    console.log('Form submitted:', { username: this.username, amount: this.amount, card: this.card });
  }
}
