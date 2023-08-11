import { Component } from '@angular/core';
import { ClientesService } from 'src/app/services/cliente/clientes.service';

@Component({
  selector: 'app-cliente-form-perfil',
  templateUrl: './cliente-form-perfil.component.html',
  styleUrls: ['./cliente-form-perfil.component.scss']
})
export class ClienteFormPerfilComponent {
  cliente: any | undefined;

  constructor(private contatosService: ClientesService ){}
  ngOnInit(): void {
    this.listarCliente(1); // Replace with the desired ID
  }

  listarCliente(id: number) {
    this.contatosService.listarUnico(id).subscribe(res => this.cliente = res); // Assign the single object
  }

}