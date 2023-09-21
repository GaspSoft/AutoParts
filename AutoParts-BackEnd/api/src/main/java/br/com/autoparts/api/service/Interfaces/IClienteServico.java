package br.com.autoparts.api.service.Interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;

import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Endereco;

public interface IClienteServico {
    ResponseEntity<?> cadastrarCliente (Cliente cliente);
    List<Cliente> listarTodos();
    ResponseEntity<?> alterarCliente(Cliente cliente);
    ResponseEntity<?> deletarCliente(Integer cliente_id);
    ResponseEntity<?> selecionarPorID(Integer cliente_id);
    ResponseEntity<?> editarEndereco(Integer cliente_id, Endereco e);
    Cliente buscarClientePorId(Integer cliente_id) ;
}
