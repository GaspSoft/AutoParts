import { Fornecedor} from "../fornecedor/fornecedor"

export class Pecas {
    pecas_id?: number;
    nome?: string;
    descricao?: string;
    quantidade?: number;
    foto?: Blob; 
    marca?: string;
    ano?: number;
    preco?: number;
    modelo?: string;
    
    fornecedor: Fornecedor = new Fornecedor();

}
