import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.scss']
})
export class ClienteLoginComponent implements OnInit {
  email: string = "dajasdkjdasdasjk@hotmail.com";
  senha: string = "asda";

  constructor(
    private service: LoginService,
    private router: Router
  ) {}

  ngOnInit() {}

  login(): void {
    this.service.login(this.email, this.senha)
      .subscribe(
        (response) => {
          // Lida com a resposta da solicitação aqui (por exemplo, redireciona ou mostra mensagem de sucesso)
          console.log("Resposta da API:", response);
          //this.router.navigate(['https://www.google.com.br/']); // Redireciona após o login bem-sucedido
        },
        (error) => {
          // Lida com erros da solicitação aqui (por exemplo, mostra mensagem de erro)
          console.error("Erro:", error);
        }
      );
  }

  linkClienteCadastro(): void {
    this.router.navigate(['/cliente/cadastrar']);
  }
}
