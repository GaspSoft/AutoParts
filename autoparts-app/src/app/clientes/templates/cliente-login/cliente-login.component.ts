import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Funcionario } from 'src/app/model/funcionario/funcionario';
import { TipoPessoa } from 'src/app/model/pessoa/enumPessoa';
import { Pessoa } from 'src/app/model/pessoa/pessoa';
import { AuthServiceService } from 'src/app/services/auth/auth-service.service';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.scss']
})
export class ClienteLoginComponent implements OnInit{
  pessoa: Pessoa;

  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';
  constructor(
    private service: LoginService,
    private router: Router,
    private authService: AuthServiceService
  ) {
    this.pessoa = new Pessoa();
  }
  ngOnInit(): void {
    this.validarToken();
  }

  login() {
    this.service.login(this.pessoa).subscribe(
      (token: string) => {
        localStorage.setItem('authToken', token);
        this.validarToken();
      },
      (error) => {
        this.pessoa = new Pessoa();
        this.sucessoFeedback = true;
        this.errorsFeedback = 'Erro! email e/ou senhas não encontrados!';
        setTimeout(() => {
          this.sucessoFeedback = false;
          this.errorsFeedback = ''; // Limpa a mensagem de erro
        }, 7000);
      }
    );
  }

  validarToken() {
    const token = localStorage.getItem('authToken');
    if (token) {
      this.service.validarToken(token).subscribe(
        (pessoa: Pessoa) => {
          localStorage.setItem('authenticatedUser', JSON.stringify(pessoa));
          this.authService.setAuthUser();

          const tipoUser = this.authService.getTipoUser();
          if (tipoUser == 'CLIENTE') {
            this.router.navigate(['cliente/home']);
          } else {
            this.router.navigate(['funcionario']);
          }
        },
        (error) => {
          console.log(error);
          this.pessoa = new Pessoa();
          this.sucessoFeedback = true;
          this.errorsFeedback = 'Erro! algum erro ao validar seu login ocorreu!';
          setTimeout(() => {
            this.sucessoFeedback = false;
            this.errorsFeedback = ''; // Limpa a mensagem de erro
          }, 7000);
        }
      );
    } else {
      // Outras ações, se necessário
    }
  }



  linkClienteCadastro(): void {
    this.router.navigate(['/cliente/cadastrar']);
  }
}
