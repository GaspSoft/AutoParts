import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa/pessoa';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private authenticatedUser: any | null;
  constructor(private service: LoginService) {
  }

  public setAuthUser(pessoa: any) {
    this.authenticatedUser = pessoa;
  }

  public getTipoUser() {
    return this.authenticatedUser?.tipoPessoa;
  }

  public getAuthUser() {
    return this.authenticatedUser;
  }

  public isAuthenticated() {
    return this.authenticatedUser !== null;
  }

  public setToken(token: string | null) {
    if (token) {
      localStorage.setItem('authToken', token);
    }
  }

  public verificaToken() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.service.validarToken(token).subscribe(
        (pessoa: any) => {
          this.setAuthUser(pessoa);
          
        },
        (error) => {
          console.log(error);
          
        }
      );
    } else {
      console.log('Token não encontrado no localStorage.');
      
    }
  }


  public clearAuthUser() {
    localStorage.removeItem('authToken');
  }
}
