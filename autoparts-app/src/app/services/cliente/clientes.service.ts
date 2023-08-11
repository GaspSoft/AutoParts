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
  clientesUnico = 'http://localhost:8080/cliente/1';



  cadastrar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.url, cliente);
  }
  listarUnico(id: number): Observable<any>{
    return this.http.get<any>(`${this.clientesUnico}/${id}`);
  }
}
