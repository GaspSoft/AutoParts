import { Endereco } from "../endereco/endereco";
import { Pessoa } from "../pessoa/pessoa";

export class Cliente extends Pessoa {
  cliente_id?: number;
  endereco?: Endereco;
}
