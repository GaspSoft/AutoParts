import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pecas } from 'src/app/model/pecas/pecas';
@Injectable({
  providedIn: 'root'
})
export class PecaService {

  constructor(private http: HttpClient) { }

  private pecaId: number = 0;

  private url: string = 'http://localhost:8080/pecas/'

  cadastrarPeca(peca: Pecas): Observable<Pecas>{
    return this.http.post<Pecas>(this.url, peca);
  }

  listarPecas(): Observable<Pecas[]>{
    return this.http.get<Pecas[]>(this.url);
  }

  listarPecasPorId(id:number): Observable<Pecas>{
    return this.http.get<Pecas>(`${this.url}/${id}`);
  }

  atualizarPeca(peca: Pecas): Observable<Pecas>{
    return this.http.put<Pecas>(this.url, peca);
  }

  deletarPeca(id: number): Observable<void>{
    return this.http.delete<void>(this.url + id);
  }

  setPecaId(id: number) {
    this.pecaId = id;
  }

  getPecaId(): number {
    return this.pecaId;
  }
}
