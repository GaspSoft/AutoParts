package br.com.autoparts.api.model;

import org.hibernate.annotations.ManyToAny;
import org.hibernate.mapping.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
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
    private String descricao;
    private Integer quantidade;
    
    @Column(name = "foto")
    @Lob
    private byte[] foto; // Campo para armazenar a imagem em formato de array de bytes
    private String marca;
    private Integer ano;
    private Double preco;
    private String modelo;

    //construct with all fields
    public Pecas(Integer pecas_id, String nome, String descricao, Integer quantidade, byte[] foto, String marca,
            Integer ano, Double preco, String modelo, Fornecedor fornecedor) {
        this.pecas_id = pecas_id;
        this.nome = nome;
        this.descricao = descricao;
        this.quantidade = quantidade;
        this.foto = foto;
        this.marca = marca;
        this.ano = ano;
        this.preco = preco;
        this.modelo = modelo;
        this.fornecedor = fornecedor;
    }

    
    public Pecas() {
    }

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fornecedores_id")
    private Fornecedor fornecedor;

    
}
