import { TipoPessoa } from "./enumPessoa";

export class Pessoa {
  cpf?: number;
  nome?: string;
  email?: string;
  senha?: string;
  headers: any;
  tipoPessoa?: TipoPessoa;
  jwtExpiration?: Date;
}


