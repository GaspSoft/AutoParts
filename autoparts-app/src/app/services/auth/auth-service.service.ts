import { Injectable } from '@angular/core';
import { Pessoa } from 'src/app/model/pessoa/pessoa';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  private authenticatedUser: Pessoa | null;
  constructor() {
    this.authenticatedUser = this.getLocalStorageUser();
  }

  private getLocalStorageUser(): Pessoa | null {
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

  public clearAuthUser() {
    this.authenticatedUser = null;
    localStorage.removeItem('authenticatedUser');
  }
}
