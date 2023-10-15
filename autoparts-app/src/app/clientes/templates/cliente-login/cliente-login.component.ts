import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/model/funcionario/funcionario';
import { Pessoa } from 'src/app/model/pessoa/pessoa';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.scss']
})
export class ClienteLoginComponent{
  pessoa: Pessoa;

  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';
  constructor(
    private service: LoginService,
    private router: Router
  ) {
    this.pessoa = new Pessoa();
  }

  login(){
    this.service.login(this.pessoa).subscribe((token:string) =>{
      localStorage.setItem('authToken', token);
      this.validarToken();
    });
  }


  validarToken() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.service.validarToken(token).subscribe(
        (funcionario: Funcionario) => {
          console.log(funcionario);
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      // Lida com o caso em que o token não está disponível no localStorage
      console.log('Token não encontrado no localStorage.');
    }
  }


  linkClienteCadastro(): void {
    this.router.navigate(['/cliente/cadastrar-cliente']);
  }
}
