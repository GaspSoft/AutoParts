package br.com.autoparts.api.controller.Interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.autoparts.api.model.Funcionario;

public interface IFuncionarioController {
    ResponseEntity<?> cadastrarFuncionario(@RequestBody Funcionario f);
    ResponseEntity<?> alterarFuncionario(@RequestBody Funcionario f);
    ResponseEntity<?> listarFuncionarios();
    ResponseEntity<?> selecionarioPorId(@PathVariable Integer id);
    ResponseEntity<?> deletaPorId(@PathVariable Integer id);
}
