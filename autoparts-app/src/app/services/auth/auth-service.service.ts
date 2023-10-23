import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa/pessoa';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private authenticatedUser: any | null;
  constructor(private service: LoginService) {
    this.authenticatedUser = this.getLocalStorageUser();
    this.verificaToken();
  }

  private getLocalStorageUser(): any | null {
    const userJSON = localStorage.getItem('authenticatedUser');
    return userJSON ? JSON.parse(userJSON) : null;
  }

  public setAuthUser() {
    this.authenticatedUser = this.getLocalStorageUser();
  }

  public getTipoUser(){
    return this.authenticatedUser?.tipoPessoa;
  }

  public getAuthUser() {
    return this.authenticatedUser;
  }

  public isAuthenticated() {
    return this.authenticatedUser !== null;
  }

  public verificaToken(){
    const token = localStorage.getItem('authToken');
    if (token) {
      this.service.validarToken(token).subscribe(
        (pessoa: Pessoa) => {
          localStorage.setItem('authenticatedUser', JSON.stringify(pessoa));
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
    this.authenticatedUser = null;
    localStorage.removeItem('authenticatedUser');
    localStorage.removeItem('authToken');
  }
}
