package br.com.autoparts.api.service.Interfaces;

import org.springframework.http.ResponseEntity;

import br.com.autoparts.api.model.Fornecedor;

public interface IFornecedorServico {
    ResponseEntity<?> cadastrarFornecedor(Fornecedor fornecedor);
    ResponseEntity<?> listarTodos();
    ResponseEntity<?> deletarFornecedor(Integer id);
    ResponseEntity<?> selecionarPorID(Integer id);
    ResponseEntity<?> alterarFornecedor(Fornecedor fornecedor);
}
