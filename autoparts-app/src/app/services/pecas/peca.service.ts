import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pecas } from 'src/app/model/pecas/pecas';
@Injectable({
  providedIn: 'root'
})
export class PecaService {

  constructor(private http: HttpClient) { }

  private url: string = 'http://localhost:8080/pecas/'

  cadastrarPeca(peca: Pecas): Observable<Pecas>{
    return this.http.post<Pecas>(this.url, peca);
  }
}
