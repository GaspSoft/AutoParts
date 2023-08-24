package br.com.autoparts.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.autoparts.api.model.Vendas;
import br.com.autoparts.api.service.VendaServico;


@CrossOrigin(origins = "*")
@RestController
public class VendaControler {
    @Autowired
    private VendaServico servico;

    @PostMapping("/venda")
    public ResponseEntity<?> cadastrarVenda(@RequestBody List<Vendas> vendas){
        return servico.cadastrarVenda(vendas);
    }
}
