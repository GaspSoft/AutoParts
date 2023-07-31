package br.com.autoparts.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import br.com.autoparts.api.model.Funcionario;
import br.com.autoparts.api.service.FuncionarioServico;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;


@RestController
public class FuncionarioControle {
    @Autowired
    FuncionarioServico funcionario;

    @PostMapping("/cadastroFuncionario")
    public ResponseEntity<?> cadastrarFuncionario(@RequestBody Funcionario f) {
        
        return funcionario.cadastrarFuncionario(f);
    }
    @PutMapping("/alterarFuncionario")
    public ResponseEntity<?> alterarFuncionario(@RequestBody Funcionario f) {
    
        
        return funcionario.alterarFuncionario(f);
    }


}
