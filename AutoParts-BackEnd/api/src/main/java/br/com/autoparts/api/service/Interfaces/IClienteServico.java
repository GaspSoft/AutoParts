package br.com.autoparts.api.service.Interfaces;

import org.springframework.http.ResponseEntity;

import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Endereco;

public interface IClienteServico {
    ResponseEntity<?> cadastrarCliente (Cliente cliente);
    ResponseEntity<?> listarTodos();
    ResponseEntity<?> alterarCliente(Cliente cliente);
    ResponseEntity<?> deletarCliente(Integer id);
    ResponseEntity<?> selecionarPorID(Integer id);
    ResponseEntity<?> editarEndereco(Integer id, Endereco e);
    Cliente buscarClientePorId(Integer id) ;
}
