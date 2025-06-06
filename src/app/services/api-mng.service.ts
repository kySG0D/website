import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiMngService {
  private url = '';
  private urlLocal = '';


  constructor(private http: HttpClient) { }

  async updateUserMoney(id:string, value: number): Promise<void>{

    const access_token = sessionStorage.getItem('access_token')

    const body = {
      amount: value
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + access_token
    });


    this.http.post(this.url + '/' + id, body, {headers}).subscribe({
      next: (res) => console.log('Resposta:', res),
      error: (err) => console.error('Erro:', err)
    });

  }
}
