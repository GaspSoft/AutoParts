import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venda } from 'src/app/model/venda/venda';

@Injectable({
  providedIn: 'root'
})
export class VendaService {

  constructor(private http: HttpClient) { }
  private url: string = 'http://localhost:8080/venda';

  cadastrarVenda(venda: Venda): Observable<any>{
    return this.http.post(`${this.url}`, venda);
  }

  listarHistorico(): Observable<Venda[]>{
    return this.http.get<Venda[]>(this.url);
  }

  listarVendaPorId(id: number): Observable<Venda[]>{
    return this.http.get<Venda[]>(`${this.url}/${id}`);
  }
}
