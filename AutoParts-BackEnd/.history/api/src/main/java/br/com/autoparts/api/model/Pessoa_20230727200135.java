package br.com.autoparts.api.model;

import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

@MappedSuperclass
@Getter
@Setter
public class Pessoa {

    private Long cpf;
    private String nome;
    private String email;
    private String senha;
    
}
