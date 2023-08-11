import { Pessoa } from "../pessoa/pessoa";

export class Funcionario extends Pessoa {
  funcionario_id?: number;
  cargoFuncionario?: boolean;
}
