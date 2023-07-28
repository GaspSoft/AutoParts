package br.com.autoparts.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Pessoa {

    private Long cpf;
    private String nome;
    private String email;
    private String senha;
    
}
