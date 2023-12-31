package br.com.autoparts.api.controller.Interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.autoparts.api.model.Fornecedor;

public interface IFornecedorController {
    ResponseEntity<?> cadastrarFornecedor(@RequestBody Fornecedor f);
    List<Fornecedor> todosFornecedores();
    ResponseEntity<?> selecionarPorId(@PathVariable Integer fornecedor_id);
    ResponseEntity<?> deletarFornecedor(@PathVariable Integer fornecedor_id);
    ResponseEntity<?> alterarFornecedor(@RequestBody Fornecedor f);
}
