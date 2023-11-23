package br.com.autoparts.api.model;


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
    
    @Column(name = "foto", length = 1000485760) // tamanho 1000MB (em bytes)
    @Lob
    private byte[] foto; // Campo para armazenar a imagem em formato de array de bytes
    private String marca;
    private Integer ano;
    private Double preco;
    private String modelo;
    @Column(length = 10000000)
    private String base64;

    @ManyToOne
    @JoinColumn(name = "fornecedor_id")
    private Fornecedor fornecedor;
    // link a forncedor with id
    
}
