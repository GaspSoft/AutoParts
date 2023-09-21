import { Fornecedor} from "../fornecedor/fornecedor"

export class Pecas {
    pecas_id: number = 0;
    nome?: string;
    descricao?: string;
    quantidade: number = 0;
    foto?: Blob;
    base64?: string;
    marca?: string;
    ano?: number;
    preco?: number;
    modelo?: string;

    fornecedor: Fornecedor = new Fornecedor();

}
