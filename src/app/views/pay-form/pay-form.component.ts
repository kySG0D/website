import { Component } from '@angular/core';
import { ApiMngService } from '../../services/api-mng.service';

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.scss']
})
export class PayFormComponent {
  username: string = '';
  amount!: number ;
  card: string = '';

  constructor(private apiMngService: ApiMngService){}

  onSubmit() {
    console.log('Form submitted:', { username: this.username, amount: this.amount, card: this.card });

    // this.apiMngService.updateUserMoney(this.username, this.amount);
  }
}
