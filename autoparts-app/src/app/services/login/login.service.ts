
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/model/funcionario/funcionario';
import { Pessoa } from 'src/app/model/pessoa/pessoa';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  private url: string = 'http://localhost:8080/login';

  login(pessoa: Pessoa): Observable<string> {
    return this.http.post(this.url, pessoa, {responseType: 'text'});
  }

  validarToken(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    // Passar o cabeçalho na solicitação
    return this.http.get(this.url, { headers });
  }

}
