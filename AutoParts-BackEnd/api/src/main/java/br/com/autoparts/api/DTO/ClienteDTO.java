package br.com.autoparts.api.DTO;

import br.com.autoparts.api.model.Endereco;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ClienteDTO {
    private Integer cliente_id;


    private Endereco endereco;
}
