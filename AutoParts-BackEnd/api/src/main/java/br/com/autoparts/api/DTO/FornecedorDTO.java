package br.com.autoparts.api.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class FornecedorDTO {
    private Integer fornecedor_id;
    private Long cnpj;
    private String nome;
}
