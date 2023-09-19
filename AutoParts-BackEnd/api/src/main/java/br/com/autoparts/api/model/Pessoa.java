package br.com.autoparts.api.model;


import org.springframework.stereotype.Component;

import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

@Component
@MappedSuperclass
@Getter
@Setter
public class Pessoa {

    private Long cpf;
    private String nome;
    private String email;
    private String senha;
    private TipoPessoa tipoPessoa;
}
     