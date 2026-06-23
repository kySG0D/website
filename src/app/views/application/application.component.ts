import { Component, OnInit } from '@angular/core';
import { submitApplication } from '../../services/application.service';
import { ApplicationFormData } from '../../interfaces/application.interface';

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
    console.log('entrou')
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

    console.log('is valid',this.formValid)
    console.log(allFilled)
    console.log(requiredFields)
  }

  async handleSubmit(): Promise<void> {
    this.isLoading = true;

    try {
      const payload = {
        ...this.formData,
        howFoundServer:
          this.formData.howFoundServer === 'Outro'
            ? this.howFoundServerCustom
            : this.formData.howFoundServer
      };

      await submitApplication(payload);

      alert('Candidatura enviada com sucesso!');
      // window.location.href = '/';
    } catch (error) {
      console.error(error);
      alert('Erro ao enviar candidatura.');
    } finally {
      this.isLoading = false;
    }
  }
}
