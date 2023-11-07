package br.com.autoparts.api.service.Interfaces;

import org.springframework.http.ResponseEntity;

import br.com.autoparts.api.model.Vendas;

public interface IVendaServico {
    ResponseEntity<?> cadastrarVenda(Vendas venda);
    ResponseEntity<?> listarVendas();
    ResponseEntity<?> listarClientePorId(Integer id);

}
