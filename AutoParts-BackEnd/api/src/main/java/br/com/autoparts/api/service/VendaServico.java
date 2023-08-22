package br.com.autoparts.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.autoparts.api.model.Retorno;
import br.com.autoparts.api.model.Vendas;
import br.com.autoparts.api.repository.VendasRepositorio;


@Service
public class VendaServico {
    @Autowired
    private Retorno retorno;

    @Autowired
    private VendasRepositorio vendaRepositorio;

    @Autowired
    private PecasServico pecaServico;

    @Autowired
    private ClienteServico clienteServico;

    @Autowired
    private FuncionarioServico funcionarioServico;

    @Autowired
    private FornecedorServico fornecedorServico;

    private ResponseEntity<?> cadastrarVenda(Vendas v){
        if (v.getCliente().getCliente_id() != null && v.getFuncionario().getFuncionario_id() != null &&
             v.getPeca().getPecas_id() != null && v.getPeca().getQuantidade() != null && 
             v.getPeca().getPreco() != null) {
            
            // valide para que a quantidade de peças seja maior que 0

            
            retorno.setMensagem("Venda cadastrada com sucesso.");
            vendaRepositorio.save(v);
            return new ResponseEntity<>(retorno, HttpStatus.CREATED);
        } else {
            retorno.setMensagem("Um ou mais campos da venda são nulos.");
            return ResponseEntity.badRequest().body(retorno);
        }
    }

    private Boolean diminuirEstoque(Integer pecas_id){
        
    }
}
