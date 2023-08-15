import { Fornecedor } from './../../model/fornecedor/fornecedor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  private funcionarioId: number = 0;

  constructor(private http: HttpClient) { }

  private url: string = 'http://localhost:8080/fornecedor';

  cadastrarFornecedor(fornecedor: Fornecedor): Observable<Fornecedor> {
    return this.http.post<Fornecedor>(this.url, fornecedor);
  }

  atualizarFornecedor(fornecedor: Fornecedor): Observable<any> {
    return this.http.put<Fornecedor>(this.url, fornecedor);
  }

  deletarFornecedor(fornecedor: Fornecedor): Observable<any> {
    return this.http.delete<any>(`${this.url}/${fornecedor.fornecedor_id}`);
  }

  getFornecedor(): Observable<Fornecedor[]>{
    return this.http.get<Fornecedor[]>(this.url);
  }

  getFuncionarioById(id: number): Observable<Fornecedor> {
    return this.http.get<Fornecedor>(`${this.url}/${id}`);
  }

  setFornecedorId(id: number) {
    this.funcionarioId = id;
  }

  getFornecedorId(): number {
    return this.funcionarioId;
  }
}
