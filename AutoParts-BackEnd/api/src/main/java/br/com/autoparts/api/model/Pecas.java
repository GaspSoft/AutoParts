package br.com.autoparts.api.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
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
    private Boolean tipo_veiculo;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name = "fornecedores_id")
    private Integer fornecedores_id;

    
}
