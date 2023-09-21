package br.com.autoparts.api.controller.Interfaces;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;

import br.com.autoparts.api.model.Vendas;

public interface IVendaController {
    public ResponseEntity<?> cadastrarVenda(@RequestBody Vendas venda);
    ResponseEntity<?> listarVenda();
}
