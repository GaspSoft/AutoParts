package br.com.autoparts.api.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "pecas")
@Getter
@Setter
public class Pecas {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer pecas_id;
    
    private String nome;
    private String descrição;
    private Integer quantidade;
    //foto
    private String marca;
    private Integer ano;
    private Double preco;
    private String modelo;
    private Boolean tipo_veiculo;
    private Integer fornecedores_id;

    
}
