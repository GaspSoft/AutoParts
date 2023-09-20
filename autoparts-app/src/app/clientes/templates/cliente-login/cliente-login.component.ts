import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pessoa } from 'src/app/model/pessoa/pessoa';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.scss']
})
export class ClienteLoginComponent implements OnInit {
  pessoa: Pessoa;

  constructor(
    private http: HttpClient,   
    private service: LoginService,
    private router: Router) {
    this.pessoa = new Pessoa();
  }
  
  ngOnInit() {
  }

  
  login(): void {
    console.log(this.pessoa);
  
    const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  
      this.http.post<any>('http://localhost:8080/login', this.pessoa, httpOptions).subscribe(
      response => {
        console.log(12323)

        const authToken = response.headers.get('Authorization:');
  
        if (authToken) {
          console.log(1)
          // Faça algo com o token, como armazená-lo em algum lugar
          console.log('Token recebido:', authToken);
  
          // Você pode armazenar o token em localStorage, sessionStorage ou em um serviço
          // Exemplo de armazenamento em localStorage:
          localStorage.setItem('token', authToken);
          console.log(12)

          // Redirecione ou execute outras ações após receber o token
          this.router.navigate(['/http://localhost:4200/']);

        } else {
        

          console.log('Token não encontrado no cabeçalho da resposta.');
        }
      },
      errorResponse => {
        // Lida com erros, se houver algum.
      }
    );
  }
  
  linkClienteCadastro():void {
    this.router.navigate(['/cliente/cadastrar']);
  }

}