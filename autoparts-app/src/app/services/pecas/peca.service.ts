import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pecas } from 'src/app/model/pecas/pecas';

@Injectable({
  providedIn: 'root'
})
export class PecaService {

  constructor(private http: HttpClient) { }

  private pecaId: number = 0;
  private url: string = 'http://localhost:8080/pecas';

  cadastrarPeca(peca: Pecas, foto: File): Observable<any> {
    const formData = new FormData();
    formData.append('peca', JSON.stringify(peca));
    formData.append('foto', foto, foto.name);

    return this.http.post(`${this.url}`, formData);
  }

  atualizarFuncionario(peca: Pecas): Observable<any> {
    return this.http.put<Pecas>(this.url, peca);
  }

  listarPecas(): Observable<Pecas[]> {
    return this.http.get<Pecas[]>(this.url);
  }

  listarPecasPorId(id: number): Observable<Pecas> {
    return this.http.get<Pecas>(`${this.url}/${id}`);
  }

  atualizarPeca(peca: Pecas, foto: File): Observable<any> {
    const formData = new FormData();
    formData.append('peca', JSON.stringify(peca));
    formData.append('foto', foto, foto.name);

    return this.http.post(`${this.url}`, formData);
  }

  deletarPeca(peca: Pecas): Observable<any> {
    return this.http.delete<any>(`${this.url}/${peca.pecas_id}`);
  }

  getPecas(): Observable<Pecas[]>{
    return this.http.get<Pecas[]>(this.url);
  }

  getPecaById(id: number): Observable<Pecas> {
    return this.http.get<Pecas>(`${this.url}/${id}`)
  }

  setPecaId(id: number) {
    this.pecaId = id;
  }

  getPecaId(): number {
    return this.pecaId;
  }
}
