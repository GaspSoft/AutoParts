export class Pessoa {
  cpf?: number;
  nome?: string;
  email?: string;
  senha?: string;
  headers: any;
  tipoPessoa?: TipoPessoa
}

enum TipoPessoa {
  GERENTE,
  FUNCIONARIO,
  CLIENTE
}
