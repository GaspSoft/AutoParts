import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venda } from 'src/app/model/venda/venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient) { }
  private url: string = 'http://localhost:8080/vendas';

  cadastrarVenda(venda: Venda): Observable<any>{
    return this.http.post(`${this.url}`, venda);
  }

}
