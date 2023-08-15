import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Funcionario } from 'src/app/model/funcionario/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionariosService {

  private funcionarioId: number = 0;

  constructor(private http: HttpClient) { }

  private url: string = 'http://localhost:8080/funcionario';

  cadastrar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(this.url, funcionario);
  }

  atualizarFuncionario(funcionario: Funcionario): Observable<any> {
    return this.http.put<Funcionario>(this.url, funcionario);
  }

  deletarFuncionario(funcionario: Funcionario): Observable<any> {
    return this.http.delete<any>(`${this.url}/${funcionario.funcionario_id}`);
  }

  getFuncionarios(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.url);
  }

  getFuncionarioById(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.url}/${id}`);
  }

  setFuncionarioId(id: number) {
    this.funcionarioId = id;
  }

  getFuncionarioId(): number {
    return this.funcionarioId;
  }
}
