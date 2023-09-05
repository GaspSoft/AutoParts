import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-home',
  templateUrl: './cliente-home.component.html',
  styleUrls: ['./cliente-home.component.scss']
})
export class ClienteHomeComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  linkClienteSobre():void {
    this.router.navigate(['/cliente/sobre-cliente']);
  }

}
