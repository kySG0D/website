import { Component, AfterViewInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ApiMngService } from '../../services/api-mng.service';

declare var paypal: any;

@Component({
  selector: 'app-pay-form',
  templateUrl: './pay-form.component.html',
  styleUrls: ['./pay-form.component.scss']
})
export class PayFormComponent implements AfterViewInit, OnDestroy {
  username: string = '';
  amount: number | null = null;
  paypalRendered = false;
  private paymentBaseUrl = 'https://www.paypal.me/altarppt';

  valuesOptions = [
    { label: '10€ - 100.000$', amount: 10, ingameAmount: 100000 },
    { label: '20€ - 300.000$', amount: 20, ingameAmount: 300000 },
    { label: '30€ - 500.000$', amount: 30, ingameAmount: 500000 },
    { label: '50€ - 1.000.000$', amount: 50, ingameAmount: 1000000 },
    { label: '100€ - 2.500.000$', amount: 100, ingameAmount: 2500000 }
  ];

  private paypalButtonsInstance: any;

  constructor(private apiMngService: ApiMngService, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.tryRenderPaypalButton();
  }

  ngOnDestroy() {
    this.destroyPaypalButton();
  }

  onAmountChange(event: any) {
    this.amount = event.value ? Number(event.value) : null;
    console.log(this.amount)
  }

  onUsernameChange(event: any) {
    this.username = (event.target as HTMLInputElement).value;
    console.log(this.username)
  }

  private tryRenderPaypalButton() {
    // Destrói botão antigo se existir
    this.destroyPaypalButton();

    // Só renderiza se os campos estiverem preenchidos
    if (this.username && this.amount !== null) {
      const container = document.getElementById('paypal-button-container');
      if (container) {
        this.paypalButtonsInstance = paypal.Buttons({
          style: {
            color: 'gold',
            shape: 'pill',
            label: 'pay',
            height: 40
          },
          createOrder: (data: any, actions: any) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: this.amount!.toFixed(2)
                }
              }]
            });
          },
          onApprove: (data: any, actions: any) => {
            return actions.order.capture().then((details: any) => {
              console.log('Pagamento concluído com sucesso por:', details.payer.name.given_name);
              this.apiMngService.updateUserMoney(this.username, this.amount!);
            });
          },
          onCancel: () => {
            console.log('Pagamento cancelado');
          },
          onError: (err: any) => {
            console.error('Erro no pagamento', err);
          }
        });

        this.paypalButtonsInstance.render('#paypal-button-container');
        this.paypalRendered = true;
      }
    } else {
      this.paypalRendered = false;
    }
  }

  buildPaymentUrl(): void {
    window.open(this.paymentBaseUrl + `/${this.amount}`, '_blank');
  }
  
  private destroyPaypalButton() {
    if (this.paypalButtonsInstance) {
      // A API do PayPal não tem método oficial para destruir o botão,
      // mas podemos limpar o container para evitar duplicações.
      const container = document.getElementById('paypal-button-container');
      if (container) {
        container.innerHTML = '';
      }
      this.paypalButtonsInstance = null;
      this.paypalRendered = false;
    }
  }
}
