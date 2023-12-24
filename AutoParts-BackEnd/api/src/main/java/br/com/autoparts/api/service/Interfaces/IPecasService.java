package br.com.autoparts.api.service.Interfaces;

import java.util.List;

import org.springframework.http.ResponseEntity;

import br.com.autoparts.api.model.Fornecedor;
import br.com.autoparts.api.model.Pecas;

public interface IPecasService {
     ResponseEntity<?> cadastrarPecas(Pecas pecas);
     ResponseEntity<?> alterarPecas(Pecas p);
     List<Pecas> listarTodos();
     List<Pecas> listarPorFornecedor(Fornecedor fornecedor);
     ResponseEntity<?> buscarPeca(Integer id);
     ResponseEntity<?> deletarPeca(Integer id);
      void diminuirEstoque(Integer id);
}
