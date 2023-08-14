package br.com.autoparts.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.autoparts.api.model.Pecas;
import br.com.autoparts.api.service.PecasServico;

@CrossOrigin(origins = "*")
@RestController
public class PecasControle {
    @Autowired
    private PecasServico servico;

    @PostMapping("/pecas")
    public ResponseEntity<?> cadastrarPecas(@RequestBody Pecas p){
        return servico.cadastrarPecas(p);
    }
}
