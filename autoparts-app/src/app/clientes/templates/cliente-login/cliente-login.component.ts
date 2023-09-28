import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { isEmpty } from 'rxjs';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.scss']
})
export class ClienteLoginComponent implements OnInit {
  email: string;
  senha: string;

  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';
  constructor(
    private service: LoginService,
    private router: Router
  ) {
    this.email = "";
    this.senha = "";
  }

  ngOnInit() {}

  login(): void {
    this.service.login(this.email, this.senha)
      .subscribe(
        (response) => {
          // Lida com a resposta da solicitação aqui (por exemplo, redireciona ou mostra mensagem de sucesso)
          if(response.mensagem == "Autorizado"){
            this.router.navigate(['cliente/home']);
          }
          //this.router.navigate(['https://www.google.com.br/']); // Redireciona após o login bem-sucedido
        },
        (error) => {
          // Lida com erros da solicitação aqui (por exemplo, mostra mensagem de erro)
          this.sucessoFeedback = true;
          setTimeout(() => {
            this.sucessoFeedback = false;
          }, 7000);
          this.errorsFeedback = 'Erro! email e/ou senhas não encontrados!';
        }
      );
  }

  linkClienteCadastro(): void {
    this.router.navigate(['/cliente/cadastrar']);
  }
}
