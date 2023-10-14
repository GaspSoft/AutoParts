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

  sucessoFeedback: boolean = false;
  errorsFeedback?: string = '';
  constructor(
    private http: HttpClient,   
    private service: LoginService,
    private router: Router
  ) {
    this.pessoa = new Pessoa();
  }
  
  ngOnInit() {
  }

  login(): void {
    console.log(this.pessoa);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ${token}'
      })
    };

    this.http.post<any>('http://localhost:8080/login', this.pessoa, httpOptions).subscribe(
      (response) => {
        if (response && response.token) {
          localStorage.setItem('token', response.token);
          console.log('Token armazenado em localStorage:', response.token);
            this.router.navigate(['cliente/home']);
      
        } else {
          console.log('Token não encontrado na resposta.');
        }
      },
      (error) => {
        setTimeout(() => {
          this.sucessoFeedback = false;
        }, 7000);
        this.errorsFeedback = 'Erro! email e/ou senhas não encontrados!';
      }
    );
}
  
  linkClienteCadastro(): void {
    this.router.navigate(['/cliente/cadastrar-cliente']);
  }
}
