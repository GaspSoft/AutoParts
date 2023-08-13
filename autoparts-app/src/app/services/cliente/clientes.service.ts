import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from 'src/app/model/cliente/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }


  private url: string = 'http://localhost:8080/cliente';

  // Cadastra
  cadastrarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }

  // Listar todos
  listarClientes(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
  }

  // Lista um cliente
  listarCliente(id: number): Observable<Cliente> {
    const url = `${this.url}/${id}`;
    return this.http.get<Cliente>(url);
  }

  // Alterar dados do cliente
  alterarCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(this.url, cliente);
  }

   // Alterar dados do endereço
   alterarEndereco(id: number, cliente: Cliente): Observable<Cliente> {
    const urlEnd = `${this.url}/${id}`;
    return this.http.put<Cliente>(urlEnd, cliente);
  }
}
