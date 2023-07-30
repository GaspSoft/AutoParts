package br.com.autoparts.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.autoparts.api.model.Funcionario;
import br.com.autoparts.api.service.FuncionarioServices;

@RestController
public class FuncionarioControle {
    @Autowired
    FuncionarioServices servico;
@PostMapping("/funcionario")
        public ResponseEntity<?> cadastrarFuncionario(Funcionario func){
          return servico.cadastrarFuncionario(func);
    }
@PutMapping("/funcionario")
    public ResponseEntity<?> alterarFuncionario (Funcionario func){
        return servico.alterarFuncionario(func);
    }    








}
