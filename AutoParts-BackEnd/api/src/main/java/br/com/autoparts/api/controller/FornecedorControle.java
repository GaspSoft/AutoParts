package br.com.autoparts.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import br.com.autoparts.api.model.Fornecedor;
import br.com.autoparts.api.service.FornecedorServico;

@CrossOrigin(origins = "*")
@RestController
public class FornecedorControle {
    @Autowired
    private FornecedorServico servico;

    @PostMapping("/fornecedor")
    public ResponseEntity<?> cadastrarFornecedor(@RequestBody Fornecedor f){
        return servico.cadastrarFornecedor(f);
    }
    @GetMapping("/fornecedor")
    public List<Fornecedor> todosFornecedores(){
        return servico.listarTodos();
    }
}
