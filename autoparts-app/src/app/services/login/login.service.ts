  import { HttpClient, HttpHeaders } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { Pessoa } from 'src/app/model/pessoa/pessoa';

  @Injectable({
    providedIn: 'root'
  })
  export class LoginService {

    constructor(private http: HttpClient) { }
    private url: string = 'http://localhost:8080/login';

      login(email: string, senha: string): Observable<any> {
    const requestBody = { email: email, senha: senha };

    // Defina os cabeçalhos, incluindo o cabeçalho de autorização
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
 
    });

    // Envia a solicitação POST com email, senha e cabeçalhos configurados
    return this.http.post(this.url, requestBody, { headers: headers });
  }
}
  