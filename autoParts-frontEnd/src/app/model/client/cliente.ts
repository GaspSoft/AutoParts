import { Endereco } from "../address/endereco";
import { Pessoa } from "../person/pessoa";

export class Cliente extends Pessoa {
  cliente_id?: number;
  endereco?: Endereco
}
