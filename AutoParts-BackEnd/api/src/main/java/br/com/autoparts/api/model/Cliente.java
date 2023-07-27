package br.com.autoparts.api.model;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "clientes")
@Getter
@Setter
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer Cliente_id;

    private Long cpf;
    private String nome;
    private String email;
    private String senha;

    @OneToOne(cascade = CascadeType.ALL) // A opção CascadeType.ALL permite que as operações do cliente também afetem o endereço.
    @JoinColumn(name = "Enderecos_id") // O nome da coluna que é a chave estrangeira para a tabela de endereço.
    private Endereco endereco;

}
