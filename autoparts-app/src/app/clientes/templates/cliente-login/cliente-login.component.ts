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

  constructor(private service: LoginService, private router: Router) {
    this.pessoa = new Pessoa();
  }

  ngOnInit() {
  }

  login(): void{
    console.log(this.pessoa);

    this.service.login(this.pessoa).subscribe(

      response =>{
        

        console.log('AAAAAAAAAAAAA' + response)

      },
      errorResponse =>{
      }
    );
  }


  linkClienteCadastro():void {
    this.router.navigate(['/cliente/cadastrar-cliente']);
  }

}
