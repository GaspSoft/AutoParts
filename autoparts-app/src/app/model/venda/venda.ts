import { Cliente } from "../cliente/cliente";
import { Pecas } from "../pecas/pecas";

export class Venda {
  vendas_id: number = 0;
  peca: Pecas = new Pecas();
  cliente: Cliente = new Cliente();
}
