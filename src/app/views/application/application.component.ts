import { Component, OnInit } from '@angular/core';
import { submitApplication } from '../../services/application.service';
import { ApplicationFormData } from '../../interfaces/application.interface';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.scss']
})
export class ApplicationComponent implements OnInit{
  loading = false;

  formData : ApplicationFormData = {
    name: '',
    age: 0,
    discord: '',
    steamId: '',
    reason: ''
  };

  ngOnInit(): void {
  }

  async handleSubmit(): Promise<void> {
    this.loading = true;

    try {
      await submitApplication(this.formData);

      alert('Candidatura enviada com sucesso!');

      // ir para homepage
      window.location.href = '/';

    } catch (error) {
      console.error(error);

      alert('Erro ao enviar candidatura. Tenta novamente.');

      // mantém os dados no form
    } finally {
      this.loading = false;
    }
  }
}
