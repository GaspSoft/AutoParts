import { Pessoa } from "../person/pessoa";

export class Funcionario extends Pessoa {
  funcionario_id?: number;
  cargo_funcionario?: boolean;
}
