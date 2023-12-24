package br.com.autoparts.api.service.Interfaces;

import org.springframework.http.ResponseEntity;

import br.com.autoparts.api.model.Fornecedor;

public interface IFornecedorServico {
    ResponseEntity<?> cadastrarFornecedor(Fornecedor f);
    ResponseEntity<?> listarTodos();
    ResponseEntity<?> deletarFornecedor(Integer fornecedor_id);
    ResponseEntity<?> selecionarPorID(Integer fornecedor_id);
    ResponseEntity<?> alterarFornecedor(Fornecedor f);
}
