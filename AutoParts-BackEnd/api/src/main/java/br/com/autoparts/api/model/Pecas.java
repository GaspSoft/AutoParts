package br.com.autoparts.api.model;

import org.hibernate.annotations.ManyToAny;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
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
    
    @Column(name = "foto")
    private byte[] foto; // Campo para armazenar a imagem em formato de array de bytes
    private String marca;
    private Integer ano;
    private Double preco;
    private String modelo;
    
    
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fornecedores_id")
    private Fornecedor fornecedor;

    
}
