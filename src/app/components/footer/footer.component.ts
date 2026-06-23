import { Component } from '@angular/core';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  footerCopyRight = " Alta Roleplay. Todos os direitos reservados";

  // linksSection : {url:string, text:string}[] = [
  //   {url: "/terms-conditions", text: "Termos e Condições"},
  //   {url: "/privacy-policy", text: "Política de Privacidade"}
  // ];
}
