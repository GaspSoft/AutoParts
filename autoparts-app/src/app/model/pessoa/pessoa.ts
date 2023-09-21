export class Pessoa {
  cpf: number = 0;
  nome?: string;
  email?: string;
  senha?: string;
  tipoPessoa?: TipoPessoa
}

enum TipoPessoa {
  GERENTE,
  FUNCIONARIO,
  CLIENTE
}
