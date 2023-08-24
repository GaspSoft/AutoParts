package br.com.autoparts.api.DTO;

import br.com.autoparts.api.model.Fornecedor;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PecaEstoqueDTO {
    private Integer pecas_id;
    
    private String nome;
    private String descricao;
    private Integer quantidade;
    
    private byte[] foto; 
    private String marca;
    private Integer ano;
    private Double preco;
    private String modelo;
    private String base64;

    private Fornecedor fornecedor;
}
