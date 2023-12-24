package br.com.autoparts.api.controller.Interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.autoparts.api.model.Cliente;
import br.com.autoparts.api.model.Endereco;

public interface IClienteController {
    ResponseEntity<?> cadastrarCliente(@RequestBody Cliente c);
    ResponseEntity<?> alterarCliente(@RequestBody Cliente c);
    ResponseEntity<?> todosClientes();
    ResponseEntity<?> deletarCliente(@PathVariable Integer cliente_id);
    ResponseEntity<?> selecionarPorId(@PathVariable Integer cliente_id);
    ResponseEntity<?> alterarEndereco(@PathVariable Integer cliente_id, @RequestBody Endereco e);
}
