import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) { }

  buscarCEP(cep: number) {
    return this.http.get(`viacep.com.br/ws/${cep}/json/`)
  }
}
