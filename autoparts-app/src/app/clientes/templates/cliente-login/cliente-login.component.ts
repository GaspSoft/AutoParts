import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-login',
  templateUrl: './cliente-login.component.html',
  styleUrls: ['./cliente-login.component.scss']
})
export class ClienteLoginComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  linkClienteCadastro():void {
    this.router.navigate(['/cliente/cadastrar-cliente']);
  }

}
