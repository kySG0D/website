import { Component, OnInit } from '@angular/core';
import { submitApplication } from '../../services/application.service';
import { ApplicationFormData } from '../../interfaces/application.interface';
import { LoadingService } from '../../services/loading.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit{
  
  isLoading = false;
  formValid = false;
  emailTouched = false;
  emailInvalid = false; 

  formData : ApplicationFormData = {
    name : '',
    discord : '',
    email : '',
    steamId : '',
    icName : '',
    icHistory : '',
    objectives : '',
    howFoundServer : '',
  };

  howFoundServerOptions = [
    'Tik Tok',
    'Insta',
    'Twitch',
    'Amigos',
    'Outro',
  ]

  howFoundServerCustom: string = '';

  
  constructor(private modalService: ModalService, private loadingService: LoadingService) {}

  ngOnInit(): void {
  }

  setHowFound(value: string) {
    this.formData.howFoundServer = value;
  }

  onEmailChange(): void { 
    if(this.formData.email.length === 0){
      return;
    }

    this.emailInvalid = !this.isEmailValid(this.formData.email);

    this.updateFormValidity()
  }

  isEmailValid(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  }

  onEmailBlur(): void {
    this.emailTouched = true;
  }

  updateFormValidity(): void {
    const f = this.formData;

    const howFound =
      f.howFoundServer === 'Outro'
        ? (this.howFoundServerCustom || '').trim()
        : (f.howFoundServer || '').trim();

    const requiredFields = [
      f.name,
      f.discord,
      f.email,
      f.steamId,
      f.icName,
      f.icHistory,
      f.objectives,
      howFound
    ];

    const allFilled = requiredFields.every(x => x && x.trim().length > 0);

    this.formValid = allFilled && this.isEmailValid(f.email);
  }

  async handleSubmit(): Promise<void> {
    console.log('submit')
    this.loadingService.show();
    this.isLoading = true;

    try {
      const payload = {
        ...this.formData,
        howFoundServer:
          this.formData.howFoundServer === 'Outro'
            ? this.howFoundServerCustom
            : this.formData.howFoundServer
      };

      const responde = await submitApplication(payload);

      if(responde.ok) {
        this.loadingService.hide();
        this.modalService.open({
          title: 'Candidatura enviada com sucesso!',
          message: 'A nossa equipa irá avaliar a candidatura e entrar em contacto contigo o mais breve possivel!',
          onClose: () => {
            window.location.href = '/';
          }
        });
      }

    } catch (error) {
      console.error(error);
      this.loadingService.hide();
      this.modalService.open({
        title: 'Algo correu mal',
        message: 'Se o erro presistir entra em contacto diretamente com a nossa equipa através das redes sociais! Obrigado',
        onClose: () => {
        }
      });
    } finally {
      this.isLoading = false;
    }
  }
}
