
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from 'src/app/model/pessoa/pessoa';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  private url: string = 'http://localhost:8080/login';

  login(pessoa: Pessoa): Observable<HttpResponse<any>> {
    return this.http.post<any>(this.url, pessoa, { observe: 'response' });
  }
}