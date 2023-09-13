import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente/cliente';
import { Endereco } from 'src/app/model/endereco/endereco';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }


  private url: string = 'http://localhost:8080/cliente';

  cadastrarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }

  listarClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.url);
  }

  listarCliente(id: number): Observable<Cliente> {
    const url = `${this.url}/${id}`;
    return this.http.get<Cliente>(url);
  }

  alterarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.url, cliente);
  }

  alterarEndereco(id: number, endereco: Endereco): Observable<Endereco> {
    const urlEnd = `${this.url}/${id}`;
    return this.http.put<Endereco>(urlEnd, endereco);
  }

  excluirCliente(id: number): Observable<Cliente> {
    const url = `${this.url}/${id}`;
    return this.http.delete<Cliente>(url);
  }

  getCliente(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }
}
